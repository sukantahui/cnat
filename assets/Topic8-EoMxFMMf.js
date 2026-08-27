import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 8: Committing Transactions - connection.commit()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.SQLException;\r
\r
public class CommittingTransactionsDemo {\r
\r
    public static void processScholarshipDistribution(Connection conn, int studentId, double amount) throws SQLException {\r
        conn.setAutoCommit(false); // Begin transaction\r
\r
        String debitAcademyFund = "UPDATE academy_funds SET balance = balance - ? WHERE center = 'Barrackpore'";\r
        String creditStudent    = "UPDATE students SET scholarship = scholarship + ? WHERE student_id = ?";\r
\r
        try (PreparedStatement ps1 = conn.prepareStatement(debitAcademyFund);\r
             PreparedStatement ps2 = conn.prepareStatement(creditStudent)) {\r
\r
            // Step 1: Debit academy treasury\r
            ps1.setDouble(1, amount);\r
            ps1.executeUpdate();\r
\r
            // Step 2: Credit student scholarship\r
            ps2.setDouble(1, amount);\r
            ps2.setInt(2, studentId);\r
            ps2.executeUpdate();\r
\r
            // Step 3: COMMIT FLUSH\r
            conn.commit();\r
            System.out.println("   [SUCCESS]: Scholarship distributed and transaction committed!");\r
\r
        } catch (SQLException ex) {\r
            conn.rollback();\r
            throw ex;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: COMMITTING TRANSACTIONS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHAT HAPPENS DURING conn.commit():");\r
        System.out.println("  1. Flushes modified buffer pages into Write-Ahead Log (WAL) on disk.");\r
        System.out.println("  2. Releases all Exclusive Locks (X-Locks) held on modified rows.");\r
        System.out.println("  3. Makes changes permanently visible to other database users.");\r
        System.out.println("  4. Starts a new empty transaction automatically for the connection.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 8: Committing Transactions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT 'commit()' DOES:\r
   - Persists all SQL changes executed since the last commit or rollback.\r
   - Releases all held database locks.\r
\r
2. PITFALL:\r
   - Calling 'commit()' when auto-commit is enabled (true) throws 'SQLException: Can't call commit when autocommit=true'\r
     in many JDBC drivers!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What happens if an application calls connection.commit() while auto-commit is still set to true?",shortAnswer:"The JDBC driver may throw a java.sql.SQLException (e.g. 'Can't call commit when autocommit=true' in MySQL/Oracle) or ignore it as a no-op.",explanation:"Always call conn.setAutoCommit(false) before invoking commit().",hint:"Throws java.sql.SQLException on many drivers.",level:"Beginner",codeExample:"conn.setAutoCommit(false); // Required before conn.commit()"},{question:"What happens to locks held on database rows when connection.commit() executes?",shortAnswer:"All shared and exclusive row locks acquired during the transaction are immediately released by the database engine, allowing other concurrent transactions to access those rows.",explanation:"Releasing locks terminates lock contention.",hint:"All acquired database locks are immediately released.",level:"Intermediate",codeExample:"commit() -> Releases X-Locks on updated rows."}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Committing Transactions: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"connection.commit()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Flushing mutations: writing changes permanently to database tables, releasing row and table locks, and finalizing state transitions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"CommittingTransactionsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 011_004 Topic 8: Committing Transactions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic8_committing_transactions_note.txt"})}),e.jsx(o,{note:"When you call connection.commit(), the database writes your changes to disk and releases all locks held on the rows! If you forget to call commit(), all your updates will be lost when the connection closes! — Sukanta Hui"})]})}export{b as default};
