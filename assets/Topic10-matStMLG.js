import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 005_003: Buffered Streams, BufferedReader & PrintWriter\r
 * Topic 10: Flushing Buffers: Explicit flush() vs Auto-Flush Behavior (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.ByteArrayOutputStream;\r
import java.io.PrintWriter;\r
\r
public class FlushingBuffersAutoFlushCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: BUFFER FLUSHING & AUTO-FLUSH CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ByteArrayOutputStream destination = new ByteArrayOutputStream();\r
\r
        // 1. PrintWriter WITHOUT Auto-Flush (autoFlush = false):\r
        PrintWriter manualPw = new PrintWriter(destination, false);\r
        manualPw.println("Line 1: Stored in memory buffer (Not yet sent to OS)");\r
        System.out.println(">>> 1. Before manual flush() -> Destination Size: " + destination.size() + " bytes");\r
\r
        manualPw.flush(); // Forces buffer to commit!\r
        System.out.println("  After manual flush()  -> Destination Size: " + destination.size() + " bytes");\r
\r
        // 2. PrintWriter WITH Auto-Flush (autoFlush = true):\r
        destination.reset();\r
        PrintWriter autoPw = new PrintWriter(destination, true); // autoFlush ENABLED!\r
        autoPw.println("Line 2: Auto-flushed immediately upon println()!");\r
        System.out.println("\\n>>> 2. With autoFlush=true -> Destination Size: " + destination.size() + " bytes (Instantly committed!)");\r
\r
        manualPw.close();\r
        autoPw.close();\r
\r
        System.out.println("\\n>>> 3 RULES OF BUFFER FLUSHING:");\r
        System.out.println("  1. 'close()' automatically triggers 'flush()' before releasing the resource.");\r
        System.out.println("  2. 'autoFlush=true' flushes only on 'println()', 'printf()', or 'format()' (NOT on 'print()').");\r
        System.out.println("  3. For interactive network sockets and real-time consoles, ALWAYS enable auto-flush!");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 005_003 BUFFERED STREAMS & PRINTWRITER 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_003: Buffered Streams & PrintWriter\r
Topic 10: Buffer Flushing & Auto-Flush Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 005_003 SUMMARY:\r
   - Buffering drastically reduces kernel syscalls and context switches.\r
   - Default buffer is 8192 units (8 KB bytes / 16 KB chars).\r
   - BufferedInputStream supports 'mark()' and 'reset()'.\r
   - BufferedReader.readLine() returns String or null at EOF.\r
   - BufferedWriter.newLine() provides platform-independent line breaks.\r
   - PrintWriter offers printf formatting and exception-free checkError().\r
   - BufferedReader is ~10x faster than Scanner for bulk file parsing.\r
   - Always flush network and interactive streams promptly.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"When 'autoFlush=true' is enabled on a PrintWriter, which method calls trigger an automatic flush?",shortAnswer:"Only 'println()', 'printf()', and 'format()' trigger an automatic flush. Calling 'print()' or 'write()' does NOT trigger an auto-flush (unless a newline '\\n' character is written and supported by the platform).",explanation:"Essential knowledge when streaming real-time chat messages or WebSocket payloads.",hint:"println(), printf(), and format() trigger auto-flush; simple print() does not.",level:"Advanced",codeExample:'PrintWriter pw = new PrintWriter(socket.getOutputStream(), true); pw.println("SYNC");'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_003 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Buffering Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Flushing Buffers: Explicit ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"flush()"})," vs Auto-Flush Behavior (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize buffered stream management: mastering manual buffer flushing, configuring real-time auto-flush for network sockets, and avoiding stream stall hazards."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"FlushingBuffersAutoFlushCapstoneDemo.java",highlightLines:[7,10,16,17,20,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Flush Mechanics FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 005_003 Topic 10: Buffer Flushing Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_003_topic10_buffer_flushing_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 005_003! You have mastered buffering mechanics, BufferedReader line processing, BufferedWriter cross-platform newlines, PrintWriter formatted tables, and high-performance I/O benchmarking! — Sukanta Hui"})]})}export{x as default};
