import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as o}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const n=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 2: ForkJoinPool.commonPool() Architecture & Thread Count\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.concurrent.ForkJoinPool;\r
import java.util.stream.IntStream;\r
\r
public class ForkJoinPoolCommonEngineDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: FORKJOINPOOL.COMMONPOOL() - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Inspecting the JVM Hardware & Common Pool Characteristics\r
        int availableProcessors = Runtime.getRuntime().availableProcessors();\r
        ForkJoinPool commonPool = ForkJoinPool.commonPool();\r
\r
        System.out.println(">>> JVM HARDWARE & FORKJOINPOOL SPECS:");\r
        System.out.println("  - Available Hardware CPU Cores : " + availableProcessors);\r
        System.out.println("  - CommonPool Parallelism Level : " + commonPool.getParallelism());\r
        System.out.println("  - CommonPool Pool Size         : " + commonPool.getPoolSize());\r
        System.out.println("  - Formula                      : Parallelism = (Hardware Cores - 1)");\r
        System.out.println("  - Note: The submitting thread (main) also participates in work!\\n");\r
\r
        // 2. Parallel Stream in Action across CommonPool Worker Threads\r
        System.out.println(">>> 2. Worker Threads participating in IntStream processing:");\r
        IntStream.rangeClosed(1, 10).parallel().forEach(n -> {\r
            System.out.println("   [Task " + n + "] Handled by: " + Thread.currentThread().getName());\r
        });\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 2: ForkJoinPool.commonPool() Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMMON POOL SIZING FORMULA:\r
   - Default Parallelism = 'Runtime.getRuntime().availableProcessors() - 1'.\r
   - Why minus 1? Because the calling/submitting thread (e.g. main) also participates\r
     in task execution, bringing the total active threads equal to available cores.\r
\r
2. GLOBAL SHARED RESOURCE CHARACTERISTIC:\r
   - 'ForkJoinPool.commonPool()' is a single shared JVM-wide singleton.\r
   - Used simultaneously by:\r
     * All 'collection.parallelStream()' calls.\r
     * All 'CompletableFuture.supplyAsync()' calls without custom executor.\r
   - Golden Rule: Do NOT block threads in the common pool with database calls or HTTP requests.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is the default parallelism level of ForkJoinPool.commonPool() equal to (availableProcessors - 1)?",shortAnswer:"Because the thread that initiates the parallel stream operation (the caller thread, e.g. main) also actively executes work tasks alongside the worker threads, utilizing all CPU cores fully without oversubscribing.",explanation:"1 caller thread + (N - 1) worker threads = N threads for N cores.",hint:"The calling thread participates in executing stream tasks.",level:"Intermediate",codeExample:"ForkJoinPool.commonPool().getParallelism() === Runtime.getRuntime().availableProcessors() - 1"},{question:"What is the primary danger of running blocking network I/O inside a parallel stream?",shortAnswer:"Blocking I/O will cause all worker threads in the shared ForkJoinPool.commonPool() to freeze waiting for responses, starving all other parallel streams and async tasks across the entire JVM application.",explanation:"Use dedicated ThreadPoolExecutors or Java 21 Virtual Threads for blocking I/O.",hint:"Starves the shared JVM-wide common pool.",level:"Advanced",codeExample:"// BAD: Blocks common pool threads!\\nlist.parallelStream().map(url → httpGet(url));"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Underlying Engine: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ForkJoinPool.commonPool()"})," Architecture"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understanding the execution runtime: worker threads, core sizing formula (CPU cores - 1), and the shared global resource model."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(o,{fileModule:n,title:"ForkJoinPoolCommonEngineDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Parallel Streams FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 009_007 Topic 2: ForkJoinPool.commonPool() Engine",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic2_forkjoinpool_commonpool_engine_note.txt"})}),e.jsx(t,{note:"Because ForkJoinPool.commonPool() is shared across your ENTIRE JVM application, never run blocking I/O or sleep calls inside a parallel stream; doing so starves other parts of your server! — Sukanta Hui"})]})}export{x as default};
