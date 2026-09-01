import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 4: The java.util.Comparator<T> Interface: Strategy Pattern via 'int compare(T o1, T o2)'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Comparator;\r
import java.util.List;\r
\r
class StudentCandidate {\r
    private final String name;\r
    private final double gpa;\r
    private final int experienceMonths;\r
\r
    public StudentCandidate(String name, double gpa, int experienceMonths) {\r
        this.name = name;\r
        this.gpa = gpa;\r
        this.experienceMonths = experienceMonths;\r
    }\r
\r
    public String getName() { return name; }\r
    public double getGpa() { return gpa; }\r
    public int getExperienceMonths() { return experienceMonths; }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("[Name=%-10s, GPA=%.2f, Exp=%2d mo]", name, gpa, experienceMonths);\r
    }\r
}\r
\r
// 1. Classical Explicit Strategy Comparator Class (by Experience Descending):\r
class ExperienceComparator implements Comparator<StudentCandidate> {\r
    @Override\r
    public int compare(StudentCandidate o1, StudentCandidate o2) {\r
        // Descending comparison: o2 vs o1:\r
        return Integer.compare(o2.getExperienceMonths(), o1.getExperienceMonths());\r
    }\r
}\r
\r
public class ComparatorStrategyPatternDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: java.util.Comparator<T> STRATEGY PATTERN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentCandidate> candidates = new ArrayList<>(List.of(\r
                new StudentCandidate("Swadeep", 9.85, 24),\r
                new StudentCandidate("Tuhina", 9.95, 12),\r
                new StudentCandidate("Abhronila", 9.75, 36),\r
                new StudentCandidate("Debangshu", 9.60, 6)\r
        ));\r
\r
        // 1. Sort by Strategy 1 (Experience Descending via Class):\r
        candidates.sort(new ExperienceComparator());\r
        System.out.println(">>> 1. Strategy 1: Highest Experience First (Explicit Comparator Class):");\r
        candidates.forEach(c -> System.out.println("  " + c));\r
\r
        // 2. Sort by Strategy 2 (GPA Descending via Lambda Expression):\r
        candidates.sort((c1, c2) -> Double.compare(c2.getGpa(), c1.getGpa()));\r
        System.out.println("\\n>>> 2. Strategy 2: Highest GPA First (Modern Lambda Comparator):");\r
        candidates.forEach(c -> System.out.println("  " + c));\r
\r
        System.out.println("\\n>>> HOW COMPARATOR IMPLEMENTS THE STRATEGY PATTERN (GoF):");\r
        System.out.println("  1. 'StudentCandidate' class remains completely untouched (Open-Closed Principle).");\r
        System.out.println("  2. Client algorithms inject sorting strategies dynamically into 'list.sort(comparator)'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 4: Comparator Strategy Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPARATOR CONTRACT:\r
   - Package: 'java.util.Comparator'.\r
   - Method: 'int compare(T o1, T o2)'.\r
   - Strategy pattern: external, dynamic, interchangeable.\r
   - Functional Interface: allows concise lambda expressions.\r
   - Can sort third-party classes that cannot be modified.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does the 'java.util.Comparator<T>' interface embody the Gang of Four (GoF) Strategy Pattern in Java?",shortAnswer:"The Strategy Pattern defines a family of algorithms and encapsulates each one inside an object. 'Comparator<T>' encapsulates comparison logic ('compare(o1, o2)') into standalone strategy objects or lambdas. The client collection ('list.sort(strategy)') can swap sorting behaviors at runtime without modifying the source code of the target data class, strictly adhering to the Open-Closed Principle.",explanation:"Core OOP design pattern realization in Java Collections.",hint:"Encapsulates sorting algorithms into interchangeable strategy objects/lambdas without modifying the domain class.",level:"Intermediate",codeExample:"candidates.sort(new ExperienceComparator()); // Injects sorting strategy"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Comparator Strategy"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Comparator<T>"})," Interface: Strategy Pattern via ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"compare()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply the Gang of Four Strategy Pattern: decoupling domain models from sorting logic using interchangeable ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Comparator"})," strategy classes and lambda expressions."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ComparatorStrategyPatternDemo.java",highlightLines:[7,10,27,28,29,30,48,49,53,54]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Comparator Strategy FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 007_008 Topic 4: Comparator Strategy Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic4_comparator_strategy_pattern_note.txt"})}),e.jsx(n,{note:"If you are sorting a third-party class that you cannot edit (like String, Date, or a library class), you cannot add Comparable to it! But with Comparator, you can write external sorting strategies to sort anything in the universe! — Sukanta Hui"})]})}export{h as default};
