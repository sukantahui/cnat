import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const a=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 14: Composing Dependent Futures: thenCompose() (The Async flatMap Operator)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.CompletableFuture;\r
\r
public class ThenComposeFlatMapDependentFuturesDemo {\r
\r
    // Async Step 1: Fetch student ID by name:\r
    public static CompletableFuture<Integer> fetchStudentId(String studentName) {\r
        return CompletableFuture.supplyAsync(() -> {\r
            System.out.printf("  [Step 1] Looked up studentId for '%s' -> 101%n", studentName);\r
            return 101;\r
        });\r
    }\r
\r
    // Async Step 2: Fetch account balance by student ID (Depends on Step 1 output!):\r
    public static CompletableFuture<Double> fetchStudentBalance(int studentId) {\r
        return CompletableFuture.supplyAsync(() -> {\r
            System.out.printf("  [Step 2] Looked up tuition balance for Acct #%d -> ₹45,000%n", studentId);\r
            return 45000.0;\r
        });\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: thenCompose() (ASYNC FLATMAP) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHY thenCompose() IS ESSENTIAL FOR DEPENDENT ASYNC CALLS:");\r
        System.out.println("  - If you use 'thenApply(id -> fetchStudentBalance(id))', it returns a NESTED FUTURE:");\r
        System.out.println("    'CompletableFuture<CompletableFuture<Double>>' (Ugly double future nesting!)");\r
        System.out.println("  - 'thenCompose()' FLATTENS the nested future into a clean 'CompletableFuture<Double>' (flatMap)!");\r
\r
        // Dependent Composition via thenCompose:\r
        CompletableFuture<Double> resultFuture = fetchStudentId("Swadeep Paul")\r
                .thenCompose(id -> fetchStudentBalance(id)); // FLATTENED!\r
\r
        Double balance = resultFuture.join();\r
        System.out.printf("\\n>>> Final Retrieved Account Balance: ₹%,.2f%n", balance);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 14: thenCompose FlatMap Composition\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THENCOMPOSE (ASYNC FLATMAP):\r
   - Used when Stage 2 returns another CompletableFuture.\r
   - 'thenApply()' yields: 'CompletableFuture<CompletableFuture<T>>' (Nested).\r
   - 'thenCompose()' yields: 'CompletableFuture<T>' (Flattened).\r
   - Perfect for dependent asynchronous sequential workflows (e.g. Auth &rarr; Fetch Profile).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is 'thenCompose()' in CompletableFuture and how does it prevent nested 'CompletableFuture<CompletableFuture<T>>' types?",shortAnswer:"'thenCompose()' is the asynchronous equivalent of 'flatMap' (Monadic Bind). When an asynchronous operation returns another 'CompletableFuture<T>', using 'thenApply()' would result in an awkward, two-level nested structure ('CompletableFuture<CompletableFuture<T>>'). 'thenCompose()' takes a function that returns a new CompletableFuture, executes it sequentially when the first stage completes, and automatically unwraps/flattens the result into a single direct 'CompletableFuture<T>'.",explanation:"Monadic asynchronous composition in CompletionStage.",hint:"thenCompose is the async flatMap that flattens nested CompletableFuture<CompletableFuture<T>> into CompletableFuture<T>.",level:"Intermediate",codeExample:"CompletableFuture<User> future = fetchUserId().thenCompose(id -> fetchUserProfile(id));"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"thenCompose (flatMap)"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Composing Dependent Futures: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"thenCompose()"})," (Async flatMap)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master monadic chaining: eliminating nested ",e.jsx("code",{className:"text-amber-300 font-mono",children:"CompletableFuture<CompletableFuture<T>>"})," types by flattening dependent asynchronous stages with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"thenCompose()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ThenComposeFlatMapDependentFuturesDemo.java",highlightLines:[7,10,11,19,20,31,32,35,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"thenCompose FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 008_007 Topic 14: thenCompose FlatMap Composition",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic14_then_compose_note.txt"})}),e.jsx(r,{note:"Whenever you have two async calls where the second call needs the answer from the first call, use 'thenCompose()'! It flattens the result so you don't get stuck with a double Future! — Sukanta Hui"})]})}export{b as default};
