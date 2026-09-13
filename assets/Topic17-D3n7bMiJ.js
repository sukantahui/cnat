import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as u}from"./PythonFileLoader-DUNJ9gwR.js";import{F as f}from"./FAQTemplate-D_90hN4m.js";import{P as b}from"./PlainTextPrint-yt10TRX1.js";import{T as y}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const g=`"""\r
==============================================================================\r
Topic 17: Applying Functions with apply() in Pandas\r
Script 01: Series.apply() and Series.map()\r
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
    "Department": ["CSE", "CSE", "IT", "ECE", "IT", "CSE", "ECE"],\r
    "Math": [85, 92, 65, 88, 78, 90, 84]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. INITIAL DATAFRAME")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Series.map(): Element-Wise Dictionary Substitution or Transformation\r
# --------------------------------------------------------------------------\r
section("2. Series.map(dict) - FAST CATEGORICAL MAPPING")\r
dept_lookup = {\r
    "CSE": "Computer Science & Engineering",\r
    "IT": "Information Technology",\r
    "ECE": "Electronics & Communication"\r
}\r
\r
df["Dept_Full"] = df["Department"].map(dept_lookup)\r
print(df[["Name", "Department", "Dept_Full"]])\r
\r
# --------------------------------------------------------------------------\r
# 2. Series.apply(): Custom Python Callables on Single Column\r
# --------------------------------------------------------------------------\r
section("3. Series.apply(function) - ARBITRARY BUSINESS LOGIC")\r
\r
def grade_classifier(score):\r
    if score >= 90:\r
        return "Distinction (O)"\r
    elif score >= 80:\r
        return "First Class (E)"\r
    elif score >= 70:\r
        return "Second Class (A)"\r
    else:\r
        return "Pass (B)"\r
\r
df["Grade_Category"] = df["Math"].apply(grade_classifier)\r
print(df[["Name", "Math", "Grade_Category"]])\r
\r
# Passing extra keyword arguments to .apply()\r
def adjust_curved_score(score, bonus=5, max_cap=100):\r
    return min(score + bonus, max_cap)\r
\r
df["Curved_Math"] = df["Math"].apply(adjust_curved_score, bonus=4, max_cap=100)\r
print("\\nScores after applying curved bonus with args:")\r
print(df[["Name", "Math", "Curved_Math"]])\r
`,w=`"""\r
==============================================================================\r
Topic 17: Applying Functions with apply() in Pandas\r
Script 02: DataFrame.apply() Across Rows (axis=1) and Columns (axis=0)\r
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
    "Science": [90, 95, 70, 85, 80, 92, 88],\r
    "English": [82, 89, 74, 91, 76, 88, 85]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. ORIGINAL DATAFRAME")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Row-Wise Computation with DataFrame.apply(axis=1)\r
# --------------------------------------------------------------------------\r
section("2. ROW-WISE COMPUTATION (axis=1 / axis='columns')")\r
\r
# Complex logic involving multiple columns per row\r
def evaluate_student_profile(row):\r
    total = row["Math"] + row["Science"] + row["English"]\r
    pct = total / 3.0\r
    status = "Honors" if (pct >= 85 and row["Math"] >= 80) else "Standard"\r
    return f"{status} ({pct:.1f}%)"\r
\r
df["Profile_Summary"] = df.apply(evaluate_student_profile, axis=1)\r
print(df[["Name", "Math", "Science", "English", "Profile_Summary"]])\r
\r
# --------------------------------------------------------------------------\r
# 2. Column-Wise Computation with DataFrame.apply(axis=0)\r
# --------------------------------------------------------------------------\r
section("3. COLUMN-WISE COMPUTATION (axis=0 / axis='index')")\r
# Calculate Range (Max - Min) across each subject column\r
subject_cols = df[["Math", "Science", "English"]]\r
column_ranges = subject_cols.apply(lambda col: col.max() - col.min(), axis=0)\r
print("Score Spread (Max - Min) per subject column:")\r
print(column_ranges)\r
\r
# --------------------------------------------------------------------------\r
# 3. Element-Wise DataFrame Transformation (DataFrame.map() in Pandas 2.1+)\r
# --------------------------------------------------------------------------\r
section("4. ELEMENT-WISE FORMATTING WITH DataFrame.map() (OR legacy applymap)")\r
formatted_scores = subject_cols.map(lambda val: f"{val}/100")\r
print("Scores with element-wise string suffix:")\r
print(formatted_scores.head(4))\r
`,S=`"""\r
==============================================================================\r
Topic 17: Applying Functions with apply() in Pandas\r
Script 03: The Golden Rule: Vectorization vs np.where vs apply(axis=1)\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
"""\r
\r
import pandas as pd\r
import numpy as np\r
import time\r
\r
def section(title):\r
    print("\\n" + "=" * 75)\r
    print(f"  {title}")\r
    print("=" * 75)\r
\r
# Benchmark synthetic dataset of 200,000 student test scores\r
N = 200_000\r
np.random.seed(42)\r
benchmark_df = pd.DataFrame({\r
    "Math": np.random.randint(40, 100, size=N),\r
    "Science": np.random.randint(40, 100, size=N)\r
})\r
\r
section(f"1. BENCHMARKING PERFORMANCE ON {N:,} ROWS")\r
\r
# --------------------------------------------------------------------------\r
# Approach 1: Slow Python row loop via DataFrame.apply(axis=1)\r
# --------------------------------------------------------------------------\r
t0 = time.time()\r
res_apply = benchmark_df.apply(lambda r: "Pass" if (r["Math"] >= 75 and r["Science"] >= 75) else "Fail", axis=1)\r
t_apply = time.time() - t0\r
print(f"[Approach 1] df.apply(axis=1)          : {t_apply:.4f} seconds (SLOW - Python Row Loop)")\r
\r
# --------------------------------------------------------------------------\r
# Approach 2: np.vectorize() (Slightly faster, but still Python level)\r
# --------------------------------------------------------------------------\r
def pass_fail(m, s):\r
    return "Pass" if (m >= 75 and s >= 75) else "Fail"\r
\r
vec_func = np.vectorize(pass_fail)\r
t0 = time.time()\r
res_vec = vec_func(benchmark_df["Math"], benchmark_df["Science"])\r
t_vec = time.time() - t0\r
print(f"[Approach 2] np.vectorize(...)         : {t_vec:.4f} seconds (MODERATE)")\r
\r
# --------------------------------------------------------------------------\r
# Approach 3: Pure Vectorized NumPy (np.where) - THE ML GOLD STANDARD\r
# --------------------------------------------------------------------------\r
t0 = time.time()\r
res_pure = np.where((benchmark_df["Math"] >= 75) & (benchmark_df["Science"] >= 75), "Pass", "Fail")\r
t_pure = time.time() - t0\r
print(f"[Approach 3] Pure Vectorized np.where  : {t_pure:.4f} seconds (LIGHTNING FAST - C Level)")\r
\r
speedup = t_apply / max(t_pure, 0.0001)\r
print(f"\\n=> Pure vectorization is ~{speedup:.1f}x FASTER than df.apply(axis=1)!")\r
`,N=`==============================================================================\r
TOPIC 17 NOTE: APPLYING FUNCTIONS WITH apply() IN PANDAS\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
\r
1. THE THREE APPLICATION SCOPES:\r
   --------------------------------------------------------------------------\r
   a) Series.apply(callable, args=(), **kwargs):\r
      - Operates on each scalar value within a single Series.\r
      - Ideal for text parsing, regular expressions, complex scalar math.\r
      - Example: \`df['Email'].apply(lambda x: x.split('@')[1])\`\r
\r
   b) Series.map(dict_or_callable):\r
      - Replaces values via dictionary lookup or applies a 1-to-1 function.\r
      - Fast and concise for categorical encoding.\r
      - Example: \`df['Status'].map({'Y': 1, 'N': 0})\`\r
\r
   c) DataFrame.apply(callable, axis=0 or 1):\r
      - \`axis=0\` (Default, Column-wise): Passes each entire column as a Series.\r
      - \`axis=1\` (Row-wise): Passes each row as a Series (access \`row['ColA']\`, \`row['ColB']\`).\r
\r
   d) DataFrame.map() (formerly applymap in legacy Pandas):\r
      - Element-wise transformation on every cell across the entire DataFrame.\r
      - Example: \`df.map(lambda x: f"{x:.2f}")\`\r
\r
2. THE PERFORMANCE HIERARCHY (CRITICAL FOR MACHINE LEARNING):\r
   --------------------------------------------------------------------------\r
   Why is \`df.apply(axis=1)\` considered a last resort?\r
   - Level 1 (Fastest, C/SIMD Vectorization):\r
     \`df['Total'] = df['A'] + df['B']\` or \`np.where(df['A'] > 50, 'Yes', 'No')\`\r
     -> 100x to 500x faster than loops!\r
   - Level 2 (Moderate, Cythonized / Numba):\r
     \`np.vectorize(custom_py_func)\`\r
   - Level 3 (Slowest, Pure Python Loop):\r
     \`df.apply(lambda r: ..., axis=1)\`\r
     -> Constructs a Python Series object for EVERY single row, creating immense memory and GC overhead.\r
\r
3. GOLDEN RULES:\r
   --------------------------------------------------------------------------\r
   - Rule 1: Always check if built-in vectorized arithmetic, \`df.str\`, or \`np.where\` can solve your problem before using \`apply()\`.\r
   - Rule 2: Use \`apply(axis=1)\` ONLY when business logic requires complex Python conditionals, try/except blocks, or third-party non-vectorized library calls (e.g. Geocoding API, NLTK, spaCy).\r
`,p=[{id:1,question:"When using df.apply(my_function, axis=1), what object does my_function receive as its input argument for each iteration?",options:["A Pandas Series representing the current row","A single integer representing the row index","A Python list of strings","The entire DataFrame"],correctAnswer:"A Pandas Series representing the current row",explanation:"With axis=1 (or axis='columns'), Pandas passes each row as a pd.Series to the callable, allowing fields to be accessed like row['Math'] and row['Science']."},{id:2,question:"Why should you avoid df.apply(..., axis=1) when computing simple arithmetic like df['Total'] = df['A'] + df['B']?",options:["df.apply(axis=1) constructs a Python Series object per row in a slow Python loop, making it 50x-500x slower than vectorized C addition","df.apply(axis=1) is deprecated and will be removed in Python 3.12","df.apply(axis=1) permanently rounds all decimal numbers to zero","df.apply(axis=1) cannot handle more than 10 rows"],correctAnswer:"df.apply(axis=1) constructs a Python Series object per row in a slow Python loop, making it 50x-500x slower than vectorized C addition",explanation:"Vectorized arithmetic executes contiguous C/SIMD CPU operations, whereas df.apply(axis=1) incurs the heavy overhead of creating Python Series objects and executing interpreted bytecode for every row."},{id:3,question:"Which method is best suited for 1-to-1 dictionary lookups to encode categorical columns (e.g. mapping {'M': 'Male', 'F': 'Female'})?",options:["Series.map()","DataFrame.pivot()","Series.groupby()","DataFrame.merge_dict()"],correctAnswer:"Series.map()",explanation:"Series.map(dict) is specifically optimized for element-wise dictionary substitutions and categorical value re-mapping."},{id:4,question:"In Pandas 2.1+, which method replaces the legacy DataFrame.applymap() for element-wise cell transformations?",options:["DataFrame.map()","DataFrame.cell_apply()","DataFrame.each()","DataFrame.broadcast()"],correctAnswer:"DataFrame.map()",explanation:"Starting in Pandas 2.1.0, DataFrame.map() was introduced to provide a uniform API consistent with Series.map(), deprecating the legacy applymap() name."},{id:5,question:"How can you pass extra constant arguments (e.g. bonus=5) to a custom function inside Series.apply()?",options:["df['Score'].apply(my_func, bonus=5)","df['Score'].apply(my_func(bonus=5))","df['Score'].apply(my_func, with_args={'bonus': 5})","df['Score'].apply_with_params(my_func, 5)"],correctAnswer:"df['Score'].apply(my_func, bonus=5)",explanation:"Series.apply accepts arbitrary positional (*args) and keyword (**kwargs) parameters and forwards them directly to the user-supplied callable."}],o=[{id:"part1",fileName:"01_series_apply_and_map.py",title:"1. Series.apply() & Series.map()",badge:"apply() & map()",code:g,summary:"Apply custom scalar business logic, pass keyword arguments to functions, and perform rapid dictionary category mapping."},{id:"part2",fileName:"02_dataframe_apply_row_vs_col_axis.py",title:"2. DataFrame.apply() Across Rows & Columns",badge:"axis=0 vs axis=1",code:w,summary:"Execute multi-column row-wise logic with axis=1, compute column summaries with axis=0, and explore modern DataFrame.map()."},{id:"part3",fileName:"03_apply_vs_vectorization_benchmarks.py",title:"3. Vectorization vs np.where vs apply(axis=1)",badge:"Performance Benchmarks",code:S,summary:"Measure why pure NumPy vectorization and np.where run up to 300x faster than interpreted Python row-loops in ML pipelines."}],v=[{id:101,name:"Debangshu",dept:"CSE",math:85,sci:90,eng:82},{id:102,name:"Susmita",dept:"CSE",math:92,sci:95,eng:89},{id:103,name:"Swadeep",dept:"IT",math:65,sci:70,eng:74},{id:104,name:"Tuhina",dept:"ECE",math:88,sci:85,eng:91},{id:105,name:"Sachin",dept:"IT",math:78,sci:80,eng:76},{id:106,name:"Mahima",dept:"CSE",math:90,sci:92,eng:88},{id:107,name:"Abhronila",dept:"ECE",math:84,sci:88,eng:85}],_={CSE:"Computer Science & Engineering",IT:"Information Technology",ECE:"Electronics & Communication"},I=()=>{const[r,n]=l.useState("apply_studio"),[c,m]=l.useState("part1"),[t,h]=l.useState("grade_classifier"),i=o.find(a=>a.id===c)||o[0],x=v.map(a=>{const d=((a.math+a.sci+a.eng)/3).toFixed(1);let s="";return t==="grade_classifier"?a.math>=90?s="Distinction (O)":a.math>=80?s="First Class (E)":a.math>=70?s="Second Class (A)":s="Pass (B)":t==="dept_mapping"?s=_[a.dept]||a.dept:t==="honors_eligibility"?s=Number(d)>=85&&a.math>=80?"Honors (Eligible)":"Standard":t==="curved_bonus"&&(s=`${Math.min(a.math+5,100)} / 100`),{...a,avg:d,customResult:s}});return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-rose-900/40 via-pink-900/30 to-slate-900/60 border border-rose-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-full",children:"Functional Transformations"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 17"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Applying Functions with apply() in Pandas"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:["Bridge Python functions and Pandas structures. Discover how to apply custom logic across Series, calculate row-wise properties with"," ",e.jsx("code",{className:"text-rose-300 bg-slate-800 px-1 py-0.5 rounded",children:"df.apply(axis=1)"}),", and master the performance hierarchy between loops and pure vectorization."]})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-rose-500/20",children:"λ(x)"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>n("apply_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="apply_studio"?"bg-rose-600 text-white shadow-lg shadow-rose-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"⚡ Functional Transformation Studio"}),e.jsxs("button",{onClick:()=>n("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="python_code"?"bg-rose-600 text-white shadow-lg shadow-rose-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",o.length," Scripts)"]}),e.jsx("button",{onClick:()=>n("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="theory_notes"?"bg-rose-600 text-white shadow-lg shadow-rose-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>n("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="quiz"?"bg-rose-600 text-white shadow-lg shadow-rose-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",p.length,")"]})]}),r==="apply_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🎛️"})," Select Applied Function / Transformation Paradigm"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:[{id:"grade_classifier",title:"1. Series.apply(classify_grade)",desc:"Custom Python if-elif function on Math score",code:"df['Math'].apply(grade_classifier)"},{id:"dept_mapping",title:"2. Series.map(dict_lookup)",desc:"Fast dictionary substitution for abbreviations",code:"df['Department'].map(dept_lookup)"},{id:"honors_eligibility",title:"3. df.apply(axis=1)",desc:"Multi-column cross-row boolean evaluation",code:"df.apply(lambda r: check_honors(r), axis=1)"},{id:"curved_bonus",title:"4. apply(func, bonus=5)",desc:"Passing positional and keyword arguments",code:"df['Math'].apply(add_curved_bonus, bonus=5)"}].map(a=>e.jsxs("button",{onClick:()=>h(a.id),className:`p-3.5 rounded-xl text-left border transition-all ${t===a.id?"bg-rose-950/60 border-rose-500 text-white shadow-lg shadow-rose-500/10":"bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-rose-300",children:a.title}),e.jsx("div",{className:"text-[11px] text-slate-300 mt-1",children:a.desc}),e.jsx("code",{className:"text-[11px] font-mono text-teal-400 mt-2 block truncate",children:a.code})]},a.id))}),e.jsxs("div",{className:"mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-rose-300",children:[e.jsx("span",{className:"text-slate-500",children:"# Executed Python Expression:"}),e.jsxs("div",{className:"mt-1 font-bold",children:[t==="grade_classifier"&&"df['Grade_Category'] = df['Math'].apply(lambda score: 'Distinction' if score >= 90 else ('First Class' if score >= 80 else 'Pass'))",t==="dept_mapping"&&"df['Dept_Full'] = df['Department'].map({'CSE': 'Computer Science & Engineering', 'IT': 'Information Technology', 'ECE': 'Electronics & Communication'})",t==="honors_eligibility"&&"df['Honors_Status'] = df.apply(lambda r: 'Honors (Eligible)' if ((r['Math']+r['Science']+r['English'])/3 >= 85 and r['Math'] >= 80) else 'Standard', axis=1)",t==="curved_bonus"&&"df['Curved_Math'] = df['Math'].apply(lambda s, bonus=5: min(s + bonus, 100))"]})]})]}),e.jsx("div",{className:"bg-gradient-to-r from-amber-950/40 to-slate-900 border border-amber-500/30 rounded-xl p-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xl",children:"🚀"}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-amber-300",children:"Performance Speed Hierarchy in Pandas"}),e.jsxs("p",{className:"text-xs text-slate-300 mt-0.5",children:["1. ",e.jsx("strong",{className:"text-emerald-400",children:"Pure Vectorization / np.where (Fastest: ~0.002s)"})," > 2."," ",e.jsx("strong",{className:"text-cyan-400",children:"Series.apply / map (~0.05s)"})," > 3."," ",e.jsx("strong",{className:"text-rose-400",children:"DataFrame.apply(axis=1) (Slowest: ~0.85s, 400x slower)"})]})]})]})}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[e.jsx("div",{className:"flex items-center justify-between mb-4",children:e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Transformed Output DataFrame"]})}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80 font-mono",children:[e.jsx("th",{className:"p-3 text-slate-400",children:"StudentID"}),e.jsx("th",{className:"p-3 text-teal-300",children:"Name"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Dept"}),e.jsx("th",{className:"p-3 text-slate-300",children:"Math"}),e.jsx("th",{className:"p-3 text-slate-300",children:"Science"}),e.jsx("th",{className:"p-3 text-slate-300",children:"English"}),e.jsx("th",{className:"p-3 text-slate-400",children:"Average"}),e.jsx("th",{className:"p-3 text-rose-300 font-bold bg-rose-950/20",children:"Applied Result (New Feature)"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:x.map(a=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-slate-400",children:a.id}),e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:a.name}),e.jsx("td",{className:"p-3 text-cyan-300 font-sans",children:a.dept}),e.jsx("td",{className:"p-3 text-slate-300",children:a.math}),e.jsx("td",{className:"p-3 text-slate-300",children:a.sci}),e.jsx("td",{className:"p-3 text-slate-300",children:a.eng}),e.jsxs("td",{className:"p-3 text-slate-400",children:[a.avg,"%"]}),e.jsx("td",{className:"p-3 font-bold bg-rose-950/10",children:e.jsx("span",{className:"px-2 py-0.5 rounded text-xs bg-rose-600/20 text-rose-300 border border-rose-500/30",children:a.customResult})})]},a.id))})]})]}),e.jsx(y,{topic:"The apply(axis=1) Trap in Machine Learning",text:"When building preprocessing pipelines for big datasets, df.apply(..., axis=1) is notorious for destroying throughput because it iterates through each row sequentially in Python. Always test if your logic can be written with vectorized NumPy methods like np.where() or np.select(). Reserve apply() strictly for complex string parsing, regex, or calls to external NLP/vision APIs!"})]}),r==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:o.map(a=>e.jsxs("button",{onClick:()=>m(a.id),className:`p-4 rounded-xl text-left border transition-all ${c===a.id?"bg-rose-950/60 border-rose-500 text-white shadow-lg shadow-rose-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-rose-400 uppercase tracking-wider mb-1",children:a.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:a.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:a.summary})]},a.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:i.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:i.summary})]})}),e.jsx(u,{fileModule:i.code,title:i.fileName})]})]}),r==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(b,{text:N,title:"Topic 17 Revision Notes: Applying Functions with apply()"})}),r==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(f,{questions:p,title:"Topic 17 Knowledge Check: Applying Functions with apply()"})})]})})};export{I as default};
