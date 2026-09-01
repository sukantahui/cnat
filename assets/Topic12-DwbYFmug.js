import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 12: Implicit super() Insertion by Compiler When No super() Is Written\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class ImplicitSuperInsertionDemo {\r
\r
    // Parent Class with No-Arg Constructor\r
    public static class BaseAcademyMember {\r
        public BaseAcademyMember() {\r
            System.out.println("  [PARENT] BaseAcademyMember() no-arg constructor executed automatically!");\r
        }\r
    }\r
\r
    // Child Class with No Explicit super() written\r
    public static class Trainee extends BaseAcademyMember {\r
        private String traineeName;\r
\r
        public Trainee(String traineeName) {\r
            // COMPILER INJECTS 'super();' HERE AUTOMATICALLY ON LINE 1!\r
            this.traineeName = traineeName;\r
            System.out.println("  [CHILD] Trainee constructor completed for: " + this.traineeName);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: IMPLICIT super() INSERTION BY COMPILER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Creating Trainee (Observe Parent constructor running automatically):");\r
        Trainee t = new Trainee("Swadeep Paul");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 12: Implicit super() Insertion by Compiler\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. IMPLICIT super() RULES:\r
   - If you write neither 'this()' nor 'super()' on Line 1, javac automatically\r
     injects 'super();' at compile time.\r
   - TRAP: If the parent class does NOT have an accessible no-arg constructor,\r
     this implicit 'super()' fails with a compile error!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"When does the Java compiler automatically insert 'super()' into a constructor?",shortAnswer:"Whenever a constructor contains neither an explicit 'this(...)' call nor an explicit 'super(...)' call as its first statement.",explanation:"The compiler injects a zero-argument 'super();' call on line 1 to initialize the superclass.",hint:"Automatically injected when neither this() nor super() is written on line 1.",level:"Beginner",codeExample:"public Child() { /* Compiler injects super(); here */ }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Compiler Automation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Implicit ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"super()"})," Insertion by Compiler"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand how javac automatically guarantees parent initialization by synthesizing ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"super();"})," on line 1 when no constructor chaining call is explicitly authored."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ImplicitSuperInsertionDemo.java",highlightLines:[12,20,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Implicit super() FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 002_003 Topic 12: Implicit super() Insertion",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic12_implicit_super_note.txt"})}),e.jsx(a,{note:"Even if you don't write super(), the compiler writes it for you. Java always ensures parent classes are initialized first! — Sukanta Hui"})]})}export{y as default};
