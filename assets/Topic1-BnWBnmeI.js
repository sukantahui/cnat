import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const c=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 1: The Classic Bank Account Overdraw Race Condition (Check-Then-Act Hazard)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
class UnsafeBankAccount {\r
    private int balance = 10000; // Starting with ₹10,000\r
\r
    public int getBalance() { return balance; }\r
\r
    // UNSAFE WITHDRAWAL (Vulnerable Check-Then-Act Race Condition):\r
    public void withdraw(String studentName, int amount) {\r
        // Step 1: CHECK (Is balance sufficient?)\r
        if (balance >= amount) {\r
            System.out.printf("[%s] Checked balance (₹%,d >= ₹%,d). Proceeding to withdraw...%n",\r
                    studentName, balance, amount);\r
\r
            // Simulating network delay / processing lag between check and act:\r
            try { Thread.sleep(100); } catch (InterruptedException ignored) {}\r
\r
            // Step 2: ACT (Deduct amount)\r
            balance -= amount;\r
            System.out.printf(">>> [%s] Successfully withdrew ₹%,d! Remaining Balance: ₹%,d%n",\r
                    studentName, amount, balance);\r
        } else {\r
            System.out.printf("[%s] INSUFFICIENT FUNDS! Transaction Rejected (Balance: ₹%,d)%n",\r
                    studentName, balance);\r
        }\r
    }\r
}\r
\r
public class BankAccountOverdrawRaceConditionDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: BANK ACCOUNT OVERDRAW RACE CONDITION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        UnsafeBankAccount sharedAccount = new UnsafeBankAccount();\r
\r
        // Two students attempting to withdraw ₹8,000 simultaneously from a ₹10,000 account:\r
        Thread swadeep = new Thread(() -> sharedAccount.withdraw("Swadeep", 8000), "Swadeep-Thread");\r
        Thread tuhina = new Thread(() -> sharedAccount.withdraw("Tuhina", 8000), "Tuhina-Thread");\r
\r
        swadeep.start();\r
        tuhina.start();\r
\r
        swadeep.join();\r
        tuhina.join();\r
\r
        System.out.println("\\n>>> FINAL SHARED ACCOUNT STATE:");\r
        System.out.printf("  Actual Ending Balance: ₹%,d (CRITICAL FINANCIAL OVERDRAW DEFICIT!)%n",\r
                sharedAccount.getBalance());\r
\r
        System.out.println("\\n>>> THE CHECK-THEN-ACT RACE CONDITION HAZARD:");\r
        System.out.println("  1. Swadeep checks: ₹10,000 >= ₹8,000 (TRUE).");\r
        System.out.println("  2. Before Swadeep can deduct, Tuhina checks: ₹10,000 >= ₹8,000 (TRUE).");\r
        System.out.println("  3. Both proceed to deduct ₹8,000 each (Total ₹16,000 withdrawn from a ₹10,000 balance!).");\r
        System.out.println("  4. Final balance becomes -₹6,000 (Catastrophic overdraft).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 1: Bank Account Overdraw Race Condition\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CHECK-THEN-ACT HAZARD:\r
   - Thread A checks condition (balance >= amount → true).\r
   - Thread B checks condition before Thread A acts (balance >= amount → true).\r
   - Both threads deduct amount → account overdrawn!\r
   - Must make the Check AND Act steps indivisible (atomic) using 'synchronized'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Explain how a 'Check-Then-Act' race condition causes a bank account balance to become negative in multithreaded systems.",shortAnswer:"A 'Check-Then-Act' race condition occurs when a thread checks a condition (e.g. 'if (balance >= amount)'), but before it can execute the corresponding action (e.g. 'balance -= amount'), another thread interleaves, observes the same unmutated state, and executes its own action. As a result, both threads act on stale verification, executing mutually exclusive withdrawals that exceed the available balance and produce a negative deficit.",explanation:"Classic concurrency vulnerability pattern found in financial and inventory software.",hint:"Both threads pass the 'if (balance >= amount)' check before either deducts, causing double spending.",level:"Beginner",codeExample:"if (balance >= amount) { Thread.sleep(delay); balance -= amount; } // Race condition!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Account Overdraw"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Classic Bank Account Overdraw: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Check-Then-Act"})," Race Condition"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Simulate financial concurrency bugs: observing how simultaneous withdrawals bypass balance checks, produce negative deficits, and demonstrate the danger of unsynchronized check-then-act logic."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:c,title:"BankAccountOverdrawRaceConditionDemo.java",highlightLines:[7,10,13,14,21,22,38,39,45,46]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Account Overdraw FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 008_003 Topic 1: Bank Account Overdraw Race Condition",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic1_bank_account_overdraw_note.txt"})}),e.jsx(r,{note:"If Swadeep and Tuhina both swipe their debit cards at the exact same second for ₹8,000 on an account with only ₹10,000, both cards pass the check and the bank loses ₹6,000! That is why the check and the deduction MUST be locked together as one atomic unit! — Sukanta Hui"})]})}export{x as default};
