import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 3: Connecting via DriverManager - DriverManager.getConnection()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
\r
public class ConnectingViaDriverManagerDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: CONNECTING VIA DRIVERMANAGER - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. JDBC 4.0+ AUTOMATIC DRIVER DISCOVERY (ServiceLoader):");\r
        System.out.println("  - Old Java (JDBC 3.0): Required 'Class.forName("com.mysql.cj.jdbc.Driver");'");\r
        System.out.println("  - Modern Java (JDBC 4.0+): Driver JAR contains 'META-INF/services/java.sql.Driver'");\r
        System.out.println("  - DriverManager automatically discovers and registers all drivers on classpath!\\n");\r
\r
        System.out.println(">>> 2. ESTABLISHING A CONNECTION SYNTAX:");\r
        System.out.println("  String url  = "jdbc:mysql://localhost:3306/barrackpore_academy";");\r
        System.out.println("  String user = "admin";");\r
        System.out.println("  String pass = "secure_pass_123";\\n");\r
        System.out.println("  try (Connection conn = DriverManager.getConnection(url, user, pass)) {");\r
        System.out.println("      System.out.println("Connected successfully: " + conn.isValid(2));");\r
        System.out.println("  } catch (SQLException ex) {");\r
        System.out.println("      System.err.println("Connection failed: " + ex.getMessage());");\r
        System.out.println("  }");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 3: Connecting via DriverManager\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DRIVER REGISTRATION:\r
   - Modern JDBC (Java 6+) uses 'java.util.ServiceLoader' to discover driver classes automatically.\r
   - Calling 'Class.forName()' is obsolete and no longer necessary.\r
\r
2. 'DriverManager.getConnection()' SIGNATURES:\r
   - 'getConnection(String url)'\r
   - 'getConnection(String url, String user, String password)'\r
   - 'getConnection(String url, Properties info)'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is calling Class.forName('com.mysql.cj.jdbc.Driver') no longer required in modern Java applications?",shortAnswer:"Because JDBC 4.0 introduced automatic driver discovery via the standard Java ServiceLoader mechanism. When the driver JAR is placed on the classpath, the JVM automatically scans META-INF/services/java.sql.Driver and registers the driver with DriverManager at startup.",explanation:"Eliminates boilerplate reflection code in applications.",hint:"Automatic driver discovery via Java ServiceLoader in META-INF/services.",level:"Intermediate",codeExample:"Connection conn = DriverManager.getConnection(url, user, pass);"},{question:"What checked exception is thrown if DriverManager cannot connect to the database?",shortAnswer:"java.sql.SQLException",explanation:"All JDBC operations declare and throw SQLException upon error.",hint:"java.sql.SQLException",level:"Beginner",codeExample:"try { ... } catch (SQLException e) { e.printStackTrace(); }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Connecting via DriverManager: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"DriverManager.getConnection()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Establishing the first connection: Class.forName() driver loading vs automatic JDBC 4.0 ServiceLoader discovery, credentials, and connection lifecycle."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ConnectingViaDriverManagerDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JDBC Architecture FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 011_001 Topic 3: Connecting via DriverManager",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic3_connecting_via_drivermanager_note.txt"})}),e.jsx(a,{note:"In old Java (before JDBC 4.0), you had to write Class.forName('com.mysql.cj.jdbc.Driver') to load the driver! In modern Java, JDBC uses Java ServiceLoader (META-INF/services/java.sql.Driver) to load drivers automatically! — Sukanta Hui"})]})}export{x as default};
