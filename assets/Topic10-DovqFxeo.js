import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 005_002: Character Streams & Text File Processing\r
 * Topic 10: StringReader & StringWriter: Wrapping Java Strings as Stream Sources & Sinks (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.PrintWriter;\r
import java.io.StringReader;\r
import java.io.StringWriter;\r
import java.io.IOException;\r
\r
public class StringReaderWriterCapstoneDemo {\r
\r
    // Method that accepts a generic Reader (Can receive File, Network, or in-memory StringReader):\r
    public static int countWordsInStream(java.io.Reader reader) throws IOException {\r
        int wordCount = 0;\r
        boolean inWord = false;\r
        int ch;\r
\r
        while ((ch = reader.read()) != -1) {\r
            if (Character.isWhitespace(ch)) {\r
                inWord = false;\r
            } else if (!inWord) {\r
                inWord = true;\r
                wordCount++;\r
            }\r
        }\r
        return wordCount;\r
    }\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: StringReader & StringWriter CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. StringReader: Feeding a Java String into any API expecting a Reader:\r
        String courseText = "Barrackpore Academy trains students in Java Core Spring Boot and Microservices";\r
        try (StringReader strReader = new StringReader(courseText)) {\r
            int words = countWordsInStream(strReader);\r
            System.out.println(">>> 1. StringReader Word Count: " + words + " words detected.");\r
        }\r
\r
        // 2. StringWriter: Capturing complex formatted output into an in-memory StringBuffer:\r
        StringWriter strWriter = new StringWriter();\r
        try (PrintWriter pw = new PrintWriter(strWriter)) {\r
            pw.printf("Student: %-15s | Hub: %s%n", "Swadeep Paul", "Barrackpore");\r
            pw.printf("Student: %-15s | Hub: %s%n", "Tuhina Das", "Naihati");\r
            pw.printf("Student: %-15s | Hub: %s%n", "Abhronila Das", "Shyamnagar");\r
        }\r
\r
        System.out.println("\\n>>> 2. StringWriter Captured Buffer Output:");\r
        System.out.println(strWriter.toString());\r
\r
        System.out.println("==========================================================================");\r
        System.out.println(" MODULE 005_002 CHARACTER STREAMS & TEXT FILE PROCESSING 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_002: Character Streams & Text File Processing\r
Topic 10: StringReader & StringWriter Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 005_002 SUMMARY:\r
   - Character streams (16-bit Reader/Writer) handle multi-byte Unicode safely.\r
   - Core classes: Reader & Writer (implements Flushable & AutoCloseable).\r
   - FileReader & FileWriter (Java 11+ explicit StandardCharsets.UTF_8).\r
   - JEP 400 made UTF-8 the default across all OS platforms in Java 18.\r
   - InputStreamReader & OutputStreamWriter bridge byte and character worlds.\r
   - Always use StandardCharsets.UTF_8 constant.\r
   - StringReader & StringWriter enable in-memory stream interoperability.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do 'StringReader' and 'StringWriter' enable high-performance interoperability between Java String manipulation and Stream-based APIs?",shortAnswer:"'StringReader' wraps an existing Java String as a 'Reader' source, allowing strings to be passed seamlessly to parser libraries (XML, JSON, CSV) expecting stream inputs. 'StringWriter' uses an internal StringBuffer as a 'Writer' sink, allowing complex stream-based formatters (like PrintWriter) to construct strings without disk or socket overhead.",explanation:"Essential for JSON/XML serialization libraries (Jackson, Gson, JAXB).",hint:"StringReader turns Strings into Readers; StringWriter captures Writer stream output into a String.",level:"Advanced",codeExample:"StringWriter sw = new StringWriter(); ex.printStackTrace(new PrintWriter(sw)); String trace = sw.toString();"}];function x(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_002 · Topic 10"}),r.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Character Stream Capstone"})]}),r.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[r.jsx("code",{className:"text-emerald-400 font-mono",children:"StringReader"})," & ",r.jsx("code",{className:"text-sky-400 font-mono",children:"StringWriter"}),": Wrapping Strings as Stream Sources & Sinks (Capstone)"]}),r.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize character I/O mastery: bridging Java Strings into stream-compatible sources and capturing rich multi-line formatted reports into in-memory StringWriters."})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:i,title:"StringReaderWriterCapstoneDemo.java",highlightLines:[7,13,14,20,21,35,36,42,43,44]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{title:"String Streams FAQs",questions:o})}),r.jsx("section",{className:"space-y-4",children:r.jsx(n,{content:s,title:"Module 005_002 Topic 10: String Streams Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_002_topic10_string_streams_capstone_note.txt"})}),r.jsx(a,{note:"Congratulations on completing Module 005_002! You have mastered Unicode text processing, Reader/Writer core methods, modern UTF-8 Charsets, JEP 400 standards, and in-memory String/CharArray stream pipelines! — Sukanta Hui"})]})}export{x as default};
