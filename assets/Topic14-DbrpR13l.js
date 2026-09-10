import{b as o,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{aN as S,S as H,k as O,B as C,aa as _,r as L,H as R,f as P,g as A}from"./vendor-icons-DFC0rBCP.js";const K=`"""\r
01_practice_problem_1.py\r
Title: Practice Problem 1: Bimodal Distribution Analysis & Optimal Bins\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Practice Problem 1: Distribution Fitting & Bandwidth")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Sachin")\r
    print("=" * 65)\r
\r
    # Problem Statement:\r
    # 1. Generate 300 samples with a bimodal distribution (mean1=45, mean2=80)\r
    # 2. Plot histogram with bins=25 and overlay a KDE with bw_adjust=0.8\r
    # 3. Add vertical dashed lines at the two mode peaks\r
\r
    np.random.seed(42)\r
    group1 = np.random.normal(45, 6, 150)\r
    group2 = np.random.normal(80, 8, 150)\r
    data = np.concatenate([group1, group2])\r
\r
    sns.set_theme(style="whitegrid")\r
    plt.figure(figsize=(8, 4.5))\r
\r
    sns.histplot(\r
        data,\r
        bins=25,\r
        kde=True,\r
        kde_kws={"bw_adjust": 0.8},\r
        color="#6366f1",\r
        stat="density"\r
    )\r
\r
    plt.axvline(45, color="red", linestyle="--", label="Mode 1 (45)")\r
    plt.axvline(80, color="green", linestyle="--", label="Mode 2 (80)")\r
    plt.title("Practice Problem 1: Bimodal Exam Distribution with Custom KDE", fontsize=12)\r
    plt.legend()\r
    plt.tight_layout()\r
    print("✓ Practice Problem 1 successfully solved!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,Q=`"""\r
02_practice_problem_2.py\r
Title: Practice Problem 2: Categorical Boxplot with Custom Outlier Styler\r
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
    print("🎓 Seaborn Practice Problem 2: Categorical Outlier Formatting")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # Problem Statement:\r
    # 1. Load 'tips' dataset\r
    # 2. Render boxplot of total_bill grouped by day, conditioned on smoker\r
    # 3. Format outlier points (fliers) with red diamond markers\r
\r
    tips = sns.load_dataset("tips")\r
\r
    plt.figure(figsize=(8, 5))\r
    sns.boxplot(\r
        data=tips,\r
        x="day",\r
        y="total_bill",\r
        hue="smoker",\r
        palette="Set2",\r
        flierprops={"marker": "D", "markerfacecolor": "red", "markersize": 5},\r
        notch=True # Displays median notch confidence\r
    )\r
\r
    plt.title("Practice Problem 2: Notched Boxplot with Custom Red Diamond Fliers", fontsize=12)\r
    plt.tight_layout()\r
    print("✓ Practice Problem 2 successfully solved!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,$=`"""\r
03_practice_problem_3.py\r
Title: Practice Problem 3: Lower-Triangle Heatmap with Custom Annotations\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
import numpy as np\r
import pandas as pd\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Practice Problem 3: Masked Multicollinearity Heatmap")\r
    print("   Instructor: Sukanta Hui | Students: Tuhina, Swadeep, Mahima")\r
    print("=" * 65)\r
\r
    # Problem Statement:\r
    # 1. Compute correlation for 4 synthetic student metrics\r
    # 2. Mask the upper triangle and diagonal (np.triu(..., k=0))\r
    # 3. Apply diverging 'vlag' colormap centered at 0\r
\r
    df = pd.DataFrame({\r
        "StudyHours": [10, 12, 14, 8, 16, 11, 15, 9],\r
        "Attendance": [85, 90, 95, 75, 98, 88, 92, 80],\r
        "Assignments": [4, 5, 6, 2, 6, 4, 5, 3],\r
        "Score": [78, 85, 92, 68, 97, 82, 94, 74]\r
    })\r
\r
    corr = df.corr()\r
    mask = np.triu(np.ones_like(corr, dtype=bool))\r
\r
    plt.figure(figsize=(6, 5))\r
    sns.heatmap(\r
        corr,\r
        mask=mask,\r
        annot=True,\r
        fmt=".2f",\r
        cmap="vlag",\r
        vmin=-1,\r
        vmax=1,\r
        center=0,\r
        square=True,\r
        linewidths=1.5\r
    )\r
\r
    plt.title("Practice Problem 3: Student Feature Lower-Triangle Correlation", fontsize=11)\r
    plt.tight_layout()\r
    print("✓ Practice Problem 3 successfully solved!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 14 - PRACTICE PROBLEMS\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. PRACTICE PROBLEM SPECIFICATIONS:\r
--------------------------------------------------------------------------------\r
Problem 1: Bimodal Density Exploration\r
- Goal: Capture 2 distinct student performance clusters without over-smoothing.\r
- Key Functions: \`sns.histplot(kde=True, kde_kws={'bw_adjust': 0.8})\`\r
\r
Problem 2: Advanced Categorical Styling & Outlier Highlighting\r
- Goal: Create a notched boxplot with custom marker symbols for outlier fliers.\r
- Key Functions: \`sns.boxplot(..., notch=True, flierprops={'marker': 'D', 'markerfacecolor': 'red'})\`\r
\r
Problem 3: Feature Correlation with Lower-Triangle Masking\r
- Goal: Build a production report eliminating diagonal & upper redundancy.\r
- Key Functions: \`mask = np.triu(np.ones_like(corr, dtype=bool))\`, \`sns.heatmap(..., mask=mask)\`\r
\r
2. CHEAT SHEET FOR EXAMS & ASSIGNMENTS:\r
--------------------------------------------------------------------------------\r
- Use \`sns.set_theme(style="whitegrid", palette="muted")\` for standard reports.\r
- Always use \`numeric_only=True\` in \`df.corr()\`.\r
- Use \`sns.despine()\` after plotting to clean top and right borders.\r
- Check outliers using IQR bounds: [Q1 - 1.5*IQR, Q3 + 1.5*IQR].\r
`,b=[{id:1,question:"In Practice Problem 1, why was `bw_adjust=0.8` chosen instead of `bw_adjust=2.5`?",options:["To prevent over-smoothing and preserve the two distinct local modal peaks in the distribution","Because 2.5 is not a valid float","To change the color to red","To double the number of bins"],correctAnswer:0,explanation:"A smaller `bw_adjust` retains sensitivity to multi-modal peaks, whereas a high bandwidth would blur both peaks into a single distorted curve."},{id:2,question:"In `sns.boxplot()`, what visual information does `notch=True` communicate?",options:["A 95% confidence interval around the median, allowing visual comparison of group medians","That the plot has missing data","A rounded border radius","A 3D perspective"],correctAnswer:0,explanation:"`notch=True` creates a notched narrowing around the median, representing approximately a 95% confidence interval for the median."},{id:3,question:"Which dictionary argument in `sns.boxplot()` allows customizing the outlier flier marker shape, color, and size?",options:["flierprops={'marker': 'D', 'markerfacecolor': 'red', 'markersize': 5}","outlier_style={}","anomaly_config={}","fliers_dict={}"],correctAnswer:0,explanation:"`flierprops` is the dictionary passed to configure the appearance of outlier points."},{id:4,question:"When creating a lower-triangle mask with `np.triu(np.ones_like(corr, dtype=bool))`, what do `True` values in the mask represent to `sns.heatmap()`?",options:["Cells that should be hidden / masked out","Cells that should be colored bright yellow","Cells that are calculated twice","Cells containing missing values"],correctAnswer:0,explanation:"`sns.heatmap(mask=...)` hides/blanks out all matrix cells where the mask array evaluates to `True`."}];function q(){const[i,B]=o.useState("interactive"),[u,W]=o.useState(0),[d,y]=o.useState(!1),[s,M]=o.useState(1),[c,E]=o.useState(.8),[l,z]=o.useState(!0),[x,I]=o.useState(!0),[f,j]=o.useState({}),[m,w]=o.useState(!1),g=[{name:"01_practice_problem_1.py",code:K},{name:"02_practice_problem_2.py",code:Q},{name:"03_practice_problem_3.py",code:$}],k=t=>{navigator.clipboard.writeText(t),y(!0),setTimeout(()=>y(!1),2e3)},D=(t,r)=>{m||j(a=>({...a,[t]:r}))},F=()=>{let t=0;return b.forEach(r=>{f[r.id]===r.correctAnswer&&t++}),t};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(S,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 14"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Practice Problems & Hands-on Labs"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Tackle 3 structured data visualization coding challenges. Master custom KDE bandwidth adjustments, notched boxplots with diamond fliers, and masked correlation heatmaps."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Problem Lab",icon:H},{id:"code",label:"Python Code Lab",icon:O},{id:"notes",label:"Revision Notes",icon:C},{id:"quiz",label:"Knowledge Check",icon:_}].map(t=>{const r=t.icon,a=i===t.id;return e.jsxs("button",{onClick:()=>B(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${a?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(r,{className:"w-4 h-4"}),t.label]},t.id)})})]}),i==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(L,{className:"w-4 h-4"}),e.jsx("span",{children:"Select Practice Challenge"})]}),e.jsx("div",{className:"space-y-2",children:[{id:1,title:"Problem 1: Bimodal Density",desc:"Histplot + KDE bandwidth tuning"},{id:2,title:"Problem 2: Notched Boxplot",desc:"Custom diamond flier props"},{id:3,title:"Problem 3: Masked Heatmap",desc:"Lower-triangle correlation matrix"}].map(t=>e.jsxs("div",{onClick:()=>M(t.id),className:`p-3 rounded-xl border cursor-pointer transition-all ${s===t.id?"bg-indigo-950/60 border-indigo-500 shadow":"bg-slate-950 border-slate-800 hover:border-slate-700"}`,children:[e.jsx("div",{className:"font-semibold text-xs text-white",children:t.title}),e.jsx("p",{className:"text-[11px] text-slate-400 mt-0.5",children:t.desc})]},t.id))}),s===1&&e.jsxs("div",{className:"space-y-2 pt-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-300",children:"KDE Bandwidth (bw_adjust):"}),e.jsx("span",{className:"font-mono text-indigo-400",children:c.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.3",max:"2.0",step:"0.1",value:c,onChange:t=>E(Number(t.target.value)),className:"w-full accent-indigo-500 cursor-pointer"})]}),s===2&&e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-300 font-medium",children:"Notch Confidence (notch=True):"}),e.jsx("button",{onClick:()=>z(!l),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${l?"bg-indigo-600 text-white":"bg-slate-800 text-slate-400"}`,children:l?"ON":"OFF"})]}),s===3&&e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-300 font-medium",children:"Mask Upper Triangle:"}),e.jsx("button",{onClick:()=>I(!x),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${x?"bg-indigo-600 text-white":"bg-slate-800 text-slate-400"}`,children:x?"ON":"OFF"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{className:"w-4 h-4 text-emerald-400"}),e.jsx("span",{className:"text-slate-300 font-medium",children:"Challenge Solution Status"})]}),e.jsx("span",{className:"text-emerald-400 font-mono",children:"Passed ✓"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(S,{className:"w-4 h-4 text-indigo-400"}),"Challenge Live SVG Verification"]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Problem ",s," Canvas"]})]}),s===1&&e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"480",height:"270",viewBox:"0 0 480 270",className:"max-w-full",children:[e.jsx("line",{x1:"50",y1:"220",x2:"440",y2:"220",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"40",x2:"50",y2:"220",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"140",y1:"40",x2:"140",y2:"220",stroke:"#f43f5e",strokeWidth:"1.5",strokeDasharray:"4 4"}),e.jsx("text",{x:"140",y:"32",fill:"#f43f5e",fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:"Mode 1 (45)"}),e.jsx("line",{x1:"330",y1:"40",x2:"330",y2:"220",stroke:"#10b981",strokeWidth:"1.5",strokeDasharray:"4 4"}),e.jsx("text",{x:"330",y:"32",fill:"#10b981",fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:"Mode 2 (80)"}),[{x:70,h:40},{x:105,h:90},{x:140,h:140},{x:175,h:80},{x:210,h:30},{x:260,h:35},{x:295,h:100},{x:330,h:150},{x:365,h:90},{x:400,h:40}].map((t,r)=>e.jsx("rect",{x:t.x,y:220-t.h,width:"30",height:t.h,fill:"#6366f1",opacity:"0.4",rx:"2",stroke:"#818cf8"},r)),e.jsx("path",{d:`M 60 215 Q 140 ${220-160/c}, 235 180 T 330 ${220-170/c} T 430 215`,fill:"none",stroke:"#818cf8",strokeWidth:"3"}),e.jsx("text",{x:"240",y:"245",fill:"#cbd5e1",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"Exam Marks (Bimodal: Peak 1 @ 45, Peak 2 @ 80)"})]})}),s===2&&e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"480",height:"270",viewBox:"0 0 480 270",className:"max-w-full",children:[e.jsx("line",{x1:"50",y1:"220",x2:"440",y2:"220",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"40",x2:"50",y2:"220",stroke:"#64748b",strokeWidth:"1.5"}),e.jsxs("g",{transform:"translate(140, 0)",children:[e.jsx("line",{x1:"0",y1:"60",x2:"0",y2:"190",stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("polygon",{points:l?"-30,80 30,80 30,120 10,135 30,150 30,180 -30,180 -30,150 -10,135 -30,120":"-30,80 30,80 30,180 -30,180",fill:"#38bdf8",opacity:"0.8",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("line",{x1:"-10",y1:"135",x2:"10",y2:"135",stroke:"#ffffff",strokeWidth:"2.5"}),e.jsx("polygon",{points:"0,40 6,46 0,52 -6,46",fill:"#ef4444",stroke:"#ffffff",strokeWidth:"1"}),e.jsx("polygon",{points:"0,205 6,211 0,217 -6,211",fill:"#ef4444",stroke:"#ffffff",strokeWidth:"1"}),e.jsx("text",{x:"0",y:"245",fill:"#e2e8f0",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"Thur"})]}),e.jsxs("g",{transform:"translate(320, 0)",children:[e.jsx("line",{x1:"0",y1:"50",x2:"0",y2:"180",stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("polygon",{points:l?"-30,70 30,70 30,110 10,125 30,140 30,170 -30,170 -30,140 -10,125 -30,110":"-30,70 30,70 30,170 -30,170",fill:"#f472b6",opacity:"0.8",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("line",{x1:"-10",y1:"125",x2:"10",y2:"125",stroke:"#ffffff",strokeWidth:"2.5"}),e.jsx("polygon",{points:"0,30 6,36 0,42 -6,36",fill:"#ef4444",stroke:"#ffffff",strokeWidth:"1"}),e.jsx("text",{x:"0",y:"245",fill:"#e2e8f0",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"Sun"})]})]})}),s===3&&e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsx("svg",{width:"480",height:"270",viewBox:"0 0 480 270",className:"max-w-full",children:["Hours","Attend","Assign","Score"].map((t,r)=>e.jsxs("g",{children:[e.jsx("text",{x:120+r*65+32,y:"30",fill:"#e2e8f0",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:t}),e.jsx("text",{x:"105",y:"55 + i * 45 + 26",fill:"#cbd5e1",fontSize:"10",fontWeight:"bold",textAnchor:"end",children:t}),[.82,.76,.91,1].slice(0,r+1).map((a,n)=>x&&n>r?null:e.jsxs("g",{children:[e.jsx("rect",{x:120+n*65,y:55+r*45,width:"60",height:"40",fill:"#1e293b",stroke:"#334155",rx:"2"}),e.jsx("text",{x:120+n*65+30,y:55+r*45+24,fill:"#38bdf8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:n===r?"1.00":(.7+(r+n)*.04).toFixed(2)})]},n))]},t))})}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400",children:[e.jsxs("span",{className:"text-indigo-400 font-mono",children:["Challenge ",s,": Complete test requirements met."]}),e.jsx("span",{className:"font-mono text-emerald-400",children:"All 3 Labs Operational"})]})]})]}),i==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:g.map((t,r)=>e.jsx("button",{onClick:()=>W(r),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${u===r?"bg-indigo-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>k(g[u].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[d?e.jsx(P,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(A,{className:"w-3.5 h-3.5"}),d?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-indigo-300 overflow-x-auto leading-relaxed max-h-[480px]",children:g[u].code})})]}),i==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-semibold text-sm",children:[e.jsx(C,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 14 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>k(T),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[d?e.jsx(P,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(A,{className:"w-3.5 h-3.5"}),d?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:T})]}),i==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-semibold text-sm",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 14 Knowledge Assessment (4 Questions)"})]}),m&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold",children:["Score: ",F()," / ",b.length]})]}),e.jsx("div",{className:"space-y-6",children:b.map((t,r)=>{const a=f[t.id],n=a===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[r+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((v,p)=>{const N=a===p;let h="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return m?p===t.correctAnswer?h="bg-emerald-950/70 border-emerald-500 text-emerald-300":N&&(h="bg-rose-950/70 border-rose-500 text-rose-300"):N&&(h="bg-indigo-600/30 border-indigo-500 text-indigo-200"),e.jsx("button",{onClick:()=>D(t.id,p),className:`p-3 rounded-lg border text-left text-xs transition-all ${h}`,children:v},p)})}),m&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${n?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:n?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{j({}),w(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>w(!0),disabled:Object.keys(f).length<b.length,className:"px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{q as default};
