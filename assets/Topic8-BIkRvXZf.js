import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 8: Bucket Index Calculation: Bitwise AND 'index = (n - 1) & hash' Mathematics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class HashMapBucketIndexCalculationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: BUCKET INDEX CALCULATION '(n - 1) & hash' - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int tableLength = 16; // n = 16\r
        int bitmask = tableLength - 1; // n - 1 = 15 (binary: 0000 1111)\r
\r
        String[] keys = {"Swadeep", "Tuhina", "Abhronila", "Debangshu"};\r
\r
        System.out.println(">>> 1. Tracing Index Calculation for Table Length 16 (Bitmask 15):");\r
        for (String key : keys) {\r
            int h = key.hashCode();\r
            int hash = h ^ (h >>> 16);\r
            int index = bitmask & hash; // Equivalent to hash % tableLength, but 30x faster!\r
\r
            System.out.printf("  Key: %-10s | Hash: %10d | (15 & hash) -> Bucket Index: %2d%n",\r
                    key, hash, index);\r
        }\r
\r
        System.out.println("\\n>>> MATHEMATICAL PROOF OF EQUIVALENCE TO MODULO:");\r
        System.out.println("  - When 'n' is a power of 2 (e.g. 16 = 2^4):");\r
        System.out.println("  - '(hash % n)' gives the remainder when dividing by 16 (range 0 to 15).");\r
        System.out.println("  - In binary, dividing by 2^4 is equivalent to dropping all bits except the last 4 bits.");\r
        System.out.println("  - '(15 & hash)' zeroes out all bits above bit 3, preserving EXACTLY the last 4 bits.");\r
        System.out.println("  - Result: '(n - 1) & hash' is 100% mathematically identical to 'hash % n'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 8: Bucket Index Calculation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BUCKET INDEX FORMULA:\r
   - 'index = (n - 1) & hash'.\r
   - 'n' is table length (always power of 2).\r
   - Bitmask '(n - 1)' filters lower bits.\r
   - Mathematically identical to 'hash % n'.\r
   - 1 CPU clock cycle vs 20-40 cycles for division.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is '(n - 1) & hash' mathematically identical to 'hash % n' when 'n' is a power of two?",shortAnswer:"When 'n' is a power of two (e.g. 2^k = 16), the remainder of any integer divided by 2^k consists of the value represented by its lowest 'k' binary bits. The bitmask '(n - 1)' (e.g. 15 = binary 1111) has exactly 'k' trailing 1s. Performing a bitwise AND '&' zeroes out all bits above position 'k-1', retaining only the lowest 'k' bits, which is mathematically identical to 'hash % n', but executes in 1 CPU cycle.",explanation:"Fundamental bitwise arithmetic theorem.",hint:"Bitmasking with 2^k - 1 extracts the lowest k bits, exactly matching the remainder of dividing by 2^k.",level:"Intermediate",codeExample:"int bucket = (16 - 1) & hash; // 15 & hash (Identical to hash % 16)"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Bitwise Indexing"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Bucket Index Calculation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"index = (n - 1) & hash"})," Mathematics"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace low-level bitmask arithmetic: proving why ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"(n - 1) & hash"})," matches modulo operations while executing in a single CPU clock cycle."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"HashMapBucketIndexCalculationDemo.java",highlightLines:[7,10,13,14,21,22,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Bucket Indexing FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:r,title:"Module 007_005 Topic 8: Bucket Index Calculation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic8_bucket_index_calculation_note.txt"})}),e.jsx(i,{note:"Modulo '%' is an expensive mathematical division in CPU hardware! By forcing the table size to be 16, 32, 64, etc., Java replaces division with '(15 & hash)', which runs at raw wire speed in 1 clock cycle! — Sukanta Hui"})]})}export{b as default};
