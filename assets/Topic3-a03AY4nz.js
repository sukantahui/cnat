import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 009_001: Lambda Expressions & Lexical Scoping\r
 * Topic 3: Target Typing: How the Java Compiler Infers Lambda Types from Context\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.concurrent.Callable;\r
\r
public class TargetTypingDeductionDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: TARGET TYPING & CONTEXTUAL INFERENCE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHAT IS 'TARGET TYPING'?");\r
        System.out.println("  - A Lambda expression in Java DOES NOT have an explicit type on its own!");\r
        System.out.println("  - The type is DEDUCED by the Java compiler from the TARGET CONTEXT where it is assigned or passed.");\r
        System.out.println();\r
\r
        // 1. SAME LAMBDA EXPRESSION '() -> "Success"' ASSIGNED TO TWO DIFFERENT INTERFACES:\r
\r
        // Context A: Target Type is 'Callable<String>' (throws Exception, returns String):\r
        Callable<String> callableTarget = () -> "GST Service Online";\r
\r
        // Context B: Target Type is 'Supplier<String>' (returns String, no checked exception):\r
        java.util.function.Supplier<String> supplierTarget = () -> "GST Service Online";\r
\r
        System.out.println(">>> 1. Evaluated via Callable TargetType: " + callableTarget.call());\r
        System.out.println(">>> 2. Evaluated via Supplier TargetType: " + supplierTarget.get());\r
\r
        System.out.println("\\n>>> TARGET TYPING CONTEXTS RECOGNIZED BY JAVAC:");\r
        System.out.println("  - Variable Declarations and Assignments ('TargetType var = lambda;')");\r
        System.out.println("  - Method Call Arguments ('executor.submit(lambda);')");\r
        System.out.println("  - Return Statements ('return (x) -> x * 2;')");\r
        System.out.println("  - Cast Expressions ('((Runnable) () -> doWork()).run();')");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_001: Lambda Expressions & Lexical Scoping\r
Topic 3: Target Typing Deduction\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TARGET TYPING:\r
   - A lambda has NO standalone type.\r
   - Type is inferred from context (variable, parameter, return, cast).\r
   - Target must be a Functional Interface matching method signature.\r
   - The same lambda can bind to different interfaces (e.g. Callable vs Supplier).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is 'Target Typing' in Java and how does the compiler deduce the type of a lambda expression?",shortAnswer:"In Java, a lambda expression does not have an intrinsic type of its own. The Java compiler performs 'Target Typing' by inspecting the surrounding contextual type (the 'Target Type') where the lambda is assigned, passed, or returned. For a lambda to be compatible, the target type must be a Functional Interface whose Single Abstract Method (SAM) descriptor matches the lambda's parameter count, parameter types, return type, and thrown exceptions.",explanation:"Core type inference mechanism of Java 8 Lambda Expressions.",hint:"Lambda has no type of its own; compiler infers its interface type from variable assignment, method parameter, or cast context.",level:"Intermediate",codeExample:'Callable<String> c = () → "Hello"; Supplier<String> s = () → "Hello"; // Same lambda, different target types!'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Target Typing"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Target Typing"}),": How the Compiler Infers Lambda Types from Context"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand contextual type resolution: exploring variable assignments, method parameter descriptors, and how identical lambda expressions resolve to disparate functional interfaces."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"TargetTypingDeductionDemo.java",highlightLines:[7,10,14,15,21,22,24,25,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Target Typing FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 009_001 Topic 3: Target Typing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_001_topic3_target_typing_note.txt"})}),e.jsx(r,{note:"A lambda is like a liquid: it has no shape of its own until you pour it into a cup (the Target Type)! Whether you pour '() → \\'Hi\\'' into a Callable cup or a Supplier cup, Java shapes the lambda to match! — Sukanta Hui"})]})}export{g as default};
