import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 11: Binary File Operations: Files.readAllBytes() & Files.write(path, byte[])\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.IOException;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
\r
public class BinaryFilesReadAllBytesDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: Files.readAllBytes & write(byte[]) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path binaryFile = Files.createTempFile("binary_payload_", ".dat");\r
\r
        // 1. Simulating binary byte payload (e.g. Image header or PDF byte stream):\r
        byte[] originalPayload = new byte[] { (byte) 0x89, 'P', 'N', 'G', 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x01 };\r
\r
        // Write raw binary bytes in one line:\r
        Files.write(binaryFile, originalPayload);\r
        System.out.println(">>> 1. Files.write(path, byte[]) -> Wrote " + originalPayload.length + " raw bytes.");\r
\r
        // Read raw binary bytes in one line:\r
        byte[] readBack = Files.readAllBytes(binaryFile);\r
        System.out.println(">>> 2. Files.readAllBytes(path)  -> Read back " + readBack.length + " bytes.");\r
\r
        System.out.print("  Byte Hex Dump: ");\r
        for (byte b : readBack) {\r
            System.out.printf("0x%02X ", b);\r
        }\r
        System.out.println();\r
\r
        // Cleanup:\r
        Files.deleteIfExists(binaryFile);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 11: Binary Files.readAllBytes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BINARY I/O WITH NIO.2:\r
   - 'byte[] data = Files.readAllBytes(path)'.\r
   - 'Files.write(path, byte[] payload)'.\r
   - Zero character decoding; preserves exact raw bytes.\r
   - Ideal for images, PDFs, ZIP archives, and cryptographic tokens.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"When should developers use 'Files.readAllBytes(path)' instead of 'Files.readString(path)'?",shortAnswer:"'Files.readAllBytes(path)' is designed specifically for non-text binary files (such as PNG/JPEG images, audio/video clips, compiled .class bytecode files, ZIP archives, and encrypted cryptographic tokens) where character encoding/decoding should NEVER be applied.",explanation:"Attempting to read binary files with readString will corrupt binary bytes due to charset translation.",hint:"Use readAllBytes for binary files (images, audio, PDFs, archives) where charsets do not apply.",level:"Beginner",codeExample:'byte[] pngBytes = Files.readAllBytes(Path.of("logo.png"));'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Binary I/O"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Binary File Operations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Files.readAllBytes()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Files.write(path, byte[])"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Process binary assets without character corruption: reading and writing images, PDFs, bytecode binaries, and compressed archives in single-line operations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"BinaryFilesReadAllBytesDemo.java",highlightLines:[7,10,19,20,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"readAllBytes FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 005_004 Topic 11: Binary Files.readAllBytes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic11_binary_read_all_bytes_note.txt"})}),e.jsx(n,{note:"Never use readString() on an image or PDF! Character sets like UTF-8 will alter binary bytes and corrupt the file! Always use 'Files.readAllBytes(path)' for raw binary data! — Sukanta Hui"})]})}export{h as default};
