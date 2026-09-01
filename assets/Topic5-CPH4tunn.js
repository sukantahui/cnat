import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 5: Passing 'this' as an Argument in Constructor Calls (Bi-directional Association)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class PassingThisInConstructorDemo {\r
\r
    // Helper / Child Component\r
    public static class StudentFeeLedger {\r
        private final StudentProfile student; // Holds reference back to parent\r
        private double totalDue = 5000.0;\r
\r
        // Constructor accepting parent 'this'\r
        public StudentFeeLedger(StudentProfile student) {\r
            this.student = student;\r
            System.out.printf("  [LEDGER CREATED] Bound ledger to student: %s (Roll: %d)\\n",\r
                    this.student.getName(), this.student.getRoll());\r
        }\r
\r
        public void printLedger() {\r
            System.out.printf("  -> Ledger for %s | Balance Due: ₹%.2f\\n", student.getName(), totalDue);\r
        }\r
    }\r
\r
    // Parent Domain Entity\r
    public static class StudentProfile {\r
        private final int roll;\r
        private final String name;\r
        private final StudentFeeLedger ledger;\r
\r
        public StudentProfile(int roll, String name) {\r
            this.roll = roll;\r
            this.name = name;\r
            // Passing 'this' (current instance) into the constructor of another class\r
            this.ledger = new StudentFeeLedger(this);\r
        }\r
\r
        public int getRoll() { return roll; }\r
        public String getName() { return name; }\r
        public StudentFeeLedger getLedger() { return ledger; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: PASSING 'this' IN CONSTRUCTOR CALLS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentProfile s1 = new StudentProfile(101, "Swadeep Paul");\r
        s1.getLedger().printLedger();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 5: Passing 'this' as an Argument in Constructor Calls\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PASSING 'this' IN CONSTRUCTOR CALLS:\r
   - Syntax: 'this.child = new ChildComponent(this);'\r
   - Binds child component to parent instance for bi-directional navigation.\r
   - CAUTION: Ensure fields are initialized before passing 'this' to avoid\r
     exposing partially constructed state.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why pass 'this' as an argument into another object's constructor?",shortAnswer:"To establish a bi-directional association or parent-child relationship (e.g. a Ledger holding a reference back to its Student owner).",explanation:"When an object instantiates its own helper component, passing 'this' allows the helper to maintain a back-reference to its creator.",hint:"Establishes bi-directional parent-child association.",level:"Intermediate",codeExample:"this.ledger = new Ledger(this);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Bi-directional Modeling"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Passing ",e.jsx("code",{className:"text-sky-400 font-mono",children:"this"})," as an Argument in Constructor Calls"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build tightly-coupled domain relationships by passing ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this"})," to child constructors, establishing parent-child back-pointers cleanly and safely."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"PassingThisInConstructorDemo.java",highlightLines:[13,29,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Passing 'this' in Constructor Calls FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 002_003 Topic 5: Passing this in Constructor Calls",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic5_passing_this_constructor_note.txt"})}),e.jsx(s,{note:"When a parent creates a child ledger, passing this lets the child know who its parent is. Just ensure all your parent fields are populated first! — Sukanta Hui"})]})}export{x as default};
