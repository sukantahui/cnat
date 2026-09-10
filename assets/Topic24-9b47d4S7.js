import{b as c,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as _}from"./PythonFileLoader-CiS1GfkF.js";import{F as S}from"./FAQTemplate-D_90hN4m.js";import{P as N}from"./PlainTextPrint-yt10TRX1.js";import{T as w}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const C=`"""\r
==============================================================================\r
Topic 24: Worked Example 5 - Filtering & Exporting Cleaned Data\r
Script 01: Raw Ingestion, Header Standardization & Data Cleaning\r
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
# Raw Messy Input Data (Inconsistent headers, whitespace, missing values)\r
raw_input = {\r
    "  STUDENT ID  ": [101, 102, 103, 104, 105, 106, 107, 108],\r
    "Candidate Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu"],\r
    "Locality / Town": ["Barrackpore", "Shyamnagar", np.nan, "Naihati", "Kolkata", "Barrackpore", "Titagarh", "Barrackpore"],\r
    "Department ": ["CSE", "CSE", "Commerce", "Science", "Commerce", "CSE", "Science", "Commerce"],\r
    "Math (Score/100)": [85.0, 92.0, np.nan, 88.0, 78.0, 90.0, 84.0, 80.0],\r
    "Science (Score/100)": [90.0, 95.0, 70.0, 85.0, 80.0, 92.0, 88.0, 82.0],\r
    "Attendance Rate (%)": [92.5, 96.0, 78.5, 88.0, 82.0, 94.5, 89.0, 85.0]\r
}\r
\r
df = pd.DataFrame(raw_input)\r
section("1. RAW DIRTY DATAFRAME")\r
print(df)\r
print("\\nRaw Columns:", df.columns.tolist())\r
\r
# --------------------------------------------------------------------------\r
# 1. Standardizing Column Headers to snake_case\r
# --------------------------------------------------------------------------\r
section("2. STANDARDIZING HEADERS TO snake_case")\r
df.columns = (\r
    df.columns\r
    .str.strip()\r
    .str.lower()\r
    .str.replace(" ", "_")\r
    .str.replace("/", "_")\r
    .str.replace("(", "", regex=False)\r
    .str.replace(")", "", regex=False)\r
    .str.replace("%", "pct", regex=False)\r
)\r
\r
print("Clean Standardized Columns:")\r
print(df.columns.tolist())\r
\r
# --------------------------------------------------------------------------\r
# 2. Imputing Missing Values Cleanly\r
# --------------------------------------------------------------------------\r
section("3. MISSING VALUE IMPUTATION")\r
df["locality_town"] = df["locality_town"].fillna("Not Specified")\r
df["math_score_100"] = df["math_score_100"].fillna(df["math_score_100"].median())\r
\r
print(df.head())\r
`,v=`"""\r
==============================================================================\r
Topic 24: Worked Example 5 - Filtering & Exporting Cleaned Data\r
Script 02: Vectorized Feature Engineering & Multi-Criteria Filtering\r
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
clean_data = {\r
    "student_id": [101, 102, 103, 104, 105, 106, 107, 108],\r
    "candidate_name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu"],\r
    "locality_town": ["Barrackpore", "Shyamnagar", "Not Specified", "Naihati", "Kolkata", "Barrackpore", "Titagarh", "Barrackpore"],\r
    "department": ["CSE", "CSE", "Commerce", "Science", "Commerce", "CSE", "Science", "Commerce"],\r
    "math_score": [85.0, 92.0, 85.0, 88.0, 78.0, 90.0, 84.0, 80.0],\r
    "science_score": [90.0, 95.0, 70.0, 85.0, 80.0, 92.0, 88.0, 82.0],\r
    "attendance_pct": [92.5, 96.0, 78.5, 88.0, 82.0, 94.5, 89.0, 85.0]\r
}\r
\r
df = pd.DataFrame(clean_data)\r
\r
# --------------------------------------------------------------------------\r
# 1. Feature Engineering: Total Score, Percentage & Distinction Flag\r
# --------------------------------------------------------------------------\r
section("1. VECTORIZED FEATURE ENGINEERING")\r
df["total_score"] = df["math_score"] + df["science_score"]\r
df["percentage"] = (df["total_score"] / 2.0).round(1)\r
df["is_merit_scholar"] = np.where((df["percentage"] >= 88.0) & (df["attendance_pct"] >= 90.0), 1, 0)\r
\r
print(df[["student_id", "candidate_name", "total_score", "percentage", "is_merit_scholar"]])\r
\r
# --------------------------------------------------------------------------\r
# 2. Multi-Criteria Boolean Filtering for ML Eligibility\r
# --------------------------------------------------------------------------\r
section("2. FILTERING ELIGIBLE CANDIDATES (Percentage >= 80% & Attendance >= 80%)")\r
# Condition: Student must have Percentage >= 80 AND Attendance >= 80\r
filter_mask = (df["percentage"] >= 80.0) & (df["attendance_pct"] >= 80.0)\r
df_eligible = df[filter_mask].sort_values(by="percentage", ascending=False).reset_index(drop=True)\r
\r
print(f"Total Eligible Candidates: {len(df_eligible)} of {len(df)}")\r
print(df_eligible[["student_id", "candidate_name", "department", "percentage", "is_merit_scholar"]])\r
`,y=`"""\r
==============================================================================\r
Topic 24: Worked Example 5 - Filtering & Exporting Cleaned Data\r
Script 03: Complete Production Pipeline & Multi-Format Data Export\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
"""\r
\r
import pandas as pd\r
import numpy as np\r
import io\r
\r
def section(title):\r
    print("\\n" + "=" * 75)\r
    print(f"  {title}")\r
    print("=" * 75)\r
\r
# Raw Dirty Input Data\r
raw_input = {\r
    "STUDENT ID": [101, 102, 103, 104, 105, 106, 107, 108],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Debangshu"],\r
    "Department": ["CSE", "CSE", "Commerce", "Science", "Commerce", "CSE", "Science", "Commerce"],\r
    "Math": [85.0, 92.0, np.nan, 88.0, 78.0, 90.0, 84.0, 80.0],\r
    "Science": [90.0, 95.0, 70.0, 85.0, 80.0, 92.0, 88.0, 82.0],\r
    "Attendance": [92.5, 96.0, 78.5, 88.0, 82.0, 94.5, 89.0, 85.0]\r
}\r
\r
# --------------------------------------------------------------------------\r
# 1. Complete Fluent Data Pipeline Function\r
# --------------------------------------------------------------------------\r
section("1. EXECUTING FULL DATA PREPARATION PIPELINE")\r
\r
def clean_and_prepare_dataset(data_dict):\r
    df = pd.DataFrame(data_dict)\r
    \r
    # 1. Standardize columns\r
    df.columns = df.columns.str.strip().str.lower().str.replace(" ", "_")\r
    \r
    # 2. Impute missing math scores with median\r
    df["math"] = df["math"].fillna(df["math"].median())\r
    \r
    # 3. Engineer features with .assign()\r
    df = df.assign(\r
        total_score=lambda x: x["math"] + x["science"],\r
        percentage=lambda x: (x["total_score"] / 2.0).round(1),\r
        is_merit=lambda x: np.where((x["percentage"] >= 88.0) & (x["attendance"] >= 90.0), 1, 0)\r
    )\r
    \r
    # 4. Filter high-performing cohort (percentage >= 80 and attendance >= 80)\r
    df_clean = (\r
        df.query("percentage >= 80.0 and attendance >= 80.0")\r
        .sort_values(by="percentage", ascending=False)\r
        .reset_index(drop=True)\r
    )\r
    \r
    return df_clean\r
\r
cleaned_df = clean_and_prepare_dataset(raw_input)\r
print("Clean Pipeline Output DataFrame:")\r
print(cleaned_df)\r
\r
# --------------------------------------------------------------------------\r
# 2. Exporting to Standard CSV & Compressed GZIP Formats\r
# --------------------------------------------------------------------------\r
section("2. MULTI-FORMAT EXPORT COMMANDS")\r
print("Standard CSV (ML Training Ready):")\r
print("cleaned_df.to_csv('cleaned_student_features.csv', index=False, encoding='utf-8')")\r
\r
print("\\nGZIP Compressed CSV (Archival & Cloud Storage):")\r
print("cleaned_df.to_csv('cleaned_student_features.csv.gz', index=False, compression='gzip')")\r
\r
# Previewing live in-memory CSV string\r
csv_preview = io.StringIO()\r
cleaned_df.to_csv(csv_preview, index=False)\r
print("\\nGenerated CSV File Contents Preview:")\r
print(csv_preview.getvalue().strip())\r
`,T=`==============================================================================\r
TOPIC 24 NOTE: WORKED EXAMPLE 5 - FILTERING & EXPORTING CLEANED DATA\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
\r
1. END-TO-END DATA ENGINEERING WORKFLOW:\r
   --------------------------------------------------------------------------\r
   Stage 1: Ingestion & Schema Normalization:\r
            - Strip column whitespace: \`df.columns.str.strip().str.lower().str.replace(' ', '_')\`.\r
   \r
   Stage 2: Imputation & Integrity:\r
            - Impute missing numerical fields with cohort statistics (\`fillna()\`).\r
   \r
   Stage 3: Vectorized Feature Engineering:\r
            - Create derived columns using SIMD arithmetic:\r
              \`df['total_score'] = df['math'] + df['science']\`\r
              \`df['is_merit'] = np.where((df['percentage'] >= 88) & (df['attendance'] >= 90), 1, 0)\`\r
   \r
   Stage 4: Multi-Criteria Quality Filtering:\r
            - Extract high-quality training instances:\r
              \`df_clean = df.query('percentage >= 80 and attendance >= 80').reset_index(drop=True)\`\r
   \r
   Stage 5: Production Export:\r
            - Clean CSV export: \`df_clean.to_csv('cleaned_data.csv', index=False, encoding='utf-8')\`\r
            - Compressed cloud export: \`df_clean.to_csv('cleaned_data.csv.gz', index=False, compression='gzip')\`\r
\r
2. PRODUCTION ML BEST PRACTICES:\r
   --------------------------------------------------------------------------\r
   - Package data preparation logic inside pure functions (\`def clean_and_prepare_dataset(df): ...\`) so the exact same preprocessing pipeline can be applied to both historical training datasets and future real-time inference batches without code duplication!\r
`,u=[{id:1,question:"Why is it best practice to encapsulate the entire data cleaning and feature engineering workflow inside a reusable Python function?",options:["To ensure identical, reproducible preprocessing is applied to both the training data and incoming future inference batches","To bypass Python memory management","To avoid importing Pandas","To delete rows automatically"],correctAnswer:"To ensure identical, reproducible preprocessing is applied to both the training data and incoming future inference batches",explanation:"Encapsulating ETL logic in a reusable function ensures that the exact same feature engineering transformations, column scalings, and imputation steps are applied consistently across training, testing, and production scoring."},{id:2,question:"Which of the following creates a boolean indicator 'is_eligible' where 'percentage' >= 85 AND 'attendance' >= 90 using NumPy?",options:["np.where((df['percentage'] >= 85) & (df['attendance'] >= 90), 1, 0)","if df['percentage'] >= 85 and df['attendance'] >= 90: return 1","df.where(percentage >= 85 and attendance >= 90)","np.select_if(df['percentage'] >= 85, df['attendance'] >= 90)"],correctAnswer:"np.where((df['percentage'] >= 85) & (df['attendance'] >= 90), 1, 0)",explanation:"np.where(condition, value_if_true, value_if_false) with bitwise '&' and parenthesized terms evaluates the condition vectorized across all rows in C performance."},{id:3,question:"How do you filter a DataFrame using df.query() to keep rows with 'percentage' >= 80 and 'department' == 'CSE'?",options:[`df.query("percentage >= 80 and department == 'CSE'")`,"df.query(percentage >= 80 && department == 'CSE')",'df.where("percentage >= 80 & department == CSE")',"df.filter(percentage >= 80, department == 'CSE')"],correctAnswer:`df.query("percentage >= 80 and department == 'CSE'")`,explanation:"df.query() parses expressive boolean query strings directly, matching column names and filtering matching records."},{id:4,question:"How do you export a cleaned DataFrame directly as a compressed GZIP CSV file?",options:["df.to_csv('cleaned.csv.gz', index=False, compression='gzip')","df.to_gzip('cleaned.csv')","df.export(compress=True)","df.zip('cleaned.csv')"],correctAnswer:"df.to_csv('cleaned.csv.gz', index=False, compression='gzip')",explanation:"Specifying compression='gzip' (or naming the target file with a .gz extension) instructs df.to_csv() to stream-compress the CSV output on-the-fly."},{id:5,question:"What is the consequence of omitting .reset_index(drop=True) after filtering rows from a DataFrame?",options:["The filtered DataFrame retains non-contiguous index numbers (e.g. 0, 1, 4, 7), which can cause index-lookup bugs downstream","The DataFrame loses all column headers","All numeric values become NaN","The DataFrame becomes read-only"],correctAnswer:"The filtered DataFrame retains non-contiguous index numbers (e.g. 0, 1, 4, 7), which can cause index-lookup bugs downstream",explanation:"Filtering subsets rows while preserving their original row index positions; calling reset_index(drop=True) establishes a clean 0..N continuous index."}],o=[{id:"part1",fileName:"01_raw_data_ingestion_and_cleaning.py",title:"1. Raw Ingestion & Header Normalization",badge:"snake_case & fillna",code:C,summary:"Strip header whitespace, convert column names to standardized snake_case, and impute missing numerical and text values."},{id:"part2",fileName:"02_feature_engineering_and_filtering.py",title:"2. Feature Engineering & Multi-Criteria Filter",badge:"Features & df.query()",code:v,summary:"Derive total score, percentage, and merit scholar indicator flags, then filter high-performing cohorts using boolean masks."},{id:"part3",fileName:"03_clean_pipeline_and_multi_format_export.py",title:"3. Complete Pipeline & Multi-Format Export",badge:"to_csv(index=False) & gzip",code:y,summary:"Encapsulate the entire ETL workflow in a reusable production function and export to standard CSV and compressed GZIP formats."}],x=[{id:101,name:"Debangshu",dept:"CSE",math:85,sci:90,att:92.5},{id:102,name:"Susmita",dept:"CSE",math:92,sci:95,att:96},{id:103,name:"Swadeep",dept:"Commerce",math:null,sci:70,att:78.5},{id:104,name:"Tuhina",dept:"Science",math:88,sci:85,att:88},{id:105,name:"Sachin",dept:"Commerce",math:78,sci:80,att:82},{id:106,name:"Mahima",dept:"CSE",math:90,sci:92,att:94.5},{id:107,name:"Abhronila",dept:"Science",math:84,sci:88,att:89},{id:108,name:"Debangshu",dept:"Commerce",math:80,sci:82,att:85}],z=()=>{const[r,s]=c.useState("pipeline_studio"),[p,g]=c.useState("part1"),[n,f]=c.useState(4),i=o.find(t=>t.id===p)||o[0],m=(()=>{if(n===1)return x;const t=x.map(a=>({...a,math:a.math??85}));if(n===2)return t;const d=t.map(a=>{const l=a.math+a.sci,h=Number((l/2).toFixed(1)),b=h>=88&&a.att>=90?1:0;return{...a,total:l,pct:h,isMerit:b}});return n===3?d:d.filter(a=>a.pct>=80&&a.att>=80).sort((a,l)=>l.pct-a.pct)})();return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-teal-900/40 via-emerald-900/30 to-slate-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full",children:"Worked Case Study 5"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 24"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Worked Example 5: Filtering and Exporting Cleaned Data"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:["Build a production-grade machine learning data preprocessing pipeline. Standardize messy schema headers, impute nulls, engineer feature vectors, apply multi-criteria filtering, and export clean datasets with"," ",e.jsx("code",{className:"text-teal-300 bg-slate-800 px-1 py-0.5 rounded",children:"df.to_csv(index=False)"}),"."]})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-teal-500/20",children:"ETL ⚙️"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>s("pipeline_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="pipeline_studio"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"🏭 5-Stage Pipeline Studio"}),e.jsxs("button",{onClick:()=>s("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="python_code"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",o.length," Scripts)"]}),e.jsx("button",{onClick:()=>s("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="theory_notes"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>s("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r==="quiz"?"bg-teal-600 text-white shadow-lg shadow-teal-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",u.length,")"]})]}),r==="pipeline_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🔄"})," Interactive Pipeline Transformation Stages"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-5 gap-2",children:[{num:1,title:"1. Raw Dirty Input",sub:"Dirty headers & NaN"},{num:2,title:"2. Standardized & Imputed",sub:"snake_case & median"},{num:3,title:"3. Feature Engineering",sub:"total, pct, is_merit"},{num:4,title:"4. Multi-Filter Cohort",sub:"pct>=80 & att>=80"},{num:5,title:"5. Production Export",sub:"CSV & GZIP preview"}].map(t=>e.jsxs("button",{onClick:()=>f(t.num),className:`p-3 rounded-xl text-left border transition-all ${n===t.num?"bg-teal-950/60 border-teal-500 text-white shadow-md shadow-teal-500/20":"bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-bold text-teal-300",children:t.title}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-0.5",children:t.sub})]},t.num))}),e.jsxs("div",{className:"mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-teal-300",children:[e.jsxs("span",{className:"text-slate-500",children:["# Pipeline Transformation Step ",n,":"]}),e.jsxs("div",{className:"mt-1 font-bold",children:[n===1&&"df = pd.DataFrame(raw_input)",n===2&&"df.columns = df.columns.str.strip().str.lower().str.replace(' ', '_'); df['math'] = df['math'].fillna(df['math'].median())",n===3&&"df['total_score'] = df['math'] + df['science']; df['percentage'] = df['total_score']/2; df['is_merit'] = np.where((df['percentage']>=88)&(df['attendance']>=90), 1, 0)",n===4&&"df_clean = df.query('percentage >= 80.0 and attendance >= 80.0').sort_values('percentage', ascending=False).reset_index(drop=True)",n===5&&"df_clean.to_csv('cleaned_student_features.csv', index=False, encoding='utf-8')"]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Stage ",n," DataFrame Output (",m.length," Rows)"]}),e.jsxs("span",{className:"text-xs font-mono text-teal-400 bg-teal-950/60 px-2.5 py-1 rounded border border-teal-800",children:["Stage ",n," Active"]})]}),n===5?e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Generated Clean CSV Content Ready for Machine Learning Training:"}),e.jsx("pre",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto",children:`student_id,name,department,math,science,attendance,total_score,percentage,is_merit
102,Susmita,CSE,92.0,95.0,96.0,187.0,93.5,1
106,Mahima,CSE,90.0,92.0,94.5,182.0,91.0,1
104,Tuhina,Science,88.0,85.0,88.0,173.0,86.5,0
107,Abhronila,Science,84.0,88.0,89.0,172.0,86.0,0
101,Debangshu,CSE,85.0,90.0,92.5,175.0,87.5,0
108,Debangshu,Commerce,80.0,82.0,85.0,162.0,81.0,0`})]}):e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80",children:[e.jsx("th",{className:"p-3 text-slate-400",children:"Index"}),e.jsx("th",{className:"p-3 text-teal-300",children:n===1?"  STUDENT ID  ":"student_id"}),e.jsx("th",{className:"p-3 text-slate-300",children:n===1?"Candidate Name":"name"}),e.jsx("th",{className:"p-3 text-cyan-300",children:n===1?"Department ":"department"}),e.jsx("th",{className:"p-3 text-slate-300",children:n===1?"Math (Score/100)":"math"}),e.jsx("th",{className:"p-3 text-slate-300",children:n===1?"Science (Score/100)":"science"}),e.jsx("th",{className:"p-3 text-emerald-300",children:n===1?"Attendance Rate (%)":"attendance"}),n>=3&&e.jsxs(e.Fragment,{children:[e.jsx("th",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/20",children:"total_score"}),e.jsx("th",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/20",children:"percentage"}),e.jsx("th",{className:"p-3 text-purple-300 font-bold bg-purple-950/20",children:"is_merit"})]})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800",children:m.map((t,d)=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-slate-500",children:d}),e.jsx("td",{className:"p-3 text-white font-bold",children:t.id}),e.jsx("td",{className:"p-3 text-slate-200 font-sans",children:t.name}),e.jsx("td",{className:"p-3 text-cyan-300 font-sans",children:t.dept}),e.jsx("td",{className:"p-3",children:t.math===null?e.jsx("span",{className:"px-2 py-0.5 rounded text-xs bg-rose-950/80 text-rose-400 border border-rose-800",children:"NaN"}):e.jsx("span",{className:"text-slate-200",children:t.math})}),e.jsx("td",{className:"p-3 text-slate-200",children:t.sci}),e.jsxs("td",{className:"p-3 text-emerald-400",children:[t.att,"%"]}),n>=3&&e.jsxs(e.Fragment,{children:[e.jsx("td",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/10",children:t.total}),e.jsxs("td",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/10",children:[t.pct,"%"]}),e.jsx("td",{className:"p-3 bg-purple-950/10",children:e.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-bold ${t.isMerit===1?"bg-purple-600/30 text-purple-300 border border-purple-500/40":"bg-slate-800 text-slate-400"}`,children:t.isMerit===1?"1 (Scholar)":"0"})})]})]},t.id+t.name))})]})]}),e.jsx(w,{topic:"From Raw Logs to ML Feature Matrices",text:"This 5-stage workflow represents the standard industry data engineering lifecycle! By wrapping header normalization, statistical imputation, vectorized feature generation, and cohort filtering into a clean, reproducible Python pipeline, we transform noisy, unstructured CSVs into a pristine training matrix ready for Scikit-Learn or PyTorch!"})]}),r==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:o.map(t=>e.jsxs("button",{onClick:()=>g(t.id),className:`p-4 rounded-xl text-left border transition-all ${p===t.id?"bg-teal-950/60 border-teal-500 text-white shadow-lg shadow-teal-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-teal-400 uppercase tracking-wider mb-1",children:t.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:t.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:i.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:i.summary})]})}),e.jsx(_,{fileModule:i.code,title:i.fileName})]})]}),r==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(N,{text:T,title:"Topic 24 Revision Notes: Worked Example 5"})}),r==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(S,{questions:u,title:"Topic 24 Knowledge Check: Worked Example 5"})})]})})};export{z as default};
