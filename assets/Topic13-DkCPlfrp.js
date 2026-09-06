import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 13: Collectors.partitioningBy() - Binary Predicate Partitioning\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.List;\r
import java.util.Map;\r
import java.util.stream.Collectors;\r
\r
public class CollectorsPartitioningByDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: COLLECTORS.PARTITIONINGBY() - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentScoreItem> students = List.of(\r
            new StudentScoreItem("Swadeep Paul", 94.0),\r
            new StudentScoreItem("Tuhina Das", 96.5),\r
            new StudentScoreItem("Abhronila Das", 78.0),\r
            new StudentScoreItem("Debangshu Mukherjee", 88.5),\r
            new StudentScoreItem("Priya Sharma", 55.0),\r
            new StudentScoreItem("Anish Dey", 38.0)\r
        );\r
\r
        // 1. Partitioning by Passing Grade (Score >= 40.0): Map<Boolean, List<StudentScoreItem>>\r
        System.out.println(">>> 1. Partitioning by Pass (>= 40.0) vs Fail (< 40.0):");\r
        Map<Boolean, List<StudentScoreItem>> passedPartition = students.stream()\r
            .collect(Collectors.partitioningBy(s -> s.score() >= 40.0));\r
\r
        System.out.println("   Passed Students (true)  : " + passedPartition.get(true).stream().map(StudentScoreItem::name).toList());\r
        System.out.println("   Failed Students (false) : " + passedPartition.get(false).stream().map(StudentScoreItem::name).toList());\r
\r
        // 2. Partitioning with Downstream counting(): Map<Boolean, Long>\r
        System.out.println("\\n>>> 2. Distinction (>= 85%) Headcount Partition:");\r
        Map<Boolean, Long> distinctionCounts = students.stream()\r
            .collect(Collectors.partitioningBy(\r
                s -> s.score() >= 85.0,\r
                Collectors.counting()\r
            ));\r
\r
        System.out.println("   Distinction Count (true)     : " + distinctionCounts.get(true));\r
        System.out.println("   Non-Distinction Count (false): " + distinctionCounts.get(false));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentScoreItem(String name, double score) {}\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 13: Collectors.partitioningBy()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS PARTITIONING:\r
   - A special case of 'groupingBy' where the classifier is a 'Predicate<T>'.\r
   - The resulting Map is ALWAYS typed as 'Map<Boolean, D>'.\r
   - Both 'true' and 'false' keys are ALWAYS guaranteed to be present in the resulting Map,\r
     even if one of the partitions has 0 elements.\r
\r
2. OVERLOADS:\r
   - 'partitioningBy(Predicate<? super T> predicate)' → Map<Boolean, List<T>>\r
   - 'partitioningBy(Predicate<? super T> predicate, Collector downstream)' → Map<Boolean, D>\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"How does partitioningBy() differ from groupingBy()?",shortAnswer:"partitioningBy() uses a Predicate<T> to divide elements into exactly two boolean buckets (true and false), whereas groupingBy() uses a Function<T, K> to classify elements into any arbitrary number of keys.",explanation:"partitioningBy() is faster and guarantees that both Boolean.TRUE and Boolean.FALSE keys are always present in the returned Map.",hint:"partitioningBy always produces a 2-key boolean map (true and false).",level:"Beginner",codeExample:"Map<Boolean, List<User>> activeInactive = list.stream().collect(partitioningBy(User::isActive));"},{question:"If all elements in a stream evaluate to true, will the false key still exist in the returned Map from partitioningBy()?",shortAnswer:"Yes! The false key will exist and its value will be an empty collection (e.g. empty List []).",explanation:"This eliminates the need to check map.containsKey(false).",hint:"Yes, maps to an empty collection.",level:"Intermediate",codeExample:"map.get(false); // Returns [] (never null!)"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Boolean Partitioning with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collectors.partitioningBy()"}),": Binary Splitting"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Splitting streams into true/false maps: Map<Boolean, List<T>>, combining partitioning with downstream reducers, and binary partitioning performance."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"CollectorsPartitioningByDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Collectors Framework FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_006 Topic 13: Collectors.partitioningBy()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic13_collectors_partitioningby_note.txt"})}),e.jsx(a,{note:"partitioningBy() is a specialized 2-way groupingBy() where the key is ALWAYS a boolean (true or false). It is faster than groupingBy and guarantees both true and false keys exist in the Map! — Sukanta Hui"})]})}export{x as default};
