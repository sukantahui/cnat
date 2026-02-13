import{j as e}from"./index-Do7ncMju.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as n}from"./ShellFileLoader-CfxYwE3z.js";import"./prism-B9ltoSp8.js";const a=`#!/bin/bash
# mistakes_demo.sh – A script full of classic beginner errors
# DO NOT USE THIS AS A TEMPLATE!

# 1. Unquoted variable
dir=/tmp/my folder
mkdir $dir          # Breaks – tries to create /tmp/my and folder

# 2. Using [ ] with > inside
count=5
if [ $count > 3 ]; then   # > is output redirection, creates file named "3"
    echo "count > 3"
fi

# 3. Parsing ls
for file in $(ls *.txt); do
    echo "Processing $file"   # Fails if filenames contain spaces
done

# 4. Backticks and missing error handling
output=\`grep root /etc/passwd\`
echo "Found: $output"        # No check if grep succeeded

# 5. Forgetting to exit on error
cd /nonexistent
rm -rf *                    # If cd fails, this runs in current directory!

echo "Done"`,l=`#!/bin/bash
# corrected_demo.sh – Professional rewrite of mistakes_demo.sh
set -euo pipefail
IFS=$'\\n\\t'

# 1. Quoted variable – space handled correctly
dir="/tmp/my folder"
mkdir -p "$dir" || { echo "Failed to create $dir" >&2; exit 1; }

# 2. Correct numeric comparison
count=5
if [[ $count -gt 3 ]]; then
    echo "count > 3"
fi

# 3. Use glob directly – no parsing ls
for file in *.txt; do
    # Check if file exists (when no match, glob returns literal '*.txt')
    [[ -f "$file" ]] || continue
    echo "Processing $file"
done

# 4. Command substitution with $() and error check
if output=$(grep root /etc/passwd); then
    echo "Found: $output"
else
    echo "root not found" >&2
fi

# 5. Ensure directory exists before operating
cd /nonexistent 2>/dev/null || { echo "Directory missing" >&2; exit 1; }
rm -rf *

echo "Done"`,o=`#!/bin/bash
# pitfall_array.sh – Demonstrates word splitting and globbing

# Create some test files
touch "a b.txt" "*.txt" "c.txt"

echo "--- WRONG: Unquoted expansion of glob ---"
# WRONG: Unquoted expansion – * is expanded by the shell
files=(*.txt)
for f in \${files[@]}; do   # <-- missing quotes!
    echo "File: $f"
done

echo -e "\\n--- RIGHT: Quoted array expansion ---"
# RIGHT: Quotes preserve each element
for f in "\${files[@]}"; do
    echo "File: $f"
done

# Clean up
rm -f "a b.txt" "*.txt" "c.txt"`,c=`#!/bin/bash
# defensive_template.sh – A robust starting point for any new script
# Usage: ./defensive_template.sh [options]

set -euo pipefail
IFS=$'\\n\\t'

# ---------- Global settings ----------
VERSION="1.0.0"
VERBOSE=0

# ---------- Functions ----------
usage() {
    cat <<EOF
Usage: $0 [OPTIONS]

Options:
  -v         Verbose output
  --version  Show version
  -h, --help Show this help
EOF
    exit 0
}

log_info() {
    echo "[INFO] $*"
}

log_error() {
    echo "[ERROR] $*" >&2
}

die() {
    log_error "$*"
    exit 1
}

cleanup() {
    # Remove temporary files, etc.
    if [[ -n "\${TMPFILE:-}" && -f "$TMPFILE" ]]; then
        rm -f "$TMPFILE"
        log_info "Cleaned up temporary file"
    fi
}

# ---------- Parse arguments ----------
while [[ $# -gt 0 ]]; do
    case "$1" in
        -v) VERBOSE=1 ;;
        --version) echo "Version: $VERSION"; exit 0 ;;
        -h|--help) usage ;;
        --) shift; break ;;
        -*)
            die "Unknown option: $1"
            ;;
        *) break ;;
    esac
    shift
done

# ---------- Set trap ----------
trap cleanup EXIT INT TERM

# ---------- Main ----------
log_info "Starting script..."

# Example: safe temporary file
TMPFILE=$(mktemp)
echo "Temporary data" > "$TMPFILE"

# Your script logic here
log_info "Done."
exit 0`,d=`#!/bin/bash
# shellcheck_example.sh – This script triggers common ShellCheck warnings

# SC2086: unquoted variable
name="Alice"
echo Hello $name

# SC2002: useless cat
cat file.txt | grep "error"

# SC2162: read without -r
echo "Enter path:" 
read path

# SC2046: unquoted $(...)
rm -f $(find /tmp -name "*.tmp")

# SC2068: missing quotes in array expansion
arr=("one" "two three")
for i in \${arr[@]}; do
    echo $i
done

# SC2155: export + assignment in same line
export MESSAGE=$(date)

# To see warnings: shellcheck shellcheck_example.sh`,u=()=>{const i=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        @keyframes checkmark {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
      `}),e.jsxs("div",{className:s("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:s("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:["⚠️ Common Shell Scripting Mistakes",e.jsx("br",{}),"& ",e.jsx("span",{className:"text-green-400",children:"Best Practices"})]}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["What every student in ",e.jsx("span",{className:"text-blue-400",children:"Barrackpore"}),","," ",e.jsx("span",{className:"text-blue-400",children:"Shyamnagar"}),", and every production server wishes they knew from day one."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"380",height:"140",viewBox:"0 0 380 140",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"From broken script (red cross) to robust script (green check)",children:[e.jsxs("g",{transform:"translate(20, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"50",rx:"8",fill:"#7f1d1d",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"18",y:"32",fontSize:"14",fill:"#fee2e2",children:"script.sh"}),e.jsx("line",{x1:"10",y1:"10",x2:"30",y2:"30",stroke:"#ef4444",strokeWidth:"3"}),e.jsx("line",{x1:"30",y1:"10",x2:"10",y2:"30",stroke:"#ef4444",strokeWidth:"3"}),e.jsx("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",repeatCount:"indefinite"})]}),e.jsx("line",{x1:"100",y1:"65",x2:"140",y2:"65",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(160, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"50",rx:"8",fill:"#14532d",stroke:"#4ade80",strokeWidth:"2"}),e.jsx("text",{x:"18",y:"32",fontSize:"14",fill:"#dcfce7",children:"script.sh"}),e.jsx("polyline",{points:"10,25 20,35 35,15",stroke:"#4ade80",strokeWidth:"3",fill:"none",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"20;0",dur:"0.5s",fill:"freeze",begin:"mouseover"})})]}),e.jsx("path",{d:"M195 25 L210 18 L225 25 L225 50 Q210 70 195 50 Z",fill:"none",stroke:"#4ade80",strokeWidth:"1.5",strokeDasharray:"5 3",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;20;0",dur:"3s",repeatCount:"indefinite"})}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#f59e0b"})})}),e.jsxs("g",{transform:"translate(280, 70)",children:[e.jsx("text",{x:"0",y:"0",fontSize:"20",fill:"#d1d5db",children:"🔍"}),e.jsx("text",{x:"30",y:"6",fontSize:"12",fill:"#9ca3af",children:"ShellCheck"})]})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-gray-600 pb-3 inline-block",children:"🧠 Why Even Good Programmers Write Buggy Shell Scripts"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["Shell is ",e.jsx("span",{className:"text-amber-400",children:"glue code"})," – it often grows organically. Unlike compiled languages, there is no compiler to catch type errors or unset variables."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Tuhina"})," once spent two hours debugging a backup script that failed silently – a single unquoted ",e.jsx("code",{children:"$BACKUP_DIR"})," with a space in the path caused ",e.jsx("code",{children:"rm -rf"})," to delete the wrong folder."]}),e.jsx("p",{children:"Most mistakes fall into a few well‑understood categories. Recognise them, and you’ll write scripts that survive in production."})]}),e.jsxs("div",{className:s("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-gray-700","hover:shadow-[0_0_15px_rgba(156,163,175,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📊"})," Top 5 Mistake Categories"]}),e.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[e.jsx("li",{children:"Quoting / word splitting / globbing"}),e.jsx("li",{children:"Ignoring exit codes"}),e.jsx("li",{children:"Assuming input is safe (no validation)"}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"[ ]"})," vs ",e.jsx("code",{children:"[[ ]]"})," incorrectly"]}),e.jsxs("li",{children:["Parsing ",e.jsx("code",{children:"ls"})," / using ",e.jsx("code",{children:"for i in $(...)"})]})]})]})]})]}),e.jsxs("section",{className:"space-y-12",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"🔁 Before & After: A Real‑World Example"}),e.jsx(n,{fileModule:a,title:"💥 mistakes_demo.sh – What NOT to do",highlightLines:[3,6,9,12,15]}),e.jsx(n,{fileModule:l,title:"✅ corrected_demo.sh – Professional rewrite",highlightLines:[2,8,12,18,24]}),e.jsx("div",{className:"bg-blue-900/20 light:bg-blue-50 p-6 rounded-xl border border-blue-700 mt-4",children:e.jsxs("p",{className:"text-lg flex gap-3",children:[e.jsx("span",{className:"text-2xl",children:"🔍"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Observe carefully:"})," In the fixed version, every variable expansion is quoted,",e.jsx("code",{children:"[[ ... ]]"})," replaces ",e.jsx("code",{children:"[ ... ]"}),", and ",e.jsx("code",{children:"find"})," replaces the",e.jsx("code",{children:"ls"})," parsing nightmare."]})]})})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧨 The Silent Killer: Word Splitting & Pathname Expansion"}),e.jsx(n,{fileModule:o,title:"📁 pitfall_array.sh – When unquoted variables explode",highlightLines:[5,9,13]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",children:[e.jsxs("div",{className:"bg-gray-800 light:bg-gray-100 p-5 rounded-lg",children:[e.jsx("span",{className:"font-bold text-red-400",children:"❌ Unquoted"}),e.jsx("pre",{className:"mt-2 text-sm bg-gray-900 light:bg-gray-200 p-2 rounded",children:"files=$(ls); for f in $files; do ..."}),e.jsx("p",{className:"mt-2",children:"Breaks on spaces, newlines, glob characters (*)."})]}),e.jsxs("div",{className:"bg-gray-800 light:bg-gray-100 p-5 rounded-lg",children:[e.jsx("span",{className:"font-bold text-green-400",children:"✅ Quoted + array"}),e.jsx("pre",{className:"mt-2 text-sm bg-gray-900 light:bg-gray-200 p-2 rounded",children:'files=(*); for f in "${{files[@]}}"; do ...'}),e.jsx("p",{className:"mt-2",children:"Handles any filename correctly (bash). For POSIX: use `while IFS= read -r`."})]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"🛡️ A Bulletproof Script Template"}),e.jsx(n,{fileModule:c,title:"📄 defensive_template.sh – Start every new script with this",highlightLines:[2,5,8,18,28]}),e.jsx("p",{className:"text-lg leading-relaxed",children:"This template incorporates everything we've learned: strict mode, help function, argument parsing, logging, temporary files, and signal cleanup. Copy it, rename it, and you'll never forget the basics again."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-purple-800 light:border-purple-300 pb-3 inline-block",children:"🔬 ShellCheck: Your Tireless Code Reviewer"}),e.jsx(n,{fileModule:d,title:"🧪 shellcheck_example.sh – Script that triggers ShellCheck warnings",highlightLines:[3,5,7]}),e.jsx("div",{className:"bg-purple-900/20 light:bg-purple-50 p-6 rounded-xl border border-purple-700",children:e.jsxs("p",{className:"text-lg",children:[e.jsx("span",{className:"font-bold text-purple-400",children:"Install ShellCheck"})," –",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-3 py-1 mx-2 rounded",children:"sudo apt install shellcheck"})," or",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-3 py-1 rounded",children:"brew install shellcheck"}),". Then run ",e.jsx("code",{children:"shellcheck your_script.sh"}),". It catches 80% of the mistakes we just discussed."]})})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"📋 The Master List of Shell Scripting Mistakes"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-base",children:[{mistake:"Unquoted variable expansion",consequence:"Word splitting, globbing, silent errors"},{mistake:"Using `[ ]` instead of `[[ ]]` (in bash)",consequence:"Broken comparisons, need for escaping"},{mistake:"Parsing `ls`",consequence:"Fails on special characters; use globs or `find`"},{mistake:"Not checking exit codes",consequence:"Script continues after failure, corrupts state"},{mistake:"Missing `set -e` / `set -u`",consequence:"Continues on error, uses unset variables"},{mistake:"Forgetting `local` in functions",consequence:"Variables leak, cause side effects"},{mistake:"Using backticks instead of `$()`",consequence:"Nesting issues, readability"},{mistake:"`cat file | grep` (useless use of cat)",consequence:"Unnecessary process; use `< file grep`"},{mistake:"Not quoting `$@` / `$*`",consequence:"Arguments with spaces break"},{mistake:"Hard‑coding paths",consequence:"Script not portable; use config or relative"},{mistake:"No input validation",consequence:"Security risks, unexpected behavior"},{mistake:"Using `echo` with arbitrary data",consequence:"Options like `-n` may be interpreted; use `printf`"},{mistake:"Not using `--` to separate options from arguments",consequence:"Filenames starting with `-` cause trouble"},{mistake:"Assuming `IFS` is default",consequence:"Modified IFS can break loops and expansions"},{mistake:"No `trap` for temporary files",consequence:"Leftover files on interruption"}].map((r,t)=>e.jsxs("div",{className:s("p-4 rounded-lg border border-red-800 light:border-red-300","bg-red-900/10 light:bg-red-50","hover:bg-red-900/20 light:hover:bg-red-100 transition-colors"),children:[e.jsxs("div",{className:"font-bold text-red-400 light:text-red-700",children:["⚠️ ",r.mistake]}),e.jsx("div",{className:"text-sm text-gray-300 light:text-gray-700 mt-1",children:r.consequence})]},t))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Best Practices – The Short Version"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["Always use `#!/bin/bash` (or `#!/bin/sh` with caution)","Start with `set -euo pipefail` and `IFS=$'\\n\\t'`",'Quote every variable expansion: `"$var"`, `"$(cmd)"`',"Use `[[ ]]` for tests in bash (fewer surprises)","Prefer `$()` over backticks","Use `for file in *.txt; do` – never parse `ls`","Always check exit status of critical commands","Make functions self‑contained with `local`","Validate all external input","Provide `--help` and usage message","Use `trap` to clean up temporary resources","Run `shellcheck` – treat warnings as errors","Version control your scripts (Git!)"].map((r,t)=>e.jsxs("div",{className:"flex items-start gap-3 p-2 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:r})]},t))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Advanced Wisdom"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Fail early, fail loudly."})," A silent error is worse than a crash. Use ",e.jsx("code",{children:"set -e"})," and check return codes explicitly when you expect failure."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Never trust filenames."})," They can contain spaces, newlines, control characters, and leading dashes. Always quote, and use ",e.jsx("code",{children:"--"})," to separate options from arguments:",e.jsx("code",{className:"block mt-2 bg-gray-800 light:bg-gray-200 p-2 rounded",children:'rm -- "$filename"'})]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `read -r`"})," unless you explicitly want backslash interpretation. Almost always you don't."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Prefer `printf` over `echo`"})," – its behavior is consistent across shells."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Know when to stop shell scripting."})," If your script grows beyond 500 lines, has complex data structures, or requires performance, consider Python or Go."]})]})]}),e.jsxs("section",{className:s("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Try changing this…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"pitfall_array.sh"}),", remove the quotes around ",e.jsx("code",{children:'"${files[@]}"'}),". Create a file named ",e.jsx("code",{children:"*"})," (asterisk) in the directory and run the script again. What happens? This is why quoting is non‑negotiable."]}),e.jsx("p",{className:"text-md text-gray-300 light:text-gray-700",children:"Think about: what other filenames could break an unquoted loop?"})]})]}),e.jsx("section",{className:s("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",i," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“Over ",e.jsxs("span",{className:"font-semibold",children:[i," years"]}),", I’ve reviewed thousands of student scripts. ",e.jsx("span",{className:"text-blue-400",children:"Debangshu"})," once lost a term project because he forgot to quote ",e.jsx("code",{children:"$FILE"})," – it contained a backspace character.",e.jsx("span",{className:"text-blue-400",children:"Abhronila"})," now keeps a printed checklist of these mistakes next to her monitor in ",e.jsx("span",{className:"italic",children:"Shyamnagar"}),". Print this page. Memorise it. Your future self will thank you.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#QuoteAllTheThings"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#ShellCheck"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#FailEarly"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Pre‑commit Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-green-400",children:[e.jsx("li",{children:"Shebang correct?"}),e.jsxs("li",{children:[e.jsx("code",{children:"set -euo pipefail"})," (or POSIX equivalent) present?"]}),e.jsx("li",{children:"All variable expansions quoted?"}),e.jsxs("li",{children:[e.jsx("code",{children:"[[ ]]"})," used instead of ",e.jsx("code",{children:"[ ]"})," (bash scripts)?"]}),e.jsxs("li",{children:["No parsing of ",e.jsx("code",{children:"ls"})," – using globs or ",e.jsx("code",{children:"find"}),"?"]}),e.jsx("li",{children:"Exit codes checked after important commands?"}),e.jsx("li",{children:"Input validated?"}),e.jsxs("li",{children:["Temporary files use ",e.jsx("code",{children:"mktemp"})," + ",e.jsx("code",{children:"trap"}),"?"]}),e.jsxs("li",{children:[e.jsx("code",{children:"shellcheck"})," reports 0 warnings?"]}),e.jsx("li",{children:"Tested with filenames containing spaces and glob characters?"})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Practical Examples and Reference Scripts – Topic34"})})]})]})};export{u as default};
