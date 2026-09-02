import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 012_002: Core Banking Capstone\r
 * Topic 4: Atomic Double-Entry Transfers - ACID Transactions\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.banking;\r
\r
import java.math.BigDecimal;\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
import java.time.Instant;\r
import java.util.UUID;\r
\r
public class AtomicDoubleEntryTransfersDemo {\r
\r
    public static class BankingService {\r
\r
        public void transferFunds(Connection conn, String fromAcc, String toAcc, BigDecimal amount) throws SQLException {\r
            if (amount.compareTo(BigDecimal.ZERO) <= 0) {\r
                throw new IllegalArgumentException("Transfer amount must be positive!");\r
            }\r
\r
            // Enforce deterministic account lock ordering to prevent database deadlocks:\r
            String firstLock = fromAcc.compareTo(toAcc) < 0 ? fromAcc : toAcc;\r
            String secondLock = fromAcc.compareTo(toAcc) < 0 ? toAcc : fromAcc;\r
\r
            System.out.println("   [LOCK ACQUISITION]: Acquiring locks in order: " + firstLock + " -> " + secondLock);\r
\r
            conn.setAutoCommit(false); // Begin ACID Transaction!\r
            try {\r
                // 1. Deduct from Source Account:\r
                System.out.println("   [STEP 1]: Debiting ₹" + amount + " from " + fromAcc);\r
\r
                // 2. Credit to Target Account:\r
                System.out.println("   [STEP 2]: Crediting ₹" + amount + " to " + toAcc);\r
\r
                // 3. Write Immutable Audit Ledger Entries (Double-Entry):\r
                System.out.println("   [STEP 3]: Writing matching Double-Entry records to ledger_entries table");\r
\r
                conn.commit(); // Commit all 3 steps atomically!\r
                System.out.println("   >>> [TX SUCCESS]: Fund transfer committed successfully! ✅\r
");\r
\r
            } catch (Exception ex) {\r
                System.err.println("   >>> [TX ERROR]: Failure detected. Rolling back transaction! ❌");\r
                conn.rollback();\r
                throw ex;\r
            } finally {\r
                conn.setAutoCommit(true);\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: ATOMIC DOUBLE-ENTRY TRANSFERS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("Demonstrating ACID transaction handling with deadlock prevention.");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_002: Core Banking Capstone\r
Topic 4: Atomic Double-Entry Transfers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DEADLOCK PREVENTION IN TRANSFERS:\r
   - Always lock accounts in consistent alphabetical/numerical order\r
     regardless of who is sending and who is receiving!\r
\r
2. TRANSACTION GUARANTEE:\r
   - 'conn.setAutoCommit(false)' → Debit → Credit → Write Audit → 'conn.commit()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,c=[{question:"How does sorting account numbers before acquiring locks prevent deadlocks during concurrent reciprocal transfers (A->B and B->A)?",shortAnswer:"By always acquiring locks in a globally consistent order (e.g. Account A then Account B), neither thread can ever hold one lock while waiting for the other in reverse order, breaking the circular wait condition necessary for deadlocks.",explanation:"Standard resource hierarchy deadlock prevention technique.",hint:"Breaks circular wait condition by imposing a global lock acquisition order.",level:"Advanced",codeExample:"String first = accA.compareTo(accB) < 0 ? accA : accB;"},{question:"What must always be called in the catch block of a multi-statement JDBC financial transaction?",shortAnswer:"conn.rollback() to undo all intermediate uncommitted operations and restore the database to its pristine pre-transaction state.",explanation:"Ensures the Atomicity property of ACID.",hint:"conn.rollback() to revert partial writes.",level:"Beginner",codeExample:"catch (SQLException e) { conn.rollback(); }"}];function g(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_002 · Topic 4"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 1: Core Banking System"})]}),n.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Atomic Double-Entry Transfers: ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"ACID Transactions"})]}),n.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Mission-critical fund movement: executing atomic debit and credit updates with savepoints, rollback handlers, and lock ordering."})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:a,title:"AtomicDoubleEntryTransfersDemo.java",highlightLines:[18,25,34,43]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{title:"Core Banking Capstone FAQs",questions:c})}),n.jsx("section",{className:"space-y-4",children:n.jsx(r,{content:i,title:"Module 012_002 Topic 4: Atomic Double-Entry Transfers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_002_topic4_atomic_double_entry_transfers_note.txt"})}),n.jsx(o,{note:"This is the crown jewel of banking software: an atomic fund transfer! If debiting from Account A succeeds, but crediting Account B fails, the transaction rolls back completely so not a single rupee is lost! — Sukanta Hui"})]})}export{g as default};
