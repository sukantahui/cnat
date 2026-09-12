import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{cv as X,S as B,k as q,B as I,aa as D,aM as H,co as W,aW as V,f as j,g as E,ad as K}from"./vendor-icons-ri6cs58t.js";const U=`"""\r
Topic 10: Tree Models\r
Script 1: DecisionTreeClassifier Basics (Gini vs Entropy)\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.tree import DecisionTreeClassifier\r
from sklearn.metrics import accuracy_score\r
\r
# Dataset: [Attendance %, Project Done (0/1), Prior Quiz Score] -> Target: Pass Exam (0/1)\r
X = np.array([\r
    [45, 0, 30],\r
    [55, 0, 40],\r
    [65, 1, 50],\r
    [75, 1, 65],\r
    [85, 1, 80],\r
    [90, 0, 75],\r
    [95, 1, 90]\r
])\r
y = np.array([0, 0, 1, 1, 1, 0, 1])\r
\r
# Initialize DecisionTreeClassifier with Gini Impurity criterion\r
dt_gini = DecisionTreeClassifier(criterion='gini', max_depth=3, random_state=42)\r
dt_gini.fit(X, y)\r
\r
# Initialize DecisionTreeClassifier with Entropy (Information Gain)\r
dt_entropy = DecisionTreeClassifier(criterion='entropy', max_depth=3, random_state=42)\r
dt_entropy.fit(X, y)\r
\r
print("--- DecisionTreeClassifier (Gini) ---")\r
print("Tree Depth:", dt_gini.get_depth())\r
print("Number of Leaves:", dt_gini.get_n_leaves())\r
print("Learned Feature Importances:", dt_gini.feature_importances_)\r
print(f"Training Accuracy: {accuracy_score(y, dt_gini.predict(X))*100:.1f}%")\r
\r
# Prediction for new student: [Attendance: 70%, Project: 1, Quiz: 60]\r
student_new = np.array([[70, 1, 60]])\r
pred = dt_gini.predict(student_new)\r
print(f"\\nPrediction for student {student_new[0]}: {'Pass (1)' if pred[0]==1 else 'Fail (0)'}")\r
`,Y=`"""\r
Topic 10: Tree Models\r
Script 2: Tree Pruning & Regularization Hyperparameters\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.datasets import make_moons\r
from sklearn.model_selection import train_test_split\r
from sklearn.tree import DecisionTreeClassifier\r
from sklearn.metrics import accuracy_score\r
\r
# Non-linear synthetic dataset\r
X, y = make_moons(n_samples=300, noise=0.25, random_state=42)\r
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\r
\r
# 1. Unconstrained Decision Tree (Prone to extreme overfitting)\r
dt_unconstrained = DecisionTreeClassifier(random_state=42)\r
dt_unconstrained.fit(X_train, y_train)\r
\r
train_acc_un = accuracy_score(y_train, dt_unconstrained.predict(X_train))\r
test_acc_un = accuracy_score(y_test, dt_unconstrained.predict(X_test))\r
\r
print("--- 1. Unconstrained Tree (Overfitting) ---")\r
print(f"Depth: {dt_unconstrained.get_depth()} | Leaves: {dt_unconstrained.get_n_leaves()}")\r
print(f"Train Accuracy: {train_acc_un*100:.1f}% | Test Accuracy: {test_acc_un*100:.1f}%")\r
\r
# 2. Regularized Decision Tree (Constrained max_depth & min_samples_leaf)\r
dt_pruned = DecisionTreeClassifier(\r
    max_depth=4,\r
    min_samples_split=10,\r
    min_samples_leaf=5,\r
    random_state=42\r
)\r
dt_pruned.fit(X_train, y_train)\r
\r
train_acc_pr = accuracy_score(y_train, dt_pruned.predict(X_train))\r
test_acc_pr = accuracy_score(y_test, dt_pruned.predict(X_test))\r
\r
print("\\n--- 2. Pruned Tree (max_depth=4, min_samples_leaf=5) ---")\r
print(f"Depth: {dt_pruned.get_depth()} | Leaves: {dt_pruned.get_n_leaves()}")\r
print(f"Train Accuracy: {train_acc_pr*100:.1f}% | Test Accuracy: {test_acc_pr*100:.1f}%")\r
print("Notice how the pruned tree achieves higher generalization test accuracy!")\r
`,Z=`"""\r
Topic 10: Tree Models\r
Script 3: Feature Importances & Text Tree Visualization\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import pandas as pd\r
from sklearn.tree import DecisionTreeClassifier, export_text\r
\r
# Real-estate / Loan Risk Dataset\r
df = pd.DataFrame({\r
    'Income_k': [30, 45, 60, 20, 80, 110, 35, 95],\r
    'Credit_Score': [580, 640, 710, 520, 780, 820, 610, 750],\r
    'Loan_Amount_k': [15, 20, 25, 10, 40, 50, 12, 35],\r
    'Default': [1, 0, 0, 1, 0, 0, 1, 0]\r
})\r
\r
feature_cols = ['Income_k', 'Credit_Score', 'Loan_Amount_k']\r
X = df[feature_cols]\r
y = df['Default']\r
\r
tree = DecisionTreeClassifier(max_depth=3, random_state=42)\r
tree.fit(X, y)\r
\r
# 1. Inspect Feature Importances (Gini importance / Mean Decrease Impurity)\r
importances = pd.Series(tree.feature_importances_, index=feature_cols).sort_values(ascending=False)\r
print("--- Normalized Feature Importances (Sum = 1.0) ---")\r
print(importances)\r
\r
# 2. Export human-readable ASCII decision tree rules\r
tree_text_rules = export_text(tree, feature_names=feature_cols)\r
print("\\n--- ASCII Decision Tree Rules ---")\r
print(tree_text_rules)\r
`,R=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 10 - DECISIONTREECLASSIFIER\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. HOW DECISION TREES WORK (RECURSIVE BINARY SPLITTING)\r
--------------------------------------------------------------------------------\r
A Decision Tree builds a flowchart-like binary tree structure by recursively partitioning the feature space into axis-aligned rectangular boxes.\r
At each node, the algorithm searches across ALL features and ALL possible threshold split values to find the split that maximizes Impurity Reduction (Information Gain).\r
\r
2. SPLITTING CRITERIA (GINI VS ENTROPY)\r
--------------------------------------------------------------------------------\r
A. Gini Impurity (Default):\r
   $Gini = 1 - \\sum_{k=1}^K p_k^2$\r
   - Measures the probability of misclassifying a randomly chosen element.\r
   - Faster computationally (no logarithms). Range: [0, 0.5] for binary classes.\r
