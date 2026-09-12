import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as f}from"./PythonFileLoader-CiS1GfkF.js";import{F as y}from"./FAQTemplate-D_90hN4m.js";import{P as _}from"./PlainTextPrint-yt10TRX1.js";import{T as v}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const w=`"""\r
==============================================================================\r
Topic 25: Practice Problems in Pandas\r
Script 01: Practice Problems 1 & 2 - Filtering & Missing Data Imputation\r
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
# --------------------------------------------------------------------------\r
# PROBLEM 1: Multi-Criteria Filter & Leaderboard Generation\r
# --------------------------------------------------------------------------\r
section("PROBLEM 1: MULTI-CRITERIA FILTER & LEADERBOARD GENERATION")\r
\r
data1 = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
    "Department": ["CSE", "CSE", "Commerce", "Science", "Commerce", "CSE", "Science"],\r
    "Math": [85, 92, 65, 88, 78, 90, 84],\r
    "Science": [90, 95, 70, 85, 80, 92, 88],\r
    "Attendance_%": [92.5, 96.0, 78.5, 88.0, 82.0, 94.5, 89.0]\r
}\r
\r
df1 = pd.DataFrame(data1)\r
\r
# Task: Create TotalMarks, Average, filter students with Average >= 85 and Attendance >= 90,\r
# sort by Average descending, and add a 1-based Rank column.\r
sol1 = (\r
    df1.assign(\r
        TotalMarks=lambda x: x["Math"] + x["Science"],\r
        Average=lambda x: x["TotalMarks"] / 2.0\r
    )\r
    .query("Average >= 85.0 and \`Attendance_%\` >= 90.0")\r
    .sort_values(by="Average", ascending=False)\r
    .reset_index(drop=True)\r
)\r
sol1.index = sol1.index + 1\r
sol1.index.name = "Rank"\r
\r
print("Problem 1 Solution Output:")\r
print(sol1[["Name", "Department", "Average", "Attendance_%"]])\r
\r
# --------------------------------------------------------------------------\r
# PROBLEM 2: Group-Specific Median Imputation with Missing Indicator\r
# --------------------------------------------------------------------------\r
section("PROBLEM 2: GROUP-MEDIAN IMPUTATION WITH MISSING INDICATOR")\r
\r
data2 = {\r
    "EmpID": [201, 202, 203, 204, 205, 206],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima"],\r
    "Dept": ["Tech", "Tech", "Support", "HR", "Support", "Tech"],\r
    "Salary": [60000.0, 90000.0, np.nan, 50000.0, 45000.0, np.nan]\r
}\r
\r
df2 = pd.DataFrame(data2)\r
\r
# Task: Add 'Salary_Missing_Flag' (1 if missing else 0),\r
# then impute missing Salary with Department Median.\r
df2["Salary_Missing_Flag"] = df2["Salary"].isna().astype(int)\r
dept_medians = df2.groupby("Dept")["Salary"].transform("median")\r
df2["Cleaned_Salary"] = df2["Salary"].fillna(dept_medians)\r
\r
print("\\nProblem 2 Solution Output:")\r
print(df2[["EmpID", "Name", "Dept", "Salary_Missing_Flag", "Cleaned_Salary"]])\r
`,P=`"""\r
==============================================================================\r
Topic 25: Practice Problems in Pandas\r
Script 02: Practice Problems 3 & 4 - Pivot Tables & Relational Integrity Audit\r
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
# --------------------------------------------------------------------------\r
# PROBLEM 3: Regional Sales Pivot Table with Margin Totals\r
# --------------------------------------------------------------------------\r
section("PROBLEM 3: REGIONAL PIVOT TABLE WITH MARGINS")\r
\r
sales = pd.DataFrame({\r
    "Region": ["Barrackpore", "Shyamnagar", "Barrackpore", "Ichapur", "Naihati", "Barrackpore"],\r
    "Product": ["Laptops", "Phones", "Phones", "Laptops", "Phones", "Laptops"],\r
    "Revenue": [250000, 180000, 225000, 200000, 210000, 360000]\r
})\r
\r
# Task: Create a 2D Pivot matrix of Revenue with Region as rows, Product as columns,\r
# fill missing with 0, and include grand total margins.\r
pivot_sol = pd.pivot_table(\r
    sales,\r
    values="Revenue",\r
    index="Region",\r
    columns="Product",\r
    aggfunc="sum",\r
    fill_value=0,\r
    margins=True,\r
    margins_name="Total"\r
)\r
\r
print("Problem 3 Pivot Table:")\r
print(pivot_sol)\r
\r
# --------------------------------------------------------------------------\r
# PROBLEM 4: Relational Discrepancy Audit (Full Outer Join + indicator)\r
# --------------------------------------------------------------------------\r
section("PROBLEM 4: RELATIONAL DISCREPANCY AUDIT")\r
\r
registered = pd.DataFrame({\r
    "CandidateID": ["C-101", "C-102", "C-103", "C-104"],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina"]\r
})\r
\r
submitted = pd.DataFrame({\r
    "CandidateID": ["C-101", "C-102", "C-104", "C-105"],\r
    "Score": [88, 94, 90, 82]\r
})\r
\r
# Task: Identify candidates who registered but didn't submit, and walk-ins who submitted without registering.\r
audit = pd.merge(registered, submitted, on="CandidateID", how="outer", indicator=True)\r
absentees = audit[audit["_merge"] == "left_only"][["CandidateID", "Name"]]\r
walkins = audit[audit["_merge"] == "right_only"][["CandidateID", "Score"]]\r
\r
print("Problem 4 Audit Results:")\r
print("Enrolled Absentees (Missed Test):\\n", absentees)\r
print("\\nUnregistered Walk-in Candidates:\\n", walkins)\r
`,S=`"""\r
==============================================================================\r
Topic 25: Practice Problems in Pandas\r
Script 03: Practice Problem 5 - High-Performance Pipeline & Compressed Export\r
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
# --------------------------------------------------------------------------\r
# PROBLEM 5: End-to-End Pipeline & Top-K Extraction\r
# --------------------------------------------------------------------------\r
section("PROBLEM 5: PIPELINE FUNCTION WITH TOP-K EXTRACTION")\r
\r
raw_stream = {\r
    "Candidate Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore", "Titagarh"],\r
    "Test 1": [85, 92, 65, 88, 78, 90, 84],\r
    "Test 2": [90, 95, 70, 85, 80, 92, 88]\r
}\r
\r
def etl_pipeline(data_dict, top_k=3):\r
    df = pd.DataFrame(data_dict)\r
    \r
    # Standardize column headers\r
    df.columns = df.columns.str.lower().str.replace(" ", "_")\r
    \r
    # Vectorized computation\r
    df["composite_score"] = (df["test_1"] * 0.4) + (df["test_2"] * 0.6)\r
    \r
    # High-performance Top-K extraction\r
    top_candidates = df.nlargest(n=top_k, columns="composite_score").reset_index(drop=True)\r
    top_candidates.index = top_candidates.index + 1\r
    top_candidates.index.name = "Rank"\r
    \r
    return top_candidates\r
\r
top_3_result = etl_pipeline(raw_stream, top_k=3)\r
print("Problem 5 Solution Output (Top 3 Performers):")\r
print(top_3_result)\r
`,T=`==============================================================================\r
TOPIC 25 NOTE: PRACTICE PROBLEMS IN PANDAS ESSENTIALS\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
\r
PRACTICE PROBLEM CURRICULUM OVERVIEW:\r
\r
Problem 1: Vectorized Arithmetic & Query Filtering:\r
  - Concepts: Vectorized Series addition, .query(), sort_values(), 1-based index ranks.\r
  - Requirement: Filter students with Average >= 85 and Attendance >= 90%.\r
\r
Problem 2: Group-Specific Median Imputation:\r
  - Concepts: .isna().astype(int) indicator flag, groupby().transform('median'), .fillna().\r
  - Requirement: Impute missing salary records without global skew distortion.\r
\r
Problem 3: Multi-Dimensional Pivot Matrix:\r
  - Concepts: pd.pivot_table(values, index, columns, aggfunc, fill_value, margins).\r
  - Requirement: Construct clean 2D sales matrices with marginal subtotals.\r
\r
Problem 4: Relational Discrepancy & Lineage Audit:\r
  - Concepts: pd.merge(how='outer', indicator=True), querying _merge == 'left_only' / 'right_only'.\r
  - Requirement: Reconcile admissions rosters with test portal submissions.\r
\r
Problem 5: Production Pipeline & Heap Top-K Extraction:\r
  - Concepts: Encapsulating ETL in pure functions, df.nlargest(top_k), .to_csv(index=False).\r
  - Requirement: Transform raw dictionaries into ranked leaderboards in O(N log K) time.\r
`,h=[{id:1,question:"In Practice Problem 1, what does df.query('Average >= 85 and `Attendance_%` >= 90') do when column names contain special symbols like '%'?",options:["Wrapping the column name in backticks (`Attendance_%`) allows Pandas query engine to parse special characters properly","It raises a SyntaxError unless renamed first","It converts Attendance_% to a string","It ignores the attendance filter completely"],correctAnswer:"Wrapping the column name in backticks (`Attendance_%`) allows Pandas query engine to parse special characters properly",explanation:"In Pandas df.query(), column names containing special characters or spaces must be enclosed in backticks (e.g. `Attendance_%`) to prevent syntax parsing errors."},{id:2,question:"In Problem 2, why is df['Salary'].fillna(df.groupby('Dept')['Salary'].transform('median')) preferred over a for loop over unique departments?",options:["transform('median') operates entirely in vectorized Cython, executing 100x faster and preserving index alignment seamlessly","For loops are banned in Python 3.10+","A for loop causes memory leaks in Pandas","transform() converts the column into a dictionary"],correctAnswer:"transform('median') operates entirely in vectorized Cython, executing 100x faster and preserving index alignment seamlessly",explanation:"groupby().transform() computes and broadcasts the cohort median natively in C/Cython without manual row filtering or slow Python iteration loops."},{id:3,question:"In Problem 3, what happens if fill_value=0 is omitted from pd.pivot_table() for combinations with no sales?",options:["Unmatched category cells will display NaN instead of 0","Pandas will delete the entire row","The pivot table will crash with a KeyError","All sales values will be rounded down"],correctAnswer:"Unmatched category cells will display NaN instead of 0",explanation:"Without fill_value=0, pd.pivot_table leaves missing index-column intersections as floating-point NaN."},{id:4,question:"In Problem 4, which condition finds candidate IDs that exist exclusively in the test submission logs without prior registration?",options:["outer_df['_merge'] == 'right_only'","outer_df['_merge'] == 'left_only'","outer_df['CandidateID'].isna()","outer_df.isnull().all(axis=1)"],correctAnswer:"outer_df['_merge'] == 'right_only'",explanation:"When indicator=True is used in an outer join, rows coming exclusively from the right DataFrame (test submissions) have _merge set to 'right_only'."},{id:5,question:"In Problem 5, why is df.nlargest(3, 'composite_score') computationally superior to df.sort_values('composite_score', ascending=False).head(3)?",options:["nlargest uses an O(N log K) min-heap algorithm avoiding full array sorting and reducing memory usage on large datasets","nlargest runs on 50 GPUs concurrently","nlargest ignores negative numbers","sort_values cannot sort descending"],correctAnswer:"nlargest uses an O(N log K) min-heap algorithm avoiding full array sorting and reducing memory usage on large datasets",explanation:"nlargest uses a heap-based selection algorithm taking O(N log K) time, which is vastly faster than sorting the whole array in O(N log N) when K is much smaller than N."}],o=[{id:"part1",fileName:"01_practice_problems_part1.py",title:"1. Problems 1 & 2 (Filtering & Imputation)",badge:"Problems 1 & 2",code:w,summary:"Solutions for multi-criteria candidate filtering, leaderboard generation, and group-specific median salary imputation."},{id:"part2",fileName:"02_practice_problems_part2.py",title:"2. Problems 3 & 4 (Pivots & Reconciliation)",badge:"Problems 3 & 4",code:P,summary:"Solutions for multi-dimensional pivot tables with marginal totals and relational discrepancy audits with indicator tags."},{id:"part3",fileName:"03_practice_problems_part3.py",title:"3. Problem 5 (Top-K Pipeline & GZIP Export)",badge:"Problem 5",code:S,summary:"Complete pipeline solution for calculating composite scores and extracting top-K performers via heap algorithms."}],l=[{id:1,title:"Challenge 1: Multi-Criteria Filter & Leaderboard",difficulty:"Medium",desc:"Given a student examination DataFrame, compute TotalMarks and Average score. Filter students who scored Average >= 85% AND Attendance >= 90%. Sort by Average descending and create a 1-based Rank index.",hint:"Use df.assign() for vectorized arithmetic, df.query() with backtick-escaped column names (`Attendance_%`), and sort_values(by='Average', ascending=False).",solutionCode:`df.assign(
    TotalMarks=lambda x: x["Math"] + x["Science"],
    Average=lambda x: x["TotalMarks"] / 2.0
).query("Average >= 85.0 and \`Attendance_%\` >= 90.0")
.sort_values(by="Average", ascending=False)
.reset_index(drop=True)`},{id:2,title:"Challenge 2: Group-Median Imputation with Missing Indicator",difficulty:"Medium-Hard",desc:"In an employee payroll dataset with missing salaries, create a binary feature 'Salary_Was_Missing' (1 if null, 0 otherwise) and impute missing Base_Salary with the median salary of the employee's specific Department.",hint:"Create the indicator with df['Salary'].isna().astype(int), then use df.groupby('Dept')['Salary'].transform('median') inside fillna().",solutionCode:`df["Salary_Was_Missing"] = df["Salary"].isna().astype(int)
dept_medians = df.groupby("Dept")["Salary"].transform("median")
df["Cleaned_Salary"] = df["Salary"].fillna(dept_medians)`},{id:3,title:"Challenge 3: Regional Pivot Table with Margin Totals",difficulty:"Medium",desc:"Reshape a transactional sales log into a 2D matrix of Total Revenue with 'Region' as row index, 'Product' as column headers, 0 for missing pairs, and automatic row/column grand totals.",hint:"Call pd.pivot_table(df, values='Revenue', index='Region', columns='Product', aggfunc='sum', fill_value=0, margins=True, margins_name='Grand_Total').",solutionCode:`pd.pivot_table(
    sales,
    values="Revenue",
    index="Region",
    columns="Product",
    aggfunc="sum",
    fill_value=0,
    margins=True,
    margins_name="Total"
)`},{id:4,title:"Challenge 4: Relational Discrepancy & Lineage Audit",difficulty:"Hard",desc:"Merge candidate registration records with online test submissions to identify two lists: (A) Registered candidates who missed the test, and (B) Unregistered walk-in test takers.",hint:"Use pd.merge(registered, submitted, on='CandidateID', how='outer', indicator=True). Filter by _merge == 'left_only' and _merge == 'right_only'.",solutionCode:`audit = pd.merge(registered, submitted, on="CandidateID", how="outer", indicator=True)
absentees = audit[audit["_merge"] == "left_only"][["CandidateID", "Name"]]
walkins = audit[audit["_merge"] == "right_only"][["CandidateID", "Score"]]`},{id:5,title:"Challenge 5: Production Pipeline & Heap Top-K Extraction",difficulty:"Hard",desc:"Build a pure Python pipeline function that ingests raw score dictionaries, computes a weighted composite score (0.4 * Test1 + 0.6 * Test2), and extracts the Top-K candidates in O(N log K) time.",hint:"Standardize columns with df.columns.str.lower(), compute composite score, and call df.nlargest(top_k, 'composite_score').",solutionCode:`def etl_pipeline(data_dict, top_k=3):
    df = pd.DataFrame(data_dict)
    df.columns = df.columns.str.lower().str.replace(" ", "_")
    df["composite_score"] = (df["test_1"] * 0.4) + (df["test_2"] * 0.6)
    return df.nlargest(n=top_k, columns="composite_score").reset_index(drop=True)`}],D=()=>{const[n,i]=r.useState("challenges_studio"),[m,x]=r.useState("part1"),[p,b]=r.useState(1),[d,u]=r.useState(!1),[c,g]=r.useState(!1),s=o.find(t=>t.id===m)||o[0],a=l.find(t=>t.id===p)||l[0];return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-orange-900/40 via-amber-900/30 to-slate-900/60 border border-orange-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-full",children:"Applied Challenges"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 25"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Practice Problems in Pandas Essentials"}),e.jsx("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:"Test and solidify your core data manipulation skills. Solve five comprehensive industrial challenges covering multi-criteria filtering, group median imputation, pivot tables, outer reconciliation audits, and heap-based top-K pipelines."})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-orange-500/20",children:"🎯 Code"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>i("challenges_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${n==="challenges_studio"?"bg-orange-600 text-white shadow-lg shadow-orange-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"🎯 Practice Challenge Console"}),e.jsxs("button",{onClick:()=>i("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${n==="python_code"?"bg-orange-600 text-white shadow-lg shadow-orange-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",o.length," Scripts)"]}),e.jsx("button",{onClick:()=>i("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${n==="theory_notes"?"bg-orange-600 text-white shadow-lg shadow-orange-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>i("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${n==="quiz"?"bg-orange-600 text-white shadow-lg shadow-orange-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",h.length,")"]})]}),n==="challenges_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-5 gap-2",children:l.map(t=>e.jsxs("button",{onClick:()=>{b(t.id),u(!1),g(!1)},className:`p-3 rounded-xl text-left border transition-all ${p===t.id?"bg-orange-950/60 border-orange-500 text-white shadow-md shadow-orange-500/20":"bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-mono font-bold text-orange-400",children:["P-",t.id]}),e.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded font-bold ${t.difficulty==="Medium"?"bg-blue-950 text-blue-300 border border-blue-800":"bg-purple-950 text-purple-300 border border-purple-800"}`,children:t.difficulty})]}),e.jsx("div",{className:"text-xs font-bold text-slate-200 mt-1 truncate",children:t.title.split(":")[1]})]},t.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-xs font-mono text-orange-400 uppercase tracking-wider",children:[a.difficulty," Difficulty • Problem ",a.id," of ",l.length]}),e.jsx("h2",{className:"text-xl font-bold text-white mt-1",children:a.title})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>u(!d),className:"px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-amber-300 border border-amber-500/30 hover:bg-slate-700 transition-all",children:["💡 ",d?"Hide Hint":"Show Hint"]}),e.jsxs("button",{onClick:()=>g(!c),className:"px-3 py-1.5 rounded-xl text-xs font-semibold bg-orange-600 text-white shadow-md hover:bg-orange-500 transition-all",children:["🔑 ",c?"Hide Solution":"Reveal Solution"]})]})]}),e.jsx("div",{className:"text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:e.jsx("p",{children:a.desc})}),d&&e.jsxs("div",{className:"bg-amber-950/30 border border-amber-500/40 rounded-xl p-4 text-xs text-amber-200 leading-relaxed",children:[e.jsxs("div",{className:"font-bold mb-1 flex items-center gap-1.5",children:[e.jsx("span",{children:"💡"})," Implementation Hint:"]}),a.hint]}),c&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-xs font-bold text-emerald-400 flex items-center gap-1.5",children:[e.jsx("span",{children:"✓"})," Verified Python / Pandas Solution:"]}),e.jsx("pre",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre",children:a.solutionCode})]})]}),e.jsx(v,{topic:"Algorithmic Thinking in Pandas Problem Solving",text:"When tackling complex Pandas problems, decompose the problem into modular stages: (1) Vectorized calculations, (2) Clean group aggregations or transforms, and (3) Boolean filtering. Strive to write clean, fluent method chains that read like English prose without clumsy intermediate variables!"})]}),n==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:o.map(t=>e.jsxs("button",{onClick:()=>x(t.id),className:`p-4 rounded-xl text-left border transition-all ${m===t.id?"bg-orange-950/60 border-orange-500 text-white shadow-lg shadow-orange-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-orange-400 uppercase tracking-wider mb-1",children:t.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:t.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:s.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:s.summary})]})}),e.jsx(f,{fileModule:s.code,title:s.fileName})]})]}),n==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(_,{text:T,title:"Topic 25 Revision Notes: Practice Problems"})}),n==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(y,{questions:h,title:"Topic 25 Knowledge Check: Practice Problems"})})]})})};export{D as default};
