import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 10: TreeSet Ordering: Natural Ordering (Comparable) vs Custom (Comparator)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Comparator;\r
import java.util.TreeSet;\r
\r
class TraineeProfile implements Comparable<TraineeProfile> {\r
    private final int roll;\r
    private final String name;\r
    private final double gpa;\r
\r
    public TraineeProfile(int roll, String name, double gpa) {\r
        this.roll = roll;\r
        this.name = name;\r
        this.gpa = gpa;\r
    }\r
\r
    public int getRoll() { return roll; }\r
    public String getName() { return name; }\r
    public double getGpa() { return gpa; }\r
\r
    // NATURAL ORDERING: Ascending Roll Number\r
    @Override\r
    public int compareTo(TraineeProfile other) {\r
        return Integer.compare(this.roll, other.roll);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("[Roll=%d, Name=%-8s, GPA=%.2f]", roll, name, gpa);\r
    }\r
}\r
\r
public class TreeSetNaturalVsCustomOrderingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: TreeSet NATURAL vs CUSTOM ORDERING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TraineeProfile t1 = new TraineeProfile(104, "Swadeep", 9.85);\r
        TraineeProfile t2 = new TraineeProfile(101, "Tuhina", 9.95);\r
        TraineeProfile t3 = new TraineeProfile(103, "Abhronila", 9.75);\r
\r
        // 1. NATURAL ORDERING (Comparable: by Roll Ascending):\r
        TreeSet<TraineeProfile> naturalSet = new TreeSet<>();\r
        naturalSet.add(t1);\r
        naturalSet.add(t2);\r
        naturalSet.add(t3);\r
\r
        System.out.println(">>> 1. Natural Ordering (Comparable - by Roll Number):");\r
        naturalSet.forEach(t -> System.out.println("  " + t));\r
\r
        // 2. CUSTOM ORDERING (Comparator: by GPA Descending):\r
        Comparator<TraineeProfile> gpaDescComparator = Comparator.comparingDouble(TraineeProfile::getGpa).reversed();\r
        TreeSet<TraineeProfile> customSet = new TreeSet<>(gpaDescComparator);\r
        customSet.addAll(naturalSet);\r
\r
        System.out.println("\\n>>> 2. Custom Ordering (Comparator - by Highest GPA First):");\r
        customSet.forEach(t -> System.out.println("  " + t));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 10: TreeSet Ordering\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TREESET ORDERING RULES:\r
   - Natural Ordering: Elements must implement 'Comparable<T>'.\r
   - Custom Ordering: Pass 'Comparator<T>' into 'new TreeSet<>(comparator)'.\r
   - Missing Comparable & Comparator → runtime 'ClassCastException'.\r
   - Lambda Comparators: 'Comparator.comparingDouble(...).reversed()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What happens if you insert an object that does NOT implement 'Comparable' into a 'TreeSet' created without a 'Comparator'?",shortAnswer:"The first element may be inserted without issue (in some JDK versions), but adding the second element will immediately throw a runtime 'ClassCastException' ('MyClass cannot be cast to java.lang.Comparable') because TreeSet cannot compare nodes to position them in the Red-Black tree.",explanation:"Mandatory requirement for TreeSet elements.",hint:"Throws runtime ClassCastException because elements must implement Comparable or use a Comparator.",level:"Beginner",codeExample:"TreeSet<Person> set = new TreeSet<>(); set.add(new Person()); // Throws ClassCastException if not Comparable"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Comparable vs Comparator"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["TreeSet Ordering: Natural (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Comparable"}),") vs Custom (",e.jsx("code",{className:"text-sky-400 font-mono",children:"Comparator"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Control sorting behavior: implementing natural ordering via ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Comparable.compareTo()"})," and dynamic custom ordering using modern Java lambda Comparators."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"TreeSetNaturalVsCustomOrderingDemo.java",highlightLines:[7,10,21,22,38,39,47,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"TreeSet Ordering FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 007_003 Topic 10: TreeSet Ordering",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic10_treeset_ordering_note.txt"})}),e.jsx(a,{note:"Remember: Natural sorting belongs to the class itself using Comparable.compareTo(), but if you want custom sorting (like sorting students by GPA descending), pass a Comparator into the TreeSet constructor! — Sukanta Hui"})]})}export{b as default};
