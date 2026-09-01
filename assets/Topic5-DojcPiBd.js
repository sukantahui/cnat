import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 5: The 7 Core Restrictions & Limitations of Java Generics (Architectural Overview)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
public class GenericsSevenRestrictionsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: THE 7 CORE RESTRICTIONS OF JAVA GENERICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 7 RESTRICTIONS RESULTING DIRECTLY FROM TYPE ERASURE:");\r
        System.out.println("  1. No Primitives           : Cannot instantiate generic types with primitives (List<int> is illegal).");\r
        System.out.println("  2. No 'new T()'            : Cannot create instances of type parameters directly.");\r
        System.out.println("  3. No Static Type Fields   : Cannot declare static fields of generic type 'T'.");\r
        System.out.println("  4. No Casts / Instanceof   : Cannot check 'instanceof List<String>' (erased to raw List).");\r
        System.out.println("  5. No Generic Arrays       : Cannot create generic array instances (new List<String>[10]).");\r
        System.out.println("  6. No Generic Exceptions   : Cannot create, catch, or throw parameterized exception classes.");\r
        System.out.println("  7. No Overload Clashes     : Cannot overload methods that erase to identical parameter types.");\r
\r
        System.out.println("\\n>>> WHY DO THESE RESTRICTIONS EXIST?");\r
        System.out.println("  - Because at runtime, the JVM has NO idea what 'T' represents!");\r
        System.out.println("  - Without runtime type information, the JVM cannot allocate memory for 'new T()' or 'new T[]'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 5: 7 Core Restrictions Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 7 GENERICS RESTRICTIONS:\r
   1. No primitive types ('List<int>').\r
   2. No instance creation ('new T()').\r
   3. No static fields of type T.\r
   4. No 'instanceof' with parameterized types.\r
   5. No generic arrays ('new List<String>[10]').\r
   6. No generic exceptions (cannot catch/throw T).\r
   7. No overload clashes after erasure.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why do all 7 fundamental restrictions of Java Generics exist?",shortAnswer:"All 7 restrictions stem directly from 'Type Erasure'. Because generic type arguments are stripped during compilation, the JVM runtime bytecode has no information about the concrete type represented by 'T'. Therefore, runtime operations requiring exact type descriptors (like allocating memory for 'new T()', creating generic arrays, or catching generic exceptions) cannot be performed.",explanation:"Comprehensive summary of generic limitations in the Java language.",hint:"Because generic type information is erased at compile time and unavailable to the JVM runtime.",level:"Intermediate",codeExample:"// 'new T()', 'new T[10]', 'List<int>', 'catch(T e)' are all prohibited due to type erasure"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"7 Core Restrictions"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"The 7 Core Restrictions & Limitations of Java Generics: Overview"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master architectural boundaries: cataloging the 7 fundamental language constraints imposed on Java Generics by compile-time type erasure."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"GenericsSevenRestrictionsOverviewDemo.java",highlightLines:[7,10,14,15,16,17,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"7 Restrictions FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 006_005 Topic 5: 7 Generics Restrictions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic5_seven_generics_restrictions_note.txt"})}),e.jsx(i,{note:"Every restriction in Java Generics (why you can't write 'new T()' or 'List<int>') comes from one single reason: Type Erasure! At runtime, the JVM simply doesn't know what T is! — Sukanta Hui"})]})}export{h as default};
