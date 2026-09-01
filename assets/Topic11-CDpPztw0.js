import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 11: Thread Local Allocation Buffer (TLAB) - Lock-Free Object Creation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class TlabThreadLocalAllocationBufferDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: TLAB (THREAD LOCAL ALLOCATION BUFFER) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE CONCURRENCY ALLOCATION PROBLEM:");\r
        System.out.println("  - Without TLAB: Every thread allocating an object in Eden must synchronize on a global heap allocation pointer.");\r
        System.out.println("  - Result: Severe lock contention, CPU cache misses, and poor multi-threaded throughput!\\n");\r
\r
        System.out.println(">>> THE TLAB SOLUTION:");\r
        System.out.println("  1. The JVM assigns a dedicated, small region of Eden space (a TLAB) to each individual thread.");\r
        System.out.println("  2. When Thread A creates 'new Student()', it allocates exclusively from its private TLAB using a simple 'bump-the-pointer' assembly instruction.");\r
        System.out.println("  3. ZERO synchronization locks or atomic CAS operations are required!");\r
        System.out.println("  4. When Thread A's TLAB is exhausted, it synchronizes ONCE to request a new TLAB block from Eden.\\n");\r
\r
        System.out.println(">>> TLAB TUNING FLAGS:");\r
        System.out.println("  - Enabled by Default : -XX:+UseTLAB");\r
        System.out.println("  - Diagnostic Logging : -XX:+PrintTLAB (in debug builds)");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 11: TLAB (Thread Local Allocation Buffer)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS TLAB:\r
   - Thread Local Allocation Buffer: A small chunk of Eden memory assigned exclusively\r
     to a single thread for rapid, lock-free object allocation.\r
\r
2. BUMP-THE-POINTER TECHNIQUE:\r
   - Allocation simply increments a top-pointer: 'current_pointer += object_size'.\r
   - If 'current_pointer <= end_pointer', allocation succeeds in ~2 CPU cycles!\r
\r
3. RETRIEVAL & RESIZING:\r
   - TLABs are enabled by default ('-XX:+UseTLAB').\r
   - The JVM dynamically resizes each thread's TLAB based on its allocation rate.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How does TLAB enable lock-free object allocation in multi-threaded Java applications?",shortAnswer:"By assigning each thread its own private slice of Eden memory, allowing threads to allocate objects concurrently using simple pointer bumping without acquiring global heap synchronization locks.",explanation:"Eliminates global lock contention during high-throughput allocation.",hint:"Allocates private Eden chunks per thread using lock-free pointer bumping.",level:"Intermediate",codeExample:"Thread A → TLAB A; Thread B → TLAB B (Concurrent & Lock-Free)"},{question:"What happens when an object is too large to fit into a thread's current TLAB?",shortAnswer:"The JVM either allocates a new TLAB for the thread or directly allocates the large object in the shared Eden/Old generation using an atomic CAS (Compare-And-Swap) operation.",explanation:"Controlled by the TLAB refill waste limit threshold.",hint:"Allocated in a new TLAB or directly on shared Eden/Old Gen.",level:"Advanced",codeExample:"Large object → Direct Eden/Old Gen allocation via CAS."}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Thread Local Allocation Buffer: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"TLAB Lock-Free Object Creation"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Extreme allocation performance: how each thread receives a private chunk of Eden space to allocate objects via pointer bump without synchronization locks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"TlabThreadLocalAllocationBufferDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JVM Memory Areas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 010_004 Topic 11: TLAB (Thread Local Allocation Buffer)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic11_tlab_thread_local_allocation_buffer_note.txt"})}),e.jsx(o,{note:"If 100 threads all allocated objects in Eden at the same time, they would fight over memory locks! TLAB gives each thread its own private slice of Eden so objects can be created lock-free in nanoseconds! — Sukanta Hui"})]})}export{T as default};
