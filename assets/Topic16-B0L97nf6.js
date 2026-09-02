import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 16: Recursive Constructor Invocation Compilation Error\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
public class RecursiveConstructorErrorDemo {\r
\r
    // Valid Non-Circular Chaining Example\r
    public static class CleanChainingModel {\r
        private int id;\r
        private String name;\r
\r
        public CleanChainingModel() {\r
            this(101); // 0-arg calls 1-arg\r
        }\r
\r
        public CleanChainingModel(int id) {\r
            this(id, "Standard Trainee"); // 1-arg calls 2-arg\r
        }\r
\r
        public CleanChainingModel(int id, String name) {\r
            // Master constructor: TERMINATES CHAIN! (No this() call)\r
            this.id = id;\r
            this.name = name;\r
            System.out.printf("  [CLEAN CHAIN TERMINATED] ID: %d, Name: %s\\n", this.id, this.name);\r
        }\r
    }\r
\r
    // ========================================================================\r
    // THE RECURSIVE CONSTRUCTOR ERROR TRAP:\r
    // ========================================================================\r
    // If you write circular this() calls:\r
    // class CircularModel {\r
    //     CircularModel() { this(10); } // Constructor A calls B\r
    //     CircularModel(int x) { this(); } // Constructor B calls A!\r
    // }\r
    //\r
    // The Java compiler detects the cycle and refuses to compile:\r
    // "ERROR: recursive constructor invocation"\r
    // ========================================================================\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: RECURSIVE CONSTRUCTOR INVOCATION ANALYSIS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Creating Clean Terminating Constructor Chain:");\r
        CleanChainingModel model = new CleanChainingModel();\r
\r
        System.out.println("\\n>>> 2. Architectural Analysis of Recursive Constructor Error:");\r
        System.out.println("  - Why does javac check for cycles? Because unlike methods with base cases,");\r
        System.out.println("    constructor chaining via this() on line 1 is UNCONDITIONALLY recursive.");\r
        System.out.println("  - Allowing circular this() would freeze the JVM or trigger StackOverflowError.");\r
        System.out.println("  - Therefore, Java catches and rejects circular this() at COMPILE TIME!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 16: Recursive Constructor Invocation Compilation Error\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RECURSIVE CONSTRUCTOR LAW:\r
   -----------------------------------------------------------------------------\r
   - Constructor chaining MUST be a Directed Acyclic Graph (DAG).\r
   - Every chain of 'this()' calls MUST terminate at a Master Constructor that\r
     does NOT call 'this()'.\r
   - Any cycle (A → B → A) triggers:\r
     "compile-time error: recursive constructor invocation"\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the 'recursive constructor invocation' error in Java?",shortAnswer:"A compile-time error triggered when overloaded constructors form a circular delegation loop using 'this()' (e.g. A calls B, and B calls A).",explanation:"Because 'this()' must be on line 1, constructor chaining is unconditional. The compiler builds a dependency graph and rejects circular dependencies.",hint:"Compile error caused by circular this() calls.",level:"Beginner",codeExample:`// Compile Error: recursive constructor invocation
Demo() { this(1); }
Demo(int x) { this(); }`},{question:"Why does Java catch constructor recursion at compile time, whereas method recursion is detected at runtime?",shortAnswer:"Method recursion can have dynamic runtime base cases ('if (n > 0) rec()'). Constructor 'this()' calls on line 1 are unconditional and can never terminate.",explanation:"Since constructor chaining has no base case exit, it is guaranteed to be an infinite loop, allowing javac to reject it at compile time.",hint:"Constructor this() is unconditional; method recursion has runtime base cases.",level:"Intermediate",codeExample:`// Method recursion has 'if (n <= 1) return;'
// Constructor this() has no conditionals allowed`}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Compiler Trap & Detection"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Recursive Constructor Invocation Compilation Error"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand why the Java compiler strictly prohibits circular ",e.jsx("code",{className:"text-rose-400 font-mono",children:"this()"})," chains, how javac detects dependency cycles, and how to guarantee that every constructor chain terminates cleanly."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔄"})," The Circular Delegation Trap"]}),e.jsx("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:e.jsxs("p",{children:["When writing overloaded constructors, calling ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this()"})," creates a delegation chain. If Constructor A calls Constructor B, and Constructor B calls Constructor A, an infinite loop is forged. Java detects this at compile time with the error ",e.jsx("strong",{className:"text-rose-400 font-mono",children:"recursive constructor invocation"}),"."]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"RecursiveConstructorErrorDemo.java",highlightLines:[12,16,20,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Recursive Constructor FAQs (Technical Q&As)",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 002_002 Topic 16: Recursive Constructor Error",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_002_topic16_recursive_constructor_note.txt"})}),e.jsx(a,{note:"Every chain of this(...) calls must terminate at a Master constructor that assigns the fields. Never allow constructor A to call B if B calls A! — Sukanta Hui"})]})}export{C as default};
