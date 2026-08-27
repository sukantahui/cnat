import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const n=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 13: Can Abstract Methods Be Private or Static? (Illegal Modifier Combinations)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class IllegalAbstractModifiersDemo {\r
\r
    public abstract static class BaseSecurityService {\r
\r
        // 1. WHY 'private abstract' IS ILLEGAL:\r
        // 'private' means invisible to child classes.\r
        // 'abstract' demands child classes override it.\r
        // Invisible + Must Override = IMPOSSIBLE!\r
        // private abstract void secret(); // COMPILE ERROR: "illegal combination of modifiers: abstract and private"\r
\r
        // 2. WHY 'static abstract' IS ILLEGAL:\r
        // 'static' methods belong to the class and are resolved at compile-time (no dynamic dispatch).\r
        // 'abstract' requires runtime dynamic dispatch (vtable) to find the child's implementation.\r
        // static abstract void log(); // COMPILE ERROR: "illegal combination of modifiers: abstract and static"\r
\r
        // 3. VALID ABSTRACT METHODS (public or protected):\r
        public abstract void authenticateUser(String username);\r
        protected abstract void logAuditTrail(String action);\r
    }\r
\r
    public static class CloudSecurityService extends BaseSecurityService {\r
        @Override\r
        public void authenticateUser(String username) {\r
            System.out.println("  [CLOUD AUTH] Authenticated user: " + username);\r
        }\r
\r
        @Override\r
        protected void logAuditTrail(String action) {\r
            System.out.println("  [AUDIT] Action logged: " + action);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: ILLEGAL ABSTRACT METHOD MODIFIERS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BaseSecurityService sec = new CloudSecurityService();\r
        sec.authenticateUser("Swadeep Paul");\r
        sec.logAuditTrail("LOGIN_SUCCESS_BARRACKPORE_HUB");\r
\r
        System.out.println("\\n>>> Summary of Forbidden Abstract Modifiers:");\r
        System.out.println("  X private abstract  (invisible to child)");\r
        System.out.println("  X static abstract   (no dynamic dispatch)");\r
        System.out.println("  X final abstract    (cannot be overridden)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 13: Illegal Abstract Method Modifiers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FORBIDDEN ABSTRACT METHOD COMBINATIONS:\r
   - 'private abstract': Child cannot see private methods.\r
   - 'static abstract': Static methods cannot be dynamically overridden.\r
   - 'final abstract': Final forbids overriding.\r
   - 'synchronized abstract' / 'native abstract': Forbidden modifiers on abstract declarations.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why can't an abstract method be declared 'private' or 'static' in Java?",shortAnswer:"1. 'private abstract' is impossible because private methods are invisible to subclasses and thus cannot be overridden. 2. 'static abstract' is impossible because static methods are bound to the class at compile-time and cannot participate in runtime dynamic method dispatch.",explanation:"Abstract methods must be visible and dynamically dispatchable (public, protected, or package-private).",hint:"Private methods cannot be seen to be overridden; static methods don't support dynamic dispatch.",level:"Intermediate",codeExample:"// Both are illegal: private abstract void a(); static abstract void b();"}];function v(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 13"}),t.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Language Invariants"})]}),t.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Can Abstract Methods Be Private or Static? (Illegal Modifier Combinations)"}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Deep-dive into the fundamental mechanics of visibility and binding: why ",t.jsx("code",{className:"text-rose-400 font-mono",children:"private"})," and ",t.jsx("code",{className:"text-amber-400 font-mono",children:"static"})," modifiers can never be attached to abstract methods."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:n,title:"IllegalAbstractModifiersDemo.java",highlightLines:[22,23,27,32,42]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Illegal Abstract Modifiers FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:s,title:"Module 002_007 Topic 13: Illegal Abstract Modifiers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic13_illegal_modifiers_note.txt"})}),t.jsx(i,{note:"If a method is private, the child can't see it to override it. If it's static, it belongs to the class and doesn't participate in dynamic polymorphism. That's why private abstract and static abstract are strictly forbidden! — Sukanta Hui"})]})}export{v as default};
