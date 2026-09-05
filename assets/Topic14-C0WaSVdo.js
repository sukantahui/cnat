import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 14: The Operand Stack - Bytecode Arithmetic & LIFO Evaluation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class OperandStackEvaluationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: THE OPERAND STACK - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> TRACING BYTECODE EVALUATION FOR: 'int result = addAndMultiply(10, 20);'");\r
        System.out.println("  Bytecode Sequence:");\r
        System.out.println("  1. bipush 10        -> [Operand Stack: 10]");\r
        System.out.println("  2. bipush 20        -> [Operand Stack: 10, 20]");\r
        System.out.println("  3. iadd             -> Pops 10 and 20, adds them -> [Operand Stack: 30]");\r
        System.out.println("  4. iconst_2         -> [Operand Stack: 30, 2]");\r
        System.out.println("  5. imul             -> Pops 30 and 2, multiplies -> [Operand Stack: 60]");\r
        System.out.println("  6. istore_1         -> Pops 60 and stores into LVT Slot 1 (result)!\\n");\r
\r
        int calculated = addAndMultiply(10, 20);\r
        System.out.println(">>> Verified Java Output: " + calculated);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static int addAndMultiply(int a, int b) {\r
        return (a + b) * 2;\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 14: The Operand Stack\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS THE OPERAND STACK:\r
   - A Last-In-First-Out (LIFO) stack of 32-bit words inside each Stack Frame.\r
   - Used by the Execution Engine as a scratchpad for arithmetic, logic operations,\r
     and staging method arguments before invoking methods.\r
\r
2. STACK-BASED VS REGISTER-BASED ARCHITECTURE:\r
   - Java uses a Stack-Based virtual machine model (portable, simple bytecode instruction set).\r
   - Android Dalvik/ART uses a Register-Based model (fewer total instructions, tailored for mobile ARM CPUs).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why did James Gosling and the Java team design the JVM as a stack-based architecture rather than register-based?",shortAnswer:"For hardware independence and portability. Different physical CPUs have varying numbers of physical registers (e.g. x86 vs ARM vs SPARC). A stack-based virtual machine is trivial to implement on any CPU architecture without register allocation complexity.",explanation:"Fundamental design philosophy behind 'Write Once, Run Anywhere'.",hint:"Ensures hardware portability across CPUs with different register architectures.",level:"Intermediate",codeExample:"Stack-based VM is 100% portable across all CPU architectures."},{question:"How does the 'iadd' bytecode instruction operate on the Operand Stack?",shortAnswer:"It pops the top two 32-bit integers from the Operand Stack, calculates their sum, and pushes the integer result back onto the top of the Operand Stack.",explanation:"Standard binary arithmetic operation in the JVM instruction set.",hint:"Pops top two integers, adds them, and pushes the sum.",level:"Beginner",codeExample:"iload_1 → iload_2 → iadd → istore_3"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Operand Stack: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Bytecode Arithmetic & Evaluation"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"LIFO evaluation engine: how JVM opcodes (iload, istore, iadd, invokevirtual) push, pop, and calculate values on the Operand Stack."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"OperandStackEvaluationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"JVM Memory Areas FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 010_004 Topic 14: The Operand Stack",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic14_operand_stack_evaluation_note.txt"})}),e.jsx(r,{note:"The JVM is a Stack-Based Virtual Machine, not register-based! All calculations like 10 + 20 push 10 and 20 onto the Operand Stack, execute iadd to pop and add them, and push 30 back! — Sukanta Hui"})]})}export{S as default};
