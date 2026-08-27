import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 005_002: Character Streams & Text File Processing\r
 * Topic 9: CharArrayReader & CharArrayWriter: High-Speed In-Memory Text Streams\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.CharArrayReader;\r
import java.io.CharArrayWriter;\r
import java.io.IOException;\r
\r
public class CharArrayReaderWriterMemoryDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: CharArrayReader & CharArrayWriter - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. CharArrayWriter (Dynamic in-memory character buffer):\r
        CharArrayWriter charWriter = new CharArrayWriter();\r
        charWriter.write("Barrackpore ");\r
        charWriter.write("Academic ");\r
        charWriter.write("Ledger 2026");\r
\r
        char[] capturedChars = charWriter.toCharArray();\r
        System.out.println(">>> 1. CharArrayWriter Buffer Content:");\r
        System.out.println("  Size in Chars : " + charWriter.size());\r
        System.out.println("  Extracted Array: " + new String(capturedChars));\r
\r
        // 2. CharArrayReader (Reading from in-memory character array):\r
        System.out.println("\\n>>> 2. CharArrayReader Stream Traversal:");\r
        try (CharArrayReader charReader = new CharArrayReader(capturedChars)) {\r
            int ch;\r
            while ((ch = charReader.read()) != -1) {\r
                System.out.print((char) Character.toUpperCase(ch));\r
            }\r
            System.out.println();\r
        }\r
\r
        System.out.println("\\n>>> USE CASES FOR CharArrayReader / CharArrayWriter:");\r
        System.out.println("  1. Unit Testing: Mocking stream APIs in JUnit without touching physical disk files.");\r
        System.out.println("  2. In-Memory Text Transformation: Fast intermediate buffering before writing to disk/network.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_002: Character Streams & Text File Processing\r
Topic 9: CharArrayReader & CharArrayWriter\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. IN-MEMORY STREAMS:\r
   - 'CharArrayWriter': Dynamic auto-expanding character buffer.\r
   - 'CharArrayReader': Reads from 'char[]' array as a stream.\r
   - Zero OS disk overhead; pure RAM execution.\r
   - Perfect for JUnit test mocking and stream transformations.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"When should a developer use 'CharArrayReader' and 'CharArrayWriter' in Java?",shortAnswer:"'CharArrayReader' and 'CharArrayWriter' are used for in-memory character stream processing. They are ideal for unit testing (mocking Readers/Writers without disk I/O) and in-memory text manipulation where data needs to be buffered into a dynamic character array before being sent across a network or written to disk.",explanation:"Memory-based streams have no underlying OS file descriptors and closing them has no effect.",hint:"Used for in-memory character stream processing, dynamic buffering, and unit test mocking.",level:"Intermediate",codeExample:'CharArrayWriter caw = new CharArrayWriter(); caw.write("Hello"); char[] arr = caw.toCharArray();'}];function x(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_002 · Topic 9"}),r.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"In-Memory Streams"})]}),r.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[r.jsx("code",{className:"text-emerald-400 font-mono",children:"CharArrayReader"})," & ",r.jsx("code",{className:"text-sky-400 font-mono",children:"CharArrayWriter"}),": In-Memory Character Processing"]}),r.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Process text streams purely in RAM: using auto-expanding character buffers for high-speed text transformations and zero-disk JUnit test mocking."})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:i,title:"CharArrayReaderWriterMemoryDemo.java",highlightLines:[7,10,16,17,18,20,26,27,28]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(a,{title:"In-Memory Streams FAQs",questions:o})}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{content:s,title:"Module 005_002 Topic 9: CharArray Streams",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_002_topic9_char_array_streams_note.txt"})}),r.jsx(n,{note:"When writing unit tests in JUnit, you don't want to create temporary files on your hard drive! Use CharArrayWriter and StringReader to test your stream methods purely in RAM! — Sukanta Hui"})]})}export{x as default};
