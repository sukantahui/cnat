import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 005_002: Character Streams & Text File Processing\r
 * Topic 5: Character Encodings & Charsets: UTF-8, UTF-16, US-ASCII & ISO-8859-1\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.nio.charset.StandardCharsets;\r
\r
public class CharacterCharsetsComparisonDemo {\r
\r
    public static void inspectEncoding(String sampleText) {\r
        System.out.println("  Input Text: "" + sampleText + """);\r
\r
        byte[] asciiBytes = sampleText.getBytes(StandardCharsets.US_ASCII);\r
        byte[] isoBytes   = sampleText.getBytes(StandardCharsets.ISO_8859_1);\r
        byte[] utf8Bytes  = sampleText.getBytes(StandardCharsets.UTF_8);\r
        byte[] utf16Bytes = sampleText.getBytes(StandardCharsets.UTF_16);\r
\r
        System.out.printf("  - US-ASCII   : %2d bytes (7-bit English only)%n", asciiBytes.length);\r
        System.out.printf("  - ISO-8859-1 : %2d bytes (8-bit Western European)%n", isoBytes.length);\r
        System.out.printf("  - UTF-8      : %2d bytes (1 to 4 bytes variable - World Standard!)%n", utf8Bytes.length);\r
        System.out.printf("  - UTF-16     : %2d bytes (2 or 4 bytes fixed - Internal Java memory)%n%n", utf16Bytes.length);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: CHARACTER ENCODING & CHARSETS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. ASCII English Text:");\r
        inspectEncoding("Barrackpore");\r
\r
        System.out.println(">>> 2. International Multi-Byte Text (Bengali):");\r
        inspectEncoding("ব্যারাকপুর");\r
\r
        System.out.println(">>> 3. Emojis & Supplementary Code Points:");\r
        inspectEncoding("Java 🚀🔥");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_002: Character Streams & Text File Processing\r
Topic 5: Character Encodings & Charsets\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MAJOR CHARSETS:\r
   - 'US-ASCII'   : 7-bit (0-127). English only.\r
   - 'ISO-8859-1' : 8-bit (0-255). Latin-1.\r
   - 'UTF-8'      : 1-4 bytes variable. Global standard.\r
   - 'UTF-16'     : 2 or 4 bytes. JVM internal String memory.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is 'UTF-8' the undisputed global standard for character encoding on the Web and in enterprise systems?",shortAnswer:"1. Variable-length encoding (1 to 4 bytes) that is 100% backward-compatible with 7-bit ASCII. 2. Extremely memory-efficient for ASCII/English text (1 byte per char) while supporting all 150,000+ Unicode characters across all world languages. 3. Endianness-neutral (no byte-order-mark ambiguity across different CPU architectures).",explanation:"Powers over 98% of all websites and modern data formats (JSON, XML, HTML, REST APIs).",hint:"Variable-length, backward-compatible with ASCII, supports all Unicode languages, and endian-neutral.",level:"Beginner",codeExample:"byte[] b = str.getBytes(StandardCharsets.UTF_8);"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_002 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Encoding Architecture"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Character Encodings & Charsets: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"UTF-8"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"UTF-16"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"ASCII"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"ISO-8859-1"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand international text representation: comparing variable-length UTF-8 with internal JVM UTF-16 and legacy 8-bit Latin charsets."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"CharacterCharsetsComparisonDemo.java",highlightLines:[7,10,13,14,15,16,26,29,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Charsets FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 005_002 Topic 5: Character Encodings & Charsets",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_002_topic5_character_charsets_note.txt"})}),e.jsx(a,{note:"Always use 'StandardCharsets.UTF_8' constant from java.nio.charset! Never type the string 'UTF-8' as a raw string literal to avoid UnsupportedEncodingException! — Sukanta Hui"})]})}export{y as default};
