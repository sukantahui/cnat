import{b as o,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as _}from"./PythonFileLoader-CiS1GfkF.js";import{F as f}from"./FAQTemplate-D_90hN4m.js";import{P as g}from"./PlainTextPrint-yt10TRX1.js";import{T as S}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const N=`"""\r
01_basic_excel_reading_and_sheets.py\r
====================================\r
Topic: Reading Excel Workbooks (.xlsx) with pd.read_excel and sheet_name\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("READING EXCEL WORKBOOKS: pd.read_excel & SHEET MANAGEMENT")\r
    print("=" * 70)\r
\r
    # 1. Excel Dependencies:\r
    # Requires 'openpyxl' (for .xlsx) or 'xlrd' (for legacy .xls)\r
    # Install: pip install openpyxl\r
\r
    # 2. Simulated Excel Sheet Dictionaries (Barrackpore Branch Records)\r
    # Sheet 1: 'Machine_Learning_Batch'\r
    # Sheet 2: 'Data_Science_Batch'\r
    \r
    # Reading Single Sheet by Name:\r
    # df_ml = pd.read_excel('barrackpore_courses.xlsx', sheet_name='Machine_Learning_Batch')\r
    \r
    # Reading Single Sheet by Integer Index (0-based):\r
    # df_first = pd.read_excel('barrackpore_courses.xlsx', sheet_name=0)\r
\r
    # 3. Reading ALL Sheets at Once: sheet_name=None\r
    # Returns a Python dictionary: { "Sheet_Name": DataFrame, ... }\r
    print("Code Pattern: Ingesting Multi-Sheet Workbook as a Dict:")\r
    print("  all_sheets_dict = pd.read_excel('barrackpore_courses.xlsx', sheet_name=None)")\r
    print("  for sheet_name, df_sheet in all_sheets_dict.items():")\r
    print("      print(f'Sheet: {sheet_name}, Rows: {len(df_sheet)}')")\r
\r
    # Mocking the resulting dictionary structure\r
    all_sheets = {\r
        "Machine_Learning": pd.DataFrame({\r
            "Student": ["Debangshu", "Susmita"],\r
            "Course": ["ML", "ML"],\r
            "Score": [88, 95]\r
        }),\r
        "Data_Science": pd.DataFrame({\r
            "Student": ["Swadeep", "Tuhina"],\r
            "Course": ["DS", "DS"],\r
            "Score": [72, 91]\r
        })\r
    }\r
\r
    for name, df in all_sheets.items():\r
        print(f"\\n[Sheet: {name}] Shape: {df.shape}")\r
        print(df)\r
\r
if __name__ == "__main__":\r
    main()\r
`,y=`"""\r
02_excel_engines_and_range_parsing.py\r
=====================================\r
Topic: Excel Engines (openpyxl, calamine), skiprows, and Letter Column Ranges\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("EXCEL ENGINES, SKIPROWS & EXCEL-STYLE COLUMN RANGES")\r
    print("=" * 70)\r
\r
    # 1. Real-world corporate Excel files often have title banners and disclaimers\r
    # in rows 1-3 before the actual tabular header starts at row 4.\r
    # We skip these metadata rows using: skiprows=3 or header=3\r
    print("Pattern for Skipping Title Banners in Corporate Spreadsheets:")\r
    print("  df = pd.read_excel('financial_report.xlsx', skiprows=3, nrows=50)")\r
\r
    # 2. Excel-Style Column Letter Ranges: usecols='A:D' or 'A,C:E'\r
    print("\\nPattern for Selecting Excel Column Letter Ranges:")\r
    print("  df_range = pd.read_excel('tax_audit.xlsx', usecols='A:D')")\r
    print("  df_custom = pd.read_excel('tax_audit.xlsx', usecols='A,C:F')")\r
\r
    # 3. High-Performance Engines: 'calamine' vs 'openpyxl'\r
    # 'calamine' (Rust-based Excel parser) can be up to 10x faster for large workbooks!\r
    print("\\nSelecting Parser Engine:")\r
    print("  df_openpyxl = pd.read_excel('data.xlsx', engine='openpyxl')")\r
    print("  df_fast     = pd.read_excel('huge_data.xlsx', engine='calamine')")\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
03_multi_sheet_consolidation_pipeline.py\r
========================================\r
Topic: Consolidating Multi-Sheet Workbooks into a Single Master DataFrame\r
Author: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Target: Machine Learning & Data Science Foundations\r
"""\r
\r
import pandas as pd\r
\r
def main():\r
    print("=" * 70)\r
    print("ETL PIPELINE: CONSOLIDATING MULTI-SHEET WORKBOOKS INTO ONE MASTER DF")\r
    print("=" * 70)\r
\r
    # Simulated Workbook with 3 branch sheets: 'Barrackpore', 'Shyamnagar', 'Ichapur'\r
    branch_sheets = {\r
        "Barrackpore": pd.DataFrame({\r
            "StudentID": [101, 102],\r
            "Name": ["Debangshu", "Susmita"],\r
            "Course": ["ML", "ML"],\r
            "Fees_Paid_INR": [15000, 15000]\r
        }),\r
        "Shyamnagar": pd.DataFrame({\r
            "StudentID": [201, 202],\r
            "Name": ["Tuhina", "Sachin"],\r
            "Course": ["DS", "DS"],\r
            "Fees_Paid_INR": [12000, 12000]\r
        }),\r
        "Ichapur": pd.DataFrame({\r
            "StudentID": [301],\r
            "Name": ["Swadeep"],\r
            "Course": ["ML"],\r
            "Fees_Paid_INR": [15000]\r
        })\r
    }\r
\r
    # Consolidated Pipeline:\r
    # 1. Iterate through dictionary items\r
    # 2. Add 'Branch' identifier column to track sheet provenance\r
    # 3. Concatenate vertically via pd.concat\r
    consolidated_list = []\r
    for branch_name, df_b in branch_sheets.items():\r
        df_copy = df_b.copy()\r
        df_copy["Branch"] = branch_name  # Track source sheet\r
        consolidated_list.append(df_copy)\r
\r
    master_df = pd.concat(consolidated_list, ignore_index=True)\r
\r
    print("Consolidated Master DataFrame across all Branch Sheets:\\n", master_df)\r
    print(f"\\nTotal Records: {len(master_df)}, Total Revenue: ₹{master_df['Fees_Paid_INR'].sum():,}")\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`========================================================================\r
