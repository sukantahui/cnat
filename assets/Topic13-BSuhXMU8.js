import{b as n,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{bp as T,S as G,k as V,B as C,aa as A,aM as U,f as E,g as L}from"./vendor-icons-DFC0rBCP.js";const X=`"""\r
01_small_dataset_pairplot.py\r
Title: Worked Example 3: End-to-End Pairplot Analysis on Small Student Dataset\r
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
    print("🎓 Seaborn Worked Example 3: Pairplot Pipeline for Student Cohort")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Swadeep")\r
    print("=" * 65)\r
\r
    # 1. Create a clean small multi-feature dataset\r
    data = {\r
        "Study_Hours": [14, 16, 8, 13, 10, 15, 11, 7, 18, 12],\r
        "Coding_Projects": [5, 6, 2, 4, 3, 5, 4, 2, 7, 4],\r
        "Quiz_Score": [88, 94, 68, 85, 75, 92, 80, 65, 98, 82],\r
        "Final_Exam": [92, 96, 72, 89, 78, 95, 85, 70, 99, 84],\r
        "Track": ["DL", "DS", "Web", "DS", "Web", "DL", "DS", "Web", "DL", "DS"]\r
    }\r
    df = pd.DataFrame(data)\r
    print("\\nStudent Cohort Multi-Feature Dataset:")\r
    print(df.to_string(index=False))\r
\r
    # 2. Render Seaborn Pairplot with hue and KDE diagonals\r
    sns.set_theme(style="ticks", palette="Set1")\r
    \r
    g = sns.pairplot(\r
        data=df,\r
        hue="Track",\r
        diag_kind="kde",\r
        markers=["o", "s", "D"],\r
        plot_kws={"s": 60, "alpha": 0.8}\r
    )\r
\r
    g.fig.subplots_adjust(top=0.93)\r
    g.fig.suptitle("Barrackpore Batch: Multidimensional Pairwise Relationships", fontsize=13)\r
    print("\\n✓ Successfully executed end-to-end Pairplot visualization pipeline.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,Y=`"""\r
02_corner_pairplot.py\r
Title: Corner Pairplot Optimization on Small Tabular Features\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
import pandas as pd\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Worked Example 3: Corner Pairplot Sub-Grid")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    data = {\r
        "Study_Hours": [14, 16, 8, 13, 10, 15, 11, 7, 18, 12],\r
        "Coding_Projects": [5, 6, 2, 4, 3, 5, 4, 2, 7, 4],\r
        "Final_Exam": [92, 96, 72, 89, 78, 95, 85, 70, 99, 84],\r
        "Track": ["DL", "DS", "Web", "DS", "Web", "DL", "DS", "Web", "DL", "DS"]\r
    }\r
    df = pd.DataFrame(data)\r
\r
    # corner=True trims the 3x3 matrix from 9 subplots to only 6 subplots!\r
    g = sns.pairplot(\r
        data=df,\r
        hue="Track",\r
        corner=True,\r
        diag_kind="hist",\r
        palette="bright"\r
    )\r
\r
    g.fig.subplots_adjust(top=0.92)\r
    g.fig.suptitle("Corner Pairplot: Lower Triangle + Diagonal Only", fontsize=12)\r
    print("✓ Successfully rendered corner pairplot.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,Z=`"""\r
03_pairplot_kde_diagonal.py\r
Title: Customizing Diagonal KDE Bands and Marker Aesthetics\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
import pandas as pd\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Worked Example 3: Fine-Tuning Diagonals & Scatter Markers")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Mahima")\r
    print("=" * 65)\r
\r
    data = {\r
        "Study_Hours": [14, 16, 8, 13, 10, 15, 11, 7, 18, 12],\r
        "Coding_Projects": [5, 6, 2, 4, 3, 5, 4, 2, 7, 4],\r
        "Final_Exam": [92, 96, 72, 89, 78, 95, 85, 70, 99, 84],\r
        "Track": ["DL", "DS", "Web", "DS", "Web", "DL", "DS", "Web", "DL", "DS"]\r
    }\r
    df = pd.DataFrame(data)\r
