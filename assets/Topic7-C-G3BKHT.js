import{b as a,j as e,bg as p}from"./vendor-react-core-Doz9nIC6.js";import{P as y}from"./PythonFileLoader-hCi5osN-.js";import{P as g}from"./PlainTextPrint-C08xhKA4.js";import{F as b}from"./FAQTemplate-CkSqDH4B.js";import{T as w}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const v=`# topic7_files/pip_command_lifecycle_and_pypi.py\r
# Module: 002_009_modules-packages\r
# Topic: Third-party packages and pip package manager\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 1: Pip Command Lifecycle, PyPI Ecosystem & Interpreter Binding\r
Demonstrates:\r
  1. What is PyPI (Python Package Index) and how pip downloads wheels\r
  2. Essential pip CLI operations (install, upgrade, uninstall, list, show)\r
  3. Why 'python -m pip install' is vastly superior to bare 'pip install'\r
  4. Programmatically inspecting installed packages using importlib.metadata\r
"""\r
\r
import sys\r
import importlib.metadata\r
from typing import List, Dict\r
\r
def explain_pip_and_pypi_fundamentals():\r
    print("=" * 65)\r
    print("1. THE PIP & PyPI ECOSYSTEM")\r
    print("=" * 65)\r
    print(r"""\r
What is PyPI (Python Package Index)?\r
  - PyPI (pypi.org) is the official public repository storing over 500,000+\r
    open-source Python packages (e.g. requests, pandas, fastapi, numpy).\r
\r
What is pip?\r
  - \`pip\` is the standard package installer for Python, included with CPython 3.4+.\r
\r
Essential Pip Commands Cheatsheet:\r
  ----------------------------------------------------------------------\r
  Command                               Purpose\r
  ----------------------------------------------------------------------\r
  python -m pip install <package>       Installs latest compatible release\r
  python -m pip install <package>==2.0  Installs exact pinned version\r
  python -m pip install --upgrade <pkg> Upgrades package to latest release\r
  python -m pip uninstall <package> -y  Removes package cleanly\r
  python -m pip list                    Lists all installed packages\r
  python -m pip show <package>          Shows metadata, license, & location\r
  python -m pip freeze                  Dumps pinned dependencies format\r
""")\r
\r
\r
def explain_python_m_pip_advantage():\r
    print("=" * 65)\r
    print("2. WHY 'python -m pip' PREVENTS ENVIRONMENT DISASTERS")\r
    print("=" * 65)\r
    print(f"Current Python Executable: '{sys.executable}'\\n")\r
    print("""\r
The Problem with bare \`pip install\`:\r
  - If you have multiple Python versions installed (e.g. Python 3.11 and 3.13),\r
    typing \`pip install requests\` might invoke Python 3.11's pip!\r
  - When you then run \`python my_app.py\` (which runs Python 3.13),\r
    you crash with \`ModuleNotFoundError: No module named 'requests'\`!\r
\r
The Golden Solution (\`python -m pip\`):\r
  - Typing \`python -m pip install requests\` guarantees that pip installs\r
    into the EXACT Python environment currently mapped to \`python\`!\r
""")\r
\r
\r
def inspect_installed_distributions():\r
    print("=" * 65)\r
    print("3. PROGRAMMATIC INSPECTION OF INSTALLED PACKAGES")\r
    print("=" * 65)\r
\r
    # Retrieve top 5 installed packages using standard library importlib.metadata\r
    dists = list(importlib.metadata.distributions())[:5]\r
    print(f"Total Installed Distributions Sample (First {len(dists)}):")\r
    for d in dists:\r
        print(f"  * {d.metadata['Name']:<20} -> Version {d.version}")\r
\r
\r
if __name__ == "__main__":\r
    explain_pip_and_pypi_fundamentals()\r
    explain_python_m_pip_advantage()\r
    inspect_installed_distributions()\r
`,j=`# topic7_files/wheel_vs_sdist_and_cache.py\r
# Module: 002_009_modules-packages\r
# Topic: Third-party packages and pip package manager\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 2: Wheels (.whl) vs Source Distributions (.tar.gz) & Pip Cache\r
Demonstrates:\r
  1. Source Distributions (sdist) vs Pre-compiled Built Distributions (Wheels)\r
  2. Anatomy of a Wheel Filename (Python tag, ABI tag, Platform tag)\r
  3. Pure Python Wheels vs Native C-Extension Binary Wheels\r
  4. The Pip Download Cache mechanism for offline installations\r
"""\r
\r
def explain_wheels_vs_sdist():\r
    print("=" * 65)\r
    print("1. WHEEL (.whl) VS SOURCE DISTRIBUTION (.tar.gz)")\r
    print("=" * 65)\r
    print(r"""\r
Package Distribution Types on PyPI:\r
\r
A. Source Distribution (.tar.gz / .zip):\r
   - Contains raw source code and setup scripts.\r
   - If the package contains C/C++ code (like NumPy, Cryptography, or Psycopg2),\r
     the consumer's machine MUST have a C compiler (Visual C++ / GCC) installed.\r
   - Slow installation (often minutes of local compilation).\r
\r
B. Built Distribution / Wheel (.whl) (MODERN STANDARD):\r
   - A standardized ZIP archive containing pre-compiled binaries and ready-to-copy files.\r
   - Requires NO compiler on the consumer's machine.\r
   - Installs in milliseconds via direct extraction into site-packages.\r
""")\r
\r
\r
def dissect_wheel_filenames():\r
    print("=" * 65)\r
    print("2. ANATOMY OF A WHEEL FILENAME (PEP 427)")\r
    print("=" * 65)\r
    print(r"""\r
Example 1: Pure Python Package (Cross-Platform)\r
  requests-2.31.0-py3-none-any.whl\r
  |-- Distribution Name : requests\r
  |-- Version           : 2.31.0\r
  |-- Python Tag        : py3 (Works on any Python 3.x)\r
  |-- ABI Tag           : none (No C-ABI dependency)\r
  \\-- Platform Tag      : any (Runs on Windows, Linux, macOS)\r
\r
Example 2: Pre-compiled C Extension (Platform-Specific)\r
  numpy-2.1.0-cp313-cp313-win_amd64.whl\r
  |-- Distribution Name : numpy\r
  |-- Version           : 2.1.0\r
  |-- Python Tag        : cp313 (CPython 3.13)\r
  |-- ABI Tag           : cp313 (Compiled for CPython 3.13 C-API)\r
  \\-- Platform Tag      : win_amd64 (Windows 64-bit only!)\r
""")\r
\r
\r
def explain_pip_cache():\r
    print("=" * 65)\r
    print("3. PIP WHEEL CACHE")\r
    print("=" * 65)\r
    print("""\r
When you run \`pip install\`, pip automatically caches the downloaded .whl file.\r
If you install the same package again into a new virtual environment:\r
  - Pip skips downloading over the internet!\r
  - It copies the cached wheel from local disk in 0.1 seconds.\r
\r
Useful Pip Cache Commands:\r
  - \`python -m pip cache dir\`   -> Shows cache folder location on disk\r
  - \`python -m pip cache list\`  -> Lists all cached wheel files\r
  - \`python -m pip cache purge\` -> Frees disk space by deleting cached wheels\r
""")\r
\r
\r
if __name__ == "__main__":\r
    explain_wheels_vs_sdist()\r
    dissect_wheel_filenames()\r
    explain_pip_cache()\r
`,P=`# topic7_files/popular_ecosystem_packages_demo.py\r
# Module: 002_009_modules-packages\r
# Topic: Third-party packages and pip package manager\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 3: The Python Third-Party Ecosystem Across Core Domains\r
Demonstrates:\r
  1. Overview of essential community packages (requests, pandas, pydantic, pytest)\r
  2. Graceful ImportError handling when optional packages are not installed\r
  3. Selecting the right third-party tool for production workflows\r
"""\r
\r
def explain_ecosystem_domains():\r
    print("=" * 65)\r
    print("1. ESSENTIAL THIRD-PARTY ECOSYSTEM PACKAGES BY DOMAIN")\r
    print("=" * 65)\r
\r
    domains = [\r
        ("HTTP & APIs", "requests, httpx, fastapi", "Making REST API requests & building microservices"),\r
        ("Data & Analytics", "numpy, pandas, polars", "Matrix calculations, DataFrames & statistical analysis"),\r
        ("Data Validation", "pydantic, marshmallow", "Strict runtime data parsing, schemas, and typing"),\r
        ("Testing & QA", "pytest, coverage, flake8", "Unit testing frameworks, code coverage, and linting"),\r
        ("Terminal UX", "rich, colorama, typer", "Beautiful terminal styling, progress bars, & CLI menus"),\r
        ("Database ORMs", "sqlalchemy, psycopg, pymongo", "Relational SQL querying and document databases"),\r
    ]\r
\r
    for category, packages, purpose in domains:\r
        print(f"Domain   : {category}")\r
        print(f"Packages : {packages}")\r
        print(f"Purpose  : {purpose}\\n")\r
\r
\r
def demonstrate_safe_import_fallback():\r
    print("=" * 65)\r
    print("2. GRACEFUL OPTIONAL PACKAGE IMPORT PATTERN")\r
    print("=" * 65)\r
\r
    # Standard industry pattern for optional dependencies:\r
    try:\r
        import requests\r
        print(f"  [SUCCESS] 'requests' is installed (Version {requests.__version__})")\r
    except ImportError:\r
        print("  [FALLBACK] 'requests' is not installed in current environment.")\r
        print("             Using standard library urllib.request as fallback.")\r
\r
\r
if __name__ == "__main__":\r
    explain_ecosystem_domains()\r
    demonstrate_safe_import_fallback()\r
`,k=`# topic7_files/automated_package_manager_and_auditor.py\r
# Module: 002_009_modules-packages\r
# Topic: Third-party packages and pip package manager\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 4: Enterprise Package Inspector & Dependency Auditor\r
Demonstrates:\r
  1. Programmatically inspecting installed package metadata via importlib.metadata\r
  2. Generating audit reports of installed libraries and version specifications\r
  3. Verifying essential dependencies for Coder & AccoTax educational backend\r
"""\r
\r
import sys\r
import importlib.metadata\r
from typing import List, Dict, Any\r
\r
class DependencyAuditor:\r
    """Enterprise Package Inspector and Environment Auditor."""\r
\r
    @classmethod\r
    def audit_installed_packages(cls) -> List[Dict[str, Any]]:\r
        """Audits all installed distributions in the active environment."""\r
        results = []\r
        for dist in importlib.metadata.distributions():\r
            name = dist.metadata["Name"]\r
            version = dist.version\r
            summary = dist.metadata.get("Summary", "No summary provided")\r
            results.append({\r
                "name": name,\r
                "version": version,\r
                "summary": summary[:45] + "..." if len(summary) > 45 else summary\r
            })\r
        # Sort alphabetically by package name\r
        return sorted(results, key=lambda x: x["name"].lower())\r
\r
\r
def run_package_audit_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ENTERPRISE DEPENDENCY AUDITOR")\r
    print("=" * 70)\r
    print(f"Active CPython Executable: {sys.executable}\\n")\r
\r
    packages = DependencyAuditor.audit_installed_packages()\r
    print(f"Total Installed Distributions Detected: {len(packages)}")\r
    print("-" * 70)\r
    print(f"{'Package Name':<25} {'Version':<12} {'Summary'}")\r
    print("-" * 70)\r
\r
    # Display first 8 packages\r
    for pkg in packages[:8]:\r
        print(f"{pkg['name']:<25} {pkg['version']:<12} {pkg['summary']}")\r
    \r
    if len(packages) > 8:\r
        print(f"... and {len(packages) - 8} more packages installed.")\r
\r
    print("\\n[PASSED] Environment Dependency Inspection Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_package_audit_demo()\r
`,N=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_009: MODULES & PACKAGES\r
              TOPIC 7: THIRD-PARTY PACKAGES & THE PIP PACKAGE MANAGER\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ESSENTIAL PIP COMMANDS CHEATSHEET\r
