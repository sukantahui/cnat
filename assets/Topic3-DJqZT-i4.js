import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{j as T,S as E,k as W,B as A,aa as I,aM as $,w as G,n as K,ad as P,cw as Q,L as Y,H as q,be as J,ax as Z,f as b,g as M}from"./vendor-icons-DFC0rBCP.js";const ee=`"""\r
01_estimator_base_class.py\r
Title: BaseEstimator, ClassifierMixin, and RegressorMixin Architecture\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
from sklearn.base import BaseEstimator, ClassifierMixin, RegressorMixin\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Lab 01: Estimator Object Hierarchy & Mixins")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Swadeep")\r
    print("=" * 65)\r
\r
    # In Scikit-learn, every algorithm inherits from BaseEstimator:\r
    # 1. BaseEstimator : Provides get_params() and set_params() for GridSearchCV compatibility\r
    # 2. ClassifierMixin: Adds .score(X, y) that computes classification accuracy\r
    # 3. RegressorMixin : Adds .score(X, y) that computes R² score\r
    # 4. TransformerMixin: Automatically creates .fit_transform() from .fit() and .transform()\r
\r
    print("\\n🏛️ Inheritance Hierarchy:")\r
    print("   BaseEstimator")\r
    print("      ├── ClassifierMixin -> LogisticRegression, SVC, DecisionTreeClassifier")\r
    print("      ├── RegressorMixin  -> LinearRegression, SVR, RandomForestRegressor")\r
    print("      └── TransformerMixin -> StandardScaler, PCA, SimpleImputer")\r
\r
    print("\\n✓ This standardized mixin inheritance ensures 100% interoperability with Pipelines!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,te=`"""\r
02_inspecting_learned_attributes.py\r
Title: Inspecting Internal Estimator Parameters with Trailing Underscores\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
from sklearn.linear_model import LogisticRegression\r
from sklearn.datasets import load_iris\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Lab 02: Model Introspection & Learned State")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Mahima")\r
    print("=" * 65)\r
\r
    iris = load_iris()\r
    X, y = iris.data, iris.target\r
\r
    model = LogisticRegression(max_iter=200)\r
\r
    print("Before fitting: model is uninitialized.")\r
    try:\r
        print(model.coef_)\r
    except AttributeError:\r
        print("✓ Verified: model.coef_ does not exist before .fit() is called!")\r
\r
    model.fit(X, y)\r
    print("\\nAfter fitting: All learned attributes with trailing '_' are populated:")\r
    print(f" • Classes learned (classes_)       : {model.classes_}")\r
    print(f" • Weight Matrix shape (coef_)       : {model.coef_.shape}")\r
    print(f" • Intercepts Vector (intercept_)   : {model.intercept_.round(2)}")\r
    print(f" • Number of features seen (n_features_in_): {model.n_features_in_}")\r
\r
if __name__ == "__main__":\r
    main()\r
`,se=`"""\r
03_custom_estimator_demo.py\r
Title: Building a Custom Scikit-Learn Estimator from Scratch\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import numpy as np\r
from sklearn.base import BaseEstimator, ClassifierMixin\r
\r
class BarrackporeThresholdClassifier(BaseEstimator, ClassifierMixin):\r
    """\r
    A custom threshold-based classifier conforming 100% to Scikit-learn API specs.\r
    """\r
    def __init__(self, threshold=50.0):\r
        # Hyperparameters must be passed directly without modification\r
        self.threshold = threshold\r
\r
    def fit(self, X, y):\r
        # Validate inputs and store features seen\r
        self.classes_ = np.unique(y)\r
        self.n_features_in_ = X.shape[1]\r
        print(f"   [Custom Estimator] Trained with threshold={self.threshold}")\r
        return self\r
\r
    def predict(self, X):\r
        # Predict class 1 if first feature >= threshold else 0\r
        return (X[:, 0] >= self.threshold).astype(int)\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Lab 03: Custom Estimator Authoring")\r
    print("   Instructor: Sukanta Hui | Students: Swadeep, Susmita, Abhronila")\r
    print("=" * 65)\r
