import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const n=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 1: Introduction to Java NIO.2 Architecture (java.nio.file Package)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.nio.file.FileSystem;\r
import java.nio.file.FileSystems;\r
import java.nio.file.spi.FileSystemProvider;\r
\r
public class Nio2ArchitectureIntroductionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: INTRODUCTION TO JAVA NIO.2 ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        FileSystem defaultFs = FileSystems.getDefault();\r
        FileSystemProvider provider = defaultFs.provider();\r
\r
        System.out.println(">>> 1. Current JVM FileSystem SPI Provider:");\r
        System.out.println("  FileSystem Class   : " + defaultFs.getClass().getSimpleName());\r
        System.out.println("  Provider Class     : " + provider.getClass().getName());\r
        System.out.println("  Path Separator     : " + defaultFs.getSeparator());\r
\r
        System.out.println("\\n>>> 2. THE 4 PILLARS OF JAVA NIO.2 (JSR 203):");\r
        System.out.println("  Pillar 1: 'java.nio.file.Path'      -> Modern immutable locator interface (replaces java.io.File).");\r
        System.out.println("  Pillar 2: 'java.nio.file.Files'     -> Static utility powerhouse with 50+ atomic, stream-ready methods.");\r
        System.out.println("  Pillar 3: 'java.nio.file.FileSystem'-> Pluggable filesystem SPI (supports ZIP/JAR/Cloud filesystems as virtual drives!).");\r
        System.out.println("  Pillar 4: 'java.nio.file.WatchService' -> Real-time native OS kernel directory change watcher.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 1: Introduction to NIO.2\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NIO.2 ARCHITECTURE:\r
   - 'Path': Immutable representation of hierarchical paths.\r
   - 'Files': Static helper methods for CRUD operations.\r
   - 'FileSystems.getDefault()': Queries native OS filesystem.\r
   - Supports pluggable custom providers (e.g. ZIP file systems).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the 4 fundamental architectural pillars introduced by Java NIO.2 (JSR 203) in the 'java.nio.file' package?",shortAnswer:"1. 'Path': Modern immutable locator interface representing filesystem path locations. 2. 'Files': Comprehensive static utility class for file manipulation, reading, and stream operations. 3. 'FileSystem / FileSystems': Pluggable filesystem SPI enabling ZIP, JAR, and cloud buckets to be navigated as native paths. 4. 'WatchService': Native OS kernel file change monitoring service.",explanation:"Introduced in Java 7 and refined in Java 11/17.",hint:"Path, Files, FileSystem SPI, and WatchService.",level:"Beginner",codeExample:'Path p = Path.of("data.txt"); boolean exists = Files.exists(p);'}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"NIO.2 Architecture"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Introduction to Java NIO.2 (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.nio.file"})," Package)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the modern I/O paradigm: exploring the 4 core pillars of NIO.2, pluggable FileSystem SPI providers, and native operating system integration."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"Nio2ArchitectureIntroductionDemo.java",highlightLines:[7,10,16,17,23,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"NIO.2 Architecture FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 005_004 Topic 1: Introduction to NIO.2",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic1_nio2_architecture_note.txt"})}),e.jsx(i,{note:"NIO.2 is one of the most elegant APIs in Java! Instead of using old java.io.File, you use the 'Path' interface for locations and the static 'Files' utility class for all operations! — Sukanta Hui"})]})}export{f as default};
