import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 8: CONCUR_UPDATABLE - Mutating Database Rows via ResultSet\r
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
public class ConcurUpdatableOperationsDemo {\r
\r
    public static void applyScholarshipBonusViaResultSet(Connection conn) throws SQLException {\r
        // Query MUST include Primary Key column for updatable result sets:\r
        String sql = "SELECT student_id, name, score FROM students WHERE score >= 90.0";\r
\r
        try (PreparedStatement pstmt = conn.prepareStatement(\r
                sql,\r
                ResultSet.TYPE_SCROLL_INSENSITIVE,\r
                ResultSet.CONCUR_UPDATABLE);\r
             ResultSet rs = pstmt.executeQuery()) {\r
\r
            while (rs.next()) {\r
                double currentScore = rs.getDouble("score");\r
                if (currentScore < 100.0) {\r
                    // Mutating the column on the current row buffer:\r
                    rs.updateDouble("score", currentScore + 2.0);\r
\r
                    // Persisting the update directly back to the database engine:\r
                    rs.updateRow();\r
                    System.out.println("   [UPDATED]: Student " + rs.getString("name") + " score boosted to " + (currentScore + 2.0));\r
                }\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CONCUR_UPDATABLE MUTATIONS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> KEY METHODS OF CONCUR_UPDATABLE RESULTSETS:");\r
        System.out.println("  1. rs.updateString(col, val)  : Modifies string value in current row buffer.");\r
        System.out.println("  2. rs.updateDouble(col, val)  : Modifies numeric value in current row buffer.");\r
        System.out.println("  3. rs.updateRow()             : Flushes modified values to database table (Executes SQL UPDATE).");\r
        System.out.println("  4. rs.deleteRow()             : Deletes current row from database table (Executes SQL DELETE).");\r
        System.out.println("  5. rs.moveToInsertRow()       : Switches cursor to special buffer for inserting new row.");\r
        System.out.println("  6. rs.insertRow()             : Persists newly constructed insert row into table.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 8: CONCUR_UPDATABLE Operations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PREREQUISITES FOR CONCUR_UPDATABLE:\r
   - The SELECT query MUST include the table's Primary Key column (needed to locate the row for UPDATE).\r
   - The query must select from a single table (no joins or aggregates).\r
\r
2. WORKFLOW:\r
   - 'rs.updateXxx(column, value)' → modifies the buffer.\r
   - 'rs.updateRow()' → commits the update to the physical database.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What crucial method must be called after rs.updateDouble('score', 95.0) to actually commit the change to the database table?",shortAnswer:"rs.updateRow() (Calling rs.updateXxx() only modifies the in-memory row buffer; rs.updateRow() issues the SQL UPDATE to the database server).",explanation:"Moving to another row without calling updateRow() discards the changes.",hint:"rs.updateRow()",level:"Beginner",codeExample:"rs.updateDouble('score', 95.0); rs.updateRow();"},{question:"Why must the SELECT query include the primary key column when using CONCUR_UPDATABLE?",shortAnswer:"Because the JDBC driver requires the primary key column to generate the underlying SQL 'WHERE primary_key = ?' clause when executing rs.updateRow() or rs.deleteRow().",explanation:"Without a unique primary key, the driver cannot uniquely identify which row to mutate.",hint:"The driver needs the primary key to generate the WHERE clause for updateRow().",level:"Intermediate",codeExample:"SELECT student_id, name, score FROM students"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["CONCUR_UPDATABLE: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Mutating Database Rows via ResultSet"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Direct CRUD via cursor: updating columns with rs.updateDouble(), persisting with rs.updateRow(), and deleting with rs.deleteRow()."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ConcurUpdatableOperationsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"ResultSet & Metadata FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 011_003 Topic 8: CONCUR_UPDATABLE Operations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic8_concur_updatable_operations_note.txt"})}),e.jsx(a,{note:"Did you know you can update the database without writing an UPDATE SQL query? With ResultSet.CONCUR_UPDATABLE, you can call rs.updateDouble('score', 98.5) and rs.updateRow()! The driver writes the UPDATE statement for you! — Sukanta Hui"})]})}export{S as default};
