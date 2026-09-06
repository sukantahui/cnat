import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 7: Can Static Methods Be Overridden? (No, Method Hiding Concept)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class StaticMethodHidingDemo {\r
\r
    // Parent Class\r
    public static class SuperPortal {\r
        public static void printAnnouncement() {\r
            System.out.println("  [SUPER PORTAL static] Standard Academy Announcement");\r
        }\r
\r
        public void printInstanceGreeting() {\r
            System.out.println("  [SUPER PORTAL instance] Welcome to SuperPortal!");\r
        }\r
    }\r
\r
    // Child Class\r
    public static class SpecialBranchPortal extends SuperPortal {\r
        // METHOD HIDING: Re-declaring a static method with same signature HIDES the parent method!\r
        // It is NOT overridden polymorphically!\r
        public static void printAnnouncement() {\r
            System.out.println("  [SPECIAL BRANCH static] Special Barrackpore Cloud Track Announcement");\r
        }\r
\r
        @Override\r
        public void printInstanceGreeting() {\r
            System.out.println("  [SPECIAL BRANCH instance] Welcome to Barrackpore Special Branch!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: METHOD HIDING VS METHOD OVERRIDING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Reference of SuperClass pointing to Child Instance:\r
        SuperPortal ref = new SpecialBranchPortal();\r
\r
        System.out.println(">>> 1. Calling static method on Parent Reference (Triggers METHOD HIDING):");\r
        // Static dispatch uses the COMPILE-TIME REFERENCE TYPE (SuperPortal):\r
        ref.printAnnouncement(); // Prints SuperPortal announcement!\r
\r
        System.out.println("\\n>>> 2. Calling instance method on Parent Reference (Triggers OVERRIDING):");\r
        // Dynamic dispatch uses RUNTIME OBJECT TYPE (SpecialBranchPortal):\r
        ref.printInstanceGreeting(); // Prints SpecialBranchPortal greeting!\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 7: Static Method Hiding vs Method Overriding\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD HIDING VS OVERRIDING:\r
   -----------------------------------------------------------------------------\r
   FEATURE              STATIC METHOD (Hiding)        INSTANCE METHOD (Overriding)\r
   -----------------------------------------------------------------------------\r
   Polymorphism         NO (Static Binding)           YES (Dynamic Virtual Dispatch)\r
   Resolved At          Compile Time                  Runtime\r
   Dispatched Via       Reference Variable Type       Heap Object Runtime Type\r
   -----------------------------------------------------------------------------\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Can static methods be overridden in Java? What is Method Hiding?",shortAnswer:"No! Static methods cannot be overridden. If a subclass declares a static method with the same signature, it HIDES the superclass static method. The method invoked depends strictly on the compile-time reference type, not the runtime object.",explanation:"Overriding requires dynamic dispatch ('invokevirtual'). Static methods use static binding ('invokestatic').",hint:"Static methods are hidden (compile-time binding), not overridden (runtime dispatch).",level:"Intermediate",codeExample:"Parent p = new Child(); p.staticMethod(); // Calls Parent's static method!"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Method Hiding"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Can Static Methods Be Overridden? (No, Method Hiding Concept)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the crucial interview puzzle: why static methods are hidden rather than overridden, and how compile-time reference binding dictates static method execution."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"StaticMethodHidingDemo.java",highlightLines:[12,22,40,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Method Hiding FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 002_004 Topic 7: Method Hiding vs Overriding",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic7_method_hiding_note.txt"})}),e.jsx(i,{note:"If you call a static method on a reference, Java uses the reference type (compile-time binding). If you call an instance method, Java uses the object type (dynamic dispatch). That is why static methods hide, not override! — Sukanta Hui"})]})}export{S as default};
