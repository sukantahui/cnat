import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P}from"./PythonFileLoader-CiS1GfkF.js";import{F as R}from"./FAQTemplate-D_90hN4m.js";import{P as F}from"./PlainTextPrint-yt10TRX1.js";import{T as q}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const G=`"""\r
==============================================================================\r
Topic 15: Aggregation Functions in Pandas\r
Script 01: Standard Reductions & Multi-Metric Aggregation with .agg()\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
"""\r
\r
import pandas as pd\r
\r
def section(title):\r
    print("\\n" + "=" * 75)\r
    print(f"  {title}")\r
    print("=" * 75)\r
\r
data = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107, 108],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu"],\r
    "Department": ["Computer Science", "Computer Science", "Commerce", "Science", "Commerce", "Computer Science", "Science", "Commerce"],\r
    "Math": [85, 92, 65, 88, 78, 90, 84, 80],\r
    "Science": [90, 95, 70, 85, 80, 92, 88, 82],\r
    "Attendance": [95, 98, 80, 92, 85, 94, 90, 88]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. ORIGINAL DATASET")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Global DataFrame-Level Reductions\r
# --------------------------------------------------------------------------\r
section("2. GLOBAL AGGREGATIONS (numeric_only=True)")\r
# In modern Pandas 2.0+, numeric_only=True is required to ignore string columns cleanly\r
print("Global Column Means:")\r
print(df[["Math", "Science", "Attendance"]].mean())\r
\r
print("\\nGlobal Column Sums:")\r
print(df[["Math", "Science", "Attendance"]].sum())\r
\r
# --------------------------------------------------------------------------\r
# 2. Group-Level Multi-Metric Aggregation with List of Strings\r
# --------------------------------------------------------------------------\r
section("3. GROUP MULTI-METRIC AGGREGATION (.agg(['mean', 'median', 'std', 'count']))")\r
# Passing a list computes all 4 metrics for the specified column\r
math_stats = df.groupby("Department")["Math"].agg(["count", "mean", "median", "std", "min", "max"]).round(2)\r
print("Math Score Statistics per Department:")\r
print(math_stats)\r
\r
# Multi-metric on multiple columns\r
multi_col_stats = df.groupby("Department")[["Math", "Science"]].agg(["mean", "max"]).round(1)\r
print("\\nMulti-Column Multi-Metric Matrix:")\r
print(multi_col_stats)\r
`,E=`"""\r
==============================================================================\r
Topic 15: Aggregation Functions in Pandas\r
Script 02: Dictionary Mapping & Named Aggregations (Pandas Best Practice)\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
"""\r
\r
import pandas as pd\r
\r
def section(title):\r
    print("\\n" + "=" * 75)\r
    print(f"  {title}")\r
    print("=" * 75)\r
\r
data = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107, 108],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu"],\r
    "Department": ["Computer Science", "Computer Science", "Commerce", "Science", "Commerce", "Computer Science", "Science", "Commerce"],\r
    "Math": [85, 92, 65, 88, 78, 90, 84, 80],\r
    "Science": [90, 95, 70, 85, 80, 92, 88, 82],\r
    "Attendance": [95, 98, 80, 92, 85, 94, 90, 88]\r
}\r
\r
df = pd.DataFrame(data)\r
\r
# --------------------------------------------------------------------------\r
# 1. Column-Specific Dictionary Aggregations\r
# --------------------------------------------------------------------------\r
section("1. COLUMN-SPECIFIC DICTIONARY MAPPING (df.groupby().agg({...}))")\r
dict_agg = df.groupby("Department").agg({\r
    "StudentID": "count",\r
    "Math": ["mean", "max"],\r
    "Science": "median",\r
    "Attendance": "mean"\r
}).round(1)\r
\r
print("Resulting DataFrame with MultiIndex columns:")\r
print(dict_agg)\r
\r
# --------------------------------------------------------------------------\r
# 2. Named Aggregation (The Modern, Clean Way to Avoid MultiIndex Headers)\r
# --------------------------------------------------------------------------\r
section("2. NAMED AGGREGATIONS (syntax: new_col_name=('existing_col', 'agg_func'))")\r
# Named aggregation gives intuitive flat column names right away!\r
named_summary = df.groupby("Department", as_index=False).agg(\r
    Total_Enrolled=("StudentID", "count"),\r
    Average_Math=("Math", "mean"),\r
    Top_Math_Score=("Math", "max"),\r
    Average_Science=("Science", "mean"),\r
    Avg_Attendance_Rate=("Attendance", "mean")\r
).round(2)\r
\r
print("Clean Flattened Summary DataFrame:")\r
print(named_summary)\r
`,O=`"""\r
==============================================================================\r
Topic 15: Aggregation Functions in Pandas\r
Script 03: Custom Functions & Quantile Aggregations\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
"""\r
\r
import pandas as pd\r
\r
def section(title):\r
    print("\\n" + "=" * 75)\r
    print(f"  {title}")\r
    print("=" * 75)\r
\r
data = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107, 108],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu"],\r
    "Department": ["Computer Science", "Computer Science", "Commerce", "Science", "Commerce", "Computer Science", "Science", "Commerce"],\r
    "Math": [85, 92, 65, 88, 78, 90, 84, 80],\r
    "Science": [90, 95, 70, 85, 80, 92, 88, 82]\r
}\r
\r
df = pd.DataFrame(data)\r
\r
# --------------------------------------------------------------------------\r
# 1. Custom User-Defined Aggregation Function (Score Range = Max - Min)\r
# --------------------------------------------------------------------------\r
section("1. CUSTOM AGGREGATION FUNCTIONS")\r
\r
def score_range(series):\r
    return series.max() - series.min()\r
\r
def iqr_range(series):\r
    # Interquartile Range (75th percentile - 25th percentile)\r
    return series.quantile(0.75) - series.quantile(0.25)\r
\r
custom_agg = df.groupby("Department").agg(\r
    Mean_Math=("Math", "mean"),\r
    Math_Spread=("Math", score_range),\r
    Math_IQR=("Math", iqr_range),\r
    Science_P90=("Science", lambda s: s.quantile(0.90))\r
).round(2)\r
\r
print("Custom Aggregation Metrics by Department:")\r
print(custom_agg)\r
`,L="==============================================================================\r\nTOPIC 15 NOTE: AGGREGATION FUNCTIONS IN PANDAS (sum, mean, count, agg)\r\nInstructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r\nStudents: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r\n==============================================================================\r\n\r\n1. BUILT-IN STATISTICAL REDUCTIONS:\r\n   --------------------------------------------------------------------------\r\n   - `sum()`: Computes total arithmetic sum.\r\n   - `mean()`: Computes arithmetic average.\r\n   - `median()`: 50th percentile (resistant to extreme outliers).\r\n   - `std()` / `var()`: Sample standard deviation and variance (N-1 degrees of freedom).\r\n   - `min()` / `max()`: Minimum and maximum values.\r\n   - `count()`: Number of non-null observations.\r\n   - `sem()`: Standard error of the mean.\r\n   - `quantile(q)`: Arbitrary percentiles (e.g. q=0.25, 0.75, 0.99).\r\n\r\n2. MULTI-METRIC AGGREGATION WITH .agg():\r\n   --------------------------------------------------------------------------\r\n   a) List of functions on a single column:\r\n      `df.groupby('Dept')['Math'].agg(['count', 'mean', 'std', 'max'])`\r\n\r\n   b) Dictionary mapping per column:\r\n      `df.groupby('Dept').agg({'Math': ['mean', 'min'], 'Science': 'max'})`\r\n      * Produces a MultiIndex column structure.\r\n\r\n   c) Modern Named Aggregation (Pandas 0.25+ Best Practice):\r\n      `df.groupby('Dept', as_index=False).agg(`\r\n      `    Avg_Math=('Math', 'mean'),`\r\n      `    Top_Score=('Math', 'max'),`\r\n      `    Student_Count=('StudentID', 'count')`\r\n      `)`\r\n      * Eliminates clumsy MultiIndex headers immediately!\r\n      * Yields clean, single-level column names ready for dashboards & SQL exports.\r\n\r\n3. PERFORMANCE & PANDAS 2.0+ CONSIDERATIONS:\r\n   --------------------------------------------------------------------------\r\n   - `numeric_only=True`: When applying `.mean()` or `.sum()` globally on a DataFrame with text columns, pass `numeric_only=True` to avoid TypeError.\r\n   - Built-in string function names ('mean', 'sum', 'std') utilize optimized Cython implementations, executing orders of magnitude faster than Python lambda expressions.\r\n",S=[{id:1,question:"Which of the following computes both the mean and maximum of 'Salary' for each department in a single call?",options:["df.groupby('Department')['Salary'].agg(['mean', 'max'])","df.groupby('Department')['Salary'].calculate(['mean', 'max'])","df.groupby('Department').reduce('Salary', ['mean', 'max'])","df.groupby('Department').both('Salary', 'mean', 'max')"],correctAnswer:"df.groupby('Department')['Salary'].agg(['mean', 'max'])",explanation:"Passing a list of function names to .agg(['mean', 'max']) calculates all specified metrics simultaneously for that Series."},{id:2,question:"What is the key advantage of using Named Aggregation (e.g. Total_Sales=('Sales', 'sum')) over passing a dictionary to .agg()?",options:["It generates a clean single-level column index directly, avoiding hierarchical MultiIndex headers","It forces the CPU to use 100% GPU acceleration","It automatically sorts the output in reverse alphabetical order","It deletes missing values from the dataset before calculation"],correctAnswer:"It generates a clean single-level column index directly, avoiding hierarchical MultiIndex headers",explanation:"Named Aggregation allows developers to assign custom output column names directly during aggregation, completely avoiding messy MultiIndex column headers."},{id:3,question:"Why should you prefer using built-in string names like .agg('mean') instead of .agg(lambda x: np.mean(x))?",options:["String names trigger highly optimized Cython/C implementations inside Pandas for massive speedups","Lambda functions are not supported in Python 3.10+","String names automatically plot graphs in the terminal","Lambda functions convert all numbers to strings"],correctAnswer:"String names trigger highly optimized Cython/C implementations inside Pandas for massive speedups",explanation:"Pandas recognizes string keywords like 'mean', 'sum', 'std', and routes them to specialized C/Cython algorithms, bypassing slow Python interpreter loops."},{id:4,question:"How do you calculate the 90th percentile of 'Revenue' per region in Pandas?",options:["df.groupby('Region')['Revenue'].quantile(0.90)","df.groupby('Region')['Revenue'].percentile(90)","df.groupby('Region')['Revenue'].p90()","df.groupby('Region')['Revenue'].top(0.90)"],correctAnswer:"df.groupby('Region')['Revenue'].quantile(0.90)",explanation:"The .quantile(q) method computes the specified quantile where q is between 0.0 and 1.0 (e.g., 0.90 for the 90th percentile)."},{id:5,question:"In Pandas 2.0+, what happens if you call df.mean() on a DataFrame with numeric and string columns without setting numeric_only=True?",options:["It may raise a TypeError because arithmetic mean cannot be calculated on string/object columns","It converts string columns into integer ASCII values","It returns 0 for string columns","It crashes your operating system"],correctAnswer:"It may raise a TypeError because arithmetic mean cannot be calculated on string/object columns",explanation:"Pandas 2.0+ deprecated automatic silent dropping of non-numeric columns during reductions. You must explicitly specify numeric_only=True or select numeric columns beforehand."}],p=[{id:"part1",fileName:"01_basic_aggregations_and_multi_agg.py",title:"1. Global & Multi-Metric .agg() Lists",badge:".agg(['mean', 'std'])",code:G,summary:"Compute global numeric summaries and multi-metric statistical reductions on single and multiple columns using list expressions."},{id:"part2",fileName:"02_dictionary_and_named_aggregations.py",title:"2. Dictionary Mapping & Named Aggregations",badge:"Named Aggregations",code:E,summary:"Master column-specific dictionary mapping and modernize pipelines with Named Aggregation to eliminate clumsy MultiIndex headers."},{id:"part3",fileName:"03_custom_udf_and_quantile_aggregations.py",title:"3. Custom Functions & Quantile Aggregations",badge:"UDFs & Quantiles",code:O,summary:"Build domain-specific summary functions (IQR, Score Spread) and evaluate precise percentiles (.quantile(0.90)) across cohorts."}],U=[{id:101,name:"Debangshu",dept:"Computer Science",math:85,sci:90},{id:102,name:"Susmita",dept:"Computer Science",math:92,sci:95},{id:103,name:"Swadeep",dept:"Commerce",math:65,sci:70},{id:104,name:"Tuhina",dept:"Science",math:88,sci:85},{id:105,name:"Sachin",dept:"Commerce",math:78,sci:80},{id:106,name:"Mahima",dept:"Computer Science",math:90,sci:92},{id:107,name:"Abhronila",dept:"Science",math:84,sci:88},{id:108,name:"Debangshu",dept:"Commerce",math:80,sci:82}],V=()=>{const[r,d]=i.useState("agg_studio"),[b,y]=i.useState("part1"),[c,N]=i.useState(!0),[m,M]=i.useState(!0),[u,A]=i.useState(!1),[o,v]=i.useState(!0),[g,w]=i.useState(!0),h=p.find(t=>t.id===b)||p[0],C=["Computer Science","Commerce","Science"],j=t=>{const n=U.filter(a=>a.dept===t).map(a=>a.math),s=n.length,f=(n.reduce((a,l)=>a+l,0)/s).toFixed(1),x=[...n].sort((a,l)=>a-l),_=s%2===1?x[Math.floor(s/2)]:((x[s/2-1]+x[s/2])/2).toFixed(1),I=n.reduce((a,l)=>a+Math.pow(l-f,2),0)/(s-1||1),T=Math.sqrt(I).toFixed(2),D=Math.min(...n),k=Math.max(...n);return{count:s,mean:f,median:_,std:T,min:D,max:k}};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-emerald-900/40 via-teal-900/30 to-slate-900/60 border border-emerald-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full",children:"Statistical Aggregations"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 15"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Aggregation Functions: sum, mean, count, and .agg()"}),e.jsx("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:"Distill massive datasets into actionable summary metrics. Discover how to compute multi-metric statistical reductions, apply column-specific dictionaries, and construct clean flat tables with Named Aggregations."})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-emerald-500/20",children:"∑ μ"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>d("agg_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="agg_studio"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📊 Multi-Metric Aggregation Studio"}),e.jsxs("button",{onClick:()=>d("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="python_code"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",p.length," Scripts)"]}),e.jsx("button",{onClick:()=>d("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="theory_notes"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>d("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="quiz"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",S.length,")"]})]}),r==="agg_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🎛️"})," Select Summary Metrics for .agg([...])"]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-3",children:[e.jsxs("label",{className:"flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:c,onChange:t=>N(t.target.checked),className:"w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-800 border-slate-700"}),e.jsx("span",{className:"text-xs font-mono text-emerald-300 font-bold",children:"'mean'"})]}),e.jsxs("label",{className:"flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:t=>M(t.target.checked),className:"w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-800 border-slate-700"}),e.jsx("span",{className:"text-xs font-mono text-emerald-300 font-bold",children:"'median'"})]}),e.jsxs("label",{className:"flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:t=>A(t.target.checked),className:"w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-800 border-slate-700"}),e.jsx("span",{className:"text-xs font-mono text-emerald-300 font-bold",children:"'std' (Dispersion)"})]}),e.jsxs("label",{className:"flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:t=>v(t.target.checked),className:"w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-800 border-slate-700"}),e.jsx("span",{className:"text-xs font-mono text-emerald-300 font-bold",children:"'min', 'max'"})]}),e.jsxs("label",{className:"flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:t=>w(t.target.checked),className:"w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-800 border-slate-700"}),e.jsx("span",{className:"text-xs font-mono text-emerald-300 font-bold",children:"'count'"})]})]}),e.jsxs("div",{className:"mt-4 p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300",children:[e.jsx("span",{className:"text-slate-500",children:"# Generated Named Aggregation Pipeline:"}),e.jsx("pre",{className:"mt-1 text-emerald-400",children:`df.groupby('Department', as_index=False).agg(
${[g?"    Total_Students=('StudentID', 'count')":null,c?"    Average_Math=('Math', 'mean')":null,m?"    Median_Math=('Math', 'median')":null,u?"    StdDev_Math=('Math', 'std')":null,o?`    Min_Math=('Math', 'min'),
    Max_Math=('Math', 'max')`:null].filter(Boolean).join(`,
`)}
).round(2)`})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"📊"})," Resulting Summary DataFrame (Math Scores by Department)"]}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80 font-mono",children:[e.jsx("th",{className:"p-3 text-emerald-300 font-bold",children:"Department"}),g&&e.jsx("th",{className:"p-3 text-slate-400",children:"Total_Students"}),c&&e.jsx("th",{className:"p-3 text-cyan-300 font-bold",children:"Average_Math"}),m&&e.jsx("th",{className:"p-3 text-teal-300 font-bold",children:"Median_Math"}),u&&e.jsx("th",{className:"p-3 text-amber-300",children:"StdDev_Math"}),o&&e.jsx("th",{className:"p-3 text-rose-300",children:"Min_Math"}),o&&e.jsx("th",{className:"p-3 text-emerald-300 font-bold",children:"Max_Math"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:C.map(t=>{const n=j(t);return e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-white font-sans font-bold",children:t}),g&&e.jsx("td",{className:"p-3 text-slate-400",children:n.count}),c&&e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:n.mean}),m&&e.jsx("td",{className:"p-3 text-teal-300 font-bold",children:n.median}),u&&e.jsx("td",{className:"p-3 text-amber-300",children:n.std}),o&&e.jsx("td",{className:"p-3 text-rose-300",children:n.min}),o&&e.jsx("td",{className:"p-3 text-emerald-300 font-bold",children:n.max})]},t)})})]})]}),e.jsx(q,{topic:"Named Aggregations vs MultiIndex Clutter",text:"In legacy Pandas, calling df.groupby().agg({'Math': ['mean', 'max']}) created clumsy MultiIndex columns like ('Math', 'mean') that broke downstream visualization tools. Always adopt modern Named Aggregation: df.groupby().agg(Avg_Math=('Math', 'mean'), Max_Math=('Math', 'max')). This produces clean single-level column headers ready for presentation or model ingestion!"})]}),r==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:p.map(t=>e.jsxs("button",{onClick:()=>y(t.id),className:`p-4 rounded-xl text-left border transition-all ${b===t.id?"bg-emerald-950/60 border-emerald-500 text-white shadow-lg shadow-emerald-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1",children:t.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:t.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:h.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:h.summary})]})}),e.jsx(P,{fileModule:h.code,title:h.fileName})]})]}),r==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(F,{text:L,title:"Topic 15 Revision Notes: Aggregation Functions"})}),r==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(R,{questions:S,title:"Topic 15 Knowledge Check: Aggregation Functions"})})]})})};export{V as default};
