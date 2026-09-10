import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{b2 as _,S as F,k as H,B as k,aa as A,H as O,f as T,g as X}from"./vendor-icons-DFC0rBCP.js";const z=`"""\r
01_fit_predict_score_workflow.py\r
Title: The Canonical 3-Step Scikit-Learn Estimator Workflow\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import numpy as np\r
from sklearn.linear_model import LinearRegression\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Lab 01: Canonical API Pattern (.fit -> .predict -> .score)")\r
    print("   Instructor: Sukanta Hui | Students: Debangshu, Susmita, Swadeep")\r
    print("=" * 65)\r
\r
    # 1. Feature matrix X must be 2D: (n_samples, n_features)\r
    #    Target vector y must be 1D: (n_samples,)\r
    X_train = np.array([[2], [4], [6], [8], [10], [12]]) # Study hours\r
    y_train = np.array([25, 42, 58, 72, 85, 96])          # ML Marks\r
\r
    # Step A: Instantiate Estimator with hyperparameters\r
    model = LinearRegression()\r
    print("Step 1: Instantiated LinearRegression()")\r
\r
    # Step B: Fit / Estimate model parameters on training set\r
    model.fit(X_train, y_train)\r
    print("Step 2: Model trained via model.fit(X_train, y_train)")\r
    print(f"   • Learned Slope (coef_)      : {model.coef_[0]:.2f}")\r
    print(f"   • Learned Intercept (intercept_): {model.intercept_:.2f}")\r
\r
    # Step C: Predict on new unseen 2D test observations\r
    X_test = np.array([[5], [9], [14]])\r
    y_pred = model.predict(X_test)\r
    print("\\nStep 3: Inferences generated via model.predict(X_test):")\r
    for hrs, pred in zip(X_test.flatten(), y_pred):\r
        print(f"   • {hrs} Study Hours -> Predicted ML Mark: {pred:.1f}/100")\r
\r
    # Step D: Score model (R² coefficient of determination)\r
    r2_score = model.score(X_train, y_train)\r
    print(f"\\nStep 4: Model Evaluation Score R²: {r2_score:.4f} (Near 1.0 is excellent fit)")\r
\r
if __name__ == "__main__":\r
    main()\r
`,B=`"""\r
02_fit_transform_difference.py\r
Title: Crucial Distinction: Estimators (.fit -> .predict) vs Transformers (.fit -> .transform)\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
import numpy as np\r
from sklearn.preprocessing import StandardScaler\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Lab 02: fit() vs transform() vs fit_transform()")\r
    print("   Instructor: Sukanta Hui | Students: Sachin, Tuhina, Abhronila")\r
    print("=" * 65)\r
\r
    X_train = np.array([[10, 200], [20, 400], [30, 600], [40, 800]])\r
    X_test = np.array([[15, 300], [25, 500]])\r
\r
    scaler = StandardScaler()\r
\r
    # 1. On Training data: fit_transform() learns μ, σ AND scales\r
    X_train_scaled = scaler.fit_transform(X_train)\r
    print("✓ Training Data Scaled with scaler.fit_transform(X_train):")\r
    print(f"  Learned Mean (mean_) : {scaler.mean_}")\r
    print(f"  Learned Std (scale_) : {scaler.scale_}")\r
\r
    # 2. On Test data: ONLY transform() using TRAINING μ and σ (Prevent Data Leakage!)\r
    X_test_scaled = scaler.transform(X_test)\r
    print("\\n✓ Test Data Scaled with scaler.transform(X_test) [NO RE-FITTING!]:")\r
    print(X_test_scaled.round(2))\r
\r
    print("\\n🚨 Golden Rule: NEVER call fit() or fit_transform() on your test dataset!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,W=`"""\r
03_predict_proba_and_decision_function.py\r
Title: Probability Confidence (.predict_proba) vs Hard Predictions (.predict)\r
Institution: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
"""\r
\r
from sklearn.linear_model import LogisticRegression\r
import numpy as np\r
\r
def main():\r
    print("=" * 65)\r
    print("🎓 Scikit-Learn Lab 03: Soft Probabilities vs Hard Class Labels")\r
    print("   Instructor: Sukanta Hui | Students: Mahima, Debangshu, Susmita")\r
    print("=" * 65)\r
\r
    # Synthetic binary classification data: Exam Pass (1) vs Fail (0)\r
    X = np.array([[3], [5], [7], [9], [11], [14]]) # Study hours\r
    y = np.array([0, 0, 0, 1, 1, 1])\r
