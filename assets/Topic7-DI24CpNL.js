import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 7: Metaspace Memory Management - Sizing & Container Tuning\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
import java.lang.management.ManagementFactory;\r
import java.lang.management.MemoryPoolMXBean;\r
\r
public class MetaspaceMemoryManagementDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: METASPACE MEMORY MANAGEMENT - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. CRITICAL METASPACE TUNING FLAGS (DOCKER / KUBERNETES):");\r
        System.out.println("  1. -XX:MetaspaceSize=<size>     : Initial High-Watermark threshold that triggers initial Metaspace GC (e.g. 128m).");\r
        System.out.println("  2. -XX:MaxMetaspaceSize=<size>  : Maximum ceiling for Metaspace allocation (e.g. 256m).");\r
        System.out.println("  3. -XX:MinMetaspaceFreeRatio    : Minimum percentage of free Metaspace capacity after GC.");\r
        System.out.println("  4. -XX:MaxMetaspaceFreeRatio    : Maximum percentage of free Metaspace capacity after GC.\\n");\r
\r
        System.out.println(">>> 2. DIAGNOSING 'java.lang.OutOfMemoryError: Metaspace':");\r
        System.out.println("  - Common Root Cause #1: Classloader Leaks (e.g. repeated Tomcat/Spring context reloading).");\r
        System.out.println("  - Common Root Cause #2: Excessive runtime dynamic bytecode generation (CGLIB / Javassist without caching).");\r
        System.out.println("  - Solution: Profile classloader counts with 'jcmd <pid> VM.classloader_stats'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 7: Metaspace Memory Management\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METASPACE ALLOCATION ARCHITECTURE:\r
   - Chunk-based allocation: Allocates memory in chunks (Small, Medium, Specialized chunks)\r
     per ClassLoader to reduce fragmentation.\r
   - High Watermark: When Metaspace usage hits '-XX:MetaspaceSize', a Full GC is triggered\r
     to collect dead classloaders. If little memory is reclaimed, the watermark is raised.\r
\r
2. CONTAINER BEST PRACTICE (Docker / K8s):\r
   - Set '-XX:MaxMetaspaceSize=256m' or '512m' to prevent container cgroup OOM kills.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What does the -XX:MetaspaceSize flag control in the JVM?",shortAnswer:"It sets the initial High Watermark threshold. When Metaspace committed memory crosses this threshold, a Full GC is triggered to unload dead classes and reclaim native memory.",explanation:"Increasing MetaspaceSize prevents premature Full GCs during application startup.",hint:"Sets the initial GC high-watermark threshold for Metaspace.",level:"Intermediate",codeExample:"-XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=256m"},{question:"What is the primary cause of 'java.lang.OutOfMemoryError: Metaspace' in enterprise applications?",shortAnswer:"ClassLoader leaks, where hot-reloaded web applications or dynamic proxy libraries (CGLIB, ByteBuddy) create thousands of unique class definitions whose ClassLoaders cannot be garbage collected due to lingering static references.",explanation:"Unreferenced classes cannot unload if their ClassLoader is still referenced.",hint:"ClassLoader memory leaks and uncontrolled dynamic bytecode generation.",level:"Advanced",codeExample:"ClassLoader leak → Class metadata accumulates → Metaspace OOM"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Metaspace Memory Management: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Dynamic Expansion & MaxMetaspaceSize"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Container memory management: sizing Metaspace in Docker/K8s, High Watermark triggers, and diagnosing Metaspace OutOfMemoryError."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"MetaspaceMemoryManagementDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Memory Areas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 010_004 Topic 7: Metaspace Memory Management",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic7_metaspace_memory_management_note.txt"})}),e.jsx(n,{note:"In Docker containers, always configure -XX:MaxMetaspaceSize! If Metaspace expands unchecked, the Linux kernel OOM Killer will terminate your entire container! — Sukanta Hui"})]})}export{g as default};
