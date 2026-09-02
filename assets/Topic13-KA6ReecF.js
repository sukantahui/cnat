import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 13: java.nio.channels.FileChannel: High-Performance Buffer Channel I/O\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.IOException;\r
import java.nio.ByteBuffer;\r
import java.nio.channels.FileChannel;\r
import java.nio.charset.StandardCharsets;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.nio.file.StandardOpenOption;\r
\r
public class FileChannelByteBufferIoDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: FileChannel & ByteBuffer - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path channelFile = Files.createTempFile("channel_demo_", ".dat");\r
\r
        // 1. Writing via FileChannel:\r
        System.out.println(">>> 1. Writing Data via FileChannel:");\r
        try (FileChannel writeChannel = FileChannel.open(channelFile, StandardOpenOption.CREATE, StandardOpenOption.WRITE)) {\r
            byte[] data = "Barrackpore High-Performance Channel Architecture 2026".getBytes(StandardCharsets.UTF_8);\r
            ByteBuffer writeBuf = ByteBuffer.wrap(data);\r
            int bytesWritten = writeChannel.write(writeBuf);\r
            System.out.println("  Bytes Written via Channel: " + bytesWritten);\r
        }\r
\r
        // 2. Reading via FileChannel:\r
        System.out.println("\\n>>> 2. Reading Data via FileChannel & ByteBuffer:");\r
        try (FileChannel readChannel = FileChannel.open(channelFile, StandardOpenOption.READ)) {\r
            ByteBuffer readBuf = ByteBuffer.allocate(128); // Allocates direct RAM buffer\r
            int bytesRead = readChannel.read(readBuf);\r
\r
            readBuf.flip(); // FLIP: Switches buffer mode from Writing to Reading!\r
            byte[] raw = new byte[readBuf.remaining()];\r
            readBuf.get(raw);\r
\r
            System.out.println("  Read Output : "" + new String(raw, StandardCharsets.UTF_8) + """);\r
        }\r
\r
        // Cleanup:\r
        Files.deleteIfExists(channelFile);\r
\r
        System.out.println("\\n>>> THE 3 BUFFER POINTERS (Capacity, Limit, Position):");\r
        System.out.println("  1. 'capacity' : Total fixed size of buffer memory.");\r
        System.out.println("  2. 'position' : Current cursor index.");\r
        System.out.println("  3. 'limit'    : Maximum index that can be read or written.");\r
        System.out.println("  4. 'flip()'   : Sets limit = position, then position = 0 (prep for reading).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 13: FileChannel & ByteBuffer\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CHANNEL & BUFFER LIFECYCLE:\r
   - 'FileChannel.open(path, StandardOpenOption.READ/WRITE)'.\r
   - 'ByteBuffer.allocate(size)' or 'ByteBuffer.allocateDirect(size)'.\r
   - Writing data: advances 'position'.\r
   - 'flip()': switches buffer to reading mode (limit = pos, pos = 0).\r
   - 'clear()': resets buffer for fresh writes (pos = 0, limit = cap).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the purpose of calling 'ByteBuffer.flip()' before reading data out of a ByteBuffer in Java NIO?",shortAnswer:"When writing data into a ByteBuffer (via channel.read(buf) or buf.put()), the 'position' pointer advances towards 'capacity'. Calling 'flip()' sets 'limit' to the current position (marking the end of valid data) and resets 'position' back to 0. This switches the buffer state from 'Writing Mode' to 'Reading Mode' so you can read the written data from the beginning.",explanation:"Fundamental lifecycle rule of Java NIO ByteBuffers.",hint:"Sets limit to current position and resets position to 0, switching buffer to reading mode.",level:"Advanced",codeExample:"buf.clear(); channel.read(buf); buf.flip(); while(buf.hasRemaining()) { buf.get(); }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Channel I/O"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.nio.channels.FileChannel"}),": High-Performance Channel I/O & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"ByteBuffer"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master direct channel mechanics: understanding position, limit, and capacity pointers and executing high-throughput byte buffer state flips."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"FileChannelByteBufferIoDemo.java",highlightLines:[7,10,20,21,22,23,29,30,31,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"FileChannel FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 005_004 Topic 13: FileChannel & ByteBuffer",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic13_file_channel_byte_buffer_note.txt"})}),e.jsx(r,{note:"Mastering 'ByteBuffer.flip()' is the rite of passage for every senior Java engineer! Writing pushes position forward; flip() snaps it back to index 0 so you can read what you just wrote! — Sukanta Hui"})]})}export{x as default};
