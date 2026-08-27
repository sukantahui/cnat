import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const n=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 7: ScheduledExecutorService: scheduleAtFixedRate vs scheduleWithFixedDelay\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.Executors;\r
import java.util.concurrent.ScheduledExecutorService;\r
import java.util.concurrent.TimeUnit;\r
\r
public class ScheduledThreadPoolRateVsDelayDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: scheduleAtFixedRate vs scheduleWithFixedDelay - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);\r
\r
        // 1. One-shot Delayed Execution:\r
        scheduler.schedule(() -> {\r
            System.out.println("  [One-Shot Task] Executed once after a 300 ms initial delay!");\r
        }, 300, TimeUnit.MILLISECONDS);\r
\r
        // 2. scheduleAtFixedRate (Clock-Based Cadence):\r
        // Period = 500 ms (Starts every 500 ms REGARDLESS of how long task takes, unless task duration > period):\r
        scheduler.scheduleAtFixedRate(() -> {\r
            System.out.printf("  [FixedRate Tick] Running periodic GST sync at: %d ms%n", System.currentTimeMillis() % 10000);\r
        }, 100, 500, TimeUnit.MILLISECONDS);\r
\r
        // 3. scheduleWithFixedDelay (Gap-Based Cadence):\r
        // Delay = 500 ms AFTER previous task completes its execution:\r
        scheduler.scheduleWithFixedDelay(() -> {\r
            System.out.printf("  [FixedDelay Tick] Running database backup at: %d ms%n", System.currentTimeMillis() % 10000);\r
            try { Thread.sleep(100); } catch (InterruptedException ignored) {} // Task duration = 100 ms\r
            // Next execution starts 500 ms AFTER this sleep finishes! (Total cycle = 600 ms)\r
        }, 100, 500, TimeUnit.MILLISECONDS);\r
\r
        Thread.sleep(1600); // Allow ticks to run\r
        scheduler.shutdown();\r
\r
        System.out.println("\\n>>> scheduleAtFixedRate vs scheduleWithFixedDelay COMPARISON:");\r
        System.out.println("  - scheduleAtFixedRate : Measures interval from START of Task 1 to START of Task 2.");\r
        System.out.println("  - scheduleWithFixedDelay: Measures interval from END of Task 1 to START of Task 2 (Guarantees pause gap!).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 7: ScheduledThreadPool Rate vs Delay\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SCHEDULED THREAD POOL:\r
   - 'schedule(task, delay, unit)': One-shot delayed task.\r
   - 'scheduleAtFixedRate()': Start-to-Start cadence (constant frequency).\r
   - 'scheduleWithFixedDelay()': End-to-Start cadence (guaranteed rest gap).\r
   - If a scheduled task throws an unhandled exception, subsequent executions STOP!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the critical timing difference between 'scheduleAtFixedRate()' and 'scheduleWithFixedDelay()'?",shortAnswer:"1. 'scheduleAtFixedRate(task, initialDelay, period, unit)': The recurrence interval is measured from the START time of task N to the START time of task N+1 (constant clock-tick frequency). 2. 'scheduleWithFixedDelay(task, initialDelay, delay, unit)': The recurrence interval is measured from the COMPLETION (END) time of task N to the START time of task N+1. This guarantees that a mandatory idle rest gap of 'delay' duration always exists between consecutive task runs, preventing task overlaps if a run takes longer than expected.",explanation:"Standard scheduled executor cadence distinction.",hint:"FixedRate measures from start-to-start; FixedDelay measures from end-to-start (guaranteeing a pause between runs).",level:"Intermediate",codeExample:"scheduler.scheduleAtFixedRate(task, 0, 1, TimeUnit.SECONDS); // Start-to-start"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"ScheduledThreadPool"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-purple-400 font-mono",children:"ScheduledExecutorService"}),": ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"FixedRate"})," vs ",e.jsx("code",{className:"text-sky-400 font-mono",children:"FixedDelay"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master time-driven scheduling: contrasting start-to-start clock frequencies in ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"scheduleAtFixedRate"})," with end-to-start rest intervals in ",e.jsx("code",{className:"text-sky-300 font-mono",children:"scheduleWithFixedDelay"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"ScheduledThreadPoolRateVsDelayDemo.java",highlightLines:[7,10,15,16,23,24,30,31,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"ScheduledThreadPool FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_007 Topic 7: ScheduledThreadPool Rate vs Delay",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic7_scheduled_thread_pool_note.txt"})}),e.jsx(s,{note:"If you are running a database backup, always use 'scheduleWithFixedDelay()'! That guarantees the system waits 10 minutes AFTER the last backup finishes before starting the next one, preventing multiple slow backups from piling up on top of each other! — Sukanta Hui"})]})}export{T as default};
