import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const n=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 5: The java.nio.file.Files Utility Class Powerhouse: Static Operations Hub\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.lang.reflect.Method;\r
import java.lang.reflect.Modifier;\r
import java.nio.file.Files;\r
\r
public class FilesUtilityClassPowerhouseDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: java.nio.file.Files POWERHOUSE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Method[] methods = Files.class.getDeclaredMethods();\r
        int staticMethodCount = 0;\r
        for (Method m : methods) {\r
            if (Modifier.isStatic(m.getModifiers()) && Modifier.isPublic(m.getModifiers())) {\r
                staticMethodCount++;\r
            }\r
        }\r
\r
        System.out.println(">>> 1. Files Class Architecture:");\r
        System.out.println("  Class Type           : Final utility class with private constructor");\r
        System.out.println("  Total Public Methods : " + staticMethodCount + " static operations");\r
\r
        System.out.println("\\n>>> 2. 5 CORE CATEGORIES OF Files UTILITIES:");\r
        System.out.println("  Category 1 (Metadata Checks) : exists, isReadable, isDirectory, size, getLastModifiedTime.");\r
        System.out.println("  Category 2 (File Management) : createFile, createDirectories, copy, move, delete.");\r
        System.out.println("  Category 3 (One-Liner I/O)   : readString, writeString, readAllLines, readAllBytes.");\r
        System.out.println("  Category 4 (Stream Pipelines): lines, list, walk, find (Lazy Java 8 Streams).");\r
        System.out.println("  Category 5 (Attributes & ACL): getPosixFilePermissions, setAttribute, getFileStore.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 5: Files Utility Class Powerhouse\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FILES UTILITY CLASS:\r
   - Contains 50+ static, atomic, thread-safe operations.\r
   - Throws descriptive checked 'IOException' subclasses (NoSuchFileException).\r
   - Handles metadata, file copying, atomic moves, one-liner reading, and streams.\r
   - Central entry point for all modern Java I/O.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is 'java.nio.file.Files' designed as a final utility class with only static methods rather than instance methods on Path?",shortAnswer:"'Path' is an immutable locator interface, decoupling the path representation from physical filesystem operations. 'Files' is the centralized static operations hub that delegates operations to the underlying FileSystemProvider SPI, ensuring thread safety, clean separation of concerns, and full pluggability.",explanation:"Same design pattern used by java.util.Collections and java.util.Arrays.",hint:"Decouples the immutable path locator from physical filesystem operations.",level:"Intermediate",codeExample:'Path p = Path.of("data.txt"); long size = Files.size(p); // Static invocation'}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Files Powerhouse"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.nio.file.Files"})," Utility Class Powerhouse"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Tour the central command center of modern Java I/O: surveying the 5 core method families of ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Files"})," covering metadata, file management, one-liner I/O, and lazy stream processing."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"FilesUtilityClassPowerhouseDemo.java",highlightLines:[7,10,16,17,24,25,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Files Powerhouse FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:r,title:"Module 005_004 Topic 5: Files Utility Powerhouse",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic5_files_powerhouse_note.txt"})}),e.jsx(s,{note:"Whenever you want to do anything with a file in Java—check if it exists, read all its text, copy it, or delete it—your first thought should always be: 'Files.methodName(path)'! — Sukanta Hui"})]})}export{y as default};
