import{b as o,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{b2 as R,S as O,k as L,B as k,aa as C,cx as M,ac as B,f as g,g as P,ad as X}from"./vendor-icons-ri6cs58t.js";const H=`"""\r
Topic 16: Scikit-learn Pipeline\r
Script 1: Basic Pipeline Construction & Execution\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.pipeline import Pipeline, make_pipeline\r
from sklearn.preprocessing import StandardScaler\r
from sklearn.linear_model import LogisticRegression\r
from sklearn.metrics import accuracy_score\r
\r
# Toy training data\r
X_train = np.array([[20, 30000], [25, 45000], [45, 120000], [52, 140000]])\r
y_train = np.array([0, 0, 1, 1])\r
\r
# 1. Explicit named Pipeline\r
pipe_explicit = Pipeline([\r
    ('scaler', StandardScaler()),\r
    ('classifier', LogisticRegression(random_state=42))\r
])\r
\r
# Fit entire pipeline with a single .fit() call\r
pipe_explicit.fit(X_train, y_train)\r
\r
# 2. Inspect named pipeline steps\r
print("--- Pipeline Named Steps ---")\r
print("Pipeline Steps:", pipe_explicit.named_steps.keys())\r
print("Learned Scaler Mean:", pipe_explicit.named_steps['scaler'].mean_)\r
print("Learned Model Coef:", pipe_explicit.named_steps['classifier'].coef_)\r
\r
# 3. Predict seamlessly (transforms X_test automatically before predicting!)\r
X_test = np.array([[22, 35000], [48, 130000]])\r
y_pred = pipe_explicit.predict(X_test)\r
y_prob = pipe_explicit.predict_proba(X_test)\r
\r
print("\\n--- Predictions on Unseen Test Samples ---")\r
for x, pred, prob in zip(X_test, y_pred, y_prob):\r
    print(f"Input {x} -> Predicted Class: {pred} (Prob = {prob[pred]*100:.1f}%)")\r
\r
# 4. Convenient shorthand: make_pipeline()\r
pipe_short = make_pipeline(StandardScaler(), LogisticRegression())\r
print("\\nmake_pipeline() created steps:", pipe_short.named_steps.keys())\r
`,F=`"""\r
Topic 16: Scikit-learn Pipeline\r
Script 2: Full End-to-End Pipeline with ColumnTransformer\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import pandas as pd\r
from sklearn.pipeline import Pipeline\r
from sklearn.compose import ColumnTransformer\r
from sklearn.impute import SimpleImputer\r
from sklearn.preprocessing import StandardScaler, OneHotEncoder\r
from sklearn.ensemble import RandomForestClassifier\r
\r
# Mixed raw student DataFrame with missing values\r
raw_df = pd.DataFrame({\r
    'study_hours': [10.0, None, 25.0, 30.0, 15.0, 20.0],\r
    'attendance_pct': [60.0, 75.0, None, 95.0, 70.0, 85.0],\r
    'city': ['Barrackpore', 'Kolkata', 'Barrackpore', 'Shyamnagar', 'Kolkata', 'Barrackpore'],\r
    'passed': [0, 1, 1, 1, 0, 1]\r
})\r
\r
X = raw_df[['study_hours', 'attendance_pct', 'city']]\r
y = raw_df['passed']\r
\r
# 1. Sub-pipeline for numeric features (Impute median -> StandardScale)\r
numeric_pipe = Pipeline([\r
    ('imputer', SimpleImputer(strategy='median')),\r
    ('scaler', StandardScaler())\r
])\r
\r
# 2. Sub-pipeline for categorical features (Impute most_frequent -> OneHotEncode)\r
categorical_pipe = Pipeline([\r
    ('imputer', SimpleImputer(strategy='most_frequent')),\r
    ('encoder', OneHotEncoder(handle_unknown='ignore'))\r
])\r
\r
# 3. Combine into ColumnTransformer\r
preprocessor = ColumnTransformer(\r
    transformers=[\r
        ('num', numeric_pipe, ['study_hours', 'attendance_pct']),\r
        ('cat', categorical_pipe, ['city'])\r
    ]\r
)\r
\r
# 4. Master Pipeline: Preprocessing + Model\r
full_pipeline = Pipeline([\r
    ('preprocessor', preprocessor),\r
    ('model', RandomForestClassifier(n_estimators=50, random_state=42))\r
])\r
\r
full_pipeline.fit(X, y)\r
print("--- Master Pipeline Fitted Successfully ---")\r
print("Steps in Master Pipeline:", [name for name, _ in full_pipeline.steps])\r
print("Training Score:", full_pipeline.score(X, y))\r
`,V=`"""\r
Topic 16: Scikit-learn Pipeline\r
Script 3: Preventing Data Leakage in Cross-Validation & Hyperparameter Tuning\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
from sklearn.datasets import load_breast_cancer\r
from sklearn.pipeline import Pipeline\r
from sklearn.preprocessing import StandardScaler\r
from sklearn.svm import SVC\r
from sklearn.model_selection import GridSearchCV, cross_val_score\r
\r
X, y = load_breast_cancer(return_X_y=True)\r
\r
# Encapsulate Scaler + SVM into Pipeline to prevent test leakage across CV folds\r
pipeline = Pipeline([\r
    ('scaler', StandardScaler()),\r
    ('svm', SVC())\r
])\r
\r
# Define parameter grid (use double underscore 'stepname__paramname' syntax)\r
param_grid = {\r
    'svm__C': [0.1, 1.0, 10.0],\r
    'svm__kernel': ['linear', 'rbf']\r
}\r
\r
grid = GridSearchCV(pipeline, param_grid, cv=5, scoring='accuracy')\r
grid.fit(X, y)\r
\r
print("--- GridSearchCV with Pipeline ---")\r
print("Best Parameters:", grid.best_params_)\r
print(f"Best 5-Fold Cross-Validated Accuracy: {grid.best_score_*100:.2f}%")\r
print(f"Best Estimator Pipeline: {grid.best_estimator_}")\r
`,E=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 16 - SCIKIT-LEARN PIPELINES\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. WHAT IS A SCIKIT-LEARN PIPELINE?\r
--------------------------------------------------------------------------------\r
A \`Pipeline\` chains multiple sequential data transformation steps with a final machine learning estimator into a single composite object.\r
\r
CORE RULES OF A PIPELINE:\r
1. Every intermediate step (all except the last) MUST be a Transformer implementing \`.fit()\` and \`.transform()\`.\r
2. The final step can be an Estimator, Classifier, Regressor, Clusterer, or Transformer.\r
3. Calling \`pipe.fit(X, y)\` triggers \`.fit_transform()\` sequentially down the chain and \`.fit()\` on the final estimator.\r
4. Calling \`pipe.predict(X_new)\` automatically applies \`.transform()\` through all intermediate steps before calling \`.predict()\` on the final estimator.\r
\r
2. WHY USE PIPELINES? (THE 3 MAJOR BENEFITS)\r
--------------------------------------------------------------------------------\r
A. Elimination of Data Leakage:\r
   - When tuning models with \`cross_val_score()\` or \`GridSearchCV\`, preprocessing parameters (like mean and variance in \`StandardScaler\`) are re-fitted strictly on the training folds, never seeing the validation fold!\r
\r
B. Production Deployment & Clean Code:\r
   - Bundles all imputation, scaling, one-hot encoding, and model weights into one serialized pickle/joblib file.\r
   - Raw production JSON payloads can be passed straight to \`pipeline.predict()\`.\r
\r
C. Code Modularity & Readability:\r
   - Replaces dozens of fragmented preprocessing variables (\`X_train_imp_scaled_enc\`) with a single pipeline object.\r
\r
3. CONVENIENT SHORTHAND: \`make_pipeline()\`\r
--------------------------------------------------------------------------------\r
- Standard syntax:\r
  \`Pipeline([('scaler', StandardScaler()), ('clf', LogisticRegression())])\`\r
- Shorthand syntax:\r
  \`make_pipeline(StandardScaler(), LogisticRegression())\`\r
  (Automatically assigns lowercase class names as step keys: \`'standardscaler'\`, \`'logisticregression'\`).\r
\r
4. ACCESSING INTERMEDIATE PARAMETERS & HYPERPARAMETER TUNING\r
--------------------------------------------------------------------------------\r
- Access step object: \`pipe.named_steps['scaler'].mean_\`\r
- Parameter naming convention for GridSearchCV / RandomizedSearchCV:\r
  Use double underscore \`<step_name>__<parameter_name>\`:\r
  \`param_grid = {'classifier__C': [0.1, 1, 10], 'scaler__with_mean': [True, False]}\`\r
\r
5. BARRACKPORE CLASSROOM MOTTO (Sukanta Hui)\r
--------------------------------------------------------------------------------\r
"Never ship raw machine learning models to production without wrapping them in an end-to-end Scikit-learn Pipeline!"\r
================================================================================\r
`,y=[{id:1,question:"What requirement must all intermediate steps (all steps except the last) in a Scikit-learn `Pipeline` satisfy?",options:["They must be supervised classification algorithms","They must be Transformers implementing both `.fit()` and `.transform()` methods","They must have a .score() method","They must be compiled with Cython"],correctAnswer:1,explanation:"Every intermediate step in a Pipeline must be a transformer that can take input data, fit parameters, and transform it to pass along to the next step in the pipeline sequence."},{id:2,question:"What is the primary architectural reason to encapsulate preprocessing and model fitting inside a `Pipeline` during Cross-Validation?",options:["It reduces dataset memory footprint by 50%","It completely prevents data leakage by ensuring preprocessing statistics (e.g. mean, variance) are learned solely from the training folds and never from the validation fold","It forces the CPU to run multithreaded jobs","It automatically exports models to Docker containers"],correctAnswer:1,explanation:"If you scale or impute the whole dataset before cross-validation, test fold statistics leak into training. A Pipeline guarantees that `.fit_transform()` is rerun strictly on each training fold independently."},{id:3,question:"When tuning hyperparameters of a pipeline step named `'clf'` inside `GridSearchCV`, what syntax is used to specify parameters (e.g. parameter `C`)?",options:["'clf.C': [0.1, 1, 10]","'clf__C': [0.1, 1, 10]","'clf->C': [0.1, 1, 10]","'C_of_clf': [0.1, 1, 10]"],correctAnswer:1,explanation:"Scikit-learn uses the double underscore convention `<step_name>__<parameter_name>` (e.g. `'clf__C'` or `'scaler__with_mean'`) to route hyperparameter candidates directly to specific pipeline steps."},{id:4,question:"How does `make_pipeline()` differ from `Pipeline()` constructor?",options:["make_pipeline() requires you to explicitly name every step","make_pipeline() automatically generates step names based on the lowercased class names of the provided transformer/estimator instances","make_pipeline() only works for regression problems","make_pipeline() runs faster on GPUs"],correctAnswer:1,explanation:"`make_pipeline` is a convenient wrapper that constructs a Pipeline automatically naming each step with its lowercased class name (e.g. `StandardScaler` becomes `'standardscaler'`)."}],s=[{step:0,name:"1. Raw Input Payload",type:"Input Data",desc:"Uncleaned raw query with missing values and mixed types.",dataState:"{ study_hours: null, score: 75, city: 'Barrackpore' }",details:"Raw request payload arriving at production API endpoint."},{step:1,name:"2. SimpleImputer(strategy='median')",type:"Transformer",desc:"Replaces missing values (null) with learned training median (18.5).",dataState:"{ study_hours: 18.5, score: 75, city: 'Barrackpore' }",details:"Missing null replaced without throwing runtime exceptions."},{step:2,name:"3. StandardScaler()",type:"Transformer",desc:"Normalizes numeric values to Z-scores using learned μ and σ.",dataState:"{ study_hours_z: 0.42, score_z: 0.85, city: 'Barrackpore' }",details:"Numeric features standardized to zero mean and unit variance."},{step:3,name:"4. OneHotEncoder()",type:"Transformer",desc:"Expands nominal text into binary indicator columns.",dataState:"[ 0.42, 0.85, 1, 0, 0 ] (Dense 1x5 Feature Vector)",details:"Converted into purely numeric dense array ready for model tensors."},{step:4,name:"5. LogisticRegression()",type:"Estimator / Classifier",desc:"Evaluates dot product w·x + b and computes sigmoid probability.",dataState:"P(Pass) = 87.4% ==> Predicted Class: 1 (Pass Exam)",details:"Final inference output returned to client!"}];function G(){const[a,h]=o.useState("interactive"),[u,T]=o.useState(0),[_,v]=o.useState(!1),[n,b]=o.useState(0),[c,N]=o.useState({}),[i,S]=o.useState(!1),d=[{name:"01_pipeline_basics.py",code:H},{name:"02_pipeline_with_column_transformer.py",code:F},{name:"03_pipeline_in_gridsearch_and_cv.py",code:V}],j=t=>{navigator.clipboard.writeText(t),v(!0),setTimeout(()=>v(!1),2e3)},A=(t,r)=>{i||N(l=>({...l,[t]:r}))},I=()=>{let t=0;return y.forEach(r=>{c[r.id]===r.correctAnswer&&t++}),t},p=s[n];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-cyan-500/20 rounded-xl text-cyan-400 border border-cyan-500/30",children:e.jsx(R,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20",children:"Topic 16 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.pipeline.Pipeline"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Scikit-learn Pipelines & End-to-End Orchestration"})]})]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:"Master the professional engineering workflow of Scikit-learn. Chain transformers and estimators into robust, leak-free pipelines ready for cross-validation, grid search, and production serving."})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>h("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="interactive"?"border-cyan-400 text-cyan-400 bg-cyan-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(O,{className:"w-4 h-4"}),"Pipeline Flow Studio"]}),e.jsxs("button",{onClick:()=>h("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="code"?"border-cyan-400 text-cyan-400 bg-cyan-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(L,{className:"w-4 h-4"}),"Python Code Lab (",d.length,")"]}),e.jsxs("button",{onClick:()=>h("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="notes"?"border-cyan-400 text-cyan-400 bg-cyan-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(k,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>h("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="quiz"?"border-cyan-400 text-cyan-400 bg-cyan-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(C,{className:"w-4 h-4"}),"Knowledge Check"]})]}),a==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2.5",children:s.map((t,r)=>e.jsxs("button",{onClick:()=>b(r),className:`p-3 rounded-xl border text-left transition-all ${n===r?"bg-cyan-500/15 border-cyan-500/60 shadow-lg shadow-cyan-950/50":"bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("div",{className:"text-[10px] font-mono text-cyan-400 uppercase font-bold mb-1",children:t.type}),e.jsx("div",{className:"text-xs font-semibold text-slate-200 truncate",children:t.name})]},t.step))}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-6 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-mono bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full font-semibold",children:["Step ",p.step+1," of ",s.length]}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:p.type})]}),e.jsx("h3",{className:"text-base font-bold text-white mb-2",children:p.name}),e.jsx("p",{className:"text-xs text-slate-400 mb-4 leading-relaxed",children:p.desc}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-2 font-mono text-xs",children:[e.jsx("div",{className:"text-slate-400 font-sans font-semibold",children:"Data Representation State:"}),e.jsx("div",{className:"text-cyan-300 font-bold break-all bg-slate-900/80 p-2.5 rounded border border-slate-800/80",children:p.dataState})]}),e.jsxs("div",{className:"mt-4 flex gap-2",children:[e.jsx("button",{onClick:()=>b(t=>Math.max(0,t-1)),disabled:n===0,className:"flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-lg text-xs font-semibold transition-all",children:"Previous Step"}),e.jsx("button",{onClick:()=>b(t=>Math.min(s.length-1,t+1)),disabled:n===s.length-1,className:"flex-1 py-2 px-3 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-all shadow-md shadow-cyan-600/20",children:"Next Step"})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 border border-slate-800 rounded-xl font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-sans font-semibold mb-2",children:"Equivalent Scikit-learn Code:"}),e.jsx("div",{className:"text-purple-300",children:"pipeline = Pipeline(["}),e.jsx("div",{className:"pl-4 text-slate-300",children:"('imputer', SimpleImputer(strategy='median')),"}),e.jsx("div",{className:"pl-4 text-slate-300",children:"('scaler', StandardScaler()),"}),e.jsx("div",{className:"pl-4 text-slate-300",children:"('encoder', OneHotEncoder()),"}),e.jsx("div",{className:"pl-4 text-emerald-400",children:"('clf', LogisticRegression())"}),e.jsx("div",{className:"text-purple-300",children:"])"}),e.jsx("div",{className:"text-cyan-300 pt-2",children:"pipeline.fit(X_train, y_train)"})]})]}),e.jsxs("div",{className:"lg:col-span-6 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(M,{className:"w-4 h-4 text-cyan-400"}),"Sequential Transformation Flow"]}),e.jsx("div",{className:"space-y-3",children:s.map((t,r)=>{const l=n===r,m=n>r;return e.jsxs("div",{onClick:()=>b(r),className:`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${l?"bg-cyan-500/20 border-cyan-500/60 shadow-md shadow-cyan-950/50 text-cyan-200":m?"bg-slate-950 border-emerald-500/30 text-slate-300":"bg-slate-950/40 border-slate-800/80 text-slate-500"}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold ${l?"bg-cyan-500 text-slate-950":m?"bg-emerald-500/20 text-emerald-400":"bg-slate-800 text-slate-500"}`,children:m?"✓":r+1}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold",children:t.name}),e.jsx("div",{className:"text-[10px] text-slate-400",children:t.details})]})]}),r<s.length-1&&e.jsx(B,{className:"w-3.5 h-3.5 text-slate-600 shrink-0"})]},t.step)})})]}),e.jsxs("div",{className:"p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{className:"text-white block mb-1",children:"Leakage Prevention Rule (Barrackpore Lab):"}),"When ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"cross_val_score(pipeline, X, y)"})," runs, it executes ",e.jsx("code",{className:"text-cyan-300 font-mono",children:".fit_transform()"})," only on the 4 training folds, guaranteeing that the validation fold remains completely untouched!"]})]})]})]}),a==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:d.map((t,r)=>e.jsx("button",{onClick:()=>T(r),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${u===r?"bg-cyan-600 text-white shadow-md shadow-cyan-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},r))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:d[u].name}),e.jsx("button",{onClick:()=>j(d[u].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors",children:_?e.jsxs(e.Fragment,{children:[e.jsx(g,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(P,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:d[u].code})]})]}),a==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(k,{className:"w-5 h-5 text-cyan-400"}),"Classroom Revision Notes: Scikit-learn Pipeline"]}),e.jsxs("button",{onClick:()=>j(E),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400",children:[_?e.jsx(g,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(P,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:E})]}),a==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(C,{className:"w-5 h-5 text-cyan-400"}),"Topic 16 Quiz: Scikit-learn Pipeline"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Evaluate your knowledge of Pipeline chaining, data leakage safeguards, and parameter routing."})]}),i&&e.jsxs("div",{className:"px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-cyan-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[I()," / ",y.length]})]})]}),e.jsx("div",{className:"space-y-6",children:y.map((t,r)=>{c[t.id];const l=c[t.id]===t.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono mt-0.5",children:["Q",r+1]}),e.jsx("span",{children:t.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:t.options.map((m,x)=>{const w=c[t.id]===x;let f="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return i?x===t.correctAnswer?f="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":w&&!l&&(f="bg-rose-500/20 border-rose-500/50 text-rose-200"):w&&(f="bg-cyan-500/20 border-cyan-500/50 text-cyan-200"),e.jsxs("button",{onClick:()=>A(t.id,x),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${f}`,children:[e.jsx("span",{children:m}),i&&x===t.correctAnswer&&e.jsx(g,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},x)})}),i&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-cyan-300 block mb-1",children:"Explanation:"}),t.explanation]})]},t.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:i?e.jsxs("button",{onClick:()=>{N({}),S(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(X,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>S(!0),disabled:Object.keys(c).length===0,className:"px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-cyan-600/20",children:"Submit Answers"})})]})})]})]})}export{G as default};
