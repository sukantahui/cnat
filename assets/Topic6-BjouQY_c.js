import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 6: ZonedDateTime: Full Timestamp with Explicit ZoneId (Asia/Kolkata, UTC)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.LocalDateTime;\r
import java.time.ZoneId;\r
import java.time.ZonedDateTime;\r
\r
public class ZonedDateTimeMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: java.time.ZonedDateTime - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Live lecture scheduled in Kolkata, West Bengal:\r
        ZoneId kolkataZone = ZoneId.of("Asia/Kolkata"); // IST (+05:30)\r
        LocalDateTime localSchedule = LocalDateTime.of(2026, 8, 26, 20, 0, 0); // 08:00 PM IST\r
\r
        ZonedDateTime kolkataLecture = ZonedDateTime.of(localSchedule, kolkataZone);\r
        System.out.println(">>> 1. Scheduled Live Class (Kolkata Hub IST):");\r
        System.out.println("  " + kolkataLecture);\r
\r
        // 2. Converting the exact same global instant to other global timezones:\r
        ZoneId newYorkZone = ZoneId.of("America/New_York"); // EDT (-04:00)\r
        ZoneId londonZone  = ZoneId.of("Europe/London");    // BST (+01:00)\r
        ZoneId tokyoZone   = ZoneId.of("Asia/Tokyo");        // JST (+09:00)\r
\r
        ZonedDateTime newYorkTime = kolkataLecture.withZoneSameInstant(newYorkZone);\r
        ZonedDateTime londonTime  = kolkataLecture.withZoneSameInstant(londonZone);\r
        ZonedDateTime tokyoTime   = kolkataLecture.withZoneSameInstant(tokyoZone);\r
\r
        System.out.println("\\n>>> 2. International Webinar Broadcast Times for Overseas Trainees:");\r
        System.out.println("  London Trainee View    : " + londonTime);\r
        System.out.println("  New York Trainee View  : " + newYorkTime);\r
        System.out.println("  Tokyo Trainee View     : " + tokyoTime);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 6: ZonedDateTime Mastery\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ZONEDDATETIME ESSENTIALS:\r
   - Combines 'LocalDateTime' + 'ZoneId' + 'ZoneOffset'.\r
   - 'ZoneId.of("Asia/Kolkata")'.\r
   - 'withZoneSameInstant(newZone)' → Converts instant across timezones.\r
   - Automatically handles Daylight Saving Time (DST) shifts.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the difference between 'withZoneSameInstant(zone)' and 'withZoneSameLocal(zone)' on a 'ZonedDateTime'?",shortAnswer:"'withZoneSameInstant(zone)' keeps the exact same global physical moment on the timeline and recalculates the local clock time for the new timezone (e.g. 8 PM in Kolkata becomes 10:30 AM in New York). 'withZoneSameLocal(zone)' changes the timezone rule while forcing the clock digits to remain the same (e.g. 8 PM in Kolkata becomes 8 PM in New York).",explanation:"Use withZoneSameInstant for international webinar and flight conversions.",hint:"withZoneSameInstant preserves the absolute global instant across timezones.",level:"Intermediate",codeExample:'ZonedDateTime nyTime = kolkataTime.withZoneSameInstant(ZoneId.of("America/New_York"));'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Global Timezones"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-purple-400 font-mono",children:"ZonedDateTime"}),": Timestamps with Explicit ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ZoneId"})," (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Asia/Kolkata"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build international flight and webinar broadcast systems: converting global timeline moments across timezones with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"withZoneSameInstant()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"ZonedDateTimeMasteryDemo.java",highlightLines:[7,16,17,19,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"ZonedDateTime FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 003_005 Topic 6: ZonedDateTime Mastery",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic6_zoneddatetime_note.txt"})}),e.jsx(o,{note:"When we host our global Java masterclasses from Barrackpore at 8:00 PM IST, students in London see 3:30 PM and New York sees 10:30 AM! ZonedDateTime handles all those conversions automatically! — Sukanta Hui"})]})}export{x as default};
