import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 008_004: Inter-Thread Communication & Producer-Consumer\r
 * Topic 0: Why Inter-Thread Communication is Needed: The High Cost of Busy-Wait Polling\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class BusyWaitingVsInterThreadCommDemo {\r
\r
    private static volatile boolean dataReady = false;\r
    private static String invoicePayload = null;\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: AVOIDING BUSY-WAIT POLLING WITH INTER-THREAD COMM - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. THE BAD APPROACH: BUSY-WAIT POLLING (Spins CPU at 100% load):\r
        Thread consumerBusyWait = new Thread(() -> {\r
            long spinIterations = 0;\r
            System.out.println("  [Consumer] Starting busy-wait polling loop...");\r
\r
            // BUSY WAITING LOOP: Burns millions of CPU cycles checking a boolean flag:\r
            while (!dataReady) {\r
                spinIterations++; // Wasteful CPU burn!\r
            }\r
\r
            System.out.printf("  [Consumer] Data arrived! Burned %,d CPU spin cycles waiting!%n", spinIterations);\r
            System.out.println("  [Consumer] Processed: " + invoicePayload);\r
        }, "Busy-Wait-Consumer");\r
\r
        // 2. Producer thread generating data after 200 ms:\r
        Thread producer = new Thread(() -> {\r
            try { Thread.sleep(200); } catch (InterruptedException ignored) {}\r
            invoicePayload = "GST-INV-2026-BARRACKPORE-001";\r
            dataReady = true; // Signal data ready\r
            System.out.println(">>> [Producer] Data generated and ready flag set to TRUE!");\r
        }, "Producer-Thread");\r
\r
        consumerBusyWait.start();\r
        producer.start();\r
\r
        consumerBusyWait.join();\r
        producer.join();\r
\r
        System.out.println("\\n>>> WHY BUSY-WAITING POLLING IS CATASTROPHIC IN PRODUCTION:");\r
        System.out.println("  1. 100% CPU Core Saturation: A spinning thread starves other threads and burns excessive battery/server power.");\r
        System.out.println("  2. Solution (Signaling)   : Threads should SLEEP peacefully and be WOKEN UP only when data is ready via 'wait()' and 'notify()'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_004: Inter-Thread Communication & Producer-Consumer\r
Topic 0: Avoiding Busy Waiting\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BUSY WAITING vs SIGNALING:\r
   - Busy Waiting: 'while (!flag) {}' spins at 100% CPU utilization.\r
   - Causes CPU starvation, thermal throttling, and battery drain.\r
   - Inter-Thread Communication: 'wait()' suspends thread with 0% CPU cost.\r
   - 'notify()' wakes up waiting thread only when data is ready.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is 'Busy Waiting' (Spin-Waiting) and why is Inter-Thread Communication preferred in multi-threaded software?",shortAnswer:"'Busy Waiting' is an anti-pattern where a thread repeatedly executes an empty or tight polling loop (e.g. 'while (!condition) {}') checking for a state change. This consumes 100% of a CPU core, generating extreme thermal load, wasting battery, and starving other threads of CPU time-slices. Inter-Thread Communication ('wait()' and 'notify()') allows the waiting thread to yield the CPU and transition to the 'WAITING' state with 0% CPU consumption until another thread actively signals it.",explanation:"Core concurrency efficiency principle.",hint:"Busy waiting burns 100% CPU cycles spinning; wait/notify suspends the thread with 0% CPU usage until signaled.",level:"Beginner",codeExample:"while (!dataReady) { /* Burns 100% CPU! */ } // Anti-pattern! Use wait() instead."}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_004 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Busy-Waiting Anti-Pattern"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Why Inter-Thread Communication is Needed: Avoiding ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Busy Waiting"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Analyze CPU efficiency: demonstrating how spin-polling loops burn millions of wasted processor cycles and why active inter-thread signaling (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"wait()"}),"/",e.jsx("code",{className:"text-sky-300 font-mono",children:"notify()"}),") delivers 0% idle CPU overhead."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"BusyWaitingVsInterThreadCommDemo.java",highlightLines:[7,10,18,19,20,21,29,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Busy Waiting FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 008_004 Topic 0: Avoiding Busy Waiting",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_004_topic0_avoiding_busy_waiting_note.txt"})}),e.jsx(a,{note:"Imagine sitting at home checking your mailbox every 2 seconds for a letter—that is Busy Waiting, and you will exhaust yourself! Inter-Thread Communication is like the postman ringing your doorbell when the letter arrives: you sleep peacefully until the bell rings! — Sukanta Hui"})]})}export{g as default};
