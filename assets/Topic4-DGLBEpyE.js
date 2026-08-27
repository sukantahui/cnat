import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 004_005: Propagation, Chaining & Best Practices\r
 * Topic 4: Exception Chaining / Wrapping: Translating Technical Failures into Domain Semantics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.sql.SQLException;\r
\r
public class ExceptionChainingAndWrappingDemo {\r
\r
    // Domain exception:\r
    public static class StudentEnrollmentPersistenceException extends RuntimeException {\r
        public StudentEnrollmentPersistenceException(String message, Throwable cause) {\r
            super(message, cause); // Forwarding cause establishes the chain!\r
        }\r
    }\r
\r
    public static void persistStudentRecordToDatabase(String studentName) {\r
        try {\r
            // Simulating low-level database failure:\r
            throw new SQLException("Deadlock detected on Barrackpore student table!");\r
        } catch (SQLException rawSqlEx) {\r
            // EXCEPTION CHAINING: Wrap low-level SQL error into high-level business domain exception:\r
            throw new StudentEnrollmentPersistenceException(\r
                    "Failed to enroll student '" + studentName + "' due to database failure",\r
                    rawSqlEx\r
            );\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: EXCEPTION CHAINING & WRAPPING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        try {\r
            persistStudentRecordToDatabase("Tuhina Das");\r
        } catch (StudentEnrollmentPersistenceException domainEx) {\r
            System.out.println(">>> 1. Intercepted High-Level Domain Exception:");\r
            System.out.println("  Domain Message : " + domainEx.getMessage());\r
\r
            System.out.println("\\n>>> 2. Inspecting Underlying Root Cause (domainEx.getCause()):");\r
            Throwable rootCause = domainEx.getCause();\r
            System.out.println("  Root Cause Class   : " + rootCause.getClass().getName());\r
            System.out.println("  Root Cause Message : " + rootCause.getMessage());\r
\r
            System.out.println("\\n>>> 3. Chained Stack Trace (Includes 'Caused by:' section):");\r
            domainEx.printStackTrace(System.out);\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_005: Propagation, Chaining & Best Practices\r
Topic 4: Exception Chaining\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EXCEPTION CHAINING:\r
   - High-level layers should not leak 'SQLException'.\r
   - Wrap in domain exceptions: 'throw new DomainEx("msg", sqlEx);'.\r
   - Preserves root cause via 'getCause()'.\r
   - Renders 'Caused by: ...' in stack traces.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is 'Exception Chaining' (or Exception Wrapping) and why is it an essential architecture practice (Effective Java Item 73)?",shortAnswer:"Exception Chaining is the practice of catching a low-level implementation exception (like SQLException or IOException) and throwing a higher-level domain exception (like OrderPersistenceException) that wraps the original error as its 'cause'. It prevents implementation details from leaking into high-level APIs while preserving the complete root cause for debugging.",explanation:"Effective Java Item 73: Throw exceptions appropriate to the abstraction.",hint:"Translates low-level errors into high-level domain exceptions while keeping the root cause.",level:"Intermediate",codeExample:'throw new DomainException("Business failure", lowLevelEx);'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_005 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Abstraction Protection"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Exception Chaining & Wrapping: Translating Technical Failures into Domain Semantics"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Apply Effective Java Item 73: encapsulating low-level database and network errors into expressive domain exceptions without losing root cause forensic histories."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"ExceptionChainingAndWrappingDemo.java",highlightLines:[7,10,11,12,19,20,21,22,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Exception Chaining FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 004_005 Topic 4: Exception Chaining",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_005_topic4_exception_chaining_note.txt"})}),e.jsx(r,{note:"If your UI controller catches SQLException, your architecture is leaking database details! Catch the SQLException in the DAO layer and rethrow StudentPersistenceException with the SQL error as the cause! — Sukanta Hui"})]})}export{g as default};
