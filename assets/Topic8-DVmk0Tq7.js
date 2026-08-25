import{b as i,j as e,bg as a}from"./vendor-react-core-Doz9nIC6.js";import{P as h}from"./PythonFileLoader-hCi5osN-.js";import{P as v}from"./PlainTextPrint-C08xhKA4.js";import{F as x}from"./FAQTemplate-CkSqDH4B.js";import{T as f}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const y=`# topic8_files/venv_internals_and_pyvenv_cfg.py\r
# Module: 002_009_modules-packages\r
# Topic: Creating and managing Virtual Environments (venv)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 1: Virtual Environment Anatomy, pyvenv.cfg & sys.prefix Mechanics\r
Demonstrates:\r
  1. What 'python -m venv .venv' generates on disk\r
  2. The role of pyvenv.cfg in redirecting standard library lookups\r
  3. How CPython differentiates base Python (sys.base_prefix) from virtualenv (sys.prefix)\r
  4. Complete directory layout across Windows vs Linux/macOS\r
"""\r
\r
import sys\r
import os\r
\r
def explain_venv_directory_layout():\r
    print("=" * 65)\r
    print("1. VIRTUAL ENVIRONMENT DIRECTORY ANATOMY")\r
    print("=" * 65)\r
    print(r"""\r
Created via: $ python -m venv .venv\r
\r
Windows Layout:\r
  .venv/\r
  |-- pyvenv.cfg                  <- Configuration pointer\r
  |-- Scripts/                    <- Binaries & Activation Scripts\r
  |   |-- python.exe\r
  |   |-- pip.exe\r
  |   |-- Activate.ps1            <- PowerShell activation script\r
  |   \\-- activate.bat            <- Command Prompt activation script\r
  |-- Lib/\r
  |   \\-- site-packages/          <- Isolated 3rd-party packages\r
  \\-- Include/\r
\r
Linux / macOS Layout:\r
  .venv/\r
  |-- pyvenv.cfg\r
  |-- bin/\r
  |   |-- python -> /usr/bin/python3\r
  |   |-- pip\r
  |   \\-- activate                <- Bash/Zsh activation script\r
  |-- lib/python3.13/site-packages/\r
  \\-- include/\r
""")\r
\r
\r
def explain_pyvenv_cfg_and_prefixes():\r
    print("=" * 65)\r
    print("2. pyvenv.cfg & CPYTHON PREFIX REDIRECTION")\r
    print("=" * 65)\r
\r
    is_in_venv = sys.prefix != sys.base_prefix\r
\r
    print("Current Runtime Isolation Status:")\r
    print(f"  * sys.base_prefix (Global Base): '{sys.base_prefix}'")\r
    print(f"  * sys.prefix      (Active Env) : '{sys.prefix}'")\r
    print(f"  * Inside Virtual Environment?  : {is_in_venv}\\n")\r
\r
    print(r"""\r
Sample pyvenv.cfg Content:\r
  home = C:\\Users\\sukan\\AppData\\Local\\Programs\\Python\\Python313\r
  include-system-site-packages = false\r
  version = 3.13.2\r
  executable = C:\\Users\\sukan\\AppData\\Local\\Programs\\Python\\Python313\\python.exe\r
  command = python -m venv .venv\r
\r
How CPython Boots:\r
  1. python.exe looks for \`pyvenv.cfg\` in its directory or parent folder.\r
  2. If found, CPython sets \`sys.prefix\` to the folder containing \`pyvenv.cfg\`.\r
  3. It points \`site-packages\` to \`.venv/Lib/site-packages\`.\r
  4. It keeps \`sys.base_prefix\` pointing to the real standard library installation!\r
""")\r
\r
\r
if __name__ == "__main__":\r
    explain_venv_directory_layout()\r
    explain_pyvenv_cfg_and_prefixes()\r
`,u=`# topic8_files/activation_scripts_and_environment_variables.py\r
# Module: 002_009_modules-packages\r
# Topic: Creating and managing Virtual Environments (venv)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 2: Activation Scripts, PATH Prepending & PowerShell ExecutionPolicy\r
Demonstrates:\r
  1. What activation actually does (prepends to $PATH and sets $VIRTUAL_ENV)\r
  2. Cross-platform activation commands (PowerShell, CMD, Bash, Zsh)\r
  3. Resolving the Windows PowerShell ExecutionPolicy security error\r
  4. Deactivating environments cleanly\r
"""\r
\r
import sys\r
import os\r
\r
def explain_path_prepending_mechanism():\r
    print("=" * 65)\r
    print("1. WHAT 'ACTIVATION' ACTUALLY DOES UNDER THE HOOD")\r
    print("=" * 65)\r
    print(r"""\r
Activation is NOT a magic lock — it is a simple shell script that:\r
  1. Modifies the OS PATH environment variable:\r
     - Prepends \`.venv/Scripts\` (or \`.venv/bin\`) to the VERY FRONT of your system $PATH.\r
     - When you type \`python\` or \`pip\`, the OS finds the virtualenv's executable first!\r
  2. Sets the environment variable:\r
     - \`VIRTUAL_ENV = "/path/to/.venv"\`\r
  3. Customizes the terminal prompt string:\r
     - Adds \`(.venv)\` in front of your command prompt.\r
\r
When you type \`deactivate\`:\r
  - Restores the original unmodified system $PATH.\r
  - Removes the \`VIRTUAL_ENV\` variable.\r
  - Restores the original terminal prompt.\r
""")\r
\r
\r
def explain_cross_platform_commands():\r
    print("=" * 65)\r
    print("2. CROSS-PLATFORM ACTIVATION CHEATSHEET")\r
    print("=" * 65)\r
    print(r"""\r
A. Windows PowerShell (Default in VS Code & Modern Windows):\r
   $ .\\.venv\\Scripts\\Activate.ps1\r
\r
   * FIXING POWERSHELL SECURITY ERROR:\r
     If you see: "cannot be loaded because running scripts is disabled on this system":\r
     Run once in PowerShell:\r
     $ Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process\r
\r
B. Windows Command Prompt (cmd.exe):\r
   > .venv\\Scripts\\activate.bat\r
\r
C. Linux / macOS (Bash / Zsh / Fish):\r
   $ source .venv/bin/activate\r
\r
D. To Exit Any Virtual Environment:\r
   $ deactivate\r
""")\r
\r
\r
if __name__ == "__main__":\r
    explain_path_prepending_mechanism()\r
    explain_cross_platform_commands()\r
`,b=`# topic8_files/virtualenv_detection_and_isolation_audit.py\r
# Module: 002_009_modules-packages\r
# Topic: Creating and managing Virtual Environments (venv)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 3: Programmatic Virtual Environment Detection & Isolation Audit\r
Demonstrates:\r
  1. Programmatically detecting whether code is running inside a virtualenv\r
  2. Inspecting sys.prefix, sys.base_prefix, and $VIRTUAL_ENV\r
  3. Verifying isolation from system-wide packages\r
"""\r
\r
import sys\r
import os\r
import site\r
\r
def audit_runtime_environment():\r
    print("=" * 65)\r
    print("1. RUNTIME VIRTUAL ENVIRONMENT DIAGNOSTIC")\r
    print("=" * 65)\r
\r
    is_in_venv = sys.prefix != sys.base_prefix\r
    virtual_env_var = os.environ.get("VIRTUAL_ENV", None)\r
\r
    print(f"CPython Executable       : '{sys.executable}'")\r
    print(f"Active sys.prefix        : '{sys.prefix}'")\r
    print(f"Base sys.base_prefix     : '{sys.base_prefix}'")\r
    print(f"VIRTUAL_ENV Env Variable : {virtual_env_var}")\r
    print(f"Is Isolated in venv?     : {is_in_venv}\\n")\r
\r
    if is_in_venv:\r
        print("[STATUS] Running in an ISOLATED Virtual Environment.")\r
    else:\r
        print("[STATUS] Running in the GLOBAL/SYSTEM Python Environment.")\r
\r
\r
def inspect_site_packages_isolation():\r
    print("\\n" + "=" * 65)\r
    print("2. SITE-PACKAGES LOCATIONS ON sys.path")\r
    print("=" * 65)\r
\r
    site_pkgs = [p for p in sys.path if "site-packages" in p]\r
    print(f"Total site-packages registered: {len(site_pkgs)}")\r
    for p in site_pkgs:\r
        print(f"  * '{p}'")\r
\r
\r
if __name__ == "__main__":\r
    audit_runtime_environment()\r
    inspect_site_packages_isolation()\r
`,g=`# topic8_files/automated_project_environment_bootstrap.py\r
# Module: 002_009_modules-packages\r
# Topic: Creating and managing Virtual Environments (venv)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 4: Automated Project Environment Initializer & Health Check Suite\r
Demonstrates:\r
  1. Automated environment verification for enterprise Python projects\r
  2. Enforcing minimum Python version requirements (Python >= 3.10)\r
  3. Generating a health report before deploying or running tests\r
"""\r
\r
import sys\r
import os\r
import datetime as dt\r
from typing import Dict, Any\r
\r
class EnvironmentBootstrapper:\r
    """Enterprise Environment Verifier & Project Guard."""\r
\r
    MINIMUM_PYTHON = (3, 10)\r
\r
    @classmethod\r
    def verify_runtime_health(cls) -> Dict[str, Any]:\r
        """Runs full health diagnostic on the current Python process."""\r
        current_version = sys.version_info[:2]\r
        version_ok = current_version >= cls.MINIMUM_PYTHON\r
        is_virtual = sys.prefix != sys.base_prefix\r
\r
        return {\r
            "timestamp": dt.datetime.now(),\r
            "python_version": f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}",\r
            "version_compatible": version_ok,\r
            "is_virtual_env": is_virtual,\r
            "executable": sys.executable,\r
            "prefix": sys.prefix,\r
            "platform": sys.platform,\r
        }\r
\r
\r
def run_bootstrap_diagnostic():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PROJECT ENVIRONMENT BOOTSTRAP DIAGNOSTIC")\r
    print("=" * 70)\r
\r
    report = EnvironmentBootstrapper.verify_runtime_health()\r
\r
    print(f"Diagnostic Date    : {report['timestamp']:%d-%b-%Y %I:%M %p}")\r
    print(f"CPython Version    : {report['python_version']} (Compatible: {report['version_compatible']})")\r
    print(f"Host Platform      : {report['platform']}")\r
    print(f"Active Executable  : {report['executable']}")\r
    print(f"Environment Prefix : {report['prefix']}")\r
    print(f"Is Isolated (venv) : {report['is_virtual_env']}")\r
    print("-" * 70)\r
\r
    if not report["version_compatible"]:\r
        print("[WARNING] Python 3.10+ is required for modern typing features!")\r
    else:\r
        print("[PASSED] Python Runtime meets enterprise requirements.")\r
\r
\r
if __name__ == "__main__":\r
    run_bootstrap_diagnostic()\r
`,w=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_009: MODULES & PACKAGES\r
           TOPIC 8: CREATING & MANAGING VIRTUAL ENVIRONMENTS (venv)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. QUICK-START VIRTUAL ENVIRONMENT LIFECYCLE\r
