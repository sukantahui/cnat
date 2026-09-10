import{b as n,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{S as L,a4 as k,a7 as D,r as S,F as v,aa as N,aM as R,d as I,aN as W,f as M,g as T}from"./vendor-icons-DFC0rBCP.js";const B=`"""\r
=============================================================================\r
TOPIC 12: Worked Example 1: Plotting Student Marks\r
Script 01: Multi-Subject Grouped Benchmark Comparison\r
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
section("1. Multi-Subject Academic Benchmark Comparison")\r
\r
students = ['Debangshu', 'Susmita', 'Swadeep', 'Tuhina', 'Sachin', 'Mahima', 'Abhronila']\r
python_marks = [88, 95, 74, 92, 85, 90, 89]\r
ml_marks     = [84, 98, 70, 94, 88, 92, 91]\r
sql_marks    = [90, 92, 82, 89, 84, 88, 86]\r
\r
x = np.arange(len(students))\r
width = 0.26\r
\r
fig, ax = plt.subplots(figsize=(12, 5))\r
\r
rects1 = ax.bar(x - width, python_marks, width, label='Python Core', color='#0284c7', edgecolor='#0f172a')\r
rects2 = ax.bar(x,         ml_marks,     width, label='Machine Learning', color='#10b981', edgecolor='#0f172a')\r
rects3 = ax.bar(x + width, sql_marks,    width, label='SQL & Data Eng', color='#f59e0b', edgecolor='#0f172a')\r
\r
ax.set_title("Coder & AccoTax Barrackpore: Student Subject Performance Benchmark", fontsize=13, fontweight='bold', pad=15)\r
ax.set_ylabel("Marks Obtained (%)", fontsize=10)\r
ax.set_xticks(x)\r
ax.set_xticklabels(students, fontsize=10, fontweight='semibold')\r
ax.set_ylim(0, 115)\r
ax.axhline(75, color='#ef4444', linestyle=':', label='Distinction Threshold (75%)')\r
ax.legend(loc='upper right', framealpha=0.9)\r
ax.grid(axis='y', linestyle='--', alpha=0.4)\r
\r
# Value annotations\r
ax.bar_label(rects1, padding=2, fontsize=8)\r
ax.bar_label(rects2, padding=2, fontsize=8)\r
ax.bar_label(rects3, padding=2, fontsize=8)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Student multi-subject benchmark chart generated successfully.")\r
`,O=`"""\r
=============================================================================\r
TOPIC 12: Worked Example 1: Plotting Student Marks\r
Script 02: Mock Test Progression & Trajectory Curves\r
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
section("1. Student Score Trajectory Across 6 Consecutive Mock Tests")\r
\r
mock_tests = ['Mock 1', 'Mock 2', 'Mock 3', 'Mock 4', 'Mock 5', 'Mock 6']\r
\r
# Progress of 4 sample students\r
debangshu = [68, 74, 80, 84, 86, 91]\r
susmita   = [82, 85, 90, 92, 95, 98]\r
swadeep   = [55, 62, 68, 72, 75, 82]\r
tuhina    = [78, 82, 86, 89, 93, 95]\r
\r
fig, ax = plt.subplots(figsize=(9, 5))\r
\r
ax.plot(mock_tests, debangshu, marker='o', lw=2.5, color='#0284c7', label='Debangshu (Steady Growth)')\r
ax.plot(mock_tests, susmita,   marker='s', lw=2.5, color='#10b981', label='Susmita (Top Performer)')\r
ax.plot(mock_tests, swadeep,   marker='^', lw=2.5, color='#f59e0b', label='Swadeep (Most Improved +27%)')\r
ax.plot(mock_tests, tuhina,    marker='d', lw=2.5, color='#ec4899', label='Tuhina (Consistent Distinction)')\r
\r
ax.set_title("Student Learning Trajectory Across ML Mock Tests", fontsize=12, fontweight='bold', pad=12)\r
ax.set_xlabel("Mock Test Series")\r
ax.set_ylabel("Score (%)")\r
ax.set_ylim(50, 105)\r
ax.axhline(80, color='#64748b', linestyle='--', alpha=0.6, label='Distinction Benchmark (80%)')\r
ax.legend(loc='lower right', frameon=True)\r
ax.grid(True, linestyle=":", alpha=0.5)\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Progression timeline chart successfully rendered.")\r
`,G=`"""\r
=============================================================================\r
TOPIC 12: Worked Example 1: Plotting Student Marks\r
Script 03: Radar / Spider Competency Assessment in Polar Coordinates\r
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
section("1. Radar Spider Chart in Polar Projection (subplot_kw=dict(polar=True))")\r
\r
categories = ['NumPy & Math', 'Pandas Cleaning', 'Matplotlib EDA', 'Scikit-Learn ML', 'Feature Eng', 'Model Tuning']\r
N = len(categories)\r
\r
# Competency marks for Susmita vs Swadeep\r
susmita_scores = [95, 98, 92, 96, 90, 94]\r
swadeep_scores = [75, 82, 88, 79, 85, 80]\r
\r
# Compute angle for each category (closing the polygon by repeating first value)\r
angles = [n / float(N) * 2 * np.pi for n in range(N)]\r
angles += angles[:1]\r
\r
susmita_scores += susmita_scores[:1]\r
swadeep_scores += swadeep_scores[:1]\r
\r
fig, ax = plt.subplots(figsize=(7, 7), subplot_kw=dict(polar=True))\r
\r
# Draw category lines & labels\r
plt.xticks(angles[:-1], categories, color='#cbd5e1', size=9, fontweight='bold')\r
ax.set_rlabel_position(0)\r
plt.yticks([40, 60, 80, 100], ["40%", "60%", "80%", "100%"], color="#94a3b8", size=8)\r
plt.ylim(0, 100)\r
\r
# Plot Susmita\r
ax.plot(angles, susmita_scores, color='#10b981', linewidth=2, linestyle='solid', label='Susmita (Expert)')\r
ax.fill(angles, susmita_scores, color='#10b981', alpha=0.25)\r
\r
# Plot Swadeep\r
ax.plot(angles, swadeep_scores, color='#f59e0b', linewidth=2, linestyle='solid', label='Swadeep (Emerging)')\r
ax.fill(angles, swadeep_scores, color='#f59e0b', alpha=0.25)\r
\r
plt.title("Student Skillset Radar Assessment", size=13, color='#f8fafc', y=1.08, fontweight='bold')\r
plt.legend(loc='upper right', bbox_to_anchor=(0.1, 0.1))\r
\r
plt.tight_layout()\r
plt.close(fig)\r
\r
print("✓ Radar / Spider chart rendered in polar coordinates.")\r
`,_=`MATPLOTLIB ESSENTIALS: TOPIC 12 NOTE\r
=============================================================================\r
TOPIC: Worked Example 1 - Academic Performance & Student Marks Analysis\r
MENTOR: Sukanta Hui | Coder & AccoTax (Barrackpore)\r
=============================================================================\r
\r
1. PEDAGOGICAL CONTEXT:\r
   - Case study tracking students at Coder & AccoTax Barrackpore: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila.\r
   - Core visual objectives:\r
     * Cross-subject comparison across cohorts (Grouped Bars).\r
     * Score growth trajectory over multiple mock exams (Multi-series line plot).\r
     * Multi-skill competency profiling (Polar Spider/Radar plot).\r
\r
2. GROUPED MULTI-SUBJECT ARCHITECTURE:\r
   - Calculate numeric centers: \`x = np.arange(len(students))\`\r
   - Symmetric offsets: \`x - width\`, \`x\`, \`x + width\`\r
   - Explicit axis tick binding: \`ax.set_xticks(x); ax.set_xticklabels(students)\`\r
   - Annotation with \`ax.bar_label(rects, padding=2)\`\r
\r
3. RADAR / SPIDER PLOT IMPLEMENTATION:\r
   - Uses polar projection: \`fig, ax = plt.subplots(subplot_kw=dict(polar=True))\`\r
   - Angles generation: \`angles = [n / N * 2 * np.pi for n in range(N)]\`\r
   - Closing the loop: Append \`angles[:1]\` and \`scores[:1]\` so the line polygon connects back to the start.\r
   - Fill polygon: \`ax.fill(angles, scores, alpha=0.25)\`\r
\r
4. DECISION INSIGHTS FOR INSTRUCTORS:\r
   - Grouped bars identify subjects needing remedial sessions.\r
   - Line plots identify high velocity vs plateauing students.\r
   - Radar charts provide holistic student diagnostic profiles.\r
`,x=[{id:1,question:"When creating a Radar (Spider) chart in Matplotlib, which projection argument must be passed to `plt.subplots()`?",options:["subplot_kw=dict(polar=True)","projection='radar'","polar_mode=True","chart_type='spider'"],correctAnswer:0,explanation:"Radar charts in Matplotlib are constructed on a polar coordinate system by passing `subplot_kw=dict(polar=True)`."},{id:2,question:"Why must the first score and angle be appended to the end of the arrays (`scores += scores[:1]`) when drawing a Radar plot?",options:["To increase the average score","To close the perimeter polygon loop back to the initial category vertex","To prevent division by zero","To enable 3D rendering"],correctAnswer:1,explanation:"Appending the first vertex coordinates to the end of the list ensures the line and shaded fill complete a full 360-degree closed polygon."},{id:3,question:"In a 3-subject grouped bar chart with bar width = 0.25, what are the respective horizontal offsets applied to array `x` for the three bars?",options:["`x - 0.25`, `x`, `x + 0.25`","`x - 1`, `x`, `x + 1`","`x / 3`, `x / 2`, `x`","`x`, `x + 0.5`, `x + 1.0`"],correctAnswer:0,explanation:"Placing the middle bar at `x`, the left bar at `x - width`, and the right bar at `x + width` creates a symmetrically grouped cluster."},{id:4,question:"Which visual element is best suited to denote an academic pass/fail or distinction benchmark (e.g. 75%) across all students?",options:["ax.axhline(75, color='red', linestyle='--')","ax.plot(75, 75)","plt.grid(75)","ax.set_ylim(75)"],correctAnswer:0,explanation:"`ax.axhline(75, linestyle='--')` draws a clean horizontal benchmark threshold across the full width of the Axes."}];function H(){const[o,C]=n.useState("studio"),[i,A]=n.useState(1),[p,g]=n.useState(!1),[r,P]=n.useState("grouped"),[u,f]=n.useState({}),[m,y]=n.useState(!1),h={1:{name:"01_student_marks_grouped_bar.py",code:B,desc:"Multi-subject grouped bar benchmark comparison across student cohorts"},2:{name:"02_student_progress_timeline_and_ranking.py",code:O,desc:"Mock test score progression and growth trajectory curves"},3:{name:"03_radar_spider_competency_chart.py",code:G,desc:"Polar coordinate spider/radar assessment for multi-skill evaluations"}},j=t=>{navigator.clipboard.writeText(t),g(!0),setTimeout(()=>g(!1),2e3)},z=(t,s)=>{f(a=>({...a,[t]:s}))},w=()=>{let t=0;return x.forEach(s=>{u[s.id]===s.correctAnswer&&t++}),t},E=[{name:"Debangshu",py:88,ml:84,sql:90},{name:"Susmita",py:95,ml:98,sql:92},{name:"Swadeep",py:74,ml:70,sql:82},{name:"Tuhina",py:92,ml:94,sql:89},{name:"Sachin",py:85,ml:88,sql:84}];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-7xl mx-auto mb-8 bg-gradient-to-r from-emerald-900/40 via-teal-900/30 to-blue-900/40 border border-emerald-700/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-1",children:[e.jsx(L,{className:"w-4 h-4"})," Machine Learning Visual Foundations • Segment 009 Module 003"]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Topic 12: Worked Example 1 — Plotting Student Marks"}),e.jsx("p",{className:"text-slate-300 mt-2 text-base max-w-3xl",children:"End-to-end practical case study from Coder & AccoTax (Barrackpore). Compare student cohorts across Python, ML, and SQL using grouped bar benchmarks, analyze mock test progression curves, and build polar radar/spider competency profiles."})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5",children:[e.jsx(k,{className:"w-3.5 h-3.5"})," Case Study 01"]}),e.jsxs("span",{className:"px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5",children:[e.jsx(D,{className:"w-3.5 h-3.5"})," Performance Analytics"]})]})]}),e.jsxs("div",{className:"mt-6 bg-slate-900/70 border border-slate-700/50 rounded-xl p-4 flex items-start gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white shrink-0 shadow-md",children:"SH"}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold text-emerald-300",children:"Sukanta Hui (Coder & AccoTax, Barrackpore):"}),e.jsx("p",{className:"text-slate-300 mt-1",children:'"In our Barrackpore classroom, we evaluate students across multiple dimensions: raw subject benchmark scores, test-over-test velocity, and multi-skill competency webs. This worked example demonstrates how to synthesize these three distinct perspectives into production-grade Matplotlib figures!"'})]})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto mb-6",children:e.jsx("div",{className:"flex border-b border-slate-800 space-x-2",children:[{id:"studio",label:"Interactive Academic Analytics Studio",icon:k},{id:"lab",label:"Python Code Lab (3 Scripts)",icon:S},{id:"notes",label:"Revision Notes",icon:v},{id:"quiz",label:"MCQ Assessment",icon:N}].map(t=>{const s=t.icon;return e.jsxs("button",{onClick:()=>C(t.id),className:`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px rounded-t-lg ${o===t.id?"border-emerald-500 text-emerald-400 bg-emerald-950/30":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"}`,children:[e.jsx(s,{className:"w-4 h-4"}),t.label]},t.id)})})}),e.jsxs("div",{className:"max-w-7xl mx-auto",children:[o==="studio"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(R,{className:"text-emerald-400 w-5 h-5"}),"Analytics Perspective"]}),e.jsx("div",{className:"space-y-2.5",children:[{id:"grouped",title:"1. Grouped Subject Benchmark",desc:"Python vs ML vs SQL across all students"},{id:"timeline",title:"2. Score Growth Trajectory",desc:"6 Mock tests showing learning acceleration"},{id:"radar",title:"3. Polar Radar Competency Web",desc:"6-Skill diagnostic profile (Susmita vs Swadeep)"}].map(t=>e.jsxs("button",{onClick:()=>P(t.id),className:`w-full text-left p-3.5 rounded-xl border transition ${r===t.id?"border-emerald-500 bg-emerald-950/60 text-emerald-200 ring-1 ring-emerald-500 shadow-md":"border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("div",{className:"font-semibold text-white text-xs",children:t.title}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-0.5",children:t.desc})]},t.id))}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300",children:[e.jsx("strong",{className:"text-emerald-300 block mb-1",children:"Pedagogical Insight:"}),r==="grouped"&&"Grouped bars highlight that while Susmita leads overall with 98% in ML, Swadeep excels in SQL (82%) despite needing support in ML.",r==="timeline"&&"The trajectory curve highlights Swadeep's steep +27% learning curve from Mock 1 (55%) to Mock 6 (82%).",r==="radar"&&"The polar radar chart reveals Susmita's balanced mastery across all 6 data science domains."]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(I,{className:"w-4 h-4 text-emerald-400"}),"Live Educational Dashboard"]}),e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-emerald-300 border border-slate-800 uppercase",children:["View: ",r]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center",children:[r==="grouped"&&e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"45",y1:t,x2:"490",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"45",y1:"72",x2:"490",y2:"72",stroke:"#ef4444",strokeDasharray:"4,4",strokeWidth:"1.2"}),e.jsx("text",{x:"480",y:"66",fill:"#ef4444",fontSize:"8",textAnchor:"end",children:"75% Distinction"}),e.jsx("line",{x1:"45",y1:"200",x2:"490",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"45",y1:"20",x2:"45",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),E.map((t,s)=>{const a=75+s*85,l=t.py/100*170,d=t.ml/100*170,c=t.sql/100*170;return e.jsxs("g",{children:[e.jsx("rect",{x:a-24,y:200-l,width:"15",height:l,fill:"#0284c7",rx:"2"}),e.jsx("rect",{x:a-7,y:200-d,width:"15",height:d,fill:"#10b981",rx:"2"}),e.jsx("rect",{x:a+10,y:200-c,width:"15",height:c,fill:"#f59e0b",rx:"2"}),e.jsx("text",{x:a,y:"215",fill:"#cbd5e1",fontSize:"9",textAnchor:"middle",children:t.name})]},s)}),e.jsx("rect",{x:"330",y:"20",width:"150",height:"35",fill:"#0f172a",rx:"4",stroke:"#334155"}),e.jsx("rect",{x:"338",y:"27",width:"8",height:"8",fill:"#0284c7"}),e.jsx("text",{x:"350",y:"34",fill:"#cbd5e1",fontSize:"8",children:"Python"}),e.jsx("rect",{x:"385",y:"27",width:"8",height:"8",fill:"#10b981"}),e.jsx("text",{x:"397",y:"34",fill:"#cbd5e1",fontSize:"8",children:"ML"}),e.jsx("rect",{x:"425",y:"27",width:"8",height:"8",fill:"#f59e0b"}),e.jsx("text",{x:"437",y:"34",fill:"#cbd5e1",fontSize:"8",children:"SQL"})]}),r==="timeline"&&e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[50,100,150,200].map(t=>e.jsx("line",{x1:"45",y1:t,x2:"490",y2:t,stroke:"#1e293b",strokeDasharray:"3,3"},t)),e.jsx("line",{x1:"45",y1:"200",x2:"490",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("line",{x1:"45",y1:"20",x2:"45",y2:"200",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("polyline",{fill:"none",stroke:"#10b981",strokeWidth:"2.5",points:"70,60 145,55 225,45 305,40 385,30 465,24"}),e.jsx("polyline",{fill:"none",stroke:"#f59e0b",strokeWidth:"2.5",strokeDasharray:"4,4",points:"70,120 145,105 225,90 305,80 385,72 465,58"}),e.jsx("polyline",{fill:"none",stroke:"#0284c7",strokeWidth:"2",points:"70,95 145,85 225,72 305,65 385,60 465,48"}),["M1","M2","M3","M4","M5","M6"].map((t,s)=>e.jsx("text",{x:70+s*79,y:"215",fill:"#cbd5e1",fontSize:"9",textAnchor:"middle",children:t},s)),e.jsx("rect",{x:"320",y:"80",width:"160",height:"55",fill:"#0f172a",rx:"4",stroke:"#334155"}),e.jsx("line",{x1:"330",y1:"92",x2:"350",y2:"92",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"355",y:"95",fill:"#cbd5e1",fontSize:"8.5",children:"Susmita (Leader)"}),e.jsx("line",{x1:"330",y1:"108",x2:"350",y2:"108",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"3,3"}),e.jsx("text",{x:"355",y:"111",fill:"#cbd5e1",fontSize:"8.5",children:"Swadeep (+27% Growth)"}),e.jsx("line",{x1:"330",y1:"124",x2:"350",y2:"124",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"355",y:"127",fill:"#cbd5e1",fontSize:"8.5",children:"Debangshu (Steady)"})]}),r==="radar"&&e.jsxs("svg",{viewBox:"0 0 520 250",className:"w-full max-w-lg h-56",children:[[25,50,75,95].map(t=>e.jsx("circle",{cx:"260",cy:"125",r:t,fill:"none",stroke:"#334155",strokeDasharray:"3,3"},t)),[0,60,120,180,240,300].map(t=>{const s=t*Math.PI/180;return e.jsx("line",{x1:"260",y1:"125",x2:260+95*Math.cos(s),y2:125+95*Math.sin(s),stroke:"#475569"},t)}),e.jsx("polygon",{points:"350,125 305,200 215,200 170,125 215,50 305,50",fill:"#10b981",opacity:"0.3",stroke:"#10b981",strokeWidth:"2"}),e.jsx("polygon",{points:"335,125 295,185 230,185 190,125 230,65 295,65",fill:"#f59e0b",opacity:"0.3",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"365",y:"128",fill:"#cbd5e1",fontSize:"8",children:"Python Core"}),e.jsx("text",{x:"315",y:"215",fill:"#cbd5e1",fontSize:"8",children:"Pandas EDA"}),e.jsx("text",{x:"205",y:"215",fill:"#cbd5e1",fontSize:"8",children:"Scikit-Learn"}),e.jsx("text",{x:"130",y:"128",fill:"#cbd5e1",fontSize:"8",children:"Math/Stats"}),e.jsx("text",{x:"205",y:"42",fill:"#cbd5e1",fontSize:"8",children:"Feature Eng"}),e.jsx("text",{x:"315",y:"42",fill:"#cbd5e1",fontSize:"8",children:"Model Tuning"})]})]})]}),e.jsxs("div",{className:"mt-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 text-[11px] mb-1 font-semibold flex items-center gap-1",children:[e.jsx(W,{className:"w-3.5 h-3.5 text-emerald-400"}),"Python Matplotlib Code:"]}),e.jsx("pre",{className:"text-emerald-300",children:r==="grouped"?`rects1 = ax.bar(x - 0.26, python_marks, 0.26, label='Python')
rects2 = ax.bar(x, ml_marks, 0.26, label='ML')
rects3 = ax.bar(x + 0.26, sql_marks, 0.26, label='SQL')
ax.set_xticks(x); ax.set_xticklabels(students)
ax.axhline(75, color='r', linestyle=':', label='Distinction')`:r==="timeline"?`for name, scores in student_series.items():
    ax.plot(mock_tests, scores, marker='o', lw=2.5, label=name)
