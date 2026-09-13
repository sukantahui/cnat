import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as h}from"./PythonFileLoader-DUNJ9gwR.js";import{F as f}from"./FAQTemplate-D_90hN4m.js";import{P as g}from"./PlainTextPrint-yt10TRX1.js";import{T as b}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const S=`"""\r
01_dict_of_lists_creation.py\r
============================\r
Topic: Creating Pandas DataFrames from Dictionaries of Lists / Arrays\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("CREATING DATAFRAMES FROM DICTIONARY OF LISTS")\r
    print("=" * 70)\r
\r
    # 1. Standard Dictionary of Equal-Length Lists\r
    # Keys become Column Headers; Lists become Column Data Series\r
    student_dict = {\r
        "Roll_No": [101, 102, 103, 104],\r
        "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina"],\r
        "City": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati"],\r
        "ML_Score": [88, 95, 72, 91]\r
    }\r
\r
    # Default 0-indexed RangeIndex\r
    df_default = pd.DataFrame(student_dict)\r
    print("1. DataFrame with Default RangeIndex (0, 1, 2, 3):\\n", df_default)\r
\r
    # 2. Specifying Custom Row Index\r
    df_custom = pd.DataFrame(\r
        data=student_dict,\r
        index=["Student_A", "Student_B", "Student_C", "Student_D"]\r
    )\r
    print("\\n2. DataFrame with Custom String Index:\\n", df_custom)\r
\r
    # 3. Handling Unequal Length List Error:\r
    print("\\n3. Testing Unequal List Lengths (Common Pitfall):")\r
    invalid_dict = {\r
        "A": [1, 2, 3],\r
        "B": [10, 20]  # Length 2 vs Length 3!\r
    }\r
    try:\r
        df_invalid = pd.DataFrame(invalid_dict)\r
    except ValueError as e:\r
        print("  [ERROR CAUGHT]:", e)\r
        print("  -> Rule: All arrays/lists in a dict of lists MUST have identical length!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`"""\r
02_list_of_dicts_record_format.py\r
=================================\r
Topic: Creating DataFrames from List of Dictionaries (JSON / MongoDB Record Format)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("CREATING DATAFRAMES FROM LIST OF DICTIONARIES (RECORDS)")\r
    print("=" * 70)\r
\r
    # In modern REST APIs and NoSQL databases (MongoDB), data arrives as a list of JSON records.\r
    # Notice: Sachin is missing 'Grade', and Swadeep has an extra key 'Scholarship'.\r
    records = [\r
        {"Name": "Debangshu", "Score": 88, "Grade": "A"},\r
        {"Name": "Susmita",   "Score": 95, "Grade": "A+"},\r
        {"Name": "Swadeep",   "Score": 72, "Grade": "B", "Scholarship": "Half"},\r
        {"Name": "Sachin",    "Score": 65}  # Missing 'Grade'\r
    ]\r
\r
    print("Raw Input Records (List of Dicts):")\r
    for r in records:\r
        print(" ", r)\r
\r
    # 1. Ingesting directly into DataFrame\r
    # Pandas automatically unions all keys across all dicts and fills missing keys with NaN!\r
    df_records = pd.DataFrame(records)\r
    print("\\n1. Resulting DataFrame from JSON Records:\\n", df_records)\r
    print(f"\\n   Shape: {df_records.shape} (4 rows, 4 columns)")\r
    print("   Data Types:\\n", df_records.dtypes)\r
\r
if __name__ == "__main__":\r
    main()\r
`,y=`"""\r
03_dict_of_series_and_orient_options.py\r
=======================================\r
Topic: from_dict Orientations ('columns' vs 'index') & Dict of Series\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("DATAFRAME FROM_DICT ORIENTATIONS & DICT OF SERIES")\r
    print("=" * 70)\r
\r
    # 1. Dictionary of Series with Unequal and Mismatched Indices\r
    # Unlike dict of lists, Series in a dict DO NOT need to be equal length!\r
    # Pandas aligns them automatically by their internal Series index.\r
    s1 = pd.Series([85, 92, 65], index=["Debangshu", "Susmita", "Swadeep"])\r
    s2 = pd.Series([90, 88, 78, 85], index=["Susmita", "Debangshu", "Sachin", "Tuhina"])\r
