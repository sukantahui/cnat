import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{aq as V,S as X,k as Y,B as C,aa as T,aM as J,ad as q,aB as Z,ci as ee,f as _,g as O}from"./vendor-icons-DFC0rBCP.js";const te=`"""\r
Topic 14: Regression Metrics\r
Script 1: Computing MAE, MSE, RMSE, and R2 in Scikit-learn\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.metrics import (\r
    mean_absolute_error,\r
    mean_squared_error,\r
    r2_score,\r
    mean_absolute_percentage_error\r
)\r
\r
# True student exam scores vs Model predicted scores\r
y_true = np.array([50.0, 75.0, 90.0, 40.0, 60.0])\r
y_pred = np.array([52.0, 70.0, 95.0, 35.0, 64.0])\r
\r
# 1. Mean Absolute Error (MAE)\r
mae = mean_absolute_error(y_true, y_pred)\r
\r
# 2. Mean Squared Error (MSE)\r
mse = mean_squared_error(y_true, y_pred)\r
\r
# 3. Root Mean Squared Error (RMSE)\r
rmse = np.sqrt(mse) # or mean_squared_error(y_true, y_pred, squared=False) in older sklearn\r
\r
# 4. R-squared (R2 Score)\r
r2 = r2_score(y_true, y_pred)\r
\r
# 5. MAPE (Mean Absolute Percentage Error)\r
mape = mean_absolute_percentage_error(y_true, y_pred)\r
\r
print("--- Regression Metrics Evaluation ---")\r
print(f"Mean Absolute Error (MAE):           {mae:.2f} marks (Average deviation)")\r
print(f"Mean Squared Error (MSE):            {mse:.2f} marks^2 (Penalizes larger errors)")\r
print(f"Root Mean Squared Error (RMSE):      {rmse:.2f} marks (Original physical unit)")\r
print(f"R-squared Score (R2):                {r2:.4f} ({r2*100:.1f}% variance explained)")\r
print(f"Mean Absolute Percentage Error (MAPE): {mape*100:.2f}%")\r
`,re=`"""\r
Topic 14: Regression Metrics\r
Script 2: Demystifying R2 Score & How R2 Can Be Negative\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.metrics import r2_score\r
\r
y_true = np.array([10.0, 20.0, 30.0, 40.0, 50.0])\r
y_mean = np.mean(y_true) # 30.0\r
\r
# 1. Baseline Model: Predicts mean value (y_mean) for everything\r
y_pred_baseline = np.full_like(y_true, y_mean)\r
r2_baseline = r2_score(y_true, y_pred_baseline)\r
print("1. Baseline Mean Predictor:")\r
print(f"R2 Score = {r2_baseline:.4f} (By definition, predicting the mean yields R2 = 0.0)")\r
\r
# 2. Good Model: Close to true values\r
y_pred_good = np.array([11.0, 19.0, 31.0, 39.0, 51.0])\r
r2_good = r2_score(y_true, y_pred_good)\r
print("\\n2. Good Model:")\r
print(f"R2 Score = {r2_good:.4f} (Explains {r2_good*100:.1f}% of target variance)")\r
\r
# 3. Terribly Pathological Model: Worse than predicting the mean!\r
y_pred_terrible = np.array([100.0, -50.0, 200.0, -100.0, 300.0])\r
r2_terrible = r2_score(y_true, y_pred_terrible)\r
print("\\n3. Terribly Overfitted / Broken Model:")\r
print(f"R2 Score = {r2_terrible:.4f} (Negative! Worse than a horizontal mean line)")\r
`,se=`"""\r
Topic 14: Regression Metrics\r
Script 3: Outlier Sensitivity: MAE vs MSE & Huber Loss\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.metrics import mean_absolute_error, mean_squared_error\r
\r
# Normal dataset predictions\r
y_true_clean = np.array([10, 20, 30, 40, 50])\r
y_pred_clean = np.array([12, 19, 31, 38, 52])\r
\r
mae_clean = mean_absolute_error(y_true_clean, y_pred_clean)\r
mse_clean = mean_squared_error(y_true_clean, y_pred_clean)\r
\r
print("--- Clean Dataset (Residuals ≈ ±2) ---")\r
print(f"MAE: {mae_clean:.2f} | MSE: {mse_clean:.2f} | RMSE: {np.sqrt(mse_clean):.2f}")\r
\r
# Single extreme prediction outlier (e.g. predicting 150 instead of 50)\r
y_pred_outlier = np.array([12, 19, 31, 38, 150]) # residual on last point is 100!\r
\r
mae_outlier = mean_absolute_error(y_true_clean, y_pred_outlier)\r
mse_outlier = mean_squared_error(y_true_clean, y_pred_outlier)\r
\r
print("\\n--- Dataset with Single Outlier Error (100 error on 1 sample) ---")\r
print(f"MAE: {mae_outlier:.2f} (Increased by {(mae_outlier/mae_clean):.1f}x)")\r
print(f"MSE: {mse_outlier:.2f} (Exploded by {(mse_outlier/mse_clean):.1f}x because 100^2 = 10,000!)")\r
print(f"RMSE: {np.sqrt(mse_outlier):.2f}")\r
`,I=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 14 - REGRESSION METRICS\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. MEAN ABSOLUTE ERROR (MAE)\r
--------------------------------------------------------------------------------\r
Formula:\r
    $\\text{MAE} = \\frac{1}{N} \\sum_{i=1}^N |y_i - \\hat{y}_i|$\r
