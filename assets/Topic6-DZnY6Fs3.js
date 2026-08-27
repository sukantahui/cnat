import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 6: The DAO (Data Access Object) Pattern - Architecture & Overview\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class DaoPatternOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THE DAO DESIGN PATTERN OVERVIEW - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 PILLARS OF DAO ARCHITECTURE:");\r
        System.out.println("  1. ENTITY / MODEL  : Plain Java class/record representing domain data (e.g. Student).");\r
        System.out.println("  2. DAO INTERFACE   : Pure Java interface declaring CRUD operations (e.g. StudentDao).");\r
        System.out.println("  3. DAO IMPL        : Concrete class containing JDBC queries and connection logic (e.g. StudentDaoJdbcImpl).");\r
        System.out.println("  4. SERVICE LAYER   : Business workflows that invoke DAO methods without knowing about SQL!\\n");\r
\r
        System.out.println(">>> CORE ADVANTAGES:");\r
        System.out.println("  - Separation of Concerns: SQL changes do not affect business logic.");\r
        System.out.println("  - Swappable Persistence : Can switch from MySQL to PostgreSQL or SQLite by writing a new DAO implementation!");\r
        System.out.println("  - 100% Unit Testable    : Services can be tested using Mock DAOs without needing a live database.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 6: DAO Pattern Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS THE DAO PATTERN:\r
   - A structural pattern that encapsulates all access to the data source.\r
   - The DAO manages the connection with the database and hides SQL complexity from the business layer.\r
\r
2. CORE LAYERS:\r
   - Presentation / Controller &rarr; Service Layer &rarr; DAO Interface &rarr; JDBC Driver &rarr; Database.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the primary architectural purpose of the Data Access Object (DAO) pattern?",shortAnswer:"To isolate all low-level data access, SQL queries, and database connection logic behind a clean Java interface, decoupling the business service layer from specific database storage technologies.",explanation:"Promotes separation of concerns and single responsibility.",hint:"Isolates SQL queries and data access logic behind clean Java interfaces.",level:"Beginner",codeExample:"Service Layer -> StudentDao (Interface) -> StudentDaoJdbcImpl (SQL/JDBC)"},{question:"How does the DAO pattern enable easy unit testing of business service components?",shortAnswer:"Because services depend on the DAO interface rather than concrete JDBC classes, test suites can inject in-memory Mock DAO implementations, allowing service logic to be tested instantly without running a real database.",explanation:"Enables fast, dependency-free test execution.",hint:"Services can be tested using Mock DAOs without needing a live database.",level:"Intermediate",codeExample:"StudentService service = new StudentService(new MockStudentDao());"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The DAO (Data Access Object) Pattern: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Architecture & Overview"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Separating concerns: isolating database access code from core business logic using the enterprise standard DAO design pattern."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"DaoPatternOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Batch Updates & DAO FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 011_005 Topic 6: DAO Pattern Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic6_dao_pattern_overview_note.txt"})}),e.jsx(r,{note:"Never write SQL statements inside your GUI button listeners or web controllers! The DAO pattern puts all database code behind clean Java interfaces so your business logic stays 100% clean and database-independent! — Sukanta Hui"})]})}export{b as default};
