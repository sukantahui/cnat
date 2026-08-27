import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 3: Autoboxing: Automatic Primitive to Wrapper Object Conversion\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class AutoboxingFoundationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: AUTOBOXING FOUNDATIONS (JAVA 5+) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int primitiveAge = 22;\r
\r
        // 1. Explicit Boxing (Legacy Java 1.4 syntax - Deprecated constructor!):\r
        // Integer legacyBoxed = new Integer(primitiveAge); // DON'T USE!\r
\r
        // 2. Modern AUTOBOXING (Introduced in Java 5):\r
        // Compiler automatically converts primitive 'int' into 'Integer' object!\r
        Integer modernBoxed = primitiveAge;\r
\r
        System.out.println(">>> 1. Autoboxed Variable State:");\r
        System.out.println("  primitiveAge : " + primitiveAge + " (int on Stack)");\r
        System.out.println("  modernBoxed  : " + modernBoxed + " (Integer on Heap)");\r
\r
        System.out.println("\\n>>> 2. What the Java Compiler Actually Generates in Bytecode:");\r
        System.out.println("  Source Code : Integer x = 42;");\r
        System.out.println("  Bytecode    : Integer x = Integer.valueOf(42);");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 3: Autoboxing Foundations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. AUTOBOXING MECHANICS:\r
   - Introduced in Java 5.\r
   - Primitive &rarr; Wrapper object automatically.\r
   - Bytecode translation: 'Integer.valueOf(primitive)'.\r
   - Eliminates deprecated 'new Integer(n)' constructors.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is Autoboxing in Java and how does the compiler translate it under the hood?",shortAnswer:"Autoboxing is the automatic conversion of a primitive value (e.g. 'int') into its corresponding wrapper object (e.g. 'Integer'). The compiler translates 'Integer x = 10;' into 'Integer x = Integer.valueOf(10);'.",explanation:"Introduced in Java 5 to eliminate tedious manual wrapping boilerplate.",hint:"Automatic conversion from primitive to wrapper; translated to valueOf().",level:"Beginner",codeExample:"Integer x = 50; // Compiler inserts: Integer.valueOf(50)"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Compiler Automation"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Autoboxing: Automatic Primitive to Wrapper Conversion (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"valueOf()"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how Java 5 Autoboxing simplifies coding: eliminating deprecated ",e.jsx("code",{className:"text-rose-400 font-mono",children:"new Integer()"})," constructors and automating ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Integer.valueOf()"})," bytecode generation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"AutoboxingFoundationsDemo.java",highlightLines:[7,13,18,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Autoboxing FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_003 Topic 3: Autoboxing Foundations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic3_autoboxing_note.txt"})}),e.jsx(o,{note:"Before Java 5, programmers had to write 'new Integer(10)' manually every time they put a number in an ArrayList. Today, Java automatically boxes primitives for you via Integer.valueOf()! — Sukanta Hui"})]})}export{b as default};
