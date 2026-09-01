import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 3: Using 'this()' to Invoke Overloaded Constructors in the Same Class\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class ThisConstructorInvocationMasteryDemo {\r
\r
    public static class CourseModule {\r
        private String moduleCode;\r
        private String moduleTitle;\r
        private int durationWeeks;\r
\r
        // 1-Arg Constructor\r
        public CourseModule(String moduleCode) {\r
            this(moduleCode, "Core Foundations", 4); // Chaining to 3-arg constructor\r
        }\r
\r
        // 2-Arg Constructor\r
        public CourseModule(String moduleCode, String moduleTitle) {\r
            this(moduleCode, moduleTitle, 6); // Chaining to 3-arg constructor\r
        }\r
\r
        // 3-Arg Master Constructor\r
        public CourseModule(String moduleCode, String moduleTitle, int durationWeeks) {\r
            this.moduleCode = moduleCode;\r
            this.moduleTitle = moduleTitle;\r
            this.durationWeeks = durationWeeks;\r
            System.out.printf("  [MASTER CONSTRUCTOR] %s: '%s' (%d weeks)\\n", moduleCode, moduleTitle, durationWeeks);\r
        }\r
\r
        public void printInfo() {\r
            System.out.printf("  -> [%s] %s (%d Weeks)\\n", moduleCode, moduleTitle, durationWeeks);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: this() CONSTRUCTOR INVOCATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CourseModule m1 = new CourseModule("MOD-101");\r
        m1.printInfo();\r
\r
        CourseModule m2 = new CourseModule("MOD-102", "Advanced JVM Internals");\r
        m2.printInfo();\r
\r
        CourseModule m3 = new CourseModule("MOD-103", "Full Stack Spring Boot", 12);\r
        m3.printInfo();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 3: Using 'this()' to Invoke Overloaded Constructors\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'this()' RULES:\r
   -----------------------------------------------------------------------------\r
   - Must be the FIRST statement in a constructor body.\r
   - Delegates initialization to another constructor in the same class.\r
   - Prevents code duplication by routing to a Master Constructor.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the function of 'this()' with parentheses in Java?",shortAnswer:"It invokes an overloaded constructor in the same class, passing parameters to delegate initialization logic.",explanation:"'this()' can only be called from inside a constructor body and must be the very first statement on line 1.",hint:"Invokes overloaded constructor in the same class.",level:"Beginner",codeExample:'public Student(int id) { this(id, "Default"); }'}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Constructor Delegation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Using ",e.jsx("code",{className:"text-sky-400 font-mono",children:"this()"})," to Invoke Overloaded Constructors"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this(...)"})," chains constructor calls within the same class to centralize domain initialization and eliminate redundant assignment logic."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ThisConstructorInvocationMasteryDemo.java",highlightLines:[15,20,25,38,41,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"this() Constructor Invocation FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 002_003 Topic 3: this() Constructor Invocation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic3_this_constructor_note.txt"})}),e.jsx(o,{note:"this() is your constructor delegation bridge. Always chain smaller constructors to your master constructor to keep your codebase DRY! — Sukanta Hui"})]})}export{C as default};
