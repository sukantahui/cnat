import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 9: Atomic Operations on ConcurrentHashMap: putIfAbsent(), computeIfAbsent() & replace()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.concurrent.ConcurrentHashMap;\r
import java.util.concurrent.ConcurrentMap;\r
\r
public class ConcurrentHashMapAtomicOperationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: ATOMIC OPERATIONS ON ConcurrentHashMap - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ConcurrentMap<String, String> tokenRegistry = new ConcurrentHashMap<>();\r
\r
        // 1. putIfAbsent(): Atomic insertion if key does not exist:\r
        String prev1 = tokenRegistry.putIfAbsent("BRK-101", "Swadeep Paul");\r
        String prev2 = tokenRegistry.putIfAbsent("BRK-101", "Duplicate Swadeep"); // Fails atomically!\r
\r
        System.out.println(">>> 1. putIfAbsent() Results:");\r
        System.out.println("  1st Insertion previous value: " + prev1 + " (Inserted!)");\r
        System.out.println("  2nd Insertion previous value: " + prev2 + " (Rejected atomically!)");\r
\r
        // 2. replace(key, oldValue, newValue): Atomic Compare-And-Swap (CAS):\r
        boolean replacedWrong = tokenRegistry.replace("BRK-101", "Wrong Old Value", "New Value");\r
        boolean replacedCorrect = tokenRegistry.replace("BRK-101", "Swadeep Paul", "Swadeep Paul (Senior Lead)");\r
\r
        System.out.println("\\n>>> 2. Atomic replace(key, oldValue, newValue):");\r
        System.out.println("  Replace with wrong expected value  : " + replacedWrong + " (Failed CAS)");\r
        System.out.println("  Replace with correct expected value: " + replacedCorrect + " (Successful CAS!)");\r
\r
        // 3. remove(key, value): Conditional atomic removal:\r
        boolean removedWrong = tokenRegistry.remove("BRK-101", "Outdated Value");\r
        boolean removedCorrect = tokenRegistry.remove("BRK-101", "Swadeep Paul (Senior Lead)");\r
\r
        System.out.println("\\n>>> 3. Conditional remove(key, value):");\r
        System.out.println("  Remove with wrong value  : " + removedWrong + " (Skipped)");\r
        System.out.println("  Remove with matched value: " + removedCorrect + " (Atomically unlinked!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 9: Atomic Operations on ConcurrentMap\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ATOMIC OPERATIONS:\r
   - 'putIfAbsent(k, v)': atomically puts only if absent.\r
   - 'replace(k, oldVal, newVal)': atomic CAS replace.\r
   - 'remove(k, val)': removes only if currently mapped to val.\r
   - 'computeIfAbsent(k, k -> compute())': atomic lazy creation.\r
   - Eliminates Check-Then-Act race conditions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why must you use 'putIfAbsent()', 'replace(key, oldVal, newVal)', and 'computeIfAbsent()' instead of separate 'if (!map.containsKey(key)) map.put(key, val)' blocks in concurrent code?",shortAnswer:"Because separate 'if (!containsKey) { put(); }' checks are NOT atomic (Check-Then-Act race condition). Between the 'containsKey()' check and the subsequent 'put()' call, another thread can interleave and insert an entry, leading to race conditions and overwritten state. The atomic methods on 'ConcurrentMap' execute the entire verification and mutation as an indivisible atomic operation.",explanation:"Fundamental concurrency pattern: avoiding Check-Then-Act race conditions.",hint:"Atomic methods prevent Check-Then-Act race conditions where other threads interleave between check and mutation.",level:"Intermediate",codeExample:"map.putIfAbsent(k, v); // Atomic Check-Then-Act | map.replace(k, oldVal, newVal); // Atomic CAS"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Atomic Map Methods"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Atomic Operations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"putIfAbsent()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"replace()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"computeIfAbsent()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Eliminate check-then-act race conditions: utilizing atomic ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"putIfAbsent"}),", conditional ",e.jsx("code",{className:"text-sky-300 font-mono",children:"replace(k, old, new)"}),", and atomic removals."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ConcurrentHashMapAtomicOperationsDemo.java",highlightLines:[7,10,16,17,24,25,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Atomic Operations FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:c,title:"Module 007_006 Topic 9: Atomic Operations on ConcurrentMap",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic9_atomic_operations_note.txt"})}),e.jsx(r,{note:"Never write 'if (!map.containsKey(k)) map.put(k, v)' in multithreaded code! That creates a classic check-then-act race condition! Use 'map.putIfAbsent(k, v)' or 'map.computeIfAbsent()' instead to make it 100% atomic! — Sukanta Hui"})]})}export{y as default};
