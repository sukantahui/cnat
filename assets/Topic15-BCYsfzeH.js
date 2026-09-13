import{b as d,j as a}from"./vendor-react-core-CaA1o1Cx.js";import{P as _}from"./PythonFileLoader-DUNJ9gwR.js";import{F as v}from"./FAQTemplate-D_90hN4m.js";import{P as k}from"./PlainTextPrint-yt10TRX1.js";import{T as N}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const w=`"""\r
01_vstack_hstack_dstack_mechanics.py\r
====================================\r
Topic: Array Stacking Mechanics: np.vstack, np.hstack, np.dstack\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("ARRAY STACKING MECHANICS (vstack, hstack, dstack)")\r
    print("=" * 70)\r
\r
    # Consider test scores from two batches in Barrackpore\r
    # Batch A: Debangshu, Susmita (2 students, 3 subjects)\r
    batch_a = np.array([\r
        [85, 90, 88],\r
        [92, 95, 91]\r
    ])\r
\r
    # Batch B: Swadeep, Tuhina (2 students, 3 subjects)\r
    batch_b = np.array([\r
        [65, 70, 72],\r
        [88, 85, 94]\r
    ])\r
\r
    print("Batch A (2x3):\\n", batch_a)\r
    print("Batch B (2x3):\\n", batch_b)\r
\r
    # 1. np.vstack (Vertical Stacking -> Adds rows along Axis 0)\r
    # Merging two batches of students (2x3) + (2x3) => (4x3)\r
    v_stacked = np.vstack((batch_a, batch_b))\r
    print("\\n1. np.vstack((batch_a, batch_b)):")\r
    print(f"   Shape: {v_stacked.shape} (Appended rows)")\r
    print(v_stacked)\r
\r
    # 2. np.hstack (Horizontal Stacking -> Adds columns along Axis 1)\r
    # Extra subject scores (e.g. Project 1, Project 2) for the SAME students\r
    batch_projects = np.array([\r
        [100, 95],\r
        [98, 99]\r
    ])\r
    h_stacked = np.hstack((batch_a, batch_projects))\r
    print("\\n2. np.hstack((batch_a, batch_projects)):")\r
    print(f"   Shape: {h_stacked.shape} (Appended feature columns)")\r
    print(h_stacked)\r
\r
    # 3. 1D Vector Stacking Nuances\r
    vec1 = np.array([1, 2, 3])\r
    vec2 = np.array([4, 5, 6])\r
    print("\\n3. Stacking 1D Vectors:")\r
    print("   np.vstack((vec1, vec2)):\\n", np.vstack((vec1, vec2)))  # (2, 3)\r
    print("   np.hstack((vec1, vec2)):\\n", np.hstack((vec1, vec2)))  # (6,)\r
\r
    # 4. np.dstack (Depth-wise Stacking -> 3D Image Channels)\r
    # Stacking Red, Green, Blue channel 2D grids (2x3) => (2, 3, 3)\r
    channel_r = np.array([[255, 0, 0], [0, 255, 0]])\r
    channel_g = np.array([[0, 255, 0], [255, 0, 0]])\r
    channel_b = np.array([[0, 0, 255], [0, 0, 255]])\r
\r
    rgb_image = np.dstack((channel_r, channel_g, channel_b))\r
    print("\\n4. np.dstack((R, G, B)) for Computer Vision:")\r
    print(f"   Shape: {rgb_image.shape} (Height x Width x Channels)")\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
02_concatenate_and_stack_new_axis.py\r
====================================\r
Topic: np.concatenate vs np.stack, column_stack, and New Dimension Creation\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("np.concatenate VS np.stack & NEW AXIS CREATION")\r
    print("=" * 70)\r
\r
    # 1. np.concatenate: Joins existing arrays along an EXISTING axis\r
    # Array shapes: (2, 3) and (2, 3)\r
    a = np.array([[10, 20, 30], [40, 50, 60]])\r
    b = np.array([[70, 80, 90], [15, 25, 35]])\r
\r
    concat_ax0 = np.concatenate((a, b), axis=0)  # shape (4, 3)\r
    concat_ax1 = np.concatenate((a, b), axis=1)  # shape (2, 6)\r
\r
    print("Array a (2x3):\\n", a)\r
    print("Array b (2x3):\\n", b)\r
    print(f"\\n1. np.concatenate(axis=0) Shape: {concat_ax0.shape}\\n", concat_ax0)\r
    print(f"\\n2. np.concatenate(axis=1) Shape: {concat_ax1.shape}\\n", concat_ax1)\r
\r
    # 2. np.stack: Joins arrays along a NEW axis (increases dimensionality)\r
    # (2, 3) and (2, 3) stacked along axis=0 => (2, 2, 3) (e.g. 2 batches of 2 students x 3 scores)\r
    stack_ax0 = np.stack((a, b), axis=0)  # Shape: (2, 2, 3)\r
    stack_ax1 = np.stack((a, b), axis=1)  # Shape: (2, 2, 3)\r
    stack_ax2 = np.stack((a, b), axis=2)  # Shape: (2, 3, 2)\r
\r
    print(f"\\n3. np.stack(axis=0) Shape: {stack_ax0.shape} (Added new 0-th dimension)")\r
    print(f"4. np.stack(axis=2) Shape: {stack_ax2.shape} (Added new 2-nd dimension)")\r
\r
    # 3. np.column_stack for 1D arrays\r
    # 1D feature vectors mapped directly to columns of a design matrix\r
    ages = np.array([21, 22, 20, 23])\r
    scores = np.array([85, 92, 65, 88])\r
    attendance = np.array([95, 98, 80, 92])\r
\r
    feature_matrix = np.column_stack((ages, scores, attendance))\r
    print("\\n5. np.column_stack 1D arrays into 2D Feature Matrix:")\r
    print(f"   Shape: {feature_matrix.shape} (N=4 students, D=3 features)")\r
    print(feature_matrix)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
03_vsplit_hsplit_array_split.py\r
===============================\r
Topic: Array Splitting: np.vsplit, np.hsplit, np.split, np.array_split\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("ARRAY SPLITTING (vsplit, hsplit, array_split)")\r
    print("=" * 70)\r
\r
    # Master dataset matrix: 6 students, 4 features\r
    dataset = np.array([\r
        [85, 90, 88, 1],  # Debangshu\r
        [92, 95, 91, 1],  # Susmita\r
        [65, 70, 72, 0],  # Swadeep\r
        [88, 85, 94, 1],  # Tuhina\r
        [78, 80, 82, 0],  # Sachin\r
        [95, 98, 96, 1]   # Mahima\r
    ])\r
    print(f"Master Dataset Shape: {dataset.shape} (6 samples, 4 columns)")\r
    print(dataset)\r
\r
    # 1. np.vsplit (Vertical Split -> Splits rows along Axis 0)\r
    # E.g., Train / Test split into 2 equal halves of 3 rows each\r
    train_split, test_split = np.vsplit(dataset, 2)\r
    print("\\n1. np.vsplit(dataset, 2) -> 2 Sub-arrays of Shape (3, 4):")\r
    print("   Train Split:\\n", train_split)\r
    print("   Test Split:\\n", test_split)\r
\r
    # 2. np.hsplit (Horizontal Split -> Splits columns along Axis 1)\r
    # E.g., Separating Features X (first 3 cols) and Target Label y (last col)\r
    # Using column indices [3] to split at index 3\r
    X, y = np.hsplit(dataset, [3])\r
    print("\\n2. np.hsplit(dataset, [3]) -> Features X vs Labels y:")\r
    print(f"   X shape: {X.shape} (Features):\\n", X)\r
    print(f"   y shape: {y.shape} (Target label):\\n", y)\r
\r
    # 3. np.array_split (Handles Unequal Splitting without error)\r
    # Try splitting 6 rows into 4 chunks (6 is not divisible by 4)\r
    # np.split would raise ValueError, but np.array_split gracefully handles it\r
    folds = np.array_split(dataset, 4)\r
    print("\\n3. np.array_split(dataset, 4) -> 4 Folds for Cross-Validation:")\r
    for i, fold in enumerate(folds):\r
        print(f"   Fold {i+1} shape: {fold.shape}")\r
\r
if __name__ == "__main__":\r
    main()\r
`,A=`"""\r
04_ml_adding_bias_column_and_kfolds.py\r
======================================\r
Topic: ML Practical Workflows: Augmented Bias Column (Design Matrix) & K-Fold Splitter\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def add_bias_term(X: np.ndarray) -> np.ndarray:\r
    """Prepends a column of ones (bias term x_0 = 1) to feature matrix X."""\r
    N = X.shape[0]\r
    ones = np.ones((N, 1), dtype=X.dtype)\r
    # Using np.hstack to join (N, 1) and (N, D) => (N, D+1)\r
    return np.hstack((ones, X))\r
\r
def k_fold_cross_validation_splits(X: np.ndarray, y: np.ndarray, k: int = 3):\r
    """Generates train and validation folds using np.array_split and np.vstack."""\r
    N = len(X)\r
    indices = np.arange(N)\r
    # Split index array into k folds\r
    fold_indices = np.array_split(indices, k)\r
    \r
    splits = []\r
    for i in range(k):\r
        val_idx = fold_indices[i]\r
        # Train indices are all folds except fold i\r
        train_idx = np.hstack([fold_indices[j] for j in range(k) if j != i])\r
        \r
        X_train, y_train = X[train_idx], y[train_idx]\r
        X_val, y_val = X[val_idx], y[val_idx]\r
        splits.append((X_train, y_train, X_val, y_val))\r
    return splits\r
\r
def main():\r
    print("=" * 70)\r
    print("ML WORKFLOWS: BIAS COLUMN AUGMENTATION & K-FOLD SPLITTING")\r
    print("=" * 70)\r
\r
    # Raw features: 6 students, 2 features (Study Hours, Attendance Rate)\r
    X = np.array([\r
        [2.0, 75.0],\r
        [4.0, 85.0],\r
        [6.0, 90.0],\r
        [8.0, 95.0],\r
        [3.0, 80.0],\r
        [7.0, 92.0]\r
    ])\r
    y = np.array([55.0, 70.0, 85.0, 96.0, 62.0, 91.0])\r
\r
    print("1. Raw Features X shape:", X.shape)\r
\r
    # 1. Bias Column Augmentation\r
    X_augmented = add_bias_term(X)\r
    print("\\n2. Augmented Design Matrix [1 | X] shape:", X_augmented.shape)\r
    print("   Augmented Matrix Preview:\\n", X_augmented)\r
\r
    # 2. K-Fold Cross Validation Generation\r
    print("\\n3. Generating 3-Fold Cross-Validation Sets:")\r
    folds = k_fold_cross_validation_splits(X_augmented, y, k=3)\r
\r
    for fold_num, (X_tr, y_tr, X_va, y_va) in enumerate(folds, 1):\r
        print(f"\\n   --- Fold {fold_num} ---")\r
        print(f"   Train samples: {len(X_tr)} (Shapes: X_tr={X_tr.shape}, y_tr={y_tr.shape})")\r
        print(f"   Val samples  : {len(X_va)} (Shapes: X_va={X_va.shape}, y_va={y_va.shape})")\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=`========================================================================\r
