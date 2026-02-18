import{j as e}from"./index-BFnLuail.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as a}from"./ShellFileLoader-BgOvPFCh.js";import"./prism-DTsTe1iV.js";const n=`#!/bin/bash
# backup_utility.sh – Automated backup using tar archives
# Usage: ./backup_utility.sh [-c config] [-d] [-v] [-h]

set -euo pipefail
IFS=$'\\n\\t'

# ---------- Defaults ----------
CONFIG_FILE="./backup_utility.conf"
DRY_RUN=0
VERBOSE=0
LOG_FILE="/var/log/backup_utility.log"

# ---------- Functions ----------
die() {
    echo "ERROR: $*" >&2
    exit 1
}

usage() {
    cat <<EOF
Usage: $0 [OPTIONS]

Options:
  -c FILE   Configuration file (default: $CONFIG_FILE)
  -d        Dry run – show what would be done, no changes
  -v        Verbose output
  -h        Show this help
EOF
    exit 0
}

log_info() {
    echo "[INFO] $(date '+%Y-%m-%d %H:%M:%S') - $*" | tee -a "$LOG_FILE"
}

log_error() {
    echo "[ERROR] $(date '+%Y-%m-%d %H:%M:%S') - $*" >&2 | tee -a "$LOG_FILE" >&2
}

# ---------- Parse Options ----------
while getopts "c:dvh" opt; do
    case "$opt" in
        c) CONFIG_FILE="$OPTARG" ;;
        d) DRY_RUN=1 ;;
        v) VERBOSE=1 ;;
        h) usage ;;
        *) die "Invalid option. Use -h for help." ;;
    esac
done

# ---------- Load Configuration ----------
if [[ ! -f "$CONFIG_FILE" ]]; then
    die "Configuration file not found: $CONFIG_FILE"
fi
# shellcheck source=/dev/null
. "$CONFIG_FILE"

# Set defaults if not defined in config
BACKUP_SOURCES="\${BACKUP_SOURCES:-/home}"
BACKUP_DEST="\${BACKUP_DEST:-/backup}"
BACKUP_COMPRESS="\${BACKUP_COMPRESS:-gz}"
RETENTION_COUNT="\${RETENTION_COUNT:-7}"
LOG_FILE="\${LOG_FILE:-/var/log/backup_utility.log}"

# Validate required settings
[[ -z "$BACKUP_SOURCES" ]] && die "BACKUP_SOURCES not set"
[[ -z "$BACKUP_DEST" ]] && die "BACKUP_DEST not set"
[[ "$BACKUP_COMPRESS" =~ ^(gz|bz2|xz)$ ]] || die "BACKUP_COMPRESS must be gz, bz2, or xz"
[[ "$RETENTION_COUNT" -gt 0 ]] || die "RETENTION_COUNT must be positive"

# Create destination directory if missing
if [[ $DRY_RUN -eq 0 ]]; then
    mkdir -p "$BACKUP_DEST" || die "Cannot create $BACKUP_DEST"
fi

# ---------- Timestamp ----------
TIMESTAMP=$(date '+%Y-%m-%d_%H%M%S')
ARCHIVE_NAME="backup-\${TIMESTAMP}.tar.\${BACKUP_COMPRESS}"
ARCHIVE_PATH="\${BACKUP_DEST}/\${ARCHIVE_NAME}"

# ---------- Dry Run / Verbose ----------
[[ $VERBOSE -eq 1 ]] && set -x
[[ $DRY_RUN -eq 1 ]] && log_info "DRY RUN – no files will be changed"

# ---------- Perform Backup ----------
log_info "Starting backup of: $BACKUP_SOURCES"
log_info "Archive: $ARCHIVE_PATH"

# Construct tar options
tar_opt="c"
case "$BACKUP_COMPRESS" in
    gz)  tar_opt="czf" ;;
    bz2) tar_opt="cjf" ;;
    xz)  tar_opt="cJf" ;;
esac

if [[ $DRY_RUN -eq 1 ]]; then
    log_info "[DRY RUN] tar -$tar_opt '$ARCHIVE_PATH' $BACKUP_SOURCES"
