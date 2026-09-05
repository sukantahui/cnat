import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 6: Single-Level groupingBy() - Custom Range & Tier Classification\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.List;\r
import java.util.Map;\r
import java.util.stream.Collectors;\r
\r
public class SingleLevelGroupingByDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: SINGLE-LEVEL GROUPINGBY() - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentScoreItem> students = List.of(\r
            new StudentScoreItem("Swadeep Paul", 94.0),\r
            new StudentScoreItem("Tuhina Das", 96.5),\r
            new StudentScoreItem("Abhronila Das", 78.0),\r
            new StudentScoreItem("Debangshu Mukherjee", 88.5),\r
            new StudentScoreItem("Priya Sharma", 62.0),\r
            new StudentScoreItem("Anish Dey", 45.0)\r
        );\r
\r
        // Classifying students into Grade Tiers via custom lambda classifier:\r
        // Tier 1: Distinction (>= 85)\r
        // Tier 2: First Division (>= 60 and < 85)\r
        // Tier 3: Pass (>= 40 and < 60)\r
        Map<String, List<StudentScoreItem>> gradeTierMap = students.stream()\r
            .collect(Collectors.groupingBy(s -> {\r
                if (s.score() >= 85.0) return "DISTINCTION (>= 85%)";\r
                if (s.score() >= 60.0) return "FIRST DIVISION (60-84%)";\r
                return "PASS CLASS (40-59%)";\r
            }));\r
\r
        System.out.println(">>> CLASSIFICATION BY PERFORMANCE TIER:");\r
        gradeTierMap.forEach((tier, list) -> {\r
            System.out.println("   🏅 " + tier + ":");\r
            list.forEach(s -> System.out.println("      - " + s.name() + " (" + s.score() + "%)"));\r
        });\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentScoreItem(String name, double score) {}\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 6: Single-Level groupingBy()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CLASSIFIER FUNCTION FLEXIBILITY:\r
   - The classifier function 'Function<? super T, ? extends K>' maps an element to its grouping key.\r
   - Types of Classifiers:\r
     1. Property Extractor: 'Student::getCenter' → Groups by center.\r
     2. Computed Classification: 's → s.getScore() >= 85 ? "A" : "B"' → Groups by conditional tier.\r
     3. Compound Key Object: 's → new CenterCourseKey(s.getCenter(), s.getCourse())'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Can a grouping classifier categorize elements into keys that are not fields on the original object?",shortAnswer:"Yes! The classifier is a general Function<T, K> that can compute any arbitrary key value (such as age brackets, string lengths, ranges, or custom enum values) dynamically for each element.",explanation:"This allows dynamic classification without modifying domain models.",hint:"The classifier can be any function calculating dynamic keys.",level:"Beginner",codeExample:"words.stream().collect(Collectors.groupingBy(String::length)); // Groups by word length"},{question:"How do you group by multiple fields (e.g. Center AND Course) in single-level grouping?",shortAnswer:"By creating and returning a Java Record (or composite key class) with value-based equals and hashCode from the classifier function: groupingBy(s → new CenterCourse(s.center(), s.course())).",explanation:"Java records provide automatic value equality, making them perfect composite grouping keys.",hint:"Use a Java record as a composite key in the classifier function.",level:"Intermediate",codeExample:"record BranchCourse(String branch, String course) {}\\nstream.collect(groupingBy(s → new BranchCourse(s.getBranch(), s.getCourse())));"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Single-Level Grouping: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Map<K, List<V>>"})," Deep Dive"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Classifying domain models into keyed lists: custom classifier lambdas, grouping by calculated ranges, and processing grouped entries."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"SingleLevelGroupingByDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Collectors Framework FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 009_006 Topic 6: Single-Level groupingBy()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic6_single_level_groupingby_note.txt"})}),e.jsx(s,{note:"Your classifier function does not have to be a simple getter! You can pass any complex lambda to calculate age brackets, salary tiers, or grade levels on the fly! — Sukanta Hui"})]})}export{y as default};
