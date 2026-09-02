import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 1: Compilation Type Replacement: Unbounded (Object) vs Bounded (Upper Bound)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
// 1. Unbounded Generic Class:\r
class GenericBox<T> {\r
    private T item;\r
    public void set(T item) { this.item = item; }\r
    public T get() { return item; }\r
    // After Compilation: 'T' is replaced with 'java.lang.Object'!\r
}\r
\r
// 2. Bounded Generic Class:\r
class NumericBox<T extends Number> {\r
    private T value;\r
    public void set(T value) { this.value = value; }\r
    public T get() { return value; }\r
    // After Compilation: 'T' is replaced with its upper bound 'java.lang.Number'!\r
}\r
\r
public class TypeReplacementCompilationRulesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: COMPILATION TYPE REPLACEMENT RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HOW JAVAC REPLACES TYPE PARAMETERS IN BYTECODE:");\r
        System.out.println("  Case 1: Unbounded '<T>' is replaced with 'java.lang.Object'.");\r
        System.out.println("          'public void set(T item)' becomes 'public void set(Object item)' in bytecode.");\r
        System.out.println();\r
        System.out.println("  Case 2: Bounded '<T extends Number>' is replaced with 'java.lang.Number'.");\r
        System.out.println("          'public void set(T val)' becomes 'public void set(Number val)' in bytecode.");\r
        System.out.println();\r
        System.out.println("  Case 3: Multiple Bounds '<T extends Number & Comparable<T>>' is replaced with the FIRST bound ('Number').");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 1: Type Replacement Rules\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TYPE REPLACEMENT RULES:\r
   - '<T>' → replaced with 'Object'.\r
   - '<T extends SuperType>' → replaced with 'SuperType'.\r
   - '<T extends Bound1 & Bound2>' → replaced with 'Bound1'.\r
   - Guarantees valid non-generic JVM bytecode.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"During type erasure, what type replaces 'T' in '<T>' vs '<T extends Comparable<T> & Serializable>' in compiled bytecode?",shortAnswer:"1. In unbounded '<T>', 'T' is replaced with 'java.lang.Object'. 2. In multiple bounds '<T extends Comparable<T> & Serializable>', 'T' is replaced with the FIRST bound in the list ('Comparable'). The compiler generates synthetic bridge casts if methods from subsequent interface bounds are accessed.",explanation:"Defined by JLS 4.6: Type Erasure rules.",hint:"Unbounded erases to Object; multiple bounds erases to the first bound in the list.",level:"Intermediate",codeExample:"class Multi<T extends Number & Serializable> // 'T' erases to 'Number'"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Type Replacement"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Compilation Type Replacement: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Object"})," vs Upper Bounds"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace bytecode transformations: understanding how javac replaces type parameters with Object or their bounding supertypes during compilation."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"TypeReplacementCompilationRulesDemo.java",highlightLines:[7,10,11,16,17,26,27,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Type Replacement FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 006_005 Topic 1: Type Replacement Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic1_type_replacement_rules_note.txt"})}),e.jsx(a,{note:"If your generic parameter is unbounded like '<T>', the compiler replaces it with Object! If it is bounded like '<T extends Number>', the compiler replaces it with Number! That is how bytecode stays simple! — Sukanta Hui"})]})}export{x as default};
