import{j as e}from"./index-Do7ncMju.js";import{c as a}from"./clsx-B-dksMZM.js";import{S as s}from"./ShellFileLoader-CfxYwE3z.js";import"./prism-B9ltoSp8.js";const n=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 01: Creating a minimal xontrib (XONSH extension)
# Save as ~/.xonsh/xontrib/hello_world.py
# ----------------------------------------------------------------------
import xonsh.lazyasd as lazy

def _load_xontrib_(xsh, **kwargs):
    """Load the xontrib – adds a new alias and environment variable."""
    xsh.aliases['hello'] = 'echo "Hello from Ichapur lab!"'
    xsh.env['XONTRIB_LOADED'] = 'hello_world'
    print("✅ xontrib 'hello_world' loaded")

# To load it interactively:
# xontrib load hello_world
# hello
# echo $XONTRIB_LOADED
`,i=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 02: Macros – delay execution using @() and macros
# ----------------------------------------------------------------------
from xonsh.macros import Macro

# Define a macro that runs a command only if a condition is true
def run_if(condition, cmd):
    return Macro(f"if {condition}:\\n    $( {cmd} )")

# Create a macro
check = run_if('__xonsh__.env.get("DEBUG")', 'ls -la')

# Later, evaluate it
__xonsh__.env['DEBUG'] = '1'
result = check()   # Actually runs 'ls -la'
echo "Macro executed with DEBUG set"

# Macros are powerful for lazy evaluation and templating
`,o=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 03: Asynchronous prompt with coroutines (requires Python 3.7+)
# Place in ~/.xonshrc or load as script
# ----------------------------------------------------------------------
import asyncio
from xonsh.prompt.base import Prompt

async def async_git_branch():
    """Fetch git branch asynchronously – won't block prompt."""
    proc = await asyncio.create_subprocess_shell(
        'git branch --show-current 2>/dev/null',
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.DEVNULL
    )
    stdout, _ = await proc.communicate()
    branch = stdout.decode().strip()
    return f"[{branch}]" if branch else ""

# Replace the git_branch field with our async version
from xonsh.prompt import gitstatus
gitstatus.async_git_branch = async_git_branch

$PROMPT = '{user}@{hostname}:{cwd}{async_git_branch} > '
echo "Asynchronous prompt enabled"
`,l=`#!/usr/bin/env python3
# ----------------------------------------------------------------------
# Example 04: Embed XONSH inside a Python script
# ----------------------------------------------------------------------
import xonsh.main
from xonsh.execer import Execer

# Create an execer to run xonsh code
execer = Execer()

# Run a xonsh one-liner
code = 'echo "This is @("XONSH") running from Python!"'
result = execer.eval(code, glbs={}, locls={})
print(f"Result: {result}")

# Run a multi-line xonsh script
script = '''
files = $(ls -la)
print(f"Number of files: {len(files.splitlines())}")
'''
execer.exec(script, glbs={}, locls={})
`,d=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 05: Event hooks – react to directory changes, command execution
# ----------------------------------------------------------------------
from xonsh.events import events

@events.on_chdir
def chdir_handler(olddir, newdir, **kw):
    print(f"📂 Moved from {olddir} to {newdir}")
    if 'ichapur' in newdir:
        print("  Welcome to the Ichapur lab!")

@events.on_precommand
def pre_cmd_handler(cmd, **kw):
    print(f"⚡ About to run: {cmd}")

@events.on_postcommand
def post_cmd_handler(cmd, rtn, **kw):
    print(f"✅ Command finished with exit code {rtn}")

echo "Event handlers installed. Try 'cd /tmp' or run 'ls'."
`,c=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 06: Custom command transformer – auto‑alias typos
# ----------------------------------------------------------------------
from xonsh.ast import pipeline_to_tokens

def fix_typos(cmd):
    """If user types 'sl' (common mistake), run 'ls'."""
    tokens = pipeline_to_tokens(cmd)
    if tokens and tokens[0].value == 'sl':
        tokens[0].value = 'ls'
    return cmd

# Register transformer
from xonsh.commands_cache import CommandsCache
CommandsCache().transformer = fix_typos

