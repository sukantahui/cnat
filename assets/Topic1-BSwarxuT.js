import{b as n,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{ce as R,S as O,k as B,B as y,aa as N,r as U,bg as $,j as K,f as S,g as _}from"./vendor-icons-DFC0rBCP.js";const z=`"""\r
01_pip_install_sklearn.py\r
Title: Installing Scikit-learn (Package: scikit-learn vs sklearn)\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Overview Lab 01: Proper Installation Guide")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Swadeep")\r
    print("=" * 65)\r
\r
    print("\\n📦 Installation Commands:")\r
    print("   ✓ Correct pip command   : pip install -U scikit-learn")\r
    print("   ✓ Correct Conda command : conda install -c conda-forge scikit-learn")\r
    print("   ⚠ Warning: Do NOT run 'pip install sklearn' directly (it was a dummy transitional package).")\r
\r
    print("\\n🔗 Core C-level & Math Dependencies:")\r
    print("   • numpy       : Multi-dimensional arrays")\r
    print("   • scipy       : Sparse matrices & linear algebra solvers")\r
    print("   • joblib      : CPU parallel multiprocessing & caching")\r
    print("   • threadpoolctl: Thread-pool controller for OpenMP / BLAS")\r
\r
    try:\r
        import sklearn\r
        print(f"\\n✓ Scikit-learn is successfully installed! Version: {sklearn.__version__}")\r
    except ImportError:\r
        print("\\n✗ Scikit-learn not detected in environment.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,H=`"""\r
02_import_submodules.py\r
Title: Explicit Submodule Import Architecture in Scikit-Learn\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Lab 02: Explicit Submodule Imports")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    print("""\r
    💡 Best Practice: Scikit-learn DOES NOT eagerly load all submodules\r
       when you write \`import sklearn\`.\r
       You must explicitly import specific classes from subpackages:\r
\r
       # 1. Preprocessing & Scalers\r
       from sklearn.preprocessing import StandardScaler, OneHotEncoder\r
\r
       # 2. Dataset Splitting & Tuning\r
       from sklearn.model_selection import train_test_split, cross_val_score\r
\r
       # 3. Estimator Models\r
       from sklearn.linear_model import LinearRegression, LogisticRegression\r
       from sklearn.tree import DecisionTreeClassifier\r
       from sklearn.cluster import KMeans\r
\r
       # 4. Metrics & Evaluation\r
       from sklearn.metrics import accuracy_score, mean_squared_error, classification_report\r
    """)\r
    print("✓ Explicit imports prevent memory bloat and keep scripts clean!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,G=`"""\r
03_system_check_and_show_versions.py\r
Title: sklearn.show_versions() System Diagnostic Utility\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import sklearn\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Lab 03: show_versions() Diagnostics")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Mahima")\r
    print("=" * 65)\r
\r
    print("\\nRunning sklearn.show_versions() for deep environment inspection:")\r
    try:\r
        sklearn.show_versions()\r
    except Exception as e:\r
        print(f"show_versions output: {e}")\r
\r
    print("\\n✓ Used when filing bug reports or ensuring reproducible GPU/CPU execution.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`================================================================================\r
SCIKIT-LEARN OVERVIEW: TOPIC 1 - INSTALLING AND IMPORTING SCIKIT-LEARN\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. INSTALLATION DETAILS:\r
--------------------------------------------------------------------------------\r
- Official PyPI package name: \`scikit-learn\` (with a hyphen).\r
  Command: $ pip install -U scikit-learn\r
- Conda Forge: $ conda install -c conda-forge scikit-learn\r
- Python import module name: \`sklearn\` (without hyphen).\r
\r
2. DEPENDENCY ECOSYSTEM:\r
--------------------------------------------------------------------------------\r
- NumPy: Core C array manipulation\r
- SciPy: Optimized numerical solvers, matrix decompositions, and distributions\r
- Joblib: Multiprocessing engine for CPU-parallel \`n_jobs=-1\` tasks\r
- Threadpoolctl: Thread controller for BLAS/LAPACK backends\r
\r
3. SUBMODULE TAXONOMY:\r
--------------------------------------------------------------------------------\r
Submodule               | Description & Main Classes\r
------------------------|-------------------------------------------------------\r
sklearn.preprocessing   | StandardScaler, MinMaxScaler, OneHotEncoder, RobustScaler\r
sklearn.model_selection | train_test_split, cross_val_score, KFold, GridSearchCV\r
sklearn.linear_model    | LinearRegression, LogisticRegression, Ridge, Lasso\r
sklearn.neighbors       | KNeighborsClassifier, NearestNeighbors\r
sklearn.tree            | DecisionTreeClassifier, DecisionTreeRegressor\r
sklearn.ensemble        | RandomForestClassifier, GradientBoostingClassifier\r
sklearn.cluster         | KMeans, DBSCAN, AgglomerativeClustering\r
sklearn.metrics         | accuracy_score, precision_score, r2_score, confusion_matrix\r
sklearn.pipeline        | Pipeline, make_pipeline\r
`,d=[{id:1,question:"What is the official package name to install Scikit-learn via pip from PyPI?",options:["pip install scikit-learn","pip install py-ml-learn","pip install sklearn-engine","pip install statistical-learn"],correctAnswer:0,explanation:"`pip install scikit-learn` is the official package name on PyPI (although you import it in Python as `import sklearn`)."},{id:2,question:"Why should you explicitly import submodules (e.g. `from sklearn.tree import DecisionTreeClassifier`) instead of just `import sklearn`?",options:["Because Scikit-learn uses lazy submodule loading and does not eagerly load heavy algorithm subpackages upon `import sklearn`","Because Python will delete the code","Because DecisionTreeClassifier is a C++ executable","There is no difference"],correctAnswer:0,explanation:"Scikit-learn does not import all its algorithms eagerly into the top-level namespace to keep initialization fast and light."},{id:3,question:"Which dependency package handles parallel multiprocessing execution (e.g., `n_jobs=-1`) in Scikit-learn?",options:["joblib","pygame","django","flask"],correctAnswer:0,explanation:"`joblib` is Scikit-learn's lightweight pipelining and multi-core CPU parallelization backend."},{id:4,question:"Which utility function prints full system information and dependency versions for debugging and reproducible ML environments?",options:["sklearn.show_versions()","sklearn.debug_info()","sklearn.print_all()","sklearn.system_dump()"],correctAnswer:0,explanation:"`sklearn.show_versions()` outputs an exhaustive system diagnostic table including Python, BLAS, NumPy, SciPy, and compiler versions."}],C=[{name:"sklearn.preprocessing",role:"Scalers (StandardScaler, MinMaxScaler) & Encoders (OneHotEncoder)",color:"#38bdf8"},{name:"sklearn.model_selection",role:"Dataset splitting (train_test_split) & Cross-validation (KFold, GridSearchCV)",color:"#818cf8"},{name:"sklearn.linear_model",role:"LinearRegression, Ridge, Lasso, LogisticRegression",color:"#34d399"},{name:"sklearn.tree",role:"DecisionTreeClassifier, DecisionTreeRegressor & Tree visualizers",color:"#f59e0b"},{name:"sklearn.ensemble",role:"RandomForestClassifier, GradientBoostingClassifier, VotingClassifier",color:"#ec4899"},{name:"sklearn.metrics",role:"accuracy_score, confusion_matrix, classification_report, r2_score",color:"#a855f7"}];function W(){const[a,T]=n.useState("interactive"),[p,A]=n.useState(0),[i,u]=n.useState(!1),[b,P]=n.useState("pip"),[h,I]=n.useState(C[0]),[m,g]=n.useState({}),[l,f]=n.useState(!1),x=[{name:"01_pip_install_sklearn.py",code:z},{name:"02_import_submodules.py",code:H},{name:"03_system_check_and_show_versions.py",code:G}],k=s=>{navigator.clipboard.writeText(s),u(!0),setTimeout(()=>u(!1),2e3)},L=(s,r)=>{l||g(t=>({...t,[s]:r}))},E=()=>{let s=0;return d.forEach(r=>{m[r.id]===r.correctAnswer&&s++}),s},D={pip:"$ pip install -U scikit-learn",conda:"$ conda install -c conda-forge scikit-learn",poetry:"$ poetry add scikit-learn",pipenv:"$ pipenv install scikit-learn"};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(R,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 1"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Installing and Importing Scikit-Learn"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Set up your production environment. Master explicit submodule loading, core numerical dependencies (Joblib, SciPy, OpenMP), and diagnostic tools."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Setup Simulator & Submodules",icon:O},{id:"code",label:"Python Code Lab",icon:B},{id:"notes",label:"Revision Notes",icon:y},{id:"quiz",label:"Knowledge Check",icon:N}].map(s=>{const r=s.icon,t=a===s.id;return e.jsxs("button",{onClick:()=>T(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${t?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(r,{className:"w-4 h-4"}),s.label]},s.id)})})]}),a==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(U,{className:"w-4 h-4"}),e.jsx("span",{children:"Package Installation"})]}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["pip","conda","poetry","pipenv"].map(s=>e.jsx("button",{onClick:()=>P(s),className:`px-3 py-2 rounded-lg text-xs font-mono uppercase transition-all ${b===s?"bg-blue-600 text-white border border-blue-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:s},s))}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5 pb-2 border-b border-slate-800 text-slate-500 text-[10px] font-mono",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"}),e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"}),e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"}),e.jsx("span",{className:"ml-2 text-slate-400",children:"terminal execution"})]}),e.jsx("div",{className:"font-mono text-xs text-emerald-400",children:D[b]}),e.jsx("div",{className:"text-[11px] text-slate-500 font-mono",children:"Successfully installed scikit-learn-1.4.1 scipy joblib threadpoolctl"})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 font-mono text-xs text-slate-300",children:[e.jsx("div",{className:"text-blue-400 font-semibold text-[11px]",children:"# Explicit Import:"}),e.jsxs("div",{className:"text-emerald-300",children:["from ",h.name," import *"]}),e.jsx("div",{className:"text-slate-500 text-[11px] pt-1",children:"# Fast lazy loading without importing all algorithms!"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx($,{className:"w-4 h-4 text-blue-400"}),"Scikit-Learn Submodule Directory Tree"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"6 Core Packages"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:C.map(s=>{const r=h.name===s.name;return e.jsxs("div",{onClick:()=>I(s),className:`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${r?"bg-slate-950 border-blue-500 shadow-md":"bg-slate-950/60 border-slate-800 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-mono text-xs font-bold text-white",children:s.name}),e.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:s.color}})]}),e.jsx("p",{className:"text-xs text-slate-400 mt-2 leading-relaxed",children:s.role})]},s.name)})}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(K,{className:"w-5 h-5 text-blue-400"}),e.jsxs("div",{children:[e.jsxs("div",{className:"text-xs font-semibold text-white",children:["Diagnostic Tool: ",e.jsx("span",{className:"font-mono text-blue-400",children:"sklearn.show_versions()"})]}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Verifies LAPACK/BLAS backend acceleration and CPU thread pool bindings."})]})]}),e.jsx("div",{className:"hidden sm:block text-xs font-mono text-emerald-400",children:"Ready ✓"})]})]})]}),a==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:x.map((s,r)=>e.jsx("button",{onClick:()=>A(r),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${p===r?"bg-blue-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:s.name},s.name))}),e.jsxs("button",{onClick:()=>k(x[p].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[i?e.jsx(S,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),i?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed max-h-[480px]",children:x[p].code})})]}),a==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-sm",children:[e.jsx(y,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 1 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>k(w),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[i?e.jsx(S,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),i?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:w})]}),a==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-sm",children:[e.jsx(N,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 1 Knowledge Assessment (4 Questions)"})]}),l&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold",children:["Score: ",E()," / ",d.length]})]}),e.jsx("div",{className:"space-y-6",children:d.map((s,r)=>{const t=m[s.id],v=t===s.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[r+1,". ",s.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:s.options.map((M,o)=>{const j=t===o;let c="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return l?o===s.correctAnswer?c="bg-emerald-950/70 border-emerald-500 text-emerald-300":j&&(c="bg-rose-950/70 border-rose-500 text-rose-300"):j&&(c="bg-blue-600/30 border-blue-500 text-blue-200"),e.jsx("button",{onClick:()=>L(s.id,o),className:`p-3 rounded-lg border text-left text-xs transition-all ${c}`,children:M},o)})}),l&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${v?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:v?"✓ Correct: ":"✗ Incorrect: "}),s.explanation]})]},s.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{g({}),f(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>f(!0),disabled:Object.keys(m).length<d.length,className:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{W as default};
