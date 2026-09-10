import{b as c,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as w}from"./PythonFileLoader-CiS1GfkF.js";import{F as C}from"./FAQTemplate-D_90hN4m.js";import{P as T}from"./PlainTextPrint-yt10TRX1.js";import{T as S}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const k=`"""\r
01_multivariate_classification_clusters.py\r
==========================================\r
Worked Example 4: Synthesizing Multi-Class Gaussian Clusters via multivariate_normal\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def generate_gaussian_clusters(n_samples_per_class: int = 50, seed: int = 42):\r
    """Generates 3 distinct 2D Gaussian clusters for classification benchmarks."""\r
    rng = np.random.default_rng(seed=seed)\r
    \r
    # Class 0: Center at (-3.0, -3.0), Covariance spherical\r
    mean_0 = [-3.0, -3.0]\r
    cov_0  = [[1.0, 0.2], [0.2, 1.0]]\r
    X_0 = rng.multivariate_normal(mean=mean_0, cov=cov_0, size=n_samples_per_class)\r
    y_0 = np.zeros(n_samples_per_class, dtype=int)\r
    \r
    # Class 1: Center at (3.0, 3.0), Diagonal Covariance\r
    mean_1 = [3.0, 3.0]\r
    cov_1  = [[1.2, -0.4], [-0.4, 1.2]]\r
    X_1 = rng.multivariate_normal(mean=mean_1, cov=cov_1, size=n_samples_per_class)\r
    y_1 = np.ones(n_samples_per_class, dtype=int)\r
    \r
    # Class 2: Center at (0.0, 4.0), Elliptical Covariance\r
    mean_2 = [0.0, 4.0]\r
    cov_2  = [[0.8, 0.0], [0.0, 0.8]]\r
    X_2 = rng.multivariate_normal(mean=mean_2, cov=cov_2, size=n_samples_per_class)\r
    y_2 = np.full(n_samples_per_class, fill_value=2, dtype=int)\r
    \r
    # Vertically stack all clusters: (150, 2)\r
    X = np.vstack((X_0, X_1, X_2))\r
    y = np.concatenate((y_0, y_1, y_2))\r
    \r
    # Shuffle synchronously using permutation indices\r
    perm = rng.permutation(len(X))\r
    return X[perm], y[perm]\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 4: MULTIVARIATE GAUSSIAN CLUSTER GENERATION")\r
    print("=" * 70)\r
\r
    X, y = generate_gaussian_clusters(n_samples_per_class=4, seed=42)\r
    print(f"Total Dataset Shape: X={X.shape}, y={y.shape}")\r
    print("\\nSynthesized Feature Matrix X (Top 8 samples):\\n", np.round(X[:8], 3))\r
    print("\\nClass Labels y (Top 8 samples):\\n", y[:8])\r
\r
    # Class balance check\r
    unique, counts = np.unique(y, return_counts=True)\r
    print("\\nClass Distribution:", dict(zip(unique, counts)))\r
\r
if __name__ == "__main__":\r
    main()\r
`,M=`"""\r
02_synthetic_polynomial_regression_pipeline.py\r
==============================================\r
Worked Example 4: Synthesizing Non-Linear Polynomial Regression Data & Expansion\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def generate_polynomial_data(N: int = 100, noise_std: float = 2.0, seed: int = 42):\r
    """Generates non-linear curve: y = 0.5*x^2 - 3.0*x + 5.0 + Gaussian Noise."""\r
    rng = np.random.default_rng(seed=seed)\r
    \r
    # 1D feature x sampled uniformly between [-5, 10]\r
    x = rng.uniform(-5.0, 10.0, size=(N, 1))\r
    \r
    # True non-linear ground truth function\r
    y_true = 0.5 * (x ** 2) - 3.0 * x + 5.0\r
    \r
    # Additive Gaussian noise\r
    noise = rng.normal(loc=0.0, scale=noise_std, size=(N, 1))\r
    y_noisy = y_true + noise\r
    \r
    return x, y_noisy.ravel(), y_true.ravel()\r
\r
def polynomial_features_degree_2(x: np.ndarray) -> np.ndarray:\r
    """Manually expands 1D feature x into design matrix [1, x, x^2]."""\r
    ones = np.ones_like(x)\r
    x_squared = x ** 2\r
    # np.hstack to join (N, 1), (N, 1), (N, 1) => (N, 3)\r
    return np.hstack((ones, x, x_squared))\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 4: SYNTHETIC POLYNOMIAL REGRESSION DATASET")\r
    print("=" * 70)\r
\r
    x, y_noisy, y_true = generate_polynomial_data(N=6, noise_std=1.0, seed=42)\r
    print("1. Generated 1D Feature x (Top 6):\\n", np.round(x, 2))\r
    print("2. Noisy Labels y (Ground Truth + Noise):\\n", np.round(y_noisy, 2))\r
\r
    # Polynomial expansion for Linear Regression\r
    X_poly = polynomial_features_degree_2(x)\r
    print("\\n3. Polynomial Design Matrix [1 | x | x^2] Shape:", X_poly.shape)\r
    print("   Design Matrix Preview:\\n", np.round(X_poly, 2))\r
\r
if __name__ == "__main__":\r
    main()\r
`,A=`"""\r
03_imbalanced_churn_dataset_synthesis.py\r
========================================\r
Worked Example 4: Synthesizing Realistic Tabular Datasets with Class Imbalance\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def generate_telecom_churn_data(N: int = 1000, seed: int = 42):\r
    """Synthesizes tabular dataset simulating customer churn in Barrackpore ISP."""\r
    rng = np.random.default_rng(seed=seed)\r
    \r
    # Feature 1: Account Age in months ~ Uniform[1, 72]\r
    account_age = rng.integers(1, 73, size=N)\r
    \r
    # Feature 2: Monthly Charges in INR ~ Normal(loc=800, scale=200)\r
    monthly_charges = np.clip(rng.normal(loc=800.0, scale=200.0, size=N), 300.0, 2000.0)\r
    \r
    # Feature 3: Support Calls in past year ~ Poisson(lambda=2.0)\r
    support_calls = rng.poisson(lam=2.0, size=N)\r
    \r
    # Feature 4: Plan Type [0: Basic, 1: Standard, 2: Premium]\r
    plan_types = rng.choice([0, 1, 2], size=N, p=[0.5, 0.35, 0.15])\r
    \r
    # Realistic Churn Probability logic: High charges + Many support calls + Low tenure => Churn\r
    churn_logits = -2.5 + (monthly_charges / 500.0) + (0.8 * support_calls) - (0.05 * account_age)\r
    churn_probs = 1.0 / (1.0 + np.exp(-churn_logits))  # Sigmoid activation\r
    \r
    # Binary labels y ~ Bernoulli(p)\r
    y_churn = (rng.uniform(0.0, 1.0, size=N) < churn_probs).astype(int)\r
    \r
    # Stack features into 2D tabular matrix: (N, 4)\r
    X = np.column_stack((account_age, monthly_charges, support_calls, plan_types))\r
    return X, y_churn\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 4: IMBALANCED TABULAR CHURN DATASET SYNTHESIS")\r
    print("=" * 70)\r
\r
    X, y = generate_telecom_churn_data(N=1000, seed=42)\r
    print(f"Generated Tabular Dataset: X shape={X.shape}, y shape={y.shape}")\r
    print("\\nFeatures Matrix X (Tenure_Months, Monthly_INR, Support_Calls, Plan_Type):")\r
    print(np.round(X[:5], 2))\r
\r
    print("\\nTarget Churn Labels (1 = Churned, 0 = Retained):", y[:5])\r
\r
    # Check Imbalance Ratio\r
    churn_count = np.sum(y == 1)\r
    retention_count = np.sum(y == 0)\r
    print(f"\\nClass Distribution:\\n  Retained (0): {retention_count} ({retention_count/len(y)*100:.1f}%)\\n  Churned  (1): {churn_count} ({churn_count/len(y)*100:.1f}%)")\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`========================================================================\r