TOPIC 15 NOTE: STACKING AND SPLITTING ARRAYS (vstack, hstack, concatenate, split)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. STACKING FUNCTIONS & AXIS MECHANICS\r
---------------------------------------\r
- np.vstack (Vertical Stack):\r
  * Joins arrays along Axis 0 (row-wise).\r
  * 1D arrays are treated as row vectors of shape (1, N) and stacked vertically into a 2D matrix of shape (2, N).\r
  * Equivalent to np.concatenate(..., axis=0) for 2D arrays.\r
\r
- np.hstack (Horizontal Stack):\r
  * Joins arrays along Axis 1 (column-wise) for 2D arrays.\r
  * For 1D arrays, it concatenates them along the single existing axis into one longer 1D array.\r
  * Equivalent to np.concatenate(..., axis=1) for 2D arrays.\r
\r
- np.dstack (Depth Stack):\r
  * Stacks along the 3rd axis (Axis 2 / Depth).\r
  * Crucial for Computer Vision (e.g., combining R, G, B 2D matrix channels into (Height, Width, 3)).\r
\r
- np.stack vs np.concatenate:\r
  * np.concatenate joins arrays along an EXISTING dimension. Input shapes must match on all other axes. Output has SAME number of dimensions.\r
  * np.stack joins arrays along a NEW dimension. All input arrays must have the EXACT SAME shape. Output has ndim = input.ndim + 1.\r
