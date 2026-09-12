import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{ae as k,S as O,k as F,B as C,aa as T,aM as B,f as P,g as A}from"./vendor-icons-ri6cs58t.js";const z=`"""\r
01_pairplot_iris_demo.py\r
Title: Automated Multivariable Exploratory Grid with sns.pairplot()\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 01: sns.pairplot() Pairwise Relationships")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Swadeep")\r
    print("=" * 65)\r
\r
    # In Machine Learning EDA, \`sns.pairplot()\` plots:\r
    # 1. Off-diagonal elements: Bivariate scatter plots between every feature pair (X_i vs X_j)\r
    # 2. Diagonal elements: Univariate distribution (KDE or Histogram) for each individual feature!\r
\r
    iris = sns.load_dataset("iris")\r
    print("\\nDataset: Iris dataset preview:")\r
    print(iris.head(4))\r
\r
    # Generate pairwise plot grouped by flower species\r
    g = sns.pairplot(\r
        data=iris,\r
        hue="species",\r
        diag_kind="kde",\r
        palette="bright",\r
        corner=False # Full grid matrix\r
    )\r
\r
    g.fig.subplots_adjust(top=0.94)\r
    g.fig.suptitle("Iris Feature Pairwise Scatter & Diagonal KDE Matrix", fontsize=13)\r
    print("✓ Successfully created Iris multi-feature pair plot.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,K=`"""\r
02_pairplot_hue_palette.py\r
Title: Corner Pairplot Optimization and Diagonal Customization\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 02: Reducing Clutter with corner=True")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # For datasets with many features (e.g. 10 features = 100 subplots),\r
    # pairplot can be slow and redundant.\r
    # Setting \`corner=True\` plots only the lower triangle!\r
\r
    tips = sns.load_dataset("tips")\r
\r
    g = sns.pairplot(\r
        data=tips,\r
        hue="sex",\r
        diag_kind="hist",\r
        corner=True, # Suppresses upper triangle\r
        palette="husl",\r
        plot_kws={"alpha": 0.6, "s": 35}\r
    )\r
\r
    g.fig.subplots_adjust(top=0.92)\r
    g.fig.suptitle("Corner Pair Plot on Restaurant Tips", fontsize=12)\r
    print("✓ Successfully rendered memory-efficient corner pairplot.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,W=`"""\r
03_pairgrid_custom_mapping.py\r
Title: Advanced Custom Subplot Mapping with PairGrid\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import seaborn as sns\r
import matplotlib.pyplot as plt\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Seaborn Essentials Lab 03: Precision Control with sns.PairGrid()")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Mahima")\r
    print("=" * 65)\r
\r
    # \`sns.pairplot()\` is a high-level convenience wrapper over \`sns.PairGrid()\`.\r
    # With PairGrid, you can map different plot types to upper, diagonal, and lower quadrants!\r
\r
    iris = sns.load_dataset("iris")\r
    g = sns.PairGrid(iris, hue="species", palette="Set1")\r
\r
    # 1. Upper quadrant: Scatter plots\r
    g.map_upper(sns.scatterplot, alpha=0.7)\r
    # 2. Diagonal quadrant: KDE curves\r
    g.map_diag(sns.kdeplot, fill=True)\r
    # 3. Lower quadrant: 2D KDE contour density maps!\r
    g.map_lower(sns.kdeplot, levels=5)\r
