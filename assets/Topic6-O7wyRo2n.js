import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 6: Lock-Free Reads in ConcurrentHashMap: Volatile Node Pointers & Memory Visibility\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.concurrent.ConcurrentHashMap;\r
\r
public class ConcurrentHashMapLockFreeReadsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: LOCK-FREE READS IN ConcurrentHashMap - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ConcurrentHashMap<String, String> studentRecords = new ConcurrentHashMap<>();\r
        studentRecords.put("STU-101", "Swadeep Paul");\r
\r
        // Calling get() is 100% LOCK-FREE:\r
        String name = studentRecords.get("STU-101");\r
        System.out.println(">>> 1. Lock-Free Read Result: " + name);\r
\r
        System.out.println("\\n>>> HOW ConcurrentHashMap ACHIEVES LOCK-FREE READS:");\r
        System.out.println("  1. In JDK Source Code for Node<K,V>:");\r
        System.out.println("     - 'volatile V val;'         -> The value field is declared volatile!");\r
        System.out.println("     - 'volatile Node<K,V> next;' -> The next node pointer is declared volatile!");\r
        System.out.println("  2. Happens-Before Memory Guarantee:");\r
        System.out.println("     - Any write to 'val' or 'next' by a mutating thread is IMMEDIATELY visible to reading threads without locks.");\r
        System.out.println("  3. Non-Blocking Traversal:");\r
        System.out.println("     - 'get(key)' never acquires a synchronized lock or CAS loop; it traverses nodes at raw hardware memory speed.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 6: Lock-Free Reads via Volatile Fields\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOCK-FREE READS:\r
   - 'get()' never acquires locks.\r
   - Node fields: 'volatile V val;' and 'volatile Node<K,V> next;'.\r
   - JMM Happens-Before guarantee: writes immediately visible to readers.\r
   - Raw hardware memory read speed for 99% of web application traffic.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why are 'get()' read operations completely lock-free in 'ConcurrentHashMap'?",shortAnswer:"Because in the internal 'Node<K,V>' class, both the value field ('volatile V val;') and the next pointer ('volatile Node<K,V> next;') are declared 'volatile'. According to the Java Memory Model (JMM), a write to a volatile field establishes a 'happens-before' relationship with subsequent volatile reads. A reading thread is mathematically guaranteed to observe the latest updated values and linked chain without acquiring any monitor locks.",explanation:"Core Java Memory Model visibility guarantee in JSR-166.",hint:"Volatile 'val' and volatile 'next' guarantee memory visibility without requiring any locks during get().",level:"Advanced",codeExample:"static class Node<K,V> { final int hash; final K key; volatile V val; volatile Node<K,V> next; }"}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Lock-Free Reads"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"ConcurrentHashMap"})," Reads: Lock-Free via ",e.jsx("code",{className:"text-purple-400 font-mono",children:"volatile"})," Fields"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace Java Memory Model visibility: examining how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"volatile V val"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"volatile Node next"})," provide lock-free reads with happens-before guarantees."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ConcurrentHashMapLockFreeReadsDemo.java",highlightLines:[7,10,16,17,22,23,24,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Lock-Free Reads FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 007_006 Topic 6: Lock-Free Reads",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic6_lock_free_reads_note.txt"})}),e.jsx(n,{note:"In high-traffic systems, 95% of operations are 'get()' reads! Because ConcurrentHashMap declares node pointers as 'volatile', reading threads NEVER wait or block on locks! They read directly from memory at hardware speed! — Sukanta Hui"})]})}export{v as default};
