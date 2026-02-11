import{j as e}from"./index-D1bhWpF_.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as a}from"./ShellFileLoader-izSp1ZwA.js";import"./prism-B_z3Scul.js";const i=`#!/bin/bash
# backup_project.sh – Automated, configurable backup with rotation
# Usage: ./backup_project.sh [-c config] [-v] [-d] [--help]

set -euo pipefail
IFS=$'\\n\\t'

# ---------- Defaults ----------
CONFIG_FILE="./backup_config.conf"
VERBOSE=0
DRY_RUN=0
LOG_FILE="/var/log/backup_project.log"  # fallback; config may override

# ---------- Functions ----------
log_info() {
    echo "[INFO] $(date '+%Y-%m-%d %H:%M:%S') - $*" | tee -a "$LOG_FILE"
}
log_error() {
    echo "[ERROR] $(date '+%Y-%m-%d %H:%M:%S') - $*" >&2 | tee -a "$LOG_FILE" >&2
}
die() {
    log_error "$*"
    exit 1
}
usage() {
    cat <<EOF
Usage: $0 [OPTIONS]

Options:
  -c FILE    Configuration file (default: $CONFIG_FILE)
  -v         Verbose output
  -d         Dry run – show what would be done, no actual changes
  --help     Show this help
EOF
    exit 0
}

# ---------- Parse Options ----------
while getopts "c:vd-:" opt; do
    case "$opt" in
        c) CONFIG_FILE="$OPTARG" ;;
        v) VERBOSE=1 ;;
        d) DRY_RUN=1 ;;
        -) case "$OPTARG" in
               help) usage ;;
               *) die "Unknown option --$OPTARG" ;;
           esac ;;
        *) die "Invalid option. Use --help for usage." ;;
    esac
done

# ---------- Load Configuration ----------
if [ ! -f "$CONFIG_FILE" ]; then
    die "Configuration file not found: $CONFIG_FILE"
fi
# shellcheck source=/dev/null
. "$CONFIG_FILE"

# Validate required config variables
: "\${SOURCE_DIRS:?Must be set in config}"
: "\${BACKUP_DEST:?Must be set in config}"
: "\${RETENTION_DAYS:?Must be set in config}"
LOG_FILE="\${LOG_FILE:-/var/log/backup_project.log}"

# ---------- Setup Logging ----------
touch "$LOG_FILE" 2>/dev/null || die "Cannot write to log file $LOG_FILE"

# ---------- Trap for Cleanup ----------
cleanup() {
    log_error "Backup interrupted – cleaning up partial backup."
    [ -n "$TEMP_BACKUP" ] && [ -d "$TEMP_BACKUP" ] && rm -rf "$TEMP_BACKUP"
    exit 1
}
trap cleanup INT TERM

# ---------- Verbose Mode ----------
[ "$VERBOSE" -eq 1 ] && set -x

# ---------- Backup Function ----------
perform_backup() {
    local src="$1"
    local dest_base="$2"
    local timestamp
    timestamp=$(date '+%Y-%m-%d_%H%M%S')
    local backup_dir="\${dest_base}/\${timestamp}"
    local latest_link="\${dest_base}/latest"

    if [ "$DRY_RUN" -eq 1 ]; then
        log_info "[DRY RUN] Would create backup of $src at $backup_dir"
        return 0
    fi

    mkdir -p "$backup_dir" || die "Cannot create backup directory $backup_dir"

    # Use rsync with --link-dest if available, otherwise fallback to cp -al
    if command -v rsync >/dev/null 2>&1; then
        log_info "Using rsync for $src"
        rsync -aAX --delete --link-dest="$latest_link" "$src/" "$backup_dir/" || die "rsync failed"
    else
        log_info "rsync not found, using cp -al (hardlink copy)"
        if [ -d "$latest_link" ]; then
            cp -al "$latest_link/." "$backup_dir/" || die "cp -al failed"
        else
            cp -a "$src/" "$backup_dir/" || die "cp -a failed"
        fi
    fi

    # Update 'latest' symlink
    rm -f "$latest_link"
    ln -s "$backup_dir" "$latest_link"

    log_info "Backup completed: $backup_dir"
}

