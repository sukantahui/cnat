import{b as o,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{b8 as L,S as E,k as P,B as T,aa as A,aM as B,L as M,f as v,g as F,ad as D}from"./vendor-icons-DFC0rBCP.js";const X=`"""\r
Topic 15: Cross-Validation\r
Script 1: 5-Fold cross_val_score() Basics\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.datasets import load_iris\r
from sklearn.linear_model import LogisticRegression\r
from sklearn.model_selection import cross_val_score\r
\r
# Load iris dataset\r
X, y = load_iris(return_X_y=True)\r
\r
# Initialize estimator\r
model = LogisticRegression(max_iter=200, random_state=42)\r
\r
# Perform 5-fold cross validation\r
# Returns an array of scores of the estimator for each run of the cross-validation\r
cv_scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')\r
\r
print("--- 5-Fold Cross-Validation Scores ---")\r
for fold_idx, score in enumerate(cv_scores, 1):\r
    print(f"Fold #{fold_idx}: Accuracy = {score:.4f} ({score*100:.2f}%)")\r
\r
mean_acc = np.mean(cv_scores)\r
std_acc = np.std(cv_scores)\r
\r
print("\\n--- Summary Performance ---")\r
print(f"Mean Accuracy:       {mean_acc:.4f} ({mean_acc*100:.2f}%)")\r
print(f"Standard Deviation:  ±{std_acc:.4f} (±{std_acc*100:.2f}%)")\r
print(f"95% Confidence Band: [{mean_acc - 2*std_acc:.4f}, {mean_acc + 2*std_acc:.4f}]")\r
`,z=`"""\r
Topic 15: Cross-Validation\r
Script 2: StratifiedKFold & cross_validate() with Multiple Metrics\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.datasets import make_classification\r
from sklearn.tree import DecisionTreeClassifier\r
from sklearn.model_selection import StratifiedKFold, cross_validate\r
\r
# Imbalanced classification dataset\r
X, y = make_classification(n_samples=200, n_classes=2, weights=[0.85, 0.15], random_state=42)\r
\r
# Define custom cross-validation splitter with explicit shuffling\r
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\r
\r
clf = DecisionTreeClassifier(max_depth=3, random_state=42)\r
\r
# cross_validate allows evaluating multiple metrics simultaneously and inspecting fit/score times\r
scoring_metrics = ['accuracy', 'precision', 'recall', 'f1']\r
cv_results = cross_validate(\r
    clf, X, y,\r
    cv=skf,\r
    scoring=scoring_metrics,\r
    return_train_score=True\r
)\r
\r
df_results = pd.DataFrame({\r
    'Fit Time (s)': cv_results['fit_time'],\r
    'Train Acc': cv_results['train_accuracy'],\r
    'Test Acc': cv_results['test_accuracy'],\r
    'Test Precision': cv_results['test_precision'],\r
    'Test Recall': cv_results['test_recall'],\r
    'Test F1': cv_results['test_f1']\r
})\r
\r
print("--- 5-Fold Stratified cross_validate() Results ---")\r
print(df_results.round(4))\r
print("\\nMean Test F1-Score:", np.round(df_results['Test F1'].mean(), 4))\r
`,Q=`"""\r
Topic 15: Cross-Validation\r
Script 3: Generating Out-of-Fold Predictions via cross_val_predict()\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.datasets import load_iris\r
from sklearn.neighbors import KNeighborsClassifier\r
from sklearn.model_selection import cross_val_predict\r
from sklearn.metrics import confusion_matrix, classification_report\r
\r
X, y = load_iris(return_X_y=True)\r
\r
knn = KNeighborsClassifier(n_neighbors=5)\r
\r
# cross_val_predict generates out-of-fold predictions for every sample in the dataset\r
# Each point is predicted by a model trained on the other (K-1) folds!\r
y_oof_pred = cross_val_predict(knn, X, y, cv=5)\r
\r
print("--- Out-of-Fold Confusion Matrix ---")\r
cm = confusion_matrix(y, y_oof_pred)\r
print(cm)\r
\r
print("\\n--- Out-of-Fold Classification Report ---")\r
print(classification_report(y, y_oof_pred, target_names=['Setosa', 'Versicolor', 'Virginica']))\r
`,R=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 15 - CROSS-VALIDATION (CROSS_VAL_SCORE)\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. WHY CROSS-VALIDATION IS SUPERIOR TO A SINGLE TRAIN/TEST SPLIT\r
--------------------------------------------------------------------------------\r
A single \`train_test_split()\` suffers from "split variance":\r
Depending on random seed luck, your test set might happen to include all easy or all hard samples.\r
Cross-Validation solves this by ensuring EVERY single sample is used for testing exactly once.\r
\r
K-FOLD WORKFLOW:\r
1. Divide dataset into $K$ equal-sized chunks ("folds").\r
2. Train model on $K-1$ folds; test on the held-out $1$ fold.\r
3. Repeat $K$ times (each fold serves as test set once).\r
4. Compute mean and standard deviation: $\\mu \\pm \\sigma$.\r
\r
2. \`cross_val_score()\` VS \`cross_validate()\` VS \`cross_val_predict()\`\r
--------------------------------------------------------------------------------\r
A. \`cross_val_score(estimator, X, y, cv=5, scoring='accuracy')\`:\r
   - Returns a 1D NumPy array of scores across the $K$ folds.\r
   - Quickest, standard evaluation tool.\r
\r
B. \`cross_validate(estimator, X, y, cv=5, scoring=['accuracy', 'f1'], return_train_score=True)\`:\r
   - Returns a Python dictionary containing fit times, score times, and multiple evaluation metrics for both train and test splits.\r
\r
C. \`cross_val_predict(estimator, X, y, cv=5)\`:\r
   - Returns predicted target values $\\hat{y}$ for every sample, generated cleanly out-of-fold.\r
   - Ideal for computing global confusion matrices and out-of-fold error analysis.\r
\r
3. SPECIALIZED SPLITTERS IN \`sklearn.model_selection\`\r
--------------------------------------------------------------------------------\r
- \`KFold(n_splits=5, shuffle=True, random_state=42)\`: Standard K-Fold for regression.\r
- \`StratifiedKFold(...)\`: Guarantees equal class balance in every fold (automatically used by \`cross_val_score\` for classifiers).\r
- \`TimeSeriesSplit(n_splits=5)\`: Rolling forward-chaining splits for time series data.\r
\r
4. BARRACKPORE LAB RULES (Sukanta Hui)\r
--------------------------------------------------------------------------------\r
- Never report accuracy as a single naked number (e.g. "88%"); always report mean and standard deviation: "88.4% ± 2.1% across 5 folds".\r
- When using Pipelines, cross-validation automatically re-fits the scaler on the $K-1$ training folds during every fold iteration, completely eliminating data leakage!\r
================================================================================\r
`,_=[{id:1,question:"What does `cross_val_score(estimator, X, y, cv=5)` return?",options:["The best fitted estimator instance after 5 iterations","A 1-dimensional NumPy array containing the 5 evaluation scores (one per test fold)","A single float scalar representing the average accuracy","A dictionary containing execution logs"],correctAnswer:1,explanation:"`cross_val_score()` returns an array of float scores representing the performance metric calculated on each of the K validation folds."},{id:2,question:"How does `cross_validate()` differ from `cross_val_score()`?",options:["cross_validate() supports evaluating multiple scoring metrics simultaneously and returns fit/score timing metrics","cross_validate() only works for unsupervised clustering","cross_validate() trains deep neural networks on GPUs","cross_val_score() does not support StratifiedKFold"],correctAnswer:0,explanation:"`cross_validate` provides a richer dictionary output containing `fit_time`, `score_time`, `test_score` for multiple metrics, and optionally `train_score`."},{id:3,question:"Why does Scikit-learn's `cross_val_score` automatically use `StratifiedKFold` when passed a classification estimator?",options:["To speed up matrix multiplication","To ensure that each of the K folds contains approximately the same percentage of samples of each target class as the complete dataset","To normalize features before training","To reduce tree depth"],correctAnswer:1,explanation:"For classifiers, maintaining representative class proportions across each test fold is essential to prevent class starvation in imbalanced datasets."},{id:4,question:"What is the key advantage of using `cross_val_predict()`?",options:["It makes test predictions twice as fast","It generates clean, out-of-fold predictions for every sample in the dataset, which can be passed to confusion_matrix() or used in stacking ensembles","It trains on 100% of the data without holding any folds out","It exports models to ONNX format"],correctAnswer:1,explanation:"`cross_val_predict` returns out-of-fold predictions where each sample is evaluated by an estimator that was not trained on that sample, making it ideal for constructing global confusion matrices and stacking features."}],K={3:[.86,.92,.88],5:[.88,.94,.9,.86,.92],10:[.85,.9,.95,.88,.92,.87,.93,.89,.91,.9]};function G(){const[a,m]=o.useState("interactive"),[x,I]=o.useState(0),[j,y]=o.useState(!1),[r,$]=o.useState(5),[N,g]=o.useState(0),[c,w]=o.useState({}),[i,S]=o.useState(!1),d=[{name:"01_cross_val_score_basics.py",code:X},{name:"02_stratified_kfold_and_cross_validate.py",code:z},{name:"03_cross_val_predict_and_scoring_metrics.py",code:Q}],k=s=>{navigator.clipboard.writeText(s),y(!0),setTimeout(()=>y(!1),2e3)},V=(s,t)=>{i||w(f=>({...f,[s]:t}))},O=()=>{let s=0;return _.forEach(t=>{c[t.id]===t.correctAnswer&&s++}),s},l=K[r]||K[5],p=l.reduce((s,t)=>s+t,0)/l.length,b=Math.sqrt(l.map(s=>Math.pow(s-p,2)).reduce((s,t)=>s+t,0)/l.length);return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-indigo-500/20 rounded-xl text-indigo-400 border border-indigo-500/30",children:e.jsx(L,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20",children:"Topic 15 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.model_selection.cross_val_score"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"K-Fold Cross-Validation & Generalization Bounds"})]})]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:["Eliminate single-split evaluation bias. Learn how K-Fold and Stratified K-Fold partitioning guarantee that every sample serves as a test point, generating reliable confidence intervals (",e.jsx("code",{className:"text-indigo-300 font-mono",children:"μ ± 2σ"}),")."]})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>m("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="interactive"?"border-indigo-400 text-indigo-400 bg-indigo-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(E,{className:"w-4 h-4"}),"K-Fold Visual Studio"]}),e.jsxs("button",{onClick:()=>m("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="code"?"border-indigo-400 text-indigo-400 bg-indigo-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(P,{className:"w-4 h-4"}),"Python Code Lab (",d.length,")"]}),e.jsxs("button",{onClick:()=>m("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="notes"?"border-indigo-400 text-indigo-400 bg-indigo-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(T,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>m("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="quiz"?"border-indigo-400 text-indigo-400 bg-indigo-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(A,{className:"w-4 h-4"}),"Knowledge Check"]})]}),a==="interactive"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsx("div",{className:"lg:col-span-5 space-y-4",children:e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(B,{className:"w-4 h-4 text-indigo-400"}),"Cross-Validation Configuration"]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-2",children:[e.jsx("span",{children:"Number of Folds (cv = K):"}),e.jsxs("span",{className:"font-mono text-indigo-300 font-bold text-sm",children:["K = ",r]})]}),e.jsx("div",{className:"flex gap-2",children:[3,5,10].map(s=>e.jsxs("button",{onClick:()=>{$(s),g(0)},className:`flex-1 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${r===s?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:[s,"-Fold CV"]},s))})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-2.5 font-mono text-xs",children:[e.jsxs("div",{className:"flex justify-between text-slate-400 font-sans",children:[e.jsx("span",{children:"Mean Accuracy (μ):"}),e.jsxs("span",{className:"text-emerald-400 font-bold text-sm",children:[(p*100).toFixed(2),"%"]})]}),e.jsxs("div",{className:"flex justify-between text-slate-400 font-sans",children:[e.jsx("span",{children:"Standard Deviation (σ):"}),e.jsxs("span",{className:"text-indigo-300 font-bold",children:["±",(b*100).toFixed(2),"%"]})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-900 flex justify-between text-slate-300 font-sans",children:[e.jsx("span",{children:"95% Confidence Range:"}),e.jsxs("span",{className:"text-slate-200 font-mono",children:["[",((p-2*b)*100).toFixed(1),"%, ",((p+2*b)*100).toFixed(1),"%]"]})]})]}),e.jsxs("div",{className:"mt-4 space-y-1.5 font-mono text-xs",children:[e.jsx("div",{className:"text-slate-400 font-semibold font-sans mb-1",children:"Fold Score Breakdown:"}),l.map((s,t)=>e.jsxs("div",{onClick:()=>g(t),className:`p-2 rounded border cursor-pointer transition-all flex items-center justify-between ${N===t?"bg-indigo-500/20 border-indigo-500/50 text-indigo-200":"bg-slate-950 border-slate-800/80 text-slate-400 hover:bg-slate-900"}`,children:[e.jsxs("span",{className:"font-semibold",children:["Fold #",t+1]}),e.jsxs("span",{className:"text-emerald-300 font-bold",children:[(s*100).toFixed(1),"%"]})]},t))]})]})}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(M,{className:"w-4 h-4 text-indigo-400"}),"K-Fold Iteration Architecture"]}),e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:["● Train (",r-1,"/",r,") | ◆ Validation (1/",r,")"]})]}),e.jsx("div",{className:"space-y-3",children:Array.from({length:r}).map((s,t)=>e.jsxs("div",{onClick:()=>g(t),className:`p-3 rounded-lg border transition-all cursor-pointer ${N===t?"bg-slate-950 border-indigo-500/60 shadow-md shadow-indigo-950/50":"bg-slate-950/60 border-slate-800/80 hover:bg-slate-950"}`,children:[e.jsxs("div",{className:"flex justify-between text-xs mb-2",children:[e.jsxs("span",{className:"font-semibold text-slate-200 flex items-center gap-1.5 font-mono",children:["Iteration #",t+1]}),e.jsxs("span",{className:"text-emerald-400 font-mono font-bold",children:["Score: ",(l[t]*100).toFixed(1),"%"]})]}),e.jsx("div",{className:"flex gap-1.5",children:Array.from({length:r}).map((f,u)=>{const n=u===t;return e.jsx("div",{className:`flex-1 py-2 rounded text-center text-[10px] font-mono font-bold transition-all ${n?"bg-amber-500 text-slate-950 shadow-sm":"bg-emerald-600/20 text-emerald-300 border border-emerald-500/30"}`,children:n?"VAL":"TRAIN"},u)})})]},t))}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-4 text-center",children:["Every partition is used for testing exactly once across the ",r," iterations."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{className:"text-white block mb-1",children:"Why Standard Deviation Matters (Barrackpore Lab):"}),"If Model A scores 85% ± 1% and Model B scores 87% ± 12%, Model A is preferred in production because of its rock-solid stability and low variance across different customer cohorts!"]})]})]})}),a==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:d.map((s,t)=>e.jsx("button",{onClick:()=>I(t),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${x===t?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:s.name},t))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:d[x].name}),e.jsx("button",{onClick:()=>k(d[x].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-400 transition-colors",children:j?e.jsxs(e.Fragment,{children:[e.jsx(v,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(F,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:d[x].code})]})]}),a==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(T,{className:"w-5 h-5 text-indigo-400"}),"Classroom Revision Notes: Cross-Validation"]}),e.jsxs("button",{onClick:()=>k(R),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-400",children:[j?e.jsx(v,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(F,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:R})]}),a==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(A,{className:"w-5 h-5 text-indigo-400"}),"Topic 15 Quiz: Cross-Validation"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Assess your understanding of K-Fold splits, stratification, and variance estimation."})]}),i&&e.jsxs("div",{className:"px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-indigo-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[O()," / ",_.length]})]})]}),e.jsx("div",{className:"space-y-6",children:_.map((s,t)=>{c[s.id];const f=c[s.id]===s.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono mt-0.5",children:["Q",t+1]}),e.jsx("span",{children:s.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:s.options.map((u,n)=>{const C=c[s.id]===n;let h="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return i?n===s.correctAnswer?h="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":C&&!f&&(h="bg-rose-500/20 border-rose-500/50 text-rose-200"):C&&(h="bg-indigo-500/20 border-indigo-500/50 text-indigo-200"),e.jsxs("button",{onClick:()=>V(s.id,n),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${h}`,children:[e.jsx("span",{children:u}),i&&n===s.correctAnswer&&e.jsx(v,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},n)})}),i&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-indigo-300 block mb-1",children:"Explanation:"}),s.explanation]})]},s.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:i?e.jsxs("button",{onClick:()=>{w({}),S(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(D,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>S(!0),disabled:Object.keys(c).length===0,className:"px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-indigo-600/20",children:"Submit Answers"})})]})})]})]})}export{G as default};
