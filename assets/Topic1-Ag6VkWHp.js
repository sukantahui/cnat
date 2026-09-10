import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as O,D as W,a_ as F,bo as G,r as S,F as T,aa as P,aM as U,P as $,aN as V,f as _,g as A}from"./vendor-icons-DFC0rBCP.js";const H=`"""\r
=============================================================================\r
TOPIC 1: Installing and Importing Matplotlib\r
Script 01: Installation, Import Conventions & Backend Selection\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import sys\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
# -----------------------------------------------------------------------------\r
# 1. Standard Installation Commands (Terminal)\r
# -----------------------------------------------------------------------------\r
section("1. Installation Commands")\r
print("""\r
To install Matplotlib in your Python/Conda environment:\r
  • Standard pip  : pip install matplotlib\r
  • Conda env     : conda install -c conda-forge matplotlib\r
  • Full ML Stack : pip install numpy pandas matplotlib seaborn scikit-learn\r
""")\r
\r
# -----------------------------------------------------------------------------\r
# 2. Canonical Import Conventions & Backend Switching\r
# -----------------------------------------------------------------------------\r
section("2. Canonical Imports & Backend Configuration")\r
\r
# IMPORTANT: Backend must be set BEFORE importing pyplot if running headless\r
import matplotlib\r
# matplotlib.use('Agg')  # Headless backend (ideal for web servers & Docker)\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
print(f"Python Executable   : {sys.executable}")\r
print(f"Matplotlib Version  : {matplotlib.__version__}")\r
print(f"Config File Path    : {matplotlib.matplotlib_fname()}")\r
print(f"Active Render Backend: {matplotlib.get_backend()}")\r
\r
# -----------------------------------------------------------------------------\r
# 3. Verifying Installation with a Minimal Plot\r
# -----------------------------------------------------------------------------\r
section("3. Verification Test Plot")\r
\r
fig, ax = plt.subplots(figsize=(5, 3))\r
x = np.linspace(0, 2 * np.pi, 100)\r
ax.plot(x, np.sin(x), label="sin(x)", color="#2563eb", lw=2)\r
ax.plot(x, np.cos(x), label="cos(x)", color="#db2777", lw=2, linestyle="--")\r
ax.set_title("Matplotlib Installation Verified")\r
ax.set_xlabel("Theta (radians)")\r
ax.set_ylabel("Amplitude")\r
ax.legend()\r
ax.grid(True, alpha=0.3)\r
plt.close(fig)\r
\r
print("✓ Matplotlib successfully initialized and functional!")\r
`,Q=`"""\r
=============================================================================\r
TOPIC 1: Installing and Importing Matplotlib\r
Script 02: Matplotlib Configuration & rcParams Customization\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("1. Inspecting & Modifying rcParams Globally")\r
\r
# Display a selection of common rcParams keys\r
keys_to_inspect = [\r
    'figure.figsize', 'figure.dpi', 'font.size', 'font.family',\r
    'lines.linewidth', 'axes.grid', 'savefig.dpi'\r
]\r
\r
print("Default Parameter Values:")\r
for k in keys_to_inspect:\r
    print(f"  {k:<20} : {plt.rcParams[k]}")\r
\r
# Updating rcParams globally for high-resolution publication charts\r
plt.rcParams.update({\r
    'figure.figsize': (8, 4),\r
    'figure.dpi': 150,\r
    'font.size': 11,\r
    'lines.linewidth': 2.5,\r
    'axes.grid': True,\r
    'grid.alpha': 0.4,\r
    'grid.linestyle': '--'\r
})\r
\r
print("\\nUpdated Custom Parameters for Coder & AccoTax Lab Reports:")\r
for k in keys_to_inspect:\r
    print(f"  {k:<20} : {plt.rcParams[k]}")\r
\r
# Creating a test plot reflecting the updated rcParams\r
fig, ax = plt.subplots()\r
x = np.linspace(-3, 3, 100)\r
# Sigmoid activation function commonly used in Logistic Regression\r
sigmoid = 1 / (1 + np.exp(-x))\r
ax.plot(x, sigmoid, color='#10b981', label=r'$\\sigma(z) = \\frac{1}{1 + e^{-z}}$')\r
ax.set_title("Logistic Sigmoid Curve (Rendered with custom rcParams)")\r
ax.set_xlabel("Logits (z)")\r
ax.set_ylabel("Probability P(Y=1)")\r
ax.legend()\r
plt.close(fig)\r
\r
# Reset rcParams back to default factory settings\r
plt.rcdefaults()\r
print("\\n✓ Restored defaults using plt.rcdefaults()")\r
`,Y=`"""\r
=============================================================================\r
TOPIC 1: Installing and Importing Matplotlib\r
Script 03: Built-In Style Sheets & Context Managers\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("1. Listing Available Style Sheets")\r
available_styles = plt.style.available\r
print(f"Total Available Styles: {len(available_styles)}")\r
print("Sample of popular styles:")\r
for s in available_styles[:10]:\r
    print(f"  - {s}")\r
\r
section("2. Using Context Managers for Scoped Styling")\r
# With context manager: style applies ONLY inside the with block!\r
x = np.linspace(0, 10, 100)\r
\r
with plt.style.context('dark_background'):\r
    fig, ax = plt.subplots(figsize=(6, 3))\r
    ax.plot(x, np.sin(x), color="#38bdf8", label="Sin Wave (Dark Mode)")\r
    ax.set_title("Scoped Dark Background Theme")\r
    ax.legend()\r
    plt.close(fig)\r
    print("✓ Rendered chart inside 'dark_background' context.")\r
\r
# Verify outside context is default\r
print(f"Current outside background color: {plt.rcParams['figure.facecolor']}")\r
`,M="MATPLOTLIB ESSENTIALS: TOPIC 1 NOTE\r\n=============================================================================\r\nTOPIC: Installing, Importing, and Configuring Matplotlib\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. INSTALLATION ECOSYSTEM:\r\n   - Command: `pip install matplotlib` or `conda install matplotlib`\r\n   - Dependencies: Automatically brings NumPy, pillow, cycler, fonttools, kiwisolver, pyparsing, packaging, python-dateutil.\r\n\r\n2. IMPORT CONVENTIONS:\r\n   - Standard Pyplot interface: `import matplotlib.pyplot as plt`\r\n   - Root package: `import matplotlib`\r\n   - Setting headless backend:\r\n     `import matplotlib`\r\n     `matplotlib.use('Agg')`  # MUST occur BEFORE importing matplotlib.pyplot\r\n\r\n3. RCPARAMS CONFIGURATION SYSTEM:\r\n   - `matplotlib.rcParams` is a runtime dictionary containing all global default visual aesthetics.\r\n   - Common keys:\r\n     * `figure.figsize`: Tuple (width, height) in inches (e.g. (8, 5))\r\n     * `figure.dpi`: Dots per inch (resolution, e.g. 100 for screen, 300 for print)\r\n     * `font.size`: Base font size (default ~10)\r\n     * `axes.grid`: Boolean (True/False)\r\n     * `lines.linewidth`: Default line width in points\r\n     * `savefig.bbox`: 'tight' prevents cutting off axis labels during export\r\n   - Updating parameters: `plt.rcParams.update({'font.size': 12, 'figure.dpi': 120})`\r\n   - Resetting to defaults: `plt.rcdefaults()`\r\n\r\n4. STYLE SHEETS & CONTEXT MANAGERS:\r\n   - Inspect styles: `plt.style.available`\r\n   - Global application: `plt.style.use('seaborn-v0_8-whitegrid')`, `plt.style.use('dark_background')`, `plt.style.use('ggplot')`\r\n   - Scoped application (Context Manager):\r\n     ```python\r\n     with plt.style.context('fivethirtyeight'):\r\n         fig, ax = plt.subplots()\r\n         ax.plot(x, y)\r\n     ```\r\n     This prevents changing global styles across subsequent figures in your notebook or script.\r\n",c=[{id:1,question:"What is the industry-standard alias for importing the Matplotlib scripting layer?",options:["import matplotlib as mp","import matplotlib.pyplot as plt","import pyplot as pt","from matplotlib import plot"],correctAnswer:1,explanation:"`import matplotlib.pyplot as plt` is the universal, standardized alias across the entire Python data science community."},{id:2,question:"If running Python on a headless server without a display GUI (such as an AWS EC2 instance or Docker container), which backend should be selected before importing pyplot?",options:["matplotlib.use('Agg')","matplotlib.use('TkAgg')","matplotlib.use('Qt5Agg')","matplotlib.use('DisplayGUI')"],correctAnswer:0,explanation:"'Agg' (Anti-Grain Geometry) is a non-interactive raster backend that renders PNG images directly into memory without requiring an X11/GUI display server."},{id:3,question:"How can you temporarily apply a style sheet to a single figure without mutating the global plotting defaults?",options:["plt.style.temp('dark_background')","plt.style.isolate('dark_background')","with plt.style.context('dark_background'):","plt.rcParams.scope('dark_background')"],correctAnswer:2,explanation:"Using the Python context manager `with plt.style.context('theme_name'):` scopes the style configuration strictly within that code block and automatically restores previous defaults afterwards."},{id:4,question:"Which rcParams key controls the physical dimensions of newly created Figures in inches?",options:["figure.size_in_pixels","figure.figsize","axes.dimensions","plot.canvas_inches"],correctAnswer:1,explanation:"`figure.figsize` takes a tuple of floats `(width, height)` specified in inches (e.g., `(10, 6)`)."}];function J(){const[l,I]=a.useState("studio"),[i,z]=a.useState(1),[p,y]=a.useState(!1),[x,E]=a.useState("dark_background"),[o,R]=a.useState(100),[r,D]=a.useState(2.5),[d,B]=a.useState(!0),[h,j]=a.useState({}),[m,k]=a.useState(!1),b={1:{name:"01_install_import_and_backends.py",code:H,desc:"Installation, standard import aliases, and non-interactive backend selection"},2:{name:"02_configuration_and_rcparams.py",code:Q,desc:"Global matplotlib.rcParams configuration and runtime resetting"},3:{name:"03_built_in_styles_and_themes.py",code:Y,desc:"Built-in styles, theme exploration, and scoped context managers"}},w=t=>{navigator.clipboard.writeText(t),y(!0),setTimeout(()=>y(!1),2e3)},L=(t,n)=>{j(f=>({...f,[t]:n}))},v=()=>{let t=0;return c.forEach(n=>{h[n.id]===n.correctAnswer&&t++}),t},s=(()=>{switch(x){case"dark_background":return{bg:"#090d16",cardBg:"#0f172a",gridColor:"#334155",axisColor:"#94a3b8",textColor:"#f8fafc",lineColor:"#38bdf8",line2Color:"#f43f5e"};case"seaborn_grid":return{bg:"#e2e8f0",cardBg:"#f1f5f9",gridColor:"#ffffff",axisColor:"#475569",textColor:"#0f172a",lineColor:"#2563eb",line2Color:"#059669"};case"ggplot":return{bg:"#d6d3d1",cardBg:"#e7e5e4",gridColor:"#ffffff",axisColor:"#57534e",textColor:"#1c1917",lineColor:"#dc2626",line2Color:"#2563eb"};default:return{bg:"#ffffff",cardBg:"#ffffff",gridColor:"#e2e8f0",axisColor:"#000000",textColor:"#000000",lineColor:"#0000ff",line2Color:"#ff0000"}}})();return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-teal-900/40 border border-blue-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(O,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 1: Installing & Importing Matplotlib"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["Master the Python plotting ecosystem setup, standard ",e.jsx("code",{className:"text-blue-300 font-mono",children:"import matplotlib.pyplot as plt"})," conventions, headless server backend configuration (",e.jsx("code",{className:"text-blue-300 font-mono",children:"Agg"}),"), and global visual tuning with ",e.jsx("code",{className:"text-blue-300 font-mono",children:"plt.rcParams"})," and themes."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5",children:[e.jsx(W,{className:"w-3.5 h-3.5"})," pip / conda"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5",children:[e.jsx(F,{className:"w-3.5 h-3.5"})," rcParams & Styles"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-blue-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"When Sachin and Swadeep first tried running Matplotlib on our Linux cloud server, their scripts crashed with ',e.jsx("code",{className:"text-rose-300",children:"UserWarning: Matplotlib is currently using agg, which is a non-GUI backend"})," or ",e.jsx("code",{className:"text-rose-300",children:"no display name and no $DISPLAY environment variable"}),". Understanding headless backends and centralizing chart aesthetics in ",e.jsx("code",{className:"text-sky-300",children:"plt.rcParams"}),' turns beginner scripts into robust ML pipelines!"']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive rcParams & Themes",icon:G},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:S},{id:"notes",label:"Revision Notes",icon:T},{id:"quiz",label:"MCQ Assessment",icon:P}].map(t=>{const n=t.icon;return e.jsxs("button",{onClick:()=>I(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${l===t.id?"border-blue-500 text-blue-400 bg-blue-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(n,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[l==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(U,{className:"text-blue-400 w-5 h-5"}),"Live rcParams Studio"]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5",children:[e.jsx($,{className:"w-3.5 h-3.5 text-blue-400"}),"Style Sheet (plt.style.use)"]}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"dark_background",label:"dark_background"},{id:"seaborn_grid",label:"seaborn-whitegrid"},{id:"ggplot",label:"ggplot (R-style)"},{id:"classic",label:"classic (default)"}].map(t=>e.jsx("button",{onClick:()=>E(t.id),className:`px-3 py-2 rounded-lg text-xs font-medium border text-left transition ${x===t.id?"border-blue-500 bg-blue-950/60 text-blue-300 ring-1 ring-blue-500":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:t.label},t.id))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"lines.linewidth"}),e.jsxs("span",{className:"text-blue-400 font-mono",children:[r," pt"]})]}),e.jsx("input",{type:"range",min:"1",max:"5",step:"0.5",value:r,onChange:t=>D(parseFloat(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"figure.dpi (Resolution)"}),e.jsxs("span",{className:"text-blue-400 font-mono",children:[o," DPI"]})]}),e.jsx("input",{type:"range",min:"72",max:"200",step:"10",value:o,onChange:t=>R(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"})]}),e.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"axes.grid"}),e.jsx("button",{onClick:()=>B(!d),className:`px-4 py-1.5 rounded-lg text-xs font-bold transition ${d?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400"}`,children:d?"Enabled (True)":"Disabled (False)"})]})]}),e.jsxs("div",{className:"lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:["Rendered Canvas (Theme: ",x," | DPI: ",o,")"]}),e.jsxs("span",{className:"text-[11px] text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 font-mono",children:["plt.rcParams['figure.dpi'] = ",o]})]}),e.jsx("div",{className:"w-full rounded-xl p-6 transition-colors duration-300 flex items-center justify-center border border-slate-800/80",style:{backgroundColor:s.bg},children:e.jsxs("svg",{viewBox:"0 0 500 240",className:"w-full max-w-lg h-56",children:[d&&e.jsxs(e.Fragment,{children:[[40,80,120,160,200].map(t=>e.jsx("line",{x1:"45",y1:t,x2:"475",y2:t,stroke:s.gridColor,strokeDasharray:"4,4",strokeWidth:"1"},t)),[45,130,215,300,385,470].map(t=>e.jsx("line",{x1:t,y1:"20",x2:t,y2:"200",stroke:s.gridColor,strokeDasharray:"4,4",strokeWidth:"1"},t))]}),e.jsx("line",{x1:"45",y1:"200",x2:"475",y2:"200",stroke:s.axisColor,strokeWidth:"1.5"}),e.jsx("line",{x1:"45",y1:"20",x2:"45",y2:"200",stroke:s.axisColor,strokeWidth:"1.5"}),e.jsx("path",{d:"M 45 110 Q 150 20 255 110 T 465 110",fill:"none",stroke:s.lineColor,strokeWidth:r}),e.jsx("path",{d:"M 45 30 Q 150 190 255 30 T 465 30",fill:"none",stroke:s.line2Color,strokeWidth:r,strokeDasharray:"4,4"}),e.jsx("rect",{x:"330",y:"25",width:"135",height:"50",fill:s.cardBg,rx:"4",stroke:s.gridColor}),e.jsx("line",{x1:"340",y1:"40",x2:"365",y2:"40",stroke:s.lineColor,strokeWidth:r}),e.jsx("text",{x:"375",y:"44",fill:s.textColor,fontSize:"10",fontWeight:"bold",children:"Activation (Sigmoid)"}),e.jsx("line",{x1:"340",y1:"60",x2:"365",y2:"60",stroke:s.line2Color,strokeWidth:r,strokeDasharray:"3,3"}),e.jsx("text",{x:"375",y:"64",fill:s.textColor,fontSize:"10",fontWeight:"bold",children:"Derivative"}),e.jsx("text",{x:"260",y:"225",fill:s.textColor,fontSize:"11",textAnchor:"middle",children:"Input Feature (z)"}),e.jsx("text",{x:"20",y:"110",fill:s.textColor,fontSize:"11",textAnchor:"middle",transform:"rotate(-90 20 110)",children:"Probability"})]})})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(V,{className:"w-3.5 h-3.5 text-blue-400"}),"Equivalent Matplotlib Python Code:"]}),e.jsx("pre",{className:"text-blue-300",children:`import matplotlib.pyplot as plt

plt.style.use('${x}')
plt.rcParams.update({
    'figure.dpi': ${o},
    'lines.linewidth': ${r},
    'axes.grid': ${d?"True":"False"}
})`})]})]})]})}),l==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(S,{className:"text-blue-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore installation, backend handling, rcParams management, and styles."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>z(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${i===t?"bg-blue-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-blue-400",children:b[i].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:b[i].desc})]}),e.jsxs("button",{onClick:()=>w(b[i].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[p?e.jsx(_,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(A,{className:"w-3.5 h-3.5"}),p?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:b[i].code})})]}),l==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(T,{className:"text-blue-400 w-5 h-5"}),"Technical Installation & Configuration Reference"]}),e.jsxs("button",{onClick:()=>w(M),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[p?e.jsx(_,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(A,{className:"w-3.5 h-3.5"}),p?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:M})]}),l==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(P,{className:"text-blue-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of package setup, backends, and rcParams customizations."})]}),m&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-blue-950 border border-blue-500/40 text-blue-300 text-sm font-bold",children:["Score: ",v()," / ",c.length," (",Math.round(v()/c.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:c.map((t,n)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[n+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((f,u)=>{const N=h[t.id]===u,C=t.correctAnswer===u;let g="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return m?C?g="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":N&&!C&&(g="border-rose-500 bg-rose-950/40 text-rose-200"):N&&(g="border-blue-500 bg-blue-950/50 text-blue-200 ring-1 ring-blue-500"),e.jsx("button",{onClick:()=>!m&&L(t.id,u),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${g}`,children:f},u)})}),m&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-blue-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{j({}),k(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>k(!0),disabled:Object.keys(h).length<c.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-blue-600/30",children:"Submit Quiz"})]})]})]})]})}export{J as default};
