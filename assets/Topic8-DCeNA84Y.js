import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 8: What Cannot Be Overridden: private, static (Method Hiding), and final methods\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class NonOverridableMembersDemo {\r
\r
    public static class SuperService {\r
        // 1. PRIVATE METHOD: Bound strictly to this class, invisible to subclasses\r
        private void internalSecurityCheck() {\r
            System.out.println("  [PRIVATE] Internal parent security check.");\r
        }\r
\r
        // 2. STATIC METHOD: Bound at compile-time to Class, hidden not overridden\r
        public static void printAcademyNotice() {\r
            System.out.println("  [STATIC] Base Academy General Notice");\r
        }\r
\r
        // 3. FINAL METHOD: Prohibits overriding completely\r
        public final void lockAuditId() {\r
            System.out.println("  [FINAL] Audit ID locked: AUDIT-BKP-2026");\r
        }\r
    }\r
\r
    public static class SubService extends SuperService {\r
        // Re-declaring static method -> METHOD HIDING (Not overriding!)\r
        public static void printAcademyNotice() {\r
            System.out.println("  [STATIC HIDDEN] SubService Regional Notice");\r
        }\r
\r
        // Writing 'private void internalSecurityCheck()' creates a completely NEW unrelated method.\r
        // Attempting '@Override public final void lockAuditId()' -> COMPILE ERROR!\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: WHAT CANNOT BE OVERRIDDEN IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SuperService ref = new SubService();\r
\r
        System.out.println(">>> 1. Calling static method on Parent reference (Invokes Parent static):");\r
        ref.printAcademyNotice();\r
\r
        System.out.println("\\n>>> 2. Calling final method:");\r
        ref.lockAuditId();\r
\r
        System.out.println("\\n>>> Summary of 3 Non-Overridable Elements:");\r
        System.out.println("  1. private methods (invisible to child)");\r
        System.out.println("  2. static methods (static binding / Method Hiding)");\r
        System.out.println("  3. final methods (compiler forbids override)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 8: What Cannot Be Overridden\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NON-OVERRIDABLE MEMBERS:\r
   - private: Not inherited or visible.\r
   - static: Bound at compile-time to ClassName (Hides, not overrides).\r
   - final: Compiler generates error if child attempts '@Override'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Which 3 categories of methods CANNOT be overridden in Java?",shortAnswer:"1. private methods (invisible to child subclasses). 2. static methods (subject to Method Hiding via compile-time binding). 3. final methods (explicitly locked by compiler).",explanation:"Constructors are also not methods and cannot be overridden.",hint:"private, static, and final methods.",level:"Beginner",codeExample:`// private void m1() {}
// static void m2() {}
// final void m3() {}`}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Compiler Prohibitions"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["What Cannot Be Overridden: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"private"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"static"})," & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"final"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deep-dive into the non-overridable trio in Java: why private methods are invisible, static methods are hidden, and final methods are locked."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"NonOverridableMembersDemo.java",highlightLines:[12,17,22,28,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Non-Overridable Methods FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 002_006 Topic 8: Non-Overridable Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic8_non_overridable_note.txt"})}),e.jsx(i,{note:"Remember the trio: private methods can't be seen, static methods hide instead of overriding, and final methods are locked forever! — Sukanta Hui"})]})}export{x as default};
