import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const l=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 16: Multi-Future Coordination: CompletableFuture.allOf() vs anyOf() (Scatter-Gather)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.Arrays;\r
import java.util.List;\r
import java.util.concurrent.CompletableFuture;\r
import java.util.stream.Collectors;\r
\r
public class CompletableFutureAllOfAnyOfDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: CompletableFuture.allOf() & anyOf() SCATTER-GATHER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. SCATTER: Launching 3 parallel audit verification workers:\r
        CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> {\r
            try { Thread.sleep(150); } catch (InterruptedException ignored) {}\r
            return "Barrackpore Hub: OK";\r
        });\r
\r
        CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> {\r
            try { Thread.sleep(250); } catch (InterruptedException ignored) {}\r
            return "Naihati Branch: OK";\r
        });\r
\r
        CompletableFuture<String> f3 = CompletableFuture.supplyAsync(() -> {\r
            try { Thread.sleep(100); } catch (InterruptedException ignored) {}\r
            return "Shyamnagar Center: OK";\r
        });\r
\r
        // 2. allOf(): Returns a CompletableFuture<Void> that completes when ALL futures complete:\r
        System.out.println(">>> 1. Executing allOf() Scatter-Gather barrier...");\r
        CompletableFuture<Void> allBarrier = CompletableFuture.allOf(f1, f2, f3);\r
\r
        // Extract results cleanly after allOf completes:\r
        List<String> results = allBarrier.thenApply(v ->\r
                Arrays.asList(f1.join(), f2.join(), f3.join())\r
        ).join();\r
\r
        System.out.println("  All Branches Verified: " + results);\r
\r
        // 3. anyOf(): Completes as soon as the FIRST (fastest) future completes:\r
        System.out.println("\\n>>> 2. Executing anyOf() (Fastest responder wins)...");\r
        CompletableFuture<Object> fastestBranch = CompletableFuture.anyOf(f1, f2, f3);\r
        System.out.println("  Fastest Responder Result: " + fastestBranch.join());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 16: allOf & anyOf Coordination\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ALLOF vs ANYOF:\r
   - 'CompletableFuture.allOf(f1, f2, f3)':\r
     * Scatter-Gather pattern.\r
     * Completes when ALL futures finish.\r
     * Returns 'CompletableFuture<Void>'.\r
   - 'CompletableFuture.anyOf(f1, f2, f3)':\r
     * First-responder / Fastest service pattern.\r
     * Completes when the FIRST future finishes.\r
     * Returns 'CompletableFuture<Object>'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do 'CompletableFuture.allOf()' and 'CompletableFuture.anyOf()' coordinate multiple concurrent futures?",shortAnswer:"1. 'CompletableFuture.allOf(Future... futures)': Creates a composite 'CompletableFuture<Void>' that completes when ALL supplied futures complete (or completes exceptionally if any fails). It implements the 'Scatter-Gather' pattern. 2. 'CompletableFuture.anyOf(Future... futures)': Creates a composite 'CompletableFuture<Object>' that completes as soon as ANY ONE (the fastest) of the supplied futures completes, returning that earliest result. It implements the 'First-Responder / Fastest Service' pattern.",explanation:"Multi-stage asynchronous coordination primitives.",hint:"allOf waits for all futures to complete (scatter-gather); anyOf returns the result of the fastest future.",level:"Intermediate",codeExample:'CompletableFuture.allOf(f1, f2, f3).thenRun(() -> System.out.println("All finished!"));'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"allOf & anyOf"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Waiting for Multiple Futures: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"allOf()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"anyOf()"})," Scatter-Gather"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Coordinate multi-stage async batches: implementing Scatter-Gather barriers with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"CompletableFuture.allOf()"})," and racing parallel replicas with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"anyOf()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:l,title:"CompletableFutureAllOfAnyOfDemo.java",highlightLines:[7,10,16,17,21,22,26,27,32,33,42,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"allOf & anyOf FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 008_007 Topic 16: allOf & anyOf Coordination",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic16_allof_anyof_note.txt"})}),e.jsx(n,{note:"If you need to wait for 10 microservices to finish before rendering a dashboard, use 'allOf()'! If you send a request to 3 mirror servers and only care about the fastest one that replies first, use 'anyOf()' — Sukanta Hui"})]})}export{x as default};
