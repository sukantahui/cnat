import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const n=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 7: Declarative Sorting: Comparator.comparing() & Primitive comparingInt/Double\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Comparator;\r
import java.util.List;\r
\r
class AccoTaxFaculty {\r
    private final String name;\r
    private final double salary;\r
    private final int experienceYears;\r
\r
    public AccoTaxFaculty(String name, double salary, int experienceYears) {\r
        this.name = name;\r
        this.salary = salary;\r
        this.experienceYears = experienceYears;\r
    }\r
\r
    public String getName() { return name; }\r
    public double getSalary() { return salary; }\r
    public int getExperienceYears() { return experienceYears; }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("[Faculty: %-10s | Salary: ₹%,.2f | Exp: %2d yrs]", name, salary, experienceYears);\r
    }\r
}\r
\r
public class ComparatorComparingMethodsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: Comparator.comparing() & PRIMITIVE SPECIALIZATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<AccoTaxFaculty> facultyList = new ArrayList<>(List.of(\r
                new AccoTaxFaculty("Swadeep", 45000.0, 5),\r
                new AccoTaxFaculty("Tuhina", 55000.0, 8),\r
                new AccoTaxFaculty("Abhronila", 42000.0, 3),\r
                new AccoTaxFaculty("Debangshu", 60000.0, 10)\r
        ));\r
\r
        // 1. Comparator.comparing() with Method Reference:\r
        facultyList.sort(Comparator.comparing(AccoTaxFaculty::getName));\r
        System.out.println(">>> 1. Sorted by Name (Comparator.comparing(AccoTaxFaculty::getName)):");\r
        facultyList.forEach(f -> System.out.println("  " + f));\r
\r
        // 2. Primitive Specialization: comparingDouble() (Zero Auto-Boxing Overhead!):\r
        facultyList.sort(Comparator.comparingDouble(AccoTaxFaculty::getSalary).reversed());\r
        System.out.println("\\n>>> 2. Sorted by Salary Descending (comparingDouble().reversed()):");\r
        facultyList.forEach(f -> System.out.println("  " + f));\r
\r
        // 3. Primitive Specialization: comparingInt():\r
        facultyList.sort(Comparator.comparingInt(AccoTaxFaculty::getExperienceYears));\r
        System.out.println("\\n>>> 3. Sorted by Experience Ascending (comparingInt()):");\r
        facultyList.forEach(f -> System.out.println("  " + f));\r
\r
        System.out.println("\\n>>> PERFORMANCE BENEFIT OF comparingInt / comparingDouble:");\r
        System.out.println("  - 'Comparator.comparing(f -> f.getSalary())' auto-boxes double -> Double, allocating thousands of wrapper objects.");\r
        System.out.println("  - 'Comparator.comparingDouble(AccoTaxFaculty::getSalary)' uses raw primitive double comparisons (ZERO heap allocations!).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 7: Comparator.comparing & Primitive Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPARATOR FACTORIES:\r
   - 'Comparator.comparing(Getter)': for object keys (e.g. String).\r
   - 'Comparator.comparingInt(Getter)': for primitive int.\r
   - 'Comparator.comparingDouble(Getter)': for primitive double.\r
   - 'reversed()': inverts sort direction.\r
   - Primitive specializations prevent auto-boxing GC churn.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why should you prefer 'Comparator.comparingDouble()' over 'Comparator.comparing()' when comparing primitive double fields?",shortAnswer:"'Comparator.comparing(keyExtractor)' requires the keyExtractor to return an Object reference (or uses Comparable), forcing the JVM to auto-box primitive 'double' values into heap-allocated 'Double' wrapper objects on every comparison. In contrast, 'Comparator.comparingDouble()' takes a 'ToDoubleFunction' primitive lambda and compares raw primitives directly via 'Double.compare()', eliminating all auto-boxing and heap garbage collection overhead.",explanation:"Standard Java performance tuning guideline for stream and collection sorting.",hint:"comparingDouble avoids auto-boxing primitive double to Double, eliminating heap allocation.",level:"Intermediate",codeExample:"list.sort(Comparator.comparingDouble(Employee::getSalary)); // Zero auto-boxing"}];function y(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 7"}),r.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Comparator.comparing"})]}),r.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Declarative Sorting: ",r.jsx("code",{className:"text-emerald-400 font-mono",children:"Comparator.comparing()"})," & Primitive Specializations"]}),r.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct fluent sorting pipelines: utilizing method references (",r.jsx("code",{className:"text-emerald-300 font-mono",children:"Employee::getSalary"}),") and primitive specializations (",r.jsx("code",{className:"text-sky-300 font-mono",children:"comparingInt"}),", ",r.jsx("code",{className:"text-amber-300 font-mono",children:"comparingDouble"}),") to eliminate auto-boxing overhead."]})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:n,title:"ComparatorComparingMethodsDemo.java",highlightLines:[7,10,27,28,32,33,37,38]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(a,{title:"Comparator.comparing FAQs",questions:l})}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{content:i,title:"Module 007_008 Topic 7: Comparator.comparing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic7_comparator_comparing_note.txt"})}),r.jsx(o,{note:"Whenever you are sorting by a primitive field like salary, price, or age, always use 'comparingDouble()' or 'comparingInt()'! That avoids allocating millions of temporary wrapper objects in memory! — Sukanta Hui"})]})}export{y as default};
