import{j as e}from"./index-D1bhWpF_.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as r}from"./ShellFileLoader-izSp1ZwA.js";import"./prism-B_z3Scul.js";const a=`#!/bin/bash
# debugging_demo.sh – Demonstrates set -x for tracing execution
# Usage: ./debugging_demo.sh [--debug]

set -euo pipefail
IFS=$'\\n\\t'

# Enable debugging if --debug flag is passed
if [[ "\${1:-}" == "--debug" ]]; then
    echo "🔍 Debug mode ON"
    set -x
fi

# A simple function to demonstrate tracing
greet() {
    local name="$1"
    echo "Hello, $name!"
}

# Loop with arithmetic
sum=0
for i in {1..5}; do
    sum=$((sum + i))
done
echo "Sum 1..5 = $sum"

# Function call
greet "Tuhina"

# Word splitting demonstration (unquoted)
files="file1.txt file2.txt"
for f in $files; do
    echo "Processing: $f"
done

# Disable tracing if it was enabled
if [[ "\${1:-}" == "--debug" ]]; then
    set +x
    echo "🔍 Debug mode OFF"
fi

exit 0`,l=`#!/bin/bash
# debugging_tricks.sh – Advanced debugging techniques
# Usage: ./debugging_tricks.sh [--trace] [--debug-file]

set -euo pipefail
IFS=$'\\n\\t'

# ---------- 1. Custom PS4 with line numbers and source file ----------
export PS4='+ \${BASH_SOURCE}:\${LINENO}: \${FUNCNAME[0]:+\${FUNCNAME[0]}(): }'

# ---------- 2. Conditional tracing via DEBUG flag ----------
DEBUG_MODE=0
TRACE_FILE=""

while [[ $# -gt 0 ]]; do
    case "$1" in
        --trace) DEBUG_MODE=1; shift ;;
        --debug-file) TRACE_FILE="$2"; shift 2 ;;
        *) echo "Unknown option: $1"; exit 1 ;;
    esac
done

# Redirect trace output to a file if requested
if [[ -n "$TRACE_FILE" ]]; then
    exec 5> "$TRACE_FILE"
    BASH_XTRACEFD=5
fi

# Enable tracing conditionally
if [[ $DEBUG_MODE -eq 1 ]]; then
    echo "🔍 Tracing enabled"
    set -x
fi

# ---------- 3. trap DEBUG – run command before every statement ----------
debug_breakpoint() {
    # Only break if a certain condition is met
    if [[ "\${CUSTOM_VAR:-}" == "break" ]]; then
        echo "🛑 Breakpoint hit at line $LINENO"
        read -p "Press Enter to continue... "
    fi
}
trap debug_breakpoint DEBUG

# ---------- Demo code ----------
CUSTOM_VAR="normal"
echo "This is a normal line."

CUSTOM_VAR="break"
echo "This line triggers the breakpoint."

CUSTOM_VAR="normal"
echo "Tracing continues."

# ---------- 4. Selective tracing: only trace a block ----------
slow_function() {
    local count="$1"
    local result=0
    # Only trace inside this function
    set -x
    for ((i=0; i<count; i++)); do
        result=$((result + i * 2))
    done
    set +x
    echo "Result: $result"
}

slow_function 3

# ---------- Cleanup ----------
if [[ $DEBUG_MODE -eq 1 ]]; then
    set +x
fi
if [[ -n "$TRACE_FILE" ]]; then
    exec 5>&-
    echo "Trace written to $TRACE_FILE"
fi

