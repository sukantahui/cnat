import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 15: Interoperability: Converting Between Legacy Date/Calendar and java.time\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.Instant;\r
import java.time.LocalDateTime;\r
import java.time.ZoneId;\r
import java.time.ZonedDateTime;\r
import java.util.Date;\r
\r
public class LegacyInteropDateBridgeDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: LEGACY DATE <-> java.time INTEROPERABILITY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. CONVERTING LEGACY java.util.Date -> Modern Instant -> LocalDateTime:\r
        Date legacyDate = new Date();\r
        Instant instantFromLegacy = legacyDate.toInstant(); // Bridge method added in Java 8!\r
        LocalDateTime modernLdt = instantFromLegacy.atZone(ZoneId.systemDefault()).toLocalDateTime();\r
\r
        System.out.println(">>> 1. Legacy Date -> Modern Conversion:");\r
        System.out.println("  Legacy Date       : " + legacyDate);\r
        System.out.println("  Bridged Instant   : " + instantFromLegacy);\r
        System.out.println("  Modern LocalDateTime: " + modernLdt);\r
\r
        // 2. CONVERTING Modern Instant / ZonedDateTime -> Legacy java.util.Date:\r
        Instant nowUtc = Instant.now();\r
        Date convertedLegacyDate = Date.from(nowUtc); // Static factory method added in Java 8!\r
\r
        System.out.println("\\n>>> 2. Modern Instant -> Legacy Date Conversion (For legacy JDBC/APIs):");\r
        System.out.println("  Modern Instant    : " + nowUtc);\r
        System.out.println("  Converted to Date : " + convertedLegacyDate);\r
\r
        System.out.println("\\n>>> THE UNIVERSAL BRIDGE: java.time.Instant is the universal bridge between old and new Java dates!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 15: Legacy Date Interoperability\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTEROPERABILITY BRIDGES:\r
   - Old &rarr; New: 'date.toInstant()'.\r
   - New &rarr; Old: 'Date.from(instant)'.\r
   - 'Instant' is the universal bridge type.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What class acts as the bridge when converting between legacy 'java.util.Date' and modern 'java.time' classes?",shortAnswer:"'java.time.Instant'. In Java 8, 'legacyDate.toInstant()' was added to convert legacy Date to Instant, and 'Date.from(instant)' was added to convert Instant back to legacy Date.",explanation:"Essential when working with legacy ORM libraries and legacy SDKs.",hint:"java.time.Instant acts as the bridge via toInstant() and Date.from().",level:"Intermediate",codeExample:`Instant inst = legacyDate.toInstant();
Date oldDate = Date.from(inst);`}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Legacy Interop"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Interoperability: Converting Between Legacy ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Date/Calendar"})," and Modern ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.time"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Bridge legacy third-party libraries and modern APIs: using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"toInstant()"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Date.from()"})," for zero-loss bidirectional conversion."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"LegacyInteropDateBridgeDemo.java",highlightLines:[7,17,18,19,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Date Interop FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 003_005 Topic 15: Legacy Date Interop",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic15_legacy_interop_note.txt"})}),e.jsx(r,{note:"If a legacy library like Hibernate 4 or JasperReports requires a java.util.Date, use Date.from(instant) at the boundary, but keep your entire core domain in java.time! — Sukanta Hui"})]})}export{g as default};
