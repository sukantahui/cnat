import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as P,ci as v,a1 as B,r as S,F as N,aa as _,aM as I,d as E,aN as H,f as A,g as M}from"./vendor-icons-ri6cs58t.js";const W=`"""\r
=============================================================================\r
TOPIC 13: Worked Example 2: Histogram of Salary Distribution\r
Script 01: Right-Skewed Compensation, Mean vs Median & Log-Normal PDF\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
from scipy import stats\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("1. Data Science Industry Salary Distribution Analysis")\r
\r
np.random.seed(42)\r
# Simulating 1,200 tech compensation packages (in Lakhs INR per annum)\r
# Right-skewed Log-Normal distribution\r
salaries = np.random.lognormal(mean=2.3, sigma=0.6, size=1200) * 1.5\r
salaries = np.clip(salaries, 3.5, 65.0)\r
\r
mean_sal = np.mean(salaries)\r
median_sal = np.median(salaries)\r
skewness = stats.skew(salaries)\r
\r
print(f"Sample Count    : {len(salaries)}")\r
print(f"Mean Salary     : ₹{mean_sal:.2f} LPA")\r
print(f"Median Salary   : ₹{median_sal:.2f} LPA (Disparity: ₹{mean_sal - median_sal:.2f} LPA)")\r
print(f"Sample Skewness : {skewness:.3f} (Heavily Right-Skewed)")\r
\r
fig, ax = plt.subplots(figsize=(9, 5))\r
\r
# Plot Density Histogram\r
counts, bins, _ = ax.hist(\r
    salaries,\r
    bins=35,\r
    density=True,\r
    color='#38bdf8',\r
    edgecolor='#0f172a',\r
    alpha=0.7,\r
    label='Salary Distribution (Density)'\r
)\r
\r
# Overlay Mean and Median Vertical Reference Lines\r
ax.axvline(median_sal, color='#10b981', lw=2.5, linestyle='-', label=f'Median: ₹{median_sal:.1f} LPA')\r
ax.axvline(mean_sal, color='#ef4444', lw=2.5, linestyle='--', label=f'Mean: ₹{mean_sal:.1f} LPA (Skewed)')\r
\r
# Annotate Skewness Warning\r
ax.text(\r
    0.95, 0.70,\r
    f"Right-Skewness: +{skewness:.2f}\\nMean > Median confirms\\nhigh-earner executive tail.",\r
    transform=ax.transAxes,\r
    ha='right',\r
    bbox=dict(boxstyle='round', facecolor='#0f172a', edgecolor='#38bdf8')\r
)\r
\r
ax.set_title("Tech Industry Data Science Salary Distribution (Kolkata & Bengaluru)", fontweight='bold')\r
ax.set_xlabel("Annual Compensation (Lakh INR)")\r
ax.set_ylabel("Probability Density")\r
ax.legend(loc='upper right')\r
ax.grid(True, linestyle=":", alpha=0.4)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Salary histogram with statistical summary metrics rendered.")\r
`,O=`"""\r
=============================================================================\r
TOPIC 13: Worked Example 2: Histogram of Salary Distribution\r
Script 02: Hybrid Aligned Boxplot + Histogram GridSpec Dashboard\r
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
section("1. Aligned Boxplot + Histogram Outlier Analysis")\r
\r
np.random.seed(42)\r
salaries = np.random.lognormal(mean=2.3, sigma=0.6, size=1000) * 1.5\r
salaries = np.clip(salaries, 3.5, 65.0)\r
\r
fig = plt.figure(figsize=(9, 6))\r
\r
# 2-row GridSpec sharing X-axis: Top boxplot (25% height), Bottom histogram (75% height)\r
gs = fig.add_gridspec(2, 1, height_ratios=[1, 3], hspace=0.05)\r
\r
# 1. Top Boxplot\r
ax_box = fig.add_subplot(gs[0])\r
ax_box.boxplot(\r
    salaries,\r
    vert=False,\r
    patch_artist=True,\r
    boxprops=dict(facecolor='#6366f1', color='#4338ca'),\r
    medianprops=dict(color='#f43f5e', lw=2),\r
    flierprops=dict(marker='o', markerfacecolor='#f43f5e', markersize=4, alpha=0.6)\r
)\r
ax_box.tick_params(axis='x', labelbottom=False)\r
ax_box.set_yticks([])\r
ax_box.set_title("Aligned Boxplot (Outlier Detection) & Density Histogram", fontweight='bold', pad=12)\r
ax_box.grid(True, linestyle=":", alpha=0.3)\r
\r
# 2. Bottom Histogram\r
ax_hist = fig.add_subplot(gs[1], sharex=ax_box)\r
ax_hist.hist(salaries, bins=35, color='#0ea5e9', edgecolor='#0f172a', alpha=0.85)\r
ax_hist.set_xlabel("Annual Salary (Lakh INR)")\r
ax_hist.set_ylabel("Frequency Count")\r
ax_hist.grid(True, linestyle=":", alpha=0.3)\r
\r
plt.close(fig)\r
\r
print("✓ Aligned Boxplot + Histogram hybrid dashboard constructed.")\r
`,F=`"""\r
=============================================================================\r
TOPIC 13: Worked Example 2: Histogram of Salary Distribution\r
Script 03: Feature Preprocessing - Log1p Normalization Pipeline\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
from scipy import stats\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("1. Transforming Skewed Feature to Gaussian Normal Space")\r
\r
np.random.seed(42)\r
raw_salaries = np.random.lognormal(mean=2.3, sigma=0.6, size=1000) * 1.5\r
\r
# Apply log1p transform (ln(1 + x))\r
log_salaries = np.log1p(raw_salaries)\r
\r
raw_skew = stats.skew(raw_salaries)\r
log_skew = stats.skew(log_salaries)\r
\r
print(f"Raw Salary Skewness         : +{raw_skew:.3f} (Violates normality assumption)")\r
print(f"Log-Transformed Skewness    : +{log_skew:.3f} (Near-Gaussian symmetric)")\r
\r
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 4.5))\r
\r
# 1. Raw Skewed Distribution\r
ax1.hist(raw_salaries, bins=30, color='#f43f5e', edgecolor='#0f172a', alpha=0.75)\r
ax1.set_title(f"1. Raw Skewed Salaries (Skew: +{raw_skew:.2f})", fontweight='bold')\r
ax1.set_xlabel("Annual Salary (LPA)")\r
ax1.set_ylabel("Count")\r
ax1.grid(True, linestyle=":", alpha=0.3)\r
\r
# 2. Log-Transformed Normal Distribution\r
ax2.hist(log_salaries, bins=30, color='#10b981', edgecolor='#0f172a', alpha=0.75)\r
ax2.set_title(f"2. Log-Transformed: np.log1p(x) (Skew: {log_skew:.2f})", fontweight='bold')\r
ax2.set_xlabel("log(1 + Salary)")\r
ax2.set_ylabel("Count")\r
ax2.grid(True, linestyle=":", alpha=0.3)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Before-and-after log transformation comparison plot generated.")\r
`,T=`MATPLOTLIB ESSENTIALS: TOPIC 13 NOTE\r
=============================================================================\r
TOPIC: Worked Example 2 - Salary Distribution, Skewness & Log Transforms\r
MENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r
=============================================================================\r
\r
1. REAL-WORLD DATA CHALLENGE:\r
   - Compensation and economic variables (income, sales volume, web traffic) almost always exhibit heavy positive (right) skewness.\r
   - A minority of extreme outliers (CXO packages of ₹50L - ₹80L) pulls the Mean substantially higher than the Median.\r
\r
2. STATISTICAL DIAGNOSTICS WITH MATPLOTLIB:\r
   - Overlaying vertical reference lines:\r
     \`ax.axvline(np.median(salaries), color='green', label='Median')\`\r
     \`ax.axvline(np.mean(salaries), color='red', linestyle='--', label='Mean')\`\r
   - When Mean > Median: Positive (right) skew.\r
   - When Mean < Median: Negative (left) skew.\r
\r
3. HYBRID BOXPLOT + HISTOGRAM ARCHITECTURE:\r
   - Synchronized dual-panel layout using \`gs = fig.add_gridspec(2, 1, height_ratios=[1, 3], hspace=0)\`:\r
     * Top horizontal boxplot (\`vert=False\`) isolates isolated flier points beyond \`1.5 * IQR\`.\r
     * Bottom histogram shows full density envelope sharing the exact same X-axis.\r
\r
4. PREPROCESSING PIPELINES FOR ML:\r
   - Linear Regression, Lasso/Ridge, Neural Networks assume normally distributed features/residuals.\r
   - Applying \`np.log1p(salaries)\` compresses the long right tail and converts log-normal distributions into symmetric Gaussians.\r
`,l=[{id:1,question:"In a heavily right-skewed salary distribution, what is the expected relationship between the Mean and Median values on the histogram?",options:["Mean > Median (Mean is pulled to the right by high-earning outlier salaries)","Mean < Median","Mean == Median exactly","Median is always zero"],correctAnswer:0,explanation:"Extreme positive outliers pull the sensitive arithmetic Mean towards the right tail, whereas the robust Median remains centered near the typical employee salary."},{id:2,question:"Why is an aligned Boxplot placed directly above a Histogram in professional exploratory data analysis (EDA)?",options:["It doubles the chart resolution","It provides immediate visual alignment between the IQR/outliers (box) and the multimodal density peaks (histogram) along the shared X-axis","Boxplots are required for 3D printing","Histograms cannot show positive numbers"],correctAnswer:1,explanation:"Combining a horizontal boxplot and histogram on a shared X-axis gives a complete picture of quartiles, outliers, and density peaks simultaneously."},{id:3,question:"Which NumPy transformation is standard practice before feeding right-skewed compensation features into a Linear Regression model?",options:["np.log1p(x) (computes natural log of 1 + x)","np.square(x)","np.sin(x)","np.cumprod(x)"],correctAnswer:0,explanation:"`np.log1p(x)` safely maps right-skewed positive data into a symmetric Gaussian-like distribution while avoiding `log(0)` errors."},{id:4,question:"Which Matplotlib command draws a vertical line denoting the sample Median across the entire vertical span of a histogram?",options:["ax.axvline(median_val, color='green')","ax.draw_v(median_val)","plt.vertical_grid(median_val)","ax.plot_col(median_val)"],correctAnswer:0,explanation:"`ax.axvline(x)` draws an infinite vertical reference line from the bottom to the top of the Axes."}];function q(){const[n,C]=r.useState("studio"),[i,L]=r.useState(1),[o,g]=r.useState(!1),[t,D]=r.useState("skewed"),[p,R]=r.useState(25),[m,u]=r.useState({}),[d,f]=r.useState(!1),x={1:{name:"01_salary_skewness_and_kde.py",code:W,desc:"Right-skewed compensation distributions, mean vs median disparity, and skewness metrics"},2:{name:"02_hybrid_box_histogram_dashboard.py",code:O,desc:"Synchronized dual-panel GridSpec aligning a horizontal boxplot with a density histogram"},3:{name:"03_log_transformed_salary_pipeline.py",code:F,desc:"Feature normalization using np.log1p(x) to achieve Gaussian symmetry for ML models"}},y=s=>{navigator.clipboard.writeText(s),g(!0),setTimeout(()=>g(!1),2e3)},z=(s,a)=>{u(b=>({...b,[s]:a}))},w=()=>{let s=0;return l.forEach(a=>{m[a.id]===a.correctAnswer&&s++}),s};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-sky-900/40 via-blue-900/30 to-indigo-900/40 border border-sky-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(P,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 13: Worked Example 2 — Salary Distribution & Skewness"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["End-to-end practical case study analyzing tech industry compensation in Kolkata and Bengaluru. Diagnose positive skewness with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"ax.axvline"})," (Mean vs Median), construct aligned Boxplot + Histogram EDA dashboards, and prepare features with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"np.log1p()"})," normalizations."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30 flex items-center gap-1.5",children:[e.jsx(v,{className:"w-3.5 h-3.5"})," Case Study 02"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5",children:[e.jsx(B,{className:"w-3.5 h-3.5"})," Skewness & Log1p"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-sky-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsx("p",{className:"text-slate-300 mt-1",children:'"When Swadeep and Sachin analyzed salary distributions, the Mean was ₹18.5 LPA but the Median was ₹12.0 LPA! The histogram immediately exposed why: a handful of senior lead architects earning ₹50L+ pulled the mean up. Visualizing this skewness warned us that Linear Regression would produce poor predictions without a log transformation!"'})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Salary Distribution Studio",icon:v},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:S},{id:"notes",label:"Revision Notes",icon:N},{id:"quiz",label:"MCQ Assessment",icon:_}].map(s=>{const a=s.icon;return e.jsxs("button",{onClick:()=>C(s.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${n===s.id?"border-sky-500 text-sky-400 bg-sky-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(a,{className:"w-4 h-4"}),s.label]},s.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[n==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(I,{className:"text-sky-400 w-5 h-5"}),"Statistical View Controls"]}),e.jsx("div",{className:"space-y-2.5",children:[{id:"skewed",title:"1. Raw Skewed Salary Histogram",desc:"Mean (₹18.5L) vs Median (₹12.0L) Disparity"},{id:"hybrid",title:"2. Aligned Boxplot + Histogram",desc:"Outlier isolation with shared horizontal axes"},{id:"transformed",title:"3. np.log1p(x) Normalization",desc:"Gaussian symmetry transformation for regression"}].map(s=>e.jsxs("button",{onClick:()=>D(s.id),className:`w-full text-left p-3.5 rounded-xl border transition ${t===s.id?"border-sky-500 bg-sky-950/60 text-sky-200 ring-1 ring-sky-500 shadow-md":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("div",{className:"font-semibold text-white text-xs",children:s.title}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-0.5",children:s.desc})]},s.id))}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"Histogram Bins (bins parameter)"}),e.jsx("span",{className:"text-sky-400 font-mono",children:p})]}),e.jsx("input",{type:"range",min:"15",max:"40",step:"5",value:p,onChange:s=>R(parseInt(s.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-sky-500"})]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(E,{className:"w-4 h-4 text-sky-400"}),"Live Statistical Analysis Canvas"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-sky-300 border border-slate-800 uppercase",children:["Mode: ",t]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:[t==="skewed"&&e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(s=>e.jsx("line",{x1:"50",y1:s,x2:"490",y2:s,stroke:"#1e293b",strokeDasharray:"3,3"},s)),e.jsx("line",{x1:"50",y1:"200",x2:"490",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),[{x:55,h:45},{x:75,h:110},{x:95,h:165},{x:115,h:175},{x:135,h:150},{x:155,h:120},{x:175,h:90},{x:195,h:70},{x:215,h:55},{x:235,h:40},{x:255,h:30},{x:275,h:22},{x:295,h:16},{x:315,h:12},{x:335,h:10},{x:355,h:7},{x:375,h:5},{x:395,h:4},{x:415,h:3},{x:435,h:2},{x:455,h:2}].map((s,a)=>e.jsx("rect",{x:s.x,y:200-s.h,width:"16",height:s.h,fill:"#38bdf8",opacity:"0.8",stroke:"#0284c7",rx:"1"},a)),e.jsx("line",{x1:"125",y1:"20",x2:"125",y2:"200",stroke:"#10b981",strokeWidth:"2.5"}),e.jsx("line",{x1:"175",y1:"20",x2:"175",y2:"200",stroke:"#ef4444",strokeWidth:"2.5",strokeDasharray:"4,4"}),e.jsx("rect",{x:"300",y:"25",width:"180",height:"55",fill:"#0f172a",rx:"4",stroke:"#334155"}),e.jsx("line",{x1:"310",y1:"40",x2:"330",y2:"40",stroke:"#10b981",strokeWidth:"2.5"}),e.jsx("text",{x:"338",y:"44",fill:"#cbd5e1",fontSize:"9",children:"Median: ₹12.0 LPA"}),e.jsx("line",{x1:"310",y1:"60",x2:"330",y2:"60",stroke:"#ef4444",strokeWidth:"2.5",strokeDasharray:"4,4"}),e.jsx("text",{x:"338",y:"64",fill:"#cbd5e1",fontSize:"9",children:"Mean: ₹18.5 LPA (Skewed)"}),e.jsx("text",{x:"270",y:"225",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Annual Compensation (Lakh INR)"}),e.jsx("text",{x:"20",y:"110",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 110)",children:"Frequency Count"})]}),t==="hybrid"&&e.jsxs("svg",{viewBox:"0 0 500 240",className:"w-full max-w-lg h-56",children:[e.jsxs("g",{children:[e.jsx("rect",{x:"50",y:"15",width:"420",height:"50",fill:"#0b0f19",stroke:"#334155",rx:"3"}),e.jsx("rect",{x:"110",y:"25",width:"90",height:"30",fill:"#6366f1",opacity:"0.6",stroke:"#818cf8",rx:"2"}),e.jsx("line",{x1:"140",y1:"25",x2:"140",y2:"55",stroke:"#f43f5e",strokeWidth:"2.5"}),e.jsx("line",{x1:"75",y1:"40",x2:"110",y2:"40",stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("line",{x1:"200",y1:"40",x2:"310",y2:"40",stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("circle",{cx:"370",cy:"40",r:"3.5",fill:"#f43f5e"}),e.jsx("circle",{cx:"420",cy:"40",r:"3.5",fill:"#f43f5e"}),e.jsx("circle",{cx:"450",cy:"40",r:"3.5",fill:"#f43f5e"}),e.jsx("text",{x:"60",y:"30",fill:"#a5b4fc",fontSize:"8",fontWeight:"bold",children:"Boxplot Outliers"})]}),e.jsxs("g",{transform:"translate(0, 50)",children:[e.jsx("line",{x1:"50",y1:"160",x2:"470",y2:"160",stroke:"#64748b",strokeWidth:"1.5"}),[{x:55,h:30},{x:80,h:90},{x:105,h:125},{x:130,h:130},{x:155,h:100},{x:180,h:70},{x:205,h:45},{x:230,h:30},{x:255,h:20},{x:280,h:15},{x:305,h:10},{x:330,h:6},{x:355,h:4},{x:420,h:2},{x:450,h:2}].map((s,a)=>e.jsx("rect",{x:s.x,y:160-s.h,width:"20",height:s.h,fill:"#0ea5e9",opacity:"0.8",stroke:"#0284c7",rx:"1"},a))]})]}),t==="transformed"&&e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(s=>e.jsx("line",{x1:"50",y1:s,x2:"490",y2:s,stroke:"#1e293b",strokeDasharray:"3,3"},s)),e.jsx("line",{x1:"50",y1:"200",x2:"490",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),[{x:70,h:10},{x:100,h:35},{x:130,h:75},{x:160,h:125},{x:190,h:165},{x:220,h:180},{x:250,h:175},{x:280,h:145},{x:310,h:100},{x:340,h:60},{x:370,h:30},{x:400,h:12}].map((s,a)=>e.jsx("rect",{x:s.x,y:200-s.h,width:"24",height:s.h,fill:"#10b981",opacity:"0.85",stroke:"#047857",rx:"2"},a)),e.jsx("text",{x:"270",y:"225",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Log-Transformed: np.log1p(Salary) (Near-Gaussian Normal)"}),e.jsx("text",{x:"20",y:"110",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 110)",children:"Frequency Count"})]})]})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(H,{className:"w-3.5 h-3.5 text-sky-400"}),"Python Matplotlib Code:"]}),e.jsx("pre",{className:"text-sky-300",children:t==="skewed"?`ax.hist(salaries, bins=${p}, color='#38bdf8', edgecolor='black')
ax.axvline(np.median(salaries), color='#10b981', lw=2.5, label='Median')
ax.axvline(np.mean(salaries), color='#ef4444', lw=2.5, linestyle='--', label='Mean')
ax.legend()`:t==="hybrid"?`gs = fig.add_gridspec(2, 1, height_ratios=[1, 3], hspace=0.05)
ax_box = fig.add_subplot(gs[0])
ax_box.boxplot(salaries, vert=False)
ax_hist = fig.add_subplot(gs[1], sharex=ax_box)
ax_hist.hist(salaries, bins=35)`:`log_salaries = np.log1p(salaries)
ax.hist(log_salaries, bins=30, color='#10b981', edgecolor='black')
ax.set_title("Log-Transformed Normal Distribution")`})]})]})]})}),n==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(S,{className:"text-sky-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore salary distribution histograms, boxplot hybrid dashboards, and log1p transforms."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(s=>e.jsxs("button",{onClick:()=>L(s),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${i===s?"bg-sky-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",s]},s))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-sky-400",children:x[i].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:x[i].desc})]}),e.jsxs("button",{onClick:()=>y(x[i].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[o?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),o?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:x[i].code})})]}),n==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(N,{className:"text-sky-400 w-5 h-5"}),"Case Study 2: Compensation Analytics Notes"]}),e.jsxs("button",{onClick:()=>y(T),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[o?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),o?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:T})]}),n==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(_,{className:"text-sky-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of right-skewed distributions, mean vs median, and log transforms."})]}),d&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-sky-950 border border-sky-500/40 text-sky-300 text-sm font-bold",children:["Score: ",w()," / ",l.length," (",Math.round(w()/l.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:l.map((s,a)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[a+1,". ",s.question]}),e.jsx("div",{className:"space-y-2",children:s.options.map((b,c)=>{const k=m[s.id]===c,j=s.correctAnswer===c;let h="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return d?j?h="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":k&&!j&&(h="border-rose-500 bg-rose-950/40 text-rose-200"):k&&(h="border-sky-500 bg-sky-950/50 text-sky-200 ring-1 ring-sky-500"),e.jsx("button",{onClick:()=>!d&&z(s.id,c),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${h}`,children:b},c)})}),d&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-sky-300",children:"Explanation:"})," ",s.explanation]})]},s.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{u({}),f(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>f(!0),disabled:Object.keys(m).length<l.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-sky-600 text-white hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-sky-600/30",children:"Submit Quiz"})]})]})]})]})}export{q as default};
