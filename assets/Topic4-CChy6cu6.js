import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 4: Unboxing: Automatic Conversion of Wrapper Object to Primitive\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class UnboxingFoundationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: UNBOXING FOUNDATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Integer boxedScore = Integer.valueOf(95);\r
\r
        // 1. Explicit Unboxing (Pre-Java 5):\r
        int explicitScore = boxedScore.intValue();\r
\r
        // 2. Modern UNBOXING (Automatic):\r
        int modernScore = boxedScore; // Compiler automatically extracts primitive int!\r
\r
        System.out.println(">>> 1. Unboxing Results:");\r
        System.out.println("  boxedScore    : " + boxedScore + " (Integer on Heap)");\r
        System.out.println("  explicitScore : " + explicitScore + " (Extracted via intValue())");\r
        System.out.println("  modernScore   : " + modernScore + " (Auto-unboxed into primitive on Stack)");\r
\r
        // 3. Unboxing in Arithmetic Expressions:\r
        Integer a = 50;\r
        Integer b = 25;\r
        int sum = a + b; // Both 'a' and 'b' are automatically unboxed before addition!\r
        System.out.println("\\n>>> 2. Arithmetic on Wrapper Objects (Auto-unboxing):");\r
        System.out.println("  a + b = " + sum);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 4: Unboxing Foundations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UNBOXING MECHANICS:\r
   - Wrapper Object → Primitive value.\r
   - Bytecode translation: invokes '.intValue()', '.doubleValue()', etc.\r
   - Enables direct arithmetic (+, -, *, /) on wrapper objects.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is Unboxing in Java and what method does the compiler invoke to achieve it?",shortAnswer:"Unboxing is the automatic extraction of a primitive value from its wrapper object. For 'Integer', the compiler generates a call to 'intValue()' under the hood. For 'Double', it calls 'doubleValue()', and so on.",explanation:"Allows wrapper objects to be used directly in arithmetic calculations (+, -, *, /).",hint:"Extracts primitive from wrapper object; translated to intValue(), doubleValue(), etc.",level:"Beginner",codeExample:"int y = x; // When x is Integer, compiler inserts: int y = x.intValue();"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Type Extraction"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Unboxing: Automatic Wrapper to Primitive Conversion (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"intValue()"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand automatic primitive extraction: how the compiler translates wrapper objects in arithmetic operations using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"intValue()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"UnboxingFoundationsDemo.java",highlightLines:[7,14,17,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Unboxing FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_003 Topic 4: Unboxing Foundations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic4_unboxing_note.txt"})}),e.jsx(o,{note:"Whenever you write 'Integer a = 10; Integer b = 20; int c = a + b;', Java unboxes both Integers to primitive ints using intValue(), adds them, and stores the result! — Sukanta Hui"})]})}export{h as default};
