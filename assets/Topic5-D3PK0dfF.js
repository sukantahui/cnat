import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const n=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 5: When to Choose Comparable vs Comparator: Comprehensive Comparison Matrix\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class ComparableVsComparatorComparisonMatrixDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: Comparable vs Comparator MATRIX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE COMPLETE COMPARISON MATRIX:");\r
        System.out.println("+--------------------+---------------------------+---------------------------+");\r
        System.out.println("| Feature            | java.lang.Comparable<T>   | java.util.Comparator<T>   |");\r
        System.out.println("+--------------------+---------------------------+---------------------------+");\r
        System.out.println("| Package            | java.lang (Auto-imported) | java.util (Requires import|");\r
        System.out.println("| Method Signature   | int compareTo(T o)        | int compare(T o1, T o2)   |");\r
        System.out.println("| Arguments Count    | 1 argument ('this' vs 'o')| 2 arguments ('o1' vs 'o2')|");\r
        System.out.println("| Sorting Type       | Natural / Default Sorting | Custom / Strategy Sorting |");\r
        System.out.println("| Number of Sorts    | Only 1 sort per class     | Unlimited sorting logic   |");\r
        System.out.println("| Source Code Needed?| YES (Must modify class)   | NO (Works on any class)   |");\r
        System.out.println("| Lambda Support?    | NO (Class implements it)  | YES (Functional Interface)|");\r
        System.out.println("| Collection Method  | Collections.sort(list)    | list.sort(comparator)     |");\r
        System.out.println("+--------------------+---------------------------+---------------------------+");\r
\r
        System.out.println("\\n>>> DECISION GUIDE: WHEN TO USE WHICH:");\r
        System.out.println("  - Choose Comparable : When there is an obvious, natural default sort order for your entity (e.g. Employee ID, Date chronological order).");\r
        System.out.println("  - Choose Comparator : When users need to sort by multiple dynamic criteria (e.g. Salary, Name, Joining Date, Department).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 5: Comparable vs Comparator Matrix\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPARABLE vs COMPARATOR:\r
   - Comparable: 'java.lang', 'compareTo(o)', 1 natural sort, requires source edits.\r
   - Comparator: 'java.util', 'compare(o1, o2)', multiple custom sorts, lambda-friendly.\r
   - Rule of Thumb: Implement Comparable for default natural sort; use Comparator for ad-hoc sorts.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Summarize the 4 key differences between 'Comparable<T>' and 'Comparator<T>' in Java.",shortAnswer:"1. 'Package & Method': Comparable is in 'java.lang' with 'compareTo(T o)' (1 argument); Comparator is in 'java.util' with 'compare(T o1, T o2)' (2 arguments). 2. 'Flexibility': Comparable provides a single default natural ordering; Comparator allows multiple independent sorting strategies. 3. 'Source Modification': Comparable requires modifying the domain class; Comparator works externally without touching domain code. 4. 'Functional API': Comparator is a '@FunctionalInterface' supporting lambdas and method chaining.",explanation:"Universal Java interview comparison question.",hint:"1 arg compareTo in java.lang vs 2 args compare in java.util; single natural sort vs multiple dynamic strategies.",level:"Intermediate",codeExample:"class Student implements Comparable<Student> { ... } // vs // Comparator<Student> byGpa = ...;"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Comparison Matrix"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["When to Choose ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Comparable"})," vs ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Comparator"}),": Comprehensive Decision Matrix"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize Java sorting interfaces: evaluating packages, method signatures, source modification constraints, and lambda support across the comparison matrix."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"ComparableVsComparatorComparisonMatrixDemo.java",highlightLines:[7,10,13,14,15,16,17,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Comparison Matrix FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 007_008 Topic 5: Comparable vs Comparator Matrix",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic5_comparable_vs_comparator_matrix_note.txt"})}),e.jsx(o,{note:"Remember this in interviews: Comparable has 1 argument ('compareTo(o)') because 'this' is the first object! Comparator has 2 arguments ('compare(o1, o2)') because it is an external referee comparing two outside objects! — Sukanta Hui"})]})}export{g as default};
