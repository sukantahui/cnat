import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as U,a1 as J,L as Z,aM as $,r as A,F as M,aa as z,d as ee,aN as te,f as P,g as E}from"./vendor-icons-DFC0rBCP.js";const se=`"""\r
=============================================================================\r
TOPIC 3: Line Plot with plt.plot()\r
Script 01: Line Styling, Colors, Linewidths & Markers\r
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
section("1. Format Strings (fmt) vs Explicit Keyword Arguments")\r
print("""\r
Format String shortcut: '[marker][line][color]' (e.g. 'ro--', 'b-s', 'g:^')\r
Explicit Keyword Arguments (Preferred for readability):\r
  color='#0284c7', linestyle='--', linewidth=2.5,\r
  marker='o', markersize=8, markerfacecolor='white', markeredgecolor='#0284c7'\r
""")\r
\r
x = np.arange(1, 11)\r
# Polynomial complexity growth simulation in ML algorithms\r
linear = x * 10\r
log_linear = x * np.log2(x + 1) * 6\r
quadratic = (x ** 2)\r
\r
fig, ax = plt.subplots(figsize=(8, 4.5))\r
\r
# 1. Solid line with circular markers\r
ax.plot(x, linear, color='#0284c7', linestyle='-', linewidth=2,\r
        marker='o', markersize=6, label=r'Linear $O(N)$')\r
\r
# 2. Dashed line with square markers\r
ax.plot(x, log_linear, color='#10b981', linestyle='--', linewidth=2.5,\r
        marker='s', markersize=6, markerfacecolor='#ecfdf5', label=r'Log-Linear $O(N \\log N)$')\r
\r
# 3. Dotted line with triangle markers\r
ax.plot(x, quadratic, color='#f43f5e', linestyle=':', linewidth=2.5,\r
        marker='^', markersize=7, label=r'Quadratic $O(N^2)$')\r
\r
ax.set_title("Algorithm Time Complexity Scaling", fontsize=12, fontweight='bold')\r
ax.set_xlabel("Input Size (N items in thousands)")\r
ax.set_ylabel("Execution Time (milliseconds)")\r
ax.legend(frameon=True, loc="upper left")\r
ax.grid(True, linestyle="--", alpha=0.4)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Multi-line styled chart successfully constructed!")\r
`,ae=`"""\r
=============================================================================\r
TOPIC 3: Line Plot with plt.plot()\r
Script 02: Confidence Bands & Shaded Intervals with fill_between\r
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
section("1. Plotting Mean Curves with Standard Deviation Confidence Bands")\r
\r
# Simulating 5-Fold Cross-Validation Accuracy across Hyperparameter C values\r
c_values = np.logspace(-2, 3, 20)\r
mean_acc = 0.95 - 0.25 * np.exp(-c_values / 10) + 0.05 * np.log10(c_values + 1)\r
mean_acc = np.clip(mean_acc, 0.65, 0.96)\r
std_acc = 0.03 + 0.02 * np.sin(np.linspace(0, 3, 20)) ** 2\r
\r
lower_band = mean_acc - std_acc\r
upper_band = mean_acc + std_acc\r
\r
fig, ax = plt.subplots(figsize=(8, 4.5))\r
\r
# Plot Mean Validation Curve\r
ax.plot(c_values, mean_acc, color='#6366f1', lw=2.5, marker='o', label="Mean CV Accuracy")\r
\r
# Fill confidence band\r
ax.fill_between(c_values, lower_band, upper_band, color='#6366f1', alpha=0.25, label=r'$\\pm 1$ Std Dev Band')\r
\r
# Formatting for Hyperparameter tuning\r
ax.set_xscale('log')\r
ax.set_title("Support Vector Classifier: Accuracy vs Regularization Parameter (C)", fontsize=11, fontweight='bold')\r
ax.set_xlabel("Hyperparameter C (Log Scale)")\r
ax.set_ylabel("Cross-Validation Score")\r
ax.set_ylim(0.55, 1.0)\r
ax.legend(loc="lower right")\r
ax.grid(True, which="both", linestyle=":", alpha=0.5)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Shaded confidence interval line chart rendered with fill_between.")\r
`,re=`"""\r
=============================================================================\r
TOPIC 3: Line Plot with plt.plot()\r
Script 03: Step Plots, Dual Y-Axes, and Logarithmic Loss Decay\r
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
section("1. Step Plots & Dual Axes with ax.twinx()")\r
\r
epochs = np.arange(1, 21)\r
# Learning rate schedule (Step decay every 5 epochs)\r
lr_schedule = 0.01 * (0.5 ** (epochs // 5))\r
loss = 2.0 * np.exp(-0.25 * epochs) + 0.05 * np.random.rand(20)\r
\r
fig, ax1 = plt.subplots(figsize=(8, 4.5))\r
\r
# Plot Loss on Primary Y-Axis (ax1)\r
color_loss = '#ef4444'\r
ax1.set_xlabel("Training Epoch")\r
ax1.set_ylabel("Training Loss", color=color_loss, fontweight='bold')\r
line1 = ax1.plot(epochs, loss, color=color_loss, lw=2, marker='o', label="Train Loss")\r
ax1.tick_params(axis='y', labelcolor=color_loss)\r
ax1.set_yscale('log') # Log scale for exponential loss decay\r
ax1.grid(True, linestyle="--", alpha=0.3)\r
\r
# Create Secondary Y-Axis sharing the same X-axis\r
ax2 = ax1.twinx()\r
color_lr = '#06b6d4'\r
ax2.set_ylabel("Learning Rate (Step Decay)", color=color_lr, fontweight='bold')\r
# Step plot for discrete schedule changes\r
line2 = ax2.step(epochs, lr_schedule, where='mid', color=color_lr, lw=2.5, linestyle='--', label="Learning Rate")\r
ax2.tick_params(axis='y', labelcolor=color_lr)\r
\r
# Combined Legend from both axes\r
lines = line1 + line2\r
labels = [l.get_label() for l in lines]\r
ax1.legend(lines, labels, loc="upper right")\r
\r
plt.title("Neural Net Loss vs Learning Rate Schedule", fontsize=12, fontweight='bold')\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Successfully generated dual-axis plot with ax.twinx() and ax.step()!")\r
`,D="MATPLOTLIB ESSENTIALS: TOPIC 3 NOTE\r\n=============================================================================\r\nTOPIC: Line Plots (plt.plot / ax.plot) & Advanced Curve Customization\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. CORE SIGNATURE:\r\n   - `ax.plot(x, y, [fmt], **kwargs)`\r\n   - Format String shortcut: `fmt = '[marker][line][color]'` (e.g. `'r--o'`, `'b:'`, `'g-s'`).\r\n   - If only 1 array is passed (`ax.plot(y)`), x defaults to `range(len(y))`.\r\n\r\n2. KEY KEYWORD ARGUMENTS:\r\n   - `color`: Hex strings (`'#0284c7'`), named colors (`'crimson'`), or RGB/RGBA tuples.\r\n   - `linestyle` (`ls`): `'-'` (solid), `'--'` (dashed), `':'` (dotted), `'-.'` (dash-dot).\r\n   - `linewidth` (`lw`): Float width in points (e.g. `2.5`).\r\n   - `alpha`: Float opacity between 0.0 (transparent) and 1.0 (opaque).\r\n   - `marker`: `'o'` (circle), `'s'` (square), `'^'` (triangle up), `'d'` (diamond), `'x'`, `'+'`, `'*'`, `'v'`.\r\n   - `markersize` (`ms`): Marker diameter in points.\r\n   - `markerfacecolor` (`mfc`): Fill color inside marker.\r\n   - `markeredgecolor` (`mec`): Outer rim stroke color.\r\n\r\n3. ADVANCED LINE TECHNIQUES IN MACHINE LEARNING:\r\n   - Confidence intervals: `ax.fill_between(x, y_lower, y_upper, alpha=0.2, color='...')`\r\n   - Step plots (e.g., learning rate schedules): `ax.step(x, y, where='mid')`\r\n   - Logarithmic scales: `ax.set_xscale('log')` or `ax.set_yscale('log')` (essential for loss decay, learning rates).\r\n   - Dual Y-Axes: `ax2 = ax.twinx()` allows plotting loss and learning rate on separate scales over identical epochs.\r\n",p=[{id:1,question:"In the shorthand format string 'g--^' passed to `plt.plot()`, what do 'g', '--', and '^' specify?",options:["Green color, dashed line style, and triangle-up markers","Gradient fill, double line width, and peak detection","Gray color, dash-dot style, and circle markers","Global scope, dotted style, and diamond markers"],correctAnswer:0,explanation:"In Matplotlib format strings, 'g' represents the color green, '--' sets the line style to dashed, and '^' configures triangle-up data markers."},{id:2,question:"Which Matplotlib method is used to shade confidence intervals or variance bands between two curves?",options:["ax.shade_range()","ax.fill_between(x, y1, y2, alpha=...)","ax.draw_confidence()","ax.polygon_band()"],correctAnswer:1,explanation:"`ax.fill_between(x, y1, y2)` fills the polygon area between curves y1 and y2 along the x-coordinates, commonly used for standard deviation bands."},{id:3,question:"How do you instantiate a secondary Y-axis that shares the same X-axis with the primary subplot?",options:["ax2 = ax.duplicate_axis()","ax2 = ax.twinx()","ax2 = plt.secondary_y()","ax2 = ax.split_y()"],correctAnswer:1,explanation:"`ax.twinx()` creates a twin Axes sharing the same x-axis but with an independent y-axis on the right."},{id:4,question:"What happens if you pass only a single 1D array `y` to `plt.plot(y)` without providing `x`?",options:["It raises a ValueError: missing X data","It automatically generates X as sequential integers `0, 1, ..., len(y) - 1`","It plots a vertical line at x = 0","It treats the array as both X and Y coordinates"],correctAnswer:1,explanation:"When only one array is provided, Matplotlib assumes `x = range(len(y))`."}];function oe(){const[c,I]=r.useState("studio"),[d,O]=r.useState(1),[m,v]=r.useState(!1),[h,R]=r.useState(2.5),[i,B]=r.useState("solid"),[o,F]=r.useState("circle"),[s,H]=r.useState(6),[n,W]=r.useState("#38bdf8"),[x,V]=r.useState(!0),[w,N]=r.useState("convergence"),[j,k]=r.useState({}),[b,S]=r.useState(!1),u={1:{name:"01_line_plot_styling_and_formats.py",code:se,desc:"Format strings (fmt), colors, linewidths, and custom markers"},2:{name:"02_multiline_and_shading_fill_between.py",code:ae,desc:"Multi-line series and shaded confidence intervals using fill_between"},3:{name:"03_time_series_and_loss_curves.py",code:re,desc:"Step plots, logarithmic scales, and dual-axis visualization with twinx()"}},_=t=>{navigator.clipboard.writeText(t),v(!0),setTimeout(()=>v(!1),2e3)},G=(t,a)=>{k(l=>({...l,[t]:a}))},C=()=>{let t=0;return p.forEach(a=>{j[a.id]===a.correctAnswer&&t++}),t},g=w==="convergence"?[{x:50,y:190,upper:175,lower:205},{x:110,y:140,upper:125,lower:155},{x:180,y:100,upper:85,lower:115},{x:260,y:75,upper:62,lower:88},{x:340,y:60,upper:48,lower:72},{x:420,y:52,upper:42,lower:62},{x:480,y:48,upper:38,lower:58}]:[{x:50,y:180,upper:165,lower:195},{x:110,y:60,upper:45,lower:75},{x:180,y:170,upper:155,lower:185},{x:260,y:70,upper:55,lower:85},{x:340,y:160,upper:145,lower:175},{x:420,y:80,upper:65,lower:95},{x:480,y:150,upper:135,lower:165}],q=g.map(t=>`${t.x},${t.y}`).join(" "),Y=g.map(t=>`${t.x},${t.upper}`).join(" "),Q=[...g].reverse().map(t=>`${t.x},${t.lower}`).join(" "),K=`${Y} ${Q}`,X=()=>{switch(i){case"dashed":return"6,6";case"dotted":return"2,4";case"dashdot":return"6,3,2,3";default:return"none"}};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-cyan-900/40 via-blue-900/30 to-indigo-900/40 border border-cyan-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(U,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 3: Line Plot with plt.plot()"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["Master the workhorse of machine learning evaluation. Plot loss convergence, validation accuracy over epochs, model complexity curves, confidence intervals with ",e.jsx("code",{className:"text-cyan-300",children:"fill_between"}),", and twin-axis metric overlays."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5",children:[e.jsx(J,{className:"w-3.5 h-3.5"})," plt.plot()"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5",children:[e.jsx(Z,{className:"w-3.5 h-3.5"})," Confidence Bands"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-cyan-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"In our Barrackpore ML batches, Tuhina and Mahima were analyzing cross-validation results across different regularization strengths. A simple line was not enough—they needed to visualize the variance with ',e.jsx("code",{className:"text-cyan-300",children:"ax.fill_between()"}),' to detect overfitting. Line plots are the bread and butter of hyperparameter tuning!"']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Line Plot Customizer",icon:$},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:A},{id:"notes",label:"Revision Notes",icon:M},{id:"quiz",label:"MCQ Assessment",icon:z}].map(t=>{const a=t.icon;return e.jsxs("button",{onClick:()=>I(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${c===t.id?"border-cyan-500 text-cyan-400 bg-cyan-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(a,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[c==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx($,{className:"text-cyan-400 w-5 h-5"}),"Line & Marker Customizer"]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Metric Simulation Dataset"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>N("convergence"),className:`px-3 py-2 rounded-lg text-xs font-semibold border transition ${w==="convergence"?"border-cyan-500 bg-cyan-950/60 text-cyan-300 ring-1 ring-cyan-500":"border-slate-800 bg-slate-950 text-slate-400"}`,children:"Training Loss Decay"}),e.jsx("button",{onClick:()=>N("oscillating"),className:`px-3 py-2 rounded-lg text-xs font-semibold border transition ${w==="oscillating"?"border-cyan-500 bg-cyan-950/60 text-cyan-300 ring-1 ring-cyan-500":"border-slate-800 bg-slate-950 text-slate-400"}`,children:"Stochastic Gradient Flow"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"linestyle (ls)"}),e.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:["solid","dashed","dotted","dashdot"].map(t=>e.jsx("button",{onClick:()=>B(t),className:`px-2 py-1.5 rounded-lg text-xs font-medium border capitalize text-center transition ${i===t?"border-cyan-500 bg-cyan-950 text-cyan-300":"border-slate-800 bg-slate-950 text-slate-400"}`,children:t},t))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"marker shape"}),e.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[{id:"circle",label:"Circle ('o')"},{id:"square",label:"Square ('s')"},{id:"triangle",label:"Triangle ('^')"},{id:"diamond",label:"Diamond ('d')"}].map(t=>e.jsx("button",{onClick:()=>F(t.id),className:`px-2 py-1.5 rounded-lg text-xs font-medium border text-center transition ${o===t.id?"border-cyan-500 bg-cyan-950 text-cyan-300":"border-slate-800 bg-slate-950 text-slate-400"}`,children:t.label},t.id))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Line Color"}),e.jsx("div",{className:"flex gap-2",children:["#38bdf8","#10b981","#f43f5e","#a855f7","#f59e0b"].map(t=>e.jsx("button",{onClick:()=>W(t),className:`w-8 h-8 rounded-full transition-transform ${n===t?"scale-125 ring-2 ring-white ring-offset-2 ring-offset-slate-950":"opacity-75 hover:opacity-100"}`,style:{backgroundColor:t}},t))})]}),e.jsxs("div",{className:"space-y-3 pt-2",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"linewidth (lw)"}),e.jsxs("span",{className:"text-cyan-400 font-mono",children:[h," pt"]})]}),e.jsx("input",{type:"range",min:"1",max:"6",step:"0.5",value:h,onChange:t=>R(parseFloat(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"markersize (ms)"}),e.jsxs("span",{className:"text-cyan-400 font-mono",children:[s," pt"]})]}),e.jsx("input",{type:"range",min:"3",max:"12",step:"1",value:s,onChange:t=>H(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-500"})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"ax.fill_between() Confidence Band"}),e.jsx("button",{onClick:()=>V(!x),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition ${x?"bg-cyan-600 text-white":"bg-slate-800 text-slate-400"}`,children:x?"Enabled":"Disabled"})]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(ee,{className:"w-4 h-4 text-cyan-400"}),"Live Matplotlib Visual Output"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800",children:["ax.plot(x, y, color='",n,"', ls='",i,"', marker='",o[0],"')"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,90,130,170,210].map(t=>e.jsx("line",{x1:"45",y1:t,x2:"490",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),[50,110,180,260,340,420,480].map(t=>e.jsx("line",{x1:t,y1:"30",x2:t,y2:"210",stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"45",y1:"210",x2:"490",y2:"210",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"45",y1:"30",x2:"45",y2:"210",stroke:"#64748b",strokeWidth:"1.5"}),x&&e.jsx("polygon",{points:K,fill:n,opacity:"0.2"}),e.jsx("polyline",{fill:"none",stroke:n,strokeWidth:h,strokeDasharray:X(),points:q}),g.map((t,a)=>{const l=s/2;return o==="square"?e.jsx("rect",{x:t.x-l,y:t.y-l,width:s,height:s,fill:"#ffffff",stroke:n,strokeWidth:"2"},a):o==="triangle"?e.jsx("polygon",{points:`${t.x},${t.y-s} ${t.x-s},${t.y+l} ${t.x+s},${t.y+l}`,fill:"#ffffff",stroke:n,strokeWidth:"2"},a):o==="diamond"?e.jsx("polygon",{points:`${t.x},${t.y-s} ${t.x+s},${t.y} ${t.x},${t.y+s} ${t.x-s},${t.y}`,fill:"#ffffff",stroke:n,strokeWidth:"2"},a):e.jsx("circle",{cx:t.x,cy:t.y,r:s/2,fill:"#ffffff",stroke:n,strokeWidth:"2"},a)}),e.jsx("text",{x:"270",y:"235",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Epochs / Hyperparameter Steps"}),e.jsx("text",{x:"20",y:"120",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 120)",children:"Loss / Metric Score"})]})})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(te,{className:"w-3.5 h-3.5 text-cyan-400"}),"Generated Matplotlib Python Code:"]}),e.jsx("pre",{className:"text-cyan-300",children:`fig, ax = plt.subplots(figsize=(8, 4))
${x?`ax.fill_between(x, y_lower, y_upper, color='${n}', alpha=0.2, label='Confidence Interval')
`:""}ax.plot(x, y, color='${n}', linestyle='${i==="solid"?"-":i==="dashed"?"--":i==="dotted"?":":"-."}', linewidth=${h}, marker='${o[0]}', markersize=${s}, markerfacecolor='white', markeredgecolor='${n}', label='Training Metric')
ax.set_title("Machine Learning Metric Progression")
ax.legend()
plt.show()`})]})]})]})}),c==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(A,{className:"text-cyan-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore line plot formatting, confidence bands with fill_between, and twinx dual-axis curves."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>O(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${d===t?"bg-cyan-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400",children:u[d].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:u[d].desc})]}),e.jsxs("button",{onClick:()=>_(u[d].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[m?e.jsx(P,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(E,{className:"w-3.5 h-3.5"}),m?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:u[d].code})})]}),c==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(M,{className:"text-cyan-400 w-5 h-5"}),"Line Plot Styling & Customization Notes"]}),e.jsxs("button",{onClick:()=>_(D),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[m?e.jsx(P,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(E,{className:"w-3.5 h-3.5"}),m?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:D})]}),c==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(z,{className:"text-cyan-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your mastery of plt.plot, format strings, markers, and confidence intervals."})]}),b&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-sm font-bold",children:["Score: ",C()," / ",p.length," (",Math.round(C()/p.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:p.map((t,a)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[a+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((l,f)=>{const T=j[t.id]===f,L=t.correctAnswer===f;let y="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return b?L?y="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":T&&!L&&(y="border-rose-500 bg-rose-950/40 text-rose-200"):T&&(y="border-cyan-500 bg-cyan-950/50 text-cyan-200 ring-1 ring-cyan-500"),e.jsx("button",{onClick:()=>!b&&G(t.id,f),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${y}`,children:l},f)})}),b&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-cyan-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{k({}),S(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>S(!0),disabled:Object.keys(j).length<p.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-cyan-600/30",children:"Submit Quiz"})]})]})]})]})}export{oe as default};
