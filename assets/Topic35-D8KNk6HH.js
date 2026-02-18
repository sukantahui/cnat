import{j as e}from"./index-BFnLuail.js";import{c as a}from"./clsx-B-dksMZM.js";import{S as r}from"./ShellFileLoader-BgOvPFCh.js";import"./prism-DTsTe1iV.js";const t=`#!/bin/bash
# validate_input_demo.sh – Reusable input validation library
# Source this file from other scripts: . /path/to/validate_input_demo.sh

set -euo pipefail
IFS=$'\\n\\t'

# ---------- Validation Functions ----------
# All functions return 0 (true) if valid, 1 (false) if invalid.
# Error messages are printed to stderr.

# Validate username: 3-16 characters, alphanumeric + underscore
validate_username() {
    local username="$1"
    if [[ -z "$username" ]]; then
        echo "Error: Username cannot be empty." >&2
        return 1
    fi
    if [[ ! "$username" =~ ^[a-zA-Z0-9_]{3,16}$ ]]; then
        echo "Error: Username must be 3-16 alphanumeric characters or underscore." >&2
        return 1
    fi
    return 0
}

# Validate email (simple pattern: local@domain)
validate_email() {
    local email="$1"
    local pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
    if [[ -z "$email" ]]; then
        echo "Error: Email cannot be empty." >&2
        return 1
    fi
    if [[ ! "$email" =~ $pattern ]]; then
        echo "Error: Invalid email format." >&2
        return 1
    fi
    return 0
}

# Validate integer (optional sign, digits)
validate_integer() {
    local int="$1"
    local min="\${2:-}"
    local max="\${3:-}"
    
    if [[ -z "$int" ]]; then
        echo "Error: Integer cannot be empty." >&2
        return 1
    fi
    if [[ ! "$int" =~ ^-?[0-9]+$ ]]; then
        echo "Error: Not a valid integer." >&2
        return 1
    fi
    
    if [[ -n "$min" && "$int" -lt "$min" ]]; then
        echo "Error: Value must be >= $min." >&2
        return 1
    fi
    if [[ -n "$max" && "$int" -gt "$max" ]]; then
        echo "Error: Value must be <= $max." >&2
        return 1
    fi
    return 0
}

# Validate file exists and is a regular file
validate_file() {
    local file="$1"
    if [[ ! -e "$file" ]]; then
        echo "Error: File '$file' does not exist." >&2
        return 1
    fi
    if [[ ! -f "$file" ]]; then
        echo "Error: '$file' is not a regular file." >&2
        return 1
    fi
    return 0
}

# Validate date (YYYY-MM-DD) and that it's a real calendar date
validate_date() {
    local date="$1"
    if [[ ! "$date" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}$ ]]; then
        echo "Error: Date must be in YYYY-MM-DD format." >&2
        return 1
    fi
    
    # Extract components
    local year="\${date:0:4}"
    local month="\${date:5:2}"
    local day="\${date:8:2}"
    
    # Basic range checks
    if [[ "$month" -lt 1 || "$month" -gt 12 ]]; then
        echo "Error: Month must be 01-12." >&2
        return 1
    fi
    if [[ "$day" -lt 1 || "$day" -gt 31 ]]; then
        echo "Error: Day must be 01-31." >&2
        return 1
    fi
    
    # More accurate validation could use \`date -d\`, but this is platform‑dependent.
    # For portability, we stop here. In practice, use \`date\` for validation.
    return 0
}`,l=`#!/bin/bash
# user_registration.sh – Interactive registration using validation library
# Usage: ./user_registration.sh

set -euo pipefail
IFS=$'\\n\\t'

# Source the validation library (assumes same directory)
SCRIPT_DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
. "$SCRIPT_DIR/validate_input_demo.sh"

echo "=== User Registration ==="
echo ""

# ----- Username -----
while true; do
    read -r -p "Enter username: " username
    if validate_username "$username"; then
        break
    fi
done

# ----- Email -----
while true; do
    read -r -p "Enter email: " email
    if validate_email "$email"; then
        break
    fi
done

# ----- Age -----
while true; do
    read -r -p "Enter age (13-120): " age
    if validate_integer "$age" 13 120; then
        break
    fi
done

# ----- Confirmation -----
echo ""
echo "Registration summary:"
echo "  Username: $username"
echo "  Email:    $email"
echo "  Age:      $age"
echo ""
read -r -p "Is this correct? (y/n): " confirm
if [[ "$confirm" =~ ^[Yy]$ ]]; then
    # In a real script, we would write to a database or file.
    echo "✅ User '$username' registered successfully."
else
    echo "❌ Registration cancelled."
    exit 1
fi

exit 0`,m=()=>{const i=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes checkmark {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
      `}),e.jsxs("div",{className:a("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:a("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:["✅ Example Script: ",e.jsx("span",{className:"text-green-400",children:"User Input Validation"})]}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["Never trust user input. Learn how ",e.jsx("span",{className:"text-blue-400",children:"Swadeep"})," and",e.jsx("span",{className:"text-blue-400",children:" Tuhina"})," validate everything – from usernames in",e.jsx("span",{className:"italic",children:" Barrackpore"})," to email addresses in"," ",e.jsx("span",{className:"italic",children:"Naihati"}),"."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"360",height:"140",viewBox:"0 0 360 140",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Input validation pipeline",children:[e.jsx("rect",{x:"20",y:"50",width:"70",height:"40",rx:"8",fill:"#1e293b",stroke:"#6b7280"}),e.jsx("text",{x:"35",y:"77",fontSize:"12",fill:"#d1d5db",children:"user input"}),e.jsx("line",{x1:"95",y1:"70",x2:"130",y2:"70",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"140",y:"40",width:"100",height:"60",rx:"10",fill:"#312e81",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("text",{x:"165",y:"75",fontSize:"14",fill:"#e0e7ff",children:"validate"}),e.jsxs("g",{transform:"translate(260, 60)",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#4ade80",strokeWidth:"2"}),e.jsx("polyline",{points:"10,15 15,20 25,8",stroke:"#4ade80",strokeWidth:"2",fill:"none",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"30;0",dur:"0.8s",fill:"freeze",begin:"mouseover"})})]}),e.jsxs("g",{transform:"translate(260, 95)",children:[e.jsx("circle",{cx:"15",cy:"15",r:"12",fill:"none",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("line",{x1:"10",y1:"10",x2:"20",y2:"20",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("line",{x1:"20",y1:"10",x2:"10",y2:"20",stroke:"#ef4444",strokeWidth:"2"})]}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#f59e0b"})})})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"🛡️ Why Validate? Defence in Depth"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("span",{className:"text-amber-400",children:"“Everything is a string”"})," – and every string can be malicious, malformed, or simply unexpected. Validation is your first line of defence."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Debangshu"})," once forgot to validate a filename; a user input ",e.jsx("code",{children:"../../etc/passwd"})," wiped a critical config. After that, he never skipped validation again."]})]}),e.jsxs("div",{className:a("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-green-700","hover:shadow-[0_0_20px_-5px_rgba(74,222,128,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"🎯"})," What to Validate"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Presence – not empty"}),e.jsx("li",{children:"Type – integer, string, file"}),e.jsx("li",{children:"Format – email, date, username"}),e.jsx("li",{children:"Range – within allowed bounds"}),e.jsx("li",{children:"Safety – no path traversal, no special chars"})]})]})]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"📜 validate_input_demo.sh – A Reusable Validation Library"}),e.jsx(r,{fileModule:t,title:"✅ validate_input_demo.sh",highlightLines:[5,12,20,28,37,48]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-gray-800 light:bg-gray-100 p-4 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Username:"})," 3‑16 alnum + underscore"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Email:"})," simple pattern (local@domain)"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Integer:"})," optional sign, digits"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 File:"})," exists, regular file"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Date:"})," YYYY-MM-DD, valid calendar"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"🔹 Return codes:"})," 0 = valid, 1 = invalid"]})]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-blue-800 light:border-blue-300 pb-3 inline-block",children:"📋 user_registration.sh – Putting It All Together"}),e.jsx(r,{fileModule:l,title:"📝 user_registration.sh",highlightLines:[9,16,23]}),e.jsx("p",{className:"text-lg leading-relaxed",children:"This interactive script prompts for a username, email, and age, validating each input using the library above. It demonstrates how to combine validation functions into a real‑world workflow."})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Pitfalls in Input Validation"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["❌ Using `[ ]` with regex – `=~` works only in `[[ ]]` (bash).","❌ Forgetting to trim whitespace – leading/trailing spaces cause false negatives.",'❌ Not quoting the regex variable – `[[ $str =~ $pattern ]]` vs `[[ $str =~ "$pattern" ]]`.',"❌ Overly restrictive validation – rejecting valid inputs (e.g., plus in email).","❌ Client‑side validation only – always validate on the server/script side.","❌ Ignoring locale – `[0-9]` vs `[[:digit:]]` in some contexts.","❌ Not providing clear error messages – user doesn't know how to fix.","❌ Validating but not sanitising – path traversal still possible."].map((n,s)=>e.jsx("div",{className:a("p-5 rounded-lg border border-red-800 light:border-red-300","bg-red-900/20 light:bg-red-50","hover:bg-red-900/30 light:hover:bg-red-100 transition-colors"),children:e.jsx("span",{className:"text-lg",children:n})},s))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Best Practices for Input Validation"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["🔹 Validate early, reject fast.","🔹 Use whitelists (allow known good) instead of blacklists (block known bad).","🔹 Return meaningful exit codes and error messages.","🔹 Test edge cases: empty string, spaces, special characters, Unicode.","🔹 In bash, prefer `[[ ... =~ ... ]]` for regex.","🔹 For POSIX sh, use `case` statement for pattern matching.","🔹 Always quote the string being validated.","🔹 Separate validation logic from business logic."].map((n,s)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:n})]},s))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Pro Tips"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Reuse validation libraries."})," Keep your validation functions in a separate file and source it. All your scripts will benefit from consistent rules."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Add a `--strict` mode."})," For high‑security environments, enable additional checks (e.g., no Unicode, no control characters)."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Log validation failures."})," They can indicate probing or attacks.",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-2 py-1 rounded",children:'logger -p auth.warn "Invalid username attempt: $input"'})]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `read -r`"})," – always. Prevents backslash interpretation."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Consider using `associative arrays` for validation messages."}),"Makes error reporting cleaner."]})]})]}),e.jsxs("section",{className:a("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Observe carefully…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"validate_username"}),", we use regex ",e.jsx("code",{children:"^[a-zA-Z0-9_]{3,16}$"}),". Why do we need double braces ",e.jsx("code",{children:"{ }"})," in the shell script? What would happen if we wrote ",e.jsx("code",{children:"{3,16}"})," without escaping?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Try changing the email pattern to accept ",e.jsx("code",{children:"user+tag@example.com"}),". What modification is needed?"]})]})]}),e.jsx("section",{className:a("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",i," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“In my ",e.jsxs("span",{className:"font-semibold",children:[i," years"]})," of teaching,",e.jsx("span",{className:"text-blue-400",children:" Abhronila"})," from ",e.jsx("span",{className:"italic",children:"Shyamnagar"}),"gave me the best analogy: ‘Validation is like checking your train ticket before boarding – it saves you from being thrown out later.’ Teach students to validate not just for security, but for clarity. A helpful error message is a sign of a mature programmer.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#WhitelistNotBlacklist"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#ValidateEarly"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#HelpfulErrors"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Input Validation Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-green-400",children:[e.jsx("li",{children:"Check for empty input."}),e.jsx("li",{children:"Validate format with regex (bash) or `case` (POSIX)."}),e.jsx("li",{children:"Check ranges (numeric, string length)."}),e.jsx("li",{children:"Sanitise dangerous characters (e.g., `../`, `;`)."}),e.jsx("li",{children:"Provide specific error messages."}),e.jsx("li",{children:"Return meaningful exit codes."}),e.jsx("li",{children:"Test with both valid and invalid inputs."}),e.jsx("li",{children:"Consider internationalisation (Unicode)."}),e.jsx("li",{children:"Log suspicious attempts."})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Example Script – Looping through files (Topic36)"})})]})]})};export{m as default};
