import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 005_003: Buffered Streams, BufferedReader & PrintWriter\r
 * Topic 4: Reading a Physical Disk Text File Line-by-Line with BufferedReader\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.BufferedReader;\r
import java.io.File;\r
import java.io.FileReader;\r
import java.io.FileWriter;\r
import java.io.IOException;\r
import java.nio.charset.StandardCharsets;\r
\r
public class BufferedReaderDiskFileLineLoopDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: BufferedReader DISK FILE LOOP - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        File sampleFile = new File("barrackpore_attendance_log.txt");\r
\r
        // Write sample test data:\r
        try (FileWriter fw = new FileWriter(sampleFile, StandardCharsets.UTF_8)) {\r
            fw.write("2026-03-01 | Swadeep Paul | Present | 100% Score\\n");\r
            fw.write("2026-03-01 | Tuhina Das   | Present | 100% Score\\n");\r
            fw.write("2026-03-01 | Abhronila Das| Present | 100% Score\\n");\r
        }\r
\r
        // CANONICAL DISK READING PIPELINE:\r
        System.out.println(">>> Reading and Parsing Attendance Log:");\r
        try (BufferedReader br = new BufferedReader(new FileReader(sampleFile, StandardCharsets.UTF_8))) {\r
            String line;\r
            int count = 0;\r
            while ((line = br.readLine()) != null) {\r
                count++;\r
                String[] tokens = line.split("\\\\|");\r
                System.out.printf("  Record #%d: Date=%s | Trainee=%s | Status=%s%n",\r
                        count, tokens[0].trim(), tokens[1].trim(), tokens[2].trim());\r
            }\r
            System.out.println("\\n  Total Records Processed: " + count);\r
        }\r
\r
        // Cleanup:\r
        sampleFile.delete();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_003: Buffered Streams & PrintWriter\r
Topic 4: BufferedReader Disk File Loop\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DISK FILE LINE READING PATTERN:\r
   - 'new BufferedReader(new FileReader(file, StandardCharsets.UTF_8))'.\r
   - 'while ((line = br.readLine()) != null)' loop.\r
   - Parse tokens with 'line.split(",")' or StringTokenizer.\r
   - Enclosed in Try-with-Resources for automatic closing.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is wrapping 'FileReader' inside 'BufferedReader' recommended for reading text files in Java?",shortAnswer:"Wrapping 'FileReader' inside 'BufferedReader' ('new BufferedReader(new FileReader(file, StandardCharsets.UTF_8))') adds an 8KB memory buffer that drastically reduces disk head seek operations and provides the high-level 'readLine()' method, allowing clean line-by-line file parsing.",explanation:"Standard design pattern for all text file processing in Java.",hint:"Combines 8KB disk buffering with the high-level readLine() method.",level:"Beginner",codeExample:"try (BufferedReader br = new BufferedReader(new FileReader(f, StandardCharsets.UTF_8))) { ... }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_003 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"File Parsing Loop"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Reading a Text File Line-by-Line in a Loop: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"while ((line = br.readLine()) != null)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Construct production-grade file parsers: chaining buffered file readers with UTF-8 character sets and tokenizing delimited lines inside robust loops."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"BufferedReaderDiskFileLineLoopDemo.java",highlightLines:[7,10,27,28,30,31,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"File Line Loop FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 005_003 Topic 4: BufferedReader File Loop",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_003_topic4_buffered_reader_file_loop_note.txt"})}),e.jsx(t,{note:"When parsing log files from Barrackpore or Naihati, always use BufferedReader with the while-loop pattern! It consumes almost zero memory even when reading a 2-gigabyte file! — Sukanta Hui"})]})}export{x as default};