- Represents the average magnitude of absolute error residuals.\r
- Same physical unit as target variable $y$ (e.g. ₹ Rupees, °C Temperature).\r
- Robust to outliers (linear penalty).\r
\r
2. MEAN SQUARED ERROR (MSE) & ROOT MEAN SQUARED ERROR (RMSE)\r
--------------------------------------------------------------------------------\r
A. MSE:\r
    $\\text{MSE} = \\frac{1}{N} \\sum_{i=1}^N (y_i - \\hat{y}_i)^2$\r
- Heavily penalizes large errors because residuals are squared ($e_i^2$).\r
- Unit is squared (e.g. $\\text{INR}^2$), which is non-intuitive for non-technical stakeholders.\r
\r
B. RMSE:\r
    $\\text{RMSE} = \\sqrt{\\text{MSE}}$\r
- Brings unit back to the original physical target scale while preserving the heavy quadratic penalty on large outliers.\r
\r
3. R-SQUARED ($R^2$ - COEFFICIENT OF DETERMINATION)\r
--------------------------------------------------------------------------------\r
Formula:\r
    $R^2 = 1 - \\frac{\\text{SS}_{\\text{res}}}{\\text{SS}_{\\text{tot}}} = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2}$\r
\r
Interpretation:\r
- $R^2 = 1.0$: Perfect predictions; model explains 100% of target variance.\r
- $R^2 = 0.0$: The model performs exactly as well as predicting the constant mean $\\bar{y}$.\r
- $R^2 < 0.0$ (Negative): The model performs WORSE than a constant horizontal mean baseline! (Common with severe overfitting on test data).\r
\r
4. METRICS COMPARISON CHEAT SHEET\r
--------------------------------------------------------------------------------\r
| Metric | Formula | Units | Outlier Penalty | Target Use Case |\r
|---|---|---|---|---|\r
| \`mean_absolute_error\` | $(1/N)\\sum \\|y-\\hat{y}\\|$ | Original ($y$) | Linear (Robust) | Business KPI reporting, noisy data |\r
| \`mean_squared_error\` | $(1/N)\\sum (y-\\hat{y})^2$ | Squared ($y^2$) | Quadratic (Severe) | Mathematical optimization, loss functions |\r
| \`root_mean_squared_error\` | $\\sqrt{\\text{MSE}}$ | Original ($y$) | Quadratic (Severe) | Scientific & engineering accuracy |\r
| \`r2_score\` | $1 - SS_{res}/SS_{tot}$ | Dimensionless | Proportional | Model comparison across different scales |\r
\r
5. BARRACKPORE LAB INSIGHT (Sukanta Hui)\r
--------------------------------------------------------------------------------\r
"If you want to know how many marks/rupees you are off on average, look at MAE. If large errors are dangerous (like rocket trajectory or medicine dosages), optimize RMSE!"\r
================================================================================\r
`,j=[{id:1,question:"What physical unit does Root Mean Squared Error (RMSE) have relative to target variable y?",options:["Dimensionless ratio in [0, 1]","The squared units of y (e.g. dollars squared)","The exact same physical unit as y (e.g. dollars or marks)","Logarithmic decibels"],correctAnswer:2,explanation:"Taking the square root of MSE restores the error metric back to the original physical scale of the target variable $y$, making it directly interpretable while retaining heavy quadratic penalty for large deviations."},{id:2,question:"What does a negative R-squared ($R^2 < 0$) score on a test dataset indicate?",options:["The model has achieved 100% negative correlation with the features","The model performs worse than a naive baseline that simply predicts the constant mean of the target variable","A bug in Python's floating point arithmetic","The dataset contains negative numbers"],correctAnswer:1,explanation:"Because $R^2 = 1 - (SS_{res} / SS_{tot})$, if the residual sum of squares exceeds the total variance from the mean, $R^2$ becomes negative, meaning the model is less accurate than a horizontal line through the dataset mean."},{id:3,question:"Why is Mean Absolute Error (MAE) considered more robust to extreme dataset outliers than Mean Squared Error (MSE)?",options:["Because MAE penalizes residuals linearly ($|e_i|$), whereas MSE squares errors ($e_i^2$), causing extreme outliers to dominate the loss","Because MAE automatically drops the top 5% highest errors","Because MAE is an unsupervised clustering algorithm","Because MAE relies on gradient descent"],correctAnswer:0,explanation:"MSE squares the residuals, meaning an error of 100 contributes $10,000$ to the sum, whereas MAE contributes only $100$. MAE's linear penalty prevents single outliers from exploding the total metric."},{id:4,question:"If a regression model achieves an $R^2$ of 0.85, what does this mathematically represent?",options:["85% of test samples were predicted with 0 error","85% of the total variance in the target variable is explained by the regression model","The model has an 85% probability of passing production tests","The average prediction error is 15%"],correctAnswer:1,explanation:"The coefficient of determination $R^2$ quantifies the proportion of the total target variance ($SS_{tot}$) that is successfully captured and explained by the regression model ($1 - SS_{res}/SS_{tot}$)."}],B=[{id:1,name:"Debangshu",actual:50,pred:52},{id:2,name:"Susmita",actual:75,pred:70},{id:3,name:"Swadeep",actual:90,pred:95},{id:4,name:"Tuhina",actual:40,pred:35},{id:5,name:"Sachin",actual:60,pred:64}];function le(){const[s,m]=a.useState("interactive"),[x,P]=a.useState(0),[v,S]=a.useState(!1),[F,z]=a.useState(B),[u,Q]=a.useState(!1),[n,D]=a.useState(60),[o,E]=a.useState({}),[l,M]=a.useState(!1),i=[{name:"01_regression_metrics_basics.py",code:te},{name:"02_r2_score_deepdive_and_negative_r2.py",code:re},{name:"03_outlier_impact_mae_vs_mse.py",code:se}],w=t=>{navigator.clipboard.writeText(t),S(!0),setTimeout(()=>S(!1),2e3)},H=(t,r)=>{l||E(N=>({...N,[t]:r}))},L=()=>{let t=0;return j.forEach(r=>{o[r.id]===r.correctAnswer&&t++}),t},p=F.map(t=>u&&t.id===5?{...t,pred:t.actual+n}:t),g=p.map(t=>t.actual);p.map(t=>t.pred);const U=g.reduce((t,r)=>t+r,0)/g.length,R=p.map(t=>t.actual-t.pred),A=R.map(t=>Math.abs(t)),f=R.map(t=>Math.pow(t,2)),W=A.reduce((t,r)=>t+r,0)/A.length,$=f.reduce((t,r)=>t+r,0)/f.length,G=Math.sqrt($),y=f.reduce((t,r)=>t+r,0),h=g.reduce((t,r)=>t+Math.pow(r-U,2),0),d=h!==0?1-y/h:0;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-blue-500/20 rounded-xl text-blue-400 border border-blue-500/30",children:e.jsx(V,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20",children:"Topic 14 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.metrics"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Regression Metrics: MAE, MSE, RMSE & R² Score"})]})]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:["Master the mathematical nuances of regression error functions. Compare linear vs quadratic outlier sensitivity and understand why and when ",e.jsx("code",{className:"text-blue-300 font-mono",children:"r2_score"})," can plunge below zero."]})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>m("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${s==="interactive"?"border-blue-400 text-blue-400 bg-blue-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(X,{className:"w-4 h-4"}),"Regression Metrics Studio"]}),e.jsxs("button",{onClick:()=>m("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${s==="code"?"border-blue-400 text-blue-400 bg-blue-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(Y,{className:"w-4 h-4"}),"Python Code Lab (",i.length,")"]}),e.jsxs("button",{onClick:()=>m("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${s==="notes"?"border-blue-400 text-blue-400 bg-blue-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(C,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>m("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${s==="quiz"?"border-blue-400 text-blue-400 bg-blue-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(T,{className:"w-4 h-4"}),"Knowledge Check"]})]}),s==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsxs("div",{className:"p-4 bg-slate-900/90 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"Mean Absolute Error"}),e.jsxs("div",{className:"text-2xl font-bold font-mono text-emerald-400",children:[W.toFixed(2)," ",e.jsx("span",{className:"text-xs text-slate-500 font-sans",children:"marks"})]}),e.jsx("div",{className:"text-[10px] text-slate-500 font-mono mt-1",children:"(1/N) Σ |y - ŷ|"})]}),e.jsxs("div",{className:"p-4 bg-slate-900/90 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"Mean Squared Error"}),e.jsxs("div",{className:"text-2xl font-bold font-mono text-amber-400",children:[$.toFixed(2)," ",e.jsx("span",{className:"text-xs text-slate-500 font-sans",children:"marks²"})]}),e.jsx("div",{className:"text-[10px] text-slate-500 font-mono mt-1",children:"(1/N) Σ (y - ŷ)²"})]}),e.jsxs("div",{className:"p-4 bg-slate-900/90 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"Root Mean Squared Error"}),e.jsxs("div",{className:"text-2xl font-bold font-mono text-sky-400",children:[G.toFixed(2)," ",e.jsx("span",{className:"text-xs text-slate-500 font-sans",children:"marks"})]}),e.jsx("div",{className:"text-[10px] text-slate-500 font-mono mt-1",children:"√MSE"})]}),e.jsxs("div",{className:"p-4 bg-slate-900/90 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"R-squared (R² Score)"}),e.jsx("div",{className:`text-2xl font-bold font-mono ${d>=0?"text-emerald-400":"text-rose-400"}`,children:d.toFixed(3)}),e.jsx("div",{className:"text-[10px] text-slate-500 font-mono mt-1",children:"1 - (SS_res / SS_tot)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsx("div",{className:"lg:col-span-6 space-y-4",children:e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(J,{className:"w-4 h-4 text-blue-400"}),"Residual Adjuster"]}),e.jsxs("button",{onClick:()=>z(B),className:"text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1",children:[e.jsx(q,{className:"w-3.5 h-3.5"}),"Reset"]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-lg border border-slate-800 mb-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-200 flex items-center gap-1.5",children:[e.jsx(Z,{className:"w-3.5 h-3.5 text-amber-400"}),"Inject Massive Error Outlier on Sachin"]}),e.jsx("input",{type:"checkbox",checked:u,onChange:t=>Q(t.target.checked),className:"w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700"})]}),u&&e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[e.jsx("span",{children:"Outlier Error Offset:"}),e.jsxs("span",{className:"font-mono text-amber-300 font-bold",children:["+",n," marks"]})]}),e.jsx("input",{type:"range",min:"20",max:"100",value:n,onChange:t=>D(Number(t.target.value)),className:"w-full accent-amber-400 cursor-pointer"})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-400 font-mono border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2.5",children:"Student"}),e.jsx("th",{className:"p-2.5",children:"Actual (y)"}),e.jsx("th",{className:"p-2.5",children:"Pred (ŷ)"}),e.jsx("th",{className:"p-2.5 text-emerald-400",children:"|y - ŷ|"}),e.jsx("th",{className:"p-2.5 text-amber-400",children:"(y - ŷ)²"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 font-mono",children:p.map(t=>{const r=t.actual-t.pred;return e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-2.5 font-sans font-medium text-slate-200",children:t.name}),e.jsx("td",{className:"p-2.5 text-slate-300",children:t.actual}),e.jsx("td",{className:"p-2.5 text-blue-300 font-bold",children:t.pred}),e.jsx("td",{className:"p-2.5 text-emerald-400",children:Math.abs(r)}),e.jsx("td",{className:"p-2.5 text-amber-400",children:Math.pow(r,2)})]},t.id)})})]})})]})}),e.jsx("div",{className:"lg:col-span-6 space-y-4",children:e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-3",children:[e.jsx(ee,{className:"w-4 h-4 text-blue-400"}),"Metrics Behavior Analysis"]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-3 text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-slate-400",children:"Total SS_res (Squared Error Sum):"}),e.jsx("span",{className:"font-mono text-amber-400 font-bold",children:y.toFixed(1)})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-slate-400",children:"Total SS_tot (Variance from Mean):"}),e.jsx("span",{className:"font-mono text-sky-400 font-bold",children:h.toFixed(1)})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-900 flex justify-between items-center font-bold",children:[e.jsxs("span",{className:"text-slate-200",children:["R² = 1 - (",y.toFixed(0)," / ",h.toFixed(0),"):"]}),e.jsx("span",{className:`font-mono text-sm ${d>=0?"text-emerald-300":"text-rose-400"}`,children:d.toFixed(3)})]})]}),u&&e.jsxs("div",{className:"mt-4 p-3.5 bg-amber-500/15 border border-amber-500/30 rounded-lg text-xs text-amber-200 leading-relaxed",children:[e.jsx("strong",{className:"block mb-0.5",children:"⚠️ Outlier Effect Observed:"}),"Because the error on Sachin is squared (",n,"² = ",n*n,"), MSE and RMSE explode dramatically, while MAE increases only linearly. This demonstrates why MAE is robust against corrupt sensor spikes."]}),d<0&&e.jsxs("div",{className:"mt-4 p-3.5 bg-rose-500/15 border border-rose-500/30 rounded-lg text-xs text-rose-200 leading-relaxed",children:[e.jsx("strong",{className:"block mb-0.5",children:"🚨 Negative R² Warning:"}),"The model is performing worse than simply predicting the dataset mean (SS_res > SS_tot). In production, replacing this model with a dummy mean line would improve performance!"]})]})})]})]}),s==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:i.map((t,r)=>e.jsx("button",{onClick:()=>P(r),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${x===r?"bg-blue-600 text-white shadow-md shadow-blue-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},r))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:i[x].name}),e.jsx("button",{onClick:()=>w(i[x].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors",children:v?e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(O,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:i[x].code})]})]}),s==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(C,{className:"w-5 h-5 text-blue-400"}),"Classroom Revision Notes: Regression Metrics"]}),e.jsxs("button",{onClick:()=>w(I),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400",children:[v?e.jsx(_,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(O,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:I})]}),s==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(T,{className:"w-5 h-5 text-blue-400"}),"Topic 14 Quiz: Regression Metrics"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Assess your mastery of MAE, MSE, RMSE, and the R² coefficient of determination."})]}),l&&e.jsxs("div",{className:"px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-blue-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[L()," / ",j.length]})]})]}),e.jsx("div",{className:"space-y-6",children:j.map((t,r)=>{o[t.id];const N=o[t.id]===t.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono mt-0.5",children:["Q",r+1]}),e.jsx("span",{children:t.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:t.options.map((K,c)=>{const k=o[t.id]===c;let b="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return l?c===t.correctAnswer?b="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":k&&!N&&(b="bg-rose-500/20 border-rose-500/50 text-rose-200"):k&&(b="bg-blue-500/20 border-blue-500/50 text-blue-200"),e.jsxs("button",{onClick:()=>H(t.id,c),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${b}`,children:[e.jsx("span",{children:K}),l&&c===t.correctAnswer&&e.jsx(_,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},c)})}),l&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-blue-300 block mb-1",children:"Explanation:"}),t.explanation]})]},t.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:l?e.jsxs("button",{onClick:()=>{E({}),M(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(q,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>M(!0),disabled:Object.keys(o).length===0,className:"px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-blue-600/20",children:"Submit Answers"})})]})})]})]})}export{le as default};
