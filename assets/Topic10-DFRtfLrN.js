import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 10: Managing Future<T>: Blocking get(), get(timeout), isDone() & cancel()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.Callable;\r
import java.util.concurrent.ExecutionException;\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
import java.util.concurrent.Future;\r
import java.util.concurrent.TimeUnit;\r
import java.util.concurrent.TimeoutException;\r
\r
public class ManagingFutureLifecycleDemo {\r
\r
    public static void main(String[] args) throws InterruptedException, ExecutionException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: MANAGING Future<T> ASYNCHRONOUS HANDLES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ExecutorService executor = Executors.newFixedThreadPool(2);\r
\r
        Callable<Double> taxCalculator = () -> {\r
            Thread.sleep(400); // Simulate calculation\r
            return 45000.0 * 0.18; // 18% GST\r
        };\r
\r
        System.out.println(">>> 1. Submitting Callable task to get a Future<Double> handle:");\r
        Future<Double> futureResult = executor.submit(taxCalculator);\r
\r
        System.out.println("  Initial check: futureResult.isDone()? " + futureResult.isDone());\r
\r
        // 2. Bounded get(timeout) to prevent indefinite hanging:\r
        try {\r
            Double gstAmount = futureResult.get(1, TimeUnit.SECONDS); // Waits up to 1 second\r
            System.out.printf("\\n>>> 2. Future get(timeout) SUCCESS: ₹%,.2f%n", gstAmount);\r
        } catch (TimeoutException te) {\r
            System.err.println("  SLA Timed out! Cancelling task...");\r
            futureResult.cancel(true); // Cancels task with interrupt\r
        }\r
\r
        System.out.println("  After completion check: futureResult.isDone()? " + futureResult.isDone());\r
\r
        executor.shutdown();\r
\r
        System.out.println("\\n>>> THE 5 CORE METHODS OF java.util.concurrent.Future<V>:");\r
        System.out.println("  - V get()                    : Blocks indefinitely until task completes (returns result or throws ExecutionException).");\r
        System.out.println("  - V get(timeout, unit)       : Blocks up to timeout; throws TimeoutException if SLA exceeded.");\r
        System.out.println("  - boolean isDone()           : Returns true if task finished normally, threw exception, or was cancelled.");\r
        System.out.println("  - boolean cancel(mayInterrupt): Attempts cancellation; sends interrupt if mayInterrupt=true.");\r
        System.out.println("  - boolean isCancelled()      : Returns true if task was cancelled before normal completion.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 10: Managing Future<T> Handles\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FUTURE<V> INTERFACE:\r
   - Asynchronous handle representing the pending result of a task.\r
   - 'get()': Blocks indefinitely (throws ExecutionException if task failed).\r
   - 'get(timeout, unit)': Enforces SLA timeout (throws TimeoutException).\r
   - 'cancel(true)': Cancels task and sends thread interrupt.\r
   - 'isDone()': Checks if finished, failed, or cancelled.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are the 5 core methods of 'java.util.concurrent.Future<V>' and what exceptions can 'future.get()' throw?",shortAnswer:"1. 'Core Methods': 'get()' (unbounded block), 'get(timeout, unit)' (bounded block), 'isDone()' (completion status), 'cancel(boolean mayInterruptIfRunning)' (cancellation request), and 'isCancelled()'. 2. 'Exceptions thrown by get()': (A) 'InterruptedException' (calling thread interrupted while waiting), (B) 'ExecutionException' (wraps any checked/unchecked exception thrown inside the task's 'call()' method), (C) 'CancellationException' (task was cancelled), and (D) 'TimeoutException' (bounded timeout expired).",explanation:"Complete specification of Future<V> interface.",hint:"get(), get(timeout), isDone(), cancel(), isCancelled(); throws InterruptedException, ExecutionException, TimeoutException.",level:"Intermediate",codeExample:"Double result = future.get(500, TimeUnit.MILLISECONDS);"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Future<T> Management"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Managing ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Future<T>"}),": Bounded ",e.jsx("code",{className:"text-sky-400 font-mono",children:"get()"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"isDone()"})," & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"cancel()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Harvest concurrent results: managing asynchronous ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Future<T>"})," handles, unwrapping ",e.jsx("code",{className:"text-sky-300 font-mono",children:"ExecutionException"})," payloads, and enforcing bounded SLA timeouts."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ManagingFutureLifecycleDemo.java",highlightLines:[7,10,19,20,26,27,30,31,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Future<T> FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_007 Topic 10: Future<T> Management",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic10_managing_future_lifecycle_note.txt"})}),e.jsx(o,{note:"Think of a Future as a claim ticket at a dry cleaner: You hand over your clothes, get a ticket (Future), go shopping, and come back later with 'ticket.get()' to pick up your clean clothes! Always use 'get(timeout)' so you don't stand at the counter forever! — Sukanta Hui"})]})}export{g as default};
