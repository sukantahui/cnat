import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 6: Restriction 1: No Primitive Type Arguments (Why List<int> is Illegal)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class Restriction1NoPrimitiveGenericsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: RESTRICTION 1 - NO PRIMITIVE GENERICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // ILLEGAL SYNTAX (Will NOT compile):\r
        // List<int> primitiveList = new ArrayList<int>(); // COMPILE ERROR: Unexpected type, found int, required reference!\r
        // List<double> doubleList = new ArrayList<double>(); // COMPILE ERROR!\r
\r
        // LEGAL SYNTAX: Using Boxed Wrapper Classes:\r
        List<Integer> boxedIntegerList = new ArrayList<>();\r
        boxedIntegerList.add(101); // Auto-boxed to Integer.valueOf(101)\r
        boxedIntegerList.add(102);\r
\r
        List<Double> boxedDoubleList = new ArrayList<>();\r
        boxedDoubleList.add(8500.50); // Auto-boxed to Double.valueOf(8500.50)\r
\r
        System.out.println(">>> 1. Populated Boxed Generic Lists:");\r
        System.out.println("  Boxed Integer List : " + boxedIntegerList);\r
        System.out.println("  Boxed Double List  : " + boxedDoubleList);\r
\r
        System.out.println("\\n>>> WHY PRIMITIVES ARE DISALLOWED:");\r
        System.out.println("  1. Type Erasure erases type parameters to 'java.lang.Object'.");\r
        System.out.println("  2. Primitive types (int, double, boolean) DO NOT inherit from java.lang.Object and cannot be converted to Object reference pointers.");\r
        System.out.println("  3. Modern Project Valhalla is working on Value Types to allow primitive generics in future Java releases!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 6: Restriction 1 - No Primitive Generics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RESTRICTION 1: NO PRIMITIVE GENERICS:\r
   - 'List<int>' is ILLEGAL.\r
   - Primitives do not extend 'java.lang.Object'.\r
   - Type erasure requires Object reference compatibility.\r
   - Solution: Use wrapper classes ('Integer', 'Double', 'Boolean').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does Java prohibit generic type parameterization with primitive types like 'List<int>' or 'Map<char, boolean>'?",shortAnswer:"Because type erasure converts type parameters to 'java.lang.Object' in bytecode. In Java's memory model, primitive types (int, boolean, double) are raw bits stored on the stack/fields, not heap reference pointers extending 'java.lang.Object'. Since a primitive cannot substitute for an Object reference pointer, wrapper classes ('Integer', 'Double') must be used.",explanation:"A fundamental distinction between Java reference types and primitive value types.",hint:"Primitives do not inherit from java.lang.Object and cannot be assigned to erased Object pointers.",level:"Beginner",codeExample:"List<Integer> list = new ArrayList<>(); // Use boxed wrapper instead of List<int>"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Restriction 1"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Restriction 1: Cannot Instantiate Generic Types with Primitives (",e.jsx("code",{className:"text-rose-400 font-mono",children:"List<int>"}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze type hierarchy boundaries: discovering why primitive types cannot parameterize generic classes and applying autoboxed wrapper classes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"Restriction1NoPrimitiveGenericsDemo.java",highlightLines:[7,10,16,17,20,21,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Primitive Generics FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 006_005 Topic 6: Restriction 1 - No Primitives",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic6_restriction1_no_primitives_note.txt"})}),e.jsx(i,{note:"You cannot write 'List<int>' in Java because int is not an Object! Always write 'List<Integer>' instead, and Java's autoboxing will handle the numbers for you automatically! — Sukanta Hui"})]})}export{y as default};
