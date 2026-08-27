import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 005_002: Character Streams & Text File Processing\r
 * Topic 7: Bridging Byte Streams to Character Streams: InputStreamReader & OutputStreamWriter\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.ByteArrayOutputStream;\r
import java.io.InputStreamReader;\r
import java.io.OutputStreamWriter;\r
import java.io.Reader;\r
import java.io.Writer;\r
import java.nio.charset.StandardCharsets;\r
\r
public class ByteToCharacterBridgeStreamDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: BRIDGING BYTE & CHARACTER STREAMS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ByteArrayOutputStream byteBuffer = new ByteArrayOutputStream();\r
\r
        // 1. OutputStreamWriter (Bridge: Writes characters to an underlying Byte stream):\r
        System.out.println(">>> 1. OutputStreamWriter Bridge (Characters -> UTF-8 Bytes):");\r
        try (Writer bridgeWriter = new OutputStreamWriter(byteBuffer, StandardCharsets.UTF_8)) {\r
            bridgeWriter.write("AccoTax GST Master Ledger: ₹45,000 Paid (Barrackpore)");\r
            bridgeWriter.flush();\r
        }\r
\r
        byte[] rawBytes = byteBuffer.toByteArray();\r
        System.out.println("  Produced Raw Byte Array Length: " + rawBytes.length + " bytes");\r
\r
        // 2. InputStreamReader (Bridge: Reads UTF-8 bytes and decodes into characters):\r
        System.out.println("\\n>>> 2. InputStreamReader Bridge (UTF-8 Bytes -> Characters):");\r
        try (Reader bridgeReader = new InputStreamReader(new ByteArrayInputStream(rawBytes), StandardCharsets.UTF_8)) {\r
            StringBuilder textBuffer = new StringBuilder();\r
            int ch;\r
            while ((ch = bridgeReader.read()) != -1) {\r
                textBuffer.append((char) ch);\r
            }\r
            System.out.println("  Decoded Text: " + textBuffer.toString());\r
        }\r
\r
        System.out.println("\\n>>> THE BRIDGE ARCHITECTURE:");\r
        System.out.println("  - InputStreamReader:  InputStream  (Bytes) -> Reader (Chars) with explicit Charset.");\r
        System.out.println("  - OutputStreamWriter: Writer (Chars)      -> OutputStream (Bytes) with explicit Charset.");\r
        System.out.println("  - Indispensable for reading HTTP response streams, network sockets, and System.in!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_002: Character Streams & Text File Processing\r
Topic 7: Byte to Character Bridge Streams\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BRIDGE ARCHITECTURE:\r
   - 'InputStreamReader' : InputStream (Bytes) &rarr; Reader (Chars).\r
   - 'OutputStreamWriter': Writer (Chars) &rarr; OutputStream (Bytes).\r
   - Always supply 'StandardCharsets.UTF_8' as the 2nd constructor parameter.\r
   - Core mechanism used by 'new Scanner(System.in)' and 'new BufferedReader(new InputStreamReader(System.in))'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the architectural role of 'InputStreamReader' and 'OutputStreamWriter' in Java I/O?",shortAnswer:"They function as the fundamental 'Bridge' classes connecting the byte-stream world (InputStream/OutputStream) to the character-stream world (Reader/Writer). An 'InputStreamReader' reads raw bytes from an InputStream and decodes them into characters using a specified Charset; an 'OutputStreamWriter' encodes characters into raw bytes and writes them to an OutputStream.",explanation:"Indispensable for reading network socket streams (socket.getInputStream()) and System.in.",hint:"Bridges byte streams to character streams by encoding and decoding using a specified Charset.",level:"Intermediate",codeExample:"Reader r = new InputStreamReader(socket.getInputStream(), StandardCharsets.UTF_8);"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_002 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream Bridge"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Bridging Byte to Character Streams: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"InputStreamReader"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"OutputStreamWriter"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build stream conversion bridges: connecting raw network and keyboard byte inputs to character readers with explicit UTF-8 decoding."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"ByteToCharacterBridgeStreamDemo.java",highlightLines:[7,10,19,20,21,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Bridge Streams FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 005_002 Topic 7: Byte to Character Bridges",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_002_topic7_stream_bridges_note.txt"})}),e.jsx(n,{note:"Whenever you read from System.in or a network Socket, you get raw bytes (InputStream)! Use InputStreamReader with StandardCharsets.UTF_8 to bridge those bytes into clean text! — Sukanta Hui"})]})}export{y as default};
