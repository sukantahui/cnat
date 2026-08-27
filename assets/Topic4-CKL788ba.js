import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 008_004: Inter-Thread Communication & Producer-Consumer\r
 * Topic 4: IllegalMonitorStateException: Unowned Lock Enforcement by the JVM\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class IllegalMonitorStateExceptionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: IllegalMonitorStateException ENFORCEMENT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Object lockA = new Object();\r
        Object lockB = new Object();\r
\r
        // 1. MISTAKE 1: Calling wait() on an object WITHOUT ANY synchronized block:\r
        System.out.println(">>> 1. Attempting lockA.wait() without synchronized block:");\r
        try {\r
            lockA.wait(); // Not holding lockA monitor!\r
        } catch (IllegalMonitorStateException e) {\r
            System.out.println("  [CAUGHT EXPECTED EXCEPTION] " + e.getClass().getName());\r
            System.out.println("  Reason: Current thread does NOT own the monitor lock of lockA!");\r
        } catch (InterruptedException ignored) {}\r
\r
        // 2. MISTAKE 2: Synchronizing on Lock A, but calling wait() on Lock B:\r
        System.out.println("\\n>>> 2. Synchronized on lockA, but mistakenly invoking lockB.wait():");\r
        try {\r
            synchronized (lockA) {\r
                System.out.println("  Holding lockA monitor, now calling lockB.wait()...");\r
                lockB.wait(); // Throws IllegalMonitorStateException because thread owns lockA, NOT lockB!\r
            }\r
        } catch (IllegalMonitorStateException e) {\r
            System.out.println("  [CAUGHT EXPECTED EXCEPTION] " + e.getClass().getName());\r
            System.out.println("  Reason: Thread holds lockA, but tried to manipulate lockB's monitor!");\r
        } catch (InterruptedException ignored) {}\r
\r
        System.out.println("\\n>>> GOLDEN RULE FOR AVOIDING IllegalMonitorStateException:");\r
        System.out.println("  - Always ensure the target object passed to 'synchronized(TARGET)' is the EXACT SAME object reference on which '.wait()' or '.notify()' is invoked!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_004: Inter-Thread Communication & Producer-Consumer\r
Topic 4: IllegalMonitorStateException\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ILLEGALMONITORSTATEEXCEPTION:\r
   - RuntimeException thrown by JVM.\r
   - Triggered when calling 'wait()/notify()' without monitor ownership.\r
   - Hazard: Synchronizing on Lock A but calling wait on Lock B.\r
   - Solution: 'synchronized(lock) { lock.wait(); }' (same object!).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What causes a runtime 'IllegalMonitorStateException' in Java?",shortAnswer:"'IllegalMonitorStateException' is an unchecked runtime exception thrown by the JVM whenever a thread attempts to call 'wait()', 'notify()', or 'notifyAll()' on an object without holding that object's intrinsic monitor lock. Common causes include: 1. Calling 'wait()/notify()' completely outside a synchronized block. 2. Synchronizing on object A (e.g. 'synchronized(lockA)') but calling 'wait()/notify()' on object B (e.g. 'lockB.wait()').",explanation:"Standard JVM lock ownership validation check.",hint:"Thrown when calling wait/notify without holding the target object's monitor lock.",level:"Beginner",codeExample:"synchronized(objA) { objB.wait(); } // Throws IllegalMonitorStateException!"}];function g(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_004 · Topic 4"}),t.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"IllegalMonitorStateException"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[t.jsx("code",{className:"text-rose-400 font-mono",children:"IllegalMonitorStateException"}),": Causes & JVM Lock Enforcement"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Debug runtime lock violations: analyzing why calling ",t.jsx("code",{className:"text-rose-300 font-mono",children:"wait()"})," without holding monitor ownership or mismatched lock target references triggers ",t.jsx("code",{className:"text-rose-300 font-mono",children:"IllegalMonitorStateException"}),"."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"IllegalMonitorStateExceptionDemo.java",highlightLines:[7,10,16,17,26,27,28,29,36,37]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"IllegalMonitorStateException FAQs",questions:l})}),t.jsx("section",{className:"space-y-4",children:t.jsx(o,{content:a,title:"Module 008_004 Topic 4: IllegalMonitorStateException",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_004_topic4_illegal_monitor_state_exception_note.txt"})}),t.jsx(r,{note:"Make sure the object inside 'synchronized(...)' is the EXACT SAME object calling '.wait()' or '.notify()'! If you synchronize on lockA but call lockB.wait(), Java will throw an IllegalMonitorStateException every single time! — Sukanta Hui"})]})}export{g as default};
