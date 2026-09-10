import{b as d,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as j}from"./PythonFileLoader-CiS1GfkF.js";import{F as I}from"./FAQTemplate-D_90hN4m.js";import{P as k}from"./PlainTextPrint-yt10TRX1.js";import{T}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const D=`"""\r
01_basic_csv_reading_and_params.py\r
==================================\r
Topic: Reading CSV Files with pd.read_csv: Core Parameters (header, index_col, usecols)\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import io\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("READING CSV FILES: CORE PARAMETERS & WORKFLOWS")\r
    print("=" * 70)\r
\r
    # Simulated CSV file stored as a string buffer (Barrackpore batch test records)\r
    csv_raw = """StudentID,Name,Locality,Math,Science,Passed\r
101,Debangshu,Barrackpore,85,90,True\r
102,Susmita,Shyamnagar,92,95,True\r
103,Swadeep,Ichapur,65,70,True\r
104,Tuhina,Naihati,88,85,True\r
105,Sachin,Kolkata,78,80,True\r
"""\r
\r
    # 1. Default CSV Read (Header auto-detected, 0-indexed rows)\r
    df_default = pd.read_csv(io.StringIO(csv_raw))\r
    print("1. Default pd.read_csv:\\n", df_default)\r
    print(f"   Shape: {df_default.shape}, Columns: {list(df_default.columns)}")\r
\r
    # 2. Setting Custom Index Column: index_col='StudentID'\r
    df_indexed = pd.read_csv(io.StringIO(csv_raw), index_col="StudentID")\r
    print("\\n2. With index_col='StudentID':\\n", df_indexed)\r
\r
    # 3. Loading Specific Feature Columns: usecols=['Name', 'Math', 'Science']\r
    # Saves substantial memory by skipping unused columns during file ingestion!\r
    df_subset = pd.read_csv(\r
        io.StringIO(csv_raw),\r
        usecols=["Name", "Math", "Science"]\r
    )\r
    print("\\n3. Memory-Optimized with usecols=['Name', 'Math', 'Science']:\\n", df_subset)\r
\r
if __name__ == "__main__":\r
    main()\r
`,A=`"""\r
02_delimiters_encodings_and_parsers.py\r
======================================\r
Topic: Custom Delimiters (sep), Encodings, and High-Performance Engines\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import io\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("CSV DELIMITERS, ENCODINGS & PARSING ENGINES")\r
    print("=" * 70)\r
\r
    # 1. Semicolon-Separated Values (European / Tax Software standard)\r
    tsv_data = "Name;Department;Salary_INR;Joining_Date\\nDebangshu;AI Lab;55000;2024-01-15\\nSusmita;Data Science;65000;2023-11-01\\nSwadeep;Cloud;42000;2024-06-20\\n"\r
\r
    df_semicolon = pd.read_csv(io.StringIO(tsv_data), sep=";")\r
    print("1. Parsed with sep=';':\\n", df_semicolon)\r
\r
    # 2. Tab-Separated Values (TSV / Logs): sep='\\t'\r
    tab_data = "Student\\tScore\\tCity\\nDebangshu\\t88\\tBarrackpore\\nSusmita\\t95\\tShyamnagar\\n"\r
    df_tab = pd.read_csv(io.StringIO(tab_data), sep="\\t")\r
    print("\\n2. Parsed with sep='\\\\t':\\n", df_tab)\r
\r
    # 3. Handling Files Without Header: header=None, names=[...]\r
    raw_no_header = "101,Debangshu,88\\n102,Susmita,95\\n103,Swadeep,72\\n"\r
    df_no_head = pd.read_csv(\r
        io.StringIO(raw_no_header),\r
        header=None,\r
        names=["ID", "Candidate", "Score"]\r
    )\r
    print("\\n3. Parsed with header=None and custom names=[...]:\\n", df_no_head)\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
03_handling_dates_na_and_chunking.py\r
====================================\r
Topic: Date Parsing, Custom Missing Values (na_values), and Chunked Iteration\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import io\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("ADVANCED CSV: DATES, NA_VALUES & CHUNKING FOR BIG DATA")\r
    print("=" * 70)\r
\r
    # Simulated messy CSV data with custom missing sentinels ('MISSING', 'N/A', -999)\r
    messy_csv = """TransactionID,Date,Amount_INR,Customer,Status\r
TX101,2026-09-01,1500.0,Debangshu,SUCCESS\r
TX102,2026-09-02,MISSING,Susmita,SUCCESS\r
TX103,2026-09-03,2400.5,Swadeep,PENDING\r
TX104,2026-09-04,-999.0,Tuhina,FAILED\r
TX105,2026-09-05,3200.0,Sachin,SUCCESS\r
"""\r
\r
    # 1. Parsing Dates and Custom NA Sentinels\r
    df_cleaned = pd.read_csv(\r
        io.StringIO(messy_csv),\r
        parse_dates=["Date"],\r
        na_values=["MISSING", "-999.0", -999]\r
    )\r
\r
    print("1. DataFrame with parse_dates & na_values:\\n", df_cleaned)\r
    print(f"\\n   Date Column Dtype: {df_cleaned['Date'].dtype} (True datetime64!)")\r
    print("   Missing Value Counts (df.isna().sum()):\\n", df_cleaned.isna().sum())\r
\r
    # 2. Chunking Large Datasets (chunksize=2)\r
    # When processing 10GB CSV files on a laptop with 8GB RAM:\r
    print("\\n2. Chunked Processing Demo (chunksize=2):")\r
    chunk_reader = pd.read_csv(io.StringIO(messy_csv), chunksize=2)\r
\r
    total_rows = 0\r
    for chunk_idx, chunk in enumerate(chunk_reader, 1):\r
        total_rows += len(chunk)\r
        print(f"   --- Chunk {chunk_idx} (Shape: {chunk.shape}) ---")\r
        print(chunk[["TransactionID", "Customer"]])\r
\r
    print(f"\\nTotal Processed Rows via Stream Chunking: {total_rows}")\r
\r
if __name__ == "__main__":\r
    main()\r
`,M="========================================================================\r\nTOPIC 4 NOTE: READING CSV FILES WITH pd.read_csv()\r\nInstructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r\n========================================================================\r\n\r\n1. CORE PARAMETERS OF pd.read_csv()\r\n-----------------------------------\r\n- `filepath_or_buffer`: Local file path string, URL (e.g. GitHub raw URL), or `io.StringIO` buffer.\r\n- `sep` / `delimiter`: Character separating fields (default is `,`). Use `\\t` for TSV, `;` for European data, `\\s+` for whitespace.\r\n- `header`: Row number to use as column names (default `0`). If file has no header, set `header=None` and supply `names=[...]`.\r\n- `index_col`: Column name or integer index to use as the row labels of the DataFrame.\r\n- `usecols`: List of column names or integer indices to load. Crucial for memory optimization when working with wide datasets.\r\n\r\n2. ADVANCED DATA CLEANING AT INGESTION TIME\r\n-------------------------------------------\r\n- `parse_dates`: Converts date string columns into native `datetime64[ns]` timestamps during reading: `parse_dates=['Date']`.\r\n- `na_values`: Additional custom strings to recognize as NaN (e.g. `na_values=['?', 'MISSING', 'N/A', -999]`).\r\n- `dtype`: Explicitly specify column data types: `dtype={'PostalCode': str, 'Amount': float}` to avoid leading zero loss in zip codes.\r\n- `skiprows` / `nrows`: Skip metadata comment lines (`skiprows=5`) or read a quick preview (`nrows=100`).\r\n\r\n3. MEMORY OPTIMIZATION & OUT-OF-CORE CHUNKING\r\n----------------------------------------------\r\n- Problem: Loading a 10 GB CSV into 8 GB RAM causes an `OutOfMemoryError`.\r\n- Solution: Use `chunksize`:\r\n  ```python\r\n  for chunk in pd.read_csv('huge_dataset.csv', chunksize=50000):\r\n      process_batch(chunk)\r\n  ```\r\n- Returns a `TextFileReader` iterator that streams batches without overloading RAM.\r\n",P=[{id:1,question:"If a CSV file does not contain a header row with column names, how should you invoke `pd.read_csv` to avoid having the first row of data treated as column names?",options:["`pd.read_csv('file.csv', header=None, names=['Col1', 'Col2', ...])`","`pd.read_csv('file.csv', skip_header=True)`","`pd.read_csv('file.csv', no_header=True)`","`pd.read_csv('file.csv').set_header()`"],correctAnswer:0,explanation:"Setting `header=None` prevents Pandas from using row 0 as header labels, and `names=[...]` allows you to assign custom column names."},{id:2,question:"How can you optimize memory usage when loading a wide dataset of 200 columns when your machine learning model only requires 5 specific features?",options:["Use `usecols=['Feature1', 'Feature2', ...]` in `pd.read_csv` to only parse and load the required columns into RAM.","Load the entire file and delete unused columns later.","Convert the CSV into an Excel file first.","Set `low_memory=False`."],correctAnswer:0,explanation:"The `usecols` parameter instructs Pandas to only read and allocate memory for the specified subset of columns, dramatically reducing memory usage and I/O time."},{id:3,question:"What parameter in `pd.read_csv` allows converting date string columns (e.g. '2026-09-01') directly into native Python/Pandas datetime objects during ingestion?",options:["`parse_dates=['Date_Column']`","`to_datetime=True`","`date_format='ISO'`","`convert_dates=True`"],correctAnswer:0,explanation:"`parse_dates` takes a list of column names and automatically parses them into native `datetime64[ns]` timestamp objects."},{id:4,question:"If a dataset encodes missing survey responses with special placeholder strings like `'?'` or `'-999'`, how can you tell `pd.read_csv` to treat them as `NaN`?",options:["`na_values=['?', '-999', -999]`","`replace_nulls=['?']`","`null_chars=['?']`","`drop_values=['?']`"],correctAnswer:0,explanation:"The `na_values` parameter takes a list of custom sentinel values and translates them directly to `NaN` upon reading."},{id:5,question:"How does the `chunksize` parameter in `pd.read_csv` help process massive datasets larger than available system RAM?",options:["It returns an iterator that yields smaller DataFrame chunks of specified row count, enabling out-of-core streaming without loading the entire file at once.","It splits the CSV into multiple files on disk.","It compresses the CSV file into a zip archive.","It runs the parsing on multiple GPUs."],correctAnswer:0,explanation:"`chunksize` transforms `pd.read_csv` into a generator/iterator, yielding `TextFileReader` chunks that can be processed and aggregated batch-by-batch."}],c=[{id:"part1",fileName:"01_basic_csv_reading_and_params.py",title:"1. Core CSV Reading (index_col, usecols)",badge:"Core Parameters",code:D,summary:"Reads CSV buffers, sets custom index columns, and extracts selective memory-optimized feature subsets via usecols."},{id:"part2",fileName:"02_delimiters_encodings_and_parsers.py",title:"2. Custom Delimiters & Missing Headers",badge:"Delimiters & Headers",code:A,summary:"Handles semicolon and tab-delimited files (TSV), and assigns custom column names with header=None, names=[...]."},{id:"part3",fileName:"03_handling_dates_na_and_chunking.py",title:"3. Dates, Custom NA & Big Data Chunking",badge:"Dates & Chunking",code:E,summary:"Parses timestamps, flags custom NA sentinels ('MISSING', -999), and streams multi-gigabyte datasets via chunksize iterator."}],b=[{name:"Comma-Separated (Standard CSV)",delimiter:",",raw:`StudentID,Name,Locality,Math,Science
101,Debangshu,Barrackpore,85,90
102,Susmita,Shyamnagar,92,95
103,Swadeep,Ichapur,65,70
104,Tuhina,Naihati,88,85`},{name:"Semicolon-Separated (European / Tax Data)",delimiter:";",raw:`StudentID;Name;Locality;Math;Science
101;Debangshu;Barrackpore;85;90
102;Susmita;Shyamnagar;92;95
103;Swadeep;Ichapur;65;70
104;Tuhina;Naihati;88;85`},{name:"Tab-Separated (TSV Logs)",delimiter:"	",raw:`StudentID	Name	Locality	Math	Science
101	Debangshu	Barrackpore	85	90
102	Susmita	Shyamnagar	92	95
103	Swadeep	Ichapur	65	70
104	Tuhina	Naihati	88	85`}],B=()=>{const[s,_]=d.useState("csv_studio"),[m,S]=d.useState("part1"),[u,N]=d.useState(0),[n,v]=d.useState(!1),[r,w]=d.useState(!1),l=c.find(a=>a.id===m)||c[0],i=b[u],p=i.raw.trim().split(`
`),h=i.delimiter,o=p[0].split(h),x=p.slice(1).map(a=>a.split(h)),f=r?["Name","Math","Science"]:o,y=r?[o.indexOf("Name"),o.indexOf("Math"),o.indexOf("Science")]:o.map((a,t)=>t);return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-teal-900/60 via-slate-900 to-indigo-900/60 border border-teal-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Module 009_002 • Pandas Essentials"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/40",children:"Topic 4 • CSV Ingestion"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-200 via-cyan-100 to-indigo-300 bg-clip-text text-transparent",children:"Reading CSV Files with pd.read_csv()"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Master the Swiss Army Knife of tabular ingestion: custom delimiters (",e.jsx("code",{className:"text-teal-300 font-mono",children:"sep"}),"), row indexing (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"index_col"}),"), memory pruning (",e.jsx("code",{className:"text-indigo-300 font-mono",children:"usecols"}),"), datetime parsing, and out-of-core streaming with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"chunksize"}),"."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"csv_studio",label:"Interactive CSV Ingestion Studio",icon:"📄"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(a=>e.jsxs("button",{onClick:()=>_(a.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s===a.id?"bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:a.icon}),a.label]},a.id))})]}),s==="csv_studio"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsx("h3",{className:"text-xs font-bold text-teal-300 uppercase tracking-wider",children:"1. Select CSV Format / Delimiter:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:b.map((a,t)=>e.jsxs("button",{onClick:()=>N(t),className:`p-3 rounded-xl border text-left transition ${u===t?"bg-teal-500/20 border-teal-400 text-teal-200 shadow-md shadow-teal-500/10":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"font-bold text-xs text-slate-200",children:a.name}),e.jsxs("div",{className:"text-[10px] text-slate-400 font-mono mt-0.5",children:["Delimiter: ",e.jsx("code",{className:"text-teal-300",children:a.delimiter==="	"?"\\t":a.delimiter})]})]},a.name))}),e.jsxs("div",{className:"flex flex-wrap gap-4 pt-2 border-t border-slate-800 text-xs",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:a=>v(a.target.checked),className:"accent-teal-500 w-4 h-4 rounded cursor-pointer"}),e.jsx("span",{className:"text-slate-300 font-mono",children:"index_col='StudentID'"})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:r,onChange:a=>w(a.target.checked),className:"accent-teal-500 w-4 h-4 rounded cursor-pointer"}),e.jsx("span",{className:"text-slate-300 font-mono",children:"usecols=['Name', 'Math', 'Science']"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"text-sm font-bold text-slate-200",children:"Raw CSV File Buffer"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"students.csv"})]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre overflow-x-auto",children:i.raw}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-teal-300",children:["pd.read_csv('students.csv', sep='",i.delimiter==="	"?"\\t":i.delimiter,"'",n?", index_col='StudentID'":"",r?", usecols=['Name', 'Math', 'Science']":"",")"]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-teal-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h4",{className:"text-sm font-bold text-teal-300",children:"Parsed Pandas DataFrame"}),e.jsxs("span",{className:"text-xs px-2.5 py-1 bg-slate-800 text-slate-300 font-mono rounded",children:["Shape: (",x.length,", ",f.length-(n&&!r?1:0),")"]})]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsx("tr",{className:"text-slate-400 border-b border-slate-800",children:f.map((a,t)=>e.jsx("th",{className:`p-2 ${t===0&&n?"text-cyan-400 font-bold text-left":"text-teal-400 font-bold"}`,children:a},t))})}),e.jsx("tbody",{children:x.map((a,t)=>e.jsx("tr",{className:"border-b border-slate-900 hover:bg-slate-900/60 transition",children:y.map((C,g)=>e.jsx("td",{className:`p-2.5 ${g===0&&n?"text-cyan-300 font-mono font-bold text-left":"text-slate-200 bg-slate-900/40"}`,children:a[C]},g))},t))})]})})]}),e.jsxs("div",{className:"mt-4 p-3 bg-teal-950/30 border border-teal-900/60 rounded-xl text-xs text-teal-200",children:["⚡ Memory Optimization: Loading only required columns with ",e.jsx("code",{className:"text-white font-mono",children:"usecols"})," reduces memory footprint by up to 90% on wide tables!"]})]})]})]}),s==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:c.map(a=>e.jsxs("button",{onClick:()=>S(a.id),className:`p-4 rounded-xl border text-left transition-all ${m===a.id?"bg-teal-950/40 border-teal-500 shadow-lg shadow-teal-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30",children:a.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:a.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:a.summary})]},a.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:l.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:l.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"CSV Ingestion Suite"})]}),e.jsx(j,{fileModule:l.code,title:l.fileName})]})]}),s==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(T,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"In machine learning competitions and real-world jobs, 90% of tabular datasets start life as CSV files. Knowing how to tune pd.read_csv() parameters (like usecols for memory conservation, parse_dates for time series, na_values for dirty sentinel strings, and chunksize for multi-gigabyte files) separates true data professionals from beginners."}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(k,{content:M})]})]}),s==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(I,{questions:P})})]})};export{B as default};
