import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as N,S as M,k as B,B as S,aa as w,aM as D,f as C,g as _}from"./vendor-icons-ri6cs58t.js";const O=`"""\r
01_hue_grouping_scatter.py\r
Title: Color Dimension Encoding with Categorical and Numeric 'hue'\r
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
    print("🎓 Seaborn Essentials Lab 01: The Power of 'hue' Grouping")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Abhronila")\r
    print("=" * 65)\r
\r
    # In Seaborn, 'hue' behaves intelligently depending on the data type:\r
    # 1. Categorical / String column: Assigns discrete categorical palette (e.g. Set1, muted)\r
    # 2. Continuous / Numeric column: Assigns a sequential color gradient (e.g. viridis, rocket)\r
\r
    tips = sns.load_dataset("tips")\r
\r
    fig, axes = plt.subplots(1, 2, figsize=(12, 5))\r
\r
    # 1. Categorical Hue (discrete colors with named legend items)\r
    sns.scatterplot(\r
        data=tips,\r
        x="total_bill",\r
        y="tip",\r
        hue="day",\r
        palette="bright",\r
        s=80,\r
        ax=axes[0]\r
    )\r
    axes[0].set_title("Categorical Hue: hue='day' (Discrete Palettes)", fontsize=11)\r
\r
    # 2. Numeric Continuous Hue (sequential gradient colormap)\r
    sns.scatterplot(\r
        data=tips,\r
        x="total_bill",\r
        y="tip",\r
        hue="size",\r
        palette="viridis",\r
        s=80,\r
        ax=axes[1]\r
    )\r
    axes[1].set_title("Continuous Numeric Hue: hue='size' (Colormap Gradient)", fontsize=11)\r
\r
    plt.tight_layout()\r
    print("✓ Successfully generated categorical vs continuous hue demonstrations.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,L=`"""\r
02_hue_in_categorical_plots.py\r
Title: Secondary Sub-Grouping in Barplots, Boxplots, and Countplots\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 02: Categorical Nested Grouping via hue")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # In categorical plots (barplot, boxplot, countplot),\r
    # \`x\` provides primary grouping while \`hue\` splits each primary bar/box into sub-groups (dodged by default)!\r
\r
    tips = sns.load_dataset("tips")\r
\r
    fig, axes = plt.subplots(1, 2, figsize=(12, 5))\r
\r
    # 1. Nested Boxplot: x='day', hue='smoker'\r
    sns.boxplot(\r
        data=tips,\r
        x="day",\r
        y="total_bill",\r
        hue="smoker",\r
        palette="coolwarm",\r
        ax=axes[0]\r
    )\r
    axes[0].set_title("Nested Boxplot: Days split by Smoker status", fontsize=11)\r
\r
    # 2. Nested Countplot: x='day', hue='time'\r
    sns.countplot(\r
        data=tips,\r
        x="day",\r
        hue="time",\r
        palette="Set2",\r
        ax=axes[1]\r
    )\r
    axes[1].set_title("Nested Countplot: Days split by Meal Time", fontsize=11)\r
\r
    plt.tight_layout()\r
    print("✓ Successfully created nested categorical sub-grouped figures.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,P=`"""\r
03_hue_style_size_combinations.py\r
Title: Orthogonal Aesthetic Mapping: Combining hue, style, and size\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 03: Orthogonal Multi-Variable Encodings")\r
    print("   Instructor: Sukanta Hui | Students: Swadeep, Sachin, Tuhina")\r
    print("=" * 65)\r
\r
    tips = sns.load_dataset("tips")\r
\r
    # Combining:\r
    # - hue: 'smoker' (color)\r
    # - style: 'time' (Dinner vs Lunch marker symbol)\r
    # - size: 'size' (Party table count)\r
    plt.figure(figsize=(9, 5.5))\r
    sns.scatterplot(\r
        data=tips,\r
        x="total_bill",\r
        y="tip",\r
        hue="smoker",\r
        style="time",\r
        size="size",\r
        sizes=(40, 220),\r
        palette={"Yes": "#ef4444", "No": "#3b82f6"},\r
        markers={"Lunch": "o", "Dinner": "s"},\r
        alpha=0.85\r
    )\r
