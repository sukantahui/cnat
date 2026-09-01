import{j as a}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 009_001: Lambda Expressions & Lexical Scoping\r
 * Topic 0: What is Functional Programming? Unifying OOP with Declarative Paradigms\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class FunctionalVsImperativeParadigmsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: FUNCTIONAL PROGRAMMING & JAVA 8 REVOLUTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> marks = List.of(88, 42, 95, 61, 35, 78);\r
\r
        // 1. IMPERATIVE (OOP / Procedural) APPROACH: Focus on 'HOW' (Mutating state, index loops):\r
        List<Integer> passedMarksImperative = new ArrayList<>();\r
        for (Integer mark : marks) {\r
            if (mark >= 50) {\r
                passedMarksImperative.add(mark);\r
            }\r
        }\r
        System.out.println(">>> 1. Imperative Result (How to filter) : " + passedMarksImperative);\r
\r
        // 2. DECLARATIVE (Functional) APPROACH: Focus on 'WHAT' (Pure expressions, no mutable loops):\r
        List<Integer> passedMarksFunctional = marks.stream()\r
                .filter(mark -> mark >= 50) // Lambda expression passed as first-class behavior!\r
                .toList();\r
\r
        System.out.println(">>> 2. Functional Result (What to filter): " + passedMarksFunctional);\r
\r
        System.out.println("\\n>>> WHY JAVA 8 INTRODUCED FUNCTIONAL PROGRAMMING:");\r
        System.out.println("  1. Code Conciseness       : Replaces 10-line boilerplate loops with elegant 1-line pipelines.");\r
        System.out.println("  2. Behavior Parameterization: Methods can now accept FUNCTIONS (code blocks) as arguments just like data values!");\r
        System.out.println("  3. Parallel Readiness     : Declarative pipelines can seamlessly switch to multi-core parallelism via '.parallelStream()'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_001: Lambda Expressions & Lexical Scoping\r
Topic 0: Functional Programming in Java 8\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FUNCTIONAL PROGRAMMING IN JAVA:\r
   - Imperative: Focus on HOW (loops, mutable state, step-by-step).\r
   - Declarative/Functional: Focus on WHAT (pure transformations, immutability).\r
   - Behavior Parameterization: Passing code blocks as method arguments.\r
   - Java 8 unifies OOP with functional concepts without breaking existing classes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How did Java 8 unify Object-Oriented Programming (OOP) with Declarative Functional Programming?",shortAnswer:"Before Java 8, Java was purely object-centric: to pass a piece of executable behavior to a method, developers had to wrap it inside an object (e.g. an Anonymous Inner Class). Java 8 introduced 'Lambda Expressions' and 'Functional Interfaces', enabling 'Behavior Parameterization'. Functions became first-class citizens that can be passed directly as method arguments, returned from functions, and assigned to variables, unifying OOP modeling with declarative, immutable functional data pipelines (Streams).",explanation:"Foundational philosophy of Java 8 functional programming revolution.",hint:"Treats code/behavior as data (behavior parameterization) without abandoning OOP classes and objects.",level:"Beginner",codeExample:"list.filter(mark → mark >= 50); // Lambda passed as behavior parameter"}];function h(){return a.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[a.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_001 · Topic 0"}),a.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Functional Paradigm"})]}),a.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["What is ",a.jsx("code",{className:"text-emerald-400 font-mono",children:"Functional Programming"}),"? Unifying OOP with Declarative Paradigms"]}),a.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Enter the functional era: contrasting imperative mutating loops with declarative data streams, and understanding behavior parameterization in Java 8."})]}),a.jsxs("section",{className:"space-y-4",children:[a.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[a.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),a.jsx(e,{fileModule:i,title:"FunctionalVsImperativeParadigmsDemo.java",highlightLines:[7,10,16,17,18,22,23,24,28,29]})]}),a.jsx("section",{className:"space-y-4",children:a.jsx(t,{title:"Functional Paradigm FAQs",questions:o})}),a.jsx("section",{className:"space-y-4",children:a.jsx(n,{content:s,title:"Module 009_001 Topic 0: Functional Paradigm",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_001_topic0_functional_paradigm_note.txt"})}),a.jsx(r,{note:"In imperative programming, you tell Java HOW to make tea step by step (boil water, add leaves, strain). In functional programming, you just say 'Give me filtered tea!' You focus on WHAT you want, and let Java handle the rest! — Sukanta Hui"})]})}export{h as default};