exit 0`,g=()=>{const t=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes magnifyGlow {
          0% { filter: drop-shadow(0 0 2px rgba(96,165,250,0.5)); }
          50% { filter: drop-shadow(0 0 12px rgba(96,165,250,0.8)); }
          100% { filter: drop-shadow(0 0 2px rgba(96,165,250,0.5)); }
        }
      `}),e.jsxs("div",{className:s("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:s("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:["🔍 Example Script: ",e.jsx("span",{className:"text-blue-400",children:"Debugging with set -x"})]}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["When scripts misbehave, you need X‑ray vision.",e.jsx("span",{className:"text-blue-400",children:" Tuhina"})," in ",e.jsx("span",{className:"italic",children:"Ichapur"})," and",e.jsx("span",{className:"text-blue-400",children:" Debangshu"})," in ",e.jsx("span",{className:"italic",children:"Barrackpore"}),"use ",e.jsx("code",{children:"set -x"})," to see exactly what the shell is doing – and fix bugs in minutes."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"340",height:"140",viewBox:"0 0 340 140",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Magnifying glass over shell code showing traced lines",children:[e.jsxs("g",{transform:"translate(240, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"30",height:"6",rx:"3",fill:"#9ca3af",transform:"rotate(45)"}),e.jsx("circle",{cx:"-8",cy:"22",r:"18",fill:"none",stroke:"#60a5fa",strokeWidth:"2",strokeDasharray:"4 3",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;20;0",dur:"3s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"-8",cy:"22",r:"10",fill:"none",stroke:"#3b82f6",strokeWidth:"1.5"})]}),e.jsxs("g",{transform:"translate(40, 30)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"80",rx:"6",fill:"#1e293b",stroke:"#4b5563"}),e.jsx("text",{x:"15",y:"20",fontSize:"12",fill:"#e0e7ff",fontFamily:"monospace",children:"+ [[ -f config.sh ]]"}),e.jsx("text",{x:"15",y:"40",fontSize:"12",fill:"#e0e7ff",fontFamily:"monospace",children:"+ source config.sh"}),e.jsx("text",{x:"15",y:"60",fontSize:"12",fill:"#e0e7ff",fontFamily:"monospace",children:"+ BACKUP_DIR=/backup"})]}),e.jsxs("g",{transform:"translate(120, 110)",children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"22",rx:"11",fill:"#312e81"}),e.jsx("text",{x:"15",y:"17",fontSize:"12",fill:"#e0e7ff",children:"set -x"})]})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"🧠 Debugging = Understanding What Actually Happens"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("span",{className:"text-amber-400",children:"`set -x`"})," (or ",e.jsx("code",{children:"set -o xtrace"}),") prints each command and its arguments after expansion, prefixed with ",e.jsx("code",{children:"+"}),". It's the single most useful tool for diagnosing shell script problems."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Swadeep"})," once spent hours on a condition that never evaluated true. One line of ",e.jsx("code",{children:"set -x"})," revealed that a variable contained a trailing newline – invisible in normal output, but obvious in trace mode."]})]}),e.jsxs("div",{className:s("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-blue-700","hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"🎯"})," Quick Start"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"bash -x script.sh"})," – run with tracing from start"]}),e.jsxs("li",{children:[e.jsx("code",{children:"set -x; ...; set +x"})," – trace only a section"]}),e.jsxs("li",{children:[e.jsx("code",{children:"#!/bin/bash -x"})," – permanent trace (not recommended)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"PS4='+${BASH_SOURCE}:${LINENO}: '"})," – custom trace prefix"]})]})]})]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"📜 debugging_demo.sh – Tracing Functions and Loops"}),e.jsx(r,{fileModule:a,title:"🐞 debugging_demo.sh – Before and after set -x",highlightLines:[4,15,22]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 No tracing"})," – normal output"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 With set -x"})," – each step printed"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Function calls"})," – see arguments passed"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Variable expansion"})," – see actual values"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Loop iterations"})," – track index"]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-purple-800 light:border-purple-300 pb-3 inline-block",children:"🎩 debugging_tricks.sh – Custom PS4, trap DEBUG, Selective Tracing"}),e.jsx(r,{fileModule:l,title:"🔧 debugging_tricks.sh – Professional debugging techniques",highlightLines:[5,11,17,22]}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["For complex scripts, basic ",e.jsx("code",{children:"set -x"})," can be too noisy. These techniques let you focus on what matters: line numbers, file names, conditional tracing, and even breaking on specific conditions."]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Debugging Pitfalls – Avoid These"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["❌ Leaving `set -x` enabled in production scripts (exposes internal data).","❌ Forgetting that `set -x` outputs to stderr – may fill logs if not redirected.","❌ Assuming `+` is part of the command output, not the trace marker.","❌ Not quoting variables – trace shows the expanded values, but may mislead if word splitting occurs.","❌ Using `set -x` with `set -e` – the trace may exit unexpectedly on error.","❌ Overwhelming output – trace every line instead of focusing on suspicious sections.","❌ Not preserving exit codes when inserting debug code (`|| true` can mask errors)."].map((n,i)=>e.jsx("div",{className:s("p-4 rounded-lg border border-red-800 light:border-red-300","bg-red-900/10 light:bg-red-50","hover:bg-red-900/20 light:hover:bg-red-100 transition-colors"),children:e.jsx("span",{className:"text-red-400 light:text-red-700",children:n})},i))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Debugging Best Practices"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["🔹 Use `bash -x script.sh` for one‑off debugging runs.","🔹 Wrap trace sections with `set -x` / `set +x` – don't trace the whole script.","🔹 Customize `PS4` to include line numbers and function names.","🔹 Redirect trace output to a file: `exec 5> debug.log; BASH_XTRACEFD=5`.","🔹 Use `trap DEBUG` to run a command before every statement (e.g., print variable).","🔹 Keep a clean version of the script without debug code in version control.","🔹 Combine `set -x` with `set -v` to see raw lines before expansion."].map((n,i)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:n})]},i))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Pro Tips – Advanced Debugging"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `PS4` to show line numbers and function stack."})," Example:",e.jsx("code",{className:"block mt-2 bg-gray-800 light:bg-gray-200 p-2 rounded",children:"export PS4='+${BASH_SOURCE}:${LINENO}: ${FUNCNAME[0]:+${FUNCNAME[0]}(): }'"}),"This pinpoints exactly where each trace line originates."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Conditional debugging with `if` and a variable."})," Define a debug flag:",e.jsx("code",{className:"block mt-2 bg-gray-800 light:bg-gray-200 p-2 rounded",children:'[[ "$DEBUG" == 1 ]] && set -x'}),"Enable only when needed: ",e.jsx("code",{children:"DEBUG=1 ./script.sh"}),"."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `trap DEBUG` to create a breakpoint."}),e.jsx("code",{children:`trap 'echo "Stopped at line $LINENO"; read -p "Continue? "' DEBUG`})," – this pauses before each line."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Log trace to a separate file."})," Preserve your terminal output:",e.jsx("code",{className:"block mt-2 bg-gray-800 light:bg-gray-200 p-2 rounded",children:"exec 5> trace.log; BASH_XTRACEFD=5; set -x"})]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"For POSIX sh,"}),' there\'s no `PS4`; use `sh -x script.sh` or manually insert `echo "DEBUG: ..."` statements.']})]})]}),e.jsxs("section",{className:s("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Observe carefully…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"debugging_tricks.sh"}),", we set ",e.jsx("code",{children:"PS4='+ $BASH_SOURCE:$LINENO '"}),". What does ",e.jsx("code",{children:"$BASH_SOURCE"})," contain? How does it differ from ",e.jsx("code",{children:"$0"}),"?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Try adding a ",e.jsx("code",{children:"trap DEBUG"})," that prints the value of a variable before each command. Can you make it conditional so it only triggers when the variable is empty?"]})]})]}),e.jsx("section",{className:s("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",t," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“For ",e.jsxs("span",{className:"font-semibold",children:[t," years"]}),", I've watched students stare at broken scripts. The moment they learn ",e.jsx("code",{children:"set -x"}),", their debugging time drops from hours to minutes.",e.jsx("span",{className:"text-blue-400",children:"Abhronila"})," in ",e.jsx("span",{className:"italic",children:"Shyamnagar"})," now starts every debugging session with ",e.jsx("code",{children:"bash -x"})," – she calls it her ‘superpower’. It really is.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#bash_x"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#xtrace"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#PS4"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Debugging Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-blue-400",children:[e.jsx("li",{children:"Run with `bash -x script.sh` to see full trace."}),e.jsx("li",{children:"Wrap suspicious sections with `set -x` … `set +x`."}),e.jsx("li",{children:"Customize `PS4` to show line numbers and source file."}),e.jsx("li",{children:"Redirect trace output to a file if it's too verbose."}),e.jsx("li",{children:"Never commit `set -x` to production code."}),e.jsx("li",{children:"Combine with `set -v` to see original source lines."}),e.jsx("li",{children:"Use `trap DEBUG` for breakpoint‑like debugging."}),e.jsx("li",{children:"Test one fix at a time; don't change multiple things simultaneously."})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Example Script – Signal handling using trap (Topic41)"})})]})]})};export{g as default};
