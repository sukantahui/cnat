import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 6: java.util.LinkedHashSet: Maintaining Insertion Order via Doubly Linked Bucket Pointers\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.HashSet;\r
import java.util.LinkedHashSet;\r
import java.util.Set;\r
\r
public class LinkedHashSetDoublyLinkedBucketDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: LinkedHashSet DOUBLY LINKED POINTERS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. STANDARD HashSet (Unordered Hash Distribution):\r
        Set<String> unorderedHashSet = new HashSet<>();\r
        unorderedHashSet.add("Barrackpore (Admission 1)");\r
        unorderedHashSet.add("Naihati (Admission 2)");\r
        unorderedHashSet.add("Shyamnagar (Admission 3)");\r
        unorderedHashSet.add("Ichapur (Admission 4)");\r
\r
        System.out.println(">>> 1. Standard HashSet (Random Hash Table Bucket Order):");\r
        System.out.println("  " + unorderedHashSet);\r
\r
        // 2. LinkedHashSet (Maintains Strict Insertion Order):\r
        Set<String> orderedLinkedHashSet = new LinkedHashSet<>();\r
        orderedLinkedHashSet.add("Barrackpore (Admission 1)");\r
        orderedLinkedHashSet.add("Naihati (Admission 2)");\r
        orderedLinkedHashSet.add("Shyamnagar (Admission 3)");\r
        orderedLinkedHashSet.add("Ichapur (Admission 4)");\r
\r
        System.out.println("\\n>>> 2. LinkedHashSet (Insertion Order 100% Guaranteed):");\r
        System.out.println("  " + orderedLinkedHashSet);\r
\r
        System.out.println("\\n>>> HOW LinkedHashSet MAINTAINS INSERTION ORDER:");\r
        System.out.println("  1. Backed by 'LinkedHashMap' (which extends HashMap).");\r
        System.out.println("  2. Every entry is an 'Entry<K,V>' that contains two extra pointers: 'Entry before, after'.");\r
        System.out.println("  3. A global doubly-linked list threads through all entries across buckets, making iteration order strictly chronological!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 6: LinkedHashSet Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LINKEDHASHSET ARCHITECTURE:\r
   - Backed by 'LinkedHashMap'.\r
   - Nodes contain 'before' and 'after' pointers.\r
   - Threads a doubly-linked list through hash buckets.\r
   - O(1) lookup speed + 100% guaranteed insertion ordering.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does 'java.util.LinkedHashSet' maintain strict insertion order while still providing O(1) hash performance?",shortAnswer:"'LinkedHashSet' is backed by an internal 'LinkedHashMap'. In addition to placing nodes into standard hash table buckets for O(1) lookup, each node contains two additional pointers ('before' and 'after'). These pointers link all elements into a global doubly-linked list reflecting insertion sequence. Iteration traverses this linked list in chronological order, while lookups jump directly to hash buckets.",explanation:"Hybrid data structure combining hash buckets with a doubly-linked list.",hint:"Uses a global doubly-linked list (before/after pointers) threading through all hash bucket nodes.",level:"Intermediate",codeExample:"Set<String> set = new LinkedHashSet<>(); // O(1) + predictable insertion order"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"LinkedHashSet Internals"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.LinkedHashSet"}),": Doubly Linked Bucket Pointers & Insertion Ordering"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover hybrid hash architectures: analyzing how LinkedHashSet embeds a global doubly-linked list (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"before"})," / ",e.jsx("code",{className:"text-sky-300 font-mono",children:"after"}),") across hash buckets to maintain insertion sequence."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"LinkedHashSetDoublyLinkedBucketDemo.java",highlightLines:[7,10,16,17,24,25,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"LinkedHashSet FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 007_003 Topic 6: LinkedHashSet Internals",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic6_linkedhashset_internals_note.txt"})}),e.jsx(a,{note:"If you want the O(1) speed and uniqueness of a HashSet, but you need elements to stay in the exact order they arrived (like an audit trail), LinkedHashSet is the perfect data structure! — Sukanta Hui"})]})}export{S as default};
