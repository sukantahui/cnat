import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{cm as D,S as B,k as P,B as j,aa as N,Z as W,H as z,f as C,g as _}from"./vendor-icons-DFC0rBCP.js";const L=`"""\r
01_matplotlib_vs_seaborn_syntax.py\r
Title: Code Complexity Comparison: Matplotlib vs Seaborn\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import matplotlib.pyplot as plt\r
import seaborn as sns\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 01: Side-by-Side Syntax Comparison")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Sachin")\r
    print("=" * 65)\r
\r
    # Synthetic student data\r
    df = pd.DataFrame({\r
        "Hours": [5, 7, 9, 11, 13, 15, 17],\r
        "Score": [52, 64, 73, 85, 89, 94, 98],\r
        "Department": ["CS", "ECE", "CS", "IT", "ECE", "CS", "IT"]\r
    })\r
\r
    print("Task: Plot a multi-group colored scatter plot with legend.\\n")\r
\r
    print("--- [METHOD 1: RAW MATPLOTLIB] ---")\r
    print("""\r
    # Matplotlib requires manual category grouping, loops, and color management:\r
    fig, ax = plt.subplots()\r
    colors = {'CS': 'red', 'ECE': 'blue', 'IT': 'green'}\r
    for dept, group in df.groupby('Department'):\r
        ax.scatter(group['Hours'], group['Score'], label=dept, color=colors[dept], s=100)\r
    ax.set_xlabel('Hours')\r
    ax.set_ylabel('Score')\r
    ax.set_title('Matplotlib Multi-group Scatter')\r
    ax.legend()\r
    """)\r
\r
    print("--- [METHOD 2: SEABORN] ---")\r
    print("""\r
    # Seaborn does everything in a single declarative line:\r
    sns.scatterplot(data=df, x='Hours', y='Score', hue='Department', s=100)\r
    plt.title('Seaborn Multi-group Scatter')\r
    """)\r
\r
    print("💡 Summary: 10 lines of imperative Matplotlib code -> 1 line of declarative Seaborn!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,R=`"""\r
02_default_aesthetics_diff.py\r
Title: Visual Defaults and Statistical Inferences\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import matplotlib.pyplot as plt\r
import seaborn as sns\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 02: Statistical Inferences Built-in")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # In Matplotlib:\r
    # Creating a bar chart with 95% bootstrap confidence intervals requires writing\r
    # custom numpy bootstrap loops and errorbar formatting.\r
\r
    # In Seaborn:\r
    # sns.barplot() automatically computes the mean and bootstraps 95% CI error bars!\r
    tips = sns.load_dataset("tips")\r
\r
    print("\\nDataset: Restaurant Tips Sample")\r
    print(tips[["day", "total_bill"]].head(5))\r
\r
    print("\\nExecuting sns.barplot(data=tips, x='day', y='total_bill'):")\r
    print("Seaborn automatically performs:")\r
    print(" 1. Grouping by 'day'")\r
    print(" 2. Computing mean(total_bill) per day")\r
    print(" 3. Computing 1000-sample bootstrap confidence intervals for error bars")\r
    print(" 4. Beautifully formatting categorical x-ticks")\r
\r
if __name__ == "__main__":\r
    main()\r
`,F=`"""\r
03_combining_plt_and_sns.py\r
Title: Symbiotic Power: Combining Matplotlib Axes with Seaborn Plots\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import matplotlib.pyplot as plt\r
import seaborn as sns\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 03: Matplotlib & Seaborn Hybrid Workflows")\r
    print("   Instructor: Sukanta Hui | Students: Swadeep, Tuhina, Sachin")\r
    print("=" * 65)\r
\r
    # Professional workflow:\r
    # 1. Create subplots grid using Matplotlib: plt.subplots()\r
    # 2. Draw statistical graphics using Seaborn passing ax=ax[i]\r
    # 3. Fine-tune annotations, spines, limits using Matplotlib methods!\r
\r
    fig, axes = plt.subplots(1, 2, figsize=(10, 4))\r
\r
    # Ax 1: Seaborn KDE\r
    data_x = np.random.normal(loc=50, scale=10, size=200)\r
    sns.kdeplot(data_x, ax=axes[0], fill=True, color="#6366f1")\r
    axes[0].set_title("Axes 0: Seaborn KDE + Matplotlib Ax")\r
    axes[0].axvline(50, color="red", linestyle="--", label="Mean=50")\r
    axes[0].legend()\r
