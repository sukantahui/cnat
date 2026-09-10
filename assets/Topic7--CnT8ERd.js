import{b as n,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{az as U,S as X,k as J,B as P,aa as H,cq as Z,f as q,g as D}from"./vendor-icons-DFC0rBCP.js";const ee=`"""\r
Topic 7: One-Sample Student's t-Test via scipy.stats.ttest_1samp\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# Problem Statement: An ICSE/ISC coaching center in Shyamnagar claims their students \r
# achieve an average of 80 marks in computer science.\r
# We sample 10 students:\r
sample_marks = np.array([82, 85, 88, 79, 84, 91, 87, 83, 86, 90])\r
claimed_mean = 80.0\r
\r
# Run 1-sample t-test\r
t_stat, p_val = stats.ttest_1samp(sample_marks, popmean=claimed_mean)\r
\r
print("--- 1-Sample Student's t-Test ---")\r
print(f"Sample Observations : {sample_marks}")\r
print(f"Sample Mean         : {np.mean(sample_marks):.2f}")\r
print(f"Hypothesized Mean   : {claimed_mean}")\r
print(f"t-statistic         : {t_stat:.4f}")\r
print(f"p-value (two-sided) : {p_val:.6f}")\r
\r
alpha = 0.05\r
if p_val < alpha:\r
    print(f"\\nConclusion: Reject H0 at alpha={alpha}. The true mean is significantly higher than {claimed_mean}!")\r
else:\r
    print(f"\\nConclusion: Fail to reject H0. No significant difference from {claimed_mean}.")\r
`,te=`"""\r
Topic 7: Independent Two-Sample t-Test via scipy.stats.ttest_ind\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# Comparing convergence iterations between two machine learning optimizers\r
# Optimizer A (Standard SGD):\r
group_a = np.array([45, 52, 48, 55, 50, 49, 53, 47, 51])\r
# Optimizer B (Adam Optimizer with momentum):\r
group_b = np.array([32, 35, 29, 38, 34, 30, 36, 31, 33])\r
\r
# Independent two-sample t-test (equal_var=False performs Welch's robust t-test)\r
t_stat, p_val = stats.ttest_ind(group_a, group_b, equal_var=False)\r
\r
print("--- Independent 2-Sample Welch's t-Test ---")\r
print(f"Group A Mean (SGD)  : {np.mean(group_a):.2f} epochs")\r
print(f"Group B Mean (Adam) : {np.mean(group_b):.2f} epochs")\r
print(f"t-statistic         : {t_stat:.4f}")\r
print(f"p-value             : {p_val:.8f}")\r
\r
if p_val < 0.01:\r
    print("\\nConclusion: Adam optimizer converges with significantly fewer epochs than SGD (p < 0.01)!")\r
`,se=`"""\r
Topic 7: Paired t-Test (stats.ttest_rel) for Model Comparison Across K-Folds\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# 10-Fold Cross-Validation accuracy scores (%) for two models on the exact same folds\r
model_random_forest = np.array([88.2, 89.1, 87.5, 90.0, 88.8, 89.5, 87.9, 90.2, 88.4, 89.8])\r
model_decision_tree = np.array([82.1, 83.5, 81.9, 84.0, 82.5, 83.8, 81.2, 84.5, 82.0, 83.1])\r
\r
# Paired related samples t-test\r
t_stat, p_val = stats.ttest_rel(model_random_forest, model_decision_tree)\r
\r
print("--- 10-Fold Cross-Validation Paired t-Test ---")\r
print(f"Random Forest Mean Accuracy : {np.mean(model_random_forest):.2f}%")\r
print(f"Decision Tree Mean Accuracy : {np.mean(model_decision_tree):.2f}%")\r
print(f"Paired t-statistic          : {t_stat:.4f}")\r
print(f"p-value                     : {p_val:.10f}")\r
print("\\nConclusion: The ensemble Random Forest outperforms single Decision Tree with extreme statistical significance.")\r
`,R=`================================================================================\r
SCIPY OVERVIEW: TOPIC 7 - SCIPY.STATS.TTEST_IND AND TTEST_1SAMP\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. THE THREE STUDENT'S T-TEST VARIANTS IN SCIPY:\r
--------------------------------------------------------------------------------\r
1. \`stats.ttest_1samp(a, popmean)\`:\r
   - Compares the sample mean of vector \`a\` against a known benchmark scalar \`popmean\`.\r
   - Null Hypothesis $H_0: \\mu = \\mu_0$.\r
\r
2. \`stats.ttest_ind(a, b, equal_var=False)\`:\r
   - Compares means between two independent, unrelated groups \`a\` and \`b\`.\r
   - Setting \`equal_var=False\` performs Welch's t-test (which does not assume equal\r
     population variances - standard industry recommendation).\r
   - Null Hypothesis $H_0: \\mu_A = \\mu_B$.\r
\r
3. \`stats.ttest_rel(a, b)\`:\r
   - Compares two paired, dependent measurements on the exact same subjects or folds\r
     (e.g., comparing Model A vs Model B on the exact same 10 CV test folds).\r
\r
2. PRACTICAL MACHINE LEARNING USE CASES:\r
--------------------------------------------------------------------------------\r
- Model Benchmark Validation: Determining if accuracy gain (+1.8%) from hyperparameter\r
  tuning is statistically real or a random fluke.\r
- A/B Testing Web Deployments: Testing conversion rate changes between UI designs.\r
- Feature Target Independence: Assessing whether binary classification target labels\r
  exhibit significantly different feature means.\r
`,C=[{id:1,question:"When should you use `scipy.stats.ttest_rel()` instead of `scipy.stats.ttest_ind()` in Machine Learning?",options:["When comparing two completely independent groups of users from different cities","When evaluating two different ML algorithms on the exact same cross-validation test folds (paired observations)","When the dataset is larger than 1,000,000 rows","When features are categorical strings"],correctAnswer:1,explanation:"`ttest_rel()` is for paired/related samples, such as evaluating two models tested on identical CV splits."},{id:2,question:"Why is `equal_var=False` recommended when running `scipy.stats.ttest_ind(a, b)`?",options:["It disables calculations to run faster","It performs Welch's t-test, which does not assume equal population variance and prevents inflated Type I error rates","It forces both datasets to have zero variance","It converts the test to a Chi-Square test"],correctAnswer:1,explanation:"Welch's t-test (`equal_var=False`) is robust and does not assume equal variances between the two groups."},{id:3,question:"What does `scipy.stats.ttest_1samp(sample, popmean=70)` test?",options:["Whether the sample mean differs significantly from the hypothesized population mean of 70","Whether the sample size is equal to 70","Whether all values in sample are greater than 70","Whether the standard deviation is 70"],correctAnswer:0,explanation:"`ttest_1samp` evaluates the null hypothesis that the true population mean equals the specified scalar `popmean`."}];function le(){const[c,z]=n.useState("interactive"),[v,G]=n.useState(0),[h,T]=n.useState(!1),[l,A]=n.useState("2samp"),[y,V]=n.useState(75),[M,$]=n.useState("88, 89, 87, 90, 88, 89, 87, 90, 88, 89"),[k,L]=n.useState("82, 83, 81, 84, 82, 83, 81, 84, 82, 83"),[I,O]=n.useState({}),[o,Q]=n.useState(!1),N=[{name:"01_one_sample_ttest_1samp.py",code:ee},{name:"02_independent_two_sample_ttest_ind.py",code:te},{name:"03_paired_ttest_rel_model_eval.py",code:se}],F=t=>{navigator.clipboard.writeText(t),T(!0),setTimeout(()=>T(!1),2e3)},Y=(t,s)=>{o||O(a=>({...a,[t]:s}))},K=()=>{let t=0;return C.forEach(s=>{I[s.id]===s.correctAnswer&&t++}),t},B=t=>t.split(",").map(s=>parseFloat(s.trim())).filter(s=>!isNaN(s)),j=B(M),_=B(k),W=t=>t.length>0?t.reduce((s,a)=>s+a,0)/t.length:0,E=(t,s)=>t.length>1?t.reduce((a,d)=>a+Math.pow(d-s,2),0)/(t.length-1):0,m=W(j),u=E(j,m),r=j.length,b=W(_),w=E(_,b),i=_.length;let f=0,S=1;if(l==="1samp"&&r>1){const t=Math.sqrt(u/r);f=t>0?(m-y)/t:0,S=r-1}else if(l==="2samp"&&r>1&&i>1){const t=Math.sqrt(u/r+w/i);f=t>0?(m-b)/t:0;const s=Math.pow(u/r+w/i,2),a=Math.pow(u/r,2)/(r-1)+Math.pow(w/i,2)/(i-1);S=a>0?s/a:1}const p=Math.min(1,2*(1-(t=>{const s=1/(1+.2316419*Math.abs(t)),d=.3989423*Math.exp(-t*t/2)*s*(.3193815+s*(-.3565638+s*(1.781478+s*(-1.821256+s*1.330274))));return t>0?1-d:d})(Math.abs(f))));return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(U,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 7"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"scipy.stats.ttest_ind & ttest_1samp"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Perform Student’s and Welch’s t-tests in Python. Compare sample means against target benchmarks and statistically validate ML model cross-validation benchmarks."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"t-Test Calculation Engine",icon:X},{id:"code",label:"Python Code Lab",icon:J},{id:"notes",label:"Revision Notes",icon:P},{id:"quiz",label:"Knowledge Check",icon:H}].map(t=>{const s=t.icon,a=c===t.id;return e.jsxs("button",{onClick:()=>z(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${a?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})]}),c==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(Z,{className:"w-4 h-4"}),e.jsx("span",{children:"Select Test Method"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>A("2samp"),className:`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${l==="2samp"?"bg-emerald-600 text-white":"bg-slate-950 text-slate-400"}`,children:"2-Sample Independent (ttest_ind)"}),e.jsx("button",{onClick:()=>A("1samp"),className:`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${l==="1samp"?"bg-emerald-600 text-white":"bg-slate-950 text-slate-400"}`,children:"1-Sample Benchmark (ttest_1samp)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-semibold text-slate-300",children:l==="2samp"?"Group A / Model 1 Scores (e.g. Random Forest %):":"Sample Measurements:"}),e.jsx("input",{type:"text",value:M,onChange:t=>$(t.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs font-mono text-emerald-400 focus:outline-none focus:border-emerald-500"}),e.jsxs("span",{className:"text-[10px] text-slate-400",children:["Mean: ",m.toFixed(2)," | n = ",r]})]}),l==="2samp"?e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-semibold text-slate-300",children:"Group B / Model 2 Scores (e.g. Decision Tree %):"}),e.jsx("input",{type:"text",value:k,onChange:t=>L(t.target.value),className:"w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs font-mono text-cyan-400 focus:outline-none focus:border-emerald-500"}),e.jsxs("span",{className:"text-[10px] text-slate-400",children:["Mean: ",b.toFixed(2)," | n = ",i]})]}):e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-semibold text-slate-300",children:"Hypothesized Population Mean (\\mu_0):"}),e.jsx("input",{type:"number",value:y,onChange:t=>V(Number(t.target.value)),className:"w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs font-mono text-cyan-400 focus:outline-none focus:border-emerald-500"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"t-Statistic"}),e.jsx("div",{className:"text-2xl font-bold text-emerald-400 font-mono",children:f.toFixed(4)}),e.jsxs("span",{className:"text-[11px] text-slate-500",children:["Degrees of freedom: ",S.toFixed(1)]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Two-Tailed p-Value"}),e.jsx("div",{className:"text-2xl font-bold text-teal-400 font-mono",children:p<1e-4?"< 0.0001":p.toFixed(4)}),e.jsx("span",{className:"text-[11px] text-slate-500",children:"Significance Level \\alpha = 0.05"})]}),e.jsxs("div",{className:`border rounded-2xl p-5 space-y-1 ${p<.05?"bg-emerald-950/40 border-emerald-500":"bg-amber-950/40 border-amber-500"}`,children:[e.jsx("span",{className:"text-xs font-bold font-mono",children:p<.05?"STATISTICALLY SIGNIFICANT":"NOT SIGNIFICANT"}),e.jsx("div",{className:"text-xs text-slate-300 leading-relaxed mt-1",children:p<.05?`Reject H0: The difference of ${Math.abs(m-(l==="2samp"?b:y)).toFixed(2)} is real and unlikely due to noise.`:"Fail to reject H0: Not enough statistical evidence to claim difference."})]})]})]}),c==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:N.map((t,s)=>e.jsx("button",{onClick:()=>G(s),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${v===s?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:t.name},s))}),e.jsxs("button",{onClick:()=>F(N[v].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[h?e.jsx(q,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(D,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:h?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:N[v].code})})]}),c==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(P,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>F(R),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[h?e.jsx(q,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(D,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:h?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:R})]}),c==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(H,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),o&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",K()," / ",C.length]})]}),e.jsx("div",{className:"space-y-6",children:C.map((t,s)=>{const a=I[t.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[s+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:t.options.map((d,x)=>{let g="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return a===x&&(g="bg-emerald-950 border-emerald-500 text-white"),o&&(x===t.correctAnswer?g="bg-emerald-900/80 border-emerald-500 text-white font-semibold":a===x&&a!==t.correctAnswer&&(g="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>Y(t.id,x),className:`p-3 rounded-lg border text-left text-xs transition-all ${g}`,children:d},x)})}),o&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:t.explanation})]})]},t.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>Q(!o),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:o?"Reset Quiz":"Submit Answers"})})]})]})})}export{le as default};
