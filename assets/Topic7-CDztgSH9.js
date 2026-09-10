import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as B,ck as T,L as H,r as k,F as A,aa as P,aM as W,d as $,aN as G,f as M,g as _}from"./vendor-icons-DFC0rBCP.js";const V=`"""\r
=============================================================================\r
TOPIC 7: Pie Chart with plt.pie()\r
Script 01: Slices, Explode Offsets, Autopct & Shadows\r
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
section("1. Classic Exploded Pie Chart for Class Balance Analysis")\r
\r
# Machine Learning Target Class Distribution in Fraud Detection Dataset\r
labels = ['Legitimate (Normal)', 'Card Fraud', 'Wire Fraud', 'Account Takeover']\r
counts = [8400, 450, 280, 170]\r
colors = ['#10b981', '#ef4444', '#f59e0b', '#8b5cf6']\r
\r
# Explode the fraud slices away from the main legitimate transactions\r
explode = (0, 0.12, 0.15, 0.20)\r
\r
fig, ax = plt.subplots(figsize=(7, 5))\r
\r
wedges, texts, autotexts = ax.pie(\r
    counts,\r
    explode=explode,\r
    labels=labels,\r
    colors=colors,\r
    autopct='%1.1f%%',\r
    pctdistance=0.75,\r
    startangle=140,\r
    shadow=True,\r
    wedgeprops={'edgecolor': '#0f172a', 'linewidth': 1.2}\r
)\r
\r
# Customizing percentage label font properties\r
for autotext in autotexts:\r
    autotext.set_color('white')\r
    autotext.set_fontsize(9)\r
    autotext.set_weight('bold')\r
\r
for text in texts:\r
    text.set_fontsize(9.5)\r
\r
ax.set_title("Target Class Imbalance in Fraud Detection", fontsize=12, fontweight='bold', pad=15)\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Exploded Pie chart generated with custom percentage formatting.")\r
`,K=`"""\r
=============================================================================\r
TOPIC 7: Pie Chart with plt.pie()\r
Script 02: Modern Donut Charts & Central KPI Overlays\r
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
section("1. Donut Chart with Center Circle Patch & KPI Label")\r
\r
platforms = ['Mobile App', 'Web Portal', 'API Integration', 'POS Terminals']\r
shares = [48, 26, 16, 10]\r
colors = ['#38bdf8', '#818cf8', '#c084fc', '#f472b6']\r
\r
fig, ax = plt.subplots(figsize=(7, 5))\r
\r
# Plot standard pie chart\r
wedges, texts, autotexts = ax.pie(\r
    shares,\r
    labels=platforms,\r
    colors=colors,\r
    autopct='%1.0f%%',\r
    pctdistance=0.82,\r
    startangle=90,\r
    wedgeprops=dict(width=0.35, edgecolor='#0f172a', linewidth=2)\r
)\r
\r
for at in autotexts:\r
    at.set_color('#ffffff')\r
    at.set_fontweight('bold')\r
\r
# Central Metric / KPI Annotation inside Donut hole\r
ax.text(\r
    0, 0,\r
    "TOTAL\\n1.2M\\nEvents",\r
    ha='center',\r
    va='center',\r
    fontsize=11,\r
    fontweight='bold',\r
    color='#38bdf8'\r
)\r
\r
ax.set_title("Coder & AccoTax Multi-Channel Traffic Mix", fontsize=12, fontweight='bold', pad=15)\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Modern Donut chart created using wedgeprops(width=0.35).")\r
`,U=`"""\r
=============================================================================\r
TOPIC 7: Pie Chart with plt.pie()\r
Script 03: Nested / Double Ring Donut Charts for Hierarchies\r
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
section("1. Nested Concentric Donut Rings")\r
\r
# Outer Ring: Specific Sub-models (e.g., ResNet, VGG, BERT, GPT, XGB, RF)\r
outer_counts = [20, 15, 25, 20, 12, 8]\r
outer_colors = ['#38bdf8', '#0284c7', '#a855f7', '#7e22ce', '#10b981', '#059669']\r
\r
# Inner Ring: Broad ML Paradigms (Vision, NLP, Tabular)\r
inner_counts = [35, 45, 20]\r
inner_colors = ['#0ea5e9', '#9333ea', '#10b981']\r
\r
fig, ax = plt.subplots(figsize=(7, 7))\r
\r
# Outer Ring (radius=1.0, width=0.3)\r
ax.pie(\r
    outer_counts,\r
    radius=1.0,\r
    colors=outer_colors,\r
    wedgeprops=dict(width=0.3, edgecolor='#0f172a', linewidth=1.5),\r
    startangle=90\r
)\r
\r
# Inner Ring (radius=0.7, width=0.3)\r
ax.pie(\r
    inner_counts,\r
    radius=0.7,\r
    colors=inner_colors,\r
    labels=['Computer Vision', 'NLP LLMs', 'Tabular ML'],\r
    labeldistance=0.45,\r
    rotatelabels=True,\r
    textprops=dict(color='white', fontsize=8, fontweight='bold', ha='center'),\r
    wedgeprops=dict(width=0.3, edgecolor='#0f172a', linewidth=1.5),\r
    startangle=90\r
)\r
\r
ax.set_title("Hierarchical ML Model Deployment Share", fontsize=12, fontweight='bold')\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Nested double-ring donut chart successfully constructed!")\r
`,D="MATPLOTLIB ESSENTIALS: TOPIC 7 NOTE\r\n=============================================================================\r\nTOPIC: Pie & Donut Charts (plt.pie, explode, autopct, nested rings)\r\nMENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r\n=============================================================================\r\n\r\n1. CORE FUNCTION SIGNATURE:\r\n   - `patches, texts, autotexts = ax.pie(x, explode=None, labels=None, colors=None, autopct=None, pctdistance=0.6, shadow=False, labeldistance=1.1, startangle=0, wedgeprops=None, **kwargs)`\r\n   - Parameters:\r\n     * `autopct`: String formatting template (e.g. `'%1.1f%%'`) or a callable function to render percentages.\r\n     * `explode`: Tuple of fractions specifying radial distance offsets for highlighting target slices (e.g. `(0, 0.1, 0)`).\r\n     * `startangle`: Angle (in degrees counter-clockwise from the +X axis) at which the first slice starts (commonly 90 or 140).\r\n     * `pctdistance`: Radial distance (0.0 to 1.0) where `autopct` percentage text is placed.\r\n\r\n2. CREATING DONUT CHARTS:\r\n   - Modern Technique: Set `wedgeprops=dict(width=0.35, edgecolor='w')` to carve out the center directly.\r\n   - Classic Patch Technique: Draw a circular patch at the origin:\r\n     ```python\r\n     centre_circle = plt.Circle((0,0), 0.70, fc='white')\r\n     ax.add_artist(centre_circle)\r\n     ```\r\n   - Center KPI Text: `ax.text(0, 0, \"KPI\", ha='center', va='center')`\r\n\r\n3. NESTED / CONCENTRIC DONUT CHARTS:\r\n   - Combine two `ax.pie()` calls with different `radius` parameters (e.g., Outer `radius=1.0`, Inner `radius=0.7`).\r\n\r\n4. BEST PRACTICE GUIDELINES IN MACHINE LEARNING:\r\n   - Use pie/donut charts strictly for 2 to 5 distinct categories summing to 100% (e.g. Class Balance, Platform Market Share).\r\n   - If there are > 6 categories or subtle fractional differences, always prefer a horizontal bar chart (`plt.barh()`) for precise human angle comparison.\r\n",d=[{id:1,question:"Which parameter in `plt.pie()` causes a specific slice to be pulled outward from the center for visual emphasis?",options:["detach","explode","offset_slice","pull"],correctAnswer:1,explanation:"`explode` takes a tuple/list of float offsets (e.g., `explode=(0, 0.1, 0)`) specifying how far each slice is offset radially from the center."},{id:2,question:"What is the cleanest modern way to transform a standard Matplotlib Pie chart into a hollow Donut chart?",options:["Passing `wedgeprops=dict(width=0.35)` to carve an inner hollow radius","Setting `pie_type='donut'`","Setting `hollow=True`","Using `plt.donut()`"],correctAnswer:0,explanation:"Setting `wedgeprops=dict(width=0.35)` specifies the radial width of each wedge, leaving the center hollow to create a clean Donut chart."},{id:3,question:"In `plt.pie()`, what does `autopct='%1.1f%%'` accomplish?",options:["Automatically scales data so it totals 100","Formats and prints the calculated percentage on each slice with 1 decimal place followed by a percent sign","Automatically chooses colors for the wedges","Enables interactive 3D rotation"],correctAnswer:1,explanation:"`autopct` uses standard Python string formatting (or a callable) to display percentages, where `%1.1f%%` outputs values like `45.2%`."},{id:4,question:"Why do data visualization best practices discourage using pie charts for datasets with more than 6-7 categories?",options:["Matplotlib crashes with more than 7 wedges","Human perception struggles to accurately compare angles and wedge areas of many thin slices, making bar charts far more readable","Pie charts do not support labels","Pie charts only work with integer numbers"],correctAnswer:1,explanation:"Human vision is significantly better at comparing linear lengths (bars) than subtle angle or area differences among multiple thin pie slices."}];function q(){const[o,I]=r.useState("studio"),[l,E]=r.useState(1),[x,g]=r.useState(!1),[a,w]=r.useState(!0),[i,L]=r.useState(55),[n,R]=r.useState(12),[c,O]=r.useState(90),[f,j]=r.useState({}),[p,N]=r.useState(!1),h={1:{name:"01_pie_charts_and_proportions.py",code:V,desc:"Slices, explode offsets, percentage formatting (autopct), and drop shadows"},2:{name:"02_donut_charts_and_center_circles.py",code:K,desc:"Modern donut charts with wedgeprops width carving and central KPI metric overlays"},3:{name:"03_nested_pie_charts_hierarchical.py",code:U,desc:"Nested concentric double-ring donut charts for hierarchical data structures"}},y=t=>{navigator.clipboard.writeText(t),g(!0),setTimeout(()=>g(!1),2e3)},z=(t,s)=>{j(b=>({...b,[t]:s}))},v=()=>{let t=0;return d.forEach(s=>{f[s.id]===s.correctAnswer&&t++}),t},F=[{label:"Normal (Legitimate)",pct:68,color:"#10b981",explode:0},{label:"Card Fraud",pct:18,color:"#ef4444",explode:n},{label:"Wire Fraud",pct:9,color:"#f59e0b",explode:n*.7},{label:"Account Takeover",pct:5,color:"#8b5cf6",explode:n*.5}];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-rose-900/40 via-pink-900/30 to-purple-900/40 border border-rose-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(B,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 7: Pie & Donut Charts with plt.pie()"}),e.jsxs("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:["Master categorical proportion and class balance visualization in machine learning. Learn slice explosion (",e.jsx("code",{className:"text-rose-300 font-mono",children:"explode"}),"), precision percentage formatting (",e.jsx("code",{className:"text-rose-300 font-mono",children:"autopct"}),"), modern Donut charts with central KPI annotations, and nested double-ring hierarchies."]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1.5",children:[e.jsx(T,{className:"w-3.5 h-3.5"})," plt.pie()"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5",children:[e.jsx(H,{className:"w-3.5 h-3.5"})," Donut & Nested"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-rose-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsxs("p",{className:"text-slate-300 mt-1",children:['"When Susmita and Swadeep built an anomaly detection pipeline for banking fraud, legitimate records were 98% and fraud was 2%. A plain pie chart made the fraud slice almost invisible. By exploding the target slice with ',e.jsx("code",{className:"text-rose-300 font-mono",children:"explode=(0, 0.15)"}),' and turning it into a Donut chart with the total count in the center, the class imbalance was instantly clear!"']})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Pie & Donut Studio",icon:T},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:k},{id:"notes",label:"Revision Notes",icon:A},{id:"quiz",label:"MCQ Assessment",icon:P}].map(t=>{const s=t.icon;return e.jsxs("button",{onClick:()=>I(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${o===t.id?"border-rose-500 text-rose-400 bg-rose-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[o==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(W,{className:"text-rose-400 w-5 h-5"}),"Wedge & Geometry Configurator"]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Chart Style Geometry"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>w(!1),className:`px-3 py-2.5 rounded-lg text-xs font-semibold border transition ${a?"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700":"border-rose-500 bg-rose-950/60 text-rose-300 ring-1 ring-rose-500"}`,children:"Solid Pie Chart"}),e.jsx("button",{onClick:()=>w(!0),className:`px-3 py-2.5 rounded-lg text-xs font-semibold border transition ${a?"border-rose-500 bg-rose-950/60 text-rose-300 ring-1 ring-rose-500":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:"Modern Donut (wedgeprops)"})]})]}),e.jsxs("div",{className:"space-y-3 pt-2",children:[a&&e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"Hole Radius (Center Cutout)"}),e.jsxs("span",{className:"text-rose-400 font-mono",children:[i,"%"]})]}),e.jsx("input",{type:"range",min:"30",max:"75",step:"5",value:i,onChange:t=>L(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-rose-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"Target Slice Explode Offset"}),e.jsx("span",{className:"text-rose-400 font-mono",children:(n/100).toFixed(2)})]}),e.jsx("input",{type:"range",min:"0",max:"30",step:"2",value:n,onChange:t=>R(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-rose-500"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300 mb-1",children:[e.jsx("span",{children:"startangle (Degrees)"}),e.jsxs("span",{className:"text-rose-400 font-mono",children:[c,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"15",value:c,onChange:t=>O(parseInt(t.target.value)),className:"w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-rose-500"})]})]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx($,{className:"w-4 h-4 text-rose-400"}),"Live Pie/Donut Visual Canvas"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-rose-300 border border-slate-800",children:["startangle=",c,"° | ",a?`width=${(100-i)/100}`:"solid"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[e.jsxs("g",{transform:`rotate(${c-90} 180 125)`,children:[e.jsx("path",{d:"M 180 125 L 180 35 A 90 90 0 1 1 97 160 Z",fill:"#10b981",stroke:"#0f172a",strokeWidth:"2"}),e.jsx("g",{transform:`translate(${n*.8}, ${n*.8})`,children:e.jsx("path",{d:"M 180 125 L 97 160 A 90 90 0 0 1 95 85 Z",fill:"#ef4444",stroke:"#0f172a",strokeWidth:"2"})}),e.jsx("path",{d:"M 180 125 L 95 85 A 90 90 0 0 1 135 45 Z",fill:"#f59e0b",stroke:"#0f172a",strokeWidth:"2"}),e.jsx("path",{d:"M 180 125 L 135 45 A 90 90 0 0 1 180 35 Z",fill:"#8b5cf6",stroke:"#0f172a",strokeWidth:"2"}),a&&e.jsx("circle",{cx:"180",cy:"125",r:i*.9,fill:"#0b0f19",stroke:"#1e293b",strokeWidth:"2"})]}),a&&e.jsxs("g",{children:[e.jsx("text",{x:"180",y:"118",fill:"#f8fafc",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"9,300"}),e.jsx("text",{x:"180",y:"134",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Total Trans"})]}),e.jsxs("g",{transform:"translate(320, 45)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"150",fill:"#0f172a",rx:"6",stroke:"#334155"}),e.jsx("text",{x:"15",y:"22",fill:"#f8fafc",fontSize:"11",fontWeight:"bold",children:"Class Breakdown"}),F.map((t,s)=>e.jsxs("g",{transform:`translate(15, ${38+s*28})`,children:[e.jsx("rect",{x:"0",y:"0",width:"12",height:"12",fill:t.color,rx:"2"}),e.jsxs("text",{x:"20",y:"10",fill:"#cbd5e1",fontSize:"9.5",children:[t.label," (",t.pct,"%)"]})]},s))]})]})})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(G,{className:"w-3.5 h-3.5 text-rose-400"}),"Generated Matplotlib Python Code:"]}),e.jsx("pre",{className:"text-rose-300",children:`explode = (0, ${(n/100).toFixed(2)}, 0, 0)
wedges, texts, autotexts = ax.pie(
    counts,
    explode=explode,
    labels=labels,
    colors=colors,
    autopct='%1.1f%%',
    startangle=${c}${a?`,
    wedgeprops=dict(width=${((100-i)/100).toFixed(2)}, edgecolor='#0f172a', linewidth=2)`:""}
)
${a?`ax.text(0, 0, 'TOTAL\\n9.3k', ha='center', va='center', fontweight='bold')
`:""}ax.set_title("Fraud Class Distribution")
plt.show()`})]})]})]})}),o==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(k,{className:"text-rose-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore pie chart explosion, modern donut wedgeprops, and nested hierarchical rings."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>E(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${l===t?"bg-rose-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-rose-400",children:h[l].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:h[l].desc})]}),e.jsxs("button",{onClick:()=>y(h[l].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[x?e.jsx(M,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),x?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:h[l].code})})]}),o==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(A,{className:"text-rose-400 w-5 h-5"}),"Pie & Donut Chart Technical Notes"]}),e.jsxs("button",{onClick:()=>y(D),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[x?e.jsx(M,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(_,{className:"w-3.5 h-3.5"}),x?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:D})]}),o==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(P,{className:"text-rose-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of pie chart parameters, slice explosion, and donut charts."})]}),p&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-rose-950 border border-rose-500/40 text-rose-300 text-sm font-bold",children:["Score: ",v()," / ",d.length," (",Math.round(v()/d.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:d.map((t,s)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[s+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((b,u)=>{const C=f[t.id]===u,S=t.correctAnswer===u;let m="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return p?S?m="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":C&&!S&&(m="border-rose-500 bg-rose-950/40 text-rose-200"):C&&(m="border-rose-500 bg-rose-950/50 text-rose-200 ring-1 ring-rose-500"),e.jsx("button",{onClick:()=>!p&&z(t.id,u),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${m}`,children:b},u)})}),p&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-rose-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{j({}),N(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>N(!0),disabled:Object.keys(f).length<d.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-rose-600 text-white hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-rose-600/30",children:"Submit Quiz"})]})]})]})]})}export{q as default};
