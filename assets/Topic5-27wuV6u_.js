import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{az as Q,S as te,k as se,B as Z,aa as U,ci as re,cl as ne,aM as le,R as de,f as D,g as K,ad as ie}from"./vendor-icons-DFC0rBCP.js";const oe=`"""\r
Topic 5: StandardScaler and MinMaxScaler\r
Script 1: Deep Dive into StandardScaler (Z-score Normalization)\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.preprocessing import StandardScaler\r
\r
# Data representing student study hours and scores\r
X_train = np.array([\r
    [10.0, 45.0],\r
    [25.0, 75.0],\r
    [15.0, 55.0],\r
    [30.0, 85.0],\r
    [20.0, 65.0]\r
])\r
\r
feature_names = ['study_hours', 'score']\r
print("--- Training Data (Raw) ---")\r
print(pd.DataFrame(X_train, columns=feature_names))\r
\r
# Initialize StandardScaler\r
scaler = StandardScaler()\r
\r
# Fit and transform training set\r
X_train_scaled = scaler.fit_transform(X_train)\r
\r
print("\\n--- Learned Parameters of StandardScaler ---")\r
print("Mean (mean_):", scaler.mean_)\r
print("Variance (var_):", scaler.var_)\r
print("Standard Deviation (scale_):", scaler.scale_)\r
print("Number of samples seen (n_samples_seen_):", scaler.n_samples_seen_)\r
\r
print("\\n--- Transformed Training Data (Z-Scores) ---")\r
print(pd.DataFrame(X_train_scaled, columns=feature_names).round(4))\r
print("Transformed Mean (should be ~0):", np.round(X_train_scaled.mean(axis=0), 6))\r
print("Transformed Std Dev (should be ~1):", np.round(X_train_scaled.std(axis=0), 6))\r
\r
# Transform unseen test samples using ALREADY LEARNED parameters\r
X_test = np.array([[12.0, 50.0]])\r
X_test_scaled = scaler.transform(X_test)\r
print("\\n--- Unseen Test Data Scaling ---")\r
print("Raw test point:", X_test)\r
print("Scaled test point:", np.round(X_test_scaled, 4))\r
`,ce=`"""\r
Topic 5: StandardScaler and MinMaxScaler\r
Script 2: Deep Dive into MinMaxScaler (Bound Range Scaling)\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.preprocessing import MinMaxScaler\r
\r
# Student metrics\r
X_train = np.array([\r
    [10.0, 45.0],\r
    [25.0, 75.0],\r
    [15.0, 55.0],\r
    [30.0, 85.0],\r
    [20.0, 65.0]\r
])\r
\r
feature_names = ['study_hours', 'score']\r
\r
# 1. Scaling to default [0, 1] range\r
minmax_01 = MinMaxScaler(feature_range=(0, 1))\r
X_scaled_01 = minmax_01.fit_transform(X_train)\r
\r
print("--- MinMaxScaler (feature_range=(0, 1)) ---")\r
print(pd.DataFrame(X_scaled_01, columns=feature_names))\r
print("Learned Minimums (data_min_):", minmax_01.data_min_)\r
print("Learned Maximums (data_max_):", minmax_01.data_max_)\r
print("Learned Data Range (data_range_):", minmax_01.data_range_)\r
\r
# 2. Scaling to custom range [-1, 1] (common for neural networks / tanh activations)\r
minmax_custom = MinMaxScaler(feature_range=(-1, 1))\r
X_scaled_custom = minmax_custom.fit_transform(X_train)\r
\r
print("\\n--- MinMaxScaler (feature_range=(-1, 1)) ---")\r
print(pd.DataFrame(X_scaled_custom, columns=feature_names))\r
\r
# Behavior with out-of-bounds test points\r
X_out_of_bounds = np.array([[35.0, 95.0], [5.0, 30.0]])\r
X_out_scaled = minmax_01.transform(X_out_of_bounds)\r
print("\\n--- Test points outside training bounds [0, 1] ---")\r
print("Raw out-of-bound samples:\\n", X_out_of_bounds)\r
print("Scaled out-of-bound (can exceed 1 or go below 0):\\n", X_out_scaled)\r
`,me=`"""\r
Topic 5: StandardScaler and MinMaxScaler\r
Script 3: Inverting Scaled Predictions & Side-by-Side Comparison\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.preprocessing import StandardScaler, MinMaxScaler\r
\r
# Original target prices / scores\r
y_raw = np.array([[50000], [120000], [75000], [250000], [90000]])\r
\r
# Fit StandardScaler on target variable\r
y_scaler = StandardScaler()\r
y_scaled = y_scaler.fit_transform(y_raw)\r
\r
print("Original Target:\\n", y_raw.flatten())\r
print("Standard Scaled Target:\\n", np.round(y_scaled.flatten(), 4))\r
\r
# Suppose an ML model predicts scaled values:\r
model_predictions_scaled = np.array([[0.5], [-0.8], [1.2]])\r
\r
# Invert back to real rupee prices\r
real_world_predictions = y_scaler.inverse_transform(model_predictions_scaled)\r
\r
print("\\n--- Inverted Predictions back to Real Domain ---")\r
for scaled, real in zip(model_predictions_scaled.flatten(), real_world_predictions.flatten()):\r
    print(f"Model Scaled Output: {scaled:+.2f}  ==>  Real Price: ₹{real:,.2f}")\r
\r
# Side-by-side comparison under an extreme outlier\r
data_with_outlier = np.array([[10], [12], [14], [11], [100]])\r
std_out = StandardScaler().fit_transform(data_with_outlier)\r
minmax_out = MinMaxScaler().fit_transform(data_with_outlier)\r
\r
print("\\n--- Impact of Outlier (100 in [10, 12, 14, 11, 100]) ---")\r
print(f"StandardScaler output: {np.round(std_out.flatten(), 2)}")\r
print(f"MinMaxScaler output:   {np.round(minmax_out.flatten(), 2)}")\r
`,G=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 5 - STANDARDSCALER VS MINMAXSCALER\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. MATHEMATICAL COMPARISON\r
--------------------------------------------------------------------------------\r
A. StandardScaler (Standardization / Z-score Normalization):\r
   Formula:\r
     z = (x - μ) / σ\r
   Where:\r
     - μ = mean of feature = (1/N) * Σ x_i\r
     - σ = standard deviation = sqrt((1/N) * Σ (x_i - μ)^2)\r
   Result:\r
     - Output centered at Mean = 0.\r
     - Output scaled to Standard Deviation = 1.\r
     - Output is NOT bounded to [0, 1]; unbounded in theory (-∞ to +∞).\r
