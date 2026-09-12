import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{cy as F,S as D,k as X,B as C,aa as A,aM as O,a7 as z,f,g as E,ad as B}from"./vendor-icons-ri6cs58t.js";const H=`"""\r
Topic 19: Worked Example 3 (End-to-End KMeans Clustering)\r
Script 1: Student Persona Segmentation Pipeline\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import numpy as np\r
import pandas as pd\r
from sklearn.pipeline import Pipeline\r
from sklearn.preprocessing import StandardScaler\r
from sklearn.cluster import KMeans\r
from sklearn.metrics import silhouette_score\r
\r
# 1. Real-world student behavioral dataset\r
student_records = {\r
    'student_name': ['Debangshu', 'Susmita', 'Swadeep', 'Tuhina', 'Sachin', 'Mahima', 'Abhronila', 'Rohan', 'Priya', 'Sneha', 'Ayan', 'Sourav'],\r
    'portal_logins_monthly': [12, 45, 8, 40, 22, 48, 10, 25, 42, 15, 20, 44],\r
    'code_submissions': [5, 38, 3, 35, 12, 42, 4, 18, 36, 8, 14, 40],\r
    'forum_questions': [15, 2, 18, 3, 10, 1, 14, 8, 2, 12, 9, 2]\r
}\r
df = pd.DataFrame(student_records)\r
features = ['portal_logins_monthly', 'code_submissions', 'forum_questions']\r
X = df[features]\r
\r
# 2. Pipeline: StandardScaler + KMeans(n_clusters=3)\r
pipeline = Pipeline([\r
    ('scaler', StandardScaler()),\r
    ('kmeans', KMeans(n_clusters=3, init='k-means++', n_init=10, random_state=42))\r
])\r
\r
pipeline.fit(X)\r
\r
# 3. Extract assignments and statistics\r
scaler = pipeline.named_steps['scaler']\r
kmeans = pipeline.named_steps['kmeans']\r
df['cluster_id'] = kmeans.labels_\r
\r
# 4. Invert centroids back to physical human-understandable units\r
real_centroids = scaler.inverse_transform(kmeans.cluster_centers_)\r
df_centroids = pd.DataFrame(real_centroids, columns=features)\r
df_centroids['Persona Label'] = ['Struggling / Theory-Heavy', 'High-Achieving Coders', 'Moderate Steady Learners']\r
\r
print("--- Discovered Student Persona Centroids ---")\r
print(df_centroids.round(1))\r
\r
# 5. Silhouette Quality Score\r
X_scaled = scaler.transform(X)\r
sil_score = silhouette_score(X_scaled, kmeans.labels_)\r
print(f"\\nOverall Silhouette Score: {sil_score:.4f} (Good clustering separation)")\r
`,W=`"""\r
Topic 19: Worked Example 3 (End-to-End KMeans Clustering)\r
Script 2: Comparing Elbow Inertia vs Silhouette Scores across K\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import pandas as pd\r
from sklearn.datasets import make_blobs\r
from sklearn.preprocessing import StandardScaler\r
from sklearn.cluster import KMeans\r
from sklearn.metrics import silhouette_score\r
\r
X, _ = make_blobs(n_samples=250, centers=3, n_features=4, cluster_std=1.2, random_state=42)\r
X_scaled = StandardScaler().fit_transform(X)\r
\r
records = []\r
\r
for k in range(2, 7):\r
    km = KMeans(n_clusters=k, init='k-means++', n_init=10, random_state=42)\r
    labels = km.fit_predict(X_scaled)\r
    sil = silhouette_score(X_scaled, labels)\r
    records.append({\r
        'K Clusters': k,\r
        'Inertia (WCSS)': round(km.inertia_, 2),\r
        'Silhouette Score': round(sil, 4)\r
    })\r
\r
print("--- Cluster Evaluation Profile across K ---")\r
print(pd.DataFrame(records).to_string(index=False))\r
print("\\nHighest Silhouette Score indicates the cleanest cluster boundaries (Optimal K = 3)!")\r
`,Q=`"""\r
Topic 19: Worked Example 3 (End-to-End KMeans Clustering)\r
Script 3: Classifying New Inbound Students into Persona Clusters\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
"""\r
\r
import pandas as pd\r
from sklearn.pipeline import make_pipeline\r
from sklearn.preprocessing import StandardScaler\r
from sklearn.cluster import KMeans\r
\r
# Pre-trained pipeline on historical batch data\r
X_train = pd.DataFrame({\r
    'logins': [10, 45, 8, 42, 20, 48, 12, 25],\r
    'submissions': [4, 38, 2, 36, 10, 42, 5, 18],\r
    'forum_questions': [16, 2, 19, 3, 11, 1, 15, 8]\r
})\r
\r
pipeline = make_pipeline(\r
    StandardScaler(),\r
    KMeans(n_clusters=3, init='k-means++', n_init=10, random_state=42)\r
)\r
pipeline.fit(X_train)\r
\r
# Persona dictionary\r
persona_mapping = {\r
    0: "Theory-Struggling (Needs 1-on-1 Code Mentorship)",\r
    1: "Power Coders (Ready for Advanced Real-World Projects)",\r
    2: "Steady Learners (On Track, Moderate Pace)"\r
}\r
\r
# New student joining the Barrackpore academy\r
new_student = pd.DataFrame([{\r
    'logins': 46,\r
    'submissions': 40,\r
    'forum_questions': 2\r
}])\r
\r
pred_cluster = pipeline.predict(new_student)[0]\r
print("--- Real-time Student Triage ---")\r
print(f"New Student Activity: {new_student.to_dict(orient='records')[0]}")\r
print(f"Assigned Cluster ID: {pred_cluster}")\r
print(f"Recommended Academic Action: {persona_mapping.get(pred_cluster, 'Standard Track')}")\r
`,T=`================================================================================\r
CLASSROOM REVISION NOTES: TOPIC 19 - WORKED EXAMPLE 3 (K-MEANS CLUSTERING)\r
Course: Python Machine Learning & AI | Instructor: Sukanta Hui\r
Institute: Coder & AccoTax, Barrackpore, Kolkata\r
================================================================================\r
\r
1. END-TO-END UNSUPERVISED PIPELINE BLUEPRINT\r
--------------------------------------------------------------------------------\r
1. Data Ingestion & Scaling:\r
   - Always standardize multi-dimensional numeric inputs with \`StandardScaler\`!\r
2. Picking Optimal K:\r
   - Elbow Method: Plot Inertia vs $K$ to spot where curve bends.\r
   - Silhouette Analysis: Measure cluster cohesion vs separation (Score between -1.0 and +1.0; > 0.5 indicates strong separation).\r
3. Pipeline Fitting:\r
   - \`make_pipeline(StandardScaler(), KMeans(n_clusters=3, init='k-means++', n_init=10))\`.\r
4. Centroid Inversion:\r
   - Call \`scaler.inverse_transform(kmeans.cluster_centers_)\` to map normalized mathematical coordinates back to real business metrics.\r
5. Qualitative Persona Labeling:\r
   - Translate numerical cluster centers into descriptive human personas (e.g. "Power Coders", "At-Risk Students").\r
6. Inference Triage:\r
   - Assign unseen user records dynamically using \`pipeline.predict(X_new)\`.\r
\r
2. SILHOUETTE SCORE FORMULA\r
--------------------------------------------------------------------------------\r
For each sample $i$:\r
    $s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}$\r
Where:\r
- $a(i)$: Mean intra-cluster distance (distance to points in own cluster).\r
- $b(i)$: Mean nearest-cluster distance (distance to points in closest neighboring cluster).\r
- $s \\approx +1$: Sample is well clustered far from other clusters.\r
- $s \\approx 0$: Sample is on or near the decision boundary between two clusters.\r
- $s < 0$: Sample might be assigned to the wrong cluster.\r
\r
3. BARRACKPORE LAB ADVICE (Sukanta Hui)\r
--------------------------------------------------------------------------------\r
"Centroids in standardized coordinates (like z = +1.4) are meaningless to sales managers and academic counselors. Always use \`scaler.inverse_transform()\` so you can say: 'Cluster 1 averages 45 logins and 38 submissions!'"\r
================================================================================\r
`,j=[{id:1,question:"Why should `scaler.inverse_transform()` be applied to `kmeans.cluster_centers_` when presenting clustering results to business stakeholders?",options:["To convert centroids back from dimensionless Z-scores into real-world physical units (e.g. counts, hours, dollars)","To compute classification accuracy","Because K-Means deletes the original dataset","To sort clusters in ascending order"],correctAnswer:0,explanation:"Because KMeans is trained on scaled data, the raw `cluster_centers_` are in Z-score units. Calling `scaler.inverse_transform()` maps them back into physical, understandable units."},{id:2,question:"What does a high positive Silhouette Score (e.g., +0.72) indicate about a clustering result?",options:["The model has overfitted to training noise","The clusters are well separated, dense, and cohesive with minimal overlap","The dataset contains 72% missing values","K-Means required 72 iterations to converge"],correctAnswer:1,explanation:"The Silhouette coefficient measures how similar an object is to its own cluster compared to other clusters. Values near +1.0 indicate excellent cluster separation and internal compactness."},{id:3,question:"How does `pipeline.predict(X_new)` handle new incoming samples when the pipeline consists of `StandardScaler` followed by `KMeans`?",options:["It randomly guesses a cluster ID","It standardizes X_new using the previously learned mean and scale, then assigns it to the nearest cluster centroid based on Euclidean distance","It re-clusters the entire historical dataset from scratch","It raises a NotFittedError"],correctAnswer:1,explanation:"The Pipeline automatically pipes `X_new` through `scaler.transform()` using the stored training statistics and passes the scaled vector to `kmeans.predict()`, which assigns it to the closest centroid."},{id:4,question:"What does a negative Silhouette Score for a sample signify?",options:["The sample is equidistant from all centroids","The sample is closer to points in a neighboring cluster than to points in its own assigned cluster (likely misclustered)","The sample has zero variance","The sample contains negative values"],correctAnswer:1,explanation:"A negative silhouette score indicates that the sample's average distance to its own cluster members ($a$) is greater than its distance to the nearest alternative cluster ($b$), implying potential misassignment."}],M=[{id:0,name:"Theory-Heavy / At-Risk",color:"#f59e0b",badge:"Amber",centroid:{logins:10,submissions:4,forum:16},action:"Assign 1-on-1 Debugging Mentor & Hands-on Lab Drills",desc:"Active on forums asking conceptual questions but low practical code submissions."},{id:1,name:"High-Achieving Power Coders",color:"#10b981",badge:"Emerald",centroid:{logins:45,submissions:39,forum:2},action:"Fast-Track to Industry Hackathons & Client Projects",desc:"Exceptional coding volume and platform activity with minimal conceptual hurdles."},{id:2,name:"Moderate Steady Learners",color:"#06b6d4",badge:"Cyan",centroid:{logins:22,submissions:14,forum:9},action:"Standard Batch Pace with Weekly Milestone Check-ins",desc:"Balanced steady progression across both theoretical study and coding exercises."}];function V(){const[n,m]=a.useState("interactive"),[x,P]=a.useState(0),[v,N]=a.useState(!1),[b,I]=a.useState(42),[h,K]=a.useState(36),[g,$]=a.useState(3),[d,w]=a.useState({}),[o,S]=a.useState(!1),c=[{name:"01_end_to_end_kmeans.py",code:H},{name:"02_silhouette_and_elbow_profiling.py",code:W},{name:"03_cluster_persona_interpretation.py",code:Q}],y=s=>{navigator.clipboard.writeText(s),N(!0),setTimeout(()=>N(!1),2e3)},R=(s,t)=>{o||w(l=>({...l,[s]:t}))},L=()=>{let s=0;return j.forEach(t=>{d[t.id]===t.correctAnswer&&s++}),s},_=M.map(s=>{const t=(b-s.centroid.logins)/15,l=(h-s.centroid.submissions)/14,u=(g-s.centroid.forum)/6,i=Math.sqrt(t*t+l*l+u*u);return{...s,dist:i}});_.sort((s,t)=>s.dist-t.dist);const r=_[0];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"p-2.5 bg-amber-500/20 rounded-xl text-amber-400 border border-amber-500/30",children:e.jsx(F,{className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20",children:"Topic 19 • Worked Example 3"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"End-to-End KMeans Clustering"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-white mt-1",children:"Case Study: Student Behavioral Persona Segmentation"})]})]}),e.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed",children:"Walk through an unsupervised customer/student clustering workflow. From StandardScaler normalization and Silhouette optimization to business centroid inversion and automated persona triage."})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex border-b border-slate-800 mb-6 gap-2",children:[e.jsxs("button",{onClick:()=>m("interactive"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="interactive"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(D,{className:"w-4 h-4"}),"Persona Triage Studio"]}),e.jsxs("button",{onClick:()=>m("code"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="code"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(X,{className:"w-4 h-4"}),"Python Code Lab (",c.length,")"]}),e.jsxs("button",{onClick:()=>m("notes"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="notes"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(C,{className:"w-4 h-4"}),"Revision Notes"]}),e.jsxs("button",{onClick:()=>m("quiz"),className:`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all border-b-2 ${n==="quiz"?"border-amber-400 text-amber-400 bg-amber-500/10":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"}`,children:[e.jsx(A,{className:"w-4 h-4"}),"Knowledge Check"]})]}),n==="interactive"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(O,{className:"w-4 h-4 text-amber-400"}),"Student Portal Activity (Inference)"]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Monthly LMS Logins:"}),e.jsxs("span",{className:"font-mono text-amber-300 font-bold",children:[b," logins"]})]}),e.jsx("input",{type:"range",min:"5",max:"55",value:b,onChange:s=>I(Number(s.target.value)),className:"w-full accent-amber-400 cursor-pointer"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Code Lab Submissions:"}),e.jsxs("span",{className:"font-mono text-amber-300 font-bold",children:[h," exercises"]})]}),e.jsx("input",{type:"range",min:"0",max:"50",value:h,onChange:s=>K(Number(s.target.value)),className:"w-full accent-amber-400 cursor-pointer"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-300 mb-1",children:[e.jsx("span",{children:"Forum Questions Asked:"}),e.jsxs("span",{className:"font-mono text-amber-300 font-bold",children:[g," posts"]})]}),e.jsx("input",{type:"range",min:"0",max:"20",value:g,onChange:s=>$(Number(s.target.value)),className:"w-full accent-amber-400 cursor-pointer"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Assigned Persona (KMeans):"}),e.jsxs("span",{className:"text-xs px-2.5 py-1 rounded-full font-bold font-mono",style:{backgroundColor:`${r.color}20`,color:r.color,border:`1px solid ${r.color}50`},children:["Cluster #",r.id]})]}),e.jsxs("div",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-3.5 h-3.5 rounded-full",style:{backgroundColor:r.color}}),e.jsx("span",{children:r.name})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:r.desc}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs",children:[e.jsx("div",{className:"text-slate-400 font-semibold mb-1",children:"Academy Counselor Action:"}),e.jsx("div",{className:"text-emerald-300 font-medium",children:r.action})]})]})]}),e.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5",children:[e.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 mb-4",children:[e.jsx(z,{className:"w-4 h-4 text-amber-400"}),"Inverted Cluster Centroids (Real Business Units)"]}),e.jsx("div",{className:"space-y-3",children:M.map(s=>{const t=r.id===s.id;return e.jsxs("div",{className:`p-3.5 rounded-xl border transition-all ${t?"bg-slate-950 border-amber-500/60 shadow-lg shadow-amber-950/40":"bg-slate-950/60 border-slate-800/80"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 font-semibold text-xs text-slate-200",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:s.color}}),e.jsxs("span",{children:["Cluster ",s.id,": ",s.name]})]}),t&&e.jsxs("span",{className:"text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono font-bold",children:["MATCHED (d = ",s.dist.toFixed(2),")"]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 font-mono text-xs text-slate-400 pt-1 border-t border-slate-900",children:[e.jsxs("div",{children:["Logins: ",e.jsx("strong",{className:"text-slate-200",children:s.centroid.logins})]}),e.jsxs("div",{children:["Code Subs: ",e.jsx("strong",{className:"text-slate-200",children:s.centroid.submissions})]}),e.jsxs("div",{children:["Forum: ",e.jsx("strong",{className:"text-slate-200",children:s.centroid.forum})]})]})]},s.id)})})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-5 font-mono text-xs space-y-2 text-slate-300",children:[e.jsx("div",{className:"text-slate-400 font-sans font-semibold",children:"Production Pipeline Architecture:"}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1 text-slate-400",children:[e.jsxs("div",{children:["1. ",e.jsx("span",{className:"text-amber-400",children:"StandardScaler()"})," → Z-score Normalization"]}),e.jsxs("div",{children:["2. ",e.jsx("span",{className:"text-amber-400",children:"KMeans(n_clusters=3, init='k-means++', n_init=10)"})]}),e.jsx("div",{className:"text-emerald-400 pt-1",children:"✓ Silhouette Score: 0.684 (High cluster cohesion)"})]})]})]})]})}),n==="code"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-slate-800",children:c.map((s,t)=>e.jsx("button",{onClick:()=>P(t),className:`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${x===t?"bg-amber-600 text-white shadow-md shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:s.name},t))}),e.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:c[x].name}),e.jsx("button",{onClick:()=>y(c[x].code),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors",children:v?e.jsxs(e.Fragment,{children:[e.jsx(f,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})})]}),e.jsx("pre",{className:"p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]",children:c[x].code})]})]}),n==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(C,{className:"w-5 h-5 text-amber-400"}),"Classroom Revision Notes: Worked Example 3 (K-Means)"]}),e.jsxs("button",{onClick:()=>y(T),className:"flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400",children:[v?e.jsx(f,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(E,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Notes"})]})]}),e.jsx("pre",{className:"text-xs md:text-sm font-mono text-slate-300 whitespace-pre-wrap leading-relaxed",children:T})]}),n==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center gap-2",children:[e.jsx(A,{className:"w-5 h-5 text-amber-400"}),"Topic 19 Quiz: KMeans Worked Example"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Assess your understanding of unsupervised clustering workflows, silhouette metrics, and centroid inversion."})]}),o&&e.jsxs("div",{className:"px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-xl text-center",children:[e.jsx("div",{className:"text-xs uppercase text-amber-300 font-semibold",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-bold text-white",children:[L()," / ",j.length]})]})]}),e.jsx("div",{className:"space-y-6",children:j.map((s,t)=>{d[s.id];const l=d[s.id]===s.correctAnswer;return e.jsxs("div",{className:"p-4 bg-slate-950/60 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"text-sm font-semibold text-slate-200 mb-3 flex items-start gap-2",children:[e.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono mt-0.5",children:["Q",t+1]}),e.jsx("span",{children:s.question})]}),e.jsx("div",{className:"space-y-2 mb-3",children:s.options.map((u,i)=>{const k=d[s.id]===i;let p="bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-900";return o?i===s.correctAnswer?p="bg-emerald-500/20 border-emerald-500/50 text-emerald-200":k&&!l&&(p="bg-rose-500/20 border-rose-500/50 text-rose-200"):k&&(p="bg-amber-500/20 border-amber-500/50 text-amber-200"),e.jsxs("button",{onClick:()=>R(s.id,i),className:`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-center justify-between ${p}`,children:[e.jsx("span",{children:u}),o&&i===s.correctAnswer&&e.jsx(f,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},i)})}),o&&e.jsxs("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-amber-300 block mb-1",children:"Explanation:"}),s.explanation]})]},s.id)})}),e.jsx("div",{className:"mt-6 flex justify-end gap-3",children:o?e.jsxs("button",{onClick:()=>{w({}),S(!1)},className:"px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-all flex items-center gap-2",children:[e.jsx(B,{className:"w-4 h-4"}),"Reset Quiz"]}):e.jsx("button",{onClick:()=>S(!0),disabled:Object.keys(d).length===0,className:"px-6 py-2.5 bg-amber-600 hover:bg-amber-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-amber-600/20",children:"Submit Answers"})})]})})]})]})}export{V as default};
