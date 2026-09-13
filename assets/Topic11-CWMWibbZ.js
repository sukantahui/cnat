import{b as h,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as v}from"./PythonFileLoader-DUNJ9gwR.js";import{F as M}from"./FAQTemplate-D_90hN4m.js";import{P as j}from"./PlainTextPrint-yt10TRX1.js";import{T as I}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const A=`"""\r
==============================================================================\r
Topic 11: Handling Missing Values in Pandas\r
Script 01: Detecting & Profiling Missing Values (isna, isnull, notna)\r
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
# Student dataset with realistic missing values (NaN / None)\r
data = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
    "Locality": ["Barrackpore", "Shyamnagar", np.nan, "Naihati", "Kolkata", "Barrackpore", np.nan],\r
    "Math": [85.0, 92.0, np.nan, 88.0, 78.0, np.nan, 84.0],\r
    "Science": [90.0, np.nan, 70.0, 85.0, 80.0, 92.0, 88.0],\r
    "Scholarship": [1200.0, 1500.0, np.nan, np.nan, 800.0, 1500.0, np.nan]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. RAW DATAFRAME WITH MISSING VALUES (NaN)")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. isna() vs isnull() - What is the difference?\r
# --------------------------------------------------------------------------\r
section("2. isna() VS isnull() (THEY ARE IDENTICAL ALIASES)")\r
# In Pandas, isna() and isnull() are exact aliases of each other.\r
print("df.isna().equals(df.isnull()) ->", df.isna().equals(df.isnull()))\r
print("\\nBoolean Mask (df.isna()):")\r
print(df.isna())\r
\r
# --------------------------------------------------------------------------\r
# 2. Counting Missing Values Per Column\r
# --------------------------------------------------------------------------\r
section("3. MISSING VALUE COUNT & PERCENTAGE BREAKDOWN")\r
null_counts = df.isna().sum()\r
null_percentages = (df.isna().mean() * 100).round(2)\r
\r
missing_summary = pd.DataFrame({\r
    "MissingCount": null_counts,\r
    "MissingPercentage (%)": null_percentages\r
})\r
print(missing_summary)\r
\r
# --------------------------------------------------------------------------\r
# 3. Filtering Rows with Missing Values\r
# --------------------------------------------------------------------------\r
section("4. FILTERING ROWS CONTAINING MISSING VALUES")\r
# Rows where Math score is missing\r
missing_math = df[df["Math"].isna()]\r
print("Students with missing Math score:")\r
print(missing_math[["StudentID", "Name", "Math"]])\r
\r
# Rows where ANY column contains a missing value (any(axis=1))\r
rows_with_any_null = df[df.isna().any(axis=1)]\r
print(f"\\nTotal rows with at least one missing field: {len(rows_with_any_null)} of {len(df)}")\r
print(rows_with_any_null[["StudentID", "Name", "Locality", "Math", "Science"]])\r
`,_=`"""\r
==============================================================================\r
Topic 11: Handling Missing Values in Pandas\r
Script 02: Dropping Missing Values with dropna() (axis, how, subset, thresh)\r
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
    "StudentID": [101, 102, 103, 104, 105, 106, 107],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
    "Locality": ["Barrackpore", "Shyamnagar", np.nan, "Naihati", "Kolkata", "Barrackpore", np.nan],\r
    "Math": [85.0, 92.0, np.nan, 88.0, 78.0, np.nan, 84.0],\r
    "Science": [90.0, np.nan, 70.0, 85.0, 80.0, 92.0, 88.0],\r
    "Scholarship": [1200.0, 1500.0, np.nan, np.nan, 800.0, 1500.0, np.nan]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. ORIGINAL DATA (7 rows)")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Default dropna(): Drops any row with AT LEAST ONE NaN (how='any')\r
# --------------------------------------------------------------------------\r
section("2. df.dropna() (DEFAULT: axis=0, how='any')")\r
df_dropped_any = df.dropna()\r
print(f"Rows remaining after default dropna: {len(df_dropped_any)}")\r
print(df_dropped_any)\r
\r
# --------------------------------------------------------------------------\r
# 2. Dropping based on specific columns: subset=['Math', 'Science']\r
# --------------------------------------------------------------------------\r
section("3. df.dropna(subset=['Math', 'Science'])")\r
# Only drop row if Math OR Science is missing (keep if only Scholarship is missing)\r
df_valid_marks = df.dropna(subset=["Math", "Science"])\r
print(f"Rows with both Math and Science available: {len(df_valid_marks)}")\r
print(df_valid_marks[["StudentID", "Name", "Math", "Science"]])\r
\r
# --------------------------------------------------------------------------\r
# 3. Minimum Non-Null Threshold (thresh parameter)\r
# --------------------------------------------------------------------------\r
section("4. df.dropna(thresh=5)")\r
# Keep rows that have AT LEAST 5 valid non-null values across columns\r
df_thresh = df.dropna(thresh=5)\r
print(f"Rows with at least 5 non-null values: {len(df_thresh)}")\r
print(df_thresh)\r
\r
# --------------------------------------------------------------------------\r
# 4. Dropping Columns with Missing Values (axis=1 / axis='columns')\r
# --------------------------------------------------------------------------\r
section("5. df.dropna(axis=1) - DROPPING COLUMNS WITH ANY NULLS")\r
df_clean_cols = df.dropna(axis=1)\r
print("Columns remaining with zero nulls:", df_clean_cols.columns.tolist())\r
print(df_clean_cols.head())\r
`,T=`"""\r
==============================================================================\r
Topic 11: Handling Missing Values in Pandas\r
Script 03: Imputing Missing Values with fillna(), mean/median, and ffill/bfill\r
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
    "StudentID": [101, 102, 103, 104, 105, 106, 107],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
    "Locality": ["Barrackpore", "Shyamnagar", np.nan, "Naihati", "Kolkata", "Barrackpore", np.nan],\r
    "Math": [85.0, 92.0, np.nan, 88.0, 78.0, np.nan, 84.0],\r
    "Science": [90.0, np.nan, 70.0, 85.0, 80.0, 92.0, 88.0],\r
    "Scholarship": [1200.0, 1500.0, np.nan, np.nan, 800.0, 1500.0, np.nan]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. ORIGINAL DATAFRAME BEFORE IMPUTATION")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Imputing Categorical / Text Columns with a Constant\r
# --------------------------------------------------------------------------\r
section("2. CONSTANT IMPUTATION (df['Locality'].fillna('Unknown'))")\r
df["Locality"] = df["Locality"].fillna("Not Specified")\r
df["Scholarship"] = df["Scholarship"].fillna(0.0)\r
print(df[["StudentID", "Name", "Locality", "Scholarship"]])\r
\r
# --------------------------------------------------------------------------\r
# 2. Statistical Imputation: Mean and Median\r
# --------------------------------------------------------------------------\r
section("3. STATISTICAL IMPUTATION (MEAN & MEDIAN)")\r
# Compute mean for Math and Science\r
math_mean = df["Math"].mean().round(1)\r
sci_median = df["Science"].median()\r
\r
print(f"Calculated Math Mean: {math_mean}")\r
print(f"Calculated Science Median: {sci_median}")\r
\r
df["Math"] = df["Math"].fillna(math_mean)\r
df["Science"] = df["Science"].fillna(sci_median)\r
\r
print("\\nDataFrame after mean/median imputation:")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 3. Time-Series & Sequential Imputation: ffill() and bfill()\r
# --------------------------------------------------------------------------\r
section("4. FORWARD FILL (ffill) AND BACKWARD FILL (bfill)")\r
# Often used in sequential, stock, or sensor logs\r
sensor_data = pd.DataFrame({\r
    "Timestamp": ["09:00", "09:05", "09:10", "09:15", "09:20", "09:25"],\r
    "Temperature": [28.4, np.nan, np.nan, 29.1, np.nan, 30.2]\r
})\r
print("Original Sensor Readings:")\r
print(sensor_data)\r
\r
# Forward fill: propagates last known value forward\r
ffilled = sensor_data.copy()\r
ffilled["Temperature"] = ffilled["Temperature"].ffill()\r
print("\\nAfter .ffill() (Forward Fill):")\r
print(ffilled)\r
\r
# --------------------------------------------------------------------------\r
# 4. Multi-Column Dictionary Imputation in One Call\r
# --------------------------------------------------------------------------\r
section("5. MULTI-COLUMN DICTIONARY fillna()")\r
raw_df = pd.DataFrame(data)\r
cleaned_all = raw_df.fillna({\r
    "Locality": "Barrackpore (Default)",\r
    "Math": raw_df["Math"].mean(),\r
    "Science": raw_df["Science"].median(),\r
    "Scholarship": 0.0\r
})\r
print("Cleaned DataFrame via dictionary fillna():")\r
print(cleaned_all)\r
`,D="==============================================================================\r\nTOPIC 11 NOTE: HANDLING MISSING VALUES IN PANDAS (isna, dropna, fillna)\r\nInstructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r\nStudents: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r\n==============================================================================\r\n\r\n1. UNDERSTANDING MISSING DATA IN PANDAS:\r\n   --------------------------------------------------------------------------\r\n   - Representations: `np.nan` (floating-point IEEE NaN), `None` (Python object), `pd.NA` (nullable types in Pandas 1.0+).\r\n   - Detection methods:\r\n     * `df.isna()` or `df.isnull()`: Exact aliases, return boolean masks.\r\n     * `df.notna()` or `df.notnull()`: Inverse masks (True for valid data).\r\n     * `df.isna().sum()`: Count of missing entries per column.\r\n     * `(df.isna().mean() * 100)`: Percentage of missing values per column.\r\n\r\n2. REMOVING MISSING VALUES WITH dropna():\r\n   --------------------------------------------------------------------------\r\n   - `df.dropna()`: Default drops any row with >= 1 missing value (axis=0, how='any').\r\n   - `how='all'`: Only drops row/column if ALL values are NaN.\r\n   - `subset=['ColA', 'ColB']`: Constrains dropping to specific critical columns.\r\n   - `thresh=N`: Keeps rows/columns with at least N non-null observations.\r\n   - `axis=1` or `axis='columns'`: Drops columns containing NaNs.\r\n\r\n3. IMPUTING MISSING VALUES WITH fillna():\r\n   --------------------------------------------------------------------------\r\n   - Constant imputation: `df['City'].fillna('Unknown')`\r\n   - Zero imputation: `df['Discount'].fillna(0)`\r\n   - Central tendency imputation:\r\n     * Mean (for normally distributed numeric data): `df['Age'].fillna(df['Age'].mean())`\r\n     * Median (for skewed numeric data or data with outliers): `df['Salary'].fillna(df['Salary'].median())`\r\n     * Mode (for categorical data): `df['Department'].fillna(df['Department'].mode()[0])`\r\n   - Sequential imputation:\r\n     * `df.ffill()`: Forward fill (carries last known valid value forward).\r\n     * `df.bfill()`: Backward fill (carries next known valid value backward).\r\n   - Dictionary imputation for multiple columns at once:\r\n     `df.fillna({'Age': 25, 'Salary': 50000, 'City': 'Barrackpore'})`\r\n\r\n4. MACHINE LEARNING BEST PRACTICES:\r\n   --------------------------------------------------------------------------\r\n   - Never impute test data using test set statistics! Always compute mean/median on the TRAINING set and apply that value to both train and test sets to prevent Data Leakage.\r\n   - If a feature has > 60-70% missing values, evaluate whether dropping the entire feature or creating a boolean indicator (is_missing) is superior to imputation.\r\n",w=[{id:1,question:"What is the key functional difference between df.isna() and df.isnull() in Pandas?",options:["There is no difference; isnull() is an exact alias of isna()","isna() only checks for strings, while isnull() checks for numbers","isnull() removes the missing values, while isna() returns a boolean mask","isna() only works in Pandas 2.0 and later"],correctAnswer:"There is no difference; isnull() is an exact alias of isna()",explanation:"In Pandas, df.isnull() and df.isna() are identical function aliases pointing to the exact same underlying C/Cython implementation."},{id:2,question:"How do you count the number of missing (NaN) values in each column of a DataFrame?",options:["df.isna().sum()","df.count_nulls()","df.len(nan)","df.where(nan).size()"],correctAnswer:"df.isna().sum()",explanation:"df.isna() generates a DataFrame of boolean values (True for NaN, False otherwise). Calling .sum() on this boolean DataFrame adds up True (1) per column along axis 0."},{id:3,question:"Which dropna() call will only drop rows where BOTH 'Math' AND 'Science' values are missing?",options:["df.dropna(subset=['Math', 'Science'], how='all')","df.dropna(subset=['Math', 'Science'], how='any')","df.dropna(columns=['Math', 'Science'])","df.dropna(thresh=2)"],correctAnswer:"df.dropna(subset=['Math', 'Science'], how='all')",explanation:"Specifying subset=['Math', 'Science'] restricts the drop check to those two columns, and how='all' ensures that rows are only dropped if ALL values in that subset are NaN."},{id:4,question:"When should you prefer imputing with MEDIAN instead of MEAN for missing numeric features?",options:["When the distribution is skewed or contains extreme outliers (e.g., salaries or house prices)","When the data is strictly text / categorical","When there are zero missing values","When the column has only binary (0 or 1) values"],correctAnswer:"When the distribution is skewed or contains extreme outliers (e.g., salaries or house prices)",explanation:"The median is robust against extreme outliers and skewness, whereas the arithmetic mean can be heavily distorted by high or low outliers in salary and price distributions."},{id:5,question:"What does df.ffill() do when encountering missing values?",options:["Propagates the last valid (non-null) observation forward to fill subsequent NaNs","Fills all NaNs with the string 'FORWARD'","Fills NaNs with the global minimum value of the DataFrame","Deletes all rows following the first NaN"],correctAnswer:"Propagates the last valid (non-null) observation forward to fill subsequent NaNs",explanation:"Forward fill (.ffill() or .fillna(method='ffill')) propagates the most recent valid observation forward down the column, which is essential in time series and sequential logging datasets."}],m=[{id:"part1",fileName:"01_detecting_nulls_isnull_isna.py",title:"1. Detecting & Profiling Missing Values",badge:"isna(), isnull(), sum()",code:A,summary:"Identify missing data patterns using isna()/isnull() aliases, compute column-wise null counts and missing percentages."},{id:"part2",fileName:"02_dropping_nulls_dropna_axis_thresh.py",title:"2. Removing Missing Data with dropna()",badge:"dropna(how, subset, thresh)",code:_,summary:"Fine-tune deletion strategies with subset parameters, non-null thresholds (thresh=k), and axis dimension controls."},{id:"part3",fileName:"03_imputing_nulls_fillna_mean_ffill.py",title:"3. Imputing Values (Mean, Median, ffill)",badge:"fillna(), mean/median, ffill",code:T,summary:"Fill missing categorical/numeric values using constants, statistical measures (mean/median), forward/backward fill, and dictionary maps."}],s=[{id:101,name:"Debangshu",locality:"Barrackpore",math:85,sci:90,scholarship:1200},{id:102,name:"Susmita",locality:"Shyamnagar",math:92,sci:null,scholarship:1500},{id:103,name:"Swadeep",locality:null,math:null,sci:70,scholarship:null},{id:104,name:"Tuhina",locality:"Naihati",math:88,sci:85,scholarship:null},{id:105,name:"Sachin",locality:"Kolkata",math:78,sci:80,scholarship:800},{id:106,name:"Mahima",locality:"Barrackpore",math:null,sci:92,scholarship:1500},{id:107,name:"Abhronila",locality:null,math:84,sci:88,scholarship:null}],B=()=>{const[i,d]=h.useState("missing_studio"),[p,S]=h.useState("part1"),[o,y]=h.useState("raw"),c=m.find(n=>n.id===p)||m[0],u=s.map(n=>n.math).filter(n=>n!==null),f=(u.reduce((n,t)=>n+t,0)/u.length).toFixed(1),x=s.map(n=>n.sci).filter(n=>n!==null).sort((n,t)=>n-t),b=x[Math.floor(x.length/2)],g=(()=>{switch(o){case"dropna_any":return s.filter(n=>n.locality!==null&&n.math!==null&&n.sci!==null&&n.scholarship!==null);case"dropna_marks":return s.filter(n=>n.math!==null&&n.sci!==null);case"fillna_stats":return s.map(n=>({...n,locality:n.locality||"Not Specified",math:n.math??Number(f),sci:n.sci??b,scholarship:n.scholarship??0}));case"ffill":{let n="Unknown",t=80,l=80,N=0;return s.map(a=>(a.locality!==null&&(n=a.locality),a.math!==null&&(t=a.math),a.sci!==null&&(l=a.sci),a.scholarship!==null&&(N=a.scholarship),{...a,locality:a.locality??n,math:a.math??t,sci:a.sci??l,scholarship:a.scholarship??N}))}default:return s}})(),r=n=>s.filter(t=>t[n]===null).length;return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-amber-900/40 via-orange-900/30 to-slate-900/60 border border-amber-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full",children:"Pandas Data Cleaning"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 11"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Handling Missing Values: isnull(), fillna(), dropna()"}),e.jsx("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:"Tackle incomplete datasets with surgical precision. Profile missing rates, evaluate deletion versus imputation trade-offs, and master central tendency and forward filling in ML pipelines."})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-amber-500/20",children:"NaN?"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>d("missing_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${i==="missing_studio"?"bg-amber-600 text-white shadow-lg shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"🧹 Missing Values Studio"}),e.jsxs("button",{onClick:()=>d("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${i==="python_code"?"bg-amber-600 text-white shadow-lg shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",m.length," Scripts)"]}),e.jsx("button",{onClick:()=>d("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${i==="theory_notes"?"bg-amber-600 text-white shadow-lg shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>d("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${i==="quiz"?"bg-amber-600 text-white shadow-lg shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",w.length,")"]})]}),i==="missing_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Locality Nulls"}),e.jsxs("div",{className:"text-xl font-bold text-amber-400 font-mono mt-1",children:[r("locality")," / 7"," ",e.jsxs("span",{className:"text-xs text-slate-500 font-sans",children:["(",(r("locality")/7*100).toFixed(0),"%)"]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Math Nulls"}),e.jsxs("div",{className:"text-xl font-bold text-rose-400 font-mono mt-1",children:[r("math")," / 7"," ",e.jsxs("span",{className:"text-xs text-slate-500 font-sans",children:["(",(r("math")/7*100).toFixed(0),"%)"]})]}),e.jsxs("div",{className:"text-xs text-slate-500 mt-0.5 font-mono",children:["Mean = ",f]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Science Nulls"}),e.jsxs("div",{className:"text-xl font-bold text-rose-400 font-mono mt-1",children:[r("sci")," / 7"," ",e.jsxs("span",{className:"text-xs text-slate-500 font-sans",children:["(",(r("sci")/7*100).toFixed(0),"%)"]})]}),e.jsxs("div",{className:"text-xs text-slate-500 mt-0.5 font-mono",children:["Median = ",b]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-4",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Scholarship Nulls"}),e.jsxs("div",{className:"text-xl font-bold text-purple-400 font-mono mt-1",children:[r("scholarship")," / 7"," ",e.jsxs("span",{className:"text-xs text-slate-500 font-sans",children:["(",(r("scholarship")/7*100).toFixed(0),"%)"]})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h3",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Choose Cleaning / Imputation Strategy"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3",children:[{id:"raw",label:"1. Raw Data",desc:"Show original NaN values as is",code:"df"},{id:"dropna_any",label:"2. dropna()",desc:"Drop rows with ANY NaN (how='any')",code:"df.dropna()"},{id:"dropna_marks",label:"3. dropna(subset)",desc:"Drop only if Math/Sci missing",code:"df.dropna(subset=['Math','Sci'])"},{id:"fillna_stats",label:"4. fillna(Stats)",desc:"Impute Mean, Median & 0",code:"df.fillna({'Math': mean, ...})"},{id:"ffill",label:"5. ffill()",desc:"Forward fill previous valid value",code:"df.ffill()"}].map(n=>e.jsxs("button",{onClick:()=>y(n.id),className:`p-3 rounded-xl text-left border transition-all ${o===n.id?"bg-amber-950/60 border-amber-500 text-white shadow-lg shadow-amber-500/10":"bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-amber-300",children:n.label}),e.jsx("div",{className:"text-xs text-slate-300 mt-1",children:n.desc}),e.jsx("code",{className:"text-[11px] text-teal-400 font-mono block mt-2",children:n.code})]},n.id))})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Cleaned DataFrame Output (",g.length," rows remaining)"]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Strategy: ",e.jsx("span",{className:"text-amber-300",children:o})]})]}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80",children:[e.jsx("th",{className:"p-3 text-slate-400 font-mono",children:"Index"}),e.jsx("th",{className:"p-3 text-teal-300 font-semibold",children:"StudentID"}),e.jsx("th",{className:"p-3 text-teal-300 font-semibold",children:"Name"}),e.jsx("th",{className:"p-3 text-amber-300 font-semibold",children:"Locality"}),e.jsx("th",{className:"p-3 text-cyan-300 font-semibold",children:"Math Score"}),e.jsx("th",{className:"p-3 text-cyan-300 font-semibold",children:"Science Score"}),e.jsx("th",{className:"p-3 text-purple-300 font-semibold",children:"Scholarship (₹)"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:g.map((n,t)=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-slate-500",children:t}),e.jsx("td",{className:"p-3 text-white font-bold",children:n.id}),e.jsx("td",{className:"p-3 text-slate-200 font-sans",children:n.name}),e.jsx("td",{className:"p-3 font-sans",children:n.locality===null?e.jsx("span",{className:"px-2 py-0.5 rounded text-xs bg-rose-950/80 text-rose-400 border border-rose-800 font-mono",children:"NaN"}):n.locality==="Not Specified"?e.jsx("span",{className:"text-amber-400 italic font-sans",children:n.locality}):e.jsx("span",{className:"text-slate-300 font-sans",children:n.locality})}),e.jsx("td",{className:"p-3",children:n.math===null?e.jsx("span",{className:"px-2 py-0.5 rounded text-xs bg-rose-950/80 text-rose-400 border border-rose-800",children:"NaN"}):e.jsx("span",{className:o==="fillna_stats"&&s.find(l=>l.id===n.id)?.math===null?"text-emerald-400 font-bold":"text-cyan-300",children:n.math})}),e.jsx("td",{className:"p-3",children:n.sci===null?e.jsx("span",{className:"px-2 py-0.5 rounded text-xs bg-rose-950/80 text-rose-400 border border-rose-800",children:"NaN"}):e.jsx("span",{className:o==="fillna_stats"&&s.find(l=>l.id===n.id)?.sci===null?"text-emerald-400 font-bold":"text-cyan-300",children:n.sci})}),e.jsx("td",{className:"p-3",children:n.scholarship===null?e.jsx("span",{className:"px-2 py-0.5 rounded text-xs bg-rose-950/80 text-rose-400 border border-rose-800",children:"NaN"}):e.jsxs("span",{className:o==="fillna_stats"&&s.find(l=>l.id===n.id)?.scholarship===null?"text-purple-400 italic":"text-purple-300",children:["₹",n.scholarship]})})]},n.id))})]})]}),e.jsx(I,{topic:"Machine Learning Missing Data & Leakage Safeguards",text:"In machine learning preprocessing, missing data handling is the most frequent source of silent failure! Always check df.isna().sum() first. If you drop rows blindly with dropna(), you might discard 40% of your training examples. If you impute with mean/median, make sure you compute that statistic SOLELY from the training partition to avoid data leakage into validation/test splits!"})]}),i==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:m.map(n=>e.jsxs("button",{onClick:()=>S(n.id),className:`p-4 rounded-xl text-left border transition-all ${p===n.id?"bg-amber-950/60 border-amber-500 text-white shadow-lg shadow-amber-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-amber-400 uppercase tracking-wider mb-1",children:n.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:n.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:n.summary})]},n.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:c.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:c.summary})]})}),e.jsx(v,{fileModule:c.code,title:c.fileName})]})]}),i==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(j,{text:D,title:"Topic 11 Revision Notes: Missing Values in Pandas"})}),i==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(M,{questions:w,title:"Topic 11 Knowledge Check: Handling Missing Values"})})]})})};export{B as default};
