import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 1: JDBC Architecture - From Application to Database Engine\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class JdbcArchitectureLayersDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: JDBC ARCHITECTURE LAYERS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4-LAYER JDBC ARCHITECTURAL STACK:");\r
        System.out.println("  ┌─────────────────────────────────────────────────────────────┐");\r
        System.out.println("  │ 1. APPLICATION LAYER (Your Business Code / Spring / DAO)    │");\r
        System.out.println("  │    - Calls: connection.prepareStatement("SELECT ...");       │");\r
        System.out.println("  ├─────────────────────────────────────────────────────────────┤");\r
        System.out.println("  │ 2. JDBC API LAYER (java.sql.* Standard Interfaces)          │");\r
        System.out.println("  │    - Defines: Connection, PreparedStatement, ResultSet.     │");\r
        System.out.println("  ├─────────────────────────────────────────────────────────────┤");\r
        System.out.println("  │ 3. JDBC DRIVER MANAGER / DATASOURCE LAYER                   │");\r
        System.out.println("  │    - Discovers drivers, establishes connections via URL.    │");\r
        System.out.println("  ├─────────────────────────────────────────────────────────────┤");\r
        System.out.println("  │ 4. VENDOR JDBC DRIVER LAYER (MySQL, PostgreSQL, Oracle JAR) │");\r
        System.out.println("  │    - Implements interfaces, encodes TCP wire protocol.      │");\r
        System.out.println("  ├─────────────────────────────────────────────────────────────┤");\r
        System.out.println("  │ 5. DATABASE SERVER ENGINE (RDBMS Engine)                    │");\r
        System.out.println("  │    - Executes SQL, manages B-Tree indexes, returns rows.    │");\r
        System.out.println("  └─────────────────────────────────────────────────────────────┘");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 1: JDBC Architecture Layers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LAYER ROLES:\r
   - Application Code : Interacts exclusively with standard interfaces.\r
   - 'DriverManager'  : Manages a list of database drivers and matches the connection URL.\r
   - Driver JAR       : Translates method calls (e.g. 'executeQuery()') into binary database network packets.\r
   - Database Engine  : Processes query plans and returns row buffers.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the primary role of the java.sql.DriverManager class in the JDBC architecture?",shortAnswer:"DriverManager acts as the factory service locator that registers available database drivers and iterates through them to find one that recognizes the requested JDBC connection URL when DriverManager.getConnection() is called.",explanation:"Coordinates driver registration and initial connection bootstrapping.",hint:"Manages registered drivers and selects the correct one for the given URL.",level:"Beginner",codeExample:"DriverManager.getConnection('jdbc:postgresql://localhost/db', 'user', 'pass')"},{question:"Why is the JDBC API composed almost entirely of interfaces rather than concrete classes?",shortAnswer:"To achieve loose coupling and polymorphism. Java defines the abstract specification, allowing database vendors (Oracle, MySQL, Microsoft, Postgres) to write concrete implementations optimized for their specific database network protocols.",explanation:"Separation of specification from vendor implementation.",hint:"Defines the specification while vendor drivers provide the concrete implementations.",level:"Intermediate",codeExample:"Interface: java.sql.Connection; Impl: org.postgresql.jdbc.PgConnection"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["JDBC Architecture: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"From Application to Database Engine"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The 4-tier layer model: Application Code → JDBC API (Interfaces) → DriverManager → Vendor Driver → Database Server."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"JdbcArchitectureLayersDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"JDBC Architecture FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 011_001 Topic 1: JDBC Architecture Layers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic1_jdbc_architecture_layers_note.txt"})}),e.jsx(a,{note:"Think of JDBC as a universal plug socket! Your Java app talks to the JDBC API interfaces, DriverManager chooses the right driver, and the Driver translates your SQL into wire packets sent to MySQL or PostgreSQL! — Sukanta Hui"})]})}export{g as default};
