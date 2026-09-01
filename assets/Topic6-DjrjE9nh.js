import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 6: Java 8 Comparator Enhancements Overview: Static Factory Methods & Default Combinators\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class Java8ComparatorEnhancementsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: JAVA 8 Comparator ENHANCEMENTS OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE MODERN JAVA 8 COMPARATOR TOOLKIT (STATIC & DEFAULT METHODS):");\r
        System.out.println("  1. Factory Builders   : 'Comparator.comparing(keyExtractor)', 'comparingInt()', 'comparingDouble()'.");\r
        System.out.println("  2. Chained Multi-Sort : 'thenComparing(secondaryExtractor)', 'thenComparingInt()'.");\r
        System.out.println("  3. Direction Inversion: 'reversed()' (Flips any existing comparator instantly).");\r
        System.out.println("  4. Null-Safe Sorters  : 'Comparator.nullsFirst(c)', 'Comparator.nullsLast(c)'.");\r
        System.out.println("  5. Natural Order Keys : 'Comparator.naturalOrder()', 'Comparator.reverseOrder()'.");\r
\r
        System.out.println("\\n>>> WHY JAVA 8 COMPARATOR FACTORIES ARE REVOLUTIONARY:");\r
        System.out.println("  - Replaces 20-line boilerplate anonymous inner classes with a single declarative line.");\r
        System.out.println("  - Type-safe, readable, and perfectly suited for method references (e.g. Employee::getSalary).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 6: Java 8 Comparator Toolkit\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JAVA 8 COMPARATOR TOOLKIT:\r
   - 'Comparator.comparing(extractor)': creates comparator from getter.\r
   - 'thenComparing(secondary)': adds secondary tie-breaker sort.\r
   - 'reversed()': inverts sort order.\r
   - 'nullsFirst() / nullsLast()': null-safe handling.\r
   - Primitive specializations: 'comparingInt()', 'comparingDouble()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What static factory and default combinator methods were added to 'java.util.Comparator' in Java 8?",shortAnswer:"Java 8 added static factory methods: 'comparing()', 'comparingInt()', 'comparingLong()', 'comparingDouble()', 'naturalOrder()', 'reverseOrder()', 'nullsFirst()', and 'nullsLast()'. It also added default combinator methods: 'thenComparing()', 'thenComparingInt()', and 'reversed()', enabling declarative, multi-level fluent sorting pipelines.",explanation:"Modern functional additions to java.util.Comparator.",hint:"Factory methods (comparing, naturalOrder, nullsFirst) and combinators (thenComparing, reversed).",level:"Intermediate",codeExample:"Comparator.comparing(Person::getLastName).thenComparing(Person::getAge).reversed();"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java 8 Comparators"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Java 8 ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Comparator"})," Enhancements: Static Factories & Default Combinators"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover modern declarative sorting pipelines: cataloging factory builders (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"comparing"}),"), secondary tie-breakers (",e.jsx("code",{className:"text-sky-300 font-mono",children:"thenComparing"}),"), and null-safe wrappers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"Java8ComparatorEnhancementsOverviewDemo.java",highlightLines:[7,10,13,14,15,16,17]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Java 8 Comparator FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 007_008 Topic 6: Java 8 Comparator Toolkit",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic6_java8_comparator_toolkit_note.txt"})}),e.jsx(n,{note:"Java 8 transformed Comparators forever! Instead of writing messy anonymous inner classes with 15 lines of boilerplate, you can now write 'Comparator.comparing(Student::getGpa).reversed()' in one readable line! — Sukanta Hui"})]})}export{h as default};
