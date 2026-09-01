import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 12: Restriction 7: No Overloading Methods That Erase to Identical Signatures\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.List;\r
\r
public class Restriction7NoOverloadClashDemo {\r
\r
    // 1. VALID METHOD:\r
    public static void printStringList(List<String> list) {\r
        System.out.println("  String List: " + list);\r
    }\r
\r
    // 2. ILLEGAL OVERLOAD (Will NOT compile):\r
    // public static void print(List<String> list) { }\r
    // public static void print(List<Integer> list) { }\r
    // COMPILE ERROR: 'name clash: print(List<Integer>) and print(List<String>) have the same erasure'!\r
\r
    // 3. LEGAL WORKAROUND: Use distinct method names:\r
    public static void printIntegerList(List<Integer> list) {\r
        System.out.println("  Integer List: " + list);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: RESTRICTION 7 - NO OVERLOAD ERASURE CLASH - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> trainees = List.of("Swadeep", "Tuhina");\r
        List<Integer> rolls = List.of(101, 102);\r
\r
        printStringList(trainees);\r
        printIntegerList(rolls);\r
\r
        System.out.println("\\n>>> WHY THIS OVERLOAD IS ILLEGAL:");\r
        System.out.println("  1. 'List<String>' erases to raw 'List'.");\r
        System.out.println("  2. 'List<Integer>' also erases to raw 'List'.");\r
        System.out.println("  3. Both methods would have the exact same bytecode signature: 'public static void print(java.util.List)'!");\r
        System.out.println("  4. A class cannot contain two methods with identical name and parameter types.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 12: Restriction 7 - No Overload Clashes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RESTRICTION 7: NO OVERLOAD CLASHES:\r
   - Cannot overload methods where parameters erase to same raw type.\r
   - 'method(List<String>)' and 'method(List<Integer>)' → both erase to 'method(List)'.\r
   - Triggers compiler 'name clash' error.\r
   - Solution: Use distinct method names.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does declaring 'public void print(List<String> l)' and 'public void print(List<Integer> l)' in the same class trigger a compilation error?",shortAnswer:"Because type erasure strips the generic parameters '<String>' and '<Integer>', causing both methods to erase to the exact same bytecode signature: 'public void print(java.util.List)'. In the JVM classfile specification, having two methods with the identical name and parameter descriptors within the same class is illegal.",explanation:"Standard compiler name clash diagnostic under type erasure.",hint:"Both signatures erase to 'print(List)', producing a method name/parameter clash in bytecode.",level:"Intermediate",codeExample:"// void process(List<String> a) and void process(List<Integer> b) → Compile error: name clash"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Restriction 7"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Restriction 7: Cannot Overload Methods That Erase to Identical Raw Signatures"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Diagnose compiler name clashes: understanding why methods with parameters erasing to identical raw descriptors cannot be overloaded in the same class."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"Restriction7NoOverloadClashDemo.java",highlightLines:[7,10,14,15,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Overload Clashes FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:a,title:"Module 006_005 Topic 12: Restriction 7 - No Overload Clashes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic12_restriction7_no_overload_clashes_note.txt"})}),e.jsx(n,{note:"If you try to write 'void save(List<Student> s)' and 'void save(List<Course> c)', the compiler will complain about a 'name clash'! That's because both erase to 'void save(List)' in bytecode! Give them different names! — Sukanta Hui"})]})}export{x as default};
