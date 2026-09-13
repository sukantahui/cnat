import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as S}from"./PythonFileLoader-DUNJ9gwR.js";import{F as y}from"./FAQTemplate-D_90hN4m.js";import{P as w}from"./PlainTextPrint-yt10TRX1.js";import{T as v}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const A=`"""\r
==============================================================================\r
Topic 20: Worked Example 1 - Loading & Exploring a Student Dataset\r
Script 01: Dataset Ingestion, Structural Inspection & Type Verification\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
"""\r
\r
import pandas as pd\r
import numpy as np\r
\r
def section(title):\r
    print("\\n" + "=" * 75)\r
    print(f"  {title}")\r
    print("=" * 75)\r
\r
# Comprehensive Student Dataset from Coder & AccoTax, Barrackpore\r
student_records = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu", "Aniket", "Priyanka"],\r
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore", "Titagarh", "Barrackpore", "Palta", "Shyamnagar"],\r
    "Department": ["CSE", "CSE", "Commerce", "Science", "Commerce", "CSE", "Science", "Commerce", "CSE", "Science"],\r
    "Attendance_%": [92.5, 96.0, 78.5, 88.0, 82.0, 94.5, 89.0, 85.0, 91.0, 97.5],\r
    "Math": [85, 92, 65, 88, 78, 90, 84, 80, 86, 95],\r
    "Science": [90, 95, 70, 85, 80, 92, 88, 82, 89, 98]\r
}\r
\r
df = pd.DataFrame(student_records)\r
section("1. FIRST 5 ROWS (df.head())")\r
print(df.head())\r
\r
# --------------------------------------------------------------------------\r
# 1. Structural Metadata & Memory Inspection\r
# --------------------------------------------------------------------------\r
section("2. STRUCTURAL SUMMARY (df.info())")\r
df.info()\r
\r
section("3. SHAPE, DIMENSIONS & COLUMN TYPES")\r
print(f"Shape: {df.shape[0]} rows x {df.shape[1]} columns")\r
print(f"Total Elements (size): {df.size}")\r
print("\\nData Types:")\r
print(df.dtypes)\r
\r
# --------------------------------------------------------------------------\r
# 2. Missing Value & Cardinality Audit\r
# --------------------------------------------------------------------------\r
section("4. DATA QUALITY AUDIT (NULLS & CARDINALITY)")\r
quality_audit = pd.DataFrame({\r
    "Data_Type": df.dtypes,\r
    "Null_Count": df.isna().sum(),\r
    "Null_Pct (%)": (df.isna().mean() * 100).round(2),\r
    "Unique_Values": df.nunique()\r
})\r
print(quality_audit)\r
`,T=`"""\r
==============================================================================\r
Topic 20: Worked Example 1 - Loading & Exploring a Student Dataset\r
Script 02: Statistical Profiling, Five-Number Summary & Outlier Check\r
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
student_records = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu", "Aniket", "Priyanka"],\r
    "Department": ["CSE", "CSE", "Commerce", "Science", "Commerce", "CSE", "Science", "Commerce", "CSE", "Science"],\r
    "Attendance_%": [92.5, 96.0, 78.5, 88.0, 82.0, 94.5, 89.0, 85.0, 91.0, 97.5],\r
    "Math": [85, 92, 65, 88, 78, 90, 84, 80, 86, 95],\r
    "Science": [90, 95, 70, 85, 80, 92, 88, 82, 89, 98]\r
}\r
\r
df = pd.DataFrame(student_records)\r
\r
# --------------------------------------------------------------------------\r
# 1. Five-Number Summary on Numerical Variables\r
# --------------------------------------------------------------------------\r
section("1. FIVE-NUMBER SUMMARY (df.describe())")\r
print(df[["Attendance_%", "Math", "Science"]].describe().round(2))\r
\r
# --------------------------------------------------------------------------\r
# 2. Spread, IQR & Skewness Profiling\r
# --------------------------------------------------------------------------\r
section("2. DISPERSION & SKEWNESS")\r
for col in ["Math", "Science", "Attendance_%"]:\r
    q25 = df[col].quantile(0.25)\r
    q75 = df[col].quantile(0.75)\r
    iqr = q75 - q25\r
    skew = df[col].skew()\r
    print(f"[{col:<12}] Median: {df[col].median():<5.1f} | IQR: {iqr:<5.1f} | Skewness: {skew:+.2f}")\r
\r
# --------------------------------------------------------------------------\r
# 3. Categorical Profiling with describe(include='object')\r
# --------------------------------------------------------------------------\r
section("3. CATEGORICAL FEATURE PROFILE (df.describe(include=['object']))")\r
print(df.describe(include=["object"]))\r
`,C=`"""\r
==============================================================================\r
Topic 20: Worked Example 1 - Loading & Exploring a Student Dataset\r
Script 03: Demographics, Cross-Tabulations & Key Analytical Takeaways\r
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
student_records = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu", "Aniket", "Priyanka"],\r
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore", "Titagarh", "Barrackpore", "Palta", "Shyamnagar"],\r
    "Department": ["CSE", "CSE", "Commerce", "Science", "Commerce", "CSE", "Science", "Commerce", "CSE", "Science"],\r
    "Attendance_%": [92.5, 96.0, 78.5, 88.0, 82.0, 94.5, 89.0, 85.0, 91.0, 97.5],\r
    "Math": [85, 92, 65, 88, 78, 90, 84, 80, 86, 95],\r
    "Science": [90, 95, 70, 85, 80, 92, 88, 82, 89, 98]\r
}\r
\r
df = pd.DataFrame(student_records)\r
df["TotalMarks"] = df["Math"] + df["Science"]\r
\r
# --------------------------------------------------------------------------\r
# 1. Cross-Tabulation: Locality vs Department\r
# --------------------------------------------------------------------------\r
section("1. CROSS-TABULATION (pd.crosstab(Locality, Department))")\r
ct = pd.crosstab(df["Locality"], df["Department"], margins=True)\r
print(ct)\r
\r
# --------------------------------------------------------------------------\r
# 2. Top-Performing Students by Department\r
# --------------------------------------------------------------------------\r
section("2. TOP PERFORMERS BY DEPARTMENT")\r
top_per_dept = df.sort_values(by=["Department", "TotalMarks"], ascending=[True, False]).groupby("Department").head(1)\r
print(top_per_dept[["Department", "Name", "Locality", "Math", "Science", "TotalMarks"]])\r
\r
# --------------------------------------------------------------------------\r
# 3. Correlation Matrix Between Attendance and Exam Scores\r
# --------------------------------------------------------------------------\r
section("3. PEARSON CORRELATION MATRIX (df.corr())")\r
corr = df[["Attendance_%", "Math", "Science", "TotalMarks"]].corr().round(3)\r
print(corr)\r
`,E=`==============================================================================\r
TOPIC 20 NOTE: WORKED EXAMPLE 1 - LOADING & EXPLORING A DATASET\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
\r
1. SYSTEMATIC 6-STEP EXPLORATORY DATA ANALYSIS (EDA) CHECKLIST:\r
   --------------------------------------------------------------------------\r
   Step 1: First Impressions & Structure:\r
           - Call \`df.head(5)\` and \`df.tail(5)\`.\r
           - Inspect \`df.shape\` (N rows, M columns).\r
   \r
   Step 2: Schema & Memory Footprint:\r
           - Call \`df.info()\` to verify column dtypes and memory usage.\r
           - Confirm integer IDs are not mistakenly cast as floats or objects.\r
   \r
   Step 3: Missing Value Audit:\r
           - Calculate \`df.isna().sum()\` and \`df.isna().mean() * 100\`.\r
   \r
   Step 4: Cardinality & Uniqueness:\r
           - Call \`df.nunique()\` to identify constant features (nunique=1) or high-cardinality IDs.\r
   \r
   Step 5: Statistical Distribution:\r
           - Numerical: \`df.describe()\` (mean, std, min, 25%, 50%, 75%, max).\r
           - Categorical: \`df.describe(include=['object', 'category'])\` (count, unique, top, freq).\r
           - Calculate skewness (\`df.skew()\`) to spot asymmetric tails.\r
   \r
   Step 6: Relationship & Correlation Mapping:\r
           - \`df.corr(numeric_only=True)\` to assess linear collinearity.\r
           - \`pd.crosstab(df['CategoryA'], df['CategoryB'])\` to inspect multi-factor distributions.\r
\r
2. CRITICAL TAKEAWAYS FOR MACHINE LEARNING READINESS:\r
   --------------------------------------------------------------------------\r
   - Never feed raw uninspected datasets into ML estimators!\r
   - EDA reveals corrupted columns, unencoded text, missing entries, and outlier anomalies before model training begins.\r
`,h=[{id:1,question:"What is the recommended first command to execute immediately after loading an unfamiliar dataset in Pandas?",options:["df.info() and df.head() to inspect schema, row shapes, null values, and data types","model.fit(df) to train an algorithm immediately","df.dropna(how='all') to delete empty columns","df.plot() to create 50 charts"],correctAnswer:"df.info() and df.head() to inspect schema, row shapes, null values, and data types",explanation:"Calling df.info() and df.head() provides an immediate structural blueprint of row counts, column data types, missing null values, and sample values."},{id:2,question:"In df.describe(), which statistic represents the 50th percentile (the value separating the top 50% from the bottom 50%)?",options:["50% (The Median)","The Mean","The Standard Deviation (std)","The Maximum (max)"],correctAnswer:"50% (The Median)",explanation:"The 50% row in describe() corresponds to the sample median (the second quartile Q2), representing the central tendency resistant to extreme outliers."},{id:3,question:"How do you generate descriptive statistical summaries specifically for text / string columns in a DataFrame?",options:["df.describe(include=['object'])","df.describe_strings()","df.text_summary()","df.object_stats()"],correctAnswer:"df.describe(include=['object'])",explanation:"Passing include=['object'] (or include='all') instructs describe() to report categorical metrics: count, unique, top (most frequent category), and freq (frequency of top category)."},{id:4,question:"What does pd.crosstab(df['Locality'], df['Department']) compute?",options:["A frequency contingency table showing how many students belong to each (Locality, Department) combination","A SQL cross join between two tables","The Pearson correlation coefficient between two numeric columns","A scatter plot matrix"],correctAnswer:"A frequency contingency table showing how many students belong to each (Locality, Department) combination",explanation:"pd.crosstab() constructs a bivariate frequency matrix (cross-tabulation table) showing counts of occurrences across two or more categorical factors."},{id:5,question:"If a numerical column 'Score' has a Mean of 60 and a Median of 80, what does this indicate about the distribution?",options:["The distribution is left-skewed (negatively skewed) with extreme low-score outliers pulling the mean down","The distribution is perfectly normal (Gaussian)","The distribution is right-skewed with high outliers","There are zero valid numbers in the column"],correctAnswer:"The distribution is left-skewed (negatively skewed) with extreme low-score outliers pulling the mean down",explanation:"When Mean < Median, low-value outliers on the left tail pull the arithmetic average downward, indicating a left-skewed (negatively skewed) distribution."}],d=[{id:"part1",fileName:"01_load_inspect_student_data.py",title:"1. Data Ingestion & Quality Audit",badge:"head(), info(), nunique()",code:A,summary:"Load student records, examine schema metadata, verify dtypes with info(), and audit missing values & column cardinalities."},{id:"part2",fileName:"02_statistical_profiling_and_outliers.py",title:"2. Five-Number Summary & Skewness",badge:"describe(), IQR, Skew",code:T,summary:"Calculate five-number statistical summaries, measure interquartile dispersion (IQR), and profile skewness across numeric features."},{id:"part3",fileName:"03_exploratory_demographics_and_insights.py",title:"3. Demographics, Crosstabs & Correlation",badge:"crosstab() & corr()",code:C,summary:"Generate bivariate contingency tables with pd.crosstab(), find top cohort performers, and compute Pearson correlation matrices."}],c=[{id:101,name:"Debangshu",locality:"Barrackpore",dept:"CSE",att:92.5,math:85,sci:90},{id:102,name:"Susmita",locality:"Shyamnagar",dept:"CSE",att:96,math:92,sci:95},{id:103,name:"Swadeep",locality:"Ichapur",dept:"Commerce",att:78.5,math:65,sci:70},{id:104,name:"Tuhina",locality:"Naihati",dept:"Science",att:88,math:88,sci:85},{id:105,name:"Sachin",locality:"Kolkata",dept:"Commerce",att:82,math:78,sci:80},{id:106,name:"Mahima",locality:"Barrackpore",dept:"CSE",att:94.5,math:90,sci:92},{id:107,name:"Abhronila",locality:"Titagarh",dept:"Science",att:89,math:84,sci:88},{id:108,name:"Debangshu",locality:"Barrackpore",dept:"Commerce",att:85,math:80,sci:82},{id:109,name:"Aniket",locality:"Palta",dept:"CSE",att:91,math:86,sci:89},{id:110,name:"Priyanka",locality:"Shyamnagar",dept:"Science",att:97.5,math:95,sci:98}],q=()=>{const[a,n]=i.useState("eda_studio"),[m,p]=i.useState("part1"),[s,u]=i.useState("table"),[o,b]=i.useState("ALL"),r=d.find(t=>t.id===m)||d[0],x=o==="ALL"?c:c.filter(t=>t.dept===o),l=c.map(t=>t.math),f=(l.reduce((t,g)=>t+g,0)/l.length).toFixed(1),j=Math.max(...l),N=Math.min(...l);return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-teal-900/40 via-cyan-900/30 to-slate-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full",children:"Worked Case Study 1"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 20"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Worked Example 1: Loading & Exploring a Student Dataset"}),e.jsx("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:"Walk through a complete end-to-end Exploratory Data Analysis (EDA) on an academic cohort dataset from Coder & AccoTax (Barrackpore). Execute quality audits, 5-number distributions, cross-tabulations, and correlation analysis."})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-teal-500/20",children:"EDA #1"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>n("eda_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="eda_studio"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"🔬 Interactive EDA Studio"}),e.jsxs("button",{onClick:()=>n("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="python_code"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",d.length," Scripts)"]}),e.jsx("button",{onClick:()=>n("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="theory_notes"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>n("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="quiz"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",h.length,")"]})]}),a==="eda_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Total Enrolled"}),e.jsxs("div",{className:"text-2xl font-bold text-white font-mono mt-1",children:[c.length," Students"]}),e.jsx("div",{className:"text-xs text-teal-400 mt-1",children:"100% Complete Records"})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Avg Math Score"}),e.jsxs("div",{className:"text-2xl font-bold text-cyan-400 font-mono mt-1",children:[f," ",e.jsx("span",{className:"text-xs text-slate-500",children:"/ 100"})]}),e.jsxs("div",{className:"text-xs text-slate-500 mt-1",children:["Spread: ",N," - ",j]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Avg Attendance"}),e.jsx("div",{className:"text-2xl font-bold text-emerald-400 font-mono mt-1",children:"89.4%"}),e.jsx("div",{className:"text-xs text-emerald-500 mt-1",children:"High Engagement"})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Top Performing Region"}),e.jsx("div",{className:"text-2xl font-bold text-purple-400 font-mono mt-1",children:"Shyamnagar"}),e.jsx("div",{className:"text-xs text-purple-300 mt-1",children:"Avg Score: 95.0%"})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"🎛️"})," Select EDA Inspection Lens"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Filter Department:"}),e.jsxs("select",{value:o,onChange:t=>b(t.target.value),className:"bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1 text-xs text-teal-300 font-mono",children:[e.jsx("option",{value:"ALL",children:"All Departments (10)"}),e.jsx("option",{value:"CSE",children:"CSE Only (5)"}),e.jsx("option",{value:"Science",children:"Science Only (3)"}),e.jsx("option",{value:"Commerce",children:"Commerce Only (2)"})]})]})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[{id:"table",label:"1. Dataset View",icon:"📋"},{id:"stats",label:"2. 5-Number Stats",icon:"📊"},{id:"crosstab",label:"3. Locality Crosstab",icon:"🗺️"},{id:"corr",label:"4. Correlation Matrix",icon:"🔗"}].map(t=>e.jsxs("button",{onClick:()=>u(t.id),className:`p-3 rounded-xl text-left border transition-all ${s===t.id?"bg-teal-950/60 border-teal-500 text-white shadow-md shadow-teal-500/20":"bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("span",{className:"text-sm mr-1.5",children:t.icon}),e.jsx("span",{className:"text-xs font-bold",children:t.label})]},t.id))})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[s==="table"&&e.jsxs("div",{children:[e.jsxs("h3",{className:"text-sm font-bold text-white mb-3",children:["Filtered Records (",x.length," Students)"]}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80 font-mono",children:[e.jsx("th",{className:"p-3 text-slate-400",children:"StudentID"}),e.jsx("th",{className:"p-3 text-teal-300",children:"Name"}),e.jsx("th",{className:"p-3 text-slate-300",children:"Locality"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Department"}),e.jsx("th",{className:"p-3 text-emerald-300",children:"Attendance"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Math"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Science"}),e.jsx("th",{className:"p-3 text-emerald-400 font-bold",children:"Total (Math+Sci)"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:x.map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-slate-400",children:t.id}),e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:t.name}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:t.locality}),e.jsx("td",{className:"p-3 text-cyan-300 font-sans",children:t.dept}),e.jsxs("td",{className:"p-3 text-emerald-400",children:[t.att,"%"]}),e.jsx("td",{className:"p-3 text-cyan-300",children:t.math}),e.jsx("td",{className:"p-3 text-cyan-300",children:t.sci}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:t.math+t.sci})]},t.id+t.name))})]})]}),s==="stats"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-white",children:"Five-Number Summary (df[['Attendance_%', 'Math', 'Science']].describe())"}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80",children:[e.jsx("th",{className:"p-3 text-slate-400",children:"Metric"}),e.jsx("th",{className:"p-3 text-emerald-400",children:"Attendance_%"}),e.jsx("th",{className:"p-3 text-cyan-400",children:"Math Score"}),e.jsx("th",{className:"p-3 text-cyan-400",children:"Science Score"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-slate-400",children:"count"}),e.jsx("td",{className:"p-3",children:"10.00"}),e.jsx("td",{className:"p-3",children:"10.00"}),e.jsx("td",{className:"p-3",children:"10.00"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-slate-400",children:"mean"}),e.jsx("td",{className:"p-3 text-emerald-300 font-bold",children:"89.40"}),e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:"84.30"}),e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:"86.90"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-slate-400",children:"std"}),e.jsx("td",{className:"p-3",children:"6.12"}),e.jsx("td",{className:"p-3",children:"8.25"}),e.jsx("td",{className:"p-3",children:"8.05"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-slate-400",children:"min"}),e.jsx("td",{className:"p-3 text-rose-400",children:"78.50"}),e.jsx("td",{className:"p-3 text-rose-400",children:"65.00"}),e.jsx("td",{className:"p-3 text-rose-400",children:"70.00"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-slate-400",children:"25% (Q1)"}),e.jsx("td",{className:"p-3",children:"85.75"}),e.jsx("td",{className:"p-3",children:"81.00"}),e.jsx("td",{className:"p-3",children:"82.75"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-slate-400",children:"50% (Median)"}),e.jsx("td",{className:"p-3 text-teal-300 font-bold",children:"90.00"}),e.jsx("td",{className:"p-3 text-teal-300 font-bold",children:"85.50"}),e.jsx("td",{className:"p-3 text-teal-300 font-bold",children:"88.50"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-slate-400",children:"75% (Q3)"}),e.jsx("td",{className:"p-3",children:"94.00"}),e.jsx("td",{className:"p-3",children:"89.50"}),e.jsx("td",{className:"p-3",children:"91.50"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-slate-400",children:"max"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"97.50"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"95.00"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"98.00"})]})]})]})]}),s==="crosstab"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-white",children:"Locality × Department Distribution (pd.crosstab)"}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80",children:[e.jsx("th",{className:"p-3 text-teal-300",children:"Locality"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"CSE"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Commerce"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Science"}),e.jsx("th",{className:"p-3 text-emerald-400 font-bold",children:"Total (All)"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:"Barrackpore"}),e.jsx("td",{className:"p-3",children:"2"}),e.jsx("td",{className:"p-3",children:"1"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"3"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:"Shyamnagar"}),e.jsx("td",{className:"p-3",children:"1"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3",children:"1"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"2"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:"Ichapur"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3",children:"1"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:"Naihati"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3",children:"1"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:"Kolkata"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3",children:"1"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:"Titagarh"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3",children:"1"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:"Palta"}),e.jsx("td",{className:"p-3",children:"1"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3",children:"0"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"1"})]}),e.jsxs("tr",{className:"bg-slate-950 font-bold",children:[e.jsx("td",{className:"p-3 text-teal-400",children:"Total Enrolled"}),e.jsx("td",{className:"p-3 text-cyan-300",children:"4"}),e.jsx("td",{className:"p-3 text-cyan-300",children:"3"}),e.jsx("td",{className:"p-3 text-cyan-300",children:"3"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"10"})]})]})]})]}),s==="corr"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-white",children:"Pearson Correlation Matrix (df.corr())"}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80",children:[e.jsx("th",{className:"p-3 text-slate-400",children:"Feature"}),e.jsx("th",{className:"p-3 text-emerald-300",children:"Attendance_%"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Math"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Science"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-emerald-300 font-bold",children:"Attendance_%"}),e.jsx("td",{className:"p-3 text-teal-400 font-bold",children:"1.000"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"+0.892 (Strong)"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"+0.874 (Strong)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:"Math"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"+0.892"}),e.jsx("td",{className:"p-3 text-teal-400 font-bold",children:"1.000"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"+0.941 (Very Strong)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:"Science"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"+0.874"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"+0.941"}),e.jsx("td",{className:"p-3 text-teal-400 font-bold",children:"1.000"})]})]})]})]})]}),e.jsx(v,{topic:"Exploratory Data Analysis: The Foundation of Machine Learning",text:"Notice how correlation analysis reveals a strong +0.892 correlation between Attendance_% and Math scores. In real machine learning projects, EDA is where you discover whether features hold predictive power, identify missing fields, and spot potential data entry bugs before feeding numbers into complex neural networks or gradient boosted trees!"})]}),a==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:d.map(t=>e.jsxs("button",{onClick:()=>p(t.id),className:`p-4 rounded-xl text-left border transition-all ${m===t.id?"bg-teal-950/60 border-teal-500 text-white shadow-lg shadow-teal-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-teal-400 uppercase tracking-wider mb-1",children:t.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:t.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:r.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:r.summary})]})}),e.jsx(S,{fileModule:r.code,title:r.fileName})]})]}),a==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(w,{text:E,title:"Topic 20 Revision Notes: Worked Example 1"})}),a==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(y,{questions:h,title:"Topic 20 Knowledge Check: Worked Example 1"})})]})})};export{q as default};
