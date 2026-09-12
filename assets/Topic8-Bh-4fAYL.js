import{b as o,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as y}from"./PythonFileLoader-CiS1GfkF.js";import{F as N}from"./FAQTemplate-D_90hN4m.js";import{P as w}from"./PlainTextPrint-yt10TRX1.js";import{T as _}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const v=`"""\r
01_loc_label_based_indexing.py\r
==============================\r
Topic: Label-Based Indexing with df.loc[] (Explicit Labels & Slicing)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("PANDAS df.loc[]: LABEL-BASED INDEXING")\r
    print("=" * 70)\r
\r
    # 4 students indexed by their Student Enrollment Code\r
    df = pd.DataFrame({\r
        "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina"],\r
        "City": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati"],\r
        "Math": [85, 92, 65, 88],\r
        "Science": [90, 95, 70, 85]\r
    }, index=["BP_101", "BP_102", "BP_103", "BP_104"])\r
\r
    print("Master DataFrame (String Index):\\n", df)\r
\r
    # 1. Single Row Access by Label -> Returns 1D Series\r
    row_susmita = df.loc["BP_102"]\r
    print("\\n1. Single Row df.loc['BP_102']:\\n", row_susmita)\r
\r
    # 2. Specific Cell Access: df.loc[row_label, col_label]\r
    math_debangshu = df.loc["BP_101", "Math"]\r
    print(f"\\n2. Specific Cell df.loc['BP_101', 'Math']: {math_debangshu}")\r
\r
    # 3. Label-Based Slicing: df.loc['BP_101':'BP_103', :]\r
    # CRITICAL RULE: In df.loc[], the slice stop endpoint IS INCLUSIVE!\r
    # ('BP_103' IS INCLUDED in the result)\r
    slice_inclusive = df.loc["BP_101":"BP_103", ["Name", "Math"]]\r
    print("\\n3. Label Slicing df.loc['BP_101':'BP_103'] (Endpoint INCLUSIVE!):\\n", slice_inclusive)\r
\r
    # 4. Conditional Filtering via loc: df.loc[condition, columns]\r
    # In ML, this is standard for modifying subsets in place without SettingWithCopyWarning\r
    merit_students = df.loc[df["Math"] >= 85, ["Name", "Math", "Science"]]\r
    print("\\n4. Conditional Filtering df.loc[df['Math'] >= 85, ...]:\\n", merit_students)\r
\r
if __name__ == "__main__":\r
    main()\r
`,I=`"""\r
02_iloc_integer_positional_indexing.py\r
======================================\r
Topic: Integer Positional Indexing with df.iloc[] (0-Indexed & Python Slicing)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("PANDAS df.iloc[]: INTEGER POSITIONAL INDEXING")\r
    print("=" * 70)\r
\r
    df = pd.DataFrame({\r
        "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina"],\r
        "City": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati"],\r
        "Math": [85, 92, 65, 88],\r
        "Science": [90, 95, 70, 85]\r
    }, index=["BP_101", "BP_102", "BP_103", "BP_104"])\r
\r
    print("Master DataFrame:\\n", df)\r
\r
    # 1. Single Row by Integer Offset: df.iloc[0] (First row)\r
    first_row = df.iloc[0]\r
    print("\\n1. First Row df.iloc[0]:\\n", first_row)\r
\r
    # 2. Specific Cell by Coordinates: df.iloc[row_idx, col_idx]\r
    # Row 1 (Susmita), Col 2 (Math)\r
    susmita_math = df.iloc[1, 2]\r
    print(f"\\n2. Specific Cell df.iloc[1, 2] (Row 1, Col 2): {susmita_math}")\r
\r
    # 3. Positional Slicing: df.iloc[0:2, 0:3]\r
    # CRITICAL RULE: In df.iloc[], the slice stop endpoint is EXCLUSIVE (like standard Python slices)!\r
    # 0:2 selects row 0 and row 1 ONLY (row 2 is excluded)\r
    slice_exclusive = df.iloc[0:2, 0:3]\r
    print("\\n3. Positional Slicing df.iloc[0:2, 0:3] (Endpoint EXCLUSIVE!):\\n", slice_exclusive)\r
\r
    # 4. Negative Indexing (Last Row / Last Column)\r
    last_row_last_col = df.iloc[-1, -1]\r
    print(f"\\n4. Negative Indexing df.iloc[-1, -1] (Bottom-Right cell): {last_row_last_col}")\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
03_loc_vs_iloc_slicing_comparison.py\r
====================================\r
Topic: Side-by-Side Comparison: loc vs iloc on Integer-Indexed DataFrames\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("CRITICAL COMPARISON: loc VS iloc ON INTEGER INDEXED DATAFRAMES")\r
    print("=" * 70)\r
\r
    # Shuffled integer index (simulating sampled or filtered ML data)\r
    df_shuffled = pd.DataFrame({\r
        "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina"],\r
        "Score": [88, 95, 72, 91]\r
    }, index=[10, 20, 30, 40])\r
\r
    print("Shuffled Integer-Indexed DataFrame:\\n", df_shuffled)\r
\r
    # 1. Single Key Access:\r
    # df.loc[10] looks for label 10 -> Returns Debangshu\r
    # df.iloc[0] looks for 0th row in memory -> Returns Debangshu\r
    # df.iloc[10] -> IndexError! (There are only 4 rows)\r
    print("\\n1. Single Index Lookup:")\r
    print("   df.loc[10]  (Looks for LABEL 10)  :", df_shuffled.loc[10]["Name"])\r
    print("   df.iloc[0]  (Looks for POSITION 0):", df_shuffled.iloc[0]["Name"])\r
\r
    # 2. Slicing Differences:\r
    # df.loc[10:30] includes labels 10, 20, 30 (3 rows, endpoint INCLUSIVE)\r
    # df.iloc[0:2]  includes positions 0 and 1 (2 rows, endpoint EXCLUSIVE)\r
    print("\\n2. Slicing Comparison:")\r
    print("   df.loc[10:30] (INCLUSIVE):\\n", df_shuffled.loc[10:30])\r
    print("\\n   df.iloc[0:2] (EXCLUSIVE):\\n", df_shuffled.iloc[0:2])\r
\r
    # 3. Avoiding SettingWithCopyWarning in ML:\r
    # Always use df.loc[mask, 'col'] = new_val instead of chained indexing df[mask]['col'] = new_val!\r
    df_shuffled.loc[df_shuffled["Score"] < 80, "Score"] = 75  # Grace boost\r
    print("\\n3. In-Place Update via loc[mask, 'col']:\\n", df_shuffled)\r
\r
if __name__ == "__main__":\r
    main()\r
`,C=`========================================================================\r
TOPIC 8 NOTE: SELECTING ROWS WITH loc[] AND iloc[]\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. THE FUNDAMENTAL DIFFERENCE: loc VS iloc\r
------------------------------------------\r
- \`df.loc[row_indexer, column_indexer]\`:\r
  * LABEL-BASED access.\r
  * Searches by explicit index label strings or integers (e.g. \`'BP_101'\`, \`10\`, \`'Name'\`).\r
  * Endpoint Inclusivity: Slices \`loc['A':'C']\` INCLUDE the stop label \`'C'\`!\r
  * Accepts Boolean condition series: \`df.loc[df['Age'] > 18, ['Name', 'Score']]\`.\r
\r
- \`df.iloc[row_indexer, column_indexer]\`:\r
  * INTEGER POSITIONAL access (0-based array coordinates).\r
  * Searches strictly by numeric position in memory (0, 1, 2, ..., N-1).\r
  * Endpoint Inclusivity: Slices \`iloc[0:3]\` are EXCLUSIVE of stop index 3 (only returns rows 0, 1, 2).\r
  * Supports Python negative indexing: \`df.iloc[-1, -1]\`.\r
\r
2. SUMMARY CHEAT SHEET\r
-----------------------\r
| Feature | \`df.loc[]\` | \`df.iloc[]\` |\r
| :--- | :--- | :--- |\r
| Access Mechanism | Index Labels & Column Names | Integer Positional Coordinates (0..N-1) |\r
| Slice Stop Endpoint | **INCLUSIVE** of endpoint | **EXCLUSIVE** of endpoint (standard Python) |\r
| Boolean Masking | Supported (\`df.loc[mask, :]\`) | Requires boolean array/list matching shape |\r
| Negative Integers | Treated as literal index label \`-1\` | Refers to last row/column |\r
\r
3. PREVENTING SettingWithCopyWarning\r
-------------------------------------\r
- Anti-Pattern (Chained Indexing):\r
  \`df[df['Score'] > 80]['Passed'] = True\`  # Raises SettingWithCopyWarning, may fail silently!\r
- Best Practice Pattern:\r
  \`df.loc[df['Score'] > 80, 'Passed'] = True\`  # Safe, explicit, in-place modification.\r
`,E=[{id:1,question:"What is the crucial difference in endpoint inclusivity between `df.loc[0:3]` and `df.iloc[0:3]` for a DataFrame with default 0-indexed integers?",options:["`df.loc[0:3]` includes label 3 (returning 4 rows: 0, 1, 2, 3), whereas `df.iloc[0:3]` excludes position 3 (returning 3 rows: 0, 1, 2).","`df.iloc[0:3]` includes 4 rows, while `df.loc[0:3]` includes 3 rows.","Both return identical 3 rows.","Both return identical 4 rows."],correctAnswer:0,explanation:"`loc` is label-based and always includes the stop label in slices. `iloc` is integer position-based and follows standard Python slice rules where the stop position is excluded."},{id:2,question:"Given a DataFrame with custom row index `['A', 'B', 'C', 'D']`, how do you access the value in the 2nd row (index 'B') and 3rd column (named 'Score') using `loc` and `iloc`?",options:["`df.loc['B', 'Score']` and `df.iloc[1, 2]`","`df.loc[1, 2]` and `df.iloc['B', 'Score']`","`df.loc[2, 3]` and `df.iloc['B', 'Score']`","`df.get('B', 2)`"],correctAnswer:0,explanation:"`loc` takes the row label `'B'` and column label `'Score'`. `iloc` takes 0-based integer coordinates: 2nd row is index `1`, and 3rd column is index `2`."},{id:3,question:"Why should you use `df.loc[condition, 'Column'] = value` instead of chained indexing `df[condition]['Column'] = value` to update values in a DataFrame?",options:["Chained indexing triggers a `SettingWithCopyWarning` because it might operate on a temporary memory copy, potentially failing to mutate the original DataFrame.","Because `df.loc` is 100 times slower.","Because chained indexing only works on integers.","Because `df.loc` automatically saves to disk."],correctAnswer:0,explanation:"Chained indexing creates ambiguity about whether a view or copy was returned. `df.loc` guarantees direct in-place modification of the underlying memory buffer."},{id:4,question:"How can you extract the very last row and the very last column of a DataFrame of unknown size using `iloc`?",options:["`df.iloc[-1, -1]`","`df.loc[-1, -1]`","`df.iloc[end, end]`","`df.last()`"],correctAnswer:0,explanation:"`iloc` supports Python negative indexing where `-1` represents the last item along that axis."},{id:5,question:"If a DataFrame has index `[100, 200, 300]`, what will `df.iloc[100]` raise?",options:["`IndexError: single positional indexer is out-of-bounds` (because there are only 3 rows, positions 0, 1, 2).","It returns the row with index 100.","It returns NaN.","It creates 97 empty rows."],correctAnswer:0,explanation:"`iloc` searches by 0-based array position (0, 1, 2), not by label. Since position 100 does not exist in a 3-row array, an `IndexError` is raised. To search for label 100, use `df.loc[100]`."}],m=[{id:"part1",fileName:"01_loc_label_based_indexing.py",title:"1. Label-Based Access (df.loc[])",badge:"loc[] Labels",code:v,summary:"Accesses rows/cells via explicit string/integer labels, demonstrates endpoint-inclusive slicing, and conditional filtering."},{id:"part2",fileName:"02_iloc_integer_positional_indexing.py",title:"2. Positional Access (df.iloc[])",badge:"iloc[] Offsets",code:I,summary:"Selects rows/columns by 0-based memory coordinates, endpoint-exclusive slices (0:2), and negative indexing (iloc[-1, -1])."},{id:"part3",fileName:"03_loc_vs_iloc_slicing_comparison.py",title:"3. loc vs iloc on Integer Indices",badge:"loc vs iloc Traps",code:j,summary:"Resolves label vs position confusion on non-sequential integer indices and avoids SettingWithCopyWarning in ML pipelines."}],l=[{label:"BP_101",pos:0,name:"Debangshu",city:"Barrackpore",math:85,sci:90},{label:"BP_102",pos:1,name:"Susmita",city:"Shyamnagar",math:92,sci:95},{label:"BP_103",pos:2,name:"Swadeep",city:"Ichapur",math:65,sci:70},{label:"BP_104",pos:3,name:"Tuhina",city:"Naihati",math:88,sci:85}],M=()=>{const[r,b]=o.useState("indexer_studio"),[p,g]=o.useState("part1"),[t,h]=o.useState("loc"),[a,f]=o.useState(1),[i,u]=o.useState("math"),d=m.find(n=>n.id===p)||m[0],x={name:0,city:1,math:2,sci:3};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-teal-900/60 via-slate-900 to-indigo-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Module 009_002 • Pandas Essentials"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/40",children:"Topic 8 • Row Indexing"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-200 via-cyan-100 to-indigo-300 bg-clip-text text-transparent",children:"Selecting Rows with loc[] and iloc[]"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Master the exact differences between Label-Based ",e.jsx("code",{className:"text-teal-300 font-mono",children:"df.loc[]"})," (endpoint inclusive) and Integer-Positional ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"df.iloc[]"})," (endpoint exclusive), avoiding SettingWithCopyWarning during ML feature updates."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"indexer_studio",label:"Interactive loc vs iloc Studio",icon:"🎯"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(n=>e.jsxs("button",{onClick:()=>b(n.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r===n.id?"bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:n.icon}),n.label]},n.id))})]}),r==="indexer_studio"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsx("h3",{className:"text-xs font-bold text-teal-300 uppercase tracking-wider",children:"1. Select Indexer Method:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>h("loc"),className:`px-4 py-2 rounded-xl border text-xs font-mono font-bold transition ${t==="loc"?"bg-teal-500 border-teal-400 text-slate-950 shadow-md shadow-teal-500/20":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:"df.loc[] (Label-Based)"}),e.jsx("button",{onClick:()=>h("iloc"),className:`px-4 py-2 rounded-xl border text-xs font-mono font-bold transition ${t==="iloc"?"bg-cyan-500 border-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:"df.iloc[] (Integer Positional)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs text-slate-400 block mb-1 font-mono",children:["Select Row: ",t==="loc"?`Label '${l[a].label}'`:`Position ${a}`]}),e.jsx("div",{className:"grid grid-cols-4 gap-2",children:l.map((n,s)=>e.jsx("button",{onClick:()=>f(s),className:`p-2 rounded-lg border text-xs font-mono transition ${a===s?"bg-teal-500/20 border-teal-400 text-teal-200 font-bold":"bg-slate-950 border-slate-800 text-slate-400"}`,children:t==="loc"?n.label:`Row ${s}`},n.label))})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-xs text-slate-400 block mb-1 font-mono",children:["Select Column: ",t==="loc"?`'${i}'`:`Position ${x[i]}`]}),e.jsx("div",{className:"grid grid-cols-4 gap-2",children:["name","city","math","sci"].map(n=>e.jsx("button",{onClick:()=>u(n),className:`p-2 rounded-lg border text-xs font-mono transition ${i===n?"bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold":"bg-slate-950 border-slate-800 text-slate-400"}`,children:t==="loc"?n:`Col ${x[n]}`},n))})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsx("h4",{className:"text-sm font-bold text-slate-200",children:"Interactive DataFrame Grid (Click any cell to target)"}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-slate-400 border-b border-slate-800",children:[e.jsx("th",{className:"p-2 text-slate-600 text-left",children:"Label Index"}),e.jsx("th",{className:"p-2 text-slate-600 text-left",children:"Pos"}),e.jsx("th",{className:"p-2 text-teal-400",children:"Name (0)"}),e.jsx("th",{className:"p-2 text-indigo-400",children:"City (1)"}),e.jsx("th",{className:"p-2 text-amber-400",children:"Math (2)"}),e.jsx("th",{className:"p-2 text-rose-400",children:"Sci (3)"})]})}),e.jsx("tbody",{children:l.map((n,s)=>e.jsxs("tr",{className:"border-b border-slate-900",children:[e.jsx("td",{className:"p-2.5 text-cyan-400 font-bold text-left",children:n.label}),e.jsx("td",{className:"p-2.5 text-slate-600 font-mono text-left",children:s}),["name","city","math","sci"].map(c=>{const S=a===s&&i===c;return e.jsx("td",{onClick:()=>{f(s),u(c)},className:`p-2.5 border cursor-pointer transition ${S?"bg-amber-500 border-amber-300 text-slate-950 font-black scale-105 shadow-lg shadow-amber-500/30":a===s?"bg-teal-950/40 border-teal-800/60 text-teal-200":"bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-600"}`,children:n[c]},c)})]},n.label))})]})})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-teal-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-teal-300 mb-3",children:"Syntax & Evaluation"}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-500 block text-[11px]",children:"Selected Target Cell:"}),e.jsx("span",{className:"text-emerald-400 text-sm font-bold",children:l[a][i]})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-500 block text-[11px]",children:"Equivalent Python Code:"}),e.jsx("span",{className:"text-amber-300 font-bold block mt-1",children:t==="loc"?`df.loc['${l[a].label}', '${i}']`:`df.iloc[${a}, ${x[i]}]`})]}),e.jsx("div",{className:"pt-2 border-t border-slate-800 text-[11px] text-slate-400",children:t==="loc"?"✓ loc uses explicit row and column labels.":"✓ iloc uses 0-indexed integer array coordinates."})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-teal-950/30 border border-teal-900/60 rounded-xl text-[11px] text-teal-200",children:["📌 Inclusivity Rule: Slices with ",e.jsx("code",{className:"text-white font-mono",children:"loc['A':'C']"})," include 'C'. Slices with ",e.jsx("code",{className:"text-white font-mono",children:"iloc[0:2]"})," stop before index 2!"]})]})]})]}),r==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:m.map(n=>e.jsxs("button",{onClick:()=>g(n.id),className:`p-4 rounded-xl border text-left transition-all ${p===n.id?"bg-teal-950/40 border-teal-500 shadow-lg shadow-teal-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30",children:n.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:n.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:n.summary})]},n.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:d.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:d.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Row Indexing Suite"})]}),e.jsx(y,{fileModule:d.code,title:d.fileName})]})]}),r==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(_,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"The #1 trap that catches beginner data scientists is confusing df.loc[] with df.iloc[]. Remember: loc is for Labels (and is endpoint inclusive), while iloc is for Integer positions (and is endpoint exclusive, just like standard Python range/slices). When updating values conditionally, always use df.loc[condition, 'col'] = value to prevent nasty SettingWithCopyWarnings!"}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(w,{content:C})]})]}),r==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(N,{questions:E})})]})};export{M as default};
