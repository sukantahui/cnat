import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
 * Topic 7: Fail-Safe & Weakly Consistent Iterators: CopyOnWriteArrayList & ConcurrentHashMap\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Iterator;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.concurrent.ConcurrentHashMap;\r
import java.util.concurrent.CopyOnWriteArrayList;\r
\r
public class FailSafeAndWeaklyConsistentDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: FAIL-SAFE & WEAKLY CONSISTENT ITERATORS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. SNAPSHOT ITERATOR (CopyOnWriteArrayList):\r
        List<String> cowList = new CopyOnWriteArrayList<>(List.of("Swadeep", "Tuhina"));\r
        Iterator<String> cowIt = cowList.iterator();\r
\r
        cowList.add("Abhronila (Added AFTER iterator creation)"); // Mutates backing list\r
\r
        System.out.println(">>> 1. CopyOnWriteArrayList (Immutable Snapshot Iterator):");\r
        while (cowIt.hasNext()) {\r
            System.out.println("  Snapshot Read: " + cowIt.next()); // Reads snapshot; does NOT see Abhronila, NEVER throws CME!\r
        }\r
        System.out.println("  Backing List : " + cowList);\r
\r
        // 2. WEAKLY CONSISTENT ITERATOR (ConcurrentHashMap):\r
        Map<String, String> chMap = new ConcurrentHashMap<>();\r
        chMap.put("BRK", "Barrackpore");\r
        chMap.put("NAI", "Naihati");\r
\r
        Iterator<String> chIt = chMap.keySet().iterator();\r
        chMap.put("SHY", "Shyamnagar"); // Mutates map during iteration\r
\r
        System.out.println("\\n>>> 2. ConcurrentHashMap (Weakly Consistent Iterator):");\r
        while (chIt.hasNext()) {\r
            System.out.println("  Traversed Key: " + chIt.next() + " (NEVER throws CME! May reflect recent updates)");\r
        }\r
\r
        System.out.println("\\n>>> FAIL-SAFE vs WEAKLY CONSISTENT SUMMARY:");\r
        System.out.println("  1. Snapshot (CopyOnWrite) : Iterates over exact immutable array clone created at iterator() time.");\r
        System.out.println("  2. Weakly Consistent (CHM): Iterates live nodes via volatile next pointers; never throws CME; reflects state changes when possible.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
Topic 7: Fail-Safe & Weakly Consistent Iterators\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FAIL-SAFE / WEAKLY CONSISTENT:\r
   - Part of 'java.util.concurrent'.\r
   - NEVER throw 'ConcurrentModificationException'.\r
   - CopyOnWriteArrayList &rarr; immutable Snapshot view.\r
   - ConcurrentHashMap &rarr; Weakly Consistent live view.\r
   - Safe for high-concurrency multi-threaded streaming.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the difference between a 'Snapshot Iterator' (CopyOnWriteArrayList) and a 'Weakly Consistent Iterator' (ConcurrentHashMap)?",shortAnswer:"1. 'Snapshot Iterator': traverses an immutable clone of the backing array captured at the moment 'iterator()' was created. It never throws CME and does not reflect any subsequent mutations. 2. 'Weakly Consistent Iterator': traverses the live collection using volatile node pointers. It never throws CME, handles concurrent modifications gracefully, and guarantees that each element is returned at most once, potentially reflecting modifications made after iterator creation.",explanation:"Key distinction in JSR-166 concurrent iterator specifications.",hint:"Snapshot traverses a fixed clone; weakly consistent traverses live data via volatile pointers without throwing CME.",level:"Advanced",codeExample:'Iterator it = cowList.iterator(); cowList.add("new"); // Snapshot never throws CME'}];function y(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_007 · Topic 7"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Fail-Safe Iterators"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Fail-Safe & Weakly Consistent: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"CopyOnWriteArrayList"})," & ",t.jsx("code",{className:"text-sky-400 font-mono",children:"ConcurrentHashMap"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Explore non-blocking concurrent iteration: analyzing immutable snapshot traversals in ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"CopyOnWriteArrayList"})," and weakly consistent live traversals in ",t.jsx("code",{className:"text-sky-300 font-mono",children:"ConcurrentHashMap"}),"."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:o,title:"FailSafeAndWeaklyConsistentDemo.java",highlightLines:[7,10,16,17,20,21,28,29,33,34]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{title:"Fail-Safe FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:s,title:"Module 007_007 Topic 7: Fail-Safe Iterators",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_007_topic7_fail_safe_iterators_note.txt"})}),t.jsx(n,{note:"If you need to iterate through a list while background threads are adding items, use CopyOnWriteArrayList or ConcurrentHashMap! Their iterators are Fail-Safe and will NEVER throw ConcurrentModificationException! — Sukanta Hui"})]})}export{y as default};
