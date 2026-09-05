import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 0: Why Standard Collections (HashMap, ArrayList) Are NOT Thread-Safe\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class StandardCollectionsThreadSafetyHazardsDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: STANDARD COLLECTIONS THREAD-SAFETY HAZARDS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // UNSYNCHRONIZED HashMap shared across 2 concurrent worker threads:\r
        Map<Integer, String> unsynchronizedMap = new HashMap<>();\r
\r
        Thread t1 = new Thread(() -> {\r
            for (int i = 0; i < 5000; i++) {\r
                unsynchronizedMap.put(i, "Thread-1-" + i);\r
            }\r
        });\r
\r
        Thread t2 = new Thread(() -> {\r
            for (int i = 5000; i < 10000; i++) {\r
                unsynchronizedMap.put(i, "Thread-2-" + i);\r
            }\r
        });\r
\r
        t1.start();\r
        t2.start();\r
        t1.join();\r
        t2.join();\r
\r
        System.out.println(">>> 1. Concurrent Mutation of Plain HashMap:");\r
        System.out.println("  Expected Map Size : 10000");\r
        System.out.println("  Actual Map Size   : " + unsynchronizedMap.size() + " (Data corruption / lost updates due to race conditions!)");\r
\r
        System.out.println("\\n>>> 3 DEADLY HAZARDS OF CONCURRENT ACCESS TO STANDARD COLLECTIONS:");\r
        System.out.println("  1. Lost Updates / Silent Overwrites: Two threads writing to the same bucket overwrite each other's pointers.");\r
        System.out.println("  2. Inconsistent Size Field         : The 'size' integer counter is updated non-atomically (size++ is not atomic).");\r
        System.out.println("  3. Pre-Java 8 Infinite Loops       : In Java 7, concurrent table resizing caused circular linked list pointers (100% CPU lockup)!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 0: Non-Thread-Safe Collections Hazards\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STANDARD COLLECTIONS HAZARDS:\r
   - HashMap & ArrayList have zero internal synchronization.\r
   - Race conditions cause lost updates and node pointer corruption.\r
   - 'size++' is non-atomic (read-modify-write race).\r
   - Iterators throw 'ConcurrentModificationException'.\r
   - NEVER share plain HashMap/ArrayList across threads without synchronization.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What specific concurrency hazards occur when multiple threads mutate a standard 'java.util.HashMap' or 'java.util.ArrayList' without synchronization?",shortAnswer:"1. 'Data Corruption & Lost Updates': concurrent writes to the same bucket cause node pointers to overwrite each other, causing elements to disappear silently. 2. 'Corrupted Size Counters': non-atomic 'size++' updates result in 'map.size()' reporting fewer elements than actually inserted. 3. 'ConcurrentModificationException': iterators fail-fast if modifications occur during traversal. 4. 'Historical CPU Spikes': in Java 7, concurrent resizing created circular linked lists that spun CPU cores at 100% indefinitely.",explanation:"Fundamental reason why concurrent collections exist in Java.",hint:"Lost updates, corrupted size counters, ConcurrentModificationException, and infinite resizing loops (pre-Java 8).",level:"Intermediate",codeExample:"Map<K,V> map = new HashMap<>(); // DANGEROUS when accessed concurrently by multiple threads"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Thread Safety Hazards"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why Standard Collections Are ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NOT"})," Thread-Safe: Race Conditions & Corruption"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Demonstrate multi-threaded data corruption: executing concurrent mutations on plain HashMaps to witness race conditions, lost updates, and corrupted size counters."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"StandardCollectionsThreadSafetyHazardsDemo.java",highlightLines:[7,10,16,18,19,24,25,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Thread Safety Hazards FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 007_006 Topic 0: Thread Safety Hazards",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic0_thread_safety_hazards_note.txt"})}),e.jsx(a,{note:"If two threads call 'put()' on a standard HashMap at the exact same moment, one of them will overwrite the other's node pointer, and your data vanishes into thin air! Standard collections must never be mutated concurrently without protection! — Sukanta Hui"})]})}export{y as default};
