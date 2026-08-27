import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 005_003: Buffered Streams, BufferedReader & PrintWriter\r
 * Topic 3: BufferedReader: High-Speed Line-by-Line Processing & readLine()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.BufferedReader;\r
import java.io.StringReader;\r
import java.io.IOException;\r
\r
public class BufferedReaderReadLineContractDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: BufferedReader readLine() CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String multilineStudentRoster =\r
                "STU_101, Swadeep Paul, Barrackpore, Java Professional\\n" +\r
                "STU_102, Tuhina Das, Naihati, Full Stack Developer\\n" +\r
                "STU_103, Abhronila Das, Shyamnagar, Tax Automation\\n" +\r
                "STU_104, Debangshu Mukherjee, Ichapur, Microservices Architect";\r
\r
        System.out.println(">>> 1. Processing Lines with BufferedReader.readLine():");\r
        try (BufferedReader br = new BufferedReader(new StringReader(multilineStudentRoster))) {\r
            String line;\r
            int lineNumber = 1;\r
\r
            // THE CANONICAL IDIOM: Returns String for valid line, or null at EOF:\r
            while ((line = br.readLine()) != null) {\r
                System.out.printf("  [LINE %d] %s%n", lineNumber++, line);\r
            }\r
        }\r
\r
        System.out.println("\\n>>> 3 CRITICAL INVARIANTS OF readLine():");\r
        System.out.println("  1. Strips Line Terminators: The returned String does NOT contain '\\\\n' or '\\\\r'.");\r
        System.out.println("  2. Universal Line Breaks: Recognizes '\\\\n' (Unix/Linux), '\\\\r\\\\n' (Windows), and '\\\\r' (legacy Mac).");\r
        System.out.println("  3. EOF Signal: Returns 'null' when end of stream is encountered.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_003: Buffered Streams & PrintWriter\r
Topic 3: BufferedReader readLine()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BufferedReader.readLine() RULES:\r
   - Canonical loop: 'while ((line = br.readLine()) != null)'.\r
   - Returns String content without trailing '\\n' or '\\r'.\r
   - Returns 'null' at EOF.\r
   - 10x to 50x faster than Scanner for raw line extraction.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What does 'BufferedReader.readLine()' return upon reaching the End-Of-File (EOF), and does the returned line contain line break characters?",shortAnswer:"1. 'readLine()' returns 'null' when the end of the stream is reached (unlike read() which returns -1). 2. The returned String does NOT include any line termination characters ('\\n' or '\\r\\n'); they are automatically stripped by the method.",explanation:"Universal line parser recognizing Windows (\\r\\n), Linux (\\n), and legacy Mac (\\r) line endings.",hint:"Returns null on EOF, and strips trailing \\n or \\r\\n line terminators from the returned string.",level:"Beginner",codeExample:"String line; while ((line = br.readLine()) != null) { ... }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_003 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Line-by-Line I/O"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"BufferedReader"}),": Reading Text Line-by-Line using ",e.jsx("code",{className:"text-sky-400 font-mono",children:"readLine()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the industry standard line reader: parsing multi-line text files, recognizing universal line terminators, and handling null EOF return contracts."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"BufferedReaderReadLineContractDemo.java",highlightLines:[7,10,19,20,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"BufferedReader FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 005_003 Topic 3: BufferedReader readLine()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_003_topic3_buffered_reader_note.txt"})}),e.jsx(a,{note:"Every Java developer must know this idiom by heart: 'while ((line = br.readLine()) != null)'! It is the most ubiquitous line-reading pattern in the entire Java ecosystem! — Sukanta Hui"})]})}export{f as default};
