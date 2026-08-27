import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 15: The Closed-World Assumption - Reflection & Dynamic Loading Constraints (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class ClosedWorldAssumptionCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: THE CLOSED-WORLD ASSUMPTION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHAT IS THE CLOSED-WORLD ASSUMPTION:");\r
        System.out.println("  1. Definition: All bytecode that will EVER execute at runtime must be known at BUILD TIME.");\r
        System.out.println("  2. Consequence: Dynamic class loading at runtime (e.g. downloading new JARs) is IMPOSSIBLE in Native Image!\\n");\r
\r
        System.out.println(">>> DYNAMIC JAVA FEATURES THAT REQUIRE CONFIGURATION IN NATIVE IMAGE:");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  DYNAMIC FEATURE              LIMITATION                      SOLUTION / CONFIGURATION");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  Reflection (Class.forName)   Tree shaker strips unused code  'reflect-config.json' metadata");\r
        System.out.println("  Dynamic Proxies (Proxy.new)  Bytecode generation unavailable 'proxy-config.json' metadata");\r
        System.out.println("  Resource Loading (getResource) Files not in binary           'resource-config.json' metadata");\r
        System.out.println("  JNI Calls (C++ bindings)     Missing native method handles   'jni-config.json' metadata");\r
        System.out.println("  -----------------------------------------------------------------------------------------\\n");\r
\r
        System.out.println(">>> THE GRAALVM TRACING AGENT (AUTOMATIC METADATA GENERATION):");\r
        System.out.println("  - Run app on standard JVM with agent:");\r
        System.out.println("    'java -agentlib:native-image-agent=config-output-dir=META-INF/native-image -jar app.jar'");\r
        System.out.println("  - The agent automatically records all reflection calls and generates all JSON config files!");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" SEGMENT 10 COMPLETE: 7/7 MODULES (110 TOPICS) 100% MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 15: Closed-World Assumption Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS THE CLOSED-WORLD ASSUMPTION:\r
   - The fundamental contract of GraalVM Native Image.\r
   - Assumes that all classes, methods, and fields that will ever be accessed are known at compile time.\r
   - Any class loaded via dynamic reflection that was not registered in 'reflect-config.json'\r
     will throw 'ClassNotFoundException' at runtime!\r
\r
2. HOW TO GENERATE METADATA AUTOMATICALLY:\r
   - Use the GraalVM Tracing Agent ('-agentlib:native-image-agent=config-output-dir=...').\r
   - Spring Boot 3 AOT engine generates this configuration automatically during 'mvn compile'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the Closed-World Assumption in GraalVM Native Image?",shortAnswer:"The architectural rule that all code that can possibly execute at runtime must be discovered and compiled ahead-of-time during build time. Any class or method accessed dynamically via reflection without explicit pre-registration is excluded from the binary.",explanation:"Core principle enabling whole-program static analysis and dead code elimination.",hint:"All code that can ever run must be known and registered at build time.",level:"Intermediate",codeExample:"Closed-World Assumption: Unregistered reflection fails at runtime."},{question:"How does the GraalVM Tracing Agent simplify configuring reflection and dynamic proxies for Native Image?",shortAnswer:"By attaching to a regular JVM execution (-agentlib:native-image-agent=config-output-dir=...) during integration testing, it intercepts and records all runtime reflection, proxy, resource, and JNI calls, automatically generating the required JSON configuration files.",explanation:"Eliminates tedious manual JSON metadata creation.",hint:"Runs on standard JVM and automatically writes reflect-config.json and proxy-config.json.",level:"Advanced",codeExample:"java -agentlib:native-image-agent=config-output-dir=src/main/resources/META-INF/native-image -jar app.jar"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Closed-World Assumption: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Reflection & Dynamic Loading Limits"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Navigating AOT constraints: why Reflection, dynamic proxies, and Class.forName() require reachability-metadata.json configuration in Native Image."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"ClosedWorldAssumptionCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JIT Compiler & GraalVM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 010_007 Topic 15: Closed-World Assumption Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic15_closed_world_assumption_capstone_note.txt"})}),e.jsx(i,{note:"Congratulations on completing Segment 10 (JVM Internals, GC Tuning & GraalVM)! You now understand the Closed-World Assumption: why dynamic reflection requires JSON metadata in GraalVM! Segment 10 is 100% MASTERED! — Sukanta Hui"})]})}export{x as default};
