import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 11: Generic Table Printer & CSV Exporter - ResultSetMetaData in Action\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.io.PrintWriter;\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.ResultSet;\r
import java.sql.ResultSetMetaData;\r
import java.sql.SQLException;\r
\r
public class GenericTablePrinterCsvExportDemo {\r
\r
    // Generic function that exports ANY SQL query to standard CSV format:\r
    public static void exportQueryToCsv(Connection conn, String sql, PrintWriter writer) throws SQLException {\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql);\r
             ResultSet rs = pstmt.executeQuery()) {\r
\r
            ResultSetMetaData meta = rs.getMetaData();\r
            int columnCount = meta.getColumnCount();\r
\r
            // 1. Write CSV Header row:\r
            for (int i = 1; i <= columnCount; i++) {\r
                writer.print(escapeCsv(meta.getColumnLabel(i)));\r
                if (i < columnCount) writer.print(",");\r
            }\r
            writer.println();\r
\r
            // 2. Write CSV Data rows:\r
            while (rs.next()) {\r
                for (int i = 1; i <= columnCount; i++) {\r
                    Object val = rs.getObject(i);\r
                    writer.print(val == null ? "" : escapeCsv(val.toString()));\r
                    if (i < columnCount) writer.print(",");\r
                }\r
                writer.println();\r
            }\r
            writer.flush();\r
        }\r
    }\r
\r
    private static String escapeCsv(String input) {\r
        if (input.contains(",") || input.contains(""") || input.contains("\\n")) {\r
            return """ + input.replace(""", """") + """;\r
        }\r
        return input;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: GENERIC TABLE PRINTER & CSV EXPORTER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE POWER OF RESULTSETMETADATA FOR DYNAMIC UTILITIES:");\r
        System.out.println("  1. Schema Agnostic   : Operates on any table, join, view, or aggregated report.");\r
        System.out.println("  2. Zero Hardcoding   : No hardcoded column names or field indices.");\r
        System.out.println("  3. Enterprise Utility: Foundation for CLI tools, ETL data exporters, and GUI grids.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 11: Generic Table Printer & CSV Export\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DYNAMIC ITERATION PATTERN:\r
   'ResultSetMetaData meta = rs.getMetaData();\r
    int cols = meta.getColumnCount();\r
    for (int i = 1; i <= cols; i++) { ... }'\r
\r
2. CSV ESCAPING RULE (RFC 4180):\r
   - Values containing commas, double quotes, or newlines must be enclosed in double quotes.\r
   - Internal double quotes are escaped by doubling them ('""').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"How does ResultSetMetaData enable writing schema-agnostic generic export utilities in Java?",shortAnswer:"By dynamically discovering the total column count, column names, labels, and data types at runtime, allowing the utility to loop over all fields and format output without having any compile-time knowledge of specific database tables or schemas.",explanation:"Powers general-purpose ETL tools and database management clients.",hint:"Discovers column counts and labels dynamically at runtime.",level:"Intermediate",codeExample:"for (int i=1; i<=meta.getColumnCount(); i++) print(meta.getColumnLabel(i));"},{question:"Why should rs.getObject(i) be used when writing generic data extractors?",shortAnswer:"Because rs.getObject(i) returns the column value as a generic java.lang.Object wrapper (String, Integer, Double, Timestamp, etc.) without requiring type-specific conditional branching for every SQL data type.",explanation:"Provides universal polymorphic object extraction.",hint:"Returns any SQL column value as a standard Java Object wrapper.",level:"Intermediate",codeExample:"Object value = rs.getObject(i);"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Generic Table Printer & CSV Exporter: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ResultSetMetaData in Action"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dynamic data formatting: building a generic table renderer and CSV export engine capable of printing any arbitrary SQL query result dynamically."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"GenericTablePrinterCsvExportDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"ResultSet & Metadata FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 011_003 Topic 11: Generic Table Printer & CSV Export",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic11_generic_table_printer_csv_export_note.txt"})}),e.jsx(a,{note:"This is one of the most useful utilities you will ever write! By using ResultSetMetaData, you can write ONE function that prints or exports ANY SQL query in formatted ASCII tables or CSV files without knowing the columns in advance! — Sukanta Hui"})]})}export{g as default};
