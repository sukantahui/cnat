import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const n=`/**\r
 * Java Core Tutorial - Module 008_008: Explicit Locks & Synchronizers\r
 * Topic 6: StampedLock: Stamp-Based Optimistic Reading & Write Locking in Java 8+\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.locks.StampedLock;\r
\r
class OptimisticPoint2D {\r
    private double x, y;\r
    private final StampedLock sl = new StampedLock();\r
\r
    // 1. Exclusive Write Lock:\r
    public void move(double deltaX, double deltaY) {\r
        long stamp = sl.writeLock(); // Acquires exclusive write lock\r
        try {\r
            x += deltaX;\r
            y += deltaY;\r
        } finally {\r
            sl.unlockWrite(stamp);\r
        }\r
    }\r
\r
    // 2. OPTIMISTIC READ (Zero locking overhead!):\r
    public double distanceFromOrigin() {\r
        // Step A: Attempt non-blocking optimistic read with a stamp token:\r
        long stamp = sl.tryOptimisticRead();\r
        double curX = x, curY = y;\r
\r
        // Step B: Validate if a writer intervened during our read:\r
        if (!sl.validate(stamp)) {\r
            // Step C: Writer intervened! Fallback to a real pessimistic read lock:\r
            stamp = sl.readLock();\r
            try {\r
                curX = x;\r
                curY = y;\r
            } finally {\r
                sl.unlockRead(stamp);\r
            }\r
        }\r
        return Math.sqrt(curX * curX + curY * curY);\r
    }\r
}\r
\r
public class StampedLockOptimisticReadingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: StampedLock & OPTIMISTIC READING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        OptimisticPoint2D point = new OptimisticPoint2D();\r
        point.move(30, 40);\r
\r
        System.out.printf(">>> Distance calculated via StampedLock: %.2f%n", point.distanceFromOrigin());\r
\r
        System.out.println("\\n>>> WHY StampedLock OUTPERFORMS ReentrantReadWriteLock:");\r
        System.out.println("  1. Stamp-based Token        : Validates state changes without modifying shared CPU memory headers.");\r
        System.out.println("  2. Writers Never Starved    : Optimistic reads do NOT block writers!");\r
        System.out.println("  3. Non-Reentrant by Design  : Extreme raw performance (Warning: self-deadlock if re-entered!).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_008: Explicit Locks & Synchronizers\r
Topic 6: StampedLock & Optimistic Reading\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STAMPEDLOCK (JAVA 8+):\r
   - 3 Modes: WriteLock, Pessimistic ReadLock, Optimistic Read.\r
   - 'tryOptimisticRead()': Zero locking, returns a long stamp token.\r
   - 'validate(stamp)': Checks if a write occurred during the read.\r
   - Eliminates writer starvation (readers do not block writers).\r
   - NOT REENTRANT (Calling lock() twice from same thread will self-deadlock!).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does 'StampedLock.tryOptimisticRead()' work in Java 8 and why is it faster than ReentrantReadWriteLock?",shortAnswer:"'StampedLock' introduces stamp-based tokens (long values) and a 3rd locking mode: 'Optimistic Read'. Calling 'sl.tryOptimisticRead()' returns a stamp token WITHOUT acquiring any lock or modifying any memory headers (0% CPU bus synchronization). The thread reads the fields and then calls 'sl.validate(stamp)'. If no write lock was acquired in the interim, the validation succeeds and the read completes with zero locking overhead. If a write intervened, the thread falls back to a standard pessimistic 'sl.readLock()'. Because optimistic reads do not block writers, writer starvation is completely eliminated.",explanation:"Java 8 advanced lock design from Doug Lea (JSR-166).",hint:"tryOptimisticRead() acquires no lock; validate(stamp) checks if a writer intervened; eliminates writer starvation.",level:"Advanced",codeExample:"long stamp = sl.tryOptimisticRead(); ... if (!sl.validate(stamp)) stamp = sl.readLock();"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_008 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"StampedLock"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"StampedLock"})," Overview: Optimistic Reading & Zero Lock Contention"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Harness Java 8 lock optimizations: executing stamp-based optimistic reads with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"tryOptimisticRead()"}),", validating stamp integrity with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"validate()"}),", and preventing writer starvation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"StampedLockOptimisticReadingDemo.java",highlightLines:[7,10,14,15,23,24,28,29,30,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"StampedLock FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:s,title:"Module 008_008 Topic 6: StampedLock & Optimistic Reading",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_008_topic6_stampedlock_optimistic_reading_note.txt"})}),e.jsx(r,{note:"StampedLock's optimistic read is like looking at a price tag without touching the item! You just glance at it (get a stamp) and check if anyone changed the tag while you were looking (validate). If nobody did, you didn't waste a single millisecond locking! — Sukanta Hui"})]})}export{h as default};
