import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 12: Measuring Time-Based Distance: java.time.Duration (Hours, Minutes, Seconds)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.Duration;\r
import java.time.Instant;\r
import java.time.LocalTime;\r
\r
public class DurationTimeDistanceCalculationDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: java.time.Duration TIME DISTANCE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Measuring Distance Between LocalTimes:\r
        LocalTime examStart = LocalTime.of(10, 0, 0); // 10:00 AM\r
        LocalTime examEnd   = LocalTime.of(13, 30, 0); // 01:30 PM\r
\r
        Duration examDuration = Duration.between(examStart, examEnd);\r
\r
        System.out.println(">>> 1. Exam Session Duration:");\r
        System.out.println("  Total Duration : " + examDuration.toHours() + " Hours and " + (examDuration.toMinutes() % 60) + " Minutes");\r
        System.out.println("  Total Minutes  : " + examDuration.toMinutes() + " mins");\r
        System.out.println("  Total Seconds  : " + examDuration.toSeconds() + " secs");\r
\r
        // 2. High-Precision Code Execution Benchmarking with Instant:\r
        Instant t1 = Instant.now();\r
        Thread.sleep(50); // Simulating work\r
        Instant t2 = Instant.now();\r
\r
        Duration elapsed = Duration.between(t1, t2);\r
        System.out.printf("\\n>>> 2. Benchmark Elapsed Time: %d ms (%d ns)%n",\r
                elapsed.toMillis(), elapsed.toNanos());\r
\r
        System.out.println("\\n>>> SUMMARY: Period = Date (Years/Months/Days) vs Duration = Time (Hours/Mins/Secs/Nanos).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 12: java.time.Duration\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DURATION RULES:\r
   - Time-based interval: Hours, Minutes, Seconds, Nanoseconds.\r
   - Calculation: 'Duration.between(t1, t2)'.\r
   - Conversion: 'toHours()', 'toMinutes()', 'toMillis()', 'toNanos()'.\r
   - Compatible with 'LocalTime' and 'Instant'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the key difference between 'java.time.Period' and 'java.time.Duration'?",shortAnswer:"'Period' represents date-based amounts (Years, Months, Days) and is used with 'LocalDate'. 'Duration' represents time-based amounts (Hours, Minutes, Seconds, Nanoseconds) and is used with 'LocalTime', 'LocalDateTime', or 'Instant'.",explanation:"Period models human calendar concepts; Duration models machine timeline intervals.",hint:"Period is for date units (Years/Months/Days); Duration is for time units (Hours/Mins/Secs/Nanos).",level:"Intermediate",codeExample:"Duration d = Duration.between(startTime, endTime);"}];function D(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Time Interval"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Measuring Time-Based Distance: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"java.time.Duration"})," (Hours, Minutes, Seconds)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Benchmark and measure high-precision machine timelines: calculating elapsed execution nanoseconds and exam durations with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"Duration.between()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"DurationTimeDistanceCalculationDemo.java",highlightLines:[7,16,17,19,23,24,25,29,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Duration FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 003_005 Topic 12: java.time.Duration",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic12_duration_time_distance_note.txt"})}),e.jsx(r,{note:"Remember the simple rule: If it has years or months, use Period. If it has hours, seconds, or milliseconds, use Duration! — Sukanta Hui"})]})}export{D as default};
