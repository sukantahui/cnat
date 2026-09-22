import{b as d,j as e}from"./vendor-react-core-D9iF7FwR.js";import{P as I}from"./PythonFileLoader-D5JKxZvU.js";import{F as C}from"./FAQTemplate-DmdkpHR-.js";import{P as q}from"./PlainTextPrint-CS96sBe2.js";import{T as F}from"./TeacherSukantaHui-Bldu0y17.js";import{d1 as P,g as R,x as A,h as E,a as D,aQ as L,ai as Q}from"./vendor-icons-Beb6eGc1.js";import"./PythonCodeBlock-Dy3OqNFl.js";import"./vendor-prism-SANIKoEh.js";const $=`"""\r
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
`,z=`"""\r
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
`,H=`"""\r
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
`,K=`================================================================================\r
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
`,B=[{question:"What does `scipy.stats.describe()` return and why is it preferred over running separate functions?",shortAnswer:"It returns a namedtuple with `nobs`, `minmax`, `mean`, `variance`, `skewness`, and `kurtosis` in a single pass.",explanation:"`stats.describe(array)` calculates all primary summary statistics simultaneously in an optimized single-pass C execution. Instead of calling mean(), var(), skew(), and kurtosis() independently (which traverses the array multiple times), `describe()` provides complete descriptive metrics instantly.",hint:"Single-pass execution reduces memory reads and computes moments simultaneously.",level:"basic",codeExample:`from scipy import stats
import numpy as np

data = np.array([78, 85, 92, 88, 75, 60, 95, 89, 90, 82])
res = stats.describe(data)
print('Observations:', res.nobs)
print('Min/Max:', res.minmax)
print('Mean:', res.mean)
print('Variance:', res.variance)
print('Skewness:', res.skewness)
print('Kurtosis:', res.kurtosis)`},{question:"How does `scipy.stats.trim_mean()` help in robust machine learning data preprocessing?",shortAnswer:"It discards extreme percentiles from both tails before computing the mean, preventing outlier distortion.",explanation:"Standard arithmetic mean is highly sensitive to extreme measurement errors or heavy tails. `stats.trim_mean(data, proportiontocut=0.10)` trims the lowest 10% and highest 10% of values, yielding a robust measure of central tendency without discarding the entire dataset.",hint:"trim_mean combines the robustness of the median with the statistical efficiency of the mean.",level:"moderate",codeExample:`from scipy import stats
import numpy as np

# Dataset with severe outlier:
salaries = np.array([3.5, 4.0, 4.2, 4.5, 4.8, 5.0, 5.2, 5.5, 6.0, 50.0])
print('Standard Mean:', np.mean(salaries))            # ~9.27 (heavily distorted)
print('10% Trimmed Mean:', stats.trim_mean(salaries, 0.1)) # ~4.90 (realistic)`},{question:"What is the interpretation of Skewness and how is it calculated in `scipy.stats.skew`?",shortAnswer:"Skewness measures distribution asymmetry. Positive (>0) means right-tailed; Negative (<0) means left-tailed; Zero (=0) means symmetric.",explanation:"Skewness is the standardized 3rd central moment: $E[((X-\\mu)/\\sigma)^3]$. If skewness > 0, the right tail is prolonged (e.g. household income or house prices). If skewness < 0, the left tail is prolonged. Machine learning models (like Linear Regression) often perform better when skewed features are normalized using log or Box-Cox transformations.",hint:"Tail points to the right = Positive Skew; Tail points to the left = Negative Skew.",level:"moderate",codeExample:`from scipy import stats
import numpy as np

right_skewed = np.array([1, 2, 2, 3, 3, 3, 4, 5, 12, 25])
print('Skewness:', stats.skew(right_skewed))  # > 0 (Positive Skew)`},{question:"What is Kurtosis and how does SciPy's Fisher definition differ from Pearson's definition?",shortAnswer:"Kurtosis measures tail heaviness / outlier propensity. SciPy uses Fisher's definition where Normal Distribution equals 0.0.",explanation:"Kurtosis represents the standardized 4th central moment: $E[((X-\\mu)/\\sigma)^4]$. Pearson's kurtosis for a standard normal distribution is 3.0. SciPy's `scipy.stats.kurtosis` defaults to `fisher=True`, subtracting 3.0 (Excess Kurtosis) so that standard normal = 0.0. Leptokurtic (>0) indicates heavy tails/outliers; Platykurtic (<0) indicates light tails.",hint:"Excess Kurtosis = Pearson Kurtosis - 3. Normal distribution is 0.",level:"advanced",codeExample:`from scipy import stats
import numpy as np

# Standard normal random variates
normal_data = stats.norm.rvs(size=10000, random_state=42)
print('Fisher Kurtosis (Normal):', stats.kurtosis(normal_data, fisher=True)) # ~0.0
print('Pearson Kurtosis (Normal):', stats.kurtosis(normal_data, fisher=False)) # ~3.0`},{question:"When should Geometric Mean (`scipy.stats.gmean`) and Harmonic Mean (`scipy.stats.hmean`) be used?",shortAnswer:"Geometric mean is used for multiplicative growth rates / ratios; Harmonic mean is used for rates, speeds, and F1-score evaluation.",explanation:"Arithmetic mean distorts compound percentage growth and rates. `stats.gmean` computes $(x_1 \\cdot x_2 \\dots x_n)^{1/n}$ (essential for portfolio investment returns and multiplicative metrics). `stats.hmean` computes $\\frac{n}{\\sum 1/x_i}$, which powers harmonic metrics in ML like the F1-Score (harmonic mean of precision and recall).",hint:"F1-Score in classification is the harmonic mean (hmean) of Precision and Recall.",level:"moderate",codeExample:`from scipy import stats

precision = 0.90
recall = 0.40
# F1-Score using harmonic mean
f1 = stats.hmean([precision, recall])
print('F1 Score via hmean:', f1)`},{question:"How does `scipy.stats.mode()` handle multimodal datasets in recent SciPy versions?",shortAnswer:"It returns a ModeResult namedtuple containing the smallest modal value and its count.",explanation:"`stats.mode(array, keepdims=False)` returns the most frequently occurring value in the array. When multiple values share the highest frequency, it returns the smallest value and its frequency count. Specifying `axis` allows multidimensional mode reduction across feature columns.",hint:"ModeResult provides .mode and .count attributes.",level:"basic",codeExample:`from scipy import stats
import numpy as np

scores = np.array([80, 85, 85, 90, 90, 70])
res = stats.mode(scores, keepdims=False)
print('Mode:', res.mode, '| Count:', res.count)`},{question:"How is `scipy.stats.iqr()` calculated and used for outlier detection?",shortAnswer:"IQR is the Interquartile Range ($Q_3 - Q_1$). Outliers lie outside $[Q_1 - 1.5 \\times \\text{IQR}, Q_3 + 1.5 \\times \\text{IQR}]$.",explanation:"`stats.iqr(data)` computes the spread of the middle 50% of data ($75^{\\text{th}} - 25^{\\text{th}}$ percentile). It forms the basis of Tukey's boxplot fence filter, providing a non-parametric outlier detection boundary immune to extreme skewed anomalies.",hint:"Tukey fences: Lower = Q1 - 1.5*IQR, Upper = Q3 + 1.5*IQR.",level:"moderate",codeExample:`from scipy import stats
import numpy as np

data = np.array([10, 12, 14, 15, 16, 18, 19, 21, 100])
iqr_val = stats.iqr(data)
q75, q25 = np.percentile(data, [75, 25])
lower_fence = q25 - 1.5 * iqr_val
upper_fence = q75 + 1.5 * iqr_val
outliers = data[(data < lower_fence) | (data > upper_fence)]
print('IQR:', iqr_val, '| Detected Outliers:', outliers)`},{question:"What is the function `scipy.stats.sem()` and how is it used in statistical confidence intervals?",shortAnswer:"SEM computes the Standard Error of the Mean: $\\text{SEM} = \\frac{s}{\\sqrt{n}}$.",explanation:"While standard deviation ($s$) measures the variability of individual observations in the sample, `stats.sem(data)` measures the precision of the sample mean as an estimate of the true population mean. It is directly used to construct 95% margin-of-error confidence intervals.",hint:"SEM decreases as sample size n increases: s / sqrt(n).",level:"advanced",codeExample:`from scipy import stats
import numpy as np

sample = np.array([102, 105, 98, 103, 101, 99, 104])
sem = stats.sem(sample)
mean = np.mean(sample)
ci_95 = (mean - 1.96 * sem, mean + 1.96 * sem)
print(f'Sample Mean: {mean:.2f} | 95% CI: [{ci_95[0]:.2f}, {ci_95[1]:.2f}]')`}],v=[{name:"Barrackpore Exam Scores",values:[78,85,92,88,75,60,95,89,90,82,88,94]},{name:"Salaries with Outlier (₹ Lakhs)",values:[3.5,4,4.2,4.5,4.8,5,5.2,5.5,6,50]},{name:"Symmetric Normal Feature",values:[10,12,14,15,15,16,16,17,18,20]},{name:"Heavy Tailed Metric",values:[2,3,5,8,12,20,35,70,150]}],h=[{id:"part1",fileName:"01_descriptive_stats_describe.py",title:"1. Single-Pass describe() Metrics",badge:"Summary NamedTuple",code:$,summary:"Demonstrates stats.describe() calculating nobs, minmax, mean, variance, skewness, and kurtosis in one C pass."},{id:"part2",fileName:"02_trimmed_and_geometric_means.py",title:"2. Trimmed, Geometric & Harmonic Means",badge:"Central Tendency",code:z,summary:"Compares outlier-robust stats.trim_mean, growth-rate stats.gmean, and classification F1-metric stats.hmean."},{id:"part3",fileName:"03_skewness_and_kurtosis.py",title:"3. Skewness & Fisher Kurtosis Deep Dive",badge:"Shape & Tails",code:H,summary:"Visualizes positive vs negative skewness and explains Fisher's excess kurtosis where Normal = 0.0."}];function ee(){const[n,w]=d.useState("interactive"),[c,k]=d.useState("part1"),[f,b]=d.useState(v[0].values.join(", ")),[o,N]=d.useState(10),l=h.find(t=>t.id===c)||h[0],r=f.split(",").map(t=>parseFloat(t.trim())).filter(t=>!isNaN(t)).sort((t,a)=>t-a),s=r.length,i=s>0?r.reduce((t,a)=>t+a,0)/s:0;s>0&&(s%2===0?(r[s/2-1]+r[s/2])/2:r[Math.floor(s/2)]);const p=Math.floor(s*(o/100)),u=s>2*p?r.slice(p,s-p):r,S=u.length>0?u.reduce((t,a)=>t+a,0)/u.length:0,g=s>1?r.reduce((t,a)=>t+Math.pow(a-i,2),0)/(s-1):0,j=Math.sqrt(g),_=s>0?r.reduce((t,a)=>t+Math.pow(a-i,3),0)/s:0,m=s>0?r.reduce((t,a)=>t+Math.pow(a-i,2),0)/s:0,x=m>0?_/Math.pow(m,1.5):0,M=s>0?r.reduce((t,a)=>t+Math.pow(a-i,4),0)/s:0,y=m>0?M/Math.pow(m,2)-3:0;return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 border border-teal-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(P,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 3"})]}),e.jsxs("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:["Descriptive Statistics with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"scipy.stats"})]}),e.jsxs("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:["Computing single-pass moments with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"stats.describe()"}),", robust trimmed/harmonic means, skewness asymmetry, and Fisher’s excess kurtosis for exploratory ML pipelines."]})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Moments Calculator",icon:R},{id:"code",label:"Python Code Lab",icon:A},{id:"notes",label:"Revision Notes",icon:E},{id:"quiz",label:"Practice & FAQs",icon:D}].map(t=>{const a=t.icon,T=n===t.id;return e.jsxs("button",{onClick:()=>w(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${T?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(a,{className:"w-4 h-4"}),e.jsx("span",{children:t.label})]},t.id)})})]}),n==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx(L,{className:"w-5 h-5 text-teal-400"}),e.jsx("span",{children:"Live SciPy Stats Moments Calculator"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:v.map((t,a)=>e.jsx("button",{onClick:()=>b(t.values.join(", ")),className:"px-2.5 py-1 rounded-lg text-xs bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition",children:t.name},a))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs text-slate-400 font-semibold uppercase tracking-wider block",children:"Comma-Separated Data Array:"}),e.jsx("input",{type:"text",value:f,onChange:t=>b(t.target.value),className:"w-full p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-sm text-teal-300 focus:outline-none focus:border-teal-500 transition"})]}),e.jsxs("div",{className:"flex items-center gap-4 bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx(Q,{className:"w-4 h-4 text-teal-400 shrink-0"}),e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-400",children:"Trim Percentage (Trimmed Mean):"}),e.jsxs("span",{className:"text-teal-400 font-mono font-bold",children:[o,"% per tail"]})]}),e.jsx("input",{type:"range",min:"0",max:"40",step:"5",value:o,onChange:t=>N(parseInt(t.target.value)),className:"w-full accent-teal-500 bg-slate-800 rounded-lg cursor-pointer"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] font-mono uppercase text-slate-500 font-bold block",children:"Sample Size (nobs)"}),e.jsx("p",{className:"text-xl font-bold text-white font-mono",children:s}),e.jsx("span",{className:"text-[10px] text-slate-400",children:"Total points"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] font-mono uppercase text-teal-400 font-bold block",children:"Arithmetic Mean"}),e.jsx("p",{className:"text-xl font-bold text-teal-300 font-mono",children:i.toFixed(2)}),e.jsx("span",{className:"text-[10px] text-slate-400",children:"1st moment"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1",children:[e.jsxs("span",{className:"text-[10px] font-mono uppercase text-sky-400 font-bold block",children:["Trimmed Mean (",o,"%)"]}),e.jsx("p",{className:"text-xl font-bold text-sky-300 font-mono",children:S.toFixed(2)}),e.jsx("span",{className:"text-[10px] text-slate-400",children:"stats.trim_mean"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] font-mono uppercase text-emerald-400 font-bold block",children:"Variance / Std"}),e.jsx("p",{className:"text-xl font-bold text-emerald-300 font-mono",children:j.toFixed(2)}),e.jsxs("span",{className:"text-[10px] text-slate-400",children:["Var: ",g.toFixed(2)]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] font-mono uppercase text-amber-400 font-bold block",children:"Skewness (Asymmetry)"}),e.jsx("p",{className:"text-xl font-bold text-amber-300 font-mono",children:x.toFixed(3)}),e.jsx("span",{className:"text-[10px] text-slate-400",children:x>.5?"Right Skewed":x<-.5?"Left Skewed":"Symmetric"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] font-mono uppercase text-purple-400 font-bold block",children:"Fisher Kurtosis"}),e.jsx("p",{className:"text-xl font-bold text-purple-300 font-mono",children:y.toFixed(3)}),e.jsx("span",{className:"text-[10px] text-slate-400",children:y>0?"Leptokurtic (Tails)":"Platykurtic"})]})]})]}),n==="code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:h.map(t=>e.jsxs("button",{onClick:()=>k(t.id),className:`p-3.5 rounded-xl border text-left transition-all ${c===t.id?"bg-teal-950/40 border-teal-500 shadow-md shadow-teal-950/40 scale-[1.02]":"bg-slate-900/80 border-slate-800 hover:bg-slate-850 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${c===t.id?"bg-teal-500/20 text-teal-300 border-teal-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:t.badge}),e.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:".py"})]}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:t.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-1 mt-1",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-teal-300",children:l.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:l.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Descriptive Stats Suite"})]}),e.jsx(I,{fileModule:l.code,title:l.fileName})]})]}),n==="notes"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(F,{note:"Always check skewness and kurtosis before applying parametric models like Linear Regression or PCA. High skewness (>1.0) means you must apply a log or Box-Cox transform. And when dealing with real-world financial or salary data with outliers, use `stats.trim_mean` instead of standard `np.mean`. — Sukanta Hui, Barrackpore ML Lab"}),e.jsx("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(q,{content:K,title:"Descriptive Statistics with scipy.stats — Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 3 Study Note",downloadFileName:"scipy_descriptive_stats_note.txt"})})]}),n==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsx(C,{title:"Descriptive Statistics with scipy.stats — Domain FAQs",subtitle:"Master single-pass describe() routines, trimmed/geometric means, skewness, and Fisher kurtosis",questions:B})})]})})}export{ee as default};
