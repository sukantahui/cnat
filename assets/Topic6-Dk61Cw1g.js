import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 6: Why the Multi-Catch Exception Parameter is Implicitly Final\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.IOException;\r
import java.sql.SQLException;\r
\r
public class MultiCatchImplicitlyFinalDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: MULTI-CATCH IMPLICITLY FINAL PARAMETER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Traditional Single-Catch: The parameter is NOT final (reassignment is allowed, though discouraged):\r
        try {\r
            throw new IOException("Original I/O Exception");\r
        } catch (IOException singleEx) {\r
            System.out.println(">>> 1. Single-Catch parameter reassignment:");\r
            singleEx = new IOException("Reassigned I/O Exception"); // Legal in single-catch!\r
            System.out.println("  singleEx: " + singleEx.getMessage());\r
        }\r
\r
        // 2. Java 7 Multi-Catch: The parameter is strictly and implicitly FINAL:\r
        try {\r
            if (System.currentTimeMillis() > 0) throw new SQLException("Database connection dropped!");\r
            else throw new IOException("Disk failure!");\r
        } catch (IOException | SQLException multiEx) {\r
            System.out.println("\\n>>> 2. Multi-Catch parameter is IMPLICITLY FINAL:");\r
            System.out.println("  multiEx: " + multiEx.getMessage());\r
\r
            // COMPILE ERROR if we attempt reassignment:\r
            // multiEx = new SQLException("Another SQL error"); // Error: Cannot assign a value to final variable multiEx!\r
        }\r
\r
        System.out.println("\\n>>> WHY IS MULTI-CATCH PARAMETER FINAL?");\r
        System.out.println("  Because 'multiEx' has a union type (IOException | SQLException).");\r
        System.out.println("  If reassignment were permitted, you could assign an IOException into a variable that was actually handling an SQLException, destroying type safety!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 6: Multi-Catch Implicitly Final\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FINAL PARAMETER RULE:\r
   - Single-catch parameter can be reassigned (bad practice).\r
   - Multi-catch parameter is IMPLICITLY FINAL.\r
   - Reassignment causes immediate compile error.\r
   - Preserves static type safety across union types.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why is the exception parameter in a Java Multi-Catch block ('catch (IOException | SQLException ex)') implicitly final?",shortAnswer:"Because the parameter 'ex' has a static union type. If reassignment were allowed, client code could assign an instance of 'IOException' to 'ex' while the active runtime branch was actually handling an 'SQLException', which would break static type safety and compiler type verification.",explanation:"Therefore, the Java language specification mandates that multi-catch parameters are implicitly final.",hint:"Prevents assigning one union type instance into an incompatible active branch.",level:"Intermediate",codeExample:"// multiEx = new SQLException(); // COMPILE ERROR: Cannot reassign final variable"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Type Safety Guard"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why Multi-Catch Exception Parameter is Implicitly ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"final"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Explore JVM type safety invariants: understanding why Java strictly forbids reassigning union-type multi-catch parameters and preserves compiler integrity."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"MultiCatchImplicitlyFinalDemo.java",highlightLines:[7,14,15,17,18,23,24,25,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Implicitly Final FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 004_002 Topic 6: Multi-Catch Implicitly Final",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic6_multicatch_final_note.txt"})}),e.jsx(i,{note:"Even though you don't write the keyword 'final', the multi-catch variable is 100% final! The compiler guarantees you cannot reassign it! — Sukanta Hui"})]})}export{y as default};
