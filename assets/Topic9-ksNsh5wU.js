import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const l=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 9: Parallel Garbage Collector - High-Throughput Batch Processing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class ParallelGcDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: PARALLEL GC (-XX:+UseParallelGC) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> CHARACTERISTICS OF PARALLEL GC (Throughput Collector):");\r
        System.out.println("  1. Multi-Threaded Collection : Spawns N worker threads (matching CPU cores) during STW pauses.");\r
        System.out.println("  2. Focus on Throughput       : Sacrifices pause latency to maximize the % of CPU time given to user code.");\r
        System.out.println("  3. Young Gen Algorithm       : Parallel Scavenge (Multi-threaded Copying).");\r
        System.out.println("  4. Old Gen Algorithm         : Parallel Old (Multi-threaded Mark-Compact).\\n");\r
\r
        System.out.println(">>> PARALLEL GC TUNING FLAGS:");\r
        System.out.println("  - Enable Collector           : -XX:+UseParallelGC");\r
        System.out.println("  - Set Worker Threads         : -XX:ParallelGCThreads=8");\r
        System.out.println("  - Target Max Pause Time      : -XX:MaxGCPauseMillis=200");\r
        System.out.println("  - Target Throughput Ratio    : -XX:GCTimeRatio=19 (95% app time / 5% GC time)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 9: Parallel GC (-XX:+UseParallelGC)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS PARALLEL GC:\r
   - Also known as the 'Throughput Collector'.\r
   - Uses multiple CPU cores simultaneously to execute Stop-The-World collections.\r
\r
2. PRODUCTION BEST FOR:\r
   - Non-interactive batch processing (ETL pipelines, machine learning, report generation).\r
   - Systems where total compute completion time matters more than individual request pause times.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why is Parallel GC known as the 'Throughput Collector'?",shortAnswer:"Because it focuses on maximizing the percentage of total CPU time dedicated to executing application code rather than minimizing individual pause times, using all available CPU threads in parallel during pauses.",explanation:"Ideal when overall batch completion speed is prioritized over latency.",hint:"Maximizes the percentage of CPU time devoted to application computation.",level:"Beginner",codeExample:"-XX:GCTimeRatio=19 (95% application compute time)"},{question:"What does the -XX:GCTimeRatio=19 tuning flag configure in Parallel GC?",shortAnswer:"It configures the target throughput ratio: GC time should not exceed 1 / (1 + 19) = 1/20 = 5% of total application execution time.",explanation:"Calculated as 1 / (1 + N).",hint:"Sets target GC time to 1/(1+N) of total running time.",level:"Intermediate",codeExample:"-XX:GCTimeRatio=19 → 5% GC time, 95% app time."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Parallel Garbage Collector: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"-XX:+UseParallelGC"})," Throughput Champion"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Maximizing compute horsepower: multi-threaded parallel scavenge and parallel mark-compact designed for batch processing and heavy data pipelines."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:l,title:"ParallelGcDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Garbage Collection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 010_005 Topic 9: Parallel GC (-XX:+UseParallelGC)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic9_parallel_gc_note.txt"})}),e.jsx(n,{note:"Parallel GC is the Throughput King! It unleashes all CPU cores simultaneously during GC pauses to finish collection as fast as possible! It is ideal for batch jobs, machine learning, and data pipelines! — Sukanta Hui"})]})}export{x as default};
