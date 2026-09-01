import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 005_002: Character Streams & Text File Processing\r
 * Topic 8: Specifying Explicit Charset: StandardCharsets.UTF_8 Best Practices\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.InputStream;\r
import java.io.InputStreamReader;\r
import java.io.Reader;\r
import java.nio.charset.StandardCharsets;\r
\r
public class ExplicitCharsetBestPracticeDemo {\r
\r
    public static String readStreamWithGuaranteedUtf8(InputStream in) throws Exception {\r
        // ALWAYS pass 'StandardCharsets.UTF_8' explicitly as the 2nd constructor argument:\r
        try (Reader reader = new InputStreamReader(in, StandardCharsets.UTF_8)) {\r
            StringBuilder sb = new StringBuilder();\r
            char[] buf = new char[128];\r
            int read;\r
            while ((read = reader.read(buf)) != -1) {\r
                sb.append(buf, 0, read);\r
            }\r
            return sb.toString();\r
        }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: EXPLICIT StandardCharsets.UTF_8 - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        byte[] payload = "Barrackpore Academy: Trainee Swadeep Paul registered 100% attendance 🌟".getBytes(StandardCharsets.UTF_8);\r
        InputStream inputStream = new ByteArrayInputStream(payload);\r
\r
        String decodedResult = readStreamWithGuaranteedUtf8(inputStream);\r
        System.out.println(">>> Decoded Content: " + decodedResult);\r
\r
        System.out.println("\\n>>> WHY USE StandardCharsets.UTF_8 INSTEAD OF "UTF-8"?");\r
        System.out.println("  1. Type Safety: Constant of type 'java.nio.charset.Charset' (no misspelled strings).");\r
        System.out.println("  2. Performance: Pre-allocated static instance (avoids runtime Charset.forName() lookups).");\r
        System.out.println("  3. No Checked Exception: Does not throw UnsupportedEncodingException!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_002: Character Streams & Text File Processing\r
Topic 8: StandardCharsets Best Practices\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. StandardCharsets ADVANTAGES:\r
   - 'StandardCharsets.UTF_8' from 'java.nio.charset'.\r
   - Avoids string typos like "UTF8" or "utf-8".\r
   - No 'UnsupportedEncodingException' declared.\r
   - Pre-allocated static Charset instance for maximum speed.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:`Why should developers always use 'StandardCharsets.UTF_8' instead of the string literal '"UTF-8"' in Java I/O?`,shortAnswer:`1. 'StandardCharsets.UTF_8' is a pre-initialized static constant of type 'Charset', eliminating expensive runtime 'Charset.forName("UTF-8")' string lookups. 2. It avoids typos ('utf8', 'UTF8') at compile time. 3. It avoids throwing the checked 'UnsupportedEncodingException' that string-based constructors declare.`,explanation:"Standard practice in modern Java 7+ and enterprise codebases.",hint:"Compile-time type safety, zero Charset.forName() lookup overhead, and no UnsupportedEncodingException.",level:"Beginner",codeExample:"new InputStreamReader(is, StandardCharsets.UTF_8); // Clean and fast"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_002 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Charset Best Practice"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Specifying Explicit Charset: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"StandardCharsets.UTF_8"})," Best Practices"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply modern Java best practices: using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"StandardCharsets.UTF_8"})," constants to eliminate runtime charset lookup overhead and checked exception boilerplate."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ExplicitCharsetBestPracticeDemo.java",highlightLines:[7,10,14,15,16,17,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Explicit Charset FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 005_002 Topic 8: StandardCharsets Best Practices",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_002_topic8_standard_charsets_note.txt"})}),e.jsx(n,{note:"Never pass 'UTF-8' as a String! Always import 'java.nio.charset.StandardCharsets' and use 'StandardCharsets.UTF_8'! It is faster, safer, and cleaner! — Sukanta Hui"})]})}export{S as default};
