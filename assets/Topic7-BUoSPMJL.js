import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 005_006: CSV, JSON, Properties & Config Files\r
 * Topic 7: Writing Clean CSV Files: RFC 4180 Field Escaping & Header Generation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.config;\r
\r
import java.io.PrintWriter;\r
import java.io.StringWriter;\r
import java.util.List;\r
\r
public class WritingCleanEscapedCsvDemo {\r
\r
    // RFC 4180 Field Escaper:\r
    public static String escapeCsvField(String field) {\r
        if (field == null) return "";\r
        // If field contains comma, quote, or newline, enclose in quotes and escape internal quotes:\r
        if (field.contains(",") || field.contains(""") || field.contains("\\n") || field.contains("\\r")) {\r
            return """ + field.replace(""", """") + """;\r
        }\r
        return field;\r
    }\r
\r
    public static void writeCsvRecord(PrintWriter pw, List<String> fields) {\r
        StringBuilder row = new StringBuilder();\r
        for (int i = 0; i < fields.size(); i++) {\r
            row.append(escapeCsvField(fields.get(i)));\r
            if (i < fields.size() - 1) row.append(",");\r
        }\r
        pw.println(row.toString());\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: WRITING CLEAN ESCAPED CSV FILES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StringWriter buffer = new StringWriter();\r
        try (PrintWriter pw = new PrintWriter(buffer)) {\r
            // Header:\r
            writeCsvRecord(pw, List.of("ROLL_NO", "STUDENT_NAME", "BRANCH_LOCATION", "FEE_PAID"));\r
\r
            // Records with tricky characters (commas, quotes):\r
            writeCsvRecord(pw, List.of("101", "Swadeep Paul", "Barrackpore Central", "8500.00"));\r
            writeCsvRecord(pw, List.of("102", "Tuhina Das", "Naihati, West Bengal", "9200.00"));\r
            writeCsvRecord(pw, List.of("103", "Abhronila "Top Scorer" Das", "Shyamnagar", "8500.00"));\r
        }\r
\r
        System.out.println(">>> Generated RFC 4180 Compliant CSV File Output:");\r
        System.out.println(buffer.toString());\r
\r
        System.out.println(">>> ESCAPING RULES VERIFIED:");\r
        System.out.println("  - 'Naihati, West Bengal' was wrapped in quotes -> "Naihati, West Bengal"");\r
        System.out.println("  - Quotes inside Abhronila were doubled -> "Abhronila ""Top Scorer"" Das"");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_006: CSV, JSON, Properties & Config Files\r
Topic 7: Writing Clean Escaped CSV Files\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CSV WRITING RULES (RFC 4180):\r
   - Check if field contains ',', '"', or '\\n'.\r
   - Double internal quotes: 'val.replace("\\"", "\\"\\"")'.\r
   - Enclose in outer quotes: '"' + escaped + '"'.\r
   - Join with commas and write platform newline.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the standard escaping rule when writing a field containing double quotes or commas into a CSV file according to RFC 4180?",shortAnswer:`If a field contains a comma (,), newline (\\n), or double quote ("), the entire field MUST be enclosed in double quotes. Any internal double quote character (") within that field must be escaped by doubling it (replacing each '"' with '""').`,explanation:"Ensures spreadsheet applications like Microsoft Excel, LibreOffice, and Google Sheets parse fields accurately.",hint:'Enclose field in quotes and replace every internal quote with two quotes ("").',level:"Intermediate",codeExample:'String escaped = "\\"" + val.replace("\\"", "\\"\\"") + "\\"";'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_006 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"CSV Generation"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Writing Clean CSV Files: RFC 4180 Field Escaping & Header Generation"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Generate compliant spreadsheet data: applying RFC 4180 escaping algorithms to quote embedded commas and double internal quotation marks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"WritingCleanEscapedCsvDemo.java",highlightLines:[7,10,11,12,13,14,19,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"CSV Writing FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 005_006 Topic 7: Writing Escaped CSV",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_006_topic7_writing_escaped_csv_note.txt"})}),e.jsx(i,{note:"When exporting billing reports for AccoTax clients in Barrackpore, always double-escape quotes in customer company names! This guarantees the CSV opens perfectly in Microsoft Excel without misaligned columns! — Sukanta Hui"})]})}export{x as default};
