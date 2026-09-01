import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 11: Savepoints for Partial Rollbacks - java.sql.Savepoint\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.SQLException;\r
import java.sql.Savepoint;\r
\r
public class SavepointsPartialRollbacksDemo {\r
\r
    public static void executeNestedSavepointDemo(Connection conn) throws SQLException {\r
        conn.setAutoCommit(false); // Manual transaction\r
\r
        try {\r
            // STEP 1: Mandatory core transaction operation\r
            System.out.println("   [TX]: Creating Student Profile (Swadeep Paul)...");\r
\r
            // STEP 2: Establish a SAVEPOINT before optional operation\r
            Savepoint hostelBookingSavepoint = conn.setSavepoint("HOSTEL_BOOKING_POINT");\r
            System.out.println("   [SAVEPOINT]: Created checkpoint: " + hostelBookingSavepoint.getSavepointName());\r
\r
            try {\r
                // STEP 3: Attempt optional operation (e.g. Hostel Room Allocation)\r
                System.out.println("   [TX]: Attempting optional hostel room allocation...");\r
                boolean hostelRoomsFull = true;\r
\r
                if (hostelRoomsFull) {\r
                    throw new SQLException("Hostel is completely full!");\r
                }\r
\r
            } catch (SQLException ex) {\r
                // STEP 4: PARTIAL ROLLBACK - Roll back ONLY to savepoint!\r
                System.err.println("   [PARTIAL ROLLBACK]: Hostel failed (" + ex.getMessage() + ") -> Rolling back hostel only!");\r
                conn.rollback(hostelBookingSavepoint);\r
                // Student Profile is STILL INTACT and NOT rolled back!\r
            }\r
\r
            // STEP 5: Finalize and commit parent transaction\r
            conn.commit();\r
            System.out.println("   [TX SUCCESS]: Student Profile committed successfully without hostel!");\r
\r
        } catch (Exception ex) {\r
            conn.rollback(); // Complete rollback if core profile fails\r
            throw ex;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: SAVEPOINTS & PARTIAL ROLLBACKS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> KEY METHODS OF java.sql.Savepoint:");\r
        System.out.println("  1. Savepoint sp = conn.setSavepoint();            // Anonymous savepoint");\r
        System.out.println("  2. Savepoint sp = conn.setSavepoint("CHECKPOINT"); // Named savepoint");\r
        System.out.println("  3. conn.rollback(sp);                             // Roll back to checkpoint only");\r
        System.out.println("  4. conn.releaseSavepoint(sp);                     // Frees savepoint resources from server");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 11: Savepoints for Partial Rollbacks\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A SAVEPOINT:\r
   - A bookmark/checkpoint within an active transaction.\r
   - Allows rolling back a portion of the transaction without aborting the entire unit of work.\r
\r
2. LIFECYCLE:\r
   - 'conn.setSavepoint()' / 'conn.setSavepoint(String name)'\r
   - 'conn.rollback(Savepoint sp)'\r
   - 'conn.releaseSavepoint(Savepoint sp)'\r
   - All savepoints are automatically released when the transaction commits or completely rolls back.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the purpose of java.sql.Savepoint in JDBC transaction management?",shortAnswer:"A Savepoint defines a checkpoint within an active transaction that allows partial rollbacks: the application can roll back modifications made after the savepoint while preserving modifications made prior to the savepoint.",explanation:"Enables nested sub-transaction control.",hint:"Allows partial rollback of subsequent operations while preserving earlier ones.",level:"Intermediate",codeExample:"Savepoint sp = conn.setSavepoint(); ... conn.rollback(sp);"},{question:"What does conn.releaseSavepoint(savepoint) do?",shortAnswer:"It removes the specified Savepoint from the current transaction on the database server, freeing server memory and lock tracking resources.",explanation:"Once released, you can no longer roll back to that savepoint.",hint:"Frees savepoint resources on the database server.",level:"Intermediate",codeExample:"conn.releaseSavepoint(sp);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Savepoints for Partial Rollbacks: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.sql.Savepoint"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Fine-grained transaction checkpoints: creating savepoints, rolling back to specific checkpoints, and releasing savepoint memory."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"SavepointsPartialRollbacksDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 011_004 Topic 11: Savepoints for Partial Rollbacks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic11_savepoints_partial_rollbacks_note.txt"})}),e.jsx(a,{note:"Savepoints are like game save checkpoints! If you are batch processing 5 student registrations and the 4th student has invalid data, you don't have to throw away the first 3! You can roll back to the 3rd savepoint and continue! — Sukanta Hui"})]})}export{h as default};
