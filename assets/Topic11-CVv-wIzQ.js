import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 11: Diagnosing Production Deadlocks: jcmd, jstack & JVM Diagnostic Tools\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.lang.management.ManagementFactory;\r
import java.lang.management.ThreadInfo;\r
import java.lang.management.ThreadMXBean;\r
\r
public class ProductionDeadlockDiagnosisDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: DIAGNOSING DEADLOCKS IN PRODUCTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. PRODUCTION CLI COMMANDS TO CAPTURE THREAD DUMPS:");\r
        System.out.println("  Command A: 'jcmd <PID> Thread.print' (Recommended modern command since Java 8+)");\r
        System.out.println("  Command B: 'jstack -l <PID>' (Legacy JDK tool; '-l' includes lock info)");\r
        System.out.println("  Command C: 'kill -3 <PID>' (Linux signal sending dump to standard out)");\r
        System.out.println();\r
        System.out.println(">>> 2. PROGRAMMATIC DEADLOCK DETECTION VIA ThreadMXBean:");\r
        ThreadMXBean threadBean = ManagementFactory.getThreadMXBean();\r
        long[] deadlockedThreadIds = threadBean.findDeadlockedThreads();\r
\r
        if (deadlockedThreadIds == null || deadlockedThreadIds.length == 0) {\r
            System.out.println("  [ThreadMXBean Health Check] ✅ ZERO DEADLOCKS DETECTED in the JVM!");\r
        } else {\r
            System.out.printf("  [ThreadMXBean Alert] 🚨 FOUND %d DEADLOCKED THREADS!%n", deadlockedThreadIds.length);\r
            ThreadInfo[] infos = threadBean.getThreadInfo(deadlockedThreadIds);\r
            for (ThreadInfo info : infos) {\r
                System.out.println("    Thread: " + info.getThreadName() + " is BLOCKED on " + info.getLockName() + " held by " + info.getLockOwnerName());\r
            }\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,d=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 11: Production Deadlock Diagnosis\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DEADLOCK DIAGNOSIS TOOLS:\r
   - Modern CLI: 'jcmd <PID> Thread.print'.\r
   - Classic CLI: 'jstack -l <PID>'.\r
   - GUI: VisualVM, JConsole.\r
   - Programmatic: 'ThreadMXBean.findDeadlockedThreads()'.\r
   - HotSpot JVM prints 'Found one Java-level deadlock' with full cycle stack traces.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Which tools and programmatic APIs are used to detect and diagnose deadlocks on a live production JVM server?",shortAnswer:"1. 'CLI Diagnostic Tools': 'jcmd <PID> Thread.print' (preferred modern command) or 'jstack -l <PID>' captures a full JVM thread dump, where the HotSpot JVM automatically prints a dedicated 'Found one Java-level deadlock' summary section at the bottom. 2. 'GUI Profilers': VisualVM, JConsole, and IntelliJ Profiler highlight deadlocked threads in red. 3. 'Programmatic API': 'ManagementFactory.getThreadMXBean().findDeadlockedThreads()' queries the JVM MBean directly inside application health-check telemetry endpoints.",explanation:"Production DevOps and JVM troubleshooting toolkit.",hint:"jcmd Thread.print, jstack -l, and ManagementFactory.getThreadMXBean().findDeadlockedThreads().",level:"Intermediate",codeExample:"long[] deadlocks = ManagementFactory.getThreadMXBean().findDeadlockedThreads();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Deadlock Diagnostics"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Diagnosing Deadlocks in Production: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"jcmd"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"jstack"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"ThreadMXBean"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master production telemetry: utilizing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"jcmd"})," thread dump snapshots, VisualVM monitors, and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"ThreadMXBean"})," programmatic health-check endpoints."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"ProductionDeadlockDiagnosisDemo.java",highlightLines:[7,10,13,14,15,20,21,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Deadlock Diagnostics FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:d,title:"Module 008_005 Topic 11: Production Deadlock Diagnosis",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic11_deadlock_diagnosis_note.txt"})}),e.jsx(o,{note:"When a production server suddenly stops processing requests and CPU drops to 0%, the first command you run in terminal is 'jcmd <PID> Thread.print'! Scroll straight to the bottom of the dump to find the exact lines causing the deadlock! — Sukanta Hui"})]})}export{x as default};
