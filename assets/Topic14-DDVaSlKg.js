import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 14: Why this() and super() Cannot Both Be Written in Same Constructor Body\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class ThisAndSuperMutualExclusionDemo {\r
\r
    public static class BasePerson {\r
        public BasePerson() {\r
            System.out.println("  [PARENT] BasePerson initialized ONCE on Heap.");\r
        }\r
    }\r
\r
    public static class Trainee extends BasePerson {\r
        private int id;\r
        private String name;\r
\r
        // Constructor 1: Uses this() to chain to Constructor 2\r
        public Trainee(int id) {\r
            this(id, "Provisional"); // Delegates to Constructor 2\r
            // super(); // CANNOT be written here! Both this() and super() require Line 1!\r
        }\r
\r
        // Constructor 2: Uses implicit super() to initialize parent\r
        public Trainee(int id, String name) {\r
            super(); // Line 1: Parent initialized here!\r
            this.id = id;\r
            this.name = name;\r
            System.out.printf("  [CHILD] Trainee #%d (%s) initialized.\\n", this.id, this.name);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: this() & super() MUTUAL EXCLUSION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Instantiating Trainee via 1-arg constructor (which chains via this()):");\r
        Trainee t = new Trainee(101);\r
\r
        System.out.println("\\n>>> Architectural Reason for Mutual Exclusion:");\r
        System.out.println("  1. If both were allowed, the parent constructor would execute TWICE for 1 object!");\r
        System.out.println("  2. Both 'this()' and 'super()' demand to be the FIRST statement on Line 1.");\r
        System.out.println("  3. Therefore, they are mutually exclusive in any single constructor body.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 14: Mutual Exclusion of this() and super()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY MUTUALLY EXCLUSIVE:\r
   - Line 1 Conflict: Both commands must be the first instruction.\r
   - Lifecycle Integrity: Chaining via 'this()' routes to a peer constructor\r
     which executes 'super()', ensuring the parent is created exactly ONCE.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why can 'this()' and 'super()' NOT both be written in the same constructor body?",shortAnswer:"1. Both require being the very first statement on line 1 (syntactic conflict). 2. Allowing both would cause parent constructors to execute multiple times for a single object (semantic error).",explanation:"When Constructor A calls 'this()', it delegates to Constructor B, which in turn calls 'super()'. The parent is initialized exactly once.",hint:"Syntactic line 1 conflict and prevents duplicate parent initialization.",level:"Intermediate",codeExample:"// Illegal: cannot have this() and super() in same body"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Constructor Mutual Exclusion"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why ",e.jsx("code",{className:"text-sky-400 font-mono",children:"this()"})," and ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"super()"})," Cannot Both Be Written in the Same Constructor"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand the syntactic and JVM architectural reasons why ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this()"})," and ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"super()"})," are strictly mutually exclusive in any constructor body."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ThisAndSuperMutualExclusionDemo.java",highlightLines:[19,25,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"this() and super() Mutual Exclusion FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 002_003 Topic 14: Mutual Exclusion of this() and super()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic14_mutual_exclusion_note.txt"})}),e.jsx(s,{note:"Either you delegate to a peer constructor using this(), or you initialize the parent using super(). You can never do both in the same body because parent initialization must happen only once! — Sukanta Hui"})]})}export{y as default};
