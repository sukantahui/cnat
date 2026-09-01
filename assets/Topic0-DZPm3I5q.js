import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 006_002: Generic Methods, Constructors & Type Inference\r
 * Topic 0: What is a Generic Method: Parameterizing Types at the Method Level\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
public class GenericMethodFundamentalsDemo {\r
\r
    // Non-generic class containing a GENERIC METHOD:\r
    // The type parameter <T> is scoped ONLY to this method!\r
    public static <T> void inspectAndPrint(T element) {\r
        System.out.println("  Element Value : " + element);\r
        System.out.println("  Runtime Class : " + element.getClass().getSimpleName());\r
        System.out.println("  ---------------------------------------------");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: GENERIC METHOD FUNDAMENTALS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Invoking Generic Method with String:");\r
        inspectAndPrint("Swadeep Paul (Barrackpore)");\r
\r
        System.out.println(">>> 2. Invoking Generic Method with Integer:");\r
        inspectAndPrint(101);\r
\r
        System.out.println(">>> 3. Invoking Generic Method with Double:");\r
        inspectAndPrint(98.75);\r
\r
        System.out.println("\\n>>> WHY GENERIC METHODS ARE ESSENTIAL:");\r
        System.out.println("  1. Fine-Grained Scoping: Allows methods inside regular (non-generic) classes to be type-safe.");\r
        System.out.println("  2. Polymorphic Utility: Single method handles heterogeneous data types without code duplication.");\r
        System.out.println("  3. Compile-Time Verification: Eliminates dangerous runtime Object casting.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_002: Generic Methods, Constructors & Type Inference\r
Topic 0: What is a Generic Method\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GENERIC METHOD ESSENTIALS:\r
   - Scoped to individual method rather than the class.\r
   - Can exist inside non-generic classes.\r
   - Declares type parameter '<T>' before return type.\r
   - Provides compile-time type safety with zero casts.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the primary difference between a Generic Class and a Generic Method in Java?",shortAnswer:"In a Generic Class ('class Box<T>'), the type parameter 'T' is declared at the class level and scoped to the entire class instance. In a Generic Method ('public <T> void doWork(T val)'), the type parameter 'T' is declared and scoped exclusively to that individual method, even inside a non-generic ordinary class.",explanation:"Allows targeted type-safety on utility methods without making the enclosing class generic.",hint:"Generic methods scope <T> exclusively to that method, even within regular non-generic classes.",level:"Beginner",codeExample:"public class Utils { public static <T> void log(T item) { ... } }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_002 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Generic Methods"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"What is a Generic Method: Parameterizing Types at Method Scope"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover method-level type parameterization: declaring polymorphic utility methods inside ordinary classes and enforcing compile-time type safety."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"GenericMethodFundamentalsDemo.java",highlightLines:[7,10,11,12,13,21,24,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Generic Method FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 006_002 Topic 0: Generic Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_002_topic0_generic_methods_note.txt"})}),e.jsx(i,{note:"You don't need to make your entire class generic just to write one reusable helper method! You can make just that one method generic by adding '<T>' before its return type! — Sukanta Hui"})]})}export{y as default};
