import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as q,cl as k,L,r as D,F as _,aa as F,aM as G,d as V,aN as Q,f as A,g as P}from"./vendor-icons-ri6cs58t.js";const U=`"""\r
=============================================================================\r
TOPIC 5: Histogram with plt.hist()\r
Script 01: Binning Strategies, Density Normalization & Custom Edges\r
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
section("1. Binning Strategies (Explicit vs Auto / Freedman-Diaconis)")\r
\r
# Generate synthetic customer ages from Coder & AccoTax Tax filing dataset\r
np.random.seed(42)\r
ages = np.concatenate([\r
    np.random.normal(28, 4, 300),  # Young professionals cohort\r
    np.random.normal(52, 7, 200)   # Senior taxpayers cohort\r
])\r
\r
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(13, 4.5))\r
\r
# Fixed Integer Bin count with rwidth spacing\r
counts, bin_edges, patches = ax1.hist(\r
    ages,\r
    bins=25,\r
    color='#38bdf8',\r
    edgecolor='#0f172a',\r
    linewidth=1.2,\r
    rwidth=0.85\r
)\r
ax1.set_title("1. Frequency Counts (bins=25)", fontweight='bold')\r
ax1.set_xlabel("Taxpayer Age (Years)")\r
ax1.set_ylabel("Count of Taxpayers")\r
ax1.grid(axis='y', linestyle='--', alpha=0.3)\r
\r
print(f"Total Observations : {len(ages)}")\r
print(f"Computed Bin Edges : {np.round(bin_edges[:5], 2)} ...")\r
\r
# Normalized Probability Density (density=True) with Freedman-Diaconis Rule\r
density_counts, edges, _ = ax2.hist(\r
    ages,\r
    bins='fd', # Freedman-Diaconis robust to outliers\r
    density=True,\r
    color='#10b981',\r
    edgecolor='#0f172a',\r
    linewidth=1.2,\r
    alpha=0.85\r
)\r
ax2.set_title("2. Probability Density (bins='fd', density=True)", fontweight='bold')\r
ax2.set_xlabel("Taxpayer Age (Years)")\r
ax2.set_ylabel("Probability Density")\r
ax2.grid(axis='y', linestyle='--', alpha=0.3)\r
\r
# Verify integral under density curve sums to approximately 1.0\r
bin_widths = np.diff(edges)\r
total_area = np.sum(density_counts * bin_widths)\r
print(f"Density Integral (Area) : {total_area:.4f} (Confirmed 1.0)")\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Histograms with fixed and automated binning created successfully.")\r
`,Y=`"""\r
=============================================================================\r
TOPIC 5: Histogram with plt.hist()\r
Script 02: Multi-Class Overlays & Stacked Distributions\r
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
section("1. Overlaid vs Stacked Histograms for Binary Classification")\r
\r
np.random.seed(42)\r
# Credit score feature distribution for Approved vs Rejected loan applicants\r
approved_scores = np.random.normal(740, 45, 500)\r
rejected_scores = np.random.normal(630, 55, 400)\r
\r
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 4.5))\r
\r
# 1. Overlaid with transparency (alpha) and stepfilled histtype\r
bins = np.linspace(480, 880, 35)\r
\r
ax1.hist(approved_scores, bins=bins, alpha=0.6, color='#10b981', label='Approved (Class 1)', edgecolor='#065f46')\r
ax1.hist(rejected_scores, bins=bins, alpha=0.6, color='#ef4444', label='Rejected (Class 0)', edgecolor='#991b1b')\r
ax1.set_title("1. Overlaid Distributions (Feature Separation)", fontweight='bold')\r
ax1.set_xlabel("Credit Score")\r
ax1.set_ylabel("Frequency Count")\r
ax1.legend()\r
ax1.grid(True, linestyle=":", alpha=0.4)\r
\r
# 2. Side-by-side / Stacked multi-array input\r
ax2.hist(\r
    [approved_scores, rejected_scores],\r
    bins=25,\r
    color=['#10b981', '#ef4444'],\r
    label=['Approved', 'Rejected'],\r
    histtype='barstacked',\r
    edgecolor='#0f172a'\r
)\r
ax2.set_title("2. Stacked Class Histograms (Total Volume)", fontweight='bold')\r
ax2.set_xlabel("Credit Score")\r
ax2.set_ylabel("Cumulative Volume")\r
ax2.legend()\r
ax2.grid(True, linestyle=":", alpha=0.4)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Multi-class overlaid and stacked histograms constructed.")\r
`,X=`"""\r
=============================================================================\r
TOPIC 5: Histogram with plt.hist()\r
Script 03: Cumulative Empirical CDF & Theoretical PDF Overlays\r
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
section("1. Histogram with Theoretical Normal PDF & Empirical CDF")\r
\r
np.random.seed(42)\r
mu, sigma = 100, 15\r
data = np.random.normal(mu, sigma, 1000)\r
\r
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 4.5))\r
\r
# 1. Density histogram with Gaussian Bell Curve Overlay\r
count, bins, _ = ax1.hist(data, bins=30, density=True, color='#8b5cf6', alpha=0.65, edgecolor='#4c1d95', rwidth=0.9)\r
\r
# Compute theoretical Gaussian PDF\r
x_range = np.linspace(bins.min(), bins.max(), 200)\r
pdf = (1 / (sigma * np.sqrt(2 * np.pi))) * np.exp(-0.5 * ((x_range - mu) / sigma) ** 2)\r
\r
ax1.plot(x_range, pdf, color='#f43f5e', lw=2.5, label=f'Normal PDF (μ={mu}, σ={sigma})')\r
ax1.set_title("Density Histogram + Theoretical PDF", fontweight='bold')\r
ax1.set_xlabel("Value")\r
ax1.set_ylabel("Probability Density")\r
ax1.legend()\r
ax1.grid(True, linestyle="--", alpha=0.3)\r
\r
# 2. Cumulative Distribution Function (CDF)\r
ax2.hist(data, bins=40, density=True, cumulative=True, histtype='step', color='#06b6d4', lw=2.5, label='Empirical CDF')\r
ax2.set_title("Cumulative Distribution (cumulative=True)", fontweight='bold')\r
ax2.set_xlabel("Value")\r
ax2.set_ylabel("Cumulative Probability P(X ≤ x)")\r
ax2.set_ylim(0, 1.05)\r
ax2.axhline(0.5, color='#f59e0b', linestyle=':', label='Median (50th Percentile)')\r
ax2.legend()\r
ax2.grid(True, linestyle="--", alpha=0.3)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Successfully rendered PDF overlay and empirical CDF histograms.")\r
`,M="MATPLOTLIB ESSENTIALS: TOPIC 5 NOTE\r\n=============================================================================\r\nTOPIC: Histograms (plt.hist / ax.hist) & Probability Distributions\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. CORE FUNCTION SIGNATURE:\r\n   - `n, bins, patches = ax.hist(x, bins=None, range=None, density=False, cumulative=False, histtype='bar', orientation='vertical', **kwargs)`\r\n   - Returns:\r\n     * `n`: Array of bin counts (or densities if `density=True`).\r\n     * `bins`: Array of bin edges (length = `len(n) + 1`).\r\n     * `patches`: List of Matplotlib Rectangle artists.\r\n\r\n2. BINNING STRATEGIES:\r\n   - Fixed Integer: `bins=20` divides `[min(x), max(x)]` into 20 equal width intervals.\r\n   - Array of Edges: `bins=[0, 18, 35, 50, 65, 100]` for non-uniform demographic intervals.\r\n   - Automatic Rules:\r\n     * `'auto'`: Maximum of Sturges and Freedman-Diaconis estimators.\r\n     * `'fd'` (Freedman-Diaconis): `Bin Width = 2 * IQR / (N^(1/3))`. Highly robust against outliers.\r\n     * `'scott'`: `Bin Width = 3.5 * sigma / (N^(1/3))`.\r\n\r\n3. NORMALIZATION & CDF:\r\n   - `density=True`: Normalizes the histogram so that the total area (integral) under the bins equals 1.0 (Probability Density Function).\r\n   - `cumulative=True`: Computes the running sum of counts/densities (Empirical Cumulative Distribution Function, CDF).\r\n\r\n4. MULTI-SERIES & HISTTYPES:\r\n   - `histtype='bar'` (default)\r\n   - `histtype='barstacked'`: Stacks classes vertically.\r\n   - `histtype='step'`: Generates an unfilled line polygon (efficient for comparing 5+ distributions).\r\n   - `histtype='stepfilled'`: Filled transparent polygon.\r\n",p=[{id:1,question:"When `density=True` is passed to `ax.hist()`, what does the sum of the areas of all histogram bins equal?",options:["Total number of samples N","100.0 (percentage)","1.0 (valid probability distribution)","Maximum bin height"],correctAnswer:2,explanation:"Setting `density=True` scales the bin heights such that the integral (sum of bin height * bin width) across all bins equals exactly 1.0."},{id:2,question:"Which automated binning method is least sensitive to extreme outliers when analyzing skewed machine learning features?",options:["bins='fd' (Freedman-Diaconis based on Interquartile Range)","bins='sturges'","bins=10","bins='sqrt'"],correctAnswer:0,explanation:"Freedman-Diaconis (`bins='fd'`) calculates bin width using the Interquartile Range (IQR), making it resilient to extreme outliers."},{id:3,question:"What is returned by the `plt.hist()` function call?",options:["Only the Figure object","A 3-element tuple: `(counts_or_densities, bin_edges, patches)`","A Pandas DataFrame containing summary statistics","A dictionary containing mean and standard deviation"],correctAnswer:1,explanation:"`plt.hist()` returns a tuple `(n, bins, patches)` where `n` is array of bin counts/densities, `bins` is array of bin edges, and `patches` is the list of Rectangle Artists."},{id:4,question:"How do you plot an empirical Cumulative Distribution Function (CDF) directly in Matplotlib?",options:["ax.hist(data, cumulative=True, density=True)","ax.plot_cdf(data)","ax.hist(data, running_sum=True)","ax.cdf_transform(data)"],correctAnswer:0,explanation:"Passing `cumulative=True` and `density=True` to `ax.hist()` calculates the empirical CDF where the final bin reaches 1.0 (100% of data)."}];function ee(){const[m,O]=i.useState("studio"),[h,I]=i.useState(1),[b,v]=i.useState(!1),[a,R]=i.useState(15),[r,j]=i.useState(!1),[c,E]=i.useState(!0),[l,B]=i.useState(!1),[y,w]=i.useState({}),[u,N]=i.useState(!1),g={1:{name:"01_histograms_and_binning_rules.py",code:U,desc:"Binning algorithms (bins='fd', 'auto'), density normalization, and edge arrays"},2:{name:"02_multiclass_and_stacked_histograms.py",code:Y,desc:"Overlaid transparent distributions vs barstacked class comparisons"},3:{name:"03_cumulative_and_kde_overlays.py",code:X,desc:"Gaussian PDF theoretical curves and empirical cumulative distribution (CDF)"}},C=t=>{navigator.clipboard.writeText(t),v(!0),setTimeout(()=>v(!1),2e3)},H=(t,s)=>{w(x=>({...x,[t]:s}))},S=()=>{let t=0;return p.forEach(s=>{y[s.id]===s.correctAnswer&&t++}),t},z=(()=>{const x=420/a,o=[];for(let d=0;d<a;d++){const f=60+d*x,n=(d-(a-1)/2)/((a-1)/4);let W=Math.exp(-.5*n*n),$=Math.exp(-.5*(n-1.2)*(n-1.2))*.7;const T=r?140:160;o.push({x:f,w:x*.9,h1:W*T,h2:$*T})}return o})();return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-violet-900/40 via-purple-900/30 to-indigo-900/40 border border-violet-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-violet-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(q,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 5: Histogram with plt.hist()"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["Understand feature distributions and probability densities in machine learning datasets. Master binning estimators (",e.jsx("code",{className:"text-violet-300 font-mono",children:"bins='fd'"}),", ",e.jsx("code",{className:"text-violet-300 font-mono",children:"'auto'"}),"), density normalization (",e.jsx("code",{className:"text-violet-300 font-mono",children:"density=True"}),"), Gaussian PDF overlays, and multi-class classification separation histograms."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30 flex items-center gap-1.5",children:[e.jsx(k,{className:"w-3.5 h-3.5"})," plt.hist()"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5",children:[e.jsx(L,{className:"w-3.5 h-3.5"})," PDF & CDF Analysis"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-violet-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"Before applying algorithms like Linear Regression or Gaussian Naive Bayes, Debangshu and Abhronila always plot feature histograms. If a feature like ',e.jsx("code",{className:"text-slate-200",children:"Customer Income"})," is heavily right-skewed, the histogram immediately tells us that a log transformation ",e.jsx("code",{className:"text-violet-300 font-mono",children:"np.log1p(x)"}),' is needed before training!"']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Distribution Studio",icon:k},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:D},{id:"notes",label:"Revision Notes",icon:_},{id:"quiz",label:"MCQ Assessment",icon:F}].map(t=>{const s=t.icon;return e.jsxs("button",{onClick:()=>O(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${m===t.id?"border-violet-500 text-violet-400 bg-violet-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[m==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(G,{className:"text-violet-400 w-5 h-5"}),"Histogram & Density Controls"]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"Number of Bins (bins parameter)"}),e.jsxs("span",{className:"text-violet-400 font-mono",children:[a," bins"]})]}),e.jsx("input",{type:"range",min:"5",max:"35",step:"1",value:a,onChange:t=>R(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-violet-500"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 mt-1",children:[e.jsx("span",{children:"5 (Under-smoothed)"}),e.jsx("span",{children:"35 (Over-granular)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Y-Axis Metric Scaling"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>j(!1),className:`px-3 py-2 rounded-lg text-xs font-semibold border transition ${r?"border-slate-800 bg-slate-950 text-slate-400":"border-violet-500 bg-violet-950/60 text-violet-300 ring-1 ring-violet-500"}`,children:"Count (Frequency)"}),e.jsx("button",{onClick:()=>j(!0),className:`px-3 py-2 rounded-lg text-xs font-semibold border transition ${r?"border-violet-500 bg-violet-950/60 text-violet-300 ring-1 ring-violet-500":"border-slate-800 bg-slate-950 text-slate-400"}`,children:"density=True (PDF)"})]})]}),e.jsxs("div",{className:"space-y-3 pt-2",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Gaussian Normal PDF Curve Overlay"}),e.jsx("button",{onClick:()=>E(!c),className:`px-3 py-1 rounded text-xs font-bold transition ${c?"bg-violet-600 text-white":"bg-slate-800 text-slate-400"}`,children:c?"ON":"OFF"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Multi-Class Class Separation (Approved vs Rejected)"}),e.jsx("button",{onClick:()=>B(!l),className:`px-3 py-1 rounded text-xs font-bold transition ${l?"bg-violet-600 text-white":"bg-slate-800 text-slate-400"}`,children:l?"ON":"OFF"})]})]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(V,{className:"w-4 h-4 text-violet-400"}),"Live Histogram Distribution"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-violet-300 border border-slate-800",children:["bins=",a," | density=",r?"True":"False"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"50",y1:t,x2:"490",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"50",y1:"200",x2:"490",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),z.map((t,s)=>e.jsxs("g",{children:[e.jsx("rect",{x:t.x,y:200-t.h1,width:t.w,height:t.h1,fill:"#8b5cf6",opacity:l?"0.6":"0.85",stroke:"#4c1d95",strokeWidth:"1",rx:"2"}),l&&e.jsx("rect",{x:t.x,y:200-t.h2,width:t.w,height:t.h2,fill:"#ef4444",opacity:"0.55",stroke:"#991b1b",strokeWidth:"1",rx:"2"})]},s)),c&&!l&&e.jsx("path",{d:"M 60 198 Q 165 190 270 40 T 480 198",fill:"none",stroke:"#f43f5e",strokeWidth:"3"}),l?e.jsxs("g",{children:[e.jsx("rect",{x:"330",y:"25",width:"145",height:"50",fill:"#0f172a",rx:"4",stroke:"#334155"}),e.jsx("rect",{x:"340",y:"36",width:"12",height:"12",fill:"#8b5cf6",rx:"2"}),e.jsx("text",{x:"360",y:"46",fill:"#cbd5e1",fontSize:"10",children:"Class 1: Approved"}),e.jsx("rect",{x:"340",y:"54",width:"12",height:"12",fill:"#ef4444",rx:"2"}),e.jsx("text",{x:"360",y:"64",fill:"#cbd5e1",fontSize:"10",children:"Class 0: Rejected"})]}):c?e.jsxs("g",{children:[e.jsx("rect",{x:"330",y:"25",width:"145",height:"30",fill:"#0f172a",rx:"4",stroke:"#334155"}),e.jsx("line",{x1:"340",y1:"40",x2:"365",y2:"40",stroke:"#f43f5e",strokeWidth:"2"}),e.jsx("text",{x:"375",y:"44",fill:"#f43f5e",fontSize:"10",fontWeight:"bold",children:"Normal PDF"})]}):null,e.jsx("text",{x:"270",y:"225",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Applicant Credit Score (Bins)"}),e.jsx("text",{x:"20",y:"110",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 110)",children:r?"Probability Density":"Frequency Count"})]})})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(Q,{className:"w-3.5 h-3.5 text-violet-400"}),"Python Matplotlib Code:"]}),e.jsx("pre",{className:"text-violet-300",children:l?`ax.hist(approved, bins=${a}, density=${r?"True":"False"}, alpha=0.6, color='#8b5cf6', label='Approved')
ax.hist(rejected, bins=${a}, density=${r?"True":"False"}, alpha=0.5, color='#ef4444', label='Rejected')
ax.legend()`:`counts, edges, patches = ax.hist(data, bins=${a}, density=${r?"True":"False"}, color='#8b5cf6', rwidth=0.9)
${c?`ax.plot(x_range, normal_pdf, color='#f43f5e', lw=2.5, label='Normal PDF')
ax.legend()`:""}`})]})]})]})}),m==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(D,{className:"text-violet-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore binning strategies, multi-class overlays, and theoretical PDF curves."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>I(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${h===t?"bg-violet-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-violet-400",children:g[h].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:g[h].desc})]}),e.jsxs("button",{onClick:()=>C(g[h].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[b?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(P,{className:"w-3.5 h-3.5"}),b?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:g[h].code})})]}),m==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(_,{className:"text-violet-400 w-5 h-5"}),"Histogram & Density Estimation Reference"]}),e.jsxs("button",{onClick:()=>C(M),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[b?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(P,{className:"w-3.5 h-3.5"}),b?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:M})]}),m==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(F,{className:"text-violet-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of histogram parameters, density scaling, and binning rules."})]}),u&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-violet-950 border border-violet-500/40 text-violet-300 text-sm font-bold",children:["Score: ",S()," / ",p.length," (",Math.round(S()/p.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:p.map((t,s)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[s+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((x,o)=>{const d=y[t.id]===o,f=t.correctAnswer===o;let n="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return u?f?n="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":d&&!f&&(n="border-rose-500 bg-rose-950/40 text-rose-200"):d&&(n="border-violet-500 bg-violet-950/50 text-violet-200 ring-1 ring-violet-500"),e.jsx("button",{onClick:()=>!u&&H(t.id,o),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${n}`,children:x},o)})}),u&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-violet-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{w({}),N(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>N(!0),disabled:Object.keys(y).length<p.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-violet-600 text-white hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-violet-600/30",children:"Submit Quiz"})]})]})]})]})}export{ee as default};
