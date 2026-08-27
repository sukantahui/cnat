import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 8: Downstream Collectors in groupingBy() - Architectural Overview\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Set;\r
import java.util.stream.Collectors;\r
\r
public class DownstreamCollectorsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: DOWNSTREAM COLLECTORS IN GROUPINGBY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentData> students = List.of(\r
            new StudentData("Swadeep Paul", "Barrackpore", 94.0),\r
            new StudentData("Priya Sharma", "Barrackpore", 82.0),\r
            new StudentData("Tuhina Das", "Naihati", 96.5),\r
            new StudentData("Abhronila Das", "Shyamnagar", 88.0),\r
            new StudentData("Debangshu Mukherjee", "Naihati", 91.0)\r
        );\r
\r
        // 1. Downstream counting(): Map<String, Long> (Student count per center)\r
        Map<String, Long> countPerCenter = students.stream()\r
            .collect(Collectors.groupingBy(StudentData::center, Collectors.counting()));\r
        System.out.println("1. Student Count per Center: " + countPerCenter);\r
\r
        // 2. Downstream toSet(): Map<String, Set<String>> (Unique student names per center)\r
        Map<String, Set<String>> namesPerCenter = students.stream()\r
            .collect(Collectors.groupingBy(\r
                StudentData::center,\r
                Collectors.mapping(StudentData::name, Collectors.toSet())\r
            ));\r
        System.out.println("2. Unique Names per Center: " + namesPerCenter);\r
\r
        // 3. Downstream averagingDouble(): Map<String, Double> (Average score per center)\r
        Map<String, Double> avgScorePerCenter = students.stream()\r
            .collect(Collectors.groupingBy(\r
                StudentData::center,\r
                Collectors.averagingDouble(StudentData::score)\r
            ));\r
        System.out.println("3. Average Score per Center: " + avgScorePerCenter);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentData(String name, String center, double score) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 8: Downstream Collectors Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A DOWNSTREAM COLLECTOR:\r
   - When elements are classified into buckets by 'groupingBy()', the downstream collector\r
     is responsible for processing and accumulating the elements in each individual bucket.\r
   - Default downstream: 'Collectors.toList()'.\r
\r
2. POPULAR DOWNSTREAM COLLECTORS:\r
   - 'counting()': Counts items in each group -> 'Map<K, Long>'.\r
   - 'mapping(fn, downstream)': Maps element fields before collecting -> 'Map<K, List<R>>'.\r
   - 'summingInt() / averagingDouble()': Calculates metrics per group -> 'Map<K, Double>'.\r
   - 'maxBy(comp) / minBy(comp)': Finds extremes per group -> 'Map<K, Optional<T>>'.\r
   - 'filtering(pred, downstream)' [Java 9]: Filters within groups.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What does the downstream collector in groupingBy(classifier, downstream) operate on?",shortAnswer:"The downstream collector operates independently on the sub-stream of elements that belong to each specific classification group/bucket.",explanation:"This enables per-group aggregations without manual iteration.",hint:"Operates on the elements assigned to each group bucket.",level:"Intermediate",codeExample:"stream.collect(groupingBy(Student::getCenter, counting()));"},{question:"What is the return type of groupingBy(Student::getCenter, toSet())?",shortAnswer:"Map<String, Set<Student>>, where each key maps to a Set rather than the default List.",explanation:"Passing toSet() as downstream changes the value container from List to Set.",hint:"Map<String, Set<Student>>",level:"Beginner",codeExample:"Map<String, Set<Student>> map = stream.collect(groupingBy(Student::getCenter, toSet()));"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Downstream Collectors in ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"groupingBy()"}),": Architecture & Composition"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Composing collectors: transforming grouped lists into custom aggregations, counts, transformed collections, and statistical summaries."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"DownstreamCollectorsOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Collectors Framework FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_006 Topic 8: Downstream Collectors Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic8_downstream_collectors_overview_note.txt"})}),e.jsx(a,{note:"By default, groupingBy() puts grouped items into a List. But when you pass a downstream collector, you can replace that List with a Count (Long), a Set, an Average (Double), or the highest scorer! — Sukanta Hui"})]})}export{h as default};
