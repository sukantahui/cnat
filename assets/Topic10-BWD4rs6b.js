import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 10: Upcasting (Parent p = new Child()): Implicit & Always Safe\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class UpcastingReferenceWideningDemo {\r
\r
    public static class Staff {\r
        public void work() { System.out.println("  [STAFF] General staff duties."); }\r
    }\r
\r
    public static class Instructor extends Staff {\r
        @Override\r
        public void work() { System.out.println("  [INSTRUCTOR] Teaching Java Full Stack in Barrackpore lab!"); }\r
\r
        public void gradeAssignments() {\r
            System.out.println("  [GRADING] Grading Swadeep's and Tuhina's projects.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: UPCASTING (WIDENING REFERENCE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // UPCASTING: Assigning a subclass instance to a superclass reference variable\r
        // Implicit, 100% type-safe, no cast operator '(Staff)' required!\r
        Staff member = new Instructor();\r
\r
        System.out.println(">>> 1. Calling overridden method via Upcasted reference (Dynamic Dispatch):");\r
        member.work(); // Dispatches to Instructor.work()!\r
\r
        System.out.println("\\n>>> 2. Scope Restriction of Upcasted reference:");\r
        // member.gradeAssignments(); // COMPILE ERROR: Reference type 'Staff' doesn't declare gradeAssignments()!\r
        System.out.println("  - Upcasted reference can ONLY see methods declared in the Parent 'Staff' class.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 10: Upcasting (Widening Reference)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UPCASTING RULES:\r
   - Syntax: 'Parent p = new Child();'\r
   - Implicit & 100% Safe (no ClassCastException possible).\r
   - Visibility is constrained by the Parent reference type at compile time.\r
   - Behavior is dispatched to the Child object at runtime.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is Upcasting in Java and is an explicit cast operator required?",shortAnswer:"Upcasting is casting a subtype reference to a supertype reference (e.g. 'Staff s = new Instructor()'). It is implicit, completely automatic, and 100% type-safe without requiring any cast operator.",explanation:"Because every Instructor IS-A Staff, upcasting is always guaranteed to succeed.",hint:"Subclass to superclass reference; implicit and always safe.",level:"Beginner",codeExample:"Animal a = new Dog(); // Implicit Upcasting"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Widening Reference"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Upcasting (",e.jsx("code",{className:"text-sky-300 font-mono",children:"Parent p = new Child()"}),"): Implicit & Safe"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn why Upcasting is the gateway to polymorphic collections and clean API design: widening references safely with zero casting syntax."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"UpcastingReferenceWideningDemo.java",highlightLines:[12,17,27,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Upcasting FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 002_006 Topic 10: Upcasting Widening Reference",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic10_upcasting_note.txt"})}),e.jsx(r,{note:"Upcasting is always safe because an Instructor is guaranteed to be a Staff member. It lets you write general code that works with any staff member! — Sukanta Hui"})]})}export{g as default};
