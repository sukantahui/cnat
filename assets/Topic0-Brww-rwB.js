import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 0: What are Regular Expressions (Regex) & Their Role in Enterprise Java\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
public class RegexOverviewFoundationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: REGULAR EXPRESSIONS (REGEX) OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 3 Core Capabilities of Regex in Java Enterprise Systems:");\r
        System.out.println();\r
        System.out.println("  1. INPUT VALIDATION:");\r
        System.out.println("     Verifying that user inputs strictly match expected patterns:");\r
        System.out.println("     - Email Addresses, Indian Mobile (+91), PAN Cards, PIN Codes.");\r
        System.out.println();\r
        System.out.println("  2. SEARCH & INFORMATION EXTRACTION:");\r
        System.out.println("     Scanning unstructured server logs or documents to extract specific tokens:");\r
        System.out.println("     - Extracting IP addresses, transaction IDs, or error codes from log files.");\r
        System.out.println();\r
        System.out.println("  3. DATA SANITIZATION & TRANSFORMATION:");\r
        System.out.println("     Masking confidential credit cards, normalizing phone formats, or stripping HTML tags.");\r
\r
        // Quick demonstration using String.matches():\r
        String indianPin = "700120"; // Barrackpore Post Office PIN Code\r
        boolean isValidPin = indianPin.matches("\\\\d{6}"); // Exactly 6 digits\r
        System.out.println("\\n>>> Verification: Is '" + indianPin + "' a valid 6-digit Indian PIN Code? " + isValidPin);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 0: What is Regex & Enterprise Roles\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. REGEX APPLICATIONS:\r
   - Form & API Input Validation (Emails, PIN, Phone).\r
   - Log Extraction (IP addresses, UUIDs).\r
   - Sanitization (Masking Credit Card digits).\r
   - Engine: 'java.util.regex' package.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a Regular Expression (Regex) in Java and what are its primary use cases?",shortAnswer:"A Regular Expression is a specialized sequence of characters defining a search pattern. In Java, regex is used for: 1. Input validation (emails, phone numbers, passwords). 2. Pattern searching/token extraction from text. 3. Text sanitization and replacement (masking sensitive data).",explanation:"Standardized in java.util.regex based on Perl 5 regex syntax.",hint:"Pattern matching engine for validation, extraction, and sanitization.",level:"Beginner",codeExample:'boolean valid = input.matches("\\\\d{6}"); // 6-digit PIN code'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Pattern Engine"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"What are Regular Expressions (Regex) & Their Role in Enterprise Systems"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover the power of pattern-matching grammar: verifying student admission data, searching server log streams, and masking sensitive accounting records."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"RegexOverviewFoundationsDemo.java",highlightLines:[7,13,17,21,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Regex Foundations FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 003_006 Topic 0: Regex Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic0_regex_overview_note.txt"})}),e.jsx(a,{note:"Regex is like a supercharged search-and-validate filter! Instead of writing 50 if-else conditions to check a phone number or email, 1 single regex pattern solves it instantly. — Sukanta Hui"})]})}export{h as default};
