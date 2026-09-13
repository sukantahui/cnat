import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as y}from"./PythonFileLoader-DUNJ9gwR.js";import{F as T}from"./FAQTemplate-D_90hN4m.js";import{P as C}from"./PlainTextPrint-yt10TRX1.js";import{T as F}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const E=`"""\r
==============================================================================\r
Topic 19: Exporting Data to CSV in Pandas\r
Script 01: Exporting with to_csv(index=False) & Column Selection\r
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
data = {\r
    "StudentID": [101, 102, 103, 104, 105, 106, 107],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina", "Sachin", "Mahima", "Abhronila"],\r
    "Locality": ["Barrackpore", "Shyamnagar", np.nan, "Naihati", "Kolkata", "Barrackpore", "Titagarh"],\r
    "Math": [85.556, 92.125, 65.000, 88.750, 78.200, 90.450, 84.800],\r
    "Science": [90.0, 95.5, 70.25, 85.0, 80.5, 92.0, 88.5]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. SOURCE DATAFRAME TO EXPORT")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. The Critical Rule: index=False (Prevents Unnamed: 0 Bug)\r
# --------------------------------------------------------------------------\r
section("2. df.to_csv(index=False) - THE GOLD STANDARD")\r
# In-memory buffer simulation of CSV output\r
buffer_with_index = io.StringIO()\r
df.to_csv(buffer_with_index, index=True)\r
print("[BAD: index=True] Notice unwanted leading comma and row index 0,1,2...:")\r
print("\\n".join(buffer_with_index.getvalue().splitlines()[:4]))\r
\r
buffer_clean = io.StringIO()\r
df.to_csv(buffer_clean, index=False)\r
print("\\n[GOOD: index=False] Clean standard CSV output:")\r
print("\\n".join(buffer_clean.getvalue().splitlines()[:4]))\r
\r
# --------------------------------------------------------------------------\r
# 2. Selecting Specific Columns to Export (columns=[...])\r
# --------------------------------------------------------------------------\r
section("3. SELECTIVE EXPORT (columns=['StudentID', 'Name', 'Math'])")\r
buffer_subset = io.StringIO()\r
df.to_csv(buffer_subset, columns=["StudentID", "Name", "Math"], index=False)\r
print(buffer_subset.getvalue().strip())\r
\r
# --------------------------------------------------------------------------\r
# 3. Formatting Floating-Point Precision (float_format='%.2f')\r
# --------------------------------------------------------------------------\r
section("4. PRECISION FORMATTING (float_format='%.2f')")\r
buffer_formatted = io.StringIO()\r
df.to_csv(buffer_formatted, index=False, float_format="%.2f")\r
print(buffer_formatted.getvalue().strip())\r
`,I=`"""\r
==============================================================================\r
Topic 19: Exporting Data to CSV in Pandas\r
Script 02: Delimiters (sep), Character Encodings, and Missing Value Handling\r
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
data = {\r
    "StudentID": [101, 102, 103, 104],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina"],\r
    "Comments": ["Good, consistent!", "Excellent: 95%+", np.nan, "Active participant"],\r
    "Scholarship_INR": [1200.0, 1500.0, np.nan, 800.0]\r
}\r
\r
df = pd.DataFrame(data)\r
section("1. SOURCE DATAFRAME")\r
print(df)\r
\r
# --------------------------------------------------------------------------\r
# 1. Custom Delimiters (TSV / Pipe Separated)\r
# --------------------------------------------------------------------------\r
section("2. CUSTOM DELIMITERS (sep='\\\\t' and sep='|')")\r
tsv_buf = io.StringIO()\r
df.to_csv(tsv_buf, sep="\\t", index=False)\r
print("Tab-Separated (TSV) Output:")\r
print(tsv_buf.getvalue().strip())\r
\r
pipe_buf = io.StringIO()\r
df.to_csv(pipe_buf, sep="|", index=False)\r
print("\\nPipe-Separated (|) Output:")\r
print(pipe_buf.getvalue().strip())\r
\r
# --------------------------------------------------------------------------\r
# 2. Explicit Missing Value Representation (na_rep='N/A')\r
# --------------------------------------------------------------------------\r
section("3. MISSING VALUE REPRESENTATION (na_rep='NULL' / na_rep='N/A')")\r
# By default, Pandas exports empty strings for NaNs (e.g. 103,Swadeep,,)\r
# na_rep replaces NaNs with explicit symbols:\r
na_buf = io.StringIO()\r
df.to_csv(na_buf, index=False, na_rep="NOT_AVAILABLE")\r
print(na_buf.getvalue().strip())\r
\r
# --------------------------------------------------------------------------\r
# 3. Specifying Encoding (UTF-8 vs UTF-8-SIG for Excel)\r
# --------------------------------------------------------------------------\r
section("4. CHARACTER ENCODING (encoding='utf-8' VS 'utf-8-sig')")\r
# 'utf-8-sig' adds a Byte Order Mark (BOM) so Microsoft Excel opens UTF-8 files with non-ASCII characters properly\r
print("To export with UTF-8 BOM for Microsoft Excel compatibility:")\r
print("df.to_csv('students_excel.csv', index=False, encoding='utf-8-sig')")\r
`,A=`"""\r
==============================================================================\r
Topic 19: Exporting Data to CSV in Pandas\r
Script 03: On-the-Fly Compression (gzip, zip) & Header Configurations\r
Instructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
==============================================================================\r
"""\r
\r
import pandas as pd\r
import io\r
\r
def section(title):\r
    print("\\n" + "=" * 75)\r
    print(f"  {title}")\r
    print("=" * 75)\r
\r
data = {\r
    "StudentID": [101, 102, 103, 104],\r
    "Name": ["Debangshu", "Susmita", "Swadeep", "Tuhina"],\r
    "Score": [85, 92, 65, 88]\r
}\r
\r
df = pd.DataFrame(data)\r
\r
# --------------------------------------------------------------------------\r
# 1. On-The-Fly GZIP Compression (compression='gzip')\r
# --------------------------------------------------------------------------\r
section("1. AUTOMATIC COMPRESSION (.csv.gz / compression='gzip')")\r
# Pandas detects .gz extension or explicit compression argument\r
print("Exporting compressed archive:")\r
print("df.to_csv('cleaned_student_dataset.csv.gz', index=False, compression='gzip')")\r
print("df.to_csv('cleaned_student_dataset.zip', index=False, compression='zip')")\r
\r
# --------------------------------------------------------------------------\r
# 2. Suppressing or Customizing Header (header=False / header=[...])\r
# --------------------------------------------------------------------------\r
section("2. SUPPRESSING HEADERS (header=False)")\r
no_header_buf = io.StringIO()\r
df.to_csv(no_header_buf, index=False, header=False)\r
print("Raw records without header line (useful for appending to existing files):")\r
print(no_header_buf.getvalue().strip())\r
\r
# --------------------------------------------------------------------------\r
# 3. Appending to Existing CSV (mode='a', header=False)\r
# --------------------------------------------------------------------------\r
section("3. APPENDING ROWS TO AN EXISTING CSV (mode='a')")\r
print("To append new incoming batch records without rewriting the whole file:")\r
print("new_batch_df.to_csv('master_logs.csv', mode='a', index=False, header=False)")\r
`,P="==============================================================================\r\nTOPIC 19 NOTE: EXPORTING DATA TO CSV IN PANDAS (df.to_csv)\r\nInstructor: Sukanta Hui | Institution: Coder & AccoTax, Barrackpore\r\nStudents: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r\n==============================================================================\r\n\r\n1. THE GOLDEN RULE OF to_csv():\r\n   --------------------------------------------------------------------------\r\n   - Always specify `index=False` unless your row index has specific business meaning.\r\n   - Forgetting `index=False` causes Pandas to write the 0, 1, 2... index into the first column, which later gets read back as the notorious `Unnamed: 0` junk column!\r\n\r\n2. ESSENTIAL PARAMETERS FOR df.to_csv():\r\n   --------------------------------------------------------------------------\r\n   - `path_or_buf`: Target filepath string or buffer object.\r\n   - `index=False`: Prevents writing row index labels.\r\n   - `columns=['ColA', 'ColB']`: Exports only specified subset of columns.\r\n   - `sep=','`: Delimiter character (e.g. `\\t` for TSV, `|` for pipe-delimited).\r\n   - `na_rep='NA'`: String representation for missing values (default is empty string `\"\"`).\r\n   - `float_format='%.2f'`: Controls floating-point decimal precision.\r\n   - `encoding='utf-8'`: Character encoding (use `'utf-8-sig'` for Microsoft Excel on Windows).\r\n   - `compression='gzip'`: Saves compressed archive directly (.csv.gz), cutting file sizes by 70-90%.\r\n   - `mode='a'`: Append mode; when combined with `header=False`, allows streaming new batch rows into existing files.\r\n\r\n3. CSV VS MODERN BINARY FORMATS (PARQUET / FEATHER) IN ML:\r\n   --------------------------------------------------------------------------\r\n   - CSV is human-readable and universal, but slow to parse and stores no data type metadata.\r\n   - In production machine learning pipelines, store large tabular datasets as Apache Parquet (`df.to_parquet()`) or Feather (`df.to_feather()`) for 10x faster I/O and lossless schema preservation.\r\n",v=[{id:1,question:"Why is 'index=False' strongly recommended when exporting a DataFrame with df.to_csv('output.csv', index=False)?",options:["It prevents Pandas from writing row numbers to the first column, avoiding the 'Unnamed: 0' column bug upon re-reading","It encrypts the CSV file with a password","It compresses the file automatically into a zip archive","It converts all numbers into integers"],correctAnswer:"It prevents Pandas from writing row numbers to the first column, avoiding the 'Unnamed: 0' column bug upon re-reading",explanation:"If index=False is omitted, the numerical row index (0, 1, 2...) is written as the first column without a header name. When reading the CSV back with pd.read_csv(), Pandas names it 'Unnamed: 0'."},{id:2,question:"How do you export a DataFrame with tab ('\\t') delimiters instead of standard commas?",options:["df.to_csv('output.tsv', sep='\\t', index=False)","df.to_tsv('output.tsv')","df.to_csv('output.tsv', delimiter_type='tab')","df.export(format='tab')"],correctAnswer:"df.to_csv('output.tsv', sep='\\t', index=False)",explanation:"The sep parameter in df.to_csv() controls the delimiter character; setting sep='\\t' creates a standard Tab-Separated Values (TSV) file."},{id:3,question:"Which encoding should you specify in df.to_csv(encoding=...) to guarantee Microsoft Excel on Windows renders UTF-8 accented/special characters correctly?",options:["encoding='utf-8-sig'","encoding='ascii'","encoding='utf-16-be'","encoding='windows-1252-raw'"],correctAnswer:"encoding='utf-8-sig'",explanation:"encoding='utf-8-sig' prepends the UTF-8 Byte Order Mark (BOM) to the output file, signaling to Microsoft Excel that the file contains UTF-8 text."},{id:4,question:"How do you format all floating-point numbers in the exported CSV to exactly 2 decimal places?",options:["df.to_csv('output.csv', float_format='%.2f', index=False)","df.to_csv('output.csv', decimals=2)","df.round_csv(2).to_csv('output.csv')","df.to_csv('output.csv', precision=2)"],correctAnswer:"df.to_csv('output.csv', float_format='%.2f', index=False)",explanation:"The float_format parameter accepts a standard C-style format string like '%.2f' to format all floating-point values uniformly."},{id:5,question:"How can you append new records to an existing CSV file without rewriting the header line?",options:["df.to_csv('data.csv', mode='a', header=False, index=False)","df.append_csv('data.csv')","df.to_csv('data.csv', append=True)","df.insert_into('data.csv')"],correctAnswer:"df.to_csv('data.csv', mode='a', header=False, index=False)",explanation:"Combining mode='a' (append mode) and header=False appends new rows to the end of the existing file without duplicating the header line."}],u=[{id:"part1",fileName:"01_to_csv_index_and_formatting.py",title:"1. to_csv(index=False) & Column Subsets",badge:"index=False & float_format",code:E,summary:"Prevent the 'Unnamed: 0' index bug using index=False, filter exported columns with columns=[...], and format float precision."},{id:"part2",fileName:"02_delimiters_encoding_and_na_rep.py",title:"2. Delimiters, Encodings & Missing Values",badge:"sep, encoding, na_rep",code:I,summary:"Configure custom separators (TSV, pipe), specify utf-8-sig for Excel compatibility, and define custom missing value representations."},{id:"part3",fileName:"03_compression_and_chunked_export.py",title:"3. On-the-Fly Compression & Append Mode",badge:"gzip & mode='a'",code:A,summary:"Export directly into gzip-compressed archives (.csv.gz) and stream batch records into existing files using append mode (mode='a')."}],D=[{id:101,name:"Debangshu",locality:"Barrackpore",math:85.556,sci:90},{id:102,name:"Susmita",locality:"Shyamnagar",math:92.125,sci:95.5},{id:103,name:"Swadeep",locality:null,math:65,sci:70.25},{id:104,name:"Tuhina",locality:"Naihati",math:88.75,sci:85},{id:105,name:"Sachin",locality:"Kolkata",math:78.2,sci:80.5}],G=()=>{const[s,l]=i.useState("export_studio"),[x,S]=i.useState("part1"),[o,h]=i.useState(!1),[c,_]=i.useState(","),[p,w]=i.useState("N/A"),[a,N]=i.useState("%.2f"),[f,O]=i.useState(!0),m=u.find(t=>t.id===x)||u[0],g=(()=>{const t=c==="\\t"?"	":c,d=[];o&&d.push(""),d.push("StudentID","Name"),f&&d.push("Locality"),d.push("Math","Science");const b=[d.join(t)];return D.forEach((n,j)=>{const r=[];o&&r.push(j),r.push(n.id),r.push(n.name),f&&r.push(n.locality===null?p:n.locality),r.push(a==="%.2f"?n.math.toFixed(2):a==="%.1f"?n.math.toFixed(1):n.math),r.push(a==="%.2f"?n.sci.toFixed(2):a==="%.1f"?n.sci.toFixed(1):n.sci),b.push(r.join(t))}),b.join(`
`)})();return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 lg:p-8 font-sans",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[e.jsx("div",{className:"bg-gradient-to-r from-emerald-900/40 via-green-900/30 to-slate-900/60 border border-emerald-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full",children:"Data Persistence & I/O"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Module 009_002 • Topic 19"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white mt-2",children:"Exporting Data to CSV in Pandas (df.to_csv)"}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base mt-1 max-w-3xl",children:["Persist clean DataFrames reliably: eliminate the 'Unnamed: 0' bug with"," ",e.jsx("code",{className:"text-emerald-300 bg-slate-800 px-1 py-0.5 rounded",children:"index=False"}),", customize delimiters and missing value representations, format float precision, and save compressed archives."]})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center text-white font-mono text-xl font-bold shadow-lg shadow-emerald-500/20",children:"💾 CSV"})})]})}),e.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-2",children:[e.jsx("button",{onClick:()=>l("export_studio"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s==="export_studio"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"💾 CSV Export Studio"}),e.jsxs("button",{onClick:()=>l("python_code"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s==="python_code"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🐍 Python Code Lab (",u.length," Scripts)"]}),e.jsx("button",{onClick:()=>l("theory_notes"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s==="theory_notes"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:"📖 Comprehensive Notes"}),e.jsxs("button",{onClick:()=>l("quiz"),className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s==="quiz"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:["🧠 Quiz & Assessment (",v.length,")"]})]}),s==="export_studio"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("h2",{className:"text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Configure df.to_csv() Arguments"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-2",children:"1. Row Index (index=...)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>h(!1),className:`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all ${o?"bg-slate-900 text-slate-400 hover:bg-slate-800":"bg-emerald-600 text-white shadow-md shadow-emerald-600/30"}`,children:"index=False (Best)"}),e.jsx("button",{onClick:()=>h(!0),className:`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all ${o?"bg-rose-600 text-white shadow-md shadow-rose-600/30":"bg-slate-900 text-slate-400 hover:bg-slate-800"}`,children:"index=True"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-2",children:"2. Delimiter (sep=...)"}),e.jsxs("select",{value:c,onChange:t=>_(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-emerald-300 font-mono focus:outline-none",children:[e.jsx("option",{value:",",children:"Comma (',') [Standard CSV]"}),e.jsx("option",{value:"\\t",children:"Tab ('\\t') [TSV]"}),e.jsx("option",{value:"|",children:"Pipe ('|')"}),e.jsx("option",{value:";",children:"Semicolon (';') [European]"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-2",children:"3. Missing Values (na_rep=...)"}),e.jsxs("select",{value:p,onChange:t=>w(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-emerald-300 font-mono focus:outline-none",children:[e.jsx("option",{value:"",children:'Empty String ("") [Default]'}),e.jsx("option",{value:"N/A",children:'"N/A"'}),e.jsx("option",{value:"NULL",children:'"NULL"'}),e.jsx("option",{value:"MISSING",children:'"MISSING"'})]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-2",children:"4. Precision (float_format=...)"}),e.jsxs("select",{value:a,onChange:t=>N(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-emerald-300 font-mono focus:outline-none",children:[e.jsx("option",{value:"%.2f",children:"2 Decimals ('%.2f')"}),e.jsx("option",{value:"%.1f",children:"1 Decimal ('%.1f')"}),e.jsx("option",{value:"raw",children:"Raw Floats"})]})]})]}),e.jsxs("div",{className:"mt-4 p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300",children:[e.jsx("span",{className:"text-slate-500",children:"# Executed Python command:"}),e.jsx("div",{className:"mt-1 font-bold",children:`df.to_csv('students_export.csv', index=${o?"True":"False"}, sep='${c}'${p?`, na_rep='${p}'`:""}${a!=="raw"?`, float_format='${a}'`:""}, encoding='utf-8')`})]})]}),o&&e.jsxs("div",{className:"bg-rose-950/40 border border-rose-500/40 rounded-xl p-4 flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:"⚠️"}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-rose-300",children:"Warning: Unnamed: 0 Column Risk"}),e.jsxs("p",{className:"text-xs text-slate-300 mt-0.5",children:["Setting ",e.jsx("code",{className:"text-rose-400 font-mono",children:"index=True"})," writes a blank header with row numbers 0, 1, 2... When this file is later read back using ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pd.read_csv()"}),", Pandas will create a redundant ",e.jsx("code",{className:"text-rose-400 font-mono",children:"'Unnamed: 0'"})," column!"]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-3",children:[e.jsxs("h3",{className:"text-md font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📄"})," Live File Preview (",e.jsx("code",{className:"text-xs text-emerald-400 font-mono",children:"students_export.csv"}),")"]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:[g.length," bytes"]})]}),e.jsx("pre",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed whitespace-pre",children:g})]}),e.jsx(F,{topic:"Production Data Pipelines & Export Best Practices",text:"In industrial data engineering, exporting datasets properly prevents countless downstream headaches! Always use df.to_csv(..., index=False, encoding='utf-8-sig') so business stakeholders using Microsoft Excel can open the file without scrambled Unicode characters or phantom 'Unnamed: 0' columns. For datasets exceeding 1 GB, switch from CSV to df.to_parquet() for 5x compression and 10x faster I/O!"})]}),s==="python_code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:u.map(t=>e.jsxs("button",{onClick:()=>S(t.id),className:`p-4 rounded-xl text-left border transition-all ${x===t.id?"bg-emerald-950/60 border-emerald-500 text-white shadow-lg shadow-emerald-500/10":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[e.jsx("div",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1",children:t.badge}),e.jsx("div",{className:"font-bold text-sm text-slate-100",children:t.title}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-2",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl",children:[e.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-bold text-white font-mono",children:m.fileName}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:m.summary})]})}),e.jsx(y,{fileModule:m.code,title:m.fileName})]})]}),s==="theory_notes"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(C,{text:P,title:"Topic 19 Revision Notes: Exporting Data to CSV"})}),s==="quiz"&&e.jsx("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(T,{questions:v,title:"Topic 19 Knowledge Check: Exporting Data to CSV"})})]})})};export{G as default};
