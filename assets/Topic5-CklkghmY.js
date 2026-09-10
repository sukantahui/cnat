import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{a1 as z,S as U,k as V,B as L,aa as M,aM as X,f as E,g as I}from"./vendor-icons-DFC0rBCP.js";const Y=`"""\r
01_scatterplot_hue_size.py\r
Title: Multi-dimensional Encoding with sns.scatterplot()\r
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
    print("🎓 Seaborn Essentials Lab 01: sns.scatterplot() Multi-channel Visuals")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Swadeep")\r
    print("=" * 65)\r
\r
    # Seaborn scatterplot allows encoding up to 5 dimensions on 2D space:\r
    # 1. x position\r
    # 2. y position\r
    # 3. hue (color category or continuous gradient)\r
    # 4. size (point diameter)\r
    # 5. style (marker shape: circle, square, triangle, x)\r
\r
    tips = sns.load_dataset("tips")\r
\r
    plt.figure(figsize=(9, 5))\r
    sns.scatterplot(\r
        data=tips,\r
        x="total_bill",\r
        y="tip",\r
        hue="time",\r
        style="smoker",\r
        size="size",\r
        sizes=(30, 200),\r
        alpha=0.85,\r
        palette="magma"\r
    )\r
\r
    plt.title("Multi-channel Scatter: Bill vs Tip by Meal Time, Smoker, and Table Size", fontsize=12)\r
    plt.tight_layout()\r
    print("✓ Successfully generated multi-dimensional scatter plot.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,G=`"""\r
02_lineplot_aggregation_ci.py\r
Title: sns.lineplot() with Automatic Aggregation and Uncertainty Bands\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 02: Time Series & Repeated Measurements")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # fmri dataset contains repeated signals across multiple subjects and time points\r
    fmri = sns.load_dataset("fmri")\r
\r
    plt.figure(figsize=(9, 5))\r
    # When multiple y measurements exist for the same x,\r
    # sns.lineplot() automatically aggregates the mean and draws a shaded 95% confidence band!\r
    sns.lineplot(\r
        data=fmri,\r
        x="timepoint",\r
        y="signal",\r
        hue="event",\r
        style="region",\r
        markers=True,\r
        dashes=False,\r
        errorbar="ci"\r
    )\r
\r
    plt.title("FMRI Signal over Timepoint with 95% Bootstrap Confidence Bands", fontsize=12)\r
    plt.tight_layout()\r
    print("✓ Successfully generated lineplot with automatic aggregation.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,Q=`"""\r
03_relplot_facets.py\r
Title: Figure-level Relationship Plotting with sns.relplot() Facets\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 03: Faceting Subplots with sns.relplot()")\r
    print("   Instructor: Sukanta Hui | Students: Mahima, Tuhina, Sachin")\r
    print("=" * 65)\r
\r
    tips = sns.load_dataset("tips")\r
\r
    # sns.relplot() is the Figure-level entry point for relationship plots (kind="scatter" or kind="line").\r
    # It allows splitting subplots into rows and columns effortlessly using \`col\` and \`row\`!\r
    g = sns.relplot(\r
        data=tips,\r
        x="total_bill",\r
        y="tip",\r
        hue="smoker",\r
        col="time",\r
        row="sex",\r
        kind="scatter",\r
        height=3.5,\r
        aspect=1.2\r
    )\r
\r
    g.fig.subplots_adjust(top=0.9)\r
    g.fig.suptitle("Faceted Multi-panel Scatter Matrix: Bill vs Tip", fontsize=14)\r
    print("✓ Successfully generated multi-column faceted relationship plot.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,P=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 5 - RELATIONSHIP PLOTS (SCATTERPLOT & LINEPLOT)\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. RELATIONSHIP PLOTTING PARADIGM:\r
--------------------------------------------------------------------------------\r
Relationship plots visualize how two continuous variables relate to each other,\r
while conditioning on additional categorical or continuous dimensions.\r
\r
a) sns.scatterplot():\r
   - Used for bivariate continuous data pairs (e.g. Study Hours vs ML Score).\r
   - Visual encoding arguments:\r
     * hue: maps color (categorical or continuous colormap gradient)\r
     * size: scales marker area proportional to variable magnitude\r
     * sizes: tuple of (min_size, max_size) in points\r
     * style: maps different glyph markers (circles, crosses, squares)\r
     * alpha: controls opacity for dense overplotted clouds\r
