import{b as t,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as _}from"./PythonFileLoader-DUNJ9gwR.js";import{F as N}from"./FAQTemplate-D_90hN4m.js";import{P as w}from"./PlainTextPrint-yt10TRX1.js";import{T as v}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const P=`"""\r
01_installing_and_verifying_pandas.py\r
=====================================\r
Topic: Installing, Importing, and Verifying Pandas & its Dependencies\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import sys\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("PANDAS INSTALLATION & RUNTIME ENVIRONMENT VERIFICATION")\r
    print("=" * 70)\r
\r
    # 1. Installation Commands Reference:\r
    # Terminal (pip)  : pip install pandas\r
    # Terminal (conda): conda install pandas\r
    # High Performance: pip install "pandas[performance,excel,parquet]"\r
\r
    # 2. Checking Pandas & Python runtime versions\r
    print(f"Python Runtime Version : {sys.version.split()[0]}")\r
    print(f"Pandas Library Version : {pd.__version__}")\r
    print(f"NumPy Dependency Version: {np.__version__}")\r
\r
    # 3. Simple DataFrame sanity check\r
    df_test = pd.DataFrame({\r
        "Student": ["Debangshu", "Susmita"],\r
        "Course": ["Machine Learning", "Data Science"],\r
        "Center": ["Barrackpore", "Barrackpore"]\r
    })\r
    print("\\nSanity Check DataFrame Creation:")\r
    print(df_test)\r
    print(f"\\nPandas is fully operational in this Python environment!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
02_import_conventions_and_namespaces.py\r
========================================\r
Topic: Standard Import Conventions, Namespaces, and Backend Accelerators\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("PANDAS IMPORT CONVENTIONS & OPTIONAL ACCELERATORS")\r
    print("=" * 70)\r
\r
    # 1. Standard Community Import Convention (PEP 8)\r
    # ALWAYS use: import pandas as pd\r
    # NEVER use: from pandas import * (Pollutes global namespace and shadows built-ins)\r
    print("Standard import alias: 'import pandas as pd'")\r
\r
    # 2. Key Sub-modules & Utilities\r
    print("\\nKey Pandas Core Namespaces:")\r
    print("  pd.Series       :", pd.Series)\r
    print("  pd.DataFrame    :", pd.DataFrame)\r
    print("  pd.read_csv     :", pd.read_csv)\r
    print("  pd.date_range   :", pd.date_range)\r
    print("  pd.concat       :", pd.concat)\r
    print("  pd.to_datetime  :", pd.to_datetime)\r
\r
    # 3. Checking Optional Accelerators (PyArrow, FastParquet)\r
    # Pandas 2.0+ supports PyArrow memory backend for 10x faster string processing\r
    has_pyarrow = False\r
    try:\r
        import pyarrow\r
        has_pyarrow = True\r
        print(f"\\n[OPTIONAL ENGINE] PyArrow is installed (v{pyarrow.__version__}). PyArrow backend available!")\r
    except ImportError:\r
        print("\\n[OPTIONAL ENGINE] PyArrow is not installed (Standard NumPy backend in use).")\r
\r
    # Creating a sample DateRange Series\r
    dates = pd.date_range(start="2026-09-01", periods=5, freq="D")\r
    df_schedule = pd.DataFrame({\r
        "Session_Date": dates,\r
        "Topic": ["Pandas Intro", "Series/DF", "CSV Reading", "Indexing", "Filtering"]\r
    })\r
    print("\\nSample Pandas DateRange DataFrame:")\r
    print(df_schedule)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
03_pandas_environment_diagnostics.py\r
====================================\r
Topic: Configuring Pandas Global Display Options (pd.set_option) for ML EDA\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("CONFIGURING PANDAS DISPLAY OPTIONS FOR MACHINE LEARNING")\r
    print("=" * 70)\r
\r
    # 1. Inspecting Default Options\r
    print("Default Display Options:")\r
    print(f"  display.max_rows    : {pd.get_option('display.max_rows')}")\r
    print(f"  display.max_columns : {pd.get_option('display.max_columns')}")\r
    print(f"  display.precision   : {pd.get_option('display.precision')}")\r
\r
    # 2. Customizing for ML Feature Engineering:\r
    # Set to show all columns and round floats to 2 decimal places\r
    pd.set_option("display.max_columns", 20)\r
    pd.set_option("display.max_rows", 10)\r
    pd.set_option("display.precision", 2)\r
    pd.set_option("display.width", 1000)\r
\r
    print("\\nCustomized Display Options for EDA:")\r
    print(f"  display.max_columns : {pd.get_option('display.max_columns')}")\r
    print(f"  display.precision   : {pd.get_option('display.precision')}")\r
\r
    # 3. Create a wide mock DataFrame (15 features) to test wide display\r
    feature_names = [f"Feature_{i}" for i in range(1, 11)]\r
    data = np.random.randn(5, 10)\r
    df_wide = pd.DataFrame(data, columns=feature_names)\r
\r
    print("\\nWide Feature Matrix Display:")\r
    print(df_wide)\r
\r
    # 4. Resetting options to default\r
    pd.reset_option("all")\r
    print("\\nReset all display options back to defaults.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,A=`========================================================================\r
