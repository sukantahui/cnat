import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{aS as U,S as G,k as V,B as E,aa as M,bp as W,cl as q,f as y,g as O,ad as K}from"./vendor-icons-ri6cs58t.js";const X=`"""\r
Topic 13: Model Evaluation (Classification)\r
Script 1: Accuracy, Precision, Recall, and F1-Score in Scikit-learn\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.metrics import (\r
    accuracy_score,\r
    precision_score,\r
    recall_score,\r
    f1_score,\r
    classification_report\r
)\r
\r
# Ground truth test labels vs Model predictions\r
# 1 = Disease/Fraud Positive, 0 = Healthy/Normal Negative\r
y_true = np.array([1, 1, 1, 1, 0, 0, 0, 0, 0, 0])\r
y_pred = np.array([1, 1, 0, 1, 0, 0, 1, 0, 0, 0])\r
\r
# 1. Basic scalar metrics\r
acc = accuracy_score(y_true, y_pred)\r
prec = precision_score(y_true, y_pred)\r
rec = recall_score(y_true, y_pred)\r
f1 = f1_score(y_true, y_pred)\r
\r
print("--- Core Classification Metrics ---")\r
print(f"Accuracy:  {acc:.4f} ({acc*100:.1f}%)")\r
print(f"Precision: {prec:.4f} (TP / (TP + FP) = 3 / (3 + 1))")\r
print(f"Recall:    {rec:.4f} (TP / (TP + FN) = 3 / (3 + 1))")\r
print(f"F1-Score:  {f1:.4f} (Harmonic mean of Precision & Recall)")\r
\r
# 2. Comprehensive text report\r
print("\\n--- Detailed classification_report() ---")\r
print(classification_report(y_true, y_pred, target_names=['Class 0 (Normal)', 'Class 1 (Disease)']))\r
`,Y=`"""\r
Topic 13: Model Evaluation (Classification)\r
Script 2: Confusion Matrix Calculation and Structure\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.metrics import confusion_matrix\r
\r
# True targets vs Predictions\r
y_true = np.array([1, 1, 1, 1, 0, 0, 0, 0, 0, 0])\r
y_pred = np.array([1, 1, 0, 1, 0, 0, 1, 0, 0, 0])\r
\r
# Compute 2x2 confusion matrix\r
cm = confusion_matrix(y_true, y_pred)\r
\r
print("--- Raw 2x2 Confusion Matrix Array ---")\r
print(cm)\r
\r
# Unpack 2x2 confusion matrix components\r
tn, fp, fn, tp = cm.ravel()\r
\r
print("\\n--- Confusion Matrix Elements Breakdown ---")\r
print(f"True Negatives (TN):  {tn} (Correctly classified as 0)")\r
print(f"False Positives (FP): {fp} (Type I Error: Predicted 1, actually 0)")\r
print(f"False Negatives (FN): {fn} (Type II Error: Missed positive, actually 1)")\r
print(f"True Positives (TP):  {tp} (Correctly classified as 1)")\r
\r
# Format into neat Pandas DataFrame with readable labels\r
cm_df = pd.DataFrame(\r
    cm,\r
    index=['Actual: Negative (0)', 'Actual: Positive (1)'],\r
    columns=['Predicted: Negative (0)', 'Predicted: Positive (1)']\r
)\r
print("\\n--- Formatted Matrix ---")\r
print(cm_df)\r
`,J=`"""\r
Topic 13: Model Evaluation (Classification)\r
Script 3: Multi-class Evaluation & Macro vs Weighted Averaging\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.metrics import classification_report, f1_score\r
\r
# 3-Class problem: 0 = Distinction, 1 = First Class, 2 = Pass\r
# Notice severe class imbalance: Class 0 is rare (2 samples), Class 2 is common (10 samples)\r
y_true = np.array([0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2])\r
y_pred = np.array([0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2])\r
\r
target_names = ['Distinction (0)', 'First Class (1)', 'Pass (2)']\r
\r
print("--- Multi-Class Classification Report ---")\r
print(classification_report(y_true, y_pred, target_names=target_names))\r
\r
# Compare Averaging Methods:\r
# Macro: Unweighted arithmetic mean across classes (treats small classes equally)\r
# Weighted: Calculates metrics for each label, and finds their average weighted by support (sample count)\r
f1_macro = f1_score(y_true, y_pred, average='macro')\r
f1_weighted = f1_score(y_true, y_pred, average='weighted')\r
\r
print("--- F1-Score Averaging Comparison ---")\r
print(f"F1 (Macro average):    {f1_macro:.4f} (Heavily penalizes poor performance on rare classes)")\r
print(f"F1 (Weighted average): {f1_weighted:.4f} (Dominated by large majority classes)")\r
`,$=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 13 - CLASSIFICATION MODEL EVALUATION\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. THE 2x2 CONFUSION MATRIX\r
--------------------------------------------------------------------------------\r
A contingency table summarizing the alignment between ground truth and predicted labels:\r
\r
                      PREDICTED NEGATIVE (0)    PREDICTED POSITIVE (1)\r
