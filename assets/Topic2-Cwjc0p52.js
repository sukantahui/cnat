import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 004_003: Throw, Throws & Custom Exceptions\r
 * Topic 2: The 'throws' Keyword: Declaring Checked Exceptions as Part of API Contracts\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.File;\r
import java.io.IOException;\r
import java.sql.SQLException;\r
\r
public class ThrowsKeywordContractDemo {\r
\r
    // Method declaring 'throws' for Checked Exceptions (Part of the public API contract):\r
    public static void exportAcademyLedger(String filePath) throws IOException, SQLException {\r
        System.out.println("  [CONTRACT EXPORT] Exporting records to: " + filePath);\r
\r
        if (filePath == null || filePath.isEmpty()) {\r
            throw new IOException("File path cannot be null or empty!");\r
        }\r
\r
        if (filePath.endsWith(".corrupt")) {\r
            throw new SQLException("Database connection severed during ledger serialization!");\r
        }\r
\r
        System.out.println("  [SUCCESS] Ledger exported cleanly to Barrackpore archive.");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THE 'throws' KEYWORD CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. The Role of 'throws':");\r
        System.out.println("  - Declares to callers what checked exceptions this method might produce.");\r
        System.out.println("  - Enforces that callers must either catch them or declare them in their own 'throws' clause.");\r
\r
        System.out.println("\\n>>> 2. Invoking Method with Required Caller Handling:");\r
        try {\r
            exportAcademyLedger("barrackpore_accounts_2026.csv");\r
        } catch (IOException | SQLException e) {\r
            System.out.println("  [CALLER HANDLED] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_003: Throw, Throws & Custom Exceptions\r
Topic 2: The 'throws' Keyword\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 'throws' CLAUSE:\r
   - Placed in the method signature / header.\r
   - Declares one or more comma-separated exception types.\r
   - Warns callers that they must handle or propagate them.\r
   - Only strictly required for Checked Exceptions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the purpose of the 'throws' keyword in a Java method signature?",shortAnswer:"The 'throws' keyword is part of the method's public API contract. It declares the list of Checked Exceptions that the method might propagate to its callers, alerting the compiler and caller developers to prepare appropriate 'try-catch' handling.",explanation:"Multiple exceptions are separated by commas (e.g. throws IOException, SQLException).",hint:"Declares checked exceptions in method header as part of the public contract.",level:"Beginner",codeExample:"public void process() throws IOException, SQLException { ... }"}];function w(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_003 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"API Contract"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"throws"})," Keyword: Declaring Checked Exceptions in Method Signatures"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Design transparent API contracts: using the ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"throws"})," clause in method signatures to declare potential checked failure modes to callers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ThrowsKeywordContractDemo.java",highlightLines:[7,12,15,16,19,20,31,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Throws Keyword FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 004_003 Topic 2: The throws Keyword",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_003_topic2_throws_keyword_note.txt"})}),e.jsx(n,{note:"The 'throws' keyword is like putting a warning label on a medicine bottle! It tells whoever calls this method: 'Caution: this method may throw IOException or SQLException, make sure you are prepared!' — Sukanta Hui"})]})}export{w as default};
