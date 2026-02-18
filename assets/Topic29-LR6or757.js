import{j as e}from"./index-BFnLuail.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as i}from"./ShellFileLoader-BgOvPFCh.js";import"./prism-DTsTe1iV.js";const t=`#!/bin/bash
# bashism_demo.sh – Contains features NOT portable to /bin/sh

# 1. Array
fruits=("apple" "banana" "cherry")
echo "First fruit: \${fruits[0]}"

# 2. [[ ]] with regex
if [[ "hello123" =~ [0-9]+ ]]; then
    echo "Contains digits"
fi

# 3. += append to variable
msg="Hello"
msg+=" World"
echo "$msg"

# 4. Uppercase transformation
name="swadeep"
echo "\${name^^}"`,n=`#!/bin/sh
# posix_compliant.sh – Portable equivalent of bashism_demo.sh

# 1. No arrays – use positional parameters or separate vars
fruit1="apple"; fruit2="banana"; fruit3="cherry"
echo "First fruit: $fruit1"

# 2. Regex – use case statement
case "hello123" in
    *[0-9]*) echo "Contains digits" ;;
esac

# 3. Append – reassign
msg="Hello"
msg="$msg World"
echo "$msg"

# 4. Uppercase – use tr (if available) or manual mapping
name="swadeep"
echo "$name" | tr '[:lower:]' '[:upper:]'`,o=`#!/bin/sh
# portable_script.sh – A fully POSIX‑compliant argument processor

usage() {
    echo "Usage: $0 [-v] [-f file] [-n count]" >&2
    exit 1
}

verbose=0
file=""
count=1

while getopts vf:n: opt; do
    case "$opt" in
        v) verbose=1 ;;
        f) file="$OPTARG" ;;
        n) count="$OPTARG" ;;
        *) usage ;;
    esac
done
shift $((OPTIND - 1))

if [ "$verbose" -eq 1 ]; then
    echo "Verbose mode ON"
fi

printf "File: %s, Count: %d\\n" "$file" "$count"
printf "Remaining arguments: %s\\n" "$*"`,c=`#!/bin/sh
# shebang_portability.sh – Detect which shell is running the script

echo "I was invoked as: $0"
echo "Current shell PID: $$"

# Linux-specific (but common) – show actual shell binary
if [ -e /proc/$$/exe ]; then
    shell_path=$(readlink /proc/$$/exe)
    echo "Shell binary: $shell_path"
fi

# Check if we're in bash by looking at $BASH
if [ -n "$BASH" ]; then
    echo "⚠️  This script is running under bash, despite #!/bin/sh"
else
    echo "✅ Running under a pure POSIX shell (not bash)"
