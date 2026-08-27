import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 3: Phase 2 - Linking: Verification, Preparation, Resolution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
public class Phase2LinkingOverviewDemo {\r
\r
    // Demonstrating Preparation vs Initialization:\r
    public static class LinkingDemoTarget {\r
        // In PREPARATION: 'studentCount' is allocated in memory and set to 0.\r
        // In INITIALIZATION: 'studentCount' is set to 42.\r
        public static int studentCount = 42;\r
\r
        // In PREPARATION: 'DEFAULT_ACADEMY' is set to null.\r
        // In INITIALIZATION: 'DEFAULT_ACADEMY' is set to 'Barrackpore'.\r
        public static String DEFAULT_ACADEMY = "Barrackpore";\r
\r
        // Compile-time constant (static final primitive/String):\r
        // Stored directly in constant pool and initialized immediately!\r
        public static final String ACADEMY_CODE = "BKP-2026";\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: PHASE 2 - LINKING OVERVIEW - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. ACCESSING COMPILE-TIME CONSTANT (No Linking/Init of class needed!):");\r
        System.out.println("   - Academy Code: " + LinkingDemoTarget.ACADEMY_CODE);\r
\r
        System.out.println("\\n>>> THE 3 LINKING SUB-PHASES:");\r
        System.out.println("  1. VERIFICATION: Bytecode Verifier guarantees no stack overflow/underflow, valid branch targets.");\r
        System.out.println("  2. PREPARATION : Allocates memory for static variables and assigns DEFAULT values (0, false, null).");\r
        System.out.println("  3. RESOLUTION  : Replaces symbolic names (e.g. #12 -> 'java/lang/String') with direct memory pointers.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 3: Phase 2 (Linking Overview)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LINKING SUB-PHASES DECONSTRUCTED:\r
   1. Verification:\r
      - Ensures binary class format is structurally valid.\r
      - Enforces type safety, access restrictions, and operand stack depth bounds.\r
   2. Preparation:\r
      - Allocates static memory in Metaspace/Heap.\r
      - Sets default values: 'int' &rarr; 0, 'boolean' &rarr; false, 'Object' &rarr; null.\r
   3. Resolution:\r
      - Dynamically resolves symbolic references in the Constant Pool to direct memory pointers.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What value is assigned to a static field 'public static int count = 50;' during the Preparation step of Linking?",shortAnswer:"The field is assigned the default primitive value 0. The value 50 is assigned later during Phase 3 (Initialization).",explanation:"Preparation sets default zeroes/nulls; Initialization executes explicit assignments.",hint:"Assigned default value 0; the explicit value 50 is assigned during Initialization.",level:"Intermediate",codeExample:"Preparation: count = 0; Initialization: count = 50;"},{question:"What is the purpose of the Bytecode Verifier in the Verification step?",shortAnswer:"To protect the host operating system and JVM from malicious or corrupted bytecode by ensuring that code does not violate type safety, overflow the operand stack, or perform illegal memory operations.",explanation:"Guarantees Java's core sandbox security model.",hint:"Ensures bytecode adheres to JVM safety and security constraints.",level:"Beginner",codeExample:"Verifies type safety, stack depths, and method access modifiers."}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Phase 2: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Linking Overview"}),": Verification, Preparation & Resolution"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Connecting classes into the runtime state: structural verification, memory allocation for static fields, and constant pool pointer resolution."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"Phase2LinkingOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JVM Architecture & ClassLoaders FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 010_003 Topic 3: Phase 2: Linking Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic3_phase2_linking_overview_note.txt"})}),e.jsx(a,{note:"Linking turns raw bytes into an executable part of the running JVM! Verification guarantees security; Preparation allocates static memory; Resolution connects symbolic references! — Sukanta Hui"})]})}export{y as default};
