import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 2: The 'extends' Keyword: Syntax and Rules\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class ExtendsKeywordSyntaxRulesDemo {\r
\r
    // Valid Base Class\r
    public static class HardwareDevice {\r
        protected String deviceSerial;\r
\r
        public HardwareDevice(String serial) {\r
            this.deviceSerial = serial;\r
        }\r
    }\r
\r
    // Subclass using 'extends'\r
    public static class LabWorkstation extends HardwareDevice {\r
        private int ramGigabytes;\r
\r
        public LabWorkstation(String serial, int ram) {\r
            super(serial); // Required parent constructor invocation\r
            this.ramGigabytes = ram;\r
        }\r
\r
        public void printConfig() {\r
            System.out.printf("  [WORKSTATION] Serial: %s | RAM: %d GB\\n", deviceSerial, ramGigabytes);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THE 'extends' KEYWORD RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        LabWorkstation station = new LabWorkstation("BKP-TERMINAL-01", 32);\r
        station.printConfig();\r
\r
        System.out.println("\\n>>> Core 'extends' Rules in Java:");\r
        System.out.println("  1. A class can extend ONLY ONE superclass (Single class inheritance).");\r
        System.out.println("  2. 'extends' creates a direct IS-A relationship.");\r
        System.out.println("  3. A final class cannot be extended (e.g. 'class MyString extends String' -> ERROR).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 2: The 'extends' Keyword Syntax & Rules\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'extends' SYNTAX RULES:\r
   - 'public class Child extends Parent { ... }'\r
   - Exactly ONE superclass allowed per class.\r
   - Final classes CANNOT be extended.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the primary rules when using the 'extends' keyword in Java class declarations?",shortAnswer:"1. A class can extend at most ONE direct superclass (single class inheritance). 2. Cannot extend a class marked 'final'. 3. Child must have access to at least one parent constructor.",explanation:"Java does not support multiple class inheritance ('class C extends A, B' is a compile-time error).",hint:"Single class extension only; cannot extend final classes.",level:"Beginner",codeExample:"public class Dog extends Animal { /* Valid */ }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Syntax Rules"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-amber-400 font-mono",children:"extends"})," Keyword: Syntax and Rules"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the exact syntax and compiler restrictions of the ",e.jsx("code",{className:"text-amber-300 font-mono",children:"extends"})," keyword in Java."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"ExtendsKeywordSyntaxRulesDemo.java",highlightLines:[12,19,23,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"'extends' Keyword FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 002_005 Topic 2: extends Keyword Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic2_extends_rules_note.txt"})}),e.jsx(r,{note:"In Java, you can only extend one class! If you try to write 'class C extends A, B', the compiler will throw an error. Keep your inheritance trees single-parent! — Sukanta Hui"})]})}export{h as default};
