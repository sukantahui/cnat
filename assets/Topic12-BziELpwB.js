import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 12: The Singleton Design Pattern: Ensuring Exactly One Instance\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class SingletonPatternFoundationsDemo {\r
\r
    public static class CentralDatabaseConnectionPool {\r
        // Static variable to hold the ONE instance\r
        private static CentralDatabaseConnectionPool instance;\r
\r
        private String connectionString;\r
\r
        // 1. Private Constructor\r
        private CentralDatabaseConnectionPool() {\r
            this.connectionString = "jdbc:mysql://localhost:3306/coderaccotax_db";\r
            System.out.println("  [SINGLETON BORN] Central Connection Pool created on Heap!");\r
        }\r
\r
        // 2. Global Static Access Point\r
        public static CentralDatabaseConnectionPool getInstance() {\r
            if (instance == null) {\r
                instance = new CentralDatabaseConnectionPool();\r
            }\r
            return instance;\r
        }\r
\r
        public void printStatus() {\r
            System.out.println("  -> Pool active: " + connectionString + " (HashCode: " + System.identityHashCode(this) + ")");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: SINGLETON DESIGN PATTERN FOUNDATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Requesting instance 1:");\r
        CentralDatabaseConnectionPool p1 = CentralDatabaseConnectionPool.getInstance();\r
        p1.printStatus();\r
\r
        System.out.println("\\n>>> 2. Requesting instance 2:");\r
        CentralDatabaseConnectionPool p2 = CentralDatabaseConnectionPool.getInstance();\r
        p2.printStatus();\r
\r
        System.out.println("\\n>>> 3. Verifying Identity (Both point to exact same memory):");\r
        System.out.println("  Is p1 == p2? " + (p1 == p2));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 12: The Singleton Design Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SINGLETON ESSENTIALS:\r
   - Private constructor (blocks 'new').\r
   - Private static variable (holds the single instance).\r
   - Public static method 'getInstance()' (returns the single instance).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the primary intent of the Singleton Design Pattern in Java?",shortAnswer:"To guarantee that a class has only one instance in memory throughout the application lifecycle, and to provide a global static point of access to it.",explanation:"Used for resource-heavy managers like thread pools, database connection pools, cache managers, and hardware controllers.",hint:"Guarantees exactly one instance in memory with a global access point.",level:"Beginner",codeExample:"Singleton s = Singleton.getInstance();"}];function x(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 12"}),n.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Creational Pattern"})]}),n.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"The Singleton Design Pattern: Ensuring Exactly One Instance"}),n.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn the foundational architecture of the Singleton Pattern in Java. Discover how private constructors and static access points coordinate global resource sharing."})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(t,{fileModule:o,title:"SingletonPatternFoundationsDemo.java",highlightLines:[12,17,23,24,38,42]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(e,{title:"Singleton Pattern FAQs",questions:s})}),n.jsx("section",{className:"space-y-4",children:n.jsx(a,{content:i,title:"Module 002_004 Topic 12: Singleton Pattern Foundations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic12_singleton_note.txt"})}),n.jsx(r,{note:"A Singleton is like having one central AC remote for the whole Barrackpore lab: everyone shares the exact same controller! — Sukanta Hui"})]})}export{x as default};
