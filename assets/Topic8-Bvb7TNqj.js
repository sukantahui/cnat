import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 8: Comprehensive Flow of Control in try-catch-finally Under All Execution Scenarios\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class TryCatchFinallyAllBranchesDemo {\r
\r
    public static void testBranch(int scenario) {\r
        System.out.println("  [BRANCH START] Testing Scenario #" + scenario);\r
\r
        try {\r
            System.out.println("    1. Inside TRY");\r
            if (scenario == 2) throw new NumberFormatException("Format Error");\r
            if (scenario == 3) throw new NullPointerException("Unhandled NPE Error");\r
            System.out.println("    2. End of TRY (No Exception)");\r
        } catch (NumberFormatException e) {\r
            System.out.println("    3. Inside CATCH (Handled NumberFormatException)");\r
        } finally {\r
            System.out.println("    4. Inside FINALLY (Always Runs)");\r
        }\r
\r
        System.out.println("    5. After try-catch-finally (Normal Code)\\n");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: try-catch-finally EXECUTION BRANCHES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Scenario 1: NO Exception Thrown:");\r
        System.out.println("  Expected: 1 -> 2 -> 4 -> 5");\r
        testBranch(1);\r
\r
        System.out.println(">>> 2. Scenario 2: HANDLED Exception Thrown:");\r
        System.out.println("  Expected: 1 -> (Aborts 2) -> 3 -> 4 -> 5");\r
        testBranch(2);\r
\r
        System.out.println(">>> 3. Scenario 3: UNHANDLED Exception Thrown (NPE):");\r
        System.out.println("  Expected: 1 -> (Aborts 2) -> (Catch skipped) -> 4 -> (Abrupt termination, 5 never runs)");\r
        try {\r
            testBranch(3);\r
        } catch (NullPointerException e) {\r
            System.out.println("  [OUTER RECOVERY] Caught unhandled NPE in caller.");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 8: Comprehensive Flow of Control\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BRANCH EXECUTION MATRIX:\r
   - Branch 1 (No error)     : try → finally → post-code.\r
   - Branch 2 (Caught error) : try → catch → finally → post-code.\r
   - Branch 3 (Uncaught error): try → finally → abrupt termination (propagate).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"If an UNHANDLED exception is thrown inside a try block, does the 'finally' block still execute before the method terminates abruptly?",shortAnswer:"YES. Even if an exception is thrown that matches NONE of the catch blocks, the 'finally' block STILL executes before the exception is propagated up to the caller and the current method stack frame is popped.",explanation:"This ensures database connections and socket locks are never orphaned even during crashes.",hint:"Finally block executes even for unhandled propagating exceptions.",level:"Intermediate",codeExample:"// Flow on unhandled error: try → (catch skipped) → finally → propagate"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"All Execution Branches"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Flow of Control in ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"try-catch-finally"})," Under All Execution Branches"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace all execution pathways: analyzing normal completion, handled recovery, and verifying that finally blocks execute even when exceptions are uncaught."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"TryCatchFinallyAllBranchesDemo.java",highlightLines:[7,10,11,12,13,15,17,18,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Execution Branches FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 004_002 Topic 8: Flow of Control Branches",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic8_control_flow_branches_note.txt"})}),e.jsx(o,{note:"Even if nobody catches the exception, the finally block runs right before the method dies! That is why finally is so reliable for closing files and network sockets! — Sukanta Hui"})]})}export{y as default};
