import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{aD as W,S as z,k as O,B as C,aa as K,aM as B,cw as P,cl as F,f as g,g as I,ad as D}from"./vendor-icons-ri6cs58t.js";const H=`"""\r
Topic 12: Clustering\r
Script 1: KMeans Clustering Basics & Centroid Inspection\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.cluster import KMeans\r
\r
# 2D Customer / Student data: [Monthly Spend / Study Hours, Engagement Score]\r
X = np.array([\r
    [10.0, 20.0],\r
    [12.0, 24.0],\r
    [15.0, 18.0],\r
    [80.0, 85.0],\r
    [85.0, 90.0],\r
    [90.0, 78.0],\r
    [50.0, 50.0],\r
    [52.0, 48.0],\r
    [48.0, 54.0]\r
])\r
\r
# Instantiate KMeans with K=3 clusters and k-means++ initialization\r
kmeans = KMeans(n_clusters=3, init='k-means++', n_init=10, random_state=42)\r
cluster_labels = kmeans.fit_predict(X)\r
\r
print("--- KMeans Clustering Output ---")\r
print("Cluster Assignments (labels_):", kmeans.labels_)\r
print("Cluster Centroids (cluster_centers_):\\n", np.round(kmeans.cluster_centers_, 2))\r
print(f"Inertia (Within-Cluster Sum of Squares): {kmeans.inertia_:.2f}")\r
print(f"Iterations to converge: {kmeans.n_iter_}")\r
\r
# Assign new unseen test points to nearest centroid\r
X_new = np.array([[11.0, 22.0], [88.0, 82.0]])\r
new_preds = kmeans.predict(X_new)\r
print("\\n--- Predictions for New Samples ---")\r
for pt, c in zip(X_new, new_preds):\r
    print(f"Sample {pt} -> Assigned to Cluster {c}")\r
`,L=`"""\r
Topic 12: Clustering\r
Script 2: Finding Optimal K via the Elbow Method (Inertia Analysis)\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.datasets import make_blobs\r
from sklearn.cluster import KMeans\r
\r
# Generate synthetic dataset with 4 natural clusters\r
X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=42)\r
\r
inertias = []\r
k_range = range(1, 9)\r
\r
print("--- Calculating Inertia across K = 1 to 8 ---")\r
for k in k_range:\r
    km = KMeans(n_clusters=k, init='k-means++', n_init=10, random_state=42)\r
    km.fit(X)\r
    inertias.append(km.inertia_)\r
    print(f"K = {k} | Inertia (WCSS) = {km.inertia_:10.2f}")\r
\r
# Calculate rate of inertia drop\r
print("\\n--- Inertia Drops (Look for the Elbow bend) ---")\r
for i in range(1, len(inertias)):\r
    drop = inertias[i-1] - inertias[i]\r
    print(f"From K={i} to K={i+1}: Inertia Drop = {drop:10.2f}")\r
print("Notice how the steep drop slows dramatically after K=4 (the true cluster count)!")\r
`,U=`"""\r
Topic 12: Clustering\r
Script 3: Feature Scaling & k-means++ vs Random Centroid Initialization\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
from sklearn.cluster import KMeans\r
from sklearn.preprocessing import StandardScaler\r
from sklearn.pipeline import make_pipeline\r
\r
# Features with vast scale mismatch: [Age in years (20-60), Annual Income in INR (20,000-200,000)]\r
np.random.seed(42)\r
ages = np.random.randint(20, 60, size=(100, 1))\r
income = np.random.randint(20000, 200000, size=(100, 1))\r
X_unscaled = np.hstack([ages, income])\r
\r
# 1. Unscaled KMeans (Income will completely dominate centroid locations)\r
km_unscaled = KMeans(n_clusters=3, random_state=42, n_init=10).fit(X_unscaled)\r
print("--- 1. Unscaled Centroids (Income completely dominates) ---")\r
print(np.round(km_unscaled.cluster_centers_, 1))\r
\r
# 2. Scaled KMeans with StandardScaler Pipeline\r
pipe = make_pipeline(StandardScaler(), KMeans(n_clusters=3, random_state=42, n_init=10))\r
pipe.fit(X_unscaled)\r
\r
scaler_step = pipe.named_steps['standardscaler']\r
km_step = pipe.named_steps['kmeans']\r
\r
print("\\n--- 2. Scaled Centroids (Transformed back to real units) ---")\r
real_centers = scaler_step.inverse_transform(km_step.cluster_centers_)\r
print("Ages & Incomes properly balanced:\\n", np.round(real_centers, 1))\r
`,A=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 12 - K-MEANS CLUSTERING\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. WHAT IS K-MEANS CLUSTERING?\r
--------------------------------------------------------------------------------\r
K-Means is an unsupervised clustering algorithm that partitions $N$ unlabeled samples into $K$ distinct, non-overlapping subgroups (clusters).\r
Each cluster is defined by its geometric centroid (mean of points in that cluster).\r
\r
THE 4-STEP CONVERGENCE LOOP:\r
1. Initialization: Choose $K$ initial centroid positions.\r
2. Assignment Step: Assign each sample $x_i$ to its nearest centroid based on squared Euclidean distance.\r
3. Update Step: Recompute centroid coordinates as the arithmetic mean of all points assigned to that cluster.\r
4. Repeat Steps 2 & 3 until centroids stabilize (no changes) or \`max_iter\` is reached.\r
\r
2. INERTIA / WITHIN-CLUSTER SUM OF SQUARES (WCSS)\r
--------------------------------------------------------------------------------\r
Formula:\r
    $\\text{Inertia} = \\sum_{j=1}^K \\sum_{x_i \\in C_j} ||x_i - \\mu_j||^2$\r
- Inertia measures the tightness / compactness of clusters (lower is tighter).\r
- Accessible via the learned attribute: \`kmeans.inertia_\`.\r
- As $K$ increases, Inertia always decreases (if $K=N$, Inertia = 0).\r
\r
3. THE ELBOW METHOD (FINDING OPTIMAL K)\r
--------------------------------------------------------------------------------\r
Plot Inertia vs. $K$ ($K=1, 2, 3, ..., 10$).\r
- Look for the sharp "elbow bend" where the rate of decrease abruptly flattens.\r
- The elbow point represents the optimal trade-off between compactness and model complexity.\r
\r
4. KEY HYPERPARAMETERS & ATTRIBUTES\r
--------------------------------------------------------------------------------\r
Hyperparameters:\r
- \`n_clusters\`: Number of clusters $K$ (e.g. 3, 5).\r
- \`init='k-means++'\` (Default): Smart initialization algorithm that spaces out starting centroids far apart to avoid sub-optimal local minima.\r
- \`n_init=10\`: Number of independent runs with different centroid seeds; returns the best run with the lowest Inertia.\r
- \`max_iter=300\`: Maximum iterations per run.\r
\r
Learned Attributes:\r
- \`cluster_centers_\`: Array of shape (n_clusters, n_features) holding final centroid coordinates.\r
- \`labels_\`: Integer cluster assignments (0 to K-1) for each training sample.\r
- \`inertia_\`: Final sum of squared distances to closest centroids.\r
- \`n_iter_\`: Number of iterations taken to converge.\r
\r
5. BARRACKPORE LAB WARNING (Sukanta Hui)\r
--------------------------------------------------------------------------------\r
"K-Means is distance-based! Always run \`StandardScaler\` first. Without scaling, a feature with values in thousands (like Salary) will completely overpower features with smaller ranges (like Age)!"\r
================================================================================\r
`,y=[{id:1,question:"What does the `inertia_` attribute measure in Scikit-learn's `KMeans` algorithm?",options:["The elapsed training execution time in milliseconds","The Within-Cluster Sum of Squares (sum of squared distances between each sample and its assigned centroid)","The number of CPU threads utilized during convergence","The classification accuracy compared to ground truth labels"],correctAnswer:1,explanation:"`inertia_` is the Within-Cluster Sum of Squares (WCSS), quantifying how internally coherent and tightly grouped the clusters are. Lower inertia indicates tighter clusters."},{id:2,question:"What is the primary advantage of the default `init='k-means++'` over purely random centroid initialization?",options:["It speeds up execution by skipping the distance calculation step","It selects initial centroids that are distant from each other with high probability, significantly reducing convergence to bad local minima","It automatically estimates the optimal number of clusters K","It allows K-Means to cluster non-numeric string data"],correctAnswer:1,explanation:"`k-means++` smartly seeds initial cluster centers proportional to their squared distance from existing centers, ensuring well-spread starting positions and preventing poor local optima."},{id:3,question:"How is the optimal number of clusters K identified using the Elbow Method?",options:["By selecting the K value where inertia reaches exactly 0.0","By identifying the inflection point on the Inertia vs K plot where the rate of decrease abruptly decelerates/flattens","By choosing the maximum possible K value supported by RAM","By finding where the silhouette score becomes negative"],correctAnswer:1,explanation:"The elbow point on an Inertia vs. K curve marks the point of diminishing returns, where adding further clusters yields only marginal reductions in within-cluster variance."},{id:4,question:"Which learned attribute in `KMeans` stores the coordinates of the cluster centroids?",options:["kmeans.centroids_","kmeans.cluster_centers_","kmeans.means_","kmeans.centers_"],correctAnswer:1,explanation:"In Scikit-learn, the final centroid coordinates for all K clusters are stored in the `cluster_centers_` attribute as a 2D numpy array of shape (n_clusters, n_features)."}],X=[{id:1,name:"Debangshu",x:15,y:25},{id:2,name:"Susmita",x:18,y:30},{id:3,name:"Swadeep",x:22,y:20},{id:4,name:"Tuhina",x:75,y:80},{id:5,name:"Sachin",x:82,y:88},{id:6,name:"Mahima",x:88,y:75},{id:7,name:"Abhronila",x:48,y:52},{id:8,name:"Rohan",x:55,y:48},{id:9,name:"Priya",x:50,y:58}],f=["#06b6d4","#10b981","#f59e0b","#ec4899","#8b5cf6"],j=[{k:1,inertia:18450},{k:2,inertia:7800},{k:3,inertia:1420},{k:4,inertia:920},{k:5,inertia:650},{k:6,inertia:480}];function J(){const[i,p]=l.useState("interactive"),[u,M]=l.useState(0),[N,w]=l.useState(!1),[c,T]=l.useState(3),[q,Q]=l.useState(2),[d,v]=l.useState({}),[o,k]=l.useState(!1),m=[{name:"01_kmeans_clustering_basics.py",code:H},{name:"02_elbow_method_and_inertia.py",code:L},{name:"03_kmeans_init_and_scaling_effects.py",code:U}],_=t=>{navigator.clipboard.writeText(t),w(!0),setTimeout(()=>w(!1),2e3)},E=(t,s)=>{o||v(r=>({...r,[t]:s}))},$=()=>{let t=0;return y.forEach(s=>{d[s.id]===s.correctAnswer&&t++}),t},h=(t=>t===1?[{x:50,y:53}]:t===2?[{x:25,y:35},{x:75,y:75}]:t===3?[{x:18.3,y:25},{x:51,y:52.7},{x:81.7,y:81}]:t===4?[{x:18.3,y:25},{x:51,y:52.7},{x:75,y:80},{x:85,y:82}]:[{x:15,y:25},{x:20,y:25},{x:51,y:52},{x:75,y:80},{x:88,y:75}])(c),S=X.map(t=>{let s=0,r=1/0;return h.forEach((n,a)=>{const x=Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2));x<r&&(r=x,s=a)}),{...t,cluster:s,dist:r}}),R=j.find(t=>t.k===c)?.inertia||1200;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-amber-500/20 rounded-xl text-amber-400 border border-amber-500/30",children:e.jsx(W,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20",children:"Topic 12 • Scikit-learn Overview"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"sklearn.cluster.KMeans"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"K-Means Clustering & The Elbow Method"})]})]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:["Master unsupervised cluster discovery in Scikit-learn. Understand centroid initialization (",e.jsx("code",{className:"text-amber-300 font-mono",children:"k-means++"}),"), Within-Cluster Sum of Squares (",e.jsx("code",{className:"text-amber-300 font-mono",children:"inertia_"}),"), and identifying optimal cluster counts via the Elbow curve."]})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>p("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="interactive"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(z,{className:"w-4 h-4"}),"Cluster & Elbow Studio"]}),e.jsxs("button",{onClick:()=>p("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="code"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(O,{className:"w-4 h-4"}),"Python Code Lab (",m.length,")"]}),e.jsxs("button",{onClick:()=>p("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="notes"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(C,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>p("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${i==="quiz"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(K,{className:"w-4 h-4"}),"Knowledge Check"]})]}),i==="interactive"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(B,{className:"w-4 h-4 text-amber-400"}),"KMeans Hyperparameters"]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-2",children:[e.jsx("span",{children:"Number of Clusters (n_clusters):"}),e.jsxs("span",{className:"font-mono text-amber-300 font-bold text-sm",children:["K = ",c]})]}),e.jsx("div",{className:"flex gap-2",children:[1,2,3,4,5].map(t=>e.jsx("button",{onClick:()=>T(t),className:`flex-1 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${c===t?"bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:t},t))})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-2 font-mono text-xs",children:[e.jsxs("div",{className:"flex justify-between text-slate-400 font-sans",children:[e.jsx("span",{children:"Model Inertia (inertia_):"}),e.jsx("span",{className:"text-amber-400 font-bold text-sm",children:R.toLocaleString()})]}),e.jsx("div",{className:"text-[11px] text-slate-400 font-sans",children:"Within-Cluster Sum of Squares. Notice how K=3 reaches the natural inflection plateau!"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-300 mb-2",children:"Centroid Coordinates (cluster_centers_):"}),e.jsx("div",{className:"space-y-1.5 font-mono text-xs",children:h.map((t,s)=>e.jsxs("div",{className:"p-2 bg-slate-950 rounded border border-slate-800 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:f[s]}}),e.jsxs("span",{className:"text-slate-300 font-semibold",children:["Centroid #",s]})]}),e.jsxs("span",{className:"text-slate-200",children:["(",t.x.toFixed(1),", ",t.y.toFixed(1),")"]})]},s))})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h4",{className:"text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5",children:[e.jsx(P,{className:"w-3.5 h-3.5 text-amber-400"}),"Elbow Curve (Inertia vs K)"]}),e.jsx("div",{className:"bg-slate-950 rounded-lg p-3 border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 200 120",className:"w-full h-[140px]",children:[e.jsx("line",{x1:"25",y1:"10",x2:"25",y2:"100",stroke:"#334155",strokeWidth:"0.8"}),e.jsx("line",{x1:"25",y1:"100",x2:"190",y2:"100",stroke:"#334155",strokeWidth:"0.8"}),(()=>{const t=j.map(s=>{const r=25+(s.k-1)/5*160,n=100-s.inertia/19e3*85;return`${r},${n}`});return e.jsx("polyline",{fill:"none",stroke:"#f59e0b",strokeWidth:"2",points:t.join(" ")})})(),j.map(t=>{const s=25+(t.k-1)/5*160,r=100-t.inertia/19e3*85,n=t.k===c,a=t.k===3;return e.jsxs("g",{children:[e.jsx("circle",{cx:s,cy:r,r:n?4.5:2.5,fill:n?"#10b981":a?"#ec4899":"#f59e0b",stroke:n?"#fff":"none",strokeWidth:1}),e.jsxs("text",{x:s,y:"112",fill:"#94a3b8",fontSize:"6",textAnchor:"middle",fontFamily:"monospace",children:["K=",t.k]})]},t.k)})]})}),e.jsxs("div",{className:"text-[10px] text-slate-400 mt-2 text-center",children:["The sharp elbow bend occurs at ",e.jsx("strong",{className:"text-pink-400 font-mono",children:"K = 3"}),"."]})]})]}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2",children:[e.jsx(F,{className:"w-4 h-4 text-amber-400"}),"2D Cluster Space & Centroid Voronoi Partitions"]}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"◆ Centroids | ● Student Samples"})]}),e.jsx("div",{className:"bg-slate-950 rounded-lg p-4 border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-[320px]",children:[e.jsx("line",{x1:"5",y1:"5",x2:"5",y2:"95",stroke:"#1e293b",strokeWidth:"0.5"}),e.jsx("line",{x1:"5",y1:"95",x2:"95",y2:"95",stroke:"#1e293b",strokeWidth:"0.5"}),S.map(t=>{const s=h[t.cluster];return e.jsx("line",{x1:t.x,y1:100-t.y,x2:s.x,y2:100-s.y,stroke:f[t.cluster],strokeWidth:"0.5",strokeDasharray:"1.5 1.5",strokeOpacity:"0.7"},t.id)}),S.map(t=>e.jsxs("g",{children:[e.jsx("circle",{cx:t.x,cy:100-t.y,r:"2.2",fill:f[t.cluster]}),e.jsx("text",{x:t.x+2,y:100-t.y+1,fill:"#94a3b8",fontSize:"2.4",fontFamily:"monospace",children:t.name})]},t.id)),h.map((t,s)=>e.jsxs("g",{children:[e.jsx("polygon",{points:`${t.x},${100-t.y-3} ${t.x+3},${100-t.y} ${t.x},${100-t.y+3} ${t.x-3},${100-t.y}`,fill:f[s],stroke:"#fff",strokeWidth:"0.8"}),e.jsxs("text",{x:t.x,y:100-t.y-4,fill:"#fff",fontSize:"3",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:["C",s]})]},s))]})}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-2 text-center",children:["Diamonds represent mathematically optimized cluster centroids (",e.jsx("code",{className:"text-amber-300 font-mono",children:"cluster_centers_"}),")."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{className:"text-white block mb-1",children:"Unsupervised Discovery:"}),"K-Means never received any target labels (",e.jsx("code",{className:"text-amber-300 font-mono",children:"y"}),")! It uncovered the 3 student clusters (Foundational, Moderate, Advanced) purely through spatial proximity and coordinate variance minimization."]})]})]})}),i==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:m.map((t,s)=>e.jsx("button",{onClick:()=>M(s),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${u===s?"bg-amber-600 text-white shadow-md shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:t.name},s))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:m[u].name}),e.jsx("button",{onClick:()=>_(m[u].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors",children:N?e.jsxs(e.Fragment,{children:[e.jsx(g,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(I,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:m[u].code})]})]}),i==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(C,{className:"w-5 h-5 text-amber-400"}),"Classroom Revision Notes: KMeans Clustering"]}),e.jsxs("button",{onClick:()=>_(A),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400",children:[N?e.jsx(g,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(I,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:A})]}),i==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(K,{className:"w-5 h-5 text-amber-400"}),"Topic 12 Quiz: K-Means Clustering"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Assess your mastery of WCSS inertia, k-means++ seeding, and elbow curve analysis."})]}),o&&e.jsxs("div",{className:"px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-amber-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[$()," / ",y.length]})]})]}),e.jsx("div",{className:"space-y-6",children:y.map((t,s)=>{d[t.id];const r=d[t.id]===t.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono mt-0.5",children:["Q",s+1]}),e.jsx("span",{children:t.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:t.options.map((n,a)=>{const x=d[t.id]===a;let b="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return o?a===t.correctAnswer?b="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":x&&!r&&(b="bg-rose-500/20 border-rose-500/50 text-rose-200"):x&&(b="bg-amber-500/20 border-amber-500/50 text-amber-200"),e.jsxs("button",{onClick:()=>E(t.id,a),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${b}`,children:[e.jsx("span",{children:n}),o&&a===t.correctAnswer&&e.jsx(g,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},a)})}),o&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-amber-300 block mb-1",children:"Explanation:"}),t.explanation]})]},t.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:o?e.jsxs("button",{onClick:()=>{v({}),k(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(D,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>k(!0),disabled:Object.keys(d).length===0,className:"px-6 py-2.5 bg-amber-600 hover:bg-amber-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-amber-600/20",children:"Submit Answers"})})]})})]})]})}export{J as default};
