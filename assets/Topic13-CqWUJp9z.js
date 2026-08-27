import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 13: Eager Initialization Singleton Implementation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class EagerSingletonImplementationDemo {\r
\r
    public static class EagerGlobalConfig {\r
        // EAGER INITIALIZATION: Instance created immediately when class is loaded into memory\r
        private static final EagerGlobalConfig INSTANCE = new EagerGlobalConfig();\r
\r
        private String academyVersion = "v2026.1";\r
\r
        // Private constructor\r
        private EagerGlobalConfig() {\r
            System.out.println("  [EAGER SINGLETON] Instance created immediately at Class Loading time!");\r
        }\r
\r
        // Global access point\r
        public static EagerGlobalConfig getInstance() {\r
            return INSTANCE;\r
        }\r
\r
        public void printConfig() {\r
            System.out.println("  -> Config Version: " + academyVersion + " (Hash: " + System.identityHashCode(this) + ")");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: EAGER INITIALIZATION SINGLETON - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Accessing Eager Singleton for the first time:");\r
        EagerGlobalConfig c1 = EagerGlobalConfig.getInstance();\r
        c1.printConfig();\r
\r
        System.out.println("\\n>>> 2. Accessing Eager Singleton again:");\r
        EagerGlobalConfig c2 = EagerGlobalConfig.getInstance();\r
        c2.printConfig();\r
\r
        System.out.println("\\n>>> Is c1 == c2? " + (c1 == c2));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 13: Eager Initialization Singleton\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EAGER INITIALIZATION BLUEPRINT:\r
   - 'private static final Singleton INSTANCE = new Singleton();'\r
   - Thread-safe by virtue of JVM ClassLoader specification.\r
   - Trade-off: Potential memory waste if never requested.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is Eager Initialization in the Singleton pattern and what are its pros and cons?",shortAnswer:"The singleton instance is created as a 'private static final' field at the moment the class is loaded by the ClassLoader. Pro: Simple and inherently thread-safe. Con: Wastes memory if the application never actually uses the instance.",explanation:"If the class has other static methods, accessing them triggers eager instantiation even if the singleton itself isn't needed.",hint:"Created at class loading time; simple & thread-safe, but may waste memory.",level:"Intermediate",codeExample:"private static final Singleton INSTANCE = new Singleton();"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Eager Singleton"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Eager Initialization Singleton Implementation"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn the simplest thread-safe Singleton model: instant allocation at class loading time, its architectural simplicity, and memory overhead trade-offs."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"EagerSingletonImplementationDemo.java",highlightLines:[13,18,23,34,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Eager Singleton FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 002_004 Topic 13: Eager Singleton",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic13_eager_singleton_note.txt"})}),e.jsx(r,{note:"If your singleton is lightweight and always needed at startup, Eager Initialization is fantastic because the ClassLoader guarantees 100% thread safety for free! — Sukanta Hui"})]})}export{h as default};
