import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 10: Old Generation - Tenured Promotion & MaxTenuringThreshold\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class OldGenTenuringThresholdsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: OLD GENERATION & TENURING PROMOTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. OBJECT PROMOTION LIFECYCLE (EDEN -> SURVIVOR -> OLD GEN):");\r
        System.out.println("  - New Object Born (Eden)       : Age = 0");\r
        System.out.println("  - Survives Minor GC #1 (S0)    : Age = 1");\r
        System.out.println("  - Survives Minor GC #2 (S1)    : Age = 2");\r
        System.out.println("  - ... Survives Minor GC #15    : Age = 15 (Max Age!)\\n");\r
\r
        System.out.println(">>> 2. PROMOTION TRIGGER:");\r
        System.out.println("  - Once an object's age exceeds '-XX:MaxTenuringThreshold=15':");\r
        System.out.println("  - The object is PROMOTED into the OLD / TENURED GENERATION!\\n");\r
\r
        System.out.println(">>> 3. PREMATURE PROMOTION & DIRECT OLD GEN ALLOCATION:");\r
        System.out.println("  - Large Objects: If an object exceeds '-XX:PretenureSizeThreshold', it bypasses Eden and goes straight to Old Gen!");\r
        System.out.println("  - Dynamic Tenuring: If a Survivor space is over 50% full (TargetSurvivorRatio), younger objects are promoted early!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 10: Old Gen & Tenuring Thresholds\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS THE OLD (TENURED) GENERATION:\r
   - Holds long-lived objects that have survived multiple Minor GC cycles (singletons, long-lived caches, active sessions).\r
   - Cleaned during Major GC or Full GC (which takes significantly longer than Minor GC).\r
\r
2. KEY PROMOTION FLAGS:\r
   - '-XX:MaxTenuringThreshold=<age>' : Maximum age before promotion (default 15, max 15 because object header age is 4 bits).\r
   - '-XX:PretenureSizeThreshold=<bytes>' : Allocates huge arrays/objects directly into Old Gen to avoid churning Eden.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why is the maximum possible value for -XX:MaxTenuringThreshold capped at 15 in the HotSpot JVM?",shortAnswer:"Because the JVM object header (Mark Word) allocates exactly 4 bits to store the object age counter. The maximum value that can be represented with 4 bits is (2^4 - 1) = 15.",explanation:"Fundamental binary constraint of the 64-bit Mark Word format.",hint:"The object age is stored in a 4-bit field in the Mark Word header.",level:"Advanced",codeExample:"4 bits → 0000 (0) to 1111 (15)"},{question:"What is Premature Promotion in the JVM Heap?",shortAnswer:"A situation where short-lived objects are promoted into the Old Generation before dying, usually because the Survivor spaces are too small to hold active survivors, increasing Old Gen GC pressure and pause times.",explanation:"Tuned by increasing Young Gen / Survivor space sizes.",hint:"Short-lived objects promoted to Old Gen due to undersized Survivor spaces.",level:"Intermediate",codeExample:"Premature Promotion → Excessive Full GC pauses"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Old Generation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Tenured Objects & Promotion Thresholds"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Promoting senior objects: how objects move from Survivor to Old Gen after reaching MaxTenuringThreshold, and premature promotion hazards."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"OldGenTenuringThresholdsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Memory Areas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 010_004 Topic 10: Old Gen & Tenuring Thresholds",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic10_old_gen_tenuring_thresholds_note.txt"})}),e.jsx(o,{note:"Every time an object survives a Minor GC, its age counter increases by 1! Once it reaches MaxTenuringThreshold (default 15), it is promoted to the Old Generation! — Sukanta Hui"})]})}export{T as default};
