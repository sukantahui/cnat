import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{co as R,S as O,k as G,B as C,aa as T,aM as $,P as V,f as M,g as D}from"./vendor-icons-ri6cs58t.js";const K=`"""\r
01_intro_seaborn_basics.py\r
Title: Introduction to Seaborn for Statistical Data Visualization\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
import pandas as pd\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 01: Core Philosophy & Architecture")\r
    print("   Instructor: Sukanta Hui | Location: Barrackpore")\r
    print("=" * 65)\r
\r
    # Seaborn is built on top of Matplotlib and tightly integrated with Pandas DataFrames.\r
    # It automatically handles statistical aggregations (mean, confidence intervals) and legends.\r
\r
    # 1. Create a simulated Barrackpore student dataset\r
    data = {\r
        "Student": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
        "Study_Hours": [12, 15, 8, 14, 10, 16, 11],\r
        "ML_Score": [88, 95, 72, 91, 79, 98, 84],\r
        "Track": ["Deep Learning", "Data Science", "Web ML", "Data Science", "Web ML", "Deep Learning", "Data Science"]\r
    }\r
    df = pd.DataFrame(data)\r
    print("\\n📊 Student Performance Dataset:")\r
    print(df.to_string(index=False))\r
\r
    # 2. Set high-level Seaborn aesthetic theme\r
    sns.set_theme(style="darkgrid", palette="muted")\r
\r
    # 3. Create a clean scatterplot with hue & size mapping\r
    plt.figure(figsize=(8, 5))\r
    scatter = sns.scatterplot(\r
        data=df,\r
        x="Study_Hours",\r
        y="ML_Score",\r
        hue="Track",\r
        style="Track",\r
        s=150,\r
        alpha=0.9\r
    )\r
\r
    plt.title("Barrackpore Batch: Study Hours vs ML Score (Grouped by Track)", fontsize=13, pad=12)\r
    plt.xlabel("Weekly Study Hours (hrs)", fontsize=11)\r
    plt.ylabel("Machine Learning Score (/100)", fontsize=11)\r
    \r
    print("\\n✨ Seaborn plotted scatter with automatic category legend mapping!")\r
    plt.tight_layout()\r
    # plt.show() # Uncomment in local GUI environment\r
\r
if __name__ == "__main__":\r
    main()\r
`,Q=`"""\r
02_dataset_loading_tips.py\r
Title: Exploring Built-in Seaborn Datasets\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import pandas as pd\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 02: Built-in Datasets & DataFrame Feeding")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Swadeep, Tuhina")\r
    print("=" * 65)\r
\r
    # Seaborn comes with popular toy datasets via sns.load_dataset()\r
    dataset_names = sns.get_dataset_names()\r
    print(f"\\n📦 Seaborn provides {len(dataset_names)} built-in datasets for quick prototyping.")\r
    print(f"Sample datasets: {dataset_names[:10]} ...")\r
\r
    # Let's inspect the famous 'tips' dataset\r
    print("\\nLoading 'tips' dataset:")\r
    tips = sns.load_dataset("tips")\r
    print(tips.head(6))\r
    print(f"\\nShape of tips dataset: {tips.shape}")\r
    print("\\nSummary Statistics:")\r
    print(tips.describe())\r
\r
    # Notice how seamlessly Seaborn consumes pandas Column Names directly as strings!\r
    print("\\n💡 Key Insight: Unlike Matplotlib which requires x=df['total_bill'],")\r
    print("   Seaborn takes data=df, x='total_bill', y='tip', hue='smoker'.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,U=`"""\r
03_seaborn_figure_styles.py\r
Title: Comparison of Seaborn Themes and Aesthetic Defaults\r
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
    print("🎓 Seaborn Essentials Lab 03: Exploring Pre-packaged Styles & Contexts")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # 5 built-in themes: darkgrid (default), whitegrid, dark, white, ticks\r
    styles = ["darkgrid", "whitegrid", "dark", "white", "ticks"]\r
    \r
    # Generate synthetic regression wave data\r
    np.random.seed(42)\r
    x = np.linspace(0, 10, 50)\r
    y = np.sin(x) + np.random.normal(0, 0.2, 50)\r
\r
    print("Iterating through standard Seaborn themes:")\r
    for style in styles:\r
        sns.set_theme(style=style)\r
        fig, ax = plt.subplots(figsize=(6, 3))\r
        sns.lineplot(x=x, y=y, ax=ax, color="#4f46e5", lw=2)\r
        ax.set_title(f"Theme: sns.set_theme(style='{style}')", fontsize=11)\r
        plt.tight_layout()\r
        print(f" -> Rendered preview with style='{style}' successfully.")\r
        plt.close(fig)\r
\r
    print("\\n💡 Sukanta Hui's Advice: 'darkgrid' and 'whitegrid' are best for ML feature charts!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,F=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 0 - INTRODUCTION TO SEABORN\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS SEABORN?\r
--------------------------------------------------------------------------------\r
- Seaborn is a Python data visualization library based on Matplotlib.\r
- It provides a high-level, declarative interface for drawing attractive and \r
  informative statistical graphics.\r
- While Matplotlib gives low-level imperative control over every pixel and tick,\r
  Seaborn is designed specifically for exploring and understanding complex \r
  statistical datasets.\r
\r
2. CORE ADVANTAGES OVER RAW MATPLOTLIB:\r
--------------------------------------------------------------------------------\r
a) DataFrame-Centric Syntax:\r
   - Pass DataFrames directly (data=df) and specify column names as strings \r
     (x="age", y="salary", hue="gender").\r
b) Built-in Statistical Aggregation:\r
   - Automatically computes means, medians, confidence intervals (95% bootstrap CI),\r
     and kernel density estimations (KDE).\r
c) Multi-dimensional Visual Encoding:\r
   - Enables instant grouping using color ('hue'), marker symbols ('style'), \r
     and point sizes ('size') without complex loops.\r
d) Publication-Quality Defaults:\r
   - Includes modern palettes, subtle grids, and aesthetic typography out-of-the-box.\r
\r
3. ARCHITECTURAL HIERARCHY:\r
--------------------------------------------------------------------------------\r
- Top Level: Figure-level functions (sns.relplot, sns.catplot, sns.displot, sns.pairplot)\r
  -> Manage their own Multi-Facet Figure (FacetGrid / PairGrid).\r
- Lower Level: Axes-level functions (sns.scatterplot, sns.boxplot, sns.histplot, sns.heatmap)\r
  -> Draw directly onto a specific Matplotlib \`ax\` (compatible with plt.subplots).\r
\r
4. BARRACKPORE BATCH MEMORY TIP:\r
--------------------------------------------------------------------------------\r
"Matplotlib builds the engine and chassis; Seaborn adds the luxury interior, \r
GPS navigation, and automatic transmission for statistical data scientists!"\r
`,b=[{id:1,question:"Which foundational library is Seaborn directly built on top of?",options:["PyTorch","Matplotlib","TensorFlow","Scipy Engine only"],correctAnswer:1,explanation:"Seaborn is built directly on top of Matplotlib and integrates closely with Pandas data structures."},{id:2,question:"What is a primary advantage of Seaborn when working with Pandas DataFrames?",options:["It requires converting DataFrames to C++ structs first","It allows passing the DataFrame via data=df and column names as strings","It only accepts 1D Python tuples","It replaces Pandas completely as a database engine"],correctAnswer:1,explanation:"Seaborn is DataFrame-aware, allowing you to pass `data=df` and specify column names as strings for x, y, hue, etc."},{id:3,question:"In Seaborn, what parameter is used to split and color data points by a categorical group column?",options:["color_group","hue","split_by","category_color"],correctAnswer:1,explanation:"The `hue` parameter in Seaborn automatically groups and colors data points based on a categorical or continuous column, complete with auto-generated legends."},{id:4,question:"What is the difference between Figure-level functions (like relplot) and Axes-level functions (like scatterplot)?",options:["Figure-level functions can manage multiple subplots/facets automatically, while Axes-level functions draw onto a single Matplotlib Axes","Axes-level functions only work with 3D graphics","Figure-level functions cannot show legends","There is no difference between them"],correctAnswer:0,explanation:"Figure-level functions (relplot, catplot, displot) wrap FacetGrid and manage the entire figure, while Axes-level functions (scatterplot, barplot) draw onto a provided `ax`."}],q=[{name:"Debangshu",hours:12,score:88,track:"Deep Learning",gender:"Male"},{name:"Susmita",hours:15,score:95,track:"Data Science",gender:"Female"},{name:"Swadeep",hours:8,score:72,track:"Web ML",gender:"Male"},{name:"Tuhina",hours:14,score:91,track:"Data Science",gender:"Female"},{name:"Sachin",hours:10,score:79,track:"Web ML",gender:"Male"},{name:"Mahima",hours:16,score:98,track:"Deep Learning",gender:"Female"},{name:"Abhronila",hours:11,score:84,track:"Data Science",gender:"Female"}],L={"Deep Learning":"#ec4899","Data Science":"#3b82f6","Web ML":"#10b981"},z={Male:"#06b6d4",Female:"#f43f5e"};function Z(){const[o,I]=r.useState("interactive"),[g,E]=r.useState(0),[x,v]=r.useState(!1),[m,P]=r.useState("darkgrid"),[i,S]=r.useState("track"),[l,B]=r.useState(10),[d,w]=r.useState(null),[f,N]=r.useState({}),[p,k]=r.useState(!1),y=[{name:"01_intro_seaborn_basics.py",code:K},{name:"02_dataset_loading_tips.py",code:Q},{name:"03_seaborn_figure_styles.py",code:U}],_=t=>{navigator.clipboard.writeText(t),v(!0),setTimeout(()=>v(!1),2e3)},H=(t,a)=>{p||N(n=>({...n,[t]:a}))},W=()=>{let t=0;return b.forEach(a=>{f[a.id]===a.correctAnswer&&t++}),t},s=(()=>{switch(m){case"darkgrid":return{bg:"#0f172a",grid:"#334155",text:"#e2e8f0"};case"whitegrid":return{bg:"#ffffff",grid:"#e2e8f0",text:"#1e293b"};case"dark":return{bg:"#090d16",grid:"transparent",text:"#e2e8f0"};case"white":case"ticks":return{bg:"#f8fafc",grid:"transparent",text:"#1e293b"};default:return{bg:"#0f172a",grid:"#334155",text:"#e2e8f0"}}})();return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-indigo-950 via-slate-900 to-cyan-950 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(R,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 0"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Introduction to Seaborn"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Master statistical data visualization in Python. Explore high-level DataFrame integration, declarative aesthetic styling, and multidimensional visual encodings."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono self-start md:self-auto",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Visual Studio",icon:O},{id:"code",label:"Python Code Lab",icon:G},{id:"notes",label:"Revision Notes",icon:C},{id:"quiz",label:"Knowledge Check",icon:T}].map(t=>{const a=t.icon,n=o===t.id;return e.jsxs("button",{onClick:()=>I(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${n?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(a,{className:"w-4 h-4"}),t.label]},t.id)})})]}),o==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx($,{className:"w-4 h-4"}),e.jsx("span",{children:"Seaborn Parameters & Theme"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"text-xs font-medium text-slate-300 flex items-center justify-between",children:[e.jsx("span",{children:"sns.set_theme(style)"}),e.jsx("span",{className:"font-mono text-indigo-400",children:m})]}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["darkgrid","whitegrid","dark","white"].map(t=>e.jsx("button",{onClick:()=>P(t),className:`px-3 py-2 rounded-lg text-xs font-mono transition-all ${m===t?"bg-indigo-600 text-white border border-indigo-400":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:t},t))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"text-xs font-medium text-slate-300 flex items-center justify-between",children:[e.jsx("span",{children:"Hue Category (hue=...)"}),e.jsx("span",{className:"font-mono text-cyan-400",children:i})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>S("track"),className:`px-3 py-2 rounded-lg text-xs font-mono transition-all ${i==="track"?"bg-cyan-600 text-white border border-cyan-400":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:"Track (3 classes)"}),e.jsx("button",{onClick:()=>S("gender"),className:`px-3 py-2 rounded-lg text-xs font-mono transition-all ${i==="gender"?"bg-cyan-600 text-white border border-cyan-400":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:"Gender (2 classes)"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"text-xs font-medium text-slate-300 flex items-center justify-between",children:[e.jsx("span",{children:"Marker Size (s=...)"}),e.jsxs("span",{className:"font-mono text-amber-400",children:[l,"px"]})]}),e.jsx("input",{type:"range",min:"6",max:"16",step:"1",value:l,onChange:t=>B(Number(t.target.value)),className:"w-full accent-indigo-500 cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-indigo-400 font-semibold mb-1",children:"# Live Seaborn Code:"}),e.jsxs("div",{className:"text-emerald-400",children:['sns.set_theme(style="',m,'")']}),e.jsx("div",{className:"text-indigo-300",children:"sns.scatterplot("}),e.jsx("div",{className:"pl-3 text-slate-400",children:"data=df,"}),e.jsx("div",{className:"pl-3 text-slate-400",children:'x="Study_Hours",'}),e.jsx("div",{className:"pl-3 text-slate-400",children:'y="ML_Score",'}),e.jsxs("div",{className:"pl-3 text-cyan-300",children:['hue="',i,'",']}),e.jsxs("div",{className:"pl-3 text-amber-300",children:["s=",l*15]}),e.jsx("div",{className:"text-indigo-300",children:")"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(V,{className:"w-4 h-4 text-indigo-400"}),"Live SVG Rendering: sns.scatterplot()"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Dataset: Barrackpore Batch 2026"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 flex justify-center items-center overflow-x-auto",style:{backgroundColor:s.bg},children:e.jsxs("svg",{width:"520",height:"320",viewBox:"0 0 520 320",className:"max-w-full",children:[s.grid!=="transparent"&&e.jsxs(e.Fragment,{children:[[60,140,220,300,380,460].map(t=>e.jsx("line",{x1:t,y1:"30",x2:t,y2:"260",stroke:s.grid,strokeWidth:"1",strokeDasharray:"3 3"},`vg-${t}`)),[60,110,160,210,260].map(t=>e.jsx("line",{x1:"50",y1:t,x2:"470",y2:t,stroke:s.grid,strokeWidth:"1",strokeDasharray:"3 3"},`hg-${t}`))]}),e.jsx("line",{x1:"50",y1:"260",x2:"470",y2:"260",stroke:s.text,strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"30",x2:"50",y2:"260",stroke:s.text,strokeWidth:"1.5"}),e.jsx("text",{x:"40",y:"264",fill:s.text,fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"60"}),e.jsx("text",{x:"40",y:"214",fill:s.text,fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"70"}),e.jsx("text",{x:"40",y:"164",fill:s.text,fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"80"}),e.jsx("text",{x:"40",y:"114",fill:s.text,fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"90"}),e.jsx("text",{x:"40",y:"64",fill:s.text,fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"100"}),e.jsx("text",{x:"60",y:"278",fill:s.text,fontSize:"10",textAnchor:"middle",fontFamily:"monospace",children:"6h"}),e.jsx("text",{x:"140",y:"278",fill:s.text,fontSize:"10",textAnchor:"middle",fontFamily:"monospace",children:"8h"}),e.jsx("text",{x:"220",y:"278",fill:s.text,fontSize:"10",textAnchor:"middle",fontFamily:"monospace",children:"10h"}),e.jsx("text",{x:"300",y:"278",fill:s.text,fontSize:"10",textAnchor:"middle",fontFamily:"monospace",children:"12h"}),e.jsx("text",{x:"380",y:"278",fill:s.text,fontSize:"10",textAnchor:"middle",fontFamily:"monospace",children:"14h"}),e.jsx("text",{x:"460",y:"278",fill:s.text,fontSize:"10",textAnchor:"middle",fontFamily:"monospace",children:"16h"}),e.jsx("text",{x:"260",y:"305",fill:s.text,fontSize:"11",fontWeight:"600",textAnchor:"middle",children:"Study Hours / Week"}),e.jsx("text",{x:"-145",y:"20",fill:s.text,fontSize:"11",fontWeight:"600",textAnchor:"middle",transform:"rotate(-90)",children:"ML Score (/100)"}),q.map((t,a)=>{const n=60+(t.hours-6)/11*410,c=260-(t.score-60)/40*200,j=i==="track"?L[t.track]:z[t.gender];return e.jsxs("g",{className:"cursor-pointer transition-transform duration-150",onMouseEnter:()=>w(t),onMouseLeave:()=>w(null),children:[e.jsx("circle",{cx:n,cy:c,r:l,fill:j,stroke:"#ffffff",strokeWidth:"1.5",opacity:"0.9"}),e.jsx("text",{x:n,y:c-l-4,fill:s.text,fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:t.name})]},a)})]})}),e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-slate-400 font-semibold",children:"Legend:"}),i==="track"?Object.entries(L).map(([t,a])=>e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:a}}),e.jsx("span",{className:"text-slate-300",children:t})]},t)):Object.entries(z).map(([t,a])=>e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:a}}),e.jsx("span",{className:"text-slate-300",children:t})]},t))]}),d?e.jsxs("div",{className:"text-cyan-400 font-mono",children:["🎓 ",d.name,": ",d.hours," hrs -> Score ",d.score," (",d[i],")"]}):e.jsx("div",{className:"text-slate-500 italic",children:"Hover any student dot to inspect properties"})]})]})]}),o==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:y.map((t,a)=>e.jsx("button",{onClick:()=>E(a),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${g===a?"bg-indigo-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>_(y[g].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[x?e.jsx(M,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(D,{className:"w-3.5 h-3.5"}),x?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed max-h-[480px]",children:y[g].code})})]}),o==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-semibold text-sm",children:[e.jsx(C,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 0 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>_(F),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[x?e.jsx(M,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(D,{className:"w-3.5 h-3.5"}),x?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:F})]}),o==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-semibold text-sm",children:[e.jsx(T,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 0 Knowledge Assessment (4 Questions)"})]}),p&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold",children:["Score: ",W()," / ",b.length]})]}),e.jsx("div",{className:"space-y-6",children:b.map((t,a)=>{const n=f[t.id],c=n===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[a+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((j,h)=>{const A=n===h;let u="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return p?h===t.correctAnswer?u="bg-emerald-950/70 border-emerald-500 text-emerald-300":A&&(u="bg-rose-950/70 border-rose-500 text-rose-300"):A&&(u="bg-indigo-600/30 border-indigo-500 text-indigo-200"),e.jsx("button",{onClick:()=>H(t.id,h),className:`p-3 rounded-lg border text-left text-xs transition-all ${u}`,children:j},h)})}),p&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${c?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:c?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{N({}),k(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>k(!0),disabled:Object.keys(f).length<b.length,className:"px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{Z as default};
