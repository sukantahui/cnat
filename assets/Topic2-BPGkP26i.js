import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 2: The 3 Types of Wildcards: Unbounded, Upper Bounded & Lower Bounded Taxonomy\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.List;\r
\r
public class ThreeWildcardTypesTaxonomyDemo {\r
\r
    // 1. UNBOUNDED WILDCARD: Accepts ANY list:\r
    public static void processUnbounded(List<?> list) {\r
        System.out.println("  1. Unbounded (List<?>): Size=" + list.size());\r
    }\r
\r
    // 2. UPPER BOUNDED WILDCARD (Covariance): Accepts Number & all subtypes (Integer, Double, Long):\r
    public static void processUpperBounded(List<? extends Number> list) {\r
        double sum = 0;\r
        for (Number n : list) sum += n.doubleValue();\r
        System.out.printf("  2. Upper Bounded (List<? extends Number>): Sum=%.2f%n", sum);\r
    }\r
\r
    // 3. LOWER BOUNDED WILDCARD (Contravariance): Accepts Integer & all supertypes (Number, Object):\r
    public static void processLowerBounded(List<? super Integer> list) {\r
        list.add(999); // WRITE-SAFE: Adding Integer is 100% legal!\r
        System.out.println("  3. Lower Bounded (List<? super Integer>): Injected 999 successfully.");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THE 3 TYPES OF WILDCARDS TAXONOMY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> names = List.of("Swadeep", "Tuhina");\r
        List<Double> doubles = List.of(10.5, 20.5, 30.0);\r
\r
        System.out.println(">>> Executing the 3 Wildcard Types:");\r
        processUnbounded(names);\r
        processUpperBounded(doubles);\r
\r
        System.out.println("\\n>>> THE 3 WILDCARD FLAVORS AT A GLANCE:");\r
        System.out.println("+-------------------+-----------------------------+------------------------------------+");\r
        System.out.println("| Wildcard Type     | Syntax                      | Semantic Meaning                   |");\r
        System.out.println("+-------------------+-----------------------------+------------------------------------+");\r
        System.out.println("| Unbounded         | List<?>                     | Any unknown type                   |");\r
        System.out.println("| Upper Bounded     | List<? extends T>           | T or any subtype of T (Covariant)  |");\r
        System.out.println("| Lower Bounded     | List<? super T>             | T or any supertype of T (Contravariant)|");\r
        System.out.println("+-------------------+-----------------------------+------------------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 2: 3 Types of Wildcards\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 3 WILDCARD TYPES:\r
   - 'List<?>': Unbounded.\r
   - 'List<? extends T>': Upper bounded (T and subtypes).\r
   - 'List<? super T>': Lower bounded (T and supertypes).\r
   - Enables covariance and contravariance in Java collections.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What are the 3 distinct types of wildcards supported in Java Generics?",shortAnswer:"1. 'Unbounded Wildcard' ('List<?>'): represents any unknown type. 2. 'Upper Bounded Wildcard' ('List<? extends T>'): represents 'T' or any subtype of 'T' (Covariance). 3. 'Lower Bounded Wildcard' ('List<? super T>'): represents 'T' or any supertype of 'T' (Contravariance).",explanation:"Complete taxonomy forming the basis of the PECS principle.",hint:"Unbounded (<?>), Upper Bounded (<? extends T>), and Lower Bounded (<? super T>).",level:"Beginner",codeExample:"List<?> a; List<? extends Number> b; List<? super Integer> c;"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Wildcard Taxonomy"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"The 3 Types of Wildcards: Unbounded, Upper Bounded & Lower Bounded"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master generic variance: categorizing wildcards into Unbounded (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"<?>"}),"), Covariant Upper Bounded (",e.jsx("code",{className:"text-sky-300 font-mono",children:"<? extends T>"}),"), and Contravariant Lower Bounded (",e.jsx("code",{className:"text-purple-300 font-mono",children:"<? super T>"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"ThreeWildcardTypesTaxonomyDemo.java",highlightLines:[7,10,13,14,18,19,20,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Wildcard Taxonomy FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:a,title:"Module 006_004 Topic 2: 3 Types of Wildcards",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic2_three_types_of_wildcards_note.txt"})}),e.jsx(s,{note:"Mastering these 3 wildcard variations—Unbounded, 'extends' for reading, and 'super' for writing—is what separates a beginner Java programmer from an expert enterprise architect! — Sukanta Hui"})]})}export{T as default};
