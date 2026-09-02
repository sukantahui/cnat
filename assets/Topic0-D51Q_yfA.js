import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 0: Sorting Objects in Java: Natural Ordering vs Custom Strategy Ordering\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.Comparator;\r
import java.util.List;\r
\r
class TraineeRecord implements Comparable<TraineeRecord> {\r
    private final int roll;\r
    private final String name;\r
    private final double gpa;\r
\r
    public TraineeRecord(int roll, String name, double gpa) {\r
        this.roll = roll;\r
        this.name = name;\r
        this.gpa = gpa;\r
    }\r
\r
    public int getRoll() { return roll; }\r
    public String getName() { return name; }\r
    public double getGpa() { return gpa; }\r
\r
    // 1. NATURAL ORDERING: Ascending Roll Number\r
    @Override\r
    public int compareTo(TraineeRecord other) {\r
        return Integer.compare(this.roll, other.roll);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("[Roll=%d, Name=%-9s, GPA=%.2f]", roll, name, gpa);\r
    }\r
}\r
\r
public class SortingParadigmOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: SORTING PARADIGMS (NATURAL vs CUSTOM) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<TraineeRecord> trainees = new ArrayList<>(List.of(\r
                new TraineeRecord(104, "Swadeep", 9.85),\r
                new TraineeRecord(101, "Tuhina", 9.95),\r
                new TraineeRecord(103, "Abhronila", 9.75),\r
                new TraineeRecord(102, "Debangshu", 9.60)\r
        ));\r
\r
        // 1. Natural Ordering (Comparable):\r
        Collections.sort(trainees);\r
        System.out.println(">>> 1. Sorted by Natural Ordering (Comparable -> Roll Ascending):");\r
        trainees.forEach(t -> System.out.println("  " + t));\r
\r
        // 2. Custom Strategy Ordering (Comparator):\r
        trainees.sort(Comparator.comparingDouble(TraineeRecord::getGpa).reversed());\r
        System.out.println("\\n>>> 2. Sorted by Custom Strategy (Comparator -> Highest GPA First):");\r
        trainees.forEach(t -> System.out.println("  " + t));\r
\r
        System.out.println("\\n>>> THE 2 SORTING PARADIGMS IN JAVA:");\r
        System.out.println("  1. Natural Ordering (Comparable<T>) : Intrinsic to the class. Implements single 'compareTo()'. Represents default sorting.");\r
        System.out.println("  2. Strategy Ordering (Comparator<T>): External strategy. Implements 'compare(o1, o2)'. Allows infinite dynamic sorting criteria.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 0: Sorting Paradigms in Java\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SORTING PARADIGMS:\r
   - Natural Order: 'Comparable<T>' ('compareTo(o)').\r
   - Custom Strategy: 'Comparator<T>' ('compare(o1, o2)').\r
   - Collections.sort(list) → uses Comparable.\r
   - list.sort(comparator) → uses custom strategy.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the primary difference between 'Natural Ordering' (Comparable) and 'Custom Strategy Ordering' (Comparator) in Java?",shortAnswer:"'Natural Ordering' is intrinsic to a domain class by implementing 'java.lang.Comparable<T>' with a single 'compareTo(T o)' method (defining its default sort sequence). 'Custom Strategy Ordering' is defined externally using 'java.util.Comparator<T>' via 'compare(T o1, T o2)', allowing developers to sort the same objects by multiple dynamic criteria (e.g. by salary descending, by name, by hire date) without modifying the original class source code.",explanation:"Core sorting taxonomy in Java Collections.",hint:"Comparable is internal single default sorting; Comparator is external dynamic strategy sorting.",level:"Beginner",codeExample:"Collections.sort(list); // Comparable natural sort | list.sort(comparator); // Custom sort"}];function b(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 0"}),r.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Sorting Paradigms"})]}),r.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Sorting Objects in Java: Natural Ordering vs Custom Strategy Ordering"}),r.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master object sequencing paradigms: comparing intrinsic default ordering (",r.jsx("code",{className:"text-emerald-300 font-mono",children:"Comparable"}),") against dynamic external sorting strategies (",r.jsx("code",{className:"text-sky-300 font-mono",children:"Comparator"}),")."]})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:o,title:"SortingParadigmOverviewDemo.java",highlightLines:[7,10,26,27,43,44,48,49]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{title:"Sorting Paradigms FAQs",questions:s})}),r.jsx("section",{className:"space-y-4",children:r.jsx(a,{content:i,title:"Module 007_008 Topic 0: Sorting Paradigms",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic0_sorting_paradigms_note.txt"})}),r.jsx(n,{note:"Welcome to Module 007_008! Think of Comparable as a person's natural default sorting (like sorting students by roll number), while Comparator is an external judge sorting them by GPA, height, or name! — Sukanta Hui"})]})}export{b as default};
