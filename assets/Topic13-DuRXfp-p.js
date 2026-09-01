import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 13: Compiling Java to Standalone Binaries - The native-image Build Pipeline\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class NativeImageBuildPipelineDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: THE NATIVE-IMAGE BUILD PIPELINE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 5 PHASES OF THE NATIVE-IMAGE BUILD PROCESS:");\r
        System.out.println("  Phase 1: Points-To Analysis (Static Reachability Graph):");\r
        System.out.println("           - Explores all reachable classes, methods, and fields starting from main().");\r
        System.out.println("  Phase 2: Build-Time Initialization (Class Initialization at Build Time):");\r
        System.out.println("           - Executes <clinit> static initializers at build time and snapshots heap state!");\r
        System.out.println("  Phase 3: Aggressive Dead-Code Stripping (Tree Shaking):");\r
        System.out.println("           - Erases all unused standard library and third-party classes from the binary.");\r
        System.out.println("  Phase 4: Graal AOT Native Code Generation:");\r
        System.out.println("           - Compiles reachable bytecodes into machine code (x86_64 / AArch64).");\r
        System.out.println("  Phase 5: Binary Linkage & Packaging:");\r
        System.out.println("           - Emits final standalone executable ELF (Linux), Mach-O (macOS), or PE (.exe on Windows).\\n");\r
\r
        System.out.println(">>> RESULT: A single self-contained ~30MB binary executable!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 13: The native-image Build Pipeline\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS STATIC POINTS-TO ANALYSIS:\r
   - An iterative reachability analysis algorithm that determines all methods and classes\r
     that can possibly be invoked at runtime.\r
   - Unreachable code is completely purged from the final executable.\r
\r
2. BUILD-TIME HEAP SNAPSHOTTING:\r
   - Classes configured for build-time initialization execute their static blocks during the build.\r
   - The resulting initialized objects are snapshotted directly into the binary's initial heap image!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"How does GraalVM Native Image reduce the memory footprint and binary size of Java applications?",shortAnswer:"Through static Points-To Analysis (Tree Shaking). It discovers and retains only the classes, methods, and standard library components that are strictly reachable from main(), discarding all unused bytecode.",explanation:"Dramatically reduces binary size and attack surface.",hint:"Performs static Points-To Analysis and removes all unreachable code.",level:"Intermediate",codeExample:"Tree shaking purges unused bytecode from the final native binary."},{question:"What is Build-Time Class Initialization in GraalVM Native Image?",shortAnswer:"An optimization where static class initializers (<clinit>) are executed during compilation, and the resulting initialized class state and static objects are embedded directly into the native binary's startup heap image for instant availability.",explanation:"Shifts initialization work from runtime to build time.",hint:"Executes static initializers at build time and embeds the resulting heap snapshot.",level:"Advanced",codeExample:"--initialize-at-build-time=com.company.util"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Compiling Java to Standalone Binaries: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"The native-image Build Pipeline"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"From JAR to ELF: static points-to analysis, dead code elimination, and embedding SubstrateVM into standalone native executables."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"NativeImageBuildPipelineDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JIT Compiler & GraalVM FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:r,title:"Module 010_007 Topic 13: The native-image Build Pipeline",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic13_native_image_build_pipeline_note.txt"})}),e.jsx(n,{note:"During native-image compilation, GraalVM performs Static Analysis: it walks your entire application graph, finds every class that can possibly be called, strips out 80% of unused code, and builds an ultra-lean binary! — Sukanta Hui"})]})}export{b as default};
