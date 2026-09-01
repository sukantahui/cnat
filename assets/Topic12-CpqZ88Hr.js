import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 12: Ahead-Of-Time (AOT) Compilation - GraalVM Native Image Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class AotGraalvmNativeImageDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: GRAALVM NATIVE IMAGE (AOT COMPILATION) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> TRADITIONAL JIT JVM VS GRAALVM NATIVE IMAGE (AOT):");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  CHARACTERISTIC       TRADITIONAL JIT JVM           GRAALVM NATIVE IMAGE (AOT)");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  Executable Format    Bytecode .class / .jar files  Standalone Native Binary (.exe / ELF)");\r
        System.out.println("  JVM Requirement      Requires installed JDK/JRE    Zero JVM needed (Embeds SubstrateVM)");\r
        System.out.println("  Startup Time         1 - 5 seconds                 0.005 seconds (< 10 ms!)");\r
        System.out.println("  Memory Footprint     200MB - 500MB baseline        15MB - 30MB baseline");\r
        System.out.println("  Compilation Timing   Just-In-Time during execution Ahead-Of-Time at build time");\r
        System.out.println("  Peak Throughput      Maximum (Profile-Guided)      Near Peak (with PGO)");\r
        System.out.println("  -----------------------------------------------------------------------------------------\\n");\r
\r
        System.out.println(">>> BUILDING A NATIVE IMAGE:");\r
        System.out.println("  Command: native-image -jar application.jar -o payment-service");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 12: AOT & GraalVM Native Image\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS GRAALVM NATIVE IMAGE:\r
   - Technology that compiles Java bytecode ahead-of-time (AOT) into a standalone native executable.\r
   - Embeds SubstrateVM: a stripped-down runtime providing memory management, thread scheduling,\r
     and garbage collection inside the compiled binary.\r
\r
2. WHY REVOLUTIONARY FOR CLOUD:\r
   - Instant startup eliminates cold starts in serverless functions (AWS Lambda).\r
   - Low RAM usage allows 10x higher container density on Kubernetes worker nodes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is SubstrateVM in the context of GraalVM Native Image?",shortAnswer:"SubstrateVM is a lightweight, embeddable virtual machine runtime written in Java that is compiled directly into the native binary, providing essential runtime facilities like garbage collection, thread management, and stack unwinding without requiring an external JVM.",explanation:"Powers standalone native execution without an external JDK.",hint:"The embedded lightweight runtime providing GC and thread management inside the binary.",level:"Intermediate",codeExample:"Native Binary = Application Code + SubstrateVM Runtime."},{question:"How does AOT compilation differ fundamentally from JIT compilation?",shortAnswer:"AOT compilation converts bytecode into native machine code statically ahead-of-time during the build process before the application ever runs, whereas JIT compilation converts bytecode dynamically at runtime while the program executes.",explanation:"Trades build time for instant runtime startup.",hint:"AOT compiles during build time; JIT compiles dynamically at runtime.",level:"Beginner",codeExample:"AOT: Build-time native compilation; JIT: Runtime adaptive compilation."}];function A(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Ahead-Of-Time (AOT) Compilation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"GraalVM Native Image Architecture"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The cloud native paradigm: transforming standard Java bytecode into standalone OS machine binaries ahead of time with SubstrateVM."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"AotGraalvmNativeImageDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"JIT Compiler & GraalVM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 010_007 Topic 12: AOT & GraalVM Native Image",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic12_aot_graalvm_native_image_note.txt"})}),e.jsx(i,{note:"GraalVM Native Image takes your entire Java application and compiles it directly into an .exe or Linux ELF binary ahead of time! No JVM installation is needed on the target server! — Sukanta Hui"})]})}export{A as default};
