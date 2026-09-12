import{b as t,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{ch as $,S as W,k as B,B as j,aa as S,r as R,bg as H,j as V,f as w,g as _}from"./vendor-icons-ri6cs58t.js";const z=`"""\r
01_pip_install_seaborn.py\r
Title: Installing Seaborn and Managing Dependencies\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import sys\r
import subprocess\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 01: Installation & Environment Setup")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Swadeep")\r
    print("=" * 65)\r
\r
    print("\\n📦 Recommended Terminal Commands for Python/Jupyter environments:")\r
    print("   $ pip install seaborn")\r
    print("   or in Conda:")\r
    print("   $ conda install seaborn -c conda-forge")\r
\r
    # In modern virtual environments (pip / conda), seaborn brings:\r
    # - numpy\r
    # - pandas\r
    # - matplotlib\r
    # - scipy\r
    print("\\n🔗 Core Dependencies automatically resolved by Seaborn:")\r
    deps = ["matplotlib", "pandas", "numpy", "scipy"]\r
    for d in deps:\r
        print(f"   [+] {d}")\r
\r
    print("\\n💡 Verification Check:")\r
    try:\r
        import seaborn as sns\r
        print(f"   ✓ Seaborn is successfully installed! Version: {sns.__version__}")\r
    except ImportError:\r
        print("   ✗ Seaborn is not installed in the current environment.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,F=`"""\r
02_standard_imports.py\r
Title: Standard Data Science Import Conventions\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import matplotlib.pyplot as plt\r
import seaborn as sns\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 02: The Standard 4-Horsemen Imports")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # In every Machine Learning project or Kaggle notebook,\r
    # the following 4 lines are virtually ubiquitous:\r
    print("""\r
    # --- Standard ML Data Science Visualization Suite ---\r
    import numpy as np\r
    import pandas as pd\r
    import matplotlib.pyplot as plt\r
    import seaborn as sns\r
    """)\r
\r
    # Alias convention:\r
    # seaborn -> sns (named after fictional TV character Samuel Norman Seaborn from The West Wing)\r
    print("🔍 Why is seaborn aliased as 'sns'?")\r
    print("   Trivia: Named playfully after 'Sam Norman Seaborn' from the TV series 'The West Wing'.")\r
\r
    # Applying standard theme immediately after import\r
    sns.set_theme(style="whitegrid", palette="tab10")\r
    print("   ✓ Set global seaborn theme with sns.set_theme(style='whitegrid').")\r
\r
if __name__ == "__main__":\r
    main()\r
`,K=`"""\r
03_version_and_deps_check.py\r
Title: Inspecting Seaborn Version, Configuration & Backend\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 03: Environment & Dependency Diagnostics")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    print(f"📦 Python Environment Library Versions:")\r
    print(f"   • Seaborn    : {sns.__version__}")\r
    print(f"   • Matplotlib  : {matplotlib.__version__}")\r
    print(f"   • Pandas      : {pd.__version__}")\r
    print(f"   • NumPy       : {np.__version__}")\r
\r
    # Note on Seaborn >= 0.12 new objects interface\r
    print("\\n💡 Version Note: Seaborn >= 0.12 introduced the new \`seaborn.objects\` declarative API (so.Plot).")\r
    print("   Both the classic functional API (sns.scatterplot) and objects API coexist peacefully!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,k=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 1 - INSTALLING AND IMPORTING SEABORN\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. INSTALLATION METHODS:\r
--------------------------------------------------------------------------------\r
- Standard Pip Installation:\r
    $ pip install seaborn\r
- Anaconda / Miniconda Installation:\r
    $ conda install seaborn -c conda-forge\r
- Installing in Jupyter Notebook cell directly:\r
    !pip install seaborn\r
\r
2. DEPENDENCY ECOSYSTEM:\r
--------------------------------------------------------------------------------\r
Seaborn depends on four foundational numerical/scientific packages:\r
1. NumPy (>= 1.17) - Multi-dimensional array calculations\r
2. SciPy (>= 1.3) - Kernel density estimations & statistical fits\r
3. Pandas (>= 0.25) - DataFrame manipulation and index handling\r
4. Matplotlib (>= 3.1) - The low-level rendering canvas and graphics backend\r
\r
3. IMPORT CONVENTIONS:\r
--------------------------------------------------------------------------------\r
In standard data science pipelines:\r
    import numpy as np\r
    import pandas as pd\r
    import matplotlib.pyplot as plt\r
    import seaborn as sns\r
\r
Why 'sns'?\r
Named as an easter egg after Samuel Norman Seaborn (a character in 'The West Wing').\r
\r
4. MODERN CONFIGURATION (Seaborn >= 0.11):\r
--------------------------------------------------------------------------------\r
Use \`sns.set_theme()\` instead of the older deprecated \`sns.set()\`:\r
    sns.set_theme(\r
        context="notebook",  # 'paper', 'notebook', 'talk', 'poster'\r
        style="darkgrid",    # 'darkgrid', 'whitegrid', 'dark', 'white', 'ticks'\r
        palette="deep",      # 'deep', 'muted', 'pastel', 'bright', 'dark', 'colorblind'\r
        font="sans-serif"\r
    )\r
`,c=[{id:1,question:"What is the standard terminal command to install Seaborn using pip?",options:["pip install py-seaborn","pip install seaborn","pip install statistical-seaborn","pip download sns"],correctAnswer:1,explanation:"`pip install seaborn` is the standard command to install Seaborn from PyPI."},{id:2,question:"What is the universal alias convention for importing Seaborn in Python?",options:["import seaborn as sb","import seaborn as sea","import seaborn as sns","import seaborn as sn"],correctAnswer:2,explanation:"`import seaborn as sns` is the universally accepted community standard convention."},{id:3,question:"Which modern function replaced the older deprecated `sns.set()` to configure global aesthetics?",options:["sns.apply_config()","sns.set_theme()","sns.configure_all()","sns.init_styles()"],correctAnswer:1,explanation:"`sns.set_theme()` is the modern API function introduced to configure global themes, styles, and color palettes."},{id:4,question:"Which of the following is NOT an automatic core dependency of Seaborn?",options:["pandas","matplotlib","scipy","django"],correctAnswer:3,explanation:"Django is a web framework; Seaborn depends on NumPy, SciPy, Pandas, and Matplotlib."}],C=[{name:"numpy",version:">= 1.17",role:"High-performance N-dimensional array processing and linear algebra",color:"#38bdf8"},{name:"scipy",version:">= 1.3",role:"Kernel density estimations, statistical fits, and matrix math",color:"#818cf8"},{name:"pandas",version:">= 0.25",role:"Tabular DataFrame ingestion, indexing, and groupby operations",color:"#34d399"},{name:"matplotlib",version:">= 3.1",role:"Underlying graphical canvas, rendering backend, and Figure/Axes primitives",color:"#f472b6"}];function q(){const[a,T]=t.useState("interactive"),[p,I]=t.useState(0),[o,x]=t.useState(!1),[u,A]=t.useState("pip"),[Q,U]=t.useState("notebook"),[P,G]=t.useState("darkgrid"),[h,E]=t.useState(C[0]),[m,g]=t.useState({}),[i,f]=t.useState(!1),b=[{name:"01_pip_install_seaborn.py",code:z},{name:"02_standard_imports.py",code:F},{name:"03_version_and_deps_check.py",code:K}],y=n=>{navigator.clipboard.writeText(n),x(!0),setTimeout(()=>x(!1),2e3)},M=(n,s)=>{i||g(r=>({...r,[n]:s}))},D=()=>{let n=0;return c.forEach(s=>{m[s.id]===s.correctAnswer&&n++}),n},O={pip:"$ pip install seaborn",conda:"$ conda install seaborn -c conda-forge",poetry:"$ poetry add seaborn",pipenv:"$ pipenv install seaborn"};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx($,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 1"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Installing & Importing Seaborn"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Set up your Python data science environment. Understand pip/conda packages, dependency tree resolution, and modern import configurations."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Setup Simulator & Stack",icon:W},{id:"code",label:"Python Code Lab",icon:B},{id:"notes",label:"Revision Notes",icon:j},{id:"quiz",label:"Knowledge Check",icon:S}].map(n=>{const s=n.icon,r=a===n.id;return e.jsxs("button",{onClick:()=>T(n.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${r?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(s,{className:"w-4 h-4"}),n.label]},n.id)})})]}),a==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(R,{className:"w-4 h-4"}),e.jsx("span",{children:"Package Manager Selection"})]}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["pip","conda","poetry","pipenv"].map(n=>e.jsx("button",{onClick:()=>A(n),className:`px-3 py-2 rounded-lg text-xs font-mono uppercase transition-all ${u===n?"bg-blue-600 text-white border border-blue-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:n},n))}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5 pb-2 border-b border-slate-800 text-slate-500 text-[10px] font-mono",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"}),e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"}),e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"}),e.jsx("span",{className:"ml-2 text-slate-400",children:"bash terminal"})]}),e.jsx("div",{className:"font-mono text-xs text-emerald-400",children:O[u]}),e.jsx("div",{className:"text-[11px] text-slate-500 font-mono",children:"Successfully installed seaborn-0.13.2 pandas-2.2.0 matplotlib-3.8.3"})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 font-mono text-xs text-slate-300",children:[e.jsx("div",{className:"text-blue-400 font-semibold text-[11px]",children:"# Python Import Template:"}),e.jsx("div",{className:"text-slate-400",children:"import numpy as np"}),e.jsx("div",{className:"text-slate-400",children:"import pandas as pd"}),e.jsx("div",{className:"text-slate-400",children:"import matplotlib.pyplot as plt"}),e.jsx("div",{className:"text-cyan-300 font-bold",children:"import seaborn as sns"}),e.jsxs("div",{className:"pt-2 text-indigo-300",children:['sns.set_theme(style="',P,'")']})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(H,{className:"w-4 h-4 text-blue-400"}),"Seaborn Dependency Architecture Tree"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Layer 1 Ecosystem"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:C.map(n=>{const s=h.name===n.name;return e.jsxs("div",{onClick:()=>E(n),className:`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${s?"bg-slate-950 border-blue-500 shadow-md shadow-blue-500/10":"bg-slate-950/60 border-slate-800 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:n.color}}),e.jsx("span",{className:"font-mono text-sm font-bold text-white",children:n.name})]}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700",children:n.version})]}),e.jsx("p",{className:"text-xs text-slate-400 mt-2 leading-relaxed",children:n.role})]},n.name)})}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(V,{className:"w-5 h-5 text-blue-400"}),e.jsxs("div",{children:[e.jsxs("div",{className:"text-xs font-semibold text-white",children:["Integration Focus: ",e.jsx("span",{className:"font-mono text-blue-400",children:h.name})]}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Seaborn delegates data management to Pandas and visual layout rendering to Matplotlib."})]})]}),e.jsx("div",{className:"hidden sm:block text-xs font-mono text-emerald-400",children:"Status: Ready ✓"})]})]})]}),a==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:b.map((n,s)=>e.jsx("button",{onClick:()=>I(s),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${p===s?"bg-blue-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:n.name},n.name))}),e.jsxs("button",{onClick:()=>y(b[p].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[o?e.jsx(w,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),o?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed max-h-[480px]",children:b[p].code})})]}),a==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-sm",children:[e.jsx(j,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 1 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>y(k),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[o?e.jsx(w,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),o?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:k})]}),a==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-sm",children:[e.jsx(S,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 1 Knowledge Assessment (4 Questions)"})]}),i&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold",children:["Score: ",D()," / ",c.length]})]}),e.jsx("div",{className:"space-y-6",children:c.map((n,s)=>{const r=m[n.id],N=r===n.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[s+1,". ",n.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:n.options.map((L,l)=>{const v=r===l;let d="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return i?l===n.correctAnswer?d="bg-emerald-950/70 border-emerald-500 text-emerald-300":v&&(d="bg-rose-950/70 border-rose-500 text-rose-300"):v&&(d="bg-blue-600/30 border-blue-500 text-blue-200"),e.jsx("button",{onClick:()=>M(n.id,l),className:`p-3 rounded-lg border text-left text-xs transition-all ${d}`,children:L},l)})}),i&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${N?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:N?"✓ Correct: ":"✗ Incorrect: "}),n.explanation]})]},n.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{g({}),f(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>f(!0),disabled:Object.keys(m).length<c.length,className:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{q as default};
