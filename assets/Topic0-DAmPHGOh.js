import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 0: Why Nest Classes: Logical Grouping, Encapsulation & Cohesive Design\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
public class WhyNestClassesOverviewDemo {\r
\r
    // Outer Class representing Barrackpore Training Center:\r
    private String centerName = "Barrackpore AccoTax Hub";\r
    private int totalStudents = 120;\r
\r
    // Helper Inner Class logically grouped exclusively within its enclosing center:\r
    public class CenterStats {\r
        public void displayReport() {\r
            // Direct access to outer private fields:\r
            System.out.println("  Center Name   : " + centerName);\r
            System.out.println("  Enrolled Count: " + totalStudents + " trainees");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY NEST CLASSES IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 3 Architectural Reasons to Nest Classes:");\r
        System.out.println("  1. Logical Grouping: Classes used in only one place stay tightly coupled.");\r
        System.out.println("  2. Enhanced Encapsulation: Inner class can access private outer fields directly.");\r
        System.out.println("  3. Code Readability: Helper models reside right next to where they are consumed.");\r
\r
        WhyNestClassesOverviewDemo hub = new WhyNestClassesOverviewDemo();\r
        WhyNestClassesOverviewDemo.CenterStats stats = hub.new CenterStats();\r
\r
        System.out.println("\\n>>> Executing Nested CenterStats Helper:");\r
        stats.displayReport();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 0: Why Nest Classes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NESTING ADVANTAGES:\r
   - Logical Grouping of helper classes.\r
   - Direct access to outer private fields.\r
   - Eliminates cluttering the top-level package namespace.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What are the primary architectural benefits of nesting one class inside another in Java?",shortAnswer:"1. Logical Grouping: If a class is useful to only one other class, it is logical to embed it. 2. Enhanced Encapsulation: Inner classes can access all private members of the enclosing outer class. 3. More readable and maintainable source files.",explanation:"Examples in Java standard library include Map.Entry inside Map and Node inside LinkedList.",hint:"Logical grouping, direct access to outer private state, and code readability.",level:"Beginner",codeExample:"public class Map { public static class Entry { ... } }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Encapsulation Strategy"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Why Nest Classes: Logical Grouping & Enhanced Encapsulation"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn why nested classes improve object-oriented architectures: grouping helper data models, accessing private outer members without getters, and avoiding package namespace clutter."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"WhyNestClassesOverviewDemo.java",highlightLines:[7,10,11,14,15,16,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Why Nest Classes FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_007 Topic 0: Why Nest Classes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic0_why_nest_classes_note.txt"})}),e.jsx(a,{note:"If a helper class like 'InvoiceItem' only belongs to 'Invoice', don't create a separate public top-level class. Nest it inside Invoice to keep your domain model clean and tightly encapsulated! — Sukanta Hui"})]})}export{g as default};
