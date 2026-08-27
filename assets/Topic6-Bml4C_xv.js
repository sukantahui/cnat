import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 6: volatile Guarantee 1: Immediate Memory Visibility Across CPU Caches\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class VolatileMemoryVisibilityDeepDiveDemo {\r
\r
    // volatile field ensuring cross-thread cache coherence:\r
    private static volatile String serverStatus = "INITIALIZING";\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: volatile GUARANTEE 1: MEMORY VISIBILITY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread listener = new Thread(() -> {\r
            System.out.println("  [Listener Thread] Waiting for server status to change from INITIALIZING...");\r
\r
            // volatile read ensures listener reads directly from main RAM:\r
            while ("INITIALIZING".equals(serverStatus)) {\r
                // Spinning without blocking\r
            }\r
\r
            System.out.println(">>> [Listener Thread] Detected status update: " + serverStatus + "!");\r
        }, "Listener-Worker");\r
\r
        listener.start();\r
        Thread.sleep(200);\r
\r
        // State update on main thread:\r
        System.out.println(">>> [Main Thread] Transitioning serverStatus to 'READY_FOR_STUDENTS'...");\r
        serverStatus = "READY_FOR_STUDENTS"; // volatile write flushes immediately to main RAM!\r
\r
        listener.join();\r
\r
        System.out.println("\\n>>> WHAT HAPPENS AT THE HARDWARE LEVEL ON VOLATILE WRITES:");\r
        System.out.println("  1. Cache Line Invalidation : On x86/ARM, a volatile write triggers the MESI cache coherence protocol.");\r
        System.out.println("  2. Invalidate Broadcast    : The CPU core broadcasts an 'Invalidate' signal on the system bus.");\r
        System.out.println("  3. Cache Miss Forced       : All other CPU cores mark their local cache line as 'Invalid', forcing their next read to fetch fresh bytes from L3/RAM!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,n=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 6: volatile Memory Visibility\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. VOLATILE MEMORY VISIBILITY:\r
   - Writes flush immediately from Store Buffer to RAM.\r
   - Reads bypass L1/L2 caches and load directly from RAM.\r
   - Hardware: MESI protocol invalidates other cores' cache lines.\r
   - Eliminates stale data reads across multi-core CPUs.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does the 'MESI' cache coherence protocol enforce the memory visibility guarantee of a 'volatile' write at the hardware level?",shortAnswer:"When a CPU core executes a write to a 'volatile' variable, the hardware memory controller triggers a cache coherence protocol (such as MESI: Modified, Exclusive, Shared, Invalid). The core flushes its local Store Buffer directly to the shared L3 cache/RAM and broadcasts an 'Invalidate' message across the CPU interconnect bus. All other CPU cores holding a copy of that cache line transition its state to 'Invalid'. When another thread reads the volatile variable, its core encounters a forced cache-miss and fetches the freshly updated value directly from main memory.",explanation:"Low-level hardware CPU cache coherence and volatile write mechanics.",hint:"MESI protocol invalidates other CPU cores' local cache lines, forcing them to re-read from RAM on the next access.",level:"Advanced",codeExample:"volatile int state; // Writes broadcast MESI invalidate signals to other cores"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Memory Visibility"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"volatile"})," Guarantee 1: Immediate Memory Visibility Across Caches"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace hardware cache coherence: exploring the MESI cache protocol, bus invalidation broadcasts, and direct RAM write-buffer flushes triggered by volatile modifications."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"VolatileMemoryVisibilityDeepDiveDemo.java",highlightLines:[7,10,13,14,20,21,29,30,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"volatile Visibility FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:n,title:"Module 008_006 Topic 6: volatile Memory Visibility",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic6_volatile_memory_visibility_note.txt"})}),e.jsx(i,{note:"When you write to a volatile variable, your CPU core immediately sends an invalidation message over the hardware bus to every other CPU core! Any other thread trying to read that variable is forced to throw away its stale cache and load the fresh value! — Sukanta Hui"})]})}export{x as default};
