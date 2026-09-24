import{b as l,j as e}from"./vendor-react-core-BBXbtqt1.js";import{P as x}from"./PythonFileLoader-YugaCzY9.js";import{F as y}from"./FAQTemplate-BamsZuNW.js";import{P as h}from"./PlainTextPrint-CGJ_aUDk.js";import{T as g}from"./TeacherSukantaHui-CzsyGExA.js";import{d7 as b,aO as f,b5 as v,a7 as N,L as w,cm as S,g as P,z as j,h as C,a as A,cq as _}from"./vendor-icons-CKN6-nXc.js";import"./PythonCodeBlock-BDgVOCqn.js";import"./vendor-prism-B7oW9GGR.js";const k=`"""\r
Topic 0: Introduction to SciPy Ecosystem\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import scipy\r
import numpy as np\r
\r
# Display SciPy version and core configuration\r
print("--- SciPy Scientific Computing Stack ---")\r
print(f"SciPy Version : {scipy.__version__}")\r
print(f"NumPy Version : {np.__version__}")\r
\r
# Exploring core subpackages in SciPy\r
subpackages = {\r
    "scipy.stats": "Statistical functions and probability distributions",\r
    "scipy.spatial": "Spatial data structures and distance metrics",\r
    "scipy.linalg": "Advanced linear algebra with LAPACK/BLAS wrappers",\r
    "scipy.optimize": "Numerical optimization and root-finding routines",\r
    "scipy.integrate": "Numerical integration and differential equations",\r
    "scipy.signal": "Signal processing and filter designs",\r
    "scipy.ndimage": "Multi-dimensional image processing",\r
    "scipy.special": "Mathematical special functions (Gamma, Bessel, Error function)"\r
}\r
\r
print("\\n--- SciPy Functional Domains ---")\r
for module, desc in subpackages.items():\r
    print(f" • {module:<18}: {desc}")\r
`,z=`"""\r
Topic 0: Subpackage Quick Overview\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
from scipy import stats, spatial, linalg, optimize\r
import numpy as np\r
\r
# 1. scipy.stats example\r
data = [12, 15, 12, 18, 22, 25, 12, 30]\r
mean_val = np.mean(data)\r
mode_val = stats.mode(data, keepdims=False)\r
print(f"Data: {data}")\r
print(f"Mean: {mean_val:.2f}, Mode: {mode_val.mode} (count: {mode_val.count})")\r
\r
# 2. scipy.spatial distance\r
pt_a = np.array([1, 2])\r
pt_b = np.array([4, 6])\r
euc_dist = spatial.distance.euclidean(pt_a, pt_b)\r
print(f"Euclidean distance between {pt_a} and {pt_b}: {euc_dist:.4f}")\r
\r
# 3. scipy.linalg determinant\r
matrix_a = np.array([[2, 3], [1, 4]])\r
det_val = linalg.det(matrix_a)\r
print(f"Determinant of matrix:\\n{matrix_a}\\nDet = {det_val:.2f}")\r
\r
# 4. scipy.optimize 1D quadratic minimum: f(x) = (x - 3)^2 + 5\r
res = optimize.minimize_scalar(lambda x: (x - 3)**2 + 5)\r
print(f"Optimal x: {res.x:.4f}, Minimum value: {res.fun:.4f}")\r
`,L=`"""\r
Topic 0: SciPy Architecture & Underlying Fortran/C Wrappers\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import scipy\r
import numpy as np\r
\r
# SciPy builds directly on top of NumPy ndarrays, adding highly optimized \r
# LAPACK, BLAS, and FFTPACK routines written in C and Fortran.\r
\r
print("--- SciPy Array Interoperability ---")\r
arr = np.array([2.5, 3.8, 1.9, 4.2, 5.1])\r
print("NumPy Array Object:", type(arr))\r
\r
# All SciPy functions consume standard NumPy arrays and return numpy arrays or namedtuples\r
from scipy import stats\r
z_scores = stats.zscore(arr)\r
print("Computed Z-Scores with scipy.stats.zscore:")\r
print(z_scores)\r
print("Result Type:", type(z_scores))\r
`,D=`================================================================================\r
SCIPY OVERVIEW: TOPIC 0 - INTRODUCTION TO SCIPY\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS SCIPY?\r
--------------------------------------------------------------------------------\r
- SciPy (pronounced "Sigh Pie") is the fundamental open-source Python library\r
  for scientific computing, advanced mathematics, signal processing, and machine\r
  learning foundations.\r
- Created by Travis Oliphant, Pearu Peterson, and Eric Jones (2001).\r
- Built on top of NumPy, utilizing optimized compiled libraries (LAPACK, BLAS,\r
  ARPACK, FFTPACK) written in C/Fortran for maximum execution speed.\r
\r
2. CORE SCIPY SUBPACKAGES & ROLES IN MACHINE LEARNING:\r
--------------------------------------------------------------------------------\r
1. scipy.stats    : Descriptive statistics, continuous/discrete distributions,\r
                    hypothesis testing (t-test, ANOVA, chi-square), z-scores.\r
2. scipy.spatial  : Distance metrics (Euclidean, Manhattan, Cosine, Minkowski),\r
                    KD-trees, Voronoi diagrams, Delaunay triangulation.\r
3. scipy.linalg   : Advanced matrix operations, LU/QR/SVD decomposition, eigenvalue\r
                    problems, matrix inverses, and system of linear equations.\r
4. scipy.optimize : Function minimization, loss curve optimization (BFGS, Nelder-Mead),\r
                    curve fitting (\`curve_fit\`), root finding.\r
5. scipy.integrate: Numerical calculus, definite integrals, ordinary differential\r
                    equations (ODEs).\r
6. scipy.signal   : Signal filtering, Fourier analysis, convolution, spectrograms.\r
7. scipy.ndimage  : Multidimensional image filters, morphology, segmentation.\r
8. scipy.special  : Mathematical special functions (Gamma, Beta, Bessel, Error).\r
\r
3. SCIPY VS NUMPY RELATIONSHIP:\r
--------------------------------------------------------------------------------\r
- NumPy provides the basic N-dimensional array object (\`ndarray\`) and basic element-wise\r
  arithmetic operations.\r
- SciPy provides high-level scientific and mathematical algorithms that operate on\r
  those NumPy ndarrays.\r
- Machine learning libraries like Scikit-Learn rely internally on SciPy for distance\r
  computations, sparse matrix operations (\`scipy.sparse\`), and numerical optimization.\r
`,F=[{question:"What is SciPy and how does it relate to NumPy?",shortAnswer:"SciPy builds directly on top of NumPy arrays to provide high-level scientific and engineering algorithms.",explanation:"While NumPy provides the fundamental N-dimensional array object and basic vectorized mathematical operations, SciPy extends NumPy by implementing advanced numerical routines including numerical integration, optimization, probability distributions, hypothesis testing, signal processing, and spatial algorithms wrapped over compiled C/Fortran routines.",hint:"NumPy provides the data structure (ndarray); SciPy provides the advanced scientific algorithms.",level:"basic",codeExample:`import numpy as np
import scipy.stats as stats

# NumPy creates the array, SciPy performs advanced statistical analysis
data = np.array([12.5, 14.2, 13.8, 15.1, 14.9])
res = stats.describe(data)
print(res.mean, res.variance, res.skewness)`},{question:"Why can't we just use pure Python or NumPy for all statistical and scientific computing?",shortAnswer:"NumPy only provides elementary math; pure Python is too slow and lacks robust numerical solvers for complex calculus, optimization, and distributions.",explanation:"Pure Python loops carry massive bytecode interpretation overhead. NumPy solves basic elementwise arithmetic and basic linear algebra, but does not provide complete probability distribution models (PDF, CDF, PPF), nonlinear loss optimizers, sparse graph algorithms, or advanced statistical tests with exact p-values.",hint:"SciPy wraps decades of validated C, C++, and Fortran numerical algorithms (like BLAS, LAPACK, QUADPACK, MINPACK).",level:"basic",codeExample:`import scipy.optimize as opt

# Minimizing a nonlinear loss function: f(x) = x^2 + 10*sin(x)
result = opt.minimize_scalar(lambda x: x**2 + 10*np.sin(x))
print('Optimal x:', result.x)`},{question:"What are the primary subpackages of SciPy relevant to Machine Learning?",shortAnswer:"scipy.stats, scipy.spatial, scipy.linalg, scipy.optimize, and scipy.sparse.",explanation:"1) `scipy.stats`: Probability distributions, z-scores, skewness/kurtosis, t-tests, ANOVA.\n2) `scipy.spatial`: Distance metrics (cdist, pdist) and KDTree for fast KNN search.\n3) `scipy.linalg`: Matrix factorizations (SVD, LU, Cholesky, Schur) and fast BLAS/LAPACK solvers.\n4) `scipy.optimize`: Loss function minimization (BFGS, Nelder-Mead) and curve fitting.\n5) `scipy.sparse`: Memory-efficient matrices for text/TF-IDF and high-dimensional graphs.",hint:"Remember the 5 pillars: stats, spatial, linalg, optimize, sparse.",level:"basic",codeExample:`from scipy import stats, spatial, linalg, optimize, sparse

# Quick import check
print(stats.__file__)
print(spatial.__file__)`},{question:"How does SciPy achieve near-native C/Fortran execution speeds?",shortAnswer:"By wrapping low-level compiled numerical libraries (BLAS, LAPACK, FFTPACK, FITPACK) via Cython and C-extensions.",explanation:"SciPy acts as a high-level, pythonic interface over battle-tested Fortran and C numerical libraries (such as ATLAS, OpenBLAS, LAPACK, and Intel MKL). When you invoke a SciPy routine, the data buffer from the NumPy array is passed directly by memory pointer to the compiled library without copying, avoiding Python runtime overhead.",hint:"Zero-copy memory pointers allow C code to read NumPy array buffers directly.",level:"moderate",codeExample:`import scipy.linalg as la

# Check BLAS/LAPACK backend linked to SciPy
print(la.blas.find_best_blas_type())
print(la.__file__)`},{question:"How is scipy.stats utilized in feature engineering and preprocessing?",shortAnswer:"For standardizing features (z-score), handling skewness (Box-Cox, Yeo-Johnson), and detecting anomalous outliers.",explanation:"Before feeding data into machine learning estimators, features often violate normality assumptions. `scipy.stats.zscore` computes standardized deviations, `scipy.stats.boxcox` transforms skewed non-normal distributions into Gaussian shapes, and `scipy.stats.trim_mean` calculates outlier-robust centers.",hint:"Box-Cox and z-scores stabilize variance and align data with Gaussian assumptions.",level:"moderate",codeExample:`from scipy import stats
import numpy as np

data = np.array([10, 12, 14, 15, 18, 22, 150])
# Compute z-scores to identify outliers (|z| > 3)
z_scores = stats.zscore(data)
outliers = data[np.abs(z_scores) > 2.5]
print('Outliers detected:', outliers)`},{question:"What is the difference between scipy.spatial.distance.pdist and scipy.spatial.distance.cdist?",shortAnswer:"pdist computes pairwise distances between observations within a single dataset; cdist computes distances between two distinct collections.",explanation:"`pdist(X)` computes the pairwise distance between all pairs of rows in matrix X, returning a condensed 1D array of shape (N*(N-1)/2,). `cdist(XA, XB)` computes the cross-distance matrix between rows in XA and rows in XB, returning a 2D matrix of shape (M, N). In KNN classification, `cdist(X_test, X_train)` calculates query-to-training distances instantly.",hint:"pdist = Pairwise within one array; cdist = Cross-distance between two different arrays.",level:"advanced",codeExample:`from scipy.spatial.distance import cdist
import numpy as np

train_points = np.array([[1, 2], [3, 4], [5, 6]])
test_query = np.array([[2, 3]])
# Compute distance from test query to all training points
dists = cdist(test_query, train_points, metric='euclidean')
print('Distances to training samples:', dists)`},{question:"How does Scikit-Learn rely internally on SciPy?",shortAnswer:"Scikit-Learn uses SciPy for sparse matrix representations (scipy.sparse), KD-Trees for KNN, loss optimization, and linear algebra.",explanation:"Scikit-Learn does not reinvent scientific algorithms. For example, text vectorizers (`TfidfVectorizer`, `CountVectorizer`) output `scipy.sparse.csr_matrix` instances. Nearest neighbors algorithms utilize `scipy.spatial.KDTree` and `cKDTree`. Ridge regression and SVD decomposition use `scipy.linalg` solvers.",hint:"Scikit-Learn builds ML abstractions on top of SciPy's numerical foundation.",level:"moderate",codeExample:`from scipy.sparse import csr_matrix
# Many scikit-learn models natively accept and return CSR sparse matrices
row = np.array([0, 0, 1, 2])
col = np.array([0, 2, 2, 0])
data = np.array([1, 2, 3, 4])
sparse_mat = csr_matrix((data, (row, col)), shape=(3, 3))
print(sparse_mat.toarray())`},{question:"What is the memory and architectural structure of SciPy distributions in scipy.stats?",shortAnswer:"scipy.stats distributions are frozen or continuous/discrete object classes providing unified methods: .pdf(), .cdf(), .ppf(), and .rvs().",explanation:"All continuous random variables inherit from `scipy.stats.rv_continuous`, and discrete variables inherit from `scipy.stats.rv_discrete`. They expose a standard API: `.pdf(x)` (probability density), `.cdf(x)` (cumulative density), `.ppf(q)` (percent point function / inverse CDF), and `.rvs(size)` (random variate sampling).",hint:"Remember the 4 core methods: pdf (density), cdf (cumulative probability), ppf (quantile lookup), rvs (sampling).",level:"advanced",codeExample:`from scipy.stats import norm

# Standard normal distribution N(mu=0, sigma=1)
prob_less_than_1 = norm.cdf(1.0)  # ~0.8413
quantile_95 = norm.ppf(0.95)       # ~1.6448
samples = norm.rvs(size=5, random_state=42)
print('CDF(1.0):', prob_less_than_1, '| 95th percentile:', quantile_95)`}],d=[{id:"stats",name:"scipy.stats",title:"Statistical Distributions & Hypothesis Testing",desc:"Probability distributions (Normal, Student-t, Poisson), descriptive stats (z-score, skew, kurtosis), and hypothesis testing.",icon:b,color:"#38bdf8",methods:["stats.norm","stats.ttest_ind","stats.zscore","stats.describe","stats.mode"],mlUse:"Feature standardization, p-value hypothesis testing, distribution fitting, outlier detection."},{id:"spatial",name:"scipy.spatial",title:"Spatial Data & Distance Metrics",desc:"Distance algorithms (Euclidean, Cityblock, Cosine, Minkowski), KDTree for rapid KNN spatial search, and Delaunay triangulation.",icon:f,color:"#818cf8",methods:["distance.euclidean","distance.cityblock","distance.cosine","KDTree","Voronoi"],mlUse:"K-Nearest Neighbors indexing, embedding similarity metrics, clustering centroid matching."},{id:"linalg",name:"scipy.linalg",title:"Advanced Linear Algebra & Decompositions",desc:"Fast BLAS/LAPACK solvers, matrix inverses, eigenvalues, eigenvectors, SVD, LU, and Cholesky matrix factorizations.",icon:v,color:"#34d399",methods:["linalg.inv","linalg.solve","linalg.det","linalg.eig","linalg.svd"],mlUse:"PCA dimensionality reduction, ordinary least squares linear regression, matrix inversion."},{id:"optimize",name:"scipy.optimize",title:"Numerical Optimization & Curve Fitting",desc:"Loss minimization algorithms (BFGS, Nelder-Mead, L-BFGS-B), non-linear least squares curve fitting, and root finding.",icon:N,color:"#f59e0b",methods:["optimize.minimize","optimize.curve_fit","optimize.root","optimize.least_squares"],mlUse:"Custom cost function optimization, logistic sigmoid parameter fitting, hyperparameter search."},{id:"sparse",name:"scipy.sparse",title:"Sparse Matrices & Compressed Storage",desc:"Compressed Sparse Row (CSR), CSC, and COO matrix representations to store high-dimensional sparse datasets with 99% RAM savings.",icon:w,color:"#ec4899",methods:["sparse.csr_matrix","sparse.csc_matrix","sparse.eye","sparse.vstack","sparse.linalg.svds"],mlUse:"TF-IDF text feature matrices, graph adjacency matrices, recommendation collaborative filtering."}],c=[{id:"part1",fileName:"01_intro_scipy_ecosystem.py",title:"1. SciPy Ecosystem & Architecture",badge:"Ecosystem Overview",code:k,summary:"Demonstrates how SciPy sits on top of NumPy, passing raw contiguous memory buffers directly into C/Fortran solvers."},{id:"part2",fileName:"02_subpackage_overview.py",title:"2. Core Subpackages & Essential Modules",badge:"Subpackage Tour",code:z,summary:"Walks through scipy.stats, scipy.spatial, scipy.linalg, and scipy.optimize with concrete ML examples."},{id:"part3",fileName:"03_scipy_architecture.py",title:"3. Compiled C/BLAS Acceleration Check",badge:"Low-Level Performance",code:L,summary:"Inspects underlying BLAS/LAPACK linking, confirming hardware SIMD acceleration across numerical routines."}];function R(){const[i,p]=l.useState("interactive"),[n,m]=l.useState("part1"),[s,u]=l.useState(d[0]),r=c.find(t=>t.id===n)||c[0];return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(S,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 0"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Introduction to SciPy"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"The cornerstone of scientific Python. Explore SciPy’s high-performance compiled mathematical subpackages powering classical statistics, spatial metrics, linear algebra, and machine learning optimization."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Ecosystem Studio",icon:P},{id:"code",label:"Python Code Lab",icon:j},{id:"notes",label:"Revision Notes",icon:C},{id:"quiz",label:"Practice & FAQs",icon:A}].map(t=>{const a=t.icon,o=i===t.id;return e.jsxs("button",{onClick:()=>p(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${o?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(a,{className:"w-4 h-4"}),e.jsx("span",{children:t.label})]},t.id)})})]}),i==="interactive"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx(_,{className:"w-5 h-5 text-emerald-400"}),e.jsx("span",{children:"Scientific Python Software Stack"})]}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Layered Architecture"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-1.5",children:[e.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold",children:"Layer 4: ML Frameworks"}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Scikit-Learn, PyTorch"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Estimators, Neural Nets, Model Selection pipelines."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-1.5",children:[e.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold",children:"Layer 3: Scientific Algorithms"}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"SciPy"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Stats distributions, KDTree spatial search, numerical optimizers."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-1.5",children:[e.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"Layer 2: N-D Array Engine"}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"NumPy & Pandas"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Fast contiguous ndarrays, vectorized SIMD math, tabular frames."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 space-y-1.5",children:[e.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold",children:"Layer 1: Compiled Kernels"}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"C / Fortran / BLAS"}),e.jsx("p",{className:"text-xs text-slate-300",children:"LAPACK, OpenBLAS, MKL hardware vectorized primitives."})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold text-slate-300 uppercase tracking-wider",children:"Select SciPy Subpackage"}),e.jsx("div",{className:"space-y-2",children:d.map(t=>{const a=t.icon,o=s.id===t.id;return e.jsxs("button",{onClick:()=>u(t),className:`w-full p-3.5 rounded-xl border text-left transition-all duration-150 flex items-start gap-3 ${o?"bg-slate-850 border-emerald-500/80 shadow-md shadow-emerald-950/50":"bg-slate-900/70 border-slate-800 hover:bg-slate-850 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"p-2 rounded-lg shrink-0 mt-0.5",style:{backgroundColor:`${t.color}20`,color:t.color},children:e.jsx(a,{className:"w-4 h-4"})}),e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-white block",children:t.name}),e.jsx("span",{className:"text-[11px] text-slate-400 block line-clamp-1",children:t.title})]})]},t.id)})})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-3 rounded-xl",style:{backgroundColor:`${s.color}20`,color:s.color},children:e.jsx(s.icon,{className:"w-6 h-6"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white",children:s.name}),e.jsx("p",{className:"text-xs text-slate-400",children:s.title})]})]}),e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:"High-Performance C/Fortran"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Functional Description"}),e.jsx("p",{className:"text-sm text-slate-200 leading-relaxed",children:s.desc})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5",children:"Core Functions & Classes"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.methods.map((t,a)=>e.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300",children:t},a))})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("h4",{className:"text-xs font-semibold text-indigo-400 uppercase tracking-wider",children:"🎯 Machine Learning Application"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:s.mlUse})]})]})]})]})]}),i==="code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:c.map(t=>e.jsxs("button",{onClick:()=>m(t.id),className:`p-3.5 rounded-xl border text-left transition-all ${n===t.id?"bg-emerald-950/40 border-emerald-500 shadow-md shadow-emerald-950/40 scale-[1.02]":"bg-slate-900/80 border-slate-800 hover:bg-slate-850 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${n===t.id?"bg-emerald-500/20 text-emerald-300 border-emerald-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:t.badge}),e.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:".py"})]}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:t.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-1 mt-1",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-emerald-300",children:r.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:r.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"SciPy Demonstration Lab"})]}),e.jsx(x,{fileModule:r.code,title:r.fileName})]})]}),i==="notes"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(g,{note:"Mastering SciPy is the bridge between pure mathematical theory and scalable machine learning engineering. While NumPy stores your matrices, SciPy gives you the statistical inference, probability calculus, and numerical solvers required to understand how algorithms converge under the hood. — Sukanta Hui, Barrackpore ML Lab"}),e.jsx("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(h,{content:D,title:"Introduction to SciPy — Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 0 Study Note",downloadFileName:"scipy_intro_note.txt"})})]}),i==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsx(y,{title:"Introduction to SciPy — Domain FAQs",subtitle:"Master essential scientific Python architecture, subpackage roles, and ML integration patterns",questions:F})})]})})}export{R as default};