\r
b) sns.lineplot():\r
   - Used for time series, ordered sequences, or repeated trial measurements.\r
   - Crucial automatic behavior: When multiple Y-values exist for each X-value,\r
     Seaborn calculates the mean line and automatically renders a shaded \r
     95% bootstrap confidence interval band!\r
   - Set errorbar=None to suppress the uncertainty shading.\r
\r
c) Figure-Level wrapper: sns.relplot()\r
   - Combines scatter and line into a unified interface:\r
     kind="scatter" (default) or kind="line"\r
   - Supports subgrid faceting across variables via \`col="var1"\` and \`row="var2"\`.\r
\r
2. BARRACKPORE BATCH MEMORY MANTRA:\r
--------------------------------------------------------------------------------\r
- "Axes-level functions (sns.scatterplot, sns.lineplot) go inside plt.subplots()."\r
- "Figure-level functions (sns.relplot) create their own multi-window grid automatically!"\r
`,g=[{id:1,question:"How many distinct visual dimensions can you simultaneously encode on a 2D `sns.scatterplot()`?",options:["Only 2 (X and Y)","Up to 5 (X, Y, hue, size, and style)","Exactly 100","Only 1"],correctAnswer:1,explanation:"Seaborn allows encoding X position, Y position, color (hue), point size (size), and marker glyph (style) simultaneously."},{id:2,question:"When `sns.lineplot()` receives multiple observations for the same x-coordinate, what does it automatically render by default?",options:["A single random point","An error exception","The mean trajectory line surrounded by a shaded 95% bootstrap confidence interval band","A pie chart"],correctAnswer:2,explanation:"`sns.lineplot()` aggregates repeated measurements into a mean line with a shaded confidence interval band."},{id:3,question:"Which figure-level function acts as the universal wrapper for scatterplot and lineplot across facet grids?",options:["sns.relplot()","sns.catplot()","sns.displot()","sns.pairplot()"],correctAnswer:0,explanation:"`sns.relplot()` is the figure-level function for relationship plots (with kind='scatter' or kind='line')."},{id:4,question:"In `sns.relplot()`, which parameters are used to create a 2D matrix of subplots conditioned on categorical variables?",options:["x_split and y_split","col and row","grid_x and grid_y","sub_a and sub_b"],correctAnswer:1,explanation:"`col` and `row` parameters facet the dataset into separate subplot columns and rows automatically."}],Z=[{name:"Debangshu",hours:14,score:92,projCount:5,dept:"Deep Learning",style:"circle"},{name:"Susmita",hours:16,score:96,projCount:6,dept:"Data Science",style:"square"},{name:"Swadeep",hours:8,score:72,projCount:2,dept:"Web ML",style:"cross"},{name:"Tuhina",hours:13,score:89,projCount:4,dept:"Data Science",style:"square"},{name:"Sachin",hours:10,score:78,projCount:3,dept:"Web ML",style:"cross"},{name:"Mahima",hours:15,score:95,projCount:5,dept:"Deep Learning",style:"circle"},{name:"Abhronila",hours:11,score:85,projCount:4,dept:"Data Science",style:"square"}],y=[{x:6,y:60,low:55,high:65},{x:8,y:72,low:67,high:77},{x:10,y:78,low:73,high:83},{x:12,y:84,low:79,high:89},{x:14,y:91,low:86,high:95},{x:16,y:96,low:92,high:99}],J={"Deep Learning":"#ec4899","Data Science":"#3b82f6","Web ML":"#10b981"};function se(){const[d,F]=l.useState("interactive"),[j,$]=l.useState(0),[h,w]=l.useState(!1),[n,N]=l.useState("scatter"),[x,O]=l.useState(!0),[p,R]=l.useState(!0),[m,H]=l.useState(!0),[u,B]=l.useState(!0),[c,S]=l.useState(null),[v,C]=l.useState({}),[b,_]=l.useState(!1),k=[{name:"01_scatterplot_hue_size.py",code:Y},{name:"02_lineplot_aggregation_ci.py",code:G},{name:"03_relplot_facets.py",code:Q}],A=t=>{navigator.clipboard.writeText(t),w(!0),setTimeout(()=>w(!1),2e3)},D=(t,r)=>{b||C(s=>({...s,[t]:r}))},W=()=>{let t=0;return g.forEach(r=>{v[r.id]===r.correctAnswer&&t++}),t},q=y.map(t=>{const r=60+(t.x-6)/10*400,s=240-(t.y-50)/50*190;return`${r},${s}`}).join(" "),K=()=>{const t=y.map(s=>{const a=60+(s.x-6)/10*400,o=240-(s.high-50)/50*190;return`${a},${o}`}),r=[...y].reverse().map(s=>{const a=60+(s.x-6)/10*400,o=240-(s.low-50)/50*190;return`${a},${o}`});return`M ${t[0]} ${t.slice(1).map(s=>`L ${s}`).join(" ")} ${r.map(s=>`L ${s}`).join(" ")} Z`};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 border border-sky-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(z,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 5"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Relationship Plots: scatterplot & lineplot"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Explore continuous statistical relationships. Encode multidimensional channels with hue, size, style, and automatic time series aggregation."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Relationship Plot Studio",icon:U},{id:"code",label:"Python Code Lab",icon:V},{id:"notes",label:"Revision Notes",icon:L},{id:"quiz",label:"Knowledge Check",icon:M}].map(t=>{const r=t.icon,s=d===t.id;return e.jsxs("button",{onClick:()=>F(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${s?"bg-sky-600 text-white shadow-lg shadow-sky-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(r,{className:"w-4 h-4"}),t.label]},t.id)})})]}),d==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(X,{className:"w-4 h-4"}),e.jsx("span",{children:"Plot Family & Encodings"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>N("scatter"),className:`p-2.5 rounded-xl text-xs font-semibold transition-all ${n==="scatter"?"bg-sky-600 text-white border border-sky-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:"sns.scatterplot()"}),e.jsx("button",{onClick:()=>N("line"),className:`p-2.5 rounded-xl text-xs font-semibold transition-all ${n==="line"?"bg-sky-600 text-white border border-sky-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:"sns.lineplot()"})]}),n==="scatter"?e.jsxs("div",{className:"space-y-2 pt-2",children:[e.jsx("div",{className:"text-xs font-medium text-slate-300",children:"Visual Encoding Channels:"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("button",{onClick:()=>O(!x),className:`w-full p-2.5 rounded-xl text-xs font-mono flex items-center justify-between border ${x?"bg-sky-950/60 border-sky-500 text-sky-300":"bg-slate-950 border-slate-800 text-slate-500"}`,children:[e.jsx("span",{children:'hue="Track" (Color)'}),e.jsx("span",{children:x?"✓ ON":"OFF"})]}),e.jsxs("button",{onClick:()=>R(!p),className:`w-full p-2.5 rounded-xl text-xs font-mono flex items-center justify-between border ${p?"bg-sky-950/60 border-sky-500 text-sky-300":"bg-slate-950 border-slate-800 text-slate-500"}`,children:[e.jsx("span",{children:'size="Projects" (Point Area)'}),e.jsx("span",{children:p?"✓ ON":"OFF"})]}),e.jsxs("button",{onClick:()=>H(!m),className:`w-full p-2.5 rounded-xl text-xs font-mono flex items-center justify-between border ${m?"bg-sky-950/60 border-sky-500 text-sky-300":"bg-slate-950 border-slate-800 text-slate-500"}`,children:[e.jsx("span",{children:'style="Track" (Markers)'}),e.jsx("span",{children:m?"✓ ON":"OFF"})]})]})]}):e.jsx("div",{className:"space-y-3 pt-2",children:e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-300 font-medium",children:"95% Shaded CI Band:"}),e.jsx("button",{onClick:()=>B(!u),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${u?"bg-sky-600 text-white":"bg-slate-800 text-slate-400"}`,children:u?"Enabled":"Disabled"})]})}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-sky-400 font-semibold mb-1",children:"# Generated Code:"}),e.jsxs("div",{className:"text-indigo-300",children:["sns.",n==="scatter"?"scatterplot":"lineplot","("]}),e.jsx("div",{className:"pl-3 text-slate-400",children:'data=df, x="Hours", y="Score",'}),n==="scatter"&&x&&e.jsx("div",{className:"pl-3 text-sky-300",children:'hue="Track",'}),n==="scatter"&&p&&e.jsx("div",{className:"pl-3 text-amber-300",children:'size="Projects", sizes=(40, 180),'}),n==="scatter"&&m&&e.jsx("div",{className:"pl-3 text-pink-300",children:'style="Track",'}),n==="line"&&u&&e.jsx("div",{className:"pl-3 text-emerald-300",children:'errorbar="ci",'}),e.jsx("div",{className:"text-indigo-300",children:")"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(z,{className:"w-4 h-4 text-sky-400"}),"Live SVG Rendering: sns.",n==="scatter"?"scatterplot":"lineplot","()"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Study Hours vs ML Exam Score"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"500",height:"290",viewBox:"0 0 500 290",className:"max-w-full",children:[e.jsx("line",{x1:"50",y1:"50",x2:"470",y2:"50",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"110",x2:"470",y2:"110",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"170",x2:"470",y2:"170",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"240",x2:"470",y2:"240",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"30",x2:"50",y2:"240",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("text",{x:"40",y:"244",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"50"}),e.jsx("text",{x:"40",y:"174",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"65"}),e.jsx("text",{x:"40",y:"114",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"80"}),e.jsx("text",{x:"40",y:"54",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"100"}),[6,8,10,12,14,16].map(t=>{const r=60+(t-6)/10*400;return e.jsxs("g",{children:[e.jsx("line",{x1:r,y1:"240",x2:r,y2:"245",stroke:"#94a3b8"}),e.jsxs("text",{x:r,y:"260",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",fontFamily:"monospace",children:[t,"h"]})]},t)}),n==="scatter"&&Z.map((t,r)=>{const s=60+(t.hours-6)/10*400,a=240-(t.score-50)/50*190,o=p?5+t.projCount*2.2:8,i=x?J[t.dept]:"#38bdf8";return e.jsxs("g",{className:"cursor-pointer",onMouseEnter:()=>S(t),onMouseLeave:()=>S(null),children:[m&&t.style==="square"?e.jsx("rect",{x:s-o,y:a-o,width:o*2,height:o*2,fill:i,stroke:"#ffffff",strokeWidth:"1.5",opacity:"0.9"}):e.jsx("circle",{cx:s,cy:a,r:o,fill:i,stroke:"#ffffff",strokeWidth:"1.5",opacity:"0.9"}),e.jsx("text",{x:s,y:a-o-4,fill:"#e2e8f0",fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:t.name})]},r)}),n==="line"&&e.jsxs(e.Fragment,{children:[u&&e.jsx("path",{d:K(),fill:"#38bdf8",opacity:"0.25"}),e.jsx("polyline",{points:q,fill:"none",stroke:"#0284c7",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),y.map((t,r)=>{const s=60+(t.x-6)/10*400,a=240-(t.y-50)/50*190;return e.jsx("circle",{cx:s,cy:a,r:"4.5",fill:"#38bdf8",stroke:"#ffffff",strokeWidth:"1.5"},r)})]}),e.jsx("text",{x:"260",y:"280",fill:"#e2e8f0",fontSize:"11",fontWeight:"600",textAnchor:"middle",children:"Study Hours / Week"})]})}),e.jsx("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs",children:c?e.jsxs("div",{className:"text-sky-400 font-mono",children:["🎓 ",c.name,": ",c.hours," hrs -> Score ",c.score," | Track: ",c.dept," | ",c.projCount," Projects"]}):e.jsx("div",{className:"text-slate-400 font-mono",children:n==="scatter"?"Hover a dot to inspect multidimensional metadata":"Solid line: Mean regression curve | Shading: 95% Confidence Interval"})})]})]}),d==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:k.map((t,r)=>e.jsx("button",{onClick:()=>$(r),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${j===r?"bg-sky-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>A(k[j].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[h?e.jsx(E,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(I,{className:"w-3.5 h-3.5"}),h?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-sky-300 overflow-x-auto leading-relaxed max-h-[480px]",children:k[j].code})})]}),d==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-semibold text-sm",children:[e.jsx(L,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 5 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>A(P),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[h?e.jsx(E,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(I,{className:"w-3.5 h-3.5"}),h?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:P})]}),d==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-semibold text-sm",children:[e.jsx(M,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 5 Knowledge Assessment (4 Questions)"})]}),b&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-semibold",children:["Score: ",W()," / ",g.length]})]}),e.jsx("div",{className:"space-y-6",children:g.map((t,r)=>{const s=v[t.id],a=s===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[r+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((o,i)=>{const T=s===i;let f="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return b?i===t.correctAnswer?f="bg-emerald-950/70 border-emerald-500 text-emerald-300":T&&(f="bg-rose-950/70 border-rose-500 text-rose-300"):T&&(f="bg-sky-600/30 border-sky-500 text-sky-200"),e.jsx("button",{onClick:()=>D(t.id,i),className:`p-3 rounded-lg border text-left text-xs transition-all ${f}`,children:o},i)})}),b&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${a?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:a?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{C({}),_(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>_(!0),disabled:Object.keys(v).length<g.length,className:"px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-sky-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{se as default};
