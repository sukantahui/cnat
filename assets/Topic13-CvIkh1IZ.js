import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 13: Behavioral Patterns Overview - Algorithms & Interaction\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class BehavioralPatternsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: BEHAVIORAL PATTERNS OVERVIEW - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE CORE BEHAVIORAL PATTERNS AT A GLANCE:");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  PATTERN           INTENT & PRIMARY USE CASE");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  1. Strategy       Encapsulate interchangeable algorithms inside interchangeable strategy objects.");\r
        System.out.println("  2. Observer       One-to-many publish/subscribe notification mechanism (event listeners).");\r
        System.out.println("  3. Command        Encapsulate a request as an object, enabling undo/redo queues and logging.");\r
        System.out.println("  4. Chain of Resp. Pass requests along a chain of handlers until one handles it.");\r
        System.out.println("  5. Template Meth. Define algorithm skeleton in superclass, letting subclasses override steps.");\r
        System.out.println("  6. State          Allow an object to alter its behavior when its internal state changes.");\r
        System.out.println("  7. Iterator       Sequentially access elements of an aggregate without exposing underlying representation.");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 13: Behavioral Patterns Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT ARE BEHAVIORAL PATTERNS:\r
   - Patterns that identify common communication patterns between objects and realize them.\r
\r
2. MODERN JAVA EVOLUTION:\r
   - Many behavioral patterns (Strategy, Command, Observer) have been vastly simplified\r
     using Java 8 Lambdas, Functional Interfaces, and CompletableFutures!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the primary focus of Behavioral design patterns?",shortAnswer:"Behavioral patterns focus on algorithms, the assignment of responsibilities among objects, and the patterns of communication between collaborating classes.",explanation:"Managing runtime interaction protocols.",hint:"Algorithms, responsibility assignment, and communication flows between objects.",level:"Beginner",codeExample:"Strategy, Observer, Command, Chain of Responsibility, Template Method."},{question:"How did Java 8 Functional Interfaces simplify classic Behavioral design patterns?",shortAnswer:"They eliminated the need for boilerplate single-method abstract classes and anonymous inner classes; patterns like Strategy and Command can now be written inline using concise lambda expressions and method references.",explanation:"Modern functional Java replaces verbose GoF boilerplate.",hint:"Replaces verbose inner classes with concise lambdas and method references.",level:"Intermediate",codeExample:"Comparator.comparing(Student::score); // Inline Strategy Pattern"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Behavioral Patterns: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Algorithms & Interaction"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Assigning responsibilities: understanding how behavioral patterns manage communication flow, distributed state, and algorithm execution between objects."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"BehavioralPatternsOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"GoF Design Patterns FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 012_001 Topic 13: Behavioral Patterns Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic13_behavioral_patterns_overview_note.txt"})}),e.jsx(s,{note:"Behavioral patterns are all about dynamic conversations! How does a Button tell 10 Listeners it was clicked? How do you switch sorting algorithms on the fly? How do you implement Undo/Redo? Behavioral patterns solve all of these! — Sukanta Hui"})]})}export{b as default};
