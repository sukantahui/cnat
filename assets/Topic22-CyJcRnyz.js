import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 22: Inter-Bank Transfer - Debit/Credit Atomicity Transaction Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.ResultSet;\r
import java.sql.SQLException;\r
\r
public class InterbankTransferCapstoneDemo {\r
\r
    public static boolean transferFunds(Connection conn, String fromAccount, String toAccount, double amount) throws SQLException {\r
        if (amount <= 0.0) {\r
            throw new IllegalArgumentException("Transfer amount must be positive!");\r
        }\r
\r
        boolean previousAutoCommit = conn.getAutoCommit();\r
        conn.setAutoCommit(false); // START ATOMIC TRANSACTION\r
\r
        String checkBalanceSql = "SELECT balance FROM accounts WHERE account_num = ? FOR UPDATE"; // Exclusive Row Lock!\r
        String debitSql        = "UPDATE accounts SET balance = balance - ? WHERE account_num = ?";\r
        String creditSql       = "UPDATE accounts SET balance = balance + ? WHERE account_num = ?";\r
        String auditSql        = "INSERT INTO transfer_logs (sender, receiver, amount, timestamp) VALUES (?, ?, ?, NOW())";\r
\r
        try (PreparedStatement psCheck = conn.prepareStatement(checkBalanceSql);\r
             PreparedStatement psDebit = conn.prepareStatement(debitSql);\r
             PreparedStatement psCredit = conn.prepareStatement(creditSql);\r
             PreparedStatement psAudit = conn.prepareStatement(auditSql)) {\r
\r
            // Step 1: Lock and check sender's balance (FOR UPDATE)\r
            psCheck.setString(1, fromAccount);\r
            try (ResultSet rs = psCheck.executeQuery()) {\r
                if (!rs.next()) {\r
                    throw new SQLException("Sender account not found: " + fromAccount);\r
                }\r
                double currentBalance = rs.getDouble("balance");\r
                if (currentBalance < amount) {\r
                    throw new SQLException("Insufficient funds! Available: ₹" + currentBalance + ", Requested: ₹" + amount);\r
                }\r
            }\r
\r
            // Step 2: Debit sender account\r
            psDebit.setDouble(1, amount);\r
            psDebit.setString(2, fromAccount);\r
            psDebit.executeUpdate();\r
\r
            // Step 3: Credit receiver account\r
            psCredit.setDouble(1, amount);\r
            psCredit.setString(2, toAccount);\r
            int updatedReceiver = psCredit.executeUpdate();\r
            if (updatedReceiver == 0) {\r
                throw new SQLException("Receiver account not found: " + toAccount);\r
            }\r
\r
            // Step 4: Write audit log\r
            psAudit.setString(1, fromAccount);\r
            psAudit.setString(2, toAccount);\r
            psAudit.setDouble(3, amount);\r
            psAudit.executeUpdate();\r
\r
            // Step 5: ALL STEPS SUCCEEDED -> COMMIT ATOMIC TRANSACTION!\r
            conn.commit();\r
            System.out.println("   [TRANSFER SUCCESS]: ₹" + amount + " transferred atomically from " + fromAccount + " to " + toAccount + "! ✅");\r
            return true;\r
\r
        } catch (Exception ex) {\r
            // Step 6: ANY FAILURE -> ROLLBACK COMPLETELY!\r
            System.err.println("   [TRANSFER FAILED]: " + ex.getMessage() + " -> Rolling back entire transaction! 🛡️");\r
            conn.rollback();\r
            return false;\r
\r
        } finally {\r
            // Step 7: Restore connection auto-commit\r
            conn.setAutoCommit(previousAutoCommit);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 22: INTER-BANK TRANSFER ATOMICITY CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE COMPLETE 7-STEP FINANCIAL TRANSACTION BLUEPRINT:");\r
        System.out.println("  1. conn.setAutoCommit(false);");\r
        System.out.println("  2. 'SELECT ... FOR UPDATE' to acquire pessimistic exclusive lock and verify balance.");\r
        System.out.println("  3. Execute Debit DML.");\r
        System.out.println("  4. Execute Credit DML.");\r
        System.out.println("  5. Insert Audit Trail DML.");\r
        System.out.println("  6. conn.commit() in try block; conn.rollback() in catch block.");\r
        System.out.println("  7. Restore conn.setAutoCommit(true) in finally block.\\n");\r
\r
        System.out.println("==========================================================================");\r
        System.out.println(" MODULE 011_004 COMPLETE: TRANSACTION MANAGEMENT & ACID MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 22: Inter-Bank Transfer Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PESSIMISTIC LOCKING WITH 'FOR UPDATE':\r
   - 'SELECT ... FOR UPDATE' locks the matching rows, preventing race conditions (e.g. double spending)\r
     where two concurrent transfers attempt to spend the same balance simultaneously.\r
\r
2. AUDIT TRAIL IMMUTABILITY:\r
   - Audit logging inside the same transaction ensures that the audit record exists if and only if\r
     the financial transfer itself successfully committed!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is 'SELECT ... FOR UPDATE' critical when reading account balances in a financial transfer transaction?",shortAnswer:"It acquires an exclusive pessimistic lock (X-Lock) on the account row, preventing concurrent transactions from reading or modifying the same balance until this transaction commits, eliminating race conditions and double-spending bugs.",explanation:"Pessimistic concurrency control for financial integrity.",hint:"Acquires an exclusive lock on the row to prevent concurrent race conditions.",level:"Intermediate",codeExample:"SELECT balance FROM accounts WHERE id = ? FOR UPDATE;"},{question:"Why should the financial audit log INSERT be included in the same transaction as the transfer operations?",shortAnswer:"To guarantee atomicity between the balance modification and the audit record: if the transfer fails and rolls back, the audit record is also rolled back; if the transfer succeeds, the audit trail is guaranteed to exist.",explanation:"Preserves 1-to-1 correspondence between ledger movements and audit logs.",hint:"Guarantees audit records exist if and only if the transfer actually committed.",level:"Intermediate",codeExample:"Debit + Credit + Audit Log = Single Atomic Transaction."}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 22"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Inter-Bank Transfer: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Debit/Credit Atomicity Transaction"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Mission-critical money movement: building an enterprise atomic fund transfer engine with balance checks, row locking, and rollback safeguards."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"InterbankTransferCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Transaction & ACID FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 011_004 Topic 22: Inter-Bank Transfer Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic22_interbank_transfer_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 4 of Segment 11! You now understand the full power of ACID transactions, isolation levels, MVCC, savepoints, and financial safety! Next up: Batch Processing & Large-Scale Data Handling! — Sukanta Hui"})]})}export{T as default};
