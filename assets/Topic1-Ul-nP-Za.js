import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 004_005: Propagation, Chaining & Best Practices\r
 * Topic 1: Stack Unwinding: Automatic Stack Frame Teardown & Finally Execution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class StackUnwindingLifecycleDemo {\r
\r
    public static void depthThree() {\r
        try {\r
            System.out.println("      [DEPTH 3] Allocated frame. Triggering failure...");\r
            throw new RuntimeException("Database timeout in Barrackpore terminal!");\r
        } finally {\r
            System.out.println("      [DEPTH 3 FINALLY] Stack frame 3 unwinding cleanup complete.");\r
        }\r
    }\r
\r
    public static void depthTwo() {\r
        try {\r
            System.out.println("    [DEPTH 2] Allocated frame. Calling depthThree...");\r
            depthThree();\r
        } finally {\r
            System.out.println("    [DEPTH 2 FINALLY] Stack frame 2 unwinding cleanup complete.");\r
        }\r
    }\r
\r
    public static void depthOne() {\r
        try {\r
            System.out.println("  [DEPTH 1] Allocated frame. Calling depthTwo...");\r
            depthTwo();\r
        } catch (RuntimeException e) {\r
            System.out.println("  [DEPTH 1 CATCH] Intercepted after all inner frames unwound: " + e.getMessage());\r
        } finally {\r
            System.out.println("  [DEPTH 1 FINALLY] Stack frame 1 cleanup complete.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: STACK UNWINDING LIFECYCLE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Initiating Multi-Level Stack Unwinding Trace:");\r
        depthOne();\r
\r
        System.out.println("\\n>>> THE STACK UNWINDING GUARANTEE:");\r
        System.out.println("  Even as each intermediate stack frame is violently dismantled,");\r
        System.out.println("  every method's 'finally' block is GUARANTEED to execute before its frame is discarded!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_005: Propagation, Chaining & Best Practices\r
Topic 1: Stack Unwinding\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STACK UNWINDING PROCESS:\r
   - Call stack allocates frames on invocation (Push).\r
   - Exception triggers rapid frame deallocation (Pop / Unwind).\r
   - Invariant: 'finally' block in every frame runs before frame destruction.\r
   - Preserves memory and lock safety.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is 'Stack Unwinding' and how does the JVM handle 'finally' blocks during the unwinding process?",shortAnswer:"'Stack Unwinding' is the process where the JVM pops stack frames off the thread call stack one by one during exception propagation. As each stack frame is dismantled, the JVM guarantees that any enclosing 'finally' block in that frame is executed before the frame is discarded.",explanation:"Guarantees resource integrity across all intermediate method layers.",hint:"The JVM pops stack frames one by one, executing each frame's finally block during teardown.",level:"Intermediate",codeExample:"// Frame3 (finally runs) → Frame2 (finally runs) → Frame1 (catch runs)"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_005 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Frame Dismantling"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Stack Unwinding: Automatic Stack Frame Teardown & Finally Guarantees"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Observe JVM call-stack mechanics: tracing how the JVM systematically deconstructs active stack frames and guarantees finally execution across all unwound layers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"StackUnwindingLifecycleDemo.java",highlightLines:[7,10,11,13,17,18,20,24,25,27,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Stack Unwinding FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 004_005 Topic 1: Stack Unwinding",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_005_topic1_stack_unwinding_note.txt"})}),e.jsx(r,{note:"Notice in the demo how Depth 3 finally runs, then Depth 2 finally runs, and then Depth 1 catch runs! Even during catastrophic unwinding, Java never forgets a single finally block! — Sukanta Hui"})]})}export{g as default};
