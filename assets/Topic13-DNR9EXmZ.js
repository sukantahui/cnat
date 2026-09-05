import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 13: Rules of super(): Must Be the First Statement in Child Constructor\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class SuperCallFirstStatementRulesDemo {\r
\r
    public static class SmartParent {\r
        protected String centerCode;\r
\r
        public SmartParent(String centerCode) {\r
            this.centerCode = centerCode;\r
        }\r
    }\r
\r
    public static class SmartChild extends SmartParent {\r
        private String candidateName;\r
\r
        // Static helper function is PERMITTED in super(...) argument\r
        public static String sanitizeHub(String rawHub) {\r
            return "HUB-" + rawHub.trim().toUpperCase();\r
        }\r
\r
        // VALID: super() as strict statement 1\r
        public SmartChild(String rawHub, String candidateName) {\r
            super(sanitizeHub(rawHub)); // Line 1: VALID!\r
            this.candidateName = candidateName;\r
            System.out.printf("  [INITIALIZED] Candidate: %s at %s\\n", candidateName, this.centerCode);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: RULES OF super() CALL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SmartChild child = new SmartChild("barrackpore north", "Swadeep Paul");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 13: Rules of super(): First Statement Mandate\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 'super()' FIRST STATEMENT RULE:\r
   - 'super(...)' MUST be statement #1 in the child constructor.\r
   - You cannot access child instance variables in super(...) arguments.\r
   - Static methods and expressions CAN be passed into super(...).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the primary syntax rule for 'super()' constructor invocation in Java?",shortAnswer:"'super(...)' MUST be the very first executable statement in the subclass constructor body.",explanation:"Any code before 'super()' causes a compile error: 'call to super must be first statement in constructor'.",hint:"super() must be on line 1.",level:"Beginner",codeExample:"public Child(int id) { super(id); this.flag = true; }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Compiler Syntax Constraints"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Rules of ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"super()"}),": The First Statement Mandate"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the exact compiler laws governing ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"super(...)"}),": line 1 placement, permitted static expressions in arguments, and parent-first memory guarantees."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"SuperCallFirstStatementRulesDemo.java",highlightLines:[22,23,24,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Rules of super() FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_003 Topic 13: Rules of super() Call",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic13_super_rules_note.txt"})}),e.jsx(s,{note:"Just like this(), super() must sit on Line 1. The parent must be born before the child can add its own state! — Sukanta Hui"})]})}export{b as default};