\r
B. MinMaxScaler (Min-Max Normalization / Rescaling):\r
   Formula:\r
     x_scaled = (x - min) / (max - min) * (max_bound - min_bound) + min_bound\r
   Default (feature_range=(0, 1)):\r
     x_scaled = (x - min) / (max - min)\r
   Result:\r
     - Compresses all training data strictly between [0, 1] (or custom min/max).\r
     - Does NOT force mean to 0 or std dev to 1.\r
\r
2. LEARNED ATTRIBUTES COMPARISON\r
--------------------------------------------------------------------------------\r
StandardScaler:\r
- \`mean_\`: Array of shape (n_features,) representing feature means.\r
- \`var_\`: Array of shape (n_features,) representing feature variances.\r
- \`scale_\`: Array of shape (n_features,) representing standard deviations.\r
- \`n_samples_seen_\`: Total number of samples processed during fitting.\r
\r
MinMaxScaler:\r
- \`data_min_\`: Minimum value observed per column in training data.\r
- \`data_max_\`: Maximum value observed per column in training data.\r
- \`data_range_\`: (data_max_ - data_min_) per column.\r
- \`scale_\`: Scale factor (max_bound - min_bound) / data_range_.\r
- \`min_\`: Per-feature adjustment for minimum bound.\r
\r
3. WHEN TO USE WHICH? DECISION MATRIX\r
--------------------------------------------------------------------------------\r
| Scenario / Requirement | Recommended Scaler | Reason |\r
|---|---|---|\r
| Gradient Descent (Linear/Logistic Regression, Neural Nets) | StandardScaler | Unbiased gradient steps; zero-centered inputs speed up convergence. |\r
| Distance-based (KNN, K-Means, SVM with RBF kernel) | StandardScaler / MinMaxScaler | Prevents features with huge units from dominating distance metrics. |\r
| Image Processing / Pixel intensities (0 - 255) | MinMaxScaler(0, 1) | Preserves zero pixels and maps bounded brightness to [0, 1]. |\r
| Neural Network with Tanh Activation | MinMaxScaler(-1, 1) | Matches tanh activation range [-1, 1]. |\r
| Severe Outliers present | RobustScaler (preferred) | Neither StandardScaler nor MinMaxScaler is robust to outliers. |\r
\r
4. INVERSE TRANSFORMATION (\`inverse_transform()\`)\r
--------------------------------------------------------------------------------\r
When you scale the target variable \`y\` before training a regression model:\r
- The model outputs predictions in the scaled space (e.g., \`y_pred_scaled = 0.45\`).\r
- To present real rupee/dollar amounts or exam marks to end users, call:\r
  \`real_predictions = scaler.inverse_transform(y_pred_scaled)\`\r
\r
5. CLASSROOM PRACTICAL RULES (Barrackpore Lab)\r
--------------------------------------------------------------------------------\r
- Never call \`.fit()\` on test data!\r
  * CORRECT:\r
    \`scaler.fit(X_train)\`\r
    \`X_train_scaled = scaler.transform(X_train)\`\r
    \`X_test_scaled = scaler.transform(X_test)\`\r
  * INCORRECT (Data Leakage):\r
    \`X_test_scaled = scaler.fit_transform(X_test)\`  <-- FORBIDDEN!\r
================================================================================\r
`,X=[{id:1,question:"What are the sample mean and standard deviation of a dataset transformed by `StandardScaler` (assuming population ddof=0 calculation)?",options:["Mean = 0, Standard Deviation = 1","Mean = 1, Standard Deviation = 0","Mean = 0.5, Standard Deviation = 0.5","Mean = Min value, Standard Deviation = Max value"],correctAnswer:0,explanation:"StandardScaler subtracts the sample mean and divides by standard deviation, guaranteeing that the transformed dataset has a mean of 0 and a standard deviation of 1."},{id:2,question:"What happens if an unseen test sample has a feature value greater than `data_max_` when transformed using an already fitted `MinMaxScaler(feature_range=(0, 1))` without clipping?",options:["MinMaxScaler raises an OutOfBoundsError exception","The transformed value will be strictly clamped to 1.0","The transformed value will exceed 1.0 proportionally according to the formula","The scaler automatically re-fits itself to include the new maximum"],correctAnswer:2,explanation:"By default, MinMaxScaler applies the linear formula `(x - min) / (max - min)`. If `x > max`, the resulting transformed value will be strictly greater than 1.0 (unless `clip=True` is enabled in modern scikit-learn versions)."},{id:3,question:"Which learned attribute of `StandardScaler` holds the standard deviation of each feature?",options:["scaler.std_","scaler.scale_","scaler.deviation_","scaler.sigma_"],correctAnswer:1,explanation:"In Scikit-learn's StandardScaler, the per-feature standard deviation (scaling factor) is stored in the `scale_` attribute, while the variance is in `var_` and the mean is in `mean_`."},{id:4,question:"If a regression model was trained on scaled target labels `y_scaled = scaler.fit_transform(y)`, how should the model's test predictions `y_pred` be converted back to real-world units?",options:["scaler.fit_transform(y_pred)","scaler.inverse_transform(y_pred)","scaler.transform(y_pred)","scaler.denormalize(y_pred)"],correctAnswer:1,explanation:"Calling `scaler.inverse_transform(y_pred)` inverts the mathematical transformation (multiplying by `scale_` and adding `mean_`), restoring values to their original physical units."}],I=[{id:1,name:"Debangshu",x:10,y:45},{id:2,name:"Susmita",x:25,y:75},{id:3,name:"Swadeep",x:15,y:55},{id:4,name:"Tuhina",x:30,y:85},{id:5,name:"Sachin",x:20,y:65}];function ue(){const[o,S]=i.useState("interactive"),[v,Y]=i.useState(0),[O,F]=i.useState(!1),[l,E]=i.useState("standard"),[s,z]=i.useState(0),[r,$]=i.useState(1),[y,q]=i.useState(22),[w,J]=i.useState(70),[h,L]=i.useState({}),[m,B]=i.useState(!1),b=[{name:"01_standard_scaler_deepdive.py",code:oe},{name:"02_minmax_scaler_deepdive.py",code:ce},{name:"03_inverse_transform_and_comparison.py",code:me}],P=a=>{navigator.clipboard.writeText(a),F(!0),setTimeout(()=>F(!1),2e3)},ee=(a,t)=>{m||L(n=>({...n,[a]:t}))},ae=()=>{let a=0;return X.forEach(t=>{h[t.id]===t.correctAnswer&&a++}),a},x=I.map(a=>a.x),p=I.map(a=>a.y),f=x.reduce((a,t)=>a+t,0)/x.length,M=p.reduce((a,t)=>a+t,0)/p.length,u=Math.sqrt(x.map(a=>Math.pow(a-f,2)).reduce((a,t)=>a+t,0)/x.length),g=Math.sqrt(p.map(a=>Math.pow(a-M,2)).reduce((a,t)=>a+t,0)/p.length),c=Math.min(...x),C=Math.max(...x),_=Math.min(...p),k=Math.max(...p),H=(a,t)=>{if(l==="standard"){const n=(a-f)/(u||1),j=(t-M)/(g||1);return{sx:n,sy:j}}else{const n=(a-c)/(C-c||1)*(r-s)+s,j=(t-_)/(k-_||1)*(r-s)+s;return{sx:n,sy:j}}},W=I.map(a=>{const{sx:t,sy:n}=H(a.x,a.y);return{...a,sx:t,sy:n}}),d=H(y,w);let R=0,A=0;return l==="standard"?(R=d.sx*u+f,A=d.sy*g+M):(R=(d.sx-s)/(r-s||1)*(C-c)+c,A=(d.sy-s)/(r-s||1)*(k-_)+_),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400 border border-emerald-500/30",children:e.jsx(Q,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",children:"Topic 5 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"StandardScaler & MinMaxScaler"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"StandardScaler vs. MinMaxScaler Deep Dive"})]})]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:["Master the mathematical mechanics of Z-score standardization and Min-Max bound scaling. Examine learned parameters (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"mean_"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"scale_"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"data_min_"}),"), test data projection, and exact inverse transformations."]})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>S("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${o==="interactive"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(te,{className:"w-4 h-4"}),"Scaler Transformation Studio"]}),e.jsxs("button",{onClick:()=>S("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${o==="code"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(se,{className:"w-4 h-4"}),"Python Code Lab (",b.length,")"]}),e.jsxs("button",{onClick:()=>S("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${o==="notes"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(Z,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>S("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${o==="quiz"?"border-emerald-400 text-emerald-400 bg-emerald-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(U,{className:"w-4 h-4"}),"Knowledge Check"]})]}),o==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("button",{onClick:()=>E("standard"),className:`p-4 rounded-xl border text-left transition-all flex items-start justify-between ${l==="standard"?"bg-emerald-500/15 border-emerald-500/60 shadow-lg shadow-emerald-950/50":"bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 text-slate-400 hover:border-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-semibold text-slate-200 font-mono text-sm",children:"StandardScaler"}),e.jsx("span",{className:"text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono",children:"μ=0, σ=1"})]}),e.jsxs("div",{className:"text-xs text-slate-400 mt-1",children:["Z-score standardization: ",e.jsx("code",{className:"text-emerald-300",children:"z = (x - mean) / std"}),". Ideal for Gradient Descent & Gaussian assumptions."]})]}),e.jsx(re,{className:"w-5 h-5 text-emerald-400 shrink-0"})]}),e.jsxs("button",{onClick:()=>E("minmax"),className:`p-4 rounded-xl border text-left transition-all flex items-start justify-between ${l==="minmax"?"bg-emerald-500/15 border-emerald-500/60 shadow-lg shadow-emerald-950/50":"bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 text-slate-400 hover:border-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-semibold text-slate-200 font-mono text-sm",children:"MinMaxScaler"}),e.jsxs("span",{className:"text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono",children:["[",s,", ",r,"]"]})]}),e.jsxs("div",{className:"text-xs text-slate-400 mt-1",children:["Linear range bound: ",e.jsx("code",{className:"text-emerald-300",children:"(x - min) / (max - min)"}),". Ideal for image pixel scales & KNN distances."]})]}),e.jsx(ne,{className:"w-5 h-5 text-emerald-400 shrink-0"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(le,{className:"w-4 h-4 text-emerald-400"}),"Learned Parameters (Fitted on 5 Students)"]}),l==="standard"?e.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsxs("div",{className:"text-slate-400 mb-1 flex justify-between",children:[e.jsx("span",{className:"text-emerald-300 font-bold",children:"scaler.mean_"}),e.jsx("span",{className:"text-[11px] text-slate-500",children:"Feature Means"})]}),e.jsxs("div",{className:"text-slate-200",children:["Hours: ",e.jsx("strong",{className:"text-emerald-400",children:f.toFixed(2)})," | Score:"," ",e.jsx("strong",{className:"text-emerald-400",children:M.toFixed(2)})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsxs("div",{className:"text-slate-400 mb-1 flex justify-between",children:[e.jsx("span",{className:"text-emerald-300 font-bold",children:"scaler.scale_"}),e.jsx("span",{className:"text-[11px] text-slate-500",children:"Standard Deviations (σ)"})]}),e.jsxs("div",{className:"text-slate-200",children:["Hours: ",e.jsx("strong",{className:"text-emerald-400",children:u.toFixed(2)})," | Score:"," ",e.jsx("strong",{className:"text-emerald-400",children:g.toFixed(2)})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsxs("div",{className:"text-slate-400 mb-1 flex justify-between",children:[e.jsx("span",{className:"text-emerald-300 font-bold",children:"scaler.var_"}),e.jsx("span",{className:"text-[11px] text-slate-500",children:"Feature Variances (σ²)"})]}),e.jsxs("div",{className:"text-slate-200",children:["Hours: ",e.jsx("strong",{className:"text-emerald-400",children:(u*u).toFixed(2)})," | Score:"," ",e.jsx("strong",{className:"text-emerald-400",children:(g*g).toFixed(2)})]})]})]}):e.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsxs("div",{className:"text-slate-400 mb-1 flex justify-between",children:[e.jsx("span",{className:"text-emerald-300 font-bold",children:"scaler.data_min_"}),e.jsx("span",{className:"text-[11px] text-slate-500",children:"Column Minimums"})]}),e.jsxs("div",{className:"text-slate-200",children:["Hours: ",e.jsx("strong",{className:"text-emerald-400",children:c})," | Score:"," ",e.jsx("strong",{className:"text-emerald-400",children:_})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsxs("div",{className:"text-slate-400 mb-1 flex justify-between",children:[e.jsx("span",{className:"text-emerald-300 font-bold",children:"scaler.data_max_"}),e.jsx("span",{className:"text-[11px] text-slate-500",children:"Column Maximums"})]}),e.jsxs("div",{className:"text-slate-200",children:["Hours: ",e.jsx("strong",{className:"text-emerald-400",children:C})," | Score:"," ",e.jsx("strong",{className:"text-emerald-400",children:k})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-slate-300 font-semibold text-xs font-sans",children:["Custom feature_range: [",s,", ",r,"]"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>{z(0),$(1)},className:`px-2.5 py-1 rounded text-xs ${s===0&&r===1?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400"}`,children:"[0, 1] Default"}),e.jsx("button",{onClick:()=>{z(-1),$(1)},className:`px-2.5 py-1 rounded text-xs ${s===-1&&r===1?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400"}`,children:"[-1, 1] Tanh Range"})]})]})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-3",children:[e.jsx(de,{className:"w-4 h-4 text-emerald-400"}),"Unseen Test Sample & Inverse Transform"]}),e.jsxs("div",{className:"space-y-3 mb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"New Sample Study Hours:"}),e.jsxs("span",{className:"font-mono text-emerald-300",children:[y," hrs"]})]}),e.jsx("input",{type:"range",min:"5",max:"40",value:y,onChange:a=>q(Number(a.target.value)),className:"w-full accent-emerald-400 cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"New Sample Score:"}),e.jsxs("span",{className:"font-mono text-emerald-300",children:[w," pts"]})]}),e.jsx("input",{type:"range",min:"30",max:"100",value:w,onChange:a=>J(Number(a.target.value)),className:"w-full accent-emerald-400 cursor-pointer"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs space-y-1.5",children:[e.jsx("div",{className:"text-slate-400",children:"1. transform(X_test):"}),e.jsxs("div",{className:"text-emerald-300 font-bold",children:["scaled = [",d.sx.toFixed(3),", ",d.sy.toFixed(3),"]"]}),e.jsx("div",{className:"text-slate-400 pt-1 border-t border-slate-900",children:"2. inverse_transform(scaled):"}),e.jsxs("div",{className:"text-slate-200",children:["recovered = [",R.toFixed(1),", ",A.toFixed(1),"] (Matches Original Input!)"]})]})]})]}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5 overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(Q,{className:"w-4 h-4 text-emerald-400"}),"Training Set Transformation Table"]}),e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:["Active: ",l==="standard"?"StandardScaler":"MinMaxScaler"]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-400 font-mono border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2.5",children:"Student"}),e.jsx("th",{className:"p-2.5",children:"Raw (Hrs, Score)"}),e.jsx("th",{className:"p-2.5 text-emerald-400",children:"Scaled Hours"}),e.jsx("th",{className:"p-2.5 text-emerald-400",children:"Scaled Score"}),e.jsx("th",{className:"p-2.5 text-slate-400",children:"Calculated Z / Ratio"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 font-mono",children:W.map(a=>e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-2.5 font-sans font-medium text-slate-200",children:a.name}),e.jsxs("td",{className:"p-2.5 text-slate-400",children:["(",a.x,", ",a.y,")"]}),e.jsx("td",{className:"p-2.5 text-emerald-300 font-bold bg-emerald-500/5",children:a.sx.toFixed(3)}),e.jsx("td",{className:"p-2.5 text-emerald-300 font-bold bg-emerald-500/5",children:a.sy.toFixed(3)}),e.jsx("td",{className:"p-2.5 text-[11px] text-slate-400 truncate",children:l==="standard"?`(${a.x} - ${f.toFixed(1)}) / ${u.toFixed(1)}`:`(${a.x} - ${c}) / ${C-c}`})]},a.id))})]})})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h4",{className:"text-xs font-semibold uppercase tracking-wider text-slate-300",children:"2D Feature Space Representation"}),e.jsx("span",{className:"text-[11px] text-slate-400 font-mono",children:"● Training Points (Cyan) | ◆ Test Sample (Gold)"})]}),e.jsx("div",{className:"bg-slate-950 rounded-lg p-4 border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"-3 -3 6 6",className:"w-full max-w-[340px] h-[220px]",children:[e.jsx("line",{x1:"-3",y1:"0",x2:"3",y2:"0",stroke:"#334155",strokeWidth:"0.04"}),e.jsx("line",{x1:"0",y1:"-3",x2:"0",y2:"3",stroke:"#334155",strokeWidth:"0.04"}),W.map(a=>{const t=l==="standard"?a.sx:(a.sx-(r+s)/2)*2,n=-(l==="standard"?a.sy:(a.sy-(r+s)/2)*2);return e.jsxs("g",{children:[e.jsx("circle",{cx:t,cy:n,r:"0.16",fill:"#06b6d4"}),e.jsx("text",{x:t+.2,y:n,fill:"#94a3b8",fontSize:"0.25",fontFamily:"monospace",children:a.name})]},a.id)}),(()=>{const a=l==="standard"?d.sx:(d.sx-(r+s)/2)*2,t=-(l==="standard"?d.sy:(d.sy-(r+s)/2)*2);return e.jsxs("g",{children:[e.jsx("polygon",{points:`${a},${t-.22} ${a+.22},${t} ${a},${t+.22} ${a-.22},${t}`,fill:"#f59e0b"}),e.jsxs("text",{x:a+.25,y:t+.08,fill:"#fde68a",fontSize:"0.28",fontWeight:"bold",fontFamily:"monospace",children:["Test (",y,"h, ",w,"pts)"]})]})})()]})}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-2 text-center",children:"Origin (0, 0) represents the feature centroid. Notice how distance metrics (Euclidean) become unbiased across dimensions."})]})]})]})]}),o==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:b.map((a,t)=>e.jsx("button",{onClick:()=>Y(t),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${v===t?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:a.name},t))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:b[v].name}),e.jsx("button",{onClick:()=>P(b[v].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors",children:O?e.jsxs(e.Fragment,{children:[e.jsx(D,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(K,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:b[v].code})]})]}),o==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(Z,{className:"w-5 h-5 text-emerald-400"}),"Classroom Revision Notes: StandardScaler vs MinMaxScaler"]}),e.jsxs("button",{onClick:()=>P(G),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400",children:[O?e.jsx(D,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(K,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:G})]}),o==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(U,{className:"w-5 h-5 text-emerald-400"}),"Topic 5 Quiz: Scaler Concepts & Transformations"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Assess your mastery of Z-scores, Min-Max normalization, and inverse transforms."})]}),m&&e.jsxs("div",{className:"px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-emerald-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[ae()," / ",X.length]})]})]}),e.jsx("div",{className:"space-y-6",children:X.map((a,t)=>{h[a.id];const n=h[a.id]===a.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono mt-0.5",children:["Q",t+1]}),e.jsx("span",{children:a.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:a.options.map((j,N)=>{const V=h[a.id]===N;let T="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return m?N===a.correctAnswer?T="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":V&&!n&&(T="bg-rose-500/20 border-rose-500/50 text-rose-200"):V&&(T="bg-emerald-500/20 border-emerald-500/50 text-emerald-200"),e.jsxs("button",{onClick:()=>ee(a.id,N),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${T}`,children:[e.jsx("span",{children:j}),m&&N===a.correctAnswer&&e.jsx(D,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},N)})}),m&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-emerald-300 block mb-1",children:"Explanation:"}),a.explanation]})]},a.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:m?e.jsxs("button",{onClick:()=>{L({}),B(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(ie,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>B(!0),disabled:Object.keys(h).length===0,className:"px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-emerald-600/20",children:"Submit Answers"})})]})})]})]})}export{ue as default};
