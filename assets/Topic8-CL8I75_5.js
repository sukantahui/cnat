import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 8: Introduction to the 'super' Keyword in Java Inheritance\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class SuperKeywordIntroductionDemo {\r
\r
    // Parent Class: Foundation Academy\r
    public static class AcademyBase {\r
        protected String institutionName = "Coder & AccoTax Academy";\r
        protected String centralHub = "Barrackpore Main Campus";\r
\r
        public void printFoundationInfo() {\r
            System.out.printf("  [BASE ACADEMY] %s | HQ: %s\\n", institutionName, centralHub);\r
        }\r
    }\r
\r
    // Child Class: Specialized Branch\r
    public static class SoftwareEngineeringBranch extends AcademyBase {\r
        private String branchTrack = "Java Pro & Cloud Engineering";\r
\r
        public void displayBranchDetails() {\r
            System.out.println("  [CHILD BRANCH] Accessing parent members using 'super':");\r
            // 1. Accessing parent fields via 'super.fieldName'\r
            System.out.println("  -> Parent Institution: " + super.institutionName);\r
            System.out.println("  -> Parent Hub Location: " + super.centralHub);\r
\r
            // 2. Invoking parent methods via 'super.methodName()'\r
            super.printFoundationInfo();\r
\r
            System.out.println("  -> Specialized Track: " + this.branchTrack);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: INTRODUCTION TO 'super' KEYWORD - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SoftwareEngineeringBranch branch = new SoftwareEngineeringBranch();\r
        branch.displayBranchDetails();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 8: Introduction to the 'super' Keyword in Java Inheritance\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS 'super':\r
   - A reference variable targeting the IMMEDIATE SUPERCLASS of the current object.\r
   - Used to:\r
     1. Access shadowed parent instance variables ('super.field').\r
     2. Invoke overridden parent methods ('super.method()').\r
     3. Invoke parent constructors ('super()').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the 'super' keyword in Java and what does it represent?",shortAnswer:"'super' is an implicit reference variable used in subclass methods and constructors to access members (fields, methods, constructors) of the direct parent superclass.",explanation:"While 'this' refers to the current class instance, 'super' acts as a direct bridge to access overridden or shadowed parent class members.",hint:"Reference variable targeting the direct superclass members.",level:"Beginner",codeExample:"super.display(); // Calls parent display() method"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Inheritance Bridge"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Introduction to the ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"super"})," Keyword in Java Inheritance"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover the parent-access gateway in Java OOP. Learn how ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"super"})," bridges subclass execution to superclass fields, methods, and constructors."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"SuperKeywordIntroductionDemo.java",highlightLines:[24,25,28,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Introduction to 'super' FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 002_003 Topic 8: Introduction to super",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic8_super_intro_note.txt"})}),e.jsx(s,{note:"While this looks at the current class, super looks up to the parent. It is your direct telephone line to the superclass! — Sukanta Hui"})]})}export{b as default};
