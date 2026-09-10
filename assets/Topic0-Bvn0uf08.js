import{b as s,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{aI as D,j as O,L as T,cr as h,S as F,k as H,B as v,aa as _,f as w,g as k}from"./vendor-icons-DFC0rBCP.js";const W=`"""\r
01_intro_sklearn_ecosystem.py\r
Title: Introduction to Scikit-learn (sklearn) Machine Learning Ecosystem\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
"""\r
\r
import sklearn\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Overview Lab 01: Core Philosophy & Ecosystem")\r
    print("   Instructor: Sukanta Hui | Location: Barrackpore")\r
    print("=" * 65)\r
\r
    print(f"\\n📦 Scikit-learn Version: {sklearn.__version__}")\r
    print("\\n🏛️ The 6 Pillars of Scikit-Learn:")\r
    print(" 1. Classification  : LogisticRegression, SVM, DecisionTrees, RandomForest, KNN")\r
    print(" 2. Regression      : LinearRegression, Ridge, Lasso, SVR, GradientBoosting")\r
    print(" 3. Clustering      : KMeans, DBSCAN, AgglomerativeClustering, SpectralClustering")\r
    print(" 4. Dimensionality  : PCA, TruncatedSVD, FastICA, t-SNE")\r
    print(" 5. Model Selection : train_test_split, cross_val_score, GridSearchCV")\r
    print(" 6. Preprocessing   : StandardScaler, MinMaxScaler, OneHotEncoder, SimpleImputer")\r
\r
    print("\\n💡 Core Design Principle: Consistent, Uniform API across all algorithms!")\r
    print("   • Estimator.fit(X, y)        -> Train model on data")\r
    print("   • Estimator.predict(X_test)  -> Predict target labels")\r
    print("   • Estimator.score(X, y)      -> Compute accuracy / R² evaluation")\r
\r
if __name__ == "__main__":\r
    main()\r
`,K=`"""\r
02_first_classifier_demo.py\r
Title: Your Very First Scikit-Learn Classification Model\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
from sklearn.datasets import load_iris\r
from sklearn.model_selection import train_test_split\r
from sklearn.neighbors import KNeighborsClassifier\r
from sklearn.metrics import accuracy_score\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Lab 02: End-to-End Iris Flower Classification in 5 Lines")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Swadeep")\r
    print("=" * 65)\r
\r
    # 1. Load built-in toy dataset\r
    iris = load_iris()\r
    X, y = iris.data, iris.target\r
    print(f"\\nDataset shape: Features X={X.shape}, Target y={y.shape}")\r
    print(f"Target classes: {iris.target_names}")\r
\r
    # 2. Split dataset into 80% train and 20% test\r
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\r
\r
    # 3. Instantiate Estimator\r
    clf = KNeighborsClassifier(n_neighbors=3)\r
\r
    # 4. Fit / Train the model\r
    clf.fit(X_train, y_train)\r
\r
    # 5. Predict and Evaluate\r
    y_pred = clf.predict(X_test)\r
    acc = accuracy_score(y_test, y_pred)\r
    \r
    print(f"\\n🎯 Test Set Classification Accuracy: {acc * 100:.2f}%")\r
    print("✓ Model successfully learned decision boundaries!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,B=`"""\r
03_sklearn_architecture.py\r
Title: Unified Object-Oriented Interfaces in Scikit-Learn\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Lab 03: The 3 Core Object Interfaces")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Mahima")\r
    print("=" * 65)\r
\r
    print("""\r
    ┌─────────────────────────────────────────────────────────────┐\r
    │ 1. ESTIMATORS (State Estimation & Learning)                 │\r
    │    • Instantiated with hyper-parameters: model = Model(C=1) │\r
    │    • Methods: model.fit(X, y)                               │\r
    │    • Stores learned state with trailing underscore (e.g.    │\r
    │      coef_, intercept_, classes_, feature_importances_)     │\r
    ├─────────────────────────────────────────────────────────────┤\r
    │ 2. TRANSFORMERS (Feature Preprocessing & Filtering)         │\r
    │    • Methods: transform.fit(X), transform.transform(X)      │\r
    │    • Convenience: transform.fit_transform(X)               │\r
    │    • Examples: StandardScaler, OneHotEncoder, PCA           │\r
    ├─────────────────────────────────────────────────────────────┤\r
    │ 3. PREDICTORS (Inference & Scoring)                         │\r
    │    • Methods: model.predict(X_new), predict_proba(X_new)    │\r
    │    • Evaluation: model.score(X, y)                          │\r
    └─────────────────────────────────────────────────────────────┘\r
    """)\r
    print("✓ Consistent object-oriented design makes algorithm experimentation effortless!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,C=`================================================================================\r
SCIKIT-LEARN OVERVIEW: TOPIC 0 - INTRODUCTION TO SCIKIT-LEARN\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS SCIKIT-LEARN?\r
--------------------------------------------------------------------------------\r
- Scikit-learn (imported as \`sklearn\`) is the premier Python library for classical \r
  Machine Learning, data preprocessing, model selection, and evaluation.\r
- Built on top of NumPy, SciPy, and Matplotlib.\r
- Focuses on structured/tabular data with efficient implementations written in Cython & C.\r
\r
2. THE 6 MAJOR FUNCTIONAL DOMAINS:\r
--------------------------------------------------------------------------------\r
1. Classification: Predicting discrete categorical labels (Spam vs Ham, Disease status).\r
2. Regression: Predicting continuous numerical values (House price, Salary, Temperature).\r
3. Clustering: Unsupervised grouping of similar data points (Customer segmentation).\r
4. Dimensionality Reduction: Reducing feature space while retaining variance (PCA, t-SNE).\r
5. Model Selection: Hyperparameter tuning and validation (GridSearchCV, Cross-validation).\r
6. Preprocessing: Feature extraction, scaling, encoding, and imputation.\r
\r
3. THE CORE API PHILOSOPHY:\r
--------------------------------------------------------------------------------\r
- Consistency: All algorithms share a common interface (\`fit\`, \`predict\`, \`transform\`, \`score\`).\r
- Inspection: Parameters learned during training end with a trailing underscore (e.g. \`coef_\`, \`intercept_\`, \`classes_\`).\r
- Non-proliferation of classes: Standard NumPy arrays and Pandas DataFrames are used directly.\r
- Sensible Defaults: Provides robust baseline default hyperparameters.\r
`,m=[{id:1,question:"Which of the following is NOT one of the 6 core pillars of Scikit-learn?",options:["Classification","Clustering","Deep Convolutional GPU Neural Network Architectures (like PyTorch)","Dimensionality Reduction"],correctAnswer:2,explanation:"Scikit-learn is designed for classical machine learning and tabular algorithms. Deep GPU neural networks are handled by PyTorch or TensorFlow."},{id:2,question:"In Scikit-learn, what universal method is called on an Estimator to learn/train on dataset (X, y)?",options:["estimator.train(X, y)","estimator.fit(X, y)","estimator.learn(X, y)","estimator.optimize(X, y)"],correctAnswer:1,explanation:"`estimator.fit(X, y)` is the universal Scikit-learn method to estimate parameters and train models."},{id:3,question:"How are learned attributes (internal model weights/parameters computed during `.fit()`) named in Scikit-learn?",options:["With a leading dollar sign ($coef)","With a trailing underscore (e.g. coef_, intercept_, classes_)","In ALL_CAPS","Inside a separate JSON file"],correctAnswer:1,explanation:"Scikit-learn convention dictates that all attributes estimated from data during `fit()` end with a trailing underscore (e.g., `model.coef_`)."},{id:4,question:"What is the primary difference between a Transformer and a Predictor in Scikit-learn?",options:["A Transformer has `.transform()` to modify features, while a Predictor has `.predict()` to generate target label inferences","A Transformer only works with text strings","A Predictor cannot use `.fit()`","There is no difference"],correctAnswer:0,explanation:"Transformers (like StandardScaler, PCA) implement `.fit()` and `.transform()` to preprocess feature matrices, while Predictors implement `.fit()` and `.predict()`."}],A=[{id:"classification",title:"1. Classification",desc:"Predict discrete categorical targets (Spam, Disease, Churn)",icon:D,color:"#38bdf8",algos:["LogisticRegression","KNN","DecisionTree","RandomForest","SVC"]},{id:"regression",title:"2. Regression",desc:"Predict continuous real-valued targets (Prices, Salaries)",icon:O,color:"#818cf8",algos:["LinearRegression","Ridge","Lasso","SVR","GradientBoosting"]},{id:"clustering",title:"3. Clustering",desc:"Unsupervised grouping of similar unlabeled observations",icon:T,color:"#34d399",algos:["KMeans","DBSCAN","Agglomerative","Spectral"]},{id:"dimensionality",title:"4. Dimensionality",desc:"Feature compression and variance extraction",icon:h,color:"#f472b6",algos:["PCA","TruncatedSVD","FastICA","t-SNE"]}];function $(){const[a,P]=s.useState("interactive"),[x,I]=s.useState(0),[i,f]=s.useState(!1),[o,L]=s.useState(A[0]),[p,E]=s.useState(3),[z,V]=s.useState(null),[u,g]=s.useState({}),[l,y]=s.useState(!1),b=[{name:"01_intro_sklearn_ecosystem.py",code:W},{name:"02_first_classifier_demo.py",code:K},{name:"03_sklearn_architecture.py",code:B}],N=t=>{navigator.clipboard.writeText(t),f(!0),setTimeout(()=>f(!1),2e3)},R=(t,r)=>{l||g(n=>({...n,[t]:r}))},M=()=>{let t=0;return m.forEach(r=>{u[r.id]===r.correctAnswer&&t++}),t};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(h,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 0"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Introduction to Scikit-Learn"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"The gold standard Machine Learning library in Python. Explore the 6 functional pillars, uniform Estimator API philosophy, and classical ML architecture."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Architecture Studio",icon:F},{id:"code",label:"Python Code Lab",icon:H},{id:"notes",label:"Revision Notes",icon:v},{id:"quiz",label:"Knowledge Check",icon:_}].map(t=>{const r=t.icon,n=a===t.id;return e.jsxs("button",{onClick:()=>P(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${n?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(r,{className:"w-4 h-4"}),t.label]},t.id)})})]}),a==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(T,{className:"w-4 h-4"}),e.jsx("span",{children:"Scikit-Learn Core Pillars"})]}),e.jsx("div",{className:"space-y-2.5",children:A.map(t=>e.jsxs("div",{onClick:()=>L(t),className:`p-3.5 rounded-xl border cursor-pointer transition-all ${o.id===t.id?"bg-blue-950/60 border-blue-500 shadow-md":"bg-slate-950 border-slate-800 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-semibold text-xs text-white",children:t.title}),e.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:t.color}})]}),e.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:t.desc})]},t.id))}),e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-300",children:"KNN Estimator Hyperparameter (k):"}),e.jsx("span",{className:"font-mono text-blue-400",children:p})]}),e.jsx("input",{type:"range",min:"1",max:"9",step:"2",value:p,onChange:t=>E(Number(t.target.value)),className:"w-full accent-blue-500 cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-blue-400 font-semibold mb-1",children:"# Universal Sklearn Pattern:"}),e.jsx("div",{className:"text-emerald-400",children:"from sklearn.neighbors import KNeighborsClassifier"}),e.jsxs("div",{className:"text-indigo-300",children:["model = KNeighborsClassifier(n_neighbors=",p,")"]}),e.jsx("div",{className:"text-slate-400",children:"model.fit(X_train, y_train)"}),e.jsx("div",{className:"text-cyan-300",children:"y_pred = model.predict(X_test)"}),e.jsx("div",{className:"text-amber-300",children:"score = model.score(X_test, y_test)"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(h,{className:"w-4 h-4 text-blue-400"}),"Live Module Inspection: ",o.title]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"sklearn package architecture"})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"490",height:"280",viewBox:"0 0 490 280",className:"max-w-full",children:[e.jsx("rect",{x:"175",y:"100",width:"140",height:"80",rx:"10",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"245",y:"135",fill:"#ffffff",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"Estimator API"}),e.jsx("text",{x:"245",y:"155",fill:"#93c5fd",fontSize:"10",fontFamily:"monospace",textAnchor:"middle",children:".fit() & .predict()"}),e.jsx("path",{d:"M 40 140 L 175 140",stroke:"#34d399",strokeWidth:"2.5",strokeDasharray:"4 4",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"100",y:"130",fill:"#34d399",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"X (Features 2D)"}),e.jsx("path",{d:"M 245 30 L 245 100",stroke:"#f472b6",strokeWidth:"2.5",strokeDasharray:"4 4"}),e.jsx("text",{x:"245",y:"22",fill:"#f472b6",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"y (Target 1D)"}),e.jsx("path",{d:"M 315 140 L 450 140",stroke:"#38bdf8",strokeWidth:"2.5",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"390",y:"130",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"ŷ (Inference)"}),e.jsx("path",{d:"M 245 180 L 245 240",stroke:"#fbbf24",strokeWidth:"2"}),e.jsx("rect",{x:"175",y:"235",width:"140",height:"32",rx:"6",fill:"#0f172a",stroke:"#fbbf24",strokeWidth:"1.5"}),e.jsx("text",{x:"245",y:"255",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:".score() = 96.5%"})]})}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-xs font-semibold text-slate-300",children:["Key Classes in ",e.jsx("span",{className:"text-blue-400 font-mono",children:o.title}),":"]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:o.algos.map(t=>e.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-blue-300 border border-blue-900/60",children:t},t))})]})]})]}),a==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:b.map((t,r)=>e.jsx("button",{onClick:()=>I(r),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${x===r?"bg-blue-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>N(b[x].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[i?e.jsx(w,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(k,{className:"w-3.5 h-3.5"}),i?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed max-h-[480px]",children:b[x].code})})]}),a==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-sm",children:[e.jsx(v,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 0 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>N(C),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[i?e.jsx(w,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(k,{className:"w-3.5 h-3.5"}),i?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:C})]}),a==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-sm",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 0 Knowledge Assessment (4 Questions)"})]}),l&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold",children:["Score: ",M()," / ",m.length]})]}),e.jsx("div",{className:"space-y-6",children:m.map((t,r)=>{const n=u[t.id],S=n===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[r+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((X,d)=>{const j=n===d;let c="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return l?d===t.correctAnswer?c="bg-emerald-950/70 border-emerald-500 text-emerald-300":j&&(c="bg-rose-950/70 border-rose-500 text-rose-300"):j&&(c="bg-blue-600/30 border-blue-500 text-blue-200"),e.jsx("button",{onClick:()=>R(t.id,d),className:`p-3 rounded-lg border text-left text-xs transition-all ${c}`,children:X},d)})}),l&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${S?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:S?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{g({}),y(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>y(!0),disabled:Object.keys(u).length<m.length,className:"px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{$ as default};