\r
    # Passing diag_kws and plot_kws dictionaries for fine-grained style control\r
    g = sns.pairplot(\r
        data=df,\r
        hue="Track",\r
        diag_kind="kde",\r
        diag_kws={"fill": True, "alpha": 0.4, "bw_adjust": 1.2},\r
        plot_kws={"s": 80, "edgecolor": "white", "linewidth": 1.5},\r
        palette="Dark2"\r
    )\r
\r
    print("✓ Successfully customized diagonal KDEs and scatter marker styling.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,P=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 13 - WORKED EXAMPLE 3 (PAIR PLOT SMALL DATASET)\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. PRACTICAL ML CASE STUDY OVERVIEW:\r
--------------------------------------------------------------------------------\r
Dataset: Small student performance tracking table with 3 features:\r
- Study_Hours (weekly hours)\r
- Coding_Projects (number of mini-projects completed)\r
- Final_Exam (score out of 100)\r
- Track (DL / DS / Web)\r
\r
2. FULL RECIPE TO RENDER PAIRPLOT:\r
--------------------------------------------------------------------------------\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
sns.set_theme(style="ticks", palette="Set1")\r
\r
g = sns.pairplot(\r
    data=df,\r
    hue="Track",\r
    diag_kind="kde",\r
    diag_kws={"fill": True, "alpha": 0.4},\r
    plot_kws={"s": 70, "alpha": 0.85, "edgecolor": "white"}\r
)\r
\r
# Adjust title position for Figure-level objects\r
g.fig.subplots_adjust(top=0.92)\r
g.fig.suptitle("Barrackpore Batch: Multivariable Feature Exploration", fontsize=12)\r
\r
3. WHAT TO LOOK FOR DURING EDA?\r
--------------------------------------------------------------------------------\r
a) Linear Trends: Do Coding_Projects and Final_Exam show strong upward slope?\r
b) Cluster Separability: Are 'DL', 'DS', and 'Web' students distinctly clustered?\r
c) Skewness in Diagonals: Are study hours normally distributed or skewed?\r
d) Outliers: Are there students with high hours but low scores?\r
`,b=[{id:1,question:"When adding a super title to `sns.pairplot()` with `g.fig.suptitle()`, why must you call `g.fig.subplots_adjust(top=0.92)`?",options:["To add padding at the top of the figure so the main title does not collide with the top row of subplot titles","Because Python will crash without subplots_adjust","To rotate the pairplot diagonally","To change the background color"],correctAnswer:0,explanation:"`sns.pairplot()` creates a Figure-level FacetGrid; setting `subplots_adjust(top=0.92)` creates necessary clearance for `g.fig.suptitle()`."},{id:2,question:"Which dictionary argument in `sns.pairplot()` allows you to pass custom settings (such as point size `s` or opacity `alpha`) to the scatter subplots?",options:["scatter_settings={}","plot_kws={'s': 70, 'alpha': 0.8}","style_dict={}","points_config={}"],correctAnswer:1,explanation:"`plot_kws` passes keyword arguments directly to the off-diagonal bivariate plotting functions."},{id:3,question:"What does `diag_kws={'fill': True}` achieve when `diag_kind='kde'` is specified?",options:["It fills the diagonal KDE density area with a translucent color shade","It converts the KDE into a solid black bar","It removes the diagonal completely","It fills the entire canvas with black"],correctAnswer:0,explanation:"`diag_kws={'fill': True}` shades the area under the diagonal Kernel Density Estimation curves."},{id:4,question:"In exploratory data analysis of a classification dataset, what does distinct separation between color clusters in off-diagonal pairplot subplots signify?",options:["The dataset is corrupted","The features possess strong discriminatory power to separate classes using machine learning classifiers","The learning rate must be set to 0","The dataset has infinite variance"],correctAnswer:1,explanation:"Distinct class clusters in pairplots indicate high feature separability, meaning classifiers (like Logistic Regression, SVM, Decision Trees) will perform very well."}],g=["Hours","Projects","FinalExam"],q=[{name:"Debangshu",hours:14,projects:5,exam:92,track:"DL",col:"#ec4899"},{name:"Susmita",hours:16,projects:6,exam:96,track:"DS",col:"#3b82f6"},{name:"Swadeep",hours:8,projects:2,exam:72,track:"Web",col:"#10b981"},{name:"Tuhina",hours:13,projects:4,exam:89,track:"DS",col:"#3b82f6"},{name:"Sachin",hours:10,projects:3,exam:78,track:"Web",col:"#10b981"},{name:"Mahima",hours:15,projects:5,exam:95,track:"DL",col:"#ec4899"},{name:"Abhronila",hours:11,projects:4,exam:85,track:"DS",col:"#3b82f6"}];function re(){const[d,W]=n.useState("interactive"),[f,$]=n.useState(0),[m,N]=n.useState(!1),[c,F]=n.useState(!1),[p,M]=n.useState("kde"),[x,z]=n.useState(!0),[u,O]=n.useState(4),[j,B]=n.useState(null),[w,S]=n.useState({}),[h,v]=n.useState(!1),y=[{name:"01_small_dataset_pairplot.py",code:X},{name:"02_corner_pairplot.py",code:Y},{name:"03_pairplot_kde_diagonal.py",code:Z}],_=t=>{navigator.clipboard.writeText(t),N(!0),setTimeout(()=>N(!1),2e3)},R=(t,s)=>{h||S(l=>({...l,[t]:s}))},H=()=>{let t=0;return b.forEach(s=>{w[s.id]===s.correctAnswer&&t++}),t};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(T,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 13 (Worked Example 3)"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Worked Example 3: Pair Plot for a Small Dataset"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"End-to-end multi-feature student cohort case study. Build pair plots with track-based class separation, diagonal density curves, and corner-mode optimization."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Pairplot Case Studio",icon:G},{id:"code",label:"Python Code Lab",icon:V},{id:"notes",label:"Revision Notes",icon:C},{id:"quiz",label:"Knowledge Check",icon:A}].map(t=>{const s=t.icon,l=d===t.id;return e.jsxs("button",{onClick:()=>W(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${l?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})]}),d==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(U,{className:"w-4 h-4"}),e.jsx("span",{children:"Pairplot Case Parameters"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-300 font-medium",children:"corner=True (Lower Triangle):"}),e.jsx("button",{onClick:()=>F(!c),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${c?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400"}`,children:c?"ON":"OFF"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Diagonal Type (diag_kind):"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["kde","hist"].map(t=>e.jsx("button",{onClick:()=>M(t),className:`px-3 py-2 rounded-lg text-xs font-mono uppercase transition-all ${p===t?"bg-emerald-600 text-white border border-emerald-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:t},t))})]}),p==="kde"&&e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsxs("div",{className:"text-xs text-slate-300 font-medium",children:["diag_kws=","{","fill: True","}",":"]}),e.jsx("button",{onClick:()=>z(!x),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${x?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400"}`,children:x?"ON":"OFF"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-300",children:"Scatter Marker Size (plot_kws):"}),e.jsxs("span",{className:"font-mono text-emerald-400",children:[u,"px"]})]}),e.jsx("input",{type:"range",min:"2",max:"6",value:u,onChange:t=>O(Number(t.target.value)),className:"w-full accent-emerald-500 cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-emerald-400 font-semibold mb-1",children:"# Python Code:"}),e.jsx("div",{className:"text-indigo-300",children:"g = sns.pairplot("}),e.jsx("div",{className:"pl-3 text-slate-400",children:"data=df,"}),e.jsx("div",{className:"pl-3 text-cyan-300",children:'hue="Track",'}),e.jsxs("div",{className:"pl-3 text-emerald-300",children:['diag_kind="',p,'",']}),p==="kde"&&e.jsxs("div",{className:"pl-3 text-teal-300",children:["diag_kws=","{",'"fill": ',x?"True":"False","}",","]}),e.jsxs("div",{className:"pl-3 text-amber-300",children:["corner=",c?"True":"False",","]}),e.jsxs("div",{className:"pl-3 text-slate-400",children:["plot_kws=","{",'"s": ',u*15,"}"]}),e.jsx("div",{className:"text-indigo-300",children:")"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(T,{className:"w-4 h-4 text-emerald-400"}),"Live 3×3 Pairplot Grid (Barrackpore Cohort)"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Tracks: DL, DS, Web"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"480",height:"290",viewBox:"0 0 480 290",className:"max-w-full",children:[g.map((t,s)=>g.map((l,o)=>{if(c&&o>s)return null;const i=s===o,a=65+o*125,r=25+s*80;return e.jsxs("g",{className:"cursor-pointer",onClick:()=>B({row:t,col:l,isDiag:i}),children:[e.jsx("rect",{x:a,y:r,width:110,height:68,fill:"#090d16",stroke:"#334155",strokeWidth:"1",rx:"4"}),i?p==="kde"?e.jsxs("g",{children:[x&&e.jsx("path",{d:`M ${a+10} ${r+55} Q ${a+40} ${r+18}, ${a+55} ${r+18} T ${a+100} ${r+55} Z`,fill:"#10b981",opacity:"0.25"}),e.jsx("path",{d:`M ${a+10} ${r+55} Q ${a+40} ${r+18}, ${a+55} ${r+18} T ${a+100} ${r+55}`,fill:"none",stroke:"#10b981",strokeWidth:"2.5"})]}):e.jsxs("g",{fill:"#10b981",opacity:"0.6",children:[e.jsx("rect",{x:a+15,y:r+40,width:"16",height:"20",rx:"1"}),e.jsx("rect",{x:a+35,y:r+20,width:"16",height:"40",rx:"1"}),e.jsx("rect",{x:a+55,y:r+10,width:"16",height:"50",rx:"1"}),e.jsx("rect",{x:a+75,y:r+30,width:"16",height:"30",rx:"1"})]}):e.jsx("g",{children:q.map((I,k)=>{const K=a+15+k*12,Q=r+55-k*6;return e.jsx("circle",{cx:K,cy:Q,r:u,fill:I.col,stroke:"#ffffff",strokeWidth:"0.8",opacity:"0.85"},k)})}),e.jsx("text",{x:a+6,y:r+14,fill:"#64748b",fontSize:"8",fontFamily:"monospace",children:i?`${t} (KDE)`:`${l} vs ${t}`})]},`${s}-${o}`)})),g.map((t,s)=>e.jsx("text",{x:"55",y:25+s*80+38,fill:"#cbd5e1",fontSize:"10",fontWeight:"bold",textAnchor:"end",children:t},t)),g.map((t,s)=>e.jsx("text",{x:65+s*125+55,y:"280",fill:"#cbd5e1",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:t},t))]})}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-slate-400 font-semibold",children:"Track Legend:"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#ec4899]"}),e.jsx("span",{className:"text-slate-300",children:"Deep Learning"})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#3b82f6]"}),e.jsx("span",{className:"text-slate-300",children:"Data Science"})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#10b981]"}),e.jsx("span",{className:"text-slate-300",children:"Web ML"})]})]}),j?e.jsxs("span",{className:"text-emerald-300 font-mono font-bold",children:["Active Subplot: ",j.col," × ",j.row]}):e.jsx("span",{className:"text-slate-500 italic",children:"Click any cell to zoom into relationships"})]})]})]}),d==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:y.map((t,s)=>e.jsx("button",{onClick:()=>$(s),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${f===s?"bg-emerald-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>_(y[f].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[m?e.jsx(E,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(L,{className:"w-3.5 h-3.5"}),m?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed max-h-[480px]",children:y[f].code})})]}),d==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(C,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 13 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>_(P),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[m?e.jsx(E,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(L,{className:"w-3.5 h-3.5"}),m?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:P})]}),d==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(A,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 13 Knowledge Assessment (4 Questions)"})]}),h&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold",children:["Score: ",H()," / ",b.length]})]}),e.jsx("div",{className:"space-y-6",children:b.map((t,s)=>{const l=w[t.id],o=l===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[s+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((D,i)=>{const a=l===i;let r="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return h?i===t.correctAnswer?r="bg-emerald-950/70 border-emerald-500 text-emerald-300":a&&(r="bg-rose-950/70 border-rose-500 text-rose-300"):a&&(r="bg-emerald-600/30 border-emerald-500 text-emerald-200"),e.jsx("button",{onClick:()=>R(t.id,i),className:`p-3 rounded-lg border text-left text-xs transition-all ${r}`,children:D},i)})}),h&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${o?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:o?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{S({}),v(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>v(!0),disabled:Object.keys(w).length<b.length,className:"px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-emerald-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{re as default};
