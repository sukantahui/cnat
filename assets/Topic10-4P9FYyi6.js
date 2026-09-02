import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 10: When Does 'finally' NOT Execute? System.exit(), Fatal VM Crashes & Power Loss\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class WhenFinallyDoesNotExecuteDemo {\r
\r
    public static void demonstrateSystemExit(boolean terminateVm) {\r
        System.out.println("  1. Entering TRY block...");\r
\r
        try {\r
            if (terminateVm) {\r
                System.out.println("  2. Invoking 'System.exit(0)' (Instructing OS to kill JVM process)...");\r
                // System.exit(0); // If uncommented, JVM halts immediately and FINALLY NEVER RUNS!\r
            } else {\r
                System.out.println("  2. Standard execution without JVM termination.");\r
            }\r
        } finally {\r
            System.out.println("  3. [FINALLY] Cleanup routine executed.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: WHEN 'finally' DOES NOT EXECUTE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 RARE SCENARIOS WHERE 'finally' WILL NEVER RUN:");\r
        System.out.println("  1. System.exit(status) or Runtime.getRuntime().halt() is called.");\r
        System.out.println("  2. Fatal JVM native crash (e.g. fatal segmentation fault in JNI C++ code).");\r
        System.out.println("  3. Physical server hardware power loss or SIGKILL (kill -9) from OS.");\r
        System.out.println("  4. An infinite loop / deadlock inside the try/catch block itself.");\r
\r
        System.out.println("\\n>>> Standard Execution Simulation:");\r
        demonstrateSystemExit(false);\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 10: When finally Does NOT Execute\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FINALLY BYPASS SCENARIOS:\r
   - 'System.exit(0)' / 'Runtime.halt()'.\r
   - Fatal JVM native crash (JNI).\r
   - OS SIGKILL / Hardware power cut.\r
   - Infinite loop / deadlock in try block.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Under what specific conditions will a 'finally' block FAIL to execute in Java?",shortAnswer:"1. When 'System.exit(status)' or 'Runtime.getRuntime().halt()' terminates the JVM process. 2. During a catastrophic JVM crash (e.g. segmentation fault in native JNI code). 3. Physical hardware power outage or operating system 'kill -9' signal. 4. If the try block enters an infinite loop or permanent thread deadlock.",explanation:"Apart from these extreme operating-system-level terminations, finally ALWAYS executes.",hint:"System.exit(), fatal JVM native crashes, OS kill -9, or infinite deadlocks in try.",level:"Intermediate",codeExample:"// System.exit(0) immediately terminates the entire OS process, skipping finally"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"JVM Termination"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["When Does ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"finally"})," NOT Execute? ",e.jsx("code",{className:"text-rose-400 font-mono",children:"System.exit()"})," & JVM Crashes"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the exact boundary limits of the JVM: identifying the 4 rare scenarios where finally blocks are bypassed by OS process termination and native crashes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"WhenFinallyDoesNotExecuteDemo.java",highlightLines:[7,10,14,15,18,19,26,27,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"When Finally Fails FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 004_002 Topic 10: When finally Does Not Execute",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic10_when_finally_fails_note.txt"})}),e.jsx(r,{note:"Remember: 'finally' is guaranteed to execute against all normal Java code and exceptions. The ONLY way it won't run is if you pull the plug on the JVM with System.exit() or a native OS kill! — Sukanta Hui"})]})}export{h as default};
