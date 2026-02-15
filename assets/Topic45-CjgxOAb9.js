import{j as e}from"./index-CG3iA-Ea.js";import{c as a}from"./clsx-B-dksMZM.js";import{S as s}from"./ShellFileLoader-DaQ5Qy3C.js";import"./prism-DRxy4y8s.js";const r=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 01: Read and write JSON files
# ----------------------------------------------------------------------
import json

# Sample student data (Tuhina's grades)
grades = {
    "Tuhina": [88, 92, 79],
    "Swadeep": [95, 91, 88],
    "Abhronila": [100, 98, 97]
}

# Write to JSON file
with open('grades.json', 'w') as f:
    json.dump(grades, f, indent=2)
echo "✅ grades.json written"

# Read back and compute average
with open('grades.json') as f:
    data = json.load(f)

for student, scores in data.items():
    avg = sum(scores) / len(scores)
    print(f"{student:10} average: {avg:.2f}")`,n=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 02: Advanced subprocess – capture stdout, stderr, and return code
# ----------------------------------------------------------------------
import subprocess

def run_cmd(cmd):
    """Run shell command, capture output and return code."""
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return {
        'stdout': result.stdout.strip(),
        'stderr': result.stderr.strip(),
        'returncode': result.returncode
    }

# Try a successful command
res = run_cmd('ls -la')
echo "✅ ls success, stdout lines: @(len(res['stdout'].splitlines()))"

# Try a failing command
res = run_cmd('ls /nonexistent')
if res['returncode'] != 0:
    echo "❌ Command failed: @(res['stderr'])"

# Mix with xonsh $( ) – but here we have full Python control.`,l=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 03: Customize the XONSH prompt (requires xonsh session)
# This script is meant to be sourced or run interactively.
# ----------------------------------------------------------------------
# Save current prompt
old_prompt = $PROMPT

# Create a dynamic prompt with git branch, time, and custom colors
$PROMPT = '{hostname} {user} {cwd} {git_branch} {time} > '

# You can also define a function to set prompt conditionally
def git_branch():
    branch = $(git branch --show-current 2>/dev/null).strip()
    return f"[{branch}]" if branch else ""

# To test in current session, source this file:
# source example03.xsh
echo "Prompt updated. Try it in interactive mode."`,o=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 04: Programmatically manage aliases
# ----------------------------------------------------------------------
# Add an alias that uses Python
aliases['weather'] = 'curl wttr.in/Barrackpore?format=3'

# Add an alias as a Python function
def ssh_ichapur(args):
    """Quick ssh to Ichapur server"""
    host = args[0] if args else 'lab.ichapur.edu'
    cmd = f'ssh {host}'
    return $(@(cmd))

aliases['ssh-ich'] = ssh_ichapur

echo "Aliases added:"
echo @(aliases.keys())

# Usage (in interactive mode):
# $ weather
# $ ssh-ich swadeep@server`,d=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 05: Load environment variables from .env file
# ----------------------------------------------------------------------
import os
from pathlib import Path

def load_dotenv(dotenv_path='.env'):
    """Load .env file into environment variables."""
    if not Path(dotenv_path).exists():
        echo "⚠️ .env file not found"
        return
    with open(dotenv_path) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            key, val = line.split('=', 1)
            os.environ[key] = val
            # Also set in xonsh environment
            __xonsh__.env[key] = val
    echo "✅ Environment variables loaded"

