import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 5: Carrier Threads: How the JVM Mounts and Dispatches Virtual Threads\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
public class CarrierThreadsMountingMechanicsDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: CARRIER THREADS & MOUNTING MECHANICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Inspect carrier thread naming format in Java 21:\r
        Thread vThread = Thread.ofVirtual().name("Audit-VThread").start(() -> {\r
            // Thread.currentThread().toString() prints both the Virtual Thread name AND its Carrier Thread:\r
            System.out.println("  [Execution Trace] " + Thread.currentThread());\r
        });\r
\r
        vThread.join();\r
\r
        System.out.println("\\n>>> WHAT IS A CARRIER THREAD?");\r
        System.out.println("  - A 'Carrier Thread' is a standard OS Platform Thread managed by an internal ForkJoinPool.");\r
        System.out.println("  - Pool size = 'Runtime.getRuntime().availableProcessors()' (e.g. 8 or 16 carrier threads).");\r
        System.out.println();\r
        System.out.println(">>> THE MOUNT & UNMOUNT DANCE:");\r
        System.out.println("  1. Mount   : To execute CPU bytecode, the JVM scheduler 'mounts' a Virtual Thread onto an available Carrier Thread.");\r
        System.out.println("  2. Execute : The Carrier Thread runs the virtual thread's bytecode instructions.");\r
        System.out.println("  3. Unmount : When the virtual thread performs a blocking I/O call (DB/Socket/Sleep), the JVM UNMOUNTS it from the carrier thread!");\r
        System.out.println("  4. Freeing : The Carrier Thread is instantly freed to pick up and run ANOTHER virtual thread!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 5: Carrier Threads & Mounting\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CARRIER THREADS:\r
   - Underlying OS platform worker threads in 'ForkJoinPool'.\r
   - Number of carrier threads &approx; CPU core count (e.g. 8 to 16).\r
   - Mounting: Attaches virtual thread to carrier to run CPU code.\r
   - Unmounting: Detaches virtual thread on blocking I/O, saving its stack to heap.\r
   - Frees carrier thread to serve other virtual threads instantly.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is an OS 'Carrier Thread' in Project Loom and what does 'Mounting' and 'Unmounting' mean?",shortAnswer:"A 'Carrier Thread' is a physical OS platform thread belonging to an internal JVM 'ForkJoinPool' scheduler (sized to match available CPU cores). 'Mounting' is the action where the JVM assigns a Virtual Thread to a Carrier Thread to execute its bytecode on a physical CPU core. 'Unmounting' occurs when the Virtual Thread initiates a blocking I/O operation (e.g. socket read, JDBC query, or Thread.sleep): the JVM captures the virtual thread's stack frames into a heap Continuation object and detaches it, immediately freeing the Carrier Thread to execute other virtual threads.",explanation:"Core execution mechanics of Java 21 Virtual Threads.",hint:"Carrier thread is the underlying OS worker; mounting attaches a virtual thread to run CPU instructions; unmounting detaches it on blocking I/O.",level:"Intermediate",codeExample:"VirtualThread[#21,Audit-VThread]/runnable@ForkJoinPool-1-worker-1"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Carrier Threads"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Carrier Threads"}),": How the JVM Mounts & Dispatches Virtual Tasks"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Explore JVM internals: understanding underlying ",e.jsx("code",{className:"text-sky-300 font-mono",children:"ForkJoinPool"})," carrier pools, mounting CPU bytecode execution, and heap continuation unmounting lifecycles."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"CarrierThreadsMountingMechanicsDemo.java",highlightLines:[7,10,14,15,16,21,22,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Carrier Threads FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 008_009 Topic 5: Carrier Threads",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic5_carrier_threads_note.txt"})}),e.jsx(n,{note:"Think of Carrier Threads as taxi drivers and Virtual Threads as passengers: A taxi driver picks up a passenger (mounts), drives them while they are active, and when the passenger stops to do shopping (blocking I/O), the taxi drops them off (unmounts) and picks up another passenger immediately! No wasted waiting! — Sukanta Hui"})]})}export{T as default};
