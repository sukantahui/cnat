import{b as s,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{ax as T,S as Z,k as ee,B as V,aa as _,j as te,aB as ne,f as E,g as P}from"./vendor-icons-DFC0rBCP.js";const se=`"""\r
Topic 9: Matrix Inverses and Solving Linear Systems via scipy.linalg\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import linalg\r
\r
# System of Linear Equations:\r
# 3x + 2y = 18\r
# 1x + 4y = 16\r
\r
A = np.array([[3.0, 2.0], [1.0, 4.0]])\r
b = np.array([18.0, 16.0])\r
\r
# 1. Solving Ax = b directly via LAPACK solve (preferred over inv(A) @ b)\r
x = linalg.solve(A, b)\r
\r
# 2. Matrix Inversion: A^{-1}\r
A_inv = linalg.inv(A)\r
\r
print("--- System of Linear Equations ---")\r
print(f"Matrix A:\\n{A}")\r
print(f"Vector b: {b}\\n")\r
print(f"Exact Solution x: {x}  (x = {x[0]:.2f}, y = {x[1]:.2f})")\r
print(f"\\nMatrix Inverse A^(-1):\\n{A_inv}")\r
\r
# Verification: A @ A_inv = Identity matrix I\r
I = A @ A_inv\r
print(f"\\nVerification A @ A_inv:\\n{np.round(I, 4)}")\r
`,re=`"""\r
Topic 9: Determinants, Eigenvalues, and Eigenvectors (PCA Foundation)\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import linalg\r
\r
# Covariance / Transformation Matrix:\r
M = np.array([\r
    [4.0, 2.0],\r
    [1.0, 3.0]\r
])\r
\r
# 1. Determinant (Scaling factor of area/volume)\r
det_val = linalg.det(M)\r
print(f"Matrix M:\\n{M}")\r
print(f"Determinant det(M): {det_val:.4f}")\r
\r
# 2. Eigenvalues (\\lambda) and Eigenvectors (v): M v = \\lambda v\r
eigenvalues, eigenvectors = linalg.eig(M)\r
\r
print("\\n--- Eigen Decomposition (Foundational for PCA) ---")\r
print("Eigenvalues (Variance magnitude along principal axes):")\r
for i, val in enumerate(eigenvalues.real, 1):\r
    print(f" \\u03bb_{i} = {val:.4f}")\r
\r
print("\\nEigenvectors (Columns represent orthogonal principal directions):")\r
print(np.round(eigenvectors.real, 4))\r
`,ae=`"""\r
Topic 9: LU and Singular Value Decomposition (SVD)\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import linalg\r
\r
# Feature dataset matrix with 4 samples and 2 features\r
X = np.array([\r
    [2.5, 2.4],\r
    [0.5, 0.7],\r
    [2.2, 2.9],\r
    [1.9, 2.2]\r
])\r
\r
# Singular Value Decomposition: X = U \\Sigma V^T\r
# Core mathematical backbone of PCA, Latent Semantic Analysis, and Matrix Factorization\r
U, s, Vt = linalg.svd(X)\r
\r
print("--- Singular Value Decomposition (SVD) ---")\r
print("Input Matrix X shape:", X.shape)\r
print("\\n1. Left Singular Matrix U (Sample space projection):")\r
print(np.round(U, 3))\r
\r
print("\\n2. Singular Values \\u03a3 (Eigen-energy of features):")\r
print(np.round(s, 3))\r
\r
print("\\n3. Right Singular Matrix V^T (Principal Component directions):")\r
print(np.round(Vt, 3))\r
`,I=`================================================================================\r
SCIPY OVERVIEW: TOPIC 9 - SCIPY.LINALG: BASIC LINEAR ALGEBRA\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS SCIPY.LINALG?\r
--------------------------------------------------------------------------------\r
- Contains the full suite of LAPACK (Linear Algebra Package) and BLAS (Basic Linear\r
  Algebra Subprograms) routines compiled in Fortran and C.\r
- Always preferred over \`numpy.linalg\` in scientific and ML workflows.\r
\r
2. CORE MATRIX ROUTINES:\r
--------------------------------------------------------------------------------\r
1. \`linalg.solve(A, b)\`:\r
   - Solves $A x = b$ in $O(N^3/3)$ using LU factorization.\r
   - Numerically superior and ~2x faster than calculating \`linalg.inv(A) @ b\`.\r
\r
2. \`linalg.inv(A)\`:\r
   - Computes explicit inverse $A^{-1}$ such that $A A^{-1} = I$.\r
   - Matrix must be square and non-singular ($\\det(A) \\ne 0$).\r
\r
3. \`linalg.det(A)\`:\r
   - Determinant of square matrix $A$.\r
\r
4. \`linalg.eig(A)\`:\r
   - Computes eigenvalues $\\lambda$ and eigenvectors $v$ such that $A v = \\lambda v$.\r
   - Foundation for Principal Component Analysis (PCA) and Spectral Clustering.\r
\r
5. \`linalg.svd(A)\`:\r
   - Singular Value Decomposition: factorizes any matrix into $A = U \\Sigma V^T$.\r
   - Backbone of dimensionality reduction, recommender systems, and pseudoinverse.\r
\r
6. \`linalg.lu(A)\`:\r
   - LU Decomposition $P L U = A$ (Lower and Upper triangular matrices).\r
`,A=[{id:1,question:"Why is `scipy.linalg.solve(A, b)` preferred over `scipy.linalg.inv(A) @ b` when solving linear systems?",options:["`solve()` does not require NumPy","`solve()` uses LU factorization directly, avoiding explicit matrix inversion, making it ~2x faster and significantly more numerically stable","`inv()` only works on integer values","There is no difference"],correctAnswer:1,explanation:"Direct solving via LU/Cholesky decomposition avoids computing matrix inverses explicitly, preventing floating-point truncation errors and reducing compute time."},{id:2,question:"Which linear algebra decomposition in `scipy.linalg` factorizes a matrix into $U \\Sigma V^T$ and forms the foundation of PCA and TruncatedSVD?",options:["linalg.svd()","linalg.det()","linalg.inv()","linalg.norm()"],correctAnswer:0,explanation:"`linalg.svd()` computes the Singular Value Decomposition $U \\Sigma V^T$, which decomposes data into orthogonal principal singular directions."},{id:3,question:"What is required for a square matrix $A$ to be invertible via `scipy.linalg.inv(A)`?",options:["All entries must be positive","The determinant must be non-zero (\\det(A) != 0), meaning columns/rows are linearly independent","Matrix dimensions must be prime numbers","The trace must be equal to 1"],correctAnswer:1,explanation:"A matrix is invertible (non-singular) if and only if its determinant is non-zero."}];function le(){const[l,B]=s.useState("interactive"),[j,D]=s.useState(0),[m,y]=s.useState(!1),[d,U]=s.useState(3),[p,F]=s.useState(2),[u,z]=s.useState(1),[c,R]=s.useState(4),[b,q]=s.useState(18),[g,X]=s.useState(16),[C,K]=s.useState({}),[i,O]=s.useState(!1),N=[{name:"01_matrix_inverse_and_solve.py",code:se},{name:"02_determinant_and_eigenvalues.py",code:re},{name:"03_lu_and_svd_decomposition.py",code:ae}],w=t=>{navigator.clipboard.writeText(t),y(!0),setTimeout(()=>y(!1),2e3)},W=(t,n)=>{i||K(o=>({...o,[t]:n}))},Q=()=>{let t=0;return A.forEach(n=>{C[n.id]===n.correctAnswer&&t++}),t},a=d*c-p*u,r=Math.abs(a)<1e-4,S=r?0:c/a,M=r?0:-p/a,L=r?0:-u/a,$=r?0:d/a,G=r?0:S*b+M*g,H=r?0:L*b+$*g,v=d+c,h=v*v-4*a,k=h>=0?(v+Math.sqrt(h))/2:null,Y=h>=0?(v-Math.sqrt(h))/2:null;return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(T,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 9"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"scipy.linalg: Basic Linear Algebra"}),e.jsxs("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:["Master hardware-accelerated LAPACK and BLAS matrix operations in Python: matrix inverses (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"inv()"}),"), system solvers (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"solve()"}),"), determinants (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"det()"}),"), and eigenvalues (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"eig()"}),")."]})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Matrix Solver & Decompositions",icon:Z},{id:"code",label:"Python Code Lab",icon:ee},{id:"notes",label:"Revision Notes",icon:V},{id:"quiz",label:"Knowledge Check",icon:_}].map(t=>{const n=t.icon,o=l===t.id;return e.jsxs("button",{onClick:()=>B(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${o?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(n,{className:"w-4 h-4"}),t.label]},t.id)})})]}),l==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(T,{className:"w-4 h-4"}),e.jsx("span",{children:"Matrix A & Vector b (Ax = b)"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300 mb-2 block",children:"Matrix A (2×2):"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("input",{type:"number",value:d,onChange:t=>U(Number(t.target.value)),className:"bg-slate-950 border border-slate-800 rounded-lg p-2 text-center text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"}),e.jsx("input",{type:"number",value:p,onChange:t=>F(Number(t.target.value)),className:"bg-slate-950 border border-slate-800 rounded-lg p-2 text-center text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"}),e.jsx("input",{type:"number",value:u,onChange:t=>z(Number(t.target.value)),className:"bg-slate-950 border border-slate-800 rounded-lg p-2 text-center text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"}),e.jsx("input",{type:"number",value:c,onChange:t=>R(Number(t.target.value)),className:"bg-slate-950 border border-slate-800 rounded-lg p-2 text-center text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"})]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300 mb-2 block",children:"Vector b (RHS):"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("input",{type:"number",value:b,onChange:t=>q(Number(t.target.value)),className:"bg-slate-950 border border-slate-800 rounded-lg p-2 text-center text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-500"}),e.jsx("input",{type:"number",value:g,onChange:t=>X(Number(t.target.value)),className:"bg-slate-950 border border-slate-800 rounded-lg p-2 text-center text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-500"})]})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-3.5 space-y-1 font-mono text-xs text-slate-300",children:[e.jsx("div",{className:"text-[10px] uppercase font-bold text-slate-500",children:"System Equations:"}),e.jsxs("div",{children:[d,"x₁ + ",p,"x₂ = ",b]}),e.jsxs("div",{children:[u,"x₁ + ",c,"x₂ = ",g]})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(te,{className:"w-4 h-4"}),e.jsx("span",{children:"Calculated Linear Algebra Properties"})]}),r?e.jsxs("span",{className:"text-xs font-mono text-rose-400 font-bold flex items-center gap-1",children:[e.jsx(ne,{className:"w-3.5 h-3.5"})," Singular Matrix (det = 0)"]}):e.jsx("span",{className:"text-xs font-mono text-emerald-400 font-bold",children:"Non-Singular (Invertible)"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Exact Solution via linalg.solve(A, b)"}),r?e.jsx("div",{className:"text-sm font-bold text-rose-400 font-mono",children:"No unique solution (Singular)"}):e.jsxs("div",{className:"text-lg font-bold text-emerald-400 font-mono",children:["x₁ = ",G.toFixed(3),", x₂ = ",H.toFixed(3)]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Computed via direct LAPACK LU decomposition"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Determinant: linalg.det(A)"}),e.jsxs("div",{className:"text-lg font-bold text-cyan-400 font-mono",children:["det(A) = ",a.toFixed(3)]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Area scaling factor"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Matrix Inverse: linalg.inv(A)"}),r?e.jsx("div",{className:"text-xs text-rose-400",children:"Undefined (Division by zero det)"}):e.jsxs("div",{className:"font-mono text-xs text-teal-300 bg-slate-900 p-2 rounded border border-slate-800",children:["[[",S.toFixed(2),", ",M.toFixed(2),"], [",L.toFixed(2),", ",$.toFixed(2),"]]"]}),e.jsxs("span",{className:"text-[10px] text-slate-500",children:["A @ A^",-1," = I"]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Eigenvalues: linalg.eig(A)"}),k!==null?e.jsxs("div",{className:"text-sm font-bold text-amber-400 font-mono",children:["λ₁ = ",k.toFixed(3),", λ₂ = ",Y.toFixed(3)]}):e.jsx("div",{className:"text-xs text-amber-400 font-mono",children:"Complex Conjugate Roots"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Variance axes for PCA"})]})]})]})]}),l==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:N.map((t,n)=>e.jsx("button",{onClick:()=>D(n),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${j===n?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:t.name},n))}),e.jsxs("button",{onClick:()=>w(N[j].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[m?e.jsx(E,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(P,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:m?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:N[j].code})})]}),l==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(V,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>w(I),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[m?e.jsx(E,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(P,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:m?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:I})]}),l==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),i&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",Q()," / ",A.length]})]}),e.jsx("div",{className:"space-y-6",children:A.map((t,n)=>{const o=C[t.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[n+1,". ",t.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:t.options.map((J,x)=>{let f="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return o===x&&(f="bg-emerald-950 border-emerald-500 text-white"),i&&(x===t.correctAnswer?f="bg-emerald-900/80 border-emerald-500 text-white font-semibold":o===x&&o!==t.correctAnswer&&(f="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>W(t.id,x),className:`p-3 rounded-lg border text-left text-xs transition-all ${f}`,children:J},x)})}),i&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:t.explanation})]})]},t.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>O(!i),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:i?"Reset Quiz":"Submit Answers"})})]})]})})}export{le as default};
