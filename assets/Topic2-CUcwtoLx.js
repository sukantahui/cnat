import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 2: Atomicity - All-Or-Nothing Execution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.SQLException;\r
\r
public class AtomicityAllOrNothingDemo {\r
\r
    public static void enrollStudentAtomically(Connection conn, int studentId, String name, double initialFee) throws SQLException {\r
        // Step 1: Disable Auto-Commit to establish Atomic Boundary:\r
        boolean originalAutoCommit = conn.getAutoCommit();\r
        conn.setAutoCommit(false);\r
\r
        String sqlStudent = "INSERT INTO students (student_id, name) VALUES (?, ?)";\r
        String sqlLedger  = "INSERT INTO fee_ledger (student_id, amount_paid, payment_date) VALUES (?, ?, NOW())";\r
\r
        try (PreparedStatement ps1 = conn.prepareStatement(sqlStudent);\r
             PreparedStatement ps2 = conn.prepareStatement(sqlLedger)) {\r
\r
            // Action 1: Insert student profile\r
            ps1.setInt(1, studentId);\r
            ps1.setString(2, name);\r
            ps1.executeUpdate();\r
\r
            // Action 2: Insert initial fee receipt\r
            ps2.setInt(1, studentId);\r
            ps2.setDouble(2, initialFee);\r
            ps2.executeUpdate();\r
\r
            // Step 2: If BOTH actions succeed, COMMIT ATOMICALLY!\r
            conn.commit();\r
            System.out.println("   [ATOMICITY]: Student enrolled and fee ledger recorded successfully! ✅");\r
\r
        } catch (SQLException ex) {\r
            // Step 3: If ANY exception occurs, ROLLBACK ATOMICALLY!\r
            conn.rollback();\r
            System.err.println("   [ATOMICITY]: Enrollment failed! Rolled back both records cleanly! ❌ (" + ex.getMessage() + ")");\r
            throw ex;\r
        } finally {\r
            // Step 4: Restore original auto-commit status\r
            conn.setAutoCommit(originalAutoCommit);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: ATOMICITY (ALL-OR-NOTHING EXECUTION) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE ATOMIC GUARANTEE:");\r
        System.out.println("  - 100% Success -> commit()");\r
        System.out.println("  - Partial Error -> rollback() -> Zero side-effects left behind in database!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 2: Atomicity: All-or-Nothing\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS ATOMICITY:\r
   - Guarantees that all statements within a transaction are treated as a single composite operation.\r
   - If any statement fails, the entire transaction is aborted and rolled back.\r
\r
2. JDBC ATOMIC WORKFLOW:\r
   - 'conn.setAutoCommit(false)'\r
   - Execute all DML statements.\r
   - 'conn.commit()' in try block.\r
   - 'conn.rollback()' in catch block.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"How is Atomicity achieved in JDBC application code?",shortAnswer:"By calling connection.setAutoCommit(false) before executing operations, calling connection.commit() when all statements succeed, and calling connection.rollback() inside the catch block if an exception occurs.",explanation:"Ensures no partial updates are committed to the database.",hint:"setAutoCommit(false) → execute statements → commit() / rollback().",level:"Beginner",codeExample:"conn.setAutoCommit(false); try { ... conn.commit(); } catch(e) { conn.rollback(); }"},{question:"What happens if a developer forgets to call conn.rollback() in the catch block when auto-commit is disabled?",shortAnswer:"The connection retains uncommitted locks on database rows. When the connection is returned to the pool or re-used, subsequent transactions might accidentally commit the aborted changes or block other threads due to unreleased row locks.",explanation:"Always invoke rollback() in catch blocks to release locks.",hint:"Leaves database row locks active and risks dirty commits on subsequent queries.",level:"Intermediate",codeExample:"catch (SQLException e) { conn.rollback(); throw e; }"}];function A(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Atomicity: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"All-Or-Nothing Execution"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Indivisible state transitions: ensuring multi-table inserts, updates, and balance adjustments execute as a single inseparable atomic unit."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"AtomicityAllOrNothingDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Transaction & ACID FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 011_004 Topic 2: Atomicity: All-or-Nothing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic2_atomicity_all_or_nothing_note.txt"})}),e.jsx(a,{note:"Atomicity means indivisible — like an atom! You cannot have 50% of a transaction succeed! If you are enrolling a student, creating their user login, and generating their invoice, ALL THREE must succeed together! — Sukanta Hui"})]})}export{A as default};
