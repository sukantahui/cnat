import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 2: java.util.function.Predicate<T>: boolean test(T t) Filtering Deep Dive\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.List;\r
import java.util.function.Predicate;\r
\r
class StudentCandidate {\r
    final String name;\r
    final int marks;\r
    final boolean feePaid;\r
\r
    public StudentCandidate(String name, int marks, boolean feePaid) {\r
        this.name = name;\r
        this.marks = marks;\r
        this.feePaid = feePaid;\r
    }\r
}\r
\r
public class PredicateFilteringDeepDiveDemo {\r
\r
    public static void filterStudents(List<StudentCandidate> list, Predicate<StudentCandidate> condition, String label) {\r
        System.out.println(">>> Filtered by: " + label);\r
        for (StudentCandidate student : list) {\r
            if (condition.test(student)) {\r
                System.out.printf("  [MATCH] %s (Marks: %d, Fee Paid: %b)%n",\r
                        student.name, student.marks, student.feePaid);\r
            }\r
        }\r
        System.out.println();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: Predicate<T> FILTERING DEEP DIVE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentCandidate> batch = List.of(\r
                new StudentCandidate("Swadeep Paul", 85, true),\r
                new StudentCandidate("Tuhina Das", 92, true),\r
                new StudentCandidate("Abhronila Das", 45, true),\r
                new StudentCandidate("Debangshu Mukherjee", 78, false)\r
        );\r
\r
        // 1. Filter: Honors Students (Marks >= 80):\r
        Predicate<StudentCandidate> isHonors = student -> student.marks >= 80;\r
        filterStudents(batch, isHonors, "Honors Students (Marks >= 80)");\r
\r
        // 2. Filter: Fee Cleared Candidates:\r
        Predicate<StudentCandidate> isFeeCleared = student -> student.feePaid;\r
        filterStudents(batch, isFeeCleared, "Fee Cleared Candidates");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 2: Predicate<T> Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PREDICATE<T>:\r
   - SAM: 'boolean test(T t)'.\r
   - Used for: Filtering collections, assertions, validations.\r
   - Powers 'Stream.filter(predicate)'.\r
   - Returns primitive 'boolean' (true/false).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How is 'Predicate<T>' utilized to implement reusable, pluggable filtering logic across collections?",shortAnswer:"'Predicate<T>' defines the SAM 'boolean test(T t)'. By accepting a 'Predicate<T>' as a method parameter (e.g. in 'filterStudents(list, predicate)'), the method is completely decoupled from the filtering criteria. Callers can pass any dynamic lambda expression or method reference (e.g. checking marks, verifying fee payment, or validating email format) without modifying the filtering loop algorithm, achieving 100% open-closed principle extensibility.",explanation:"Practical application of Predicate<T> in collections filtering.",hint:"Accepts Predicate<T> as a parameter to decouple the filtering algorithm from the business evaluation criteria.",level:"Intermediate",codeExample:"boolean isAdult = ((Predicate<Integer>) age → age >= 18).test(21);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Predicate<T>"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Predicate<T>"}),": Boolean Condition Testing & Collection Filtering"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct pluggable validation engines: applying ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Predicate<T>"})," ",e.jsx("code",{className:"text-sky-300 font-mono",children:"boolean test(T t)"})," methods to filter domain collections and decouple business criteria."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"PredicateFilteringDeepDiveDemo.java",highlightLines:[7,10,20,21,23,24,40,41,44,45]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Predicate<T> FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 009_002 Topic 2: Predicate<T> Deep Dive",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic2_predicate_deep_dive_note.txt"})}),e.jsx(r,{note:"Predicate is your ultimate gatekeeper! Instead of hardcoding 'if (student.marks >= 80)' inside your methods, pass a 'Predicate<Student>' so the caller can decide whether they want to filter by marks, fees, or attendance! — Sukanta Hui"})]})}export{h as default};
