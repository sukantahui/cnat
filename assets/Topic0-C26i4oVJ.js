import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 0: Why Arrays are Insufficient: Fixed Capacity, Manual Shifts & Inflexibility\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.List;\r
\r
public class ArraysVsCollectionsComparisonDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY ARRAYS ARE INSUFFICIENT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. ARRAY LIMITATIONS (Fixed Capacity, Manual Insertion Logic):\r
        String[] studentArray = new String[2]; // Fixed size 2\r
        studentArray[0] = "Swadeep Paul";\r
        studentArray[1] = "Tuhina Das";\r
\r
        // To add a 3rd student, we must manually allocate a new bigger array and copy elements:\r
        String[] expandedArray = new String[studentArray.length + 1];\r
        System.arraycopy(studentArray, 0, expandedArray, 0, studentArray.length);\r
        expandedArray[2] = "Abhronila Das";\r
\r
        System.out.println(">>> 1. Primitive Array (Requires Manual Resizing):");\r
        System.out.println("  " + Arrays.toString(expandedArray));\r
\r
        // 2. JAVA COLLECTIONS FRAMEWORK (Dynamic Auto-Resizing & High-Level APIs):\r
        List<String> studentList = new ArrayList<>();\r
        studentList.add("Swadeep Paul");\r
        studentList.add("Tuhina Das");\r
        studentList.add("Abhronila Das"); // Auto-resizes seamlessly!\r
        studentList.remove("Tuhina Das"); // In-place deletion without manual shifts!\r
\r
        System.out.println("\\n>>> 2. JCF Dynamic Collection (Zero Boilerplate):");\r
        System.out.println("  " + studentList);\r
\r
        System.out.println("\\n>>> THE 4 CRITICAL DEFICIENCIES OF ARRAYS:");\r
        System.out.println("  1. Fixed Size: Cannot grow or shrink dynamically once created in memory.");\r
        System.out.println("  2. Manual Shifts: Deleting element at index 0 requires manually shifting all elements left.");\r
        System.out.println("  3. Lack of Data Structure Models: Arrays cannot enforce uniqueness (Sets) or key-value lookup (Maps).");\r
        System.out.println("  4. Generics Incompatibility: Arrays are covariant and clash with generic type safety.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 0: Why Arrays are Insufficient\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARRAYS VS COLLECTIONS:\r
   - Arrays: Fixed size, manual arraycopy, lacks Set/Map semantics.\r
   - Collections: Dynamic auto-growth, O(1) searches, rich APIs.\r
   - Solves array covariance issues via generic type safety.\r
   - Standard backbone of modern Java applications.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the primary architectural reasons that make raw Java arrays insufficient for complex enterprise application development?",shortAnswer:"1. 'Fixed Capacity': Arrays cannot grow or shrink dynamically after heap allocation. 2. 'No High-Level APIs': Inserting or deleting elements requires manual array reallocation and 'System.arraycopy' shifts. 3. 'Single Dimensional Semantics': Arrays cannot model hash-based uniqueness (Sets), priority heaps (Queues), or key-value indexing (Maps). 4. 'Array Covariance Flaws': Array runtime typing clashes with compile-time generic invariance.",explanation:"Led Sun Microsystems to introduce the Java Collections Framework (JCF) in Java 1.2.",hint:"Fixed size, manual resizing/shifting, lack of Set/Map abstractions, and array covariance issues.",level:"Beginner",codeExample:'List<String> list = new ArrayList<>(); list.add("Swadeep"); // Dynamic resizing'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JCF Motivation"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Why Arrays are Insufficient for Modern Software: Fixed Capacity & Inflexibility"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover why arrays fell short: examining fixed capacity constraints, manual element shifting overhead, and the architectural motivation behind the Java Collections Framework."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ArraysVsCollectionsComparisonDemo.java",highlightLines:[7,10,16,17,21,22,23,29,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Arrays vs Collections FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 007_001 Topic 0: Why Arrays are Insufficient",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic0_why_arrays_insufficient_note.txt"})}),e.jsx(t,{note:"Welcome to Segment 7: Java Collections Framework! Arrays were fine in the 1990s, but modern enterprise software needs dynamic resizing, hash lookup, uniqueness checks, and FIFO queues! JCF gives you all of this ready out of the box! — Sukanta Hui"})]})}export{x as default};
