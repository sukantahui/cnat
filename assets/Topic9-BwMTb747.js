import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 9: Rolling Back Transactions - connection.rollback()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class RollingBackTransactionsDemo {\r
\r
    public static void demonstrateRollbackPattern(Connection conn) throws SQLException {\r
        conn.setAutoCommit(false);\r
\r
        try {\r
            // Simulated business failure:\r
            System.out.println("   [TX]: Executing database update...");\r
            boolean validationFailed = true;\r
\r
            if (validationFailed) {\r
                throw new IllegalStateException("Insufficient funds in treasury account!");\r
            }\r
\r
            conn.commit();\r
\r
        } catch (Exception ex) {\r
            System.err.println("   [ROLLBACK]: Transaction failed (" + ex.getMessage() + ") -> Rolling back changes...");\r
            // Discard all changes made in this transaction:\r
            conn.rollback();\r
            System.out.println("   [ROLLBACK COMPLETE]: Database restored to initial state! 🛡️");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: ROLLING BACK TRANSACTIONS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE ANATOMY OF A ROLLBACK:");\r
        System.out.println("  1. Database engine uses Undo Logs / Rollback Segments to reverse all row modifications.");\r
        System.out.println("  2. Newly inserted rows are removed.");\r
        System.out.println("  3. Updated columns are restored to original snapshot values.");\r
        System.out.println("  4. All exclusive locks are released.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 9: Rolling Back Transactions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT 'rollback()' DOES:\r
   - Undoes all changes made in the current transaction.\r
   - Releases any database locks currently held by the Connection.\r
\r
2. CATCH BLOCK BEST PRACTICE:\r
   - Catch BOTH 'SQLException' AND 'RuntimeException' (or 'Exception') to ensure rollback executes\r
     even on unexpected runtime logic errors (e.g. 'NullPointerException')!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why should catch blocks in transaction managers catch general Exception rather than only SQLException?",shortAnswer:"Because a business logic exception (such as NullPointerException, IllegalArgumentException, or a custom DomainException) could be thrown after database updates have executed. If only SQLException is caught, the transaction would remain un-rolled-back in an inconsistent state.",explanation:"Ensures rollback is triggered on all failure conditions.",hint:"Prevents business logic runtime exceptions from leaving uncommitted transactions hanging.",level:"Intermediate",codeExample:"catch (Exception e) { conn.rollback(); throw e; }"},{question:"What internal database structure does the database engine use to undo changes during a rollback?",shortAnswer:"The Undo Log (or Rollback Segment), which records the inverse operations needed to restore original data values.",explanation:"Maintains before-images of modified data blocks.",hint:"Undo Log (Rollback Segment).",level:"Intermediate",codeExample:"Database Undo Log restores pre-image data pages."}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Rolling Back Transactions: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"connection.rollback()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Reverting aborted work: discarding uncommitted changes, releasing deadlocks, and restoring data integrity in exception handling blocks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"RollingBackTransactionsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 011_004 Topic 9: Rolling Back Transactions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic9_rolling_back_transactions_note.txt"})}),e.jsx(r,{note:"When an exception strikes, conn.rollback() is your safety net! It tells the database: undo every change I just made and restore the table to the exact state before the transaction began! — Sukanta Hui"})]})}export{h as default};
