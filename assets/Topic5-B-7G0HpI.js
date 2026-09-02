import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 005_003: Buffered Streams, BufferedReader & PrintWriter\r
 * Topic 5: BufferedWriter: Buffered Text Output & Platform-Independent newLine()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.BufferedWriter;\r
import java.io.StringWriter;\r
import java.io.IOException;\r
\r
public class BufferedWriterNewLineContractDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: BufferedWriter & newLine() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StringWriter memoryBuffer = new StringWriter();\r
\r
        // 1. BufferedWriter Output Pipeline:\r
        try (BufferedWriter bw = new BufferedWriter(memoryBuffer)) {\r
            bw.write("Header: Barrackpore Educational Services");\r
            bw.newLine(); // Writes system-appropriate line separator ('\r
' on Windows, '\r
' on Linux)\r
\r
            bw.write("Course: Java Core & Enterprise Backend Masterclass");\r
            bw.newLine();\r
\r
            bw.write("Trainees: Swadeep Paul, Tuhina Das, Abhronila Das");\r
            bw.newLine();\r
\r
            bw.flush(); // Flushes internal 8KB buffer into the underlying writer\r
        }\r
\r
        System.out.println(">>> Formatted BufferedWriter Output:");\r
        System.out.println(memoryBuffer.toString());\r
\r
        System.out.println(">>> WHY bw.newLine() IS CRITICAL:");\r
        System.out.println("  1. Hardcoding '\\\\n' breaks on Windows tools like Notepad (prior to modern updates).");\r
        System.out.println("  2. 'bw.newLine()' queries 'System.lineSeparator()' dynamically for 100% OS portability.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_003: Buffered Streams & PrintWriter\r
Topic 5: BufferedWriter & newLine()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BUFFEREDWRITER BENEFITS:\r
   - Buffers character writes in 8KB memory chunks.\r
   - 'bw.newLine()' inserts OS-specific line separator ('System.lineSeparator()').\r
   - 'bw.flush()' pushes pending characters to destination.\r
   - Ideal for generating massive CSV and log exports.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why should developers use 'BufferedWriter.newLine()' instead of hardcoding '\\\\n' when writing text files?",shortAnswer:"'BufferedWriter.newLine()' inserts the platform-specific line separator determined by the underlying operating system ('\\r\\n' on Windows, '\\n' on Linux/macOS) by querying 'System.lineSeparator()'. Hardcoding '\\n' creates non-standard line endings on Windows systems.",explanation:"Ensures generated reports, CSVs, and logs open cleanly across all operating systems.",hint:"Inserts the OS-specific line separator ('\\r\\n' on Windows vs '\\n' on Linux) dynamically.",level:"Beginner",codeExample:'bw.write("Hello"); bw.newLine(); // Platform-independent line break'}];function w(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_003 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Buffered Writing"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"BufferedWriter"}),": Writing Buffered Text & Platform-Independent ",e.jsx("code",{className:"text-sky-400 font-mono",children:"newLine()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Generate cross-platform text files: using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"BufferedWriter"})," to batch disk writes and calling ",e.jsx("code",{className:"text-sky-300 font-mono",children:"newLine()"})," for seamless OS line break portability."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"BufferedWriterNewLineContractDemo.java",highlightLines:[7,10,19,20,21,23,24,26,27,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"BufferedWriter FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 005_003 Topic 5: BufferedWriter & newLine()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_003_topic5_buffered_writer_note.txt"})}),e.jsx(i,{note:"Never hardcode '\\r\\n' or '\\n' when writing files! Always use 'bw.newLine()' so your text files look clean whether opened on Windows, macOS, or Linux! — Sukanta Hui"})]})}export{w as default};
