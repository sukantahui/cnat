import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 1: Method Area & Metaspace - Shared Class Metadata Storage\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
import java.lang.management.ManagementFactory;\r
import java.lang.management.MemoryPoolMXBean;\r
\r
public class MethodAreaMetaspaceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: METHOD AREA & METASPACE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. INSPECTING RUNTIME METASPACE POOL METRICS:");\r
        for (MemoryPoolMXBean pool : ManagementFactory.getMemoryPoolMXBeans()) {\r
            if (pool.getName().toLowerCase().contains("metaspace")) {\r
                System.out.println("  - Pool Name    : " + pool.getName());\r
                System.out.println("  - Memory Type  : " + pool.getType() + " (Non-Heap / Native Memory)");\r
                System.out.println("  - Used Memory  : " + (pool.getUsage().getUsed() / (1024 * 1024)) + " MB");\r
                System.out.println("  - Committed    : " + (pool.getUsage().getCommitted() / (1024 * 1024)) + " MB");\r
            }\r
        }\r
\r
        System.out.println("\\n>>> WHAT RESIDES INSIDE METASPACE:");\r
        System.out.println("  1. Klass Metadata Structures (Method tables, vtables, itables).");\r
        System.out.println("  2. Runtime Constant Pool (Literal constants, method/field references).");\r
        System.out.println("  3. Method Bytecode Arrays & JIT compiled code pointers.");\r
        System.out.println("  4. Annotations metadata.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 1: Method Area & Metaspace\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS THE METHOD AREA:\r
   - A logical memory area defined in the JVM specification that stores per-class structures:\r
     * Runtime Constant Pool.\r
     * Field and method data.\r
     * Code for methods and constructors.\r
\r
2. METASPACE IMPLEMENTATION (Java 8+):\r
   - Allocated out of native memory (off-heap).\r
   - Dynamically expands to avoid artificial limits.\r
   - Guarded by '-XX:MaxMetaspaceSize'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Is Metaspace subject to Java Garbage Collection?",shortAnswer:"Yes. When a ClassLoader becomes unreachable and has zero live instances of its loaded classes on the heap, the JVM garbage collector reclaims the associated class metadata from Metaspace (Class Unloading).",explanation:"Crucial for application servers reloading web applications.",hint:"Yes, reclaimed during Full GC when ClassLoaders become dead.",level:"Intermediate",codeExample:"Dead ClassLoader → Metaspace metadata unloads during Full GC."},{question:"What JVM flag sets the upper limit on Metaspace memory to prevent memory exhaustion?",shortAnswer:"-XX:MaxMetaspaceSize=<size>, for example: -XX:MaxMetaspaceSize=512m.",explanation:"By default, Metaspace has no upper limit and can consume all available OS RAM.",hint:"-XX:MaxMetaspaceSize",level:"Beginner",codeExample:"java -XX:MaxMetaspaceSize=256m -jar app.jar"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Method Area & Metaspace: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Shared Off-Heap Class Metadata"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Storing the blueprint: runtime constant pool, field & method data, static variables, and constructor bytecode in native process memory."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:o,title:"MethodAreaMetaspaceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Memory Areas FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 010_004 Topic 1: Method Area & Metaspace",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic1_method_area_metaspace_note.txt"})}),e.jsx(r,{note:"The Method Area is a logical concept in the JVM specification. In Java 8+, HotSpot implements it using Metaspace in native OS memory rather than the old JVM heap PermGen! — Sukanta Hui"})]})}export{h as default};
