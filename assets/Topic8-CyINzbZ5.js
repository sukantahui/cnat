import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const n=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 8: Why volatile Does NOT Guarantee Atomicity: The volatile count++ Fallacy\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class VolatileNonAtomicityTrapDemo {\r
\r
    // VOLATILE VARIABLE (Guarantees visibility, but NOT atomicity!):\r
    private static volatile int volatileCounter = 0;\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: THE volatile NON-ATOMICITY FALLACY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Runnable task = () -> {\r
            for (int i = 0; i < 50_000; i++) {\r
                // 'volatileCounter++' is STILL NOT ATOMIC!\r
                // 1. Read volatile variable (volatile read from RAM)\r
                // 2. Add 1 in CPU register (register calculation)\r
                // 3. Write back to volatile variable (volatile write to RAM)\r
                // Even though steps 1 and 3 are volatile, THE 3 STEPS TOGETHER ARE NOT ATOMIC!\r
                volatileCounter++;\r
            }\r
        };\r
\r
        Thread t1 = new Thread(task, "Thread-1");\r
        Thread t2 = new Thread(task, "Thread-2");\r
\r
        t1.start();\r
        t2.start();\r
\r
        t1.join();\r
        t2.join();\r
\r
        System.out.println(">>> EXPERIMENT RESULTS (50,000 + 50,000 Expected = 100,000):");\r
        System.out.printf("  Actual Final volatileCounter Value: %,d (DATA CORRUPTED!)%n", volatileCounter);\r
\r
        System.out.println("\\n>>> WHY volatile FAILED TO PROTECT THE COUNTER:");\r
        System.out.println("  - volatile guarantees VISIBILITY (you read the latest value).");\r
        System.out.println("  - volatile DOES NOT guarantee MUTUAL EXCLUSION or ATOMICITY (two threads can read the same value simultaneously, increment, and write back the same number).");\r
        System.out.println("  - For compound operations (Read-Modify-Write), use 'AtomicInteger' or 'synchronized'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 8: volatile Non-Atomicity Fallacy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. VOLATILE NON-ATOMICITY:\r
   - 'volatile' guarantees: VISIBILITY & ORDERING.\r
   - 'volatile' DOES NOT guarantee: ATOMICITY.\r
   - 'count++' has 3 steps (Read &rarr; Modify &rarr; Write) which still interleave.\r
   - Never use volatile for counters or accumulators.\r
   - Solution: Use 'AtomicInteger' or 'synchronized'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why does declaring 'volatile int count = 0;' fail to make 'count++' thread-safe under concurrent execution?",shortAnswer:"'volatile' guarantees only Memory Visibility (that reads and writes go directly to main memory); it does NOT provide Mutual Exclusion or Atomicity. The 'count++' operation is a compound Read-Modify-Write sequence composed of 3 distinct bytecode instructions: (1) read value from memory, (2) increment register, (3) write back to memory. Even though the read and write operations are volatile, multiple threads can execute step 1 simultaneously, calculate the same incremented value in step 2, and write back the identical value in step 3, causing lost updates.",explanation:"Number one most frequent technical interview trap regarding volatile.",hint:"volatile provides visibility, not atomicity; count++ is 3 separate instructions that interleave.",level:"Intermediate",codeExample:"volatile int count = 0; count++; // NOT thread-safe! Use AtomicInteger instead."}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Non-Atomicity Trap"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Why ",e.jsx("code",{className:"text-rose-400 font-mono",children:"volatile"})," Does NOT Guarantee Atomicity (",e.jsx("code",{className:"text-rose-400 font-mono",children:"count++"})," Fallacy)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Expose the #1 concurrency misconception: analyzing why volatile memory visibility cannot protect compound Read-Modify-Write ",e.jsx("code",{className:"text-rose-300 font-mono",children:"count++"})," operations from lost update data corruption."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"VolatileNonAtomicityTrapDemo.java",highlightLines:[7,10,13,14,21,22,23,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"volatile Non-Atomicity FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_006 Topic 8: volatile Non-Atomicity Fallacy",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic8_volatile_non_atomicity_note.txt"})}),e.jsx(o,{note:"This is the biggest trap in all of Java! Junior developers think: 'If I make my counter volatile, it will be thread-safe!' WRONG! Volatile gives you fresh eyes to read data, but it does NOT stop someone else from writing at the same time! Use AtomicInteger for counters! — Sukanta Hui"})]})}export{v as default};
