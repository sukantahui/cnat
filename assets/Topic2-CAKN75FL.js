import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 2: Implementing Interfaces Using the 'implements' Keyword\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class ImplementingInterfacesDemo {\r
\r
    public interface SecurityAuthenticator {\r
        boolean authenticate(String user, String password);\r
        void logAccess(String user, boolean status);\r
    }\r
\r
    // Implementing class using 'implements'\r
    public static class AcademyPortalAuth implements SecurityAuthenticator {\r
\r
        // CRITICAL RULE: Overriding method MUST be declared 'public' because\r
        // interface methods are implicitly public and Java forbids narrowing access!\r
        @Override\r
        public boolean authenticate(String user, String password) {\r
            return "swadeep".equalsIgnoreCase(user) && "java2026".equals(password);\r
        }\r
\r
        @Override\r
        public void logAccess(String user, boolean status) {\r
            System.out.printf("  [SECURITY AUDIT] User '%s' login attempt: %s @ Barrackpore Hub\\n",\r
                    user, (status ? "SUCCESS (Access Granted)" : "FAILED (Access Denied)"));\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: IMPLEMENTING INTERFACES IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SecurityAuthenticator auth = new AcademyPortalAuth();\r
        boolean ok = auth.authenticate("swadeep", "java2026");\r
        auth.logAccess("swadeep", ok);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 2: Implementing Interfaces\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'implements' KEYWORD RULES:\r
   - Syntax: 'class MyClass implements MyInterface { ... }'\r
   - ALL interface methods MUST be overridden with 'public' access modifier.\r
   - Forgetting 'public' causes: 'attempting to assign weaker access privileges'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why MUST an overriding method in an implementing class be explicitly declared 'public'?",shortAnswer:"Because interface methods are implicitly 'public'. If the implementing class omits 'public', it receives default (package-private) access, which narrows the access privileges and triggers a compile-time error.",explanation:"'cannot assign weaker access privileges; was public' is a very common beginner compilation error in Java.",hint:"Interface methods are public; child cannot reduce access to default/package.",level:"Beginner",codeExample:"// Mandatory: public void methodName() { ... }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Implementation Rules"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Implementing Interfaces Using the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"implements"})," Keyword"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the rules of interface fulfillment: why overriding methods must be explicitly declared ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"public"})," and how to satisfy compiler contract requirements."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ImplementingInterfacesDemo.java",highlightLines:[10,15,19,24,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Implementing Interfaces FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_008 Topic 2: Implementing Interfaces",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic2_implementing_interfaces_note.txt"})}),e.jsx(r,{note:"Always make your overriding methods 'public'! If you forget 'public', Java gives default access, which narrows the visibility and causes a compilation error. — Sukanta Hui"})]})}export{x as default};
