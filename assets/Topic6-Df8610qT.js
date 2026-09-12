import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{az as y,S as F,k as O,B as j,aa as N,H as P,aB as u,cg as L,f as w,g as T}from"./vendor-icons-ri6cs58t.js";const M=`"""\r
Topic 6: Hypothesis Testing Framework & Logic\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# Scenario: An online learning platform in Barrackpore tests a new interactive AI tutorial.\r
# H0 (Null Hypothesis): The new AI platform does NOT change exam scores (\\mu_new = \\mu_traditional = 75).\r
# H1 (Alternative Hypothesis): The new AI platform significantly changes exam scores (\\mu_new != 75).\r
\r
# Sample scores of 15 students who studied with the new AI platform\r
scores = np.array([82, 79, 88, 85, 78, 92, 80, 84, 87, 81, 76, 89, 91, 83, 86])\r
\r
# 1-Sample Student's t-test comparing against benchmark 75\r
t_stat, p_val = stats.ttest_1samp(scores, popmean=75)\r
\r
print("--- Statistical Hypothesis Test ---")\r
print(f"Sample Mean Score : {np.mean(scores):.2f}")\r
print(f"t-Statistic       : {t_stat:.4f}")\r
print(f"p-Value           : {p_val:.6f}")\r
\r
alpha = 0.05\r
if p_val < alpha:\r
    print(f"\\nResult: p-value ({p_val:.4f}) < alpha ({alpha}) --> REJECT Null Hypothesis (H0).")\r
    print("Conclusion: Statistically significant evidence that AI tutorials improve scores!")\r
else:\r
    print(f"\\nResult: p-value ({p_val:.4f}) >= alpha ({alpha}) --> FAIL TO REJECT H0.")\r
`,B=`"""\r
Topic 6: Significance Threshold (\\alpha) and p-Value Decisions\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
def interpret_p_value(p_val, alpha=0.05):\r
    """\r
    Standard statistical decision engine.\r
    p-value represents the probability of observing sample data at least as extreme\r
    as what was recorded, assuming H0 is true.\r
    """\r
    print(f"Observed p-value: {p_val:.5f} (Significance Level \\u03b1 = {alpha})")\r
    if p_val < 0.001:\r
        return "Strong evidence against H0 (p < 0.001) - Highly Statistically Significant"\r
    elif p_val < alpha:\r
        return f"Evidence against H0 (p < {alpha}) - Statistically Significant"\r
    elif p_val < 0.10:\r
        return "Marginal / weak evidence against H0 (trend observed, but inconclusive)"\r
    else:\r
        return "Insufficient evidence against H0 (fail to reject null)"\r
\r
print(interpret_p_value(0.0032, 0.05))\r
print(interpret_p_value(0.2410, 0.05))\r
`,z=`"""\r
Topic 6: Type I Error (\\alpha) vs Type II Error (\\beta) Matrix\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
# Confusion matrix in hypothesis testing vs machine learning:\r
\r
print("=========================================================================")\r
print("HYPOTHESIS TESTING ERROR MATRIX")\r
print("=========================================================================")\r
print(f"{'Decision':<25} | {'H0 is Actually True':<25} | {'H0 is Actually False'}")\r
print("-" * 75)\r
print(f"{'Reject H0':<25} | {'Type I Error (\\u03b1)':<25} | {'Correct Decision (Power = 1-\\u03b2)'}")\r
print(f"{'':<25} | {'(False Positive)':<25} | {'(True Positive)'}")\r
print("-" * 75)\r
print(f"{'Fail to Reject H0':<25} | {'Correct Decision (1-\\u03b1)':<25} | {'Type II Error (\\u03b2)'}")\r
print(f"{'':<25} | {'(True Negative)':<25} | {'(False Negative)'}")\r
print("=========================================================================")\r
`,S=`================================================================================\r
SCIPY OVERVIEW: TOPIC 6 - HYPOTHESIS TESTING BASICS\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS STATISTICAL HYPOTHESIS TESTING?\r
--------------------------------------------------------------------------------\r
- A formal mathematical method to decide whether experimental evidence in sample data\r
  is genuinely real or simply due to random chance.\r
\r
2. CORE CONCEPTS:\r
--------------------------------------------------------------------------------\r
- Null Hypothesis (H0)        : Statement of no effect, no difference, or status quo.\r
- Alternative Hypothesis (H1) : Statement that an effect or significant difference exists.\r
- Significance Level (\\alpha) : Probability of committing Type I Error (standard = 0.05 or 5%).\r
- p-Value                     : Probability of obtaining test results at least as extreme\r
                                as observed, assuming H0 is true.\r
\r
3. THE DECISION RULE:\r
--------------------------------------------------------------------------------\r
- If p-value < \\alpha (e.g. 0.05) : Reject H0 (Result is statistically significant).\r
- If p-value \\ge \\alpha           : Fail to reject H0 (Insufficient evidence).\r
\r
4. ERROR TAXONOMY (RELATION TO ML):\r
--------------------------------------------------------------------------------\r
- Type I Error (\\alpha) : False Positive (Rejecting a true H0 - claiming a feature is\r
                          useful when it is actually random noise).\r
- Type II Error (\\beta) : False Negative (Failing to reject a false H0 - missing a true signal).\r
- Statistical Power (1-\\beta): Probability of correctly detecting an actual effect.\r
\r
5. HYPOTHESIS TESTING IN MACHINE LEARNING:\r
--------------------------------------------------------------------------------\r
- Feature Selection: ANOVA / F-tests to select features correlated with targets.\r
- A/B Testing: Evaluating if model update v2 significantly outperforms model v1.\r
- Algorithm Comparison: Paired t-tests on cross-validation folds.\r
`,b=[{id:1,question:"What does the Null Hypothesis (H0) represent in hypothesis testing?",options:["The statement that a strong and undeniable correlation exists","The default assumption of no effect, no difference, or no relationship between variables","The hypothesis that the sample size is too small","The machine learning loss function"],correctAnswer:1,explanation:"The Null Hypothesis (H0) is the baseline proposition that there is no true difference or effect, and that any observed variance is purely random noise."},{id:2,question:"If a statistical test produces a p-value of 0.012 at a significance level $\\alpha = 0.05$, what is the correct conclusion?",options:["Accept H0 because p-value is greater than zero","Reject H0 because p-value (0.012) is less than the significance threshold alpha (0.05)","Retest with another library","Inconclusive because sample size is not specified"],correctAnswer:1,explanation:"Because $p < \\alpha$, we reject the null hypothesis and conclude that the observed effect is statistically significant at the 5% level."},{id:3,question:"What is a Type I error in statistical decision making?",options:["Rejecting the null hypothesis when it is actually true (False Positive)","Failing to reject the null hypothesis when it is false (False Negative)","Dividing by zero in NumPy","Fitting an overparameterized deep neural net"],correctAnswer:0,explanation:"A Type I error occurs when we incorrectly reject a true null hypothesis (detecting an effect that does not actually exist, like a false alarm)."}];function Y(){const[i,H]=r.useState("interactive"),[x,C]=r.useState(0),[d,f]=r.useState(!1),[l,I]=r.useState(.05),[o,A]=r.useState(.024),[g,E]=r.useState({}),[n,_]=r.useState(!1),h=[{name:"01_null_vs_alt_hypothesis.py",code:M},{name:"02_p_value_interpretation_alpha.py",code:B},{name:"03_type1_type2_errors_demo.py",code:z}],v=t=>{navigator.clipboard.writeText(t),f(!0),setTimeout(()=>f(!1),2e3)},R=(t,s)=>{n||E(a=>({...a,[t]:s}))},k=()=>{let t=0;return b.forEach(s=>{g[s.id]===s.correctAnswer&&t++}),t},p=o<l;return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(y,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 6"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Hypothesis Testing Basics"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Master statistical significance, the Null vs Alternative Hypothesis framework ($H_0$ vs $H_1$), p-value thresholds ($\\alpha$), Type I / II errors, and ML model A/B validation."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Hypothesis Decision Studio",icon:F},{id:"code",label:"Python Code Lab",icon:O},{id:"notes",label:"Revision Notes",icon:j},{id:"quiz",label:"Knowledge Check",icon:N}].map(t=>{const s=t.icon,a=i===t.id;return e.jsxs("button",{onClick:()=>H(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${a?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})]}),i==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(y,{className:"w-4 h-4"}),e.jsx("span",{children:"Hypothesis Decision Engine Simulator"})]}),e.jsx("div",{className:"flex gap-2",children:[.01,.05,.1].map(t=>e.jsxs("button",{onClick:()=>I(t),className:`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${l===t?"bg-emerald-600 text-white":"bg-slate-950 text-slate-400 hover:text-white"}`,children:["α = ",t]},t))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Simulated p-value:"}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:o.toFixed(3)})]}),e.jsx("input",{type:"range",min:"0.001",max:"0.200",step:"0.001",value:o,onChange:t=>A(parseFloat(t.target.value)),className:"w-full accent-emerald-500"})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1",children:[e.jsxs("div",{children:[e.jsx("b",{children:"Null Hypothesis ($H_0$):"})," No difference between models / treatments."]}),e.jsxs("div",{children:[e.jsx("b",{children:"Significance Level ($\\alpha$):"})," Threshold for false alarm tolerance (",l*100,"%)."]})]})]}),e.jsxs("div",{className:`p-6 rounded-2xl border transition-all ${p?"bg-emerald-950/40 border-emerald-500":"bg-amber-950/40 border-amber-500"}`,children:[e.jsx("div",{className:"flex items-center gap-2 text-xs uppercase font-mono tracking-wider mb-2",children:p?e.jsxs("span",{className:"text-emerald-400 font-bold flex items-center gap-1.5",children:[e.jsx(P,{className:"w-4 h-4"})," REJECT NULL HYPOTHESIS (H0)"]}):e.jsxs("span",{className:"text-amber-400 font-bold flex items-center gap-1.5",children:[e.jsx(u,{className:"w-4 h-4"})," FAIL TO REJECT H0"]})}),e.jsx("div",{className:"text-sm font-semibold text-white",children:p?`Statistically Significant Result (p = ${o.toFixed(3)} < α = ${l})`:`Inconclusive / No Significant Effect (p = ${o.toFixed(3)} ≥ α = ${l})`}),e.jsx("p",{className:"text-xs text-slate-300 mt-2 leading-relaxed",children:p?"The probability of observing this data purely by random chance is under your threshold. You have sufficient evidence to accept the Alternative Hypothesis (H1).":"Observed variation could easily occur by random sampling noise. Retain the status quo or collect larger sample sizes."})]})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(L,{className:"w-4 h-4"}),e.jsx("span",{children:"Hypothesis Error Matrix & Relation to ML"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-950 border border-rose-900/50 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"font-bold text-rose-400 flex items-center gap-1.5",children:[e.jsx(u,{className:"w-4 h-4"}),e.jsx("span",{children:"Type I Error ($\\alpha$ / False Positive)"})]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Rejecting a true Null Hypothesis. Example in ML: Deploying a new feature because an A/B test falsely indicated higher user engagement due to random noise."})]}),e.jsxs("div",{className:"bg-slate-950 border border-amber-900/50 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"font-bold text-amber-400 flex items-center gap-1.5",children:[e.jsx(u,{className:"w-4 h-4"}),e.jsx("span",{children:"Type II Error ($\\beta$ / False Negative)"})]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Failing to reject a false Null Hypothesis. Example in ML: Discarding a genuinely superior neural net model because the evaluation test was underpowered."})]})]})]})]}),i==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:h.map((t,s)=>e.jsx("button",{onClick:()=>C(s),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${x===s?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:t.name},s))}),e.jsxs("button",{onClick:()=>v(h[x].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[d?e.jsx(w,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(T,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:d?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:h[x].code})})]}),i==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(j,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>v(S),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[d?e.jsx(w,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(T,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:d?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:S})]}),i==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(N,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),n&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",k()," / ",b.length]})]}),e.jsx("div",{className:"space-y-6",children:b.map((t,s)=>{const a=g[t.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[s+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:t.options.map(($,c)=>{let m="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return a===c&&(m="bg-emerald-950 border-emerald-500 text-white"),n&&(c===t.correctAnswer?m="bg-emerald-900/80 border-emerald-500 text-white font-semibold":a===c&&a!==t.correctAnswer&&(m="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>R(t.id,c),className:`p-3 rounded-lg border text-left text-xs transition-all ${m}`,children:$},c)})}),n&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:t.explanation})]})]},t.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>_(!n),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:n?"Reset Quiz":"Submit Answers"})})]})]})})}export{Y as default};
