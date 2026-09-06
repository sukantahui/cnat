import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 13: The Fragile Base Class Problem Explained\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class FragileBaseClassProblemDemo {\r
\r
    // Base Class (Vendor / Parent Library)\r
    public static class BaseEnrollmentRepository {\r
        public void addStudent(String name) {\r
            System.out.println("  [BASE] Added student: " + name);\r
        }\r
\r
        public void addAllStudents(String[] names) {\r
            // Version 1 of Base Class calls addStudent() internally in loop\r
            for (String name : names) {\r
                addStudent(name);\r
            }\r
        }\r
    }\r
\r
    // Subclass (Attempting to count additions)\r
    public static class AuditedEnrollmentRepository extends BaseEnrollmentRepository {\r
        private int addCount = 0;\r
\r
        @Override\r
        public void addStudent(String name) {\r
            addCount++;\r
            super.addStudent(name);\r
        }\r
\r
        @Override\r
        public void addAllStudents(String[] names) {\r
            // BUG RISK (Fragile Base Class):\r
            // If we increment by names.length AND call super.addAllStudents(),\r
            // and super internally calls addStudent(), addCount is DOUBLED!\r
            addCount += names.length;\r
            super.addAllStudents(names);\r
        }\r
\r
        public int getAddCount() { return addCount; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: THE FRAGILE BASE CLASS PROBLEM - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AuditedEnrollmentRepository repo = new AuditedEnrollmentRepository();\r
        String[] batch = {"Swadeep Paul", "Tuhina Das", "Debangshu Mukherjee"};\r
\r
        System.out.println(">>> Adding batch of 3 students:");\r
        repo.addAllStudents(batch);\r
\r
        System.out.println("\\n>>> Observe the Double Counting Bug:");\r
        System.out.println("  Expected Count: 3");\r
        System.out.println("  Actual Count  : " + repo.getAddCount() + " (Double Counted due to Superclass Coupling!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 13: Fragile Base Class Problem\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FRAGILE BASE CLASS VULNERABILITY:\r
   - Subclasses are tightly coupled to superclass internal implementations.\r
   - Changes in superclass logic cause silent runtime bugs in child classes.\r
   - Solution: Use Composition with Forwarding (Decorator / Wrapper pattern).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the Fragile Base Class problem in object-oriented programming?",shortAnswer:"An architectural vulnerability where seemingly harmless modifications or internal method invocations in a superclass inadvertently break the functionality of subclasses that depend on those implementation details.",explanation:"Inheritance creates tight white-box coupling, making base classes fragile.",hint:"Superclass implementation changes break child subclass behavior.",level:"Advanced",codeExample:"// AddCount doubled when super.addAll() internally calls add()"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Architectural Pitfalls"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"The Fragile Base Class Problem Explained"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand how superclass implementation changes can silently introduce catastrophic double-counting and behavioral bugs into subclasses."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"FragileBaseClassProblemDemo.java",highlightLines:[12,16,26,32,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Fragile Base Class FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 002_005 Topic 13: Fragile Base Class Problem",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic13_fragile_base_class_note.txt"})}),e.jsx(r,{note:"The Fragile Base Class problem shows why inheritance can be dangerous: a simple internal change in the parent class can break all child classes silently! — Sukanta Hui"})]})}export{g as default};
