import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
 * Topic 1: java.util.Iterator Interface: hasNext(), next(), and forEachRemaining()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Iterator;\r
import java.util.List;\r
\r
public class IteratorMethodsSuiteDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: java.util.Iterator CORE METHODS SUITE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentRoster = new ArrayList<>(List.of(\r
                "Swadeep Paul (Barrackpore)",\r
                "Tuhina Das (Naihati)",\r
                "Abhronila Das (Shyamnagar)",\r
                "Debangshu Mukherjee (Ichapur)"\r
        ));\r
\r
        Iterator<String> iterator = studentRoster.iterator();\r
\r
        // 1. hasNext() & next() step-by-step cursor advance:\r
        System.out.println(">>> 1. Manual Step-by-Step Traversal:");\r
        if (iterator.hasNext()) {\r
            System.out.println("  1st Student: " + iterator.next());\r
        }\r
        if (iterator.hasNext()) {\r
            System.out.println("  2nd Student: " + iterator.next());\r
        }\r
\r
        // 2. Java 8 forEachRemaining(): Processes all remaining elements with a lambda:\r
        System.out.println("\\n>>> 2. Processing Remaining Elements via forEachRemaining():");\r
        iterator.forEachRemaining(student ->\r
                System.out.println("  [LAMBDA REMAINING] -> " + student));\r
\r
        System.out.println("\\n>>> FINAL STATE: Any elements left? " + iterator.hasNext());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
Topic 1: Iterator Methods Suite\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ITERATOR METHODS:\r
   - 'hasNext()': checks if more elements exist without moving cursor.\r
   - 'next()': returns current element and advances cursor forward.\r
   - 'forEachRemaining(Consumer)': consumes all remaining unvisited elements.\r
   - Throws 'NoSuchElementException' if 'next()' called when 'hasNext() == false'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the purpose of 'Iterator.forEachRemaining(Consumer action)' introduced in Java 8?",shortAnswer:"'forEachRemaining()' performs the given action for each remaining element in the collection until all elements have been processed or the action throws an exception. It is ideal when an algorithm processes the first few elements manually using 'next()' and wants to delegate the remaining elements to a functional lambda expression in a single clean pass.",explanation:"Default method added to java.util.Iterator in Java 8.",hint:"Consumes all unvisited remaining elements using a functional Consumer lambda.",level:"Beginner",codeExample:"iterator.forEachRemaining(e → System.out.println(e));"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_007 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Iterator Methods"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Iterator"})," Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"hasNext()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"next()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"forEachRemaining()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master cursor navigation: advancing positions step-by-step with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"next()"})," and batch-consuming remaining items with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"forEachRemaining()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"IteratorMethodsSuiteDemo.java",highlightLines:[7,10,16,23,24,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Iterator Methods FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 007_007 Topic 1: Iterator Methods Suite",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_007_topic1_iterator_methods_suite_note.txt"})}),e.jsx(r,{note:"Always check 'it.hasNext()' before calling 'it.next()'! If you call next() on an exhausted iterator, Java throws a runtime NoSuchElementException! — Sukanta Hui"})]})}export{f as default};
