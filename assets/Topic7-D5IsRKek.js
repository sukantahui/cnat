import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 7: Thread Creation Method 1: Extending java.lang.Thread and Overriding run()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
// 1. EXTENDING java.lang.Thread CLASS:\r
class GstBatchProcessingThread extends Thread {\r
\r
    private final String batchName;\r
\r
    public GstBatchProcessingThread(String batchName) {\r
        super("Thread-" + batchName); // Passes custom name to Thread constructor\r
        this.batchName = batchName;\r
    }\r
\r
    // Overriding the entry point method for thread execution:\r
    @Override\r
    public void run() {\r
        System.out.printf("[%s] Started calculating GST reconciliation for %s...%n",\r
                Thread.currentThread().getName(), batchName);\r
        try {\r
            Thread.sleep(500); // Simulate processing\r
        } catch (InterruptedException ignored) {}\r
        System.out.printf("[%s] Successfully completed %s GST batch!%n",\r
                Thread.currentThread().getName(), batchName);\r
    }\r
}\r
\r
public class ExtendingThreadClassDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CREATION METHOD 1: EXTENDING Thread CLASS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        GstBatchProcessingThread t1 = new GstBatchProcessingThread("Barrackpore-Q1");\r
        GstBatchProcessingThread t2 = new GstBatchProcessingThread("Naihati-Q1");\r
\r
        // Invoking start() creates a new native OS thread:\r
        t1.start();\r
        t2.start();\r
\r
        t1.join();\r
        t2.join();\r
\r
        System.out.println("\\n>>> DRAWBACKS OF EXTENDING Thread CLASS (ANTI-PATTERN IN MODERN JAVA):");\r
        System.out.println("  1. Single Inheritance Limitation: Java does not support multiple class inheritance. If you extend Thread, you cannot extend any other domain class (e.g. 'extends BaseEntity')!");\r
        System.out.println("  2. Tight Coupling: Tightly couples the task algorithm ('run()') with the thread execution mechanism ('Thread').");\r
        System.out.println("  3. No Thread Pool Reuse: You cannot easily submit a Thread subclass to ExecutorService thread pools for reuse.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 7: Extending Thread Class\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CREATION METHOD 1 (Extending Thread):\r
   - 'class MyThread extends Thread { public void run() { ... } }'.\r
   - Call 'myThread.start()' to begin execution.\r
   - Drawbacks: Burns single class inheritance slot.\r
   - Violates Single Responsibility (couples code with thread execution).\r
   - Prefer 'Runnable' or 'Callable' for enterprise code!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is extending 'java.lang.Thread' considered an anti-pattern in modern enterprise Java applications?",shortAnswer:"1. 'Single Inheritance Constraint': Java does not support multiple class inheritance; extending 'Thread' consumes the class's single inheritance slot, preventing it from extending any domain model (like 'BaseService' or 'AuditableEntity'). 2. 'Coupling': It violates the Single Responsibility Principle by tightly coupling the workload algorithm ('run()') with the thread infrastructure. 3. 'Incompatibility with Thread Pools': Thread instances cannot be submitted to modern 'ExecutorService' thread pools for worker reuse.",explanation:"Core OOP design principle and modern Java concurrency best practice.",hint:"Consumes single inheritance slot and cannot be reused in ExecutorService thread pools.",level:"Intermediate",codeExample:"class MyTask extends Thread { public void run() { ... } } // Inflexible design"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Creation Method 1"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creation Method 1: Extending ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.lang.Thread"})," & Overriding ",e.jsx("code",{className:"text-sky-400 font-mono",children:"run()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Examine the classical subclassing approach: extending ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Thread"})," and analyzing why single inheritance constraints make it obsolete in enterprise design."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"ExtendingThreadClassDemo.java",highlightLines:[7,10,16,17,33,34,37,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Extending Thread FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_001 Topic 7: Extending Thread Class",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic7_extending_thread_class_note.txt"})}),e.jsx(a,{note:"While extending Thread is the easiest way to write your very first multithreaded program, avoid it in production! Java only allows extending ONE class; if you extend Thread, your class can never extend any other useful business class! — Sukanta Hui"})]})}export{g as default};
