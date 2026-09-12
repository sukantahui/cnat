import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as c}from"./PythonFileLoader-CiS1GfkF.js";import{F as p}from"./FAQTemplate-D_90hN4m.js";import{P as m}from"./PlainTextPrint-yt10TRX1.js";import{T as u}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const h=`"""\r
================================================================================\r
Topic 1 - Script 01: Verifying NumPy Installation and Hardware Acceleration\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Checking installed NumPy version (__version__)\r
- Inspecting installation path and file location\r
- Checking BLAS / LAPACK linear algebra acceleration backend (np.show_config())\r
================================================================================\r
"""\r
\r
import sys\r
\r
def verify_numpy():\r
    print("=" * 60)\r
    print("STEP 1: Importing NumPy and Inspecting Environment")\r
    print("=" * 60)\r
    \r
    try:\r
        import numpy as np\r
        print(f"[SUCCESS] NumPy imported successfully as 'np'!")\r
        print(f"NumPy Version      : {np.__version__}")\r
        print(f"Python Executable  : {sys.executable}")\r
        print(f"NumPy Module Path  : {np.__file__}")\r
    except ImportError as e:\r
        print(f"[ERROR] NumPy is not installed: {e}")\r
        print("Tip: Run 'pip install numpy' in your terminal.")\r
        return\r
\r
    print("\\n" + "=" * 60)\r
    print("STEP 2: Inspecting Linear Algebra Acceleration (BLAS / LAPACK)")\r
    print("=" * 60)\r
    print("NumPy links directly to optimized Fortran/C linear algebra libraries")\r
    print("such as OpenBLAS, MKL, or Apple Accelerate.")\r
    print("-" * 60)\r
    # np.show_config() prints the underlying acceleration libraries\r
    np.show_config()\r
\r
if __name__ == "__main__":\r
    verify_numpy()\r
`,x=`"""\r
================================================================================\r
Topic 1 - Script 02: Standard Import Conventions vs Namespace Pollution\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Standard convention: \`import numpy as np\`\r
- The dangers of \`from numpy import *\` (Namespace collision with built-in sum, min, max, all, any)\r
- Performance and readability implications in collaborative ML projects\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_import_best_practices():\r
    print("=" * 65)\r
    print("DEMO: The Universal Standard - 'import numpy as np'")\r
    print("=" * 65)\r
    \r
    # Standard usage\r
    arr = np.array([10, 20, 30, 40, 50])\r
    print("Array created with np.array():", arr)\r
    print("Calculated mean with np.mean():", np.mean(arr))\r
    \r
    print("\\n" + "=" * 65)\r
    print("WARNING: Why 'from numpy import *' Breaks Python Code")\r
    print("=" * 65)\r
    print("1. Python has built-in 'sum([1, 2, 3])'")\r
    print("2. NumPy has 'np.sum(arr)' which operates differently on ndarrays.")\r
    print("3. Wildcard import overrides Python's built-in sum(), min(), max(),")\r
    print("   leading to subtle type bugs when other developers read the code.")\r
    \r
    # Example comparison\r
    py_list = [1, 2, 3, 4]\r
    print("\\nBuilt-in sum(py_list):", sum(py_list), type(sum(py_list)))\r
    print("np.sum(arr):          ", np.sum(arr), type(np.sum(arr)))\r
    \r
    print("\\n[RULE OF THUMB IN BARRACKPORE LAB]:")\r
    print("Always use 'import numpy as np'. Never alias as 'num', 'np1', or use wildcard '*'.")\r
\r
if __name__ == "__main__":\r
    demonstrate_import_best_practices()\r
`,y=`"""\r
================================================================================\r
Topic 1 - Script 03: Machine Learning Stack Sanity & Compatibility Checker\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Checking seamless interoperability between NumPy and core ML stack (pandas, scipy, scikit-learn)\r
- Verifying memory buffer compatibility across libraries\r
- Running a rapid 1-second linear regression check using pure NumPy ndarrays\r
================================================================================\r
"""\r
\r
import sys\r
\r
def check_ml_stack():\r
    print("=" * 65)\r
    print("BARRACKPORE AI LAB: Full ML Stack Sanity Verification")\r
    print("=" * 65)\r
\r
    packages = ["numpy", "scipy", "pandas", "sklearn", "matplotlib"]\r
    \r
    for pkg in packages:\r
        try:\r
            mod = __import__(pkg)\r
            version = getattr(mod, "__version__", "installed")\r
            print(f"  [+] {pkg:<12} : {version}")\r
        except ImportError:\r
            print(f"  [-] {pkg:<12} : NOT INSTALLED")\r
\r
    print("\\n" + "=" * 65)\r
    print("RUNNING RAPID NUMPY ML SMOKE TEST:")\r
    print("=" * 65)\r
    \r
    import numpy as np\r
    \r
    # Generate synthetic training features X (5 students, 2 features: Study Hours, Attendance %)\r
    # and ground truth target y (Final Marks)\r
    np.random.seed(42)\r
    X = np.array([\r
        [2.5, 75.0],\r
        [4.0, 85.0],\r
        [6.5, 92.0],\r
        [1.5, 60.0],\r
        [8.0, 98.0]\r
    ])\r
    \r
    # Weights vector w (study_weight=5.0, attendance_weight=0.5)\r
    w = np.array([5.0, 0.5])\r
    bias = 20.0\r
    \r
    # Vectorized forward pass: y_pred = X @ w + b\r
    y_pred = np.dot(X, w) + bias\r
    \r
    print("Input Student Matrix X:\\n", X)\r
    print("\\nCalculated Predictions y_pred:\\n", y_pred)\r
    print("\\nSmoke test passed! NumPy linear algebra engine is fully operational.")\r
\r
if __name__ == "__main__":\r
    check_ml_stack()\r
`,b=`========================================================\r
NUMPY ESSENTIALS — TOPIC 1: INSTALLING AND IMPORTING NUMPY\r
Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
Subject: Machine Learning (BCAC701B) | Segment 9\r
========================================================\r
\r
INSTALLATION\r
------------\r
NumPy is installed via pip (Python Package Installer) or conda.\r
\r
Using pip (recommended for most students):\r
  pip install numpy\r
\r
Using conda (Anaconda/Miniconda users):\r
  conda install numpy\r
\r
Verify installation:\r
  python -c "import numpy as np; print(np.__version__)"\r
\r
Common installation environments:\r
  - Local Python (pip install numpy)\r
  - Google Colab (pre-installed, just import)\r
  - Jupyter Notebook (pip install numpy from a cell: !pip install numpy)\r
  - Anaconda Navigator (comes pre-installed)\r
  - VS Code with Python extension\r
\r
STANDARD IMPORT\r
---------------\r
The universal convention for importing NumPy is:\r
\r
  import numpy as np\r
\r
Why "np"?\r
  - Used by every tutorial, textbook, and documentation worldwide\r
  - Saves typing (np.array vs numpy.array)\r
  - Expected by the Python data science community\r
  - Pandas, Scikit-learn, Matplotlib all use "np" in examples\r
\r
YOU SHOULD NEVER:\r
  import numpy            # too verbose\r
  from numpy import *     # pollutes namespace, causes conflicts\r
  import numpy as num     # non-standard, confuses readers\r
\r
VERIFYING YOUR INSTALLATION\r
----------------------------\r
After installing, always verify:\r
\r
  import numpy as np\r
  print(np.__version__)   # e.g., 1.26.4\r
  print(np.__file__)      # path to NumPy on your system\r
\r
CHECKING FOR GPU-OPTIMIZED NumPy\r
---------------------------------\r
Standard NumPy runs on CPU only. For GPU-accelerated computation:\r
  - CuPy: GPU NumPy replacement (requires NVIDIA GPU)\r
  - JAX: Google's accelerated NumPy\r
\r
For BCA studies, standard NumPy (CPU) is sufficient.\r
\r
NAMESPACE EXPLORATION\r
---------------------\r
After import, you can explore the NumPy namespace:\r
  dir(np)          → list all attributes and functions\r
  np.lookfor("sort") → search documentation for "sort"\r
  help(np.array)   → read full docstring\r
\r
COMMON IMPORT ERRORS\r
---------------------\r
Error: ModuleNotFoundError: No module named 'numpy'\r
Fix:   Run: pip install numpy\r
\r
Error: ImportError: numpy.core.multiarray failed to import\r
Fix:   Reinstall: pip install --upgrade numpy\r
\r
Error: AttributeError: module 'numpy' has no attribute 'bool'\r
Fix:   Use np.bool_ (underscore) — np.bool was removed in NumPy 1.24\r
\r
QUICK REVISION POINTS:\r
  □ pip install numpy  (one-time installation)\r
  □ import numpy as np  (every script, every time)\r
  □ np is the universal alias — never deviate\r
  □ Verify: print(np.__version__)\r
  □ Google Colab: NumPy is pre-installed\r
  □ Never use: from numpy import *\r
\r
========================================================\r
Coder & AccoTax | www.codernaccotax.co.in\r
========================================================\r
`,f=[{question:"What is the correct pip command to install NumPy?",shortAnswer:"pip install numpy",explanation:"The standard pip command installs NumPy from the Python Package Index (PyPI). For a specific version: pip install numpy==1.26.4. To upgrade: pip install --upgrade numpy.",hint:"pip is the Python package installer.",level:"basic",codeExample:`# Run in terminal (not in Python file):
# pip install numpy`},{question:"What is the standard alias used when importing NumPy?",shortAnswer:"np — as in: import numpy as np",explanation:"The alias 'np' is universally adopted across the entire Python data science community. Every tutorial, textbook, Scikit-learn documentation, and ML framework assumes you use 'np'. Using any other alias will confuse readers and collaborators.",hint:"Two letters. Used by everyone.",level:"basic",codeExample:`import numpy as np
arr = np.array([1, 2, 3])`},{question:"How do you verify that NumPy is installed correctly?",shortAnswer:"import numpy as np; print(np.__version__)",explanation:"After installation, import NumPy and print its __version__ attribute. If this runs without error and prints a version string (e.g., '1.26.4'), NumPy is correctly installed.",hint:"Use the dunder __version__ attribute.",level:"basic",codeExample:`import numpy as np
print(np.__version__)  # e.g., 1.26.4
print(np.__file__)     # installation path`},{question:"Why should you NEVER use 'from numpy import *'?",shortAnswer:"It imports hundreds of names into your namespace, causing conflicts and making code hard to read.",explanation:"NumPy has hundreds of public names (sum, max, min, etc.) that clash with Python builtins. Wildcard import pollutes the global namespace and makes it impossible to tell which 'sum' is being called — Python's or NumPy's. It also defeats IDE auto-complete.",hint:"Think about name clashes with Python's built-in sum(), max(), min().",level:"basic",codeExample:`# BAD — don't do this:
from numpy import *
result = sum([1, 2, 3])   # which sum? Python's or NumPy's?

# GOOD:
import numpy as np
result = np.sum([1, 2, 3])`},{question:"Is NumPy pre-installed in Google Colab?",shortAnswer:"Yes — Google Colab has NumPy pre-installed. Just use import numpy as np.",explanation:"Google Colab is a cloud Jupyter notebook environment with NumPy, Pandas, Matplotlib, Scikit-learn, and TensorFlow pre-installed. No pip install is needed. Simply import numpy as np to start using it.",hint:"Colab = cloud notebook with ML libraries pre-installed.",level:"basic",codeExample:`# In Google Colab — just run this, no installation needed:
import numpy as np
print(np.__version__)`},{question:"What error do you get if NumPy is not installed, and how do you fix it?",shortAnswer:"ModuleNotFoundError: No module named 'numpy'. Fix: run pip install numpy in the terminal.",explanation:"Python raises ModuleNotFoundError when the requested package is not installed in the active Python environment. Run 'pip install numpy' in the terminal (not inside a .py file). In Jupyter notebooks, use '!pip install numpy' with the ! prefix.",hint:"ModuleNotFoundError = package not installed.",level:"basic",codeExample:`# Fix in terminal:
# pip install numpy

# Fix in Jupyter/Colab cell:
# !pip install numpy`},{question:"What conda command installs NumPy in an Anaconda environment?",shortAnswer:"conda install numpy",explanation:"Conda is the package manager for Anaconda/Miniconda. It resolves dependencies differently from pip and is preferred in scientific computing environments. 'conda install numpy' installs the MKL-optimized version for faster linear algebra.",hint:"conda is the Anaconda package manager.",level:"basic",codeExample:`# In Anaconda Prompt or terminal:
# conda install numpy
# or for a specific version:
# conda install numpy=1.26.4`},{question:"What does np.__file__ tell you?",shortAnswer:"The filesystem path to the NumPy package installation directory.",explanation:"np.__file__ returns the absolute path to the NumPy package on your system (e.g., C:\\Python311\\Lib\\site-packages\\numpy\\__init__.py on Windows). This is useful for diagnosing environment issues when you have multiple Python installations.",hint:"__file__ is a standard Python module attribute showing the module's location.",level:"intermediate",codeExample:`import numpy as np
print(np.__file__)
# e.g., /usr/local/lib/python3.11/dist-packages/numpy/__init__.py`},{question:"What is the difference between pip and conda for installing NumPy?",shortAnswer:"pip installs from PyPI without dependency solving; conda installs from conda channels with full dependency resolution and MKL optimization.",explanation:"pip is Python's default package manager and installs from PyPI. conda is Anaconda's manager that handles non-Python dependencies (like C libraries) and can install MKL (Intel Math Kernel Library) optimized NumPy which is faster for linear algebra. In most ML environments, either works. Prefer conda if using Anaconda.",hint:"conda resolves non-Python binary dependencies; pip does not.",level:"intermediate",codeExample:`# pip: from PyPI
# pip install numpy

# conda: from conda-forge or defaults channel
# conda install -c conda-forge numpy`},{question:"How do you install NumPy inside a Jupyter Notebook cell?",shortAnswer:"Use !pip install numpy (with ! prefix to run a shell command).",explanation:"In Jupyter Notebook or JupyterLab, lines starting with ! are executed as shell commands. So !pip install numpy runs pip in the terminal from within the notebook. This is useful when you cannot access the terminal directly.",hint:"! prefix in Jupyter runs terminal (shell) commands.",level:"intermediate",codeExample:`# In a Jupyter Notebook cell:
!pip install numpy

# Then in the next cell:
import numpy as np
print(np.__version__)`},{question:"What attribute would you check to see how many public names NumPy exports?",shortAnswer:"len([a for a in dir(np) if not a.startswith('_')])",explanation:"dir(np) returns all attributes including private ones (starting with _). Filtering out names starting with _ gives the public API. NumPy exports several hundred public names including array creation, math, linalg, fft, random, and testing utilities.",hint:"dir() lists all attributes of any Python object.",level:"intermediate",codeExample:`import numpy as np
public_api = [a for a in dir(np) if not a.startswith('_')]
print(len(public_api))   # ~400+
print(public_api[:10])   # first 10 names`},{question:"What is the np.lookfor() function and when would you use it?",shortAnswer:"np.lookfor('keyword') searches NumPy's documentation for functions related to a keyword.",explanation:"np.lookfor() is a documentation search tool. For example, np.lookfor('sort') lists all NumPy functions related to sorting with brief descriptions. It is useful when you know what you want to do but don't know the exact function name.",hint:"Think of it as NumPy's built-in help search engine.",level:"intermediate",codeExample:`import numpy as np
np.lookfor('sort')     # finds np.sort, np.argsort, etc.
np.lookfor('random')   # finds all random-related functions`},{question:"What is ImportError: numpy.core.multiarray failed to import, and how do you fix it?",shortAnswer:"A corrupted or incompatible NumPy installation. Fix: pip install --upgrade numpy",explanation:"This error usually occurs when NumPy's C extension modules are missing or incompatible with the Python version. The fix is to reinstall: pip install --upgrade numpy, or in severe cases, uninstall and reinstall: pip uninstall numpy && pip install numpy.",hint:"multiarray is NumPy's core C extension — it must load successfully.",level:"advanced",codeExample:`# Fix steps:
# 1. pip install --upgrade numpy
# 2. If still fails:
#    pip uninstall numpy
#    pip install numpy`},{question:"Why was np.bool deprecated and removed in NumPy 1.24?",shortAnswer:"np.bool was an alias for Python's built-in bool, which was unnecessary and caused confusion. np.bool_ is the proper NumPy scalar type.",explanation:"In NumPy < 1.20, np.bool was allowed as an alias for Python's bool. This was deprecated in 1.20 and removed in 1.24 because it shadowed the built-in bool, creating confusion. The correct NumPy boolean type is np.bool_ (with underscore), which is a proper NumPy scalar dtype.",hint:"Use np.bool_ (with underscore) — the _ distinguishes it from Python's built-in bool.",level:"advanced",codeExample:`# Old (NumPy < 1.20) — now raises AttributeError:
# arr = np.array([True, False], dtype=np.bool)  # WRONG

# Correct:
arr = np.array([True, False], dtype=np.bool_)  # RIGHT
print(arr.dtype)   # bool`},{question:"What is MKL-optimized NumPy and how does it differ from standard NumPy?",shortAnswer:"MKL (Intel Math Kernel Library) optimized NumPy uses Intel's BLAS/LAPACK for 2x–5x faster linear algebra on Intel CPUs.",explanation:"Standard NumPy uses OpenBLAS for linear algebra. Anaconda ships with NumPy linked against Intel MKL, which is highly optimized for Intel CPUs and provides significant speedups for operations like matrix multiplication, SVD, and eigenvalue decomposition. Google Colab uses OpenBLAS. For ML training loops, the difference is usually minor.",hint:"MKL = Intel Math Kernel Library. Anaconda bundles it.",level:"advanced",codeExample:`# Check which BLAS NumPy is linked to:
import numpy as np
np.show_config()   # shows BLAS/LAPACK linkage details`}],a=[{id:"part1",fileName:"01_install_and_verification.py",title:"1. Install & BLAS Hardware Verification",badge:"Hardware & BLAS",code:h,summary:"Checks installed NumPy version, Python path, and prints underlying BLAS / LAPACK linear algebra acceleration configs."},{id:"part2",fileName:"02_import_conventions_and_namespaces.py",title:"2. Import Conventions vs Namespace Pollution",badge:"Namespaces",code:x,summary:"Demonstrates standard 'import numpy as np' and why 'from numpy import *' creates dangerous collisions with Python built-ins."},{id:"part3",fileName:"03_ml_environment_sanity_check.py",title:"3. ML Stack Sanity & Linear Model Test",badge:"ML Stack Test",code:y,summary:"Performs full environment verification across pandas/sklearn/scipy and runs an end-to-end vectorized matrix-dot product smoke test."}],g=[{env:"Local Python (pip)",cmd:"pip install numpy",note:"Standard installation"},{env:"Anaconda / Miniconda",cmd:"conda install numpy",note:"MKL-optimized version"},{env:"Google Colab",cmd:"Pre-installed",note:"Just import and use"},{env:"Jupyter Notebook",cmd:"!pip install numpy",note:"! prefix for shell"},{env:"VS Code + Python ext.",cmd:"pip install numpy",note:"Run in terminal"},{env:"Upgrade existing install",cmd:"pip install --upgrade numpy",note:"Get latest version"}],N=[{error:"ModuleNotFoundError: No module named 'numpy'",cause:"NumPy not installed in current Python environment",fix:"pip install numpy",color:"border-rose-800"},{error:"numpy.core.multiarray failed to import",cause:"Corrupted or incompatible NumPy C extension",fix:"pip install --upgrade numpy",color:"border-amber-800"},{error:"AttributeError: module 'numpy' has no attribute 'bool'",cause:"np.bool was removed in NumPy 1.24",fix:"Use np.bool_ (with underscore)",color:"border-orange-800"}],v=[{code:"import numpy as np",verdict:"✔ CORRECT",color:"text-emerald-400",bg:"bg-emerald-950/30 border-emerald-800"},{code:"import numpy",verdict:"✗ Verbose",color:"text-amber-400",bg:"bg-amber-950/30 border-amber-800"},{code:"from numpy import *",verdict:"✗ NEVER",color:"text-rose-400",bg:"bg-rose-950/30 border-rose-800"},{code:"import numpy as num",verdict:"✗ Non-standard",color:"text-rose-400",bg:"bg-rose-950/30 border-rose-800"}],C=()=>{const[t,o]=i.useState("install"),[s,l]=i.useState("part1"),r=a.find(n=>n.id===s)||a[0],d=[{id:"install",label:"Installation"},{id:"import",label:"Import Convention"},{id:"verify",label:"Verification"},{id:"errors",label:"Common Errors"}];return e.jsxs("div",{className:"space-y-8 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-12",children:[e.jsxs("header",{className:"relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 rounded-2xl border border-indigo-800/40 shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Segment 9 • Module 1 • Topic 1"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Easy"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Setup"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-white",children:"Installing and Importing NumPy"}),e.jsx("p",{className:"text-base text-slate-300 max-w-4xl",children:"Before writing a single line of ML code, you need NumPy installed and imported correctly. Learn the one-time installation, the universal import convention, how to verify your setup, and how to diagnose common installation errors."}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:d.map(n=>e.jsx("button",{onClick:()=>o(n.id),className:`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer ${t===n.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60"}`,children:n.label},n.id))})]})]}),t==="install"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Installation by Environment"}),e.jsx("p",{className:"text-xs text-slate-400",children:"One-time setup — install NumPy before your first ML script"})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs border-collapse border border-slate-800 bg-slate-950 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-900 text-slate-300 border-b border-slate-800 font-mono text-[11px] uppercase",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border-r border-slate-800 text-left",children:"Environment"}),e.jsx("th",{className:"p-3 border-r border-slate-800 text-left",children:"Command"}),e.jsx("th",{className:"p-3 text-left",children:"Note"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800",children:g.map(n=>e.jsxs("tr",{className:"hover:bg-slate-900/50",children:[e.jsx("td",{className:"p-3 text-white font-semibold border-r border-slate-800",children:n.env}),e.jsx("td",{className:"p-3 font-mono text-cyan-300 border-r border-slate-800",children:n.cmd}),e.jsx("td",{className:"p-3 text-slate-400",children:n.note})]},n.env))})]})}),e.jsx("div",{className:"bg-slate-950 p-5 rounded-xl border border-indigo-800/30 space-y-3",children:e.jsxs("div",{className:"font-mono text-sm text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-slate-500",children:"# Step 1: Open terminal / command prompt"}),e.jsx("div",{className:"text-emerald-400",children:"pip install numpy"}),e.jsx("div",{className:"mt-2 text-slate-500",children:"# Step 2: Verify installation"}),e.jsx("div",{className:"text-slate-200",children:'python -c "import numpy as np; print(np.__version__)"'}),e.jsx("div",{className:"mt-2 text-slate-500",children:"# Step 3: You are ready to code!"}),e.jsxs("div",{className:"text-slate-200",children:["import numpy as np  ",e.jsx("span",{className:"text-slate-500",children:"# always at top of your script"})]})]})})]}),t==="import"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"02"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"The Import Convention"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Why 'np' is sacred in the data science community"})]})]}),e.jsx("div",{className:"space-y-3",children:v.map(n=>e.jsxs("div",{className:`p-4 rounded-xl border ${n.bg} flex items-center justify-between gap-4`,children:[e.jsx("code",{className:"font-mono text-sm text-white",children:n.code}),e.jsx("span",{className:`text-sm font-bold shrink-0 ${n.color}`,children:n.verdict})]},n.code))}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold text-white",children:'Why "np" is the only correct alias'}),e.jsxs("ul",{className:"space-y-2 text-sm text-slate-300 list-disc list-inside",children:[e.jsxs("li",{children:["Every NumPy tutorial, documentation page, and Stack Overflow answer uses ",e.jsx("code",{className:"text-cyan-300",children:"np"})]}),e.jsxs("li",{children:["Scikit-learn, Pandas, Matplotlib documentation all write ",e.jsx("code",{className:"text-cyan-300",children:"np.array()"})]}),e.jsxs("li",{children:["Saves typing — ",e.jsx("code",{className:"text-cyan-300",children:"np.zeros(5)"})," vs ",e.jsx("code",{className:"text-slate-500",children:"numpy.zeros(5)"})]}),e.jsxs("li",{children:["IDE auto-complete suggests ",e.jsx("code",{className:"text-cyan-300",children:"np."})," functions correctly"]}),e.jsxs("li",{children:["Code reviewers, professors, and colleagues expect ",e.jsx("code",{className:"text-cyan-300",children:"np"})]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-indigo-800/30 space-y-2",children:[e.jsx("div",{className:"text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3",children:"Standard ML Script Header (memorize this)"}),e.jsxs("div",{className:"font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-emerald-400",children:"import numpy as np"}),e.jsx("div",{className:"text-amber-400",children:"import pandas as pd"}),e.jsx("div",{className:"text-cyan-400",children:"import matplotlib.pyplot as plt"}),e.jsx("div",{className:"text-purple-400",children:"import seaborn as sns"}),e.jsx("div",{className:"text-blue-400",children:"from sklearn.model_selection import train_test_split"}),e.jsx("div",{className:"text-rose-400",children:"from sklearn.linear_model import LinearRegression"})]}),e.jsx("p",{className:"text-xs text-slate-400 mt-3",children:"All six libraries rely on NumPy arrays internally."})]})]}),t==="verify"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-lg",children:"03"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Verifying Your Installation"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Always verify before starting a new project"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[{check:"Version",code:"np.__version__",eg:"'1.26.4'",desc:"Current installed version"},{check:"File path",code:"np.__file__",eg:"'/usr/.../numpy/__init__.py'",desc:"Where NumPy is installed"},{check:"BLAS config",code:"np.show_config()",eg:"blas_opt...",desc:"Which BLAS is linked"},{check:"Namespace count",code:"len(dir(np))",eg:"~600+",desc:"Total attributes & functions"}].map(n=>e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 hover:border-emerald-700/50 transition-all duration-300",children:[e.jsx("div",{className:"text-xs font-semibold text-emerald-400 uppercase",children:n.check}),e.jsx("div",{className:"font-mono text-sm text-white",children:n.code}),e.jsxs("div",{className:"font-mono text-xs text-slate-400",children:["→ ",n.eg]}),e.jsx("div",{className:"text-xs text-slate-400",children:n.desc})]},n.check))}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 text-[11px] uppercase font-semibold mb-2",children:"Complete verification script"}),e.jsx("div",{className:"text-slate-200",children:"import numpy as np"}),e.jsx("div",{className:"text-slate-200",children:'print("NumPy version  :", np.__version__)'}),e.jsx("div",{className:"text-slate-200",children:'print("Install path   :", np.__file__)'}),e.jsx("div",{className:"text-slate-200",children:"arr = np.array([1, 2, 3])"}),e.jsx("div",{className:"text-slate-200",children:'print("Test array     :", arr)'}),e.jsx("div",{className:"text-slate-200",children:'print("Test dtype     :", arr.dtype)'}),e.jsx("div",{className:"text-emerald-400",children:"# If no errors → NumPy is working correctly ✔"})]})]}),t==="errors"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 font-bold text-lg",children:"04"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Common Installation Errors"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Diagnose and fix the most frequent NumPy errors"})]})]}),e.jsx("div",{className:"space-y-4",children:N.map(n=>e.jsxs("div",{className:`bg-slate-950 p-5 rounded-xl border ${n.color} space-y-3`,children:[e.jsx("div",{className:"font-mono text-sm text-rose-300 font-bold",children:n.error}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 font-semibold",children:"Cause: "}),e.jsx("span",{className:"text-slate-300",children:n.cause})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 font-semibold",children:"Fix: "}),e.jsx("code",{className:"text-emerald-400 font-mono",children:n.fix})]})]})]},n.error))})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-5",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:"⚠️ Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-rose-900/40 space-y-2",children:[e.jsx("h3",{className:"text-sm font-bold text-rose-400",children:"❌ Common Mistakes"}),e.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-300 list-disc list-inside",children:[e.jsxs("li",{children:["Using ",e.jsx("code",{className:"text-rose-300",children:"from numpy import *"})," — causes namespace pollution"]}),e.jsx("li",{children:"Forgetting to run pip in the right virtual environment"}),e.jsxs("li",{children:["Using ",e.jsx("code",{className:"text-rose-300",children:"np.bool"})," instead of ",e.jsx("code",{className:"text-emerald-300",children:"np.bool_"})," in NumPy ≥1.24"]}),e.jsx("li",{children:"Installing NumPy globally instead of in a virtual environment"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-emerald-900/40 space-y-2",children:[e.jsx("h3",{className:"text-sm font-bold text-emerald-400",children:"✔ Best Practices"}),e.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-300 list-disc list-inside",children:[e.jsxs("li",{children:["Always use ",e.jsx("code",{className:"text-emerald-300",children:"import numpy as np"})," — nothing else"]}),e.jsxs("li",{children:["Create a virtual environment per project: ",e.jsx("code",{className:"text-cyan-300",children:"python -m venv myenv"})]}),e.jsxs("li",{children:["Pin your version in requirements.txt: ",e.jsx("code",{className:"text-cyan-300",children:"numpy==1.26.4"})]}),e.jsxs("li",{children:["Verify with ",e.jsx("code",{className:"text-emerald-300",children:"print(np.__version__)"})," at the start of projects"]})]})]})]})]}),e.jsxs("section",{className:"bg-gradient-to-r from-slate-900 to-indigo-950/40 p-6 rounded-2xl border border-indigo-800/30 space-y-3",children:[e.jsx("h2",{className:"text-lg font-bold text-indigo-300",children:"💡 Think About This…"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Swadeep asked: ",e.jsxs("em",{children:['"Why should I bother with ',e.jsx("code",{className:"text-cyan-300",children:"import numpy as np"}),"instead of just ",e.jsx("code",{className:"text-cyan-300",children:"import numpy"}),'?"']})]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Sukanta replied: ",e.jsxs("em",{children:[`"You'll write `,e.jsx("code",{className:"text-cyan-300",children:"np.array()"}),",",e.jsx("code",{className:"text-cyan-300",children:"np.zeros()"}),", ",e.jsx("code",{className:"text-cyan-300",children:"np.mean()"}),`thousands of times in a single ML project. The alias saves you 4 characters every time. More importantly — every colleague, every textbook, every StackOverflow answer uses 'np'. Consistency is a professional standard, not just convenience."`]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"💻"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Python Code Demonstration Suite (3 Focused Scripts)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a script below to inspect environment checks, import rules, or ML stack verification"})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:a.map(n=>e.jsxs("button",{onClick:()=>l(n.id),className:`p-3 rounded-xl border text-left transition-all ${s===n.id?"bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/40 scale-[1.02]":"bg-slate-950/70 border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${s===n.id?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:n.badge})}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:n.title})]},n.id))}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:r.fileName})}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:r.summary})]})}),e.jsx(c,{fileModule:r.code,title:r.fileName})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(p,{title:"Installing & Importing NumPy — FAQs",questions:f})}),e.jsx("section",{className:"space-y-4",children:e.jsx(m,{content:b,title:"Installing and Importing NumPy — Quick Revision Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 1 Study Note",downloadFileName:"numpy_install_note.txt"})}),e.jsx("section",{children:e.jsx(u,{note:"The import statement 'import numpy as np' is non-negotiable. You will write it at the top of every single Python file in this course. Treat it like signing your name — it signals to every reader that this is a professional data science script. Skip it or change the alias and you immediately mark yourself as an amateur. — Sukanta Hui, Coder & AccoTax, Barrackpore"})})]})};export{C as default};
