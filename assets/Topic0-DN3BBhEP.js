import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as l}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 0: The collect(Collector) Operation - Mutable Reductions\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.stream.Collectors;\r
\r
public class CollectCollectorOperationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: COLLECT(COLLECTOR) MUTABLE REDUCTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentRoster = List.of(\r
            "Swadeep Paul", "Tuhina Das", "Abhronila Das", "Debangshu Mukherjee"\r
        );\r
\r
        // 1. Mutable Reduction using collect(Collectors.toList())\r
        System.out.println(">>> 1. Standard collect(Collectors.toList()):");\r
        List<String> upperNames = studentRoster.stream()\r
            .map(String::toUpperCase)\r
            .collect(Collectors.toList());\r
        System.out.println("   Collected List: " + upperNames);\r
\r
        // 2. Under the Hood: 3-Argument collect(Supplier, BiConsumer, BiConsumer)\r
        System.out.println("\\n>>> 2. Deconstructing collect() Mechanics (Supplier + Accumulator + Combiner):");\r
        List<String> customCollected = studentRoster.stream()\r
            .collect(\r
                ArrayList::new,                  // 1. Supplier: creates mutable container\r
                (list, item) -> list.add(item), // 2. Accumulator: mutates container\r
                (list1, list2) -> list1.addAll(list2) // 3. Combiner: merges parallel containers\r
            );\r
        System.out.println("   Custom Collected Result: " + customCollected);\r
\r
        System.out.println("\\n>>> REDUCE VS COLLECT:");\r
        System.out.println("  - reduce(): Immutable reduction (O(N^2) for collections due to copying).");\r
        System.out.println("  - collect(): Mutable reduction (O(N) in-place container mutation).");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 0: The collect(Collector) Operation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS MUTABLE REDUCTION:\r
   - Accumulates input elements into a mutable result container (e.g. Collection, StringBuilder, Map).\r
   - Rather than creating new objects on every step, elements are added directly to the existing container.\r
\r
2. THE TWO OVERLOADS OF COLLECT:\r
   1. '<R, A> R collect(Collector<? super T, A, R> collector)'\r
      - Standard usage with predefined factory collectors from 'java.util.stream.Collectors'.\r
   2. '<R> R collect(Supplier<R> supplier, BiConsumer<R, ? super T> accumulator, BiConsumer<R, R> combiner)'\r
      - Low-level builder overload showing explicit container lifecycle.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is collect() called a 'mutable reduction' while reduce() is an 'immutable reduction'?",shortAnswer:"reduce() combines elements by producing a brand new accumulated value at each step without modifying existing objects, whereas collect() updates the internal state of a single mutable result container (like calling list.add()) repeatedly.",explanation:"Mutable reduction with collect() is dramatically faster for accumulating collections.",hint:"collect mutates a single container; reduce generates new immutable values.",level:"Intermediate",codeExample:"stream.collect(Collectors.toList()); // Mutates internal list buffer"},{question:"What are the 3 functional arguments in the low-level stream.collect() method?",shortAnswer:"1. Supplier (creates the empty container), 2. Accumulator (adds an element to the container), 3. Combiner (merges two containers during parallel execution).",explanation:"These 3 steps form the core mechanics of all Collectors.",hint:"Supplier, Accumulator, Combiner.",level:"Intermediate",codeExample:"stream.collect(ArrayList::new, ArrayList::add, ArrayList::addAll);"}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"collect(Collector)"})," Terminal Operation: Mutable Reductions"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understanding mutable reductions: why accumulating into containers via Collectors is dramatically faster than immutable reduce copying."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CollectCollectorOperationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Collectors Framework FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 009_006 Topic 0: The collect(Collector) Operation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic0_collect_collector_operation_note.txt"})}),e.jsx(l,{note:"While reduce() creates a brand new copy on every step, collect() uses a single mutable container (like an ArrayList or StringBuilder) and adds elements directly into it! That turns an O(N^2) memory nightmare into smooth O(N) performance! — Sukanta Hui"})]})}export{C as default};
