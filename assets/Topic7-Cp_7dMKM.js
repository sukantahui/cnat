import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 012_003: High-Concurrency Order Matching Engine\r
 * Topic 7: Persistence & Write-Ahead Logging - Java NIO FileChannel\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exchange;\r
\r
import java.io.IOException;\r
import java.nio.ByteBuffer;\r
import java.nio.channels.FileChannel;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.nio.file.StandardOpenOption;\r
\r
public class PersistenceAndWALDemo {\r
\r
    public static class WriteAheadJournal implements AutoCloseable {\r
        private final FileChannel channel;\r
        private final ByteBuffer writeBuffer = ByteBuffer.allocateDirect(1024); // Direct OS buffer\r
\r
        public WriteAheadJournal(Path journalPath) throws IOException {\r
            this.channel = FileChannel.open(journalPath,\r
                StandardOpenOption.CREATE,\r
                StandardOpenOption.WRITE,\r
                StandardOpenOption.APPEND);\r
        }\r
\r
        public synchronized void logOrder(long orderId, long priceMicros, long qty) throws IOException {\r
            writeBuffer.clear();\r
            writeBuffer.putLong(orderId);\r
            writeBuffer.putLong(priceMicros);\r
            writeBuffer.putLong(qty);\r
            writeBuffer.flip();\r
\r
            while (writeBuffer.hasRemaining()) {\r
                channel.write(writeBuffer);\r
            }\r
            channel.force(false); // Flush OS page cache to physical disk!\r
        }\r
\r
        @Override\r
        public void close() throws IOException {\r
            channel.close();\r
        }\r
    }\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: HIGH-SPEED WRITE-AHEAD LOGGING (WAL) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path journalFile = Files.createTempFile("trade_journal_", ".wal");\r
\r
        try (WriteAheadJournal wal = new WriteAheadJournal(journalFile)) {\r
            wal.logOrder(1001L, 3500000000L, 100);\r
            wal.logOrder(1002L, 3520000000L, 50);\r
            System.out.println("   [WAL]: Appended binary orders to physical journal at: " + journalFile.toAbsolutePath());\r
        }\r
\r
        Files.deleteIfExists(journalFile);\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_003: High-Concurrency Order Matching Engine\r
Topic 7: Persistence & Write-Ahead Logging\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WRITE-AHEAD LOG (WAL) MECHANICS:\r
   - Every state change is appended to sequential disk storage BEFORE being applied to in-memory state.\r
   - 'FileChannel.force(false)' commits dirty OS buffer cache blocks to disk.\r
   - Enables instantaneous recovery after system crashes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is an append-only Write-Ahead Log (WAL) drastically faster than updating relational database tables for every order?",shortAnswer:"Sequential disk I/O requires zero random seeking and minimal disk head movements; appending fixed-size binary records via FileChannel achieves maximum possible physical disk throughput.",explanation:"Fundamental storage engine design pattern (used in Kafka, PostgreSQL, RocksDB).",hint:"Sequential append-only writes eliminate random disk seek latency.",level:"Intermediate",codeExample:"channel.write(buffer); channel.force(false);"},{question:"What does FileChannel.force(false) do in Java NIO?",shortAnswer:"It forces all buffered updates in the operating system's page cache to be flushed directly to the underlying physical storage hardware (similar to Unix fsync), ensuring crash durability.",explanation:"Guarantees durability without metadata sync overhead.",hint:"Flushes OS page cache buffers to physical storage media.",level:"Advanced",codeExample:"channel.force(false);"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_003 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 2: Order Matching Engine"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Persistence & Journaling: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Write-Ahead Log (WAL) & FileChannel"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Crash durability: recording incoming orders to an append-only binary Write-Ahead Log (WAL) using Java NIO FileChannel before matching."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"PersistenceAndWALDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Order Matching Engine FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 012_003 Topic 7: Persistence & Write-Ahead Logging",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_003_topic7_persistence_and_wal_note.txt"})}),e.jsx(t,{note:"If the server loses power, all orders in RAM disappear! That is why we write every incoming order to an append-only Write-Ahead Log (WAL) file using NIO FileChannel first! On restart, the engine replays the log to rebuild the entire book state! — Sukanta Hui"})]})}export{f as default};
