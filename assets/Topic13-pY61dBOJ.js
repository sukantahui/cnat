import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 13: Essential JVM Tuning Flags - Production Playbook\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class EssentialJvmTuningFlagsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: ESSENTIAL JVM TUNING FLAGS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> PRODUCTION RECOMMENDED JVM TUNING FLAGS CHEATSHEET:");\r
        System.out.println("  1. HEAP SIZING:");\r
        System.out.println("     -Xms4g -Xmx4g                           : Lock initial and max heap to 4GB (avoids resizing).");\r
        System.out.println("     -XX:+AlwaysPreTouch                     : Pre-zeros memory pages at startup (eliminates runtime page faults).\\n");\r
\r
        System.out.println("  2. METASPACE SIZING (DOCKER / KUBERNETES):");\r
        System.out.println("     -XX:MetaspaceSize=128m                  : Initial high-watermark before GC.");\r
        System.out.println("     -XX:MaxMetaspaceSize=256m               : Prevents container OS memory starvation.\\n");\r
\r
        System.out.println("  3. CRASH & DUMP DIAGNOSTICS:");\r
        System.out.println("     -XX:+HeapDumpOnOutOfMemoryError         : Auto-captures heap snapshot on OOM.");\r
        System.out.println("     -XX:HeapDumpPath=/var/logs/app.hprof    : Destination path for heap dump.");\r
        System.out.println("     -XX:+ExitOnOutOfMemoryError             : Fast-fails unhealthy container for K8s pod restart.\\n");\r
\r
        System.out.println("  4. MEMORY OPTIMIZATION:");\r
        System.out.println("     -XX:+UseStringDeduplication             : Automatically merges duplicate String byte arrays in G1/ZGC!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 13: Essential JVM Tuning Flags\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE PRODUCTION FLAG MATRIX:\r
   - '-Xms == -Xmx'                     : Prevents dynamic heap resizing overhead.\r
   - '-XX:+AlwaysPreTouch'              : Allocates all physical OS RAM at JVM boot, avoiding page-fault latency spikes during production requests.\r
   - '-XX:+HeapDumpOnOutOfMemoryError'  : Saves heap dump on OOM for root cause diagnosis.\r
   - '-XX:+ExitOnOutOfMemoryError'      : Crashes immediately on OOM so container orchestrators (Kubernetes) can restart the pod cleanly.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the benefit of enabling -XX:+AlwaysPreTouch in latency-sensitive Java applications?",shortAnswer:"It forces the operating system to pre-allocate and touch all physical RAM pages for the entire heap during JVM startup, eliminating OS page-fault latency spikes when memory is first accessed during live production user traffic.",explanation:"Trades slightly slower startup time for consistent runtime latency.",hint:"Eliminates OS page-fault latency during production traffic by pre-allocating RAM at boot.",level:"Advanced",codeExample:"-Xms8g -Xmx8g -XX:+AlwaysPreTouch"},{question:"Why should containerized Java applications in Kubernetes use -XX:+ExitOnOutOfMemoryError?",shortAnswer:"Because an application that encounters an OutOfMemoryError is in an indeterminate, corrupted state. Exiting immediately allows Kubernetes liveness probes to detect pod death and automatically restart a fresh, healthy replica.",explanation:"Implements the 'crash-only software' resilience philosophy.",hint:"Allows Kubernetes to immediately restart a fresh replica when an OOM occurs.",level:"Intermediate",codeExample:"-XX:+ExitOnOutOfMemoryError"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Essential JVM Tuning Flags: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Heap, Thread Stack & Ergonomics"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Production tuning playbook: mastering -Xms, -Xmx, -Xmn, -Xss, -XX:+UseStringDeduplication, and JVM Ergonomics defaults."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"EssentialJvmTuningFlagsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Garbage Collection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 010_005 Topic 13: Essential JVM Tuning Flags",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic13_essential_jvm_tuning_flags_note.txt"})}),e.jsx(r,{note:"Never run production microservices with default JVM flags! Set -Xms == -Xmx to avoid heap resizing pauses, tune -Xss to 1m, and enable String Deduplication on G1 to reclaim 15% RAM! — Sukanta Hui"})]})}export{x as default};
