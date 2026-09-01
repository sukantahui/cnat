import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 004_006: Exception Handling Real-World Lab\r
 * Topic 5: Comprehensive Exception Handling Multiple Choice Self-Assessment Exam\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class ExceptionHandlingComprehensiveExamDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: EXCEPTION HANDLING COMPREHENSIVE EXAM - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 5 CORE EXAMINATION PILLARS TESTED:");\r
        System.out.println("  Q1: Checked vs Unchecked Exception Hierarchy Boundaries.");\r
        System.out.println("  Q2: Flow control under multiple catch blocks and finally execution.");\r
        System.out.println("  Q3: Return statement precedence and dangerous return-in-finally anti-patterns.");\r
        System.out.println("  Q4: AutoCloseable contract and reverse teardown order in Try-with-Resources.");\r
        System.out.println("  Q5: Exception chaining and suppressed exception diagnostics.");\r
\r
        System.out.println("\\n>>> Review all questions in the interactive FAQ section below!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_006: Exception Handling Real-World Lab\r
Topic 5: Exception Handling MCQ Exam\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE EXAM HIGHLIGHTS:\r
   - System.exit(0) bypasses finally.\r
   - Catch order: Subclass before Superclass.\r
   - Multi-catch parameter is implicitly final.\r
   - ARM calls close() in reverse order of declaration.\r
   - Never return inside finally (swallows exceptions).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Which of the following statements about Java Exception Handling is FALSE?",shortAnswer:"Statement: 'A finally block will always execute even if System.exit(0) is called.' (This is FALSE because System.exit(0) immediately terminates the entire JVM process at the operating system level, completely bypassing finally).",explanation:"System.exit(0) is one of the very few exceptions to the finally guarantee.",hint:"System.exit(0) kills the JVM process immediately, skipping finally blocks.",level:"Beginner",codeExample:"try { System.exit(0); } finally { /* NEVER RUNS */ }"},{question:"What is the result of placing 'catch (IOException e)' BEFORE 'catch (FileNotFoundException e)'?",shortAnswer:"A compile-time error ('unreachable code') because FileNotFoundException is a subclass of IOException and is already caught by the first block.",explanation:"Subclasses must strictly precede superclasses in multiple catch chains.",hint:"Subclass catch blocks become unreachable and fail compilation.",level:"Beginner",codeExample:"// COMPILE ERROR: catch (IOException e) ... catch (FileNotFoundException e)"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_006 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"MCQ Self-Assessment"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Comprehensive Exception Handling Multiple Choice Exam & Self-Assessment"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Test your mastery across the entire exception hierarchy: answering core certification-style questions covering catch ordering, finally edge cases, and ARM semantics."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ExceptionHandlingComprehensiveExamDemo.java",highlightLines:[7,13,14,15,16,17]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Exam Assessment FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:r,title:"Module 004_006 Topic 5: Exception MCQ Exam",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_006_topic5_exception_mcq_exam_note.txt"})}),e.jsx(s,{note:"Test yourself with these questions! If you can explain why catch order matters and why return-in-finally is dangerous, you are ready for any senior Java interview! — Sukanta Hui"})]})}export{y as default};
