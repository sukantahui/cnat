import{j as e}from"./index-meFSU1Lv.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as i}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const t=`#!/bin/bash
# loop_glob.sh – Safe glob loop for non‑recursive file processing
# Usage: ./loop_glob.sh

set -euo pipefail
IFS=$'\\n\\t'

# Process all .txt files in current directory
for file in *.txt; do
    # Guard: if no .txt files, glob returns literal '*.txt'
    [[ -f "$file" ]] || continue
    
    echo "Processing: $file"
    # Your command here – always quote!
    wc -l "$file"
done`,a=`#!/bin/bash
# loop_find.sh – Recursive file processing using find + while read
# Usage: ./loop_find.sh [directory]

set -euo pipefail
IFS=$'\\n\\t'

SEARCH_DIR="\${1:-.}"

# Use -print to output one filename per line
# IFS= and -r prevent word splitting and backslash interpretation
find "$SEARCH_DIR" -type f -name "*.log" -print | while IFS= read -r file; do
    echo "Processing: $file"
    # Your command here
    tail -n 5 "$file"
done`,o=`#!/bin/bash
# loop_robust.sh – Handle ANY filename (including newlines) with null delimiter
# Usage: ./loop_robust.sh [directory]

set -euo pipefail
IFS=$'\\n\\t'

SEARCH_DIR="\${1:-.}"

# -print0 uses null character as separator
# read -d '' reads until null
find "$SEARCH_DIR" -type f -name "*.conf" -print0 | while IFS= read -r -d '' file; do
    echo "Processing: $file"
    # Your command here – still quote!
    head -1 "$file"
done`,d=`#!/bin/bash
# loop_rename.sh – Batch rename files using sed pattern (with dry‑run)
# Usage: ./loop_rename.sh 's/old/new/' [--dry-run]

set -euo pipefail
IFS=$'\\n\\t'

PATTERN="\${1:-}"
DRY_RUN=0

if [[ -z "$PATTERN" ]]; then
    echo "Usage: $0 's/old/new/' [--dry-run]" >&2
    exit 1
fi

[[ "\${2:-}" == "--dry-run" ]] && DRY_RUN=1

for file in *; do
    [[ -f "$file" ]] || continue
    
    newname=$(echo "$file" | sed "$PATTERN")
    
    # Skip if name unchanged
    [[ "$file" == "$newname" ]] && continue
    
    # Avoid overwriting existing files
    if [[ -e "$newname" ]]; then
        echo "⚠️  Skipping: $newname already exists" >&2
        continue
    fi
    
    if [[ $DRY_RUN -eq 1 ]]; then
        echo "[DRY RUN] mv '$file' -> '$newname'"
    else
        mv "$file" "$newname"
        echo "Renamed: '$file' -> '$newname'"
    fi
done`,c=`#!/bin/bash
# loop_mistakes.sh – Classic errors – DO NOT USE
# This script demonstrates what NOT to do

# 1. Parsing ls – breaks on spaces, newlines, special chars
for file in $(ls *.txt); do
    echo "Processing: $file"  # Spaces split into separate files!
done

# 2. Unquoted variable – word splitting and glob expansion
for file in *.txt; do
    wc -l $file   # Fails if filename contains spaces or * 
done

# 3. Using find output directly in for loop
for file in $(find . -name "*.sh"); do
    chmod +x $file   # Filenames with spaces cause errors
done

# 4. No guard for empty glob – when no .pdf files exist
for pdf in *.pdf; do
    rm "$pdf"   # Deletes file literally named '*.pdf' if no match!
done

# 5. Filename starts with dash – interpreted as option
for file in *; do
    rm $file   # If file is "-rf", this becomes \`rm -rf\`