TOPIC 20 NOTE: WORKED EXAMPLE 4 - RANDOM DATASET GENERATION\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. GAUSSIAN CLUSTERING WITH MULTIVARIATE NORMAL\r
-----------------------------------------------\r
- Concept:\r
  Generating 2D/3D feature vectors from multi-dimensional bell curves with specific mean vectors (centers) and covariance matrices (spread & orientation).\r
- Function:\r
  \`rng.multivariate_normal(mean=[mu_x, mu_y], cov=[[var_x, cov_xy], [cov_yx, var_y]], size=N)\`\r
- Use Cases:\r
  * Evaluating K-Means, DBSCAN, and Gaussian Mixture Models (GMMs).\r
  * Testing linear vs non-linear classification boundaries (SVM kernels, Decision Trees).\r
\r
2. NON-LINEAR POLYNOMIAL REGRESSION SYNTHESIS\r
----------------------------------------------\r
- Mathematical Equation:\r
  y = a0 + a1*x + a2*x^2 + ... + ak*x^k + epsilon\r
  where epsilon ~ N(0, sigma^2).\r
- Manual Polynomial Feature Expansion:\r
  \`X_poly = np.hstack((np.ones_like(x), x, x**2))\`\r
- Diagnostic Benefit:\r
  Allows measuring model Underfitting (Degree 1 line) vs Perfect Fit (Degree 2 parabola) vs Overfitting (Degree 15 polynomial).\r
\r
3. SYNTHETIC TABULAR DATASET (CHURN MODELING)\r
---------------------------------------------\r
- Combining Diverse Distributions:\r
  * Discrete Integers (Tenure months): \`rng.integers(1, 73)\`\r
  * Gaussian Continuous (Monthly fees): \`rng.normal(800, 200)\`\r
  * Poisson Counts (Support calls): \`rng.poisson(lam=2.0)\`\r
  * Categorical Probabilities (Tier): \`rng.choice([0,1,2], p=[0.5, 0.35, 0.15])\`\r
- Logistic Probability Mapping:\r
  z = w^T x + b -> p = 1 / (1 + exp(-z)) -> y = (uniform(0,1) < p).astype(int)\r
`,D=[{id:1,question:"In synthetic multi-class Gaussian generation, what does the 2x2 covariance matrix `cov = [[1.0, 0.0], [0.0, 1.0]]` dictate about the 2D cluster shape?",options:["It produces an isotropic (circular / spherical) cluster where features X1 and X2 are completely uncorrelated with unit variance.","It produces a 45-degree diagonal line.","It forces all points to lie exactly on the circle perimeter.","It creates an empty cluster."],correctAnswer:0,explanation:"Zero off-diagonal covariance (cov_xy = 0) means the features are uncorrelated. Equal diagonal variances (var_x = var_y = 1.0) mean the cluster spreads equally in all directions, forming a circular/spherical Gaussian distribution."},{id:2,question:"Why do we add Gaussian noise `epsilon ~ N(0, sigma^2)` when generating synthetic regression datasets?",options:["To cause the program to crash during testing.","To simulate real-world measurement imperfections, observation errors, and unobserved latent variables.","To make all numbers positive.","To convert integers into float64."],correctAnswer:1,explanation:"Real-world physical and business data is never 100% deterministic. Adding random noise tests whether ML models can generalize rather than simply memorizing the training points."},{id:3,question:"To expand a 1D column vector `x` into a degree-2 polynomial design matrix `[1 | x | x^2]`, which sequence of NumPy operations is correct?",options:["np.hstack((np.ones_like(x), x, x**2))","np.vstack((np.ones_like(x), x, x**2))","x.reshape(3, -1)","np.split(x, 3)"],correctAnswer:0,explanation:"Given column vectors of shape (N, 1), `np.hstack` joins them side-by-side along Axis 1, resulting in an augmented feature matrix of shape (N, 3)."},{id:4,question:"When synthesizing a binary classification dataset with non-linear logistic probabilities `p = 1 / (1 + exp(-logits))`, how do we sample binary 0/1 target labels?",options:["y = (rng.uniform(0.0, 1.0, size=N) < p).astype(int)","y = np.argmax(logits)","y = logits * 2","y = np.zeros_like(logits)"],correctAnswer:0,explanation:"Comparing continuous uniform random numbers in [0, 1) against probability p implements Bernoulli trial sampling: sample is 1 with probability p, and 0 with probability 1 - p."},{id:5,question:"What is the primary advantage of testing ML algorithms on synthetic datasets before deploying on real production data?",options:["Synthetic datasets eliminate the need for computer RAM.","You know the exact ground truth mathematical equations, noise parameters, and cluster geometries, allowing objective verification of whether the algorithm correctly recovers parameters.","Synthetic data can only be run on Python 2.","It guarantees 100% test accuracy in production."],correctAnswer:1,explanation:"With synthetic data, the true underlying data-generating distribution is completely known, enabling researchers to debug algorithms, measure sample complexity, and benchmark sensitivity to noise and collinearity."}],x=[{id:"part1",fileName:"01_multivariate_classification_clusters.py",title:"1. Multi-Class Gaussian Clusters",badge:"Gaussian Clusters",code:k,summary:"Generates 3 distinct 2D Gaussian clusters using multivariate_normal with customized covariance matrices and shuffles rows synchronously."},{id:"part2",fileName:"02_synthetic_polynomial_regression_pipeline.py",title:"2. Non-Linear Polynomial Regression Data",badge:"Polynomial Curve",code:M,summary:"Synthesizes quadratic parabola y = 0.5x^2 - 3x + 5 + noise and expands features into design matrix [1 | x | x^2]."},{id:"part3",fileName:"03_imbalanced_churn_dataset_synthesis.py",title:"3. Tabular Churn Dataset with Imbalance",badge:"Tabular Churn",code:A,summary:"Creates realistic tabular data mixing uniform, normal, poisson, and categorical distributions with sigmoid-activated class imbalance."}],O=()=>{const[d,y]=c.useState("synthetic_generator"),[h,_]=c.useState("part1"),[i,f]=c.useState("clusters"),[t,b]=c.useState(1),[l,N]=c.useState(60),p=x.find(n=>n.id===h)||x[0],v=c.useMemo(()=>{if(i!=="clusters")return[];const n=[],a=Math.floor(l/3);let o=42;const u=()=>(o=(o*9301+49297)%233280,o/233280),r=()=>{const s=Math.max(1e-15,u()),m=u();return Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*m)};for(let s=0;s<a;s++)n.push({x:-3+r()*t,y:-3+r()*t,cls:0,color:"#38bdf8"});for(let s=0;s<a;s++)n.push({x:3+r()*t,y:3+r()*t,cls:1,color:"#f43f5e"});for(let s=0;s<a;s++)n.push({x:0+r()*t,y:4+r()*t,cls:2,color:"#10b981"});return n},[i,t,l]),g=c.useMemo(()=>{if(i!=="polynomial")return[];const n=[];let a=101;const o=()=>(a=(a*9301+49297)%233280,a/233280),u=()=>{const r=Math.max(1e-15,o()),s=o();return Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*s)};for(let r=0;r<l;r++){const s=-4+8*r/l,m=.5*(s*s)-1.5*s-2,j=m+u()*t;n.push({x:s,yNoisy:j,yTrue:m})}return n},[i,t,l]);return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-fuchsia-900/60 via-slate-900 to-rose-900/60 border border-fuchsia-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 text-xs font-semibold rounded-full border border-fuchsia-500/40",children:"Topic 20 • Practical Case Study"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-semibold rounded-full border border-rose-500/40",children:"Worked Example 4"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-fuchsia-200 via-rose-100 to-pink-300 bg-clip-text text-transparent",children:"Worked Example 4: Random Dataset Generation"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:"Synthesize production-grade machine learning datasets from scratch: multivariate Gaussian clusters, non-linear polynomial regression targets with additive noise, and imbalanced tabular churn records."})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"synthetic_generator",label:"Interactive 2D Dataset Studio",icon:"🌌"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(n=>e.jsxs("button",{onClick:()=>y(n.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${d===n.id?"bg-fuchsia-500 text-slate-950 shadow-lg shadow-fuchsia-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:n.icon}),n.label]},n.id))})]}),d==="synthetic_generator"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-fuchsia-300 uppercase tracking-wider block mb-2",children:"1. Dataset Geometry"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"clusters",label:"Gaussian Clusters",sub:"3-Class Classification"},{id:"polynomial",label:"Polynomial Curve",sub:"Non-Linear Regression"}].map(n=>e.jsxs("button",{onClick:()=>f(n.id),className:`p-3 rounded-xl border text-center transition ${i===n.id?"bg-fuchsia-500/20 border-fuchsia-400 text-fuchsia-200 font-bold shadow-md shadow-fuchsia-500/10":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono",children:n.label}),e.jsx("div",{className:"text-[10px] text-slate-500 mt-0.5",children:n.sub})]},n.id))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("label",{className:"text-xs font-bold text-rose-300 uppercase tracking-wider",children:"2. Additive Noise (σ)"}),e.jsxs("span",{className:"text-xs font-mono text-rose-400 font-bold",children:["σ = ",t.toFixed(1)]})]}),e.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.2",value:t,onChange:n=>b(Number(n.target.value)),className:"w-full accent-rose-500 h-2 bg-slate-800 rounded-lg cursor-pointer"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono mt-1",children:[e.jsx("span",{children:"0.2 (Clean)"}),e.jsx("span",{children:"1.5"}),e.jsx("span",{children:"3.0 (High Variance)"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("label",{className:"text-xs font-bold text-pink-300 uppercase tracking-wider",children:"3. Total Samples (N)"}),e.jsxs("span",{className:"text-xs font-mono text-pink-400 font-bold",children:[l," points"]})]}),e.jsx("input",{type:"range",min:"30",max:"150",step:"15",value:l,onChange:n=>N(Number(n.target.value)),className:"w-full accent-pink-500 h-2 bg-slate-800 rounded-lg cursor-pointer"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono mt-1",children:[e.jsx("span",{children:"30"}),e.jsx("span",{children:"90"}),e.jsx("span",{children:"150"})]})]})]})}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-slate-200",children:i==="clusters"?"Multi-Class Gaussian Scatter (2D)":"Quadratic Polynomial Regression Scatter"}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:i==="clusters"?"X ~ N(μ_c, Σ_c), y ∈ {0, 1, 2}":"y = 0.5x² - 1.5x - 2 + ε, where ε ~ N(0, σ²)"})]}),i==="clusters"&&e.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-sky-400 inline-block"})," Class 0 (μ=[-3,-3])"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500 inline-block"})," Class 1 (μ=[3,3])"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500 inline-block"})," Class 2 (μ=[0,4])"]})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-2xl border border-slate-800 p-4 flex justify-center",children:e.jsxs("svg",{viewBox:"-8 -8 16 16",className:"w-full max-w-xl h-72 md:h-96",children:[e.jsx("line",{x1:"-8",y1:"0",x2:"8",y2:"0",stroke:"#334155",strokeWidth:"0.1",strokeDasharray:"0.3"}),e.jsx("line",{x1:"0",y1:"-8",x2:"0",y2:"8",stroke:"#334155",strokeWidth:"0.1",strokeDasharray:"0.3"}),i==="clusters"&&v.map((n,a)=>e.jsx("circle",{cx:n.x,cy:-n.y,r:"0.25",fill:n.color,opacity:"0.85",className:"transition-all duration-300 hover:scale-150 cursor-pointer"},a)),i==="polynomial"&&e.jsxs(e.Fragment,{children:[e.jsx("path",{d:g.reduce((n,a,o)=>`${n} ${o===0?"M":"L"} ${a.x} ${-a.yTrue}`,""),fill:"none",stroke:"#f43f5e",strokeWidth:"0.15",opacity:"0.7"}),g.map((n,a)=>e.jsx("circle",{cx:n.x,cy:-n.yNoisy,r:"0.2",fill:"#ec4899",opacity:"0.9"},a))]})]})})]})]}),d==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:x.map(n=>e.jsxs("button",{onClick:()=>_(n.id),className:`p-4 rounded-xl border text-left transition-all ${h===n.id?"bg-fuchsia-950/40 border-fuchsia-500 shadow-lg shadow-fuchsia-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30",children:n.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:n.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:n.summary})]},n.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-fuchsia-300",children:p.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:p.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Worked Example 4 Suite"})]}),e.jsx(w,{fileModule:p.code,title:p.fileName})]})]}),d==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(S,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"Creating synthetic data is an indispensable tool for machine learning researchers and practitioners. When developing new algorithms or testing edge cases (like extreme class imbalance or non-linear polynomial curvatures), synthetic datasets let you isolate bugs with mathematically guaranteed ground truth."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-fuchsia-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(T,{content:E})]})]}),d==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(C,{questions:D})})]})};export{O as default};
