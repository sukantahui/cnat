import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 7: Unclosed Native Resources - Off-Heap & File Descriptor Leaks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
import java.nio.ByteBuffer;\r
\r
public class UnclosedNativeResourcesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: UNCLOSED NATIVE RESOURCES - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. ALLOCATING DIRECT (OFF-HEAP) MEMORY:");\r
        // Allocates 10MB of native C memory outside the Java Heap via malloc():\r
        ByteBuffer offHeapBuffer = ByteBuffer.allocateDirect(1024 * 1024 * 10);\r
        System.out.println("  - Allocated 10 MB in Native Off-Heap OS Memory: " + offHeapBuffer.isDirect());\r
\r
        System.out.println("\\n>>> DANGERS OF OFF-HEAP & RESOURCE LEAKS:");\r
        System.out.println("  1. INVISIBLE TO HEAP GC: Native memory usage does NOT show up in Java Heap graphs.");\r
        System.out.println("  2. FILE DESCRIPTOR EXHAUSTION: Unclosed sockets/files trigger 'java.io.IOException: Too many open files'.");\r
        System.out.println("  3. OS OOM KILLER: Linux cgroups kill the container when process RSS exceeds RAM limit!\\n");\r
\r
        System.out.println(">>> BEST PRACTICE:");\r
        System.out.println("  - Always use Try-With-Resources for all AutoCloseable resources (streams, connections, channels).");\r
        System.out.println("  - Size direct memory via '-XX:MaxDirectMemorySize=512m'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 7: Unclosed Native Resources\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT ARE NATIVE LEAKS:\r
   - Allocations performed outside the standard Java Heap in native OS memory:\r
     * 'ByteBuffer.allocateDirect()' (Off-heap Netty / Kafka buffers).\r
     * File Descriptors (unclosed FileInputStream, FileChannel).\r
     * Network Sockets (unclosed SocketChannel, HTTP client connections).\r
     * JNI Native C/C++ malloc pointers.\r
\r
2. TUNING & CONTROL:\r
   - '-XX:MaxDirectMemorySize=<size>' : Caps maximum off-heap direct buffer allocation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What exception occurs when an application leaks file input streams and network sockets without closing them?",shortAnswer:"java.io.IOException: Too many open files, caused by exhausting the operating system process file descriptor limit (ulimit -n).",explanation:"Every open file, socket, and pipe consumes an OS file descriptor.",hint:"java.io.IOException: Too many open files",level:"Beginner",codeExample:"throws IOException('Too many open files')"},{question:"What JVM flag sets an upper limit on Direct Off-Heap ByteBuffer allocations?",shortAnswer:"-XX:MaxDirectMemorySize=<size> (e.g. -XX:MaxDirectMemorySize=512m).",explanation:"Defaults to the maximum heap size (-Xmx) if omitted.",hint:"-XX:MaxDirectMemorySize",level:"Intermediate",codeExample:"java -XX:MaxDirectMemorySize=512m -jar kafka-app.jar"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Unclosed Native Resources: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Off-Heap & File Descriptor Leaks"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Outside the Java Heap: how DirectByteBuffer (malloc), unclosed streams, and OS file descriptors leak native memory without triggering Heap GC."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"UnclosedNativeResourcesDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Memory Profiling & OOM FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 010_006 Topic 7: Unclosed Native Resources",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic7_unclosed_native_resources_note.txt"})}),e.jsx(n,{note:"DirectByteBuffer allocates memory directly in the C++ operating system heap using malloc()! If you leak native memory, the Java Heap will look completely empty while the Linux kernel kills your process! Always close resources! — Sukanta Hui"})]})}export{y as default};
