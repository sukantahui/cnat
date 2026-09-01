import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 16: Enterprise Architecture Best Practices: UTC Instants in DB & Local UI Formatting (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.Instant;\r
import java.time.ZoneId;\r
import java.time.ZonedDateTime;\r
import java.time.format.DateTimeFormatter;\r
\r
public class EnterpriseUtcArchitectureCapstoneDemo {\r
\r
    public static class OrderAuditService {\r
\r
        // 1. DB Layer: Store UTC Instant in database (PostgreSQL / MySQL)\r
        public static Instant recordOrderPlacement() {\r
            Instant createdUtc = Instant.now();\r
            System.out.println("  [DATABASE LAYER] Storing UTC Instant: " + createdUtc);\r
            return createdUtc;\r
        }\r
\r
        // 2. UI Layer: Format the UTC Instant into the User's Local Timezone\r
        public static String formatForClientUi(Instant dbTimestamp, String clientZoneId) {\r
            ZoneId zone = ZoneId.of(clientZoneId);\r
            ZonedDateTime clientZdt = dbTimestamp.atZone(zone);\r
            DateTimeFormatter uiFmt = DateTimeFormatter.ofPattern("dd-MMM-yyyy hh:mm:ss a (zzz)");\r
            return clientZdt.format(uiFmt);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: ENTERPRISE UTC ARCHITECTURE CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Order Placed on E-Commerce Platform:");\r
        Instant orderTimestamp = OrderAuditService.recordOrderPlacement();\r
\r
        System.out.println("\\n>>> 2. Rendering Order Confirmation for Global Customers:");\r
        String kolkataDisplay = OrderAuditService.formatForClientUi(orderTimestamp, "Asia/Kolkata");\r
        String londonDisplay  = OrderAuditService.formatForClientUi(orderTimestamp, "Europe/London");\r
        String tokyoDisplay   = OrderAuditService.formatForClientUi(orderTimestamp, "Asia/Tokyo");\r
\r
        System.out.println("  Kolkata Customer UI Display : " + kolkataDisplay);\r
        System.out.println("  London Customer UI Display  : " + londonDisplay);\r
        System.out.println("  Tokyo Customer UI Display   : " + tokyoDisplay);\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 003_005 MODERN DATE & TIME API (JSR 310) 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 16: Enterprise UTC Architecture Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 003_005 SUMMARY:\r
   - Legacy Date/Calendar are mutable and broken; avoid them.\r
   - java.time (JSR-310) is immutable, thread-safe, and ISO-8601 compliant.\r
   - LocalDate (Date only), LocalTime (Time only), LocalDateTime (No zone).\r
   - ZonedDateTime (Explicit ZoneId), Instant (UTC Epoch timeline).\r
   - Period (Years/Months/Days) vs Duration (Hours/Mins/Secs/Nanos).\r
   - ChronoUnit.DAYS.between() for total elapsed days.\r
   - Always store UTC Instant in databases and format on the client UI.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the recommended enterprise architecture pattern for handling dates and times across global web systems?",shortAnswer:"1. Store ALL timestamps in the database as UTC 'Instant' (or UTC ISO-8601 strings). 2. Transmit UTC ISO-8601 strings across REST APIs. 3. Convert and format into the customer's local timezone ('ZonedDateTime') only at the presentation/UI layer.",explanation:"This golden rule prevents 100% of timezone shift and DST corruption bugs.",hint:"Store in UTC Instant; format to client local timezone on the frontend.",level:"Advanced",codeExample:"ZonedDateTime userTime = dbInstant.atZone(ZoneId.of(userZone));"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Enterprise Architecture: Storing UTC Instants in DB & Formatting to Local Timezones on UI"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize the entire modern Date & Time API: implementing the golden enterprise rule of UTC database persistence and localized frontend rendering."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"EnterpriseUtcArchitectureCapstoneDemo.java",highlightLines:[12,16,17,22,23,24,25,34,38,39,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"UTC Architecture FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_005 Topic 16: UTC Architecture Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic16_utc_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 003_005! You have mastered the modern Java 8 Date & Time API, domain separation, Period vs Duration, ChronoUnit, thread-safe DateTimeFormatter, and global UTC enterprise architecture! — Sukanta Hui"})]})}export{x as default};
