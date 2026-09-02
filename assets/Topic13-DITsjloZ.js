import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 13: The Atomic Method Suite: getAndIncrement, compareAndSet & Functional updateAndGet\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.atomic.AtomicInteger;\r
\r
public class AtomicMethodsSuiteDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: THE ATOMIC METHODS SUITE & LAMBDA UPDATES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AtomicInteger counter = new AtomicInteger(10);\r
\r
        // 1. Post-Increment vs Pre-Increment:\r
        int prev = counter.getAndIncrement(); // Returns 10, then counter becomes 11 (like counter++)\r
        System.out.printf(">>> 1. getAndIncrement() -> Returned: %d | Current Value: %d%n", prev, counter.get());\r
\r
        int next = counter.incrementAndGet(); // Counter becomes 12, then returns 12 (like ++counter)\r
        System.out.printf(">>> 2. incrementAndGet() -> Returned: %d | Current Value: %d%n", next, counter.get());\r
\r
        // 2. Add and Get:\r
        int afterAdd = counter.addAndGet(5); // Adds 5 -> 17\r
        System.out.printf(">>> 3. addAndGet(5)      -> Returned: %d%n", afterAdd);\r
\r
        // 3. Functional Java 8 updateAndGet() / accumulateAndGet():\r
        // Automatically loops internally with CAS until lambda successfully updates!\r
        int doubled = counter.updateAndGet(x -> x * 2); // 17 * 2 = 34\r
        System.out.printf(">>> 4. updateAndGet(x -> x * 2) -> Result: %d%n", doubled);\r
\r
        int accumulated = counter.accumulateAndGet(100, (current, delta) -> current + delta); // 34 + 100 = 134\r
        System.out.printf(">>> 5. accumulateAndGet(100, +) -> Result: %d%n", accumulated);\r
\r
        System.out.println("\\n>>> WHY updateAndGet() IS REVOLUTIONARY IN JAVA 8:");\r
        System.out.println("  - You no longer need to write manual 'do { ... } while(!compareAndSet())' CAS retry loops!");\r
        System.out.println("  - 'updateAndGet(unaryOperator)' encapsulates the CAS retry loop internally with zero boilerplate!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 13: Atomic Methods Suite\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ATOMIC METHODS SUITE:\r
   - 'getAndIncrement()' (i++) vs 'incrementAndGet()' (++i).\r
   - 'addAndGet(delta)' / 'getAndAdd(delta)'.\r
   - 'compareAndSet(expected, update)'.\r
   - Java 8 Functional: 'updateAndGet(x → x * 2)' & 'accumulateAndGet()'.\r
   - Automatically executes internal CAS spin-retry loops without boilerplate.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"How does the Java 8 'updateAndGet(IntUnaryOperator updateFunction)' method simplify complex lock-free mutations on AtomicInteger?",shortAnswer:"Before Java 8, performing custom mathematical transformations (e.g. multiplying by 2 or capping at maximum value) required developers to write manual boilerplate CAS retry loops ('do { prev = get(); next = transform(prev); } while (!compareAndSet(prev, next));'). Java 8's 'updateAndGet(operator)' abstracts this entirely: it accepts a lambda expression and internally handles the CAS spin-retry loop until the update succeeds atomically without lock contention boilerplate.",explanation:"Java 8 functional enhancements to java.util.concurrent.atomic.",hint:"Encapsulates the CAS retry loop internally using a lambda expression.",level:"Intermediate",codeExample:"atomicInt.updateAndGet(x → Math.min(x + 10, MAX_LIMIT));"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Atomic Method Suite"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Atomic Method Suite: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"compareAndSet"})," & Functional ",e.jsx("code",{className:"text-sky-400 font-mono",children:"updateAndGet()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master atomic mutations: comparing pre/post increment semantics, utilizing primitive arithmetic CAS, and implementing Java 8 functional ",e.jsx("code",{className:"text-sky-300 font-mono",children:"updateAndGet()"})," lambda pipelines."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"AtomicMethodsSuiteDeepDiveDemo.java",highlightLines:[7,10,16,17,20,21,25,26,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Atomic Methods FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 008_006 Topic 13: Atomic Methods Suite",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic13_atomic_methods_suite_note.txt"})}),e.jsx(r,{note:"In Java 8+, you don't even have to write CAS while-loops anymore! Just pass a lambda to 'updateAndGet(x → x * 2)' and Java will retry automatically until your atomic calculation succeeds! — Sukanta Hui"})]})}export{h as default};
