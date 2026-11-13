import{j as e,b as n}from"./vendor-react-core-B-R9HE-Z.js";import{T as x}from"./TeacherSukantaHui-DtuaDHjf.js";import{F as u}from"./FAQTemplate-16IfroqC.js";import{P as f}from"./PlainTextPrint-C6NaUtnE.js";import{P as h}from"./PythonFileLoader-DZ61U3Y_.js";import{c as g,dv as b,d9 as S,d as y,$ as w,az as d,t as v,ag as j}from"./vendor-icons-Bcvdak5x.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const C=[{question:"Which of the following is the best example of General Purpose Application Software?",options:["IRCTC Railway Ticket Booking Portal","Microsoft Excel electronic spreadsheet","Army Public School Fee Management Software","Apollo Hospitals Patient Admission Database"],correctAnswer:1,explanation:"Microsoft Excel is designed for generic numerical calculations and data analysis across any domain, making it General Purpose Application Software."},{question:"What is the key advantage of Customized (Tailor-Made) Application Software over General Purpose Software?",options:["It is always completely free of cost","It precisely addresses the unique operational rules and workflows of a specific organization","It is pre-installed on every new computer by default","It never requires maintenance or updates"],correctAnswer:1,explanation:"Tailor-made bespoke software is engineered specifically to align with an organization's unique operational processes and rules."},{question:"A departmental store commissions a software company to build an automated billing software tailored to their custom barcode scanners and loyalty point rules. What category does this software belong to?",options:["System Software","System Utility","Tailor-Made (Customized) Application Software","Firmware"],correctAnswer:2,explanation:"Software built specifically for one client's business logic and hardware setup is classified as Tailor-Made (Customized) Application Software."},{question:`Assertion (A): General-purpose software is usually far cheaper per license than developing bespoke software from scratch.
Reason (R): The development expenses of general-purpose software are amortized over millions of buyers globally.`,options:["Both A and R are true, and R is the correct explanation of A","Both A and R are true, but R is not the correct explanation of A","A is true, but R is false","A is false, but R is true"],correctAnswer:0,explanation:"Mass adoption of packaged software allows software vendors to distribute R&D costs across millions of licenses."},{question:"Which of the following software combinations correctly pairs an Application type with its primary function?",options:["DBMS - Editing vector photographs","Word Processor - Managing structured relational tables","Electronic Spreadsheet - Financial calculation and data modeling","Device Driver - Writing essays and lab reports"],correctAnswer:2,explanation:"Electronic spreadsheets (such as MS Excel or LibreOffice Calc) are specifically designed for numerical modeling, formulas, and chart visualization."}],A=`================================================================================\r
CBSE CLASS 11 COMPUTER SCIENCE (083)\r
UNIT I: COMPUTER SYSTEMS AND ORGANISATION\r
MODULE: 001_002 TYPES OF SOFTWARE AND OPERATING SYSTEM FUNCTIONS\r
TOPIC 3: APPLICATION SOFTWARE - GENERAL PURPOSE VS CUSTOMIZED / TAILOR-MADE\r
================================================================================\r
\r
1. WHAT IS APPLICATION SOFTWARE?\r
Application Software is a class of computer programs designed to perform specific user-driven tasks, solve practical problems, or provide entertainment. Unlike System Software, which manages hardware and computer internals, Application Software operates at the top layer directly serving end-user productivity.\r
\r
2. CLASSIFICATION OF APPLICATION SOFTWARE:\r
\r
A. GENERAL PURPOSE APPLICATION SOFTWARE (OFF-THE-SHELF / PACKAGED):\r
Software designed to satisfy a broad set of common requirements shared by millions of users across diverse industries.\r
Key Features:\r
- Ready to install and use immediately (zero development lead time).\r
- Low cost per license because development costs are distributed over millions of buyers.\r
- Extensively tested with frequent vendor updates, patches, and global user community support.\r
- May contain redundant features not needed by a specific user.\r
\r
Sub-types and Examples:\r
1. Word Processors: MS Word, LibreOffice Writer, Google Docs (documentation, typography).\r
2. Electronic Spreadsheets: MS Excel, LibreOffice Calc, Google Sheets (financial modeling, formulas, data visualization).\r
3. Database Management Systems (DBMS): MySQL, Oracle, MS Access, PostgreSQL (structured data querying).\r
4. Presentation Graphics: MS PowerPoint, Canva, Prezi (slide decks).\r
5. Web Browsers: Google Chrome, Mozilla Firefox, Apple Safari.\r
\r
B. CUSTOMIZED / TAILOR-MADE APPLICATION SOFTWARE (BESPOKE SOFTWARE):\r
Software specially commissioned, designed, and developed to satisfy the precise, unique workflow requirements of a specific organization or client.\r
Key Features:\r
- Exact fit: Matches the organization's unique accounting rules, employee structures, or regulatory mandates.\r
- High initial development cost and ongoing maintenance expenses.\r
- Long development lead time requiring systems analysis, coding, and testing.\r
- Requires specialized training for staff.\r
\r
Real-World Examples:\r
1. Railway / Airline Ticketing System (IRCTC, Amadeus).\r
2. School / College Management ERP (Fee collection, attendance, CBSE report card generation).\r
3. Hospital OPD & Inpatient Management System.\r
4. Banking Core Processing Systems (Finacle, TCS BaNCS).\r
5. Supermarket Point of Sale (POS) Barcode Billing Software.\r
\r
3. CBSE EXAMINATION COMPARISON MATRIX:\r
\r
| Parameter | General Purpose Software | Customized / Tailor-Made Software |\r
| :--- | :--- | :--- |\r
| Target Audience | Mass general public & diverse businesses | One specific organization / client |\r
| Development Cost | Inexpensive to the end buyer | Expensive to commission and build |\r
| Availability | Readily available off-the-shelf | Takes months of development time |\r
| Workflow Fit | General features; may require user adaptation | Exact fit for company business logic |\r
| Maintenance | Handled by the commercial vendor | Handled by dedicated IT dev team |\r
| Examples | MS Word, Excel, Photoshop, Chrome | IRCTC Portal, School Fee Portal, Bank ERP |\r
`,N=`"""\r
CBSE Class 11 Computer Science (083) - Unit 1 Computer Systems and Organisation\r
Module: Types of Software, OS Architecture & Language Processors\r
File: software_cost_customization_analyzer.py\r
Topic 3: Application Software - General Purpose vs Customized / Tailor-Made Software\r
\r
Demonstrates:\r
1. Classification of Application Software:\r
   - General Purpose (Off-the-shelf: Word Processors, Spreadsheets, DBMS)\r
   - Customized / Tailor-Made (Bespoke: School Management, Hospital Billing, Railway Reservation)\r
2. Cost-Benefit & Requirement Matching Decision Matrix\r
"""\r
\r
class ApplicationSoftwareAnalyzer:\r
    """Simulates enterprise software evaluation between COTS (Commercial Off-The-Shelf) and Bespoke Solutions."""\r
    \r
    CATALOG = {\r
        "general_purpose": [\r
            {"name": "LibreOffice Writer / MS Word", "domain": "Word Processing", "cost": 0, "flexibility": "Medium", "dev_time_days": 0},\r
            {"name": "MS Excel / Google Sheets", "domain": "Spreadsheets & Analytics", "cost": 70, "flexibility": "High", "dev_time_days": 0},\r
            {"name": "Adobe Photoshop / GIMP", "domain": "Digital Image Manipulation", "cost": 240, "flexibility": "High", "dev_time_days": 0}\r
        ],\r
        "customized_bespoke": [\r
            {"name": "Army Public School Student ERP", "domain": "School Attendance & Fee Ledger", "cost": 4500, "flexibility": "Exact Match", "dev_time_days": 90},\r
            {"name": "IRCTC Railway Reservation Portal", "domain": "Mass High-Concurrency Ticketing", "cost": 250000, "flexibility": "Exact Match", "dev_time_days": 365},\r
            {"name": "Supermarket POS Barcode Billing", "domain": "Retail Inventory & GST Invoice", "cost": 1800, "flexibility": "Exact Match", "dev_time_days": 45}\r
        ]\r
    }\r
