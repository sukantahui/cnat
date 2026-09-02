import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 9: 4. java.util.Map: Key-Value Dictionaries & Independent Hierarchy Contract\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class MapInterfaceContractBehaviorDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: java.util.Map<K, V> CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Map<String, String> studentCourses = new HashMap<>();\r
\r
        // 1. put() and Overwriting on Duplicate Key:\r
        studentCourses.put("STU-101", "Java Full Stack (Barrackpore)");\r
        studentCourses.put("STU-102", "Python Data Science (Naihati)");\r
        studentCourses.put("STU-103", "GST & Taxation (Shyamnagar)");\r
\r
        // Putting with existing key replaces value and returns old value:\r
        String oldCourse = studentCourses.put("STU-101", "Spring Boot & Microservices (Barrackpore)");\r
\r
        System.out.println(">>> 1. Map Key-Value Ingestion:");\r
        System.out.println("  Previous Course for STU-101 : " + oldCourse);\r
        System.out.println("  Updated Course for STU-101  : " + studentCourses.get("STU-101"));\r
\r
        // 2. Querying Keys and Values:\r
        System.out.println("\\n>>> 2. Map Queries:");\r
        System.out.println("  Contains Key 'STU-102'?   : " + studentCourses.containsKey("STU-102"));\r
        System.out.println("  getOrDefault for STU-999  : " + studentCourses.getOrDefault("STU-999", "Unregistered"));\r
\r
        // 3. The 3 Collection Views of a Map:\r
        System.out.println("\\n>>> 3. The 3 Collection Views of java.util.Map:");\r
        System.out.println("  1. Key Set   (keySet())   [Set<K>]        : " + studentCourses.keySet());\r
        System.out.println("  2. Values    (values())   [Collection<V>] : " + studentCourses.values());\r
        System.out.println("  3. Entries   (entrySet()) [Set<Entry>]    : " + studentCourses.entrySet());\r
\r
        System.out.println("\\n>>> Iterating over Map.Entry pairs:");\r
        for (Map.Entry<String, String> entry : studentCourses.entrySet()) {\r
            System.out.printf("  Roll ID: %-8s | Course: %s%n", entry.getKey(), entry.getValue());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 9: java.util.Map Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MAP INTERFACE CONTRACT:\r
   - Key-Value pairs with strictly unique keys.\r
   - Independent hierarchy from 'java.util.Collection'.\r
   - 'put(K, V)', 'get(K)', 'getOrDefault(K, default)'.\r
   - 3 Collection Views: keySet(), values(), entrySet().\r
   - 'Map.Entry<K, V>' for fast key-value traversal.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What are the 3 distinct Collection Views provided by the 'java.util.Map' interface to bridge Maps with Collections?",shortAnswer:"1. 'keySet()': returns a 'Set<K>' view containing all unique keys. 2. 'values()': returns a 'Collection<V>' view containing all values (which may have duplicates). 3. 'entrySet()': returns a 'Set<Map.Entry<K, V>>' view containing key-value pair objects. All 3 views are backed directly by the underlying Map.",explanation:"How Maps interface seamlessly with Collection algorithms and iteration.",hint:"keySet() (Set of keys), values() (Collection of values), and entrySet() (Set of Map.Entry pairs).",level:"Intermediate",codeExample:"for (Map.Entry<K, V> e : map.entrySet()) { K k = e.getKey(); V v = e.getValue(); }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Map Contract"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["4. ",e.jsx("code",{className:"text-purple-400 font-mono",children:"java.util.Map"}),": Key-Value Pairs, Unique Keys & Collection Views"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master dictionary mappings: utilizing key-value association, fast ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"O(1)"})," lookup, and traversing Map collection views (",e.jsx("code",{className:"text-sky-300 font-mono",children:"keySet"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"values"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"entrySet"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"MapInterfaceContractBehaviorDemo.java",highlightLines:[7,10,16,17,18,21,31,32,33,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Map Interface FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 007_001 Topic 9: java.util.Map Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic9_map_interface_note.txt"})}),e.jsx(a,{note:"Whenever you iterate over a Map, always use 'map.entrySet()' instead of looping through 'map.keySet()' and calling 'map.get(key)'! 'entrySet()' is twice as fast because it gives you both key and value together in one single lookup! — Sukanta Hui"})]})}export{x as default};
