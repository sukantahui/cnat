import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 16: Bill Pugh Singleton Implementation Using Static Inner Helper Class\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class BillPughSingletonPatternDemo {\r
\r
    public static class BillPughRegistryManager {\r
\r
        private BillPughRegistryManager() {\r
            System.out.println("  [BILL PUGH SINGLETON] Instance born via ClassLoader synchronization!");\r
        }\r
\r
        // STATIC INNER HELPER CLASS:\r
        // Loaded into memory ONLY when getInstance() references BillPughHolder!\r
        private static class BillPughHolder {\r
            private static final BillPughRegistryManager INSTANCE = new BillPughRegistryManager();\r
        }\r
\r
        // High performance global access (100% thread-safe with ZERO synchronized overhead!)\r
        public static BillPughRegistryManager getInstance() {\r
            return BillPughHolder.INSTANCE;\r
        }\r
\r
        public void printInfo() {\r
            System.out.println("  -> Bill Pugh Registry active! HashCode: " + System.identityHashCode(this));\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: BILL PUGH SINGLETON PATTERN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Accessing Bill Pugh Singleton:");\r
        BillPughRegistryManager r1 = BillPughRegistryManager.getInstance();\r
        r1.printInfo();\r
\r
        System.out.println("\\n>>> 2. Accessing second time:");\r
        BillPughRegistryManager r2 = BillPughRegistryManager.getInstance();\r
        r2.printInfo();\r
\r
        System.out.println("\\n>>> Is r1 == r2? " + (r1 == r2));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 16: Bill Pugh Singleton Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BILL PUGH ARCHITECTURE:\r
   - Uses a private static inner helper class ('Holder').\r
   - Inner class loaded ONLY when 'getInstance()' is called (Lazy).\r
   - Thread safety guaranteed by JVM ClassLoader (Zero sync overhead).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why is the Bill Pugh Singleton Pattern considered one of the best lazy singleton implementations in Java?",shortAnswer:"Because it achieves both lazy initialization and complete thread-safety naturally via JVM ClassLoader mechanisms without requiring any explicit 'synchronized' blocks or 'volatile' keywords.",explanation:"The inner static class is loaded only when 'getInstance()' references it, utilizing native JVM class loading synchronization.",hint:"Thread-safe lazy singleton utilizing JVM ClassLoader mechanics with zero lock overhead.",level:"Advanced",codeExample:"private static class Holder { static final Singleton INSTANCE = new Singleton(); }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Elite Design Pattern"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Bill Pugh Singleton Implementation Using Static Inner Helper Class"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover why the Bill Pugh pattern is revered in enterprise Java: lazy initialization with zero synchronization performance penalties, powered by JVM ClassLoader specifications."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"BillPughSingletonPatternDemo.java",highlightLines:[16,17,21,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Bill Pugh Singleton FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 002_004 Topic 16: Bill Pugh Singleton",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic16_bill_pugh_note.txt"})}),e.jsx(r,{note:"The Bill Pugh Singleton is a masterpiece of Java design: it leverages the JVM ClassLoader's native lock to give you 100% thread safety without writing a single synchronized keyword! — Sukanta Hui"})]})}export{y as default};
