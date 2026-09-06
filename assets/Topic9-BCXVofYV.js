import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 9: The Nuances of 'protected' Access in Child Classes Across Packages\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class ProtectedAccessNuancesDemo {\r
\r
    // Base class in package A (Simulated)\r
    public static class BankSecurityCore {\r
        protected String masterVaultKey = "BKP-VAULT-2026-KEY";\r
\r
        protected void openVault() {\r
            System.out.println("  [VAULT] Master vault unlocked via protected access: " + masterVaultKey);\r
        }\r
    }\r
\r
    // Subclass in package B (Simulated)\r
    public static class RegionalBranchManager extends BankSecurityCore {\r
        public void accessThroughInheritance() {\r
            // 1. VALID: Accessing inherited protected member on 'this' / 'super':\r
            System.out.println("  [VALID] Accessed via inheritance: " + this.masterVaultKey);\r
            super.openVault();\r
        }\r
\r
        public void accessThroughOtherObject(BankSecurityCore other) {\r
            // 2. ILLEGAL IN FOREIGN PACKAGE:\r
            // Attempting to access 'other.masterVaultKey' directly on a foreign parent reference\r
            // in a different package causes a COMPILE ERROR!\r
            // 'masterVaultKey has protected access in BankSecurityCore'\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: 'protected' ACCESS CROSS-PACKAGE NUANCES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        RegionalBranchManager mgr = new RegionalBranchManager();\r
        mgr.accessThroughInheritance();\r
\r
        System.out.println("\\n>>> The Subtle 'protected' Rule:");\r
        System.out.println("  - A subclass in a DIFFERENT package can access protected members ONLY through INHERITANCE (this/super).");\r
        System.out.println("  - It CANNOT access protected members through a parent reference ('parentObj.protectedField')!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 9: Nuances of 'protected' Access\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'protected' CROSS-PACKAGE RULE:\r
   - Allowed: Inside subclass via 'this.protectedField' or 'super.protectedMethod()'.\r
   - Disallowed: Accessing 'parentRef.protectedField' on an external parent object.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the subtle restriction when accessing a 'protected' member from a subclass located in a different package?",shortAnswer:"The foreign-package subclass can access the protected member ONLY through its own inherited reference ('this.field' or 'super.field'). It CANNOT access it through an explicit instance of the parent class ('Parent p = new Parent(); p.protectedField').",explanation:"This prevents foreign subclasses from tampering with instances of other sibling classes.",hint:"Accessible only via inheritance (this/super), not via parent object references.",level:"Advanced",codeExample:"// Valid: this.protectedMember; Invalid: parentObj.protectedMember;"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Advanced Encapsulation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Nuances of ",e.jsx("code",{className:"text-amber-400 font-mono",children:"protected"})," Access in Child Classes Across Packages"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deep-dive into the most misunderstood access rule in Java: why foreign subclasses can access protected members via inheritance, but never through parent object references."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ProtectedAccessNuancesDemo.java",highlightLines:[12,14,21,23,27,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Protected Nuances FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:c,title:"Module 002_009 Topic 9: Protected Access Nuances",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic9_protected_nuances_note.txt"})}),e.jsx(n,{note:"Protected means: 'My child can inherit my car, but my child cannot walk up to another person's car and unlock it with my keys!' — Sukanta Hui"})]})}export{b as default};
