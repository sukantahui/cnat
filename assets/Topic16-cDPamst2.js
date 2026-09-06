import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 16: Unified GC Logging in Java 9+ (-Xlog Framework)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class UnifiedGcLoggingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: UNIFIED GC LOGGING (JAVA 9+) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> UNIFIED JVM LOGGING SYNTAX (JEP 158 / JEP 271):");\r
        System.out.println("  Syntax Pattern: -Xlog:[selectors]:[output]:[decorators]:[output-options]\\n");\r
\r
        System.out.println(">>> PRODUCTION-GRADE GC LOGGING COMMAND:");\r
        System.out.println("  -Xlog:gc*,gc+phases=debug:file=/var/log/app/gc.log:time,uptime,pid:filecount=5,filesize=100m\\n");\r
\r
        System.out.println(">>> BREAKDOWN OF THE LOGGING COMMAND:");\r
        System.out.println("  1. Selectors      : 'gc*' (all GC events) + 'gc+phases=debug' (detailed phase timing).");\r
        System.out.println("  2. Output Target  : 'file=/var/log/app/gc.log' (writes to file instead of stdout).");\r
        System.out.println("  3. Decorators     : 'time,uptime,pid' (ISO-8601 timestamp, uptime seconds, process ID).");\r
        System.out.println("  4. Log Rotation   : 'filecount=5,filesize=100m' (retains max 5 files of 100MB each = 500MB max!).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 16: Unified GC Logging (-Xlog)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS UNIFIED JVM LOGGING (Java 9+):\r
   - Standardized command line syntax for all JVM logging subsystems ('-Xlog').\r
   - Replaced fragmented legacy flags ('-XX:+PrintGC', '-XX:+PrintGCDetails', '-XX:+PrintGCTimeStamps').\r
\r
2. LOG ROTATION FEATURES:\r
   - 'filecount=N' : Keeps N historical rotated log files.\r
   - 'filesize=M'  : Rotates file when size hits M megabytes.\r
   - Decorators    : 'time' (wall clock), 'uptime' (JVM uptime), 'pid' (Process ID), 'level' (Info/Debug).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,r=[{question:"What replaced legacy flags like -XX:+PrintGCDetails and -XX:+PrintGCTimeStamps in Java 9+?",shortAnswer:"The Unified JVM Logging framework using the -Xlog command-line option (e.g. -Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=100m).",explanation:"Standardized logging across all JVM subsystems (gc, class, safepoint, os).",hint:"Unified JVM Logging option -Xlog.",level:"Beginner",codeExample:"-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=100m"},{question:"How do you configure automatic log file rotation in the -Xlog framework?",shortAnswer:"By specifying the filecount and filesize output options, such as 'filecount=5,filesize=100m', which limits individual log files to 100MB and retains a rolling window of 5 files.",explanation:"Prevents GC logs from filling up server disk space.",hint:"Using filecount=N and filesize=M options.",level:"Intermediate",codeExample:"-Xlog:gc:file=gc.log::filecount=5,filesize=50m"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Unified GC Logging in Java 9+: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"-Xlog:gc* Framework"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The modern logging standard: replacing legacy -XX:+PrintGCDetails with the powerful -Xlog:gc* syntax, log rotation, and phase tags."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"UnifiedGcLoggingDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{title:"Garbage Collection FAQs",questions:r})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:l,title:"Module 010_005 Topic 16: Unified GC Logging (-Xlog)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic16_unified_gc_logging_note.txt"})}),e.jsx(o,{note:"In Java 9+, legacy flags like -XX:+PrintGCDetails are obsolete! Use the Unified JVM Logging framework with -Xlog:gc*:file=gc.log:time,uptime,pid:filecount=5,filesize=100m! — Sukanta Hui"})]})}export{x as default};
