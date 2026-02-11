import{j as e}from"./index-D1bhWpF_.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as i}from"./ShellFileLoader-izSp1ZwA.js";import"./prism-B_z3Scul.js";const t=`#!/bin/bash
# find_duplicates.sh – Recursively find duplicate files by MD5 checksum
# Usage: ./find_duplicates.sh [directory]
# Example: ./find_duplicates.sh ~/Photos

set -euo pipefail
IFS=$'\\n\\t'

SEARCH_DIR="\${1:-.}"

if [[ ! -d "$SEARCH_DIR" ]]; then
    echo "Error: '$SEARCH_DIR' is not a directory." >&2
    exit 1
fi

declare -A hash_map

find "$SEARCH_DIR" -type f -print0 | while IFS= read -r -d '' file; do
    # Compute MD5 hash
    hash=$(md5sum "$file" | awk '{print $1}')
    
    if [[ -n "\${hash_map[$hash]:-}" ]]; then
        echo "Duplicate:"
        echo "  \${hash_map[$hash]}"
        echo "  $file"
        echo "---"
    else
        hash_map["$hash"]="$file"
    fi
done

exit 0`,l=`#!/bin/bash
# disk_usage_alert.sh – Check disk usage and send alert if above threshold
# Usage: ./disk_usage_alert.sh [threshold%] [email]
# Example (cron): 0 8 * * * /usr/local/bin/disk_usage_alert.sh 80 admin@example.com

set -euo pipefail
IFS=$'\\n\\t'

THRESHOLD="\${1:-80}"
EMAIL="\${2:-root}"

# Temporary file for message
TMPFILE=$(mktemp)
trap 'rm -f "$TMPFILE"' EXIT

# Check each mounted filesystem (skip pseudo, tmpfs)
df -P | awk 'NR>1 && $1 !~ /^(tmpfs|devtmpfs|none)/ {print $5 " " $6}' | while read -r line; do
    usage=$(echo "$line" | awk '{print $1}' | sed 's/%//')
    mount=$(echo "$line" | awk '{print $2}')
    
    if [[ $usage -gt $THRESHOLD ]]; then
        echo "⚠️  ALERT: $mount is \${usage}% full (threshold: \${THRESHOLD}%)" >> "$TMPFILE"
    fi
done

# Send email if any alerts
if [[ -s "$TMPFILE" ]]; then
    {
        echo "Disk Usage Alert on $(hostname) at $(date)"
        echo ""
        cat "$TMPFILE"
    } | mail -s "Disk Space Alert" "$EMAIL"
fi

exit 0`,d=`#!/bin/sh
# csv_parser.sh – Simple CSV reader (POSIX sh)
# Usage: ./csv_parser.sh file.csv
# Reads CSV and prints each field in brackets

