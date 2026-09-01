import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const n=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 6: ThreadLocal Leaks in Thread Pools - ThreadLocal.remove() Hygiene\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
\r
public class ThreadLocalThreadPoolsLeaksDemo {\r
\r
    // ThreadLocal storing per-request user context:\r
    private static final ThreadLocal<String> USER_SESSION_CONTEXT = new ThreadLocal<>();\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THREADLOCAL IN THREAD POOLS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        ExecutorService threadPool = Executors.newFixedThreadPool(2);\r
\r
        // Submitting web request task with proper ThreadLocal hygiene:\r
        threadPool.submit(() -> {\r
            try {\r
                // 1. Set ThreadLocal for current incoming web request:\r
                USER_SESSION_CONTEXT.set("USER_SESSION_SWADEEP_PAUL_7749");\r
                System.out.println("1. [REQUEST START]: Context set for: " + USER_SESSION_CONTEXT.get());\r
\r
                // Perform business logic...\r
                System.out.println("2. [PROCESSING]   : Executing Barrackpore fee payment...");\r
\r
            } finally {\r
                // 3. MANDATORY PRODUCTION FIX: ALWAYS call remove() in finally block!\r
                USER_SESSION_CONTEXT.remove();\r
                System.out.println("3. [REQUEST END]  : ThreadLocal.remove() executed cleanly! (Zero Leak) ✅");\r
            }\r
        });\r
\r
        threadPool.shutdown();\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 6: ThreadLocal Leaks in Thread Pools\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY THREADLOCAL LEAKS IN APPLICATION SERVERS:\r
   - Worker threads in a thread pool (Tomcat, Netty, ExecutorService) live for the entire life of the JVM.\r
   - Each Thread instance holds a 'ThreadLocalMap'.\r
   - If a request sets a 'ThreadLocal' and finishes without calling 'remove()', the object remains\r
     referenced by the thread's 'ThreadLocalMap' indefinitely!\r
\r
2. MANDATORY PATTERN:\r
   - Always wrap in 'try ... finally':\r
     'try { tl.set(val); ... } finally { tl.remove(); }'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why does failing to call ThreadLocal.remove() cause severe memory leaks in web servers like Tomcat?",shortAnswer:"Because Tomcat reuses worker threads from a long-lived thread pool. If ThreadLocal.remove() is omitted, the Thread's internal ThreadLocalMap retains the request object (and its ClassLoader) across thousands of subsequent requests for the entire JVM lifetime.",explanation:"Causes both Heap memory exhaustion and ClassLoader Metaspace leaks.",hint:"Pooled worker threads never terminate, keeping ThreadLocalMap entries alive.",level:"Intermediate",codeExample:"try { tl.set(ctx); } finally { tl.remove(); }"},{question:"What modern Java 21 feature provides a safer, automatic alternative to ThreadLocal for request-scoped variables?",shortAnswer:"Scoped Values (JEP 446 / JEP 481), which are immutable, automatically bound to a lexical code scope, and automatically cleared when the scope exits.",explanation:"Designed specifically to replace ThreadLocal in Virtual Thread architectures.",hint:"Scoped Values (ScopedValue.where(...).run(...)).",level:"Advanced",codeExample:"ScopedValue.where(USER_CTX, user).run(() → { ... });"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["ThreadLocal Leaks in Thread Pools: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ThreadLocal.remove() Hygiene"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The server memory killer: why pooled worker threads in Tomcat/Netty hold ThreadLocal values forever unless cleared with ThreadLocal.remove()."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:n,title:"ThreadLocalThreadPoolsLeaksDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Memory Profiling & OOM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:l,title:"Module 010_006 Topic 6: ThreadLocal in Thread Pools",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic6_threadlocal_thread_pools_leaks_note.txt"})}),e.jsx(o,{note:"In Tomcat or Spring Boot, worker threads NEVER DIE — they return to the thread pool! If you put a user context into ThreadLocal and forget ThreadLocal.remove() in a finally block, that user data stays in memory FOREVER! — Sukanta Hui"})]})}export{x as default};
