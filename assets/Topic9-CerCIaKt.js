import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 9: Modern One-Liner I/O: Files.readString() & Files.writeString() (Java 11+)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.IOException;\r
import java.nio.charset.StandardCharsets;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.nio.file.StandardOpenOption;\r
\r
public class ModernOneLinerReadWriteStringDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: Files.readString & writeString (JAVA 11+) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path sampleFile = Files.createTempFile("quick_io_sample_", ".txt");\r
\r
        // 1. Files.writeString (One-liner text write with UTF-8 default):\r
        String initialData = "Barrackpore Academic Hub: Java 11+ One-Liner I/O Mastery\\n";\r
        Files.writeString(sampleFile, initialData, StandardCharsets.UTF_8);\r
        System.out.println(">>> 1. Files.writeString() -> Wrote initial payload in 1 line of code!");\r
\r
        // 2. Files.writeString with StandardOpenOption.APPEND:\r
        String appendData = "Enrolled Trainees: Swadeep Paul, Tuhina Das, Abhronila Das\\n";\r
        Files.writeString(sampleFile, appendData, StandardCharsets.UTF_8, StandardOpenOption.APPEND);\r
        System.out.println(">>> 2. Files.writeString(APPEND) -> Appended extra line.");\r
\r
        // 3. Files.readString (One-liner complete file read into String):\r
        String completeContent = Files.readString(sampleFile, StandardCharsets.UTF_8);\r
        System.out.println("\\n>>> 3. Files.readString() Output:");\r
        System.out.println(completeContent);\r
\r
        // Cleanup:\r
        Files.deleteIfExists(sampleFile);\r
\r
        System.out.println(">>> THE MODERN ONE-LINER REVOLUTION:");\r
        System.out.println("  - Replaces 10 lines of legacy FileInputStream / BufferedReader boilerplate.");\r
        System.out.println("  - Automatically manages stream opening, buffering, and closing.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 9: Files.readString & writeString\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JAVA 11 ONE-LINER I/O:\r
   - 'Files.readString(path, StandardCharsets.UTF_8)'.\r
   - 'Files.writeString(path, text, StandardCharsets.UTF_8, options...)'.\r
   - Supports 'StandardOpenOption.APPEND', 'CREATE', 'TRUNCATE_EXISTING'.\r
   - Perfect for files up to a few megabytes (JSON, YAML, CSV).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What makes 'Files.readString(path)' and 'Files.writeString(path, content)' (introduced in Java 11) the preferred way to handle small-to-medium text files?",shortAnswer:"They allow reading or writing an entire text file in a single line of code with zero boilerplate. They automatically manage internal stream allocation, buffering, character decoding (UTF-8 by default), and resource closing, eliminating the need for manual try-with-resources BufferedReader/Writer loops for standard configuration, JSON, or template files.",explanation:"Added in Java 11 under JEP 181/330 to simplify text file processing.",hint:"Single-line full text reading and writing with automatic stream opening, buffering, and closing.",level:"Beginner",codeExample:'String json = Files.readString(Path.of("config.json"));'}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java 11 One-Liners"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Convenience Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Files.readString()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Files.writeString()"})," (Java 11+)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Write elegant modern Java: reading and writing complete text payloads in a single line of code with automatic resource management and appending options."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"ModernOneLinerReadWriteStringDemo.java",highlightLines:[7,10,19,20,24,25,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"One-Liner I/O FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 005_004 Topic 9: Files.readString & writeString",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic9_read_write_string_note.txt"})}),e.jsx(a,{note:"If you are on Java 11 or higher, you almost never need to write a 15-line BufferedReader loop for small config files! Just call 'String content = Files.readString(path)' and you are done! — Sukanta Hui"})]})}export{S as default};
