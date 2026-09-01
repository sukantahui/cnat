import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 15: Metaspace Sizing Flags - -XX:MetaspaceSize & -XX:MaxMetaspaceSize\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class MetaspaceSizingFlagsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: METASPACE SIZING FLAGS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE TWO CRITICAL METASPACE FLAGS:");\r
        System.out.println("  1. -XX:MetaspaceSize=<size> (Default: ~21MB):");\r
        System.out.println("     - Sets the INITIAL high-watermark threshold.");\r
        System.out.println("     - When loaded classes cross this threshold, JVM triggers a FULL GC.");\r
        System.out.println("     - Tuning: Set to 128m or 256m for Spring Boot apps to eliminate startup Full GCs!\\n");\r
\r
        System.out.println("  2. -XX:MaxMetaspaceSize=<size> (Default: Unbounded):");\r
        System.out.println("     - Sets the ABSOLUTE UPPER CEILING for Metaspace.");\r
        System.out.println("     - Tuning: Set to 256m or 512m in Docker/Kubernetes to prevent container cgroup crashes.\\n");\r
\r
        System.out.println(">>> PRODUCTION COMMAND LINE:");\r
        System.out.println("  - java -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=256m -jar spring-app.jar");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 15: Metaspace Sizing Flags\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METASPACESIZE VS MAXMETASPACESIZE:\r
   -----------------------------------------------------------------------------\r
   FLAG                   PURPOSE                               RECOMMENDED PROD VALUE\r
   -----------------------------------------------------------------------------\r
   -XX:MetaspaceSize      Initial GC High-Watermark Trigger     128m - 256m\r
   -XX:MaxMetaspaceSize   Hard Upper Limit on Native Memory     256m - 512m\r
   -----------------------------------------------------------------------------\r
\r
2. WHY STARTUP TUNING IS VITAL:\r
   - Spring Boot loads 8,000+ classes during bootstrap, easily exceeding the default 21MB watermark\r
     and causing multiple unnecessary Stop-The-World Full GCs before accepting the first HTTP request!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why do enterprise Spring Boot applications often trigger multiple Full GCs during startup if -XX:MetaspaceSize is not tuned?",shortAnswer:"Because the default -XX:MetaspaceSize is very small (~21MB). As Spring loads thousands of classes and generated proxies during startup, it repeatedly crosses this initial watermark threshold, forcing the JVM to perform Full GCs before raising the watermark.",explanation:"Setting -XX:MetaspaceSize=128m eliminates startup GC thrashing.",hint:"Default MetaspaceSize is ~21MB, which is quickly exceeded during startup.",level:"Intermediate",codeExample:"-XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=256m"},{question:"What happens if Metaspace allocations exceed -XX:MaxMetaspaceSize?",shortAnswer:"The JVM throws java.lang.OutOfMemoryError: Metaspace and fails further class loading.",explanation:"Protects the host OS from runaway memory consumption.",hint:"Throws java.lang.OutOfMemoryError: Metaspace.",level:"Beginner",codeExample:"throws java.lang.OutOfMemoryError: Metaspace"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Metaspace Sizing Flags: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"-XX:MetaspaceSize & -XX:MaxMetaspaceSize"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Managing native class memory: preventing high watermark Full GC thrashing and setting hard limits against container out-of-memory kills."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"MetaspaceSizingFlagsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Garbage Collection FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 010_005 Topic 15: Metaspace Sizing Flags",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic15_metaspace_sizing_flags_note.txt"})}),e.jsx(n,{note:"By default, -XX:MetaspaceSize is only ~21MB! In large Spring Boot apps, this triggers 3 to 5 premature Full GCs during startup! Always set -XX:MetaspaceSize=128m or 256m in production! — Sukanta Hui"})]})}export{S as default};
