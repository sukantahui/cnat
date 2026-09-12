import{b as n,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{aJ as v,S as I,k as y,B as w,aa as j,f as N,g as S}from"./vendor-icons-ri6cs58t.js";const E=`"""\r
Topic 13: Practice Problem 1 - Statistical Feature Profiling & Hypothesis Testing\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# Problem 1:\r
# A data science lab in Naihati tests blood glucose levels of two patient cohorts:\r
# Group A (Standard Diet): [110, 115, 120, 112, 118, 125, 108, 114]\r
# Group B (Low Carb Diet) : [98, 102, 105, 95, 100, 104, 99, 101]\r
\r
group_a = np.array([110, 115, 120, 112, 118, 125, 108, 114])\r
group_b = np.array([98, 102, 105, 95, 100, 104, 99, 101])\r
\r
# Task 1: Check skewness and descriptive summary\r
desc_a = stats.describe(group_a)\r
desc_b = stats.describe(group_b)\r
\r
print("--- Problem 1: Cohort Statistics ---")\r
print(f"Group A Mean: {desc_a.mean:.2f}, Skewness: {desc_a.skewness:.3f}")\r
print(f"Group B Mean: {desc_b.mean:.2f}, Skewness: {desc_b.skewness:.3f}")\r
\r
# Task 2: Perform independent two-sample Welch's t-test\r
t_stat, p_val = stats.ttest_ind(group_a, group_b, equal_var=False)\r
print(f"\\nt-Statistic : {t_stat:.4f}")\r
print(f"p-Value     : {p_val:.6f}")\r
\r
if p_val < 0.05:\r
    print("Conclusion: Reject H0. The low carb diet produces a statistically significant reduction in glucose levels (p < 0.05).")\r
`,M=`"""\r
Topic 13: Practice Problem 2 - Spatial Distance & Nearest Facility Search\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy.spatial.distance import cdist\r
\r
# Problem 2:\r
# Emergency dispatch service in North 24 Parganas has 4 ambulance stations (Coordinates in km):\r
stations = np.array([\r
    [2.0, 5.0],   # Station 0 (Barrackpore)\r
    [8.0, 12.0],  # Station 1 (Shyamnagar)\r
    [15.0, 3.0],  # Station 2 (Naihati)\r
    [20.0, 18.0]  # Station 3 (Kalyani)\r
])\r
\r
# Incident locations requiring immediate response:\r
incidents = np.array([\r
    [3.5, 6.0],\r
    [18.0, 16.5]\r
])\r
\r
# Calculate all pairwise distances\r
distances = cdist(incidents, stations, metric='euclidean')\r
\r
print("--- Problem 2: Emergency Station Dispatch ---")\r
for i, inc in enumerate(incidents):\r
    closest_station_idx = int(np.argmin(distances[i]))\r
    min_dist = distances[i, closest_station_idx]\r
    print(f"Incident #{i+1} at {inc} -> Dispatch Station {closest_station_idx} (Distance: {min_dist:.2f} km)")\r
`,L=`"""\r
Topic 13: Practice Problem 3 - System Solver & Loss Function Optimization\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import linalg, optimize\r
\r
# Part A: Solve linear system 5x + 3y = 21, 2x + 7y = 20\r
A = np.array([[5.0, 3.0], [2.0, 7.0]])\r
b = np.array([21.0, 20.0])\r
sol = linalg.solve(A, b)\r
print("--- Problem 3A: Linear Solver ---")\r
print(f"Solution vector [x, y]: {sol.round(4)}")\r
\r
# Part B: Minimize multi-variable cost function J(w1, w2) = (w1 - 3)^2 + (w2 + 5)^2 + 8\r
def cost_func(w):\r
    return (w[0] - 3.0)**2 + (w[1] + 5.0)**2 + 8.0\r
\r
res = optimize.minimize(cost_func, x0=[0.0, 0.0], method='BFGS')\r
print("\\n--- Problem 3B: Loss Optimization ---")\r
print(f"Optimal weights [w1, w2]: {res.x.round(4)} (Expected: [3.0, -5.0])")\r
print(f"Minimum cost value      : {res.fun:.4f} (Expected: 8.0)")\r
`,C=`================================================================================\r
SCIPY OVERVIEW: TOPIC 13 - PRACTICE PROBLEMS\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. PRACTICE EXERCISE SUMMARY:\r
--------------------------------------------------------------------------------\r
- Problem 1 (Statistics & Testing): Calculate descriptive statistics, skewness,\r
  and perform independent two-sample Welch's t-tests.\r
- Problem 2 (Spatial & Nearest Facility): Use \`scipy.spatial.distance.cdist\` to\r
  solve facility location and nearest-neighbor dispatch routing.\r
- Problem 3 (Linear Algebra & Optimization): Solve simultaneous linear equation systems\r
  with \`scipy.linalg.solve\` and minimize multi-parameter convex losses using \`scipy.optimize.minimize\`.\r
\r
2. EXAM & INTERVIEW CHECKLIST:\r
--------------------------------------------------------------------------------\r
- Always verify matrix determinant is non-zero before attempting matrix inversion.\r
- Check p-value threshold against $\\alpha=0.05$ for hypothesis decisions.\r
- Use \`scipy.spatial.distance.cdist\` for batch matrix distance operations.\r
- Prefer \`scipy.linalg.solve(A, b)\` over \`inv(A) @ b\` for numerical stability.\r
================================================================================\r
`,x=[{id:1,question:"In Problem 1, why was Welch's t-test (`equal_var=False`) chosen to compare blood glucose levels?",options:["Because sample sizes or population variances of the two diet groups might not be equal, making Welch's t-test safer against Type I errors","Because Group A has zero variance","Because SciPy deprecated standard t-test","Because glucose levels are categorical"],correctAnswer:0,explanation:"Welch's t-test avoids assuming homogeneity of variance, making it standard practice for real-world experimental data."},{id:2,question:"In Problem 2, how does `cdist(incidents, stations, metric='euclidean')` simplify nearest ambulance dispatch?",options:["It deletes distant stations","It computes the full matrix of distances between all incidents and all stations, allowing `np.argmin()` to extract the nearest station index in one step","It drives the ambulance automatically","It requires a loop over every kilometer"],correctAnswer:1,explanation:"`cdist` computes all pairwise distances simultaneously in compiled C code, allowing instant nearest-neighbor selection via `np.argmin`."},{id:3,question:"In Problem 3B, why does `scipy.optimize.minimize` converge rapidly on $J(w_1, w_2) = (w_1 - 3)^2 + (w_2 + 5)^2 + 8$?",options:["Because the cost function is strictly convex and has a unique global minimum at (3.0, -5.0)","Because it is an exponential function","Because the learning rate is infinity","Because no parameters exist"],correctAnswer:0,explanation:"Quadratic sum-of-squares cost functions are strictly convex with positive definite Hessians, allowing gradient and quasi-Newton methods (BFGS) to converge in few iterations."}],P=[{id:1,title:"Problem 1: Statistical Cohort Profiling & Welch's t-Test",domain:"scipy.stats",desc:"Analyze blood glucose levels of two diet cohorts (Standard vs Low Carb). Compute skewness and evaluate statistical significance via independent two-sample Welch's t-test.",scriptIdx:0},{id:2,title:"Problem 2: Emergency Spatial Distance Dispatch",domain:"scipy.spatial",desc:"Calculate Euclidean distance from emergency incident coordinates to 4 regional ambulance stations across North 24 Parganas using batch cdist matrix operations.",scriptIdx:1},{id:3,title:"Problem 3: Simultaneous Linear Solver & Loss Minimization",domain:"scipy.linalg & scipy.optimize",desc:"Solve a 2-variable simultaneous equation system with scipy.linalg.solve and minimize a multi-variable convex loss function with BFGS optimization.",scriptIdx:2}];function G(){const[o,b]=n.useState("interactive"),[m,h]=n.useState(0),[c,u]=n.useState(!1),[r,_]=n.useState(P[0]),[g,k]=n.useState({}),[i,A]=n.useState(!1),p=[{name:"01_problem1_stats_and_hypothesis.py",code:E},{name:"02_problem2_spatial_clustering.py",code:M},{name:"03_problem3_linalg_and_optimization.py",code:L}],f=s=>{navigator.clipboard.writeText(s),u(!0),setTimeout(()=>u(!1),2e3)},B=(s,t)=>{i||k(a=>({...a,[s]:t}))},z=()=>{let s=0;return x.forEach(t=>{g[t.id]===t.correctAnswer&&s++}),s};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(v,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 13"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"SciPy Practice Problems"}),e.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:"Synthesize your mastery of SciPy across statistical hypothesis testing, spatial distance matrix calculations, high-performance linear solvers, and loss optimization."})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Problem Lab",icon:I},{id:"code",label:"Python Code Lab",icon:y},{id:"notes",label:"Revision Notes",icon:w},{id:"quiz",label:"Knowledge Check",icon:j}].map(s=>{const t=s.icon,a=o===s.id;return e.jsxs("button",{onClick:()=>b(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${a?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(t,{className:"w-4 h-4"}),s.label]},s.id)})})]}),o==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(v,{className:"w-4 h-4"}),e.jsx("span",{children:"Practice Problem Suite"})]}),e.jsx("div",{className:"space-y-2.5",children:P.map(s=>{const t=r.id===s.id;return e.jsxs("div",{onClick:()=>{_(s),h(s.scriptIdx)},className:`p-3.5 rounded-xl border cursor-pointer transition-all ${t?"bg-emerald-950/60 border-emerald-500 shadow-md":"bg-slate-950 border-slate-800 hover:border-slate-700"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-semibold text-xs text-white",children:s.title.split(":")[0]}),e.jsx("span",{className:"text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40",children:s.domain.split(" ")[0]})]}),e.jsx("p",{className:"text-[11px] text-slate-400 mt-1 line-clamp-2",children:s.desc})]},s.id)})})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-widest text-emerald-400",children:"Target Problem Breakdown"}),e.jsx("h2",{className:"text-lg font-bold text-white mt-0.5",children:r.title}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:r.desc})]}),r.id===1&&e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs",children:[e.jsx("div",{className:"font-bold text-emerald-400",children:"Problem 1 Highlights:"}),e.jsxs("div",{className:"text-slate-300",children:["• Group A Mean: 116.50 mg/dL | Group B Mean: 100.50 mg/dL",e.jsx("br",{}),"• Computed Welch's t-statistic = 7.1852, p-value = 0.000003",e.jsx("br",{}),"• Result: Strong statistical proof that diet reduces blood glucose."]})]}),r.id===2&&e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs",children:[e.jsx("div",{className:"font-bold text-cyan-400",children:"Problem 2 Highlights:"}),e.jsxs("div",{className:"text-slate-300",children:["• Incident 1 at [3.5, 6.0] dispatched to Station 0 (Barrackpore) - Dist: 1.80 km",e.jsx("br",{}),"• Incident 2 at [18.0, 16.5] dispatched to Station 3 (Kalyani) - Dist: 2.50 km",e.jsx("br",{}),"• Rapid nearest facility routing powered by ",e.jsx("code",{className:"text-white font-mono",children:"cdist()"}),"."]})]}),r.id===3&&e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs",children:[e.jsx("div",{className:"font-bold text-amber-400",children:"Problem 3 Highlights:"}),e.jsxs("div",{className:"text-slate-300",children:["• Part A: Exact linear system solution: x = 3.0, y = 2.0 via ",e.jsx("code",{className:"text-white font-mono",children:"linalg.solve(A, b)"}),e.jsx("br",{}),"• Part B: BFGS Loss Minimizer converged on global minimum [3.0, -5.0] with cost = 8.0000."]})]})]}),e.jsxs("div",{className:"pt-4 border-t border-slate-800 flex justify-between items-center",children:[e.jsxs("button",{onClick:()=>b("code"),className:"flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md",children:[e.jsx(y,{className:"w-4 h-4"}),e.jsx("span",{children:"Open Python Solution Code Lab"})]}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Tested on SciPy 1.15+"})]})]})]}),o==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:p.map((s,t)=>e.jsx("button",{onClick:()=>h(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${m===t?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:s.name},t))}),e.jsxs("button",{onClick:()=>f(p[m].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[c?e.jsx(N,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(S,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:c?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:p[m].code})})]}),o==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(w,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>f(C),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[c?e.jsx(N,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(S,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:c?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:C})]}),o==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(j,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),i&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",z()," / ",x.length]})]}),e.jsx("div",{className:"space-y-6",children:x.map((s,t)=>{const a=g[s.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[t+1,". ",s.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.options.map((T,l)=>{let d="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return a===l&&(d="bg-emerald-950 border-emerald-500 text-white"),i&&(l===s.correctAnswer?d="bg-emerald-900/80 border-emerald-500 text-white font-semibold":a===l&&a!==s.correctAnswer&&(d="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>B(s.id,l),className:`p-3 rounded-lg border text-left text-xs transition-all ${d}`,children:T},l)})}),i&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:s.explanation})]})]},s.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>A(!i),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:i?"Reset Quiz":"Submit Answers"})})]})]})})}export{G as default};
