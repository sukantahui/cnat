import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 4: Clearing Batches - ps.clearBatch() & Memory Management\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.SQLException;\r
\r
public class ClearingBatchesMemoryManagementDemo {\r
\r
    public static void executeSafeBatchWithCleanup(Connection conn) throws SQLException {\r
        String sql = "INSERT INTO audit_archive (msg) VALUES (?)";\r
\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            pstmt.setString(1, "Log Entry 1");\r
            pstmt.addBatch();\r
\r
            pstmt.setString(1, "Log Entry 2");\r
            pstmt.addBatch();\r
\r
            // Explicitly discarding buffered statements before execution if needed:\r
            boolean shouldDiscard = false;\r
            if (shouldDiscard) {\r
                pstmt.clearBatch();\r
                System.out.println("   [CLEAR]: Batch buffer emptied successfully.");\r
            } else {\r
                pstmt.executeBatch();\r
                System.out.println("   [EXEC]: Batch submitted to server.");\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: CLEARING BATCHES & MEMORY MANAGEMENT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHEN TO CALL ps.clearBatch():");\r
        System.out.println("  1. In Catch Blocks  : If executeBatch() throws an exception, call clearBatch() to purge buffered statements.");\r
        System.out.println("  2. Driver Recycling : Some JDBC drivers do not automatically empty the internal parameter list after executeBatch();");\r
        System.out.println("                        clearBatch() explicitly frees memory for GC.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 4: Clearing Batches & Memory Management\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD SIGNATURE:\r
   - 'pstmt.clearBatch()': Empties the current batch list of commands for this Statement object.\r
\r
2. CATCH BLOCK PATTERN:\r
   'catch (BatchUpdateException bue) {\r
        pstmt.clearBatch(); // Reset buffer\r
        conn.rollback();\r
    }'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What does PreparedStatement.clearBatch() do?",shortAnswer:"It removes all buffered statements and parameter sets currently queued in the Statement's batch list, resetting the batch buffer to an empty state.",explanation:"Frees statement memory and discards queued commands.",hint:"Empties the queued statement batch buffer.",level:"Beginner",codeExample:"pstmt.clearBatch(); // Clears all buffered batch commands"},{question:"Why should clearBatch() be called inside the catch block when a batch operation fails?",shortAnswer:"To ensure that failed or unexecuted parameter sets remaining in the driver's memory buffer are discarded before reusing the PreparedStatement, preventing accidental re-execution of corrupt statements.",explanation:"Prevents buffer pollution across retry attempts.",hint:"Prevents re-executing corrupt or failed commands when the statement is reused.",level:"Intermediate",codeExample:"catch(SQLException e) { pstmt.clearBatch(); conn.rollback(); }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Clearing Batches: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ps.clearBatch() & Memory Management"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Freeing statement buffers: managing memory during long-running ETL processes and discarding aborted batches on error."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ClearingBatchesMemoryManagementDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Batch Updates & DAO FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:c,title:"Module 011_005 Topic 4: Clearing Batches Memory Management",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic4_clearing_batches_memory_management_note.txt"})}),e.jsx(n,{note:"When an exception occurs during batch processing, the un-executed statements stay trapped in the PreparedStatement buffer! Calling ps.clearBatch() empties the buffer so you can start clean without duplicate insertions! — Sukanta Hui"})]})}export{f as default};
