import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const l=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 10: ResultSetMetaData - Inspecting Query Structure\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.ResultSet;\r
import java.sql.ResultSetMetaData;\r
import java.sql.SQLException;\r
\r
public class ResultSetMetaDataInspectionDemo {\r
\r
    public static void inspectQuerySchema(Connection conn, String sql) throws SQLException {\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql);\r
             ResultSet rs = pstmt.executeQuery()) {\r
\r
            // Obtaining Metadata from the active ResultSet:\r
            ResultSetMetaData meta = rs.getMetaData();\r
            int columnCount = meta.getColumnCount();\r
\r
            System.out.println("   [SCHEMA INSPECTION]: Query produced " + columnCount + " columns:\\n");\r
            System.out.println("   COL#  LABEL NAME            SQL TYPE NAME         PRECISION  NULLABLE?");\r
            System.out.println("   -----------------------------------------------------------------------");\r
\r
            for (int i = 1; i <= columnCount; i++) {\r
                String labelName = meta.getColumnLabel(i);\r
                String typeName  = meta.getColumnTypeName(i);\r
                int precision    = meta.getPrecision(i);\r
                int nullableCode = meta.isNullable(i);\r
                String nullable  = (nullableCode == ResultSetMetaData.columnNullable) ? "YES" : "NO";\r
\r
                System.out.printf("   %-5d %-20s %-20s %-10d %s%n", i, labelName, typeName, precision, nullable);\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: RESULTSETMETADATA INSPECTION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> KEY METHODS OF java.sql.ResultSetMetaData:");\r
        System.out.println("  1. meta.getColumnCount()          : Total number of columns in the result set.");\r
        System.out.println("  2. meta.getColumnLabel(int i)     : Alias or display title of column I.");\r
        System.out.println("  3. meta.getColumnName(int i)      : True physical database column name.");\r
        System.out.println("  4. meta.getColumnType(int i)      : Integer SQL type code from java.sql.Types.");\r
        System.out.println("  5. meta.getColumnTypeName(int i)  : Database-specific type name (e.g. 'VARCHAR', 'BIGINT').");\r
        System.out.println("  6. meta.isNullable(int i)         : Nullability constraint (columnNoNulls / columnNullable).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 10: ResultSetMetaData Inspection\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS RESULTSETMETADATA:\r
   - Interface that provides information about the types and properties of the columns in a 'ResultSet'.\r
   - Obtained via 'rs.getMetaData()'.\r
\r
2. 'getColumnLabel()' VS 'getColumnName()':\r
   - 'getColumnName()'  : The physical schema column name in the database table.\r
   - 'getColumnLabel()' : The alias assigned in SQL ('SELECT id AS student_id').\r
   - Always prefer 'getColumnLabel()' when formatting tables and CSV headers!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the difference between meta.getColumnLabel(i) and meta.getColumnName(i) in ResultSetMetaData?",shortAnswer:"getColumnName(i) returns the underlying physical table column name, whereas getColumnLabel(i) returns the SQL alias name provided in the query (e.g. 'AS full_name') or default display header.",explanation:"Always use getColumnLabel() when printing dynamic tables or exporting CSVs.",hint:"getColumnLabel() returns the SQL alias (AS alias); getColumnName() returns the table column name.",level:"Intermediate",codeExample:"SELECT s_name AS student_name → getColumnLabel returns 'student_name'."},{question:"How do you obtain the total number of columns in a dynamic query result?",shortAnswer:"rs.getMetaData().getColumnCount()",explanation:"Essential for iterating dynamic result set columns.",hint:"meta.getColumnCount()",level:"Beginner",codeExample:"int numCols = rs.getMetaData().getColumnCount();"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["ResultSetMetaData: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Inspecting Query Structure"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dynamic column inspection: discovering column counts, column names, SQL types, precision, and nullability at runtime with java.sql.ResultSetMetaData."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:l,title:"ResultSetMetaDataInspectionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"ResultSet & Metadata FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 011_003 Topic 10: ResultSetMetaData Inspection",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic10_resultsetmetadata_inspection_note.txt"})}),e.jsx(r,{note:"ResultSetMetaData gives you the blueprints of your query result! You can ask: How many columns are there? What are their names? What data types are they? This is how database GUI tools like DBeaver and phpMyAdmin work! — Sukanta Hui"})]})}export{y as default};
