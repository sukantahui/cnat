import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 5: Restrictions on Static Methods: No Instance Variables, 'this' or 'super'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class StaticMethodRestrictionsDemo {\r
\r
    public static class TraineePortal {\r
        public static String organizationName = "Coder & AccoTax";\r
        private String traineeName;\r
\r
        public TraineePortal(String traineeName) {\r
            this.traineeName = traineeName;\r
        }\r
\r
        // STATIC METHOD\r
        public static void displayOrganizationInfo() {\r
            // 1. CAN access other static members:\r
            System.out.println("  [STATIC METHOD] Organization: " + organizationName);\r
\r
            // 2. CANNOT access instance variables:\r
            // System.out.println(this.traineeName); // COMPILE ERROR!\r
\r
            // 3. CANNOT use 'this' or 'super':\r
            // System.out.println(this); // COMPILE ERROR!\r
\r
            // 4. CAN access instance members ONLY through a newly passed object reference:\r
            TraineePortal temp = new TraineePortal("Guest Trainee");\r
            System.out.println("  [STATIC METHOD] Accessing instance via explicit ref: " + temp.traineeName);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: STATIC METHOD RESTRICTIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TraineePortal.displayOrganizationInfo();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 5: Restrictions on Static Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 2 GOLDEN RESTRICTIONS:\r
   - Restriction 1: Static methods cannot directly reference instance fields/methods.\r
   - Restriction 2: Static methods cannot use 'this' or 'super'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the two absolute restrictions on static methods in Java?",shortAnswer:"1. Cannot access instance variables or instance methods directly without an explicit object reference. 2. Cannot use the 'this' or 'super' keywords.",explanation:"Because static methods execute in class context where no Heap instance pointer is present.",hint:"No direct instance field access and no 'this' or 'super'.",level:"Beginner",codeExample:"static void test() { /* No this.x allowed */ }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Compiler Prohibitions"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Restrictions on Static Methods: No Instance Variables, ",e.jsx("code",{className:"text-rose-400 font-mono",children:"this"})," or ",e.jsx("code",{className:"text-rose-400 font-mono",children:"super"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand why static methods cannot interact directly with instance state and why attempting to use ",e.jsx("code",{className:"text-rose-400 font-mono",children:"this"})," or ",e.jsx("code",{className:"text-rose-400 font-mono",children:"super"})," triggers compile-time errors."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StaticMethodRestrictionsDemo.java",highlightLines:[19,28,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Static Method Restrictions FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 002_004 Topic 5: Static Method Restrictions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic5_static_restrictions_note.txt"})}),e.jsx(r,{note:"If a static method needs to access instance data, it must create or receive an object reference as a parameter! — Sukanta Hui"})]})}export{b as default};
