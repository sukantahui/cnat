import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 17: Building an LRU Cache Using LinkedHashMap & removeEldestEntry()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.LinkedHashMap;\r
import java.util.Map;\r
\r
// Complete, Production-Grade LRU Cache in ~15 lines of code:\r
class LruMemoryCache<K, V> extends LinkedHashMap<K, V> {\r
    private final int maxCapacity;\r
\r
    public LruMemoryCache(int maxCapacity) {\r
        // accessOrder = true enables LRU access tracking:\r
        super(maxCapacity, 0.75f, true);\r
        this.maxCapacity = maxCapacity;\r
    }\r
\r
    // JDK Hook: Invoked by put() and putAll() after inserting a new entry:\r
    @Override\r
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {\r
        // If current size exceeds maxCapacity, automatically evict eldest entry at HEAD!\r
        boolean shouldEvict = size() > maxCapacity;\r
        if (shouldEvict) {\r
            System.out.printf("    [LRU EVICTION HOOK] Evicting least recently used entry: %s=%s%n",\r
                    eldest.getKey(), eldest.getValue());\r
        }\r
        return shouldEvict;\r
    }\r
}\r
\r
public class LinkedHashMapLruCacheImplementationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 17: PRODUCTION LRU CACHE WITH LinkedHashMap - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Create LRU Cache bounded to MAX 3 items:\r
        LruMemoryCache<String, String> studentCache = new LruMemoryCache<>(3);\r
\r
        System.out.println(">>> 1. Ingesting 3 Items into Cache (Capacity 3):");\r
        studentCache.put("STU-1", "Swadeep");\r
        studentCache.put("STU-2", "Tuhina");\r
        studentCache.put("STU-3", "Abhronila");\r
        System.out.println("  Cache State : " + studentCache);\r
\r
        System.out.println("\\n>>> 2. Accessing 'STU-1' (Makes STU-1 Most Recently Used):");\r
        studentCache.get("STU-1");\r
        System.out.println("  Cache State : " + studentCache + " ('STU-2' is now Eldest/LRU)");\r
\r
        System.out.println("\\n>>> 3. Ingesting 4th Item 'STU-4' (Triggers Eviction of 'STU-2'):");\r
        studentCache.put("STU-4", "Debangshu");\r
        System.out.println("  Final Cache State : " + studentCache + " (STU-2 was evicted cleanly!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 17: LRU Cache Implementation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LRU CACHE RECIPE:\r
   - Extends 'LinkedHashMap<K, V>'.\r
   - Constructor: 'super(capacity, 0.75f, true)'.\r
   - Override: 'protected boolean removeEldestEntry(Map.Entry eldest)'.\r
   - Return 'size() > maxCapacity'.\r
   - O(1) reads, O(1) writes, automatic O(1) eviction!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do you implement a fixed-size LRU (Least Recently Used) cache in Java using 'LinkedHashMap'?",shortAnswer:"1. Subclass 'LinkedHashMap' and pass 'accessOrder = true' to the super constructor ('super(capacity, 0.75f, true)'). 2. Override the protected hook method 'removeEldestEntry(Map.Entry eldest)' to return 'size() > maxCapacity'. Whenever a new entry is added that exceeds the maximum capacity, LinkedHashMap automatically removes the eldest (least recently used) entry at the head.",explanation:"Classic enterprise interview pattern and real-world caching idiom.",hint:"Subclass LinkedHashMap with accessOrder=true and override removeEldestEntry returning size() > maxCapacity.",level:"Advanced",codeExample:"protected boolean removeEldestEntry(Map.Entry<K,V> eldest) { return size() > maxCapacity; }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"LRU Cache Pattern"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Implementing an LRU Cache Using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"LinkedHashMap"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"removeEldestEntry()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct production memory caches: overriding ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"removeEldestEntry"})," on access-ordered LinkedHashMaps to build bounded O(1) LRU eviction pipelines."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"LinkedHashMapLruCacheImplementationDemo.java",highlightLines:[7,10,11,15,16,20,21,38,39,44,45]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"LRU Cache FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 007_005 Topic 17: LRU Cache Implementation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic17_lru_cache_implementation_note.txt"})}),e.jsx(r,{note:"If an interviewer asks: 'Write an LRU Cache in Java in 5 minutes', write this exact class! Subclass LinkedHashMap, pass 'true' for accessOrder, and override 'removeEldestEntry(eldest) { return size() > maxCapacity; }'! It is flawless! — Sukanta Hui"})]})}export{y as default};
