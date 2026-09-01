import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 12: DatabaseMetaData - Inspecting Server Schema & Capabilities (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.DatabaseMetaData;\r
import java.sql.ResultSet;\r
import java.sql.SQLException;\r
\r
public class DatabaseMetaDataCapstoneDemo {\r
\r
    public static void inspectFullDatabaseSchema(Connection conn) throws SQLException {\r
        DatabaseMetaData dbMeta = conn.getMetaData();\r
\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: DATABASEMETADATA INSPECTION CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. DATABASE ENGINE & DRIVER INFORMATION:");\r
        System.out.println("  - Database Product Name    : " + dbMeta.getDatabaseProductName());\r
        System.out.println("  - Database Product Version : " + dbMeta.getDatabaseProductVersion());\r
        System.out.println("  - JDBC Driver Name         : " + dbMeta.getDriverName());\r
        System.out.println("  - JDBC Driver Version      : " + dbMeta.getDriverVersion());\r
        System.out.println("  - Supports Transactions    : " + dbMeta.supportsTransactions());\r
        System.out.println("  - Supports Batch Updates   : " + dbMeta.supportsBatchUpdates() + "\\n");\r
\r
        System.out.println(">>> 2. DISCOVERING USER TABLES IN CURRENT SCHEMA:");\r
        try (ResultSet tablesRs = dbMeta.getTables(null, null, "%", new String[]{"TABLE"})) {\r
            while (tablesRs.next()) {\r
                String tableName = tablesRs.getString("TABLE_NAME");\r
                String tableType = tablesRs.getString("TABLE_TYPE");\r
                System.out.println("   [TABLE FOUND]: " + tableName + " (" + tableType + ")");\r
\r
                // Discover columns for each table:\r
                try (ResultSet colsRs = dbMeta.getColumns(null, null, tableName, "%")) {\r
                    while (colsRs.next()) {\r
                        String colName = colsRs.getString("COLUMN_NAME");\r
                        String colType = colsRs.getString("TYPE_NAME");\r
                        int colSize    = colsRs.getInt("COLUMN_SIZE");\r
                        System.out.println("      - Column: " + colName + " (" + colType + ", size=" + colSize + ")");\r
                    }\r
                }\r
            }\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 011_003 COMPLETE: RESULTSET & METADATA MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    public static void main(String[] args) {\r
        // Main driver demonstration\r
        System.out.println("DatabaseMetaData Capstone ready for production schema discovery.");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 12: DatabaseMetaData Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS DATABASEMETADATA:\r
   - Comprehensive interface obtained via 'conn.getMetaData()'.\r
   - Encapsulates database server capabilities, SQL grammar limits, and catalog/schema objects.\r
\r
2. CORE INTROSPECTION METHODS:\r
   - 'getTables(catalog, schema, tablePattern, types)'\r
   - 'getColumns(catalog, schema, tablePattern, colPattern)'\r
   - 'getPrimaryKeys(catalog, schema, table)'\r
   - 'getImportedKeys(catalog, schema, table)' (Foreign keys)\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"How do you obtain the DatabaseMetaData instance for an active connection?",shortAnswer:"conn.getMetaData()",explanation:"Factory method on java.sql.Connection.",hint:"conn.getMetaData()",level:"Beginner",codeExample:"DatabaseMetaData meta = conn.getMetaData();"},{question:"How do you discover all primary key column names of a specific table using DatabaseMetaData?",shortAnswer:"By calling meta.getPrimaryKeys(catalog, schemaPattern, tableName), which returns a ResultSet where each row represents a primary key column with the column name in 'COLUMN_NAME'.",explanation:"Crucial for automated ORM schema reverse engineering.",hint:"meta.getPrimaryKeys(null, null, tableName)",level:"Intermediate",codeExample:"ResultSet pks = meta.getPrimaryKeys(null, null, 'students');"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["DatabaseMetaData: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Inspecting Server Schema & Capabilities"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Full database introspection: discovering tables, columns, primary keys, foreign keys, database engine version, and transaction capabilities."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"DatabaseMetaDataCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"ResultSet & Metadata FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 011_003 Topic 12: DatabaseMetaData Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic12_databasemetadata_capstone_note.txt"})}),e.jsx(r,{note:"Congratulations on completing Module 3 of Segment 11! You have mastered ResultSet navigation, wasNull(), and full schema introspection with DatabaseMetaData and ResultSetMetaData! Next up: Transaction Management & ACID! — Sukanta Hui"})]})}export{g as default};
