import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 6: What is Inherited and What is NOT Inherited\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class InheritanceScopeRulesDemo {\r
\r
    public static class BaseAccount {\r
        public String publicNotice = "Welcome to AccoTax Bank";\r
        protected double balance = 50000.0;\r
        String packageBranch = "Barrackpore Main";\r
        private String secretPin = "9876"; // NOT INHERITED / NOT DIRECTLY ACCESSIBLE\r
\r
        public BaseAccount() {\r
            System.out.println("  [BASE CONSTRUCTOR] BaseAccount initialized.");\r
        }\r
\r
        // Public getter to access private parent state\r
        public String getSecretPinMasked() {\r
            return "****";\r
        }\r
    }\r
\r
    public static class SavingsAccount extends BaseAccount {\r
        // Constructors are NOT inherited; Child must declare its own\r
        public SavingsAccount() {\r
            super(); // Parent constructor executed via super()\r
        }\r
\r
        public void printAccessibleFields() {\r
            System.out.println("  -> publicNotice: " + publicNotice); // Accessible\r
            System.out.println("  -> balance: ₹" + balance);         // Accessible\r
            System.out.println("  -> packageBranch: " + packageBranch); // Accessible (same package)\r
            // System.out.println(secretPin); // COMPILE ERROR: private field is NOT directly accessible!\r
            System.out.println("  -> Masked PIN (via public getter): " + getSecretPinMasked());\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: WHAT IS INHERITED VS NOT INHERITED - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SavingsAccount acc = new SavingsAccount();\r
        acc.printAccessibleFields();\r
\r
        System.out.println("\\n>>> Summary of Inheritance Rules:");\r
        System.out.println("  ✔ INHERITED: public, protected, and package-private members (in same pkg)");\r
        System.out.println("  X NOT INHERITED: private members (accessible only via public getters/setters)");\r
        System.out.println("  X NOT INHERITED: Constructors (invoked via super(), never inherited)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 6: What is Inherited vs What is NOT Inherited\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INHERITANCE VISIBILITY MATRIX:\r
   - public & protected: ALWAYS inherited and directly accessible.\r
   - default (package-private): Inherited ONLY if subclass is in same package.\r
   - private: NOT directly accessible by name (must use public getters).\r
   - constructors: NEVER inherited (must be invoked via super()).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"What class members are NOT inherited by subclasses in Java?",shortAnswer:"1. Private members (fields/methods are physically present in the object but not directly accessible by name in the subclass). 2. Constructors (never inherited, only invoked via super()).",explanation:"Subclasses must define their own constructors and use getters/setters to interact with private superclass state.",hint:"Private members and constructors are NOT inherited.",level:"Beginner",codeExample:"// private int secret; // Child cannot access directly by name"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Encapsulation Boundaries"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"What is Inherited and What is NOT Inherited in Java"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn the precise visibility boundaries of Java inheritance: accessible members, private encapsulation shields, and why constructors are never inherited."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"InheritanceScopeRulesDemo.java",highlightLines:[12,13,14,15,29,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"What is Inherited FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 002_005 Topic 6: Inherited Members Scope",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic6_scope_rules_note.txt"})}),e.jsx(a,{note:"Private variables remain strictly inside the parent class. If the child wants to read them, provide a public or protected getter! — Sukanta Hui"})]})}export{x as default};