--------------------------------------------------------------------------------\r
  Action                  Command\r
  ------------------------------------------------------------------------------\r
  Install Package         python -m pip install <package_name>\r
  Install Exact Version   python -m pip install <package_name>==2.31.0\r
  Upgrade Package         python -m pip install --upgrade <package_name>\r
  Uninstall Package       python -m pip uninstall <package_name> -y\r
  List Installed          python -m pip list\r
  Show Package Details    python -m pip show <package_name>\r
  Export Dependencies     python -m pip freeze > requirements.txt\r
  Inspect Download Cache  python -m pip cache list\r
\r
--------------------------------------------------------------------------------\r
2. THE GOLDEN RULE: ALWAYS USE 'python -m pip'\r
--------------------------------------------------------------------------------\r
  • Problem:\r
      Bare \`pip install requests\` might target Python 3.11, while your terminal\r
      \`python\` command points to Python 3.13!\r
  • Solution:\r
      Using \`python -m pip install requests\` guarantees that packages are\r
      installed into the EXACT Python interpreter you are currently executing.\r
\r
--------------------------------------------------------------------------------\r
3. WHEELS (.whl) VS SOURCE DISTRIBUTIONS (.tar.gz)\r
--------------------------------------------------------------------------------\r
  • Wheel (.whl):\r
      Pre-compiled binary ZIP archive. Installs in milliseconds without a C compiler.\r
  • Source Distribution (sdist):\r
      Raw source code. Requires a local C/C++ compiler for native extensions.\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 7: THIRD-PARTY PACKAGES & PIP\r
================================================================================\r
`,_=[{question:"What is PyPI (Python Package Index)?",shortAnswer:"The official public repository for third-party open-source Python packages, hosting over 500,000+ libraries.",explanation:"When you run 'pip install requests', pip connects to PyPI (pypi.org), resolves dependencies, and downloads the package.",hint:"The official online software repository for Python packages (pypi.org).",level:"basic",codeExample:"# pip downloads packages directly from PyPI (pypi.org)"},{question:"Why should developers use 'python -m pip install' instead of bare 'pip install'?",shortAnswer:"Because 'python -m pip' explicitly binds pip to the active Python interpreter executing the command, eliminating multi-version installation mix-ups.",explanation:"If multiple Python versions exist on a system, bare 'pip' might point to Python 3.10 while 'python' runs Python 3.13, causing ModuleNotFoundError.",hint:"Guarantees installation into the exact Python environment being executed.",level:"basic",codeExample:`# Best practice:
python -m pip install requests`},{question:"What is the difference between a Wheel (.whl) and a Source Distribution (.tar.gz / sdist)?",shortAnswer:"A Wheel is a pre-compiled, ready-to-extract binary ZIP archive requiring no compiler; an sdist contains uncompiled source code requiring a local C compiler for native extensions.",explanation:"Wheels install in milliseconds and eliminate compilation errors on end-user machines.",hint:"Wheel = pre-compiled binary; sdist = uncompiled source code.",level:"moderate",codeExample:`# Wheel:  numpy-2.1.0-cp313-cp313-win_amd64.whl (Instant)
# sdist:  numpy-2.1.0.tar.gz (Requires C compiler)`},{question:"How do you install an exact pinned version of a package using pip?",shortAnswer:"python -m pip install package_name==1.2.3",explanation:"The double equals sign (==) pins the installation to that specific release.",hint:"Use == for exact version pinning.",level:"basic",codeExample:"python -m pip install requests==2.31.0"},{question:"What does the compatible release operator (~=) mean in pip version specifiers?",shortAnswer:"'~= 2.2' means '>= 2.2, == 2.*' (allows minor updates and bug fixes but forbids breaking major version jumps).",explanation:"For example, 'requests ~= 2.31.0' accepts version 2.31.1, 2.31.2, but rejects 2.32.0 or 3.0.0.",hint:"Allows compatible patch/minor updates while preventing breaking major changes.",level:"moderate",codeExample:"python -m pip install 'requests~=2.31.0'"},{question:"How do you upgrade an already installed package to its latest release?",shortAnswer:"python -m pip install --upgrade package_name (or -U)",explanation:"Checks PyPI for newer versions and replaces the existing package.",hint:"Use --upgrade or -U flag.",level:"basic",codeExample:"python -m pip install --upgrade pandas"},{question:"How do you uninstall a package cleanly without prompting for interactive confirmation?",shortAnswer:"python -m pip uninstall package_name -y",explanation:"The -y flag automatically confirms uninstallation.",hint:"Use -y flag to skip confirmation prompt.",level:"basic",codeExample:"python -m pip uninstall colorama -y"},{question:"What does 'python -m pip list' do?",shortAnswer:"Displays a tabular list of all third-party and built-in distributions installed in the current environment along with their version numbers.",explanation:"Provides a quick overview of what packages are available in the active environment.",hint:"Lists all installed packages and their versions.",level:"basic",codeExample:"python -m pip list"},{question:"What does 'python -m pip show package_name' display?",shortAnswer:"Detailed metadata including package version, summary, author, license, location on disk, and dependencies (Requires / Required-by).",explanation:"Useful for checking where a package is installed and what other packages depend on it.",hint:"Displays detailed metadata, license, location, and dependencies.",level:"basic",codeExample:"python -m pip show requests"},{question:"Where are third-party packages installed on disk by default?",shortAnswer:"Inside the 'site-packages' directory within the Python installation or virtual environment.",explanation:"Python includes site-packages in sys.path automatically at startup.",hint:"Inside the 'site-packages' folder.",level:"basic",codeExample:"# Path: <python_dir>/Lib/site-packages"},{question:"What is the pip download cache and how does it speed up installations?",shortAnswer:"Pip saves downloaded .whl files to a local cache directory so repeated installations (e.g. across new virtualenvs) install locally in 0.1s without internet downloads.",explanation:"You can inspect cached wheels with 'python -m pip cache list' and clear them with 'pip cache purge'.",hint:"Caches downloaded wheels locally for instant reinstallation.",level:"moderate",codeExample:`python -m pip cache list
python -m pip cache purge`},{question:"How do you programmatically check the version of an installed package using Python code?",shortAnswer:"importlib.metadata.version('package_name')",explanation:"Standard library function in Python 3.8+ that reads package metadata without requiring you to import the package itself.",hint:"Use importlib.metadata.version('name').",level:"moderate",codeExample:`import importlib.metadata
print(importlib.metadata.version('pip'))`},{question:"What is a Pure Python Wheel vs a Platform-Specific Wheel?",shortAnswer:"Pure Python wheels (py3-none-any.whl) contain only Python code and run on any OS; Platform wheels (e.g. win_amd64.whl) contain pre-compiled C/C++ binaries for a specific OS and CPU architecture.",explanation:"Platform wheels must match the consumer's exact OS, CPython ABI, and bitness (64-bit).",hint:"Pure Python works on any OS; Platform wheels are pre-compiled for specific OS/CPUs.",level:"moderate",codeExample:`# Pure:     requests-2.31.0-py3-none-any.whl
# Platform: numpy-2.1.0-cp313-cp313-win_amd64.whl`},{question:"How do you install multiple packages listed inside a text file using pip?",shortAnswer:"python -m pip install -r requirements.txt",explanation:"The -r flag reads package names and version pins line-by-line from the specified file.",hint:"Use -r requirements.txt.",level:"basic",codeExample:"python -m pip install -r requirements.txt"},{question:"How do you export all currently installed packages in requirements.txt format?",shortAnswer:"python -m pip freeze > requirements.txt",explanation:"'pip freeze' outputs all non-standard installed packages with their exact pinned versions (package==1.0.0).",hint:"Use python -m pip freeze.",level:"basic",codeExample:"python -m pip freeze > requirements.txt"},{question:"What is the defensive optional import pattern in Python?",shortAnswer:"Wrapping third-party imports in a try...except ImportError block and providing standard library fallbacks if missing.",explanation:"Ensures libraries don't crash when optional speed-up or formatting packages are not installed.",hint:"Use try...except ImportError with standard library fallback.",level:"moderate",codeExample:`try:
    import orjson as json  # Ultra-fast C library
except ImportError:
    import json  # Standard library fallback`},{question:"What is the difference between 'pip list' and 'pip freeze'?",shortAnswer:"'pip list' formats packages into a human-readable table; 'pip freeze' outputs exact pinned dependency strings (pkg==1.0.0) intended for requirements.txt files.",explanation:"'pip freeze' also excludes pip itself and setuptools by default to maintain clean requirement files.",hint:"list is for human reading; freeze is for machine requirement files.",level:"basic",codeExample:`# list:   requests     2.31.0
# freeze: requests==2.31.0`},{question:"How do you install a package directly from a GitHub repository using pip?",shortAnswer:"python -m pip install git+https://github.com/user/repo.git",explanation:"pip clones the git repository, builds the package, and installs it into site-packages.",hint:"Use git+https:// URL syntax.",level:"moderate",codeExample:"python -m pip install git+https://github.com/psf/requests.git"},{question:"What happens if two installed packages require conflicting versions of the same dependency?",shortAnswer:"pip's modern backtracking resolver attempts to find a mutually compatible version; if none exists, pip raises a ResolutionImpossible error.",explanation:"Pip's dependency resolver prevents broken dependency states.",hint:"Raises ResolutionImpossible error if no mutually compatible version exists.",level:"complex",codeExample:"# Pip backtracking resolver detects conflicting dependencies"},{question:"What is the purpose of the '--no-deps' flag in pip?",shortAnswer:"Installs only the specified package while skipping the automatic installation of its dependencies.",explanation:"Useful in specialized container builds or debugging dependency trees.",hint:"Skips installing package dependencies.",level:"moderate",codeExample:"python -m pip install --no-deps my_package"},{question:"How do you install a local Wheel file (.whl) directly without downloading from PyPI?",shortAnswer:"python -m pip install path/to/package_name.whl",explanation:"pip directly extracts the local wheel archive into site-packages.",hint:"Provide the direct file path to the .whl file.",level:"basic",codeExample:"python -m pip install ./dist/my_lib-1.0.0-py3-none-any.whl"},{question:"How do you check for known security vulnerabilities in installed Python packages?",shortAnswer:"Use tools like 'pip-audit' or 'safety' (e.g. 'pip-audit' scans site-packages against the PyPI Vulnerability Database).",explanation:"Automated vulnerability scanning is an essential step in modern CI/CD pipelines.",hint:"Use pip-audit or safety to scan for CVE vulnerabilities.",level:"moderate",codeExample:`python -m pip install pip-audit
pip-audit`},{question:"Can pip install packages in editable mode for active development?",shortAnswer:"Yes: python -m pip install -e . (or --editable .)",explanation:"Creates an editable link directly to the source code folder so code edits take effect immediately without re-installing.",hint:"Use -e . for editable development mode.",level:"moderate",codeExample:"python -m pip install -e ."},{question:"What is the danger of running 'pip install --user' inside a virtual environment?",shortAnswer:"It installs packages into the global user home folder instead of the active virtual environment, polluting global state.",explanation:"Inside virtual environments, never pass --user; let pip install directly into the virtual environment's site-packages.",hint:"Installs globally to user home instead of active virtualenv.",level:"complex",codeExample:"# Avoid --user inside virtualenvs"},{question:"Why should developers always use Virtual Environments instead of installing packages into the global Python installation?",shortAnswer:"To isolate project dependencies, prevent version conflicts between projects, avoid breaking operating system tools, and ensure reproducible deployments.",explanation:"Virtual environments create isolated sandbox environments for each project.",hint:"Prevents version conflicts and insulates projects from global package pollution.",level:"basic",codeExample:"# Always use virtual environments: python -m venv .venv"}];function z(){const l=a.useRef([]),[i,o]=a.useState("pipflow"),[d,h]=a.useState("install_pinned"),[s,x]=a.useState("requests"),[c,u]=a.useState("==2.31.0");a.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(m=>{m.isIntersecting&&m.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return l.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const n=t=>{t&&!l.current.includes(t)&&l.current.push(t)},f=()=>{switch(d){case"install":return`python -m pip install ${s}`;case"install_pinned":return`python -m pip install ${s}${c}`;case"upgrade":return`python -m pip install --upgrade ${s}`;case"uninstall":return`python -m pip uninstall ${s} -y`;case"list":return"python -m pip list";case"show":return`python -m pip show ${s}`;case"freeze":return"python -m pip freeze > requirements.txt";default:return`python -m pip install ${s}`}};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 2 • Module 002_009"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 7"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Modules, Packages & Python Standard Library"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Third-Party Packages & the ",e.jsx("code",{className:"text-teal-400 font-mono",children:"pip"})," Package Manager"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the open-source Python ecosystem: PyPI package index, the full ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pip"})," command lifecycle, the ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"python -m pip"})," interpreter binding rule, Wheels (",e.jsx("code",{className:"text-emerald-300 font-mono",children:".whl"}),") vs source distributions, and programmatic package auditing."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌐 PyPI Ecosystem (500k+ Packages)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚙️ python -m pip Interpreter Safety"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 Pre-Compiled Wheels (.whl)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔍 importlib.metadata Package Auditing"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📦"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["1. The PyPI Repository & ",e.jsx("code",{className:"text-teal-400 font-mono",children:"pip"})," Lifecycle"]})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["The ",e.jsx("strong",{children:"Python Package Index (PyPI)"})," is the official community repository hosting over 500,000+ open-source Python packages. The ",e.jsx("code",{className:"text-teal-400 font-mono",children:"pip"})," utility is Python's standard package installer that resolves, downloads, and unpacks these distributions into your environment's ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"site-packages"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"1️⃣"})," PyPI Registry"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Global repository at ",e.jsx("code",{className:"text-teal-300",children:"pypi.org"})," hosting libraries across web, data science, AI, and testing."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"2️⃣"})," Pip Resolver & Wheels"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Downloads pre-compiled ",e.jsx("code",{className:"text-cyan-300",children:".whl"})," archives that install in milliseconds without C compilers."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"3️⃣"})," site-packages Directory"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Installs modules into ",e.jsx("code",{className:"text-purple-300",children:"site-packages"})," which is automatically on Python's ",e.jsx("code",{className:"text-purple-300",children:"sys.path"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Golden Command: Always Use `python -m pip`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Typing bare ",e.jsx("code",{className:"text-rose-400 font-mono",children:"pip install"})," can target a different Python version installed on your operating system. Running ",e.jsx("code",{className:"text-teal-300 font-mono",children:"python -m pip install"})," guarantees packages are installed into the exact Python interpreter you are currently executing."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Pip Installation Flow & Wheel Architecture"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>o("pipflow"),className:p("px-3 py-1.5 rounded-lg transition-all",i==="pipflow"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Pip Installation Flow"}),e.jsx("button",{onClick:()=>o("wheelbuild"),className:p("px-3 py-1.5 rounded-lg transition-all",i==="wheelbuild"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Wheel vs Source Dist"}),e.jsx("button",{onClick:()=>o("interpreter"),className:p("px-3 py-1.5 rounded-lg transition-all",i==="interpreter"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"python -m pip Safety"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining dependency resolution, wheel extraction, and interpreter binding:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="pipflow"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"PIP RESOLUTION & INSTALLATION PIPELINE"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"180",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"28",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. Command Input"}),e.jsx("text",{x:"15",y:"60",fill:"#f8fafc",fontSize:"10 font-mono",children:"pip install requests"}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",fontSize:"10",children:"• Queries PyPI API"}),e.jsx("text",{x:"15",y:"110",fill:"#cbd5e1",fontSize:"10",children:"• Checks local cache"}),e.jsx("rect",{x:"210",y:"0",width:"180",height:"180",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"225",y:"28",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"2. Dependency Resolver"}),e.jsx("text",{x:"225",y:"60",fill:"#f8fafc",fontSize:"10",children:"• Backtracking algorithm"}),e.jsx("text",{x:"225",y:"85",fill:"#cbd5e1",fontSize:"10",children:"• Resolves urllib3"}),e.jsx("text",{x:"225",y:"105",fill:"#cbd5e1",fontSize:"10",children:"• Resolves certifi"}),e.jsx("text",{x:"225",y:"125",fill:"#cbd5e1",fontSize:"10",children:"• Resolves idna"}),e.jsx("rect",{x:"420",y:"0",width:"180",height:"180",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"435",y:"28",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"3. Wheel Download"}),e.jsx("text",{x:"435",y:"60",fill:"#f8fafc",fontSize:"10",children:"• Downloads .whl ZIP"}),e.jsx("text",{x:"435",y:"85",fill:"#cbd5e1",fontSize:"10",children:"• Verifies SHA-256"}),e.jsx("text",{x:"435",y:"105",fill:"#cbd5e1",fontSize:"10",children:"• Caches locally"}),e.jsx("rect",{x:"630",y:"0",width:"180",height:"180",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"645",y:"28",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"4. Extraction"}),e.jsx("text",{x:"645",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono",children:"Unzips into:"}),e.jsx("text",{x:"645",y:"85",fill:"#ecfdf5",fontSize:"10 font-bold",children:"site-packages/"}),e.jsx("text",{x:"645",y:"110",fill:"#34d399",fontSize:"10",children:"✓ Ready to import!"})]}),e.jsxs("g",{transform:"translate(30, 260)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"50",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsxs("text",{x:"20",y:"30",fill:"#cbd5e1",fontSize:"12",children:["Result: ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"import requests"})," executes in microseconds directly from site-packages!"]})]})]}):i==="wheelbuild"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"WHEEL (.whl) VS SOURCE DISTRIBUTION (.tar.gz)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"✓ Built Distribution: Wheel (.whl)"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"12 font-mono",children:"numpy-2.1.0-cp313-win_amd64.whl"}),e.jsx("text",{x:"20",y:"95",fill:"#ecfdf5",fontSize:"11",children:"• Pre-compiled C/C++ binary ZIP archive"}),e.jsx("text",{x:"20",y:"120",fill:"#ecfdf5",fontSize:"11",children:"• ZERO compiler required on user machine"}),e.jsx("text",{x:"20",y:"145",fill:"#ecfdf5",fontSize:"11",children:"• Installs in 0.2 seconds!"}),e.jsx("rect",{x:"20",y:"175",width:"350",height:"45",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"200",fill:"#34d399",fontSize:"11 font-bold",children:"Industry Standard: Fast, Reliable, Clean"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"20",y:"30",fill:"#fde68a",fontSize:"13",fontWeight:"bold",children:"⚠️ Source Distribution: sdist (.tar.gz)"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"12 font-mono",children:"numpy-2.1.0.tar.gz"}),e.jsx("text",{x:"20",y:"95",fill:"#cbd5e1",fontSize:"11",children:"• Raw uncompiled source code"}),e.jsx("text",{x:"20",y:"120",fill:"#fca5a5",fontSize:"11",children:"• Requires Visual C++ / GCC installed"}),e.jsx("text",{x:"20",y:"145",fill:"#fca5a5",fontSize:"11",children:"• Can take 10+ minutes to compile locally"}),e.jsx("rect",{x:"20",y:"175",width:"350",height:"45",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"200",fill:"#f59e0b",fontSize:"11",children:"Used only when pre-compiled wheels are unavailable"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"INTERPRETER BINDING: python -m pip vs bare pip"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:"❌ Bare 'pip install' (Ambiguous)"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"11 font-mono",children:"$ pip install requests"}),e.jsx("rect",{x:"20",y:"80",width:"350",height:"65",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"100",fill:"#ffe4e6",fontSize:"10",children:"May invoke Python 3.10 pip on your system PATH,"}),e.jsx("text",{x:"30",y:"120",fill:"#ffe4e6",fontSize:"10",children:"installing into Python 3.10 site-packages!"}),e.jsx("text",{x:"20",y:"165",fill:"#fca5a5",fontSize:"11 font-mono",children:"$ python app.py (Runs Python 3.13)"}),e.jsx("text",{x:"20",y:"190",fill:"#f43f5e",fontSize:"11 font-bold",children:"CRASH: ModuleNotFoundError: No module named 'requests'!"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"✓ 'python -m pip install' (Guaranteed)"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"11 font-mono",children:"$ python -m pip install requests"}),e.jsx("rect",{x:"20",y:"80",width:"350",height:"65",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"100",fill:"#ecfdf5",fontSize:"10",children:"Explicitly binds to the ACTIVE Python interpreter,"}),e.jsx("text",{x:"30",y:"120",fill:"#34d399",fontSize:"10 font-bold",children:"installing directly into Python 3.13 site-packages!"}),e.jsx("text",{x:"20",y:"165",fill:"#ecfdf5",fontSize:"11 font-mono",children:"$ python app.py (Runs Python 3.13)"}),e.jsx("text",{x:"20",y:"190",fill:"#34d399",fontSize:"11 font-bold",children:"SUCCESS: requests imported perfectly with 0 issues!"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Pip Command Generator & Package Explorer"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select an action, target package, and version constraint to generate production-ready Pip terminal commands:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold",children:"1. Pip Operation"}),e.jsxs("select",{value:d,onChange:t=>h(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-teal-300 font-mono text-sm",children:[e.jsx("option",{value:"install",children:"Install Latest Release"}),e.jsx("option",{value:"install_pinned",children:"Install Exact Pinned (==)"}),e.jsx("option",{value:"upgrade",children:"Upgrade Package (--upgrade)"}),e.jsx("option",{value:"uninstall",children:"Uninstall Cleanly (-y)"}),e.jsx("option",{value:"show",children:"Show Metadata (pip show)"}),e.jsx("option",{value:"list",children:"List All Packages (pip list)"}),e.jsx("option",{value:"freeze",children:"Export (pip freeze)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold",children:"2. Target Package"}),e.jsxs("select",{value:s,onChange:t=>x(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-cyan-300 font-mono text-sm",children:[e.jsx("option",{value:"requests",children:"requests (HTTP Library)"}),e.jsx("option",{value:"pandas",children:"pandas (DataFrames)"}),e.jsx("option",{value:"pydantic",children:"pydantic (Data Validation)"}),e.jsx("option",{value:"fastapi",children:"fastapi (Web Framework)"}),e.jsx("option",{value:"pytest",children:"pytest (Testing Suite)"}),e.jsx("option",{value:"rich",children:"rich (Terminal Styling)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold",children:"3. Version Specifier"}),e.jsxs("select",{value:c,onChange:t=>u(t.target.value),disabled:d!=="install_pinned",className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-purple-300 font-mono text-sm disabled:opacity-40",children:[e.jsx("option",{value:"==2.31.0",children:"==2.31.0 (Exact Pin)"}),e.jsx("option",{value:">=2.0.0",children:">=2.0.0 (Minimum Version)"}),e.jsx("option",{value:"~=2.31.0",children:"~=2.31.0 (Compatible Patch)"}),e.jsx("option",{value:"<=3.0.0",children:"<=3.0.0 (Maximum Limit)"})]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block mb-2 font-bold",children:"Generated Terminal Command"}),e.jsx("div",{className:"flex items-center justify-between bg-slate-900 p-4 rounded-lg border border-slate-800 font-mono text-sm text-emerald-300 overflow-x-auto",children:e.jsxs("code",{children:["$ ",f()]})})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Pip Operations Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Operation"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Command Syntax"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Flag Options"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Production Best Practice"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Install"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"python -m pip install pkg"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"--upgrade, --no-deps"}),e.jsxs("td",{className:"py-3 px-4",children:["Pin versions with ",e.jsx("code",{className:"text-teal-300",children:"=="})," in production"]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"Uninstall"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"python -m pip uninstall pkg"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"-y (auto confirm)"}),e.jsxs("td",{className:"py-3 px-4",children:["Use ",e.jsx("code",{className:"text-emerald-300",children:"-y"})," in CI/CD automated scripts"]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Inspect"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"python -m pip show pkg"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"-f (list files)"}),e.jsx("td",{className:"py-3 px-4",children:"Check license and dependency tree info"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Freeze"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"python -m pip freeze > req.txt"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"--all"}),e.jsx("td",{className:"py-3 px-4",children:"Generate requirements.txt for reproducible builds"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Cache"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"python -m pip cache purge"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"list, dir"}),e.jsx("td",{className:"py-3 px-4",children:"Clear cached wheels to free local SSD space"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating pip commands, wheel distributions, popular third-party domains, and automated dependency auditing:"}),e.jsx(y,{files:[{filename:"pip_command_lifecycle_and_pypi.py",code:v,description:"The pip ecosystem, PyPI repositories, python -m pip advantage, and programmatic distribution inspection."},{filename:"wheel_vs_sdist_and_cache.py",code:j,description:"Pre-compiled wheels (.whl) vs source distributions (.tar.gz), wheel filename tags, and pip cache management."},{filename:"popular_ecosystem_packages_demo.py",code:P,description:"Essential community libraries across domains (requests, pandas, pydantic) and defensive optional import fallbacks."},{filename:"automated_package_manager_and_auditor.py",code:k,description:"Enterprise dependency inspector and auditor reading metadata via standard library importlib.metadata."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Multi-Python Version Mixups"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Typing bare ",e.jsx("code",{className:"text-rose-300 font-mono",children:"pip install requests"})," can install into Python 3.10, causing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ModuleNotFoundError"})," when running with Python 3.13!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"python -m pip install requests"}),"!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Missing C Compiler for sdist Packages"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Installing raw source distributions containing C extensions crashes with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"error: Microsoft Visual C++ 14.0 is required"})," if no wheel exists."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Install pre-compiled wheels or install Visual C++ Build Tools."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Using `--user` Inside Virtual Environments"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Passing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"--user"})," inside a virtualenv installs packages into your global home folder, bypassing the sandbox."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Never use ",e.jsx("code",{className:"text-emerald-300",children:"--user"})," inside an active virtualenv."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Installing Directly into Global Python"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Installing all dependencies into your base Python installation creates version conflicts between projects and corrupts OS tools."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always isolate projects inside dedicated virtual environments (",e.jsx("code",{className:"text-emerald-300",children:"venv"}),")."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering pip operations, PyPI resolution, wheel distributions, version pinning, and metadata auditing:"}),e.jsx(b,{questions:_})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with pip command cheatsheets, wheel tags, and package inspection recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(g,{content:N,filename:"python_topic7_third_party_packages_and_pip_notes.txt",title:"Print Topic 7 Study Notes"})}),e.jsx(w,{})]})]})]})}export{z as default};
