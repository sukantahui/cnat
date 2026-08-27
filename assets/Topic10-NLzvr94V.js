import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 10: Resetting Auto-Commit - Connection Pool Hygiene\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class ResettingAutoCommitHygieneDemo {\r
\r
    public static void executeWithPoolHygiene(Connection conn) throws SQLException {\r
        boolean originalAutoCommit = conn.getAutoCommit();\r
        try {\r
            conn.setAutoCommit(false); // Set manual transaction\r
\r
            // Perform transaction work...\r
            System.out.println("   [TX]: Transaction work completed.");\r
\r
            conn.commit();\r
        } catch (Exception ex) {\r
            conn.rollback();\r
            throw ex;\r
        } finally {\r
            // CRUCIAL: Always restore original auto-commit state before closing/returning to pool!\r
            try {\r
                conn.setAutoCommit(originalAutoCommit);\r
                System.out.println("   [HYGIENE]: Restored auto-commit to: " + originalAutoCommit);\r
            } catch (SQLException ex) {\r
                System.err.println("   [HYGIENE WARNING]: Failed to restore autoCommit: " + ex.getMessage());\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: RESETTING AUTO-COMMIT & POOL HYGIENE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHY POOL HYGIENE IS CRITICAL:");\r
        System.out.println("  1. Leaked Transaction State: If thread A returns a connection with autoCommit=false,");\r
        System.out.println("     thread B borrowing that connection will run queries thinking they auto-commit, but they won't!");\r
        System.out.println("  2. Leaked Row Locks: Active transaction state locks database rows indefinitely!\\n");\r
\r
        System.out.println(">>> HIKARICP DEFENSE-IN-DEPTH:");\r
        System.out.println("  - HikariCP automatically resets auto-commit and executes rollback() on dirty connections upon close(),");\r
        System.out.println("    logging a warning: 'Resetting autocommit to true on connection...'");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 10: Resetting Auto-Commit Hygiene\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE GOLDEN HYGIENE RULE:\r
   - Always restore the connection's original auto-commit status in a 'finally' block.\r
\r
2. CONNECTION POOL CONTAMINATION:\r
   - Never allow uncommitted transactions or altered session parameters to leak across pooled connections!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What bug occurs if a connection with autoCommit=false is returned to a connection pool without being reset?",shortAnswer:"The next application thread that borrows the connection will execute queries assuming standard auto-commit behavior, but the statements will remain uncommitted in a silent, open transaction, causing missing data updates and lock contention.",explanation:"Known as Connection State Contamination.",hint:"Subsequent threads execute queries that never commit automatically.",level:"Intermediate",codeExample:"conn.setAutoCommit(true); // Always restore in finally block"},{question:"How does HikariCP handle a connection returned to the pool with an active uncommitted transaction?",shortAnswer:"HikariCP detects the dirty transaction state, issues an automatic rollback() to discard uncommitted work and release locks, resets auto-commit to true, and logs a warning message.",explanation:"Built-in safety net in modern enterprise connection pools.",hint:"Automatically rolls back uncommitted work, resets auto-commit, and logs a warning.",level:"Intermediate",codeExample:"HikariCP auto-rollback on dirty connection close."}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 10"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Resetting Auto-Commit: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Connection Pool Hygiene"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Preventing state leakage: why resetting auto-commit to true in a finally block is mandatory before returning connections to connection pools."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"ResettingAutoCommitHygieneDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Transaction & ACID FAQs",questions:s})}),t.jsx("section",{className:"space-y-4",children:t.jsx(o,{content:r,title:"Module 011_004 Topic 10: Resetting Auto-Commit Hygiene",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic10_resetting_autocommit_hygiene_note.txt"})}),t.jsx(a,{note:"When using a connection pool like HikariCP, returning a connection with setAutoCommit(false) still active is like leaving a borrowed car with the engine running in reverse! Always restore setAutoCommit(true) in a finally block! — Sukanta Hui"})]})}export{h as default};
