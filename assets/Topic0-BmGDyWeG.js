import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 005_003: Buffered Streams, BufferedReader & PrintWriter\r
 * Topic 0: Why Buffering is Crucial: Eliminating OS Kernel Context-Switch Overhead\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.BufferedInputStream;\r
\r
public class WhyBufferingIsCrucialBenchmarkDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY BUFFERING IS CRUCIAL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1 Megabyte simulated payload:\r
        byte[] payload = new byte[1_000_000];\r
        for (int i = 0; i < payload.length; i++) payload[i] = (byte) (i % 127);\r
\r
        // BENCHMARK 1: Unbuffered Single-Byte Reading (1,000,000 separate calls!):\r
        long t1 = System.nanoTime();\r
        try (ByteArrayInputStream unbuffered = new ByteArrayInputStream(payload)) {\r
            int b;\r
            while ((b = unbuffered.read()) != -1) {\r
                // Simulating single-byte disk/network syscall\r
            }\r
        }\r
        long unbufferedDuration = System.nanoTime() - t1;\r
\r
        // BENCHMARK 2: Buffered Reading with 8KB Internal Buffer (122 chunk operations!):\r
        long t2 = System.nanoTime();\r
        try (BufferedInputStream buffered = new BufferedInputStream(new ByteArrayInputStream(payload))) {\r
            int b;\r
            while ((b = buffered.read()) != -1) {\r
                // Served directly from fast L1/L2 CPU RAM buffer!\r
            }\r
        }\r
        long bufferedDuration = System.nanoTime() - t2;\r
\r
        System.out.println(">>> EXECUTION BENCHMARK RESULTS (1 MB STREAM):");\r
        System.out.printf("  - Unbuffered Duration : %.3f ms%n", unbufferedDuration / 1_000_000.0);\r
        System.out.printf("  - Buffered Duration   : %.3f ms%n", bufferedDuration / 1_000_000.0);\r
        System.out.printf("  - Performance Boost   : ~%.1fx Faster!%n", (double) unbufferedDuration / bufferedDuration);\r
\r
        System.out.println("\\n>>> THE KERNEL SYSCALL BOTTLENECK:");\r
        System.out.println("  1. An unbuffered read() causes a context switch from User Mode to Kernel Mode per byte.");\r
        System.out.println("  2. Buffering fetches 8192 bytes in 1 single kernel syscall, serving subsequent reads from RAM.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_003: Buffered Streams & PrintWriter\r
Topic 0: Why Buffering is Crucial\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BUFFERING ARCHITECTURE:\r
   - Without buffer: 1 byte read = 1 OS Kernel Syscall.\r
   - With buffer: 1 syscall fetches 8192 bytes into RAM array.\r
   - Subsequent reads served at nanosecond RAM speeds.\r
   - Crucial for disk files, network sockets, and database streams.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does unbuffered I/O (e.g. reading single bytes from FileInputStream) result in catastrophic performance degradation?",shortAnswer:"Every unbuffered read or write triggers an operating system Kernel context switch (user mode to kernel mode transition) and physical disk/network hardware interrupt. Reading a 10MB file 1 byte at a time forces 10,000,000 separate kernel syscalls. Buffering fetches an 8192-byte block in a single syscall and serves subsequent reads directly from RAM at memory bus speeds.",explanation:"Buffering reduces OS system call frequency by a factor of 8192x.",hint:"Eliminates millions of expensive OS kernel context switches by caching large blocks in RAM.",level:"Beginner",codeExample:"BufferedInputStream bis = new BufferedInputStream(new FileInputStream(file));"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_003 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Performance Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Why Buffering is Crucial: Reducing Costly OS Kernel Syscalls"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Observe hardware execution pipelines: benchmarking unbuffered single-byte reads against 8KB buffered streams and eliminating user-kernel context-switch overhead."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"WhyBufferingIsCrucialBenchmarkDemo.java",highlightLines:[7,10,18,19,21,28,29,31,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Buffering FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 005_003 Topic 0: Why Buffering is Crucial",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_003_topic0_why_buffering_note.txt"})}),e.jsx(a,{note:"Think of unbuffered reading like walking to the grocery store in Barrackpore 100 times to buy 1 single grain of rice each time! Buffering is taking a shopping bag and bringing home 10 kilograms in 1 single trip! — Sukanta Hui"})]})}export{b as default};
