import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 005_003: Buffered Streams, BufferedReader & PrintWriter\r
 * Topic 1: Buffering Mechanics: Internal 8192 Byte Buffer Array & Custom Sizing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.BufferedInputStream;\r
import java.io.ByteArrayInputStream;\r
\r
public class BufferingInternalMechanicsDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: BUFFERING INTERNAL MECHANICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        byte[] rawData = "Barrackpore Java Academy: High-Throughput I/O Mastery".getBytes();\r
\r
        // 1. Default Buffer Size (8192 bytes = 8 KB):\r
        BufferedInputStream defaultBuf = new BufferedInputStream(new ByteArrayInputStream(rawData));\r
        System.out.println(">>> 1. Default BufferedInputStream created (Internal 'byte[8192]' buffer allocated).");\r
\r
        // 2. Custom Buffer Size (e.g. 64 KB = 65536 bytes for massive enterprise log processing):\r
        int customSize = 64 * 1024; // 64 KB\r
        BufferedInputStream largeBuf = new BufferedInputStream(new ByteArrayInputStream(rawData), customSize);\r
        System.out.println(">>> 2. Custom High-Capacity BufferedInputStream created (Internal 'byte[" + customSize + "]' buffer).");\r
\r
        System.out.println("\\n>>> BUFFER LIFECYCLE MECHANICS:");\r
        System.out.println("  1. 'pos': Index of the next character/byte to be read from the buffer.");\r
        System.out.println("  2. 'count': Number of valid bytes currently cached in the internal array.");\r
        System.out.println("  3. When 'pos >= count', the stream automatically triggers an OS refill to fetch the next block.");\r
\r
        defaultBuf.close();\r
        largeBuf.close();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_003: Buffered Streams & PrintWriter\r
Topic 1: Buffering Mechanics & 8KB Defaults\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BUFFER INTERNALS:\r
   - Default size: 8192 (8 KB).\r
   - Internal state variables: 'pos' (cursor), 'count' (valid bytes cached).\r
   - Matches standard OS 4KB/8KB filesystem block allocations.\r
   - Custom tuning: 'new BufferedInputStream(in, 65536)' for 64KB high-speed processing.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the default internal buffer size used by 'BufferedInputStream' and 'BufferedReader' in the standard Java runtime?",shortAnswer:"8192 bytes (8 KB) for 'BufferedInputStream' and 8192 characters (16 KB in UTF-16 memory) for 'BufferedReader'. This size aligns with standard OS virtual memory page sizes (4KB to 8KB) and disk block clusters.",explanation:"You can supply a custom buffer size via the 2-argument constructor: new BufferedReader(reader, 65536).",hint:"8192 bytes/chars (8 KB), matching OS memory page boundaries.",level:"Beginner",codeExample:"new BufferedReader(reader, 16384); // Custom 16KB buffer"}];function B(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_003 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Buffer Internals"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Buffering Mechanics: Internal Memory Buffer Array (Default 8192 Units)"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Deep dive into buffer internals: analyzing internal ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"pos"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"count"})," cursor states and tuning custom buffer capacities for big data pipelines."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"BufferingInternalMechanicsDemo.java",highlightLines:[7,10,16,17,20,21,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Buffer Mechanics FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 005_003 Topic 1: Buffering Mechanics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_003_topic1_buffering_mechanics_note.txt"})}),e.jsx(a,{note:"The 8192-byte default buffer size is perfectly optimized by the JVM architects to match modern operating system SSD block clusters! You rarely need to change it unless parsing gigabyte log files! — Sukanta Hui"})]})}export{B as default};
