import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 0: The 5 Runtime Data Areas of the Java Virtual Machine\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
import java.lang.management.ManagementFactory;\r
import java.lang.management.MemoryMXBean;\r
import java.lang.management.MemoryUsage;\r
\r
public class FiveRuntimeDataAreasDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: THE 5 RUNTIME DATA AREAS OF THE JVM - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        MemoryMXBean memoryBean = ManagementFactory.getMemoryMXBean();\r
        MemoryUsage heapUsage = memoryBean.getHeapMemoryUsage();\r
        MemoryUsage nonHeapUsage = memoryBean.getNonHeapMemoryUsage();\r
\r
        System.out.println(">>> 1. THREAD-SHARED RUNTIME DATA AREAS (GLOBAL ACROSS ALL THREADS):");\r
        System.out.println("  A. HEAP MEMORY (Objects & Arrays):");\r
        System.out.println("     - Initial Heap (Xms) : " + (heapUsage.getInit() / (1024 * 1024)) + " MB");\r
        System.out.println("     - Used Heap          : " + (heapUsage.getUsed() / (1024 * 1024)) + " MB");\r
        System.out.println("     - Max Heap (Xmx)     : " + (heapUsage.getMax() / (1024 * 1024)) + " MB");\r
        System.out.println("  B. METASPACE / METHOD AREA (Class metadata, bytecode, constant pool):");\r
        System.out.println("     - Used Metaspace     : " + (nonHeapUsage.getUsed() / (1024 * 1024)) + " MB\\n");\r
\r
        System.out.println(">>> 2. THREAD-PRIVATE RUNTIME DATA AREAS (CREATED PER THREAD):");\r
        System.out.println("  C. JVM THREAD STACK   : Stack frames for active method calls (Local variables, Operand stack).");\r
        System.out.println("  D. PC REGISTER        : Program Counter pointing to currently executing bytecode opcode.");\r
        System.out.println("  E. NATIVE METHOD STACK: C/C++ execution stack for JNI operations.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 0: The 5 Runtime Data Areas\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 5 RUNTIME DATA AREAS SPECIFICATION:\r
   -----------------------------------------------------------------------------\r
   AREA                  LIFECYCLE      THREAD VISIBILITY   STORES\r
   -----------------------------------------------------------------------------\r
   Heap Area             JVM Lifetime   Shared (All Threads) Objects, Instances, Arrays\r
   Method Area/Metaspace JVM Lifetime   Shared (All Threads) Class metadata, bytecodes, pools\r
   JVM Thread Stack      Thread Life    Private per Thread  Stack Frames, local variables\r
   PC Register           Thread Life    Private per Thread  Current bytecode instruction index\r
   Native Method Stack   Thread Life    Private per Thread  C/C++ native method frames (JNI)\r
   -----------------------------------------------------------------------------\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Which of the 5 JVM Runtime Data Areas are shared across all threads in the JVM process?",shortAnswer:"The Heap Area and the Method Area (Metaspace in Java 8+). All threads can concurrently access object instances on the Heap and class metadata in Metaspace.",explanation:"The remaining three (Stack, PC Register, Native Stack) are private to each thread.",hint:"Heap and Method Area (Metaspace).",level:"Beginner",codeExample:"Shared: Heap + Metaspace; Private: Stack + PC + Native Stack"},{question:"What is created on the JVM Thread Stack every time a method is invoked?",shortAnswer:"A new Stack Frame, which contains the Local Variable Table (LVT), Operand Stack, and Frame Data (constant pool references and return info).",explanation:"Popped from the stack when the method returns.",hint:"A Stack Frame containing Local Variables, Operand Stack, and Frame Data.",level:"Beginner",codeExample:"Method Call → Pushes Stack Frame; Return → Pops Stack Frame"}];function A(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The 5 Runtime Data Areas of the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"JVM Memory Model"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master map of JVM memory: thread-shared areas (Heap, Metaspace) vs thread-private areas (JVM Stack, PC Register, Native Stack)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"FiveRuntimeDataAreasDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Memory Areas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 010_004 Topic 0: The 5 Runtime Data Areas",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic0_five_runtime_data_areas_note.txt"})}),e.jsx(n,{note:"JVM Memory is divided into 5 distinct areas! 2 are SHARED across all threads (Heap & Metaspace), and 3 are PRIVATE to every individual thread (Stack, PC Register, Native Stack)! — Sukanta Hui"})]})}export{A as default};
