import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 4: LocalTime: Time Without Date or Timezone (Hour, Minute, Second, Nano)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.LocalTime;\r
\r
public class LocalTimeDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: java.time.LocalTime DEEP DIVE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Current System Time (Nanosecond precision):\r
        LocalTime currentTime = LocalTime.now();\r
        System.out.println(">>> 1. Current Time: " + currentTime);\r
\r
        // 2. Specific Academy Hours (HH:MM:SS):\r
        LocalTime openingTime = LocalTime.of(9, 30, 0);   // 09:30 AM\r
        LocalTime closingTime = LocalTime.of(18, 0, 0);   // 06:00 PM\r
        LocalTime lunchBreak  = LocalTime.parse("13:30"); // 01:30 PM parsed from String!\r
\r
        System.out.println("\\n>>> 2. Academy Operating Schedule:");\r
        System.out.println("  Opening Bell : " + openingTime);\r
        System.out.println("  Lunch Break  : " + lunchBreak);\r
        System.out.println("  Closing Bell : " + closingTime);\r
\r
        // 3. Time Comparison (isBefore, isAfter):\r
        boolean isSchoolOpen = openingTime.isBefore(closingTime);\r
        System.out.println("\\n>>> 3. Time Comparison:");\r
        System.out.println("  openingTime.isBefore(closingTime)? " + isSchoolOpen);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,t=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 4: LocalTime Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOCALTIME ESSENTIALS:\r
   - Creation: 'LocalTime.now()', 'LocalTime.of(h, m, s, nanos)'.\r
   - Parsing: 'LocalTime.parse("14:30:00")'.\r
   - Precision: Nanoseconds (9 decimal places).\r
   - Comparison: 'isBefore()', 'isAfter()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What precision does 'java.time.LocalTime' maintain internally in Java?",shortAnswer:"'LocalTime' maintains nanosecond precision (up to 9 decimal places: HH:mm:ss.nnnnnnnnn), representing a human clock time without any attached date or timezone.",explanation:"Useful for store opening schedules, class timings, and alarm clocks.",hint:"Maintains nanosecond precision for human wall-clock time.",level:"Beginner",codeExample:"LocalTime classTime = LocalTime.of(10, 30, 0); // 10:30 AM"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ISO-8601 Time"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"LocalTime"}),": Time Without Date or Timezone"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master human wall-clock time representation: configuring academy schedules with nanosecond precision and performing temporal comparisons using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"isBefore()"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"isAfter()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"LocalTimeDeepDiveDemo.java",highlightLines:[7,15,19,20,21,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"LocalTime FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:t,title:"Module 003_005 Topic 4: LocalTime Deep Dive",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic4_localtime_deep_dive_note.txt"})}),e.jsx(i,{note:"Use LocalTime whenever you want to say 'Class begins at 10:00 AM every day' regardless of whether today is Monday or Friday! — Sukanta Hui"})]})}export{h as default};
