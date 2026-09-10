import{b as s,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as M,cg as w,be as I,r as k,F as S,aa as N,aM as E,d as V,aN as W,f as C,g as _}from"./vendor-icons-DFC0rBCP.js";const L=`"""\r
=============================================================================\r
TOPIC 14: Worked Example 3: Scatter Plot of Features\r
Script 01: Multi-Class 2D Feature Separation (Iris Dataset EDA)\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("1. 2D Multi-Class Feature Separation (Petal Length vs Width)")\r
\r
np.random.seed(42)\r
# Simulating 3 Iris Species (Setosa, Versicolor, Virginica)\r
n_per_class = 50\r
\r
# Setosa (Linearly separable, small petals)\r
setosa_x = np.random.normal(1.5, 0.2, n_per_class)\r
setosa_y = np.random.normal(0.25, 0.1, n_per_class)\r
\r
# Versicolor (Medium petals)\r
versicolor_x = np.random.normal(4.2, 0.4, n_per_class)\r
versicolor_y = np.random.normal(1.3, 0.2, n_per_class)\r
\r
# Virginica (Large petals, overlaps slightly with Versicolor)\r
virginica_x = np.random.normal(5.5, 0.5, n_per_class)\r
virginica_y = np.random.normal(2.0, 0.3, n_per_class)\r
\r
fig, ax = plt.subplots(figsize=(9, 5.5))\r
\r
ax.scatter(setosa_x, setosa_y, color='#10b981', marker='o', s=55, alpha=0.85, edgecolors='black', label='Iris Setosa (Class 0)')\r
ax.scatter(versicolor_x, versicolor_y, color='#0284c7', marker='s', s=50, alpha=0.85, edgecolors='black', label='Iris Versicolor (Class 1)')\r
ax.scatter(virginica_x, virginica_y, color='#ec4899', marker='^', s=60, alpha=0.85, edgecolors='black', label='Iris Virginica (Class 2)')\r
\r
# Add threshold line showing linear separability of Setosa\r
ax.axvline(2.5, color='#ef4444', linestyle='--', label='Linear Separator (Setosa)')\r
\r
ax.set_title("Iris Feature Space: Petal Length vs Petal Width", fontsize=12, fontweight='bold', pad=12)\r
ax.set_xlabel("Petal Length (cm)", fontsize=10)\r
ax.set_ylabel("Petal Width (cm)", fontsize=10)\r
ax.legend(loc='upper left', frameon=True, framealpha=0.9)\r
ax.grid(True, linestyle=":", alpha=0.4)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Multi-class 2D feature scatter plot created successfully.")\r
`,$=`"""\r
=============================================================================\r
TOPIC 14: Worked Example 3: Scatter Plot of Features\r
Script 02: Decision Boundary Contour Mesh & Data Scatter Overlay\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("1. 2D Classification Decision Boundary Visualizer")\r
\r
# Generate synthetic non-linear 2D classification dataset\r
np.random.seed(42)\r
x1 = np.random.uniform(-3, 3, 200)\r
x2 = np.random.uniform(-3, 3, 200)\r
# Non-linear boundary: circle of radius 1.8\r
y_labels = (x1**2 + x2**2 < 3.2).astype(int)\r
\r
# Create 2D Meshgrid for decision contour\r
xx, yy = np.meshgrid(np.linspace(-3.5, 3.5, 200), np.linspace(-3.5, 3.5, 200))\r
# Decision function Z\r
zz = (xx**2 + yy**2 < 3.2).astype(int)\r
\r
fig, ax = plt.subplots(figsize=(8, 6))\r
\r
# 1. Background Filled Contour of Decision Region\r
contour = ax.contourf(xx, yy, zz, levels=1, cmap='coolwarm', alpha=0.3)\r
ax.contour(xx, yy, zz, levels=[0.5], colors='#ef4444', linewidths=2.5, linestyles='--')\r
\r
# 2. Overlaid Sample Scatter Points\r
scatter = ax.scatter(\r
    x1, x2,\r
    c=y_labels,\r
    cmap='coolwarm',\r
    edgecolors='black',\r
    s=55,\r
    alpha=0.9\r
)\r
\r
ax.set_title("Non-Linear SVM / Neural Net Circular Decision Boundary", fontweight='bold', pad=12)\r
ax.set_xlabel("Feature $X_1$")\r
ax.set_ylabel("Feature $X_2$")\r
ax.set_aspect('equal')\r
ax.grid(True, linestyle=":", alpha=0.3)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Decision boundary contourf plot with overlaid data scatter rendered.")\r
`,B=`"""\r
=============================================================================\r
TOPIC 14: Worked Example 3: Scatter Plot of Features\r
Script 03: PCA Dimensionality Reduction Scatter (High-D to 2D)\r
Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
=============================================================================\r
"""\r
\r
import matplotlib.pyplot as plt\r
import numpy as np\r
\r
def section(title):\r
    print(f"\\n{'='*75}\\n  {title.upper()}\\n{'='*75}")\r
\r
section("1. Visualizing High-Dimensional Data via PCA Projection")\r
\r
np.random.seed(42)\r
n = 150\r
\r
# Simulating 10-dimensional feature space projected onto 2 Principal Components\r
pc1_benign = np.random.normal(-2.5, 1.2, n)\r
pc2_benign = np.random.normal(0.5, 1.0, n)\r
\r
pc1_malignant = np.random.normal(2.5, 1.5, n)\r
pc2_malignant = np.random.normal(-0.5, 1.3, n)\r
\r
fig, ax = plt.subplots(figsize=(9, 5.5))\r
\r
ax.scatter(pc1_benign, pc2_benign, color='#10b981', s=50, alpha=0.75, edgecolors='black', label='Benign Tumors (Class 0)')\r
ax.scatter(pc1_malignant, pc2_malignant, color='#f43f5e', s=50, alpha=0.75, edgecolors='black', marker='^', label='Malignant Tumors (Class 1)')\r
\r
# Annotating Explained Variance\r
ax.text(\r
    0.05, 0.92,\r
    "PCA Projection:\\nPC1 Explained Variance: 64.2%\\nPC2 Explained Variance: 21.8%\\nCumulative Information: 86.0%",\r
    transform=ax.transAxes,\r
    fontsize=9,\r
    bbox=dict(boxstyle='round', facecolor='#0f172a', edgecolor='#64748b')\r
)\r
\r
ax.set_title("Breast Cancer Dataset: 30 Features Projected onto 2D PCA Space", fontweight='bold', pad=12)\r
ax.set_xlabel("Principal Component 1 (64.2% Variance)")\r
ax.set_ylabel("Principal Component 2 (21.8% Variance)")\r
ax.set_aspect('equal')\r
ax.legend(loc='upper right')\r
ax.grid(True, linestyle=":", alpha=0.4)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ PCA 2D projection scatter plot with explained variance metadata generated.")\r
`,P=`MATPLOTLIB ESSENTIALS: TOPIC 14 NOTE\r
=============================================================================\r
TOPIC: Worked Example 3 - Machine Learning Feature Space & Decision Boundaries\r
MENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r
=============================================================================\r
\r
1. FEATURE EXPLORATION (EDA):\r
   - 2D scatter plots reveal pairwise linear vs non-linear relationships.\r
   - Iris dataset classic insight: Petal Length vs Petal Width linearly separates Iris Setosa completely from Versicolor and Virginica.\r
\r
2. DECISION BOUNDARY VISUALIZATION:\r
   - Recipe for plotting classifier decision surfaces in Matplotlib:\r
     1. Create 2D grid: \`xx, yy = np.meshgrid(np.linspace(x_min, x_max, 200), np.linspace(y_min, y_max, 200))\`\r
     2. Predict labels on grid: \`zz = model.predict(np.c_[xx.ravel(), yy.ravel()]).reshape(xx.shape)\`\r
     3. Draw background filled region: \`ax.contourf(xx, yy, zz, alpha=0.3, cmap='coolwarm')\`\r
     4. Draw separator boundary: \`ax.contour(xx, yy, zz, levels=[0.5], colors='red', linewidths=2)\`\r
     5. Overlay training samples: \`ax.scatter(X[:,0], X[:,1], c=y, cmap='coolwarm', edgecolors='k')\`\r
\r
3. PCA PROJECTIONS & DISTANCES:\r
   - High-dimensional datasets (e.g. 30 features in Breast Cancer) cannot be plotted directly.\r
   - PCA reduces features to PC1 and PC2.\r
   - Always set \`ax.set_aspect('equal')\` so that visual clustering distances match real mathematical orthogonal variance.\r
`,l=[{id:1,question:"What combination of Matplotlib functions is used to plot a 2D Machine Learning classification decision boundary with overlaid sample points?",options:["`ax.contourf(xx, yy, zz)` for background regions and `ax.scatter(X[:,0], X[:,1], c=y)` for points","`plt.pie()` and `plt.bar()`","`ax.plot()` only","`ax.hist2d()` and `ax.boxplot()`"],correctAnswer:0,explanation:"`ax.contourf` colors the 2D grid predicted by the ML model, and `ax.scatter` overlays the actual training/test data points on top."},{id:2,question:"When plotting 2D Principal Component Analysis (PCA) projections, what metadata should ideally be displayed on the axis labels or annotations?",options:["The Explained Variance Ratio of each Principal Component (e.g. PC1: 64.2%, PC2: 21.8%)","The model's random seed number","The CPU temperature","The file save path"],correctAnswer:0,explanation:"Including the explained variance ratio informs viewers how much of the original dataset's total information/spread is captured by each 2D axis."},{id:3,question:"In the famous Iris dataset, which pair of features achieves nearly 100% linear separation of Iris Setosa from the other two species?",options:["Petal Length vs Petal Width","Sepal Width vs Sepal Width","ID vs Index","Target vs Target"],correctAnswer:0,explanation:"Petal Length and Petal Width have completely distinct clusters for Iris Setosa (under 2.5 cm length) compared to Versicolor and Virginica."},{id:4,question:"Why is `np.meshgrid()` used prior to calling `ax.contourf()` for ML decision boundaries?",options:["To generate a dense 2D coordinate grid of evaluation points across the entire feature plane","To sort the data array alphabetically","To compress memory","To calculate standard deviation"],correctAnswer:0,explanation:"`np.meshgrid(x_range, y_range)` constructs 2D matrices of coordinates covering every pixel in the plot window so the classifier can predict labels at every grid coordinate."}];function R(){const[n,D]=s.useState("studio"),[i,A]=s.useState(1),[o,u]=s.useState(!1),[r,T]=s.useState("iris"),[m,b]=s.useState({}),[c,f]=s.useState(!1),d={1:{name:"01_multiclass_eda_scatter_matrix.py",code:L,desc:"2D Multi-class feature separation, cluster boundaries, and separator lines (Iris dataset)"},2:{name:"02_decision_boundary_contour_scatter.py",code:$,desc:"Decision boundary visualization using np.meshgrid, ax.contourf, and overlaid scatter points"},3:{name:"03_pca_feature_projection_scatter.py",code:B,desc:"High-dimensional feature space reduction using PCA with explained variance metadata"}},g=t=>{navigator.clipboard.writeText(t),u(!0),setTimeout(()=>u(!1),2e3)},z=(t,a)=>{b(h=>({...h,[t]:a}))},y=()=>{let t=0;return l.forEach(a=>{m[a.id]===a.correctAnswer&&t++}),t};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-pink-900/40 via-rose-900/30 to-indigo-900/40 border border-pink-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-pink-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(M,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 14: Worked Example 3 — Feature Scatter & Decision Boundaries"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["End-to-end practical machine learning case study. Explore pairwise continuous feature separations (Iris EDA), generate non-linear classifier decision boundaries with ",e.jsx("code",{className:"text-pink-300 font-mono",children:"ax.contourf"})," and ",e.jsx("code",{className:"text-pink-300 font-mono",children:"np.meshgrid"}),", and project 30-dimensional clinical datasets onto 2D PCA manifolds."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30 flex items-center gap-1.5",children:[e.jsx(w,{className:"w-3.5 h-3.5"})," Case Study 03"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5",children:[e.jsx(I,{className:"w-3.5 h-3.5"})," Decision Contours & PCA"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-pink-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:[`"When teaching Support Vector Machines (SVM) and Random Forests to Susmita and Debangshu, mathematical loss formulas alone don't build intuition. Generating 2D meshgrid contours with `,e.jsx("code",{className:"text-pink-300 font-mono",children:"ax.contourf()"}),' lets students visually watch how non-linear kernels bend decision boundaries around complex clusters!"']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Feature & Boundary Studio",icon:w},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:k},{id:"notes",label:"Revision Notes",icon:S},{id:"quiz",label:"MCQ Assessment",icon:N}].map(t=>{const a=t.icon;return e.jsxs("button",{onClick:()=>D(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${n===t.id?"border-pink-500 text-pink-400 bg-pink-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(a,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[n==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(E,{className:"text-pink-400 w-5 h-5"}),"Machine Learning EDA Scenarios"]}),e.jsx("div",{className:"space-y-2.5",children:[{id:"iris",title:"1. Iris 2D Feature Space EDA",desc:"Petal Length vs Width showing Setosa linear separation"},{id:"boundary",title:"2. Non-Linear Decision Contour",desc:"np.meshgrid + ax.contourf circular decision boundary"},{id:"pca",title:"3. PCA 2D Manifold Projection",desc:"30-Feature Breast Cancer dataset reduced to 2D"}].map(t=>e.jsxs("button",{onClick:()=>T(t.id),className:`w-full text-left p-3.5 rounded-xl border transition ${r===t.id?"border-pink-500 bg-pink-950/60 text-pink-200 ring-1 ring-pink-500 shadow-md":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("div",{className:"font-semibold text-white text-xs",children:t.title}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-0.5",children:t.desc})]},t.id))}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300",children:[e.jsx("strong",{className:"text-pink-300 block mb-1",children:"Key Takeaway:"}),r==="iris"&&"Setosa (green) has petal length < 2.5cm, forming a 100% linearly separable cluster.",r==="boundary"&&"The red dashed line at contour level 0.5 marks the exact mathematical decision threshold between class 0 and 1.",r==="pca"&&"PC1 (64.2%) and PC2 (21.8%) together preserve 86.0% of the entire 30-dimensional variance."]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(V,{className:"w-4 h-4 text-pink-400"}),"Live Feature Space Visualizer"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-pink-300 border border-slate-800 uppercase",children:["Scenario: ",r]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:[r==="iris"&&e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"50",y1:t,x2:"490",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"50",y1:"200",x2:"490",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"160",y1:"20",x2:"160",y2:"200",stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"4,4"}),e.jsx("text",{x:"155",y:"35",fill:"#ef4444",fontSize:"8",textAnchor:"end",children:"Setosa Linear Boundary"}),[{x:75,y:185},{x:90,y:175},{x:105,y:180},{x:120,y:170},{x:135,y:182}].map((t,a)=>e.jsx("circle",{cx:t.x,cy:t.y,r:"5",fill:"#10b981",stroke:"#0f172a",strokeWidth:"1.2"},`s-${a}`)),[{x:230,y:130},{x:250,y:115},{x:270,y:125},{x:290,y:110},{x:310,y:120}].map((t,a)=>e.jsx("rect",{x:t.x-4,y:t.y-4,width:"8",height:"8",fill:"#0284c7",stroke:"#0f172a",strokeWidth:"1.2"},`v-${a}`)),[{x:360,y:80},{x:385,y:65},{x:410,y:75},{x:435,y:55},{x:460,y:65}].map((t,a)=>e.jsx("polygon",{points:`${t.x},${t.y-5} ${t.x-5},${t.y+4} ${t.x+5},${t.y+4}`,fill:"#ec4899",stroke:"#0f172a",strokeWidth:"1.2"},`vg-${a}`)),e.jsxs("g",{transform:"translate(320, 140)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"50",fill:"#0f172a",rx:"4",stroke:"#334155"}),e.jsx("circle",{cx:"15",cy:"12",r:"4",fill:"#10b981"}),e.jsx("text",{x:"25",y:"15",fill:"#cbd5e1",fontSize:"8",children:"Setosa (Class 0)"}),e.jsx("rect",{x:"11",y:"22",width:"7",height:"7",fill:"#0284c7"}),e.jsx("text",{x:"25",y:"28",fill:"#cbd5e1",fontSize:"8",children:"Versicolor (Class 1)"}),e.jsx("polygon",{points:"15,35 11,43 19,43",fill:"#ec4899"}),e.jsx("text",{x:"25",y:"42",fill:"#cbd5e1",fontSize:"8",children:"Virginica (Class 2)"})]}),e.jsx("text",{x:"270",y:"225",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Petal Length (cm)"}),e.jsx("text",{x:"20",y:"110",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 110)",children:"Petal Width (cm)"})]}),r==="boundary"&&e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[e.jsx("circle",{cx:"260",cy:"125",r:"75",fill:"#3b82f6",opacity:"0.25"}),e.jsx("circle",{cx:"260",cy:"125",r:"75",fill:"none",stroke:"#ef4444",strokeWidth:"2.5",strokeDasharray:"5,5"}),[{x:240,y:110},{x:265,y:130},{x:280,y:105},{x:235,y:145},{x:270,y:150}].map((t,a)=>e.jsx("circle",{cx:t.x,cy:t.y,r:"5",fill:"#38bdf8",stroke:"#0f172a",strokeWidth:"1.2"},`in-${a}`)),[{x:140,y:60},{x:380,y:60},{x:130,y:190},{x:390,y:180},{x:430,y:120}].map((t,a)=>e.jsx("rect",{x:t.x-4,y:t.y-4,width:"8",height:"8",fill:"#f43f5e",stroke:"#0f172a",strokeWidth:"1.2"},`out-${a}`)),e.jsx("text",{x:"260",y:"235",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Feature X1"}),e.jsx("text",{x:"20",y:"125",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 125)",children:"Feature X2"})]}),r==="pca"&&e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"50",y1:t,x2:"490",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"50",y1:"200",x2:"490",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),[{x:120,y:90},{x:140,y:110},{x:160,y:80},{x:180,y:120},{x:200,y:100}].map((t,a)=>e.jsx("circle",{cx:t.x,cy:t.y,r:"5",fill:"#10b981",stroke:"#0f172a",strokeWidth:"1.2"},`b-${a}`)),[{x:330,y:140},{x:350,y:160},{x:370,y:130},{x:390,y:170},{x:410,y:150}].map((t,a)=>e.jsx("polygon",{points:`${t.x},${t.y-5} ${t.x-5},${t.y+4} ${t.x+5},${t.y+4}`,fill:"#f43f5e",stroke:"#0f172a",strokeWidth:"1.2"},`m-${a}`)),e.jsx("rect",{x:"70",y:"25",width:"200",height:"40",fill:"#0f172a",rx:"4",stroke:"#334155"}),e.jsx("text",{x:"80",y:"40",fill:"#f8fafc",fontSize:"8.5",fontWeight:"bold",children:"PC1: 64.2% | PC2: 21.8% Variance"}),e.jsx("text",{x:"80",y:"55",fill:"#10b981",fontSize:"8",children:"Preserved Total Info: 86.0%"}),e.jsx("text",{x:"270",y:"225",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Principal Component 1 (64.2%)"}),e.jsx("text",{x:"20",y:"110",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 110)",children:"Principal Component 2 (21.8%)"})]})]})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(W,{className:"w-3.5 h-3.5 text-pink-400"}),"Python Matplotlib Code:"]}),e.jsx("pre",{className:"text-pink-300",children:r==="iris"?`ax.scatter(setosa_x, setosa_y, color='#10b981', label='Setosa')
ax.scatter(versi_x, versi_y, color='#0284c7', label='Versicolor')
ax.scatter(virg_x, virg_y, color='#ec4899', label='Virginica')
ax.axvline(2.5, color='r', linestyle='--', label='Setosa Boundary')
ax.legend()`:r==="boundary"?`ax.contourf(xx, yy, zz, levels=1, cmap='coolwarm', alpha=0.3)
ax.contour(xx, yy, zz, levels=[0.5], colors='red', linewidths=2.5)
ax.scatter(x1, x2, c=y_labels, cmap='coolwarm', edgecolors='black')`:`ax.scatter(pc1_benign, pc2_benign, color='#10b981', label='Benign')
ax.scatter(pc1_malignant, pc2_malignant, color='#f43f5e', label='Malignant')
ax.set_aspect('equal')`})]})]})]})}),n==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(k,{className:"text-pink-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore Iris EDA scatter, classifier decision boundary contours, and PCA projections."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>A(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${i===t?"bg-pink-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-pink-400",children:d[i].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:d[i].desc})]}),e.jsxs("button",{onClick:()=>g(d[i].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[o?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),o?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:d[i].code})})]}),n==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(S,{className:"text-pink-400 w-5 h-5"}),"Case Study 3: Feature Space & Decision Boundary Notes"]}),e.jsxs("button",{onClick:()=>g(P),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[o?e.jsx(C,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),o?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:P})]}),n==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(N,{className:"text-pink-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of decision boundaries, contour plots, and PCA projections."})]}),c&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-pink-950 border border-pink-500/40 text-pink-300 text-sm font-bold",children:["Score: ",y()," / ",l.length," (",Math.round(y()/l.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:l.map((t,a)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[a+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((h,x)=>{const j=m[t.id]===x,v=t.correctAnswer===x;let p="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return c?v?p="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":j&&!v&&(p="border-rose-500 bg-rose-950/40 text-rose-200"):j&&(p="border-pink-500 bg-pink-950/50 text-pink-200 ring-1 ring-pink-500"),e.jsx("button",{onClick:()=>!c&&z(t.id,x),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${p}`,children:h},x)})}),c&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-pink-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{b({}),f(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>f(!0),disabled:Object.keys(m).length<l.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-pink-600 text-white hover:bg-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-pink-600/30",children:"Submit Quiz"})]})]})]})]})}export{R as default};
