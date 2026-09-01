import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 005_002: Character Streams & Text File Processing\r
 * Topic 0: Why Character Streams Are Needed: Multi-Byte Unicode & International Text\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.InputStreamReader;\r
import java.nio.charset.StandardCharsets;\r
\r
public class WhyCharacterStreamsAreEssentialDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY CHARACTER STREAMS ARE ESSENTIAL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Bengali Text with Multi-Byte UTF-8 characters (3 bytes per Bengali character!):\r
        String bengaliGreeting = "নমস্কার ব্যারাকপুর (Namaskar Barrackpore) 🚀";\r
        byte[] utf8Bytes = bengaliGreeting.getBytes(StandardCharsets.UTF_8);\r
\r
        System.out.println(">>> 1. The Multi-Byte Nature of International Text:");\r
        System.out.println("  Original Text Length (Characters) : " + bengaliGreeting.length());\r
        System.out.println("  UTF-8 Encoded Length (Raw Bytes)  : " + utf8Bytes.length + " bytes (3x expansion!)");\r
\r
        System.out.println("\\n>>> 2. The Byte Stream Trap (Reading 1 raw byte at a time corrupts characters):");\r
        System.out.print("  Byte Stream Cast Output: ");\r
        for (int i = 0; i < Math.min(12, utf8Bytes.length); i++) {\r
            System.out.print((char) utf8Bytes[i]); // CORRUPTS Unicode characters!\r
        }\r
        System.out.println(" <-- Mojibake / Corrupted Garbage!");\r
\r
        System.out.println("\\n>>> 3. The Character Stream Solution (Reader handles multi-byte decoding seamlessly):");\r
        try (InputStreamReader reader = new InputStreamReader(new ByteArrayInputStream(utf8Bytes), StandardCharsets.UTF_8)) {\r
            System.out.print("  Character Stream Output: ");\r
            int ch;\r
            while ((ch = reader.read()) != -1) {\r
                System.out.print((char) ch); // Correctly reconstructs complete Unicode code points!\r
            }\r
            System.out.println();\r
        }\r
\r
        System.out.println("\\n>>> WHY CHARACTER STREAMS WIN FOR TEXT:");\r
        System.out.println("  1. Byte Streams (InputStream/OutputStream) operate on raw 8-bit bytes (0-255).");\r
        System.out.println("  2. Character Streams (Reader/Writer) operate on 16-bit UTF-16 characters & handle multi-byte decoding.");\r
        System.out.println("  3. Completely eliminates character corruption and encoding mismatch bugs.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_002: Character Streams & Text File Processing\r
Topic 0: Why Character Streams Are Needed\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BYTE VS CHARACTER STREAMS:\r
   - Byte Streams (8-bit): InputStream, OutputStream (Images, audio, PDFs, binary).\r
   - Character Streams (16-bit): Reader, Writer (Text, JSON, CSV, logs).\r
   - Character streams decode multi-byte UTF-8 sequences (Bengali, Hindi, Emojis) cleanly.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why do Byte Streams (InputStream/OutputStream) fail and corrupt text when reading international languages like Bengali, Hindi, or Emoji characters?",shortAnswer:"Byte streams read and write raw 8-bit bytes. In modern UTF-8 encoding, non-ASCII characters (such as Bengali 'ন' or emojis '🚀') are represented by 2, 3, or 4 consecutive bytes. If a byte stream reads one 8-bit byte at a time and casts it to a char, it splits the multi-byte sequence in half, producing unreadable corrupted garbage ('Mojibake'). Character Streams (Reader/Writer) assemble complete multi-byte sequences into proper Unicode characters.",explanation:"Standard foundation of internationalization (i18n) in Java.",hint:"Byte streams read 1 byte at a time, splitting 2-to-4 byte UTF-8 Unicode characters into corrupted symbols.",level:"Beginner",codeExample:"Reader r = new InputStreamReader(is, StandardCharsets.UTF_8);"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_002 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Unicode Text Processing"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Why Character Streams Are Needed: Handling Multi-Byte Unicode & International Text"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover why character streams are mandatory for text processing: avoiding byte-level splitting of 3-byte Bengali characters and rendering clean international text."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"WhyCharacterStreamsAreEssentialDemo.java",highlightLines:[7,10,18,19,23,24,28,29,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Character Streams FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 005_002 Topic 0: Why Character Streams Are Needed",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_002_topic0_why_character_streams_note.txt"})}),e.jsx(n,{note:"Never use FileInputStream for reading Bengali or Hindi text files! In UTF-8, each Indian character takes 3 bytes. If you use a byte stream, you will read 1/3 of a letter and get corrupted gibberish! Always use a Reader! — Sukanta Hui"})]})}export{S as default};
