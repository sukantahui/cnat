import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 16: Analyzing JVM Memory Errors - Diagnostic Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class AnalyzingMemoryErrorsCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: ANALYZING JVM MEMORY ERRORS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 MAJOR JVM MEMORY ERRORS & ROOT CAUSE MATRIX:");\r
        System.out.println("  -----------------------------------------------------------------------------------------------");\r
        System.out.println("  MEMORY ERROR                    AFFECTED AREA     ROOT CAUSE                    COMMON FIX");\r
        System.out.println("  -----------------------------------------------------------------------------------------------");\r
        System.out.println("  OutOfMemoryError: Java heap     Heap Area         Memory Leak / Huge dataset    Analyze Heap Dump (.hprof), increase -Xmx");\r
        System.out.println("  OutOfMemoryError: Metaspace     Metaspace         ClassLoader leak / CGLIB      Set -XX:MaxMetaspaceSize, fix static refs");\r
        System.out.println("  StackOverflowError              JVM Thread Stack  Infinite recursion / Deep calls Fix recursion base case, tune -Xss");\r
        System.out.println("  OutOfMemoryError: GC overhead   Heap Area         98% time in GC, <2% reclaimed Optimize allocation, eliminate leaks");\r
        System.out.println("  OutOfMemoryError: unable native OS Native RAM     Exhausted OS thread limits    Tune OS ulimit -u, use Virtual Threads (Java 21)");\r
        System.out.println("  -----------------------------------------------------------------------------------------------\\n");\r
\r
        // 1. Simulating Controlled Recursion Depth vs Stack:\r
        System.out.println(">>> 1. TESTING RECURSION DEPTH ON STACK (StackOverflow Safety Check):");\r
        int safeDepth = calculateSafeRecursionDepth(100);\r
        System.out.println("  - Successfully executed recursion of depth 100 on thread stack! Result: " + safeDepth);\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 010_004 COMPLETE: JVM MEMORY MODEL & RUNTIME AREAS MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    static int calculateSafeRecursionDepth(int n) {\r
        if (n <= 0) return 0;\r
        return 1 + calculateSafeRecursionDepth(n - 1);\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 16: Analyzing Memory Errors Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JVM MEMORY ERROR TRIAGE GUIDE:\r
   1. 'java.lang.OutOfMemoryError: Java heap space'\r
      - Objects cannot be allocated on Heap despite Full GC.\r
      - Diagnostic Tool: Capture dump with '-XX:+HeapDumpOnOutOfMemoryError'.\r
   2. 'java.lang.OutOfMemoryError: Metaspace'\r
      - Native metadata limit reached due to classloader leakage.\r
      - Diagnostic Tool: 'jcmd <pid> GC.class_stats' / VisualVM.\r
   3. 'java.lang.StackOverflowError'\r
      - Thread stack frame capacity exceeded by recursive calls.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Which JVM flag automatically captures a heap dump file (.hprof) when an OutOfMemoryError occurs in production?",shortAnswer:"-XX:+HeapDumpOnOutOfMemoryError (combined with -XX:HeapDumpPath=/var/logs/dump.hprof) automatically generates a snapshot of all heap objects for post-mortem debugging in Eclipse MAT or VisualVM.",explanation:"Indispensable production diagnostic setting for enterprise JVM applications.",hint:"-XX:+HeapDumpOnOutOfMemoryError",level:"Beginner",codeExample:"java -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/logs/dump.hprof -jar app.jar"},{question:"What causes 'java.lang.OutOfMemoryError: GC overhead limit exceeded'?",shortAnswer:"The JVM throws this error when the application spends more than 98% of its CPU time executing garbage collection but reclaims less than 2% of the heap, preventing the application from freezing in an endless GC loop.",explanation:"Early warning circuit breaker before hard heap exhaustion.",hint:"Spends >98% time in GC and reclaims <2% heap memory.",level:"Intermediate",codeExample:"Early detection circuit breaker against GC thrashing."}];function O(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Analyzing JVM Memory Errors: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Heap OOM vs Metaspace OOM vs StackOverflowError"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Diagnostic mastery: distinguishing Java heap space OutOfMemoryError, Metaspace OutOfMemoryError, and thread StackOverflowError with root cause fixes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"AnalyzingMemoryErrorsCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"JVM Memory Areas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 010_004 Topic 16: Analyzing Memory Errors Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic16_analyzing_memory_errors_capstone_note.txt"})}),e.jsx(n,{note:"Congratulations on mastering Module 4 of Segment 10! You now understand the exact difference between Heap OOM, Metaspace OOM, and StackOverflowError! Next up: Garbage Collection Algorithms & Tuning (G1, ZGC)! — Sukanta Hui"})]})}export{O as default};