\r
B. Entropy / Information Gain:\r
   $Entropy = - \\sum_{k=1}^K p_k \\log_2(p_k)$\r
   - Measures disorder / uncertainty in bits. Range: [0, 1.0] for binary classes.\r
   - Information Gain = Entropy(Parent) - Weighted_Average(Entropy(Children)).\r
\r
3. ESSENTIAL REGULARIZATION HYPERPARAMETERS (CONTROLLING OVERFITTING)\r
--------------------------------------------------------------------------------\r
Without constraints, a tree will grow until every single training leaf is 100% pure ($Gini=0$), leading to severe overfitting.\r
Key pruning controls:\r
- \`max_depth\`: Limits maximum tree depth (e.g. \`max_depth=3\` or \`4\`).\r
- \`min_samples_split\`: Minimum number of samples required to split an internal node (e.g. \`min_samples_split=10\`).\r
- \`min_samples_leaf\`: Minimum number of samples required to be at a leaf node (e.g. \`min_samples_leaf=5\`).\r
- \`max_features\`: Maximum number of features to evaluate per split.\r
- \`ccp_alpha\`: Cost-complexity pruning parameter for minimal cost-complexity pruning.\r
\r
4. FEATURE IMPORTANCE (\`tree.feature_importances_\`)\r
--------------------------------------------------------------------------------\r
- Represents the total normalized reduction of the criterion (Gini or Entropy) brought by each feature.\r
- All feature importances sum to 1.0.\r
- Values near 0 indicate uninformative features that were rarely or never chosen for splits.\r
\r
5. ADVANTAGES & LIMITATIONS\r
--------------------------------------------------------------------------------\r
Advantages:\r
- White-box interpretability (human understandable rules).\r
- Completely scale invariant! No need for \`StandardScaler\` or \`MinMaxScaler\`.\r
- Handles both numerical and categorical variables seamlessly.\r
\r
Limitations:\r
- High variance (small changes in data can yield completely different tree structures).\r
- Susceptible to overfitting (mitigated by pruning or Random Forests).\r
================================================================================\r
`,v=[{id:1,question:"Why do Decision Trees NOT require feature scaling (such as StandardScaler or MinMaxScaler)?",options:["Because Decision Trees convert all numbers into floating point decimals internally","Because tree splits evaluate one feature at a time based solely on ordering thresholds ($x_i \\le \\theta$), unaffected by monotonic scale shifts","Because Scikit-learn automatically normalizes features inside .fit() without telling the user","Because Decision Trees only accept categorical integer inputs"],correctAnswer:1,explanation:"Decision trees partition feature space using axis-aligned orthogonal splits based purely on rank order ($x \\le threshold$). Multiplying or shifting a feature does not alter its threshold ordering."},{id:2,question:"What is the consequence of leaving `max_depth=None` and `min_samples_split=2` on a complex or noisy dataset?",options:["The tree will underfit and produce a single root node","The tree will grow until all leaf nodes are pure, resulting in high variance and severe overfitting","The tree will automatically convert into a Logistic Regression model","An InfiniteLoopError will be raised"],correctAnswer:1,explanation:"Unconstrained decision trees recursively split until every training leaf contains 100% pure samples or fewer than min_samples_split, memorizing training noise and overfitting heavily."},{id:3,question:"What mathematical property is always true for `tree.feature_importances_` in Scikit-learn?",options:["They range from -1.0 to +1.0 and sum to 0.0","They are all non-negative and sum exactly to 1.0","They equal the p-values from a two-tailed t-test","They match the correlation coefficients with the target"],correctAnswer:1,explanation:"Scikit-learn normalizes feature importances (calculated as Mean Decrease Impurity / Gini decrease) so that each feature importance is non-negative and their total sum across all features equals 1.0."},{id:4,question:"Which splitting criterion in `DecisionTreeClassifier` is computationally faster because it avoids logarithmic calculations?",options:["criterion='entropy'","criterion='log_loss'","criterion='gini'","criterion='poisson'"],correctAnswer:2,explanation:"Gini impurity calculates $1 - \\sum p_k^2$, requiring only basic arithmetic squares, whereas Entropy/log_loss computes $- \\sum p_k \\log_2(p_k)$, which involves slower logarithmic computations."}];function te(){const[n,x]=a.useState("interactive"),[p,P]=a.useState(0),[y,N]=a.useState(!1),[l,z]=a.useState(2),[f,w]=a.useState("gini"),[b,L]=a.useState(72),[u,T]=a.useState(1),[g,$]=a.useState(65),[d,C]=a.useState({}),[o,S]=a.useState(!1),c=[{name:"01_decision_tree_classifier_basics.py",code:U},{name:"02_tree_pruning_and_hyperparameters.py",code:Y},{name:"03_feature_importance_and_tree_export.py",code:Z}],k=t=>{navigator.clipboard.writeText(t),N(!0),setTimeout(()=>N(!1),2e3)},M=(t,s)=>{o||C(_=>({..._,[t]:s}))},G=()=>{let t=0;return v.forEach(s=>{d[s.id]===s.correctAnswer&&t++}),t},O=b<=60;let i=0,r=["root"];O?(r.push("leaf_fail_root"),i=0):(r.push("node_project"),l===1?i=1:u===0?(r.push("node_quiz"),l===2?i=0:g<=55?(r.push("leaf_quiz_fail"),i=0):(r.push("leaf_quiz_pass"),i=1)):(r.push("leaf_project_pass"),i=1));const F=[{name:"Attendance %",value:.58},{name:"Project Done",value:.28},{name:"Prior Quiz Score",value:.14}];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400 border border-emerald-500/30",children:e.jsx(X,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",children:"Topic 10 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.tree.DecisionTreeClassifier"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Decision Trees & Recursive Binary Splitting"})]})]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:"Master the transparent white-box model of machine learning. Learn how Gini impurity, information entropy, depth regularization, and feature importances drive decision logic."})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>x("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="interactive"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(B,{className:"w-4 h-4"}),"Tree Architecture Studio"]}),e.jsxs("button",{onClick:()=>x("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="code"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(q,{className:"w-4 h-4"}),"Python Code Lab (",c.length,")"]}),e.jsxs("button",{onClick:()=>x("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="notes"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(I,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>x("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="quiz"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(D,{className:"w-4 h-4"}),"Knowledge Check"]})]}),n==="interactive"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(H,{className:"w-4 h-4 text-emerald-400"}),"Tree Hyperparameters"]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-2",children:[e.jsx("span",{children:"max_depth:"}),e.jsx("span",{className:"font-mono text-emerald-300 font-bold",children:l})]}),e.jsx("div",{className:"flex gap-2",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>z(t),className:`flex-1 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${l===t?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:["Depth ",t]},t))})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-xs text-slate-300 mb-2",children:"criterion:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("button",{onClick:()=>w("gini"),className:`py-2 px-3 rounded-lg text-xs font-medium border text-left ${f==="gini"?"bg-emerald-500/15 border-emerald-500/60 text-emerald-200":"bg-slate-950 border-slate-800 text-slate-400"}`,children:[e.jsx("div",{className:"font-semibold",children:"'gini'"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Fast arithmetic"})]}),e.jsxs("button",{onClick:()=>w("entropy"),className:`py-2 px-3 rounded-lg text-xs font-medium border text-left ${f==="entropy"?"bg-emerald-500/15 border-emerald-500/60 text-emerald-200":"bg-slate-950 border-slate-800 text-slate-400"}`,children:[e.jsx("div",{className:"font-semibold",children:"'entropy'"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Information Gain"})]})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-lg border border-slate-800 space-y-3 mb-4",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-200",children:"Query Student Features (Inference)"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[e.jsx("span",{children:"Attendance %:"}),e.jsxs("span",{className:"font-mono text-emerald-300 font-bold",children:[b,"%"]})]}),e.jsx("input",{type:"range",min:"30",max:"100",value:b,onChange:t=>L(Number(t.target.value)),className:"w-full accent-emerald-400 cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[e.jsx("span",{children:"Project Completed:"}),e.jsx("span",{className:"font-mono text-emerald-300 font-bold",children:u===1?"Yes (1)":"No (0)"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>T(1),className:`flex-1 py-1 text-xs rounded ${u===1?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400"}`,children:"Yes (1)"}),e.jsx("button",{onClick:()=>T(0),className:`flex-1 py-1 text-xs rounded ${u===0?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400"}`,children:"No (0)"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[e.jsx("span",{children:"Prior Quiz Marks:"}),e.jsx("span",{className:"font-mono text-emerald-300 font-bold",children:g})]}),e.jsx("input",{type:"range",min:"20",max:"100",value:g,onChange:t=>$(Number(t.target.value)),className:"w-full accent-emerald-400 cursor-pointer"})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Tree Prediction:"}),e.jsx("span",{className:`text-xs px-2.5 py-1 rounded-full font-bold font-mono ${i===1?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-rose-500/20 text-rose-300 border border-rose-500/30"}`,children:i===1?"Class 1: Pass Exam":"Class 0: Fail Exam"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4",children:[e.jsxs("h4",{className:"text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5",children:[e.jsx(W,{className:"w-3.5 h-3.5 text-emerald-400"}),"feature_importances_ (Sum = 1.0)"]}),e.jsx("div",{className:"space-y-2 font-mono text-xs",children:F.map(t=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-slate-300 mb-1",children:[e.jsx("span",{children:t.name}),e.jsxs("span",{className:"text-emerald-300 font-bold",children:[(t.value*100).toFixed(0),"%"]})]}),e.jsx("div",{className:"w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800",children:e.jsx("div",{style:{width:`${t.value*100}%`},className:"bg-emerald-500 h-full rounded-full"})})]},t.name))})]})]}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(V,{className:"w-4 h-4 text-emerald-400"}),"Live Hierarchical Decision Tree"]}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Glow indicates active traversal path"})]}),e.jsxs("div",{className:"bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-4",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:`p-3 rounded-lg border text-center transition-all ${r.includes("root")?"bg-emerald-500/20 border-emerald-400 shadow-lg shadow-emerald-500/20 text-emerald-200":"bg-slate-900 border-slate-800 text-slate-400"}`,children:[e.jsx("div",{className:"text-xs font-mono font-bold",children:"Attendance <= 60%"}),e.jsxs("div",{className:"text-[10px] text-slate-400 mt-0.5",children:[f==="gini"?"gini = 0.489":"entropy = 0.985"," | samples = 7"]})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 mb-1",children:"True (<= 60%)"}),e.jsxs("div",{className:`p-2.5 rounded-lg border text-center w-full max-w-[170px] ${r.includes("leaf_fail_root")?"bg-rose-500/20 border-rose-400 shadow-md shadow-rose-500/20 text-rose-200":"bg-slate-900 border-slate-800 text-slate-400"}`,children:[e.jsx("div",{className:"text-xs font-bold font-mono",children:"Class 0: Fail"}),e.jsx("div",{className:"text-[10px] text-slate-400 mt-0.5",children:"Pure Leaf (gini=0.0)"})]})]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 mb-1",children:"False (> 60%)"}),e.jsxs("div",{className:`p-2.5 rounded-lg border text-center w-full max-w-[170px] ${r.includes("node_project")?"bg-emerald-500/20 border-emerald-400 shadow-md shadow-emerald-500/20 text-emerald-200":"bg-slate-900 border-slate-800 text-slate-400"}`,children:[e.jsx("div",{className:"text-xs font-bold font-mono",children:l>=2?"Project == 0 ?":"Class 1: Pass"}),e.jsx("div",{className:"text-[10px] text-slate-400 mt-0.5",children:l>=2?"samples = 5":"Depth Limit Reached"})]})]})]}),l>=2&&e.jsxs("div",{className:"grid grid-cols-2 gap-4 pt-2 border-t border-slate-900",children:[e.jsx("div",{}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:`p-2 rounded border text-center text-xs font-mono ${r.includes("node_quiz")||r.includes("leaf_quiz_fail")?"bg-rose-500/20 border-rose-400 text-rose-200":"bg-slate-900 border-slate-800 text-slate-400"}`,children:[e.jsx("div",{className:"text-[11px] font-bold",children:"Quiz <= 55 ?"}),e.jsx("div",{className:"text-[9px] text-slate-500",children:"Fail / Review"})]}),e.jsxs("div",{className:`p-2 rounded border text-center text-xs font-mono ${r.includes("leaf_project_pass")?"bg-emerald-500/20 border-emerald-400 text-emerald-200":"bg-slate-900 border-slate-800 text-slate-400"}`,children:[e.jsx("div",{className:"text-[11px] font-bold",children:"Class 1: Pass"}),e.jsx("div",{className:"text-[9px] text-slate-500",children:"Pure Leaf"})]})]})]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{className:"text-white block mb-1",children:"Scale Invariance Note (Barrackpore Lab):"}),"Notice how the thresholds (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Attendance <= 60"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Quiz <= 55"}),") depend purely on relative order, NOT magnitude. This is why Decision Trees work flawlessly without StandardScaler or MinMaxScaler!"]})]})]})}),n==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:c.map((t,s)=>e.jsx("button",{onClick:()=>P(s),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${p===s?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},s))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:c[p].name}),e.jsx("button",{onClick:()=>k(c[p].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors",children:y?e.jsxs(e.Fragment,{children:[e.jsx(j,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:c[p].code})]})]}),n==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(I,{className:"w-5 h-5 text-emerald-400"}),"Classroom Revision Notes: DecisionTreeClassifier"]}),e.jsxs("button",{onClick:()=>k(R),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400",children:[y?e.jsx(j,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(E,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:R})]}),n==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(D,{className:"w-5 h-5 text-emerald-400"}),"Topic 10 Quiz: Decision Trees"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Verify your understanding of recursive splits, pruning hyperparameters, and feature importance."})]}),o&&e.jsxs("div",{className:"px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-emerald-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[G()," / ",v.length]})]})]}),e.jsx("div",{className:"space-y-6",children:v.map((t,s)=>{d[t.id];const _=d[t.id]===t.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono mt-0.5",children:["Q",s+1]}),e.jsx("span",{children:t.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:t.options.map((Q,m)=>{const A=d[t.id]===m;let h="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return o?m===t.correctAnswer?h="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":A&&!_&&(h="bg-rose-500/20 border-rose-500/50 text-rose-200"):A&&(h="bg-emerald-500/20 border-emerald-500/50 text-emerald-200"),e.jsxs("button",{onClick:()=>M(t.id,m),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${h}`,children:[e.jsx("span",{children:Q}),o&&m===t.correctAnswer&&e.jsx(j,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},m)})}),o&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-emerald-300 block mb-1",children:"Explanation:"}),t.explanation]})]},t.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:o?e.jsxs("button",{onClick:()=>{C({}),S(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(K,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>S(!0),disabled:Object.keys(d).length===0,className:"px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-emerald-600/20",children:"Submit Answers"})})]})})]})]})}export{te as default};
