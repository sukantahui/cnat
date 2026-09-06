import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 012_002: Core Banking Capstone\r
 * Topic 8: Audit Logging & Statement Exporter - Java NIO.2 Streams & CSV\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.banking;\r
\r
import java.io.IOException;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.nio.file.StandardOpenOption;\r
import java.time.Instant;\r
import java.util.List;\r
\r
public class AuditLoggingAndStatementExporterDemo {\r
\r
    public record StatementRow(Instant date, String refId, String type, String amount, String balance) {}\r
\r
    public static void exportCsvStatement(Path destination, String accountNumber, List<StatementRow> rows) throws IOException {\r
        StringBuilder sb = new StringBuilder();\r
        sb.append("Date,ReferenceId,Type,Amount,Balance\r
");\r
        for (StatementRow r : rows) {\r
            sb.append(r.date()).append(",")\r
              .append(r.refId()).append(",")\r
              .append(r.type()).append(",")\r
              .append(r.amount()).append(",")\r
              .append(r.balance()).append("\r
");\r
        }\r
\r
        Files.writeString(destination, sb.toString(), StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);\r
        System.out.println("   [EXPORTER]: Successfully generated CSV statement at: " + destination.toAbsolutePath());\r
    }\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: AUDIT LOGGING & STATEMENT EXPORTER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StatementRow> sampleRows = List.of(\r
            new StatementRow(Instant.now(), "TX-1001", "DEPOSIT", "25000.00", "25000.00"),\r
            new StatementRow(Instant.now(), "TX-1002", "TRANSFER_DEBIT", "5000.00", "20000.00")\r
        );\r
\r
        Path tempFile = Files.createTempFile("bank_statement_", ".csv");\r
        exportCsvStatement(tempFile, "SB-BKP-101", sampleRows);\r
\r
        System.out.println("\r
Generated Content Preview:");\r
        Files.lines(tempFile).forEach(line -> System.out.println("   | " + line));\r
\r
        Files.deleteIfExists(tempFile);\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_002: Core Banking Capstone\r
Topic 8: Audit Logging & Statement Exporter\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NIO.2 FILE EXPORTER:\r
   - 'Files.writeString()' / 'Files.newBufferedWriter()' for fast buffered statement writes.\r
   - 'Files.lines()' streams large CSV files line-by-line without loading entire file in RAM.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why is Files.lines() superior to Files.readAllLines() when reading multi-gigabyte financial audit logs?",shortAnswer:"Files.lines() returns a lazy, memory-efficient Stream<String> that reads one line at a time from disk, preventing OutOfMemoryErrors, whereas Files.readAllLines() loads the entire file into a List in RAM.",explanation:"Memory-efficient stream processing in Java NIO.2.",hint:"Streams lines lazily without buffering the whole file in heap memory.",level:"Beginner",codeExample:"try (Stream<String> stream = Files.lines(path)) { stream.forEach(...); }"},{question:"What StandardOpenOption flags should be used when writing a newly generated statement file?",shortAnswer:"StandardOpenOption.CREATE (creates file if not present) and StandardOpenOption.TRUNCATE_EXISTING (overwrites old content if present).",explanation:"Standard NIO.2 file creation options.",hint:"CREATE and TRUNCATE_EXISTING.",level:"Beginner",codeExample:"Files.writeString(path, text, StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_002 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 1: Core Banking System"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Audit Logging & Exporter: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Java NIO.2 Streams & CSV"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Regulatory compliance: generating tamper-proof audit trails and exporting account statements to CSV using modern Java NIO.2 and Files streams."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"AuditLoggingAndStatementExporterDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Core Banking Capstone FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 012_002 Topic 8: Audit Logging & Statement Exporter",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_002_topic8_audit_logging_and_statement_exporter_note.txt"})}),e.jsx(a,{note:"Banks are required by RBI regulations to maintain 10-year audit logs! Using Java NIO.2 Files.writeString and Files.lines, you can stream gigabytes of statements with lightning speed and zero memory leaks! — Sukanta Hui"})]})}export{S as default};
