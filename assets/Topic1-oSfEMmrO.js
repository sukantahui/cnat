import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 006_002: Generic Methods, Constructors & Type Inference\r
 * Topic 1: Generic Method Syntax Breakdown: <T, R> Return Types & Parameter Lists\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
public class GenericMethodSyntaxBreakdownDemo {\r
\r
    // 1. Single Type Parameter with Return Value:\r
    public static <T> T identity(T input) {\r
        return input;\r
    }\r
\r
    // 2. Multiple Type Parameters with Transformation:\r
    public static <K, V> String formatPair(K key, V value) {\r
        return "[" + key.toString() + " => " + value.toString() + "]";\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: GENERIC METHOD SYNTAX RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Calling single type parameter generic method:\r
        String trainee = identity("Tuhina Das (Naihati)");\r
        Integer score = identity(99);\r
\r
        System.out.println(">>> 1. Identity Generic Returns:");\r
        System.out.println("  String  : " + trainee);\r
        System.out.println("  Integer : " + score);\r
\r
        // 2. Calling multi-type parameter generic method:\r
        System.out.println("\\n>>> 2. Multi-Type Generic Pair Formatter:");\r
        String pair1 = formatPair("ROLL_101", "Swadeep Paul");\r
        String pair2 = formatPair(102, 9850.50);\r
        String pair3 = formatPair("BARRACKPORE_HUB", true);\r
\r
        System.out.println("  Pair 1 : " + pair1);\r
        System.out.println("  Pair 2 : " + pair2);\r
        System.out.println("  Pair 3 : " + pair3);\r
\r
        System.out.println("\\n>>> SYNTAX RULES:");\r
        System.out.println("  1. '<T>' must appear IMMEDIATELY BEFORE the return type.");\r
        System.out.println("  2. Multiple parameters are comma-separated: '<K, V, R>'.");\r
        System.out.println("  3. The return type can use 'T', 'void', or any concrete class.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_002: Generic Methods, Constructors & Type Inference\r
Topic 1: Generic Method Syntax\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GENERIC METHOD SYNTAX:\r
   - '[modifiers] <T, R> ReturnType methodName(T param1, R param2)'.\r
   - '<T>' placed right before return type.\r
   - Multiple type parameters: '<K, V>'.\r
   - Return type can be 'T', a concrete class, or 'void'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Where must type parameters (such as '<T>' or '<K, V>') be declared in a Generic Method signature?",shortAnswer:"Type parameters must be declared inside angle brackets '<T>' IMMEDIATELY BEFORE the method's return type (e.g. 'public static <T> T process(T input)' or 'public <K, V> String format(K k, V v)'). Placing '<T>' after the method name or return type causes a compilation error.",explanation:"Informs the Java compiler of the method-scoped generic types before parsing the return type.",hint:"Declared immediately before the return type inside angle brackets '<T>'.",level:"Beginner",codeExample:"public static <T> List<T> makeList(T item) { ... }"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_002 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Syntax Breakdown"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Generic Method Syntax: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"<T> returnType methodName(T param)"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master generic signature anatomy: positioning type parameter brackets before return types and managing multi-type parameter mappings (",e.jsx("code",{className:"text-sky-300 font-mono",children:"<K, V>"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"GenericMethodSyntaxBreakdownDemo.java",highlightLines:[7,10,11,15,16,24,25,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Syntax Rules FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 006_002 Topic 1: Generic Method Syntax",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_002_topic1_generic_method_syntax_note.txt"})}),e.jsx(a,{note:"Always check where '<T>' is placed! In Java, '<T>' must come BEFORE the return type! 'public <T> T getFirst(List<T> list)' is valid; 'public T <T> getFirst' is a syntax error! — Sukanta Hui"})]})}export{T as default};