TOPIC 5 NOTE: READING EXCEL FILES WITH pd.read_excel()\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
========================================================================\r
\r
1. ESSENTIAL REQUIREMENTS & ENGINES\r
-----------------------------------\r
- Installation:\r
  \`pip install openpyxl\` (Required for modern \`.xlsx\` XML spreadsheets)\r
  \`pip install xlrd\` (Required for legacy \`.xls\` binary 97-2003 spreadsheets)\r
  \`pip install calamine\` (High-performance Rust-based Excel parser)\r
\r
2. CONTROLLING SHEETS (sheet_name)\r
----------------------------------\r
- \`sheet_name=0\`: Reads the first sheet (default).\r
- \`sheet_name='SheetName'\`: Reads specific sheet by exact string name.\r
- \`sheet_name=['Sheet1', 'Sheet2']\`: Reads specified sheets as a dictionary of DataFrames.\r
- \`sheet_name=None\`: Ingests ALL sheets in the workbook into a single dictionary \`{ 'Sheet1': df1, 'Sheet2': df2 }\`.\r
\r
3. ADVANCED SPREADSHEET PARSING PARAMETERS\r
------------------------------------------\r
- \`skiprows=N\`: Skips metadata header banners, company logos, and title text.\r
- \`header=N\`: Explicitly sets which row contains column names (0-indexed).\r
- \`usecols='A:E'\`: Reads Excel column letter ranges directly without loading entire sheet into RAM.\r
- \`dtype\`: Prevents leading zeros from being dropped from tax IDs or student phone numbers.\r
\r
4. MULTI-SHEET CONSOLIDATION PATTERN\r
------------------------------------\r
\`\`\`python\r
all_sheets = pd.read_excel('sales_2026.xlsx', sheet_name=None)\r
df_master = pd.concat([\r
    df.assign(Region=sheet) for sheet, df in all_sheets.items()\r
], ignore_index=True)\r
\`\`\`\r
This merges multi-tab monthly or regional workbooks into a clean tabular master DataFrame for downstream Machine Learning models.\r
`,j=[{id:1,question:"What does `pd.read_excel('data.xlsx', sheet_name=None)` return?",options:["A Python dictionary where each key is a sheet name string and each value is the corresponding parsed Pandas DataFrame.","A single concatenated DataFrame containing all sheets stacked vertically.","An empty DataFrame.","A ValueError because sheet_name cannot be None."],correctAnswer:0,explanation:"Setting `sheet_name=None` instructs Pandas to read all sheets in the workbook and return them as a dictionary of `{sheet_name: DataFrame}`."},{id:2,question:"Which third-party library is required by Pandas as the default engine to read and write modern `.xlsx` Excel spreadsheets?",options:["openpyxl","numpy","scipy","matplotlib"],correctAnswer:0,explanation:"`openpyxl` is the Python library used by Pandas to read and write modern `.xlsx` XML-based Excel files."},{id:3,question:"How can you instruct `pd.read_excel` to only read Excel columns A through D while skipping company title rows in the first 3 rows?",options:["`pd.read_excel('file.xlsx', skiprows=3, usecols='A:D')`","`pd.read_excel('file.xlsx', skip=3, columns='A:D')`","`pd.read_excel('file.xlsx', trim_rows=3, cols=[1,4])`","`pd.read_excel('file.xlsx', start_row=4, end_col='D')`"],correctAnswer:0,explanation:"`skiprows=3` skips the first 3 lines, and `usecols='A:D'` specifies the Excel column letter range to parse."},{id:4,question:"How does `pd.read_excel` compare in speed and performance with `pd.read_csv` for identical tabular data?",options:["`pd.read_csv` is significantly faster because CSV is a plain text stream, while Excel (.xlsx) files are zipped XML archives with formatting and formula overhead.","`pd.read_excel` is 10 times faster than CSV.","Both have identical parsing speeds.","`pd.read_excel` uses less memory than CSV."],correctAnswer:0,explanation:"CSV parsing is vastly faster because it is a simple plain text format parsed in C. `.xlsx` files require unzipping an XML package, resolving styles, formulas, and cell metadata."},{id:5,question:"When consolidating multiple regional sheets from an Excel workbook into a single master DataFrame, what method is commonly chained to track the origin sheet name?",options:["`df.assign(Region=sheet_name)` or `df['Region'] = sheet_name` before `pd.concat`","`df.add_origin()`","`df.track_sheet()`","`pd.merge_all()`"],correctAnswer:0,explanation:"Assigning a new column `Region=sheet_name` onto each individual sheet's DataFrame before calling `pd.concat` preserves provenance and enables categorical grouping."}],d=[{id:"part1",fileName:"01_basic_excel_reading_and_sheets.py",title:"1. Excel Sheet Ingestion (sheet_name)",badge:"Sheets & Dictionaries",code:N,summary:"Demonstrates reading individual tabs by name or 0-index, and reading all sheets into a dictionary with sheet_name=None."},{id:"part2",fileName:"02_excel_engines_and_range_parsing.py",title:"2. Engines & Letter Column Ranges",badge:"Ranges & Engines",code:y,summary:"Skips corporate metadata headers with skiprows, selects Excel column letter spans (usecols='A:D'), and selects openpyxl/calamine engines."},{id:"part3",fileName:"03_multi_sheet_consolidation_pipeline.py",title:"3. Multi-Sheet ETL Consolidation",badge:"Multi-Sheet ETL",code:w,summary:"Consolidates multiple regional branch Excel sheets into a unified master DataFrame with branch provenance tracking."}],l={Barrackpore_ML:{name:"Barrackpore_ML",badge:"ML Batch",rows:[{id:101,student:"Debangshu",course:"Machine Learning",fee:"₹15,000",attendance:"92%"},{id:102,student:"Susmita",course:"Machine Learning",fee:"₹15,000",attendance:"98%"}]},Shyamnagar_DS:{name:"Shyamnagar_DS",badge:"Data Science Batch",rows:[{id:201,student:"Tuhina",course:"Data Science",fee:"₹12,000",attendance:"95%"},{id:202,student:"Sachin",course:"Data Science",fee:"₹12,000",attendance:"84%"}]},Ichapur_AI:{name:"Ichapur_AI",badge:"AI Batch",rows:[{id:301,student:"Swadeep",course:"Deep Learning",fee:"₹18,000",attendance:"75%"}]}},L=()=>{const[r,x]=o.useState("excel_studio"),[c,p]=o.useState("part1"),[s,h]=o.useState("Barrackpore_ML"),[t,u]=o.useState(!1),i=d.find(a=>a.id===c)||d[0],m=Object.entries(l).flatMap(([a,n])=>n.rows.map(b=>({...b,branch:a.split("_")[0]})));return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:[e.jsxs("div",{className:"max-w-6xl mx-auto mb-8 bg-gradient-to-r from-emerald-900/60 via-slate-900 to-teal-900/60 border border-emerald-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-500/40",children:"Module 009_002 • Pandas Essentials"}),e.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-500/40",children:"Topic 5 • Excel Ingestion"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-300 bg-clip-text text-transparent",children:"Reading Excel Files with pd.read_excel()"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base mt-1 max-w-3xl",children:["Ingest multi-tab corporate workbooks: sheet targeting via ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"sheet_name"}),", full workbook loading with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"sheet_name=None"}),", metadata header trimming, and multi-sheet master DataFrame consolidation."]})]})}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 border-t border-slate-800 pt-4",children:[{id:"excel_studio",label:"Interactive Excel Workbook Studio",icon:"📊"},{id:"python_suite",label:"Python Multi-Script Suite",icon:"🐍"},{id:"teacher_notes",label:"Teacher's Classroom Notes",icon:"📝"},{id:"faqs_questions",label:"Quizzes & Questions",icon:"💡"}].map(a=>e.jsxs("button",{onClick:()=>x(a.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${r===a.id?"bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white"}`,children:[e.jsx("span",{children:a.icon}),a.label]},a.id))})]}),r==="excel_studio"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-base font-bold text-slate-200",children:["Spreadsheet Workbook: ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"barrackpore_centers_2026.xlsx"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select individual sheet tabs or view consolidated master table"})]}),e.jsx("button",{onClick:()=>u(!t),className:`px-4 py-2 rounded-xl text-xs font-bold font-mono transition ${t?"bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20":"bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"}`,children:t?"✓ Consolidated Mode Active":"⚡ Consolidate All Sheets (pd.concat)"})]}),!t&&e.jsx("div",{className:"flex flex-wrap gap-2 pt-2 border-t border-slate-800",children:Object.entries(l).map(([a,n])=>e.jsxs("button",{onClick:()=>h(a),className:`px-4 py-2.5 rounded-xl border text-xs font-mono font-semibold transition ${s===a?"bg-emerald-500/20 border-emerald-400 text-emerald-200":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:["📄 ",n.name]},a))})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-base font-bold text-emerald-300",children:t?"Consolidated Master DataFrame across all Sheets":`Parsed Sheet: pd.read_excel(sheet_name='${s}')`}),e.jsxs("span",{className:"text-xs px-2.5 py-1 bg-slate-800 text-slate-300 font-mono rounded",children:["Rows: ",t?m.length:l[s].rows.length]})]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-center text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-slate-400 border-b border-slate-800",children:[e.jsx("th",{className:"p-2 text-slate-600 text-left",children:"Index"}),t&&e.jsx("th",{className:"p-2 text-amber-400 font-bold",children:"Branch (Source)"}),e.jsx("th",{className:"p-2 text-emerald-400 font-bold",children:"StudentID"}),e.jsx("th",{className:"p-2 text-teal-400 font-bold",children:"Student Name"}),e.jsx("th",{className:"p-2 text-cyan-400 font-bold",children:"Course"}),e.jsx("th",{className:"p-2 text-indigo-400 font-bold",children:"Fee Paid"}),e.jsx("th",{className:"p-2 text-purple-400 font-bold",children:"Attendance"})]})}),e.jsx("tbody",{children:(t?m:l[s].rows).map((a,n)=>e.jsxs("tr",{className:"border-b border-slate-900 hover:bg-slate-900/60 transition",children:[e.jsx("td",{className:"p-2.5 text-slate-600 font-mono text-left",children:n}),t&&e.jsx("td",{className:"p-2.5 text-amber-300 font-bold",children:a.branch}),e.jsx("td",{className:"p-2.5 text-slate-300",children:a.id}),e.jsx("td",{className:"p-2.5 text-teal-300 font-sans font-semibold",children:a.student}),e.jsx("td",{className:"p-2.5 text-cyan-300",children:a.course}),e.jsx("td",{className:"p-2.5 text-indigo-300 font-bold",children:a.fee}),e.jsx("td",{className:"p-2.5 text-purple-300",children:a.attendance})]},n))})]})}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 font-mono",children:["Python Code:"," ",e.jsx("span",{className:"text-emerald-300 font-bold",children:t?"pd.concat([df.assign(Branch=name) for name, df in pd.read_excel('file.xlsx', sheet_name=None).items()], ignore_index=True)":`pd.read_excel('barrackpore_centers_2026.xlsx', sheet_name='${s}')`})]})]})]}),r==="python_suite"&&e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:d.map(a=>e.jsxs("button",{onClick:()=>p(a.id),className:`p-4 rounded-xl border text-left transition-all ${c===a.id?"bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-500/10 scale-102":"bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:a.badge}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:".py"})]}),e.jsx("h4",{className:"text-sm font-bold text-slate-200 mb-1",children:a.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-2 leading-relaxed",children:a.summary})]},a.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-emerald-300",children:i.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:i.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Excel Ingestion Suite"})]}),e.jsx(_,{fileModule:i.code,title:i.fileName})]})]}),r==="teacher_notes"&&e.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[e.jsx(S,{name:"Sukanta Hui",title:"Senior ML Instructor, Barrackpore Lab",quote:"Corporate business units love Excel workbooks with multiple tabs (e.g., quarterly finances, departmental budgets, regional branches). Using sheet_name=None along with a dictionary comprehension and pd.concat() lets you automate what used to take hours of manual copy-pasting in 3 lines of Python!"}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsx("h3",{className:"text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2",children:e.jsx("span",{children:"📚 Comprehensive Topic Notes"})}),e.jsx(g,{content:E})]})]}),r==="faqs_questions"&&e.jsx("div",{className:"max-w-5xl mx-auto space-y-6",children:e.jsx(f,{questions:j})})]})};export{L as default};
