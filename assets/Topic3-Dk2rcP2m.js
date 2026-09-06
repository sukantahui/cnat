import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 008_002: Thread Control & Daemon Threads\r
 * Topic 3: Bounded Thread Waiting: Overloaded thread.join(millis) to Prevent Hanging\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class BoundedJoinTimeoutDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: BOUNDED thread.join(millis) TIMEOUTS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Simulating a slow network database query (takes 5 seconds):\r
        Thread slowDatabaseQuery = new Thread(() -> {\r
            try {\r
                System.out.println("  [DB Query Thread] Querying remote server (takes 5000 ms)...");\r
                Thread.sleep(5000);\r
                System.out.println("  [DB Query Thread] Finished remote query!");\r
            } catch (InterruptedException e) {\r
                System.out.println("  [DB Query Thread] Interrupted!");\r
            }\r
        }, "Slow-DB-Worker");\r
\r
        slowDatabaseQuery.start();\r
\r
        System.out.println(">>> 1. Main thread waiting with a MAXIMUM SLA TIMEOUT OF 1000 ms:");\r
        // Calling join(1000) transitions main thread to TIMED_WAITING for at most 1 second:\r
        slowDatabaseQuery.join(1000); // Waits up to 1000 ms!\r
\r
        if (slowDatabaseQuery.isAlive()) {\r
            System.out.println("\\n>>> 2. SLA TIMEOUT EXCEEDED! DB Query took > 1000 ms!");\r
            System.out.println("  Main thread resumes immediately and cancels the slow query via interrupt()...");\r
            slowDatabaseQuery.interrupt(); // Cancel slow worker\r
        } else {\r
            System.out.println("\\n>>> 2. DB Query completed within 1000 ms SLA!");\r
        }\r
\r
        slowDatabaseQuery.join(); // Clean join\r
\r
        System.out.println("\\n>>> WHY UNBOUNDED join() IS DANGEROUS IN ENTERPRISE PRODUCTION:");\r
        System.out.println("  - If an external microservice or database hangs indefinitely, an unbounded 'thread.join()' will block the calling thread forever!");\r
        System.out.println("  - Always use bounded 'thread.join(millis)' to enforce Service Level Agreements (SLAs) and fail fast.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_002: Thread Control & Daemon Threads\r
Topic 3: Bounded join(millis) Timeouts\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BOUNDED JOIN TIMEOUTS:\r
   - 't.join(millis)' puts calling thread in 'TIMED_WAITING'.\r
   - Returns when target thread terminates OR timeout expires (whichever comes first).\r
   - Check 't.isAlive()' after timeout to see if thread finished.\r
   - Prevents cascading production deadlocks and infinite thread hangs.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why should enterprise applications prefer overloaded 'thread.join(millis)' over unbounded 'thread.join()'?",shortAnswer:"Unbounded 'thread.join()' causes the calling thread to wait indefinitely in the 'WAITING' state until the target thread terminates. If the target thread hangs (due to network socket deadlocks, database connection timeouts, or infinite loops), the calling thread hangs forever, leaking resources and freezing upstream systems. Overloaded 'thread.join(millis)' transitions the caller to 'TIMED_WAITING', enforcing an SLA timeout so the caller can take fallback or recovery actions.",explanation:"Enterprise resilience and fail-fast architectural pattern.",hint:"Bounded join(millis) prevents indefinite thread hangs if the target thread freezes or encounters network issues.",level:"Intermediate",codeExample:"thread.join(2000); // Waits at most 2 seconds before timing out"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_002 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Bounded join(millis)"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Overloaded ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"join(millis)"}),": Bounded Timeouts to Prevent Hanging"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Enforce resilience SLAs: utilizing bounded ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"thread.join(millis)"})," to prevent infinite thread locks and enable fail-fast timeouts on slow background queries."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"BoundedJoinTimeoutDemo.java",highlightLines:[7,10,24,25,27,28,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Bounded join() FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 008_002 Topic 3: Bounded join(millis) Timeouts",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_002_topic3_bounded_join_timeout_note.txt"})}),e.jsx(a,{note:"Never wait forever for a network thread! If a remote server hangs, plain 'join()' will freeze your entire app! Always pass a timeout like 'worker.join(2000)' so your app stays fast and responsive! — Sukanta Hui"})]})}export{f as default};
