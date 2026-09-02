import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 14: Memory-Mapped Files (MappedByteBuffer): Ultra-Fast Multi-Gigabyte Processing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.IOException;\r
import java.nio.MappedByteBuffer;\r
import java.nio.channels.FileChannel;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.nio.file.StandardOpenOption;\r
\r
public class MemoryMappedFilesPerformanceDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: MEMORY-MAPPED FILES (MappedByteBuffer) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path mmapFile = Files.createTempFile("mmap_demo_", ".dat");\r
        int fileSize = 1024 * 1024; // 1 Megabyte\r
\r
        // 1. Mapping File directly into OS Virtual Memory Pages:\r
        System.out.println(">>> 1. Creating Memory-Mapped File Buffer (1 MB):");\r
        try (FileChannel channel = FileChannel.open(mmapFile,\r
                StandardOpenOption.READ, StandardOpenOption.WRITE, StandardOpenOption.CREATE)) {\r
\r
            // Maps physical disk file directly to CPU virtual memory address space:\r
            MappedByteBuffer memMap = channel.map(FileChannel.MapMode.READ_WRITE, 0, fileSize);\r
\r
            // Write integers directly to RAM pages (OS kernel flushes to disk in background via DMA!):\r
            for (int i = 0; i < 100; i++) {\r
                memMap.putInt(i * 4, 1000 + i);\r
            }\r
            memMap.force(); // Forces memory pages to flush to physical disk immediately\r
            System.out.println("  Wrote 100 integers directly to memory-mapped pages.");\r
\r
            // Read directly from RAM:\r
            int sampleVal = memMap.getInt(20);\r
            System.out.println("  Read Integer at byte offset 20: " + sampleVal);\r
        }\r
\r
        // Cleanup:\r
        Files.deleteIfExists(mmapFile);\r
\r
        System.out.println("\\n>>> WHY MEMORY-MAPPED FILES ARE BLAZINGLY FAST:");\r
        System.out.println("  1. Zero Copy: Bypasses standard Java Heap and user-space memory buffers.");\r
        System.out.println("  2. Virtual Memory Pages: File is mapped directly to OS kernel page cache.");\r
        System.out.println("  3. Used by high-frequency trading (HFT) platforms, Kafka, and Lucene search engines!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 14: Memory-Mapped Files\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MEMORY MAPPING ARCHITECTURE:\r
   - 'channel.map(FileChannel.MapMode.READ_WRITE, 0, size)'.\r
   - Returns 'MappedByteBuffer'.\r
   - Zero-Copy I/O: accesses OS virtual memory page cache directly.\r
   - 'memMap.force()' flushes memory changes to physical disk.\r
   - Powers Apache Kafka, Lucene indexes, and high-frequency trading engines.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do Memory-Mapped Files ('MappedByteBuffer') achieve unmatched I/O performance compared to standard streams?",shortAnswer:"'MappedByteBuffer' maps a physical disk file directly into the operating system kernel's Virtual Memory page cache ('mmap' syscall). Reading or writing memory-mapped bytes accesses hardware RAM pages directly at memory bus speeds with ZERO intermediate buffer copying ('Zero-Copy Architecture'). The OS paging system handles background disk flushing via DMA.",explanation:"Foundational architecture powering Apache Kafka, Lucene/Elasticsearch, and Cassandra.",hint:"Maps disk files directly to OS virtual memory pages, enabling zero-copy RAM speed access.",level:"Advanced",codeExample:"MappedByteBuffer mbb = channel.map(MapMode.READ_WRITE, 0, 1024*1024);"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Zero-Copy MMap"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Memory-Mapped Files (",e.jsx("code",{className:"text-purple-400 font-mono",children:"MappedByteBuffer"}),") for Ultra-Fast Gigabyte Processing"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Achieve zero-copy performance: mapping multi-gigabyte files directly into OS virtual memory pages to read and write data at hardware RAM speeds."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:i,title:"MemoryMappedFilesPerformanceDemo.java",highlightLines:[7,10,20,21,23,27,28,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Memory Mapping FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 005_004 Topic 14: Memory-Mapped Files",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic14_memory_mapped_files_note.txt"})}),e.jsx(t,{note:"Memory-mapped files are how systems like Apache Kafka and Elasticsearch achieve million-record-per-second speeds! You read and write directly to virtual memory pages while the OS handles disk writes in the background! — Sukanta Hui"})]})}export{f as default};
