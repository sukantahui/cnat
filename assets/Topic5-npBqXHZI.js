import{b as d,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{cl as _,S as L,k as V,B as A,aa as T,aI as H,f as Z,g as M}from"./vendor-icons-ri6cs58t.js";const X=`"""\r
Topic 5: Z-Score Normalization with scipy.stats.zscore\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# Mathematical Formula: Z = (X - \\mu) / \\sigma\r
# Converts any normal distribution into standard normal N(0, 1)\r
\r
# Dataset: Student heights (in cm) in Naihati classroom\r
heights = np.array([160, 165, 170, 172, 175, 178, 180, 185, 190])\r
\r
# Calculate z-scores using scipy.stats\r
z_scores = stats.zscore(heights)\r
\r
print("--- Standardizing Heights with Z-Score ---")\r
print(f"Original Mean: {np.mean(heights):.2f} cm, Std Dev: {np.std(heights):.2f} cm\\n")\r
for h, z in zip(heights, z_scores):\r
    print(f"Height: {h} cm  -->  Z-Score: {z:+.3f} standard deviations")\r
\r
print(f"\\nVerification:")\r
print(f"Mean of Z-Scores : {np.mean(z_scores):.4f} (approx 0.0)")\r
print(f"Std of Z-Scores  : {np.std(z_scores):.4f} (exact 1.0)")\r
`,G=`"""\r
Topic 5: The Empirical 68-95-99.7 Rule Verification with SciPy\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
from scipy import stats\r
\r
# Standard normal distribution N(0, 1)\r
norm = stats.norm(0, 1)\r
\r
# Probability within 1 standard deviation: P(-1 <= Z <= +1)\r
p_1sigma = norm.cdf(1) - norm.cdf(-1)\r
\r
# Probability within 2 standard deviations: P(-2 <= Z <= +2)\r
p_2sigma = norm.cdf(2) - norm.cdf(-2)\r
\r
# Probability within 3 standard deviations: P(-3 <= Z <= +3)\r
p_3sigma = norm.cdf(3) - norm.cdf(-3)\r
\r
print("--- The Empirical Rule (68-95-99.7) in Gaussian Distributions ---")\r
print(f"Within ±1 Standard Deviation: {p_1sigma * 100:.3f}% (Expected ~68.27%)")\r
print(f"Within ±2 Standard Deviations: {p_2sigma * 100:.3f}% (Expected ~95.45%)")\r
print(f"Within ±3 Standard Deviations: {p_3sigma * 100:.3f}% (Expected ~99.73%)")\r
print(f"Extreme Outlier Probability (> 3 std): {(1 - p_3sigma) * 100:.3f}%")\r
`,Q=`"""\r
Topic 5: Anomaly and Outlier Filtering Pipeline via Z-Score\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# Sensor temperature dataset from Chandan Pukur smart server rack (°C)\r
temperatures = np.array([24.5, 25.1, 24.8, 25.0, 24.9, 85.0, 25.2, 24.7, -15.0, 25.3])\r
\r
# Calculate z-scores\r
z_scores = stats.zscore(temperatures)\r
\r
# Standard outlier threshold: |Z| > 2.5 or 3.0\r
threshold = 2.5\r
outlier_mask = np.abs(z_scores) > threshold\r
\r
clean_data = temperatures[~outlier_mask]\r
outliers = temperatures[outlier_mask]\r
\r
print(f"Raw Temperatures : {temperatures}")\r
print(f"Detected Outliers (|Z| > {threshold}): {outliers}")\r
print(f"Filtered Clean Data               : {clean_data}")\r
`,$=`================================================================================\r
SCIPY OVERVIEW: TOPIC 5 - NORMAL DISTRIBUTION AND Z-SCORES\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS A Z-SCORE?\r
--------------------------------------------------------------------------------\r
- The standard score (Z-score) measures how many standard deviations ($\\sigma$) an \r
  individual data point ($x$) lies above or below the population mean ($\\mu$).\r
- Formula:\r
        Z = (x - \\mu) / \\sigma\r
- In SciPy:\r
        from scipy import stats\r
        z_array = stats.zscore(data)\r
\r
2. PROPERTIES OF Z-SCORE TRANSFORMED DATA:\r
--------------------------------------------------------------------------------\r
- Mean of Z-scores is ALWAYS 0.\r
- Standard deviation and variance of Z-scores is ALWAYS 1.\r
- Unitless: Allows fair comparison of variables on completely different units\r
  (e.g., comparing annual salary in ₹ Lakhs with age in years).\r
\r
3. THE EMPIRICAL RULE (68 - 95 - 99.7):\r
--------------------------------------------------------------------------------\r
- In any true Gaussian normal distribution:\r
  * 68.27% of observations fall within $\\mu \\pm 1\\sigma$ ($|Z| \\le 1$).\r
  * 95.45% of observations fall within $\\mu \\pm 2\\sigma$ ($|Z| \\le 2$).\r
  * 99.73% of observations fall within $\\mu \\pm 3\\sigma$ ($|Z| \\le 3$).\r
- Values with $|Z| > 3.0$ are statistically rare ($< 0.27\\%$) and typically \r
  classified as anomalies or data entry errors.\r
\r
4. DIFFERENCE WITH SCIKIT-LEARN STANDARDSCALER:\r
--------------------------------------------------------------------------------\r
- \`stats.zscore(X)\` computes z-scores directly on the given dataset array.\r
- \`sklearn.preprocessing.StandardScaler\` is an estimator that stores \`mean_\` and \`var_\`\r
  to apply the exact same transformation later on unseen test/production data.\r
`,v=[{id:1,question:"If a student's machine learning exam score has a Z-score of +2.0, what does this indicate?",options:["The student scored 2 marks in the exam","The student scored exactly 2 standard deviations above the class mean","The student scored 2 times the average","The exam difficulty was 2.0"],correctAnswer:1,explanation:"A Z-score of +2.0 means the individual observation is located exactly 2 standard deviations above the dataset mean."},{id:2,question:"According to the empirical rule, what percentage of data points in a normal distribution lie within ±2 standard deviations of the mean?",options:["50.0%","68.3%","95.4%","99.7%"],correctAnswer:2,explanation:"In a normal distribution, ~68.3% lies within ±1σ, ~95.4% lies within ±2σ, and ~99.7% lies within ±3σ."},{id:3,question:"What are the mean and standard deviation of any dataset after undergoing Z-score normalization?",options:["Mean = 1, Std = 0","Mean = 0, Std = 1","Mean = 100, Std = 15","Mean = min, Std = max"],correctAnswer:1,explanation:"Z-score transformation shifts the center to 0.0 and rescales the standard deviation to 1.0."}];function q(){const[m,E]=d.useState("interactive"),[u,R]=d.useState(0),[p,N]=d.useState(!1),[r,z]=d.useState(70),[a,P]=d.useState(10),[f,D]=d.useState(85),[w,O]=d.useState({}),[c,F]=d.useState(!1),j=[{name:"01_zscore_computation_basics.py",code:X},{name:"02_empirical_rule_68_95_99.py",code:G},{name:"03_zscore_outlier_filtering.py",code:Q}],y=s=>{navigator.clipboard.writeText(s),N(!0),setTimeout(()=>N(!1),2e3)},I=(s,t)=>{c||O(i=>({...i,[s]:t}))},W=()=>{let s=0;return v.forEach(t=>{w[t.id]===t.correctAnswer&&s++}),s},n=a>0?(f-r)/a:0,S=(s=>{const t=1/(1+.2316419*Math.abs(s)),h=.3989423*Math.exp(-s*s/2)*t*(.3193815+t*(-.3565638+t*(1.781478+t*(-1.821256+t*1.330274))));return s>0?1-h:h})(n)*100,l=500,o=160,C=s=>1/Math.sqrt(2*Math.PI)*Math.exp(-.5*s*s),k=[];for(let s=-3.5;s<=3.5;s+=.1){const t=(s+3.5)/7*l,i=o-C(s)/.42*(o-20);k.push(`${t},${i}`)}const g=Math.max(0,Math.min(l,(n+3.5)/7*l)),B=o-C(n)/.42*(o-20);return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 5"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Normal Distribution & Z-Scores"}),e.jsxs("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:["Master the fundamental standard score: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Z = (X - \\mu)/\\sigma"}),". Explore the 68-95-99.7 Empirical Rule, Gaussian standard curves, and robust outlier detection."]})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Z-Score & Bell Curve Studio",icon:L},{id:"code",label:"Python Code Lab",icon:V},{id:"notes",label:"Revision Notes",icon:A},{id:"quiz",label:"Knowledge Check",icon:T}].map(s=>{const t=s.icon,i=m===s.id;return e.jsxs("button",{onClick:()=>E(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${i?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(t,{className:"w-4 h-4"}),s.label]},s.id)})})]}),m==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(H,{className:"w-4 h-4"}),e.jsx("span",{children:"Feature Normalizer Inputs"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsxs("span",{children:["Feature Mean (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"\\mu"}),"):"]}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:r})]}),e.jsx("input",{type:"range",min:"10",max:"200",value:r,onChange:s=>z(Number(s.target.value)),className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsxs("span",{children:["Standard Deviation (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"\\sigma"}),"):"]}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:a})]}),e.jsx("input",{type:"range",min:"1",max:"50",value:a,onChange:s=>P(Number(s.target.value)),className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsxs("span",{children:["Observation Value (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"X"}),"):"]}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:f})]}),e.jsx("input",{type:"range",min:r-4*a,max:r+4*a,value:f,onChange:s=>D(Number(s.target.value)),className:"w-full accent-emerald-500"})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 text-xs",children:[e.jsx("div",{className:"font-bold text-slate-200",children:"The Empirical Rule (68-95-99.7):"}),e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsxs("span",{children:["±1σ (",r-a," to ",r+a,"):"]}),e.jsx("span",{className:"font-mono text-emerald-400 font-semibold",children:"68.27%"})]}),e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsxs("span",{children:["±2σ (",r-2*a," to ",r+2*a,"):"]}),e.jsx("span",{className:"font-mono text-teal-400 font-semibold",children:"95.45%"})]}),e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsxs("span",{children:["±3σ (",r-3*a," to ",r+3*a,"):"]}),e.jsx("span",{className:"font-mono text-cyan-400 font-semibold",children:"99.73%"})]})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Standard Normal Curve N(0, 1)"})]}),e.jsxs("span",{className:"text-xs font-mono text-emerald-400 font-bold",children:["Z = ",n>0?`+${n.toFixed(2)}`:n.toFixed(2),"σ"]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center",children:[e.jsxs("svg",{viewBox:`0 0 ${l} ${o}`,className:"w-full h-40 overflow-visible",children:[e.jsx("rect",{x:2.5/7*l,y:"0",width:2/7*l,height:o,fill:"rgba(16, 185, 129, 0.12)"}),e.jsx("rect",{x:1.5/7*l,y:"0",width:4/7*l,height:o,fill:"rgba(56, 189, 248, 0.06)"}),e.jsx("polyline",{fill:"none",stroke:"#10b981",strokeWidth:"2.5",points:k.join(" ")}),e.jsx("line",{x1:l/2,y1:"0",x2:l/2,y2:o,stroke:"#475569",strokeDasharray:"3 3"}),e.jsx("line",{x1:g,y1:"0",x2:g,y2:o,stroke:"#f43f5e",strokeWidth:"2"}),e.jsx("circle",{cx:g,cy:B,r:"5",fill:"#f43f5e"})]}),e.jsxs("div",{className:"w-full flex justify-between text-[10px] font-mono text-slate-500 mt-2 px-1",children:[e.jsx("span",{children:"-3σ"}),e.jsx("span",{children:"-2σ"}),e.jsx("span",{children:"-1σ"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"0 (Mean)"}),e.jsx("span",{children:"+1σ"}),e.jsx("span",{children:"+2σ"}),e.jsx("span",{children:"+3σ"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Calculated Z-Score"}),e.jsx("div",{className:"text-xl font-bold text-emerald-400 font-mono mt-0.5",children:n>0?`+${n.toFixed(2)}`:n.toFixed(2)}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Standard deviations from \\mu"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Percentile Rank"}),e.jsxs("div",{className:"text-xl font-bold text-teal-400 font-mono mt-0.5",children:[S.toFixed(2),"%"]}),e.jsxs("span",{className:"text-[10px] text-slate-500",children:["Greater than ",S.toFixed(1),"% of population"]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Outlier Status"}),e.jsx("div",{className:"text-sm font-bold font-mono mt-1",children:Math.abs(n)>3?e.jsx("span",{className:"text-rose-400",children:"🚨 Extreme Outlier (|Z| > 3)"}):Math.abs(n)>2?e.jsx("span",{className:"text-amber-400",children:"⚠️ Mild Outlier (|Z| > 2)"}):e.jsx("span",{className:"text-emerald-400",children:"✅ Normal Observation"})}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Threshold filter check"})]})]})]})]}),m==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:j.map((s,t)=>e.jsx("button",{onClick:()=>R(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${u===t?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:s.name},t))}),e.jsxs("button",{onClick:()=>y(j[u].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[p?e.jsx(Z,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:p?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:j[u].code})})]}),m==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(A,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>y($),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[p?e.jsx(Z,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:p?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:$})]}),m==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(T,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),c&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",W()," / ",v.length]})]}),e.jsx("div",{className:"space-y-6",children:v.map((s,t)=>{const i=w[s.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[t+1,". ",s.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.options.map((h,x)=>{let b="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return i===x&&(b="bg-emerald-950 border-emerald-500 text-white"),c&&(x===s.correctAnswer?b="bg-emerald-900/80 border-emerald-500 text-white font-semibold":i===x&&i!==s.correctAnswer&&(b="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>I(s.id,x),className:`p-3 rounded-lg border text-left text-xs transition-all ${b}`,children:h},x)})}),c&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:s.explanation})]})]},s.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>F(!c),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:c?"Reset Quiz":"Submit Answers"})})]})]})})}export{q as default};