ax.set_ylim(50, 100); ax.legend()`:`fig, ax = plt.subplots(subplot_kw=dict(polar=True))
ax.plot(angles, susmita_scores, color='#10b981', label='Susmita')
ax.fill(angles, susmita_scores, color='#10b981', alpha=0.25)`})]})]})]})}),o==="lab"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(S,{className:"text-emerald-400 w-5 h-5"}),"Python Multi-Script Visualization Laboratory"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Explore multi-subject benchmarks, trajectory timelines, and polar radar competency webs."})]}),e.jsx("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 gap-1",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>A(t),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${i===t?"bg-emerald-600 text-white shadow-md":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:["Script 0",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-emerald-400",children:h[i].name}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:h[i].desc})]}),e.jsxs("button",{onClick:()=>j(h[i].code),className:"self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[p?e.jsx(M,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(T,{className:"w-3.5 h-3.5"}),p?"Copied!":"Copy Script"]})]}),e.jsx("div",{className:"relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950",children:e.jsx("pre",{className:"p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[500px]",children:h[i].code})})]}),o==="notes"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(v,{className:"text-emerald-400 w-5 h-5"}),"Case Study 1: Educational Analytics Notes"]}),e.jsxs("button",{onClick:()=>j(_),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition",children:[p?e.jsx(M,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(T,{className:"w-3.5 h-3.5"}),p?"Copied Notes!":"Copy Notes"]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed",children:_})]}),o==="quiz"&&e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx(N,{className:"text-emerald-400 w-5 h-5"}),"Knowledge Verification Quiz"]}),e.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Test your understanding of grouped benchmark charts and polar radar plots."})]}),m&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-sm font-bold",children:["Score: ",w()," / ",x.length," (",Math.round(w()/x.length*100),"%)"]})]}),e.jsx("div",{className:"space-y-6",children:x.map((t,s)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"text-sm font-semibold text-white mb-3",children:[s+1,". ",t.question]}),e.jsx("div",{className:"space-y-2",children:t.options.map((a,l)=>{const d=u[t.id]===l,c=t.correctAnswer===l;let b="border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700";return m?c?b="border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold":d&&!c&&(b="border-rose-500 bg-rose-950/40 text-rose-200"):d&&(b="border-emerald-500 bg-emerald-950/50 text-emerald-200 ring-1 ring-emerald-500"),e.jsx("button",{onClick:()=>!m&&z(t.id,l),className:`w-full text-left p-3 rounded-lg text-xs border transition-all ${b}`,children:a},l)})}),m&&e.jsxs("div",{className:"mt-3 p-3 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[e.jsx("strong",{className:"text-emerald-300",children:"Explanation:"})," ",t.explanation]})]},t.id))}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{f({}),y(!1)},className:"px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition",children:"Reset"}),e.jsx("button",{onClick:()=>y(!0),disabled:Object.keys(u).length<x.length,className:"px-5 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-emerald-600/30",children:"Submit Quiz"})]})]})]})]})}export{H as default};