echo "Transformer installed – try typing 'sl -la'"
`,m=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 07: Profile command execution time
# ----------------------------------------------------------------------
import time
from xonsh.events import events

@events.on_precommand
def profile_start(cmd, **kw):
    __xonsh__.env['_PROFILE_START'] = time.perf_counter()

@events.on_postcommand
def profile_end(cmd, rtn, **kw):
    start = __xonsh__.env.get('_PROFILE_START')
    if start:
        elapsed = time.perf_counter() - start
        print(f"⏱️  '{cmd}' took {elapsed:.3f} seconds")

echo "Profiler active. Run any command to see its duration."
`,h=`#!/usr/bin/env xonsh
# ----------------------------------------------------------------------
# Example 08: Custom tab completion for student names
# ----------------------------------------------------------------------
from xonsh.completers import Completer
from prompt_toolkit.completion import Completion

class StudentCompleter(Completer):
    def complete(self, command, prefix, line, **kwargs):
        students = ['tuhina', 'swadeep', 'abhronila', 'debangshu']
        for name in students:
            if name.startswith(prefix.lower()):
                yield Completion(name, start_position=-len(prefix))

# Register completer for commands starting with 'greet '
from xonsh.completers import add_one_completer
add_one_completer('student-greet', StudentCompleter(), '<')

# Usage: type 'greet tu' and press Tab → expands to 'tuhina'
echo "Custom completer installed. Try: greet tu<tab>"
`,x=`#!/usr/bin/env python3
# ----------------------------------------------------------------------
# Example 09: Use XONSH parser as a library in a Python tool
# ----------------------------------------------------------------------
from xonsh.parser import Parser
from xonsh.ast import pretty_print

def parse_and_show(code):
    parser = Parser()
    tree = parser.parse(code, filename='<string>')
    print("Abstract Syntax Tree:")
    pretty_print(tree)

# Parse a mixed xonsh line
parse_and_show('ls -l @(myvar) | grep txt')

# Output: AST representation – shows how xonsh merges shell and Python
`,p=`#!/usr/bin/env bash
# ----------------------------------------------------------------------
# Example 10: Install XONSH Jupyter kernel (run once)
# ----------------------------------------------------------------------
# This registers xonsh as a kernel in Jupyter / JupyterLab
python -m pip install --user xonsh[jupyter]

# Verify installation
jupyter kernelspec list | grep xonsh

# Now launch Jupyter and choose "Xonsh" as the kernel.
# Cells can mix shell and Python seamlessly.

echo "✅ Xonsh Jupyter kernel installed.
Try: 
  !ls -la
  print("Hello from xonsh!")
  files = !ls
  print(f"Found {len(files)} files")
`,g=new Date().getFullYear(),u=g-1998,f=`
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
`,v=()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:f}),e.jsxs("div",{className:a("max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8","bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100","transition-colors duration-300"),children:[e.jsxs("div",{className:"space-y-3 mb-10 animate-fadeSlideUp [animation-delay:0ms]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-mono bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-700",children:"Topic 46"}),e.jsx("span",{className:"px-3 py-1 text-xs font-mono bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full border border-amber-200 dark:border-amber-700",children:"XONSH Expert Examples"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-bold tracking-tight",children:["XONSH:"," ",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"10 Expert‑Level Scripts"})]}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl",children:"You've mastered the basics and intermediate patterns. Now we explore the true power of XONSH: extending the shell itself. Write your own xontribs, embed XONSH in Python applications, create asynchronous prompts, and even use XONSH as a Jupyter kernel. These scripts are what separate advanced users from experts."})]}),e.jsxs("section",{className:a("mb-12 p-6 rounded-xl","bg-gray-50 dark:bg-gray-800/50","border border-gray-200 dark:border-gray-700","animate-fadeSlideUp [animation-delay:100ms]"),children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🚀"})," Why go expert?"]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"leading-relaxed",children:["XONSH is not just a shell – it's a platform. At"," ",e.jsx("strong",{children:"Naihati"})," and ",e.jsx("strong",{children:"Shyamnagar"}),", senior students and IT staff have built internal tools using XONSH extensions. They've created custom completers for their domain‑ specific commands, profiled long‑running data pipelines, and even embedded XONSH inside Flask applications to give admins a web‑based shell."]}),e.jsxs("p",{className:"leading-relaxed",children:[`The ten examples on the right are the "graduation" level. They assume you are comfortable with Python and XONSH's internals. Each example is self‑contained but many are meant to be placed in`,e.jsx("code",{children:"~/.xonshrc"})," or installed as permanent extensions."]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded border-l-4 border-indigo-400",children:[e.jsx("span",{className:"font-semibold",children:"🧑‍🔬 The expert mindset"}),e.jsx("p",{className:"text-sm mt-1",children:'You no longer ask "Can XONSH do this?" – you ask "How do I teach XONSH to do this?" The event system, macro system, and AST transformers give you unlimited control.'})]})]}),e.jsx("div",{className:"flex items-center justify-center p-2 group",children:e.jsxs("svg",{width:"280",height:"160",viewBox:"0 0 280 160",className:"w-full max-w-xs","aria-label":"XONSH expert capabilities",children:[e.jsx("rect",{x:"10",y:"30",width:"80",height:"60",rx:"8",fill:"#374151",className:"dark:fill-gray-700 group-hover:fill-indigo-800/50 transition-all"}),e.jsx("text",{x:"22",y:"60",fill:"#E5E7EB",fontSize:"12",children:"xontrib"}),e.jsx("rect",{x:"190",y:"30",width:"80",height:"60",rx:"8",fill:"#374151",className:"dark:fill-gray-700 group-hover:fill-amber-800/50 transition-all"}),e.jsx("text",{x:"202",y:"60",fill:"#E5E7EB",fontSize:"12",children:"event hooks"}),e.jsx("path",{d:"M100 60 L180 60",stroke:"#6B7280",strokeWidth:"2",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"d",values:"M100 60 L180 60; M90 60 L190 60; M100 60 L180 60",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"100",y:"110",width:"80",height:"30",rx:"8",fill:"#4F46E5",className:"dark:fill-indigo-600 group-hover:fill-indigo-500 transition-all"}),e.jsx("text",{x:"110",y:"132",fill:"white",fontSize:"10",fontWeight:"bold",children:"Jupyter · Embed"})]})})]})]}),e.jsxs("section",{className:"space-y-8 mb-12",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-2 animate-fadeSlideUp [animation-delay:200ms]",children:"⚙️ XONSH internals & extensibility"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 animate-fadeSlideUp [animation-delay:250ms]",children:[e.jsx(s,{fileModule:n,title:"01. Minimal xontrib (extension)",highlightLines:[6,10]}),e.jsx(s,{fileModule:i,title:"02. Macros – lazy execution",highlightLines:[5,13]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 animate-fadeSlideUp [animation-delay:300ms]",children:[e.jsx(s,{fileModule:o,title:"03. Asynchronous prompt",highlightLines:[9,19]}),e.jsx(s,{fileModule:l,title:"04. Embed XONSH in Python",highlightLines:[5,17]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 animate-fadeSlideUp [animation-delay:350ms]",children:[e.jsx(s,{fileModule:d,title:"05. Event hooks (cd, pre/post command)",highlightLines:[5,18]}),e.jsx(s,{fileModule:c,title:"06. Custom command transformer",highlightLines:[8,15]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 animate-fadeSlideUp [animation-delay:400ms]",children:[e.jsx(s,{fileModule:m,title:"07. Command profiling",highlightLines:[5,16]}),e.jsx(s,{fileModule:h,title:"08. Custom tab completion",highlightLines:[7,19]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6 animate-fadeSlideUp [animation-delay:450ms]",children:[e.jsx(s,{fileModule:x,title:"09. XONSH parser as a library",highlightLines:[6,13]}),e.jsx(s,{fileModule:p,title:"10. Jupyter kernel integration",highlightLines:[4,10]})]}),e.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400 italic",children:["💡 Many of these examples touch the internals of XONSH. They are most useful when placed in ",e.jsx("code",{children:"~/.xonshrc"})," or installed as proper xontribs. For embedding and Jupyter, ensure you have the required Python packages installed (",e.jsx("code",{children:"xonsh[jupyter]"}),")."]})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[e.jsxs("div",{className:a("p-5 rounded-xl border","bg-white dark:bg-gray-800","border-gray-200 dark:border-gray-700","hover:shadow-lg hover:scale-[1.02] transition-all duration-300","animate-fadeSlideUp [animation-delay:500ms]"),children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"💡"}),e.jsx("h3",{className:"font-semibold text-lg",children:"Pro Tips"})]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"lazyasd"})," to delay imports in xontribs – faster shell startup."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsxs("span",{children:["Profile your ",e.jsx("code",{children:".xonshrc"})," with"," ",e.jsx("code",{children:"xonsh --timing"}),"."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsxs("span",{children:["Debug transformers with ",e.jsx("code",{children:"print"})," or logging – they receive the AST node."]})]})]})]}),e.jsxs("div",{className:a("p-5 rounded-xl border","bg-white dark:bg-gray-800","border-gray-200 dark:border-gray-700","hover:shadow-lg hover:scale-[1.02] transition-all duration-300","animate-fadeSlideUp [animation-delay:600ms]"),children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"⚠️"}),e.jsx("h3",{className:"font-semibold text-lg",children:"Common Pitfalls"})]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Modifying built‑in completers"})," – always use",e.jsx("code",{children:"add_one_completer"})," instead of directly manipulating the list."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Event handler exceptions"})," – wrap in try/except; unhandled exceptions can break the prompt."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Asynchronous prompt functions"})," must be coroutines; regular functions will block."]})]})]})]}),e.jsxs("div",{className:a("p-5 rounded-xl border","bg-white dark:bg-gray-800","border-gray-200 dark:border-gray-700","hover:shadow-lg hover:scale-[1.02] transition-all duration-300","animate-fadeSlideUp [animation-delay:700ms]"),children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"✅"}),e.jsx("h3",{className:"font-semibold text-lg",children:"Best Practices"})]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsx("span",{children:"Package reusable extensions as proper xontribs with setup.py."})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsx("span",{children:"Document event handlers with docstrings – other users will thank you."})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsx("span",{children:"Test transformers with both simple and complex command lines."})]})]})]})]}),e.jsxs("section",{className:a("mb-12 p-6 rounded-xl","bg-indigo-50 dark:bg-indigo-900/20","border border-indigo-200 dark:border-indigo-800","animate-fadeSlideUp [animation-delay:800ms]"),children:[e.jsxs("h3",{className:"text-xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📋"})," Mini Checklist – XONSH Expert"]}),e.jsx("div",{className:"grid sm:grid-cols-1 gap-3",children:["I have written and loaded a custom xontrib.","I understand how macros can delay command execution.","I can create an asynchronous prompt that doesn't block.","I have embedded XONSH inside another Python application.","I use event hooks to react to directory changes and commands.","I can write a transformer to modify commands before execution.","I have profiled command execution times with custom hooks.","I added a domain‑specific tab completer.","I used the XONSH parser to analyse shell scripts.","I have tried the XONSH Jupyter kernel."].map((t,r)=>e.jsxs("div",{className:"flex items-start gap-2 text-sm",children:[e.jsx("span",{className:"text-indigo-500 dark:text-indigo-300 mt-0.5",children:"◻️"}),e.jsx("span",{children:t})]},r))})]}),e.jsx("section",{className:a("mb-10 p-6 rounded-xl","bg-amber-50 dark:bg-amber-900/20","border border-amber-200 dark:border-amber-800","hover:shadow-md hover:bg-amber-100/50 dark:hover:bg-amber-900/30","transition-all duration-300","animate-fadeSlideUp [animation-delay:900ms]"),children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Teacher's Note"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 mb-3",children:[e.jsx("strong",{children:"Sukanta Hui"})," • ",u," years of programming & systems education (since 1998)",e.jsx("br",{}),e.jsx("span",{className:"font-mono text-xs",children:"sukantahui@codernaccotax.co.in • 📱 7003756860"})]}),e.jsxs("p",{className:"leading-relaxed",children:["At this stage, students like ",e.jsx("strong",{children:"Debangshu"})," and"," ",e.jsx("strong",{children:"Abhronila"}),` often ask: "Is this still shell scripting?" The answer is yes – it's the future of shell scripting. XONSH exposes its internals responsibly; you're not hacking, you're extending. I encourage my advanced students to publish their xontribs on GitHub. One former student from`," ",e.jsx("strong",{children:"Barrackpore"})," created a xontrib that integrates with the school's LDAP system – now used by the entire IT department. That's the power of an extensible shell."]})]})]})}),e.jsxs("div",{className:a("text-sm p-5 rounded-lg","bg-gray-100 dark:bg-gray-800/60","border border-gray-300 dark:border-gray-600","animate-fadeSlideUp [animation-delay:1000ms]"),children:[e.jsx("span",{className:"font-semibold block mb-1",children:"🔍 Think about…"}),e.jsxs("p",{children:["In Example 06, we replace the entire command transformer. What if we wanted to chain multiple transformers? How would you design a pipeline of transformers? (Hint: look at the ",e.jsx("code",{children:"CommandsCache"})," source)."]}),e.jsxs("p",{className:"mt-2",children:["Example 03 uses ",e.jsx("code",{children:"asyncio.create_subprocess_shell"}),". Why is this better than ",e.jsx("code",{children:"$(git ...)"})," for a prompt component?"]})]}),e.jsx("div",{className:"mt-12 pt-6 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 text-center",children:e.jsx("p",{children:"Congratulations! You've completed the XONSH deep‑dive (Topics 42–46). The remaining topics (47+) will revisit traditional shell scripting with best practices, mini projects, and reference scripts."})})]})]});export{v as default};
