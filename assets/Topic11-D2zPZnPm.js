import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 11: Stateless vs Stateful Intermediate Operations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.List;\r
\r
public class StatelessVsStatefulDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: STATELESS VS STATEFUL OPERATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> numbers = List.of(5, 2, 8, 2, 9, 1, 5, 4);\r
\r
        System.out.println(">>> 1. STATELESS PIPELINE (filter, map, peek):");\r
        System.out.println("    - Each element is processed independently in O(1) memory.");\r
        numbers.stream()\r
            .filter(n -> n > 3)                   // Stateless\r
            .map(n -> n * 10)                     // Stateless\r
            .forEach(n -> System.out.print(n + " "));\r
        System.out.println();\r
\r
        System.out.println("\\n>>> 2. STATEFUL PIPELINE (distinct, sorted):");\r
        System.out.println("    - 'distinct()' maintains a Set of seen elements.");\r
        System.out.println("    - 'sorted()' must BUFFER ALL elements before emitting the first element!");\r
        numbers.stream()\r
            .distinct()                           // Stateful (remembers seen elements)\r
            .sorted()                             // Stateful (full buffer required)\r
            .forEach(n -> System.out.print(n + " "));\r
        System.out.println();\r
\r
        System.out.println("\\n>>> ARCHITECTURAL COMPARISON:");\r
        System.out.println("  - Stateless operations can stream infinite data easily.");\r
        System.out.println("  - Calling sorted() on an infinite stream causes an OutOfMemoryError!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 11: Stateless vs Stateful Operations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATELESS INTERMEDIATE OPERATIONS:\r
   - Definition: Processing of an element does NOT depend on any previously seen elements.\r
   - Memory overhead: O(1) per element.\r
   - Operations: 'filter()', 'map()', 'mapToInt()', 'flatMap()', 'peek()'.\r
   - Parallel friendly: Scales linearly across CPU cores with zero synchronization overhead.\r
\r
2. STATEFUL INTERMEDIATE OPERATIONS:\r
   - Definition: Processing of an element depends on previously seen elements or requires\r
     buffering multiple elements before emitting output.\r
   - Operations:\r
     * 'distinct()': Remembers all previously processed items via hash table.\r
     * 'sorted()': Must buffer the ENTIRE stream before sorting and releasing the first item.\r
     * 'limit(n)', 'skip(n)': Tracks element count state.\r
   - Warning: Calling 'sorted()' on an infinite stream will freeze and crash with OutOfMemoryError.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why does calling sorted() on an infinite stream cause an OutOfMemoryError?",shortAnswer:"sorted() is a stateful operation that must see and buffer ALL elements in memory to determine their global order before emitting the first sorted element. On an infinite stream, buffering never completes until heap memory is exhausted.",explanation:"Stateless operations (filter, map) can handle infinite streams if bounded by limit(); sorted() requires a finite bounded stream.",hint:"sorted() must buffer every single element before it can determine what comes first.",level:"Intermediate",codeExample:"// Crashing example:\\nStream.iterate(1, n → n + 1).sorted().limit(5).toList(); // OutOfMemoryError!"},{question:"How does distinct() maintain state internally during stream execution?",shortAnswer:"distinct() internally creates and populates a HashSet (or ConcurrentHashSet in parallel mode) using element hashCode() and equals() methods to filter out duplicates.",explanation:"For large streams with many unique items, distinct() incurs heap memory overhead proportional to the number of distinct elements.",hint:"Uses hash-based set tracking under the hood.",level:"Intermediate",codeExample:"stream.distinct() // Checks seenSet.add(element)"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Intermediate Operations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Stateless vs Stateful"})," Classifications"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understanding the crucial architectural boundary between stateless transformations (O(1) memory) and stateful aggregations (requiring buffer memory)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"StatelessVsStatefulDemo.java",highlightLines:[18,25,33,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Stream API Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 009_004 Topic 11: Stateless vs Stateful Operations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic11_stateless_vs_stateful_operations_note.txt"})}),e.jsx(s,{note:"Stateless operations like filter and map process elements independently in constant memory. Stateful operations like sorted and distinct must buffer elements before producing output, which impacts memory and parallel scaling! — Sukanta Hui"})]})}export{h as default};