# ---------- Rotation Function ----------
rotate_backups() {
    local dest="$1"
    local days="$2"

    log_info "Rotating backups older than $days days in $dest"

    if [ "$DRY_RUN" -eq 1 ]; then
        find "$dest" -maxdepth 1 -type d -name "????-??-??_*" -mtime "+$days" -print \\
            | while read -r d; do
                log_info "[DRY RUN] Would delete: $d"
            done
        return 0
    fi

    find "$dest" -maxdepth 1 -type d -name "????-??-??_*" -mtime "+$days" \\
        -exec rm -rf {} \\; \\
        -exec log_info "Deleted old backup: {}" \\;
}

# ---------- Main ----------
log_info "========== Backup started =========="

# Ensure backup destination exists
mkdir -p "$BACKUP_DEST" || die "Cannot create backup destination $BACKUP_DEST"

# Convert SOURCE_DIRS (space-separated list in config) into array
IFS=' ' read -r -a src_dirs <<< "$SOURCE_DIRS"

for src in "\${src_dirs[@]}"; do
    if [ ! -d "$src" ]; then
        log_error "Source directory $src does not exist – skipping"
        continue
    fi
    perform_backup "$src" "$BACKUP_DEST"
done

rotate_backups "$BACKUP_DEST" "$RETENTION_DAYS"

log_info "========== Backup finished =========="
exit 0`,l=`# backup_config.conf – Configuration for backup_project.sh\r
# This file is sourced directly – must be valid shell syntax.\r
\r
# Space-separated list of directories to back up\r
SOURCE_DIRS="/home /etc /var/www"\r
\r
# Destination directory for backups\r
BACKUP_DEST="/backup/server"\r
\r
# How many days to keep backups (older are deleted)\r
RETENTION_DAYS=30\r
\r
# Optional: log file location (default: /var/log/backup_project.log)\r
LOG_FILE="/var/log/backup_project.log"`,o=`#!/bin/sh
# install_backup.sh – Deploy backup_project.sh, config, and set up cron

set -e

BACKUP_SCRIPT="backup_project.sh"
CONFIG_FILE="backup_config.conf"
INSTALL_DIR="/usr/local/bin"
CONFIG_DIR="/etc"
CRON_SCHEDULE="30 2 * * *"   # 2:30 AM daily

# Ensure we are root (or use sudo)
if [ "$(id -u)" -ne 0 ]; then
    echo "Please run as root (use sudo)." >&2
    exit 1
fi

# 1. Copy script
echo "📄 Installing $BACKUP_SCRIPT to $INSTALL_DIR"
cp "$BACKUP_SCRIPT" "$INSTALL_DIR/"
chmod 755 "$INSTALL_DIR/$BACKUP_SCRIPT"

# 2. Copy config
echo "⚙️ Installing $CONFIG_FILE to $CONFIG_DIR"
cp "$CONFIG_FILE" "$CONFIG_DIR/"
chmod 644 "$CONFIG_DIR/$CONFIG_FILE"
# Secure config – readable only by root (optional)
chmod 600 "$CONFIG_DIR/$CONFIG_FILE"

# 3. Create backup destination
BACKUP_DEST=$(grep ^BACKUP_DEST "$CONFIG_DIR/$CONFIG_FILE" | cut -d= -f2 | tr -d '"' | tr -d ' ')
mkdir -p "$BACKUP_DEST"
chmod 755 "$BACKUP_DEST"

# 4. Set up cron job
TEMP_CRON=$(mktemp)
crontab -l > "$TEMP_CRON" 2>/dev/null || true

if grep -q "$BACKUP_SCRIPT" "$TEMP_CRON"; then
    echo "⚠️ Cron job already exists. Skipping."
else
    echo "$CRON_SCHEDULE $INSTALL_DIR/$BACKUP_SCRIPT -c $CONFIG_DIR/$CONFIG_FILE -v >> /var/log/backup_cron.log 2>&1" >> "$TEMP_CRON"
    crontab "$TEMP_CRON"
    echo "✅ Cron job added."
fi
rm "$TEMP_CRON"

