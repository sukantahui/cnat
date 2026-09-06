import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 008_002: Thread Control & Daemon Threads\r
 * Topic 9: JVM Process Termination: Abrupt Shutdown of Running Daemon Threads\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class JvmTerminationAndDaemonShutdownDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: JVM TERMINATION & DAEMON SHUTDOWN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread infiniteDaemon = new Thread(() -> {\r
            try {\r
                int tick = 0;\r
                while (true) {\r
                    tick++;\r
                    System.out.printf("  [Daemon Service] Background heartbeat tick #%d...%n", tick);\r
                    Thread.sleep(200);\r
                }\r
            } catch (InterruptedException ignored) {\r
            } finally {\r
                // CRITICAL WARNING: In real JVM exit, finally blocks in Daemons may NOT execute!\r
                System.out.println("  [Daemon Service] Finally block executed!");\r
            }\r
        }, "Heartbeat-Daemon");\r
\r
        // MARKING THREAD AS DAEMON:\r
        infiniteDaemon.setDaemon(true);\r
        infiniteDaemon.start();\r
\r
        System.out.println(">>> 1. Main (User Thread) running a short 600 ms workload...");\r
        Thread.sleep(600); // Main thread stays alive for 600 ms\r
\r
        System.out.println("\\n>>> 2. Main (The ONLY active User Thread) is now exiting!");\r
        System.out.println("  As soon as main exits, the JVM terminates immediately, killing the Heartbeat-Daemon mid-flight!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_002: Thread Control & Daemon Threads\r
Topic 9: JVM Termination & Daemon Shutdown\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JVM TERMINATION RULE:\r
   - JVM exits when active User thread count reaches ZERO.\r
   - All Daemon threads are instantly killed mid-flight.\r
   - 'finally' blocks in Daemon threads do NOT run during JVM exit.\r
   - Never write database commits or file streams inside daemon threads.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Do 'finally' blocks in Daemon threads execute when the JVM terminates because all User threads have finished?",shortAnswer:"NO, they are NOT guaranteed to execute. When the last User thread finishes, the JVM halts immediately and abruptly aborts all running Daemon threads without unwinding their call stacks. Consequently, 'finally' blocks inside Daemon threads will NOT execute, and resources like open file streams or network sockets will not be flushed cleanly. Never perform critical I/O or database writes inside Daemon threads without explicit shutdown hooks.",explanation:"Core Java runtime specification regarding daemon threads and JVM termination.",hint:"Finally blocks in daemon threads do not execute upon JVM shutdown; avoid writing critical files in daemons.",level:"Intermediate",codeExample:"t.setDaemon(true); // Warning: finally block may NOT run when JVM exits!"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_002 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Daemon Shutdown"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["JVM Process Termination: Abrupt Shutdown of Running ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Daemon Threads"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand JVM shutdown boundaries: observing how the termination of the last active User thread triggers instantaneous process exit, abandoning daemon threads and bypassing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"finally"})," blocks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"JvmTerminationAndDaemonShutdownDemo.java",highlightLines:[7,10,16,17,26,27,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Daemon Shutdown FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 008_002 Topic 9: Daemon Shutdown",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_002_topic9_daemon_shutdown_note.txt"})}),e.jsx(r,{note:"Remember this for exams: When the last User thread finishes, the JVM kills all Daemon threads instantly! Their 'finally' blocks will NOT run! So never save important files or close database transactions inside a Daemon thread! — Sukanta Hui"})]})}export{b as default};
