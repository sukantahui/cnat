import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 14: Lazy Initialization Singleton Implementation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class LazySingletonImplementationDemo {\r
\r
    public static class LazyAuditLogger {\r
        // Variable initialized to null initially (Zero memory allocated)\r
        private static LazyAuditLogger instance;\r
\r
        private LazyAuditLogger() {\r
            System.out.println("  [LAZY SINGLETON] Instance born on demand (first call to getInstance())!");\r
        }\r
\r
        // LAZY INITIALIZATION: Allocated ONLY when requested\r
        public static LazyAuditLogger getInstance() {\r
            if (instance == null) {\r
                instance = new LazyAuditLogger(); // Born on demand!\r
            }\r
            return instance;\r
        }\r
\r
        public void log(String message) {\r
            System.out.println("  [AUDIT LOG] " + message + " (Instance Hash: " + System.identityHashCode(this) + ")");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: LAZY INITIALIZATION SINGLETON - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. First call to getInstance() creates the instance:");\r
        LazyAuditLogger logger1 = LazyAuditLogger.getInstance();\r
        logger1.log("Swadeep enrolled in Java Pro");\r
\r
        System.out.println("\\n>>> 2. Second call reuses existing instance:");\r
        LazyAuditLogger logger2 = LazyAuditLogger.getInstance();\r
        logger2.log("Tuhina enrolled in Spring Boot");\r
\r
        System.out.println("\\n>>> Is logger1 == logger2? " + (logger1 == logger2));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 14: Lazy Initialization Singleton\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LAZY INITIALIZATION:\r
   - Defers creation until 'getInstance()' is called.\r
   - Saves memory if resource is never used.\r
   - Thread-Safety Warning: Standard lazy check is NOT thread-safe!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is Lazy Initialization in the Singleton pattern and what is its major limitation in multi-threaded environments?",shortAnswer:"The instance is created only when 'getInstance()' is called for the first time. Limitation: In a multi-threaded environment without synchronization, two threads can simultaneously enter 'if (instance == null)' and create two separate instances (Race Condition).",explanation:"Basic lazy initialization is not thread-safe and must be guarded.",hint:"Created on first call; saves memory but vulnerable to multithreading race conditions.",level:"Intermediate",codeExample:"public static Singleton getInstance() { if (instance == null) instance = new Singleton(); return instance; }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"On-Demand Allocation"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Lazy Initialization Singleton Implementation"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how to defer heavy resource initialization until the exact moment of first use, and understand the multithreading race conditions that arise without synchronization."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"LazySingletonImplementationDemo.java",highlightLines:[12,18,19,32,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Lazy Singleton FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 002_004 Topic 14: Lazy Singleton",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic14_lazy_singleton_note.txt"})}),e.jsx(i,{note:"Lazy initialization is great for heavy database connections, but remember: in multithreaded systems, basic lazy initialization can create duplicates! — Sukanta Hui"})]})}export{h as default};
