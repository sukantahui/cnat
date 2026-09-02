import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 005_002: Character Streams & Text File Processing\r
 * Topic 6: The Default Charset Dilemma & Java 18 UTF-8 by Default (JEP 400)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.nio.charset.Charset;\r
import java.nio.charset.StandardCharsets;\r
\r
public class DefaultCharsetDilemmaJep400Demo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THE DEFAULT CHARSET DILEMMA (JEP 400) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Charset defaultCharset = Charset.defaultCharset();\r
        System.out.println(">>> 1. Current JVM Active Default Charset:");\r
        System.out.println("  Charset.defaultCharset() : " + defaultCharset.displayName());\r
\r
        System.out.println("\\n>>> 2. The Pre-Java 18 Default Charset Dilemma:");\r
        System.out.println("  - In Java 1.0 to 17, default charset was determined by the Host Operating System!");\r
        System.out.println("  - Windows English : windows-1252 (Latin-1 variant).");\r
        System.out.println("  - Linux / macOS   : UTF-8.");\r
        System.out.println("  - Windows Asian   : GBK or Shift_JIS.");\r
        System.out.println("  - RESULT: Calling 'new FileReader(f)' created files that corrupted when shared across OSs!");\r
\r
        System.out.println("\\n>>> 3. The Java 18 Breakthrough (JEP 400):");\r
        System.out.println("  - Starting with Java 18, the default charset for ALL APIs is standardized to UTF-8 on ALL operating systems!");\r
        System.out.println("  - Best Practice: Even on modern Java, EXPLICITLY specify 'StandardCharsets.UTF_8' for 100% portable backward compatibility!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_002: Character Streams & Text File Processing\r
Topic 6: Default Charset Dilemma (JEP 400)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JEP 400 (JAVA 18+):\r
   - Pre-Java 18: OS-dependent charset (windows-1252 vs UTF-8).\r
   - Java 18+: Universal UTF-8 default across all OS platforms.\r
   - Best Practice: Explicitly pass 'StandardCharsets.UTF_8' in all I/O calls.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What was JEP 400 in Java 18 and why was it one of the most critical I/O milestones in Java history?",shortAnswer:"JEP 400 (Java 18) made 'UTF-8 by Default' standard across the entire Java platform on all operating systems. Prior to Java 18, methods like 'FileReader' or 'String.getBytes()' used the host OS default charset (windows-1252 on Windows, UTF-8 on Linux), which caused rampant silent cross-platform file corruption bugs.",explanation:"Eliminates platform-dependent encoding behavior permanently across Java runtimes.",hint:"Standardized UTF-8 as the default charset across all operating systems in Java 18.",level:"Intermediate",codeExample:"Charset c = Charset.defaultCharset(); // Guaranteed UTF-8 in Java 18+"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_002 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"JEP 400 Standard"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Default Charset Dilemma & Java 18 ",e.jsx("code",{className:"text-purple-400 font-mono",children:"UTF-8 by Default"})," (JEP 400)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace the evolution of Java charsets: understanding how JEP 400 standardized UTF-8 across all operating systems to eliminate platform encoding variance."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"DefaultCharsetDilemmaJep400Demo.java",highlightLines:[7,10,13,14,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"JEP 400 FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 005_002 Topic 6: Default Charset Dilemma",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_002_topic6_default_charset_jep400_note.txt"})}),e.jsx(n,{note:"Even though Java 18 made UTF-8 the default, never rely on default settings! In professional enterprise code, always write 'StandardCharsets.UTF_8' explicitly! — Sukanta Hui"})]})}export{f as default};
