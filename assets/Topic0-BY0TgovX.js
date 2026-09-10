import{b as n,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{ck as L,a5 as M,ax as D,z as F,ci as S,S as B,k as E,B as b,aa as g,L as I,H as K,f,g as v}from"./vendor-icons-DFC0rBCP.js";const O=`"""\r
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
`,R=`"""\r
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
`,V=`"""\r
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
`,N=`================================================================================\r
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
`,x=[{id:1,question:"What is the primary relationship between SciPy and NumPy?",options:["SciPy is a complete replacement for NumPy and does not use ndarrays","SciPy builds on top of NumPy, using NumPy ndarrays as its primary data structure while providing advanced scientific algorithms","SciPy is only used for GUI creation in Python","SciPy cannot interoperate with NumPy arrays"],correctAnswer:1,explanation:"SciPy extends NumPy by providing specialized mathematical, statistical, and engineering routines that operate directly on NumPy ndarrays."},{id:2,question:"Which SciPy subpackage is primarily used for hypothesis testing, probability distributions, and z-score calculations in ML?",options:["scipy.stats","scipy.ndimage","scipy.integrate","scipy.fft"],correctAnswer:0,explanation:"`scipy.stats` contains exhaustive modules for descriptive statistics, continuous/discrete distributions, and hypothesis tests (like t-tests, KS-tests, ANOVA)."},{id:3,question:"Which SciPy subpackage provides distance metrics like Euclidean, Manhattan, and Cosine distance needed for KNN and clustering?",options:["scipy.optimize","scipy.spatial","scipy.cluster","scipy.io"],correctAnswer:1,explanation:"`scipy.spatial` (and `scipy.spatial.distance`) provides efficient implementations for point distances, KD-trees, and spatial queries."},{id:4,question:"Why are SciPy routines significantly faster than pure Python implementations?",options:["SciPy uses just-in-time JavaScript compilation","SciPy routines are wrapped over compiled, high-performance C and Fortran libraries like BLAS and LAPACK","SciPy only runs in cloud supercomputers","SciPy avoids using memory altogether"],correctAnswer:1,explanation:"SciPy wraps highly optimized low-level numerical libraries like LAPACK and BLAS written in C and Fortran."}],j=[{id:"stats",name:"scipy.stats",title:"Statistical Distributions & Hypothesis Testing",desc:"Probability distributions (Normal, Student-t, Poisson), descriptive stats (z-score, skew, kurtosis), and hypothesis testing.",icon:L,color:"#38bdf8",methods:["stats.norm","stats.ttest_ind","stats.zscore","stats.describe","stats.mode"]},{id:"spatial",name:"scipy.spatial",title:"Spatial Data & Distance Metrics",desc:"Distance algorithms (Euclidean, Cityblock, Cosine, Minkowski), KDTree for rapid KNN spatial search, and Delaunay triangulation.",icon:M,color:"#818cf8",methods:["distance.euclidean","distance.cityblock","distance.cosine","KDTree","Voronoi"]},{id:"linalg",name:"scipy.linalg",title:"Advanced Linear Algebra & Decompositions",desc:"Fast BLAS/LAPACK solvers, matrix inverses, eigenvalues, eigenvectors, SVD, LU, and Cholesky matrix factorizations.",icon:D,color:"#34d399",methods:["linalg.inv","linalg.solve","linalg.det","linalg.eig","linalg.svd"]},{id:"optimize",name:"scipy.optimize",title:"Numerical Optimization & Curve Fitting",desc:"Loss minimization algorithms (BFGS, Nelder-Mead, L-BFGS-B), non-linear least squares curve fitting, and root finding.",icon:F,color:"#f59e0b",methods:["optimize.minimize","optimize.curve_fit","optimize.root","optimize.least_squares"]},{id:"signal",name:"scipy.signal",title:"Signal Processing & Filtering",desc:"Convolution, B-splines, FIR/IIR digital filter design, spectral analysis, and Fourier transforms for feature extraction.",icon:S,color:"#ec4899",methods:["signal.convolve","signal.butter","signal.spectrogram","signal.find_peaks"]}];function G(){const[o,w]=n.useState("interactive"),[m,P]=n.useState(0),[c,u]=n.useState(!1),[a,C]=n.useState(j[0]),[h,A]=n.useState({}),[r,k]=n.useState(!1),p=[{name:"01_intro_scipy_ecosystem.py",code:O},{name:"02_subpackage_overview.py",code:R},{name:"03_scipy_architecture.py",code:V}],y=s=>{navigator.clipboard.writeText(s),u(!0),setTimeout(()=>u(!1),2e3)},_=(s,t)=>{r||A(i=>({...i,[s]:t}))},z=()=>{let s=0;return x.forEach(t=>{h[t.id]===t.correctAnswer&&s++}),s};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(S,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 0"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Introduction to SciPy"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"The cornerstone of scientific Python. Explore SciPy’s high-performance compiled mathematical subpackages powering classical statistics, spatial metrics, linear algebra, and machine learning optimization."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Ecosystem Studio",icon:B},{id:"code",label:"Python Code Lab",icon:E},{id:"notes",label:"Revision Notes",icon:b},{id:"quiz",label:"Knowledge Check",icon:g}].map(s=>{const t=s.icon,i=o===s.id;return e.jsxs("button",{onClick:()=>w(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${i?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(t,{className:"w-4 h-4"}),s.label]},s.id)})})]}),o==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(I,{className:"w-4 h-4"}),e.jsx("span",{children:"SciPy Core Subpackages"})]}),e.jsx("div",{className:"space-y-2.5",children:j.map(s=>{const t=s.icon,i=a.id===s.id;return e.jsxs("div",{onClick:()=>C(s),className:`p-3.5 rounded-xl border cursor-pointer transition-all ${i?"bg-emerald-950/60 border-emerald-500 shadow-md":"bg-slate-950 border-slate-800 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{className:"w-4 h-4",style:{color:s.color}}),e.jsx("span",{className:"font-semibold text-xs text-white",children:s.name})]}),e.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:s.color}})]}),e.jsx("p",{className:"text-[11px] text-slate-400 mt-1 line-clamp-2",children:s.title})]},s.id)})})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-widest text-emerald-400",children:"Subpackage Spotlight"}),e.jsx("h2",{className:"text-xl font-bold text-white mt-0.5",children:a.name})]}),e.jsx("div",{className:"p-3 rounded-2xl border",style:{backgroundColor:`${a.color}15`,borderColor:`${a.color}40`},children:e.jsx(a.icon,{className:"w-6 h-6",style:{color:a.color}})})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{className:"bg-slate-950/70 border border-slate-800/80 rounded-xl p-4",children:[e.jsx("h3",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1",children:"Functional Description"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:a.desc})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Key API Methods & Functions"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:a.methods.map((s,t)=>e.jsxs("div",{className:"flex items-center gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-800/60 font-mono text-xs text-emerald-300",children:[e.jsx(K,{className:"w-3.5 h-3.5 text-emerald-500 shrink-0"}),e.jsx("span",{children:s})]},t))})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 space-y-2",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-200",children:"Why SciPy in Machine Learning?"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["While NumPy provides the ",e.jsx("span",{className:"text-white font-mono",children:"ndarray"})," container and basic linear algebra, SciPy supplies the scientific computational machinery. Scikit-learn, TensorFlow, and PyTorch rely heavily on SciPy routines for underlying statistical checks, KDTree searches, and numerical optimization."]})]})]})]}),e.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400",children:[e.jsx("span",{children:"Underlying implementations: Compiled C, C++, and Fortran wrappers"}),e.jsx("span",{className:"text-emerald-400 font-semibold",children:"Zero Python overhead"})]})]})]}),o==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:p.map((s,t)=>e.jsx("button",{onClick:()=>P(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${m===t?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:s.name},t))}),e.jsxs("button",{onClick:()=>y(p[m].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[c?e.jsx(f,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(v,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:c?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:p[m].code})})]}),o==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(b,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>y(N),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[c?e.jsx(f,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(v,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:c?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:N})]}),o==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(g,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),r&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",z()," / ",x.length]})]}),e.jsx("div",{className:"space-y-6",children:x.map((s,t)=>{const i=h[s.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[t+1,". ",s.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.options.map((T,l)=>{let d="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return i===l&&(d="bg-emerald-950 border-emerald-500 text-white"),r&&(l===s.correctAnswer?d="bg-emerald-900/80 border-emerald-500 text-white font-semibold":i===l&&i!==s.correctAnswer&&(d="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>_(s.id,l),className:`p-3 rounded-lg border text-left text-xs transition-all ${d}`,children:T},l)})}),r&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:s.explanation})]})]},s.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>k(!r),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:r?"Reset Quiz":"Submit Answers"})})]})]})})}export{G as default};
