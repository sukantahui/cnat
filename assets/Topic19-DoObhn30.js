import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 19: Hands-On Forensic Lab - Diagnosing & Fixing a Real Multi-GB Leak (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
import java.util.concurrent.ConcurrentHashMap;\r
import java.util.Map;\r
\r
public class MemoryLeakForensicCapstoneDemo {\r
\r
    // Simulating Real-World Leak Fix:\r
    public static class ProductionStudentRegistryService {\r
\r
        // BUGGY VERSION: Unbounded map holding every transaction forever\r
        // private static final Map<String, Object> AUDIT_LOGS = new ConcurrentHashMap<>();\r
\r
        // FIXED VERSION: Bounded cache with explicit cleanup\r
        private final Map<String, Object> activeStudentSessions = new ConcurrentHashMap<>();\r
\r
        public void registerSession(String studentId, Object sessionData) {\r
            activeStudentSessions.put(studentId, sessionData);\r
            System.out.println("   [REGISTERED]: Session for student " + studentId);\r
        }\r
\r
        public void endSession(String studentId) {\r
            activeStudentSessions.remove(studentId); // Crucial fix: Remove on session logout!\r
            System.out.println("   [REMOVED]   : Session for student " + studentId + " cleared! ✅");\r
        }\r
\r
        public int getActiveCount() {\r
            return activeStudentSessions.size();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 19: HANDS-ON MEMORY FORENSIC CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ProductionStudentRegistryService service = new ProductionStudentRegistryService();\r
\r
        System.out.println(">>> 1. EXECUTING REGISTRATION LIFECYCLE:");\r
        service.registerSession("STU-101-SWADEEP", new byte[1024 * 100]);\r
        service.registerSession("STU-102-TUHINA", new byte[1024 * 100]);\r
        System.out.println("Active sessions count: " + service.getActiveCount());\r
\r
        System.out.println("\\n>>> 2. SESSION LOGOUT & MEMORY PURGE:");\r
        service.endSession("STU-101-SWADEEP");\r
        service.endSession("STU-102-TUHINA");\r
        System.out.println("Active sessions count after cleanup: " + service.getActiveCount());\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 010_006 COMPLETE: JVM PROFILING & OOM DIAGNOSIS MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 19: Memory Leak Forensic Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE COMPLETE 5-STEP PRODUCTION OOM TRIAGE RUNBOOK:\r
   - Step 1: Detect Alert & Capture Dump ('-XX:+HeapDumpOnOutOfMemoryError' or 'jcmd <pid> GC.heap_dump').\r
   - Step 2: Open Dump in Eclipse MAT & review 'Leak Suspects Report'.\r
   - Step 3: Check 'Dominator Tree' (sort by Retained Heap) to locate hoarding object.\r
   - Step 4: Trace 'Shortest Path to GC Roots' (excluding weak refs) to identify the leaking field.\r
   - Step 5: Implement code fix (bounded collection, explicit 'remove()', weak references, try-with-resources).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,a=[{question:"What are the 5 standard steps in the production JVM memory leak triage runbook?",shortAnswer:"1. Capture HPROF heap dump, 2. Open in Eclipse MAT and run Leak Suspects Report, 3. Inspect Dominator Tree sorted by Retained Heap, 4. Trace Shortest Path to GC Roots excluding weak references, 5. Apply the code fix (bounded cache/cleanup).",explanation:"Industry-standard root cause analysis workflow.",hint:"1. Capture dump, 2. Leak suspects, 3. Dominator tree, 4. Path to GC roots, 5. Fix code.",level:"Beginner",codeExample:"Dump → MAT → Dominator Tree → Path to GC Roots → Code Fix"},{question:"Why should session or transaction data always be cleared in a finally block or interceptor completion callback?",shortAnswer:"To guarantee cleanup even when unhandled runtime exceptions occur during request processing, ensuring that failed requests do not silently leak memory into long-lived maps or ThreadLocals.",explanation:"Essential for server-side resilience.",hint:"Guarantees cleanup even if runtime exceptions are thrown during processing.",level:"Intermediate",codeExample:"try { service.process(); } finally { service.cleanup(); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 19"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Hands-On Forensic Lab: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Diagnosing & Fixing a Real Multi-GB Leak"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"End-to-end memory engineering: reproducing an OutOfMemoryError, capturing HPROF dump, diagnosing root cause in MAT, and applying the permanent code fix."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"MemoryLeakForensicCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Memory Profiling & OOM FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 010_006 Topic 19: Memory Leak Forensic Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic19_memory_leak_forensic_capstone_note.txt"})}),e.jsx(o,{note:"Congratulations on mastering Module 6 of Segment 10! You have mastered the entire JVM profiling and memory forensics toolkit — jcmd, jstat, VisualVM, and Eclipse MAT! Next up: The JIT Compiler, HotSpot Optimizations & GraalVM! — Sukanta Hui"})]})}export{g as default};
