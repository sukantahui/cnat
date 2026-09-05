import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 1: The Thread-per-Request Scaling Bottleneck in Web Servers (Tomcat, Spring MVC)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
public class ThreadPerRequestBottleneckDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THREAD-PER-REQUEST BOTTLENECK IN TOMCAT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE TRADITIONAL SERVLET THREAD-PER-REQUEST MODEL (Spring MVC / Tomcat):");\r
        System.out.println("  1. Tomcat allocates a fixed pool of 200 OS worker threads ('maxThreads=200').");\r
        System.out.println("  2. Request 1 arrives -> Worker Thread #1 accepts and executes SQL query (Blocks 200 ms for database).");\r
        System.out.println("  3. While blocking on SQL I/O, Worker Thread #1 IS FROZEN DOING ZERO CPU WORK, but still monopolizes 1 MB of RAM!");\r
        System.out.println();\r
        System.out.println(">>> THE TRAFFIC SPIKE CLIFF:");\r
        System.out.println("  - If 500 concurrent users request tax reports simultaneously:");\r
        System.out.println("    * 200 users occupy all 200 worker threads (all 200 threads blocked waiting for DB I/O).");\r
        System.out.println("    * Remaining 300 requests are placed in Tomcat's accept-queue ('acceptCount=100').");\r
        System.out.println("    * Queue overflows -> Incoming users receive HTTP 503 Service Unavailable or Connection Timeout!");\r
        System.out.println();\r
        System.out.println(">>> THE IRONY: CPU USAGE IS ONLY 5%! The server crashed from THREAD STARVATION, not CPU saturation!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 1: Thread-per-Request Bottleneck\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THREAD-PER-REQUEST BOTTLENECK:\r
   - Tomcat allocates ~200 OS worker threads.\r
   - Each thread blocks while waiting for DB / HTTP I/O (sleeping).\r
   - All 200 threads exhausted → Server rejects incoming requests (503).\r
   - Server crashes despite having 95% CPU capacity unused!\r
   - Solved by Virtual Threads which unmount during I/O blocking.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does the traditional 'Thread-per-Request' architecture (e.g. standard Tomcat with 200 worker threads) fail under high concurrent I/O workloads?",shortAnswer:"In the Thread-per-Request model, each incoming HTTP request ties up one dedicated OS platform thread from the pool (default 200 threads). When handling I/O-bound tasks (e.g. database queries or third-party REST calls taking 200ms), all 200 threads block and sleep waiting for network packets. While the CPU cores sit nearly idle (e.g. 5% CPU utilization), all threads are occupied, causing subsequent incoming requests to queue up, time out, and fail with HTTP 503 errors (Thread Starvation).",explanation:"Analysis of traditional I/O blocking bottlenecks in enterprise Java web applications.",hint:"Threads block on I/O while doing zero CPU work, exhausting the thread pool and rejecting incoming users.",level:"Intermediate",codeExample:"// Tomcat maxThreads=200 → 201st concurrent blocking request must wait in queue!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Thread-per-Request"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Thread-per-Request"})," Scaling Bottleneck in Web Servers (Tomcat / Spring)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dissect enterprise server failures: analyzing why blocking database I/O starves fixed 200-worker thread pools and causes connection dropouts while CPU cores sit idle."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ThreadPerRequestBottleneckDemo.java",highlightLines:[7,10,13,14,18,19,20,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Thread-per-Request FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 008_009 Topic 1: Thread-per-Request Bottleneck",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic1_thread_per_request_bottleneck_note.txt"})}),e.jsx(n,{note:"In Tomcat, if 200 students are waiting for a slow GST database response, all 200 server threads are sleeping! When student #201 arrives, Tomcat rejects them with 'Server Busy'—even though your CPU is 95% idle! That is the classic Thread-per-Request bottleneck! — Sukanta Hui"})]})}export{x as default};
