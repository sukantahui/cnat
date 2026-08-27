import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 006_002: Generic Methods, Constructors & Type Inference\r
 * Topic 9: Heap Pollution Warnings & The @SafeVarargs Annotation Contract (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class HeapPollutionSafeVarargsCapstoneDemo {\r
\r
    // SAFE VARARGS METHOD:\r
    // 1. It only reads from the varargs array (does NOT store anything into it).\r
    // 2. It does NOT let the varargs array reference escape to external code.\r
    // 3. Decorated with @SafeVarargs to suppress compiler warnings:\r
    @SafeVarargs\r
    public static <T> List<T> safeMerge(List<T>... lists) {\r
        List<T> result = new ArrayList<>();\r
        for (List<T> list : lists) {\r
            result.addAll(list);\r
        }\r
        return result;\r
    }\r
\r
    // UNSAFE ANTI-PATTERN (Causes Heap Pollution & ClassCastException):\r
    public static void dangerousHeapPollution(List<String>... stringLists) {\r
        Object[] rawArray = stringLists; // Array covariance allows this!\r
        List<Integer> intList = List.of(101, 102);\r
        rawArray[0] = intList; // HEAP POLLUTION: Injected List<Integer> into List<String>[]!\r
\r
        // When client tries to read a String from stringLists[0], JVM explodes!\r
        // String s = stringLists[0].get(0); -> ClassCastException: Integer cannot be cast to String!\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: HEAP POLLUTION & @SafeVarargs CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> bkpBranch = List.of("Swadeep Paul", "Tuhina Das");\r
        List<String> naihatiBranch = List.of("Abhronila Das", "Debangshu Mukherjee");\r
\r
        // Invoking Safe Varargs Generic Method:\r
        List<String> unifiedStudents = safeMerge(bkpBranch, naihatiBranch);\r
        System.out.println(">>> 1. Unified Students (Safe Varargs Ingestion):");\r
        System.out.println("  " + unifiedStudents);\r
\r
        System.out.println("\\n>>> 3 MANDATORY RULES FOR @SafeVarargs (Effective Java Item 32):");\r
        System.out.println("  1. Only apply to 'static', 'final', or 'private' (Java 9+) methods.");\r
        System.out.println("  2. The method must NEVER write/store anything into the varargs array parameter.");\r
        System.out.println("  3. The method must NEVER allow the varargs array reference to escape to outside code.");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 006_002 GENERIC METHODS, CONSTRUCTORS & TYPE INFERENCE COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_002: Generic Methods, Constructors & Type Inference\r
Topic 9: Heap Pollution & @SafeVarargs Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 006_002 SUMMARY:\r
   - Generic methods scoped at method level: '<T> returnType method(T param)'.\r
   - '<T>' placed immediately before return type.\r
   - Compiler type inference vs explicit type witness ('MyClass.<String>m()').\r
   - Static methods CANNOT use class '<T>'; must declare independent '<E>'.\r
   - Generic constructors allow independent constructor type arguments.\r
   - Generic arrays require boxed wrapper types (Integer[], String[]).\r
   - Varargs 'T...' creates underlying array 'T[]'.\r
   - @SafeVarargs: must be static/final/private, read-only, no escaping.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is 'Heap Pollution' in Java Generics, and what are the 3 strict rules for using the '@SafeVarargs' annotation?",shortAnswer:"Heap Pollution occurs when a variable of a parameterized type (e.g. List<String>) refers to an object that is not of that type (e.g. List<Integer>), causing hidden ClassCastExceptions at runtime. '@SafeVarargs' asserts that a generic varargs method is safe. Rules (Effective Java Item 32): 1. Method must be static, final, or private. 2. Must never write elements into the varargs array. 3. Must never allow the varargs array reference to escape.",explanation:"Crucial contract to ensure type safety when combining arrays and generic varargs.",hint:"Heap pollution is storing wrong generic types into arrays; @SafeVarargs requires static/final, no writes to varargs, and no escaping.",level:"Advanced",codeExample:"@SafeVarargs public static <T> List<T> of(T... items) { ... }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_002 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Safety Capstone"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Heap Pollution Warnings & The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"@SafeVarargs"})," Annotation (Capstone)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply Effective Java Item 32: diagnosing heap pollution risks from generic array reification and enforcing strict ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"@SafeVarargs"})," safety contracts."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"HeapPollutionSafeVarargsCapstoneDemo.java",highlightLines:[7,10,15,16,17,24,25,26,27,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"SafeVarargs FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 006_002 Topic 9: Heap Pollution & @SafeVarargs",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_002_topic9_heap_pollution_safe_varargs_note.txt"})}),e.jsx(n,{note:"Congratulations on completing Module 006_002! You now master Generic Methods, Generic Constructors, static scoping boundaries, type witnesses, and @SafeVarargs best practices! — Sukanta Hui"})]})}export{h as default};
