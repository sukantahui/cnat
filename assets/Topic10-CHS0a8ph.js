import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 10: Hardware CAS (Compare-And-Swap / Compare-And-Set): LOCK CMPXCHG\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.atomic.AtomicInteger;\r
\r
public class HardwareCompareAndSwapCasDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: HARDWARE CAS (COMPARE-AND-SWAP) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AtomicInteger balance = new AtomicInteger(1000);\r
\r
        System.out.println(">>> 1. HOW CAS (COMPARE-AND-SWAP) OPERATES:");\r
        System.out.println("  - CAS takes 3 parameters: (MemoryAddress, ExpectedCurrentValue, NewUpdateValue).");\r
        System.out.println("  - CAS Rule: 'Update value to NewUpdateValue IF AND ONLY IF current value equals ExpectedCurrentValue'.");\r
        System.out.println();\r
\r
        // 1. Successful CAS (Expected = 1000, Update = 1500):\r
        boolean success1 = balance.compareAndSet(1000, 1500);\r
        System.out.printf("  Attempt 1: compareAndSet(1000, 1500) -> SUCCESS? %b | Current Balance: ₹%d%n",\r
                success1, balance.get());\r
\r
        // 2. Failed CAS (Expected = 1000, but actual is now 1500!):\r
        boolean success2 = balance.compareAndSet(1000, 2000);\r
        System.out.printf("  Attempt 2: compareAndSet(1000, 2000) -> SUCCESS? %b | Current Balance: ₹%d%n",\r
                success2, balance.get());\r
\r
        System.out.println("\\n>>> HARDWARE INSTRUCTION EXECUTION:");\r
        System.out.println("  - On x86 CPUs, CAS maps directly to a SINGLE atomic assembly instruction: 'LOCK CMPXCHG'.");\r
        System.out.println("  - Zero OS context switches, zero thread sleeping, 100% lock-free hardware atomicity!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 10: Hardware CAS (Compare-And-Swap)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HARDWARE CAS (COMPARE-AND-SWAP):\r
   - 3 operands: Memory location (V), Expected value (A), New value (B).\r
   - Atomically updates V &rarr; B if and only if V == A.\r
   - Hardware level: 'LOCK CMPXCHG' assembly instruction.\r
   - Lock-Free: 0 OS context switching overhead.\r
   - Forms the foundation of all 'java.util.concurrent.atomic' classes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is hardware 'Compare-And-Swap' (CAS) and how does it achieve thread-safe mutations without traditional OS mutex locks?",shortAnswer:"CAS (Compare-And-Swap) is an atomic hardware CPU instruction (such as 'LOCK CMPXCHG' on x86 processors or Load-Linked/Store-Conditional on ARM) that accepts three operands: a memory location (V), an expected old value (A), and a new value (B). The CPU atomically inspects V: if V == A, it updates V to B and returns 'true'; if V != A, memory is left untouched and it returns 'false'. Because the entire check-and-update is performed in a single indivisible CPU clock cycle at the silicon hardware level, threads achieve 100% thread safety without acquiring OS mutexes or blocking.",explanation:"Core principle of lock-free data structures and modern concurrency.",hint:"Atomic CPU instruction (LOCK CMPXCHG) that updates memory if and only if the current value matches the expected value in a single clock cycle.",level:"Advanced",codeExample:"boolean success = atomicInt.compareAndSet(expectedValue, newValue);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Hardware CAS"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Hardware ",e.jsx("code",{className:"text-purple-400 font-mono",children:"CAS (Compare-And-Swap)"}),": The Engine of Lock-Free Concurrency"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dive into hardware silicon atomicity: exploring the ",e.jsx("code",{className:"text-purple-300 font-mono",children:"LOCK CMPXCHG"})," CPU instruction, optimistic lock-free retry loops, and the mechanics of ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"compareAndSet()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"HardwareCompareAndSwapCasDemo.java",highlightLines:[7,10,13,14,19,20,24,25,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Hardware CAS FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 008_006 Topic 10: Hardware CAS",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic10_hardware_cas_note.txt"})}),e.jsx(n,{note:"CAS is optimistic locking built directly into the CPU processor! Instead of locking the door before entering, a thread does its calculation and asks the CPU: 'Has anyone changed this number since I looked at it? If not, save my new number!' If someone changed it, the thread just retries! Zero locking, pure speed! — Sukanta Hui"})]})}export{x as default};
