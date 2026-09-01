import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 010_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 2: The 4 Types of JDBC Drivers - From Type 1 to Type 4 Pure Java Thin Driver\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class FourTypesJdbcDriversDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THE 4 TYPES OF JDBC DRIVERS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 HISTORICAL DRIVER TYPES:");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  DRIVER TYPE    NAME                    ARCHITECTURE                     MODERN STATUS");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  Type 1         JDBC-ODBC Bridge        Java -> ODBC C Driver -> DB      OBSOLETE (Removed in Java 8)");\r
        System.out.println("  Type 2         Native-API Driver       Java -> Native C++ Client -> DB  RARE (Requires C++ client installed)");\r
        System.out.println("  Type 3         Network-Protocol Driver Java -> Middleware Server -> DB  RARE (Three-tier proxy model)");\r
        System.out.println("  Type 4         Direct Pure Java Thin   Java -> Direct TCP Socket -> DB  UNIVERSAL STANDARD (100% Industry Default)");\r
        System.out.println("  -----------------------------------------------------------------------------------------\\n");\r
\r
        System.out.println(">>> WHY TYPE 4 WENT ON TO WIN THE INDUSTRY:");\r
        System.out.println("  1. 100% Pure Java bytecode (zero platform-specific native C/C++ binaries).");\r
        System.out.println("  2. Zero client-side installation (simply add one Maven dependency!).");\r
        System.out.println("  3. Direct TCP network socket connection to the database server.");\r
        System.out.println("  4. Platform independent across Linux, Windows, macOS, Docker containers, and Cloud.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 2: The 4 Types of JDBC Drivers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DRIVER TAXONOMY:\r
   - Type 1 : JDBC-ODBC Bridge (obsolete, dropped in JDK 8).\r
   - Type 2 : Native-API Driver (uses JNI C/C++ client libraries like OCI).\r
   - Type 3 : Network-Protocol Driver (communicates via middle-tier application server).\r
   - Type 4 : Native-Protocol Pure Java Driver (Direct TCP socket communication).\r
\r
2. COMMON TYPE 4 DRIVER CLASSES:\r
   - MySQL      : 'com.mysql.cj.jdbc.Driver'\r
   - PostgreSQL : 'org.postgresql.Driver'\r
   - Oracle     : 'oracle.jdbc.OracleDriver'\r
   - SQLite     : 'org.sqlite.JDBC'\r
   - H2         : 'org.h2.Driver'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why are Type 4 JDBC drivers (Pure Java Thin Drivers) the universal industry standard today?",shortAnswer:"Because they are written 100% in pure Java, require zero native C/C++ client software or ODBC installation on client machines, and communicate directly with the database server over TCP/IP sockets, providing complete cross-platform portability.",explanation:"Can be deployed anywhere simply by including a single JAR file.",hint:"100% pure Java, zero native client libraries, direct TCP communication.",level:"Beginner",codeExample:"Dependency: org.postgresql:postgresql:42.7.2 (Type 4 Driver)"},{question:"What happened to the Type 1 JDBC-ODBC Bridge driver in modern Java releases?",shortAnswer:"It was completely removed in Java 8 because ODBC is outdated, platform-dependent, insecure, and requires native 32-bit/64-bit OS DLLs.",explanation:"Java SE 8 dropped sun.jdbc.odbc.JdbcOdbcDriver entirely.",hint:"Removed in Java 8.",level:"Beginner",codeExample:"Type 1 was removed in Java 8."}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The 4 Types of JDBC Drivers: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"From Type 1 to Type 4 Pure Java Thin Driver"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Driver taxonomy: Type 1 (JDBC-ODBC bridge), Type 2 (Native API), Type 3 (Network Protocol), and Type 4 (Direct Pure Java Thin Driver)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"FourTypesJdbcDriversDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JDBC Architecture FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 011_001 Topic 2: The 4 Types of JDBC Drivers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic2_four_types_jdbc_drivers_note.txt"})}),e.jsx(a,{note:"In modern Java, Type 4 Pure Java Thin Drivers are the 100% undisputed standard! They need no client software, no C++ libraries, and speak pure TCP directly to the database! Type 1 was removed in Java 8! — Sukanta Hui"})]})}export{T as default};
