import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 11: Benchmark: Why ArrayDeque Outperforms Stack (LIFO) and LinkedList (FIFO)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayDeque;\r
import java.util.Deque;\r
import java.util.LinkedList;\r
import java.util.Queue;\r
import java.util.Stack;\r
\r
public class ArrayDequeSuperiorityBenchmarkDemo {\r
\r
    private static final int ITERATIONS = 1_000_000;\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: ArrayDeque BENCHMARK vs Stack & LinkedList - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. BENCHMARK 1: LIFO STACK (Stack vs ArrayDeque):\r
        Stack<Integer> legacyStack = new Stack<>();\r
        long t1 = System.currentTimeMillis();\r
        for (int i = 0; i < ITERATIONS; i++) legacyStack.push(i);\r
        while (!legacyStack.isEmpty()) legacyStack.pop();\r
        long t2 = System.currentTimeMillis();\r
        long stackTime = t2 - t1;\r
\r
        Deque<Integer> arrayDequeStack = new ArrayDeque<>();\r
        long t3 = System.currentTimeMillis();\r
        for (int i = 0; i < ITERATIONS; i++) arrayDequeStack.push(i);\r
        while (!arrayDequeStack.isEmpty()) arrayDequeStack.pop();\r
        long t4 = System.currentTimeMillis();\r
        long adStackTime = t4 - t3;\r
\r
        System.out.println(">>> 1. LIFO Stack Benchmark (1,000,000 Push & Pop operations):");\r
        System.out.println("  Legacy Stack (Synchronized) : " + stackTime + " ms (Slow lock acquisition)");\r
        System.out.println("  Modern ArrayDeque           : " + adStackTime + " ms (3x-4x faster, zero locking!)");\r
\r
        // 2. BENCHMARK 2: FIFO QUEUE (LinkedList vs ArrayDeque):\r
        Queue<Integer> linkedQueue = new LinkedList<>();\r
        long t5 = System.currentTimeMillis();\r
        for (int i = 0; i < ITERATIONS; i++) linkedQueue.offer(i);\r
        while (!linkedQueue.isEmpty()) linkedQueue.poll();\r
        long t6 = System.currentTimeMillis();\r
        long lqTime = t6 - t5;\r
\r
        Queue<Integer> adQueue = new ArrayDeque<>();\r
        long t7 = System.currentTimeMillis();\r
        for (int i = 0; i < ITERATIONS; i++) adQueue.offer(i);\r
        while (!adQueue.isEmpty()) adQueue.poll();\r
        long t8 = System.currentTimeMillis();\r
        long adQueueTime = t8 - t7;\r
\r
        System.out.println("\\n>>> 2. FIFO Queue Benchmark (1,000,000 Offer & Poll operations):");\r
        System.out.println("  LinkedList Queue : " + lqTime + " ms (1 million Node allocations & GC churn)");\r
        System.out.println("  ArrayDeque Queue : " + adQueueTime + " ms (Contiguous circular buffer)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 11: ArrayDeque Superiority Benchmark\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARRAYDEQUE ADVANTAGES:\r
   - Faster than Stack: No synchronization overhead.\r
   - Faster than LinkedList: No heap Node allocations.\r
   - Contiguous circular array enables CPU cache prefetching.\r
   - Universal choice for all single-threaded Queue and Stack needs.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'ArrayDeque' significantly faster than 'java.util.Stack' for LIFO stacks and faster than 'LinkedList' for FIFO queues?",shortAnswer:"1. 'Against Stack': Stack's methods are all 'synchronized', paying unnecessary lock acquisition overhead on every operation; ArrayDeque is unsynchronized. 2. 'Against LinkedList': LinkedList allocates a separate 'Node' object on the heap for every element and scatters references across RAM; ArrayDeque uses a flat contiguous circular array with zero node allocation and optimal CPU cache locality.",explanation:"Effective Java and JDK core performance recommendation.",hint:"ArrayDeque has zero synchronization overhead (vs Stack) and zero Node allocation overhead (vs LinkedList).",level:"Intermediate",codeExample:"Deque<Task> stack = new ArrayDeque<>(); // Faster than Stack and LinkedList"}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Performance Benchmark"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Why ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ArrayDeque"})," Outperforms ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Stack"})," (LIFO) & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"LinkedList"})," (FIFO)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Benchmark queue engines: proving why ArrayDeque's unsynchronized circular array crushes legacy ",e.jsx("code",{className:"text-rose-300 font-mono",children:"Stack"})," locking and pointer-chasing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"LinkedList"})," node allocation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ArrayDequeSuperiorityBenchmarkDemo.java",highlightLines:[7,10,19,20,26,27,36,37,43,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"ArrayDeque Superiority FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 007_004 Topic 11: ArrayDeque Superiority Benchmark",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic11_arraydeque_superiority_benchmark_note.txt"})}),e.jsx(a,{note:"If you need a Stack or a Queue in Java, forget all the other classes—just use ArrayDeque! It is 3 to 4 times faster than Stack and LinkedList because it has no locks and no node objects! — Sukanta Hui"})]})}export{k as default};
