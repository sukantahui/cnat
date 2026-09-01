import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 13: Synchronized Wrappers: Collections.synchronizedList/Set/Map & The Iteration Mutex Trap\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.Iterator;\r
import java.util.List;\r
\r
public class SynchronizedWrappersDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: Collections SYNCHRONIZED WRAPPERS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Wrapping unsynchronized ArrayList with a synchronized decorator:\r
        List<String> rawList = new ArrayList<>();\r
        List<String> syncList = Collections.synchronizedList(rawList);\r
\r
        syncList.add("Barrackpore Central");\r
        syncList.add("Naihati Junction");\r
\r
        System.out.println(">>> 1. Synchronized List State: " + syncList);\r
\r
        // 2. THE CRITICAL ITERATION MUTEX TRAP:\r
        // Individual methods (add, get, remove) are synchronized internally on 'this' mutex,\r
        // BUT compound iteration MUST be explicitly synchronized by the user!\r
        System.out.println("\\n>>> 2. Mandatory Explicit Synchronization During Iteration:");\r
        synchronized (syncList) { // MUST acquire lock on syncList manually!\r
            Iterator<String> it = syncList.iterator();\r
            while (it.hasNext()) {\r
                System.out.println("  Thread-Safe Iteration Item: " + it.next());\r
            }\r
        } // Lock released\r
\r
        System.out.println("\\n>>> WHY MANUAL SYNCHRONIZATION IS REQUIRED FOR ITERATION:");\r
        System.out.println("  - The iterator returned by 'syncList.iterator()' does NOT hold the lock across multiple hasNext()/next() calls.");\r
        System.out.println("  - Without the 'synchronized(syncList)' block, another thread can mutate the list between hasNext() and next(), crashing with CME!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 13: Synchronized Wrappers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SYNCHRONIZED WRAPPERS:\r
   - 'Collections.synchronizedList(list)'.\r
   - 'Collections.synchronizedSet(set)'.\r
   - 'Collections.synchronizedMap(map)'.\r
   - Coarse single-mutex locking for all methods.\r
   - Iteration MUST be enclosed in 'synchronized(syncList)' block!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why MUST you manually synchronize on a 'Collections.synchronizedList' wrapper when iterating over it?",shortAnswer:"Although individual methods (like 'add()' and 'get()') on a synchronized wrapper are synchronized on an internal mutex, the Iterator returned by 'syncList.iterator()' is NOT automatically synchronized across the entire traversal. Between individual 'hasNext()' and 'next()' invocations, another thread can interleave and mutate the list. To prevent 'ConcurrentModificationException', the developer must enclose the iteration inside a 'synchronized (syncList) { ... }' block.",explanation:"Explicit requirement documented in java.util.Collections Javadoc.",hint:"Iterator does not lock the list across iterations; manual synchronized(syncList) block is required.",level:"Intermediate",codeExample:"synchronized(syncList) { for (String s : syncList) { ... } }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Synchronized Wrappers"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Synchronized Wrappers: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collections.synchronizedList()"})," & The Iteration Mutex Trap"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect synchronized collection wrappers: mastering coarse mutex synchronization and uncovering why manual ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"synchronized(syncList)"})," blocks are mandatory during iteration."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"SynchronizedWrappersDeepDiveDemo.java",highlightLines:[7,10,16,17,24,25,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Synchronized Wrappers FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 007_008 Topic 13: Synchronized Wrappers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic13_synchronized_wrappers_note.txt"})}),e.jsx(i,{note:"If you wrap a list with Collections.synchronizedList, remember this rule: You MUST wrap every for-each loop inside a 'synchronized(list) { ... }' block! Otherwise, another thread can modify the list mid-loop and crash your program! — Sukanta Hui"})]})}export{x as default};