\r
    # Ax 2: Seaborn Boxplot\r
    sns.boxplot(y=data_x, ax=axes[1], color="#a855f7")\r
    axes[1].set_title("Axes 1: Seaborn Boxplot")\r
\r
    plt.tight_layout()\r
    print("✓ Successfully rendered 2-panel hybrid Matplotlib + Seaborn visualization.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,M=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 2 - SEABORN VS MATPLOTLIB\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. FEATURE COMPARISON MATRIX:\r
--------------------------------------------------------------------------------\r
Feature               | Matplotlib                       | Seaborn\r
----------------------|----------------------------------|------------------------------\r
Paradigm              | Imperative (How to draw)         | Declarative (What to show)\r
DataFrame Integration | Manual (df['col'] slicing)       | Direct (data=df, x='col')\r
Multi-group Coloring  | Manual loops + dictionary maps   | Built-in (hue='category')\r
Statistical Computations| Manual (mean, std, error bars)  | Automatic (CIs, KDEs, Medians)\r
Default Themes        | Basic, high-contrast, stark     | Modern, muted, publication-ready\r
Multi-plot Faceting   | Manual nested subplot loops      | Automated (FacetGrid, PairGrid)\r
Customization Granularity| Infinite pixel-level control   | High-level with Matplotlib access\r
\r
2. WHEN TO USE WHICH?\r
--------------------------------------------------------------------------------\r
- Use Seaborn when:\r
  * Performing Exploratory Data Analysis (EDA).\r
  * Comparing statistical distributions across categories.\r
  * Visualizing correlation matrices (heatmaps) or pairwise relations (pairplots).\r
  * Grouping points by multiple categorical dimensions (hue, style, size).\r
\r
- Use Raw Matplotlib when:\r
  * Creating highly custom scientific layouts, custom canvas geometries, or CAD diagrams.\r
  * Drawing arbitrary geometric primitives (patches, custom arrows, bespoke polygons).\r
  * Plotting domain-specific non-statistical diagrams (e.g. circuit schematics, physics models).\r
\r
3. THE BEST OF BOTH WORLDS: THE HYBRID PATTERN\r
--------------------------------------------------------------------------------\r
Never think of them as competitors; Seaborn uses Matplotlib under the hood!\r
Pattern:\r
    fig, axes = plt.subplots(1, 2, figsize=(10, 4))\r
    sns.scatterplot(data=df, x='age', y='salary', hue='dept', ax=axes[0])\r
    sns.kdeplot(data=df, x='salary', hue='dept', fill=True, ax=axes[1])\r
    # Fine-tune with Matplotlib methods:\r
    axes[0].set_ylim(0, 100000)\r
    plt.tight_layout()\r
`,u=[{id:1,question:"How does the coding paradigm differ between Matplotlib and Seaborn?",options:["Matplotlib is purely functional, while Seaborn is purely assembly language","Matplotlib is imperative (telling step-by-step how to draw), while Seaborn is declarative (stating what statistical graphic to show)","Matplotlib only works on web servers, while Seaborn works on GPUs","There is no paradigm difference"],correctAnswer:1,explanation:"Matplotlib follows an imperative paradigm requiring low-level geometry commands, whereas Seaborn follows a declarative high-level paradigm."},{id:2,question:"When plotting categorical groups in Matplotlib vs Seaborn, what must you do in Matplotlib?",options:["Nothing, Matplotlib automatically creates legends and color groups by default","Manually split/loop over DataFrame groups and create individual scatter calls with custom color dictionaries","Recompile Python with C flags","Matplotlib cannot plot multiple groups"],correctAnswer:1,explanation:"In Matplotlib, multi-group categorization requires manual `groupby` loops, manual color mapping, and explicit legend calls. Seaborn simplifies this to `hue='group'`."},{id:3,question:"How do you render a Seaborn plot onto an existing Matplotlib Axes object `ax`?",options:["Pass ax=ax into the Seaborn plotting function","Call sns.render_to(ax)","Pass canvas=ax","It is impossible to combine Matplotlib axes with Seaborn"],correctAnswer:0,explanation:"Most Seaborn axes-level functions accept an `ax=...` argument allowing seamless embedding into Matplotlib `plt.subplots()` grids."},{id:4,question:"What statistical feature does `sns.barplot()` calculate automatically that raw `plt.bar()` does not?",options:["Mean aggregation and bootstrap confidence intervals","Eigenvalue decomposition","Linear regression coefficients","Fourier transform spectra"],correctAnswer:0,explanation:"`sns.barplot()` automatically calculates category means and computes 95% bootstrap confidence intervals for error bars."}],O=[{dept:"CS",avgScore:88,ciLow:83,ciHigh:93,color:"#3b82f6"},{dept:"ECE",avgScore:78,ciLow:71,ciHigh:85,color:"#10b981"},{dept:"IT",avgScore:84,ciLow:79,ciHigh:89,color:"#f59e0b"}];function U(){const[l,k]=i.useState("interactive"),[h,A]=i.useState(0),[c,y]=i.useState(!1),[a,T]=i.useState("seaborn"),[d,I]=i.useState(!0),[g,v]=i.useState({}),[p,w]=i.useState(!1),f=[{name:"01_matplotlib_vs_seaborn_syntax.py",code:L},{name:"02_default_aesthetics_diff.py",code:R},{name:"03_combining_plt_and_sns.py",code:F}],S=t=>{navigator.clipboard.writeText(t),y(!0),setTimeout(()=>y(!1),2e3)},E=(t,r)=>{p||v(n=>({...n,[t]:r}))},H=()=>{let t=0;return u.forEach(r=>{g[r.id]===r.correctAnswer&&t++}),t};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 border border-violet-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-violet-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(D,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 2"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Seaborn vs Matplotlib"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Compare imperative low-level primitives against declarative statistical abstractions. Understand when to use pure Matplotlib, Seaborn, or the hybrid pattern."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Side-by-Side Comparator",icon:B},{id:"code",label:"Python Code Lab",icon:P},{id:"notes",label:"Revision Notes",icon:j},{id:"quiz",label:"Knowledge Check",icon:N}].map(t=>{const r=t.icon,n=l===t.id;return e.jsxs("button",{onClick:()=>k(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${n?"bg-violet-600 text-white shadow-lg shadow-violet-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(r,{className:"w-4 h-4"}),t.label]},t.id)})})]}),l==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-violet-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(W,{className:"w-4 h-4"}),e.jsx("span",{children:"Select Architecture Paradigm"})]}),e.jsx("div",{className:"space-y-2",children:[{id:"matplotlib",label:"Raw Matplotlib (Imperative)",desc:"10+ lines of explicit loops & mappings"},{id:"seaborn",label:"Seaborn (Declarative)",desc:"1 line with auto CI errorbars & palettes"},{id:"hybrid",label:"Hybrid Subplots (Recommended)",desc:"Matplotlib Grid + Seaborn Statistics"}].map(t=>e.jsxs("div",{onClick:()=>T(t.id),className:`p-3.5 rounded-xl border cursor-pointer transition-all ${a===t.id?"bg-violet-950/60 border-violet-500 shadow-md shadow-violet-500/10":"bg-slate-950 border-slate-800 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"font-semibold text-xs text-white flex items-center justify-between",children:[e.jsx("span",{children:t.label}),a===t.id&&e.jsx(z,{className:"w-3.5 h-3.5 text-violet-400"})]}),e.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:t.desc})]},t.id))}),a!=="matplotlib"&&e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-300 font-medium",children:"Auto 95% Bootstrap CI:"}),e.jsx("button",{onClick:()=>I(!d),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${d?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400"}`,children:d?"Enabled":"Disabled"})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-1.5",children:[e.jsx("div",{className:"text-violet-400 font-semibold mb-1",children:"Paradigm Verdict:"}),a==="matplotlib"&&e.jsx("div",{className:"text-amber-300",children:"⚠ Heavy boilerplate. Requires manual category filtering and explicit error bar calculations."}),a==="seaborn"&&e.jsx("div",{className:"text-emerald-300",children:"✓ High efficiency. Statistical calculations (CI, mean) performed automatically on DataFrame columns."}),a==="hybrid"&&e.jsx("div",{className:"text-cyan-300",children:"★ Industry Best Practice. Combine Matplotlib figure layout with Seaborn plotting power!"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider",children:"Live Visual Comparison: Student Department Marks"}),e.jsx("span",{className:"text-xs font-mono text-violet-400",children:a==="matplotlib"?"plt.bar()":a==="seaborn"?"sns.barplot()":"fig, ax + sns"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"500",height:"280",viewBox:"0 0 500 280",className:"max-w-full",children:[e.jsx("line",{x1:"50",y1:"50",x2:"460",y2:"50",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"110",x2:"460",y2:"110",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"170",x2:"460",y2:"170",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"230",x2:"460",y2:"230",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"30",x2:"50",y2:"230",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("text",{x:"40",y:"234",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"0"}),e.jsx("text",{x:"40",y:"174",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"35"}),e.jsx("text",{x:"40",y:"114",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"70"}),e.jsx("text",{x:"40",y:"54",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"100"}),O.map((t,r)=>{const s=100+r*130,x=t.avgScore/100*180,o=230-x,m=a==="matplotlib"?"#64748b":t.color;return e.jsxs("g",{children:[e.jsx("rect",{x:s,y:o,width:70,height:x,fill:m,rx:a==="matplotlib"?"0":"4",opacity:"0.9"}),d&&a!=="matplotlib"&&e.jsxs("g",{stroke:"#ffffff",strokeWidth:"2",children:[e.jsx("line",{x1:s+70/2,y1:230-t.ciHigh/100*180,x2:s+70/2,y2:230-t.ciLow/100*180}),e.jsx("line",{x1:s+70/2-8,y1:230-t.ciHigh/100*180,x2:s+70/2+8,y2:230-t.ciHigh/100*180}),e.jsx("line",{x1:s+70/2-8,y1:230-t.ciLow/100*180,x2:s+70/2+8,y2:230-t.ciLow/100*180})]}),e.jsxs("text",{x:s+70/2,y:o-(d&&a!=="matplotlib"?18:6),fill:"#ffffff",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:[t.avgScore,"%"]}),e.jsxs("text",{x:s+70/2,y:"250",fill:"#e2e8f0",fontSize:"12",fontWeight:"600",textAnchor:"middle",children:[t.dept," Dept"]})]},t.dept)})]})}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300",children:[a==="matplotlib"&&e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-slate-500",children:"# Matplotlib requires manual mean calculation & color mapping:"}),e.jsx("div",{className:"text-amber-300",children:"plt.bar(df['dept'].unique(), means, color='gray')"}),e.jsx("div",{className:"text-slate-400",children:"plt.xlabel('Department'); plt.ylabel('Score')"})]}),a==="seaborn"&&e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-slate-500",children:"# Seaborn calculates mean & 95% bootstrap CI automatically:"}),e.jsx("div",{className:"text-emerald-400",children:"sns.barplot(data=df, x='dept', y='score', palette='muted')"})]}),a==="hybrid"&&e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-slate-500",children:"# Hybrid Matplotlib layout + Seaborn statistical plot:"}),e.jsx("div",{className:"text-cyan-300",children:"fig, ax = plt.subplots(figsize=(6, 4))"}),e.jsx("div",{className:"text-emerald-400",children:"sns.barplot(data=df, x='dept', y='score', ax=ax)"}),e.jsx("div",{className:"text-slate-400",children:'ax.set_title("Barrackpore Department Performance")'})]})]})]})]}),l==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:f.map((t,r)=>e.jsx("button",{onClick:()=>A(r),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${h===r?"bg-violet-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>S(f[h].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[c?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),c?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-violet-300 overflow-x-auto leading-relaxed max-h-[480px]",children:f[h].code})})]}),l==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-violet-400 font-semibold text-sm",children:[e.jsx(j,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 2 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>S(M),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[c?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),c?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:M})]}),l==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-violet-400 font-semibold text-sm",children:[e.jsx(N,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 2 Knowledge Assessment (4 Questions)"})]}),p&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-semibold",children:["Score: ",H()," / ",u.length]})]}),e.jsx("div",{className:"space-y-6",children:u.map((t,r)=>{const n=g[t.id],s=n===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[r+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((x,o)=>{const m=n===o;let b="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return p?o===t.correctAnswer?b="bg-emerald-950/70 border-emerald-500 text-emerald-300":m&&(b="bg-rose-950/70 border-rose-500 text-rose-300"):m&&(b="bg-violet-600/30 border-violet-500 text-violet-200"),e.jsx("button",{onClick:()=>E(t.id,o),className:`p-3 rounded-lg border text-left text-xs transition-all ${b}`,children:x},o)})}),p&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${s?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:s?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{v({}),w(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>w(!0),disabled:Object.keys(g).length<u.length,className:"px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-violet-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{U as default};
