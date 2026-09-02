import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 008_002: Thread Control & Daemon Threads\r
 * Topic 1: Handling InterruptedException: Restoring Status via Thread.currentThread().interrupt()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class RestoringInterruptStatusDemo {\r
\r
    // Helper method that catches InterruptedException:\r
    public static void performBackgroundAudit() {\r
        try {\r
            System.out.println("  [Audit Worker] Performing long file I/O audit (sleeping)...");\r
            Thread.sleep(5000);\r
        } catch (InterruptedException e) {\r
            System.out.println("  [Audit Worker] Caught InterruptedException! (JVM cleared the interrupt flag to false!)");\r
\r
            // CRITICAL BEST PRACTICE: RESTORE INTERRUPT STATUS!\r
            // When InterruptedException is thrown, the JVM automatically CLEARS the interrupt flag.\r
            // If you swallow the exception without re-interrupting, callers higher up the stack will never know an interrupt occurred!\r
            Thread.currentThread().interrupt(); // Restores interrupted status to true!\r
            System.out.println("  [Audit Worker] Restored interrupt status: " + Thread.currentThread().isInterrupted());\r
        }\r
    }\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: RESTORING INTERRUPT STATUS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread worker = new Thread(() -> {\r
            performBackgroundAudit();\r
\r
            // Checking interrupt status higher up the stack:\r
            if (Thread.currentThread().isInterrupted()) {\r
                System.out.println("\\n>>> Upper Layer Handler: Detected thread is interrupted! Initiating clean shutdown...");\r
            }\r
        }, "Audit-Worker");\r
\r
        worker.start();\r
        Thread.sleep(500); // Let worker start sleeping\r
\r
        // Interrupt worker thread while sleeping:\r
        System.out.println(">>> Main Thread sending interrupt signal to worker...");\r
        worker.interrupt();\r
\r
        worker.join();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_002: Thread Control & Daemon Threads\r
Topic 1: Restoring Interrupt Status\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RESTORING INTERRUPT STATUS:\r
   - JVM clears interrupt flag when throwing 'InterruptedException'.\r
   - NEVER swallow 'InterruptedException' with an empty catch block!\r
   - Option A: Rethrow 'InterruptedException' to caller.\r
   - Option B: Restore status via 'Thread.currentThread().interrupt()'.\r
   - Allows framework and upstream loops to gracefully terminate.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why MUST you call 'Thread.currentThread().interrupt()' when catching 'InterruptedException' if you cannot rethrow it?",shortAnswer:"When a blocking method (like 'Thread.sleep()' or 'wait()') detects an interrupt and throws 'InterruptedException', the JVM automatically CLEARS the thread's interrupt status flag (resetting it to 'false'). If code catches the exception and does not rethrow it, the interrupt signal is silently lost ('swallowed'). Calling 'Thread.currentThread().interrupt()' restores the interrupt flag to 'true', allowing higher-level callers and frameworks (like Spring or ExecutorService) to detect the cancellation request.",explanation:"Java Concurrency in Practice (Brian Goetz) Item 5.4: Preserving Interrupt Status.",hint:"The JVM clears the interrupt flag when throwing InterruptedException; calling interrupt() restores it for upstream callers.",level:"Intermediate",codeExample:"catch (InterruptedException e) { Thread.currentThread().interrupt(); // Restore flag! }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_002 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Restoring Interrupt"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Handling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"InterruptedException"}),": Restoring Status via ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Thread.currentThread().interrupt()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Prevent swallowed cancellation signals: understanding why the JVM clears the interrupt flag on ",e.jsx("code",{className:"text-rose-300 font-mono",children:"InterruptedException"})," and mastering interrupt status restoration idioms."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"RestoringInterruptStatusDemo.java",highlightLines:[7,10,13,14,19,20,30,31,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Restoring Interrupt Status FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 008_002 Topic 1: Restoring Interrupt Status",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_002_topic1_restoring_interrupt_status_note.txt"})}),e.jsx(a,{note:"Never write an empty 'catch (InterruptedException e) {}' block! When Java throws that exception, it resets the interrupt flag back to false. If you don't call 'Thread.currentThread().interrupt()', other parts of your app won't know the thread was cancelled! — Sukanta Hui"})]})}export{g as default};
