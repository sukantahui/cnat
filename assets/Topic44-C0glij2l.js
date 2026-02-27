import{j as e}from"./index-meFSU1Lv.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as i}from"./ShellFileLoader-Ysp1MRxD.js";import"./prism-sFrOkMqg.js";const n=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 01: Hello, XONSH – mixing echo and Python print
# ----------------------------------------------------------------------
echo "Welcome to XONSH, the Python-powered shell!"

# Pure Python
print("This line comes from Python's print()")

# Shell command inside Python string
print(f"Current directory: {$(pwd).strip()}")`,r=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 02: Python arithmetic in the shell
# ----------------------------------------------------------------------
# No need for expr or $(( )), just Python expressions
a = 15
b = 7
result = a * b + 42
echo "Result of 15 * 7 + 42 = @(result)"

# Works with floating point too
pi = 3.14159
radius = 5.3
area = pi * radius ** 2
print(f"Circle area: {area:.2f}")`,l=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 03: Capturing shell command output into Python variables
# ----------------------------------------------------------------------
# $(command) returns the stdout as a string (stripped by default)
files_list = $(ls -la)
print(f"Number of lines in 'ls -la': {len(files_list.splitlines())}")

# Get the first 3 lines
first_three = $(ls -la | head -3)
print("First three lines:")
print(first_three)

# Use the output in a Python loop
for line in files_list.splitlines()[:3]:
    print(f"  {line}")`,o=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 04: $PATH is a Python list – manipulate it easily
# ----------------------------------------------------------------------
echo "Original PATH entries: @(len($PATH))"

# Add a directory (persists only for this session)
$PATH.append('/home/tuhina/my_scripts')
echo "Now PATH has @(len($PATH)) entries"

# Check if a directory is in PATH
if '/usr/local/bin' in $PATH:
    print("✓ /usr/local/bin is in PATH")

# Remove an entry (if you must)
$PATH.remove('/home/tuhina/my_scripts')`,d=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 05: Python list comprehension inside a shell script
# ----------------------------------------------------------------------
# Imagine Swadeep wants to find all .txt files larger than 1KB
from pathlib import Path

txt_files = list(Path('.').glob('*.txt'))
large_files = [f for f in txt_files if f.stat().st_size > 1024]
print(f"Found {len(large_files)} .txt files larger than 1KB")
for f in large_files:
    print(f"  {f.name}")`,c=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 06: Using Python's os module alongside shell commands
# ----------------------------------------------------------------------
import os

# Python way
cwd_py = os.getcwd()
echo "Python says current directory is @(cwd_py)"

# Shell way
cwd_sh = $(pwd).strip()
echo "Shell says current directory is @(cwd_sh)"

# Get username
user = os.environ.get('USER', 'unknown')
print(f"Hello, {user}!")

# List directory contents with both methods
print("Python glob:")
for f in os.listdir('.'):
    print(f"  {f}")

echo "Shell glob:"
ls -la | head -5`,h=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 07: Python if-else (no test, [ ], or [[ ]] needed)
# ----------------------------------------------------------------------
import random

# Abhronila's lottery number
ticket = random.randint(1, 100)
echo "Your ticket number is @(ticket)"

if ticket > 70:
    print("🎉 You win a prize!")
elif ticket > 30:
    print("😐 Better luck next time")
else:
    print("❌ No prize")

# File existence check – pure Python
from pathlib import Path
config = Path('/etc/hosts')
if config.exists():
    print(f"✓ {config} exists")`,m=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 08: For loop over files (Python style)
# ----------------------------------------------------------------------
# Debangshu needs to check permissions of all .sh files
from pathlib import Path

for script in Path('.').glob('*.sh'):
    size = script.stat().st_size
    perm = oct(script.stat().st_mode)[-3:]
    print(f"{script.name:20} {size:8} bytes  perm: {perm}")

# Traditional shell loop is also available
echo "--- shell loop ---"
for f in *.sh:
    ls -l @(f)`,x=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 09: Defining and using functions (Python syntax)
# ----------------------------------------------------------------------
def greet(name, greeting="Hello"):
    """Return a personalized greeting."""
    return f"{greeting}, {name}!"

# Call the function
msg = greet("Tuhina", "Namaste")
echo @(msg)

# Function can also run shell commands
def count_lines(filename):
    result = $(wc -l @(filename))
    return int(result.split()[0])

