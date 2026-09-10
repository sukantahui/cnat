import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as b}from"./PythonFileLoader-CiS1GfkF.js";import{F as y}from"./FAQTemplate-D_90hN4m.js";import{P as g}from"./PlainTextPrint-yt10TRX1.js";import{T as N}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const S=`"""\r
01_single_and_compound_boolean_conditions.py\r
============================================\r
Topic: Boolean Filtering: Single Conditions & Compound Bitwise Operators (&, |, ~)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("BOOLEAN FILTERING: SINGLE & COMPOUND CONDITIONS (&, |, ~)")\r
    print("=" * 70)\r
\r
    df = pd.DataFrame({\r
        "StudentID": [101, 102, 103, 104, 105, 106],\r
        "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima"],\r
        "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore"],\r
        "Math": [85, 92, 65, 88, 78, 90],\r
        "Science": [90, 95, 70, 85, 80, 92]\r
    })\r
\r
    print("Master DataFrame:\\n", df)\r
\r
    # 1. Single Boolean Condition\r
    # High achievers in Math (Math >= 85)\r
    math_mask = df["Math"] >= 85\r
    print("\\n1. Boolean Mask (df['Math'] >= 85):\\n", math_mask)\r
    print("\\n   Filtered DataFrame (df[math_mask]):\\n", df[math_mask])\r
\r
    # 2. Compound AND Condition (&) with PARENTHESES:\r
    # Rule: Must wrap each condition in () due to Python bitwise operator precedence!\r
    # Students with Math >= 85 AND Science >= 90\r
    merit_students = df[(df["Math"] >= 85) & (df["Science"] >= 90)]\r
    print("\\n2. Compound AND: df[(df['Math'] >= 85) & (df['Science'] >= 90)]:\\n", merit_students)\r
\r
    # 3. Compound OR Condition (|):\r
    # Students either from Barrackpore OR with Math > 90\r
    or_filter = df[(df["Locality"] == "Barrackpore") | (df["Math"] > 90)]\r
    print("\\n3. Compound OR: (Locality == 'Barrackpore') | (Math > 90):\\n", or_filter)\r
\r
    # 4. NOT / Negation Condition (~):\r
    # Students NOT from Barrackpore\r
    not_barrackpore = df[~(df["Locality"] == "Barrackpore")]\r
    print("\\n4. Negation NOT (~): df[~(df['Locality'] == 'Barrackpore')]:\\n", not_barrackpore)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
02_isin_between_and_string_filters.py\r
=====================================\r
Topic: Advanced Boolean Convenience Methods: .isin(), .between(), and .str\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("BOOLEAN CONVENIENCE METHODS: .isin(), .between() & .str MATCHING")\r
    print("=" * 70)\r
\r
    df = pd.DataFrame({\r
        "StudentID": [101, 102, 103, 104, 105, 106],\r
        "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima"],\r
        "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore"],\r
        "Score": [88, 95, 72, 91, 80, 89]\r
    })\r
\r
    print("Master DataFrame:\\n", df)\r
\r
    # 1. Membership Filtering: .isin([list])\r
    # Much cleaner than writing (Locality == 'A') | (Locality == 'B')\r
    target_cities = ["Barrackpore", "Shyamnagar"]\r
    isin_df = df[df["Locality"].isin(target_cities)]\r
    print("\\n1. Membership Filter: df[df['Locality'].isin(['Barrackpore', 'Shyamnagar'])]:\\n", isin_df)\r
\r
    # 2. Numerical Interval Filtering: .between(low, high) [Inclusive by default]\r
    # Filter students with scores between 80 and 90\r
    between_df = df[df["Score"].between(80, 90)]\r
    print("\\n2. Interval Filter: df[df['Score'].between(80, 90)]:\\n", between_df)\r
\r
    # 3. String Pattern Matching: .str.startswith(), .str.contains()\r
    # Students whose name starts with 'S'\r
    s_names = df[df["Name"].str.startswith("S")]\r
    print("\\n3. String Filter: df[df['Name'].str.startswith('S')]:\\n", s_names)\r
\r
if __name__ == "__main__":\r
    main()\r
`,_=`"""\r
03_query_method_dynamic_filtering.py\r
====================================\r
Topic: Expressive SQL-like Filtering with df.query() & Variable Substitution (@var)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("EXPRESSIVE FILTERING: df.query() & NUMEXPR ACCELERATION")\r
    print("=" * 70)\r
\r
    df = pd.DataFrame({\r
        "StudentID": [101, 102, 103, 104, 105, 106],\r
        "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima"],\r
        "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata", "Barrackpore"],\r
        "Math": [85, 92, 65, 88, 78, 90],\r
        "Science": [90, 95, 70, 85, 80, 92]\r
    })\r
\r
    print("Master DataFrame:\\n", df)\r
\r
    # 1. Basic df.query() syntax (clean, no repeated df['col'] mentions)\r
    query_basic = df.query("Math >= 85 and Science >= 90")\r
    print("\\n1. df.query('Math >= 85 and Science >= 90'):\\n", query_basic)\r
\r
    # 2. Dynamic Variable Injection via @ symbol\r
    min_score = 80\r
    allowed_cities = ["Barrackpore", "Shyamnagar", "Ichapur"]\r
\r
    query_dynamic = df.query("Math >= @min_score and Locality in @allowed_cities")\r
    print(f"\\n2. Dynamic df.query('Math >= @min_score and Locality in @allowed_cities') [min={min_score}]:\\n", query_dynamic)\r
\r
    # 3. String Expressions in query\r
    query_str = df.query("Locality == 'Barrackpore'")\r
    print("\\n3. df.query(\\"Locality == 'Barrackpore'\\"):\\n", query_str)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j="========================================================================\r\nTOPIC 9 NOTE: BOOLEAN FILTERING IN PANDAS\r\nInstructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r\n========================================================================\r\n\r\n1. BITWISE OPERATORS VS PYTHON KEYWORDS\r\n---------------------------------------\r\n- In Pandas, you MUST use bitwise operators instead of Python logical keywords:\r\n  * Bitwise AND: `&` (NOT `and`)\r\n  * Bitwise OR : `|` (NOT `or`)\r\n  * Bitwise NOT: `~` (NOT `not`)\r\n- Why?\r\n  Python's `and`/`or` evaluate truthiness of the whole object (raising `ValueError: The truth value of a Series is ambiguous`), whereas `&`/`|` perform element-by-element boolean vector operations across the Series.\r\n\r\n2. THE PARENTHESES RULE (Operator Precedence)\r\n----------------------------------------------\r\n- Bitwise `&` and `|` have higher operator precedence than comparison operators like `>=`, `<=`, `==`.\r\n- WRONG: `df[df['A'] > 5 & df['B'] < 10]` evaluates as `5 & df['B']` first!\r\n- CORRECT: `df[(df['A'] > 5) & (df['B'] < 10)]`. Always wrap each condition in parentheses!\r\n\r\n3. CONVENIENCE FILTERING METHODS\r\n---------------------------------\r\n- Membership: `df[df['Category'].isin(['A', 'B', 'C'])]`\r\n- Range/Interval: `df[df['Age'].between(18, 65)]` (inclusive bounds by default).\r\n- String Matching: `df[df['Name'].str.contains('Roy', case=False, na=False)]`.\r\n- Null Filtering: `df[df['Income'].isna()]` or `df[df['Income'].notna()]`.\r\n\r\n4. SQL-STYLE FILTERING WITH df.query()\r\n--------------------------------------\r\n- Syntax: `df.query('Age >= 18 and City in @approved_cities')`\r\n- Advantages:\r\n  1. Cleaner, highly readable code (avoids typing `df[...]` repeatedly).\r\n  2. Uses `NumExpr` engine under the hood for faster evaluation on large datasets without intermediate memory allocations.\r\n  3. Uses `@variable_name` to refer to Python variables inside query strings.\r\n",v=[{id:1,question:"Why does writing `df[df['A'] > 10 and df['B'] < 20]` raise a ValueError: 'The truth value of a Series is ambiguous'?",options:["Because Python's `and` keyword attempts to evaluate the boolean truth of the entire Series object as a single boolean, rather than performing element-wise comparison; you must use `&` with parentheses.","Because 'and' is only allowed in SQL queries.","Because 10 is less than 20.","Because Pandas requires uppercase 'AND'."],correctAnswer:0,explanation:"Python logical keywords (`and`, `or`, `not`) evaluate whole objects in boolean contexts. In Pandas, element-wise vectorized logical operations require bitwise operators (`&`, `|`, `~`) enclosed in parentheses: `(df['A'] > 10) & (df['B'] < 20)`."},{id:2,question:"Why are parentheses mandatory when combining multiple conditions with `&` or `|` (e.g. `df[(df['Age'] >= 18) & (df['Score'] > 80)]`)?",options:["Because in Python's operator precedence table, bitwise `&` has higher precedence than `>=` and `>`, which would cause `18 & df['Score']` to be evaluated first without parentheses.","Because parentheses convert the data into a tuple.","Because Pandas syntax is based on Lisp.","They are not mandatory, just stylistic."],correctAnswer:0,explanation:"In Python, bitwise `&` binds tighter than comparison operators (`>=`, `<`, `==`). Without parentheses, Python evaluates `18 & df['Score']` first, causing a TypeError."},{id:3,question:"Which method is the most concise and idiomatic way to filter rows where the 'Locality' column matches any city in a list `['Barrackpore', 'Shyamnagar', 'Ichapur']`?",options:["`df[df['Locality'].isin(['Barrackpore', 'Shyamnagar', 'Ichapur'])]`","`df[df['Locality'] == ['Barrackpore', 'Shyamnagar', 'Ichapur']]`","`df[df['Locality'].in_list(['Barrackpore', 'Shyamnagar', 'Ichapur'])]`","`df[df['Locality'].matches(['Barrackpore', 'Shyamnagar', 'Ichapur'])]`"],correctAnswer:0,explanation:"The `.isin()` method tests membership of each element in a collection, producing a boolean mask cleanly without chaining multiple `|` conditions."},{id:4,question:"How do you reference an external Python variable `threshold = 85` inside a `df.query()` string?",options:["`df.query('Score >= @threshold')`","`df.query('Score >= $threshold')`","`df.query('Score >= threshold')`","`df.query('Score >= {threshold}')`"],correctAnswer:0,explanation:"The `@` prefix in `df.query()` references environment variables in the local Python scope."},{id:5,question:"What does `df[~df['Passed']]` do?",options:["Inverts the boolean mask of 'Passed', selecting all rows where 'Passed' is False.","Sorts the 'Passed' column.","Deletes the 'Passed' column.","Calculates the bitwise square root of 'Passed'."],correctAnswer:0,explanation:"The tilde `~` operator is the element-wise bitwise NOT operator, inverting True to False and False to True."}],d=[{id:"part1",fileName:"01_single_and_compound_boolean_conditions.py",title:"1. Compound Bitwise Filtering (&, |, ~)",badge:"&, |, ~ Operators",code:S,summary:"Demonstrates single/compound boolean masks, parentheses precedence rules, and bitwise NOT (~) inversion."},{id:"part2",fileName:"02_isin_between_and_string_filters.py",title:"2. Convenience Methods (.isin, .between)",badge:"isin & between",code:w,summary:"Applies membership filtering via .isin([list]), numeric range slicing with .between(), and text pattern matching."},{id:"part3",fileName:"03_query_method_dynamic_filtering.py",title:"3. SQL-Style df.query() & @ Variables",badge:"df.query & @var",code:_,summary:"Evaluates expressive SQL-like query strings with NumExpr acceleration and dynamic Python variable injection (@var)."}],m=[{id:101,name:"Debangshu",locality:"Barrackpore",math:85,sci:90},{id:102,name:"Susmita",locality:"Shyamnagar",math:92,sci:95},{id:103,name:"Swadeep",locality:"Ichapur",math:65,sci:70},{id:104,name:"Tuhina",locality:"Naihati",math:88,sci:85},{id:105,name:"Sachin",locality:"Kolkata",math:78,sci:80},{id:106,name:"Mahima",locality:"Barrackpore",math:90,sci:92},{id:107,name:"Abhronila",locality:"Titagarh",math:84,sci:88}],L=()=>{const[r,p]=i.useState("filter_studio"),[c,u]=i.useState("part1"),[n,x]=i.useState(80),[t,h]=i.useState(["Barrackpore","Shyamnagar","Naihati"]),s=d.find(a=>a.id===c)||d[0],f=a=>{t.includes(a)?t.length>1&&h(t.filter(l=>l!==a)):h([...t,a])},o=m.filter(a=>a.math>=n&&t.includes(a.locality));return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-teal-900/60 via-slate-900 to-indigo-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Module 009_002 • Pandas Essentials"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/40",children:"Topic 9 • Boolean Filtering"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-200 via-cyan-100 to-indigo-300 bg-clip-text text-transparent",children:"Boolean Filtering & Querying"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Filter tabular datasets with precision: bitwise compound logic (",e.jsx("code",{className:"text-teal-300 font-mono",children:"&, |, ~"}),"), parentheses rules, convenience filters (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"isin"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"between"}),"), and SQL-style ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"df.query()"}),"."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"filter_studio",label:"Interactive Boolean Filter Studio",icon:"⚡"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(a=>e.jsxs("button",{onClick:()=>p(a.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r===a.id?"bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:a.icon}),a.label]},a.id))})]}),r==="filter_studio"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5",children:[e.jsx("h3",{className:"text-xs font-bold text-teal-300 uppercase tracking-wider",children:"1. Dynamic Filter Conditions Builder:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2 text-xs",children:[e.jsxs("span",{className:"text-slate-300 font-mono font-bold",children:["Condition 1: Math Score >= ",n]}),e.jsxs("span",{className:"text-teal-400 font-mono font-bold",children:["Threshold: ",n]})]}),e.jsx("input",{type:"range",min:"60",max:"95",step:"5",value:n,onChange:a=>x(Number(a.target.value)),className:"w-full accent-teal-500 h-2 bg-slate-800 rounded-lg cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-xs text-slate-300 font-mono font-bold block mb-2",children:["Condition 2: Locality .isin(",JSON.stringify(t),")"]}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Barrackpore","Shyamnagar","Ichapur","Naihati","Kolkata","Titagarh"].map(a=>{const l=t.includes(a);return e.jsx("button",{onClick:()=>f(a),className:`px-3 py-1 rounded-lg border text-xs font-mono transition ${l?"bg-teal-500/20 border-teal-400 text-teal-200 font-bold":"bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"}`,children:a},a)})})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("span",{className:"text-slate-500 block",children:"Generated Pandas Expressions:"}),e.jsxs("p",{className:"text-teal-300",children:["# Standard Mask: df[(df['Math'] >= ",n,") & (df['Locality'].isin(",JSON.stringify(t),"))]"]}),e.jsxs("p",{className:"text-cyan-300",children:['# df.query: df.query("Math >= ',n," and Locality in ",JSON.stringify(t),'")']})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-teal-500/30 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-sm font-bold text-teal-300",children:"Filtered DataFrame Results"}),e.jsxs("span",{className:"text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-mono font-bold rounded-lg border border-emerald-500/30",children:[o.length," of ",m.length," Matches Found"]})]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-slate-400 border-b border-slate-800",children:[e.jsx("th",{className:"p-2 text-slate-600 text-left",children:"StudentID"}),e.jsx("th",{className:"p-2 text-teal-400 font-bold",children:"Name"}),e.jsx("th",{className:"p-2 text-indigo-400 font-bold",children:"Locality"}),e.jsx("th",{className:"p-2 text-amber-400 font-bold",children:"Math"}),e.jsx("th",{className:"p-2 text-rose-400 font-bold",children:"Science"})]})}),e.jsx("tbody",{children:o.length>0?o.map(a=>e.jsxs("tr",{className:"border-b border-slate-900 hover:bg-slate-900/60 transition",children:[e.jsx("td",{className:"p-2.5 text-slate-400 text-left",children:a.id}),e.jsx("td",{className:"p-2.5 text-teal-300 font-sans font-semibold",children:a.name}),e.jsx("td",{className:"p-2.5 text-indigo-300",children:a.locality}),e.jsx("td",{className:"p-2.5 text-amber-300 font-bold",children:a.math}),e.jsx("td",{className:"p-2.5 text-rose-300 font-bold",children:a.sci})]},a.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"5",className:"p-4 text-rose-400",children:"No student records match the current filter criteria."})})})]})}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400",children:["📌 Always remember to wrap compound conditions in parentheses ",e.jsx("code",{className:"text-teal-300 font-mono",children:"(cond1) & (cond2)"}),"!"]})]})]}),r==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:d.map(a=>e.jsxs("button",{onClick:()=>u(a.id),className:`p-4 rounded-xl border text-left transition-all ${c===a.id?"bg-teal-950/40 border-teal-500 shadow-lg shadow-teal-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30",children:a.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:a.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:a.summary})]},a.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:s.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:s.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Boolean Filtering Suite"})]}),e.jsx(b,{fileModule:s.code,title:s.fileName})]})]}),r==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(N,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"Boolean filtering is the primary mechanism by which you clean datasets, remove outliers, and extract subsets for validation. Never use Python's 'and'/'or' keywords across Pandas Series—always use bitwise '&' and '|' wrapped in parentheses, or switch to df.query() for clean, readable filtering expressions."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(g,{content:j})]})]}),r==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(y,{questions:v})})]})};export{L as default};
