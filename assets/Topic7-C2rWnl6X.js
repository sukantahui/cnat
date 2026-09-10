import{b as o,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{aW as A,S as D,k as q,B as M,aa as R,aM as W,f as H,g as L}from"./vendor-icons-DFC0rBCP.js";const G=`"""\r
01_df_corr_matrix.py\r
Title: Pearson Correlation Matrix Computation and Heatmap Mapping\r
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
    print("🎓 Seaborn Essentials Lab 01: Pearson Feature Correlation Heatmap")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Swadeep")\r
    print("=" * 65)\r
\r
    # In Machine Learning Exploratory Data Analysis (EDA),\r
    # visualizing pairwise Pearson correlation coefficients (r in [-1, +1]) is vital\r
    # to identify multicollinearity and strong predictive features.\r
\r
    iris = sns.load_dataset("iris")\r
    # In Pandas >= 2.0, df.corr(numeric_only=True) ensures only numeric columns are correlated\r
    corr_matrix = iris.corr(numeric_only=True)\r
\r
    print("\\n📊 Iris Feature Correlation Matrix (r):")\r
    print(corr_matrix.round(3))\r
\r
    plt.figure(figsize=(7, 5.5))\r
    # Diverging colormap with center=0 is standard best practice for correlations\r
    sns.heatmap(\r
        corr_matrix,\r
        annot=True,\r
        fmt=".2f",\r
        cmap="coolwarm",\r
        vmin=-1,\r
        vmax=1,\r
        center=0,\r
        square=True,\r
        linewidths=1.5,\r
        cbar_kws={"shrink": 0.8}\r
    )\r
\r
    plt.title("Iris Feature Correlation Heatmap (center=0, vmin=-1, vmax=1)", fontsize=11, pad=10)\r
    plt.tight_layout()\r
    print("\\n✓ Successfully plotted standard correlation heatmap.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,U=`"""\r
02_mask_upper_triangle.py\r
Title: Eliminating Redundancy: Masking Upper Triangle in Correlation Heatmaps\r
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
    print("🎓 Seaborn Essentials Lab 02: Lower-Triangle Correlation Masking")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # Since corr(A, B) == corr(B, A), a full matrix is redundant.\r
    # We use np.triu() to create a boolean mask for the upper triangle!\r
\r
    tips = sns.load_dataset("tips")\r
    corr = tips.corr(numeric_only=True)\r
\r
    # Generate a boolean mask for the upper triangle\r
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
    plt.title("Masked Lower Triangle Correlation Heatmap", fontsize=11, pad=10)\r
    plt.tight_layout()\r
    print("✓ Successfully rendered lower-triangle masked correlation heatmap.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,X=`"""\r
03_feature_selection_corr.py\r
Title: Identifying Multicollinearity and Filtering Target Correlations\r
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
    print("🎓 Seaborn Essentials Lab 03: Feature Selection via Target Correlation")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Abhronila")\r
    print("=" * 65)\r
\r
    # Simulated Housing dataset\r
    np.random.seed(42)\r
    n = 200\r
    sqft = np.random.uniform(800, 3500, n)\r
    bedrooms = np.random.randint(1, 6, n)\r
    bathrooms = bedrooms * 0.7 + np.random.normal(0, 0.3, n)\r
    age = np.random.uniform(1, 40, n)\r
    price = sqft * 300 + bedrooms * 15000 - age * 2000 + np.random.normal(0, 20000, n)\r
\r
    df_house = pd.DataFrame({\r
        "sqft": sqft,\r
        "bedrooms": bedrooms,\r
        "bathrooms": bathrooms,\r
        "age": age,\r
        "price": price\r
    })\r
\r
    # Compute correlation with target variable only ('price')\r
    target_corr = df_house.corr()[["price"]].sort_values(by="price", ascending=False)\r
    print("\\n🔍 Correlations with Target Feature ('price'):")\r
    print(target_corr.round(3))\r
\r
    plt.figure(figsize=(4, 6))\r
    sns.heatmap(\r
        target_corr,\r
        annot=True,\r
        fmt=".3f",\r
        cmap="coolwarm",\r
        vmin=-1,\r
        vmax=1,\r
        center=0,\r
        linewidths=1\r
    )\r
    plt.title("Feature Importance Ranking via Correlation", fontsize=11)\r
    plt.tight_layout()\r
    print("✓ Successfully rendered 1D target feature correlation bar.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 7 - CORRELATION MATRIX VISUALIZATION\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS A CORRELATION MATRIX?\r
--------------------------------------------------------------------------------\r
A correlation matrix displays Pearson correlation coefficients (r) between all \r
pairs of numerical features in a dataset.\r
- Value range: [-1.0, +1.0]\r
  * +1.0: Perfect positive linear relationship (as X rises, Y rises).\r
  * 0.0: No linear relationship.\r
  * -1.0: Perfect negative linear relationship (as X rises, Y falls).\r
\r
2. BEST PRACTICES FOR CORRELATION HEATMAPS:\r
--------------------------------------------------------------------------------\r
a) Always use a diverging colormap (e.g., cmap="coolwarm", "vlag", or "RdBu_r").\r
b) Set center=0, vmin=-1, vmax=1 so 0 is neutral and extremes are balanced.\r
c) Set annot=True and fmt=".2f" to show numeric coefficients.\r
d) Set square=True to keep cells square for visual balance.\r
e) Mask the redundant upper triangle using \`mask = np.triu(np.ones_like(corr, dtype=bool))\`.\r
\r
3. MACHINE LEARNING APPLICATIONS:\r
--------------------------------------------------------------------------------\r
- Multicollinearity Detection: If two independent features have r > 0.85 (e.g. sqft and num_rooms),\r
  one of them may need to be dropped to prevent instability in Linear/Logistic Regression.\r
- Feature Selection: Correlating all features against the target variable (y)\r
  ranks which features hold the strongest predictive signal.\r
`,b=[{id:1,question:"Why should `vmin=-1`, `vmax=1`, and `center=0` always be set when plotting a correlation matrix heatmap?",options:["To force the colorbar to symmetrically align neutral 0.0 with the midpoint color and range from -1 to +1","Because Seaborn crashes without these parameters","To convert values into percentages","To remove negative numbers"],correctAnswer:0,explanation:"Setting vmin=-1, vmax=1, and center=0 ensures diverging colormaps (like coolwarm) treat 0 as neutral white/grey, negative values as blue, and positive as red."},{id:2,question:"How do you mask the redundant upper-triangular half of a symmetric correlation matrix in Seaborn?",options:["Pass mask=np.triu(np.ones_like(corr, dtype=bool)) to sns.heatmap()","Pass hide_upper=True","Delete half the columns in the DataFrame","Pass triangle='lower'"],correctAnswer:0,explanation:"`np.triu(np.ones_like(corr, dtype=bool))` creates a boolean mask for the upper triangle which `sns.heatmap(mask=...)` hides."},{id:3,question:"What ML issue can be diagnosed when two predictor features show an extremely high correlation (e.g. r = 0.96)?",options:["Overfitting","Multicollinearity","Underfitting","Vanishing Gradient"],correctAnswer:1,explanation:"High pairwise correlation between independent features indicates multicollinearity, which can destabilize linear regression coefficients."},{id:4,question:"Which colormap is most recommended for correlation matrices?",options:["Sequential colormaps like Greys","Diverging colormaps like coolwarm, vlag, or RdBu_r","Single solid black color","Random RGB palette"],correctAnswer:1,explanation:"Diverging colormaps (coolwarm, vlag) visually distinguish positive correlations (+1) from negative correlations (-1) around a neutral center (0)."}],w=["Hours","Attend","Projects","ExamScore"],Q=[[1,.72,.81,.94],[.72,1,.64,.76],[.81,.64,1,.88],[.94,.76,.88,1]];function Y(){const[c,I]=o.useState("interactive"),[f,F]=o.useState(0),[p,N]=o.useState(!1),[l,$]=o.useState(!1),[g,z]=o.useState("coolwarm"),[v,P]=o.useState(0),[a,k]=o.useState(null),[y,S]=o.useState({}),[x,C]=o.useState(!1),j=[{name:"01_df_corr_matrix.py",code:G},{name:"02_mask_upper_triangle.py",code:U},{name:"03_feature_selection_corr.py",code:X}],_=r=>{navigator.clipboard.writeText(r),N(!0),setTimeout(()=>N(!1),2e3)},B=(r,t)=>{x||S(s=>({...s,[r]:t}))},O=()=>{let r=0;return b.forEach(t=>{y[t.id]===t.correctAnswer&&r++}),r},u=r=>{if(Math.abs(r)<v&&r!==1)return"#1e293b";if(g==="coolwarm")if(r>=0){const t=Math.round(239*r+50*(1-r)),s=Math.round(68*(1-r)+50*(1-r)),n=Math.round(68*(1-r)+50*(1-r));return`rgb(${t}, ${s}, ${n})`}else{const t=Math.abs(r),s=Math.round(59*(1-t)+50*(1-t)),n=Math.round(130*(1-t)+50*(1-t)),h=Math.round(246*t+50*(1-t));return`rgb(${s}, ${n}, ${h})`}else if(r>=0){const t=Math.round(225*r+40*(1-r)),s=Math.round(80*r+40*(1-r)),n=Math.round(80*r+40*(1-r));return`rgb(${t}, ${s}, ${n})`}else{const t=Math.abs(r);return`rgb(${Math.round(40*(1-t))}, ${Math.round(120*t+40*(1-t))}, ${Math.round(220*t)})`}};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 border border-rose-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(A,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 7"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Correlation Matrix Visualization"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Diagnose collinearity, feature correlations, and target associations. Master upper-triangle masking, symmetric diverging scales, and ML feature selection."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Correlation Matrix Studio",icon:D},{id:"code",label:"Python Code Lab",icon:q},{id:"notes",label:"Revision Notes",icon:M},{id:"quiz",label:"Knowledge Check",icon:R}].map(r=>{const t=r.icon,s=c===r.id;return e.jsxs("button",{onClick:()=>I(r.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${s?"bg-rose-600 text-white shadow-lg shadow-rose-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(t,{className:"w-4 h-4"}),r.label]},r.id)})})]}),c==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(W,{className:"w-4 h-4"}),e.jsx("span",{children:"Correlation Controls"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-300 font-medium",children:"Mask Upper Triangle:"}),e.jsx("button",{onClick:()=>$(!l),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${l?"bg-rose-600 text-white":"bg-slate-800 text-slate-400"}`,children:l?"ON":"OFF"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Diverging Colormap:"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["coolwarm","vlag"].map(r=>e.jsx("button",{onClick:()=>z(r),className:`px-3 py-2 rounded-lg text-xs font-mono transition-all ${g===r?"bg-rose-600 text-white border border-rose-400 shadow":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:r},r))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-300",children:"Highlight Threshold (|r| >=):"}),e.jsx("span",{className:"font-mono text-rose-400",children:v.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.0",max:"0.9",step:"0.05",value:v,onChange:r=>P(Number(r.target.value)),className:"w-full accent-rose-500 cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-rose-400 font-semibold mb-1",children:"# Generated Code:"}),e.jsx("div",{className:"text-slate-400",children:"corr = df.corr(numeric_only=True)"}),l&&e.jsx("div",{className:"text-amber-300",children:"mask = np.triu(np.ones_like(corr, dtype=bool))"}),e.jsx("div",{className:"text-indigo-300",children:"sns.heatmap("}),e.jsx("div",{className:"pl-3 text-slate-400",children:"corr,"}),l&&e.jsx("div",{className:"pl-3 text-amber-300",children:"mask=mask,"}),e.jsx("div",{className:"pl-3 text-rose-300",children:'annot=True, fmt=".2f",'}),e.jsxs("div",{className:"pl-3 text-emerald-300",children:['cmap="',g,'", vmin=-1, vmax=1, center=0,']}),e.jsx("div",{className:"pl-3 text-slate-400",children:"square=True, linewidths=1.5"}),e.jsx("div",{className:"text-indigo-300",children:")"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(A,{className:"w-4 h-4 text-rose-400"}),"Live Correlation Matrix (Pearson r)"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Student Dataset Features"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"490",height:"290",viewBox:"0 0 490 290",className:"max-w-full",children:[w.map((r,t)=>e.jsx("text",{x:110+t*70+35,y:"25",fill:"#e2e8f0",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:r},r)),w.map((r,t)=>e.jsxs("g",{children:[e.jsx("text",{x:"95",y:45+t*52+30,fill:"#cbd5e1",fontSize:"11",fontWeight:"600",textAnchor:"end",children:r}),Q[t].map((s,n)=>{if(l&&n>t)return null;const i=110+n*70,m=45+t*52,d=u(s),T=a&&a.row===t&&a.col===n;return e.jsxs("g",{className:"cursor-pointer",onMouseEnter:()=>k({feat1:r,feat2:w[n],r:s,row:t,col:n}),onMouseLeave:()=>k(null),children:[e.jsx("rect",{x:i+1,y:m+1,width:68,height:50,fill:d,stroke:T?"#ffffff":"#0f172a",strokeWidth:T?2:1,rx:"3"}),e.jsx("text",{x:i+35,y:m+30,fill:"#ffffff",fontSize:"12",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:s.toFixed(2)})]},`${t}-${n}`)})]},r)),e.jsxs("g",{transform:"translate(425, 45)",children:[e.jsx("rect",{x:"0",y:"0",width:"16",height:"208",fill:"url(#corrGradient)",rx:"2",stroke:"#475569",strokeWidth:"1"}),e.jsx("text",{x:"22",y:"10",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"+1.0"}),e.jsx("text",{x:"22",y:"109",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"0.0"}),e.jsx("text",{x:"22",y:"208",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"-1.0"})]}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"corrGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:u(1)}),e.jsx("stop",{offset:"50%",stopColor:u(0)}),e.jsx("stop",{offset:"100%",stopColor:u(-1)})]})})]})}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400",children:[a?e.jsxs("span",{className:"text-rose-300 font-mono font-bold",children:["🔍 ",a.feat1," ↔ ",a.feat2," : r = ",a.r.toFixed(2)," ",a.r>=.85&&a.feat1!==a.feat2?"⚠ High Collinearity!":a.r>=.7?"✓ Strong Linear Signal":"• Moderate Relationship"]}):e.jsx("span",{className:"text-slate-500 italic",children:"Hover any correlation tile to inspect ML relationship strength"}),e.jsx("span",{className:"font-mono text-slate-400",children:"Pearson Correlation r"})]})]})]}),c==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:j.map((r,t)=>e.jsx("button",{onClick:()=>F(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${f===t?"bg-rose-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:r.name},r.name))}),e.jsxs("button",{onClick:()=>_(j[f].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[p?e.jsx(H,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(L,{className:"w-3.5 h-3.5"}),p?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-rose-300 overflow-x-auto leading-relaxed max-h-[480px]",children:j[f].code})})]}),c==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-semibold text-sm",children:[e.jsx(M,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 7 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>_(E),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[p?e.jsx(H,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(L,{className:"w-3.5 h-3.5"}),p?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:E})]}),c==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-semibold text-sm",children:[e.jsx(R,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 7 Knowledge Assessment (4 Questions)"})]}),x&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold",children:["Score: ",O()," / ",b.length]})]}),e.jsx("div",{className:"space-y-6",children:b.map((r,t)=>{const s=y[r.id],n=s===r.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[t+1,". ",r.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:r.options.map((h,i)=>{const m=s===i;let d="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return x?i===r.correctAnswer?d="bg-emerald-950/70 border-emerald-500 text-emerald-300":m&&(d="bg-rose-950/70 border-rose-500 text-rose-300"):m&&(d="bg-rose-600/30 border-rose-500 text-rose-200"),e.jsx("button",{onClick:()=>B(r.id,i),className:`p-3 rounded-lg border text-left text-xs transition-all ${d}`,children:h},i)})}),x&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${n?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:n?"✓ Correct: ":"✗ Incorrect: "}),r.explanation]})]},r.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{S({}),C(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>C(!0),disabled:Object.keys(y).length<b.length,className:"px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-rose-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{Y as default};
