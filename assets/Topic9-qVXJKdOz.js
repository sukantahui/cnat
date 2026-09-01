import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 9: Thread Creation Method 3: Concise Java 8 Lambda Expressions with Runnable\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class RunnableLambdaExpressionsDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: CREATION METHOD 3: LAMBDA EXPRESSIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. INLINE LAMBDA EXPRESSION WITH java.lang.Runnable:\r
        Thread printThread = new Thread(() -> {\r
            for (int i = 1; i <= 3; i++) {\r
                System.out.printf("[%s] Printing Barrackpore Certificate #%d...%n",\r
                        Thread.currentThread().getName(), i);\r
            }\r
        }, "Cert-Printer");\r
\r
        // 2. CONCISE SINGLE-LINE LAMBDA:\r
        Thread alertThread = new Thread(\r
                () -> System.out.println("[" + Thread.currentThread().getName() + "] 🔔 SMS Alert Dispatched to Swadeep!"),\r
                "SMS-Dispatcher"\r
        );\r
\r
        printThread.start();\r
        alertThread.start();\r
\r
        printThread.join();\r
        alertThread.join();\r
\r
        System.out.println("\\n>>> WHY Runnable IS A FUNCTIONAL INTERFACE (@FunctionalInterface):");\r
        System.out.println("  - Package : 'java.lang.Runnable'.");\r
        System.out.println("  - Method  : Defines exactly ONE abstract method: 'public abstract void run()'.");\r
        System.out.println("  - Benefit : Enables zero-boilerplate inline lambda syntax '() -> { ... }' or method references!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 9: Runnable Lambda Expressions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CREATION METHOD 3 (Runnable Lambdas):\r
   - '@FunctionalInterface Runnable' → '() → { ... }'.\r
   - 'new Thread(() → doWork(), "ThreadName").start()'.\r
   - Zero boilerplate code.\r
   - Clean, readable, and perfectly suited for micro-tasks.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why can 'java.lang.Runnable' be instantiated with a Java 8 lambda expression '() → { ... }'?",shortAnswer:"'java.lang.Runnable' is annotated with '@FunctionalInterface' (Single Abstract Method interface) and defines exactly ONE abstract method: 'void run()'. Under Java 8 SAM conversion rules, any lambda expression with matching parameter list '()' and return type 'void' can seamlessly implement Runnable with zero boilerplate.",explanation:"Fundamental Java 8 functional programming integration with core threading.",hint:"Runnable is a functional interface with a single abstract method: void run().",level:"Beginner",codeExample:'new Thread(() → System.out.println("Running in parallel!")).start();'}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Creation Method 3"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creation Method 3: Java 8 Lambda Expressions with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Runnable"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct concise background workers: leveraging functional interface SAM conversion to launch parallel tasks using inline ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"() -> { ... }"})," lambda syntax."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"RunnableLambdaExpressionsDemo.java",highlightLines:[7,10,14,15,16,21,22,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Runnable Lambda FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_001 Topic 9: Runnable Lambda Expressions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic9_runnable_lambda_expressions_note.txt"})}),e.jsx(t,{note:"With Java 8 lambdas, you can spin up a background worker in a single line: 'new Thread(() → sendEmail()).start()'! No extra classes, no boilerplate—just pure readable concurrency! — Sukanta Hui"})]})}export{b as default};
