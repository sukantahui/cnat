import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{c2 as M,S as B,k as K,B as P,aa as E,aM as G,aB as F,f as R,g as H}from"./vendor-icons-DFC0rBCP.js";const U=`"""\r
01_ml_feature_correlations.py\r
Title: Worked Example 2: Complete ML Feature Correlation Heatmap Pipeline\r
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
    print("🎓 Seaborn Worked Example 2: Production Correlation Analysis")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Abhronila")\r
    print("=" * 65)\r
\r
    # 1. Simulate California / Barrackpore Housing Features\r
    np.random.seed(42)\r
    n = 100\r
    sqft = np.random.uniform(700, 3200, n)\r
    rooms = np.round(sqft / 450 + np.random.normal(0, 0.4, n))\r
    dist_metro = np.random.uniform(0.5, 15.0, n) # km from Barrackpore station\r
    age = np.random.uniform(1, 35, n)\r
    price_lakhs = (sqft * 0.045 + rooms * 3.5 - dist_metro * 1.8 - age * 0.4 + np.random.normal(0, 5, n))\r
\r
    df = pd.DataFrame({\r
        "Area_SqFt": sqft,\r
        "Rooms": rooms,\r
        "Metro_Dist_KM": dist_metro,\r
        "Property_Age": age,\r
        "Price_Lakhs": price_lakhs\r
    })\r
\r
    # 2. Compute Pearson correlation matrix\r
    corr = df.corr(numeric_only=True)\r
    print("\\nCorrelation Matrix:")\r
    print(corr.round(2))\r
\r
    # 3. Mask upper triangle for clean EDA report\r
    mask = np.triu(np.ones_like(corr, dtype=bool))\r
\r
    # 4. Render diverging heatmap\r
    sns.set_theme(style="white")\r
    plt.figure(figsize=(7, 6))\r
    \r
    sns.heatmap(\r
        corr,\r
        mask=mask,\r
        annot=True,\r
        fmt=".2f",\r
        cmap="coolwarm",\r
        vmin=-1,\r
        vmax=1,\r
        center=0,\r
        square=True,\r
        linewidths=1.5,\r
        cbar_kws={"shrink": 0.8, "label": "Pearson Correlation (r)"}\r
    )\r
\r
    plt.title("Housing Dataset: Feature Multicollinearity & Price Predictors", fontsize=12, pad=12)\r
    plt.tight_layout()\r
    print("✓ Successfully created production-grade feature correlation heatmap.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,X=`"""\r
02_filtered_correlations_heatmap.py\r
Title: Filtering Strong Predictive Features (|r| > 0.5) with sns.heatmap\r
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
    print("🎓 Seaborn Worked Example 2: Target-Centric Filtered Correlation")\r
    print("   Instructor: Sukanta Hui")\r
    print("=" * 65)\r
\r
    # In high-dimensional datasets (e.g. 50+ features),\r
    # inspecting all pairwise cells is overwhelming.\r
    # We filter features having correlation with target > 0.5:\r
\r
    iris = sns.load_dataset("iris")\r
    corr = iris.corr(numeric_only=True)\r
\r
    # Let's rank features by correlation with petal length\r
    target_rank = corr[["petal_length"]].sort_values(by="petal_length", ascending=False)\r
    print("\\nFeature Correlation with 'petal_length':")\r
    print(target_rank)\r
\r
    plt.figure(figsize=(4, 5))\r
    sns.heatmap(\r
        target_rank,\r
        annot=True,\r
        fmt=".3f",\r
        cmap="mako",\r
        vmin=-1,\r
        vmax=1,\r
        center=0,\r
        linewidths=1.2\r
    )\r
\r
    plt.title("Target Ranking: petal_length", fontsize=11)\r
    plt.tight_layout()\r
    print("✓ Successfully created filtered target correlation strip.")\r
\r
if __name__ == "__main__":\r
    main()\r
`,Q=`"""\r
03_multicollinearity_analysis.py\r
Title: Automated Multicollinearity Drop Advice from Correlation Heatmaps\r
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
    print("🎓 Seaborn Worked Example 2: Multicollinearity Detection Algorithm")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Swadeep")\r
    print("=" * 65)\r
\r
    # If correlation between two predictors is > 0.85, they supply redundant signal\r
    # and inflate Variance Inflation Factor (VIF).\r
