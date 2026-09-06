import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 6: Synchronized Statements / Blocks: Locking on Specific Target Objects\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
class DualRegisterSystem {\r
\r
    private int studentCount = 0;\r
    private int facultyCount = 0;\r
\r
    // 2 Separate Lock Objects for 2 Independent Critical Sections:\r
    private final Object studentLock = new Object();\r
    private final Object facultyLock = new Object();\r
\r
    // 1. Updating Students (Acquires ONLY studentLock):\r
    public void addStudent(String name) {\r
        // Non-critical preparation code (runs concurrently!):\r
        String formattedName = name.toUpperCase();\r
\r
        // Critical Section (Locked on studentLock):\r
        synchronized (studentLock) {\r
            studentCount++;\r
            System.out.printf("[%s] Added Student: %s (Total: %d)%n",\r
                    Thread.currentThread().getName(), formattedName, studentCount);\r
        }\r
    }\r
\r
    // 2. Updating Faculty (Acquires ONLY facultyLock):\r
    public void addFaculty(String name) {\r
        String formattedName = name.toUpperCase();\r
\r
        // Critical Section (Locked on facultyLock):\r
        synchronized (facultyLock) {\r
            facultyCount++;\r
            System.out.printf("[%s] Added Faculty: %s (Total: %d)%n",\r
                    Thread.currentThread().getName(), formattedName, facultyCount);\r
        }\r
    }\r
}\r
\r
public class SynchronizedBlocksCustomLocksDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: SYNCHRONIZED BLOCKS & CUSTOM LOCKS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        DualRegisterSystem system = new DualRegisterSystem();\r
\r
        // Thread 1 adds students while Thread 2 adds faculty SIMULTANEOUSLY without blocking each other!\r
        Thread studentThread = new Thread(() -> {\r
            system.addStudent("Swadeep");\r
            system.addStudent("Tuhina");\r
        }, "Student-Thread");\r
\r
        Thread facultyThread = new Thread(() -> {\r
            system.addFaculty("Sukanta Hui");\r
            system.addFaculty("Subhashis Sir");\r
        }, "Faculty-Thread");\r
\r
        studentThread.start();\r
        facultyThread.start();\r
\r
        studentThread.join();\r
        facultyThread.join();\r
\r
        System.out.println("\\n>>> BENEFIT OF SYNCHRONIZED BLOCKS WITH DUAL LOCK OBJECTS:");\r
        System.out.println("  - Adding students and adding faculty are independent operations.");\r
        System.out.println("  - By locking on separate 'studentLock' and 'facultyLock' objects, both threads execute concurrently with ZERO blocking contention!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 6: Synchronized Blocks & Custom Locks\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SYNCHRONIZED BLOCKS:\r
   - Syntax: 'synchronized(lockTarget) { /* critical section */ }'.\r
   - Lock target can be 'this', 'ClassName.class', or a private Object.\r
   - Fine-grained lock scope → higher concurrency throughput.\r
   - Use multiple lock objects for independent state variables.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the primary advantage of using a 'synchronized(lockObject) { ... }' block over a synchronized method?",shortAnswer:"A synchronized block allows developers to: 1. 'Minimize Lock Scope': lock only the exact lines of code that mutate shared state (keeping expensive preparation/I/O code outside the lock). 2. 'Target-Specific Locking': lock on distinct dedicated lock objects (e.g. 'studentLock' and 'facultyLock') so unrelated operations on the same instance can execute concurrently in parallel without blocking each other.",explanation:"Core concurrency performance optimization in Java.",hint:"Minimizes lock scope and enables independent lock objects for unrelated shared fields.",level:"Intermediate",codeExample:"synchronized(customLock) { sharedState++; } // Fine-grained lock targeting"}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Synchronized Blocks"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Synchronized Blocks: Locking on Specific Targets (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"synchronized(lock)"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Achieve fine-grained concurrency: replacing coarse method locks with granular ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"synchronized(lockObject)"})," blocks to allow independent tasks to execute simultaneously without contention."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"SynchronizedBlocksCustomLocksDemo.java",highlightLines:[7,10,15,16,20,21,30,31,46,47]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Synchronized Blocks FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:c,title:"Module 008_003 Topic 6: Synchronized Blocks & Custom Locks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic6_synchronized_blocks_custom_locks_note.txt"})}),e.jsx(a,{note:"Don't lock the entire method if only 2 lines touch shared data! Use a synchronized block to protect ONLY the critical lines, and let the rest of the method run at full parallel speed! — Sukanta Hui"})]})}export{k as default};
