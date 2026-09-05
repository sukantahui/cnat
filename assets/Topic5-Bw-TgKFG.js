import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 5: The Ultimate Root of Java Class Hierarchy: java.lang.Object\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class ObjectClassRootHierarchyDemo {\r
\r
    // Implicitly extends java.lang.Object\r
    public static class TraineeRecord {\r
        private String name;\r
        private int roll;\r
\r
        public TraineeRecord(String name, int roll) {\r
            this.name = name;\r
            this.roll = roll;\r
        }\r
\r
        @Override\r
        public String toString() {\r
            return String.format("TraineeRecord[Name='%s', Roll=%d]", name, roll);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: java.lang.Object AS ULTIMATE ROOT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TraineeRecord swadeep = new TraineeRecord("Swadeep Paul", 101);\r
\r
        System.out.println(">>> 1. Verifying that TraineeRecord is an instance of Object:");\r
        System.out.println("  swadeep instanceof Object? " + (swadeep instanceof Object));\r
\r
        System.out.println("\\n>>> 2. Calling inherited Object methods:");\r
        System.out.println("  Class: " + swadeep.getClass().getName());\r
        System.out.println("  HashCode: " + Integer.toHexString(swadeep.hashCode()));\r
        System.out.println("  Custom toString(): " + swadeep.toString());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 5: java.lang.Object as the Cosmic Root\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. java.lang.Object FUNDAMENTALS:\r
   - Root of all classes in Java.\r
   - Automatically extended if no 'extends' clause is present.\r
   - Provides universal methods: toString(), equals(), hashCode(), getClass().\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the role of 'java.lang.Object' in the Java class hierarchy?",shortAnswer:"'java.lang.Object' is the cosmic root superclass of every single class in Java. If a class does not explicitly extend another class, the compiler automatically adds 'extends Object'.",explanation:"It supplies 11 core methods (e.g. toString(), equals(), hashCode(), getClass(), clone(), wait(), notify()) to all objects in the Java universe.",hint:"The root superclass of all Java classes providing 11 fundamental methods.",level:"Beginner",codeExample:"Object obj = new Trainee(); // Always valid"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Cosmic Superclass"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Ultimate Root of Java Class Hierarchy: ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"java.lang.Object"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn why every class in Java directly or indirectly inherits from ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"Object"})," and how universal contract methods govern object behavior."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ObjectClassRootHierarchyDemo.java",highlightLines:[12,19,31,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"java.lang.Object FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 002_005 Topic 5: java.lang.Object Root",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic5_object_root_note.txt"})}),e.jsx(r,{note:"Every class you ever create in Java is a child of java.lang.Object! It gives every object its passport, its toString(), its hashCode(), and its equals() method. — Sukanta Hui"})]})}export{g as default};
