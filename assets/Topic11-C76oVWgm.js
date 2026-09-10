import{b as d,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{aY as Q,S as P,k as $,B as C,aa as A,aM as D,a7 as H,f as F,g as B}from"./vendor-icons-DFC0rBCP.js";const q=`"""\r
01_student_marks_boxplot.py\r
Title: Worked Example 1: Box Plot Analysis of Exam Marks by Gender\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Worked Example 1: Student Marks Conditioning by Gender")\r
    print("   Instructor: Sukanta Hui | Location: Barrackpore")\r
    print("=" * 65)\r
\r
    # 1. Create Barrackpore student exam marks dataset\r
    np.random.seed(42)\r
    n = 60\r
    genders = np.random.choice(["Male", "Female"], size=n, p=[0.45, 0.55])\r
    \r
    # Female scores centered at 88 with std 7; Male scores centered at 82 with std 9\r
    scores = [\r
        int(np.clip(np.random.normal(88, 7), 50, 100)) if g == "Female" \r
        else int(np.clip(np.random.normal(82, 9), 50, 100)) \r
        for g in genders\r
    ]\r
\r
    df = pd.DataFrame({"Gender": genders, "ML_Marks": scores})\r
    \r
    print("\\nSummary Statistics Grouped by Gender:")\r
    print(df.groupby("Gender")["ML_Marks"].describe().round(2))\r
\r
    # 2. Render publication-ready boxplot\r
    sns.set_theme(style="whitegrid", palette="pastel")\r
    plt.figure(figsize=(7, 5))\r
    \r
    ax = sns.boxplot(\r
        data=df,\r
        x="Gender",\r
        y="ML_Marks",\r
        palette={"Male": "#38bdf8", "Female": "#f472b6"},\r
        width=0.45,\r
        boxprops=dict(alpha=0.85)\r
    )\r
\r
    plt.title("Barrackpore Batch: Machine Learning Exam Marks by Gender", fontsize=12, pad=12)\r
    plt.xlabel("Student Gender", fontsize=11)\r
    plt.ylabel("ML Exam Marks (/100)", fontsize=11)\r
    \r
    print("\\n✓ Successfully rendered Gender marks boxplot.")\r
    plt.tight_layout()\r
\r
if __name__ == "__main__":\r
    main()\r
`,U=`"""\r
02_gender_comparisons_palette.py\r
Title: Multi-track Conditioning: Gender x Track Nested Boxplot\r
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
    print("🎓 Seaborn Worked Example 1: Nested Category Split (Gender × Track)")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # 2-level categorical analysis: X is Track, Hue is Gender\r
    data = {\r
        "Track": ["Deep Learning", "Data Science", "Web ML"] * 20,\r
        "Gender": (["Male"] * 10 + ["Female"] * 10) * 3,\r
        "Marks": np.random.randint(65, 100, 60)\r
    }\r
    df = pd.DataFrame(data)\r
\r
    plt.figure(figsize=(9, 5))\r
    sns.boxplot(\r
        data=df,\r
        x="Track",\r
        y="Marks",\r
        hue="Gender",\r
        palette={"Male": "#60a5fa", "Female": "#f472b6"},\r
        showmeans=True, # Displays green mean marker\r
        meanprops={"marker": "^", "markerfacecolor": "white", "markeredgecolor": "black"}\r
    )\r
\r
    plt.title("Exam Marks by Track and Gender (with Mean Indicators ^)", fontsize=12)\r
    plt.tight_layout()\r
    print("✓ Successfully created nested track-gender boxplot with mean markers.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,X=`"""\r
03_stripplot_overlay_box.py\r
Title: Hybrid Visualization: Overlaying Raw Points (stripplot) on Boxplots\r
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
    print("🎓 Seaborn Worked Example 1: Jittered Stripplot + Boxplot Hybrid")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Abhronila")\r
    print("=" * 65)\r
\r
    # Combining a Boxplot with a jittered Stripplot lets you see BOTH:\r
    # 1. Macro summary statistics (Q1, Median, Q3, Whiskers)\r
    # 2. Micro sample density (actual individual student dots)\r
\r
    np.random.seed(42)\r
    df = pd.DataFrame({\r
        "Gender": ["Male"] * 25 + ["Female"] * 30,\r
        "Marks": np.concatenate([np.random.normal(80, 8, 25), np.random.normal(87, 6, 30)])\r
    })\r
\r
    plt.figure(figsize=(7, 5))\r
    \r
    # Base Boxplot\r
    sns.boxplot(\r
        data=df,\r
        x="Gender",\r
        y="Marks",\r
        palette="pastel",\r
        fliersize=0 # Hide default fliers to prevent duplicate points\r
    )\r
\r
    # Overlay jittered Stripplot\r
    sns.stripplot(\r
        data=df,\r
        x="Gender",\r
        y="Marks",\r
        color="#0f172a",\r
        alpha=0.6,\r
        jitter=0.2,\r
        size=6\r
    )\r
\r
    plt.title("Student Marks by Gender with Raw Jittered Observations", fontsize=12)\r
    plt.tight_layout()\r
    print("✓ Successfully rendered Boxplot + Stripplot hybrid overlay.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 11 - WORKED EXAMPLE 1 (BOX PLOT BY GENDER)\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. PROBLEM FORMULATION:\r
--------------------------------------------------------------------------------\r
We wish to compare the Machine Learning assessment test scores between Male \r
and Female students across cohorts in Barrackpore.\r
- Goal: Assess central tendency, spread (IQR), skewness, and extreme outlier marks.\r
\r
2. STEP-BY-STEP IMPLEMENTATION:\r
--------------------------------------------------------------------------------\r
Step 1: Ingest tabular DataFrame with columns: ['Gender', 'ML_Marks', 'Track'].\r
Step 2: Configure high-level theme: \`sns.set_theme(style="whitegrid")\`.\r
Step 3: Call \`sns.boxplot(data=df, x="Gender", y="ML_Marks", palette={"Male": "#38bdf8", "Female": "#f472b6"})\`.\r
Step 4: (Optional Pro Tip) Overlay individual observations using \`sns.stripplot(..., jitter=0.2, alpha=0.6)\`.\r
Step 5: Set titles, axis labels, and remove unnecessary spines via \`sns.despine()\`.\r
\r
3. READING THE 5-POINT SUMMARY:\r
--------------------------------------------------------------------------------\r
- Upper Whisker : Q3 + 1.5 * IQR (or maximum non-outlier score)\r
- Q3 (75th percentile) : Upper edge of box (75% of cohort scored below this)\r
- Median (50th percentile) : Solid horizontal line inside the box\r
- Q1 (25th percentile) : Lower edge of box (25% of cohort scored below this)\r
- Lower Whisker : Q1 - 1.5 * IQR\r
- Outliers (Fliers) : Isolated points beyond whiskers.\r
`,j=[{id:1,question:"Why is `fliersize=0` recommended when overlaying `sns.stripplot()` on top of `sns.boxplot()`?",options:["To avoid plotting outlier points twice (once as a boxplot flier and once as a stripplot dot)","Because fliersize crashed Python in older versions","To remove all outliers from the DataFrame entirely","To force all points to be identical in color"],correctAnswer:0,explanation:"Setting `fliersize=0` on the boxplot hides its built-in outlier markers so they are not drawn twice when `sns.stripplot()` overlays all raw points."},{id:2,question:"What parameter in `sns.stripplot()` spreads overlapping points horizontally to make density visible?",options:["spread=True","jitter=0.2 (or jitter=True)","dodge_points=True","horizontal_noise=True"],correctAnswer:1,explanation:"`jitter` adds subtle random horizontal displacement to separate crowded points."},{id:3,question:"In a boxplot of marks, what does the solid line located inside the colored rectangular box indicate?",options:["The Mode","The 50th Percentile (Median)","The Standard Deviation","The Maximum mark"],correctAnswer:1,explanation:"The interior line inside a boxplot represents the sample Median (Q2 / 50th percentile)."},{id:4,question:"How do you pass a custom dictionary mapping 'Male' to blue and 'Female' to pink in `sns.boxplot()`?",options:["palette={'Male': '#38bdf8', 'Female': '#f472b6'}","colors='Male:blue, Female:pink'","hue_color={'Male': 'blue', 'Female': 'pink'}","map_gender={'Male': '#38bdf8'}"],correctAnswer:0,explanation:"The `palette` argument accepts a dictionary where keys are category strings and values are hex color codes."}],Y=[{name:"Debangshu",score:88,jitter:-12},{name:"Swadeep",score:72,jitter:14},{name:"Sachin",score:79,jitter:-6},{name:"Suman",score:84,jitter:10},{name:"Rohan",score:92,jitter:-18},{name:"Aritra",score:62,jitter:6}],K=[{name:"Susmita",score:95,jitter:12},{name:"Tuhina",score:91,jitter:-14},{name:"Mahima",score:98,jitter:8},{name:"Abhronila",score:84,jitter:-8},{name:"Pooja",score:87,jitter:15},{name:"Riya",score:93,jitter:-10}],W={Male:{min:70,q1:76,median:82,mean:80.5,q3:88,max:94,outliers:[62],color:"#38bdf8"},Female:{min:80,q1:85,median:91,mean:91.3,q3:95,max:99,color:"#f472b6"}};function Z(){const[p,z]=d.useState("interactive"),[k,G]=d.useState(0),[f,S]=d.useState(!1),[c,I]=d.useState(!0),[x,O]=d.useState(!0),[u,y]=d.useState(null),[v,M]=d.useState({}),[g,_]=d.useState(!1),w=[{name:"01_student_marks_boxplot.py",code:q},{name:"02_gender_comparisons_palette.py",code:U},{name:"03_stripplot_overlay_box.py",code:X}],T=r=>{navigator.clipboard.writeText(r),S(!0),setTimeout(()=>S(!1),2e3)},L=(r,t)=>{g||M(s=>({...s,[r]:t}))},R=()=>{let r=0;return j.forEach(t=>{v[t.id]===t.correctAnswer&&r++}),r};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border border-cyan-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(Q,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 11 (Worked Example 1)"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Worked Example 1: Box Plot of Marks by Gender"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"End-to-end practical case study. Compare examination mark distributions conditioned on gender with custom palettes, stripplot overlays, and mean markers."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Case Studio",icon:P},{id:"code",label:"Python Code Lab",icon:$},{id:"notes",label:"Revision Notes",icon:C},{id:"quiz",label:"Knowledge Check",icon:A}].map(r=>{const t=r.icon,s=p===r.id;return e.jsxs("button",{onClick:()=>z(r.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${s?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(t,{className:"w-4 h-4"}),r.label]},r.id)})})]}),p==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(D,{className:"w-4 h-4"}),e.jsx("span",{children:"Visual Enhancements"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-300 font-medium",children:"Overlay Raw Points (stripplot):"}),e.jsx("button",{onClick:()=>I(!c),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${c?"bg-cyan-600 text-white":"bg-slate-800 text-slate-400"}`,children:c?"ON":"OFF"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-300 font-medium",children:"Show Mean Indicator (showmeans=True):"}),e.jsx("button",{onClick:()=>O(!x),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${x?"bg-cyan-600 text-white":"bg-slate-800 text-slate-400"}`,children:x?"ON":"OFF"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400",children:"Statistical Summary:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-sky-900/50 space-y-1",children:[e.jsx("span",{className:"text-sky-400 font-bold",children:"Male (n=25)"}),e.jsx("div",{children:"Median: 82"}),e.jsx("div",{children:"Mean: 80.5"}),e.jsx("div",{children:"IQR: [76 - 88]"}),e.jsx("div",{className:"text-rose-400",children:"Outlier: 62"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-pink-900/50 space-y-1",children:[e.jsx("span",{className:"text-pink-400 font-bold",children:"Female (n=30)"}),e.jsx("div",{children:"Median: 91"}),e.jsx("div",{children:"Mean: 91.3"}),e.jsx("div",{children:"IQR: [85 - 95]"}),e.jsx("div",{className:"text-emerald-400",children:"Outliers: None"})]})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-cyan-400 font-semibold mb-1",children:"# Python Code:"}),e.jsx("div",{className:"text-indigo-300",children:"sns.boxplot("}),e.jsx("div",{className:"pl-3 text-slate-400",children:'data=df, x="Gender", y="ML_Marks",'}),e.jsxs("div",{className:"pl-3 text-cyan-300",children:["palette=","{","'Male': '#38bdf8', 'Female': '#f472b6'","}",","]}),e.jsxs("div",{className:"pl-3 text-amber-300",children:["showmeans=",x?"True":"False"]}),e.jsx("div",{className:"text-indigo-300",children:")"}),c&&e.jsx("div",{className:"text-emerald-300 pt-1",children:'sns.stripplot(data=df, x="Gender", y="ML_Marks", color="#0f172a", jitter=0.2)'})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(H,{className:"w-4 h-4 text-cyan-400"}),"Barrackpore Cohort: ML Exam Marks Conditioning"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Boxplot + Stripplot"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"480",height:"280",viewBox:"0 0 480 280",className:"max-w-full",children:[e.jsx("line",{x1:"50",y1:"50",x2:"450",y2:"50",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"110",x2:"450",y2:"110",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"170",x2:"450",y2:"170",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"230",x2:"450",y2:"230",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"30",x2:"50",y2:"230",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("text",{x:"40",y:"234",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"50"}),e.jsx("text",{x:"40",y:"174",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"65"}),e.jsx("text",{x:"40",y:"114",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"80"}),e.jsx("text",{x:"40",y:"54",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"100"}),(()=>{const t=W.Male,s=230-(t.min-50)/50*180,o=230-(t.max-50)/50*180,m=230-(t.q1-50)/50*180,i=230-(t.q3-50)/50*180,l=230-(t.median-50)/50*180,n=230-(t.mean-50)/50*180;return e.jsxs("g",{children:[e.jsx("line",{x1:160,y1:o,x2:160,y2:s,stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("line",{x1:145,y1:o,x2:175,y2:o,stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("line",{x1:145,y1:s,x2:175,y2:s,stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("rect",{x:125,y:i,width:"70",height:m-i,fill:t.color,opacity:"0.8",stroke:"#ffffff",strokeWidth:"1.5",rx:"3"}),e.jsx("line",{x1:125,y1:l,x2:195,y2:l,stroke:"#ffffff",strokeWidth:"3"}),x&&e.jsx("polygon",{points:`160,${n-5} 155,${n+4} 165,${n+4}`,fill:"#ffffff",stroke:"#0f172a",strokeWidth:"1"}),t.outliers.map((a,h)=>{const b=230-(a-50)/50*180;return e.jsx("circle",{cx:160,cy:b,r:"4",fill:"#f43f5e",stroke:"#ffffff",strokeWidth:"1.5"},h)}),c&&Y.map((a,h)=>{const b=230-(a.score-50)/50*180,N=160+a.jitter;return e.jsx("circle",{cx:N,cy:b,r:"4.5",fill:"#0f172a",stroke:"#ffffff",strokeWidth:"1.5",opacity:"0.9",className:"cursor-pointer",onMouseEnter:()=>y({name:a.name,gender:"Male",score:a.score}),onMouseLeave:()=>y(null)},h)}),e.jsx("text",{x:160,y:"255",fill:"#e2e8f0",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"Male"})]},"MaleBox")})(),(()=>{const t=W.Female,s=230-(t.min-50)/50*180,o=230-(t.max-50)/50*180,m=230-(t.q1-50)/50*180,i=230-(t.q3-50)/50*180,l=230-(t.median-50)/50*180,n=230-(t.mean-50)/50*180;return e.jsxs("g",{children:[e.jsx("line",{x1:330,y1:o,x2:330,y2:s,stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("line",{x1:315,y1:o,x2:345,y2:o,stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("line",{x1:315,y1:s,x2:345,y2:s,stroke:"#cbd5e1",strokeWidth:"1.5"}),e.jsx("rect",{x:295,y:i,width:"70",height:m-i,fill:t.color,opacity:"0.8",stroke:"#ffffff",strokeWidth:"1.5",rx:"3"}),e.jsx("line",{x1:295,y1:l,x2:365,y2:l,stroke:"#ffffff",strokeWidth:"3"}),x&&e.jsx("polygon",{points:`330,${n-5} 325,${n+4} 335,${n+4}`,fill:"#ffffff",stroke:"#0f172a",strokeWidth:"1"}),c&&K.map((a,h)=>{const b=230-(a.score-50)/50*180,N=330+a.jitter;return e.jsx("circle",{cx:N,cy:b,r:"4.5",fill:"#0f172a",stroke:"#ffffff",strokeWidth:"1.5",opacity:"0.9",className:"cursor-pointer",onMouseEnter:()=>y({name:a.name,gender:"Female",score:a.score}),onMouseLeave:()=>y(null)},h)}),e.jsx("text",{x:330,y:"255",fill:"#e2e8f0",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"Female"})]},"FemaleBox")})()]})}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400",children:[u?e.jsxs("span",{className:"text-cyan-300 font-mono font-bold",children:["🎓 Student: ",u.name," (",u.gender,") • Score = ",u.score,"/100"]}):e.jsx("span",{className:"text-slate-500 italic",children:"Hover any jittered student dot to inspect individual test score"}),e.jsx("span",{className:"font-mono text-slate-400",children:"Total: 55 Students"})]})]})]}),p==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:w.map((r,t)=>e.jsx("button",{onClick:()=>G(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${k===t?"bg-cyan-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:r.name},r.name))}),e.jsxs("button",{onClick:()=>T(w[k].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[f?e.jsx(F,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(B,{className:"w-3.5 h-3.5"}),f?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed max-h-[480px]",children:w[k].code})})]}),p==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-semibold text-sm",children:[e.jsx(C,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 11 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>T(E),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[f?e.jsx(F,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(B,{className:"w-3.5 h-3.5"}),f?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:E})]}),p==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-semibold text-sm",children:[e.jsx(A,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 11 Knowledge Assessment (4 Questions)"})]}),g&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold",children:["Score: ",R()," / ",j.length]})]}),e.jsx("div",{className:"space-y-6",children:j.map((r,t)=>{const s=v[r.id],o=s===r.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[t+1,". ",r.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:r.options.map((m,i)=>{const l=s===i;let n="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return g?i===r.correctAnswer?n="bg-emerald-950/70 border-emerald-500 text-emerald-300":l&&(n="bg-rose-950/70 border-rose-500 text-rose-300"):l&&(n="bg-cyan-600/30 border-cyan-500 text-cyan-200"),e.jsx("button",{onClick:()=>L(r.id,i),className:`p-3 rounded-lg border text-left text-xs transition-all ${n}`,children:m},i)})}),g&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${o?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:o?"✓ Correct: ":"✗ Incorrect: "}),r.explanation]})]},r.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{M({}),_(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>_(!0),disabled:Object.keys(v).length<j.length,className:"px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-cyan-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{Z as default};
