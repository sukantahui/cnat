import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 14: Heap Sizing Flags - -Xms, -Xmx & -Xmn Sizing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class HeapSizingFlagsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: HEAP SIZING FLAGS (-Xms, -Xmx, -Xmn) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Runtime rt = Runtime.getRuntime();\r
        long totalMB = rt.totalMemory() / (1024 * 1024);\r
        long maxMB = rt.maxMemory() / (1024 * 1024);\r
        long freeMB = rt.freeMemory() / (1024 * 1024);\r
\r
        System.out.println(">>> 1. CURRENT JVM HEAP METRICS:");\r
        System.out.println("  - Total Heap Allocated (-Xms) : " + totalMB + " MB");\r
        System.out.println("  - Maximum Heap Ceiling (-Xmx) : " + maxMB + " MB");\r
        System.out.println("  - Free Memory in Heap         : " + freeMB + " MB\\n");\r
\r
        System.out.println(">>> 2. HEAP SIZING COMMAND LINE CHEATSHEET:");\r
        System.out.println("  - Fixed 4GB Heap       : java -Xms4g -Xmx4g -jar app.jar");\r
        System.out.println("  - Fixed 2GB Young Gen  : java -Xms4g -Xmx4g -Xmn2g -jar app.jar");\r
        System.out.println("  - Container Sizing (8GB RAM host): Allocate 75% to JVM Heap (-Xms6g -Xmx6g) leaving 25% for Metaspace/OS.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 14: Heap Sizing Flags\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 3 CORE HEAP SIZING FLAGS:\r
   - '-Xms<size>' : Initial heap size at JVM startup.\r
   - '-Xmx<size>' : Maximum allowable heap size.\r
   - '-Xmn<size>' : Sets the size of the Young Generation directly (Eden + Survivors).\r
\r
2. CONTAINER SIZING RULE OF THUMB:\r
   - In Docker/Kubernetes, set Max Heap to 70-80% of the container memory limit.\r
   - Example for 4GB Pod Limit: '-XX:MaxRAMPercentage=75.0' or '-Xmx3g'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What does the -Xmn JVM flag configure?",shortAnswer:"It sets the initial and maximum size of the Young Generation directly (Eden + S0 + S1). Setting -Xmn overrides the default NewRatio calculation.",explanation:"Useful for tuning high-allocation throughput microservices.",hint:"Sets the size of the Young Generation directly.",level:"Intermediate",codeExample:"java -Xms4g -Xmx4g -Xmn2g -jar app.jar"},{question:"What modern JVM flag automatically sizes heap limits based on Docker container cgroup memory limits?",shortAnswer:"-XX:MaxRAMPercentage=<percent> (e.g. -XX:MaxRAMPercentage=75.0), introduced in Java 10+ to make JVMs container-aware automatically.",explanation:"Eliminates hardcoded -Xmx values across different container sizes.",hint:"-XX:MaxRAMPercentage",level:"Intermediate",codeExample:"java -XX:MaxRAMPercentage=75.0 -jar app.jar"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Heap Sizing Flags: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"-Xms, -Xmx & -Xmn"})," Optimization"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Capacity planning: sizing initial and maximum heap bounds, fixing Young Generation with -Xmn, and calculating container limits."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"HeapSizingFlagsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Garbage Collection FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 010_005 Topic 14: Heap Sizing Flags (-Xms, -Xmx)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic14_heap_sizing_flags_note.txt"})}),e.jsx(r,{note:"When configuring memory for a 4GB Docker container, never set -Xmx4g! Leave 1GB for the OS, Metaspace, and Thread Stacks: set -Xms3g -Xmx3g! — Sukanta Hui"})]})}export{h as default};
