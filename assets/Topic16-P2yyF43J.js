import{b as u,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as _}from"./PythonFileLoader-CiS1GfkF.js";import{F as y}from"./FAQTemplate-D_90hN4m.js";import{P as w}from"./PlainTextPrint-yt10TRX1.js";import{T as j}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const T=`"""\r
==============================================================================\r
Topic 16: Merging and Joining DataFrames in Pandas\r
Script 01: Relational Joins with pd.merge (inner, left, right, outer)\r
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
# Primary Student Info Table\r
students = pd.DataFrame({\r
    "StudentID": [101, 102, 103, 104, 105],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin"],\r
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata"]\r
})\r
\r
# Exam Scores Table (Sachin is missing, Mahima 106 & Abhronila 107 are present)\r
scores = pd.DataFrame({\r
    "StudentID": [101, 102, 103, 104, 106, 107],\r
    "Math": [85, 92, 65, 88, 90, 84],\r
    "Science": [90, 95, 70, 85, 92, 88]\r
})\r
\r
section("1. PRIMARY TABLES")\r
print("Table 1: Students (5 rows)")\r
print(students)\r
print("\\nTable 2: Scores (6 rows)")\r
print(scores)\r
\r
# --------------------------------------------------------------------------\r
# 1. INNER JOIN (Intersection: only students present in BOTH tables)\r
# --------------------------------------------------------------------------\r
section("2. INNER JOIN (how='inner') - ONLY COMMON KEYS (101, 102, 103, 104)")\r
inner_df = pd.merge(students, scores, on="StudentID", how="inner")\r
print(inner_df)\r
\r
# --------------------------------------------------------------------------\r
# 2. LEFT JOIN (Preserves ALL students from left table, fills missing with NaN)\r
# --------------------------------------------------------------------------\r
section("3. LEFT JOIN (how='left') - ALL STUDENTS RETAINED (Sachin gets NaN)")\r
left_df = pd.merge(students, scores, on="StudentID", how="left")\r
print(left_df)\r
\r
# --------------------------------------------------------------------------\r
# 3. RIGHT JOIN (Preserves ALL scores, students without profile get NaN)\r
# --------------------------------------------------------------------------\r
section("4. RIGHT JOIN (how='right') - ALL EXAM PARTICIPANTS RETAINED")\r
right_df = pd.merge(students, scores, on="StudentID", how="right")\r
print(right_df)\r
\r
# --------------------------------------------------------------------------\r
# 4. FULL OUTER JOIN (Union: all records from both tables preserved)\r
# --------------------------------------------------------------------------\r
section("5. FULL OUTER JOIN (how='outer', indicator=True)")\r
outer_df = pd.merge(students, scores, on="StudentID", how="outer", indicator=True)\r
print(outer_df)\r
`,S=`"""\r
==============================================================================\r
Topic 16: Merging and Joining DataFrames in Pandas\r
Script 02: Mismatched Key Names (left_on/right_on) & Suffix Handling\r
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
# Left table with key named 'user_code'\r
user_profiles = pd.DataFrame({\r
    "user_code": [101, 102, 103, 104],\r
    "name": ["Debangshu", "Susmita", "Swadeep", "Tuhina"],\r
    "batch": ["ML-2026", "ML-2026", "ML-2026", "ML-2026"]\r
})\r
\r
# Right table with key named 'roll_number' and overlapping column 'batch'\r
midterm_results = pd.DataFrame({\r
    "roll_number": [101, 102, 103, 104],\r
    "math_score": [85, 92, 65, 88],\r
    "batch": ["Batch-A", "Batch-A", "Batch-B", "Batch-B"]\r
})\r
\r
section("1. SOURCE TABLES WITH MISMATCHED KEYS & OVERLAPPING COLUMNS")\r
print("User Profiles:")\r
print(user_profiles)\r
print("\\nMidterm Results:")\r
print(midterm_results)\r
\r
# --------------------------------------------------------------------------\r
# 1. Merging on Differently-Named Key Columns (left_on, right_on)\r
# --------------------------------------------------------------------------\r
section("2. MERGING WITH left_on='user_code' AND right_on='roll_number'")\r
merged_mismatched = pd.merge(\r
    user_profiles,\r
    midterm_results,\r
    left_on="user_code",\r
    right_on="roll_number",\r
    how="inner",\r
    suffixes=("_profile", "_exam")\r
)\r
\r
print(merged_mismatched)\r
\r
# Dropping duplicate key column post-merge\r
clean_merged = merged_mismatched.drop(columns=["roll_number"])\r
print("\\nCleaned post-merge table:")\r
print(clean_merged)\r
\r
# --------------------------------------------------------------------------\r
# 2. Merging on Index (left_index / right_index)\r
# --------------------------------------------------------------------------\r
section("3. MERGING ON INDEX (left_on='user_code', right_index=True)")\r
midterm_indexed = midterm_results.set_index("roll_number")\r
merged_by_index = pd.merge(\r
    user_profiles,\r
    midterm_indexed,\r
    left_on="user_code",\r
    right_index=True,\r
    suffixes=("_profile", "_exam")\r
)\r
print("Merged via right_index=True:")\r
print(merged_by_index)\r
`,I=`"""\r
==============================================================================\r
Topic 16: Merging and Joining DataFrames in Pandas\r
Script 03: Vertical/Horizontal Stacking with pd.concat & Index-based df.join\r
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
# Monthly sales logs\r
batch_jan = pd.DataFrame({\r
    "StudentID": [101, 102],\r
    "Name": ["Debangshu", "Susmita"],\r
    "Score": [85, 92]\r
})\r
\r
batch_feb = pd.DataFrame({\r
    "StudentID": [103, 104],\r
    "Name": ["Swadeep", "Tuhina"],\r
    "Score": [65, 88]\r
})\r
\r
# --------------------------------------------------------------------------\r
# 1. Vertical Concatenation (axis=0, ignore_index=True)\r
# --------------------------------------------------------------------------\r
section("1. VERTICAL CONCATENATION (axis=0, STACKING ROWS)")\r
all_students = pd.concat([batch_jan, batch_feb], axis=0, ignore_index=True)\r
print("Combined Cohort (Rows Appended):")\r
print(all_students)\r
\r
# Hierarchical MultiIndex Concatenation (keys parameter)\r
cohort_keyed = pd.concat([batch_jan, batch_feb], keys=["January", "February"])\r
print("\\nVertical Concat with Month Keys:")\r
print(cohort_keyed)\r
\r
# --------------------------------------------------------------------------\r
# 2. Horizontal Concatenation (axis=1, STACKING COLUMNS)\r
# --------------------------------------------------------------------------\r
section("2. HORIZONTAL CONCATENATION (axis=1)")\r
extra_info = pd.DataFrame({\r
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati"],\r
    "Attendance": [95, 98, 80, 92]\r
})\r
\r
full_table = pd.concat([all_students, extra_info], axis=1)\r
print("Side-by-side Merged DataFrame (axis=1):")\r
print(full_table)\r
\r
# --------------------------------------------------------------------------\r
# 3. Index-Based Joining with df.join()\r
# --------------------------------------------------------------------------\r
section("3. df.join() (OPTIMIZED FOR INDEX-TO-INDEX JOINS)")\r
df_left = pd.DataFrame({"Math": [85, 92]}, index=[101, 102])\r
df_right = pd.DataFrame({"Science": [90, 95]}, index=[101, 102])\r
\r
joined = df_left.join(df_right)\r
print("df.join() result on matching index:")\r
print(joined)\r
`,v="==============================================================================\r\nTOPIC 16 NOTE: MERGING AND JOINING DATAFRAMES IN PANDAS\r\nInstructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r\nStudents: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r\n==============================================================================\r\n\r\n1. THE FOUR RELATIONAL JOIN TYPES (pd.merge):\r\n   --------------------------------------------------------------------------\r\n   - `how='inner'` (Default):\r\n     * Intersection: Keeps only rows where the merge key exists in BOTH DataFrames.\r\n   - `how='left'`:\r\n     * Retains ALL rows from left DataFrame; fills missing right table fields with NaN.\r\n   - `how='right'`:\r\n     * Retains ALL rows from right DataFrame; fills missing left table fields with NaN.\r\n   - `how='outer'`:\r\n     * Full outer union: Retains all records from both tables.\r\n   - `how='cross'`:\r\n     * Cartesian product (all combinations of rows).\r\n\r\n2. KEY SPECIFICATION & COLUMN CONFLICTS:\r\n   --------------------------------------------------------------------------\r\n   - Same column name on both: `on='StudentID'`\r\n   - Different column names: `left_on='user_id', right_on='student_code'`\r\n   - Joining on Index: `left_index=True`, `right_index=True`\r\n   - Overlapping non-key columns:\r\n     `suffixes=('_left', '_right')` disambiguates columns sharing the same name.\r\n   - Merge lineage tracing:\r\n     `indicator=True` creates a `_merge` categorical column ('both', 'left_only', 'right_only').\r\n\r\n3. CONCATENATION (pd.concat):\r\n   --------------------------------------------------------------------------\r\n   - Vertical Stacking (Appending rows):\r\n     `pd.concat([df_jan, df_feb], axis=0, ignore_index=True)`\r\n   - Horizontal Stacking (Binding columns):\r\n     `pd.concat([df_features, df_labels], axis=1)`\r\n   - `df.join()`: Convenience method designed specifically for index-based joins.\r\n\r\n4. MACHINE LEARNING DATA ENGINEERING BEST PRACTICES:\r\n   --------------------------------------------------------------------------\r\n   - Validating merge cardinality: Use `validate='1:1'`, `validate='1:m'`, or `validate='m:1'` inside `pd.merge()` to ensure unexpected duplicates do not quietly multiply rows!\r\n   - Always check `len(merged_df)` vs `len(original_df)` to catch row explosion or unintended dropped rows immediately.\r\n",b=[{id:1,question:"Which join type retains all rows from the primary (left) DataFrame and fills unmatched columns from the right DataFrame with NaN?",options:["how='left'","how='inner'","how='right'","how='outer'"],correctAnswer:"how='left'",explanation:"A LEFT JOIN (how='left') preserves every single record from the left DataFrame regardless of whether a matching key exists in the right DataFrame, filling unmatched right fields with NaN."},{id:2,question:"When merge key columns have different names in two DataFrames ('cust_id' in df1 and 'client_code' in df2), how do you specify the merge?",options:["pd.merge(df1, df2, left_on='cust_id', right_on='client_code')","pd.merge(df1, df2, keys=['cust_id', 'client_code'])","pd.merge(df1, df2, match={'cust_id': 'client_code'})","pd.merge(df1, df2, on=('cust_id', 'client_code'))"],correctAnswer:"pd.merge(df1, df2, left_on='cust_id', right_on='client_code')",explanation:"The left_on and right_on arguments allow merging DataFrames whose joining keys have distinct column names."},{id:3,question:"What does setting 'indicator=True' in pd.merge() produce?",options:["A '_merge' column indicating whether each row came from 'left_only', 'right_only', or 'both'","A progress bar showing merge execution percentage","A boolean warning flag if merge runtime exceeds 1 second","An automated data validation chart"],correctAnswer:"A '_merge' column indicating whether each row came from 'left_only', 'right_only', or 'both'",explanation:"Setting indicator=True generates an additional column named '_merge' containing categorical values ('left_only', 'right_only', 'both'), which is invaluable for auditing join integrity."},{id:4,question:"How do you vertically stack (concatenate rows) from three monthly DataFrames df1, df2, and df3 into one continuous table?",options:["pd.concat([df1, df2, df3], axis=0, ignore_index=True)","pd.stack([df1, df2, df3])","df1.append_all([df2, df3])","pd.merge([df1, df2, df3], how='vertical')"],correctAnswer:"pd.concat([df1, df2, df3], axis=0, ignore_index=True)",explanation:"pd.concat(..., axis=0, ignore_index=True) stacks DataFrames vertically one below the other and resets row indices to create a continuous 0..N index."},{id:5,question:"What parameter in pd.merge() prevents silent duplicate multiplication by enforcing relationship constraints like 1:1 or 1:m?",options:["validate='1:1' or validate='1:m'","enforce_cardinality=True","strict_keys=True","check_duplicates=True"],correctAnswer:"validate='1:1' or validate='1:m'",explanation:"The validate parameter (e.g. validate='1:1', 'one_to_one', 'one_to_many') checks merge keys for uniqueness, raising a MergeError if cardinality assumptions are violated."}],m=[{id:"part1",fileName:"01_pd_merge_join_types.py",title:"1. Relational Joins with pd.merge()",badge:"inner, left, right, outer",code:T,summary:"Execute SQL-style relational database joins (inner, left, right, full outer) and audit key matching with indicator=True."},{id:"part2",fileName:"02_left_right_keys_and_suffixes.py",title:"2. Mismatched Keys & Suffix Disambiguation",badge:"left_on, right_on, suffixes",code:S,summary:"Merge tables with differing key column headers, join directly on Index objects, and disambiguate overlapping column names."},{id:"part3",fileName:"03_pd_concat_and_df_join.py",title:"3. Concatenation (pd.concat) & df.join",badge:"pd.concat & df.join",code:I,summary:"Stack DataFrames vertically or horizontally using pd.concat(), create hierarchical keys, and leverage index-based df.join()."}],l=[{id:101,name:"Debangshu",locality:"Barrackpore"},{id:102,name:"Susmita",locality:"Shyamnagar"},{id:103,name:"Swadeep",locality:"Ichapur"},{id:104,name:"Tuhina",locality:"Naihati"},{id:105,name:"Sachin",locality:"Kolkata"}],h=[{id:101,math:85,sci:90},{id:102,math:92,sci:95},{id:103,math:65,sci:70},{id:104,math:88,sci:85},{id:106,math:90,sci:92},{id:107,math:84,sci:88}],J=()=>{const[a,d]=u.useState("join_studio"),[p,f]=u.useState("part1"),[i,N]=u.useState("inner"),c=m.find(t=>t.id===p)||m[0],g=(()=>{const t=new Map(l.map(n=>[n.id,n])),s=new Map(h.map(n=>[n.id,n]));return i==="inner"?l.filter(n=>s.has(n.id)).map(n=>({id:n.id,name:n.name,locality:n.locality,math:s.get(n.id).math,sci:s.get(n.id).sci,mergeTag:"both"})):i==="left"?l.map(n=>{const r=s.get(n.id);return{id:n.id,name:n.name,locality:n.locality,math:r?r.math:null,sci:r?r.sci:null,mergeTag:r?"both":"left_only"}}):i==="right"?h.map(n=>{const r=t.get(n.id);return{id:n.id,name:r?r.name:null,locality:r?r.locality:null,math:n.math,sci:n.sci,mergeTag:r?"both":"right_only"}}):Array.from(new Set([...l.map(n=>n.id),...h.map(n=>n.id)])).sort((n,r)=>n-r).map(n=>{const r=t.get(n),o=s.get(n);let x="both";return r&&!o&&(x="left_only"),!r&&o&&(x="right_only"),{id:n,name:r?r.name:null,locality:r?r.locality:null,math:o?o.math:null,sci:o?o.sci:null,mergeTag:x}})})();return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900/60 border border-blue-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full",children:"Relational Data Integration"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 16"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Merging and Joining DataFrames in Pandas"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:["Unite disparate data sources: master SQL relational joins with"," ",e.jsx("code",{className:"text-blue-300 bg-slate-800 px-1 py-0.5 rounded",children:"pd.merge()"}),", handle mismatched keys and suffixes, stack datasets with"," ",e.jsx("code",{className:"text-blue-300 bg-slate-800 px-1 py-0.5 rounded",children:"pd.concat()"}),", and audit data lineage with"," ",e.jsx("code",{className:"text-blue-300 bg-slate-800 px-1 py-0.5 rounded",children:"indicator=True"}),"."]})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-blue-500/20",children:"⋈"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>d("join_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="join_studio"?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"🔀 Relational Join Studio"}),e.jsxs("button",{onClick:()=>d("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="python_code"?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",m.length," Scripts)"]}),e.jsx("button",{onClick:()=>d("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="theory_notes"?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>d("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${a==="quiz"?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",b.length,")"]})]}),a==="join_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800 mb-2",children:[e.jsxs("h4",{className:"text-xs font-bold text-blue-300 uppercase tracking-wider",children:["📋 Left DataFrame: ",e.jsx("span",{className:"font-mono text-white",children:"students"})]}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"5 rows (IDs: 101 - 105)"})]}),e.jsx("div",{className:"text-xs font-mono space-y-1 text-slate-300",children:l.map(t=>e.jsxs("div",{className:"flex justify-between py-0.5 border-b border-slate-800/40",children:[e.jsx("span",{className:"text-blue-400 font-bold",children:t.id}),e.jsx("span",{children:t.name}),e.jsx("span",{className:"text-slate-500",children:t.locality})]},t.id))})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800 mb-2",children:[e.jsxs("h4",{className:"text-xs font-bold text-teal-300 uppercase tracking-wider",children:["📋 Right DataFrame: ",e.jsx("span",{className:"font-mono text-white",children:"scores"})]}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"6 rows (IDs: 101-104, 106, 107)"})]}),e.jsx("div",{className:"text-xs font-mono space-y-1 text-slate-300",children:h.map(t=>e.jsxs("div",{className:"flex justify-between py-0.5 border-b border-slate-800/40",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:t.id}),e.jsxs("span",{children:["Math: ",t.math]}),e.jsxs("span",{children:["Sci: ",t.sci]})]},t.id))})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Select Relational Join Strategy (how='...')"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:[{id:"inner",title:"1. INNER JOIN",sub:"Intersection (Keys present in BOTH)",rowsText:"4 rows matching"},{id:"left",title:"2. LEFT JOIN",sub:"All students kept (Sachin gets NaN)",rowsText:"5 rows total"},{id:"right",title:"3. RIGHT JOIN",sub:"All scores kept (106/107 get NaN)",rowsText:"6 rows total"},{id:"outer",title:"4. FULL OUTER JOIN",sub:"Union of all records from both",rowsText:"7 rows total"}].map(t=>e.jsxs("button",{onClick:()=>N(t.id),className:`p-3.5 rounded-xl text-left border transition-all ${i===t.id?"bg-blue-950/60 border-blue-500 text-white shadow-lg shadow-blue-500/10":"bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-blue-300",children:t.title}),e.jsx("div",{className:"text-[11px] text-slate-300 mt-1",children:t.sub}),e.jsx("div",{className:"text-[11px] font-mono text-teal-400 mt-2",children:t.rowsText})]},t.id))}),e.jsxs("div",{className:"mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-blue-300",children:[e.jsx("span",{className:"text-slate-500",children:"# Executed Python code:"}),e.jsx("div",{className:"mt-1 font-bold",children:`pd.merge(students, scores, on='StudentID', how='${i}', indicator=True)`})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Merged Output DataFrame (",g.length," Rows)"]}),e.jsxs("span",{className:"text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800",children:["how='",i,"'"]})]}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80 font-mono",children:[e.jsx("th",{className:"p-3 text-slate-400",children:"Index"}),e.jsx("th",{className:"p-3 text-blue-300 font-bold",children:"StudentID (Key)"}),e.jsx("th",{className:"p-3 text-slate-300",children:"Name (Left)"}),e.jsx("th",{className:"p-3 text-slate-300",children:"Locality (Left)"}),e.jsx("th",{className:"p-3 text-teal-300",children:"Math (Right)"}),e.jsx("th",{className:"p-3 text-teal-300",children:"Science (Right)"}),e.jsx("th",{className:"p-3 text-purple-300 font-bold bg-purple-950/20",children:"_merge Tag"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:g.map((t,s)=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-slate-500",children:s}),e.jsx("td",{className:"p-3 text-white font-bold",children:t.id}),e.jsx("td",{className:"p-3 font-sans",children:t.name?e.jsx("span",{className:"text-slate-100",children:t.name}):e.jsx("span",{className:"px-1.5 py-0.5 rounded text-xs bg-rose-950/80 text-rose-400 border border-rose-800",children:"NaN"})}),e.jsx("td",{className:"p-3 font-sans",children:t.locality?e.jsx("span",{className:"text-slate-300",children:t.locality}):e.jsx("span",{className:"px-1.5 py-0.5 rounded text-xs bg-rose-950/80 text-rose-400 border border-rose-800",children:"NaN"})}),e.jsx("td",{className:"p-3",children:t.math!==null?e.jsx("span",{className:"text-teal-300",children:t.math}):e.jsx("span",{className:"px-1.5 py-0.5 rounded text-xs bg-rose-950/80 text-rose-400 border border-rose-800",children:"NaN"})}),e.jsx("td",{className:"p-3",children:t.sci!==null?e.jsx("span",{className:"text-teal-300",children:t.sci}):e.jsx("span",{className:"px-1.5 py-0.5 rounded text-xs bg-rose-950/80 text-rose-400 border border-rose-800",children:"NaN"})}),e.jsx("td",{className:"p-3 bg-purple-950/10",children:e.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-semibold ${t.mergeTag==="both"?"bg-emerald-600/30 text-emerald-300 border border-emerald-500/40":t.mergeTag==="left_only"?"bg-blue-600/30 text-blue-300 border border-blue-500/40":"bg-amber-600/30 text-amber-300 border border-amber-500/40"}`,children:t.mergeTag})})]},t.id))})]})]}),e.jsx(j,{topic:"Silent Row Multiplication & Join Validation",text:"In production machine learning pipelines, joining on duplicate keys causes 'Cartesian row explosion' where 10,000 rows silently explode into 2,000,000 duplicate rows! Always pass validate='1:1' or validate='1:m' inside pd.merge() to guarantee key uniqueness, and use indicator=True during ETL debugging to audit unmatched foreign keys."})]}),a==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:m.map(t=>e.jsxs("button",{onClick:()=>f(t.id),className:`p-4 rounded-xl text-left border transition-all ${p===t.id?"bg-blue-950/60 border-blue-500 text-white shadow-lg shadow-blue-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-blue-400 uppercase tracking-wider mb-1",children:t.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:t.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:c.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:c.summary})]})}),e.jsx(_,{fileModule:c.code,title:c.fileName})]})]}),a==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(w,{text:v,title:"Topic 16 Revision Notes: Merging & Joining DataFrames"})}),a==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(y,{questions:b,title:"Topic 16 Knowledge Check: Merging & Joining DataFrames"})})]})})};export{J as default};
