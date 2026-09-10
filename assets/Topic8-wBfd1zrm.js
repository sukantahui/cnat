import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{a1 as J,S as ee,k as se,B as O,aa as M,aM as te,ci as re,f as L,g as F,ad as ne}from"./vendor-icons-DFC0rBCP.js";const ae=`"""\r
Topic 8: Linear Models\r
Script 1: LinearRegression - Predicting Continuous Exam Scores\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.linear_model import LinearRegression\r
from sklearn.metrics import mean_squared_error, r2_score\r
\r
# Training data: Study Hours -> Exam Score\r
X_train = np.array([[2.0], [4.0], [6.0], [8.0], [10.0], [12.0]])\r
y_train = np.array([28.0, 42.0, 56.0, 71.0, 84.0, 96.0])\r
\r
# Initialize and fit LinearRegression estimator\r
reg = LinearRegression(fit_intercept=True)\r
reg.fit(X_train, y_train)\r
\r
# Inspect learned parameters\r
slope = reg.coef_[0]\r
intercept = reg.intercept_\r
\r
print("--- LinearRegression Model Learned ---")\r
print(f"Regression Equation: y = {slope:.2f} * x + {intercept:.2f}")\r
print(f"Learned Weight (coef_):      {reg.coef_}")\r
print(f"Learned Bias (intercept_):  {reg.intercept_:.4f}")\r
\r
# Make predictions on training data and evaluate\r
y_pred = reg.predict(X_train)\r
mse = mean_squared_error(y_train, y_pred)\r
r2 = r2_score(y_train, y_pred)\r
\r
print(f"\\nModel Performance on Training Set:")\r
print(f"Mean Squared Error (MSE): {mse:.2f}")\r
print(f"R-squared Score (R2):     {r2:.4f}")\r
\r
# Predict for a new student studying 7.5 hours\r
X_new = np.array([[7.5]])\r
pred_score = reg.predict(X_new)[0]\r
print(f"\\nPredicted score for 7.5 hours study: {pred_score:.2f} marks")\r
`,ie=`"""\r
Topic 8: Linear Models\r
Script 2: LogisticRegression - Binary Classification & Sigmoid Probabilities\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.linear_model import LogisticRegression\r
from sklearn.metrics import accuracy_score, confusion_matrix\r
\r
# Features: [Study Hours, Attendance Rate %] -> Target: 0 (Fail) / 1 (Pass)\r
X = np.array([\r
    [2.0, 50.0],\r
    [4.0, 60.0],\r
    [6.0, 65.0],\r
    [8.0, 80.0],\r
    [10.0, 85.0],\r
    [12.0, 95.0]\r
])\r
y = np.array([0, 0, 0, 1, 1, 1])\r
\r
# Instantiate LogisticRegression\r
clf = LogisticRegression(random_state=42)\r
clf.fit(X, y)\r
\r
print("--- Logistic Regression (Binary Classifier) ---")\r
print("Classes learned (classes_):", clf.classes_)\r
print("Weights / Coefficients (coef_):", clf.coef_)\r
print("Bias / Intercept (intercept_):", clf.intercept_)\r
\r
# Predict discrete class labels & continuous probability distributions\r
y_pred = clf.predict(X)\r
y_prob = clf.predict_proba(X)\r
\r
print("\\n--- Predictions & Sigmoid Probabilities ---")\r
for i in range(len(X)):\r
    p_fail, p_pass = y_prob[i]\r
    print(f"Sample {i+1} ({X[i][0]}h, {X[i][1]}%): P(Fail)={p_fail:.3f}, P(Pass)={p_pass:.3f} => Pred={y_pred[i]} (Actual={y[i]})")\r
\r
print(f"\\nTraining Accuracy: {accuracy_score(y, y_pred) * 100:.1f}%")\r
`,oe=`"""\r
Topic 8: Linear Models\r
Script 3: Ridge vs Lasso vs ElasticNet (Regularized Linear Models)\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.linear_model import LinearRegression, Ridge, Lasso, ElasticNet\r
\r
# Highly collinear / multi-feature toy data\r
np.random.seed(42)\r
X = np.random.randn(20, 5)\r
# True target depends strongly only on feature 0 and feature 2\r
y = 3.5 * X[:, 0] - 2.0 * X[:, 2] + np.random.randn(20) * 0.1\r
\r
# 1. Standard OLS LinearRegression\r
ols = LinearRegression().fit(X, y)\r
\r
# 2. Ridge Regression (L2 penalty: shrinks weights smoothly towards 0)\r
ridge = Ridge(alpha=1.0).fit(X, y)\r
\r
# 3. Lasso Regression (L1 penalty: creates exact sparsity by zeroing irrelevant weights)\r
lasso = Lasso(alpha=0.2).fit(X, y)\r
\r
# 4. ElasticNet (Combines L1 and L2 penalties)\r
elastic = ElasticNet(alpha=0.2, l1_ratio=0.5).fit(X, y)\r
\r
print("--- Comparison of Learned Coefficients (coef_) ---")\r
print(f"OLS:        {np.round(ols.coef_, 3)}")\r
print(f"Ridge (L2): {np.round(ridge.coef_, 3)}")\r
print(f"Lasso (L1): {np.round(lasso.coef_, 3)}  <-- Notice zeroed coefficients!")\r
print(f"ElasticNet: {np.round(elastic.coef_, 3)}")\r
`,X=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 8 - LINEAR MODELS (LINEAR & LOGISTIC)\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. LINEAR REGRESSION (CONTINUOUS TARGETS)\r
--------------------------------------------------------------------------------\r
- Objective: Fits a linear equation minimizing the Residual Sum of Squares (RSS / Ordinary Least Squares):\r
    y_pred = w_1*x_1 + w_2*x_2 + ... + w_n*x_n + b\r
