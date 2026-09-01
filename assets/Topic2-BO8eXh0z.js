import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const n=`/**\r
 * Java Core Tutorial - Module 007_002: List Implementations & ArrayList Internals\r
 * Topic 2: ArrayList Growth Formula: oldCapacity + (oldCapacity >> 1) = 1.5x Mechanics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class ArrayListGrowthFormulaCalculationDemo {\r
\r
    // Simulating JDK ArrayList.grow(int minCapacity) bitwise growth calculation:\r
    public static int calculateNewCapacity(int oldCapacity) {\r
        // Bitwise right-shift (>> 1) is equivalent to integer division by 2:\r
        return oldCapacity + (oldCapacity >> 1);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: ArrayList GROWTH FORMULA (1.5x) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> STEP-BY-STEP CAPACITY EXPANSION PROGRESSION:");\r
        int currentCapacity = 10; // Default capacity after first add\r
        System.out.printf("  Initial Default Capacity : %d%n", currentCapacity);\r
\r
        for (int step = 1; step <= 8; step++) {\r
            int nextCapacity = calculateNewCapacity(currentCapacity);\r
            System.out.printf("  Step %d Expansion : %4d -> %-4d (Formula: %d + (%d >> 1) = %d)%n",\r
                    step, currentCapacity, nextCapacity, currentCapacity, currentCapacity, nextCapacity);\r
            currentCapacity = nextCapacity;\r
        }\r
\r
        System.out.println("\\n>>> WHY JAVA USES A 1.5x GROWTH FACTOR (AND BITWISE >> 1):");\r
        System.out.println("  1. 1.5x vs 2.0x Memory Recycling: A 1.5x growth factor allows previously deallocated array memory blocks to be reused by future allocations in modern garbage collectors!");\r
        System.out.println("  2. Bitwise Right-Shift: 'oldCapacity >> 1' executes in 1 single CPU clock cycle, avoiding expensive division instructions.");\r
        System.out.println("  3. Amortized O(1) Append: Because resizing occurs exponentially less frequently as size grows, appends remain O(1) on average.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_002: List Implementations & ArrayList Internals\r
Topic 2: ArrayList Growth Formula\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GROWTH FORMULA:\r
   - 'oldCapacity + (oldCapacity >> 1)' = 1.5x growth.\r
   - Bitwise right-shift ('>> 1') = division by 2 in 1 CPU cycle.\r
   - Sequence: 10 → 15 → 22 → 33 → 49 → 73 → 109.\r
   - Enables memory block reuse in JVM garbage collectors.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the exact bitwise growth formula used by java.util.ArrayList in modern JDKs when capacity is exceeded?",shortAnswer:"The exact formula in the JDK source code ('ArrayList.java') is: 'int newCapacity = oldCapacity + (oldCapacity >> 1);'. This grows the capacity by approximately 50% (1.5x) using a bitwise right-shift for maximum CPU execution speed. For example, 10 grows to 15, then 22, 33, 49, 73, and so on.",explanation:"Standard JDK ArrayList internal growth algorithm.",hint:"'oldCapacity + (oldCapacity >> 1)' increases capacity by 1.5x using bitwise shifting.",level:"Intermediate",codeExample:"int newCapacity = oldCapacity + (oldCapacity >> 1); // 10 → 15 → 22 → 33"}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_002 · Topic 2"}),t.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Growth Formula (1.5x)"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["ArrayList Growth Formula: ",t.jsx("code",{className:"text-amber-400 font-mono",children:"oldCapacity + (oldCapacity >> 1)"})," (1.5x)"]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dissect bitwise growth mathematics: calculating ArrayList capacity expansions, analyzing bitwise right-shift CPU optimization, and understanding JVM memory block recycling."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:n,title:"ArrayListGrowthFormulaCalculationDemo.java",highlightLines:[7,10,11,19,23,24,25]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Growth Formula FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:s,title:"Module 007_002 Topic 2: ArrayList Growth Formula",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_002_topic2_arraylist_growth_formula_note.txt"})}),t.jsx(i,{note:"Why does Java multiply by 1.5 instead of 2.0? Because 1.5x allows the JVM garbage collector to reuse previously discarded memory chunks! Plus, '>> 1' executes in a single CPU cycle! — Sukanta Hui"})]})}export{h as default};
