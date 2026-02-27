import{j as e}from"./index-meFSU1Lv.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as i}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const a=`#!/bin/sh
# logging_lib.sh – Reusable logging functions
# Source this file from other scripts: . /path/to/logging_lib.sh

# Guard against multiple sourcing
[ -n "$_LOGGING_LIB" ] && return
_LOGGING_LIB=1

# Log an informational message (to stdout)
log_info() {
    echo "[INFO] $(date '+%Y-%m-%d %H:%M:%S') - $*"
}

# Log an error message (to stderr)
log_error() {
    echo "[ERROR] $(date '+%Y-%m-%d %H:%M:%S') - $*" >&2
}

# Print a fatal error and exit the script
die() {
    log_error "$*"
    exit 1
}

# Set verbose mode (if -v is passed)
debug() {
    [ "$VERBOSE" = "1" ] && echo "[DEBUG] $*" >&2
}`,l=`#!/bin/sh
# backup_using_lib.sh – Demonstrates sourcing the logging library
# Usage: ./backup_using_lib.sh <source_dir> <dest_dir>

# Locate library relative to script
SCRIPT_DIR="$(dirname "$0")"
. "$SCRIPT_DIR/logging_lib.sh"

if [ $# -ne 2 ]; then
    echo "Usage: $0 <source_dir> <dest_dir>" >&2
    exit 1
fi

SRC="$1"
DST="$2"

log_info "Starting backup from $SRC to $DST"
[ ! -d "$SRC" ] && die "Source directory $SRC does not exist."

mkdir -p "$DST" || die "Cannot create destination directory."

cp -r "$SRC"/* "$DST" 2>/dev/null
if [ $? -eq 0 ]; then
    log_info "Backup completed successfully."
else
    log_error "Backup finished with warnings (some files may not have copied)."
fi`,o=`#!/bin/sh
# load_config.sh – Load configuration from a file and validate
# Usage: ./load_config.sh [config-file]

CONFIG_FILE="\${1:-./config_example.conf}"

if [ ! -f "$CONFIG_FILE" ]; then
    echo "Config file not found: $CONFIG_FILE" >&2
    exit 1
fi

# Source the config file
. "$CONFIG_FILE"

# Validate required variables
[ -z "$BACKUP_DIR" ] && { echo "BACKUP_DIR not set"; exit 1; }
[ -z "$RETENTION_DAYS" ] && { echo "RETENTION_DAYS not set"; exit 1; }

# Use defaults if not set
LOG_LEVEL="\${LOG_LEVEL:-info}"
VERBOSE="\${VERBOSE:-0}"

echo "Configuration loaded successfully:"
echo "  BACKUP_DIR = $BACKUP_DIR"
echo "  LOG_LEVEL  = $LOG_LEVEL"
echo "  RETENTION_DAYS = $RETENTION_DAYS"
echo "  VERBOSE    = $VERBOSE"`,c=`#!/bin/sh
# pipe_filter_example.sh – A filter: reads lines, prepends timestamp, writes to stdout
# Example: ./pipe_filter_example.sh < access.log > annotated.log

while IFS= read -r line; do
    printf "%s | %s\\n" "$(date '+%Y-%m-%d %H:%M:%S')" "$line"
done

# Exit status: success if all reads succeeded
exit 0`,d=`# config_example.conf – Sample configuration file\r
# Format: KEY="value" (bash/sh compatible)\r
\r
BACKUP_DIR="/var/backups"\r
LOG_LEVEL="info"\r
RETENTION_DAYS=7\r
VERBOSE=0`,u=()=>{const r=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gearRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes moduleConnect {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
      `}),e.jsxs("div",{className:s("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:s("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:"🔧 Writing Reusable Utility Scripts"}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["Don't copy‑paste – ",e.jsx("span",{className:"text-amber-400 light:text-amber-600",children:"DRY"})," (Don't Repeat Yourself). Build a toolbox of shell functions that"," ",e.jsx("span",{className:"text-blue-400",children:"Swadeep"}),","," ",e.jsx("span",{className:"text-blue-400",children:"Tuhina"}),", and your entire team can share."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"360",height:"160",viewBox:"0 0 360 160",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Modular script components connected",children:[e.jsxs("g",{transform:"translate(30, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"50",rx:"8",fill:"#312e81",stroke:"#a78bfa",strokeWidth:"2",className:"light:fill-indigo-100 light:stroke-indigo-600"}),e.jsx("text",{x:"12",y:"30",fontSize:"14",fill:"#e0e7ff",children:"lib.sh"}),e.jsx("circle",{cx:"55",cy:"15",r:"6",fill:"#c084fc"}),e.jsx("path",{d:"M55 9 L55 21 M49 12 L61 18 M49 18 L61 12",stroke:"white",strokeWidth:"1"}),e.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0 55 15; 360 55 15",dur:"8s",repeatCount:"indefinite",begin:"mouseover"})]}),e.jsx("line",{x1:"100",y1:"65",x2:"130",y2:"65",stroke:"#6b7280",strokeWidth:"2",strokeDasharray:"6 4",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;30;0",dur:"2s",repeatCount:"indefinite"})}),e.jsxs("g",{transform:"translate(140, 20)",children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"40",rx:"6",fill:"#1e293b",stroke:"#60a5fa"}),e.jsx("text",{x:"8",y:"25",fontSize:"12",fill:"#bfdbfe",children:"backup.sh"})]}),e.jsxs("g",{transform:"translate(140, 80)",children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"40",rx:"6",fill:"#1e293b",stroke:"#60a5fa"}),e.jsx("text",{x:"8",y:"25",fontSize:"12",fill:"#bfdbfe",children:"cleanup.sh"})]}),e.jsxs("g",{transform:"translate(240, 100)",children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"50",rx:"8",fill:"#374151",stroke:"#9ca3af"}),e.jsx("text",{x:"12",y:"30",fontSize:"14",fill:"#d1d5db",children:"config.sh"})]}),e.jsx("line",{x1:"240",y1:"125",x2:"180",y2:"100",stroke:"#9ca3af",strokeWidth:"1.5",strokeDasharray:"4 3"})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-amber-800 light:border-amber-300 pb-3 inline-block",children:"🧱 What Makes a Script “Reusable”?"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-amber-400",children:"Modularity"})," – break code into functions, each doing one thing well. Group related functions into ",e.jsx("strong",{children:"libraries"}),"."]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-amber-400",children:"Sourcing"})," – use ",e.jsx("code",{children:"."})," or ",e.jsx("code",{children:"source"})," ","to import functions. Never copy‑paste the same validation logic into ten scripts."]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-amber-400",children:"Configuration separation"})," – keep settings (file paths, thresholds) outside the code, in config files or environment variables."]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-amber-400",children:"Chainability"})," – scripts that read from stdin and write to stdout can be combined with pipes, just like traditional Unix tools."]})]}),e.jsxs("div",{className:s("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📌"})," Real‑world Scenario"]}),e.jsxs("p",{className:"text-lg",children:["The school's IT club in ",e.jsx("span",{className:"italic",children:"Ichapur"})," maintains 20+ scripts.",e.jsx("span",{className:"text-blue-400",children:" Abhronila"})," created a logging library; now every script logs consistently. When they added timestamps, all scripts improved instantly."]})]})]})]}),e.jsxs("section",{className:"space-y-12",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-amber-800 light:border-amber-300 pb-3 inline-block",children:"🧪 Reusable Components in Action"}),e.jsx(i,{fileModule:a,title:"📚 logging_lib.sh – A reusable logging library",highlightLines:[3,7,15]}),e.jsx(i,{fileModule:l,title:"💾 backup_using_lib.sh – Script that sources the library",highlightLines:[2,9,16]}),e.jsx(i,{fileModule:d,title:"⚙️ config_example.conf – Sample configuration file (key=value)",highlightLines:[]}),e.jsx(i,{fileModule:o,title:"🔧 load_config.sh – Load and validate configuration",highlightLines:[6,12,18]}),e.jsx(i,{fileModule:c,title:"🔀 pipe_filter_example.sh – Filter pattern (stdin → stdout)",highlightLines:[4,10]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Pitfalls in Reusable Scripts"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["❌ Not using `local` in functions – variables leak and cause side effects.","❌ Sourcing without checking if already sourced (no guard).","❌ Hard‑coding paths inside libraries (use config or env vars).","❌ Functions that both print and return – mixed output vs status.","❌ Assuming library is in $PATH – source with relative/absolute path.","❌ No help/usage message – others can't figure out how to use it.","❌ Not returning meaningful exit codes – 0 for success, 1‑127 for errors.","❌ Polluting the environment with unnecessary variables."].map((t,n)=>e.jsx("div",{className:s("p-5 rounded-lg border border-red-800 light:border-red-300","bg-red-900/20 light:bg-red-50","hover:bg-red-900/30 light:hover:bg-red-100 transition-colors"),children:e.jsx("span",{className:"text-lg",children:t})},n))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Best Practices"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["📦 Group related functions in one file – e.g., logging.sh, validation.sh.","🔒 Always declare function-scoped variables with `local`.","📖 Provide usage/help function: `show_help() { ... }`.","📂 Source libraries using `dirname $0` to locate relative paths.","⚙️ Separate configuration from code – source a .conf file or read with `grep`.","🔄 Return numeric exit codes; use `return` in functions, `exit` in scripts.","🧪 Test libraries independently – write small test scripts.","📚 Use `set -euo pipefail` inside scripts, but be careful in libraries (avoid unexpected exits).","🗂️ Install libraries to standard locations (e.g., /usr/local/lib) and add to $PATH."].map((t,n)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:t})]},n))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Pro Tips"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Guard against multiple sourcing"})," – at the top of your library:",e.jsx("code",{className:"block mt-2 bg-gray-800 light:bg-gray-200 p-2 rounded",children:'[ -n "$_LOGGING_LIB" ] && return; _LOGGING_LIB=1'})]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Make scripts idempotent"})," – running them twice should not break things. Use `mkdir -p`, `rsync --ignore-existing`, etc."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Provide a `--version` flag"})," – embed a version string in your library. Update it with each change."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `declare -g` in bash"})," to intentionally set global variables from functions. But prefer local + return values."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Write a man page or README"})," – even a simple text file. Your future self will thank you."]})]})]}),e.jsxs("section",{className:s("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Think about…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"logging_lib.sh"}),", why do we use ",e.jsx("code",{children:"echo ... >&2"})," for errors? What happens if a function prints something instead of using return values?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Try modifying ",e.jsx("code",{children:"backup_using_lib.sh"})," to source the library using a relative path, then move the script to another directory. Does it still work? How can you fix it?"]})]})]}),e.jsx("section",{className:s("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",r," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“When ",e.jsx("span",{className:"text-blue-400",children:"Debangshu"})," first refactored his backup script to use our logging library, he accidentally left debug echoes. We caught it in code review. That's the power of reuse: one fix benefits everyone. Teach your students in"," ",e.jsx("span",{className:"italic",children:"Naihati"})," to think in libraries, not just scripts.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#DRY"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#ModularShell"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#LocalVariables"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Reusable Script Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-amber-400",children:[e.jsx("li",{children:"Functions use `local` variables."}),e.jsx("li",{children:"Libraries have a guard against multiple sourcing."}),e.jsx("li",{children:"Configuration is separated (no hard‑coded paths)."}),e.jsx("li",{children:"Scripts return meaningful exit codes."}),e.jsx("li",{children:"Error messages go to stderr."}),e.jsx("li",{children:"Help/usage message is provided."}),e.jsx("li",{children:"Library can be sourced from anywhere (relative path resolved)."}),e.jsx("li",{children:"No unintended side effects (global namespace pollution)."})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Mini Project – Automated backup script (Topic32)"})})]})]})};export{u as default};
