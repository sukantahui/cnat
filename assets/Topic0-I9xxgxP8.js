import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
 * Topic 0: Comprehensive Review of Segment 5: Streams, NIO.2, Serialization & Properties\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io.lab;\r
\r
public class Segment5IoGrandReviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: SEGMENT 5 GRAND ARCHITECTURAL REVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 6 ARCHITECTURAL PILLARS OF JAVA I/O & FILE HANDLING:");\r
        System.out.println("  1. BYTE STREAMS        : InputStream & OutputStream (8-bit binary, PDFs, images, raw network).");\r
        System.out.println("  2. CHARACTER STREAMS   : Reader & Writer (16-bit Unicode, UTF-8, multi-byte international text).");\r
        System.out.println("  3. BUFFERED I/O        : 8KB RAM arrays eliminating kernel syscalls (BufferedReader / PrintWriter).");\r
        System.out.println("  4. MODERN JAVA NIO.2   : Path (Path.of), Files (50+ atomic methods), FileChannel, WatchService.");\r
        System.out.println("  5. OBJECT SERIALIZATION: Converting heap graphs to bytes, transient fields, serialVersionUID.");\r
        System.out.println("  6. CONFIG & DATA FORMAT: java.util.Properties, RFC 4180 CSV parsing, and JSON models.");\r
\r
        System.out.println("\\n>>> CLASSROOM TRAINEES: Swadeep Paul, Tuhina Das, Abhronila Das, Debangshu Mukherjee");\r
        System.out.println(">>> Segment 5 equips developers with the complete toolkit to build enterprise file pipelines!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
Topic 0: Segment 5 Grand Review\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SEGMENT 5 MASTERY MAP:\r
   - Module 1: Java I/O Architecture & Byte Streams.\r
   - Module 2: Character Streams & Text File Processing (UTF-8).\r
   - Module 3: Buffered Streams, BufferedReader & PrintWriter.\r
   - Module 4: Modern Java NIO.2: Paths, Files & FileChannels.\r
   - Module 5: Object Serialization & The transient Keyword.\r
   - Module 6: Working with CSV, JSON, Properties & Config Files.\r
   - Module 7: Hands-On Capstone Mini-Projects & Real-World Lab.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Summarize the key architectural difference between classic Java I/O (java.io) and modern Java NIO.2 (java.nio.file).",shortAnswer:"Classic 'java.io' is stream-oriented and blocking, using legacy 'File' which suffers from silent boolean failures and poor large-directory performance. Modern 'java.nio.file' (NIO.2) uses the immutable 'Path' interface, the static 'Files' powerhouse with 50+ atomic methods, lazy Java 8 Streams (Files.lines/walk), and native OS kernel event monitoring (WatchService).",explanation:"Standard progression in modern enterprise Java development.",hint:"java.io is stream-based and blocking; NIO.2 is Path/Files-based, atomic, lazy-stream ready, and kernel-integrated.",level:"Intermediate",codeExample:"// Classic: File f = new File(); → Modern: Path p = Path.of(); Files.readString(p);"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_007 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Segment 5 Grand Review"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Review of Segment 5: Streams, Buffered I/O, NIO.2, Serialization & Properties"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize Java I/O mastery: reviewing the 6 core pillars of stream architecture, modern NIO.2 utilities, and binary serialization before building real-world projects."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"Segment5IoGrandReviewDemo.java",highlightLines:[7,13,14,15,16,17,18]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Segment 5 Review FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 005_007 Topic 0: Segment 5 Grand Review",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_007_topic0_segment5_review_note.txt"})}),e.jsx(r,{note:"Welcome to the final capstone lab of Segment 5! In this module, we will put everything together to build a multi-threaded server log analyzer, an encrypted file vault, and a flat-file database engine! — Sukanta Hui"})]})}export{g as default};