\r
    @classmethod\r
    def evaluate_selection(cls, user_need: str, budget_inr: float, requires_exact_workflow: bool) -> dict:\r
        print(f"\\n[*] Evaluating Software Choice for Requirement: '{user_need}'")\r
        print(f"    Budget: Rs. {budget_inr:,.2f} | Exact Custom Workflow Required: {requires_exact_workflow}")\r
\r
        if requires_exact_workflow and budget_inr >= 50000:\r
            recommendation = "Bespoke / Tailor-Made Customized Application Software"\r
            rationale = "Your organization has specialized business logic that off-the-shelf software cannot satisfy. Building bespoke software guarantees total workflow alignment."\r
        elif requires_exact_workflow and budget_inr < 50000:\r
            recommendation = "Customized Add-on / Scripted Template on top of General Purpose Suite"\r
            rationale = "Budget constraints prevent full ground-up development; configure macro scripts inside Excel/LibreOffice or low-code tools."\r
        else:\r
            recommendation = "General-Purpose Commercial Off-The-Shelf (COTS) Package"\r
            rationale = "Standard software suites provide immediate deployment, vendor security updates, and low per-user cost."\r
\r
        print(f"\\n[+] RECOMMENDATION: {recommendation}")\r
        print(f"    Rationale: {rationale}\\n")\r
        return {"recommendation": recommendation, "rationale": rationale}\r
