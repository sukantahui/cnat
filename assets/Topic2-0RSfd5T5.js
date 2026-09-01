import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 2: java.lang.StringBuffer: Legacy Synchronized Thread-Safe String Builder\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class StringBufferSynchronizedDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: java.lang.StringBuffer (SYNCHRONIZED) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // StringBuffer methods are 'synchronized' (thread-safe):\r
        StringBuffer buffer = new StringBuffer();\r
\r
        // Spawning 2 concurrent worker threads writing to the same buffer:\r
        Thread t1 = new Thread(() -> {\r
            for (int i = 0; i < 1000; i++) buffer.append("A");\r
        });\r
\r
        Thread t2 = new Thread(() -> {\r
            for (int i = 0; i < 1000; i++) buffer.append("B");\r
        });\r
\r
        t1.start();\r
        t2.start();\r
        t1.join();\r
        t2.join();\r
\r
        System.out.println(">>> Multi-Threaded Concurrent Append Test:");\r
        System.out.println("  Expected Length : 2000 chars");\r
        System.out.println("  Actual Length   : " + buffer.length() + " chars (100% Thread-Safe & Atomic!)");\r
\r
        System.out.println("\\n>>> COST OF SYNCHRONIZATION: Every append() acquires an object monitor lock,");\r
        System.out.println("    making StringBuffer ~2x-3x slower than StringBuilder in single-threaded code.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 2: java.lang.StringBuffer\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STRINGBUFFER KEY FACTS:\r
   - Introduced in Java 1.0 (Legacy).\r
   - Thread-safe: Every public method is 'synchronized'.\r
   - Slower due to monitor lock acquisition and release overhead.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"When should you still consider using 'StringBuffer' over 'StringBuilder'?",shortAnswer:"Only when multiple concurrent threads are actively writing to and sharing the exact same string buffer instance without external synchronization. In all single-threaded code, StringBuilder is strictly preferred.",explanation:"Present since Java 1.0, StringBuffer uses synchronized methods.",hint:"Use only when a single buffer is shared across multiple concurrent writing threads.",level:"Intermediate",codeExample:"StringBuffer sbuf = new StringBuffer(); // Thread-safe synchronized buffer"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Synchronized Buffer"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-amber-400 font-mono",children:"java.lang.StringBuffer"}),": Synchronized Thread-Safe String Builder"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Explore Java's legacy synchronized buffer: testing multi-threaded concurrent appends, monitor locking, and understanding the synchronization performance penalty."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"StringBufferSynchronizedDemo.java",highlightLines:[7,15,18,22,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"StringBuffer FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 003_002 Topic 2: StringBuffer Synchronization",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic2_stringbuffer_note.txt"})}),e.jsx(a,{note:"StringBuffer was created in Java 1.0 back when computers only had single CPU cores. Today, we use StringBuilder 99.9% of the time, and only touch StringBuffer for legacy multithreaded code. — Sukanta Hui"})]})}export{g as default};
