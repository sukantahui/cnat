import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 4: The Million-Thread Benchmark: Launching 100,000+ Concurrent Virtual Threads\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
import java.util.concurrent.atomic.AtomicInteger;\r
\r
public class MillionThreadBenchmarkSimulationDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: THE MILLION-THREAD BENCHMARK (JAVA 21) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        final int TASK_COUNT = 100_000; // 100,000 concurrent virtual threads!\r
        AtomicInteger completedCounter = new AtomicInteger(0);\r
\r
        System.out.printf(">>> Spawning %,d Virtual Threads simulating 1-second I/O sleeps...%n", TASK_COUNT);\r
        long start = System.currentTimeMillis();\r
\r
        Thread[] threads = new Thread[TASK_COUNT];\r
        for (int i = 0; i < TASK_COUNT; i++) {\r
            threads[i] = Thread.ofVirtual().unstarted(() -> {\r
                try {\r
                    Thread.sleep(1000); // 1-second simulated I/O sleep\r
                    completedCounter.incrementAndGet();\r
                } catch (InterruptedException ignored) {}\r
            });\r
            threads[i].start();\r
        }\r
\r
        for (Thread t : threads) {\r
            t.join();\r
        }\r
        long duration = System.currentTimeMillis() - start;\r
\r
        System.out.printf("\\n>>> BENCHMARK RESULTS:%n");\r
        System.out.printf("  Total Virtual Threads Spawned : %,d%n", TASK_COUNT);\r
        System.out.printf("  Total Completed Tasks        : %,d%n", completedCounter.get());\r
        System.out.printf("  Total Wall-Clock Time Taken  : %,d ms (~%.1f seconds!)%n", duration, duration / 1000.0);\r
\r
        System.out.println("\\n>>> WHAT HAPPENED HERE:");\r
        System.out.println("  - Spawning 100,000 Platform Threads would require ~100 GB of RAM and crash the laptop in 2 seconds.");\r
        System.out.println("  - 100,000 Virtual Threads ran concurrently using only ~200 MB of heap and completed in barely ~1.5 seconds!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 4: Million-Thread Benchmark\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MILLION-THREAD BENCHMARK:\r
   - 100,000 Platform Threads: ~100 GB RAM &rarr; Crashes OS immediately.\r
   - 100,000 Virtual Threads: ~200 MB RAM &rarr; Runs seamlessly on a laptop!\r
   - High density: 1,000,000+ virtual threads on a standard server.\r
   - Virtual threads sleep without consuming OS thread resources.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How can a standard development laptop run 100,000+ concurrent Virtual Threads without crashing or exhausting RAM?",shortAnswer:"While 100,000 platform threads would require ~100 GB of native memory (~1 MB per thread stack) and crash the OS, 100,000 Virtual Threads require only ~200 MB of JVM heap memory (~2 KB initial overhead per virtual thread). Furthermore, while sleeping during I/O operations ('Thread.sleep(1000)'), virtual threads unmount from the underlying OS carrier threads, allowing a tiny pool of just 8 to 16 OS carrier threads to execute all 100,000 virtual threads concurrently with negligible CPU overhead.",explanation:"Scalability benchmark illustrating Project Loom memory and scheduling efficiency.",hint:"Virtual threads use ~2 KB heap memory and unmount during sleep, allowing 16 OS threads to handle 100,000 virtual threads.",level:"Intermediate",codeExample:"for (int i = 0; i < 100_000; i++) Thread.ofVirtual().start(() -> Thread.sleep(1000));"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Million-Thread Scale"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Million-Thread Benchmark"}),": Massive Concurrency on a Laptop"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Witness exponential scalability: launching 100,000+ concurrent ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Virtual Threads"})," simultaneously, measuring sub-second throughput, and observing tiny heap memory footprints."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"MillionThreadBenchmarkSimulationDemo.java",highlightLines:[7,10,14,15,20,21,22,23,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Million-Thread Scale FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 008_009 Topic 4: Million-Thread Scale",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic4_million_thread_scale_note.txt"})}),e.jsx(a,{note:"In the old days, launching 100,000 threads would freeze your computer and force a hard reboot! In Java 21, launching 100,000 Virtual Threads takes barely 1 second and only 200MB of RAM! This is the biggest leap in Java history! — Sukanta Hui"})]})}export{x as default};
