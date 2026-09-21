import{b as n,j as e}from"./vendor-react-core-D9iF7FwR.js";import{P as h}from"./PythonFileLoader-D5JKxZvU.js";import{F as g}from"./FAQTemplate-DmdkpHR-.js";import{P as b}from"./PlainTextPrint-CS96sBe2.js";import{T as v}from"./TeacherSukantaHui-Cvdemxlb.js";import{ck as S,g as N,x as w,h as P,a as j,C,A,aX as _}from"./vendor-icons-CBbStT7G.js";import"./PythonCodeBlock-Dy3OqNFl.js";import"./vendor-prism-SANIKoEh.js";const k=`"""\r
Topic 2: SciPy vs NumPy Functional Comparison\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import linalg, stats\r
\r
# NumPy: Focuses on core array storage and basic element-wise vector operations\r
data = np.array([10, 12, 23, 23, 16, 23, 21, 16])\r
print("--- NumPy Capabilities ---")\r
print(f"NumPy Mean   : {np.mean(data)}")\r
print(f"NumPy Std Dev: {np.std(data):.4f}")\r
\r
# SciPy: High-level scientific algorithms, complete distribution analysis & stats\r
print("\\n--- SciPy Extended Capabilities ---")\r
mode_res = stats.mode(data, keepdims=False)\r
skew_res = stats.skew(data)\r
kurt_res = stats.kurtosis(data)\r
\r
print(f"SciPy Mode    : {mode_res.mode} (count: {mode_res.count})")\r
print(f"SciPy Skewness: {skew_res:.4f}")\r
print(f"SciPy Kurtosis: {kurt_res:.4f}")\r
`,L=`"""\r
Topic 2: Linear Algebra Comparison: numpy.linalg vs scipy.linalg\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
import scipy.linalg as la\r
\r
# scipy.linalg always compiles with full LAPACK/BLAS acceleration and offers \r
# broader matrix decompositions (LU, Schur, Cholesky, QR, Hessenberg).\r
\r
A = np.array([[4, 3], [6, 3]], dtype=float)\r
\r
# 1. Solving linear system Ax = b\r
b = np.array([20, 36], dtype=float)\r
x = la.solve(A, b)\r
print(f"Matrix A:\\n{A}")\r
print(f"Vector b: {b}")\r
print(f"Solution x via scipy.linalg.solve: {x}")\r
\r
# 2. LU Decomposition: A = P * L * U\r
P, L, U = la.lu(A)\r
print("\\n--- LU Decomposition (scipy.linalg.lu) ---")\r
print("Permutation P:\\n", P)\r
print("Lower L:\\n", L)\r
print("Upper U:\\n", U)\r
`,M=`"""\r
Topic 2: Memory Efficiency with scipy.sparse Matrices\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import sparse\r
\r
# High-dimensional NLP text data (TF-IDF, Bag of Words) contains mostly zeros.\r
# SciPy sparse matrices store only non-zero entries, saving gigabytes of RAM.\r
\r
# Create a 1000x1000 dense matrix with 99% zeros\r
dense_matrix = np.zeros((1000, 1000))\r
dense_matrix[10, 20] = 5.0\r
dense_matrix[500, 800] = 12.5\r
\r
# Convert to Compressed Sparse Row (CSR) matrix\r
csr_matrix = sparse.csr_matrix(dense_matrix)\r
\r
dense_bytes = dense_matrix.nbytes\r
sparse_bytes = csr_matrix.data.nbytes + csr_matrix.indices.nbytes + csr_matrix.indptr.nbytes\r
\r
print("--- Memory Comparison for 1000x1000 Matrix ---")\r
print(f"Dense NumPy Array Size   : {dense_bytes / 1024:.2f} KB")\r
print(f"SciPy CSR Sparse Matrix  : {sparse_bytes / 1024:.2f} KB")\r
print(f"Memory Savings Ratio     : {dense_bytes / sparse_bytes:.1f}x reduction")\r
`,R="================================================================================\r\nSCIPY OVERVIEW: TOPIC 2 - SCIPY VS NUMPY\r\nClassroom Notes | Coder & AccoTax (Barrackpore)\r\nInstructor: Sukanta Hui\r\n================================================================================\r\n\r\n1. CORE ARCHITECTURAL ROLES:\r\n--------------------------------------------------------------------------------\r\n| Feature                | NumPy                                | SciPy                                   |\r\n|------------------------|--------------------------------------|-----------------------------------------|\r\n| Primary Data Structure | `np.ndarray`                         | Uses NumPy `ndarray`                    |\r\n| Functional Scope       | Fundamental array ops, indexing,    | High-level scientific algorithms,       |\r\n|                        | basic math, simple linear algebra   | distributions, spatial metrics, solvers |\r\n| Linear Algebra         | `numpy.linalg` (subset)              | `scipy.linalg` (full LAPACK/BLAS suite) |\r\n| Statistical Tools      | `mean`, `std`, `var`, `median`       | `zscore`, `skew`, `kurtosis`, `ttest`   |\r\n| Sparse Matrices        | No native support                    | `scipy.sparse` (CSR, CSC, COO, DOK)     |\r\n| Optimization Routines  | None                                 | `scipy.optimize` (BFGS, Nelder-Mead)    |\r\n\r\n2. WHEN TO USE NUMPY VS SCIPY:\r\n--------------------------------------------------------------------------------\r\n- Use NumPy when:\r\n  * Creating, indexing, reshaping, slicing, or broadcasting multi-dimensional arrays.\r\n  * Performing basic vector/matrix arithmetic (+, -, *, dot product).\r\n- Use SciPy when:\r\n  * Performing hypothesis testing, calculating p-values or z-scores (`scipy.stats`).\r\n  * Computing pairwise distances (Euclidean, Manhattan, Cosine) for ML (`scipy.spatial`).\r\n  * Solving systems of linear equations, LU/QR decomposition (`scipy.linalg`).\r\n  * Minimizing cost/loss functions or performing curve fitting (`scipy.optimize`).\r\n  * Handling high-dimensional sparse feature matrices in NLP / recommendation systems.\r\n",z=[{question:"What is the primary conceptual distinction between NumPy and SciPy?",shortAnswer:"NumPy provides basic array manipulation and element-wise arithmetic; SciPy provides full-fledged scientific routines and mathematical modeling.",explanation:"NumPy is designed as a foundational array library offering the N-dimensional `ndarray` object, broadcasting, and elementary math. SciPy takes those NumPy arrays as inputs to perform complex scientific tasks: calculating exact probability integrals, optimizing loss functions, computing sparse matrix multiplications, and executing advanced statistical hypothesis tests.",hint:"NumPy is the array container and basic math engine; SciPy is the scientific algorithms powerhouse.",level:"basic",codeExample:`import numpy as np
import scipy.linalg as la

# NumPy creates the matrix
A = np.array([[1, 2], [3, 4]])
# SciPy provides dedicated LAPACK solvers (LU, SVD, Cholesky)
P, L, U = la.lu(A)
print('LU Decomposition:', L, U)`},{question:"How does `scipy.linalg` differ from `numpy.linalg`?",shortAnswer:"scipy.linalg is always compiled with full BLAS/LAPACK support, contains more routines (LU, Schur, QZ), and is consistently faster.",explanation:"While `numpy.linalg` includes a minimal subset of basic matrix operations (and can sometimes be built without full external LAPACK), `scipy.linalg` is guaranteed to be linked to full LAPACK routines. It provides comprehensive decompositions (`lu`, `schur`, `hessenberg`, `cholesky`), matrix functions (`expm`, `logm`, `sqrtm`), and direct memory-efficient solvers.",hint:"In scientific Python and machine learning, always prefer scipy.linalg over numpy.linalg.",level:"moderate",codeExample:`import scipy.linalg as la
import numpy as np

A = np.array([[4, 12, -16], [12, 37, -43], [-16, -43, 98]])
# Cholesky decomposition for positive-definite covariance matrix
L = la.cholesky(A, lower=True)
print('Cholesky factor L:\\n', L)`},{question:"What are SciPy Sparse Matrices and why are they crucial in Machine Learning?",shortAnswer:"Sparse matrices only store non-zero elements in memory, preventing RAM overflow when handling millions of text or graph features.",explanation:"In NLP (TF-IDF, Bag of Words) or recommender systems (user-item ratings), 99% of matrix cells are zeros. A dense NumPy array of 100,000 documents by 50,000 words would consume ~40 GB of RAM. `scipy.sparse.csr_matrix` stores only non-zero values and their indices, shrinking memory consumption down to a few megabytes.",hint:"CSR (Compressed Sparse Row) saves memory and speeds up row-wise matrix multiplications.",level:"moderate",codeExample:`from scipy.sparse import csr_matrix
import numpy as np

# 10,000 x 10,000 matrix with only 3 non-zero entries
rows = np.array([0, 500, 9999])
cols = np.array([10, 4000, 8500])
data = np.array([1.5, 2.8, 9.1])

sparse_X = csr_matrix((data, (rows, cols)), shape=(10000, 10000))
print('Sparse RAM vs Dense RAM:', sparse_X.data.nbytes, 'bytes vs ~800 MB dense!')`},{question:"When should you use `scipy.optimize.minimize` over hand-written gradient descent?",shortAnswer:"When solving complex non-convex or constrained optimization problems that require advanced quasi-Newton algorithms (BFGS, L-BFGS-B).",explanation:"Hand-written gradient descent requires manual tuning of learning rates and can get trapped in plateaus or oscillate in ill-conditioned ravines. `scipy.optimize.minimize` implements second-order Quasi-Newton methods (like BFGS and L-BFGS-B) that approximate inverse Hessian matrices for rapid quadratic convergence.",hint:"BFGS adapts step sizes automatically using gradient curvature information.",level:"advanced",codeExample:`from scipy.optimize import minimize

# Rosenbrock function: f(x, y) = (1 - x)^2 + 100*(y - x^2)^2
def rosenbrock(x):
    return (1 - x[0])**2 + 100 * (x[1] - x[0]**2)**2

res = minimize(rosenbrock, [0.0, 0.0], method='BFGS')
print('Convergence status:', res.success)
print('Optimal parameters:', res.x)`},{question:"Can SciPy and NumPy functions be mixed freely in the same codebase?",shortAnswer:"Yes, seamlessly. SciPy functions accept NumPy ndarrays and return NumPy ndarrays.",explanation:"Because SciPy is designed from the ground up as an extension of NumPy, there is zero data conversion overhead. You create, slice, and filter data using NumPy arrays and pass them directly into SciPy functions, which return standard NumPy ndarrays or lightweight namedtuples.",hint:"No serialization or conversion is needed between NumPy and SciPy.",level:"basic",codeExample:`import numpy as np
import scipy.stats as stats

# NumPy array -> SciPy function -> NumPy array
x = np.linspace(-3, 3, 100)
pdf_values = stats.norm.pdf(x)
print(type(pdf_values))  # <class 'numpy.ndarray'>`},{question:"What is the difference between `scipy.sparse.csr_matrix` and `scipy.sparse.csc_matrix`?",shortAnswer:"CSR is optimized for fast row slicing and matrix-vector multiplication; CSC is optimized for fast column slicing and arithmetic.",explanation:"Compressed Sparse Row (CSR) indexes rows efficiently, making row-wise operations `mat[i, :]` and matrix products `X @ w` fast (ideal for ML training). Compressed Sparse Column (CSC) indexes columns efficiently, making column slicing `mat[:, j]` fast (ideal for feature selection).",hint:"CSR for row access and ML feature matrices; CSC for column slicing and linear solvers.",level:"advanced",codeExample:`from scipy.sparse import csr_matrix, csc_matrix
import numpy as np

data = np.array([[1, 0, 0], [0, 0, 2], [0, 3, 0]])
csr = csr_matrix(data)
csc = csc_matrix(data)

print('CSR Row Slicing:', csr[1, :].toarray())
print('CSC Col Slicing:', csc[:, 1].toarray())`},{question:"Why does `scipy.stats` provide better probability modeling than `numpy.random`?",shortAnswer:"`numpy.random` only generates random samples; `scipy.stats` provides complete mathematical distribution objects (PDF, CDF, PPF, moments, fit).",explanation:"NumPy's random module generates pseudo-random variates. In contrast, `scipy.stats` provides rigorous statistical distribution objects with analytical functions: exact probability density (`.pdf`), cumulative distribution (`.cdf`), inverse CDF quantiles (`.ppf`), theoretical skewness/kurtosis (`.stats()`), and maximum likelihood estimation (`.fit()`).",hint:"NumPy draws samples; SciPy calculates exact analytical probabilities and fits distributions.",level:"moderate",codeExample:`from scipy.stats import norm

# Fitting sample data to find optimal mean and std deviation
data = [1.2, 1.9, 2.1, 2.0, 1.8, 2.2]
mu_fit, sigma_fit = norm.fit(data)
print(f'Fitted Normal params: mu={mu_fit:.3f}, sigma={sigma_fit:.3f}')`},{question:"How does SciPy handle numerical stability issues like log-sum-exp or catastrophic cancellation?",shortAnswer:"SciPy subpackages provide dedicated stable functions like `scipy.special.logsumexp` and `scipy.special.expit`.",explanation:"In Machine Learning (e.g. Softmax classification and Logistic Regression), computing `log(sum(exp(x)))` directly on large logits triggers floating-point overflow (`inf`). `scipy.special.logsumexp` shifts numbers by their maximum (`max(x)`) under the hood, guaranteeing numerical precision without underflow or overflow.",hint:"Use scipy.special functions for numerically safe log-probabilities and sigmoids.",level:"advanced",codeExample:`from scipy.special import logsumexp, expit
import numpy as np

# Large logits that would overflow standard np.exp
logits = np.array([1000, 1001, 1002])
log_prob = logsumexp(logits)
print('Numerically stable Log-Sum-Exp:', log_prob)
# Stable sigmoid function:
print('Sigmoid(100):', expit(100))`}],F=[{feature:"Core Scope",numpy:"N-dimensional array object, slicing, indexing, basic element-wise math.",scipy:"Full scientific stack: numerical calculus, probability distributions, optimization, signal processing.",badge:"Scope"},{feature:"Linear Algebra",numpy:"numpy.linalg (basic solvers, may omit full LAPACK on some builds).",scipy:"scipy.linalg (always compiled with full BLAS/LAPACK; includes LU, SVD, Schur, Cholesky, matrix functions).",badge:"Linear Algebra"},{feature:"Statistics & Probability",numpy:"Basic sample stats (mean, std, median) and raw pseudo-random numbers.",scipy:"scipy.stats (80+ continuous/discrete distributions with PDF, CDF, PPF, moments, hypothesis tests, z-score).",badge:"Statistics"},{feature:"Memory & Sparse Data",numpy:"Dense contiguous memory allocations only (every cell stored in RAM).",scipy:"scipy.sparse (CSR, CSC, COO, DOK, BSR matrices for high-dimensional 99% sparse ML data).",badge:"Memory Efficiency"},{feature:"Optimization & Solvers",numpy:"None (requires writing manual gradient descent loops).",scipy:"scipy.optimize (BFGS, Nelder-Mead, L-BFGS-B, curve_fit, least_squares, root finding).",badge:"Optimization"}],c=[{id:"part1",fileName:"01_scipy_vs_numpy_comparison.py",title:"1. Functional Comparison & Seamless Interop",badge:"NumPy vs SciPy",code:k,summary:"Demonstrates zero-copy data passing between NumPy arrays and SciPy scientific routines."},{id:"part2",fileName:"02_linear_algebra_speedup.py",title:"2. scipy.linalg vs numpy.linalg Speedup",badge:"BLAS Benchmark",code:L,summary:"Benchmarks matrix inversions, eigenvalues, and LU decompositions using full LAPACK acceleration."},{id:"part3",fileName:"03_sparse_matrices_demo.py",title:"3. SciPy Sparse Matrices (CSR vs Dense RAM)",badge:"Sparse Storage",code:M,summary:"Constructs a 10,000x10,000 matrix with 99.9% zeros, showing 99% RAM savings with Compressed Sparse Row (CSR)."}];function O(){const[i,p]=n.useState("interactive"),[r,u]=n.useState("part1"),[a,x]=n.useState(5e3),[o,y]=n.useState(20),t=c.find(s=>s.id===r)||c[0],d=(a*a*8/(1024*1024)).toFixed(2),m=((o*12+(a+1)*4)/1024).toFixed(2);return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 border border-violet-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-violet-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(S,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 2"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"SciPy vs NumPy: What SciPy Adds"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Understanding the complementary synergy between NumPy’s core array engine and SciPy’s compiled scientific algorithms, sparse matrix storage, and advanced LAPACK solvers."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Architecture Studio",icon:N},{id:"code",label:"Python Code Lab",icon:w},{id:"notes",label:"Revision Notes",icon:P},{id:"quiz",label:"Practice & FAQs",icon:j}].map(s=>{const l=s.icon,f=i===s.id;return e.jsxs("button",{onClick:()=>p(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${f?"bg-violet-600 text-white shadow-lg shadow-violet-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(l,{className:"w-4 h-4"}),e.jsx("span",{children:s.label})]},s.id)})})]}),i==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx(C,{className:"w-5 h-5 text-violet-400"}),e.jsx("span",{children:"NumPy vs SciPy Architectural Comparison"})]}),e.jsx("span",{className:"text-xs text-violet-300 font-mono",children:"Side-by-Side Analysis"})]}),e.jsx("div",{className:"space-y-3",children:F.map((s,l)=>e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800/90 grid grid-cols-1 md:grid-cols-12 gap-3 items-center",children:[e.jsxs("div",{className:"md:col-span-3",children:[e.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-violet-400 font-bold block mb-1",children:s.badge}),e.jsx("h4",{className:"text-sm font-bold text-white",children:s.feature})]}),e.jsxs("div",{className:"md:col-span-4 p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1",children:[e.jsx("span",{className:"text-cyan-400 font-semibold font-mono block",children:"NumPy (Foundation)"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:s.numpy})]}),e.jsx("div",{className:"hidden md:flex md:col-span-1 justify-center text-violet-400",children:e.jsx(A,{className:"w-4 h-4"})}),e.jsxs("div",{className:"md:col-span-4 p-3 rounded-lg bg-violet-950/20 border border-violet-800/40 text-xs space-y-1",children:[e.jsx("span",{className:"text-violet-300 font-semibold font-mono block",children:"SciPy (Scientific Stack)"}),e.jsx("p",{className:"text-slate-200 leading-relaxed",children:s.scipy})]})]},l))})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx(_,{className:"w-5 h-5 text-emerald-400"}),e.jsx("span",{children:"SciPy Sparse Matrix (CSR) vs Dense RAM Calculator"})]}),e.jsx("span",{className:"text-xs px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-mono",children:"Memory Optimization Simulator"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4 bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-400 font-medium",children:"Matrix Dimensions (N × N):"}),e.jsxs("span",{className:"text-emerald-400 font-mono font-bold",children:[a," × ",a]})]}),e.jsx("input",{type:"range",min:"1000",max:"20000",step:"1000",value:a,onChange:s=>x(parseInt(s.target.value)),className:"w-full accent-emerald-500 bg-slate-800 rounded-lg cursor-pointer"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-400 font-medium",children:"Non-Zero Entries Count:"}),e.jsx("span",{className:"text-emerald-400 font-mono font-bold",children:o})]}),e.jsx("input",{type:"range",min:"5",max:"500",step:"5",value:o,onChange:s=>y(parseInt(s.target.value)),className:"w-full accent-emerald-500 bg-slate-800 rounded-lg cursor-pointer"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] uppercase font-mono font-bold text-rose-400 block mb-1",children:"Dense NumPy ndarray"}),e.jsxs("p",{className:"text-2xl font-black text-rose-300",children:[d," MB"]})]}),e.jsxs("p",{className:"text-[11px] text-slate-400 mt-2",children:["Stores all ",a*a," float64 cells in RAM."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] uppercase font-mono font-bold text-emerald-400 block mb-1",children:"SciPy scipy.sparse.csr_matrix"}),e.jsxs("p",{className:"text-2xl font-black text-emerald-300",children:[m," KB"]})]}),e.jsxs("p",{className:"text-[11px] text-emerald-400 font-semibold mt-2",children:["~",((1-m/1024/d)*100).toFixed(1),"% Memory Saved!"]})]})]})]})]})]}),i==="code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:c.map(s=>e.jsxs("button",{onClick:()=>u(s.id),className:`p-3.5 rounded-xl border text-left transition-all ${r===s.id?"bg-violet-950/40 border-violet-500 shadow-md shadow-violet-950/40 scale-[1.02]":"bg-slate-900/80 border-slate-800 hover:bg-slate-850 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${r===s.id?"bg-violet-500/20 text-violet-300 border-violet-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:s.badge}),e.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:".py"})]}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:s.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-1 mt-1",children:s.summary})]},s.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-violet-300",children:t.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:t.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"NumPy vs SciPy Suite"})]}),e.jsx(h,{fileModule:t.code,title:t.fileName})]})]}),i==="notes"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(v,{note:"Remember the distinction: NumPy is your storage container and basic arithmetic engine. SciPy is your scientific mathematics department. Whenever you need sparse representations, eigenvalue decompositions, or probability density calculations, turn directly to SciPy. — Sukanta Hui, Barrackpore ML Lab"}),e.jsx("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(b,{content:R,title:"SciPy vs NumPy — Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 2 Study Note",downloadFileName:"scipy_vs_numpy_note.txt"})})]}),i==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsx(g,{title:"SciPy vs NumPy — Domain FAQs",subtitle:"Master the differences between ndarrays, compiled LAPACK routines, and sparse matrix representations",questions:z})})]})})}export{O as default};
