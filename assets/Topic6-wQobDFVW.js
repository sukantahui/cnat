import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const c=`/**\r
 * Java Core Tutorial - Module 012_002: Core Banking Capstone\r
 * Topic 6: Thread-Safe Banking Concurrency - High-Throughput Accounts\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.banking;\r
\r
import java.math.BigDecimal;\r
import java.util.concurrent.locks.ReentrantReadWriteLock;\r
\r
public class ThreadSafeBankingConcurrencyDemo {\r
\r
    public static class ConcurrentBankAccount {\r
        private final String accountNumber;\r
        private BigDecimal balance;\r
        private final ReentrantReadWriteLock rwLock = new ReentrantReadWriteLock(true); // Fair lock\r
\r
        public ConcurrentBankAccount(String accountNumber, BigDecimal initialBalance) {\r
            this.accountNumber = accountNumber;\r
            this.balance = initialBalance;\r
        }\r
\r
        // Concurrent reads (many threads can read balance simultaneously):\r
        public BigDecimal getBalance() {\r
            rwLock.readLock().lock();\r
            try {\r
                return balance;\r
            } finally {\r
                rwLock.readLock().unlock();\r
            }\r
        }\r
\r
        // Exclusive write (only 1 thread can deposit/withdraw at a time):\r
        public void deposit(BigDecimal amount) {\r
            rwLock.writeLock().lock();\r
            try {\r
                balance = balance.add(amount);\r
                System.out.println("   [DEPOSIT]: Added ₹" + amount + " | New Balance: ₹" + balance);\r
            } finally {\r
                rwLock.writeLock().unlock();\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THREAD-SAFE CONCURRENT BANKING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ConcurrentBankAccount account = new ConcurrentBankAccount("SB-BKP-101", new BigDecimal("10000.00"));\r
        account.deposit(new BigDecimal("5000.00"));\r
        System.out.println("Current Verified Balance: ₹" + account.getBalance());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_002: Core Banking Capstone\r
Topic 6: Thread-Safe Banking Concurrency\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. REENTRANTREADWRITELOCK IN BANKING:\r
   - Read lock  : Shared by multiple balance checking threads.\r
   - Write lock : Exclusive lock during money withdrawal or deposit.\r
\r
2. FAIR LOCKING ('new ReentrantReadWriteLock(true)'):\r
   - Grants lock to longest waiting thread, preventing thread starvation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why is ReentrantReadWriteLock preferred over standard synchronized blocks for banking account state?",shortAnswer:"Because read operations (checking balances and statements) outnumber write operations (fund transfers) by 100 to 1; ReentrantReadWriteLock allows unlimited simultaneous concurrent reads without blocking, only acquiring an exclusive lock during actual balance updates.",explanation:"Drastically boosts read throughput under high concurrency.",hint:"Allows simultaneous concurrent reads while keeping writes exclusive.",level:"Intermediate",codeExample:"rwLock.readLock().lock(); try { return balance; } finally { rwLock.readLock().unlock(); }"},{question:"What is the danger of not unlocking ReentrantReadWriteLock inside a finally block?",shortAnswer:"If an unexpected exception occurs before reaching unlock(), the lock remains held forever, permanently deadlocking all subsequent threads attempting to access that account.",explanation:"Mandatory lock safety pattern in Java.",hint:"Always place lock.unlock() in the finally block.",level:"Beginner",codeExample:"try { ... } finally { lock.unlock(); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_002 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 1: Core Banking System"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Thread-Safe Concurrency: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"High-Throughput Accounts"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Preventing race conditions: handling concurrent deposits, withdrawals, and balance inquiries using ReentrantReadWriteLock and optimistic retries."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:c,title:"ThreadSafeBankingConcurrencyDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Core Banking Capstone FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 012_002 Topic 6: Thread-Safe Banking Concurrency",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_002_topic6_threadsafe_banking_concurrency_note.txt"})}),e.jsx(t,{note:"When thousands of UPI transactions hit the bank at once, multiple threads will access the same account! We use ReentrantReadWriteLock so multiple users can check their balance concurrently, while writes get exclusive access! — Sukanta Hui"})]})}export{g as default};
