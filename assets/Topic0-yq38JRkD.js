import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 0: Limitations of Legacy java.io.File: Why Java 7+ Introduced NIO.2\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.File;\r
\r
public class LegacyFileLimitationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: LIMITATIONS OF LEGACY java.io.File - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        File nonExistent = new File("/invalid_root_drive/non_existent_folder/sub/data.txt");\r
\r
        // 1. Silent Boolean Failure without Error Context:\r
        boolean deleted = nonExistent.delete();\r
        System.out.println(">>> 1. Silent Failure Trap:");\r
        System.out.println("  file.delete() returned : " + deleted);\r
        System.out.println("  [PROBLEM] WHY did it fail? Was it permission denied? File in use? Non-existent?");\r
        System.out.println("  'java.io.File' gives zero diagnostic reasons (only returns boolean false)!");\r
\r
        // 2. Directory Listing Performance Trap:\r
        System.out.println("\\n>>> 2. Directory Scaling Bottleneck:");\r
        System.out.println("  - 'file.listFiles()' eagerly loads ALL file objects in a directory into memory array.");\r
        System.out.println("  - A directory with 500,000 files causes OutOfMemoryError and hangs for seconds.");\r
\r
        // 3. Lack of Modern Filesystem Features:\r
        System.out.println("\\n>>> 3. Missing Enterprise Features in Legacy File:");\r
        System.out.println("  - No atomic move / rename support.");\r
        System.out.println("  - No symbolic link / hard link traversal.");\r
        System.out.println("  - No filesystem event notification / file watcher.");\r
        System.out.println("  - No fine-grained POSIX file permissions (chmod).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 0: Limitations of Legacy java.io.File\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LEGACY FILE FLAWS:\r
   - Silent failures: returns 'false' instead of throwing informative exceptions.\r
   - 'listFiles()' causes OOM on directories with millions of files.\r
   - Lacks atomic move and replace options.\r
   - Cannot read POSIX permissions or handle symbolic links.\r
   - Superseded by 'java.nio.file.Path' and 'java.nio.file.Files'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What were the primary architectural deficiencies of the legacy 'java.io.File' class that necessitated Java NIO.2?",shortAnswer:"1. Poor Diagnostic Error Handling: Methods like 'delete()' or 'mkdir()' simply returned boolean 'false' upon failure without throwing descriptive exceptions or explaining why. 2. Performance Bottlenecks: 'listFiles()' eagerly loaded all directory entries into an array, crashing JVM memory on large directories. 3. Missing Capabilities: No support for atomic operations, symbolic links, POSIX permissions, or directory change notifications.",explanation:"Java NIO.2 in Java 7 completely replaced java.io.File with Path and Files.",hint:"Silent boolean failures, memory-hungry listFiles(), lack of atomic operations, and no symlink support.",level:"Beginner",codeExample:"// Legacy bad: boolean ok = file.delete(); // No exception explaining why"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Legacy Limitations"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Limitations of Legacy ",e.jsx("code",{className:"text-rose-400 font-mono",children:"java.io.File"}),": Why Java 7+ Introduced NIO.2"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover why legacy file handling failed in enterprise computing: analyzing silent boolean failures, directory memory bottlenecks, and lack of atomic file operations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"LegacyFileLimitationsDemo.java",highlightLines:[7,10,16,17,23,24,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{title:"Legacy File Limitations FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 005_004 Topic 0: Legacy File Limitations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic0_legacy_file_limitations_note.txt"})}),e.jsx(r,{note:"If 'file.delete()' returns false, you have no idea whether the file was locked, permission was denied, or the folder was non-empty! NIO.2's 'Files.delete(path)' throws NoSuchFileException or DirectoryNotEmptyException with exact reasons! — Sukanta Hui"})]})}export{f as default};
