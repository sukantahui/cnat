import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const a=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 15: The Collector<T, A, R> Interface Architecture & Characteristics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.EnumSet;\r
import java.util.List;\r
import java.util.Set;\r
import java.util.function.BiConsumer;\r
import java.util.function.BinaryOperator;\r
import java.util.function.Function;\r
import java.util.function.Supplier;\r
import java.util.stream.Collector;\r
\r
public class CollectorArchitectureDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: COLLECTOR<T, A, R> ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> rawData = List.of("Java", "Spring", "Docker", "Kubernetes");\r
\r
        // Custom implementation of Collector<String, List<String>, List<String>>\r
        Collector<String, List<String>, List<String>> customListCollector = new Collector<>() {\r
            @Override\r
            public Supplier<List<String>> supplier() {\r
                return ArrayList::new; // 1. Factory for mutable accumulator\r
            }\r
\r
            @Override\r
            public BiConsumer<List<String>, String> accumulator() {\r
                return List::add;      // 2. Incorporates an element into accumulator\r
            }\r
\r
            @Override\r
            public BinaryOperator<List<String>> combiner() {\r
                return (list1, list2) -> { list1.addAll(list2); return list1; }; // 3. Merges parallel accumulators\r
            }\r
\r
            @Override\r
            public Function<List<String>, List<String>> finisher() {\r
                return Function.identity(); // 4. Final transformation\r
            }\r
\r
            @Override\r
            public Set<Characteristics> characteristics() {\r
                return EnumSet.of(Characteristics.IDENTITY_FINISH); // 5. Optimization hints\r
            }\r
        };\r
\r
        List<String> result = rawData.stream().collect(customListCollector);\r
        System.out.println("Result Collected via explicit Collector interface: " + result);\r
\r
        System.out.println("\\n>>> THE 3 COLLECTOR CHARACTERISTICS:");\r
        System.out.println("  1. IDENTITY_FINISH : Indicates finisher() is Function.identity() (safe to cast A to R directly).");\r
        System.out.println("  2. CONCURRENT      : Safe for multiple threads to mutate accumulator concurrently.");\r
        System.out.println("  3. UNORDERED       : Collection operation is unaffected by encounter order.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 15: The Collector<T, A, R> Interface Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 3 GENERIC TYPE PARAMETERS:\r
   - 'T': The type of input elements to be collected.\r
   - 'A': The mutable accumulator type (intermediate container, e.g. StringBuilder, List).\r
   - 'R': The final result type produced by the collector (e.g. String, unmodifiable List).\r
\r
2. THE 5 CORE METHODS OF COLLECTOR:\r
   1. 'supplier()'       : 'Supplier<A>' -> Creates new accumulator instance.\r
   2. 'accumulator()'    : 'BiConsumer<A, T>' -> Folds an element into the accumulator.\r
   3. 'combiner()'       : 'BinaryOperator<A>' -> Combines two partial accumulators (parallel mode).\r
   4. 'finisher()'       : 'Function<A, R>' -> Converts accumulator 'A' into final result 'R'.\r
   5. 'characteristics()': 'Set<Characteristics>' -> Optimization flags (IDENTITY_FINISH, CONCURRENT, UNORDERED).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What does the IDENTITY_FINISH characteristic signify in a Collector?",shortAnswer:"IDENTITY_FINISH indicates that the accumulator type A is identical to the final result type R and the finisher function is an unchecked identity cast. The stream engine can skip calling finisher() entirely.",explanation:"Optimizes execution by avoiding an extra function call.",hint:"Finisher function is identity; container A is returned directly as R.",level:"Intermediate",codeExample:"Characteristics.IDENTITY_FINISH"},{question:"What generic types T, A, R represent in Collector<T, A, R>?",shortAnswer:"T is the input stream element type; A is the intermediate mutable accumulator type; R is the final output result type produced by the finisher.",explanation:"For example, in Collectors.joining(), T is CharSequence, A is StringBuilder/StringJoiner, and R is String.",hint:"T = Input, A = Accumulator, R = Result.",level:"Intermediate",codeExample:"Collector<CharSequence, StringJoiner, String>"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collector<T, A, R>"})," Interface Architecture: 5 Core Components"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deconstructing the Collector SPI: supplier, accumulator, combiner, finisher, and Characteristics flags (CONCURRENT, UNORDERED, IDENTITY_FINISH)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"CollectorArchitectureDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Collectors Framework FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 009_006 Topic 15: Collector Interface Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic15_collector_interface_architecture_note.txt"})}),e.jsx(i,{note:"A Collector is defined by 5 core methods: supplier() creates the bucket, accumulator() adds an item, combiner() merges two buckets, finisher() does the final touch, and characteristics() tells the JVM how to optimize it! — Sukanta Hui"})]})}export{T as default};
