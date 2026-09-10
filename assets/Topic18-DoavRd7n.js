import{b as t,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{_ as z,S as F,k as H,B as w,aa as R,aM as q,a7 as D,f as g,g as C,ad as K}from"./vendor-icons-DFC0rBCP.js";const W=`"""\r
Topic 18: Worked Example 2 (End-to-End Regression)\r
Script 1: Complete Regression Pipeline on Real-World Student Salary Data\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.model_selection import train_test_split, cross_val_score\r
from sklearn.compose import ColumnTransformer\r
from sklearn.pipeline import Pipeline\r
from sklearn.preprocessing import StandardScaler, OneHotEncoder\r
from sklearn.linear_model import Ridge\r
from sklearn.ensemble import RandomForestRegressor\r
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score\r
\r
# 1. Dataset: Graduate Student Attributes -> Starting Annual Salary (INR in Lakhs)\r
data = {\r
    'study_hours_weekly': [15, 25, 10, 30, 20, 28, 12, 35, 18, 22],\r
    'project_count': [2, 5, 1, 6, 3, 5, 1, 7, 2, 4],\r
    'certifications': ['Basic', 'Advanced', 'None', 'Advanced', 'Intermediate', 'Advanced', 'None', 'Advanced', 'Basic', 'Intermediate'],\r
    'location': ['Barrackpore', 'Kolkata', 'Barrackpore', 'Kolkata', 'Shyamnagar', 'Kolkata', 'Barrackpore', 'Kolkata', 'Barrackpore', 'Shyamnagar'],\r
    'salary_lakhs': [4.2, 8.5, 3.2, 11.0, 6.0, 9.8, 3.5, 12.5, 5.0, 7.2]\r
}\r
df = pd.DataFrame(data)\r
X = df.drop(columns=['salary_lakhs'])\r
y = df['salary_lakhs']\r
\r
# 2. Train-Test Split (80/20)\r
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\r
\r
# 3. Preprocessor with ColumnTransformer\r
num_cols = ['study_hours_weekly', 'project_count']\r
cat_cols = ['certifications', 'location']\r
\r
preprocessor = ColumnTransformer(\r
    transformers=[\r
        ('num', StandardScaler(), num_cols),\r
        ('cat', OneHotEncoder(drop='first', handle_unknown='ignore'), cat_cols)\r
    ]\r
)\r
\r
# 4. Master Regression Pipeline\r
reg_pipe = Pipeline([\r
    ('prep', preprocessor),\r
    ('reg', Ridge(alpha=1.0))\r
])\r
\r
# 5. Cross-Validation (Negative Root Mean Squared Error)\r
cv_rmse = -cross_val_score(reg_pipe, X_train, y_train, cv=3, scoring='neg_root_mean_squared_error')\r
print(f"3-Fold Cross-Validated RMSE: ₹{cv_rmse.mean():.2f} Lakhs (±{cv_rmse.std():.2f})")\r
\r
# 6. Fit and evaluate on Test Set\r
reg_pipe.fit(X_train, y_train)\r
y_pred = reg_pipe.predict(X_test)\r
\r
print("\\n--- Test Set Metrics ---")\r
print(f"MAE:  ₹{mean_absolute_error(y_test, y_pred):.2f} Lakhs")\r
print(f"RMSE: ₹{np.sqrt(mean_squared_error(y_test, y_pred)):.2f} Lakhs")\r
print(f"R2:   {r2_score(y_test, y_pred):.4f}")\r
`,G=`"""\r
Topic 18: Worked Example 2 (End-to-End Regression)\r
Script 2: Multi-Regressor Benchmark & Ridge Alpha Tuning\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import pandas as pd\r
from sklearn.datasets import fetch_california_housing\r
from sklearn.model_selection import KFold, cross_val_score, GridSearchCV\r
from sklearn.preprocessing import StandardScaler\r
from sklearn.pipeline import Pipeline\r
from sklearn.linear_model import LinearRegression, Ridge, Lasso\r
from sklearn.ensemble import RandomForestRegressor\r
\r
# Fetch real regression dataset\r
X, y = fetch_california_housing(return_X_y=True)\r
# Subsample 1000 records for fast classroom demo\r
X, y = X[:1000], y[:1000]\r
\r
regressors = {\r
    'Linear Regression': LinearRegression(),\r
    'Ridge (alpha=1.0)': Ridge(alpha=1.0),\r
    'Lasso (alpha=0.1)': Lasso(alpha=0.1),\r
    'Random Forest (50 trees)': RandomForestRegressor(n_estimators=50, random_state=42)\r
}\r
\r
cv = KFold(n_splits=5, shuffle=True, random_state=42)\r
records = []\r
\r
for name, model in regressors.items():\r
    pipe = Pipeline([('scaler', StandardScaler()), ('reg', model)])\r
    r2_scores = cross_val_score(pipe, X, y, cv=cv, scoring='r2')\r
    rmse_scores = -cross_val_score(pipe, X, y, cv=cv, scoring='neg_root_mean_squared_error')\r
    records.append({\r
        'Model': name,\r
        'Mean R2': f"{r2_scores.mean():.4f} (±{r2_scores.std():.3f})",\r
        'Mean RMSE': f"{rmse_scores.mean():.4f}"\r
    })\r
\r
print("--- Regression Benchmark Leaderboard ---")\r
print(pd.DataFrame(records).to_string(index=False))\r
`,V=`"""\r
Topic 18: Worked Example 2 (End-to-End Regression)\r
Script 3: Residual Analysis & Production Prediction\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.pipeline import make_pipeline\r
from sklearn.preprocessing import StandardScaler\r
from sklearn.linear_model import Ridge\r
\r
# Train data\r
X_train = np.array([[10], [15], [20], [25], [30], [35]])\r
y_train = np.array([3.2, 4.5, 6.0, 8.2, 9.8, 12.0]) # Salary in Lakhs\r
\r
model = make_pipeline(StandardScaler(), Ridge(alpha=0.5))\r
model.fit(X_train, y_train)\r
\r
# 1. Residual Analysis (Check if residuals are zero-centered and randomly distributed)\r
train_preds = model.predict(X_train)\r
residuals = y_train - train_preds\r
\r
print("--- Residual Diagnostics ---")\r
for x, true_val, pred_val, res in zip(X_train.flatten(), y_train, train_preds, residuals):\r
    print(f"Hours: {x:2d}h | True: ₹{true_val:.1f}L | Pred: ₹{pred_val:.2f}L | Residual: {res:+.2f}")\r
\r
print(f"\\nMean Residual: {residuals.mean():.4f} (Ideal is ~0)")\r
print(f"Max Absolute Error: ₹{np.max(np.abs(residuals)):.2f} Lakhs")\r
\r
# 2. Production Inference on New Student\r
X_new = np.array([[22], [32]])\r
new_predictions = model.predict(X_new)\r
\r
print("\\n--- Production Inferences ---")\r
for hours, pred_salary in zip(X_new.flatten(), new_predictions):\r
    print(f"Student studying {hours} hrs/week -> Expected Placement: ₹{pred_salary:.2f} Lakhs/annum")\r
`,E=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 18 - WORKED EXAMPLE 2 (REGRESSION)\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. END-TO-END REGRESSION BLUEPRINT\r
--------------------------------------------------------------------------------\r
1. Problem Framing:\r
   - Identify continuous numerical target variable $y$ (e.g. Salary in ₹ Lakhs, House Price).\r
2. Data Preprocessing:\r
   - Numeric columns: Impute missing entries -> Apply \`StandardScaler\`.\r
   - Categorical columns: Apply \`OneHotEncoder(drop='first', handle_unknown='ignore')\`.\r
3. Candidate Model Exploration:\r
   - Evaluate Linear Regression, Regularized Ridge ($L_2$), Lasso ($L_1$), and Non-linear Ensembles (Random Forest / Gradient Boosting).\r
4. Performance Metrics:\r
   - Evaluate with \`neg_root_mean_squared_error\` and \`r2\` across 5-Fold Cross-Validation.\r
5. Residual Diagnostics:\r
   - Plot Residuals ($y - \\hat{y}$) against predicted values.\r
   - Good models exhibit randomly scattered residuals centered around 0 with uniform spread (homoscedasticity).\r
\r
2. PRACTICAL REGRESSION GOTCHAS\r
--------------------------------------------------------------------------------\r
- Scoring Parameter Sign Convention:\r
  In Scikit-learn, cross-validation metrics follow the "higher is better" rule. Therefore, error functions are negated:\r
  \`scoring='neg_mean_squared_error'\` or \`scoring='neg_root_mean_squared_error'\`. Remember to negate the output to obtain positive errors!\r
- Multicollinearity:\r
  When using Linear Regression with one-hot encoded columns, always pass \`drop='first'\` to prevent linear dependency traps.\r
\r
3. CLASSROOM ADVICE (Sukanta Hui)\r
--------------------------------------------------------------------------------\r
"Never deliver a regression project without displaying the Mean Absolute Error (MAE) in real rupee terms. Business managers need to know: 'On average, our prediction is off by ₹25,000.'"\r
================================================================================\r
`,f=[{id:1,question:"Why does Scikit-learn prefix regression loss scoring metrics with 'neg_' (e.g. `scoring='neg_mean_squared_error'`) during cross-validation?",options:["Because Scikit-learn algorithms only optimize negative numbers","Because Scikit-learn enforces a unified convention where higher scores are always considered better for model selection and grid search optimization","To prevent division by zero in gradient descent","Because mean squared error is always negative in Python"],correctAnswer:1,explanation:"Scikit-learn design rules dictate that higher score values represent better performance. By negating loss metrics like MSE or RMSE, minimizing positive loss becomes equivalent to maximizing negative loss."},{id:2,question:"In residual analysis of a regression model, what visual pattern on a residual plot ($y - \\hat{y}$ vs $\\hat{y}$) indicates a healthy, well-fitted linear model?",options:["A clear parabolic U-shaped curve","A random, symmetric cloud of points scattered evenly around the zero horizontal line without discernible patterns or funneling","All residuals lined up along a 45-degree diagonal","Residuals strictly positive across all predictions"],correctAnswer:1,explanation:"A well-specified regression model generates residuals that are randomly distributed around zero with constant variance (homoscedasticity) and no systematic patterns."},{id:3,question:"Why is `drop='first'` commonly configured in `OneHotEncoder` when training a linear regression model on multi-category features?",options:["To drop 50% of the training dataset rows to speed up fitting","To eliminate linear dependency among dummy columns, avoiding the Dummy Variable Trap (multicollinearity)","Because LinearRegression does not accept more than 1 column","To force all coefficients to equal 1.0"],correctAnswer:1,explanation:"Since the sum of all one-hot columns equals 1, keeping all K columns creates exact multicollinearity with the intercept term. Dropping the first column removes this linear dependency."},{id:4,question:"What is the primary difference between Ridge regression and Ordinary Least Squares (OLS) Linear Regression?",options:["Ridge regression adds an L2 regularization penalty ($alpha sum w_i^2$) to shrink weights and prevent overfitting on correlated features","Ridge regression outputs categorical classifications","OLS requires GPU acceleration while Ridge runs on CPU","Ridge regression automatically drops missing values"],correctAnswer:0,explanation:"Ridge regression introduces an L2 penalty on coefficient magnitudes, keeping weights small and stable even when input features are highly correlated or noisy."}],Q=[{name:"Random Forest Regressor",r2:"0.912",rmse:"₹0.65L",mae:"₹0.48L",icon:"🌲"},{name:"Ridge Regression (α=1.0)",r2:"0.884",rmse:"₹0.78L",mae:"₹0.58L",icon:"📈"},{name:"Linear Regression (OLS)",r2:"0.875",rmse:"₹0.82L",mae:"₹0.62L",icon:"📐"},{name:"Lasso Regression (α=0.1)",r2:"0.840",rmse:"₹0.95L",mae:"₹0.71L",icon:"✂️"}];function Y(){const[a,d]=t.useState("interactive"),[c,L]=t.useState(0),[y,v]=t.useState(!1),[p,A]=t.useState(24),[x,T]=t.useState(4),[u,P]=t.useState("Advanced"),[h,M]=t.useState("Kolkata"),[o,_]=t.useState({}),[n,j]=t.useState(!1),i=[{name:"01_end_to_end_regression.py",code:W},{name:"02_regressor_benchmark_and_tuning.py",code:G},{name:"03_residual_analysis_and_export.py",code:V}],N=r=>{navigator.clipboard.writeText(r),v(!0),setTimeout(()=>v(!1),2e3)},B=(r,s)=>{n||_(b=>({...b,[r]:s}))},I=()=>{let r=0;return f.forEach(s=>{o[s.id]===s.correctAnswer&&r++}),r},O=u==="Advanced"?2.4:u==="Basic"?1.1:0,X=h==="Kolkata"?1.2:h==="Barrackpore"?.6:.2,k=2.2+p*.18+x*.65+O+X;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-blue-500/20 rounded-xl text-blue-400 border border-blue-500/30",children:e.jsx(z,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20",children:"Topic 18 • Worked Example 2"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"End-to-End Regression"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Case Study: Placement Salary Expectation Regressor"})]})]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:"Explore continuous salary estimation in production. Learn how to combine numerical study indicators and one-hot categorical features in a single Scikit-learn Pipeline to predict annual placement packages."})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>d("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="interactive"?"border-blue-400 text-blue-400 bg-blue-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(F,{className:"w-4 h-4"}),"Live Salary Studio"]}),e.jsxs("button",{onClick:()=>d("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="code"?"border-blue-400 text-blue-400 bg-blue-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(H,{className:"w-4 h-4"}),"Python Code Lab (",i.length,")"]}),e.jsxs("button",{onClick:()=>d("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="notes"?"border-blue-400 text-blue-400 bg-blue-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(w,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>d("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="quiz"?"border-blue-400 text-blue-400 bg-blue-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(R,{className:"w-4 h-4"}),"Knowledge Check"]})]}),a==="interactive"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(q,{className:"w-4 h-4 text-blue-400"}),"Student Profile Attributes"]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Weekly Lab & Study Hours:"}),e.jsxs("span",{className:"font-mono text-blue-300 font-bold",children:[p," hrs/week"]})]}),e.jsx("input",{type:"range",min:"5",max:"40",value:p,onChange:r=>A(Number(r.target.value)),className:"w-full accent-blue-400 cursor-pointer"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Portfolio Projects Built:"}),e.jsxs("span",{className:"font-mono text-blue-300 font-bold",children:[x," projects"]})]}),e.jsx("input",{type:"range",min:"0",max:"10",value:x,onChange:r=>T(Number(r.target.value)),className:"w-full accent-blue-400 cursor-pointer"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-xs text-slate-300 mb-1.5",children:"Certification Level:"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:["None","Basic","Advanced"].map(r=>e.jsx("button",{onClick:()=>P(r),className:`py-2 rounded-lg text-xs font-semibold transition-all border ${u===r?"bg-blue-500/20 border-blue-500/60 text-blue-300":"bg-slate-950 border-slate-800 text-slate-400"}`,children:r},r))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-slate-300 mb-1.5",children:"Job Location:"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:["Barrackpore","Kolkata","Shyamnagar"].map(r=>e.jsx("button",{onClick:()=>M(r),className:`py-2 rounded-lg text-xs font-semibold transition-all border ${h===r?"bg-blue-500/20 border-blue-500/60 text-blue-300":"bg-slate-950 border-slate-800 text-slate-400"}`,children:r},r))})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"Pipeline Predicted Annual Package:"}),e.jsxs("div",{className:"text-3xl font-extrabold font-mono text-emerald-400 flex items-center gap-1",children:[e.jsxs("span",{children:["₹",k.toFixed(2)]}),e.jsx("span",{className:"text-sm font-sans font-medium text-slate-400",children:"Lakhs / annum"})]}),e.jsxs("div",{className:"text-[11px] text-slate-500 font-mono mt-1",children:["Monthly Gross: ~₹",Math.round(k*1e5/12).toLocaleString()," / month"]})]})]}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(D,{className:"w-4 h-4 text-blue-400"}),"5-Fold Cross-Validated Regressor Leaderboard"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-400 font-mono border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2.5",children:"Candidate Model"}),e.jsx("th",{className:"p-2.5 text-emerald-400",children:"R² Score"}),e.jsx("th",{className:"p-2.5 text-amber-400",children:"RMSE"}),e.jsx("th",{className:"p-2.5 text-sky-400",children:"MAE"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 font-mono",children:Q.map((r,s)=>e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsxs("td",{className:"p-2.5 font-sans font-medium text-slate-200 flex items-center gap-2",children:[e.jsx("span",{children:r.icon}),e.jsx("span",{children:r.name})]}),e.jsx("td",{className:"p-2.5 text-emerald-300 font-bold bg-emerald-500/5",children:r.r2}),e.jsx("td",{className:"p-2.5 text-amber-300 font-semibold",children:r.rmse}),e.jsx("td",{className:"p-2.5 text-sky-300",children:r.mae})]},s))})]})})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5 font-mono text-xs space-y-2 text-slate-300",children:[e.jsx("div",{className:"text-slate-400 font-sans font-semibold",children:"End-to-End Pipeline Blueprint:"}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1.5",children:[e.jsx("div",{className:"text-blue-400 font-bold",children:"1. ColumnTransformer:"}),e.jsx("div",{className:"pl-4 text-slate-400",children:"• num: ['study_hours', 'projects'] → StandardScaler()"}),e.jsx("div",{className:"pl-4 text-slate-400",children:"• cat: ['certifications', 'location'] → OneHotEncoder(drop='first')"}),e.jsx("div",{className:"text-blue-400 font-bold pt-1",children:"2. Regressor:"}),e.jsx("div",{className:"pl-4 text-emerald-400",children:"• Ridge(alpha=1.0)"})]})]})]})]})}),a==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:i.map((r,s)=>e.jsx("button",{onClick:()=>L(s),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${c===s?"bg-blue-600 text-white shadow-md shadow-blue-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:r.name},s))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:i[c].name}),e.jsx("button",{onClick:()=>N(i[c].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors",children:y?e.jsxs(e.Fragment,{children:[e.jsx(g,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(C,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:i[c].code})]})]}),a==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(w,{className:"w-5 h-5 text-blue-400"}),"Classroom Revision Notes: Worked Example 2 (Regression)"]}),e.jsxs("button",{onClick:()=>N(E),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400",children:[y?e.jsx(g,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(C,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:E})]}),a==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(R,{className:"w-5 h-5 text-blue-400"}),"Topic 18 Quiz: End-to-End Regression"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Evaluate your knowledge of regression pipelines, negative scoring metrics, and residual diagnostics."})]}),n&&e.jsxs("div",{className:"px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-blue-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[I()," / ",f.length]})]})]}),e.jsx("div",{className:"space-y-6",children:f.map((r,s)=>{o[r.id];const b=o[r.id]===r.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono mt-0.5",children:["Q",s+1]}),e.jsx("span",{children:r.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:r.options.map(($,l)=>{const S=o[r.id]===l;let m="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return n?l===r.correctAnswer?m="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":S&&!b&&(m="bg-rose-500/20 border-rose-500/50 text-rose-200"):S&&(m="bg-blue-500/20 border-blue-500/50 text-blue-200"),e.jsxs("button",{onClick:()=>B(r.id,l),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${m}`,children:[e.jsx("span",{children:$}),n&&l===r.correctAnswer&&e.jsx(g,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},l)})}),n&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-blue-300 block mb-1",children:"Explanation:"}),r.explanation]})]},r.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:n?e.jsxs("button",{onClick:()=>{_({}),j(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(K,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>j(!0),disabled:Object.keys(o).length===0,className:"px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-blue-600/20",children:"Submit Answers"})})]})})]})]})}export{Y as default};
