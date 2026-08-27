import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 10: G1 Garbage Collector - Region-Based Heap & Pause-Time Target (Java 9+ Default)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class G1GarbageCollectorDefaultDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: G1 GARBAGE COLLECTOR (JAVA 9+ DEFAULT) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HOW G1 GC REVOLUTIONIZED HEAP LAYOUT:");\r
        System.out.println("  1. No Contiguous Generations : Heap is split into ~2,048 equal-sized 'Regions' (1MB to 32MB each).");\r
        System.out.println("  2. Dynamic Region Roles      : A region can dynamically be Eden (E), Survivor (S), Old (O), or Humongous (H).");\r
        System.out.println("  3. 'Garbage-First' Heuristic : G1 tracks the amount of reclaimable garbage in each region.");\r
        System.out.println("  4. Mixed Collection          : Collects all Young regions + selected Old regions with the highest garbage payoff!\\n");\r
\r
        System.out.println(">>> G1 GC TUNING FLAGS:");\r
        System.out.println("  - Enabled by Default (Java 9+) : -XX:+UseG1GC");\r
        System.out.println("  - Target Max Pause Time        : -XX:MaxGCPauseMillis=200 (Default: 200ms soft goal)");\r
        System.out.println("  - Initiating Heap Occupancy    : -XX:InitiatingHeapOccupancyPercent=45 (Starts concurrent cycle at 45% heap)");\r
        System.out.println("  - Region Size                  : -XX:G1HeapRegionSize=16m");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 10: G1 Garbage Collector (Java 9+ Default)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS G1 GC (Garbage-First):\r
   - Default collector starting with Java 9 LTS through modern Java 21+.\r
   - Designed for multi-gigabyte heaps (4GB to 64GB+).\r
   - Divides heap into ~2,048 equal regions.\r
\r
2. KEY ADVANTAGES:\r
   - Predictable pause times: G1 adjusts Young Gen size dynamically to meet '-XX:MaxGCPauseMillis'.\r
   - Eliminates Full GCs through incremental concurrent mixed collections.\r
   - Handles Humongous Objects (objects &gt; 50% region size) in dedicated H-regions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"How does G1 GC decide which Old Generation regions to collect during a Mixed Collection?",shortAnswer:"G1 uses a 'Garbage-First' heuristic. It calculates the efficiency payoff (most reclaimable garbage with the least time required) and collects the dirtiest regions first to stay within the user-configured MaxGCPauseMillis goal.",explanation:"Maximizes memory reclamation while respecting pause budgets.",hint:"Selects regions containing the highest proportion of garbage first.",level:"Intermediate",codeExample:"-XX:MaxGCPauseMillis=200 (Soft pause-time goal)"},{question:"What is a 'Humongous Region' in G1 GC terminology?",shortAnswer:"A contiguous sequence of one or more G1 regions used to store a single object whose size exceeds 50% of the standard G1 heap region size (e.g. huge byte arrays).",explanation:"Allocated directly into Old generation memory space.",hint:"Stores single objects larger than 50% of a G1 region.",level:"Advanced",codeExample:"Object size > 50% region -> Allocated in Humongous Region."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The G1 Garbage Collector: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Region-Based Heap & MaxGCPauseMillis"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The modern default since Java 9: non-contiguous 1–32MB regions, incremental mixed collections, Humongous regions, and pause-time goal tuning."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"G1GarbageCollectorDefaultDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Garbage Collection FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 010_005 Topic 10: G1 Garbage Collector (Default)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic10_g1_garbage_collector_default_note.txt"})}),e.jsx(o,{note:"G1 GC divides the entire heap into 2,048 equal regions (1MB to 32MB each)! Instead of cleaning everything, G1 picks the regions with the MOST garbage first ('Garbage-First') to meet your pause target! — Sukanta Hui"})]})}export{x as default};
