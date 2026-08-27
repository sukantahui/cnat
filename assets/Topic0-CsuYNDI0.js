import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 007_002: List Implementations & ArrayList Internals\r
 * Topic 0: The java.util.List Interface: Positional Access & Bidirectional ListIterator\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.ListIterator;\r
\r
public class ListInterfacePositionalAccessDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: java.util.List & ListIterator - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentRankings = new ArrayList<>();\r
        studentRankings.add("Swadeep Paul");\r
        studentRankings.add("Tuhina Das");\r
        studentRankings.add("Abhronila Das");\r
        studentRankings.add("Debangshu Mukherjee");\r
\r
        // 1. Positional Index Modification:\r
        studentRankings.set(1, "Tuhina Das (Gold Medalist)");\r
        System.out.println(">>> 1. Positional Update at Index 1:");\r
        System.out.println("  " + studentRankings);\r
\r
        // 2. Bidirectional Traversal with ListIterator:\r
        System.out.println("\\n>>> 2. Reverse Traversal with ListIterator (hasPrevious / previous):");\r
        ListIterator<String> listIter = studentRankings.listIterator(studentRankings.size()); // Start at end\r
        while (listIter.hasPrevious()) {\r
            int prevIndex = listIter.previousIndex();\r
            String student = listIter.previous();\r
            System.out.printf("  Index [%d] : %s%n", prevIndex, student);\r
        }\r
\r
        // 3. SubList Range View:\r
        List<String> topTwo = studentRankings.subList(0, 2);\r
        System.out.println("\\n>>> 3. SubList View (fromIndex 0 to 2): " + topTwo);\r
\r
        System.out.println("\\n>>> ADVANCED ListIterator CAPABILITIES:");\r
        System.out.println("  1. Bidirectional Movement: 'next()', 'previous()', 'hasNext()', 'hasPrevious()'.");\r
        System.out.println("  2. Index Awareness       : 'nextIndex()' and 'previousIndex()'.");\r
        System.out.println("  3. In-Flight Mutation     : 'set(E)' (replace current) and 'add(E)' (insert at cursor).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_002: List Implementations & ArrayList Internals\r
Topic 0: List Interface & ListIterator\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LIST ITERATOR ESSENTIALS:\r
   - Bidirectional navigation: 'next()' / 'previous()'.\r
   - Index introspection: 'nextIndex()' / 'previousIndex()'.\r
   - In-place mutation: 'set(E)' replaces element, 'add(E)' inserts.\r
   - Initialized at any index: 'list.listIterator(size)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What capabilities does 'ListIterator<E>' provide over a standard 'Iterator<E>' in Java?",shortAnswer:"1. 'Bidirectional Traversal': Can navigate backward using 'hasPrevious()' and 'previous()'. 2. 'Index Reporting': Provides 'nextIndex()' and 'previousIndex()'. 3. 'Element Modification': Can replace elements with 'set(E)' and insert elements at the cursor with 'add(E)' (standard Iterator only allows remove()). 4. 'Custom Start Index': Can start traversal at any index via 'list.listIterator(int index)'.",explanation:"Core list navigation contract unique to java.util.List implementations.",hint:"Supports bidirectional traversal (previous), index reporting, in-flight set/add, and arbitrary starting positions.",level:"Intermediate",codeExample:"ListIterator<String> it = list.listIterator(); while(it.hasNext()) { it.set(it.next().toUpperCase()); }"}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_002 · Topic 0"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ListIterator Deep Dive"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.List"})," Interface: Positional Access & Bidirectional ",t.jsx("code",{className:"text-sky-400 font-mono",children:"ListIterator"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master advanced list navigation: utilizing bidirectional traversal (",t.jsx("code",{className:"text-emerald-300 font-mono",children:"hasPrevious()"}),"), index-aware cursors, and in-flight modification with ListIterator."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"ListInterfacePositionalAccessDemo.java",highlightLines:[7,10,16,17,21,25,26,27,33]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"ListIterator FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:s,title:"Module 007_002 Topic 0: List Interface & ListIterator",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_002_topic0_list_interface_listiterator_note.txt"})}),t.jsx(a,{note:"Standard 'Iterator' can only move forward, but 'ListIterator' can move backward and forward like a shuttle! It also lets you replace items with 'set()' while walking the list! — Sukanta Hui"})]})}export{h as default};
