import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 6: Automatic Unmounting on Blocking I/O: Seamless OS Thread Preservation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
public class AutomaticUnmountingBlockingIoDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: AUTOMATIC UNMOUNTING ON BLOCKING I/O - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HOW THE JDK REWROTE ALL BLOCKING I/O APIS FOR PROJECT LOOM:");\r
        System.out.println("  1. 'java.net.Socket', 'ServerSocket', 'HttpClient' (All network I/O)");\r
        System.out.println("  2. 'java.io.InputStream', 'FileInputStream' (File I/O where supported)");\r
        System.out.println("  3. 'Thread.sleep()', 'BlockingQueue.take()', 'ReentrantLock.lock()' (Concurrency primitives)");\r
        System.out.println();\r
        System.out.println(">>> THE BEHIND-THE-SCENES MAGIC:");\r
        System.out.println("  - When you call 'socket.read()' inside a Virtual Thread:");\r
        System.out.println("    1. The JDK checks: 'Is this a virtual thread? YES'.");\r
        System.out.println("    2. Registers the socket with the OS non-blocking epoll/kqueue event demultiplexer.");\r
        System.out.println("    3. Calls 'Continuation.yield()' to UNMOUNT the virtual thread from its Carrier Thread.");\r
        System.out.println("    4. The OS Carrier Thread is 100% FREE to run other tasks while bytes travel over the wire!");\r
        System.out.println("    5. When the OS receives data packets, the epoll selector wakes up the JVM, and the Virtual Thread is MOUNTED onto an available Carrier Thread (could be a different carrier!) to resume exactly where it left off!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 6: Automatic Unmounting on I/O\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. AUTOMATIC UNMOUNTING ON I/O:\r
   - JDK rewritten to integrate with OS epoll/kqueue/IOCP.\r
   - Calling 'socket.read()' or 'Thread.sleep()' triggers 'Continuation.yield()'.\r
   - Virtual Thread unmounts & carrier thread is instantly freed.\r
   - When I/O data arrives, Virtual Thread re-mounts on any available carrier.\r
   - Zero OS thread blocking!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does Java 21 achieve non-blocking scalability when a Virtual Thread executes a traditional blocking I/O call (like 'socket.read()' or 'Thread.sleep()')?",shortAnswer:"The entire standard JDK I/O library was rewritten under Project Loom. When a Virtual Thread calls a blocking method (like 'socket.read()'), the JDK intercepts the call, registers the underlying file descriptor with the OS kernel's non-blocking poller ('epoll' on Linux, 'kqueue' on macOS, 'IOCP' on Windows), and yields the virtual thread's Continuation. The Virtual Thread unmounts from its OS Carrier Thread immediately. When the OS signals that network data has arrived, the JVM re-mounts the virtual thread onto any available Carrier Thread to continue execution seamlessly.",explanation:"Core non-blocking I/O kernel demultiplexer integration in Project Loom.",hint:"JDK registers the socket with epoll/kqueue, unmounts the virtual thread, and re-mounts it on any available carrier thread when data arrives.",level:"Advanced",codeExample:"// Synchronous looking code: socket.read(); // Automatically unmounts under the hood!"}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Automatic Unmounting"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Automatic Unmounting on ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Blocking I/O"}),": Seamless Thread Preservation"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect non-blocking kernel integrations: exploring how standard socket, file, and sleep operations yield continuations and free OS carrier threads via ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"epoll"}),"/",e.jsx("code",{className:"text-sky-300 font-mono",children:"kqueue"})," demultiplexers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"AutomaticUnmountingBlockingIoDemo.java",highlightLines:[7,10,13,14,15,19,20,21,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Automatic Unmounting FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 008_009 Topic 6: Automatic Unmounting",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic6_automatic_unmounting_note.txt"})}),e.jsx(a,{note:"You don't have to change a single line of your existing JDBC or HTTP code! When your code waits for a response from the network, Java automatically unmounts your virtual thread so the CPU can help someone else until the bytes arrive! — Sukanta Hui"})]})}export{k as default};
