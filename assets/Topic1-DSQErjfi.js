import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 1: Common Causes of Memory Leaks - The 6 Classic Antipatterns\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class CommonCausesMemoryLeaksDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: COMMON CAUSES OF MEMORY LEAKS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 6 CLASSIC JAVA MEMORY LEAK ANTIPATTERNS:");\r
        System.out.println("  1. STATIC CACHES           : Static Maps/Lists accumulating data without TTL or eviction (LRU).");\r
        System.out.println("  2. UNREGISTERED LISTENERS  : Adding event listeners to long-lived broadcasters without removing them.");\r
        System.out.println("  3. BROKEN HASH KEYS        : Mutating HashMap/HashSet key fields after insertion (lost entries).");\r
        System.out.println("  4. NON-STATIC INNER CLASSES: Anonymous inner classes holding hidden references to outer instances.");\r
        System.out.println("  5. THREADLOCAL IN POOLS    : Failing to call ThreadLocal.remove() on pooled worker threads.");\r
        System.out.println("  6. UNCLOSED NATIVE HANDLES : Leaking DirectByteBuffers, file descriptors, and JDBC connections.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 1: Common Causes of Memory Leaks\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TAXONOMY OF JAVA LEAKS:\r
   - Heap Leaks       : Managed Java objects held by unintended GC Root chains.\r
   - Native/Off-Heap  : 'ByteBuffer.allocateDirect()', JNI malloc allocations, unclosed file descriptors.\r
   - Metaspace Leaks  : ClassLoader leakage from hot code reloading and dynamic proxy generation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the difference between a Heap Memory Leak and an Off-Heap/Native Memory Leak?",shortAnswer:"A Heap Memory Leak involves standard Java objects on the JVM Heap kept alive by unintended references, while an Off-Heap/Native Leak involves native memory allocated outside the heap (e.g. DirectByteBuffers, JNI C++ allocations) not being properly freed.",explanation:"Off-Heap leaks do not trigger Heap OOM and must be tracked via OS metrics.",hint:"Heap leak is Java objects on heap; off-heap leak is direct native OS memory.",level:"Intermediate",codeExample:"ByteBuffer.allocateDirect(1024) → Lives in native off-heap memory."},{question:"Why does an unclosed JDBC ResultSet or Connection cause a memory leak?",shortAnswer:"Because database drivers allocate internal client buffers and native socket handles that remain pinned in memory until explicitly closed or finalized.",explanation:"Always use try-with-resources to ensure automatic closure.",hint:"Retains driver memory buffers and network socket handles.",level:"Beginner",codeExample:"try (Connection conn = ...; Statement st = ...) { ... }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Common Causes of Memory Leaks: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"The 6 Classic Antipatterns"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Production forensic survey: static caches, unremoved listeners, broken hash keys, non-static inner classes, thread locals, and unclosed native handles."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:o,title:"CommonCausesMemoryLeaksDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Memory Profiling & OOM FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:r,title:"Module 010_006 Topic 1: Common Causes of Memory Leaks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic1_common_causes_memory_leaks_note.txt"})}),e.jsx(s,{note:"The 6 deadly sins of Java memory leaks: 1) Unbounded static caches, 2) Lingering listeners, 3) Broken equals/hashCode keys, 4) Hidden inner class references, 5) ThreadLocal leaks in thread pools, and 6) Unclosed native resources! — Sukanta Hui"})]})}export{y as default};
