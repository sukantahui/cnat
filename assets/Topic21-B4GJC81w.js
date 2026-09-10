import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as y}from"./PythonFileLoader-CiS1GfkF.js";import{F as f}from"./FAQTemplate-D_90hN4m.js";import{P as S}from"./PlainTextPrint-yt10TRX1.js";import{T as _}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const N=`"""\r
==============================================================================\r
Topic 21: Worked Example 2 - Handling Missing Salary Values\r
Script 01: Profiling Missing Payroll Data & Cohort Null Rates\r
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
# Employee Payroll Dataset from Coder & AccoTax clients in Barrackpore industrial belt\r
payroll_data = {\r
    "EmpID": [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Aniket", "Priyanka", "Sourav"],\r
    "Department": ["Engineering", "Engineering", "Sales", "HR", "Sales", "Engineering", "HR", "Engineering", "Sales", "HR"],\r
    "Experience_Yrs": [2, 5, 1, 4, 3, 6, 2, 8, 4, 1],\r
    "Base_Salary": [55000.0, 85000.0, np.nan, 52000.0, 48000.0, 92000.0, np.nan, 120000.0, np.nan, 42000.0],\r
    "Bonus_Pct": [10.0, 15.0, 8.0, 5.0, 12.0, 15.0, 5.0, 20.0, 10.0, 5.0]\r
}\r
\r
df = pd.DataFrame(payroll_data)\r
section("1. RAW PAYROLL RECORDS (NOTICE NaN IN BASE_SALARY)")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Null Count & Percentage Audit\r
# --------------------------------------------------------------------------\r
section("2. OVERALL NULL AUDIT")\r
null_counts = df.isna().sum()\r
null_pct = (df.isna().mean() * 100).round(1)\r
print(pd.DataFrame({"Missing_Count": null_counts, "Missing_Pct(%)": null_pct}))\r
\r
# --------------------------------------------------------------------------\r
# 2. Missing Salary Rates by Department\r
# --------------------------------------------------------------------------\r
section("3. MISSING SALARY RATES PER DEPARTMENT")\r
dept_null_rates = df.groupby("Department")["Base_Salary"].apply(lambda s: s.isna().mean() * 100).round(1)\r
print("Department-wise Missing Salary Percentage (%):")\r
print(dept_null_rates)\r
\r
# --------------------------------------------------------------------------\r
# 3. Isolating Affected Records\r
# --------------------------------------------------------------------------\r
section("4. AFFECTED EMPLOYEES WITH MISSING SALARIES")\r
missing_records = df[df["Base_Salary"].isna()]\r
print(missing_records[["EmpID", "Name", "Department", "Experience_Yrs", "Bonus_Pct"]])\r
`,w=`"""\r
==============================================================================\r
Topic 21: Worked Example 2 - Handling Missing Salary Values\r
Script 02: Evaluating Imputation: Global Mean vs Median vs Group Median\r
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
payroll_data = {\r
    "EmpID": [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Aniket", "Priyanka", "Sourav"],\r
    "Department": ["Engineering", "Engineering", "Sales", "HR", "Sales", "Engineering", "HR", "Engineering", "Sales", "HR"],\r
    "Experience_Yrs": [2, 5, 1, 4, 3, 6, 2, 8, 4, 1],\r
    "Base_Salary": [55000.0, 85000.0, np.nan, 52000.0, 48000.0, 92000.0, np.nan, 120000.0, np.nan, 42000.0]\r
}\r
\r
df = pd.DataFrame(payroll_data)\r
\r
# --------------------------------------------------------------------------\r
# Strategy 1: Global Mean (Distorted by High Engineering Salaries)\r
# --------------------------------------------------------------------------\r
global_mean = df["Base_Salary"].mean()\r
df_mean = df.copy()\r
df_mean["Salary_GlobalMean"] = df_mean["Base_Salary"].fillna(global_mean)\r
\r
# --------------------------------------------------------------------------\r
# Strategy 2: Global Median (Resistant to Extreme Outliers)\r
# --------------------------------------------------------------------------\r
global_median = df["Base_Salary"].median()\r
df_median = df.copy()\r
df_median["Salary_GlobalMedian"] = df_median["Base_Salary"].fillna(global_median)\r
\r
# --------------------------------------------------------------------------\r
# Strategy 3: Department-Specific Group Median (Best Practice)\r
# --------------------------------------------------------------------------\r
df_dept = df.copy()\r
dept_medians = df_dept.groupby("Department")["Base_Salary"].transform("median")\r
df_dept["Salary_DeptMedian"] = df_dept["Base_Salary"].fillna(dept_medians)\r
\r
# Compare the three strategies on the missing records (Swadeep, Abhronila, Priyanka)\r
section("STRATEGY COMPARISON ON MISSING EMPLOYEES")\r
comparison = pd.DataFrame({\r
    "Name": df["Name"],\r
    "Dept": df["Department"],\r
    "Raw_Salary": df["Base_Salary"],\r
    "Global_Mean (₹70.5k)": df_mean["Salary_GlobalMean"].round(0),\r
    "Global_Median (₹55k)": df_median["Salary_GlobalMedian"],\r
    "Dept_Median (Targeted)": df_dept["Salary_DeptMedian"]\r
})\r
\r
print(comparison[comparison["Raw_Salary"].isna()])\r
print("\\n=> Notice how Dept_Median accurately assigns ~₹48,000 to Sales (Swadeep/Priyanka) and ₹47,000 to HR (Abhronila), avoiding unfair inflation by Engineering salaries!")\r
`,v=`"""\r
==============================================================================\r
Topic 21: Worked Example 2 - Handling Missing Salary Values\r
Script 03: Complete ML Preprocessing Pipeline with Missing Indicator Flag\r
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
payroll_data = {\r
    "EmpID": [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila", "Aniket", "Priyanka", "Sourav"],\r
    "Department": ["Engineering", "Engineering", "Sales", "HR", "Sales", "Engineering", "HR", "Engineering", "Sales", "HR"],\r
    "Experience_Yrs": [2, 5, 1, 4, 3, 6, 2, 8, 4, 1],\r
    "Base_Salary": [55000.0, 85000.0, np.nan, 52000.0, 48000.0, 92000.0, np.nan, 120000.0, np.nan, 42000.0],\r
    "Bonus_Pct": [10.0, 15.0, 8.0, 5.0, 12.0, 15.0, 5.0, 20.0, 10.0, 5.0]\r
}\r
\r
df = pd.DataFrame(payroll_data)\r
\r
# --------------------------------------------------------------------------\r
# 1. Adding Missing Indicator Feature (Crucial for Machine Learning!)\r
# --------------------------------------------------------------------------\r
section("1. ADDING 'Salary_Was_Missing' BOOLEAN INDICATOR")\r
# Preserves the statistical signal that data was missing prior to imputation\r
df["Salary_Was_Missing"] = df["Base_Salary"].isna().astype(int)\r
\r
# --------------------------------------------------------------------------\r
# 2. Executing Department-Specific Group Median Imputation\r
# --------------------------------------------------------------------------\r
section("2. PERFORMING GROUP-MEDIAN IMPUTATION")\r
dept_salary_medians = df.groupby("Department")["Base_Salary"].transform("median")\r
df["Cleaned_Salary"] = df["Base_Salary"].fillna(dept_salary_medians)\r
\r
# --------------------------------------------------------------------------\r
# 3. Deriving Annual Total Compensation Feature\r
# --------------------------------------------------------------------------\r
section("3. DERIVING TOTAL ANNUAL COMPENSATION")\r
df["Total_Compensation"] = df["Cleaned_Salary"] * (1 + df["Bonus_Pct"] / 100.0)\r
\r
print(df[["EmpID", "Name", "Department", "Cleaned_Salary", "Salary_Was_Missing", "Total_Compensation"]])\r
\r
# --------------------------------------------------------------------------\r
# 4. Final Quality Verification\r
# --------------------------------------------------------------------------\r
section("4. FINAL VERIFICATION (ZERO REMAINING NULLS)")\r
print(f"Remaining nulls in Cleaned_Salary: {df['Cleaned_Salary'].isna().sum()}")\r
`,E=`==============================================================================\r
TOPIC 21 NOTE: WORKED EXAMPLE 2 - HANDLING MISSING SALARY VALUES\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
\r
1. WHY SALARY IMPUTATION IS DECEPTIVELY TRICKY:\r
   --------------------------------------------------------------------------\r
   - Salaries are heavily right-skewed and cluster strongly around role / department cohorts.\r
   - Global Mean Imputation is dangerous: High executive or engineering salaries pull the overall mean upwards, distorting junior or non-technical role estimates.\r
   - Global Median is better, but still ignores distinct pay scales between departments (e.g., Engineering vs Sales vs HR).\r
   - Group-Specific Median (\`df.groupby('Department')['Salary'].transform('median')\`) is the industrial gold standard.\r
\r
2. THE MISSING INDICATOR BEST PRACTICE (MissingIndicator):\r
   --------------------------------------------------------------------------\r
   - In machine learning, the FACT that a salary value was missing often contains strong predictive signal (e.g. consultants might withhold salary data, or junior interns might have unrecorded compensation).\r
   - Always create a binary flag:\r
     \`df['Salary_Was_Missing'] = df['Salary'].isna().astype(int)\`\r
   - This allows ML models to learn separate weight vectors for imputed records vs organic records.\r
\r
3. PREVENTING DATA LEAKAGE IN TRAIN/TEST SPLITS:\r
   --------------------------------------------------------------------------\r
   - Golden Rule: Never compute medians across the combined whole dataset before splitting!\r
   - Step 1: Split into \`X_train\` and \`X_test\`.\r
   - Step 2: Compute group medians SOLELY on \`X_train\`.\r
   - Step 3: Impute both \`X_train\` and \`X_test\` using the learned \`X_train\` lookup dictionary.\r
`,c=[{id:1,question:"Why is imputing missing salaries with the global mean generally bad practice in tabular machine learning?",options:["Salaries are right-skewed with high earners inflating the mean, causing underpaid roles to be severely over-imputed","The mean cannot be computed on floating-point numbers","Global mean deletion removes 90% of rows automatically","Scikit-learn crashes when encountering mean values"],correctAnswer:"Salaries are right-skewed with high earners inflating the mean, causing underpaid roles to be severely over-imputed",explanation:"Salary distributions are almost always positively skewed. High executive and senior developer salaries artificially inflate the global mean, leading to inaccurate imputations for junior and administrative roles."},{id:2,question:"How do you impute missing 'Salary' values with the median salary of each student's specific 'Department'?",options:["df['Salary'] = df['Salary'].fillna(df.groupby('Department')['Salary'].transform('median'))","df['Salary'].fillna(df['Salary'].mean(), by='Department')","df.groupby('Department').impute_median('Salary')","df['Salary'] = df.median(group='Department')"],correctAnswer:"df['Salary'] = df['Salary'].fillna(df.groupby('Department')['Salary'].transform('median'))",explanation:"groupby().transform('median') broadcasts the cohort median back across every original row, which fillna() uses to cleanly impute missing entries per department."},{id:3,question:"What is the primary benefit of creating a binary indicator column like df['Salary_Was_Missing'] = df['Salary'].isna().astype(int)?",options:["It allows ML algorithms to learn whether the absence of data itself contains predictive signal","It prevents Pandas from using memory","It replaces NaN with string characters","It deletes duplicate columns"],correctAnswer:"It allows ML algorithms to learn whether the absence of data itself contains predictive signal",explanation:"Adding a missing indicator flag preserves the statistical signal of missingness, enabling machine learning models to differentiate between true observed values and imputed approximations."},{id:4,question:"To prevent Data Leakage during train-test splitting, where should group salary medians be calculated?",options:["Solely on the Training set (X_train), and then applied to both X_train and X_test","Solely on the Test set (X_test)","Across the combined whole dataset before splitting","On randomly generated numbers"],correctAnswer:"Solely on the Training set (X_train), and then applied to both X_train and X_test",explanation:"To avoid data leakage, all imputation parameters (mean, median, mode) must be estimated exclusively from the training partition and then applied blindly to the test partition."},{id:5,question:"What is the difference between df.dropna(subset=['Salary']) and df.fillna({'Salary': 50000})?",options:["dropna() permanently deletes rows with missing salary, while fillna() replaces NaNs with 50,000 without deleting any rows","dropna() is 100x slower than fillna()","fillna() converts the DataFrame to a NumPy array","dropna() only works on CSV files"],correctAnswer:"dropna() permanently deletes rows with missing salary, while fillna() replaces NaNs with 50,000 without deleting any rows",explanation:"dropna(subset=['Salary']) discards all rows containing null salaries, whereas fillna() substitutes a replacement value without losing sample size."}],o=[{id:"part1",fileName:"01_detect_profile_salary_nulls.py",title:"1. Missing Salary Profiling & Cohort Rates",badge:"Null Audit & Subsets",code:N,summary:"Audit missing base salary rates across departments and isolate affected employee records in the corporate payroll dataset."},{id:"part2",fileName:"02_evaluate_imputation_strategies.py",title:"2. Global Mean vs Median vs Group Median",badge:"Imputation Comparison",code:w,summary:"Evaluate the skewness risk of global mean imputation and test department-specific median imputation using groupby().transform()."},{id:"part3",fileName:"03_imputation_pipeline_and_audit.py",title:"3. ML Imputation Pipeline & Missing Indicator",badge:"MissingIndicator & Pipeline",code:v,summary:"Construct a robust production pipeline with binary missing indicator features (Salary_Was_Missing) and derived compensation metrics."}],M=[{id:1001,name:"Debangshu",dept:"Engineering",exp:2,salary:55e3,bonus:10},{id:1002,name:"Susmita",dept:"Engineering",exp:5,salary:85e3,bonus:15},{id:1003,name:"Swadeep",dept:"Sales",exp:1,salary:null,bonus:8},{id:1004,name:"Tuhina",dept:"HR",exp:4,salary:52e3,bonus:5},{id:1005,name:"Sachin",dept:"Sales",exp:3,salary:48e3,bonus:12},{id:1006,name:"Mahima",dept:"Engineering",exp:6,salary:92e3,bonus:15},{id:1007,name:"Abhronila",dept:"HR",exp:2,salary:null,bonus:5},{id:1008,name:"Aniket",dept:"Engineering",exp:8,salary:12e4,bonus:20},{id:1009,name:"Priyanka",dept:"Sales",exp:4,salary:null,bonus:10},{id:1010,name:"Sourav",dept:"HR",exp:1,salary:42e3,bonus:5}],A={Engineering:88500,Sales:48e3,HR:47e3},I=70571,j=55e3,H=()=>{const[n,s]=l.useState("salary_studio"),[m,u]=l.useState("part1"),[t,h]=l.useState("group_median"),[d,g]=l.useState(!0),i=o.find(a=>a.id===m)||o[0],x=M.map(a=>{const p=a.salary===null;let r=a.salary;p&&(t==="global_mean"?r=I:t==="global_median"?r=j:t==="group_median"&&(r=A[a.dept]));const b=r!==null?Math.round(r*(1+a.bonus/100)):null;return{...a,isMissing:p,imputedSalary:r,totalComp:b}});return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-emerald-900/40 via-teal-900/30 to-slate-900/60 border border-emerald-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full",children:"Worked Case Study 2"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 21"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Worked Example 2: Handling Missing Salary Values"}),e.jsx("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:"Solve real-world corporate payroll missing data challenges. Compare global mean versus cohort-specific median imputation, avoid wage distortion, and build missing indicator features for ML estimators."})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-emerald-500/20",children:"₹ NaN"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>s("salary_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${n==="salary_studio"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"💼 Salary Imputation Studio"}),e.jsxs("button",{onClick:()=>s("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${n==="python_code"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",o.length," Scripts)"]}),e.jsx("button",{onClick:()=>s("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${n==="theory_notes"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>s("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${n==="quiz"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",c.length,")"]})]}),n==="salary_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Choose Imputation Strategy for Base_Salary"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:[{id:"raw",title:"1. Raw Records",desc:"Show original missing NaNs as is",val:"3 NaNs present"},{id:"global_mean",title:"2. Global Mean",desc:"df['Salary'].fillna(df['Salary'].mean())",val:"₹70,571 (Distorted by Eng)"},{id:"global_median",title:"3. Global Median",desc:"df['Salary'].fillna(df['Salary'].median())",val:"₹55,000 (General)"},{id:"group_median",title:"4. Group Median (Best)",desc:"df.groupby('Dept')['Salary'].transform('median')",val:"Eng: ₹88.5k | Sales: ₹48k | HR: ₹47k"}].map(a=>e.jsxs("button",{onClick:()=>h(a.id),className:`p-3.5 rounded-xl text-left border transition-all ${t===a.id?"bg-emerald-950/60 border-emerald-500 text-white shadow-lg shadow-emerald-500/10":"bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-emerald-300",children:a.title}),e.jsx("div",{className:"text-[11px] text-slate-300 mt-1 font-mono truncate",children:a.desc}),e.jsx("div",{className:"text-[11px] font-mono text-teal-400 mt-2",children:a.val})]},a.id))}),e.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800 flex items-center justify-between",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-xs text-slate-300",children:[e.jsx("input",{type:"checkbox",checked:d,onChange:a=>g(a.target.checked),className:"w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-800 border-slate-700"}),e.jsxs("span",{children:["Include ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Salary_Was_Missing"})," Boolean Feature (ML Best Practice)"]})]}),e.jsxs("span",{className:"text-xs font-mono text-slate-500",children:["Active Strategy: ",e.jsx("span",{className:"text-emerald-400 font-bold",children:t})]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl overflow-x-auto",children:[e.jsx("div",{className:"flex items-center justify-between mb-4",children:e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Cleaned Payroll Table (10 Employees)"]})}),e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/80 font-mono",children:[e.jsx("th",{className:"p-3 text-slate-400",children:"EmpID"}),e.jsx("th",{className:"p-3 text-teal-300",children:"Name"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Department"}),e.jsx("th",{className:"p-3 text-slate-300",children:"Experience"}),e.jsx("th",{className:"p-3 text-emerald-300 font-bold bg-emerald-950/20",children:"Base Salary (₹)"}),d&&e.jsx("th",{className:"p-3 text-amber-300 font-mono font-bold bg-amber-950/20",children:"Salary_Was_Missing"}),e.jsx("th",{className:"p-3 text-purple-300 font-bold",children:"Total Compensation"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:x.map(a=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsx("td",{className:"p-3 text-slate-400",children:a.id}),e.jsx("td",{className:"p-3 text-white font-sans font-semibold",children:a.name}),e.jsx("td",{className:"p-3 text-cyan-300 font-sans",children:a.dept}),e.jsxs("td",{className:"p-3 text-slate-300",children:[a.exp," yrs"]}),e.jsx("td",{className:"p-3",children:a.isMissing?t==="raw"?e.jsx("span",{className:"px-2 py-0.5 rounded text-xs bg-rose-950/80 text-rose-400 border border-rose-800",children:"NaN (Missing)"}):e.jsxs("span",{className:"px-2 py-0.5 rounded text-xs bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 font-bold",children:["₹",a.imputedSalary.toLocaleString()," (Imputed)"]}):e.jsxs("span",{className:"text-slate-200",children:["₹",a.salary.toLocaleString()]})}),d&&e.jsx("td",{className:"p-3 bg-amber-950/10",children:e.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-bold ${a.isMissing?"bg-amber-600/30 text-amber-300 border border-amber-500/40":"bg-slate-800 text-slate-400"}`,children:a.isMissing?"1 (True)":"0"})}),e.jsx("td",{className:"p-3 text-purple-300 font-bold",children:a.totalComp!==null?`₹${a.totalComp.toLocaleString()}`:"—"})]},a.id))})]})]}),e.jsx(_,{topic:"Why Cohort Median Trumps Global Mean in Salary Imputation",text:"Look at Swadeep (Sales) and Abhronila (HR). Imputing them with the global mean of ₹70,571 would give a Sales junior an unrealistic wage boosted by Engineering team salaries! By applying df.groupby('Department')['Salary'].transform('median'), Swadeep receives ₹48,000 and Abhronila receives ₹47,000—perfectly matching their peer cohorts. Adding the Salary_Was_Missing flag ensures machine learning algorithms preserve data provenance!"})]}),n==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:o.map(a=>e.jsxs("button",{onClick:()=>u(a.id),className:`p-4 rounded-xl text-left border transition-all ${m===a.id?"bg-emerald-950/60 border-emerald-500 text-white shadow-lg shadow-emerald-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1",children:a.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:a.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:a.summary})]},a.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:i.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:i.summary})]})}),e.jsx(y,{fileModule:i.code,title:i.fileName})]})]}),n==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(S,{text:E,title:"Topic 21 Revision Notes: Worked Example 2"})}),n==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(f,{questions:c,title:"Topic 21 Knowledge Check: Worked Example 2"})})]})})};export{H as default};
