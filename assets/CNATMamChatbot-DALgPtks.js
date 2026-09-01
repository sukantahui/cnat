import{b as p,j as e}from"./vendor-react-core-Doz9nIC6.js";import{m as _,n as U,a6 as H,$ as z,bU as G,aR as V,Q,c0 as K,c1 as J,ad as X,p as Y,U as Z,c2 as ee}from"./vendor-icons-DGCamHnX.js";const c={excel:[{label:"💡 Explain Topic",query:"Can you explain this Excel topic in simple terms with key formula rules?"},{label:"🔍 XLOOKUP vs VLOOKUP",query:"What is the difference between XLOOKUP and VLOOKUP?"},{label:"⚡ Dynamic Arrays",query:"Explain dynamic arrays like FILTER, UNIQUE, and SORT."},{label:"📍 Institute Address",query:"What is the official address and campus location of Coder & AccoTax?"},{label:"👨‍🏫 Teacher Details",query:"Who are the teachers and faculty members at Coder & AccoTax?"},{label:"📚 All Courses",query:"What are all the courses offered at Coder & AccoTax?"},{label:"📞 Helpline",query:"What is the official helpline number and contact details?"}],python:[{label:"💡 Explain Topic",query:"Can you explain this Python concept with practical code?"},{label:"🐍 List vs Tuple",query:"What is the difference between Lists and Tuples in Python?"},{label:"⚙️ Decorators & Generators",query:"Explain Python decorators and generators with examples."},{label:"📊 Pandas DataFrames",query:"How do I manipulate data using Pandas DataFrames in Python?"},{label:"📍 Institute Address",query:"What is the address of the organisation?"},{label:"👨‍🏫 Teacher Details",query:"Give me details of teachers and mentors at Coder & AccoTax."},{label:"📚 Courses Offered",query:"List all courses offered at Coder & AccoTax."}],"c-language":[{label:"💡 Explain Topic",query:"Explain this C programming concept step-by-step."},{label:"📌 Pointers in C",query:"How do pointers and memory addresses work in C?"},{label:"🧠 Dynamic Memory",query:"What is the difference between malloc(), calloc(), and free()?"},{label:"📍 Institute Address",query:"Where is Coder & AccoTax located? Give full address."},{label:"👨‍🏫 Teacher Details",query:"Who teaches C programming and what are teacher details?"},{label:"📚 All Courses",query:"What courses are available at Coder & AccoTax?"}],dsa:[{label:"💡 Explain Topic",query:"Explain this data structure and its operations clearly."},{label:"⏱️ Big-O Complexity",query:"Explain Big-O time and space complexity with examples."},{label:"🌳 Binary Search Tree",query:"How does a Binary Search Tree (BST) work and what are its traversal orders?"},{label:"🔄 QuickSort vs MergeSort",query:"Compare QuickSort and MergeSort algorithms."},{label:"📍 Institute Address",query:"Provide the address and location of the organisation."},{label:"👨‍🏫 Teacher Details",query:"Who is the DSA mentor and faculty team?"},{label:"📚 Courses",query:"What courses do you teach at Coder & AccoTax?"}],tally:[{label:"💡 Explain Topic",query:"Explain this Tally Prime accounting topic clearly."},{label:"⚖️ Golden Rules of Accounts",query:"What are the Golden Rules of Debit and Credit?"},{label:"📑 GST Invoicing & Vouchers",query:"How do CGST, SGST, and IGST work in Tally vouchers?"},{label:"📍 Institute Address",query:"What is the campus address of Coder & AccoTax?"},{label:"👨‍🏫 Teacher Details",query:"Who are the accounting and Tally teachers?"},{label:"📚 Courses",query:"What accounting and software courses are offered?"}],"java-core":[{label:"💡 Explain Topic",query:"Explain this Java OOP concept with a code example."},{label:"🧱 4 Pillars of OOP",query:"Explain Encapsulation, Inheritance, Polymorphism, and Abstraction in Java."},{label:"📦 ArrayList vs HashMap",query:"What is the difference between ArrayList and HashMap in Java Collections?"},{label:"📍 Institute Address",query:"What is the address of the organisation?"},{label:"👨‍🏫 Teacher Details",query:"Who teaches Java and ICSE/ISC Computer Science?"},{label:"📚 All Courses",query:"What courses are taught at the institute?"}],react:[{label:"💡 Explain Topic",query:"Explain this React concept in simple terms."},{label:"⚡ useState vs useEffect",query:"What is the difference between useState and useEffect hooks?"},{label:"🎯 useMemo vs useCallback",query:"When should I use useMemo vs useCallback in React?"},{label:"📍 Institute Address",query:"What is the address of Coder & AccoTax?"},{label:"👨‍🏫 Teacher Details",query:"Tell me about Sukanta Sir and the faculty members."},{label:"📚 Courses",query:"Show all courses available at Coder & AccoTax."}],javascript:[{label:"💡 Explain Topic",query:"Explain this JavaScript concept with clear examples."},{label:"⏳ Promises & Async/Await",query:"How do Promises, async, and await work in JavaScript?"},{label:"🔒 Closures & Scope",query:"What is a Closure in JavaScript and why is it useful?"},{label:"📍 Institute Address",query:"Where is the organisation located?"},{label:"👨‍🏫 Teacher Details",query:"Who are the instructors and mentors?"},{label:"📚 Courses Offered",query:"What courses are offered at Coder & AccoTax?"}],unix:[{label:"💡 Explain Topic",query:"Explain this Unix/Linux command and its flags."},{label:"🔐 chmod & Permissions",query:"How do file permissions (rwx) and chmod work in Unix?"},{label:"🔍 grep, sed & awk",query:"What are grep, sed, and awk text processing tools in Unix?"},{label:"📍 Institute Address",query:"What is the address of the organisation?"},{label:"👨‍🏫 Teacher Details",query:"Who can I contact for Unix/Linux guidance?"},{label:"📚 Courses",query:"What IT and programming courses are available?"}],"rdbms-mysql":[{label:"💡 Explain Topic",query:"Explain this MySQL database concept clearly."},{label:"📐 Normalization (1NF to BCNF)",query:"Explain 1NF, 2NF, 3NF, and BCNF database normalization."},{label:"🔗 SQL Joins (INNER, LEFT, RIGHT)",query:"What are the different types of SQL Joins with examples?"},{label:"📍 Institute Address",query:"Where is the institute located?"},{label:"👨‍🏫 Teacher Details",query:"Who are the database faculty members?"},{label:"📚 Courses",query:"What courses are offered at Coder & AccoTax?"}],"quantitative-analysis":[{label:"💡 Explain Topic",query:"Explain this quantitative analysis / operations research technique."},{label:"📊 PERT vs CPM",query:"What is the difference between PERT and CPM in project scheduling?"},{label:"📈 Linear Programming (LPP)",query:"How to formulate and solve a Linear Programming Problem (LPP)?"},{label:"📍 Institute Address",query:"What is the organisation's address?"},{label:"👨‍🏫 Teacher Details",query:"Who teaches Quantitative Analysis?"},{label:"📚 Courses",query:"What courses are offered at Coder & AccoTax?"}],general:[{label:"📍 Institute Address",query:"What is the official address and campus location of Coder & AccoTax?"},{label:"👨‍🏫 Teachers Details",query:"Who are the teachers and mentors at Coder & AccoTax?"},{label:"📚 Courses Offered",query:"What courses and certifications are offered at Coder & AccoTax?"},{label:"💰 Fees & Admission",query:"What is the admission procedure and fee structure?"},{label:"📞 Contact Helpline",query:"What are the official helpline and WhatsApp contact numbers?"}]};function ae(u="general"){const t=String(u).toLowerCase();return c[t]?c[t]:t.includes("excel")?c.excel:t.includes("python")?c.python:t.includes("c-")||t==="c"?c["c-language"]:t.includes("dsa")||t.includes("structure")?c.dsa:t.includes("tally")||t.includes("account")?c.tally:t.includes("java-core")||t.includes("icse")||t.includes("isc")||t.includes("java")?c["java-core"]:t.includes("react")?c.react:t.includes("javascript")||t.includes("node")?c.javascript:t.includes("unix")||t.includes("linux")?c.unix:t.includes("mysql")||t.includes("rdbms")||t.includes("sql")?c["rdbms-mysql"]:t.includes("quantitative")||t.includes("pert")||t.includes("math")?c["quantitative-analysis"]:c.general}function N(){return`### 📍 Coder & AccoTax Official Address & Location

**Coder & AccoTax (Centre of Excellence)** is situated in Barrackpore, North 24 Parganas, Kolkata.

#### 🏢 Postal Address:
> **Coder & AccoTax**  
> **25(10/A) Shibtala Road, Nona Chandan Pukur**  
> **Barrackpore, Kolkata - 700122**  
> **District: North 24 Parganas, West Bengal, India**  
> *(PIN Code: 700122)*

---

#### 🗺️ Landmarks & How to Reach:
- **Nearest Railway Station:** **Barrackpore Railway Station** (Sealdah Main Line).
  - *Travel Distance:* Only **5 to 7 minutes** by Auto-rickshaw or Toto from Barrackpore Station Platform 1.
  - *Route:* Take an auto/toto to **Shibtala More (Nona Chandan Pukur)**.
- **Nearest Bus Stops:** Sukchar / Titagarh / Barrackpore Station Bus Terminus on BT Road & Ghoshpara Road.
- **Prominent Landmarks:** Near Nona Chandan Pukur Shibtala Temple, adjacent to the local market area and State Bank of India (SBI) Nona Chandan Pukur branch corridor.

---

#### 🕒 Campus Hours & Facilities:
- **Visiting / Office Hours:** Monday to Sunday: **8:00 AM – 8:30 PM**
- **Campus Facilities:**
  - 🖥️ High-speed computer lab with 1:1 dedicated student terminals.
  - ❄️ Fully Air-Conditioned classrooms & high-speed optical fiber WiFi.
  - ⚡ 100% Uninterrupted Power Backup (Inverter/Generator).
  - 📚 Offline library, live code visualizers, and project practice zones.

📞 **Need Directions or Pickup Assistance?** Call/WhatsApp our reception at **+91 94324 56083** or **+91 70037 56860**.`}function P(){return`### 👨‍🏫 Distinguished Teachers & Mentors at Coder & AccoTax

Our faculty team brings decades of real-world corporate engineering, software architecture, and academic leadership to mentor every student individually:

---

#### 1. **Mr. Sukanta Hui**
- **Designation:** Founder, Director & Head of Technical Training
- **Academic & Industry Experience:** **28+ Years** of Excellence in Software Engineering, Financial Modeling & Architecture.
- **Subject Specializations:**
  - Full-Stack Web Development (JavaScript ES6+, React 19, Node.js, Express)
  - Advanced Python & Data Analytics (NumPy, Pandas, Matplotlib, Automation)
  - C, C++, Systems Programming & Object-Oriented Architecture
  - Advanced Microsoft Excel Masterclass (Dynamic Arrays, Power Query, DAX, VBA Macros)
- **Direct Contact:** 📱 **+91 70037 56860** | ✉️ \`sukantahui@codernaccotax.co.in\`

---

#### 2. **Ms. Tanusree Hui (CNAT Mam)**
- **Designation:** Academic Dean & Senior DSA / Mathematics Mentor
- **Experience:** **18+ Years** in Computer Science & Academic Mentorship
- **Subject Specializations:**
  - Data Structures & Algorithms (DSA, Trees, Graphs, Sorting, Big-O Complexity)
  - Computational Mathematics, Discrete Structures & Quantitative Reasoning
  - Java Core & Advanced (ICSE Class 9/10 & ISC Class 11/12 Board Toppers Mentor)
  - C Programming Foundations & Algorithmic Logic Building

---

#### 3. **Mr. Chandan Das**
- **Designation:** Senior Faculty — Corporate Accounting & Taxation
- **Experience:** **15+ Years** in Corporate Auditing & Financial Practice
- **Subject Specializations:**
  - TallyPrime with GST (CGST, SGST, IGST), TDS, TCS, and E-Way Billing
  - Corporate Bookkeeping, Final Accounts (P&L, Balance Sheet, Cash Flow)
  - Business Data Analytics & Commercial Auditing

---

#### 4. **Ms. Sreeparna Das**
- **Designation:** Mentor — Data Structures & Problem-Solving
- **Specializations:** Competitive programming, Algorithmic optimization, Recursion, Dynamic Programming, and technical interview preparation.

---

#### 5. **Ms. Mounita Bhandari & Ms. Ritaja Ghosh**
- **Designation:** Lab Instructors & Practical Student Coordinators
- **Specializations:** Hands-on lab guidance, real-time code debugging, assignment evaluation, and one-on-one student doubts clearance.

---

#### 6. **Mr. Sourav Bhattachariya**
- **Designation:** Faculty — Financial Accounting & Tally
- **Specializations:** Double-entry journal entries, bank reconciliations, inventory management, and statutory payroll accounting.

---

#### 🎯 Subject-Wise Mentor Quick Reference:
| Domain | Lead Mentor | Contact / Guidance |
| :--- | :--- | :--- |
| **Python / Web / React / Excel / C** | **Mr. Sukanta Hui** | \`+91 70037 56860\` |
| **DSA / Java / ICSE-ISC Boards** | **Ms. Tanusree Hui (CNAT Mam)** | Via Academic Desk |
| **TallyPrime / GST / Taxation** | **Mr. Chandan Das** | Via Helpline |
| **Lab Doubts & Practice** | **Ms. Mounita & Ms. Ritaja** | In-Lab Assistance |`}function E(){return`### 📚 Comprehensive Courses & Certification Tracks Offered

**Coder & AccoTax (Centre of Excellence)** provides 100% practical, lab-first diploma, certificate, and academic semester courses tailored for students, job-seekers, and working professionals.

---

### 💻 1. Software Development & Programming Tracks:
1. **Full-Stack Web Engineering:**
   - HTML5, CSS3, Modern Tailwind CSS, JavaScript (ES6+ / Modern)
   - React 19 (Hooks, Context, State Management, Vite, Next.js intro)
   - Backend with Node.js, Express.js, RESTful APIs, MongoDB, and MySQL
2. **Python Programming & Data Analytics:**
   - Core Python, OOP, File Handling, Exception Handling
   - Data Analytics with NumPy, Pandas, Matplotlib, Seaborn, and Excel Integration
   - Web Scraping & Automation Scripts
3. **C & C++ Programming Masterclass:**
   - Pointers, Dynamic Memory Allocation (\`malloc\`/\`free\`), Structs, Typedef
   - Object-Oriented Programming (Classes, Inheritance, Polymorphism, Templates)
4. **Core & Advanced Java:**
   - Java 17/21, OOP 4 Pillars, Java Collections Framework (\`ArrayList\`, \`HashMap\`, \`TreeSet\`)
   - Exception Handling, Multi-threading, File I/O, JDBC Database Connectivity
5. **Data Structures & Algorithms (DSA):**
   - Arrays, Singly/Doubly Linked Lists, Stacks, Queues, Binary Search Trees (BST), AVL Trees
   - Graph Algorithms (BFS, DFS, Dijkstra), Dynamic Programming, Big-O Asymptotic Analysis
   - Coding Interview Prep (LeetCode & HackerRank pattern mastery)
6. **Database Engineering (RDBMS & MySQL):**
   - Relational Database Design, Normalization (1NF, 2NF, 3NF, BCNF)
   - Advanced SQL Queries, Joins (\`INNER\`, \`LEFT\`, \`RIGHT\`), Subqueries, Triggers, Views, Indexes
7. **Unix / Linux System Administration & Shell Scripting:**
   - Linux Terminal Commands, Octal \`chmod\` Permissions, Process Control (\`ps\`, \`kill\`, \`nohup\`)
   - Text Processing with \`grep\`, \`sed\`, and \`awk\`, Automated Bash Scripting

---

### 📊 2. Financial Accounting, Taxation & Spreadsheet Analytics:
1. **TallyPrime Ultra-Professional Diploma:**
   - Double-Entry Bookkeeping & 3 Golden Rules of Accounts
   - Complete GST Invoicing (CGST, SGST, IGST), TDS, TCS, Payroll, and E-Way Bills
   - Bank Reconciliation (BRS), Cost Centres, Inventory, and Balance Sheet Finalization
2. **Microsoft Excel Masterclass (Basic to Ultra-Expert):**
   - 500+ Formulas, Modern Lookups (\`XLOOKUP\`, \`INDEX-MATCH\`)
   - Dynamic Array Engine (\`FILTER\`, \`UNIQUE\`, \`SORT\`, \`SEQUENCE\`, \`LAMBDA\`)
   - Power Query ETL, Power Pivot Data Modeling, DAX Measures, and VBA Macros
   - Executive Dashboard Design & Financial Modeling
3. **Corporate GST & Income Tax Return Filing:**
   - Practical GSTR-1, GSTR-3B, Input Tax Credit (ITC) reconciliation, and IT Returns

---

### 🎓 3. Academic Boards & University Degree Programs:
- **School Boards:** ICSE Class 9 & 10 (Computer Applications) | ISC Class 11 & 12 (Computer Science) | CBSE & WB Board CS
- **University Semester Tuition:** BCA, MCA, B.Tech (CSE / IT / ECE), B.Sc (Computer Science / Data Science), B.Com (Computerized Accounting)

---

### 🌟 Key Highlights for Every Course:
- ✅ **100% Practical Lab Access** with 1-to-1 computer workstation.
- ✅ **ISO 9001:2015 Recognized Course Completion Certificate**.
- ✅ **Live Industry Projects & Git/GitHub Portfolio Building**.
- ✅ **Flexible Batches:** Weekday & Weekend slots (Morning, Afternoon & Evening).
- ✅ **Affordable Fees:** Easy monthly installment plans available.

📞 **To download detailed syllabus or book a Free Demo Class:**  
WhatsApp **+91 94324 56083** or Call **+91 70037 56860**.`}function O(){return`### 📞 Coder & AccoTax Official Contact & Helpline

Here are the official contact and communication coordinates:

- **Primary WhatsApp & Admissions Helpline:** **+91 94324 56083** / **+91 70037 56860**
- **Academic Mentor Lead (Mr. Sukanta Hui):** **+91 70037 56860** / \`sukantahui@codernaccotax.co.in\`
- **General Inquiries:** \`info.codenaccotax@co.in\` | \`codenaccotax@gmail.com\`
- **Official Web Portal:** [www.codernaccotax.co.in](https://www.codernaccotax.co.in)
- **Campus Address:** 
  > **Coder & AccoTax (Centre of Excellence)**  
  > 25(10/A) Shibtala Road, Nona Chandan Pukur, Barrackpore, Kolkata - 700122, West Bengal, India  
  > *(Near Barrackpore Railway Station & Shibtala More)*

*CNAT Mam's Tip:* Feel free to WhatsApp your name and desired course to **+91 94324 56083** for instant brochure and batch timing assistance!`}const te=[{category:"institute_address",keywords:["address","location","where is","where located","where are you","situated","landmark","barrackpore","shibtala","pin code","how to reach","directions","campus address","office address","orgnisation address","organisation address","institution address"],generate:()=>N()},{category:"faculty_profiles",keywords:["teacher","teachers","faculty","instructor","instructors","mentor","mentors","educator","sukanta","sukanta sir","tanusree","tanusree mam","cnat mam","chandan","chandan sir","sreeparna","mounita","ritaja","sourav","who is teaching","who teaches","sir","madam","mam","teachers details","teacher details","faculty details"],generate:()=>P()},{category:"courses_catalog",keywords:["course","courses","subject","subjects","curriculum","syllabus","programs","offer","degrees","diploma","what do you teach","what courses","all courses","courses offered","training tracks","certification","certifications","bca","mca","btech","icse","isc"],generate:()=>E()},{category:"institute_contact",keywords:["contact","phone","number","whatsapp","call","helpline","reach","telephone","mobile","mail","email","office phone","helpline number"],generate:()=>O()},{category:"institute_about",keywords:["about","institute","organisation","organization","centre of excellence","accreditation","iso","cnat","coder & accotax","why choose"],generate:()=>`### 🏢 About Coder & AccoTax (Centre of Excellence)

- **ISO 9001:2015 Certified** Premier IT & Financial Training Institution in Barrackpore, Kolkata.
- **Legacy of Trust:** Over **28+ years** of academic excellence mentoring thousands of B.Tech, BCA, MCA, ICSE/ISC, CBSE, and corporate professionals.
- **Core Pillars:**
  - 100% Practical, Lab-First Curriculum with industry-standard assignments.
  - One-on-One Doubt Clearance and real-world project portfolios.
  - Dual Focus: High-Tech Software Development + Professional Financial Accounting.
  - Modern In-Browser Learning Tools: Interactive IDEs, Code Playgrounds, Visualizers, and Quiz Engines.`},{category:"admission_fees",keywords:["admission","admissions","fee","fees","cost","enroll","enrollment","join","batch","timing","timings","class time","offline","online","installment","fee structure"],generate:()=>`### 🎓 Admissions & Batch Information

- **How to Enroll:**
  1. Visit our Barrackpore campus or submit an inquiry via WhatsApp at **+91 94324 56083**.
  2. Take a free counseling & demo session with our senior faculty.
  3. Choose your batch schedule (Weekday & Weekend slots available for students & working professionals).
- **Flexible Fee Structure:**
  - Affordable monthly installment plans available for all diploma and certificate courses.
  - Includes full access to physical computer labs, digital study roadmaps, interactive quizzes, and verified certificates.
- **Batch Formats:** Offline classroom labs at Barrackpore & Live interactive online mentorship.`},{category:"excel_lookups",keywords:["vlookup","xlookup","index match","hlookup","lookup","lookup value","table array"],generate:()=>'### 🔍 Excel Lookup Master Guide: XLOOKUP vs VLOOKUP vs INDEX-MATCH\n\nHere is how modern lookup functions compare:\n\n#### 1. `XLOOKUP` *(Recommended in Excel 365 / 2021+)*:\n```excel\n=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])\n```\n- **Advantages:** Works in any direction (left or right), defaults to exact match (no more `FALSE` needed), built-in `if_not_found` guard, and never breaks if columns are inserted.\n- **Example:** `=XLOOKUP(E2, A2:A100, C2:C100, "Not Found")`\n\n#### 2. `INDEX-MATCH` *(Universal legacy best practice)*:\n```excel\n=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))\n```\n- Extremely fast for massive datasets and immune to column insertion breakage.\n\n#### 3. `VLOOKUP` *(Legacy function)*:\n```excel\n=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])\n```\n- **Limitation:** Can only look from left to right. Always supply `FALSE` (or `0`) for exact match to avoid silent errors.'},{category:"excel_dynamic_arrays",keywords:["filter","unique","sort","sortby","sequence","randarray","dynamic array","spill","#spill!","spill operator","#"],generate:()=>'### ⚡ Excel Dynamic Arrays & Spill Engine (Excel 365+)\n\nDynamic array formulas automatically spill calculation results across adjacent cells without needing `Ctrl+Shift+Enter`.\n\n1. **`FILTER(array, include, [if_empty])`**:\n   ```excel\n   =FILTER(A2:D100, C2:C100 = "Kolkata", "No Records Found")\n   ```\n2. **`UNIQUE(array, [by_col], [exactly_once])`**:\n   ```excel\n   =UNIQUE(B2:B100)\n   ```\n3. **`SORT(array, [sort_index], [sort_order])`**:\n   ```excel\n   =SORT(FILTER(A2:D50, D2:D50 > 50000), 4, -1)\n   ```\n4. **Fixing `#SPILL!` Error:**\n   - Make sure all downstream and rightward cells in the spill range are completely blank. Clear any obstruction, formatted blank spaces, or merged cells.'},{category:"excel_math_aggregations",keywords:["sumifs","countifs","averageifs","sumproduct","maxifs","minifs","aggregation","aggregate"],generate:()=>'### 🧮 Multi-Condition Aggregation Formulas in Excel\n\n1. **`SUMIFS(sum_range, criteria_range1, criteria1, ...)`**:\n```excel\n=SUMIFS(D2:D100, A2:A100, "North", B2:B100, ">=2026-01-01")\n```\n*Note:* In `SUMIFS`, the `sum_range` comes **first**, unlike legacy `SUMIF` where it was last!\n\n2. **`COUNTIFS(criteria_range1, criteria1, ...)`**:\n```excel\n=COUNTIFS(C2:C100, "Delivered", E2:E100, ">5000")\n```\n\n3. **`SUMPRODUCT(array1, [array2], ...)`**:\n```excel\n=SUMPRODUCT((A2:A100="IT") * (B2:B100="Senior"), C2:C100, D2:D100)\n```\n- Evaluates multi-criteria array multiplications without requiring an explicit array entry shortcut.'},{category:"excel_error_handling",keywords:["#value!","#n/a","#ref!","#num!","#calc!","iferror","ifna","error in excel","formula error"],generate:()=>'### 🛠️ Excel Error Troubleshooting & Prevention Guide\n\n| Error Code | Root Cause | Solution & Defensive Guard |\n| :--- | :--- | :--- |\n| **`#N/A`** | Lookup value does not exist in table array. | Use `=XLOOKUP(..., "Not Found")` or `=IFNA(VLOOKUP(...), "Not Found")`. |\n| **`#VALUE!`** | Data type mismatch (e.g. attempting to add text to a number). | Ensure numeric columns are formatted as Numbers using `VALUE()` or `NUMBERVALUE()`. |\n| **`#REF!`** | Cell reference was deleted or invalid. | Re-link target cells or replace with dynamic Index/XLookup references. |\n| **`#SPILL!`** | Dynamic array is blocked by existing data or merged cells. | Clear all obstructing cells in the spill boundary. |\n| **`#DIV/0!`** | Denominator is zero or blank cell. | Wrap with `=IF(B2=0, 0, A2/B2)` or `=IFERROR(A2/B2, 0)`. |'},{category:"python_core",keywords:["python","list","tuple","dict","dictionary","set","comprehension","lambda","generator","decorator","args","kwargs"],generate:()=>`### 🐍 Python Core Programming Mastery

1. **Core Data Structures Comparison:**
   - **List (\`[]\`):** Mutable, ordered, allows duplicates (\`[1, 2, 2, 3]\`).
   - **Tuple (\`()\`):** Immutable, ordered, hashable (\`(10, 20)\`). Ideal for fixed records.
   - **Set (\`{}\`):** Mutable, unordered, **unique elements only** (\`{1, 2, 3}\`).
   - **Dictionary (\`{k: v}\`):** Key-Value hash map, keys must be immutable/hashable.

2. **List & Dict Comprehensions:**
\`\`\`python
# Squared even numbers:
evens_squared = [x**2 for x in range(20) if x % 2 == 0]

# Word length map:
words = ["Coder", "AccoTax", "Barrackpore"]
length_map = {w: len(w) for w in words}
\`\`\`

3. **Decorators in Python:**
\`\`\`python
def log_execution(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}...")
        res = func(*args, **kwargs)
        print(f"Completed {func.__name__} -> {res}")
        return res
    return wrapper

@log_execution
def add(a, b): return a + b
\`\`\``},{category:"python_pandas_numpy",keywords:["pandas","dataframe","series","numpy","groupby","read_csv","loc","iloc","fillna","dropna","array","data analytics"],generate:()=>`### 📊 Python Data Analytics with Pandas & NumPy

1. **Essential Pandas Operations:**
\`\`\`python
import pandas as pd
import numpy as np

# Load dataset:
df = pd.read_csv("student_scores.csv")

# Filtering and Column selection:
toppers = df.loc[df["score"] >= 90, ["name", "subject", "score"]]

# GroupBy Aggregation:
summary = df.groupby("subject")["score"].agg(["mean", "max", "count"]).reset_index()

# Handling Missing Values:
df["score"] = df["score"].fillna(df["score"].median())
\`\`\`

2. **NumPy Vectorized Operations:**
\`\`\`python
arr = np.array([10, 20, 30, 40, 50])
# 10x faster than python loops:
normalized = (arr - arr.mean()) / arr.std()
\`\`\``},{category:"dsa_big_o",keywords:["big-o","time complexity","space complexity","asymptotic","o(1)","o(n)","o(log n)","o(n log n)","o(n^2)"],generate:()=>`### ⏱️ Asymptotic Analysis & Big-O Reference

- **$O(1)$ Constant Time:** Array index access, Hash Table lookup (average), Push/Pop on Stack.
- **$O(\\log N)$ Logarithmic Time:** Binary Search on sorted arrays, Balanced BST operations (AVL, Red-Black).
- **$O(N)$ Linear Time:** Array linear traversal, finding element in unsorted list.
- **$O(N \\log N)$ Linearithmic:** Efficient sorting algorithms (**Merge Sort**, **Heap Sort**, **Quick Sort** average).
- **$O(N^2)$ Quadratic Time:** Nested loops, Bubble Sort, Insertion Sort, Selection Sort.

*CNAT Mam's Tip:* Always consider both **Worst-Case Time** and **Auxiliary Space Complexity** when designing algorithms in interviews!`},{category:"dsa_linked_lists",keywords:["linked list","singly linked list","doubly linked list","node","head","tail","reverse linked list"],generate:()=>`### 🔗 Linked List Foundations in DSA

A Linked List is a linear dynamic data structure where elements (nodes) contain data and pointers to the next node:

\`\`\`c
struct Node {
    int data;
    struct Node *next;
};

// Reversing a Singly Linked List in O(N) time and O(1) space:
struct Node* reverseList(struct Node* head) {
    struct Node *prev = NULL, *curr = head, *next = NULL;
    while (curr != NULL) {
        next = curr->next; // Save next node
        curr->next = prev; // Reverse current node's pointer
        prev = curr;       // Move prev forward
        curr = next;       // Move curr forward
    }
    return prev; // New head
}
\`\`\`
- **Comparison with Arrays:** Linked Lists offer $O(1)$ insertions/deletions given a node reference and dynamic sizing, but lack $O(1)$ random access (traversal is $O(N)$).`},{category:"dsa_trees",keywords:["tree","binary tree","binary search tree","bst","avl tree","inorder","preorder","postorder","balancing","rotation"],generate:()=>`### 🌳 Trees & Binary Search Trees (BST)

- **Binary Tree Property:** Each node has at most 2 children (left and right).
- **BST Invariant:** For every node $X$:
  - All nodes in $X$'s left subtree have values $< X.val$.
  - All nodes in $X$'s right subtree have values $> X.val$.

#### Tree Traversals:
- **Inorder (Left, Root, Right):** Produces elements of a BST in **sorted ascending order**!
- **Preorder (Root, Left, Right):** Used to clone/serialize a tree.
- **Postorder (Left, Right, Root):** Used to delete/free tree memory bottom-up.

#### AVL Tree Balancing:
- Self-balancing BST where the Balance Factor for every node is $BF = \\text{height}(L) - \\text{height}(R) \\in \\{-1, 0, +1\\}$.
- Restores balance in $O(\\log N)$ using **LL, RR, LR, and RL rotations**.`},{category:"dsa_sorting",keywords:["quicksort","mergesort","bubble sort","insertion sort","selection sort","heapsort","sorting","sort algorithm"],generate:()=>`### 🔄 Sorting Algorithms Master Comparison

| Algorithm | Best Time | Average Time | Worst Time | Space | Stable? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Merge Sort** | $O(N \\log N)$ | $O(N \\log N)$ | $O(N \\log N)$ | $O(N)$ | **Yes** |
| **Quick Sort** | $O(N \\log N)$ | $O(N \\log N)$ | $O(N^2)$ *(bad pivot)* | $O(\\log N)$ | No |
| **Heap Sort** | $O(N \\log N)$ | $O(N \\log N)$ | $O(N \\log N)$ | $O(1)$ | No |
| **Insertion Sort** | $O(N)$ *(sorted)* | $O(N^2)$ | $O(N^2)$ | $O(1)$ | **Yes** |
| **Bubble Sort** | $O(N)$ *(optimized)*| $O(N^2)$ | $O(N^2)$ | $O(1)$ | **Yes** |

*CNAT Mam's Tip:* **Merge Sort** is preferred for Linked Lists and when stability is mandatory. **Quick Sort** with randomized pivot is usually faster in practice for contiguous arrays due to superior cache locality.`},{category:"c_pointers_memory",keywords:["pointer","pointers","malloc","calloc","free","realloc","memory leak","segmentation fault","struct","typedef","c language","c programming"],generate:()=>`### 📌 C Programming: Pointers & Dynamic Memory Management

Pointers store the memory addresses of other variables.

1. **Pointer Basics:**
\`\`\`c
int a = 42;
int *ptr = &a; // ptr stores memory address of a
printf("Address: %p, Value: %d
", (void*)ptr, *ptr); // *ptr dereferences value
\`\`\`

2. **Dynamic Memory Allocation (Heap):**
- \`malloc(size_t size)\`: Allocates uninitialized memory buffer.
- \`calloc(size_t n, size_t size)\`: Allocates memory and initializes every byte to \`0\`.
- \`realloc(void *ptr, size_t new_size)\`: Resizes existing memory block.
- \`free(void *ptr)\`: Deallocates memory to prevent **memory leaks**.

\`\`\`c
int *arr = (int*)malloc(5 * sizeof(int));
if (arr == NULL) {
    printf("Memory Allocation Failed!
");
    return 1;
}
for(int i=0; i<5; i++) arr[i] = (i+1) * 10;

free(arr); // Always free heap allocations!
arr = NULL; // Prevent dangling pointer
\`\`\``},{category:"java_oop",keywords:["java","oop","inheritance","polymorphism","encapsulation","abstraction","interface","abstract class","jvm","jre","jdk","garbage collection"],generate:()=>"### ☕ Java: 4 Pillars of Object-Oriented Programming (OOP)\n\n1. **Encapsulation:** Wrapping data (fields) and methods together, shielding direct access via `private` modifiers and providing `getters/setters`.\n2. **Inheritance:** Mechanism where a subclass inherits state and behaviors from a superclass using the `extends` keyword (`class Dog extends Animal`).\n3. **Polymorphism:** Ability of objects to take many forms:\n   - *Compile-Time (Static):* Method Overloading (same method name, different parameter signature).\n   - *Runtime (Dynamic):* Method Overriding (subclass provides specific implementation of inherited superclass method with `@Override`).\n4. **Abstraction:** Hiding internal implementation details and exposing only essential interfaces using `abstract` classes and `interface`.\n\n*Abstract Class vs Interface (Java 8+):*\n- Abstract classes can have state (instance variables) and constructors.\n- Interfaces define pure contracts (though Java 8+ allows `default` and `static` methods). A class can implement multiple interfaces (multiple inheritance of type)."},{category:"java_collections",keywords:["arraylist","hashmap","hashset","linkedlist","collections","iterator","comparable","comparator","generics"],generate:()=>"### 📦 Java Collections Framework Quick Reference\n\n- **`List<T>` (Ordered, Allows Duplicates):**\n  - `ArrayList`: Resizable array. Fast $O(1)$ random access, slow $O(N)$ arbitrary insertions/deletions.\n  - `LinkedList`: Doubly linked list. Fast $O(1)$ insertions/deletions given node pointer.\n- **`Set<T>` (No Duplicates):**\n  - `HashSet`: Fast $O(1)$ lookups backed by hash table. Unordered.\n  - `TreeSet`: Red-Black tree implementation. Elements sorted in ascending order ($O(\\log N)$ operations).\n- **`Map<K, V>` (Key-Value Pairs):**\n  - `HashMap`: Key hashing, allows one `null` key.\n  - `TreeMap`: Sorted keys based on natural order or custom `Comparator`."},{category:"react_hooks",keywords:["react","usestate","useeffect","usememo","usecallback","useref","custom hook","react 19","props","state","jsx","virtual dom"],generate:()=>'### ⚛️ React 19 & Modern Hooks Guide\n\n1. **`useState(initialState)`**: Manages component-local reactive state.\n```jsx\nconst [count, setCount] = useState(0);\n// Updater function pattern for race-safe updates:\nsetCount(prev => prev + 1);\n```\n\n2. **`useEffect(callback, dependencies)`**: Handles side-effects (API calls, subscriptions, DOM listeners).\n```jsx\nuseEffect(() => {\n  const timer = setInterval(() => console.log("Tick"), 1000);\n  return () => clearInterval(timer); // Cleanup function\n}, []); // Empty dependency array = runs once on mount\n```\n\n3. **`useMemo` vs `useCallback` (Performance Optimization):**\n   - `useMemo(() => computeExpensiveValue(a, b), [a, b])`: Caches the **computed result value**.\n   - `useCallback(() => { doSomething(a); }, [a])`: Caches the **function definition instance** to prevent unnecessary child re-renders.\n\n4. **`useRef(initialValue)`**: Holds a mutable reference that persists across re-renders without triggering a UI re-render (perfect for DOM node references or timers).'},{category:"js_async_closures",keywords:["javascript","closure","closures","promise","promises","async","await","event loop","callback","let vs var","arrow function","destructuring"],generate:()=>`### 💛 Modern JavaScript: Closures & Asynchronous Execution

1. **Closures:** A closure is a function that retains access to its lexical scope even when executed outside that scope.
\`\`\`javascript
function createCounter() {
  let count = 0; // Private variable encapsulated in closure
  return () => ++count;
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
\`\`\`

2. **Promises & \`async/await\`:**
\`\`\`javascript
async function fetchStudentData(studentId) {
  try {
    const response = await fetch(\`/api/students/\${studentId}\`);
    if (!response.ok) throw new Error("Network request failed");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
\`\`\`

3. **Event Loop & Microtask Queue:**
   - Synchronous code executes first on Call Stack -> Microtasks (\`Promise.then\`, \`queueMicrotask\`) -> Macrotasks (\`setTimeout\`, \`setInterval\`, I/O).`},{category:"tally_accounting",keywords:["tally","tallyprime","debit","credit","golden rule","golden rules","journal","ledger","trial balance","balance sheet","gst","cgst","sgst","igst","voucher","tds","f4","f5","f6","f7","f8","f9","contra","payment","receipt"],generate:()=>`### 📑 TallyPrime & Financial Accounting Essentials

#### 1. The 3 Golden Rules of Double-Entry Bookkeeping:
1. **Personal Accounts** *(Persons, Firms, Companies)*:
   - **Debit the Receiver**, **Credit the Giver**.
2. **Real Accounts** *(Tangible & Intangible Assets, Cash, Furniture)*:
   - **Debit what comes in**, **Credit what goes out**.
3. **Nominal Accounts** *(Expenses, Incomes, Losses, Gains)*:
   - **Debit all expenses & losses**, **Credit all incomes & gains**.

#### 2. TallyPrime Essential Voucher Shortcut Keys:
- **\`F4 (Contra)\`**: Cash & Bank internal transfers (e.g. Cash deposited into SBI).
- **\`F5 (Payment)\`**: All cash/bank payments for expenses or suppliers.
- **\`F6 (Receipt)\`**: All cash/bank incoming funds received.
- **\`F7 (Journal)\`**: Non-cash adjustment & depreciation entries.
- **\`F8 (Sales)\`**: Recording sales invoices (with GST).
- **\`F9 (Purchase)\`**: Recording purchase invoices (with Input Tax Credit).

#### 3. GST Taxation Breakdown:
- **Intra-State (Within West Bengal):** CGST (Central) + SGST (State) split 50:50.
- **Inter-State (Outside State, e.g. WB to Delhi):** Full IGST (Integrated GST) applied.`},{category:"rdbms_sql",keywords:["sql","mysql","rdbms","primary key","foreign key","normalization","1nf","2nf","3nf","bcnf","join","inner join","left join","group by","having","acid","transaction","index"],generate:()=>`### 🗄️ Database Management Systems (RDBMS & MySQL)

1. **Database Normalization Tiers:**
   - **1NF (First Normal Form):** Atomic values only (no repeating groups or multi-valued arrays).
   - **2NF (Second Normal Form):** In 1NF + **No partial functional dependency** (every non-prime attribute fully depends on the whole primary key).
   - **3NF (Third Normal Form):** In 2NF + **No transitive dependency** ($X \\to Y \\to Z$).
   - **BCNF (Boyce-Codd Normal Form):** For every functional dependency $X \\to Y$, $X$ must be a Super Key.

2. **SQL Joins Simplified:**
   - **\`INNER JOIN\`**: Returns only matching records from both tables.
   - **\`LEFT JOIN\`**: Returns all rows from left table + matched rows from right table (fills \`NULL\` if no match).
   - **\`GROUP BY\` with \`HAVING\`**: \`WHERE\` filters rows before aggregation; \`HAVING\` filters aggregated groups (\`HAVING count(*) > 5\`).

3. **ACID Properties of Transactions:**
   - **Atomicity:** All-or-nothing execution.
   - **Consistency:** Database transitions from one valid state to another.
   - **Isolation:** Concurrent transactions execute without interference.
   - **Durability:** Committed transactions persist even after system crash.`},{category:"unix_linux",keywords:["unix","linux","chmod","grep","sed","awk","permissions","rwx","ps","kill","top","nohup","shell","bash","vi","vim","pipe","|","tar","find"],generate:()=>"### 🐧 Unix & Linux Terminal Superguide\n\n1. **File Permissions & `chmod` (Octal Mode):**\n   - Permissions: Read (`r=4`), Write (`w=2`), Execute (`x=1`).\n   - Triplets: **Owner | Group | Others**\n   - *Example:* `chmod 755 script.sh` (Owner: `rwx=7`, Group: `r-x=5`, Others: `r-x=5`).\n   - *Example:* `chmod 644 document.txt` (Owner: `rw-=6`, Group: `r--=4`, Others: `r--=4`).\n\n2. **The Big-Three Text Processors:**\n   - **`grep \"pattern\" file.txt`**: Global Regular Expression Print (searches matching lines).\n   - **`sed 's/old/new/g' file.txt`**: Stream Editor (find and replace text non-interactively).\n   - **`awk '{print $1, $3}' file.txt`**: Pattern scanning and column reporting engine.\n\n3. **Process Management & Background Jobs:**\n   - `ps aux | grep node`: Lists active processes.\n   - `kill -9 <PID>`: Force terminates a process.\n   - `command &`: Runs job asynchronously in background.\n   - `nohup ./job.sh &`: Keeps process running even after terminal session disconnects."},{category:"quant_operations_research",keywords:["pert","cpm","critical path","float","slack","linear programming","lpp","simplex","game theory","saddle point","minimax","maximin","transportation problem","assignment problem","hungarian"],generate:()=>`### 📈 Quantitative Analysis & Operations Research

1. **Project Network Analysis: PERT vs CPM:**
   - **CPM (Critical Path Method):** Deterministic time estimates. Finds the longest sequence of dependent activities (Critical Path) with **Total Float = 0**.
   - **PERT (Program Evaluation & Review Technique):** Probabilistic 3-time estimates:
     $$\\text{Expected Time } t_e = \\frac{a + 4m + b}{6}, \\quad \\text{Variance } \\sigma^2 = \\left(\\frac{b - a}{6}\\right)^2$$
     *(where $a$ = optimistic, $m$ = most likely, $b$ = pessimistic time)*.

2. **Game Theory Principles:**
   - **Maximin = Minimax Principle:** If the maximin value of the row player equals the minimax value of the column player, a **Saddle Point** exists (Pure Strategy).
   - **Dominance Rule:** If Strategy A provides equal or superior payoffs to Strategy B under all opponent moves, Strategy B can be eliminated.`},{category:"networking_security",keywords:["osi","tcp","udp","ip","subnet","dns","http","https","router","switch","firewall","encryption","aes","rsa","hash","sha-256","cia triad","phishing","cyber security","network"],generate:()=>`### 🌐 Computer Networks & Cyber Security Essentials

1. **The 7 Layers of the OSI Model:**
   - **7. Application** (HTTP, DNS, FTP, SMTP) -> **6. Presentation** (SSL/TLS, ASCII) -> **5. Session** (Sockets, RPC) -> **4. Transport** (TCP, UDP) -> **3. Network** (IP, Routers) -> **2. Data Link** (Ethernet, MAC, Switches) -> **1. Physical** (Cables, Bits).

2. **TCP vs UDP:**
   - **TCP (Transmission Control Protocol):** Connection-oriented (3-Way Handshake SYN -> SYN-ACK -> ACK), reliable, ordered, error-checked (used for Web, Email, File transfer).
   - **UDP (User Datagram Protocol):** Connectionless, lightweight, no retransmissions (used for Video Streaming, Gaming, DNS, VoIP).

3. **Cyber Security: CIA Triad & Cryptography:**
   - **Confidentiality:** Keeping data private via encryption (**AES-256** symmetric, **RSA** asymmetric).
   - **Integrity:** Ensuring data is untampered via cryptographic hashing (**SHA-256**, digital signatures).
   - **Availability:** Ensuring continuous service uptime (mitigating DDoS with firewalls & redundancy).`}];function re(u,t={}){const o=String(u||"").trim(),a=o.toLowerCase(),l=t.topicTitle||"Curriculum Masterclass",w=String(t.subjectKey||"general").toLowerCase();if(!a)return`Hello dear student! How can I assist you with **${l}**, institute address, teachers details, courses, or programming and accounting questions today?`;if(a.includes("address")||a.includes("location")||a.includes("where is")||a.includes("where are you")||a.includes("where located")||a.includes("situated")||a.includes("how to reach")||a.includes("direction")||a.includes("landmark")||a.includes("shibtala")||a.includes("barrackpore campus")||a.includes("pin code")||a.includes("pincode")||a.includes("orgnisation")||a.includes("organisation"))return a.includes("teacher")||a.includes("faculty")?`${N()}

---

${P()}`:a.includes("course")?`${N()}

---

${E()}`:N();if(a.includes("teacher")||a.includes("teachers")||a.includes("faculty")||a.includes("instructor")||a.includes("instructors")||a.includes("mentor")||a.includes("mentors")||a.includes("educator")||a.includes("who is teaching")||a.includes("who teaches")||a.includes("sukanta sir")||a.includes("sukanta hui")||a.includes("tanusree mam")||a.includes("chandan sir")||a.includes("chandan das")||a.includes("sreeparna")||a.includes("mounita")||a.includes("ritaja")||a.includes("sourav"))return a.includes("course")?`${P()}

---

${E()}`:P();if(a.includes("course")||a.includes("courses")||a.includes("curriculum")||a.includes("syllabus")||a.includes("programs")||a.includes("what do you teach")||a.includes("what courses")||a.includes("all courses")||a.includes("courses offered")||a.includes("training tracks")||a.includes("degrees")||a.includes("diploma")||a.includes("certification")||a.includes("certifications"))return E();if(a.includes("helpline")||a.includes("whatsapp number")||a.includes("phone number")||a.includes("mobile number")||a.includes("call")||a.includes("contact number"))return O();let v=null,g=0;for(const C of te){let y=0;for(const f of C.keywords)a===f?y+=15:a.includes(f)&&(y+=f.length>4?6:3);y>g&&(g=y,v=C)}return v&&g>=5?v.generate(t):a.includes("explain")||a.includes("summary")||a.includes("what is this")||a.includes("help")||a.includes("how to")||a.includes("concept")||a.includes("example")||a.includes("tutorial")||a.includes("notes")?`### 💡 Mentor Guide for: ${l}

Dear student, here is the structured conceptual breakdown for **"${l}"**:

1. **Fundamental Objective:**
   - Master the core mechanical rules, syntax, and step-by-step logic governing this topic.
   - Learn how to structure inputs cleanly to ensure edge-case safety.

2. **Industrial Best Practices:**
   - In real-world enterprise environments (whether coding in C/Python/React or building financial models in Excel/Tally), always prioritize **clean data hygiene and defensive validation**.
   - Test your logic with boundary conditions (empty inputs, zero, negative values, or unexpected string formats).

3. **Step-by-Step Action Plan:**
   - **Step 1:** Review the syntax cards and visual calculation diagrams on this page.
   - **Step 2:** Try running and modifying the code / formula in the interactive live editor or downloadable practice sheet.
   - **Step 3:** Test your retention by completing the 30-question practice test in the Quiz section below.

*CNAT Mam's Mentorship Note:* If you encounter any specific error or edge-case doubt while practicing **${l}**, send me the exact function name or code snippet and I will debug it for you!`:a.includes("exam")||a.includes("viva")||a.includes("interview")||a.includes("question")||a.includes("test")?`### 📝 CNAT Mam's Top Exam & Viva Checklist for ${l}

When appearing for academic examinations, lab vivas, or technical interviews, keep these golden rules in mind:

1. **Explain the "Why" Before the "How":**
   - Don't just recite code syntax or formula names. Explain *why* a particular approach is chosen over alternatives (e.g. why XLOOKUP replaces VLOOKUP, why Binary Search is $O(\\log N)$, or why Normalization reduces redundancy).

2. **Highlight Edge Cases & Error Handling:**
   - Discuss defensive guards such as \`IFERROR()\` in spreadsheets, \`try-catch\` in Java/Python, or \`NULL\` pointer checks in C.

3. **Demonstrate Time & Memory Awareness:**
   - In programming and database questions, state the Big-O time complexity and space trade-offs clearly.

*Need practice questions?* Check the interactive Practice Questions and Quiz engine integrated at the bottom of this topic page!`:`### 🎓 CNAT Mam Academic Assistance

Dear student, you asked: **"${o}"** regarding **${l}**.

Here is my mentorship guidance:

- **Key Focus Area:** When studying **${l}** in our **${w.toUpperCase()}** curriculum, always make sure you understand the underlying computational or arithmetic mechanism before writing code or formulas.
- **Practical Verification:** Use the interactive playground / live spreadsheet loader available right on this page to test variations of this concept with your own test data.
- **Direct Faculty Helpline:** For detailed one-on-one lab guidance, batch enrollments, or teacher consultations:
  - 📞 **Mr. Sukanta Hui (Lead Mentor):** **+91 70037 56860**
  - 💬 **Admissions & WhatsApp Helpline:** **+91 94324 56083**
  - 📍 **Campus Address:** 25(10/A) Shibtala Road, Nona Chandan Pukur, Barrackpore, Kolkata - 700122.

*You can also click any of the quick prompt chips below to explore specific formulas, code patterns, teacher details, or course roadmaps!*`}function ie({topicTitle:u="Study Topic",moduleSlug:t="",subjectKey:o="excel"}){const[a,l]=p.useState(!1),[w,v]=p.useState(!1),[g,C]=p.useState(""),[y,f]=p.useState(!1),[T,b]=p.useState(!1),[A,x]=p.useState(null),[M,D]=p.useState(null),$=ae(o),[I,j]=p.useState([{sender:"bot",text:`Hello dear student! I am **CNAT Mam**, your senior AI academic mentor at **Coder & AccoTax**.

I can guide you through **"${u}"**, explain formulas and code, provide our **campus address**, **teachers & mentors details**, or **course syllabi & admissions**. How can I help you today?`,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),L=p.useRef(null),B=()=>{L.current?.scrollIntoView({behavior:"smooth"})};p.useEffect(()=>{a&&B()},[I,a,y]);const R=(r,n)=>{if(typeof window>"u"||!("speechSynthesis"in window))return;if(T&&A===n){window.speechSynthesis.cancel(),b(!1),x(null);return}window.speechSynthesis.cancel();const s=r.replace(/[*#`_~\[\]()>-]/g," ").replace(/\|/g," ").replace(/\s+/g," ").trim(),i=new SpeechSynthesisUtterance(s);i.rate=1,i.pitch=1.05;const h=window.speechSynthesis.getVoices(),m=h.find(d=>d.lang.includes("en")&&(d.name.includes("Female")||d.name.includes("Google")||d.name.includes("Samantha")||d.name.includes("Zira")))||h.find(d=>d.lang.includes("en"));m&&(i.voice=m),i.onend=()=>{b(!1),x(null)},i.onerror=()=>{b(!1),x(null)},b(!0),x(n),window.speechSynthesis.speak(i)};p.useEffect(()=>{!a&&typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.cancel(),b(!1),x(null))},[a]);const S=r=>{const n=r||g;if(!n.trim())return;const s=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),i={sender:"user",text:n,time:s};j(h=>[...h,i]),r||C(""),f(!0),setTimeout(()=>{const h=re(n,{topicTitle:u,moduleSlug:t,subjectKey:o}),m=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});j(d=>[...d,{sender:"bot",text:h,time:m}]),f(!1)},450)},F=(r,n)=>{navigator.clipboard.writeText(r),D(n),setTimeout(()=>D(null),1500)},q=()=>{typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.cancel(),b(!1),x(null)),j([{sender:"bot",text:`Chat reset! I am ready for your next question regarding **"${u}"**, institute address, teachers details, or courses.`,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}])};return e.jsxs("div",{className:"fixed bottom-5 right-5 z-50 font-sans selection:bg-sky-500/30 selection:text-sky-200",children:[!a&&e.jsxs("button",{onClick:()=>l(!0),className:"group relative flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 text-white font-bold text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-sky-400/30 shadow-sky-950/60 cursor-pointer",children:[e.jsxs("span",{className:"relative flex h-3 w-3",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-teal-300"})]}),e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-7 h-7 rounded-full overflow-hidden border border-sky-300/40 p-0.5 shadow-sm bg-slate-900",children:e.jsx("img",{src:"/teachers/cnat.jpg",alt:"CNAT Mam",className:"w-full h-full rounded-full object-cover",onError:r=>{r.target.style.display="none"}})}),e.jsx("span",{children:"Ask CNAT Mam"})]}),e.jsx("span",{className:"px-2 py-0.5 rounded-md bg-white/20 text-[10px] uppercase font-extrabold tracking-wider text-teal-100",children:"AI Mentor"})]}),a&&e.jsxs("div",{className:`${w?"w-[94vw] sm:w-[680px] h-[720px]":"w-[92vw] sm:w-[440px] h-[600px]"} max-h-[88vh] rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 border-sky-500/30 transition-all`,children:[e.jsxs("div",{className:"px-4 py-3.5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-slate-800 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-sky-400 to-teal-400 p-0.5 shadow-md overflow-hidden",children:e.jsx("img",{src:"/teachers/cnat.jpg",alt:"CNAT Mam Profile",className:"w-full h-full rounded-full object-cover",onError:r=>{r.target.style.display="none"}})}),e.jsx("span",{className:"absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:"font-extrabold text-white text-sm tracking-wide",children:"CNAT Mam"}),e.jsxs("span",{className:"px-1.5 py-0.5 rounded bg-sky-950 border border-sky-700 text-sky-300 text-[10px] font-mono font-semibold",children:[o.toUpperCase()," Mentor"]})]}),e.jsx("p",{className:"text-[11px] text-slate-400 truncate max-w-[240px]",children:u})]})]}),e.jsxs("div",{className:"flex items-center gap-1 text-slate-400",children:[e.jsx("button",{onClick:()=>v(r=>!r),title:w?"Compact View":"Expand View",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition cursor-pointer",children:w?e.jsx(_,{size:15}):e.jsx(U,{size:15})}),e.jsx("button",{onClick:q,title:"Reset Conversation",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition cursor-pointer",children:e.jsx(H,{size:15})}),e.jsx("button",{onClick:()=>l(!1),title:"Close Chat",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition cursor-pointer",children:e.jsx(z,{size:18})})]})]}),e.jsxs("div",{className:"px-3 py-1.5 bg-slate-900/95 border-b border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>S("What is the official address and campus location of Coder & AccoTax?"),className:"flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 hover:bg-sky-950 border border-slate-700 hover:border-sky-600 text-sky-300 hover:text-sky-100 transition cursor-pointer",title:"View Campus Address",children:[e.jsx(G,{size:11,className:"text-sky-400"}),e.jsx("span",{children:"Address"})]}),e.jsxs("button",{onClick:()=>S("Who are the teachers and faculty members at Coder & AccoTax?"),className:"flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 hover:bg-indigo-950 border border-slate-700 hover:border-indigo-600 text-indigo-300 hover:text-indigo-100 transition cursor-pointer",title:"View Faculty Profiles",children:[e.jsx(V,{size:11,className:"text-indigo-400"}),e.jsx("span",{children:"Teachers"})]}),e.jsxs("button",{onClick:()=>S("What are all the courses offered at Coder & AccoTax?"),className:"flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 hover:bg-emerald-950 border border-slate-700 hover:border-emerald-600 text-emerald-300 hover:text-emerald-100 transition cursor-pointer",title:"View Courses Catalog",children:[e.jsx(Q,{size:11,className:"text-emerald-400"}),e.jsx("span",{children:"Courses"})]})]}),e.jsx("span",{className:"text-[10px] text-slate-400 hidden sm:inline",children:"Coder & AccoTax"})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm custom-scrollbar bg-slate-950/40",children:[I.map((r,n)=>e.jsxs("div",{className:`flex gap-2.5 ${r.sender==="user"?"justify-end":"justify-start"}`,children:[r.sender==="bot"&&e.jsx("img",{src:"/teachers/cnat.jpg",alt:"CNAT Mam",className:"w-7 h-7 rounded-full object-cover border border-sky-600/60 shrink-0 mt-0.5 shadow-sm",onError:s=>{s.target.style.display="none"}}),e.jsxs("div",{className:`relative max-w-[88%] rounded-2xl px-4 py-3 shadow-md text-xs sm:text-sm leading-relaxed ${r.sender==="user"?"bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-br-none":"bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none"}`,children:[e.jsx("div",{className:"whitespace-pre-wrap font-sans space-y-2",children:r.text.split(`
`).map((s,i)=>{if(s.trim()==="---")return e.jsx("hr",{className:"my-2 border-slate-800"},i);if(s.startsWith("### "))return e.jsx("h4",{className:"font-bold text-sky-300 text-sm mt-2 mb-1",children:s.replace("### ","")},i);if(s.startsWith("#### "))return e.jsx("h5",{className:"font-semibold text-teal-300 text-xs mt-1.5 mb-0.5",children:s.replace("#### ","")},i);if(s.startsWith("> "))return e.jsx("div",{className:"my-1.5 p-3 rounded-xl bg-slate-950 border-l-4 border-sky-500 text-slate-200 font-sans text-xs",children:k(s.replace(/^>\s*/,""))},i);if(s.startsWith("`=")||s.startsWith("`")||s.startsWith("```")){const m=s.replace(/```[a-z]*|```/g,"").replace(/`/g,"");return m.trim()?e.jsx("div",{className:"my-1.5 p-2 rounded-xl bg-slate-950 border border-slate-800 font-mono text-sky-300 text-xs overflow-x-auto",children:m},i):null}if(s.trim().startsWith("- ")||s.trim().startsWith("* ")){const m=s.trim().slice(2);return e.jsxs("div",{className:"flex items-start gap-1.5 pl-1",children:[e.jsx("span",{className:"text-sky-400 mt-0.5",children:"•"}),e.jsx("span",{children:k(m)})]},i)}const h=s.trim().match(/^(\d+)\.\s+(.*)$/);if(h)return e.jsxs("div",{className:"flex items-start gap-1.5 pl-1",children:[e.jsxs("span",{className:"font-bold text-amber-400 mt-0.5 text-xs",children:[h[1],"."]}),e.jsx("span",{children:k(h[2])})]},i);if(s.trim().startsWith("|")&&s.trim().endsWith("|")){if(s.includes(":---")||s.includes("---"))return null;const m=s.split("|").filter(d=>d.trim()!=="");return e.jsx("div",{className:"my-1 flex gap-2 overflow-x-auto text-[11px] bg-slate-950/60 p-1.5 rounded-lg border border-slate-800",children:m.map((d,W)=>e.jsx("div",{className:"flex-1 font-mono text-slate-300",children:k(d.trim())},W))},i)}return e.jsx("p",{children:k(s)},i)})}),e.jsxs("div",{className:"mt-2.5 pt-1.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400",children:[e.jsx("span",{children:r.time}),r.sender==="bot"&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>R(r.text,n),className:`hover:text-sky-300 transition flex items-center gap-1 cursor-pointer ${T&&A===n?"text-amber-400 animate-pulse font-bold":""}`,title:"Read Aloud",children:[T&&A===n?e.jsx(K,{size:13}):e.jsx(J,{size:13}),e.jsx("span",{children:T&&A===n?"Stop":"Listen"})]}),e.jsxs("button",{onClick:()=>F(r.text,n),className:"hover:text-sky-300 transition flex items-center gap-1 cursor-pointer",title:"Copy Answer",children:[M===n?e.jsx(X,{size:12,className:"text-emerald-400"}):e.jsx(Y,{size:12}),e.jsx("span",{children:M===n?"Copied":"Copy"})]})]})]})]}),r.sender==="user"&&e.jsx("div",{className:"w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5",children:e.jsx(Z,{size:14})})]},n)),y&&e.jsxs("div",{className:"flex items-center gap-2 text-slate-400 text-xs italic pl-9",children:[e.jsxs("span",{className:"flex gap-1",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"}),e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping delay-100"}),e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping delay-200"})]}),e.jsx("span",{children:"CNAT Mam is preparing your response..."})]}),e.jsx("div",{ref:L})]}),e.jsx("div",{className:"px-3 py-2 bg-slate-900/90 border-t border-slate-800/80 overflow-x-auto flex gap-1.5 no-scrollbar",children:$.map((r,n)=>e.jsx("button",{onClick:()=>S(r.query),className:"px-2.5 py-1 rounded-full bg-slate-800 hover:bg-sky-950 border border-slate-700 hover:border-sky-700 text-slate-300 hover:text-sky-200 text-[11px] font-medium whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer",children:r.label},n))}),e.jsxs("form",{onSubmit:r=>{r.preventDefault(),S()},className:"p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2",children:[e.jsx("input",{type:"text",value:g,onChange:r=>C(r.target.value),placeholder:`Ask about ${u}, address, teachers, courses...`,className:"flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/60 transition"}),e.jsx("button",{type:"submit",disabled:!g.trim(),className:"p-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition shadow-md shrink-0 cursor-pointer",title:"Send Question",children:e.jsx(ee,{size:16})})]})]})]})}function k(u){return u?u.split(/(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g).map((o,a)=>{if(o.startsWith("**")&&o.endsWith("**"))return e.jsx("strong",{className:"font-bold text-amber-300",children:o.slice(2,-2)},a);if(o.startsWith("`")&&o.endsWith("`"))return e.jsx("code",{className:"px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-sky-300 text-[11px]",children:o.slice(1,-1)},a);const l=o.match(/^\[(.*?)\]\((.*?)\)$/);return l?e.jsx("a",{href:l[2],target:"_blank",rel:"noopener noreferrer",className:"text-sky-400 font-semibold underline hover:text-sky-300 transition",children:l[1]},a):o}):null}export{ie as default};
