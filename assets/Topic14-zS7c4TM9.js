import{b as c,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as k}from"./PythonFileLoader-CiS1GfkF.js";import{F}from"./FAQTemplate-D_90hN4m.js";import{P as G}from"./PlainTextPrint-yt10TRX1.js";import{T as I}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const E=`"""\r
==============================================================================\r
Topic 14: Grouping Data with groupby() in Pandas\r
Script 01: The Split-Apply-Combine Paradigm & Group Operations\r
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
# Student dataset with diverse localities and subjects\r
data = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107, 108],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu"],\r
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore", "Titagarh", "Barrackpore"],\r
    "Department": ["Computer Science", "Computer Science", "Commerce", "Science", "Commerce", "Computer Science", "Science", "Commerce"],\r
    "Math": [85, 92, 65, 88, 78, 90, 84, 80],\r
    "Science": [90, 95, 70, 85, 80, 92, 88, 82]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. ORIGINAL DATASET")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Understanding the DataFrameGroupBy Object\r
# --------------------------------------------------------------------------\r
section("2. THE DataFrameGroupBy OBJECT (LAZY EVALUATION)")\r
grouped = df.groupby("Locality")\r
print("Grouped object representation:", grouped)\r
print(f"Total Unique Groups Identified: {grouped.ngroups}")\r
print("Group Keys & Row Indices Dictionary:")\r
for k, v in grouped.groups.items():\r
    print(f"  - {k:<15} -> Row indices: {v.tolist()}")\r
\r
# --------------------------------------------------------------------------\r
# 2. Extracting a Specific Group with .get_group()\r
# --------------------------------------------------------------------------\r
section("3. EXTRACTING A SPECIFIC SUBSET WITH .get_group()")\r
barrackpore_group = grouped.get_group("Barrackpore")\r
print("All student records residing in 'Barrackpore':")\r
print(barrackpore_group[["StudentID", "Name", "Department", "Math", "Science"]])\r
\r
# --------------------------------------------------------------------------\r
# 3. Iterating Over Groups in Python\r
# --------------------------------------------------------------------------\r
section("4. ITERATING OVER GROUPS (for locality, group_df in grouped)")\r
for loc_name, group_df in grouped:\r
    avg_math = group_df["Math"].mean()\r
    print(f"Locality: {loc_name:<15} | Students: {len(group_df)} | Mean Math: {avg_math:.1f}")\r
\r
# --------------------------------------------------------------------------\r
# 4. Group Size vs Count\r
# --------------------------------------------------------------------------\r
section("5. GROUP SIZES (.size() VS .count())")\r
# .size() counts total rows per group (including NaNs)\r
# .count() counts valid non-null entries per column\r
print("Total records per Locality (.size()):")\r
print(grouped.size())\r
`,B=`"""\r
==============================================================================\r
Topic 14: Grouping Data with groupby() in Pandas\r
Script 02: Multi-Column Grouping & as_index=False Configuration\r
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
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore", "Titagarh", "Barrackpore"],\r
    "Department": ["Computer Science", "Computer Science", "Commerce", "Science", "Commerce", "Computer Science", "Science", "Commerce"],\r
    "Math": [85, 92, 65, 88, 78, 90, 84, 80],\r
    "Science": [90, 95, 70, 85, 80, 92, 88, 82]\r
}\r
\r
df = pd.DataFrame(data)\r
\r
# --------------------------------------------------------------------------\r
# 1. Multi-Column Grouping (Locality & Department)\r
# --------------------------------------------------------------------------\r
section("1. MULTI-COLUMN GROUPING (Locality + Department)")\r
multi_group = df.groupby(["Locality", "Department"])[["Math", "Science"]].mean()\r
print("Multi-level Grouped Means (Creates MultiIndex on Rows):")\r
print(multi_group)\r
print("\\nMultiIndex Row Levels:", multi_group.index.names)\r
\r
# --------------------------------------------------------------------------\r
# 2. as_index=False (SQL-like Flattened Tabular Output)\r
# --------------------------------------------------------------------------\r
section("2. as_index=False (FLATTENED / SQL GROUP BY EQUIVALENT)")\r
# By default, grouping columns become row index labels.\r
# Setting as_index=False keeps grouping columns as standard DataFrame columns!\r
df_flat = df.groupby("Department", as_index=False)[["Math", "Science"]].mean().round(2)\r
print("Flat Tabular DataFrame (as_index=False):")\r
print(df_flat)\r
\r
# --------------------------------------------------------------------------\r
# 3. reset_index() on GroupBy Results\r
# --------------------------------------------------------------------------\r
section("3. ALTERNATIVE: .groupby(...).mean().reset_index()")\r
df_reset = df.groupby(["Locality", "Department"])[["Math", "Science"]].mean().reset_index()\r
print(df_reset)\r
`,P=`"""\r
==============================================================================\r
Topic 14: Grouping Data with groupby() in Pandas\r
Script 03: Advanced Group Transformations (.transform) and Group Filtering (.filter)\r
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
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore", "Titagarh", "Barrackpore"],\r
    "Department": ["Computer Science", "Computer Science", "Commerce", "Science", "Commerce", "Computer Science", "Science", "Commerce"],\r
    "Math": [85, 92, 65, 88, 78, 90, 84, 80]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. ORIGINAL DATAFRAME")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. df.groupby().transform(): Adding Group-Level Statistics Back to Original Rows\r
# --------------------------------------------------------------------------\r
section("2. .transform() FOR FEATURE ENGINEERING (SAME OUTPUT LENGTH AS INPUT)")\r
# Unlike .mean() which collapses rows, .transform('mean') broadcasts the group mean\r
# back to EVERY original row corresponding to that group!\r
df["Dept_Avg_Math"] = df.groupby("Department")["Math"].transform("mean").round(1)\r
\r
# Deviation from department average (Key ML feature!)\r
df["Math_Diff_From_Dept_Avg"] = df["Math"] - df["Dept_Avg_Math"]\r
\r
print("DataFrame with Group-Broadcasted Feature:")\r
print(df[["Name", "Department", "Math", "Dept_Avg_Math", "Math_Diff_From_Dept_Avg"]])\r
\r
# --------------------------------------------------------------------------\r
# 2. df.groupby().filter(): Dropping Entire Groups Based on a Boolean Property\r
# --------------------------------------------------------------------------\r
section("3. .filter() FOR PRUNING ENTIRE GROUPS")\r
# Keep only departments that have MORE THAN 2 students enrolled\r
df_popular_depts = df.groupby("Department").filter(lambda g: len(g) >= 3)\r
print("Students in departments with >= 3 enrolled students (Computer Science & Commerce):")\r
print(df_popular_depts[["StudentID", "Name", "Department", "Math"]])\r
`,R=`==============================================================================\r
TOPIC 14 NOTE: GROUPING DATA WITH groupby() IN PANDAS\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
\r
1. THE SPLIT-APPLY-COMBINE PARADIGM:\r
   --------------------------------------------------------------------------\r
   - Coined by Hadley Wickham; foundational to Pandas group analytics:\r
     1. SPLIT: Break DataFrame into discrete subsets based on one or more keys.\r
     2. APPLY: Compute summary aggregation, broadcast transform, or filter condition.\r
     3. COMBINE: Merge results back into a unified DataFrame or Series.\r
\r
2. THE THREE MODES OF GROUP OPERATIONS:\r
   --------------------------------------------------------------------------\r
   a) Aggregation (Reduces dimension to 1 value per group):\r
      \`df.groupby('Department')['Salary'].mean()\`\r
      - Reduces N rows down to G rows (where G is number of unique groups).\r
\r
   b) Transformation (Preserves original DataFrame shape N -> N):\r
      \`df['Dept_Avg'] = df.groupby('Department')['Salary'].transform('mean')\`\r
      - Crucial for ML feature engineering: compute group standard deviations, z-scores per cohort, percentage share within department without manual joins!\r
\r
   c) Filtration (Retains or discards entire groups based on boolean test):\r
      \`df.groupby('Store').filter(lambda x: x['Sales'].sum() > 100000)\`\r
      - Keeps only records belonging to groups satisfying the predicate.\r
\r
3. KEY CONFIGURATION PARAMETERS:\r
   --------------------------------------------------------------------------\r
   - \`as_index=False\`:\r
     * By default, grouping columns become row index labels (creating a MultiIndex if multiple keys).\r
     * \`as_index=False\` produces standard flat tabular DataFrames (identical to SQL GROUP BY).\r
   - \`.get_group(key)\`:\r
     * Fast retrieval of all rows matching a specific group key.\r
   - \`.size()\` vs \`.count()\`:\r
     * \`.size()\`: Returns total row count per group (including NaNs).\r
     * \`.count()\`: Returns count of non-null values per column within each group.\r
`,S=[{id:1,question:"What are the three steps in the Split-Apply-Combine paradigm of Pandas groupby()?",options:["Split data into groups -> Apply a function to each group -> Combine results into a new data structure","Sort data -> Filter outliers -> Plot histogram","Select columns -> Impute missing values -> Export to CSV","Sample rows -> Scale numeric features -> Train model"],correctAnswer:"Split data into groups -> Apply a function to each group -> Combine results into a new data structure",explanation:"Pandas groupby follows the Split-Apply-Combine architecture: splitting the DataFrame into groups based on key columns, applying a computation (aggregation, transform, or filter), and combining the outputs back together."},{id:2,question:"How can you prevent the grouping column from becoming the row index in the resulting DataFrame?",options:["df.groupby('Department', as_index=False).mean()","df.groupby('Department', no_index=True).mean()","df.groupby('Department', flat=True).mean()","df.groupby('Department').mean(drop_index=True)"],correctAnswer:"df.groupby('Department', as_index=False).mean()",explanation:"Setting as_index=False retains the grouping columns as regular standard columns in the returned DataFrame, behaving like a traditional SQL GROUP BY."},{id:3,question:"What is the primary difference between df.groupby('City')['Score'].mean() and df.groupby('City')['Score'].transform('mean')?",options:["mean() collapses rows to 1 per group, while transform('mean') returns a Series with the exact same length as the original DataFrame","mean() only works on integers, while transform() works on text","transform() permanently deletes duplicate values","mean() creates an Excel file automatically"],correctAnswer:"mean() collapses rows to 1 per group, while transform('mean') returns a Series with the exact same length as the original DataFrame",explanation:"transform('mean') computes the group mean but broadcasts the resulting values back across every original row in that group, making it identical in length to the parent DataFrame—ideal for feature engineering."},{id:4,question:"Which method retrieves all original rows corresponding strictly to the 'Barrackpore' group from a DataFrameGroupBy object?",options:["grouped.get_group('Barrackpore')","grouped.fetch('Barrackpore')","grouped['Barrackpore']","grouped.select_group('Barrackpore')"],correctAnswer:"grouped.get_group('Barrackpore')",explanation:"The .get_group('key') method on a DataFrameGroupBy object extracts the subset DataFrame containing all records belonging to the specified key."},{id:5,question:"What is the difference between grouped.size() and grouped.count()?",options:["size() counts all rows including NaNs, while count() counts only non-null values per column","size() returns byte size in RAM, while count() counts rows","count() is 100x faster than size()","There is no difference"],correctAnswer:"size() counts all rows including NaNs, while count() counts only non-null values per column",explanation:"grouped.size() returns a Series of total row counts per group regardless of NaN presence, whereas grouped.count() computes non-null tallies for each individual column."}],g=[{id:"part1",fileName:"01_split_apply_combine_groupby.py",title:"1. Split-Apply-Combine & Group Operations",badge:"groupby(), get_group(), size()",code:E,summary:"Understand the DataFrameGroupBy lazy object, extract group subsets with .get_group(), iterate over cohorts, and compare size() vs count()."},{id:"part2",fileName:"02_as_index_and_multi_column_grouping.py",title:"2. Multi-Column Grouping & as_index=False",badge:"MultiIndex & as_index=False",code:B,summary:"Perform multi-level hierarchical grouping across multiple categorical keys and use as_index=False for SQL-like flat tabular results."},{id:"part3",fileName:"03_transform_and_filter_groups.py",title:"3. Advanced Group .transform() & .filter()",badge:".transform() & .filter()",code:P,summary:"Broadcast cohort statistics back to full-length DataFrames for ML feature engineering using .transform(), and prune cohorts using .filter()."}],p=[{id:101,name:"Debangshu",locality:"Barrackpore",dept:"Computer Science",math:85,sci:90},{id:102,name:"Susmita",locality:"Shyamnagar",dept:"Computer Science",math:92,sci:95},{id:103,name:"Swadeep",locality:"Ichapur",dept:"Commerce",math:65,sci:70},{id:104,name:"Tuhina",locality:"Naihati",dept:"Science",math:88,sci:85},{id:105,name:"Sachin",locality:"Kolkata",dept:"Commerce",math:78,sci:80},{id:106,name:"Mahima",locality:"Barrackpore",dept:"Computer Science",math:90,sci:92},{id:107,name:"Abhronila",locality:"Titagarh",dept:"Science",math:84,sci:88},{id:108,name:"Debangshu",locality:"Barrackpore",dept:"Commerce",math:80,sci:82}],W=()=>{const[i,u]=c.useState("groupby_studio"),[f,N]=c.useState("part1"),[a,j]=c.useState("dept"),[r,v]=c.useState("agg_mean"),[h,y]=c.useState("Computer Science"),m=g.find(t=>t.id===f)||g[0],x=Array.from(new Set(p.map(t=>t[a]))),_=()=>x.map(t=>{const n=p.filter(s=>s[a]===t),o=n.length,l=(n.reduce((s,d)=>s+d.math,0)/o).toFixed(1),b=(n.reduce((s,d)=>s+d.sci,0)/o).toFixed(1),C=n.reduce((s,d)=>s+d.math,0),M=n.reduce((s,d)=>s+d.sci,0);return{groupKey:t,count:o,mathAvg:Number(l),sciAvg:Number(b),mathSum:C,sciSum:M}}),w=()=>{const t={};return x.forEach(n=>{const o=p.filter(l=>l[a]===n);t[n]=(o.reduce((l,b)=>l+b.math,0)/o.length).toFixed(1)}),p.map(n=>{const o=Number(t[n[a]]),l=(n.math-o).toFixed(1);return{...n,groupAvg:o,diff:l}})},D=_(),T=w(),A=p.filter(t=>t[a]===h);return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900/60 border border-indigo-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full",children:"Cohort & Aggregation Engine"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 14"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Grouping Data with groupby() in Pandas"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:["Harness the power of the Split-Apply-Combine architecture. Aggregate cohort metrics, isolate specific groups with"," ",e.jsx("code",{className:"text-indigo-300 bg-slate-800 px-1 py-0.5 rounded",children:".get_group()"}),", and engineer group-broadcasted features with"," ",e.jsx("code",{className:"text-indigo-300 bg-slate-800 px-1 py-0.5 rounded",children:".transform()"}),"."]})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-indigo-500/20",children:"☷ G"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>u("groupby_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${i==="groupby_studio"?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"🧩 Split-Apply-Combine Studio"}),e.jsxs("button",{onClick:()=>u("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${i==="python_code"?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",g.length," Scripts)"]}),e.jsx("button",{onClick:()=>u("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${i==="theory_notes"?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>u("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${i==="quiz"?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",S.length,")"]})]}),i==="groupby_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Configure Split-Apply-Combine Parameters"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-400 mb-1.5",children:"1. Grouping Column (df.groupby)"}),e.jsxs("select",{value:a,onChange:t=>{j(t.target.value),y(t.target.value==="dept"?"Computer Science":"Barrackpore")},className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-indigo-300 focus:outline-none focus:border-indigo-500 font-mono",children:[e.jsx("option",{value:"dept",children:"Department (3 Cohorts)"}),e.jsx("option",{value:"locality",children:"Locality (6 Towns)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-400 mb-1.5",children:"2. Applied Operation"}),e.jsxs("select",{value:r,onChange:t=>v(t.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-indigo-300 focus:outline-none focus:border-indigo-500 font-mono",children:[e.jsx("option",{value:"agg_mean",children:"Aggregation: .mean() (Collapsed Rows)"}),e.jsx("option",{value:"agg_sum",children:"Aggregation: .sum() (Total Points)"}),e.jsx("option",{value:"transform",children:"Transformation: .transform('mean') (Broadcasted)"}),e.jsx("option",{value:"get_group",children:"Subset Extraction: .get_group()"})]})]}),r==="get_group"&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-400 mb-1.5",children:"Target Group Key (.get_group)"}),e.jsx("select",{value:h,onChange:t=>y(t.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-indigo-300 focus:outline-none focus:border-indigo-500 font-mono",children:x.map(t=>e.jsx("option",{value:t,children:t},t))})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-indigo-300",children:[e.jsx("span",{className:"text-slate-500",children:"# Executed Pandas Operation:"}),e.jsxs("div",{className:"mt-1",children:[r==="agg_mean"&&e.jsx("span",{children:`df.groupby('${a==="dept"?"Department":"Locality"}', as_index=False)[['Math', 'Science']].mean()`}),r==="agg_sum"&&e.jsx("span",{children:`df.groupby('${a==="dept"?"Department":"Locality"}', as_index=False)[['Math', 'Science']].sum()`}),r==="transform"&&e.jsx("span",{className:"text-purple-300",children:`df['Group_Mean_Math'] = df.groupby('${a==="dept"?"Department":"Locality"}')['Math'].transform('mean')`}),r==="get_group"&&e.jsx("span",{className:"text-teal-300",children:`df.groupby('${a==="dept"?"Department":"Locality"}').get_group('${h}')`})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2 mb-4",children:[e.jsx("span",{children:"📊"})," Output DataFrame Preview"]}),(r==="agg_mean"||r==="agg_sum")&&e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80 font-mono",children:[e.jsx("th",{className:"p-3 text-indigo-300 font-bold",children:a==="dept"?"Department":"Locality"}),e.jsx("th",{className:"p-3 text-slate-400",children:"Student Count (.size())"}),e.jsx("th",{className:"p-3 text-cyan-300 font-bold",children:r==="agg_mean"?"Math Mean Score":"Math Total Score"}),e.jsx("th",{className:"p-3 text-cyan-300 font-bold",children:r==="agg_mean"?"Science Mean Score":"Science Total Score"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:D.map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-white font-sans font-bold",children:t.groupKey}),e.jsxs("td",{className:"p-3 text-slate-400",children:[t.count," students"]}),e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:r==="agg_mean"?t.mathAvg:t.mathSum}),e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:r==="agg_mean"?t.sciAvg:t.sciSum})]},t.groupKey))})]}),r==="transform"&&e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80 font-mono",children:[e.jsx("th",{className:"p-3 text-slate-400",children:"StudentID"}),e.jsx("th",{className:"p-3 text-teal-300",children:"Name"}),e.jsx("th",{className:"p-3 text-indigo-300 font-bold",children:a==="dept"?"Department":"Locality"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Math Score"}),e.jsx("th",{className:"p-3 text-purple-300 font-bold bg-purple-950/20",children:"Cohort Group Mean (.transform)"}),e.jsx("th",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/20",children:"Math - Group Mean (Feature)"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:T.map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-slate-400",children:t.id}),e.jsx("td",{className:"p-3 text-slate-100 font-sans font-semibold",children:t.name}),e.jsx("td",{className:"p-3 text-indigo-300 font-sans",children:t[a]}),e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:t.math}),e.jsx("td",{className:"p-3 text-purple-300 font-bold bg-purple-950/10",children:t.groupAvg}),e.jsx("td",{className:`p-3 font-bold bg-emerald-950/10 ${Number(t.diff)>=0?"text-emerald-400":"text-rose-400"}`,children:Number(t.diff)>=0?`+${t.diff}`:t.diff})]},t.id+t.name))})]}),r==="get_group"&&e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80 font-mono",children:[e.jsx("th",{className:"p-3 text-slate-400",children:"StudentID"}),e.jsx("th",{className:"p-3 text-teal-300",children:"Name"}),e.jsx("th",{className:"p-3 text-indigo-300 font-bold",children:a==="dept"?"Department":"Locality"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Math Score"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Science Score"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:A.map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-slate-400",children:t.id}),e.jsx("td",{className:"p-3 text-slate-100 font-sans font-semibold",children:t.name}),e.jsx("td",{className:"p-3 text-indigo-300 font-sans",children:t[a]}),e.jsx("td",{className:"p-3 text-cyan-300",children:t.math}),e.jsx("td",{className:"p-3 text-cyan-300",children:t.sci})]},t.id+t.name))})]})]}),e.jsx(I,{topic:"Why .transform() is a Game-Changer in Machine Learning",text:"Most beginners only know df.groupby().mean(), which collapses all rows. But in predictive ML, you need feature engineering on individual rows! With .transform('mean'), Pandas computes cohort statistics and broadcasts them directly across each student row. This lets you calculate deviation features like (Math - Dept_Mean_Math) instantly without cumbersome table joins!"})]}),i==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:g.map(t=>e.jsxs("button",{onClick:()=>N(t.id),className:`p-4 rounded-xl text-left border transition-all ${f===t.id?"bg-indigo-950/60 border-indigo-500 text-white shadow-lg shadow-indigo-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1",children:t.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:t.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:m.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:m.summary})]})}),e.jsx(k,{fileModule:m.code,title:m.fileName})]})]}),i==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(G,{text:R,title:"Topic 14 Revision Notes: Grouping Data with groupby()"})}),i==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(F,{questions:S,title:"Topic 14 Knowledge Check: Grouping Data with groupby()"})})]})})};export{W as default};