\r
    data = {\r
        "x1_temp_c": [20, 25, 30, 35, 40],\r
        "x2_temp_f": [68, 77, 86, 95, 104], # Perfect collinearity with x1 (r = 1.0)\r
        "x3_humidity": [80, 70, 60, 50, 40],\r
        "y_icecream_sales": [100, 150, 220, 290, 360]\r
    }\r
    df = pd.DataFrame(data)\r
\r
    corr = df.corr()\r
    print("Correlation matrix with collinear features:")\r
    print(corr.round(2))\r
\r
    # Automated check:\r
    redundant_pairs = []\r
    cols = corr.columns\r
    for i in range(len(cols)):\r
        for j in range(i + 1, len(cols)):\r
            if abs(corr.iloc[i, j]) > 0.90 and "y_icecream_sales" not in [cols[i], cols[j]]:\r
                redundant_pairs.append((cols[i], cols[j], corr.iloc[i, j]))\r
\r
    print("\\n🚨 Multicollinearity Detected:")\r
    for f1, f2, val in redundant_pairs:\r
        print(f"   • High redundancy between '{f1}' and '{f2}' (r = {val:.2f}) -> Drop one before ML modeling!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,D=`================================================================================\r
SEABORN ESSENTIALS: TOPIC 12 - WORKED EXAMPLE 2 (FEATURE CORRELATION HEATMAP)\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. COMPLETE WORKED EXAMPLE RECIPE:\r
--------------------------------------------------------------------------------\r
Task: Prepare a feature correlation heatmap for a housing price prediction dataset.\r
\r
Recipe:\r
1. Load dataset: \`df = pd.read_csv(...)\`\r
2. Compute Pearson matrix: \`corr = df.corr(numeric_only=True)\`\r
3. Create upper mask: \`mask = np.triu(np.ones_like(corr, dtype=bool))\`\r
4. Setup canvas: \`plt.figure(figsize=(8, 6))\`\r
5. Render heatmap:\r
   sns.heatmap(\r
       corr,\r
       mask=mask,\r
       annot=True,\r
       fmt=".2f",\r
       cmap="coolwarm",\r
       vmin=-1,\r
       vmax=1,\r
       center=0,\r
       square=True,\r
       linewidths=1.0,\r
       cbar_kws={"label": "Pearson r"}\r
   )\r
6. Add title and labels: \`plt.title("Housing Dataset: Feature Correlations")\`\r
\r
2. INTERPRETING MACHINE LEARNING CORRELATIONS:\r
--------------------------------------------------------------------------------\r
- Positive Correlations with Target (r > +0.6):\r
  Features like \`Area_SqFt\` and \`Rooms\` have high predictive value. Keep them!\r
- Negative Correlations with Target (r < -0.4):\r
  Features like \`Metro_Dist_KM\` and \`Property_Age\` naturally decrease price. Keep them!\r
- Multicollinear Independent Pairs (r(X1, X2) > 0.85):\r
  If \`Area_SqFt\` and \`Rooms\` correlate at r = 0.92, they provide duplicate variance.\r
  Consider dropping one or applying PCA to prevent unstable regression beta coefficients.\r
`,b=[{id:1,question:"In a real estate pricing dataset, if `Area_SqFt` and `Room_Count` show r = 0.94, what problem does this introduce into Linear Regression?",options:["Overfitting due to high Multicollinearity and inflated coefficient variance","Gradient explosion in Pandas","Underfitting","Categorical label imbalance"],correctAnswer:0,explanation:"A correlation of 0.94 between independent variables causes severe multicollinearity, leading to unstable and unreliable regression beta coefficients."},{id:2,question:"Why do data scientists rank features by `corr[['Target_Variable']].sort_values()` during preprocessing?",options:["To quickly select top features with strong positive/negative linear relationships to the target","To convert numbers to text strings","To delete missing NaN rows","To invert the matrix"],correctAnswer:0,explanation:"Sorting the single-column correlation against the target acts as a fast heuristic for filter-based feature selection."},{id:3,question:"Which parameter in `sns.heatmap()` shrinks or adds custom labels to the colorbar scale?",options:["cbar_kws={'shrink': 0.8, 'label': 'Pearson r'}","scale_bar={'size': 'small'}","colorbar_options={'shrink': 0.8}","legend_custom={'label': 'Pearson r'}"],correctAnswer:0,explanation:"`cbar_kws` is a dictionary that passes keyword arguments (like shrink, label, orientation) directly to the underlying Matplotlib colorbar."},{id:4,question:"In `df.corr(numeric_only=True)`, what error does `numeric_only=True` prevent in newer Pandas versions (>= 2.0)?",options:["TypeError when the DataFrame contains string/object columns that cannot be converted to floats","Memory leak errors","Network connection timeouts","Infinite recursion errors"],correctAnswer:0,explanation:"In Pandas 2.0+, `numeric_only=True` ensures string/categorical columns are cleanly bypassed without throwing a TypeError."}],g=["Area_SqFt","Rooms","Metro_KM","Age","Price"],V=[[1,.91,-.42,-.15,.88],[.91,1,-.38,-.12,.82],[-.42,-.38,1,.05,-.58],[-.15,-.12,.05,1,-.34],[.88,.82,-.58,-.34,1]];function Z(){const[d,L]=a.useState("interactive"),[y,z]=a.useState(0),[m,w]=a.useState(!1),[x,O]=a.useState(!0),[j,W]=a.useState(.85),[c,I]=a.useState(!1),[o,k]=a.useState(null),[v,C]=a.useState({}),[u,S]=a.useState(!1),_=[{name:"01_ml_feature_correlations.py",code:U},{name:"02_filtered_correlations_heatmap.py",code:X},{name:"03_multicollinearity_analysis.py",code:Q}],T=r=>{navigator.clipboard.writeText(r),w(!0),setTimeout(()=>w(!1),2e3)},$=(r,t)=>{u||C(n=>({...n,[r]:t}))},q=()=>{let r=0;return b.forEach(t=>{v[t.id]===t.correctAnswer&&r++}),r},h=r=>{if(r>=0){const t=Math.round(239*r+50*(1-r)),n=Math.round(68*(1-r)+50*(1-r)),s=Math.round(68*(1-r)+50*(1-r));return`rgb(${t}, ${n}, ${s})`}else{const t=Math.abs(r),n=Math.round(59*(1-t)+50*(1-t)),s=Math.round(130*(1-t)+50*(1-t)),f=Math.round(246*t+50*(1-t));return`rgb(${n}, ${s}, ${f})`}};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-red-950 via-slate-900 to-indigo-950 border border-red-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-red-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-red-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(M,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 12 (Worked Example 2)"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Worked Example 2: Heatmap of Feature Correlations"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"End-to-end Machine Learning feature correlation case study on a Real Estate Price dataset. Diagnose collinear pairs and select top predictive indicators."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Correlation Case Studio",icon:B},{id:"code",label:"Python Code Lab",icon:K},{id:"notes",label:"Revision Notes",icon:P},{id:"quiz",label:"Knowledge Check",icon:E}].map(r=>{const t=r.icon,n=d===r.id;return e.jsxs("button",{onClick:()=>L(r.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${n?"bg-red-600 text-white shadow-lg shadow-red-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(t,{className:"w-4 h-4"}),r.label]},r.id)})})]}),d==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-red-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(G,{className:"w-4 h-4"}),e.jsx("span",{children:"Feature Selection & Masking"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-300 font-medium",children:"Mask Upper Triangle (np.triu):"}),e.jsx("button",{onClick:()=>O(!x),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${x?"bg-red-600 text-white":"bg-slate-800 text-slate-400"}`,children:x?"ON":"OFF"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-300 font-medium",children:"Highlight Target Feature ('Price'):"}),e.jsx("button",{onClick:()=>I(!c),className:`px-3 py-1 rounded-lg text-xs font-mono transition-all ${c?"bg-red-600 text-white":"bg-slate-800 text-slate-400"}`,children:c?"ON":"OFF"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsxs("span",{className:"text-slate-300 flex items-center gap-1",children:[e.jsx(F,{className:"w-3.5 h-3.5 text-amber-400"}),"Collinearity Alert (|r| >):"]}),e.jsx("span",{className:"font-mono text-amber-400",children:j.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.75",max:"0.95",step:"0.05",value:j,onChange:r=>W(Number(r.target.value)),className:"w-full accent-amber-500 cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono space-y-1.5",children:[e.jsxs("div",{className:"text-amber-400 font-bold flex items-center gap-1.5",children:[e.jsx(F,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"ML Diagnostic Engine:"})]}),e.jsxs("p",{className:"text-slate-300",children:["• ",e.jsx("span",{className:"text-rose-400 font-bold",children:"Area_SqFt ↔ Rooms (r = 0.91)"}),": High collinearity! Dropping 'Rooms' prevents coefficient variance inflation."]}),e.jsxs("p",{className:"text-emerald-300",children:["• ",e.jsx("span",{className:"font-bold",children:"Price Predictors"}),": Area (+0.88) & Metro Distance (-0.58) provide strong linear signals."]})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(M,{className:"w-4 h-4 text-red-400"}),"Housing Price Dataset Feature Correlation Matrix"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"5 Continuous Features"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"490",height:"290",viewBox:"0 0 490 290",className:"max-w-full",children:[g.map((r,t)=>e.jsx("text",{x:110+t*62+31,y:"25",fill:c&&r==="Price"?"#fbbf24":"#e2e8f0",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:r},r)),g.map((r,t)=>e.jsxs("g",{children:[e.jsx("text",{x:"95",y:45+t*45+26,fill:c&&r==="Price"?"#fbbf24":"#cbd5e1",fontSize:"10",fontWeight:"600",textAnchor:"end",children:r}),V[t].map((n,s)=>{if(x&&s>t)return null;const i=110+s*62,p=45+t*45,l=h(n),N=Math.abs(n)>=j&&t!==s&&r!=="Price"&&g[s]!=="Price",A=o&&o.row===t&&o.col===s;return e.jsxs("g",{className:"cursor-pointer",onMouseEnter:()=>k({f1:r,f2:g[s],r:n,isCollinear:N,row:t,col:s}),onMouseLeave:()=>k(null),children:[e.jsx("rect",{x:i+1,y:p+1,width:60,height:43,fill:l,stroke:N?"#f59e0b":A?"#ffffff":"#0f172a",strokeWidth:N?2.5:A?2:1,rx:"2"}),e.jsx("text",{x:i+31,y:p+26,fill:"#ffffff",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:n.toFixed(2)})]},`${t}-${s}`)})]},r)),e.jsxs("g",{transform:"translate(435, 45)",children:[e.jsx("rect",{x:"0",y:"0",width:"16",height:"225",fill:"url(#houseGrad)",rx:"2",stroke:"#475569",strokeWidth:"1"}),e.jsx("text",{x:"22",y:"10",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"+1.0"}),e.jsx("text",{x:"22",y:"115",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"0.0"}),e.jsx("text",{x:"22",y:"225",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"-1.0"})]}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"houseGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:h(1)}),e.jsx("stop",{offset:"50%",stopColor:h(0)}),e.jsx("stop",{offset:"100%",stopColor:h(-1)})]})})]})}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400",children:[o?e.jsxs("span",{className:"text-red-300 font-mono font-bold",children:["🔍 ",o.f1," ↔ ",o.f2," : r = ",o.r.toFixed(2)," ",o.isCollinear&&"⚠ Multicollinear Pair!"]}):e.jsx("span",{className:"text-slate-500 italic",children:"Hover any tile to inspect feature association"}),e.jsx("span",{className:"font-mono text-slate-400",children:"Dataset: Barrackpore Real Estate"})]})]})]}),d==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:_.map((r,t)=>e.jsx("button",{onClick:()=>z(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${y===t?"bg-red-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:r.name},r.name))}),e.jsxs("button",{onClick:()=>T(_[y].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[m?e.jsx(R,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(H,{className:"w-3.5 h-3.5"}),m?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-red-300 overflow-x-auto leading-relaxed max-h-[480px]",children:_[y].code})})]}),d==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-red-400 font-semibold text-sm",children:[e.jsx(P,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 12 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>T(D),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[m?e.jsx(R,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(H,{className:"w-3.5 h-3.5"}),m?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:D})]}),d==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-red-400 font-semibold text-sm",children:[e.jsx(E,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 12 Knowledge Assessment (4 Questions)"})]}),u&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-semibold",children:["Score: ",q()," / ",b.length]})]}),e.jsx("div",{className:"space-y-6",children:b.map((r,t)=>{const n=v[r.id],s=n===r.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[t+1,". ",r.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:r.options.map((f,i)=>{const p=n===i;let l="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return u?i===r.correctAnswer?l="bg-emerald-950/70 border-emerald-500 text-emerald-300":p&&(l="bg-rose-950/70 border-rose-500 text-rose-300"):p&&(l="bg-red-600/30 border-red-500 text-red-200"),e.jsx("button",{onClick:()=>$(r.id,i),className:`p-3 rounded-lg border text-left text-xs transition-all ${l}`,children:f},i)})}),u&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${s?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:s?"✓ Correct: ":"✗ Incorrect: "}),r.explanation]})]},r.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{C({}),S(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>S(!0),disabled:Object.keys(v).length<b.length,className:"px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-red-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{Z as default};
