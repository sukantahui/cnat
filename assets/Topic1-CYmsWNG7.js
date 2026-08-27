import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 1: The Two Taxonomies of Race Conditions: Read-Modify-Write & Check-Then-Act\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class RaceConditionCategoriesTaxonomyDemo {\r
\r
    // 1. Category 1: Read-Modify-Write Shared Variable:\r
    private static int studentCounter = 0;\r
\r
    // 2. Category 2: Check-Then-Act Lazy Singleton Target:\r
    private static Object lazySingletonInstance = null;\r
\r
    // VULNERABLE CHECK-THEN-ACT METHOD:\r
    public static Object getLazyInstance(String threadName) {\r
        // CHECK:\r
        if (lazySingletonInstance == null) {\r
            System.out.printf("[%s] Checked instance == null (TRUE). Creating new instance...%n", threadName);\r
            try { Thread.sleep(50); } catch (InterruptedException ignored) {} // Delay\r
            // ACT:\r
            lazySingletonInstance = new Object(); // Multiple instances created! (Breaks Singleton Invariant!)\r
        }\r
        return lazySingletonInstance;\r
    }\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: CATEGORIES OF RACE CONDITIONS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. DEMONSTRATING CHECK-THEN-ACT HAZARD (Lazy Initialization):");\r
        Thread t1 = new Thread(() -> getLazyInstance("Thread-Swadeep"), "T1");\r
        Thread t2 = new Thread(() -> getLazyInstance("Thread-Tuhina"), "T2");\r
\r
        t1.start();\r
        t2.start();\r
\r
        t1.join();\r
        t2.join();\r
\r
        System.out.println("\\n>>> THE 2 MAIN TAXONOMIES OF RACE CONDITIONS:");\r
        System.out.println("+-----------------------+---------------------------------------+-----------------------------------+");\r
        System.out.println("| Category              | Classic Scenario                      | Solution                          |");\r
        System.out.println("+-----------------------+---------------------------------------+-----------------------------------+");\r
        System.out.println("| 1. Read-Modify-Write  | count++, balance += x, i--            | AtomicInteger, synchronized block |");\r
        System.out.println("| 2. Check-Then-Act     | if(obj==null) create(); if(bal>=x) pay| Double-Checked Locking / Mutex    |");\r
        System.out.println("+-----------------------+---------------------------------------+-----------------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 1: Categories of Race Conditions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RACE CONDITION CATEGORIES:\r
   - 1. Read-Modify-Write:\r
     * Next state depends on current state ('count++').\r
     * Causes lost updates.\r
     * Fix: AtomicInteger, synchronized.\r
   - 2. Check-Then-Act:\r
     * Action depends on observed condition.\r
     * Stale check creates duplicate singletons or overdrawn balances.\r
     * Fix: Synchronized blocks, Double-Checked Locking with volatile.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Compare the two primary categories of Race Conditions: 'Read-Modify-Write' vs 'Check-Then-Act'.",shortAnswer:"1. 'Read-Modify-Write': Occurs when the next state of a variable depends on its previous state (e.g. 'counter++' or 'balance += amount'). Multiple threads read the same stale value, calculate their updates in local registers, and write back, overwriting and losing each other's increments. 2. 'Check-Then-Act': Occurs when a thread verifies a condition (e.g. 'if (instance == null)' or 'if (map.containsKey(key))'), but before it can perform the subsequent action, another thread interleaves and mutates the state, rendering the verified condition invalid.",explanation:"Comprehensive taxonomy of race conditions in computer science.",hint:"Read-Modify-Write causes lost updates (count++); Check-Then-Act causes actions on stale conditions (lazy singleton).",level:"Intermediate",codeExample:"// RMW: count++; | CTA: if (instance == null) instance = new Helper();"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Race Taxonomies"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Categories of Race Conditions: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Read-Modify-Write"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Check-Then-Act"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Classify concurrency hazards: contrasting lost update anomalies in ",e.jsx("code",{className:"text-rose-300 font-mono",children:"Read-Modify-Write"})," counters with stale verification bugs in ",e.jsx("code",{className:"text-amber-300 font-mono",children:"Check-Then-Act"})," lazy initializations."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"RaceConditionCategoriesTaxonomyDemo.java",highlightLines:[7,10,16,17,21,22,30,31,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Race Categories FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 008_005 Topic 1: Categories of Race Conditions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic1_race_condition_categories_note.txt"})}),e.jsx(r,{note:"Almost all concurrency bugs fall into one of these two buckets: Either you are updating a number without locking (Read-Modify-Write), or you are checking if something is null before creating it (Check-Then-Act)! Master both and you master concurrency! — Sukanta Hui"})]})}export{y as default};
