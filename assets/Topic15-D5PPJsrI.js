import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 15: Primitive Stream Reductions - Enterprise Statistical Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.DoubleSummaryStatistics;\r
import java.util.List;\r
\r
public class PrimitiveReductionsCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: PRIMITIVE REDUCTIONS CAPSTONE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<EnterpriseStudentReport> reports = List.of(\r
            new EnterpriseStudentReport("Swadeep Paul", "Barrackpore", 88.5),\r
            new EnterpriseStudentReport("Tuhina Das", "Naihati", 95.0),\r
            new EnterpriseStudentReport("Abhronila Das", "Shyamnagar", 76.5),\r
            new EnterpriseStudentReport("Debangshu Mukherjee", "Ichapur", 92.0),\r
            new EnterpriseStudentReport("Priya Sharma", "Barrackpore", 84.0)\r
        );\r
\r
        // 1. Primitive sum() via mapToDouble\r
        double totalScores = reports.stream()\r
            .mapToDouble(EnterpriseStudentReport::score)\r
            .sum();\r
        System.out.println("1. Total Sum of Scores: " + totalScores);\r
\r
        // 2. Primitive average() returning OptionalDouble\r
        double averageScore = reports.stream()\r
            .mapToDouble(EnterpriseStudentReport::score)\r
            .average()\r
            .orElse(0.0);\r
        System.out.println("2. Class Average Score: " + String.format("%.2f", averageScore) + "%");\r
\r
        // 3. DoubleSummaryStatistics: 1-Pass complete analysis\r
        DoubleSummaryStatistics stats = reports.stream()\r
            .mapToDouble(EnterpriseStudentReport::score)\r
            .summaryStatistics();\r
\r
        System.out.println("\\n3. Comprehensive 1-Pass Statistical Report:");\r
        System.out.println("   ==========================================");\r
        System.out.println("   - Total Students Evaluated : " + stats.getCount());\r
        System.out.println("   - Highest Score (Max)      : " + stats.getMax() + "%");\r
        System.out.println("   - Lowest Score (Min)       : " + stats.getMin() + "%");\r
        System.out.println("   - Class Average (Mean)     : " + String.format("%.2f", stats.getAverage()) + "%");\r
        System.out.println("   - Cumulative Sum           : " + stats.getSum());\r
        System.out.println("   ==========================================");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 009_005 COMPLETE: TERMINAL OPERATIONS & REDUCTIONS MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    record EnterpriseStudentReport(String name, String center, double score) {}\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 15: Primitive Stream Reductions Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NUMERIC PRIMITIVE TERMINAL REDUCTIONS:\r
   - 'sum()': Returns primitive int, long, or double sum (Identity is 0).\r
   - 'average()': Returns 'OptionalDouble' (handles 0 elements safely).\r
   - 'min()': Returns 'OptionalInt', 'OptionalLong', or 'OptionalDouble'.\r
   - 'max()': Returns 'OptionalInt', 'OptionalLong', or 'OptionalDouble'.\r
\r
2. SUMMARYSTATISTICS CLASSES:\r
   - 'IntSummaryStatistics', 'LongSummaryStatistics', 'DoubleSummaryStatistics'.\r
   - Captures count, min, max, sum, and average in a single sequential or parallel pass.\r
   - Extremely memory-efficient and fast for business dashboards.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does IntStream.average() return an OptionalDouble rather than a double?",shortAnswer:"Because calculating the average of an empty stream involves dividing by zero. OptionalDouble cleanly communicates the absence of a value without throwing an ArithmeticException.",explanation:"Allows calling .orElse(0.0) or .orElseThrow().",hint:"Avoids division by zero on empty streams.",level:"Beginner",codeExample:"double avg = IntStream.empty().average().orElse(0.0);"},{question:"How does DoubleSummaryStatistics combine partial statistics across multiple threads in parallel streams?",shortAnswer:"DoubleSummaryStatistics implements a combine(DoubleSummaryStatistics other) method that merges counts, sums, updates global min/max, and recomputes the combined average across worker threads.",explanation:"This allows seamless integration with parallel reductions.",hint:"Uses combine() to merge stats across parallel worker threads.",level:"Advanced",codeExample:"stream.parallel().mapToDouble(x -> x).summaryStatistics();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Primitive Stream Reductions: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"sum(), average() & summaryStatistics()"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"High-performance primitive numerical reductions: eliminating object boxing, computing statistical summaries, and end-of-module capstone."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"PrimitiveReductionsCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Terminal Operations & Reductions FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 009_005 Topic 15: Primitive Reductions Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic15_primitive_reductions_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 5! With terminal operations, reductions, and short-circuiting under your belt, you are ready to conquer the mighty Collectors API in Module 6! — Sukanta Hui"})]})}export{x as default};
