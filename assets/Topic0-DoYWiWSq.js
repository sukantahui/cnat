import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 0: Flaws of Legacy Date APIs: java.util.Date & Calendar (Mutability, 0-Indexed Months)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.util.Calendar;\r
import java.util.Date;\r
\r
public class LegacyDateFlawsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: FLAWS OF LEGACY DATE APIS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 4 Fatal Flaws of java.util.Date & java.util.Calendar:");\r
        System.out.println();\r
        System.out.println("  1. MUTABILITY & THREAD-SAFETY DISASTER:");\r
        Date mutableDate = new Date();\r
        long originalTime = mutableDate.getTime();\r
        mutableDate.setTime(0); // Mutates internal state in-place!\r
        System.out.println("     A shared Date can be altered silently by any thread without locks!");\r
        System.out.println();\r
        System.out.println("  2. CONFUSING 0-INDEXED MONTHS:");\r
        Calendar cal = Calendar.getInstance();\r
        cal.set(2026, 0, 15); // Month 0 is JANUARY! Month 11 is DECEMBER!\r
        System.out.println("     Setting month to '0' produces: " + cal.getTime() + " (January!)");\r
        System.out.println();\r
        System.out.println("  3. YEAR OFFSET CONFUSION:");\r
        System.out.println("     In java.util.Date, getYear() returns (currentYear - 1900). For 2026, it returns 126!");\r
        System.out.println();\r
        System.out.println("  4. NOT THREAD-SAFE SimpleDateFormat:");\r
        System.out.println("     SimpleDateFormat corrupted timestamps when shared across multi-threaded web servers.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 0: Legacy Date Flaws\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LEGACY FLAWS (Pre-Java 8):\r
   - 'Date' and 'Calendar' are mutable.\r
   - Month 0 = January, Month 11 = December.\r
   - 'SimpleDateFormat' is not thread-safe.\r
   - Deprecated in modern code; replaced by 'java.time' (JSR-310).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What were the primary design flaws of legacy 'java.util.Date' and 'java.util.Calendar' in Java?",shortAnswer:"1. Mutability (objects could be modified in-place, causing multi-threading data races). 2. Non-thread-safe formatters ('SimpleDateFormat'). 3. 0-indexed months (0 was January). 4. Bizarre year offset (years were offset from 1900).",explanation:"These massive flaws prompted the introduction of JSR-310 (java.time) in Java 8.",hint:"Mutable state, non-thread-safe formatters, 0-indexed months, and 1900 year offsets.",level:"Beginner",codeExample:"// Legacy trap: cal.set(2026, 0, 1); // 0 is January!"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Legacy Anti-Patterns"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Flaws of Legacy Date APIs: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"java.util.Date"})," & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Calendar"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover why legacy date classes were deprecated: diagnosing mutable reference leaks, non-thread-safe ",e.jsx("code",{className:"text-rose-300 font-mono",children:"SimpleDateFormat"})," crashes, and confusing 0-indexed months."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"LegacyDateFlawsDemo.java",highlightLines:[7,18,19,20,24,25,29,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Legacy Date FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 003_005 Topic 0: Legacy Date Flaws",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic0_legacy_date_flaws_note.txt"})}),e.jsx(r,{note:"If you see 'new Date()' or 'SimpleDateFormat' in an interview or project, know that it is legacy code from the 1990s! Since Java 8, we exclusively use java.time (LocalDate, LocalDateTime, Instant). — Sukanta Hui"})]})}export{h as default};
