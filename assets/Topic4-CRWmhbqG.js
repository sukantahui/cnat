import{b as d,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{be as j,S as q,k as F,B as T,aa as _,aM as V,co as K,cp as $,cq as G,f as A,g as M}from"./vendor-icons-DFC0rBCP.js";const H=`"""\r
01_barplot_ci_estimator.py\r
Title: sns.barplot() with Custom Estimators and Error Bars\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 01: Categorical Bar Plots with Estimators")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Abhronila")\r
    print("=" * 65)\r
\r
    # Simulated Barrackpore Tech Track Salary Data\r
    df = pd.DataFrame({\r
        "Track": ["Deep Learning", "Data Science", "Web ML", "Deep Learning", "Data Science", "Web ML", "Deep Learning", "Data Science"],\r
        "Stipend_k": [45, 40, 32, 52, 44, 35, 48, 42],\r
        "Gender": ["M", "F", "M", "F", "F", "M", "M", "F"]\r
    })\r
\r
    fig, axes = plt.subplots(1, 2, figsize=(12, 5))\r
\r
    # 1. Mean estimator with 95% bootstrap errorbar (default)\r
    sns.barplot(\r
        data=df,\r
        x="Track",\r
        y="Stipend_k",\r
        hue="Gender",\r
        palette="Set2",\r
        ax=axes[0]\r
    )\r
    axes[0].set_title("Mean Stipend (errorbar='ci')", fontsize=12)\r
    axes[0].set_ylabel("Stipend (₹ in Thousands)")\r
\r
    # 2. Median estimator with standard deviation errorbar\r
    sns.barplot(\r
        data=df,\r
        x="Track",\r
        y="Stipend_k",\r
        estimator=np.median,\r
        errorbar="sd",\r
        palette="pastel",\r
        ax=axes[1]\r
    )\r
    axes[1].set_title("Median Stipend (estimator=np.median, errorbar='sd')", fontsize=12)\r
    axes[1].set_ylabel("Stipend (₹ in Thousands)")\r
\r
    plt.tight_layout()\r
    print("✓ Successfully rendered barplot with custom estimators.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,U=`"""\r
02_boxplot_quartiles.py\r
Title: sns.boxplot() for Outlier and Quartile Analysis\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 02: Boxplot Quartiles & Outlier Detection (IQR)")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # Box plot Anatomy:\r
    # - Lower Whisker: Q1 - 1.5 * IQR\r
    # - Box Bottom: Q1 (25th percentile)\r
    # - Box Center Line: Median (50th percentile)\r
    # - Box Top: Q3 (75th percentile)\r
    # - Upper Whisker: Q3 + 1.5 * IQR\r
    # - Flier Points: Outliers beyond whiskers!\r
\r
    tips = sns.load_dataset("tips")\r
\r
    plt.figure(figsize=(8, 5))\r
    sns.boxplot(\r
        data=tips,\r
        x="day",\r
        y="total_bill",\r
        hue="smoker",\r
        palette="coolwarm"\r
    )\r
    plt.title("Bill Distributions Across Days with Outlier Points", fontsize=12)\r
    plt.tight_layout()\r
    print("✓ Successfully generated categorical boxplot.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,X=`"""\r
03_violinplot_distribution.py\r
Title: sns.violinplot() Combining Boxplot Quartiles with KDE Densities\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 03: Violin Plots with Split Categories")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Swadeep")\r
    print("=" * 65)\r
\r
    tips = sns.load_dataset("tips")\r
\r
    fig, axes = plt.subplots(1, 2, figsize=(12, 5))\r
\r
    # 1. Standard Violin Plot\r
    sns.violinplot(\r
        data=tips,\r
        x="day",\r
        y="total_bill",\r
        palette="muted",\r
        inner="quartile",\r
        ax=axes[0]\r
    )\r
    axes[0].set_title("Standard Violin (inner='quartile')", fontsize=12)\r
\r
    # 2. Split Violin Plot (Comparing 2 categories on the left and right halves!)\r
    sns.violinplot(\r
        data=tips,\r
        x="day",\r
        y="total_bill",\r
        hue="sex",\r
        split=True,\r
        palette="pastel",\r
        inner="stick",\r
        ax=axes[1]\r
    )\r
    axes[1].set_title("Split Violin Plot (split=True, hue='sex')", fontsize=12)\r
