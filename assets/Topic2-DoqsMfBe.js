import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 008_008: Explicit Locks & Synchronizers\r
 * Topic 2: ReentrantLock Advanced Features: tryLock(timeout), lockInterruptibly & Fairness\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.TimeUnit;\r
import java.util.concurrent.locks.Lock;\r
import java.util.concurrent.locks.ReentrantLock;\r
\r
public class ReentrantLockAdvancedFeaturesDemo {\r
\r
    // 1. Fair Lock (true = FIFO Queue; false = Non-fair barging throughput):\r
    private static final Lock FAIR_LOCK = new ReentrantLock(true);\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: ReentrantLock ADVANCED METHODS & FAIRNESS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 ADVANCED CAPABILITIES OF ReentrantLock:");\r
        System.out.println();\r
        System.out.println("  1. Non-Blocking tryLock():");\r
        System.out.println("     - 'if (lock.tryLock()) { ... } else { doAlternateWork(); }'");\r
        System.out.println("     - Immediately acquires lock if free; returns false instantly if held by another thread.");\r
        System.out.println();\r
        System.out.println("  2. Timed tryLock(timeout, unit):");\r
        System.out.println("     - 'if (lock.tryLock(500, TimeUnit.MILLISECONDS))'");\r
        System.out.println("     - Bounded waiting: aborts and backs off if lock cannot be acquired within 500 ms.");\r
        System.out.println();\r
        System.out.println("  3. Interruptible Lock Acquisition (lockInterruptibly):");\r
        System.out.println("     - 'lock.lockInterruptibly()'");\r
        System.out.println("     - If thread is interrupted while waiting in queue, it immediately aborts and throws InterruptedException!");\r
        System.out.println();\r
        System.out.println("  4. Fair vs Non-Fair Construction:");\r
        System.out.println("     - 'new ReentrantLock(true)'  -> Fair FIFO queue (prevents starvation).");\r
        System.out.println("     - 'new ReentrantLock(false)' -> Default Non-Fair (allows barging for maximum multi-core throughput).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_008: Explicit Locks & Synchronizers\r
Topic 2: ReentrantLock Advanced Features\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. REENTRANTLOCK FEATURES:\r
   - 'tryLock()': Non-blocking instant attempt.\r
   - 'tryLock(timeout, unit)': Bounded timed acquisition.\r
   - 'lockInterruptibly()': Can be cancelled while queued.\r
   - 'new ReentrantLock(true)': Fair FIFO lock (eliminates starvation).\r
   - 'new ReentrantLock(false)': Non-fair (faster throughput via barging).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Compare 'lock()', 'tryLock()', 'tryLock(timeout)', and 'lockInterruptibly()' in ReentrantLock.",shortAnswer:"1. 'lock()': Unconditionally blocks until lock is acquired; ignores thread interrupts. 2. 'tryLock()': Non-blocking poll; immediately acquires lock and returns 'true' if free, or returns 'false' immediately without waiting. 3. 'tryLock(timeout, unit)': Bounded block; waits up to timeout duration for lock, returning 'true' on success or 'false' on expiration, and honors interrupts. 4. 'lockInterruptibly()': Blocks until lock is acquired, but if 'Thread.interrupt()' is called while waiting in the lock queue, it immediately aborts and throws 'InterruptedException'.",explanation:"Complete method comparative matrix of java.util.concurrent.locks.Lock.",hint:"lock blocks forever; tryLock is non-blocking; tryLock(timeout) is bounded; lockInterruptibly responds to interrupt while waiting.",level:"Intermediate",codeExample:"if (lock.tryLock(1, TimeUnit.SECONDS)) { try { ... } finally { lock.unlock(); } }"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_008 · Topic 2"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Advanced Lock Features"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[t.jsx("code",{className:"text-emerald-400 font-mono",children:"ReentrantLock"})," Features: ",t.jsx("code",{className:"text-sky-400 font-mono",children:"tryLock()"}),", Timeouts & ",t.jsx("code",{className:"text-purple-400 font-mono",children:"lockInterruptibly()"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct resilient locking: comparing non-blocking polling, timed acquisition timeouts, interrupt-responsive queuing with ",t.jsx("code",{className:"text-purple-300 font-mono",children:"lockInterruptibly()"}),", and FIFO fairness policies."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"ReentrantLockAdvancedFeaturesDemo.java",highlightLines:[7,10,14,15,18,19,23,24,28,29,33,34]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Advanced Lock Features FAQs",questions:s})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:a,title:"Module 008_008 Topic 2: ReentrantLock Advanced Features",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_008_topic2_reentrantlock_advanced_features_note.txt"})}),t.jsx(o,{note:"If a user clicks 'Cancel' on a long transfer in your app, 'lockInterruptibly()' lets you cancel their waiting thread immediately! With 'synchronized', the thread would be stuck forever ignoring the cancel button! — Sukanta Hui"})]})}export{x as default};
