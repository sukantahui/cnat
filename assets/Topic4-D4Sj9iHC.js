import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{aG as Y,S as U,k as J,B as z,aa as O,aM as Z,aB as ee,cl as se,f as C,g as E,ad as te}from"./vendor-icons-ri6cs58t.js";const re=`"""\r
Topic 4: Preprocessing with sklearn.preprocessing\r
Script 1: Preprocessing Ecosystem & Quick Transformations\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn import preprocessing\r
\r
# Sample dataset representing student metrics in Barrackpore batch\r
raw_data = {\r
    'student': ['Debangshu', 'Susmita', 'Swadeep', 'Tuhina', 'Sachin'],\r
    'study_hours': [12.0, 35.0, 8.0, 24.0, 18.0],\r
    'exam_score': [45, 92, 38, 78, 62],\r
    'passed_test': [0, 1, 0, 1, 1]\r
}\r
df = pd.DataFrame(raw_data)\r
print("--- Raw Input DataFrame ---")\r
print(df)\r
\r
# 1. Binarization: Convert continuous values to 0/1 based on a threshold\r
# E.g., Marking students scoring >= 60 as distinction (1), else 0\r
binarizer = preprocessing.Binarizer(threshold=60.0)\r
scores_2d = df[['exam_score']].values\r
distinction = binarizer.fit_transform(scores_2d)\r
df['distinction_flag'] = distinction\r
\r
# 2. MaxAbsScaler: Scale each feature by its maximum absolute value (keeps sparsity)\r
max_abs = preprocessing.MaxAbsScaler()\r
df['study_hours_maxabs'] = max_abs.fit_transform(df[['study_hours']])\r
\r
# 3. RobustScaler: Scale features using statistics that are robust to outliers (IQR)\r
robust = preprocessing.RobustScaler()\r
df['exam_score_robust'] = robust.fit_transform(df[['exam_score']])\r
\r
print("\\n--- Preprocessed DataFrame ---")\r
print(df[['student', 'study_hours', 'study_hours_maxabs', 'exam_score', 'distinction_flag', 'exam_score_robust']])\r
`,ae=`"""\r
Topic 4: Preprocessing with sklearn.preprocessing\r
Script 2: Comparing PowerTransformer, QuantileTransformer, and PolynomialFeatures\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.preprocessing import PowerTransformer, QuantileTransformer, PolynomialFeatures\r
\r
# Highly skewed synthetic data (e.g. salary distributions)\r
np.random.seed(42)\r
income_data = np.random.exponential(scale=25000, size=(100, 1)) + 15000\r
\r
print(f"Original Income - Min: {income_data.min():.1f}, Max: {income_data.max():.1f}, Mean: {income_data.mean():.1f}")\r
\r
# 1. Box-Cox / Yeo-Johnson Power Transform for Gaussian-like distribution\r
pt = PowerTransformer(method='yeo-johnson')\r
income_gaussian = pt.fit_transform(income_data)\r
print(f"PowerTransformed (Yeo-Johnson) - Mean: {income_gaussian.mean():.4f}, Std: {income_gaussian.std():.4f}")\r
\r
# 2. QuantileTransformer: Map to uniform or normal distribution\r
qt = QuantileTransformer(output_distribution='normal', random_state=42, n_quantiles=50)\r
income_quantiled = qt.fit_transform(income_data)\r
print(f"QuantileTransformed (Normal) - Mean: {income_quantiled.mean():.4f}, Std: {income_quantiled.std():.4f}")\r
\r
# 3. PolynomialFeatures: Generate non-linear interaction terms\r
X_toy = np.array([[2, 3],\r
                  [4, 5]])\r
poly = PolynomialFeatures(degree=2, include_bias=False)\r
X_poly = poly.fit_transform(X_toy)\r
\r
print("\\n--- Polynomial Features Generation ---")\r
print("Original features:\\n", X_toy)\r
print("Polynomial features [x1, x2, x1^2, x1*x2, x2^2]:\\n", X_poly)\r
print("Feature names generated:", poly.get_feature_names_out(['x1', 'x2']))\r
`,ne=`"""\r
Topic 4: Preprocessing with sklearn.preprocessing\r
Script 3: FunctionTransformer and Custom Preprocessing Logic\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.preprocessing import FunctionTransformer\r
\r
# Custom log transformation function handling zero values\r
def safe_log_transform(X):\r
    return np.log1p(np.maximum(0, X))\r
\r
# Inverse log function\r
def safe_expm1_transform(X):\r
    return np.expm1(X)\r
\r
# Sample website traffic data with extreme values\r
traffic_data = np.array([\r
    [0.0],\r
    [10.0],\r
    [100.0],\r
    [1000.0],\r
    [50000.0]\r
])\r
\r
# Create a custom stateless transformer\r
log_transformer = FunctionTransformer(\r
    func=safe_log_transform,\r
    inverse_func=safe_expm1_transform,\r
    validate=True\r
)\r
\r
transformed_traffic = log_transformer.fit_transform(traffic_data)\r
recovered_traffic = log_transformer.inverse_transform(transformed_traffic)\r
\r
print("--- Original Raw Traffic ---")\r
print(traffic_data.flatten())\r
\r
print("\\n--- Log1p Transformed Traffic ---")\r
print(np.round(transformed_traffic.flatten(), 4))\r
\r
print("\\n--- Inverted Back to Original ---")\r
print(np.round(recovered_traffic.flatten(), 1))\r
`,Q=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 4 - PREPROCESSING WITH SKLEARN.PREPROCESSING\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. WHY PREPROCESSING IS CRUCIAL IN MACHINE LEARNING\r
--------------------------------------------------------------------------------\r
Raw real-world data is almost never directly consumable by mathematical ML models.\r
Issues in raw data:\r
- Features on vastly different numerical scales (e.g. Income ₹50,000 vs. Age 24).\r
- Skewed, non-Gaussian probability distributions.\r
- Categorical text attributes (e.g. City: "Barrackpore", "Kolkata").\r
- Presence of extreme outliers.\r
- Linear algorithms unable to model non-linear boundaries without polynomial interaction terms.\r
\r
2. TAXONOMY OF SKLEARN.PREPROCESSING\r
--------------------------------------------------------------------------------\r
A. Feature Scaling & Centering:\r
   - \`StandardScaler\`: Scales features to 0 mean and unit variance (Gaussian standard normal).\r
   - \`MinMaxScaler\`: Scales features to a bounded range, typically [0, 1].\r
   - \`MaxAbsScaler\`: Scales by dividing by the maximum absolute value; preserves zero-entries in sparse matrices.\r
   - \`RobustScaler\`: Centers using median and scales using Interquartile Range (IQR = Q3 - Q1); immune to massive outliers.\r
\r
B. Distribution Transformations:\r
   - \`PowerTransformer\`: Box-Cox (strictly positive data) or Yeo-Johnson (supports negative/zero values) to stabilize variance and achieve normal distribution.\r
   - \`QuantileTransformer\`: Maps data non-linearly to a uniform or normal distribution via empirical quantiles.\r
\r
C. Feature Engineering & Discretization:\r
   - \`PolynomialFeatures\`: Creates interaction pairs ($x_1 \\cdot x_2$) and exponential powers ($x_1^2, x_2^2$) to enrich linear models.\r
   - \`Binarizer\`: Maps continuous numbers into binary flags (0 or 1) according to a threshold.\r
   - \`KBinsDiscretizer\`: Partitions continuous continuous features into discrete ordinal bins.\r
\r
D. Custom Transformations:\r
   - \`FunctionTransformer\`: Wraps an arbitrary Python function (like \`np.log1p\` or \`np.sqrt\`) into a Scikit-learn transformer interface.\r
\r
3. GOLDEN RULE OF PREPROCESSING: AVOIDING DATA LEAKAGE\r
--------------------------------------------------------------------------------\r
Always follow this strict sequencing:\r
1. Split data into \`X_train\` and \`X_test\` FIRST!\r
2. Call \`scaler.fit_transform(X_train)\` on training data ONLY.\r
3. Call \`scaler.transform(X_test)\` on testing data WITHOUT re-fitting.\r
   * NEVER call \`.fit()\` or \`.fit_transform()\` on test/validation data! Doing so leaks the mean/variance of the test set into the model pipeline.\r
\r
4. CLASSROOM Q&A (Sukanta Hui with Students)\r
--------------------------------------------------------------------------------\r
- Question (Susmita): "When should we use RobustScaler instead of StandardScaler?"\r
  Answer: When the dataset has prominent extreme outliers (e.g., house prices with a few ultra-luxury mansions). StandardScaler's mean and variance will be heavily distorted by outliers, whereas RobustScaler relies on median and IQR.\r
- Question (Sachin): "Does MaxAbsScaler shift the mean to zero?"\r
  Answer: No! MaxAbsScaler does not center the data; it only divides by the absolute max. This is why it works efficiently on sparse scipy matrices without destroying zero values.\r
================================================================================\r
`,T=[{id:1,question:"Which scaler from `sklearn.preprocessing` is best suited for datasets containing severe outliers because it relies on the median and Interquartile Range (IQR)?",options:["StandardScaler","MinMaxScaler","RobustScaler","Normalizer"],correctAnswer:2,explanation:"RobustScaler removes the median and scales the data according to the Interquartile Range (IQR between the 25th and 75th quantiles), making it far less sensitive to outliers than mean-based scalers."},{id:2,question:"What is data leakage in the context of preprocessing?",options:["When training data is accidentally deleted from disk during transformation","When information from the test dataset (e.g. mean, variance, max) is learned by the preprocessor during `.fit()`","When memory overflows due to high-dimensional polynomial features","When categorical variables are encoded with negative integers"],correctAnswer:1,explanation:"Data leakage occurs when parameters (such as mean, std dev, or min/max bounds) are calculated across the entire dataset or test dataset, allowing test set knowledge to contaminate model training."},{id:3,question:"If `X` has two features `[x1, x2]`, what features will `PolynomialFeatures(degree=2, include_bias=False)` produce?",options:["[x1, x2, x1 + x2]","[x1, x2, x1^2, x1*x2, x2^2]","[x1^2, x2^2]","[1, x1, x2, x1^2]"],correctAnswer:1,explanation:"PolynomialFeatures of degree 2 without bias generates the original terms `[x1, x2]`, interaction terms `[x1*x2]`, and squared terms `[x1^2, x2^2]`, yielding 5 total features."},{id:4,question:"What utility class in `sklearn.preprocessing` allows wrapping an arbitrary custom Python function (like `np.log1p`) into a Scikit-learn transformer?",options:["FunctionTransformer","CustomPreprocessor","LambdaTransformer","UserDefinedEstimator"],correctAnswer:0,explanation:"sklearn.preprocessing.FunctionTransformer constructs a transformer from an arbitrary callable, enabling easy integration of stateless transformations into Scikit-learn pipelines."}],B=[{name:"Debangshu",hours:12,score:45},{name:"Susmita",hours:35,score:92},{name:"Swadeep",hours:8,score:38},{name:"Tuhina",hours:24,score:78},{name:"Sachin",hours:18,score:62},{name:"Mahima",hours:28,score:84},{name:"Abhronila",hours:15,score:55}];function ce(){const[o,h]=i.useState("interactive"),[b,$]=i.useState(0),[R,P]=i.useState(!1),[r,D]=i.useState("standard"),[y,L]=i.useState(150),[j,q]=i.useState(!1),[c,W]=i.useState(60),[m,I]=i.useState({}),[d,M]=i.useState(!1),x=[{name:"01_preprocessing_overview.py",code:re},{name:"02_numeric_scaling_and_binarizer.py",code:ae},{name:"03_imputation_and_pipeline_prep.py",code:ne}],A=s=>{navigator.clipboard.writeText(s),P(!0),setTimeout(()=>P(!1),2e3)},G=(s,t)=>{d||I(a=>({...a,[s]:t}))},X=()=>{let s=0;return T.forEach(t=>{m[t.id]===t.correctAnswer&&s++}),s},N=j?[...B,{name:"Outlier Case",hours:45,score:y}]:B,l=N.map(s=>s.score),f=l.reduce((s,t)=>s+t,0)/l.length,v=Math.sqrt(l.map(s=>Math.pow(s-f,2)).reduce((s,t)=>s+t,0)/l.length),u=Math.min(...l),w=Math.max(...l),n=[...l].sort((s,t)=>s-t),k=Math.floor(n.length/2),S=n.length%2!==0?n[k]:(n[k-1]+n[k])/2,H=n[Math.floor(n.length*.25)],_=n[Math.floor(n.length*.75)]-H||1,V=N.map(s=>{let t=0,a="";return r==="standard"?(t=(s.score-f)/(v||1),a=`z = (x - ${f.toFixed(1)}) / ${v.toFixed(1)}`):r==="minmax"?(t=(s.score-u)/(w-u||1),a=`(x - ${u}) / (${w} - ${u})`):r==="robust"?(t=(s.score-S)/_,a=`(x - ${S.toFixed(1)}) / IQR(${_.toFixed(1)})`):r==="binarizer"?(t=s.score>=c?1:0,a=`x >= ${c} ? 1 : 0`):r==="poly"&&(t=Math.pow(s.score/10,2),a=`(score/10)^2 = ${t.toFixed(1)}`),{...s,transformed:typeof t=="number"?t.toFixed(2):t,desc:a}});return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-sky-500/20 rounded-xl text-sky-400 border border-sky-500/30",children:e.jsx(Y,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20",children:"Topic 4 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.preprocessing"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Data Preprocessing & Feature Transformations"})]})]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:["Explore the rich arsenal of ",e.jsx("code",{className:"text-sky-300 font-mono",children:"sklearn.preprocessing"})," tools. Understand when and why to apply scaling, robust transformations, discretization, and polynomial feature expansions."]})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>h("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${o==="interactive"?"border-sky-400 text-sky-400 bg-sky-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(U,{className:"w-4 h-4"}),"Preprocessing Studio"]}),e.jsxs("button",{onClick:()=>h("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${o==="code"?"border-sky-400 text-sky-400 bg-sky-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(J,{className:"w-4 h-4"}),"Python Code Lab (",x.length,")"]}),e.jsxs("button",{onClick:()=>h("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${o==="notes"?"border-sky-400 text-sky-400 bg-sky-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(z,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>h("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${o==="quiz"?"border-sky-400 text-sky-400 bg-sky-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(O,{className:"w-4 h-4"}),"Knowledge Check"]})]}),o==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2.5",children:[{id:"standard",name:"StandardScaler",desc:"Z-score (μ=0, σ=1)"},{id:"minmax",name:"MinMaxScaler",desc:"Bounded in [0, 1]"},{id:"robust",name:"RobustScaler",desc:"Median & IQR (Outlier Proof)"},{id:"binarizer",name:"Binarizer",desc:"Threshold to 0 or 1"},{id:"poly",name:"PolynomialFeatures",desc:"Power / Interaction Terms"}].map(s=>e.jsxs("button",{onClick:()=>D(s.id),className:`p-3 rounded-xl border text-left transition-all ${r===s.id?"bg-sky-500/15 border-sky-500/60 shadow-lg shadow-sky-950/50":"bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("div",{className:"font-semibold text-slate-200 text-xs font-mono",children:s.name}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:s.desc})]},s.id))}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(Z,{className:"w-4 h-4 text-sky-400"}),"Experiment Controls"]}),e.jsxs("div",{className:"p-3.5 bg-slate-950/80 rounded-lg border border-slate-800/80 mb-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-medium text-slate-200 flex items-center gap-1.5",children:[e.jsx(ee,{className:"w-3.5 h-3.5 text-amber-400"}),"Inject Extreme Outlier"]}),e.jsx("input",{type:"checkbox",checked:j,onChange:s=>q(s.target.checked),className:"w-4 h-4 rounded text-sky-500 focus:ring-sky-400 bg-slate-900 border-slate-700"})]}),j&&e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[e.jsx("span",{children:"Outlier Score Value:"}),e.jsx("span",{className:"font-mono text-amber-300",children:y})]}),e.jsx("input",{type:"range",min:"100",max:"300",step:"10",value:y,onChange:s=>L(Number(s.target.value)),className:"w-full accent-amber-400 cursor-pointer"})]})]}),r==="binarizer"&&e.jsxs("div",{className:"p-3.5 bg-slate-950/80 rounded-lg border border-slate-800/80 mb-4 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[e.jsx("span",{children:"Binarizer Threshold:"}),e.jsx("span",{className:"font-mono text-sky-300 font-bold",children:c})]}),e.jsx("input",{type:"range",min:"40",max:"90",step:"5",value:c,onChange:s=>W(Number(s.target.value)),className:"w-full accent-sky-400 cursor-pointer"}),e.jsxs("div",{className:"text-[11px] text-slate-400",children:["Values >= ",c," become ",e.jsx("strong",{className:"text-emerald-400",children:"1"}),", otherwise ",e.jsx("strong",{className:"text-slate-400",children:"0"}),"."]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950/60 rounded-lg border border-slate-800 font-mono text-xs space-y-1.5 text-slate-300",children:[e.jsx("div",{className:"text-slate-400 font-semibold mb-1",children:"Dataset Statistics:"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Mean (μ):"}),e.jsx("span",{className:"text-sky-300",children:f.toFixed(2)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Std Dev (σ):"}),e.jsx("span",{className:"text-sky-300",children:v.toFixed(2)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Median / IQR:"}),e.jsxs("span",{className:"text-emerald-300",children:[S.toFixed(1)," / ",_.toFixed(1)]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Min / Max:"}),e.jsxs("span",{className:"text-amber-300",children:[u," / ",w]})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-xs space-y-2",children:[e.jsx("div",{className:"font-semibold text-slate-300",children:"Formula in action:"}),e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded font-mono text-sky-300 border border-slate-800",children:[r==="standard"&&"z = (x - mean) / standard_deviation",r==="minmax"&&"x_scaled = (x - min) / (max - min)",r==="robust"&&"x_robust = (x - median) / IQR",r==="binarizer"&&`f(x) = 1 if x >= ${c} else 0`,r==="poly"&&"f(x) = x^2 (degree=2 non-linear expansion)"]})]})]}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5 overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(se,{className:"w-4 h-4 text-sky-400"}),"Live Preprocessing Transformation Table"]}),e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[N.length," samples"]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-400 font-mono border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2.5",children:"Student"}),e.jsx("th",{className:"p-2.5",children:"Study Hrs"}),e.jsx("th",{className:"p-2.5",children:"Raw Score"}),e.jsx("th",{className:"p-2.5 text-sky-400",children:"Transformed Output"}),e.jsx("th",{className:"p-2.5 text-slate-400",children:"Calculation"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 font-mono",children:V.map((s,t)=>e.jsxs("tr",{className:`hover:bg-slate-800/40 transition-colors ${s.name.includes("Outlier")?"bg-amber-500/10 text-amber-200":""}`,children:[e.jsx("td",{className:"p-2.5 font-sans font-medium text-slate-200",children:s.name}),e.jsxs("td",{className:"p-2.5 text-slate-400",children:[s.hours,"h"]}),e.jsx("td",{className:"p-2.5 text-slate-300 font-semibold",children:s.score}),e.jsx("td",{className:"p-2.5 text-sky-300 font-bold bg-sky-500/5",children:s.transformed}),e.jsx("td",{className:"p-2.5 text-[11px] text-slate-400 truncate max-w-[150px]",children:s.desc})]},t))})]})})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-sky-950/30 to-slate-900 border border-sky-500/20 rounded-xl text-xs text-slate-300 leading-relaxed",children:[e.jsxs("strong",{className:"text-white block mb-1",children:[r==="robust"&&"Why RobustScaler shines here:",r==="standard"&&"Notice StandardScaler behavior:",r==="minmax"&&"Notice MinMaxScaler behavior:",r==="binarizer"&&"Notice Binarizer behavior:",r==="poly"&&"Notice Polynomial expansion:"]}),r==="robust"&&"When the outlier is enabled, notice how the scores for Debangshu and Susmita remain well-scaled because the median & IQR are unaffected by the 150+ outlier!",r==="standard"&&"When an outlier is injected, the mean shifts upward and standard deviation inflates, dragging all ordinary scores towards negative z-scores.",r==="minmax"&&"MinMaxScaler compresses the normal range into a tiny cluster near 0 when an extreme upper outlier is introduced.",r==="binarizer"&&"Converts quantitative grades into a binary classification flag (e.g. Pass/Distinction thresholding).",r==="poly"&&"Generates non-linear transformations allowing linear models (LinearRegression / LogisticRegression) to learn parabolic decision boundaries."]})]})]})]}),o==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:x.map((s,t)=>e.jsx("button",{onClick:()=>$(t),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${b===t?"bg-sky-600 text-white shadow-md shadow-sky-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:s.name},t))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:x[b].name}),e.jsx("button",{onClick:()=>A(x[b].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-400 transition-colors",children:R?e.jsxs(e.Fragment,{children:[e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:x[b].code})]})]}),o==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(z,{className:"w-5 h-5 text-sky-400"}),"Classroom Revision Notes: sklearn.preprocessing"]}),e.jsxs("button",{onClick:()=>A(Q),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-400",children:[R?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(E,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:Q})]}),o==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(O,{className:"w-5 h-5 text-sky-400"}),"Topic 4 Quiz: Preprocessing Concepts"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Evaluate your knowledge of scalers, transformers, and data leakage safeguards."})]}),d&&e.jsxs("div",{className:"px-4 py-2 bg-sky-500/20 border border-sky-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-sky-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[X()," / ",T.length]})]})]}),e.jsx("div",{className:"space-y-6",children:T.map((s,t)=>{m[s.id];const a=m[s.id]===s.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono mt-0.5",children:["Q",t+1]}),e.jsx("span",{children:s.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:s.options.map((K,p)=>{const F=m[s.id]===p;let g="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return d?p===s.correctAnswer?g="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":F&&!a&&(g="bg-rose-500/20 border-rose-500/50 text-rose-200"):F&&(g="bg-sky-500/20 border-sky-500/50 text-sky-200"),e.jsxs("button",{onClick:()=>G(s.id,p),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${g}`,children:[e.jsx("span",{children:K}),d&&p===s.correctAnswer&&e.jsx(C,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},p)})}),d&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-sky-300 block mb-1",children:"Explanation:"}),s.explanation]})]},s.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:d?e.jsxs("button",{onClick:()=>{I({}),M(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(te,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>M(!0),disabled:Object.keys(m).length===0,className:"px-6 py-2.5 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-sky-600/20",children:"Submit Answers"})})]})})]})]})}export{ce as default};
