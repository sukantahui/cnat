import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as F,j as R,L,bo as B,r as T,F as C,aa as O,p as z,aN as W,f as P,g as M}from"./vendor-icons-DFC0rBCP.js";const G=`"""\r
=============================================================================\r
TOPIC 0: Introduction to Matplotlib - Architecture & Foundations\r
Script 01: Matplotlib Three-Layer Architecture & Core Concepts\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import numpy as np\r
import matplotlib\r
import matplotlib.pyplot as plt\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
# -----------------------------------------------------------------------------\r
# 1. Matplotlib Three-Layer Architecture\r
# -----------------------------------------------------------------------------\r
section("1. The Three Layers of Matplotlib Architecture")\r
\r
print(f"Matplotlib Version : {matplotlib.__version__}")\r
print(f"Current Backend    : {matplotlib.get_backend()}")\r
\r
print("""\r
Matplotlib is structured in three hierarchical tiers:\r
1. Backend Layer (Canvas, Renderer, Event handling):\r
   - Handles physical rendering to raster/vector formats (PNG, SVG, PDF) or GUI canvases (TkAgg, Qt5Agg, WebAgg).\r
2. Artist Layer (Figure, Axes, Axis, Text, Line2D, Rectangle):\r
   - Every visible pixel in Matplotlib belongs to an 'Artist'.\r
   - Figure holds Axes, Axes holds Line2D / Text / Patches.\r
3. Scripting Layer (matplotlib.pyplot):\r
   - Stateful procedural wrapper designed for interactive exploratory analysis.\r
""")\r
\r
# -----------------------------------------------------------------------------\r
# 2. Stateful Pyplot Interface vs Object-Oriented (OO) Interface\r
# -----------------------------------------------------------------------------\r
section("2. Stateful (pyplot) vs Object-Oriented (OO) Paradigm")\r
\r
# A. Stateful Pyplot style (MATLAB-like, tracks active figure/axes implicitly)\r
plt.figure(figsize=(6, 3))\r
plt.plot([1, 2, 3, 4], [10, 25, 20, 35], 'b-o', label="Stateful Sales")\r
plt.title("Stateful pyplot Style (Implicit Active Axes)")\r
plt.xlabel("Quarter")\r
plt.ylabel("Revenue (Lakh INR)")\r
plt.legend()\r
plt.close() # Close memory buffer\r
print("✓ Stateful pyplot code executed: tracks plt.gca() and plt.gcf() under the hood.")\r
\r
# B. Object-Oriented (OO) style (Recommended for production, explicit handles)\r
fig, ax = plt.subplots(figsize=(6, 3))\r
ax.plot([1, 2, 3, 4], [10, 25, 20, 35], color="#0284c7", marker="s", label="OO Sales")\r
ax.set_title("Object-Oriented Style (Explicit Figure & Axes Handles)")\r
ax.set_xlabel("Quarter")\r
ax.set_ylabel("Revenue (Lakh INR)")\r
ax.legend()\r
plt.close(fig)\r
print("✓ OO style code executed: explicitly manipulates \`fig\` and \`ax\` objects.")\r
\r
# -----------------------------------------------------------------------------\r
# 3. Comparing the Approaches for ML Workflows\r
# -----------------------------------------------------------------------------\r
section("3. Why OO Style is Preferred in Machine Learning")\r
print("""\r
• In ML dashboards & subplots, OO style prevents subtle bugs caused by the state machine\r
  accidentally drawing on the wrong figure or subplot.\r
• OO allows fine-grained control over tick locators, formatters, spines, and dual axes.\r
""")\r
`,V=`"""\r
=============================================================================\r
TOPIC 0: Introduction to Matplotlib\r
Script 02: Pyplot State Machine & Canvas Lifecycle\r
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
section("1. The Stateful Pyplot Lifecycle (gcf and gca)")\r
\r
# Get Current Figure (gcf) and Get Current Axes (gca)\r
plt.figure(1, figsize=(6, 3))\r
current_fig = plt.gcf()\r
current_ax = plt.gca()\r
\r
print(f"Active Figure Number : {current_fig.number}")\r
print(f"Active Axes Object   : {current_ax}")\r
\r
# Generating synthetic batch training loss data for Coder & AccoTax ML Lab\r
epochs = np.arange(1, 11)\r
train_loss = 1.0 / (epochs ** 0.5) + np.random.normal(0, 0.02, size=10)\r
val_loss = 1.1 / (epochs ** 0.45) + np.random.normal(0, 0.03, size=10)\r
\r
plt.plot(epochs, train_loss, 'r--o', label="Training Loss")\r
plt.plot(epochs, val_loss, 'b-s', label="Validation Loss")\r
plt.title("Model Convergence Across Epochs")\r
plt.xlabel("Epoch")\r
plt.ylabel("Cross-Entropy Loss")\r
plt.legend()\r
plt.grid(True, linestyle=":", alpha=0.6)\r
\r
# Lifecycle demonstration: plt.draw() vs plt.show() vs plt.close()\r
print("Figure rendered in background memory buffer.")\r
plt.close(1)\r
print("Figure 1 memory cleared using plt.close(1).")\r
`,H=`"""\r
=============================================================================\r
TOPIC 0: Introduction to Matplotlib\r
Script 03: Data Pipelines - Interfacing Lists, NumPy, and Pandas\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
import matplotlib.pyplot as plt\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("1. Feeding Diverse Data Structures into Matplotlib")\r
\r
# 1. Native Python lists\r
x_list = [10, 20, 30, 40, 50]\r
y_list = [15, 28, 42, 65, 89]\r
\r
# 2. NumPy 1D and 2D arrays\r
x_np = np.linspace(0, 10, 50)\r
y_np = np.sin(x_np)\r
\r
# 3. Pandas DataFrame & Series\r
df = pd.DataFrame({\r
    'Student': ['Debangshu', 'Susmita', 'Swadeep', 'Tuhina', 'Sachin'],\r
    'Score': [88, 94, 76, 91, 84],\r
    'Attendance': [95, 98, 85, 92, 89]\r
})\r
\r
fig, axs = plt.subplots(1, 3, figsize=(15, 4))\r
\r
# Plot list data\r
axs[0].plot(x_list, y_list, color='#e11d48', marker='o')\r
axs[0].set_title("1. Python Lists Input")\r
\r
# Plot NumPy array\r
axs[1].plot(x_np, y_np, color='#0284c7', lw=2)\r
axs[1].set_title("2. NumPy Array Input")\r
\r
# Plot Pandas DataFrame using 'data' parameter keyword\r
axs[2].bar('Student', 'Score', data=df, color='#10b981', alpha=0.85)\r
axs[2].set_title("3. Pandas DataFrame Input")\r
axs[2].tick_params(axis='x', rotation=30)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Successfully piped Lists, NumPy ndarrays, and Pandas DataFrames into Matplotlib!")\r
`,E=`MATPLOTLIB ESSENTIALS: TOPIC 0 NOTE\r
=============================================================================\r
TOPIC: Introduction to Matplotlib & Data Visualization Foundations\r
MENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r
=============================================================================\r
\r
1. CORE PURPOSE & HISTORY:\r
   - Matplotlib is the bedrock 2D plotting library in the Python Scientific Stack.\r
   - Conceived by John D. Hunter (2003) to replicate MATLAB's visual workflows in Python.\r
   - Built on top of NumPy arrays; serves as the underlying visual engine for Seaborn, Pandas plotting, and scikit-plot.\r
\r
2. THREE-LAYER HIERARCHICAL ARCHITECTURE:\r
   a) Backend Layer:\r
      - Interacts with output devices, OS windowing systems, and file formats.\r
      - User Interface Backends (Interactive): TkAgg, PyQt6/Qt5Agg, WXAgg, WebAgg.\r
      - Hardcopy Backends (Non-interactive): Anti-Grain Geometry (Agg - PNG), PDF, SVG, PS.\r
   b) Artist Layer:\r
      - Contains every visual primitive drawn on screen.\r
      - Two categories of Artists:\r
        * Primitive: Line2D, Rectangle, Circle, Polygon, Text, AxesImage.\r
        * Composite: Figure, Axes, Axis, Tick.\r
   c) Scripting Layer (matplotlib.pyplot):\r
      - Procedural interface that maintains internal state of active figure and axes.\r
\r
3. STATEFUL VS OBJECT-ORIENTED (OO) INTERFACE:\r
   - Stateful (plt.plot): Implicitly tracks current figure (plt.gcf()) and axes (plt.gca()). Best for quick interactive 1-liner exploration.\r
   - Object-Oriented (fig, ax = plt.subplots()): Explicitly binds figure and axes handles. Mandatory for multi-axis subplots, custom layouts, and clean production ML dashboards.\r
\r
4. MEMORY & RESOURCE MANAGEMENT:\r
   - Every figure created resides in memory until explicitly closed.\r
   - In loops or servers, failure to run \`plt.close(fig)\` or \`plt.close('all')\` leads to severe memory leaks (Matplotlib warning: More than 20 figures open).\r
\r
5. DATA INPUT CAPABILITIES:\r
   - Native Python lists/tuples.\r
   - NumPy 1D, 2D, and masked ndarrays.\r
   - Pandas Series and DataFrames (directly or via \`data=df\` argument).\r
`,c=[{id:1,question:"Which of the following describes the three-layer architecture of Matplotlib from lowest to highest level?",options:["Backend Layer -> Artist Layer -> Scripting Layer (pyplot)","Scripting Layer -> Backend Layer -> Artist Layer","Artist Layer -> Canvas Layer -> UI Layer","Data Layer -> Model Layer -> View Layer"],correctAnswer:0,explanation:"Matplotlib is structured into the Backend Layer (rendering/output), Artist Layer (visual primitives & hierarchy), and Scripting Layer (matplotlib.pyplot procedural interface)."},{id:2,question:"What is the primary difference between the stateful pyplot interface and the Object-Oriented (OO) interface?",options:["Pyplot is written in C while OO is written in Python.","Pyplot implicitly manages the current active Figure and Axes, whereas OO explicitly instantiates and calls methods on Figure and Axes objects.","OO is deprecated in Matplotlib 3.x and only pyplot is recommended.","Pyplot requires GPU acceleration while OO runs on CPU."],correctAnswer:1,explanation:"The stateful pyplot interface tracks active canvas state using internal pointers (like plt.gca() and plt.gcf()), whereas OO explicitly returns (fig, ax) objects for direct manipulation."},{id:3,question:"When generating multiple plots inside a high-throughput loop or web backend, what command must be called to prevent memory leaks?",options:["plt.free()","plt.clear_memory()","plt.close(fig) or plt.close('all')","plt.gc.collect()"],correctAnswer:2,explanation:"Matplotlib retains Figure objects in memory until they are explicitly destroyed with `plt.close(fig)` or `plt.close('all')`."},{id:4,question:"In the Matplotlib hierarchy, what is an 'Axes'?",options:["The plural of axis only (X and Y lines)","The bounding region/subplot where data is actually plotted, containing its own coordinate system, ticks, labels, and plot elements","The entire desktop application window","The raster image encoder"],correctAnswer:1,explanation:"An Axes is the actual plot/canvas area inside a Figure with a coordinate system where lines, bars, dots, ticks, and legends live. A single Figure can contain multiple Axes."}];function $(){const[n,_]=r.useState("studio"),[i,I]=r.useState(1),[d,y]=r.useState(!1),[l,u]=r.useState("artist"),[o,f]=r.useState("oo"),[x,j]=r.useState("loss"),[g,v]=r.useState({}),[p,w]=r.useState(!1),h={1:{name:"01_matplotlib_intro_and_architecture.py",code:G,desc:"Matplotlib 3-Layer Architecture (Backend, Artist, Scripting)"},2:{name:"02_pyplot_workflow_and_philosophy.py",code:V,desc:"Stateful pyplot state machine (gcf, gca, draw, close)"},3:{name:"03_matplotlib_data_pipelines.py",code:H,desc:"Interfacing Lists, NumPy Arrays, and Pandas DataFrames"}},k=t=>{navigator.clipboard.writeText(t),y(!0),setTimeout(()=>y(!1),2e3)},D=(t,s)=>{v(a=>({...a,[t]:s}))},N=()=>{let t=0;return c.forEach(s=>{g[s.id]===s.correctAnswer&&t++}),t};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-sky-900/40 via-indigo-900/30 to-purple-900/40 border border-sky-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(F,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 0: Introduction to Matplotlib"}),e.jsx("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:"Master the foundational 2D visualization engine powering Python data science. Explore the three-layer architecture (Backend, Artist, Scripting), understand the stateful vs Object-Oriented paradigms, and build reliable visual ML pipelines."})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30 flex items-center gap-1.5",children:[e.jsx(R,{className:"w-3.5 h-3.5"})," Matplotlib 3.x"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5",children:[e.jsx(L,{className:"w-3.5 h-3.5"})," Core Architecture"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-sky-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"Welcome students (Debangshu, Susmita, Swadeep, Tuhina, Sachin)! Before jumping into simple line plots, remember that Matplotlib is not just a library—it is an Artist-driven graphic rendering engine. If you master the distinction between the stateful ',e.jsx("code",{className:"text-sky-300",children:"plt.plot()"})," shortcut and the production-grade Object-Oriented ",e.jsx("code",{className:"text-emerald-300",children:"fig, ax = plt.subplots()"}),' pattern, you will never struggle with misplaced subplots or memory leaks in your ML training loops."']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Visual Studio",icon:B},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:T},{id:"notes",label:"Revision Notes",icon:C},{id:"quiz",label:"MCQ Assessment",icon:O}].map(t=>{const s=t.icon;return e.jsxs("button",{onClick:()=>_(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${n===t.id?"border-sky-500 text-sky-400 bg-sky-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[n==="studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-white mb-2 flex items-center gap-2",children:[e.jsx(L,{className:"text-sky-400 w-5 h-5"}),"Matplotlib Three-Layer Engine Explorer"]}),e.jsx("p",{className:"text-slate-400 text-sm mb-6",children:"Click each architectural layer below to inspect its responsibility, classes, and typical usage in ML systems."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("button",{onClick:()=>u("scripting"),className:`p-4 rounded-xl text-left border transition-all ${l==="scripting"?"bg-sky-950/60 border-sky-500 shadow-lg ring-1 ring-sky-500":"bg-slate-950/50 border-slate-800 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"font-bold text-sky-300",children:"Layer 3: Scripting"}),e.jsx("span",{className:"text-xs bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded",children:"matplotlib.pyplot"})]}),e.jsx("p",{className:"text-xs text-slate-300",children:"High-level procedural interface that tracks state implicitly for rapid interactive exploration."})]}),e.jsxs("button",{onClick:()=>u("artist"),className:`p-4 rounded-xl text-left border transition-all ${l==="artist"?"bg-indigo-950/60 border-indigo-500 shadow-lg ring-1 ring-indigo-500":"bg-slate-950/50 border-slate-800 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"font-bold text-indigo-300",children:"Layer 2: Artist"}),e.jsx("span",{className:"text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded",children:"Figure, Axes, Line2D"})]}),e.jsx("p",{className:"text-xs text-slate-300",children:"The visual core. Every visible element (primitives and containers) is an Artist instance with properties."})]}),e.jsxs("button",{onClick:()=>u("backend"),className:`p-4 rounded-xl text-left border transition-all ${l==="backend"?"bg-purple-950/60 border-purple-500 shadow-lg ring-1 ring-purple-500":"bg-slate-950/50 border-slate-800 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"font-bold text-purple-300",children:"Layer 1: Backend"}),e.jsx("span",{className:"text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded",children:"Agg, TkAgg, PDF, SVG"})]}),e.jsx("p",{className:"text-xs text-slate-300",children:"Hardware rendering target. Translates Artists into raster pixels, vectors, or GUI application surfaces."})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5",children:[l==="scripting"&&e.jsxs("div",{children:[e.jsxs("h3",{className:"text-md font-bold text-sky-400 mb-2",children:["Scripting Layer (",e.jsx("code",{className:"text-sky-300",children:"matplotlib.pyplot"}),")"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-3",children:["Designed to feel intuitive for users migrating from MATLAB. Exposes simple functions like ",e.jsx("code",{className:"text-sky-300",children:"plt.plot()"}),", ",e.jsx("code",{className:"text-sky-300",children:"plt.title()"}),", and ",e.jsx("code",{className:"text-sky-300",children:"plt.show()"}),". Under the hood, it calls ",e.jsx("code",{className:"text-sky-300",children:"plt.gca()"})," (get current axes) and forwards calls to the active Artist."]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-200 border border-slate-800",children:["import matplotlib.pyplot as plt",e.jsx("br",{}),"plt.plot([1, 2, 3], [4, 5, 6])  # Implicitly creates Figure 1 & Axes 1",e.jsx("br",{}),'plt.title("Quick Plot")',e.jsx("br",{}),"plt.show()"]})]}),l==="artist"&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-indigo-400 mb-2",children:"Artist Layer (Object-Oriented Core)"}),e.jsxs("p",{className:"text-sm text-slate-300 mb-3",children:["Comprises two sub-types: ",e.jsx("strong",{children:"Primitives"})," (Line2D, Text, Rectangle, Patch, Polygon) and ",e.jsx("strong",{children:"Containers"})," (Figure, Axes, Axis, Tick). All customizable properties (color, linewidth, alpha, transform) live here."]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-200 border border-slate-800",children:["fig, ax = plt.subplots(figsize=(8, 4))  # Explicit Container instantiation",e.jsx("br",{}),'line, = ax.plot(x, y, color="#0284c7")  # Returns Line2D Primitive Artist',e.jsx("br",{}),'ax.set_title("Precision ML Metric")',e.jsx("br",{}),'ax.grid(True, linestyle="--", alpha=0.5)']})]}),l==="backend"&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-purple-400 mb-2",children:"Backend Layer (Rendering & Export)"}),e.jsxs("p",{className:"text-sm text-slate-300 mb-3",children:["Consists of three classes: ",e.jsx("strong",{children:"FigureCanvas"})," (area onto which figure is drawn), ",e.jsx("strong",{children:"Renderer"})," (the brush that draws on canvas), and ",e.jsx("strong",{children:"Event"})," (mouse/keyboard input handler)."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300",children:[e.jsxs("div",{className:"bg-slate-900 p-3 rounded border border-slate-800",children:[e.jsx("span",{className:"font-bold text-purple-300",children:"Interactive GUI Backends:"}),e.jsxs("ul",{className:"list-disc list-inside mt-1 space-y-1 text-slate-400",children:[e.jsx("li",{children:"TkAgg (Tkinter window)"}),e.jsx("li",{children:"Qt5Agg / PyQt6"}),e.jsx("li",{children:"WebAgg (Interactive web browser)"})]})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded border border-slate-800",children:[e.jsx("span",{className:"font-bold text-purple-300",children:"Non-Interactive Hardcopy Backends:"}),e.jsxs("ul",{className:"list-disc list-inside mt-1 space-y-1 text-slate-400",children:[e.jsx("li",{children:"Agg (Anti-Grain Geometry - PNG raster)"}),e.jsx("li",{children:"PDF / PS (Vector documents)"}),e.jsx("li",{children:"SVG (Scalable Vector Graphics for web)"})]})]})]})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(z,{className:"text-emerald-400 w-5 h-5"}),"Live Canvas Simulator: Stateful vs OO Paradigm"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Toggle coding styles and datasets to see how Matplotlib structures internal object state."})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex bg-slate-950 p-1 rounded-lg border border-slate-800",children:[e.jsx("button",{onClick:()=>f("stateful"),className:`px-3 py-1 text-xs font-semibold rounded ${o==="stateful"?"bg-sky-600 text-white":"text-slate-400 hover:text-white"}`,children:"Stateful (plt.plot)"}),e.jsx("button",{onClick:()=>f("oo"),className:`px-3 py-1 text-xs font-semibold rounded ${o==="oo"?"bg-emerald-600 text-white":"text-slate-400 hover:text-white"}`,children:"Object-Oriented (fig, ax)"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1 rounded-lg border border-slate-800",children:[e.jsx("button",{onClick:()=>j("loss"),className:`px-3 py-1 text-xs font-semibold rounded ${x==="loss"?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"}`,children:"ML Loss Curve"}),e.jsx("button",{onClick:()=>j("students"),className:`px-3 py-1 text-xs font-semibold rounded ${x==="students"?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"}`,children:"Student Scores"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-center",children:[e.jsxs("div",{className:"lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center",children:[e.jsx("div",{className:"w-full text-center mb-2",children:e.jsx("span",{className:"text-xs uppercase tracking-wider font-bold text-slate-400",children:x==="loss"?"Model Epochs vs Validation Loss":"Coder & AccoTax ML Cohort Marks"})}),x==="loss"?e.jsxs("svg",{viewBox:"0 0 500 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"50",y1:t,x2:"470",y2:t,stroke:"#334155",strokeDasharray:"3,3",strokeWidth:"1"},t)),[50,150,250,350,450].map(t=>e.jsx("line",{x1:t,y1:"20",x2:t,y2:"210",stroke:"#334155",strokeDasharray:"3,3",strokeWidth:"1"},t)),e.jsx("line",{x1:"50",y1:"210",x2:"470",y2:"210",stroke:"#94a3b8",strokeWidth:"2"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"210",stroke:"#94a3b8",strokeWidth:"2"}),e.jsx("polyline",{fill:"none",stroke:"#f43f5e",strokeWidth:"3",strokeDasharray:"4,4",points:"50,40 100,90 160,130 230,160 300,180 380,190 450,195"}),e.jsx("polyline",{fill:"none",stroke:"#38bdf8",strokeWidth:"3",points:"50,55 100,105 160,140 230,165 300,175 380,178 450,182"}),[[50,40],[100,90],[160,130],[230,160],[300,180],[380,190],[450,195]].map(([t,s],a)=>e.jsx("circle",{cx:t,cy:s,r:"4",fill:"#f43f5e"},`t-${a}`)),[[50,55],[100,105],[160,140],[230,165],[300,175],[380,178],[450,182]].map(([t,s],a)=>e.jsx("rect",{x:t-3.5,y:s-3.5,width:"7",height:"7",fill:"#38bdf8"},`v-${a}`)),e.jsx("text",{x:"260",y:"235",fill:"#94a3b8",fontSize:"11",textAnchor:"middle",children:"Epoch (1 to 10)"}),e.jsx("text",{x:"20",y:"115",fill:"#94a3b8",fontSize:"11",textAnchor:"middle",transform:"rotate(-90 20 115)",children:"Loss"}),e.jsx("rect",{x:"330",y:"30",width:"130",height:"50",fill:"#0f172a",rx:"4",stroke:"#334155"}),e.jsx("line",{x1:"340",y1:"45",x2:"365",y2:"45",stroke:"#f43f5e",strokeWidth:"2",strokeDasharray:"3,3"}),e.jsx("text",{x:"375",y:"49",fill:"#f43f5e",fontSize:"10",children:"Train Loss"}),e.jsx("line",{x1:"340",y1:"65",x2:"365",y2:"65",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"375",y:"69",fill:"#38bdf8",fontSize:"10",children:"Val Loss"})]}):e.jsxs("svg",{viewBox:"0 0 500 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"50",y1:t,x2:"470",y2:t,stroke:"#334155",strokeDasharray:"3,3",strokeWidth:"1"},t)),e.jsx("line",{x1:"50",y1:"210",x2:"470",y2:"210",stroke:"#94a3b8",strokeWidth:"2"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"210",stroke:"#94a3b8",strokeWidth:"2"}),[{name:"Debangshu",score:88,x:80,h:140,color:"#38bdf8"},{name:"Susmita",score:94,x:160,h:160,color:"#10b981"},{name:"Swadeep",score:76,x:240,h:110,color:"#f59e0b"},{name:"Tuhina",score:91,x:320,h:150,color:"#ec4899"},{name:"Sachin",score:84,x:400,h:130,color:"#8b5cf6"}].map((t,s)=>e.jsxs("g",{children:[e.jsx("rect",{x:t.x-20,y:210-t.h,width:"40",height:t.h,fill:t.color,rx:"4",opacity:"0.85"}),e.jsx("text",{x:t.x,y:200-t.h,fill:"#ffffff",fontSize:"10",textAnchor:"middle",fontWeight:"bold",children:t.score}),e.jsx("text",{x:t.x,y:"225",fill:"#cbd5e1",fontSize:"10",textAnchor:"middle",children:t.name})]},s)),e.jsx("text",{x:"20",y:"115",fill:"#94a3b8",fontSize:"11",textAnchor:"middle",transform:"rotate(-90 20 115)",children:"Marks (%)"})]})]}),e.jsxs("div",{className:"lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 mb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-slate-400 font-semibold flex items-center gap-1.5",children:[e.jsx(W,{className:"w-3.5 h-3.5 text-sky-400"}),o==="stateful"?"Pyplot Stateful Script":"Object-Oriented (OO) Script"]}),e.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300",children:"Python 3"})]}),o==="stateful"?e.jsx("pre",{className:"text-sky-300 leading-relaxed overflow-x-auto",children:`import matplotlib.pyplot as plt

# 1. Stateful implicit canvas
plt.figure(figsize=(6, 3))
plt.plot(epochs, train_loss, 'r--', label='Train Loss')
plt.plot(epochs, val_loss, 'b-', label='Val Loss')

# 2. Stateful mutations
plt.title("Model Convergence")
plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.legend()
plt.grid(True)
plt.show()`}):e.jsx("pre",{className:"text-emerald-300 leading-relaxed overflow-x-auto",children:`import matplotlib.pyplot as plt

# 1. Explicit Container & Axes
fig, ax = plt.subplots(figsize=(6, 3))

# 2. Direct Artist methods
ax.plot(epochs, train_loss, 'r--', label='Train Loss')
ax.plot(epochs, val_loss, 'b-', label='Val Loss')

ax.set_title("Model Convergence")
ax.set_xlabel("Epoch")
ax.set_ylabel("Loss")
ax.legend()
ax.grid(True)
plt.show()`}),e.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400",children:[e.jsx("strong",{className:"text-slate-200",children:"Key Takeaway:"})," ",o==="stateful"?"Pyplot assumes an active global state. Can cause cross-axis mutation bugs when multiple figures are open.":"OO approach uses explicit handles `fig` and `ax`, making it robust for subplots and multi-threaded ML servers."]})]})]})]})]}),n==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(T,{className:"text-sky-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore production-ready runnable scripts covering architecture, state machine management, and data pipelines."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>I(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${i===t?"bg-sky-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-sky-400",children:h[i].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:h[i].desc})]}),e.jsxs("button",{onClick:()=>k(h[i].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[d?e.jsx(P,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),d?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:h[i].code})})]}),n==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(C,{className:"text-sky-400 w-5 h-5"}),"Comprehensive Technical Notes"]}),e.jsxs("button",{onClick:()=>k(E),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[d?e.jsx(P,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),d?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:E})]}),n==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(O,{className:"text-sky-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of Matplotlib architecture, state management, and OO interfaces."})]}),p&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-sky-950 border border-sky-500/40 text-sky-300 text-sm font-bold",children:["Score: ",N()," / ",c.length," (",Math.round(N()/c.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:c.map((t,s)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[s+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((a,m)=>{const S=g[t.id]===m,A=t.correctAnswer===m;let b="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return p?A?b="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":S&&!A&&(b="border-rose-500 bg-rose-950/40 text-rose-200"):S&&(b="border-sky-500 bg-sky-950/50 text-sky-200 ring-1 ring-sky-500"),e.jsx("button",{onClick:()=>!p&&D(t.id,m),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${b}`,children:a},m)})}),p&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-sky-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{v({}),w(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>w(!0),disabled:Object.keys(g).length<c.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-sky-600 text-white hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-sky-600/30",children:"Submit Quiz"})]})]})]})]})}export{$ as default};
