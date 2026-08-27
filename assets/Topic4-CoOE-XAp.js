import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 4: Why Multiple Inheritance with Classes is NOT Supported (The Diamond Problem)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class DiamondProblemExplainedDemo {\r
\r
    // ========================================================================\r
    // THE DIAMOND PROBLEM EXPLAINED:\r
    // ========================================================================\r
    // Suppose Java allowed: class Child extends ParentA, ParentB\r
    //\r
    //              [ Class GrandParent ]\r
    //                 /             \\\r
    //      [ Class ParentA ]    [ Class ParentB ]\r
    //       (void show())         (void show())\r
    //                 \\             /\r
    //               [ Class Child ]\r
    //\r
    // If Child calls 'child.show()', which parent method should execute?\r
    // ParentA.show() or ParentB.show()?\r
    // This creates fatal AMBIGUITY in compiler method resolution and memory layout!\r
    //\r
    // Therefore, James Gosling and the Java design team intentionally OMITTED\r
    // multiple class inheritance to keep Java simple, robust, and unambiguous!\r
    // ========================================================================\r
\r
    public static class ParentA {\r
        public void executeTask() { System.out.println("  [PARENT A] Task executed via Strategy A"); }\r
    }\r
\r
    public static class ParentB {\r
        public void executeTask() { System.out.println("  [PARENT B] Task executed via Strategy B"); }\r
    }\r
\r
    // The Java Solution: FAVOR COMPOSITION & INTERFACES!\r
    public static class SolutionChild {\r
        private ParentA strategyA = new ParentA();\r
        private ParentB strategyB = new ParentB();\r
\r
        public void executeA() { strategyA.executeTask(); }\r
        public void executeB() { strategyB.executeTask(); }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: THE DIAMOND PROBLEM & MULTIPLE INHERITANCE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SolutionChild child = new SolutionChild();\r
        child.executeA();\r
        child.executeB();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 4: The Diamond Problem & Why Multiple Inheritance is Disallowed\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE DIAMOND PROBLEM:\r
   - Two parent classes have methods with identical signatures.\r
   - Multiple inheritance creates ambiguity over which method the child inherits.\r
   - Java omits multiple class inheritance for simplicity and reliability.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the Diamond Problem in object-oriented programming and how does Java avoid it?",shortAnswer:"The Diamond Problem occurs when a class inherits from two parent classes that share a common ancestor and both override the same method, creating ambiguity about which method the child inherits. Java eliminates this by disallowing multiple class inheritance.",explanation:"Java solves multiple behavior needs cleanly using Interfaces with explicit conflict resolution rules.",hint:"Ambiguity arising from multiple parents with identical method signatures; avoided by disallowing multiple class inheritance.",level:"Intermediate",codeExample:"// Disallowed: class C extends A, B {}"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Language Design Choice"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Why Multiple Inheritance with Classes is NOT Supported (The Diamond Problem)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deep-dive into the famous Diamond Problem that led Java's creators to omit multiple class inheritance in favor of interfaces and composition."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"DiamondProblemExplainedDemo.java",highlightLines:[25,29,34,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"The Diamond Problem FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 002_005 Topic 4: The Diamond Problem",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic4_diamond_problem_note.txt"})}),e.jsx(i,{note:"If two parent classes have a method with the exact same name, the child wouldn't know which parent to listen to! Java avoids this confusion by keeping inheritance strictly single-parent. — Sukanta Hui"})]})}export{b as default};
