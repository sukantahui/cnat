import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 9: Lock Reentrancy: Why Java Intrinsic Locks Avoid Self-Deadlock\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
class BaseAuditReport {\r
    // Synchronized method in Superclass:\r
    public synchronized void generateHeader() {\r
        System.out.println("  [BaseAuditReport] 1. Executed generateHeader() holding monitor lock: " + this.hashCode());\r
    }\r
}\r
\r
class BranchDetailedAuditReport extends BaseAuditReport {\r
    // Synchronized method in Subclass calling superclass synchronized method:\r
    public synchronized void generateCompleteReport() {\r
        System.out.println("  [BranchDetailedAuditReport] 2. Entered generateCompleteReport() holding monitor lock: " + this.hashCode());\r
\r
        // REENTRANT CALL: Re-acquiring the exact same 'this' lock that the thread already holds!\r
        generateHeader(); // If locks were NOT reentrant, the thread would DEADLOCK ITSELF right here!\r
\r
        System.out.println("  [BranchDetailedAuditReport] 3. Successfully completed report!");\r
    }\r
}\r
\r
public class LockReentrancySelfDeadlockAvoidanceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: LOCK REENTRANCY (AVOIDING SELF-DEADLOCK) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BranchDetailedAuditReport report = new BranchDetailedAuditReport();\r
\r
        // Executing reentrant call:\r
        report.generateCompleteReport();\r
\r
        System.out.println("\\n>>> HOW LOCK REENTRANCY WORKS IN THE JVM:");\r
        System.out.println("  1. Lock Ownership : In Java, locks are acquired on a PER-THREAD basis, not a per-invocation basis.");\r
        System.out.println("  2. Recursion Count: When a thread acquires a lock, the JVM records the owning thread and sets 'count = 1'.");\r
        System.out.println("  3. Nested Entry   : If the same owning thread requests the same lock again, the JVM sees ownership matches and simply increments 'count = 2' without blocking!");\r
        System.out.println("  4. Unwinding      : Each 'monitorexit' decrements count. Lock is fully released ONLY when count reaches 0.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 9: Lock Reentrancy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOCK REENTRANCY:\r
   - Java intrinsic locks ('synchronized') and 'ReentrantLock' are REENTRANT.\r
   - Locks are per-THREAD, not per-method.\r
   - JVM maintains an internal recursion counter ('hold count').\r
   - Same thread can re-enter nested synchronized blocks without blocking.\r
   - Prevents self-deadlocks in OOP inheritance hierarchies.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is 'Lock Reentrancy' in Java, and what catastrophic issue would occur if intrinsic locks were NOT reentrant?",shortAnswer:"'Lock Reentrancy' means that if a thread already holds an intrinsic monitor lock on an object, it can acquire the exact same lock again without blocking. The JVM associates an owning thread reference and a 'hold count' with the lock. If locks were NOT reentrant, when a synchronized method calls another synchronized method on the same object (or a subclass calls 'super.synchronizedMethod()'), the thread would wait for a lock it already holds, causing a permanent 'Self-Deadlock'.",explanation:"Core Java Memory Model and JVM synchronization specification.",hint:"Locks are per-thread with a recursion count; non-reentrant locks would cause self-deadlock during nested synchronized calls.",level:"Advanced",codeExample:"public synchronized void a() { b(); } public synchronized void b() { ... } // Reentrant!"}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Lock Reentrancy"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Lock Reentrancy: Why Java Intrinsic Locks Avoid ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Self-Deadlock"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand lock ownership mechanics: tracing per-thread monitor recursion counters and observing how subclass-to-superclass synchronized method invocations execute without self-deadlock."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"LockReentrancySelfDeadlockAvoidanceDemo.java",highlightLines:[7,10,15,16,21,22,25,26,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Lock Reentrancy FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 008_003 Topic 9: Lock Reentrancy",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic9_lock_reentrancy_note.txt"})}),e.jsx(a,{note:"If Java locks were not reentrant, calling 'super.doSomething()' from a synchronized subclass method would cause the thread to freeze forever waiting for itself! Reentrancy means: if you already hold the key, you can open any internal doors inside your room without waiting! — Sukanta Hui"})]})}export{k as default};
