import{b as d,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as v}from"./PythonFileLoader-CiS1GfkF.js";import{F as _}from"./FAQTemplate-D_90hN4m.js";import{P as w}from"./PlainTextPrint-yt10TRX1.js";import{T}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const j=`"""\r
==============================================================================\r
Topic 13: Sorting Values and Index in Pandas\r
Script 01: Single and Multi-Column Sorting with sort_values()\r
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
    "Math": [85, 92, 65, 88, 78, 90, 84],\r
    "Science": [90, 95, 70, 85, 80, 92, 88],\r
    "Attendance": [95, 98, 80, 92, 85, 94, 90]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. INITIAL DATAFRAME")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Single Column Sorting (Ascending vs Descending)\r
# --------------------------------------------------------------------------\r
section("2. SINGLE COLUMN SORTING (df.sort_values(by='Math', ascending=False))")\r
df_math_desc = df.sort_values(by="Math", ascending=False)\r
print("Ranked by Math Score (Highest to Lowest):")\r
print(df_math_desc[["StudentID", "Name", "Locality", "Math"]])\r
\r
# --------------------------------------------------------------------------\r
# 2. Multi-Column Sorting with Mixed Direction Vectors\r
# --------------------------------------------------------------------------\r
section("3. MULTI-COLUMN SORTING (Locality ASC, Science DESC)")\r
# Sort primarily by Locality (A-Z), and secondarily by Science (Highest first)\r
df_multi = df.sort_values(\r
    by=["Locality", "Science"],\r
    ascending=[True, False]\r
)\r
print(df_multi[["Locality", "Name", "Science", "Math"]])\r
\r
# --------------------------------------------------------------------------\r
# 3. Index Resetting after Sorting (.reset_index(drop=True))\r
# --------------------------------------------------------------------------\r
section("4. CLEANING INDEX WITH .reset_index(drop=True)")\r
# Notice how original row indices were scrambled above. Resetting creates clean 0..N ranks:\r
df_leaderboard = (\r
    df\r
    .sort_values(by="Math", ascending=False)\r
    .reset_index(drop=True)\r
)\r
df_leaderboard.index = df_leaderboard.index + 1  # 1-indexed Rank\r
df_leaderboard.index.name = "Rank"\r
print("Clean Leaderboard with 1-based Rank index:")\r
print(df_leaderboard[["Name", "Math", "Science", "Locality"]])\r
`,M=`"""\r
==============================================================================\r
Topic 13: Sorting Values and Index in Pandas\r
Script 02: Handling Missing Values (na_position) and Sorting by Index\r
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
data = {\r
    "StudentID": [105, 101, 107, 102, 104, 103, 106],\r
    "Name": ["Sachin", "Debangshu", "Abhronila", "Susmita", "Tuhina", "Swadeep", "Mahima"],\r
    "BonusMarks": [10.0, np.nan, 15.0, np.nan, 20.0, 5.0, 18.0]\r
}\r
\r
df = pd.DataFrame(data).set_index("StudentID")\r
section("1. UNSORTED INDEX WITH MISSING VALUES (NaN)")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Missing Value Placement: na_position='last' vs na_position='first'\r
# --------------------------------------------------------------------------\r
section("2. na_position='last' (DEFAULT) VS na_position='first'")\r
# By default, Pandas places NaNs at the very end regardless of ASC/DESC\r
df_na_last = df.sort_values(by="BonusMarks", ascending=False, na_position="last")\r
print("BonusMarks DESC with na_position='last' (default):")\r
print(df_na_last)\r
\r
df_na_first = df.sort_values(by="BonusMarks", ascending=False, na_position="first")\r
print("\\nBonusMarks DESC with na_position='first':")\r
print(df_na_first)\r
\r
# --------------------------------------------------------------------------\r
# 2. Sorting by Row Index (df.sort_index())\r
# --------------------------------------------------------------------------\r
section("3. SORTING BY INDEX (df.sort_index(ascending=True))")\r
df_sorted_by_id = df.sort_index(ascending=True)\r
print("DataFrame ordered by StudentID index (101 to 107):")\r
print(df_sorted_by_id)\r
\r
# --------------------------------------------------------------------------\r
# 3. Sorting by Column Headers Alphabetically (axis=1)\r
# --------------------------------------------------------------------------\r
section("4. SORTING COLUMN AXIS ALPHABETICALLY (df.sort_index(axis=1))")\r
df_cols_sorted = df.sort_index(axis=1, ascending=True)\r
print("Columns ordered alphabetically (BonusMarks -> Name):")\r
print(df_cols_sorted)\r
`,I=`"""\r
==============================================================================\r
Topic 13: Sorting Values and Index in Pandas\r
Script 03: Optimized Top-K / Bottom-K with nlargest() and nsmallest()\r
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
    "Math": [85, 92, 65, 88, 78, 90, 84],\r
    "Science": [90, 95, 70, 85, 80, 92, 88]\r
}\r
\r
df = pd.DataFrame(data)\r
df["TotalMarks"] = df["Math"] + df["Science"]\r
\r
section("1. COMPLETE STUDENT DATASET WITH TOTAL MARKS")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. df.nlargest(): High-Performance Top-N (Heap-based O(N log K))\r
# --------------------------------------------------------------------------\r
section("2. df.nlargest(n=3, columns='TotalMarks') - TOP 3 PERFORMERS")\r
# Much faster than df.sort_values().head(3) on large datasets (10M+ rows)\r
top_3_total = df.nlargest(n=3, columns="TotalMarks")\r
print("Top 3 Students Overall:")\r
print(top_3_total[["StudentID", "Name", "TotalMarks", "Math", "Science"]])\r
\r
# Multi-column tie-breaker with nlargest\r
top_3_tied = df.nlargest(n=3, columns=["Science", "Math"])\r
print("\\nTop 3 by Science (with Math tie-breaker):")\r
print(top_3_tied[["Name", "Science", "Math"]])\r
\r
# --------------------------------------------------------------------------\r
# 2. df.nsmallest(): High-Performance Bottom-N\r
# --------------------------------------------------------------------------\r
section("3. df.nsmallest(n=2, columns='Math') - STUDENTS NEEDING REMEDIAL SUPPORT")\r
remedial_math = df.nsmallest(n=2, columns="Math")\r
print("Bottom 2 Students in Math:")\r
print(remedial_math[["StudentID", "Name", "Locality", "Math"]])\r
\r
# --------------------------------------------------------------------------\r
# 3. Series.nlargest() vs DataFrame.nlargest()\r
# --------------------------------------------------------------------------\r
section("4. SERIES-LEVEL nlargest()")\r
top_scores_series = df["TotalMarks"].nlargest(3)\r
print("Top 3 Scores Series (Values with original indices):")\r
print(top_scores_series)\r
`,k=`==============================================================================\r
TOPIC 13 NOTE: SORTING VALUES AND INDEX IN PANDAS\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
\r
1. VALUES SORTING WITH sort_values():\r
   --------------------------------------------------------------------------\r
   - Single Column:\r
     \`df.sort_values(by='Score', ascending=False)\`\r
   - Multi-Column with mixed direction vectors:\r
     \`df.sort_values(by=['Locality', 'Score'], ascending=[True, False])\`\r
     (Sorts Locality A->Z, and within each locality sorts Score high->low).\r
   - Missing Values Placement (na_position):\r
     * \`na_position='last'\` (Default): All NaNs placed at the end.\r
     * \`na_position='first'\`: All NaNs placed at the very top.\r
   - Preserving index vs resetting:\r
     Sorting keeps original index row labels. Call \`.reset_index(drop=True)\` to produce clean 0..N ranks.\r
\r
2. INDEX SORTING WITH sort_index():\r
   --------------------------------------------------------------------------\r
   - Sort Row Index: \`df.sort_index(ascending=True)\`\r
   - Sort Column Headers Alphabetically: \`df.sort_index(axis=1, ascending=True)\`\r
   - MultiIndex levels: \`df.sort_index(level='City')\`\r
\r
3. HIGH-PERFORMANCE TOP-K & BOTTOM-K (nlargest / nsmallest):\r
   --------------------------------------------------------------------------\r
   - \`df.nlargest(n=5, columns='TotalMarks')\`\r
   - \`df.nsmallest(n=3, columns='Price')\`\r
   - Algorithmic Advantage:\r
     * Full sort (\`sort_values().head(k)\`) takes O(N log N) time and requires allocating memory for entire sorted array.\r
     * \`nlargest(k)\` uses an internal Min-Heap data structure with O(N log K) time complexity, which is vastly faster when extracting top 10 from 10,000,000 rows.\r
   - Note: Only works on numeric columns.\r
\r
4. MACHINE LEARNING & TIME-SERIES IMPORTANCE:\r
   --------------------------------------------------------------------------\r
   - Time-series datasets MUST be sorted chronologically before rolling windows, lag features, or cumulative sums:\r
     \`df = df.sort_values(by='timestamp').reset_index(drop=True)\`\r
   - Cross-validation split (TimeSeriesSplit) assumes strictly chronological ordering.\r
`,N=[{id:1,question:"How do you sort a DataFrame first by 'Locality' ascending and then by 'Math' descending?",options:["df.sort_values(by=['Locality', 'Math'], ascending=[True, False])","df.sort(['Locality', 'Math'], order=['asc', 'desc'])","df.sort_values(by='Locality', ascending=True).sort_values(by='Math', ascending=False)","df.order_by(['Locality', '-Math'])"],correctAnswer:"df.sort_values(by=['Locality', 'Math'], ascending=[True, False])",explanation:"df.sort_values() accepts a list of column names for 'by' and a corresponding list of boolean flags for 'ascending' to define precise multi-column hierarchical sorting."},{id:2,question:"By default, where does Pandas place missing (NaN) values when sorting in ascending or descending order?",options:["At the end of the DataFrame (na_position='last')","At the beginning of the DataFrame (na_position='first')","It deletes all rows containing NaNs","It raises a MissingValueSortError"],correctAnswer:"At the end of the DataFrame (na_position='last')",explanation:"Pandas defaults to na_position='last', placing all missing NaN values at the very bottom of the result regardless of whether ascending is True or False."},{id:3,question:"Why is df.nlargest(5, 'Revenue') significantly faster than df.sort_values('Revenue', ascending=False).head(5) on a 10-million row dataset?",options:["nlargest uses an O(N log K) heap algorithm without sorting the entire 10M-row array","nlargest ignores floats and only works on binary integers","nlargest automatically parallelizes across 100 GPU cores","nlargest samples only the top 100 rows randomly"],correctAnswer:"nlargest uses an O(N log K) heap algorithm without sorting the entire 10M-row array",explanation:"df.nlargest() utilizes a specialized heap selection algorithm running in O(N log K) time, avoiding the expensive O(N log N) full array sort and excessive memory reallocations."},{id:4,question:"Which method sorts the DataFrame by its row index labels instead of column values?",options:["df.sort_index()","df.sort_values(by='index')","df.order_index()","df.reindex_sorted()"],correctAnswer:"df.sort_index()",explanation:"df.sort_index() sorts the DataFrame along the specified axis based on the index labels (by default axis=0 for row index, or axis=1 for column headers)."},{id:5,question:"What does the 'drop=True' parameter in df.reset_index(drop=True) achieve after sorting?",options:["It discards the old scrambled index instead of inserting it as a new column","It drops all rows containing duplicate values","It drops all NaN values from the DataFrame","It resets column names back to 0, 1, 2"],correctAnswer:"It discards the old scrambled index instead of inserting it as a new column",explanation:"Without drop=True, reset_index() moves the existing index into a new regular column named 'index'. Setting drop=True discards the old index completely and resets the index to default range 0..N-1."}],x=[{id:"part1",fileName:"01_single_and_multi_column_sorting.py",title:"1. Single & Multi-Column Sorting (sort_values)",badge:"df.sort_values()",code:j,summary:"Sort DataFrames across single or multiple hierarchical columns with mixed ascending/descending direction vectors."},{id:"part2",fileName:"02_na_position_and_sort_index.py",title:"2. na_position & sort_index (Row/Col Axis)",badge:"na_position & sort_index",code:M,summary:"Control NaN positioning ('first' vs 'last') and sort the DataFrame along row index labels or column header axes."},{id:"part3",fileName:"03_nlargest_nsmallest_top_k.py",title:"3. High-Performance Top-K (nlargest/nsmallest)",badge:"nlargest & nsmallest",code:I,summary:"Extract top or bottom performers with O(N log K) heap-based efficiency without allocating full-array sort buffers."}],p=[{id:101,name:"Debangshu",locality:"Barrackpore",math:85,sci:90,total:175},{id:102,name:"Susmita",locality:"Shyamnagar",math:92,sci:95,total:187},{id:103,name:"Swadeep",locality:"Ichapur",math:65,sci:70,total:135},{id:104,name:"Tuhina",locality:"Naihati",math:88,sci:85,total:173},{id:105,name:"Sachin",locality:"Kolkata",math:78,sci:80,total:158},{id:106,name:"Mahima",locality:"Barrackpore",math:90,sci:92,total:182},{id:107,name:"Abhronila",locality:"Titagarh",math:84,sci:88,total:172}],B=()=>{const[s,c]=d.useState("sort_studio"),[g,y]=d.useState("part1"),[o,S]=d.useState("total"),[i,b]=d.useState(!1),[a,u]=d.useState("all"),m=x.find(t=>t.id===g)||x[0],f=(()=>{let t=[...p];return t.sort((r,l)=>{let n=r[o],h=l[o];return typeof n=="string"?i?n.localeCompare(h):h.localeCompare(n):i?n-h:h-n}),a==="top3"?[...p].sort((l,n)=>n.total-l.total).slice(0,3):a==="bottom2"?[...p].sort((l,n)=>l.math-n.math).slice(0,2):t})();return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-violet-900/40 via-purple-900/30 to-slate-900/60 border border-violet-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full",children:"Ordering & Ranking"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 13"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Sorting Values and Index in Pandas"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:["Structure your data hierarchically: sort by multiple columns with"," ",e.jsx("code",{className:"text-violet-300 bg-slate-800 px-1 py-0.5 rounded",children:"df.sort_values()"}),", position NaNs, reorder row indices, and perform lightning-fast Top-K extraction using"," ",e.jsx("code",{className:"text-violet-300 bg-slate-800 px-1 py-0.5 rounded",children:"nlargest()"})," and"," ",e.jsx("code",{className:"text-violet-300 bg-slate-800 px-1 py-0.5 rounded",children:"nsmallest()"}),"."]})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white font-mono text-2xl font-bold shadow-lg shadow-violet-500/20",children:"⇅"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>c("sort_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s==="sort_studio"?"bg-violet-600 text-white shadow-lg shadow-violet-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"🏆 Leaderboard & Sorting Studio"}),e.jsxs("button",{onClick:()=>c("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s==="python_code"?"bg-violet-600 text-white shadow-lg shadow-violet-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",x.length," Scripts)"]}),e.jsx("button",{onClick:()=>c("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s==="theory_notes"?"bg-violet-600 text-white shadow-lg shadow-violet-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>c("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s==="quiz"?"bg-violet-600 text-white shadow-lg shadow-violet-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",N.length,")"]})]}),s==="sort_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🎛️"})," Dynamic Sorting Configuration"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-400 mb-1.5",children:"Sort By Column (by='...')"}),e.jsxs("select",{value:o,disabled:a!=="all",onChange:t=>S(t.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-violet-300 focus:outline-none focus:border-violet-500 font-mono disabled:opacity-50",children:[e.jsx("option",{value:"total",children:"TotalMarks (Math + Sci)"}),e.jsx("option",{value:"math",children:"Math"}),e.jsx("option",{value:"sci",children:"Science"}),e.jsx("option",{value:"name",children:"Name (Alphabetical)"}),e.jsx("option",{value:"locality",children:"Locality"}),e.jsx("option",{value:"id",children:"StudentID"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-400 mb-1.5",children:"Direction (ascending=...)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{disabled:a!=="all",onClick:()=>b(!1),className:`px-3 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${!i&&a==="all"?"bg-violet-600 text-white shadow-md shadow-violet-600/30":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"} disabled:opacity-50`,children:"Descending (High→Low)"}),e.jsx("button",{disabled:a!=="all",onClick:()=>b(!0),className:`px-3 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${i&&a==="all"?"bg-violet-600 text-white shadow-md shadow-violet-600/30":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"} disabled:opacity-50`,children:"Ascending (Low→High)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-400 mb-1.5",children:"Optimized Mode (nlargest / nsmallest)"}),e.jsxs("div",{className:"grid grid-cols-3 gap-1.5",children:[e.jsx("button",{onClick:()=>u("all"),className:`px-2 py-2 rounded-xl text-xs font-semibold transition-all ${a==="all"?"bg-violet-600 text-white":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:"Full Sort"}),e.jsx("button",{onClick:()=>u("top3"),className:`px-2 py-2 rounded-xl text-xs font-semibold transition-all ${a==="top3"?"bg-emerald-600 text-white":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:"nlargest(3)"}),e.jsx("button",{onClick:()=>u("bottom2"),className:`px-2 py-2 rounded-xl text-xs font-semibold transition-all ${a==="bottom2"?"bg-rose-600 text-white":"bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"}`,children:"nsmallest(2)"})]})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-violet-300",children:[e.jsx("span",{className:"text-slate-500",children:"# Executed Python code:"}),e.jsxs("div",{className:"mt-1",children:[a==="top3"&&e.jsx("span",{className:"text-emerald-400",children:"df.nlargest(n=3, columns='TotalMarks')"}),a==="bottom2"&&e.jsx("span",{className:"text-rose-400",children:"df.nsmallest(n=2, columns='Math')"}),a==="all"&&e.jsx("span",{children:`df.sort_values(by='${o==="total"?"TotalMarks":o}', ascending=${i?"True":"False"}).reset_index(drop=True)`})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[e.jsx("div",{className:"flex items-center justify-between mb-4",children:e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Sorted DataFrame Leaderboard (",f.length," Rows)"]})}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80",children:[e.jsx("th",{className:"p-3 text-violet-400 font-bold",children:"Rank"}),e.jsx("th",{className:"p-3 text-slate-400 font-mono",children:"StudentID"}),e.jsx("th",{className:"p-3 text-teal-300 font-semibold",children:"Student Name"}),e.jsx("th",{className:"p-3 text-slate-300 font-semibold",children:"Locality"}),e.jsx("th",{className:"p-3 text-cyan-300 font-semibold",children:"Math"}),e.jsx("th",{className:"p-3 text-cyan-300 font-semibold",children:"Science"}),e.jsx("th",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/20",children:"Total Marks"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:f.map((t,r)=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3",children:e.jsx("span",{className:`w-6 h-6 inline-flex items-center justify-center rounded-full text-xs font-bold ${r===0?"bg-amber-400 text-slate-950 shadow-md shadow-amber-400/40":r===1?"bg-slate-300 text-slate-950":r===2?"bg-amber-700 text-white":"bg-slate-800 text-slate-400"}`,children:r+1})}),e.jsx("td",{className:"p-3 text-slate-400",children:t.id}),e.jsx("td",{className:"p-3 text-slate-100 font-sans font-semibold",children:t.name}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:t.locality}),e.jsx("td",{className:"p-3 text-cyan-300",children:t.math}),e.jsx("td",{className:"p-3 text-cyan-300",children:t.sci}),e.jsxs("td",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/10 text-sm",children:[t.total," / 200"]})]},t.id))})]})]}),e.jsx(T,{topic:"Sorting Mechanics & Algorithmic Scalability in ML",text:"Sorting seems straightforward, but at production scale with 50 million records, choosing df.nlargest(10, 'Probability') over df.sort_values().head(10) saves seconds of runtime and gigabytes of memory! Also, remember that time-series ML models strictly require prior chronological sorting before computing rolling moving averages or lag features."})]}),s==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:x.map(t=>e.jsxs("button",{onClick:()=>y(t.id),className:`p-4 rounded-xl text-left border transition-all ${g===t.id?"bg-violet-950/60 border-violet-500 text-white shadow-lg shadow-violet-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-violet-400 uppercase tracking-wider mb-1",children:t.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:t.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:m.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:m.summary})]})}),e.jsx(v,{fileModule:m.code,title:m.fileName})]})]}),s==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(w,{text:k,title:"Topic 13 Revision Notes: Sorting Values & Index"})}),s==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(_,{questions:N,title:"Topic 13 Knowledge Check: Sorting Values & Index"})})]})})};export{B as default};
