import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 11: groupingBy(classifier, maxBy()/minBy()) - Finding Group Extremes\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.Comparator;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Optional;\r
import java.util.stream.Collectors;\r
\r
public class GroupingByMaxByDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: GROUPINGBY WITH MAXBY() / MINBY() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentScoreMetric> metrics = List.of(\r
            new StudentScoreMetric("Swadeep Paul", "Barrackpore", 94.0),\r
            new StudentScoreMetric("Priya Sharma", "Barrackpore", 88.0),\r
            new StudentScoreMetric("Tuhina Das", "Naihati", 96.5),\r
            new StudentScoreMetric("Debangshu Mukherjee", "Naihati", 91.0),\r
            new StudentScoreMetric("Abhronila Das", "Shyamnagar", 89.5),\r
            new StudentScoreMetric("Rohan Sen", "Shyamnagar", 75.0)\r
        );\r
\r
        // 1. Finding Top Scorer in EACH Center via maxBy():\r
        // Output type: Map<String, Optional<StudentScoreMetric>>\r
        System.out.println(">>> 1. Top Performer in Each Academic Center (Map<String, Optional<Student>>):");\r
        Map<String, Optional<StudentScoreMetric>> topPerCenter = metrics.stream()\r
            .collect(Collectors.groupingBy(\r
                StudentScoreMetric::center,\r
                Collectors.maxBy(Comparator.comparingDouble(StudentScoreMetric::score))\r
            ));\r
\r
        topPerCenter.forEach((center, optStudent) -> {\r
            optStudent.ifPresent(s -> \r
                System.out.println("   🏆 " + center + " Topper: " + s.name() + " (" + s.score() + "%)")\r
            );\r
        });\r
\r
        // 2. Clean Unwrapping with collectingAndThen: Map<String, StudentScoreMetric> (NO Optional wrapper!)\r
        System.out.println("\\n>>> 2. Unwrapped Topper Map using collectingAndThen(maxBy, Optional::orElseThrow):");\r
        Map<String, StudentScoreMetric> unwrappedToppers = metrics.stream()\r
            .collect(Collectors.groupingBy(\r
                StudentScoreMetric::center,\r
                Collectors.collectingAndThen(\r
                    Collectors.maxBy(Comparator.comparingDouble(StudentScoreMetric::score)),\r
                    Optional::orElseThrow\r
                )\r
            ));\r
\r
        unwrappedToppers.forEach((center, s) -> {\r
            System.out.println("   🥇 " + center + ": " + s.name() + " [" + s.score() + "%]");\r
        });\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentScoreMetric(String name, String center, double score) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 11: groupingBy with maxBy() / minBy()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MAXBY & MINBY COLLECTORS:\r
   - 'Collectors.maxBy(Comparator<? super T> comp)' → Collector<T, ?, Optional<T>>.\r
   - 'Collectors.minBy(Comparator<? super T> comp)' → Collector<T, ?, Optional<T>>.\r
\r
2. UNWRAPPING OPTIONAL PATTERN:\r
   - By default, 'groupingBy(k, maxBy(comp))' returns 'Map<K, Optional<T>>'.\r
   - To unwrap the Optional into 'Map<K, T>', wrap with 'collectingAndThen()':\r
     * 'Collectors.collectingAndThen(Collectors.maxBy(comp), Optional::orElseThrow)'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why does groupingBy(classifier, maxBy(comp)) return Map<K, Optional<T>> instead of Map<K, T>?",shortAnswer:"Because maxBy() is a general reduction collector that must return Optional<T> to safely handle the possibility of an empty stream in its group.",explanation:"Even though groupingBy only creates groups for present elements, the collector's signature statically returns Optional<T>.",hint:"maxBy() statically returns an Optional<T> type.",level:"Intermediate",codeExample:"Map<String, Optional<Employee>> topByDept = list.stream().collect(groupingBy(Employee::getDept, maxBy(comp)));"},{question:"How do you eliminate the Optional<T> wrapper to get Map<K, T> directly?",shortAnswer:"By wrapping maxBy inside Collectors.collectingAndThen(maxBy(comp), Optional::get) or Optional::orElseThrow.",explanation:"collectingAndThen applies an immediate post-processing finisher function.",hint:"Use Collectors.collectingAndThen(maxBy(comp), Optional::orElseThrow).",level:"Advanced",codeExample:"groupingBy(E::getDept, collectingAndThen(maxBy(comp), Optional::orElseThrow))"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"groupingBy(classifier, maxBy()/minBy())"}),": Extreme Per-Group Extractions"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Extracting group champions: finding top performers, highest earners, or most recent records in each category using Comparators."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"GroupingByMaxByDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Collectors Framework FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 009_006 Topic 11: groupingBy with maxBy() / minBy()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic11_groupingby_maxby_minby_note.txt"})}),e.jsx(o,{note:"maxBy() inside groupingBy() produces Map<K, Optional<T>>. If you want to unwrap the Optional directly to get Map<K, T>, combine it with Collectors.collectingAndThen(maxBy(...), Optional::get)! — Sukanta Hui"})]})}export{y as default};
