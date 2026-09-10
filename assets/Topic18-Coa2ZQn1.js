import{b as p,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as N}from"./PythonFileLoader-CiS1GfkF.js";import{F as _}from"./FAQTemplate-D_90hN4m.js";import{P as y}from"./PlainTextPrint-yt10TRX1.js";import{T as j}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const w=`"""\r
01_feature_centering_mean_subtraction.py\r
========================================\r
Worked Example 2: Mean Centering Feature Matrices via NumPy Broadcasting\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 2: FEATURE MEAN CENTERING VIA BROADCASTING")\r
    print("=" * 70)\r
\r
    # Problem:\r
    # A dataset of 4 students across 3 exam subjects (Math, Science, English)\r
    # Shape: (4, 3)\r
    X = np.array([\r
        [85.0, 90.0, 88.0],  # Debangshu\r
        [92.0, 95.0, 91.0],  # Susmita\r
        [65.0, 70.0, 72.0],  # Swadeep\r
        [88.0, 85.0, 94.0]   # Tuhina\r
    ])\r
\r
    print("1. Raw Feature Matrix X (4 students x 3 subjects):\\n", X)\r
    print("   Shape of X:", X.shape)\r
\r
    # 1. Calculate per-feature column mean: axis=0\r
    # Shape: (3,)\r
    mean_vec = np.mean(X, axis=0)\r
    print(f"\\n2. Column Means Vector mu: {np.round(mean_vec, 2)}")\r
    print(f"   Shape of mu: {mean_vec.shape}")\r
\r
    # 2. Broadcasting Subtraction: X - mu\r
    # X shape:        (4, 3)\r
    # mu shape:          (3,) -> Broadcasts along rows to (4, 3)\r
    # Result shape:   (4, 3)\r
    X_centered = X - mean_vec\r
    print("\\n3. Centered Feature Matrix (X - mu):\\n", np.round(X_centered, 2))\r
\r
    # Verify that the column means of X_centered are 0.0\r
    centered_means = np.mean(X_centered, axis=0)\r
    print(f"\\n4. Verification: New Column Means: {np.round(centered_means, 4)}")\r
    assert np.allclose(centered_means, 0.0)\r
    print("   -> Success: All features now zero-centered!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
02_per_sample_baseline_adjustment.py\r
====================================\r
Worked Example 2: Per-Sample Row-wise Broadcasting & (N, 1) Reshaping\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 2: ROW-WISE BROADCASTING & DIMENSION ALIGNMENT")\r
    print("=" * 70)\r
\r
    # 4 students, 3 subjects\r
    X = np.array([\r
        [85.0, 90.0, 88.0],  # Debangshu\r
        [92.0, 95.0, 91.0],  # Susmita\r
        [65.0, 70.0, 72.0],  # Swadeep\r
        [88.0, 85.0, 94.0]   # Tuhina\r
    ])\r
\r
    # Suppose we want to subtract each student's personal minimum score across subjects\r
    # to evaluate subject-specific outperformance.\r
    # Row minimums: axis=1\r
    min_scores_1d = np.min(X, axis=1)  # Shape: (4,)\r
    print("1. Per-student Min Scores (1D):", min_scores_1d, "Shape:", min_scores_1d.shape)\r
\r
    # Attempting X - min_scores_1d directly:\r
    # X shape:        (4, 3)\r
    # min shape:         (4,)\r
    # Right-aligned: (4, 3) vs ( , 4) -> 3 != 4 => Raises ValueError!\r
    print("\\nAttempting direct subtraction (X - min_scores_1d):")\r
    try:\r
        invalid_res = X - min_scores_1d\r
    except ValueError as e:\r
        print("  [ERROR CAUGHT]:", e)\r
\r
    # Correct Fix: Reshape min vector to (4, 1) using keepdims=True or np.newaxis\r
    min_scores_2d = min_scores_1d[:, np.newaxis]  # Shape: (4, 1)\r
    print("\\n2. Reshaped Min Scores (2D Column Vector):")\r
    print(min_scores_2d, "Shape:", min_scores_2d.shape)\r
\r
    # X shape:        (4, 3)\r
    # min_2d shape:   (4, 1) -> 1 expands to 3 along Axis 1!\r
    # Result:         (4, 3)\r
    X_relative = X - min_scores_2d\r
    print("\\n3. Relative Outperformance Matrix (X - min[:, np.newaxis]):\\n", X_relative)\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`"""\r
03_batch_image_rgb_channel_normalization.py\r
===========================================\r
Worked Example 2: Computer Vision ImageNet Channel Broadcasting on 4D Batch\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("WORKED EXAMPLE 2: 4D COMPUTER VISION BROADCASTING")\r
    print("=" * 70)\r
\r
    # In Computer Vision transfer learning (ResNet, VGG), input image batches\r
    # are normalized by subtracting ImageNet RGB channel means.\r
    # ImageNet Mean: R=123.68, G=116.78, B=103.94\r
    # ImageNet Std : R=58.393,  G=57.12,  B=57.375\r
\r
    # Simulated batch: 8 images, 224 height, 224 width, 3 color channels\r
    # Shape: (8, 224, 224, 3)\r
    np.random.seed(42)\r
    image_batch = np.random.uniform(0, 255, size=(8, 224, 224, 3)).astype(np.float32)\r
    print(f"1. Input Image Batch Shape: {image_batch.shape} (N=8, H=224, W=224, C=3)")\r
\r
    # 1D Channel Constants\r
    rgb_means_1d = np.array([123.68, 116.78, 103.94], dtype=np.float32)\r
    rgb_stds_1d  = np.array([58.393,  57.12,  57.375], dtype=np.float32)\r
\r
    # Broadcasting Alignment:\r
    # Image Batch Shape: (8, 224, 224, 3)\r
    # RGB Means Shape  :             (3,) -> Aligns with trailing dimension C=3!\r
    # Broadcasting stretches (3,) across N=8, H=224, W=224 automatically without allocating extra memory!\r
    normalized_batch = (image_batch - rgb_means_1d) / rgb_stds_1d\r
    print(f"\\n2. Normalized Batch Shape: {normalized_batch.shape}")\r
    print(f"   Original Sample 0, Pixel (0, 0) RGB: {image_batch[0, 0, 0]}")\r
    print(f"   Normalized Sample 0, Pixel (0, 0) RGB: {np.round(normalized_batch[0, 0, 0], 3)}")\r
\r
if __name__ == "__main__":\r
    main()\r
`,A=`========================================================================\r
TOPIC 18 NOTE: WORKED EXAMPLE 2 - BROADCASTING ADDITION & ARITHMETIC\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. CASE STUDY 1: FEATURE CENTERING & COLUMNAR BROADCASTING\r
----------------------------------------------------------\r
- Goal:\r
  Transform raw feature matrix X (shape: N x D) into zero-centered matrix X_centered.\r
- Mathematical Definition:\r
  X_centered[i, j] = X[i, j] - mu_j  where mu_j = (1/N) * sum_i (X[i, j]).\r
- NumPy Broadcasting Alignment:\r
  * X has shape:        (N, D)\r
  * mu has shape:          (D,)\r
  * Trailing dimensions match (D == D). NumPy implicitly pads mu to (1, D) and replicates it across all N rows without physical memory copy.\r
\r
2. CASE STUDY 2: ROW-WISE BROADCASTING & DIMENSIONAL TRAPS\r
----------------------------------------------------------\r
- The (N,) Trap:\r
  Subtracting a row-wise metric (e.g. per-student minimum) of shape (N,) from (N, D):\r
  * (N, D) vs ( , N) -> D != N -> Fails with \`ValueError: operands could not be broadcast together\`.\r
- Solution:\r
  Add singleton column dimension: \`row_stat[:, np.newaxis]\` or \`keepdims=True\`, producing shape \`(N, 1)\`.\r
  * (N, D) vs (N, 1) -> 1 expands to D -> Success!\r
\r
3. CASE STUDY 3: HIGH-DIMENSIONAL COMPUTER VISION BROADCASTING\r
--------------------------------------------------------------\r
- Input: Image Batch tensor of shape (N, H, W, C) = (8, 224, 224, 3).\r
- Subtracting ImageNet Channel Means:\r
  Array of shape (3,) automatically aligns with trailing axis C=3.\r
  NumPy scales across (8, 224, 224) dimensions with zero memory overhead and maximum C-level SIMD vectorization speed.\r
`,T=[{id:1,question:"Given a 2D array X of shape (4, 3) and a 1D column-mean vector `mu` of shape (3,), how does NumPy execute `X - mu`?",options:["It raises a ValueError because the arrays have different dimensions (2D vs 1D).","It aligns the trailing dimension 3 == 3, prepends a singleton dimension to mu (1, 3), and broadcasts it across all 4 rows.","It flattens X to 12 elements and subtracts mu 4 times.","It modifies the array X in-place to save memory."],correctAnswer:1,explanation:"According to NumPy broadcasting rules, dimensions are aligned from right to left. The trailing dimension (3) matches, and the missing left dimension is padded with 1 (making shape (1, 3)), which then broadcasts across all 4 rows."},{id:2,question:"Why does subtracting a 1D row-mean vector of shape (4,) from a matrix of shape (4, 3) raise a ValueError?",options:["Because row means cannot be negative numbers.","Because from right to left, the trailing dimension 3 of (4, 3) does not match dimension 4 of (4,), violating broadcasting rule 2.","Because 4 is greater than 3.","Because NumPy requires both arrays to be converted to lists first."],correctAnswer:1,explanation:"When comparing (4, 3) with (4,), right-to-left alignment compares 3 with 4. Since neither is 1 and 3 != 4, broadcasting fails. To fix it, reshape the 1D vector to (4, 1)."},{id:3,question:"How can you safely reshape a 1D row vector `row_stats` of shape (N,) so it can broadcast row-wise against a matrix of shape (N, D)?",options:["row_stats.reshape(1, N)","row_stats[:, np.newaxis] or row_stats.reshape(-1, 1)","np.transpose(row_stats)","row_stats.flatten()"],correctAnswer:1,explanation:"`row_stats[:, np.newaxis]` or `.reshape(-1, 1)` transforms the 1D array of shape (N,) into a 2D column vector of shape (N, 1). The 1 expands along Axis 1 to match D."},{id:4,question:"When subtracting 3-element channel means `rgb_mean = np.array([123.68, 116.78, 103.94])` from an image batch `X` of shape (8, 224, 224, 3), how many total pixels are modified without memory replication?",options:["8 * 224 * 224 = 401,408 pixels (1,204,224 total channel values).","Only the first 3 pixels.","3 * 8 = 24 values.","None, broadcasting creates a full copy of the entire batch."],correctAnswer:0,explanation:"Broadcasting modifies all 8 * 224 * 224 * 3 = 1,204,224 floating-point values in C-speed vectorized loops without ever duplicating the 3-element mean vector in RAM!"},{id:5,question:"What will be the column-wise mean of any feature matrix X after computing `X_centered = X - np.mean(X, axis=0)`?",options:["1.0 for each column.","0.0 for each column (within floating-point precision).","Equal to the original standard deviation.","Undetermined until normalized by variance."],correctAnswer:1,explanation:"Subtracting the column mean shifts the distribution center to zero: sum(X_i - mu) = sum(X_i) - N*mu = N*mu - N*mu = 0."}],h=[{id:"part1",fileName:"01_feature_centering_mean_subtraction.py",title:"1. Feature Centering (Columnar Broadcasting)",badge:"Column Centering",code:w,summary:"Demonstrates column mean subtraction X - mu where (3,) broadcasts across (4, 3) to yield zero-centered features."},{id:"part2",fileName:"02_per_sample_baseline_adjustment.py",title:"2. Per-Sample Row-wise Broadcasting",badge:"Row (N, 1) Alignment",code:S,summary:"Fixes broadcasting shape mismatches using np.newaxis / keepdims=True to subtract per-student min values (4, 1) from (4, 3)."},{id:"part3",fileName:"03_batch_image_rgb_channel_normalization.py",title:"3. 4D ImageNet RGB Channel Broadcasting",badge:"4D Vision Tensor",code:v,summary:"Applies 1D RGB channel constants (3,) to 4D image batch tensors (8, 224, 224, 3) with zero memory duplication."}],d=[{name:"Debangshu",math:85,science:90,english:88},{name:"Susmita",math:92,science:95,english:91},{name:"Swadeep",math:65,science:70,english:72},{name:"Tuhina",math:88,science:85,english:94}],P=()=>{const[l,b]=p.useState("broadcasting_simulator"),[x,g]=p.useState("part1"),[n,f]=p.useState("column_centering"),c=h.find(a=>a.id===x)||h[0],o={math:82.5,science:85,english:86.25},u=d.map(a=>Math.min(a.math,a.science,a.english));return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-emerald-900/60 via-slate-900 to-teal-900/60 border border-emerald-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-500/40",children:"Topic 18 • Practical Case Study"}),e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Worked Example 2"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-300 bg-clip-text text-transparent",children:"Worked Example 2: Broadcasting Addition & Centering"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:"Apply broadcasting principles to real-world machine learning preprocessing: zero-centering feature columns, per-sample baseline subtractions, and high-dimensional computer vision image normalization."})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"broadcasting_simulator",label:"Interactive Broadcasting Sandbox",icon:"📡"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(a=>e.jsxs("button",{onClick:()=>b(a.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${l===a.id?"bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:a.icon}),a.label]},a.id))})]}),l==="broadcasting_simulator"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsx("h3",{className:"text-xs font-bold text-emerald-300 uppercase tracking-wider mb-3",children:"Select Broadcasting Scenario:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"column_centering",title:"1. Column Mean Centering",desc:"X - mu (Shape: (4, 3) - (3,))"},{id:"row_baseline",title:"2. Row-Wise Min Subtraction",desc:"X - min[:, np.newaxis] (Shape: (4, 3) - (4, 1))"},{id:"scalar_boost",title:"3. Scalar Grace Score",desc:"X + 5.0 (Shape: (4, 3) + ())"}].map(a=>e.jsxs("button",{onClick:()=>f(a.id),className:`p-3.5 rounded-xl border text-left transition ${n===a.id?"bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-md shadow-emerald-500/10":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-slate-200",children:a.title}),e.jsx("div",{className:"text-[11px] text-slate-400 font-mono mt-1",children:a.desc})]},a.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h4",{className:"text-base font-bold text-slate-200 flex items-center justify-between",children:[e.jsx("span",{children:"1. Original Feature Matrix X"}),e.jsx("span",{className:"text-xs px-2.5 py-0.5 bg-slate-800 text-slate-400 font-mono rounded",children:"Shape: (4, 3)"})]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-slate-400 border-b border-slate-800",children:[e.jsx("th",{className:"p-1.5 text-left",children:"Student"}),e.jsx("th",{className:"p-1.5 text-emerald-400",children:"Math"}),e.jsx("th",{className:"p-1.5 text-emerald-400",children:"Science"}),e.jsx("th",{className:"p-1.5 text-emerald-400",children:"English"})]})}),e.jsx("tbody",{children:d.map((a,i)=>e.jsxs("tr",{className:"border-b border-slate-900",children:[e.jsx("td",{className:"p-2 text-slate-400 font-sans text-left text-xs",children:a.name}),e.jsx("td",{className:"p-2 bg-slate-900/60 text-slate-200",children:a.math}),e.jsx("td",{className:"p-2 bg-slate-900/60 text-slate-200",children:a.science}),e.jsx("td",{className:"p-2 bg-slate-900/60 text-slate-200",children:a.english})]},i))})]})}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-cyan-400 mb-2 font-bold",children:[e.jsx("span",{children:"Broadcast Vector / Constant B"}),e.jsxs("span",{children:["Shape: ",n==="column_centering"?"(3,)":n==="row_baseline"?"(4, 1)":"()"]})]}),n==="column_centering"&&e.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center text-xs font-mono",children:[e.jsxs("div",{className:"p-2 bg-cyan-950/40 border border-cyan-800/60 rounded text-cyan-300",children:["Math: ",o.math]}),e.jsxs("div",{className:"p-2 bg-cyan-950/40 border border-cyan-800/60 rounded text-cyan-300",children:["Sci: ",o.science]}),e.jsxs("div",{className:"p-2 bg-cyan-950/40 border border-cyan-800/60 rounded text-cyan-300",children:["Eng: ",o.english]})]}),n==="row_baseline"&&e.jsx("div",{className:"grid grid-cols-4 gap-2 text-center text-xs font-mono",children:d.map((a,i)=>e.jsxs("div",{className:"p-2 bg-cyan-950/40 border border-cyan-800/60 rounded text-cyan-300",children:[a.name,": ",u[i]]},i))}),n==="scalar_boost"&&e.jsx("div",{className:"p-2 bg-cyan-950/40 border border-cyan-800/60 rounded text-cyan-300 text-center font-mono text-xs",children:"Scalar Value = +5.0 Marks"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-base font-bold text-emerald-300 mb-2",children:"2. Resulting Transformed Matrix"}),e.jsx("p",{className:"text-xs text-slate-400 mb-4 font-mono",children:n==="column_centering"?"X_centered = X - np.mean(X, axis=0)":n==="row_baseline"?"X_relative = X - np.min(X, axis=1)[:, np.newaxis]":"X_boosted = X + 5.0"}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-slate-400 border-b border-slate-800",children:[e.jsx("th",{className:"p-1.5 text-left",children:"Student"}),e.jsx("th",{className:"p-1.5 text-amber-400",children:"Math"}),e.jsx("th",{className:"p-1.5 text-amber-400",children:"Science"}),e.jsx("th",{className:"p-1.5 text-amber-400",children:"English"})]})}),e.jsx("tbody",{children:d.map((a,i)=>{let t=a.math,r=a.science,s=a.english;if(n==="column_centering")t=parseFloat((t-o.math).toFixed(2)),r=parseFloat((r-o.science).toFixed(2)),s=parseFloat((s-o.english).toFixed(2));else if(n==="row_baseline"){const m=u[i];t=t-m,r=r-m,s=s-m}else n==="scalar_boost"&&(t=t+5,r=r+5,s=s+5);return e.jsxs("tr",{className:"border-b border-slate-900",children:[e.jsx("td",{className:"p-2 text-slate-400 font-sans text-left text-xs",children:a.name}),e.jsx("td",{className:"p-2 bg-emerald-950/30 text-emerald-200 font-bold",children:t>0&&n==="column_centering"?`+${t}`:t}),e.jsx("td",{className:"p-2 bg-emerald-950/30 text-emerald-200 font-bold",children:r>0&&n==="column_centering"?`+${r}`:r}),e.jsx("td",{className:"p-2 bg-emerald-950/30 text-emerald-200 font-bold",children:s>0&&n==="column_centering"?`+${s}`:s})]},i)})})]})})]}),e.jsxs("div",{className:"mt-6 p-4 bg-emerald-950/30 border border-emerald-900/60 rounded-xl text-xs text-slate-300",children:[e.jsx("span",{className:"text-emerald-300 font-bold block mb-1",children:"⚡ Zero Memory Duplication:"}),"Broadcasting does not physically clone the vector into a 4x3 array in RAM. Instead, it strides across memory at pointer offset 0, executing blazing-fast SIMD operations!"]})]})]})]}),l==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:h.map(a=>e.jsxs("button",{onClick:()=>g(a.id),className:`p-4 rounded-xl border text-left transition-all ${x===a.id?"bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:a.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:a.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:a.summary})]},a.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-emerald-300",children:c.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:c.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Worked Example 2 Suite"})]}),e.jsx(N,{fileModule:c.code,title:c.fileName})]})]}),l==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(j,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"Broadcasting is the secret weapon of efficient NumPy and PyTorch code. Always align dimensions from right to left in your head. When subtracting per-row statistics like mins or medians, never forget to keep the singleton column dimension (N, 1) using keepdims=True or np.newaxis!"}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(y,{content:A})]})]}),l==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(_,{questions:T})})]})};export{P as default};
