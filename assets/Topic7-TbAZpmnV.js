import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as g}from"./PythonFileLoader-DUNJ9gwR.js";import{F as _}from"./FAQTemplate-D_90hN4m.js";import{P as S}from"./PlainTextPrint-yt10TRX1.js";import{T as N}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const y=`"""\r
01_single_and_multi_column_selection.py\r
=======================================\r
Topic: Column Selection in Pandas: Single Series vs Multi-Column DataFrames\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("PANDAS COLUMN SELECTION: SINGLE VS MULTI-COLUMN")\r
    print("=" * 70)\r
\r
    # 5 students from Barrackpore machine learning batch\r
    df = pd.DataFrame({\r
        "RollNo": [101, 102, 103, 104, 105],\r
        "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin"],\r
        "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata"],\r
        "Math": [85, 92, 65, 88, 78],\r
        "Science": [90, 95, 70, 85, 80],\r
        "Passed": [True, True, True, True, True]\r
    })\r
\r
    print("Master DataFrame:\\n", df)\r
\r
    # 1. Single Bracket -> Returns 1D Series\r
    s_math = df["Math"]\r
    print("\\n1. Single Bracket df['Math']:")\r
    print(f"   Type: {type(s_math).__name__}, Shape: {s_math.shape}")\r
    print(s_math)\r
\r
    # 2. Double Bracket -> Returns 2D DataFrame (Single Column)\r
    df_math = df[["Math"]]\r
    print("\\n2. Double Bracket df[['Math']]:")\r
    print(f"   Type: {type(df_math).__name__}, Shape: {df_math.shape}")\r
    print(df_math)\r
\r
    # 3. Multi-Column Feature Matrix Extraction: df[['Name', 'Math', 'Science']]\r
    feature_subset = df[["Name", "Math", "Science"]]\r
    print("\\n3. Multi-Column Feature Subset df[['Name', 'Math', 'Science']]:")\r
    print(f"   Shape: {feature_subset.shape}")\r
    print(feature_subset)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
02_dot_notation_vs_bracket_notation.py\r
======================================\r
Topic: Dot Notation (df.col) vs Bracket Notation (df['col']) & Name Collisions\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("DOT NOTATION VS BRACKET NOTATION & METHOD NAME COLLISIONS")\r
    print("=" * 70)\r
\r
    # DataFrame with tricky column names (spaces, method collisions)\r
    df = pd.DataFrame({\r
        "Student Name": ["Debangshu", "Susmita", "Swadeep"],\r
        "count": [10, 20, 30],         # Collides with df.count() method!\r
        "shape": ["2D", "2D", "2D"],   # Collides with df.shape attribute!\r
        "Score_INR": [8500, 9200, 6500]\r
    })\r
\r
    print("Master DataFrame:\\n", df)\r
\r
    # 1. Accessing Column with Spaces: Bracket Notation ONLY\r
    # df.Student Name -> SyntaxError!\r
    print("\\n1. Column with Spaces (df['Student Name']):")\r
    print(df["Student Name"])\r
\r
    # 2. Method Collision Trap (e.g. column named 'count'):\r
    # df.count -> Returns the bound method <bound method DataFrame.count ...>, NOT the column!\r
    print("\\n2. Method Name Collision Trap ('count'):")\r
    print("   df.count (WRONG - returns method pointer):", type(df.count))\r
    print("   df['count'] (CORRECT - returns Series):\\n", df["count"])\r
\r
    # 3. Dynamic Column Selection via Variables\r
    target_var = "Score_INR"\r
    # df.target_var -> Looks for literal column named 'target_var' and fails!\r
    print(f"\\n3. Dynamic Variable Access (df[target_var]):\\n", df[target_var])\r
\r
    print("\\n-> Best Practice Rule: ALWAYS use Bracket Notation (df['col']) in production code!")\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`"""\r
03_select_dtypes_and_filter_regex.py\r
====================================\r
Topic: Programmatic Column Filtering: select_dtypes() and filter(like/regex)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("PROGRAMMATIC COLUMN SELECTION: select_dtypes() & filter()")\r
    print("=" * 70)\r
\r
    # Complex ML Tabular DataFrame with mixed data types\r
    df = pd.DataFrame({\r
        "StudentID": [101, 102, 103],\r
        "Student_Name": ["Debangshu", "Susmita", "Swadeep"],\r
        "City_Name": ["Barrackpore", "Shyamnagar", "Ichapur"],\r
        "Exam_Math_Score": [85.5, 92.0, 65.0],\r
        "Exam_Sci_Score": [90.0, 95.5, 70.0],\r
        "Is_Merit": [True, True, False]\r
    })\r
\r
    print("Master DataFrame:\\n", df)\r
\r
    # 1. df.select_dtypes(include='number') -> Selects all int/float columns for ML model\r
    num_df = df.select_dtypes(include="number")\r
    print("\\n1. All Numeric Columns (df.select_dtypes(include='number')):\\n", num_df)\r
\r
    # 2. df.select_dtypes(include='object') -> Selects all string columns for Label/OneHot Encoding\r
    cat_df = df.select_dtypes(include="object")\r
    print("\\n2. All Categorical / Text Columns (df.select_dtypes(include='object')):\\n", cat_df)\r
\r
    # 3. df.filter(like='Score') -> Matches substring 'Score'\r
    score_df = df.filter(like="Score")\r
    print("\\n3. Columns containing 'Score' (df.filter(like='Score')):\\n", score_df)\r
\r
    # 4. df.filter(regex=r'_Name$') -> Matches column names ending with '_Name'\r
    name_df = df.filter(regex=r"_Name$")\r
    print("\\n4. Columns ending with '_Name' (df.filter(regex=r'_Name$')):\\n", name_df)\r
\r
if __name__ == "__main__":\r
    main()\r
`,C="========================================================================\r\nTOPIC 7 NOTE: SELECTING COLUMNS IN PANDAS\r\nInstructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r\n========================================================================\r\n\r\n1. SINGLE VS MULTI-COLUMN EXTRACTION\r\n------------------------------------\r\n- Single Bracket `df['Column']`:\r\n  Returns a 1D `pd.Series`. Use when extracting a single target vector $y$ for machine learning.\r\n- Double Bracket `df[['Column']]`:\r\n  Returns a 2D `pd.DataFrame` containing a single column.\r\n- Multiple Columns `df[['Col1', 'Col2', 'Col3']]`:\r\n  Returns a 2D `pd.DataFrame` containing the specified subset of columns in the exact order requested. Use when preparing feature matrix $X$.\r\n\r\n2. DOT NOTATION VS BRACKET NOTATION\r\n------------------------------------\r\n- Dot Notation (`df.column_name`):\r\n  * Allowed only when column names are valid Python identifiers (no spaces, no symbols).\r\n  * Dangerous Traps:\r\n    1. Method Name Collisions: If a column is named `count`, `shape`, `min`, `max`, or `index`, `df.count` accesses the DataFrame method, NOT the column data!\r\n    2. Dynamic Access: Cannot access columns stored in Python variables (`df.var_name` searches for a literal column named 'var_name').\r\n    3. Creating New Columns: `df.new_col = ...` fails to create a new column on the DataFrame.\r\n- Golden Rule: Always use Bracket Notation (`df['column_name']`) in production code.\r\n\r\n3. PROGRAMMATIC COLUMN FILTERING\r\n---------------------------------\r\n- By Data Type (`df.select_dtypes`):\r\n  * `df.select_dtypes(include='number')`: Selects `int64`, `float64`, etc.\r\n  * `df.select_dtypes(include=['object', 'category'])`: Selects text and categorical features for encoding.\r\n- By Name Patterns (`df.filter`):\r\n  * Substring match: `df.filter(like='Price')`.\r\n  * Regular Expression: `df.filter(regex=r'^Sales_2026')`.\r\n",T=[{id:1,question:"If a DataFrame has a column named 'shape', why does accessing it as `df.shape` fail to return the column data Series?",options:["Because `df.shape` is a built-in DataFrame attribute that returns a tuple of (n_rows, n_cols), which shadows the column name.","Because 'shape' is a forbidden column name in Pandas.","Because dot notation only works on numeric data.","Because Pandas requires uppercase column names."],correctAnswer:0,explanation:"Built-in DataFrame methods and attributes (like `shape`, `count`, `values`, `index`) take precedence over column names when using dot notation. You must use `df['shape']`."},{id:2,question:"How can you select all numerical columns (int64, float64) from a DataFrame `df` containing 50 mixed columns to pass into a Scikit-Learn scaler?",options:["`df.select_dtypes(include='number')` or `df.select_dtypes(include=['int64', 'float64'])`","`df.get_numbers()`","`df.filter(dtype='numeric')`","`df.numeric_columns()`"],correctAnswer:0,explanation:"`df.select_dtypes(include='number')` automatically subsets all integer and floating-point columns without manual column name listing."},{id:3,question:"What is the return type of `df[['Age', 'Salary']]` versus `df['Salary']`?",options:["`df[['Age', 'Salary']]` returns a 2D DataFrame, while `df['Salary']` returns a 1D Series.","Both return 2D DataFrames.","Both return 1D Series.","`df[['Age', 'Salary']]` returns a Python list."],correctAnswer:0,explanation:"Passing a list of column names returns a 2D DataFrame subset. Passing a single string key returns a 1D Series."},{id:4,question:"Which Pandas method allows selecting columns matching a specific regular expression pattern (e.g. all columns ending in `_Score`)?",options:["`df.filter(regex=r'_Score$', axis=1)`","`df.match('_Score')`","`df.find_columns('_Score')`","`df.search('_Score')`"],correctAnswer:0,explanation:"`df.filter(regex=...)` filters column labels along `axis=1` according to regular expression pattern rules."},{id:5,question:"Why does `target_col = 'Price'; df.target_col` raise an AttributeError in Python?",options:["Because dot notation searches for a literal column named `'target_col'`, rather than evaluating the variable's value `'Price'`. Use `df[target_col]` instead.","Because variable names cannot start with lowercase 't'.","Because 'Price' is a reserved keyword in Pandas.","Because Pandas does not support variables."],correctAnswer:0,explanation:"Python dot notation cannot resolve variable names dynamically. To access a column using a variable containing the column name string, you must use bracket notation: `df[target_col]`."}],i=[{id:"part1",fileName:"01_single_and_multi_column_selection.py",title:"1. Single vs Multi-Column Selection",badge:"Bracket Notation",code:y,summary:"Contrasts 1D Series extraction (df['col']) with 2D DataFrame multi-column feature subsets (df[['col1', 'col2']])."},{id:"part2",fileName:"02_dot_notation_vs_bracket_notation.py",title:"2. Dot vs Bracket Notation Traps",badge:"Method Collisions",code:j,summary:"Explains syntax pitfalls with spaces, method collisions (df.count vs df['count']), and dynamic variable lookups."},{id:"part3",fileName:"03_select_dtypes_and_filter_regex.py",title:"3. select_dtypes & Regex filter()",badge:"select_dtypes & regex",code:v,summary:"Selects numeric/object features automatically for ML pipelines and matches column name patterns via regex filter."}],c=[{key:"StudentID",label:"StudentID",type:"int64",isNum:!0},{key:"Name",label:"Name",type:"object",isNum:!1},{key:"Locality",label:"Locality",type:"object",isNum:!1},{key:"Math_Score",label:"Math_Score",type:"int64",isNum:!0},{key:"Science_Score",label:"Science_Score",type:"int64",isNum:!0},{key:"Passed",label:"Passed",type:"bool",isNum:!1}],u=[{StudentID:101,Name:"Debangshu",Locality:"Barrackpore",Math_Score:85,Science_Score:90,Passed:"True"},{StudentID:102,Name:"Susmita",Locality:"Shyamnagar",Math_Score:92,Science_Score:95,Passed:"True"},{StudentID:103,Name:"Swadeep",Locality:"Ichapur",Math_Score:65,Science_Score:70,Passed:"True"},{StudentID:104,Name:"Tuhina",Locality:"Naihati",Math_Score:88,Science_Score:85,Passed:"True"}],F=()=>{const[r,p]=l.useState("column_studio"),[d,x]=l.useState("part1"),[a,s]=l.useState(["Name","Math_Score","Science_Score"]),o=i.find(t=>t.id===d)||i[0],f=t=>{a.includes(t)?a.length>1&&s(a.filter(n=>n!==t)):s([...a,t])},h=()=>{s(c.filter(t=>t.isNum).map(t=>t.key))},b=()=>{s(c.map(t=>t.key))};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-teal-900/60 via-slate-900 to-indigo-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Module 009_002 • Pandas Essentials"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/40",children:"Topic 7 • Column Selection"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-200 via-cyan-100 to-indigo-300 bg-clip-text text-transparent",children:"Selecting Columns in Pandas"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Master column extraction workflows: single bracket Series ",e.jsx("code",{className:"text-teal-300 font-mono",children:"df['col']"}),", multi-column feature subsets ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"df[['c1', 'c2']]"}),", dot notation pitfalls, and automated type selection via ",e.jsx("code",{className:"text-amber-300 font-mono",children:"select_dtypes()"}),"."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"column_studio",label:"Interactive Column Studio",icon:"📐"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(t=>e.jsxs("button",{onClick:()=>p(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r===t.id?"bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:t.icon}),t.label]},t.id))})]}),r==="column_studio"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsx("h3",{className:"text-xs font-bold text-teal-300 uppercase tracking-wider",children:"1. Select Columns to Include in Feature Subset:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:h,className:"px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-mono font-bold transition",children:"⚡ df.select_dtypes('number')"}),e.jsx("button",{onClick:b,className:"px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg text-xs font-mono transition",children:"Select All"})]})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2 border-t border-slate-800",children:c.map(t=>{const n=a.includes(t.key);return e.jsxs("button",{onClick:()=>f(t.key),className:`p-3 rounded-xl border text-left transition ${n?"bg-teal-500/20 border-teal-400 text-teal-200 shadow-md shadow-teal-500/10":"bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`,children:[e.jsx("div",{className:"font-mono font-bold text-xs truncate",children:t.label}),e.jsx("div",{className:"text-[10px] text-slate-400 font-mono mt-0.5",children:t.type})]},t.key)})})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-teal-500/30 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h4",{className:"text-sm font-bold text-teal-300",children:["Generated DataFrame Feature Matrix: ",e.jsxs("span",{className:"font-mono text-cyan-300",children:["df[",JSON.stringify(a),"]"]})]}),e.jsxs("span",{className:"text-xs px-2.5 py-1 bg-slate-800 text-slate-300 font-mono rounded",children:["Shape: (",u.length,", ",a.length,")"]})]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-slate-400 border-b border-slate-800",children:[e.jsx("th",{className:"p-2 text-slate-600 text-left",children:"Index"}),a.map(t=>e.jsx("th",{className:"p-2 text-teal-400 font-bold",children:t},t))]})}),e.jsx("tbody",{children:u.map((t,n)=>e.jsxs("tr",{className:"border-b border-slate-900 hover:bg-slate-900/60 transition",children:[e.jsx("td",{className:"p-2.5 text-slate-600 font-mono text-left",children:n}),a.map(m=>e.jsx("td",{className:"p-2.5 text-slate-200 bg-slate-900/40",children:t[m]},m))]},n))})]})}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 font-mono",children:["Python Extraction:"," ",e.jsxs("span",{className:"text-teal-300 font-bold",children:["X = df[",JSON.stringify(a),"].to_numpy()"]})]})]})]}),r==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:i.map(t=>e.jsxs("button",{onClick:()=>x(t.id),className:`p-4 rounded-xl border text-left transition-all ${d===t.id?"bg-teal-950/40 border-teal-500 shadow-lg shadow-teal-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30",children:t.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:t.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:o.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:o.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Column Selection Suite"})]}),e.jsx(g,{fileModule:o.code,title:o.fileName})]})]}),r==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(N,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"When preparing feature matrix X and target vector y for machine learning models, always remember: single brackets df['target'] return a 1D Series (ideal for target y), while double brackets df[['f1', 'f2']] return a 2D DataFrame (required for feature matrix X). And never use dot notation for columns named count or shape!"}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(S,{content:C})]})]}),r==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(_,{questions:T})})]})};export{F as default};
