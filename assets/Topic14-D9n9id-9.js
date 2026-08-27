import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 14: Formatting & Parsing: java.time.format.DateTimeFormatter (Thread-Safe)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.LocalDateTime;\r
import java.time.format.DateTimeFormatter;\r
\r
public class DateTimeFormatterMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: DateTimeFormatter MASTERY (THREAD-SAFE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        LocalDateTime now = LocalDateTime.of(2026, 8, 26, 15, 30, 45);\r
\r
        // 1. Predefined Standard ISO Formatter:\r
        String isoOutput = now.format(DateTimeFormatter.ISO_DATE_TIME);\r
        System.out.println(">>> 1. ISO Standard Format: " + isoOutput);\r
\r
        // 2. Custom Indian Standard Date-Time Pattern (dd/MM/yyyy hh:mm a):\r
        DateTimeFormatter indianPattern = DateTimeFormatter.ofPattern("dd/MM/yyyy hh:mm:ss a");\r
        String formattedIndian = now.format(indianPattern);\r
        System.out.println("\\n>>> 2. Indian Standard Format: " + formattedIndian);\r
\r
        // 3. Custom Formal Text Pattern (dd-MMMM-yyyy):\r
        DateTimeFormatter formalPattern = DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy");\r
        String formalText = now.format(formalPattern);\r
        System.out.println("\\n>>> 3. Formal Calendar Text   : " + formalText);\r
\r
        // 4. Parsing Custom Formatted String back to LocalDateTime:\r
        String inputStr = "26/08/2026 03:30:45 PM";\r
        LocalDateTime parsedBack = LocalDateTime.parse(inputStr, indianPattern);\r
        System.out.println("\\n>>> 4. Parsed from Custom String: " + parsedBack);\r
\r
        System.out.println("\\n>>> KEY ADVANTAGE: DateTimeFormatter is 100% IMMUTABLE and THREAD-SAFE (Unlike SimpleDateFormat)!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 14: DateTimeFormatter Mastery\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FORMATTER PATTERNS:\r
   - 'dd/MM/yyyy'           : '26/08/2026'.\r
   - 'dd-MMMM-yyyy'         : '26-August-2026'.\r
   - 'hh:mm:ss a'           : '03:30:45 PM' (12-hour).\r
   - 'HH:mm:ss'             : '15:30:45' (24-hour).\r
   - 100% Immutable and Thread-Safe.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'java.time.format.DateTimeFormatter' superior to legacy 'java.text.SimpleDateFormat'?",shortAnswer:"'DateTimeFormatter' is completely immutable and thread-safe. It can be safely declared as a 'public static final' constant and shared across thousands of concurrent threads without synchronization or ThreadLocal wrappers, whereas SimpleDateFormat corrupted state during concurrent access.",explanation:"Standard practice in Spring Boot controllers and microservice formatters.",hint:"Immutable and thread-safe; can be safely stored in static final constants.",level:"Beginner",codeExample:'public static final DateTimeFormatter FMT = DateTimeFormatter.ofPattern("dd/MM/yyyy");'}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 14"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Thread-Safe Formatting"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Formatting & Parsing with ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"DateTimeFormatter"})," (Thread-Safe)"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build high-concurrency formatting pipelines: creating custom patterns like ",t.jsx("code",{className:"text-emerald-300 font-mono",children:'"dd/MM/yyyy HH:mm:ss"'})," and storing thread-safe formatters in static constants."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:o,title:"DateTimeFormatterMasteryDemo.java",highlightLines:[7,16,20,21,25,26,31,32]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"DateTimeFormatter FAQs",questions:s})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:i,title:"Module 003_005 Topic 14: DateTimeFormatter Mastery",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic14_datetime_formatter_note.txt"})}),t.jsx(n,{note:"You can declare 'public static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern(\\'dd-MM-yyyy\\');' once at class level and share it across 100 threads safely! SimpleDateFormat would have crashed! — Sukanta Hui"})]})}export{x as default};
