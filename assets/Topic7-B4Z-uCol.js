import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 7: The 'finally' Block: Guaranteed Resource Cleanup & Teardown Invariant\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class FinallyBlockGuaranteedCleanupDemo {\r
\r
    public static void executeDatabaseTransaction(boolean triggerError) {\r
        System.out.println("  [STEP 1] Acquiring Barrackpore database connection lock...");\r
\r
        try {\r
            System.out.println("  [STEP 2] Executing student fee transaction...");\r
            if (triggerError) {\r
                throw new RuntimeException("Network link to Naihati bank server dropped!");\r
            }\r
            System.out.println("  [STEP 3] Transaction committed successfully.");\r
        } catch (RuntimeException e) {\r
            System.out.println("  [STEP 4] Catch block: Logged failure (" + e.getMessage() + ")");\r
        } finally {\r
            // THE GUARANTEED INVARIANT: Always executes regardless of success or failure!\r
            System.out.println("  [FINALLY CLEANUP] Connection lock released. File handles flushed.");\r
        }\r
\r
        System.out.println("  [STEP 5] Transaction method finished.\\n");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: THE 'finally' BLOCK GUARANTEE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> RUN 1: SUCCESSFUL EXECUTION (Finally executes after try):");\r
        executeDatabaseTransaction(false);\r
\r
        System.out.println(">>> RUN 2: FAILED EXECUTION (Finally executes after catch):");\r
        executeDatabaseTransaction(true);\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 7: The 'finally' Block\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 'finally' GUARANTEE:\r
   - Always executes after 'try' or 'catch'.\r
   - Dedicated exclusively to cleanup and resource closing.\r
   - Executes even if an unhandled exception propagates.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the primary purpose of the 'finally' block in Java exception handling?",shortAnswer:"The 'finally' block provides a guaranteed execution guarantee for cleanup and resource release code (such as closing database connections, flushing file buffers, or releasing locks). It ALWAYS executes whether an exception occurs or not, and whether an exception is caught or uncaught.",explanation:"Ensures no resource leaks occur even under unexpected runtime faults.",hint:"Guarantees resource teardown execution regardless of whether an exception occurred.",level:"Beginner",codeExample:"try { open(); } catch(...) { ... } finally { close(); }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Resource Teardown"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"finally"})," Block: Guaranteed Resource Cleanup & Teardown"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Guarantee resource safety in the JVM: releasing database connection locks, flushing file streams, and preventing leakages under unexpected runtime failures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"FinallyBlockGuaranteedCleanupDemo.java",highlightLines:[7,10,14,15,18,19,21,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Finally Block FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 004_002 Topic 7: The finally Block",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic7_finally_block_note.txt"})}),e.jsx(r,{note:"If your code opens a database connection or file, it MUST be closed in a finally block! Even if your calculation throws an ArithmeticException, the finally block will ensure the file is closed! — Sukanta Hui"})]})}export{f as default};
