import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 8: Breaking Deadlocks with Global Lock Ordering (Deterministic Sequence)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
class OrderedBankAccount {\r
    private final int accountId;\r
    private int balance;\r
\r
    public OrderedBankAccount(int accountId, int balance) {\r
        this.accountId = accountId;\r
        this.balance = balance;\r
    }\r
\r
    public int getAccountId() { return accountId; }\r
    public int getBalance() { return balance; }\r
\r
    // IMMUNE TO DEADLOCKS VIA GLOBAL DETERMINISTIC LOCK ORDERING:\r
    public static void transferMoney(OrderedBankAccount from, OrderedBankAccount to, int amount) {\r
        // Determine global lock acquisition order based on unique accountId:\r
        OrderedBankAccount firstLock = from.getAccountId() < to.getAccountId() ? from : to;\r
        OrderedBankAccount secondLock = from.getAccountId() < to.getAccountId() ? to : from;\r
\r
        // Acquire locks in strict ascending accountId order regardless of transfer direction:\r
        synchronized (firstLock) {\r
            synchronized (secondLock) {\r
                if (from.balance >= amount) {\r
                    from.balance -= amount;\r
                    to.balance += amount;\r
                    System.out.printf("[%s] Transferred ₹%,d from Acct #%d to Acct #%d [Safe Global Order]%n",\r
                            Thread.currentThread().getName(), amount, from.accountId, to.accountId);\r
                }\r
            }\r
        }\r
    }\r
}\r
\r
public class GlobalLockOrderingDeadlockImmunityDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: GLOBAL LOCK ORDERING DEADLOCK IMMUNITY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        OrderedBankAccount acct1 = new OrderedBankAccount(101, 50000); // Swadeep\r
        OrderedBankAccount acct2 = new OrderedBankAccount(202, 50000); // Tuhina\r
\r
        // Bidirectional simultaneous transfers (Classic Deadlock Setup):\r
        // Thread 1: Transfers 101 -> 202\r
        Thread t1 = new Thread(() -> {\r
            for (int i = 0; i < 500; i++) {\r
                OrderedBankAccount.transferMoney(acct1, acct2, 10);\r
            }\r
        }, "Transfer-Swadeep-to-Tuhina");\r
\r
        // Thread 2: Transfers 202 -> 101 (Opposite direction!)\r
        Thread t2 = new Thread(() -> {\r
            for (int i = 0; i < 500; i++) {\r
                OrderedBankAccount.transferMoney(acct2, acct1, 10);\r
            }\r
        }, "Transfer-Tuhina-to-Swadeep");\r
\r
        t1.start();\r
        t2.start();\r
\r
        t1.join();\r
        t2.join();\r
\r
        System.out.println("\\n>>> 1,000 BIDIRECTIONAL TRANSFERS COMPLETED WITH ZERO DEADLOCKS!");\r
        System.out.printf("  Acct 101 Balance: ₹%,d | Acct 202 Balance: ₹%,d (100%% INTACT!)%n",\r
                acct1.getBalance(), acct2.getBalance());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 8: Global Lock Ordering\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GLOBAL LOCK ORDERING:\r
   - Problem: Inverted lock acquisition (A → B vs B → A) deadlocks.\r
   - Solution: Sort lock targets deterministically before acquiring.\r
   - Compare 'accountId' or 'System.identityHashCode()'.\r
   - Both threads acquire smaller ID first, then larger ID.\r
   - 100% immune to deadlocks in bidirectional transfers!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How does Global Lock Ordering prevent deadlocks during bidirectional bank account money transfers?",shortAnswer:"In bidirectional transfers, Thread 1 transfers from Account A to B (attempting Lock A then B), while Thread 2 transfers from B to A (attempting Lock B then A), creating an inverted lock acquisition deadlock. Global Lock Ordering eliminates this by establishing a deterministic tie-breaker (e.g. comparing unique 'accountId's or 'System.identityHashCode()'). Both threads are forced to acquire the lower ID lock first, then the higher ID lock. Because both threads acquire locks in the exact same sequence (Lock A then Lock B), circular wait is eliminated and deadlocks become impossible.",explanation:"Canonical deadlock prevention pattern from Java Concurrency in Practice (Chapter 10).",hint:"Always acquire locks in ascending order of unique account ID so both threads acquire Lock 101 before Lock 202.",level:"Intermediate",codeExample:"Lock first = id1 < id2 ? lock1 : lock2; Lock second = id1 < id2 ? lock2 : lock1;"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Global Lock Ordering"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Breaking Deadlocks with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Global Lock Ordering"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Implement deterministic lock hierarchies: sorting lock targets by unique IDs to eliminate inverted acquisition cycles and achieve 100% deadlock immunity during bidirectional transfers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"GlobalLockOrderingDeadlockImmunityDemo.java",highlightLines:[7,10,19,20,21,24,25,45,46,52,53]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Global Lock Ordering FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:c,title:"Module 008_005 Topic 8: Global Lock Ordering",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic8_global_lock_ordering_note.txt"})}),e.jsx(a,{note:"Whenever you have to lock two objects together (like transferring money between two accounts), sort them by ID first! Both threads will always lock Account #101 before Account #202, making deadlocks completely impossible! — Sukanta Hui"})]})}export{b as default};
