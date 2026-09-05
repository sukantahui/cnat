import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 18: Shortest Path to GC Roots - Finding the Offending Pointer\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class ShortestPathGcRootsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 18: SHORTEST PATH TO GC ROOTS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> STEP-BY-STEP WORKFLOW IN ECLIPSE MAT:");\r
        System.out.println("  1. Right-click the leaked instance in Histogram or Dominator Tree.");\r
        System.out.println("  2. Select: 'Path to GC Roots' -> 'exclude all phantom/weak/soft references'.");\r
        System.out.println("  3. Examine the resulting tree of strong pointers:\\n");\r
\r
        System.out.println(">>> SAMPLE PATH TO GC ROOT TRACE:");\r
        System.out.println("  [GC ROOT] Java Thread 'http-nio-8080-exec-1' (Local variable: requestContext)");\r
        System.out.println("    └── com.coderaccotax...UserSessionContext (field: 'pendingOrders')");\r
        System.out.println("          └── java.util.ArrayList (field: 'elementData')");\r
        System.out.println("                └── Object[14] -> com.coderaccotax...StudentRecord (LEAKED OBJECT!)\\n");\r
\r
        System.out.println(">>> RESOLUTION:");\r
        System.out.println("  - Offending field identified: UserSessionContext.pendingOrders.");\r
        System.out.println("  - Fix: Clear 'pendingOrders' when request finishes!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 18: Shortest Path to GC Roots\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY EXCLUDE WEAK/SOFT REFERENCES:\r
   - Weak and Soft references do not prevent Garbage Collection when memory is tight.\r
   - Excluding them isolates the STRONG references that are actively keeping the object pinned in memory.\r
\r
2. FORENSIC VALUE:\r
   - Tells you the EXACT field name, object instance, and class holding the reference.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why is it critical to select 'exclude all phantom/weak/soft references' when finding the Path to GC Roots in MAT?",shortAnswer:"Because Weak, Soft, and Phantom references do not prevent objects from being garbage collected when memory is needed. Filtering them out isolates the strong reference chains that are actually causing the memory leak.",explanation:"Eliminates false leads from cache mechanisms.",hint:"Isolates strong references that actually prevent GC from freeing memory.",level:"Intermediate",codeExample:"MAT → Path to GC Roots → Exclude all phantom/weak/soft references"},{question:"What information does the Path to GC Roots tree reveal about a leaked object?",shortAnswer:"It displays the exact chain of holding references, including the GC Root type (Thread Stack, Static field, JNI), the enclosing classes, the exact field names, and array index positions linking the root to the target object.",explanation:"Provides the exact code path requiring refactoring or nullification.",hint:"Shows GC Root type, class names, field names, and reference chain.",level:"Beginner",codeExample:"GC Root (Thread) → Class A (field b) → Class B (field c) → Leaked Object"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 18"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Shortest Path to GC Roots: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Finding the Offending Pointer"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Pinpointing the crime scene: excluding Weak/Soft references to discover the exact field, class, or thread stack keeping a leaked object alive."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ShortestPathGcRootsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Memory Profiling & OOM FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 010_006 Topic 18: Shortest Path to GC Roots",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic18_shortest_path_gc_roots_note.txt"})}),e.jsx(r,{note:"Right-click any leaked object in MAT and select 'Path to GC Roots → Exclude all phantom/weak/soft references'! MAT will show you the exact chain of strong pointers from the GC Root down to the leaked object! — Sukanta Hui"})]})}export{f as default};
