import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 5: Synchronized Static Methods: Class-Level Locks (ClassName.class Monitor)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
class RegionalTaxRegistry {\r
\r
    private static int globalRegistrationCount = 0;\r
\r
    // 1. SYNCHRONIZED STATIC METHOD (Acquires Class-Level Lock on RegionalTaxRegistry.class):\r
    public static synchronized void registerNewStudent(String branchName, String studentName) {\r
        // Exactly equivalent to: synchronized(RegionalTaxRegistry.class) { ... }\r
        int current = globalRegistrationCount;\r
        try { Thread.sleep(50); } catch (InterruptedException ignored) {}\r
        globalRegistrationCount = current + 1;\r
        System.out.printf("[%s] Registered %s at %s. Total Enrolled: %d%n",\r
                Thread.currentThread().getName(), studentName, branchName, globalRegistrationCount);\r
    }\r
\r
    public static int getGlobalCount() { return globalRegistrationCount; }\r
}\r
\r
public class SynchronizedStaticMethodsDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: SYNCHRONIZED STATIC METHODS (CLASS-LEVEL LOCK) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread t1 = new Thread(() -> RegionalTaxRegistry.registerNewStudent("Barrackpore", "Swadeep"), "Thread-Barrackpore");\r
        Thread t2 = new Thread(() -> RegionalTaxRegistry.registerNewStudent("Naihati", "Tuhina"), "Thread-Naihati");\r
        Thread t3 = new Thread(() -> RegionalTaxRegistry.registerNewStudent("Shyamnagar", "Abhronila"), "Thread-Shyamnagar");\r
\r
        t1.start();\r
        t2.start();\r
        t3.start();\r
\r
        t1.join();\r
        t2.join();\r
        t3.join();\r
\r
        System.out.println("\\n>>> FINAL GLOBAL REGISTRATION COUNT: " + RegionalTaxRegistry.getGlobalCount());\r
\r
        System.out.println("\\n>>> HOW CLASS-LEVEL LOCKS OPERATE:");\r
        System.out.println("  1. When a thread calls a 'synchronized static' method, it acquires the intrinsic lock on the 'Class' object ('RegionalTaxRegistry.class') in Metaspace.");\r
        System.out.println("  2. Only ONE thread in the ENTIRE JVM can execute ANY synchronized static method of that class at any given time, regardless of how many instances exist!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 5: Synchronized Static Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SYNCHRONIZED STATIC METHODS:\r
   - Declared with 'public static synchronized void method()'.\r
   - Acquires the Class-level lock ('ClassName.class').\r
   - Locks globally across ALL instances of the class.\r
   - Protects shared static variables across all threads.\r
   - Independent from instance-level locks ('this').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Which lock is acquired when a thread executes a 'synchronized static' method?",shortAnswer:"A 'synchronized static' method acquires the intrinsic monitor lock of the 'java.lang.Class' object associated with that class (i.e. 'ClassName.class' in Metaspace). Because there is only ONE Class object per class loaded in a ClassLoader, only ONE thread in the entire JVM can execute any synchronized static method of that class at a time, regardless of how many instances of that class exist.",explanation:"Core JVM specification on Class-level synchronization.",hint:"Acquires the intrinsic lock on the Class object (ClassName.class), locking globally across all instances.",level:"Intermediate",codeExample:"public static synchronized void count() { ... } // Identical to synchronized(MyClass.class) { ... }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Class-Level Lock"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Synchronized Static Methods: Class-Level Locks (",e.jsx("code",{className:"text-purple-400 font-mono",children:"ClassName.class"})," Monitor)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master global static synchronization: protecting shared static memory across all JVM instances by locking the ",e.jsx("code",{className:"text-purple-300 font-mono",children:"Class<?>"})," reflection object in Metaspace."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"SynchronizedStaticMethodsDemo.java",highlightLines:[7,10,14,15,29,30,31,35,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Class-Level Lock FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 008_003 Topic 5: Synchronized Static Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic5_synchronized_static_methods_note.txt"})}),e.jsx(s,{note:"If a method is 'static synchronized', Java locks the entire Class blueprint (ClassName.class)! Even if you have 100 separate objects in memory, only ONE thread in the whole JVM can run that static method at a time! — Sukanta Hui"})]})}export{y as default};
