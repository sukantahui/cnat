import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 13: Converting String to Char Array & Byte Array (StandardCharsets.UTF_8)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
import java.nio.charset.StandardCharsets;\r
import java.util.Arrays;\r
\r
public class StringToCharArrayAndByteArrayDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: toCharArray() & getBytes(UTF_8) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String academy = "Barrackpore";\r
\r
        // 1. Converting String to char[]:\r
        char[] charArr = academy.toCharArray();\r
        System.out.println(">>> 1. char[] Array (16-bit UTF-16 code units):");\r
        System.out.println("  charArr: " + Arrays.toString(charArr));\r
\r
        // 2. Converting String to byte[] using explicit StandardCharsets.UTF_8:\r
        byte[] utf8Bytes = academy.getBytes(StandardCharsets.UTF_8);\r
        System.out.println("\\n>>> 2. byte[] UTF-8 Binary Bytes (For Network & File I/O):");\r
        System.out.println("  byte[] Length : " + utf8Bytes.length + " bytes");\r
        System.out.println("  utf8Bytes     : " + Arrays.toString(utf8Bytes));\r
\r
        // 3. Reconstructing String from byte[]:\r
        String reconstructed = new String(utf8Bytes, StandardCharsets.UTF_8);\r
        System.out.println("\\n>>> 3. Reconstructed String from bytes:");\r
        System.out.println("  Result: "" + reconstructed + """);\r
\r
        System.out.println("\\n>>> BEST PRACTICE: NEVER call getBytes() without specifying StandardCharsets.UTF_8!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 13: char[] and byte[] Conversions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BINARY CONVERSION RULES:\r
   - 'str.toCharArray()'                     &rarr; Generates fresh copy of 'char[]'.\r
   - 'str.getBytes(StandardCharsets.UTF_8)'  &rarr; Encodes into UTF-8 byte stream.\r
   - 'new String(bytes, UTF_8)'              &rarr; Decodes UTF-8 bytes back to String.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why should you always specify 'StandardCharsets.UTF_8' when calling 'String.getBytes()'?",shortAnswer:"Calling parameterless 'getBytes()' uses the operating system's default charset (e.g. Windows-1252), causing silent data corruption when deployed across different platforms (e.g. Linux servers). 'StandardCharsets.UTF_8' guarantees universal cross-platform consistency.",explanation:"Always explicitly supply StandardCharsets.UTF_8 for binary and network encoding.",hint:"Prevents platform-dependent charset corruption across Windows and Linux servers.",level:"Intermediate",codeExample:"byte[] data = text.getBytes(StandardCharsets.UTF_8);"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 13"}),t.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Binary & Char Encoding"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Converting String to ",t.jsx("code",{className:"text-purple-400 font-mono",children:"char[]"})," & ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"byte[]"})," (",t.jsx("code",{className:"text-emerald-300 font-mono",children:"StandardCharsets.UTF_8"}),")"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to encode strings for low-level I/O and network transmission: extracting character arrays via ",t.jsx("code",{className:"text-purple-300 font-mono",children:"toCharArray()"})," and enforcing cross-platform UTF-8 binary streams."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(r,{fileModule:s,title:"StringToCharArrayAndByteArrayDemo.java",highlightLines:[7,17,21,26]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"Encoding FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:o,title:"Module 003_001 Topic 13: Char and Byte Array Conversions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic13_encoding_note.txt"})}),t.jsx(a,{note:"Never call str.getBytes() without StandardCharsets.UTF_8! If you do, code tested on your Windows laptop will corrupt Hindi or Bengali characters when deployed to a Linux cloud server! — Sukanta Hui"})]})}export{x as default};
