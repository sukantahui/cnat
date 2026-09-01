import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 10: Using 'super' to Invoke Overridden Parent Class Methods\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class SuperMethodInvocationDemo {\r
\r
    // Parent Class\r
    public static class TraineePortal {\r
        public void login(String username) {\r
            System.out.println("  [BASE PORTAL] Validating credentials for: " + username);\r
            System.out.println("  [BASE PORTAL] Establishing encrypted session...");\r
        }\r
    }\r
\r
    // Child Class (Extends behavior by calling parent method via super.login())\r
    public static class SecureTwoFactorPortal extends TraineePortal {\r
        @Override\r
        public void login(String username) {\r
            // 1. Reuse and execute standard parent login logic\r
            super.login(username);\r
\r
            // 2. Add specialized 2FA OTP verification\r
            System.out.println("  [SECURE 2FA] Sending 6-digit OTP to registered mobile for: " + username);\r
            System.out.println("  [SECURE 2FA] OTP verified successfully! Access granted.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: INVOKING OVERRIDDEN METHODS VIA 'super' - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SecureTwoFactorPortal portal = new SecureTwoFactorPortal();\r
        portal.login("Swadeep_Barrackpore");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 10: Using 'super' to Invoke Overridden Parent Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD EXTENSION VIA 'super':\r
   - Calling 'super.methodName()' invokes the parent's version of an overridden method.\r
   - Bypasses dynamic virtual dispatch to execute the base implementation directly.\r
   - Essential for decorating / augmenting base behavior (e.g. adding 2FA after standard login).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why would a subclass method call 'super.methodName()' when overriding a parent method?",shortAnswer:"To reuse and extend the existing superclass implementation without rewriting boilerplate base functionality.",explanation:"This is the primary inheritance reuse pattern in Java (extending behavior rather than replacing it entirely).",hint:"Reuses and extends parent behavior without rewriting base logic.",level:"Beginner",codeExample:"@Override public void save() { super.save(); auditLog(); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Behavior Extension"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Using ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"super"})," to Invoke Overridden Parent Class Methods"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to decorate and augment base functionality by invoking overridden superclass methods via ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"super.method()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"SuperMethodInvocationDemo.java",highlightLines:[12,19,21,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Overridden Methods & 'super' FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_003 Topic 10: Invoking Overridden Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic10_super_methods_note.txt"})}),e.jsx(a,{note:"Don't reinvent the wheel: Call super.login() to run standard verification, then add your custom 2FA or security audit right below it! — Sukanta Hui"})]})}export{g as default};
