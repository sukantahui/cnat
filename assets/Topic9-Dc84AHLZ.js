import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 9: Young Generation - Eden & Survivor Spaces (8:1:1 Ratio)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class YoungGenEdenSurvivorsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: YOUNG GENERATION (EDEN & SURVIVORS) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. YOUNG GENERATION MEMORY BREAKDOWN (Default 8:1:1 Ratio):");\r
        System.out.println("  - EDEN SPACE (80%)        : Where all new objects (via 'new') are initially allocated.");\r
        System.out.println("  - SURVIVOR 0 (From - 10%) : Holds objects that survived 1+ Minor GCs.");\r
        System.out.println("  - SURVIVOR 1 (To - 10%)   : Target destination for survivors in the next Minor GC.\\n");\r
\r
        System.out.println(">>> 2. HOW MINOR GC COPYING WORKS:");\r
        System.out.println("  Step 1: Eden fills up -> Triggers Minor GC (Stop-The-World pause, ~1-5ms).");\r
        System.out.println("  Step 2: Live objects in Eden and Survivor-From are copied to Survivor-To.");\r
        System.out.println("  Step 3: Object ages are incremented by 1 (Tenuring Age counter).");\r
        System.out.println("  Step 4: Eden and Survivor-From are wiped 100% clean.");\r
        System.out.println("  Step 5: Survivor spaces swap roles (From becomes To, To becomes From)!\\n");\r
\r
        // Simulating rapid short-lived allocations in Eden:\r
        List<byte[]> shortLivedObjects = new ArrayList<>();\r
        for (int i = 0; i < 50; i++) {\r
            shortLivedObjects.add(new byte[1024 * 64]); // 64 KB chunks in Eden\r
        }\r
        System.out.println("3. Allocated 50 short-lived objects in Eden space successfully.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 9: Young Gen (Eden & Survivors)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. YOUNG GENERATION STRUCTURE:\r
   - Eden Space       : Primary allocation area.\r
   - Survivor 0 (S0)  : 'FromSpace'\r
   - Survivor 1 (S1)  : 'ToSpace'\r
   - Default Ratio    : '-XX:SurvivorRatio=8' (Eden is 8x the size of S0/S1).\r
\r
2. COPYING GC ALGORITHM:\r
   - At any given time, one Survivor space is completely empty ('ToSpace').\r
   - Live objects from Eden and 'FromSpace' are copied contiguously into 'ToSpace'.\r
   - Eliminates memory fragmentation without expensive compaction!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is one of the two Survivor spaces always completely empty after a Minor GC completes?",shortAnswer:"Because the Minor GC copying algorithm copies all surviving objects from Eden and the active 'From' survivor space into the empty 'To' survivor space, completely erasing the old spaces and then swapping their roles.",explanation:"Ensures zero memory fragmentation in the Young Generation.",hint:"Because all live objects are copied into the target Survivor space.",level:"Intermediate",codeExample:"Eden + S0 (From) → Copied to S1 (To) → S0 becomes empty"},{question:"What JVM flag configures the size ratio between Eden and Survivor spaces?",shortAnswer:"-XX:SurvivorRatio=<ratio>, where default is 8 (Eden = 8/10, S0 = 1/10, S1 = 1/10 of Young Gen).",explanation:"Allows tuning the capacity of Eden vs Survivor spaces.",hint:"-XX:SurvivorRatio",level:"Intermediate",codeExample:"java -XX:SurvivorRatio=8 -jar app.jar"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Young Generation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Eden & Survivor Spaces (8:1:1 Ratio)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Infant object lifecycle: Eden space allocations, Minor GC copying algorithm, and swapping between From (S0) and To (S1) survivor spaces."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"YoungGenEdenSurvivorsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JVM Memory Areas FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 010_004 Topic 9: Young Gen: Eden & Survivors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic9_young_gen_eden_survivors_note.txt"})}),e.jsx(o,{note:"Newly created objects are ALWAYS born in Eden! During a Minor GC, surviving objects are copied to the empty Survivor space, and Eden is wiped clean in one ultra-fast swipe! — Sukanta Hui"})]})}export{x as default};
