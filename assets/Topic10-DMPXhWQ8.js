import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 10: Restriction 5: Cannot Create Arrays of Parameterized Types (Why new List<String>[10] Fails)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class Restriction5NoGenericArraysDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: RESTRICTION 5 - NO GENERIC ARRAYS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // ILLEGAL SYNTAX (Will NOT compile):\r
        // List<String>[] genericArray = new List<String>[10]; // COMPILE ERROR: Cannot create a generic array of List<String>!\r
\r
        // LEGAL WORKAROUND 1: Use a List of Lists (Prefer Lists to Arrays - Effective Java Item 28):\r
        List<List<String>> listOfLists = new ArrayList<>();\r
        listOfLists.add(List.of("Swadeep", "Tuhina"));\r
        listOfLists.add(List.of("Abhronila", "Debangshu"));\r
\r
        System.out.println(">>> 1. Legal Alternative: List of Lists (List<List<String>>):");\r
        System.out.println("  " + listOfLists);\r
\r
        System.out.println("\\n>>> WHY GENERIC ARRAYS ARE PROHIBITED (ARRAY COVARIANCE VS GENERICS):");\r
        System.out.println("  1. Arrays are REIFIED (enforce types at runtime) and COVARIANT (Object[] can point to String[]).");\r
        System.out.println("  2. Generics are NON-REIFIED (erased at compile-time) and INVARIANT.");\r
        System.out.println("  3. If 'new List<String>[10]' was allowed, you could assign it to 'Object[]', inject a 'List<Integer>', and cause runtime corruption with no ArrayStoreException!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 10: Restriction 5 - No Generic Arrays\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RESTRICTION 5: NO GENERIC ARRAYS:\r
   - 'new List<String>[10]' is ILLEGAL.\r
   - Array reification conflicts with generic erasure.\r
   - Prevents fatal heap pollution bypassing ArrayStoreException.\r
   - Solution: Use 'List<List<T>>' (Effective Java Item 28).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does Java forbid creating arrays of parameterized types like 'new List<String>[10]' (Effective Java Item 28)?",shortAnswer:"Arrays are 'covariant and reified' (knowing and enforcing their element types at runtime). Generics are 'invariant and non-reified' (erasing type arguments at compile time). If generic arrays were allowed, an array of 'List<String>[]' could be assigned to 'Object[]', allowing code to insert a 'List<Integer>' into it without triggering 'ArrayStoreException', completely breaking Java's type safety guarantees.",explanation:"Effective Java Item 28: Prefer lists to arrays.",hint:"Array covariance combined with generic type erasure would cause untyped heap corruption.",level:"Advanced",codeExample:"// List<String>[] a = new List<String>[10]; // Compile Error! Use List<List<String>>"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Restriction 5"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Restriction 5: Cannot Create Arrays of Parameterized Types (",e.jsx("code",{className:"text-rose-400 font-mono",children:"new List<String>[10]"}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Apply Effective Java Item 28: analyzing why array covariance fundamentally clashes with generic type erasure and replacing generic arrays with nested collection lists."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"Restriction5NoGenericArraysDemo.java",highlightLines:[7,10,16,17,18,19]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Generic Arrays FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 006_005 Topic 10: Restriction 5 - No Generic Arrays",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic10_restriction5_no_generic_arrays_note.txt"})}),e.jsx(a,{note:"Joshua Bloch wrote in Effective Java Item 28: 'Prefer lists to arrays'! Because arrays and generics have opposite type rules (arrays are covariant, generics are invariant), creating generic arrays is illegal! Always use 'List<List<String>>' instead! — Sukanta Hui"})]})}export{x as default};
