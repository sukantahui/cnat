import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
 * Topic 3: Project 3: Flat-File Database Storage Engine with RandomAccessFile Indexing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io.lab;\r
\r
import java.io.File;\r
import java.io.RandomAccessFile;\r
import java.nio.charset.StandardCharsets;\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class FlatFileDatabaseEngineProjectDemo {\r
\r
    public static class FlatFileDatabase {\r
        private static final int RECORD_SIZE = 64; // Fixed 64-byte record slot\r
        private final RandomAccessFile dbFile;\r
        private final Map<Integer, Long> primaryIndex = new HashMap<>(); // In-Memory Primary Key -> Byte Offset Index\r
\r
        public FlatFileDatabase(File file) throws Exception {\r
            this.dbFile = new RandomAccessFile(file, "rw");\r
        }\r
\r
        // Insert Record:\r
        public void insert(int id, String studentName, double fees) throws Exception {\r
            long offset = dbFile.length(); // Append at end of file\r
            dbFile.seek(offset);\r
\r
            dbFile.writeInt(id); // 4 bytes\r
\r
            // Fixed-width 40-character name (padded with spaces):\r
            byte[] nameBytes = new byte[40];\r
            byte[] rawName = studentName.getBytes(StandardCharsets.UTF_8);\r
            System.arraycopy(rawName, 0, nameBytes, 0, Math.min(rawName.length, 40));\r
            dbFile.write(nameBytes); // 40 bytes\r
\r
            dbFile.writeDouble(fees); // 8 bytes\r
\r
            // Pad remaining bytes to make exactly 64 bytes:\r
            dbFile.write(new byte[12]); // 12 padding bytes\r
\r
            primaryIndex.put(id, offset); // Store offset in memory index\r
            System.out.printf("  [INSERTED] ID=%d | Offset=%d bytes%n", id, offset);\r
        }\r
\r
        // Fast O(1) Index Lookup:\r
        public String findById(int id) throws Exception {\r
            Long offset = primaryIndex.get(id);\r
            if (offset == null) return "Record Not Found";\r
\r
            dbFile.seek(offset);\r
            int recId = dbFile.readInt();\r
            byte[] nameBuf = new byte[40];\r
            dbFile.readFully(nameBuf);\r
            String name = new String(nameBuf, StandardCharsets.UTF_8).trim();\r
            double fees = dbFile.readDouble();\r
\r
            return String.format("Found -> ID: %d | Name: %s | Fees: ₹%.2f", recId, name, fees);\r
        }\r
\r
        public void close() throws Exception { dbFile.close(); }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: PROJECT 3 - FLAT-FILE DATABASE STORAGE ENGINE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        File tempDb = File.createTempFile("accotax_db_", ".db");\r
        FlatFileDatabase db = new FlatFileDatabase(tempDb);\r
\r
        System.out.println(">>> 1. Ingesting Fixed-Width Records into Database Engine:");\r
        db.insert(101, "Swadeep Paul", 8500.0);\r
        db.insert(102, "Tuhina Das", 9200.0);\r
        db.insert(103, "Abhronila Das", 9800.0);\r
        db.insert(104, "Debangshu Mukherjee", 8500.0);\r
\r
        System.out.println("\\n>>> 2. Executing Direct O(1) Index-Based Lookups via seek():");\r
        System.out.println("  Lookup ID 103: " + db.findById(103));\r
        System.out.println("  Lookup ID 101: " + db.findById(101));\r
        System.out.println("  Lookup ID 999: " + db.findById(999));\r
\r
        db.close();\r
        tempDb.delete();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
Topic 3: Flat-File Database Engine Project\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FLAT-FILE DB ARCHITECTURE:\r
   - Fixed-width records (e.g. 64 bytes per row).\r
   - In-memory index: 'Map<ID, ByteOffset>'.\r
   - 'RandomAccessFile.seek(offset)' for instantaneous O(1) seeks.\r
   - Padded byte buffers for uniform binary layout.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do fixed-width records combined with an in-memory index achieve O(1) instantaneous record lookup in database storage engines?",shortAnswer:"Fixed-width record architecture ensures every record on disk consumes an identical byte length (e.g. 64 bytes). The in-memory index maps each primary key directly to its exact byte offset in the physical file. Calling 'RandomAccessFile.seek(offset)' jumps the disk read head directly to the record location in O(1) time without scanning preceding records.",explanation:"Fundamental architecture behind ISAM (Indexed Sequential Access Method) and relational database storage engines.",hint:"Maps primary keys to exact byte offsets, using seek() to jump straight to the record in O(1) time.",level:"Advanced",codeExample:"raf.seek(primaryIndex.get(id)); raf.readFully(buffer);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_007 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Project 3: Flat-File DB"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Project 3: Flat-File Database Storage Engine with Index-Based Lookup"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build a relational storage engine: structuring fixed-width binary record slots and leveraging in-memory byte offset indexes for instantaneous O(1) random seeks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"FlatFileDatabaseEngineProjectDemo.java",highlightLines:[7,10,15,16,23,24,26,35,41,42,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Flat-File DB FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 005_007 Topic 3: Flat-File Database Engine",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_007_topic3_flat_file_database_note.txt"})}),e.jsx(a,{note:"Every relational database engine—from MySQL to PostgreSQL—stores tables using fixed or slotted byte pages on disk! Building your own index-based file database proves you understand the foundation of computer science storage systems! — Sukanta Hui"})]})}export{x as default};
