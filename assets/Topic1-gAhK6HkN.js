import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{ce as B,S as M,k as O,B as v,aa as j,r as z,f as b,g as u,aB as R,L as D}from"./vendor-icons-DFC0rBCP.js";const K=`"""\r
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
`,U=`"""\r
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
`,$=`"""\r
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
`,N=`================================================================================\r
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
`,y=[{id:1,question:"Why does `import scipy` followed by `scipy.stats.norm` often fail with an AttributeError in Python scripts?",options:["Because SciPy requires a paid license","Because SciPy subpackages are not imported automatically when importing top-level scipy to keep startup lightweight","Because SciPy does not contain stats module","Because NumPy must be uninstalled first"],correctAnswer:1,explanation:"SciPy namespaces are modular. To avoid loading megabytes of compiled C/Fortran extensions into memory unnecessarily, submodules must be explicitly imported (e.g., `from scipy import stats`)."},{id:2,question:"What is the recommended pip command to install or update SciPy to the latest stable release?",options:["pip install -U scipy","python run scipy.exe","npm install scipy","git clone scipy --run"],correctAnswer:0,explanation:"`pip install -U scipy` upgrades or installs the latest pre-compiled binary wheel of SciPy from PyPI."},{id:3,question:"What method can be used to inspect the compiled BLAS/LAPACK linear algebra backend configurations in SciPy?",options:["scipy.show_config()","scipy.list_hardware()","scipy.gpu_check()","scipy.hardware_info()"],correctAnswer:0,explanation:"`scipy.show_config()` displays detailed compilation details, linked OpenBLAS / MKL paths, and system compiler flags."}],w=[{name:"scipy.stats",role:"Probability distributions, hypothesis tests, descriptive metrics",color:"#38bdf8"},{name:"scipy.spatial",role:"KD-Tree, spatial distances (Euclidean, Manhattan, Cosine)",color:"#818cf8"},{name:"scipy.linalg",role:"Direct LAPACK/BLAS wrappers, matrix inversion, eigenvalue solver",color:"#34d399"},{name:"scipy.optimize",role:"Minimization routines, BFGS, least-squares curve fitting",color:"#f59e0b"},{name:"scipy.sparse",role:"Memory-efficient matrices (CSR, CSC, COO) for high-dimensional ML",color:"#ec4899"},{name:"scipy.integrate",role:"Definite numerical integrals, quad, ODE solvers",color:"#a855f7"}];function G(){const[o,S]=a.useState("interactive"),[d,C]=a.useState(0),[i,h]=a.useState(!1),[p,A]=a.useState("pip"),[_,P]=a.useState(w[0]),[g,k]=a.useState({}),[n,T]=a.useState(!1),m=[{name:"01_pip_install_scipy.py",code:K},{name:"02_import_submodules.py",code:U},{name:"03_system_check_and_versions.py",code:$}],x=s=>{navigator.clipboard.writeText(s),h(!0),setTimeout(()=>h(!1),2e3)},I=(s,t)=>{n||k(r=>({...r,[s]:t}))},L=()=>{let s=0;return y.forEach(t=>{g[t.id]===t.correctAnswer&&s++}),s},f={pip:"$ pip install -U scipy",conda:"$ conda install -c conda-forge scipy",poetry:"$ poetry add scipy",pipenv:"$ pipenv install scipy"};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(B,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 1"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Installing and Importing SciPy"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Set up your high-performance scientific Python environment. Master explicit submodule loading, hardware BLAS/LAPACK linking, and avoid common namespace pitfalls."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Installation & Import Studio",icon:M},{id:"code",label:"Python Code Lab",icon:O},{id:"notes",label:"Revision Notes",icon:v},{id:"quiz",label:"Knowledge Check",icon:j}].map(s=>{const t=s.icon,r=o===s.id;return e.jsxs("button",{onClick:()=>S(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${r?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(t,{className:"w-4 h-4"}),s.label]},s.id)})})]}),o==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(z,{className:"w-4 h-4"}),e.jsx("span",{children:"Package Manager Installation Command"})]}),e.jsx("div",{className:"flex gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800",children:["pip","conda","poetry","pipenv"].map(s=>e.jsx("button",{onClick:()=>A(s),className:`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${p===s?"bg-emerald-600 text-white":"text-slate-400 hover:text-white"}`,children:s},s))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-center justify-between",children:[e.jsx("code",{className:"font-mono text-xs md:text-sm text-emerald-400",children:f[p]}),e.jsxs("button",{onClick:()=>x(f[p]),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[i?e.jsx(b,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(u,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:i?"Copied":"Copy"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-semibold text-sm",children:[e.jsx(R,{className:"w-4 h-4"}),e.jsx("span",{children:"The SciPy Explicit Import Gotcha"})]}),e.jsxs("div",{className:"bg-rose-950/30 border border-rose-900/50 rounded-xl p-4 space-y-2 text-xs",children:[e.jsx("div",{className:"font-bold text-rose-300",children:"❌ Incorrect Top-Level Loading:"}),e.jsx("pre",{className:"font-mono text-rose-200 bg-slate-950 p-2.5 rounded-lg border border-rose-900/40",children:`import scipy

# Raises AttributeError:
# module 'scipy' has no attribute 'stats'
result = scipy.stats.zscore([1, 2, 3])`})]}),e.jsxs("div",{className:"bg-emerald-950/30 border border-emerald-900/50 rounded-xl p-4 space-y-2 text-xs",children:[e.jsx("div",{className:"font-bold text-emerald-300",children:"✅ Idiomatic Explicit Submodule Loading:"}),e.jsx("pre",{className:"font-mono text-emerald-200 bg-slate-950 p-2.5 rounded-lg border border-emerald-900/40",children:`from scipy import stats
from scipy import spatial

# Works seamlessly!
z = stats.zscore([1, 2, 3])`})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(D,{className:"w-4 h-4"}),e.jsx("span",{children:"Essential ML Submodules"})]}),e.jsx("div",{className:"space-y-2",children:w.map((s,t)=>e.jsxs("div",{onClick:()=>P(s),className:`p-3 rounded-xl border cursor-pointer transition-all ${_.name===s.name?"bg-emerald-950/60 border-emerald-500":"bg-slate-950 border-slate-800 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-mono text-xs font-bold text-emerald-300",children:s.name}),e.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:s.color}})]}),e.jsx("p",{className:"text-[11px] text-slate-400 mt-0.5",children:s.role})]},t))})]})]})]}),o==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:m.map((s,t)=>e.jsx("button",{onClick:()=>C(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${d===t?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:s.name},t))}),e.jsxs("button",{onClick:()=>x(m[d].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[i?e.jsx(b,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(u,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:i?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:m[d].code})})]}),o==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(v,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>x(N),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[i?e.jsx(b,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(u,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:i?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:N})]}),o==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(j,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),n&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",L()," / ",y.length]})]}),e.jsx("div",{className:"space-y-6",children:y.map((s,t)=>{const r=g[s.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[t+1,". ",s.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.options.map((E,l)=>{let c="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return r===l&&(c="bg-emerald-950 border-emerald-500 text-white"),n&&(l===s.correctAnswer?c="bg-emerald-900/80 border-emerald-500 text-white font-semibold":r===l&&r!==s.correctAnswer&&(c="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>I(s.id,l),className:`p-3 rounded-lg border text-left text-xs transition-all ${c}`,children:E},l)})}),n&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:s.explanation})]})]},s.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>T(!n),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:n?"Reset Quiz":"Submit Answers"})})]})]})})}export{G as default};
