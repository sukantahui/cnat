import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{z as A,S as J,k as ee,B as O,aa as E,w as se,ad as te,cl as re,f as F,g as G}from"./vendor-icons-ri6cs58t.js";const ne=`"""\r
Topic 10: 1D Scalar Cost Function Minimization with scipy.optimize\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
from scipy import optimize\r
\r
# Objective Loss Function: f(x) = (x - 4)^2 + 10\r
# Minimum should occur at x = 4 with minimum cost = 10\r
def loss_function(x):\r
    return (x - 4.0)**2 + 10.0\r
\r
# 1. 1D Scalar optimization using Brent's method\r
result = optimize.minimize_scalar(loss_function, bracket=(-10, 10))\r
\r
print("--- 1D Scalar Function Optimization ---")\r
print(f"Success Status       : {result.success}")\r
print(f"Optimal x (Parameter): {result.x:.6f}  (Expected ~4.0)")\r
print(f"Minimum Loss Value   : {result.fun:.6f}  (Expected ~10.0)")\r
print(f"Function Evaluations : {result.nfev}")\r
`,ae=`"""\r
Topic 10: Multi-Variable Loss Minimization with BFGS & Nelder-Mead\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import optimize\r
\r
# Rosenbrock Banana function (classic optimization benchmark):\r
# f(x, y) = 100 * (y - x^2)^2 + (1 - x)^2\r
# Global minimum is at (x=1, y=1) where f(x,y)=0\r
def rosenbrock(params):\r
    x, y = params\r
    return 100.0 * (y - x**2)**2 + (1.0 - x)**2\r
\r
# Initial guess far from the minimum\r
initial_guess = np.array([-1.5, 2.0])\r
\r
# Minimize using BFGS (quasi-Newton method utilizing gradient estimates)\r
res_bfgs = optimize.minimize(rosenbrock, initial_guess, method='BFGS')\r
\r
print("--- Multi-Variable BFGS Minimization ---")\r
print(f"Convergence Success : {res_bfgs.success}")\r
print(f"Optimal Parameters  : x = {res_bfgs.x[0]:.4f}, y = {res_bfgs.x[1]:.4f}")\r
print(f"Minimum Value f(x,y): {res_bfgs.fun:.8f}")\r
print(f"Total Iterations    : {res_bfgs.nit}")\r
`,ie=`"""\r
Topic 10: Non-Linear Regression & Curve Fitting with scipy.optimize.curve_fit\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import optimize\r
\r
# Simulated exponential growth data (e.g. user adoption rate in Barrackpore tech hub)\r
# Theoretical model: y = a * exp(b * x)\r
x_data = np.linspace(0, 4, 20)\r
y_clean = 2.5 * np.exp(0.8 * x_data)\r
# Add realistic measurement noise\r
np.random.seed(42)\r
y_noisy = y_clean + np.random.normal(0, 0.5, size=len(x_data))\r
\r
# Model function to fit\r
def exp_model(x, a, b):\r
    return a * np.exp(b * x)\r
\r
# Non-linear least squares fit\r
params, covariance = optimize.curve_fit(exp_model, x_data, y_noisy, p0=[1.0, 1.0])\r
\r
a_fit, b_fit = params\r
print("--- Non-Linear Least Squares Curve Fit ---")\r
print(f"Estimated Parameter a (Initial Scale): {a_fit:.4f}  (True ~ 2.5)")\r
print(f"Estimated Parameter b (Growth Rate)  : {b_fit:.4f}  (True ~ 0.8)")\r
print(f"Parameter Standard Errors: {np.sqrt(np.diag(covariance)).round(4)}")\r
`,P=`================================================================================\r
SCIPY OVERVIEW: TOPIC 10 - SCIPY.OPTIMIZE: MINIMIZATION CONCEPT\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS SCIPY.OPTIMIZE?\r
--------------------------------------------------------------------------------\r
- Provides algorithms for finding the minima (or roots) of objective functions,\r
  crucial for training machine learning algorithms (e.g. minimizing loss/cost functions).\r
\r
2. CORE OPTIMIZATION ROUTINES:\r
--------------------------------------------------------------------------------\r
1. \`optimize.minimize_scalar(fun)\`:\r
   - Finds minimum of a 1D scalar function $f(x)$ using Golden Section or Brent's method.\r
\r
2. \`optimize.minimize(fun, x0, method=...)\`:\r
   - Universal solver for multi-variable loss functions.\r
   - Algorithms:\r
     * \`'BFGS'\` / \`'L-BFGS-B'\`: Quasi-Newton method using approximate Hessian (used in\r
       Scikit-learn's LogisticRegression solver).\r
     * \`'Nelder-Mead'\`: Gradient-free simplex algorithm for non-differentiable losses.\r
     * \`'SLSQP'\`: Sequential Least SQuares Programming for constrained optimization.\r
\r
3. \`optimize.curve_fit(func, xdata, ydata, p0=...)\`:\r
   - Uses Levenberg-Marquardt or Trust Region Reflective non-linear least squares to\r
     estimate optimal parameters for arbitrary non-linear mathematical equations.\r
\r
3. HOW MACHINE LEARNING RELIES ON OPTIMIZATION:\r
--------------------------------------------------------------------------------\r
- Linear Regression minimizes Ordinary Least Squares (MSE).\r
- Logistic Regression minimizes Log-Loss (Binary Cross-Entropy) using L-BFGS.\r
- Neural Networks use Gradient Descent variants (SGD, Adam) based on first-order derivatives.\r
`,z=[{id:1,question:"Which optimization algorithm in `scipy.optimize.minimize` is a Quasi-Newton method that approximates the Hessian matrix and is used inside Scikit-learn's LogisticRegression?",options:["BFGS / L-BFGS-B","BubbleSort","K-Means","RandomSearch"],correctAnswer:0,explanation:"BFGS (and memory-bounded L-BFGS-B) uses first derivatives to build an approximation of second-order curvature (Hessian), enabling rapid quadratic convergence."},{id:2,question:"When should the Nelder-Mead optimization method be chosen in `scipy.optimize.minimize`?",options:["When the objective function is smooth and has easily computable analytical gradients","When the objective function is non-differentiable, noisy, or gradient evaluation is impossible (direct search simplex algorithm)","When optimizing quantum computers","Only for linear equations"],correctAnswer:1,explanation:"Nelder-Mead is a heuristic simplex direct search method that only evaluates function values without calculating gradients."},{id:3,question:"What is the primary purpose of `scipy.optimize.curve_fit`?",options:["To crop images in ndimage","To perform non-linear least-squares fitting of arbitrary user-defined model functions to empirical data","To sort lists of numbers","To compute matrix determinants"],correctAnswer:1,explanation:"`curve_fit` determines optimal coefficients for non-linear equations (exponential, polynomial, sigmoid, power law) given experimental data points."}];function ce(){const[d,W]=r.useState("interactive"),[y,R]=r.useState(0),[h,_]=r.useState(!1),[n,q]=r.useState(4),[M,oe]=r.useState(.5),[i,$]=r.useState(5),[f,H]=r.useState(-3),[b,c]=r.useState(0),[L,Q]=r.useState({}),[o,V]=r.useState(!1),w=[{name:"01_1d_scalar_minimization.py",code:ne},{name:"02_multivariate_minimize_bfgs.py",code:ae},{name:"03_curve_fitting_nonlinear.py",code:ie}],T=s=>{navigator.clipboard.writeText(s),_(!0),setTimeout(()=>_(!1),2e3)},D=(s,t)=>{o||Q(a=>({...a,[s]:t}))},Z=()=>{let s=0;return z.forEach(t=>{L[t.id]===t.correctAnswer&&s++}),s},g=s=>M*Math.pow(s-n,2)+i,Y=s=>2*M*(s-n),K=.35,l=[f];let v=f;for(let s=0;s<10;s++){const t=Y(v);v=v-K*t,l.push(v)}const m=l[Math.min(b,l.length-1)],S=g(m),k=500,C=180,j=-6,B=10,U=g(j)*1.1,x=s=>(s-j)/(B-j)*k,p=s=>C-s/U*(C-20),I=[];for(let s=j;s<=B;s+=.2)I.push(`${x(s)},${p(g(s))}`);return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(A,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 10"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"scipy.optimize: Minimization Concept"}),e.jsxs("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:["The core computational engine behind model training. Master loss function minimization (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"minimize()"}),"), BFGS, Nelder-Mead, and non-linear curve fitting (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"curve_fit()"}),")."]})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Loss Minimizer Studio",icon:J},{id:"code",label:"Python Code Lab",icon:ee},{id:"notes",label:"Revision Notes",icon:O},{id:"quiz",label:"Knowledge Check",icon:E}].map(s=>{const t=s.icon,a=d===s.id;return e.jsxs("button",{onClick:()=>W(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${a?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(t,{className:"w-4 h-4"}),s.label]},s.id)})})]}),d==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(A,{className:"w-4 h-4"}),e.jsx("span",{children:"Loss Landscape Controls"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsxs("span",{children:["Optimal Parameter (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"w^*"}),"):"]}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:n})]}),e.jsx("input",{type:"range",min:"0",max:"8",value:n,onChange:s=>{q(Number(s.target.value)),c(0)},className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsxs("span",{children:["Initial Weight Guess (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"w_0"}),"):"]}),e.jsx("span",{className:"font-mono text-cyan-400 font-bold",children:f})]}),e.jsx("input",{type:"range",min:"-5",max:"2",value:f,onChange:s=>{H(Number(s.target.value)),c(0)},className:"w-full accent-cyan-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsxs("span",{children:["Min Loss Value (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"c"}),"):"]}),e.jsx("span",{className:"font-mono text-slate-400 font-bold",children:i})]}),e.jsx("input",{type:"range",min:"1",max:"15",value:i,onChange:s=>{$(Number(s.target.value)),c(0)},className:"w-full accent-emerald-500"})]})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 flex gap-2",children:[e.jsxs("button",{onClick:()=>c(s=>Math.min(s+1,l.length-1)),className:"flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/30",children:[e.jsx(se,{className:"w-3.5 h-3.5"}),e.jsxs("span",{children:["Step Iteration (",b,"/",l.length-1,")"]})]}),e.jsx("button",{onClick:()=>c(0),className:"p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800 transition-colors",children:e.jsx(te,{className:"w-3.5 h-3.5"})})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(re,{className:"w-4 h-4"}),e.jsx("span",{children:"Loss Surface L(w) & Optimization Trajectory"})]}),e.jsxs("span",{className:"text-xs font-mono text-emerald-400 font-bold",children:["w = ",m.toFixed(3)," | Loss = ",S.toFixed(3)]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex justify-center",children:e.jsxs("svg",{viewBox:`0 0 ${k} ${C}`,className:"w-full h-44 overflow-visible",children:[e.jsx("polyline",{fill:"none",stroke:"#10b981",strokeWidth:"2.5",points:I.join(" ")}),e.jsx("circle",{cx:x(n),cy:p(i),r:"5",fill:"#38bdf8"}),e.jsx("text",{x:x(n)-20,y:p(i)+18,fill:"#38bdf8",fontSize:"10",fontWeight:"bold",children:"Minimum"}),e.jsx("polyline",{fill:"none",stroke:"#f43f5e",strokeWidth:"1.5",strokeDasharray:"3 3",points:l.slice(0,b+1).map(s=>`${x(s)},${p(g(s))}`).join(" ")}),e.jsx("circle",{cx:x(m),cy:p(S),r:"6",fill:"#f43f5e"})]})}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Current Weight (w)"}),e.jsx("div",{className:"text-lg font-bold text-emerald-400 font-mono mt-0.5",children:m.toFixed(3)}),e.jsxs("span",{className:"text-[10px] text-slate-500",children:["Target optimal: ",n]})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Current Loss L(w)"}),e.jsx("div",{className:"text-lg font-bold text-teal-400 font-mono mt-0.5",children:S.toFixed(3)}),e.jsxs("span",{className:"text-[10px] text-slate-500",children:["Global minimum: ",i]})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Convergence Status"}),e.jsx("div",{className:"text-sm font-bold font-mono mt-1",children:Math.abs(m-n)<.05?e.jsx("span",{className:"text-emerald-400",children:"✅ Converged!"}):e.jsx("span",{className:"text-amber-400",children:"⚡ Optimizing..."})}),e.jsxs("span",{className:"text-[10px] text-slate-500",children:["Iteration #",b]})]})]})]})]}),d==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:w.map((s,t)=>e.jsx("button",{onClick:()=>R(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${y===t?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:s.name},t))}),e.jsxs("button",{onClick:()=>T(w[y].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[h?e.jsx(F,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(G,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:h?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:w[y].code})})]}),d==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(O,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>T(P),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[h?e.jsx(F,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(G,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:h?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:P})]}),d==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(E,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),o&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",Z()," / ",z.length]})]}),e.jsx("div",{className:"space-y-6",children:z.map((s,t)=>{const a=L[s.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[t+1,". ",s.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.options.map((X,u)=>{let N="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return a===u&&(N="bg-emerald-950 border-emerald-500 text-white"),o&&(u===s.correctAnswer?N="bg-emerald-900/80 border-emerald-500 text-white font-semibold":a===u&&a!==s.correctAnswer&&(N="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>D(s.id,u),className:`p-3 rounded-lg border text-left text-xs transition-all ${N}`,children:X},u)})}),o&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:s.explanation})]})]},s.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>V(!o),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:o?"Reset Quiz":"Submit Answers"})})]})]})})}export{ce as default};