ACTUAL NEGATIVE (0):  True Negative (TN)        False Positive (FP - Type I Error)\r
ACTUAL POSITIVE (1):  False Negative (FN - Type II) True Positive (TP)\r
\r
2. CORE CLASSIFICATION METRICS & FORMULAS\r
--------------------------------------------------------------------------------\r
A. Accuracy:\r
   $\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}$\r
   - Misleading in imbalanced datasets! (e.g. 99% accuracy by predicting all negative on rare disease).\r
\r
B. Precision (Positive Predictive Value):\r
   $\\text{Precision} = \\frac{TP}{TP + FP}$\r
   - Question answered: "Out of all instances predicted as Positive, how many were actually Positive?"\r
   - High Precision priority: Spam detection (don't mark important emails as spam).\r
\r
C. Recall / Sensitivity (True Positive Rate):\r
   $\\text{Recall} = \\frac{TP}{TP + FN}$\r
   - Question answered: "Out of all actual Positive instances, how many did the model catch?"\r
   - High Recall priority: Cancer detection / Fraud detection (don't miss any diseased patients!).\r
\r
D. F1-Score:\r
   $F1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}} = \\frac{2 \\cdot TP}{2 \\cdot TP + FP + FN}$\r
   - Harmonic mean balancing Precision and Recall.\r
