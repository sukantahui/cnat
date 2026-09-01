import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 6: Managing Transactions in JDBC - The 4-Step Standard Pattern\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class ManagingTransactionsJdbcOverviewDemo {\r
\r
    public static void executeTransactionTemplate(Connection conn) throws SQLException {\r
        // STEP 1: Capture initial auto-commit and disable auto-commit\r
        boolean previousAutoCommit = conn.getAutoCommit();\r
        conn.setAutoCommit(false);\r
\r
        try {\r
            // STEP 2: Execute multiple DML statements in single transaction\r
            System.out.println("   [TX]: Executing Step 1 (Debit)...");\r
            System.out.println("   [TX]: Executing Step 2 (Credit)...");\r
\r
            // STEP 3: Commit all changes atomically\r
            conn.commit();\r
            System.out.println("   [TX SUCCESS]: Transaction committed permanently! ✅");\r
\r
        } catch (SQLException | RuntimeException ex) {\r
            // STEP 4: Roll back uncommitted changes on error\r
            System.err.println("   [TX ERROR]: Rolling back transaction due to error: " + ex.getMessage());\r
            conn.rollback();\r
            throw ex;\r
        } finally {\r
            // Restore connection auto-commit state for pool reuse\r
            conn.setAutoCommit(previousAutoCommit);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: MANAGING TRANSACTIONS IN JDBC OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4-STEP TRANSACTION WORKFLOW:");\r
        System.out.println("  1. conn.setAutoCommit(false); // Begin boundary");\r
        System.out.println("  2. pstmt1.executeUpdate(); pstmt2.executeUpdate();");\r
        System.out.println("  3. conn.commit();             // Flush to disk");\r
        System.out.println("  4. catch: conn.rollback();    // Revert upon exception");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 6: Managing Transactions in JDBC\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE TRANSACTION LIFECYCLE:\r
   - 'conn.setAutoCommit(false)' marks the start of a manual transaction.\r
   - 'conn.commit()' flushes all updates executed since the transaction started to disk.\r
   - 'conn.rollback()' discards all updates and releases row locks.\r
\r
2. CONNECTION POOL HYGIENE:\r
   - Always restore 'conn.setAutoCommit(true)' or allow the connection pool to reset state.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the very first method call required to begin a manual transaction on a JDBC Connection?",shortAnswer:"conn.setAutoCommit(false)",explanation:"Tells the JDBC driver not to commit statements automatically after execution.",hint:"conn.setAutoCommit(false)",level:"Beginner",codeExample:"conn.setAutoCommit(false); // Starts manual transaction"},{question:"Why should conn.rollback() be invoked in the catch block if any exception occurs during a multi-statement transaction?",shortAnswer:"To immediately release all held database locks, discard intermediate dirty changes, and prevent accidental commits when the connection is reused.",explanation:"Maintains database atomicity and avoids lock contention.",hint:"Discards intermediate uncommitted changes and releases locks.",level:"Beginner",codeExample:"catch (SQLException e) { conn.rollback(); }"}];function g(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 6"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Managing Transactions in JDBC: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"The 4-Step Standard Pattern"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Transaction lifecycle in pure Java: establishing explicit transaction boundaries using connection.setAutoCommit(false), commit(), and rollback()."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(n,{fileModule:r,title:"ManagingTransactionsJdbcOverviewDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"Transaction & ACID FAQs",questions:s})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:i,title:"Module 011_004 Topic 6: Managing Transactions in JDBC",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic6_managing_transactions_jdbc_overview_note.txt"})}),t.jsx(o,{note:"Managing transactions in JDBC is simple when you follow the 4-Step Golden Pattern: 1. Disable auto-commit, 2. Run your SQL statements, 3. Commit in the try block, 4. Rollback in the catch block! — Sukanta Hui"})]})}export{g as default};
