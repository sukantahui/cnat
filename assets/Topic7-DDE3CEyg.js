import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 7: File Operations: createFile, createDirectories, copy, move, delete\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.IOException;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.nio.file.StandardCopyOption;\r
\r
public class FileOperationsLifecycleDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: Files LIFECYCLE OPERATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path baseFolder = Path.of("temp_barrackpore_lab", "subfolder", "data");\r
\r
        // 1. Files.createDirectories (Creates full folder hierarchy like 'mkdir -p'):\r
        Files.createDirectories(baseFolder);\r
        System.out.println(">>> 1. Files.createDirectories() -> Created: " + baseFolder);\r
\r
        // 2. Files.createFile:\r
        Path sourceFile = baseFolder.resolve("original.txt");\r
        if (!Files.exists(sourceFile)) {\r
            Files.createFile(sourceFile);\r
            Files.writeString(sourceFile, "Original payload from Sukanta Hui");\r
        }\r
        System.out.println(">>> 2. Files.createFile()        -> Created: " + sourceFile);\r
\r
        // 3. Files.copy (with REPLACE_EXISTING option):\r
        Path backupFile = baseFolder.resolve("backup.txt");\r
        Files.copy(sourceFile, backupFile, StandardCopyOption.REPLACE_EXISTING);\r
        System.out.println(">>> 3. Files.copy()              -> Cloned to: " + backupFile);\r
\r
        // 4. Files.move (Atomic rename / relocation):\r
        Path renamedFile = baseFolder.resolve("renamed_final.txt");\r
        Files.move(sourceFile, renamedFile, StandardCopyOption.REPLACE_EXISTING);\r
        System.out.println(">>> 4. Files.move()              -> Moved to: " + renamedFile);\r
\r
        // 5. Files.deleteIfExists (Safe deletion without throwing exception if missing):\r
        Files.deleteIfExists(backupFile);\r
        Files.deleteIfExists(renamedFile);\r
        Files.deleteIfExists(baseFolder);\r
        Files.deleteIfExists(baseFolder.getParent());\r
        Files.deleteIfExists(baseFolder.getParent().getParent());\r
        System.out.println(">>> 5. Files.deleteIfExists()    -> Cleaned up all temporary files.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,n=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 7: Files Lifecycle Operations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LIFECYCLE OPERATIONS:\r
   - 'Files.createDirectories(path)': Creates entire folder chain.\r
   - 'Files.createFile(path)': Creates empty file (fails if exists).\r
   - 'Files.copy(src, dst, StandardCopyOption.REPLACE_EXISTING)'.\r
   - 'Files.move(src, dst, StandardCopyOption.ATOMIC_MOVE)'.\r
   - 'Files.delete(path)' vs 'Files.deleteIfExists(path)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the difference between 'Files.createDirectory()' and 'Files.createDirectories()' in Java NIO.2?",shortAnswer:"'Files.createDirectory(path)' creates only the single target directory and throws 'NoSuchFileException' if parent directories do not already exist. 'Files.createDirectories(path)' creates all missing parent directories in the entire hierarchy automatically (equivalent to 'mkdir -p' in Unix).",explanation:"createDirectories() is almost always preferred in production application startup scripts.",hint:"createDirectories creates the entire parent folder hierarchy automatically (like mkdir -p).",level:"Beginner",codeExample:'Files.createDirectories(Path.of("a", "b", "c")); // Creates all 3 folders'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"File Lifecycle"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["File Operations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"createDirectories()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"copy()"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"move()"})," & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"deleteIfExists()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Execute full filesystem lifecycle management: creating recursive directory hierarchies, copying files with replacement flags, and performing atomic moves."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"FileOperationsLifecycleDemo.java",highlightLines:[7,10,18,19,23,24,29,30,34,35,39,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"File Operations FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:n,title:"Module 005_004 Topic 7: Files Lifecycle Operations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic7_files_lifecycle_operations_note.txt"})}),e.jsx(a,{note:"Always use 'Files.createDirectories(path)' with the plural 's' at the end! It saves you from having to manually check and create parent folders one by one! — Sukanta Hui"})]})}export{h as default};
