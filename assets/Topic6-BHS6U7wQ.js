import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 006_002: Generic Methods, Constructors & Type Inference\r
 * Topic 6: Generic Methods with Array Parameters (printArray, arrayInspection)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
public class GenericMethodArrayProcessingDemo {\r
\r
    // Generic Method accepting generic array argument:\r
    public static <T> void printArray(String label, T[] array) {\r
        System.out.print("  " + label + " [" + array.length + " elements]: ");\r
        for (int i = 0; i < array.length; i++) {\r
            System.out.print(array[i]);\r
            if (i < array.length - 1) System.out.print(", ");\r
        }\r
        System.out.println();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: GENERIC ARRAY METHOD PROCESSING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String[] students = {"Swadeep Paul", "Tuhina Das", "Abhronila Das", "Debangshu Mukherjee"};\r
        Integer[] rollNumbers = {101, 102, 103, 104};\r
        Double[] scores = {98.5, 96.0, 99.2, 94.8};\r
        Character[] grades = {'A', 'A', 'O', 'A'};\r
\r
        System.out.println(">>> Printing Heterogeneous Arrays using Single Generic Method:");\r
        printArray("Students", students);\r
        printArray("Rolls", rollNumbers);\r
        printArray("Scores", scores);\r
        printArray("Grades", grades);\r
\r
        System.out.println("\\n>>> CRITICAL JAVA RULE: PRIMITIVE ARRAYS CANNOT BE PASSED DIRECTLY:");\r
        System.out.println("  - 'int[]' cannot be passed as 'T[]' because 'int' is a primitive and cannot substitute for Object 'T'.");\r
        System.out.println("  - Always use wrapper arrays ('Integer[]', 'Double[]', etc.) with generic methods!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_002: Generic Methods, Constructors & Type Inference\r
Topic 6: Generic Array Processing\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GENERIC ARRAYS METHOD RULES:\r
   - 'public static <T> void printArray(T[] array)'.\r
   - Works seamlessly with any reference array (String[], Integer[]).\r
   - Incompatible with primitive arrays (int[], double[]).\r
   - Boxed wrapper arrays must be used.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why can you NOT pass a primitive array (e.g. 'int[]') to a generic method defined as '<T> void printArray(T[] arr)'?",shortAnswer:"In Java Generics, type parameter 'T' can only be instantiated with reference types extending 'java.lang.Object'. A primitive 'int' is not an Object. While 'int[]' is an Object, it is NOT an array of Objects ('Object[]' or 'T[]'). To pass numeric arrays to generic methods, you must use boxed wrapper arrays like 'Integer[]' or 'Double[]'.",explanation:"Generics in Java operate exclusively on reference types due to type erasure.",hint:"Primitive 'int' is not an Object; wrapper arrays ('Integer[]') must be used.",level:"Intermediate",codeExample:"Integer[] arr = {1, 2, 3}; printArray(arr); // Valid (int[] fails compilation)"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_002 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Generic Arrays"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Generic Methods with Array Arguments: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"<T> void printArray(T[] array)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Process polymorphic arrays: designing generic array iteration utilities and understanding why boxed wrapper arrays are mandatory over primitives."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"GenericMethodArrayProcessingDemo.java",highlightLines:[7,10,11,12,13,23,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Generic Arrays FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 006_002 Topic 6: Generic Arrays",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_002_topic6_generic_arrays_note.txt"})}),e.jsx(a,{note:"Remember: Generics only work with Objects! You cannot pass a primitive 'int[]' to '<T> void print(T[] a)'. You must use 'Integer[]' instead! — Sukanta Hui"})]})}export{g as default};
