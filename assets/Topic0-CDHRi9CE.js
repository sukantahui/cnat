import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 0: What Constitutes Thread Safety: Invariant Preservation & Specifications\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
// 1. AN IMMUTABLE CLASS IS INHERENTLY THREAD-SAFE (Zero Synchronization Needed!):\r
final class StudentRegistrationBadge {\r
    private final String studentName;\r
    private final String centerLocation;\r
    private final long timestamp;\r
\r
    public StudentRegistrationBadge(String studentName, String centerLocation) {\r
        this.studentName = studentName;\r
        this.centerLocation = centerLocation;\r
        this.timestamp = System.currentTimeMillis();\r
    }\r
\r
    public String getStudentName() { return studentName; }\r
    public String getCenterLocation() { return centerLocation; }\r
    public long getTimestamp() { return timestamp; }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("Badge[%s @ %s, Time: %d]", studentName, centerLocation, timestamp);\r
    }\r
}\r
\r
public class ThreadSafetyDefinitionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT CONSTITUTES THREAD SAFETY - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE CANONICAL DEFINITION OF THREAD SAFETY (Brian Goetz):");\r
        System.out.println("  'A class is thread-safe if it behaves correctly when accessed from multiple");\r
        System.out.println("   threads, regardless of the scheduling or interleaving of the execution of");\r
        System.out.println("   those threads by the runtime environment, and with NO additional synchronization");\r
        System.out.println("   or other coordination on the part of the calling code.'");\r
        System.out.println();\r
        System.out.println(">>> THE 3 GOLDEN PATHWAYS TO THREAD SAFETY:");\r
        System.out.println("  1. Immutability           : Make state final & unmodifiable (e.g. StudentRegistrationBadge, String).");\r
        System.out.println("  2. Thread Confinement     : Never share state across threads (e.g. Local variables, ThreadLocal).");\r
        System.out.println("  3. Synchronized Mutation  : Guard shared mutable state with Locks or Atomic CAS classes.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 0: What Constitutes Thread Safety\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THREAD SAFETY DEFINITION:\r
   - Behaves correctly under any thread interleaving.\r
   - Caller needs NO extra synchronization.\r
   - Preserves state invariants at all times.\r
   - 3 Pathways:\r
     1. Immutability (final fields, read-only).\r
     2. Thread Confinement (ThreadLocal, stack variables).\r
     3. Synchronized Mutation (Locks, AtomicInteger).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does Brian Goetz (author of Java Concurrency in Practice) formally define 'Thread Safety'?",shortAnswer:"A class is thread-safe if it behaves correctly when accessed from multiple threads simultaneously, regardless of how the runtime environment schedules or interleaves those threads, and requiring NO additional synchronization or coordination by the calling client code. Furthermore, a thread-safe class preserves its internal state invariants under all concurrent execution paths.",explanation:"Standard industry-wide definition of Thread Safety.",hint:"Behaves correctly across multi-threaded interleaving without requiring external synchronization by callers.",level:"Beginner",codeExample:"final class ImmutableBadge { private final String name; ... } // 100% thread-safe by design"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Thread Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["What Constitutes ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Thread Safety"}),": Invariant Preservation & Contracts"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Establish formal concurrency criteria: exploring Brian Goetz's canonical definition of thread safety, state invariant contracts, and the 3 architectural pathways to safety."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ThreadSafetyDefinitionDemo.java",highlightLines:[7,10,15,16,28,29,34,35,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Thread Safety FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 008_005 Topic 0: What Constitutes Thread Safety",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic0_thread_safety_definition_note.txt"})}),e.jsx(r,{note:"A class is truly thread-safe when callers don't have to worry about synchronization at all! The simplest way to make any class thread-safe is to make all its fields final and immutable! If state cannot change, race conditions are mathematically impossible! — Sukanta Hui"})]})}export{y as default};
