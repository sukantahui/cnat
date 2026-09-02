import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 4: java.util.function.Consumer<T>: void accept(T t) Side-Effect Processing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.List;\r
import java.util.function.Consumer;\r
\r
public class ConsumerSideEffectsDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: Consumer<T> SIDE-EFFECT PROCESSING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> enrolledCourses = List.of(\r
                "GST Practitioner Executive",\r
                "Advanced Income Tax & TDS",\r
                "Full-Stack Java Enterprise Mastery"\r
        );\r
\r
        // 1. Single Consumer: Console Printing\r
        Consumer<String> consolePrinter = course -> System.out.println("  [Course Notification] Registered: " + course);\r
\r
        // 2. Chained Consumer via andThen():\r
        Consumer<String> auditLogger = course -> System.out.println("    -> Audit log written to disk for: " + course);\r
\r
        Consumer<String> compositePipeline = consolePrinter.andThen(auditLogger);\r
\r
        System.out.println(">>> Executing Composite Consumer Pipeline across list:");\r
        enrolledCourses.forEach(compositePipeline); // forEach accepts Consumer<T>!\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 4: Consumer<T> Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONSUMER<T>:\r
   - SAM: 'void accept(T t)'.\r
   - Input: T, Output: void.\r
   - Purpose: Side-effects (printing, logging, database writes, UI updates).\r
   - Powers 'Iterable.forEach(consumer)' and 'Stream.peek()'.\r
   - Composition: 'consumerA.andThen(consumerB)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is 'Consumer<T>' in Java, what is its SAM method, and where is it predominantly used?",shortAnswer:"'Consumer<T>' represents an operation that accepts a single input argument of type T and returns no result ('void accept(T t)'). Because it returns void, it is designed exclusively to execute side-effects, such as logging data, saving records to a database, emitting network messages, or printing to the console. It is the primary target type for 'Iterable.forEach(consumer)' and 'Stream.peek(consumer)'.",explanation:"Core side-effect functional interface in java.util.function.",hint:"Accepts input T, returns void; used for side-effects like printing, logging, and database saves in forEach().",level:"Beginner",codeExample:'Consumer<String> log = msg → logger.info(msg); log.accept("Hello");'}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Consumer<T>"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Consumer<T>"}),": Executing Side-Effects & Pipeline Iteration"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Execute void side-effects: applying ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Consumer<T>"})," ",e.jsx("code",{className:"text-sky-300 font-mono",children:"void accept(T t)"})," methods for logging, console printing, and chaining with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"andThen()"})," in ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"forEach()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"ConsumerSideEffectsDeepDiveDemo.java",highlightLines:[7,10,19,20,22,23,25,26,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Consumer<T> FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 009_002 Topic 4: Consumer<T> Deep Dive",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic4_consumer_deep_dive_note.txt"})}),e.jsx(s,{note:"Whenever you call 'list.forEach(item → ...)', you are passing a Consumer! A Consumer is a hungry black hole: you give it data, it performs an action (prints, saves, emails), and returns nothing back! — Sukanta Hui"})]})}export{f as default};