\r
    clf = LogisticRegression()\r
    clf.fit(X, y)\r
\r
    X_new = np.array([[6], [8], [12]])\r
\r
    # 1. Hard class predictions: y in {0, 1}\r
    hard_preds = clf.predict(X_new)\r
\r
    # 2. Soft probability estimates: P(y=0), P(y=1)\r
    soft_probs = clf.predict_proba(X_new)\r
\r
    print("\\nInference Comparison on Unseen Hours:")\r
    for hours, label, (p0, p1) in zip(X_new.flatten(), hard_preds, soft_probs):\r
        status = "PASSED ✓" if label == 1 else "FAILED ✗"\r
        print(f" • {hours} hrs -> Hard Label: {status} | Probabilities: [Fail: {p0:.1%}, Pass: {p1:.1%}]")\r
\r
if __name__ == "__main__":\r
    main()\r
`,C=`================================================================================\r
SCIKIT-LEARN OVERVIEW: TOPIC 2 - THE SCIKIT-LEARN API PATTERN\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. THE CANONICAL 4-STAGE ESTIMATOR PATTERN:\r
--------------------------------------------------------------------------------\r
Stage 1: Instantiate Estimator\r
    model = RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42)\r
Stage 2: Fit Model (Supervised learning needs X & y; Unsupervised needs only X)\r
    model.fit(X_train, y_train)\r
Stage 3: Predict / Infer\r
    y_pred = model.predict(X_test)\r
Stage 4: Evaluate / Score\r
    accuracy = model.score(X_test, y_test)\r
