import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 1: The Synchronized Wrapper Approach: Collections.synchronizedMap() & Iteration Locks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Collections;\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class SynchronizedWrappersAndIterationLockDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: Collections.synchronizedMap() & ITERATION LOCK - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Wrapping standard HashMap with synchronized wrapper:\r
        Map<String, String> syncMap = Collections.synchronizedMap(new HashMap<>());\r
\r
        syncMap.put("BRK-101", "Swadeep Paul");\r
        syncMap.put("NAI-102", "Tuhina Das");\r
        syncMap.put("SHY-103", "Abhronila Das");\r
\r
        System.out.println(">>> 1. Synchronized Map Populated Safely:");\r
        System.out.println("  Size: " + syncMap.size());\r
\r
        // 2. MANDATORY USER SYNCHRONIZATION DURING ITERATION:\r
        // JDK Warning: Must manually synchronize on the map instance when traversing it!\r
        System.out.println("\\n>>> 2. Thread-Safe Iteration (Manual Synchronized Block Required!):");\r
        synchronized (syncMap) { // MANDATORY LOCK!\r
            for (Map.Entry<String, String> entry : syncMap.entrySet()) {\r
                System.out.println("  Entry: " + entry.getKey() + " -> " + entry.getValue());\r
            }\r
        }\r
\r
        System.out.println("\\n>>> HOW SYNCHRONIZED WRAPPERS WORK:");\r
        System.out.println("  1. Decorator Pattern : 'Collections.synchronizedMap(m)' wraps the underlying map inside 'SynchronizedMap'.");\r
        System.out.println("  2. Coarse Mutex Lock : Every method (put, get, remove) is wrapped with 'synchronized(mutex) { return m.put(k,v); }'.");\r
        System.out.println("  3. Iteration Trap    : Iterators are NOT synchronized! Developers MUST wrap iteration in a 'synchronized(map)' block.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 1: Synchronized Wrappers & Iteration Lock\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SYNCHRONIZED WRAPPERS:\r
   - 'Collections.synchronizedMap(map)'.\r
   - 'Collections.synchronizedList(list)'.\r
   - Uses Decorator pattern with coarse-grained 'mutex' lock.\r
   - Individual methods are thread-safe.\r
   - MANDATORY: Wrap iterations in 'synchronized(map) { ... }' blocks!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does the Java Javadoc mandate that developers manually synchronize on 'Collections.synchronizedMap(map)' when iterating over it?",shortAnswer:"While 'Collections.synchronizedMap' protects individual method calls ('put', 'get', 'remove') with 'synchronized(mutex)', iterating over 'keySet()', 'values()', or 'entrySet()' involves multiple separate method calls ('hasNext()', 'next()') spread across a loop. If another thread mutates the map between 'hasNext()' and 'next()', the iterator throws 'ConcurrentModificationException'. Manual synchronization on the map prevents concurrent mutations throughout the entire loop.",explanation:"Crucial rule highlighted in Javadoc for all Collections.synchronizedXxx wrappers.",hint:"Iterators span multiple method calls; manual synchronized(map) block protects the entire iteration loop.",level:"Intermediate",codeExample:"synchronized(syncMap) { for (Entry e : syncMap.entrySet()) { ... } }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Synchronized Wrappers"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Synchronized Wrapper Approach: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collections.synchronizedMap()"})," & Iteration Locks"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Examine synchronized decorators: implementing thread-safe maps with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Collections.synchronizedMap"})," and applying mandatory manual synchronization during iterator traversals."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"SynchronizedWrappersAndIterationLockDemo.java",highlightLines:[7,10,16,17,26,27,28,29,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Synchronized Wrappers FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 007_006 Topic 1: Synchronized Wrappers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic1_synchronized_wrappers_note.txt"})}),e.jsx(a,{note:"If you use Collections.synchronizedMap(), remember this golden rule: when you iterate with a for-each loop, you MUST wrap it inside 'synchronized(map)'! If you forget, your app will throw ConcurrentModificationException in production! — Sukanta Hui"})]})}export{x as default};
