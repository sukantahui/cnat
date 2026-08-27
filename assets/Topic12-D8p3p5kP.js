import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 12: Deep Dive into Thread Stack Frames - LVT, Operand Stack & Frame Data\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class ThreadStackFramesOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: THREAD STACK FRAMES DECONSTRUCTED - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 INTERNAL SECTIONS OF A JVM STACK FRAME:");\r
        System.out.println("  ┌─────────────────────────────────────────────────────────────┐");\r
        System.out.println("  │                      JVM STACK FRAME                        │");\r
        System.out.println("  ├─────────────────────────────────────────────────────────────┤");\r
        System.out.println("  │ 1. LOCAL VARIABLE TABLE (LVT)                               │");\r
        System.out.println("  │    - Stores parameters (slot 0 = 'this') & local variables. │");\r
        System.out.println("  │    - 32-bit types use 1 slot; 64-bit (long/double) use 2.   │");\r
        System.out.println("  ├─────────────────────────────────────────────────────────────┤");\r
        System.out.println("  │ 2. OPERAND STACK (LIFO Evaluation Workspace)                │");\r
        System.out.println("  │    - Pushes operands, performs arithmetic (iadd), pops.     │");\r
        System.out.println("  ├─────────────────────────────────────────────────────────────┤");\r
        System.out.println("  │ 3. FRAME DATA                                               │");\r
        System.out.println("  │    - Runtime Constant Pool reference (#index).              │");\r
        System.out.println("  │    - Normal method return completion info.                  │");\r
        System.out.println("  │    - Exception dispatch handler table.                      │");\r
        System.out.println("  └─────────────────────────────────────────────────────────────┘");\r
\r
        // Executing arithmetic to demonstrate stack frame evaluation:\r
        int result = calculateCourseFee(4000, 500);\r
        System.out.println("\\n>>> Method execution completed with result: ₹" + result);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static int calculateCourseFee(int baseFee, int labFee) {\r
        // LVT: Slot 0 = baseFee, Slot 1 = labFee, Slot 2 = total\r
        // Operand Stack: iload_0 (4000) -> iload_1 (500) -> iadd (4500) -> istore_2\r
        int total = baseFee + labFee;\r
        return total;\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 12: Thread Stack Frames Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A STACK FRAME:\r
   - A data structure created and allocated on the Java Thread Stack for every method invocation.\r
   - Size of LVT and maximum Operand Stack depth are computed at compile time by 'javac'.\r
\r
2. THE 3 FRAME COMPONENTS:\r
   1. Local Variable Table (LVT) : Stores method arguments and local variables.\r
   2. Operand Stack              : LIFO workspace where opcodes push and pop operands.\r
   3. Frame Data                 : Dynamic constant pool linking, return address, exception table.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"When is the memory size and maximum operand stack depth of a JVM Stack Frame determined?",shortAnswer:"At compile time by javac. The compiler calculates the exact number of local variable slots (max_locals) and the maximum operand stack depth (max_stack) and encodes them directly into the method's bytecode Code attribute.",explanation:"Zero dynamic resizing of individual stack frames occurs at runtime.",hint:"Determined at compile time by javac and stored in the Code attribute.",level:"Intermediate",codeExample:"Code attribute: stack=2, locals=3, args_size=2"},{question:"What is stored in Slot 0 of the Local Variable Table for non-static instance methods?",shortAnswer:"The 'this' reference pointing to the current object instance. For static methods, Slot 0 stores the first method parameter instead.",explanation:"Explains why static methods have no access to 'this'.",hint:"The 'this' reference to the current heap instance.",level:"Beginner",codeExample:"Instance method: Slot 0 = this; Static method: Slot 0 = first arg"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Thread Stack Frames: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"LVT, Operand Stack & Frame Data"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dissecting a Stack Frame: the 3 internal components that execute every Java method invocation with zero Garbage Collection overhead."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ThreadStackFramesOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"JVM Memory Areas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 010_004 Topic 12: Thread Stack Frames Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic12_thread_stack_frames_overview_note.txt"})}),e.jsx(n,{note:"Every Stack Frame consists of 3 distinct sections: 1) Local Variable Table (stores method parameters and local vars), 2) Operand Stack (push/pop workspace for arithmetic), and 3) Frame Data (return addresses and constant pool pointers)! — Sukanta Hui"})]})}export{S as default};
