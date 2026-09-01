import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
 * Topic 1: Anatomy of SQL Injection - String Concatenation Vulnerabilities\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class AnatomySqlInjectionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: ANATOMY OF SQL INJECTION ATTACK - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. INSECURE CODE WRITTEN BY NAIVE DEVELOPER:\r
        String userInputName = "admin' OR '1'='1"; // Malicious attacker payload\r
        String userPassword  = "any_password";\r
\r
        // Insecure String Concatenation:\r
        String vulnerableSql = "SELECT * FROM users WHERE username = '" + userInputName + "' AND password = '" + userPassword + "'";\r
\r
        System.out.println(">>> 1. VULNERABLE GENERATED SQL QUERY STRING:");\r
        System.out.println("  " + vulnerableSql + "\\n");\r
\r
        System.out.println(">>> 2. HOW THE DATABASE INTERPRETS THIS QUERY:");\r
        System.out.println("  - Because ('1'='1') is ALWAYS TRUE, the WHERE condition evaluates to TRUE for all rows!");\r
        System.out.println("  - The database returns the first user (System Administrator!) without checking password!");\r
        System.out.println("  - Attacker logs in with full administrative privileges! 🚨\\n");\r
\r
        System.out.println(">>> 3. WORSE ATTACK PAYLOAD (Destructive Data Drop):");\r
        String destructivePayload = "admin'; DROP TABLE students; --";\r
        String destructiveSql = "SELECT * FROM users WHERE username = '" + destructivePayload + "'";\r
        System.out.println("  " + destructiveSql);\r
        System.out.println("  - Attacker wipes out the entire students database table! 💥");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
Topic 1: Anatomy of SQL Injection\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS SQL INJECTION (SQLi):\r
   - Occurs when untrusted user input is directly concatenated into a dynamic SQL string.\r
   - The SQL parser on the database engine cannot distinguish between the developer's SQL commands\r
     and the user's data payload, treating user data as executable SQL commands!\r
\r
2. COMMON ATTACK VECTORS:\r
   - Authentication Bypass : '' OR '1'='1'\r
   - Data Exfiltration     : '' UNION SELECT credit_card_num FROM orders --'\r
   - Database Destruction  : '; DROP TABLE students; --'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why does dynamic string concatenation in SQL queries lead to SQL Injection vulnerabilities?",shortAnswer:"Because string concatenation merges executable SQL code structure with user data into a single string. The database SQL parser interprets attacker-supplied characters (such as single quotes and boolean operators) as SQL syntax commands rather than plain text data.",explanation:"Allows attackers to modify the Abstract Syntax Tree (AST) of the SQL query.",hint:"The database parser treats user input as executable SQL syntax.",level:"Beginner",codeExample:"'admin' OR '1'='1' → Changes boolean logic of the query."},{question:"What is the industry-standard defense in Java to prevent 100% of SQL Injection attacks?",shortAnswer:"Using java.sql.PreparedStatement with parameterized query placeholders (?), which sends the SQL template to the database parser separately from the data values.",explanation:"Ensures user input is always treated strictly as literal data.",hint:"Using PreparedStatement with parameter placeholders (?).",level:"Beginner",codeExample:"PreparedStatement ps = conn.prepareStatement('SELECT * FROM users WHERE name = ?');"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_002 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SQL Safety & PreparedStatements"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Anatomy of SQL Injection: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"String Concatenation Vulnerabilities"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The #1 web vulnerability: how unchecked string interpolation in SQL queries allows attackers to bypass authentication and alter query structure."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"AnatomySqlInjectionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"SQL Statements & Injection FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 011_002 Topic 1: Anatomy of SQL Injection",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_002_topic1_anatomy_sql_injection_note.txt"})}),e.jsx(r,{note:"SQL Injection is the most devastating security vulnerability in software history! Never concatenate user input into SQL strings! If an attacker inputs admin' OR '1'='1, they bypass your login completely! — Sukanta Hui"})]})}export{x as default};
