import{j as e}from"./index-meFSU1Lv.js";import{c as n}from"./clsx-B-dksMZM.js";import{S as s}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const a=`#!/bin/bash
# exit_status_demo.sh – Demonstrates basic exit status checks
# Usage: ./exit_status_demo.sh

set -euo pipefail
IFS=$'\\n\\t'

echo "=== Example 1: if command; then ==="
if grep -q root /etc/passwd; then
    echo "✓ root user found"
else
    echo "✗ root user not found (strange!)"
fi

echo -e "\\n=== Example 2: Explicit $? check ==="
mkdir /tmp/testdir 2>/dev/null
status=$?
if [ "$status" -eq 0 ]; then
    echo "✓ Directory created successfully"
else
    echo "✗ Failed to create directory (exit code: $status)"
fi
rmdir /tmp/testdir 2>/dev/null || true

echo -e "\\n=== Example 3: && and || chaining ===""
ping -c 1 google.com >/dev/null 2>&1 \\
    && echo "✓ Internet reachable" \\
    || echo "✗ No internet connection"

echo -e "\\n=== Example 4: Using exit status in function ===""
check_file() {
    if [ -f "$1" ]; then
        echo "✓ File $1 exists"
        return 0
    else
        echo "✗ File $1 not found" >&2
        return 1
    fi
}
check_file "/etc/passwd"
check_file "/nonexistent"`,l=`#!/bin/bash
# error_handling.sh – Professional error handling with die() and trap
# Usage: ./error_handling.sh

set -euo pipefail
IFS=$'\\n\\t'

# die() – print error message and exit with custom code
die() {
    local msg="$1"
    local code="\${2:-1}"
    echo "ERROR: $msg" >&2
    exit "$code"
}

# Cleanup function (called on exit)
cleanup() {
    local exit_code=$?
    if [ -d "\${TEMP_DIR:-}" ]; then
        rm -rf "$TEMP_DIR"
        echo "Cleaned up temporary directory"
    fi
    exit "$exit_code"
}
trap cleanup EXIT

# Main script
echo "Creating temporary directory..."
TEMP_DIR=$(mktemp -d) || die "Failed to create temp dir"

echo "Writing data..."
echo "test data" > "$TEMP_DIR/sample.txt" || die "Failed to write file"

echo "Processing..."
grep "test" "$TEMP_DIR/sample.txt" >/dev/null || die "Pattern not found"

echo "✅ All operations succeeded"
exit 0`,o=`#!/bin/bash
# custom_exit_codes.sh – Define and use meaningful custom exit codes
# Usage: ./custom_exit_codes.sh <username>

# Exit code conventions:
#   0 – success
#   1 – general error (e.g., missing argument)
#   2 – user not found
#   3 – user already exists

set -euo pipefail
IFS=$'\\n\\t'

die() {
    echo "ERROR: $1" >&2
    exit "\${2:-1}"
}

# Check argument
if [ $# -ne 1 ]; then
    echo "Usage: $0 <username>" >&2
    exit 1
fi

username="$1"

# Check if user exists
if id "$username" &>/dev/null; then
    die "User $username already exists" 3
fi

# Simulate user creation (would require root)
echo "✅ User $username would be created (simulated)"
exit 0`,c=`#!/bin/bash
# command_chaining.sh – Conditional execution with && and ||
# Usage: ./command_chaining.sh

set -euo pipefail
IFS=$'\\n\\t'

# Chain 1: Create directory and then a file inside it
mkdir -p /tmp/chaining-demo && \\
    echo "Hello from chain" > /tmp/chaining-demo/hello.txt && \\
    echo "✓ Chain 1 succeeded"

# Chain 2: Try to remove a non-existent file (fails) and then fallback
rm /tmp/nonexistent 2>/dev/null || echo "⚠️  File not found, continuing..."

# Chain 3: One-liner condition
[ -f /etc/passwd ] && echo "✓ /etc/passwd exists" || echo "✗ /etc/passwd missing"

# Clean up
rm -rf /tmp/chaining-demo 2>/dev/null || true`,d=`#!/bin/bash
# check_multiple_commands.sh – Handling exit status in pipelines and multiple commands
# Usage: ./check_multiple_commands.sh

set -euo pipefail
IFS=$'\\n\\t'

echo "=== Without pipefail ==="
# This pipeline will "succeed" because the last command (wc -l) always returns 0
false | wc -l
echo "Pipeline exit status: $?"   # Prints 0!

echo -e "\\n=== With pipefail ==="
set -o pipefail
false | wc -l
echo "Pipeline exit status with pipefail: $?"  # Prints 1
set +o pipefail  # restore

echo -e "\\n=== Using PIPESTATUS (bash only) ==="
true | false | true
echo "PIPESTATUS array: \${PIPESTATUS[@]}"  # 0 1 0

echo -e "\\n=== Checking multiple commands explicitly ==="
ret=0
grep root /etc/passwd >/dev/null || ret=$?
grep nobody /etc/passwd >/dev/null || ret=$?
grep daemon /etc/passwd >/dev/null || ret=$?
if [ "$ret" -eq 0 ]; then
    echo "✓ All three users found"
else
    echo "✗ At least one user missing"
fi`,g=()=>{const r=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes statusPulse {
          0% { fill: #ef4444; }
          50% { fill: #4ade80; }
          100% { fill: #ef4444; }
        }
      `}),e.jsxs("div",{className:n("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:n("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:["📟 Example Script: ",e.jsx("span",{className:"text-green-400",children:"Checking Exit Status"})]}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["Every command tells you if it succeeded or failed.",e.jsx("span",{className:"text-blue-400",children:" Swadeep"})," in ",e.jsx("span",{className:"italic",children:"Barrackpore"})," and",e.jsx("span",{className:"text-blue-400",children:" Tuhina"})," in ",e.jsx("span",{className:"italic",children:"Ichapur"}),"learned to listen – now their scripts never ignore failure."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"360",height:"140",viewBox:"0 0 360 140",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Command -> exit code -> 0 success / non-zero failure",children:[e.jsx("rect",{x:"30",y:"50",width:"100",height:"40",rx:"8",fill:"#1e293b",stroke:"#6b7280"}),e.jsx("text",{x:"55",y:"77",fontSize:"14",fill:"#d1d5db",children:"grep pattern"}),e.jsx("line",{x1:"135",y1:"70",x2:"180",y2:"70",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"190",y:"45",width:"50",height:"30",rx:"6",fill:"#312e81",stroke:"#a78bfa"}),e.jsx("text",{x:"205",y:"67",fontSize:"16",fill:"#e0e7ff",children:"$?"}),e.jsx("line",{x1:"215",y1:"60",x2:"240",y2:"40",stroke:"#4ade80",strokeWidth:"2"}),e.jsx("line",{x1:"215",y1:"60",x2:"240",y2:"80",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("circle",{cx:"260",cy:"40",r:"8",fill:"#4ade80",children:e.jsx("animate",{attributeName:"r",values:"6;10;6",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"260",cy:"80",r:"8",fill:"#ef4444",children:e.jsx("animate",{attributeName:"r",values:"6;10;6",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#f59e0b"})})})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"🧠 Every Command Returns a Status"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("span",{className:"text-amber-400",children:"0 = success, anything else = failure."}),"This simple rule is the foundation of robust shell scripting."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Debangshu"})," once wrote a deployment script that didn't check if ",e.jsx("code",{children:"npm install"})," succeeded. It failed silently, and the old version remained deployed. Users saw a broken site for hours."]}),e.jsx("p",{children:"Checking exit status is not optional – it's the difference between a professional tool and a fragile script."})]}),e.jsxs("div",{className:n("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-green-700","hover:shadow-[0_0_20px_-5px_rgba(74,222,128,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📌"})," Three Ways to Check"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"if command; then ..."})," – implicit check"]}),e.jsxs("li",{children:[e.jsx("code",{children:"command; if [ $? -eq 0 ]; then ..."})," – explicit $?"]}),e.jsxs("li",{children:[e.jsx("code",{children:"command && success || failure"})," – chaining"]})]})]})]})]}),e.jsxs("section",{className:"space-y-12",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"📜 Exit Status in Practice – Five Essential Patterns"}),e.jsx(s,{fileModule:a,title:"🎯 exit_status_demo.sh – $?, if, &&, ||",highlightLines:[6,9,13,18]}),e.jsx(s,{fileModule:l,title:"🛡️ error_handling.sh – Functions, die(), cleanup on error",highlightLines:[6,10,16,22]}),e.jsx(s,{fileModule:o,title:"🔢 custom_exit_codes.sh – Define and document custom codes",highlightLines:[2,9,14,18]}),e.jsx(s,{fileModule:c,title:"⛓️ command_chaining.sh – Conditional execution with && and ||",highlightLines:[4,8,12]}),e.jsx(s,{fileModule:d,title:"🔬 check_multiple_commands.sh – Pipelining and set -e",highlightLines:[4,10,16]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Pitfalls When Checking Exit Status"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["❌ Checking `$?` immediately after another command (overwritten).","❌ Using `[ $? -eq 0 ]` but forgetting to quote `$?`.","❌ Assuming `set -e` is enough – it's not a silver bullet.","❌ Not preserving exit status in functions (use `return`, not `exit`).","❌ Masking exit status in a pipeline (use `PIPESTATUS` in bash).","❌ Using `command || true` when you actually need to know if it failed.","❌ Not documenting custom exit codes – user doesn't know why it failed.","❌ Testing `$?` with `-ne 0` but not handling specific codes."].map((i,t)=>e.jsx("div",{className:n("p-4 rounded-lg border border-red-800 light:border-red-300","bg-red-900/10 light:bg-red-50","hover:bg-red-900/20 light:hover:bg-red-100 transition-colors"),children:e.jsx("span",{className:"text-red-400 light:text-red-700",children:i})},t))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Best Practices for Exit Status"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["🔹 Use `if command; then` instead of checking `$?` explicitly.","🔹 In functions, use `return` with appropriate code; never `exit` unless you mean to terminate the whole script.","🔹 Document exit codes in comments or a usage section.","🔹 For pipelines, check `${PIPESTATUS[0]}` or `set -o pipefail` (bash).","🔹 Use `die()` function to print error and exit with consistent code.","🔹 Preserve exit status of a command before doing other work: `ret=$?; ...; return $ret`.","🔹 Use `set -e` with caution – it's not a replacement for explicit checks.","🔹 In POSIX sh, use `if cmd; then ... else ... fi`."].map((i,t)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:i})]},t))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Pro Tips"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Reserve exit code 1 for general errors, 2 for misuse (wrong arguments), 3+ for specific conditions."})," This follows BSD conventions and makes debugging easier."]}),e.jsxs("p",{children:["🔹 ",e.jsxs("strong",{children:['Use `trap \'echo "Error on line $LINENO" ',">","&2' ERR`"]})," to catch unexpected errors when `set -e` is enabled. It prints the line number where the script failed."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Never use `exit 0` in a function."})," It terminates the entire script, not just the function. Use `return 0`."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Check exit status of `cd`."}),' A failed `cd` can lead to `rm -rf *` running in the wrong directory. Always `cd somewhere || die "cannot cd"`.']}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"In pipelines, `set -o pipefail` makes the pipeline return the exit code of the rightmost failing command."})," This is often what you want."]})]})]}),e.jsxs("section",{className:n("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Observe carefully…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"exit_status_demo.sh"}),", we use ",e.jsx("code",{children:"if grep -q root /etc/passwd; then"}),". Why don't we need to write ",e.jsx("code",{children:"grep ... ; if [ $? -eq 0 ]; then"}),"? What's the difference?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Try modifying ",e.jsx("code",{children:"error_handling.sh"})," to remove the ",e.jsx("code",{children:"set -e"}),". What happens when ",e.jsx("code",{children:"mkdir"})," fails? Why is ",e.jsx("code",{children:"die"})," still effective?"]})]})]}),e.jsx("section",{className:n("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",r," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“For ",e.jsxs("span",{className:"font-semibold",children:[r," years"]}),", I've told students:",e.jsx("span",{className:"text-blue-400",children:" Abhronila"})," in ",e.jsx("span",{className:"italic",children:"Shyamnagar"}),"once spent a whole afternoon debugging a script that 'sometimes' failed. The culprit? She checked ",e.jsx("code",{children:"$?"})," but another command ran in between. Now she captures the exit status immediately. This one habit separates novices from professionals.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#CheckYourStatus"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#0IsSuccess"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#DieGracefully"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Exit Status Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-green-400",children:[e.jsx("li",{children:"Do you check if critical commands succeed?"}),e.jsx("li",{children:"Do you capture `$?` immediately if needed later?"}),e.jsx("li",{children:"Do your functions `return` meaningful codes, not `exit`?"}),e.jsx("li",{children:"Are custom exit codes documented?"}),e.jsxs("li",{children:["Do you handle pipeline failures (`pipefail` or ","${PIPESTATUS[@]}",")?"]}),e.jsx("li",{children:"Do you have a `die()` function for consistent error reporting?"}),e.jsx("li",{children:"Have you tested your script's behaviour when commands fail?"}),e.jsx("li",{children:"Do you avoid `command || true` unless you intentionally ignore failure?"})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Example Script – Automated backup utility (Topic38)"})})]})]})};export{g as default};
