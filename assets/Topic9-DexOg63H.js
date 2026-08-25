import{b as r,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as j}from"./PythonFileLoader-hCi5osN-.js";import{P as N}from"./PlainTextPrint-C08xhKA4.js";import{F as w}from"./FAQTemplate-CkSqDH4B.js";import{T as k}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const q=`# topic9_files/requirements_generation_and_pinning.py\r
# Module: 002_009_modules-packages\r
# Topic: requirements.txt generation and dependency management\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 1: requirements.txt Anatomy, Version Specifiers & Environment Markers\r
Demonstrates:\r
  1. How 'pip freeze > requirements.txt' captures pinned dependencies\r
  2. The 5 standard version specifier operators (==, >=, <=, ~=, !=)\r
  3. Environment markers for platform-specific dependencies (e.g. sys_platform == 'win32')\r
  4. Installing dependencies cleanly via 'python -m pip install -r requirements.txt'\r
"""\r
\r
def explain_requirements_syntax():\r
    print("=" * 65)\r
    print("1. ANATOMY & SYNTAX OF requirements.txt")\r
    print("=" * 65)\r
    print(r"""\r
Standard requirements.txt Structure:\r
\r
# 1. Exact Version Pinning (Best for Production Deployments):\r
requests==2.31.0\r
fastapi==0.110.0\r
\r
# 2. Minimum Compatible Version:\r
pandas>=2.1.0\r
\r
# 3. Compatible Release / Semantic Versioning (~=):\r
# (Allows 1.4.1, 1.4.2 but blocks breaking 2.0.0)\r
pydantic~=2.6.0\r
\r
# 4. Environment Markers (Platform-Specific):\r
# (Installs 'colorama' only when running on Windows)\r
colorama>=0.4.6; sys_platform == 'win32'\r
uvloop>=0.19.0; sys_platform != 'win32'\r
\r
# 5. Direct Git Repository Reference:\r
# my-plugin @ git+https://github.com/accotax/plugin.git@v1.2.0\r
""")\r
\r
\r
def explain_generation_commands():\r
    print("=" * 65)\r
    print("2. ESSENTIAL DEPENDENCY MANAGEMENT COMMANDS")\r
    print("=" * 65)\r
    print(r"""\r
A. Export Active Virtual Environment Dependencies:\r
   $ python -m pip freeze > requirements.txt\r
\r
B. Install All Dependencies on a New Server / Machine:\r
   $ python -m pip install -r requirements.txt\r
\r
C. Verify All Installed Dependencies Match Without Missing Packages:\r
   $ python -m pip check\r
""")\r
\r
\r
if __name__ == "__main__":\r
    explain_requirements_syntax()\r
    explain_generation_commands()\r
`,_=`# topic9_files/layered_requirements_architecture.py\r
# Module: 002_009_modules-packages\r
# Topic: requirements.txt generation and dependency management\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 2: Layered Enterprise Requirements Architecture (base / dev / prod)\r
Demonstrates:\r
  1. Splitting dependencies into distinct modular tiers\r
  2. The '-r' recursive include directive\r
  3. Preventing development tools (pytest, black) from polluting production servers\r
"""\r
\r
def explain_layered_requirements():\r
    print("=" * 65)\r
    print("1. LAYERED REQUIREMENTS ARCHITECTURE (THE '-r' DIRECTIVE)")\r
    print("=" * 65)\r
    print(r"""\r
Directory Structure:\r
  my_enterprise_app/\r
  |-- requirements/\r
  |   |-- base.txt       <- Core application dependencies\r
  |   |-- dev.txt        <- Local testing, linting & formatting tools\r
  |   \\-- prod.txt       <- Production WSGI/ASGI servers & APM monitoring\r
  \\-- requirements.txt   <- Points to requirements/prod.txt or base.txt\r
\r
File 1: \`requirements/base.txt\`\r
  fastapi==0.110.0\r
  pydantic==2.6.4\r
  requests==2.31.0\r
  sqlalchemy==2.0.28\r
\r
File 2: \`requirements/dev.txt\` (Local Developers & CI Testing)\r
  -r base.txt            # Includes everything from base.txt!\r
  pytest==8.0.2\r
  black==24.2.0\r
  flake8==7.0.0\r
  mypy==1.8.0\r
\r
File 3: \`requirements/prod.txt\` (Production Docker Containers)\r
  -r base.txt            # Includes everything from base.txt!\r
  gunicorn==21.2.0\r
  uvicorn[standard]==0.27.1\r
  sentry-sdk==1.40.6\r
""")\r
\r
\r
def explain_installation_workflows():\r
    print("=" * 65)\r
    print("2. TARGETED INSTALLATION WORKFLOWS")\r
    print("=" * 65)\r
    print(r"""\r
Local Development Machine:\r
  $ python -m pip install -r requirements/dev.txt\r
  (Installs FastAPI, Pydantic, Requests + Pytest, Black, Mypy)\r
\r
Production Server / Dockerfile:\r
  $ python -m pip install --no-cache-dir -r requirements/prod.txt\r
  (Installs ONLY FastAPI, Pydantic, Requests + Gunicorn & Uvicorn; Zero dev bloat!)\r
""")\r
\r
\r
if __name__ == "__main__":\r
    explain_layered_requirements()\r
    explain_installation_workflows()\r
`,E=`# topic9_files/pip_freeze_vs_pip_reqs_and_lockfiles.py\r
# Module: 002_009_modules-packages\r
# Topic: requirements.txt generation and dependency management\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 3: pip freeze vs pipreqs vs pip-tools Lockfiles & PEP 621\r
Demonstrates:\r
  1. The hidden drawbacks of naive 'pip freeze' (transitive noise, global contamination)\r
  2. 'pipreqs': Automated requirements generation by scanning project source imports\r
  3. 'pip-tools' (pip-compile): High-level requirements.in -> Deterministic lockfile\r
  4. Modern pyproject.toml standard (PEP 621)\r
"""\r
\r
def explain_freeze_limitations():\r
    print("=" * 65)\r
    print("1. WHY NAIVE 'pip freeze' CAN BE DANGEROUS")\r
    print("=" * 65)\r
    print(r"""\r
Scenario: You only installed \`fastapi\` and \`pandas\`.\r
When you run \`pip freeze\`, you get 45 lines of output:\r
  annotated-types==0.6.0\r
  anyio==4.3.0\r
  fastapi==0.110.0\r
  idna==3.6\r
  numpy==1.26.4\r
  pandas==2.2.1\r
  pydantic==2.6.4\r
  pydantic-core==2.16.3\r
  python-dateutil==2.8.2\r
  pytz==2024.1\r
  sniffio==1.3.1\r
  starlette==0.36.3\r
  typing-extensions==4.10.0\r
  tzdata==2024.1\r
  ... and 30 more!\r
\r
Problems with this:\r
  1. Loss of Intent: It is impossible to tell which packages are your DIRECT dependencies\r
     and which ones are just sub-dependencies (transitive dependencies).\r
  2. Upgrading Nightmare: Upgrading \`fastapi\` requires manually unpinning 20 sub-dependencies.\r
""")\r
\r
\r
def explain_modern_tooling():\r
    print("=" * 65)\r
    print("2. MODERN DEPENDENCY TOOLING (pip-tools & pipreqs)")\r
    print("=" * 65)\r
    print(r"""\r
Tool 1: \`pip-tools\` (The Professional Standard for Lockfiles):\r
  1. You write your direct requirements in \`requirements.in\`:\r
     fastapi>=0.110.0\r
     pandas>=2.0.0\r
  2. You run: \`pip-compile requirements.in\`\r
  3. pip-tools generates a pinned, annotated \`requirements.txt\` documenting\r
     WHY every sub-dependency was installed!\r
\r
Tool 2: \`pipreqs\` (Source Scanner):\r
  - Scans only the \`import\` statements inside your project's .py files.\r
  - Generates a requirements.txt with ZERO extraneous packages from your environment!\r
  - Run: $ pipreqs ./\r
""")\r
\r
\r
if __name__ == "__main__":\r
    explain_freeze_limitations()\r
    explain_modern_tooling()\r
`,A=`# topic9_files/dependency_validator_and_license_audit.py\r
# Module: 002_009_modules-packages\r
# Topic: requirements.txt generation and dependency management\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 4: Enterprise requirements.txt Parser, Validator & Compliance Suite\r
Demonstrates:\r
  1. Parsing and validating requirements.txt lines programmatically\r
  2. Matching pinned version specifiers (==, >=, <=) against installed packages\r
  3. Generating a clean dependency audit report for production deployments\r
"""\r
\r
import sys\r
import importlib.metadata\r
import re\r
from typing import List, Dict, Any, Tuple\r
\r
sample_requirements_content = """\r
# Coder & AccoTax Core Educational Platform Dependencies\r
requests>=2.28.0\r
pip>=22.0.0\r
pytest>=7.0.0\r
colorama>=0.4.0; sys_platform == 'win32'\r
"""\r
\r
class RequirementsAuditor:\r
    """Parses and audits requirement specifiers against the running environment."""\r
\r
    @classmethod\r
    def parse_requirement_line(cls, line: str) -> Tuple[str, str, str]:\r
        """Extracts package name, operator, and version constraint from a line."""\r
        clean = line.strip()\r
        if not clean or clean.startswith("#") or clean.startswith("-r"):\r
            return None\r
\r
        # Remove environment markers for parsing\r
        marker_split = clean.split(";")\r
        spec = marker_split[0].strip()\r
\r
        # Match package name and operator\r
        match = re.match(r"^([a-zA-Z0-9_\\-\\.]+)\\s*([=><~^!]+)\\s*([0-9a-zA-Z\\.\\-]+)", spec)\r
        if match:\r
            return match.group(1), match.group(2), match.group(3)\r
        return clean, "*", "any"\r
\r
    @classmethod\r
    def audit_requirements_text(cls, req_text: str) -> List[Dict[str, Any]]:\r
        """Audits requirement entries against installed distributions."""\r
        results = []\r
        for line in req_text.strip().splitlines():\r
            parsed = cls.parse_requirement_line(line)\r
            if not parsed:\r
                continue\r
\r
            pkg_name, operator, target_ver = parsed\r
            \r
            # Check if installed\r
            try:\r
                installed_ver = importlib.metadata.version(pkg_name)\r
                status = "INSTALLED"\r
            except importlib.metadata.PackageNotFoundError:\r
                installed_ver = "NOT FOUND"\r
                status = "MISSING"\r
\r
            results.append({\r
                "package": pkg_name,\r
                "required_spec": f"{operator} {target_ver}",\r
                "installed_version": installed_ver,\r
                "status": status\r
            })\r
        return results\r
\r
\r
def run_requirements_audit_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - REQUIREMENTS COMPLIANCE AUDITOR")\r
    print("=" * 70)\r
    print(f"Active CPython Executable: {sys.executable}\\n")\r
\r
    audit_results = RequirementsAuditor.audit_requirements_text(sample_requirements_content)\r
    \r
    print(f"{'Package Name':<20} {'Required Spec':<18} {'Installed Version':<18} {'Status'}")\r
    print("-" * 70)\r
    for res in audit_results:\r
        status_marker = "[OK]" if res['status'] == "INSTALLED" else "[FAIL]"\r
        print(f"{res['package']:<20} {res['required_spec']:<18} {res['installed_version']:<18} {status_marker} {res['status']}")\r
\r
    print("-" * 70)\r
    print("[PASSED] Requirements Audit Complete.")\r
\r
\r
if __name__ == "__main__":\r
    run_requirements_audit_demo()\r
`,S=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_009: MODULES & PACKAGES\r
           TOPIC 9: requirements.txt GENERATION & DEPENDENCY MANAGEMENT\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. VERSION SPECIFIERS QUICK REFERENCE\r
