import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as i}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 10: Loading Multi-Line Files into Collections: Files.readAllLines()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.IOException;\r
import java.nio.charset.StandardCharsets;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.util.List;\r
\r
public class FilesReadAllLinesCollectionDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: Files.readAllLines() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path sampleFile = Files.createTempFile("lines_sample_", ".txt");\r
\r
        List<String> inputLines = List.of(\r
                "BATCH_01: Swadeep Paul (Barrackpore)",\r
                "BATCH_02: Tuhina Das (Naihati)",\r
                "BATCH_03: Abhronila Das (Shyamnagar)",\r
                "BATCH_04: Debangshu Mukherjee (Ichapur)"\r
        );\r
\r
        // Write List<String> directly:\r
        Files.write(sampleFile, inputLines, StandardCharsets.UTF_8);\r
\r
        // Read all lines directly into List<String>:\r
        System.out.println(">>> 1. Files.readAllLines() -> Ingesting complete file into List<String>:");\r
        List<String> loadedLines = Files.readAllLines(sampleFile, StandardCharsets.UTF_8);\r
\r
        System.out.println("  Loaded Lines Count: " + loadedLines.size());\r
        for (int i = 0; i < loadedLines.size(); i++) {\r
            System.out.println("  [" + (i + 1) + "] " + loadedLines.get(i));\r
        }\r
\r
        // Cleanup:\r
        Files.deleteIfExists(sampleFile);\r
\r
        System.out.println("\\n>>> MEMORY CAUTION WITH readAllLines():");\r
        System.out.println("  - 'Files.readAllLines()' loads the ENTIRE file into Java Heap RAM simultaneously.");\r
        System.out.println("  - Safe for small-to-medium files (up to 50 MB).");\r
        System.out.println("  - NEVER use for gigabyte files! For massive files, use 'Files.lines(path)' (lazy stream)!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 10: Files.readAllLines()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. readAllLines() USAGE:\r
   - 'List<String> lines = Files.readAllLines(path, StandardCharsets.UTF_8)'.\r
   - 'Files.write(path, List<String>, StandardCharsets.UTF_8)'.\r
   - Eager memory loading; ideal for small configs and CSVs.\r
   - For massive big data files, use lazy 'Files.lines(path)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,r=[{question:"When should you use 'Files.readAllLines(path)' vs 'Files.lines(path)' in Java NIO.2?",shortAnswer:"'Files.readAllLines(path)' loads all lines eagerly into a 'List<String>' in Java Heap RAM simultaneously; it is ideal for small files where random indexed access is required. 'Files.lines(path)' returns a lazy 'Stream<String>' that streams lines on-demand without loading the entire file into RAM, making it mandatory for massive multi-gigabyte log files.",explanation:"Choosing readAllLines on a 2GB file will throw OutOfMemoryError.",hint:"readAllLines loads all lines into a List in RAM; Files.lines() streams lazily for huge files.",level:"Intermediate",codeExample:"List<String> list = Files.readAllLines(path); // Eager RAM list"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"List Ingestion"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Loading Multi-Line Files: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Files.readAllLines()"})," into Collections"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Ingest multi-line files directly into Java collections: reading and writing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"List<String>"})," objects and analyzing heap memory boundaries."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(i,{fileModule:s,title:"FilesReadAllLinesCollectionDemo.java",highlightLines:[7,10,21,22,25,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"readAllLines FAQs",questions:r})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:l,title:"Module 005_004 Topic 10: Files.readAllLines",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic10_read_all_lines_note.txt"})}),e.jsx(a,{note:"If you need to sort, filter, or index lines from a text file, 'Files.readAllLines(path, StandardCharsets.UTF_8)' gives you an instant List<String> in 1 line! — Sukanta Hui"})]})}export{g as default};
