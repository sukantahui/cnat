import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as _}from"./PythonFileLoader-CiS1GfkF.js";import{F as y}from"./FAQTemplate-D_90hN4m.js";import{P as N}from"./PlainTextPrint-yt10TRX1.js";import{T as v}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const A=`"""\r
01_series_deep_dive_index_alignment.py\r
======================================\r
Topic: Pandas Series Deep Dive: Labeled Indexing & Automatic Alignment\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("PANDAS SERIES: LABELED 1D ARRAYS & AUTOMATIC INDEX ALIGNMENT")\r
    print("=" * 70)\r
\r
    # 1. Creating Series with explicit custom string indices\r
    # Exam 1 scores for students in Barrackpore\r
    exam1 = pd.Series(\r
        data=[85, 92, 65, 88],\r
        index=["Debangshu", "Susmita", "Swadeep", "Tuhina"],\r
        name="Exam1_Score"\r
    )\r
\r
    # Exam 2 scores (notice: different order and includes 'Sachin', excludes 'Swadeep')\r
    exam2 = pd.Series(\r
        data=[90, 88, 78, 85],\r
        index=["Susmita", "Debangshu", "Sachin", "Tuhina"],\r
        name="Exam2_Score"\r
    )\r
\r
    print("Exam 1 Series:\\n", exam1)\r
    print("\\nExam 2 Series:\\n", exam2)\r
\r
    # 2. Automatic Index Alignment during Arithmetic:\r
    # When adding two Series, Pandas automatically aligns elements by their INDEX LABELS\r
    # (not by coordinate position). Mismatched labels receive NaN (Outer Join behavior)!\r
    total_scores = exam1 + exam2\r
    print("\\n1. exam1 + exam2 (Automatic Label Alignment):\\n", total_scores)\r
\r
    # 3. Handling Missing Labels with .add(fill_value=0)\r
    safe_total = exam1.add(exam2, fill_value=0)\r
    print("\\n2. exam1.add(exam2, fill_value=0):\\n", safe_total)\r
\r
    # 4. Statistical Methods on Series\r
    print(f"\\n3. Statistical Reductions on Exam 1:")\r
    print(f"   Mean Score : {exam1.mean():.2f}")\r
    print(f"   Std Dev    : {exam1.std():.2f}")\r
    print(f"   Top Scorer : {exam1.idxmax()} ({exam1.max()} marks)")\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
02_dataframe_anatomy_axes_and_dtypes.py\r
=======================================\r
Topic: DataFrame Anatomy: Axes (Index & Columns), Dtypes, and Memory Profiling\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("DATAFRAME ANATOMY: AXES, DTYPES & MEMORY PROFILING")\r
    print("=" * 70)\r
\r
    # 1. Constructing a multi-type DataFrame\r
    df = pd.DataFrame({\r
        "Student_ID": [101, 102, 103, 104],\r
        "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina"],\r
        "Course": ["Machine Learning", "Data Science", "Machine Learning", "Deep Learning"],\r
        "Marks": [88.5, 95.0, 72.0, 91.5],\r
        "Passed": [True, True, True, True]\r
    }, index=["S1", "S2", "S3", "S4"])\r
\r
    print("1. DataFrame Structure:\\n", df)\r
\r
    # 2. Inspecting Axes\r
    print(f"\\n2. DataFrame Axes & Geometry:")\r
    print(f"   Shape (Rows, Cols) : {df.shape}")\r
    print(f"   Row Index (Axis 0) : {df.index.tolist()}")\r
    print(f"   Columns   (Axis 1) : {df.columns.tolist()}")\r
    print(f"   Dimensions (ndim)  : {df.ndim}")\r
    print(f"   Total Elements     : {df.size}")\r
\r
    # 3. Column Data Types (Dtypes)\r
    print("\\n3. Column Data Types (df.dtypes):")\r
    print(df.dtypes)\r
\r
    # 4. Deep Memory Usage Profiling\r
    # Measures exact byte allocation in RAM including object string pointers\r
    mem_usage = df.memory_usage(deep=True)\r
    print("\\n4. Memory Footprint per Column (Bytes):\\n", mem_usage)\r
    print(f"   Total Memory: {mem_usage.sum()} bytes")\r
\r
if __name__ == "__main__":\r
    main()\r
`,D=`"""\r
03_series_to_dataframe_conversions.py\r
=====================================\r
Topic: Series to DataFrame Conversions & Horizontal Concatenation\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("SERIES TO DATAFRAME CONVERSIONS & JOINING")\r
    print("=" * 70)\r
\r
    # 1. Single Series to 1-column DataFrame via .to_frame()\r
    marks_s = pd.Series([85, 92, 70], index=["Debangshu", "Susmita", "Swadeep"], name="Math_Score")\r
    df_single = marks_s.to_frame()\r
    print("1. Single Series converted via .to_frame():\\n", df_single)\r
    print("   Type:", type(df_single), "Shape:", df_single.shape)\r
\r
    # 2. Combining Multiple Series into a 2D DataFrame via pd.concat\r
    age_s = pd.Series([22, 23, 21], index=["Debangshu", "Susmita", "Swadeep"], name="Age")\r
    city_s = pd.Series(["Barrackpore", "Kolkata", "Ichapur"], index=["Debangshu", "Susmita", "Swadeep"], name="City")\r
\r
    df_combined = pd.concat([marks_s, age_s, city_s], axis=1)\r
    print("\\n2. Combined Multiple Series (pd.concat(axis=1)):\\n", df_combined)\r
\r
    # 3. Series extraction from DataFrame\r
    # Single bracket extracts 1D Series: df['Math_Score']\r
    # Double bracket extracts 2D DataFrame: df[['Math_Score']]\r
    extracted_series = df_combined["Math_Score"]\r
    extracted_df = df_combined[["Math_Score"]]\r
\r
    print("\\n3. Single vs Double Bracket Extraction:")\r
    print(f"   df['Math_Score']   -> Type: {type(extracted_series).__name__}, Shape: {extracted_series.shape}")\r
    print(f"   df[['Math_Score']] -> Type: {type(extracted_df).__name__}, Shape: {extracted_df.shape}")\r
\r
if __name__ == "__main__":\r
    main()\r
`,w="========================================================================\r\nTOPIC 2 NOTE: SERIES AND DATAFRAME CONCEPTS\r\nInstructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r\n========================================================================\r\n\r\n1. PANDAS SERIES DEEP DIVE\r\n--------------------------\r\n- Definition:\r\n  A 1-dimensional labeled homogeneous array capable of holding any data type.\r\n- Key Components:\r\n  * `s.values`: Returns the underlying 1D NumPy array buffer.\r\n  * `s.index`: An `Index` object containing row labels (can be RangeIndex, Int64Index, DatetimeIndex, Index of strings).\r\n  * `s.name`: An optional string label for the series (which becomes column name when converted to DataFrame).\r\n\r\n2. AUTOMATIC LABEL-BASED INDEX ALIGNMENT\r\n-----------------------------------------\r\n- The defining superpower of Pandas:\r\n  When performing arithmetic operations (e.g. `s1 + s2` or `s1 * s2`), elements are matched by their INDEX LABELS, NOT their coordinate positions.\r\n- Missing labels:\r\n  If a label exists in `s1` but not in `s2`, the union (Outer Join) result for that key becomes `NaN` (Not a Number).\r\n- Safe addition:\r\n  Use `s1.add(s2, fill_value=0)` to treat missing keys as 0 instead of propagating NaNs.\r\n\r\n3. PANDAS DATAFRAME ARCHITECTURE\r\n---------------------------------\r\n- A 2D labeled tabular data structure where:\r\n  * Rows represent observations/samples (Axis 0).\r\n  * Columns represent variables/features (Axis 1).\r\n- Single Bracket vs Double Bracket Indexing:\r\n  * `df['col']`: Returns a 1D `pd.Series`.\r\n  * `df[['col']]`: Returns a 2D `pd.DataFrame` containing a single column.\r\n  * `df[['col1', 'col2']]`: Returns a 2D `pd.DataFrame` subset.\r\n\r\n4. MEMORY MANAGEMENT\r\n---------------------\r\n- To inspect true RAM consumption in bytes:\r\n  `df.memory_usage(deep=True)`\r\n- High cardinality string `object` columns store pointers; converting to `category` dtype can reduce memory consumption by 80-90% on large datasets.\r\n",T=[{id:1,question:"Given `s1 = pd.Series([10, 20], index=['A', 'B'])` and `s2 = pd.Series([30, 40], index=['B', 'C'])`, what is the result of `s1 + s2`?",options:["A Series with index ['A', 'B', 'C'] and values [NaN, 50.0, NaN]","A Series with values [40, 60]","A Series with only index ['B'] and value 50.0","A ValueError due to mismatched index lengths"],correctAnswer:0,explanation:"Pandas automatically performs an outer join on the indices. Since 'A' is only in s1 and 'C' is only in s2, their sums evaluate to NaN. 'B' exists in both, producing 20 + 30 = 50.0."},{id:2,question:"What is the return type difference between `df['Score']` and `df[['Score']]` for a DataFrame `df`?",options:["`df['Score']` returns a 1D Pandas Series, while `df[['Score']]` returns a 2D Pandas DataFrame.","Both return identical 1D Pandas Series.","`df['Score']` returns a NumPy array, while `df[['Score']]` returns a list.","`df[['Score']]` modifies the column in place."],correctAnswer:0,explanation:"Passing a single string extracts the column as a 1D Series. Passing a list of strings (even with a single element `['Score']`) preserves the 2D DataFrame structure."},{id:3,question:"How can you convert a 1D Pandas Series `s` named 'Revenue' into a single-column 2D DataFrame?",options:["s.to_frame()","pd.convert(s)","s.to_matrix()","s.flatten()"],correctAnswer:0,explanation:"`s.to_frame()` constructs a 2D DataFrame containing the series data with its name as the column header."},{id:4,question:"What does `df.shape` return for a DataFrame with 100 rows and 5 columns?",options:["(100, 5) — a tuple of (n_rows, n_columns)","500","[100, 5]","{'rows': 100, 'cols': 5}"],correctAnswer:0,explanation:"`df.shape` returns a Python tuple containing the dimensionality `(number_of_rows, number_of_columns)`."},{id:5,question:"Why does `df.memory_usage(deep=True)` report higher memory consumption than `df.memory_usage(deep=False)` for datasets with text columns?",options:["`deep=True` inspects the actual length and contents of Python string objects in memory rather than just counting the memory of 8-byte object memory pointers.","`deep=True` creates duplicate copies of the DataFrame.","`deep=True` compresses the data on disk.","`deep=True` calculates GPU RAM."],correctAnswer:0,explanation:"By default (`deep=False`), memory_usage only reports the fixed memory of references/pointers. Setting `deep=True` performs deep introspection of heap-allocated Python string objects."}],d=[{id:"part1",fileName:"01_series_deep_dive_index_alignment.py",title:"1. Series & Automatic Index Alignment",badge:"Index Alignment",code:A,summary:"Demonstrates label-based arithmetic alignment, automatic NaN generation on union mismatches, and safe addition with fill_value=0."},{id:"part2",fileName:"02_dataframe_anatomy_axes_and_dtypes.py",title:"2. DataFrame Anatomy & Memory Usage",badge:"Axes & Dtypes",code:j,summary:"Explores df.index (Axis 0), df.columns (Axis 1), heterogeneous column dtypes, and deep memory profiling in RAM."},{id:"part3",fileName:"03_series_to_dataframe_conversions.py",title:"3. Series to DataFrame Conversions",badge:"Conversions & Concat",code:D,summary:"Converts Series via .to_frame(), concatenates multiple Series along columns (axis=1), and explores single vs double bracket indexing."}],c=[{label:"Debangshu",val:85},{label:"Susmita",val:92},{label:"Swadeep",val:65},{label:"Tuhina",val:88}],m=[{label:"Susmita",val:90},{label:"Debangshu",val:88},{label:"Sachin",val:78},{label:"Tuhina",val:85}],O=()=>{const[n,f]=l.useState("alignment_simulator"),[x,b]=l.useState("part1"),[t,p]=l.useState("standard"),r=d.find(a=>a.id===x)||d[0],u=Array.from(new Set([...c.map(a=>a.label),...m.map(a=>a.label)])),g=Object.fromEntries(c.map(a=>[a.label,a.val])),S=Object.fromEntries(m.map(a=>[a.label,a.val]));return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-teal-900/60 via-slate-900 to-indigo-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Module 009_002 • Pandas Essentials"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/40",children:"Topic 2 • Series & DataFrame Concepts"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-200 via-cyan-100 to-indigo-300 bg-clip-text text-transparent",children:"Series & DataFrame Anatomy"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Master the internal mechanics of 1D ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pd.Series"})," and 2D ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"pd.DataFrame"}),": index-label alignment, handling NaN propagation with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"fill_value"}),", single vs double bracket slicing, and deep memory diagnostics."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"alignment_simulator",label:"Automatic Index Alignment Simulator",icon:"🧬"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(a=>e.jsxs("button",{onClick:()=>f(a.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${n===a.id?"bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:a.icon}),a.label]},a.id))})]}),n==="alignment_simulator"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-slate-200",children:"Operation Mode:"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Toggle standard arithmetic vs fill_value handling"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>p("standard"),className:`px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition ${t==="standard"?"bg-teal-500 border-teal-400 text-slate-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:"Series A + Series B (Default)"}),e.jsx("button",{onClick:()=>p("fill_zero"),className:`px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition ${t==="fill_zero"?"bg-teal-500 border-teal-400 text-slate-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:"Series A.add(Series B, fill_value=0)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsx("h4",{className:"text-sm font-bold text-teal-300",children:"Series A (Exam 1)"}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"len=4"})]}),e.jsx("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:c.map(a=>e.jsxs("div",{className:"flex justify-between p-2 bg-slate-900/60 rounded border border-slate-800",children:[e.jsx("span",{className:"text-cyan-300",children:a.label}),e.jsx("span",{className:"text-teal-300 font-bold",children:a.val})]},a.label))})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsx("h4",{className:"text-sm font-bold text-indigo-300",children:"Series B (Exam 2)"}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"len=4"})]}),e.jsx("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:m.map(a=>e.jsxs("div",{className:"flex justify-between p-2 bg-slate-900/60 rounded border border-slate-800",children:[e.jsx("span",{className:"text-cyan-300",children:a.label}),e.jsx("span",{className:"text-indigo-300 font-bold",children:a.val})]},a.label))})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-teal-500/40 rounded-2xl p-5 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsx("h4",{className:"text-sm font-bold text-amber-300",children:t==="standard"?"Result (A + B)":"Result (A.add(B, fill=0))"}),e.jsxs("span",{className:"text-xs font-mono text-amber-400",children:["Union len=",u.length]})]}),e.jsx("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:u.map(a=>{const s=g[a],i=S[a];let o="NaN",h=!1;return t==="standard"?s!==void 0&&i!==void 0?o=(s+i).toFixed(1):h=!0:o=((s??0)+(i??0)).toFixed(1),e.jsxs("div",{className:`flex justify-between p-2 rounded border transition ${h?"bg-rose-950/40 border-rose-800 text-rose-300 font-bold":"bg-emerald-950/30 border-emerald-800 text-emerald-200 font-bold"}`,children:[e.jsx("span",{className:"text-slate-200",children:a}),e.jsx("span",{children:o})]},a)})})]}),e.jsxs("div",{className:"mt-4 text-[11px] text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800",children:["🔍 Notice: ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Sachin"})," only exist in one series. Without ",e.jsx("code",{className:"text-teal-300 font-mono",children:"fill_value=0"}),", the outer join returns ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NaN"}),"!"]})]})]})]}),n==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:d.map(a=>e.jsxs("button",{onClick:()=>b(a.id),className:`p-4 rounded-xl border text-left transition-all ${x===a.id?"bg-teal-950/40 border-teal-500 shadow-lg shadow-teal-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30",children:a.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:a.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:a.summary})]},a.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:r.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:r.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Series & DataFrame Suite"})]}),e.jsx(_,{fileModule:r.code,title:r.fileName})]})]}),n==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(v,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"The fundamental superpower that makes Pandas so reliable for data science is automatic label alignment. When joining, subtracting, or aggregating datasets, Pandas matches rows by their explicit index keys, preventing silent mismatch bugs that often plague raw Python lists and coordinate-based arrays."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(N,{content:w})]})]}),n==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(y,{questions:T})})]})};export{O as default};
