import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const n=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 0: Modern CPU Hardware Architecture: L1/L2/L3 Caches, Write Buffers & RAM\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class CpuHardwareMemoryHierarchyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: CPU CACHE HIERARCHY & HARDWARE REALITIES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE MODERN MULTI-CORE HARDWARE MEMORY PYRAMID:");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| Hardware Level    | Typical Capacity  | Access Latency    | Shared / Private  |");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| CPU Registers     | ~1 KB             | ~0.5 ns (1 cycle) | Private to Core   |");\r
        System.out.println("| L1 Cache (I + D)  | ~32 - 64 KB       | ~1 ns (3 cycles)  | Private to Core   |");\r
        System.out.println("| L2 Cache          | ~256 - 512 KB     | ~4 ns (12 cycles) | Private / Shared  |");\r
        System.out.println("| L3 Cache (LLC)    | ~16 - 64 MB       | ~15 ns (40 cycles)| Shared all Cores  |");\r
        System.out.println("| Main Memory (RAM) | ~16 - 128 GB      | ~60 - 100 ns (200)| Shared all Cores  |");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println();\r
        System.out.println(">>> WHY HARDWARE CACHES CAUSE CONCURRENCY CHALLENGES:");\r
        System.out.println("  1. Speed Discrepancy : RAM is ~200x SLOWER than CPU registers! CPUs must cache variables locally to stay fast.");\r
        System.out.println("  2. Local Stash Hazard: Core 1 copies variable 'status = true' into its private L1 cache, but Core 2 still reads stale 'status = false' from its own private L1 cache!");\r
        System.out.println("  3. Hardware Barriers : Special CPU instructions (Memory Fences) are required to force caches to synchronize with main RAM.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 0: CPU Hardware Memory Hierarchy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CPU HARDWARE MEMORY HIERARCHY:\r
   - Registers: ~0.5 ns (Private to core).\r
   - L1/L2 Caches: ~1-4 ns (Private to core).\r
   - L3 Cache: ~15 ns (Shared).\r
   - Main RAM: ~60-100 ns (200x slower than registers).\r
   - Problem: Private L1/L2 caches hold stale copies of shared variables across cores.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why do modern multi-core CPU architectures require L1/L2/L3 hardware caches, and how does this create concurrency bugs?",shortAnswer:"Modern CPU registers execute instructions in ~0.5 nanoseconds, whereas reading from main system RAM takes ~60–100 nanoseconds (~200x slower, the 'Memory Wall'). To prevent CPU starvation, CPU cores maintain ultra-fast private L1 and L2 hardware caches. When multiple threads execute on different cores, each core caches local copies of shared variables in its private L1 cache. Writes made by Core 1 remain buffered in Core 1's local cache and are not immediately propagated to RAM, causing Core 2 to read stale, un-updated values.",explanation:"Fundamental computer architecture and hardware memory wall analysis.",hint:"RAM is ~200x slower than CPU; private L1/L2 caches store local copies that become stale across cores.",level:"Intermediate",codeExample:"// Core 1 cache: x = 42; | Core 2 cache: x = 0 (stale value!)"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Hardware Memory Hierarchy"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Modern CPU Architecture: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"L1/L2/L3"})," Hardware Caches & RAM"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Uncover the physics of multi-core concurrency: examining the 200x Memory Wall speed gap, private L1/L2 hardware cache lines, and multi-core cache coherence."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:n,title:"CpuHardwareMemoryHierarchyDemo.java",highlightLines:[7,10,13,14,15,16,17,18,19,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Hardware Hierarchy FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 008_006 Topic 0: Hardware Memory Hierarchy",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic0_hardware_memory_hierarchy_note.txt"})}),e.jsx(s,{note:"Reading from RAM is 200 times slower than doing math in a CPU register! That's why every CPU core has its own private L1 cache to store local variables. But when two threads on different cores share data, their private caches get out of sync! — Sukanta Hui"})]})}export{x as default};
