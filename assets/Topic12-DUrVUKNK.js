import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 12: Collectors.filtering() (Java 9) - Retaining Empty Groups\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.List;\r
import java.util.Map;\r
import java.util.stream.Collectors;\r
\r
public class CollectorsFilteringGroupsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: COLLECTORS.FILTERING() (JAVA 9) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentEntry> students = List.of(\r
            new StudentEntry("Swadeep Paul", "Barrackpore", 94.0),\r
            new StudentEntry("Tuhina Das", "Naihati", 96.5),\r
            new StudentEntry("Abhronila Das", "Shyamnagar", 78.0),\r
            new StudentEntry("Debangshu Mukherjee", "Ichapur", 65.0)\r
        );\r
\r
        // Problem: We want a Map of ALL centers to their Distinction students (score >= 90).\r
        // If Ichapur or Shyamnagar have NO distinction students, we still want the keys present with []!\r
\r
        // Approach 1 (WRONG): Upstream stream.filter() drops Shyamnagar & Ichapur entirely!\r
        Map<String, List<StudentEntry>> upstreamFiltered = students.stream()\r
            .filter(s -> s.score() >= 90.0)\r
            .collect(Collectors.groupingBy(StudentEntry::center));\r
        System.out.println("1. Upstream filter (MISSING Shyamnagar & Ichapur keys!):\\n   " + upstreamFiltered.keySet());\r
\r
        // Approach 2 (CORRECT): Java 9 Collectors.filtering() preserves ALL group keys!\r
        Map<String, List<String>> downstreamFiltered = students.stream()\r
            .collect(Collectors.groupingBy(\r
                StudentEntry::center,\r
                Collectors.filtering(\r
                    s -> s.score() >= 90.0,\r
                    Collectors.mapping(StudentEntry::name, Collectors.toList())\r
                )\r
            ));\r
\r
        System.out.println("\\n2. Java 9 Collectors.filtering() (ALL 4 Center Keys Retained!):");\r
        downstreamFiltered.forEach((center, distinctionList) -> {\r
            System.out.println("   📍 " + center + " : " + distinctionList);\r
        });\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentEntry(String name, String center, double score) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 12: Collectors.filtering() (Java 9)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE UPSTREAM VS DOWNSTREAM FILTER PROBLEM:\r
   - Upstream 'stream.filter(predicate)': Discards non-matching elements BEFORE groupingBy()\r
     ever sees them. Result: Groups with 0 matching elements are missing entirely from the Map.\r
   - Downstream 'Collectors.filtering(predicate, downstream)' [Java 9]: Elements are first\r
     classified into their group bucket; then filtering is applied to each bucket.\r
     Result: All groups are present in the Map (groups with 0 matches have empty collections '[]').\r
\r
2. METHOD SIGNATURE:\r
   - '<T, A, R> Collector<T, ?, R> filtering(Predicate<? super T> predicate, Collector<? super T, A, R> downstream)'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why was Collectors.filtering() added in Java 9 when stream.filter() already existed in Java 8?",shortAnswer:"To support filtering elements inside individual grouping buckets without discarding the group keys themselves. Upstream stream.filter() drops entire groups if no elements match the predicate.",explanation:"Maintains full key sets in business reporting dashboards.",hint:"Preserves grouping keys with empty collections rather than omitting the key entirely.",level:"Intermediate",codeExample:"groupingBy(Department::getName, filtering(e -> e.getSalary() > 100000, toList()))"},{question:"What will the value in the Map be for a group where no elements match the filtering predicate?",shortAnswer:"An empty collection (e.g. an empty List or empty Set), depending on the downstream collector.",explanation:"The key exists and maps to an empty container rather than null or missing.",hint:"An empty collection (e.g. empty List).",level:"Beginner",codeExample:"map.get('EmptyGroup') // returns [] (not null!)"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"groupingBy(classifier, filtering())"}),": Java 9 Selective In-Group Filtering"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Preserving empty groups during filtering: why Java 9 Collectors.filtering() prevents missing keys compared to upstream stream.filter()."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"CollectorsFilteringGroupsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Collectors Framework FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 009_006 Topic 12: Collectors.filtering() in Groups",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic12_collectors_filtering_groups_note.txt"})}),e.jsx(s,{note:"If you use upstream stream.filter() before groupingBy(), categories with 0 matching items disappear from your Map! With Java 9 Collectors.filtering(), the key is preserved with an empty List []! — Sukanta Hui"})]})}export{y as default};
