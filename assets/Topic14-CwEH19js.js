import{b as c,j as e,R as B}from"./vendor-react-core-CaA1o1Cx.js";import{P as X}from"./PythonFileLoader-DUNJ9gwR.js";import{F as D}from"./FAQTemplate-D_90hN4m.js";import{P as L}from"./PlainTextPrint-yt10TRX1.js";import{T as P}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const R=`"""\r
01_dot_product_vectors_and_geometry.py\r
======================================\r
Topic: 1D Vector Dot Product, Geometric Interpretation & Cosine Similarity\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("1D VECTOR DOT PRODUCT & GEOMETRIC PROJECTION")\r
    print("=" * 70)\r
\r
    # 1. Defining two vectors representing feature embeddings\r
    # e.g., Debangshu and Susmita's preference scores for [Action, Romance, Sci-Fi]\r
    u = np.array([4.0, 1.0, 5.0])\r
    v = np.array([3.0, 2.0, 4.0])\r
\r
    print(f"Vector u (Debangshu): {u}, Shape: {u.shape}")\r
    print(f"Vector v (Susmita)  : {v}, Shape: {v.shape}")\r
\r
    # 2. Algebraic Dot Product: sum(u_i * v_i)\r
    # 4*3 + 1*2 + 5*4 = 12 + 2 + 20 = 34\r
    dot_manual = np.sum(u * v)\r
    dot_np = np.dot(u, v)\r
    dot_matmul = u @ v  # Python 3.5+ infix matrix multiplication operator\r
\r
    print(f"\\nAlgebraic Calculation:")\r
    print(f"  Element-wise product (u * v)  : {u * v}")\r
    print(f"  np.sum(u * v)                 : {dot_manual}")\r
    print(f"  np.dot(u, v)                  : {dot_np}")\r
    print(f"  u @ v                         : {dot_matmul}")\r
    assert dot_manual == dot_np == dot_matmul == 34.0\r
\r
    # 3. Geometric Interpretation: u . v = ||u|| * ||v|| * cos(theta)\r
    # Vector Norms (Euclidean lengths)\r
    norm_u = np.linalg.norm(u)  # sqrt(4^2 + 1^2 + 5^2) = sqrt(42) ≈ 6.4807\r
    norm_v = np.linalg.norm(v)  # sqrt(3^2 + 2^2 + 4^2) = sqrt(29) ≈ 5.3851\r
\r
    # Cosine Similarity = (u . v) / (||u|| * ||v||)\r
    cos_theta = np.dot(u, v) / (norm_u * norm_v)\r
    theta_rad = np.arccos(np.clip(cos_theta, -1.0, 1.0))\r
    theta_deg = np.degrees(theta_rad)\r
\r
    print(f"\\nGeometric Analysis:")\r
    print(f"  Norm ||u||                    : {norm_u:.4f}")\r
    print(f"  Norm ||v||                    : {norm_v:.4f}")\r
    print(f"  Cosine Similarity (cos θ)     : {cos_theta:.4f}")\r
    print(f"  Angle between vectors θ       : {theta_deg:.2f}°")\r
\r
    # 4. Orthogonal Vectors (Dot product = 0)\r
    ortho_1 = np.array([2.0, 0.0, -1.0])\r
    ortho_2 = np.array([1.0, 5.0, 2.0])\r
    # 2*1 + 0*5 + (-1)*2 = 2 + 0 - 2 = 0\r
    dot_ortho = np.dot(ortho_1, ortho_2)\r
    print(f"\\nOrthogonal Test:")\r
    print(f"  ortho_1 . ortho_2             : {dot_ortho} (Vectors are perpendicular)")\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
02_matrix_multiplication_2d_dot_vs_matmul.py\r
============================================\r
Topic: 2D Matrix Multiplication, (M, K) @ (K, N) Rules, and Dot vs Matmul\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("2D MATRIX MULTIPLICATION & OPERATOR DIFFERENCES")\r
    print("=" * 70)\r
\r
    # Matrix A: (3 x 2) -> 3 students, 2 exam components (Theory, Practical)\r
    A = np.array([\r
        [80, 20],  # Debangshu\r
        [90, 25],  # Susmita\r
        [70, 15]   # Swadeep\r
    ])\r
\r
    # Matrix B: (2 x 4) -> 2 components mapped to 4 weight criteria\r
    # [Term1, Term2, Final, Grace]\r
    B = np.array([\r
        [0.3, 0.3, 0.4, 0.05],\r
        [0.2, 0.2, 0.6, 0.10]\r
    ])\r
\r
    print(f"Matrix A shape (M, K): {A.shape}")\r
    print(f"Matrix B shape (K, N): {B.shape}")\r
    print("\\nMatrix A (Students x Components):\\n", A)\r
    print("\\nMatrix B (Components x Criteria Weights):\\n", B)\r
\r
    # 1. Inner Dimension Rule Check:\r
    # A has shape (3, 2), B has shape (2, 4)\r
    # Inner dimensions match: 2 == 2. Output shape = (3, 4)\r
    assert A.shape[1] == B.shape[0], "Inner dimensions must match!"\r
\r
    # 2. Multiplication via np.dot, np.matmul, and @ operator\r
    C_dot = np.dot(A, B)\r
    C_matmul = np.matmul(A, B)\r
    C_operator = A @ B\r
\r
    print(f"\\nResulting Matrix C Shape: {C_dot.shape} (M, N = 3, 4)")\r
    print("\\nResult C = A @ B:\\n", np.round(C_operator, 2))\r
    assert np.allclose(C_dot, C_matmul) and np.allclose(C_dot, C_operator)\r
\r
    # 3. Element-wise Multiplication (*) vs Matrix Multiplication (@)\r
    print("\\nCRITICAL DIFFERENCE: (*) vs (@):")\r
    Square1 = np.array([[1, 2], [3, 4]])\r
    Square2 = np.array([[5, 6], [7, 8]])\r
\r
    elem_prod = Square1 * Square2  # [[1*5, 2*6], [3*7, 4*8]] = [[5, 12], [21, 32]]\r
    mat_prod = Square1 @ Square2   # [[1*5+2*7, 1*6+2*8], [3*5+4*7, 3*6+4*8]] = [[19, 22], [43, 50]]\r
\r
    print("  Square1 * Square2 (Hadamard / Element-wise):\\n", elem_prod)\r
    print("  Square1 @ Square2 (Matrix product / Row-dot-Column):\\n", mat_prod)\r
\r
if __name__ == "__main__":\r
    main()\r
`,I=`"""\r
03_inner_dimension_mismatch_and_transpose.py\r
============================================\r
Topic: Debugging Dimension Mismatches & Utilizing Transposition (.T)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("INNER DIMENSION MISMATCH & TRANSPOSITION (.T)")\r
    print("=" * 70)\r
\r
    # Consider two feature matrices from Barrackpore test center\r
    # X1: 4 students, 3 features (Batch A) -> (4, 3)\r
    # X2: 5 students, 3 features (Batch B) -> (5, 3)\r
    X1 = np.array([\r
        [85, 90, 88],\r
        [92, 95, 91],\r
        [65, 70, 72],\r
        [88, 85, 94]\r
    ])\r
    X2 = np.array([\r
        [80, 82, 85],\r
        [75, 78, 80],\r
        [90, 92, 95],\r
        [60, 65, 70],\r
        [88, 90, 92]\r
    ])\r
\r
    print(f"X1 shape: {X1.shape} (N=4, D=3)")\r
    print(f"X2 shape: {X2.shape} (M=5, D=3)")\r
\r
    # 1. Attempting direct matrix multiplication: X1 @ X2\r
    print("\\nAttempting X1 @ X2:")\r
    try:\r
        result = X1 @ X2\r
    except ValueError as e:\r
        print(f"  [ERROR CAUGHT]: {e}")\r
        print("  Reason: Inner dimensions (3) and (5) do NOT match!")\r
\r
    # 2. Fixing via Transpose: X1 @ X2.T -> (4, 3) @ (3, 5) => (4, 5)\r
    # This computes sample-to-sample similarity (Gram matrix) between Batch A and Batch B\r
    print("\\nCorrect Alignment using Transpose: X1 @ X2.T")\r
    X2_T = X2.T\r
    print(f"  X2.T shape: {X2_T.shape}")\r
    similarity_matrix = X1 @ X2_T\r
    print(f"  Resulting Gram Matrix shape: {similarity_matrix.shape} (4 students vs 5 students)")\r
    print("  Similarity Matrix:\\n", similarity_matrix)\r
\r
    # 3. Covariance Feature Cross-Product: X1.T @ X1 -> (3, 4) @ (4, 3) => (3, 3)\r
    # This computes feature-to-feature unnormalized covariance matrix\r
    print("\\nFeature Interaction Matrix (X1.T @ X1):")\r
    feat_cov = X1.T @ X1\r
    print(f"  Shape: {feat_cov.shape} (D=3, D=3 features)")\r
    print("  Matrix:\\n", feat_cov)\r
\r
if __name__ == "__main__":\r
    main()\r
`,O=`"""\r
04_ml_forward_pass_linear_layer.py\r
==================================\r
Topic: ML Neural Network Dense Layer Forward Pass (Z = X @ W + b) & OLS Normal Equation\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Python Foundations\r
"""\r
\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("MACHINE LEARNING FORWARD PASS & NORMAL EQUATION")\r
    print("=" * 70)\r
\r
    # 1. Neural Network Linear / Dense Layer Forward Pass\r
    # Batch size N = 4 samples, Input features D_in = 3\r
    # Output neurons D_out = 2 (e.g. Pass probability, Merit probability)\r
    np.random.seed(42)\r
\r
    X = np.array([\r
        [85, 90, 88],  # Debangshu\r
        [92, 95, 91],  # Susmita\r
        [65, 70, 72],  # Swadeep\r
        [88, 85, 94]   # Tuhina\r
    ], dtype=np.float64)\r
\r
    # Weights matrix: shape (D_in, D_out) = (3, 2)\r
    W = np.random.randn(3, 2) * 0.01\r
    # Bias vector: shape (D_out,) = (2,)\r
    b = np.array([0.5, -0.2])\r
\r
    print(f"Input batch X shape     : {X.shape} (N=4, D_in=3)")\r
    print(f"Weights W shape         : {W.shape} (D_in=3, D_out=2)")\r
    print(f"Bias b shape            : {b.shape} (D_out=2)")\r
\r
    # Linear transformation: Z = X @ W + b\r
    # (4, 3) @ (3, 2) -> (4, 2) + (2,) via broadcasting -> (4, 2)\r
    Z = (X @ W) + b\r
    print(f"\\nForward Pass Output Logits Z shape: {Z.shape}")\r
    print("Z (Logits):\\n", np.round(Z, 4))\r
\r
    # 2. Ordinary Least Squares (OLS) Normal Equation: theta = (X^T @ X)^(-1) @ X^T @ y\r
    print("\\n" + "=" * 50)\r
    print("ORDINARY LEAST SQUARES (NORMAL EQUATION) DEMO")\r
    print("=" * 50)\r
\r
    # Synthetic 1D regression with bias term prepended\r
    # X_reg: [1.0, Study_Hours]\r
    X_reg = np.array([\r
        [1.0, 2.0],  # 2 hrs study -> marks: 50\r
        [1.0, 4.0],  # 4 hrs study -> marks: 70\r
        [1.0, 6.0],  # 6 hrs study -> marks: 85\r
        [1.0, 8.0]   # 8 hrs study -> marks: 95\r
    ])\r
    y = np.array([50.0, 70.0, 85.0, 95.0])\r
\r
    # Compute theta = inv(X^T @ X) @ X^T @ y\r
    XtX = X_reg.T @ X_reg\r
    XtX_inv = np.linalg.inv(XtX)\r
    Xty = X_reg.T @ y\r
    theta = XtX_inv @ Xty\r
\r
    print(f"Learned Parameters [Intercept, Slope]: {np.round(theta, 4)}")\r
    print(f"Regression Line: y_pred = {theta[0]:.2f} + {theta[1]:.2f} * Hours")\r
\r
    # Predict marks for 5 hours of study\r
    pred_5_hrs = np.array([1.0, 5.0]) @ theta\r
    print(f"Prediction for 5 hours of study: {pred_5_hrs:.2f} marks")\r
\r
if __name__ == "__main__":\r
    main()\r
`,k=`========================================================================\r
TOPIC 14 NOTE: MATRIX MULTIPLICATION & DOT PRODUCT (np.dot, @, np.matmul)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. KEY CONCEPTS & DEFINITIONS\r
------------------------------\r
- Vector Dot Product (1D):\r
  u . v = sum(u_i * v_i) for i in [0..N-1]\r
  Geometrically: u . v = ||u|| * ||v|| * cos(theta).\r
  Used for calculating vector similarity, cosine distances, and projection.\r
\r
- 2D Matrix Multiplication (Row-by-Column):\r
  Given Matrix A of shape (M, K) and Matrix B of shape (K, N), the product\r
  C = A @ B has shape (M, N).\r
  Each element C[i, j] = sum_k (A[i, k] * B[k, j]).\r
  Inner dimensions MUST MATCH: A.shape[1] == B.shape[0] == K.\r
\r
- Operator Comparison in NumPy:\r
  * A * B        : Element-wise (Hadamard) product. Requires identical shapes or broadcasting.\r
  * np.dot(A, B) : Matrix product for 2D. (For N-D arrays, performs sum reduction over last axis of A and second-to-last of B).\r
  * np.matmul(A,B) or A @ B : Standard matrix multiplication operator (PEP 465). Supports batch matrix multiplication on higher dimensions.\r
\r
2. MACHINE LEARNING APPLICATIONS\r
---------------------------------\r
- Fully Connected / Dense Layer Forward Pass:\r
  Z = X @ W + b\r
  where X is (N_samples, D_in), W is (D_in, D_out), b is (D_out,), producing logits Z of shape (N_samples, D_out).\r
\r
- Linear Regression Normal Equation (Closed-form OLS):\r
  theta = (X^T @ X)^(-1) @ X^T @ y\r
\r
- Covariance and Gram Matrices:\r
  * Sample Similarity (Gram Matrix) : S = X @ X.T (N x N)\r
  * Feature Covariance Structure   : C = (X.T @ X) / N (D x D)\r
\r
3. COMMON PITFALLS & BARRACKPORE LAB RULES\r
------------------------------------------\r
- Pitfall 1: Confusing A * B with A @ B.\r
  If A and B are (3, 3), A * B multiplies element-by-element, while A @ B calculates dot products across rows and columns.\r
- Pitfall 2: Inner dimension mismatch: Trying to multiply (4, 3) @ (5, 3).\r
  Solution: Transpose the second matrix with .T -> (4, 3) @ (3, 5) => (4, 5).\r
- Pitfall 3: 1D vector orientation. In NumPy, a 1D array has shape (N,), which automatically adapts to (1, N) as a row vector on the left or (N, 1) as a column vector on the right when multiplied by a 2D matrix.\r
`,q=[{id:1,question:"What is the key difference between A * B and A @ B for two 2D NumPy arrays of shape (3, 3)?",options:["A * B computes element-wise multiplication, whereas A @ B performs true matrix multiplication (row-dot-column).","A * B performs matrix multiplication, whereas A @ B performs scalar addition.","Both operators perform identical operations in modern NumPy.","A @ B is only valid for 1D arrays, while A * B is for 2D arrays."],correctAnswer:0,explanation:"In NumPy, the asterisk (*) operator represents the Hadamard (element-wise) product where C[i, j] = A[i, j] * B[i, j]. The @ operator (or np.matmul / np.dot for 2D) represents matrix multiplication where C[i, j] is the dot product of row i of A with column j of B."},{id:2,question:"Given matrix A of shape (100, 10) and matrix B of shape (20, 10), why does `A @ B` raise a ValueError, and how should it be fixed to calculate sample similarities?",options:["Because arrays must be 1D; use A.flatten() @ B.flatten().","Because the inner dimensions (10 and 20) do not match; fix it by transposing B as `A @ B.T`, resulting in shape (100, 20).","Because 100 is greater than 20; swap the matrices to `B @ A`.","Because NumPy requires np.multiply for matrices of different row counts."],correctAnswer:1,explanation:"For matrix multiplication (M, K) @ (P, N), the inner dimensions K and P must match. Here K=10 and P=20. Transposing B yields shape (10, 20), making `A @ B.T` valid with shape (100, 20)."},{id:3,question:"In a Neural Network dense layer forward pass with input X (batch size N=32, features D=128) and weights W (D=128, units M=64) plus bias b (shape (64,)), what is the shape of Z = X @ W + b?",options:["(128, 64)","(32, 128)","(32, 64)","(64, 32)"],correctAnswer:2,explanation:"X @ W has shape (32, 128) @ (128, 64) = (32, 64). Adding bias b of shape (64,) broadcasts across the batch dimension, yielding final output logits of shape (32, 64)."},{id:4,question:"What does the dot product of two normalized unit vectors (||u|| = 1, ||v|| = 1) evaluate to geometrically?",options:["The Euclidean distance between the two points.","The Cosine Similarity (cos θ) between the two vectors.","The determinant of the 2x2 matrix formed by u and v.","The projection length divided by pi."],correctAnswer:1,explanation:"Since u · v = ||u|| * ||v|| * cos(θ), when ||u|| = 1 and ||v|| = 1, the dot product u · v simplifies directly to cos(θ), which is the Cosine Similarity metric."},{id:5,question:"In Ordinary Least Squares (OLS) regression, what is the closed-form Normal Equation to compute optimal weights θ?",options:["θ = (X @ X.T)^(-1) @ X @ y","θ = (X.T @ X)^(-1) @ X.T @ y","θ = X.T @ (X @ y)^(-1)","θ = (X.T @ y) / (X.T @ X)"],correctAnswer:1,explanation:"The normal equation for Linear Regression is θ = (X.T @ X)^(-1) @ X.T @ y, derived by setting the gradient of the sum of squared residuals with respect to θ equal to zero."}],u=[{id:"part1",fileName:"01_dot_product_vectors_and_geometry.py",title:"1. 1D Dot Product & Cosine Similarity",badge:"Vector Dot",code:R,summary:"Calculates algebraic dot product sum(u_i * v_i), Euclidean vector norms, and cosine similarity angle between embeddings."},{id:"part2",fileName:"02_matrix_multiplication_2d_dot_vs_matmul.py",title:"2. 2D Matrix Multiplication & @ vs *",badge:"2D (M, K) @ (K, N)",code:E,summary:"Demonstrates row-by-column matrix multiplication, checks inner dimension alignment, and contrasts (*) element-wise vs (@) matrix dot product."},{id:"part3",fileName:"03_inner_dimension_mismatch_and_transpose.py",title:"3. Dimension Mismatches & Transposition (.T)",badge:"Shapes & Transpose",code:I,summary:"Fixes shape mismatch ValueError via transposing matrices (.T) to compute Gram sample similarities and feature covariance matrices."},{id:"part4",fileName:"04_ml_forward_pass_linear_layer.py",title:"4. ML Forward Pass & Normal Equation",badge:"ML Dense Layer",code:O,summary:"Implements dense layer forward pass Z = X @ W + b and solves Ordinary Least Squares (OLS) closed-form normal equation theta = (X^T X)^-1 X^T y."}],_=[{name:"Students x Scores (3x2)",rows:3,cols:2,rowLabels:["Debangshu","Susmita","Swadeep"],colLabels:["Theory","Lab"],data:[[80,20],[90,25],[70,15]]},{name:"Linear Layer Batch (2x3)",rows:2,cols:3,rowLabels:["Sample 1","Sample 2"],colLabels:["F1","F2","F3"],data:[[2,4,1],[5,1,3]]}],v=[{name:"Weights x Criteria (2x3)",rows:2,cols:3,rowLabels:["Theory","Lab"],colLabels:["Term 1","Term 2","Final"],data:[[.3,.3,.4],[.2,.2,.6]]},{name:"Dense Weights (3x2)",rows:3,cols:2,rowLabels:["F1","F2","F3"],colLabels:["Neuron 1","Neuron 2"],data:[[.5,-.2],[.1,.8],[-.4,.6]]}],$=()=>{const[d,w]=c.useState("interactive_matmul"),[b,A]=c.useState("part1"),[f,T]=c.useState(0),[N,S]=c.useState(0),[a,x]=c.useState({r:0,c:0}),m=u.find(t=>t.id===b)||u[0],s=_[f],n=v[N],l=s.cols===n.rows,g=s.rows,j=n.cols,h=(()=>{if(!l)return null;const t=[];for(let r=0;r<g;r++){const i=[];for(let o=0;o<j;o++){let y=0;for(let p=0;p<s.cols;p++)y+=s.data[r][p]*n.data[p][o];i.push(parseFloat(y.toFixed(2)))}t.push(i)}return t})(),M=l&&a?s.data[a.r]:[],C=l&&a?n.data.map(t=>t[a.c]):[];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-teal-900/60 via-slate-900 to-indigo-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Topic 14 • Linear Algebra in ML"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/40",children:"np.dot() & @ Operator"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-200 via-cyan-100 to-indigo-300 bg-clip-text text-transparent",children:"Matrix Multiplication with np.dot() & @"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Master row-by-column matrix dot products, dimensional alignment rules ",e.jsx("code",{className:"text-teal-300 font-mono",children:"(M, K) @ (K, N) → (M, N)"}),", the critical distinction between element-wise ",e.jsx("code",{className:"text-amber-300",children:"*"})," and matrix dot ",e.jsx("code",{className:"text-teal-300",children:"@"}),", and neural network forward pass mechanics."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"interactive_matmul",label:"Interactive MatMul Visualizer",icon:"🔢"},{id:"operator_comparison",label:"@ vs * Comparison",icon:"⚡"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(t=>e.jsxs("button",{onClick:()=>w(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${d===t.id?"bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:t.icon}),t.label]},t.id))})]}),d==="interactive_matmul"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-base font-bold text-teal-300",children:"Matrix A (Left Matrix)"}),e.jsxs("span",{className:"text-xs px-2 py-0.5 bg-teal-500/20 text-teal-300 rounded font-mono",children:["(",s.rows,", ",s.cols,")"]})]}),e.jsx("div",{className:"flex gap-2 mb-4",children:_.map((t,r)=>e.jsx("button",{onClick:()=>{T(r),x({r:0,c:0})},className:`text-xs px-3 py-1.5 rounded-lg border font-medium transition ${f===r?"bg-teal-500/20 border-teal-500 text-teal-200":"bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200"}`,children:t.name},t.name))}),e.jsx("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-1 text-slate-500"}),s.colLabels.map((t,r)=>e.jsx("th",{className:"p-1 text-teal-400 font-semibold",children:t},r))]})}),e.jsx("tbody",{children:s.data.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 text-slate-400 font-sans text-[11px] text-right pr-2",children:s.rowLabels[r]}),t.map((i,o)=>e.jsx("td",{className:`p-2 rounded border transition ${a.r===r&&l?"bg-teal-500/30 border-teal-400 text-teal-200 font-bold":"bg-slate-900/60 border-slate-800 text-slate-300"}`,children:i},o))]},r))})]})})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-base font-bold text-indigo-300",children:"Matrix B (Right Matrix)"}),e.jsxs("span",{className:"text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded font-mono",children:["(",n.rows,", ",n.cols,")"]})]}),e.jsx("div",{className:"flex gap-2 mb-4",children:v.map((t,r)=>e.jsx("button",{onClick:()=>{S(r),x({r:0,c:0})},className:`text-xs px-3 py-1.5 rounded-lg border font-medium transition ${N===r?"bg-indigo-500/20 border-indigo-500 text-indigo-200":"bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200"}`,children:t.name},t.name))}),e.jsx("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-1 text-slate-500"}),n.colLabels.map((t,r)=>e.jsx("th",{className:"p-1 text-indigo-400 font-semibold",children:t},r))]})}),e.jsx("tbody",{children:n.data.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 text-slate-400 font-sans text-[11px] text-right pr-2",children:n.rowLabels[r]}),t.map((i,o)=>e.jsx("td",{className:`p-2 rounded border transition ${a.c===o&&l?"bg-indigo-500/30 border-indigo-400 text-indigo-200 font-bold":"bg-slate-900/60 border-slate-800 text-slate-300"}`,children:i},o))]},r))})]})})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-base font-bold text-amber-300",children:"Result Matrix C = A @ B"}),l?e.jsxs("span",{className:"text-xs px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded font-mono",children:["(",g,", ",j,")"]}):e.jsx("span",{className:"text-xs px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded font-mono",children:"Dimension Mismatch"})]}),l?e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-slate-400 mb-3",children:"Click any cell below to see its exact row-dot-column calculation:"}),e.jsx("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-1 text-slate-500"}),n.colLabels.map((t,r)=>e.jsx("th",{className:"p-1 text-amber-400 font-semibold",children:t},r))]})}),e.jsx("tbody",{children:h.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 text-slate-400 font-sans text-[11px] text-right pr-2",children:s.rowLabels[r]}),t.map((i,o)=>e.jsx("td",{onClick:()=>x({r,c:o}),className:`p-2 rounded border cursor-pointer transition transform hover:scale-105 ${a.r===r&&a.c===o?"bg-amber-500 border-amber-300 text-slate-950 font-black shadow-lg shadow-amber-500/30":"bg-slate-900/80 border-slate-700 text-amber-200 hover:border-amber-400"}`,children:i},o))]},r))})]})})]}):e.jsxs("div",{className:"p-4 bg-rose-950/40 border border-rose-800 rounded-xl text-xs text-rose-300",children:[e.jsx("p",{className:"font-bold text-sm mb-1",children:"❌ ValueError: shapes not aligned!"}),e.jsxs("p",{children:["Matrix A columns (",s.cols,") ≠ Matrix B rows (",n.rows,")."]}),e.jsxs("p",{className:"mt-2 text-slate-300",children:["Fix: Transpose matrix B as ",e.jsx("code",{className:"text-amber-300 font-mono",children:"A @ B.T"})," or adjust matrix dimensions."]})]})]})]}),l&&a&&e.jsxs("div",{className:"bg-gradient-to-br from-slate-900 to-slate-950 border border-teal-500/30 rounded-2xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("h4",{className:"text-lg font-bold text-teal-300 flex items-center gap-2",children:[e.jsxs("span",{children:["🔬 Step-by-Step Dot Product for Cell C[",a.r,", ",a.c,"]"]}),e.jsxs("span",{className:"text-xs px-2.5 py-1 bg-teal-500/20 text-teal-300 rounded-md font-mono",children:["(",s.rowLabels[a.r]," × ",n.colLabels[a.c],")"]})]}),e.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono",children:["Result = ",h[a.r][a.c]]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800/80 font-mono text-xs md:text-sm text-slate-300 flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"text-slate-500 font-sans font-semibold",children:"Formula:"}),e.jsxs("span",{children:["C[",a.r,", ",a.c,"] = "]}),M.map((t,r)=>{const i=C[r];return e.jsxs(B.Fragment,{children:[r>0&&e.jsx("span",{className:"text-slate-500",children:"+"}),e.jsxs("span",{className:"px-2 py-1 bg-slate-900 border border-slate-700 rounded text-slate-200",children:["(",e.jsx("span",{className:"text-teal-300 font-bold",children:t})," × ",e.jsx("span",{className:"text-indigo-300 font-bold",children:i}),")"]})]},r)}),e.jsx("span",{className:"text-slate-500",children:"="}),e.jsx("span",{className:"px-2 py-1 bg-amber-500/20 border border-amber-500 text-amber-300 font-bold rounded",children:h[a.r][a.c]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs",children:[e.jsxs("div",{className:"p-3 bg-slate-900/60 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Matrix A Shape:"}),e.jsxs("span",{className:"text-teal-300 font-mono font-bold text-sm",children:["(",s.rows,", ",e.jsx("span",{className:"underline decoration-amber-400",children:s.cols}),")"]}),e.jsx("span",{className:"text-slate-500 block text-[11px] mt-1",children:"Left rows × Inner dim"})]}),e.jsxs("div",{className:"p-3 bg-slate-900/60 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Matrix B Shape:"}),e.jsxs("span",{className:"text-indigo-300 font-mono font-bold text-sm",children:["(",e.jsx("span",{className:"underline decoration-amber-400",children:n.rows}),", ",n.cols,")"]}),e.jsx("span",{className:"text-slate-500 block text-[11px] mt-1",children:"Inner dim × Right cols"})]}),e.jsxs("div",{className:"p-3 bg-slate-900/60 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Result Matrix C Shape:"}),e.jsxs("span",{className:"text-amber-300 font-mono font-bold text-sm",children:["(",s.rows,", ",n.cols,")"]}),e.jsx("span",{className:"text-slate-500 block text-[11px] mt-1",children:"Left rows × Right cols"})]})]})]})]}),d==="operator_comparison"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-lg border border-amber-500/40",children:"Element-Wise: A * B"}),e.jsx("span",{className:"text-slate-400 text-xs font-mono",children:"Hadamard Product"})]}),e.jsxs("p",{className:"text-slate-300 text-sm mb-4",children:["Multiplies matching positions directly: ",e.jsx("code",{className:"text-amber-300",children:"C[i,j] = A[i,j] * B[i,j]"}),". Requires shapes to be identical or broadcastable."]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2",children:[e.jsx("p",{className:"text-slate-500",children:"# Example with (2, 2) arrays"}),e.jsx("p",{children:"A = np.array([[1, 2], [3, 4]])"}),e.jsx("p",{children:"B = np.array([[5, 6], [7, 8]])"}),e.jsx("p",{className:"text-amber-300 pt-2 font-bold",children:"A * B =>"}),e.jsx("p",{className:"text-emerald-400",children:"[[ 5, 12],"}),e.jsx("p",{className:"text-emerald-400",children:" [21, 32]]"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-teal-500/30 rounded-2xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold rounded-lg border border-teal-500/40",children:"Matrix Dot Product: A @ B"}),e.jsx("span",{className:"text-slate-400 text-xs font-mono",children:"Row-Dot-Column"})]}),e.jsxs("p",{className:"text-slate-300 text-sm mb-4",children:["Computes algebraic dot products of row vectors from A and column vectors from B. Requires inner dimension match ",e.jsx("code",{className:"text-teal-300",children:"(M, K) @ (K, N)"}),"."]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2",children:[e.jsx("p",{className:"text-slate-500",children:"# Matrix dot product (Python 3.5+)"}),e.jsx("p",{children:"A = np.array([[1, 2], [3, 4]])"}),e.jsx("p",{children:"B = np.array([[5, 6], [7, 8]])"}),e.jsx("p",{className:"text-teal-300 pt-2 font-bold",children:"A @ B (or np.dot(A, B)) =>"}),e.jsx("p",{className:"text-emerald-400",children:"[[19, 22],   # [1*5+2*7, 1*6+2*8]"}),e.jsx("p",{className:"text-emerald-400",children:" [43, 50]]   # [3*5+4*7, 3*6+4*8]"})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6",children:[e.jsx("h3",{className:"text-base font-bold text-slate-200 mb-3",children:"Summary Cheat Sheet"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs md:text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 text-slate-400",children:[e.jsx("th",{className:"p-2",children:"Syntax"}),e.jsx("th",{className:"p-2",children:"Underlying Method"}),e.jsx("th",{className:"p-2",children:"Dimension Requirement"}),e.jsx("th",{className:"p-2",children:"ML Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 font-mono text-xs",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-amber-300 font-bold",children:"A * B"}),e.jsx("td",{className:"p-2 text-slate-300 font-sans",children:"np.multiply"}),e.jsx("td",{className:"p-2 text-slate-300",children:"Exact match or Broadcastable"}),e.jsx("td",{className:"p-2 text-slate-400 font-sans",children:"Masking, Dropout layer filters"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-teal-300 font-bold",children:"A @ B"}),e.jsx("td",{className:"p-2 text-slate-300 font-sans",children:"np.matmul"}),e.jsx("td",{className:"p-2 text-slate-300",children:"Inner dims match: A.shape[-1] == B.shape[-2]"}),e.jsx("td",{className:"p-2 text-slate-400 font-sans",children:"Dense layer projection, Batch MatMul"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-cyan-300 font-bold",children:"np.dot(A, B)"}),e.jsx("td",{className:"p-2 text-slate-300 font-sans",children:"np.dot"}),e.jsx("td",{className:"p-2 text-slate-300",children:"Last axis of A matches 2nd-to-last of B"}),e.jsx("td",{className:"p-2 text-slate-400 font-sans",children:"Vector dot products, 2D matrix mult"})]})]})]})})]})]}),d==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:u.map(t=>e.jsxs("button",{onClick:()=>A(t.id),className:`p-4 rounded-xl border text-left transition-all ${b===t.id?"bg-teal-950/40 border-teal-500 shadow-lg shadow-teal-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30",children:t.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:t.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:m.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:m.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"NumPy Linear Algebra Suite"})]}),e.jsx(X,{fileModule:m.code,title:m.fileName})]})]}),d==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(P,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"In machine learning and deep learning, matrix multiplication is the true engine of intelligence. From linear regression to 70-billion parameter transformers, nearly all compute time is spent in matrix dot products (GEMM). Remember the golden rule: for (M, K) @ (K, N), inner dimensions must match, and the resulting shape is always (M, N)."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(L,{content:k})]})]}),d==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(D,{questions:q})})]})};export{$ as default};
