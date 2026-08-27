import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const l=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 9: Corner Cases: Does 'finally' Execute When 'return' Is Inside try or catch? (YES!)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class FinallyWithReturnStatementDemo {\r
\r
    public static int calculateDiscountWithEarlyReturn(boolean hasCoupon) {\r
        try {\r
            System.out.println("  1. Inside TRY block");\r
            if (hasCoupon) {\r
                System.out.println("  2. Early 'return 25' encountered in TRY block!");\r
                return 25; // Prepares to return 25% discount\r
            }\r
            System.out.println("  3. Standard 'return 10' in TRY block");\r
            return 10;\r
        } catch (Exception e) {\r
            System.out.println("  4. Inside CATCH");\r
            return 0;\r
        } finally {\r
            // THE CRUCIAL TEST: Does finally run before the return completes? YES!\r
            System.out.println("  5. [FINALLY EXECUTED] Cleanup executed BEFORE method returns to caller!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: 'finally' EXECUTION WITH 'return' STATEMENTS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Calling Method with Early Return:");\r
        int discount = calculateDiscountWithEarlyReturn(true);\r
\r
        System.out.println("\\n>>> Method Returned to Main with Value: " + discount + "%");\r
\r
        System.out.println("\\n>>> JVM BEHAVIOR:");\r
        System.out.println("  When the JVM encounters 'return', it temporarily stores the return value in a local variable,");\r
        System.out.println("  executes the 'finally' block completely, and THEN finishes returning to the caller!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 9: finally on return Statements\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RETURN WITH FINALLY:\r
   - Does finally execute on 'return'? YES!\r
   - Sequence: Return value evaluated &rarr; finally executes &rarr; method returns.\r
   - Guaranteed cleanup even with multiple early return paths.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Does the 'finally' block execute if there is an explicit 'return' statement inside the 'try' or 'catch' block?",shortAnswer:"YES, ABSOLUTELY. The JVM intercepts the 'return' statement, evaluates and stores the return value in a hidden temporary register, executes the entire 'finally' block, and only then delivers the returned value to the caller.",explanation:"One of the most famous and universally asked Java interview questions.",hint:"Yes! Finally executes immediately before the return completes.",level:"Intermediate",codeExample:'try { return 10; } finally { System.out.println("Runs before return"); }'}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Classic Interview Favorite"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Corner Cases: Does ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"finally"})," Execute on ",e.jsx("code",{className:"text-amber-400 font-mono",children:"return"})," Statements? (YES!)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the classic interview corner case: tracing how the JVM temporarily stores return values, completes finally blocks, and guarantees cleanup on early returns."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:l,title:"FinallyWithReturnStatementDemo.java",highlightLines:[7,10,12,13,14,18,19,21,22]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Finally on Return FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 004_002 Topic 9: finally on return",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic9_finally_on_return_note.txt"})}),e.jsx(a,{note:"This is asked in 99% of Java interviews: 'If I have return in try, does finally run?' The answer is ALWAYS YES! The finally block executes right before the return value is handed back to the caller! — Sukanta Hui"})]})}export{y as default};
