import{b as r,j as e}from"./vendor-react-core-BBXbtqt1.js";import{P as h}from"./PythonFileLoader-YugaCzY9.js";import{F as b}from"./FAQTemplate-BamsZuNW.js";import{P as g}from"./PlainTextPrint-CGJ_aUDk.js";import{T as f}from"./TeacherSukantaHui-CzsyGExA.js";import{cl as v,g as w,z as S,h as k,a as N,a2 as A,au as j}from"./vendor-icons-CKN6-nXc.js";import"./PythonCodeBlock-BDgVOCqn.js";import"./vendor-prism-B7oW9GGR.js";const P=`"""\r
Topic 1: Installing and Importing SciPy\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
# Installation Commands:\r
# 1. Standard pip:\r
#    pip install scipy\r
# 2. Upgrade existing installation:\r
#    pip install -U scipy\r
# 3. Conda environment:\r
#    conda install -c conda-forge scipy\r
# 4. Poetry environment:\r
#    poetry add scipy\r
\r
import scipy\r
import numpy as np\r
\r
print(f"Successfully loaded SciPy: version {scipy.__version__}")\r
print(f"SciPy installation path: {scipy.__file__}")\r
`,_=`"""\r
Topic 1: Explicit Submodule Importing in SciPy\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
# IMPORTANT: Unlike some libraries, SciPy does NOT automatically load all \r
# subpackages when you do \`import scipy\`. You MUST explicitly import submodules!\r
\r
# Correct & Idiomatic Imports:\r
from scipy import stats\r
from scipy import spatial\r
from scipy import linalg\r
from scipy import optimize\r
\r
print("--- Subpackages Explicitly Imported ---")\r
print("scipy.stats:", stats)\r
print("scipy.spatial:", spatial)\r
print("scipy.linalg:", linalg)\r
print("scipy.optimize:", optimize)\r
\r
# Example: Using stats directly\r
norm_dist = stats.norm(loc=0, scale=1)\r
print(f"Normal distribution mean: {norm_dist.mean()}, std: {norm_dist.std()}")\r
`,C=`"""\r
Topic 1: System Diagnostic and Linear Algebra Backend Check\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import scipy\r
import numpy as np\r
import sys\r
\r
print("--- System Diagnostic Environment ---")\r
print(f"Python Version : {sys.version.split()[0]}")\r
print(f"NumPy Version  : {np.__version__}")\r
print(f"SciPy Version  : {scipy.__version__}")\r
\r
# Checking BLAS / LAPACK configurations in SciPy\r
try:\r
    from scipy.linalg import blas, lapack\r
    print(f"BLAS prefix    : {blas.find_best_blas_type()[0]}")\r
    print("BLAS / LAPACK hardware acceleration is active.")\r
except Exception as e:\r
    print("Diagnostics note:", e)\r
`,I=`================================================================================\r
SCIPY OVERVIEW: TOPIC 1 - INSTALLING AND IMPORTING SCIPY\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. INSTALLATION METHODS:\r
--------------------------------------------------------------------------------\r
- Standard Pip:\r
    pip install -U scipy\r
- Anaconda / Conda Forge:\r
    conda install -c conda-forge scipy\r
- Poetry / Pipenv:\r
    poetry add scipy\r
\r
2. THE EXPLICIT IMPORT RULE (CRITICAL GOTCHA):\r
--------------------------------------------------------------------------------\r
- In Python, running \`import scipy\` does NOT automatically populate submodules into\r
  the namespace.\r
- Doing \`scipy.stats.norm\` after just \`import scipy\` will raise an AttributeError!\r
- Always import subpackages explicitly:\r
    from scipy import stats\r
    from scipy import spatial\r
    from scipy import linalg\r
    from scipy import optimize\r
\r
3. HARDWARE ACCELERATION & BACKENDS:\r
--------------------------------------------------------------------------------\r
- SciPy automatically links against OpenBLAS, MKL, or Apple Accelerate.\r
- Inspect version info:\r
    import scipy\r
    print(scipy.__version__)\r
- Inspecting configurations:\r
    scipy.show_config()\r
`,T=[{question:"Why does `import scipy` alone NOT automatically import submodules like `scipy.stats` or `scipy.optimize`?",shortAnswer:"SciPy uses lazy/explicit submodule loading to prevent loading hundreds of megabytes of compiled C/Fortran libraries into RAM on startup.",explanation:"SciPy is composed of dozens of heavy compiled extensions. If `import scipy` automatically imported all subpackages, initial import time would be sluggish and consume excessive memory. Therefore, SciPy follows Python PEP recommendations requiring explicit submodule imports such as `import scipy.stats as stats` or `from scipy import spatial`.",hint:"Explicit submodule imports prevent memory bloat and keep startup fast.",level:"basic",codeExample:`import scipy
# This will raise AttributeError: module 'scipy' has no attribute 'stats'
# print(scipy.stats.describe([1, 2, 3]))

# Correct standard practice:
import scipy.stats as stats
print(stats.describe([1, 2, 3]))`},{question:"What is the recommended installation command for SciPy on production systems?",shortAnswer:"`pip install scipy` or `conda install scipy`.",explanation:"For standard Python virtual environments, `pip install scipy` downloads pre-compiled binary wheels including optimized BLAS and LAPACK shared libraries. In Conda environments, `conda install -c conda-forge scipy` links against Intel MKL or OpenBLAS automatically.",hint:"Always install inside an activated virtual environment (venv or conda).",level:"basic",codeExample:`# In terminal:
pip install --upgrade pip
pip install scipy numpy pandas matplotlib

# In Python sanity verification:
import scipy
print(scipy.__version__)
print(scipy.__file__)`},{question:"How do you check which underlying BLAS and LAPACK linear algebra acceleration engines SciPy is linked against?",shortAnswer:"Using `scipy.show_config()` or `scipy.__config__.show()`.",explanation:"`scipy.show_config()` inspects the active compilation flags and prints the detected acceleration libraries (such as OpenBLAS, Intel MKL, Accelerate, or ATLAS) and compiler info. This verifies whether your hardware vectorization (AVX-512, NEON) is active.",hint:"show_config() prints detailed build-time and runtime hardware linking information.",level:"moderate",codeExample:`import scipy
scipy.show_config()

import scipy.linalg as la
print('Active BLAS wrapper:', la.blas.find_best_blas_type())`},{question:"Why should `from scipy import *` NEVER be used in production ML pipelines?",shortAnswer:"It causes severe namespace pollution and silently overwrites Python built-ins and NumPy functions.",explanation:"Wildcard imports pollute the global namespace with thousands of identifiers. Many function names clash with Python built-ins or NumPy (e.g., `any`, `all`, `sum`, `round`), creating unpredictable, silent numerical bugs and breaking static analysis tools like flake8 and mypy.",hint:"Always use explicit namespace aliases like `import scipy.stats as stats` or `import scipy.linalg as la`.",level:"basic",codeExample:`# BAD PRACTICE:
# from scipy import *

# PRODUCTION STANDARD:
import scipy.stats as stats
import scipy.spatial.distance as dist
import scipy.linalg as la`},{question:"How does SciPy handle system dependencies across Linux, Windows, and macOS?",shortAnswer:"Modern SciPy distributes self-contained binary wheels via PyPI that bundle all required compiled C/Fortran runtimes.",explanation:"Historically, users had to compile Fortran and C compilers (gfortran, gcc) manually. Today, official wheels on PyPI (manylinux, win_amd64, macosx_arm64) bundle OpenBLAS and gfortran runtime DLLs/shared objects directly, allowing seamless installation without external compilers.",hint:"Wheel binaries (.whl) eliminate the need for local Fortran/C compilers.",level:"moderate",codeExample:`import platform
import scipy

print('OS:', platform.system())
print('SciPy Version:', scipy.__version__)
print('Python Version:', platform.python_version())`},{question:"What is the standard naming convention for importing SciPy submodules in data science?",shortAnswer:"`import scipy.stats as stats`, `import scipy.linalg as la`, `import scipy.optimize as opt`, `import scipy.spatial as spatial`.",explanation:"The data science community follows standard canonical aliases to maintain clear, readable code across teams: `stats` for statistics, `la` or `linalg` for linear algebra, `opt` for optimization, `distance` for spatial distance metrics, and `sparse` for sparse matrices.",hint:"Canonical aliases make your code immediately readable by other ML engineers.",level:"basic",codeExample:`import scipy.stats as stats
import scipy.optimize as opt
import scipy.linalg as la
import scipy.spatial.distance as pdist
import scipy.sparse as sp`},{question:"What should you do if you encounter `ModuleNotFoundError: No module named 'scipy'` in a Jupyter notebook?",shortAnswer:"Verify that Jupyter is using the specific virtual environment kernel where SciPy was installed.",explanation:"Often Jupyter Notebook runs on a global base Python kernel while SciPy was installed in a custom virtual environment. Running `!python -m pip install scipy` inside the notebook or registering the venv with `python -m ipykernel install --user --name=myenv` resolves the environment mismatch.",hint:"Check sys.executable to confirm the kernel matches your active environment.",level:"moderate",codeExample:`import sys
print('Jupyter running on Python interpreter at:', sys.executable)
# In notebook cell:
# !{sys.executable} -m pip install scipy`},{question:"How can you programmatically verify that all required SciPy subpackages are functional in an automated CI/CD pipeline?",shortAnswer:"By writing a unit smoke-test that imports each core subpackage and executes a minimal numerical routine.",explanation:"A CI/CD sanity test imports `stats`, `spatial`, `linalg`, and `optimize`, runs a sample `stats.norm.cdf(0)`, `la.inv([[1, 2], [3, 4]])`, and `cdist([[0]], [[1]])`, asserting valid numerical output before deploying container images to production.",hint:"Smoke tests ensure dynamic C-extensions load properly inside Docker containers.",level:"advanced",codeExample:`import scipy.stats as stats
import scipy.linalg as la
import scipy.spatial.distance as dist

# Smoke test assertion:
assert abs(stats.norm.cdf(0) - 0.5) < 1e-6
assert la.inv([[1, 0], [0, 1]]).shape == (2, 2)
assert dist.euclidean([0, 0], [3, 4]) == 5.0
print('All SciPy subpackage smoke tests PASSED!')`}],p=[{name:"scipy.stats",alias:"import scipy.stats as stats",role:"Probability distributions, hypothesis tests, descriptive metrics",color:"#38bdf8"},{name:"scipy.spatial",alias:"import scipy.spatial.distance as pdist",role:"KD-Tree, spatial distances (Euclidean, Manhattan, Cosine)",color:"#818cf8"},{name:"scipy.linalg",alias:"import scipy.linalg as la",role:"Direct LAPACK/BLAS wrappers, matrix inversion, eigenvalue solver",color:"#34d399"},{name:"scipy.optimize",alias:"import scipy.optimize as opt",role:"Minimization routines, BFGS, least-squares curve fitting",color:"#f59e0b"},{name:"scipy.sparse",alias:"import scipy.sparse as sp",role:"Memory-efficient matrices (CSR, CSC, COO) for high-dimensional ML",color:"#ec4899"},{name:"scipy.integrate",alias:"import scipy.integrate as integrate",role:"Definite numerical integrals, quad, ODE solvers",color:"#a855f7"}],c=[{id:"part1",fileName:"01_pip_install_scipy.py",title:"1. Installation & Environment Verification",badge:"Install & Setup",code:P,summary:"Standard pip and conda installation verification, version checking, and path location."},{id:"part2",fileName:"02_import_submodules.py",title:"2. Explicit Submodule Import Conventions",badge:"Namespaces & Imports",code:_,summary:"Demonstrates why explicit subpackage imports are mandatory and contrasts with dangerous wildcard imports."},{id:"part3",fileName:"03_system_check_and_versions.py",title:"3. BLAS & Hardware Acceleration Sanity",badge:"System Configuration",code:C,summary:"Inspects show_config() and checks compiler flags and OpenBLAS/MKL acceleration linkage."}];function q(){const[t,d]=r.useState("interactive"),[o,m]=r.useState("part1"),[i,y]=r.useState("pip"),[a,u]=r.useState(p[0]),n=c.find(s=>s.id===o)||c[0];return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 border border-sky-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(v,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 1"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Installation & Submodule Architecture"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Mastering the installation pipelines, explicit submodule importing standards, lazy-loading conventions, and hardware BLAS/LAPACK linking in SciPy."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Setup Studio",icon:w},{id:"code",label:"Python Code Lab",icon:S},{id:"notes",label:"Revision Notes",icon:k},{id:"quiz",label:"Practice & FAQs",icon:N}].map(s=>{const l=s.icon,x=t===s.id;return e.jsxs("button",{onClick:()=>d(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${x?"bg-sky-600 text-white shadow-lg shadow-sky-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(l,{className:"w-4 h-4"}),e.jsx("span",{children:s.label})]},s.id)})})]}),t==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx(A,{className:"w-5 h-5 text-sky-400"}),e.jsx("span",{children:"Package Manager Terminal Command Builder"})]}),e.jsx("div",{className:"flex gap-2",children:["pip","conda","poetry","docker"].map(s=>e.jsx("button",{onClick:()=>y(s),className:`px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase transition ${i===s?"bg-sky-500/20 text-sky-300 border border-sky-500/40":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:s},s))})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-2",children:[e.jsx("p",{className:"text-slate-500",children:"# Run in your activated virtual environment terminal:"}),e.jsx("div",{className:"text-emerald-400 font-bold text-sm bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-center justify-between",children:e.jsxs("span",{children:[i==="pip"&&"$ pip install --upgrade pip && pip install scipy numpy pandas",i==="conda"&&"$ conda install -c conda-forge scipy numpy pandas",i==="poetry"&&"$ poetry add scipy numpy pandas",i==="docker"&&"$ RUN pip install --no-cache-dir scipy numpy pandas"]})}),e.jsx("p",{className:"text-slate-400 text-[11px]",children:"💡 All binary wheels are pre-compiled with OpenBLAS / LAPACK runtime acceleration for instant installation."})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold text-slate-300 uppercase tracking-wider",children:"Select Submodule"}),e.jsx("div",{className:"space-y-2",children:p.map(s=>{const l=a.name===s.name;return e.jsxs("button",{onClick:()=>u(s),className:`w-full p-3 rounded-xl border text-left transition-all ${l?"bg-slate-850 border-sky-500 text-white shadow-md shadow-sky-950/40":"bg-slate-900/70 border-slate-800 hover:bg-slate-850 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-mono text-xs font-bold text-sky-300",children:s.name}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400",children:"Subpackage"})]}),e.jsx("p",{className:"text-[11px] text-slate-400 mt-1 line-clamp-1",children:s.role})]},s.name)})})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white",children:a.name}),e.jsx("p",{className:"text-xs text-slate-400",children:a.role})]}),e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-300 border border-sky-500/30",children:"Production Canonical Alias"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-semibold uppercase tracking-wider block",children:"Recommended Python Import Syntax:"}),e.jsx("code",{className:"text-emerald-400 font-mono text-sm font-bold block bg-slate-900 p-2.5 rounded-lg border border-slate-800",children:a.alias})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-amber-300",children:[e.jsx(j,{className:"w-4 h-4 text-amber-400"}),e.jsx("span",{children:"Why Lazy Loading Matters:"})]}),e.jsxs("p",{children:["SciPy intentionally does not import subpackages upon ",e.jsx("code",{children:"import scipy"}),". Subpackages must be imported explicitly (e.g. ",e.jsx("code",{children:"import scipy.stats as stats"}),") to prevent loading hundreds of megabytes of compiled C/Fortran libraries on application startup."]})]})]})]})]}),t==="code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:c.map(s=>e.jsxs("button",{onClick:()=>m(s.id),className:`p-3.5 rounded-xl border text-left transition-all ${o===s.id?"bg-sky-950/40 border-sky-500 shadow-md shadow-sky-950/40 scale-[1.02]":"bg-slate-900/80 border-slate-800 hover:bg-slate-850 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${o===s.id?"bg-sky-500/20 text-sky-300 border-sky-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:s.badge}),e.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:".py"})]}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:s.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-1 mt-1",children:s.summary})]},s.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-300",children:n.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:n.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Installation & Import Suite"})]}),e.jsx(h,{fileModule:n.code,title:n.fileName})]})]}),t==="notes"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(f,{note:"A common pitfall for beginners is typing `import scipy` and expecting `scipy.stats` to be accessible. Always use explicit submodule imports. This ensures clean code, avoids namespace collisions, and keeps memory overhead minimal. — Sukanta Hui, Barrackpore ML Lab"}),e.jsx("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(g,{content:I,title:"Installation & Submodule Structure — Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 1 Study Note",downloadFileName:"scipy_install_and_submodules_note.txt"})})]}),t==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsx(b,{title:"Installation & Submodule Architecture — Domain FAQs",subtitle:"Master package managers, explicit namespace imports, lazy loading, and BLAS verification",questions:T})})]})})}export{q as default};
