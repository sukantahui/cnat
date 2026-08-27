import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 15: Thread-Safety in Singleton: Double-Checked Locking (DCL)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class DoubleCheckedLockingSingletonDemo {\r
\r
    public static class ThreadSafeDatabaseManager {\r
        // 'volatile' is MANDATORY: Prevents instruction reordering by the JVM JIT compiler!\r
        private static volatile ThreadSafeDatabaseManager instance;\r
\r
        private ThreadSafeDatabaseManager() {\r
            System.out.println("  [THREAD-SAFE DCL] Instance safely created on Heap!");\r
        }\r
\r
        // DOUBLE-CHECKED LOCKING (DCL) PATTERN: High-performance thread-safety\r
        public static ThreadSafeDatabaseManager getInstance() {\r
            // First check (no locking overhead for existing instance)\r
            if (instance == null) {\r
                synchronized (ThreadSafeDatabaseManager.class) {\r
                    // Second check (inside synchronized lock)\r
                    if (instance == null) {\r
                        instance = new ThreadSafeDatabaseManager();\r
                    }\r
                }\r
            }\r
            return instance;\r
        }\r
\r
        public void executeQuery(String sql) {\r
            System.out.println("  [QUERY EXECUTED] " + sql + " via instance 0x" + Integer.toHexString(System.identityHashCode(this)));\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: DOUBLE-CHECKED LOCKING (DCL) SINGLETON - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Runnable task = () -> {\r
            ThreadSafeDatabaseManager manager = ThreadSafeDatabaseManager.getInstance();\r
            manager.executeQuery("SELECT * FROM trainees WHERE hub='Barrackpore'");\r
        };\r
\r
        Thread t1 = new Thread(task, "Thread-Swadeep");\r
        Thread t2 = new Thread(task, "Thread-Tuhina");\r
\r
        t1.start();\r
        t2.start();\r
\r
        try {\r
            t1.join();\r
            t2.join();\r
        } catch (InterruptedException e) {\r
            e.printStackTrace();\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 15: Thread-Safety in Singleton: Double-Checked Locking (DCL)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DOUBLE-CHECKED LOCKING RULES:\r
   - Use 'volatile' on the static instance variable.\r
   - Check 1: 'if (instance == null)' outside synchronized block (high performance).\r
   - Lock: 'synchronized (Singleton.class)'\r
   - Check 2: 'if (instance == null)' inside synchronized block (thread safety).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is the 'volatile' keyword mandatory in Double-Checked Locking (DCL) Singleton in Java?",shortAnswer:"To prevent instruction reordering by the JVM JIT compiler and CPU hardware, ensuring the object is fully constructed before other threads see a non-null reference.",explanation:"Without 'volatile', another thread could see a partially initialized object reference due to memory reordering.",hint:"Prevents instruction reordering and guarantees visibility.",level:"Advanced",codeExample:"private static volatile Singleton instance;"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Concurrency & Thread-Safety"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Thread-Safety in Singleton: Double-Checked Locking (DCL) & ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"volatile"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the industry-standard Double-Checked Locking pattern. Understand JVM instruction reordering, memory barriers, and why ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"volatile"})," is critical for thread-safe lazy singletons."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"DoubleCheckedLockingSingletonDemo.java",highlightLines:[12,19,21,23,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Double-Checked Locking FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 002_004 Topic 15: Double-Checked Locking",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic15_dcl_note.txt"})}),e.jsx(r,{note:"Always make your instance volatile in DCL! Without volatile, compiler optimization can expose partially constructed objects to other threads. — Sukanta Hui"})]})}export{g as default};
