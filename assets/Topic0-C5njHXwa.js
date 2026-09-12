import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as h}from"./PythonFileLoader-CiS1GfkF.js";import{F as b}from"./FAQTemplate-D_90hN4m.js";import{P as y}from"./PlainTextPrint-yt10TRX1.js";import{T as g}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const f=`"""\r
01_intro_pandas_series_dataframe.py\r
===================================\r
Topic: Introduction to Pandas: Core Data Structures (Series & DataFrame)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("INTRODUCTION TO PANDAS: 1D SERIES & 2D DATAFRAMES")\r
    print("=" * 70)\r
\r
    # 1. Why Pandas?\r
    # While NumPy provides raw N-dimensional homogeneous numeric arrays,\r
    # Pandas brings labeled, heterogeneous tabular data structures essential\r
    # for real-world Machine Learning feature engineering and ETL pipelines.\r
\r
    # 2. 1D Labeled Array: Pandas Series\r
    # Student scores in Barrackpore Machine Learning batch\r
    scores_series = pd.Series(\r
        data=[88, 94, 72, 91, 85],\r
        index=["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin"],\r
        name="Exam_Score"\r
    )\r
    print("1. Pandas Series (1D Labeled Array):")\r
    print(scores_series)\r
    print(f"   Data Type: {scores_series.dtype}, Index: {list(scores_series.index)}")\r
    print(f"   Debangshu's Score: {scores_series['Debangshu']}")\r
\r
    # 3. 2D Labeled Tabular Matrix: Pandas DataFrame\r
    data_dict = {\r
        "Student": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin"],\r
        "Locality": ["Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata"],\r
        "Study_Hours": [12.5, 15.0, 8.0, 14.5, 10.0],\r
        "Attendance_%": [92, 98, 75, 95, 84],\r
        "Passed": [True, True, True, True, True]\r
    }\r
    df_students = pd.DataFrame(data_dict)\r
\r
    print("\\n2. Pandas DataFrame (2D Heterogeneous Table):")\r
    print(df_students)\r
    print(f"\\n   Shape: {df_students.shape} (5 rows, 5 columns)")\r
    print(f"   Columns: {list(df_students.columns)}")\r
    print(f"   Data Types:\\n{df_students.dtypes}")\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`"""\r
02_pandas_vs_numpy_vs_sql.py\r
============================\r
Topic: Comparative Analysis: Python Lists vs NumPy ndarray vs Pandas vs SQL\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("COMPARISON: NUMPY NDARRAY VS PANDAS DATAFRAME")\r
    print("=" * 70)\r
\r
    # 1. NumPy: Fast Homogeneous Pure Numeric Matrices\r
    # Best for: Linear Algebra, SIMD vector math, Neural Network weights, Tensors\r
    np_matrix = np.array([\r
        [1.0, 2.5, 3.0],\r
        [4.0, 5.5, 6.0]\r
    ])\r
    print("1. NumPy ndarray (Homogeneous, Unlabeled):")\r
    print(np_matrix)\r
    print("   Type:", type(np_matrix), "Dtype:", np_matrix.dtype)\r
\r
    # 2. Pandas: Heterogeneous Labeled Tabular Data\r
    # Best for: Real-world CSV/Excel ingestion, text/categorical columns, SQL-like groupbys\r
    df = pd.DataFrame({\r
        "ID": [101, 102],\r
        "Name": ["Debangshu", "Susmita"],\r
        "Salary_INR": [45000.50, 62000.75],\r
        "Is_Active": [True, True]\r
    })\r
    print("\\n2. Pandas DataFrame (Heterogeneous, Column-Indexed):")\r
    print(df)\r
\r
    # 3. Interoperability: Seamless conversions between NumPy and Pandas\r
    # Extract underlying NumPy buffer from Pandas\r
    extracted_numpy = df[["Salary_INR"]].to_numpy()\r
    print("\\n3. Converting DataFrame Column to NumPy ndarray (df.to_numpy()):")\r
    print(extracted_numpy)\r
    print("   Extracted NumPy shape:", extracted_numpy.shape)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
03_ml_preprocessing_pipeline_preview.py\r
=======================================\r
Topic: Pandas in the Machine Learning Lifecycle (ETL to Scikit-Learn Model)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
import numpy as np\r
\r
def main():\r
    print("=" * 70)\r
    print("PANDAS IN THE ML WORKFLOW: ETL & FEATURE MATRIX EXTRACTION")\r
    print("=" * 70)\r
\r
    # 1. Raw Tabular Dataset (e.g. Loan Application or Course Enrollment)\r
    raw_data = {\r
        "Applicant": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin"],\r
        "Age": [24, 28, 22, 31, 26],\r
        "Monthly_Income_INR": [35000, 65000, 18000, 72000, 42000],\r
        "Credit_Score": [720, 790, 610, 810, 680],\r
        "Approved": [1, 1, 0, 1, 0]\r
    }\r
    df = pd.DataFrame(raw_data)\r
    print("1. Raw Labeled Tabular DataFrame:\\n", df)\r
\r
    # 2. Exploratory Overview\r
    print("\\n2. Summary Statistics (df.describe()):\\n", df.describe())\r
\r
    # 3. Separating Feature Matrix X and Target Vector y\r
    # X holds independent features (Age, Income, Credit)\r
    # y holds dependent binary target (Approved)\r
    X = df[["Age", "Monthly_Income_INR", "Credit_Score"]].to_numpy()\r
    y = df["Approved"].to_numpy()\r
\r
    print("\\n3. Extracted NumPy Feature Matrix X for ML Model:")\r
    print("   Shape:", X.shape)\r
    print(X)\r
\r
    print("\\n4. Extracted NumPy Target Vector y:")\r
    print("   Shape:", y.shape)\r
    print(y)\r
\r
if __name__ == "__main__":\r
    main()\r
`,P=`========================================================================\r
TOPIC 0 NOTE: INTRODUCTION TO PANDAS (Data Science & ML Foundations)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. WHAT IS PANDAS?\r
------------------\r
- Pandas (Python Data Analysis Library) is the premier open-source data manipulation and analysis library for Python.\r
- Built on top of NumPy, Pandas introduces intuitive, labeled 1D (Series) and 2D (DataFrame) data structures designed specifically for real-world heterogeneous tabular datasets.\r
\r
2. CORE DATA STRUCTURES\r
------------------------\r
- 1. Series (1D Labeled Homogeneous Array):\r
  A 1-dimensional array capable of holding any data type (integers, strings, floating point numbers, Python objects) with an explicit labeled index.\r
- 2. DataFrame (2D Heterogeneous Labeled Tabular Matrix):\r
  A 2-dimensional size-mutable, potentially heterogeneous tabular data structure with labeled axes (rows and columns). It is essentially a dictionary of Series sharing a common index.\r
\r
3. PANDAS VS NUMPY: KEY DIFFERENCES\r
------------------------------------\r
| Feature | NumPy ndarray | Pandas DataFrame |\r
| :--- | :--- | :--- |\r
| Primary Use | Raw numeric matrix math, linear algebra, tensors | Tabular data manipulation, cleaning, ETL, EDA |\r
| Data Types | Strictly Homogeneous (single dtype per array) | Heterogeneous (different dtype per column) |\r
| Indexing | Integer coordinate offsets (0, 1, 2) | Explicit custom row labels & column names |\r
| Missing Data | Limited NaN handling | Built-in methods (isna, fillna, dropna) |\r
| SQL Capabilities | None | groupby, merge, join, concat, pivot |\r
\r
4. PANDAS IN THE MACHINE LEARNING PIPELINE\r
------------------------------------------\r
1. Ingestion: Loading raw datasets from CSV, Excel, SQL databases, JSON, Parquet.\r
2. Exploration: Inspecting shapes, column data types, missing rates, and descriptive statistics (head, info, describe).\r
3. Data Cleaning: Handling nulls, removing duplicates, typecasting, string processing.\r
4. Feature Engineering: Creating new derived columns, one-hot encoding, date-time parsing, aggregation.\r
5. Export to Model: Extracting pure NumPy matrices X (features) and y (target) for Scikit-Learn, PyTorch, and XGBoost.\r
`,S=[{id:1,question:"What is the primary difference in data storage capability between a NumPy ndarray and a Pandas DataFrame?",options:["NumPy requires all elements to be of the exact same homogeneous data type, whereas a Pandas DataFrame can hold different data types across different columns (heterogeneous).","NumPy only stores text, while Pandas only stores numbers.","Pandas cannot store integers.","NumPy arrays are 2D only, while Pandas DataFrames are 1D only."],correctAnswer:0,explanation:"NumPy arrays are homogeneous (all elements share the same dtype like float64 or int32) for fast SIMD memory layout. Pandas DataFrames are heterogeneous tabular structures where each column can have its own data type (e.g., strings in column A, floats in column B, booleans in column C)."},{id:2,question:"What are the two primary foundational data structures in Pandas?",options:["Series (1D labeled) and DataFrame (2D labeled).","List and Tuple.","Array and Matrix.","Tensor and Scalar."],correctAnswer:0,explanation:"The two core building blocks of Pandas are Series (a 1D labeled homogeneous array) and DataFrame (a 2D tabular structure containing multiple Series sharing a common row index)."},{id:3,question:"How does Pandas integrate into a typical Machine Learning model training pipeline?",options:["Pandas replaces Python's CPU with GPU acceleration.","Pandas is used for data ingestion, cleaning, feature transformation, and exploratory analysis, after which clean features X and targets y are extracted into NumPy arrays for model training.","Pandas is only used to render 3D graphics.","Pandas directly computes neural network backpropagation gradients."],correctAnswer:1,explanation:"In machine learning workflows, Pandas handles the ETL (Extract, Transform, Load) and EDA (Exploratory Data Analysis) stages. Once features are cleaned and encoded, `.to_numpy()` or `.values` extracts raw numeric matrices for Scikit-Learn or PyTorch."},{id:4,question:"Which of the following is true regarding row indices in a Pandas Series or DataFrame?",options:["Indices must always be integers starting from 0.","Indices can be custom string labels, dates/timestamps, or custom identifiers, enabling descriptive lookups like `series['Debangshu']`.","Pandas does not support indexing.","Indices are re-randomized every time a script runs."],correctAnswer:1,explanation:"Unlike basic Python lists or raw NumPy arrays, Pandas allows explicit labels for row indices (e.g., student names, dates, customer IDs), allowing intuitive label-based access."},{id:5,question:"What underlying library powers the mathematical performance and memory management of Pandas Series and DataFrames?",options:["Django","NumPy","Flask","PyQt"],correctAnswer:1,explanation:"Pandas is built directly on top of NumPy. Each column in a Pandas DataFrame is stored internally as a contiguous 1D NumPy ndarray (or extension array in modern Pandas)."}],o=[{id:"part1",fileName:"01_intro_pandas_series_dataframe.py",title:"1. Series & DataFrame Core Structures",badge:"Core Structures",code:f,summary:"Introduces 1D labeled Series and 2D heterogeneous DataFrames using Barrackpore student batch records."},{id:"part2",fileName:"02_pandas_vs_numpy_vs_sql.py",title:"2. Pandas vs NumPy vs SQL Architecture",badge:"Comparative Analysis",code:N,summary:"Contrasts raw homogeneous NumPy ndarrays with labeled heterogeneous Pandas DataFrames and demonstrates df.to_numpy()."},{id:"part3",fileName:"03_ml_preprocessing_pipeline_preview.py",title:"3. Pandas in Machine Learning Pipelines",badge:"ML Feature Prep",code:j,summary:"Demonstrates exploratory data summaries with df.describe() and extracting clean feature matrix X and target label y."}],d=[{id:101,name:"Debangshu",locality:"Barrackpore",hours:12.5,attendance:92,passed:!0},{id:102,name:"Susmita",locality:"Shyamnagar",hours:15,attendance:98,passed:!0},{id:103,name:"Swadeep",locality:"Ichapur",hours:8,attendance:75,passed:!0},{id:104,name:"Tuhina",locality:"Naihati",hours:14.5,attendance:95,passed:!0},{id:105,name:"Sachin",locality:"Kolkata",hours:10,attendance:84,passed:!0}],L=()=>{const[r,c]=i.useState("architecture_explorer"),[l,m]=i.useState("part1"),[n,p]=i.useState("dataframe"),[t,x]=i.useState("hours"),s=o.find(a=>a.id===l)||o[0];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-teal-900/60 via-slate-900 to-indigo-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Module 009_002 • Pandas Essentials"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/40",children:"Topic 0 • Introduction to Pandas"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-200 via-cyan-100 to-indigo-300 bg-clip-text text-transparent",children:"Introduction to Pandas & Tabular Data"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Understand the core architecture of Python’s foundational data science library: 1D labeled ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Series"}),", 2D heterogeneous ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"DataFrame"}),", and how Pandas bridges raw data files with machine learning models."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"architecture_explorer",label:"Pandas Data Structure Explorer",icon:"📊"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(a=>e.jsxs("button",{onClick:()=>c(a.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r===a.id?"bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:a.icon}),a.label]},a.id))})]}),r==="architecture_explorer"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsx("h3",{className:"text-xs font-bold text-teal-300 uppercase tracking-wider mb-3",children:"Select Data Structure Representation:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"dataframe",title:"1. 2D Pandas DataFrame",desc:"Heterogeneous labeled table (Rows × Columns)"},{id:"series",title:"2. 1D Pandas Series",desc:"Single labeled column with row index"},{id:"numpy_matrix",title:"3. Underlying NumPy ndarray",desc:"Pure homogeneous matrix extracted via .to_numpy()"}].map(a=>e.jsxs("button",{onClick:()=>p(a.id),className:`p-3.5 rounded-xl border text-left transition ${n===a.id?"bg-teal-500/20 border-teal-400 text-teal-200 shadow-md shadow-teal-500/10":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-slate-200",children:a.title}),e.jsx("div",{className:"text-[11px] text-slate-400 font-mono mt-1",children:a.desc})]},a.id))})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[n==="dataframe"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("h4",{className:"text-base font-bold text-slate-200",children:["Pandas DataFrame: ",e.jsx("code",{className:"text-teal-300 font-mono",children:"df_students"})]}),e.jsx("span",{className:"text-xs px-2.5 py-1 bg-slate-800 text-teal-300 font-mono rounded",children:"Shape: (5, 6) • 5 Rows × 6 Columns"})]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-slate-400 border-b border-slate-800",children:[e.jsx("th",{className:"p-2 text-slate-600 text-left",children:"Index"}),e.jsx("th",{className:"p-2 text-teal-400 font-bold",children:"ID (int64)"}),e.jsx("th",{className:"p-2 text-cyan-400 font-bold",children:"Name (object)"}),e.jsx("th",{className:"p-2 text-indigo-400 font-bold",children:"Locality (object)"}),e.jsx("th",{className:"p-2 text-amber-400 font-bold",children:"Study_Hours (float64)"}),e.jsx("th",{className:"p-2 text-emerald-400 font-bold",children:"Attendance_% (int64)"}),e.jsx("th",{className:"p-2 text-purple-400 font-bold",children:"Passed (bool)"})]})}),e.jsx("tbody",{children:d.map((a,u)=>e.jsxs("tr",{className:"border-b border-slate-900 hover:bg-slate-900/60 transition",children:[e.jsx("td",{className:"p-2.5 text-slate-600 font-mono text-left",children:u}),e.jsx("td",{className:"p-2.5 text-slate-300",children:a.id}),e.jsx("td",{className:"p-2.5 text-cyan-300 font-sans font-semibold",children:a.name}),e.jsx("td",{className:"p-2.5 text-indigo-300",children:a.locality}),e.jsx("td",{className:"p-2.5 text-amber-300 font-bold",children:a.hours}),e.jsxs("td",{className:"p-2.5 text-emerald-300",children:[a.attendance,"%"]}),e.jsx("td",{className:"p-2.5 text-purple-300",children:a.passed?"True":"False"})]},a.id))})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-500 block",children:"Row Index Range:"}),e.jsx("span",{className:"text-teal-300 font-bold",children:"RangeIndex(start=0, stop=5)"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-500 block",children:"Column Names:"}),e.jsx("span",{className:"text-cyan-300 font-bold",children:"['ID', 'Name', 'Locality', ...]"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-500 block",children:"Heterogeneous Types:"}),e.jsx("span",{className:"text-purple-300 font-bold",children:"int64, object, float64, bool"})]})]})]}),n==="series"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("h4",{className:"text-base font-bold text-slate-200",children:["Pandas 1D Series: ",e.jsxs("code",{className:"text-teal-300 font-mono",children:["df_students['",t,"']"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Select Column:"}),["hours","attendance","locality"].map(a=>e.jsx("button",{onClick:()=>x(a),className:`text-xs px-2.5 py-1 rounded-lg border font-mono transition ${t===a?"bg-teal-500 border-teal-400 text-slate-950 font-bold":"bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200"}`,children:a},a))]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 max-w-md font-mono text-xs",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-2 mb-2 text-slate-500 flex justify-between",children:[e.jsx("span",{children:"Index (Student)"}),e.jsxs("span",{children:["Value (",t,")"]})]}),d.map(a=>e.jsxs("div",{className:"flex justify-between py-1.5 border-b border-slate-900 text-slate-300",children:[e.jsx("span",{className:"text-cyan-300",children:a.name}),e.jsx("span",{className:"text-amber-300 font-bold",children:a[t]})]},a.id)),e.jsxs("div",{className:"mt-3 pt-2 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between",children:[e.jsxs("span",{children:["Name: ",t]}),e.jsxs("span",{children:["dtype: ",t==="hours"?"float64":t==="attendance"?"int64":"object"]})]})]})]}),n==="numpy_matrix"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("h4",{className:"text-base font-bold text-slate-200",children:["Extracted Pure NumPy Feature Matrix X: ",e.jsx("code",{className:"text-teal-300 font-mono",children:"df[['Study_Hours', 'Attendance_%']].to_numpy()"})]}),e.jsx("span",{className:"text-xs px-2.5 py-1 bg-slate-800 text-amber-300 font-mono rounded",children:"Shape: (5, 2) • float64"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2",children:[e.jsx("p",{className:"text-slate-500",children:"# Output of df[['Study_Hours', 'Attendance_%']].to_numpy():"}),e.jsxs("p",{className:"text-emerald-400 font-bold",children:["array([",e.jsx("br",{}),"  [12.5, 92. ],",e.jsx("br",{}),"  [15. , 98. ],",e.jsx("br",{}),"  [ 8. , 75. ],",e.jsx("br",{}),"  [14.5, 95. ],",e.jsx("br",{}),"  [10. , 84. ]",e.jsx("br",{}),"])"]}),e.jsxs("p",{className:"text-slate-400 text-[11px] pt-2",children:["-> Feeds directly into Scikit-Learn ",e.jsx("code",{className:"text-teal-300",children:"model.fit(X, y)"})," or PyTorch tensors!"]})]})]})]})]}),r==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:o.map(a=>e.jsxs("button",{onClick:()=>m(a.id),className:`p-4 rounded-xl border text-left transition-all ${l===a.id?"bg-teal-950/40 border-teal-500 shadow-lg shadow-teal-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30",children:a.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:a.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:a.summary})]},a.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:s.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:s.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Pandas Essentials Suite"})]}),e.jsx(h,{fileModule:s.code,title:s.fileName})]})]}),r==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(g,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"Welcome to Pandas Essentials! While NumPy gave you the computational engine for matrix operations, Pandas gives you the human-readable tabular framework for real-world datasets. In industry, over 80% of your time as a data scientist or ML engineer is spent inside Pandas: cleaning nulls, grouping records, engineering features, and preparing datasets for modeling."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(y,{content:P})]})]}),r==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(b,{questions:S})})]})};export{L as default};
