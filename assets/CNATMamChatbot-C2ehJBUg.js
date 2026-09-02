import{b as y,j as a}from"./vendor-react-core-Doz9nIC6.js";import{t as j}from"./teachers-CU1cob3X.js";import{l as U,m as H,a1 as G,X as z,bU as V,aR as J,H as Q,c0 as K,c1 as X,a8 as Y,n as Z,U as ee,c2 as ae}from"./vendor-icons-wprqVFW_.js";const te={langualge:"language",langauge:"language",langug:"language",progamming:"programming",prog:"programming",pyton:"python",pythn:"python",exel:"excel",excle:"excel",taly:"tally",tallyprm:"tallyprime",javscript:"javascript",javascrip:"javascript",raect:"react",databse:"database",syllbus:"syllabus",courss:"course",cours:"course",tacher:"teacher",tachers:"teachers",contact:"contact",phon:"phone",assigment:"assignment",assignmnt:"assignment",homwork:"homework",submision:"submission",marksheed:"marksheet",marksheett:"marksheet",doubt:"doubt",doubts:"doubt",sir:"teacher",madam:"mentor"};function re(i){return i?i.toLowerCase().replace(/[^a-z0-9\s#+\-\.]/g," ").split(/\s+/).filter(Boolean).map(s=>te[s]||s).join(" "):""}function se(i){if(!i)return null;const t=i.toLowerCase().trim(),o=t.includes("teacher")||t.includes("teachers")||t.includes("faculty")||t.includes("instructor")||t.includes("mentor")||t.includes("educator")||t.includes("who is")||t.includes("who are");for(const e of j)if(e.name.toLowerCase().replace(/mr\.|ms\./g,"").trim().split(/\s+/).some(d=>d.length>=4&&t.includes(d)))return`### 👨‍🏫 Mentor Profile: ${e.name}

- **Role & Title:** **${e.title}**
- **Email:** **${e.email}**
`+(e.github?`- **GitHub:** [https://github.com/${e.github}](https://github.com/${e.github})
`:"")+`
**About ${e.name}:**
${e.bio}`;if(o){let e=`### 👨‍🏫 Faculty & Mentors at Coder & AccoTax

`;return j.forEach(s=>{e+=`- **${s.name}** (*${s.title}*)
  - Email: **${s.email}** ${s.github?`| GitHub: [${s.github}](https://github.com/${s.github})`:""}
`}),e+=`
*CNAT Mam's Tip:* Ask me about any specific teacher (e.g. *"Tell me about Tanusree Hui"*) for their full bio!`,e}return null}const ne=[{id:"assignment-submission-guidelines",category:"Student Guidelines",question:"How do I submit practical lab assignments and homework?",keywords:["assignment","assignments","submit","submission","homework","lab project","assigment","submision"],answer:"### 📝 Lab Assignment Submission Guidelines\n\n1. **File Naming Format:** Always name your project file or workbook with your Roll Number & Name (e.g. `ROLL_105_JAVA_ASSIGNMENT.java` or `ROLL_105_EXCEL_LAB.xlsx`).\n2. **Online Portal Upload:** Upload files directly through the **Student Portal** under the corresponding module tab.\n3. **Instant Lab Feedback:** For urgent doubt clearance during lab hours, send a copy of your source code/formula directly via WhatsApp to **+91 70037 56860**."},{id:"exam-viva-guidelines",category:"Student Guidelines",question:"What are the key tips for practical exams and viva tests?",keywords:["viva","exam","interview","practical test","viva tips","checklist","mock test"],answer:"### 🎯 Practical Exam & Viva Success Checklist\n\n1. **Code & Formula Explanation:** Be ready to explain *why* you chose a specific method, loop, or formula (`XLOOKUP`, `INDEX-MATCH`, `while` vs `for`).\n2. **Defensive Programming & Guards:** Always explain how your code/formula handles edge cases (`IFERROR()`, array index bounds, non-null checks).\n3. **Syntax & Logic Hygiene:** Keep your code neatly indented and variables meaningfully named.\n4. **Time Management:** Complete required core questions before tackling bonus logic challenges!"},{id:"doubt-clearance-lab",category:"Student Guidelines",question:"How do I clear my doubts during lab hours?",keywords:["doubt","doubts","help","lab doubt","stuck","error","clear doubt","ask question"],answer:`### 🛠️ Student Doubt Clearance Helpline

- **Interactive AI Assistant:** You can ask **CNAT Mam** right here 24/7 for topic overviews, error explanations, and formula breakdowns!
- **Direct Faculty Guidance:** Senior Lead **Sukanta Hui** is available during lab hours for one-on-one debugging.
- **WhatsApp Helpline:** Message **+91 70037 56860** with a screenshot or snippet of your broken code or formula for instant guidance.`},{id:"online-test-marksheet",category:"Student Guidelines",question:"Where can I take online mock tests and view my performance marksheets?",keywords:["test","mock test","marksheet","score","grades","result","online exam","marksheed"],answer:`### 📊 Online Tests & Marksheet Portal

- **Interactive Practice Engines:** Use the embedded **Practice Engine & Quiz Engine** modules in your topic roadmaps to practice live questions.
- **Instant Marksheets:** System-generated progress marksheets are generated upon completing module assessments.
- **Certificate Verification:** ISO 9001:2015 certified completion certificates can be downloaded from your student profile.`},{id:"course-c-language",category:"Courses & Curriculum",question:"Tell me about C Programming Language & Foundations Course",keywords:["c","c language","c lang","c programming","c course","c code","c syllabus","c langualge","c langauge","progamming in c","c programing","c coding","c language course","learn c"],answer:"### ⚙️ C Programming Language & Systems Course\n\n**Overview:** Learn core procedural programming, low-level memory control, pointers, and data structuring in C.\n\n**Core Topics Covered:**\n1. **C Fundamentals:** Data types, operators, expression evaluation, `printf()` & `scanf()`.\n2. **Control Structures:** `if-else`, `switch`, `while`, `do-while`, `for` loops.\n3. **Functions & Scope:** Modular programming, pass-by-value vs pass-by-reference, recursion.\n4. **Pointers & Dynamic Memory:** Pointer arithmetic, `malloc()`, `calloc()`, `realloc()`, `free()`.\n5. **Structures & File I/O:** `struct`, `typedef`, file operations (`fopen`, `fprintf`, `fscanf`, `fclose`)."},{id:"course-icse-java",category:"Courses & Curriculum",question:"Tell me about ICSE Class 9 & 10 Java Computer Applications Course",keywords:["java","icse java","class 10 java","icse class 9 java","icse computer applications","icse 10","icse 9","java course","class x java","bluej","java programming","java coding"],answer:"### ☕ ICSE Class 9 & 10 Java Computer Applications Course\n\n**Overview:** Complete ICSE syllabus coverage focusing on object-oriented concepts, BlueJ environment, and paper solving strategies.\n\n**Core Topics Covered:**\n1. **Introduction to OOP & Java Basics:** Classes, Objects, Abstraction, Encapsulation, Primitive Data Types.\n2. **Decision Making Constructs:** `if-else`, nested `if`, `switch-case`, fall-through condition.\n3. **Iterative Loops:** `for`, `while`, `do-while` loops, nested loops, series evaluation.\n4. **Library Classes & Wrapper Classes:** `Character` & `String` methods, autoboxing/unboxing.\n5. **Arrays (1D & 2D):** Declaration, linear search, binary search, bubble sort, selection sort, matrix operations.\n6. **User-Defined Methods & Constructors:** Method overloading, call-by-value vs call-by-reference, default & parameterized constructors."},{id:"course-isc-java",category:"Courses & Curriculum",question:"Tell me about ISC Class 11 & 12 Computer Science Course",keywords:["isc java","isc class 12","isc class 11","isc computer science","isc 12","isc 11","isc computer"],answer:"### 💻 ISC Class 11 & 12 Computer Science Course\n\n**Overview:** Advanced computer science curriculum incorporating theoretical computer architecture, algorithms, and complex Java programming.\n\n**Core Topics Covered:**\n1. **Boolean Algebra & Gate Networks:** Truth tables, K-Maps (SOP & POS reduction), De Morgan's Laws, Encoders/Decoders.\n2. **Object-Oriented Programming:** Inheritance (`extends`), Interfaces (`implements`), Abstract classes.\n3. **Data Structures:** 1D/2D Array algorithms, Stack (Infix to Postfix/Prefix conversion), Queue & Circular Queue operations.\n4. **Recursion:** Base cases, recursive call stacks, Fibonacci, GCD, Tower of Hanoi.\n5. **File Handling:** Character streams (`FileReader`/`FileWriter`) & Byte streams (`FileInputStream`/`FileOutputStream`)."},{id:"course-python",category:"Courses & Curriculum",question:"Tell me about Python Data Science & Core Programming Course",keywords:["python","py","pyton","python course","python programming","python data science","python syllabus","python coding"],answer:`### 🐍 Python Data Science & Core Programming Course

**Overview:** Practical Python course spanning basic syntax to data analysis with NumPy, Pandas, and scripting.

**Core Topics Covered:**
1. **Python Foundations:** Syntax, variables, dynamic typing, input/output formatting.
2. **Data Structures:** Lists, Tuples, Dictionaries, Sets, Slicing, List Comprehensions.
3. **Control Flow & Functions:** Conditionals, loops, functions, \`*args\`, \`**kwargs\`, Lambda expressions.
4. **Object-Oriented Python:** Classes, \`__init__\` constructor, inheritance, encapsulation.
5. **Data Analysis Fundamentals:** NumPy arrays, Pandas DataFrames, CSV data parsing.`},{id:"course-excel",category:"Courses & Curriculum",question:"Tell me about Advanced Excel Analytics & Financial Modeling Course",keywords:["excel","exel","advanced excel","excel course","excel ultra expert","excel analytics","financial modeling","microsoft excel","spreadsheet","xlookup","vlookup"],answer:"### 📊 Microsoft Excel Ultra Expert & Analytics Course\n\n**Overview:** Master spreadsheet engineering from raw data cleaning to advanced financial modeling and dynamic dashboards.\n\n**Core Topics Covered:**\n1. **Data Hygiene & Formatting:** Cell data types, serial dates, `TRIM()`, `CLEAN()`, `PROPER()`, Custom Number formatting.\n2. **Lookup & Retrieval Engine:** `XLOOKUP()`, `INDEX-MATCH`, `VLOOKUP()`, `HLOOKUP()`, `LOOKUP()`.\n3. **Dynamic Array Formulas:** `FILTER()`, `UNIQUE()`, `SORT()`, `SORTBY()`, `SEQUENCE()`, `TEXTBEFORE()`, `TEXTAFTER()`.\n4. **Logical & Defensive Guards:** `IF()`, `IFS()`, `SWITCH()`, `IFERROR()`, `ISBLANK()`.\n5. **Business Intelligence:** PivotTables, Slicers, Power Query M Code, Power Pivot DAX formulas."},{id:"course-tally",category:"Courses & Curriculum",question:"Tell me about TallyPrime GST & Corporate Accounting Course",keywords:["tally","tallyprime","tally prime","taly","gst course","corporate accounting","tally gst","tally course","accounting course","bookkeeping"],answer:"### 💼 TallyPrime & Corporate Accounting Certification Course\n\n**Overview:** End-to-end practical accounting training covering manual double-entry bookkeeping to computerised TallyPrime GST compliance.\n\n**Core Topics Covered:**\n1. **Accounting Fundamentals:** 3 Golden Rules, Types of Accounts, Journal Entries, Ledger Posting, Trial Balance.\n2. **Company Setup & Chart of Accounts:** Company creation, Group hierarchies, Primary groups, Opening Balances.\n3. **Voucher Management:** Contra (`F4`), Payment (`F5`), Receipt (`F6`), Journal (`F7`), Sales (`F8`), Purchase (`F9`).\n4. **Statutory & GST Compliance:** CGST, SGST, IGST tax ledgers, E-way bill, HSN/SAC codes, TDS/TCS deduction.\n5. **Final Accounts & Financial Reporting:** Trading Account, Profit & Loss Statement, Balance Sheet, Bank Reconciliation (BRS)."},{id:"course-react-web",category:"Courses & Curriculum",question:"Tell me about Full Stack Web Development (React & JavaScript) Course",keywords:["react","javascript","js","web development","full stack","react 19","frontend","react course","javascript course","web development course","web dev","node"],answer:`### ⚛️ Full Stack Web Development (React & JavaScript) Course

**Overview:** Modern web engineering course teaching JavaScript (ES6+), React 19 UI development, and RESTful web backend integration.

**Core Topics Covered:**
1. **Modern JavaScript (ES6+):** Arrow functions, Destructuring, Spread/Rest operators, Modules.
2. **Async JavaScript:** Promises, Async/Await, \`fetch\` API, Event Loop mechanics.
3. **React 19 Core:** JSX syntax, Components, Props, State (\`useState\`), Effects (\`useEffect\`).
4. **Routing & UI Design:** React Router DOM, Tailwind CSS styling, Glassmorphism, Responsive layouts.
5. **Backend Basics:** Node.js, Express REST APIs, JSON data handling.`},{id:"course-rdbms-mysql",category:"Courses & Curriculum",question:"Tell me about RDBMS & MySQL Database Engineering Course",keywords:["rdbms","mysql","sql","database","rdbms course","mysql course","database course","sql course","sql syllabus"],answer:"### 🗄️ RDBMS & MySQL Database Engineering Course\n\n**Overview:** Comprehensive database management course from relational algebra to SQL query optimization and normalization.\n\n**Core Topics Covered:**\n1. **RDBMS Foundations:** Relational data model, Tables, Rows, Columns, Primary Keys, Foreign Keys.\n2. **SQL Data Manipulation (DML):** `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `WHERE` filtering.\n3. **Aggregations & Grouping:** `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`, `GROUP BY`, `HAVING`.\n4. **SQL Joins:** `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, Subqueries.\n5. **Database Design:** Normalization (1NF, 2NF, 3NF, BCNF) & ER Diagrams."},{id:"course-unix-linux",category:"Courses & Curriculum",question:"Tell me about UNIX / Linux Administration & Shell Scripting Course",keywords:["unix","linux","shell scripting","bash","unix course","linux course","shell scripting course","unix commands"],answer:"### 🐧 UNIX / Linux Administration & Shell Scripting Course\n\n**Overview:** Hands-on operating system course covering command-line mastery, administration, and automated Bash shell scripting.\n\n**Core Topics Covered:**\n1. **UNIX Foundations:** Architecture (Kernel, Shell, File System), directory tree (`/`, `/home`, `/etc`).\n2. **File & Directory Commands:** `ls`, `cd`, `mkdir`, `cp`, `mv`, `rm`, `cat`, `chmod`, `chown`.\n3. **Text Processing Utilities:** Filter commands (`grep`, `sed`, `awk`, `cut`, `sort`, `uniq`).\n4. **Process & System Control:** `ps`, `top`, `kill`, `bg`, `fg`, Cron Jobs, system logging.\n5. **Shell Scripting:** Variables, positional parameters, `if-then-else`, `for`/`while` loops, automated backup scripts."},{id:"course-dsa",category:"Courses & Curriculum",question:"Tell me about Data Structures & Algorithms (DSA) Course",keywords:["dsa","data structures","algorithms","dsa course","data structures course","algorithms course"],answer:`### ⚡ Data Structures & Algorithms (DSA) Course

**Overview:** Core computer science course focusing on algorithmic efficiency, memory structures, and problem-solving techniques.

**Core Topics Covered:**
1. **Complexity Analysis:** Time Complexity, Space Complexity, Big-O notation.
2. **Linear Data Structures:** Arrays, Single/Double Linked Lists, Stacks (LIFO), Queues (FIFO).
3. **Trees & Graphs:** Binary Trees, Binary Search Trees (BST), AVL Trees, Graph Traversals (BFS & DFS).
4. **Searching & Sorting:** Linear Search, Binary Search, Bubble Sort, Insertion Sort, Quick Sort, Merge Sort.`},{id:"java-oop-concepts",category:"Java & ICSE/ISC",question:"What are the core OOP principles in Java?",keywords:["encapsulation","inheritance","polymorphism","abstraction","java oop","class","object"],answer:"### ☕ Core Object-Oriented Programming (OOP) Principles in Java\n\n1. **Encapsulation:** Keeping fields `private` and exposing public getter/setter methods.\n2. **Inheritance:** Subclass inheriting properties from a superclass using `extends`.\n3. **Polymorphism:** Method Overloading (compile-time) & Method Overriding (runtime).\n4. **Abstraction:** Hiding implementation details using `abstract` classes or `interface` definitions."},{id:"excel-xlookup-indexmatch",category:"Excel & Analytics",question:"How do XLOOKUP and INDEX-MATCH compare to VLOOKUP?",keywords:["xlookup","vlookup","index match","lookup","excel lookup"],answer:"### 📊 Advanced Excel Lookup Mastery\n\n- **`XLOOKUP(lookup_val, lookup_arr, return_arr, [if_not_found])`:** Looks up left or right without column indices.\n- **`INDEX-MATCH`:** `=INDEX(return_range, MATCH(lookup_val, lookup_range, 0))` – flexible & memory efficient."},{id:"tally-golden-rules",category:"Tally & Accounting",question:"What are the Golden Rules of Accounting?",keywords:["golden rules","accounting rules","personal account","real account","nominal account","debit credit"],answer:`### 📖 The 3 Golden Rules of Accounting

1. **Personal Accounts:** Debit the Receiver, Credit the Giver.
2. **Real Accounts:** Debit what Comes In, Credit what Goes Out.
3. **Nominal Accounts:** Debit all Expenses & Losses, Credit all Incomes & Gains.`}];function ie(i,t={}){if(!i)return null;const o=se(i);if(o)return o;const e=re(i);if(!e)return null;const s=e.split(/\s+/).filter(Boolean);let f=null,b=0;for(const d of ne){let h=0;for(const w of d.keywords){const m=w.toLowerCase();e.includes(m)&&(m.length<=2?new RegExp(`\\b${m}\\b`,"i").test(e)&&(h+=25):h+=m.length*3);const x=m.split(/\s+/);for(const v of s)for(const S of x)v===S&&(h+=4)}h>b&&(b=h,f=d)}return b>=10&&f?f.answer:null}const u={excel:[{label:"💡 Explain Topic",query:"Can you explain this Excel topic in simple terms with key formula rules?"},{label:"🔍 XLOOKUP vs VLOOKUP",query:"What is the difference between XLOOKUP and VLOOKUP?"},{label:"⚡ Dynamic Arrays",query:"Explain dynamic arrays like FILTER, UNIQUE, and SORT."},{label:"📍 Institute Address",query:"What is the official address and campus location of Coder & AccoTax?"},{label:"👨‍🏫 Teacher Details",query:"Who are the teachers and faculty members at Coder & AccoTax?"},{label:"📚 All Courses",query:"What are all the courses offered at Coder & AccoTax?"},{label:"📞 Helpline",query:"What is the official helpline number and contact details?"}],python:[{label:"💡 Explain Topic",query:"Can you explain this Python concept with practical code?"},{label:"🐍 List vs Tuple",query:"What is the difference between Lists and Tuples in Python?"},{label:"⚙️ Decorators & Generators",query:"Explain Python decorators and generators with examples."},{label:"📊 Pandas DataFrames",query:"How do I manipulate data using Pandas DataFrames in Python?"},{label:"📍 Institute Address",query:"What is the address of the organisation?"},{label:"👨‍🏫 Teacher Details",query:"Give me details of teachers and mentors at Coder & AccoTax."},{label:"📚 Courses Offered",query:"List all courses offered at Coder & AccoTax."}],"c-language":[{label:"💡 Explain Topic",query:"Explain this C programming concept step-by-step."},{label:"📌 Pointers in C",query:"How do pointers and memory addresses work in C?"},{label:"🧠 Dynamic Memory",query:"What is the difference between malloc(), calloc(), and free()?"},{label:"📍 Institute Address",query:"Where is Coder & AccoTax located? Give full address."},{label:"👨‍🏫 Teacher Details",query:"Who teaches C programming and what are teacher details?"},{label:"📚 All Courses",query:"What courses are available at Coder & AccoTax?"}],dsa:[{label:"💡 Explain Topic",query:"Explain this data structure and its operations clearly."},{label:"⏱️ Big-O Complexity",query:"Explain Big-O time and space complexity with examples."},{label:"🌳 Binary Search Tree",query:"How does a Binary Search Tree (BST) work and what are its traversal orders?"},{label:"🔄 QuickSort vs MergeSort",query:"Compare QuickSort and MergeSort algorithms."},{label:"📍 Institute Address",query:"Provide the address and location of the organisation."},{label:"👨‍🏫 Teacher Details",query:"Who is the DSA mentor and faculty team?"},{label:"📚 Courses",query:"What courses do you teach at Coder & AccoTax?"}],tally:[{label:"💡 Explain Topic",query:"Explain this Tally Prime accounting topic clearly."},{label:"⚖️ Golden Rules of Accounts",query:"What are the Golden Rules of Debit and Credit?"},{label:"📑 GST Invoicing & Vouchers",query:"How do CGST, SGST, and IGST work in Tally vouchers?"},{label:"📍 Institute Address",query:"What is the campus address of Coder & AccoTax?"},{label:"👨‍🏫 Teacher Details",query:"Who are the accounting and Tally teachers?"},{label:"📚 Courses",query:"What accounting and software courses are offered?"}],"java-core":[{label:"💡 Explain Topic",query:"Explain this Java OOP concept with a code example."},{label:"🧱 4 Pillars of OOP",query:"Explain Encapsulation, Inheritance, Polymorphism, and Abstraction in Java."},{label:"📦 ArrayList vs HashMap",query:"What is the difference between ArrayList and HashMap in Java Collections?"},{label:"📍 Institute Address",query:"What is the address of the organisation?"},{label:"👨‍🏫 Teacher Details",query:"Who teaches Java and ICSE/ISC Computer Science?"},{label:"📚 All Courses",query:"What courses are taught at the institute?"}],react:[{label:"💡 Explain Topic",query:"Explain this React concept in simple terms."},{label:"⚡ useState vs useEffect",query:"What is the difference between useState and useEffect hooks?"},{label:"🎯 useMemo vs useCallback",query:"When should I use useMemo vs useCallback in React?"},{label:"📍 Institute Address",query:"What is the address of Coder & AccoTax?"},{label:"👨‍🏫 Teacher Details",query:"Tell me about Sukanta Sir and the faculty members."},{label:"📚 Courses",query:"Show all courses available at Coder & AccoTax."}],javascript:[{label:"💡 Explain Topic",query:"Explain this JavaScript concept with clear examples."},{label:"⏳ Promises & Async/Await",query:"How do Promises, async, and await work in JavaScript?"},{label:"🔒 Closures & Scope",query:"What is a Closure in JavaScript and why is it useful?"},{label:"📍 Institute Address",query:"Where is the organisation located?"},{label:"👨‍🏫 Teacher Details",query:"Who are the instructors and mentors?"},{label:"📚 Courses Offered",query:"What courses are offered at Coder & AccoTax?"}],unix:[{label:"💡 Explain Topic",query:"Explain this Unix/Linux command and its flags."},{label:"🔐 chmod & Permissions",query:"How do file permissions (rwx) and chmod work in Unix?"},{label:"🔍 grep, sed & awk",query:"What are grep, sed, and awk text processing tools in Unix?"},{label:"📍 Institute Address",query:"What is the address of the organisation?"},{label:"👨‍🏫 Teacher Details",query:"Who can I contact for Unix/Linux guidance?"},{label:"📚 Courses",query:"What IT and programming courses are available?"}],"rdbms-mysql":[{label:"💡 Explain Topic",query:"Explain this MySQL database concept clearly."},{label:"📐 Normalization (1NF to BCNF)",query:"Explain 1NF, 2NF, 3NF, and BCNF database normalization."},{label:"🔗 SQL Joins (INNER, LEFT, RIGHT)",query:"What are the different types of SQL Joins with examples?"},{label:"📍 Institute Address",query:"Where is the institute located?"},{label:"👨‍🏫 Teacher Details",query:"Who are the database faculty members?"},{label:"📚 Courses",query:"What courses are offered at Coder & AccoTax?"}],"quantitative-analysis":[{label:"💡 Explain Topic",query:"Explain this quantitative analysis / operations research technique."},{label:"📊 PERT vs CPM",query:"What is the difference between PERT and CPM in project scheduling?"},{label:"📈 Linear Programming (LPP)",query:"How to formulate and solve a Linear Programming Problem (LPP)?"},{label:"📍 Institute Address",query:"What is the organisation's address?"},{label:"👨‍🏫 Teacher Details",query:"Who teaches Quantitative Analysis?"},{label:"📚 Courses",query:"What courses are offered at Coder & AccoTax?"}],general:[{label:"📍 Institute Address",query:"What is the official address and campus location of Coder & AccoTax?"},{label:"👨‍🏫 Teachers Details",query:"Who are the teachers and mentors at Coder & AccoTax?"},{label:"📚 Courses Offered",query:"What courses and certifications are offered at Coder & AccoTax?"},{label:"💰 Fees & Admission",query:"What is the admission procedure and fee structure?"},{label:"📞 Contact Helpline",query:"What are the official helpline and WhatsApp contact numbers?"}]};function oe(i="general"){const t=String(i).toLowerCase();return u[t]?u[t]:t.includes("excel")?u.excel:t.includes("python")?u.python:t.includes("c-")||t==="c"?u["c-language"]:t.includes("dsa")||t.includes("structure")?u.dsa:t.includes("tally")||t.includes("account")?u.tally:t.includes("java-core")||t.includes("icse")||t.includes("isc")||t.includes("java")?u["java-core"]:t.includes("react")?u.react:t.includes("javascript")||t.includes("node")?u.javascript:t.includes("unix")||t.includes("linux")?u.unix:t.includes("mysql")||t.includes("rdbms")||t.includes("sql")?u["rdbms-mysql"]:t.includes("quantitative")||t.includes("pert")||t.includes("math")?u["quantitative-analysis"]:u.general}function N(){return`### 📍 Coder & AccoTax Official Address & Location

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
WhatsApp **+91 94324 56083** or Call **+91 70037 56860**.`}function F(){return`### 📞 Coder & AccoTax Official Contact & Helpline

Here are the official contact and communication coordinates:

- **Primary WhatsApp & Admissions Helpline:** **+91 94324 56083** / **+91 70037 56860**
- **Academic Mentor Lead (Mr. Sukanta Hui):** **+91 70037 56860** / \`sukantahui@codernaccotax.co.in\`
- **General Inquiries:** \`info.codenaccotax@co.in\` | \`codenaccotax@gmail.com\`
- **Official Web Portal:** [www.codernaccotax.co.in](https://www.codernaccotax.co.in)
- **Campus Address:** 
  > **Coder & AccoTax (Centre of Excellence)**  
  > 25(10/A) Shibtala Road, Nona Chandan Pukur, Barrackpore, Kolkata - 700122, West Bengal, India  
  > *(Near Barrackpore Railway Station & Shibtala More)*

*CNAT Mam's Tip:* Feel free to WhatsApp your name and desired course to **+91 94324 56083** for instant brochure and batch timing assistance!`}const le=[{category:"institute_address",keywords:["address","location","where is","where located","where are you","situated","landmark","barrackpore","shibtala","pin code","how to reach","directions","campus address","office address","orgnisation address","organisation address","institution address"],generate:()=>N()},{category:"faculty_profiles",keywords:["teacher","teachers","faculty","instructor","instructors","mentor","mentors","educator","sukanta","sukanta sir","tanusree","tanusree mam","cnat mam","chandan","chandan sir","sreeparna","mounita","ritaja","sourav","who is teaching","who teaches","sir","madam","mam","teachers details","teacher details","faculty details"],generate:()=>P()},{category:"courses_catalog",keywords:["course","courses","subject","subjects","curriculum","syllabus","programs","offer","degrees","diploma","what do you teach","what courses","all courses","courses offered","training tracks","certification","certifications","bca","mca","btech","icse","isc"],generate:()=>E()},{category:"institute_contact",keywords:["contact","phone","number","whatsapp","call","helpline","reach","telephone","mobile","mail","email","office phone","helpline number"],generate:()=>F()},{category:"institute_about",keywords:["about","institute","organisation","organization","centre of excellence","accreditation","iso","cnat","coder & accotax","why choose"],generate:()=>`### 🏢 About Coder & AccoTax (Centre of Excellence)

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
   - **TCP (Transmission Control Protocol):** Connection-oriented, reliable, ordered.
   - **UDP (User Datagram Protocol):** Connectionless, lightweight, real-time speed.

3. **Cyber Security: CIA Triad & Cryptography:**
   - **Confidentiality:** Keeping data private via encryption (**AES-256** symmetric, **RSA** asymmetric).
   - **Integrity:** Ensuring data is untampered via cryptographic hashing (**SHA-256**, digital signatures).
   - **Availability:** Ensuring continuous service uptime (mitigating DDoS with firewalls & redundancy).`}];function ce(i,t={}){const o=String(i||"").trim(),e=o.toLowerCase(),s=t.topicTitle||"Curriculum Masterclass",f=String(t.subjectKey||"general").toLowerCase();if(!e)return`Hello dear student! How can I assist you with **${s}**, institute address, teachers details, courses, or programming and accounting questions today?`;if(e.includes("address")||e.includes("location")||e.includes("where is")||e.includes("where are you")||e.includes("where located")||e.includes("situated")||e.includes("how to reach")||e.includes("direction")||e.includes("landmark")||e.includes("shibtala")||e.includes("barrackpore campus")||e.includes("pin code")||e.includes("pincode")||e.includes("orgnisation")||e.includes("organisation"))return e.includes("teacher")||e.includes("faculty")?`${N()}

---

${P()}`:e.includes("course")?`${N()}

---

${E()}`:N();if(e.includes("teacher")||e.includes("teachers")||e.includes("faculty")||e.includes("instructor")||e.includes("instructors")||e.includes("mentor")||e.includes("mentors")||e.includes("educator")||e.includes("who is teaching")||e.includes("who teaches")||e.includes("sukanta sir")||e.includes("sukanta hui")||e.includes("tanusree mam")||e.includes("chandan sir")||e.includes("chandan das")||e.includes("sreeparna")||e.includes("mounita")||e.includes("ritaja")||e.includes("sourav"))return e.includes("course")?`${P()}

---

${E()}`:P();if(e.includes("course")||e.includes("courses")||e.includes("curriculum")||e.includes("syllabus")||e.includes("programs")||e.includes("what do you teach")||e.includes("what courses")||e.includes("all courses")||e.includes("courses offered")||e.includes("training tracks")||e.includes("degrees")||e.includes("diploma")||e.includes("certification")||e.includes("certifications"))return E();if(e.includes("helpline")||e.includes("whatsapp number")||e.includes("phone number")||e.includes("mobile number")||e.includes("call")||e.includes("contact number"))return F();let b=null,d=0;for(const w of le){let m=0;for(const x of w.keywords)e===x?m+=15:e.includes(x)&&(m+=x.length>4?6:3);m>d&&(d=m,b=w)}if(b&&d>=5)return b.generate(t);if(e.includes("explain")||e.includes("summary")||e.includes("what is this")||e.includes("help")||e.includes("how to")||e.includes("concept")||e.includes("example")||e.includes("tutorial")||e.includes("notes"))return`### 💡 Mentor Guide for: ${s}

Dear student, here is the structured conceptual breakdown for **"${s}"**:

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

*CNAT Mam's Mentorship Note:* If you encounter any specific error or edge-case doubt while practicing **${s}**, send me the exact function name or code snippet and I will debug it for you!`;if(e.includes("exam")||e.includes("viva")||e.includes("interview")||e.includes("question")||e.includes("test"))return`### 📝 CNAT Mam's Top Exam & Viva Checklist for ${s}

When appearing for academic examinations, lab vivas, or technical interviews, keep these golden rules in mind:

1. **Explain the "Why" Before the "How":**
   - Don't just recite code syntax or formula names. Explain *why* a particular approach is chosen over alternatives (e.g. why XLOOKUP replaces VLOOKUP, why Binary Search is $O(\\log N)$, or why Normalization reduces redundancy).

2. **Highlight Edge Cases & Error Handling:**
   - Discuss defensive guards such as \`IFERROR()\` in spreadsheets, \`try-catch\` in Java/Python, or \`NULL\` pointer checks in C.

3. **Demonstrate Time & Memory Awareness:**
   - In programming and database questions, state the Big-O time complexity and space trade-offs clearly.

*Need practice questions?* Check the interactive Practice Questions and Quiz engine integrated at the bottom of this topic page!`;const h=ie(i,t);return h||`### 🎓 CNAT Mam Academic Assistance

Dear student, you asked: **"${o}"** regarding **${s}**.

Here is my mentorship guidance:

- **Key Focus Area:** When studying **${s}** in our **${f.toUpperCase()}** curriculum, always make sure you understand the underlying computational or arithmetic mechanism before writing code or formulas.
- **Practical Verification:** Use the interactive playground / live spreadsheet loader available right on this page to test variations of this concept with your own test data.
- **Direct Faculty Helpline:** For detailed one-on-one lab guidance, batch enrollments, or teacher consultations:
  - 📞 **Mr. Sukanta Hui (Lead Mentor):** **+91 70037 56860**
  - 💬 **Admissions & WhatsApp Helpline:** **+91 94324 56083**
  - 📍 **Campus Address:** 25(10/A) Shibtala Road, Nona Chandan Pukur, Barrackpore, Kolkata - 700122.

*You can also click any of the quick prompt chips below to explore specific formulas, code patterns, teacher details, or course roadmaps!*`}function pe({topicTitle:i="Study Topic",moduleSlug:t="",subjectKey:o="excel"}){const[e,s]=y.useState(!1),[f,b]=y.useState(!1),[d,h]=y.useState(""),[w,m]=y.useState(!1),[x,v]=y.useState(!1),[S,k]=y.useState(null),[I,O]=y.useState(null),R=oe(o),[M,D]=y.useState([{sender:"bot",text:`Hello dear student! I am **CNAT Mam**, your senior AI academic mentor at **Coder & AccoTax**.

I can guide you through **"${i}"**, explain formulas and code, provide our **campus address**, **teachers & mentors details**, or **course syllabi & admissions**. How can I help you today?`,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),L=y.useRef(null),B=()=>{L.current?.scrollIntoView({behavior:"smooth"})};y.useEffect(()=>{e&&B()},[M,e,w]);const q=(r,l)=>{if(typeof window>"u"||!("speechSynthesis"in window))return;if(x&&S===l){window.speechSynthesis.cancel(),v(!1),k(null);return}window.speechSynthesis.cancel();const n=r.replace(/[*#`_~\[\]()>-]/g," ").replace(/\|/g," ").replace(/\s+/g," ").trim(),c=new SpeechSynthesisUtterance(n);c.rate=1,c.pitch=1.05;const C=window.speechSynthesis.getVoices(),g=C.find(p=>p.lang.includes("en")&&(p.name.includes("Female")||p.name.includes("Google")||p.name.includes("Samantha")||p.name.includes("Zira")))||C.find(p=>p.lang.includes("en"));g&&(c.voice=g),c.onend=()=>{v(!1),k(null)},c.onerror=()=>{v(!1),k(null)},v(!0),k(l),window.speechSynthesis.speak(c)};y.useEffect(()=>{!e&&typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.cancel(),v(!1),k(null))},[e]);const T=r=>{const l=r||d;if(!l.trim())return;const n=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),c={sender:"user",text:l,time:n};D(C=>[...C,c]),r||h(""),m(!0),setTimeout(()=>{const C=ce(l,{topicTitle:i,moduleSlug:t,subjectKey:o}),g=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});D(p=>[...p,{sender:"bot",text:C,time:g}]),m(!1)},450)},$=(r,l)=>{navigator.clipboard.writeText(r),O(l),setTimeout(()=>O(null),1500)},W=()=>{typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.cancel(),v(!1),k(null)),D([{sender:"bot",text:`Chat reset! I am ready for your next question regarding **"${i}"**, institute address, teachers details, or courses.`,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}])};return a.jsxs("div",{className:"fixed bottom-5 right-5 z-50 font-sans selection:bg-sky-500/30 selection:text-sky-200",children:[!e&&a.jsxs("button",{onClick:()=>s(!0),className:"group relative flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 text-white font-bold text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-sky-400/30 shadow-sky-950/60 cursor-pointer",children:[a.jsxs("span",{className:"relative flex h-3 w-3",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-teal-300"})]}),a.jsxs("div",{className:"flex items-center gap-2.5",children:[a.jsx("div",{className:"w-7 h-7 rounded-full overflow-hidden border border-sky-300/40 p-0.5 shadow-sm bg-slate-900",children:a.jsx("img",{src:"/teachers/cnat.jpg",alt:"CNAT Mam",className:"w-full h-full rounded-full object-cover",onError:r=>{r.target.style.display="none"}})}),a.jsx("span",{children:"Ask CNAT Mam"})]}),a.jsx("span",{className:"px-2 py-0.5 rounded-md bg-white/20 text-[10px] uppercase font-extrabold tracking-wider text-teal-100",children:"AI Mentor"})]}),e&&a.jsxs("div",{className:`${f?"w-[94vw] sm:w-[680px] h-[720px]":"w-[92vw] sm:w-[440px] h-[600px]"} max-h-[88vh] rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 border-sky-500/30 transition-all`,children:[a.jsxs("div",{className:"px-4 py-3.5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-b border-slate-800 flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-sky-400 to-teal-400 p-0.5 shadow-md overflow-hidden",children:a.jsx("img",{src:"/teachers/cnat.jpg",alt:"CNAT Mam Profile",className:"w-full h-full rounded-full object-cover",onError:r=>{r.target.style.display="none"}})}),a.jsx("span",{className:"absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("h3",{className:"font-extrabold text-white text-sm tracking-wide",children:"CNAT Mam"}),a.jsxs("span",{className:"px-1.5 py-0.5 rounded bg-sky-950 border border-sky-700 text-sky-300 text-[10px] font-mono font-semibold",children:[o.toUpperCase()," Mentor"]})]}),a.jsx("p",{className:"text-[11px] text-slate-400 truncate max-w-[240px]",children:i})]})]}),a.jsxs("div",{className:"flex items-center gap-1 text-slate-400",children:[a.jsx("button",{onClick:()=>b(r=>!r),title:f?"Compact View":"Expand View",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition cursor-pointer",children:f?a.jsx(U,{size:15}):a.jsx(H,{size:15})}),a.jsx("button",{onClick:W,title:"Reset Conversation",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition cursor-pointer",children:a.jsx(G,{size:15})}),a.jsx("button",{onClick:()=>s(!1),title:"Close Chat",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition cursor-pointer",children:a.jsx(z,{size:18})})]})]}),a.jsxs("div",{className:"px-3 py-1.5 bg-slate-900/95 border-b border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("button",{onClick:()=>T("What is the official address and campus location of Coder & AccoTax?"),className:"flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 hover:bg-sky-950 border border-slate-700 hover:border-sky-600 text-sky-300 hover:text-sky-100 transition cursor-pointer",title:"View Campus Address",children:[a.jsx(V,{size:11,className:"text-sky-400"}),a.jsx("span",{children:"Address"})]}),a.jsxs("button",{onClick:()=>T("Who are the teachers and faculty members at Coder & AccoTax?"),className:"flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 hover:bg-indigo-950 border border-slate-700 hover:border-indigo-600 text-indigo-300 hover:text-indigo-100 transition cursor-pointer",title:"View Faculty Profiles",children:[a.jsx(J,{size:11,className:"text-indigo-400"}),a.jsx("span",{children:"Teachers"})]}),a.jsxs("button",{onClick:()=>T("What are all the courses offered at Coder & AccoTax?"),className:"flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 hover:bg-emerald-950 border border-slate-700 hover:border-emerald-600 text-emerald-300 hover:text-emerald-100 transition cursor-pointer",title:"View Courses Catalog",children:[a.jsx(Q,{size:11,className:"text-emerald-400"}),a.jsx("span",{children:"Courses"})]})]}),a.jsx("span",{className:"text-[10px] text-slate-400 hidden sm:inline",children:"Coder & AccoTax"})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm custom-scrollbar bg-slate-950/40",children:[M.map((r,l)=>a.jsxs("div",{className:`flex gap-2.5 ${r.sender==="user"?"justify-end":"justify-start"}`,children:[r.sender==="bot"&&a.jsx("img",{src:"/teachers/cnat.jpg",alt:"CNAT Mam",className:"w-7 h-7 rounded-full object-cover border border-sky-600/60 shrink-0 mt-0.5 shadow-sm",onError:n=>{n.target.style.display="none"}}),a.jsxs("div",{className:`relative max-w-[88%] rounded-2xl px-4 py-3 shadow-md text-xs sm:text-sm leading-relaxed ${r.sender==="user"?"bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-br-none":"bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none"}`,children:[a.jsx("div",{className:"whitespace-pre-wrap font-sans space-y-2",children:r.text.split(`
`).map((n,c)=>{if(n.trim()==="---")return a.jsx("hr",{className:"my-2 border-slate-800"},c);if(n.startsWith("### "))return a.jsx("h4",{className:"font-bold text-sky-300 text-sm mt-2 mb-1",children:n.replace("### ","")},c);if(n.startsWith("#### "))return a.jsx("h5",{className:"font-semibold text-teal-300 text-xs mt-1.5 mb-0.5",children:n.replace("#### ","")},c);if(n.startsWith("> "))return a.jsx("div",{className:"my-1.5 p-3 rounded-xl bg-slate-950 border-l-4 border-sky-500 text-slate-200 font-sans text-xs",children:A(n.replace(/^>\s*/,""))},c);if(n.startsWith("`=")||n.startsWith("`")||n.startsWith("```")){const g=n.replace(/```[a-z]*|```/g,"").replace(/`/g,"");return g.trim()?a.jsx("div",{className:"my-1.5 p-2 rounded-xl bg-slate-950 border border-slate-800 font-mono text-sky-300 text-xs overflow-x-auto",children:g},c):null}if(n.trim().startsWith("- ")||n.trim().startsWith("* ")){const g=n.trim().slice(2);return a.jsxs("div",{className:"flex items-start gap-1.5 pl-1",children:[a.jsx("span",{className:"text-sky-400 mt-0.5",children:"•"}),a.jsx("span",{children:A(g)})]},c)}const C=n.trim().match(/^(\d+)\.\s+(.*)$/);if(C)return a.jsxs("div",{className:"flex items-start gap-1.5 pl-1",children:[a.jsxs("span",{className:"font-bold text-amber-400 mt-0.5 text-xs",children:[C[1],"."]}),a.jsx("span",{children:A(C[2])})]},c);if(n.trim().startsWith("|")&&n.trim().endsWith("|")){if(n.includes(":---")||n.includes("---"))return null;const g=n.split("|").filter(p=>p.trim()!=="");return a.jsx("div",{className:"my-1 flex gap-2 overflow-x-auto text-[11px] bg-slate-950/60 p-1.5 rounded-lg border border-slate-800",children:g.map((p,_)=>a.jsx("div",{className:"flex-1 font-mono text-slate-300",children:A(p.trim())},_))},c)}return a.jsx("p",{children:A(n)},c)})}),a.jsxs("div",{className:"mt-2.5 pt-1.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400",children:[a.jsx("span",{children:r.time}),r.sender==="bot"&&a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("button",{onClick:()=>q(r.text,l),className:`hover:text-sky-300 transition flex items-center gap-1 cursor-pointer ${x&&S===l?"text-amber-400 animate-pulse font-bold":""}`,title:"Read Aloud",children:[x&&S===l?a.jsx(K,{size:13}):a.jsx(X,{size:13}),a.jsx("span",{children:x&&S===l?"Stop":"Listen"})]}),a.jsxs("button",{onClick:()=>$(r.text,l),className:"hover:text-sky-300 transition flex items-center gap-1 cursor-pointer",title:"Copy Answer",children:[I===l?a.jsx(Y,{size:12,className:"text-emerald-400"}):a.jsx(Z,{size:12}),a.jsx("span",{children:I===l?"Copied":"Copy"})]})]})]})]}),r.sender==="user"&&a.jsx("div",{className:"w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5",children:a.jsx(ee,{size:14})})]},l)),w&&a.jsxs("div",{className:"flex items-center gap-2 text-slate-400 text-xs italic pl-9",children:[a.jsxs("span",{className:"flex gap-1",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"}),a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping delay-100"}),a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping delay-200"})]}),a.jsx("span",{children:"CNAT Mam is preparing your response..."})]}),a.jsx("div",{ref:L})]}),a.jsx("div",{className:"px-3 py-2 bg-slate-900/90 border-t border-slate-800/80 overflow-x-auto flex gap-1.5 no-scrollbar",children:R.map((r,l)=>a.jsx("button",{onClick:()=>T(r.query),className:"px-2.5 py-1 rounded-full bg-slate-800 hover:bg-sky-950 border border-slate-700 hover:border-sky-700 text-slate-300 hover:text-sky-200 text-[11px] font-medium whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer",children:r.label},l))}),a.jsxs("form",{onSubmit:r=>{r.preventDefault(),T()},className:"p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2",children:[a.jsx("input",{type:"text",value:d,onChange:r=>h(r.target.value),placeholder:`Ask about ${i}, address, teachers, courses...`,className:"flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/60 transition"}),a.jsx("button",{type:"submit",disabled:!d.trim(),className:"p-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition shadow-md shrink-0 cursor-pointer",title:"Send Question",children:a.jsx(ae,{size:16})})]})]})]})}function A(i){return i?i.split(/(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g).map((o,e)=>{if(o.startsWith("**")&&o.endsWith("**"))return a.jsx("strong",{className:"font-bold text-amber-300",children:o.slice(2,-2)},e);if(o.startsWith("`")&&o.endsWith("`"))return a.jsx("code",{className:"px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-sky-300 text-[11px]",children:o.slice(1,-1)},e);const s=o.match(/^\[(.*?)\]\((.*?)\)$/);return s?a.jsx("a",{href:s[2],target:"_blank",rel:"noopener noreferrer",className:"text-sky-400 font-semibold underline hover:text-sky-300 transition",children:s[1]},e):o}):null}export{pe as default};
