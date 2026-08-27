import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 13: Transforming Results: thenApply (map), thenAccept (consume) & thenRun (action)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.CompletableFuture;\r
\r
public class TransformingAsyncResultsPipelineDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: thenApply vs thenAccept vs thenRun - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 CALLBACK TRANSFORMERS OF CompletableFuture:");\r
        System.out.println("+----+-------------------------------+-------------------------------+-----------------------------------+");\r
        System.out.println("| #  | Method Signature              | Functional Parameter Type     | Returns (CompletableFuture Type)  |");\r
        System.out.println("+----+-------------------------------+-------------------------------+-----------------------------------+");\r
        System.out.println("| 1. | thenApply(Function<T, R>)     | T -> R (Transforms Value)     | CompletableFuture<R>              |");\r
        System.out.println("| 2. | thenAccept(Consumer<T>)       | T -> void (Consumes Value)    | CompletableFuture<Void>           |");\r
        System.out.println("| 3. | thenRun(Runnable)             | () -> void (Action only)      | CompletableFuture<Void>           |");\r
        System.out.println("+----+-------------------------------+-------------------------------+-----------------------------------+");\r
        System.out.println();\r
\r
        // Reactive pipeline demonstration:\r
        CompletableFuture.supplyAsync(() -> 50000.0) // Step 1: Base Amount ₹50,000\r
                .thenApply(base -> base * 0.18)      // Step 2: thenApply -> Calculate 18% GST (Returns 9000.0)\r
                .thenApply(gst -> "Total Tax: ₹" + gst) // Step 3: thenApply -> Format String\r
                .thenAccept(System.out::println)     // Step 4: thenAccept -> Print to Console (Consumer)\r
                .thenRun(() -> System.out.println(">>> Pipeline finished successfully!")) // Step 5: thenRun -> Final action\r
                .join();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 13: Transforming Async Results\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CALLBACK OPERATORS:\r
   - 'thenApply(Function)': Transforms input &rarr; output (map equivalent).\r
   - 'thenAccept(Consumer)': Consumes value; returns Void.\r
   - 'thenRun(Runnable)': Ignores value; runs side-effect action.\r
   - Async variants: 'thenApplyAsync()' dispatches callback to a separate thread pool.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Compare 'thenApply()', 'thenAccept()', and 'thenRun()' in CompletableFuture.",shortAnswer:"1. 'thenApply(Function<T, R>)': Accepts a computed value T, applies a transforming function, and returns a new 'CompletableFuture<R>' (analogous to 'Stream.map()'). 2. 'thenAccept(Consumer<T>)': Accepts a computed value T, consumes it with side-effects (e.g. printing or saving), and returns 'CompletableFuture<Void>' (analogous to 'Stream.forEach()'). 3. 'thenRun(Runnable)': Executes a Runnable action upon completion without receiving the previous stage's result and returns 'CompletableFuture<Void>'.",explanation:"Core functional transformation pipeline operators on CompletionStage.",hint:"thenApply maps T &rarr; R; thenAccept consumes T &rarr; void; thenRun executes () &rarr; void upon completion.",level:"Intermediate",codeExample:"future.thenApply(val -> val * 2).thenAccept(res -> print(res)).thenRun(() -> done());"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Pipeline Transformations"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Transforming Results: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"thenApply"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"thenAccept"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"thenRun"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct reactive processing pipelines: mapping intermediate values with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"thenApply"}),", consuming payloads via ",e.jsx("code",{className:"text-sky-300 font-mono",children:"thenAccept"}),", and triggering completion actions with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"thenRun"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"TransformingAsyncResultsPipelineDemo.java",highlightLines:[7,10,13,14,15,20,21,22,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Pipeline Transformations FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 008_007 Topic 13: Transforming Async Results",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic13_transforming_async_results_note.txt"})}),e.jsx(o,{note:"Think of it as a factory conveyor belt: 'thenApply' modifies the product, 'thenAccept' packs it into a shipping box, and 'thenRun' turns off the factory lights when done! — Sukanta Hui"})]})}export{y as default};
