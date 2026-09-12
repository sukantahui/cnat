import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{aN as F,S as G,k as V,B as X,aa as T,N as H,aJ as K,f as x,g as _,ad as E}from"./vendor-icons-ri6cs58t.js";const D=`"""\r
Topic 20: Practice Problems\r
Problem 1: Implement Leak-Free Preprocessing with StandardScaler & Stratified Split\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.model_selection import train_test_split\r
from sklearn.preprocessing import StandardScaler\r
\r
# Simulated student dataset: [Age, Marks] -> Result (0/1)\r
X = np.array([\r
    [20, 45], [22, 50], [25, 80], [28, 85], [21, 40],\r
    [30, 90], [23, 55], [29, 88], [24, 60], [27, 82]\r
])\r
y = np.array([0, 0, 1, 1, 0, 1, 0, 1, 0, 1])\r
\r
# Task:\r
# 1. Split into 70% train and 30% test with stratification and random_state=42\r
X_train, X_test, y_train, y_test = train_test_split(\r
    X, y, test_size=0.3, stratify=y, random_state=42\r
)\r
\r
# 2. Correctly fit StandardScaler on training set ONLY, then transform both train and test\r
scaler = StandardScaler()\r
X_train_scaled = scaler.fit_transform(X_train)\r
X_test_scaled = scaler.transform(X_test) # Do not call fit on test!\r
\r
print("--- Problem 1 Solution ---")\r
print("Learned Scaler Mean:", scaler.mean_)\r
print("Learned Scaler Scale (Std Dev):", scaler.scale_)\r
print("X_train_scaled shape:", X_train_scaled.shape)\r
print("X_test_scaled shape:", X_test_scaled.shape)\r
print("Mean of X_train_scaled (should be ~0):", np.round(X_train_scaled.mean(axis=0), 4))\r
`,O=`"""\r
Topic 20: Practice Problems\r
Problem 2: Classifier Benchmarking with 5-Fold Cross-Validation\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import pandas as pd\r
from sklearn.datasets import load_iris\r
from sklearn.model_selection import StratifiedKFold, cross_val_score\r
from sklearn.linear_model import LogisticRegression\r
from sklearn.neighbors import KNeighborsClassifier\r
from sklearn.tree import DecisionTreeClassifier\r
from sklearn.naive_bayes import GaussianNB\r
\r
X, y = load_iris(return_X_y=True)\r
\r
models = {\r
    'LogisticRegression': LogisticRegression(max_iter=300),\r
    'KNN (K=5)': KNeighborsClassifier(n_neighbors=5),\r
    'DecisionTree': DecisionTreeClassifier(max_depth=3, random_state=42),\r
    'GaussianNB': GaussianNB()\r
}\r
\r
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\r
benchmark_records = []\r
\r
for name, clf in models.items():\r
    scores = cross_val_score(clf, X, y, cv=cv, scoring='accuracy')\r
    benchmark_records.append({\r
        'Classifier': name,\r
        'Mean Accuracy (%)': round(scores.mean() * 100, 2),\r
        'Std Dev (%)': round(scores.std() * 100, 2)\r
    })\r
\r
print("--- Problem 2: Classifier Leaderboard ---")\r
print(pd.DataFrame(benchmark_records).sort_values(by='Mean Accuracy (%)', ascending=False).to_string(index=False))\r
`,z=`"""\r
Topic 20: Practice Problems\r
Problem 3: Building a Pipeline with Hyperparameter GridSearchCV\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
from sklearn.datasets import load_wine\r
from sklearn.pipeline import Pipeline\r
from sklearn.preprocessing import StandardScaler\r
from sklearn.svm import SVC\r
from sklearn.model_selection import GridSearchCV\r
\r
# Load Wine classification dataset\r
X, y = load_wine(return_X_y=True)\r
\r
# Build leak-free Pipeline\r
pipeline = Pipeline([\r
    ('scaler', StandardScaler()),\r
    ('svc', SVC(random_state=42))\r
])\r
\r
# Define grid of hyperparameters\r
param_grid = {\r
    'svc__C': [0.1, 1.0, 10.0, 100.0],\r
    'svc__kernel': ['linear', 'rbf'],\r
    'svc__gamma': ['scale', 'auto']\r
}\r
\r
grid_search = GridSearchCV(\r
    estimator=pipeline,\r
    param_grid=param_grid,\r
    cv=5,\r
    scoring='accuracy',\r
    n_jobs=-1\r
)\r
\r
grid_search.fit(X, y)\r
\r
print("--- Problem 3: GridSearchCV Results ---")\r
print("Best Hyperparameters:", grid_search.best_params_)\r
print(f"Best 5-Fold Cross-Validated Accuracy: {grid_search.best_score_*100:.2f}%")\r
`,A=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 20 - PRACTICE PROBLEMS & SOLUTIONS\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
PRACTICE PROBLEM SUMMARY & KEY LEARNING OBJECTIVES:\r
\r
Problem 1: Leak-Free Preprocessing & Partitioning\r
- Goal: Prevent test data contamination when standardizing feature matrices.\r
- Key Rule: Call \`scaler.fit_transform(X_train)\` on train data, and \`scaler.transform(X_test)\` on test data.\r
- Never call \`.fit()\` or \`.fit_transform()\` on test data!\r
\r
Problem 2: Fair Multi-Model Benchmarking\r
- Goal: Compare 4 distinct algorithm families (Logistic Regression, KNN, Decision Tree, Gaussian Naive Bayes).\r
- Key Rule: Benchmark on identical 5-Fold Stratified Cross-Validation folds; report both mean accuracy and standard deviation.\r
\r
Problem 3: Leak-Free Pipeline Hyperparameter Tuning\r
- Goal: Tune SVC hyperparameters (\`C\`, \`kernel\`, \`gamma\`) with \`StandardScaler\` inside \`GridSearchCV\`.\r
- Key Rule: Use double underscore parameter syntax: \`'svc__C'\`, \`'svc__kernel'\`.\r
\r
Problem 4: Imbalanced Fraud Classification Metrics\r
- Goal: Move beyond accuracy to evaluate Precision, Recall, and Confusion Matrix on 99:1 skewed data.\r
\r
Problem 5: Unsupervised Customer Segmentation with K-Means\r
- Goal: Scale features, identify the optimal elbow K, and invert centroids to real business dollar metrics.\r
================================================================================\r
`,v=[{id:1,question:"When applying `StandardScaler` to a train/test partitioned dataset, what is the correct method call sequence?",options:["`scaler.fit_transform(X_train)` followed by `scaler.transform(X_test)`","`scaler.fit_transform(X_train)` followed by `scaler.fit_transform(X_test)`","`scaler.fit(X_test)` followed by `scaler.transform(X_train)`","`scaler.fit_transform(X)` before calling `train_test_split()`"],correctAnswer:0,explanation:"To strictly prevent data leakage, `.fit_transform()` is called only on `X_train` so that the mean and standard deviation of the training distribution are learned. Then, `X_test` is transformed using `scaler.transform(X_test)` without re-estimating parameters."},{id:2,question:"In `GridSearchCV`, what does setting `n_jobs=-1` achieve?",options:["It suppresses all console warning messages","It utilizes all available CPU cores in parallel to accelerate cross-validation search","It disables cross-validation to save RAM","It limits search to a single thread"],correctAnswer:1,explanation:"`n_jobs=-1` instructs Scikit-learn (via Joblib) to spawn worker processes across all available logical CPU processors, parallelizing fold evaluation."},{id:3,question:"When comparing two classifiers where Model A achieves 92.0% ± 1.0% and Model B achieves 93.5% ± 9.5%, which model is generally preferred for stable production deployment?",options:["Model B, because its maximum possible score is higher","Model A, because its performance is consistent and reliable across folds with very low variance (±1.0%)","Neither, as both are below 95%","Whichever model uses fewer lines of code"],correctAnswer:1,explanation:"Model A offers high stability and consistency. A large standard deviation in Model B (±9.5%) indicates high sensitivity to data partitions and high risk of catastrophic failure on certain production cohorts."},{id:4,question:"Which Scikit-learn function is used to automatically search over specified parameter values for an estimator using cross-validation?",options:["sklearn.model_selection.GridSearchCV","sklearn.model_selection.ParameterSearcher","sklearn.pipeline.HyperOptimizer","sklearn.metrics.cross_search"],correctAnswer:0,explanation:"`GridSearchCV` performs an exhaustive search over a specified grid of parameter values, evaluating every combination across cross-validation folds."}],y=[{id:1,title:"Problem 1: Leak-Free Preprocessing with StandardScaler & Stratified Split",difficulty:"Medium",category:"Data Partitioning",prompt:"Given a 100-row student dataset with an imbalanced 80/20 target, implement a stratified 75/25 split and scale numerical features without leaking test set statistics into the preprocessor.",hint:"Call `scaler.fit_transform(X_train)` on training data, but only `scaler.transform(X_test)` on test data!",codeSnippet:`from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, stratify=y, random_state=42
)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test) # Leak free!`},{id:2,title:"Problem 2: Fair 4-Classifier Benchmark with Stratified 5-Fold CV",difficulty:"Medium",category:"Model Comparison",prompt:"Write a clean benchmarking loop evaluating LogisticRegression, KNN (K=5), DecisionTree (depth=3), and GaussianNB on the Iris dataset. Report Mean Accuracy and Standard Deviation.",hint:"Use `cross_val_score(model, X, y, cv=StratifiedKFold(5, shuffle=True, random_state=42))`.",codeSnippet:`for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')
    print(f"{name}: {scores.mean()*100:.2f}% (±{scores.std()*100:.2f}%)")`},{id:3,title:"Problem 3: Leak-Free Pipeline with GridSearchCV Hyperparameter Tuning",difficulty:"Hard",category:"Pipelines & Tuning",prompt:"Build an end-to-end Pipeline chaining StandardScaler with Support Vector Classifier (SVC). Search over C=[0.1, 1, 10] and kernel=['linear', 'rbf'] using 5-fold cross-validation.",hint:"Remember to use the double underscore syntax in param_grid: `'svc__C': [0.1, 1, 10]`.",codeSnippet:`pipe = Pipeline([('scaler', StandardScaler()), ('svc', SVC())])
param_grid = {'svc__C': [0.1, 1, 10], 'svc__kernel': ['linear', 'rbf']}
grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)`},{id:4,title:"Problem 4: Handling Severe Class Imbalance (99:1 Fraud Scenario)",difficulty:"Hard",category:"Evaluation Metrics",prompt:"Evaluate a credit card transaction fraud detector where Fraud occurs in 1% of transactions. Generate Confusion Matrix, Precision, Recall, and F1-Score.",hint:"Do not trust `accuracy_score`! Use `classification_report(y_true, y_pred)`.",codeSnippet:`from sklearn.metrics import classification_report, confusion_matrix
print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))`}];function Q(){const[s,d]=a.useState("interactive"),[p,R]=a.useState(0),[u,S]=a.useState(!1),[N,M]=a.useState(1),[h,j]=a.useState(!1),[b,w]=a.useState(!1),[l,C]=a.useState({}),[i,k]=a.useState(!1),o=[{name:"01_problem1_stratified_split_and_scaling.py",code:D},{name:"02_problem2_classifier_benchmark.py",code:O},{name:"03_problem3_pipeline_and_gridsearch.py",code:z}],f=r=>{navigator.clipboard.writeText(r),S(!0),setTimeout(()=>S(!1),2e3)},I=(r,t)=>{i||C(g=>({...g,[r]:t}))},B=()=>{let r=0;return v.forEach(t=>{l[t.id]===t.correctAnswer&&r++}),r},n=y.find(r=>r.id===N)||y[0];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-purple-500/20 rounded-xl text-purple-400 border border-purple-500/30",children:e.jsx(F,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20",children:"Topic 20 • Hands-on Lab"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Coding Practice & Solutions"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Scikit-learn Practice Problems & Coding Challenges"})]})]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:"Solidify your practical engineering skills through hands-on Scikit-learn exercises. Practice leak-free preprocessing, multi-model benchmarking loops, pipeline assembly, and GridSearchCV hyperparameter tuning."})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>d("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${s==="interactive"?"border-purple-400 text-purple-400 bg-purple-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(G,{className:"w-4 h-4"}),"Problem Solving Studio"]}),e.jsxs("button",{onClick:()=>d("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${s==="code"?"border-purple-400 text-purple-400 bg-purple-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(V,{className:"w-4 h-4"}),"Python Code Lab (",o.length,")"]}),e.jsxs("button",{onClick:()=>d("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${s==="notes"?"border-purple-400 text-purple-400 bg-purple-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(X,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>d("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${s==="quiz"?"border-purple-400 text-purple-400 bg-purple-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(T,{className:"w-4 h-4"}),"Knowledge Check"]})]}),s==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:y.map(r=>e.jsxs("button",{onClick:()=>{M(r.id),j(!1),w(!1)},className:`p-3.5 rounded-xl border text-left transition-all ${N===r.id?"bg-purple-500/15 border-purple-500/60 shadow-lg shadow-purple-950/50":"bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 text-slate-400 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("span",{className:"text-[10px] uppercase font-mono font-bold text-purple-400",children:["Problem #",r.id]}),e.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded font-mono ${r.difficulty==="Hard"?"bg-rose-500/20 text-rose-300":"bg-amber-500/20 text-amber-300"}`,children:r.difficulty})]}),e.jsx("div",{className:"text-xs font-semibold text-slate-200 line-clamp-2",children:r.title.split(": ")[1]})]},r.id))}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-5 shadow-xl",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("span",{className:"text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/20",children:["Category: ",n.category]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Difficulty: ",n.difficulty]})]}),e.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:n.title}),e.jsx("p",{className:"text-slate-300 text-sm mt-2 leading-relaxed bg-slate-950/60 p-4 rounded-lg border border-slate-800/80",children:n.prompt})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs("button",{onClick:()=>j(!h),className:"px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 border border-slate-700",children:[e.jsx(H,{className:"w-3.5 h-3.5 text-amber-400"}),h?"Hide Pedagogical Hint":"Reveal Instructor Hint"]}),e.jsxs("button",{onClick:()=>w(!b),className:"px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 shadow-md shadow-purple-600/20",children:[e.jsx(K,{className:"w-3.5 h-3.5"}),b?"Hide Python Solution":"Reveal Reference Solution"]})]}),h&&e.jsxs("div",{className:"p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs text-amber-200 leading-relaxed animate-fadeIn",children:[e.jsx("strong",{className:"block mb-1 text-amber-300",children:"💡 Barrackpore Lab Hint:"}),n.hint]}),b&&e.jsxs("div",{className:"bg-slate-950 rounded-xl border border-slate-800 overflow-hidden animate-fadeIn",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Python Reference Implementation"}),e.jsxs("button",{onClick:()=>f(n.codeSnippet),className:"text-xs text-slate-400 hover:text-purple-400 flex items-center gap-1",children:[u?e.jsx(x,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Snippet"})]})]}),e.jsx("pre",{className:"p-4 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed",children:n.codeSnippet})]})]})]}),s==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:o.map((r,t)=>e.jsx("button",{onClick:()=>R(t),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${p===t?"bg-purple-600 text-white shadow-md shadow-purple-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:r.name},t))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:o[p].name}),e.jsx("button",{onClick:()=>f(o[p].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-purple-400 transition-colors",children:u?e.jsxs(e.Fragment,{children:[e.jsx(x,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:o[p].code})]})]}),s==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(X,{className:"w-5 h-5 text-purple-400"}),"Classroom Revision Notes: Practice Problems"]}),e.jsxs("button",{onClick:()=>f(A),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-purple-400",children:[u?e.jsx(x,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:A})]}),s==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(T,{className:"w-5 h-5 text-purple-400"}),"Topic 20 Quiz: Practical Scikit-learn Scenarios"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Assess your understanding of leak-free splits, parallel grid searches, and model stability."})]}),i&&e.jsxs("div",{className:"px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-purple-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[B()," / ",v.length]})]})]}),e.jsx("div",{className:"space-y-6",children:v.map((r,t)=>{l[r.id];const g=l[r.id]===r.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono mt-0.5",children:["Q",t+1]}),e.jsx("span",{children:r.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:r.options.map((L,c)=>{const P=l[r.id]===c;let m="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return i?c===r.correctAnswer?m="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":P&&!g&&(m="bg-rose-500/20 border-rose-500/50 text-rose-200"):P&&(m="bg-purple-500/20 border-purple-500/50 text-purple-200"),e.jsxs("button",{onClick:()=>I(r.id,c),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${m}`,children:[e.jsx("span",{children:L}),i&&c===r.correctAnswer&&e.jsx(x,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},c)})}),i&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-purple-300 block mb-1",children:"Explanation:"}),r.explanation]})]},r.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:i?e.jsxs("button",{onClick:()=>{C({}),k(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(E,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>k(!0),disabled:Object.keys(l).length===0,className:"px-6 py-2.5 bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-purple-600/20",children:"Submit Answers"})})]})})]})]})}export{Q as default};