--------------------------------------------------------------------------------\r
  Step 1: Create Environment\r
    $ python -m venv .venv\r
\r
  Step 2: Activate Environment\r
    • Windows (PowerShell) : .\\.venv\\Scripts\\Activate.ps1\r
    • Windows (CMD)        : .venv\\Scripts\\activate.bat\r
    • macOS / Linux (Bash) : source .venv/bin/activate\r
\r
  Step 3: Install Project Packages\r
    $ python -m pip install -r requirements.txt\r
\r
  Step 4: Deactivate When Done\r
    $ deactivate\r
\r
--------------------------------------------------------------------------------\r
2. FIXING WINDOWS POWERSHELL SECURITY RESTRICTION\r
--------------------------------------------------------------------------------\r
  Error: "running scripts is disabled on this system"\r
  Solution (Run once in PowerShell):\r
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process\r
\r
--------------------------------------------------------------------------------\r
3. HOW ACTIVATION WORKS UNDER THE HOOD\r
--------------------------------------------------------------------------------\r
  • Activation simply prepends \`.venv\\Scripts\` (or \`.venv/bin\`) to your OS PATH.\r
  • When you type \`python\` or \`pip\`, the operating system invokes the virtualenv\r
    executable first before any global system Python.\r
  • Deactivation restores your original system PATH.\r
\r
================================================================================\r
        END OF STUDY NOTE • TOPIC 8: VIRTUAL ENVIRONMENTS (venv)\r
================================================================================\r
`,j=[{question:"What is a Python Virtual Environment?",shortAnswer:"A self-contained directory tree containing a specific Python interpreter and an isolated set of installed packages separate from the global system Python.",explanation:"Virtual environments allow different projects on the same machine to maintain conflicting dependency versions (e.g. Project A requires Django 4.2 while Project B requires Django 5.0).",hint:"An isolated directory tree with its own Python interpreter and site-packages.",level:"basic",codeExample:`# Create a virtual environment named '.venv':
python -m venv .venv`},{question:"How do you create a virtual environment named '.venv' using the standard library?",shortAnswer:"python -m venv .venv",explanation:"The standard 'venv' module creates the folder, copies binary executables, and writes the pyvenv.cfg configuration file.",hint:"Use python -m venv <env_name>.",level:"basic",codeExample:"python -m venv .venv"},{question:"What is the command to activate a virtual environment in Windows PowerShell vs Linux/macOS?",shortAnswer:"Windows PowerShell: .\\.venv\\Scripts\\Activate.ps1; Linux/macOS: source .venv/bin/activate",explanation:"On Windows, the activation scripts reside in 'Scripts'; on POSIX systems, they reside in 'bin'.",hint:"Windows: .venv\\Scripts\\Activate.ps1; POSIX: source .venv/bin/activate.",level:"basic",codeExample:`# Windows PowerShell:  .\\.venv\\Scripts\\Activate.ps1
# macOS / Linux Bash:  source .venv/bin/activate`},{question:"How do you resolve the Windows PowerShell error: 'running scripts is disabled on this system' when activating a venv?",shortAnswer:"Run: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process",explanation:"PowerShell by default blocks unsigned script execution; setting RemoteSigned for the current process scope allows the activation script to run safely without compromising system-wide security.",hint:"Use Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process.",level:"basic",codeExample:`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
.\\.venv\\Scripts\\Activate.ps1`},{question:"What does the activation script actually do to your operating system environment under the hood?",shortAnswer:"It prepends the virtual environment's Scripts/ or bin/ directory to the very beginning of the OS PATH environment variable and sets VIRTUAL_ENV.",explanation:"Because the venv folder is first in PATH, any subsequent 'python' or 'pip' terminal command immediately executes the virtualenv's binaries.",hint:"Prepends venv binary folder to PATH and sets VIRTUAL_ENV.",level:"moderate",codeExample:"# Under the hood: PATH = '/path/to/.venv/bin:' + PATH"},{question:"How do you exit/deactivate a virtual environment?",shortAnswer:"Type 'deactivate' in your terminal.",explanation:"The deactivate shell function restores the original PATH environment variable and removes VIRTUAL_ENV.",hint:"Type 'deactivate'.",level:"basic",codeExample:"$ deactivate"},{question:"What is the role of the pyvenv.cfg file located inside the root of a virtual environment?",shortAnswer:"It tells CPython where the base standard library installation lives (home = ...) and whether system-wide site-packages should be accessible.",explanation:"When python.exe launches, it reads pyvenv.cfg to configure sys.prefix and site-packages locations.",hint:"Configuration file that points CPython to the base installation and isolates site-packages.",level:"moderate",codeExample:`# pyvenv.cfg contents:
# home = C:\\Python313
# include-system-site-packages = false`},{question:"How can Python code programmatically detect if it is running inside an active virtual environment?",shortAnswer:"sys.prefix != sys.base_prefix (True inside venv, False in global Python).",explanation:"In base Python, sys.prefix equals sys.base_prefix; in a virtualenv, sys.prefix points to the venv directory while sys.base_prefix points to the base install.",hint:"Check sys.prefix != sys.base_prefix.",level:"moderate",codeExample:`import sys
is_venv = sys.prefix != sys.base_prefix
print('In venv:', is_venv)`},{question:"Why should you NEVER commit the virtual environment directory (.venv/) to Git / version control?",shortAnswer:"Because virtual environments contain machine-specific absolute file paths and platform-specific binaries that will fail on any other computer; commit requirements.txt instead.",explanation:"Virtual environments should always be ephemeral and recreated fresh on each target machine from requirements.txt or pyproject.toml.",hint:"They contain machine-specific absolute paths; add .venv/ to .gitignore.",level:"basic",codeExample:`# In .gitignore:
.venv/
venv/
env/`},{question:"What happens if you run a Python script with the full path to the venv binary (e.g. .venv\\Scripts\\python.exe script.py) without activating first?",shortAnswer:"It executes perfectly inside the virtual environment without needing manual shell activation.",explanation:"CPython discovers pyvenv.cfg next to its executable and configures the virtual environment automatically.",hint:"Directly invoking .venv/bin/python runs in the venv without manual activation.",level:"complex",codeExample:`# Cron / Task Scheduler automation:
/opt/app/.venv/bin/python /opt/app/main.py`},{question:"What is the difference between the standard library 'venv' module and the third-party 'virtualenv' tool?",shortAnswer:"'venv' is built into Python standard library (since 3.3); 'virtualenv' is a third-party tool that offers speed improvements and supports older Python versions.",explanation:"For modern Python 3 development, the standard 'venv' module is universally available and recommended.",hint:"venv is built-in; virtualenv is a third-party package.",level:"basic",codeExample:`# Standard built-in:
python -m venv .venv`},{question:"How does Conda differ from standard Python venv?",shortAnswer:"Conda is a cross-language package and environment manager that manages C libraries, CUDA drivers, and Python versions; venv only manages Python packages on top of an existing Python installation.",explanation:"Conda is popular in scientific computing and AI; venv is the lightweight standard for pure Python development.",hint:"Conda manages binaries and C libraries across languages; venv manages Python packages.",level:"moderate",codeExample:`# Conda: conda create -n myenv python=3.11
# venv:  python -m venv .venv`},{question:"What does the '--system-site-packages' flag do when creating a virtual environment?",shortAnswer:"Allows the virtual environment to access packages installed in the global base Python site-packages while still allowing new packages to be installed locally in the venv.",explanation:"Sets include-system-site-packages = true in pyvenv.cfg.",hint:"Gives the venv access to global system packages.",level:"moderate",codeExample:"python -m venv --system-site-packages .venv"},{question:"How do you delete / completely remove a virtual environment?",shortAnswer:"Simply delete the virtual environment folder (.venv) from your file system.",explanation:"Because a virtual environment is completely self-contained within its folder, deleting the folder leaves zero residue on the system.",hint:"Delete the .venv folder directly.",level:"basic",codeExample:`# Windows PowerShell: Remove-Item -Recurse -Force .venv
# Linux / macOS:      rm -rf .venv`},{question:"What is the environment variable that stores the path of the currently activated virtual environment?",shortAnswer:"VIRTUAL_ENV",explanation:"Activation scripts export VIRTUAL_ENV so CLI tools, IDEs, and prompt formatters know the active environment path.",hint:"The VIRTUAL_ENV environment variable.",level:"basic",codeExample:`import os
print(os.environ.get('VIRTUAL_ENV'))`},{question:"How does VS Code automatically detect and select a virtual environment in a workspace?",shortAnswer:"VS Code scans workspace folders for common venv names like .venv, venv, or env and sets the Python Interpreter path automatically.",explanation:"You can also manually select it via 'Python: Select Interpreter' in the Command Palette (Ctrl+Shift+P).",hint:"VS Code looks for .venv folders in workspace root.",level:"basic",codeExample:'# .vscode/settings.json:\n# { "python.defaultInterpreterPath": "${workspaceFolder}/.venv/Scripts/python.exe" }'},{question:"Can a virtual environment use a different Python version than the one that created it?",shortAnswer:"No. A virtual environment is bound to the exact Python version that invoked 'python -m venv'.",explanation:"To create a Python 3.11 venv when multiple versions exist, run 'py -3.11 -m venv .venv'.",hint:"Bound to the Python interpreter version that created it.",level:"moderate",codeExample:`# Windows py launcher with specific version:
py -3.11 -m venv .venv_py311`},{question:"What does the '--clear' flag do when running 'python -m venv'?",shortAnswer:"Deletes the contents of an existing virtual environment directory before creating a fresh new environment in its place.",explanation:"Useful for wiping and re-initializing an existing environment without deleting the folder manually.",hint:"Clears existing directory contents before creation.",level:"moderate",codeExample:"python -m venv --clear .venv"},{question:"What does 'python -m venv --upgrade' do?",shortAnswer:"Upgrades an existing virtual environment directory to use the active Python interpreter version in place.",explanation:"Useful after upgrading your system Python version to update existing venv pointers.",hint:"Upgrades venv to current Python version.",level:"complex",codeExample:"python -m venv --upgrade .venv"},{question:"Where are packages installed when you run 'pip install' inside an activated virtual environment?",shortAnswer:"Inside '.venv/Lib/site-packages' (Windows) or '.venv/lib/python3.x/site-packages' (Linux/macOS).",explanation:"Completely isolated from the system Python's site-packages.",hint:"Inside the venv's local site-packages directory.",level:"basic",codeExample:"# Windows: .venv\\Lib\\site-packages\\<pkg>"},{question:"What happens if you activate a virtual environment and then move / rename the project folder?",shortAnswer:"The virtual environment will break because the activation scripts and pyvenv.cfg contain hardcoded absolute paths.",explanation:"If you move the folder, delete .venv and recreate it with 'python -m venv .venv && pip install -r requirements.txt'.",hint:"Hardcoded absolute paths break; delete and recreate the venv.",level:"complex",codeExample:"# Delete and recreate venv if project folder is moved"},{question:"How do you verify which pip and python executables are being used in terminal?",shortAnswer:"Windows: 'where python'; Linux/macOS: 'which python'",explanation:"The active virtualenv's executable path should appear at the very top of the output.",hint:"Use 'where python' on Windows or 'which python' on Linux.",level:"basic",codeExample:`# Windows PowerShell: where.exe python
# macOS / Linux:      which python`},{question:"What is Poetry / Pipenv compared to basic venv?",shortAnswer:"Modern higher-level dependency management tools that automatically manage virtual environments, deterministic lockfiles (poetry.lock), and pyproject.toml dependencies.",explanation:"They build on top of venv primitives to provide unified dependency resolution and packaging workflows.",hint:"Higher-level tools with automatic lockfiles and dependency management.",level:"moderate",codeExample:"# poetry run python app.py"},{question:"Can multiple virtual environments share the same cached wheel downloads?",shortAnswer:"Yes. Pip's user-level wheel cache is global across all virtual environments on the machine.",explanation:"Installing a package into a second virtualenv reuses the cached wheel from the first virtualenv in 0.1s.",hint:"Yes, pip wheel cache is shared globally across environments.",level:"basic",codeExample:"# Shared wheel cache speeds up repeated installs"},{question:"What is the definitive production workflow for managing Python project dependencies?",shortAnswer:"1. Create venv ($ python -m venv .venv); 2. Activate ($ source .venv/bin/activate); 3. Install dependencies ($ pip install -r requirements.txt); 4. Pin exports ($ pip freeze > requirements.txt).",explanation:"Guarantees reproducible local development and zero deployment surprises across production servers.",hint:"Create -> Activate -> Install -> Freeze.",level:"basic",codeExample:`# 1. python -m venv .venv
# 2. .\\.venv\\Scripts\\Activate.ps1
# 3. python -m pip install -r requirements.txt`}];function k(){const o=i.useRef([]),[r,l]=i.useState("folderlayout"),[c,p]=i.useState("windows_ps");i.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return o.current.forEach(s=>{s&&t.observe(s)}),()=>t.disconnect()},[]);const n=t=>{t&&!o.current.includes(t)&&o.current.push(t)},m=c==="windows_ps"?[{step:"1. Create Virtual Environment",cmd:"python -m venv .venv",desc:"Creates isolated directory tree with pyvenv.cfg"},{step:"2. Bypass Script Policy (Run Once)",cmd:"Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process",desc:"Fixes 'running scripts is disabled' error in PowerShell"},{step:"3. Activate Environment",cmd:".\\.venv\\Scripts\\Activate.ps1",desc:"Prepends .venv\\Scripts to OS $PATH and sets ($env:VIRTUAL_ENV)"},{step:"4. Install Dependencies",cmd:"python -m pip install -r requirements.txt",desc:"Installs project packages into .venv\\Lib\\site-packages"},{step:"5. Deactivate",cmd:"deactivate",desc:"Restores original system $PATH and terminal prompt"}]:c==="windows_cmd"?[{step:"1. Create Virtual Environment",cmd:"python -m venv .venv",desc:"Creates isolated directory tree with pyvenv.cfg"},{step:"2. Activate Environment",cmd:".venv\\Scripts\\activate.bat",desc:"Activates environment in Command Prompt"},{step:"3. Install Dependencies",cmd:"python -m pip install -r requirements.txt",desc:"Installs project packages into .venv\\Lib\\site-packages"},{step:"4. Deactivate",cmd:"deactivate",desc:"Restores original system environment"}]:[{step:"1. Create Virtual Environment",cmd:"python3 -m venv .venv",desc:"Creates isolated directory tree with bin/ and lib/"},{step:"2. Activate Environment",cmd:"source .venv/bin/activate",desc:"Sources activation script into current Bash/Zsh shell"},{step:"3. Install Dependencies",cmd:"python3 -m pip install -r requirements.txt",desc:"Installs packages into .venv/lib/python3.x/site-packages"},{step:"4. Deactivate",cmd:"deactivate",desc:"Restores original system $PATH"}];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowTeal {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(20, 184, 166, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(20, 184, 166, 0.8)); }
        }
        .animate-glow-teal {
          animation: pulseGlowTeal 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 2 • Module 002_009"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 8"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Modules, Packages & Python Standard Library"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Creating & Managing Virtual Environments (",e.jsx("code",{className:"text-teal-400 font-mono",children:"venv"}),")"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master complete dependency isolation: understanding ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pyvenv.cfg"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"sys.prefix"})," redirection, the PATH prepending activation mechanics, cross-platform activation scripts, resolving PowerShell security policies, and programmatic environment auditing."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Dependency Isolation & Conflict Prevention"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚙️ pyvenv.cfg & sys.prefix Redirection"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💻 Cross-Platform Activation (PowerShell, CMD, Bash)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔑 PowerShell ExecutionPolicy Bypass"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧱"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Isolation Imperative: Why Virtual Environments are Mandatory"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"In production Python development, every application has unique dependency requirements. Installing all packages globally into the base operating system Python creates catastrophic version conflicts:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg shadow-rose-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"❌"})," Global Python Pollution (Dependency Hell)"]}),e.jsxs("div",{className:"text-xs text-slate-300 space-y-1.5 leading-relaxed",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Project A (Legacy Client):"})," Requires ",e.jsx("code",{className:"text-rose-300",children:"Django 3.2"})]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Project B (New App):"})," Requires ",e.jsx("code",{className:"text-rose-300",children:"Django 5.0"})]}),e.jsx("div",{className:"text-rose-400 pt-1",children:"Overwriting Django breaks Project A! Operating system utilities can also crash."})]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"✓"})," Virtual Environment Sandbox Isolation"]}),e.jsxs("div",{className:"text-xs text-slate-300 space-y-1.5 leading-relaxed",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Project A (.venv_legacy):"})," Has its own isolated ",e.jsx("code",{className:"text-emerald-300",children:"Django 3.2"})]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Project B (.venv_modern):"})," Has its own isolated ",e.jsx("code",{className:"text-emerald-300",children:"Django 5.0"})]}),e.jsx("div",{className:"text-emerald-400 pt-1",children:"Both projects coexist cleanly on the same computer without conflict!"})]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Golden Rule: Never Commit `.venv/` to Git"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Virtual environments contain machine-specific absolute file paths and platform-specific binaries. ",e.jsx("strong",{children:"ALWAYS"})," add ",e.jsx("code",{className:"text-teal-300 font-mono",children:".venv/"})," to your ",e.jsx("code",{className:"text-teal-300 font-mono",children:".gitignore"})," file! Commit ",e.jsx("code",{className:"text-teal-300 font-mono",children:"requirements.txt"})," instead."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Virtual Environment Architecture"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("folderlayout"),className:a("px-3 py-1.5 rounded-lg transition-all",r==="folderlayout"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Folder Anatomy & pyvenv.cfg"}),e.jsx("button",{onClick:()=>l("pathprepending"),className:a("px-3 py-1.5 rounded-lg transition-all",r==="pathprepending"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"PATH Prepending Engine"}),e.jsx("button",{onClick:()=>l("isolation"),className:a("px-3 py-1.5 rounded-lg transition-all",r==="isolation"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Sandboxed site-packages"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining directory plumbing, system variable mutations, and interpreter prefix redirects:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="folderlayout"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"VIRTUAL ENVIRONMENT DIRECTORY PLUMBING & pyvenv.cfg"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#0f172a",stroke:"#38bdf8"}),e.jsx("text",{x:"20",y:"30",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"Windows Structure: .venv/"}),e.jsx("text",{x:"20",y:"60",fill:"#2dd4bf",fontSize:"11 font-mono",children:"├── 📄 pyvenv.cfg (Pointer to CPython)"}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"11 font-mono",children:"├── 📁 Scripts/"}),e.jsx("text",{x:"40",y:"110",fill:"#ecfdf5",fontSize:"11 font-mono",children:"│   ├── python.exe & pip.exe"}),e.jsx("text",{x:"40",y:"135",fill:"#ecfdf5",fontSize:"11 font-mono",children:"│   ├── Activate.ps1 (PowerShell)"}),e.jsx("text",{x:"40",y:"160",fill:"#ecfdf5",fontSize:"11 font-mono",children:"│   └── activate.bat (CMD)"}),e.jsx("text",{x:"20",y:"185",fill:"#cbd5e1",fontSize:"11 font-mono",children:"└── 📁 Lib/"}),e.jsx("text",{x:"40",y:"210",fill:"#a7f3d0",fontSize:"11 font-mono",children:"    └── site-packages/ (Isolated 3rd-party libs)"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"Inside pyvenv.cfg (The Redirection Engine)"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"11 font-mono",children:"home = C:\\Python313"}),e.jsx("text",{x:"20",y:"90",fill:"#ecfdf5",fontSize:"11 font-mono",children:"include-system-site-packages = false"}),e.jsx("text",{x:"20",y:"115",fill:"#ecfdf5",fontSize:"11 font-mono",children:"version = 3.13.2"}),e.jsx("rect",{x:"20",y:"145",width:"350",height:"75",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"35",y:"170",fill:"#34d399",fontSize:"11 font-bold",children:"CPython Boot Process:"}),e.jsx("text",{x:"35",y:"190",fill:"#ecfdf5",fontSize:"10",children:"• Reads pyvenv.cfg → sets sys.prefix to .venv/"}),e.jsx("text",{x:"35",y:"208",fill:"#ecfdf5",fontSize:"10",children:"• Loads standard library from home directory"})]})]}):r==="pathprepending"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"HOW ACTIVATION WORKS: OS PATH PREPENDING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"100",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"25",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"BEFORE ACTIVATION (System Default PATH):"}),e.jsx("text",{x:"20",y:"55",fill:"#cbd5e1",fontSize:"11 font-mono",children:"PATH = C:\\Windows\\system32; C:\\Program Files\\Git; C:\\Python313"}),e.jsx("text",{x:"20",y:"80",fill:"#fca5a5",fontSize:"11",children:"Typing 'python' invokes the global system interpreter (C:\\Python313\\python.exe)"})]}),e.jsxs("g",{transform:"translate(30, 170)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"130",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"25",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"AFTER ACTIVATION ($ .\\.venv\\Scripts\\Activate.ps1):"}),e.jsx("text",{x:"20",y:"55",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"PATH = E:\\my_app\\.venv\\Scripts; C:\\Windows\\system32; C:\\Python313"}),e.jsx("text",{x:"20",y:"85",fill:"#ecfdf5",fontSize:"11",children:"✓ Virtualenv's Scripts folder is prepended to the VERY FRONT of PATH!"}),e.jsx("text",{x:"20",y:"105",fill:"#ecfdf5",fontSize:"11",children:"✓ Typing 'python' or 'pip' instantly targets the isolated .venv binaries."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"SYS.PREFIX VS SYS.BASE_PREFIX RUNTIME STATE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"Global Python Environment"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"11 font-mono",children:"sys.base_prefix = 'C:\\Python313'"}),e.jsx("text",{x:"20",y:"90",fill:"#cbd5e1",fontSize:"11 font-mono",children:"sys.prefix      = 'C:\\Python313'"}),e.jsxs("text",{x:"20",y:"125",fill:"#cbd5e1",fontSize:"11",children:["sys.prefix == sys.base_prefix → ",e.jsx("tspan",{fill:"#f43f5e",fontWeight:"bold",children:"TRUE"})]}),e.jsxs("text",{x:"20",y:"150",fill:"#cbd5e1",fontSize:"11",children:["VIRTUAL_ENV variable = ",e.jsx("tspan",{fill:"#f43f5e",fontWeight:"bold",children:"None"})]}),e.jsx("rect",{x:"20",y:"175",width:"350",height:"45",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"200",fill:"#f43f5e",fontSize:"11",children:"All pip installs pollute global system folder"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Virtual Environment (.venv)"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"11 font-mono",children:"sys.base_prefix = 'C:\\Python313'"}),e.jsx("text",{x:"20",y:"90",fill:"#34d399",fontSize:"11 font-mono",children:"sys.prefix      = 'E:\\app\\.venv'"}),e.jsxs("text",{x:"20",y:"125",fill:"#cbd5e1",fontSize:"11",children:["sys.prefix != sys.base_prefix → ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"TRUE"})]}),e.jsxs("text",{x:"20",y:"150",fill:"#cbd5e1",fontSize:"11",children:["VIRTUAL_ENV variable = ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"'E:\\app\\.venv'"})]}),e.jsx("rect",{x:"20",y:"175",width:"350",height:"45",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"200",fill:"#34d399",fontSize:"11 font-bold",children:"100% Isolated Sandbox: Zero Conflicts"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Virtual Environment OS Command Wizard"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select your operating system and terminal shell to view the step-by-step commands for creating, activating, and managing virtual environments:"}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:[{id:"windows_ps",label:"Windows (PowerShell - VS Code Default)"},{id:"windows_cmd",label:"Windows (Command Prompt cmd.exe)"},{id:"posix_bash",label:"macOS / Linux (Bash / Zsh)"}].map(t=>e.jsx("button",{onClick:()=>p(t.id),className:a("py-2.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-bold border transition-all",c===t.id?"bg-teal-950 border-teal-500 text-teal-300 shadow-md shadow-teal-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:t.label},t.id))}),e.jsx("div",{className:"space-y-3 bg-slate-950 p-6 rounded-xl border border-slate-800",children:m.map((t,s)=>e.jsxs("div",{className:"p-3.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-teal-400 font-mono",children:t.step}),e.jsx("span",{className:"text-[11px] text-slate-400",children:t.desc})]}),e.jsxs("code",{className:"text-xs font-mono text-emerald-300 block bg-slate-950 p-2 rounded border border-slate-800/80",children:["$ ",t.cmd]})]},s))})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Virtual Environment Tools Comparison Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Tool"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Inclusion Status"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Lockfile Support"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"venv"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Standard Library (Built-in)"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"Manual (requirements.txt)"}),e.jsx("td",{className:"py-3 px-4",children:"Standard Python projects, Docker containers, CI/CD"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Poetry"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"Third-Party (pip install poetry)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Automatic (poetry.lock)"}),e.jsx("td",{className:"py-3 px-4",children:"Modern application packaging & deterministic builds"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Conda"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"Standalone Distribution (Anaconda)"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"environment.yml"}),e.jsx("td",{className:"py-3 px-4",children:"Data science, machine learning, non-Python C/CUDA libs"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Pipenv"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"Third-Party (pip install pipenv)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Automatic (Pipfile.lock)"}),e.jsx("td",{className:"py-3 px-4",children:"Application development with Pipfile workflows"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating venv directory anatomy, pyvenv.cfg mechanics, activation scripts, and automated runtime bootstrap diagnostics:"}),e.jsx(h,{files:[{filename:"venv_internals_and_pyvenv_cfg.py",code:y,description:"Virtual environment directory layout, pyvenv.cfg parameters, and CPython sys.prefix vs sys.base_prefix mechanics."},{filename:"activation_scripts_and_environment_variables.py",code:u,description:"What activation does under the hood (PATH prepending), cross-platform commands, and PowerShell ExecutionPolicy bypass."},{filename:"virtualenv_detection_and_isolation_audit.py",code:b,description:"Programmatically detecting active virtual environments and inspecting registered site-packages on sys.path."},{filename:"automated_project_environment_bootstrap.py",code:g,description:"Automated environment initialization diagnostic verifying Python version compatibility and isolation status."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Committing `.venv/` to Git Repository"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Pushing ",e.jsx("code",{className:"text-rose-300 font-mono",children:".venv/"})," to GitHub uploads machine-specific absolute file paths and 500MB+ of binary files that will fail on any other developer's machine."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Add ",e.jsx("code",{className:"text-emerald-300",children:".venv/"})," to your project's ",e.jsx("code",{className:"text-emerald-300",children:".gitignore"})," file!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Moving / Renaming the Project Folder"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If you rename or move your project directory, the virtual environment breaks because ",e.jsx("code",{className:"text-amber-300 font-mono",children:"pyvenv.cfg"})," and scripts contain hardcoded absolute paths."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Delete ",e.jsx("code",{className:"text-emerald-300",children:".venv"})," and recreate it with ",e.jsx("code",{className:"text-emerald-300",children:"python -m venv .venv"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: PowerShell Script Execution Block"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["PowerShell on Windows blocks scripts by default: ",e.jsx("code",{className:"text-purple-300 font-mono",children:"Activate.ps1 cannot be loaded because running scripts is disabled"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Run ",e.jsx("code",{className:"text-emerald-300",children:"Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Forgetting to Activate Before Installing"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Running ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"pip install requests"})," without activating installs the package into your global base Python instead of your project venv!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Ensure your prompt shows ",e.jsx("code",{className:"text-emerald-300",children:"(.venv)"})," before running pip."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering virtual environment creation, pyvenv.cfg internals, activation mechanics, PowerShell security fixes, and lifecycle best practices:"}),e.jsx(x,{questions:j})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with cross-platform activation commands, PowerShell fix recipes, and venv lifecycle guides:"}),e.jsx("div",{className:"mb-10",children:e.jsx(v,{content:w,filename:"python_topic8_virtual_environments_venv_notes.txt",title:"Print Topic 8 Study Notes"})}),e.jsx(f,{})]})]})]})}export{k as default};
