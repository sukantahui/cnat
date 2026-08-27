import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as o}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const l=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 1: Basic Collectors - toList(), toSet(), toCollection(), toUnmodifiableList()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.LinkedList;\r
import java.util.List;\r
import java.util.Set;\r
import java.util.TreeSet;\r
import java.util.stream.Collectors;\r
\r
public class BasicCollectorsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: BASIC COLLECTORS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> rawCenters = List.of(\r
            "Barrackpore", "Naihati", "Shyamnagar", "Barrackpore", "Ichapur", "Naihati"\r
        );\r
\r
        // 1. Collectors.toList() (Standard mutable List)\r
        List<String> listResult = rawCenters.stream()\r
            .collect(Collectors.toList());\r
        System.out.println("1. Collectors.toList(): " + listResult);\r
\r
        // 2. Collectors.toSet() (Deduplicated HashSet)\r
        Set<String> setResult = rawCenters.stream()\r
            .collect(Collectors.toSet());\r
        System.out.println("2. Collectors.toSet() (Unique): " + setResult);\r
\r
        // 3. Collectors.toCollection(TreeSet::new) (Sorted, custom collection type)\r
        TreeSet<String> sortedSet = rawCenters.stream()\r
            .collect(Collectors.toCollection(TreeSet::new));\r
        System.out.println("3. toCollection(TreeSet::new) (Sorted): " + sortedSet);\r
\r
        // 4. Collectors.toCollection(LinkedList::new)\r
        LinkedList<String> linkedList = rawCenters.stream()\r
            .collect(Collectors.toCollection(LinkedList::new));\r
        System.out.println("4. toCollection(LinkedList::new): " + linkedList);\r
\r
        // 5. Collectors.toUnmodifiableList() (Java 10+) vs Stream.toList() (Java 16+)\r
        List<String> unmodifiableList = rawCenters.stream()\r
            .collect(Collectors.toUnmodifiableList());\r
        System.out.println("5. toUnmodifiableList() (Immutable): " + unmodifiableList);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,n=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 1: Basic Collectors\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE STANDARD COLLECTORS:\r
   - 'Collectors.toList()': Returns a List (implementation usually ArrayList; mutable).\r
   - 'Collectors.toSet()': Returns a Set (implementation usually HashSet; unordered, distinct).\r
   - 'Collectors.toCollection(Supplier<C> factory)': Collects into any custom Collection\r
     (e.g. 'TreeSet::new', 'LinkedList::new', 'ArrayDeque::new', 'CopyOnWriteArrayList::new').\r
\r
2. UNMODIFIABLE COLLECTORS:\r
   - 'Collectors.toUnmodifiableList()' (Java 10+): Returns an immutable list (throws UnsupportedOperationException on add/remove).\r
   - 'Collectors.toUnmodifiableSet()' (Java 10+).\r
   - 'Stream.toList()' (Java 16+): Direct syntax shortcut returning an unmodifiable list.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the difference between Stream.toList() (Java 16) and Collectors.toList()?",shortAnswer:"Stream.toList() returns an unmodifiable, lightweight list that does not allow nulls or mutations, whereas Collectors.toList() returns a standard mutable List (typically ArrayList) that allows element additions and modifications.",explanation:"Stream.toList() is also more memory efficient as it avoids intermediate Collector overhead.",hint:"Stream.toList() is immutable; Collectors.toList() produces a mutable list.",level:"Beginner",codeExample:"List<String> l1 = stream.toList(); // Immutable\\nList<String> l2 = stream.collect(Collectors.toList()); // Mutable"},{question:"How do you collect stream elements into a specific collection implementation like a TreeSet or LinkedList?",shortAnswer:"By using Collectors.toCollection(CollectionFactory::new), passing the constructor reference of the desired collection.",explanation:"Allows exact control over the underlying data structure.",hint:"Collectors.toCollection(TreeSet::new)",level:"Beginner",codeExample:"TreeSet<String> set = stream.collect(Collectors.toCollection(TreeSet::new));"}];function S(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 1"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Basic Collectors: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"toList(), toSet(), toCollection() & toUnmodifiableList()"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Harvesting stream results: mutable lists, unique sets, custom collections (TreeSet, LinkedList), and Java 10 unmodifiable collections."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:l,title:"BasicCollectorsDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(o,{title:"Collectors Framework FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:n,title:"Module 009_006 Topic 1: Basic Collectors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic1_basic_collectors_note.txt"})}),t.jsx(s,{note:"In modern Java 16+, stream.toList() provides a compact, unmodifiable list. If you need a mutable list, use Collectors.toList() or Collectors.toCollection(ArrayList::new)! — Sukanta Hui"})]})}export{S as default};
