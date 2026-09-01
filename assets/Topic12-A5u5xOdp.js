import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 12: Analyzing Thread Dump Stack Traces: Decoding BLOCKED States & Deadlock Blocks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ThreadDumpAnalysisDecoderDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: DECODING THREAD DUMP STACK TRACES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> ANATOMY OF A DEADLOCK IN A REAL JVM THREAD DUMP (jstack output):");\r
        System.out.println();\r
        System.out.println(""Thread-Swadeep" #12 prio=5 os_prio=0 tid=0x00007f nid=0x1a03 waiting for monitor entry");\r
        System.out.println("   java.lang.Thread.State: BLOCKED (on object monitor)");\r
        System.out.println("        at com.coderaccotax.Bank.transfer(Bank.java:45)");\r
        System.out.println("        - waiting to lock <0x0000000715b1a450> (a com.coderaccotax.Account)");\r
        System.out.println("        - locked <0x0000000715b1a440> (a com.coderaccotax.Account)");\r
        System.out.println();\r
        System.out.println(""Thread-Tuhina" #13 prio=5 os_prio=0 tid=0x00007e nid=0x1a04 waiting for monitor entry");\r
        System.out.println("   java.lang.Thread.State: BLOCKED (on object monitor)");\r
        System.out.println("        at com.coderaccotax.Bank.transfer(Bank.java:45)");\r
        System.out.println("        - waiting to lock <0x0000000715b1a440> (a com.coderaccotax.Account)");\r
        System.out.println("        - locked <0x0000000715b1a450> (a com.coderaccotax.Account)");\r
        System.out.println();\r
        System.out.println("==========================================================================");\r
        System.out.println("Found 1 deadlock.");\r
        System.out.println("==========================================================================");\r
\r
        System.out.println("\\n>>> HOW TO READ THE THREAD DUMP:");\r
        System.out.println("  1. Locate the 'BLOCKED' threads waiting for monitor entry.");\r
        System.out.println("  2. Match the memory addresses in hex ('0x0000000715b1a450').");\r
        System.out.println("  3. Notice: Swadeep holds ...a440 waiting for ...a450.");\r
        System.out.println("  4. Notice: Tuhina holds ...a450 waiting for ...a440.");\r
        System.out.println("  5. Line 45 in Bank.java is the exact source code culprit!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 12: Decoding Thread Dumps\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DECODING THREAD DUMPS:\r
   - Search for 'BLOCKED (on object monitor)'.\r
   - Cross-reference hex addresses:\r
     * Thread 1: locked <0xA>, waiting to lock <0xB>.\r
     * Thread 2: locked <0xB>, waiting to lock <0xA>.\r
   - Check line numbers at top of stack trace.\r
   - HotSpot JVM prints 'Found 1 deadlock' at the very bottom.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How do you trace a circular deadlock by inspecting a JVM thread dump stack trace?",shortAnswer:"1. Locate threads in the 'BLOCKED (on object monitor)' state. 2. For each thread, examine the '- locked <0xHEX>' and '- waiting to lock <0xHEX>' memory address lines. 3. Trace the circular ownership: verify if Thread 1 locked Address A and is waiting to lock Address B, while Thread 2 locked Address B and is waiting to lock Address A. 4. Scroll to the bottom where HotSpot prints the automatic 'Found 1 deadlock' summary listing the exact Java file and line numbers where the lock invocations occurred.",explanation:"Production JVM troubleshooting and thread dump forensics.",hint:"Match the - locked <0xHEX> and - waiting to lock <0xHEX> addresses across BLOCKED threads.",level:"Intermediate",codeExample:"BLOCKED: - waiting to lock <0xABC> held by Thread-2; Thread-2: - waiting to lock <0xXYZ> held by Thread-1"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Thread Dump Forensics"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Analyzing Thread Dumps: Decoding ",e.jsx("code",{className:"text-rose-400 font-mono",children:"BLOCKED"})," States & Deadlock Cycles"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master production forensic analysis: dissecting JVM thread dump stack traces, cross-referencing monitor hex addresses, and locating exact source code lock lines."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ThreadDumpAnalysisDecoderDemo.java",highlightLines:[7,10,15,16,17,21,22,23,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Thread Dump Forensics FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 008_005 Topic 12: Thread Dump Forensics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic12_thread_dump_forensics_note.txt"})}),e.jsx(a,{note:"Thread dumps look intimidating at first with all those hex addresses, but all you need to do is match the '<0x...>' numbers between the two BLOCKED threads! Once you match the addresses, the stack trace points straight to the culprit line in your code! — Sukanta Hui"})]})}export{y as default};