\r
3. MACRO VS WEIGHTED AVERAGING IN MULTI-CLASS REPORTS\r
--------------------------------------------------------------------------------\r
- \`macro avg\`: Computes the metric for each class independently and takes the simple arithmetic average. Gives EQUAL weight to rare classes!\r
- \`weighted avg\`: Computes the metric for each class and weights each score by its \`support\` (number of true instances). Majority classes dominate.\r
\r
4. BARRACKPORE CLASSROOM RULES (Sukanta Hui)\r
--------------------------------------------------------------------------------\r
- Never evaluate imbalanced medical or fraud models on \`accuracy_score\` alone!\r
- Always inspect \`confusion_matrix(y_true, y_pred)\` and \`classification_report(y_true, y_pred)\`.\r
================================================================================\r
`,N=[{id:1,question:"Why is `accuracy_score` often dangerously misleading on highly imbalanced datasets (e.g., 99% healthy patients, 1% cancer patients)?",options:["Because Python roundoff errors zero out accuracy values","Because a naive model that predicts 'Healthy' for 100% of cases achieves 99% accuracy while catching 0% of cancer cases","Because Scikit-learn throws an error if accuracy exceeds 95%","Because accuracy cannot be computed for binary outcomes"],correctAnswer:1,explanation:"In severely imbalanced scenarios, a dummy baseline model that always predicts the majority class achieves high raw accuracy despite failing completely on the minority target of interest."},{id:2,question:"In a medical tumor diagnosis scenario where missing a malignant cancer case (False Negative) has catastrophic consequences, which metric should be maximized?",options:["Precision","Recall (Sensitivity)","Specificity","Accuracy"],correctAnswer:1,explanation:"Recall measures $TP / (TP + FN)$. Maximizing Recall minimizes False Negatives ($FN$), ensuring as few cancer cases as possible slip through undetected."},{id:3,question:"What is the mathematical formulation of the F1-Score?",options:["Arithmetic mean: (Precision + Recall) / 2","Harmonic mean: 2 * (Precision * Recall) / (Precision + Recall)","Geometric mean: sqrt(Precision * Recall)","Absolute difference: |Precision - Recall|"],correctAnswer:1,explanation:"The F1-score is the harmonic mean of Precision and Recall, which penalizes extreme imbalances between the two metrics much more heavily than a simple arithmetic average."},{id:4,question:"In `classification_report`, how does `macro avg` differ from `weighted avg`?",options:["Macro average takes the simple unweighted arithmetic mean across all classes (treating rare classes with equal importance), whereas weighted average weights each class by its support","Macro average only includes binary classes, whereas weighted includes multiclass","Weighted average only computes Precision, while macro computes Recall","Macro average ignores True Positives"],correctAnswer:0,explanation:"`macro avg` treats all classes equally regardless of sample counts, making it great for detecting poor performance on minority classes. `weighted avg` weights each class by its frequency (support)."}],Z=[{id:"medical",name:"Medical Cancer Screening (High Recall Priority)",desc:"Crucial to catch every tumor; False Negatives are catastrophic.",tp:45,fp:15,fn:2,tn:138},{id:"spam",name:"Email Spam Filter (High Precision Priority)",desc:"Crucial to avoid filtering legitimate emails; False Positives are catastrophic.",tp:80,fp:2,fn:18,tn:200},{id:"imbalanced",name:"Severe Fraud Imbalance (Accuracy Trap)",desc:"99% Legit, 1% Fraud. Shows why raw accuracy is deceptive.",tp:2,fp:1,fn:8,tn:989},{id:"balanced",name:"Standard Balanced Student Evaluation",desc:"Even distribution of Pass and Fail instances.",tp:45,fp:5,fn:5,tn:45}];function ae(){const[l,u]=i.useState("interactive"),[b,H]=i.useState(0),[j,w]=i.useState(!1),[t,C]=i.useState(45),[r,P]=i.useState(15),[c,T]=i.useState(2),[a,S]=i.useState(138),[d,_]=i.useState({}),[o,F]=i.useState(!1),m=[{name:"01_classification_metrics_basics.py",code:X},{name:"02_confusion_matrix_and_display.py",code:Y},{name:"03_precision_recall_f1_tradeoff.py",code:J}],A=s=>{navigator.clipboard.writeText(s),w(!0),setTimeout(()=>w(!1),2e3)},L=(s,n)=>{o||_(v=>({...v,[s]:n}))},B=()=>{let s=0;return N.forEach(n=>{d[n.id]===n.correctAnswer&&s++}),s},D=s=>{C(s.tp),P(s.fp),T(s.fn),S(s.tn)},R=t+r+c+a||1,z=(t+a)/R,x=t+r>0?t/(t+r):0,p=t+c>0?t/(t+c):0,g=a+r>0?a/(a+r):0,k=x+p>0?2*x*p/(x+p):0;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400 border border-emerald-500/30",children:e.jsx(U,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",children:"Topic 13 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.metrics"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Model Evaluation: Confusion Matrix & Classification Metrics"})]})]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:"Master the complete taxonomy of classification performance. Move beyond deceptive accuracy to evaluate Precision, Recall, F1-Score, Type I vs Type II errors, and macro vs weighted averages."})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>u("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${l==="interactive"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(G,{className:"w-4 h-4"}),"Metrics & Matrix Studio"]}),e.jsxs("button",{onClick:()=>u("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${l==="code"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(V,{className:"w-4 h-4"}),"Python Code Lab (",m.length,")"]}),e.jsxs("button",{onClick:()=>u("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${l==="notes"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(E,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>u("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${l==="quiz"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(M,{className:"w-4 h-4"}),"Knowledge Check"]})]}),l==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:Z.map(s=>e.jsxs("button",{onClick:()=>D(s),className:"p-3.5 rounded-xl border bg-slate-900/60 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 text-left transition-all",children:[e.jsx("div",{className:"font-semibold text-slate-200 text-xs",children:s.name}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:s.desc})]},s.id))}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsx("div",{className:"lg:col-span-6 space-y-4",children:e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(W,{className:"w-4 h-4 text-emerald-400"}),"Interactive 2x2 Confusion Matrix"]}),e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:["Total: ",R," samples"]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"font-bold text-emerald-300",children:"True Negative (TN)"}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:a})]}),e.jsx("div",{className:"text-[10px] text-slate-400",children:"Actual: 0, Pred: 0"}),e.jsx("input",{type:"range",min:"0",max:"200",value:a,onChange:s=>S(Number(s.target.value)),className:"w-full accent-emerald-400 cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-amber-500/30 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"font-bold text-amber-300",children:"False Positive (FP)"}),e.jsx("span",{className:"font-mono text-amber-400 font-bold",children:r})]}),e.jsx("div",{className:"text-[10px] text-slate-400",children:"Type I Error: Actual 0, Pred 1"}),e.jsx("input",{type:"range",min:"0",max:"100",value:r,onChange:s=>P(Number(s.target.value)),className:"w-full accent-amber-400 cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-rose-500/30 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"font-bold text-rose-300",children:"False Negative (FN)"}),e.jsx("span",{className:"font-mono text-rose-400 font-bold",children:c})]}),e.jsx("div",{className:"text-[10px] text-slate-400",children:"Type II Error: Actual 1, Pred 0"}),e.jsx("input",{type:"range",min:"0",max:"100",value:c,onChange:s=>T(Number(s.target.value)),className:"w-full accent-rose-400 cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"font-bold text-emerald-300",children:"True Positive (TP)"}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:t})]}),e.jsx("div",{className:"text-[10px] text-slate-400",children:"Actual: 1, Pred 1"}),e.jsx("input",{type:"range",min:"0",max:"200",value:t,onChange:s=>C(Number(s.target.value)),className:"w-full accent-emerald-400 cursor-pointer"})]})]})]})}),e.jsx("div",{className:"lg:col-span-6 space-y-4",children:e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(q,{className:"w-4 h-4 text-emerald-400"}),"Live Computed Metric Indicators"]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"text-xs text-slate-400 flex justify-between",children:[e.jsx("span",{children:"Accuracy"}),e.jsxs("span",{className:"font-mono text-emerald-400 font-bold",children:[(z*100).toFixed(1),"%"]})]}),e.jsx("div",{className:"text-[10px] text-slate-500 font-mono",children:"(TP+TN) / Total"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"text-xs text-slate-400 flex justify-between",children:[e.jsx("span",{children:"Precision"}),e.jsxs("span",{className:"font-mono text-sky-400 font-bold",children:[(x*100).toFixed(1),"%"]})]}),e.jsx("div",{className:"text-[10px] text-slate-500 font-mono",children:"TP / (TP + FP)"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"text-xs text-slate-400 flex justify-between",children:[e.jsx("span",{children:"Recall (Sensitivity)"}),e.jsxs("span",{className:"font-mono text-pink-400 font-bold",children:[(p*100).toFixed(1),"%"]})]}),e.jsx("div",{className:"text-[10px] text-slate-500 font-mono",children:"TP / (TP + FN)"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"text-xs text-slate-400 flex justify-between",children:[e.jsx("span",{children:"F1-Score"}),e.jsxs("span",{className:"font-mono text-amber-400 font-bold",children:[(k*100).toFixed(1),"%"]})]}),e.jsx("div",{className:"text-[10px] text-slate-500 font-mono",children:"2 * (P*R) / (P+R)"})]})]}),e.jsxs("div",{className:"bg-slate-950 rounded-lg p-3 border border-slate-800 font-mono text-xs text-slate-300",children:[e.jsx("div",{className:"text-slate-400 mb-2 font-semibold",children:"sklearn.metrics.classification_report Output:"}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between border-b border-slate-900 pb-1 text-slate-500",children:[e.jsx("span",{children:"Class"}),e.jsx("span",{children:"Precision"}),e.jsx("span",{children:"Recall"}),e.jsx("span",{children:"F1-score"}),e.jsx("span",{children:"Support"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-200",children:"Class 0 (Neg)"}),e.jsx("span",{children:g.toFixed(2)}),e.jsx("span",{children:(a/(a+r||1)).toFixed(2)}),e.jsx("span",{children:(2*g*(a/(a+r||1))/(g+a/(a+r||1)||1)).toFixed(2)}),e.jsx("span",{children:a+r})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-200",children:"Class 1 (Pos)"}),e.jsx("span",{children:x.toFixed(2)}),e.jsx("span",{children:p.toFixed(2)}),e.jsx("span",{children:k.toFixed(2)}),e.jsx("span",{children:t+c})]})]})]})]})})]})]}),l==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:m.map((s,n)=>e.jsx("button",{onClick:()=>H(n),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${b===n?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:s.name},n))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:m[b].name}),e.jsx("button",{onClick:()=>A(m[b].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors",children:j?e.jsxs(e.Fragment,{children:[e.jsx(y,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(O,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:m[b].code})]})]}),l==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(E,{className:"w-5 h-5 text-emerald-400"}),"Classroom Revision Notes: Classification Evaluation"]}),e.jsxs("button",{onClick:()=>A($),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400",children:[j?e.jsx(y,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(O,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:$})]}),l==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(M,{className:"w-5 h-5 text-emerald-400"}),"Topic 13 Quiz: Classification Metrics"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Evaluate your knowledge of Confusion Matrices, Precision, Recall, and F1-Scores."})]}),o&&e.jsxs("div",{className:"px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-emerald-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[B()," / ",N.length]})]})]}),e.jsx("div",{className:"space-y-6",children:N.map((s,n)=>{d[s.id];const v=d[s.id]===s.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono mt-0.5",children:["Q",n+1]}),e.jsx("span",{children:s.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:s.options.map((Q,h)=>{const I=d[s.id]===h;let f="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return o?h===s.correctAnswer?f="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":I&&!v&&(f="bg-rose-500/20 border-rose-500/50 text-rose-200"):I&&(f="bg-emerald-500/20 border-emerald-500/50 text-emerald-200"),e.jsxs("button",{onClick:()=>L(s.id,h),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${f}`,children:[e.jsx("span",{children:Q}),o&&h===s.correctAnswer&&e.jsx(y,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},h)})}),o&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-emerald-300 block mb-1",children:"Explanation:"}),s.explanation]})]},s.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:o?e.jsxs("button",{onClick:()=>{_({}),F(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(K,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>F(!0),disabled:Object.keys(d).length===0,className:"px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-emerald-600/20",children:"Submit Answers"})})]})})]})]})}export{ae as default};
