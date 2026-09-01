import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 5: Collectors.groupingBy() - Overview of Classification Pipelines\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.List;\r
import java.util.Map;\r
import java.util.stream.Collectors;\r
\r
public class GroupingByOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: COLLECTORS.GROUPINGBY() OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentProfile> students = List.of(\r
            new StudentProfile("Swadeep Paul", "Barrackpore", "Java Core"),\r
            new StudentProfile("Tuhina Das", "Naihati", "Spring Boot"),\r
            new StudentProfile("Abhronila Das", "Barrackpore", "Python"),\r
            new StudentProfile("Debangshu Mukherjee", "Naihati", "Java Core"),\r
            new StudentProfile("Priya Sharma", "Barrackpore", "Java Core")\r
        );\r
\r
        // 1. Grouping Students by Center: Map<String, List<StudentProfile>>\r
        System.out.println(">>> 1. Grouping Students by Academic Center:");\r
        Map<String, List<StudentProfile>> byCenter = students.stream()\r
            .collect(Collectors.groupingBy(StudentProfile::center));\r
\r
        byCenter.forEach((center, list) -> {\r
            System.out.println("   📍 Center: " + center + " (" + list.size() + " students)");\r
            list.forEach(s -> System.out.println("      - " + s.name() + " [" + s.course() + "]"));\r
        });\r
\r
        // 2. Grouping Students by Course: Map<String, List<StudentProfile>>\r
        System.out.println("\\n>>> 2. Grouping Students by Course Title:");\r
        Map<String, List<StudentProfile>> byCourse = students.stream()\r
            .collect(Collectors.groupingBy(StudentProfile::course));\r
\r
        byCourse.forEach((course, list) -> {\r
            System.out.println("   📚 Course: " + course + " -> " + list.stream().map(StudentProfile::name).toList());\r
        });\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentProfile(String name, String center, String course) {}\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 5: Collectors.groupingBy() Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS GROUPINGBY:\r
   - Groups elements according to a classification function and returns a 'Map<K, List<T>>' (by default).\r
   - Equivalent to SQL 'GROUP BY' clause.\r
\r
2. THE THREE OVERLOADS OF GROUPINGBY:\r
   1. 'groupingBy(classifier)'\r
      - Produces 'Map<K, List<T>>' (Standard HashMap).\r
   2. 'groupingBy(classifier, downstreamCollector)'\r
      - Produces 'Map<K, D>' (Applies downstream reduction to grouped values).\r
   3. 'groupingBy(classifier, mapFactorySupplier, downstreamCollector)'\r
      - Produces custom Map type (e.g. 'TreeMap::new') with downstream reduction.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the default Map and Collection type returned by the 1-argument Collectors.groupingBy(classifier)?",shortAnswer:"It returns a java.util.HashMap containing keys of classifier type K and values of java.util.ArrayList containing elements of type T (Map<K, List<T>>).",explanation:"If a different Map or Collection type is needed, the 2-arg or 3-arg overloads must be used.",hint:"Returns HashMap<K, List<T>>.",level:"Beginner",codeExample:"Map<String, List<Student>> map = list.stream().collect(Collectors.groupingBy(Student::getCenter));"},{question:"Can the classification function in groupingBy() return null?",shortAnswer:"In standard HashMap implementations, null keys are permitted by HashMap, but using null keys is considered an anti-pattern. If a TreeMap supplier is passed, returning null will throw a NullPointerException.",explanation:"Prefer using Optional or sentinel default values instead of null keys.",hint:"Avoid null classifier keys to prevent TreeMap exceptions and maintain clean design.",level:"Intermediate",codeExample:"s → s.getCenter() != null ? s.getCenter() : 'Unassigned'"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Classification with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collectors.groupingBy()"}),": Overview & Taxonomy"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Mastering SQL GROUP BY in pure Java: classifying streams into Maps based on classifier functions, Map suppliers, and downstream reductions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"GroupingByOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Collectors Framework FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 009_006 Topic 5: Collectors.groupingBy() Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic5_groupingby_overview_note.txt"})}),e.jsx(s,{note:"Collectors.groupingBy() is the crown jewel of the Stream API! It brings the full expressive power of relational SQL GROUP BY into strongly typed Java memory! — Sukanta Hui"})]})}export{f as default};
