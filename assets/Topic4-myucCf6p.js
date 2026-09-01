import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 4: Creating Streams from Java Collections (List, Set, Map)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.HashMap;\r
import java.util.HashSet;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Set;\r
\r
public class StreamsFromCollectionsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: STREAMS FROM COLLECTIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Streaming a List\r
        List<String> studentList = List.of("Swadeep", "Tuhina", "Abhronila", "Debangshu");\r
        System.out.println("1. Streaming List (Filter >= 7 chars):");\r
        studentList.stream()\r
            .filter(name -> name.length() >= 7)\r
            .forEach(name -> System.out.println("   - " + name));\r
\r
        // 2. Streaming a Set (Deduplicated, Unordered)\r
        Set<String> centerSet = new HashSet<>(List.of("Barrackpore", "Naihati", "Shyamnagar", "Barrackpore"));\r
        System.out.println("\\n2. Streaming Set (Sorted uppercase):");\r
        centerSet.stream()\r
            .sorted()\r
            .map(String::toUpperCase)\r
            .forEach(center -> System.out.println("   - " + center));\r
\r
        // 3. Streaming a Map (via entrySet(), keySet(), values())\r
        Map<String, Double> scoreMap = new HashMap<>();\r
        scoreMap.put("Swadeep Paul", 92.5);\r
        scoreMap.put("Tuhina Das", 95.0);\r
        scoreMap.put("Abhronila Das", 89.0);\r
\r
        System.out.println("\\n3. Streaming Map via entrySet() (Distinction >= 90.0):");\r
        scoreMap.entrySet().stream()\r
            .filter(entry -> entry.getValue() >= 90.0)\r
            .forEach(entry -> System.out.println("   - " + entry.getKey() + " scored: " + entry.getValue() + "%"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 4: Creating Streams from Collections\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COLLECTION INTERFACE INTEGRATION:\r
   - Java 8 added default methods to 'java.util.Collection<E>':\r
     1. 'default Stream<E> stream()' → Returns a sequential stream.\r
     2. 'default Stream<E> parallelStream()' → Returns a parallel stream backed by Common ForkJoinPool.\r
\r
2. STREAMING DIFFERENT COLLECTION TYPES:\r
   - List<T>: 'list.stream()' (Preserves encounter order).\r
   - Set<T>: 'set.stream()' (Unordered, deduplicated).\r
   - Queue<T>: 'queue.stream()' (Streams elements without polling/removing).\r
   - Map<K, V>:\r
     * 'map.entrySet().stream()' → Stream<Map.Entry<K, V>> (Most useful for key+value logic).\r
     * 'map.keySet().stream()' → Stream<K>.\r
     * 'map.values().stream()' → Stream<V>.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does Map<K,V> not have a direct .stream() method?",shortAnswer:"Map is not a sub-interface of java.util.Collection because it models key-value pair associations rather than a single sequence of elements. To stream a map, developers choose between map.entrySet().stream(), map.keySet().stream(), or map.values().stream().",explanation:"The separation allows clear intent regarding whether keys, values, or entries are being processed.",hint:"Map does not extend Collection; use entrySet(), keySet(), or values().",level:"Beginner",codeExample:"map.entrySet().stream().filter(e → e.getValue() > 50).forEach(e → System.out.println(e.getKey()));"},{question:"Does calling list.stream() modify or lock the underlying list?",shortAnswer:"No, calling list.stream() creates a transient Spliterator over the list without modifying, copying, or locking the list. However, structurally modifying the list while streaming will trigger a ConcurrentModificationException.",explanation:"Non-interference is a core rule of the Stream API.",hint:"Stream does not copy or lock the collection, but concurrent modification must be avoided.",level:"Intermediate",codeExample:"// Avoid modifying source during stream execution:\\nlist.stream().forEach(x → list.add('new')); // Throws ConcurrentModificationException!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating Streams from ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collections"}),": List, Set & Map Entries"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Harnessing the Collection.stream() default method across Java Collections Framework data structures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StreamsFromCollectionsDemo.java",highlightLines:[18,25,31,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Stream API Pipeline FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 009_004 Topic 4: Streams from Collections",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic4_streams_from_collections_note.txt"})}),e.jsx(n,{note:"Remember that Map does NOT implement Collection directly. To stream a Map, you must call map.keySet().stream(), map.values().stream(), or best of all, map.entrySet().stream()! — Sukanta Hui"})]})}export{x as default};
