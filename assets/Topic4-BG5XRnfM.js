import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as L,ck as S,L as O,r as _,F as C,aa as T,aM as I,d as V,aN as D,f as A,g as z}from"./vendor-icons-ri6cs58t.js";const G=`"""\r
=============================================================================\r
TOPIC 4: Bar Chart with plt.bar()\r
Script 01: Vertical vs Horizontal Bar Charts & Custom Colors\r
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
section("1. Vertical Bar Chart (plt.bar)")\r
\r
categories = ['Random Forest', 'XGBoost', 'Logistic Reg', 'SVM', 'KNN']\r
f1_scores = [0.92, 0.95, 0.81, 0.88, 0.79]\r
colors = ['#38bdf8', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899']\r
\r
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(13, 4.5))\r
\r
# Vertical Bars (ax1)\r
bars1 = ax1.bar(categories, f1_scores, color=colors, width=0.55, edgecolor='#0f172a', linewidth=1.2)\r
ax1.set_title("ML Model F1-Scores (Vertical Bar)", fontweight='bold')\r
ax1.set_ylabel("F1 Score")\r
ax1.set_ylim(0, 1.1)\r
ax1.tick_params(axis='x', rotation=25)\r
ax1.grid(axis='y', linestyle='--', alpha=0.4)\r
\r
# Modern Matplotlib 3.4+ Direct Labeling\r
ax1.bar_label(bars1, fmt='%.2f', padding=3, fontweight='bold')\r
\r
# Horizontal Bars (ax2) - Great for long category labels\r
bars2 = ax2.barh(categories, f1_scores, color=colors, height=0.55, edgecolor='#0f172a', linewidth=1.2)\r
ax2.set_title("ML Model F1-Scores (Horizontal Bar)", fontweight='bold')\r
ax2.set_xlabel("F1 Score")\r
ax2.set_xlim(0, 1.1)\r
ax2.grid(axis='x', linestyle='--', alpha=0.4)\r
ax2.bar_label(bars2, fmt='%.2f', padding=5, fontweight='bold')\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Vertical and Horizontal bar charts created with ax.bar_label annotations.")\r
`,H=`"""\r
=============================================================================\r
TOPIC 4: Bar Chart with plt.bar()\r
Script 02: Grouped (Clustered) & Stacked Bar Charts\r
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
section("1. Grouped Bar Chart with Numeric Offsets")\r
\r
models = ['Model A (Base)', 'Model B (+Tuning)', 'Model C (+Ensemble)']\r
train_acc = [0.82, 0.91, 0.97]\r
test_acc  = [0.78, 0.88, 0.93]\r
\r
x = np.arange(len(models)) # [0, 1, 2]\r
width = 0.35              # Width of each bar\r
\r
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 4.5))\r
\r
# Grouped Layout: Shift x positions by +/- width/2\r
rects1 = ax1.bar(x - width/2, train_acc, width, label='Train Accuracy', color='#0284c7')\r
rects2 = ax1.bar(x + width/2, test_acc,  width, label='Test Accuracy',  color='#10b981')\r
\r
ax1.set_title("Grouped Bars: Train vs Test Generalization", fontweight='bold')\r
ax1.set_xticks(x)\r
ax1.set_xticklabels(models)\r
ax1.set_ylim(0, 1.15)\r
ax1.legend()\r
ax1.grid(axis='y', linestyle=':', alpha=0.5)\r
ax1.bar_label(rects1, fmt='%.2f', padding=2)\r
ax1.bar_label(rects2, fmt='%.2f', padding=2)\r
\r
# Stacked Layout: Using the 'bottom' argument\r
# Confusion Matrix breakdown simulation: True Positives + False Positives\r
tp = np.array([45, 60, 52])\r
fp = np.array([12, 8, 4])\r
\r
ax2.bar(models, tp, width=0.5, label='True Positives', color='#6366f1')\r
ax2.bar(models, fp, width=0.5, bottom=tp, label='False Positives', color='#f43f5e')\r
\r
ax2.set_title("Stacked Bars: Positive Predictions Breakdown", fontweight='bold')\r
ax2.set_ylabel("Instance Count")\r
ax2.legend()\r
ax2.grid(axis='y', linestyle=':', alpha=0.5)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Grouped and Stacked Bar charts created successfully!")\r
`,$=`"""\r
=============================================================================\r
TOPIC 4: Bar Chart with plt.bar()\r
Script 03: Feature Importance Bar Chart with Error Bars (yerr/xerr)\r
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
section("1. Feature Importance with Standard Deviation Error Bars")\r
\r
features = ['Age', 'Annual_Income', 'Credit_Score', 'Loan_Amount', 'Debt_Ratio']\r
importances = np.array([0.12, 0.28, 0.34, 0.16, 0.10])\r
std_devs    = np.array([0.02, 0.04, 0.05, 0.03, 0.015])\r
\r
# Sort descending for readable visual hierarchy\r
indices = np.argsort(importances)\r
\r
fig, ax = plt.subplots(figsize=(8, 4.5))\r
\r
bars = ax.barh(\r
    np.array(features)[indices],\r
    importances[indices],\r
    xerr=std_devs[indices],\r
    color='#0ea5e9',\r
    capsize=5,\r
    edgecolor='#0369a1',\r
    alpha=0.9\r
)\r
\r
ax.set_title("Random Forest: Gini Feature Importance (with 5-fold Std Dev)", fontweight='bold')\r
ax.set_xlabel("Mean Impurity Decrease")\r
ax.grid(axis='x', linestyle='--', alpha=0.4)\r
ax.bar_label(bars, fmt='%.2f', padding=8, fontweight='bold', color='#f8fafc')\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Feature Importance ranking chart with error bars exported successfully.")\r
`,B="MATPLOTLIB ESSENTIALS: TOPIC 4 NOTE\r\n=============================================================================\r\nTOPIC: Bar Charts (plt.bar, plt.barh, Grouped, Stacked, Error Bars)\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. BAR CHART VARIANTS:\r\n   - Vertical Bars: `ax.bar(x, height, width=0.8, bottom=None, align='center', **kwargs)`\r\n   - Horizontal Bars: `ax.barh(y, width, height=0.8, left=None, align='center', **kwargs)`\r\n   - When to use Horizontal: When category labels are lengthy (e.g. feature names, long class names) to avoid overlapping text.\r\n\r\n2. GROUPED (CLUSTERED) BARS:\r\n   - Calculate numeric baseline positions: `x = np.arange(len(categories))`\r\n   - Offset series by half bar width:\r\n     `ax.bar(x - width/2, series1, width=width, label='Series 1')`\r\n     `ax.bar(x + width/2, series2, width=width, label='Series 2')`\r\n   - Set tick positions and labels explicitly:\r\n     `ax.set_xticks(x)`\r\n     `ax.set_xticklabels(categories)`\r\n\r\n3. STACKED BARS:\r\n   - Use the `bottom` argument in vertical bars:\r\n     `ax.bar(categories, part1, label='Part 1')`\r\n     `ax.bar(categories, part2, bottom=part1, label='Part 2')`\r\n   - Use the `left` argument in horizontal bars:\r\n     `ax.barh(categories, part2, left=part1)`\r\n\r\n4. ERROR BARS & ANNOTATIONS:\r\n   - Error bars: `yerr=std_values` (vertical) or `xerr=std_values` (horizontal) with `capsize=4`.\r\n   - Direct Bar Labeling (Matplotlib 3.4+):\r\n     `bars = ax.bar(...)`\r\n     `ax.bar_label(bars, fmt='%.2f', padding=3)`\r\n",h=[{id:1,question:"Which parameter in `ax.bar()` enables creating stacked bar charts by placing a series on top of another?",options:["stack_on","bottom","offset_y","layer"],correctAnswer:1,explanation:"The `bottom` keyword argument in `ax.bar(x, height, bottom=previous_series)` specifies the baseline y-coordinate where the new bar begins."},{id:2,question:"When plotting horizontal bar charts with `ax.barh()`, which parameter specifies the error bar uncertainties?",options:["yerr","xerr","h_error","uncertainty"],correctAnswer:1,explanation:"In `ax.barh()`, values extend horizontally along the X-axis, so errors are horizontal along the X-axis and specified via `xerr`."},{id:3,question:"What is the recommended modern method in Matplotlib (3.4+) to automatically place value labels on top of bar charts?",options:["ax.annotate_bars()","ax.bar_label(bars_container, fmt='%.2f')","plt.show_bar_values()","ax.text_on_bars()"],correctAnswer:1,explanation:"`ax.bar_label(container, fmt='%.2f', padding=3)` is the built-in helper introduced in Matplotlib 3.4+ that automatically computes center/top coordinates for each bar."},{id:4,question:"Why are horizontal bar charts (`plt.barh()`) often preferred for Tree Model Feature Importance rankings?",options:["They consume 50% less RAM than vertical charts","They allow long feature names (e.g., 'Annual_Household_Income') to be read horizontally without awkward 90-degree rotations","They automatically normalize feature weights between 0 and 1","They only work with Scikit-learn outputs"],correctAnswer:1,explanation:"Horizontal bar charts provide ample vertical space for readable feature names along the Y-axis without requiring rotated labels."}];function Q(){const[c,M]=i.useState("studio"),[x,F]=i.useState(1),[b,y]=i.useState(!1),[n,R]=i.useState("vertical"),[o,P]=i.useState(!0),[d,W]=i.useState(!1),[g,w]=i.useState({}),[m,j]=i.useState(!1),p={1:{name:"01_vertical_horizontal_bars.py",code:G,desc:"Vertical & horizontal bar charts with modern ax.bar_label annotations"},2:{name:"02_grouped_and_stacked_bars.py",code:H,desc:"Grouped bars with numeric offsets and stacked bars using bottom parameter"},3:{name:"03_bar_containers_and_annotations.py",code:$,desc:"Feature importance ranking charts with error bars (xerr / yerr)"}},v=t=>{navigator.clipboard.writeText(t),y(!0),setTimeout(()=>y(!1),2e3)},E=(t,s)=>{w(r=>({...r,[t]:s}))},N=()=>{let t=0;return h.forEach(s=>{g[s.id]===s.correctAnswer&&t++}),t},f=[{name:"XGBoost",train:.96,test:.92,std:.03,color:"#10b981"},{name:"Random Forest",train:.94,test:.89,std:.04,color:"#38bdf8"},{name:"Logistic Reg",train:.82,test:.8,std:.02,color:"#f59e0b"},{name:"SVM (RBF)",train:.91,test:.86,std:.035,color:"#8b5cf6"},{name:"KNN (k=5)",train:.85,test:.78,std:.05,color:"#ec4899"}];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-emerald-900/40 via-teal-900/30 to-sky-900/40 border border-emerald-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(L,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 4: Bar Chart with plt.bar()"}),e.jsx("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:"Master categorical comparisons in machine learning. Plot model benchmark metrics (Accuracy, F1-Score), compare Train vs Test generalization with grouped bars, evaluate confusion breakdowns with stacked bars, and rank feature importances with horizontal error bars."})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5",children:[e.jsx(S,{className:"w-3.5 h-3.5"})," plt.bar & barh"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center gap-1.5",children:[e.jsx(O,{className:"w-3.5 h-3.5"})," Grouped & Stacked"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-emerald-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"When Swadeep and Sachin were building a credit risk classifier, they had 15 feature importances with long names like ',e.jsx("code",{className:"text-slate-200",children:"Revolving_Utilization_Of_Unsecured_Lines"}),". Vertical bars turned the labels into an unreadable slanted mess! Switching to ",e.jsx("code",{className:"text-emerald-300",children:"plt.barh()"})," sorted by importance and annotated with ",e.jsx("code",{className:"text-emerald-300",children:"ax.bar_label()"}),' turned their report into an executive-ready dashboard."']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Bar Studio",icon:S},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:_},{id:"notes",label:"Revision Notes",icon:C},{id:"quiz",label:"MCQ Assessment",icon:T}].map(t=>{const s=t.icon;return e.jsxs("button",{onClick:()=>M(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${c===t.id?"border-emerald-500 text-emerald-400 bg-emerald-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[c==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(I,{className:"text-emerald-400 w-5 h-5"}),"Bar Layout Configuration"]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Chart Variant / Geometry"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"vertical",label:"Vertical (plt.bar)"},{id:"horizontal",label:"Horizontal (plt.barh)"},{id:"grouped",label:"Grouped (Clustered)"},{id:"stacked",label:"Stacked (bottom=...)"}].map(t=>e.jsx("button",{onClick:()=>R(t.id),className:`px-3 py-2.5 rounded-lg text-xs font-semibold border text-left transition ${n===t.id?"border-emerald-500 bg-emerald-950/60 text-emerald-300 ring-1 ring-emerald-500":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:t.label},t.id))})]}),e.jsxs("div",{className:"space-y-3 pt-2",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"ax.bar_label() Annotations"}),e.jsx("button",{onClick:()=>P(!o),className:`px-3 py-1 rounded text-xs font-bold transition ${o?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400"}`,children:o?"ON":"OFF"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Error Bars (xerr / yerr std)"}),e.jsx("button",{onClick:()=>W(!d),className:`px-3 py-1 rounded text-xs font-bold transition ${d?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400"}`,children:d?"ON":"OFF"})]})]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(V,{className:"w-4 h-4 text-emerald-400"}),"Live Model Benchmark Visualization"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-emerald-300 border border-slate-800 capitalize",children:["Mode: ",n]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:[n==="vertical"&&e.jsxs("svg",{viewBox:"0 0 500 240",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"45",y1:t,x2:"480",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"45",y1:"200",x2:"480",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"45",y1:"20",x2:"45",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),f.map((t,s)=>{const r=70+s*85,a=t.test*170,l=200-a;return e.jsxs("g",{children:[e.jsx("rect",{x:r-22,y:l,width:"44",height:a,fill:t.color,rx:"4",opacity:"0.9"}),d&&e.jsxs("g",{children:[e.jsx("line",{x1:r,y1:l-t.std*100,x2:r,y2:l+t.std*100,stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("line",{x1:r-6,y1:l-t.std*100,x2:r+6,y2:l-t.std*100,stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("line",{x1:r-6,y1:l+t.std*100,x2:r+6,y2:l+t.std*100,stroke:"#ffffff",strokeWidth:"1.5"})]}),o&&e.jsx("text",{x:r,y:l-(d?t.std*100+4:5),fill:"#f8fafc",fontSize:"10",textAnchor:"middle",fontWeight:"bold",children:t.test.toFixed(2)}),e.jsx("text",{x:r,y:"215",fill:"#cbd5e1",fontSize:"9",textAnchor:"middle",children:t.name})]},s)}),e.jsx("text",{x:"20",y:"110",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 110)",children:"Test Accuracy"})]}),n==="horizontal"&&e.jsxs("svg",{viewBox:"0 0 500 240",className:"w-full max-w-lg h-56",children:[[100,200,300,400,480].map(t=>e.jsx("line",{x1:t,y1:"20",x2:t,y2:"210",stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"100",y1:"210",x2:"480",y2:"210",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"100",y1:"20",x2:"100",y2:"210",stroke:"#64748b",strokeWidth:"1.5"}),f.map((t,s)=>{const r=35+s*36,a=t.test*360;return e.jsxs("g",{children:[e.jsx("text",{x:"92",y:r+14,fill:"#cbd5e1",fontSize:"10",textAnchor:"end",children:t.name}),e.jsx("rect",{x:"100",y:r,width:a,height:"22",fill:t.color,rx:"3",opacity:"0.9"}),d&&e.jsxs("g",{children:[e.jsx("line",{x1:100+a-t.std*200,y1:r+11,x2:100+a+t.std*200,y2:r+11,stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("line",{x1:100+a-t.std*200,y1:r+6,x2:100+a-t.std*200,y2:r+16,stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("line",{x1:100+a+t.std*200,y1:r+6,x2:100+a+t.std*200,y2:r+16,stroke:"#ffffff",strokeWidth:"1.5"})]}),o&&e.jsx("text",{x:100+a+(d?t.std*200+8:8),y:r+15,fill:"#f8fafc",fontSize:"10",fontWeight:"bold",children:t.test.toFixed(2)})]},s)}),e.jsx("text",{x:"290",y:"232",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"F1-Score / Accuracy"})]}),n==="grouped"&&e.jsxs("svg",{viewBox:"0 0 500 240",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"45",y1:t,x2:"480",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"45",y1:"200",x2:"480",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"45",y1:"20",x2:"45",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),f.slice(0,4).map((t,s)=>{const r=85+s*105,a=t.train*170,l=t.test*170;return e.jsxs("g",{children:[e.jsx("rect",{x:r-22,y:200-a,width:"20",height:a,fill:"#0284c7",rx:"3"}),e.jsx("rect",{x:r+2,y:200-l,width:"20",height:l,fill:"#10b981",rx:"3"}),e.jsx("text",{x:r,y:"215",fill:"#cbd5e1",fontSize:"9",textAnchor:"middle",children:t.name})]},s)}),e.jsx("rect",{x:"330",y:"25",width:"140",height:"45",fill:"#0f172a",rx:"4",stroke:"#334155"}),e.jsx("rect",{x:"340",y:"35",width:"12",height:"12",fill:"#0284c7",rx:"2"}),e.jsx("text",{x:"360",y:"45",fill:"#cbd5e1",fontSize:"10",children:"Train Acc"}),e.jsx("rect",{x:"340",y:"53",width:"12",height:"12",fill:"#10b981",rx:"2"}),e.jsx("text",{x:"360",y:"63",fill:"#cbd5e1",fontSize:"10",children:"Test Acc"})]}),n==="stacked"&&e.jsxs("svg",{viewBox:"0 0 500 240",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"45",y1:t,x2:"480",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"45",y1:"200",x2:"480",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"45",y1:"20",x2:"45",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),f.slice(0,4).map((t,s)=>{const r=85+s*105,a=110,l=35;return e.jsxs("g",{children:[e.jsx("rect",{x:r-18,y:200-a,width:"36",height:a,fill:"#6366f1",rx:"2"}),e.jsx("rect",{x:r-18,y:200-a-l,width:"36",height:l,fill:"#f43f5e",rx:"2"}),e.jsx("text",{x:r,y:"215",fill:"#cbd5e1",fontSize:"9",textAnchor:"middle",children:t.name})]},s)}),e.jsx("rect",{x:"330",y:"25",width:"140",height:"45",fill:"#0f172a",rx:"4",stroke:"#334155"}),e.jsx("rect",{x:"340",y:"35",width:"12",height:"12",fill:"#6366f1",rx:"2"}),e.jsx("text",{x:"360",y:"45",fill:"#cbd5e1",fontSize:"10",children:"True Positives"}),e.jsx("rect",{x:"340",y:"53",width:"12",height:"12",fill:"#f43f5e",rx:"2"}),e.jsx("text",{x:"360",y:"63",fill:"#cbd5e1",fontSize:"10",children:"False Positives"})]})]})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(D,{className:"w-3.5 h-3.5 text-emerald-400"}),"Python Snippet:"]}),e.jsx("pre",{className:"text-emerald-300",children:n==="vertical"?`bars = ax.bar(models, test_scores, color=colors, width=0.55)
${o?`ax.bar_label(bars, fmt='%.2f', padding=3)
`:""}ax.set_ylabel("Accuracy")`:n==="horizontal"?`bars = ax.barh(models, test_scores, color=colors, height=0.55)
${o?`ax.bar_label(bars, fmt='%.2f', padding=5)
`:""}ax.set_xlabel("Accuracy")`:n==="grouped"?`x = np.arange(len(models))
ax.bar(x - 0.17, train_acc, 0.35, label='Train')
ax.bar(x + 0.17, test_acc, 0.35, label='Test')
ax.set_xticks(x); ax.set_xticklabels(models)`:`ax.bar(models, true_positives, width=0.5, label='TP', color='#6366f1')
ax.bar(models, false_positives, width=0.5, bottom=true_positives, label='FP', color='#f43f5e')`})]})]})]})}),c==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(_,{className:"text-emerald-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore vertical, horizontal, grouped, stacked, and error bar charts."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>F(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${x===t?"bg-emerald-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-emerald-400",children:p[x].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:p[x].desc})]}),e.jsxs("button",{onClick:()=>v(p[x].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[b?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(z,{className:"w-3.5 h-3.5"}),b?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:p[x].code})})]}),c==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(C,{className:"text-emerald-400 w-5 h-5"}),"Bar Chart Technical Reference Notes"]}),e.jsxs("button",{onClick:()=>v(B),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[b?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(z,{className:"w-3.5 h-3.5"}),b?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:B})]}),c==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(T,{className:"text-emerald-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of bar charts, barh, grouped offsets, and stacked bars."})]}),m&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-sm font-bold",children:["Score: ",N()," / ",h.length," (",Math.round(N()/h.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:h.map((t,s)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[s+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((r,a)=>{const l=g[t.id]===a,k=t.correctAnswer===a;let u="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return m?k?u="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":l&&!k&&(u="border-rose-500 bg-rose-950/40 text-rose-200"):l&&(u="border-emerald-500 bg-emerald-950/50 text-emerald-200 ring-1 ring-emerald-500"),e.jsx("button",{onClick:()=>!m&&E(t.id,a),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${u}`,children:r},a)})}),m&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-emerald-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{w({}),j(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>j(!0),disabled:Object.keys(g).length<h.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-emerald-600/30",children:"Submit Quiz"})]})]})]})]})}export{Q as default};
