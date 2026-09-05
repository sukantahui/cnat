import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 13: Configuring Automatic Heap Dump on Crash (-XX:+HeapDumpOnOutOfMemoryError)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class HeapDumpOnOomDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: AUTOMATIC HEAP DUMP ON CRASH - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE MANDATORY PRODUCTION POST-MORTEM FLAGS:");\r
        System.out.println("  1. Enable Heap Dump on OOM : -XX:+HeapDumpOnOutOfMemoryError");\r
        System.out.println("  2. Specify Target File Path: -XX:HeapDumpPath=/var/log/dumps/app_oom.hprof");\r
        System.out.println("  3. Exit Container on OOM   : -XX:+ExitOnOutOfMemoryError (triggers Kubernetes pod restart)\\n");\r
\r
        System.out.println(">>> WHAT AN HPROF FILE CONTAINS:");\r
        System.out.println("  - Exact binary snapshot of EVERY object instance on the heap at the moment of failure.");\r
        System.out.println("  - Complete reference graph connecting GC Roots to leaked objects.");\r
        System.out.println("  - Field values, string contents, and array payloads.");\r
        System.out.println("  - Thread stack traces active when OOM occurred.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 13: Heap Dump on OutOfMemoryError\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS AN HPROF HEAP DUMP:\r
   - A binary snapshot format storing all objects, classes, and references in the JVM heap.\r
   - Standard format supported by Eclipse MAT, VisualVM, YourKit, and JProfiler.\r
\r
2. PRODUCTION BEST PRACTICE:\r
   - Always mount a persistent disk volume to '/var/log/dumps/' in Docker/Kubernetes\r
     so the '.hprof' file survives container pod recreation!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the primary benefit of the -XX:+HeapDumpOnOutOfMemoryError JVM flag?",shortAnswer:"It automatically saves a full binary snapshot (.hprof) of the entire Java heap at the exact instant an OutOfMemoryError occurs, enabling developers to perform post-mortem root cause analysis without needing to reproduce the crash.",explanation:"Standard enterprise production best practice.",hint:"Captures a full heap snapshot at the moment of OOM crash.",level:"Beginner",codeExample:"-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/dumps/oom.hprof"},{question:"What precaution must be taken when configuring -XX:HeapDumpPath in containerized Docker/Kubernetes environments?",shortAnswer:"Ensure that the destination path is mapped to an external persistent volume or mounted host directory with sufficient disk space equal to or greater than the maximum heap size (-Xmx).",explanation:"Otherwise the dump will be lost when the container is terminated.",hint:"Map the path to a persistent volume with sufficient free disk space.",level:"Intermediate",codeExample:"Ensure disk space >= -Xmx size."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Automatic Heap Dump on Crash: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"-XX:+HeapDumpOnOutOfMemoryError"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Post-mortem disaster insurance: configuring automatic HPROF snapshots upon OutOfMemoryError for offline forensic root cause analysis."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"HeapDumpOnOomDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Memory Profiling & OOM FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 010_006 Topic 13: Heap Dump on OutOfMemoryError",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic13_heap_dump_on_oom_note.txt"})}),e.jsx(a,{note:"If a production JVM crashes at 3 AM with an OutOfMemoryError, you cannot debug a dead process! But with -XX:+HeapDumpOnOutOfMemoryError, the JVM leaves a full .hprof snapshot on disk! You can open it in MAT and find the exact bug in 5 minutes! — Sukanta Hui"})]})}export{x as default};