\r
    plt.title("Orthogonal Visual Encodings: Bill vs Tip with Multi-Legends", fontsize=12)\r
    plt.tight_layout()\r
    print("✓ Successfully rendered combined multi-dimensional aesthetic figure.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,k=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 9 - USING HUE FOR GROUPING\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS 'HUE' IN SEABORN?\r
--------------------------------------------------------------------------------\r
- 'hue' is Seaborn's color-encoding parameter for conditioning graphics on \r
  a third variable.\r
- It automatically creates legends, resolves color palettes, and segments statistics.\r
\r
2. CATEGORICAL VS NUMERIC HUE:\r
--------------------------------------------------------------------------------\r
a) Categorical Hue (Strings / Categories):\r
   - Example: hue="Gender", hue="Track", hue="Department"\r
   - Maps distinct, qualitative colors (e.g. Set1, muted, bright).\r
   - Generates discrete legend entries.\r
   - In bar/box plots, causes automatic dodging (side-by-side splitting).\r
\r
b) Continuous / Numeric Hue (Floats / Integers):\r
   - Example: hue="Age", hue="Salary", hue="ExamScore"\r
   - Automatically maps a continuous sequential colormap gradient (e.g. viridis, flare).\r
   - Generates a gradient scale legend instead of discrete swatches.\r
\r
3. FINE-TUNING HUE BEHAVIORS:\r
--------------------------------------------------------------------------------\r
- palette: Custom color dictionary, e.g. palette={'M': '#3b82f6', 'F': '#ec4899'}\r
- hue_order: Controls the order of categories in both plot and legend.\r
- dodge (in categorical plots):\r
  * dodge=True (default): bars/boxes appear side by side.\r
  * dodge=False: bars/boxes overlay on top of each other.\r
