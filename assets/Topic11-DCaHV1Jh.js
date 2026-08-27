import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 11: The jstat Utility - Real-Time Live GC Statistics Monitoring\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class JstatUtilityGcStatsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: THE JSTAT UTILITY (-gcutil) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. RUNNING JSTAT MONITORING IN TERMINAL:");\r
        System.out.println("  Command: jstat -gcutil <pid> 1000 5 (Polls every 1000ms for 5 iterations)\\n");\r
\r
        System.out.println(">>> 2. DECODING THE JSTAT OUTPUT COLUMNS:");\r
        System.out.println("  S0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT");\r
        System.out.println("  0.00  95.42  45.10  28.30  94.20  88.10    14    0.045     0    0.000   0.045\\n");\r
\r
        System.out.println(">>> COLUMN DEFINITIONS:");\r
        System.out.println("  - S0 / S1 : Survivor 0 / Survivor 1 space utilization percentage.");\r
        System.out.println("  - E       : Eden space utilization percentage (sawtooth cycle: 0 -> 100%).");\r
        System.out.println("  - O       : Old / Tenured generation utilization percentage.");\r
        System.out.println("  - M       : Metaspace utilization percentage.");\r
        System.out.println("  - YGC     : Young Generation GC event count (14 Minor GCs).");\r
        System.out.println("  - YGCT    : Young Generation GC total time (0.045 seconds total).");\r
        System.out.println("  - FGC     : Full GC event count (0 Full GCs = Healthy!).");\r
        System.out.println("  - GCT     : Total Garbage Collection time.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 11: The jstat Utility (GC Stats)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS JSTAT:\r
   - Java Virtual Machine Statistics Monitoring Tool.\r
   - Attaches with virtually zero performance overhead, making it safe for production monitoring.\r
\r
2. HEALTH CHECK DIAGNOSIS VIA JSTAT:\r
   - Healthy App    : Eden (E) cycles 0% &rarr; 100% &rarr; 0%, Old (O) stays low, FGC is near zero.\r
   - Memory Leak    : Old (O) climbs steadily to 99%–100% and stays stuck despite increasing FGC counts!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What does an Old Generation occupancy (O) hovering near 99% with rapidly climbing Full GC counts (FGC) in jstat indicate?",shortAnswer:"It is the definitive symptom of a severe Memory Leak or critically undersized Heap. The JVM is thrashing in continuous Full GC cycles attempting to free memory, consuming 100% CPU and heading toward an OutOfMemoryError.",explanation:"Classic GC thrashing pattern.",hint:"Indicates a severe memory leak and imminent OutOfMemoryError.",level:"Intermediate",codeExample:"jstat: O=99.8%, FGC=45, FGCT=120.5s -> Memory Leak Alert!"},{question:"What does the command 'jstat -gcutil 4820 1000 10' do?",shortAnswer:"It samples and displays garbage collection memory pool percentages for PID 4820 every 1000 milliseconds (1 second) for a total of 10 samples before exiting.",explanation:"Standard jstat interval and count syntax.",hint:"Polls PID 4820 every 1000ms for 10 iterations.",level:"Beginner",codeExample:"jstat -gcutil <pid> <interval_ms> <count>"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 11"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The jstat Utility: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Real-Time Live GC Statistics Monitoring"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Watching memory in real time: decoding jstat -gcutil percentage columns (S0, S1, E, O, M, CCS, YGC, FGC) to detect memory leaks and GC thrashing."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"JstatUtilityGcStatsDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Memory Profiling & OOM FAQs",questions:s})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:o,title:"Module 010_006 Topic 11: The jstat Utility (GC Stats)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic11_jstat_utility_gc_stats_note.txt"})}),t.jsx(r,{note:"Run jstat -gcutil <pid> 1000 in your terminal! Every second, you will see the exact percentage of Eden (E), Old Gen (O), and Metaspace (M) in real-time! If O stays at 99%, you have a memory leak! — Sukanta Hui"})]})}export{x as default};
