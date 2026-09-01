import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 9: IS-A Relationship (Inheritance) vs HAS-A Relationship (Association)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class IsAvsHasARelationshipDemo {\r
\r
    // Component Component (For HAS-A)\r
    public static class AcademicBadge {\r
        private String badgeId = "BADGE-BKP-2026";\r
        public void printBadge() { System.out.println("  [BADGE] ID: " + badgeId); }\r
    }\r
\r
    // Base Entity (For IS-A)\r
    public static class AcademyPerson {\r
        protected String name;\r
        public AcademyPerson(String name) { this.name = name; }\r
    }\r
\r
    // Trainee IS-A AcademyPerson (Inheritance)\r
    // Trainee HAS-A AcademicBadge (Association)\r
    public static class Trainee extends AcademyPerson {\r
        // HAS-A Relationship: Trainee contains an AcademicBadge reference\r
        private AcademicBadge badge;\r
\r
        public Trainee(String name) {\r
            super(name); // IS-A relationship\r
            this.badge = new AcademicBadge(); // HAS-A relationship\r
        }\r
\r
        public void printIdentity() {\r
            System.out.println("  [IS-A] Trainee IS-A AcademyPerson named: " + this.name);\r
            System.out.print("  [HAS-A] Trainee HAS-A AcademicBadge: ");\r
            this.badge.printBadge();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: IS-A VS HAS-A RELATIONSHIP - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Trainee swadeep = new Trainee("Swadeep Paul");\r
        swadeep.printIdentity();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 9: IS-A vs HAS-A Relationships\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RELATIONSHIP MODELING:\r
   - IS-A: Modeled using 'extends' / 'implements' (Inheritance).\r
   - HAS-A: Modeled using instance variable references (Association).\r
   - Rule of Thumb: If X is a type of Y, use IS-A. If X contains Y, use HAS-A.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the fundamental difference between an IS-A relationship and a HAS-A relationship in Java?",shortAnswer:"IS-A represents Inheritance ('extends') where a child is a specialized subtype of the parent (e.g. Dog IS-A Animal). HAS-A represents Association/Composition where an object contains a reference to another object (e.g. Car HAS-A Engine).",explanation:"IS-A binds classes tightly at compile time. HAS-A provides loose coupling and dynamic runtime flexibility.",hint:"IS-A = Inheritance ('extends'); HAS-A = Association (holding object references).",level:"Beginner",codeExample:"class Car extends Vehicle { Engine engine; } // Car IS-A Vehicle; Car HAS-A Engine"}];function u(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Relationship Modeling"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-sky-300 font-mono",children:"IS-A"})," Relationship (Inheritance) vs ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"HAS-A"})," Relationship (Association)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the foundational conceptual distinction in object-oriented domain modeling: when to inherit via ",e.jsx("code",{className:"text-sky-300 font-mono",children:"extends"})," versus when to associate via instance references."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"IsAvsHasARelationshipDemo.java",highlightLines:[12,17,23,25,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"IS-A vs HAS-A FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 002_005 Topic 9: IS-A vs HAS-A",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic9_is_a_has_a_note.txt"})}),e.jsx(i,{note:"Swadeep IS-A Person (Inheritance), but Swadeep HAS-A Laptop (Association). Don't make Swadeep extend Laptop! Always choose the right relationship for your domain entities. — Sukanta Hui"})]})}export{u as default};
