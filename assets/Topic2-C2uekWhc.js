import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 005_002: Character Streams & Text File Processing\r
 * Topic 2: Core Methods of java.io.Reader: read(), read(char[]), ready() & close()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.StringReader;\r
import java.io.Reader;\r
import java.io.IOException;\r
\r
public class ReaderCoreMethodsDeepDiveDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: java.io.Reader CORE METHODS DEEP DIVE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String syllabusSnippet = "Barrackpore Java Academy: Module 005 Character Streams Deep Dive";\r
\r
        try (Reader reader = new StringReader(syllabusSnippet)) {\r
            // 1. ready() -> Non-blocking check if stream is ready to be read:\r
            System.out.println(">>> 1. reader.ready() : " + reader.ready());\r
\r
            // 2. read() -> Reads a single character (Returned as int [0-65535], or -1 for EOF):\r
            int firstChar = reader.read();\r
            System.out.println(">>> 2. First Char     : '" + (char) firstChar + "' (Unicode Code: " + firstChar + ")");\r
\r
            // 3. read(char[] cbuf, int offset, int len) -> Fast buffer block reading:\r
            char[] buffer = new char[16];\r
            int charsRead = reader.read(buffer, 0, buffer.length);\r
            System.out.println(">>> 3. Block Read     : Read " + charsRead + " characters -> "" + new String(buffer, 0, charsRead) + """);\r
\r
            // 4. Reading the remaining stream until -1 (EOF):\r
            System.out.print(">>> 4. Remaining Stream: "");\r
            int ch;\r
            while ((ch = reader.read()) != -1) {\r
                System.out.print((char) ch);\r
            }\r
            System.out.println(""");\r
        }\r
\r
        System.out.println("\\n>>> SUMMARY OF READER RETURN VALUES:");\r
        System.out.println("  - 'read()' returns 'int' (0 to 65535) or '-1' at EOF (End of File).");\r
        System.out.println("  - 'read(char[])' returns number of chars read or '-1' if no more chars exist.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_002: Character Streams & Text File Processing\r
Topic 2: Core Methods of Reader\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE READER METHODS:\r
   - 'int read()'                    : Reads 1 char (returns 0-65535 or -1 for EOF).\r
   - 'int read(char[] cbuf)'         : Reads block into buffer array.\r
   - 'boolean ready()'               : Returns true if read won't block.\r
   - 'void close()'                  : Closes stream and frees OS descriptor.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does the 'Reader.read()' method return an 'int' instead of a 'char' in Java?",shortAnswer:"Because 'char' is an unsigned 16-bit type (range 0 to 65535) and cannot represent the End-Of-File sentinel signal (-1). By returning an 'int' (32-bit signed), the method can return valid character codes (0 to 65535) while using '-1' unambiguously to signal EOF.",explanation:"If read() returned char, there would be no way to distinguish char '\\uFFFF' (65535) from EOF.",hint:"An int is required to accommodate the special -1 End-of-File (EOF) sentinel value.",level:"Beginner",codeExample:"int ch = reader.read(); if (ch == -1) { /* EOF reached */ }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_002 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reader API"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Core Methods of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Reader"}),": ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"read()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"read(char[])"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"ready()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the reader method suite: reading single characters, filling array block buffers, verifying non-blocking readiness, and detecting -1 EOF boundaries."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"ReaderCoreMethodsDeepDiveDemo.java",highlightLines:[7,10,16,17,20,24,25,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Reader Methods FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 005_002 Topic 2: Core Methods of Reader",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_002_topic2_reader_core_methods_note.txt"})}),e.jsx(n,{note:"Always check 'while ((ch = reader.read()) != -1)' when processing character streams! Storing the return value in an int before casting to (char) prevents premature termination! — Sukanta Hui"})]})}export{f as default};
