import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 10: The jcmd Utility - Dynamic Diagnostics & Control Commands\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class JcmdUtilityDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: THE JCMD UTILITY - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> TOP 6 PRODUCTION JCMD COMMANDS:");\r
        System.out.println("  1. List Available Commands  : jcmd <pid> help");\r
        System.out.println("  2. Capture Live Thread Dump : jcmd <pid> Thread.print > threads.txt");\r
        System.out.println("  3. Capture Live Heap Dump   : jcmd <pid> GC.heap_dump /var/dumps/heap.hprof");\r
        System.out.println("  4. Inspect Active JVM Flags : jcmd <pid> VM.flags -all");\r
        System.out.println("  5. Inspect Metaspace Details: jcmd <pid> VM.metaspace");\r
        System.out.println("  6. ClassLoader Statistics   : jcmd <pid> VM.classloader_stats\\n");\r
\r
        System.out.println(">>> ADVANTAGE OVER JMAP / JSTACK:");\r
        System.out.println("  - 'jcmd' has virtually ZERO performance overhead when querying flags.");\r
        System.out.println("  - Executed directly inside the running JVM via control thread.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 10: The jcmd Utility\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS JCMD:\r
   - Recommended command-line utility for sending diagnostic command requests to the JVM.\r
   - Introduced in Java 7 to unify all diagnostic interfaces into a single tool.\r
\r
2. COMMAND SYNTAX:\r
   - 'jcmd <pid | main_class> <command> [arguments]'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the jcmd command to capture a live heap dump without restarting the JVM?",shortAnswer:"jcmd <pid> GC.heap_dump <filepath.hprof> (for example: jcmd 8420 GC.heap_dump /tmp/dump.hprof).",explanation:"Generates an instant HPROF snapshot for analysis in MAT or VisualVM.",hint:"jcmd <pid> GC.heap_dump <filename.hprof>",level:"Beginner",codeExample:"jcmd 8420 GC.heap_dump /tmp/heap.hprof"},{question:"How can you view the full list of diagnostic commands supported by a specific running JVM using jcmd?",shortAnswer:"By running 'jcmd <pid> help'.",explanation:"Displays all built-in and plugin diagnostic commands available on that process.",hint:"jcmd <pid> help",level:"Beginner",codeExample:"jcmd 1234 help"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The jcmd Utility: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Dynamic Diagnostics & Control Commands"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The diagnostic powerhouse: executing live heap dumps, thread dumps, Metaspace analysis, and VM flag inspection via jcmd <pid>."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"JcmdUtilityDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Memory Profiling & OOM FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:r,title:"Module 010_006 Topic 10: The jcmd Utility",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic10_jcmd_utility_note.txt"})}),e.jsx(i,{note:"jcmd is the single most powerful diagnostic tool in the JDK! Run jcmd <pid> help to see all commands! You can capture thread dumps, trigger heap dumps, and inspect Metaspace instantly! — Sukanta Hui"})]})}export{g as default};
