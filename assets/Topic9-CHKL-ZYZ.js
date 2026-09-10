import{b as s,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as X,z as T,a5 as H,r as k,F as M,aa as L,aM as B,d as F,aN as Q,f as E,g as I}from"./vendor-icons-DFC0rBCP.js";const K=`"""\r
=============================================================================\r
TOPIC 9: Setting Axis Limits\r
Script 01: Precision Limits, Margins & Tight Autoscaling\r
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
section("1. Setting Explicit Limits vs Setting Margins")\r
\r
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(13, 4.5))\r
\r
x = np.linspace(0, 100, 100)\r
# Model training accuracy converging towards 100%\r
acc = 100 / (1 + 9 * np.exp(-0.06 * x))\r
\r
# 1. Without explicit limits: Matplotlib adds 5% default margin padding\r
ax1.plot(x, acc, color='#0284c7', lw=2.5)\r
ax1.set_title("1. Default Autoscale (With Auto Margins)", fontweight='bold')\r
ax1.set_xlabel("Epoch")\r
ax1.set_ylabel("Accuracy (%)")\r
ax1.grid(True, linestyle=":", alpha=0.4)\r
\r
# 2. With strict business limits (e.g. Accuracy fixed 0 to 100, Epochs 0 to 100)\r
ax2.plot(x, acc, color='#10b981', lw=2.5)\r
ax2.set_xlim(0, 100)\r
ax2.set_ylim(0, 105)\r
ax2.axhline(100, color='#ef4444', linestyle='--', label='100% Ideal Ceiling')\r
ax2.set_title("2. Explicit Limits: ax.set_xlim(0, 100), set_ylim(0, 105)", fontweight='bold')\r
ax2.set_xlabel("Epoch")\r
ax2.set_ylabel("Accuracy (%)")\r
ax2.legend()\r
ax2.grid(True, linestyle=":", alpha=0.4)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Explicit axis limits and autoscale constraints demonstrated successfully.")\r
`,U=`"""\r
=============================================================================\r
TOPIC 9: Setting Axis Limits\r
Script 02: Inverted Axes & Equal Aspect Ratios in ML Geometry\r
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
section("1. Equal Aspect Ratio (ax.set_aspect('equal')) for Euclidean Distance")\r
\r
np.random.seed(42)\r
# Principal Component Analysis (PCA) 2D Projection\r
pca1 = np.random.normal(0, 2, 100)\r
pca2 = np.random.normal(0, 1, 100)\r
\r
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(13, 5))\r
\r
# 1. Distorted aspect ratio (Default: stretches axes independently)\r
ax1.scatter(pca1, pca2, color='#8b5cf6', alpha=0.7, edgecolor='black')\r
# Draw a unit circle to illustrate distortion\r
theta = np.linspace(0, 2*np.pi, 100)\r
ax1.plot(np.cos(theta)*2, np.sin(theta)*2, 'r--', label='Circle Radius = 2')\r
ax1.set_title("1. Default Aspect (Distorted Euclidean Distance)", fontweight='bold')\r
ax1.set_xlabel("PC 1")\r
ax1.set_ylabel("PC 2")\r
ax1.legend()\r
ax1.grid(True, linestyle=":", alpha=0.4)\r
\r
# 2. Equal Aspect ratio (Preserves true geometric circularity and distance)\r
ax2.scatter(pca1, pca2, color='#10b981', alpha=0.7, edgecolor='black')\r
ax2.plot(np.cos(theta)*2, np.sin(theta)*2, 'r--', label='True Circle Radius = 2')\r
ax2.set_aspect('equal') # 1 unit in X = 1 unit in Y\r
ax2.set_title("2. ax.set_aspect('equal') (Geometric Integrity)", fontweight='bold')\r
ax2.set_xlabel("PC 1")\r
ax2.set_ylabel("PC 2")\r
ax2.legend()\r
ax2.grid(True, linestyle=":", alpha=0.4)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Aspect ratio normalization demonstrated for PCA distance preservation.")\r
`,Z=`"""\r
=============================================================================\r
TOPIC 9: Setting Axis Limits\r
Script 03: Logarithmic & Symmetrical Log (symlog) Limits\r
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
section("1. Standard Log vs Symlog for Negative / Zero Values")\r
\r
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 4.5))\r
\r
# 1. Standard Logarithmic Scale for Regularization Alpha spanning 8 decades\r
alphas = np.logspace(-6, 2, 100)\r
# Ridge/Lasso Coefficients decay\r
ridge_coefs = 10 / (1 + alphas * 100)\r
\r
ax1.plot(alphas, ridge_coefs, color='#38bdf8', lw=2.5)\r
ax1.set_xscale('log')\r
ax1.set_xlim(1e-6, 1e2)\r
ax1.set_title("1. Standard Log Scale: ax.set_xscale('log')", fontweight='bold')\r
ax1.set_xlabel("L2 Regularization Alpha (log scale)")\r
ax1.set_ylabel("Weight Magnitude")\r
ax1.grid(True, which="both", linestyle=":", alpha=0.5)\r
\r
# 2. Symmetrical Log (symlog) - Allows values spanning [-1000 to +1000] including 0!\r
# Gradient updates that oscillate between positive and negative values\r
steps = np.arange(100)\r
gradients = (np.sin(steps * 0.2) * 10 ** (np.random.uniform(-2, 3, 100)))\r
\r
ax2.plot(steps, gradients, color='#ec4899', lw=1.8, marker='.')\r
ax2.set_yscale('symlog', linthresh=0.01) # Linear range between -0.01 and +0.01\r
ax2.set_title("2. Symmetrical Log: ax.set_yscale('symlog', linthresh=0.01)", fontweight='bold')\r
ax2.set_xlabel("Optimization Step")\r
ax2.set_ylabel("Gradient (symlog scale)")\r
ax2.grid(True, which="both", linestyle=":", alpha=0.5)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Log and Symmetrical Log (symlog) scaling demonstrated.")\r
`,z="MATPLOTLIB ESSENTIALS: TOPIC 9 NOTE\r\n=============================================================================\r\nTOPIC: Axis Limits, Margins, Inversion & Aspect Ratio Control\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. EXPLICIT AXIS LIMITS:\r\n   - `ax.set_xlim(left, right)` or `plt.xlim(xmin, xmax)`\r\n   - `ax.set_ylim(bottom, top)` or `plt.ylim(ymin, ymax)`\r\n   - Get current limits: `xmin, xmax = ax.get_xlim()`\r\n   - Setting limits automatically clamps zoom region and prevents misleading autoscaling.\r\n\r\n2. MARGINS & TIGHT AUTOSCALING:\r\n   - `ax.margins(x=0.0, y=0.05)`: Controls whitespace padding percentage around the data envelope.\r\n   - `ax.autoscale(enable=True, axis='both', tight=True)`: Removes all whitespace padding up to data extrema.\r\n\r\n3. INVERTING AXIS DIRECTIONS:\r\n   - `ax.invert_yaxis()` or `ax.set_ylim(top, bottom)` (reversed bounds)\r\n   - `ax.invert_xaxis()`\r\n   - Typical use cases: Matrix indices (row 0 at top), geological depth plots, leaderboard ranking tables.\r\n\r\n4. ASPECT RATIO NORMALIZATION:\r\n   - `ax.set_aspect('equal')`: Ensures 1 unit along the X-axis is physically equal in pixels to 1 unit along the Y-axis.\r\n   - Essential for: PCA projections, K-Means clustering, SVM margins, geographical coordinates where Euclidean distance distortion ruins interpretation.\r\n\r\n5. NON-LINEAR SCALES:\r\n   - `ax.set_xscale('log')` / `ax.set_yscale('log')`: Logarithmic base-10 scale (strictly positive values).\r\n   - `ax.set_yscale('symlog', linthresh=0.01)`: Symmetrical log allowing zero and negative numbers with a linear threshold near zero.\r\n   - `ax.set_yscale('logit')`: Scales probabilities in (0, 1) to logits.\r\n",m=[{id:1,question:"When plotting 2D Principal Component Analysis (PCA) or K-Means clusters, why is `ax.set_aspect('equal')` critical?",options:["It prevents Matplotlib from crashing on large arrays","It ensures 1 unit on the X-axis equals 1 unit on the Y-axis, preserving true Euclidean distances and preventing circular clusters from appearing stretched into ellipses","It normalizes values between 0 and 1 automatically","It removes the gridlines"],correctAnswer:1,explanation:"`ax.set_aspect('equal')` preserves true geometric distances so visual cluster separation accurately reflects mathematical Euclidean distance."},{id:2,question:"Which scale type should be used when data spans multiple orders of magnitude but contains both negative numbers and exact zeros?",options:["ax.set_yscale('log')","ax.set_yscale('symlog', linthresh=0.01)","ax.set_yscale('linear')","ax.set_yscale('exponential')"],correctAnswer:1,explanation:"Standard `log` scale is undefined for zero and negative values. `symlog` (symmetrical log) uses a linear mapping within `[-linthresh, +linthresh]` and logarithmic mapping beyond."},{id:3,question:"How can you invert the vertical Y-axis so that the origin (0) or highest rank is at the top of the chart?",options:["ax.flip_vertical()","ax.invert_yaxis()","ax.reverse(axis='y')","ax.set_direction('down')"],correctAnswer:1,explanation:"`ax.invert_yaxis()` inverts the direction of the Y-axis numbers, commonly used for image arrays, ranking boards, and depth profiles."},{id:4,question:"How do you strip all default whitespace margin padding around the plot line to clamp axes tightly to data boundaries?",options:["ax.set_margins(0, 0) or ax.autoscale(tight=True)","ax.tight_padding()","plt.no_margins()","ax.clamp_edges()"],correctAnswer:0,explanation:"`ax.margins(0)` or `ax.autoscale(tight=True)` sets the relative margin padding to zero, fixing axis limits to the exact data minimum and maximum."}];function te(){const[i,P]=s.useState("studio"),[o,R]=s.useState(1),[p,v]=s.useState(!1),[c,O]=s.useState(0),[d,q]=s.useState(100),[n,D]=s.useState(0),[r,$]=s.useState(100),[x,G]=s.useState(!1),[l,W]=s.useState(!1),[u,Y]=s.useState(!1),[y,N]=s.useState({}),[h,w]=s.useState(!1),b={1:{name:"01_axis_limits_and_margins.py",code:K,desc:"Setting explicit limits (set_xlim, set_ylim), margins, and tight autoscaling"},2:{name:"02_inverted_and_aspect_ratio_limits.py",code:U,desc:"Equal aspect ratios for PCA/Euclidean distances and inverted axes"},3:{name:"03_log_and_symlog_scales.py",code:Z,desc:"Logarithmic and symmetrical log (symlog) scaling for vast dynamic ranges"}},S=t=>{navigator.clipboard.writeText(t),v(!0),setTimeout(()=>v(!1),2e3)},V=(t,a)=>{N(j=>({...j,[t]:a}))},_=()=>{let t=0;return m.forEach(a=>{y[a.id]===a.correctAnswer&&t++}),t};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-blue-900/40 via-sky-900/30 to-indigo-900/40 border border-blue-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(X,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 9: Setting Axis Limits & Scales"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["Gain precise viewport control over your machine learning charts. Master explicit limits (",e.jsx("code",{className:"text-blue-300 font-mono",children:"ax.set_xlim"}),", ",e.jsx("code",{className:"text-blue-300 font-mono",children:"ax.set_ylim"}),"), margin clamping, inverted axes for rankings, Euclidean aspect ratio normalization (",e.jsx("code",{className:"text-blue-300 font-mono",children:"ax.set_aspect('equal')"}),"), and logarithmic/symlog scaling."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5",children:[e.jsx(T,{className:"w-3.5 h-3.5"})," set_xlim & set_ylim"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5",children:[e.jsx(H,{className:"w-3.5 h-3.5"})," Log & Symlog Scales"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-blue-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"When Tuhina plotted learning rate decay from 0.1 down to 0.00001, on a linear axis all values after epoch 5 looked like a flat zero line! Switching to ',e.jsx("code",{className:"text-blue-300 font-mono",children:"ax.set_yscale('log')"})," and clamping ",e.jsx("code",{className:"text-blue-300 font-mono",children:"ax.set_xlim(0, 50)"}),' revealed the true exponential decay curve. Controlling axes limits is vital for honest data interpretation!"']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Limits & Scale Studio",icon:T},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:k},{id:"notes",label:"Revision Notes",icon:M},{id:"quiz",label:"MCQ Assessment",icon:L}].map(t=>{const a=t.icon;return e.jsxs("button",{onClick:()=>P(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${i===t.id?"border-blue-500 text-blue-400 bg-blue-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(a,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[i==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(B,{className:"text-blue-400 w-5 h-5"}),"Viewport Bounds & Scaling"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"ax.set_xlim X-Min"}),e.jsx("span",{className:"text-blue-400 font-mono",children:c})]}),e.jsx("input",{type:"range",min:"0",max:"40",value:c,onChange:t=>O(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"ax.set_xlim X-Max"}),e.jsx("span",{className:"text-blue-400 font-mono",children:d})]}),e.jsx("input",{type:"range",min:"50",max:"100",value:d,onChange:t=>q(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"})]})]}),e.jsxs("div",{className:"space-y-3 pt-2 border-t border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"ax.set_ylim Y-Min"}),e.jsxs("span",{className:"text-blue-400 font-mono",children:[n,"%"]})]}),e.jsx("input",{type:"range",min:"0",max:"50",value:n,onChange:t=>D(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"ax.set_ylim Y-Max"}),e.jsxs("span",{className:"text-blue-400 font-mono",children:[r,"%"]})]}),e.jsx("input",{type:"range",min:"60",max:"120",value:r,onChange:t=>$(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"})]})]}),e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[e.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-300",children:"ax.set_yscale('log')"}),e.jsx("button",{onClick:()=>G(!x),className:`px-3 py-1 rounded text-xs font-bold transition ${x?"bg-blue-600 text-white":"bg-slate-800 text-slate-400"}`,children:x?"ON":"OFF"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-300",children:"ax.invert_yaxis()"}),e.jsx("button",{onClick:()=>W(!l),className:`px-3 py-1 rounded text-xs font-bold transition ${l?"bg-blue-600 text-white":"bg-slate-800 text-slate-400"}`,children:l?"INVERTED":"NORMAL"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-300",children:"ax.set_aspect('equal')"}),e.jsx("button",{onClick:()=>Y(!u),className:`px-3 py-1 rounded text-xs font-bold transition ${u?"bg-blue-600 text-white":"bg-slate-800 text-slate-400"}`,children:u?"EQUAL":"AUTO"})]})]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(F,{className:"w-4 h-4 text-blue-400"}),"Live Viewport Output"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-blue-300 border border-slate-800",children:["xlim=(",c,", ",d,") | ylim=(",n,", ",r,")"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"50",y1:t,x2:"480",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"50",y1:"200",x2:"480",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsxs("g",{transform:l?"scale(1, -1) translate(0, -220)":"",children:[e.jsx("path",{d:"M 50 190 C 180 180, 260 70, 480 45",fill:"none",stroke:"#38bdf8",strokeWidth:"3"}),e.jsx("line",{x1:"50",y1:"40",x2:"480",y2:"40",stroke:"#ef4444",strokeDasharray:"4,4",strokeWidth:"1.5"}),e.jsx("text",{x:"470",y:"32",fill:"#ef4444",fontSize:"9",textAnchor:"end",children:"100% Target"})]}),e.jsx("text",{x:"50",y:"215",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:c}),e.jsx("text",{x:"480",y:"215",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:d}),e.jsxs("text",{x:"40",y:"203",fill:"#94a3b8",fontSize:"9",textAnchor:"end",children:[l?r:n,"%"]}),e.jsxs("text",{x:"40",y:"30",fill:"#94a3b8",fontSize:"9",textAnchor:"end",children:[l?n:r,"%"]}),e.jsx("text",{x:"265",y:"235",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Epochs (ax.set_xlim)"}),e.jsx("text",{x:"15",y:"110",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 15 110)",children:x?"Accuracy (Log Scale)":"Accuracy (Percentage)"})]})})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(Q,{className:"w-3.5 h-3.5 text-blue-400"}),"Generated Matplotlib Python Code:"]}),e.jsx("pre",{className:"text-blue-300",children:`ax.set_xlim(${c}, ${d})
ax.set_ylim(${n}, ${r})
${x?`ax.set_yscale('log')
`:""}${l?`ax.invert_yaxis()
`:""}${u?`ax.set_aspect('equal')
`:""}ax.plot(epochs, accuracy, color='#38bdf8')`})]})]})]})}),i==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(k,{className:"text-blue-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore axis limits, aspect ratio normalization, and log/symlog scaling."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>R(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${o===t?"bg-blue-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-blue-400",children:b[o].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:b[o].desc})]}),e.jsxs("button",{onClick:()=>S(b[o].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[p?e.jsx(E,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(I,{className:"w-3.5 h-3.5"}),p?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:b[o].code})})]}),i==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(M,{className:"text-blue-400 w-5 h-5"}),"Axis Limits, Margins & Scaling Reference"]}),e.jsxs("button",{onClick:()=>S(z),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[p?e.jsx(E,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(I,{className:"w-3.5 h-3.5"}),p?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:z})]}),i==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(L,{className:"text-blue-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of axis limits, margins, aspect ratio, and symlog scales."})]}),h&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-blue-950 border border-blue-500/40 text-blue-300 text-sm font-bold",children:["Score: ",_()," / ",m.length," (",Math.round(_()/m.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:m.map((t,a)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[a+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((j,g)=>{const A=y[t.id]===g,C=t.correctAnswer===g;let f="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return h?C?f="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":A&&!C&&(f="border-rose-500 bg-rose-950/40 text-rose-200"):A&&(f="border-blue-500 bg-blue-950/50 text-blue-200 ring-1 ring-blue-500"),e.jsx("button",{onClick:()=>!h&&V(t.id,g),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${f}`,children:j},g)})}),h&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-blue-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{N({}),w(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>w(!0),disabled:Object.keys(y).length<m.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-blue-600/30",children:"Submit Quiz"})]})]})]})]})}export{te as default};
