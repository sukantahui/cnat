import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 17: Asynchronous Exception Resilience: exceptionally(), handle() & whenComplete() (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.CompletableFuture;\r
\r
public class AsyncExceptionResiliencePipelineCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 17: ASYNC EXCEPTION HANDLING & RESILIENCE (CAPSTONE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. ASYNC STAGE WITH AN INTENTIONAL NETWORK ERROR:\r
        CompletableFuture<String> failingApiFuture = CompletableFuture.supplyAsync(() -> {\r
            System.out.println("  [Step 1] Contacting Primary Gateway...");\r
            if (true) throw new RuntimeException("503 Gateway Unavailable: Barrackpore Central Server");\r
            return "Primary Payload";\r
        });\r
\r
        // 2. exceptionally(fn): Catches exceptions and returns a safe fallback default:\r
        CompletableFuture<String> resilientFallback = failingApiFuture.exceptionally(ex -> {\r
            System.err.println("  [exceptionally Handler] Caught error: " + ex.getMessage());\r
            return "FALLBACK-BACKUP-PAYLOAD-₹0.00"; // Safe graceful fallback!\r
        });\r
\r
        System.out.println(">>> 1. Result after exceptionally() fallback: " + resilientFallback.join());\r
\r
        // 3. handle(BiFunction<Result, Throwable, R>): Inspects BOTH success and error in ONE step:\r
        CompletableFuture<String> universalHandler = CompletableFuture.supplyAsync(() -> 100 / 2)\r
                .handle((result, error) -> {\r
                    if (error != null) {\r
                        return "Calculation Failed: " + error.getMessage();\r
                    } else {\r
                        return "Calculation Succeeded: Result = ₹" + result;\r
                    }\r
                });\r
\r
        System.out.println(">>> 2. Result from universal handle(): " + universalHandler.join());\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" 🎉 MODULE 008_007 EXECUTORS & COMPLETABLEFUTURE 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 17: Async Exception Resilience Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 008_007 GRAND SUMMARY:\r
   - 'new Thread()' anti-pattern: Stack memory allocation, 0 reuse, OOM crashes.\r
   - Executor Framework: Decouples Task (Runnable/Callable) from Execution (Pool).\r
   - Executors traps: Unbounded queues & thread explosions (OOM).\r
   - Custom ThreadPoolExecutor: 7 parameters + CallerRunsPolicy backpressure.\r
   - Graceful 2-Phase Shutdown: shutdown() &rarr; await() &rarr; shutdownNow().\r
   - Future<T>: Bounded 'get(timeout)' to enforce SLAs.\r
   - CompletableFuture: Non-blocking reactive async pipelines.\r
   - Operators: supplyAsync, runAsync, thenApply, thenAccept, thenRun.\r
   - Composition: thenCompose (flatMap) & thenCombine (parallel zip).\r
   - Multi-Future: allOf() (Scatter-Gather) & anyOf() (Fastest responder).\r
   - Resilience: exceptionally() fallbacks & handle() bi-directional recovery.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Compare 'exceptionally()', 'handle()', and 'whenComplete()' for asynchronous exception handling in CompletableFuture.",shortAnswer:"1. 'exceptionally(Function<Throwable, T> fallback)': Triggered ONLY if an exception occurs in the upstream pipeline, allowing you to return a fallback value or recover gracefully. 2. 'handle(BiFunction<T, Throwable, R> fn)': ALWAYS invoked regardless of success or failure. Receives both the result (if successful) and the throwable (if failed), allowing transformation or recovery into a new type R. 3. 'whenComplete(BiConsumer<T, Throwable> action)': ALWAYS invoked for side-effects (e.g. logging or cleaning resources) without modifying the result or exception passed downstream.",explanation:"Grand architectural capstone of Module 008_007.",hint:"exceptionally provides fallback on error; handle transforms/recovers from both result and error; whenComplete executes side-effects without altering values.",level:"Advanced",codeExample:"future.exceptionally(ex -> fallbackValue).handle((res, err) -> format(res, err));"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Async Resilience Capstone"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Asynchronous Exception Resilience: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"exceptionally()"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"handle()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"whenComplete()"})," (Capstone)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Synthesize resilient reactive systems: intercepting asynchronous pipeline exceptions, providing fallback recovery payloads with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"exceptionally()"}),", and managing bi-directional execution flows with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"handle()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"AsyncExceptionResiliencePipelineCapstoneDemo.java",highlightLines:[7,10,14,15,21,22,23,29,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Async Exception Resilience FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:l,title:"Module 008_007 Topic 17: Async Resilience Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic17_async_resilience_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 008_007! You have mastered enterprise thread pool engineering, custom ThreadPoolExecutor tuning, 2-phase shutdowns, Future SLA timeouts, CompletableFuture async chains, and resilient error recovery pipelines! — Sukanta Hui"})]})}export{y as default};
