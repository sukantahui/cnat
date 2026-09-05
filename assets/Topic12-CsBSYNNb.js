import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 12: Core Atomic Types: AtomicInteger, AtomicLong, AtomicBoolean & AtomicReference\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.atomic.AtomicBoolean;\r
import java.util.concurrent.atomic.AtomicInteger;\r
import java.util.concurrent.atomic.AtomicLong;\r
import java.util.concurrent.atomic.AtomicReference;\r
\r
class StudentRegistration {\r
    final String studentName;\r
    final String course;\r
\r
    public StudentRegistration(String studentName, String course) {\r
        this.studentName = studentName;\r
        this.course = course;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return studentName + " enrolled in " + course;\r
    }\r
}\r
\r
public class CoreAtomicTypesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: CORE ATOMIC PRIMITIVE & REFERENCE TYPES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. AtomicInteger:\r
        AtomicInteger activeStudents = new AtomicInteger(100);\r
        activeStudents.addAndGet(5);\r
        System.out.println(">>> 1. AtomicInteger (Active Students): " + activeStudents.get());\r
\r
        // 2. AtomicLong:\r
        AtomicLong totalTuitionFeeCollected = new AtomicLong(250000L);\r
        totalTuitionFeeCollected.addAndGet(15000L);\r
        System.out.printf(">>> 2. AtomicLong (Tuition Revenue): ₹%,d%n", totalTuitionFeeCollected.get());\r
\r
        // 3. AtomicBoolean:\r
        AtomicBoolean isRegistrationOpen = new AtomicBoolean(true);\r
        boolean wasOpen = isRegistrationOpen.compareAndSet(true, false); // Atomic toggle\r
        System.out.printf(">>> 3. AtomicBoolean (Registration Closed?): %b (Was open: %b)%n",\r
                !isRegistrationOpen.get(), wasOpen);\r
\r
        // 4. AtomicReference (Lock-Free Object Reference Updates):\r
        StudentRegistration initialStudent = new StudentRegistration("Swadeep Paul", "GST Executive");\r
        AtomicReference<StudentRegistration> topRanker = new AtomicReference<>(initialStudent);\r
\r
        StudentRegistration newRanker = new StudentRegistration("Tuhina Das", "Advanced Java Core");\r
        boolean swapped = topRanker.compareAndSet(initialStudent, newRanker);\r
\r
        System.out.println(">>> 4. AtomicReference Update Status: " + swapped);\r
        System.out.println("  Current Top Ranker: " + topRanker.get());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 12: Core Atomic Types\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE ATOMIC TYPES:\r
   - AtomicInteger / AtomicLong: 32-bit & 64-bit lock-free numeric counters.\r
   - AtomicBoolean: Atomic flags and one-time triggers.\r
   - AtomicReference<V>: Lock-free atomic reference swaps on custom domain objects.\r
   - All backed by hardware CAS (Compare-And-Swap).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"What is 'AtomicReference<V>' in Java and how does it enable lock-free state machines?",shortAnswer:"'AtomicReference<V>' encapsulates an object reference and provides atomic, lock-free operations using hardware CAS. It allows threads to atomically update an entire immutable domain state object (e.g. replacing an old configuration or user profile with a new instance) via 'compareAndSet(expectedReference, newReference)'. If another thread updated the reference first, CAS fails and the caller can re-read the latest state and retry, enabling lock-free concurrent data structures (like Treiber Stacks and Michael-Scott Queues).",explanation:"Core advanced atomic wrapper in java.util.concurrent.atomic.",hint:"Wraps object references for atomic CAS swaps; powers lock-free data structures.",level:"Intermediate",codeExample:"AtomicReference<User> userRef = new AtomicReference<>(user); userRef.compareAndSet(oldUser, newUser);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Core Atomic Types"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Core Atomic Types: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"AtomicInteger"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"AtomicLong"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"AtomicReference"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Survey lock-free wrappers: utilizing primitive atomic accumulators, one-time ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"AtomicBoolean"})," triggers, and lock-free ",e.jsx("code",{className:"text-purple-300 font-mono",children:"AtomicReference"})," state swaps."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"CoreAtomicTypesDemo.java",highlightLines:[7,10,11,12,13,31,32,36,37,41,42,49,50]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Core Atomic Types FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_006 Topic 12: Core Atomic Types",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic12_core_atomic_types_note.txt"})}),e.jsx(o,{note:"With AtomicReference, you can swap entire objects atomically without locks! It's like updating a record in a database: if nobody else touched it, your update succeeds instantly! — Sukanta Hui"})]})}export{x as default};
