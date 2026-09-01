import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 15: Frame Data - Constant Pool Resolution & Exception Dispatch Tables\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class FrameDataExceptionDispatchDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: FRAME DATA & EXCEPTION DISPATCH - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 RESPONSIBILITIES OF FRAME DATA IN A STACK FRAME:");\r
        System.out.println("  1. DYNAMIC LINKING REFERENCE : Pointer to the Runtime Constant Pool in Metaspace (#index resolution).");\r
        System.out.println("  2. NORMAL RETURN COMPLETION  : Restores previous frame's PC register and pushes return value to caller's operand stack.");\r
        System.out.println("  3. EXCEPTION DISPATCH TABLE  : Table mapping [start_pc, end_pc, handler_pc, catch_type] to handle try-catch blocks!\\n");\r
\r
        // Executing try-catch to demonstrate Exception Table handling:\r
        int result = safeFeeCalculation(4500, 0);\r
        System.out.println(">>> Safe Exception Recovery Result: ₹" + result);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static int safeFeeCalculation(int amount, int discountDivisor) {\r
        try {\r
            return amount / discountDivisor; // Throws ArithmeticException\r
        } catch (ArithmeticException ex) {\r
            System.out.println("   [EXCEPTION TABLE MATCHED]: Caught Division by Zero, fallback applied!");\r
            return amount; // Default fallback\r
        }\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 15: Frame Data & Exception Dispatch\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT RESIDES IN FRAME DATA:\r
   - Dynamic Linking Pointer: Points to the Runtime Constant Pool for resolving symbolic names.\r
   - Normal Return Completion: Restores caller stack frame and passes return value.\r
   - Exception Table: Stores ranges of bytecodes guarded by 'try-catch' blocks.\r
\r
2. EXCEPTION TABLE STRUCTURE IN BYTECODE:\r
   - 'from'    : Bytecode offset where try block starts.\r
   - 'to'      : Bytecode offset where try block ends.\r
   - 'target'  : Bytecode offset of the catch handler.\r
   - 'type'    : Class of exception caught (e.g. 'ArithmeticException').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How does the JVM locate the appropriate catch block when an exception is thrown inside a method?",shortAnswer:"The JVM inspects the method's Exception Table stored in Frame Data, matching the current Program Counter (PC) register within the [from, to] bytecode offset range and comparing the thrown exception type against the catch type.",explanation:"If matched, PC jumps directly to the handler offset; if unmatched, the frame pops and the exception propagates.",hint:"Matches current PC against the [from, to] ranges in the Exception Table.",level:"Advanced",codeExample:"Exception table: from=0, to=4, target=7, type=java/lang/ArithmeticException"},{question:"What is the role of Dynamic Linking in the Frame Data section?",shortAnswer:"It holds a reference to the Runtime Constant Pool for the current class to translate symbolic method and field references into direct memory references at runtime.",explanation:"Enables late binding and polymorphism.",hint:"Points to the Runtime Constant Pool to resolve symbolic references.",level:"Intermediate",codeExample:"Translates symbolic #12 into direct vtable method address."}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Frame Data: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Constant Pool Resolution & Exception Dispatch"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Completing the stack frame: runtime constant pool reference resolution, normal method return completion, and the exception dispatch handler table."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"FrameDataExceptionDispatchDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JVM Memory Areas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 010_004 Topic 15: Frame Data & Exception Dispatch",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic15_frame_data_exception_dispatch_note.txt"})}),e.jsx(r,{note:"When an exception is thrown, the JVM checks the Frame Data Exception Table! If a catch block matches, it jumps to that handler; if not, it pops the frame and passes the exception down to the caller! — Sukanta Hui"})]})}export{f as default};
