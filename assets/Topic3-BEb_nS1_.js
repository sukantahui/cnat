import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 005_002: Character Streams & Text File Processing\r
 * Topic 3: Core Methods of java.io.Writer: write(), write(String), flush() & close()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.StringWriter;\r
import java.io.Writer;\r
import java.io.IOException;\r
\r
public class WriterCoreMethodsDeepDiveDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: java.io.Writer CORE METHODS DEEP DIVE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        try (Writer writer = new StringWriter()) {\r
            // 1. write(int c) -> Writes a single 16-bit character:\r
            writer.write('B');\r
            writer.write('K');\r
            writer.write('P');\r
            writer.write(' ');\r
\r
            // 2. write(char[] cbuf, int offset, int len) -> Writes block of characters:\r
            char[] chars = "Java Core Mastery".toCharArray();\r
            writer.write(chars, 0, chars.length);\r
\r
            // 3. write(String str) -> High-level String writing (Exclusive to Writer! OutputStream lacks this!):\r
            writer.write(" | Batch 2026");\r
\r
            // 4. flush() -> Forces buffered characters to the underlying storage/network sink:\r
            writer.flush();\r
\r
            System.out.println(">>> Formatted StringWriter Content:");\r
            System.out.println("  " + writer.toString());\r
        }\r
\r
        System.out.println("\\n>>> WHY WRITER IS SUPERIOR TO OUTPUTSTREAM FOR TEXT:");\r
        System.out.println("  - 'Writer.write(String)' allows writing Strings directly without calling 'str.getBytes()'.");\r
        System.out.println("  - 'Writer.append(CharSequence)' supports method chaining under the Appendable interface.");\r
        System.out.println("  - 'flush()' guarantees that memory buffers are physically committed.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_002: Character Streams & Text File Processing\r
Topic 3: Core Methods of Writer\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE WRITER METHODS:\r
   - 'write(int c)'                  : Writes 1 char.\r
   - 'write(char[] cbuf, off, len)'  : Writes char array slice.\r
   - 'write(String str)'             : Writes String directly.\r
   - 'flush()'                       : Flushes internal memory buffers.\r
   - 'close()'                       : Flushes buffers and closes stream.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What major convenience method is available on 'java.io.Writer' that does NOT exist on 'java.io.OutputStream'?",shortAnswer:"'Writer.write(String str)'. With Writer, you can pass a Java String directly to 'write(str)'. With OutputStream, you are forced to convert the String to raw bytes first ('os.write(str.getBytes(StandardCharsets.UTF_8))'), which is error-prone and causes encoding inconsistencies.",explanation:"Writer also implements java.lang.Appendable, supporting writer.append('a').append('b').",hint:"Writer allows passing String directly to write(str) without calling getBytes().",level:"Beginner",codeExample:'writer.write("Hello World"); // Direct String writing'}];function g(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_002 · Topic 3"}),r.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Writer API"})]}),r.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Core Methods of ",r.jsx("code",{className:"text-emerald-400 font-mono",children:"Writer"}),": ",r.jsx("code",{className:"text-emerald-300 font-mono",children:"write()"}),", ",r.jsx("code",{className:"text-sky-400 font-mono",children:"write(String)"}),", ",r.jsx("code",{className:"text-amber-400 font-mono",children:"flush()"})]}),r.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master character output mechanics: writing single characters, passing strings directly to ",r.jsx("code",{className:"text-sky-300 font-mono",children:"write(String)"}),", and flushing memory buffers."]})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:s,title:"WriterCoreMethodsDeepDiveDemo.java",highlightLines:[7,10,16,17,18,22,23,26,29]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{title:"Writer Methods FAQs",questions:o})}),r.jsx("section",{className:"space-y-4",children:r.jsx(n,{content:a,title:"Module 005_002 Topic 3: Core Methods of Writer",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_002_topic3_writer_core_methods_note.txt"})}),r.jsx(i,{note:"Notice how convenient 'writer.write('My String')' is! You never have to worry about converting strings to byte arrays manually! Just pass the String and let Writer do the work! — Sukanta Hui"})]})}export{g as default};
