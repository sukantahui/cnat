import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 3: The Weak Generational Hypothesis - Infant Mortality & Young GC\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class WeakGenerationalHypothesisDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: WEAK GENERATIONAL HYPOTHESIS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. SIMULATING HIGH-THROUGHPUT TRANSIENT ALLOCATIONS (Infant Mortality):");\r
        long start = System.currentTimeMillis();\r
\r
        // 1 Million short-lived transient objects created in a loop:\r
        long totalCalculatedScore = 0;\r
        for (int i = 0; i < 1_000_000; i++) {\r
            // These transient ScoreRecord instances live for nanoseconds and die immediately in Eden:\r
            ScoreRecord temp = new ScoreRecord(i, (i % 100) + 0.5);\r
            totalCalculatedScore += (long) temp.score();\r
        }\r
\r
        long duration = System.currentTimeMillis() - start;\r
        System.out.println("  - Allocated and processed 1,000,000 transient objects in: " + duration + " ms");\r
        System.out.println("  - Final Calculated Score: " + totalCalculatedScore + "\\n");\r
\r
        System.out.println(">>> WHY GENERATIONAL GC IS SO POWERFUL:");\r
        System.out.println("  1. 99.9% of the 1,000,000 ScoreRecord objects died inside Eden space.");\r
        System.out.println("  2. Minor GC only visited the tiny fraction of LIVE objects to copy them.");\r
        System.out.println("  3. Dead objects have ZERO scanning overhead in a copying collector!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    record ScoreRecord(int id, double score) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 3: Weak Generational Hypothesis\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE TENETS OF THE HYPOTHESIS:\r
   1. The vast majority of allocated objects die very shortly after allocation (high infant mortality).\r
   2. Objects that survive initial collections tend to live for a long time.\r
   3. References from Old Generation objects to Young Generation objects are rare.\r
\r
2. WHY IT REVOLUTIONIZED GC DESIGN:\r
   - In a Copying Collector (Eden → Survivor), the cost of GC is proportional ONLY to the number\r
     of LIVE objects, not the size of memory or number of dead objects!\r
   - Since 98% of objects are dead, Minor GC completes almost instantaneously!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is the performance cost of a Minor GC proportional to the number of live objects rather than the number of dead objects?",shortAnswer:"Because Minor GC uses a Copying algorithm. It only locates and copies surviving live objects to the target Survivor space; all remaining dead memory in Eden is wiped clean in a single pointer reset without iterating over dead objects.",explanation:"Makes collection of high-mortality young spaces extremely fast.",hint:"Cost depends only on copying live objects; dead memory is wiped in one operation.",level:"Intermediate",codeExample:"Live objects copied → Eden pointer reset to zero."},{question:"What proportion of objects in typical enterprise Java applications die in the Young Generation?",shortAnswer:"Empirical benchmarks show that between 95% and 99% of all instantiated objects die in the Young Generation before ever being promoted to the Old Generation.",explanation:"Validates the Weak Generational Hypothesis.",hint:"95% to 99% infant mortality rate.",level:"Beginner",codeExample:"98%+ objects die in Eden."}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Weak Generational Hypothesis: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Infant Mortality & Young GC Optimization"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The empirical foundation: analyzing object allocation lifespans, 98% infant mortality rates, and why generational collectors outperform monolithic heaps."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"WeakGenerationalHypothesisDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Garbage Collection FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 010_005 Topic 3: Weak Generational Hypothesis",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic3_weak_generational_hypothesis_note.txt"})}),e.jsx(r,{note:"Think about a web request: DTOs, JSON tokens, and iterators are created, used, and discarded within 2 milliseconds! Generational collectors capitalize on this: by cleaning only the Young Gen, they reclaim 98% of dead memory in 2 milliseconds! — Sukanta Hui"})]})}export{b as default};
