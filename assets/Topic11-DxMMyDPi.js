import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 11: Measuring Date-Based Distance: java.time.Period (Years, Months, Days)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.LocalDate;\r
import java.time.Month;\r
import java.time.Period;\r
\r
public class PeriodDateDistanceCalculationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: java.time.Period DATE DISTANCE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        LocalDate studentDob = LocalDate.of(2004, Month.JUNE, 18);\r
        LocalDate currentDate = LocalDate.of(2026, Month.AUGUST, 26);\r
\r
        // Calculating Exact Human Age in Years, Months, Days:\r
        Period age = Period.between(studentDob, currentDate);\r
\r
        System.out.println(">>> 1. Trainee Age Calculation (Student Swadeep Paul):");\r
        System.out.println("  Date of Birth : " + studentDob);\r
        System.out.println("  Current Date  : " + currentDate);\r
        System.out.printf("  Exact Age     : %d Years, %d Months, %d Days%n",\r
                age.getYears(), age.getMonths(), age.getDays());\r
\r
        // Custom Period Construction:\r
        Period warrantyPeriod = Period.of(2, 6, 0); // 2 Years, 6 Months\r
        LocalDate warrantyEnd = currentDate.plus(warrantyPeriod);\r
        System.out.println("\\n>>> 2. Applying Warranty Period (+2Y 6M): " + warrantyEnd);\r
\r
        System.out.println("\\n>>> KEY TRAIT: Period measures DATE-BASED units (Years, Months, Days).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 11: java.time.Period\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PERIOD RULES:\r
   - Date-based interval: Years, Months, Days.\r
   - Calculation: 'Period.between(startDate, endDate)'.\r
   - Inspection: 'getYears()', 'getMonths()', 'getDays()'.\r
   - Compatible with 'LocalDate'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is 'java.time.Period' used for in Java?",shortAnswer:"'Period' represents a date-based amount of time measured in Years, Months, and Days. It is used with 'LocalDate' to compute human-scale age, project deadlines, and contract terms (e.g. 'Period.between(dob, today)').",explanation:"For time-based units (hours, minutes, seconds), use Duration instead.",hint:"Measures date-based intervals in Years, Months, and Days.",level:"Beginner",codeExample:"Period age = Period.between(birthDate, LocalDate.now());"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Date Interval"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Measuring Date-Based Distance: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.time.Period"})," (Years, Months, Days)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to compute exact human ages and contractual warranties: calculating calendar intervals between two ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"LocalDate"})," endpoints using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Period.between()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"PeriodDateDistanceCalculationDemo.java",highlightLines:[7,15,16,19,23,24,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Period FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 003_005 Topic 11: java.time.Period",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic11_period_date_distance_note.txt"})}),e.jsx(r,{note:"Never calculate age by dividing total days by 365.25! That causes birthday miscalculations due to leap years. Always use 'Period.between(dob, today)' for exact calendar age! — Sukanta Hui"})]})}export{h as default};