\r
    plt.tight_layout()\r
    print("✓ Successfully rendered split violin plot.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,I=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 4 - CATEGORICAL PLOTS (BARPLOT, BOXPLOT, VIOLINPLOT)\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. CATEGORICAL PLOT SPECTRUM:\r
--------------------------------------------------------------------------------\r
Seaborn provides specialized functions to visualize numerical distributions \r
conditioned on categorical variables:\r
\r
a) sns.barplot():\r
   - Represents central tendency (mean by default) with error bars (95% bootstrap CI).\r
   - Custom estimators: estimator=np.median, estimator=np.sum.\r
   - Error bars: errorbar="ci", errorbar="sd", errorbar="se", errorbar=None.\r
\r
b) sns.boxplot():\r
   - Visualizes 5-number summary: Min (whisker), Q1 (25%), Median (50%), Q3 (75%), Max (whisker).\r
   - Points beyond Q1 - 1.5*IQR or Q3 + 1.5*IQR are plotted as individual outlier markers (fliers).\r
   - Essential in ML data preprocessing for spotting rogue anomalies.\r
\r
c) sns.violinplot():\r
   - Combines a box plot with a rotated Kernel Density Estimation (KDE) on each side.\r
   - Shows multimodal features (e.g. multiple peaks) that boxplots hide!\r
   - Special feature: \`split=True\` with binary hue allows comparing 2 groups \r
     on the exact same violin body (left vs right half).\r
\r
2. KEY PARAMETERS SUMMARY:\r
--------------------------------------------------------------------------------\r
- order: specifies the exact categorical order on the axis (e.g. order=['DL', 'DS', 'Web'])\r
- hue_order: specifies legend and coloring order\r
- palette: "Set2", "coolwarm", "viridis", "pastel", etc.\r
- inner (in violinplot): "box", "quartile", "point", "stick", None\r
`,u=[{id:1,question:"What statistical value does `sns.barplot()` compute for the height of the bars by default?",options:["The Maximum value","The Arithmetic Mean","The Mode","The Variance"],correctAnswer:1,explanation:"By default, `sns.barplot()` computes the arithmetic mean for each categorical group."},{id:2,question:"In a Seaborn boxplot (`sns.boxplot()`), how are outlier points defined and displayed?",options:["Any point beyond Q1 - 1.5*IQR or Q3 + 1.5*IQR is drawn as an individual flier dot","Points with negative values only","The top 5% of all values regardless of distribution","They are deleted automatically before plotting"],correctAnswer:0,explanation:"Standard Tukey boxplots display points outside [Q1 - 1.5*IQR, Q3 + 1.5*IQR] as individual outlier markers."},{id:3,question:"What advantage does `sns.violinplot()` provide over a traditional `sns.boxplot()`?",options:["It renders faster in 3D WebGL","It displays the underlying probability density distribution (KDE), exposing multimodal peaks","It only works on string text data","It converts categorical data to time series"],correctAnswer:1,explanation:"`sns.violinplot()` plots a mirrored KDE density shape, showing whether data within a box is bimodal or uniformly distributed."},{id:4,question:"When using `sns.violinplot()` with a binary categorical hue (e.g. sex='M'/'F'), which parameter joins both classes into a single split violin?",options:["join=True","split=True","merge_halves=True","dual=True"],correctAnswer:1,explanation:"`split=True` divides each violin vertically, drawing one category on the left and the other on the right for compact comparison."}],Q={"Deep Learning":{mean:48,median:46,q1:42,q3:54,min:36,max:60,outliers:[64],color:"#ec4899",violinPath:"M 120 70 C 145 100, 150 140, 120 180 C 90 140, 95 100, 120 70 Z"},"Data Science":{mean:42,median:41,q1:37,q3:47,min:30,max:53,outliers:[],color:"#3b82f6",violinPath:"M 250 85 C 275 115, 275 155, 250 195 C 225 155, 225 115, 250 85 Z"},"Web ML":{mean:34,median:33,q1:29,q3:39,min:24,max:45,outliers:[50],color:"#10b981",violinPath:"M 380 110 C 400 135, 405 170, 380 210 C 355 170, 360 135, 380 110 Z"}};function J(){const[x,B]=d.useState("interactive"),[f,E]=d.useState(0),[m,v]=d.useState(!1),[n,L]=d.useState("boxplot"),[p,w]=d.useState("mean"),[b,D]=d.useState(!1),[g,S]=d.useState({}),[h,N]=d.useState(!1),y=[{name:"01_barplot_ci_estimator.py",code:H},{name:"02_boxplot_quartiles.py",code:U},{name:"03_violinplot_distribution.py",code:X}],C=t=>{navigator.clipboard.writeText(t),v(!0),setTimeout(()=>v(!1),2e3)},W=(t,r)=>{h||S(o=>({...o,[t]:r}))},P=()=>{let t=0;return u.forEach(r=>{g[r.id]===r.correctAnswer&&t++}),t};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-pink-950 via-slate-900 to-purple-950 border border-pink-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-pink-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(j,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 4"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Categorical Plots: barplot, boxplot, violinplot"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Compare numerical metrics across categorical features. Master central tendency estimators, IQR quartiles, and continuous split-violin distributions."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Categorical Plot Studio",icon:q},{id:"code",label:"Python Code Lab",icon:F},{id:"notes",label:"Revision Notes",icon:T},{id:"quiz",label:"Knowledge Check",icon:_}].map(t=>{const r=t.icon,o=x===t.id;return e.jsxs("button",{onClick:()=>B(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${o?"bg-pink-600 text-white shadow-lg shadow-pink-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(r,{className:"w-4 h-4"}),t.label]},t.id)})})]}),x==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-pink-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(V,{className:"w-4 h-4"}),e.jsx("span",{children:"Plot Family Selector"})]}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"barplot",label:"Barplot",icon:K},{id:"boxplot",label:"Boxplot",icon:j},{id:"violinplot",label:"Violin",icon:$}].map(t=>{const r=t.icon;return e.jsxs("button",{onClick:()=>L(t.id),className:`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${n===t.id?"bg-pink-600 text-white border border-pink-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:[e.jsx(r,{className:"w-4 h-4"}),e.jsx("span",{children:t.label})]},t.id)})}),n==="barplot"&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Estimator Function:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>w("mean"),className:`p-2 rounded-lg text-xs font-mono ${p==="mean"?"bg-pink-600/30 border border-pink-500 text-pink-300":"bg-slate-950 border border-slate-800 text-slate-400"}`,children:"estimator=np.mean"}),e.jsx("button",{onClick:()=>w("median"),className:`p-2 rounded-lg text-xs font-mono ${p==="median"?"bg-pink-600/30 border border-pink-500 text-pink-300":"bg-slate-950 border border-slate-800 text-slate-400"}`,children:"estimator=np.median"})]})]}),n==="violinplot"&&e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-300",children:[e.jsx(G,{className:"w-4 h-4 text-pink-400"}),e.jsx("span",{children:"Split Gender Halves (split=True):"})]}),e.jsx("button",{onClick:()=>D(!b),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${b?"bg-pink-600 text-white":"bg-slate-800 text-slate-400"}`,children:b?"On":"Off"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-pink-400 font-semibold mb-1",children:"# Generated Code:"}),e.jsxs("div",{className:"text-purple-300",children:["sns.",n,"("]}),e.jsx("div",{className:"pl-3 text-slate-400",children:"data=df,"}),e.jsx("div",{className:"pl-3 text-slate-400",children:'x="Track",'}),e.jsx("div",{className:"pl-3 text-slate-400",children:'y="Stipend_k",'}),n==="barplot"&&p==="median"&&e.jsx("div",{className:"pl-3 text-emerald-300",children:"estimator=np.median,"}),n==="violinplot"&&b&&e.jsx("div",{className:"pl-3 text-emerald-300",children:'hue="Gender", split=True,'}),e.jsx("div",{className:"pl-3 text-pink-300",children:'palette="Set2"'}),e.jsx("div",{className:"text-purple-300",children:")"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(j,{className:"w-4 h-4 text-pink-400"}),"Live Rendering: sns.",n,"()"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Metric: Monthly Stipend (₹ in Thousands)"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"500",height:"280",viewBox:"0 0 500 280",className:"max-w-full",children:[e.jsx("line",{x1:"50",y1:"50",x2:"460",y2:"50",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"110",x2:"460",y2:"110",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"170",x2:"460",y2:"170",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"230",x2:"460",y2:"230",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"30",x2:"50",y2:"230",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("text",{x:"40",y:"234",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"₹20k"}),e.jsx("text",{x:"40",y:"174",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"₹35k"}),e.jsx("text",{x:"40",y:"114",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"₹50k"}),e.jsx("text",{x:"40",y:"54",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"₹65k"}),Object.entries(Q).map(([t,r],o)=>{const s=120+o*130;if(n==="barplot"){const l=p==="mean"?r.mean:r.median,a=(l-20)/45*180,i=230-a;return e.jsxs("g",{children:[e.jsx("rect",{x:s-35,y:i,width:"70",height:a,fill:r.color,opacity:"0.85",rx:"4"}),e.jsx("line",{x1:s,y1:i-12,x2:s,y2:i+12,stroke:"#ffffff",strokeWidth:"2"}),e.jsx("line",{x1:s-6,y1:i-12,x2:s+6,y2:i-12,stroke:"#ffffff",strokeWidth:"2"}),e.jsx("line",{x1:s-6,y1:i+12,x2:s+6,y2:i+12,stroke:"#ffffff",strokeWidth:"2"}),e.jsxs("text",{x:s,y:i-18,fill:"#ffffff",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:["₹",l,"k"]})]},t)}if(n==="boxplot"){const l=230-(r.min-20)/45*180,a=230-(r.max-20)/45*180,i=230-(r.q1-20)/45*180,c=230-(r.q3-20)/45*180,k=230-(r.median-20)/45*180;return e.jsxs("g",{children:[e.jsx("line",{x1:s,y1:a,x2:s,y2:l,stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("line",{x1:s-15,y1:a,x2:s+15,y2:a,stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("line",{x1:s-15,y1:l,x2:s+15,y2:l,stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("rect",{x:s-28,y:c,width:"56",height:i-c,fill:r.color,opacity:"0.8",stroke:"#ffffff",strokeWidth:"1.5",rx:"2"}),e.jsx("line",{x1:s-28,y1:k,x2:s+28,y2:k,stroke:"#ffffff",strokeWidth:"3"}),r.outliers.map((R,O)=>{const z=230-(R-20)/45*180;return e.jsx("circle",{cx:s,cy:z,r:"4",fill:"#f43f5e",stroke:"#ffffff",strokeWidth:"1"},O)}),e.jsxs("text",{x:s,y:k-6,fill:"#ffffff",fontSize:"10",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:["Med: ₹",r.median,"k"]})]},t)}return n==="violinplot"?e.jsxs("g",{children:[e.jsx("path",{d:r.violinPath,fill:r.color,opacity:"0.75",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("line",{x1:s,y1:"100",x2:s,y2:"160",stroke:"#ffffff",strokeWidth:"2.5"}),e.jsx("circle",{cx:s,cy:"130",r:"3.5",fill:"#ffffff"})]},t):null}),Object.keys(Q).map((t,r)=>e.jsx("text",{x:120+r*130,y:"255",fill:"#e2e8f0",fontSize:"11",fontWeight:"600",textAnchor:"middle",children:t},t))]})}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400",children:[e.jsx("span",{children:"Barrackpore ML Cohort: 2026 Batch"}),e.jsxs("span",{className:"text-pink-400 font-semibold font-mono",children:[n==="boxplot"&&"Box shows [Q1, Median, Q3] + Whiskers + Outliers",n==="barplot"&&`Bars display ${p} + 95% bootstrap confidence interval`,n==="violinplot"&&"Mirrored KDE shapes reveal density distribution peaks"]})]})]})]}),x==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:y.map((t,r)=>e.jsx("button",{onClick:()=>E(r),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${f===r?"bg-pink-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>C(y[f].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[m?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),m?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-pink-300 overflow-x-auto leading-relaxed max-h-[480px]",children:y[f].code})})]}),x==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-pink-400 font-semibold text-sm",children:[e.jsx(T,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 4 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>C(I),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[m?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),m?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:I})]}),x==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-pink-400 font-semibold text-sm",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 4 Knowledge Assessment (4 Questions)"})]}),h&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-semibold",children:["Score: ",P()," / ",u.length]})]}),e.jsx("div",{className:"space-y-6",children:u.map((t,r)=>{const o=g[t.id],s=o===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[r+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((l,a)=>{const i=o===a;let c="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return h?a===t.correctAnswer?c="bg-emerald-950/70 border-emerald-500 text-emerald-300":i&&(c="bg-rose-950/70 border-rose-500 text-rose-300"):i&&(c="bg-pink-600/30 border-pink-500 text-pink-200"),e.jsx("button",{onClick:()=>W(t.id,a),className:`p-3 rounded-lg border text-left text-xs transition-all ${c}`,children:l},a)})}),h&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${s?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:s?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{S({}),N(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>N(!0),disabled:Object.keys(g).length<u.length,className:"px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-pink-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{J as default};
