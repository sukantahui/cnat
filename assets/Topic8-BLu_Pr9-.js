import{b as d,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{a5 as D,S as G,k as J,B as S,aa as A,bq as Z,f as T,g as M}from"./vendor-icons-DFC0rBCP.js";const ee=`"""\r
Topic 8: Spatial Distance Metrics in scipy.spatial.distance\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy.spatial import distance\r
\r
# Two 2D feature points (e.g. house area and distance from Kolkata metro)\r
pt_a = np.array([2.0, 3.0])\r
pt_b = np.array([6.0, 7.0])\r
\r
# 1. Euclidean Distance (L2 norm) : \\sqrt{\\sum (u_i - v_i)^2}\r
d_euclid = distance.euclidean(pt_a, pt_b)\r
\r
# 2. Manhattan / Cityblock Distance (L1 norm) : \\sum |u_i - v_i|\r
d_manhattan = distance.cityblock(pt_a, pt_b)\r
\r
# 3. Chebyshev Distance (L_\\infty norm) : \\max |u_i - v_i|\r
d_chebyshev = distance.chebyshev(pt_a, pt_b)\r
\r
# 4. Cosine Distance : 1 - (u \\cdot v) / (||u|| ||v||)\r
d_cosine = distance.cosine(pt_a, pt_b)\r
\r
# 5. Minkowski Distance (generalized Lp norm, e.g. p=3)\r
d_minkowski = distance.minkowski(pt_a, pt_b, p=3)\r
\r
print("--- Distance Calculations between Point A and Point B ---")\r
print(f"Point A: {pt_a}, Point B: {pt_b}\\n")\r
print(f"1. Euclidean (L2) Distance  : {d_euclid:.4f}")\r
print(f"2. Manhattan (L1) Distance  : {d_manhattan:.4f}")\r
print(f"3. Chebyshev (L_inf)        : {d_chebyshev:.4f}")\r
print(f"4. Cosine Distance (1-cos)  : {d_cosine:.4f}")\r
print(f"5. Minkowski (p=3) Distance : {d_minkowski:.4f}")\r
`,se=`"""\r
Topic 8: Pairwise Distance Matrices via cdist and pdist\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy.spatial.distance import cdist, pdist, squareform\r
\r
# Matrix of 3 training points in 2D\r
X_train = np.array([\r
    [1.0, 2.0],\r
    [2.0, 4.0],\r
    [5.0, 8.0]\r
])\r
\r
# Matrix of 2 test points to classify via KNN\r
X_test = np.array([\r
    [1.5, 2.5],\r
    [4.0, 7.0]\r
])\r
\r
# cdist computes all pairwise distances between every row in X_test and every row in X_train\r
dist_matrix = cdist(X_test, X_train, metric='euclidean')\r
\r
print("--- Pairwise Cross-Distance Matrix (cdist) ---")\r
print("Shape (n_test, n_train):", dist_matrix.shape)\r
print("Distance Matrix (Rows = Test Points, Cols = Train Points):")\r
print(np.round(dist_matrix, 3))\r
\r
# pdist computes condensed pairwise distances between all pairs in X_train\r
condensed = pdist(X_train, metric='cityblock')\r
square_mat = squareform(condensed)\r
print("\\n--- Self Pairwise Manhattan Matrix (squareform(pdist)) ---")\r
print(square_mat)\r
`,te=`"""\r
Topic 8: Fast O(log N) Nearest Neighbor Lookups using scipy.spatial.KDTree\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy.spatial import KDTree\r
\r
# Simulate 1,000 spatial points in 2D coordinate space (e.g. store locations)\r
np.random.seed(42)\r
locations = np.random.uniform(0, 100, size=(1000, 2))\r
\r
# Build KDTree index structure\r
tree = KDTree(locations)\r
\r
# Query point: User's live GPS coordinates in Barrackpore\r
query_pt = np.array([45.2, 67.8])\r
\r
# Query nearest 3 neighbors (k=3)\r
distances, indices = tree.query(query_pt, k=3)\r
\r
print("--- KDTree O(log N) KNN Spatial Search ---")\r
print(f"User Location: {query_pt}\\n")\r
for i, (dist, idx) in enumerate(zip(distances, indices), 1):\r
    nearest_coords = locations[idx]\r
    print(f"Neighbor #{i}: Index {idx} at coordinates {nearest_coords.round(2)}, Distance: {dist:.3f}")\r
`,X=`================================================================================\r
SCIPY OVERVIEW: TOPIC 8 - SCIPY.SPATIAL: DISTANCE METRICS\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS SCIPY.SPATIAL?\r
--------------------------------------------------------------------------------\r
- \`scipy.spatial\` and \`scipy.spatial.distance\` provide optimized algorithms\r
  for computing spatial geometric relationships, distances, and spatial index trees.\r
\r
2. CORE DISTANCE FORMULAS:\r
--------------------------------------------------------------------------------\r
1. Euclidean Distance (L2 norm):\r
   d(u, v) = \\sqrt{\\sum_{i=1}^n (u_i - v_i)^2}\r
   Function: \`distance.euclidean(u, v)\`\r
\r
2. Manhattan / Cityblock Distance (L1 norm):\r
   d(u, v) = \\sum_{i=1}^n |u_i - v_i|\r
   Function: \`distance.cityblock(u, v)\` (preferred for high-dimensional or grid data).\r
\r
3. Chebyshev Distance (L_\\infty norm):\r
   d(u, v) = \\max_i |u_i - v_i| (chessboard king moves).\r
   Function: \`distance.chebyshev(u, v)\`\r
\r
4. Cosine Distance:\r
   d(u, v) = 1 - \\frac{u \\cdot v}{||u||_2 ||v||_2}\r
   Function: \`distance.cosine(u, v)\` (essential for text embeddings & TF-IDF vectors).\r
\r
5. Minkowski Distance (L_p generalized norm):\r
   d(u, v) = \\left( \\sum_{i=1}^n |u_i - v_i|^p \\right)^{1/p}\r
   Function: \`distance.minkowski(u, v, p=p)\`\r
\r
3. BATCH MATRIX TOOLS:\r
--------------------------------------------------------------------------------\r
- \`cdist(XA, XB, metric='euclidean')\`: Computes distance between each pair of the two collections.\r
- \`pdist(X, metric='cityblock')\`      : Computes pairwise distances between observations in n-D space.\r
- \`KDTree(data)\`                      : Spatial binary partitioning tree for $O(\\log N)$ nearest-neighbor queries.\r
`,y=[{id:1,question:"Which distance metric is calculated as the sum of absolute coordinate differences: $\\sum |x_i - y_i|$?",options:["Euclidean distance (L2)","Manhattan / Cityblock distance (L1)","Cosine distance","Chebyshev distance"],correctAnswer:1,explanation:"Manhattan distance (implemented as `scipy.spatial.distance.cityblock`) sums the absolute differences along each dimension."},{id:2,question:"What function in `scipy.spatial.distance` computes cross-pairwise distances between two matrices XA (size M) and XB (size N)?",options:["distance.cdist(XA, XB)","distance.pdist(XA)","distance.cross(XA, XB)","distance.matrix_diff(XA, XB)"],correctAnswer:0,explanation:"`cdist(XA, XB)` generates an (M x N) matrix containing pairwise distances between all pairs of rows in XA and XB."},{id:3,question:"What is the primary advantage of building a `scipy.spatial.KDTree` over brute-force pairwise distance comparisons for KNN queries?",options:["KDTree eliminates all memory usage","KDTree reduces nearest-neighbor search complexity from $O(N)$ to $O(\\log N)$ by partitioning spatial search space","KDTree only works with 1D data","KDTree converts coordinates to text strings"],correctAnswer:1,explanation:"A KDTree organizes spatial coordinates in a k-dimensional binary search tree, enabling sub-linear $O(\\log N)$ nearest neighbor queries."}];function re(){const[m,L]=d.useState("interactive"),[g,B]=d.useState(0),[u,j]=d.useState(!1),[o,$]=d.useState(2),[n,P]=d.useState(3),[r,K]=d.useState(8),[l,q]=d.useState(9),[N,E]=d.useState({}),[x,z]=d.useState(!1),v=[{name:"01_distance_metrics_overview.py",code:ee},{name:"02_pairwise_distances_cdist_pdist.py",code:se},{name:"03_kdtree_fast_nearest_neighbors.py",code:te}],w=s=>{navigator.clipboard.writeText(s),j(!0),setTimeout(()=>j(!1),2e3)},F=(s,i)=>{x||E(c=>({...c,[s]:i}))},O=()=>{let s=0;return y.forEach(i=>{N[i.id]===i.correctAnswer&&s++}),s},p=Math.abs(r-o),b=Math.abs(l-n),I=Math.sqrt(p*p+b*b),W=p+b,R=Math.max(p,b),Y=o*r+n*l,_=Math.sqrt(o*o+n*n),C=Math.sqrt(r*r+l*l),Q=_>0&&C>0?1-Y/(_*C):0,k=25,H=25,U=275,t=s=>H+s*k,a=s=>U-s*k;return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(D,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 8"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"scipy.spatial: Distance Metrics"}),e.jsxs("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:["Master geometric and vector distances in Machine Learning. Compare Euclidean ($L_2$), Manhattan ($L_1$), Chebyshev, and Cosine distance, alongside batch ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"cdist()"})," and ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"KDTree"}),"."]})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Spatial Distance Explorer Studio",icon:G},{id:"code",label:"Python Code Lab",icon:J},{id:"notes",label:"Revision Notes",icon:S},{id:"quiz",label:"Knowledge Check",icon:A}].map(s=>{const i=s.icon,c=m===s.id;return e.jsxs("button",{onClick:()=>L(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${c?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(i,{className:"w-4 h-4"}),s.label]},s.id)})})]}),m==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(Z,{className:"w-4 h-4"}),e.jsx("span",{children:"Feature Coordinate Controls"})]}),e.jsxs("div",{className:"space-y-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-emerald-400",children:"Point A (u)"}),e.jsxs("span",{className:"font-mono text-emerald-300",children:["(",o,", ",n,")"]})]}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-slate-400",children:["X-coord: ",o]}),e.jsx("input",{type:"range",min:"0",max:"10",value:o,onChange:s=>$(Number(s.target.value)),className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-slate-400",children:["Y-coord: ",n]}),e.jsx("input",{type:"range",min:"0",max:"10",value:n,onChange:s=>P(Number(s.target.value)),className:"w-full accent-emerald-500"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-cyan-400",children:"Point B (v)"}),e.jsxs("span",{className:"font-mono text-cyan-300",children:["(",r,", ",l,")"]})]}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-slate-400",children:["X-coord: ",r]}),e.jsx("input",{type:"range",min:"0",max:"10",value:r,onChange:s=>K(Number(s.target.value)),className:"w-full accent-cyan-500"})]}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-slate-400",children:["Y-coord: ",l]}),e.jsx("input",{type:"range",min:"0",max:"10",value:l,onChange:s=>q(Number(s.target.value)),className:"w-full accent-cyan-500"})]})]})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(D,{className:"w-4 h-4"}),e.jsx("span",{children:"2D Coordinate Distance Canvas"})]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Δx = ",p,", Δy = ",b]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 300 300",className:"w-64 h-64 overflow-visible",children:[[0,2,4,6,8,10].map(s=>e.jsxs("g",{children:[e.jsx("line",{x1:t(s),y1:a(0),x2:t(s),y2:a(10),stroke:"#1e293b",strokeWidth:"1"}),e.jsx("line",{x1:t(0),y1:a(s),x2:t(10),y2:a(s),stroke:"#1e293b",strokeWidth:"1"})]},s)),e.jsx("polyline",{fill:"none",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"4 4",points:`${t(o)},${a(n)} ${t(r)},${a(n)} ${t(r)},${a(l)}`}),e.jsx("line",{x1:t(o),y1:a(n),x2:t(r),y2:a(l),stroke:"#10b981",strokeWidth:"2.5"}),e.jsx("circle",{cx:t(o),cy:a(n),r:"6",fill:"#10b981"}),e.jsx("text",{x:t(o)-15,y:a(n)-8,fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"A"}),e.jsx("circle",{cx:t(r),cy:a(l),r:"6",fill:"#38bdf8"}),e.jsx("text",{x:t(r)+8,y:a(l)+4,fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:"B"})]})}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Euclidean (L2)"}),e.jsx("div",{className:"text-lg font-bold text-emerald-400 font-mono mt-0.5",children:I.toFixed(3)}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Direct distance"})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Manhattan (L1)"}),e.jsx("div",{className:"text-lg font-bold text-amber-400 font-mono mt-0.5",children:W.toFixed(3)}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Grid step sum"})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Chebyshev (L∞)"}),e.jsx("div",{className:"text-lg font-bold text-teal-400 font-mono mt-0.5",children:R.toFixed(3)}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Max coordinate delta"})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Cosine Distance"}),e.jsx("div",{className:"text-lg font-bold text-cyan-400 font-mono mt-0.5",children:Q.toFixed(4)}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"1 - Cosine similarity"})]})]})]})]}),m==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:v.map((s,i)=>e.jsx("button",{onClick:()=>B(i),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${g===i?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:s.name},i))}),e.jsxs("button",{onClick:()=>w(v[g].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[u?e.jsx(T,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:u?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:v[g].code})})]}),m==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(S,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>w(X),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[u?e.jsx(T,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(M,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:u?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:X})]}),m==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(A,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),x&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",O()," / ",y.length]})]}),e.jsx("div",{className:"space-y-6",children:y.map((s,i)=>{const c=N[s.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[i+1,". ",s.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.options.map((V,h)=>{let f="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return c===h&&(f="bg-emerald-950 border-emerald-500 text-white"),x&&(h===s.correctAnswer?f="bg-emerald-900/80 border-emerald-500 text-white font-semibold":c===h&&c!==s.correctAnswer&&(f="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>F(s.id,h),className:`p-3 rounded-lg border text-left text-xs transition-all ${f}`,children:V},h)})}),x&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:s.explanation})]})]},s.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>z(!x),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:x?"Reset Quiz":"Submit Answers"})})]})]})})}export{re as default};
