import{b as s,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{a4 as X,S as $,k as W,B as k,aa as A,aM as H,a7 as Y,a as q,f as g,g as E,ad as Q}from"./vendor-icons-DFC0rBCP.js";const V=`"""\r
Topic 17: Worked Example 1 (End-to-End Classification)\r
Script 1: Complete Classification Pipeline on Real-World Student Data\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.model_selection import train_test_split, cross_val_score\r
from sklearn.compose import ColumnTransformer\r
from sklearn.pipeline import Pipeline\r
from sklearn.impute import SimpleImputer\r
from sklearn.preprocessing import StandardScaler, OneHotEncoder\r
from sklearn.ensemble import RandomForestClassifier\r
from sklearn.metrics import classification_report, confusion_matrix\r
\r
# 1. Real-world dataset simulation: Barrackpore batch student performance\r
raw_data = {\r
    'attendance_pct': [85, 92, 45, 60, 78, 88, 52, 95, 70, 65, 82, 40],\r
    'quiz_avg': [78.5, 90.0, 42.0, 55.0, 72.0, 84.0, 48.0, 96.0, 68.0, 60.0, 80.0, 35.0],\r
    'lab_completed': ['Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No'],\r
    'prior_exp': ['Beginner', 'Advanced', 'Beginner', 'Beginner', 'Intermediate', 'Intermediate', 'Beginner', 'Advanced', 'Intermediate', 'Beginner', 'Advanced', 'Beginner'],\r
    'certified': [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0]\r
}\r
df = pd.DataFrame(raw_data)\r
X = df.drop(columns=['certified'])\r
y = df['certified']\r
\r
# 2. Stratified Train-Test Split (80/20)\r
X_train, X_test, y_train, y_test = train_test_split(\r
    X, y, test_size=0.25, random_state=42, stratify=y\r
)\r
\r
# 3. Build ColumnTransformer Preprocessing Pipeline\r
numeric_features = ['attendance_pct', 'quiz_avg']\r
categorical_features = ['lab_completed', 'prior_exp']\r
\r
preprocessor = ColumnTransformer(\r
    transformers=[\r
        ('num', Pipeline([\r
            ('imputer', SimpleImputer(strategy='median')),\r
            ('scaler', StandardScaler())\r
        ]), numeric_features),\r
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)\r
    ]\r
)\r
\r
# 4. Master Pipeline: Preprocessor + Random Forest Classifier\r
full_pipe = Pipeline([\r
    ('prep', preprocessor),\r
    ('clf', RandomForestClassifier(n_estimators=50, random_state=42))\r
])\r
\r
# 5. Cross-Validation on Training Split\r
cv_scores = cross_val_score(full_pipe, X_train, y_train, cv=3, scoring='accuracy')\r
print(f"3-Fold CV Accuracy: {cv_scores.mean()*100:.1f}% ± {cv_scores.std()*100:.1f}%")\r
\r
# 6. Fit on Train and Evaluate on Test\r
full_pipe.fit(X_train, y_train)\r
y_pred = full_pipe.predict(X_test)\r
\r
print("\\n--- Test Set Evaluation ---")\r
print("Confusion Matrix:\\n", confusion_matrix(y_test, y_pred))\r
print("\\nClassification Report:\\n", classification_report(y_test, y_pred, target_names=['Not Certified', 'Certified']))\r
`,J=`"""\r
Topic 17: Worked Example 1 (End-to-End Classification)\r
Script 2: Model Benchmark Comparison across 4 Classifiers\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import pandas as pd\r
from sklearn.model_selection import StratifiedKFold, cross_val_score\r
from sklearn.preprocessing import StandardScaler\r
from sklearn.pipeline import Pipeline\r
from sklearn.linear_model import LogisticRegression\r
from sklearn.neighbors import KNeighborsClassifier\r
from sklearn.tree import DecisionTreeClassifier\r
from sklearn.ensemble import RandomForestClassifier\r
from sklearn.datasets import load_breast_cancer\r
\r
# Load dataset\r
X, y = load_breast_cancer(return_X_y=True)\r
\r
# Define classifiers to benchmark\r
models = {\r
    'Logistic Regression': LogisticRegression(max_iter=300),\r
    'KNN (K=5)': KNeighborsClassifier(n_neighbors=5),\r
    'Decision Tree (depth=4)': DecisionTreeClassifier(max_depth=4, random_state=42),\r
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42)\r
}\r
\r
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\r
results = []\r
\r
for name, clf in models.items():\r
    pipe = Pipeline([\r
        ('scaler', StandardScaler()),\r
        ('model', clf)\r
    ])\r
    scores = cross_val_score(pipe, X, y, cv=cv, scoring='accuracy')\r
    results.append({\r
        'Model': name,\r
        'Mean Accuracy (%)': scores.mean() * 100,\r
        'Std Dev (%)': scores.std() * 100\r
    })\r
\r
df_comparison = pd.DataFrame(results).sort_values(by='Mean Accuracy (%)', ascending=False)\r
print("--- Classifier Benchmark Comparison ---")\r
print(df_comparison.to_string(index=False))\r
`,G=`"""\r
Topic 17: Worked Example 1 (End-to-End Classification)\r
Script 3: Production Inference Payload & Probability Calibration\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import pandas as pd\r
from sklearn.pipeline import Pipeline\r
from sklearn.compose import ColumnTransformer\r
from sklearn.preprocessing import StandardScaler, OneHotEncoder\r
from sklearn.linear_model import LogisticRegression\r
\r
# Synthetic training database\r
train_df = pd.DataFrame({\r
    'attendance_pct': [85, 92, 45, 60, 78],\r
    'quiz_avg': [78.5, 90.0, 42.0, 55.0, 72.0],\r
    'city': ['Barrackpore', 'Kolkata', 'Shyamnagar', 'Barrackpore', 'Kolkata'],\r
    'certified': [1, 1, 0, 0, 1]\r
})\r
\r
X_train = train_df[['attendance_pct', 'quiz_avg', 'city']]\r
y_train = train_df['certified']\r
\r
preprocessor = ColumnTransformer(\r
    transformers=[\r
        ('num', StandardScaler(), ['attendance_pct', 'quiz_avg']),\r
        ('cat', OneHotEncoder(handle_unknown='ignore'), ['city'])\r
    ]\r
)\r
\r
prod_pipeline = Pipeline([\r
    ('prep', preprocessor),\r
    ('model', LogisticRegression(random_state=42))\r
])\r
\r
prod_pipeline.fit(X_train, y_train)\r
\r
# Incoming live queries (raw JSON payloads from students in Barrackpore)\r
new_applicants = pd.DataFrame([\r
    {'attendance_pct': 88, 'quiz_avg': 84.0, 'city': 'Barrackpore'},\r
    {'attendance_pct': 50, 'quiz_avg': 40.0, 'city': 'Kolkata'},\r
    {'attendance_pct': 70, 'quiz_avg': 68.0, 'city': 'Naihati'} # Note: 'Naihati' is unseen category!\r
])\r
\r
predictions = prod_pipeline.predict(new_applicants)\r
probabilities = prod_pipeline.predict_proba(new_applicants)\r
\r
print("--- Production Inference Results ---")\r
for idx, (row, pred, prob) in enumerate(zip(new_applicants.to_dict(orient='records'), predictions, probabilities)):\r
    status = "Certified (PASS)" if pred == 1 else "Needs Improvement (FAIL)"\r
    print(f"Applicant #{idx+1}: {row}")\r
    print(f"--> Decision: {status} | Confidence: {prob[pred]*100:.1f}%\\n")\r
`,T=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 17 - WORKED EXAMPLE 1 (CLASSIFICATION)\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. THE STANDARD 7-STEP CLASSIFICATION WORKFLOW\r
--------------------------------------------------------------------------------\r
1. Data Understanding & Target Definition:\r
   - Identify continuous features ($X_{num}$) and categorical features ($X_{cat}$).\r
   - Set binary target $y \\in \\{0, 1\\}$.\r
2. Train-Test Split:\r
   - Always use \`stratify=y\` to preserve label ratios.\r
3. Preprocessing Architecture:\r
   - Build sub-pipelines using \`ColumnTransformer\`.\r
   - Numeric: \`SimpleImputer(strategy='median')\` -> \`StandardScaler()\`.\r
   - Categorical: \`SimpleImputer(strategy='most_frequent')\` -> \`OneHotEncoder(handle_unknown='ignore')\`.\r
4. Model Selection & Pipeline Assembly:\r
   - Combine preprocessor + classifier into \`Pipeline\`.\r
5. Cross-Validation & Baseline Benchmarking:\r
   - Evaluate model using \`cross_val_score(cv=5, scoring='f1')\`.\r
6. Final Model Fit & Test Evaluation:\r
   - Fit on full training set, predict on test set, inspect \`confusion_matrix\` and \`classification_report\`.\r
7. Production Deployment:\r
   - Wrap in \`joblib.dump(pipeline, 'model.pkl')\` for REST API inference.\r
\r
2. AVOIDING COMMON ERRORS IN WORKED EXAMPLES\r
--------------------------------------------------------------------------------\r
- Never preprocess $X$ before \`train_test_split()\`.\r
- Always set \`handle_unknown='ignore'\` in \`OneHotEncoder\` to avoid crashes on novel production inputs.\r
- Report metrics in context: For balanced problems, accuracy is fine; for imbalanced problems, report F1 and Confusion Matrix.\r
\r
3. CLASSROOM CHECKLIST (Sukanta Hui to Barrackpore Batch)\r
--------------------------------------------------------------------------------\r
"An end-to-end ML project is not just training a model with 3 lines of code. It is building an automated, leak-free pipeline from raw dirty data to reliable inference probabilities."\r
================================================================================\r
`,N=[{id:1,question:"In an end-to-end production pipeline with `ColumnTransformer`, what is the benefit of setting `handle_unknown='ignore'` in `OneHotEncoder`?",options:["It allows training on missing values without imputation","It prevents crashes when novel categorical values appear in real-world test inputs by encoding them as all-zero dummy vectors","It automatically converts text to lowercase","It eliminates the need for StandardScaler"],correctAnswer:1,explanation:"`handle_unknown='ignore'` ensures that if an unseen category (e.g. a new city 'Naihati') is submitted in production, the pipeline outputs zeros across all dummy columns rather than throwing an exception."},{id:2,question:"When evaluating multiple candidate classification algorithms (e.g., Logistic Regression vs Random Forest vs KNN), how should they be benchmarked?",options:["By training all of them on 100% of the dataset without splitting","By comparing cross-validated metrics (e.g. 5-Fold Stratified CV Mean & Std Dev) using identical preprocessed pipelines","By selecting whichever algorithm executes fastest in milliseconds","By testing on arbitrary unstratified random subsets"],correctAnswer:1,explanation:"Fair benchmarking requires wrapping each algorithm in the same preprocessing pipeline and evaluating them across identical stratified cross-validation folds to compare mean performance and stability (standard deviation)."},{id:3,question:"Why should `SimpleImputer` and `StandardScaler` be placed together in a numeric sub-pipeline inside `ColumnTransformer`?",options:["Because StandardScaler cannot process missing `NaN` values directly without prior imputation","Because ColumnTransformer only accepts exactly two transformers","Because SimpleImputer changes column names","Because StandardScaler requires integers"],correctAnswer:0,explanation:"StandardScaler calculates arithmetic mean and standard deviation. If missing `NaN` values are present, it will propagate `NaN`s or raise a ValueError. Imputation must precede scaling."},{id:4,question:"What is the recommended method to persist an end-to-end Scikit-learn Pipeline for web API deployment?",options:["Saving weights in a text file using JSON serialization","Exporting to a binary pickle/joblib file using `joblib.dump(pipeline, 'model.joblib')`","Writing SQL INSERT statements for all coefficients","Copy-pasting array coefficients into JavaScript constants"],correctAnswer:1,explanation:"`joblib.dump()` serializes the entire pipeline structure—including all transformers, imputer statistics, encoder vocabularies, and model coefficients—into a single reloadable binary file."}],U=[{name:"Random Forest Classifier",acc:"94.2%",std:"±2.1%",f1:"0.93",icon:"🌲"},{name:"Logistic Regression",acc:"91.5%",std:"±3.0%",f1:"0.90",icon:"📈"},{name:"K-Nearest Neighbors (K=5)",acc:"88.0%",std:"±4.2%",f1:"0.87",icon:"👥"},{name:"Decision Tree (max_depth=3)",acc:"86.5%",std:"±3.8%",f1:"0.85",icon:"🌿"}];function te(){const[a,d]=s.useState("interactive"),[c,I]=s.useState(0),[v,j]=s.useState(!1),[p,R]=s.useState(82),[x,P]=s.useState(74),[_,F]=s.useState("Yes"),[u,B]=s.useState("Intermediate"),[i,y]=s.useState({}),[n,S]=s.useState(!1),o=[{name:"01_end_to_end_classification.py",code:V},{name:"02_model_comparison_pipeline.py",code:J},{name:"03_production_inference_pipeline.py",code:G}],w=r=>{navigator.clipboard.writeText(r),j(!0),setTimeout(()=>j(!1),2e3)},O=(r,t)=>{n||y(h=>({...h,[r]:t}))},L=()=>{let r=0;return N.forEach(t=>{i[t.id]===t.correctAnswer&&r++}),r},M=_==="Yes"?25:-20,z=u==="Advanced"?15:u==="Intermediate"?8:0,D=(p*.45+x*.45+M+z-65)/12,f=1/(1+Math.exp(-D)),b=f>=.5;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400 border border-emerald-500/30",children:e.jsx(X,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",children:"Topic 17 • Worked Example 1"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"End-to-End Classification"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Case Study: Student Certification Predictor"})]})]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:"Walk through a production-grade classification workflow at Coder & AccoTax (Barrackpore). From data ingestion and stratified splitting to ColumnTransformer preprocessing, ensemble modeling, and live inference serving."})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>d("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="interactive"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx($,{className:"w-4 h-4"}),"Live Case Study Simulator"]}),e.jsxs("button",{onClick:()=>d("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="code"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(W,{className:"w-4 h-4"}),"Python Code Lab (",o.length,")"]}),e.jsxs("button",{onClick:()=>d("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="notes"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(k,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>d("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="quiz"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(A,{className:"w-4 h-4"}),"Knowledge Check"]})]}),a==="interactive"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(H,{className:"w-4 h-4 text-emerald-400"}),"Applicant Raw Features (X_new)"]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Attendance Rate (%):"}),e.jsxs("span",{className:"font-mono text-emerald-300 font-bold",children:[p,"%"]})]}),e.jsx("input",{type:"range",min:"30",max:"100",value:p,onChange:r=>R(Number(r.target.value)),className:"w-full accent-emerald-400 cursor-pointer"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Quiz Average Score:"}),e.jsxs("span",{className:"font-mono text-emerald-300 font-bold",children:[x," pts"]})]}),e.jsx("input",{type:"range",min:"20",max:"100",value:x,onChange:r=>P(Number(r.target.value)),className:"w-full accent-emerald-400 cursor-pointer"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-xs text-slate-300 mb-1.5",children:"Lab Practical Submissions:"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["Yes","No"].map(r=>e.jsx("button",{onClick:()=>F(r),className:`py-2 rounded-lg text-xs font-semibold transition-all border ${_===r?"bg-emerald-500/20 border-emerald-500/60 text-emerald-300":"bg-slate-950 border-slate-800 text-slate-400"}`,children:r==="Yes"?"Completed (Yes)":"Incomplete (No)"},r))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-slate-300 mb-1.5",children:"Prior Experience Level:"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:["Beginner","Intermediate","Advanced"].map(r=>e.jsx("button",{onClick:()=>B(r),className:`py-2 rounded-lg text-xs font-semibold transition-all border ${u===r?"bg-emerald-500/20 border-emerald-500/60 text-emerald-300":"bg-slate-950 border-slate-800 text-slate-400"}`,children:r},r))})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Certification Decision:"}),e.jsx("span",{className:`text-xs px-3 py-1 rounded-full font-bold font-mono ${b?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-rose-500/20 text-rose-300 border border-rose-500/40"}`,children:b?"PASS: CERTIFIED":"REVIEW: NEEDS RETAKE"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 font-mono",children:[e.jsx("span",{children:"Model Confidence:"}),e.jsxs("span",{className:"font-bold text-emerald-400",children:[(f*100).toFixed(1),"%"]})]}),e.jsx("div",{className:"w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800",children:e.jsx("div",{style:{width:`${f*100}%`},className:`h-full transition-all duration-300 ${b?"bg-emerald-500":"bg-rose-500"}`})})]})]})]}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(Y,{className:"w-4 h-4 text-emerald-400"}),"5-Fold Stratified Cross-Validation Leaderboard"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-400 font-mono border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2.5",children:"Candidate Model"}),e.jsx("th",{className:"p-2.5 text-emerald-400",children:"Mean Accuracy"}),e.jsx("th",{className:"p-2.5 text-slate-400",children:"Stability (σ)"}),e.jsx("th",{className:"p-2.5 text-sky-400",children:"F1-Score"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 font-mono",children:U.map((r,t)=>e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsxs("td",{className:"p-2.5 font-sans font-medium text-slate-200 flex items-center gap-2",children:[e.jsx("span",{children:r.icon}),e.jsx("span",{children:r.name})]}),e.jsx("td",{className:"p-2.5 text-emerald-300 font-bold bg-emerald-500/5",children:r.acc}),e.jsx("td",{className:"p-2.5 text-slate-400",children:r.std}),e.jsx("td",{className:"p-2.5 text-sky-300 font-semibold",children:r.f1})]},t))})]})})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-300 font-sans font-semibold flex items-center gap-2",children:[e.jsx(q,{className:"w-4 h-4 text-emerald-400"}),"Production Pipeline Architecture"]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2 text-slate-300",children:[e.jsx("div",{className:"text-emerald-400 font-bold",children:"1. ColumnTransformer:"}),e.jsx("div",{className:"pl-4 text-slate-400",children:"• Numeric ['attendance_pct', 'quiz_avg'] → SimpleImputer(median) → StandardScaler()"}),e.jsx("div",{className:"pl-4 text-slate-400",children:"• Categorical ['lab_completed', 'prior_exp'] → OneHotEncoder(handle_unknown='ignore')"}),e.jsx("div",{className:"text-emerald-400 font-bold pt-1",children:"2. Master Pipeline:"}),e.jsx("div",{className:"pl-4 text-slate-400",children:"• Pipeline([('prep', preprocessor), ('clf', RandomForestClassifier())])"})]})]})]})]})}),a==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:o.map((r,t)=>e.jsx("button",{onClick:()=>I(t),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${c===t?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:r.name},t))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:o[c].name}),e.jsx("button",{onClick:()=>w(o[c].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors",children:v?e.jsxs(e.Fragment,{children:[e.jsx(g,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:o[c].code})]})]}),a==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(k,{className:"w-5 h-5 text-emerald-400"}),"Classroom Revision Notes: Worked Example 1 (Classification)"]}),e.jsxs("button",{onClick:()=>w(T),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400",children:[v?e.jsx(g,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(E,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:T})]}),a==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(A,{className:"w-5 h-5 text-emerald-400"}),"Topic 17 Quiz: End-to-End Classification"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Assess your mastery of end-to-end ML workflows, column transformers, and deployment practices."})]}),n&&e.jsxs("div",{className:"px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-emerald-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[L()," / ",N.length]})]})]}),e.jsx("div",{className:"space-y-6",children:N.map((r,t)=>{i[r.id];const h=i[r.id]===r.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono mt-0.5",children:["Q",t+1]}),e.jsx("span",{children:r.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:r.options.map((K,l)=>{const C=i[r.id]===l;let m="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return n?l===r.correctAnswer?m="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":C&&!h&&(m="bg-rose-500/20 border-rose-500/50 text-rose-200"):C&&(m="bg-emerald-500/20 border-emerald-500/50 text-emerald-200"),e.jsxs("button",{onClick:()=>O(r.id,l),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${m}`,children:[e.jsx("span",{children:K}),n&&l===r.correctAnswer&&e.jsx(g,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},l)})}),n&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-emerald-300 block mb-1",children:"Explanation:"}),r.explanation]})]},r.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:n?e.jsxs("button",{onClick:()=>{y({}),S(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(Q,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>S(!0),disabled:Object.keys(i).length===0,className:"px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-emerald-600/20",children:"Submit Answers"})})]})})]})]})}export{te as default};
