import{b as p,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as M}from"./PythonFileLoader-CiS1GfkF.js";import{F as X}from"./FAQTemplate-D_90hN4m.js";import{P as T}from"./PlainTextPrint-yt10TRX1.js";import{T as A}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const E=`"""\r
01_min_max_scaling_manual_implementation.py\r
===========================================\r
Worked Example 3: Manual Min-Max Normalization into [0, 1] Range\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def min_max_scale(X: np.ndarray, feature_range=(0.0, 1.0)) -> np.ndarray:\r
    """Manually scales features to specified range: X_scaled = (X - X_min) / (X_max - X_min)."""\r
    # 1. Compute column-wise min and max: axis=0\r
    x_min = np.min(X, axis=0)  # Shape: (D,)\r
    x_max = np.max(X, axis=0)  # Shape: (D,)\r
    \r
    # 2. Prevent division by zero if all elements in a column are identical\r
    range_span = x_max - x_min\r
    range_span[range_span == 0.0] = 1.0\r
    \r
    # 3. Scale to [0, 1]\r
    x_std = (X - x_min) / range_span\r
    \r
    # 4. Scale to custom target range [min_target, max_target]\r
    low, high = feature_range\r
    x_scaled = x_std * (high - low) + low\r
    return x_scaled\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 3: MANUAL MIN-MAX SCALING PIPELINE")\r
    print("=" * 70)\r
\r
    # Dataset: 4 students with features [Age, Income_INR, Exam_Score]\r
    # Huge variance in feature scales: Age (~20), Income (~45,000), Exam (~85)\r
    X = np.array([\r
        [20.0, 25000.0, 85.0],  # Debangshu\r
        [22.0, 48000.0, 92.0],  # Susmita\r
        [19.0, 15000.0, 65.0],  # Swadeep\r
        [24.0, 60000.0, 88.0]   # Tuhina\r
    ])\r
\r
    print("1. Raw Features X:\\n", X)\r
    print("   Column Minima:", np.min(X, axis=0))\r
    print("   Column Maxima:", np.max(X, axis=0))\r
\r
    # Scale to [0, 1]\r
    X_scaled_0_1 = min_max_scale(X, feature_range=(0.0, 1.0))\r
    print("\\n2. Scaled to [0, 1] Range:\\n", np.round(X_scaled_0_1, 4))\r
    assert np.all(X_scaled_0_1 >= 0.0) and np.all(X_scaled_0_1 <= 1.0)\r
\r
    # Scale to [-1, 1] for neural network tanh inputs\r
    X_scaled_neg1_1 = min_max_scale(X, feature_range=(-1.0, 1.0))\r
    print("\\n3. Scaled to [-1, 1] Range:\\n", np.round(X_scaled_neg1_1, 4))\r
\r
if __name__ == "__main__":\r
    main()\r
`,F=`"""\r
02_zscore_standardization_manual_implementation.py\r
==================================================\r
Worked Example 3: Manual Z-Score Standardization (StandardScaler: mu=0, sigma=1)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
class ManualStandardScaler:\r
    """Production-grade manual implementation of sklearn StandardScaler using NumPy."""\r
    def __init__(self, eps: float = 1e-8):\r
        self.eps = eps\r
        self.mean_ = None\r
        self.std_ = None\r
\r
    def fit(self, X: np.ndarray):\r
        """Learns column-wise mean and standard deviation from training set."""\r
        self.mean_ = np.mean(X, axis=0)\r
        self.std_ = np.std(X, axis=0)\r
        return self\r
\r
    def transform(self, X: np.ndarray) -> np.ndarray:\r
        """Transforms data using stored training statistics: Z = (X - mu) / sigma."""\r
        if self.mean_ is None or self.std_ is None:\r
            raise ValueError("StandardScaler must be fit before transforming data!")\r
        # Epsilon stabilization prevents division by zero for constant columns\r
        return (X - self.mean_) / (self.std_ + self.eps)\r
\r
    def fit_transform(self, X: np.ndarray) -> np.ndarray:\r
        return self.fit(X).transform(X)\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 3: MANUAL Z-SCORE STANDARDIZATION")\r
    print("=" * 70)\r
\r
    # 4 students with features [Age, Income_INR, Exam_Score]\r
    X_train = np.array([\r
        [20.0, 25000.0, 85.0],  # Debangshu\r
        [22.0, 48000.0, 92.0],  # Susmita\r
        [19.0, 15000.0, 65.0],  # Swadeep\r
        [24.0, 60000.0, 88.0]   # Tuhina\r
    ])\r
\r
    scaler = ManualStandardScaler()\r
    X_scaled = scaler.fit_transform(X_train)\r
\r
    print("1. Learned Training Statistics:")\r
    print("   Mean Vector (mu)  :", np.round(scaler.mean_, 2))\r
    print("   Std Vector (sigma):", np.round(scaler.std_, 2))\r
\r
    print("\\n2. Z-Score Standardized Matrix Z:\\n", np.round(X_scaled, 4))\r
\r
    # Verify: Resulting columns have mean ≈ 0.0 and std ≈ 1.0\r
    print("\\n3. Verification of Standardized Matrix:")\r
    print("   Column Means:", np.round(np.mean(X_scaled, axis=0), 4))\r
    print("   Column Stds :", np.round(np.std(X_scaled, axis=0), 4))\r
    assert np.allclose(np.mean(X_scaled, axis=0), 0.0)\r
    assert np.allclose(np.std(X_scaled, axis=0), 1.0)\r
\r
if __name__ == "__main__":\r
    main()\r
`,R=`"""\r
03_l2_vector_unit_norm_scaling.py\r
=================================\r
Worked Example 3: Sample-wise L2 Unit Vector Normalization (Cosine Similarity Prep)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def l2_normalize_rows(X: np.ndarray, eps: float = 1e-12) -> np.ndarray:\r
    """Normalizes each row vector to unit length ||x||_2 = 1.0."""\r
    # Compute L2 norm per row: axis=1 with keepdims=True to get (N, 1)\r
    # L2 norm = sqrt(sum(x_i^2))\r
    row_norms = np.linalg.norm(X, ord=2, axis=1, keepdims=True)\r
    # Avoid zero division\r
    row_norms = np.maximum(row_norms, eps)\r
    return X / row_norms\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 3: ROW-WISE L2 UNIT VECTOR NORMALIZATION")\r
    print("=" * 70)\r
\r
    # Word / Document TF-IDF or Embedding Vectors for 3 students\r
    # Debangshu, Susmita, Swadeep text representations\r
    embeddings = np.array([\r
        [3.0, 4.0, 0.0],\r
        [1.0, 2.0, 2.0],\r
        [0.0, 5.0, 12.0]\r
    ])\r
\r
    print("1. Raw Embedding Vectors:\\n", embeddings)\r
    norms_before = np.linalg.norm(embeddings, axis=1)\r
    print("   Original Row Norms (Euclidean lengths):", np.round(norms_before, 4))\r
\r
    # Normalize rows\r
    unit_embeddings = l2_normalize_rows(embeddings)\r
    print("\\n2. L2 Unit Normalized Vectors:\\n", np.round(unit_embeddings, 4))\r
\r
    # Verify unit lengths: ||x||_2 == 1.0\r
    norms_after = np.linalg.norm(unit_embeddings, axis=1)\r
    print("\\n3. Normalized Row Norms:", np.round(norms_after, 4))\r
    assert np.allclose(norms_after, 1.0)\r
\r
    # Pairwise Cosine Similarity between Debangshu (row 0) & Susmita (row 1)\r
    # For unit vectors, cosine similarity is simply the dot product!\r
    cos_sim = np.dot(unit_embeddings[0], unit_embeddings[1])\r
    print(f"\\n4. Cosine Similarity (Debangshu vs Susmita): {cos_sim:.4f}")\r
\r
if __name__ == "__main__":\r
    main()\r
`,I=`========================================================================\r
TOPIC 19 NOTE: WORKED EXAMPLE 3 - NORMALIZING A DATASET MANUALLY\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. MIN-MAX FEATURE SCALING (Normalization)\r
------------------------------------------\r
- Formula:\r
  X_scaled = (X - X_min) / (X_max - X_min)\r
- Target Range:\r
  Default is [0, 1]. Can be scaled to [a, b] via: X_scaled * (b - a) + a.\r
- Column-wise reductions:\r
  x_min = np.min(X, axis=0)\r
  x_max = np.max(X, axis=0)\r
- Best Used For:\r
  Algorithms requiring bounded ranges (e.g., Image pixel brightness [0, 1], K-Nearest Neighbors, Neural Networks). Sensitive to extreme outliers.\r
\r
2. Z-SCORE STANDARDIZATION (StandardScaler)\r
-------------------------------------------\r
- Formula:\r
  Z = (X - mu) / sigma\r
- Properties:\r
  Produces transformed distribution with Mean = 0.0 and Standard Deviation = 1.0.\r
- Numerical Stability:\r
  Add epsilon: (X - mu) / (sigma + 1e-8) to avoid DivisionByZero for constant features.\r
- Best Used For:\r
  Linear Regression, Logistic Regression, Support Vector Machines (SVM), Principal Component Analysis (PCA). Robust to moderate outliers.\r
\r
3. L2 SAMPLE VECTOR NORMALIZATION (Unit Norm)\r
---------------------------------------------\r
- Formula:\r
  x_unit = x / ||x||_2 = x / sqrt(sum(x_i^2))\r
- Row-wise reduction:\r
  norms = np.linalg.norm(X, ord=2, axis=1, keepdims=True)\r
- Best Used For:\r
  Text embeddings, TF-IDF vectors, Information Retrieval, and Cosine Similarity computations.\r
\r
4. ML BEST PRACTICES: AVOIDING DATA LEAKAGE\r
-------------------------------------------\r
- NEVER fit scalers on the entire dataset (Train + Test combined)!\r
- ALWAYS calculate mu, sigma, min, and max strictly on the TRAINING set.\r
- Apply those exact stored training constants to transform both Validation and Test sets.\r
`,z=[{id:1,question:"In Min-Max feature scaling, what happens if a dataset feature column has identical values for every single sample (e.g. constant value = 5.0)?",options:["X_max - X_min evaluates to 0.0, causing a ZeroDivisionError / NaN in floating-point math unless stabilized.","NumPy automatically replaces all values with 1.0.","The array is converted into a 1D vector.","The mean of the column becomes infinity."],correctAnswer:0,explanation:"When X_max == X_min, the denominator (X_max - X_min) equals zero. Robust scalers replace zero spans with 1.0 to prevent NaN division errors."},{id:2,question:"What are the theoretical mean and standard deviation of any feature column standardized via Z-Score: `Z = (X - mu) / sigma`?",options:["Mean = 1.0, Std = 0.0","Mean = 0.0, Std = 1.0","Mean = 0.5, Std = 0.5","Mean = min(X), Std = max(X)"],correctAnswer:1,explanation:"Standardization (Z-score) shifts the distribution center to Mean = 0.0 and rescales variance such that Standard Deviation = 1.0."},{id:3,question:"Why must you NEVER compute `mu` and `sigma` across the combined Train + Test dataset before training a model?",options:["Because NumPy arrays cannot store more than 100 rows.","Because doing so causes 'Data Leakage', exposing future test set distribution information to the model during training.","Because Z-Score is only valid for odd numbers of samples.","Because it triples memory usage."],correctAnswer:1,explanation:"Fitting scalers on test data constitutes Data Leakage. Test sets must remain unseen until evaluation. Scaler parameters (mu, sigma) must be learned solely from training data."},{id:4,question:"When performing row-wise L2 normalization on an embedding matrix of shape (N, D), why is `keepdims=True` essential in `np.linalg.norm(X, axis=1, keepdims=True)`?",options:["To prevent NumPy from sorting the embeddings.","To preserve the 2D shape (N, 1), allowing seamless broadcasting against the (N, D) matrix during division.","To ensure that values remain integers.","To calculate the matrix determinant."],correctAnswer:1,explanation:"Without keepdims=True, the norm vector has shape (N,), which causes a shape mismatch when dividing against (N, D). With keepdims=True, the shape is (N, 1), which broadcasts correctly across all D columns."},{id:5,question:"Which scaling technique is preferred when features contain large outliers that would compress standard values into an extremely tight interval?",options:["Min-Max Normalization","Z-Score Standardization (or RobustScaler with median and IQR)","Multiplying all values by 100","Rounding all values to integers"],correctAnswer:1,explanation:"Min-Max scaling is highly sensitive to extreme outliers because X_min or X_max gets skewed. Z-Score standardization (or RobustScaler) is much more resilient because it standardizes around the central distribution."}],u=[{id:"part1",fileName:"01_min_max_scaling_manual_implementation.py",title:"1. Min-Max Scaling Implementation",badge:"Min-Max [0, 1]",code:E,summary:"Manually implements (X - X_min) / (X_max - X_min) with zero-span protection and custom target scaling ranges."},{id:"part2",fileName:"02_zscore_standardization_manual_implementation.py",title:"2. Z-Score Standardization (StandardScaler)",badge:"Z-Score (μ=0, σ=1)",code:F,summary:"Builds a production-grade ManualStandardScaler class with fit and transform methods to prevent ML data leakage."},{id:"part3",fileName:"03_l2_vector_unit_norm_scaling.py",title:"3. L2 Unit Vector Normalization",badge:"L2 Norm (||x||=1)",code:R,summary:"Performs sample-wise Euclidean unit length normalization for text embeddings and calculates pairwise Cosine Similarities."}],d=[{name:"Debangshu",age:20,income:25e3,score:85},{name:"Susmita",age:22,income:48e3,score:92},{name:"Swadeep",age:19,income:15e3,score:65},{name:"Tuhina",age:24,income:6e4,score:88}],V=()=>{const[o,b]=p.useState("interactive_scaler"),[g,f]=p.useState("part1"),[i,_]=p.useState("zscore"),l=u.find(n=>n.id===g)||u[0],N=d.map(n=>n.age),S=d.map(n=>n.income),w=d.map(n=>n.score),m=n=>{const s=Math.min(...n),v=Math.max(...n),h=n.reduce((c,x)=>c+x,0)/n.length,j=Math.sqrt(n.reduce((c,x)=>c+Math.pow(x-h,2),0)/n.length);return{min:s,max:v,mean:h,std:j}},a=m(N),r=m(S),t=m(w),y=d.map(n=>{if(i==="raw")return{name:n.name,age:n.age,income:n.income,score:n.score};if(i==="minmax")return{name:n.name,age:parseFloat(((n.age-a.min)/(a.max-a.min)).toFixed(3)),income:parseFloat(((n.income-r.min)/(r.max-r.min)).toFixed(3)),score:parseFloat(((n.score-t.min)/(t.max-t.min)).toFixed(3))};if(i==="zscore")return{name:n.name,age:parseFloat(((n.age-a.mean)/a.std).toFixed(3)),income:parseFloat(((n.income-r.mean)/r.std).toFixed(3)),score:parseFloat(((n.score-t.mean)/t.std).toFixed(3))};if(i==="l2norm"){const s=Math.sqrt(n.age*n.age+n.income*n.income+n.score*n.score);return{name:n.name,age:parseFloat((n.age/s).toFixed(6)),income:parseFloat((n.income/s).toFixed(6)),score:parseFloat((n.score/s).toFixed(6))}}return n});return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-amber-900/60 via-slate-900 to-orange-900/60 border border-amber-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-semibold rounded-full border border-amber-500/40",children:"Topic 19 • Practical Case Study"}),e.jsx("span",{className:"px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-semibold rounded-full border border-orange-500/40",children:"Worked Example 3"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-200 via-orange-100 to-yellow-300 bg-clip-text text-transparent",children:"Worked Example 3: Normalizing a Dataset Manually"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Construct manual data preprocessing pipelines from scratch: Min-Max feature rescaling to ",e.jsx("code",{className:"text-amber-300 font-mono",children:"[0, 1]"}),", Z-Score standardization (",e.jsx("code",{className:"text-orange-300 font-mono",children:"μ=0, σ=1"}),"), sample L2 vector normalization, and leakage prevention."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"interactive_scaler",label:"Interactive Dataset Scaler",icon:"📐"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(n=>e.jsxs("button",{onClick:()=>b(n.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${o===n.id?"bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:n.icon}),n.label]},n.id))})]}),o==="interactive_scaler"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsx("h3",{className:"text-xs font-bold text-amber-300 uppercase tracking-wider mb-3",children:"Select Normalization / Scaling Algorithm:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[{id:"raw",title:"Raw Features",formula:"Unnormalized X",color:"slate"},{id:"minmax",title:"Min-Max Scaler",formula:"(X - X_min) / (X_max - X_min)",color:"amber"},{id:"zscore",title:"Z-Score (StandardScaler)",formula:"(X - μ) / σ",color:"orange"},{id:"l2norm",title:"L2 Unit Norm",formula:"X / ||X||_2",color:"yellow"}].map(n=>e.jsxs("button",{onClick:()=>_(n.id),className:`p-3.5 rounded-xl border text-left transition ${i===n.id?"bg-amber-500/20 border-amber-400 text-amber-200 shadow-md shadow-amber-500/10":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-slate-200",children:n.title}),e.jsx("div",{className:"text-[10px] text-slate-400 font-mono mt-1 truncate",children:n.formula})]},n.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h4",{className:"text-base font-bold text-slate-200",children:["Feature Matrix Output: ",e.jsx("span",{className:"text-amber-300 font-mono",children:i.toUpperCase()})]}),e.jsx("span",{className:"text-xs px-2.5 py-1 bg-slate-800 text-slate-400 font-mono rounded",children:"4 Samples × 3 Features"})]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-slate-400 border-b border-slate-800",children:[e.jsx("th",{className:"p-2 text-left",children:"Student"}),e.jsx("th",{className:"p-2 text-amber-400 font-bold",children:"Age (Years)"}),e.jsx("th",{className:"p-2 text-orange-400 font-bold",children:"Income (INR)"}),e.jsx("th",{className:"p-2 text-yellow-400 font-bold",children:"Score (Marks)"})]})}),e.jsx("tbody",{children:y.map((n,s)=>e.jsxs("tr",{className:"border-b border-slate-900",children:[e.jsx("td",{className:"p-2.5 text-slate-400 font-sans text-left text-xs font-semibold",children:n.name}),e.jsx("td",{className:"p-2.5 bg-slate-900/60 text-slate-200",children:n.age}),e.jsx("td",{className:"p-2.5 bg-slate-900/60 text-slate-200",children:n.income}),e.jsx("td",{className:"p-2.5 bg-slate-900/60 text-slate-200",children:n.score})]},s))})]})}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400",children:[e.jsx("span",{className:"text-amber-400 font-semibold font-mono",children:"🔍 Mathematical Note:"})," Raw Income (~45,000 INR) completely dominates Age (~20) by a factor of 2000x! Scaling eliminates gradient explosion and ensures fair feature weighting during ML model optimization."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-base font-bold text-amber-300 mb-4",children:"Feature Column Statistics (Training Set)"}),e.jsxs("div",{className:"space-y-4 text-xs font-mono",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-amber-400 font-bold block mb-1",children:"Feature: Age"}),e.jsxs("div",{className:"grid grid-cols-2 gap-1 text-[11px] text-slate-400",children:[e.jsxs("span",{children:["Min: ",a.min]}),e.jsxs("span",{children:["Max: ",a.max]}),e.jsxs("span",{children:["Mean (μ): ",a.mean.toFixed(2)]}),e.jsxs("span",{children:["Std (σ): ",a.std.toFixed(2)]})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-orange-400 font-bold block mb-1",children:"Feature: Income"}),e.jsxs("div",{className:"grid grid-cols-2 gap-1 text-[11px] text-slate-400",children:[e.jsxs("span",{children:["Min: ",r.min]}),e.jsxs("span",{children:["Max: ",r.max]}),e.jsxs("span",{children:["Mean (μ): ",r.mean.toFixed(2)]}),e.jsxs("span",{children:["Std (σ): ",r.std.toFixed(2)]})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-yellow-400 font-bold block mb-1",children:"Feature: Score"}),e.jsxs("div",{className:"grid grid-cols-2 gap-1 text-[11px] text-slate-400",children:[e.jsxs("span",{children:["Min: ",t.min]}),e.jsxs("span",{children:["Max: ",t.max]}),e.jsxs("span",{children:["Mean (μ): ",t.mean.toFixed(2)]}),e.jsxs("span",{children:["Std (σ): ",t.std.toFixed(2)]})]})]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-amber-950/30 border border-amber-900/60 rounded-xl text-[11px] text-amber-200",children:["⚠️ Store ",e.jsx("code",{className:"text-white font-mono",children:"scaler.mean_"})," and ",e.jsx("code",{className:"text-white font-mono",children:"scaler.std_"})," to normalize incoming inference test queries identically!"]})]})]})]}),o==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:u.map(n=>e.jsxs("button",{onClick:()=>f(n.id),className:`p-4 rounded-xl border text-left transition-all ${g===n.id?"bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30",children:n.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:n.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:n.summary})]},n.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:l.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:l.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Worked Example 3 Suite"})]}),e.jsx(M,{fileModule:l.code,title:l.fileName})]})]}),o==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(A,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"Features with radically different scales (like Income in thousands vs Age in tens) cause gradient descent to bounce erratically and stretch Euclidean distance metrics in KNN or K-Means. Building your own robust StandardScaler in pure NumPy gives you deep intuition for how Scikit-Learn transformers work under the hood."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(T,{content:I})]})]}),o==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(X,{questions:z})})]})};export{V as default};
