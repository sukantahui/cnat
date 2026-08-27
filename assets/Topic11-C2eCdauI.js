import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 11: CompletableFuture Overview: Non-Blocking Reactive Asynchronous Pipelines\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.CompletableFuture;\r
\r
public class CompletableFutureReactiveOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: CompletableFuture OVERVIEW (NON-BLOCKING) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE LIMITATION OF LEGACY Future<T>:");\r
        System.out.println("  1. Blocking .get()          : Calling 'future.get()' forces the calling thread to SLEEP until the result is ready.");\r
        System.out.println("  2. No Callback Chaining     : You cannot attach a callback like: 'When this finishes, automatically run step 2'.");\r
        System.out.println("  3. No Composition           : You cannot easily combine 2 independent futures without blocking.");\r
        System.out.println();\r
        System.out.println(">>> THE REVOLUTION OF CompletableFuture (Java 8+ / JSR-166):");\r
        System.out.println("  - Implements 'Future<T>' AND 'CompletionStage<T>'.");\r
        System.out.println("  - 100% NON-BLOCKING: Attach functional callbacks ('thenApply', 'thenAccept') that trigger reactively upon completion!");\r
        System.out.println("  - Declarative Pipelines: 'supplyAsync(queryDb).thenApply(calculateGst).thenAccept(sendEmail);'");\r
\r
        // Quick demonstration:\r
        CompletableFuture.supplyAsync(() -> "GST-REPORT-2026")\r
                .thenApply(report -> report + " [VERIFIED BY SUKANTA HUI]")\r
                .thenAccept(finalReport -> System.out.println(">>> [Async Pipeline Result] " + finalReport))\r
                .join(); // Blocks only main demo thread to observe console output\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 11: CompletableFuture Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPLETABLEFUTURE OVERVIEW:\r
   - Implements 'Future<T>' + 'CompletionStage<T>' (Java 8+).\r
   - 100% Non-Blocking: Zero thread waiting with reactive callbacks.\r
   - Declarative async chaining: 'supplyAsync() &rarr; thenApply() &rarr; thenAccept()'.\r
   - By default executes on 'ForkJoinPool.commonPool()'.\r
   - Can accept custom 'ExecutorService' thread pools.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why was 'CompletableFuture' introduced in Java 8 and how does it solve the limitations of legacy 'Future<T>'?",shortAnswer:"Legacy 'Future<T>' provided only blocking methods ('future.get()'), had no mechanism to attach non-blocking completion callbacks, could not be manually completed, and lacked functional composition operators. 'CompletableFuture' (implementing 'CompletionStage<T>') introduced declarative, non-blocking reactive pipelines: developers can chain dependent stages ('thenApply', 'thenCompose'), combine multiple independent futures ('thenCombine', 'allOf'), and handle asynchronous exceptions ('exceptionally') without blocking calling threads.",explanation:"Evolution of asynchronous programming from Java 5 to Java 8.",hint:"Replaces blocking get() calls with non-blocking callback chains (thenApply, thenAccept) and functional composition.",level:"Beginner",codeExample:"CompletableFuture.supplyAsync(() -> fetch()).thenApply(x -> process(x)).thenAccept(res -> print(res));"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"CompletableFuture Overview"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Asynchronous Non-Blocking Pipelines: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"CompletableFuture"})," in Java 8+"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Evolve beyond blocking calls: understanding how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"CompletableFuture"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"CompletionStage"})," replace blocking ",e.jsx("code",{className:"text-rose-300 font-mono",children:"future.get()"})," with non-blocking functional chains."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"CompletableFutureReactiveOverviewDemo.java",highlightLines:[7,10,13,14,19,20,25,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"CompletableFuture Overview FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:l,title:"Module 008_007 Topic 11: CompletableFuture Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic11_completablefuture_overview_note.txt"})}),e.jsx(a,{note:"CompletableFuture is JavaScript Promises on steroids for Java! Instead of freezing your thread waiting for a database query with future.get(), you just say: 'When data arrives, thenApply(format) and thenAccept(display)!' Zero blocking, 100% reactive! — Sukanta Hui"})]})}export{y as default};
