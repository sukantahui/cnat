import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 5: BatchUpdateException - Handling Partial Failures\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.BatchUpdateException;\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.SQLException;\r
import java.sql.Statement;\r
\r
public class HandlingBatchUpdateExceptionDemo {\r
\r
    public static void executeBatchWithExceptionInspection(Connection conn) throws SQLException {\r
        conn.setAutoCommit(false);\r
        String sql = "INSERT INTO accounts (account_id, balance) VALUES (?, ?)";\r
\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            // Adding batch items (item 2 contains deliberate duplicate key error)\r
            pstmt.setInt(1, 101); pstmt.setDouble(2, 5000.0); pstmt.addBatch();\r
            pstmt.setInt(1, 101); pstmt.setDouble(2, 2000.0); pstmt.addBatch(); // Duplicate!\r
            pstmt.setInt(1, 103); pstmt.setDouble(2, 8000.0); pstmt.addBatch();\r
\r
            pstmt.executeBatch();\r
            conn.commit();\r
\r
        } catch (BatchUpdateException bue) {\r
            System.err.println("   [BATCH EXCEPTION]: " + bue.getMessage());\r
            int[] updateCounts = bue.getUpdateCounts();\r
\r
            System.out.println("   [INSPECTION OF UPDATE COUNTS]:");\r
            for (int i = 0; i < updateCounts.length; i++) {\r
                if (updateCounts[i] >= 0) {\r
                    System.out.println("     Item #" + (i + 1) + ": Succeeded (" + updateCounts[i] + " rows)");\r
                } else if (updateCounts[i] == Statement.SUCCESS_NO_INFO) {\r
                    System.out.println("     Item #" + (i + 1) + ": Succeeded (No info)");\r
                } else if (updateCounts[i] == Statement.EXECUTE_FAILED) {\r
                    System.err.println("     Item #" + (i + 1) + ": FAILED! ❌");\r
                }\r
            }\r
\r
            conn.rollback(); // Rollback everything cleanly\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: BATCHUPDATEEXCEPTION HANDLING - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> KEY METHODS OF java.sql.BatchUpdateException:");\r
        System.out.println("  1. bue.getUpdateCounts() : Returns int[] array showing the outcome of statements in the batch up to failure.");\r
        System.out.println("  2. bue.getNextException(): Chained SQLExceptions providing detailed error codes.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 5: Handling BatchUpdateException\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS BATCHUPDATEEXCEPTION:\r
   - Subclass of 'SQLException' thrown when an error occurs during batch execution.\r
\r
2. 'getUpdateCounts()' CODES:\r
   - int value &gt;= 0 : Row update count for successful statement.\r
   - 'Statement.SUCCESS_NO_INFO' (-2) : Success without row count.\r
   - 'Statement.EXECUTE_FAILED' (-3) : Specific statement failed.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What specific exception class is thrown by JDBC when one or more statements in a batch fail to execute?",shortAnswer:"java.sql.BatchUpdateException",explanation:"Specialized SQLException subclass containing partial batch results.",hint:"java.sql.BatchUpdateException",level:"Beginner",codeExample:"catch (BatchUpdateException bue) { int[] counts = bue.getUpdateCounts(); }"},{question:"How can you determine which specific statements succeeded prior to the failure when a BatchUpdateException is caught?",shortAnswer:"By calling bue.getUpdateCounts(), which returns an int[] array indicating the execution outcome for each statement executed before the error was encountered.",explanation:"Provides granular post-mortem analysis of batch executions.",hint:"Call bue.getUpdateCounts() and inspect the returned array.",level:"Intermediate",codeExample:"int[] counts = bue.getUpdateCounts();"}];function E(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 5"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["BatchUpdateException: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Handling Partial Failures"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Inspecting partial batch outcomes: analyzing BatchUpdateException, inspecting getUpdateCounts(), and determining which batch items succeeded vs failed."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:s,title:"HandlingBatchUpdateExceptionDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Batch Updates & DAO FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:i,title:"Module 011_005 Topic 5: Handling BatchUpdateException",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic5_handling_batchupdateexception_note.txt"})}),t.jsx(r,{note:"When item #7 in a 10-item batch fails (e.g. duplicate key), the driver throws a java.sql.BatchUpdateException! You can call bue.getUpdateCounts() to see exactly which items succeeded before the failure occurred! — Sukanta Hui"})]})}export{E as default};