\r
2. TRANSFORMER VS ESTIMATOR API MATRIX:\r
--------------------------------------------------------------------------------\r
Type        | Primary Methods         | Purpose\r
------------|-------------------------|-----------------------------------------\r
Estimator   | .fit(X, y)              | Learns internal model state / parameters\r
Transformer | .fit(X), .transform(X)  | Preprocesses features (Scaling, One-hot)\r
Predictor   | .predict(X), .score(X,y)| Outputs class labels or continuous values\r
\r
3. CRITICAL DATA SHAPE CONVENTION:\r
--------------------------------------------------------------------------------\r
- Feature Matrix X : MUST be a 2-Dimensional array of shape \`(n_samples, n_features)\`.\r
  If you have a single 1D feature array, you must reshape it using \`X.reshape(-1, 1)\`.\r
- Target Vector y  : 1-Dimensional array of shape \`(n_samples,)\`.\r
\r
4. PREVENTING DATA LEAKAGE:\r
--------------------------------------------------------------------------------\r
- On Training set : Use \`transformer.fit_transform(X_train)\`.\r
- On Test set     : Use ONLY \`transformer.transform(X_test)\`.\r
- NEVER call \`.fit()\` or \`.fit_transform()\` on the test dataset!\r
`,u=[{id:1,question:"What dimensionality shape is strictly required for the feature matrix `X` in Scikit-learn?",options:["1-Dimensional (n_samples,)","2-Dimensional (n_samples, n_features)","4-Dimensional (batch, height, width, channels)","A scalar single number"],correctAnswer:1,explanation:"Scikit-learn strictly requires feature matrices `X` to be 2D arrays of shape `(n_samples, n_features)`."},{id:2,question:"Why should you NEVER call `scaler.fit()` or `scaler.fit_transform()` on test data `X_test`?",options:["Because it causes Data Leakage by letting test set distributions bias the model parameters","Because Python will crash","Because test data contains string values only","Because fit() cannot run twice"],correctAnswer:0,explanation:"Re-fitting on test data causes Data Leakage. Test data must only be transformed using the parameters (mean/std) estimated from training data."},{id:3,question:"In Classification models, what is the difference between `.predict(X)` and `.predict_proba(X)`?",options:["`.predict(X)` returns discrete class labels (e.g. 0 or 1), while `.predict_proba(X)` returns class probability distributions (e.g. [0.2, 0.8])","`.predict_proba(X)` only works on text files","`.predict(X)` runs 10 times slower","There is no difference"],correctAnswer:0,explanation:"`.predict()` outputs the hard argmax class label, while `.predict_proba()` outputs the continuous soft probability distribution per class."},{id:4,question:"What metric does `model.score(X, y)` compute by default for a `LinearRegression` estimator?",options:["Classification Accuracy","R² (Coefficient of Determination)","Log Loss","F1 Score"],correctAnswer:1,explanation:"For regression models in Scikit-learn, `.score(X, y)` calculates the $R^2$ coefficient of determination (while for classifiers it returns accuracy)."}],V=[{x:2,y:25},{x:4,y:42},{x:6,y:58},{x:8,y:72},{x:10,y:85},{x:12,y:96}];function U(){const[o,I]=i.useState("interactive"),[b,L]=i.useState(0),[l,j]=i.useState(!1),[s,E]=i.useState(2),[a,R]=i.useState(9),[h,N]=i.useState({}),[c,S]=i.useState(!1),y=[{name:"01_fit_predict_score_workflow.py",code:z},{name:"02_fit_transform_difference.py",code:B},{name:"03_predict_proba_and_decision_function.py",code:W}],v=t=>{navigator.clipboard.writeText(t),j(!0),setTimeout(()=>j(!1),2e3)},P=(t,r)=>{c||N(n=>({...n,[t]:r}))},D=()=>{let t=0;return u.forEach(r=>{h[r.id]===r.correctAnswer&&t++}),t},g=7.1,d=12.5,m=Math.min(100,Math.max(0,g*a+d));return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border border-cyan-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module • Topic 2"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Scikit-Learn API Pattern: fit, predict, score"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Master the canonical 4-step Estimator lifecycle. Understand 2D feature matrix shapes, internal learned parameters, and data leakage prevention."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"API Lifecycle Stepper",icon:F},{id:"code",label:"Python Code Lab",icon:H},{id:"notes",label:"Revision Notes",icon:k},{id:"quiz",label:"Knowledge Check",icon:A}].map(t=>{const r=t.icon,n=o===t.id;return e.jsxs("button",{onClick:()=>I(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${n?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(r,{className:"w-4 h-4"}),t.label]},t.id)})})]}),o==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"The 4 Canonical API Stages"})]}),e.jsx("div",{className:"space-y-2",children:[{step:0,title:"1. Instantiate",desc:"model = LinearRegression()"},{step:1,title:"2. .fit(X, y)",desc:"Learns coef_ & intercept_ weights"},{step:2,title:"3. .predict(X_new)",desc:"Generates inferences on test data"},{step:3,title:"4. .score(X, y)",desc:"Evaluates R² / Accuracy metrics"}].map(t=>e.jsxs("div",{onClick:()=>E(t.step),className:`p-3 rounded-xl border cursor-pointer transition-all ${s===t.step?"bg-cyan-950/60 border-cyan-500 shadow":"bg-slate-950 border-slate-800 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-semibold text-xs text-white",children:t.title}),s>=t.step&&e.jsx(O,{className:"w-3.5 h-3.5 text-cyan-400"})]}),e.jsx("p",{className:"text-[11px] font-mono text-slate-400 mt-0.5",children:t.desc})]},t.step))}),s>=2&&e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-300",children:"Test Input (X_new Hours):"}),e.jsxs("span",{className:"font-mono text-cyan-400",children:[a,"h"]})]}),e.jsx("input",{type:"range",min:"1",max:"14",step:"1",value:a,onChange:t=>R(Number(t.target.value)),className:"w-full accent-cyan-500 cursor-pointer"}),e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded-lg text-xs font-mono flex items-center justify-between border border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Predicted Mark:"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:[m.toFixed(1)," / 100"]})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{className:"text-cyan-400 font-semibold mb-1",children:"# Live API Execution:"}),s>=0&&e.jsx("div",{className:"text-slate-400",children:"model = LinearRegression()"}),s>=1&&e.jsx("div",{className:"text-emerald-300",children:"model.fit(X_train, y_train)"}),s>=2&&e.jsxs("div",{className:"text-cyan-300",children:["y_pred = model.predict([[",a,"]]) # -> ",m.toFixed(1)]}),s>=3&&e.jsx("div",{className:"text-amber-300",children:"r2 = model.score(X_train, y_train) # -> 0.992"})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(_,{className:"w-4 h-4 text-cyan-400"}),"Live Regression Fitting Canvas"]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:[s===0&&"Step 1: Untrained Model",s===1&&"Step 2: model.fit() Fitted Line",s===2&&"Step 3: model.predict() Inference Point",s===3&&"Step 4: model.score() R² Evaluation"]})]}),e.jsx("div",{className:"my-4 p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-center items-center overflow-x-auto",children:e.jsxs("svg",{width:"490",height:"280",viewBox:"0 0 490 280",className:"max-w-full",children:[e.jsx("line",{x1:"50",y1:"50",x2:"450",y2:"50",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"110",x2:"450",y2:"110",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"170",x2:"450",y2:"170",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"50",y1:"230",x2:"450",y2:"230",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"30",x2:"50",y2:"230",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("text",{x:"40",y:"234",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"0"}),e.jsx("text",{x:"40",y:"174",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"35"}),e.jsx("text",{x:"40",y:"114",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"70"}),e.jsx("text",{x:"40",y:"54",fill:"#94a3b8",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:"100"}),[2,4,6,8,10,12,14].map(t=>{const r=50+t/14*400;return e.jsxs("g",{children:[e.jsx("line",{x1:r,y1:"230",x2:r,y2:"235",stroke:"#94a3b8"}),e.jsxs("text",{x:r,y:"250",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",fontFamily:"monospace",children:[t,"h"]})]},t)}),V.map((t,r)=>{const n=50+t.x/14*400,x=230-t.y/100*180;return e.jsx("circle",{cx:n,cy:x,r:"6",fill:"#38bdf8",stroke:"#ffffff",strokeWidth:"1.5",opacity:"0.9"},r)}),s>=1&&e.jsx("line",{x1:50,y1:230-d/100*180,x2:450,y2:230-(g*14+d)/100*180,stroke:"#10b981",strokeWidth:"3",strokeLinecap:"round"}),s>=2&&e.jsxs("g",{children:[e.jsx("line",{x1:50+a/14*400,y1:"230",x2:50+a/14*400,y2:230-m/100*180,stroke:"#f43f5e",strokeWidth:"1.5",strokeDasharray:"3 3"}),e.jsx("circle",{cx:50+a/14*400,cy:230-m/100*180,r:"8",fill:"#f43f5e",stroke:"#ffffff",strokeWidth:"2"})]}),e.jsx("text",{x:"250",y:"270",fill:"#e2e8f0",fontSize:"11",fontWeight:"600",textAnchor:"middle",children:"Study Hours (Feature X)"})]})}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400",children:[e.jsx("span",{className:"font-mono text-cyan-300",children:s>=1?`model.coef_ = [${g}] • model.intercept_ = ${d}`:"Model parameters uninitialized"}),e.jsx("span",{className:"font-mono text-emerald-400",children:s>=3?"R² Score: 0.992 (Excellent Fit)":"Standard 2D Array Shape"})]})]})]}),o==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:y.map((t,r)=>e.jsx("button",{onClick:()=>L(r),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${b===r?"bg-cyan-600 text-white shadow":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},t.name))}),e.jsxs("button",{onClick:()=>v(y[b].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[l?e.jsx(T,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(X,{className:"w-3.5 h-3.5"}),l?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-4 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed max-h-[480px]",children:y[b].code})})]}),o==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-semibold text-sm",children:[e.jsx(k,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 2 Summary & Theoretical Notes"})]}),e.jsxs("button",{onClick:()=>v(C),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono border border-slate-700 transition-all",children:[l?e.jsx(T,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(X,{className:"w-3.5 h-3.5"}),l?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto",children:C})]}),o==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-semibold text-sm",children:[e.jsx(A,{className:"w-4 h-4"}),e.jsx("span",{children:"Topic 2 Knowledge Assessment (4 Questions)"})]}),c&&e.jsxs("div",{className:"px-3.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold",children:["Score: ",D()," / ",u.length]})]}),e.jsx("div",{className:"space-y-6",children:u.map((t,r)=>{const n=h[t.id],x=n===t.correctAnswer;return e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"font-medium text-sm text-slate-200",children:[r+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.options.map((M,p)=>{const w=n===p;let f="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";return c?p===t.correctAnswer?f="bg-emerald-950/70 border-emerald-500 text-emerald-300":w&&(f="bg-rose-950/70 border-rose-500 text-rose-300"):w&&(f="bg-cyan-600/30 border-cyan-500 text-cyan-200"),e.jsx("button",{onClick:()=>P(t.id,p),className:`p-3 rounded-lg border text-left text-xs transition-all ${f}`,children:M},p)})}),c&&e.jsxs("div",{className:`p-3 rounded-lg text-xs leading-relaxed ${x?"bg-emerald-950/40 text-emerald-300 border border-emerald-900/50":"bg-rose-950/40 text-rose-300 border border-rose-900/50"}`,children:[e.jsx("span",{className:"font-semibold",children:x?"✓ Correct: ":"✗ Incorrect: "}),t.explanation]})]},t.id)})}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{N({}),S(!1)},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all",children:"Reset"}),e.jsx("button",{onClick:()=>S(!0),disabled:Object.keys(h).length<u.length,className:"px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-cyan-600/30 transition-all",children:"Submit Answers"})]})]})]})})}export{U as default};
