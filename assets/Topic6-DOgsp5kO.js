import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 006_003: Bounded Type Parameters & Multiple Bounds\r
 * Topic 6: Recursive Type Bounds: <T extends Comparable<T>> for Self-Comparison\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.List;\r
\r
public class RecursiveTypeBoundsSelfComparisonDemo {\r
\r
    // RECURSIVE TYPE BOUND:\r
    // '<T extends Comparable<T>>' guarantees that 'T' can be compared against other instances of ITS OWN TYPE 'T'!\r
    public static <T extends Comparable<T>> T findMaximum(List<T> items) {\r
        if (items == null || items.isEmpty()) return null;\r
        T max = items.get(0);\r
        for (int i = 1; i < items.size(); i++) {\r
            if (items.get(i).compareTo(max) > 0) {\r
                max = items.get(i);\r
            }\r
        }\r
        return max;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: RECURSIVE TYPE BOUNDS (<T extends Comparable<T>>) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> students = List.of("Swadeep Paul", "Tuhina Das", "Abhronila Das", "Debangshu Mukherjee");\r
        List<Integer> fees = List.of(8500, 9200, 9800, 8500);\r
        List<Double> gpaList = List.of(9.85, 9.90, 9.95, 9.75);\r
\r
        String topAlphabetical = findMaximum(students);\r
        Integer highestFee = findMaximum(fees);\r
        Double highestGpa = findMaximum(gpaList);\r
\r
        System.out.println(">>> 1. Recursive Bound Maximum Evaluations:");\r
        System.out.println("  Top Alphabetical Student : " + topAlphabetical);\r
        System.out.println("  Highest Fee Collected    : ₹" + highestFee);\r
        System.out.println("  Highest GPA Scored       : " + highestGpa);\r
\r
        System.out.println("\\n>>> WHY RECURSIVE TYPE BOUNDS ARE CALLED 'RECURSIVE':");\r
        System.out.println("  1. Self-Referential: The type variable 'T' appears inside its own bounding constraint ('extends Comparable<T>').");\r
        System.out.println("  2. Mutual Comparability: Ensures elements in the collection can be compared with one another, preventing type collisions.");\r
        System.out.println("  3. Ubiquitous in Collections: Used in 'Collections.max()', 'Collections.sort()', and 'TreeSet'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_003: Bounded Type Parameters & Multiple Bounds\r
Topic 6: Recursive Type Bounds\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RECURSIVE TYPE BOUNDS:\r
   - '<T extends Comparable<T>>'.\r
   - Self-referential type constraint.\r
   - Guarantees mutual comparability between instances of 'T'.\r
   - Powers 'Collections.max()' and 'Collections.sort()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a 'Recursive Type Bound' in Java Generics, and why is '<T extends Comparable<T>>' the canonical example?",shortAnswer:"A Recursive Type Bound is a generic declaration where a type variable appears within its own bounding constraint. In '<T extends Comparable<T>>', 'T' is bound to 'Comparable<T>', ensuring that elements of type 'T' can be compared directly to other elements of the exact same type 'T' via 'compareTo(T other)', eliminating runtime type mismatches during sorting and searching.",explanation:"Effective Java Item 30: Use recursive type bounds for mutual comparability.",hint:"A bound where type variable T appears inside its own bound, guaranteeing mutual comparability.",level:"Advanced",codeExample:"public static <T extends Comparable<T>> T max(Collection<T> c) { ... }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_003 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Recursive Bounds"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Recursive Type Bounds: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"<T extends Comparable<T>>"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master mutual comparability: implementing self-referential generic type bounds (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"<T extends Comparable<T>>"}),") to power sorting and extreme search algorithms."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"RecursiveTypeBoundsSelfComparisonDemo.java",highlightLines:[7,10,13,14,17,18,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Recursive Bounds FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 006_003 Topic 6: Recursive Type Bounds",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_003_topic6_recursive_type_bounds_note.txt"})}),e.jsx(r,{note:"'<T extends Comparable<T>>' is one of the most elegant concepts in Java! It says: 'T is any class that knows how to compare itself with another T'! That's how Collections.max() works for Strings, Dates, and Integers! — Sukanta Hui"})]})}export{h as default};
