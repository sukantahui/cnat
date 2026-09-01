import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 6: Calculating Sum, Min, Max & Custom Business Aggregations via reduce()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
\r
public class CustomAggregationsReduceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: CUSTOM AGGREGATIONS WITH REDUCE() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<CourseEnrollment> enrollments = List.of(\r
            new CourseEnrollment("Java Core", 3500.0, 18),\r
            new CourseEnrollment("Spring Boot", 5000.0, 12),\r
            new CourseEnrollment("Microservices", 6000.0, 8),\r
            new CourseEnrollment("Full Stack DevOps", 8500.0, 10)\r
        );\r
\r
        // 1. Total Revenue: sum of (fee * studentCount)\r
        double totalRevenue = enrollments.stream()\r
            .map(e -> e.fee() * e.studentCount())\r
            .reduce(0.0, Double::sum);\r
        System.out.println("1. Total Projected Revenue: ₹" + totalRevenue);\r
\r
        // 2. Highest Course Fee via reduce(BinaryOperator)\r
        CourseEnrollment mostExpensive = enrollments.stream()\r
            .reduce((c1, c2) -> c1.fee() >= c2.fee() ? c1 : c2)\r
            .orElseThrow();\r
        System.out.println("2. Most Premium Course: " + mostExpensive.title() + " (₹" + mostExpensive.fee() + ")");\r
\r
        // 3. Custom Business Accumulator: Building a formatted batch report summary\r
        String batchSummary = enrollments.stream()\r
            .map(e -> String.format("[%s: %d students]", e.title(), e.studentCount()))\r
            .reduce("ACADEMY BATCH REPORT: ", (accum, item) -> accum + " | " + item);\r
        System.out.println("\\n3. Formatted Batch Summary:\\n   " + batchSummary);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record CourseEnrollment(String title, double fee, int studentCount) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 6: Custom Aggregations via reduce()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMMON AGGREGATION PATTERNS VIA REDUCE:\r
   - Sum: '.reduce(0, Integer::sum)' or '.reduce(0.0, Double::sum)'\r
   - Min: '.reduce(BinaryOperator.minBy(Comparator))'\r
   - Max: '.reduce(BinaryOperator.maxBy(Comparator))'\r
   - Product: '.reduce(1, (a, b) → a * b)'\r
   - String Concatenation: '.reduce("", (a, b) → a + b)'\r
\r
2. WHEN TO PREFER SPECIALIZED APIS OVER REDUCE:\r
   - Numeric Sum/Average: Prefer 'IntStream.sum()' / 'average()' (faster, unboxed).\r
   - Collection building: Prefer 'collect(Collectors.toList())' (mutative collection is O(1) vs reduce copying).\r
   - String Joining: Prefer 'collect(Collectors.joining(", "))' (uses StringBuilder internally).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why should you NOT use reduce() to accumulate elements into an ArrayList?",shortAnswer:"reduce() is designed for functional immutability where each accumulation step returns a new value. Using reduce() to create and copy ArrayLists incurs O(N^2) overhead; use collect(Collectors.toList()) instead, which mutates a single container efficiently.",explanation:"collect() performs mutable reduction, whereas reduce() performs immutable value reduction.",hint:"reduce() copies on each step; collect() uses mutable accumulation.",level:"Advanced",codeExample:"// BAD: O(N^2) allocation overhead!\\nlist.stream().reduce(new ArrayList<>(), (acc, x) → { acc.add(x); return acc; });"},{question:"How can you find the object with the maximum value using reduce and a Comparator?",shortAnswer:"Using BinaryOperator.maxBy(comparator) as the accumulator argument in reduce().",explanation:"BinaryOperator.maxBy(comp) returns a BinaryOperator that yields the greater of two elements according to the comparator.",hint:"BinaryOperator.maxBy(comparator)",level:"Intermediate",codeExample:"Optional<Student> top = list.stream().reduce(BinaryOperator.maxBy(Comparator.comparing(Student::getScore)));"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Calculating ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Sum, Min, Max & Custom Aggregations"})," via reduce()"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Practical mastery: implementing enterprise aggregations, running totals, weighted averages, and complex business reduction rules."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"CustomAggregationsReduceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Terminal Operations & Reductions FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_005 Topic 6: Custom Aggregations with reduce()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic6_custom_aggregations_reduce_note.txt"})}),e.jsx(a,{note:"While specialized methods like sum() and Collectors exist, mastering reduce() gives you superpowers to build ANY custom mathematical or statistical formula that standard libraries don't support! — Sukanta Hui"})]})}export{h as default};
