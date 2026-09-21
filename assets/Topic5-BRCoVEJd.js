import{b as d,j as e}from"./vendor-react-core-D9iF7FwR.js";import{cf as _,g as L,x as X,h as k,a as C,b3 as H,b as A,c as Z}from"./vendor-icons-CBbStT7G.js";const V=`"""\r
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
`,q=`"""\r
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
`,G=`"""\r
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
`,M=`================================================================================\r
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
`,y=[{question:"What is a Z-Score and what is its mathematical formula?",shortAnswer:"A Z-Score measures how many standard deviations an observation lies from the sample/population mean: $z = \\frac{x - \\mu}{\\sigma}$.",explanation:"Standardizing features into Z-Scores converts any raw measurement (e.g. salaries in INR, student exam marks, sensor temperatures) onto a dimensionless scale with mean $\\mu = 0$ and standard deviation $\\sigma = 1$. This prevents scale dominance in distance-based algorithms like KNN, PCA, and SVM.",hint:"Z = (value - mean) / standard_deviation.",level:"basic",codeExample:`from scipy import stats
import numpy as np

data = np.array([70, 80, 85, 90, 95])
z_scores = stats.zscore(data)
print('Computed Z-Scores:', z_scores)
print('Mean of Z:', np.mean(z_scores).round(4), '| Std of Z:', np.std(z_scores).round(4))`},{question:"What is the Empirical Rule (68-95-99.7 Rule) for Normal Distributions?",shortAnswer:"68.27% of data falls within $\\pm 1\\sigma$, 95.45% within $\\pm 2\\sigma$, and 99.73% within $\\pm 3\\sigma$.",explanation:`In a normal distribution:
- $\\mu \\pm 1\\sigma$ contains $\\approx 68.27\\%$ of all observations ($|z| \\le 1$).
- $\\mu \\pm 2\\sigma$ contains $\\approx 95.45\\%$ of all observations ($|z| \\le 2$).
- $\\mu \\pm 3\\sigma$ contains $\\approx 99.73\\%$ of all observations ($|z| \\le 3$).
Only $0.27\\%$ of legitimate Gaussian data lies outside $\\pm 3\\sigma$, making $|z| > 3$ the universal threshold for statistical outlier detection.`,hint:"1 sigma = 68%, 2 sigma = 95%, 3 sigma = 99.7%.",level:"basic",codeExample:`from scipy.stats import norm

# Probability within 1, 2, and 3 standard deviations:
p_1sigma = norm.cdf(1) - norm.cdf(-1) # ~0.6827
p_2sigma = norm.cdf(2) - norm.cdf(-2) # ~0.9545
p_3sigma = norm.cdf(3) - norm.cdf(-3) # ~0.9973
print(f'1-Sigma: {p_1sigma:.4f} | 2-Sigma: {p_2sigma:.4f} | 3-Sigma: {p_3sigma:.4f}')`},{question:"How does `scipy.stats.zscore()` handle multidimensional 2D feature matrices in ML?",shortAnswer:"By default, `stats.zscore(X, axis=0)` standardizes each feature column independently.",explanation:"In Machine Learning tabular datasets $X$ with shape $(N, D)$, setting `axis=0` calculates the mean and standard deviation along each column (feature), standardizing each column to mean=0 and variance=1 simultaneously without column loop overhead.",hint:"axis=0 standardizes down rows (per column feature).",level:"moderate",codeExample:`from scipy import stats
import numpy as np

# 2D feature matrix: [Study Hours, Exam Score]
X = np.array([
    [5.0, 72.0],
    [8.0, 88.0],
    [6.5, 78.0],
    [9.0, 95.0]
])
X_standardized = stats.zscore(X, axis=0)
print('Standardized Feature Matrix:\\n', X_standardized)`},{question:"How do you detect and filter outliers using Z-scores in NumPy and SciPy?",shortAnswer:"Filter rows where $|z| > 3.0$ (or custom threshold $\\theta$).",explanation:"Calculate Z-scores using `stats.zscore()`, take absolute values with `np.abs(z)`, and apply boolean indexing: `outliers = data[np.abs(z) > 3.0]`. For 2D matrices, `clean_X = X[(np.abs(z_scores) < 3.0).all(axis=1)]` filters any row containing an outlier in any feature column.",hint:"Use np.abs(z) > threshold and apply boolean indexing.",level:"moderate",codeExample:`from scipy import stats
import numpy as np

marks = np.array([45, 52, 58, 60, 62, 65, 70, 72, 75, 450]) # 450 is typo outlier
z = stats.zscore(marks)
outlier_mask = np.abs(z) > 2.5
clean_marks = marks[~outlier_mask]
print('Detected Outliers:', marks[outlier_mask])
print('Clean Dataset:', clean_marks)`},{question:"What is the key difference between Sample Z-score (`ddof=0` vs `ddof=1`) in SciPy?",shortAnswer:"`ddof=0` divides by $N$ (population variance); `ddof=1` divides by $N-1$ (unbiased sample variance).",explanation:"`scipy.stats.zscore(a, ddof=0)` uses population standard deviation (dividing by $N$, matching Scikit-Learn `StandardScaler`). Passing `ddof=1` uses sample standard deviation (dividing by $N-1$), which provides Bessel's correction for small sample batches.",hint:"Scikit-Learn StandardScaler uses ddof=0 (population std) by default.",level:"advanced",codeExample:`from scipy import stats
import numpy as np

data = np.array([10, 20, 30])
print('Z-score (ddof=0, Scikit-learn standard):', stats.zscore(data, ddof=0))
print('Z-score (ddof=1, sample unbiased):', stats.zscore(data, ddof=1))`},{question:"Why can Z-Score outlier filtering fail when extreme outliers exist in small datasets?",shortAnswer:"Extreme outliers artificially inflate the sample mean $\\mu$ and standard deviation $\\sigma$, masking their own Z-score (masking effect).",explanation:"Because standard deviation $\\sigma$ is calculated by squaring deviations, a massive outlier dramatically inflates $\\sigma$. In small datasets, this causes the outlier's own $z$-score to shrink below $3.0$, failing detection. In such cases, Modified Z-Score using Median Absolute Deviation (MAD) is preferred.",hint:"For severe outlier contamination, use Median Absolute Deviation (MAD) instead of mean/std.",level:"advanced",codeExample:`from scipy import stats
import numpy as np

# Severe outlier masking demo
data = np.array([10, 11, 12, 13, 14, 1000]) # 1000 inflates std
z = stats.zscore(data)
print('Z-score of 1000:', z[-1]) # Might only be ~2.2, failing |z| > 3 threshold!`},{question:"What is the Modified Z-score based on Median Absolute Deviation (MAD)?",shortAnswer:"$M_i = \\frac{0.6745 \\times (x_i - \\tilde{x})}{\\text{MAD}}$, where $\\tilde{x}$ is the median and $\\text{MAD} = \\text{median}(|x_i - \\tilde{x}|)$.",explanation:"Because median and MAD are robust non-parametric statistics (50% breakdown point), the Modified Z-Score is immune to extreme masking effects. Values with $|M_i| > 3.5$ are labeled as statistical outliers with mathematical rigor.",hint:"0.6745 is the consistency constant linking MAD to standard deviation for normal data.",level:"advanced",codeExample:`from scipy import stats
import numpy as np

data = np.array([10, 11, 12, 13, 14, 1000])
median = np.median(data)
mad = stats.median_abs_deviation(data)
mod_z = 0.6745 * (data - median) / mad
print('Modified Z-score of 1000:', mod_z[-1]) # > 400! Reliably detected!`},{question:"How do Z-Scores relate to Standard Normal cumulative percentiles in percentile ranking?",shortAnswer:"Passing a Z-Score to `scipy.stats.norm.cdf(z)` converts the score directly into its global percentile rank.",explanation:"If a student in Barrackpore scores $z = +2.0$ on a state-level exam, `norm.cdf(2.0) = 0.9772$, meaning the student outperformed $97.72\\%$ of all candidates assuming normal test score distribution.",hint:"norm.cdf(z) converts z-score to percentile (0 to 1).",level:"moderate",codeExample:`from scipy.stats import norm

z_student = 1.96
percentile = norm.cdf(z_student) * 100
print(f'Z = {z_student} corresponds to {percentile:.2f}th percentile')`}];function Y(){const[m,E]=d.useState("interactive"),[f,D]=d.useState(0),[x,j]=d.useState(!1),[r,T]=d.useState(70),[t,R]=d.useState(10),[b,P]=d.useState(85),[w,F]=d.useState({}),[c,I]=d.useState(!1),g=[{name:"01_zscore_computation_basics.py",code:V},{name:"02_empirical_rule_68_95_99.py",code:q},{name:"03_zscore_outlier_filtering.py",code:G}],N=s=>{navigator.clipboard.writeText(s),j(!0),setTimeout(()=>j(!1),2e3)},O=(s,a)=>{c||F(o=>({...o,[s]:a}))},W=()=>{let s=0;return y.forEach(a=>{w[a.id]===a.correctAnswer&&s++}),s},n=t>0?(b-r)/t:0,$=(s=>{const a=1/(1+.2316419*Math.abs(s)),h=.3989423*Math.exp(-s*s/2)*a*(.3193815+a*(-.3565638+a*(1.781478+a*(-1.821256+a*1.330274))));return s>0?1-h:h})(n)*100,i=500,l=160,S=s=>1/Math.sqrt(2*Math.PI)*Math.exp(-.5*s*s),z=[];for(let s=-3.5;s<=3.5;s+=.1){const a=(s+3.5)/7*i,o=l-S(s)/.42*(l-20);z.push(`${a},${o}`)}const v=Math.max(0,Math.min(i,(n+3.5)/7*i)),B=l-S(n)/.42*(l-20);return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 5"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Normal Distribution & Z-Scores"}),e.jsxs("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:["Master the fundamental standard score: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Z = (X - \\mu)/\\sigma"}),". Explore the 68-95-99.7 Empirical Rule, Gaussian standard curves, and robust outlier detection."]})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Z-Score & Bell Curve Studio",icon:L},{id:"code",label:"Python Code Lab",icon:X},{id:"notes",label:"Revision Notes",icon:k},{id:"quiz",label:"Knowledge Check",icon:C}].map(s=>{const a=s.icon,o=m===s.id;return e.jsxs("button",{onClick:()=>E(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${o?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(a,{className:"w-4 h-4"}),s.label]},s.id)})})]}),m==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(H,{className:"w-4 h-4"}),e.jsx("span",{children:"Feature Normalizer Inputs"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsxs("span",{children:["Feature Mean (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"\\mu"}),"):"]}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:r})]}),e.jsx("input",{type:"range",min:"10",max:"200",value:r,onChange:s=>T(Number(s.target.value)),className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsxs("span",{children:["Standard Deviation (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"\\sigma"}),"):"]}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:t})]}),e.jsx("input",{type:"range",min:"1",max:"50",value:t,onChange:s=>R(Number(s.target.value)),className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsxs("span",{children:["Observation Value (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"X"}),"):"]}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:b})]}),e.jsx("input",{type:"range",min:r-4*t,max:r+4*t,value:b,onChange:s=>P(Number(s.target.value)),className:"w-full accent-emerald-500"})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 text-xs",children:[e.jsx("div",{className:"font-bold text-slate-200",children:"The Empirical Rule (68-95-99.7):"}),e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsxs("span",{children:["±1σ (",r-t," to ",r+t,"):"]}),e.jsx("span",{className:"font-mono text-emerald-400 font-semibold",children:"68.27%"})]}),e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsxs("span",{children:["±2σ (",r-2*t," to ",r+2*t,"):"]}),e.jsx("span",{className:"font-mono text-teal-400 font-semibold",children:"95.45%"})]}),e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsxs("span",{children:["±3σ (",r-3*t," to ",r+3*t,"):"]}),e.jsx("span",{className:"font-mono text-cyan-400 font-semibold",children:"99.73%"})]})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Standard Normal Curve N(0, 1)"})]}),e.jsxs("span",{className:"text-xs font-mono text-emerald-400 font-bold",children:["Z = ",n>0?`+${n.toFixed(2)}`:n.toFixed(2),"σ"]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center",children:[e.jsxs("svg",{viewBox:`0 0 ${i} ${l}`,className:"w-full h-40 overflow-visible",children:[e.jsx("rect",{x:2.5/7*i,y:"0",width:2/7*i,height:l,fill:"rgba(16, 185, 129, 0.12)"}),e.jsx("rect",{x:1.5/7*i,y:"0",width:4/7*i,height:l,fill:"rgba(56, 189, 248, 0.06)"}),e.jsx("polyline",{fill:"none",stroke:"#10b981",strokeWidth:"2.5",points:z.join(" ")}),e.jsx("line",{x1:i/2,y1:"0",x2:i/2,y2:l,stroke:"#475569",strokeDasharray:"3 3"}),e.jsx("line",{x1:v,y1:"0",x2:v,y2:l,stroke:"#f43f5e",strokeWidth:"2"}),e.jsx("circle",{cx:v,cy:B,r:"5",fill:"#f43f5e"})]}),e.jsxs("div",{className:"w-full flex justify-between text-[10px] font-mono text-slate-500 mt-2 px-1",children:[e.jsx("span",{children:"-3σ"}),e.jsx("span",{children:"-2σ"}),e.jsx("span",{children:"-1σ"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"0 (Mean)"}),e.jsx("span",{children:"+1σ"}),e.jsx("span",{children:"+2σ"}),e.jsx("span",{children:"+3σ"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Calculated Z-Score"}),e.jsx("div",{className:"text-xl font-bold text-emerald-400 font-mono mt-0.5",children:n>0?`+${n.toFixed(2)}`:n.toFixed(2)}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Standard deviations from \\mu"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Percentile Rank"}),e.jsxs("div",{className:"text-xl font-bold text-teal-400 font-mono mt-0.5",children:[$.toFixed(2),"%"]}),e.jsxs("span",{className:"text-[10px] text-slate-500",children:["Greater than ",$.toFixed(1),"% of population"]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Outlier Status"}),e.jsx("div",{className:"text-sm font-bold font-mono mt-1",children:Math.abs(n)>3?e.jsx("span",{className:"text-rose-400",children:"🚨 Extreme Outlier (|Z| > 3)"}):Math.abs(n)>2?e.jsx("span",{className:"text-amber-400",children:"⚠️ Mild Outlier (|Z| > 2)"}):e.jsx("span",{className:"text-emerald-400",children:"✅ Normal Observation"})}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Threshold filter check"})]})]})]})]}),m==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:g.map((s,a)=>e.jsx("button",{onClick:()=>D(a),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${f===a?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:s.name},a))}),e.jsxs("button",{onClick:()=>N(g[f].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[x?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(Z,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:x?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:g[f].code})})]}),m==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(k,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>N(M),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[x?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(Z,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:x?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:M})]}),m==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(C,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),c&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",W()," / ",y.length]})]}),e.jsx("div",{className:"space-y-6",children:y.map((s,a)=>{const o=w[s.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[a+1,". ",s.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.options.map((h,p)=>{let u="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return o===p&&(u="bg-emerald-950 border-emerald-500 text-white"),c&&(p===s.correctAnswer?u="bg-emerald-900/80 border-emerald-500 text-white font-semibold":o===p&&o!==s.correctAnswer&&(u="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>O(s.id,p),className:`p-3 rounded-lg border text-left text-xs transition-all ${u}`,children:h},p)})}),c&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:s.explanation})]})]},s.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>I(!c),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:c?"Reset Quiz":"Submit Answers"})})]})]})})}export{Y as default};