\r
    g.add_legend()\r
    print("✓ Successfully executed advanced tripartite PairGrid mapping.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,I=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 8 - PAIR PLOT (SNS.PAIRPLOT)\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. PURPOSE OF PAIRPLOT IN MACHINE LEARNING:\r
--------------------------------------------------------------------------------\r
- Pairplot (\`sns.pairplot()\`) creates an N x N matrix of subplots for all N numerical \r
  features in a dataset.\r
- Off-Diagonal Subplots: Bivariate scatter plots showing linear/non-linear relationships, \r
  clusters, and separability between features.\r
- Diagonal Subplots: Univariate distribution for a single feature (either 'kde' or 'hist').\r
\r
2. ESSENTIAL PARAMETERS:\r
--------------------------------------------------------------------------------\r
- data: pandas DataFrame\r
- hue: categorical target column (colors dots by class to check class separability!)\r
- diag_kind: "kde" (smooth density) or "hist" (binned histogram)\r
- corner: True/False (if True, drops the redundant upper-triangular subplots)\r
- vars: list of specific columns to include (e.g. vars=['hours', 'score'])\r
- palette: "bright", "Set1", "viridis", "coolwarm", etc.\r
- kind: "scatter" or "reg" (overlays linear regression fit line!)\r
\r
3. UNDERLYING ENGINE: SNS.PAIRGRID\r
--------------------------------------------------------------------------------\r
PairGrid allows mapping custom plotting functions to different regions:\r
    g = sns.PairGrid(df, hue="class")\r
    g.map_upper(sns.scatterplot)\r
    g.map_diag(sns.histplot)\r
    g.map_lower(sns.kdeplot)\r
\r
4. ML INSIGHT:\r
--------------------------------------------------------------------------------\r
If pairplot scatter clouds show distinct separation along two features,\r
linear algorithms (like Logistic Regression or Linear SVM) will achieve \r
high classification accuracy!\r
`,b=[{id:1,question:"What does `sns.pairplot()` plot on the diagonal elements of the grid by default?",options:["Pie charts","Univariate distribution (KDE or Histogram) of each feature individually","Correlation coefficient numbers only","Blank white boxes"],correctAnswer:1,explanation:"Diagonal elements plot the univariate distribution of that specific feature (using `diag_kind='kde'` or `diag_kind='hist'`)."},{id:2,question:"What is the primary benefit of setting `corner=True` in `sns.pairplot()`?",options:["It speeds up computation and removes visual clutter by suppressing redundant upper-triangular subplots","It turns the plot into a 3D rotating cube","It adds rounded corners to each subplot window","It filters out null rows"],correctAnswer:0,explanation:"`corner=True` plots only the lower triangle and diagonal, cutting rendering time and removing duplicate pair comparisons."},{id:3,question:"How is `sns.PairGrid` related to `sns.pairplot`?",options:["PairGrid is the lower-level class that pairplot wraps; it allows custom mapping (map_upper, map_diag, map_lower)","They are completely unrelated packages","PairGrid is deprecated and should not be used","PairGrid only works with audio datasets"],correctAnswer:0,explanation:"`sns.PairGrid` is the underlying flexible grid class that allows assigning different plot types to upper, lower, and diagonal quadrants."},{id:4,question:"Why is `hue='target_class'` so useful when examining pairplots for classification datasets?",options:["It instantly reveals whether classes form separable clusters in feature space","It converts text into embeddings","It normalizes all columns to mean 0","It encodes audio tracks"],correctAnswer:0,explanation:"Coloring by target class lets you visually assess feature separability and cluster boundaries across all feature pairs."}],h=["Hours","Projects","ExamScore"];function V(){const[p,E]=l.useState("interactive"),[g,D]=l.useState(0),[x,v]=l.useState(!1),[c,G]=l.useState(!1),[f,L]=l.useState("kde"),[n,M]=l.useState(!0),[m,$]=l.useState(null),[j,y]=l.useState({}),[u,N]=l.useState(!1),w=[{name:"01_pairplot_iris_demo.py",code:z},{name:"02_pairplot_hue_palette.py",code:K},{name:"03_pairgrid_custom_mapping.py",code:W}],S=t=>{navigator.clipboard.writeText(t),v(!0),setTimeout(()=>v(!1),2e3)},R=(t,r)=>{u||y(i=>({...i,[t]:r}))},H=()=>{let t=0;return b.forEach(r=>{j[r.id]===r.correctAnswer&&t++}),t};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 border border-amber-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(k,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 8"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Pair Plot with sns.pairplot()"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Automate multivariable exploratory data analysis (EDA). Generate N×N scatter-plot matrices with diagonal KDE/histogram density curves."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Pairplot Grid Studio",icon:O},{id:"code",label:"Python Code Lab",icon:F},{id:"notes",label:"Revision Notes",icon:C},{id:"quiz",label:"Knowledge Check",icon:T}].map(t=>{const r=t.icon,i=p===t.id;return e.jsxs("button",{onClick:()=>E(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${i?"bg-amber-600 text-white shadow-lg shadow-amber-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(r,{className:"w-4 h-4"}),t.label]},t.id)})})]}),p==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(B,{className:"w-4 h-4"}),e.jsx("span",{children:"Pairplot Grid Layout Controls"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-300 font-medium",children:"Corner Mode (corner=True):"}),e.jsx("button",{onClick:()=>G(!c),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${c?"bg-amber-600 text-white":"bg-slate-800 text-slate-400"}`,children:c?"ON":"OFF"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Diagonal Subplot (diag_kind):"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["kde","hist"].map(t=>e.jsx("button",{onClick:()=>L(t),className:`px-3 py-2 rounded-lg text-xs font-mono uppercase transition-all ${f===t?"bg-amber-600 text-white border border-amber-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:t},t))})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-300 font-medium",children:'Group by Track (hue="Track"):'}),e.jsx("button",{onClick:()=>M(!n),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${n?"bg-amber-600 text-white":"bg-slate-800 text-slate-400"}`,children:n?"ON":"OFF"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-amber-400 font-semibold mb-1",children:"# Generated Code:"}),e.jsx("div",{className:"text-indigo-300",children:"sns.pairplot("}),e.jsx("div",{className:"pl-3 text-slate-400",children:"data=df,"}),n&&e.jsx("div",{className:"pl-3 text-amber-300",children:'hue="Track",'}),e.jsxs("div",{className:"pl-3 text-cyan-300",children:['diag_kind="',f,'",']}),e.jsxs("div",{className:"pl-3 text-emerald-300",children:["corner=",c?"True":"False"]}),e.jsx("div",{className:"text-indigo-300",children:")"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(k,{className:"w-4 h-4 text-amber-400"}),"Live 3×3 Pairplot Matrix Grid"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"3 Continuous Features"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"480",height:"290",viewBox:"0 0 480 290",className:"max-w-full",children:[h.map((t,r)=>h.map((i,d)=>{if(c&&d>r)return null;const o=r===d,a=65+d*125,s=25+r*80;return e.jsxs("g",{className:"cursor-pointer",onClick:()=>$({row:t,col:i,isDiag:o}),children:[e.jsx("rect",{x:a,y:s,width:110,height:68,fill:"#090d16",stroke:"#334155",strokeWidth:"1",rx:"4"}),o?f==="kde"?e.jsx("path",{d:`M ${a+10} ${s+55} Q ${a+35} ${s+15}, ${a+55} ${s+15} T ${a+100} ${s+55}`,fill:"none",stroke:n?"#f59e0b":"#38bdf8",strokeWidth:"2.5"}):e.jsxs("g",{fill:n?"#f59e0b":"#38bdf8",opacity:"0.7",children:[e.jsx("rect",{x:a+15,y:s+38,width:"16",height:"22",rx:"1"}),e.jsx("rect",{x:a+35,y:s+18,width:"16",height:"42",rx:"1"}),e.jsx("rect",{x:a+55,y:s+10,width:"16",height:"50",rx:"1"}),e.jsx("rect",{x:a+75,y:s+28,width:"16",height:"32",rx:"1"})]}):e.jsxs("g",{children:[e.jsx("circle",{cx:a+25,cy:s+48,r:"3",fill:n?"#ec4899":"#38bdf8"}),e.jsx("circle",{cx:a+45,cy:s+38,r:"3",fill:n?"#3b82f6":"#38bdf8"}),e.jsx("circle",{cx:a+65,cy:s+26,r:"3",fill:n?"#10b981":"#38bdf8"}),e.jsx("circle",{cx:a+85,cy:s+16,r:"3",fill:n?"#ec4899":"#38bdf8"}),e.jsx("circle",{cx:a+72,cy:s+22,r:"3",fill:n?"#3b82f6":"#38bdf8"})]}),e.jsx("text",{x:a+6,y:s+14,fill:"#64748b",fontSize:"8",fontFamily:"monospace",children:o?`${t} (PDF)`:`${i} vs ${t}`})]},`${r}-${d}`)})),h.map((t,r)=>e.jsx("text",{x:"55",y:25+r*80+38,fill:"#cbd5e1",fontSize:"10",fontWeight:"bold",textAnchor:"end",children:t},t)),h.map((t,r)=>e.jsx("text",{x:65+r*125+55,y:"280",fill:"#cbd5e1",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:t},t))]})}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400",children:[m?e.jsxs("span",{className:"text-amber-300 font-mono font-bold",children:["🔍 Selected Subplot: ",m.col," × ",m.row," (",m.isDiag?"Univariate PDF":"Bivariate Scatter",")"]}):e.jsx("span",{className:"text-slate-500 italic",children:"Click any mini-subplot tile to inspect relationship details"}),e.jsx("span",{className:"font-mono text-slate-400",children:c?"6 Subplots (Corner)":"9 Subplots (Full 3×3)"})]})]})]}),p==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:w.map((t,r)=>e.jsx("button",{onClick:()=>D(r),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${g===r?"bg-amber-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>S(w[g].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[x?e.jsx(P,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(A,{className:"w-3.5 h-3.5"}),x?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-amber-300 overflow-x-auto leading-relaxed max-h-[480px]",children:w[g].code})})]}),p==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-semibold text-sm",children:[e.jsx(C,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 8 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>S(I),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[x?e.jsx(P,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(A,{className:"w-3.5 h-3.5"}),x?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:I})]}),p==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-semibold text-sm",children:[e.jsx(T,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 8 Knowledge Assessment (4 Questions)"})]}),u&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold",children:["Score: ",H()," / ",b.length]})]}),e.jsx("div",{className:"space-y-6",children:b.map((t,r)=>{const i=j[t.id],d=i===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[r+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((_,o)=>{const a=i===o;let s="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return u?o===t.correctAnswer?s="bg-emerald-950/70 border-emerald-500 text-emerald-300":a&&(s="bg-rose-950/70 border-rose-500 text-rose-300"):a&&(s="bg-amber-600/30 border-amber-500 text-amber-200"),e.jsx("button",{onClick:()=>R(t.id,o),className:`p-3 rounded-lg border text-left text-xs transition-all ${s}`,children:_},o)})}),u&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${d?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:d?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{y({}),N(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>N(!0),disabled:Object.keys(j).length<b.length,className:"px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-amber-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{V as default};
