import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 2: PreparedStatement Batching - ps.addBatch() & executeBatch()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.SQLException;\r
import java.util.Arrays;\r
\r
public class PreparedStatementBatchOperationsDemo {\r
\r
    public record StudentRecord(int id, String name, String center) {}\r
\r
    public static void insertBatchStudents(Connection conn, StudentRecord[] students) throws SQLException {\r
        String sql = "INSERT INTO students (student_id, name, center) VALUES (?, ?, ?)";\r
\r
        boolean prevAutoCommit = conn.getAutoCommit();\r
        conn.setAutoCommit(false); // Combine batching with manual transaction!\r
\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            for (StudentRecord s : students) {\r
                pstmt.setInt(1, s.id());\r
                pstmt.setString(2, s.name());\r
                pstmt.setString(3, s.center());\r
\r
                // Buffer parameter set in memory:\r
                pstmt.addBatch();\r
            }\r
\r
            // Flush and execute all buffered statements in one network trip:\r
            int[] updateCounts = pstmt.executeBatch();\r
            conn.commit(); // Commit transaction\r
\r
            System.out.println("   [BATCH RESULT]: Executed " + updateCounts.length + " statements successfully.");\r
            System.out.println("   [UPDATE COUNTS]: " + Arrays.toString(updateCounts));\r
\r
        } catch (SQLException ex) {\r
            conn.rollback();\r
            throw ex;\r
        } finally {\r
            conn.setAutoCommit(prevAutoCommit);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: PREPAREDSTATEMENT BATCH OPERATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentRecord[] students = {\r
            new StudentRecord(101, "Swadeep Paul", "Barrackpore"),\r
            new StudentRecord(102, "Tuhina Das", "Naihati"),\r
            new StudentRecord(103, "Abhronila Das", "Shyamnagar"),\r
            new StudentRecord(104, "Debangshu Mukherjee", "Ichapur")\r
        };\r
\r
        System.out.println("Ready to batch insert " + students.length + " students in a single network transmission.");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 2: PreparedStatement Batch Operations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BATCH API METHODS:\r
   - 'pstmt.addBatch()'    : Appends current parameter values to the internal batch buffer.\r
   - 'pstmt.executeBatch()': Submits the batch to the database engine. Returns 'int[]'.\r
\r
2. RETURN VALUE OF 'executeBatch()':\r
   - An array of integers ('int[]') containing the update count for each command in the batch:\r
     * &gt;= 0 : Successfully executed; value is number of affected rows.\r
     * 'Statement.SUCCESS_NO_INFO' (-2) : Successfully executed, but affected row count is unknown.\r
     * 'Statement.EXECUTE_FAILED' (-3)  : Command failed.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,c=[{question:"What does PreparedStatement.executeBatch() return upon successful execution?",shortAnswer:"An integer array (int[]) containing the number of rows affected by each individual statement in the batch.",explanation:"Each element corresponds to one statement in the batch sequence.",hint:"An array of integer update counts (int[]).",level:"Beginner",codeExample:"int[] results = pstmt.executeBatch();"},{question:"What does the constant Statement.SUCCESS_NO_INFO (-2) mean in the int[] returned by executeBatch()?",shortAnswer:"It indicates that the command executed successfully on the database server, but the server or driver does not provide the exact count of modified rows.",explanation:"Common when MySQL rewrites batch inserts into multi-value statements.",hint:"The statement executed successfully, but affected row count is unavailable.",level:"Intermediate",codeExample:"if (results[i] == Statement.SUCCESS_NO_INFO) { /* Success */ }"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["PreparedStatement Batching: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ps.addBatch() & executeBatch()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The canonical batching syntax: binding parameters, buffering with addBatch(), and executing with executeBatch() returning int[] update counts."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"PreparedStatementBatchOperationsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Batch Updates & DAO FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 011_005 Topic 2: PreparedStatement Batch Operations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic2_preparedstatement_batch_operations_note.txt"})}),e.jsx(a,{note:"The addBatch() and executeBatch() methods are the workhorses of large ETL systems! executeBatch() returns an int[] array where each integer is the number of rows affected by that specific batch item! — Sukanta Hui"})]})}export{S as default};
