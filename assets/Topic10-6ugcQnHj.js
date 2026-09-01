import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 10: java.util.ArrayDeque: Resizable Circular Array Buffer & Head/Tail Pointers\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.ArrayDeque;\r
import java.util.Arrays;\r
\r
public class ArrayDequeCircularBufferInternalsDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: ArrayDeque CIRCULAR ARRAY BUFFER INTERNALS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ArrayDeque<String> circularDeque = new ArrayDeque<>(8);\r
\r
        // Add elements to observe head and tail wrapping:\r
        circularDeque.addLast("Item 1");\r
        circularDeque.addLast("Item 2");\r
        circularDeque.addFirst("Item 0 (Wraps around to end of circular array!)");\r
\r
        // Inspecting private Object[] elements, int head, and int tail in ArrayDeque:\r
        Field elementsField = ArrayDeque.class.getDeclaredField("elements");\r
        elementsField.setAccessible(true);\r
        Object[] elementsArray = (Object[]) elementsField.get(circularDeque);\r
\r
        Field headField = ArrayDeque.class.getDeclaredField("head");\r
        headField.setAccessible(true);\r
        int headIndex = (int) headField.get(circularDeque);\r
\r
        Field tailField = ArrayDeque.class.getDeclaredField("tail");\r
        tailField.setAccessible(true);\r
        int tailIndex = (int) tailField.get(circularDeque);\r
\r
        System.out.println(">>> 1. Reflecting Inside ArrayDeque's Circular Buffer:");\r
        System.out.println("  Internal Array Length : " + elementsArray.length);\r
        System.out.println("  Head Pointer Index    : " + headIndex);\r
        System.out.println("  Tail Pointer Index    : " + tailIndex);\r
        System.out.println("  Raw Buffer Elements   : " + Arrays.toString(elementsArray));\r
\r
        System.out.println("\\n>>> HOW CIRCULAR ARRAY BUFFERING WORKS:");\r
        System.out.println("  1. 'head' pointer moves LEFT on addFirst(): 'head = (head - 1) & (elements.length - 1)' (wraps around circularly).");\r
        System.out.println("  2. 'tail' pointer moves RIGHT on addLast(): 'tail = (tail + 1) & (elements.length - 1)'.");\r
        System.out.println("  3. Zero Element Shifts: Neither addFirst nor addLast ever calls System.arraycopy for shifting—only pointer increments!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 10: ArrayDeque Circular Buffer\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARRAYDEQUE CIRCULAR BUFFER:\r
   - Resizable circular array buffer ('elements[]').\r
   - 'head' and 'tail' indices wrap around circularly.\r
   - Bitwise wrap: '(head - 1) & (length - 1)'.\r
   - O(1) head and tail operations with zero array copying/shifting.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does 'java.util.ArrayDeque' achieve O(1) performance for both 'addFirst()' and 'addLast()' without shifting elements in memory?",shortAnswer:"'ArrayDeque' uses a circular array buffer maintained by two integer indices: 'head' and 'tail'. When 'addFirst()' is called, 'head' decrements circularly ('head = (head - 1) & (length - 1)'). When 'addLast()' is called, 'tail' increments circularly ('tail = (tail + 1) & (length - 1)'). Because pointers move rather than array elements, both head and tail operations execute in O(1) time with zero array shifting.",explanation:"Classic circular ring-buffer data structure implemented in the JDK.",hint:"Circular buffer wraps head and tail indices bitwise without moving elements in memory.",level:"Advanced",codeExample:"elements[head = (head - 1) & (elements.length - 1)] = e; // Circular addFirst"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Circular Buffer Internals"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.ArrayDeque"}),": Resizable Circular Array Buffer Mechanics"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace circular ring-buffer mathematics: inspecting ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"head"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"tail"})," pointer wrap-around algorithms (",e.jsx("code",{className:"text-purple-300 font-mono",children:"(head - 1) & (length - 1)"}),") that eliminate array shifting."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ArrayDequeCircularBufferInternalsDemo.java",highlightLines:[7,10,16,17,18,28,29,32,33,40,41]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Circular Buffer FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:l,title:"Module 007_004 Topic 10: ArrayDeque Circular Buffer",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic10_arraydeque_circular_buffer_note.txt"})}),e.jsx(n,{note:"ArrayDeque is a circular ring buffer! When you add to the front, it simply wraps the head pointer to the end of the array using bitwise logic! That's why it never shifts elements and runs at maximum speed! — Sukanta Hui"})]})}export{x as default};
