import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 4: Synchronized Instance Methods: Implicit Acquisition of 'this' Object Lock\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
class SafeSynchronizedBankAccount {\r
    private int balance = 10000;\r
\r
    public int getBalance() { return balance; }\r
\r
    // 1. SYNCHRONIZED INSTANCE METHOD (Acquires the intrinsic lock of 'this' instance):\r
    public synchronized void withdraw(String studentName, int amount) {\r
        // Exactly equivalent to: synchronized(this) { ... }\r
        if (balance >= amount) {\r
            System.out.printf("[%s] Checked balance (₹%,d >= ₹%,d). Proceeding...%n",\r
                    studentName, balance, amount);\r
            try { Thread.sleep(100); } catch (InterruptedException ignored) {}\r
            balance -= amount;\r
            System.out.printf(">>> [%s] Successfully withdrew ₹%,d! Remaining: ₹%,d%n",\r
                    studentName, amount, balance);\r
        } else {\r
            System.out.printf("[%s] INSUFFICIENT FUNDS! Transaction Rejected (Balance: ₹%,d)%n",\r
                    studentName, balance);\r
        }\r
    }\r
}\r
\r
public class SynchronizedInstanceMethodsDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: SYNCHRONIZED INSTANCE METHODS (this MONITOR) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SafeSynchronizedBankAccount sharedAccount = new SafeSynchronizedBankAccount();\r
\r
        // Two students attempting to withdraw ₹8,000 simultaneously from the SAME account:\r
        Thread swadeep = new Thread(() -> sharedAccount.withdraw("Swadeep", 8000), "Swadeep-Thread");\r
        Thread tuhina = new Thread(() -> sharedAccount.withdraw("Tuhina", 8000), "Tuhina-Thread");\r
\r
        swadeep.start();\r
        tuhina.start();\r
\r
        swadeep.join();\r
        tuhina.join();\r
\r
        System.out.println("\\n>>> FINAL SHARED ACCOUNT STATE (SYNCHRONIZED):");\r
        System.out.printf("  Actual Ending Balance: ₹%,d (100%% THREAD-SAFE! Deficit Prevented!)%n",\r
                sharedAccount.getBalance());\r
\r
        System.out.println("\\n>>> HOW SYNCHRONIZED INSTANCE METHODS WORK:");\r
        System.out.println("  1. When Swadeep calls 'sharedAccount.withdraw()', his thread acquires the monitor lock on 'sharedAccount' (this).");\r
        System.out.println("  2. When Tuhina attempts to call 'sharedAccount.withdraw()', she finds the monitor locked and is put in the BLOCKED state.");\r
        System.out.println("  3. Only after Swadeep completes the method and exits is the lock released, letting Tuhina enter (who then sees balance = ₹2,000 and is rejected safely!).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 4: Synchronized Instance Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SYNCHRONIZED INSTANCE METHODS:\r
   - Declared with 'public synchronized void method()'.\r
   - Acquires intrinsic lock of 'this' object instance.\r
   - Other threads calling synchronized methods on SAME object are BLOCKED.\r
   - Threads calling synchronized methods on DIFFERENT instances run concurrently.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Which lock is acquired when a thread enters a 'synchronized' instance method?",shortAnswer:"A synchronized instance method implicitly acquires the intrinsic monitor lock of the CURRENT instance ('this') on which the method is invoked. Any other thread attempting to call ANY synchronized instance method on that same object instance will be BLOCKED until the first thread exits the method and releases the lock.",explanation:"Standard contract of synchronized instance methods in Java.",hint:"Acquires the intrinsic lock of the 'this' instance on which the method was called.",level:"Beginner",codeExample:"public synchronized void update() { ... } // Identical to synchronized(this) { ... }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Synchronized Methods"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Synchronized Instance Methods: Implicit Acquisition of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"this"})," Object Lock"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Enforce thread-safe transactions: applying ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"synchronized"})," keywords to instance methods to acquire ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this"})," monitor locks and eliminate financial overdraws."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"SynchronizedInstanceMethodsDemo.java",highlightLines:[7,10,14,15,23,24,38,39,45,46]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Synchronized Methods FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 008_003 Topic 4: Synchronized Instance Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic4_synchronized_instance_methods_note.txt"})}),e.jsx(r,{note:"By simply adding the word 'synchronized' to our withdraw method, Swadeep acquires the lock on the account, checks the balance, and withdraws safely! When Tuhina tries, she waits politely until Swadeep is done! No more deficit! — Sukanta Hui"})]})}export{x as default};