fi`,m=()=>{const l=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes softGlow {
          0% { filter: drop-shadow(0 0 2px rgba(168,85,247,0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(168,85,247,0.8)); }
          100% { filter: drop-shadow(0 0 2px rgba(168,85,247,0.4)); }
        }
      `}),e.jsxs("div",{className:s("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:s("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:["🧳 Portable Shell Scripting: ",e.jsx("span",{className:"text-purple-400",children:"bash"})," vs ",e.jsx("span",{className:"text-amber-400",children:"sh"})]}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["Write once, run everywhere – from a student's laptop in"," ",e.jsx("span",{className:"text-purple-400 light:text-purple-600",children:"Ichapur"})," to a production server in"," ",e.jsx("span",{className:"text-purple-400 light:text-purple-600",children:"Barrackpore"}),"."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"340",height:"150",viewBox:"0 0 340 150",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Shell family tree: Bourne, POSIX, Bash, Dash, Ash",children:[e.jsxs("g",{id:"bourne",children:[e.jsx("rect",{x:"20",y:"60",width:"60",height:"30",rx:"6",fill:"#312e81",stroke:"#a78bfa",strokeWidth:"1.5",className:"light:fill-indigo-100 light:stroke-indigo-600"}),e.jsx("text",{x:"32",y:"82",fontSize:"12",fill:"#e0e7ff",children:"sh (Bourne)"}),e.jsx("line",{x1:"50",y1:"60",x2:"50",y2:"30",stroke:"#a78bfa",strokeWidth:"1.5"}),e.jsx("circle",{cx:"50",cy:"25",r:"5",fill:"#c084fc",children:e.jsx("animate",{attributeName:"r",values:"5;7;5",dur:"3s",repeatCount:"indefinite",begin:"mouseover"})})]}),e.jsxs("g",{transform:"translate(100, 20)",children:[e.jsx("rect",{x:"0",y:"40",width:"70",height:"30",rx:"6",fill:"#4c1d95",stroke:"#c084fc",strokeWidth:"1.5"}),e.jsx("text",{x:"14",y:"62",fontSize:"12",fill:"#f3e8ff",children:"POSIX sh"}),e.jsx("line",{x1:"35",y1:"40",x2:"35",y2:"10",stroke:"#c084fc"}),e.jsx("circle",{cx:"35",cy:"5",r:"4",fill:"#e879f9"})]}),e.jsxs("g",{transform:"translate(200, 20)",children:[e.jsx("rect",{x:"0",y:"40",width:"70",height:"30",rx:"6",fill:"#701a75",stroke:"#f0abfc",strokeWidth:"2"}),e.jsx("text",{x:"18",y:"62",fontSize:"12",fill:"#fae8ff",fontWeight:"bold",children:"bash"}),e.jsx("line",{x1:"35",y1:"40",x2:"35",y2:"10",stroke:"#f0abfc"}),e.jsx("circle",{cx:"35",cy:"5",r:"4",fill:"#f472b6"})]}),e.jsxs("g",{transform:"translate(200, 90)",children:[e.jsx("rect",{x:"0",y:"40",width:"70",height:"30",rx:"6",fill:"#374151",stroke:"#9ca3af",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"62",fontSize:"12",fill:"#d1d5db",children:"dash/ash"}),e.jsx("line",{x1:"35",y1:"40",x2:"35",y2:"10",stroke:"#9ca3af"})]}),e.jsxs("g",{transform:"translate(280, 100)",children:[e.jsx("circle",{cx:"20",cy:"20",r:"18",fill:"none",stroke:"#34d399",strokeWidth:"2",strokeDasharray:"4 3",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;20;0",dur:"4s",repeatCount:"indefinite"})}),e.jsx("text",{x:"12",y:"27",fontSize:"20",fill:"#34d399",children:"✓"}),e.jsx("text",{x:"45",y:"27",fontSize:"14",fill:"#d1d5db",className:"light:fill-gray-600",children:"Portable"})]})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-purple-800 light:border-purple-300 pb-3 inline-block",children:"🔍 What Does “Portable” Mean?"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-purple-400",children:"bash"})," (Bourne Again SHell) extends the original Bourne shell with many conveniences: arrays, associative arrays, ",e.jsx("code",{children:"[[ ]]"}),",",e.jsxs("code",{children:["$","{var^^}"]}),", ",e.jsx("code",{children:"let"}),", etc. But these are ",e.jsx("span",{className:"text-amber-400",children:"bashisms"}),"."]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-amber-400",children:"/bin/sh"})," on many systems is a symlink to a POSIX‑compliant shell (like dash, or bash in POSIX mode). Scripts starting with ",e.jsx("code",{children:"#!/bin/sh"})," ","must not use bash‑specific features."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400 light:text-blue-600",children:"Why care?"})," Your script might run on embedded devices, Alpine Linux (no bash by default), or old Solaris boxes. Portability = reliability."]})]}),e.jsxs("div",{className:s("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-purple-700","hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📌"})," Shebang Rule"]}),e.jsxs("ul",{className:"space-y-3 list-disc list-inside marker:text-purple-400",children:[e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-900 light:bg-gray-200 px-2 py-1 rounded",children:"#!/bin/bash"})," → “I need bash features.”"]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-900 light:bg-gray-200 px-2 py-1 rounded",children:"#!/bin/sh"})," → “I am POSIX‑compliant.”"]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-yellow-400",children:"⚠️"})," On some systems ",e.jsx("code",{children:"/bin/sh"})," ",e.jsx("em",{children:"is"})," bash, but in POSIX mode – still, avoid bashisms."]})]})]})]})]}),e.jsxs("section",{className:"space-y-12",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-purple-800 light:border-purple-300 pb-3 inline-block",children:"📜 bashisms & POSIX Equivalents"}),e.jsx(i,{fileModule:t,title:"🚫 bashism_demo.sh – What NOT to write for /bin/sh",highlightLines:[3,6,9,12]}),e.jsx(i,{fileModule:n,title:"✅ posix_compliant.sh – Portable version",highlightLines:[5,9,14,19]}),e.jsx(i,{fileModule:o,title:"📦 portable_script.sh – A fully POSIX‑compliant utility",highlightLines:[1,15,22]}),e.jsx(i,{fileModule:c,title:"🧪 shebang_portability.sh – Detecting the shell at runtime",highlightLines:[3,8,16]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Bashisms That Break /bin/sh"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[{bash:"[[ $a =~ $regex ]]",posix:"case $a in … ;; esac"},{bash:"array=(one two); echo ${array[1]}",posix:'set -- one two; echo "$2"'},{bash:'echo "${var^^}"',posix:'echo "$var" | tr "[:lower:]" "[:upper:]"'},{bash:"let i++",posix:"i=$((i + 1))"},{bash:"source file.sh",posix:". file.sh"},{bash:"echo {1..10}",posix:"seq 1 10 (if available) or manual loop"},{bash:"export -f func",posix:"not possible – define in dot scripts"},{bash:">&2 echo error",posix:"echo error >&2"},{bash:"[[ -v var ]]",posix:'test -n "${var+set}"'}].map((r,a)=>e.jsxs("div",{className:s("p-5 rounded-lg border border-red-800 light:border-red-300","bg-red-900/20 light:bg-red-50","hover:bg-red-900/30 light:hover:bg-red-100 transition-colors"),children:[e.jsxs("div",{className:"font-mono text-sm",children:[e.jsx("span",{className:"text-red-400 light:text-red-600 line-through mr-2",children:"bash"}),e.jsx("span",{className:"text-gray-200 light:text-gray-800",children:r.bash})]}),e.jsxs("div",{className:"font-mono text-sm mt-2 text-green-400 light:text-green-700",children:["✓ POSIX: ",r.posix]})]},a))})]}),e.jsxs("section",{className:s("p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 light:from-purple-50 light:to-gray-100","border border-purple-800 light:border-purple-300","motion-safe:animate-[fadeIn_0.8s_ease-out]"),children:[e.jsxs("h2",{className:"text-2xl font-bold flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🌍"})," When Portability Saved the Day"]}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("span",{className:"text-purple-400 light:text-purple-700 font-semibold",children:"Abhronila"})," wrote a backup script for the school server in ",e.jsx("span",{className:"italic",children:"Shyamnagar"}),". She used",e.jsx("code",{className:"bg-gray-900 light:bg-gray-200 px-2 py-1 rounded",children:"#!/bin/bash"})," and array tricks. It worked perfectly on her Ubuntu laptop."]}),e.jsxs("p",{children:["But the server ran Alpine Linux – no bash. The script failed silently. After rewriting it in pure POSIX ",e.jsx("code",{children:"sh"})," and changing the shebang to ",e.jsx("code",{children:"#!/bin/sh"}),", it ran flawlessly for months."]}),e.jsx("p",{className:"font-medium text-gray-200 light:text-gray-800",children:"✅ Lesson: Know your target environment – or stay POSIX by default."})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Best Practices for Portable Scripts"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["Start with `#!/bin/sh` unless you explicitly need bash features.","Test your script with `dash` (or `busybox sh`) – the strictest POSIX shell.","Use `case` for pattern matching, `test` (or `[ ]`) for conditions.","Avoid arrays, associative arrays, `[[ ]]`, `+=`, `=~`, `${var^^}` etc.","Prefer `printf` over `echo` for portability (especially with options).","Quote all variable expansions – always, even in POSIX.","Use `getopts` for option parsing – it's POSIX, unlike `getopt`.","Avoid process substitution `<(...)` and here‑strings `<<<`."].map((r,a)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:r})]},a))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Tips from the Field"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Check shebang at runtime:"})," Use ",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-2 py-1 rounded",children:"readlink /proc/$$/exe"})," to see which shell is actually running (Linux)."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Emulate arrays with positional parameters:"})," ",e.jsx("code",{children:"set -- value1 value2"})," and ",e.jsx("code",{children:"shift"}),"."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `command -v`"})," instead of `which` – both POSIX and reliable."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Keep a POSIX reference card:"})," `man dash`, `man sh` or"," ",e.jsx("a",{href:"https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 underline",children:"POSIX Shell & Utilities"}),"."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `shellcheck` with `-s sh`"})," to catch bashisms:"," ",e.jsx("code",{children:"shellcheck -s sh my_script.sh"}),"."]})]})]}),e.jsxs("section",{className:s("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💭"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Try changing this…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"bashism_demo.sh"}),", replace the array with a ",e.jsx("code",{children:"set --"})," loop. Then run it with ",e.jsx("kbd",{className:"bg-gray-700 light:bg-gray-300 px-2 py-0.5 rounded",children:"sh bashism_demo.sh"}),". What error do you see?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Observe carefully: bash ignores the shebang when invoked directly as ",e.jsx("code",{children:"sh script"}),"."]})]})]}),e.jsx("section",{className:s("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",l," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“I often tell my students in ",e.jsx("span",{className:"italic",children:"Naihati"})," and"," ",e.jsx("span",{className:"italic",children:"Barrackpore"}),": ‘Bash is a comfortable car, but POSIX sh is a bicycle – it goes anywhere and never breaks down.’ Start with the bicycle; upgrade only when you know the road is paved.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#POSIXFirst"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#NoBashisms"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#ShellCheck"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Portable Scripting Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-purple-400",children:[e.jsxs("li",{children:["Shebang is ",e.jsx("code",{children:"#!/bin/sh"})," (unless you really need bash)."]}),e.jsxs("li",{children:["No arrays, associative arrays, ",e.jsx("code",{children:"[[ ]]"}),", ",e.jsx("code",{children:"=~"}),"."]}),e.jsxs("li",{children:["No ",e.jsx("code",{children:"{1..10}"})," brace expansion."]}),e.jsxs("li",{children:["No ",e.jsx("code",{children:"let"}),", ",e.jsx("code",{children:"((i++))"})," – use ",e.jsx("code",{children:"$((i+1))"}),"."]}),e.jsxs("li",{children:["No ",e.jsx("code",{children:"source"})," – use ",e.jsx("code",{children:"."})," (dot)."]}),e.jsxs("li",{children:["No ",e.jsx("code",{children:">&2"})," redirection order – use ",e.jsx("code",{children:"echo error >&2"}),"."]}),e.jsxs("li",{children:["Tested with ",e.jsx("code",{children:"dash"})," or ",e.jsx("code",{children:"busybox sh"}),"."]}),e.jsxs("li",{children:["Run ",e.jsx("code",{children:"shellcheck -s sh"})," – zero warnings."]})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Version controlling shell scripts with Git – Topic30"})})]})]})};export{m as default};