\r
    X = np.array([[30], [45], [55], [75], [90]])\r
    y = np.array([0, 0, 1, 1, 1])\r
\r
    custom_model = BarrackporeThresholdClassifier(threshold=50.0)\r
    custom_model.fit(X, y)\r
    \r
    preds = custom_model.predict(np.array([[40], [60], [85]]))\r
    print(f"Predictions on [[40], [60], [85]]: {preds}")\r
    print(f"Score on training set: {custom_model.score(X, y) * 100:.1f}%")\r
    print("✓ Custom estimator works seamlessly with all Scikit-learn ecosystem utilities!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,R=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 3 - THE ESTIMATOR CONCEPT IN SCIKIT-LEARN\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. WHAT IS AN ESTIMATOR?\r
--------------------------------------------------------------------------------\r
In Scikit-learn, an "Estimator" is any object that learns from data.\r
It can be:\r
- A Supervised Learning model (e.g., LinearRegression, DecisionTreeClassifier)\r
- An Unsupervised Learning model (e.g., KMeans, PCA)\r
- A Transformer/Preprocessor (e.g., StandardScaler, SimpleImputer)\r
\r
CORE PRINCIPLES OF THE ESTIMATOR DESIGN:\r
1. Consistency: All objects share a simple, uniform interface.\r
2. Inspection: All internal parameter values and learned states are directly accessible as public attributes.\r
3. Non-proliferation of classes: Learning algorithms operate directly on NumPy arrays or Pandas DataFrames, without inventing custom dataset wrapper objects.\r
4. Sensible Defaults: Scikit-learn algorithms come preconfigured with sensible default hyperparameter values.\r
\r
2. ESTIMATOR LIFE CYCLE & CONVENTIONS\r
--------------------------------------------------------------------------------\r
A. Initialization / Instantiation:\r
   - Hyperparameters are passed directly to the constructor:\r
     \`model = LinearRegression(fit_intercept=True)\`\r
   - NO data learning happens during __init__().\r
\r
B. Fitting (The .fit() method):\r
   - \`.fit(X, y)\` for supervised estimators\r
   - \`.fit(X)\` for unsupervised estimators / transformers\r
   - Returns \`self\` so method chaining is supported: \`clf.fit(X, y).predict(X_new)\`\r
\r
C. Learned Attributes (Trailing Underscore Convention):\r
   - Parameters estimated directly from data during .fit() are appended with a single trailing underscore \`_\`.\r
   - Examples:\r
     * \`model.coef_\` (coefficients / weights)\r
     * \`model.intercept_\` (bias / intercept)\r
     * \`model.feature_names_in_\` (input column names if trained on a DataFrame)\r
     * \`scaler.mean_\` and \`scaler.scale_\` (mean and std dev in StandardScaler)\r
   - Hyperparameters (configured before fitting) do NOT have a trailing underscore (e.g., \`model.fit_intercept\`).\r
\r
3. TYPES OF ESTIMATORS & INTERFACE FAMILIES\r
--------------------------------------------------------------------------------\r
A. Predictor / Classifier / Regressor:\r
   - Must implement \`.fit(X, y)\`\r
   - Must implement \`.predict(X_test)\`\r
   - Usually implements \`.score(X_test, y_test)\`\r
   - Probabilistic classifiers implement \`.predict_proba(X_test)\`\r
\r
B. Transformer:\r
   - Must implement \`.fit(X, [y])\`\r
   - Must implement \`.transform(X)\`\r
   - Conveniently implements \`.fit_transform(X, [y])\`\r
\r
C. Clusterer:\r
   - Must implement \`.fit(X)\`\r
   - Provides \`labels_\` attribute containing cluster assignments\r
   - May implement \`.predict(X_test)\` to assign unseen points to nearest centroids\r
\r
4. ESTIMATOR UTILITIES (BaseEstimator & ClassifierMixin)\r
--------------------------------------------------------------------------------\r
When building custom estimators adhering to Scikit-learn standards:\r
- Inherit from \`sklearn.base.BaseEstimator\`:\r
  * Provides \`.get_params()\` and \`.set_params()\` automatically without \`*args\` or \`**kwargs\`.\r
  * Enables integration with GridSearchCV, RandomizedSearchCV, and Pipeline.\r
- Inherit from \`sklearn.base.ClassifierMixin\`, \`RegressorMixin\`, or \`TransformerMixin\`:\r
  * Provides automatic \`.score()\` method calculation (Mean Accuracy for classifiers, R2 score for regressors).\r
\r
5. COMMON PITFALLS & CLASSROOM TIPS\r
--------------------------------------------------------------------------------\r
- Pitfall: Accessing \`model.coef_\` before calling \`.fit()\`. Raises \`NotFittedError\`.\r
- Pitfall: Passing positional arguments \`*args\` to custom \`__init__\`. Scikit-learn requires explicit keyword parameters with default values.\r
- Student Insight (Debangshu's query): Why trailing underscore? Because it instantly distinguishes what YOU supplied (hyperparameters) from what the ALGORITHM figured out (learned parameters).\r
================================================================================\r
`,_=[{id:1,question:"In Scikit-learn, what is the meaning of a trailing underscore in an attribute name (e.g., `model.coef_`, `scaler.mean_`)?",options:["It marks the variable as private and hidden from the user","It represents a learned parameter calculated from training data during .fit()","It indicates a temporary variable that will be deleted after garbage collection","It denotes a user-supplied hyperparameter passed into __init__()"],correctAnswer:1,explanation:"Scikit-learn follows a strict convention where parameters learned from training data during `.fit()` are named with a single trailing underscore (e.g. `coef_`, `intercept_`, `classes_`). Hyperparameters passed during instantiation do not have trailing underscores."},{id:2,question:"What error is raised if you attempt to access `model.predict()` or `model.coef_` on an estimator before calling `.fit()`?",options:["AttributeError","sklearn.exceptions.NotFittedError","ValueError: Empty Model","IndexError"],correctAnswer:1,explanation:"Scikit-learn raises `sklearn.exceptions.NotFittedError` (which is a subclass of ValueError and AttributeError) if an operation requiring a fitted model is invoked prior to calling `.fit()`."},{id:3,question:"Why should custom estimators inherit from `sklearn.base.BaseEstimator`?",options:["To automatically compile Python code into C++ binaries for speed","To obtain automatic implementations of `get_params()` and `set_params()` for compatibility with GridSearchCV and Pipelines","To enforce strict GPU hardware acceleration","To prevent Scikit-learn from copying training data"],correctAnswer:1,explanation:"Inheriting from `BaseEstimator` equips the custom class with standard parameter inspection tools (`get_params()` and `set_params()`), enabling seamless integration into GridSearchCV, cross_val_score, and Pipelines."},{id:4,question:"Which of the following is true regarding hyperparameters in Scikit-learn estimator classes?",options:["They must be estimated from dataset distributions during `.fit()`","They should be passed as explicit keyword arguments in `__init__()` with sensible default values","They must be configured via environment variables","They are stored in private attributes prefixed with double underscores `__`"],correctAnswer:1,explanation:"Scikit-learn guidelines specify that all hyperparameters must be explicitly accepted in `__init__()` as keyword arguments with default values, without using `*args` or `**kwargs`."}],L=[{id:"regressor",name:"LinearRegression (Regressor)",category:"Supervised Learning",initParams:{fit_intercept:!0,positive:!1},learnedParams:{coef_:"[3.85, -1.42]",intercept_:"12.45",n_features_in_:"2",feature_names_in_:"['study_hours', 'sleep_hours']",rank_:"2"},methods:["fit(X, y)","predict(X_new)","score(X_test, y_test)"],statusNote:"Predicts continuous target values (e.g. final exam score)."},{id:"classifier",name:"LogisticRegression (Classifier)",category:"Supervised Learning",initParams:{C:1,max_iter:100,solver:"lbfgs"},learnedParams:{classes_:"[0, 1]",coef_:"[[1.24, 0.88]]",intercept_:"[-2.15]",n_iter_:"[18]"},methods:["fit(X, y)","predict(X_new)","predict_proba(X_new)","score(X_test, y_test)"],statusNote:"Predicts categorical class labels & class probability estimates."},{id:"transformer",name:"StandardScaler (Transformer)",category:"Preprocessing",initParams:{with_mean:!0,with_std:!0},learnedParams:{mean_:"[52.3, 7.1]",var_:"[144.2, 2.5]",scale_:"[12.01, 1.58]",n_samples_seen_:"200"},methods:["fit(X)","transform(X)","fit_transform(X)","inverse_transform(X_scaled)"],statusNote:"Computes mean & std dev, transforms features into zero mean and unit variance."},{id:"clusterer",name:"KMeans (Clusterer)",category:"Unsupervised Learning",initParams:{n_clusters:3,init:"k-means++",random_state:42},learnedParams:{cluster_centers_:"[[2.1, 3.4], [8.5, 9.1], [5.0, 1.2]]",labels_:"[0, 1, 1, 2, 0, 2, ...]",inertia_:"142.85",n_iter_:"6"},methods:["fit(X)","predict(X_new)","fit_predict(X)","transform(X)"],statusNote:"Discovers geometric centroid positions and partitions unlabeled data into K groups."}];function ie(){const[i,m]=a.useState("interactive"),[x,X]=a.useState(0),[j,N]=a.useState(!1),[y,O]=a.useState(0),[r,h]=a.useState(!1),[v,f]=a.useState(!1),[B,p]=a.useState(!1),[o,w]=a.useState({}),[n,S]=a.useState(!1),l=L[y],d=[{name:"01_estimator_base_class.py",code:ee},{name:"02_inspecting_learned_attributes.py",code:te},{name:"03_custom_estimator_demo.py",code:se}],C=t=>{navigator.clipboard.writeText(t),N(!0),setTimeout(()=>N(!1),2e3)},F=(t,s)=>{n||w(g=>({...g,[t]:s}))},H=()=>{let t=0;return _.forEach(s=>{o[s.id]===s.correctAnswer&&t++}),t},V=()=>{p(!1),f(!0),setTimeout(()=>{f(!1),h(!0)},700)},U=()=>{h(!1),f(!1),p(!1)},z=()=>{r||p(!0)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-indigo-500/20 rounded-xl text-indigo-400 border border-indigo-500/30",children:e.jsx(T,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20",children:"Topic 3 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.base.BaseEstimator"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"The Estimator Concept & Architecture"})]})]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:["Master the foundational abstraction of Scikit-learn. Learn how the unified Estimator interface governs hyperparameters vs. learned attributes (trailing ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"_"}),"), object state transitions, and seamless class extensibility."]})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>m("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="interactive"?"border-indigo-400 text-indigo-400 bg-indigo-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(E,{className:"w-4 h-4"}),"Estimator State Simulator"]}),e.jsxs("button",{onClick:()=>m("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="code"?"border-indigo-400 text-indigo-400 bg-indigo-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(W,{className:"w-4 h-4"}),"Python Code Lab (",d.length,")"]}),e.jsxs("button",{onClick:()=>m("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="notes"?"border-indigo-400 text-indigo-400 bg-indigo-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(A,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>m("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="quiz"?"border-indigo-400 text-indigo-400 bg-indigo-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(I,{className:"w-4 h-4"}),"Knowledge Check"]})]}),i==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:L.map((t,s)=>e.jsxs("button",{onClick:()=>{O(s),h(!1),p(!1)},className:`p-3.5 rounded-xl border text-left transition-all ${y===s?"bg-indigo-500/15 border-indigo-500/60 shadow-lg shadow-indigo-950/50":"bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1",children:t.category}),e.jsx("div",{className:"font-semibold text-slate-200 text-sm",children:t.name.split(" ")[0]}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 truncate",children:t.name.split(" ")[1]})]},t.id))}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx($,{className:"w-4 h-4 text-indigo-400"}),"Estimator Lifecycle Controls"]}),e.jsx("span",{className:`text-xs px-2.5 py-1 rounded-full font-mono font-medium ${r?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-amber-500/20 text-amber-300 border border-amber-500/30"}`,children:r?"STATE: FITTED":"STATE: UNFITTED"})]}),e.jsx("p",{className:"text-xs text-slate-400 mb-4",children:l.statusNote}),e.jsxs("div",{className:"flex flex-col gap-2.5",children:[e.jsxs("button",{onClick:V,disabled:v||r,className:`w-full py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all ${r?"bg-slate-800/60 text-slate-500 cursor-not-allowed border border-slate-700/50":"bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 active:scale-[0.98]"}`,children:[e.jsx(G,{className:"w-4 h-4"}),v?"Executing .fit(X, y)...":r?"Model Already Fitted":"Execute .fit(X, y)"]}),e.jsxs("button",{onClick:z,className:"w-full py-2.5 px-4 rounded-lg font-medium text-xs bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center gap-2 transition-all",children:[e.jsx(K,{className:"w-3.5 h-3.5 text-indigo-400"}),"Try Inspecting Learned Attributes Now"]}),e.jsxs("button",{onClick:U,className:"w-full py-2 px-4 rounded-lg font-medium text-xs bg-slate-900 hover:bg-slate-800/50 text-slate-400 border border-slate-800 flex items-center justify-center gap-1.5 transition-all",children:[e.jsx(P,{className:"w-3.5 h-3.5"}),"Reset Estimator State"]})]}),B&&!r&&e.jsxs("div",{className:"mt-4 p-3.5 bg-rose-500/15 border border-rose-500/30 rounded-lg text-rose-300 text-xs flex items-start gap-2.5",children:[e.jsx(Q,{className:"w-4 h-4 text-rose-400 shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-rose-200",children:"sklearn.exceptions.NotFittedError"}),e.jsxs("div",{className:"text-slate-400 mt-0.5",children:["This ",e.jsx("code",{className:"text-rose-300 font-mono",children:l.name.split(" ")[0]})," instance is not fitted yet. Call ",e.jsx("code",{className:"text-rose-300 font-mono",children:".fit()"})," with appropriate arguments before using this estimator."]})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsxs("h4",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5",children:[e.jsx(Y,{className:"w-3.5 h-3.5 text-indigo-400"}),"Interface Methods"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:l.methods.map((t,s)=>e.jsxs("div",{className:"px-2.5 py-1.5 bg-slate-950/80 rounded border border-slate-800/80 font-mono text-xs text-indigo-300 flex items-center justify-between",children:[e.jsxs("span",{children:[".",t]}),r||t.startsWith("fit")?e.jsx(q,{className:"w-3 h-3 text-emerald-400"}):e.jsx("span",{className:"text-[10px] text-slate-500",children:"needs fit"})]},s))})]})]}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(J,{className:"w-4 h-4 text-indigo-400"}),"Internal Attribute Inspector"]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("span",{className:"text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5",children:[e.jsx(Z,{className:"w-3.5 h-3.5"}),"1. Hyperparameters (Set at Instantiation - No Trailing Underscore)"]}),e.jsx("span",{className:"text-[11px] text-slate-400 font-mono",children:"Always Accessible"})]}),e.jsx("div",{className:"bg-slate-950/90 rounded-lg p-3 border border-slate-800/90 space-y-2 font-mono text-xs",children:Object.entries(l.initParams).map(([t,s])=>e.jsxs("div",{className:"flex items-center justify-between py-1 border-b border-slate-900 last:border-0",children:[e.jsxs("span",{className:"text-amber-300",children:["estimator.",t]}),e.jsx("span",{className:"text-slate-300 font-semibold",children:String(s)})]},t))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("span",{className:"text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5",children:[e.jsx(E,{className:"w-3.5 h-3.5"}),"2. Learned Attributes (Populated during .fit() - Single Trailing Underscore ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"_"}),")"]}),e.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:r?"Populated":"Locked / Unset"})]}),r?e.jsx("div",{className:"bg-slate-950/90 rounded-lg p-3 border border-emerald-500/30 space-y-2 font-mono text-xs transition-all animate-fadeIn",children:Object.entries(l.learnedParams).map(([t,s])=>e.jsxs("div",{className:"flex items-center justify-between py-1.5 border-b border-slate-900 last:border-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-emerald-400 font-semibold",children:["estimator.",t]}),e.jsx("span",{className:"text-[10px] bg-emerald-500/10 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-500/20",children:"learned"})]}),e.jsx("span",{className:"text-indigo-300 font-semibold",children:s})]},t))}):e.jsxs("div",{className:"bg-slate-950/40 rounded-lg p-6 border border-dashed border-slate-800 text-center",children:[e.jsx("div",{className:"text-slate-500 text-xs font-mono mb-1",children:"No learned parameters available."}),e.jsxs("div",{className:"text-slate-400 text-xs",children:["Click ",e.jsx("strong",{className:"text-indigo-400",children:'"Execute .fit(X, y)"'})," above to estimate weights & internal statistics."]})]})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-indigo-950/40 to-slate-900/60 border border-indigo-500/20 rounded-xl flex items-start gap-3",children:[e.jsx("div",{className:"p-2 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0",children:e.jsx(T,{className:"w-4 h-4"})}),e.jsxs("div",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{className:"text-white block mb-1",children:"Classroom Rule (Sukanta Hui, Barrackpore):"}),"Whenever you see a single trailing underscore in Scikit-learn (e.g. ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"model.coef_"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"scaler.scale_"}),"), it is a mathematically estimated parameter extracted from the data, not a user configuration!"]})]})]})]})]}),i==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:d.map((t,s)=>e.jsx("button",{onClick:()=>X(s),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${x===s?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},s))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:d[x].name}),e.jsx("button",{onClick:()=>C(d[x].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-400 transition-colors",children:j?e.jsxs(e.Fragment,{children:[e.jsx(b,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(M,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:d[x].code})]})]}),i==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(A,{className:"w-5 h-5 text-indigo-400"}),"Classroom Revision Notes: The Estimator Concept"]}),e.jsxs("button",{onClick:()=>C(R),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-400",children:[j?e.jsx(b,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:R})]}),i==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(I,{className:"w-5 h-5 text-indigo-400"}),"Concept Assessment"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Test your grasp of Scikit-learn's estimator rules, trailing underscores, and base classes."})]}),n&&e.jsxs("div",{className:"px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-indigo-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[H()," / ",_.length]})]})]}),e.jsx("div",{className:"space-y-6",children:_.map((t,s)=>{o[t.id];const g=o[t.id]===t.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono mt-0.5",children:["Q",s+1]}),e.jsx("span",{children:t.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:t.options.map((D,c)=>{const k=o[t.id]===c;let u="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return n?c===t.correctAnswer?u="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":k&&!g&&(u="bg-rose-500/20 border-rose-500/50 text-rose-200"):k&&(u="bg-indigo-500/20 border-indigo-500/50 text-indigo-200"),e.jsxs("button",{onClick:()=>F(t.id,c),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${u}`,children:[e.jsx("span",{children:D}),n&&c===t.correctAnswer&&e.jsx(b,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},c)})}),n&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-indigo-300 block mb-1",children:"Explanation:"}),t.explanation]})]},t.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:n?e.jsxs("button",{onClick:()=>{w({}),S(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(P,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>S(!0),disabled:Object.keys(o).length===0,className:"px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-indigo-600/20",children:"Submit Answers"})})]})})]})]})}export{ie as default};
