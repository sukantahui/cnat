import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 0: What is JDBC - Java Database Connectivity Overview\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Driver;\r
import java.sql.DriverManager;\r
import java.util.Enumeration;\r
\r
public class WhatIsJdbcOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT IS JDBC (JAVA DATABASE CONNECTIVITY) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. DEFINITION & PHILOSOPHY OF JDBC:");\r
        System.out.println("  - JDBC (Java Database Connectivity) is the core Java standard API (java.sql & javax.sql)");\r
        System.out.println("  - It provides a vendor-neutral interface for executing SQL queries, managing transactions,");\r
        System.out.println("    and processing relational tabular result sets.\\n");\r
\r
        System.out.println(">>> 2. REGISTERED JDBC DRIVERS IN CURRENT RUNTIME ENVIRONMENT:");\r
        Enumeration<Driver> drivers = DriverManager.getDrivers();\r
        int count = 0;\r
        while (drivers.hasMoreElements()) {\r
            Driver driver = drivers.nextElement();\r
            System.out.println("  - Driver: " + driver.getClass().getName() + " (Version: " + driver.getMajorVersion() + "." + driver.getMinorVersion() + ")");\r
            count++;\r
        }\r
        if (count == 0) {\r
            System.out.println("  - (No external database driver JARs currently loaded on system classpath)");\r
        }\r
\r
        System.out.println("\\n>>> 3. THE JDBC CONTRACT:");\r
        System.out.println("  - Write standard Java code against JDBC interfaces (Connection, Statement, ResultSet).");\r
        System.out.println("  - Swap database backends (MySQL <-> PostgreSQL) by merely changing the driver JAR & JDBC URL!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 0: What is JDBC Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS JDBC:\r
   - Specification and API developed by Sun Microsystems / Oracle.\r
   - Core packages: 'java.sql' (core interfaces) and 'javax.sql' (advanced server data source APIs).\r
\r
2. KEY CORE INTERFACES:\r
   - 'Driver'          : Database vendor adapter.\r
   - 'Connection'      : Active socket connection to the database.\r
   - 'Statement'       : Container for executing SQL commands.\r
   - 'ResultSet'       : Tabular cursor over SQL query results.\r
   - 'SQLException'    : Root checked exception for all database errors.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What two primary packages form the standard JDBC API in the Java Standard Edition library?",shortAnswer:"java.sql (containing fundamental interfaces like Connection, Statement, and ResultSet) and javax.sql (containing enterprise extensions like DataSource, ConnectionPoolDataSource, and RowSet).",explanation:"Standard Java SE enterprise data access foundation.",hint:"java.sql and javax.sql.",level:"Beginner",codeExample:"import java.sql.*; import javax.sql.*;"},{question:"Why is JDBC called a vendor-neutral database API?",shortAnswer:"Because developers write code against standardized Java interfaces (java.sql.Connection, Statement, ResultSet), while database vendors provide concrete driver implementations (MySQL Connector, pgJDBC, ojdbc) that translate standard calls into vendor-specific network protocols.",explanation:"Allows switching database vendors without rewriting business query logic.",hint:"Code uses standard Java interfaces while vendor drivers handle network protocols.",level:"Intermediate",codeExample:"Connection conn = DriverManager.getConnection(url, user, pass);"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["What is JDBC: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Java Database Connectivity Overview"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Bridging Java and Relational Databases: the universal SQL standard API connecting Java applications to MySQL, PostgreSQL, Oracle, SQLite, and SQL Server."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"WhatIsJdbcOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JDBC Architecture FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 011_001 Topic 0: What is JDBC Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic0_what_is_jdbc_overview_note.txt"})}),e.jsx(r,{note:"Welcome to Segment 11 (JDBC & Data Access)! JDBC is the foundation of all Java database connectivity — Hibernate, Spring Data, and JPA all sit on top of JDBC! Master the fundamentals first! — Sukanta Hui"})]})}export{S as default};