TOPIC 1 NOTE: INSTALLING AND IMPORTING PANDAS\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. INSTALLATION METHODS\r
-----------------------\r
- Standard pip installer:\r
  \`pip install pandas\`\r
- Conda package manager (Anaconda / Miniconda):\r
  \`conda install -c conda-forge pandas\`\r
- Bundle with recommended acceleration and I/O engines:\r
  \`pip install "pandas[performance,excel,parquet]"\`\r
  (Includes openpyxl for Excel, pyarrow/fastparquet for Parquet, numba for JIT compiling custom apply functions).\r
\r
2. IMPORT CONVENTION & BEST PRACTICES\r
-------------------------------------\r
- Standard PEP 8 Alias:\r
  \`import pandas as pd\`\r
- Why alias as \`pd\`?\r
  It is the globally recognized convention across GitHub, Kaggle, and production machine learning teams.\r
- Anti-Pattern:\r
  \`from pandas import *\` -> Pollutes the global namespace and causes name collisions with Python built-ins like \`Series\`, \`concat\`, etc.\r
\r
3. PANDAS RUNTIME CONFIGURATION (pd.set_option)\r
-----------------------------------------------\r
- Useful display options during Exploratory Data Analysis (EDA):\r
  * \`pd.set_option('display.max_columns', None)\`: Never truncate columns with '...'.\r
  * \`pd.set_option('display.max_rows', 50)\`: Sets max rows before truncation.\r
  * \`pd.set_option('display.precision', 2)\`: Controls floating-point print decimals.\r
  * \`pd.set_option('display.float_format', '{:.2f}'.format)\`: Formats all floats without scientific notation.\r
  * \`pd.reset_option('all')\`: Restores default terminal settings.\r
\r
4. PANDAS 2.0+ PYARROW BACKEND\r
------------------------------\r
- Starting from Pandas 2.0, you can use PyArrow as an underlying data type backend (\`dtype_backend='pyarrow'\`).\r
- Benefits: Up to 10x faster string operations, true nullable data types (e.g. integer columns with nulls without casting to float64), and zero-copy interoperability with Apache Arrow ecosystems.\r
`,I=[{id:1,question:"What is the universal, PEP 8 recommended import statement for Pandas in Python?",options:["import pandas as pd","from pandas import *","import pandas as p","require('pandas')"],correctAnswer:0,explanation:"`import pandas as pd` is the standard community convention across all data science repositories, tutorials, and production ML pipelines."},{id:2,question:"How can you verify the installed version of Pandas in a running Python script or Jupyter Notebook?",options:["pd.__version__ or pd.show_versions()","pd.version()","pd.get_info()","pandas.check()"],correctAnswer:0,explanation:"`pd.__version__` prints the version string (e.g. '2.2.1'), and `pd.show_versions()` prints an exhaustive diagnostic report of all underlying C-extensions and I/O engines."},{id:3,question:"When working with datasets containing over 50 columns, Pandas by default truncates the display with ellipses (...). How can you configure Pandas to display all columns in your console?",options:["pd.set_option('display.max_columns', None)","pd.expand_all_columns()","pd.options.show_everything = True","df.columns.display = 'all'"],correctAnswer:0,explanation:"`pd.set_option('display.max_columns', None)` or setting it to a large integer tells Pandas not to truncate columns horizontally during print operations."},{id:4,question:"What additional dependency is required to enable reading and writing modern `.xlsx` Excel files via `pd.read_excel()` and `df.to_excel()`?",options:["openpyxl (or xlsxwriter / calamine)","pygame","flask","sqlite3"],correctAnswer:0,explanation:"Pandas relies on dedicated Excel parsing engines like `openpyxl` (or `calamine` / `xlsxwriter`) to decode and write `.xlsx` spreadsheet files."},{id:5,question:"Why should `from pandas import *` be avoided in production Python applications?",options:["It causes syntax errors in Python 3.","It pollutes the module's global namespace, shadows built-in identifiers, and makes it difficult to trace where functions and classes originate.","It runs 10 times slower than `import pandas as pd`.","It is only allowed inside function definitions."],correctAnswer:1,explanation:"Wildcard imports (`from module import *`) pollute namespaces, create subtle naming collision bugs, and violate PEP 8 guidelines."}],o=[{id:"part1",fileName:"01_installing_and_verifying_pandas.py",title:"1. Installation & Environment Verification",badge:"Install & Verify",code:P,summary:"Demonstrates pip/conda installation commands, checking pd.__version__, and running a sanity check DataFrame."},{id:"part2",fileName:"02_import_conventions_and_namespaces.py",title:"2. Import Conventions & PyArrow Backend",badge:"PEP 8 & PyArrow",code:j,summary:"Explains standard alias 'import pandas as pd', key core namespaces, and optional PyArrow engine capabilities."},{id:"part3",fileName:"03_pandas_environment_diagnostics.py",title:"3. Display Configuration (pd.set_option)",badge:"Display Options",code:S,summary:"Configures max columns, max rows, and precision settings for optimal exploratory data analysis in ML."}],l=[{id:"pip_standard",manager:"pip (Standard)",cmd:"pip install pandas",desc:"Installs core Pandas along with required NumPy, python-dateutil, and pytz dependencies."},{id:"conda_forge",manager:"Conda (Anaconda / Miniconda)",cmd:"conda install -c conda-forge pandas",desc:"Installs pre-compiled binaries optimized with Intel MKL or OpenBLAS matrix libraries."},{id:"pip_full",manager:"pip (Full High-Performance Bundle)",cmd:'pip install "pandas[performance,excel,parquet]"',desc:"Includes openpyxl (Excel I/O), pyarrow (Arrow memory backend), and numba (JIT apply acceleration)."}],R=()=>{const[s,x]=t.useState("install_explorer"),[d,u]=t.useState("part1"),[p,g]=t.useState("pip_standard"),[r,h]=t.useState(10),[a,f]=t.useState(2),[y,c]=t.useState(!1),i=o.find(n=>n.id===d)||o[0],m=l.find(n=>n.id===p)||l[0],b=()=>{navigator.clipboard.writeText(m.cmd),c(!0),setTimeout(()=>c(!1),2e3)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-teal-900/60 via-slate-900 to-indigo-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Module 009_002 • Pandas Essentials"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/40",children:"Topic 1 • Installation & Setup"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-200 via-cyan-100 to-indigo-300 bg-clip-text text-transparent",children:"Installing & Importing Pandas"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Set up a high-performance Pandas environment, master standard ",e.jsx("code",{className:"text-teal-300 font-mono",children:"import pandas as pd"})," conventions, configure global EDA display options, and unlock PyArrow acceleration."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"install_explorer",label:"Installation & Setup Hub",icon:"📦"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(n=>e.jsxs("button",{onClick:()=>x(n.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s===n.id?"bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:n.icon}),n.label]},n.id))})]}),s==="install_explorer"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h3",{className:"text-base font-bold text-teal-300 flex items-center justify-between",children:[e.jsx("span",{children:"1. Choose Package Manager / Installation Flavor"}),e.jsx("span",{className:"text-xs px-2.5 py-0.5 bg-slate-800 text-slate-400 font-mono rounded",children:"Terminal Commands"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:l.map(n=>e.jsxs("button",{onClick:()=>g(n.id),className:`p-4 rounded-xl border text-left transition ${p===n.id?"bg-teal-500/20 border-teal-400 text-teal-200 shadow-md shadow-teal-500/10":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-slate-200",children:n.manager}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1 line-clamp-2",children:n.desc})]},n.id))}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"font-mono text-xs text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{className:"text-slate-600 select-none",children:"$"}),e.jsx("span",{children:m.cmd})]}),e.jsx("button",{onClick:b,className:"px-3 py-1.5 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 rounded-lg text-xs font-semibold transition",children:y?"✓ Copied!":"📋 Copy Command"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h4",{className:"text-base font-bold text-slate-200",children:["2. Live Display Config: ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pd.set_option()"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-1.5 text-xs",children:[e.jsx("span",{className:"text-slate-300 font-semibold font-mono",children:"display.max_columns:"}),e.jsx("span",{className:"text-teal-400 font-mono font-bold",children:r===20?"None (Show All)":r})]}),e.jsx("input",{type:"range",min:"2",max:"20",step:"2",value:r,onChange:n=>h(Number(n.target.value)),className:"w-full accent-teal-500 h-2 bg-slate-800 rounded-lg cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-1.5 text-xs",children:[e.jsx("span",{className:"text-slate-300 font-semibold font-mono",children:"display.precision:"}),e.jsxs("span",{className:"text-cyan-400 font-mono font-bold",children:[a," decimal places"]})]}),e.jsx("input",{type:"range",min:"1",max:"6",value:a,onChange:n=>f(Number(n.target.value)),className:"w-full accent-cyan-500 h-2 bg-slate-800 rounded-lg cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("p",{className:"text-slate-500",children:"# Generated Python Configuration:"}),e.jsxs("p",{className:"text-teal-300",children:["pd.set_option('display.max_columns', ",r===20?"None":r,")"]}),e.jsxs("p",{className:"text-cyan-300",children:["pd.set_option('display.precision', ",a,")"]})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-base font-bold text-slate-200 mb-3",children:"Terminal Output Preview (Simulated `df.head()`)"}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto space-y-2",children:[e.jsx("p",{className:"text-slate-500",children:"# DataFrame print preview:"}),e.jsxs("div",{className:"text-emerald-400",children:["    Student     Score    Percentile",e.jsx("br",{}),"0  Debangshu  ",88.12345.toFixed(a),"     ",92.4567.toFixed(a),e.jsx("br",{}),"1  Susmita    ",94.98765.toFixed(a),"     ",98.1234.toFixed(a),e.jsx("br",{}),"2  Swadeep    ",72.44444.toFixed(a),"     ",75.8912.toFixed(a)]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-teal-950/30 border border-teal-900/60 rounded-xl text-xs text-teal-200",children:["💡 Tip: Use ",e.jsx("code",{className:"text-white font-mono",children:"pd.reset_option('all')"})," to restore standard defaults anytime!"]})]})]})]}),s==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:o.map(n=>e.jsxs("button",{onClick:()=>u(n.id),className:`p-4 rounded-xl border text-left transition-all ${d===n.id?"bg-teal-950/40 border-teal-500 shadow-lg shadow-teal-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30",children:n.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:n.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:n.summary})]},n.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:i.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:i.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Setup & Environment Suite"})]}),e.jsx(_,{fileModule:i.code,title:i.fileName})]})]}),s==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(v,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"Setting up a clean Python virtual environment with Pandas and its optional accelerators (like PyArrow and openpyxl) is step one for every data science project. Always stick to the standard 'import pandas as pd' alias to keep your codebase consistent and Kaggle/industry standard."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(w,{content:A})]})]}),s==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(N,{questions:I})})]})};export{R as default};
