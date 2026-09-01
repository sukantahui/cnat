import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as i}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 6: File Verification & Inspection: exists, isReadable, isRegularFile, isDirectory, size\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.IOException;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.nio.file.attribute.FileTime;\r
\r
public class FileInspectionVerificationDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: Files METADATA VERIFICATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path currentDir = Path.of(".");\r
        Path tempFile = Files.createTempFile("barrackpore_test_", ".tmp");\r
        Files.writeString(tempFile, "Java NIO.2 Masterclass: Batch 2026");\r
\r
        // 1. Verification of File Status:\r
        System.out.println(">>> 1. Inspecting File Properties for: " + tempFile.getFileName());\r
        System.out.println("  Files.exists(path)        : " + Files.exists(tempFile));\r
        System.out.println("  Files.isRegularFile(path) : " + Files.isRegularFile(tempFile));\r
        System.out.println("  Files.isDirectory(path)   : " + Files.isDirectory(tempFile));\r
        System.out.println("  Files.isReadable(path)    : " + Files.isReadable(tempFile));\r
        System.out.println("  Files.isWritable(path)    : " + Files.isWritable(tempFile));\r
        System.out.println("  Files.isExecutable(path)  : " + Files.isExecutable(tempFile));\r
        System.out.println("  Files.isHidden(path)      : " + Files.isHidden(tempFile));\r
        System.out.println("  Files.size(path)          : " + Files.size(tempFile) + " bytes");\r
\r
        // 2. Timestamps and Attributes:\r
        FileTime modifiedTime = Files.getLastModifiedTime(tempFile);\r
        System.out.println("\\n>>> 2. Last Modified Time:");\r
        System.out.println("  Timestamp : " + modifiedTime);\r
\r
        // Cleanup:\r
        Files.deleteIfExists(tempFile);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 6: File Verification & Inspection\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METADATA METHODS:\r
   - 'Files.exists(path)'        : Checks existence.\r
   - 'Files.isRegularFile(path)' : Confirms normal physical file (not directory).\r
   - 'Files.isDirectory(path)'   : Checks if folder.\r
   - 'Files.size(path)'          : File size in bytes.\r
   - 'Files.getLastModifiedTime' : Queries OS modification timestamp.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why should developers check 'Files.isRegularFile(path)' instead of only checking 'Files.exists(path)' before reading file contents?",shortAnswer:"'Files.exists(path)' returns true for directories, special device files, named pipes, and symbolic links as well as normal files. Calling read methods on a directory or special device will throw an exception. Checking 'Files.isRegularFile(path)' guarantees that the target is an actual physical data file containing readable bytes.",explanation:"Defensive best practice in all filesystem file processing pipelines.",hint:"exists() returns true for directories too; isRegularFile() ensures it is an actual physical data file.",level:"Beginner",codeExample:"if (Files.isRegularFile(path)) { String content = Files.readString(path); }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"File Inspection"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["File Checks: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Files.exists()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"isRegularFile()"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"size()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Perform defensive file audits: inspecting file existence, permissions, directory flags, byte sizes, and OS modification timestamps."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(i,{fileModule:r,title:"FileInspectionVerificationDemo.java",highlightLines:[7,10,16,17,21,22,23,24,25,28,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"File Checks FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:a,title:"Module 005_004 Topic 6: File Checks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic6_file_checks_note.txt"})}),e.jsx(n,{note:"Before opening a file for reading, always do 'if (Files.isRegularFile(path) && Files.isReadable(path))'! It avoids runtime exceptions and makes your code rock solid! — Sukanta Hui"})]})}export{h as default};
