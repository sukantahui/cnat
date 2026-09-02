import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
 * Topic 6: Why String Concatenation is Forbidden - OWASP Security Guidelines\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class ZeroToleranceSqlConcatenationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: ZERO TOLERANCE FOR SQL STRING CONCATENATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 FATAL RISKS OF SQL STRING CONCATENATION:");\r
        System.out.println("  1. TOTAL VULNERABILITY TO SQLi  : OWASP Top 10 Security Vulnerability #1.");\r
        System.out.println("  2. DATABASE PLAN CACHE FLOODING : Every unique string creates a new un-reusable query plan, exhausting database RAM!");\r
        System.out.println("  3. DATE / TIMEZONE FORMAT BUGS  : String formatted dates ('2026-08-27') break across international database locales!\\n");\r
\r
        System.out.println(">>> ENTERPRISE STATIC ANALYSIS & COMPLIANCE:");\r
        System.out.println("  - SonarQube Rule: 'java:S2077 - SQL queries should not be vulnerable to injection attacks'");\r
        System.out.println("  - PCI-DSS & HIPAA Compliance explicitly mandate parameterized queries for all financial and medical data.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
Topic 6: Zero-Tolerance SQL Concatenation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY STATIC ANALYSIS TOOLS FLAG CONCATENATION:\r
   - Tools like SonarQube, SpotBugs, and Snyk treat any '+' concatenation inside 'executeQuery()'\r
     as a Critical Blocker Security Vulnerability.\r
\r
2. SECURITY STANDARD:\r
   - OWASP (Open Web Application Security Project) rule:\r
     "Use of Prepared Statements (with Parameterized Queries) is the primary defense."\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why does string concatenation in SQL queries degrade database memory and plan cache performance even if no hacker attacks the application?",shortAnswer:"Because every query with different literal values produces a unique SQL string (e.g. 'WHERE id = 101' vs 'WHERE id = 102'). The database treats each as an entirely new query, generating thousands of unique query plans that flood and exhaust the database server's Plan Cache memory.",explanation:"Known as Plan Cache Pollution.",hint:"Floods the database Plan Cache with thousands of single-use execution plans.",level:"Intermediate",codeExample:"WHERE id = 101 vs WHERE id = 102 → Two separate query plans in cache!"},{question:"What is the primary defense recommended by OWASP for preventing SQL Injection in Java?",shortAnswer:"Parameterized queries using java.sql.PreparedStatement or ORM query parameters.",explanation:"OWASP Proactive Controls: Parameterize Queries.",hint:"Parameterized queries with PreparedStatement.",level:"Beginner",codeExample:"OWASP Primary Defense: Parameterized Queries (PreparedStatements)."}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_002 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SQL Safety & PreparedStatements"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why String Concatenation is Forbidden: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"OWASP Security Guidelines"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Zero-tolerance policy: analyzing why code reviewers and automated scanners (SonarQube, Checkmarx) reject string-interpolated SQL statements."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ZeroToleranceSqlConcatenationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"SQL Statements & Injection FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 011_002 Topic 6: Zero-Tolerance SQL Concatenation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_002_topic6_zero_tolerance_sql_concatenation_note.txt"})}),e.jsx(r,{note:"In corporate software engineering, submitting code with string concatenation in SQL is an automatic code review failure! Automated security scanners will block your pull request instantly! Always use PreparedStatement! — Sukanta Hui"})]})}export{y as default};
