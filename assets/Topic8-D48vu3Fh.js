import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 8: Serial Garbage Collector - Single-Threaded Embedded Collector\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class SerialGcDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: SERIAL GARBAGE COLLECTOR (-XX:+UseSerialGC) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> CHARACTERISTICS OF SERIAL GC:");\r
        System.out.println("  1. Single-Threaded Execution : Uses exactly 1 GC thread; stops all application threads during GC.");\r
        System.out.println("  2. Algorithm on Young Gen    : Single-threaded Copying algorithm.");\r
        System.out.println("  3. Algorithm on Old Gen      : Single-threaded Mark-Sweep-Compact algorithm.");\r
        System.out.println("  4. Zero Coordination Lock   : No thread synchronization overhead among GC workers!\\n");\r
\r
        System.out.println(">>> IDEAL PRODUCTION USE CASES FOR SERIAL GC:");\r
        System.out.println("  - Small CLI Utilities & Scripting tools.");\r
        System.out.println("  - Single-Core Virtual Machines / Cloud containers (<1 CPU, <512MB RAM).");\r
        System.out.println("  - Serverless Functions (AWS Lambda / Google Cloud Run with 128MB RAM).");\r
        System.out.println("  - Embedded Java & IoT devices.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 8: Serial GC (-XX:+UseSerialGC)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS SERIAL GC:\r
   - Enabled via '-XX:+UseSerialGC'.\r
   - Performs all garbage collection work in a single thread.\r
   - Full STW pauses for both Young and Old generation collections.\r
\r
2. ADVANTAGES:\r
   - Lowest memory footprint and CPU overhead of any Java collector.\r
   - Zero multi-threaded synchronization or inter-thread communication penalty.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"When is Serial GC (-XX:+UseSerialGC) the recommended collector choice in modern architectures?",shortAnswer:"In single-CPU cloud containers, small serverless functions (AWS Lambda with 128MB–256MB RAM), CLI utilities, and embedded IoT devices where multi-threaded GC overhead wastes memory and CPU.",explanation:"Eliminates multi-threaded coordination overhead on single-core environments.",hint:"Single-core containers, serverless functions, and small CLI tools.",level:"Beginner",codeExample:"java -XX:+UseSerialGC -Xmx128m -jar lambda-app.jar"},{question:"What algorithm does Serial GC use for Young Generation and Old Generation collections?",shortAnswer:"It uses a single-threaded Copying algorithm for Young Gen (Eden/Survivors) and a single-threaded Mark-Sweep-Compact algorithm for the Old Generation.",explanation:"Standard single-threaded generational collection.",hint:"Copying for Young Gen; Mark-Sweep-Compact for Old Gen.",level:"Intermediate",codeExample:"Young: Copying; Old: Mark-Sweep-Compact"}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Serial Garbage Collector: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"-XX:+UseSerialGC"})," for Embedded & CLI"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Single-threaded simplicity: how Serial GC runs both Minor and Full GC on a single core with zero thread synchronization overhead."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"SerialGcDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Garbage Collection FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 010_005 Topic 8: Serial GC (-XX:+UseSerialGC)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic8_serial_gc_note.txt"})}),e.jsx(o,{note:"Serial GC uses only ONE CPU core for garbage collection! It is super lightweight with zero memory overhead, making it the perfect choice for small CLI tools, AWS Lambda micro-functions, and embedded IoT devices! — Sukanta Hui"})]})}export{C as default};
