import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 012_003: High-Concurrency Order Matching Engine\r
 * Topic 3: Ultra-Low Latency - Zero-GC Allocation Patterns\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exchange;\r
\r
public class UltraLowLatencyZeroGCDemo {\r
\r
    // Mutable reusable event object to eliminate GC allocations on hot path:\r
    public static class OrderEvent {\r
        long orderId;\r
        long priceMicros; // Store ₹3500.50 as integer 3500500000 (No BigDecimal heap allocation!)\r
        long quantity;\r
\r
        public void reset(long id, long priceMicros, long qty) {\r
            this.orderId = id;\r
            this.priceMicros = priceMicros;\r
            this.quantity = qty;\r
        }\r
    }\r
\r
    public static class EventRingBuffer {\r
        private final OrderEvent[] buffer;\r
        private final int mask;\r
        private long sequence = 0L;\r
\r
        public EventRingBuffer(int capacityPowerOfTwo) {\r
            this.mask = capacityPowerOfTwo - 1;\r
            this.buffer = new OrderEvent[capacityPowerOfTwo];\r
            for (int i = 0; i < capacityPowerOfTwo; i++) {\r
                buffer[i] = new OrderEvent(); // Pre-allocated once at startup!\r
            }\r
        }\r
\r
        public OrderEvent next() {\r
            return buffer[(int) (sequence++ & mask)];\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: ZERO-GC LOW LATENCY PATTERNS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        EventRingBuffer ringBuffer = new EventRingBuffer(1024);\r
\r
        // Hot loop reusing existing pre-allocated objects with zero GC overhead:\r
        for (int i = 0; i < 5; i++) {\r
            OrderEvent event = ringBuffer.next();\r
            event.reset(1000L + i, 3500000000L, 50);\r
            System.out.println("   [HOT PATH]: Reused event buffer slot for order: " + event.orderId);\r
        }\r
\r
        System.out.println("\\n>>> ZERO HEAP ALLOCATIONS ON CRITICAL MATCHING LOOP! ✅");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_003: High-Concurrency Order Matching Engine\r
Topic 3: Ultra-Low Latency & Zero-GC Patterns\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOW LATENCY TECHNIQUES:\r
   - Object Pooling & Ring Buffers (LMAX Disruptor pattern).\r
   - Primitive prices (fixed-point micro-integers instead of 'BigDecimal' objects).\r
   - Avoiding autoboxing and wrapper types on the hot execution path.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why do low-latency trading engines store prices as long integers (micro-units) rather than BigDecimal objects?",shortAnswer:"BigDecimal is an immutable heap object requiring memory allocation, pointer dereferencing, and GC overhead for every calculation; storing prices as scaled 64-bit primitive longs allows hardware registers and CPU ALU arithmetic with zero heap allocation.",explanation:"Essential low-latency optimization technique.",hint:"Eliminates heap allocation and allows CPU register-level integer math.",level:"Advanced",codeExample:"long priceMicros = 3500500000L; // ₹3,500.50 scaled by 10^6"},{question:"What is the core design principle of the LMAX Disruptor Ring Buffer?",shortAnswer:"Pre-allocating a fixed power-of-two array of mutable event objects at JVM startup and cycling through them using bitwise masking (seq & mask), ensuring zero runtime memory allocation and high CPU L1/L2 cache line hits.",explanation:"The industry standard for sub-microsecond event messaging.",hint:"Pre-allocated circular buffer accessed via bitwise sequence masking.",level:"Advanced",codeExample:"OrderEvent event = ringBuffer[sequence & mask];"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_003 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 2: Order Matching Engine"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Ultra-Low Latency: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Zero-GC Allocation Patterns"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Microsecond engineering: object pooling, primitive specialized collections, and minimizing heap allocations to eliminate Stop-the-World GC pauses."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"UltraLowLatencyZeroGCDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Order Matching Engine FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 012_003 Topic 3: Ultra-Low Latency & Zero-GC",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_003_topic3_ultralow_latency_zerogc_note.txt"})}),e.jsx(i,{note:"In high-frequency trading (HFT), a 5-millisecond GC pause can cost millions of rupees! We avoid creating new temporary objects on the hot path by reusing pre-allocated event objects (Ring Buffer pattern)! — Sukanta Hui"})]})}export{f as default};
