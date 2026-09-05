import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
 * Topic 8: java.util.ListIterator: Bidirectional Traversal, Index Queries & Inline Mutations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.ListIterator;\r
\r
public class ListIteratorBidirectionalSuiteDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: java.util.ListIterator BIDIRECTIONAL SUITE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> branchRoute = new ArrayList<>(List.of("Barrackpore", "Naihati", "Shyamnagar"));\r
\r
        ListIterator<String> listIt = branchRoute.listIterator();\r
\r
        // 1. Forward Traversal:\r
        System.out.println(">>> 1. Forward Traversal (hasNext & nextIndex):");\r
        while (listIt.hasNext()) {\r
            int nextIdx = listIt.nextIndex();\r
            String station = listIt.next();\r
            System.out.printf("  Index %d: %s%n", nextIdx, station);\r
\r
            // Inline replacement via listIterator.set():\r
            if (station.equals("Naihati")) {\r
                listIt.set("Naihati Junction"); // Safely mutates current item!\r
            }\r
        }\r
\r
        // 2. Backward Traversal:\r
        System.out.println("\\n>>> 2. Backward Traversal (hasPrevious & previous):");\r
        while (listIt.hasPrevious()) {\r
            int prevIdx = listIt.previousIndex();\r
            String station = listIt.previous();\r
            System.out.printf("  Index %d: %s%n", prevIdx, station);\r
        }\r
\r
        // 3. Inline insertion via listIterator.add():\r
        listIt.add("Sealdah Central (Inserted at Head)");\r
\r
        System.out.println("\\n>>> 3. Final Route after set() and add():");\r
        System.out.println("  " + branchRoute);\r
\r
        System.out.println("\\n>>> EXCLUSIVE POWERS OF ListIterator<E> (LIST ONLY):");\r
        System.out.println("  1. Bidirectional : 'hasPrevious()' and 'previous()' for reverse navigation.");\r
        System.out.println("  2. Index Tracking: 'nextIndex()' and 'previousIndex()' return integer positions.");\r
        System.out.println("  3. Inline Replace: 'set(e)' replaces the last returned element.");\r
        System.out.println("  4. Inline Insert : 'add(e)' inserts an element before the cursor position.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
Topic 8: ListIterator Bidirectional Suite\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LISTITERATOR EXCLUSIVE POWERS:\r
   - Bidirectional: 'hasNext()/next()' and 'hasPrevious()/previous()'.\r
   - Index queries: 'nextIndex()' and 'previousIndex()'.\r
   - 'set(e)': replaces last element returned.\r
   - 'add(e)': inserts element into list at cursor position.\r
   - Available ONLY on 'List' implementations (ArrayList, LinkedList).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What capabilities does 'ListIterator' provide that are NOT available on the standard 'Iterator' interface?",shortAnswer:"1. 'Bidirectional Traversal': can walk backward using 'hasPrevious()' and 'previous()'. 2. 'Index Tracking': queries upcoming index positions via 'nextIndex()' and 'previousIndex()'. 3. 'Element Replacement': can replace the last returned element via 'set(element)'. 4. 'Inline Insertion': can insert a new element at cursor position via 'add(element)' without throwing CME. (Note: ListIterator is available only on List implementations).",explanation:"Specialized iterator for java.util.List implementations.",hint:"Adds backward traversal (previous), index tracking (nextIndex/prevIndex), and mutations (set/add).",level:"Intermediate",codeExample:"ListIterator<String> it = list.listIterator(); while(it.hasPrevious()) { it.previous(); }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_007 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ListIterator Suite"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"ListIterator"}),": Bidirectional Traversal, Index Queries & Inline Mutations"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master List-specific navigation: moving backward with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"previous()"}),", tracking cursor indexes, and performing inline ",e.jsx("code",{className:"text-sky-300 font-mono",children:"set()"})," replacements and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"add()"})," insertions."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ListIteratorBidirectionalSuiteDemo.java",highlightLines:[7,10,16,17,23,24,30,31,37,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"ListIterator FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 007_007 Topic 8: ListIterator Suite",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_007_topic8_listiterator_suite_note.txt"})}),e.jsx(a,{note:"Standard Iterator is a one-way street (forward only)! ListIterator is a two-way highway: you can drive forward, drive in reverse with 'hasPrevious()', check your index position, and even insert new items with 'it.add()'! — Sukanta Hui"})]})}export{h as default};
