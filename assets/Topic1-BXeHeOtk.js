import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 1: JSR-310 (java.time) Design Principles: Immutability, Thread-Safety & ISO-8601\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.LocalDate;\r
import java.time.Month;\r
\r
public class Jsr310DesignPrinciplesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: JSR-310 (java.time) DESIGN PRINCIPLES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 4 Core Principles of Modern java.time (JSR-310):");\r
        System.out.println();\r
        System.out.println("  1. IMMUTABILITY & THREAD-SAFETY:");\r
        LocalDate admissionDate = LocalDate.of(2026, Month.AUGUST, 26);\r
        LocalDate graduationDate = admissionDate.plusYears(1); // Returns BRAND NEW instance!\r
\r
        System.out.println("     Original Admission  : " + admissionDate + " (Unchanged!)");\r
        System.out.println("     Graduation Projected: " + graduationDate + " (Fresh immutable instance)");\r
        System.out.println();\r
        System.out.println("  2. INTUITIVE 1-INDEXED MONTHS & ENUMS:");\r
        System.out.println("     Month.JANUARY = 1, Month.AUGUST = 8, Month.DECEMBER = 12 (Zero confusion!)");\r
        System.out.println();\r
        System.out.println("  3. DOMAIN-DRIVEN SEPARATION:");\r
        System.out.println("     - LocalDate     : Year-Month-Day only (Birthdays, Holidays)");\r
        System.out.println("     - LocalTime     : Hour-Minute-Second only (Store open hours)");\r
        System.out.println("     - LocalDateTime : Date + Time without timezone (Movie showtimes)");\r
        System.out.println("     - ZonedDateTime : Date + Time + Explicit Timezone (Flight bookings)");\r
        System.out.println("     - Instant       : UTC Epoch timestamp (Database timestamps)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 1: JSR-310 Design Principles\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JSR-310 PILLARS:\r
   - 100% Immutable and Thread-safe.\r
   - Month.JANUARY = 1 (1-indexed).\r
   - Clean domain separation (LocalDate, LocalTime, Instant, ZonedDateTime).\r
   - Fluent method chaining ('plusDays()', 'minusYears()').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are the core design pillars of the modern 'java.time' package (JSR-310)?",shortAnswer:"1. Immutability & Thread Safety (all temporal classes are final and thread-safe). 2. Clear domain separation (LocalDate, LocalTime, Instant, ZonedDateTime). 3. ISO-8601 compliance. 4. Intuitive 1-indexed months and Month enums.",explanation:"Inspired by the popular Joda-Time open-source library created by Stephen Colebourne.",hint:"Immutability, domain separation (Date vs Time vs Instant), and 1-indexed months.",level:"Beginner",codeExample:"LocalDate d = LocalDate.of(2026, Month.AUGUST, 26);"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JSR-310 Architecture"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Introduction to JSR-310 (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.time"}),"): Immutability & Thread-Safety"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the architectural foundations of modern Java time: immutable value objects, natural 1-indexed ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Month"})," enums, and domain-driven temporal separation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"Jsr310DesignPrinciplesDemo.java",highlightLines:[7,18,19,24,28,29,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JSR-310 FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 003_005 Topic 1: JSR-310 Principles",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic1_jsr310_principles_note.txt"})}),e.jsx(r,{note:"Every class in java.time is immutable! When you add 5 days to a LocalDate, it does NOT modify the object; it returns a brand new LocalDate instance! — Sukanta Hui"})]})}export{S as default};
