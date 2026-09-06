import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 1: forEach(Consumer) vs forEachOrdered(Consumer)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
\r
public class ForEachVsForEachOrderedDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: FOREACH VS FOREACHORDERED - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> centerList = List.of(\r
            "1. Barrackpore", "2. Naihati", "3. Shyamnagar", \r
            "4. Ichapur", "5. Titagarh", "6. Kankinara"\r
        );\r
\r
        // 1. Sequential Stream: forEach preserves order naturally\r
        System.out.println("1. Sequential Stream with forEach():");\r
        centerList.stream()\r
            .forEach(c -> System.out.println("   - " + c));\r
\r
        // 2. Parallel Stream with forEach(): OUT OF ORDER (Non-deterministic for speed)\r
        System.out.println("\\n2. Parallel Stream with forEach() (May print in arbitrary order):");\r
        centerList.parallelStream()\r
            .forEach(c -> System.out.println("   [Thread " + Thread.currentThread().getName() + "] " + c));\r
\r
        // 3. Parallel Stream with forEachOrdered(): ENFORCES ENCOUNTER ORDER\r
        System.out.println("\\n3. Parallel Stream with forEachOrdered() (Guaranteed 1 -> 6 order):");\r
        centerList.parallelStream()\r
            .forEachOrdered(c -> System.out.println("   [Thread " + Thread.currentThread().getName() + "] " + c));\r
\r
        System.out.println("\\n>>> TAKEAWAY:");\r
        System.out.println("  - Use forEach() in parallel streams when order is irrelevant (maximum speed).");\r
        System.out.println("  - Use forEachOrdered() when encounter order must be strictly preserved.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 1: forEach vs forEachOrdered\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FOREACH(CONSUMER):\r
   - Performs an action for each element of the stream.\r
   - In sequential streams: Respects encounter order.\r
   - In parallel streams: Intentionally DOES NOT guarantee encounter order, allowing worker\r
     threads in ForkJoinPool to emit elements as soon as ready for maximum throughput.\r
\r
2. FOREACHORDERED(CONSUMER):\r
   - Performs an action for each element of the stream, guaranteeing that elements are processed\r
     in the encounter order of the stream source.\r
   - In parallel streams: Incurs synchronization barrier overhead to ensure strict sequential\r
     dispatching of the consumer action.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why might forEach() print elements out of order when applied to a parallel stream?",shortAnswer:"In parallel streams, the source is partitioned into chunks and processed simultaneously across multiple ForkJoinPool threads. forEach() executes actions as soon as individual threads finish without synchronizing on encounter order.",explanation:"This non-deterministic behavior is an intentional design choice for maximum multi-core performance.",hint:"Worker threads emit results as soon as ready without waiting for earlier elements.",level:"Intermediate",codeExample:"list.parallelStream().forEach(System.out::println); // Arbitrary thread execution order"},{question:"What is the performance drawback of using forEachOrdered() on a parallel stream?",shortAnswer:"forEachOrdered() forces worker threads to coordinate and wait for preceding elements to finish before executing the consumer, creating synchronization bottlenecks that can negate parallel speedups.",explanation:"If strict order is needed at the end of a parallel pipeline, collecting to a list via toList() is often preferred over forEachOrdered.",hint:"Forces thread synchronization and removes concurrency benefits during iteration.",level:"Intermediate",codeExample:"list.parallelStream().forEachOrdered(System.out::println); // Strict order enforced"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"forEach() vs forEachOrdered()"}),": Sequential & Parallel Iteration"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understanding iteration terminal operations: why forEach() does not guarantee encounter order in parallel streams, and when to use forEachOrdered()."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"ForEachVsForEachOrderedDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Terminal Operations & Reductions FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 009_005 Topic 1: forEach vs forEachOrdered",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic1_foreach_vs_foreachordered_note.txt"})}),e.jsx(n,{note:"In sequential streams, forEach() and forEachOrdered() behave identically. But in parallel streams, forEach() executes out of order for maximum CPU throughput, while forEachOrdered() forces threads to wait to preserve source order! — Sukanta Hui"})]})}export{x as default};
