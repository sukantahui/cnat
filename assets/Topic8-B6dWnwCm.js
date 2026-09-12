import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as X,x as L,bz as F,r as A,F as C,aa as k,aM as W,d as G,aN as H,f as M,g as z}from"./vendor-icons-ri6cs58t.js";const U=`"""\r
=============================================================================\r
TOPIC 8: Adding Titles, Labels and Legends\r
Script 01: Typography, LaTeX Mathematical Notation & Padding\r
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
section("1. LaTeX Mathematical Notation & Advanced Label Styling")\r
\r
fig, ax = plt.subplots(figsize=(8, 4.5))\r
\r
x = np.linspace(-3, 3, 200)\r
# Normal Gaussian Density formula\r
gaussian = (1 / np.sqrt(2 * np.pi)) * np.exp(-0.5 * x**2)\r
# Logistic Sigmoid formula\r
sigmoid = 1 / (1 + np.exp(-x))\r
\r
ax.plot(x, gaussian, color='#38bdf8', lw=2.5, label=r'$\\mathcal{N}(x; 0, 1) = \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}}$')\r
ax.plot(x, sigmoid, color='#f43f5e', lw=2.5, linestyle='--', label=r'$\\sigma(x) = \\frac{1}{1 + e^{-x}}$')\r
\r
# High-impact typography with padding\r
ax.set_title(\r
    "Mathematical Comparison of Gaussian vs Logistic Sigmoid",\r
    fontsize=12,\r
    fontweight='bold',\r
    color='#0f172a',\r
    pad=15\r
)\r
ax.set_xlabel("Input Space $x \\in \\mathbb{R}$", fontsize=10, labelpad=10)\r
ax.set_ylabel("Probability / Output Magnitude", fontsize=10, labelpad=10)\r
\r
# Multi-column LaTeX Legend\r
ax.legend(\r
    loc="upper left",\r
    fontsize=9.5,\r
    framealpha=0.9,\r
    edgecolor='#cbd5e1',\r
    shadow=True\r
)\r
ax.grid(True, linestyle=":", alpha=0.5)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Rendered LaTeX mathematical notations and formatted labels successfully.")\r
`,q=`"""\r
=============================================================================\r
TOPIC 8: Adding Titles, Labels and Legends\r
Script 02: Legend Placement & bbox_to_anchor Outside Canvas\r
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
section("1. Placing Legends Outside Plot Canvas with bbox_to_anchor")\r
\r
fig, ax = plt.subplots(figsize=(8, 4.5))\r
\r
x = np.linspace(0, 10, 100)\r
colors = ['#0284c7', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#ef4444']\r
\r
for i, c in enumerate(colors, 1):\r
    ax.plot(x, np.sin(x + i*0.5) * (1 / i**0.5), color=c, lw=2, label=f'Sensor {i:02d} (Freq {i*2}Hz)')\r
\r
ax.set_title("Multi-Sensor Real-Time Stream", fontweight='bold')\r
ax.set_xlabel("Time (seconds)")\r
ax.set_ylabel("Amplitude (mV)")\r
\r
# Place legend completely OUTSIDE the axes to the right\r
# bbox_to_anchor=(x_pos, y_pos) where (1.02, 1) puts it just beyond right border\r
ax.legend(\r
    bbox_to_anchor=(1.02, 1),\r
    loc='upper left',\r
    borderaxespad=0.,\r
    frameon=True,\r
    title="Sensor Nodes",\r
    title_fontsize=9.5,\r
    fontsize=8.5\r
)\r
ax.grid(True, linestyle="--", alpha=0.3)\r
\r
# Notice: bbox_inches='tight' is essential when saving figures with external legends!\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ External legend positioned with bbox_to_anchor=(1.02, 1).")\r
`,Q=`"""\r
=============================================================================\r
TOPIC 8: Adding Titles, Labels and Legends\r
Script 03: Attaching Multiple Legends to a Single Axes Object\r
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
section("1. Adding Multiple Independent Legends with ax.add_artist()")\r
\r
fig, ax = plt.subplots(figsize=(8, 4.5))\r
\r
x = np.arange(1, 11)\r
# Model 1\r
line1, = ax.plot(x, x**1.2, 'b-', label='ResNet-50 (Architecture)')\r
line2, = ax.plot(x, x**1.4, 'b--', label='ViT-Base (Architecture)')\r
\r
# Optimizers\r
line3, = ax.plot(x, x**1.1, 'r-', label='AdamW (Optimizer)')\r
line4, = ax.plot(x, x**1.3, 'r:', label='SGD+Momentum (Optimizer)')\r
\r
# Legend 1: Architectures (Top Left)\r
first_legend = ax.legend(handles=[line1, line2], loc='upper left', title='Architectures')\r
\r
# CRITICAL STEP: Add the first legend manually as an Artist to the Axes\r
# Calling ax.legend() again without this step will overwrite the first legend!\r
ax.add_artist(first_legend)\r
\r
# Legend 2: Optimizers (Bottom Right)\r
ax.legend(handles=[line3, line4], loc='lower right', title='Optimizers')\r
\r
ax.set_title("Neural Network Convergence with Dual Independent Legends", fontweight='bold')\r
ax.set_xlabel("Epochs")\r
ax.set_ylabel("Metric Scaling")\r
ax.grid(True, linestyle=":", alpha=0.4)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Two distinct legends attached to a single Axes using ax.add_artist().")\r
`,E="MATPLOTLIB ESSENTIALS: TOPIC 8 NOTE\r\n=============================================================================\r\nTOPIC: Titles, Axis Labels, LaTeX Math & Advanced Legend Placement\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. TITLES & AXIS LABELS:\r\n   - Super Title (Figure-wide): `fig.suptitle(\"Overall System Dashboard\", fontsize=14, y=0.98)`\r\n   - Subplot Title: `ax.set_title(\"Subplot Specific\", fontsize=11, pad=12, loc='left'|'center'|'right')`\r\n   - Axis Labels: `ax.set_xlabel(\"Epochs\", labelpad=8, fontsize=10)`\r\n   - LaTeX Expressions: Wrap LaTeX syntax in raw strings with dollar signs (e.g. `r'$\\mathcal{L}_{BCE} = -y \\log(\\hat{y})$'`).\r\n\r\n2. LEGEND CONFIGURATION (ax.legend):\r\n   - Location String Codes: `'best'`, `'upper right'`, `'upper left'`, `'lower left'`, `'lower right'`, `'right'`, `'center left'`, `'center right'`, `'lower center'`, `'upper center'`, `'center'`.\r\n   - Multi-Column Layout: `ncol=2` or `ncols=3` formats legend entries side-by-side horizontally.\r\n   - Framing & Shadow: `frameon=True`, `framealpha=0.85`, `facecolor='#1e293b'`, `edgecolor='#475569'`, `shadow=True`.\r\n\r\n3. PLACING LEGENDS OUTSIDE THE PLOT (bbox_to_anchor):\r\n   - `ax.legend(bbox_to_anchor=(1.02, 1), loc='upper left', borderaxespad=0)`\r\n   - When saving with external legends: Always use `plt.savefig(..., bbox_inches='tight')` so the external box is not cropped out.\r\n\r\n4. MULTIPLE LEGENDS ON A SINGLE AXES:\r\n   - By default, calling `ax.legend()` a second time replaces/removes the first legend.\r\n   - To keep both:\r\n     ```python\r\n     leg1 = ax.legend(handles=[l1, l2], loc='upper left')\r\n     ax.add_artist(leg1)  # Pins the first legend artist to canvas\r\n     ax.legend(handles=[l3, l4], loc='lower right')\r\n     ```\r\n",d=[{id:1,question:"Why should raw strings (`r'...'`) with dollar signs be used when rendering mathematical formulas in Matplotlib titles and labels?",options:["To prevent Python from interpreting backslashes as escape characters before Matplotlib's built-in TeX engine parses them","To force GPU acceleration","To convert numbers to currency automatically","To compress memory footprint"],correctAnswer:0,explanation:"Prefixing with `r` creates a Python raw string so backslashes (like `\\alpha` or `\\frac`) are passed literally to Matplotlib's mathtext LaTeX renderer without syntax errors."},{id:2,question:"Which argument in `ax.legend()` allows positioning the legend outside the subplot boundaries?",options:["outside=True","bbox_to_anchor=(x, y)","detach_canvas=True","external_coords=(x, y)"],correctAnswer:1,explanation:"`bbox_to_anchor=(x, y)` anchors the legend box relative to the Axes or Figure coordinate space (e.g. `(1.02, 1)` places it immediately to the right of the plot area)."},{id:3,question:"What happens if you call `ax.legend()` twice in sequence on the same Axes without using `ax.add_artist()`?",options:["Both legends appear side-by-side automatically","The second legend call completely replaces/destroys the first legend","An Exception is raised","A nested sub-legend is constructed"],correctAnswer:1,explanation:"Calling `ax.legend()` overwrites the current Axes legend attribute. You must manually register the first legend with `ax.add_artist(leg1)` before creating the second."},{id:4,question:"How can you arrange 6 legend labels into 3 columns side-by-side?",options:["ax.legend(ncols=3) or ax.legend(ncol=3)","ax.legend(columns=3)","ax.legend(grid=(2, 3))","ax.legend(split=3)"],correctAnswer:0,explanation:"`ncol=3` (or `ncols=3` in Matplotlib 3.6+) organizes legend entries across 3 horizontal columns."}];function J(){const[n,$]=a.useState("studio"),[i,P]=a.useState(1),[c,y]=a.useState(!1),[s,O]=a.useState("upper_left"),[l,I]=a.useState(1),[b,D]=a.useState("sigmoid"),[x,B]=a.useState(14),[u,j]=a.useState({}),[p,w]=a.useState(!1),h={1:{name:"01_titles_labels_and_latex.py",code:U,desc:"LaTeX mathematical notation, raw string formatting, and label padding"},2:{name:"02_legend_positioning_and_bbox.py",code:q,desc:"Legend placement strategies, multi-column layouts, and bbox_to_anchor"},3:{name:"03_multiple_legends_and_handlers.py",code:Q,desc:"Pinning dual independent legends to a single Axes using ax.add_artist"}},N=t=>{navigator.clipboard.writeText(t),y(!0),setTimeout(()=>y(!1),2e3)},R=(t,r)=>{j(f=>({...f,[t]:r}))},v=()=>{let t=0;return d.forEach(r=>{u[r.id]===r.correctAnswer&&t++}),t},o={sigmoid:{name:"Logistic Sigmoid Activation",latexStr:"$\\sigma(z) = \\frac{1}{1 + e^{-z}}$",displayTitle:"Sigmoid Activation: σ(z) = 1 / (1 + e⁻ᶻ)"},bce:{name:"Binary Cross-Entropy Loss",latexStr:"$\\mathcal{L} = -[y \\log(\\hat{y}) + (1-y)\\log(1-\\hat{y})]$",displayTitle:"Binary Cross-Entropy: ℒ = -[y log(ŷ) + (1-y)log(1-ŷ)]"},gaussian:{name:"Gaussian Normal Distribution",latexStr:"$\\mathcal{N}(\\mu, \\sigma^2) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$",displayTitle:"Gaussian Normal PDF: N(μ, σ²)"}},T=(()=>{switch(s){case"upper_right":return{x:330,y:35};case"lower_right":return{x:330,y:145};case"outside":return{x:445,y:35};default:return{x:55,y:35}}})();return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-teal-900/40 via-cyan-900/30 to-sky-900/40 border border-teal-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(X,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 8: Adding Titles, Labels & Legends"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["Elevate your ML figures from raw plots to publication-grade figures. Master LaTeX mathematical formulas (",e.jsx("code",{className:"text-teal-300 font-mono",children:"r'$\\sigma(z)$'"}),"), figure super-titles, label padding, multi-column legends (",e.jsx("code",{className:"text-teal-300 font-mono",children:"ncol=2"}),"), external placement (",e.jsx("code",{className:"text-teal-300 font-mono",children:"bbox_to_anchor"}),"), and dual-legend pinning."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center gap-1.5",children:[e.jsx(L,{className:"w-3.5 h-3.5"})," LaTeX Math"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5",children:[e.jsx(F,{className:"w-3.5 h-3.5"})," bbox_to_anchor"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-teal-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"In data science research papers, figures without clear LaTeX math notation or with overlapping legends get rejected immediately. When Debangshu placed a legend with 8 model names directly over his test loss curves, it obscured the minimum error point! Moving it outside with ',e.jsx("code",{className:"text-teal-300 font-mono",children:"bbox_to_anchor=(1.02, 1)"}),' resolved the clutter instantly."']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Legend & Typography Studio",icon:L},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:A},{id:"notes",label:"Revision Notes",icon:C},{id:"quiz",label:"MCQ Assessment",icon:k}].map(t=>{const r=t.icon;return e.jsxs("button",{onClick:()=>$(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${n===t.id?"border-teal-500 text-teal-400 bg-teal-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(r,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[n==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(W,{className:"text-teal-400 w-5 h-5"}),"Typography & Legend Layout"]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"LaTeX Math Title Formula"}),e.jsx("div",{className:"space-y-2",children:Object.keys(o).map(t=>e.jsxs("button",{onClick:()=>D(t),className:`w-full text-left p-2.5 rounded-lg text-xs font-medium border transition ${b===t?"border-teal-500 bg-teal-950/60 text-teal-300 ring-1 ring-teal-500":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("div",{className:"font-semibold text-slate-200",children:o[t].name}),e.jsx("div",{className:"text-[11px] font-mono text-teal-400/80 mt-0.5",children:o[t].latexStr})]},t))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Legend Placement (loc & bbox_to_anchor)"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"upper_left",label:"Upper Left"},{id:"upper_right",label:"Upper Right"},{id:"lower_right",label:"Lower Right"},{id:"outside",label:"Outside (bbox_to_anchor)"}].map(t=>e.jsx("button",{onClick:()=>O(t.id),className:`px-3 py-2 rounded-lg text-xs font-medium border text-left transition ${s===t.id?"border-teal-500 bg-teal-950/60 text-teal-300 ring-1 ring-teal-500":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:t.label},t.id))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Legend Columns (ncol)"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>I(t),className:`py-1.5 rounded-lg text-xs font-semibold border text-center transition ${l===t?"border-teal-500 bg-teal-950 text-teal-300 ring-1 ring-teal-500":"border-slate-800 bg-slate-950 text-slate-400"}`,children:[t," ",t===1?"Column":"Cols"]},t))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"Title & Label Padding (pad)"}),e.jsxs("span",{className:"text-teal-400 font-mono",children:[x," px"]})]}),e.jsx("input",{type:"range",min:"6",max:"24",step:"2",value:x,onChange:t=>B(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-teal-500"})]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(G,{className:"w-4 h-4 text-teal-400"}),"Live Typography & Legend Canvas"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-teal-300 border border-slate-800",children:["loc='",s,"' | ncol=",l]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 560 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"45",y1:t,x2:s==="outside"?"435":"510",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"45",y1:"200",x2:s==="outside"?"435":"510",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"45",y1:"25",x2:"45",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("path",{d:"M 45 190 Q 140 185 240 110 T 435 30",fill:"none",stroke:"#0ea5e9",strokeWidth:"3"}),e.jsx("path",{d:"M 45 40 Q 200 45 280 140 T 435 195",fill:"none",stroke:"#f43f5e",strokeWidth:"2.5",strokeDasharray:"4,4"}),e.jsx("text",{x:s==="outside"?"240":"280",y:25-x/3,fill:"#f8fafc",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:o[b].displayTitle}),e.jsxs("g",{transform:`translate(${T.x}, ${T.y})`,children:[e.jsx("rect",{x:"0",y:"0",width:l===1?s==="outside"?110:130:l===2?190:240,height:l===1?50:35,fill:"#0f172a",rx:"4",stroke:"#334155",opacity:"0.95"}),l===1?e.jsxs(e.Fragment,{children:[e.jsx("line",{x1:"10",y1:"18",x2:"25",y2:"18",stroke:"#0ea5e9",strokeWidth:"2.5"}),e.jsx("text",{x:"32",y:"21",fill:"#cbd5e1",fontSize:"9",children:"Model A: Sigmoid"}),e.jsx("line",{x1:"10",y1:"36",x2:"25",y2:"36",stroke:"#f43f5e",strokeWidth:"2.5",strokeDasharray:"3,3"}),e.jsx("text",{x:"32",y:"39",fill:"#cbd5e1",fontSize:"9",children:"Model B: Baseline"})]}):e.jsxs(e.Fragment,{children:[e.jsx("line",{x1:"10",y1:"20",x2:"22",y2:"20",stroke:"#0ea5e9",strokeWidth:"2.5"}),e.jsx("text",{x:"28",y:"23",fill:"#cbd5e1",fontSize:"8.5",children:"Model A"}),e.jsx("line",{x1:"90",y1:"20",x2:"102",y2:"20",stroke:"#f43f5e",strokeWidth:"2.5",strokeDasharray:"3,3"}),e.jsx("text",{x:"108",y:"23",fill:"#cbd5e1",fontSize:"8.5",children:"Model B"})]})]}),e.jsx("text",{x:s==="outside"?"240":"280",y:"225",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Feature Dimension $x \\in \\mathbb{R}$"}),e.jsx("text",{x:"15",y:"110",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 15 110)",children:"Output Magnitude"})]})})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(H,{className:"w-3.5 h-3.5 text-teal-400"}),"Generated Matplotlib Python Code:"]}),e.jsx("pre",{className:"text-teal-300",children:`ax.set_title(r"${o[b].latexStr}", fontsize=12, pad=${x})
ax.set_xlabel(r"Feature Space $x \\in \\mathbb{R}$", labelpad=8)
${s==="outside"?`ax.legend(bbox_to_anchor=(1.02, 1), loc='upper left', ncol=${l}, frameon=True)`:`ax.legend(loc='${s.replace("_"," ")}', ncol=${l}, shadow=True)`}`})]})]})]})}),n==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(A,{className:"text-teal-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore LaTeX mathtext, legend positioning with bbox_to_anchor, and multi-legend handlers."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>P(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${i===t?"bg-teal-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-teal-400",children:h[i].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:h[i].desc})]}),e.jsxs("button",{onClick:()=>N(h[i].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[c?e.jsx(M,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(z,{className:"w-3.5 h-3.5"}),c?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:h[i].code})})]}),n==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(C,{className:"text-teal-400 w-5 h-5"}),"Typography & Legend Placement Reference"]}),e.jsxs("button",{onClick:()=>N(E),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[c?e.jsx(M,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(z,{className:"w-3.5 h-3.5"}),c?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:E})]}),n==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(k,{className:"text-teal-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of LaTeX typography, bbox_to_anchor, and legend handlers."})]}),p&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-teal-950 border border-teal-500/40 text-teal-300 text-sm font-bold",children:["Score: ",v()," / ",d.length," (",Math.round(v()/d.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:d.map((t,r)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[r+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((f,m)=>{const S=u[t.id]===m,_=t.correctAnswer===m;let g="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return p?_?g="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":S&&!_&&(g="border-rose-500 bg-rose-950/40 text-rose-200"):S&&(g="border-teal-500 bg-teal-950/50 text-teal-200 ring-1 ring-teal-500"),e.jsx("button",{onClick:()=>!p&&R(t.id,m),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${g}`,children:f},m)})}),p&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-teal-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{j({}),w(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>w(!0),disabled:Object.keys(u).length<d.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-teal-600 text-white hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-teal-600/30",children:"Submit Quiz"})]})]})]})]})}export{J as default};
