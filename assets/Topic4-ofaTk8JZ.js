import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 4: Understanding JDBC Connection URLs - Syntax & Parameters\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class JdbcConnectionUrlsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: UNDERSTANDING JDBC CONNECTION URLS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. ANATOMY OF A JDBC URL:");\r
        System.out.println("  Pattern: jdbc:<subprotocol>:<subname/connection-details>");\r
        System.out.println("  Example: jdbc:mysql://localhost:3306/barrackpore_db?useSSL=true&serverTimezone=UTC\\n");\r
\r
        System.out.println(">>> 2. PRODUCTION JDBC URL EXAMPLES BY DATABASE ENGINE:");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  DATABASE     DEFAULT PORT   JDBC CONNECTION URL PATTERN");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  MySQL        3306           jdbc:mysql://localhost:3306/academy_db?serverTimezone=UTC");\r
        System.out.println("  PostgreSQL   5432           jdbc:postgresql://localhost:5432/academy_db?sslmode=verify-full");\r
        System.out.println("  Oracle       1521           jdbc:oracle:thin:@localhost:1521:xe (or @//localhost:1521/ORCL)");\r
        System.out.println("  SQL Server   1433           jdbc:sqlserver://localhost:1433;databaseName=academy_db");\r
        System.out.println("  SQLite       N/A (File)     jdbc:sqlite:/var/data/academy.db");\r
        System.out.println("  H2 In-Memory N/A (RAM)      jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 4: JDBC Connection URLs\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GENERAL SYNTAX FORMAT:\r
   - 'jdbc:<subprotocol>://<host>:<port>/<database>?<param1>=<val1>&<param2>=<val2>'\r
\r
2. ESSENTIAL PRODUCTION PARAMETERS:\r
   - 'serverTimezone=UTC' (prevents date/time offset discrepancies).\r
   - 'useSSL=true / sslmode=require' (enforces encrypted transport).\r
   - 'connectTimeout=5000' (caps TCP connect wait time).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What are the three main components of every JDBC connection URL?",shortAnswer:"1. The 'jdbc:' prefix (identifies the protocol), 2. The subprotocol (identifies the database driver type, e.g. 'mysql', 'postgresql', 'oracle'), and 3. The subname (host, port, database name, and connection parameters).",explanation:"Standard uniform resource locator pattern in JDBC.",hint:"1. 'jdbc:', 2. subprotocol (db vendor), 3. subname (host/port/db).",level:"Beginner",codeExample:"jdbc:postgresql://localhost:5432/mydb"},{question:"What is the format of an in-memory embedded H2 database JDBC URL?",shortAnswer:"jdbc:h2:mem:<dbname>;DB_CLOSE_DELAY=-1",explanation:"Widely used for unit and integration testing without spinning up external database servers.",hint:"jdbc:h2:mem:testdb",level:"Beginner",codeExample:"jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Understanding JDBC Connection URLs: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Syntax & Parameters"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Connecting to database engines: analyzing jdbc:subprotocol:subname patterns for MySQL, PostgreSQL, Oracle, SQLite, and H2 with query tuning flags."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"JdbcConnectionUrlsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JDBC Architecture FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 011_001 Topic 4: JDBC Connection URLs",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic4_jdbc_connection_urls_note.txt"})}),e.jsx(o,{note:"Every JDBC URL starts with 'jdbc:' followed by the subprotocol like 'mysql:' or 'postgresql:' and the server host, port, and database name! You can append parameters like ?sslmode=require&serverTimezone=UTC! — Sukanta Hui"})]})}export{h as default};
