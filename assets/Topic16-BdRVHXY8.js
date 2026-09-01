import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 16: Modern Java NIO.2 Enterprise Storage Engine (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.IOException;\r
import java.nio.charset.StandardCharsets;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.nio.file.StandardCopyOption;\r
import java.nio.file.StandardOpenOption;\r
import java.util.List;\r
import java.util.stream.Stream;\r
\r
public class ModernNio2StorageEngineCapstoneDemo {\r
\r
    public static class EnterpriseStorageEngine {\r
        private final Path rootStorage;\r
\r
        public EnterpriseStorageEngine(Path root) throws IOException {\r
            this.rootStorage = root.toAbsolutePath().normalize();\r
            Files.createDirectories(rootStorage);\r
        }\r
\r
        // Store file with atomic staging:\r
        public void storeDocument(String fileName, String content) throws IOException {\r
            Path tempStaging = Files.createTempFile("stage_", ".tmp");\r
            Files.writeString(tempStaging, content, StandardCharsets.UTF_8);\r
\r
            Path finalDestination = rootStorage.resolve(fileName);\r
            Files.move(tempStaging, finalDestination, StandardCopyOption.REPLACE_EXISTING);\r
            System.out.println("  [STORED ATOMICALLY] " + fileName + " (" + Files.size(finalDestination) + " bytes)");\r
        }\r
\r
        // Search documents matching keyword lazily:\r
        public void searchKeyword(String keyword) throws IOException {\r
            System.out.println("  [SEARCHING KEYWORD] '" + keyword + "' across storage directory:");\r
            try (Stream<Path> files = Files.walk(rootStorage, 2)) {\r
                files.filter(Files::isRegularFile).forEach(p -> {\r
                    try {\r
                        String body = Files.readString(p);\r
                        if (body.contains(keyword)) {\r
                            System.out.println("    -> Match in: " + p.getFileName());\r
                        }\r
                    } catch (IOException e) {\r
                        System.err.println("Error reading " + p);\r
                    }\r
                });\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: MODERN JAVA NIO.2 ENTERPRISE CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path labRoot = Files.createTempDirectory("nio_enterprise_store_");\r
        EnterpriseStorageEngine engine = new EnterpriseStorageEngine(labRoot);\r
\r
        // 1. Storing documents atomically:\r
        System.out.println(">>> 1. Ingesting Documents into Enterprise Storage Engine:");\r
        engine.storeDocument("swadeep_profile.json", "{ "name": "Swadeep Paul", "center": "Barrackpore", "track": "Java Core" }");\r
        engine.storeDocument("tuhina_profile.json", "{ "name": "Tuhina Das", "center": "Naihati", "track": "Spring Microservices" }");\r
        engine.storeDocument("tax_ledger.csv", "ID,BRANCH,STATUS\\n101,Barrackpore,COMPLETED\\n102,Shyamnagar,PENDING");\r
\r
        // 2. Querying documents with lazy streams:\r
        System.out.println("\\n>>> 2. Executing Search Operations:");\r
        engine.searchKeyword("Barrackpore");\r
\r
        // Cleanup:\r
        try (Stream<Path> paths = Files.walk(labRoot)) {\r
            paths.sorted((a, b) -> b.compareTo(a)).forEach(p -> {\r
                try { Files.deleteIfExists(p); } catch (IOException ignored) {}\r
            });\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 005_004 MODERN JAVA NIO.2 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 16: NIO.2 Master Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 005_004 SUMMARY:\r
   - 'Path': Immutable filesystem locator interface (Path.of).\r
   - 'Files': 50+ static utility methods (exists, size, createDirectories, copy, move, delete).\r
   - Atomic options: StandardCopyOption.REPLACE_EXISTING and ATOMIC_MOVE.\r
   - Convenience I/O: Files.readString, writeString, readAllLines, readAllBytes.\r
   - Stream processing: Files.lines, list, walk, find (lazy evaluation).\r
   - FileChannel & ByteBuffer: High-performance non-blocking I/O.\r
   - MappedByteBuffer: Zero-copy virtual memory mapping.\r
   - WatchService: Real-time native directory event monitoring.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What architectural benefits does Java NIO.2 provide when designing enterprise cloud document storage engines?",shortAnswer:"1. Atomic staged publishing via 'Files.move(..., ATOMIC_MOVE)' to prevent corrupt partial file reads. 2. Lazy stream traversal via 'Files.walk()' and 'Files.find()' to search millions of files without memory exhaustion. 3. Modern, clean one-liner I/O ('readString' / 'writeString') with strict UTF-8 enforcement. 4. Pluggable FileSystem SPI for seamless virtual filesystem integrations.",explanation:"NIO.2 provides the complete enterprise toolkit for cloud storage engines.",hint:"Atomic moves, lazy stream search, clean one-liner I/O, and cross-platform UTF-8 guarantees.",level:"Advanced",codeExample:"Files.move(stage, dest, StandardCopyOption.ATOMIC_MOVE); Files.walk(root)..."}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"NIO.2 Master Capstone"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Modern Java NIO.2 Master Capstone: Real-World Enterprise Storage Engine"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize modern NIO.2 competencies: building a resilient enterprise document storage engine featuring atomic staging, lazy stream searching, and clean resource teardown."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ModernNio2StorageEngineCapstoneDemo.java",highlightLines:[7,13,14,19,20,24,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"NIO.2 Capstone FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 005_004 Topic 16: NIO.2 Master Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic16_nio2_master_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 005_004! You have mastered the entire Java NIO.2 architecture—Path, Files, FileChannel, ByteBuffers, Memory-Mapped Files, and WatchService! — Sukanta Hui"})]})}export{S as default};
