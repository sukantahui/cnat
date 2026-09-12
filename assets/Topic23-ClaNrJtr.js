import{b as g,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as y}from"./PythonFileLoader-CiS1GfkF.js";import{F as N}from"./FAQTemplate-D_90hN4m.js";import{P as S}from"./PlainTextPrint-yt10TRX1.js";import{T as R}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const w=`"""\r
==============================================================================\r
Topic 23: Worked Example 4 - Merging Two DataFrames on a Key Column\r
Script 01: Admissions Profiles & Assessment Logs: Inner vs Left Merge\r
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
# Primary Student Admissions Table (Table 1)\r
admissions = pd.DataFrame({\r
    "RegNo": ["REG-101", "REG-102", "REG-103", "REG-104", "REG-105", "REG-106"],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima"],\r
    "Course": ["Python ML", "Python ML", "Data Science", "Python ML", "Data Science", "Python ML"],\r
    "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore"]\r
})\r
\r
# Online Assessment Test Submissions (Table 2)\r
# Note: Sachin (REG-105) was absent. Abhronila (REG-107) is a walk-in candidate not yet in Admissions.\r
test_results = pd.DataFrame({\r
    "Student_Reg_Code": ["REG-101", "REG-102", "REG-103", "REG-104", "REG-106", "REG-107"],\r
    "Score_Pct": [88.5, 94.0, 72.0, 89.5, 91.0, 85.0],\r
    "Submission_Time_Min": [45, 38, 55, 42, 40, 48]\r
})\r
\r
section("1. SOURCE DATASETS")\r
print("Admissions Table (6 Registered Candidates):")\r
print(admissions)\r
print("\\nOnline Test Log (6 Submissions):")\r
print(test_results)\r
\r
# --------------------------------------------------------------------------\r
# 1. INNER JOIN on Key (Intersection of Enrolled & Tested)\r
# --------------------------------------------------------------------------\r
section("2. INNER MERGE (Enrolled Candidates Who Completed Test)")\r
inner_enrolled_tested = pd.merge(\r
    admissions,\r
    test_results,\r
    left_on="RegNo",\r
    right_on="Student_Reg_Code",\r
    how="inner"\r
).drop(columns=["Student_Reg_Code"])\r
\r
print(inner_enrolled_tested)\r
\r
# --------------------------------------------------------------------------\r
# 2. LEFT JOIN (Preserve All Registered Students, Flagging Absentees)\r
# --------------------------------------------------------------------------\r
section("3. LEFT MERGE (Audit All Registered Students)")\r
left_all_admissions = pd.merge(\r
    admissions,\r
    test_results,\r
    left_on="RegNo",\r
    right_on="Student_Reg_Code",\r
    how="left"\r
).drop(columns=["Student_Reg_Code"])\r
\r
print(left_all_admissions)\r
`,j=`"""\r
==============================================================================\r
Topic 23: Worked Example 4 - Merging Two DataFrames on a Key Column\r
Script 02: Diagnosing Data Discrepancies with Outer Merge & indicator=True\r
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
admissions = pd.DataFrame({\r
    "RegNo": ["REG-101", "REG-102", "REG-103", "REG-104", "REG-105", "REG-106"],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima"],\r
    "Course": ["Python ML", "Python ML", "Data Science", "Python ML", "Data Science", "Python ML"]\r
})\r
\r
test_results = pd.DataFrame({\r
    "RegNo": ["REG-101", "REG-102", "REG-103", "REG-104", "REG-106", "REG-107"],\r
    "Score_Pct": [88.5, 94.0, 72.0, 89.5, 91.0, 85.0]\r
})\r
\r
# --------------------------------------------------------------------------\r
# 1. Full Outer Merge with indicator=True\r
# --------------------------------------------------------------------------\r
section("1. FULL OUTER MERGE WITH MERGE INDICATOR")\r
outer_audit = pd.merge(\r
    admissions,\r
    test_results,\r
    on="RegNo",\r
    how="outer",\r
    indicator=True\r
)\r
\r
print(outer_audit)\r
\r
# --------------------------------------------------------------------------\r
# 2. Diagnosing Unmatched Records\r
# --------------------------------------------------------------------------\r
section("2. DIAGNOSTIC DISCREPANCY AUDIT")\r
\r
# Case A: Enrolled students who MISSED the test (left_only)\r
absentees = outer_audit[outer_audit["_merge"] == "left_only"]\r
print("Registered Students Who Missed Online Assessment:")\r
print(absentees[["RegNo", "Name", "Course"]])\r
\r
# Case B: Unregistered Walk-in Test Takers (right_only)\r
walkins = outer_audit[outer_audit["_merge"] == "right_only"]\r
print("\\nUnregistered Candidates Who Took Online Assessment:")\r
print(walkins[["RegNo", "Score_Pct"]])\r
`,T=`"""\r
==============================================================================\r
Topic 23: Worked Example 4 - Merging Two DataFrames on a Key Column\r
Script 03: Cardinality Validation (validate='1:1') & Enriched Pipeline\r
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
admissions = pd.DataFrame({\r
    "RegNo": ["REG-101", "REG-102", "REG-103", "REG-104", "REG-105", "REG-106"],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima"],\r
    "Course": ["Python ML", "Python ML", "Data Science", "Python ML", "Data Science", "Python ML"],\r
    "Batch_Code": ["BATCH-A", "BATCH-A", "BATCH-B", "BATCH-A", "BATCH-B", "BATCH-A"]\r
})\r
\r
test_results = pd.DataFrame({\r
    "RegNo": ["REG-101", "REG-102", "REG-103", "REG-104", "REG-106"],\r
    "Score_Pct": [88.5, 94.0, 72.0, 89.5, 91.0],\r
    "Batch_Code": ["TEST-2026", "TEST-2026", "TEST-2026", "TEST-2026", "TEST-2026"]\r
})\r
\r
# --------------------------------------------------------------------------\r
# 1. Merging with Cardinality Validation & Disambiguating Suffixes\r
# --------------------------------------------------------------------------\r
section("1. MERGING WITH validate='1:1' AND CUSTOM SUFFIXES")\r
merged_final = pd.merge(\r
    admissions,\r
    test_results,\r
    on="RegNo",\r
    how="left",\r
    validate="1:1",\r
    suffixes=("_admissions", "_exam")\r
)\r
\r
# --------------------------------------------------------------------------\r
# 2. Deriving Final Qualification Status\r
# --------------------------------------------------------------------------\r
section("2. DERIVING FINAL ADMISSION STATUS")\r
merged_final["Final_Status"] = np.where(\r
    merged_final["Score_Pct"].isna(), "Assessment Pending (Absent)",\r
    np.where(merged_final["Score_Pct"] >= 80.0, "Direct Admission (Merit)", "Standard Admission")\r
)\r
\r
print(merged_final[["RegNo", "Name", "Course", "Score_Pct", "Final_Status"]])\r
`,E="==============================================================================\r\nTOPIC 23 NOTE: WORKED EXAMPLE 4 - MERGING ON A KEY COLUMN\r\nInstructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r\nStudents: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r\n==============================================================================\r\n\r\n1. RELATIONAL MERGE WORKFLOW IN PRODUCTION ETL:\r\n   --------------------------------------------------------------------------\r\n   Step 1: Inspect Key Formats on Both Tables:\r\n           - Check `df1['Key'].dtype` vs `df2['Key'].dtype` (string vs int mismatch is #1 merge bug!).\r\n           - Strip whitespace: `df1['Key'] = df1['Key'].str.strip()`.\r\n\r\n   Step 2: Choose Join Strategy Based on Business Logic:\r\n           - `how='inner'`: Strict intersection (only candidates with both registration & exam score).\r\n           - `how='left'`: Primary cohort audit (all registered candidates, showing NaNs for absentees).\r\n           - `how='outer'`: Complete reconciliation audit to find orphan records in either system.\r\n\r\n   Step 3: Disambiguate Overlapping Feature Names:\r\n           - Pass `suffixes=('_admissions', '_exam')` so duplicate headers (like `Date`, `Batch`) don't collide.\r\n\r\n   Step 4: Enforce Cardinality Validation:\r\n           - Pass `validate='1:1'`, `'1:m'`, or `'m:1'` inside `pd.merge()`.\r\n           - Prevents accidental Cartesian multiplication caused by duplicated customer keys.\r\n\r\n   Step 5: Audit Data Lineage with indicator=True:\r\n           - `outer_df['_merge'].value_counts()` reveals exact counts for `both`, `left_only`, and `right_only`.\r\n",b=[{id:1,question:"If 'RegNo' in Table 1 is stored as an integer (101) and in Table 2 as a string ('101'), what will pd.merge() return?",options:["A MergeError or an empty DataFrame because data types do not match","An automated type conversion to floating point","A full outer join with duplicate rows","A boolean array of True/False"],correctAnswer:"A MergeError or an empty DataFrame because data types do not match",explanation:"Pandas merge keys must share the exact same data type. Merging an integer column with a string column results in zero matching rows or raises a MergeError."},{id:2,question:"In an admissions vs online test merge, which join type identifies registered candidates who missed the test?",options:["how='left' (or full outer join where _merge == 'left_only')","how='inner'","how='right'","how='cross'"],correctAnswer:"how='left' (or full outer join where _merge == 'left_only')",explanation:"A left join preserves all registered candidates and assigns NaN to test scores for absentees; with indicator=True on an outer join, they are marked as 'left_only'."},{id:3,question:"Why should you pass validate='1:1' in pd.merge(admissions, test_scores, on='RegNo', validate='1:1')?",options:["To ensure neither DataFrame contains duplicate RegNo values, preventing unexpected row explosion","To verify that both DataFrames have exactly 100 rows","To restrict the merge to 1 core CPU","To convert all scores to a 1 to 10 scale"],correctAnswer:"To ensure neither DataFrame contains duplicate RegNo values, preventing unexpected row explosion",explanation:"validate='1:1' confirms that the merge keys are unique in both the left and right datasets, preventing silent duplication of records."},{id:4,question:"What does suffixes=('_adm', '_test') do during a merge when both tables contain a column named 'Date'?",options:["Renames them to 'Date_adm' and 'Date_test' in the merged DataFrame to avoid column collision","Deletes both 'Date' columns","Combines both dates into a date range string","Calculates the difference between the two dates in days"],correctAnswer:"Renames them to 'Date_adm' and 'Date_test' in the merged DataFrame to avoid column collision",explanation:"The suffixes parameter appends specified suffixes to overlapping column headers from the left and right DataFrames to keep them distinct."},{id:5,question:"How do you drop the redundant right key column after merging on left_on='RegNo' and right_on='Student_Reg_Code'?",options:["df.drop(columns=['Student_Reg_Code'])","df.remove_key('Student_Reg_Code')","df.pop_right()","del 'Student_Reg_Code'"],correctAnswer:"df.drop(columns=['Student_Reg_Code'])",explanation:"When left_on and right_on have different names, Pandas retains both columns in the result; df.drop(columns=[...]) is standard to remove the duplicate."}],u=[{id:"part1",fileName:"01_admissions_test_inner_left_merge.py",title:"1. Key Matching: Inner & Left Joins",badge:"left_on / right_on",code:w,summary:"Merge student registration databases with online assessment test logs using inner and left relational joins."},{id:"part2",fileName:"02_diagnosing_unmatched_outer_merge.py",title:"2. Discrepancy Audits with indicator=True",badge:"Outer Join & _merge",code:j,summary:"Reconcile discrepancies using full outer joins with merge indicator tags to isolate absentees (left_only) and walk-in candidates (right_only)."},{id:"part3",fileName:"03_merging_with_cardinality_and_clean_export.py",title:"3. Cardinality Validation (validate='1:1')",badge:"validate='1:1' & Suffixes",code:T,summary:"Enforce strict one-to-one merge validation, disambiguate conflicting batch codes with suffixes, and derive qualification status."}],d=[{regno:"REG-101",name:"Debangshu",course:"Python ML",locality:"Barrackpore"},{regno:"REG-102",name:"Susmita",course:"Python ML",locality:"Shyamnagar"},{regno:"REG-103",name:"Swadeep",course:"Data Science",locality:"Ichapur"},{regno:"REG-104",name:"Tuhina",course:"Python ML",locality:"Naihati"},{regno:"REG-105",name:"Sachin",course:"Data Science",locality:"Kolkata"},{regno:"REG-106",name:"Mahima",course:"Python ML",locality:"Barrackpore"}],h=[{student_code:"REG-101",score:88.5,time:45},{student_code:"REG-102",score:94,time:38},{student_code:"REG-103",score:72,time:55},{student_code:"REG-104",score:89.5,time:42},{student_code:"REG-106",score:91,time:40},{student_code:"REG-107",score:85,time:48}],F=()=>{const[r,l]=g.useState("merge_studio"),[p,f]=g.useState("part1"),[a,_]=g.useState("left"),c=u.find(t=>t.id===p)||u[0],x=(()=>{const t=new Map(d.map(s=>[s.regno,s])),m=new Map(h.map(s=>[s.student_code,s]));return a==="inner"?d.filter(s=>m.has(s.regno)).map(s=>{const n=m.get(s.regno);return{regno:s.regno,name:s.name,course:s.course,score:n.score,status:n.score>=80?"Merit Admission":"Standard Admission",tag:"both"}}):a==="left"?d.map(s=>{const n=m.get(s.regno);return{regno:s.regno,name:s.name,course:s.course,score:n?n.score:null,status:n?n.score>=80?"Merit Admission":"Standard Admission":"Assessment Absent",tag:n?"both":"left_only"}}):a==="right"?h.map(s=>{const n=t.get(s.student_code);return{regno:s.student_code,name:n?n.name:"Unregistered Walk-in",course:n?n.course:"Pending Selection",score:s.score,status:n?s.score>=80?"Merit Admission":"Standard Admission":"Registration Required",tag:n?"both":"right_only"}}):Array.from(new Set([...d.map(s=>s.regno),...h.map(s=>s.student_code)])).sort().map(s=>{const n=t.get(s),o=m.get(s);let i="both";return n&&!o&&(i="left_only"),!n&&o&&(i="right_only"),{regno:s,name:n?n.name:"Unregistered Walk-in",course:n?n.course:"Pending Selection",score:o?o.score:null,status:i==="left_only"?"Assessment Absent":i==="right_only"?"Registration Required":o.score>=80?"Merit Admission":"Standard Admission",tag:i}})})();return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900/60 border border-blue-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full",children:"Worked Case Study 4"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 23"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Worked Example 4: Merging Two DataFrames on a Key Column"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:["Reconcile disparate institutional records: join Admissions registration data with Online Assessment test logs, audit data discrepancies with"," ",e.jsx("code",{className:"text-blue-300 bg-slate-800 px-1 py-0.5 rounded",children:"indicator=True"}),", and validate one-to-one cardinality."]})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-blue-500/20",children:"Key ⋈"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>l("merge_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="merge_studio"?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"🔀 Key Reconciliation Studio"}),e.jsxs("button",{onClick:()=>l("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="python_code"?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",u.length," Scripts)"]}),e.jsx("button",{onClick:()=>l("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="theory_notes"?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>l("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="quiz"?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",b.length,")"]})]}),r==="merge_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800 mb-2",children:[e.jsxs("h4",{className:"text-xs font-bold text-blue-300 uppercase",children:["📋 Left: Admissions DB (",e.jsx("code",{className:"text-white font-mono",children:"RegNo"}),")"]}),e.jsx("span",{className:"text-xs text-slate-500",children:"6 Registered"})]}),e.jsx("div",{className:"text-xs font-mono space-y-1 text-slate-300",children:d.map(t=>e.jsxs("div",{className:"flex justify-between py-0.5 border-b border-slate-800/40",children:[e.jsx("span",{className:"text-blue-400 font-bold",children:t.regno}),e.jsx("span",{children:t.name}),e.jsx("span",{className:"text-slate-500",children:t.course})]},t.regno))})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800 mb-2",children:[e.jsxs("h4",{className:"text-xs font-bold text-teal-300 uppercase",children:["📋 Right: Test Portal (",e.jsx("code",{className:"text-white font-mono",children:"Student_Reg_Code"}),")"]}),e.jsx("span",{className:"text-xs text-slate-500",children:"6 Submissions"})]}),e.jsx("div",{className:"text-xs font-mono space-y-1 text-slate-300",children:h.map(t=>e.jsxs("div",{className:"flex justify-between py-0.5 border-b border-slate-800/40",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:t.student_code}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:[t.score,"% Score"]}),e.jsxs("span",{className:"text-slate-500",children:[t.time," mins"]})]},t.student_code))})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Select Relational Merge Strategy"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:[{id:"left",title:"1. LEFT JOIN (Recommended)",sub:"All enrolled students kept (Sachin marked absent)",code:"how='left'"},{id:"inner",title:"2. INNER JOIN",sub:"Only candidates who are enrolled AND tested",code:"how='inner'"},{id:"right",title:"3. RIGHT JOIN",sub:"All test takers kept (Walk-in REG-107 included)",code:"how='right'"},{id:"outer",title:"4. FULL OUTER JOIN",sub:"Complete discrepancy audit with indicator=True",code:"how='outer'"}].map(t=>e.jsxs("button",{onClick:()=>_(t.id),className:`p-3.5 rounded-xl text-left border transition-all ${a===t.id?"bg-blue-950/60 border-blue-500 text-white shadow-lg shadow-blue-500/10":"bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-blue-300",children:t.title}),e.jsx("div",{className:"text-[11px] text-slate-300 mt-1",children:t.sub}),e.jsx("code",{className:"text-[11px] font-mono text-teal-400 mt-2 block",children:t.code})]},t.id))}),e.jsxs("div",{className:"mt-4 p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-blue-300",children:[e.jsx("span",{className:"text-slate-500",children:"# Executed Python merge command:"}),e.jsx("div",{className:"mt-1 font-bold",children:`pd.merge(admissions, test_results, left_on='RegNo', right_on='Student_Reg_Code', how='${a}', validate='1:1')`})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[e.jsx("div",{className:"flex items-center justify-between mb-4",children:e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Reconciled Output Table (",x.length," Records)"]})}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80 font-mono",children:[e.jsx("th",{className:"p-3 text-blue-300 font-bold",children:"RegNo (Key)"}),e.jsx("th",{className:"p-3 text-slate-300",children:"Student Name"}),e.jsx("th",{className:"p-3 text-slate-300",children:"Target Course"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Assessment Score"}),e.jsx("th",{className:"p-3 text-emerald-400 font-bold",children:"Admission Qualification Status"}),e.jsx("th",{className:"p-3 text-purple-300 font-bold bg-purple-950/20",children:"_merge Tag"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:x.map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-blue-400 font-bold",children:t.regno}),e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:t.name}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:t.course}),e.jsx("td",{className:"p-3",children:t.score!==null?e.jsxs("span",{className:"text-cyan-300 font-bold",children:[t.score,"%"]}):e.jsx("span",{className:"px-2 py-0.5 rounded text-xs bg-rose-950/80 text-rose-400 border border-rose-800",children:"Absent (NaN)"})}),e.jsx("td",{className:"p-3 font-sans",children:e.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-bold ${t.status.includes("Merit")?"bg-emerald-600/30 text-emerald-300 border border-emerald-500/40":t.status.includes("Absent")?"bg-rose-600/30 text-rose-300 border border-rose-500/40":"bg-amber-600/30 text-amber-300 border border-amber-500/40"}`,children:t.status})}),e.jsx("td",{className:"p-3 bg-purple-950/10",children:e.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-semibold ${t.tag==="both"?"bg-emerald-600/30 text-emerald-300":t.tag==="left_only"?"bg-blue-600/30 text-blue-300":"bg-amber-600/30 text-amber-300"}`,children:t.tag})})]},t.regno))})]})]}),e.jsx(R,{topic:"ETL Data Lineage & Reconciliation Audits",text:"In enterprise databases, merging two files is rarely clean because real-world systems have orphan records! Sachin registered but missed the exam (left_only), while Abhronila walked in and took the exam without pre-registering (right_only). Using pd.merge(how='outer', indicator=True) immediately uncovers both discrepancies for administrative resolution!"})]}),r==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:u.map(t=>e.jsxs("button",{onClick:()=>f(t.id),className:`p-4 rounded-xl text-left border transition-all ${p===t.id?"bg-blue-950/60 border-blue-500 text-white shadow-lg shadow-blue-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-blue-400 uppercase tracking-wider mb-1",children:t.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:t.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:c.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:c.summary})]})}),e.jsx(y,{fileModule:c.code,title:c.fileName})]})]}),r==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(S,{text:E,title:"Topic 23 Revision Notes: Worked Example 4"})}),r==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(N,{questions:b,title:"Topic 23 Knowledge Check: Worked Example 4"})})]})})};export{F as default};
