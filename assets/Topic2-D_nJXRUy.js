import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 2: Reactive Programming (WebFlux/RxJava) vs Virtual Threads: Complexity vs Simplicity\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
public class ReactiveVsVirtualThreadsComparisonDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: REACTIVE PROGRAMMING vs VIRTUAL THREADS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Architectural Axis| Reactive Frameworks (WebFlux)     | Virtual Threads (Java 21+ Loom)   |");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Programming Model | Asynchronous Non-Blocking Mono/Flux| Straightforward Synchronous Code  |");\r
        System.out.println("| Code Readability  | Complex nested lambda pipelines   | Simple, clean, sequential code    |");\r
        System.out.println("| Debugging & Stacks| Broken, fragmented stack traces   | Clean, standard JVM stack traces  |");\r
        System.out.println("| ThreadLocal & IDE | Incompatible / Context Propagation| 100% Compatible with ThreadLocal  |");\r
        System.out.println("| Learning Curve    | Extremely steep (Mono, Flux, Zip) | ZERO learning curve (Plain Java!) |");\r
        System.out.println("| Throughput        | Very High                         | Equally High (Millions of threads)|");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println();\r
        System.out.println(">>> THE VERDICT (Ron Pressler, Project Loom Lead):");\r
        System.out.println("  - 'Virtual Threads bring reactive throughput without abandoning the simple synchronous Java programming model!'");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 2: Reactive vs Virtual Threads\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. REACTIVE vs VIRTUAL THREADS:\r
   - Reactive (WebFlux): High throughput, but complex async pipelines & broken stack traces.\r
   - Virtual Threads (Java 21): High throughput WITH simple synchronous Java code!\r
   - Write sequential code: 'User user = fetchUser();'\r
   - Full compatibility with existing JDBC, JPA, and debugging tools.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why do Virtual Threads render Reactive Programming frameworks (like Spring WebFlux and RxJava) largely redundant for high-throughput I/O services?",shortAnswer:"Reactive programming was developed solely to bypass OS thread limits by chopping code into asynchronous non-blocking event loops (Mono/Flux), which came at the immense cost of unreadable code, fragmented stack traces, impossible debugging, and incompatibility with standard Java libraries. Virtual Threads deliver the exact same non-blocking hardware throughput while allowing developers to write simple, sequential, readable, and debuggable synchronous Java code with standard 'try-catch' blocks and IDE debuggers.",explanation:"Industry paradigm shift comparison between reactive streams and Virtual Threads.",hint:"Virtual Threads provide the high throughput of reactive frameworks with the simplicity of standard synchronous Java code.",level:"Intermediate",codeExample:"// Virtual Thread: User user = fetchUser(); // Simple synchronous code with reactive scale!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reactive vs Virtual Threads"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-purple-400 font-mono",children:"Reactive (WebFlux)"})," vs ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Virtual Threads"}),": Simplicity Restored"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Evaluate concurrency paradigms: contrasting complex reactive lambda pipelines with simple, readable synchronous code powered by Java 21 lightweight virtual threads."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ReactiveVsVirtualThreadsComparisonDemo.java",highlightLines:[7,10,13,14,15,16,17,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Reactive vs Virtual Threads FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 008_009 Topic 2: Reactive vs Virtual Threads",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic2_reactive_vs_virtual_threads_note.txt"})}),e.jsx(n,{note:"Reactive programming forced developers to write unreadable lambda spaghetti just to make servers fast. Virtual Threads give you the exact same blazing speed while letting you write simple, beautiful, normal Java code! Simplicity wins! — Sukanta Hui"})]})}export{x as default};
