import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 15: Combining Independent Futures: thenCombine() Parallel Fan-In Aggregation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.CompletableFuture;\r
\r
public class ThenCombineIndependentFuturesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: thenCombine() PARALLEL FAN-IN AGGREGATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. INITIATING 2 INDEPENDENT ASYNC SERVICES IN PARALLEL:");\r
\r
        // Independent Service A: Fetches GST Ledger Balance (Takes 300 ms)\r
        CompletableFuture<Double> gstBalanceFuture = CompletableFuture.supplyAsync(() -> {\r
            System.out.println("  [Service A] Fetching GST Balance from Central Portal...");\r
            try { Thread.sleep(300); } catch (InterruptedException ignored) {}\r
            return 25000.0;\r
        });\r
\r
        // Independent Service B: Fetches Income Tax TDS Balance (Takes 250 ms)\r
        CompletableFuture<Double> tdsBalanceFuture = CompletableFuture.supplyAsync(() -> {\r
            System.out.println("  [Service B] Fetching TDS Ledger from Income Tax Portal...");\r
            try { Thread.sleep(250); } catch (InterruptedException ignored) {}\r
            return 12500.0;\r
        });\r
\r
        // 2. thenCombine(future2, BiFunction): Executes both in parallel and combines results when BOTH finish!\r
        CompletableFuture<String> consolidatedAuditFuture = gstBalanceFuture.thenCombine(\r
                tdsBalanceFuture,\r
                (gstVal, tdsVal) -> {\r
                    double totalPayable = gstVal + tdsVal;\r
                    return String.format("Audit Summary: GST (₹%,.2f) + TDS (₹%,.2f) = Total Tax Due: ₹%,.2f",\r
                            gstVal, tdsVal, totalPayable);\r
                }\r
        );\r
\r
        String finalAuditReport = consolidatedAuditFuture.join();\r
        System.out.println("\\n>>> 2. COMBINED PARALLEL RESULT:");\r
        System.out.println("  " + finalAuditReport);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 15: thenCombine Parallel Aggregation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THENCOMBINE (PARALLEL FAN-IN):\r
   - Combines 2 independent futures executing in parallel.\r
   - Accepts a BiFunction '(resA, resB) → combinedResult'.\r
   - Total latency = 'max(DurationA, DurationB)' (not sum!).\r
   - If either future throws an exception, the combined stage fails immediately.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How does 'thenCombine()' enable parallel execution and aggregation of independent asynchronous tasks?",shortAnswer:"'thenCombine(CompletionStage<U> other, BiFunction<T, U, V> fn)' accepts a second independent CompletableFuture and a 'BiFunction' combiner. The JVM executes both futures concurrently on background worker threads in parallel. When and only when BOTH futures complete successfully, the combiner BiFunction is invoked with both results, producing a new 'CompletableFuture<V>'. This cuts total elapsed time from (TimeA + TimeB) down to max(TimeA, TimeB).",explanation:"Classic fork-join parallel fan-in pattern in CompletableFuture.",hint:"Executes both futures concurrently in parallel and combines their results with a BiFunction when both finish.",level:"Intermediate",codeExample:"futureA.thenCombine(futureB, (resA, resB) → combine(resA, resB));"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"thenCombine Fan-In"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Combining Independent Futures: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"thenCombine()"})," Parallel Fan-In"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Aggregate parallel services: dispatching concurrent asynchronous requests and merging disparate payloads with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"thenCombine()"})," ",e.jsx("code",{className:"text-sky-300 font-mono",children:"BiFunction"})," combiners."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"ThenCombineIndependentFuturesDemo.java",highlightLines:[7,10,16,17,23,24,30,31,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"thenCombine FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 008_007 Topic 15: thenCombine Parallel Aggregation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic15_then_combine_note.txt"})}),e.jsx(a,{note:"If you need data from both GST and Income Tax servers, don't query them one after another! Fire them off at the exact same millisecond and use 'thenCombine()' to merge their responses together! Pure parallel speed! — Sukanta Hui"})]})}export{b as default};
