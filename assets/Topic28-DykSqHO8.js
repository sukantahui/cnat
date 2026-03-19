import{j as e}from"./index-BQdS2coH.js";import{c as t}from"./clsx-B-dksMZM.js";import{S as i}from"./ShellFileLoader-CGCVJPXA.js";import"./prism-lJkcrZnh.js";const l=`#!/bin/bash
# validate_input.sh – Demonstrates input validation and safe quoting
set -u  # treat unset variables as errors

validate_username() {
    local username="$1"
    # Username: 3-16 alphanumeric or underscore
    if [[ ! "$username" =~ ^[a-zA-Z0-9_]{3,16}$ ]]; then
        echo "Error: Invalid username '$username'. Use 3-16 alnum/underscore." >&2
        return 1
    fi
    echo "✅ Valid username: $username"
    return 0
}

# Main
read -p "Enter username: " input
validate_username "$input"   # <-- the quotes are critical!`,n=`#!/bin/bash
# secure_temp.sh – Safely create temporary files and guarantee cleanup
set -euo pipefail

cleanup() {
    echo "🧹 Cleaning up temporary files..."
    rm -f "$TMPFILE"
}
trap cleanup EXIT INT TERM

# Create temporary file securely
TMPFILE=$(mktemp) || exit 1
echo "📁 Temporary file created: $TMPFILE"

# Simulate work
echo "Processing sensitive data..." > "$TMPFILE"
cat "$TMPFILE"

# Script exits – trap triggers automatically`,o=`#!/bin/bash
# set_options.sh – Strict mode: exit on error, unset var, pipefail
set -euo pipefail

echo "🚀 Strict mode enabled – script will abort at first serious problem."

# Uncomment to see unset variable error:
# echo "UNDEFINED: $UNDEFINED_VAR"

# This command fails (false always returns 1)
false
echo "❌ This line is NEVER executed because 'set -e' aborts the script."`,d=`#!/bin/bash
# quoting_example.sh – Shows why quoting is non‑negotiable
set -u

dirpath="/tmp/My Documents"
mkdir -p "$dirpath"

# WRONG – no quotes → word splitting
echo "❌ Without quotes:"
ls -l $dirpath      # tries 'ls -l /tmp/My' and 'Documents'

# RIGHT – with quotes
echo -e "\\n✅ With quotes:"
ls -l "$dirpath"

# Cleanup
rm -rf "$dirpath"`,g=()=>{const r=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes softPulse {
          0% { filter: drop-shadow(0 0 2px rgba(59,130,246,0.3)); }
          50% { filter: drop-shadow(0 0 8px rgba(59,130,246,0.6)); }
          100% { filter: drop-shadow(0 0 2px rgba(59,130,246,0.3)); }
        }
      `}),e.jsxs("div",{className:t("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:t("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:"🛡️ Defensive & Secure Shell Scripting"}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["Write scripts that resist failures, unexpected input, and malicious injection – just like building a sturdy school gate in"," ",e.jsx("span",{className:"text-blue-400 light:text-blue-600",children:"Barrackpore"})," ","or a clean student attendance system."]}),e.jsx("div",{className:"flex justify-center pt-4",children:e.jsxs("svg",{width:"280",height:"140",viewBox:"0 0 280 140",className:"drop-shadow-xl hover:scale-105 transition-transform duration-300","aria-label":"Defensive scripting concept: input validation, quoting, secure temp files",children:[e.jsxs("g",{id:"shieldGroup",children:[e.jsx("path",{d:"M40,20 L120,10 L200,20 L200,80 Q140,130 40,80 Z",fill:"none",stroke:"#3b82f6",strokeWidth:"3",strokeDasharray:"6 4",className:"light:stroke-blue-700",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;20;0",dur:"4s",repeatCount:"indefinite",begin:"mouseover",end:"mouseout"})}),e.jsx("rect",{x:"110",y:"45",width:"20",height:"16",rx:"3",fill:"#3b82f6",opacity:"0.9",children:e.jsx("animate",{attributeName:"y",values:"45;43;45",dur:"1.5s",repeatCount:"indefinite",begin:"mouseover"})}),e.jsx("circle",{cx:"120",cy:"40",r:"6",fill:"#1e293b"})]}),e.jsxs("g",{transform:"translate(160, 30)",children:[e.jsx("rect",{x:"0",y:"10",width:"70",height:"30",rx:"6",fill:"#0f172a",stroke:"#60a5fa",strokeWidth:"1.5",className:"light:fill-gray-100 light:stroke-blue-500"}),e.jsx("text",{x:"12",y:"31",fontSize:"12",fill:"#e2e8f0",className:"light:fill-gray-800",children:"user input"}),e.jsx("polygon",{points:"78,25 88,25 83,15",fill:"#60a5fa",className:"light:fill-blue-600",children:e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"100",y:"30",fontSize:"14",fill:"#4ade80",fontWeight:"bold",children:"✓"})]}),e.jsxs("g",{transform:"translate(30, 100)",children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"26",rx:"4",fill:"#1e293b",className:"light:fill-gray-200"}),e.jsx("text",{x:"8",y:"18",fontSize:"14",fill:"#facc15",fontFamily:"monospace",children:"$var"}),e.jsx("text",{x:"45",y:"18",fontSize:"14",fill:"#94a3b8",fontFamily:"monospace",children:'→ "quoted"'})]})]})})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"🔒 Core Defensive Principles"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{title:"Validate & Quote",desc:"Always validate input format; always double‑quote variable expansions.",icon:"🔎"},{title:"Fail Early & Cleanly",desc:"Use `set -euo pipefail` to catch unset vars, pipeline errors, and abrupt exits.",icon:"⚡"},{title:"Secure Temp Files",desc:"Never guess temp names – use `mktemp` and `trap` for guaranteed cleanup.",icon:"🧹"}].map((s,a)=>e.jsxs("div",{className:t("p-6 rounded-xl border border-gray-700 light:border-gray-200","bg-gray-800 light:bg-gray-50","hover:shadow-[0_8px_20px_-6px_rgba(59,130,246,0.5)] hover:scale-[1.02]","transition-all duration-300","motion-safe:animate-[fadeSlideUp_0.5s_ease-out]",`motion-safe:animate-delay-[${a*150}ms]`),children:[e.jsx("div",{className:"text-4xl mb-3",children:s.icon}),e.jsx("h3",{className:"text-xl font-bold mb-2",children:s.title}),e.jsx("p",{className:"text-gray-300 light:text-gray-700 leading-relaxed",children:s.desc})]},s.title))})]}),e.jsxs("section",{className:t("p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 light:from-blue-50 light:to-gray-100","border border-blue-800 light:border-blue-300","motion-safe:animate-[fadeIn_0.8s_ease-out]"),children:[e.jsxs("h2",{className:"text-2xl font-bold flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏫"})," From the Classroom"]}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["When"," ",e.jsx("span",{className:"text-blue-400 light:text-blue-700 font-semibold",children:"Tuhina"})," ","wrote a script to collect assignment submissions, she used"," ",e.jsx("code",{className:"bg-gray-900 light:bg-gray-200 px-2 py-1 rounded",children:"rm -rf $folder/*"})," ","– but the variable was empty. The whole parent directory vanished."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400 light:text-blue-700 font-semibold",children:"Debangshu"})," ","built a log rotator for the school server in"," ",e.jsx("span",{className:"italic",children:"Ichapur"}),". Without proper quoting, a filename with a space crashed the cron job. A single pair of double quotes saved the day."]}),e.jsx("p",{className:"font-medium text-gray-200 light:text-gray-800",children:"✅ Defensive scripting isn't paranoia – it's professionalism."})]})]}),e.jsxs("section",{className:"space-y-12",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"📜 Scripts in Action"}),e.jsx(i,{fileModule:l,title:"Example 1: Input Validation & Quoting",highlightLines:[8,16]}),e.jsx(i,{fileModule:n,title:"Example 2: Secure Temp Files + Trap Cleanup",highlightLines:[4,10,13]}),e.jsx(i,{fileModule:o,title:"Example 3: Strict Mode (set -euo pipefail)",highlightLines:[2,9]}),e.jsx(i,{fileModule:d,title:"Example 4: Quoting Pitfalls and Fixes",highlightLines:[5,9]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Common Pitfalls"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["Unquoted variable expansions → word splitting, globbing","Using `eval` on external input (command injection)","Hard‑coded temporary file names (race conditions)","Ignoring exit codes – script continues after failure","`set -e` alone doesn't catch pipe errors (use `set -o pipefail`)","Reading `$REPLY` without `-r` – backslashes interpreted"].map((s,a)=>e.jsxs("div",{className:t("p-5 flex items-start gap-4 rounded-lg","bg-red-900/20 light:bg-red-50","border border-red-800 light:border-red-300","hover:bg-red-900/30 light:hover:bg-red-100","transition-all duration-200"),children:[e.jsx("span",{className:"text-red-400 light:text-red-600 text-xl",children:"⚠️"}),e.jsx("span",{className:"leading-relaxed",children:s})]},a))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Best Practices"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["Always start with `#!/bin/bash` and `set -euo pipefail`",'Quote everything: `"$var"`, `"$(command)"`, `"$@"`',"Use `[[ ... ]]` over `[ ... ]` for safer string tests","Create temp files with `mktemp` and `trap cleanup EXIT`","Validate input with regex (`=~`) or case statements","Never parse `ls`; use globs or `find -exec`","Make scripts `shellcheck`‑clean before deployment"].map((s,a)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100 transition-colors",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:s})]},a))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Tips & Tricks"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"ShellCheck integration"})," – integrate into your editor; it catches ~70% of security issues instantly."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `readonly` and `declare -r`"})," for constants – prevents accidental overwrites."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Debug with `set -x`"})," only temporarily; never commit scripts with it enabled."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Prefer `printf` over `echo`"})," for portable, predictable output."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Mind the `IFS`"})," – restore it after changes:",e.jsx("code",{className:"block mt-2 bg-gray-800 light:bg-gray-200 p-3 rounded",children:`OLDIFS="$IFS"; IFS=','; ...; IFS="$OLDIFS"`})]})]})]}),e.jsxs("section",{className:t("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50","border border-indigo-700 light:border-indigo-300","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Observe carefully…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-3 py-1 rounded",children:"validate_input.sh"}),", what happens if we omit the quotes around"," ",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-2 py-1 rounded",children:'"$1"'}),"? Try changing the username to ",e.jsx("kbd",{className:"bg-gray-700 light:bg-gray-300 px-2 py-0.5 rounded",children:"*"}),"."]}),e.jsx("p",{className:"text-md text-gray-300 light:text-gray-700",children:"Think about word splitting and pathname expansion – the two silent killers."})]})]}),e.jsx("section",{className:t("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50","border border-amber-700 light:border-amber-300","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow duration-300"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",r," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“Defensive scripting is a mindset. I tell my students in"," ",e.jsx("span",{className:"italic",children:"Shyamnagar"})," and"," ",e.jsx("span",{className:"italic",children:"Naihati"})," to pretend every variable is empty, every filename contains spaces, and every user is a hacker. After 27+ years, this habit has saved countless production systems.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#QuoteAllTheThings"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#FailFast"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#ShellCheck"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Mini Checklist – what to remember"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-blue-400 light:marker:text-blue-600",children:[e.jsx("li",{children:"Always double‑quote variable expansions and command substitutions"}),e.jsx("li",{children:"Start every new script with `set -euo pipefail`"}),e.jsx("li",{children:"Validate input against a whitelist (regex/case)"}),e.jsx("li",{children:"Use `mktemp` + `trap` for temporary files"}),e.jsx("li",{children:"Avoid `eval`, backticks, and `ls` parsing"}),e.jsx("li",{children:"Run `shellcheck` before committing"}),e.jsx("li",{children:"Prefer `[[ ]]` over `[ ]` for test conditions"})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Portable shell scripting (bash vs sh) – Topic29"})})]})]})};export{g as default};