\r
2. SPLITTING FUNCTIONS\r
-----------------------\r
- np.vsplit(arr, sections):\r
  * Splits array vertically (along Axis 0 / rows) into sub-arrays. Requires number of rows to be divisible by sections.\r
\r
- np.hsplit(arr, sections):\r
  * Splits array horizontally (along Axis 1 / columns) into sub-arrays. Used to isolate target labels: X, y = np.hsplit(dataset, [3]).\r
\r
- np.array_split(arr, sections):\r
  * Like np.split, but handles non-equal splits without raising ValueError. Essential for K-Fold Cross-Validation splits when dataset size is not divisible by K.\r
\r
3. MACHINE LEARNING APPLICATIONS\r
---------------------------------\r
- Appending Bias Column:\r
  Augmenting feature matrix X with a column of 1s:\r
  X_aug = np.hstack((np.ones((len(X), 1)), X))\r
  This allows Linear Regression to absorb the intercept term into weight vector θ: y = X_aug @ θ.\r
\r
- Feature Fusion:\r
  Concatenating text embeddings and tabular features horizontally: np.hstack((emb_features, tab_features)).\r
`,X=[{id:1,question:"Given two 1D NumPy arrays `a = np.array([1, 2, 3])` and `b = np.array([4, 5, 6])`, what are the resulting shapes of `np.vstack((a, b))` and `np.hstack((a, b))`?",options:["vstack gives (2, 3), while hstack gives (6,).","vstack gives (6,), while hstack gives (2, 3).","Both return 2D arrays of shape (2, 3).","Both return 1D arrays of shape (6,)."],correctAnswer:0,explanation:"For 1D arrays, np.vstack upgrades each array to shape (1, 3) and joins them row-wise to make shape (2, 3). In contrast, np.hstack concatenates them along the 1D axis, resulting in a single 1D array of shape (6,)."},{id:2,question:"What is the fundamental difference between `np.concatenate` and `np.stack`?",options:["np.concatenate only works on 1D arrays, whereas np.stack works on any dimension.","np.concatenate joins arrays along an EXISTING dimension, while np.stack creates a NEW dimension.","np.stack modifies arrays in-place, whereas np.concatenate creates a copy.","np.concatenate is for floating-point data, while np.stack is for integers."],correctAnswer:1,explanation:"np.concatenate joins arrays along an existing axis (ndim remains the same). np.stack joins equal-shaped arrays along a brand new axis, increasing the number of dimensions by 1 (e.g. two (2, 3) arrays stacked along axis=0 produce (2, 2, 3))."},{id:3,question:"If you have a dataset matrix of shape (10, 4) and you want to split it into 3 cross-validation folds, why should you use `np.array_split(data, 3)` instead of `np.split(data, 3)`?",options:["np.split raises a ValueError because 10 is not evenly divisible by 3, whereas np.array_split handles unequal chunks gracefully.","np.split shuffles the rows, which ruins cross validation.","np.array_split converts numerical data into pandas DataFrames.","There is no difference; both produce the same output."],correctAnswer:0,explanation:"np.split requires the array size to be evenly divisible by the number of sections. Since 10 % 3 != 0, np.split fails with ValueError. np.array_split allows unequal division (yielding shapes (4, 4), (3, 4), (3, 4))."},{id:4,question:"To add a bias term (column of 1s) to an existing feature matrix X of shape (N, D), which NumPy operation is standard?",options:["np.vstack((np.ones((1, D)), X))","np.hstack((np.ones((N, 1)), X))","np.dstack((np.ones(N), X))","np.split(X, [1])"],correctAnswer:1,explanation:"To prepend a column of 1s horizontally along the feature dimension (Axis 1), we create a column vector of ones with shape (N, 1) and combine it with X of shape (N, D) using np.hstack (or np.column_stack), giving shape (N, D+1)."},{id:5,question:"Given a 2D matrix representing an image dataset with shape (100, 5), how can you separate the first 4 feature columns (X) from the final target column (y) using `np.hsplit`?",options:["X, y = np.hsplit(data, [4])","X, y = np.vsplit(data, [4])","X, y = np.hsplit(data, 4)","X, y = np.split(data, axis=0)"],correctAnswer:0,explanation:"np.hsplit(data, [4]) splits horizontally along columns at column index 4. This produces two sub-arrays: data[:, :4] with shape (100, 4) and data[:, 4:] with shape (100, 1)."}],p=[{id:"part1",fileName:"01_vstack_hstack_dstack_mechanics.py",title:"1. vstack, hstack & dstack Mechanics",badge:"Stacking",code:w,summary:"Demonstrates vertical stacking (axis 0 rows), horizontal stacking (axis 1 cols), 1D vector edge cases, and 3D image depth stacking (dstack)."},{id:"part2",fileName:"02_concatenate_and_stack_new_axis.py",title:"2. concatenate vs stack & New Axis",badge:"concatenate vs stack",code:j,summary:"Contrasts joining along existing dimensions (np.concatenate) with creating brand-new higher dimensions (np.stack) and column_stack."},{id:"part3",fileName:"03_vsplit_hsplit_array_split.py",title:"3. vsplit, hsplit & array_split",badge:"Array Splitting",code:S,summary:"Performs row splits (vsplit), separates features and labels (hsplit), and handles non-divisible chunk counts safely with np.array_split."},{id:"part4",fileName:"04_ml_adding_bias_column_and_kfolds.py",title:"4. ML Bias Column & K-Fold Splitter",badge:"ML K-Fold & Bias",code:A,summary:"Prepends augmented bias column [1 | X] for linear regression and generates complete K-Fold Cross Validation train/validation partitions."}],i=[[85,90,88],[92,95,91]],m=[[65,70,72],[88,85,94]],x=[[100,95],[98,99]],L=()=>{const[o,u]=d.useState("interactive_stacker"),[h,g]=d.useState("part1"),[c,b]=d.useState("vstack"),l=p.find(e=>e.id===h)||p[0],t=(()=>{switch(c){case"vstack":case"concat_ax0":return{title:"np.vstack((A, B)) / np.concatenate(axis=0)",shape:"(4, 3)",desc:"Vertical row concatenation along Axis 0 (4 students × 3 subjects)",rows:[...i,...m],tags:["A[0]","A[1]","B[0]","B[1]"]};case"hstack":case"concat_ax1":return{title:"np.hstack((A, Extra)) / np.concatenate(axis=1)",shape:"(2, 5)",desc:"Horizontal column concatenation along Axis 1 (2 students × 5 features)",rows:i.map((e,n)=>[...e,...x[n]]),tags:["A + Extra [0]","A + Extra [1]"]};case"bias_term":return{title:"Design Matrix: [1 | A] (np.hstack)",shape:"(2, 4)",desc:"Augmented feature matrix with prepended bias column (x_0 = 1)",rows:i.map(e=>[1,...e]),tags:["Student 1","Student 2"],highlightCol:0};case"vsplit":return{title:"np.vsplit(vstack_result, 2)",shape:"2 arrays of (2, 3)",desc:"Splits 4-row matrix vertically into Train (2 samples) and Test (2 samples)",splitGroups:[i,m],groupNames:["Split 1 (Train)","Split 2 (Test)"]};case"hsplit":return{title:"np.hsplit(A, [2]) -> Features X vs Target y",shape:"X: (2, 2), y: (2, 1)",desc:"Splits columns horizontally: First 2 cols as Features, 3rd col as Target label",splitGroups:[i.map(e=>[e[0],e[1]]),i.map(e=>[e[2]])],groupNames:["Features X (2x2)","Target y (2x1)"]};default:return null}})();return a.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[a.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-cyan-900/60 via-slate-900 to-emerald-900/60 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[a.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/40",children:"Topic 15 • Array Reshaping & Structuring"}),a.jsx("span",{className:"px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-500/40",children:"Stacking & Splitting"})]}),a.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-200 via-teal-100 to-emerald-300 bg-clip-text text-transparent",children:"Stacking & Splitting Arrays in NumPy"}),a.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Master horizontal and vertical concatenation (",a.jsx("code",{className:"text-cyan-300 font-mono",children:"vstack"}),", ",a.jsx("code",{className:"text-emerald-300 font-mono",children:"hstack"}),", ",a.jsx("code",{className:"text-teal-300 font-mono",children:"concatenate"}),"), new dimension injection with ",a.jsx("code",{className:"text-amber-300 font-mono",children:"np.stack"}),", and dataset partitioning with ",a.jsx("code",{className:"text-rose-300 font-mono",children:"vsplit"}),", ",a.jsx("code",{className:"text-indigo-300 font-mono",children:"hsplit"}),", and ",a.jsx("code",{className:"text-cyan-300 font-mono",children:"array_split"}),"."]})]})}),a.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"interactive_stacker",label:"Interactive Stacking & Splitting Simulator",icon:"🧱"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(e=>a.jsxs("button",{onClick:()=>u(e.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${o===e.id?"bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[a.jsx("span",{children:e.icon}),e.label]},e.id))})]}),o==="interactive_stacker"&&a.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[a.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[a.jsx("h3",{className:"text-sm font-bold text-slate-300 uppercase tracking-wider mb-3",children:"Select Stacking / Splitting Transformation:"}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2",children:[{id:"vstack",label:"np.vstack",badge:"Row Stack (Axis 0)",color:"cyan"},{id:"hstack",label:"np.hstack",badge:"Col Stack (Axis 1)",color:"emerald"},{id:"bias_term",label:"Add Bias Term",badge:"Augment [1 | X]",color:"amber"},{id:"vsplit",label:"np.vsplit",badge:"Row Partition",color:"indigo"},{id:"hsplit",label:"np.hsplit",badge:"Feature / Label Split",color:"rose"}].map(e=>a.jsxs("button",{onClick:()=>b(e.id),className:`p-3 rounded-xl border text-left transition ${c===e.id?"bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-500/10":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"}`,children:[a.jsx("div",{className:"font-mono font-bold text-xs",children:e.label}),a.jsx("div",{className:"text-[10px] text-slate-400 mt-1",children:e.badge})]},e.id))})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[a.jsxs("h4",{className:"text-base font-bold text-cyan-300 flex items-center justify-between",children:[a.jsx("span",{children:"Input Arrays (Barrackpore Batch Records)"}),a.jsx("span",{className:"text-xs px-2 py-0.5 bg-slate-800 text-slate-400 font-mono rounded",children:"2D Arrays"})]}),a.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[a.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-cyan-400 mb-2 font-bold",children:[a.jsx("span",{children:"Array A: Batch 1 (Debangshu, Susmita)"}),a.jsx("span",{children:"Shape: (2, 3)"})]}),a.jsx("div",{className:"grid grid-cols-3 gap-2 text-center text-xs font-mono",children:i.map((e,n)=>e.map((r,s)=>a.jsx("div",{className:"p-2 bg-cyan-950/40 border border-cyan-800/60 rounded text-cyan-200",children:r},`${n}-${s}`)))})]}),c==="hstack"?a.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[a.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-emerald-400 mb-2 font-bold",children:[a.jsx("span",{children:"Extra Features: Project 1 & Project 2"}),a.jsx("span",{children:"Shape: (2, 2)"})]}),a.jsx("div",{className:"grid grid-cols-2 gap-2 text-center text-xs font-mono",children:x.map((e,n)=>e.map((r,s)=>a.jsx("div",{className:"p-2 bg-emerald-950/40 border border-emerald-800/60 rounded text-emerald-200",children:r},`${n}-${s}`)))})]}):a.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[a.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-emerald-400 mb-2 font-bold",children:[a.jsx("span",{children:"Array B: Batch 2 (Swadeep, Tuhina)"}),a.jsx("span",{children:"Shape: (2, 3)"})]}),a.jsx("div",{className:"grid grid-cols-3 gap-2 text-center text-xs font-mono",children:m.map((e,n)=>e.map((r,s)=>a.jsx("div",{className:"p-2 bg-emerald-950/40 border border-emerald-800/60 rounded text-emerald-200",children:r},`${n}-${s}`)))})]})]}),a.jsxs("div",{className:"bg-slate-900/90 border border-teal-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h4",{className:"text-base font-bold text-emerald-300",children:t.title}),a.jsxs("span",{className:"text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-mono font-bold rounded-lg border border-emerald-500/30",children:["Shape: ",t.shape]})]}),a.jsx("p",{className:"text-xs text-slate-400 mb-4",children:t.desc}),t.rows&&a.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto",children:a.jsx("table",{className:"w-full text-center text-xs font-mono",children:a.jsx("tbody",{children:t.rows.map((e,n)=>a.jsxs("tr",{className:"border-b border-slate-900",children:[a.jsx("td",{className:"p-2 text-slate-500 text-[11px] text-left",children:t.tags[n]}),e.map((r,s)=>a.jsx("td",{className:`p-2 border border-slate-800/80 rounded ${t.highlightCol===s?"bg-amber-500/30 border-amber-400 text-amber-200 font-bold":"bg-slate-900/60 text-slate-200"}`,children:r},s))]},n))})})}),t.splitGroups&&a.jsx("div",{className:"space-y-4",children:t.splitGroups.map((e,n)=>a.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[a.jsx("div",{className:"text-xs font-mono text-teal-400 font-bold mb-2",children:t.groupNames[n]}),a.jsx("div",{className:"grid gap-1 text-center text-xs font-mono",style:{gridTemplateColumns:`repeat(${e[0].length}, minmax(0, 1fr))`},children:e.map((r,s)=>r.map((y,f)=>a.jsx("div",{className:"p-2 bg-slate-900 border border-slate-800 rounded text-slate-200",children:y},`${s}-${f}`)))})]},n))})]}),a.jsxs("div",{className:"mt-6 p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-400",children:[a.jsx("span",{className:"text-cyan-400 font-semibold font-mono",children:"💡 Pro-Tip:"})," Concatenation and stacking create a ",a.jsx("strong",{children:"new contiguous memory block"})," (copying elements). In contrast, array splitting returns ",a.jsx("strong",{children:"views"})," of the underlying data whenever memory layout permits!"]})]})]})]}),o==="python_suite"&&a.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:p.map(e=>a.jsxs("button",{onClick:()=>g(e.id),className:`p-4 rounded-xl border text-left transition-all ${h===e.id?"bg-cyan-950/40 border-cyan-500 shadow-lg shadow-cyan-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:e.badge}),a.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),a.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:e.title}),a.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:e.summary})]},e.id))}),a.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:l.title}),a.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:l.fileName})]}),a.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"NumPy Structuring Suite"})]}),a.jsx(_,{fileModule:l.code,title:l.fileName})]})]}),o==="teacher_notes"&&a.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[a.jsx(N,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"When preparing data for machine learning models, you spend considerable time structuring arrays: stacking batches of images along new axes, prepending 1s to feature matrices for regression bias terms, and splitting datasets into training, validation, and test folds. Keep a clear mental model of Axis 0 (rows) vs Axis 1 (columns) to avoid dimension bugs."}),a.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[a.jsx("h3",{className:"text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2",children:a.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),a.jsx(k,{content:T})]})]}),o==="faqs_questions"&&a.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:a.jsx(v,{questions:X})})]})};export{L as default};
