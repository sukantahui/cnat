import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 008_002: Thread Control & Daemon Threads\r
 * Topic 7: Writing Interrupt-Responsive Loops: while (!Thread.currentThread().isInterrupted())\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class InterruptResponsiveLoopsDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: WRITING INTERRUPT-RESPONSIVE LOOPS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread taxEngine = new Thread(() -> {\r
            long invoiceCount = 0;\r
            System.out.println(">>> 1. Tax Engine loop started (Processing infinite invoices)...");\r
\r
            // CANONICAL INTERRUPT-RESPONSIVE LOOP PATTERN:\r
            while (!Thread.currentThread().isInterrupted()) {\r
                invoiceCount++;\r
                // Simulating CPU work\r
                if (invoiceCount % 100_000_000 == 0) {\r
                    System.out.printf("  [Tax Engine] Processed %,d invoices...%n", invoiceCount);\r
                }\r
\r
                // Handling potential blocking operations cleanly inside the loop:\r
                try {\r
                    if (invoiceCount % 200_000_000 == 0) {\r
                        Thread.sleep(10); // Small pause\r
                    }\r
                } catch (InterruptedException e) {\r
                    System.out.println("  [Tax Engine] Caught InterruptedException during pause! Cleaning up buffer...");\r
                    Thread.currentThread().interrupt(); // Restore flag so while-condition exits immediately!\r
                }\r
            }\r
\r
            // CLEANUP PHASE AFTER LOOP EXITS:\r
            System.out.printf("\\n>>> 2. [Tax Engine] Gracefully shut down after %,d invoices! Closed DB sockets.%n", invoiceCount);\r
        }, "Tax-Engine-Worker");\r
\r
        taxEngine.start();\r
        Thread.sleep(200); // Let taxEngine process invoices\r
\r
        System.out.println("\\n>>> Main Thread issuing polite shutdown request via taxEngine.interrupt()...");\r
        taxEngine.interrupt();\r
\r
        taxEngine.join();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_002: Thread Control & Daemon Threads\r
Topic 7: Interrupt-Responsive Loops\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTERRUPT-RESPONSIVE LOOPS:\r
   - Loop condition: 'while (!Thread.currentThread().isInterrupted())'.\r
   - Catch 'InterruptedException' → call 'Thread.currentThread().interrupt()'.\r
   - Loop terminates cleanly and executes 'finally' / cleanup logic.\r
   - Allows safe release of files, sockets, and DB connections.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the canonical coding pattern for writing a background loop that responds gracefully to cancellation requests?",shortAnswer:"The canonical pattern uses 'while (!Thread.currentThread().isInterrupted()) { ... }'. Inside the loop, any blocking methods (like 'Thread.sleep()') that catch 'InterruptedException' must call 'Thread.currentThread().interrupt()' in the catch block to re-assert the interrupt status. When interrupted, the while loop's condition evaluates to 'false', allowing the thread to exit the loop and execute final resource cleanup code gracefully.",explanation:"Standard design pattern from Effective Java and Java Concurrency in Practice.",hint:"Check !isInterrupted() in while loop header and restore interrupt status if catching InterruptedException.",level:"Intermediate",codeExample:"while (!Thread.currentThread().isInterrupted()) { doWork(); }"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_002 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Responsive Loops"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Writing Interrupt-Responsive Loops: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"while (!Thread.currentThread().isInterrupted())"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct production-grade worker loops: implementing the canonical ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"!isInterrupted()"})," loop header, handling blocking pauses, and executing clean resource shutdowns."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"InterruptResponsiveLoopsDemo.java",highlightLines:[7,10,18,19,29,30,36,37,43,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Responsive Loops FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 008_002 Topic 7: Interrupt-Responsive Loops",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_002_topic7_interrupt_responsive_loops_note.txt"})}),e.jsx(a,{note:"Whenever you write an infinite background loop, always make it interrupt-responsive: 'while(!Thread.currentThread().isInterrupted())'! That way, when the user clicks 'Cancel' or the server shuts down, your thread exits cleanly without hanging! — Sukanta Hui"})]})}export{T as default};
