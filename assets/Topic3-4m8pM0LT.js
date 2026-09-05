import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 3: LocalDate: Date Without Time or Timezone (Creation & Inspection)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.DayOfWeek;\r
import java.time.LocalDate;\r
import java.time.Month;\r
\r
public class LocalDateDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: java.time.LocalDate DEEP DIVE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Current System Date:\r
        LocalDate today = LocalDate.now();\r
        System.out.println(">>> 1. Current Date: " + today);\r
\r
        // 2. Specific Date Factory Method:\r
        LocalDate batchStart = LocalDate.of(2026, Month.SEPTEMBER, 1);\r
        System.out.println(">>> 2. Specific Date : " + batchStart);\r
\r
        // 3. Inspecting Individual Date Fields:\r
        int year = batchStart.getYear();\r
        Month month = batchStart.getMonth();\r
        int dayOfMonth = batchStart.getDayOfMonth();\r
        DayOfWeek dayOfWeek = batchStart.getDayOfWeek();\r
        boolean isLeapYear = batchStart.isLeapYear();\r
\r
        System.out.println("\\n>>> 3. Field Inspections for Batch Start:");\r
        System.out.println("  Year         : " + year);\r
        System.out.println("  Month        : " + month + " (Value: " + month.getValue() + ")");\r
        System.out.println("  Day of Month : " + dayOfMonth);\r
        System.out.println("  Day of Week  : " + dayOfWeek);\r
        System.out.println("  Is Leap Year : " + isLeapYear);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 3: LocalDate Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOCALDATE ESSENTIALS:\r
   - Creation: 'LocalDate.now()', 'LocalDate.of(year, month, day)'.\r
   - Inspection: 'getYear()', 'getMonth()', 'getDayOfMonth()', 'getDayOfWeek()'.\r
   - Utility: 'isLeapYear()', 'lengthOfMonth()', 'lengthOfYear()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How do you inspect the day of the week and check for leap years using 'java.time.LocalDate'?",shortAnswer:"'date.getDayOfWeek()' returns a type-safe 'DayOfWeek' enum (e.g. DayOfWeek.TUESDAY). 'date.isLeapYear()' returns a boolean indicating whether the year is a leap year (366 days).",explanation:"Eliminates tedious manual leap year modulo arithmetic formulas.",hint:"Use .getDayOfWeek() and .isLeapYear() built-in inspection methods.",level:"Beginner",codeExample:"boolean leap = LocalDate.now().isLeapYear();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ISO-8601 Date"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"LocalDate"}),": Date Without Time or Timezone"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the standard ISO-8601 calendar date representation: inspecting individual date fields, extracting ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"DayOfWeek"})," enums, and testing for leap years."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"LocalDateDeepDiveDemo.java",highlightLines:[7,16,20,24,25,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"LocalDate FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_005 Topic 3: LocalDate Deep Dive",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic3_localdate_deep_dive_note.txt"})}),e.jsx(r,{note:"LocalDate has no time component at all. It represents a pure calendar day on Earth formatted in clean ISO-8601 'YYYY-MM-DD'! — Sukanta Hui"})]})}export{x as default};
