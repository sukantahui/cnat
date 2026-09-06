import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 2: The JVM Heap Area - Object Instances & Array Allocations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class JvmHeapAreaDemo {\r
\r
    public static class StudentRecord {\r
        private final int id;\r
        private final String name;\r
        private final double[] examMarks; // Array allocated on heap!\r
\r
        public StudentRecord(int id, String name, double[] examMarks) {\r
            this.id = id;\r
            this.name = name;\r
            this.examMarks = examMarks;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THE JVM HEAP AREA - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Object instance and double array allocated directly on the Heap:\r
        StudentRecord student = new StudentRecord(101, "Swadeep Paul", new double[]{92.5, 88.0, 95.0});\r
\r
        System.out.println(">>> 1. ALLOCATION IN HEAP MEMORY:");\r
        System.out.println("  - 'student' reference variable : Resides on the JVM Thread STACK.");\r
        System.out.println("  - 'StudentRecord' instance     : Resides on the HEAP.");\r
        System.out.println("  - 'examMarks' double[] array   : Resides on the HEAP.\\n");\r
\r
        System.out.println(">>> 2. HEAP MEMORY FLAGS:");\r
        System.out.println("  - Initial Heap Size : -Xms (e.g. -Xms2g)");\r
        System.out.println("  - Maximum Heap Size : -Xmx (e.g. -Xmx4g)");\r
        System.out.println("  - Best Practice     : Set -Xms equal to -Xmx in production to avoid resizing pauses!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 2: The JVM Heap Area\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CHARACTERISTICS OF THE HEAP:\r
   - Created when the JVM starts up and shared among all active threads.\r
   - Stores all class instances, records, strings, and arrays.\r
   - Objects are NEVER explicitly freed by code; the Garbage Collector reclaims unreferenced objects.\r
\r
2. PRODUCTION TUNING FLAGS:\r
   - '-Xms<size>' : Sets initial heap size.\r
   - '-Xmx<size>' : Sets maximum heap size.\r
   - Production Tip: Setting '-Xms == -Xmx' eliminates runtime heap resizing pauses.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Where is the array object created by 'int[] arr = new int[500];' allocated in memory?",shortAnswer:"The array object itself is allocated on the JVM Heap Area. The reference variable 'arr' is stored in the Local Variable Table on the current Thread Stack.",explanation:"All arrays in Java are objects and live on the Heap.",hint:"The array object is on the Heap; the reference variable is on the Stack.",level:"Beginner",codeExample:"int[] arr = new int[500]; // Array object on Heap, arr on Stack"},{question:"Why is it an enterprise best practice to set -Xms equal to -Xmx on production servers?",shortAnswer:"To eliminate GC pauses and OS memory allocation overhead caused by dynamic heap resizing during application traffic spikes.",explanation:"Allocates the complete heap memory footprint upfront at startup.",hint:"Eliminates runtime heap expansion and contraction pauses.",level:"Intermediate",codeExample:"java -Xms4g -Xmx4g -jar production-app.jar"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The JVM Heap Area: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Object Instances & Array Allocation"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The object playground: shared memory where all class instances and arrays are allocated, managed by Garbage Collection algorithms."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"JvmHeapAreaDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Memory Areas FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 010_004 Topic 2: The JVM Heap Area",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic2_jvm_heap_area_note.txt"})}),e.jsx(n,{note:"Every time you write new Student() or new int[100], that object is allocated on the Heap! The Heap is the largest data area in the JVM and is managed entirely by the Garbage Collector! — Sukanta Hui"})]})}export{y as default};
