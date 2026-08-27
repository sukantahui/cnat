import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 1: java.util.HashSet Internal Mechanics: Backed Internally by a HashMap Instance\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.HashMap;\r
import java.util.HashSet;\r
\r
public class HashSetHashMapBackingInternalsDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: HashSet BACKED BY HashMap INTERNALS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        HashSet<String> studentSet = new HashSet<>();\r
        studentSet.add("Swadeep Paul (Barrackpore)");\r
        studentSet.add("Tuhina Das (Naihati)");\r
\r
        // Inspecting private transient HashMap<E,Object> map field inside HashSet:\r
        Field mapField = HashSet.class.getDeclaredField("map");\r
        mapField.setAccessible(true);\r
        HashMap<?, ?> internalMap = (HashMap<?, ?>) mapField.get(studentSet);\r
\r
        System.out.println(">>> 1. Reflecting Inside HashSet's Private State:");\r
        System.out.println("  HashSet Class          : " + studentSet.getClass().getName());\r
        System.out.println("  Internal Backing Object: " + internalMap.getClass().getName());\r
        System.out.println("  Internal Map Size      : " + internalMap.size());\r
        System.out.println("  Internal Map Entries   : " + internalMap);\r
\r
        System.out.println("\\n>>> HOW HashSet ACTUALLY WORKS UNDER THE HOOD:");\r
        System.out.println("  - A 'HashSet' is NOT a separate data structure at all!");\r
        System.out.println("  - In JDK source code: 'private transient HashMap<E,Object> map;'");\r
        System.out.println("  - When you call 'hashSet.add(e)', it literally calls: 'map.put(e, PRESENT) == null'!");\r
        System.out.println("  - Your set elements become the KEYS of the internal HashMap!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 1: HashSet Backing HashMap\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HASHSET INTERNALS:\r
   - Backed by 'private transient HashMap<E, Object> map;'.\r
   - 'set.add(e)' &rarr; calls 'map.put(e, PRESENT)'.\r
   - Set elements are stored as KEYS in the internal HashMap.\r
   - Reuses HashMap's hash bucket and red-black tree architecture.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What underlying data structure is used by 'java.util.HashSet' internally to store elements?",shortAnswer:"'java.util.HashSet' is backed internally by an instance of 'java.util.HashMap'. In the JDK source code, HashSet declares 'private transient HashMap<E,Object> map;'. Every element added to the HashSet is stored as a KEY in the backing HashMap.",explanation:"Classic architectural reuse pattern in the Java standard library.",hint:"HashSet is backed internally by a HashMap where set elements serve as map keys.",level:"Intermediate",codeExample:"public boolean add(E e) { return map.put(e, PRESENT) == null; }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"HashMap Backing"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.HashSet"})," Internal Mechanics: Backed Internally by a ",e.jsx("code",{className:"text-purple-400 font-mono",children:"HashMap"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace internal JDK source mechanics: inspecting the private ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"map"})," field to understand how HashSet delegates all storage and uniqueness logic to HashMap."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"HashSetHashMapBackingInternalsDemo.java",highlightLines:[7,10,16,17,20,21,22,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"HashSet Backing FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:l,title:"Module 007_003 Topic 1: HashSet Backing HashMap",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic1_hashset_backing_hashmap_note.txt"})}),e.jsx(s,{note:"Here is one of Java's best-kept secrets: HashSet is not a unique data structure! It is literally just a HashMap in disguise, where your elements are the keys and a dummy dummy object called PRESENT is the value! — Sukanta Hui"})]})}export{x as default};
