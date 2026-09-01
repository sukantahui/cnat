import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 2: Static Collection Leaks - Unbounded Maps & Eviction Policies\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
import java.util.LinkedHashMap;\r
import java.util.Map;\r
\r
public class StaticCollectionLeaksDemo {\r
\r
    // 1. LEAK ANTIPATTERN: Unbounded Static Map (Grows infinitely)\r
    // private static final Map<String, Object> UNBOUNDED_LEAK = new HashMap<>();\r
\r
    // 2. PRODUCTION FIX: Bounded LRU (Least-Recently-Used) Cache\r
    public static class BoundedLruCache<K, V> extends LinkedHashMap<K, V> {\r
        private final int maxEntries;\r
\r
        public BoundedLruCache(int maxEntries) {\r
            super(maxEntries, 0.75f, true); // true = access-order\r
            this.maxEntries = maxEntries;\r
        }\r
\r
        @Override\r
        protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {\r
            return size() > maxEntries; // Evict eldest entry when limit is exceeded!\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: STATIC COLLECTION LEAKS & LRU CACHES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BoundedLruCache<Integer, String> studentCache = new BoundedLruCache<>(3);\r
\r
        System.out.println(">>> 1. Adding 3 students to bounded LRU cache (Limit = 3):");\r
        studentCache.put(101, "Swadeep Paul");\r
        studentCache.put(102, "Tuhina Das");\r
        studentCache.put(103, "Abhronila Das");\r
        System.out.println("  - Cache contents: " + studentCache);\r
\r
        System.out.println("\\n>>> 2. Accessing student 101 (Promoting it to most-recently used):");\r
        studentCache.get(101);\r
\r
        System.out.println("\\n>>> 3. Inserting student 104 (Exceeds capacity -> Evicts eldest entry 102!):");\r
        studentCache.put(104, "Debangshu Mukherjee");\r
        System.out.println("  - Cache contents after eviction: " + studentCache);\r
        System.out.println("  - Notice student 102 was safely evicted! Zero memory leak! ✅");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 2: Static Collection Leaks\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY STATIC COLLECTIONS LEAK:\r
   - Static fields are rooted in the loaded Class object in Metaspace (permanent GC Root).\r
   - Any object placed into a static Collection will NEVER be collected until explicitly removed.\r
\r
2. PRODUCTION REMEDIES:\r
   - Bounded Collections with LRU eviction ('LinkedHashMap.removeEldestEntry()').\r
   - 'WeakHashMap' for metadata caching (entries are collected when keys lose strong references).\r
   - Production caching libraries: Caffeine Cache, Guava Cache, Ehcache with TTL/TTI expiration.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"How does WeakHashMap help prevent memory leaks when used as a cache?",shortAnswer:"WeakHashMap stores its keys using WeakReferences. When a key object has no other strong references in the application, the GC reclaims the key, and WeakHashMap automatically purges the associated map entry.",explanation:"Ideal for associating metadata with objects without pinning them in memory.",hint:"Keys are WeakReferences and get collected when no strong references remain.",level:"Intermediate",codeExample:"Map<Student, Metadata> cache = new WeakHashMap<>();"},{question:"How can LinkedHashMap be configured to function as a bounded LRU cache in standard Java?",shortAnswer:"By instantiating LinkedHashMap with accessOrder = true and overriding the protected boolean removeEldestEntry(Map.Entry eldest) method to return true when size() exceeds the maximum allowed limit.",explanation:"Built-in standard library LRU cache mechanism.",hint:"Set accessOrder=true and override removeEldestEntry().",level:"Intermediate",codeExample:"protected boolean removeEldestEntry(Entry e) { return size() > max; }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Static Collection Leaks: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Unbounded Maps & Eviction Policies"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The #1 production leak: how static List and Map collections grow forever, and how to fix them using WeakHashMap, Caffeine, or LRU eviction."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"StaticCollectionLeaksDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Memory Profiling & OOM FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 010_006 Topic 2: Static Collection Leaks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic2_static_collection_leaks_note.txt"})}),e.jsx(r,{note:"Never use a bare static HashMap as a cache in production! Without an eviction policy or maximum size limit, it will grow forever until your server crashes with an OOM! Use WeakHashMap or Caffeine Cache! — Sukanta Hui"})]})}export{y as default};
