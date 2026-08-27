import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 10: Date Arithmetic (Immutable Operations): plusDays(), minusMonths(), withDayOfMonth()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.LocalDate;\r
import java.time.Month;\r
\r
public class DateArithmeticOperationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: IMMUTABLE DATE ARITHMETIC - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        LocalDate invoiceDate = LocalDate.of(2026, Month.JANUARY, 15);\r
        System.out.println(">>> 1. Base Invoice Date: " + invoiceDate);\r
\r
        // 1. Adding Days, Weeks, Months, Years:\r
        LocalDate paymentDueDate = invoiceDate.plusDays(30);   // Net 30 payment terms\r
        LocalDate nextQuarter    = invoiceDate.plusMonths(3);\r
        LocalDate nextYear       = invoiceDate.plusYears(1);\r
\r
        System.out.println("\\n>>> 2. Forward Additions (plus...):");\r
        System.out.println("  Due Date (+30 Days)  : " + paymentDueDate);\r
        System.out.println("  Next Quarter (+3 Mo) : " + nextQuarter);\r
        System.out.println("  Next Year (+1 Yr)    : " + nextYear);\r
\r
        // 2. Subtractions (minus...):\r
        LocalDate auditPast = invoiceDate.minusMonths(6);\r
        System.out.println("\\n>>> 3. Backward Subtractions (minus...):");\r
        System.out.println("  Past Audit (-6 Mo)   : " + auditPast);\r
\r
        // 3. Absolute Adjusters (with...):\r
        LocalDate monthStart = invoiceDate.withDayOfMonth(1);   // First day of month\r
        LocalDate leapEnd    = LocalDate.of(2024, 2, 10).withDayOfMonth(29); // Leap year handling\r
\r
        System.out.println("\\n>>> 4. Temporal Mutation Adjusters (with...):");\r
        System.out.println("  First Day of Month   : " + monthStart);\r
        System.out.println("  Leap Year Adjusted   : " + leapEnd);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 10: Immutable Date Arithmetic\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARITHMETIC METHODS:\r
   - 'plusDays(n)' / 'plusWeeks(n)' / 'plusMonths(n)' / 'plusYears(n)'.\r
   - 'minusDays(n)' / 'minusMonths(n)' / 'minusYears(n)'.\r
   - 'withDayOfMonth(n)' / 'withYear(n)' (Field replacement).\r
   - All operations are 100% immutable.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What happens to the original 'LocalDate' instance when calling 'date.plusDays(10)'?",shortAnswer:"Nothing! Because 'LocalDate' is completely immutable, 'plusDays(10)' does not mutate the existing date object; it creates and returns a brand-new 'LocalDate' representing the updated calendar date.",explanation:"Guarantees zero side-effects in multi-threaded environments.",hint:"The original instance is untouched; a new instance is returned.",level:"Beginner",codeExample:"LocalDate due = today.plusDays(30); // today is unchanged"}];function D(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Immutable Arithmetic"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Date Arithmetic: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"plusDays()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"minusMonths()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"withDayOfMonth()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master clean, side-effect-free date calculations: adding billing payment terms, subtracting audit windows, and replacing temporal fields with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"with...()"})," adjusters."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"DateArithmeticOperationsDemo.java",highlightLines:[7,18,19,20,27,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Date Arithmetic FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_005 Topic 10: Date Arithmetic Operations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic10_date_arithmetic_note.txt"})}),e.jsx(r,{note:"Notice how clean 'date.plusDays(30)' is compared to legacy Calendar where you had to write 'cal.add(Calendar.DAY_OF_MONTH, 30)' and it mutated the object! — Sukanta Hui"})]})}export{D as default};
