import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as N}from"./PythonFileLoader-CiS1GfkF.js";import{F as v}from"./FAQTemplate-D_90hN4m.js";import{P as w}from"./PlainTextPrint-yt10TRX1.js";import{T as j}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const A=`"""\r
01_problem1_one_hot_encoding.py\r
===============================\r
Practice Problem 1: Manual One-Hot Encoding via np.eye & Fancy Indexing\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def one_hot_encode(labels: np.ndarray, num_classes: int = None) -> np.ndarray:\r
    """Converts 1D integer class array into 2D One-Hot Encoded Matrix."""\r
    if num_classes is None:\r
        num_classes = np.max(labels) + 1\r
    # np.eye creates identity matrix of shape (C, C)\r
    # Fancy indexing with labels vector selects corresponding one-hot rows!\r
    return np.eye(num_classes)[labels]\r
\r
def main():\r
    print("=" * 70)\r
    print("PRACTICE PROBLEM 1: VECTORIZED ONE-HOT ENCODING")\r
    print("=" * 70)\r
\r
    # Integer student exam grades: [0: Fail, 1: Pass, 2: Merit, 3: Distinction]\r
    # Students: Debangshu (2), Susmita (3), Swadeep (1), Tuhina (3), Sachin (0)\r
    labels = np.array([2, 3, 1, 3, 0])\r
    class_names = ["Fail", "Pass", "Merit", "Distinction"]\r
\r
    print("Input Class Labels:", labels)\r
    for i, l in enumerate(labels):\r
        print(f"  Student {i}: Label {l} ({class_names[l]})")\r
\r
    # One-Hot Encoding\r
    one_hot = one_hot_encode(labels, num_classes=4)\r
    print(f"\\nResulting One-Hot Matrix Shape: {one_hot.shape} (N=5, NumClasses=4)")\r
    print("One-Hot Encoded Matrix:\\n", one_hot)\r
\r
    # Verification: Row sum must equal 1.0 everywhere\r
    assert np.all(np.sum(one_hot, axis=1) == 1.0)\r
    # Decoding back via argmax\r
    decoded = np.argmax(one_hot, axis=1)\r
    assert np.all(decoded == labels)\r
    print("\\nDecoded back via np.argmax(axis=1):", decoded, "-> Matches perfectly!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,M=`"""\r
02_problem2_pairwise_euclidean_distance.py\r
==========================================\r
Practice Problem 2: Fully Vectorized Pairwise Euclidean Distance Matrix (No Loops)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def pairwise_distances_broadcasting(A: np.ndarray, B: np.ndarray) -> np.ndarray:\r
    """Computes pairwise Euclidean distance matrix between (M, D) and (N, D) using 3D broadcasting."""\r
    # A[:, np.newaxis, :] has shape (M, 1, D)\r
    # B[np.newaxis, :, :] has shape (1, N, D)\r
    # Subtraction yields (M, N, D) difference tensor\r
    diff = A[:, np.newaxis, :] - B[np.newaxis, :, :]\r
    # Sum squares along feature axis D (axis=2) and take sqrt\r
    return np.sqrt(np.sum(diff ** 2, axis=2))\r
\r
def pairwise_distances_algebraic(A: np.ndarray, B: np.ndarray) -> np.ndarray:\r
    """Computes pairwise Euclidean distance using algebraic expansion: ||a - b||^2 = ||a||^2 + ||b||^2 - 2(a . b)."""\r
    # Sum of squares per row\r
    A_sq = np.sum(A ** 2, axis=1, keepdims=True)  # Shape (M, 1)\r
    B_sq = np.sum(B ** 2, axis=1, keepdims=True)  # Shape (N, 1)\r
    # Dot product: A @ B.T has shape (M, N)\r
    dot_prod = A @ B.T\r
    # Distance squared: (M, 1) + (1, N) - 2*(M, N)\r
    dist_sq = np.maximum(A_sq + B_sq.T - 2.0 * dot_prod, 0.0)\r
    return np.sqrt(dist_sq)\r
\r
def main():\r
    print("=" * 70)\r
    print("PRACTICE PROBLEM 2: PAIRWISE EUCLIDEAN DISTANCE MATRIX (KNN/K-MEANS ENGINE)")\r
    print("=" * 70)\r
\r
    # Matrix A: 3 test query points (3, 2)\r
    A = np.array([\r
        [0.0, 0.0],\r
        [3.0, 4.0],\r
        [1.0, 1.0]\r
    ])\r
\r
    # Matrix B: 4 training anchor points (4, 2)\r
    B = np.array([\r
        [0.0, 0.0],\r
        [1.0, 0.0],\r
        [0.0, 1.0],\r
        [3.0, 4.0]\r
    ])\r
\r
    print("Query Points A (3x2):\\n", A)\r
    print("\\nAnchor Points B (4x2):\\n", B)\r
\r
    # Method 1: 3D Broadcasting\r
    D_broadcast = pairwise_distances_broadcasting(A, B)\r
    # Method 2: Algebraic Expansion (Optimized for Large Datasets)\r
    D_algebraic = pairwise_distances_algebraic(A, B)\r
\r
    print(f"\\nDistance Matrix Shape: {D_broadcast.shape} (3 query rows x 4 anchor cols)")\r
    print("Pairwise Distances (Broadcasting):\\n", np.round(D_broadcast, 3))\r
    print("\\nPairwise Distances (Algebraic):\\n", np.round(D_algebraic, 3))\r
\r
    assert np.allclose(D_broadcast, D_algebraic)\r
    print("\\n-> Both fully vectorized implementations match with 0.0 error!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
03_problem3_moving_average_1d_convolution.py\r
============================================\r
Practice Problem 3: 1D Moving Average Smoothing using np.convolve & Cumulative Sums\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def moving_average_convolve(series: np.ndarray, window_size: int = 3) -> np.ndarray:\r
    """Computes rolling moving average using discrete 1D convolution."""\r
    # Box filter kernel of uniform weights [1/w, 1/w, ..., 1/w]\r
    kernel = np.ones(window_size) / window_size\r
    # 'valid' mode only computes averages where the window completely overlaps\r
    return np.convolve(series, kernel, mode='valid')\r
\r
def moving_average_cumsum(series: np.ndarray, window_size: int = 3) -> np.ndarray:\r
    """Computes moving average in O(N) time using cumulative sums (np.cumsum)."""\r
    cumsum_vec = np.cumsum(np.insert(series, 0, 0))\r
    return (cumsum_vec[window_size:] - cumsum_vec[:-window_size]) / window_size\r
\r
def main():\r
    print("=" * 70)\r
    print("PRACTICE PROBLEM 3: 1D MOVING AVERAGE FILTER FOR TIME-SERIES")\r
    print("=" * 70)\r
\r
    # 10 daily temperature readings from Barrackpore sensor\r
    raw_temps = np.array([28.0, 30.0, 35.0, 32.0, 29.0, 27.0, 31.0, 33.0, 36.0, 34.0])\r
    w = 3\r
\r
    print(f"Original Time Series ({len(raw_temps)} days):", raw_temps)\r
    print(f"Window Size w = {w} days")\r
\r
    # Method 1: Convolution\r
    ma_conv = moving_average_convolve(raw_temps, window_size=w)\r
    # Method 2: Cumulative Sum\r
    ma_cum = moving_average_cumsum(raw_temps, window_size=w)\r
\r
    print(f"\\nMoving Average (Convolution, len={len(ma_conv)}):\\n", np.round(ma_conv, 2))\r
    print(f"Moving Average (CumSum, len={len(ma_cum)}):\\n", np.round(ma_cum, 2))\r
\r
    assert np.allclose(ma_conv, ma_cum)\r
    print("\\n-> Validation Succeeded: Moving average smooths short-term noise!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
04_problem4_minibatch_generator.py\r
==================================\r
Practice Problem 4: Synchronous Shuffling & Mini-Batch Generator for SGD Training\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def generate_mini_batches(X: np.ndarray, y: np.ndarray, batch_size: int = 3, shuffle: bool = True, seed: int = 42):\r
    """Yields mini-batches of (X_batch, y_batch) with synchronous shuffling."""\r
    N = len(X)\r
    indices = np.arange(N)\r
    \r
    if shuffle:\r
        rng = np.random.default_rng(seed=seed)\r
        rng.shuffle(indices)\r
        \r
    for start_idx in range(0, N, batch_size):\r
        end_idx = min(start_idx + batch_size, N)\r
        batch_idx = indices[start_idx:end_idx]\r
        yield X[batch_idx], y[batch_idx]\r
\r
def main():\r
    print("=" * 70)\r
    print("PRACTICE PROBLEM 4: MINI-BATCH GENERATOR FOR NEURAL NETWORKS")\r
    print("=" * 70)\r
\r
    # Dataset: 8 students, 2 features (Math, Science), 1 binary label (Pass/Fail)\r
    X = np.array([\r
        [85, 90], [92, 95], [65, 70], [88, 85],\r
        [78, 80], [95, 98], [55, 60], [82, 84]\r
    ])\r
    y = np.array([1, 1, 0, 1, 0, 1, 0, 1])\r
    batch_size = 3\r
\r
    print(f"Total Dataset: N={len(X)} samples, Batch Size={batch_size}")\r
\r
    # Iterate through 1 Epoch of training\r
    print("\\n--- Epoch 1 Mini-Batch Iteration ---")\r
    batch_count = 0\r
    for b_idx, (X_batch, y_batch) in enumerate(generate_mini_batches(X, y, batch_size=batch_size, shuffle=True, seed=42), 1):\r
        batch_count += 1\r
        print(f"\\nBatch {b_idx} (Size={len(X_batch)}):")\r
        print("  X_batch:\\n", X_batch)\r
        print("  y_batch:", y_batch)\r
\r
    print(f"\\nCompleted Epoch with {batch_count} mini-batches (Handles remaining leftover sample correctly).")\r
\r
if __name__ == "__main__":\r
    main()\r
`,D=`========================================================================\r
TOPIC 21 NOTE: PRACTICE PROBLEMS & ADVANCED NUMPY PATTERNS\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. PROBLEM 1: VECTORIZED ONE-HOT ENCODING\r
------------------------------------------\r
- One-liner Pattern:\r
  \`one_hot = np.eye(num_classes)[labels]\`\r
- How it works:\r
  \`np.eye(C)\` generates an identity matrix of size (C, C).\r
  Indexing it with an integer array of class labels \`labels\` triggers NumPy Fancy Indexing, extracting row \`labels[i]\` for each sample in $O(1)$ memory mapping time!\r
\r
2. PROBLEM 2: PAIRWISE EUCLIDEAN DISTANCES WITHOUT LOOPS\r
---------------------------------------------------------\r
- 3D Broadcasting Approach:\r
  \`D = np.sqrt(np.sum((A[:, np.newaxis, :] - B[np.newaxis, :, :]) ** 2, axis=2))\`\r
- Algebraic GEMM Expansion (Speed-optimized for huge matrices):\r
  \`||a - b||^2 = ||a||^2 + ||b||^2 - 2(a @ b^T)\`\r
  \`D_sq = np.sum(A**2, axis=1, keepdims=True) + np.sum(B**2, axis=1, keepdims=True).T - 2*(A @ B.T)\`\r
  Runs at maximum BLAS level 3 performance!\r
\r
3. PROBLEM 3: 1D TIME-SERIES MOVING AVERAGE\r
--------------------------------------------\r
- np.convolve Pattern:\r
  \`kernel = np.ones(w) / w\`\r
  \`ma = np.convolve(series, kernel, mode='valid')\`\r
- Output length is \`N - w + 1\`.\r
\r
4. PROBLEM 4: SYNCHRONOUS MINI-BATCH SGD GENERATOR\r
---------------------------------------------------\r
- Synchronous Shuffle Rule:\r
  NEVER shuffle X and y independently!\r
  Always generate a single index permutation: \`idx = rng.permutation(N)\`, then slice \`X[idx]\` and \`y[idx]\`.\r
`,P=[{id:1,question:"Why does the expression `np.eye(4)[np.array([2, 0, 1])]` successfully create a 3x4 one-hot encoded matrix?",options:["Because np.eye(4) creates a 4x4 identity matrix where row i has a 1 at column i, and integer fancy indexing retrieves rows 2, 0, and 1.","Because np.eye automatically trains a softmax classifier.","Because 4 is divisible by 2.","Because NumPy converts negative numbers to one-hot vectors."],correctAnswer:0,explanation:"np.eye(4) creates a 4x4 identity matrix. Fancy indexing with `[2, 0, 1]` extracts rows 2, 0, and 1, producing `[[0,0,1,0], [1,0,0,0], [0,1,0,0]]`."},{id:2,question:"In the vectorized pairwise Euclidean distance calculation between A (M, D) and B (N, D), what shape does `A[:, np.newaxis, :] - B[np.newaxis, :, :]` have before sum reduction?",options:["(M, N, D)","(M, N)","(M, D)","(D, M, N)"],correctAnswer:0,explanation:"A has shape (M, 1, D) and B has shape (1, N, D). Broadcasting expands both arrays to shape (M, N, D), holding all pairwise element differences."},{id:3,question:"When applying `np.convolve(series, kernel, mode='valid')` with a 10-element time series and a 3-element moving average filter, what is the length of the resulting output array?",options:["8 (formula: N - w + 1 = 10 - 3 + 1 = 8)","10 (same length)","12 (formula: N + w - 1)","3"],correctAnswer:0,explanation:"'valid' mode only computes values where the window completely overlaps the data without padding, giving length `10 - 3 + 1 = 8`."},{id:4,question:"Why must you shuffle feature matrix X and label vector y using the EXACT SAME index permutation array `indices = rng.permutation(len(X))`?",options:["To prevent data leakage.","To ensure that each sample's features remain paired with its correct corresponding target label.","Because NumPy does not allow shuffling 1D arrays.","To sort the dataset in ascending order."],correctAnswer:1,explanation:"If X and y were shuffled independently, sample features would become mismatched with incorrect target labels, destroying the underlying predictive relationship."},{id:5,question:"In algebraic pairwise Euclidean distance calculation `||a - b||^2 = ||a||^2 + ||b||^2 - 2(a @ b.T)`, why is `np.maximum(dist_sq, 0.0)` applied before taking `np.sqrt`?",options:["To convert integers to float.","To prevent tiny negative numbers caused by floating-point rounding errors from producing NaN when calling np.sqrt.","To normalize distances between 0 and 1.","To invert the matrix."],correctAnswer:1,explanation:"Due to numerical rounding inaccuracies in floating-point operations, identical vectors can sometimes yield values like `-1e-16`. Clipping to `0.0` prevents `np.sqrt` from returning `NaN`."}],p=[{id:"part1",fileName:"01_problem1_one_hot_encoding.py",title:"1. Vectorized One-Hot Encoding",badge:"np.eye Indexing",code:A,summary:"Converts integer class arrays into 2D One-Hot matrices in O(1) time using np.eye(C)[labels] and decodes with np.argmax."},{id:"part2",fileName:"02_problem2_pairwise_euclidean_distance.py",title:"2. Pairwise Euclidean Distance Matrix",badge:"KNN Distance Engine",code:M,summary:"Implements loop-free distance matrix between (M, D) and (N, D) using 3D broadcasting and algebraic BLAS GEMM expansion."},{id:"part3",fileName:"03_problem3_moving_average_1d_convolution.py",title:"3. 1D Moving Average Filter",badge:"1D Convolution",code:S,summary:"Applies 1D box filter convolution np.convolve(series, kernel, mode='valid') and O(N) cumulative sum moving averages."},{id:"part4",fileName:"04_problem4_minibatch_generator.py",title:"4. Mini-Batch SGD Training Generator",badge:"SGD Mini-Batches",code:E,summary:"Builds a synchronous shuffle iterator yielding mini-batches of (X_batch, y_batch) for neural network optimization."}],q=()=>{const[t,u]=i.useState("practice_hub"),[x,h]=i.useState("part1"),[s,b]=i.useState(1),[o,g]=i.useState([2,3,1,0]),[l,y]=i.useState(3),c=p.find(n=>n.id===x)||p[0],d=[28,30,35,32,29,27,31,33],m=[];for(let n=0;n<=d.length-l;n++){const a=d.slice(n,n+l).reduce((f,_)=>f+_,0)/l;m.push(parseFloat(a.toFixed(1)))}return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-cyan-900/60 via-slate-900 to-blue-900/60 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/40",children:"Topic 21 • Hands-on Coding Hub"}),e.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/40",children:"Practice Problems"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-300 bg-clip-text text-transparent",children:"NumPy Practice Problems & Algorithms"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:"Tackle essential machine learning algorithmic challenges: Vectorized One-Hot Encoding, Loopless Pairwise Euclidean Distances (KNN engine), 1D Moving Average Filters, and Mini-Batch SGD Training Iterators."})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"practice_hub",label:"Interactive Problem Testbench",icon:"⚡"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(n=>e.jsxs("button",{onClick:()=>u(n.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${t===n.id?"bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:n.icon}),n.label]},n.id))})]}),t==="practice_hub"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:[{id:1,title:"Problem 1",name:"Vectorized One-Hot",badge:"np.eye Indexing"},{id:2,title:"Problem 2",name:"Pairwise Distance",badge:"KNN Distance Matrix"},{id:3,title:"Problem 3",name:"Moving Average",badge:"1D Convolution"},{id:4,title:"Problem 4",name:"Mini-Batch SGD",badge:"Batch Iterator"}].map(n=>e.jsxs("button",{onClick:()=>{b(n.id),h(`part${n.id}`)},className:`p-4 rounded-xl border text-left transition-all ${s===n.id?"bg-cyan-950/40 border-cyan-500 shadow-lg shadow-cyan-500/10 scale-102":"bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-400",children:n.title}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono",children:n.badge})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200",children:n.name})]},n.id))}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[s===1&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300 mb-1",children:"Problem 1: Vectorized One-Hot Encoding with `np.eye`"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Convert integer class labels into a one-hot binary matrix without loops or Python dict lookups."})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 block mb-2",children:"Input Class Labels Array:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:o.map((n,r)=>e.jsxs("button",{onClick:()=>{const a=[...o];a[r]=(a[r]+1)%4,g(a)},className:"px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/40 rounded-lg text-xs font-mono font-bold text-cyan-300 hover:bg-cyan-500/30 transition",children:["Sample ",r,": Class ",n," ↻"]},r))}),e.jsx("span",{className:"text-[11px] text-slate-500 block mt-2",children:"(Click any badge to toggle class label 0..3)"})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-cyan-900/40",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-cyan-400 mb-3 font-bold",children:[e.jsx("span",{children:"Generated One-Hot Matrix: `np.eye(4)[labels]`"}),e.jsxs("span",{children:["Shape: (",o.length,", 4)"]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-slate-500 border-b border-slate-800",children:[e.jsx("th",{className:"p-1 text-left",children:"Sample"}),e.jsx("th",{className:"p-1 text-cyan-400",children:"Class 0"}),e.jsx("th",{className:"p-1 text-cyan-400",children:"Class 1"}),e.jsx("th",{className:"p-1 text-cyan-400",children:"Class 2"}),e.jsx("th",{className:"p-1 text-cyan-400",children:"Class 3"})]})}),e.jsx("tbody",{children:o.map((n,r)=>e.jsxs("tr",{className:"border-b border-slate-900",children:[e.jsxs("td",{className:"p-2 text-slate-400 font-sans text-left text-xs",children:["Sample ",r," (Label ",n,")"]}),[0,1,2,3].map(a=>e.jsx("td",{className:`p-2 border border-slate-800/80 rounded ${n===a?"bg-cyan-500/30 border-cyan-400 text-cyan-200 font-bold":"bg-slate-900/40 text-slate-600"}`,children:n===a?1:0},a))]},r))})]})})]})]}),s===2&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300 mb-1",children:"Problem 2: Fully Vectorized Pairwise Euclidean Distance Matrix"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Compute distance matrix between query samples A (3, 2) and training anchors B (4, 2) using 3D broadcasting and algebraic BLAS GEMM expansion."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold block mb-2",children:"3D Broadcasting Equation:"}),e.jsx("p",{className:"text-slate-300",children:"diff = A[:, np.newaxis, :] - B[np.newaxis, :, :]"}),e.jsx("p",{className:"text-slate-400 mt-1",children:"# Shape: (3, 1, 2) - (1, 4, 2) => (3, 4, 2)"}),e.jsx("p",{className:"text-emerald-400 font-bold mt-2",children:"D = np.sqrt(np.sum(diff**2, axis=2))"})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-blue-400 font-bold block mb-2",children:"Algebraic GEMM Expansion:"}),e.jsx("p",{className:"text-slate-300",children:"||a - b||² = ||a||² + ||b||² - 2(a · b)"}),e.jsx("p",{className:"text-slate-400 mt-1",children:"# Uses fast BLAS Level-3 GEMM matrix dot product"}),e.jsx("p",{className:"text-emerald-400 font-bold mt-2",children:"D_sq = A_sq + B_sq.T - 2*(A @ B.T)"})]})]})]}),s===3&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300 mb-1",children:"Problem 3: 1D Moving Average Filter with `np.convolve`"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Smooth raw time-series sensor fluctuations using rolling discrete box filter convolution."})]}),e.jsxs("div",{className:"flex items-center gap-4 p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400",children:"Select Window Size (w):"}),[2,3,4,5].map(n=>e.jsxs("button",{onClick:()=>y(n),className:`px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition ${l===n?"bg-cyan-500 border-cyan-400 text-slate-950":"bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200"}`,children:["w = ",n]},n))]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-slate-500 block mb-1",children:["Raw Series (",d.length," points):"]}),e.jsxs("span",{className:"text-slate-200 font-bold",children:["[",d.join(", "),"]"]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-cyan-900/50",children:[e.jsxs("span",{className:"text-cyan-400 block mb-1 font-bold",children:["Moving Average Output (",m.length," points):"]}),e.jsxs("span",{className:"text-cyan-200 font-bold",children:["[",m.join(", "),"]"]})]})]})]}),s===4&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300 mb-1",children:"Problem 4: Synchronous Mini-Batch SGD Generator"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Construct a Python generator that yields synchronous batches of features and target labels without losing sample alignment."})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2",children:[e.jsx("p",{className:"text-slate-500",children:"# Pure NumPy Batch Iterator Pattern"}),e.jsx("p",{children:"def generate_mini_batches(X, y, batch_size=32, shuffle=True):"}),e.jsx("p",{className:"pl-4",children:"indices = np.arange(len(X))"}),e.jsx("p",{className:"pl-4",children:"if shuffle: np.random.default_rng().shuffle(indices)"}),e.jsx("p",{className:"pl-4",children:"for i in range(0, len(X), batch_size):"}),e.jsx("p",{className:"pl-8 text-cyan-300 font-bold",children:"yield X[indices[i:i+batch_size]], y[indices[i:i+batch_size]]"})]})]})]})]}),t==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:p.map(n=>e.jsxs("button",{onClick:()=>h(n.id),className:`p-4 rounded-xl border text-left transition-all ${x===n.id?"bg-cyan-950/40 border-cyan-500 shadow-lg shadow-cyan-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:n.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:n.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:n.summary})]},n.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:c.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:c.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Practice Problems Suite"})]}),e.jsx(N,{fileModule:c.code,title:c.fileName})]})]}),t==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(j,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"Solving algorithmic problems in pure vectorized NumPy transforms you from a code scripter into a real machine learning engineer. Mastering one-liners like np.eye(C)[labels] and loopless pairwise distances proves that you think in terms of memory layouts and hardware vector pipelines."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(w,{content:D})]})]}),t==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(v,{questions:P})})]})};export{q as default};
