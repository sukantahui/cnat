import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 008_008: Explicit Locks & Synchronizers\r
 * Topic 4: ReentrantReadWriteLock: Shared Read Locks vs Exclusive Write Locks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.locks.Lock;\r
import java.util.concurrent.locks.ReadWriteLock;\r
import java.util.concurrent.locks.ReentrantReadWriteLock;\r
\r
public class ReentrantReadWriteLockMechanicsDemo {\r
\r
    // 1. Instantiating ReadWriteLock:\r
    private static final ReadWriteLock RW_LOCK = new ReentrantReadWriteLock();\r
    private static final Lock READ_LOCK = RW_LOCK.readLock();    // SHARED LOCK (Multiple readers!)\r
    private static final Lock WRITE_LOCK = RW_LOCK.writeLock();  // EXCLUSIVE LOCK (Only 1 writer!)\r
\r
    private static String systemConfig = "DEFAULT_GST_18%";\r
\r
    // READ OPERATION: Shared non-blocking concurrent reads:\r
    public static String readConfig(String readerName) {\r
        READ_LOCK.lock();\r
        try {\r
            System.out.printf("[%s] Reading config: %s (SHARED READ)%n", readerName, systemConfig);\r
            return systemConfig;\r
        } finally {\r
            READ_LOCK.unlock();\r
        }\r
    }\r
\r
    // WRITE OPERATION: Exclusive locking (blocks all readers and writers):\r
    public static void updateConfig(String writerName, String newConfig) {\r
        WRITE_LOCK.lock();\r
        try {\r
            System.out.printf(">>> [%s] UPDATING CONFIG TO: %s (EXCLUSIVE MUTEX)%n", writerName, newConfig);\r
            systemConfig = newConfig;\r
        } finally {\r
            WRITE_LOCK.unlock();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: ReentrantReadWriteLock MECHANICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        readConfig("Reader-Swadeep");\r
        readConfig("Reader-Tuhina");\r
        updateConfig("Admin-Sukanta", "UPDATED_GST_28%");\r
        readConfig("Reader-Abhronila");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_008: Explicit Locks & Synchronizers\r
Topic 4: ReentrantReadWriteLock Mechanics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. REENTRANTREADWRITELOCK:\r
   - 'readLock()': Shared lock (N readers can read at the same time).\r
   - 'writeLock()': Exclusive lock (1 writer at a time, blocks all).\r
   - Read & Read &rarr; Concurrent.\r
   - Read & Write &rarr; Blocked.\r
   - Write & Write &rarr; Blocked.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Explain the lock compatibility matrix of 'ReentrantReadWriteLock' (ReadLock vs WriteLock).",shortAnswer:"1. 'Read Lock (Shared)': Multiple reader threads can acquire the ReadLock simultaneously as long as no writer holds the WriteLock. Reads do not block other reads. 2. 'Write Lock (Exclusive)': Only one writer thread can hold the WriteLock at any time. When acquired, all other reader and writer threads are blocked from entry. 3. 'Compatibility Matrix': (A) Read-Read: Allowed concurrently. (B) Read-Write: Mutually exclusive (blocked). (C) Write-Write: Mutually exclusive (blocked).",explanation:"Fundamental ReadWriteLock concurrency semantics.",hint:"Many readers can read simultaneously; writers require 100% exclusive access blocking all readers and writers.",level:"Intermediate",codeExample:"rwLock.readLock().lock(); // Shared read; rwLock.writeLock().lock(); // Exclusive write"}];function R(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_008 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ReadWriteLock"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"ReentrantReadWriteLock"}),": Shared Readers vs Exclusive Writers"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect asymmetric locking: implementing shared ",e.jsx("code",{className:"text-sky-300 font-mono",children:"ReadLock"})," concurrency for multi-reader workloads and enforcing exclusive ",e.jsx("code",{className:"text-rose-300 font-mono",children:"WriteLock"})," isolation during mutations."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"ReentrantReadWriteLockMechanicsDemo.java",highlightLines:[7,10,14,15,16,21,22,26,27,32,33,37,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"ReadWriteLock FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 008_008 Topic 4: ReentrantReadWriteLock Mechanics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_008_topic4_read_write_lock_note.txt"})}),e.jsx(n,{note:"If 100 students want to look at the exam timetable on the noticeboard at the same time, they don't need to take turns—they can all read together (ReadLock)! But if the teacher needs to erase and rewrite the board, everyone steps back (WriteLock)! That's ReadWriteLock! — Sukanta Hui"})]})}export{R as default};
