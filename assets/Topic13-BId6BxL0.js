import{b as o,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as T}from"./PythonFileLoader-CiS1GfkF.js";import{F as k}from"./FAQTemplate-D_90hN4m.js";import{P as A}from"./PlainTextPrint-yt10TRX1.js";import{T as C}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const E=`"""\r
================================================================================\r
Topic 13 - Script 01: Core Aggregation Functions & Axis Reduction Mechanics\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Global reductions vs Axis-specific reductions\r
- axis=0: Collapses rows -> computes stats for each feature column\r
- axis=1: Collapses columns -> computes stats for each student sample\r
- Core functions: np.sum(), np.mean(), np.std(), np.var(), np.min(), np.max()\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_aggregations():\r
    print("=" * 65)\r
    print("1. GLOBAL AGGREGATIONS OVER ENTIRE 2D ARRAY")\r
    print("=" * 65)\r
\r
    # 4 students (Debangshu, Susmita, Swadeep, Tuhina) x 3 subjects (Math, Sci, Eng)\r
    marks = np.array([\r
        [85, 90, 88],  # Debangshu\r
        [92, 95, 91],  # Susmita\r
        [65, 70, 72],  # Swadeep\r
        [88, 85, 94]   # Tuhina\r
    ], dtype=np.float64)\r
\r
    print("Student Exam Matrix (4x3):\\n", marks)\r
    print("-" * 50)\r
    print(f"Global Sum   (np.sum)  : {np.sum(marks):.1f}")\r
    print(f"Global Mean  (np.mean) : {np.mean(marks):.2f}")\r
    print(f"Global Std   (np.std)  : {np.std(marks):.2f}")\r
    print(f"Global Min   (np.min)  : {np.min(marks):.1f}")\r
    print(f"Global Max   (np.max)  : {np.max(marks):.1f}")\r
\r
    print("\\n" + "=" * 65)\r
    print("2. AXIS=0 REDUCTION: COLUMN-WISE (PER FEATURE STATS)")\r
    print("=" * 65)\r
    print("Collapses dimension 0 (rows). Result has shape (3,) -> 1 stat per subject:")\r
    subject_means = np.mean(marks, axis=0)\r
    subject_stds  = np.std(marks, axis=0)\r
    subject_mins  = np.min(marks, axis=0)\r
    subject_maxs  = np.max(marks, axis=0)\r
\r
    print("Subject Means [Math, Sci, Eng]:", subject_means)\r
    print("Subject Stds  [Math, Sci, Eng]:", np.round(subject_stds, 2))\r
    print("Subject Mins  [Math, Sci, Eng]:", subject_mins)\r
    print("Subject Maxs  [Math, Sci, Eng]:", subject_maxs)\r
\r
    print("\\n" + "=" * 65)\r
    print("3. AXIS=1 REDUCTION: ROW-WISE (PER STUDENT STATS)")\r
    print("=" * 65)\r
    print("Collapses dimension 1 (columns). Result has shape (4,) -> 1 stat per student:")\r
    student_totals = np.sum(marks, axis=1)\r
    student_averages = np.mean(marks, axis=1)\r
\r
    names = ["Debangshu", "Susmita", "Swadeep", "Tuhina"]\r
    for name, total, avg in zip(names, student_totals, student_averages):\r
        print(f"  {name:<12}: Total = {total:.1f} | Average = {avg:.2f}")\r
\r
if __name__ == "__main__":\r
    demonstrate_aggregations()\r
`,R=`"""\r
================================================================================\r
Topic 13 - Script 02: keepdims=True and Dimensional Alignment for Broadcasting\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- The dimension-dropping behavior of default reductions (ndim decreases by 1)\r
- Why keepdims=True preserves singleton dimensions: shape (1, p) or (N, 1)\r
- Eliminating broadcasting ambiguity in Feature Mean Centering & Sample Normalization\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_keepdims():\r
    print("=" * 65)\r
    print("THE CRUCIAL ROLE OF keepdims=True IN DATA PREPROCESSING")\r
    print("=" * 65)\r
\r
    # 4 students x 3 exam features\r
    X = np.array([\r
        [10.0, 20.0, 30.0],\r
        [40.0, 50.0, 60.0],\r
        [70.0, 80.0, 90.0],\r
        [100.0, 110.0, 120.0]\r
    ])\r
    print(f"Feature Matrix X Shape: {X.shape} (N_samples=4, N_features=3)")\r
\r
    print("\\n" + "-" * 50)\r
    print("1. FEATURE-WISE REDUCTION (axis=0):")\r
    print("-" * 50)\r
    mu_dropped = np.mean(X, axis=0) # Shape (3,)\r
    mu_kept    = np.mean(X, axis=0, keepdims=True) # Shape (1, 3)\r
    \r
    print("Without keepdims shape :", mu_dropped.shape)\r
    print("With keepdims=True shape:", mu_kept.shape)\r
    print("Centered X (X - mu_kept) Shape:", (X - mu_kept).shape)\r
\r
    print("\\n" + "-" * 50)\r
    print("2. SAMPLE-WISE REDUCTION (axis=1) - WHERE BUGS HAPPEN WITHOUT keepdims!")\r
    print("-" * 50)\r
    row_sum_dropped = np.sum(X, axis=1) # Shape (4,)\r
    row_sum_kept    = np.sum(X, axis=1, keepdims=True) # Shape (4, 1)\r
\r
    print("Without keepdims shape :", row_sum_dropped.shape, "<- (4,) matches trailing dimension 3 incorrectly!")\r
    print("With keepdims=True shape:", row_sum_kept.shape, "<- (4, 1) cleanly broadcasts across (4, 3)!")\r
\r
    # Attempting row-wise proportion normalization: X / row_sum\r
    # Without keepdims: (4, 3) / (4,) causes ValueError: operands could not be broadcast together with shapes (4,3) (4,)!\r
    try:\r
        norm_fail = X / row_sum_dropped\r
    except ValueError as e:\r
        print(f"[CAUGHT ERROR WITHOUT keepdims]: {e}")\r
\r
    # With keepdims: (4, 3) / (4, 1) works flawlessly!\r
    norm_success = X / row_sum_kept\r
    print("\\nNormalized Row Matrix (X / row_sum_kept):\\n", np.round(norm_success, 3))\r
    print("Row sums verify to 1.0:", np.sum(norm_success, axis=1))\r
\r
if __name__ == "__main__":\r
    demonstrate_keepdims()\r
`,M=`"""\r
================================================================================\r
Topic 13 - Script 03: Finding Extrema Indices with np.argmin() and np.argmax()\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- np.argmax() & np.argmin(): Locating index positions of maximum and minimum values\r
- Multi-class classification: Converting Softmax probability distributions to class labels\r
- Finding top-performing students and identifying highest-loss training samples\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_argmin_argmax():\r
    print("=" * 65)\r
    print("1. 1D VECTOR EXTREMA INDEX DISCOVERY")\r
    print("=" * 65)\r
\r
    scores = np.array([72, 88, 95, 60, 84, 91])\r
    students = ["Debangshu", "Susmita", "Tuhina", "Swadeep", "Sachin", "Mahima"]\r
\r
    max_idx = np.argmax(scores)\r
    min_idx = np.argmin(scores)\r
\r
    print("Scores   :", scores)\r
    print(f"Top Scorer  : {students[max_idx]} with {scores[max_idx]} marks (Index {max_idx})")\r
    print(f"Lowest Score: {students[min_idx]} with {scores[min_idx]} marks (Index {min_idx})")\r
\r
    print("\\n" + "=" * 65)\r
    print("2. MULTI-CLASS ML PREDICTION (SOFTMAX -> CLASS LABELS)")\r
    print("=" * 65)\r
    \r
    # 4 sample images x 3 output classes (0: 'Cat', 1: 'Dog', 2: 'Bird')\r
    # Softmax probabilities output by a Neural Network:\r
    predicted_probs = np.array([\r
        [0.12, 0.81, 0.07],  # Sample 0 -> Dog (Class 1)\r
        [0.90, 0.05, 0.05],  # Sample 1 -> Cat (Class 0)\r
        [0.05, 0.15, 0.80],  # Sample 2 -> Bird (Class 2)\r
        [0.25, 0.65, 0.10]   # Sample 3 -> Dog (Class 1)\r
    ])\r
    classes = ["Cat", "Dog", "Bird"]\r
\r
    # axis=1: Find the winning class per sample row\r
    winning_class_indices = np.argmax(predicted_probs, axis=1)\r
    winning_probabilities = np.max(predicted_probs, axis=1)\r
\r
    print("Softmax Probability Matrix (4x3):\\n", predicted_probs)\r
    print("\\nArgmax Class Predictions (axis=1):", winning_class_indices)\r
\r
    for i, (cls_idx, prob) in enumerate(zip(winning_class_indices, winning_probabilities)):\r
        print(f"  Image {i}: Predicted '{classes[cls_idx]}' (Confidence: {prob*100:.1f}%)")\r
\r
if __name__ == "__main__":\r
    demonstrate_argmin_argmax()\r
`,I=`"""\r
================================================================================\r
Topic 13 - Script 04: Standard Scaler (Z-Score) & Root Mean Squared Error (RMSE)\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Manual Z-score Standardization: z = (X - mu) / sigma using axis=0 & keepdims=True\r
- Root Mean Squared Error (RMSE): sqrt(mean((y_pred - y_true)**2))\r
- Handling degrees of freedom (ddof=0 for population std vs ddof=1 for sample std)\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_ml_statistics():\r
    print("=" * 65)\r
    print("1. MANUAL Z-SCORE STANDARDIZATION (SCIKIT-LEARN STANDARDSCALER)")\r
    print("=" * 65)\r
\r
    # 5 students with 2 features: Study Hours (0-10) and Family Income (20,000 - 80,000)\r
    X = np.array([\r
        [2.5, 25000.0],\r
        [4.0, 42000.0],\r
        [6.5, 65000.0],\r
        [1.5, 22000.0],\r
        [8.0, 78000.0]\r
    ])\r
    print("Raw Unscaled Feature Matrix X:\\n", X)\r
\r
    # Calculate column-wise mean and standard deviation with keepdims=True\r
    mu = np.mean(X, axis=0, keepdims=True)\r
    sigma = np.std(X, axis=0, keepdims=True)\r
\r
    print("\\nFeature Means (mu)    :", mu)\r
    print("Feature Stds  (sigma) :", sigma)\r
\r
    # Vectorized Standardization: Z = (X - mu) / sigma\r
    X_scaled = (X - mu) / sigma\r
    print("\\nZ-Score Standardized Matrix X_scaled:\\n", np.round(X_scaled, 3))\r
    print("Verification - Scaled Means (should be ~0.0):", np.round(np.mean(X_scaled, axis=0), 4))\r
    print("Verification - Scaled Stds  (should be 1.0) :", np.round(np.std(X_scaled, axis=0), 4))\r
\r
    print("\\n" + "=" * 65)\r
    print("2. ROOT MEAN SQUARED ERROR (RMSE) METRIC")\r
    print("=" * 65)\r
    \r
    y_true = np.array([85.0, 92.0, 78.0, 90.0, 65.0])\r
    y_pred = np.array([82.0, 95.0, 74.0, 89.0, 70.0])\r
\r
    rmse = np.sqrt(np.mean((y_pred - y_true) ** 2))\r
    print(f"Ground Truth y : {y_true}")\r
    print(f"Predictions y' : {y_pred}")\r
    print(f"Calculated RMSE: {rmse:.3f} marks")\r
\r
if __name__ == "__main__":\r
    demonstrate_ml_statistics()\r
`,D=`================================================================================\r
NUMPY ESSENTIALS: STATISTICAL AGGREGATIONS & AXIS REDUCTIONS (TOPIC 13)\r
Instructor: Sukanta Hui | Coder & AccoTax, Barrackpore\r
================================================================================\r
\r
1. CORE AGGREGATION FUNCTIONS:\r
--------------------------------------------------------------------------------\r
- np.sum(a, axis=None, keepdims=False)  : Sum of array elements\r
- np.mean(a, axis=None, keepdims=False) : Arithmetic average\r
- np.std(a, axis=None, ddof=0)          : Standard deviation (ddof=0 pop, ddof=1 sample)\r
- np.var(a, axis=None, ddof=0)          : Variance (sigma^2)\r
- np.min(a, axis=None) / np.max(a)      : Minimum / Maximum values\r
- np.argmin(a, axis=None) / np.argmax(a): Indices of minimum / maximum values\r
- np.median(a, axis=None)               : 50th percentile robust median\r
\r
2. UNDERSTANDING AXIS DIRECTIONS IN 2D MATRICES:\r
--------------------------------------------------------------------------------\r
       Axis 1 (Columns: Across Features ➔)\r
           Col 0    Col 1    Col 2\r
Row 0   [ [ 85,      90,      88 ],   ➔ np.mean(axis=1) = Row / Sample Average\r
Row 1     [ 92,      95,      91 ],   ➔ (Collapses columns; keeps samples)\r
Row 2     [ 65,      70,      72 ],\r
Row 3     [ 88,      85,      94 ] ]\r
             ⬇        ⬇        ⬇\r
     np.mean(axis=0) = Column / Feature Average\r
     (Collapses rows; keeps features)\r
\r
3. THE POWER OF keepdims=True:\r
--------------------------------------------------------------------------------\r
- Default reduction on (4, 3) with axis=0 produces (3,).\r
- With keepdims=True, result has shape (1, 3).\r
- Default reduction on (4, 3) with axis=1 produces (4,).\r
- With keepdims=True, result has shape (4, 1).\r
- keepdims=True guarantees seamless 2D broadcasting without ValueError or shape mismatch bugs!\r
\r
4. MACHINE LEARNING APPLICATIONS:\r
--------------------------------------------------------------------------------\r
- Z-score Feature Normalization:\r
    mu = np.mean(X, axis=0, keepdims=True)\r
    sigma = np.std(X, axis=0, keepdims=True)\r
    X_standardized = (X - mu) / sigma\r
- Multi-Class Neural Network Classification:\r
    y_pred_classes = np.argmax(softmax_probs, axis=1)\r
- Root Mean Squared Error (RMSE) Evaluation:\r
    rmse = np.sqrt(np.mean((y_pred - y_true)**2))\r
- Handling Missing Values:\r
    np.nansum(), np.nanmean(), np.nanstd(), np.nanmin(), np.nanmax() ignore NaNs!\r
================================================================================\r
`,X=[{id:1,question:"When applying `np.mean(X, axis=0)` on a feature matrix of shape (100, 5), what is the resulting shape?",options:["(100,)","(5,)","(1, 5)","(100, 5)"],correctAnswer:"(5,)",explanation:"axis=0 collapses the 100 rows, computing the mean across all samples for each of the 5 features, yielding a 1D vector of shape (5,)."},{id:2,question:"Why is `keepdims=True` crucial when computing row-wise sums on a 2D matrix before division?",options:["It makes the computation execute 10x faster on CUDA GPUs.","It preserves the 2D rank (e.g. shape (N, 1)), allowing automatic broadcasting across columns (N, p).","It converts integers to floating-point numbers automatically.","It replaces NaN values with 0."],correctAnswer:"It preserves the 2D rank (e.g. shape (N, 1)), allowing automatic broadcasting across columns (N, p).",explanation:"Without keepdims=True, row reduction drops the second dimension to shape (N,), which fails to broadcast across (N, p). keepdims=True retains shape (N, 1)."},{id:3,question:"How does `np.argmax(probs, axis=1)` function in multi-class neural network predictions?",options:["It calculates the global maximum probability across all images and classes.","For each sample row, it returns the index of the highest probability class.","It sorts the probability matrix in ascending order.","It normalizes the logits so they sum to 1.0."],correctAnswer:"For each sample row, it returns the index of the highest probability class.",explanation:"axis=1 operates across the class columns for each individual sample row, returning the discrete class label with highest confidence."},{id:4,question:"What is the default degree of freedom (`ddof`) setting in `np.std()` versus Pandas `df.std()`?",options:["NumPy uses ddof=1 (sample std) while Pandas uses ddof=0 (population std).","NumPy uses ddof=0 (population std, divides by N) while Pandas uses ddof=1 (sample std, divides by N-1).","Both default to ddof=0.","Both default to ddof=1."],correctAnswer:"NumPy uses ddof=0 (population std, divides by N) while Pandas uses ddof=1 (sample std, divides by N-1).",explanation:"By default, NumPy's np.std calculates population standard deviation (dividing by N with ddof=0). Pandas uses sample standard deviation (Bessel's correction, ddof=1)."},{id:5,question:"If an array contains `np.nan`, what does standard `np.mean(arr)` return?",options:["0.0","The average of all non-NaN numbers","nan","Throws a ValueError"],correctAnswer:"nan",explanation:"Standard arithmetic ufuncs and aggregations propagate NaN. To ignore NaNs and calculate the mean of valid entries, use `np.nanmean(arr)`."}],b=[{id:"part1",fileName:"01_basic_aggregations_and_axis.py",title:"1. Basic Aggregations & Axis Mechanics",badge:"Axis Reductions",code:E,summary:"Demonstrates global reductions vs axis=0 (per-feature column stats) vs axis=1 (per-student row stats) on exam marks."},{id:"part2",fileName:"02_keepdims_and_broadcasting_alignment.py",title:"2. keepdims=True & Broadcasting Alignment",badge:"keepdims & Shapes",code:R,summary:"Explains why keepdims=True preserves singleton 2D dimensions ((1, p) and (N, 1)), preventing broadcasting shape mismatches."},{id:"part3",fileName:"03_argmin_argmax_index_discovery.py",title:"3. Extrema Discovery with argmin & argmax",badge:"argmax & Softmax",code:M,summary:"Locates indices of maximum values for multi-class classification and extracts winning class labels from Softmax outputs."},{id:"part4",fileName:"04_ml_zscore_standardization_and_rmse.py",title:"4. Z-Score Standardization & RMSE Metric",badge:"ML Z-Score & RMSE",code:I,summary:"Manually implements StandardScaler (Z = (X - mu) / sigma) and calculates Root Mean Squared Error regression metric."}],P=[{name:"Debangshu",math:85,science:90,english:88},{name:"Susmita",math:92,science:95,english:91},{name:"Swadeep",math:65,science:70,english:72},{name:"Tuhina",math:88,science:85,english:94}],f=[{id:"sum",name:"np.sum",label:"Sum",desc:"Total sum of elements",formula:"∑ x_i"},{id:"mean",name:"np.mean",label:"Mean",desc:"Arithmetic average",formula:"(1/N) ∑ x_i"},{id:"std",name:"np.std",label:"Std",desc:"Standard deviation",formula:"√((1/N) ∑(x_i - μ)²)"},{id:"min",name:"np.min",label:"Min",desc:"Minimum value",formula:"min(x_1, ..., x_N)"},{id:"max",name:"np.max",label:"Max",desc:"Maximum value",formula:"max(x_1, ..., x_N)"}],q=()=>{const[c,N]=o.useState("interactive_reducer"),[x,y]=o.useState("part1"),[n,j]=o.useState("none"),[t,S]=o.useState(!1),[m,w]=o.useState("mean"),[_,v]=o.useState(null),p=b.find(s=>s.id===x)||b[0],u=[[85,90,88],[92,95,91],[65,70,72],[88,85,94]],i=(()=>{const s=u.flat(),l=a=>{switch(m){case"sum":return a.reduce((r,d)=>r+d,0);case"mean":return parseFloat((a.reduce((r,d)=>r+d,0)/a.length).toFixed(2));case"std":{const r=a.reduce((h,g)=>h+g,0)/a.length,d=a.reduce((h,g)=>h+Math.pow(g-r,2),0)/a.length;return parseFloat(Math.sqrt(d).toFixed(2))}case"min":return Math.min(...a);case"max":return Math.max(...a);default:return 0}};if(n==="none"){const a=l(s);return{shape:t?"(1, 1)":"() [Scalar]",result:t?[[a]]:a,desc:"Global reduction over all 12 elements"}}else if(n==="0"){const a=[0,1,2].map(r=>l(u.map(d=>d[r])));return{shape:t?"(1, 3)":"(3,)",result:t?[a]:a,desc:"Collapsed rows (axis=0) -> 1 metric per subject (Math, Science, English)"}}else{const a=u.map(r=>l(r));return{shape:t?"(4, 1)":"(4,)",result:t?a.map(r=>[r]):a,desc:"Collapsed columns (axis=1) -> 1 metric per student"}}})();return e.jsxs("div",{className:"space-y-8 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-12",children:[e.jsxs("header",{className:"relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 rounded-2xl border border-indigo-800/40 shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Segment 9 • Module 1 • Topic 13"}),e.jsx("span",{className:"px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full",children:"Aggregation & Reductions"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Statistical Aggregations & Axis Reductions"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base max-w-3xl",children:["Mastering ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"np.sum()"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"np.mean()"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"np.std()"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"np.min()"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"np.max()"}),", and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"np.argmax()"})," across dimensions. Learn the vital role of ",e.jsx("code",{className:"text-amber-300 font-mono",children:"keepdims=True"})," in Machine Learning preprocessing pipelines."]})]})]}),e.jsx("div",{className:"flex border-b border-slate-800 gap-2 overflow-x-auto pb-2",children:[{id:"interactive_reducer",label:"📊 Interactive Axis Reducer"},{id:"keepdims_deepdive",label:"📐 The keepdims=True Trap"},{id:"argmax_discovery",label:"🎯 argmax & Softmax Labels"}].map(s=>e.jsx("button",{onClick:()=>N(s.id),className:`px-4 py-2.5 rounded-t-xl text-sm font-semibold transition-all shrink-0 ${c===s.id?"bg-slate-900 text-cyan-400 border-t-2 border-x border-slate-800 border-t-cyan-500 shadow-lg":"text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:s.label},s.id))}),c==="interactive_reducer"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"📊 Interactive Visual Aggregation Sandbox"})}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Experiment with Global reductions, axis=0 (features), and axis=1 (samples)"})]}),e.jsxs("div",{className:"flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-400 px-2 font-medium",children:"keepdims:"}),e.jsx("button",{onClick:()=>S(!t),className:`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${t?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-slate-800 text-slate-400"}`,children:t?"keepdims=True":"keepdims=False (Default)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider",children:"Select Aggregation Function:"}),e.jsx("div",{className:"grid grid-cols-5 gap-2",children:f.map(s=>e.jsxs("button",{onClick:()=>w(s.id),className:`py-2 px-1 text-center rounded-xl border transition-all ${m===s.id?"bg-cyan-950/40 border-cyan-500 text-cyan-300 shadow":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-bold",children:s.label}),e.jsx("div",{className:"text-[10px] text-slate-500 font-mono mt-0.5",children:s.name})]},s.id))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider",children:"Select Reduction Axis:"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"none",label:"Global (axis=None)",desc:"Reduces all elements"},{id:"0",label:"axis=0 (Columns)",desc:"Per-subject feature stats"},{id:"1",label:"axis=1 (Rows)",desc:"Per-student sample stats"}].map(s=>e.jsxs("button",{onClick:()=>j(s.id),className:`py-2 px-2 text-left rounded-xl border transition-all ${n===s.id?"bg-indigo-950/40 border-indigo-500 text-indigo-300 shadow":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-bold",children:s.label}),e.jsx("div",{className:"text-[10px] text-slate-500 mt-0.5 truncate",children:s.desc})]},s.id))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 pt-2",children:[e.jsxs("div",{className:"md:col-span-2 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-mono font-bold text-slate-300",children:["Input Student Matrix ",e.jsx("span",{className:"text-slate-500",children:"shape (4, 3)"})]}),e.jsx("span",{className:"text-xs text-slate-400",children:"4 Students × 3 Subjects"})]}),e.jsx("div",{className:"overflow-x-auto bg-slate-950 p-4 rounded-xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-slate-400 border-b border-slate-800",children:[e.jsx("th",{className:"py-2 text-left",children:"Student"}),e.jsx("th",{className:`py-2 text-center ${n==="0"?"text-cyan-400 bg-cyan-950/30 rounded-t":""}`,children:"Math"}),e.jsx("th",{className:`py-2 text-center ${n==="0"?"text-cyan-400 bg-cyan-950/30 rounded-t":""}`,children:"Science"}),e.jsx("th",{className:`py-2 text-center ${n==="0"?"text-cyan-400 bg-cyan-950/30 rounded-t":""}`,children:"English"}),n==="1"&&e.jsx("th",{className:"py-2 text-center text-indigo-400 bg-indigo-950/30",children:"Result"})]})}),e.jsxs("tbody",{children:[P.map((s,l)=>e.jsxs("tr",{className:`border-b border-slate-900/50 ${n==="1"?"bg-indigo-950/10":""}`,children:[e.jsx("td",{className:"py-2.5 text-slate-300 font-bold",children:s.name}),e.jsx("td",{className:`py-2.5 text-center ${n==="0"?"bg-cyan-950/20":""}`,children:s.math}),e.jsx("td",{className:`py-2.5 text-center ${n==="0"?"bg-cyan-950/20":""}`,children:s.science}),e.jsx("td",{className:`py-2.5 text-center ${n==="0"?"bg-cyan-950/20":""}`,children:s.english}),n==="1"&&e.jsx("td",{className:"py-2.5 text-center font-bold text-indigo-300 bg-indigo-950/40",children:Array.isArray(i.result)?t?i.result[l][0]:i.result[l]:""})]},s.name)),n==="0"&&e.jsxs("tr",{className:"bg-cyan-950/40 font-bold text-cyan-300 border-t-2 border-cyan-500/50",children:[e.jsx("td",{className:"py-2.5",children:"Result (axis=0):"}),Array.isArray(i.result)&&(t?i.result[0]:i.result).map((s,l)=>e.jsx("td",{className:"py-2.5 text-center",children:s},l))]})]})]})})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block",children:"NumPy Evaluation Result"}),e.jsxs("div",{className:"font-mono text-xs text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-500",children:"# Function Call:"}),e.jsxs("p",{className:"text-cyan-300 font-bold mt-1",children:["np.",m,"(marks",n!=="none"?`, axis=${n}`:"",t?", keepdims=True":"",")"]})]}),e.jsxs("div",{className:"space-y-1 text-xs",children:[e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsx("span",{children:"Result Shape:"}),e.jsx("span",{className:"font-mono font-bold text-amber-300",children:i.shape})]}),e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsx("span",{children:"Output Values:"}),e.jsx("span",{className:"font-mono font-bold text-emerald-300",children:JSON.stringify(i.result)})]})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-3",children:i.desc})]}),e.jsxs("div",{className:"text-[11px] text-slate-500 font-mono bg-slate-900/60 p-2.5 rounded border border-slate-800/80",children:["Formula: ",f.find(s=>s.id===m)?.formula]})]})]})]}),c==="keepdims_deepdive"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"📐 Why keepdims=True is Essential in Machine Learning Preprocessing"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-rose-900/40 space-y-3",children:[e.jsx("span",{className:"font-mono font-bold text-rose-400 uppercase text-xs",children:"❌ The Bug without keepdims (axis=1)"}),e.jsxs("p",{children:["When normalizing student marks per row, ",e.jsx("code",{className:"text-rose-300",children:"row_sum = X.sum(axis=1)"})," collapses from shape ",e.jsx("code",{className:"text-white",children:"(N, p)"})," to 1D shape ",e.jsx("code",{className:"text-rose-300",children:"(N,)"}),"."]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-[11px] text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-slate-500",children:"# Shape (4, 3) / Shape (4,)"}),e.jsx("p",{className:"text-rose-400",children:"X_norm = X / X.sum(axis=1)"}),e.jsx("p",{className:"text-rose-300",children:"# 💥 ValueError: operands could not be broadcast together with shapes (4,3) (4,)"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-emerald-900/40 space-y-3",children:[e.jsx("span",{className:"font-mono font-bold text-emerald-400 uppercase text-xs",children:"✔ The Fix with keepdims=True"}),e.jsxs("p",{children:["Setting ",e.jsx("code",{className:"text-emerald-300",children:"keepdims=True"})," preserves the reduced axis as a singleton dimension of length 1, creating shape ",e.jsx("code",{className:"text-emerald-300",children:"(N, 1)"}),"."]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-[11px] text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-slate-500",children:"# Shape (4, 3) / Shape (4, 1)"}),e.jsx("p",{className:"text-emerald-400",children:"X_norm = X / X.sum(axis=1, keepdims=True)"}),e.jsx("p",{className:"text-emerald-300",children:"# ✅ Clean 2D column-wise broadcasting across all 3 features!"})]})]})]})]}),c==="argmax_discovery"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"🎯 Multi-Class Classifier Prediction with np.argmax()"})}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Neural networks output Softmax probability distributions over classes. ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"np.argmax(probs, axis=1)"})," selects the index of the highest-confidence class for every input sample."]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 font-mono text-xs space-y-2",children:[e.jsx("p",{className:"text-slate-500",children:"# Softmax output: 3 samples x 3 classes (Cat, Dog, Bird)"}),e.jsx("p",{className:"text-slate-300",children:"probs = np.array(["}),e.jsx("p",{className:"text-slate-300",children:"  [0.10, 0.85, 0.05], # Sample 0 ➔ Class 1 (Dog)"}),e.jsx("p",{className:"text-slate-300",children:"  [0.92, 0.04, 0.04], # Sample 1 ➔ Class 0 (Cat)"}),e.jsx("p",{className:"text-slate-300",children:"  [0.08, 0.12, 0.80]  # Sample 2 ➔ Class 2 (Bird)"}),e.jsx("p",{className:"text-slate-300",children:"])"}),e.jsx("p",{className:"text-cyan-400 font-bold pt-2",children:"preds = np.argmax(probs, axis=1) # ➔ array([1, 0, 2])"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"💻"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Python Code Demonstration Suite (4 Focused Scripts)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a script below to inspect axis reductions, keepdims alignment, argmax classification, or Z-score normalization"})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:b.map(s=>e.jsxs("button",{onClick:()=>y(s.id),className:`p-3 rounded-xl border text-left transition-all ${x===s.id?"bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/40 scale-[1.02]":"bg-slate-950/70 border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${x===s.id?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:s.badge})}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:s.title})]},s.id))}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:p.fileName})}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:p.summary})]})}),e.jsx(T,{fileModule:p.code,title:p.fileName})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-5",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:"⚠️ Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-rose-900/40 space-y-2",children:[e.jsx("h3",{className:"text-sm font-bold text-rose-400",children:"❌ Common Reductions Mistakes"}),e.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-300 list-disc list-inside",children:[e.jsxs("li",{children:["Confusing ",e.jsx("code",{className:"text-rose-300",children:"axis=0"})," (column-wise feature reduction) with ",e.jsx("code",{className:"text-rose-300",children:"axis=1"})," (row-wise sample reduction)."]}),e.jsxs("li",{children:["Forgetting that ",e.jsx("code",{className:"text-rose-300",children:"np.std()"})," defaults to ",e.jsx("code",{className:"text-white",children:"ddof=0"})," (population standard deviation) while Pandas uses ",e.jsx("code",{className:"text-white",children:"ddof=1"}),"."]}),e.jsxs("li",{children:["Calling ",e.jsx("code",{className:"text-rose-300",children:"np.mean()"})," on arrays containing ",e.jsx("code",{className:"text-white",children:"np.nan"})," — produces ",e.jsx("code",{className:"text-rose-300",children:"nan"}),". Use ",e.jsx("code",{className:"text-emerald-300",children:"np.nanmean()"})," instead!"]}),e.jsxs("li",{children:["Omitting ",e.jsx("code",{className:"text-rose-300",children:"keepdims=True"})," during sample-wise normalization."]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-emerald-900/40 space-y-2",children:[e.jsx("h3",{className:"text-sm font-bold text-emerald-400",children:"✔ Best Practices"}),e.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-300 list-disc list-inside",children:[e.jsxs("li",{children:["Always specify ",e.jsx("code",{className:"text-emerald-300",children:"keepdims=True"})," when calculating statistics destined for feature centering or scaling."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{className:"text-cyan-300",children:"np.argmax(probs, axis=1)"})," to extract discrete class label predictions from Neural Network softmax outputs."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{className:"text-cyan-300",children:"np.median()"})," instead of mean when datasets have extreme outliers or skewed distributions."]})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold text-lg",children:"💡"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Think About This... (Interactive Concept Checks)"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Test your mental model of axis reductions and statistical moments"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{id:1,q:"If an array has shape (100, 20, 5), what is the shape of np.sum(arr, axis=(0, 2))?",a:"Shape (20,). Axes 0 (100) and 2 (5) are collapsed, leaving only axis 1 with 20 elements."},{id:2,q:"Why does np.nanmean([10, 20, np.nan]) return 15.0 while np.mean() returns nan?",a:"nanmean masks out IEEE 754 NaN values before computing the sum and dividing by the count of valid items (2)."},{id:3,q:"What does np.argmin(loss_history) tell a machine learning engineer?",a:"The epoch index at which the model achieved its lowest validation loss (optimal model checkpoint)."}].map(s=>e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between",children:[e.jsx("p",{className:"text-xs font-semibold text-slate-200",children:s.q}),e.jsx("div",{children:_===s.id?e.jsx("div",{className:"p-2.5 rounded bg-indigo-950/40 border border-indigo-700/50 text-xs text-indigo-200 mt-2",children:s.a}):e.jsx("button",{onClick:()=>v(s.id),className:"w-full py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold rounded transition-all cursor-pointer border border-slate-700",children:"Reveal Answer"})})]},s.id))})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(k,{title:"Statistical Reductions & Aggregations — Frequently Asked Questions",questions:X})}),e.jsx("section",{className:"space-y-4",children:e.jsx(A,{content:D,title:"NumPy Aggregations & Axis Reductions — Study & Revision Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 13 Study Note",downloadFileName:"numpy_aggregations_note.txt"})}),e.jsx(C,{note:"In our Barrackpore data science sessions, Susmita and Swadeep often get confused about axis=0 vs axis=1. Here is my simple trick: axis=0 collapses the rows vertically downwards to give you 1 number per feature column. axis=1 collapses horizontally across the columns to give you 1 number per student sample. And always use keepdims=True when standardizing features! — Sukanta Hui"})]})};export{q as default};
