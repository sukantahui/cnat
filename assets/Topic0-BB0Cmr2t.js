import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 0: The Fundamental Limitations of Platform (OS) Threads: 1:1 Kernel Binding & Memory Walls\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
public class PlatformThreadsLimitationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: PLATFORM (OS) THREAD BOTTLENECKS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 FATAL BOTTLENECKS OF PLATFORM (OS) THREADS (Java 1.0 - 20):");\r
        System.out.println();\r
        System.out.println("  1. 1:1 Kernel Mapping:");\r
        System.out.println("     - Every 'java.lang.Thread' is a thin wrapper around a physical OS Kernel Thread.");\r
        System.out.println("     - Creating, switching, and destroying threads requires expensive OS kernel context switches (~1–2 microseconds per switch).");\r
        System.out.println();\r
        System.out.println("  2. Massive Memory Footprint (~1 MB Call Stack):");\r
        System.out.println("     - The OS allocates a static ~1 MB stack per platform thread, regardless of how simple the task is.");\r
        System.out.println("     - 5,000 threads = ~5 GB of native RAM consumed by idle stacks alone!");\r
        System.out.println();\r
        System.out.println("  3. Scalability Ceiling (~5,000–10,000 Threads Max):");\r
        System.out.println("     - Most Linux/Windows production servers exhaust OS file descriptors and memory beyond 5,000 platform threads.");\r
        System.out.println();\r
        System.out.println(">>> THE REVOLUTION: PROJECT LOOM & VIRTUAL THREADS (Java 21+ LTS)!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 0: Platform Thread Limitations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PLATFORM (OS) THREAD BOTTLENECKS:\r
   - 1:1 mapping to OS kernel threads.\r
   - ~1 MB native stack memory per thread.\r
   - High OS kernel context-switch cost (~2000 cycles).\r
   - Hard limit: ~5,000–10,000 threads per JVM before OOM crash.\r
   - Solution: Java 21 Virtual Threads (Project Loom)!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why do traditional Java Platform (OS) Threads have a strict scalability ceiling of ~5,000 to 10,000 threads per JVM instance?",shortAnswer:"Traditional Java platform threads have a direct 1:1 mapping to underlying OS kernel threads. Each platform thread reserves a fixed ~1 MB native call stack and incurs expensive OS kernel context switching overhead. As thread counts exceed ~5,000 to 10,000, native memory consumption exceeds several gigabytes and the OS scheduler spends more CPU time thrashing thread context switches than executing actual application business logic.",explanation:"Core motivation behind Project Loom in Java 21+.",hint:"1:1 OS kernel mapping, ~1 MB native call stack per thread, and heavy kernel context switching overhead.",level:"Intermediate",codeExample:"// Platform Thread: 1 Java Thread = 1 OS Kernel Thread (~1MB stack)"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Platform Thread Limits"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Limitations of ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Platform (OS) Threads"}),": 1:1 Kernel Mapping & 1MB Stack Costs"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze legacy concurrency bottlenecks: examining 1:1 OS kernel mappings, the ~1 MB native stack memory wall, and the 5,000-thread ceiling in enterprise servers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"PlatformThreadsLimitationsDemo.java",highlightLines:[7,10,13,14,18,19,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Platform Thread Limits FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 008_009 Topic 0: Platform Thread Limitations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic0_platform_thread_limitations_note.txt"})}),e.jsx(n,{note:"For 28 years (from Java 1.0 until Java 21), every thread in Java was a heavy OS kernel thread costing 1 MB of RAM! That meant a server could only handle a few thousand users before running out of memory! Project Loom changes everything! — Sukanta Hui"})]})}export{y as default};
