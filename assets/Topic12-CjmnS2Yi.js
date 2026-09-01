import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 12: The Danger of Shared Mutable State in Parallel Streams (Race Conditions)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
import java.util.stream.IntStream;\r
\r
public class SharedMutableStateDangerDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: SHARED MUTABLE STATE DANGER - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        int expectedCount = 10_000;\r
\r
        // 1. THE DISASTROUS ANTI-PATTERN: Mutating a non-thread-safe ArrayList in parallel!\r
        List<Integer> unsafeList = new ArrayList<>();\r
        try {\r
            IntStream.rangeClosed(1, expectedCount).parallel().forEach(unsafeList::add);\r
            System.out.println("1. [UNSAFE LIST] Expected: " + expectedCount + " | Actual Size: " + unsafeList.size());\r
            System.out.println("   --> SILENT DATA LOSS! " + (expectedCount - unsafeList.size()) + " elements were lost to race conditions!");\r
        } catch (Exception ex) {\r
            System.err.println("   [EXCEPTION CAUGHT]: Concurrent modification or ArrayIndexOutOfBounds: " + ex.getMessage());\r
        }\r
\r
        // 2. THE THREAD-SAFE SYNCHRONIZED WRAPPER (Slow due to lock contention)\r
        List<Integer> syncList = Collections.synchronizedList(new ArrayList<>());\r
        IntStream.rangeClosed(1, expectedCount).parallel().forEach(syncList::add);\r
        System.out.println("\\n2. [SYNCHRONIZED LIST] Size: " + syncList.size() + " (Thread-safe but destroys parallel speed via locks!)");\r
\r
        // 3. THE IDIOMATIC FUNCTIONAL SOLUTION: collect(Collectors.toList())\r
        List<Integer> functionalList = IntStream.rangeClosed(1, expectedCount)\r
            .parallel()\r
            .boxed()\r
            .toList(); // Zero shared state, perfectly safe and parallelized!\r
\r
        System.out.println("\\n3. [FUNCTIONAL TO-LIST] Size: " + functionalList.size() + " (100% Thread-safe & Lock-Free!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 12: Shared Mutable State in Parallel Streams\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE RACE CONDITION HAZARD:\r
   - Lambda expressions passed to parallel stream operations MUST BE PURE AND STATELESS.\r
   - Modifying non-thread-safe shared state (e.g. 'arrayList.add()', 'count++', 'map.put()')\r
     causes:\r
     * Silent data loss (lost updates due to non-atomic array resizing).\r
     * 'ArrayIndexOutOfBoundsException' inside ArrayList internal buffers.\r
     * Corrupted heap data.\r
\r
2. CORRECT ARCHITECTURAL SOLUTIONS:\r
   - Rule 1: NEVER mutate shared variables inside '.forEach()'.\r
   - Rule 2: Use mutable reduction with '.collect(Collectors.toList())' (Lock-free container merging).\r
   - Rule 3: Use pure reductions with '.reduce()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What happens when multiple threads in a parallel stream concurrently invoke list.add() on a shared ArrayList?",shortAnswer:"Race conditions occur during internal array resizing and element index increments, leading to silent data loss (lost elements), corrupted null slots, or ArrayIndexOutOfBoundsExceptions.",explanation:"ArrayList is not synchronized and cannot handle concurrent insertions.",hint:"Causes silent data loss, corrupt state, or ArrayIndexOutOfBoundsException.",level:"Intermediate",codeExample:"// BAD ANTI-PATTERN:\\nList<Integer> list = new ArrayList<>();\\nstream.parallel().forEach(list::add); // CORRUPTED!"},{question:"How does collect(Collectors.toList()) avoid race conditions in parallel streams without using locks?",shortAnswer:"Each worker thread populates its own private, isolated ArrayList accumulator. Once tasks finish, the Combiner function merges the individual ArrayLists recursively using divide-and-conquer, achieving lock-free thread safety.",explanation:"Eliminates synchronization contention while maintaining 100% data integrity.",hint:"Threads accumulate into private lists, which are merged by the Combiner.",level:"Advanced",codeExample:"stream.parallel().collect(Collectors.toList()); // Lock-free thread safe"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Danger of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Shared Mutable State"})," in Parallel Streams: Race Conditions"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Eliminating race conditions: why mutating shared variables inside forEach() causes silent data loss, and how to use reduction/collectors instead."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"SharedMutableStateDangerDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Parallel Streams FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 009_007 Topic 12: Shared Mutable State Danger",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic12_shared_mutable_state_danger_note.txt"})}),e.jsx(n,{note:"Never mutate external variables inside parallelStream().forEach()! If multiple threads call list.add(x) or counter++ concurrently without synchronization, you WILL get silent data corruption and missing elements! Always use .collect() or .reduce()! — Sukanta Hui"})]})}export{S as default};
