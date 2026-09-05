import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 14: Structured Concurrency (JEP 453): Eliminating Thread Leaks & Orphaned Tasks (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class StructuredConcurrencyModelCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: STRUCTURED CONCURRENCY (JEP 453) CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE PROBLEM OF UNSTRUCTURED CONCURRENCY IN LEGACY JAVA:");\r
        System.out.println("  - If Task A forks Thread 1 (fetchUser) and Thread 2 (fetchOrders):");\r
        System.out.println("    * If fetchUser throws an exception, Thread 2 KEEPS RUNNING IN THE BACKGROUND as an orphaned zombie thread, wasting CPU and database bandwidth!");\r
        System.out.println("    * Thread lifecycles are disconnected from the lexical block that spawned them.");\r
        System.out.println();\r
        System.out.println(">>> THE STRUCTURED CONCURRENCY REVOLUTION (StructuredTaskScope):");\r
        System.out.println("  - Treats concurrent subtasks as a SINGLE COHESIVE UNIT of work.");\r
        System.out.println("  - If one subtask fails, ALL SIBLING SUBTASKS ARE AUTOMATICALLY CANCELLED!");\r
        System.out.println("  - The parent block CANNOT exit until all child subtasks have finished or been cancelled.");\r
        System.out.println();\r
        System.out.println(">>> CANONICAL CODE PATTERN (Java 21+ Preview):");\r
        System.out.println("  try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {");\r
        System.out.println("      Subtask<User> userTask = scope.fork(() -> fetchUser());");\r
        System.out.println("      Subtask<Order> orderTask = scope.fork(() -> fetchOrder());");\r
        System.out.println("      scope.join();            // Join both subtasks");\r
        System.out.println("      scope.throwIfFailed();   // Propagate errors");\r
        System.out.println("      return new Dashboard(userTask.get(), orderTask.get());");\r
        System.out.println("  }");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" 🎉 SEGMENT 8: MULTITHREADING & CONCURRENCY 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 14: Structured Concurrency Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 008_009 & SEGMENT 8 GRAND SUMMARY:\r
   - Platform Threads: 1:1 OS kernel bound, 1 MB stack, ~5,000 thread limit.\r
   - Virtual Threads (Java 21): JVM-managed user-mode fibers, tiny dynamic stacks.\r
   - Million-Thread Scale: 100,000+ virtual threads on a laptop.\r
   - Carrier Threads: ForkJoinPool OS workers mounting/unmounting virtual threads.\r
   - Automatic Unmounting: Non-blocking I/O via epoll/kqueue.\r
   - Creation: 'Thread.ofVirtual()', 'startVirtualThread()', 'newVirtualThreadPerTaskExecutor()'.\r
   - Golden Rule: NEVER POOL VIRTUAL THREADS (use Semaphores to throttle).\r
   - Thread Pinning: Avoid 'synchronized' and JNI on blocking I/O; use 'ReentrantLock'.\r
   - Scoped Values (JEP 446): Immutable, leak-free context propagation.\r
   - Structured Concurrency (JEP 453): StructuredTaskScope eliminates zombie threads!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is 'Structured Concurrency' (JEP 453) in modern Java and how does it prevent thread leaks and orphaned subtasks?",shortAnswer:"'Structured Concurrency' treats multiple concurrent subtasks executing in parallel as a single, cohesive unit of work bound to a lexical code block ('try (var scope = new StructuredTaskScope...)'). If one subtask fails (e.g. throwing an exception), the scope automatically cancels all other running sibling subtasks ('ShutdownOnFailure'). Furthermore, the parent thread cannot exit the lexical block until all child threads have completed or been cancelled, completely eliminating orphaned zombie threads, resource leaks, and fragmented error handling.",explanation:"Grand architectural capstone of Module 008_009 and Segment 8.",hint:"Treats subtasks as a single cohesive unit within a lexical scope; auto-cancels sibling subtasks if one fails, eliminating zombie threads.",level:"Advanced",codeExample:"try (var scope = new StructuredTaskScope.ShutdownOnFailure()) { scope.fork(t1); scope.fork(t2); scope.join(); }"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Structured Concurrency Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Structured Concurrency"})," (JEP 453): Eliminating Thread Leaks (Capstone)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Synthesize modern parallel execution: organizing asynchronous subtasks into structured scopes with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"StructuredTaskScope"}),", auto-cancelling sibling failures, and mastering Java 21+ concurrency."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"StructuredConcurrencyModelCapstoneDemo.java",highlightLines:[7,10,14,15,19,20,24,25,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Structured Concurrency FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 008_009 Topic 14: Structured Concurrency Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic14_structured_concurrency_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 008_009 and the ENTIRE Segment 8! You have mastered the complete evolution of Java multithreading—from basic Thread lifecycles, synchronization, and deadlocks to Java 21 Virtual Threads, Project Loom, and Structured Concurrency! — Sukanta Hui"})]})}export{T as default};
