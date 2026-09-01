import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 0: What is Inheritance: Code Reusability, Extensibility & Domain Taxonomies\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class InheritanceFoundationsDemo {\r
\r
    // Base Class: Common Academy Member\r
    public static class AcademyMember {\r
        protected int id;\r
        protected String name;\r
        protected String hubLocation;\r
\r
        public AcademyMember(int id, String name, String hubLocation) {\r
            this.id = id;\r
            this.name = name;\r
            this.hubLocation = hubLocation;\r
        }\r
\r
        public void printBadge() {\r
            System.out.printf("  [MEMBER BADGE] ID: %d | Name: %s | Hub: %s\\n", id, name, hubLocation);\r
        }\r
    }\r
\r
    // Subclass: Reuses and extends AcademyMember\r
    public static class TraineeDeveloper extends AcademyMember {\r
        private String trackSpecialization;\r
\r
        public TraineeDeveloper(int id, String name, String hubLocation, String trackSpecialization) {\r
            super(id, name, hubLocation); // Reusing parent state\r
            this.trackSpecialization = trackSpecialization;\r
        }\r
\r
        public void printTraineeDetails() {\r
            super.printBadge(); // Reusing parent functionality\r
            System.out.printf("  -> Specialization Track: %s\\n", trackSpecialization);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT IS INHERITANCE IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TraineeDeveloper swadeep = new TraineeDeveloper(101, "Swadeep Paul", "Barrackpore Hub", "Java Full Stack");\r
        swadeep.printTraineeDetails();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 0: What is Inheritance in Java\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE PILLARS OF INHERITANCE:\r
   - Code Reusability: Write once in parent class, inherit across all children.\r
   - Extensibility: Add new specialized features in child classes.\r
   - Polymorphism Foundation: Enables runtime dynamic dispatch.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is Inheritance in Object-Oriented Programming and Java?",shortAnswer:"A mechanism by which one class (subclass/child) acquires all accessible properties and behaviors of another class (superclass/parent), facilitating code reusability and establishing IS-A taxonomies.",explanation:"Inheritance enables developers to define general attributes in a base class and specialize them in derived classes.",hint:"Subclass acquires fields and methods of superclass for reuse and specialization.",level:"Beginner",codeExample:"class Child extends Parent { /* inherits Parent members */ }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"OOP Foundations"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"What is Inheritance: Code Reusability, Extensibility & Domain Taxonomies"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover the foundational OOP mechanism for modeling hierarchical taxonomies. Learn how inheritance eliminates code duplication, establishes type hierarchies, and enables polymorphic behavior."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"InheritanceFoundationsDemo.java",highlightLines:[12,24,27,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Inheritance Foundations FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:s,title:"Module 002_005 Topic 0: What is Inheritance",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic0_inheritance_note.txt"})}),e.jsx(t,{note:"Inheritance allows a TraineeDeveloper to inherit all standard AcademyMember traits without rewriting ID, Name, or Hub fields! It is the cornerstone of clean domain modeling. — Sukanta Hui"})]})}export{x as default};
