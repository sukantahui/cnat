import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 8: Instant: Instantaneous Point on UTC Timeline (The Enterprise Database Standard)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.Instant;\r
\r
public class InstantUtcTimestampMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: java.time.Instant UTC TIMESTAMPS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Current UTC Instant:\r
        Instant nowUtc = Instant.now();\r
        System.out.println(">>> 1. Current Global UTC Instant: " + nowUtc);\r
\r
        // 2. Epoch Seconds and Milliseconds (Since 1970-01-01T00:00:00Z):\r
        long epochSeconds = nowUtc.getEpochSecond();\r
        long epochMillis  = nowUtc.toEpochMilli();\r
        int nanoAdjustment = nowUtc.getNano();\r
\r
        System.out.println("\\n>>> 2. Machine Timeline Breakdown:");\r
        System.out.println("  Epoch Seconds  : " + epochSeconds);\r
        System.out.println("  Epoch Millis   : " + epochMillis + " ms");\r
        System.out.println("  Nano Precision : " + nanoAdjustment + " ns");\r
\r
        // 3. Creating Instant from raw Epoch Millis (Database timestamp retrieval):\r
        Instant restoredInstant = Instant.ofEpochMilli(epochMillis);\r
        System.out.println("\\n>>> 3. Restored from Database Millis: " + restoredInstant);\r
\r
        System.out.println("\\n>>> GOLDEN RULE FOR BACKEND ARCHITECTURE:");\r
        System.out.println("  ALWAYS store 'Instant' (UTC ISO-8601) in databases (e.g. 'created_at', 'updated_at')!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 8: java.time.Instant\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INSTANT ESSENTIALS:\r
   - Machine timeline timestamp in UTC.\r
   - Measures nanoseconds from 1970-01-01T00:00:00Z.\r
   - Factory: 'Instant.now()', 'Instant.ofEpochMilli(ms)'.\r
   - Mandatory best practice for database audit columns.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is 'java.time.Instant' considered the industry gold standard for storing timestamps in backend databases?",shortAnswer:"'Instant' represents an unambiguous, absolute single point on the global time-line measured in UTC epoch nanoseconds. It has zero timezone ambiguity, making database records ('createdAt', 'updatedAt') universally valid regardless of where client servers are located.",explanation:"Corresponds directly to UTC Unix Epoch timestamps in SQL TIMESTAMP WITH TIME ZONE columns.",hint:"Represents an absolute point on the UTC timeline without timezone ambiguity.",level:"Intermediate",codeExample:"Instant auditTimestamp = Instant.now();"}];function T(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 8"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Database UTC Standard"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[t.jsx("code",{className:"text-emerald-400 font-mono",children:"Instant"}),": Point on the Timeline in UTC Epoch Seconds"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the enterprise database standard for audit logs: measuring UTC Unix Epoch timestamps with nanosecond precision via ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"Instant.now()"}),"."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:r,title:"InstantUtcTimestampMasteryDemo.java",highlightLines:[7,14,18,19,20,26,27]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Instant FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:o,title:"Module 003_005 Topic 8: java.time.Instant",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic8_instant_utc_note.txt"})}),t.jsx(s,{note:"In our Barrackpore database schemas, every table has 'created_at' mapped to Instant. It records the global UTC moment so server migrations across AWS Mumbai and US East never corrupt audit trails! — Sukanta Hui"})]})}export{T as default};
