import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 4: Summarization Collectors - counting(), summing(), averaging(), summarizing()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.DoubleSummaryStatistics;\r
import java.util.List;\r
import java.util.stream.Collectors;\r
\r
public class SummarizationCollectorsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: SUMMARIZATION COLLECTORS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentFeeRecord> feeRecords = List.of(\r
            new StudentFeeRecord("Swadeep Paul", "Barrackpore", 3500.0),\r
            new StudentFeeRecord("Tuhina Das", "Naihati", 5000.0),\r
            new StudentFeeRecord("Abhronila Das", "Shyamnagar", 3500.0),\r
            new StudentFeeRecord("Debangshu Mukherjee", "Ichapur", 6000.0)\r
        );\r
\r
        // 1. Collectors.counting()\r
        long count = feeRecords.stream()\r
            .collect(Collectors.counting());\r
        System.out.println("1. Total Enrolled Students via counting(): " + count);\r
\r
        // 2. Collectors.summingDouble()\r
        double totalFees = feeRecords.stream()\r
            .collect(Collectors.summingDouble(StudentFeeRecord::fee));\r
        System.out.println("2. Total Fees Collected via summingDouble(): ₹" + totalFees);\r
\r
        // 3. Collectors.averagingDouble()\r
        double averageFee = feeRecords.stream()\r
            .collect(Collectors.averagingDouble(StudentFeeRecord::fee));\r
        System.out.println("3. Average Course Fee via averagingDouble(): ₹" + averageFee);\r
\r
        // 4. Collectors.summarizingDouble() -> DoubleSummaryStatistics\r
        DoubleSummaryStatistics stats = feeRecords.stream()\r
            .collect(Collectors.summarizingDouble(StudentFeeRecord::fee));\r
        System.out.println("\\n4. Comprehensive Summary Statistics:");\r
        System.out.println("   - Count   : " + stats.getCount());\r
        System.out.println("   - Min Fee : ₹" + stats.getMin());\r
        System.out.println("   - Max Fee : ₹" + stats.getMax());\r
        System.out.println("   - Sum     : ₹" + stats.getSum());\r
        System.out.println("   - Average : ₹" + stats.getAverage());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentFeeRecord(String name, String center, double fee) {}\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 4: Summarization Collectors\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SUMMARIZATION COLLECTORS SUITE:\r
   - Counting: 'Collectors.counting()' -> Collector<T, ?, Long>.\r
   - Summing:\r
     * 'Collectors.summingInt(ToIntFunction)'\r
     * 'Collectors.summingLong(ToLongFunction)'\r
     * 'Collectors.summingDouble(ToDoubleFunction)'\r
   - Averaging:\r
     * 'Collectors.averagingInt(ToIntFunction)'\r
     * 'Collectors.averagingLong(ToLongFunction)'\r
     * 'Collectors.averagingDouble(ToDoubleFunction)'\r
   - Complete Statistics:\r
     * 'Collectors.summarizingInt(ToIntFunction)' -> IntSummaryStatistics\r
     * 'Collectors.summarizingLong(ToLongFunction)' -> LongSummaryStatistics\r
     * 'Collectors.summarizingDouble(ToDoubleFunction)' -> DoubleSummaryStatistics\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"When should you use Collectors.counting() instead of stream.count()?",shortAnswer:"Use stream.count() for direct standalone stream counting. Use Collectors.counting() when counting is needed as a downstream collector inside groupingBy() or partitioningBy() operations.",explanation:"Collectors.counting() is composable with other collectors.",hint:"Use Collectors.counting() as a downstream collector inside groupingBy().",level:"Intermediate",codeExample:"Map<String, Long> perBranch = students.stream().collect(groupingBy(Student::getBranch, counting()));"},{question:"What does Collectors.averagingDouble() return if the stream is empty?",shortAnswer:"It returns 0.0 (as a primitive double or Double), safely handling division by zero.",explanation:"This avoids generating NaN or throwing arithmetic exceptions.",hint:"Returns 0.0 on empty streams.",level:"Beginner",codeExample:"Double avg = Stream.<Integer>empty().collect(Collectors.averagingDouble(x -> x)); // 0.0"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Summarization Collectors: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"counting(), summing(), averaging() & summarizing()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Statistical analytics via Collectors: gathering counts, sums, arithmetic means, and multi-metric SummaryStatistics objects in object streams."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"SummarizationCollectorsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Collectors Framework FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:a,title:"Module 009_006 Topic 4: Summarization Collectors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic4_summarization_collectors_note.txt"})}),e.jsx(r,{note:"These collectors shine when used as downstream collectors inside groupingBy()! They allow you to compute total revenue per branch or average marks per batch in one line! — Sukanta Hui"})]})}export{x as default};