done`,g=()=>{const r=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fileFlow {
          0% { transform: translateX(0); opacity: 0.6; }
          50% { transform: translateX(10px); opacity: 1; }
          100% { transform: translateX(0); opacity: 0.6; }
        }
      `}),e.jsxs("div",{className:s("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:s("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:["🔁 Example Script: ",e.jsx("span",{className:"text-blue-400",children:"Looping Through Files"})]}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["Don't fear filenames with spaces, newlines, or asterisks.",e.jsx("span",{className:"text-blue-400",children:" Abhronila"})," in ",e.jsx("span",{className:"italic",children:"Shyamnagar"})," and",e.jsx("span",{className:"text-blue-400",children:" Debangshu"})," in ",e.jsx("span",{className:"italic",children:"Barrackpore"}),"now process thousands of files safely – and you will too."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"360",height:"140",viewBox:"0 0 360 140",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Files flowing through a loop",children:[e.jsxs("g",{transform:"translate(20, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"30",height:"35",rx:"4",fill:"#60a5fa"}),e.jsx("rect",{x:"5",y:"-3",width:"30",height:"35",rx:"4",fill:"#3b82f6"}),e.jsx("rect",{x:"10",y:"-6",width:"30",height:"35",rx:"4",fill:"#2563eb"}),e.jsx("text",{x:"15",y:"22",fontSize:"12",fill:"#ffffff",children:"*.txt"})]}),e.jsx("line",{x1:"60",y1:"60",x2:"100",y2:"60",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(120, 30)",children:[e.jsx("circle",{cx:"40",cy:"40",r:"30",fill:"none",stroke:"#a78bfa",strokeWidth:"2",strokeDasharray:"6 4",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;20;0",dur:"3s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M40 25 L40 40 L52 48",stroke:"#a78bfa",strokeWidth:"2",fill:"none"})]}),e.jsxs("g",{transform:"translate(230, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"30",height:"35",rx:"4",fill:"#4ade80"}),e.jsx("rect",{x:"35",y:"5",width:"30",height:"35",rx:"4",fill:"#34d399"}),e.jsx("rect",{x:"70",y:"-2",width:"30",height:"35",rx:"4",fill:"#10b981"}),e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 0; -2 2; 0 0",dur:"2s",repeatCount:"indefinite",additive:"sum"})]}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#f59e0b"})})})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"🧠 The Challenge: Filenames Are Just Bytes"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["Unix filenames can contain ",e.jsx("span",{className:"text-amber-400",children:"any character except `/` and null"}),". That includes spaces, newlines, tabs, asterisks, and even control characters."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Tuhina"})," once lost hours because a file named",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-2 py-0.5 rounded",children:"-rf *.txt"})," (yes, starting with a dash) caused ",e.jsx("code",{children:"rm $file"})," to interpret it as an option. Quoting and ",e.jsx("code",{children:"--"})," saved the day."]}),e.jsx("p",{children:"The three robust patterns are:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Glob loop"})," – simple, non‑recursive, works when filenames don't start with dash."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Find + -exec"})," – recursive, safe with `-exec` and `+`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Find + while read"})," – most flexible, but requires `-print0` and `read -d ''`."]})]})]}),e.jsxs("div",{className:s("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-blue-700","hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📌"})," The Golden Rule"]}),e.jsx("p",{className:"text-lg italic",children:"“Quote everything, and use null delimiters when possible.”"})]})]})]}),e.jsxs("section",{className:"space-y-12",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"📜 Safe File Looping – Four Essential Patterns"}),e.jsx(i,{fileModule:t,title:"🌀 loop_glob.sh – Simple non‑recursive glob loop",highlightLines:[6,9]}),e.jsx(i,{fileModule:a,title:"🔍 loop_find.sh – Recursive processing with find + read",highlightLines:[7,9]}),e.jsx(i,{fileModule:o,title:"🛡️ loop_robust.sh – Handle ANY filename (null delimiter)",highlightLines:[6,9]}),e.jsx(i,{fileModule:d,title:"✏️ loop_rename.sh – Batch rename with pattern (dry‑run support)",highlightLines:[9,15,20]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ loop_mistakes.sh – What NOT to do"}),e.jsx(i,{fileModule:c,title:"💥 loop_mistakes.sh – Classic errors",highlightLines:[3,6,9]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",children:["❌ Parsing `ls` – `for i in $(ls *.txt)`","❌ Unquoted variable – `for i in *.txt; do process $i; done`","❌ Using `for i in $(find . -name '*.txt')`","❌ Not checking if glob matches anything (literal '*' when no files)","❌ Forgetting `--` before filenames starting with dash","❌ Modifying `IFS` without saving/restoring"].map((n,l)=>e.jsx("div",{className:s("p-4 rounded-lg border border-red-800 light:border-red-300","bg-red-900/10 light:bg-red-50","hover:bg-red-900/20 light:hover:bg-red-100 transition-colors"),children:e.jsx("span",{className:"text-red-400 light:text-red-700",children:n})},l))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Best Practices for File Loops"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["🔹 Use `for file in *.txt` – not `ls`.",'🔹 Always quote: `"$file"`.','🔹 Check if glob expands to non‑null: `for f in *.txt; do [ -f "$f" ] || continue; done`.',"🔹 For recursive: `find ... -print0 | while IFS= read -r -d '' file; do`.",'🔹 Use `--` to separate options from arguments: `rm -- "$file"`.',"🔹 Prefer `-exec cmd {} +` over `-exec cmd {} \\;` for efficiency.","🔹 Avoid `cat file | while read` – use redirection.","🔹 Test with `--dry-run` before destructive operations."].map((n,l)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:n})]},l))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Pro Tips"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Glob expansion is safe, but hidden."})," If a directory has no `.txt` files, the loop still runs once with `file='*.txt'`. Always guard with `[ -f \"$file\" ]` or use `shopt -s nullglob` (bash) to make unmatched globs disappear."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `find -execdir`"})," instead of `-exec` when possible – it runs the command inside the file's directory, avoiding path confusion."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"For parallel processing,"})," combine `find` with `xargs -0` or GNU Parallel:",e.jsx("code",{className:"block mt-2 bg-gray-800 light:bg-gray-200 p-2 rounded",children:"find . -name '*.log' -print0 | xargs -0 -P 4 -n 1 gzip"})]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Set `IFS=$'\\n'` carefully"})," – it still breaks on filenames with newlines. Prefer null‑delimiter approaches."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"In bash, use `globstar` (`**`)"})," for recursive globbing, but be mindful of large directories. Enable with `shopt -s globstar`."]})]})]}),e.jsxs("section",{className:s("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Observe carefully…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"loop_robust.sh"}),", we use ",e.jsx("code",{children:"while IFS= read -r -d '' file"}),". Why must we set ",e.jsx("code",{children:"IFS="}),"? What happens if we omit it?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Try creating a file with a trailing newline in its name – impossible, but you can create one with ",e.jsx("code",{children:"touch $'file\\nwith\\nnewlines'"}),". Run the robust loop and the find+read loop. Which one preserves the full filename?"]})]})]}),e.jsx("section",{className:s("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",r," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“I remember a student in ",e.jsx("span",{className:"italic",children:"Naihati"})," who named his project file",e.jsx("code",{children:"final project (2024).txt"}),". The space broke his backup script. He learned to quote. Then he named a file ",e.jsx("code",{children:"*"})," as a joke, and his glob loop deleted everything. Now he teaches null‑delimiters to freshmen. This is the rite of passage for every shell scripter.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#QuoteYourVars"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#NullDelimiter"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#FindNotLs"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ File Looping Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-blue-400",children:[e.jsx("li",{children:"Never parse `ls`."}),e.jsx("li",{children:'Always quote `"$file"`.'}),e.jsx("li",{children:'Check for empty glob: `[ -f "$f" ] || continue`.'}),e.jsx("li",{children:"For recursive, use `find -print0` + `while read -d ''`."}),e.jsx("li",{children:"Use `--` before filenames that might start with dash."}),e.jsx("li",{children:"Avoid modifying `IFS` globally."}),e.jsx("li",{children:"Test with `--dry-run` for destructive loops."}),e.jsx("li",{children:"Know when to use `-exec` vs `while read`."})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Example Script – Checking exit status (Topic37)"})})]})]})};export{g as default};
