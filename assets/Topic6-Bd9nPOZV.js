import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as W,cm as T,L as Y,r as D,F as M,aa as z,aM as V,d as X,aN as K,f as A,g as F}from"./vendor-icons-ri6cs58t.js";const Q=`"""\r
=============================================================================\r
TOPIC 6: Scatter Plot with plt.scatter()\r
Script 01: Multi-Dimensional Mapping (X, Y, Size, Color & Colorbar)\r
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
section("1. 4-Dimensional Feature Visualization in a 2D Canvas")\r
\r
np.random.seed(42)\r
n_samples = 150\r
\r
# Simulating House Price Features:\r
# X: Square Footage, Y: House Price, Size (s): Number of Bedrooms, Color (c): Distance to City\r
sqft = np.random.uniform(800, 3500, n_samples)\r
price = 15 + 0.03 * sqft + np.random.normal(0, 10, n_samples) # Lakh INR\r
bedrooms = np.random.randint(1, 6, n_samples)\r
dist_to_city = np.random.uniform(2, 35, n_samples) # Kilometers\r
\r
fig, ax = plt.subplots(figsize=(9, 5))\r
\r
# 4D scatter plot: x, y, s (marker area in pt^2), c (numerical colormap)\r
scatter = ax.scatter(\r
    sqft,\r
    price,\r
    s=bedrooms * 25,             # 3rd dimension: Marker area\r
    c=dist_to_city,             # 4th dimension: Continuous color\r
    cmap='viridis_r',           # Reversed viridis (closer to city = brighter)\r
    alpha=0.8,\r
    edgecolors='#0f172a',\r
    linewidth=0.8\r
)\r
\r
ax.set_title("Housing Market Feature Exploration (4 Dimensions)", fontsize=12, fontweight='bold')\r
ax.set_xlabel("Square Footage (sq ft)")\r
ax.set_ylabel("Property Price (Lakh INR)")\r
ax.grid(True, linestyle="--", alpha=0.3)\r
\r
# Add Colorbar for 4th feature\r
cbar = fig.colorbar(scatter, ax=ax)\r
cbar.set_label("Distance to Metro Station (km)", rotation=270, labelpad=15)\r
\r
# Add Marker Size Legend for 3rd feature\r
for beds in [1, 3, 5]:\r
    ax.scatter([], [], s=beds*25, c='gray', alpha=0.7, edgecolors='black', label=f'{beds} BHK')\r
ax.legend(title="Bedrooms", loc="upper left", frameon=True)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ 4-Dimensional scatter plot rendered with continuous colorbar and size legend.")\r
`,U=`"""\r
=============================================================================\r
TOPIC 6: Scatter Plot with plt.scatter()\r
Script 02: Classification Clusters & Regression Trendline Fit\r
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
section("1. Linear Regression Trendline Overlay on Scatter Plot")\r
\r
np.random.seed(42)\r
experience = np.random.uniform(1, 15, 60)\r
salary = 3.5 + 1.8 * experience + np.random.normal(0, 2.5, 60) # Lakhs / annum\r
\r
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 4.5))\r
\r
# 1. Scatter with Ordinary Least Squares (OLS) Trendline\r
ax1.scatter(experience, salary, color='#0284c7', edgecolor='#0f172a', s=55, alpha=0.85, label='Actual Candidates')\r
\r
# Compute Best Fit Line using np.polyfit (degree 1)\r
slope, intercept = np.polyfit(experience, salary, 1)\r
x_line = np.linspace(experience.min(), experience.max(), 100)\r
y_line = slope * x_line + intercept\r
\r
ax1.plot(x_line, y_line, color='#ef4444', lw=2.5, linestyle='--', label=f'OLS Fit: y = {slope:.2f}x + {intercept:.2f}')\r
ax1.set_title("Experience vs Salary Regression Fit", fontweight='bold')\r
ax1.set_xlabel("Years of Experience")\r
ax1.set_ylabel("Salary (LPA)")\r
ax1.legend()\r
ax1.grid(True, linestyle=":", alpha=0.4)\r
\r
# 2. Multi-Class Clustering (3 Synthetic Customer Segments)\r
cluster_0 = np.random.randn(50, 2) + np.array([2, 2])\r
cluster_1 = np.random.randn(50, 2) + np.array([7, 8])\r
cluster_2 = np.random.randn(50, 2) + np.array([3, 10])\r
\r
ax2.scatter(cluster_0[:, 0], cluster_0[:, 1], color='#10b981', marker='o', s=50, label='Cohort 0 (Budget)', edgecolor='black')\r
ax2.scatter(cluster_1[:, 0], cluster_1[:, 1], color='#6366f1', marker='^', s=55, label='Cohort 1 (Premium)', edgecolor='black')\r
ax2.scatter(cluster_2[:, 0], cluster_2[:, 1], color='#f59e0b', marker='s', s=50, label='Cohort 2 (Tech-Savvy)', edgecolor='black')\r
\r
ax2.set_title("K-Means 3-Cluster Segmentation Scatter", fontweight='bold')\r
ax2.set_xlabel("Feature 1 (Spending Score)")\r
ax2.set_ylabel("Feature 2 (Engagement Frequency)")\r
ax2.legend()\r
ax2.grid(True, linestyle=":", alpha=0.4)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Trendline regression and 3-class cluster scatter plots constructed.")\r
`,J=`"""\r
=============================================================================\r
TOPIC 6: Scatter Plot with plt.scatter()\r
Script 03: Big Data Overplotting Solutions: Alpha vs Hexbin\r
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
section("1. Tackling Overplotting with 10,000 Data Points")\r
\r
np.random.seed(42)\r
n_large = 10000\r
x = np.random.randn(n_large)\r
y = 0.6 * x + np.random.randn(n_large) * 0.8\r
\r
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 4.5))\r
\r
# 1. High-Density Scatter with Low Alpha Transparency\r
ax1.scatter(x, y, color='#38bdf8', s=8, alpha=0.15, edgecolors='none')\r
ax1.set_title("1. Scatter with Low Alpha (alpha=0.15)", fontweight='bold')\r
ax1.set_xlabel("Feature X")\r
ax1.set_ylabel("Feature Y")\r
ax1.grid(True, linestyle=":", alpha=0.3)\r
\r
# 2. Hexagonal 2D Binning (ax.hexbin) - High performance for large datasets\r
hb = ax2.hexbin(x, y, gridsize=30, cmap='inferno', mincnt=1)\r
ax2.set_title("2. 2D Hexagonal Binning (ax.hexbin)", fontweight='bold')\r
ax2.set_xlabel("Feature X")\r
ax2.set_ylabel("Feature Y")\r
\r
cb = fig.colorbar(hb, ax=ax2)\r
cb.set_label("Sample Density Count in Hexagon", rotation=270, labelpad=15)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Overplotting tackled via alpha transparency and 2D hexagonal binning.")\r
`,O="MATPLOTLIB ESSENTIALS: TOPIC 6 NOTE\r\n=============================================================================\r\nTOPIC: Scatter Plots (plt.scatter / ax.scatter) & High-Dimensional Mapping\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. CORE FUNCTION SIGNATURE:\r\n   - `ax.scatter(x, y, s=None, c=None, marker=None, cmap=None, norm=None, vmin=None, vmax=None, alpha=None, linewidths=None, edgecolors=None, **kwargs)`\r\n   - Parameters:\r\n     * `s`: Marker area in points squared (`pt^2`). Can be scalar or array for 3rd continuous feature.\r\n     * `c`: Marker color. Can be a single color or array of values for 4th feature mapped through `cmap`.\r\n     * `cmap`: Colormap name (`'viridis'`, `'plasma'`, `'inferno'`, `'coolwarm'`).\r\n     * `edgecolors`: Border color around markers (e.g., `'black'`, `'none'`).\r\n\r\n2. ADDING COLORBARS:\r\n   - `scatter = ax.scatter(x, y, c=z, cmap='viridis')`\r\n   - `cbar = fig.colorbar(scatter, ax=ax)`\r\n   - `cbar.set_label(\"Feature Z Label\", rotation=270, labelpad=15)`\r\n\r\n3. FITTING REGRESSION TRENDLINES:\r\n   - Calculate polynomial slope & intercept: `slope, intercept = np.polyfit(x, y, deg=1)`\r\n   - Generate points: `x_line = np.linspace(x.min(), x.max(), 100)`\r\n   - Plot overlay: `ax.plot(x_line, slope * x_line + intercept, 'r--')`\r\n\r\n4. OVERPLOTTING MITIGATION STRATEGIES:\r\n   - Alpha transparency: Reduce `alpha` to `0.1` - `0.3` to reveal cluster density.\r\n   - Jittering: Add small Gaussian noise `np.random.normal(0, 0.05, len(x))` to discrete categorical points.\r\n   - Hexagonal 2D Binning: `ax.hexbin(x, y, gridsize=30, cmap='inferno')` aggregates dense data points into 2D hexagonal frequency bins.\r\n",b=[{id:1,question:"In `ax.scatter(x, y, s=size_array, c=color_array)`, what physical quantity does the parameter `s` specify?",options:["Marker radius in inches","Marker area in points squared (pt²)","Marker circumference in pixels","Marker opacity percentage"],correctAnswer:1,explanation:"In Matplotlib's `scatter()`, the `s` parameter defines the marker's area in points squared (`pt^2`), meaning doubling `s` doubles the visual area."},{id:2,question:"How do you attach an interactive/visual color scale legend (Colorbar) to a scatter plot colored by a continuous variable?",options:["ax.legend(colorbar=True)","fig.colorbar(scatter_artist, ax=ax)","plt.color_scale(scatter_artist)","ax.show_palette()"],correctAnswer:1,explanation:"`fig.colorbar(scatter_artist, ax=ax)` attaches a colorbar matching the colormap and normalization of the scatter plot artist."},{id:3,question:"When plotting 50,000 overlapping continuous points where dots blend into an uninterpretable solid block (overplotting), what is a superior Matplotlib 2D alternative?",options:["ax.hexbin(x, y, gridsize=30, cmap='inferno')","ax.plot(x, y, 'o')","ax.pie(x)","ax.bar(x, y)"],correctAnswer:0,explanation:"`ax.hexbin()` computes 2D hexagonal spatial histogram bins, mapping point density to color intensity and avoiding overplotting bottlenecks."},{id:4,question:"Which NumPy function is used alongside `ax.scatter()` to compute the slope and intercept for a linear trendline overlay?",options:["np.linear_model()","np.polyfit(x, y, 1)","np.trendline(x, y)","np.gradient(x, y)"],correctAnswer:1,explanation:"`np.polyfit(x, y, deg=1)` calculates the least-squares polynomial coefficients (slope and intercept) for a straight line."}];function te(){const[c,P]=a.useState("studio"),[d,q]=a.useState(1),[h,j]=a.useState(!1),[o,N]=a.useState("regression"),[n,L]=a.useState(.8),[x,E]=a.useState(6),[p,R]=a.useState(!0),[l,B]=a.useState(!0),[m,I]=a.useState(!0),[y,S]=a.useState({}),[u,w]=a.useState(!1),g={1:{name:"01_scatter_plots_and_marker_properties.py",code:Q,desc:"4D visualization mapping features to X, Y, Size (s), Color (c), and Colorbars"},2:{name:"02_multiclass_decision_boundaries_scatter.py",code:U,desc:"Classification clusters and OLS regression trendline fitting with np.polyfit"},3:{name:"03_handling_overplotting_alpha_and_hexbin.py",code:J,desc:"Overplotting solutions: transparency alpha tuning and 2D hexbinning"}},v=t=>{navigator.clipboard.writeText(t),j(!0),setTimeout(()=>j(!1),2e3)},$=(t,s)=>{S(r=>({...r,[t]:s}))},k=()=>{let t=0;return b.forEach(s=>{y[s.id]===s.correctAnswer&&t++}),t},H=[{x:80,y:175,beds:1,dist:30,color:"#3b82f6"},{x:120,y:160,beds:2,dist:25,color:"#06b6d4"},{x:150,y:140,beds:2,dist:20,color:"#10b981"},{x:190,y:130,beds:3,dist:18,color:"#10b981"},{x:230,y:110,beds:3,dist:15,color:"#84cc16"},{x:270,y:105,beds:4,dist:12,color:"#eab308"},{x:310,y:85,beds:4,dist:10,color:"#f97316"},{x:360,y:70,beds:5,dist:6,color:"#ef4444"},{x:410,y:55,beds:5,dist:4,color:"#ec4899"},{x:450,y:45,beds:6,dist:2,color:"#a855f7"},{x:160,y:155,beds:1,dist:28,color:"#3b82f6"},{x:210,y:125,beds:2,dist:22,color:"#06b6d4"},{x:290,y:95,beds:3,dist:14,color:"#84cc16"},{x:390,y:65,beds:4,dist:8,color:"#f97316"}],G=[{x:90,y:160,cluster:0,color:"#10b981",shape:"circle"},{x:110,y:175,cluster:0,color:"#10b981",shape:"circle"},{x:130,y:150,cluster:0,color:"#10b981",shape:"circle"},{x:100,y:140,cluster:0,color:"#10b981",shape:"circle"},{x:380,y:60,cluster:1,color:"#6366f1",shape:"triangle"},{x:410,y:80,cluster:1,color:"#6366f1",shape:"triangle"},{x:440,y:50,cluster:1,color:"#6366f1",shape:"triangle"},{x:390,y:95,cluster:1,color:"#6366f1",shape:"triangle"},{x:230,y:70,cluster:2,color:"#f59e0b",shape:"square"},{x:250,y:90,cluster:2,color:"#f59e0b",shape:"square"},{x:270,y:60,cluster:2,color:"#f59e0b",shape:"square"},{x:240,y:110,cluster:2,color:"#f59e0b",shape:"square"}];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-amber-900/40 via-orange-900/30 to-rose-900/40 border border-amber-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(W,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 6: Scatter Plot with plt.scatter()"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["Discover correlations, feature interactions, and cluster boundaries in continuous spaces. Master 4-dimensional visual mapping (X, Y, Size ",e.jsx("code",{className:"text-amber-300 font-mono",children:"s"}),", Color ",e.jsx("code",{className:"text-amber-300 font-mono",children:"c"}),"), colorbars, regression trendlines, and overplotting solutions like 2D ",e.jsx("code",{className:"text-amber-300 font-mono",children:"hexbin"}),"."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5",children:[e.jsx(T,{className:"w-3.5 h-3.5"})," 4D Scatter Mapping"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1.5",children:[e.jsx(Y,{className:"w-3.5 h-3.5"})," Trendline & Clustering"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-amber-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"When Sachin and Swadeep examined the Barrackpore real estate dataset, a simple 2D plot of SqFt vs Price missed the whole story. By encoding ',e.jsx("code",{className:"text-amber-300",children:"Bedrooms"})," into marker size ",e.jsx("code",{className:"text-amber-300 font-mono",children:"s=df['beds']*25"})," and ",e.jsx("code",{className:"text-amber-300",children:"Distance_to_Metro"})," into color ",e.jsx("code",{className:"text-amber-300 font-mono",children:"c=df['metro_dist']"}),' with a colormap, they spotted non-linear luxury clusters immediately!"']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Scatter Studio",icon:T},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:D},{id:"notes",label:"Revision Notes",icon:M},{id:"quiz",label:"MCQ Assessment",icon:z}].map(t=>{const s=t.icon;return e.jsxs("button",{onClick:()=>P(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${c===t.id?"border-amber-500 text-amber-400 bg-amber-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[c==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(V,{className:"text-amber-400 w-5 h-5"}),"Scatter Dimension Mapping"]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Dataset Scenario"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>N("regression"),className:`px-3 py-2.5 rounded-lg text-xs font-semibold border transition ${o==="regression"?"border-amber-500 bg-amber-950/60 text-amber-300 ring-1 ring-amber-500":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:"Housing Regression (4D)"}),e.jsx("button",{onClick:()=>N("clusters"),className:`px-3 py-2.5 rounded-lg text-xs font-semibold border transition ${o==="clusters"?"border-amber-500 bg-amber-950/60 text-amber-300 ring-1 ring-amber-500":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:"K-Means 3 Clusters"})]})]}),e.jsxs("div",{className:"space-y-3 pt-2",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"Opacity (alpha)"}),e.jsx("span",{className:"text-amber-400 font-mono",children:n})]}),e.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.1",value:n,onChange:t=>L(parseFloat(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"Base Marker Size"}),e.jsxs("span",{className:"text-amber-400 font-mono",children:[x," pt"]})]}),e.jsx("input",{type:"range",min:"3",max:"10",step:"1",value:x,onChange:t=>E(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500"})]})]}),o==="regression"?e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[e.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-300",children:"3rd Dim: Size by Bedrooms (s=...)"}),e.jsx("button",{onClick:()=>R(!p),className:`px-3 py-1 rounded text-xs font-bold transition ${p?"bg-amber-600 text-white":"bg-slate-800 text-slate-400"}`,children:p?"ON":"OFF"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-300",children:"4th Dim: Color by Metro Dist (c=...)"}),e.jsx("button",{onClick:()=>B(!l),className:`px-3 py-1 rounded text-xs font-bold transition ${l?"bg-amber-600 text-white":"bg-slate-800 text-slate-400"}`,children:l?"ON":"OFF"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-300",children:"OLS Regression Trendline"}),e.jsx("button",{onClick:()=>I(!m),className:`px-3 py-1 rounded text-xs font-bold transition ${m?"bg-amber-600 text-white":"bg-slate-800 text-slate-400"}`,children:m?"ON":"OFF"})]})]}):e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400",children:"Cluster scenario renders 3 distinct cohorts with differentiated geometric marker shapes (circles, squares, triangles) and cluster centroid colors."})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(X,{className:"w-4 h-4 text-amber-400"}),"Live Scatter Canvas"]}),e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-amber-300 border border-slate-800 capitalize",children:o==="regression"?"4D Feature Exploration":"3-Class Clustered Space"})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"50",y1:t,x2:"480",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"50",y1:"200",x2:"480",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),o==="regression"?e.jsxs(e.Fragment,{children:[m&&e.jsx("line",{x1:"70",y1:"180",x2:"460",y2:"40",stroke:"#ef4444",strokeWidth:"2.5",strokeDasharray:"5,5"}),H.map((t,s)=>{const r=p?x+t.beds*2:x+2,i=l?t.color:"#38bdf8";return e.jsx("circle",{cx:t.x,cy:t.y,r,fill:i,opacity:n,stroke:"#0f172a",strokeWidth:"1.2"},s)}),l&&e.jsxs("g",{children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"cbarGrad",x1:"0",y1:"1",x2:"0",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:"#3b82f6"}),e.jsx("stop",{offset:"50%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#ec4899"})]})}),e.jsx("rect",{x:"475",y:"40",width:"10",height:"150",fill:"url(#cbarGrad)",rx:"2",stroke:"#334155"}),e.jsx("text",{x:"495",y:"45",fill:"#cbd5e1",fontSize:"8",children:"Near (2km)"}),e.jsx("text",{x:"495",y:"190",fill:"#cbd5e1",fontSize:"8",children:"Far (30km)"})]}),e.jsx("text",{x:"265",y:"225",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Square Footage (sq ft)"}),e.jsx("text",{x:"20",y:"110",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 110)",children:"Price (Lakh INR)"})]}):e.jsxs(e.Fragment,{children:[G.map((t,s)=>{const r=x+4;return t.shape==="square"?e.jsx("rect",{x:t.x-r/2,y:t.y-r/2,width:r,height:r,fill:t.color,opacity:n,stroke:"#0f172a",strokeWidth:"1.2"},s):t.shape==="triangle"?e.jsx("polygon",{points:`${t.x},${t.y-r} ${t.x-r},${t.y+r/2} ${t.x+r},${t.y+r/2}`,fill:t.color,opacity:n,stroke:"#0f172a",strokeWidth:"1.2"},s):e.jsx("circle",{cx:t.x,cy:t.y,r:r/2,fill:t.color,opacity:n,stroke:"#0f172a",strokeWidth:"1.2"},s)}),e.jsxs("g",{children:[e.jsx("rect",{x:"330",y:"25",width:"145",height:"60",fill:"#0f172a",rx:"4",stroke:"#334155"}),e.jsx("circle",{cx:"345",cy:"38",r:"4",fill:"#10b981"}),e.jsx("text",{x:"358",y:"41",fill:"#cbd5e1",fontSize:"9",children:"Cohort 0 (Budget)"}),e.jsx("polygon",{points:"345,48 341,56 349,56",fill:"#6366f1"}),e.jsx("text",{x:"358",y:"55",fill:"#cbd5e1",fontSize:"9",children:"Cohort 1 (Premium)"}),e.jsx("rect",{x:"341",y:"62",width:"8",height:"8",fill:"#f59e0b"}),e.jsx("text",{x:"358",y:"69",fill:"#cbd5e1",fontSize:"9",children:"Cohort 2 (Tech)"})]}),e.jsx("text",{x:"265",y:"225",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Feature 1: Spending Score"}),e.jsx("text",{x:"20",y:"110",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",transform:"rotate(-90 20 110)",children:"Feature 2: Engagement Frequency"})]})]})})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(K,{className:"w-3.5 h-3.5 text-amber-400"}),"Python Matplotlib Code:"]}),e.jsx("pre",{className:"text-amber-300",children:o==="regression"?`scatter = ax.scatter(sqft, price, s=${p?"bedrooms * 25":"50"}, c=${l?"dist_to_metro":"'#38bdf8'"}, cmap='viridis', alpha=${n})
${l?`cbar = fig.colorbar(scatter, ax=ax); cbar.set_label('Distance to Metro (km)')
`:""}${m?`slope, intercept = np.polyfit(sqft, price, 1)
ax.plot(sqft, slope*sqft + intercept, 'r--', label='OLS Fit')
`:""}ax.legend()`:`ax.scatter(c0[:,0], c0[:,1], color='#10b981', marker='o', label='Cohort 0', alpha=${n})
ax.scatter(c1[:,0], c1[:,1], color='#6366f1', marker='^', label='Cohort 1', alpha=${n})
ax.scatter(c2[:,0], c2[:,1], color='#f59e0b', marker='s', label='Cohort 2', alpha=${n})
ax.legend()`})]})]})]})}),c==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(D,{className:"text-amber-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore 4D multi-feature mapping, regression overlays, and hexbin overplotting solutions."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>q(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${d===t?"bg-amber-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-amber-400",children:g[d].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:g[d].desc})]}),e.jsxs("button",{onClick:()=>v(g[d].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[h?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(F,{className:"w-3.5 h-3.5"}),h?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:g[d].code})})]}),c==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(M,{className:"text-amber-400 w-5 h-5"}),"Scatter Plot Technical Reference Notes"]}),e.jsxs("button",{onClick:()=>v(O),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[h?e.jsx(A,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(F,{className:"w-3.5 h-3.5"}),h?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:O})]}),c==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(z,{className:"text-amber-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of multi-dimensional scatter mapping, colorbars, and hexbinning."})]}),u&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-amber-950 border border-amber-500/40 text-amber-300 text-sm font-bold",children:["Score: ",k()," / ",b.length," (",Math.round(k()/b.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:b.map((t,s)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[s+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((r,i)=>{const C=y[t.id]===i,_=t.correctAnswer===i;let f="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return u?_?f="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":C&&!_&&(f="border-rose-500 bg-rose-950/40 text-rose-200"):C&&(f="border-amber-500 bg-amber-950/50 text-amber-200 ring-1 ring-amber-500"),e.jsx("button",{onClick:()=>!u&&$(t.id,i),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${f}`,children:r},i)})}),u&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-amber-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{S({}),w(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>w(!0),disabled:Object.keys(y).length<b.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-amber-600 text-white hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-amber-600/30",children:"Submit Quiz"})]})]})]})]})}export{te as default};
