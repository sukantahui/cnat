import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{ck as $,S as J,k as X,B as R,aa as F,aq as Z,a1 as ee,f as D,g as E}from"./vendor-icons-DFC0rBCP.js";const se=`"""\r
Topic 3: Comprehensive Summary with scipy.stats.describe\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# Dataset: Student machine learning test scores in Barrackpore batch\r
scores = np.array([78, 85, 92, 88, 75, 60, 95, 89, 90, 82, 88, 94])\r
\r
# stats.describe calculates nobs, minmax, mean, variance, skewness, and kurtosis in one pass\r
summary = stats.describe(scores)\r
\r
print("--- Descriptive Statistics via scipy.stats.describe ---")\r
print(f"Sample Size (nobs) : {summary.nobs}")\r
print(f"Min & Max Range    : Min = {summary.minmax[0]}, Max = {summary.minmax[1]}")\r
print(f"Sample Mean        : {summary.mean:.2f}")\r
print(f"Sample Variance    : {summary.variance:.2f} (Std Dev: {np.sqrt(summary.variance):.2f})")\r
print(f"Skewness           : {summary.skewness:.4f} (Asymmetry measure)")\r
print(f"Kurtosis (Fisher)  : {summary.kurtosis:.4f} (Tailedness relative to normal)")\r
`,te=`"""\r
Topic 3: Robust Statistics: Trimmed & Geometric Means, Mode, and IQR\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# Dataset containing extreme outliers (e.g. salary dataset in INR Lakhs)\r
salaries = np.array([3.5, 4.0, 4.2, 4.5, 4.8, 5.0, 5.2, 5.5, 6.0, 50.0]) # 50 is an extreme outlier\r
\r
# 1. Standard Arithmetic Mean vs 10% Trimmed Mean (drops 10% from both ends)\r
arith_mean = np.mean(salaries)\r
trim_mean = stats.trim_mean(salaries, proportiontocut=0.10)\r
\r
print(f"Salaries Dataset: {salaries}")\r
print(f"Standard Mean  : ₹{arith_mean:.2f} Lakhs (heavily distorted by 50.0)")\r
print(f"10% Trimmed Mean: ₹{trim_mean:.2f} Lakhs (robust against outliers)")\r
\r
# 2. Geometric Mean (used for compound growth rates and normalized metrics)\r
g_mean = stats.gmean([1.05, 1.10, 1.08, 1.12])\r
print(f"Geometric Mean Growth Rate: {g_mean:.4f}")\r
\r
# 3. Interquartile Range (IQR = Q3 - Q1)\r
iqr_val = stats.iqr(salaries)\r
print(f"Interquartile Range (IQR) : {iqr_val:.2f}")\r
`,ae=`"""\r
Topic 3: Skewness and Kurtosis Diagnostic in ML Features\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# Generate simulated right-skewed feature (e.g. e-commerce purchase values)\r
np.random.seed(42)\r
right_skewed = np.random.exponential(scale=2.0, size=1000)\r
\r
skew_val = stats.skew(right_skewed)\r
kurt_val = stats.kurtosis(right_skewed) # Fisher kurtosis (normal = 0.0)\r
\r
print("--- Distribution Shape Diagnostics ---")\r
print(f"Skewness: {skew_val:.3f}")\r
if skew_val > 0.5:\r
    print("Interpretation: Positively (right) skewed. Consider log-transform (np.log1p) before linear models.")\r
elif skew_val < -0.5:\r
    print("Interpretation: Negatively (left) skewed.")\r
else:\r
    print("Interpretation: Approximately symmetric.")\r
\r
print(f"\\nKurtosis (Fisher's definition): {kurt_val:.3f}")\r
if kurt_val > 0:\r
    print("Interpretation: Leptokurtic (heavier tails, more outliers than normal distribution).")\r
elif kurt_val < 0:\r
    print("Interpretation: Platykurtic (lighter tails, fewer outliers).")\r
else:\r
    print("Interpretation: Mesokurtic (matches normal bell curve).")\r
`,P=`================================================================================\r
SCIPY OVERVIEW: TOPIC 3 - SCIPY.STATS: DESCRIPTIVE STATISTICS\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS SCIPY.STATS DESCRIPTIVE SUITE?\r
--------------------------------------------------------------------------------\r
- Goes far beyond standard mean/median by computing higher-order statistical moments,\r
  robust central tendencies, and shape characteristics of ML features.\r
\r
2. CORE DESCRIPTIVE FUNCTIONS:\r
--------------------------------------------------------------------------------\r
- \`stats.describe(a)\`     : Computes sample size, minmax range, mean, variance,\r
                            skewness, and kurtosis in a single optimized pass.\r
- \`stats.trim_mean(a, p)\` : Robust mean after trimming \`p\` proportion of extremes\r
                            from both tails (e.g., handles salary/price outliers).\r
- \`stats.gmean(a)\`        : Geometric mean (multiplicative datasets, ratios, growth).\r
- \`stats.hmean(a)\`        : Harmonic mean (rates, speeds, F1-score formula foundation).\r
- \`stats.mode(a)\`         : Returns the most frequent value and its count.\r
- \`stats.iqr(a)\`          : Interquartile Range (Q3 - Q1), basis of box plots.\r
- \`stats.skew(a)\`         : 3rd standardized moment. Measure of distribution asymmetry:\r
                            * Skew > 0: Right (positive) tail is longer.\r
                            * Skew < 0: Left (negative) tail is longer.\r
- \`stats.kurtosis(a)\`     : 4th standardized moment (Fisher's definition by default,\r
                            where Normal = 0.0). Measure of tail weight and outlier propensity.\r
\r
3. WHY THIS MATTERS FOR MACHINE LEARNING:\r
--------------------------------------------------------------------------------\r
- Linear and Logistic Regression assume normality of residuals and low collinearity/skew.\r
- Detecting high positive skewness (\`skew > 0.75\`) signals the data engineer to apply\r
  Box-Cox, Yeo-Johnson, or Logarithmic transformation before model fitting.\r
`,j=[{id:1,question:"What function in `scipy.stats` computes sample size, min/max, mean, variance, skewness, and kurtosis in a single execution?",options:["stats.describe()","stats.summary_all()","stats.metrics()","stats.profile()"],correctAnswer:0,explanation:"`stats.describe(array)` returns a `DescribeResult` namedtuple containing nobs, minmax, mean, variance, skewness, and kurtosis."},{id:2,question:"How does `stats.trim_mean(data, proportiontocut=0.10)` prevent extreme outlier distortions?",options:["By replacing all outliers with zero","By discarding 10% of lowest and 10% of highest values before calculating the arithmetic mean","By rounding all numbers to integers","By computing the standard median instead"],correctAnswer:1,explanation:"`stats.trim_mean` removes the specified fraction of extreme scores from each end of the distribution before calculating the mean."},{id:3,question:"In SciPy's default Fisher definition, what is the kurtosis value of a perfect standard normal bell curve?",options:["3.0","0.0","1.0","-1.0"],correctAnswer:1,explanation:"By default, `scipy.stats.kurtosis` uses Fisher's definition where 3.0 is subtracted from Pearson's kurtosis so that normal distribution equals 0.0 (Mesokurtic)."}],B=[{name:"Barrackpore Exam Scores",values:[78,85,92,88,75,60,95,89,90,82,88,94]},{name:"Salaries with High Outlier (₹ Lakhs)",values:[3.5,4,4.2,4.5,4.8,5,5.2,5.5,6,50]},{name:"Symmetric Normal Feature",values:[10,12,14,15,15,16,16,17,18,20]},{name:"Heavy Tailed Metric",values:[2,3,5,8,12,20,35,70,150]}];function de(){const[c,L]=i.useState("interactive"),[b,z]=i.useState(0),[p,N]=i.useState(!1),[y,k]=i.useState(B[0].values.join(", ")),[S,re]=i.useState(10),[C,q]=i.useState({}),[o,H]=i.useState(!1),f=[{name:"01_descriptive_stats_describe.py",code:se},{name:"02_trimmed_and_geometric_means.py",code:te},{name:"03_skewness_and_kurtosis.py",code:ae}],M=s=>{navigator.clipboard.writeText(s),N(!0),setTimeout(()=>N(!1),2e3)},Q=(s,t)=>{o||q(n=>({...n,[s]:t}))},G=()=>{let s=0;return j.forEach(t=>{C[t.id]===t.correctAnswer&&s++}),s},r=y.split(",").map(s=>parseFloat(s.trim())).filter(s=>!isNaN(s)).sort((s,t)=>s-t),a=r.length,l=a>0?r.reduce((s,t)=>s+t,0)/a:0,O=a>0?a%2===0?(r[a/2-1]+r[a/2])/2:r[Math.floor(a/2)]:0,m={};r.forEach(s=>m[s]=(m[s]||0)+1);let T=r[0],g=0;Object.keys(m).forEach(s=>{m[s]>g&&(g=m[s],T=parseFloat(s))});const _=a>1?r.reduce((s,t)=>s+Math.pow(t-l,2),0)/(a-1):0,V=Math.sqrt(_),K=a>0?r.reduce((s,t)=>s+Math.pow(t-l,3),0)/a:0,u=a>0?r.reduce((s,t)=>s+Math.pow(t-l,2),0)/a:0,d=u>0?K/Math.pow(u,1.5):0,Y=a>0?r.reduce((s,t)=>s+Math.pow(t-l,4),0)/a:0,v=u>0?Y/Math.pow(u,2)-3:0,I=Math.floor(S/100*a),w=r.slice(I,a-I),W=w.length>0?w.reduce((s,t)=>s+t,0)/w.length:l,A=r.every(s=>s>0)&&a>0?Math.exp(r.reduce((s,t)=>s+Math.log(t),0)/a):null;return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx($,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 3"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"scipy.stats: Descriptive Statistics"}),e.jsxs("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:["Master statistical profiling of Machine Learning features. Calculate higher-order moments (skewness, kurtosis), robust trimmed means, and comprehensive summaries via ",e.jsx("code",{className:"text-emerald-400",children:"stats.describe()"}),"."]})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Descriptive Statistics Studio",icon:J},{id:"code",label:"Python Code Lab",icon:X},{id:"notes",label:"Revision Notes",icon:R},{id:"quiz",label:"Knowledge Check",icon:F}].map(s=>{const t=s.icon,n=c===s.id;return e.jsxs("button",{onClick:()=>L(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${n?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(t,{className:"w-4 h-4"}),s.label]},s.id)})})]}),c==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(Z,{className:"w-4 h-4"}),e.jsx("span",{children:"Feature Dataset Input (Comma Separated)"})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:B.map((s,t)=>e.jsx("button",{onClick:()=>k(s.values.join(", ")),className:"px-2.5 py-1 rounded-lg text-xs bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors",children:s.name},t))})]}),e.jsx("input",{type:"text",value:y,onChange:s=>k(s.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs md:text-sm font-mono text-emerald-300 focus:outline-none focus:border-emerald-500",placeholder:"e.g. 10, 15, 20, 25, 30"})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-1",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Sample Size (nobs)"}),e.jsx("div",{className:"text-lg font-bold text-white font-mono",children:a}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Total Observations"})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-1",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Arithmetic Mean"}),e.jsx("div",{className:"text-lg font-bold text-emerald-400 font-mono",children:l.toFixed(2)}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Standard average"})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-1",children:[e.jsxs("span",{className:"text-[11px] text-slate-400",children:[S,"% Trimmed Mean"]}),e.jsx("div",{className:"text-lg font-bold text-teal-400 font-mono",children:W.toFixed(2)}),e.jsx("span",{className:"text-[10px] text-emerald-400",children:"stats.trim_mean()"})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-1",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Median & Mode"}),e.jsxs("div",{className:"text-lg font-bold text-white font-mono",children:[O.toFixed(2)," / ",T]}),e.jsxs("span",{className:"text-[10px] text-slate-500",children:["Mode count: ",g]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-1",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Std Dev & Variance"}),e.jsxs("div",{className:"text-lg font-bold text-cyan-400 font-mono",children:[V.toFixed(2)," / ",_.toFixed(2)]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Spread dispersion"})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-1",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Skewness (3rd Moment)"}),e.jsx("div",{className:"text-lg font-bold text-amber-400 font-mono",children:d.toFixed(3)}),e.jsx("span",{className:"text-[10px] text-amber-400/90",children:d>.5?"Right-Skewed":d<-.5?"Left-Skewed":"Symmetric"})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-1",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Fisher Kurtosis (4th)"}),e.jsx("div",{className:"text-lg font-bold text-fuchsia-400 font-mono",children:v.toFixed(3)}),e.jsx("span",{className:"text-[10px] text-fuchsia-400/90",children:v>0?"Leptokurtic (Heavy tail)":v<0?"Platykurtic":"Mesokurtic"})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-1",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Geometric Mean"}),e.jsx("div",{className:"text-lg font-bold text-indigo-400 font-mono",children:A!==null?A.toFixed(2):"N/A (<=0)"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"stats.gmean()"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-semibold text-sm",children:[e.jsx(ee,{className:"w-4 h-4"}),e.jsx("span",{children:"Feature Engineering Recommendation"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:Math.abs(d)>.75?e.jsxs("span",{className:"text-amber-300",children:["⚠️ ",e.jsxs("b",{children:["High Skewness Detected (",d.toFixed(2),"):"]})," In linear regression or neural networks, consider applying a log transform (",e.jsx("code",{className:"text-white font-mono",children:"np.log1p"}),") or a PowerTransformer (Box-Cox / Yeo-Johnson) to stabilize variance and achieve normal residual behavior."]}):e.jsxs("span",{className:"text-emerald-300",children:["✅ ",e.jsxs("b",{children:["Well-Behaved Distribution (",d.toFixed(2),"):"]})," Skewness is within normal bounds. Standard feature scaling (StandardScaler or MinMaxScaler) will work effectively without requiring non-linear monotonic transforms."]})})]})]}),c==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:f.map((s,t)=>e.jsx("button",{onClick:()=>z(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${b===t?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:s.name},t))}),e.jsxs("button",{onClick:()=>M(f[b].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[p?e.jsx(D,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(E,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:p?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:f[b].code})})]}),c==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(R,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>M(P),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[p?e.jsx(D,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(E,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:p?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:P})]}),c==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(F,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),o&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",G()," / ",j.length]})]}),e.jsx("div",{className:"space-y-6",children:j.map((s,t)=>{const n=C[s.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[t+1,". ",s.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.options.map((U,x)=>{let h="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return n===x&&(h="bg-emerald-950 border-emerald-500 text-white"),o&&(x===s.correctAnswer?h="bg-emerald-900/80 border-emerald-500 text-white font-semibold":n===x&&n!==s.correctAnswer&&(h="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>Q(s.id,x),className:`p-3 rounded-lg border text-left text-xs transition-all ${h}`,children:U},x)})}),o&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:s.explanation})]})]},s.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>H(!o),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:o?"Reset Quiz":"Submit Answers"})})]})]})})}export{de as default};
