import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 5: The Connection Interface - java.sql.Connection\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class ConnectionInterfaceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: THE java.sql.Connection INTERFACE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> KEY METHODS OF THE java.sql.Connection INTERFACE:");\r
        System.out.println("  1. STATEMENT FACTORIES:");\r
        System.out.println("     - conn.createStatement()                    : Creates generic SQL statement.");\r
        System.out.println("     - conn.prepareStatement(sql)                : Creates pre-compiled parametrized statement.");\r
        System.out.println("     - conn.prepareCall(sql)                     : Creates stored procedure call statement.\\n");\r
\r
        System.out.println("  2. TRANSACTION MANAGEMENT:");\r
        System.out.println("     - conn.setAutoCommit(false)                 : Disables auto-commit; begins manual transaction.");\r
        System.out.println("     - conn.commit()                             : Flushes and permanently persists transaction changes.");\r
        System.out.println("     - conn.rollback()                           : Reverts all uncommitted changes upon error.\\n");\r
\r
        System.out.println("  3. HEALTH & SESSION METADATA:");\r
        System.out.println("     - conn.isValid(int timeoutSeconds)          : Checks if TCP socket and DB session are active.");\r
        System.out.println("     - conn.getMetaData()                        : Returns DatabaseMetaData (tables, versions, dialects).");\r
        System.out.println("     - conn.close()                              : Closes socket (or returns connection to connection pool).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 5: The java.sql.Connection Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS CONNECTION:\r
   - Extends 'java.lang.AutoCloseable' and 'java.sql.Wrapper'.\r
   - Encapsulates stateful database session context (current user, transaction state, temporary tables).\r
\r
2. AUTO-COMMIT DEFAULT:\r
   - Default is 'autoCommit = true' (every single SQL statement commits immediately).\r
   - In enterprise apps, disable auto-commit to execute multi-step atomic transactions!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does java.sql.Connection implement java.lang.AutoCloseable?",shortAnswer:"To support Java's try-with-resources statement, ensuring that database connections, sockets, and server session handles are automatically closed and returned to the connection pool even if runtime exceptions occur.",explanation:"Eliminates database connection leaks.",hint:"Enables automatic cleanup with try-with-resources.",level:"Beginner",codeExample:"try (Connection conn = dataSource.getConnection()) { ... }"},{question:"What is the default auto-commit mode of a newly opened JDBC Connection?",shortAnswer:"True (auto-commit enabled), which means every individual SQL update or insert statement commits immediately to the database as its own independent transaction.",explanation:"Must be set to false for manual multi-statement transaction management.",hint:"True (enabled by default).",level:"Beginner",codeExample:"conn.setAutoCommit(false); // Begin manual transaction"}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Connection Interface: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.sql.Connection"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The database session gateway: creating statements, managing auto-commit transactions, checking connection validity, and closing sessions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ConnectionInterfaceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JDBC Architecture FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:r,title:"Module 011_001 Topic 5: The java.sql.Connection Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic5_connection_interface_note.txt"})}),e.jsx(o,{note:"The java.sql.Connection represents an open TCP socket to your database server! It is the factory for creating Statements, PreparedStatements, and managing transactions with setAutoCommit(false)! — Sukanta Hui"})]})}export{C as default};
