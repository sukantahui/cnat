import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 2: Thread Memory Architecture: Shared Heap vs Private Call Stack & PC Register\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ThreadMemoryArchitectureDemo {\r
\r
    // 1. SHARED HEAP DATA (Accessible by ALL Threads -> Vulnerable to Race Conditions!):\r
    private static int sharedAccountBalance = 50000;\r
\r
    public static void processTransaction(String studentName, int amount) {\r
        // 2. PRIVATE CALL STACK DATA (Local Variables -> 100% Thread-Safe!):\r
        int localFee = amount + 500; // Allocated exclusively on calling thread's private stack!\r
        System.out.printf("[%s Thread] Processing Local Fee: ₹%d (On Private Stack)%n", studentName, localFee);\r
\r
        // Modifying shared heap state:\r
        sharedAccountBalance += localFee;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THREAD MEMORY ARCHITECTURE (HEAP vs STACK) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        processTransaction("Swadeep", 2000);\r
        processTransaction("Tuhina", 3000);\r
\r
        System.out.println("\\n>>> SHARED HEAP BALANCE AFTER TRANSACTIONS: ₹" + sharedAccountBalance);\r
\r
        System.out.println("\\n>>> JVM THREAD MEMORY BREAKDOWN:");\r
        System.out.println("  1. SHARED ACROSS ALL THREADS:");\r
        System.out.println("     - Java Heap Memory : Stores all object instances (new Student()) and static fields.");\r
        System.out.println("     - Metaspace        : Stores loaded class definitions, method bytecode, and constants.");\r
        System.out.println();\r
        System.out.println("  2. PRIVATE PER THREAD (ISOLATED):");\r
        System.out.println("     - Call Stack       : Stores stack frames for method invocations, local primitive variables, and object references.");\r
        System.out.println("     - PC Register      : Program Counter tracking the memory address of the next bytecode instruction to execute.");\r
        System.out.println("     - Native Stack     : For JNI C/C++ library invocations.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 2: Thread Memory Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JVM MEMORY FOR THREADS:\r
   - Shared Areas: Heap Memory (objects, static fields) & Metaspace.\r
   - Private Areas: Call Stack (local variables) & PC Register.\r
   - Local variables inside methods are inherently thread-safe (on private stack).\r
   - Shared heap objects require synchronization to prevent race conditions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Which memory areas in the JVM are shared across all threads, and which memory areas are private to each individual thread?",shortAnswer:"1. 'Shared across all threads': The Java Heap (storing all instantiated objects and static fields) and Metaspace (storing class metadata and constant pools). 2. 'Private per thread': The Thread Call Stack (storing method frames, local variables, and return addresses), the Program Counter (PC) Register (tracking current bytecode instruction address), and Native Method Stacks.",explanation:"Core JVM memory specification (JSR-133 and JVM Specification Chapter 2).",hint:"Heap and Metaspace are shared; Call Stack and PC Register are private to each thread.",level:"Intermediate",codeExample:"int local = 10; // Private on Thread Stack | static Object shared = new Object(); // Shared on Heap"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Thread Memory Layout"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Thread Memory Architecture: Shared ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Heap"})," vs Private ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Call Stack"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"PC Register"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace low-level JVM memory partitioning: distinguishing globally accessible Heap/Metaspace allocations from isolated per-thread Call Stacks and instruction pointer registers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"ThreadMemoryArchitectureDemo.java",highlightLines:[7,10,13,14,18,19,27,28,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Thread Memory FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 008_001 Topic 2: Thread Memory Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic2_thread_memory_architecture_note.txt"})}),e.jsx(n,{note:"Remember this golden rule: Local variables created inside a method are 100% thread-safe because they live on that thread's private stack! Concurrency bugs only happen when multiple threads touch shared objects in the Heap! — Sukanta Hui"})]})}export{y as default};
