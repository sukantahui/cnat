import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 12: NumberFormatException: Root Causes & Robust Defensive Validation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class NumberFormatExceptionDefensiveHandlingDemo {\r
\r
    public static int parseAgeDefensively(String rawInput, int defaultAge) {\r
        if (rawInput == null || rawInput.isBlank()) {\r
            return defaultAge; // Safe fallback for null or empty strings\r
        }\r
        try {\r
            return Integer.parseInt(rawInput.strip());\r
        } catch (NumberFormatException e) {\r
            System.out.printf("  [WARN] Invalid integer format: '%s'. Falling back to default %d.\\n", rawInput, defaultAge);\r
            return defaultAge;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: NumberFormatException DEFENSIVE VALIDATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. The 4 Common Triggers for NumberFormatException:");\r
        System.out.println("  1. Non-numeric characters     : "123a"");\r
        System.out.println("  2. Floating-point in parseInt : "12.34"");\r
        System.out.println("  3. Out-of-bounds overflow     : "9999999999999999999" (Exceeds 2^31-1)");\r
        System.out.println("  4. Null or empty string       : "" or null");\r
\r
        System.out.println("\\n>>> 2. Testing Defensive Validation Method:");\r
        System.out.println("  Result 1 ("25"): " + parseAgeDefensively("25", 18));\r
        System.out.println("  Result 2 ("  40  "): " + parseAgeDefensively("  40  ", 18));\r
        System.out.println("  Result 3 ("twenty"): " + parseAgeDefensively("twenty", 18));\r
        System.out.println("  Result 4 (null): " + parseAgeDefensively(null, 18));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 12: NumberFormatException Handling\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NumberFormatException TRIGGERS:\r
   - Non-digits in string ('"100k"').\r
   - Decimals passed to parseInt ('"12.5"').\r
   - Number exceeds 32-bit Integer range (-2^31 to 2^31-1).\r
   - Unhandled whitespace (fix with '.strip()').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What are the common causes of 'java.lang.NumberFormatException' and how should it be handled defensively?",shortAnswer:"NumberFormatException is thrown when a string passed to a parse method is not a parsable integer (contains letters, decimals in parseInt, trailing spaces, or exceeds the min/max range of the type). Defensive code validates for null/blank and wraps parse calls in a try-catch block with a sensible fallback value.",explanation:"NumberFormatException is an unchecked RuntimeException (subclass of IllegalArgumentException).",hint:"Caused by non-numeric characters, overflow, or decimals; handled defensively via try-catch fallback.",level:"Intermediate",codeExample:"try { int val = Integer.parseInt(s); } catch (NumberFormatException e) { val = 0; }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Defensive Exception Handling"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-rose-400 font-mono",children:"NumberFormatException"}),": Root Causes & Defensive Validation"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build bulletproof parsing pipelines: diagnosing non-digit inputs, integer overflow exceptions, and implementing defensive try-catch fallback routines."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"NumberFormatExceptionDefensiveHandlingDemo.java",highlightLines:[9,10,13,14,15,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"NumberFormatException FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 003_003 Topic 12: NumberFormatException Defense",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic12_nfe_defense_note.txt"})}),e.jsx(a,{note:"Never trust user input from a form or URL parameter! A student entering '25 years' instead of '25' will throw NumberFormatException and crash your web application if unhandled. — Sukanta Hui"})]})}export{g as default};
