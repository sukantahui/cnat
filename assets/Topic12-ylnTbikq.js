import{b as o,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as x}from"./PythonFileLoader-DUNJ9gwR.js";import{F as f}from"./FAQTemplate-D_90hN4m.js";import{P as g}from"./PlainTextPrint-yt10TRX1.js";import{T as b}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const _=`"""\r
==============================================================================\r
Topic 12: Renaming Columns in Pandas\r
Script 01: Dictionary Mapping with df.rename(columns={...})\r
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
# Raw dataset with inconsistent / verbose column headers\r
raw_data = {\r
    "stud_id": [101, 102, 103, 104, 105, 106, 107],\r
    "full_name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
    "loc_residence": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore", "Titagarh"],\r
    "m_score_2026": [85, 92, 65, 88, 78, 90, 84],\r
    "sci_eval_pct": [90, 95, 70, 85, 80, 92, 88]\r
}\r
\r
df = pd.DataFrame(raw_data)\r
section("1. ORIGINAL DATAFRAME WITH UNFRIENDLY COLUMN HEADERS")\r
print(df)\r
print("\\nOriginal Column Names:", df.columns.tolist())\r
\r
# --------------------------------------------------------------------------\r
# 1. Renaming specific columns via columns parameter dictionary\r
# --------------------------------------------------------------------------\r
section("2. RENAMING TARGETED COLUMNS VIA df.rename(columns={...})")\r
# df.rename is selective: unmentioned columns remain untouched!\r
df_renamed = df.rename(columns={\r
    "stud_id": "StudentID",\r
    "full_name": "StudentName",\r
    "m_score_2026": "MathScore",\r
    "sci_eval_pct": "ScienceScore"\r
})\r
\r
print(df_renamed)\r
print("\\nRenamed Column Names:", df_renamed.columns.tolist())\r
\r
# --------------------------------------------------------------------------\r
# 2. Renaming Index Labels (Row Index)\r
# --------------------------------------------------------------------------\r
section("3. RENAMING ROW INDEX LABELS (index={...})")\r
df_indexed = df_renamed.set_index("StudentID")\r
# Rename specific index entries\r
df_indexed_custom = df_indexed.rename(index={101: "101-BATCH-A", 102: "102-BATCH-A"})\r
print(df_indexed_custom.head(4))\r
\r
# --------------------------------------------------------------------------\r
# 3. Handling Non-Existent Column Names (errors parameter)\r
# --------------------------------------------------------------------------\r
section("4. SAFETY WITH errors='ignore' VS errors='raise'")\r
# By default, df.rename ignores keys that don't exist in the DataFrame\r
df_safe = df.rename(columns={"non_existent_col": "SomethingElse"}, errors="ignore")\r
print("Successfully ignored missing dictionary key without raising an error.")\r
`,y=`"""\r
==============================================================================\r
Topic 12: Renaming Columns in Pandas\r
Script 02: Bulk Renaming with String Methods (.str.lower, .str.replace, .str.strip)\r
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
# Dirty real-world column names with leading whitespace, special characters, spaces, mixed casing\r
messy_data = {\r
    "  STUDENT ID  ": [101, 102, 103, 104, 105, 106, 107],\r
    "First & Last Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
    "Locality / Town": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore", "Titagarh"],\r
    "Math (Score / 100)": [85, 92, 65, 88, 78, 90, 84],\r
    "Science (Pct %)": [90, 95, 70, 85, 80, 92, 88]\r
}\r
\r
df = pd.DataFrame(messy_data)\r
section("1. MESSY REAL-WORLD HEADERS (Spaces, Special Characters, Mixed Cases)")\r
print("Columns:", df.columns.tolist())\r
\r
# --------------------------------------------------------------------------\r
# 1. Cleaning with .columns.str methods\r
# --------------------------------------------------------------------------\r
section("2. VECTORIZED STRING CLEANING ON df.columns.str")\r
# Step 1: Strip leading and trailing whitespace\r
df.columns = df.columns.str.strip()\r
\r
# Step 2: Convert to lowercase\r
df.columns = df.columns.str.lower()\r
\r
# Step 3: Replace spaces, slashes, and ampersands with clean snake_case underscores\r
df.columns = (\r
    df.columns\r
    .str.replace(" & ", "_and_")\r
    .str.replace(" / ", "_")\r
    .str.replace(" ", "_")\r
    .str.replace("(", "", regex=False)\r
    .str.replace(")", "", regex=False)\r
    .str.replace("%", "pct", regex=False)\r
)\r
\r
print("Standardized snake_case column names:")\r
print(df.columns.tolist())\r
print("\\nCleaned DataFrame:")\r
print(df.head())\r
\r
# --------------------------------------------------------------------------\r
# 2. Applying Python string functions via df.rename(mapper=str.upper)\r
# --------------------------------------------------------------------------\r
section("3. PASSING STRING CALLABLES TO df.rename(columns=...)")\r
# Convert all column names to UPPERCASE using standard callable\r
df_upper = df.rename(columns=str.upper)\r
print("Upper-cased columns:", df_upper.columns.tolist())\r
\r
# Convert to Title Case\r
df_title = df.rename(columns=lambda col: col.replace("_", " ").title())\r
print("Title Cased columns:", df_title.columns.tolist())\r
`,S=`"""\r
==============================================================================\r
Topic 12: Renaming Columns in Pandas\r
Script 03: add_prefix(), add_suffix(), and set_axis()\r
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
    "Score": [85, 92, 65, 88, 78, 90, 84],\r
    "Rank": [3, 1, 7, 2, 6, 4, 5],\r
    "Attendance": [95, 98, 80, 92, 85, 94, 90]\r
}\r
\r
df = pd.DataFrame(data, index=["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"])\r
section("1. ORIGINAL DATAFRAME")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. add_prefix(): Ideal for table joins and namespacing features\r
# --------------------------------------------------------------------------\r
section("2. df.add_prefix('Term1_')")\r
df_term1 = df.add_prefix("Term1_")\r
print(df_term1)\r
\r
# --------------------------------------------------------------------------\r
# 2. add_suffix(): Adding dimension / unit annotations\r
# --------------------------------------------------------------------------\r
section("3. df.add_suffix('_pct')")\r
df_annotated = df.add_suffix("_pct")\r
print(df_annotated)\r
\r
# --------------------------------------------------------------------------\r
# 3. set_axis(): Method chaining replacement of full column or index names\r
# --------------------------------------------------------------------------\r
section("4. df.set_axis([...], axis=1) (METHOD-CHAINING COMPLIANT)")\r
# Overriding all column names inside a pipeline\r
df_standardized = (\r
    df\r
    .set_axis(["Marks_Final", "Position", "Attendance_Rate"], axis=1)\r
    .sort_values(by="Marks_Final", ascending=False)\r
)\r
\r
print(df_standardized)\r
`,N=`==============================================================================\r
TOPIC 12 NOTE: RENAMING COLUMNS IN PANDAS\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
\r
1. THE THREE CORE STRATEGIES FOR RENAMING COLUMNS:\r
   --------------------------------------------------------------------------\r
   a) Selective Mapping with df.rename(columns={...}):\r
      - Syntax: \`df.rename(columns={'old_col': 'new_col', ...})\`\r
      - Selective: Only modifies keys explicitly present in the dictionary.\r
      - Safe: Ignores missing dictionary keys without crashing (errors='ignore' by default).\r
      - Pure: Returns a new DataFrame copy.\r
\r
   b) Full Overwrite via df.columns = [...]:\r
      - Syntax: \`df.columns = ['ColA', 'ColB', 'ColC']\`\r
      - Strict requirement: Length of the new list must EXACTLY equal \`len(df.columns)\`.\r
      - Useful for fast, complete re-labeling of simple DataFrames.\r
\r
   c) Vectorized String Cleaning (df.columns.str):\r
      - \`df.columns = df.columns.str.strip()\` -> eliminates leading/trailing whitespace.\r
      - \`df.columns = df.columns.str.lower()\` -> uniform lowercase.\r
      - \`df.columns = df.columns.str.replace(' ', '_')\` -> snake_case conversion.\r
      - Essential for standardizing untrusted incoming CSV headers.\r
\r
2. CONVENIENCE & PIPELINE METHODS:\r
   --------------------------------------------------------------------------\r
   - \`df.add_prefix('Sales_')\`: Prefixes all columns, crucial before multi-table joins to avoid column collisions.\r
   - \`df.add_suffix('_2026')\`: Appends suffixes to all columns.\r
   - \`df.set_axis(new_names, axis=1)\`: Method-chaining friendly alternative to \`df.columns = ...\`.\r
   - Passing functions to rename: \`df.rename(columns=str.upper)\` or \`df.rename(columns=lambda c: c.strip().lower())\`.\r
\r
3. BEST PRACTICES FOR MACHINE LEARNING & DATA ENGINEERING:\r
   --------------------------------------------------------------------------\r
   - Always standardize columns to \`snake_case\` (all lowercase, words separated by underscores, no special characters like $, %, slashes, or whitespace).\r
   - Enables dot notation column access (\`df.total_marks\` instead of \`df['Total Marks (%)']\`).\r
   - Prevents SQL and PySpark query errors when exporting DataFrames downstream.\r
`,m=[{id:1,question:"How do you rename only the column 'dob' to 'DateOfBirth' while leaving all other columns unchanged?",options:["df.rename(columns={'dob': 'DateOfBirth'})","df.columns['dob'] = 'DateOfBirth'","df.replace_column('dob', 'DateOfBirth')","df.set_name('dob', 'DateOfBirth')"],correctAnswer:"df.rename(columns={'dob': 'DateOfBirth'})",explanation:"df.rename(columns={'old': 'new'}) uses dictionary mapping to selectively rename only the specified columns while leaving all other headers untouched."},{id:2,question:"What happens if you assign a list to df.columns that has fewer elements than the total number of columns in the DataFrame?",options:["Pandas raises a ValueError: Length mismatch","Pandas fills the remaining column names with None","Pandas deletes the columns that were not provided in the list","Pandas creates blank columns"],correctAnswer:"Pandas raises a ValueError: Length mismatch",explanation:"Assigning directly to df.columns requires an iterable whose length exactly matches the number of columns in the DataFrame, otherwise a ValueError is raised."},{id:3,question:"Which of the following lines standardizes all column names to lowercase and replaces spaces with underscores?",options:["df.columns = df.columns.str.lower().str.replace(' ', '_')","df.rename_all(case='lower', space='_')","df.columns.snake_case()","df.format_headers(lower=True, underscore=True)"],correctAnswer:"df.columns = df.columns.str.lower().str.replace(' ', '_')",explanation:"df.columns is a Pandas Index object that exposes the .str accessor, allowing vectorized string transformations such as .lower() and .replace(' ', '_')."},{id:4,question:"What is the primary advantage of using df.set_axis(['A', 'B', 'C'], axis=1) over direct assignment df.columns = ['A', 'B', 'C']?",options:["set_axis() returns a DataFrame copy, making it suitable for method chaining pipelines","set_axis() runs 10x faster because it compiles to C","set_axis() automatically converts data types to integers","set_axis() only changes row labels, never columns"],correctAnswer:"set_axis() returns a DataFrame copy, making it suitable for method chaining pipelines",explanation:"df.set_axis() is a functional method that returns a new DataFrame, making it compatible with fluent method chaining (e.g. df.set_axis(...).sort_values(...).head())."},{id:5,question:"Which method easily prefixes all column names with 'Dept_' prior to performing a merge?",options:["df.add_prefix('Dept_')","df.prepend_all('Dept_')","df.columns += 'Dept_'","df.attach_prefix('Dept_')"],correctAnswer:"df.add_prefix('Dept_')",explanation:"df.add_prefix('prefix_string') prepends the specified prefix to all column labels in the DataFrame, helping prevent column name collisions during joins."}],i=[{id:"part1",fileName:"01_rename_dictionary_mapping.py",title:"1. Selective Dictionary Mapping (df.rename)",badge:"df.rename(columns={...})",code:_,summary:"Selectively rename targeted columns and row index labels using dictionaries without mutating untouched fields."},{id:"part2",fileName:"02_string_methods_and_bulk_renaming.py",title:"2. Vectorized String Cleaning (.str.lower, .replace)",badge:"df.columns.str",code:y,summary:"Strip messy whitespace, sanitize special characters, and convert messy column names into standardized snake_case."},{id:"part3",fileName:"03_prefix_suffix_and_set_axis.py",title:"3. add_prefix, add_suffix & set_axis",badge:"add_prefix & set_axis",code:S,summary:"Namespace features prior to multi-table joins using add_prefix/add_suffix and execute fluent pipeline chaining with set_axis."}],w=[{id:101,name:"Debangshu",loc:"Barrackpore",math:85,sci:90},{id:102,name:"Susmita",loc:"Shyamnagar",math:92,sci:95},{id:103,name:"Swadeep",loc:"Ichapur",math:65,sci:70},{id:104,name:"Tuhina",loc:"Naihati",math:88,sci:85},{id:105,name:"Sachin",loc:"Kolkata",math:78,sci:80},{id:106,name:"Mahima",loc:"Barrackpore",math:90,sci:92},{id:107,name:"Abhronila",loc:"Titagarh",math:84,sci:88}],l=[{id:"raw",label:"1. Raw Messy Headers",cols:["  STUD_ID  ","Student & Full Name","Locality / Town","Math (Score/100)","Science (Pct %)"],code:`# Original dirty columns with whitespace and special symbols
df.columns`},{id:"snake_case",label:"2. Standard snake_case (ML Best Practice)",cols:["student_id","full_name","locality_town","math_score","science_pct"],code:`df.columns = (df.columns.str.strip().str.lower()
    .str.replace(' & ', '_and_')
    .str.replace(' / ', '_')
    .str.replace(' ', '_'))`},{id:"pascal_case",label:"3. PascalCase / Dictionary Map",cols:["StudentID","StudentName","Locality","MathScore","ScienceScore"],code:`df = df.rename(columns={
    'stud_id': 'StudentID',
    'full_name': 'StudentName',
    'math': 'MathScore',
    'sci': 'ScienceScore'
})`},{id:"uppercase",label:"4. UPPERCASE",cols:["STUDENT_ID","FULL_NAME","LOCALITY","MATH_SCORE","SCIENCE_SCORE"],code:"df = df.rename(columns=str.upper)"},{id:"prefix_term1",label:"5. Prefix Namespaced (add_prefix)",cols:["Term1_ID","Term1_Name","Term1_Locality","Term1_Math","Term1_Science"],code:"df = df.add_prefix('Term1_')"}],k=()=>{const[a,s]=o.useState("rename_studio"),[d,p]=o.useState("part1"),[c,u]=o.useState("snake_case"),r=i.find(n=>n.id===d)||i[0],t=l.find(n=>n.id===c)||l[1];return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-cyan-900/40 via-blue-900/30 to-slate-900/60 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full",children:"Schema Normalization"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 12"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Renaming Columns in Pandas"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:["Transform clumsy raw column headers into clean, Pythonic identifiers. Master"," ",e.jsx("code",{className:"text-cyan-300 bg-slate-800 px-1 py-0.5 rounded",children:"df.rename()"}),", vectorized string transformations on"," ",e.jsx("code",{className:"text-cyan-300 bg-slate-800 px-1 py-0.5 rounded",children:"df.columns.str"}),", and table namespacing with"," ",e.jsx("code",{className:"text-cyan-300 bg-slate-800 px-1 py-0.5 rounded",children:"add_prefix()"}),"."]})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-cyan-500/20",children:"A→B"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>s("rename_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="rename_studio"?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"🏷️ Header Renaming Studio"}),e.jsxs("button",{onClick:()=>s("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="python_code"?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",i.length," Scripts)"]}),e.jsx("button",{onClick:()=>s("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="theory_notes"?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>s("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="quiz"?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",m.length,")"]})]}),a==="rename_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Select Naming Standard / Transformation Mode"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3",children:l.map(n=>e.jsxs("button",{onClick:()=>u(n.id),className:`p-3.5 rounded-xl text-left border transition-all ${c===n.id?"bg-cyan-950/60 border-cyan-500 text-white shadow-lg shadow-cyan-500/10":"bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-cyan-300",children:n.label}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-1 font-mono truncate",children:[n.cols[0],", ",n.cols[1],"..."]})]},n.id))}),e.jsxs("div",{className:"mt-4 p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 mb-1 font-sans",children:"# Corresponding Pandas Transformation Code:"}),e.jsx("pre",{className:"font-mono text-xs text-cyan-300 whitespace-pre-wrap",children:t.code})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Transformed DataFrame Preview"]}),e.jsxs("span",{className:"text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800",children:["Active Style: ",t.label]})]}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80",children:[e.jsx("th",{className:"p-3 text-slate-400 font-mono",children:"Index"}),e.jsx("th",{className:"p-3 text-cyan-300 font-mono font-bold bg-cyan-950/20",children:t.cols[0]}),e.jsx("th",{className:"p-3 text-cyan-300 font-mono font-bold bg-cyan-950/20",children:t.cols[1]}),e.jsx("th",{className:"p-3 text-cyan-300 font-mono font-bold bg-cyan-950/20",children:t.cols[2]}),e.jsx("th",{className:"p-3 text-cyan-300 font-mono font-bold bg-cyan-950/20",children:t.cols[3]}),e.jsx("th",{className:"p-3 text-cyan-300 font-mono font-bold bg-cyan-950/20",children:t.cols[4]})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:w.map((n,h)=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-slate-500",children:h}),e.jsx("td",{className:"p-3 text-white font-bold",children:n.id}),e.jsx("td",{className:"p-3 text-slate-200 font-sans",children:n.name}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:n.loc}),e.jsx("td",{className:"p-3 text-cyan-300",children:n.math}),e.jsx("td",{className:"p-3 text-cyan-300",children:n.sci})]},n.id))})]})]}),e.jsx(b,{topic:"Schema Cleaning & Downstream ML Compatibility",text:"Never build machine learning pipelines with columns containing spaces, parentheses, or uppercase letters like 'Math (Score / 100)'. Such headers break dot-notation (df.math_score), fail inside pd.query(), and trigger errors when exporting to Parquet, SQL databases, or PySpark. Always clean headers first with df.columns = df.columns.str.lower().str.replace(' ', '_')!"})]}),a==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:i.map(n=>e.jsxs("button",{onClick:()=>p(n.id),className:`p-4 rounded-xl text-left border transition-all ${d===n.id?"bg-cyan-950/60 border-cyan-500 text-white shadow-lg shadow-cyan-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1",children:n.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:n.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:n.summary})]},n.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:r.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:r.summary})]})}),e.jsx(x,{fileModule:r.code,title:r.fileName})]})]}),a==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(g,{text:N,title:"Topic 12 Revision Notes: Renaming Columns"})}),a==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(f,{questions:m,title:"Topic 12 Knowledge Check: Renaming Columns"})})]})})};export{k as default};
