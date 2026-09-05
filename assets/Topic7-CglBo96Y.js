import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 7: Multi-Level Nested groupingBy() Pipelines\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.List;\r
import java.util.Map;\r
import java.util.stream.Collectors;\r
\r
public class MultiLevelGroupingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: MULTI-LEVEL NESTED GROUPINGBY - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<EnrollmentRecord> enrollments = List.of(\r
            new EnrollmentRecord("Swadeep Paul", "Barrackpore", "Java Core"),\r
            new EnrollmentRecord("Priya Sharma", "Barrackpore", "Java Core"),\r
            new EnrollmentRecord("Rohan Sen", "Barrackpore", "Spring Boot"),\r
            new EnrollmentRecord("Tuhina Das", "Naihati", "Spring Boot"),\r
            new EnrollmentRecord("Debangshu Mukherjee", "Naihati", "Java Core"),\r
            new EnrollmentRecord("Abhronila Das", "Shyamnagar", "Java Core")\r
        );\r
\r
        // 2-Level Multi-Grouping:\r
        // Outer Key: Center (String)\r
        // Inner Key: Course (String)\r
        // Value: List<EnrollmentRecord>\r
        // Result Type: Map<String, Map<String, List<EnrollmentRecord>>>\r
        Map<String, Map<String, List<EnrollmentRecord>>> hierarchy = enrollments.stream()\r
            .collect(Collectors.groupingBy(\r
                EnrollmentRecord::center,                                    // Level 1: Group by Center\r
                Collectors.groupingBy(EnrollmentRecord::course)             // Level 2: Group by Course\r
            ));\r
\r
        System.out.println(">>> 2-TIER NESTED HIERARCHY (Center -> Course -> Students):");\r
        hierarchy.forEach((center, courseMap) -> {\r
            System.out.println("📍 CENTER: " + center);\r
            courseMap.forEach((course, studentList) -> {\r
                System.out.println("   📚 " + course + " (" + studentList.size() + " students):");\r
                studentList.forEach(s -> System.out.println("      - " + s.studentName()));\r
            });\r
        });\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record EnrollmentRecord(String studentName, String center, String course) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 7: Multi-Level Nested groupingBy()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NESTED GROUPING MECHANICS:\r
   - The 2-argument 'Collectors.groupingBy(classifier, downstreamCollector)' accepts ANY Collector as its downstream argument.\r
   - By passing another 'groupingBy()' as the downstream collector, a multi-tier nested Map structure is formed:\r
     * 'Map<K1, Map<K2, List<T>>>' (2-Level).\r
     * 'Map<K1, Map<K2, Map<K3, List<T>>>>' (3-Level).\r
\r
2. PATTERN FORMULA:\r
   - 'collect(groupingBy(Entity::getPrimary, groupingBy(Entity::getSecondary)))'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the return type of nesting 3 groupingBy collectors inside each other?",shortAnswer:"Map<K1, Map<K2, Map<K3, List<T>>>>, where K1, K2, and K3 are the key types produced by the outer, middle, and innermost classifiers respectively.",explanation:"Each nested groupingBy adds another layer of Map hierarchy.",hint:"Map<K1, Map<K2, Map<K3, List<T>>>>",level:"Intermediate",codeExample:"stream.collect(groupingBy(T::getK1, groupingBy(T::getK2, groupingBy(T::getK3))));"},{question:"Can you pass a downstream reduction collector (like counting or toSet) into the innermost groupingBy in multi-level grouping?",shortAnswer:"Yes! The innermost groupingBy can take any downstream collector, producing structures like Map<K1, Map<K2, Long>> (counting) or Map<K1, Map<K2, Set<String>>> (mapping to sets).",explanation:"This provides extreme flexibility for complex multi-dimensional analytics.",hint:"The innermost groupingBy accepts any standard downstream reducer.",level:"Advanced",codeExample:"stream.collect(groupingBy(E::getCenter, groupingBy(E::getCourse, counting())));"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Multi-Level Grouping: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Map<K1, Map<K2, List<V>>>"})," Nested Pipelines"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Constructing multi-dimensional hierarchy maps: nesting groupingBy() inside groupingBy() for complex enterprise classification trees."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"MultiLevelGroupingDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Collectors Framework FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_006 Topic 7: Multi-Level Nested Grouping",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic7_multilevel_nested_grouping_note.txt"})}),e.jsx(o,{note:"Multi-level grouping is achieved by passing another groupingBy() collector as the downstream argument to the outer groupingBy()! This creates a nested hierarchy like Center → Course → List of Students! — Sukanta Hui"})]})}export{y as default};
