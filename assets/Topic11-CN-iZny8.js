import{b as n,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as R,bp as S,bo as W,r as _,F as N,aa as v,aM as G,d as I,aN as P,f as C,g as k}from"./vendor-icons-ri6cs58t.js";const D=`"""\r
=============================================================================\r
TOPIC 11: Subplots with plt.subplot()\r
Script 01: Classic 1-Based Subplot Indexing vs plt.subplots()\r
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
section("1. Classic Procedural plt.subplot(nrows, ncols, index)")\r
print("""\r
Classic 3-digit shorthand notation:\r
  • plt.subplot(2, 2, 1) or plt.subplot(221) -> Top-Left (1-indexed)\r
  • plt.subplot(2, 2, 2) or plt.subplot(222) -> Top-Right\r
  • plt.subplot(2, 2, 3) or plt.subplot(223) -> Bottom-Left\r
  • plt.subplot(2, 2, 4) or plt.subplot(224) -> Bottom-Right\r
""")\r
\r
fig = plt.figure(figsize=(9, 6))\r
\r
x = np.linspace(0, 10, 100)\r
\r
# Subplot 1: Sine\r
plt.subplot(2, 2, 1)\r
plt.plot(x, np.sin(x), 'b-')\r
plt.title("1. Sine Wave")\r
plt.grid(True, alpha=0.3)\r
\r
# Subplot 2: Cosine\r
plt.subplot(2, 2, 2)\r
plt.plot(x, np.cos(x), 'r--')\r
plt.title("2. Cosine Wave")\r
plt.grid(True, alpha=0.3)\r
\r
# Subplot 3: Exponential Decay\r
plt.subplot(2, 2, 3)\r
plt.plot(x, np.exp(-0.3 * x), 'g:')\r
plt.title("3. Exponential Decay")\r
plt.grid(True, alpha=0.3)\r
\r
# Subplot 4: Damped Oscillation\r
plt.subplot(2, 2, 4)\r
plt.plot(x, np.exp(-0.2 * x) * np.sin(2 * x), 'm-.')\r
plt.title("4. Damped Oscillation")\r
plt.grid(True, alpha=0.3)\r
\r
fig.suptitle("Classic 2x2 Multi-Panel Visual using plt.subplot()", fontsize=13, fontweight='bold')\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ 2x2 subplot grid constructed using classic 1-indexed procedural commands.")\r
`,E=`"""\r
=============================================================================\r
TOPIC 11: Subplots with plt.subplot()\r
Script 02: Complex GridSpec Layouts (Marginal Distribution Plot)\r
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
section("1. Joint Feature Scatter with Marginal Histograms using GridSpec")\r
\r
np.random.seed(42)\r
x = np.random.randn(500)\r
y = 0.5 * x + np.random.randn(500) * 0.8\r
\r
fig = plt.figure(figsize=(8, 8))\r
\r
# Define GridSpec layout: 4 rows x 4 cols with custom height/width ratios\r
gs = fig.add_gridspec(\r
    4, 4,\r
    width_ratios=[4, 4, 4, 1.2],\r
    height_ratios=[1.2, 4, 4, 4],\r
    wspace=0.1, hspace=0.1\r
)\r
\r
# 1. Top Marginal Histogram for Feature X: Spans Row 0, Cols 0 to 2\r
ax_histx = fig.add_subplot(gs[0, 0:3])\r
ax_histx.hist(x, bins=30, color='#38bdf8', edgecolor='#0f172a')\r
ax_histx.tick_params(axis='x', labelbottom=False)\r
ax_histx.set_ylabel("Counts")\r
ax_histx.grid(True, linestyle=":", alpha=0.3)\r
\r
# 2. Main Central 2D Scatter: Spans Rows 1 to 3, Cols 0 to 2\r
ax_scatter = fig.add_subplot(gs[1:4, 0:3], sharex=ax_histx)\r
ax_scatter.scatter(x, y, color='#6366f1', alpha=0.6, edgecolors='black', s=25)\r
ax_scatter.set_xlabel("Feature X")\r
ax_scatter.set_ylabel("Feature Y")\r
ax_scatter.grid(True, linestyle=":", alpha=0.3)\r
\r
# 3. Right Marginal Histogram for Feature Y: Spans Rows 1 to 3, Col 3\r
ax_histy = fig.add_subplot(gs[1:4, 3], sharey=ax_scatter)\r
ax_histy.hist(y, bins=30, orientation='horizontal', color='#ec4899', edgecolor='#0f172a')\r
ax_histy.tick_params(axis='y', labelleft=False)\r
ax_histy.set_xlabel("Counts")\r
ax_histy.grid(True, linestyle=":", alpha=0.3)\r
\r
fig.suptitle("Machine Learning Bivariate Feature Correlation & Marginals", fontsize=12, fontweight='bold', y=0.95)\r
plt.close(fig)\r
\r
print("✓ Complex asymmetric layout with marginal distribution plots created via GridSpec.")\r
`,H=`"""\r
=============================================================================\r
TOPIC 11: Subplots with plt.subplot()\r
Script 03: Inset Zoom Axes (ax.inset_axes & indicate_inset_zoom)\r
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
section("1. Magnifying Critical Model Regions with Inset Axes")\r
\r
fig, ax = plt.subplots(figsize=(8, 4.5))\r
\r
x = np.linspace(0, 10, 500)\r
# High-frequency signal with subtle local minimum\r
loss = np.exp(-0.3 * x) * np.sin(5 * x) + 0.5\r
\r
ax.plot(x, loss, color='#0284c7', lw=2, label='Global Loss Landscape')\r
ax.set_title("Loss Landscape with Inset Zoom on Local Minimum", fontweight='bold')\r
ax.set_xlabel("Parameter Value (w)")\r
ax.set_ylabel("Loss Function Value")\r
ax.grid(True, alpha=0.3)\r
\r
# 1. Create Inset Axes within main plot bounds: [x0, y0, width, height] in normalized axes units\r
axins = ax.inset_axes([0.5, 0.45, 0.45, 0.45])\r
axins.plot(x, loss, color='#0284c7', lw=2.5)\r
\r
# Sub-region coordinates to zoom into\r
x1, x2, y1, y2 = 2.8, 3.8, 0.05, 0.45\r
axins.set_xlim(x1, x2)\r
axins.set_ylim(y1, y2)\r
axins.grid(True, linestyle=":", alpha=0.6)\r
axins.set_title("Zoom (Local Min)", fontsize=8, fontweight='bold')\r
\r
# 2. Draw connecting indicator lines between zoomed region and inset box\r
ax.indicate_inset_zoom(axins, edgecolor='#ef4444', alpha=0.8)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Inset magnification subplot generated with connecting indicator lines.")\r
`,T="MATPLOTLIB ESSENTIALS: TOPIC 11 NOTE\r\n=============================================================================\r\nTOPIC: Subplots (plt.subplot, GridSpec, Inset Zoom Axes)\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. SUBPLOT SYNTAX PARADIGMS:\r\n   - Procedural 1-indexed: `plt.subplot(nrows, ncols, index)` where index ranges from `1` to `nrows * ncols`.\r\n   - 3-digit shortcut: `plt.subplot(221)` (only valid when nrows, ncols, index are single digits < 10).\r\n   - Object-Oriented multi-axes: `fig, axs = plt.subplots(nrows, ncols)` (returns 0-indexed ndarray).\r\n\r\n2. ADVANCED ASYMMETRIC GRIDSPEC:\r\n   - `import matplotlib.gridspec as gridspec` or `gs = fig.add_gridspec(nrows, ncols, width_ratios=[...], height_ratios=[...])`\r\n   - Slicing multi-cell spans:\r\n     * `ax_hero = fig.add_subplot(gs[0, :])` (spans full top row)\r\n     * `ax_b1   = fig.add_subplot(gs[1, 0])` (bottom left)\r\n     * `ax_b2   = fig.add_subplot(gs[1, 1])` (bottom right)\r\n   - Spacing control: `wspace=0.2, hspace=0.3`\r\n\r\n3. INSET ZOOM REGIONS:\r\n   - Embedding a zoomed microscope view inside a main plot:\r\n     ```python\r\n     axins = ax.inset_axes([x0, y0, width, height]) # Relative units [0.0 to 1.0]\r\n     axins.plot(x, y)\r\n     axins.set_xlim(zoom_xmin, zoom_xmax)\r\n     axins.set_ylim(zoom_ymin, zoom_ymax)\r\n     ax.indicate_inset_zoom(axins, edgecolor='red') # Draws indicator lines\r\n     ```\r\n\r\n4. SYNCHRONIZING AXES:\r\n   - `sharex=ax_ref`, `sharey=ax_ref` links panning and zooming across multiple subplots.\r\n",o=[{id:1,question:"In the classic procedural call `plt.subplot(3, 2, 4)`, what is the row and column position of the subplot?",options:["Row 2, Column 2 (2nd row, 2nd column)","Row 3, Column 2","Row 1, Column 4","Row 2, Column 1"],correctAnswer:0,explanation:"In a 3-row by 2-column grid, index 1=R1C1, index 2=R1C2, index 3=R2C1, and index 4=R2C2 (Row 2, Column 2)."},{id:2,question:"Which Matplotlib layout engine allows creating asymmetric subplots where a 'hero' plot spans across multiple rows or columns?",options:["matplotlib.gridspec.GridSpec / fig.add_gridspec()","plt.canvas_slice()","plt.mesh_subplots()","ax.span_table()"],correctAnswer:0,explanation:"`GridSpec` allows slicing grid cells across multiple rows and columns (e.g., `gs[0, :]` for full width, `gs[1:, 0]` for column span)."},{id:3,question:"How do you add an inset magnification box and automatically draw bounding connecting lines to the magnified region in Matplotlib?",options:["ax.inset_axes([x, y, w, h]) followed by ax.indicate_inset_zoom(axins)","plt.magnify()","ax.zoom_window()","fig.add_microscope()"],correctAnswer:0,explanation:"`ax.inset_axes()` instantiates the embedded child Axes and `ax.indicate_inset_zoom(axins)` draws the connector lines and box outline."},{id:4,question:"How does subplot indexing in `plt.subplot()` differ from NumPy array indexing in `plt.subplots()`?",options:["`plt.subplot()` is 1-indexed (1 to N), whereas `plt.subplots()` returns a 0-indexed NumPy ndarray (axs[0, 0])","`plt.subplot()` uses letters while `plt.subplots()` uses numbers","`plt.subplot()` is only for 3D plots","There is no difference"],correctAnswer:0,explanation:"`plt.subplot(nrows, ncols, index)` is 1-indexed following MATLAB conventions, whereas `plt.subplots()` returns standard 0-indexed NumPy arrays."}];function F(){const[r,M]=n.useState("studio"),[l,z]=n.useState(1),[a,m]=n.useState(!1),[s,A]=n.useState("grid2x2"),[h,b]=n.useState({}),[d,u]=n.useState(!1),x={1:{name:"01_classic_subplot_syntax_and_indexing.py",code:D,desc:"Classic 1-indexed plt.subplot(nrows, ncols, index) and 3-digit shorthand (221)"},2:{name:"02_complex_gridspec_asymmetric_layouts.py",code:E,desc:"Complex asymmetric GridSpec layouts, spanning cells, and marginal distribution plots"},3:{name:"03_inset_axes_and_zoomed_regions.py",code:H,desc:"Embedded microscope inset axes (ax.inset_axes) with connector lines"}},f=t=>{navigator.clipboard.writeText(t),m(!0),setTimeout(()=>m(!1),2e3)},L=(t,i)=>{b(g=>({...g,[t]:i}))},w=()=>{let t=0;return o.forEach(i=>{h[i.id]===i.correctAnswer&&t++}),t};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-indigo-900/40 via-blue-900/30 to-violet-900/40 border border-indigo-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(R,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 11: Subplots with plt.subplot() & GridSpec"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["Construct multi-panel model evaluation dashboards. Master classic 1-indexed ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"plt.subplot()"}),", modern ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"GridSpec"})," for asymmetric cell spanning (marginal histograms), and microscope ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"ax.inset_axes"})," for magnifying loss minima."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5",children:[e.jsx(S,{className:"w-3.5 h-3.5"})," plt.subplot & GridSpec"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5",children:[e.jsx(W,{className:"w-3.5 h-3.5"})," Inset Zoom Axes"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-indigo-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"When Sachin and Swadeep built a real-time training monitor, they wanted the main training loss curve on top taking 70% of the screen, and two smaller plots below comparing learning rate and gradient norms. Standard subplots were too rigid—using ',e.jsx("code",{className:"text-indigo-300 font-mono",children:"GridSpec"}),' gave them total layout freedom to build professional ML monitor dashboards!"']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Subplots & GridSpec Studio",icon:S},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:_},{id:"notes",label:"Revision Notes",icon:N},{id:"quiz",label:"MCQ Assessment",icon:v}].map(t=>{const i=t.icon;return e.jsxs("button",{onClick:()=>M(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${r===t.id?"border-indigo-500 text-indigo-400 bg-indigo-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(i,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[r==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(G,{className:"text-indigo-400 w-5 h-5"}),"Subplot Layout Architectures"]}),e.jsx("div",{className:"space-y-2.5",children:[{id:"grid2x2",title:"1. Symmetrical 2x2 Grid",desc:"Classic 4-panel evaluation: Loss, Accuracy, Precision, Recall"},{id:"hero",title:"2. Asymmetric Hero Dashboard",desc:"Wide Top Hero Plot + 2 Small Bottom Subplots (GridSpec)"},{id:"marginals",title:"3. Joint Plot with Marginals",desc:"Central Scatter + Top & Right Marginal Histograms"},{id:"inset",title:"4. Microscope Inset Zoom",desc:"Child Axes embedded inside main plot with connector lines"}].map(t=>e.jsxs("button",{onClick:()=>A(t.id),className:`w-full text-left p-3 rounded-xl border transition ${s===t.id?"border-indigo-500 bg-indigo-950/60 text-indigo-200 ring-1 ring-indigo-500 shadow-md":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("div",{className:"font-semibold text-white text-xs",children:t.title}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-0.5",children:t.desc})]},t.id))})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(I,{className:"w-4 h-4 text-indigo-400"}),"Live Subplot Structure Visualizer"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-indigo-300 border border-slate-800 uppercase",children:["Architecture: ",s]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:[s==="grid2x2"&&e.jsxs("svg",{viewBox:"0 0 500 240",className:"w-full max-w-lg h-56",children:[e.jsxs("g",{children:[e.jsx("rect",{x:"20",y:"20",width:"220",height:"95",fill:"#0f172a",stroke:"#334155",rx:"4"}),e.jsx("text",{x:"35",y:"40",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",children:"plt.subplot(2, 2, 1): Train Loss"}),e.jsx("path",{d:"M 35 100 Q 100 80 220 55",fill:"none",stroke:"#38bdf8",strokeWidth:"2"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"260",y:"20",width:"220",height:"95",fill:"#0f172a",stroke:"#334155",rx:"4"}),e.jsx("text",{x:"275",y:"40",fill:"#10b981",fontSize:"10",fontWeight:"bold",children:"plt.subplot(2, 2, 2): Val Accuracy"}),e.jsx("path",{d:"M 275 95 Q 360 80 460 45",fill:"none",stroke:"#10b981",strokeWidth:"2"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"20",y:"125",width:"220",height:"95",fill:"#0f172a",stroke:"#334155",rx:"4"}),e.jsx("text",{x:"35",y:"145",fill:"#f59e0b",fontSize:"10",fontWeight:"bold",children:"plt.subplot(2, 2, 3): F1-Score"}),e.jsx("path",{d:"M 35 200 Q 120 180 220 155",fill:"none",stroke:"#f59e0b",strokeWidth:"2"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"260",y:"125",width:"220",height:"95",fill:"#0f172a",stroke:"#334155",rx:"4"}),e.jsx("text",{x:"275",y:"145",fill:"#ec4899",fontSize:"10",fontWeight:"bold",children:"plt.subplot(2, 2, 4): Learning Rate"}),e.jsx("path",{d:"M 275 155 L 340 155 L 340 180 L 410 180 L 410 205 L 460 205",fill:"none",stroke:"#ec4899",strokeWidth:"2"})]})]}),s==="hero"&&e.jsxs("svg",{viewBox:"0 0 500 240",className:"w-full max-w-lg h-56",children:[e.jsxs("g",{children:[e.jsx("rect",{x:"20",y:"15",width:"460",height:"110",fill:"#0f172a",stroke:"#6366f1",strokeWidth:"1.5",rx:"4"}),e.jsx("text",{x:"35",y:"35",fill:"#a5b4fc",fontSize:"11",fontWeight:"bold",children:"gs[0, :] : Hero Training Convergence Curve"}),e.jsx("path",{d:"M 40 110 Q 150 90 280 50 T 460 35",fill:"none",stroke:"#818cf8",strokeWidth:"2.5"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"20",y:"135",width:"220",height:"90",fill:"#0f172a",stroke:"#334155",rx:"4"}),e.jsx("text",{x:"35",y:"155",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",children:"gs[1, 0]: Gradient Norms"}),e.jsx("path",{d:"M 35 210 Q 100 180 220 170",fill:"none",stroke:"#38bdf8",strokeWidth:"2"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"260",y:"135",width:"220",height:"90",fill:"#0f172a",stroke:"#334155",rx:"4"}),e.jsx("text",{x:"275",y:"155",fill:"#10b981",fontSize:"10",fontWeight:"bold",children:"gs[1, 1]: Epoch Durations"}),e.jsx("rect",{x:"285",y:"170",width:"25",height:"40",fill:"#10b981",rx:"2"}),e.jsx("rect",{x:"325",y:"165",width:"25",height:"45",fill:"#10b981",rx:"2"}),e.jsx("rect",{x:"365",y:"160",width:"25",height:"50",fill:"#10b981",rx:"2"}),e.jsx("rect",{x:"405",y:"162",width:"25",height:"48",fill:"#10b981",rx:"2"})]})]}),s==="marginals"&&e.jsxs("svg",{viewBox:"0 0 500 240",className:"w-full max-w-lg h-56",children:[e.jsx("rect",{x:"30",y:"15",width:"340",height:"45",fill:"#0f172a",stroke:"#38bdf8",rx:"3"}),e.jsx("text",{x:"45",y:"32",fill:"#38bdf8",fontSize:"9",fontWeight:"bold",children:"Top Marginal Hist (Feature X)"}),e.jsx("rect",{x:"30",y:"65",width:"340",height:"155",fill:"#0f172a",stroke:"#6366f1",rx:"3"}),e.jsx("text",{x:"45",y:"85",fill:"#a5b4fc",fontSize:"10",fontWeight:"bold",children:"Bivariate Feature Scatter Space"}),e.jsx("rect",{x:"380",y:"65",width:"90",height:"155",fill:"#0f172a",stroke:"#ec4899",rx:"3"}),e.jsx("text",{x:"390",y:"85",fill:"#ec4899",fontSize:"9",fontWeight:"bold",children:"Right Hist"})]}),s==="inset"&&e.jsxs("svg",{viewBox:"0 0 500 240",className:"w-full max-w-lg h-56",children:[e.jsx("rect",{x:"20",y:"15",width:"460",height:"210",fill:"#0f172a",stroke:"#334155",rx:"4"}),e.jsx("path",{d:"M 30 180 Q 120 170 200 130 T 360 80 T 470 50",fill:"none",stroke:"#38bdf8",strokeWidth:"2.5"}),e.jsx("rect",{x:"180",y:"115",width:"40",height:"30",fill:"none",stroke:"#ef4444",strokeDasharray:"3,3",strokeWidth:"1.5"}),e.jsx("line",{x1:"220",y1:"115",x2:"280",y2:"45",stroke:"#ef4444",strokeWidth:"1.2",strokeDasharray:"2,2"}),e.jsx("line",{x1:"220",y1:"145",x2:"280",y2:"135",stroke:"#ef4444",strokeWidth:"1.2",strokeDasharray:"2,2"}),e.jsx("rect",{x:"280",y:"45",width:"180",height:"90",fill:"#0b0f19",stroke:"#ef4444",strokeWidth:"1.5",rx:"4"}),e.jsx("text",{x:"290",y:"62",fill:"#ef4444",fontSize:"9",fontWeight:"bold",children:"ax.inset_axes (Microscope Zoom)"}),e.jsx("path",{d:"M 290 115 Q 360 110 440 85",fill:"none",stroke:"#38bdf8",strokeWidth:"3"})]})]})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(P,{className:"w-3.5 h-3.5 text-indigo-400"}),"Python Matplotlib Layout Code:"]}),e.jsx("pre",{className:"text-indigo-300",children:s==="grid2x2"?`fig, axs = plt.subplots(2, 2, figsize=(9, 6))
axs[0, 0].plot(epochs, train_loss)
axs[0, 1].plot(epochs, val_acc)
axs[1, 0].plot(epochs, f1_scores)
axs[1, 1].step(epochs, lr_schedule)`:s==="hero"?`gs = fig.add_gridspec(2, 2, height_ratios=[2, 1])
ax_hero = fig.add_subplot(gs[0, :]) # Spans full top row
ax_b1   = fig.add_subplot(gs[1, 0])
ax_b2   = fig.add_subplot(gs[1, 1])`:s==="marginals"?`gs = fig.add_gridspec(4, 4, width_ratios=[4,4,4,1.2], height_ratios=[1.2,4,4,4])
ax_histx = fig.add_subplot(gs[0, 0:3])
ax_main  = fig.add_subplot(gs[1:4, 0:3])
ax_histy = fig.add_subplot(gs[1:4, 3])`:`axins = ax.inset_axes([0.5, 0.45, 0.45, 0.45])
axins.plot(x, loss)
axins.set_xlim(2.8, 3.8); axins.set_ylim(0.05, 0.45)
ax.indicate_inset_zoom(axins, edgecolor='red')`})]})]})]})}),r==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(_,{className:"text-indigo-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore procedural subplots, asymmetric GridSpec layouts, and inset zoom magnifications."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>z(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${l===t?"bg-indigo-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-indigo-400",children:x[l].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:x[l].desc})]}),e.jsxs("button",{onClick:()=>f(x[l].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[a?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(k,{className:"w-3.5 h-3.5"}),a?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:x[l].code})})]}),r==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(N,{className:"text-indigo-400 w-5 h-5"}),"Subplots & GridSpec Technical Notes"]}),e.jsxs("button",{onClick:()=>f(T),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[a?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(k,{className:"w-3.5 h-3.5"}),a?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:T})]}),r==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(v,{className:"text-indigo-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of subplot indexing, GridSpec spanning, and inset zoom axes."})]}),d&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-indigo-950 border border-indigo-500/40 text-indigo-300 text-sm font-bold",children:["Score: ",w()," / ",o.length," (",Math.round(w()/o.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:o.map((t,i)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[i+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((g,c)=>{const y=h[t.id]===c,j=t.correctAnswer===c;let p="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return d?j?p="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":y&&!j&&(p="border-rose-500 bg-rose-950/40 text-rose-200"):y&&(p="border-indigo-500 bg-indigo-950/50 text-indigo-200 ring-1 ring-indigo-500"),e.jsx("button",{onClick:()=>!d&&L(t.id,c),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${p}`,children:g},c)})}),d&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-indigo-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{b({}),u(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>u(!0),disabled:Object.keys(h).length<o.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-indigo-600/30",children:"Submit Quiz"})]})]})]})]})}export{F as default};