echo "🎉 Backup system installed. Test with: $INSTALL_DIR/$BACKUP_SCRIPT -c $CONFIG_DIR/$CONFIG_FILE -d"`,g=()=>{const r=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulseGlow {
          0% { filter: drop-shadow(0 0 2px rgba(59,130,246,0.5)); }
          50% { filter: drop-shadow(0 0 12px rgba(59,130,246,0.8)); }
          100% { filter: drop-shadow(0 0 2px rgba(59,130,246,0.5)); }
        }
        @keyframes progressFill {
          0% { width: 0%; opacity: 0.5; }
          100% { width: 100%; opacity: 1; }
        }
      `}),e.jsxs("div",{className:s("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:s("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:["🗄️ Mini Project: ",e.jsx("span",{className:"text-blue-400",children:"Automated Backup Script"})]}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["From classroom exercises to production: a complete, robust backup utility that protects student projects in ",e.jsx("span",{className:"text-blue-400",children:"Barrackpore"})," and teacher records in ",e.jsx("span",{className:"text-blue-400",children:"Naihati"}),"."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"400",height:"160",viewBox:"0 0 400 160",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Backup automation: sources → backup script → archive + log",children:[e.jsxs("g",{transform:"translate(20, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"50",height:"40",rx:"6",fill:"#1e293b",stroke:"#60a5fa",strokeWidth:"2"}),e.jsx("text",{x:"10",y:"26",fontSize:"12",fill:"#bfdbfe",children:"/home"}),e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 0; -2 -2; 0 0",dur:"3s",repeatCount:"indefinite",begin:"mouseover"})]}),e.jsxs("g",{transform:"translate(75, 70)",children:[e.jsx("line",{x1:"0",y1:"0",x2:"40",y2:"0",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",repeatCount:"indefinite"})]}),e.jsxs("g",{transform:"translate(120, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"90",height:"60",rx:"8",fill:"#312e81",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("text",{x:"12",y:"25",fontSize:"14",fill:"#e0e7ff",children:"backup.sh"}),e.jsx("text",{x:"12",y:"45",fontSize:"10",fill:"#c4b5fd",children:"config + rotation"})]}),e.jsx("line",{x1:"210",y1:"70",x2:"260",y2:"70",stroke:"#f59e0b",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(270, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"50",height:"40",rx:"6",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"10",y:"26",fontSize:"12",fill:"#a7f3d0",children:"/backup"}),e.jsx("circle",{cx:"25",cy:"20",r:"12",fill:"none",stroke:"#34d399",strokeWidth:"1.5",strokeDasharray:"4 3",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;20;0",dur:"3s",repeatCount:"indefinite"})})]}),e.jsxs("g",{transform:"translate(270, 110)",children:[e.jsx("rect",{x:"0",y:"0",width:"40",height:"30",rx:"4",fill:"#374151",stroke:"#9ca3af"}),e.jsx("text",{x:"8",y:"20",fontSize:"10",fill:"#d1d5db",children:"backup.log"})]}),e.jsx("line",{x1:"210",y1:"90",x2:"270",y2:"120",stroke:"#9ca3af",strokeDasharray:"4 3"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#f59e0b"})})})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"🎯 Project Goals"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-blue-400",children:"What it does:"})," A scheduled script that copies important directories to a backup location, maintains versioned snapshots, and automatically deletes backups older than a configured retention period."]}),e.jsx("p",{children:e.jsx("span",{className:"font-bold text-blue-400",children:"Features:"})}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 marker:text-blue-400",children:[e.jsx("li",{children:"Configuration file (sources, destination, retention days)"}),e.jsxs("li",{children:["Command‑line options: ",e.jsx("code",{children:"-c config"}),", ",e.jsx("code",{children:"-v"}),", ",e.jsx("code",{children:"-d"})," (dry‑run)"]}),e.jsx("li",{children:"Logging with timestamps (console + log file)"}),e.jsxs("li",{children:["Uses ",e.jsx("code",{children:"rsync"})," (or fallback to ",e.jsx("code",{children:"cp -al"}),") for efficient incremental backups"]}),e.jsx("li",{children:"Automatic rotation – deletes backups older than $RETENTION_DAYS"}),e.jsxs("li",{children:["Error handling with ",e.jsx("code",{children:"set -euo pipefail"})," and ",e.jsx("code",{children:"trap"})]}),e.jsx("li",{children:"Idempotent – safe to run multiple times"})]})]}),e.jsxs("div",{className:s("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-blue-700","hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"🎓"})," Student Success"]}),e.jsxs("p",{className:"text-lg",children:[e.jsx("span",{className:"text-blue-400",children:"Tuhina"})," accidentally deleted her thesis work. Because ",e.jsx("span",{className:"text-blue-400",children:"Debangshu"})," had set up this backup script on the department server in ",e.jsx("span",{className:"italic",children:"Ichapur"}),", she restored her files instantly. The retention policy saved daily snapshots for two weeks."]})]})]})]}),e.jsxs("section",{className:"space-y-12",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"📜 1. Main Backup Script – backup_project.sh"}),e.jsx(a,{fileModule:i,title:"🚀 backup_project.sh – Full implementation",highlightLines:[1,9,18,27,45,62,80]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mt-4",children:[e.jsxs("div",{className:"bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsx("span",{className:"font-bold text-blue-400",children:"1️⃣ Shebang & Strict Mode"}),e.jsx("p",{className:"mt-2",children:"#!/bin/bash, set -euo pipefail – fail fast, safe."})]}),e.jsxs("div",{className:"bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsx("span",{className:"font-bold text-blue-400",children:"2️⃣ Configuration Loader"}),e.jsx("p",{className:"mt-2",children:"Sources .conf file, validates required variables."})]}),e.jsxs("div",{className:"bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsx("span",{className:"font-bold text-blue-400",children:"3️⃣ Logging Functions"}),e.jsx("p",{className:"mt-2",children:"log_info, log_error, die – consistent output."})]}),e.jsxs("div",{className:"bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsx("span",{className:"font-bold text-blue-400",children:"4️⃣ Argument Parsing"}),e.jsx("p",{className:"mt-2",children:"getopts for -c, -v, -d, --help."})]}),e.jsxs("div",{className:"bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsx("span",{className:"font-bold text-blue-400",children:"5️⃣ Backup Engine"}),e.jsx("p",{className:"mt-2",children:"rsync --link-dest for hardlink snapshots; fallback to cp -al."})]}),e.jsxs("div",{className:"bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsx("span",{className:"font-bold text-blue-400",children:"6️⃣ Rotation"}),e.jsx("p",{className:"mt-2",children:"find + mtime + rm, protected by dry‑run."})]}),e.jsxs("div",{className:"bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsx("span",{className:"font-bold text-blue-400",children:"7️⃣ Trap Cleanup"}),e.jsx("p",{className:"mt-2",children:"Removes partial backup on interrupt."})]}),e.jsxs("div",{className:"bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsx("span",{className:"font-bold text-blue-400",children:"8️⃣ Idempotent Design"}),e.jsx("p",{className:"mt-2",children:"mkdir -p, rsync --ignore-existing."})]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"⚙️ 2. Configuration – backup_config.conf"}),e.jsx(a,{fileModule:l,title:"📁 backup_config.conf – Example settings",highlightLines:[3,4,6]}),e.jsx("p",{className:"text-lg leading-relaxed",children:"Configuration is plain shell syntax, sourced directly. This keeps secrets and site‑specific settings out of the main script – a key maintainability practice."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"📦 3. Installation & Cron Automation"}),e.jsx(a,{fileModule:o,title:"🛠️ install_backup.sh – One‑command setup",highlightLines:[10,18,25]}),e.jsxs("div",{className:"bg-gray-800 light:bg-gray-100 p-6 rounded-xl mt-4",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"🕒 Cron Entry Example"}),e.jsx("pre",{className:"bg-gray-900 light:bg-gray-200 p-4 rounded text-sm overflow-x-auto",children:`# Run backup every day at 2:30 AM
30 2 * * * /usr/local/bin/backup_project.sh -c /etc/backup_config.conf -v >> /var/log/backup_cron.log 2>&1`}),e.jsxs("p",{className:"mt-4 text-gray-300 light:text-gray-700",children:["The installer script adds this line automatically using ",e.jsx("code",{children:"crontab"})," commands."]})]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Pitfalls Specific to Backup Scripts"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["❌ Never tested restore – a backup is only as good as its last recovery.","❌ Hard‑coded paths – script breaks when moved to another machine.","❌ No logging – you don't know if it ran or failed.","❌ Ignoring `rsync` exit codes – partial transfers can look successful.","❌ Retention without sanity check – accidentally deleting whole backup tree.","❌ Running as root unnecessarily – use least privilege.","❌ No locking – concurrent runs corrupt backups.","❌ Backing up open files inconsistently – consider filesystem snapshots or notify applications."].map((n,t)=>e.jsx("div",{className:s("p-5 rounded-lg border border-red-800 light:border-red-300","bg-red-900/20 light:bg-red-50","hover:bg-red-900/30 light:hover:bg-red-100 transition-colors"),children:e.jsx("span",{className:"text-lg",children:n})},t))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Backup Script Best Practices"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["📦 Use timestamped backup folders (YYYY-MM-DD_HHMMSS).","🔗 Use `rsync --link-dest` for space‑efficient snapshots.","📜 Log everything: start, end, bytes transferred, errors.","🧪 Provide a `--dry-run` option to preview changes.","🔐 Secure the config file – readable only by the backup user.","🔄 Test rotation with `--dry-run` before enabling.","📉 Monitor backup age – alert if last backup > 48h old.","💾 Store backups on a separate device or network location.","📋 Document restore procedure – step by step."].map((n,t)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:n})]},t))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Pro Tips from the Field"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"3‑2‑1 Rule:"})," At least ",e.jsx("strong",{children:"3"})," copies, on ",e.jsx("strong",{children:"2"})," different media, with ",e.jsx("strong",{children:"1"})," off‑site. Your script is one piece; ensure off‑site replication (e.g., rsync to a remote server)."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Backup metadata:"})," Save permissions, ownership, extended attributes.",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-2 py-1 rounded",children:"rsync -aAX"})," does this."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Verify backups automatically:"})," After backup, run a quick check – e.g., count files, or restore a small test file and compare checksum."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Monitor with Nagios/Icinga:"})," Expose backup age via a text file or script exit code."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Atomic rotation:"})," Use `mv` to replace the “latest” symlink after successful backup, then delete old snapshots. Prevents window where no backup exists."]})]})]}),e.jsxs("section",{className:s("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💭"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Observe carefully…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"backup_project.sh"}),", the ",e.jsx("code",{children:"rotate_backups"})," function uses",e.jsx("code",{children:'find "$BACKUP_DEST" -maxdepth 1 -type d -name "????-??-??_*"'}),". Why is this pattern safer than ",e.jsx("code",{children:'-name "*"'}),"? What happens if someone manually creates a folder that doesn't match the timestamp pattern?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Try changing the retention policy from 7 days to 0 and run with ",e.jsx("code",{children:"--dry-run"}),". Would you be comfortable enabling it? This is why we always test rotation first."]})]})]}),e.jsx("section",{className:s("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",r," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“I still remember 1998 – we backed up floppy disks manually. Now ",e.jsx("span",{className:"text-blue-400",children:"Abhronila"})," in",e.jsx("span",{className:"italic",children:" Shyamnagar"})," writes a script that protects terabytes of research data. This project isn't about backup; it's about engineering discipline. Test every failure mode. Simulate disk full. Simulate interrupted network. Then you’ll sleep peacefully.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#3-2-1"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#TestRestore"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#Idempotent"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Project Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-blue-400",children:[e.jsx("li",{children:"Configurable source directories and destination."}),e.jsx("li",{children:"Retention policy with safe deletion logic."}),e.jsx("li",{children:"Verbose/logging options."}),e.jsx("li",{children:"Dry‑run mode to preview changes."}),e.jsx("li",{children:"Error handling and trap for cleanup."}),e.jsx("li",{children:"Idempotent – safe to run multiple times."}),e.jsx("li",{children:"Installation script that sets up directories and cron."}),e.jsx("li",{children:"Documentation (in‑code comments and usage)."}),e.jsx("li",{children:"Tested restore procedure exists."})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Common shell scripting mistakes and best practices – Topic33"})})]})]})};export{g as default};
