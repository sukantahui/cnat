import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 004_001: Exception Hierarchy\r
 * Topic 8: Modern Architectural Shift: Why Spring, Hibernate & Stream API Prefer Unchecked Exceptions\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class ModernUncheckedFrameworkTrendDemo {\r
\r
    // Spring Framework pattern: Wrapping checked SQLException into unchecked DataAccessException:\r
    public static class DataAccessException extends RuntimeException {\r
        public DataAccessException(String message, Throwable cause) {\r
            super(message, cause);\r
        }\r
    }\r
\r
    public static void executeSpringStyleRepositoryQuery() {\r
        try {\r
            // Simulating a low-level checked SQL failure:\r
            throw new java.sql.SQLException("Connection to Barrackpore DB timed out!");\r
        } catch (java.sql.SQLException checkedSqlEx) {\r
            // Translate checked exception into clean unchecked domain exception:\r
            throw new DataAccessException("Failed to query student records", checkedSqlEx);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: MODERN UNCHECKED FRAMEWORK TREND - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 3 Reasons Modern Java (Spring Boot, Hibernate, Quarkus) Prefers Unchecked Exceptions:");\r
        System.out.println("  1. Boilerplate Elimination: Avoids polluting intermediate method signatures with 'throws'.");\r
        System.out.println("  2. Stream API & Lambda Compatibility: Lambdas cannot throw checked exceptions without ugly wrappers.");\r
        System.out.println("  3. Centralized Exception Handlers (@ControllerAdvice): Unchecked exceptions bubble up to global HTTP handlers.");\r
\r
        System.out.println("\\n>>> Executing Spring-Style Repository Call:");\r
        try {\r
            executeSpringStyleRepositoryQuery();\r
        } catch (DataAccessException e) {\r
            System.out.println("  [CENTRAL HANDLER] Caught Unchecked Exception: " + e.getMessage());\r
            System.out.println("  [ROOT CAUSE] " + e.getCause());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_001: Exception Hierarchy\r
Topic 8: Modern Unchecked Framework Trend\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODERN FRAMEWORK PRACTICES:\r
   - Wrap low-level checked exceptions into unchecked domain exceptions.\r
   - Spring translates 'SQLException' into 'DataAccessException'.\r
   - Avoids cluttering 10 intermediate service layers.\r
   - Handled globally at Controller/API boundary.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why have modern Java frameworks (like Spring, Hibernate, and Quarkus) shifted away from Checked Exceptions toward Unchecked Exceptions?",shortAnswer:"1. Eliminates signature pollution (intermediate service layers are not forced to declare 'throws' for DAO errors). 2. Enables seamless functional programming with Java 8 Streams and Lambdas. 3. Enables clean Centralized Exception Handling (e.g. '@ControllerAdvice' in Spring Web) where unhandled errors map automatically to HTTP error codes.",explanation:"Checked exceptions are widely considered an experiment that failed in large-scale modern architectures.",hint:"Eliminates boilerplate throws, enables lambda compatibility, and enables centralized error handlers.",level:"Intermediate",codeExample:'throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User missing");'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Frameworks"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Modern Architectural Trend: Why Spring & Modern Frameworks Prefer ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Unchecked Exceptions"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand enterprise framework design: wrapping checked JDBC exceptions into clean unchecked domain types and building centralized ",e.jsx("code",{className:"text-sky-300 font-mono",children:"@ControllerAdvice"})," error filters."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"ModernUncheckedFrameworkTrendDemo.java",highlightLines:[7,10,11,16,20,21,35,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Modern Framework Trend FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 004_001 Topic 8: Modern Framework Trend",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_001_topic8_modern_framework_trend_note.txt"})}),e.jsx(a,{note:"If you work with Spring Boot, you will notice that almost 100% of Spring exceptions inherit from RuntimeException! This keeps your code clean and allows global handlers to catch everything! — Sukanta Hui"})]})}export{g as default};
