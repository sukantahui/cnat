import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 13: Sequenced Collections (Java 21+ Standard - JEP 431) - Modern Java Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
import java.util.ArrayList;\r
import java.util.LinkedHashMap;\r
import java.util.LinkedHashSet;\r
import java.util.List;\r
import java.util.SequencedCollection;\r
import java.util.SequencedMap;\r
import java.util.SequencedSet;\r
\r
public class SequencedCollectionsCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: SEQUENCED COLLECTIONS (JAVA 21) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. SequencedCollection on List (getFirst(), getLast(), addFirst(), addLast(), reversed())\r
        SequencedCollection<String> studentList = new ArrayList<>(List.of("Swadeep Paul", "Tuhina Das", "Abhronila Das"));\r
        studentList.addFirst("Anish Dey (Head)");\r
        studentList.addLast("Priya Sharma (Tail)");\r
\r
        System.out.println("1. SequencedCollection (List):");\r
        System.out.println("   - Full List     : " + studentList);\r
        System.out.println("   - getFirst()    : " + studentList.getFirst());\r
        System.out.println("   - getLast()     : " + studentList.getLast());\r
        System.out.println("   - reversed()    : " + studentList.reversed());\r
\r
        // 2. SequencedSet on LinkedHashSet\r
        SequencedSet<String> centerSet = new LinkedHashSet<>(List.of("Barrackpore", "Naihati", "Shyamnagar"));\r
        System.out.println("\\n2. SequencedSet (LinkedHashSet):");\r
        System.out.println("   - First Center  : " + centerSet.getFirst());\r
        System.out.println("   - Last Center   : " + centerSet.getLast());\r
        System.out.println("   - Reversed View : " + centerSet.reversed());\r
\r
        // 3. SequencedMap on LinkedHashMap (firstEntry(), lastEntry(), reversed())\r
        SequencedMap<Integer, String> studentMap = new LinkedHashMap<>();\r
        studentMap.put(101, "Swadeep");\r
        studentMap.put(102, "Tuhina");\r
        studentMap.put(103, "Abhronila");\r
\r
        System.out.println("\\n3. SequencedMap (LinkedHashMap):");\r
        System.out.println("   - firstEntry()  : " + studentMap.firstEntry());\r
        System.out.println("   - lastEntry()   : " + studentMap.lastEntry());\r
        System.out.println("   - reversed()    : " + studentMap.reversed());\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" SEGMENT 9 FULLY COMPLETE: FUNCTIONAL & MODERN JAVA (8 -> 21) MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 13: Sequenced Collections (Java 21 JEP 431) Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE NEW INTERFACES (Java 21 JEP 431):\r
   - 'SequencedCollection<E>': Extends 'Collection<E>'.\r
     * 'addFirst(E)', 'addLast(E)'\r
     * 'getFirst()', 'getLast()'\r
     * 'removeFirst()', 'removeLast()'\r
     * 'SequencedCollection<E> reversed()' → Reverse-ordered view.\r
   - 'SequencedSet<E>': Extends 'Set<E>, SequencedCollection<E>'.\r
   - 'SequencedMap<K, V>': Extends 'Map<K, V>'.\r
     * 'firstEntry()', 'lastEntry()', 'pollFirstEntry()', 'pollLastEntry()', 'reversed()'.\r
\r
2. UNIFIED ENCOUNTER ORDER API:\r
   - Unifies List, Deque, LinkedHashSet, SortedSet, LinkedHashMap under a single standard contract.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What problem was solved by introducing Sequenced Collections in Java 21 (JEP 431)?",shortAnswer:"Prior to Java 21, the Java Collections Framework lacked a unified interface for collections with a defined encounter order, forcing developers to use different, awkward APIs (list.get(0), deque.getFirst(), set.iterator().next()) for the same conceptual operation.",explanation:"SequencedCollection unifies first/last/reversed access across Lists, Sets, and Maps.",hint:"Unifies first, last, and reverse-order access across all ordered collection types.",level:"Intermediate",codeExample:"list.getFirst(); set.getLast(); map.firstEntry(); map.reversed();"},{question:"Does calling collection.reversed() in Java 21 create a new copy of the collection?",shortAnswer:"No. reversed() returns a lightweight, zero-copy reverse-ordered view of the original collection. Mutations on the reversed view reflect in the original collection and vice-versa.",explanation:"Highly memory and performance efficient.",hint:"Returns a zero-copy reverse-ordered view.",level:"Intermediate",codeExample:"SequencedCollection<String> rev = list.reversed(); // Zero copy view"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Sequenced Collections: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Unified First/Last APIs (Java 21 JEP 431)"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Fixing a 25-year collection omission: SequencedCollection, SequencedSet, SequencedMap with getFirst(), getLast(), addFirst(), and reversed()."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"SequencedCollectionsCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Modern Java Features FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 009_009 Topic 13: Sequenced Collections Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic13_sequenced_collections_capstone_note.txt"})}),e.jsx(a,{note:"Before Java 21, getting the first element of a List was list.get(0), of a Deque was deque.getFirst(), and of a LinkedHashSet required iterator().next()! Java 21 solved this 25-year headache with SequencedCollection: list.getFirst(), list.getLast(), and list.reversed()! — Sukanta Hui"})]})}export{x as default};
