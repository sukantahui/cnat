import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{a5 as C,S as $,k as V,B as S,aa as _,aI as H,f as k,g as A}from"./vendor-icons-DFC0rBCP.js";const O=`"""\r
Topic 12: Worked Example 2 - KNN Classification with scipy.spatial Distance\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy.spatial.distance import euclidean\r
\r
# Training Dataset: Student profiles with [Study Hours/week, Practice Problems Solved]\r
# Labels: 0 = Needs Support, 1 = High Distinction\r
train_features = np.array([\r
    [5.0, 20.0],\r
    [6.5, 30.0],\r
    [8.0, 45.0],\r
    [15.0, 90.0],\r
    [18.0, 110.0],\r
    [20.0, 120.0]\r
])\r
train_labels = np.array([0, 0, 0, 1, 1, 1])\r
\r
# New test student in Ichapur: [16.5 hours/week, 95 problems]\r
test_student = np.array([16.5, 95.0])\r
\r
# Compute Euclidean distance to all training samples\r
distances = [euclidean(test_student, x) for x in train_features]\r
\r
# Find 3 nearest neighbors (k=3)\r
k = 3\r
nearest_indices = np.argsort(distances)[:k]\r
predicted_label = int(np.round(np.mean(train_labels[nearest_indices])))\r
\r
print("--- Worked Example: KNN Classification via scipy.spatial ---")\r
print(f"Test Student Vector: {test_student}\\n")\r
for i, idx in enumerate(nearest_indices, 1):\r
    print(f"Neighbor #{i}: Train Index {idx} | Dist: {distances[idx]:.3f} | Label: {train_labels[idx]}")\r
\r
verdict = "High Distinction (1)" if predicted_label == 1 else "Needs Support (0)"\r
print(f"\\nFinal K=3 Majority Vote Prediction: {verdict}")\r
`,W=`"""\r
Topic 12: Content-Based Item Recommendation with cdist\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy.spatial.distance import cdist\r
\r
# Course Catalog Features: [Video Hours, Coding Labs Count, Difficulty (1-5)]\r
catalog = np.array([\r
    [10.0, 25.0, 1.0], # Course 0: Intro to Python\r
    [45.0, 90.0, 4.0], # Course 1: Advanced ML with Scikit-learn & SciPy\r
    [40.0, 85.0, 4.0], # Course 2: Deep Learning Specialization\r
    [8.0, 15.0, 1.0],  # Course 3: Basic Excel Automation\r
    [35.0, 70.0, 3.5]  # Course 4: Data Engineering Pipeline\r
])\r
course_names = [\r
    "Intro to Python",\r
    "Advanced ML with Scikit-learn & SciPy",\r
    "Deep Learning Specialization",\r
    "Basic Excel Automation",\r
    "Data Engineering Pipeline"\r
]\r
\r
# Student just finished "Advanced ML with Scikit-learn & SciPy" (Index 1)\r
target_course = catalog[1:2] # shape (1, 3)\r
\r
# Compute Euclidean distances from Course 1 to all catalog courses\r
distances = cdist(target_course, catalog, metric='euclidean')[0]\r
\r
# Sort by distance (excluding self at index 1)\r
sorted_indices = np.argsort(distances)\r
\r
print("--- Content-Based Course Recommender System ---")\r
print(f"Base Course: '{course_names[1]}'\\n")\r
print("Top Recommended Next Courses:")\r
for rank, idx in enumerate(sorted_indices[1:], 1):\r
    print(f" {rank}. {course_names[idx]:<35} (Distance: {distances[idx]:.2f})")\r
`,z=`"""\r
Topic 12: Cluster Centroid Assignment Engine\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy.spatial.distance import cdist\r
\r
# K-Means Cluster Centroids: 3 Customer Segments [Recency (days), Monetary (₹k)]\r
centroids = np.array([\r
    [10.0, 50.0], # Cluster 0: High-Value Frequent Buyers\r
    [45.0, 15.0], # Cluster 1: Regular Occasional Buyers\r
    [120.0, 3.0]  # Cluster 2: Dormant / At-Risk Users\r
])\r
\r
# New customer transaction vector from Naihati: [15.0 days, 48.0 k]\r
new_customer = np.array([[15.0, 48.0]])\r
\r
# Calculate distance to all 3 centroids\r
distances = cdist(new_customer, centroids, metric='euclidean')[0]\r
assigned_cluster = int(np.argmin(distances))\r
\r
print("--- K-Means Inference via scipy.spatial.distance.cdist ---")\r
print(f"Customer Profile: {new_customer[0]}")\r
for c_idx, d in enumerate(distances):\r
    print(f"Centroid {c_idx} Distance: {d:.2f}")\r
\r
print(f"\\nAssigned Cluster: Cluster {assigned_cluster} (Shortest Distance: {distances[assigned_cluster]:.2f})")\r
`,E=`================================================================================\r
SCIPY OVERVIEW: TOPIC 12 - WORKED EXAMPLE 2: EUCLIDEAN DISTANCE WITH SCIPY.SPATIAL\r
Classroom Notes | Coder & AccoTax (Barrackpore)\r
Instructor: Sukanta Hui\r
================================================================================\r
\r
1. THE ROLE OF EUCLIDEAN DISTANCE IN MACHINE LEARNING:\r
--------------------------------------------------------------------------------\r
- K-Nearest Neighbors (KNN): Classifies an unknown sample by finding the $K$ closest\r
  training points in feature space.\r
- K-Means Clustering: Assigns data points to the nearest centroid using\r
  $\\arg\\min_k ||x - \\mu_k||_2$.\r
- Recommender Systems: Computes feature vector similarity between products/movies.\r
\r
2. WHY USE SCIPY.SPATIAL OVER MANUAL LOOPS?\r
--------------------------------------------------------------------------------\r
- Writing nested Python loops to compute pairwise distances between $M$ test samples\r
  and $N$ training samples scales at $O(M \\times N \\times D)$ and is painfully slow in pure Python.\r
- \`scipy.spatial.distance.cdist(X_test, X_train, metric='euclidean')\` compiles this\r
  matrix computation directly into vectorized C routines with hardware SIMD instructions.\r
\r
3. BEST PRACTICE NOTE:\r
--------------------------------------------------------------------------------\r
- Always standardize features with \`scipy.stats.zscore\` before computing Euclidean distance,\r
  otherwise features with large numerical ranges (e.g. Salary ₹50,000) will completely\r
  dominate features with smaller ranges (e.g. Age 25).\r
================================================================================\r
`,h=[{id:1,question:"Why is feature scaling essential prior to computing Euclidean distances in KNN or K-Means clustering?",options:["To prevent Python memory overflow","Because features with large raw numerical scales will disproportionately dominate the Euclidean distance calculation, ignoring features with smaller scales","Because Euclidean distance only accepts integers","To convert 2D arrays to 1D"],correctAnswer:1,explanation:"Euclidean distance squares coordinate differences. A difference of ₹5,000 in salary completely overwhelms a difference of 5 years in age unless scaled."},{id:2,question:"What function in `scipy.spatial.distance` calculates the pairwise distance between two separate matrices X_test and X_train in a single C-speed vector call?",options:["distance.cdist()","distance.pdist()","distance.euclid_all()","distance.cross_table()"],correctAnswer:0,explanation:"`cdist(XA, XB, metric='euclidean')` computes the distance matrix between all pairs of rows in XA and XB."},{id:3,question:"How does K-Means clustering utilize `scipy.spatial.distance.cdist` during the inference assignment phase?",options:["It deletes the cluster labels","It computes the distance between each new observation and all cluster centroids, assigning the sample to the minimum distance centroid via `np.argmin()`","It randomly picks a centroid without computing distances","It calculates p-values for all clusters"],correctAnswer:1,explanation:"`np.argmin(cdist(new_samples, centroids), axis=1)` assigns each sample to its closest centroid."}],T=[{id:1,name:"Susmita",x:2,y:3,label:0},{id:2,name:"Sachin",x:3,y:4,label:0},{id:3,name:"Abhronila",x:4,y:3,label:0},{id:4,name:"Debangshu",x:7,y:8,label:1},{id:5,name:"Swadeep",x:8,y:9,label:1},{id:6,name:"Mahima",x:9,y:8,label:1},{id:7,name:"Tuhina",x:8,y:7,label:1}];function U(){const[o,D]=i.useState("interactive"),[u,P]=i.useState(0),[c,g]=i.useState(!1),[r,f]=i.useState({x:6,y:6}),[m,I]=i.useState(3),[y,M]=i.useState({}),[l,K]=i.useState(!1),b=[{name:"01_worked_example_knn_spatial.py",code:O},{name:"02_matrix_cdist_recommendation.py",code:W},{name:"03_cluster_centroid_distance.py",code:z}],N=s=>{navigator.clipboard.writeText(s),g(!0),setTimeout(()=>g(!1),2e3)},L=(s,t)=>{l||M(n=>({...n,[s]:t}))},B=()=>{let s=0;return h.forEach(t=>{y[t.id]===t.correctAnswer&&s++}),s},x=T.map(s=>{const t=Math.sqrt(Math.pow(s.x-r.x,2)+Math.pow(s.y-r.y,2));return{...s,dist:t}}).sort((s,t)=>s.dist-t.dist).slice(0,m),w=x.filter(s=>s.label===0).length,j=x.filter(s=>s.label===1).length,v=j>=w?1:0,a=s=>25+s*25;return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(C,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 12"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Worked Example 2: Euclidean Distance with scipy.spatial"}),e.jsxs("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:["Implement a complete K-Nearest Neighbors spatial classifier and recommendation engine using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"scipy.spatial.distance.euclidean"})," and ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"cdist()"}),"."]})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"KNN Spatial Classifier Studio",icon:$},{id:"code",label:"Python Code Lab",icon:V},{id:"notes",label:"Revision Notes",icon:S},{id:"quiz",label:"Knowledge Check",icon:_}].map(s=>{const t=s.icon,n=o===s.id;return e.jsxs("button",{onClick:()=>D(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${n?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(t,{className:"w-4 h-4"}),s.label]},s.id)})})]}),o==="interactive"&&e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm border-b border-slate-800 pb-3",children:[e.jsx(H,{className:"w-4 h-4"}),e.jsx("span",{children:"Test Query Coordinates"})]}),e.jsxs("div",{className:"space-y-4 text-xs",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-slate-300 mb-1",children:[e.jsx("span",{children:"Feature 1 (Study Hours/wk):"}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:r.x})]}),e.jsx("input",{type:"range",min:"1",max:"10",value:r.x,onChange:s=>f({...r,x:Number(s.target.value)}),className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-slate-300 mb-1",children:[e.jsx("span",{children:"Feature 2 (Coding Labs Count):"}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:r.y})]}),e.jsx("input",{type:"range",min:"1",max:"10",value:r.y,onChange:s=>f({...r,y:Number(s.target.value)}),className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-slate-300 mb-1",children:[e.jsx("span",{children:"Nearest Neighbors Count (K):"}),e.jsxs("span",{className:"font-mono text-cyan-400 font-bold",children:["K = ",m]})]}),e.jsx("div",{className:"flex gap-2",children:[1,3,5].map(s=>e.jsxs("button",{onClick:()=>I(s),className:`flex-1 py-1.5 rounded-lg font-mono font-bold transition-all ${m===s?"bg-emerald-600 text-white":"bg-slate-950 text-slate-400"}`,children:["K = ",s]},s))})]})]}),e.jsxs("div",{className:`p-4 rounded-xl border space-y-1 ${v===1?"bg-cyan-950/40 border-cyan-500":"bg-rose-950/40 border-rose-500"}`,children:[e.jsx("div",{className:"text-[10px] uppercase font-bold tracking-wider text-slate-400",children:"Majority Vote Prediction"}),e.jsx("div",{className:"text-sm font-bold text-white",children:v===1?"Class 1: High Distinction":"Class 0: Needs Support"}),e.jsxs("div",{className:"text-xs text-slate-300",children:["Votes: ",j," (Distinction) vs ",w," (Support)"]})]})]}),e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(C,{className:"w-4 h-4"}),e.jsx("span",{children:"2D Spatial Feature Space & Euclidean Neighbor Links"})]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Query Point: (",r.x,", ",r.y,")"]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 300 300",className:"w-64 h-64 overflow-visible",children:[[0,2,4,6,8,10].map(s=>e.jsxs("g",{children:[e.jsx("line",{x1:a(s),y1:a(0),x2:a(s),y2:a(10),stroke:"#1e293b"}),e.jsx("line",{x1:a(0),y1:a(s),x2:a(10),y2:a(s),stroke:"#1e293b"})]},s)),x.map(s=>e.jsx("line",{x1:a(r.x),y1:a(10-r.y),x2:a(s.x),y2:a(10-s.y),stroke:"#10b981",strokeWidth:"1.5",strokeDasharray:"3 3"},s.id)),T.map(s=>e.jsx("circle",{cx:a(s.x),cy:a(10-s.y),r:"6",fill:s.label===1?"#38bdf8":"#f43f5e"},s.id)),e.jsx("circle",{cx:a(r.x),cy:a(10-r.y),r:"8",fill:"#fbbf24",stroke:"#ffffff",strokeWidth:"2"})]})}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-300",children:["Top ",m," Nearest Neighbors (Ranked):"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:x.map((s,t)=>e.jsxs("div",{className:"bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs space-y-0.5",children:[e.jsxs("div",{className:"flex justify-between font-bold text-white",children:[e.jsxs("span",{children:["#",t+1," ",s.name]}),e.jsx("span",{className:"font-mono text-emerald-400",children:s.dist.toFixed(2)})]}),e.jsx("div",{className:"text-[11px] text-slate-400",children:s.label===1?"🟦 Class 1 (Distinction)":"🟥 Class 0 (Support)"})]},s.id))})]})]})]}),o==="code"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:b.map((s,t)=>e.jsx("button",{onClick:()=>P(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${u===t?"bg-emerald-600 text-white shadow-md shadow-emerald-600/30":"bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800"}`,children:s.name},t))}),e.jsxs("button",{onClick:()=>N(b[u].code),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[c?e.jsx(k,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(A,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:c?"Copied!":"Copy Code"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300",children:e.jsx("pre",{children:b[u].code})})]}),o==="notes"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(S,{className:"w-4 h-4"}),e.jsx("span",{children:"Classroom Printable Notes"})]}),e.jsxs("button",{onClick:()=>N(E),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs transition-colors",children:[c?e.jsx(k,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(A,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:c?"Copied!":"Copy Notes"})]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800/80 rounded-xl p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:E})]}),o==="quiz"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{children:"Concept Validation & Knowledge Check"})]}),l&&e.jsxs("div",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-semibold",children:["Score: ",B()," / ",h.length]})]}),e.jsx("div",{className:"space-y-6",children:h.map((s,t)=>{const n=y[s.id];return e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white",children:[t+1,". ",s.question]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.options.map((R,d)=>{let p="bg-slate-900 hover:bg-slate-800/80 border-slate-800 text-slate-300";return n===d&&(p="bg-emerald-950 border-emerald-500 text-white"),l&&(d===s.correctAnswer?p="bg-emerald-900/80 border-emerald-500 text-white font-semibold":n===d&&n!==s.correctAnswer&&(p="bg-rose-950 border-rose-500 text-rose-200")),e.jsx("button",{onClick:()=>L(s.id,d),className:`p-3 rounded-lg border text-left text-xs transition-all ${p}`,children:R},d)})}),l&&e.jsxs("div",{className:"mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-semibold text-emerald-400",children:"Explanation: "}),e.jsx("span",{children:s.explanation})]})]},s.id)})}),e.jsx("div",{className:"flex justify-end pt-4 border-t border-slate-800",children:e.jsx("button",{onClick:()=>K(!l),className:"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-600/30",children:l?"Reset Quiz":"Submit Answers"})})]})]})})}export{U as default};
