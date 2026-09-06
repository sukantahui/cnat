import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 005_003: Buffered Streams, BufferedReader & PrintWriter\r
 * Topic 2: BufferedInputStream & BufferedOutputStream: Decorating Byte Streams\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.BufferedInputStream;\r
import java.io.BufferedOutputStream;\r
import java.io.ByteArrayInputStream;\r
import java.io.ByteArrayOutputStream;\r
\r
public class BufferedByteStreamsDecoratorDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: BufferedInputStream & BufferedOutputStream - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ByteArrayOutputStream destination = new ByteArrayOutputStream();\r
\r
        // 1. BufferedOutputStream (Decorator Pattern: Wraps raw byte stream):\r
        System.out.println(">>> 1. Writing binary data through BufferedOutputStream:");\r
        try (BufferedOutputStream bos = new BufferedOutputStream(destination)) {\r
            byte[] binaryHeader = { (byte) 0xCA, (byte) 0xFE, (byte) 0xBA, (byte) 0xBE };\r
            bos.write(binaryHeader);\r
            bos.write("Barrackpore AccoTax Ledger Payload".getBytes());\r
            bos.flush(); // Forces internal 8KB buffer to empty into destination\r
        }\r
\r
        byte[] serializedData = destination.toByteArray();\r
        System.out.println("  Wrote " + serializedData.length + " buffered bytes.");\r
\r
        // 2. BufferedInputStream (Decorator Pattern: Wraps raw input stream):\r
        System.out.println("\\n>>> 2. Reading through BufferedInputStream with mark() and reset():");\r
        try (BufferedInputStream bis = new BufferedInputStream(new ByteArrayInputStream(serializedData))) {\r
            System.out.println("  bis.markSupported() : " + bis.markSupported()); // Returns true!\r
\r
            // Read magic header (4 bytes):\r
            byte[] magic = new byte[4];\r
            bis.read(magic);\r
            System.out.printf("  Magic Header Read   : 0x%02X 0x%02X 0x%02X 0x%02X%n", magic[0], magic[1], magic[2], magic[3]);\r
\r
            // Mark position:\r
            bis.mark(100);\r
            System.out.println("  [MARKED STREAM POSITION]");\r
\r
            // Read preview bytes:\r
            byte[] preview = new byte[11];\r
            bis.read(preview);\r
            System.out.println("  Preview Read        : "" + new String(preview) + """);\r
\r
            // Reset back to marked position:\r
            bis.reset();\r
            System.out.println("  [RESET STREAM POSITION]");\r
\r
            byte[] reread = new byte[11];\r
            bis.read(reread);\r
            System.out.println("  Re-read After Reset : "" + new String(reread) + "" (Identical replay!)");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_003: Buffered Streams & PrintWriter\r
Topic 2: Buffered Byte Streams\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BUFFERED BYTE STREAMS:\r
   - 'BufferedOutputStream': Wraps OutputStream; caches writes before OS flush.\r
   - 'BufferedInputStream' : Wraps InputStream; supports 'mark()' and 'reset()'.\r
   - Classic GoF Decorator Design Pattern implementation.\r
   - Always close the outermost decorator stream.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What powerful stream navigation feature does 'BufferedInputStream' support that raw 'FileInputStream' does NOT support?",shortAnswer:"'BufferedInputStream' supports 'mark(readlimit)' and 'reset()'. Because it caches data in an internal RAM array, you can mark a stream position, read ahead to inspect/preview headers or magic bytes, and then call 'reset()' to rewind the stream cursor back to the marked position without restarting the stream.",explanation:"bis.markSupported() returns true on BufferedInputStream, whereas FileInputStream returns false.",hint:"Supports mark(readlimit) and reset() for rewindable lookahead parsing.",level:"Intermediate",codeExample:"bis.mark(100); bis.read(header); bis.reset(); // Rewinds to mark"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_003 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Byte Decorator"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"BufferedInputStream"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"BufferedOutputStream"}),": Wrapping Byte Streams"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply the Decorator pattern to binary I/O: wrapping raw streams, executing buffered writes, and leveraging ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"mark()"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"reset()"})," lookahead parsing."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"BufferedByteStreamsDecoratorDemo.java",highlightLines:[7,10,18,19,21,28,29,36,42,45]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Buffered Byte Streams FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 005_003 Topic 2: Buffered Byte Streams",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_003_topic2_buffered_byte_streams_note.txt"})}),e.jsx(n,{note:"BufferedInputStream is famous for 'mark()' and 'reset()'! When writing binary parsers for PNG images or PDF files, you can read the first 4 bytes to check the file type and reset back without closing the stream! — Sukanta Hui"})]})}export{x as default};
