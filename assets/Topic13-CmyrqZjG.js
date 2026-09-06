import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as o}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const n=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 13: Local Variable Table (LVT) - Slot Indexing & Slot Reuse\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class LocalVariableTableLvtDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: LOCAL VARIABLE TABLE (LVT) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        LocalVariableTableLvtDemo demo = new LocalVariableTableLvtDemo();\r
        demo.demonstrateSlots("Swadeep Paul", 101, 94.5);\r
\r
        System.out.println("\\n>>> LVT SLOT REUSE MECHANISM:");\r
        System.out.println("  - When a block '{ int temp = 10; }' ends, slot allocated to 'temp' is freed.");\r
        System.out.println("  - Subsequent local variables in the same method reuse the exact same slot index!");\r
        System.out.println("  - Saves stack frame memory consumption!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    // Inspecting Slot Layout:\r
    // Slot 0: this (instance reference)\r
    // Slot 1: studentName (Object reference - 1 slot)\r
    // Slot 2: studentId (int - 1 slot)\r
    // Slot 3 & 4: score (double - 64-bit takes 2 slots!)\r
    public void demonstrateSlots(String studentName, int studentId, double score) {\r
        System.out.println(">>> 1. LVT SLOTS ALLOCATED FOR THIS METHOD:");\r
        System.out.println("  - Slot 0 : 'this' instance pointer (" + this.getClass().getSimpleName() + ")");\r
        System.out.println("  - Slot 1 : studentName = '" + studentName + "'");\r
        System.out.println("  - Slot 2 : studentId   = " + studentId);\r
        System.out.println("  - Slot 3/4: score      = " + score + " (64-bit double occupies 2 slots)");\r
\r
        {\r
            // Block scoped variable:\r
            int tempTax = 500;\r
            System.out.println("  - Slot 5 : tempTax = " + tempTax + " (In active block scope)");\r
        } // tempTax goes out of scope here!\r
\r
        // Slot 5 is REUSED by discountCode:\r
        int discountCode = 9942;\r
        System.out.println("  - Slot 5 [REUSED] : discountCode = " + discountCode);\r
    }\r
}\r
`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 13: Local Variable Table (LVT)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LVT SLOT ALLOCATION RULES:\r
   - Slot unit: 32-bit word.\r
   - Types using 1 Slot: 'boolean', 'byte', 'char', 'short', 'int', 'float', Reference pointers.\r
   - Types using 2 Slots: 'long', 'double' (64-bit quantities).\r
\r
2. SLOT REUSE (Memory Optimization):\r
   - 'javac' assigns slot indices using lifetime analysis.\r
   - If variable A's scope finishes before variable B is declared, B reuses A's slot index.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"How many slots in the Local Variable Table are occupied by a 64-bit long or double primitive?",shortAnswer:"Two consecutive 32-bit slots (e.g. slot n and slot n+1).",explanation:"All 64-bit primitive types occupy two slot positions in the LVT.",hint:"Two consecutive slots.",level:"Beginner",codeExample:"double d = 4.5; // Takes 2 LVT slots"},{question:"How does javac optimize Local Variable Table size using slot reuse?",shortAnswer:"When a local variable goes out of scope (e.g. at the end of a block {...}), its slot index is made available and reused by subsequent local variables declared later in the same method.",explanation:"Reduces total stack frame memory footprint.",hint:"Reuses slot indices when previous variables exit their scope blocks.",level:"Intermediate",codeExample:"{ int a = 1; } int b = 2; // b reuses slot of a"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Local Variable Table: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Slot Indexing & Variable Scopes"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Inside the Stack Frame: how method arguments and local variables occupy 32-bit slots, slot reuse for out-of-scope variables, and 64-bit long/double slots."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"LocalVariableTableLvtDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{title:"JVM Memory Areas FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:r,title:"Module 010_004 Topic 13: Local Variable Table (LVT)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic13_local_variable_table_lvt_note.txt"})}),e.jsx(s,{note:"The Local Variable Table is an array of 32-bit slots! Primitive types like int and references take 1 slot, while long and double take 2 consecutive slots! And when a variable goes out of its curly-brace scope, javac reuses that slot! — Sukanta Hui"})]})}export{S as default};