- Key Learned Attributes:\r
  * \`model.coef_\`: Slopes / feature weights ($w_i$).\r
  * \`model.intercept_\`: Y-axis bias ($b$).\r
- Evaluation Metrics:\r
  * Mean Squared Error ($MSE = (1/N) \\sum (y_i - \\hat{y}_i)^2$)\r
  * R-squared ($R^2$): Proportion of variance explained by the model (1.0 is perfect).\r
\r
2. LOGISTIC REGRESSION (CATEGORICAL TARGETS)\r
--------------------------------------------------------------------------------\r
- Despite its name, LogisticRegression is a CLASSIFIER, not a regressor.\r
- Objective: Passes linear combination $z = w^T x + b$ through the Sigmoid activation function:\r
    P(y=1|x) = \\sigma(z) = 1 / (1 + e^(-z))\r
- Key Methods:\r
  * \`predict(X)\`: Returns hard binary class label (0 or 1, default threshold 0.5).\r
  * \`predict_proba(X)\`: Returns probability matrix of shape (n_samples, n_classes).\r
  * \`decision_function(X)\`: Returns signed distance $z$ to the decision boundary hyperplane.\r
- Key Hyperparameters:\r
  * \`C\`: Inverse of regularization strength ($C = 1/\\lambda$). Smaller C -> stronger regularization.\r
  * \`penalty\`: 'l2' (default), 'l1', 'elasticnet', or None.\r
  * \`solver\`: 'lbfgs' (default), 'liblinear' (small datasets), 'saga' (large datasets / elasticnet).\r
\r
3. REGULARIZED LINEAR MODELS: RIDGE VS LASSO\r
--------------------------------------------------------------------------------\r
A. Ridge Regression ($L_2$ Regularization):\r
   - Loss = OLS Loss + $\\alpha \\sum w_j^2$\r
   - Shrinks weights toward zero; prevents overfitting when features are correlated.\r
   - Does NOT zero out weights completely.\r
\r
B. Lasso Regression ($L_1$ Regularization):\r
   - Loss = OLS Loss + $\\alpha \\sum |w_j|$\r
   - Performs automatic feature selection by forcing non-essential weights strictly to 0.\r
\r
4. BARRACKPORE CLASSROOM RULES\r
--------------------------------------------------------------------------------\r
- Standardize features (\`StandardScaler\`) BEFORE running Logistic Regression with regularization or Ridge/Lasso!\r
  Without scaling, features with large units face disproportionate penalty damping.\r
================================================================================\r
`,_=[{id:1,question:"Despite containing 'Regression' in its name, what kind of machine learning problem does `LogisticRegression` solve?",options:["Continuous numerical value estimation","Classification (discrete categorical class labels)","Unsupervised dimensionality reduction","Hierarchical agglomerative clustering"],correctAnswer:1,explanation:"LogisticRegression is a classification algorithm that models the probability of discrete categorical classes by wrapping linear outputs into the sigmoid/softmax function."},{id:2,question:"What mathematical function is used in binary Logistic Regression to transform linear scores into bounded probabilities in [0, 1]?",options:["Rectified Linear Unit (ReLU)","Sigmoid / Logistic function: 1 / (1 + e^-z)","Hyperbolic Tangent (Tanh)","Softplus function"],correctAnswer:1,explanation:"The sigmoid (logistic) function maps any real-valued number $z$ into the open interval $(0, 1)$, interpreting the result as the posterior probability $P(y=1|X)$."},{id:3,question:"What is the key practical difference between Ridge ($L_2$) and Lasso ($L_1$) regression regarding learned coefficients?",options:["Ridge forces uninformative coefficients to exactly zero, whereas Lasso does not","Lasso can force unimportant feature coefficients to exactly zero (performing automatic feature selection), whereas Ridge only shrinks them","Ridge only works on binary classification problems","Lasso requires GPU hardware acceleration"],correctAnswer:1,explanation:"Lasso ($L_1$) regularization applies a sharp diamond constraint that zeroes out insignificant coefficients completely, providing built-in feature selection. Ridge ($L_2$) shrinks coefficients smoothly but keeps them non-zero."},{id:4,question:"In Scikit-learn's `LogisticRegression`, what does a smaller value of the hyperparameter `C` signify?",options:["Weaker regularization (higher model complexity)","Stronger regularization (simpler model, stronger penalty on large weights)","Faster learning rate","Fewer maximum iterations"],correctAnswer:1,explanation:"`C` is the inverse of regularization strength ($C = 1 / \\lambda$). Therefore, smaller $C$ values enforce stronger regularization, heavily penalizing large weights and preventing overfitting."}],B=[{x:2,y:28},{x:4,y:42},{x:6,y:56},{x:8,y:71},{x:10,y:84},{x:12,y:96}],le=[{hours:2,passed:0},{hours:4,passed:0},{hours:5,passed:0},{hours:7,passed:1},{hours:9,passed:1},{hours:11,passed:1}];function xe(){const[i,y]=r.useState("interactive"),[j,W]=r.useState(0),[R,C]=r.useState(!1),[o,k]=r.useState("linear"),[l,H]=r.useState(6.8),[c,q]=r.useState(15),[m,D]=r.useState(7.5),[p,U]=r.useState(1.2),[h,G]=r.useState(-7.2),[u,K]=r.useState(.5),[g,Q]=r.useState(6),[f,z]=r.useState({}),[x,$]=r.useState(!1),b=[{name:"01_linear_regression_workflow.py",code:ae},{name:"02_logistic_regression_workflow.py",code:ie},{name:"03_regularized_linear_models.py",code:oe}],A=s=>{navigator.clipboard.writeText(s),C(!0),setTimeout(()=>C(!1),2e3)},V=(s,t)=>{x||z(n=>({...n,[s]:t}))},Y=()=>{let s=0;return _.forEach(t=>{f[t.id]===t.correctAnswer&&s++}),s},E=B.map(s=>({...s,pred:l*s.x+c})),Z=E.reduce((s,t)=>s+Math.pow(t.y-t.pred,2),0)/E.length,S=l*m+c,T=s=>1/(1+Math.exp(-s)),P=p*g+h,N=T(P),I=N>=u?1:0;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-cyan-500/20 rounded-xl text-cyan-400 border border-cyan-500/30",children:e.jsx(J,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20",children:"Topic 8 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.linear_model"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Linear Models: LinearRegression & LogisticRegression"})]})]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:"Master the foundational linear family in Scikit-learn. Contrast continuous Least Squares curve fitting with Sigmoid probability classification, decision thresholds, and regularized variants (Ridge & Lasso)."})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>y("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="interactive"?"border-cyan-400 text-cyan-400 bg-cyan-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(ee,{className:"w-4 h-4"}),"Linear Studio"]}),e.jsxs("button",{onClick:()=>y("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="code"?"border-cyan-400 text-cyan-400 bg-cyan-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(se,{className:"w-4 h-4"}),"Python Code Lab (",b.length,")"]}),e.jsxs("button",{onClick:()=>y("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="notes"?"border-cyan-400 text-cyan-400 bg-cyan-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(O,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>y("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="quiz"?"border-cyan-400 text-cyan-400 bg-cyan-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(M,{className:"w-4 h-4"}),"Knowledge Check"]})]}),i==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("button",{onClick:()=>k("linear"),className:`p-4 rounded-xl border text-left transition-all ${o==="linear"?"bg-cyan-500/15 border-cyan-500/60 shadow-lg shadow-cyan-950/50":"bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 text-slate-400 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-slate-200 font-mono text-sm",children:"LinearRegression"}),e.jsx("span",{className:"text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-mono",children:"Regressor (Continuous y)"})]}),e.jsx("div",{className:"text-xs text-slate-400",children:"Fits hyperplane minimizing Ordinary Least Squares (MSE). Outputs unbounded numbers."})]}),e.jsxs("button",{onClick:()=>k("logistic"),className:`p-4 rounded-xl border text-left transition-all ${o==="logistic"?"bg-cyan-500/15 border-cyan-500/60 shadow-lg shadow-cyan-950/50":"bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 text-slate-400 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-slate-200 font-mono text-sm",children:"LogisticRegression"}),e.jsx("span",{className:"text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono",children:"Classifier (Discrete Class)"})]}),e.jsxs("div",{className:"text-xs text-slate-400",children:["Applies Sigmoid curve ",e.jsx("code",{className:"text-cyan-300",children:"1/(1+e^-z)"})," to output calibrated probabilities."]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsx("div",{className:"lg:col-span-5 space-y-4",children:e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(te,{className:"w-4 h-4 text-cyan-400"}),o==="linear"?"Linear Hyperplane Tuning":"Logistic Sigmoid Parameters"]}),o==="linear"?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Slope (model.coef_[0]):"}),e.jsx("span",{className:"font-mono text-cyan-300 font-bold",children:l.toFixed(2)})]}),e.jsx("input",{type:"range",min:"3.0",max:"12.0",step:"0.1",value:l,onChange:s=>H(Number(s.target.value)),className:"w-full accent-cyan-400 cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Intercept (model.intercept_):"}),e.jsx("span",{className:"font-mono text-cyan-300 font-bold",children:c.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.0",max:"30.0",step:"0.5",value:c,onChange:s=>q(Number(s.target.value)),className:"w-full accent-cyan-400 cursor-pointer"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400",children:"Learned Equation:"}),e.jsxs("div",{className:"text-cyan-300 font-bold",children:["y_pred = ",l.toFixed(2)," * x + ",c.toFixed(2)]}),e.jsxs("div",{className:"text-slate-400 pt-1 border-t border-slate-900 flex justify-between",children:[e.jsx("span",{children:"Mean Squared Error:"}),e.jsx("span",{className:"text-amber-400 font-bold",children:Z.toFixed(2)})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-lg border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[e.jsx("span",{children:"Predict for Study Hours:"}),e.jsxs("span",{className:"font-mono text-emerald-300 font-bold",children:[m," hrs"]})]}),e.jsx("input",{type:"range",min:"1",max:"14",step:"0.5",value:m,onChange:s=>D(Number(s.target.value)),className:"w-full accent-emerald-400 cursor-pointer"}),e.jsxs("div",{className:"text-xs font-mono text-slate-200",children:["Predicted Score: ",e.jsxs("strong",{className:"text-emerald-400 font-bold",children:[S.toFixed(2)," pts"]})]})]})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Weight (coef_[0]):"}),e.jsx("span",{className:"font-mono text-cyan-300 font-bold",children:p.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.1",value:p,onChange:s=>U(Number(s.target.value)),className:"w-full accent-cyan-400 cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Bias (intercept_):"}),e.jsx("span",{className:"font-mono text-cyan-300 font-bold",children:h.toFixed(2)})]}),e.jsx("input",{type:"range",min:"-15.0",max:"0.0",step:"0.5",value:h,onChange:s=>G(Number(s.target.value)),className:"w-full accent-cyan-400 cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Decision Threshold:"}),e.jsx("span",{className:"font-mono text-amber-300 font-bold",children:u.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.1",max:"0.9",step:"0.05",value:u,onChange:s=>K(Number(s.target.value)),className:"w-full accent-amber-400 cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-lg border border-slate-800 space-y-2 font-mono text-xs",children:[e.jsxs("div",{className:"flex justify-between text-slate-300 font-sans",children:[e.jsx("span",{children:"Evaluate Hours:"}),e.jsxs("span",{className:"font-mono text-emerald-300 font-bold",children:[g," hrs"]})]}),e.jsx("input",{type:"range",min:"1",max:"12",step:"0.5",value:g,onChange:s=>Q(Number(s.target.value)),className:"w-full accent-emerald-400 cursor-pointer"}),e.jsxs("div",{className:"text-slate-400",children:["1. z = (",p," * ",g,") + (",h,") ="," ",e.jsx("span",{className:"text-cyan-300 font-bold",children:P.toFixed(2)})]}),e.jsxs("div",{className:"text-slate-400",children:["2. P(Pass) = σ(z) ="," ",e.jsxs("span",{className:"text-emerald-300 font-bold",children:[(N*100).toFixed(1),"%"]})]}),e.jsxs("div",{className:"text-slate-200 pt-1 border-t border-slate-900",children:["3. Prediction:"," ",e.jsx("span",{className:`font-bold px-1.5 py-0.5 rounded ${I===1?"bg-emerald-500/20 text-emerald-300":"bg-rose-500/20 text-rose-300"}`,children:I===1?"Class 1 (Pass)":"Class 0 (Fail)"})]})]})]})]})}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(re,{className:"w-4 h-4 text-cyan-400"}),o==="linear"?"Least Squares Regression Line":"Sigmoid Probability Curve"]}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:o==="linear"?"y = wx + b":"P = 1 / (1 + e^-z)"})]}),e.jsx("div",{className:"bg-slate-950 rounded-lg p-4 border border-slate-800 flex items-center justify-center",children:o==="linear"?e.jsxs("svg",{viewBox:"0 0 400 240",className:"w-full h-[220px]",children:[e.jsx("line",{x1:"40",y1:"20",x2:"40",y2:"200",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("line",{x1:"40",y1:"200",x2:"380",y2:"200",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("text",{x:"380",y:"215",fill:"#94a3b8",fontSize:"10",textAnchor:"end",children:"Hours (x)"}),e.jsx("text",{x:"35",y:"15",fill:"#94a3b8",fontSize:"10",textAnchor:"end",children:"Score (y)"}),(()=>{const t=200-(l*0+c)/100*180,n=360,a=200-(l*14+c)/100*180;return e.jsx("line",{x1:40,y1:t,x2:n,y2:a,stroke:"#06b6d4",strokeWidth:"2.5",strokeDasharray:"0"})})(),B.map((s,t)=>{const n=40+s.x/14*320,a=200-s.y/100*180;return e.jsx("circle",{cx:n,cy:a,r:"4.5",fill:"#38bdf8"},t)}),(()=>{const s=40+m/14*320,t=200-S/100*180;return e.jsxs("g",{children:[e.jsx("circle",{cx:s,cy:t,r:"6",fill:"#f59e0b",stroke:"#fff",strokeWidth:"1.5"}),e.jsxs("text",{x:s+8,y:t+4,fill:"#fde68a",fontSize:"10",fontFamily:"monospace",children:["(",m,"h, ",S.toFixed(1),")"]})]})})()]}):e.jsxs("svg",{viewBox:"0 0 400 240",className:"w-full h-[220px]",children:[e.jsx("line",{x1:"40",y1:"20",x2:"40",y2:"200",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("line",{x1:"40",y1:"200",x2:"380",y2:"200",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("text",{x:"380",y:"215",fill:"#94a3b8",fontSize:"10",textAnchor:"end",children:"Hours (x)"}),e.jsx("text",{x:"35",y:"15",fill:"#94a3b8",fontSize:"10",textAnchor:"end",children:"P(Pass)"}),(()=>{const s=200-u*180;return e.jsxs("g",{children:[e.jsx("line",{x1:"40",y1:s,x2:"380",y2:s,stroke:"#f59e0b",strokeWidth:"1",strokeDasharray:"4 4"}),e.jsxs("text",{x:"375",y:s-4,fill:"#f59e0b",fontSize:"9",textAnchor:"end",fontFamily:"monospace",children:["Threshold = ",u]})]})})(),(()=>{const s=[];for(let t=0;t<=14;t+=.5){const n=p*t+h,a=T(n),d=40+t/14*320,v=200-a*180;s.push(`${d},${v}`)}return e.jsx("polyline",{fill:"none",stroke:"#10b981",strokeWidth:"2.5",points:s.join(" ")})})(),le.map((s,t)=>{const n=40+s.hours/14*320,a=200-s.passed*180;return e.jsx("circle",{cx:n,cy:a,r:"5",fill:s.passed===1?"#34d399":"#f43f5e"},t)}),(()=>{const s=40+g/14*320,t=200-N*180;return e.jsxs("g",{children:[e.jsx("circle",{cx:s,cy:t,r:"6",fill:"#f59e0b",stroke:"#fff",strokeWidth:"1.5"}),e.jsxs("text",{x:s+8,y:t+4,fill:"#fde68a",fontSize:"10",fontFamily:"monospace",children:["P = ",(N*100).toFixed(0),"%"]})]})})()]})})]}),e.jsxs("div",{className:"p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{className:"text-white block mb-1",children:"Key Takeaway:"}),"Use ",e.jsx("strong",{className:"text-cyan-300",children:"LinearRegression"})," when the target is an infinite continuous scale (e.g., salaries, house pricing). Use ",e.jsx("strong",{className:"text-emerald-300",children:"LogisticRegression"})," when the target is a discrete decision (e.g., Pass/Fail, Fraud/Legit), utilizing its probabilistic sigmoid curve."]})]})]})]}),i==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:b.map((s,t)=>e.jsx("button",{onClick:()=>W(t),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${j===t?"bg-cyan-600 text-white shadow-md shadow-cyan-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:s.name},t))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:b[j].name}),e.jsx("button",{onClick:()=>A(b[j].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors",children:R?e.jsxs(e.Fragment,{children:[e.jsx(L,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(F,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:b[j].code})]})]}),i==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(O,{className:"w-5 h-5 text-cyan-400"}),"Classroom Revision Notes: Linear Models"]}),e.jsxs("button",{onClick:()=>A(X),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400",children:[R?e.jsx(L,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(F,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:X})]}),i==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(M,{className:"w-5 h-5 text-cyan-400"}),"Topic 8 Quiz: Linear & Logistic Models"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Check your comprehension of OLS, sigmoid transformations, and Ridge/Lasso regularization."})]}),x&&e.jsxs("div",{className:"px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-cyan-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[Y()," / ",_.length]})]})]}),e.jsx("div",{className:"space-y-6",children:_.map((s,t)=>{f[s.id];const n=f[s.id]===s.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono mt-0.5",children:["Q",t+1]}),e.jsx("span",{children:s.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:s.options.map((a,d)=>{const v=f[s.id]===d;let w="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return x?d===s.correctAnswer?w="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":v&&!n&&(w="bg-rose-500/20 border-rose-500/50 text-rose-200"):v&&(w="bg-cyan-500/20 border-cyan-500/50 text-cyan-200"),e.jsxs("button",{onClick:()=>V(s.id,d),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${w}`,children:[e.jsx("span",{children:a}),x&&d===s.correctAnswer&&e.jsx(L,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},d)})}),x&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-cyan-300 block mb-1",children:"Explanation:"}),s.explanation]})]},s.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:x?e.jsxs("button",{onClick:()=>{z({}),$(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(ne,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>$(!0),disabled:Object.keys(f).length===0,className:"px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-cyan-600/20",children:"Submit Answers"})})]})})]})]})}export{xe as default};
