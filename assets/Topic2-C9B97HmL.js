import{b as n,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as O,be as A,z as I,bo as P,r as N,F as S,aa as T,I as L,f as C,g as _}from"./vendor-icons-ri6cs58t.js";const E=`"""\r
=============================================================================\r
TOPIC 2: Figure and Axes Concept\r
Script 01: The Visual Anatomy of a Matplotlib Plot\r
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
# -----------------------------------------------------------------------------\r
# 1. Deconstructing Figure vs Axes vs Axis\r
# -----------------------------------------------------------------------------\r
section("1. Figure vs Axes vs Axis Hierarchy")\r
\r
# Create Figure and Axes\r
fig, ax = plt.subplots(figsize=(8, 4))\r
\r
print(f"Figure Type       : {type(fig)}")\r
print(f"Axes Type         : {type(ax)}")\r
print(f"X-Axis Object     : {type(ax.xaxis)}")\r
print(f"Y-Axis Object     : {type(ax.yaxis)}")\r
print(f"Spines (Borders)  : {list(ax.spines.keys())}")\r
\r
# -----------------------------------------------------------------------------\r
# 2. Manipulating Spines, Ticks, and Grids\r
# -----------------------------------------------------------------------------\r
section("2. Fine-Grained Artist Manipulation")\r
\r
x = np.linspace(-5, 5, 200)\r
y = np.tanh(x)\r
\r
ax.plot(x, y, color="#6366f1", lw=2.5, label=r'$\\tanh(x)$')\r
\r
# Spine Customization (Clean ML look: hide top & right spines)\r
ax.spines['top'].set_visible(False)\r
ax.spines['right'].set_visible(False)\r
ax.spines['left'].set_color('#94a3b8')\r
ax.spines['bottom'].set_color('#94a3b8')\r
\r
# Customizing Ticks & Labels\r
ax.set_title("Hyperbolic Tangent Activation Anatomy", fontsize=13, fontweight='bold', pad=12)\r
ax.set_xlabel("Input Feature (x)", fontsize=10, labelpad=8)\r
ax.set_ylabel("Activation tanh(x)", fontsize=10, labelpad=8)\r
\r
# Major and Minor Ticks\r
ax.minorticks_on()\r
ax.grid(which='major', linestyle='-', linewidth=0.7, alpha=0.6)\r
ax.grid(which='minor', linestyle=':', linewidth=0.4, alpha=0.3)\r
\r
ax.legend(frameon=True, facecolor="#1e293b", edgecolor="#475569")\r
\r
plt.close(fig)\r
print("✓ Anatomy plot constructed: Spines, Ticks, Major/Minor grids customized successfully.")\r
`,W=`"""\r
=============================================================================\r
TOPIC 2: Figure and Axes Concept\r
Script 02: Multi-Axes Subplot Layouts & Dimension Unpacking\r
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
section("1. Unpacking 1D vs 2D Axes Arrays")\r
\r
# 1D Row of Subplots (1x3)\r
fig1, axs_1d = plt.subplots(1, 3, figsize=(12, 3))\r
print(f"1D axs shape: {axs_1d.shape} | Access via axs[0], axs[1], axs[2]")\r
plt.close(fig1)\r
\r
# 2D Grid of Subplots (2x2)\r
fig2, axs_2d = plt.subplots(2, 2, figsize=(8, 6), sharex=True, sharey=True)\r
print(f"2D axs shape: {axs_2d.shape} | Access via axs[row, col] or axs.flatten()")\r
\r
x = np.linspace(-3, 3, 100)\r
activations = {\r
    "ReLU": np.maximum(0, x),\r
    "LeakyReLU": np.where(x > 0, x, x * 0.1),\r
    "Sigmoid": 1 / (1 + np.exp(-x)),\r
    "ELU": np.where(x > 0, x, np.exp(x) - 1)\r
}\r
\r
# Iterating over flattened axes array\r
for ax, (name, y_vals) in zip(axs_2d.flatten(), activations.items()):\r
    ax.plot(x, y_vals, color="#0ea5e9", lw=2)\r
    ax.set_title(f"Func: {name}")\r
    ax.grid(True, linestyle="--", alpha=0.5)\r
\r
fig2.suptitle("Deep Learning Activation Functions Multi-Axes Grid", fontsize=14, fontweight='bold')\r
plt.tight_layout()\r
plt.close(fig2)\r
\r
print("✓ Successfully populated 2x2 grid using vectorized axes indexing.")\r
`,R=`"""\r
=============================================================================\r
TOPIC 2: Figure and Axes Concept\r
Script 03: Coordinate Transforms & Precision Text Annotations\r
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
section("1. Understanding Coordinate Transform Systems")\r
print("""\r
Matplotlib supports 3 primary coordinate spaces for placing text/shapes:\r
  1. ax.transData    : Data points (e.g., x=4.5, y=98.2)\r
  2. ax.transAxes    : Fraction of axes (0.0 to 1.0, where (0,0)=bottom-left, (1,1)=top-right)\r
  3. fig.transFigure : Fraction of entire window canvas (0.0 to 1.0)\r
""")\r
\r
fig, ax = plt.subplots(figsize=(7, 4))\r
x = np.linspace(0, 10, 100)\r
y = np.exp(-0.3 * x) * np.sin(2 * np.pi * 0.5 * x)\r
\r
ax.plot(x, y, color="#8b5cf6", lw=2, label="Damped Harmonic Oscillation")\r
\r
# 1. Annotation using Data coordinates + Arrow\r
peak_x, peak_y = 0.5, np.exp(-0.3 * 0.5) * np.sin(np.pi * 0.5)\r
ax.annotate(\r
    f"First Peak ({peak_x:.1f}, {peak_y:.2f})",\r
    xy=(peak_x, peak_y),\r
    xytext=(peak_x + 1.5, peak_y + 0.3),\r
    arrowprops=dict(facecolor='#f43f5e', shrink=0.05, width=1.5, headwidth=7),\r
    fontsize=10,\r
    fontweight='bold',\r
    color='#f43f5e'\r
)\r
\r
# 2. Watermark / Metric Box using Axes Coordinates (Relative 0.0 to 1.0)\r
ax.text(\r
    0.95, 0.95,\r
    "Coder & AccoTax ML Lab\\nModel Precision: 98.4%",\r
    transform=ax.transAxes,\r
    fontsize=9,\r
    verticalalignment='top',\r
    horizontalalignment='right',\r
    bbox=dict(boxstyle='round,pad=0.5', facecolor='#0f172a', edgecolor='#6366f1', alpha=0.9),\r
    color='#e2e8f0'\r
)\r
\r
ax.set_title("Coordinate Transform Demonstration")\r
ax.grid(True, alpha=0.3)\r
plt.close(fig)\r
\r
print("✓ Annotated chart created using both transData and transAxes coordinate systems.")\r
`,F="MATPLOTLIB ESSENTIALS: TOPIC 2 NOTE\r\n=============================================================================\r\nTOPIC: Figure, Axes, Axis, Spines & Coordinate Transforms\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. THE CORE HIERARCHY:\r\n   - Figure (Top container): The entire window or page canvas holding one or more Axes. Created with `plt.figure()` or `plt.subplots()`.\r\n   - Axes (The Plot region): The coordinate bounding box where data is actually plotted. Contains methods like `.plot()`, `.scatter()`, `.set_title()`, `.set_xlabel()`.\r\n   - Axis (X and Y Number Lines): Objects (`ax.xaxis`, `ax.yaxis`) managing ticks, tick locators, grid lines, and data scaling (linear/log).\r\n   - Spines (Bounding Borders): The 4 boundary lines of the data area (`ax.spines['top']`, `'bottom'`, `'left'`, `'right'`).\r\n\r\n2. MULTI-AXES SUBPLOT LAYOUTS:\r\n   - `fig, ax = plt.subplots(nrows, ncols)`\r\n   - When nrows=1, ncols=1: returns scalar `ax`\r\n   - When nrows=1, ncols>1 or nrows>1, ncols=1: returns 1D array `axs[0]`, `axs[1]`\r\n   - When nrows>1, ncols>1: returns 2D ndarray `axs[row, col]`\r\n   - Flattening 2D arrays: `for ax in axs.flatten():` or `axs.ravel()` makes looping clean regardless of grid dimensions.\r\n   - `sharex=True, sharey=True`: Synchronizes axis limits and zoom across all subplots.\r\n\r\n3. COORDINATE SYSTEMS & TRANSFORMS:\r\n   - `ax.transData`: Uses raw data values (e.g., x=10.5, y=250.0). Ideal for marking outlier data points.\r\n   - `ax.transAxes`: Relative coordinates within the current Axes (0.0 to 1.0, where (0,0)=bottom-left, (1,1)=top-right). Ideal for metric boxes, legends, and corner text.\r\n   - `fig.transFigure`: Relative coordinates across the whole canvas. Ideal for overall super-titles and watermarks.\r\n\r\n4. ARTIST CUSTOMIZATION TIPS:\r\n   - Hiding spines: `ax.spines['top'].set_visible(False)`\r\n   - Super title for figure: `fig.suptitle(\"Main Title\", fontsize=16)`\r\n   - Automatic layout spacing: `plt.tight_layout()` or `plt.subplots(..., constrained_layout=True)`\r\n",d=[{id:1,question:"What is returned by calling `fig, axs = plt.subplots(2, 3)`?",options:["A Figure object and a single Axes object","A Figure object and a 2D NumPy array of Axes objects of shape (2, 3)","A list of 6 Figure objects","A Figure object and a 1D Python list of 6 tuples"],correctAnswer:1,explanation:"`plt.subplots(nrows, ncols)` returns a Figure container and a 2D NumPy ndarray of Axes instances indexed by `axs[row, col]` when both nrows and ncols > 1."},{id:2,question:"What are 'Spines' in a Matplotlib Axes object?",options:["The legend bounding box borders","The 4 lines connecting the axis tick marks that delimit the data area (top, bottom, left, right)","The line connecting data points in a line plot","The internal background gridlines"],correctAnswer:1,explanation:"Spines are the 4 boundary lines delimiting the data area (`top`, `bottom`, `left`, `right`) which can be hidden or moved to style charts."},{id:3,question:"When placing a text box in the upper right corner of a subplot regardless of the data scale, which coordinate transform should be specified?",options:["transform=ax.transData","transform=ax.transAxes with coordinates near (0.95, 0.95)","transform=ax.pixels","transform=plt.globalTransform"],correctAnswer:1,explanation:"`ax.transAxes` uses normalized unit coordinates from (0,0) at bottom-left to (1,1) at top-right of the Axes, making it independent of data limits."},{id:4,question:"How do you set a single main title for an entire Figure containing multiple subplots?",options:["ax.set_title()","plt.axes_title()","fig.suptitle()","fig.add_header()"],correctAnswer:2,explanation:"`fig.suptitle('Global Title')` adds a centralized super-title across the whole Figure above all individual Axes titles."}];function U(){const[i,M]=n.useState("studio"),[o,D]=n.useState(1),[x,u]=n.useState(!1),[s,r]=n.useState("axes"),[b,f]=n.useState({}),[c,y]=n.useState(!1),p={1:{name:"01_figure_axes_anatomy.py",code:E,desc:"Anatomy of Figure, Axes, Axis, Spines, and Ticks"},2:{name:"02_subplots_layout_anatomy.py",code:W,desc:"Multi-Axes subplots, 1D/2D array indexing, and layout management"},3:{name:"03_axes_coordinates_and_transforms.py",code:R,desc:"Coordinate transform systems (transData, transAxes, transFigure)"}},j=t=>{navigator.clipboard.writeText(t),u(!0),setTimeout(()=>u(!1),2e3)},z=(t,a)=>{f(g=>({...g,[t]:a}))},w=()=>{let t=0;return d.forEach(a=>{b[a.id]===a.correctAnswer&&t++}),t},l={figure:{name:"Figure Container (fig)",role:"The overarching top-level window/canvas holding one or more subplots, titles, and global canvas properties.",methods:["fig.suptitle()","fig.savefig()","fig.tight_layout()","fig.colorbar()"],color:"border-purple-500 text-purple-300 bg-purple-950/40"},axes:{name:"Axes Object (ax)",role:"The coordinate bounding box (subplot) where data points, lines, bars, legends, and gridlines reside.",methods:["ax.plot()","ax.set_title()","ax.set_xlabel()","ax.set_ylim()","ax.grid()"],color:"border-sky-500 text-sky-300 bg-sky-950/40"},spines:{name:"Spines (ax.spines)",role:"The four boundary lines enclosing the data area: 'top', 'bottom', 'left', 'right'. Can be hidden or colored.",methods:["ax.spines['top'].set_visible(False)","ax.spines['left'].set_color('gray')"],color:"border-emerald-500 text-emerald-300 bg-emerald-950/40"},axis:{name:"X-Axis / Y-Axis (ax.xaxis, ax.yaxis)",role:"Handles tick marks, tick locators, major/minor tick formatting, and data scale (linear, log).",methods:["ax.xaxis.set_major_locator()","ax.yaxis.set_major_formatter()","ax.minorticks_on()"],color:"border-amber-500 text-amber-300 bg-amber-950/40"},annotation:{name:"Annotations & Text (ax.annotate / ax.text)",role:"Places contextual callouts, arrows, and KPI metric watermarks using Data or Axes coordinates.",methods:["ax.annotate('Outlier', xy=(x,y), xytext=(x2,y2), arrowprops=...)","ax.text(0.95, 0.95, 'KPI', transform=ax.transAxes)"],color:"border-rose-500 text-rose-300 bg-rose-950/40"}};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-sky-900/40 border border-indigo-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(O,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 2: Figure & Axes Concept"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["Deconstruct the visual anatomy of a Matplotlib chart. Master the distinction between the top-level ",e.jsx("code",{className:"text-indigo-300",children:"Figure"})," container, the plotting ",e.jsx("code",{className:"text-sky-300",children:"Axes"}),", ",e.jsx("code",{className:"text-emerald-300",children:"Spines"}),", ",e.jsx("code",{className:"text-amber-300",children:"Axis ticks"}),", and coordinate spaces."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5",children:[e.jsx(A,{className:"w-3.5 h-3.5"})," Figure Canvas"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30 flex items-center gap-1.5",children:[e.jsx(I,{className:"w-3.5 h-3.5"})," Axes Subplots"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-indigo-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"Students frequently confuse an ',e.jsx("code",{className:"text-sky-300",children:"Axes"})," with the plural of the x-axis line! In Matplotlib, the ",e.jsx("strong",{children:"Figure"})," is the picture frame, the ",e.jsx("strong",{children:"Axes"})," is the canvas with coordinate systems where you paint graphs, and the ",e.jsx("strong",{children:"Axis"}),' is the number line with ticks. Once Susmita and Debangshu understood this hierarchy, creating multi-subplot neural network metric dashboards became effortless."']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Visual Anatomy Explorer",icon:P},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:N},{id:"notes",label:"Revision Notes",icon:S},{id:"quiz",label:"MCQ Assessment",icon:T}].map(t=>{const a=t.icon;return e.jsxs("button",{onClick:()=>M(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${i===t.id?"border-indigo-500 text-indigo-400 bg-indigo-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(a,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[i==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(A,{className:"text-indigo-400 w-5 h-5"}),"Visual Anatomy Interactive Diagram"]}),e.jsx("span",{className:"text-xs text-slate-400",children:"Click any element button or hotspot to inspect its role"})]}),e.jsx("div",{className:"relative bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 540 280",className:"w-full max-w-xl h-64",children:[e.jsx("rect",{x:"10",y:"10",width:"520",height:"260",fill:"#0b0f19",stroke:s==="figure"?"#a855f7":"#475569",strokeWidth:s==="figure"?"3":"1.5",strokeDasharray:s==="figure"?"0":"6,6",rx:"10",className:"cursor-pointer transition-all",onClick:()=>r("figure")}),e.jsx("text",{x:"30",y:"30",fill:"#a855f7",fontSize:"11",fontWeight:"bold",children:"Figure Container (fig)"}),e.jsx("text",{x:"270",y:"35",fill:"#f8fafc",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:'fig.suptitle("Machine Learning Training Evaluation Dashboard")'}),e.jsx("rect",{x:"70",y:"60",width:"430",height:"170",fill:"#0f172a",stroke:s==="axes"?"#38bdf8":"#334155",strokeWidth:s==="axes"?"3":"1.5",rx:"4",className:"cursor-pointer transition-all",onClick:()=>r("axes")}),e.jsx("text",{x:"85",y:"80",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:"Axes (ax)"}),e.jsx("line",{x1:"70",y1:"230",x2:"500",y2:"230",stroke:s==="spines"?"#10b981":"#64748b",strokeWidth:s==="spines"?"4":"2",className:"cursor-pointer",onClick:()=>r("spines")}),e.jsx("line",{x1:"70",y1:"60",x2:"70",y2:"230",stroke:s==="spines"?"#10b981":"#64748b",strokeWidth:s==="spines"?"4":"2",className:"cursor-pointer",onClick:()=>r("spines")}),e.jsx("line",{x1:"70",y1:"60",x2:"500",y2:"60",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3,3"}),e.jsx("line",{x1:"500",y1:"60",x2:"500",y2:"230",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3,3"}),[100,140,180].map(t=>e.jsx("line",{x1:"70",y1:t,x2:"500",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),[150,240,330,420].map(t=>e.jsx("line",{x1:t,y1:"60",x2:t,y2:"230",stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("path",{d:"M 70 210 Q 180 190 280 120 T 500 80",fill:"none",stroke:"#6366f1",strokeWidth:"3"}),[{x:70,label:"0"},{x:150,label:"25"},{x:240,label:"50"},{x:330,label:"75"},{x:420,label:"100"},{x:500,label:"125"}].map((t,a)=>e.jsxs("g",{className:"cursor-pointer",onClick:()=>r("axis"),children:[e.jsx("line",{x1:t.x,y1:"230",x2:t.x,y2:"236",stroke:s==="axis"?"#f59e0b":"#94a3b8",strokeWidth:"2"}),e.jsx("text",{x:t.x,y:"248",fill:s==="axis"?"#f59e0b":"#94a3b8",fontSize:"9",textAnchor:"middle",children:t.label})]},a)),[{y:230,label:"0.0"},{y:180,label:"0.3"},{y:140,label:"0.6"},{y:100,label:"0.9"},{y:60,label:"1.0"}].map((t,a)=>e.jsxs("g",{className:"cursor-pointer",onClick:()=>r("axis"),children:[e.jsx("line",{x1:"64",y1:t.y,x2:"70",y2:t.y,stroke:s==="axis"?"#f59e0b":"#94a3b8",strokeWidth:"2"}),e.jsx("text",{x:"58",y:t.y+3,fill:s==="axis"?"#f59e0b":"#94a3b8",fontSize:"9",textAnchor:"end",children:t.label})]},a)),e.jsxs("g",{className:"cursor-pointer",onClick:()=>r("annotation"),children:[e.jsx("circle",{cx:"280",cy:"120",r:"5",fill:"#f43f5e"}),e.jsx("line",{x1:"280",y1:"120",x2:"330",y2:"90",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("rect",{x:"330",y:"75",width:"100",height:"25",fill:"#1e1b4b",stroke:"#f43f5e",rx:"4"}),e.jsx("text",{x:"380",y:"91",fill:"#fda4af",fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:"ax.annotate()"})]}),e.jsx("text",{x:"285",y:"265",fill:"#cbd5e1",fontSize:"10",textAnchor:"middle",children:"Epochs (ax.set_xlabel)"}),e.jsx("text",{x:"25",y:"145",fill:"#cbd5e1",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 25 145)",children:"Accuracy (ax.set_ylabel)"})]})})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800",children:Object.keys(l).map(t=>e.jsx("button",{onClick:()=>r(t),className:`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize border transition-all ${s===t?l[t].color+" ring-1":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:t},t))})]}),e.jsxs("div",{className:"lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2",children:[e.jsx(L,{className:"w-4 h-4 text-indigo-400"}),"Artist Component Inspector"]}),e.jsx("h3",{className:"text-xl font-extrabold text-white",children:l[s].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-2 leading-relaxed",children:l[s].role})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-2",children:"Key Methods & Properties:"}),e.jsx("div",{className:"space-y-1.5",children:l[s].methods.map((t,a)=>e.jsx("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800 font-mono text-xs text-indigo-300",children:t},a))})]}),e.jsxs("div",{className:"bg-indigo-950/40 border border-indigo-500/30 p-3.5 rounded-xl text-xs text-indigo-200",children:[e.jsx("strong",{className:"font-semibold text-white",children:"Pro Tip:"})," When plotting 4 metrics (Loss, Accuracy, Precision, Recall), use ",e.jsx("code",{className:"text-sky-300",children:"fig, axs = plt.subplots(2, 2)"})," and loop with ",e.jsx("code",{className:"text-sky-300",children:"for ax in axs.flat:"}),"."]})]})]})}),i==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(N,{className:"text-indigo-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore plot anatomy, multi-axes grid unpacking, and coordinate transformations."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>D(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${o===t?"bg-indigo-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-indigo-400",children:p[o].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:p[o].desc})]}),e.jsxs("button",{onClick:()=>j(p[o].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[x?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),x?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:p[o].code})})]}),i==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(S,{className:"text-indigo-400 w-5 h-5"}),"Technical Reference & Hierarchy Notes"]}),e.jsxs("button",{onClick:()=>j(F),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[x?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),x?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:F})]}),i==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(T,{className:"text-indigo-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of Figure, Axes, Spines, and coordinate spaces."})]}),c&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-indigo-950 border border-indigo-500/40 text-indigo-300 text-sm font-bold",children:["Score: ",w()," / ",d.length," (",Math.round(w()/d.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:d.map((t,a)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[a+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((g,h)=>{const k=b[t.id]===h,v=t.correctAnswer===h;let m="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return c?v?m="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":k&&!v&&(m="border-rose-500 bg-rose-950/40 text-rose-200"):k&&(m="border-indigo-500 bg-indigo-950/50 text-indigo-200 ring-1 ring-indigo-500"),e.jsx("button",{onClick:()=>!c&&z(t.id,h),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${m}`,children:g},h)})}),c&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-indigo-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{f({}),y(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>y(!0),disabled:Object.keys(b).length<d.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-indigo-600/30",children:"Submit Quiz"})]})]})]})]})}export{U as default};
