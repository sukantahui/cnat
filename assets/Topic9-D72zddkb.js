import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 9: groupingBy(classifier, counting()) - Frequency Tables & Distribution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.Arrays;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.stream.Collectors;\r
\r
public class GroupingByCountingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: GROUPINGBY WITH COUNTING() - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentCourseEnrollment> enrollments = List.of(\r
            new StudentCourseEnrollment("Swadeep Paul", "Java Core"),\r
            new StudentCourseEnrollment("Priya Sharma", "Java Core"),\r
            new StudentCourseEnrollment("Tuhina Das", "Spring Boot"),\r
            new StudentCourseEnrollment("Abhronila Das", "Java Core"),\r
            new StudentCourseEnrollment("Debangshu Mukherjee", "DevOps"),\r
            new StudentCourseEnrollment("Anish Dey", "Spring Boot"),\r
            new StudentCourseEnrollment("Rohan Sen", "Java Core")\r
        );\r
\r
        // 1. Enrollment Count by Course (Histogram)\r
        System.out.println(">>> 1. Course Enrollment Frequency Histogram:");\r
        Map<String, Long> courseCounts = enrollments.stream()\r
            .collect(Collectors.groupingBy(\r
                StudentCourseEnrollment::courseTitle,\r
                Collectors.counting()\r
            ));\r
\r
        courseCounts.forEach((course, count) -> {\r
            System.out.println("   📊 " + course + ": " + count + " students enrolled");\r
        });\r
\r
        // 2. Word Frequency Counter in a Sentence\r
        String text = "java streams are fast and java streams are declarative and clean";\r
        Map<String, Long> wordFrequencies = Arrays.stream(text.split(" "))\r
            .collect(Collectors.groupingBy(\r
                word -> word,\r
                Collectors.counting()\r
            ));\r
\r
        System.out.println("\\n>>> 2. Word Frequency Distribution:");\r
        wordFrequencies.forEach((word, freq) -> {\r
            System.out.println("   - '" + word + "': " + freq + " times");\r
        });\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentCourseEnrollment(String studentName, String courseTitle) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 9: groupingBy with counting()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FREQUENCY PATTERN:\r
   - 'Collectors.groupingBy(classifier, Collectors.counting())'\r
   - Produces 'Map<K, Long>' representing counts of elements in each classification group.\r
\r
2. EQUIVALENT SQL:\r
   - 'SELECT courseTitle, COUNT(*) FROM enrollments GROUP BY courseTitle;'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the return type of Collectors.groupingBy(Function, Collectors.counting())?",shortAnswer:"Map<K, Long>, where K is the key type returned by the classifier function and values are 64-bit Long counts.",explanation:"Collectors.counting() always produces a Long count.",hint:"Map<K, Long>",level:"Beginner",codeExample:"Map<String, Long> map = stream.collect(groupingBy(Word::text, counting()));"},{question:"How can you sort the resulting frequency map by count descending?",shortAnswer:"By streaming the map.entrySet(), sorting with Map.Entry.comparingByValue(Comparator.reverseOrder()), and collecting into a LinkedHashMap.",explanation:"Preserves the sorted order in a newly collected map.",hint:"Stream entrySet, sort by comparingByValue().reversed(), collect to LinkedHashMap.",level:"Intermediate",codeExample:"map.entrySet().stream().sorted(Map.Entry.<String, Long>comparingByValue().reversed()).collect(toMap(Entry::getKey, Entry::getValue, (e1, e2) → e1, LinkedHashMap::new));"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"groupingBy(classifier, counting())"}),": Item Frequencies & Analytics"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Calculating group frequencies: building occurrence histograms, counting entity distributions, and ranking categories."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"GroupingByCountingDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Collectors Framework FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 009_006 Topic 9: groupingBy with counting()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic9_groupingby_counting_note.txt"})}),e.jsx(o,{note:"This is the cleanest way in Java to create a frequency table or histogram! Just group by the key and pass counting() as downstream! — Sukanta Hui"})]})}export{x as default};
