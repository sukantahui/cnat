import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 10: groupingBy(classifier, mapping(mapper, downstream))\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Set;\r
import java.util.TreeSet;\r
import java.util.stream.Collectors;\r
\r
public class GroupingByMappingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: GROUPINGBY WITH MAPPING() - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentRosterEntry> entries = List.of(\r
            new StudentRosterEntry("Swadeep Paul", "Barrackpore", "Java Core"),\r
            new StudentRosterEntry("Priya Sharma", "Barrackpore", "Java Core"),\r
            new StudentRosterEntry("Tuhina Das", "Naihati", "Spring Boot"),\r
            new StudentRosterEntry("Debangshu Mukherjee", "Naihati", "Java Core"),\r
            new StudentRosterEntry("Abhronila Das", "Shyamnagar", "Java Core")\r
        );\r
\r
        // 1. Group by Center -> Extract only Student Names (Map<String, List<String>>):\r
        System.out.println(">>> 1. Group by Center -> Extract List of Names:");\r
        Map<String, List<String>> namesByCenter = entries.stream()\r
            .collect(Collectors.groupingBy(\r
                StudentRosterEntry::center,\r
                Collectors.mapping(StudentRosterEntry::studentName, Collectors.toList())\r
            ));\r
\r
        namesByCenter.forEach((center, names) -> {\r
            System.out.println("   📍 " + center + " : " + names);\r
        });\r
\r
        // 2. Group by Course -> Extract Sorted Unique Center Names (Map<String, Set<String>>):\r
        System.out.println("\\n>>> 2. Group by Course -> Extract Sorted Centers (TreeSet):");\r
        Map<String, Set<String>> centersByCourse = entries.stream()\r
            .collect(Collectors.groupingBy(\r
                StudentRosterEntry::courseTitle,\r
                Collectors.mapping(\r
                    StudentRosterEntry::center,\r
                    Collectors.toCollection(TreeSet::new)\r
                )\r
            ));\r
\r
        centersByCourse.forEach((course, centers) -> {\r
            System.out.println("   📚 " + course + " : " + centers);\r
        });\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentRosterEntry(String studentName, String center, String courseTitle) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 10: groupingBy with mapping()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COLLECTORS.MAPPING() METHOD CONTRACT:\r
   - Signature: '<T, U, A, R> Collector<T, ?, R> mapping(Function<? super T, ? extends U> mapper, Collector<? super U, A, R> downstream)'.\r
   - Adapts a Collector accepting elements of type U to one accepting elements of type T\r
     by applying a mapping function before accumulation.\r
\r
2. VALUE PROPOSITION:\r
   - Avoids creating intermediate DTOs or collections before grouping.\r
   - Extracts only the needed fields into the final grouped value collection.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the purpose of Collectors.mapping() inside a groupingBy collector?",shortAnswer:"Collectors.mapping() transforms each element in a group (e.g. extracting a specific property like getName()) before feeding the transformed value into another downstream collector (like toList() or toSet()).",explanation:"This changes the value collection from List<Object> to List<FieldType>.",hint:"Transforms elements inside each group before downstream collection.",level:"Intermediate",codeExample:"groupingBy(Employee::getDept, mapping(Employee::getSalary, toList()))"},{question:"Can Collectors.mapping() be chained with joining()?",shortAnswer:"Yes! For example: groupingBy(Student::getCenter, mapping(Student::getName, joining(', '))) produces Map<String, String> where each center maps to a comma-separated string of student names.",explanation:"Collectors are fully composable building blocks.",hint:"mapping(Student::getName, joining(', ')) produces a joined string per group.",level:"Intermediate",codeExample:"stream.collect(groupingBy(Student::getCenter, mapping(Student::getName, joining(', '))));"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"groupingBy(classifier, mapping())"}),": Field Extraction in Groups"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Transforming group elements: extracting specific object fields, formatting strings, and collecting into custom collections per group."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"GroupingByMappingDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Collectors Framework FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 009_006 Topic 10: groupingBy with mapping()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic10_groupingby_mapping_note.txt"})}),e.jsx(o,{note:"Notice how groupingBy(center, mapping(Student::getName, toList())) creates Map<String, List<String>> (Center → List of Names) instead of Map<String, List<Student>>! It extracts the name field directly inside the grouping bucket! — Sukanta Hui"})]})}export{y as default};
