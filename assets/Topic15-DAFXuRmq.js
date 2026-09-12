import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as L,k as S,H as z,r as N,F as k,aa as P,aM as B,d as D,aN as R,f as C,g as T}from"./vendor-icons-ri6cs58t.js";const O=`"""\r
=============================================================================\r
TOPIC 15: Practice Problems\r
Script 01: Problem 1 - Dual-Axis Learning Curve with Early Stopping Marker\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
\r
PROBLEM STATEMENT:\r
Given 50 epochs of training data:\r
  1. Plot 'Train Loss' and 'Val Loss' on the primary Y-axis.\r
  2. Plot 'Validation Accuracy' on the secondary Y-axis (ax.twinx()).\r
  3. Identify the epoch with minimum validation loss (Early Stopping point).\r
  4. Draw a vertical dashed line and annotate the Early Stopping checkpoint.\r
"""\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("PRACTICE PROBLEM 1: DUAL-AXIS EARLY STOPPING PLOT")\r
\r
np.random.seed(42)\r
epochs = np.arange(1, 41)\r
\r
# Synthetic loss curves (Val loss bottoms out around epoch 22, then begins overfitting)\r
train_loss = 1.8 * np.exp(-0.08 * epochs) + 0.05 * np.random.normal(0, 0.02, 40)\r
val_loss   = 1.9 * np.exp(-0.07 * epochs) + 0.0008 * (epochs - 22)**2 + 0.05\r
\r
val_acc = 1.0 / (1.0 + np.exp(-0.15 * (epochs - 12)))\r
\r
best_epoch_idx = np.argmin(val_loss)\r
best_epoch = epochs[best_epoch_idx]\r
best_loss = val_loss[best_epoch_idx]\r
\r
fig, ax1 = plt.subplots(figsize=(9, 5))\r
\r
# Primary Y-Axis: Loss\r
color_loss = '#ef4444'\r
ax1.set_xlabel("Epochs", fontweight='bold')\r
ax1.set_ylabel("Cross-Entropy Loss", color=color_loss, fontweight='bold')\r
l1 = ax1.plot(epochs, train_loss, 'r--', label='Train Loss', lw=2)\r
l2 = ax1.plot(epochs, val_loss, color=color_loss, label='Val Loss', lw=2.5)\r
ax1.tick_params(axis='y', labelcolor=color_loss)\r
ax1.grid(True, linestyle=":", alpha=0.4)\r
\r
# Early Stopping Marker\r
ax1.axvline(best_epoch, color='#f59e0b', linestyle='--', lw=2, label=f'Early Stopping (Epoch {best_epoch})')\r
ax1.scatter([best_epoch], [best_loss], color='#f59e0b', s=80, zorder=5)\r
ax1.annotate(\r
    f"Optimal Checkpoint\\nLoss: {best_loss:.3f}",\r
    xy=(best_epoch, best_loss),\r
    xytext=(best_epoch + 3, best_loss + 0.25),\r
    arrowprops=dict(facecolor='#f59e0b', shrink=0.05, width=1.5, headwidth=6),\r
    fontweight='bold',\r
    fontsize=9\r
)\r
\r
# Secondary Y-Axis: Accuracy\r
ax2 = ax1.twinx()\r
color_acc = '#0284c7'\r
ax2.set_ylabel("Validation Accuracy", color=color_acc, fontweight='bold')\r
l3 = ax2.plot(epochs, val_acc, color=color_acc, lw=2.5, label='Val Accuracy')\r
ax2.tick_params(axis='y', labelcolor=color_acc)\r
ax2.set_ylim(0.4, 1.05)\r
\r
# Unified Legend\r
lines = l1 + l2 + l3\r
labels = [l.get_label() for l in lines]\r
ax1.legend(lines, labels, loc='center right', framealpha=0.9)\r
\r
plt.title("Neural Network Convergence with Early Stopping Detection", fontsize=12, fontweight='bold')\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print(f"✓ Problem 1 Solved! Early Stopping detected at Epoch {best_epoch} with loss {best_loss:.3f}.")\r
`,I=`"""\r
=============================================================================\r
TOPIC 15: Practice Problems\r
Script 02: Problem 2 - 4D Bubble Scatter with Custom Colormap & Colorbar\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
\r
PROBLEM STATEMENT:\r
Given a dataset of 200 used cars:\r
  1. Plot Engine Size (Liters) vs Mileage (km/liter).\r
  2. Map Price (Lakhs) to point size \`s = price * 12\`.\r
  3. Map Vehicle Age (Years) to color \`c = age\` using colormap \`'plasma_r'\`.\r
  4. Attach a vertical colorbar with label "Vehicle Age (Years)".\r
  5. Fit an exponential decay regression trendline curve.\r
"""\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("PRACTICE PROBLEM 2: 4D BUBBLE SCATTER PLOT")\r
\r
np.random.seed(42)\r
n_cars = 150\r
\r
engine_size = np.random.uniform(1.0, 4.0, n_cars) # 1.0L to 4.0L\r
mileage = 28.0 - 4.5 * engine_size + np.random.normal(0, 1.5, n_cars) # Inverse relationship\r
price = 3.5 + 4.0 * engine_size + np.random.normal(0, 2.0, n_cars) # Lakh INR\r
age = np.random.uniform(1, 12, n_cars) # 1 to 12 years old\r
\r
fig, ax = plt.subplots(figsize=(9, 5.5))\r
\r
scatter = ax.scatter(\r
    engine_size,\r
    mileage,\r
    s=price * 15,\r
    c=age,\r
    cmap='plasma_r',\r
    alpha=0.8,\r
    edgecolors='#0f172a',\r
    linewidth=0.8\r
)\r
\r
# Linear Fit\r
slope, intercept = np.polyfit(engine_size, mileage, 1)\r
x_line = np.linspace(1.0, 4.0, 100)\r
ax.plot(x_line, slope * x_line + intercept, 'r--', lw=2, label=f'Trend: y = {slope:.2f}x + {intercept:.1f}')\r
\r
ax.set_title("Automobile Performance Space (4D Exploration)", fontsize=12, fontweight='bold', pad=12)\r
ax.set_xlabel("Engine Displacement (Liters)")\r
ax.set_ylabel("Fuel Efficiency (km/L)")\r
ax.legend(loc="upper right")\r
ax.grid(True, linestyle=":", alpha=0.4)\r
\r
cbar = fig.colorbar(scatter, ax=ax)\r
cbar.set_label("Vehicle Age (Years)", rotation=270, labelpad=15)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Problem 2 Solved! 4-dimensional vehicle dataset plotted with trendline and colorbar.")\r
`,V=`"""\r
=============================================================================\r
TOPIC 15: Practice Problems\r
Script 03: Problem 3 - Multi-Panel Machine Learning Telemetry Dashboard\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
\r
PROBLEM STATEMENT:\r
Build an end-to-end 3-panel production telemetry dashboard using GridSpec:\r
  - Top Hero (gs[0, :]): Training Loss Decay Curve\r
  - Bottom-Left (gs[1, 0]): 5-Fold Cross Validation F1-Score Bar Chart with Error Bars\r
  - Bottom-Right (gs[1, 1]): Confusion Matrix Heatmap with \`ax.imshow()\` & text annotations.\r
"""\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("PRACTICE PROBLEM 3: MULTI-PANEL GRIDSPEC TELEMETRY DASHBOARD")\r
\r
fig = plt.figure(figsize=(11, 7))\r
gs = fig.add_gridspec(2, 2, height_ratios=[1.3, 1], hspace=0.35, wspace=0.25)\r
\r
# 1. Top Hero Panel: Loss Decay Curve\r
ax1 = fig.add_subplot(gs[0, :])\r
epochs = np.arange(1, 26)\r
train_loss = 1.5 / epochs**0.6 + 0.02 * np.random.normal(0, 0.05, 25)\r
ax1.plot(epochs, train_loss, color='#38bdf8', lw=2.5, marker='o', label='Training Loss')\r
ax1.set_title("1. Training Convergence Telemetry", fontweight='bold')\r
ax1.set_xlabel("Epoch")\r
ax1.set_ylabel("Loss")\r
ax1.legend()\r
ax1.grid(True, alpha=0.3)\r
\r
# 2. Bottom-Left Panel: 5-Fold CV F1-Scores with Error Bars\r
ax2 = fig.add_subplot(gs[1, 0])\r
models = ['XGBoost', 'LightGBM', 'CatBoost', 'RandomForest']\r
mean_f1 = [0.94, 0.93, 0.95, 0.89]\r
std_f1  = [0.02, 0.025, 0.018, 0.035]\r
bars = ax2.bar(models, mean_f1, yerr=std_f1, capsize=4, color=['#10b981', '#06b6d4', '#6366f1', '#f59e0b'], width=0.55)\r
ax2.set_title("2. 5-Fold CV F1-Scores (with Std Dev)", fontweight='bold')\r
ax2.set_ylim(0.7, 1.05)\r
ax2.bar_label(bars, fmt='%.2f', padding=5, fontsize=8)\r
ax2.grid(axis='y', linestyle=':', alpha=0.4)\r
\r
# 3. Bottom-Right Panel: Confusion Matrix Heatmap\r
ax3 = fig.add_subplot(gs[1, 1])\r
cm = np.array([[890, 40], [35, 935]])\r
im = ax3.imshow(cm, cmap='Blues', alpha=0.8)\r
ax3.set_title("3. Test Confusion Matrix", fontweight='bold')\r
ax3.set_xticks([0, 1])\r
ax3.set_yticks([0, 1])\r
ax3.set_xticklabels(['Pred Negative', 'Pred Positive'])\r
ax3.set_yticklabels(['True Negative', 'True Positive'])\r
\r
# Add text values inside heatmap cells\r
for i in range(2):\r
    for j in range(2):\r
        ax3.text(j, i, f"{cm[i, j]:,}", ha='center', va='center', color='black' if cm[i, j] < 500 else 'white', fontweight='bold')\r
\r
fig.suptitle("Production Machine Learning Model Verification Dashboard", fontsize=13, fontweight='bold')\r
plt.close(fig)\r
\r
print("✓ Problem 3 Solved! Multi-panel production telemetry dashboard compiled.")\r
`,A="MATPLOTLIB ESSENTIALS: TOPIC 15 NOTE\r\n=============================================================================\r\nTOPIC: Practice Problems - Comprehensive Synthesis & ML Visual Projects\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. SUMMARY OF PRACTICAL EXERCISES:\r\n   - Problem 1: Dual-Axis Learning Curve with Early Stopping Detection\r\n     * Skills: `ax.twinx()`, `np.argmin()`, `ax.axvline()`, `ax.annotate()` with arrowprops, unified multi-line legend handles.\r\n   - Problem 2: 4D Used Automobile Performance Bubble Chart\r\n     * Skills: Continuous 4D scatter (`x`, `y`, `s=price*15`, `c=age`, `cmap='plasma_r'`), `fig.colorbar()`, OLS regression trendline fit with `np.polyfit()`.\r\n   - Problem 3: Production Model Telemetry Multi-Panel Dashboard\r\n     * Skills: `GridSpec(2, 2, height_ratios=[1.3, 1])`, spanning hero row `gs[0, :]`, error bar benchmarks with `ax.bar(..., yerr=std)`, and confusion matrix heatmap using `ax.imshow()`.\r\n\r\n2. BEST PRACTICES CHECKLIST:\r\n   - Always close memory buffers: `plt.close(fig)`\r\n   - Always save figures with tight bounds: `bbox_inches='tight'`\r\n   - Use high resolution for exports: `dpi=300`\r\n   - Use raw strings for math: `r'$\\alpha$'`\r\n",i=[{id:1,question:"When creating a dual-axis plot with `ax2 = ax1.twinx()`, how can you compile lines from BOTH axes into a single consolidated legend box?",options:["Combine handle lists: `lines = l1 + l2 + l3` and pass `ax1.legend(lines, [l.get_label() for l in lines])`","Matplotlib automatically combines them with `plt.legend()`","Call `ax2.merge_legend(ax1)`","Set `legend_scope='global'`"],correctAnswer:0,explanation:"Because `ax1` and `ax2` are independent Axes, extracting the Line2D handles `l1 + l2 + l3` and their labels allows rendering a unified single legend."},{id:2,question:"In Practice Problem 3, how is a 2D confusion matrix heatmap plotted using core Matplotlib without requiring Seaborn?",options:["`ax.imshow(cm, cmap='Blues')` accompanied by nested text loops `ax.text(j, i, ...)`","`plt.matrix_plot(cm)`","`ax.scatter_matrix(cm)`","`plt.heat(cm)`"],correctAnswer:0,explanation:"`ax.imshow()` renders a 2D array/matrix as an image heatmap, and looping over cell indices with `ax.text()` annotates count values inside."},{id:3,question:"In Practice Problem 1, which NumPy function identified the exact index of the minimum validation loss for early stopping?",options:["np.argmin(val_loss)","np.min_index(val_loss)","np.find_minimum(val_loss)","np.locate(val_loss)"],correctAnswer:0,explanation:"`np.argmin()` returns the integer index corresponding to the minimum numerical value in a 1D array."},{id:4,question:"In Practice Problem 2, why is `cmap='plasma_r'` (reversed plasma) used when mapping vehicle age?",options:["The `_r` suffix reverses the colormap so newer cars receive brighter high-contrast hues and older cars receive darker shades","It makes the image render in monochrome","It converts 2D to 3D","It is required by OpenCV"],correctAnswer:0,explanation:"Appending `_r` to any built-in Matplotlib colormap name reverses its gradient sequence."}];function H(){const[l,E]=a.useState("studio"),[n,b]=a.useState(1),[o,f]=a.useState(!1),[r,g]=a.useState(1),[p,u]=a.useState({}),[c,y]=a.useState(!1),d={1:{name:"01_practice_problem_1_dual_axis_early_stop.py",code:O,desc:"Problem 1: Dual-Axis learning curve with early stopping detection and annotation"},2:{name:"02_practice_problem_2_4d_bubble_scatter.py",code:I,desc:"Problem 2: 4D Used automobile performance bubble scatter with custom colormap"},3:{name:"03_practice_problem_3_gridspec_dashboard.py",code:V,desc:"Problem 3: Multi-panel production telemetry dashboard with GridSpec and confusion matrix"}},w=t=>{navigator.clipboard.writeText(t),f(!0),setTimeout(()=>f(!1),2e3)},M=(t,s)=>{u(h=>({...h,[t]:s}))},j=()=>{let t=0;return i.forEach(s=>{p[s.id]===s.correctAnswer&&t++}),t};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-emerald-900/40 via-teal-900/30 to-indigo-900/40 border border-emerald-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(L,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 15: Hands-on Practice Problems"}),e.jsx("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:"Synthesize and solidify your complete Matplotlib mastery through 3 comprehensive machine learning project challenges. Build dual-axis early stopping monitors, 4D continuous bubble feature maps, and multi-panel GridSpec telemetry dashboards."})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5",children:[e.jsx(S,{className:"w-3.5 h-3.5"})," 3 Coding Labs"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5",children:[e.jsx(z,{className:"w-3.5 h-3.5"})," End-to-End Synthesis"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-emerald-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsx("p",{className:"text-slate-300 mt-1",children:'"To Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, and Abhronila: True mastery of data visualization is not memorizing syntax, but knowing which chart geometry to choose for each machine learning bottleneck. Tackle these 3 real-world challenges to test your problem-solving skills!"'})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Problem Solver Studio",icon:S},{id:"lab",label:"Python Code Lab (3 Solutions)",icon:N},{id:"notes",label:"Revision Notes",icon:k},{id:"quiz",label:"MCQ Assessment",icon:P}].map(t=>{const s=t.icon;return e.jsxs("button",{onClick:()=>E(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${l===t.id?"border-emerald-500 text-emerald-400 bg-emerald-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[l==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(B,{className:"text-emerald-400 w-5 h-5"}),"Select Practice Challenge"]}),e.jsx("div",{className:"space-y-3",children:[{id:1,title:"Problem 1: Early Stopping Dual-Axis Plot",desc:"Combine Train/Val loss with Val accuracy and detect minimum checkpoint with ax.annotate."},{id:2,title:"Problem 2: 4D Automobile Performance Bubble",desc:"Map Engine Size, Mileage, Price (size), and Vehicle Age (color) with colorbars and trendlines."},{id:3,title:"Problem 3: Multi-Panel GridSpec Telemetry",desc:"Build a 3-panel dashboard with training curves, error bar benchmarks, and confusion matrix heatmap."}].map(t=>e.jsxs("button",{onClick:()=>{g(t.id),b(t.id)},className:`w-full text-left p-3.5 rounded-xl border transition ${r===t.id?"border-emerald-500 bg-emerald-950/60 text-emerald-200 ring-1 ring-emerald-500 shadow-md":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("div",{className:"font-semibold text-white text-xs",children:t.title}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:t.desc})]},t.id))}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300",children:[e.jsx("strong",{className:"text-emerald-300 block mb-1",children:"Challenge Focus:"}),r===1&&"Tests dual-axis coordination with `twinx()`, `argmin()` minimum detection, and precision arrow callout annotations.",r===2&&"Tests multi-dimensional continuous feature mapping (`s=...`, `c=...`), colormap inversion (`plasma_r`), and polynomial line fitting.",r===3&&"Tests complex asymmetric multi-panel architecture with `GridSpec`, `imshow()` matrix rendering, and error bars."]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(D,{className:"w-4 h-4 text-emerald-400"}),"Live Problem Solution Output"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-emerald-300 border border-slate-800 uppercase",children:["Problem ",r]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:[r===1&&e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"50",y1:t,x2:"470",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"50",y1:"200",x2:"470",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"200",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("line",{x1:"470",y1:"20",x2:"470",y2:"200",stroke:"#0284c7",strokeWidth:"1.5"}),e.jsx("path",{d:"M 50 45 Q 150 140 470 185",fill:"none",stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"4,4"}),e.jsx("path",{d:"M 50 55 Q 180 135 280 145 T 470 120",fill:"none",stroke:"#ef4444",strokeWidth:"2.5"}),e.jsx("path",{d:"M 50 180 Q 200 160 300 70 T 470 45",fill:"none",stroke:"#0284c7",strokeWidth:"2.5"}),e.jsx("line",{x1:"280",y1:"20",x2:"280",y2:"200",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"4,4"}),e.jsx("circle",{cx:"280",cy:"145",r:"5",fill:"#f59e0b"}),e.jsxs("g",{transform:"translate(300, 100)",children:[e.jsx("rect",{x:"0",y:"0",width:"130",height:"35",fill:"#0f172a",rx:"4",stroke:"#f59e0b"}),e.jsx("text",{x:"8",y:"14",fill:"#f59e0b",fontSize:"8.5",fontWeight:"bold",children:"Early Stop (Epoch 22)"}),e.jsx("text",{x:"8",y:"27",fill:"#cbd5e1",fontSize:"8",children:"Min Val Loss: 0.284"})]}),e.jsx("text",{x:"260",y:"225",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Training Epoch"}),e.jsx("text",{x:"20",y:"110",fill:"#ef4444",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 110)",children:"Loss"}),e.jsx("text",{x:"495",y:"110",fill:"#0284c7",fontSize:"10",textAnchor:"middle",transform:"rotate(90 495 110)",children:"Accuracy"})]}),r===2&&e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"50",y1:t,x2:"460",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"50",y1:"200",x2:"460",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"60",y1:"50",x2:"440",y2:"185",stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"4,4"}),[{x:80,y:60,r:8,c:"#a855f7"},{x:130,y:85,r:12,c:"#ec4899"},{x:190,y:110,r:14,c:"#f97316"},{x:260,y:130,r:18,c:"#eab308"},{x:330,y:155,r:22,c:"#84cc16"},{x:410,y:175,r:26,c:"#10b981"}].map((t,s)=>e.jsx("circle",{cx:t.x,cy:t.y,r:t.r,fill:t.c,opacity:"0.8",stroke:"#0f172a",strokeWidth:"1.2"},s)),e.jsxs("g",{transform:"translate(470, 30)",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"plasmaGrad",x1:"0",y1:"1",x2:"0",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"50%",stopColor:"#f97316"}),e.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})}),e.jsx("rect",{x:"0",y:"0",width:"10",height:"160",fill:"url(#plasmaGrad)",rx:"2"}),e.jsx("text",{x:"15",y:"10",fill:"#cbd5e1",fontSize:"7.5",children:"1 Yr"}),e.jsx("text",{x:"15",y:"155",fill:"#cbd5e1",fontSize:"7.5",children:"12 Yrs"})]}),e.jsx("text",{x:"255",y:"225",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Engine Displacement (Liters)"}),e.jsx("text",{x:"20",y:"110",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 110)",children:"Fuel Efficiency (km/L)"})]}),r===3&&e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[e.jsxs("g",{children:[e.jsx("rect",{x:"20",y:"15",width:"480",height:"95",fill:"#0f172a",stroke:"#38bdf8",rx:"3"}),e.jsx("text",{x:"35",y:"32",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",children:"1. Training Loss Convergence Telemetry"}),e.jsx("path",{d:"M 40 95 Q 150 85 300 45 T 480 35",fill:"none",stroke:"#38bdf8",strokeWidth:"2.5"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"20",y:"120",width:"230",height:"105",fill:"#0f172a",stroke:"#10b981",rx:"3"}),e.jsx("text",{x:"30",y:"136",fill:"#10b981",fontSize:"9",fontWeight:"bold",children:"2. 5-Fold F1 Benchmark"}),e.jsx("rect",{x:"45",y:"160",width:"25",height:"50",fill:"#10b981",rx:"2"}),e.jsx("rect",{x:"85",y:"155",width:"25",height:"55",fill:"#06b6d4",rx:"2"}),e.jsx("rect",{x:"125",y:"150",width:"25",height:"60",fill:"#6366f1",rx:"2"}),e.jsx("rect",{x:"165",y:"168",width:"25",height:"42",fill:"#f59e0b",rx:"2"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"270",y:"120",width:"230",height:"105",fill:"#0f172a",stroke:"#ec4899",rx:"3"}),e.jsx("text",{x:"280",y:"136",fill:"#ec4899",fontSize:"9",fontWeight:"bold",children:"3. Confusion Matrix Heatmap"}),e.jsx("rect",{x:"300",y:"150",width:"40",height:"30",fill:"#1e3a8a"}),e.jsx("text",{x:"320",y:"168",fill:"#ffffff",fontSize:"9",textAnchor:"middle",fontWeight:"bold",children:"890"}),e.jsx("rect",{x:"345",y:"150",width:"40",height:"30",fill:"#93c5fd"}),e.jsx("text",{x:"365",y:"168",fill:"#000000",fontSize:"9",textAnchor:"middle",fontWeight:"bold",children:"40"}),e.jsx("rect",{x:"300",y:"185",width:"40",height:"30",fill:"#93c5fd"}),e.jsx("text",{x:"320",y:"203",fill:"#000000",fontSize:"9",textAnchor:"middle",fontWeight:"bold",children:"35"}),e.jsx("rect",{x:"345",y:"185",width:"40",height:"30",fill:"#1e3a8a"}),e.jsx("text",{x:"365",y:"203",fill:"#ffffff",fontSize:"9",textAnchor:"middle",fontWeight:"bold",children:"935"})]})]})]})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(R,{className:"w-3.5 h-3.5 text-emerald-400"}),"Python Solution Code:"]}),e.jsx("pre",{className:"text-emerald-300",children:r===1?`best_epoch = epochs[np.argmin(val_loss)]
ax1.axvline(best_epoch, color='#f59e0b', linestyle='--')
ax1.annotate('Optimal Checkpoint', xy=(best_epoch, best_loss), arrowprops=dict(facecolor='#f59e0b'))
ax2 = ax1.twinx(); ax2.plot(epochs, val_acc)`:r===2?`scatter = ax.scatter(engine_size, mileage, s=price*15, c=age, cmap='plasma_r')
fig.colorbar(scatter, ax=ax, label='Vehicle Age (Years)')
slope, intercept = np.polyfit(engine_size, mileage, 1)
ax.plot(x_line, slope*x_line + intercept, 'r--')`:`gs = fig.add_gridspec(2, 2, height_ratios=[1.3, 1])
ax1 = fig.add_subplot(gs[0, :]); ax1.plot(epochs, train_loss)
ax2 = fig.add_subplot(gs[1, 0]); ax2.bar(models, mean_f1, yerr=std_f1)
ax3 = fig.add_subplot(gs[1, 1]); ax3.imshow(cm, cmap='Blues')`})]})]})]})}),l==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(N,{className:"text-emerald-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore complete runnable solutions to all 3 practice problems."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>{b(t),g(t)},className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${n===t?"bg-emerald-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Problem 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-emerald-400",children:d[n].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:d[n].desc})]}),e.jsxs("button",{onClick:()=>w(d[n].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[o?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(T,{className:"w-3.5 h-3.5"}),o?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:d[n].code})})]}),l==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(k,{className:"text-emerald-400 w-5 h-5"}),"Practice Problems Architecture Checklist"]}),e.jsxs("button",{onClick:()=>w(A),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[o?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(T,{className:"w-3.5 h-3.5"}),o?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:A})]}),l==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(P,{className:"text-emerald-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of dual-axis synchronization, imshow heatmaps, and colormap reversals."})]}),c&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-sm font-bold",children:["Score: ",j()," / ",i.length," (",Math.round(j()/i.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:i.map((t,s)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[s+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((h,x)=>{const _=p[t.id]===x,v=t.correctAnswer===x;let m="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return c?v?m="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":_&&!v&&(m="border-rose-500 bg-rose-950/40 text-rose-200"):_&&(m="border-emerald-500 bg-emerald-950/50 text-emerald-200 ring-1 ring-emerald-500"),e.jsx("button",{onClick:()=>!c&&M(t.id,x),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${m}`,children:h},x)})}),c&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-emerald-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{u({}),y(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>y(!0),disabled:Object.keys(p).length<i.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-emerald-600/30",children:"Submit Quiz"})]})]})]})]})}export{H as default};
