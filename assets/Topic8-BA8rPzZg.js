import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 008_008: Explicit Locks & Synchronizers\r
 * Topic 8: Concurrency Synchronizer 2: CyclicBarrier (Reusable Rendezvous Points)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.BrokenBarrierException;\r
import java.util.concurrent.CyclicBarrier;\r
\r
public class CyclicBarrierRendezvousDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CyclicBarrier SYNCHRONIZER - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        int studentCount = 3;\r
\r
        // CyclicBarrier: 3 students must reach the barrier; when all 3 arrive, barrierAction executes:\r
        CyclicBarrier barrier = new CyclicBarrier(studentCount, () -> {\r
            System.out.println("\\n>>> 🏆 ALL 3 STUDENTS ARRIVED AT RENDEZVOUS! Starting joint GST Workshop!\\n");\r
        });\r
\r
        for (int i = 1; i <= studentCount; i++) {\r
            final int studentId = i;\r
            new Thread(() -> {\r
                try {\r
                    // PHASE 1: Travel to Barrackpore Academy\r
                    System.out.printf("  [Student #%d] Travelling to Barrackpore...%n", studentId);\r
                    Thread.sleep(studentId * 100);\r
                    System.out.printf("  [Student #%d] Arrived at Academy gate. Waiting for peers...%n", studentId);\r
\r
                    // Rendezvous Barrier Point (BLOCKS until all 3 arrive):\r
                    barrier.await();\r
\r
                    // PHASE 2: Reusable execution continues together!\r
                    System.out.printf("  [Student #%d] Attending lecture together!%n", studentId);\r
                } catch (InterruptedException | BrokenBarrierException ignored) {}\r
            }, "Student-" + i).start();\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_008: Explicit Locks & Synchronizers\r
Topic 8: CyclicBarrier Rendezvous\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CYCLICBARRIER:\r
   - Synchronizes N parallel threads at a common rendezvous point.\r
   - Every thread calls 'barrier.await()'.\r
   - When the last thread arrives, optional 'barrierAction' runs.\r
   - REUSABLE: Automatically resets for subsequent computation rounds.\r
   - Ideal for multi-step parallel algorithms (e.g. scientific simulations).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is 'CyclicBarrier' in Java and how does its reusable rendezvous mechanism work?",shortAnswer:"'CyclicBarrier' is a synchronization point where a fixed number of threads (N) must all converge ('await()') before any thread is allowed to continue. When the N-th thread calls 'await()', an optional 'barrierAction' Runnable is executed once by the last arriving thread, and all waiting threads are released to proceed into the next phase simultaneously. Unlike CountDownLatch, 'CyclicBarrier is CYCLIC (reusable)': it automatically resets its count back to N and can be used repeatedly across multi-phase algorithms (e.g. game loops, matrix simulations).",explanation:"Core cyclic multi-phase barrier synchronization pattern.",hint:"A reusable rendezvous point where N threads wait for each other; automatically resets after releasing threads.",level:"Intermediate",codeExample:'CyclicBarrier barrier = new CyclicBarrier(3, () → System.out.println("Phase complete!")); barrier.await();'}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_008 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"CyclicBarrier"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Concurrency Synchronizers: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"CyclicBarrier"})," Rendezvous Points"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master reusable barriers: establishing rendezvous checkpoints with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"CyclicBarrier"}),", executing aggregate barrier actions, and cycling multi-phase parallel pipelines."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"CyclicBarrierRendezvousDemo.java",highlightLines:[7,10,16,17,18,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"CyclicBarrier FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 008_008 Topic 8: CyclicBarrier Rendezvous",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_008_topic8_cyclicbarrier_rendezvous_note.txt"})}),e.jsx(n,{note:"CyclicBarrier is like a group of friends meeting at Naihati station before boarding the train: Nobody boards alone; everyone waits at the platform (barrier.await()) until all friends arrive, and then they all board together! And tomorrow they can do it all over again because it resets automatically! — Sukanta Hui"})]})}export{y as default};
