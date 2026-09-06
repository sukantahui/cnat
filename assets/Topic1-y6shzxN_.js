import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 1: The 3 Major Phases of the ClassLoader Subsystem\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
public class ThreeClassLoaderPhasesDemo {\r
\r
    public static class PhaseLifecycleTracker {\r
        // Preparation phase sets count = 0 (default).\r
        // Initialization phase assigns count = 100 and executes SIB!\r
        public static int count = 100;\r
\r
        static {\r
            System.out.println("   ⚙️ [PHASE 3: INITIALIZATION]: Static Initializer Block (SIB) executed!");\r
            System.out.println("   ⚙️ [PHASE 3]: count initialized to: " + count);\r
        }\r
    }\r
\r
    public static void main(String[] args) throws ClassNotFoundException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE 3 CLASSLOADER PHASES - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. TRIGGERING CLASS LOADING WITHOUT INITIALIZATION (initialize = false):");\r
        // Class.forName with initialize = false only runs Phase 1 (Loading) and Phase 2 (Linking):\r
        Class<?> clazz = Class.forName(\r
            "com.coderaccotax.javatutorial.jvm.ThreeClassLoaderPhasesDemo$PhaseLifecycleTracker",\r
            false, // Do NOT initialize yet!\r
            ThreeClassLoaderPhasesDemo.class.getClassLoader()\r
        );\r
        System.out.println("  - Phase 1 & 2 completed: Class object created in Metaspace: " + clazz.getSimpleName());\r
        System.out.println("  - Notice that Static Initializer Block has NOT executed yet!\\n");\r
\r
        System.out.println(">>> 2. TRIGGERING PHASE 3 (INITIALIZATION) via First Active Use:");\r
        // Accessing static field count triggers Phase 3:\r
        int value = PhaseLifecycleTracker.count;\r
        System.out.println("  - Active use triggered initialization. Final static value: " + value);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 1: The 3 ClassLoader Phases\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 3 LIFECYCLE PHASES OF CLASS LOADING:\r
   1. LOADING:\r
      - Reads binary data of the class from file / network / jar.\r
      - Creates a 'java.lang.Class' instance in Metaspace.\r
   2. LINKING:\r
      - Verification : Checks binary format integrity, stack maps, and security.\r
      - Preparation  : Allocates memory for static fields and initializes to default values (0, null).\r
      - Resolution   : Replaces symbolic constant pool references with direct memory pointers.\r
   3. INITIALIZATION:\r
      - Executes static variable assignments and Static Initializer Blocks (SIBs) in order.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What are the 3 sub-steps of the Linking phase in the ClassLoader subsystem?",shortAnswer:"1. Verification (ensuring bytecode adheres to JVM constraints), 2. Preparation (allocating memory for static fields and assigning default values like 0/null), and 3. Resolution (replacing symbolic references with direct memory addresses).",explanation:"Standard JVM Linking specification.",hint:"Verification, Preparation, Resolution.",level:"Intermediate",codeExample:"Linking = Verify → Prepare → Resolve"},{question:"What triggers Phase 3 (Initialization) of a class?",shortAnswer:"The first active use of the class, such as instantiating with 'new', accessing a static field (non-constant), calling a static method, or using Class.forName(name, true, loader).",explanation:"Passive uses (like referencing static final compile-time constants) do not trigger initialization.",hint:"First active use: instantiation, static method call, or non-constant static field access.",level:"Intermediate",codeExample:"MyClass.staticMethod(); // Triggers initialization"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The 3 Major Phases of the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ClassLoader Subsystem"}),": Loading, Linking & Initialization"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Step-by-step lifecycle: from raw disk .class file to a fully prepared, initialized Class object ready for instance allocation."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ThreeClassLoaderPhasesDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"JVM Architecture & ClassLoaders FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:r,title:"Module 010_003 Topic 1: The 3 ClassLoader Phases",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic1_three_classloader_phases_note.txt"})}),e.jsx(n,{note:"A class is NOT simply loaded and executed! It goes through 3 rigorous phases: 1) Loading (bytes to Class object), 2) Linking (Verify, Prepare, Resolve), and 3) Initialization (Static blocks and static field assignments)! — Sukanta Hui"})]})}export{f as default};
