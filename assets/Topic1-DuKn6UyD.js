import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 1: Parent (Super/Base) Class and Child (Sub/Derived) Class Relationship\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class SuperSubclassRelationshipDemo {\r
\r
    // General Superclass\r
    public static class EducationalEntity {\r
        protected String entityType = "General Academy Entity";\r
\r
        public void printTaxonomy() {\r
            System.out.println("  [BASE ENTITY] Root taxonomy: EducationalEntity");\r
        }\r
    }\r
\r
    // Specialized Subclass\r
    public static class SoftwareDepartment extends EducationalEntity {\r
        private String leadTech = "Java Core & Spring";\r
\r
        public SoftwareDepartment() {\r
            this.entityType = "Technical Department";\r
        }\r
\r
        public void printDepartment() {\r
            super.printTaxonomy();\r
            System.out.println("  -> Department Type: " + this.entityType);\r
            System.out.println("  -> Technology Focus: " + this.leadTech);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: SUPERCLASS & SUBCLASS RELATIONSHIP - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SoftwareDepartment dept = new SoftwareDepartment();\r
        dept.printDepartment();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 1: Superclass and Subclass Relationship\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TAXONOMICAL TERMINOLOGY:\r
   - Superclass / Base Class: General concept containing shared state and behaviors.\r
   - Subclass / Derived Class: Specific specialization extending base capabilities.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What are the common synonyms used for parent and child classes in OOP?",shortAnswer:"Parent = Superclass = Base Class. Child = Subclass = Derived Class = Extended Class.",explanation:"Java uses the term 'superclass' for the parent and 'subclass' for the child.",hint:"Super/Base class (parent) and Sub/Derived class (child).",level:"Beginner",codeExample:"class Sub extends Super {}"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Taxonomy Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Parent (Super/Base) Class & Child (Sub/Derived) Class Relationship"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand the relational dynamics between superclasses and subclasses: generalization vs specialization and subtype polymorphism."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"SuperSubclassRelationshipDemo.java",highlightLines:[12,20,28,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Superclass & Subclass FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_005 Topic 1: Superclass & Subclass",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic1_supersub_note.txt"})}),e.jsx(s,{note:"The superclass represents generalization (what all members share), while the subclass represents specialization (what makes this specific role unique). — Sukanta Hui"})]})}export{S as default};
