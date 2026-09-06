import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 16: Custom Collector from Scratch using Collector.of() - Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
import java.util.stream.Collector;\r
\r
public class CustomCollectorCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: CUSTOM COLLECTOR CAPSTONE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<AcademyCandidate> candidates = List.of(\r
            new AcademyCandidate("Swadeep Paul", "Barrackpore", 94.0),\r
            new AcademyCandidate("Tuhina Das", "Naihati", 96.5),\r
            new AcademyCandidate("Abhronila Das", "Shyamnagar", 88.0),\r
            new AcademyCandidate("Debangshu Mukherjee", "Ichapur", 91.5)\r
        );\r
\r
        // 1. Building a Custom Collector via Collector.of() factory:\r
        // Creates an Unmodifiable List after sorting elements by score descending!\r
        Collector<AcademyCandidate, List<AcademyCandidate>, List<AcademyCandidate>> topPerformersCollector =\r
            Collector.of(\r
                ArrayList::new,                                                         // 1. Supplier\r
                List::add,                                                              // 2. Accumulator\r
                (list1, list2) -> { list1.addAll(list2); return list1; },              // 3. Combiner\r
                list -> {                                                               // 4. Finisher\r
                    list.sort((c1, c2) -> Double.compare(c2.score(), c1.score()));     // Sort descending\r
                    return Collections.unmodifiableList(list);                          // Wrap immutable\r
                }\r
            );\r
\r
        List<AcademyCandidate> rankedToppers = candidates.stream()\r
            .collect(topPerformersCollector);\r
\r
        System.out.println(">>> 1. Custom Collected & Ranked Candidates:");\r
        rankedToppers.forEach(c -> System.out.println("   🏆 " + c.name() + " (" + c.center() + ") -> " + c.score() + "%"));\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 009_006 COMPLETE: THE COLLECTORS FRAMEWORK FULLY MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    record AcademyCandidate(String name, String center, double score) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 16: Custom Collector from Scratch Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COLLECTOR.OF() CONVENIENCE FACTORY:\r
   - 'Collector.of(supplier, accumulator, combiner, finisher, characteristics...)'\r
   - Eliminates need to write anonymous inner classes implementing the 'Collector' interface.\r
\r
2. WHEN TO IMPLEMENT CUSTOM COLLECTORS:\r
   - Collecting into custom proprietary domain data structures.\r
   - Performing specialized encryption/compression during reduction.\r
   - Post-sorting and returning immutable views in a single pass.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"How do you create a custom Collector concisely without creating a new class?",shortAnswer:"Using the static factory method Collector.of(supplier, accumulator, combiner, finisher, characteristics...).",explanation:"Collector.of provides a fluent functional way to build custom collectors.",hint:"Use Collector.of() static factory method.",level:"Intermediate",codeExample:"Collector<T, List<T>, List<T>> c = Collector.of(ArrayList::new, List::add, (a, b) → { a.addAll(b); return a; });"},{question:"Why must the combiner function return one of the modified lists rather than void?",shortAnswer:"Because in parallel reduction (ForkJoinPool), the combiner is a BinaryOperator<A> that must return the combined accumulator instance to be propagated up the recursive divide-and-conquer tree.",explanation:"BinaryOperator<A> requires returning type A.",hint:"Combiner is a BinaryOperator<A> which must return the merged container.",level:"Advanced",codeExample:"(l1, l2) → { l1.addAll(l2); return l1; }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Implementing a ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Custom Collector from Scratch"}),": Collector.of() (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Building industrial-grade custom collectors: using Collector.of() factory, creating ImmutableListCollector, and complete module capstone."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"CustomCollectorCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Collectors Framework FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 009_006 Topic 16: Custom Collector from Scratch Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic16_custom_collector_capstone_note.txt"})}),e.jsx(n,{note:"Congratulations on mastering Module 6! You now know how to build your own Custom Collectors with Collector.of()! You have unlocked the full relational data processing power of modern Java! — Sukanta Hui"})]})}export{x as default};
