import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 009_003: Method & Constructor References\r
 * Topic 0: What is a Method Reference? Ultra-Compact Syntactic Sugar for Lambdas\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.List;\r
import java.util.function.Consumer;\r
\r
public class WhatIsMethodReferenceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT IS A METHOD REFERENCE? - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentNames = List.of("Swadeep Paul", "Tuhina Das", "Abhronila Das");\r
\r
        // 1. Standard Lambda Expression (Pass-through forwarding):\r
        Consumer<String> lambdaPrinter = s -> System.out.println(s);\r
        System.out.println(">>> 1. Printed via Standard Lambda:");\r
        studentNames.forEach(lambdaPrinter);\r
\r
        // 2. Method Reference Equivalent (Ultra-compact & Clean):\r
        Consumer<String> methodRefPrinter = System.out::println;\r
        System.out.println("\\n>>> 2. Printed via Method Reference (System.out::println):");\r
        studentNames.forEach(methodRefPrinter);\r
\r
        System.out.println("\\n>>> CORE DEFINITION:");\r
        System.out.println("  - A Method Reference is syntactic sugar for a lambda expression that does NOTHING EXCEPT call an already existing method by name.");\r
        System.out.println("  - It eliminates redundant parameter declarations ('s -> ... (s)').");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_003: Method & Constructor References\r
Topic 0: What is a Method Reference\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A METHOD REFERENCE:\r
   - Compact syntax for lambdas calling existing methods.\r
   - Eliminates boilerplate parameter names.\r
   - Example: 'x → System.out.println(x)' → 'System.out::println'.\r
   - Evaluated at runtime with the same performance as lambda expressions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a 'Method Reference' in Java 8 and when can a lambda expression be replaced with one?",shortAnswer:"A 'Method Reference' is a compact, high-readability syntactic shortcut for a lambda expression that does nothing other than invoke an existing method directly by its name. Whenever a lambda expression merely forwards its parameters directly to an existing named method without any modification, calculation, or extra arguments (e.g. 's → System.out.println(s)'), it can be cleanly replaced with a method reference ('System.out::println').",explanation:"Fundamental definition of Method References in Java 8.",hint:"Syntactic sugar for lambdas that do nothing but call an existing named method with matching arguments.",level:"Beginner",codeExample:"s → System.out.println(s) === System.out::println"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_003 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Method References"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["What is a ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Method Reference"}),"? Compact Syntax for Existing Methods"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Elevate code aesthetics: replacing redundant parameter-forwarding lambda expressions with compact, highly readable method reference syntax."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"WhatIsMethodReferenceDemo.java",highlightLines:[7,10,18,19,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Method References FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 009_003 Topic 0: What is a Method Reference",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_003_topic0_what_is_method_reference_note.txt"})}),e.jsx(r,{note:"If all your lambda is doing is taking a parameter 's' and immediately passing 's' into 'System.out.println(s)', why waste time typing 's → ... (s)'? Just write 'System.out::println' and let Java do the wiring! — Sukanta Hui"})]})}export{f as default};
