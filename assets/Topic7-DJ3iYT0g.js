import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 007_002: List Implementations & ArrayList Internals\r
 * Topic 7: java.util.LinkedList Implementing Both List and Deque Interfaces\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Deque;\r
import java.util.LinkedList;\r
import java.util.List;\r
\r
public class LinkedListDualInterfaceContractDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: LinkedList AS BOTH List & Deque - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        LinkedList<String> dualList = new LinkedList<>();\r
\r
        // 1. AS A LIST (Index-based access):\r
        List<String> asList = dualList;\r
        asList.add("Swadeep Paul");\r
        asList.add("Tuhina Das");\r
        System.out.println(">>> 1. Accessed via List Interface: " + asList.get(0));\r
\r
        // 2. AS A DEQUE (Head & Tail operations):\r
        Deque<String> asDeque = dualList;\r
        asDeque.addFirst("Abhronila Das (Inserted at Head)");\r
        asDeque.addLast("Debangshu Mukherjee (Inserted at Tail)");\r
\r
        System.out.println("\\n>>> 2. After Deque Head & Tail Additions:");\r
        System.out.println("  Peek First : " + asDeque.peekFirst());\r
        System.out.println("  Peek Last  : " + asDeque.peekLast());\r
        System.out.println("  All Items  : " + dualList);\r
\r
        // 3. AS A FIFO QUEUE / LIFO STACK:\r
        asDeque.push("Stack Top Item"); // LIFO push\r
        System.out.println("\\n>>> 3. LIFO Pop : " + asDeque.pop());\r
\r
        System.out.println("\\n>>> DUAL INTERFACE ARCHITECTURE:");\r
        System.out.println("  - LinkedList implements 'java.util.List<E>' AND 'java.util.Deque<E>'.");\r
        System.out.println("  - Provides List operations (get, set, indexOf) + Deque operations (addFirst, removeLast, push, pop, poll).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_002: List Implementations & ArrayList Internals\r
Topic 7: LinkedList Dual Interface Contract\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DUAL INTERFACE IMPLEMENTATION:\r
   - 'implements List<E>, Deque<E>, Cloneable, Serializable'.\r
   - List API: 'get(i)', 'set(i, val)', 'indexOf()'.\r
   - Deque API: 'addFirst()', 'addLast()', 'pollFirst()', 'pop()', 'push()'.\r
   - O(1) head and tail operations.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why does 'java.util.LinkedList' implement both 'List' and 'Deque' interfaces in Java?",shortAnswer:"Because its underlying doubly linked list node structure naturally supports fast O(1) pointer updates at both ends (head and tail) as well as positional index traversal. Implementing both interfaces allows LinkedList to serve simultaneously as an indexed sequential List and as a double-ended Queue (Deque) or LIFO Stack.",explanation:"Core versatile design of java.util.LinkedList.",hint:"Doubly linked structure allows O(1) operations at head and tail (Deque) and indexed access (List).",level:"Intermediate",codeExample:'Deque<String> d = new LinkedList<>(); d.addFirst("A"); d.addLast("B");'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_002 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Dual Interface"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"LinkedList"})," Implementing Both ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"List"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Deque"})," Interfaces"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Explore dual interface capabilities: utilizing LinkedList as a sequential index-based List and as a double-ended Queue (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"addFirst()"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"pollLast()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"push()"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"pop()"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"LinkedListDualInterfaceContractDemo.java",highlightLines:[7,10,16,17,23,24,25,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Dual Interface FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:r,title:"Module 007_002 Topic 7: LinkedList Dual Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_002_topic7_linkedlist_dual_interface_note.txt"})}),e.jsx(s,{note:"LinkedList wears two hats in Java! When treated as a List, it has get(index); when treated as a Deque, it has addFirst() and removeLast()! — Sukanta Hui"})]})}export{h as default};
