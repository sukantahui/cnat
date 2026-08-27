import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 8: Why ConcurrentHashMap Prohibits Null Keys & Null Values (The Ambiguity Hazard)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.concurrent.ConcurrentHashMap;\r
\r
public class ConcurrentHashMapNullProhibitionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: WHY ConcurrentHashMap FORBIDS NULL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ConcurrentHashMap<String, String> map = new ConcurrentHashMap<>();\r
\r
        // 1. Attempting to insert null key:\r
        System.out.println(">>> 1. Testing Null Key Insertion:");\r
        try {\r
            map.put(null, "Barrackpore Value");\r
        } catch (NullPointerException e) {\r
            System.out.println("  [CAUGHT EXPECTED NPE] map.put(null, val) threw NullPointerException!");\r
        }\r
\r
        // 2. Attempting to insert null value:\r
        System.out.println("\\n>>> 2. Testing Null Value Insertion:");\r
        try {\r
            map.put("BRK-101", null);\r
        } catch (NullPointerException e) {\r
            System.out.println("  [CAUGHT EXPECTED NPE] map.put(key, null) threw NullPointerException!");\r
        }\r
\r
        System.out.println("\\n>>> DOUG LEA'S REASONING: THE CONCURRENT NULL AMBIGUITY HAZARD:");\r
        System.out.println("  - In single-threaded HashMap: If 'map.get(key) == null', you can call 'map.containsKey(key)' to check if the key is absent or mapped to null.");\r
        System.out.println("  - In Concurrent Multithreaded Map:");\r
        System.out.println("    1. Thread A calls 'map.get(key)' -> returns null.");\r
        System.out.println("    2. Before Thread A can call 'map.containsKey(key)', Thread B inserts or removes the key!");\r
        System.out.println("    3. The map state changed between the two calls! 'containsKey()' cannot confirm past state!");\r
        System.out.println("    4. In concurrent environments, null produces dangerous race-condition ambiguities.");\r
        System.out.println("    5. Rule: Concurrent collections (ConcurrentHashMap, ConcurrentLinkedQueue) strictly ban nulls!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 8: Null Prohibition in Concurrent Collections\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NULL PROHIBITION:\r
   - 'put(null, v)' &rarr; throws NullPointerException.\r
   - 'put(k, null)' &rarr; throws NullPointerException.\r
   - Eliminates 'get(k) == null' ambiguity in multithreading.\r
   - Prevents race conditions between 'get()' and 'containsKey()'.\r
   - Shared rule across all JSR-166 concurrent queues and maps.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does 'ConcurrentHashMap' strictly prohibit both null keys and null values (throwing NullPointerException)?",shortAnswer:"Because in a concurrent multi-threaded environment, allowing null values creates an insurmountable race-condition ambiguity. In a single-threaded HashMap, if 'map.get(key)' returns null, the thread can call 'map.containsKey(key)' to distinguish between 'key is absent' vs 'key maps to null'. In a concurrent map, another thread could insert, update, or remove the key between the 'get()' and 'containsKey()' calls, making it impossible to resolve the ambiguity reliably. Doug Lea strictly banned nulls to guarantee deterministic concurrency.",explanation:"Direct design philosophy by Doug Lea (author of java.util.concurrent).",hint:"Prevents race conditions between get() returning null and containsKey() verifying if key was absent.",level:"Intermediate",codeExample:'map.put(null, "v"); // Throws NPE! | map.put("k", null); // Throws NPE!'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Null Prohibition"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Why ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ConcurrentHashMap"})," Prohibits ",e.jsx("code",{className:"text-rose-400 font-mono",children:"null"})," Keys & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"null"})," Values"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Analyze concurrent design principles: discovering why Doug Lea banned nulls in ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ConcurrentHashMap"})," to prevent race conditions between ",e.jsx("code",{className:"text-sky-300 font-mono",children:"get()"})," and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"containsKey()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"ConcurrentHashMapNullProhibitionDemo.java",highlightLines:[7,10,17,18,25,26,33,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Null Prohibition FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:l,title:"Module 007_006 Topic 8: Null Prohibition",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic8_null_prohibition_note.txt"})}),e.jsx(a,{note:"Never pass null to ConcurrentHashMap! In multithreaded systems, if get() returns null, you can't tell if the key is missing or if another thread just deleted it! To avoid bugs, ConcurrentHashMap throws a NullPointerException immediately! — Sukanta Hui"})]})}export{x as default};
