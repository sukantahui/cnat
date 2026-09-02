import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 9: Valid Use Cases for volatile: Flags & Double-Checked Locking Singleton\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
// 1. PRODUCTION-GRADE DOUBLE-CHECKED LOCKING SINGLETON (Safe Publication with volatile):\r
class CentralTaxRegistrySingleton {\r
\r
    // CRITICAL: MUST BE 'volatile' TO PREVENT PARTIAL INITIALIZATION REORDERING!\r
    private static volatile CentralTaxRegistrySingleton instance = null;\r
\r
    private final String hqLocation;\r
\r
    private CentralTaxRegistrySingleton() {\r
        this.hqLocation = "Barrackpore Central Hub, West Bengal";\r
        // Simulating heavy initialization\r
    }\r
\r
    public static CentralTaxRegistrySingleton getInstance() {\r
        // First check (no synchronization for 99.9% of calls!):\r
        if (instance == null) {\r
            synchronized (CentralTaxRegistrySingleton.class) {\r
                // Second check (inside lock to ensure only 1 thread instantiates):\r
                if (instance == null) {\r
                    // Without 'volatile', JVM can reorder 'instance = memory_address'\r
                    // BEFORE constructor finishes, exposing a half-initialized object to other threads!\r
                    instance = new CentralTaxRegistrySingleton();\r
                }\r
            }\r
        }\r
        return instance;\r
    }\r
\r
    public String getHqLocation() { return hqLocation; }\r
}\r
\r
public class ValidVolatileUseCasesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: VALID USE CASES FOR volatile & DCL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CentralTaxRegistrySingleton registry = CentralTaxRegistrySingleton.getInstance();\r
        System.out.println(">>> Singleton Initialized Safely via volatile DCL:");\r
        System.out.println("  Location: " + registry.getHqLocation());\r
\r
        System.out.println("\\n>>> THE 2 CANONICAL VALID USE CASES FOR volatile IN JAVA:");\r
        System.out.println("  1. Status / Shutdown Flags        : 'private volatile boolean running = true;' (Simple read/write flag with no compound mutations).");\r
        System.out.println("  2. Double-Checked Locking (DCL)  : 'private static volatile Singleton instance;' (Prevents out-of-order partial initialization).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 9: Valid volatile Use Cases & DCL\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. VALID USE CASES FOR VOLATILE:\r
   - 1. Simple Boolean Flags: 'volatile boolean shutdown = false'.\r
   - 2. Double-Checked Locking (DCL): 'private static volatile Singleton instance'.\r
   - Why DCL needs volatile: Prevents reordering of constructor execution and pointer assignment.\r
   - Eliminates 'Partially Initialized Object' concurrency security vulnerabilities.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why is the 'volatile' keyword mandatory on the singleton instance variable in the Double-Checked Locking (DCL) pattern?",shortAnswer:"In Java, 'instance = new Singleton()' is not an atomic operation. Under the hood, it executes in 3 steps: (1) allocate memory, (2) execute constructor, (3) assign memory reference to 'instance'. Without 'volatile', the compiler and CPU are allowed to reorder steps 2 and 3 ('allocate' → 'assign' → 'execute constructor'). If reordered, Thread B performing the first 'if (instance == null)' check may observe a non-null reference before Thread A's constructor has finished running, causing Thread B to use a corrupted, half-initialized object.",explanation:"Classic Double-Checked Locking broken algorithm in pre-Java 5 and its volatile resolution in JSR-133.",hint:"Prevents instruction reordering where the memory address is assigned before the constructor finishes, exposing half-initialized objects.",level:"Advanced",codeExample:"private static volatile Singleton instance; // Mandatory volatile in DCL"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"DCL & Flags"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Valid Use Cases for ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"volatile"}),": Status Flags & Double-Checked Locking"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct production singletons: analyzing the mechanics of Double-Checked Locking (DCL) and discovering why ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"volatile"})," is mandatory to prevent partially-initialized object exposures."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"ValidVolatileUseCasesDemo.java",highlightLines:[7,10,11,20,21,22,25,26,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"volatile Use Cases FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 008_006 Topic 9: Valid volatile Use Cases & DCL",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic9_valid_volatile_use_cases_note.txt"})}),e.jsx(i,{note:"If you ever write a Double-Checked Locking singleton without the word 'volatile', your code has a hidden landmine! Without volatile, another thread can read an object before its constructor has finished running! Always make your DCL instance volatile! — Sukanta Hui"})]})}export{x as default};
