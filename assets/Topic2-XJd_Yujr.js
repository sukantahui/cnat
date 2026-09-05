import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 2: Core Temporal Classes Taxonomy Map: Date vs Time vs DateTime vs Instant\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.*;\r
\r
public class TemporalTaxonomyMapDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: TEMPORAL TAXONOMY MAP - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| Class Name        | Has Date? (Y-M-D) | Has Time? (H:M:S) | Has Timezone?     |");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| LocalDate         | YES               | NO                | NO                |");\r
        System.out.println("| LocalTime         | NO                | YES               | NO                |");\r
        System.out.println("| LocalDateTime     | YES               | YES               | NO                |");\r
        System.out.println("| ZonedDateTime     | YES               | YES               | YES (ZoneId)      |");\r
        System.out.println("| OffsetDateTime    | YES               | YES               | YES (ZoneOffset)  |");\r
        System.out.println("| Instant           | Timeline UTC      | Timeline UTC      | UTC (Epoch Nanos) |");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
\r
        System.out.println("\\n>>> Decision Guide for Enterprise Applications:");\r
        System.out.println("  1. Student Date of Birth (DOB) -> Use 'LocalDate'");\r
        System.out.println("  2. Academy Opening Bell (09:00)-> Use 'LocalTime'");\r
        System.out.println("  3. Offline Exam Schedule       -> Use 'LocalDateTime'");\r
        System.out.println("  4. International Zoom Class    -> Use 'ZonedDateTime'");\r
        System.out.println("  5. Database Audit CreatedAt    -> Use 'Instant'");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 2: Temporal Taxonomy Map\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TAXONOMY MAP:\r
   - 'LocalDate'     : Date only (2026-08-26).\r
   - 'LocalTime'     : Time only (14:30:00).\r
   - 'LocalDateTime' : Date + Time (2026-08-26T14:30:00).\r
   - 'ZonedDateTime' : Date + Time + Zone ('Asia/Kolkata').\r
   - 'Instant'       : UTC Epoch timestamp.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"When should an enterprise application choose 'LocalDate' over 'LocalDateTime' or 'Instant'?",shortAnswer:"Use 'LocalDate' when the time of day and timezone are irrelevant to the business concept—such as a student's Date of Birth (DOB), a national holiday (Republic Day), or an invoice billing date.",explanation:"Selecting the narrowest temporal class prevents timezone conversion bugs.",hint:"Use LocalDate when time of day and timezone are irrelevant (e.g. Birthdays, Holidays).",level:"Beginner",codeExample:"LocalDate dob = LocalDate.of(2003, Month.MARCH, 15);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Taxonomy Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Core Temporal Classes Breakdown: Taxonomy Map & Selection Guide"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the complete taxonomy of Java 8 temporal types: understanding when to choose ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"LocalDate"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"LocalDateTime"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:"ZonedDateTime"}),", or ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Instant"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"TemporalTaxonomyMapDemo.java",highlightLines:[7,14,15,16,17,18,19,25,26,27,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Temporal Taxonomy FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 003_005 Topic 2: Temporal Taxonomy Map",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic2_temporal_taxonomy_note.txt"})}),e.jsx(o,{note:"Never store a birthday with time or timezone! A student born on August 15 in Kolkata will have their birthday shifted to August 14 if a server in New York converts a timezone! Use LocalDate! — Sukanta Hui"})]})}export{h as default};
