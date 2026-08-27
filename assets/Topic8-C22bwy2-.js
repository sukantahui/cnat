import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 8: The 'final' Keyword: Preventing Inheritance and Method Overriding\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class FinalInheritanceRulesDemo {\r
\r
    // 1. FINAL CLASS: Cannot be extended by ANY subclass!\r
    public static final class SecurityTokenVault {\r
        private String token = "SEC-998877";\r
\r
        public void validate() {\r
            System.out.println("  [VAULT] Token validated: " + token);\r
        }\r
    }\r
\r
    // Attempting: 'class SubVault extends SecurityTokenVault {}' -> COMPILE ERROR:\r
    // "cannot inherit from final com.coderaccotax.javatutorial.inheritance.FinalInheritanceRulesDemo.SecurityTokenVault"\r
\r
    // 2. CLASS WITH FINAL METHOD:\r
    public static class AcademicCertificate {\r
        // FINAL METHOD: Subclasses CANNOT override this critical method!\r
        public final void printDigitalSignature() {\r
            System.out.println("  [LEGAL SIGNATURE] Cryptographically signed by Sukanta Hui @ Barrackpore Hub");\r
        }\r
\r
        public void printCourseDetails() {\r
            System.out.println("  [COURSE] General Course Outline");\r
        }\r
    }\r
\r
    public static class JavaSpecialistCertificate extends AcademicCertificate {\r
        @Override\r
        public void printCourseDetails() {\r
            System.out.println("  [COURSE] Java Core & Full Stack Architecture Pro");\r
        }\r
\r
        // Attempting to override printDigitalSignature() -> COMPILE ERROR:\r
        // "printDigitalSignature() in JavaSpecialistCertificate cannot override printDigitalSignature() in AcademicCertificate; overridden method is final"\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: THE 'final' KEYWORD IN INHERITANCE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        JavaSpecialistCertificate cert = new JavaSpecialistCertificate();\r
        cert.printCourseDetails();\r
        cert.printDigitalSignature();\r
\r
        System.out.println("\\n>>> Key 'final' Takeaways:");\r
        System.out.println("  1. 'final class' -> Closes inheritance tree (e.g. String, Integer).");\r
        System.out.println("  2. 'final method' -> Prevents overriding / behavior tampering.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 8: The 'final' Keyword in Inheritance\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'final' MODIFIER RULES:\r
   - 'final class': Prevents subclassing entirely.\r
   - 'final method': Permits inheritance, but strictly prohibits '@Override'.\r
   - Used for security, immutability (String), and design locking.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What effect does the 'final' keyword have when applied to a class vs a method?",shortAnswer:"A 'final class' cannot be extended by any subclass (e.g. java.lang.String). A 'final method' can be inherited by subclasses but CANNOT be overridden.",explanation:"Used to enforce security invariants, immutability, and prevent behavioral corruption.",hint:"Final class = no inheritance; final method = no overriding.",level:"Beginner",codeExample:`public final class ImmutableClass {}
public final void secureMethod() {}`}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Immutability & Security"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-rose-400 font-mono",children:"final"})," Keyword: Preventing Inheritance & Method Overriding"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to lock down class architectures and enforce security invariants using ",e.jsx("code",{className:"text-rose-400 font-mono",children:"final"})," classes and ",e.jsx("code",{className:"text-rose-400 font-mono",children:"final"})," methods."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"FinalInheritanceRulesDemo.java",highlightLines:[11,23,31,41]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"The 'final' Keyword FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 002_005 Topic 8: The final Keyword",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic8_final_rules_note.txt"})}),e.jsx(r,{note:"If a method contains a core security algorithm that must never be altered by a subclass, mark it final! If a class is immutable like String, mark the whole class final! — Sukanta Hui"})]})}export{x as default};