\r
    df_series = pd.DataFrame({"Math": s1, "Science": s2})\r
    print("1. DataFrame from Dict of Series (Automatic Index Union):\\n", df_series)\r
\r
    # 2. pd.DataFrame.from_dict with Orientations\r
    nested_dict = {\r
        "Debangshu": {"Age": 22, "Score": 88, "Passed": True},\r
        "Susmita":   {"Age": 23, "Score": 95, "Passed": True},\r
        "Swadeep":   {"Age": 21, "Score": 72, "Passed": True}\r
    }\r
\r
    # Default orient='columns': Outer keys become Column Names\r
    df_orient_cols = pd.DataFrame.from_dict(nested_dict, orient='columns')\r
    print("\\n2. pd.DataFrame.from_dict(orient='columns'):\\n", df_orient_cols)\r
\r
    # orient='index': Outer keys become Row Indices (Often preferred for entity records!)\r
    df_orient_idx = pd.DataFrame.from_dict(nested_dict, orient='index')\r
    print("\\n3. pd.DataFrame.from_dict(orient='index'):\\n", df_orient_idx)\r
\r
if __name__ == "__main__":\r
    main()\r
`,_=`========================================================================\r
TOPIC 3 NOTE: CREATING A DATAFRAME FROM A DICTIONARY\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. PATTERN 1: DICTIONARY OF LISTS / ARRAYS (Columnar Format)\r
------------------------------------------------------------\r
- Structure:\r
  \`data = {'Column1': [val1, val2], 'Column2': [val3, val4]}\`\r
- Core Rule:\r
  All lists MUST have the EXACT SAME LENGTH, otherwise Pandas raises \`ValueError: All arrays must be of the same length\`.\r
- Row Index:\r
  Defaults to \`RangeIndex(0, 1, 2...)\`. Can be overridden via \`pd.DataFrame(data, index=['row1', 'row2'])\`.\r
\r
2. PATTERN 2: LIST OF DICTIONARIES (Record / JSON Format)\r
---------------------------------------------------------\r
- Structure:\r
  \`records = [{'col1': 10, 'col2': 20}, {'col1': 30, 'col3': 40}]\`\r
- Advantages:\r
  Matches standard REST API JSON responses and MongoDB document queries.\r
  Automatically unions all unique keys across records. Missing keys in any dictionary are seamlessly populated with \`NaN\`.\r
\r
3. PATTERN 3: DICTIONARY OF PANDAS SERIES\r
-----------------------------------------\r
- Structure:\r
  \`data = {'ColA': pd.Series(...), 'ColB': pd.Series(...)}\`\r
- Advantage:\r
  Series DO NOT need to be equal in length or have the same index order. Pandas performs an automatic outer join on their respective index labels.\r
\r
4. PATTERN 4: NESTED DICTIONARIES & \`orient\` PARAMETER\r
-------------------------------------------------------\r
- \`pd.DataFrame.from_dict(nested_dict, orient='columns')\`:\r
  Outer keys -> Column Headers, Inner keys -> Row Index.\r
- \`pd.DataFrame.from_dict(nested_dict, orient='index')\`:\r
  Outer keys -> Row Index, Inner keys -> Column Headers.\r
`,D=[{id:1,question:"What happens if you attempt to create a DataFrame from a dictionary of lists where one list has 4 elements and another has 3 elements (`pd.DataFrame({'A': [1,2,3,4], 'B': [10,20,30]})`)?",options:["Pandas raises a `ValueError: All arrays must be of the same length`.","Pandas automatically fills the missing element with 0.","Pandas automatically drops the 4th element of list A.","Pandas creates a 1D Series instead."],correctAnswer:0,explanation:"When constructing a DataFrame from a dictionary of lists or 1D NumPy arrays, all lists must be of identical length; otherwise a ValueError is raised."},{id:2,question:"Why is a list of dictionaries (`records = [{'A': 1, 'B': 2}, {'A': 3, 'C': 4}]`) more flexible than a dictionary of lists when ingesting irregular JSON API data?",options:["Because Pandas unions all unique keys across all records and automatically fills missing keys with NaN without raising length mismatch errors.","Because a list of dictionaries runs on GPU.","Because it does not require memory in RAM.","Because it encrypts the dataset."],correctAnswer:0,explanation:"List of dictionaries format (record orientation) gracefully handles missing fields across JSON objects by taking the union of all keys and inserting NaNs for missing keys."},{id:3,question:"Given a nested dictionary `data = {'Debangshu': {'Age': 22, 'Score': 85}, 'Susmita': {'Age': 23, 'Score': 92}}`, what does `pd.DataFrame.from_dict(data, orient='index')` produce?",options:["A DataFrame where outer keys ('Debangshu', 'Susmita') become the Row Index, and inner keys ('Age', 'Score') become the Column Headers.","A DataFrame where outer keys become Column Headers.","A 1D Series.","A 3D Tensor."],correctAnswer:0,explanation:"`orient='index'` instructs Pandas to treat the outer dictionary keys as the row index of the DataFrame."},{id:4,question:"When creating a DataFrame from a dictionary of Pandas Series (`pd.DataFrame({'ColA': s1, 'ColB': s2})`), do the Series need to be of equal length?",options:["No, Pandas will align elements by their index labels and insert NaN for any non-overlapping indices.","Yes, they must have the exact same length and same order.","No, but they must only contain positive integers.","Yes, otherwise Pandas crashes."],correctAnswer:0,explanation:"Because Pandas Series have explicit index labels, Pandas performs an automatic union (outer join) on their indices when constructing a DataFrame, safely populating missing values with NaN."},{id:5,question:"How can you specify custom column order when creating a DataFrame from a dictionary?",options:["`pd.DataFrame(dict_data, columns=['Col3', 'Col1', 'Col2'])`","`pd.DataFrame(dict_data).sort_columns()`","`pd.set_column_order(dict_data)`","`dict_data.reorder_keys()`"],correctAnswer:0,explanation:"The `columns` parameter in `pd.DataFrame(data, columns=[...])` allows you to explicitly specify the column sequence and subset from the source dictionary."}],o=[{id:"part1",fileName:"01_dict_of_lists_creation.py",title:"1. Dictionary of Lists (Columnar)",badge:"Dict of Lists",code:S,summary:"Creates DataFrames from key-list mappings, defines custom row indices, and diagnoses unequal-length ValueError traps."},{id:"part2",fileName:"02_list_of_dicts_record_format.py",title:"2. List of Dictionaries (JSON Records)",badge:"JSON Records",code:N,summary:"Ingests irregular JSON-style dictionary records, automatically unioning keys and inserting NaNs for missing attributes."},{id:"part3",fileName:"03_dict_of_series_and_orient_options.py",title:"3. from_dict Orientations & Dict of Series",badge:"from_dict & Orient",code:y,summary:"Demonstrates orient='index' vs orient='columns' and explores automatic index label alignment with dict of Series."}],w={dict_of_lists:{title:"1. Dictionary of Lists (Columnar Format)",desc:"Keys become column headers; values are equal-length lists.",codePreview:`student_dict = {
  "Name": ["Debangshu", "Susmita", "Swadeep"],
  "City": ["Barrackpore", "Shyamnagar", "Ichapur"],
  "Score": [88, 95, 72]
}
df = pd.DataFrame(student_dict)`,headers:["Index","Name","City","Score"],rows:[[0,"Debangshu","Barrackpore",88],[1,"Susmita","Shyamnagar",95],[2,"Swadeep","Ichapur",72]]},list_of_dicts:{title:"2. List of Dictionaries (JSON / Record Format)",desc:"Each dictionary represents a row observation; missing keys populate with NaN automatically.",codePreview:`records = [
  {"Name": "Debangshu", "Score": 88, "Grade": "A"},
  {"Name": "Susmita", "Score": 95, "Grade": "A+"},
  {"Name": "Swadeep", "Score": 72, "Scholarship": "Half"},
  {"Name": "Sachin", "Score": 65}
]
df = pd.DataFrame(records)`,headers:["Index","Name","Score","Grade","Scholarship"],rows:[[0,"Debangshu",88,"A","NaN"],[1,"Susmita",95,"A+","NaN"],[2,"Swadeep",72,"B","Half"],[3,"Sachin",65,"NaN","NaN"]]},orient_index:{title:"3. Nested Dict with orient='index'",desc:"Outer keys become the row index; inner keys become columns.",codePreview:`data = {
  "Debangshu": {"Age": 22, "Score": 88},
  "Susmita": {"Age": 23, "Score": 95},
  "Swadeep": {"Age": 21, "Score": 72}
}
df = pd.DataFrame.from_dict(data, orient='index')`,headers:["Index (Outer Key)","Age","Score"],rows:[["Debangshu",22,88],["Susmita",23,95],["Swadeep",21,72]]}},O=()=>{const[r,u]=i.useState("interactive_constructor"),[d,x]=i.useState("part1"),[l,p]=i.useState("dict_of_lists"),n=o.find(t=>t.id===d)||o[0],a=w[l];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-teal-900/60 via-slate-900 to-indigo-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Module 009_002 • Pandas Essentials"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/40",children:"Topic 3 • DataFrame Construction"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-200 via-cyan-100 to-indigo-300 bg-clip-text text-transparent",children:"Creating a DataFrame from a Dictionary"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Master Python dictionary data ingestion: Columnar Dictionaries of Lists, JSON Record Lists with automatic ",e.jsx("code",{className:"text-amber-300 font-mono",children:"NaN"})," handling, Dict of Series with index alignment, and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"orient='index'"})," transformations."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"interactive_constructor",label:"Interactive DataFrame Constructor",icon:"🏗️"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(t=>e.jsxs("button",{onClick:()=>u(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r===t.id?"bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:t.icon}),t.label]},t.id))})]}),r==="interactive_constructor"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsx("h3",{className:"text-xs font-bold text-teal-300 uppercase tracking-wider mb-3",children:"Select Dictionary Input Pattern:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"dict_of_lists",title:"1. Dict of Lists",badge:"Columnar Format"},{id:"list_of_dicts",title:"2. List of Dicts",badge:"JSON / Records Format"},{id:"orient_index",title:"3. from_dict (orient='index')",badge:"Nested Dict"}].map(t=>e.jsxs("button",{onClick:()=>p(t.id),className:`p-3.5 rounded-xl border text-left transition ${l===t.id?"bg-teal-500/20 border-teal-400 text-teal-200 shadow-md shadow-teal-500/10":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-slate-200",children:t.title}),e.jsx("div",{className:"text-[10px] text-slate-400 mt-1",children:t.badge})]},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3",children:[e.jsx("h4",{className:"text-base font-bold text-slate-200",children:a.title}),e.jsx("p",{className:"text-xs text-slate-400",children:a.desc}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 whitespace-pre overflow-x-auto",children:a.codePreview})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-teal-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h4",{className:"text-base font-bold text-teal-300",children:"Constructed DataFrame Output"}),e.jsxs("span",{className:"text-xs px-2.5 py-1 bg-slate-800 text-slate-300 font-mono rounded",children:["Shape: (",a.rows.length,", ",a.headers.length-1,")"]})]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsx("tr",{className:"text-slate-400 border-b border-slate-800",children:a.headers.map((t,s)=>e.jsx("th",{className:`p-2 ${s===0?"text-slate-600 text-left":"text-teal-400 font-bold"}`,children:t},s))})}),e.jsx("tbody",{children:a.rows.map((t,s)=>e.jsx("tr",{className:"border-b border-slate-900",children:t.map((c,m)=>e.jsx("td",{className:`p-2.5 ${m===0?"text-slate-500 font-mono text-left":c==="NaN"?"text-rose-400 font-bold bg-rose-950/20":"text-slate-200 bg-slate-900/40"}`,children:c},m))},s))})]})})]}),e.jsx("div",{className:"mt-4 p-3 bg-teal-950/30 border border-teal-900/60 rounded-xl text-xs text-teal-200",children:"💡 Notice how Pandas automatically maps dictionary keys to columns and preserves structure seamlessly!"})]})]})]}),r==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:o.map(t=>e.jsxs("button",{onClick:()=>x(t.id),className:`p-4 rounded-xl border text-left transition-all ${d===t.id?"bg-teal-950/40 border-teal-500 shadow-lg shadow-teal-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30",children:t.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:t.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:n.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:n.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"DataFrame Constructor Suite"})]}),e.jsx(h,{fileModule:n.code,title:n.fileName})]})]}),r==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(b,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"In real-world data engineering pipelines, data rarely arrives in perfect CSV tables on day one. It often comes as raw JSON payloads from REST APIs or database document queries. Knowing how to convert both Columnar (Dict of Lists) and Record (List of Dicts) formats directly into clean Pandas DataFrames is a fundamental daily skill."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(g,{content:_})]})]}),r==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(f,{questions:D})})]})};export{O as default};
