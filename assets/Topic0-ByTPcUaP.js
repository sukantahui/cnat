import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 0: java.lang.Object as the Cosmic Root Superclass\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class ObjectCosmicRootDemo {\r
\r
    // Implicitly extends java.lang.Object:\r
    public static class TraineeProfile {\r
        private String name;\r
        public TraineeProfile(String name) { this.name = name; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: java.lang.Object AS THE COSMIC ROOT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TraineeProfile swadeep = new TraineeProfile("Swadeep Paul");\r
\r
        // 1. Any object reference can be assigned to an 'Object' type:\r
        Object cosmicRef = swadeep;\r
\r
        System.out.println(">>> 1. Object Type Polymorphism:");\r
        System.out.println("  cosmicRef instanceof Object        : " + (cosmicRef instanceof Object));\r
        System.out.println("  cosmicRef instanceof TraineeProfile: " + (cosmicRef instanceof TraineeProfile));\r
\r
        System.out.println("\\n>>> 2. Calling universal Object methods:");\r
        System.out.println("  Runtime Class: " + cosmicRef.getClass().getName());\r
        System.out.println("  Hash Code    : " + Integer.toHexString(cosmicRef.hashCode()));\r
        System.out.println("  toString()   : " + cosmicRef.toString());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 0: java.lang.Object Cosmic Root\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COSMIC ROOT ESSENTIALS:\r
   - Root of all reference types in Java.\r
   - Automatically extended if no 'extends' keyword is written.\r
   - Supplies 11 universal methods to all objects.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is 'java.lang.Object' and why is it referred to as the 'cosmic root superclass'?",shortAnswer:"'java.lang.Object' sits at the very apex of the Java class hierarchy. Every single class in Java (including user-defined classes and arrays) directly or indirectly extends Object.",explanation:"If no 'extends' clause is written, the compiler automatically inserts 'extends java.lang.Object'.",hint:"The root superclass of every class and array in the Java language.",level:"Beginner",codeExample:'Object obj = new String(\\"test\\"); // Universal reference'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Cosmic Superclass"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-indigo-400 font-mono",children:"java.lang.Object"})," as the Cosmic Root Superclass"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn why every class and array in the Java universe inherits from ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"java.lang.Object"})," and how universal reference polymorphism powers frameworks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"ObjectCosmicRootDemo.java",highlightLines:[11,20,24,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Cosmic Root FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 002_010 Topic 0: java.lang.Object Root",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic0_object_root_note.txt"})}),e.jsx(s,{note:"Every class in Java is born with 11 built-in methods because java.lang.Object is the universal ancestor of all objects on the Heap! — Sukanta Hui"})]})}export{h as default};
