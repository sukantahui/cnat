import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 10: Defensive Concurrency: Private Final Lock Objects vs Public 'this' Exposures\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
class SecureStudentLedger {\r
\r
    // 1. DEFENSIVE CONCURRENCY PATTERN: Private Final Lock Object:\r
    // - 'private': Prevents outside classes from synchronizing on your internal lock!\r
    // - 'final'  : Prevents reference reassignment (guarantees lock target identity NEVER changes!).\r
    private final Object internalLock = new Object();\r
\r
    private int totalRecords = 0;\r
\r
    public void addRecord(String studentName) {\r
        synchronized (internalLock) {\r
            totalRecords++;\r
            System.out.printf("[%s] Securely added record for %s (Total: %d)%n",\r
                    Thread.currentThread().getName(), studentName, totalRecords);\r
        }\r
    }\r
\r
    public int getTotalRecords() {\r
        synchronized (internalLock) {\r
            return totalRecords;\r
        }\r
    }\r
}\r
\r
public class PrivateFinalLockIdiomDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: PRIVATE FINAL LOCK OBJECT IDIOM - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SecureStudentLedger ledger = new SecureStudentLedger();\r
\r
        Thread t1 = new Thread(() -> ledger.addRecord("Swadeep"), "Worker-1");\r
        Thread t2 = new Thread(() -> ledger.addRecord("Tuhina"), "Worker-2");\r
\r
        t1.start();\r
        t2.start();\r
\r
        t1.join();\r
        t2.join();\r
\r
        System.out.println("\\n>>> WHY 'synchronized(this)' IS VULNERABLE TO CLIENT-SIDE LOCKING ATTACKS:");\r
        System.out.println("  - If your class uses 'synchronized(this)', any rogue or poorly written external class can do: 'synchronized(ledger) { Thread.sleep(999999); }'.");\r
        System.out.println("  - This hijacks your object's monitor from the outside and freezes your entire class (Denial of Service attack).");\r
        System.out.println("  - 'private final Object lock = new Object()' completely encapsulates the lock so external code CANNOT see or hijack it!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 10: Private Final Lock Objects\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PRIVATE FINAL LOCK IDIOM:\r
   - 'private final Object lock = new Object();'.\r
   - 'private': Encapsulates lock; prevents external Denial-of-Service lock hijacking.\r
   - 'final': Guarantees lock reference never changes.\r
   - Replaces 'synchronized(this)' in robust library and enterprise code.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does Joshua Bloch (Effective Java) strongly recommend using 'private final Object lock = new Object()' instead of synchronizing on 'this' or publicly accessible objects?",shortAnswer:"1. 'Encapsulation & Security': If a class synchronizes on 'this' (or public fields), external clients or malicious subclasses can synchronize on the instance directly ('synchronized(instance)'), potentially causing accidental deadlocks or Denial-of-Service lock hijacking. A 'private' lock object is completely encapsulated and invisible to outside callers. 2. 'Immutability (final)': Declaring the lock 'final' guarantees that the object reference can never be reassigned, preventing threads from synchronizing on different object references.",explanation:"Effective Java Item 78 and secure concurrency coding guidelines.",hint:"Encapsulates the lock to prevent external classes from hijacking 'this', and 'final' prevents lock reassignment.",level:"Intermediate",codeExample:"private final Object lock = new Object(); // 100% encapsulated lock"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Private Final Locks"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Defensive Concurrency: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"private final Object lock"})," Idiom"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Harden concurrency boundaries: using encapsulated ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"private final Object"})," lock targets to prevent external client-side lock hijacking and denial-of-service deadlocks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"PrivateFinalLockIdiomDemo.java",highlightLines:[7,10,15,16,20,21,38,39,43,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Private Final Lock FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 008_003 Topic 10: Private Final Lock Idiom",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic10_private_final_lock_idiom_note.txt"})}),e.jsx(a,{note:"Never let outside callers see your lock! If you synchronize on 'this', anyone can write 'synchronized(yourObject)' and freeze your entire class! Always create a 'private final Object lock = new Object()' to keep your synchronization completely private and safe! — Sukanta Hui"})]})}export{x as default};
