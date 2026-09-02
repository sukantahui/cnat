import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 2: Exception-Throwing Queue Methods: add(e), remove(), and element()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayDeque;\r
import java.util.NoSuchElementException;\r
import java.util.Queue;\r
import java.util.concurrent.ArrayBlockingQueue;\r
\r
public class QueueExceptionThrowingMethodsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: EXCEPTION-THROWING QUEUE METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Calling remove() on an EMPTY Queue throws NoSuchElementException:\r
        Queue<String> emptyQueue = new ArrayDeque<>();\r
        System.out.println(">>> 1. Invoking remove() on empty queue:");\r
        try {\r
            emptyQueue.remove();\r
        } catch (NoSuchElementException e) {\r
            System.out.println("  [CAUGHT EXPECTED EXCEPTION] remove() threw NoSuchElementException!");\r
        }\r
\r
        // 2. Calling element() on an EMPTY Queue throws NoSuchElementException:\r
        System.out.println("\\n>>> 2. Invoking element() on empty queue:");\r
        try {\r
            emptyQueue.element();\r
        } catch (NoSuchElementException e) {\r
            System.out.println("  [CAUGHT EXPECTED EXCEPTION] element() threw NoSuchElementException!");\r
        }\r
\r
        // 3. Calling add() on a FULL Bounded Queue throws IllegalStateException:\r
        Queue<Integer> boundedQueue = new ArrayBlockingQueue<>(2); // Max capacity 2\r
        boundedQueue.add(101);\r
        boundedQueue.add(102);\r
\r
        System.out.println("\\n>>> 3. Invoking add() on full bounded queue (Capacity 2):");\r
        try {\r
            boundedQueue.add(103); // Overflow!\r
        } catch (IllegalStateException e) {\r
            System.out.println("  [CAUGHT EXPECTED EXCEPTION] add() threw IllegalStateException (Queue full)!");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 2: Exception-Throwing Queue Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EXCEPTION-THROWING METHODS:\r
   - 'remove()' → throws 'NoSuchElementException' if empty.\r
   - 'element()' → throws 'NoSuchElementException' if empty.\r
   - 'add(e)' → throws 'IllegalStateException' if bounded queue is full.\r
   - Use when failure indicates a critical defect in application logic.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What specific runtime exceptions are thrown by 'Queue.remove()', 'Queue.element()', and 'Queue.add()' when operations fail?",shortAnswer:"1. 'remove()': throws 'NoSuchElementException' if the queue is empty. 2. 'element()': throws 'NoSuchElementException' if the queue is empty. 3. 'add(e)': throws 'IllegalStateException' ('Queue full') if called on a bounded queue that has reached its maximum capacity.",explanation:"Exact exception specifications defined in java.util.Queue Javadoc.",hint:"remove/element throw NoSuchElementException when empty; add throws IllegalStateException when full.",level:"Intermediate",codeExample:"try { q.remove(); } catch (NoSuchElementException e) { /* empty */ }"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Exception Methods"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Exception-Throwing Methods: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"add()"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"remove()"})," & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"element()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace runtime exception triggers: examining ",e.jsx("code",{className:"text-rose-300 font-mono",children:"NoSuchElementException"})," on empty extraction and ",e.jsx("code",{className:"text-rose-300 font-mono",children:"IllegalStateException"})," on bounded queue capacity saturation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"QueueExceptionThrowingMethodsDemo.java",highlightLines:[7,10,16,17,24,25,35,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Exception Queue Methods FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 007_004 Topic 2: Exception-Throwing Queue Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic2_exception_queue_methods_note.txt"})}),e.jsx(r,{note:"If you call 'remove()' on an empty queue, Java throws NoSuchElementException immediately! That's why high-performance server apps prefer 'poll()', which quietly returns null without paying the heavy cost of generating stack traces! — Sukanta Hui"})]})}export{E as default};
