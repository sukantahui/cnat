import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 8: Object-Level Lock vs Class-Level Lock: Non-Interfering Simultaneous Execution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
class InstitutePortal {\r
\r
    // 1. INSTANCE METHOD (Acquires Object-Level Lock on 'this'):\r
    public synchronized void printStudentBadge(String studentName) {\r
        System.out.printf("[%s] START printStudentBadge for %s (Holding OBJECT-level lock: %s)...%n",\r
                Thread.currentThread().getName(), studentName, this.hashCode());\r
        try { Thread.sleep(400); } catch (InterruptedException ignored) {}\r
        System.out.printf("[%s] END printStudentBadge for %s%n",\r
                Thread.currentThread().getName(), studentName);\r
    }\r
\r
    // 2. STATIC METHOD (Acquires Class-Level Lock on 'InstitutePortal.class'):\r
    public static synchronized void generateGlobalAuditReport() {\r
        System.out.printf("[%s] START generateGlobalAuditReport (Holding CLASS-level lock: %s)...%n",\r
                Thread.currentThread().getName(), InstitutePortal.class.getName());\r
        try { Thread.sleep(400); } catch (InterruptedException ignored) {}\r
        System.out.printf("[%s] END generateGlobalAuditReport%n",\r
                Thread.currentThread().getName());\r
    }\r
}\r
\r
public class ObjectVsClassLockSimultaneousDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: OBJECT LOCK vs CLASS LOCK SIMULTANEOUS EXECUTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        InstitutePortal portalInstance = new InstitutePortal();\r
\r
        // Thread 1 calls synchronized INSTANCE method:\r
        Thread instanceThread = new Thread(() -> {\r
            portalInstance.printStudentBadge("Swadeep Paul");\r
        }, "Instance-Lock-Thread");\r
\r
        // Thread 2 calls synchronized STATIC method:\r
        Thread classThread = new Thread(() -> {\r
            InstitutePortal.generateGlobalAuditReport();\r
        }, "Class-Lock-Thread");\r
\r
        long start = System.currentTimeMillis();\r
\r
        instanceThread.start();\r
        classThread.start();\r
\r
        instanceThread.join();\r
        classThread.join();\r
\r
        long duration = System.currentTimeMillis() - start;\r
        System.out.printf("\\n>>> Total Execution Time: %d ms (Completed in parallel ~400 ms!)%n", duration);\r
\r
        System.out.println("\\n>>> WHY DID BOTH THREADS RUN CONCURRENTLY WITHOUT BLOCKING?");\r
        System.out.println("  1. 'instanceThread' acquired the lock on the 'portalInstance' object in Heap memory.");\r
        System.out.println("  2. 'classThread' acquired the lock on the 'InstitutePortal.class' object in Metaspace.");\r
        System.out.println("  3. These are TWO ENTIRELY SEPARATE LOCK OBJECTS! Neither thread blocked the other!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 8: Object Lock vs Class Lock\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OBJECT vs CLASS LOCK:\r
   - Object-Level Lock: 'synchronized void foo()' locks 'this' instance.\r
   - Class-Level Lock: 'static synchronized void bar()' locks 'ClassName.class'.\r
   - Two distinct locks in memory!\r
   - Thread A on 'this' and Thread B on 'Class.class' run SIMULTANEOUSLY.\r
   - A static synchronized method NEVER blocks an instance synchronized method.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Can one thread execute a 'synchronized static' method while another thread simultaneously executes a 'synchronized' instance method on the same class?",shortAnswer:"YES, both threads execute simultaneously in parallel without blocking each other. The 'synchronized static' method acquires the Class-level monitor lock ('ClassName.class' in Metaspace), whereas the 'synchronized' instance method acquires the Object-level monitor lock ('this' in Heap memory). Because these are two completely distinct object instances with separate locks, they do not interfere with each other.",explanation:"Classic Java multi-threading interview conceptual question.",hint:"Yes, because ClassName.class and 'this' are two completely separate lock objects in memory.",level:"Intermediate",codeExample:"// Thread 1 holds 'this' lock | Thread 2 holds 'MyClass.class' lock → Run in parallel!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Object vs Class Lock"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Object-Level"})," vs ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Class-Level"})," Lock: Simultaneous Execution"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Contrast memory locking domains: proving why instance-level locks (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"this"}),") and class-level locks (",e.jsx("code",{className:"text-purple-300 font-mono",children:"Class.class"}),") execute concurrently without blocking contention."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ObjectVsClassLockSimultaneousDemo.java",highlightLines:[7,10,14,15,22,23,38,39,43,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Object vs Class Lock FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:o,title:"Module 008_003 Topic 8: Object vs Class Lock",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic8_object_vs_class_lock_note.txt"})}),e.jsx(r,{note:"Instance locks and Class locks are two completely different keys in different pockets! A thread holding the 'this' instance key will NEVER block a thread holding the 'Class.class' key! They both run in parallel! — Sukanta Hui"})]})}export{x as default};
