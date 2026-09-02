import{j as o}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const n=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 4: Configuring Common Pool Parallelism & Custom ForkJoinPool Execution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.List;\r
import java.util.concurrent.ExecutionException;\r
import java.util.concurrent.ForkJoinPool;\r
import java.util.stream.IntStream;\r
\r
public class ConfiguringPoolParallelismDemo {\r
\r
    public static void main(String[] args) throws ExecutionException, InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: PARALLELISM CONFIGURATION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. System Property for JVM-wide CommonPool Parallelism:\r
        // System.setProperty("java.util.concurrent.ForkJoinPool.common.parallelism", "8");\r
        // Must be set BEFORE ForkJoinPool.commonPool() is initialized.\r
        System.out.println("1. Current CommonPool Parallelism: " + ForkJoinPool.commonPool().getParallelism());\r
\r
        // 2. Running a Parallel Stream inside an Isolated Custom ForkJoinPool\r
        // This isolates the parallel stream so it does NOT interfere with the global commonPool!\r
        int customThreads = 3;\r
        ForkJoinPool customPool = new ForkJoinPool(customThreads);\r
\r
        System.out.println("\\n2. Submitting Parallel Stream to Isolated Custom ForkJoinPool (" + customThreads + " threads):");\r
        List<String> studentList = List.of("Swadeep", "Tuhina", "Abhronila", "Debangshu", "Priya", "Anish");\r
\r
        customPool.submit(() -> {\r
            studentList.parallelStream().forEach(name -> {\r
                System.out.println("   [Thread: " + Thread.currentThread().getName() + "] Processing: " + name);\r
            });\r
        }).get(); // Block until complete\r
\r
        customPool.shutdown();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 4: Configuring Pool Parallelism\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JVM SYSTEM PROPERTY CONFIGURATION:\r
   - Command-line flag: '-Djava.util.concurrent.ForkJoinPool.common.parallelism=8'.\r
   - Changes the parallelism level across all components sharing the common pool.\r
   - Must be configured at JVM startup.\r
\r
2. RUNNING IN A CUSTOM FORKJOINPOOL:\r
   - Pattern:\r
     'ForkJoinPool customPool = new ForkJoinPool(4);'\r
     'customPool.submit(() → list.parallelStream().forEach(...)).get();'\r
   - Isolates CPU-heavy or sensitive batch pipelines from starving global application threads.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How can you run a parallel stream in an isolated custom ForkJoinPool instead of the shared commonPool?",shortAnswer:"By wrapping the stream execution inside a Callable or Runnable submitted to the custom ForkJoinPool: customPool.submit(() → list.parallelStream().collect(...)).get().",explanation:"When a parallel stream is initiated from a thread belonging to a ForkJoinPool, it uses that pool rather than the common pool.",hint:"Submit the stream inside customPool.submit(() → stream...).get().",level:"Advanced",codeExample:"new ForkJoinPool(4).submit(() → list.parallelStream().forEach(x → ...)).get();"},{question:"Can you change the parallelism level of ForkJoinPool.commonPool() at runtime after it has started?",shortAnswer:"No. The common pool's size is determined and locked during static initialization of the ForkJoinPool class. Setting System.setProperty after initialization has no effect.",explanation:"Must be passed as a JVM startup parameter -Djava.util.concurrent.ForkJoinPool.common.parallelism=N.",hint:"No, must be set via JVM startup argument before static initialization.",level:"Intermediate",codeExample:"-Djava.util.concurrent.ForkJoinPool.common.parallelism=4"}];function x(){return o.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[o.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 4"}),o.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),o.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Configuring ",o.jsx("code",{className:"text-emerald-400 font-mono",children:"Common Pool Parallelism"})," & Custom ForkJoinPool Execution"]}),o.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Managing global parallelism settings: JVM system properties and executing parallel streams inside isolated custom ForkJoinPools."})]}),o.jsxs("section",{className:"space-y-4",children:[o.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[o.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),o.jsx(e,{fileModule:n,title:"ConfiguringPoolParallelismDemo.java",highlightLines:[18,25,34,43]})]}),o.jsx("section",{className:"space-y-4",children:o.jsx(t,{title:"Parallel Streams FAQs",questions:i})}),o.jsx("section",{className:"space-y-4",children:o.jsx(r,{content:l,title:"Module 009_007 Topic 4: Configuring Pool Parallelism",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic4_configuring_pool_parallelism_note.txt"})}),o.jsx(a,{note:"To prevent parallel streams from hogging the global common pool, you can submit your parallel stream inside a custom ForkJoinPool(4).submit(() → stream.parallel()...).get()! — Sukanta Hui"})]})}export{x as default};
