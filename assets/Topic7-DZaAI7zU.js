import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 7: 2. java.util.Set: Unique Elements, Duplicate Rejection & Mathematical Sets\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.HashSet;\r
import java.util.LinkedHashSet;\r
import java.util.Set;\r
import java.util.TreeSet;\r
\r
public class SetInterfaceContractBehaviorDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: java.util.Set<E> CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Duplicate Rejection Behavior:\r
        Set<String> uniqueStudents = new HashSet<>();\r
        boolean added1 = uniqueStudents.add("Swadeep Paul (Barrackpore)");\r
        boolean added2 = uniqueStudents.add("Tuhina Das (Naihati)");\r
        boolean addedDuplicate = uniqueStudents.add("Swadeep Paul (Barrackpore)"); // Returns false, duplicate rejected!\r
\r
        System.out.println(">>> 1. Set Insertion & Duplicate Rejection Results:");\r
        System.out.println("  Added Swadeep 1st time? : " + added1);\r
        System.out.println("  Added Tuhina?           : " + added2);\r
        System.out.println("  Added Swadeep 2nd time? : " + addedDuplicate + " (Duplicate REJECTED!)");\r
        System.out.println("  Final Set Elements      : " + uniqueStudents);\r
\r
        // 2. Comparing Set Flavors (HashSet vs LinkedHashSet vs TreeSet):\r
        Set<String> hashSet = new HashSet<>(Set.of("Naihati", "Barrackpore", "Shyamnagar", "Ichapur"));\r
        Set<String> linkedHashSet = new LinkedHashSet<>(Set.of("Naihati", "Barrackpore", "Shyamnagar", "Ichapur"));\r
        Set<String> treeSet = new TreeSet<>(Set.of("Naihati", "Barrackpore", "Shyamnagar", "Ichapur"));\r
\r
        System.out.println("\\n>>> 2. Set Implementation Ordering Comparison:");\r
        System.out.println("  HashSet       (O(1) Unordered)          : " + hashSet);\r
        System.out.println("  LinkedHashSet (Insertion Ordered)       : " + linkedHashSet);\r
        System.out.println("  TreeSet       (Sorted Natural Order)    : " + treeSet);\r
\r
        System.out.println("\\n>>> CORE PROPERTIES OF java.util.Set<E>:");\r
        System.out.println("  1. Strict Uniqueness : At most one null element; rejects duplicates via 'equals()' and 'hashCode()'.");\r
        System.out.println("  2. No Index Access   : Does not provide 'get(int index)' because elements have no numeric position.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 7: java.util.Set Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SET INTERFACE CONTRACT:\r
   - Extends 'Collection<E>'.\r
   - Strictly unique elements (no duplicates).\r
   - 'add(e)' returns false if element already exists.\r
   - HashSet: O(1) unordered.\r
   - LinkedHashSet: preserves insertion order.\r
   - TreeSet: sorted Red-Black tree order.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does 'java.util.Set<E>' detect and reject duplicate elements when calling 'set.add(element)'?",shortAnswer:"When calling 'set.add(e)', the Set implementation uses 'equals()' and 'hashCode()' (in HashSet/LinkedHashSet) or 'compareTo()/compare()' (in TreeSet). If an existing element 'e2' evaluates to '(e == null ? e2 == null : e.equals(e2))' or compare returns 0, the Set leaves the collection unmodified and returns 'false', guaranteeing strict uniqueness.",explanation:"Core contract of java.util.Set and Effective Java Item 10 & 11.",hint:"Uses hashCode() and equals() to check for equality; returns false if already present.",level:"Beginner",codeExample:'Set<String> s = new HashSet<>(); s.add("A"); boolean rejected = !s.add("A");'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Set Contract"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["2. ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Set"}),": Unordered/Ordered Unique Elements & Duplicate Rejection"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Enforce mathematical uniqueness: exploring duplicate rejection mechanics, ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"equals()"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"hashCode()"})," integration, and comparing HashSet, LinkedHashSet, and TreeSet."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"SetInterfaceContractBehaviorDemo.java",highlightLines:[7,10,16,17,18,19,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Set Interface FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 007_001 Topic 7: java.util.Set Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic7_set_interface_note.txt"})}),e.jsx(r,{note:"If you are storing emails, voter IDs, roll numbers, or usernames where duplicates must NEVER happen, use a Set! 'set.add()' returns false if the item already exists, making deduplication effortless! — Sukanta Hui"})]})}export{x as default};
