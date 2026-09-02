import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 8: The DataSource Interface - javax.sql.DataSource\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import javax.sql.DataSource;\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class DataSourceInterfaceDemo {\r
\r
    // Service class depends strictly on the DataSource interface abstraction:\r
    public static class StudentDataService {\r
        private final DataSource dataSource;\r
\r
        public StudentDataService(DataSource dataSource) {\r
            this.dataSource = dataSource;\r
        }\r
\r
        public void printActiveStudentCount() {\r
            try (Connection conn = dataSource.getConnection()) {\r
                System.out.println("   [SERVICE]: Borrowed connection from DataSource successfully: " + conn.getClass().getSimpleName());\r
            } catch (SQLException ex) {\r
                System.err.println("   [SERVICE ERROR]: " + ex.getMessage());\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: THE javax.sql.DataSource INTERFACE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> DRIVERMANAGER VS DATASOURCE:");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  FEATURE               DriverManager                 javax.sql.DataSource");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  Connection Strategy   Creates new physical socket   Borrows from pre-warmed pool");\r
        System.out.println("  Design Pattern        Static utility methods        Factory Interface (Polymorphic)");\r
        System.out.println("  Dependency Injection  Hard to mock / inject         Easily injected via Spring / Guice");\r
        System.out.println("  JNDI Lookup           Not supported                 Native JNDI resource support");\r
        System.out.println("  Enterprise Standard   Legacy / CLI only             Modern Production Standard (100%)");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 8: The javax.sql.DataSource Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS DATASOURCE:\r
   - Factory interface defined in 'javax.sql.DataSource'.\r
   - Represents a source of physical or pooled database connections.\r
\r
2. CORE METHOD:\r
   - 'Connection getConnection()'\r
   - 'Connection getConnection(String username, String password)'\r
\r
3. THREE TYPES OF DATASOURCE IMPLEMENTATIONS:\r
   - Basic DataSource            : Produces unpooled connections.\r
   - ConnectionPoolDataSource    : Produces pooled connections (HikariCP, Commons DBCP2).\r
   - XADataSource                : Produces distributed 2-phase commit transactions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,c=[{question:"Why is javax.sql.DataSource preferred over DriverManager in modern Java enterprise applications?",shortAnswer:"DataSource is an interface that supports dependency injection, configuration externalization, JNDI lookups, and transparent connection pooling, whereas DriverManager relies on rigid static methods and creates expensive unpooled physical connections.",explanation:"Standard data access factory pattern in Spring and Jakarta EE.",hint:"Supports dependency injection, connection pooling, and configuration externalization.",level:"Beginner",codeExample:"public MyService(DataSource ds) { this.ds = ds; }"},{question:"What is the difference between DataSource and XADataSource?",shortAnswer:"A standard DataSource produces standard single-database connections, whereas an XADataSource produces connections capable of participating in distributed, multi-database two-phase commit (2PC) transactions coordinated by a transaction manager.",explanation:"XA represents the Open Group distributed transaction protocol.",hint:"XADataSource supports distributed two-phase commit transactions.",level:"Intermediate",codeExample:"XADataSource xaDs = new PgXADataSource();"}];function D(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The DataSource Interface: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"javax.sql.DataSource"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The enterprise standard factory: why DataSource completely replaces DriverManager in modern enterprise architecture, dependency injection, and JNDI."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"DataSourceInterfaceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JDBC Architecture FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 011_001 Topic 8: The javax.sql.DataSource Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic8_datasource_interface_note.txt"})}),e.jsx(r,{note:"Never inject DriverManager into your services! In modern Java and Spring, always inject javax.sql.DataSource! DataSource decouples your code from database connection mechanics and gives you connection pooling for free! — Sukanta Hui"})]})}export{D as default};
