import{j as e}from"./index-CG3iA-Ea.js";import{c as n}from"./clsx-B-dksMZM.js";import{S as a}from"./ShellFileLoader-DaQ5Qy3C.js";import"./prism-DRxy4y8s.js";const o=`#!/bin/bash
# cron_manager.sh – Add, list, and remove cron jobs programmatically
# Usage: ./cron_manager.sh [list|add|remove] [cron_spec] [command]

set -euo pipefail
IFS=$'\\n\\t'

# ---------- Functions ----------
die() {
    echo "ERROR: $*" >&2
    exit 1
}

usage() {
    cat <<EOF
Usage: $0 COMMAND [OPTIONS]

Commands:
  list                     Show current crontab entries
  add "cron_spec command"  Add a new cron job (if not already present)
  remove "pattern"         Remove all jobs matching the given pattern (grep)

Options:
  -d, --dry-run           Show what would be done, but don't modify crontab
  -h, --help              Show this help

Examples:
  $0 list
  $0 add "30 2 * * * /usr/local/bin/backup.sh"
  $0 remove "backup.sh"
EOF
    exit 0
}

# Get current crontab; if none, use empty file
get_crontab() {
    crontab -l 2>/dev/null || true
}

# Show crontab
cmd_list() {
    if [[ -n "$(get_crontab)" ]]; then
        get_crontab
    else
        echo "No crontab for user $(whoami)"
    fi
}

# Add a job if not already present
cmd_add() {
    local entry="$1"
    local crontab_current
    crontab_current=$(get_crontab)
    
    if echo "$crontab_current" | grep -Fq -- "$entry"; then
        echo "Job already exists in crontab. Skipping." >&2
        return 0
    fi
    
    if [[ $DRY_RUN -eq 1 ]]; then
        echo "[DRY RUN] Would add: $entry"
    else
        # Backup current crontab
        backup_file="/tmp/crontab.backup.$(date '+%Y%m%d_%H%M%S')"
        echo "$crontab_current" > "$backup_file"
        echo "Backup saved to $backup_file"
        
        # Add new entry
        (echo "$crontab_current"; echo "$entry") | crontab -
        echo "Cron job added: $entry"
    fi
}

# Remove all jobs containing given pattern
cmd_remove() {
    local pattern="$1"
    local crontab_current
    crontab_current=$(get_crontab)
    
    if [[ -z "$crontab_current" ]]; then
        echo "No crontab to modify." >&2
        return 0
    fi
    
    # Filter out lines matching pattern
    local new_crontab
    new_crontab=$(echo "$crontab_current" | grep -Ev -- "$pattern" || true)
    
    if [[ "$crontab_current" == "$new_crontab" ]]; then
        echo "No jobs matching pattern '$pattern' found." >&2
        return 0
    fi
    
    if [[ $DRY_RUN -eq 1 ]]; then
        echo "[DRY RUN] Would remove lines containing: $pattern"
        echo "Removed:"
        diff --unchanged-line-format='' --old-line-format='%L' \\
            <(echo "$crontab_current") <(echo "$new_crontab") || true
    else
        backup_file="/tmp/crontab.backup.$(date '+%Y%m%d_%H%M%S')"
        echo "$crontab_current" > "$backup_file"
        echo "Backup saved to $backup_file"
        
        echo "$new_crontab" | crontab -
        echo "Removed jobs matching pattern: $pattern"
    fi
}

# ---------- Main ----------
DRY_RUN=0

# Parse options
ARGS=()
while [[ $# -gt 0 ]]; do
    case "$1" in
        -d|--dry-run) DRY_RUN=1; shift ;;
        -h|--help) usage ;;
        --) shift; break ;;
        -*) die "Unknown option: $1" ;;
        *) ARGS+=("$1"); shift ;;
    esac
done

set -- "\${ARGS[@]}"

if [[ $# -eq 0 ]]; then
    die "Missing command. Use -h for help."
fi

COMMAND="$1"
shift

case "$COMMAND" in
    list)
        cmd_list
        ;;
    add)
        [[ $# -ge 1 ]] || die "add requires a cron entry string."
        cmd_add "$*"
        ;;
    remove)
        [[ $# -ge 1 ]] || die "remove requires a pattern."
        cmd_remove "$1"
        ;;
    *)
        die "Unknown command: $COMMAND"
        ;;
esac

exit 0`,i=`#!/bin/bash
# example_cron_job.sh – A well‑behaved script for cron scheduling
# This script logs the current timestamp and disk usage to a file.
# Intended to be scheduled via cron.

set -euo pipefail
IFS=$'\\n\\t'

# ---------- Configuration ----------
LOG_DIR="\${HOME}/cron_logs"
LOG_FILE="\${LOG_DIR}/cron_job.log"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# ---------- Logging function ----------
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" >> "$LOG_FILE"
}

# ---------- Main ----------
log "=== Cron job started ==="

# Example task: log current disk usage of home directory
du -sh "$HOME" >> "$LOG_FILE" 2>&1

# Example task: count processes
echo "Process count: $(ps -e --no-headers | wc -l)" >> "$LOG_FILE"

log "=== Cron job completed ==="
exit 0`,x=()=>{const t=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes clockTick {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseDot {
          0% { r: 3; opacity: 0.8; }
          50% { r: 6; opacity: 1; }
          100% { r: 3; opacity: 0.8; }
        }
      `}),e.jsxs("div",{className:n("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:n("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:["⏰ Example Script: ",e.jsx("span",{className:"text-purple-400",children:"Cron Scheduling"})]}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["Automate your backups, reports, and reminders.",e.jsx("span",{className:"text-blue-400",children:" Swadeep"})," in ",e.jsx("span",{className:"italic",children:"Barrackpore"})," schedules his daily system health checks; ",e.jsx("span",{className:"text-blue-400",children:"Abhronila"})," in ",e.jsx("span",{className:"italic",children:"Shyamnagar"}),"never misses a deadline thanks to cron."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"340",height:"140",viewBox:"0 0 340 140",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Clock with cron schedule syntax",children:[e.jsxs("g",{transform:"translate(30, 40)",children:[e.jsx("circle",{cx:"30",cy:"30",r:"24",fill:"none",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("line",{x1:"30",y1:"10",x2:"30",y2:"14",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("line",{x1:"30",y1:"50",x2:"30",y2:"46",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"30",x2:"14",y2:"30",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("line",{x1:"50",y1:"30",x2:"46",y2:"30",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("line",{x1:"30",y1:"30",x2:"30",y2:"18",stroke:"#e0e7ff",strokeWidth:"2",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 30 30",to:"360 30 30",dur:"60s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"30",y1:"30",x2:"30",y2:"12",stroke:"#c4b5fd",strokeWidth:"1.5",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 30 30",to:"360 30 30",dur:"360s",repeatCount:"indefinite"})})]}),e.jsx("line",{x1:"70",y1:"60",x2:"110",y2:"60",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(120, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"120",height:"50",rx:"6",fill:"#312e81",stroke:"#a78bfa"}),e.jsx("text",{x:"10",y:"20",fontSize:"12",fill:"#e0e7ff",children:"30 2 * * *"}),e.jsx("text",{x:"10",y:"38",fontSize:"12",fill:"#e0e7ff",children:"/backup.sh"})]}),e.jsx("circle",{cx:"260",cy:"65",r:"3",fill:"#4ade80",children:e.jsx("animate",{attributeName:"r",values:"3;6;3",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"280",y:"70",fontSize:"12",fill:"#d1d5db",children:"runs daily"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#f59e0b"})})})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-purple-800 light:border-purple-300 pb-3 inline-block",children:"🕰️ Cron: The Unix Scheduler"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("span",{className:"text-amber-400",children:"Cron"})," is the time‑based job scheduler in Unix‑like systems. Users maintain their own crontab files – lists of commands and when to run them."]}),e.jsxs("p",{children:["Format: ",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-2 py-0.5 rounded",children:"minute hour day month day_of_week command"}),"."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Debangshu"})," uses ",e.jsx("code",{children:"crontab -e"})," to edit, but for automation, we need to manipulate crontabs from scripts. That's where ",e.jsx("code",{children:"cron_manager.sh"})," comes in."]})]}),e.jsxs("div",{className:n("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-purple-700","hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📌"})," Common Fields"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"0 2 * * *"})," – daily 2am"]}),e.jsxs("li",{children:[e.jsx("code",{children:"*/15 * * * *"})," – every 15 minutes"]}),e.jsxs("li",{children:[e.jsx("code",{children:"0 9 * * 1-5"})," – weekdays 9am"]}),e.jsxs("li",{children:[e.jsx("code",{children:"@daily"})," – shorthand (also @hourly, @reboot)"]})]})]})]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-purple-800 light:border-purple-300 pb-3 inline-block",children:"📜 cron_manager.sh – Programmatic Crontab Control"}),e.jsx(a,{fileModule:o,title:"🛠️ cron_manager.sh – Add, list, remove cron jobs",highlightLines:[7,15,23,31,40]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 List"})," – display current user's crontab"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Add"})," – append a new job if not already present"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Remove"})," – delete all jobs matching a pattern"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Safety"})," – backup old crontab before modification"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Dry‑run"})," – preview changes"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Logging"})," – records all changes"]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-purple-800 light:border-purple-300 pb-3 inline-block",children:"📝 example_cron_job.sh – A Task to Schedule"}),e.jsx(a,{fileModule:i,title:"🔔 example_cron_job.sh – Logs timestamp and system info",highlightLines:[4,8]}),e.jsx("p",{className:"text-lg leading-relaxed",children:"A minimal, well‑behaved cron job: logs its output, uses absolute paths, and exits cleanly. Always redirect output in cron entries; otherwise, cron emails the output."})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Cron Pitfalls – Avoid These"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["❌ Assuming cron runs with your full shell environment (no .bashrc!).","❌ Not using absolute paths for commands and files.","❌ Forgetting to redirect output – cron emails you every time.","❌ Overwriting crontab instead of editing (`crontab newfile` erases old jobs).","❌ No logging – you don't know if the job ran or failed.","❌ Using `%` in crontab without escaping (percent signs are newlines in cron).","❌ Scheduling too frequently (e.g., * * * * * for heavy tasks).","❌ Not testing the command manually before putting it in cron."].map((s,r)=>e.jsx("div",{className:n("p-4 rounded-lg border border-red-800 light:border-red-300","bg-red-900/10 light:bg-red-50","hover:bg-red-900/20 light:hover:bg-red-100 transition-colors"),children:e.jsx("span",{className:"text-red-400 light:text-red-700",children:s})},r))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Cron Best Practices"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["🔹 Always use full paths: /usr/bin/command, not just 'command'.","🔹 Redirect stdout and stderr to a log file: >> /var/log/myjob.log 2>&1","🔹 Use absolute paths for all file references.","🔹 Set a proper `SHELL` and `PATH` at the top of your crontab.","🔹 Test your script manually with the same environment: env -i bash -c '...'","🔹 Keep cron jobs short and focused; chain tasks with scripts.","🔹 Lock critical jobs to prevent overlapping runs (flock).","🔹 Monitor cron logs (/var/log/syslog) for failures."].map((s,r)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:s})]},r))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Pro Tips – Beyond the Basics"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `@reboot` sparingly."})," It runs at system startup, but not after a restart of cron. For services, use systemd timers instead."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Randomise job start times."})," If many machines run the same cron job at midnight, your servers get thundering herds. Use ",e.jsx("code",{children:"sleep $((RANDOM % 3600))"})," at the beginning."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Keep a backup of your crontab."})," The script does this automatically, but you can also version control your cron jobs: ",e.jsx("code",{children:"crontab -l > my_crontab.bak"}),"."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `flock` to prevent overlapping."})," Example:",e.jsx("code",{className:"block mt-2 bg-gray-800 light:bg-gray-200 p-2 rounded",children:"*/5 * * * * /usr/bin/flock -n /tmp/myjob.lock /path/to/script.sh"})]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Consider systemd timers."})," Modern alternative to cron with better logging, dependency management, and integration. But cron is still everywhere."]})]})]}),e.jsxs("section",{className:n("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Observe carefully…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"cron_manager.sh"}),", we use ",e.jsx("code",{children:"crontab -l 2>/dev/null || true"}),". Why is the ",e.jsx("code",{children:"|| true"})," necessary? What happens if the user has no crontab?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Try modifying the script to accept a ",e.jsx("code",{children:"--user"})," flag to edit another user's crontab (as root). What security implications does this have?"]})]})]}),e.jsx("section",{className:n("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",t," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“In ",e.jsxs("span",{className:"font-semibold",children:[t," years"]}),", I've seen cron jobs that ran for years without anyone noticing they were broken – because output was mailed to an unread address.",e.jsx("span",{className:"text-blue-400",children:"Tuhina"})," in ",e.jsx("span",{className:"italic",children:"Ichapur"})," learned this the hard way. Now she always adds logging and a monitoring check. The best cron job is one that tells you when it fails.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#LogYourCron"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#AbsolutePaths"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#TestFirst"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Cron Scripting Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-purple-400",children:[e.jsx("li",{children:"Use absolute paths for commands and files."}),e.jsx("li",{children:"Redirect output to a log file (or to syslog)."}),e.jsx("li",{children:"Test the command manually in a clean environment."}),e.jsx("li",{children:"Set PATH and SHELL in crontab if needed."}),e.jsx("li",{children:"Avoid assumptions about environment variables."}),e.jsx("li",{children:"Make scripts idempotent – safe to run multiple times."}),e.jsx("li",{children:"Include error handling and logging inside the script."}),e.jsx("li",{children:"Monitor that cron is actually running."})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Example Script – Debugging with set -x (Topic40)"})})]})]})};export{x as default};
