import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 12: filter(Predicate) - Selecting Elements Matching Conditions\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.List;\r
import java.util.function.Predicate;\r
\r
public class FilterPredicateDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: FILTER(PREDICATE) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentCourse> enrollments = List.of(\r
            new StudentCourse("Swadeep Paul", "Barrackpore", "Java Core", 92.0, true),\r
            new StudentCourse("Tuhina Das", "Naihati", "Spring Boot", 95.0, true),\r
            new StudentCourse("Abhronila Das", "Shyamnagar", "Java Core", 78.0, false),\r
            new StudentCourse("Debangshu Mukherjee", "Ichapur", "DevOps", 88.0, true),\r
            new StudentCourse("Priya Sharma", "Barrackpore", "Java Core", 84.0, true)\r
        );\r
\r
        // 1. Basic Single Filter\r
        System.out.println("1. Java Core Enrolled Students:");\r
        enrollments.stream()\r
            .filter(e -> "Java Core".equals(e.course()))\r
            .forEach(e -> System.out.println("   - " + e.studentName() + " (" + e.center() + ")"));\r
\r
        // 2. Chained Multiple Filters\r
        System.out.println("\\n2. Active Students with Score >= 85.0 (Chained Filters):");\r
        enrollments.stream()\r
            .filter(StudentCourse::active)\r
            .filter(e -> e.score() >= 85.0)\r
            .forEach(e -> System.out.println("   - " + e.studentName() + " scored: " + e.score()));\r
\r
        // 3. Composed Predicate using and() & or()\r
        Predicate<StudentCourse> isBarrackpore = e -> "Barrackpore".equals(e.center());\r
        Predicate<StudentCourse> isDistinction = e -> e.score() >= 90.0;\r
\r
        System.out.println("\\n3. Barrackpore Center OR Distinction Score:");\r
        enrollments.stream()\r
            .filter(isBarrackpore.or(isDistinction))\r
            .forEach(e -> System.out.println("   - " + e.studentName() + " (" + e.center() + ", " + e.score() + ")"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentCourse(String studentName, String center, String course, double score, boolean active) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 12: filter(Predicate)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FILTER METHOD CONTRACT:\r
   - Signature: 'Stream<T> filter(Predicate<? super T> predicate)'.\r
   - Returns a stream consisting of the elements of this stream that match the given predicate.\r
   - Intermediate & Stateless operation.\r
\r
2. BEST PRACTICES:\r
   - Keep Predicate logic pure (no side-effects or external mutable state).\r
   - Prefer method references where applicable ('filter(String::isBlank)').\r
   - Split complex boolean logic into multiple chained '.filter()' calls for readability and short-circuiting.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the return type of the lambda expression passed into Stream.filter()?",shortAnswer:"The lambda must conform to java.util.function.Predicate<T> and therefore must return a boolean (primitive boolean or boxed Boolean that unboxes to boolean).",explanation:"Returning true keeps the element in the pipeline; returning false discards it.",hint:"Must return boolean.",level:"Beginner",codeExample:"stream.filter(s → s.length() > 5) // returns boolean"},{question:"Is chaining two filter() calls slower than combining them with the && operator?",shortAnswer:"No. Because of stream loop fusion, chaining two filter() calls does not create intermediate lists; both predicates are evaluated sequentially in the same pass per element.",explanation:"Chaining often improves code readability without any measurable performance penalty.",hint:"Loop fusion evaluates chained filters in the same single traversal pass.",level:"Intermediate",codeExample:"stream.filter(Student::isActive).filter(s → s.getScore() > 80)"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"filter(Predicate)"}),": Conditional Element Selection"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Mastering stream filtering: selecting elements matching boolean conditions, composition with Predicate.and()/or(), and type filtering."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"FilterPredicateDemo.java",highlightLines:[18,26,33,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Stream API Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_004 Topic 12: filter(Predicate)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic12_filter_predicate_note.txt"})}),e.jsx(a,{note:"The filter() method takes a Predicate<T> (a function returning boolean). If the predicate returns true, the element passes through; if false, it is dropped! — Sukanta Hui"})]})}export{x as default};
