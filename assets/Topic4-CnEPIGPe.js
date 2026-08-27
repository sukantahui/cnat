import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 005_002: Character Streams & Text File Processing\r
 * Topic 4: FileReader & FileWriter: Text File I/O & Java 11+ Charset Constructors\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.File;\r
import java.io.FileReader;\r
import java.io.FileWriter;\r
import java.io.IOException;\r
import java.nio.charset.StandardCharsets;\r
\r
public class FileReaderWriterTextIoDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: FileReader & FileWriter - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        File file = new File("barrackpore_students.txt");\r
\r
        // 1. FileWriter (Java 11+ explicit Charset constructor & append mode):\r
        System.out.println(">>> 1. Writing Text File with FileWriter (UTF-8):");\r
        try (FileWriter writer = new FileWriter(file, StandardCharsets.UTF_8, false)) {\r
            writer.write("Batch 2026: Java Core & AccoTax Professional\\n");\r
            writer.write("Hub: Barrackpore, West Bengal\\n");\r
            writer.write("Students: Swadeep Paul, Tuhina Das, Abhronila Das\\n");\r
        }\r
        System.out.println("  Wrote 3 lines to: " + file.getName());\r
\r
        // 2. FileReader (Java 11+ explicit Charset constructor):\r
        System.out.println("\\n>>> 2. Reading Text File with FileReader (UTF-8):");\r
        try (FileReader reader = new FileReader(file, StandardCharsets.UTF_8)) {\r
            char[] buffer = new char[64];\r
            int readCount;\r
            while ((readCount = reader.read(buffer)) != -1) {\r
                System.out.print(new String(buffer, 0, readCount));\r
            }\r
        }\r
\r
        // Cleanup temporary file:\r
        file.delete();\r
\r
        System.out.println("\\n\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_002: Character Streams & Text File Processing\r
Topic 4: FileReader & FileWriter\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FILEREADER & FILEWRITER (Java 11+):\r
   - Always pass 'StandardCharsets.UTF_8'.\r
   - 'new FileWriter(file, StandardCharsets.UTF_8, appendMode)'.\r
   - Avoid legacy constructors that rely on OS default encoding.\r
   - Clean, lightweight for small text files.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why was using 'FileReader' and 'FileWriter' prior to Java 11 considered risky in enterprise applications?",shortAnswer:"Prior to Java 11, 'FileReader' and 'FileWriter' always used the host operating system's default platform encoding (e.g. Windows-1252 on Windows vs UTF-8 on Linux) and did NOT allow passing a 'Charset' parameter. A file written on Windows would get corrupted when read on Linux. In Java 11+, constructors accepting 'StandardCharsets.UTF_8' were finally added.",explanation:"Java 11 rectified a 20-year-old API omission in Java I/O.",hint:"Pre-Java 11 constructors did not support Charset, causing cross-platform encoding bugs.",level:"Intermediate",codeExample:"new FileReader(file, StandardCharsets.UTF_8); // Java 11+"}];function F(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_002 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Text File I/O"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"FileReader"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"FileWriter"}),": Reading & Writing Text Files"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Process text files safely: leveraging modern Java 11+ ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"StandardCharsets.UTF_8"})," constructors to eliminate cross-platform operating system encoding corruption."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"FileReaderWriterTextIoDemo.java",highlightLines:[7,10,19,20,21,28,29,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"FileReader & Writer FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 005_002 Topic 4: FileReader & FileWriter",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_002_topic4_file_reader_writer_note.txt"})}),e.jsx(n,{note:"If you are on Java 11+, always write 'new FileWriter(file, StandardCharsets.UTF_8)'! Never omit the charset, otherwise your code might work on your Windows PC in Barrackpore but fail on an AWS Linux server! — Sukanta Hui"})]})}export{F as default};
