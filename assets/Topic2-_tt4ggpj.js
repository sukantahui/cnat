import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 004_001: Exception Hierarchy\r
 * Topic 2: java.lang.Error: Unrecoverable System Failures (OutOfMemoryError, StackOverflowError)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class UnrecoverableErrorsDemo {\r
\r
    // Simulating infinite recursion triggering StackOverflowError:\r
    public static void recursiveStackOverflow(int counter) {\r
        if (counter % 5000 == 0) {\r
            System.out.println("  Depth: " + counter);\r
        }\r
        recursiveStackOverflow(counter + 1); // Never terminates until call stack memory is exhausted!\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: java.lang.Error UNRECOVERABLE FAILURES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 3 Classic Examples of Fatal java.lang.Error:");\r
        System.out.println("  1. OutOfMemoryError (OOM)  : JVM Heap RAM is completely exhausted.");\r
        System.out.println("  2. StackOverflowError (SOE): Call stack memory exhausted by infinite recursion.");\r
        System.out.println("  3. VirtualMachineError     : The underlying JVM is broken or severely corrupted.");\r
\r
        System.out.println("\\n>>> Demonstrating StackOverflowError Catch & Diagnosis (For educational analysis only):");\r
        try {\r
            recursiveStackOverflow(1);\r
        } catch (StackOverflowError e) {\r
            System.out.println("\\n  [CAUGHT FATAL ERROR] StackOverflowError occurred!");\r
            System.out.println("  Class: " + e.getClass().getName());\r
            System.out.println("  NOTE: In real applications, NEVER catch Errors! Let the process crash and alert DevOps.");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_001: Exception Hierarchy\r
Topic 2: java.lang.Error\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ERROR CHARACTERISTICS:\r
   - Subclass of 'Throwable'.\r
   - Unchecked by compiler.\r
   - Indicates serious JVM/hardware issues (RAM, stack).\r
   - Examples: 'OutOfMemoryError', 'StackOverflowError', 'NoClassDefFoundError'.\r
   - NEVER catch Error in production code.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is it considered a dangerous anti-pattern to catch 'java.lang.Error' or 'Throwable' in enterprise applications?",shortAnswer:"Errors represent fatal JVM infrastructure conditions (like OutOfMemoryError or VirtualMachineError) where the JVM's internal integrity is compromised. If caught, the application may continue executing in a corrupted, unpredictable state that leaks data or causes silent failures. The JVM should be allowed to crash and restart.",explanation:"Catching Error or Throwable swallows OutOfMemoryErrors and ThreadDeaths.",hint:"Errors indicate fatal JVM failures; catching them leaves the JVM in an unstable, corrupted state.",level:"Intermediate",codeExample:"// BAD: catch (Throwable t) { ... } // Swallows fatal JVM Errors!"}];function E(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 2"}),r.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Fatal JVM Failures"})]}),r.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[r.jsx("code",{className:"text-rose-400 font-mono",children:"java.lang.Error"}),": Unrecoverable System Failures (",r.jsx("code",{className:"text-rose-300 font-mono",children:"OutOfMemoryError"}),")"]}),r.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Diagnose fatal JVM crashes: understanding call-stack exhaustion in ",r.jsx("code",{className:"text-rose-300 font-mono",children:"StackOverflowError"})," and why catching ",r.jsx("code",{className:"text-rose-400 font-mono",children:"Error"})," corrupts server stability."]})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:o,title:"UnrecoverableErrorsDemo.java",highlightLines:[7,10,11,14,21,22,23,27,28]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{title:"JVM Errors FAQs",questions:i})}),r.jsx("section",{className:"space-y-4",children:r.jsx(a,{content:s,title:"Module 004_001 Topic 2: java.lang.Error",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_001_topic2_errors_unrecoverable_note.txt"})}),r.jsx(n,{note:"If your server runs out of RAM (OutOfMemoryError), catching it in a try-catch will not magically give you more RAM! The JVM is dying; let it restart cleanly! — Sukanta Hui"})]})}export{E as default};