--------------------------------------------------------------------------------\r
  Operator        Meaning                         Example\r
  ------------------------------------------------------------------------------\r
  ==              Exact Pinned Version            requests==2.31.0\r
  >=              Minimum Allowed Version         pandas>=2.1.0\r
  <=              Maximum Allowed Version         urllib3<=2.0.0\r
  ~=              Compatible Release (SemVer)     fastapi~=0.110.0 (Allows 0.110.1)\r
  !=              Excluded Buggy Version          pydantic!=2.5.0\r
\r
--------------------------------------------------------------------------------\r
2. ENVIRONMENT MARKERS (PLATFORM BRANCHING)\r
--------------------------------------------------------------------------------\r
  • Windows Only:\r
      colorama>=0.4.6; sys_platform == 'win32'\r
  • Linux/macOS Only:\r
      uvloop>=0.19.0; sys_platform != 'win32'\r
  • Specific Python Version:\r
      typing-extensions>=4.0.0; python_version < '3.10'\r
\r
--------------------------------------------------------------------------------\r
3. LAYERED REQUIREMENTS ARCHITECTURE (BEST PRACTICE)\r
--------------------------------------------------------------------------------\r
  • \`requirements/base.txt\`: Core shared app packages (FastAPI, Requests, SQLAlchemy)\r
  • \`requirements/dev.txt\`:  \`-r base.txt\` + testing tools (pytest, black, flake8)\r
  • \`requirements/prod.txt\`: \`-r base.txt\` + production servers (gunicorn, sentry)\r
\r
--------------------------------------------------------------------------------\r
4. INSTALLATION & AUDIT COMMANDS\r
--------------------------------------------------------------------------------\r
  • Install Dev:   python -m pip install -r requirements/dev.txt\r
  • Install Prod:  python -m pip install --no-cache-dir -r requirements/prod.txt\r
  • Verify Health: python -m pip check\r
\r
================================================================================\r
        END OF STUDY NOTE • TOPIC 9: requirements.txt & DEPENDENCIES\r
================================================================================\r
`,T=[{question:"What is a requirements.txt file in Python?",shortAnswer:"A standard text file containing a list of third-party package names, version constraints, and optional environment markers required to run a Python project.",explanation:"Allows developers and CI/CD pipelines to recreate the exact environment on any computer using 'pip install -r requirements.txt'.",hint:"Text file listing project package dependencies and version pins.",level:"basic",codeExample:`# requirements.txt:
requests==2.31.0
pandas>=2.0.0`},{question:"How do you generate a requirements.txt file from an active virtual environment?",shortAnswer:"python -m pip freeze > requirements.txt",explanation:"'pip freeze' inspects the active environment and redirects the pinned package list to the specified text file.",hint:"Use python -m pip freeze > requirements.txt.",level:"basic",codeExample:"python -m pip freeze > requirements.txt"},{question:"How do you install all packages listed in a requirements.txt file?",shortAnswer:"python -m pip install -r requirements.txt",explanation:"The -r (or --requirement) flag instructs pip to read and install dependencies from the file.",hint:"Use python -m pip install -r requirements.txt.",level:"basic",codeExample:"python -m pip install -r requirements.txt"},{question:"What does the compatible release operator (~=) mean in requirements.txt?",shortAnswer:"Compatible release (e.g. pydantic~=2.6.0 means >=2.6.0, ==2.6.*) allowing bug-fix patch updates while forbidding breaking minor/major releases.",explanation:"Helps projects stay secure with automated patch updates without risking breaking API changes.",hint:"Allows compatible patch updates (>=2.6.0, ==2.6.*).",level:"moderate",codeExample:"fastapi~=0.110.0  # Accepts 0.110.1, 0.110.2; rejects 0.111.0"},{question:"What are Environment Markers in requirements.txt?",shortAnswer:"Conditional clauses appended to a requirement (separated by a semicolon) that install the package only on specific OS platforms or Python versions.",explanation:`For example, 'colorama>=0.4.6; sys_platform == "win32"' installs colorama only on Windows machines.`,hint:`Conditional rules like '; sys_platform == "win32"'.`,level:"moderate",codeExample:`colorama>=0.4.6; sys_platform == 'win32'
uvloop>=0.19.0; sys_platform != 'win32'`},{question:"What is Layered Requirements Architecture and why is it considered an industry best practice?",shortAnswer:"Splitting dependencies into modular files (base.txt, dev.txt, prod.txt) using '-r base.txt' to include shared packages.",explanation:"Prevents heavy local testing tools (like pytest, black, flake8) from bloating lightweight production Docker containers.",hint:"Separates base, dev, and prod dependencies using '-r base.txt'.",level:"moderate",codeExample:`# requirements/dev.txt:
-r base.txt
pytest==8.0.2
black==24.2.0`},{question:"What is the '-r' directive inside a requirements file?",shortAnswer:"A recursive include directive that loads and appends another requirements file into the current file.",explanation:"Allows dev.txt to inherit everything from base.txt without duplicating package entries.",hint:"Includes another requirements file: -r base.txt.",level:"basic",codeExample:"-r base.txt"},{question:"What is the main limitation of relying solely on 'pip freeze' for requirement generation?",shortAnswer:"It dumps all transitive (sub-)dependencies into a single flat list, losing track of direct project dependencies and making future upgrades difficult.",explanation:"It also captures unrelated packages if run outside a clean virtual environment.",hint:"Mixes direct and transitive dependencies and captures global clutter.",level:"moderate",codeExample:"# Loss of intent: is 'idna' your dependency or requests' sub-dependency?"},{question:"What is pip-tools (pip-compile) and how does it solve the limitations of pip freeze?",shortAnswer:"pip-compile takes a high-level requirements.in file (with direct dependencies) and generates a fully pinned, annotated requirements.txt showing why every sub-dependency was installed.",explanation:"Provides deterministic, reproducible lockfiles while keeping direct dependencies crystal clear.",hint:"Compiles requirements.in into a deterministic, annotated lockfile.",level:"complex",codeExample:`# In requirements.in: requests
# Run: pip-compile requirements.in -> Generates requirements.txt with hashes & sub-deps`},{question:"What is 'pipreqs' and when should you use it instead of pip freeze?",shortAnswer:"'pipreqs' scans only the 'import' statements in your project's .py files and generates a clean requirements.txt containing only packages actually imported by your code.",explanation:"Ideal for cleaning up messy environments or generating requirements for an inherited legacy codebase.",hint:"Scans project source code imports to generate requirements.",level:"moderate",codeExample:"$ pipreqs ./"},{question:"How do you verify if all installed packages in your environment satisfy their dependency requirements without conflicts?",shortAnswer:"python -m pip check",explanation:"Scans all installed distributions and reports broken dependencies or incompatible version requirements.",hint:"Run python -m pip check.",level:"basic",codeExample:`python -m pip check
# Output: 'No broken requirements found.'`},{question:"How do you specify an excluded version in requirements.txt (e.g. a version with a known bug)?",shortAnswer:"package_name>=1.0.0,!=1.2.3",explanation:"The '!=' operator explicitly skips the buggy release while allowing all other valid versions.",hint:"Use != to exclude a specific version: !=1.2.3.",level:"basic",codeExample:"pydantic>=2.0.0,!=2.5.0"},{question:"Can you include comments inside a requirements.txt file?",shortAnswer:"Yes. Any line starting with a hash symbol (#) is treated as a comment and ignored by pip.",explanation:"Useful for documenting why a package was pinned or who requested it.",hint:"Lines starting with # are comments.",level:"basic",codeExample:`# Core Database Driver for PostgreSQL
psycopg2-binary==2.9.9`},{question:"How do you install a package directly from a private Git repository inside requirements.txt?",shortAnswer:"package-name @ git+https://github.com/org/repo.git@tag_or_branch",explanation:"pip clones and builds the private repository during installation.",hint:"Use 'pkg @ git+https://...' syntax.",level:"moderate",codeExample:"accotax-core @ git+https://github.com/accotax/core.git@v2.1.0"},{question:"What does the '--no-cache-dir' flag do during 'pip install -r requirements.txt' in Docker containers?",shortAnswer:"Disables saving downloaded wheel files to disk cache, keeping the final Docker container image size as small as possible.",explanation:"In Docker, cached wheels waste image disk space since container layers are immutable.",hint:"Prevents storing wheel cache to minimize Docker image size.",level:"moderate",codeExample:"RUN pip install --no-cache-dir -r requirements.txt"},{question:"What is pyproject.toml (PEP 621) in modern Python dependency management?",shortAnswer:"The modern unified standard for defining project metadata, build systems, and dependencies in a single standardized TOML configuration file.",explanation:"Replaces setup.py and requirements.txt in modern packaging tools like Poetry, Flit, Hatch, and modern Setuptools.",hint:"Modern standardized TOML configuration for dependencies (PEP 621).",level:"moderate",codeExample:`# [project]
# dependencies = ['fastapi>=0.110.0', 'pydantic>=2.6.0']`},{question:"How do you generate SHA-256 package hashes in requirements.txt for tamper-proof security?",shortAnswer:"python -m pip hash package.whl or using 'pip-compile --generate-hashes'",explanation:"Hashes guarantee that the exact binary downloaded in CI matches the tested package byte-for-byte.",hint:"Use pip-compile --generate-hashes.",level:"complex",codeExample:"requests==2.31.0 --hash=sha256:942c5a53f693d4..."},{question:"What happens if a package in requirements.txt specifies conflicting version constraints with another package?",shortAnswer:"pip's backtracking resolver attempts to find a compatible combination or raises 'ResolutionImpossible' if no solution exists.",explanation:"Prevents installing broken dependency trees.",hint:"Backtracking resolver resolves or raises ResolutionImpossible.",level:"complex",codeExample:"# Pip catches version conflicts during resolution"},{question:"Why should production requirements files always use exact version pinning (==)?",shortAnswer:"To guarantee 100% deterministic, reproducible builds and prevent an unexpected third-party update from crashing live production servers.",explanation:"Unpinned versions can silently pull new breaking changes during server restarts.",hint:"Guarantees reproducible deployments and prevents unexpected breaking changes.",level:"basic",codeExample:"requests==2.31.0  # Exact pin"},{question:"Can requirements.txt specify extra optional feature sets of a package (e.g. 'uvicorn[standard]')?",shortAnswer:"Yes: package_name[extra_name]==1.0.0",explanation:"Extras install optional companion dependencies (e.g. uvicorn[standard] installs uvloop, httptools, and websockets).",hint:"Use brackets for optional extras: package[extra].",level:"basic",codeExample:`uvicorn[standard]==0.27.1
fastapi[all]==0.110.0`},{question:"How do you ignore package dependencies already installed globally when installing from requirements.txt?",shortAnswer:"python -m pip install --ignore-installed -r requirements.txt (or -I)",explanation:"Forces re-installation of all requirements into the current location regardless of existing versions.",hint:"Use --ignore-installed or -I flag.",level:"moderate",codeExample:"python -m pip install --ignore-installed -r requirements.txt"},{question:"What is the difference between a Lockfile (like poetry.lock) and a simple requirements.txt?",shortAnswer:"A lockfile pins every single direct AND transitive dependency with exact versions, cryptographic hashes, and platform markers for 100% byte-exact reproducibility.",explanation:"Lockfiles eliminate any ambiguity during automated deployment.",hint:"Lockfiles contain exact dependency graphs with hashes.",level:"moderate",codeExample:"# Lockfiles guarantee byte-for-byte identical installations"},{question:"How can you programmatically parse a requirements.txt file in Python code?",shortAnswer:"Use standard regex/string parsing or the 'pkg_resources.parse_requirements' / 'packaging.requirements.Requirement' library.",explanation:"The standard 'packaging' library provides a robust parser for PEP 508 dependency strings.",hint:"Use packaging.requirements.Requirement(line).",level:"complex",codeExample:`from packaging.requirements import Requirement
req = Requirement('requests>=2.0.0; sys_platform == "win32"')
print(req.name, req.specifier, req.marker)`},{question:"How do you upgrade all packages in a requirements.txt file to their latest allowed versions?",shortAnswer:"python -m pip install --upgrade -r requirements.txt",explanation:"Evaluates constraints in the file and installs the highest matching version from PyPI.",hint:"Use python -m pip install --upgrade -r requirements.txt.",level:"basic",codeExample:"python -m pip install --upgrade -r requirements.txt"},{question:"What is the complete end-to-end industry standard workflow for dependency management?",shortAnswer:"1. Maintain direct dependencies in requirements.in (or pyproject.toml); 2. Compile locked requirements.txt via pip-compile; 3. Install in isolated venv; 4. Verify in CI with pip check & pip-audit.",explanation:"Combines human-readable intent with machine-deterministic security.",hint:"Author requirements.in -> Compile with pip-tools -> Install in venv -> Audit in CI.",level:"basic",codeExample:"# requirements.in -> pip-compile -> requirements.txt -> pip install -> pip-audit"}];function O(){const l=r.useRef([]),[i,d]=r.useState("deployflow"),[s,u]=r.useState("dev"),[c,f]=r.useState(!0),[p,b]=r.useState(!0),[x,g]=r.useState(!0),[m,y]=r.useState(!1);r.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(h=>{h.isIntersecting&&h.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return l.current.forEach(a=>{a&&t.observe(a)}),()=>t.disconnect()},[]);const n=t=>{t&&!l.current.includes(t)&&l.current.push(t)},v=()=>{const t=["# Coder & AccoTax Dependency Manifest"];return s==="dev"?(t.push(`-r base.txt
`),x&&t.push("pytest==8.0.2"),t.push("black==24.2.0"),t.push("flake8==7.0.0"),t.push("mypy==1.8.0")):s==="prod"?(t.push(`-r base.txt
`),m&&t.push("gunicorn==21.2.0"),t.push("uvicorn[standard]==0.27.1"),t.push("sentry-sdk==1.40.6")):(c&&t.push("fastapi==0.110.0"),p&&t.push("requests>=2.31.0"),t.push("pydantic~=2.6.0"),t.push("colorama>=0.4.6; sys_platform == 'win32'")),t.join(`
`)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 2 • Module 002_009"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 9 • Module Finale"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Modules, Packages & Python Standard Library"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-teal-400 font-mono",children:"requirements.txt"})," Generation & Dependency Management"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master reproducible Python deployments: version specifiers (",e.jsx("code",{className:"text-teal-300 font-mono",children:"=="}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"~="}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:">="}),"), environment markers, layered architecture (",e.jsx("code",{className:"text-amber-300 font-mono",children:"base.txt"})," / ",e.jsx("code",{className:"text-amber-300 font-mono",children:"dev.txt"})," / ",e.jsx("code",{className:"text-amber-300 font-mono",children:"prod.txt"}),"), ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pip-tools"})," lockfiles, and automated dependency auditing."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔒 Exact Pinning (==) & SemVer (~=)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏗️ Layered Architecture (-r base.txt)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Platform Environment Markers"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ pip-tools Lockfiles & Security Audits"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Dependency Manifest & Version Specifiers"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["A ",e.jsx("code",{className:"text-teal-400 font-mono",children:"requirements.txt"})," file is the blueprint of your project's external dependencies. It guarantees that any team member or production server can replicate your exact environment:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"== Exact Pinning"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"requests==2.31.0"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Mandatory for production deployments; eliminates breaking unexpected updates."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"~= Compatible Release"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"pydantic~=2.6.0"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Accepts bug-fix patches (>=2.6.0, ==2.6.*) while blocking breaking version changes."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"; Environment Markers"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"; sys_platform == 'win32'"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Conditionally installs packages only on matching operating systems or Python versions."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Golden Deployment Command"}),e.jsx("code",{className:"text-emerald-300 font-mono text-sm block",children:"$ python -m pip install -r requirements.txt"})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Dependency Management Architectures"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>d("deployflow"),className:o("px-3 py-1.5 rounded-lg transition-all",i==="deployflow"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Deployment Flow"}),e.jsx("button",{onClick:()=>d("layered"),className:o("px-3 py-1.5 rounded-lg transition-all",i==="layered"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Layered Architecture (-r)"}),e.jsx("button",{onClick:()=>d("lockfiles"),className:o("px-3 py-1.5 rounded-lg transition-all",i==="lockfiles"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"pip-tools Lockfile Engine"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining dependency export pipelines, multi-environment separation, and deterministic lockfile compilation:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="deployflow"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"REQUIREMENTS EXPORT & PRODUCTION DEPLOYMENT WORKFLOW"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"180",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"1. Developer Machine"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"11 font-mono",children:"$ python -m venv .venv"}),e.jsx("text",{x:"20",y:"85",fill:"#ecfdf5",fontSize:"11 font-mono",children:"$ pip install fastapi requests"}),e.jsx("text",{x:"20",y:"115",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"$ pip freeze > req.txt"}),e.jsx("text",{x:"20",y:"145",fill:"#a7f3d0",fontSize:"10",children:"Exports pinned dependency manifest"}),e.jsx("text",{x:"255",y:"95",fill:"#38bdf8",fontSize:"24",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"285",y:"0",width:"240",height:"180",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"305",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"2. Git Version Control"}),e.jsx("text",{x:"305",y:"60",fill:"#cbd5e1",fontSize:"11 font-mono",children:"git add requirements.txt"}),e.jsx("text",{x:"305",y:"85",fill:"#cbd5e1",fontSize:"11 font-mono",children:'git commit -m "Add deps"'}),e.jsx("text",{x:"305",y:"110",fill:"#cbd5e1",fontSize:"11 font-mono",children:"git push origin main"}),e.jsx("text",{x:"305",y:"145",fill:"#fca5a5",fontSize:"10 font-bold",children:"(.venv is in .gitignore!)"}),e.jsx("text",{x:"540",y:"95",fill:"#38bdf8",fontSize:"24",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"570",y:"0",width:"240",height:"180",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"590",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"3. Production Server"}),e.jsx("text",{x:"590",y:"60",fill:"#ecfdf5",fontSize:"11 font-mono",children:"git pull"}),e.jsx("text",{x:"590",y:"85",fill:"#ecfdf5",fontSize:"11 font-mono font-bold",children:"pip install -r req.txt"}),e.jsx("text",{x:"590",y:"115",fill:"#34d399",fontSize:"11",children:"✓ 100% Identical Versions"}),e.jsx("text",{x:"590",y:"145",fill:"#a7f3d0",fontSize:"10",children:"Zero deployment surprises!"})]})]}):i==="layered"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"LAYERED REQUIREMENTS ARCHITECTURE (-r base.txt)"}),e.jsxs("g",{transform:"translate(300, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"280",height:"100",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"requirements/base.txt"}),e.jsx("text",{x:"20",y:"55",fill:"#ecfdf5",fontSize:"11 font-mono",children:"fastapi==0.110.0"}),e.jsx("text",{x:"20",y:"75",fill:"#ecfdf5",fontSize:"11 font-mono",children:"requests==2.31.0"})]}),e.jsxs("g",{transform:"translate(50, 180)",children:[e.jsx("rect",{x:"0",y:"0",width:"350",height:"110",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"requirements/dev.txt (Local & CI)"}),e.jsx("text",{x:"20",y:"55",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"-r base.txt"}),e.jsx("text",{x:"20",y:"75",fill:"#cbd5e1",fontSize:"11 font-mono",children:"pytest==8.0.2, black==24.2.0"}),e.jsx("text",{x:"20",y:"95",fill:"#94a3b8",fontSize:"10",children:"Testing & Linting Tools"})]}),e.jsxs("g",{transform:"translate(480, 180)",children:[e.jsx("rect",{x:"0",y:"0",width:"350",height:"110",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"requirements/prod.txt (Docker / Server)"}),e.jsx("text",{x:"20",y:"55",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"-r base.txt"}),e.jsx("text",{x:"20",y:"75",fill:"#ecfdf5",fontSize:"11 font-mono",children:"gunicorn==21.2.0, sentry-sdk==1.40.6"}),e.jsx("text",{x:"20",y:"95",fill:"#a7f3d0",fontSize:"10",children:"Zero dev tools in production!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"pip-tools: requirements.in → DETERMINISTIC LOCKFILE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"350",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"Direct Intent: requirements.in"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"12 font-mono",children:"fastapi>=0.110.0"}),e.jsx("text",{x:"20",y:"90",fill:"#ecfdf5",fontSize:"12 font-mono",children:"pandas>=2.0.0"}),e.jsx("rect",{x:"20",y:"145",width:"310",height:"70",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"170",fill:"#34d399",fontSize:"11 font-bold",children:"Human-Readable Intent:"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"10",children:"Only contains packages you actually imported!"})]}),e.jsxs("g",{transform:"translate(395, 130)",children:[e.jsx("text",{x:"10",y:"35",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"-15",y:"65",fill:"#38bdf8",fontSize:"10 font-mono",children:"pip-compile"})]}),e.jsxs("g",{transform:"translate(490, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"360",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Locked: requirements.txt"}),e.jsx("text",{x:"20",y:"60",fill:"#cbd5e1",fontSize:"11 font-mono",children:"fastapi==0.110.0"}),e.jsx("text",{x:"20",y:"80",fill:"#cbd5e1",fontSize:"11 font-mono",children:"pydantic==2.6.4 # via fastapi"}),e.jsx("text",{x:"20",y:"100",fill:"#cbd5e1",fontSize:"11 font-mono",children:"numpy==1.26.4 # via pandas"}),e.jsx("rect",{x:"20",y:"145",width:"320",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"170",fill:"#34d399",fontSize:"11 font-bold",children:"Machine-Deterministic Lockfile:"}),e.jsx("text",{x:"30",y:"195",fill:"#ecfdf5",fontSize:"10",children:"Annotated with dependency provenance & hashes!"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["3. Interactive ",e.jsx("code",{className:"text-teal-400 font-mono",children:"requirements.txt"})," Builder & Parser"]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select an environment tier and configure packages to generate production-ready layered requirement manifests:"}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:[{id:"base",label:"Base Tier (requirements/base.txt)"},{id:"dev",label:"Dev Tier (requirements/dev.txt)"},{id:"prod",label:"Prod Tier (requirements/prod.txt)"}].map(t=>e.jsx("button",{onClick:()=>u(t.id),className:o("py-2.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-bold border transition-all",s===t.id?"bg-teal-950 border-teal-500 text-teal-300 shadow-md shadow-teal-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:t.label},t.id))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Configure Tier Dependencies"}),s==="base"?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("label",{className:"flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:c,onChange:t=>f(t.target.checked),className:"rounded border-slate-700 text-teal-500"}),e.jsxs("div",{children:[e.jsx("code",{className:"text-xs font-mono text-emerald-300 font-bold block",children:"fastapi==0.110.0"}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Web & API microservice framework"})]})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:p,onChange:t=>b(t.target.checked),className:"rounded border-slate-700 text-teal-500"}),e.jsxs("div",{children:[e.jsx("code",{className:"text-xs font-mono text-emerald-300 font-bold block",children:"requests>=2.31.0"}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"HTTP client library"})]})]})]}):s==="dev"?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono text-slate-300",children:[e.jsx("span",{className:"text-teal-400 font-bold block mb-1",children:"Inherits:"}),e.jsx("code",{children:"-r base.txt (All core application libraries)"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:x,onChange:t=>g(t.target.checked),className:"rounded border-slate-700 text-teal-500"}),e.jsxs("div",{children:[e.jsx("code",{className:"text-xs font-mono text-cyan-300 font-bold block",children:"pytest==8.0.2"}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Automated testing & assertion framework"})]})]})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono text-slate-300",children:[e.jsx("span",{className:"text-teal-400 font-bold block mb-1",children:"Inherits:"}),e.jsx("code",{children:"-r base.txt (All core application libraries)"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:t=>y(t.target.checked),className:"rounded border-slate-700 text-teal-500"}),e.jsxs("div",{children:[e.jsx("code",{className:"text-xs font-mono text-emerald-300 font-bold block",children:"gunicorn==21.2.0"}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Production WSGI HTTP Server"})]})]})]})]}),e.jsxs("div",{className:"space-y-2 flex flex-col justify-between",children:[e.jsxs("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:["Generated requirements/",s,".txt"]}),e.jsx("pre",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 text-teal-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap flex-1 max-h-64",children:v()})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Version Specifiers & Operators Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Operator"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Meaning"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Example"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Recommended Usage"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"=="}),e.jsx("td",{className:"py-3 px-4",children:"Exact Pinning"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"requests==2.31.0"}),e.jsx("td",{className:"py-3 px-4",children:"Mandatory for live production deployments"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"~="}),e.jsx("td",{className:"py-3 px-4",children:"Compatible Release"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"pydantic~=2.6.0"}),e.jsx("td",{className:"py-3 px-4",children:"Allows safe bug-fix patches (>=2.6.0, ==2.6.*)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:">="}),e.jsx("td",{className:"py-3 px-4",children:"Minimum Version"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"pandas>=2.0.0"}),e.jsx("td",{className:"py-3 px-4",children:"Reusable libraries and initial development"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-400 font-semibold",children:"!="}),e.jsx("td",{className:"py-3 px-4",children:"Exclude Buggy Version"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"pydantic!=2.5.0"}),e.jsx("td",{className:"py-3 px-4",children:"Skip a known broken or vulnerable release"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:";"}),e.jsx("td",{className:"py-3 px-4",children:"Environment Marker"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"; sys_platform == 'win32'"}),e.jsx("td",{className:"py-3 px-4",children:"OS-specific and Python-version specific packages"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating requirements pinning, layered multi-environment architectures, pip-tools lockfiles, and compliance auditors:"}),e.jsx(j,{files:[{filename:"requirements_generation_and_pinning.py",code:q,description:"Anatomy of requirements.txt, 5 version specifiers, and platform environment markers."},{filename:"layered_requirements_architecture.py",code:_,description:"Layered multi-tier architecture (base.txt, dev.txt, prod.txt) using recursive -r includes."},{filename:"pip_freeze_vs_pip_reqs_and_lockfiles.py",code:E,description:"Drawbacks of naive pip freeze vs pip-tools (pip-compile) deterministic lockfiles."},{filename:"dependency_validator_and_license_audit.py",code:A,description:"Automated requirements parser and dependency compliance auditor matching specs against installed packages."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Freezing Global Python"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Running ",e.jsx("code",{className:"text-rose-300 font-mono",children:"pip freeze > requirements.txt"})," outside a virtualenv dumps 200 unrelated global system packages into your project!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always activate your project virtual environment before running ",e.jsx("code",{className:"text-emerald-300",children:"pip freeze"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Testing Tools in Production Images"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Installing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"pytest"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"black"}),", and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"mypy"})," on production servers adds 300MB of unnecessary attack surface."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use layered ",e.jsx("code",{className:"text-emerald-300",children:"requirements/prod.txt"})," for Docker builds."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Unpinned Dependencies in Production"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Leaving ",e.jsx("code",{className:"text-purple-300 font-mono",children:"requests"})," without version pins allows a breaking upstream release to crash your web app during an automated restart."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Pin exact versions (",e.jsx("code",{className:"text-emerald-300",children:"=="}),") in production manifests."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Broken Dependency Conflicts"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Manually editing version numbers in ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"requirements.txt"})," can create conflicting sub-dependencies."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Run ",e.jsx("code",{className:"text-emerald-300",children:"python -m pip check"})," to verify environment integrity!"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering requirements.txt generation, version specifiers, layered architectures, and lockfile compilation:"}),e.jsx(w,{questions:T})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with version specifier tables, layered requirements templates, and pip-tools recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(N,{content:S,filename:"python_topic9_requirements_and_dependencies_notes.txt",title:"Print Topic 9 Study Notes"})}),e.jsx(k,{})]})]})]})}export{O as default};
