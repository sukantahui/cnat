import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{bp as F,S as G,k as I,B as _,aa as T,aM as W,P as O,f as M,g as k}from"./vendor-icons-ri6cs58t.js";const Q=`"""\r
01_heatmap_basics.py\r
Title: 2D Matrix Heatmaps with sns.heatmap()\r
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
    print("🎓 Seaborn Essentials Lab 01: 2D Matrix Heatmap Fundamentals")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Abhronila")\r
    print("=" * 65)\r
\r
    # 1. Create a simulated student test scores matrix\r
    # Rows: Students | Columns: Machine Learning Subjects\r
    students = ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima"]\r
    subjects = ["Linear Reg", "Logistic Reg", "Decision Trees", "K-Means", "Neural Nets"]\r
    \r
    np.random.seed(42)\r
    scores = np.random.randint(65, 99, size=(len(students), len(subjects)))\r
    df_scores = pd.DataFrame(scores, index=students, columns=subjects)\r
\r
    print("\\n📊 Student Exam Score Matrix:")\r
    print(df_scores)\r
\r
    # 2. Draw heatmap\r
    plt.figure(figsize=(8, 5))\r
    sns.heatmap(\r
        df_scores,\r
        annot=True,\r
        fmt="d",\r
        cmap="YlGnBu",\r
        linewidths=1.0,\r
        cbar_kws={"label": "Marks (/100)"}\r
    )\r
\r
    plt.title("Barrackpore Batch: ML Subject Performance Matrix", fontsize=12, pad=10)\r
    plt.tight_layout()\r
    print("\\n✓ Successfully rendered matrix heatmap with numeric annotations.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,K=`"""\r
02_heatmap_annot_fmt_cmap.py\r
Title: Customizing Heatmaps: annot, fmt, cmap, center, and vmin/vmax\r
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
    print("🎓 Seaborn Essentials Lab 02: Color Maps, Center Anchors & Formats")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # Key parameters in sns.heatmap():\r
    # - annot=True : prints cell values\r
    # - fmt=".2f" / "d" : string formatting code\r
    # - cmap="viridis" / "coolwarm" / "rocket" / "mako"\r
    # - center=0.0 : anchors the midpoint of diverging colormap\r
    # - vmin / vmax : anchors min and max color bounds\r
\r
    flights = sns.load_dataset("flights")\r
    flights_pivot = flights.pivot(index="month", columns="year", values="passengers")\r
\r
    plt.figure(figsize=(9, 6))\r
    sns.heatmap(\r
        flights_pivot,\r
        annot=True,\r
        fmt="d",\r
        cmap="magma",\r
        linewidths=0.5,\r
        linecolor="#334155"\r
    )\r
    plt.title("Monthly Airline Passengers Matrix (1949 - 1960)", fontsize=12)\r
    plt.tight_layout()\r
    print("✓ Successfully created pivot table passenger heatmap.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,Y=`"""\r
03_clustermap_hierarchy.py\r
Title: Hierarchical Clustering with sns.clustermap()\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 03: sns.clustermap() with Dendrograms")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Swadeep")\r
    print("=" * 65)\r
\r
    # sns.clustermap() performs hierarchical agglomerative clustering on rows and columns!\r
    # It re-orders rows and columns such that similar samples are grouped together.\r
\r
    iris = sns.load_dataset("iris")\r
    species = iris.pop("species")\r
\r
    # Standardize features before clustering\r
    g = sns.clustermap(\r
        iris,\r
        cmap="mako",\r
        standard_scale=1, # Normalize columns to [0, 1]\r
        figsize=(8, 8)\r
    )\r
