import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 9: Date & Time Creation Patterns: now(), of(), parse() Factory Methods\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.LocalDate;\r
import java.time.LocalDateTime;\r
import java.time.LocalTime;\r
import java.time.Month;\r
\r
public class DateTimeCreationPatternsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: DATE & TIME CREATION PATTERNS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Current System Instants (now()):\r
        LocalDate today = LocalDate.now();\r
        LocalTime nowTime = LocalTime.now();\r
        LocalDateTime nowDateTime = LocalDateTime.now();\r
\r
        System.out.println(">>> 1. now() Factory Methods:");\r
        System.out.println("  LocalDate.now()         : " + today);\r
        System.out.println("  LocalTime.now()         : " + nowTime);\r
        System.out.println("  LocalDateTime.now()     : " + nowDateTime);\r
\r
        // 2. Specific Instants (of()):\r
        LocalDate independenceDay = LocalDate.of(1947, Month.AUGUST, 15);\r
        LocalTime primeShowTime = LocalTime.of(19, 30, 0); // 07:30 PM\r
\r
        System.out.println("\\n>>> 2. of(...) Factory Methods:");\r
        System.out.println("  Indian Independence Day : " + independenceDay);\r
        System.out.println("  Prime Show Time         : " + primeShowTime);\r
\r
        // 3. String Parsing (parse()):\r
        LocalDate parsedDate = LocalDate.parse("2026-08-26"); // ISO-8601 standard format\r
        LocalDateTime parsedDt = LocalDateTime.parse("2026-08-26T14:30:00");\r
\r
        System.out.println("\\n>>> 3. parse(...) Factory Methods (ISO-8601):");\r
        System.out.println("  Parsed LocalDate        : " + parsedDate);\r
        System.out.println("  Parsed LocalDateTime    : " + parsedDt);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 9: Date/Time Creation Patterns\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CREATION TRIFECTA:\r
   - 'now()'   : Captures current system clock.\r
   - 'of()'    : Constructs specific temporal instance.\r
   - 'parse()' : Parses ISO-8601 string ('2026-08-26').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What format does 'LocalDate.parse(str)' expect by default in Java?",shortAnswer:"It expects the standard ISO-8601 calendar date format: 'YYYY-MM-DD' (e.g. '2026-08-26'). If the string violates this format (e.g. '26/08/2026'), it throws 'DateTimeParseException' unless a custom DateTimeFormatter is supplied.",explanation:"ISO-8601 is the default across all java.time parse methods.",hint:"Expects standard ISO-8601 format: YYYY-MM-DD.",level:"Beginner",codeExample:'LocalDate date = LocalDate.parse("2026-08-26"); // ISO-8601'}];function D(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Factory Patterns"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Date/Time Creation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"now()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"of()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"parse()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the three standard temporal instantiation patterns: capturing live system clocks, explicit calendar composition, and ISO-8601 string parsing."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"DateTimeCreationPatternsDemo.java",highlightLines:[7,16,17,18,24,25,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Creation Patterns FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 003_005 Topic 9: Date Creation Patterns",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic9_creation_patterns_note.txt"})}),e.jsx(r,{note:"Every class in java.time hides its constructors and provides static factory methods like 'now()', 'of()', and 'parse()'. This ensures objects are immutable and valid! — Sukanta Hui"})]})}export{D as default};
