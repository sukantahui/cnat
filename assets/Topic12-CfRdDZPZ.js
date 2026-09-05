import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 12: Lazy Stream-Based File Processing: Files.lines(), list(), walk() & find()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.IOException;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.util.stream.Stream;\r
\r
public class LazyStreamFileProcessingDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: LAZY STREAM-BASED FILE PROCESSING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path tempDir = Files.createTempDirectory("nio_streams_lab_");\r
        Path logFile = tempDir.resolve("server.log");\r
\r
        Files.writeString(logFile,\r
                "INFO [Barrackpore] Server started\\n" +\r
                "ERROR [Naihati] Database connection failed\\n" +\r
                "INFO [Shyamnagar] Trainee login: Swadeep Paul\\n" +\r
                "ERROR [Ichapur] Null pointer in payroll service\\n" +\r
                "INFO [Barrackpore] Health check OK\\n"\r
        );\r
\r
        // 1. Files.lines() (Lazy Stream Processing with Filter/Map):\r
        System.out.println(">>> 1. Files.lines() -> Extracting all ERROR entries lazily:");\r
        try (Stream<String> lines = Files.lines(logFile)) {\r
            lines.filter(l -> l.contains("ERROR"))\r
                 .map(String::toUpperCase)\r
                 .forEach(err -> System.out.println("  " + err));\r
        }\r
\r
        // 2. Files.walk() (Recursive Directory Traversal):\r
        System.out.println("\\n>>> 2. Files.walk() -> Traversing directory hierarchy:");\r
        try (Stream<Path> paths = Files.walk(tempDir, 3)) {\r
            paths.forEach(p -> System.out.println("  Found: " + p.getFileName()));\r
        }\r
\r
        // 3. Files.find() (Path Matching with Predicates):\r
        System.out.println("\\n>>> 3. Files.find() -> Locating all '.log' files > 10 bytes:");\r
        try (Stream<Path> found = Files.find(tempDir, 2, (p, attr) -> p.toString().endsWith(".log") && attr.size() > 10)) {\r
            found.forEach(p -> System.out.println("  Matched Log File: " + p.getFileName()));\r
        }\r
\r
        // Cleanup:\r
        Files.deleteIfExists(logFile);\r
        Files.deleteIfExists(tempDir);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 12: Lazy Stream File Processing\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STREAM FILE UTILITIES:\r
   - 'Files.lines(path)': Lazy line streaming; ideal for gigabyte logs.\r
   - 'Files.list(dir)': Streams 1st-level directory entries lazily.\r
   - 'Files.walk(dir, maxDepth)': Recursive directory tree traversal.\r
   - 'Files.find(dir, depth, matcher)': Combines walking with file attribute predicates.\r
   - ALWAYS enclose returned streams in Try-with-Resources!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why MUST 'Files.lines(path)', 'Files.walk()', and 'Files.list()' be enclosed inside a Try-with-Resources block?",shortAnswer:"Because the returned 'Stream<T>' objects hold open underlying operating system file handles and directory descriptors. If the stream is not explicitly closed (or enclosed in a try-with-resources block), the underlying OS file handle remains leaked until finalization/JVM termination, exhausting OS file descriptor limits.",explanation:"Stream implements AutoCloseable and will close the underlying I/O handle on block exit.",hint:"Streams hold open OS file descriptors that leak if not closed in try-with-resources.",level:"Intermediate",codeExample:"try (Stream<String> lines = Files.lines(path)) { lines.forEach(...); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Lazy Stream I/O"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Stream-Based File Processing: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Files.lines()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"list()"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"walk()"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"find()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Process massive datasets with minimal RAM: streaming multi-gigabyte log lines lazily and searching directory trees with declarative functional predicates."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"LazyStreamFileProcessingDemo.java",highlightLines:[7,10,26,27,28,33,34,39,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Stream File Processing FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:s,title:"Module 005_004 Topic 12: Stream File Processing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic12_stream_file_processing_note.txt"})}),e.jsx(n,{note:"Remember: Always put 'Files.lines(path)' inside a try-with-resources! 'try (Stream<String> lines = Files.lines(path))' ensures that the underlying file descriptor is closed when the stream finishes! — Sukanta Hui"})]})}export{g as default};
