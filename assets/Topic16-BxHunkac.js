import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 16: sorted() - Natural Ordering & Custom Comparator Chains\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.Comparator;\r
import java.util.List;\r
\r
public class SortedComparatorsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: SORTED() & COMPARATORS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentResult> results = List.of(\r
            new StudentResult("Swadeep Paul", "Barrackpore", 88.5),\r
            new StudentResult("Tuhina Das", "Naihati", 95.0),\r
            new StudentResult("Abhronila Das", "Shyamnagar", 88.5),\r
            new StudentResult("Debangshu Mukherjee", "Ichapur", 92.0),\r
            new StudentResult("Priya Sharma", "Barrackpore", 76.0)\r
        );\r
\r
        // 1. Natural Sort on Strings (Alphabetical)\r
        List<String> names = List.of("Swadeep", "Tuhina", "Abhronila", "Debangshu");\r
        System.out.println("1. Natural Alphabetical Sort: " + names.stream().sorted().toList());\r
\r
        // 2. Custom Comparator: Sorted by Score Descending (Highest First)\r
        System.out.println("\\n2. Sorted by Score (Descending):");\r
        results.stream()\r
            .sorted(Comparator.comparingDouble(StudentResult::score).reversed())\r
            .forEach(r -> System.out.println("   - " + r.name() + ": " + r.score() + "%"));\r
\r
        // 3. Multi-level Comparator Chain: Score Descending, then Name Ascending for ties\r
        System.out.println("\\n3. Chained Sort (Score Descending -> Name Alphabetical for ties):");\r
        results.stream()\r
            .sorted(\r
                Comparator.comparingDouble(StudentResult::score).reversed()\r
                    .thenComparing(StudentResult::name)\r
            )\r
            .forEach(r -> System.out.println("   - " + r.name() + " (" + r.center() + "): " + r.score() + "%"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentResult(String name, String center, double score) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 16: sorted() Operation & Comparators\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SORTED METHOD CONTRACT:\r
   - 'Stream<T> sorted()' → Natural ordering (Requires elements to implement 'Comparable<T>').\r
   - 'Stream<T> sorted(Comparator<? super T> comparator)' → Custom ordering.\r
   - Intermediate & Fully Stateful operation (requires buffering ALL elements).\r
\r
2. COMPARATOR FACTORY METHODS:\r
   - 'Comparator.comparing(Function<T, U> keyExtractor)'\r
   - 'Comparator.comparingInt()', 'comparingDouble()', 'comparingLong()' (Zero boxing).\r
   - '.reversed()' → Reverses current sorting order.\r
   - '.thenComparing(Comparator or Function)' → Secondary tie-breaker sort.\r
   - 'Comparator.nullsFirst(comp)' / 'Comparator.nullsLast(comp)' → Null safety.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What happens if you call .sorted() without parameters on a Stream of objects that do NOT implement Comparable?",shortAnswer:"A ClassCastException is thrown at runtime when the terminal operation executes, stating that the object cannot be cast to java.lang.Comparable.",explanation:"Always provide an explicit Comparator or implement Comparable on the domain class.",hint:"Throws ClassCastException at runtime.",level:"Beginner",codeExample:"stream.sorted(Comparator.comparing(User::getName)) // Safe custom comparator"},{question:"How does thenComparing() work for multi-attribute sorting?",shortAnswer:"thenComparing() defines a secondary tie-breaker comparator that is only invoked when the primary comparator evaluates two elements as equal (compare() returns 0).",explanation:"Enables declarative multi-column sorting similar to SQL 'ORDER BY score DESC, name ASC'.",hint:"Invoked only when primary comparator produces a tie (returns 0).",level:"Intermediate",codeExample:"Comparator.comparing(Student::getScore).reversed().thenComparing(Student::getName)"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"sorted()"}),": Natural & Custom Comparator Ordering"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Ordering stream elements: natural Comparable order, custom Comparator lambdas, chaining comparators with thenComparing(), and null handling."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"SortedComparatorsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Stream API Pipeline FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 009_004 Topic 16: sorted() & Comparators",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic16_sorted_comparators_note.txt"})}),e.jsx(n,{note:"Remember: sorted() without arguments requires elements to implement Comparable<T>, otherwise you get a ClassCastException at runtime! For custom ordering, pass a Comparator like Comparator.comparing(Student::getScore).reversed(). — Sukanta Hui"})]})}export{S as default};
