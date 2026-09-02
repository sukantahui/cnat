import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 14: Instant Startup & Serverless - Sub-10ms Cold Starts\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class InstantStartupServerlessDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: INSTANT STARTUP & SERVERLESS ECONOMICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> CLOUD METRICS COMPARISON (SPRING BOOT 3 / QUARKUS MICROSERVICE):");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  METRIC                     TRADITIONAL JVM (HOTSPOT)       GRAALVM NATIVE IMAGE");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  Cold Start Startup Time    2,800 ms (2.8 seconds)          0.008 ms (8 milliseconds!) ⚡");\r
        System.out.println("  Base RAM (RSS) at idle     240 MB                          22 MB (10x reduction!) 📉");\r
        System.out.println("  Container Pod Density      4 pods per 1GB Node             40 pods per 1GB Node! 🚀");\r
        System.out.println("  AWS Lambda Billing Cost    High (Billed for 3s cold start) Ultra-Low (Billed for 10ms)");\r
        System.out.println("  -----------------------------------------------------------------------------------------\\n");\r
\r
        System.out.println(">>> MODERN FRAMEWORK SUPPORT:");\r
        System.out.println("  - Spring Boot 3.x (Spring Native / AOT engine built-in).");\r
        System.out.println("  - Quarkus ('Supersonic Subatomic Java').");\r
        System.out.println("  - Micronaut Framework.");\r
        System.out.println("  - Helidon Native.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 14: Instant Startup & Serverless\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY NATIVE IMAGES EXCEL IN SERVERLESS:\r
   - Zero JIT warmup delay.\r
   - Zero ClassLoader loading pauses.\r
   - Pre-initialized heap image allows instant handling of HTTP requests on tick 1.\r
\r
2. CLOUD INFRASTRUCTURE SAVINGS:\r
   - Massive reduction in cloud hosting bills (RAM is the most expensive cloud metric).\r
   - Scale-to-zero capabilities with zero cold start user penalty.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does GraalVM Native Image achieve sub-10ms startup times compared to several seconds on standard JVM?",shortAnswer:"Because the machine code is already compiled, classes are pre-loaded, and the initial heap is pre-populated at build time, completely eliminating JVM bootstrap, ClassLoader bytecode verification, and JIT interpreter warmup delays.",explanation:"Allows instantaneous request serving from the first millisecond.",hint:"Eliminates JVM bootstrap, class loading, and JIT warmup delays.",level:"Beginner",codeExample:"Native Image boot time: ~5-10ms."},{question:"Which major modern Java frameworks provide native GraalVM AOT compilation support out of the box?",shortAnswer:"Spring Boot 3.x, Quarkus, Micronaut, and Oracle Helidon.",explanation:"All provide build plugins that generate GraalVM native images automatically.",hint:"Spring Boot 3, Quarkus, Micronaut, Helidon.",level:"Beginner",codeExample:"./mvnw native:compile -Pnative"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Instant Startup & Serverless: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Sub-10ms Cold Starts for Microservices"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Cloud-native economics: comparing Quarkus, Micronaut, and Spring Boot 3 on GraalVM Native Image vs JVM in Kubernetes and AWS Lambda."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"InstantStartupServerlessDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"JIT Compiler & GraalVM FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 010_007 Topic 14: Instant Startup & Serverless",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic14_instant_startup_serverless_note.txt"})}),e.jsx(n,{note:"In AWS Lambda, standard Java has a 3-second cold start! But with GraalVM Native Image and Quarkus or Spring Boot 3, startup is UNDER 10 MILLISECONDS! Java now beats Node.js and Go in serverless! — Sukanta Hui"})]})}export{h as default};
