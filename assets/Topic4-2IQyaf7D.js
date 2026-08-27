import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 4: Card Tables & Remembered Sets (RSet) - Cross-Generational Pointer Tracking\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class CardTablesRememberedSetsDemo {\r
\r
    public static class LongLivedCache {\r
        // Old Gen object holding a reference to a newly created Young Gen object:\r
        public Object youngStudentRef;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: CARD TABLES & REMEMBERED SETS (RSET) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        LongLivedCache oldGenCache = new LongLivedCache(); // Assume promoted to Old Gen\r
\r
        // Cross-generational pointer created (Old Gen object references Young Gen object):\r
        oldGenCache.youngStudentRef = new Student("Swadeep Paul");\r
\r
        System.out.println(">>> THE CROSS-GENERATIONAL PROBLEM:");\r
        System.out.println("  - Problem: During Minor GC, how does the collector know 'Swadeep Paul' in Eden is referenced by an Old Gen object without scanning the entire Old Generation?");\r
        System.out.println("  - Solution: THE CARD TABLE & WRITE BARRIER!\\n");\r
\r
        System.out.println(">>> HOW THE CARD TABLE WORKS:");\r
        System.out.println("  1. The Old Gen memory is divided into 512-byte blocks called 'Cards'.");\r
        System.out.println("  2. A Card Table byte array maps 1 byte to every 512-byte card.");\r
        System.out.println("  3. JIT compiler injects a 'Write Barrier' assembly instruction on field writes (old.field = young).");\r
        System.out.println("  4. The Write Barrier marks that 512-byte card as 'DIRTY' (0x01).");\r
        System.out.println("  5. During Minor GC, the JVM only scans DIRTY cards instead of the whole Old Gen!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    record Student(String name) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 4: Card Tables & Remembered Sets (RSet)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A CARD TABLE:\r
   - A byte array where each byte corresponds to a 512-byte region of the Old Generation heap.\r
   - Initialized to 0 (Clean).\r
\r
2. WRITE BARRIER MECHANISM:\r
   - Whenever an application thread mutates a reference ('oldObj.field = youngObj'), the JIT\r
     compiler automatically executes a microscopic write barrier:\r
     'CARD_TABLE[address >> 9] = 0;' (Marks the card dirty).\r
\r
3. MINOR GC SPEEDUP:\r
   - Minor GC scans only the dirty cards in the Card Table to discover cross-generational roots,\r
     avoiding a massive full Old Gen heap scan!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is a Card Table in the HotSpot JVM and what size memory region does each card represent?",shortAnswer:"A Card Table is a byte array in memory where each byte corresponds to a 512-byte chunk (card) of Old Generation heap memory, tracking which cards contain references pointing into the Young Generation.",explanation:"Standard 512-byte card size in HotSpot.",hint:"A byte array where 1 byte represents 512 bytes of Old Gen heap.",level:"Advanced",codeExample:"Card size = 512 bytes (2^9 bytes, indexed via address >> 9)"},{question:"What is a Write Barrier in the context of JVM Garbage Collection?",shortAnswer:"A tiny snippet of JIT-compiled machine instructions executed automatically whenever an object reference field is updated, responsible for marking the corresponding card dirty in the Card Table.",explanation:"Maintains cross-generational pointer tracking in real time.",hint:"A JIT-injected instruction that marks cards dirty on reference mutations.",level:"Intermediate",codeExample:"oldObj.field = newYoungObj; // Triggers JIT write barrier"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Card Tables & Remembered Sets (RSet): ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Cross-Generational Pointers"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Avoiding full Old Gen scans: how the JVM uses a Card Table byte array and Write Barriers to track Old-to-Young references efficiently."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"CardTablesRememberedSetsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Garbage Collection FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 010_005 Topic 4: Card Tables & Remembered Sets",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic4_card_tables_remembered_sets_note.txt"})}),e.jsx(a,{note:"If an Old Gen object points to a Young Gen object, how does Minor GC know without scanning the entire 16GB Old Gen? It uses a Card Table! The JVM marks a 512-byte card as dirty in nanoseconds using a Write Barrier! — Sukanta Hui"})]})}export{y as default};
