import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const n=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 10: Blocking I/O in Parallel Streams - CommonPool Starvation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.List;\r
import java.util.concurrent.ForkJoinPool;\r
\r
public class BlockingIoParallelStreamsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: BLOCKING I/O IN PARALLEL STREAMS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentWebsites = List.of(\r
            "student1.coderaccotax.in", "student2.coderaccotax.in", \r
            "student3.coderaccotax.in", "student4.coderaccotax.in"\r
        );\r
\r
        System.out.println(">>> THE DANGER OF BLOCKING THE GLOBAL COMMONPOOL:");\r
        System.out.println("  - ForkJoinPool.commonPool() has only (CPUs - 1) threads (e.g. 7 threads on an 8-core CPU).");\r
        System.out.println("  - If 7 parallel stream tasks block on slow HTTP calls (e.g. 5 seconds each), the entire pool is SATURATED.");\r
        System.out.println("  - Any other parallel stream or async task in the application will BE COMPLETELY BLOCKED!\\n");\r
\r
        System.out.println(">>> BEST PRACTICE ALTERNATIVES FOR I/O:");\r
        System.out.println("  1. Use Java 21 Virtual Threads: Executors.newVirtualThreadPerTaskExecutor()");\r
        System.out.println("  2. Use dedicated custom ThreadPoolExecutor with sufficient I/O threads.");\r
        System.out.println("  3. Use CompletableFuture with a custom I/O executor.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 10: Blocking I/O & CommonPool Starvation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE COMMONPOOL STARVATION PROBLEM:\r
   - 'ForkJoinPool.commonPool()' is sized for CPU-bound computations (1 thread per core).\r
   - If stream elements execute blocking I/O (REST API calls, JDBC queries, Thread.sleep),\r
     threads are blocked in WAITING/TIMED_WAITING state.\r
   - CPU utilization drops to near 0%, and all other parallel operations in the JVM freeze.\r
\r
2. GOLDEN RULE:\r
   - PARALLEL STREAMS: Pure CPU calculations ONLY (no I/O, no network, no DB).\r
   - BLOCKING I/O: Use Java 21 Virtual Threads or a dedicated fixed/cached thread pool.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why is running blocking I/O (like HTTP calls or JDBC queries) considered a severe anti-pattern in parallel streams?",shortAnswer:"Because parallel streams run on the fixed, CPU-sized ForkJoinPool.commonPool(). Blocking these threads on slow I/O starves the entire pool and halts other parallel streams and async tasks across the entire JVM.",explanation:"CommonPool is sized for CPU compute, not I/O blocking.",hint:"Starves the shared JVM common pool which is sized only for CPU cores.",level:"Advanced",codeExample:"// Severe Anti-Pattern:\\nurls.parallelStream().map(url -> httpClient.send(url)).toList();"},{question:"What is the recommended modern Java architecture for executing concurrent I/O requests instead of parallel streams?",shortAnswer:"Use Java 21 Virtual Threads via Executors.newVirtualThreadPerTaskExecutor() or CompletableFuture with a dedicated unbounded/cached I/O ThreadPoolExecutor.",explanation:"Virtual threads unmount on blocking I/O, allowing millions of concurrent requests without thread starvation.",hint:"Java 21 Virtual Threads (Project Loom) or dedicated I/O ExecutorService.",level:"Intermediate",codeExample:"try (var executor = Executors.newVirtualThreadPerTaskExecutor()) { ... }"}];function P(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Blocking I/O in Parallel Streams: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"CommonPool Starvation & Saturation"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The danger of blocking operations: why network calls, DB queries, or sleep() inside parallel streams freeze JVM-wide async operations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:n,title:"BlockingIoParallelStreamsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Parallel Streams FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 009_007 Topic 10: Blocking I/O in Parallel Streams",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic10_blocking_io_parallel_streams_note.txt"})}),e.jsx(o,{note:"Never put HTTP requests or database calls inside a parallel stream! ForkJoinPool.commonPool() is designed for CPU-bound math. If you block its threads, the whole JVM will freeze! Use Virtual Threads or dedicated executors for I/O! — Sukanta Hui"})]})}export{P as default};
