import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 004_005: Propagation, Chaining & Best Practices\r
 * Topic 3: Reading & Deciphering Java Stack Traces: Root Causes, Files & Line Numbers\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class DecipheringStackTracesDemo {\r
\r
    public static void computeStudentRank(String scoreString) {\r
        parseAndRank(scoreString); // Line 12\r
    }\r
\r
    public static void parseAndRank(String scoreString) {\r
        int val = Integer.parseInt(scoreString); // Line 16 (Throws NumberFormatException)\r
        System.out.println("  Rank score calculated: " + val);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: DECIPHERING JAVA STACK TRACES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        try {\r
            computeStudentRank("Invalid_Grade_A");\r
        } catch (NumberFormatException e) {\r
            System.out.println(">>> 1. RAW STACK TRACE OUTPUT:");\r
            e.printStackTrace(System.out);\r
\r
            System.out.println("\\n>>> 2. HOW TO READ A JAVA STACK TRACE IN 3 STEPS:");\r
            System.out.println("  Step 1 (Top Line): Identifies the Exception Class and Message ('NumberFormatException: For input string...')");\r
            System.out.println("  Step 2 (First 'at' line in your package): The exact line where the exception exploded (Line 16 in parseAndRank).");\r
            System.out.println("  Step 3 (Subsequent 'at' lines downward): The historical chain of caller methods leading up to the crash.");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_005: Propagation, Chaining & Best Practices\r
Topic 3: Deciphering Stack Traces\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STACK TRACE ANATOMY:\r
   - Line 1: 'ExceptionType: Error Message'.\r
   - 'at ClassName.methodName(FileName.java:LineNumber)'.\r
   - Read from the top down to find your own code's line number.\r
   - 'Caused by:' sections at the bottom indicate root causes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do you systematically read and debug a Java stack trace from top to bottom?",shortAnswer:"1. Read the very top line: Identifies the exception type (e.g. NullPointerException) and descriptive error message. 2. Look at the FIRST 'at ...' line containing your application's package name: Identifies the exact file name and line number where the error was thrown. 3. Read downwards: Traces the chain of method calls leading up to that failure.",explanation:"Mastery of stack trace reading is the single most important practical debugging skill in Java.",hint:"Top line is error type/message; first application line is the exact crash point; lines below trace callers.",level:"Beginner",codeExample:"// Exception in thread 'main' java.lang.NPE: msg\\n// at com.app.Service.run(Service.java:42)"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_005 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Diagnostic Forensics"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Reading & Deciphering Java Stack Traces: Root Causes, Files & Line Numbers"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the forensic art of stack trace analysis: reading exception messages, locating exact line numbers, and navigating caller ancestry chains."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"DecipheringStackTracesDemo.java",highlightLines:[7,11,12,15,16,25,26,29,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Stack Trace FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 004_005 Topic 3: Stack Trace Forensics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_005_topic3_stack_trace_forensics_note.txt"})}),e.jsx(r,{note:"Don't panic when you see a 50-line red stack trace in your console! Scroll up to the very first line that contains your own package name and click on the line number in blue! That is where your bug is! — Sukanta Hui"})]})}export{g as default};
