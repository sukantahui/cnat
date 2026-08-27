import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 11: Downcasting (Child c = (Child) p): Explicit Narrowing & ClassCastException\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class DowncastingClassCastRiskDemo {\r
\r
    public static class StaffMember {\r
        public void checkIn() { System.out.println("  [CHECK-IN] Biometric attendance recorded."); }\r
    }\r
\r
    public static class MentorInstructor extends StaffMember {\r
        public void conductCodeReview() {\r
            System.out.println("  [CODE REVIEW] Reviewing Swadeep's pull request on GitHub!");\r
        }\r
    }\r
\r
    public static class OfficeAdmin extends StaffMember {\r
        public void processFeeReceipt() {\r
            System.out.println("  [ACCOUNTS] Printing GST fee receipt for Tuhina.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: DOWNCASTING & ClassCastException RISK - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StaffMember staff1 = new MentorInstructor(); // Upcast\r
\r
        System.out.println(">>> 1. Valid Explicit Downcasting (staff1 IS-A MentorInstructor):");\r
        MentorInstructor mentor = (MentorInstructor) staff1; // Explicit narrowing cast\r
        mentor.conductCodeReview();\r
\r
        System.out.println("\\n>>> 2. Invalid Downcasting (Throws ClassCastException):");\r
        StaffMember staff2 = new OfficeAdmin(); // Actually an OfficeAdmin!\r
        try {\r
            // Attempting to cast an OfficeAdmin into a MentorInstructor!\r
            MentorInstructor badCast = (MentorInstructor) staff2;\r
            badCast.conductCodeReview();\r
        } catch (ClassCastException ex) {\r
            System.out.println("  [CAUGHT FATAL ERROR] ClassCastException: Cannot cast OfficeAdmin to MentorInstructor!");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 11: Downcasting & ClassCastException Risk\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DOWNCASTING RULES:\r
   - Syntax: 'Child c = (Child) parentRef;' (Explicit Cast Mandatory).\r
   - Dangerous: If 'parentRef' points to another subclass or pure parent,\r
     JVM throws: 'java.lang.ClassCastException'.\r
   - Solution: Always check with 'instanceof' before downcasting!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is Downcasting in Java and what runtime exception can it trigger?",shortAnswer:"Downcasting is casting a supertype reference down to a more specific subtype reference using explicit cast syntax ('(Child) parentRef'). If the actual Heap object is not an instance of the target subtype, the JVM throws a 'ClassCastException'.",explanation:"Always guard downcasts with 'instanceof' checks to prevent runtime crashes.",hint:"Superclass to subclass reference; requires explicit cast and risks ClassCastException.",level:"Intermediate",codeExample:"Dog d = (Dog) animal; // Throws ClassCastException if animal is Cat"}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 11"}),t.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Runtime Type Safety"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Downcasting (",t.jsx("code",{className:"text-rose-400 font-mono",children:"Child c = (Child) p"}),"): Narrowing & ",t.jsx("code",{className:"text-rose-400 font-mono",children:"ClassCastException"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand the mechanics and perils of Downcasting in Java: narrowing references, unlocking specialized subclass methods, and defending against runtime ",t.jsx("code",{className:"text-rose-400 font-mono",children:"ClassCastException"})," crashes."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:r,title:"DowncastingClassCastRiskDemo.java",highlightLines:[25,28,33,35]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Downcasting FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:i,title:"Module 002_006 Topic 11: Downcasting & ClassCastException",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic11_downcasting_note.txt"})}),t.jsx(s,{note:"Never blindly downcast without checking! If you try to cast an OfficeAdmin into a MentorInstructor, the JVM will crash with a ClassCastException. Always check with instanceof first! — Sukanta Hui"})]})}export{h as default};
