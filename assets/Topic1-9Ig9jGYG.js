import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 1: Introduction to Java Collections Framework (JCF) Architecture in java.util\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class JcfArchitectureOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: JAVA COLLECTIONS FRAMEWORK ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 3 CORE COMPONENTS OF JAVA COLLECTIONS FRAMEWORK:");\r
        System.out.println("  1. Interfaces   : Abstract data types defining contracts (Collection, List, Set, Queue, Map).");\r
        System.out.println("  2. Implementations: Concrete data structure engines (ArrayList, HashSet, PriorityQueue, HashMap).");\r
        System.out.println("  3. Algorithms   : High-performance polymorphic utilities (Collections.sort(), binarySearch(), shuffle()).");\r
\r
        System.out.println("\\n>>> JCF HIERARCHY TREE IN java.util:");\r
        System.out.println("  java.lang.Iterable<T>");\r
        System.out.println("    └── java.util.Collection<E>");\r
        System.out.println("          ├── java.util.List<E>   (ArrayList, LinkedList, Vector)");\r
        System.out.println("          ├── java.util.Set<E>    (HashSet, LinkedHashSet, TreeSet)");\r
        System.out.println("          └── java.util.Queue<E>  (PriorityQueue, ArrayDeque, BlockingQueue)");\r
        System.out.println();\r
        System.out.println("  java.util.Map<K, V> (SEPARATE HIERARCHY!)");\r
        System.out.println("    ├── HashMap, LinkedHashMap, TreeMap");\r
        System.out.println("    └── ConcurrentHashMap");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 1: JCF Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JCF ARCHITECTURE:\r
   - 3 Pillars: Interfaces, Implementations, Algorithms.\r
   - Root: 'Iterable<T>' → 'Collection<E>' → List, Set, Queue.\r
   - 'Map<K, V>' is in an independent hierarchy.\r
   - All classes reside in 'java.util' (and 'java.util.concurrent').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does the 'java.util.Map' interface NOT inherit from the root 'java.util.Collection' interface in Java?",shortAnswer:"Because their data models are fundamentally incompatible. 'Collection<E>' represents a collection of individual single elements (1-dimensional sequence or set). 'Map<K, V>' represents key-value pairs (2-dimensional mapping where keys are unique). Core Collection methods like 'add(E)' make no sense for a Map, which requires 'put(K, V)'.",explanation:"Classic architectural interview question on JCF design.",hint:"Collection models single elements (add(E)), while Map models key-value pairs (put(K, V)).",level:"Intermediate",codeExample:"// Collection<E> (1 element) vs Map<K, V> (key-value pair mapping)"}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Architecture Tree"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Introduction to Java Collections Framework (JCF) Architecture in ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master JCF taxonomy: exploring the 3 pillars of collections architecture (Interfaces, Implementations, Algorithms) and understanding why Map sits in an independent hierarchy."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"JcfArchitectureOverviewDemo.java",highlightLines:[7,10,13,14,15,18,19,20,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JCF Architecture FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 007_001 Topic 1: JCF Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic1_jcf_architecture_note.txt"})}),e.jsx(a,{note:"A top interview question: 'Is Map a Collection in Java?' The answer is NO! Collection handles single elements, while Map handles key-value pairs! Map is part of the Collections Framework, but does NOT inherit from java.util.Collection! — Sukanta Hui"})]})}export{C as default};
