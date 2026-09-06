import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const n=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 0: How Java Achieves Backward Compatibility: The Type Erasure Compiler Mechanism\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class TypeErasureFundamentalsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: TYPE ERASURE & BACKWARD COMPATIBILITY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentNames = new ArrayList<>();\r
        List<Integer> rollNumbers = new ArrayList<>();\r
\r
        System.out.println(">>> 1. Comparing Runtime Classes of Parameterized Collections:");\r
        System.out.println("  studentNames Class : " + studentNames.getClass().getName());\r
        System.out.println("  rollNumbers Class  : " + rollNumbers.getClass().getName());\r
        System.out.println("  Are Runtime Classes Equal? : " + (studentNames.getClass() == rollNumbers.getClass()) + " (Both are raw java.util.ArrayList!)");\r
\r
        System.out.println("\\n>>> WHAT IS TYPE ERASURE?");\r
        System.out.println("  - Generics were introduced in Java 5 (2004).");\r
        System.out.println("  - To ensure 100% binary backward compatibility with pre-Java 5 legacy code, generics exist ONLY at compile time.");\r
        System.out.println("  - The javac compiler checks type safety, then ERASES all generic type arguments (<String>, <Integer>) from bytecode!");\r
        System.out.println("  - At runtime, the JVM has NO knowledge that 'studentNames' was parameterized with <String>!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 0: Type Erasure Mechanism\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TYPE ERASURE ESSENTIALS:\r
   - Compile-time type verification → runtime type erasure.\r
   - Preserves 100% backward compatibility with pre-Java 5 code.\r
   - At runtime, 'List<String>' and 'List<Integer>' are both raw 'ArrayList'.\r
   - JVM bytecode contains zero parameterized type variables.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does 'studentNames.getClass() == rollNumbers.getClass()' evaluate to true when one is 'List<String>' and the other is 'List<Integer>'?",shortAnswer:"Due to Java's 'Type Erasure' compiler mechanism. Generics are a compile-time construct designed for type-checking. During compilation, the compiler strips all generic type arguments from bytecode to ensure backward compatibility with legacy JVMs. At runtime, both instances are represented by the identical raw class 'java.util.ArrayList'.",explanation:"Core JVM architectural decision implemented in Java 5.",hint:"Generic types are erased at compile time; at runtime both instances are raw ArrayList.",level:"Beginner",codeExample:"new ArrayList<String>().getClass() == new ArrayList<Integer>().getClass() // true"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Type Erasure"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"How Java Achieves Backward Compatibility: The Type Erasure Compiler Mechanism"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover JVM internals: analyzing how the Java compiler erases type variables during bytecode generation to guarantee 100% backward compatibility with legacy JVMs."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"TypeErasureFundamentalsDemo.java",highlightLines:[7,10,16,17,18,19,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Type Erasure FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 006_005 Topic 0: Type Erasure Mechanism",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic0_type_erasure_mechanism_note.txt"})}),e.jsx(s,{note:"Generics are a compile-time illusion! The compiler checks all your types to make sure there are no bugs, and then erases them completely so old JVMs can run the code without changes! — Sukanta Hui"})]})}export{g as default};
