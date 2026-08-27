import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 17: The Deprecated 'finalize()' Method & Modern Java Cleaner / AutoCloseable\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
import java.lang.ref.Cleaner;\r
\r
public class FinalizeDeprecationAndCleanerDemo {\r
\r
    // MODERN SOLUTION (Java 9+): java.lang.ref.Cleaner / AutoCloseable\r
    public static class DatabaseResourceHandler implements AutoCloseable {\r
        private static final Cleaner cleaner = Cleaner.create();\r
\r
        // Separate static state that does NOT hold a reference to outer object!\r
        private static class State implements Runnable {\r
            private String dbHandle;\r
            State(String handle) { this.dbHandle = handle; }\r
\r
            @Override\r
            public void run() {\r
                System.out.println("  [CLEANER ACTION] Safely closed underlying socket for: " + dbHandle);\r
            }\r
        }\r
\r
        private final State state;\r
        private final Cleaner.Cleanable cleanable;\r
\r
        public DatabaseResourceHandler(String handle) {\r
            this.state = new State(handle);\r
            this.cleanable = cleaner.register(this, state);\r
        }\r
\r
        @Override\r
        public void close() {\r
            cleanable.clean(); // Clean immediately when try-with-resources exits!\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 17: finalize() DEPRECATION & MODERN Cleaner - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Why 'finalize()' was DEPRECATED in Java 9 and marked for removal in Java 18:");\r
        System.out.println("  - Unpredictable Timing: Garbage collector may delay finalization indefinitely.");\r
        System.out.println("  - Zombie Resurrection: An object could assign 'this' to a static field and revive itself!");\r
        System.out.println("  - Performance Degradation: Drastically slows down GC throughput.");\r
        System.out.println();\r
        System.out.println(">>> 2. Modern Resource Management using AutoCloseable & Cleaner:");\r
        try (DatabaseResourceHandler handler = new DatabaseResourceHandler("BKP-DB-POOL-01")) {\r
            System.out.println("  [OPERATING] Performing database queries inside try-with-resources block...");\r
        } // Automatically calls close() & clean()!\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 002_010 THE OBJECT CLASS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 17: finalize() Deprecation & Cleaners\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 002_010 SUMMARY:\r
   - 'Object' is the cosmic root superclass of Java.\r
   - Always override 'toString()' for readable logs.\r
   - '==' compares references; 'equals()' compares semantic contents.\r
   - Always override 'equals()' and 'hashCode()' together using identical fields.\r
   - Prefer Copy Constructors over 'Object.clone()'.\r
   - 'finalize()' is deprecated; use 'AutoCloseable' and 'Cleaner'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why was 'Object.finalize()' deprecated in Java 9 (and deprecated for removal in Java 18), and what replaces it?",shortAnswer:"'finalize()' was unpredictable, unreliable, could resurrect dead objects, and severely degraded garbage collection performance. It is replaced by 'AutoCloseable' with 'try-with-resources' and 'java.lang.ref.Cleaner'.",explanation:"Never use finalize() in modern Java applications.",hint:"Unpredictable timing and GC drag; replaced by try-with-resources and java.lang.ref.Cleaner.",level:"Advanced",codeExample:"try (Resource r = new Resource()) { /* auto-cleaned */ }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Resource Lifecycle"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Deprecated ",e.jsx("code",{className:"text-rose-400 font-mono",children:"finalize()"})," Method & Modern ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Cleaner"})," Alternatives"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand why ",e.jsx("code",{className:"text-rose-400 font-mono",children:"finalize()"})," was deprecated, its catastrophic GC performance penalties, and how modern Java uses ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"AutoCloseable"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"java.lang.ref.Cleaner"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"FinalizeDeprecationAndCleanerDemo.java",highlightLines:[12,16,22,33,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"finalize() Deprecation FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:l,title:"Module 002_010 Topic 17: finalize() Deprecation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic17_finalize_cleaner_note.txt"})}),e.jsx(t,{note:"Congratulations on completing Module 002_010! You have mastered the entire Object class hierarchy, equals/hashCode contracts, deep copying, and modern resource cleaners! — Sukanta Hui"})]})}export{b as default};
