import{b as a,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as C}from"./PythonFileLoader-DUNJ9gwR.js";import{F as I}from"./FAQTemplate-D_90hN4m.js";import{P as A}from"./PlainTextPrint-yt10TRX1.js";import{T as D}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const P=`"""\r
==============================================================================\r
Topic 10: Adding and Dropping Columns in Pandas\r
Script 01: Adding New & Derived Columns\r
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
# Initial student dataset\r
data = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore", "Titagarh"],\r
    "Math": [85, 92, 65, 88, 78, 90, 84],\r
    "Science": [90, 95, 70, 85, 80, 92, 88]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. ORIGINAL DATAFRAME")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Adding a constant / scalar column\r
# --------------------------------------------------------------------------\r
section("2. ADDING A CONSTANT / SCALAR COLUMN")\r
df["Institute"] = "Coder & AccoTax"\r
df["Batch"] = "2026-ML"\r
print(df[["Name", "Locality", "Institute", "Batch"]].head())\r
\r
# --------------------------------------------------------------------------\r
# 2. Creating Derived Calculated Columns (Vectorized Arithmetic)\r
# --------------------------------------------------------------------------\r
section("3. VECTORIZED ARITHMETIC COLUMN CREATION")\r
# Adding Total Score & Average Percentage\r
df["TotalMarks"] = df["Math"] + df["Science"]\r
df["Average"] = df["TotalMarks"] / 2.0\r
df["IsDistinction"] = df["Average"] >= 90.0\r
\r
print(df[["Name", "Math", "Science", "TotalMarks", "Average", "IsDistinction"]])\r
\r
# --------------------------------------------------------------------------\r
# 3. Conditional Column Creation with numpy.where()\r
# --------------------------------------------------------------------------\r
section("4. CONDITIONAL COLUMN CREATION (np.where)")\r
# Condition: If Average >= 85 -> 'Grade A', elif >= 75 -> 'Grade B', else 'Grade C'\r
df["Grade"] = np.where(\r
    df["Average"] >= 90, "A+",\r
    np.where(df["Average"] >= 80, "A",\r
    np.where(df["Average"] >= 70, "B", "C"))\r
)\r
\r
print(df[["Name", "TotalMarks", "Average", "Grade"]])\r
`,_=`"""\r
==============================================================================\r
Topic 10: Adding and Dropping Columns in Pandas\r
Script 02: Dropping Columns, Rows, and Understanding inplace Parameter\r
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
    "StudentID": [101, 102, 103, 104, 105, 106, 107],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore", "Titagarh"],\r
    "TempNotes": ["Fee Paid", "Pending", "Fee Paid", "Fee Paid", "Pending", "Fee Paid", "Fee Paid"],\r
    "InternalCode": ["BKP-01", "BKP-02", "BKP-03", "BKP-04", "BKP-05", "BKP-06", "BKP-07"],\r
    "Math": [85, 92, 65, 88, 78, 90, 84]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. STARTING DATAFRAME WITH UNWANTED COLUMNS")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Dropping a single column via columns parameter (Returns New DataFrame)\r
# --------------------------------------------------------------------------\r
section("2. DROPPING COLUMNS VIA columns=[...] (DEFAULT: NON-DESTRUCTIVE)")\r
df_clean = df.drop(columns=["TempNotes"])\r
print("Original df columns:", list(df.columns))\r
print("df_clean columns:   ", list(df_clean.columns))\r
\r
# --------------------------------------------------------------------------\r
# 2. Dropping multiple columns via axis=1 / axis='columns'\r
# --------------------------------------------------------------------------\r
section("3. DROPPING MULTIPLE COLUMNS (axis=1)")\r
df_trimmed = df.drop(["TempNotes", "InternalCode"], axis=1)\r
print(df_trimmed)\r
\r
# --------------------------------------------------------------------------\r
# 3. Dropping Rows by Index (axis=0 / axis='index')\r
# --------------------------------------------------------------------------\r
section("4. DROPPING ROWS BY INDEX LABELS (axis=0)")\r
# Dropping row index 2 (Swadeep) and index 4 (Sachin)\r
df_without_2_4 = df.drop(index=[2, 4])\r
print("Rows remaining:", len(df_without_2_4))\r
print(df_without_2_4[["StudentID", "Name", "Locality"]])\r
\r
# --------------------------------------------------------------------------\r
# 4. Inplace Modification vs Modern Best Practice\r
# --------------------------------------------------------------------------\r
section("5. UNDERSTANDING inplace=True VS METHOD REASSIGNMENT")\r
df_copy = df.copy()\r
\r
# Inplace mutation\r
df_copy.drop(columns=["InternalCode"], inplace=True)\r
print("df_copy after inplace=True:", list(df_copy.columns))\r
\r
# Modern Pandas Best Practice: Prefer explicit reassignment over inplace=True\r
# Reasons: inplace=True often doesn't save memory under Copy-on-Write (CoW),\r
# prevents method chaining, and will be deprecated in future Pandas versions.\r
df_reassigned = df.drop(columns=["TempNotes", "InternalCode"])\r
print("Modern pattern (df = df.drop(...)):")\r
print(df_reassigned.head(3))\r
`,k=`"""\r
==============================================================================\r
Topic 10: Adding and Dropping Columns in Pandas\r
Script 03: Positional Insertion, Popping, and Method Chaining with .assign()\r
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
    "StudentID": [101, 102, 103, 104, 105, 106, 107],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
    "Math": [85, 92, 65, 88, 78, 90, 84],\r
    "Science": [90, 95, 70, 85, 80, 92, 88]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. INITIAL DATAFRAME")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. df.insert(): Inserting a column at a specific integer position\r
# --------------------------------------------------------------------------\r
section("2. df.insert(loc, column, value)")\r
# Standard assignment df['Col'] = ... always appends to the END.\r
# df.insert() allows placing a column anywhere (e.g. index position 1).\r
roll_series = [f"ROLL-2026-{i:03d}" for i in range(1, 8)]\r
df.insert(loc=1, column="RollNumber", value=roll_series)\r
print("DataFrame after df.insert at position index 1:")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 2. df.pop(): Destructive extraction of a column as a Series\r
# --------------------------------------------------------------------------\r
section("3. df.pop(column_name)")\r
# pop() deletes the column from the DataFrame AND returns it as a Series\r
extracted_rolls = df.pop("RollNumber")\r
print("Extracted Series via pop():")\r
print(extracted_rolls)\r
print("\\nDataFrame after pop (RollNumber removed):")\r
print(df.columns.tolist())\r
\r
# --------------------------------------------------------------------------\r
# 3. df.assign(): Functional Method Chaining (Non-destructive)\r
# --------------------------------------------------------------------------\r
section("4. df.assign() FOR ELEGANT METHOD CHAINING")\r
# assign() allows creating multiple derived columns in one expression,\r
# utilizing lambdas to reference newly created columns in the same call!\r
\r
df_enriched = (\r
    df.assign(\r
        Total=lambda x: x["Math"] + x["Science"],\r
        Percentage=lambda x: x["Total"] / 2.0,\r
        Passed=lambda x: x["Percentage"] >= 75.0\r
    )\r
    .sort_values(by="Percentage", ascending=False)\r
    .reset_index(drop=True)\r
)\r
\r
print("Result of method chaining pipeline with .assign():")\r
print(df_enriched)\r
`,M=`==============================================================================\r
TOPIC 10 NOTE: ADDING AND DROPPING COLUMNS IN PANDAS\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
\r
1. THE FOUR MODES OF ADDING COLUMNS:\r
   --------------------------------------------------------------------------\r
   a) Direct Bracket Assignment (df['NewCol'] = ...):\r
      - Scalar broadcasting: df['City'] = 'Barrackpore' assigns value to every row.\r
      - Vectorized computation: df['Total'] = df['Math'] + df['Science'].\r
      - Conditionals: df['Grade'] = np.where(df['Total'] >= 180, 'A+', 'B').\r
      - Always places the new column as the LAST column.\r
\r
   b) Positional Insertion (df.insert(loc, column, value)):\r
      - Inserts column at exact integer index \`loc\` (0-indexed).\r
      - Modifies DataFrame in place.\r
      - Example: df.insert(1, 'RollNumber', roll_list)\r
\r
   c) Functional Method Chaining (df.assign(**kwargs)):\r
      - Returns a brand new DataFrame copy.\r
      - Allows chained pipeline workflows.\r
      - Can reference previously defined columns in the same assign call using lambdas:\r
        df.assign(Total=lambda x: x['A'] + x['B'], Pct=lambda x: x['Total']/200)\r
\r
   d) Column Extraction and Removal (df.pop(col)):\r
      - Removes column in-place and returns it as a pd.Series.\r
\r
2. DROPPING COLUMNS AND ROWS:\r
   --------------------------------------------------------------------------\r
   a) Dropping Columns via columns parameter:\r
      df_clean = df.drop(columns=['TempNotes', 'InternalCode'])\r
      (Clear, readable, unambiguous).\r
\r
   b) Dropping via axis parameter:\r
      df.drop(['Col1', 'Col2'], axis=1)  # axis=1 or axis='columns'\r
      df.drop([0, 1, 4], axis=0)         # axis=0 or axis='index' (drops rows)\r
\r
   c) The inplace=True Debate:\r
      - Historical use: df.drop(columns=['Col'], inplace=True)\r
      - Modern Pandas 2.x/3.x direction: Deprecating inplace=True in favor of Copy-on-Write (CoW).\r
      - Best Practice: Explicit reassignment (df = df.drop(...)) maintains clean data lineage and chaining.\r
\r
3. COMMON PITFALLS & PERFORMANCE TIPS:\r
   --------------------------------------------------------------------------\r
   - SettingWithCopyWarning: Occurs when adding a column to a DataFrame slice without .copy().\r
   - Avoid iterating rows with for loops to compute new columns—always use vectorized column operations or np.where.\r
   - Dropping non-existent columns raises KeyError unless errors='ignore' is supplied:\r
     df.drop(columns=['UnknownCol'], errors='ignore')\r
`,b=[{id:1,question:"Which of the following creates a new column 'Total' by summing 'Math' and 'Science' in a vectorized manner?",options:["df['Total'] = df['Math'] + df['Science']","df.append_column('Total', df['Math'] + df['Science'])","for row in df: row['Total'] = row['Math'] + row['Science']","df.add_field('Total', sum(df['Math'], df['Science']))"],correctAnswer:"df['Total'] = df['Math'] + df['Science']",explanation:"Pandas supports vectorized arithmetic between Series. Directly assigning df['Total'] = df['Math'] + df['Science'] performs element-wise addition across all rows in C-level performance."},{id:2,question:"What is the recommended modern way to drop a column named 'TemporaryID' without modifying the original DataFrame?",options:["df_clean = df.drop(columns=['TemporaryID'])","df.delete('TemporaryID', inplace=False)","del df['TemporaryID']","df_clean = df.remove('TemporaryID')"],correctAnswer:"df_clean = df.drop(columns=['TemporaryID'])",explanation:"df.drop(columns=['...']) is the cleanest and most readable syntax for dropping columns. It returns a new DataFrame copy by default without mutating the original df."},{id:3,question:"If you want to place a new column 'RollNo' at the first position (index 0) of the DataFrame, which method should you use?",options:["df.insert(0, 'RollNo', roll_data)","df.push_front('RollNo', roll_data)","df['RollNo', 0] = roll_data","df.prepend('RollNo', roll_data)"],correctAnswer:"df.insert(0, 'RollNo', roll_data)",explanation:"df.insert(loc, column, value) allows placing a new column at any specific integer location (loc=0 for the very first column), whereas standard bracket assignment df['...'] always appends to the end."},{id:4,question:"What does df.pop('InternalNotes') do?",options:["Removes 'InternalNotes' from the DataFrame and returns it as a pd.Series","Hides 'InternalNotes' temporarily during printing","Replaces all values in 'InternalNotes' with NaN","Deletes the entire DataFrame if 'InternalNotes' has missing values"],correctAnswer:"Removes 'InternalNotes' from the DataFrame and returns it as a pd.Series",explanation:"df.pop(col) modifies the DataFrame in-place by deleting the specified column and returning that extracted column as a Series object."},{id:5,question:"Why is the use of 'inplace=True' increasingly discouraged in modern Pandas best practices?",options:["It hinders method chaining, complicates memory management with Copy-on-Write (CoW), and is planned for deprecation","It makes code run 100x slower in all circumstances","It forces the DataFrame to convert all numbers into strings","It deletes all row index labels permanently"],correctAnswer:"It hinders method chaining, complicates memory management with Copy-on-Write (CoW), and is planned for deprecation",explanation:"inplace=True prevents elegant method chaining pipelines, offers no real performance or memory gains under Pandas 2.0+ Copy-on-Write (CoW), and is slated for removal in future Pandas major versions."}],u=[{id:"part1",fileName:"01_adding_derived_columns.py",title:"1. Adding Scalar & Vectorized Derived Columns",badge:"Bracket Assignment & np.where",code:P,summary:"Create new columns via direct assignment, constant broadcasting, vectorized multi-column arithmetic, and conditional logic with np.where()."},{id:"part2",fileName:"02_dropping_columns_and_rows_inplace.py",title:"2. Dropping Columns & Rows (inplace vs Pure)",badge:"df.drop(columns=[...])",code:_,summary:"Remove columns and rows safely with .drop(columns=[...]) or axis=1, and explore why modern Pandas favors reassignment over inplace=True."},{id:"part3",fileName:"03_insert_pop_and_assign_methods.py",title:"3. Positional Insertion, Popping & .assign()",badge:"insert, pop, assign",code:k,summary:"Insert columns at exact integer indices with df.insert(), extract them destructively with df.pop(), and build clean pipelines with df.assign()."}],R=[{id:101,name:"Debangshu",locality:"Barrackpore",math:85,sci:90,tempNotes:"Fee Paid",internalCode:"BKP-01"},{id:102,name:"Susmita",locality:"Shyamnagar",math:92,sci:95,tempNotes:"Pending",internalCode:"BKP-02"},{id:103,name:"Swadeep",locality:"Ichapur",math:65,sci:70,tempNotes:"Fee Paid",internalCode:"BKP-03"},{id:104,name:"Tuhina",locality:"Naihati",math:88,sci:85,tempNotes:"Fee Paid",internalCode:"BKP-04"},{id:105,name:"Sachin",locality:"Kolkata",math:78,sci:80,tempNotes:"Pending",internalCode:"BKP-05"},{id:106,name:"Mahima",locality:"Barrackpore",math:90,sci:92,tempNotes:"Fee Paid",internalCode:"BKP-06"},{id:107,name:"Abhronila",locality:"Titagarh",math:84,sci:88,tempNotes:"Fee Paid",internalCode:"BKP-07"}],H=()=>{const[t,c]=a.useState("column_studio"),[f,N]=a.useState("part1"),[r,w]=a.useState(!0),[s,y]=a.useState(!0),[i,T]=a.useState(!0),[o,j]=a.useState(!0),[d,v]=a.useState(!1),[l,S]=a.useState(!1),m=u.find(n=>n.id===f)||u[0],g=R.map(n=>{const p=n.math+n.sci,h=(p/2).toFixed(1);let x="C";return h>=90?x="A+":h>=80?x="A":h>=70&&(x="B"),{...n,totalScore:p,percentage:`${h}%`,grade:x,institute:"Coder & AccoTax"}});return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-teal-900/40 via-cyan-900/30 to-slate-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full",children:"Pandas Transformation Engine"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 10"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Adding and Dropping Columns in Pandas"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:["Master data shaping: create vector-derived columns, insert positionally with"," ",e.jsx("code",{className:"text-teal-300 bg-slate-800 px-1 py-0.5 rounded",children:"df.insert()"}),", eliminate junk fields with"," ",e.jsx("code",{className:"text-teal-300 bg-slate-800 px-1 py-0.5 rounded",children:"df.drop()"}),", and understand why modern Pandas embraces immutable method pipelines."]})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-700 flex items-center justify-center text-white font-mono text-2xl font-bold shadow-lg shadow-teal-500/20",children:"±Col"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>c("column_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${t==="column_studio"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"🎛️ Interactive Column Studio"}),e.jsxs("button",{onClick:()=>c("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${t==="python_code"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",u.length," Scripts)"]}),e.jsx("button",{onClick:()=>c("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${t==="theory_notes"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>c("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${t==="quiz"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",b.length,")"]})]}),t==="column_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"⚡"})," Interactive Column Management Studio"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-rose-900/30",children:[e.jsxs("h3",{className:"text-sm font-bold text-rose-300 uppercase tracking-wider mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🗑️"})," Drop Columns (df.drop)"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("label",{className:"flex items-center gap-3 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:!r,onChange:n=>w(!n.target.checked),className:"w-4 h-4 rounded text-rose-600 focus:ring-rose-500 bg-slate-800 border-slate-700"}),e.jsxs("span",{className:"text-sm text-slate-300",children:["Drop ",e.jsx("code",{className:"text-rose-400 font-mono",children:"TempNotes"})," (Fee status temporary notes)"]})]}),e.jsxs("label",{className:"flex items-center gap-3 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:!s,onChange:n=>y(!n.target.checked),className:"w-4 h-4 rounded text-rose-600 focus:ring-rose-500 bg-slate-800 border-slate-700"}),e.jsxs("span",{className:"text-sm text-slate-300",children:["Drop ",e.jsx("code",{className:"text-rose-400 font-mono",children:"InternalCode"})," (Internal tracking IDs)"]})]})]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-emerald-900/30",children:[e.jsxs("h3",{className:"text-sm font-bold text-emerald-300 uppercase tracking-wider mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"➕"})," Add Derived Columns (df['col'] = ...)"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:i,onChange:n=>T(n.target.checked),className:"w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-800 border-slate-700"}),e.jsxs("span",{className:"text-sm text-slate-300",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"TotalMarks"})," (Math + Sci)"]})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:n=>j(n.target.checked),className:"w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-800 border-slate-700"}),e.jsxs("span",{className:"text-sm text-slate-300",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Percentage"})," (Total / 2)"]})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:d,onChange:n=>v(n.target.checked),className:"w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-800 border-slate-700"}),e.jsxs("span",{className:"text-sm text-slate-300",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Grade"})," (np.where)"]})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:n=>S(n.target.checked),className:"w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-800 border-slate-700"}),e.jsxs("span",{className:"text-sm text-slate-300",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Institute"})," (Scalar)"]})]})]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-teal-300 overflow-x-auto",children:[e.jsx("div",{className:"text-slate-500 mb-1 font-sans text-xs",children:"# Executed Python Operations:"}),e.jsx("div",{children:"df = raw_df.copy()"}),(!r||!s)&&e.jsx("div",{className:"text-rose-400",children:`df = df.drop(columns=[${[r?null:"'TempNotes'",s?null:"'InternalCode'"].filter(Boolean).join(", ")}])`}),i&&e.jsx("div",{className:"text-emerald-400",children:"df['TotalMarks'] = df['Math'] + df['Science']"}),o&&e.jsx("div",{className:"text-emerald-400",children:"df['Percentage'] = df['TotalMarks'] / 2.0"}),d&&e.jsx("div",{className:"text-emerald-400",children:"df['Grade'] = np.where(df['Percentage'] >= 90, 'A+', np.where(df['Percentage'] >= 80, 'A', 'B'))"}),l&&e.jsx("div",{className:"text-cyan-400",children:"df['Institute'] = 'Coder & AccoTax'"})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[e.jsx("div",{className:"flex items-center justify-between mb-4",children:e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Resulting DataFrame (df.shape = (",g.length,","," ",3+(r?1:0)+(s?1:0)+2+(i?1:0)+(o?1:0)+(d?1:0)+(l?1:0),"))"]})}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80",children:[e.jsx("th",{className:"p-3 text-slate-400 font-mono",children:"Index"}),e.jsx("th",{className:"p-3 text-teal-300 font-semibold",children:"StudentID"}),e.jsx("th",{className:"p-3 text-teal-300 font-semibold",children:"Name"}),e.jsx("th",{className:"p-3 text-teal-300 font-semibold",children:"Locality"}),r&&e.jsx("th",{className:"p-3 text-amber-300 font-semibold",children:"TempNotes"}),s&&e.jsx("th",{className:"p-3 text-amber-300 font-semibold",children:"InternalCode"}),e.jsx("th",{className:"p-3 text-cyan-300 font-semibold",children:"Math"}),e.jsx("th",{className:"p-3 text-cyan-300 font-semibold",children:"Science"}),i&&e.jsx("th",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/20",children:"TotalMarks"}),o&&e.jsx("th",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/20",children:"Percentage"}),d&&e.jsx("th",{className:"p-3 text-purple-400 font-bold bg-purple-950/20",children:"Grade"}),l&&e.jsx("th",{className:"p-3 text-cyan-400 font-semibold bg-cyan-950/20",children:"Institute"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:g.map((n,p)=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-slate-500",children:p}),e.jsx("td",{className:"p-3 text-white font-bold",children:n.id}),e.jsx("td",{className:"p-3 text-slate-200 font-sans",children:n.name}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:n.locality}),r&&e.jsx("td",{className:"p-3 text-amber-300",children:n.tempNotes}),s&&e.jsx("td",{className:"p-3 text-amber-300",children:n.internalCode}),e.jsx("td",{className:"p-3 text-cyan-300",children:n.math}),e.jsx("td",{className:"p-3 text-cyan-300",children:n.sci}),i&&e.jsx("td",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/10",children:n.totalScore}),o&&e.jsx("td",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/10",children:n.percentage}),d&&e.jsx("td",{className:"p-3 bg-purple-950/10",children:e.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-bold ${n.grade==="A+"?"bg-purple-600/30 text-purple-300 border border-purple-500/40":n.grade==="A"?"bg-blue-600/30 text-blue-300 border border-blue-500/40":"bg-amber-600/30 text-amber-300 border border-amber-500/40"}`,children:n.grade})}),l&&e.jsx("td",{className:"p-3 text-cyan-300 text-xs font-sans bg-cyan-950/10",children:n.institute})]},n.id))})]})]}),e.jsx(D,{topic:"Pandas Column Engineering & Immutability Patterns",text:"In machine learning feature engineering, adding interaction terms like Total = Math + Sci and dropping extraneous identifiers like TempNotes is your bread and butter. Remember: always prefer non-destructive df.drop(columns=[...]) assignments rather than inplace=True. This keeps data pipelines pure, debuggable, and fully aligned with modern Pandas 2.x Copy-on-Write architecture!"})]}),t==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:u.map(n=>e.jsxs("button",{onClick:()=>N(n.id),className:`p-4 rounded-xl text-left border transition-all ${f===n.id?"bg-teal-950/60 border-teal-500 text-white shadow-lg shadow-teal-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-teal-400 uppercase tracking-wider mb-1",children:n.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:n.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:n.summary})]},n.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:m.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:m.summary})]})}),e.jsx(C,{fileModule:m.code,title:m.fileName})]})]}),t==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(A,{text:M,title:"Topic 10 Revision Notes: Adding & Dropping Columns"})}),t==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(I,{questions:b,title:"Topic 10 Knowledge Check: Adding & Dropping Columns"})})]})})};export{H as default};