else
    # Use -C / to make paths relative (strip leading slash)
    # shellcheck disable=SC2086
    tar -$tar_opt "$ARCHIVE_PATH" $BACKUP_SOURCES || die "tar failed"
    log_info "Backup completed. Size: $(du -h "$ARCHIVE_PATH" | cut -f1)"
fi

# ---------- Rotation – keep only last N backups ----------
if [[ $DRY_RUN -eq 0 ]]; then
    log_info "Rotating backups in $BACKUP_DEST (keeping last $RETENTION_COUNT)"
    
    # List backup files sorted by time (oldest first), exclude current one
    mapfile -t old_backups < <(
        find "$BACKUP_DEST" -maxdepth 1 -type f -name "backup-*.tar.*" \\
            ! -name "$ARCHIVE_NAME" -printf '%T@ %p\\n' | sort -n | cut -d' ' -f2-
    )
    
    # How many to delete
    count=\${#old_backups[@]}
    delete_count=$((count - RETENTION_COUNT))
    
    if [[ $delete_count -gt 0 ]]; then
        for ((i=0; i<delete_count; i++)); do
            rm -f "\${old_backups[$i]}" && log_info "Deleted old backup: \${old_backups[$i]}"
        done
    else
        log_info "No backups to delete"
    fi
else
    log_info "[DRY RUN] Would rotate backups (keep $RETENTION_COUNT)"
fi

log_info "Backup finished successfully"
exit 0`,l=`# backup_utility.conf – Configuration for backup_utility.sh\r
# This file is sourced directly; must be valid bash syntax.\r
\r
# Space-separated list of directories to back up\r
BACKUP_SOURCES="/home /etc /var/www"\r
\r
# Destination directory for archives\r
BACKUP_DEST="/backup"\r
\r
# Compression type: gz, bz2, or xz\r
BACKUP_COMPRESS="gz"\r
\r
# Number of most recent backups to keep (older ones are deleted)\r
RETENTION_COUNT=7\r
\r
# Log file location (default: /var/log/backup_utility.log)\r
LOG_FILE="/var/log/backup_utility.log"`,p=()=>{const i=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes archiveGlow {
          0% { filter: drop-shadow(0 0 2px rgba(52,211,153,0.4)); }
          50% { filter: drop-shadow(0 0 12px rgba(52,211,153,0.8)); }
          100% { filter: drop-shadow(0 0 2px rgba(52,211,153,0.4)); }
        }
      `}),e.jsxs("div",{className:s("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:s("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:["💾 Example Script: ",e.jsx("span",{className:"text-emerald-400",children:"Automated Backup Utility"})]}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["A battle‑tested backup script that ",e.jsx("span",{className:"text-blue-400",children:"Debangshu"})," uses for the school servers in ",e.jsx("span",{className:"italic",children:"Barrackpore"})," and ",e.jsx("span",{className:"text-blue-400",children:"Tuhina"}),"adapted for her Raspberry Pi in ",e.jsx("span",{className:"italic",children:"Ichapur"}),"."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"400",height:"140",viewBox:"0 0 400 140",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Backup pipeline: source folders, tar compression, archive files, trash can for old backups",children:[e.jsxs("g",{transform:"translate(20, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"30",height:"30",rx:"4",fill:"#60a5fa"}),e.jsx("rect",{x:"5",y:"5",width:"30",height:"30",rx:"4",fill:"#3b82f6"}),e.jsx("rect",{x:"10",y:"10",width:"30",height:"30",rx:"4",fill:"#2563eb"}),e.jsx("text",{x:"45",y:"30",fontSize:"12",fill:"#d1d5db",children:"/home"})]}),e.jsx("line",{x1:"80",y1:"55",x2:"120",y2:"55",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(130, 30)",children:[e.jsx("rect",{x:"0",y:"0",width:"60",height:"50",rx:"8",fill:"#312e81",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("text",{x:"15",y:"32",fontSize:"14",fill:"#e0e7ff",children:"tar"}),e.jsx("circle",{cx:"45",cy:"15",r:"8",fill:"none",stroke:"#a78bfa",strokeWidth:"1.5",strokeDasharray:"4 3",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;20;0",dur:"3s",repeatCount:"indefinite"})})]}),e.jsx("line",{x1:"200",y1:"55",x2:"240",y2:"55",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(250, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"25",height:"30",rx:"4",fill:"#4ade80"}),e.jsx("rect",{x:"30",y:"5",width:"25",height:"30",rx:"4",fill:"#34d399"}),e.jsx("rect",{x:"60",y:"-2",width:"25",height:"30",rx:"4",fill:"#10b981"}),e.jsx("text",{x:"90",y:"20",fontSize:"12",fill:"#d1d5db",children:".tar.gz"})]}),e.jsx("line",{x1:"320",y1:"55",x2:"350",y2:"55",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#arrow_red)"}),e.jsxs("g",{transform:"translate(360, 40)",children:[e.jsx("rect",{x:"0",y:"10",width:"20",height:"20",rx:"2",fill:"#6b7280"}),e.jsx("rect",{x:"4",y:"0",width:"12",height:"12",rx:"1",fill:"#9ca3af"})]}),e.jsxs("defs",{children:[e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#f59e0b"})}),e.jsx("marker",{id:"arrow_red",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#ef4444"})})]})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-emerald-800 light:border-emerald-300 pb-3 inline-block",children:"🎯 Tar‑Based Backup: Simple, Universal, Reliable"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["While ",e.jsx("code",{children:"rsync"})," is great for mirroring, ",e.jsx("span",{className:"text-amber-400",children:"tar"})," archives are the classic backup format – self‑contained, compressible, and readable everywhere."]}),e.jsxs("p",{children:["This script demonstrates a ",e.jsx("strong",{children:"complete backup solution"})," in under 100 lines:"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Configurable sources, destination, compression"}),e.jsx("li",{children:"Timestamped archive names"}),e.jsx("li",{children:"Dry‑run mode – preview without writing"}),e.jsx("li",{children:"Automatic rotation (keep last N backups)"}),e.jsx("li",{children:"Logging to file + console"}),e.jsxs("li",{children:["Error handling with ",e.jsx("code",{children:"die()"})]})]})]}),e.jsxs("div",{className:s("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-emerald-700","hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📌"})," Real‑world Scenario"]}),e.jsxs("p",{className:"text-lg",children:[e.jsx("span",{className:"text-blue-400",children:"Abhronila"})," in ",e.jsx("span",{className:"italic",children:"Shyamnagar"}),"uses this script to back up her thesis work every hour. The rotation keeps the last 24 archives – she can go back to any version from the past day without filling her disk."]})]})]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-emerald-800 light:border-emerald-300 pb-3 inline-block",children:"📜 backup_utility.sh – Full Script"}),e.jsx(a,{fileModule:n,title:"🗜️ backup_utility.sh – Tar‑based backup with rotation",highlightLines:[2,9,18,27,41,59,72]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 text-sm bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Strict mode"})," – `set -euo pipefail`"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Config"})," – sourced, with defaults"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Compression"})," – gz, bz2, xz"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Dry‑run"})," – `-d` preview"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Rotation"})," – keep last N backups"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Logging"})," – tee to file"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Timestamp"})," – YYYY-MM-DD_HHMMSS"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Error"})," – `die()` + trap"]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-emerald-800 light:border-emerald-300 pb-3 inline-block",children:"⚙️ backup_utility.conf – Example Configuration"}),e.jsx(a,{fileModule:l,title:"📁 backup_utility.conf",highlightLines:[2,3,4,5]}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["Configuration is just shell syntax – easy to read and write. Place it in ",e.jsx("code",{children:"/etc/backup_utility.conf"}),"or alongside the script. All variables are validated before use."]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Backup Pitfalls – Avoid These"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["❌ Storing backups on the same disk – a disk failure kills both data and backup.","❌ No retention policy – disk fills up and backups stop.","❌ Never testing restore – a backup is worthless if you can't restore it.","❌ Hard‑coding passwords in the script (use environment variables or config files with restricted permissions).","❌ Ignoring exit codes – a failed `tar` may produce an incomplete archive.","❌ Not locking – two simultaneous runs can corrupt archives.","❌ Using absolute paths inside the archive – restoring to a different location becomes messy.","❌ Forgetting `--dry-run` for destructive rotation."].map((r,t)=>e.jsx("div",{className:s("p-4 rounded-lg border border-red-800 light:border-red-300","bg-red-900/10 light:bg-red-50","hover:bg-red-900/20 light:hover:bg-red-100 transition-colors"),children:e.jsx("span",{className:"text-red-400 light:text-red-700",children:r})},t))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Backup Script Best Practices"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["🔹 Store configuration separately from code.","🔹 Use timestamped filenames – never overwrite.","🔹 Implement rotation – keep N latest, delete oldest.","🔹 Log every run (start, end, size, errors).","🔹 Provide a dry‑run mode for testing.","🔹 Test the restore procedure regularly (automate it!).","🔹 Set restrictive permissions on config files that contain secrets.","🔹 Use `tar` with `-C` to make archives relocatable."].map((r,t)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:r})]},t))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Pro Tips – Beyond the Basics"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Add a checksum file."})," After creating the archive, generate a ",e.jsx("code",{children:".sha256"})," file. This lets you verify integrity later: ",e.jsx("code",{children:"sha256sum -c backup-2025-03-15_143022.tar.gz.sha256"}),"."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `nice` and `ionice`."})," Backups can consume I/O. Prefix the tar command with",e.jsx("code",{children:"nice -n 19 ionice -c 3"})," to minimise impact on other processes."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Encrypt sensitive backups."})," Pipe tar to ",e.jsx("code",{children:"gpg --symmetric"})," and store the key separately. Example: ",e.jsx("code",{children:"tar cz folder | gpg --symmetric --output backup.tar.gz.gpg"}),"."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Monitor backup freshness."})," A cron job can alert if the latest backup is older than, say, 48 hours."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Parallel backups."})," If you have multiple independent datasets, run them concurrently with ",e.jsx("code",{children:"&"})," and ",e.jsx("code",{children:"wait"})," to reduce total time."]})]})]}),e.jsxs("section",{className:s("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Observe carefully…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In the rotation function, we use ",e.jsx("code",{children:"ls -1tr | head -n -$RETENTION_COUNT"}),". Why is this potentially unsafe? What filenames could break this approach?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Try modifying the script to use ",e.jsx("code",{children:"find ... -printf"})," or an array for safer deletion. How would you handle filenames with newlines?"]})]})]}),e.jsx("section",{className:s("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",i," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“In ",e.jsxs("span",{className:"font-semibold",children:[i," years"]}),", I've seen more data lost to",e.jsx("span",{className:"text-red-400",children:"failed backups"})," than to disk crashes.",e.jsx("span",{className:"text-blue-400",children:"Swadeep"})," once had a perfect backup script – except he never tested the restore. When his laptop died, he discovered the archives were corrupted.",e.jsx("span",{className:"text-blue-400",children:"Abhronila"})," now schedules a weekly restore test to a temporary directory. That’s the mark of a professional.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#TestRestores"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#3-2-1Rule"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#DryRunIsFree"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Backup Script Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-emerald-400",children:[e.jsx("li",{children:"Configurable sources and destination"}),e.jsx("li",{children:"Timestamped, unique archive names"}),e.jsx("li",{children:"Compression (user‑choosable)"}),e.jsx("li",{children:"Rotation with retention count"}),e.jsx("li",{children:"Dry‑run mode for safety"}),e.jsx("li",{children:"Logging with timestamps"}),e.jsx("li",{children:"Error handling (`set -e`, `die()`, trap)"}),e.jsx("li",{children:"Idempotent – safe to run repeatedly"}),e.jsx("li",{children:"Documented restore procedure"})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Example Script – Cron scheduling (Topic39)"})})]})]})};export{p as default};
