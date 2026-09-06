import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 17: Reading & Analyzing GC Logs - Forensic Diagnostic Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class ReadingAnalyzingGcLogsCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 17: READING & ANALYZING GC LOGS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. ANATOMY OF A MODERN G1 GC LOG ENTRY:");\r
        System.out.println("  [2026-08-27T10:15:30.123+0530][0.456s][info][gc,start    ] GC(12) Pause Young (Normal) (G1 Evacuation Pause)");\r
        System.out.println("  [2026-08-27T10:15:30.125+0530][0.458s][info][gc,heap     ] GC(12) Eden regions: 25->0(28)");\r
        System.out.println("  [2026-08-27T10:15:30.125+0530][0.458s][info][gc,heap     ] GC(12) Survivor regions: 3->4(4)");\r
        System.out.println("  [2026-08-27T10:15:30.125+0530][0.458s][info][gc,heap     ] GC(12) Old regions: 15->16");\r
        System.out.println("  [2026-08-27T10:15:30.126+0530][0.459s][info][gc          ] GC(12) Pause Young (Normal) (G1 Evacuation Pause) 124M->48M(512M) 2.845ms\\n");\r
\r
        System.out.println(">>> 2. HOW TO DECODE THE CRITICAL METRICS:");\r
        System.out.println("  - GC Id          : GC(12) -> 12th garbage collection event since JVM boot.");\r
        System.out.println("  - GC Cause       : G1 Evacuation Pause (Normal Young GC).");\r
        System.out.println("  - Eden Change    : 25->0 -> 25 Eden regions completely reclaimed!");\r
        System.out.println("  - Heap Reclaimed : 124M->48M(512M) -> Heap dropped from 124MB to 48MB (76MB garbage reclaimed!).");\r
        System.out.println("  - Pause Duration : 2.845ms -> Total Stop-The-World pause time was only 2.845 milliseconds!\\n");\r
\r
        System.out.println(">>> 3. FORENSIC HEALTH INDICATORS:");\r
        System.out.println("  - HEALTHY   : Regular short pauses (<10ms), Eden drops to 0, Old Gen stays stable.");\r
        System.out.println("  - LEAK ALERT: Heap occupancy after GC steadily climbs higher over time (sawtooth pattern fails to drop!).");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 010_005 COMPLETE: GARBAGE COLLECTION & TUNING FULLY MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 17: Reading & Analyzing GC Logs Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CRITICAL GC LOG ANALYSIS FORMULAS:\r
   - Throughput %        : (Total App Time - Total GC Pause Time) / Total App Time * 100\r
   - Allocation Rate     : MB allocated in Eden between GC events / Time delta\r
   - Promotion Rate      : MB moved to Old Generation per second\r
\r
2. VISUALIZATION & ANALYSIS TOOLS:\r
   - GCEasy.io (Universal online GC log analyzer).\r
   - GCViewer (Open-source desktop offline log analyzer).\r
   - JDK Mission Control (JMC) & Java Flight Recorder (JFR).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"In the GC log line 'GC(12) 124M->48M(512M) 2.845ms', what does each metric represent?",shortAnswer:"124M was the heap occupancy before GC, 48M was the heap occupancy after GC, 512M was the total committed heap size, and 2.845ms was the total Stop-The-World pause duration.",explanation:"Standard format of JVM GC completion summaries.",hint:"Pre-GC size → Post-GC size (Committed size) Pause duration.",level:"Intermediate",codeExample:"124M (before) → 48M (after) (512M committed) 2.845ms pause"},{question:"How do you detect a slow memory leak from a series of GC log entries?",shortAnswer:"By observing the heap occupancy immediately after each Full or Major GC. If the baseline minimum heap memory after collection steadily climbs upward over time in a stair-step pattern rather than returning to a steady floor, a memory leak exists.",explanation:"Indicates objects are accumulating and cannot be collected.",hint:"The baseline memory floor after GC steadily increases over time.",level:"Advanced",codeExample:"Post-GC floor: 100M → 200M → 400M → 800M → OOM"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Reading & Analyzing GC Logs: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Pauses, Allocation Rates & Promotions"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Production forensic analysis: interpreting GC log lines, calculating throughput percentages, diagnosing memory leaks, and GCViewer/GCEasy integration."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"ReadingAnalyzingGcLogsCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Garbage Collection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 010_005 Topic 17: Reading & Analyzing GC Logs Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic17_reading_analyzing_gc_logs_capstone_note.txt"})}),e.jsx(o,{note:"Congratulations on mastering Module 5 of Segment 10! You now know how to read raw GC logs, calculate pause durations, detect promotion bottlenecks, and tune JVM collectors! Next up: JVM Profiling, Heap Dumps & OOM Diagnosis! — Sukanta Hui"})]})}export{h as default};
