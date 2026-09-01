import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 8: JVM CLI Diagnostics - The JDK Troubleshooting Toolkit\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
import java.lang.management.ManagementFactory;\r
\r
public class JvmCliDiagnosticsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: JVM CLI DIAGNOSTICS OVERVIEW - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        String jvmPid = ManagementFactory.getRuntimeMXBean().getName().split("@")[0];\r
        System.out.println(">>> 1. CURRENT JAVA PROCESS ID (PID): " + jvmPid + "\\n");\r
\r
        System.out.println(">>> 2. THE ESSENTIAL JDK CLI DIAGNOSTICS SUITE ($JAVA_HOME/bin):");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  TOOL       COMMAND EXAMPLE                 PURPOSE");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  jps        jps -lv                         Lists all running Java PIDs and launch arguments.");\r
        System.out.println("  jcmd       jcmd " + jvmPid + " Thread.print         Universal diagnostic Swiss-army knife (replaces jstack/jmap).");\r
        System.out.println("  jstat      jstat -gcutil " + jvmPid + " 1000 10    Watches real-time GC percentages every 1 second.");\r
        System.out.println("  jstack     jstack -l " + jvmPid + "                Captures thread dump to detect deadlocks & stuck threads.");\r
        System.out.println("  jmap       jmap -histo " + jvmPid + "              Quick live object histogram in terminal.");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 8: JVM CLI Diagnostics Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE JDK CLI TOOLKIT:\r
   - Built into standard JDK '$JAVA_HOME/bin'.\r
   - Communicates with running JVM instances via local OS domain sockets / Attach API.\r
\r
2. MODERN RECOMMENDATION:\r
   - 'jcmd' is the official modern replacement consolidating 'jstack', 'jinfo', and 'jmap'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Which modern JDK command-line tool consolidates the functionality of jstack, jmap, and jinfo?",shortAnswer:"jcmd, the official all-in-one JVM diagnostic tool that sends control commands directly to the running HotSpot JVM process.",explanation:"Recommended by Oracle for all modern JDK troubleshooting.",hint:"jcmd",level:"Beginner",codeExample:"jcmd <pid> Thread.print / GC.heap_dump / VM.flags"},{question:"How do JDK diagnostic tools connect to a running JVM process on the same machine?",shortAnswer:"Via the JVM Dynamic Attach API, which uses local OS domain sockets or named pipes located in the system temporary directory (/tmp or %TEMP%).",explanation:"Enables zero-overhead dynamic diagnostics without pre-attaching agents.",hint:"Uses the JVM Attach API over local OS sockets.",level:"Advanced",codeExample:"Communicates via local domain socket in /tmp/hsperfdata_<user>/"}];function j(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["JVM CLI Diagnostics: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"The JDK Troubleshooting Toolkit"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Terminal observability: master overview of jps, jcmd, jstat, jstack, and jmap for live production server inspection without installing agents."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"JvmCliDiagnosticsOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Memory Profiling & OOM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 010_006 Topic 8: JVM CLI Diagnostics Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic8_jvm_cli_diagnostics_overview_note.txt"})}),e.jsx(o,{note:"When a production server in AWS or Docker is freezing, you have no GUI! You must know your JDK CLI tools: jps to find the PID, jstat to watch GC in real-time, and jcmd to trigger a heap dump! — Sukanta Hui"})]})}export{j as default};
