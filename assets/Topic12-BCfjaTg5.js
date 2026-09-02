import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 12: Visual Profiling with VisualVM & JConsole\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class VisualProfilingVisualvmJconsoleDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: VISUAL PROFILING (VISUALVM & JCONSOLE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> KEY VISUALVM TABS & CAPABILITIES:");\r
        System.out.println("  1. OVERVIEW TAB : JVM Arguments, System Properties, Java Version, Main Class.");\r
        System.out.println("  2. MONITOR TAB  : Live 4-quadrant charts (CPU %, Heap & Metaspace MB, Loaded Classes, Live Threads).");\r
        System.out.println("  3. THREADS TAB  : Real-time thread state timeline (Running, Sleeping, Waiting, Monitor Blocked).");\r
        System.out.println("  4. SAMPLER TAB  : Low-overhead CPU & Memory sampling (Top methods & Top instantiated classes).");\r
        System.out.println("  5. PROFILER TAB : Exact byte-level method execution timing and allocation profiling.\\n");\r
\r
        System.out.println(">>> CONNECTING TO REMOTE PRODUCTION SERVERS (JMX Flags):");\r
        System.out.println("  -Dcom.sun.management.jmxremote");\r
        System.out.println("  -Dcom.sun.management.jmxremote.port=9010");\r
        System.out.println("  -Dcom.sun.management.jmxremote.authenticate=false");\r
        System.out.println("  -Dcom.sun.management.jmxremote.ssl=false");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 12: Visual Profiling (VisualVM & JConsole)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS VISUALVM:\r
   - Visual all-in-one profiling tool for Java applications.\r
   - Included historically with JDK (now standalone at 'visualvm.github.io').\r
   - Integrates JConsole MBeans, JFR snapshots, and HPROF heap dump viewing.\r
\r
2. SAMPLING VS PROFILING:\r
   - Sampling (Recommended for Prod/Staging) : Periodically polls thread stacks (low overhead ~2-5%).\r
   - Instrumentation Profiling (Dev only)    : Modifies bytecode to measure exact execution times (high overhead).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the difference between CPU Sampling and CPU Profiling in VisualVM?",shortAnswer:"CPU Sampling takes periodic thread stack snapshots with minimal performance overhead (~2-5%), making it safe for production diagnosis. CPU Profiling instruments bytecode at every method entry and exit, providing exact nanosecond timings but incurring severe performance slowdown (up to 10x).",explanation:"Never run full instrumentation profiling on live production servers.",hint:"Sampling is low-overhead periodic polling; Profiling instruments bytecode with high overhead.",level:"Intermediate",codeExample:"Sampling: Safe for staging/prod; Instrumentation: Dev only."},{question:"What protocol allows VisualVM and JConsole to monitor remote JVM instances running on cloud servers?",shortAnswer:"Java Management Extensions (JMX) protocol, configured via system properties such as -Dcom.sun.management.jmxremote.port.",explanation:"Standard remote management and telemetry protocol in Java.",hint:"Java Management Extensions (JMX).",level:"Beginner",codeExample:"-Dcom.sun.management.jmxremote.port=9010"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Visual Profiling: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"VisualVM & JConsole Deep Dive"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"GUI telemetry: live monitoring of Heap spaces, Metaspace usage, active thread states, CPU telemetry, and MBean inspection."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"VisualProfilingVisualvmJconsoleDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Memory Profiling & OOM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 010_006 Topic 12: Visual Profiling (VisualVM & JConsole)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic12_visual_profiling_visualvm_jconsole_note.txt"})}),e.jsx(o,{note:"VisualVM is a lifesaver for Java developers! You can connect to any local or remote JVM to see live heap graphs, take heap dumps with one click, and inspect thread locks! — Sukanta Hui"})]})}export{h as default};
