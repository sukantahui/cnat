import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 7: Why 'this' Cannot Be Used Inside Static Contexts\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class StaticContextNoThisDemo {\r
\r
    public static class CampusConfig {\r
        private static String academicCenter = "Barrackpore Central Hub";\r
        private String traineeName;\r
\r
        public CampusConfig(String traineeName) {\r
            this.traineeName = traineeName; // VALID: Instance context has 'this'\r
        }\r
\r
        // STATIC METHOD (Class-level context in Metaspace)\r
        public static void printCenterInfo() {\r
            System.out.println("  [STATIC METHOD] Academic Center: " + academicCenter);\r
\r
            // ================================================================\r
            // WHY 'this' IS STRICTLY FORBIDDEN IN STATIC CONTEXTS:\r
            // ================================================================\r
            // 1. Static methods belong to the Class and are invoked on the class,\r
            //    not on any Heap object (e.g. 'CampusConfig.printCenterInfo()').\r
            // 2. No Heap instance reference exists in local variable slot 0!\r
            // 3. Writing 'this.traineeName' causes a COMPILE-TIME ERROR:\r
            //    "non-static variable this cannot be referenced from a static context"\r
            // ================================================================\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: WHY 'this' IS FORBIDDEN IN STATIC CONTEXTS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CampusConfig.printCenterInfo();\r
\r
        CampusConfig s1 = new CampusConfig("Swadeep Paul");\r
        System.out.println("  Created instance for Swadeep. Instance context has 'this', static does not.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 7: Why 'this' Cannot Be Used Inside Static Contexts\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATIC VS 'this':\r
   -----------------------------------------------------------------------------\r
   - Static methods/blocks execute at the CLASS level (Metaspace).\r
   - 'this' requires a living OBJECT on the Heap (Eden space).\r
   - Calling 'this' inside static context triggers:\r
     "compile-time error: non-static variable this cannot be referenced from a static context"\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does Java prohibit the use of 'this' inside static methods and static blocks?",shortAnswer:"Because static members belong to the class in Metaspace and execute without any Heap instance; there is no object instance in slot 0 to point to.",explanation:"Static methods are called via 'ClassName.method()'. Since zero instances may exist, referencing 'this' is conceptually and mechanically impossible.",hint:"Static context has no Heap instance and no slot 0 receiver.",level:"Beginner",codeExample:"// Compile Error: static void run() { System.out.println(this); }"}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Static Context Constraints"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why ",e.jsx("code",{className:"text-sky-400 font-mono",children:"this"})," Cannot Be Used Inside Static Contexts"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Deep-dive into the architectural divide between Metaspace class-level static routines and Heap-level instance execution. Understand why static frames have no ",e.jsx("code",{className:"text-rose-400 font-mono",children:"this"})," receiver pointer."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"StaticContextNoThisDemo.java",highlightLines:[12,16,22,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Static Context and 'this' FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:r,title:"Module 002_003 Topic 7: Static Context and 'this'",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic7_static_no_this_note.txt"})}),e.jsx(s,{note:"Static methods belong to the whole classroom, while this belongs to an individual student. You cannot point to an individual student's desk when you are addressing the entire building! — Sukanta Hui"})]})}export{C as default};
