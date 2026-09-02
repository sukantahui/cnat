import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 11: Can an Abstract Class Have 0 Abstract Methods? (Preventing Direct Instantiation)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class ZeroAbstractMethodsDemo {\r
\r
    // VALID: Abstract class with ZERO abstract methods!\r
    // Why do this? To PREVENT direct instantiation while providing 100% concrete shared code!\r
    public abstract static class BaseSecurityContext {\r
        private String sessionId = "SEC-SESSION-7788";\r
\r
        public void printSession() {\r
            System.out.println("  [SECURITY CONTEXT] Session Active: " + sessionId);\r
        }\r
\r
        public boolean isAuthorized() {\r
            return true;\r
        }\r
    }\r
\r
    public static class AdminSecurityContext extends BaseSecurityContext {\r
        public void launchAdminConsole() {\r
            System.out.println("  [ADMIN] Accessing Barrackpore server root terminal...");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: ABSTRACT CLASS WITH 0 ABSTRACT METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // BaseSecurityContext base = new BaseSecurityContext(); // COMPILE ERROR!\r
        // Prevents direct instantiation of generic context!\r
\r
        AdminSecurityContext admin = new AdminSecurityContext();\r
        admin.printSession();\r
        admin.launchAdminConsole();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 11: Abstract Classes with 0 Abstract Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ZERO ABSTRACT METHODS PATTERN:\r
   - 100% legal in Java.\r
   - Purpose: Disallow direct 'new BaseClass()' instantiation.\r
   - Forces callers to extend specialized subclasses before creating objects.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Can an abstract class in Java have zero abstract methods, and what is the primary use case?",shortAnswer:"Yes! An abstract class can have zero abstract methods. The primary use case is to prevent developers from directly instantiating the class ('new BaseClass()') while providing completely implemented shared logic.",explanation:"Commonly used in framework adapter classes and base context models.",hint:"Legal in Java; used solely to prevent direct instantiation of a base class.",level:"Intermediate",codeExample:"public abstract class Adapter { public void onClick() {} }"}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 11"}),t.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Design Technique"})]}),t.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Can an Abstract Class Have 0 Abstract Methods? (Preventing Direct Instantiation)"}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover why architects intentionally mark fully-implemented classes ",t.jsx("code",{className:"text-indigo-400 font-mono",children:"abstract"}),": enforcing inheritance semantics and preventing incomplete conceptual instantiation."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:r,title:"ZeroAbstractMethodsDemo.java",highlightLines:[12,15,23,33]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Zero Abstract Methods FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:i,title:"Module 002_007 Topic 11: Abstract Class with 0 Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic11_zero_abstract_methods_note.txt"})}),t.jsx(s,{note:"You don't need abstract methods to make a class abstract! Marking it abstract is simply the cleanest way to say: 'You cannot instantiate me directly; you must extend me.' — Sukanta Hui"})]})}export{h as default};
