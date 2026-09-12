import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{aY as Q,S as H,k as G,B as T,aa as I,aM as Y,cj as V,cl as U,f as j,g as R,ad as J}from"./vendor-icons-ri6cs58t.js";const Z=`"""\r
Topic 9: KNeighborsClassifier\r
Script 1: KNN Classification Basics and Neighbor Inspection\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.neighbors import KNeighborsClassifier\r
\r
# Feature matrix: [Attendance Rate %, Test Score]\r
X_train = np.array([\r
    [50, 45],\r
    [55, 50],\r
    [65, 55],\r
    [70, 75],\r
    [85, 80],\r
    [90, 85],\r
    [95, 90]\r
])\r
# Labels: 0 (Academic Alert) / 1 (Good Standing)\r
y_train = np.array([0, 0, 0, 1, 1, 1, 1])\r
\r
# Initialize KNN Classifier with K=3 neighbors\r
knn = KNeighborsClassifier(n_neighbors=3, metric='minkowski', p=2)\r
knn.fit(X_train, y_train)\r
\r
# Query a new student: [Attendance: 68%, Score: 60]\r
X_new = np.array([[68, 60]])\r
\r
# Predict class and probability\r
pred_class = knn.predict(X_new)\r
pred_prob = knn.predict_proba(X_new)\r
\r
# Find exact 3 nearest neighbors and distances\r
distances, indices = knn.kneighbors(X_new)\r
\r
print("--- KNN Classification (K=3) ---")\r
print(f"Query Sample: {X_new[0]}")\r
print(f"Predicted Class: {pred_class[0]} ({'Good Standing' if pred_class[0]==1 else 'Academic Alert'})")\r
print(f"Class Probabilities: P(0)={pred_prob[0][0]:.2f}, P(1)={pred_prob[0][1]:.2f}")\r
\r
print("\\n--- 3 Nearest Neighbors Identified ---")\r
for rank, (dist, idx) in enumerate(zip(distances[0], indices[0]), 1):\r
    neighbor_pt = X_train[idx]\r
    neighbor_label = y_train[idx]\r
    print(f"Rank {rank}: Sample #{idx} at {neighbor_pt}, Class={neighbor_label}, Distance={dist:.3f}")\r
`,ee=`"""\r
Topic 9: KNeighborsClassifier\r
Script 2: Finding Optimal K (Elbow Method on Error Rate)\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.datasets import make_classification\r
from sklearn.model_selection import train_test_split\r
from sklearn.neighbors import KNeighborsClassifier\r
from sklearn.metrics import accuracy_score\r
\r
# Generate synthetic 2-class dataset\r
X, y = make_classification(\r
    n_samples=200, n_features=2, n_informative=2, n_redundant=0,\r
    n_clusters_per_class=1, random_state=42\r
)\r
\r
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\r
\r
error_rates = []\r
k_values = range(1, 20, 2) # Odd numbers to prevent ties\r
\r
print("--- Testing Different K Values ---")\r
for k in k_values:\r
    model = KNeighborsClassifier(n_neighbors=k, weights='uniform')\r
    model.fit(X_train, y_train)\r
    y_pred = model.predict(X_test)\r
    err = 1.0 - accuracy_score(y_test, y_pred)\r
    error_rates.append(err)\r
    print(f"K = {k:2d} | Test Error Rate = {err:.4f} | Accuracy = {(1-err)*100:.1f}%")\r
\r
best_k = list(k_values)[np.argmin(error_rates)]\r
print(f"\\nOptimal K identified: K = {best_k} (Lowest Error: {min(error_rates):.4f})")\r
`,se=`"""\r
Topic 9: KNeighborsClassifier\r
Script 3: Impact of Feature Scaling on KNN Distance\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.neighbors import KNeighborsClassifier\r
from sklearn.preprocessing import StandardScaler\r
from sklearn.pipeline import make_pipeline\r
\r
# Features: [Age (years 20-60), Annual Income (INR 25,000 - 150,000)]\r
X = np.array([\r
    [22, 28000],\r
    [25, 32000],\r
    [45, 110000],\r
    [50, 130000]\r
])\r
y = np.array([0, 0, 1, 1])\r
\r
# Query point: Age 48, Income 30,000 (Low income senior)\r
query = np.array([[48, 30000]])\r
\r
# 1. Unscaled KNN\r
knn_raw = KNeighborsClassifier(n_neighbors=1)\r
knn_raw.fit(X, y)\r
pred_raw = knn_raw.predict(query)[0]\r
_, idx_raw = knn_raw.kneighbors(query)\r
\r
print("--- 1. KNN Without Scaling ---")\r
print(f"Nearest neighbor chosen: Sample #{idx_raw[0][0]} ({X[idx_raw[0][0]]})")\r
print(f"Predicted Class: {pred_raw}")\r
print("Problem: Income dominates the Euclidean distance entirely (differences of ₹10,000s dwarfs age difference of 25 years)!")\r
\r
# 2. Scaled KNN Pipeline\r
knn_scaled_pipe = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=1))\r
knn_scaled_pipe.fit(X, y)\r
pred_scaled = knn_scaled_pipe.predict(query)[0]\r
\r
print("\\n--- 2. KNN With StandardScaler Pipeline ---")\r
print(f"Predicted Class with Scaling: {pred_scaled}")\r
print("Result: Both Age and Income contribute equally to distance!")\r
`,P=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 9 - KNEIGHBORSCLASSIFIER\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. WHAT IS K-NEAREST NEIGHBORS (KNN)?\r
--------------------------------------------------------------------------------\r
KNN is an instance-based, non-parametric, "lazy learning" algorithm:\r
- "Lazy" because it performs NO heavy computation during \`.fit(X, y)\` — it simply memorizes the training data points in memory (or creates a BallTree / KDTree).\r
- During \`.predict(X_new)\`, it computes the distance between $X_{new}$ and every stored training sample, identifies the $K$ closest points, and performs majority voting.\r
\r
2. DISTANCE METRICS (THE GEOMETRIC HEART OF KNN)\r
--------------------------------------------------------------------------------\r
A. Euclidean Distance ($p=2$, default):\r
   $d(p, q) = \\sqrt{\\sum (p_i - q_i)^2}$\r
   - Straight-line geometric distance.\r
\r
B. Manhattan Distance ($p=1$):\r
   $d(p, q) = \\sum |p_i - q_i|$\r
   - Grid / city-block distance.\r
\r
C. Minkowski Distance (Generalization):\r
   $d(p, q) = (\\sum |p_i - q_i|^p)^{1/p}$\r
   - Parameter \`p=1\` -> Manhattan, \`p=2\` -> Euclidean.\r
\r
3. KEY HYPERPARAMETERS\r
--------------------------------------------------------------------------------\r
- \`n_neighbors\` ($K$):\r
  * Small $K$ (e.g., $K=1$): Highly complex, irregular decision boundary; sensitive to noise and prone to overfitting.\r
  * Large $K$ (e.g., $K=50$): Very smooth boundary; risk of underfitting.\r
  * Rule of thumb: Choose an ODD number for binary classification to prevent voting ties.\r
- \`weights\`:\r
  * \`'uniform'\`: All $K$ neighbors cast equal votes.\r
  * \`'distance'\`: Closer neighbors get higher weight ($w_i = 1 / d_i$).\r
- \`metric\`: \`'minkowski'\`, \`'euclidean'\`, \`'manhattan'\`, or \`'cosine'\`.\r
- \`algorithm\`: \`'auto'\`, \`'ball_tree'\`, \`'kd_tree'\`, \`'brute'\`.\r
\r
4. WHY FEATURE SCALING (StandardScaler) IS ABSOLUTELY ESSENTIAL\r
--------------------------------------------------------------------------------\r
Because KNN relies on Euclidean distance $\\sqrt{\\Delta x_1^2 + \\Delta x_2^2}$:\r
If Feature 1 is Age (range 20 to 60) and Feature 2 is Salary (range 20,000 to 200,000):\r
A difference of ₹5,000 in salary creates $5000^2 = 25,000,000$ in squared distance, completely drowning out any Age difference ($40^2 = 1,600$).\r
ALWAYS standardize features before running KNN!\r
\r
5. BARRACKPORE LAB SUMMARY (Sukanta Hui)\r
--------------------------------------------------------------------------------\r
"KNN has zero training time, but high query prediction time and large RAM consumption for millions of rows. It is intuitive, powerful, and requires careful feature scaling."\r
================================================================================\r
`,v=[{id:1,question:"Why is K-Nearest Neighbors often classified as a 'Lazy Learner'?",options:["Because it takes days to complete the .fit() step","Because it does not derive an explicit mathematical model during .fit(), postponing computation until .predict() is called","Because it only runs on single-threaded CPUs","Because it randomly skips rows in the dataset"],correctAnswer:1,explanation:"KNN is a lazy learning algorithm because it merely stores training instances during the fit phase; all distance calculations and majority voting occur at prediction time."},{id:2,question:"What is the primary risk of selecting an extremely small value of K (e.g., K = 1) in `KNeighborsClassifier`?",options:["Severe underfitting and overly smooth boundaries","High sensitivity to noise and individual outliers leading to severe overfitting","Division by zero errors in the distance calculation","Memory leak during model initialization"],correctAnswer:1,explanation:"At K=1, the classifier is influenced by every single noisy or mislabeled sample, resulting in jagged, hyper-complex decision boundaries and high variance (overfitting)."},{id:3,question:"Why is feature scaling (e.g. `StandardScaler`) critical before fitting a KNN model?",options:["Because unscaled features with large absolute numerical values will overwhelmingly dominate the Euclidean distance calculation","Because KNN only accepts float numbers between 0 and 1","Because Scikit-learn throws a ValueError if features are unscaled","Because scaling speeds up GPU matrix multiplication"],correctAnswer:0,explanation:"KNN measures geometric distance. Features with large numerical spans (e.g. Salary in thousands) produce massive squared differences that completely overshadow features with small spans (e.g. Age or GPA)."},{id:4,question:"In `KNeighborsClassifier`, which parameter controls whether closer neighbors have higher voting influence than distant ones?",options:["metric='euclidean'","weights='distance'","algorithm='ball_tree'","leaf_size=30"],correctAnswer:1,explanation:"Setting `weights='distance'` weights votes by the inverse of their distance to the query point, giving closer neighbors significantly more voting authority than farther ones."}],z=[{id:1,name:"Debangshu",x:20,y:30,label:0},{id:2,name:"Susmita",x:35,y:45,label:0},{id:3,name:"Swadeep",x:25,y:55,label:0},{id:4,name:"Tuhina",x:45,y:35,label:0},{id:5,name:"Sachin",x:70,y:75,label:1},{id:6,name:"Mahima",x:80,y:85,label:1},{id:7,name:"Abhronila",x:65,y:90,label:1},{id:8,name:"Rohan",x:85,y:65,label:1},{id:9,name:"Priya",x:50,y:60,label:0},{id:10,name:"Sneha",x:60,y:50,label:1}];function ae(){const[a,b]=r.useState("interactive"),[p,B]=r.useState(0),[w,_]=r.useState(!1),[o,X]=r.useState(3),[y,k]=r.useState("uniform"),[n,q]=r.useState(55),[i,M]=r.useState(58),[d,S]=r.useState({}),[l,C]=r.useState(!1),c=[{name:"01_knn_classification_basics.py",code:Z},{name:"02_finding_optimal_k_and_distance_metrics.py",code:ee},{name:"03_scaling_impact_on_knn.py",code:se}],K=s=>{navigator.clipboard.writeText(s),_(!0),setTimeout(()=>_(!1),2e3)},D=(s,t)=>{l||S(m=>({...m,[s]:t}))},F=()=>{let s=0;return v.forEach(t=>{d[t.id]===t.correctAnswer&&s++}),s},A=z.map(s=>{const t=Math.sqrt(Math.pow(s.x-n,2)+Math.pow(s.y-i,2));return{...s,dist:t}});A.sort((s,t)=>s.dist-t.dist);const h=A.slice(0,o);let u=0,g=0;h.forEach(s=>{const t=y==="distance"?1/(s.dist||.001):1;s.label===0?u+=t:g+=t});const f=u+g,O=f>0?u/f*100:50,L=f>0?g/f*100:50,$=g>=u?1:0;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-amber-500/20 rounded-xl text-amber-400 border border-amber-500/30",children:e.jsx(Q,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20",children:"Topic 9 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.neighbors.KNeighborsClassifier"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"K-Nearest Neighbors (KNN) Classification"})]})]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:["Explore instance-based lazy learning in 2D space. Interactively adjust ",e.jsx("code",{className:"text-amber-300 font-mono",children:"n_neighbors (K)"}),", query point coordinates, distance weighting, and visualize voting dynamics in real time."]})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>b("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="interactive"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(H,{className:"w-4 h-4"}),"KNN Live Studio"]}),e.jsxs("button",{onClick:()=>b("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="code"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(G,{className:"w-4 h-4"}),"Python Code Lab (",c.length,")"]}),e.jsxs("button",{onClick:()=>b("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="notes"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(T,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>b("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${a==="quiz"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(I,{className:"w-4 h-4"}),"Knowledge Check"]})]}),a==="interactive"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(Y,{className:"w-4 h-4 text-amber-400"}),"KNN Hyperparameters & Query"]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-2",children:[e.jsx("span",{children:"n_neighbors (K):"}),e.jsxs("span",{className:"font-mono text-amber-300 font-bold text-sm",children:["K = ",o]})]}),e.jsx("div",{className:"flex gap-2",children:[1,3,5,7,9].map(s=>e.jsx("button",{onClick:()=>X(s),className:`flex-1 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${o===s?"bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:s},s))})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-xs text-slate-300 mb-2",children:"weights:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("button",{onClick:()=>k("uniform"),className:`py-2 px-3 rounded-lg text-xs font-medium border text-left ${y==="uniform"?"bg-amber-500/15 border-amber-500/60 text-amber-200":"bg-slate-950 border-slate-800 text-slate-400"}`,children:[e.jsx("div",{className:"font-semibold",children:"'uniform'"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Equal vote per neighbor"})]}),e.jsxs("button",{onClick:()=>k("distance"),className:`py-2 px-3 rounded-lg text-xs font-medium border text-left ${y==="distance"?"bg-amber-500/15 border-amber-500/60 text-amber-200":"bg-slate-950 border-slate-800 text-slate-400"}`,children:[e.jsx("div",{className:"font-semibold",children:"'distance'"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Weight = 1 / distance"})]})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-lg border border-slate-800 space-y-3 mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-slate-200",children:[e.jsx(V,{className:"w-3.5 h-3.5 text-amber-400"}),"Query Sample Position (X_new)"]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[e.jsx("span",{children:"Feature X (Attendance %):"}),e.jsx("span",{className:"font-mono text-amber-300 font-bold",children:n})]}),e.jsx("input",{type:"range",min:"10",max:"90",value:n,onChange:s=>q(Number(s.target.value)),className:"w-full accent-amber-400 cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[e.jsx("span",{children:"Feature Y (Exam Marks):"}),e.jsx("span",{className:"font-mono text-amber-300 font-bold",children:i})]}),e.jsx("input",{type:"range",min:"20",max:"90",value:i,onChange:s=>M(Number(s.target.value)),className:"w-full accent-amber-400 cursor-pointer"})]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Predicted Class:"}),e.jsx("span",{className:`text-xs px-2.5 py-1 rounded-full font-bold font-mono ${$===1?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-sky-500/20 text-sky-300 border border-sky-500/30"}`,children:$===1?"Class 1 (Good Standing)":"Class 0 (Academic Alert)"})]}),e.jsxs("div",{className:"space-y-1.5 font-mono text-xs",children:[e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsx("span",{children:"P(Class 0 / Blue):"}),e.jsxs("span",{className:"text-sky-400 font-bold",children:[O.toFixed(1),"%"]})]}),e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsx("span",{children:"P(Class 1 / Emerald):"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:[L.toFixed(1),"%"]})]})]})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4",children:[e.jsxs("h4",{className:"text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2",children:["Top ",o," Nearest Neighbors"]}),e.jsx("div",{className:"space-y-1.5 font-mono text-xs",children:h.map((s,t)=>e.jsxs("div",{className:"p-2 bg-slate-950 rounded border border-slate-800/80 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-slate-500 text-[10px]",children:["#",t+1]}),e.jsx("span",{className:"text-slate-200 font-sans font-medium",children:s.name}),e.jsxs("span",{className:`text-[10px] px-1.5 py-0.2 rounded ${s.label===1?"bg-emerald-500/20 text-emerald-300":"bg-sky-500/20 text-sky-300"}`,children:["C",s.label]})]}),e.jsxs("span",{className:"text-amber-300 font-semibold",children:["d = ",s.dist.toFixed(2)]})]},s.id))})]})]}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(U,{className:"w-4 h-4 text-amber-400"}),"2D Geometric Distance Canvas"]}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"● Class 0 (Sky) | ● Class 1 (Emerald) | ★ Query (Amber)"})]}),e.jsx("div",{className:"bg-slate-950 rounded-lg p-4 border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-[320px]",children:[e.jsx("line",{x1:"10",y1:"10",x2:"10",y2:"90",stroke:"#1e293b",strokeWidth:"0.5"}),e.jsx("line",{x1:"10",y1:"90",x2:"90",y2:"90",stroke:"#1e293b",strokeWidth:"0.5"}),h.map(s=>e.jsx("line",{x1:n,y1:100-i,x2:s.x,y2:100-s.y,stroke:"#f59e0b",strokeWidth:"0.8",strokeDasharray:"1.5 1.5"},s.id)),z.map(s=>{const t=h.some(m=>m.id===s.id);return e.jsxs("g",{children:[e.jsx("circle",{cx:s.x,cy:100-s.y,r:t?2.5:1.8,fill:s.label===1?"#10b981":"#0284c7",stroke:t?"#f59e0b":"none",strokeWidth:t?.8:0}),e.jsx("text",{x:s.x+2,y:100-s.y+1,fill:"#94a3b8",fontSize:"2.5",fontFamily:"monospace",children:s.name})]},s.id)}),e.jsxs("g",{children:[e.jsx("circle",{cx:n,cy:100-i,r:"3",fill:"#f59e0b",stroke:"#fff",strokeWidth:"0.8"}),e.jsxs("text",{x:n+3,y:100-i+1,fill:"#fde68a",fontSize:"3.2",fontWeight:"bold",fontFamily:"monospace",children:["Query (",n,", ",i,")"]})]})]})}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-2 text-center",children:["Dashed gold lines highlight the ",o," nearest neighbors participating in the classification vote."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{className:"text-white block mb-1",children:"Pedagogical Insight:"}),"Notice how moving the query point closer to the cluster of Susmita & Debangshu immediately flips the majority vote to Class 0, while moving near Sachin & Mahima flips the prediction to Class 1. No parametric equation is learned; decisions are made on-the-fly geometrically!"]})]})]})}),a==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:c.map((s,t)=>e.jsx("button",{onClick:()=>B(t),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${p===t?"bg-amber-600 text-white shadow-md shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:s.name},t))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:c[p].name}),e.jsx("button",{onClick:()=>K(c[p].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors",children:w?e.jsxs(e.Fragment,{children:[e.jsx(j,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(R,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:c[p].code})]})]}),a==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(T,{className:"w-5 h-5 text-amber-400"}),"Classroom Revision Notes: KNeighborsClassifier"]}),e.jsxs("button",{onClick:()=>K(P),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400",children:[w?e.jsx(j,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(R,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:P})]}),a==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(I,{className:"w-5 h-5 text-amber-400"}),"Topic 9 Quiz: KNN Algorithm"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Assess your understanding of lazy learners, distance weighting, and scaling requirements."})]}),l&&e.jsxs("div",{className:"px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-amber-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[F()," / ",v.length]})]})]}),e.jsx("div",{className:"space-y-6",children:v.map((s,t)=>{d[s.id];const m=d[s.id]===s.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono mt-0.5",children:["Q",t+1]}),e.jsx("span",{children:s.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:s.options.map((W,x)=>{const E=d[s.id]===x;let N="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return l?x===s.correctAnswer?N="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":E&&!m&&(N="bg-rose-500/20 border-rose-500/50 text-rose-200"):E&&(N="bg-amber-500/20 border-amber-500/50 text-amber-200"),e.jsxs("button",{onClick:()=>D(s.id,x),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${N}`,children:[e.jsx("span",{children:W}),l&&x===s.correctAnswer&&e.jsx(j,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},x)})}),l&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-amber-300 block mb-1",children:"Explanation:"}),s.explanation]})]},s.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:l?e.jsxs("button",{onClick:()=>{S({}),C(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(J,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>C(!0),disabled:Object.keys(d).length===0,className:"px-6 py-2.5 bg-amber-600 hover:bg-amber-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-amber-600/20",children:"Submit Answers"})})]})})]})]})}export{ae as default};