\r
    print("✓ Successfully executed hierarchical clustermap with dendrogram trees.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,D=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 6 - HEATMAP (SNS.HEATMAP)\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS A HEATMAP?\r
--------------------------------------------------------------------------------\r
A heatmap is a 2D grid representation of data where individual values are \r
contained in a matrix and represented as colors.\r
\r
2. REQUIREMENTS FOR SNS.HEATMAP():\r
--------------------------------------------------------------------------------\r
- Input data MUST be a 2D rectangular array, Pandas 2D DataFrame, or pivot table.\r
- All cell entries must be numeric.\r
\r
3. ESSENTIAL CONFIGURATION PARAMETERS:\r
--------------------------------------------------------------------------------\r
- annot (bool or 2D array):\r
  If True, writes the numeric data value in each cell.\r
- fmt (str):\r
  String formatting code for annotations:\r
  * "d" -> integer (e.g. 85)\r
  * ".2f" -> float with 2 decimals (e.g. 0.85)\r
  * ".1%" -> percentage\r
- cmap (str / colormap):\r
  * Sequential: "viridis", "plasma", "YlGnBu", "rocket", "mako"\r
  * Diverging: "coolwarm", "vlag", "icefire", "Spectral"\r
- center (float):\r
  Value at which the colormap is centered (essential for correlation matrices centered at 0.0).\r
- linewidths (float):\r
  Adds separating grid lines between heatmap tiles (e.g. linewidths=1).\r
- linecolor (color):\r
  Color of the grid separating borders.\r
- cbar (bool):\r
  Whether to draw the colorbar legend on the right side.\r
\r
4. SNS.CLUSTERMAP():\r
--------------------------------------------------------------------------------\r
Hierarchical clustering extension that computes linkage distances and re-orders\r
rows and columns alongside tree dendrograms.\r
`,g=[{id:1,question:"What format must input data have to be plotted with `sns.heatmap()`?",options:["A 1D Python list of strings","A 2D rectangular matrix, DataFrame, or pivot table of numeric values","A SQL database query string","A 3D image tensor"],correctAnswer:1,explanation:"`sns.heatmap()` requires 2D tabular numerical data such as a 2D NumPy array or DataFrame / pivot table."},{id:2,question:"Which parameter in `sns.heatmap()` prints the actual numeric values inside each matrix tile?",options:["show_text=True","annot=True","values=True","labels=True"],correctAnswer:1,explanation:"`annot=True` writes the cell data values on the tiles."},{id:3,question:"What formatting string `fmt` is used to format floating point values to two decimal places in a heatmap?",options:["fmt='.2f'","fmt='float2'","fmt='%2d'","fmt='2decimal'"],correctAnswer:0,explanation:"`fmt='.2f'` specifies standard 2-decimal-place floating-point formatting."},{id:4,question:"How does `sns.clustermap()` differ from `sns.heatmap()`?",options:["It only works with sound audio files","It performs hierarchical clustering to group similar rows and columns together with dendrograms","It cannot display colors","It deletes outlier cells"],correctAnswer:1,explanation:"`sns.clustermap()` applies hierarchical clustering and reorders rows/columns to display similarity structures visually."}],U=["Debangshu","Susmita","Swadeep","Tuhina","Sachin"],H=["LinReg","LogReg","DecTrees","KMeans","NeuralNets"],V=[[88,92,85,90,94],[95,98,92,96,99],[72,70,78,75,71],[91,89,94,88,92],[79,82,76,80,85]];function J(){const[m,E]=l.useState("interactive"),[j,$]=l.useState(0),[u,N]=l.useState(!1),[x,z]=l.useState(!0),[p,L]=l.useState("YlGnBu"),[i,P]=l.useState(1),[o,y]=l.useState(null),[v,S]=l.useState({}),[h,C]=l.useState(!1),w=[{name:"01_heatmap_basics.py",code:Q},{name:"02_heatmap_annot_fmt_cmap.py",code:K},{name:"03_clustermap_hierarchy.py",code:Y}],A=t=>{navigator.clipboard.writeText(t),N(!0),setTimeout(()=>N(!1),2e3)},B=(t,s)=>{h||S(r=>({...r,[t]:s}))},R=()=>{let t=0;return g.forEach(s=>{v[s.id]===s.correctAnswer&&t++}),t},b=t=>{const s=(t-70)/30;if(p==="YlGnBu"){const r=Math.round(255*(1-s*.9)),a=Math.round(240*(1-s*.4)+50*s),n=Math.round(150*(1-s)+240*s);return`rgb(${r}, ${a}, ${n})`}else if(p==="coolwarm")if(s<.5){const r=s*2;return`rgb(${Math.round(59+196*r)}, ${Math.round(130+125*r)}, ${Math.round(246+9*r)})`}else{const r=(s-.5)*2;return`rgb(${Math.round(255-15*(1-r))}, ${Math.round(255-180*r)}, ${Math.round(255-200*r)})`}else if(p==="magma"){const r=Math.round(20+235*s),a=Math.round(10+180*s*s),n=Math.round(60+120*(1-s));return`rgb(${r}, ${a}, ${n})`}else{const r=Math.round(68+185*s*(1-s)),a=Math.round(1+230*s),n=Math.round(84+100*(1-s));return`rgb(${r}, ${a}, ${n})`}};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 border border-teal-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(F,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 6"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Heatmaps with sns.heatmap()"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Visualize 2D matrix grids, pivot tables, and tabular intensities. Master numeric cell annotations, color scales, and boundary customization."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Heatmap Matrix Studio",icon:G},{id:"code",label:"Python Code Lab",icon:I},{id:"notes",label:"Revision Notes",icon:_},{id:"quiz",label:"Knowledge Check",icon:T}].map(t=>{const s=t.icon,r=m===t.id;return e.jsxs("button",{onClick:()=>E(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${r?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})]}),m==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(W,{className:"w-4 h-4"}),e.jsx("span",{children:"Heatmap Styling Parameters"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Colormap Palette (cmap=...):"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["YlGnBu","viridis","coolwarm","magma"].map(t=>e.jsx("button",{onClick:()=>L(t),className:`px-3 py-2 rounded-lg text-xs font-mono transition-all ${p===t?"bg-teal-600 text-white border border-teal-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:t},t))})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-300 font-medium",children:"Cell Annotations (annot=True):"}),e.jsx("button",{onClick:()=>z(!x),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${x?"bg-teal-600 text-white":"bg-slate-800 text-slate-400"}`,children:x?"ON":"OFF"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-300",children:"Grid Line Spacing (linewidths):"}),e.jsxs("span",{className:"font-mono text-teal-400",children:[i,"px"]})]}),e.jsx("input",{type:"range",min:"0",max:"4",step:"1",value:i,onChange:t=>P(Number(t.target.value)),className:"w-full accent-teal-500 cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-teal-400 font-semibold mb-1",children:"# Generated Code:"}),e.jsx("div",{className:"text-indigo-300",children:"sns.heatmap("}),e.jsx("div",{className:"pl-3 text-slate-400",children:"df_scores,"}),e.jsxs("div",{className:"pl-3 text-teal-300",children:["annot=",x?"True":"False",","]}),e.jsx("div",{className:"pl-3 text-slate-400",children:'fmt="d",'}),e.jsxs("div",{className:"pl-3 text-emerald-300",children:['cmap="',p,'",']}),e.jsxs("div",{className:"pl-3 text-amber-300",children:["linewidths=",i]}),e.jsx("div",{className:"text-indigo-300",children:")"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(O,{className:"w-4 h-4 text-teal-400"}),"Live SVG Heatmap Grid"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Scores Matrix [5x5]"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"490",height:"290",viewBox:"0 0 490 290",className:"max-w-full",children:[H.map((t,s)=>e.jsx("text",{x:110+s*65+32,y:"25",fill:"#e2e8f0",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:t},t)),U.map((t,s)=>e.jsxs("g",{children:[e.jsx("text",{x:"95",y:45+s*45+26,fill:"#cbd5e1",fontSize:"11",fontWeight:"600",textAnchor:"end",children:t}),V[s].map((r,a)=>{const n=110+a*65,d=45+s*45,f=b(r),c=o&&o.row===s&&o.col===a;return e.jsxs("g",{className:"cursor-pointer",onMouseEnter:()=>y({student:t,subject:H[a],val:r,row:s,col:a}),onMouseLeave:()=>y(null),children:[e.jsx("rect",{x:n+i/2,y:d+i/2,width:65-i,height:45-i,fill:f,stroke:c?"#ffffff":"#0f172a",strokeWidth:c?2:.5,rx:"2"}),x&&e.jsx("text",{x:n+32,y:d+27,fill:r>88?"#ffffff":"#0f172a",fontSize:"12",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:r})]},`${s}-${a}`)})]},t)),e.jsxs("g",{transform:"translate(445, 45)",children:[e.jsx("rect",{x:"0",y:"0",width:"16",height:"225",fill:"url(#cbarGradient)",rx:"2",stroke:"#475569",strokeWidth:"1"}),e.jsx("text",{x:"22",y:"10",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"100"}),e.jsx("text",{x:"22",y:"115",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"85"}),e.jsx("text",{x:"22",y:"225",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"70"})]}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"cbarGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:b(100)}),e.jsx("stop",{offset:"50%",stopColor:b(85)}),e.jsx("stop",{offset:"100%",stopColor:b(70)})]})})]})}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400",children:[o?e.jsxs("span",{className:"text-teal-300 font-mono font-bold",children:["🎯 ",o.student," • ",o.subject," : Score = ",o.val,"/100"]}):e.jsx("span",{className:"text-slate-500 italic",children:"Hover any tile to inspect student performance coordinates"}),e.jsx("span",{className:"font-mono text-slate-400",children:"Matrix size: 5 × 5"})]})]})]}),m==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:w.map((t,s)=>e.jsx("button",{onClick:()=>$(s),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${j===s?"bg-teal-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>A(w[j].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[u?e.jsx(M,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(k,{className:"w-3.5 h-3.5"}),u?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-teal-300 overflow-x-auto leading-relaxed max-h-[480px]",children:w[j].code})})]}),m==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-semibold text-sm",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 6 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>A(D),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[u?e.jsx(M,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(k,{className:"w-3.5 h-3.5"}),u?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:D})]}),m==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-semibold text-sm",children:[e.jsx(T,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 6 Knowledge Assessment (4 Questions)"})]}),h&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold",children:["Score: ",R()," / ",g.length]})]}),e.jsx("div",{className:"space-y-6",children:g.map((t,s)=>{const r=v[t.id],a=r===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[s+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((n,d)=>{const f=r===d;let c="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return h?d===t.correctAnswer?c="bg-emerald-950/70 border-emerald-500 text-emerald-300":f&&(c="bg-rose-950/70 border-rose-500 text-rose-300"):f&&(c="bg-teal-600/30 border-teal-500 text-teal-200"),e.jsx("button",{onClick:()=>B(t.id,d),className:`p-3 rounded-lg border text-left text-xs transition-all ${c}`,children:n},d)})}),h&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${a?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:a?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{S({}),C(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>C(!0),disabled:Object.keys(v).length<g.length,className:"px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-teal-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{J as default};