`,m=[{id:1,question:"How does Seaborn handle `hue` when the assigned column contains continuous floating-point numbers instead of text strings?",options:["It throws a TypeError","It automatically generates a continuous color gradient scale (e.g. viridis/flare) with a gradient legend","It ignores the hue completely","It rounds every number to zero"],correctAnswer:1,explanation:"When given numeric continuous data, Seaborn maps a sequential color gradient rather than discrete categorical swatches."},{id:2,question:"In `sns.barplot()` or `sns.boxplot()`, what effect does adding `hue='category'` produce by default?",options:["It creates 3D depth","It automatically dodges (splits side-by-side) the bars or boxes for each primary X category","It combines all bars into a single bar","It converts the plot into a pie chart"],correctAnswer:1,explanation:"In categorical plots, `hue` causes automatic dodging, rendering side-by-side sub-bars for each category."},{id:3,question:"How can you specify exact custom hex colors for individual hue categories in Seaborn?",options:["Pass a dictionary mapping category names to hex colors via `palette={'CatA': '#ff0000', 'CatB': '#00ff00'}`","Pass colors as a comma separated string in the title","Set plt.color() for every point manually","You cannot use custom colors in Seaborn"],correctAnswer:0,explanation:"Seaborn's `palette` parameter accepts a Python dictionary explicitly mapping each category label to a specific color hex code."},{id:4,question:"Which parameter controls the sorting order of hue groups in the legend and chart?",options:["sort_hue=True","hue_order=['GroupA', 'GroupB']","order_by='hue'","legend_sort=True"],correctAnswer:1,explanation:"`hue_order` explicitly specifies the sequence of hue categories."}],A=[{dept:"CS",gender:"Male",count:24,avgScore:84,color:"#38bdf8"},{dept:"CS",gender:"Female",count:28,avgScore:92,color:"#f472b6"},{dept:"ECE",gender:"Male",count:18,avgScore:76,color:"#38bdf8"},{dept:"ECE",gender:"Female",count:20,avgScore:82,color:"#f472b6"},{dept:"IT",gender:"Male",count:22,avgScore:80,color:"#38bdf8"},{dept:"IT",gender:"Female",count:25,avgScore:88,color:"#f472b6"}];function W(){const[d,T]=i.useState("interactive"),[h,I]=i.useState(0),[x,f]=i.useState(!1),[E,z]=i.useState("gender"),[l,H]=i.useState(!0),[b,y]=i.useState({}),[p,j]=i.useState(!1),g=[{name:"01_hue_grouping_scatter.py",code:O},{name:"02_hue_in_categorical_plots.py",code:L},{name:"03_hue_style_size_combinations.py",code:P}],v=t=>{navigator.clipboard.writeText(t),f(!0),setTimeout(()=>f(!1),2e3)},F=(t,r)=>{p||y(s=>({...s,[t]:r}))},G=()=>{let t=0;return m.forEach(r=>{b[r.id]===r.correctAnswer&&t++}),t};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-fuchsia-950 via-slate-900 to-indigo-950 border border-fuchsia-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-fuchsia-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(N,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 9"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Using Hue for Grouping"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Master multidimensional conditioning in Seaborn. Compare discrete categorical palettes, automatic bar dodging, and continuous numeric color gradients."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Hue Grouping Studio",icon:M},{id:"code",label:"Python Code Lab",icon:B},{id:"notes",label:"Revision Notes",icon:S},{id:"quiz",label:"Knowledge Check",icon:w}].map(t=>{const r=t.icon,s=d===t.id;return e.jsxs("button",{onClick:()=>T(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${s?"bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(r,{className:"w-4 h-4"}),t.label]},t.id)})})]}),d==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-fuchsia-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(D,{className:"w-4 h-4"}),e.jsx("span",{children:"Hue Dimension Options"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Hue Encoding Type:"}),e.jsx("div",{className:"space-y-2",children:[{id:"gender",label:"Categorical (hue='Gender')",desc:"2 discrete color classes (Male / Female)"},{id:"dodge_toggle",label:"Dodge Control (dodge=True/False)",desc:"Side-by-side split vs overlay"}].map(t=>e.jsxs("div",{onClick:()=>z(t.id),className:`p-3 rounded-xl border cursor-pointer transition-all ${E===t.id?"bg-fuchsia-950/60 border-fuchsia-500 shadow":"bg-slate-950 border-slate-800 hover:border-slate-700"}`,children:[e.jsx("div",{className:"font-semibold text-xs text-white",children:t.label}),e.jsx("p",{className:"text-[11px] text-slate-400 mt-0.5",children:t.desc})]},t.id))})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-300 font-medium",children:"dodge (Side-by-side):"}),e.jsx("button",{onClick:()=>H(!l),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${l?"bg-fuchsia-600 text-white":"bg-slate-800 text-slate-400"}`,children:l?"True":"False"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-fuchsia-400 font-semibold mb-1",children:"# Generated Code:"}),e.jsx("div",{className:"text-indigo-300",children:"sns.barplot("}),e.jsx("div",{className:"pl-3 text-slate-400",children:"data=df,"}),e.jsx("div",{className:"pl-3 text-slate-400",children:'x="Department",'}),e.jsx("div",{className:"pl-3 text-slate-400",children:'y="ExamScore",'}),e.jsx("div",{className:"pl-3 text-fuchsia-300",children:'hue="Gender",'}),e.jsxs("div",{className:"pl-3 text-amber-300",children:["dodge=",l?"True":"False",","]}),e.jsxs("div",{className:"pl-3 text-emerald-300",children:["palette=","{","'Male': '#38bdf8', 'Female': '#f472b6'","}"]}),e.jsx("div",{className:"text-indigo-300",children:")"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(N,{className:"w-4 h-4 text-fuchsia-400"}),'Live Sub-Grouped Bar Chart (hue="Gender")']}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Metric: Average Score"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"490",height:"280",viewBox:"0 0 490 280",className:"max-w-full",children:[e.jsx("line",{x1:"50",y1:"50",x2:"450",y2:"50",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"110",x2:"450",y2:"110",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"170",x2:"450",y2:"170",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"230",x2:"450",y2:"230",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"30",x2:"50",y2:"230",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("text",{x:"40",y:"234",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"0"}),e.jsx("text",{x:"40",y:"174",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"35"}),e.jsx("text",{x:"40",y:"114",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"70"}),e.jsx("text",{x:"40",y:"54",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"100"}),["CS","ECE","IT"].map((t,r)=>{const s=110+r*130,c=A.find(n=>n.dept===t&&n.gender==="Male"),u=A.find(n=>n.dept===t&&n.gender==="Female"),a=c.avgScore/100*180,o=u.avgScore/100*180;return l?e.jsxs("g",{children:[e.jsx("rect",{x:s-45,y:230-a,width:"40",height:a,fill:"#38bdf8",opacity:"0.9",rx:"3"}),e.jsx("text",{x:s-25,y:230-a-6,fill:"#38bdf8",fontSize:"10",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:c.avgScore}),e.jsx("rect",{x:s+5,y:230-o,width:"40",height:o,fill:"#f472b6",opacity:"0.9",rx:"3"}),e.jsx("text",{x:s+25,y:230-o-6,fill:"#f472b6",fontSize:"10",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:u.avgScore}),e.jsx("text",{x:s,y:"255",fill:"#e2e8f0",fontSize:"12",fontWeight:"600",textAnchor:"middle",children:t})]},t):e.jsxs("g",{children:[e.jsx("rect",{x:s-35,y:230-o,width:"70",height:o,fill:"#f472b6",opacity:"0.6",rx:"3"}),e.jsx("rect",{x:s-35,y:230-a,width:"70",height:a,fill:"#38bdf8",opacity:"0.6",rx:"3"}),e.jsx("text",{x:s,y:"255",fill:"#e2e8f0",fontSize:"12",fontWeight:"600",textAnchor:"middle",children:t})]},t)})]})}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-slate-400 font-semibold",children:"Hue Legend:"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-[#38bdf8]"}),e.jsx("span",{className:"text-slate-300",children:"Male"})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-[#f472b6]"}),e.jsx("span",{className:"text-slate-300",children:"Female"})]})]}),e.jsx("div",{className:"text-fuchsia-300 font-mono",children:l?"dodge=True: Side-by-side sub-bars":"dodge=False: Semi-transparent overlay"})]})]})]}),d==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:g.map((t,r)=>e.jsx("button",{onClick:()=>I(r),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${h===r?"bg-fuchsia-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>v(g[h].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[x?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),x?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-fuchsia-300 overflow-x-auto leading-relaxed max-h-[480px]",children:g[h].code})})]}),d==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-fuchsia-400 font-semibold text-sm",children:[e.jsx(S,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 9 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>v(k),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[x?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),x?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:k})]}),d==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-fuchsia-400 font-semibold text-sm",children:[e.jsx(w,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 9 Knowledge Assessment (4 Questions)"})]}),p&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30 text-xs font-semibold",children:["Score: ",G()," / ",m.length]})]}),e.jsx("div",{className:"space-y-6",children:m.map((t,r)=>{const s=b[t.id],c=s===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[r+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((u,a)=>{const o=s===a;let n="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return p?a===t.correctAnswer?n="bg-emerald-950/70 border-emerald-500 text-emerald-300":o&&(n="bg-rose-950/70 border-rose-500 text-rose-300"):o&&(n="bg-fuchsia-600/30 border-fuchsia-500 text-fuchsia-200"),e.jsx("button",{onClick:()=>F(t.id,a),className:`p-3 rounded-lg border text-left text-xs transition-all ${n}`,children:u},a)})}),p&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${c?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:c?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{y({}),j(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>j(!0),disabled:Object.keys(b).length<m.length,className:"px-5 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-fuchsia-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{W as default};