total = count_lines("/etc/passwd")
print(f"/etc/passwd has {total} lines")`,p=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 10: Using Python regex to extract patterns
# ----------------------------------------------------------------------
import re

# Sample log line (from Naihati server)
log_line = "192.168.1.45 - - [12/Feb/2026:10:15:32] GET /index.html 200 4523"

# Extract IP and HTTP status
ip = re.search(r'^[\\d.]+', log_line).group()
status = re.search(r'\\s(\\d{3})\\s', log_line).group(1)

print(f"IP: {ip}, Status: {status}")

# Process multiple files
import glob
for fname in glob.glob('/var/log/*.log'):
    content = $(cat @(fname))
    errors = re.findall(r'ERROR|Failed', content)
    if errors:
        print(f"{fname}: {len(errors)} errors")`,g=new Date().getFullYear(),f=g-1998,u=`
  @keyframes fadeSlideUp {
    0% { opacity: 0; transform: translateY(12px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes gentlePulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.75; }
  }
  .animate-fadeSlideUp {
    animation: fadeSlideUp 0.6s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
  }
  .animate-gentlePulse {
    animation: gentlePulse 3s ease-in-out infinite;
  }
`,v=()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:u}),e.jsxs("div",{className:s("max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8","bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100","transition-colors duration-300"),children:[e.jsxs("div",{className:"space-y-3 mb-10 animate-fadeSlideUp [animation-delay:0ms]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-mono bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-700",children:"Topic 44"}),e.jsx("span",{className:"px-3 py-1 text-xs font-mono bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full border border-amber-200 dark:border-amber-700",children:"XONSH Basic Examples"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-bold tracking-tight",children:["XONSH in Action:"," ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"10 Fundamental Examples"})]}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl",children:"Now that XONSH is installed, let's write some real scripts. These ten examples cover the most common patterns: mixing Python and shell, list comprehensions, environment tweaks, and more. Each example is self‑contained and ready to run."})]}),e.jsxs("section",{className:s("mb-12 p-6 rounded-xl","bg-gray-50 dark:bg-gray-800/50","border border-gray-200 dark:border-gray-700","animate-fadeSlideUp [animation-delay:100ms]"),children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🧩"})," What makes XONSH different?"]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"leading-relaxed",children:["Traditional shell scripting forces you to spawn external commands (awk, sed, cut) for text processing. With XONSH, you bring the full power of Python into your command line."," ",e.jsx("strong",{children:"Tuhina"})," can now write loops and conditions using the same language she uses for data analysis."]}),e.jsx("p",{className:"leading-relaxed",children:"The ten examples on the right demonstrate the most frequent operations: arithmetic, environment, file iteration, and regular expressions – all without leaving the shell."}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded border-l-4 border-indigo-400",children:[e.jsx("span",{className:"font-semibold",children:"⚡ Pro insight"}),e.jsxs("p",{className:"text-sm mt-1",children:["XONSH parses each line ",e.jsx("em",{children:"both"})," as shell and Python. If a line is valid Python, it runs as Python; otherwise it's passed to the shell. This hybrid parsing is why you can freely mix",e.jsx("code",{children:"echo"})," and ",e.jsx("code",{children:"print()"}),"."]})]})]}),e.jsx("div",{className:"flex items-center justify-center p-2 group",children:e.jsxs("svg",{width:"280",height:"160",viewBox:"0 0 280 160",className:"w-full max-w-xs","aria-label":"XONSH hybrid parsing",children:[e.jsx("rect",{x:"10",y:"30",width:"80",height:"60",rx:"8",fill:"#374151",className:"dark:fill-gray-700 group-hover:fill-indigo-800/50 transition-all duration-300"}),e.jsx("text",{x:"22",y:"60",fill:"#E5E7EB",fontSize:"12",children:'print("Hi")'}),e.jsx("text",{x:"22",y:"80",fill:"#E5E7EB",fontSize:"12",children:"[x**2 for x]"}),e.jsx("rect",{x:"190",y:"30",width:"80",height:"60",rx:"8",fill:"#374151",className:"dark:fill-gray-700 group-hover:fill-amber-800/50 transition-all duration-300"}),e.jsx("text",{x:"202",y:"60",fill:"#E5E7EB",fontSize:"12",children:"ls -la"}),e.jsx("text",{x:"202",y:"80",fill:"#E5E7EB",fontSize:"12",children:"echo $PATH"}),e.jsx("text",{x:"130",y:"60",fontSize:"28",fill:"#818CF8",className:"dark:fill-indigo-400 animate-gentlePulse",children:"⇄"}),e.jsx("rect",{x:"90",y:"110",width:"100",height:"30",rx:"8",fill:"#4F46E5",className:"dark:fill-indigo-600 group-hover:fill-indigo-500 transition-all"}),e.jsx("text",{x:"125",y:"132",fill:"white",fontSize:"12",fontWeight:"bold",children:"XONSH"})]})})]})]}),e.jsxs("section",{className:"space-y-8 mb-12",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-2 animate-fadeSlideUp [animation-delay:200ms]",children:["📘 Example scripts – run each with ",e.jsx("code",{children:"xonsh example.xsh"})]}),e.jsxs("div",{className:s("grid md:grid-cols-1 gap-6","animate-fadeSlideUp [animation-delay:300ms]"),children:[e.jsx(i,{fileModule:n,title:"01. Hello XONSH",highlightLines:[6,9]}),e.jsx(i,{fileModule:r,title:"02. Python arithmetic",highlightLines:[5,11]})]}),e.jsxs("div",{className:s("grid md:grid-cols-1 gap-6","animate-fadeSlideUp [animation-delay:350ms]"),children:[e.jsx(i,{fileModule:l,title:"03. Command substitution $()",highlightLines:[4,12]}),e.jsx(i,{fileModule:o,title:"04. $PATH as Python list",highlightLines:[4,8]})]}),e.jsxs("div",{className:s("grid md:grid-cols-1 gap-6","animate-fadeSlideUp [animation-delay:400ms]"),children:[e.jsx(i,{fileModule:d,title:"05. List comprehension",highlightLines:[6,9]}),e.jsx(i,{fileModule:c,title:"06. Python os + shell",highlightLines:[6,15]})]}),e.jsxs("div",{className:s("grid md:grid-cols-1 gap-6","animate-fadeSlideUp [animation-delay:450ms]"),children:[e.jsx(i,{fileModule:h,title:"07. Python if‑else",highlightLines:[7,12]}),e.jsx(i,{fileModule:m,title:"08. For loop over files",highlightLines:[5,12]})]}),e.jsxs("div",{className:s("grid md:grid-cols-1 gap-6","animate-fadeSlideUp [animation-delay:500ms]"),children:[e.jsx(i,{fileModule:x,title:"09. Functions",highlightLines:[4,14]}),e.jsx(i,{fileModule:p,title:"10. Regex pattern matching",highlightLines:[7,14]})]}),e.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400 italic",children:["💡 All examples assume XONSH is installed (Topic 43) and available in",e.jsx("code",{className:"mx-1",children:"$PATH"}),". Save each as ",e.jsx("code",{children:".xsh"})," and run with ",e.jsx("code",{children:"xonsh filename.xsh"}),"."]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[e.jsxs("div",{className:s("p-5 rounded-xl border","bg-white dark:bg-gray-800","border-gray-200 dark:border-gray-700","hover:shadow-lg hover:scale-[1.02] transition-all duration-300","animate-fadeSlideUp [animation-delay:600ms]"),children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"💡"}),e.jsx("h3",{className:"font-semibold text-lg",children:"Pro Tips"})]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"@(expr)"})," to interpolate Python expressions inside shell commands: ",e.jsx("code",{children:"ls -l @(myfile)"})]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsxs("span",{children:[e.jsx("code",{children:"$(cmd)"})," returns stdout as a string – strip newlines with ",e.jsx("code",{children:".strip()"}),"."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsx("span",{children:"For performance, prefer Python loops over shell loops when processing many files."})]})]})]}),e.jsxs("div",{className:s("p-5 rounded-xl border","bg-white dark:bg-gray-800","border-gray-200 dark:border-gray-700","hover:shadow-lg hover:scale-[1.02] transition-all duration-300","animate-fadeSlideUp [animation-delay:700ms]"),children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"⚠️"}),e.jsx("h3",{className:"font-semibold text-lg",children:"Common Pitfalls"})]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Forgetting @() in shell commands"})," – if you write",e.jsx("code",{children:"ls $myvar"}),", XONSH tries to expand ",e.jsx("code",{children:"$myvar"}),"as an environment variable. Use ",e.jsx("code",{children:"@(myvar)"})," for Python variables."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Subshell confusion"})," – ",e.jsx("code",{children:"$(cmd)"})," is not the same as ",e.jsx("code",{children:"$var"}),". The former captures output, the latter reads an environment variable."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Indentation errors"})," – XONSH uses Python's indentation rules. Mixing tabs and spaces will break your script."]})]})]})]}),e.jsxs("div",{className:s("p-5 rounded-xl border","bg-white dark:bg-gray-800","border-gray-200 dark:border-gray-700","hover:shadow-lg hover:scale-[1.02] transition-all duration-300","animate-fadeSlideUp [animation-delay:800ms]"),children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"✅"}),e.jsx("h3",{className:"font-semibold text-lg",children:"Best Practices"})]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsxs("span",{children:["Start every script with ",e.jsx("code",{children:"#!/usr/bin/env xonsh"}),"."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsx("span",{children:"Keep Python code and shell commands visually separated with comments."})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"from pathlib import Path"})," for file operations – it's more readable than ",e.jsx("code",{children:"os.path"}),"."]})]})]})]})]}),e.jsxs("section",{className:s("mb-12 p-6 rounded-xl","bg-indigo-50 dark:bg-indigo-900/20","border border-indigo-200 dark:border-indigo-800","animate-fadeSlideUp [animation-delay:900ms]"),children:[e.jsxs("h3",{className:"text-xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📋"})," Mini Checklist – Basic XONSH Proficiency"]}),e.jsx("div",{className:"grid sm:grid-cols-1 gap-3",children:["I can run Python expressions directly in the terminal.","I know the difference between $(cmd) and @(var).","I can add and remove directories from $PATH as a Python list.","I can use a list comprehension to filter files.","I have defined and called a Python function inside a .xsh script.","I have used a regular expression to parse a log line."].map((a,t)=>e.jsxs("div",{className:"flex items-start gap-2 text-sm",children:[e.jsx("span",{className:"text-indigo-500 dark:text-indigo-300 mt-0.5",children:"◻️"}),e.jsx("span",{children:a})]},t))})]}),e.jsx("section",{className:s("mb-10 p-6 rounded-xl","bg-amber-50 dark:bg-amber-900/20","border border-amber-200 dark:border-amber-800","hover:shadow-md hover:bg-amber-100/50 dark:hover:bg-amber-900/30","transition-all duration-300","animate-fadeSlideUp [animation-delay:1000ms]"),children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Teacher's Note"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 mb-3",children:[e.jsx("strong",{children:"Sukanta Hui"})," • ",f," years of programming & systems education (since 1998)",e.jsx("br",{}),e.jsx("span",{className:"font-mono text-xs",children:"sukantahui@codernaccotax.co.in • 📱 7003756860"})]}),e.jsxs("p",{className:"leading-relaxed",children:["I often let students like ",e.jsx("strong",{children:"Swadeep"})," and"," ",e.jsx("strong",{children:"Debangshu"}),` spend 20 minutes with these ten examples. The "aha!" moment usually comes with Example 05 – list comprehension on files. They realise they don't need to remember`,e.jsx("code",{children:"find"})," or ",e.jsx("code",{children:"wc"})," flags; they can just write Python. From there, they start migrating their old Bash loops to XONSH. A gentle reminder: XONSH is not always faster than pure Bash for tiny commands, but for any data processing, it's a game‑changer."]})]})]})}),e.jsxs("div",{className:s("text-sm p-5 rounded-lg","bg-gray-100 dark:bg-gray-800/60","border border-gray-300 dark:border-gray-600","animate-fadeSlideUp [animation-delay:1100ms]"),children:[e.jsx("span",{className:"font-semibold block mb-1",children:"🔍 Try changing this…"}),e.jsxs("p",{children:["In Example 05, modify the glob pattern to ",e.jsx("code",{children:"'**/*.py'"})," and add a condition to count lines of code. See how Python's",e.jsx("code",{children:"Path.rglob()"})," works. What happens if you remove the",e.jsx("code",{children:".strip()"})," in Example 03?"]})]}),e.jsx("div",{className:"mt-12 pt-6 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 text-center",children:e.jsxs("p",{children:["Next: ",e.jsx("strong",{children:"Topic 45 – XONSH Medium Examples (10 examples)"}),": working with JSON, subprocesses, and custom prompts."]})})]})]});export{v as default};
