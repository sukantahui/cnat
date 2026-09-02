import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 13: java.time.temporal.ChronoUnit: Single-Unit Distance Calculations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.LocalDate;\r
import java.time.Month;\r
import java.time.temporal.ChronoUnit;\r
\r
public class ChronoUnitDistanceCalculationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: ChronoUnit DISTANCE CALCULATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        LocalDate courseStart = LocalDate.of(2026, Month.JANUARY, 1);\r
        LocalDate courseEnd   = LocalDate.of(2026, Month.DECEMBER, 31);\r
\r
        // Calculating Total Distance in Specific Single Units:\r
        long totalDays   = ChronoUnit.DAYS.between(courseStart, courseEnd);\r
        long totalWeeks  = ChronoUnit.WEEKS.between(courseStart, courseEnd);\r
        long totalMonths = ChronoUnit.MONTHS.between(courseStart, courseEnd);\r
\r
        System.out.println(">>> 1. Java Core Pro Batch 2026 Duration via ChronoUnit:");\r
        System.out.println("  Total Days   : " + totalDays + " days");\r
        System.out.println("  Total Weeks  : " + totalWeeks + " weeks");\r
        System.out.println("  Total Months : " + totalMonths + " months");\r
\r
        // Useful for billing interest calculation (e.g. days between loan issue and payment):\r
        LocalDate loanDate = LocalDate.of(2026, 3, 1);\r
        LocalDate repaymentDate = LocalDate.of(2026, 5, 15);\r
        long interestDays = ChronoUnit.DAYS.between(loanDate, repaymentDate);\r
        System.out.println("\\n>>> 2. AccoTax Loan Interest Days: " + interestDays + " days for interest compounding.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 13: ChronoUnit Calculations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CHRONOUNIT RULES:\r
   - 'ChronoUnit.DAYS.between(d1, d2)'   → Total elapsed days.\r
   - 'ChronoUnit.MONTHS.between(d1, d2)' → Total elapsed months.\r
   - 'ChronoUnit.HOURS.between(t1, t2)'  → Total elapsed hours.\r
   - Avoid 'Period.getDays()' for total day calculations.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is 'ChronoUnit.DAYS.between(d1, d2)' preferred over 'Period.between(d1, d2).getDays()' when calculating total elapsed days?",shortAnswer:"'Period.between(d1, d2).getDays()' returns ONLY the residual day component after extracting full years and months (e.g. 1 year 2 months 5 days returns 5, NOT 430!). 'ChronoUnit.DAYS.between(d1, d2)' calculates the complete, total number of elapsed days.",explanation:"This is one of the most widespread bugs in date calculation code.",hint:"Period.getDays() returns the remaining days after months/years; ChronoUnit returns total count.",level:"Intermediate",codeExample:"long totalDays = ChronoUnit.DAYS.between(start, end); // Exact total days"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Single-Unit Measurement"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Single-Unit Distance: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ChronoUnit.DAYS.between()"})," vs ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Period.getDays()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Avoid the classic Period trap: calculating total cumulative days, weeks, and months between two dates for loan interest compounding and project estimation using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ChronoUnit"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"ChronoUnitDistanceCalculationsDemo.java",highlightLines:[7,19,20,21,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"ChronoUnit FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 003_005 Topic 13: ChronoUnit Calculations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic13_chronounit_note.txt"})}),e.jsx(o,{note:"If a loan lasts 1 year and 5 days, 'Period.between().getDays()' returns 5! You would miss 365 days of interest! Always use 'ChronoUnit.DAYS.between()' for total day calculations! — Sukanta Hui"})]})}export{y as default};
