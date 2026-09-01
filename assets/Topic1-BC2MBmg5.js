import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 008_004: Inter-Thread Communication & Producer-Consumer\r
 * Topic 1: The Object Signaling API: wait(), wait(timeout), notify() & notifyAll()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ObjectSignalingApiOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE 4 OBJECT SIGNALING METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 METHODS DECLARED IN java.lang.Object FOR THREAD SIGNALING:");\r
        System.out.println("+-----------------------+-------------------+---------------------------------------------------+");\r
        System.out.println("| Method Signature      | Throws Checked?   | Description & State Transition                    |");\r
        System.out.println("+-----------------------+-------------------+---------------------------------------------------+");\r
        System.out.println("| 1. void wait()        | InterruptedException| Releases monitor lock; waits indefinitely (WAITING)|");\r
        System.out.println("| 2. void wait(millis)  | InterruptedException| Releases monitor lock; waits with timeout (TIMED)  |");\r
        System.out.println("| 3. void notify()      | None              | Wakes up ONE arbitrary thread from Wait Set       |");\r
        System.out.println("| 4. void notifyAll()   | None              | Wakes up ALL threads from Wait Set (Recommended!) |");\r
        System.out.println("+-----------------------+-------------------+---------------------------------------------------+");\r
\r
        System.out.println("\\n>>> THE 2 PREREQUISITES FOR CALLING ANY OF THESE METHODS:");\r
        System.out.println("  1. The calling thread MUST OWN the intrinsic monitor lock of that exact object!");\r
        System.out.println("  2. Must be called inside a 'synchronized(targetObject) { ... }' block or synchronized method.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_004: Inter-Thread Communication & Producer-Consumer\r
Topic 1: Object Signaling API\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OBJECT SIGNALING API:\r
   - 'wait()': Releases lock, enters WAITING state.\r
   - 'wait(millis)': Releases lock with timeout (TIMED_WAITING).\r
   - 'notify()': Wakes 1 arbitrary waiting thread.\r
   - 'notifyAll()': Wakes ALL waiting threads (safest choice).\r
   - All require holding the object's synchronized lock!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"List the 4 inter-thread communication methods declared in 'java.lang.Object' and their basic functions.",shortAnswer:"1. 'wait()': releases the object's monitor lock and places the current thread into the object's Wait Set indefinitely (WAITING state). 2. 'wait(long timeoutMillis)': releases lock and waits until signaled OR until the specified timeout expires (TIMED_WAITING state). 3. 'notify()': wakes up a single arbitrary thread currently waiting in the object's Wait Set. 4. 'notifyAll()': wakes up ALL threads currently waiting in the object's Wait Set, allowing them to compete for the monitor lock.",explanation:"Fundamental Object signaling API in Java.",hint:"wait(), wait(timeout), notify(), and notifyAll() declared directly on java.lang.Object.",level:"Beginner",codeExample:"lock.wait(); // Releases lock and sleeps | lock.notifyAll(); // Wakes up all waiters"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_004 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Object Signaling API"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.lang.Object"})," Signaling API: ",e.jsx("code",{className:"text-sky-400 font-mono",children:"wait()"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"notify()"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"notifyAll()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Survey the core signaling suite: reviewing method signatures, exception contracts, state transitions, and lock ownership prerequisites across ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"wait()"})," and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"notifyAll()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"ObjectSignalingApiOverviewDemo.java",highlightLines:[7,10,14,15,16,17,18,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Object Signaling API FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:o,title:"Module 008_004 Topic 1: Object Signaling API",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_004_topic1_object_signaling_api_note.txt"})}),e.jsx(a,{note:"Every single object in Java inherits wait(), notify(), and notifyAll() from java.lang.Object! Notice that wait() throws InterruptedException because waiting threads can be interrupted, while notify() does not! — Sukanta Hui"})]})}export{g as default};