\r
\r
def main():\r
    print("=================================================================")\r
    print("  CBSE CLASS 11 CS (083) - APPLICATION SOFTWARE DECISION MATRIX  ")\r
    print("=================================================================\\n")\r
\r
    # Scenario 1: General office documentation\r
    ApplicationSoftwareAnalyzer.evaluate_selection(\r
        user_need="Drafting school essays and preparing lab reports",\r
        budget_inr=0,\r
        requires_exact_workflow=False\r
    )\r
\r
    # Scenario 2: Hospital bed allocation and OPD token management\r
    ApplicationSoftwareAnalyzer.evaluate_selection(\r
        user_need="Hospital Multi-Speciality Bed & Pharmacy Billing",\r
        budget_inr=150000,\r
        requires_exact_workflow=True\r
    )\r
\r
if __name__ == "__main__":\r
    main()\r
`,P=()=>{const[t,c]=n.useState("school"),[a,p]=n.useState(6e4),[r,m]=n.useState(!0),o={school:{title:"School Student Attendance & Report Card Generation",description:"Needs CBSE grading rubric, dynamic report cards, and SMS alerts to parents.",generalOption:"MS Excel / Google Sheets with Macro templates",bespokeOption:"Customized School ERP Portal (Web + Database)"},retail:{title:"Supermarket Point of Sale (POS) & GST Inventory",description:"High speed barcode scanning, thermal receipt printing, daily GST tax filing.",generalOption:"Off-the-shelf Tally ERP / QuickBooks",bespokeOption:"Tailor-Made POS Touchscreen Terminal Software"},author:{title:"Author Writing a 300-Page Computer Science Textbook",description:"Formatting chapters, inserting diagrams, indexing, and spell-checking.",generalOption:"MS Word / LibreOffice Writer / LaTeX",bespokeOption:"Custom Built Markdown CMS"}},i=t==="author"?{type:"General Purpose Software",recommend:"Use standard Word Processors (LibreOffice Writer / MS Word).",reason:"Word processing needs are standard globally; custom development would be a waste of money and time."}:r&&a>=4e4?{type:"Tailor-Made (Customized) Software",recommend:o[t].bespokeOption,reason:"The unique workflow and sufficient budget justify developing customized software tailored to exact operational rules."}:{type:"General Purpose / Packaged Software with Custom Templates",recommend:o[t].generalOption,reason:"Budget constraints or standard requirements make packaged solutions more practical and cost-effective."};return e.jsxs("div",{className:"w-full bg-slate-950/90 rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4",children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(j,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"Application Software Selection & Cost-Benefit Matrix"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Evaluate when an organization should choose General Purpose packages versus Customized Bespoke software."})]})]})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:Object.entries(o).map(([s,l])=>e.jsxs("button",{onClick:()=>c(s),className:`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${t===s?"border-emerald-500 bg-emerald-500/10 text-white shadow-lg":"border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700"}`,children:[e.jsx("h4",{className:"text-sm font-semibold text-white mb-1",children:l.title}),e.jsx("p",{className:"text-xs text-slate-400 line-clamp-2",children:l.description})]},s))}),e.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-5 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-semibold text-slate-300 mb-2",children:["Available Budget (INR): Rs. ",a.toLocaleString()]}),e.jsx("input",{type:"range",min:"5000",max:"200000",step:"5000",value:a,onChange:s=>p(Number(s.target.value)),className:"w-full accent-emerald-500 cursor-pointer"})]}),e.jsxs("div",{className:"flex items-center justify-between sm:justify-start gap-4",children:[e.jsx("label",{className:"text-xs font-semibold text-slate-300",children:"Requires Specialized Custom Business Rules?"}),e.jsx("button",{onClick:()=>m(!r),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${r?"bg-emerald-500 text-white":"bg-slate-800 text-slate-400"}`,children:r?"Yes (Custom Rules)":"No (Standard Rules)"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs font-mono uppercase text-emerald-400 font-bold",children:"Optimal Recommendation:"}),e.jsx("span",{className:"text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold",children:i.type})]}),e.jsx("h4",{className:"text-base font-bold text-white",children:i.recommend}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:i.reason})]})]})]})};function B(){return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsx("div",{className:"bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full uppercase tracking-wider",children:"Unit I: CSO · Module 001_002"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full",children:"Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold rounded-full",children:"CBSE Core Syllabus"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:"Application Software: General Purpose vs Customized / Tailored Packages"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed",children:"Explore the taxonomy of user-centric application software, comparing off-the-shelf productivity suites with bespoke organizational software systems."})]})]})}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold",children:e.jsx(g,{size:18})}),e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white",children:"Intuitive Real-World Analogy: Readymade Clothes vs Tailored Wedding Suit"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-emerald-400 flex items-center gap-1.5",children:[e.jsx(b,{size:14})," General Purpose: Off-the-Shelf Shirt"]}),e.jsx("p",{className:"text-slate-300",children:"You walk into a department store and buy a standard size 'L' shirt. It's inexpensive, immediately available, and fits most people reasonably well, though sleeves might be slightly long."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"font-bold text-purple-400 flex items-center gap-1.5",children:[e.jsx(S,{size:14})," Tailor-Made: Bespoke Custom Suit"]}),e.jsx("p",{className:"text-slate-300",children:"A master tailor takes 20 exact body measurements, stitches custom fabric over three weeks, and produces a garment that fits your body contours perfectly. It costs 10x more and takes time to make, but meets exact specifications."})]})]})]}),e.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(y,{className:"text-emerald-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"Taxonomy of Application Software"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider block",children:"Category A"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"General Purpose Software (Packaged)"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Software engineered to handle universal computing needs across millions of users and businesses without customization."}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Word Processors:"})," MS Word, LibreOffice Writer, Google Docs"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spreadsheets:"})," MS Excel, LibreOffice Calc, Google Sheets"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DBMS:"})," Oracle, MySQL, MS Access, PostgreSQL"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Graphics & Multimedia:"})," Adobe Photoshop, GIMP, VLC"]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-purple-400 uppercase tracking-wider block",children:"Category B"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Customized / Tailored Software (Bespoke)"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Software commissioned by a specific organization to implement proprietary business rules and specialized workflows."}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Railways / Airlines:"})," IRCTC Online Reservation System"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schools / Colleges:"})," Student Fee & Attendance ERP"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Banking:"})," Core Banking Systems (Finacle, TCS BaNCS)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Healthcare:"})," Hospital OPD & Bed Allocation Portals"]})]})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(P,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(w,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Python Software Cost & Requirement Analyzer"})]}),e.jsx(h,{filePath:"src/components/study/cbse-class-11-computer-science-083/topics/001_002_types-of-software-and-operating-system-functions/topic3_files/software_cost_customization_analyzer.py",fileContent:N})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx(d,{className:"text-amber-400",size:24}),e.jsx("h2",{className:"text-xl font-bold text-white",children:"CBSE Examination Pitfalls & Answering Tips"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-sm",children:[e.jsx(d,{size:18}),e.jsx("span",{children:"Common Mistakes"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing General Purpose with System Software:"})," MS Excel is an application software, NOT a system utility or operating system."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming Customized software is always superior:"})," For standard tasks like drafting letters, off-the-shelf word processors are far superior and cost-effective."]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[e.jsx(v,{size:18}),e.jsx("span",{children:"Examiner Preferred Answers"})]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"State the definition of Application Software:"})," Programs designed to perform specific user-driven tasks and solve end-user problems."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Provide clear real-world examples:"})," Cite IRCTC for tailor-made software and MS Excel / LibreOffice Calc for general purpose software."]})]})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(u,{questions:C})}),e.jsx("div",{className:"space-y-4",children:e.jsx(f,{fileName:"CBSE_Class11_CS_Topic3_Application_Software_Notes.txt",content:A})}),e.jsx("div",{className:"space-y-4",children:e.jsx(x,{topicName:"Application Software (General Purpose vs Tailored)",subject:"CBSE Class 11 Computer Science (083)"})})]})})}export{B as default};
