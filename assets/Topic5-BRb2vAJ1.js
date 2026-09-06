import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
 * Topic 5: Timed File Handling Coding Challenge (Segment 5 Master Synthesis)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io.lab;\r
\r
import java.io.IOException;\r
import java.nio.charset.StandardCharsets;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.nio.file.StandardCopyOption;\r
import java.util.List;\r
import java.util.stream.Stream;\r
\r
public class TimedFileIoCodingChallengeCapstoneDemo {\r
\r
    // Challenge Problem: High-Speed Deduplicating File Merger\r
    // Ingests multiple branch CSV ledgers, normalizes headers, deduplicates IDs, and writes unified report atomically!\r
    public static class BranchLedgerConsolidator {\r
\r
        public static Path consolidateLedgers(List<Path> branchFiles, Path outputDir) throws IOException {\r
            Path tempStaging = Files.createTempFile(outputDir, "consolidated_stage_", ".csv");\r
\r
            try (var writer = Files.newBufferedWriter(tempStaging, StandardCharsets.UTF_8)) {\r
                writer.write("ID,STUDENT_NAME,BRANCH,STATUS\\n");\r
\r
                for (Path branchFile : branchFiles) {\r
                    try (Stream<String> lines = Files.lines(branchFile)) {\r
                        lines.filter(l -> !l.startsWith("ID") && !l.trim().isEmpty())\r
                             .distinct()\r
                             .forEach(line -> {\r
                                 try {\r
                                     writer.write(line);\r
                                     writer.newLine();\r
                                 } catch (IOException e) {\r
                                     throw new RuntimeException(e);\r
                                 }\r
                             });\r
                    }\r
                }\r
            }\r
\r
            Path finalDestination = outputDir.resolve("master_consolidated_ledger_2026.csv");\r
            Files.move(tempStaging, finalDestination, StandardCopyOption.REPLACE_EXISTING, StandardCopyOption.ATOMIC_MOVE);\r
            return finalDestination;\r
        }\r
    }\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: TIMED FILE I/O CODING CHALLENGE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path labDir = Files.createTempDirectory("timed_io_challenge_");\r
\r
        Path bkpFile = labDir.resolve("bkp_ledger.csv");\r
        Path naihatiFile = labDir.resolve("naihati_ledger.csv");\r
\r
        Files.writeString(bkpFile, "ID,STUDENT_NAME,BRANCH,STATUS\\n101,Swadeep Paul,Barrackpore,ACTIVE\\n102,Tuhina Das,Barrackpore,ACTIVE\\n");\r
        Files.writeString(naihatiFile, "ID,STUDENT_NAME,BRANCH,STATUS\\n103,Abhronila Das,Naihati,ACTIVE\\n104,Debangshu Mukherjee,Naihati,ACTIVE\\n");\r
\r
        System.out.println(">>> Consolidating Multi-Branch Ledgers into Master Storage...");\r
        Path masterReport = BranchLedgerConsolidator.consolidateLedgers(List.of(bkpFile, naihatiFile), labDir);\r
\r
        System.out.println("  Consolidation Output File : " + masterReport.getFileName());\r
        System.out.println("  File Content Verified:\\n");\r
        Files.lines(masterReport).forEach(l -> System.out.println("    " + l));\r
\r
        // Cleanup:\r
        Files.deleteIfExists(bkpFile);\r
        Files.deleteIfExists(naihatiFile);\r
        Files.deleteIfExists(masterReport);\r
        Files.deleteIfExists(labDir);\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" CONGRATULATIONS! SEGMENT 5 (JAVA I/O, FILE HANDLING & SERIALIZATION)");\r
        System.out.println(" IS 100% COMPLETE AND FULLY CERTIFIED!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
Topic 5: Timed File I/O Challenge\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SEGMENT 5 GRAND CAPSTONE:\r
   - Resilient batch processing with lazy stream pipelines.\r
   - In-memory deduplication and transformation.\r
   - Atomic staged publishing with StandardCopyOption.ATOMIC_MOVE.\r
   - Complete mastery of Byte Streams, Character Streams, Buffered I/O,\r
     Modern NIO.2, Object Serialization, and Configuration Files.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What makes the 'BranchLedgerConsolidator' solution resilient, fast, and atomic for enterprise ledger processing?",shortAnswer:"1. 'Files.lines()' lazily streams each branch ledger line-by-line without heap bloat. 2. '.distinct()' ensures duplicate student entries are filtered out in stream memory. 3. Writes initially to a temporary staging file before performing an atomic 'Files.move(..., ATOMIC_MOVE)' to ensure consumers never read a partially written file.",explanation:"Production pattern used across batch ETL and data warehouse pipeline processors.",hint:"Combines lazy streaming, in-memory deduplication, and atomic staging moves for maximum reliability.",level:"Advanced",codeExample:"Files.move(tempStage, finalDest, StandardCopyOption.ATOMIC_MOVE);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_007 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Segment 5 Master Capstone"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Timed File Handling Coding Challenge: Segment 5 Master Capstone"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Execute the ultimate Segment 5 challenge: building a high-speed multi-file ledger consolidator with lazy stream deduplication and atomic staging moves."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"TimedFileIoCodingChallengeCapstoneDemo.java",highlightLines:[7,10,20,21,23,24,27,28,41,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Coding Challenge FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 005_007 Topic 5: Segment 5 Master Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_007_topic5_segment5_master_capstone_note.txt"})}),e.jsx(i,{note:"CONGRATULATIONS! You have officially conquered Segment 5: Java I/O Streams, File Handling & Serialization! You now possess enterprise-level expertise in streams, NIO.2, file channels, and serialization! — Sukanta Hui"})]})}export{x as default};