load_dotenv()
echo "DATABASE_URL = @(__xonsh__.env.get('DATABASE_URL', 'not set'))"`,c=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 06: Capture and use exit status of commands
# ----------------------------------------------------------------------
# In XONSH, $? is a special variable representing last command status
echo "Testing exit status:"
ls / > /dev/null
echo "ls / → $?"  # Should be 0

ls /nonexistent 2>/dev/null
echo "ls /nonexistent → $?"  # Should be non-zero

# You can also use Python's subprocess for more control
import subprocess
proc = subprocess.run(['ls', '/nonexistent'], capture_output=True)
print(f"subprocess exit code: {proc.returncode}")

# Conditional execution
if $(which python3 2>/dev/null):
    echo "🐍 Python3 is installed"
else:
    echo "❌ Python3 not found"`,h=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 07: Process files in parallel (using Python's concurrent.futures)
# ----------------------------------------------------------------------
import glob
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

def count_lines(filename):
    """Count lines in a single file."""
    with open(filename, 'r', errors='ignore') as f:
        return filename, sum(1 for _ in f)

# Find all .log files recursively
log_files = glob.glob('**/*.log', recursive=True)

if not log_files:
    echo "No log files found, using .sh files for demo"
    log_files = glob.glob('**/*.sh', recursive=True)[:5]

echo "Processing @(len(log_files)) files in parallel..."

with ThreadPoolExecutor(max_workers=4) as executor:
    results = executor.map(count_lines, log_files)

for fname, lines in results:
    print(f"{fname:30} {lines:6} lines")`,m=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 08: Parse INI configuration files (common in school labs)
# ----------------------------------------------------------------------
import configparser

# Create a sample config
config = configparser.ConfigParser()
config['NETWORK'] = {
    'host': 'lab.ichapur.edu',
    'port': '22',
    'timeout': '30'
}
config['BACKUP'] = {
    'source': '/home/students',
    'destination': '/mnt/backup',
    'schedule': 'daily'
}

with open('lab_config.ini', 'w') as f:
    config.write(f)
echo "✅ lab_config.ini written"

# Read it back
config.read('lab_config.ini')
host = config['NETWORK']['host']
port = config['NETWORK'].getint('port')
timeout = config['NETWORK'].getint('timeout')
echo f"Backup will connect to {host}:{port} (timeout={timeout}s)"`,x=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 09: Fetch data from a REST API using requests
# ----------------------------------------------------------------------
import requests

# Fetch weather for Naihati (free API)
try:
    response = requests.get('https://wttr.in/Naihati?format=%t+%w+%c')
    if response.status_code == 200:
        weather = response.text.strip()
        echo "🌤️ Naihati weather: @(weather)"
    else:
        echo "⚠️ API error: @(response.status_code)"
except Exception as e:
    echo "❌ Failed to fetch weather: @(e)"

# Fetch random joke
try:
    joke = requests.get('https://official-joke-api.appspot.com/random_joke').json()
    echo f"😂 {joke['setup']} – {joke['punchline']}"
except:
    echo "No joke today"`,p=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 10: Simple interactive menu (Python inside XONSH)
# ----------------------------------------------------------------------
import sys

def show_menu():
    print("
=== Student Lab Menu ===")
    print("1. Show current directory")
    print("2. List Python files")
    print("3. Check disk usage")
    print("4. Exit")
    choice = input("Choose (1-4): ")
    return choice

while True:
    choice = show_menu()
    if choice == '1':
        $(pwd)
    elif choice == '2':
        $(ls -la *.py)
    elif choice == '3':
        $(df -h .)
    elif choice == '4':
        echo "Goodbye!"
        break
    else:
        echo "Invalid choice, try again."`,u=new Date().getFullYear(),g=u-1998,f=`
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
`,N=()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:f}),e.jsxs("div",{className:a("max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8","bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100","transition-colors duration-300"),children:[e.jsxs("div",{className:"space-y-3 mb-10 animate-fadeSlideUp [animation-delay:0ms]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-mono bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-700",children:"Topic 45"}),e.jsx("span",{className:"px-3 py-1 text-xs font-mono bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full border border-amber-200 dark:border-amber-700",children:"XONSH Medium Examples"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-bold tracking-tight",children:["XONSH:"," ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"10 Intermediate‑Level Scripts"})]}),e.jsxs("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl",children:["You know the basics. Now it's time to integrate XONSH into real‑world workflows: configuration files, API calls, parallel processing, and interactive tools. These ten examples mirror tasks from the labs at",e.jsx("strong",{children:" Barrackpore"})," and ",e.jsx("strong",{children:"Shyamnagar"}),"."]})]}),e.jsxs("section",{className:a("mb-12 p-6 rounded-xl","bg-gray-50 dark:bg-gray-800/50","border border-gray-200 dark:border-gray-700","animate-fadeSlideUp [animation-delay:100ms]"),children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"})," Where XONSH outshines pure Bash"]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"leading-relaxed",children:["Pure Bash struggles with structured data (JSON, YAML, INI) and parallel execution. XONSH brings Python's entire standard library and ecosystem to your terminal. ",e.jsx("strong",{children:"Abhronila"})," uses Example 07 to process thousands of log files in seconds.",e.jsx("strong",{children:" Debangshu"})," built a lab inventory system with Example 08 + 09."]}),e.jsx("p",{className:"leading-relaxed",children:"The ten scripts on the right are production‑ready snippets you can adapt immediately. Pay special attention to the subprocess and parallel patterns – they save hours."}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded border-l-4 border-indigo-400",children:[e.jsx("span",{className:"font-semibold",children:"🧠 Think like a pro"}),e.jsxs("p",{className:"text-sm mt-1",children:[`XONSH is not just "Bash with Python". It's a hybrid where you choose the best tool for each line. Use shell for simple pipelines, Python for logic. Know when to drop into`," ",e.jsx("code",{children:"subprocess"})," for full control."]})]})]}),e.jsx("div",{className:"flex items-center justify-center p-2 group",children:e.jsxs("svg",{width:"280",height:"160",viewBox:"0 0 280 160",className:"w-full max-w-xs","aria-label":"XONSH intermediate capabilities",children:[e.jsx("rect",{x:"10",y:"30",width:"80",height:"60",rx:"8",fill:"#374151",className:"dark:fill-gray-700 group-hover:fill-indigo-800/50 transition-all"}),e.jsx("text",{x:"22",y:"60",fill:"#E5E7EB",fontSize:"10",children:"JSON / API"}),e.jsx("rect",{x:"190",y:"30",width:"80",height:"60",rx:"8",fill:"#374151",className:"dark:fill-gray-700 group-hover:fill-amber-800/50 transition-all"}),e.jsx("text",{x:"202",y:"60",fill:"#E5E7EB",fontSize:"10",children:"Parallel"}),e.jsx("path",{d:"M100 60 L180 60",stroke:"#6B7280",strokeWidth:"2",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"d",values:"M100 60 L180 60; M90 60 L190 60; M100 60 L180 60",dur:"3s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"90",y:"100",width:"100",height:"30",rx:"8",fill:"#4F46E5",className:"dark:fill-indigo-600 group-hover:fill-indigo-500 transition-all"}),e.jsx("text",{x:"125",y:"122",fill:"white",fontSize:"12",fontWeight:"bold",children:"XONSH"})]})})]})]}),e.jsxs("section",{className:"space-y-8 mb-12",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-2 animate-fadeSlideUp [animation-delay:200ms]",children:"🧪 Real‑world XONSH patterns"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 animate-fadeSlideUp [animation-delay:250ms]",children:[e.jsx(s,{fileModule:r,title:"01. JSON processing",highlightLines:[12,17]}),e.jsx(s,{fileModule:n,title:"02. Subprocess with capture",highlightLines:[5,16]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 animate-fadeSlideUp [animation-delay:300ms]",children:[e.jsx(s,{fileModule:l,title:"03. Custom prompt",highlightLines:[8,14]}),e.jsx(s,{fileModule:o,title:"04. Dynamic aliases",highlightLines:[6,14]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 animate-fadeSlideUp [animation-delay:350ms]",children:[e.jsx(s,{fileModule:d,title:"05. Load .env file",highlightLines:[7,19]}),e.jsx(s,{fileModule:c,title:"06. Exit status",highlightLines:[4,12]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 animate-fadeSlideUp [animation-delay:400ms]",children:[e.jsx(s,{fileModule:h,title:"07. Parallel processing",highlightLines:[9,19]}),e.jsx(s,{fileModule:m,title:"08. INI config parser",highlightLines:[8,20]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 animate-fadeSlideUp [animation-delay:450ms]",children:[e.jsx(s,{fileModule:x,title:"09. REST API call",highlightLines:[5,14]}),e.jsx(s,{fileModule:p,title:"10. Interactive menu",highlightLines:[10,25]})]}),e.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400 italic",children:["💡 Most examples require additional Python packages (requests, configparser is built‑in). Install them with"," ",e.jsx("code",{children:"pip install --user requests"})," if needed."]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[e.jsxs("div",{className:a("p-5 rounded-xl border","bg-white dark:bg-gray-800","border-gray-200 dark:border-gray-700","hover:shadow-lg hover:scale-[1.02] transition-all duration-300","animate-fadeSlideUp [animation-delay:500ms]"),children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"💡"}),e.jsx("h3",{className:"font-semibold text-lg",children:"Pro Tips"})]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"__xonsh__.env"})," to access and modify environment variables from Python."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsxs("span",{children:["Prefer ",e.jsx("code",{children:"subprocess.run()"})," with ",e.jsx("code",{children:"capture_output"}),"when you need both stdout and stderr."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsxs("span",{children:["For long‑running XONSH sessions, store configuration in"," ",e.jsx("code",{children:"~/.xonshrc"})," – same syntax as scripts."]})]})]})]}),e.jsxs("div",{className:a("p-5 rounded-xl border","bg-white dark:bg-gray-800","border-gray-200 dark:border-gray-700","hover:shadow-lg hover:scale-[1.02] transition-all duration-300","animate-fadeSlideUp [animation-delay:600ms]"),children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"⚠️"}),e.jsx("h3",{className:"font-semibold text-lg",children:"Common Pitfalls"})]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Missing imports"})," – Python modules must be installed in the same environment where XONSH runs."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Subprocess vs $()"})," – ",e.jsx("code",{children:"$(cmd)"})," blocks and returns string; ",e.jsx("code",{children:"subprocess"})," gives more control."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Alias functions"})," receive arguments as list; don't forget to handle ",e.jsx("code",{children:"args[0]"})," safely."]})]})]})]}),e.jsxs("div",{className:a("p-5 rounded-xl border","bg-white dark:bg-gray-800","border-gray-200 dark:border-gray-700","hover:shadow-lg hover:scale-[1.02] transition-all duration-300","animate-fadeSlideUp [animation-delay:700ms]"),children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"✅"}),e.jsx("h3",{className:"font-semibold text-lg",children:"Best Practices"})]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsxs("span",{children:["Always check ",e.jsx("code",{children:"returncode"})," when calling external commands – don't assume success."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"pathlib"})," for file paths; it's cross‑platform and readable."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsxs("span",{children:["Keep interactive features (prompt, aliases) in your xonshrc; keep batch jobs in standalone ",e.jsx("code",{children:".xsh"})," files."]})]})]})]})]}),e.jsxs("section",{className:a("mb-12 p-6 rounded-xl","bg-indigo-50 dark:bg-indigo-900/20","border border-indigo-200 dark:border-indigo-800","animate-fadeSlideUp [animation-delay:800ms]"),children:[e.jsxs("h3",{className:"text-xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📋"})," Mini Checklist – Intermediate XONSH"]}),e.jsx("div",{className:"grid sm:grid-cols-1 gap-3",children:["I can read/write JSON files and manipulate data.","I can capture stdout/stderr and exit codes from external commands.","I have customized my XONSH prompt with git branch.","I have added a Python‑function alias.","I can load environment variables from a .env file.","I can process multiple files in parallel using threads.","I can parse an INI configuration file.","I have made an HTTP request from a shell script.","I can build a simple interactive menu.","I know when to use subprocess vs $( ) vs Python functions."].map((i,t)=>e.jsxs("div",{className:"flex items-start gap-2 text-sm",children:[e.jsx("span",{className:"text-indigo-500 dark:text-indigo-300 mt-0.5",children:"◻️"}),e.jsx("span",{children:i})]},t))})]}),e.jsx("section",{className:a("mb-10 p-6 rounded-xl","bg-amber-50 dark:bg-amber-900/20","border border-amber-200 dark:border-amber-800","hover:shadow-md hover:bg-amber-100/50 dark:hover:bg-amber-900/30","transition-all duration-300","animate-fadeSlideUp [animation-delay:900ms]"),children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Teacher's Note"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 mb-3",children:[e.jsx("strong",{children:"Sukanta Hui"})," • ",g," years of programming & systems education (since 1998)",e.jsx("br",{}),e.jsx("span",{className:"font-mono text-xs",children:"sukantahui@codernaccotax.co.in • 📱 7003756860"})]}),e.jsxs("p",{className:"leading-relaxed",children:["In the ",e.jsx("strong",{children:"Ichapur"})," lab, students often ask, “Why not just write a Python script?” The answer: because XONSH gives you the shell's interactive feel and seamless command execution while keeping Python's expressive power. Example 07 (parallel log processing) is a favourite – we run it on the lab server and watch CPU usage spike (safely). Remind students that with great power comes responsibility: an accidental ",e.jsx("code",{children:"subprocess.run('rm -rf', shell=True)"})," ","is still dangerous. Always sanitise input!"]})]})]})}),e.jsxs("div",{className:a("text-sm p-5 rounded-lg","bg-gray-100 dark:bg-gray-800/60","border border-gray-300 dark:border-gray-600","animate-fadeSlideUp [animation-delay:1000ms]"),children:[e.jsx("span",{className:"font-semibold block mb-1",children:"🔍 Observe carefully…"}),e.jsxs("p",{children:["In Example 04, the alias function ",e.jsx("code",{children:"ssh_ichapur"})," receives arguments as a list. Try modifying it to accept flags like"," ",e.jsx("code",{children:"-p 2222"}),". How would you pass those to the ssh command?"]}),e.jsxs("p",{className:"mt-2",children:["In Example 07, we used ",e.jsx("code",{children:"ThreadPoolExecutor"}),". What would you change to limit the number of concurrent processes instead of threads?"]})]}),e.jsx("div",{className:"mt-12 pt-6 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 text-center",children:e.jsxs("p",{children:["Next: ",e.jsx("strong",{children:"Topic 46 – XONSH Expert Examples (10 examples)"}),": macros, custom transformers, and embedding XONSH."]})})]})]});export{N as default};
