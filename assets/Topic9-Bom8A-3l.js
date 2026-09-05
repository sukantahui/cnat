import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 9: The jps Utility - Java Process Status Tool\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class JpsUtilityDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: THE JPS UTILITY (JAVA PROCESS STATUS) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> JPS COMMAND LINE VARIATIONS & OUTPUTS:");\r
        System.out.println("  1. 'jps'        : Displays PID and short class name (e.g. '7742 JpsUtilityDemo').");\r
        System.out.println("  2. 'jps -l'     : Displays PID and FULL package name (e.g. '7742 com.coderaccotax...JpsUtilityDemo').");\r
        System.out.println("  3. 'jps -v'     : Displays PID and all active JVM FLAGS (e.g. '-Xmx4g -XX:+UseG1GC').");\r
        System.out.println("  4. 'jps -m'     : Displays PID and arguments passed to the main() method.");\r
        System.out.println("  5. 'jps -lvm'   : [PRO TIP] Displays FULL package, flags, and arguments together!\\n");\r
\r
        System.out.println(">>> HOW JPS LOCATES JAVA PROCESSES:");\r
        System.out.println("  - Reads performance data files from: '/tmp/hsperfdata_<username>/<pid>' on Linux");\r
        System.out.println("  - Reads performance data files from: '%TEMP%/hsperfdata_<username>/<pid>' on Windows.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 9: The jps Utility\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS JPS:\r
   - Java Process Status tool.\r
   - Lists instrumented HotSpot JVM processes running under the current user account on the target machine.\r
\r
2. ESSENTIAL FLAGS:\r
   - '-l' : Prints full package name of the main class or JAR file path.\r
   - '-v' : Prints JVM options/arguments ('-Xms', '-Xmx', '-XX' options).\r
   - '-m' : Prints application arguments passed to 'main()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What does the -l flag do when executing jps in a terminal?",shortAnswer:"It displays the full package name of the application's main class or the full path to the executed JAR file instead of just the simple class name.",explanation:"Essential for distinguishing between multiple running services.",hint:"Prints the full package name or JAR file path.",level:"Beginner",codeExample:"jps -l → 14920 com.company.payment.PaymentApplication"},{question:"Why might jps fail to list a running Java process on a Linux server?",shortAnswer:"If jps is executed by a different Linux user than the user running the target Java process, or if the process was started with the -XX:+PerfDisableSharedMem flag which prevents writing to /tmp/hsperfdata.",explanation:"Ensure matching user permissions or run with sudo -u <appuser>.",hint:"User permission mismatch or -XX:+PerfDisableSharedMem enabled.",level:"Intermediate",codeExample:"sudo -u appuser jps -lv"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The jps Utility: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Listing Running JVM Processes"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Process discovery: finding Java process IDs, main class names, and active JVM system arguments using jps -l -v -m."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"JpsUtilityDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Memory Profiling & OOM FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 010_006 Topic 9: The jps Utility",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic9_jps_utility_note.txt"})}),e.jsx(a,{note:"The first command you always run in an SSH terminal is jps -lv! It lists every running Java application, its Process ID (PID), and all JVM startup flags! — Sukanta Hui"})]})}export{g as default};
