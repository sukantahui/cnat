import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 007_002: List Implementations & ArrayList Internals\r
 * Topic 8: LinkedList Performance: O(1) Head/Tail vs O(n) Indexed Access (Nearest End Traversal)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.LinkedList;\r
\r
public class LinkedListPerformanceCharacteristicsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: LinkedList PERFORMANCE & NEAREST-END TRAVERSAL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        LinkedList<Integer> list = new LinkedList<>();\r
        for (int i = 0; i < 50000; i++) list.add(i);\r
\r
        // 1. O(1) HEAD INSERTION / DELETION (Pointer updates only):\r
        long t1 = System.nanoTime();\r
        list.addFirst(-1);\r
        long t2 = System.nanoTime();\r
        System.out.printf(">>> 1. O(1) Head Insertion (addFirst) : %d ns%n", (t2 - t1));\r
\r
        // 2. O(n) MIDDLE ACCESS (Requires traversing pointers from nearest end!):\r
        long t3 = System.nanoTime();\r
        int midVal = list.get(25000); // Must traverse 25,000 pointers!\r
        long t4 = System.nanoTime();\r
        System.out.printf(">>> 2. O(n) Middle Access (get(25000)): %d ns (val=%d)%n", (t4 - t3), midVal);\r
\r
        System.out.println("\\n>>> HOW LinkedList.node(int index) OPTIMIZES TRAVERSAL:");\r
        System.out.println("  - If index < (size >> 1): Starts from 'first' node and traverses FORWARD using 'node.next'.");\r
        System.out.println("  - If index >= (size >> 1): Starts from 'last' node and traverses BACKWARD using 'node.prev'.");\r
        System.out.println("  - Traverses at most n/2 nodes, but still fundamentally O(n) linear time!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_002: List Implementations & ArrayList Internals\r
Topic 8: LinkedList Performance Profile\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LINKEDLIST PERFORMANCE:\r
   - addFirst() / addLast() → O(1) instant pointer update.\r
   - removeFirst() / removeLast() → O(1).\r
   - get(i) / set(i, val) → O(n) linear pointer traversal.\r
   - node(i) helper traverses from nearest end (first or last).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does 'LinkedList.get(int index)' determine whether to traverse forward from the head or backward from the tail?",shortAnswer:"In the internal helper method 'node(int index)', LinkedList checks: 'if (index < (size >> 1))'. If the requested index is in the first half of the list, it begins at the 'first' pointer and steps forward using 'node.next'. If the index is in the second half, it begins at the 'last' pointer and steps backward using 'node.prev'.",explanation:"Internal binary search optimization for doubly linked list traversal.",hint:"Checks 'index < (size >> 1)'; traverses from head if in first half, from tail if in second half.",level:"Intermediate",codeExample:"Node<E> node(int index) { if (index < (size >> 1)) ... else ... }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_002 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"LinkedList Traversal"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["LinkedList Performance: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(1)"})," Head/Tail vs ",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(n)"})," Nearest-End Traversal"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace internal node traversal algorithms: exploring why head/tail operations execute in ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"O(1)"})," time while index lookups require walking pointers from the nearest end."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"LinkedListPerformanceCharacteristicsDemo.java",highlightLines:[7,10,16,17,22,23,27,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"LinkedList Performance FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 007_002 Topic 8: LinkedList Performance Profile",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_002_topic8_linkedlist_performance_note.txt"})}),e.jsx(i,{note:"If you call 'linkedList.get(50000)', Java literally walks 50,000 pointers one by one from head to node! Never loop through a LinkedList using an index 'for(int i=0; i<size; i++) list.get(i)' or it becomes a horrific O(n²) disaster! — Sukanta Hui"})]})}export{h as default};
