import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const a=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 1: The 2 Method Families of Queue: Exceptions vs Special-Value Handling\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class QueueTwoMethodFamiliesOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE 2 METHOD FAMILIES OF java.util.Queue - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE COMPLETE QUEUE API MATRIX (2 ERROR HANDLING STRATEGIES):");\r
        System.out.println("+-------------------+---------------------------+---------------------------+");\r
        System.out.println("| Operation Type    | Throws Exception on Fail  | Returns Special Value     |");\r
        System.out.println("+-------------------+---------------------------+---------------------------+");\r
        System.out.println("| Insert (at Tail)  | add(e)                    | offer(e) -> false         |");\r
        System.out.println("| Remove (at Head)  | remove()                  | poll()  -> null           |");\r
        System.out.println("| Examine (at Head) | element()                 | peek()  -> null           |");\r
        System.out.println("+-------------------+---------------------------+---------------------------+");\r
\r
        System.out.println("\\n>>> WHEN TO USE EACH METHOD FAMILY:");\r
        System.out.println("  1. Use 'offer() / poll() / peek()' for bounded, concurrent, and high-throughput pipelines where failures are normal.");\r
        System.out.println("  2. Use 'add() / remove() / element()' when failures represent illegal program states that should abort execution.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 1: 2 Method Families of Queue\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. QUEUE METHOD FAMILIES:\r
   - Insert  : 'add(e)' (Exception) vs 'offer(e)' (false).\r
   - Remove  : 'remove()' (Exception) vs 'poll()' (null).\r
   - Examine : 'element()' (Exception) vs 'peek()' (null).\r
   - Best practice: Prefer 'offer()', 'poll()', and 'peek()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Summarize the 2 method families provided on the 'java.util.Queue' interface for Insert, Remove, and Examine operations.",shortAnswer:"1. 'Throws Exception': 'add(e)' throws IllegalStateException if full; 'remove()' throws NoSuchElementException if empty; 'element()' throws NoSuchElementException if empty. 2. 'Returns Special Value': 'offer(e)' returns 'false' if full; 'poll()' returns 'null' if empty; 'peek()' returns 'null' if empty.",explanation:"Fundamental design duality in the Java Queue specification.",hint:"Exception family (add, remove, element) vs Special Value family (offer, poll, peek).",level:"Beginner",codeExample:"boolean ok = q.offer(e); // Safe special value | q.add(e); // Throws exception if full"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full",children:"2 Method Families"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The 2 Method Families of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Queue"}),": Exceptions vs Special Values"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master Queue API taxonomy: comparing exception-throwing methods (",e.jsx("code",{className:"text-rose-400 font-mono",children:"add"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"remove"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"element"}),") against safe special-value methods (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"offer"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"poll"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"peek"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"QueueTwoMethodFamiliesOverviewDemo.java",highlightLines:[7,10,13,14,15,16,17,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"2 Method Families FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 007_004 Topic 1: 2 Method Families of Queue",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic1_two_method_families_queue_note.txt"})}),e.jsx(r,{note:"Never confuse 'poll()' with 'remove()'! 'poll()' returns null if the queue is empty so your server keeps running smoothly; 'remove()' throws a NoSuchElementException that will crash your thread if uncaught! — Sukanta Hui"})]})}export{f as default};
