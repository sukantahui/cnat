import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 5: LocalDateTime: Combining Date & Time (Creation, Combination & Decomposition)\r
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
public class LocalDateTimeDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: java.time.LocalDateTime DEEP DIVE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Current System Date & Time:\r
        LocalDateTime currentDateTime = LocalDateTime.now();\r
        System.out.println(">>> 1. Current DateTime: " + currentDateTime);\r
\r
        // 2. Combining an existing LocalDate and LocalTime:\r
        LocalDate examDate = LocalDate.of(2026, Month.DECEMBER, 15);\r
        LocalTime examTime = LocalTime.of(10, 0, 0); // 10:00 AM\r
\r
        LocalDateTime examSchedule = LocalDateTime.of(examDate, examTime);\r
        // Alternative syntax: examDate.atTime(examTime)\r
        System.out.println("\\n>>> 2. Combined Exam Schedule: " + examSchedule);\r
\r
        // 3. Decomposing LocalDateTime back into Date and Time:\r
        LocalDate extractedDate = examSchedule.toLocalDate();\r
        LocalTime extractedTime = examSchedule.toLocalTime();\r
\r
        System.out.println("\\n>>> 3. Decomposed Components:");\r
        System.out.println("  Extracted Date : " + extractedDate);\r
        System.out.println("  Extracted Time : " + extractedTime);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 5: LocalDateTime Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOCALDATETIME ESSENTIALS:\r
   - Combines 'LocalDate' and 'LocalTime' without timezone.\r
   - Creation: 'LocalDateTime.now()', 'LocalDateTime.of(...)'.\r
   - Composition: 'date.atTime(time)'.\r
   - Decomposition: 'dt.toLocalDate()', 'dt.toLocalTime()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,m=[{question:"How do you combine a 'LocalDate' and 'LocalTime' into a 'LocalDateTime' in Java?",shortAnswer:"You can either use the factory method 'LocalDateTime.of(date, time)' or the fluent method 'date.atTime(time)' or 'time.atDate(date)'.",explanation:"Provides seamless bi-directional composition and decomposition.",hint:"Use LocalDateTime.of(date, time) or date.atTime(time).",level:"Beginner",codeExample:"LocalDateTime dt = date.atTime(10, 30);"}];function u(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Composite Temporal"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"LocalDateTime"}),": Combining Date & Time Without Timezone"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to represent calendar appointment timestamps: composing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"LocalDate"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"LocalTime"})," with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"atTime()"})," and decomposing temporal parts."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"LocalDateTimeDeepDiveDemo.java",highlightLines:[7,16,20,21,23,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"LocalDateTime FAQs",questions:m})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:r,title:"Module 003_005 Topic 5: LocalDateTime Deep Dive",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic5_localdatetime_deep_dive_note.txt"})}),e.jsx(n,{note:"LocalDateTime is ideal for scheduling offline exams at our Barrackpore center. Everyone knows the exam starts on 15-Dec at 10:00 AM without worrying about international timezones! — Sukanta Hui"})]})}export{u as default};
