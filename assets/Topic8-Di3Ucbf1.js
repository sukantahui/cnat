import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 8: Atomic Copy & Move Options: StandardCopyOption.REPLACE_EXISTING & ATOMIC_MOVE\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.IOException;\r
import java.nio.file.AtomicMoveNotSupportedException;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.nio.file.StandardCopyOption;\r
\r
public class AtomicCopyMoveOptionsDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: ATOMIC & REPLACE OPTIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path tempDir = Files.createTempDirectory("nio_atomic_lab_");\r
        Path stagedFile = tempDir.resolve("staged_ledger.json");\r
        Path liveFile = tempDir.resolve("live_production_ledger.json");\r
\r
        Files.writeString(stagedFile, "{ "balance": 50000.00, "branch": "Barrackpore" }");\r
        Files.writeString(liveFile, "{ "balance": 0.00 }");\r
\r
        // 1. StandardCopyOption.REPLACE_EXISTING (Overwrites destination file without error):\r
        System.out.println(">>> 1. StandardCopyOption.REPLACE_EXISTING:");\r
        Files.copy(stagedFile, liveFile, StandardCopyOption.REPLACE_EXISTING);\r
        System.out.println("  Copied staged over live file. Live content: " + Files.readString(liveFile));\r
\r
        // 2. StandardCopyOption.ATOMIC_MOVE (Kernel-level atomic rename):\r
        System.out.println("\\n>>> 2. StandardCopyOption.ATOMIC_MOVE:");\r
        Path archiveFile = tempDir.resolve("archived_ledger.json");\r
        try {\r
            Files.move(liveFile, archiveFile, StandardCopyOption.ATOMIC_MOVE);\r
            System.out.println("  [ATOMIC SUCCESS] Live file atomically renamed to archive with zero downtime!");\r
        } catch (AtomicMoveNotSupportedException e) {\r
            System.out.println("  [FALLBACK] Cross-drive atomic move not supported by OS. Falling back to copy-delete.");\r
            Files.move(liveFile, archiveFile, StandardCopyOption.REPLACE_EXISTING);\r
        }\r
\r
        // Cleanup:\r
        Files.deleteIfExists(stagedFile);\r
        Files.deleteIfExists(archiveFile);\r
        Files.deleteIfExists(tempDir);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 8: Atomic Copy & Move Options\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COPY & MOVE OPTIONS:\r
   - 'StandardCopyOption.REPLACE_EXISTING': Overwrites destination if present.\r
   - 'StandardCopyOption.COPY_ATTRIBUTES': Preserves timestamps and permissions.\r
   - 'StandardCopyOption.ATOMIC_MOVE': Kernel-level instantaneous atomic rename.\r
   - 'LinkOption.NOFOLLOW_LINKS': Does not dereference symbolic links.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'StandardCopyOption.ATOMIC_MOVE' crucial for zero-downtime file publishing and database logs?",shortAnswer:"'ATOMIC_MOVE' delegates to the operating system's kernel-level atomic inode/MFT rename syscall. The rename occurs as an instantaneous, all-or-nothing operation. Concurrent reader threads will either see the old version or the complete new version, but will NEVER see a partially written, corrupted intermediate file.",explanation:"Standard pattern for atomic config file updates across microservice architectures.",hint:"Performs kernel-level instantaneous rename, preventing concurrent readers from seeing partial files.",level:"Intermediate",codeExample:"Files.move(staged, live, StandardCopyOption.ATOMIC_MOVE);"}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Atomic Options"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Atomic & Replace Options: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"REPLACE_EXISTING"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"ATOMIC_MOVE"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master crash-safe file publishing: executing zero-downtime atomic renames with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"ATOMIC_MOVE"})," and safely replacing live config files."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"AtomicCopyMoveOptionsDemo.java",highlightLines:[7,10,24,25,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Atomic Options FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 005_004 Topic 8: Atomic Options",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic8_atomic_options_note.txt"})}),e.jsx(i,{note:"In financial systems, never write directly to a live transaction file! Write to a temporary file first, and then call 'Files.move(temp, live, StandardCopyOption.ATOMIC_MOVE)'! If the system crashes mid-write, your live file remains 100% uncorrupted! — Sukanta Hui"})]})}export{v as default};