if [ $# -ne 1 ]; then
    echo "Usage: $0 file.csv" >&2
    exit 1
fi

FILE="$1"
[ -f "$FILE" ] || { echo "File not found: $FILE" >&2; exit 1; }

while IFS= read -r line; do
    # Skip empty lines
    [ -z "$line" ] && continue
    
    # Set IFS to comma temporarily
    OLDIFS="$IFS"
    IFS=','
    # Read fields into positional parameters
    set -- $line
    IFS="$OLDIFS"
    
    echo "--- Line ---"
    i=1
    for field; do
        echo "Field $i: [$field]"
        i=$((i + 1))
    done
done < "$FILE"

exit 0`,o=`#!/bin/bash
# batch_rename.sh – Rename files using sed pattern
# Usage: ./batch_rename.sh 's/old/new/' [--dry-run]
# Example: ./batch_rename.sh 's/ /_/g'   # replace spaces with underscores

set -euo pipefail

PATTERN="\${1:-}"
DRY_RUN=0

if [[ -z "$PATTERN" ]]; then
    echo "Usage: $0 's/old/new/' [--dry-run]" >&2
    exit 1
fi

shift
[[ "\${1:-}" == "--dry-run" ]] && DRY_RUN=1

for file in *; do
    # Skip if not a regular file (or you can remove this check)
    [[ -f "$file" ]] || continue
    
    newname=$(echo "$file" | sed "$PATTERN")
    
    if [[ "$file" != "$newname" ]]; then
        if [[ -e "$newname" ]]; then
            echo "⚠️  Skipping: $newname already exists" >&2
            continue
        fi
        
        if [[ $DRY_RUN -eq 1 ]]; then
            echo "[DRY RUN] mv '$file' '$newname'"
        else
            mv "$file" "$newname"
            echo "Renamed: '$file' -> '$newname'"
        fi
    fi
done

exit 0`,c=`#!/bin/bash
# website_checker.sh – Check HTTP status of a URL
# Usage: ./website_checker.sh <URL> [expected_status]
# Example: ./website_checker.sh https://example.com 200

set -euo pipefail

URL="\${1:-}"
EXPECTED="\${2:-200}"

if [[ -z "$URL" ]]; then
    echo "Usage: $0 <URL> [expected_status]" >&2
    exit 1
fi

# Check if curl is available
if ! command -v curl >/dev/null 2>&1; then
    echo "Error: curl is not installed." >&2
    exit 1
fi

# Get HTTP status code (follow redirects)
status=$(curl -L -s -o /dev/null -w "%{http_code}" "$URL")

if [[ "$status" == "$EXPECTED" ]]; then
    echo "✅ $URL is OK (status $status)"
    exit 0
else
    echo "❌ $URL returned $status (expected $EXPECTED)" >&2
    exit 1
fi`,f=()=>{const r=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes cardGlow {
          0% { box-shadow: 0 0 0px rgba(59,130,246,0.3); }
          50% { box-shadow: 0 0 15px rgba(59,130,246,0.6); }
          100% { box-shadow: 0 0 0px rgba(59,130,246,0.3); }
        }
      `}),e.jsxs("div",{className:s("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:s("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:"📚 Practical Examples & Reference Scripts"}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["A living toolbox – patterns that solve real problems, from",e.jsx("span",{className:"text-blue-400",children:" Barrackpore"})," classrooms to",e.jsx("span",{className:"text-blue-400",children:" Naihati"})," server rooms. Adapt, reuse, and master."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"240",height:"120",viewBox:"0 0 240 120",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Toolbox with script icons",children:[e.jsx("rect",{x:"40",y:"40",width:"160",height:"60",rx:"10",fill:"#312e81",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("rect",{x:"70",y:"20",width:"100",height:"25",rx:"8",fill:"#1e293b",stroke:"#a78bfa",strokeWidth:"1.5"}),e.jsx("text",{x:"98",y:"42",fontSize:"14",fill:"#e0e7ff",children:"scripts"}),e.jsxs("g",{transform:"translate(60, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"25",height:"8",rx:"2",fill:"#60a5fa"}),e.jsx("rect",{x:"8",y:"-12",width:"10",height:"12",rx:"2",fill:"#60a5fa"}),e.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0 12 0; 10 12 0; 0 12 0",dur:"2s",repeatCount:"indefinite",begin:"mouseover"})]}),e.jsxs("g",{transform:"translate(120, 70)",children:[e.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"none",stroke:"#34d399",strokeWidth:"2"}),e.jsx("path",{d:"M12 6 L12 12 L16 16",stroke:"#34d399",strokeWidth:"2",fill:"none"})]}),e.jsxs("g",{transform:"translate(170, 70)",children:[e.jsx("rect",{x:"0",y:"4",width:"20",height:"4",rx:"2",fill:"#f59e0b"}),e.jsx("rect",{x:"6",y:"0",width:"8",height:"8",rx:"1",fill:"#f59e0b"})]})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"🧩 Patterns, Not Copy‑Paste"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["These scripts are ",e.jsx("span",{className:"text-amber-400",children:"teaching tools"}),", not final products. Each demonstrates a common task and embodies the defensive, portable practices we’ve covered."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Swadeep"})," used the CSV parser to analyse exam scores.",e.jsx("span",{className:"text-blue-400",children:" Abhronila"})," adapted the disk monitor for her Raspberry Pi in ",e.jsx("span",{className:"italic",children:"Ichapur"}),". The patterns are yours to modify."]})]}),e.jsxs("div",{className:s("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-blue-700","hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"🔑"})," What Makes a Good Reference Script?"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Clear, single responsibility"}),e.jsx("li",{children:"Self‑documenting code"}),e.jsx("li",{children:"Error handling & usage message"}),e.jsx("li",{children:"Works on both Bash and POSIX sh (where possible)"}),e.jsx("li",{children:"Easy to adapt"})]})]})]})]}),e.jsxs("section",{className:"space-y-16",children:[e.jsxs("article",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-purple-800 light:border-purple-300 pb-2 inline-block",children:"🗂️ 1. Find Duplicate Files (by checksum)"}),e.jsx(i,{fileModule:t,title:"find_duplicates.sh – Recursively find duplicate files using MD5",highlightLines:[6,15,22]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Use case:"})," Clean up duplicate photos, documents"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Key technique:"})," `md5sum`, associative array (bash)"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Pitfall:"})," Large files – checksum takes time. Add progress."]})]})]}),e.jsxs("article",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-2 inline-block",children:"💾 2. Disk Usage Alert (threshold + email)"}),e.jsx(i,{fileModule:l,title:"disk_usage_alert.sh – Check mount points and send alert if usage > THRESHOLD",highlightLines:[8,15,24]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Use case:"})," Cron job to monitor server disk space"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Key technique:"})," `df -P`, `awk`, `mail`"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Pitfall:"})," `df` output format varies; `-P` helps."]})]})]}),e.jsxs("article",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-2 inline-block",children:"📊 3. CSV Parser (Simple, POSIX‑friendly)"}),e.jsx(i,{fileModule:d,title:"csv_parser.sh – Read CSV line by line, extract fields",highlightLines:[5,12,18]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Use case:"})," Process exported spreadsheets, logs"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Key technique:"})," `IFS=,`, `read -r`, quotes handling (basic)"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Pitfall:"})," Doesn’t handle quoted commas; for robust CSV use a real parser."]})]})]}),e.jsxs("article",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-2 inline-block",children:"✏️ 4. Batch Rename (pattern substitution)"}),e.jsx(i,{fileModule:o,title:"batch_rename.sh – Rename files using sed pattern",highlightLines:[6,10,15]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Use case:"})," Convert spaces to underscores, change extensions"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Key technique:"})," Parameter expansion, `sed`, dry‑run option"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Pitfall:"})," Overwriting existing files – use `-n` (no clobber)."]})]})]}),e.jsxs("article",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-indigo-800 light:border-indigo-300 pb-2 inline-block",children:"🌐 5. Website Availability Checker"}),e.jsx(i,{fileModule:c,title:"website_checker.sh – Check HTTP status with curl",highlightLines:[7,14,20]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Use case:"})," Monitor uptime, notify on failure"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Key technique:"})," `curl -I`, `grep -q`, `mail`"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Pitfall:"})," Redirects – follow with `-L`."]})]})]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Pitfalls When Reusing Examples"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["❌ Using the script verbatim without understanding the environment.","❌ Forgetting to make scripts executable (`chmod +x`).","❌ Hard‑coded paths that don't exist on your system.","❌ Missing dependencies (md5sum, curl, mail).","❌ Running untested scripts with `sudo` – always dry‑run first.","❌ Not adjusting thresholds (disk usage, timeouts) to your needs."].map((n,a)=>e.jsx("div",{className:s("p-5 rounded-lg border border-red-800 light:border-red-300","bg-red-900/20 light:bg-red-50","hover:bg-red-900/30 light:hover:bg-red-100 transition-colors"),children:e.jsx("span",{className:"text-lg",children:n})},a))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ How to Maintain Your Own Script Library"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["📚 Organise by category: system, network, file, etc.","📝 Include a header comment describing purpose, usage, dependencies.","🔖 Version control your collection (Git).","🧪 Write a small test harness for each script.","🔗 Symlink scripts into ~/.local/bin for easy access.","📦 Use configuration files, not hard‑coded values.","🔄 Refactor common functions into a shared library.","📆 Review and update scripts periodically."].map((n,a)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:n})]},a))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Pro Tips – From Reference to Production"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Add a `--dry-run` flag to every destructive script."})," It prevents disasters and builds trust. All renaming/deleting scripts here include one."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `mktemp` for temporary files."})," Even in small scripts, it’s a good habit. See the disk usage script for an example."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Make scripts idempotent."})," Running them twice should be safe. The duplicate finder is read‑only; the batch renamer refuses to overwrite."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Document exit codes."})," Users rely on them. A comment like",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-2 py-1 rounded",children:"# Exit: 0 if OK, 1 if no files, 2 on error"})," helps."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Provide a `--version` flag."})," When you improve a script, bump the version. Your colleagues will know they have the latest."]})]})]}),e.jsxs("section",{className:s("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Observe carefully…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"find_duplicates.sh"}),", we use ",e.jsx("code",{children:"md5sum"})," and store the hash as the key. What happens if two different files have the same hash (collision)? For critical data, would you add a second hash (SHA256) as a safeguard?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Try modifying ",e.jsx("code",{children:"batch_rename.sh"})," to replace spaces with underscores. Add a `-r` flag to make it recursive."]})]})]}),e.jsx("section",{className:s("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",r," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“I started collecting shell scripts on floppy disks in 1998. Today, ",e.jsx("span",{className:"text-blue-400",children:"Debangshu"}),"has a Git repository with over 100 utilities he and ",e.jsx("span",{className:"text-blue-400",children:"Tuhina"})," share. That collection began with patterns like these. Don’t just copy them – understand why they work, break them, fix them, and make them your own. That’s how mastery begins.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#BuildYourToolbox"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#PatternsNotCopyPaste"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#ScriptRepository"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Reference Script Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-blue-400",children:[e.jsx("li",{children:"Header comment with purpose, usage, dependencies"}),e.jsx("li",{children:"Set `-euo pipefail` (bash) or equivalent defensive mode"}),e.jsx("li",{children:"Quote all variable expansions"}),e.jsx("li",{children:"Check command existence (e.g., `command -v curl`)"}),e.jsx("li",{children:"Provide `--help` and usage message"}),e.jsx("li",{children:"Destructive operations have `--dry-run`"}),e.jsx("li",{children:"Error messages go to stderr"}),e.jsx("li",{children:"Exit with non‑zero on failure"}),e.jsx("li",{children:"Tested with edge cases (empty input, spaces, globs)"})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Example Script – User input validation (Topic35)"})})]})]})};export{f as default};
