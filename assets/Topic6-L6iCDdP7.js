import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 6: 1. java.util.List: Ordered Zero-Indexed Sequence & Duplicate Permissibility\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class ListInterfaceContractBehaviorDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: java.util.List<E> CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentRankings = new ArrayList<>();\r
\r
        // 1. Positional Insertion:\r
        studentRankings.add("Swadeep Paul (Rank 1)");\r
        studentRankings.add("Tuhina Das (Rank 2)");\r
        studentRankings.add("Abhronila Das (Rank 3)");\r
\r
        // 2. Duplicate Permissibility:\r
        studentRankings.add("Swadeep Paul (Rank 1)"); // Legal duplicate!\r
\r
        // 3. Index-Based Insertion & Retrieval:\r
        studentRankings.add(1, "Debangshu Mukherjee (New Rank 2)"); // Shifts existing elements right!\r
        String rankZero = studentRankings.get(0);\r
        String lastElement = studentRankings.get(studentRankings.size() - 1);\r
\r
        System.out.println(">>> 1. List Inspection (Indexed Order Preserved):");\r
        for (int i = 0; i < studentRankings.size(); i++) {\r
            System.out.printf("  Index [%d] : %s%n", i, studentRankings.get(i));\r
        }\r
\r
        // 4. Index-Based Search (indexOf / lastIndexOf):\r
        System.out.println("\\n>>> 2. Positional Search:");\r
        System.out.println("  First Index of 'Swadeep Paul (Rank 1)' : " + studentRankings.indexOf("Swadeep Paul (Rank 1)"));\r
        System.out.println("  Last Index of 'Swadeep Paul (Rank 1)'  : " + studentRankings.lastIndexOf("Swadeep Paul (Rank 1)"));\r
\r
        System.out.println("\\n>>> CORE PROPERTIES OF java.util.List<E>:");\r
        System.out.println("  1. Strict Ordering : Insertion order is permanently preserved.");\r
        System.out.println("  2. Zero-Indexed    : Elements accessed by integer index 'get(int)' and 'set(int, E)'.");\r
        System.out.println("  3. Duplicate Safe  : Any number of duplicate and null elements are allowed.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 6: java.util.List Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LIST INTERFACE CONTRACT:\r
   - Extends 'Collection<E>'.\r
   - Zero-indexed positional access: 'get(i)', 'set(i, e)', 'add(i, e)'.\r
   - Preserves strict insertion ordering.\r
   - Permits duplicate elements and multiple nulls.\r
   - Offers 'indexOf()', 'lastIndexOf()', 'subList()', 'listIterator()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What distinct capabilities does 'java.util.List<E>' add on top of the base 'java.util.Collection<E>' interface?",shortAnswer:"1. 'Positional Index Access': Methods like 'get(int index)', 'set(int index, E element)', 'add(int index, E element)', and 'remove(int index)'. 2. 'Search by Equality': 'indexOf(Object)' and 'lastIndexOf(Object)'. 3. 'Bidirectional Traversal': 'listIterator()' returning a 'ListIterator' supporting previous(), hasPrevious(), and in-place replacement. 4. 'Sub-List Views': 'subList(fromIndex, toIndex)'.",explanation:"The core sequence contract defining List behavior in Java.",hint:"Adds zero-indexed positional access (get/set/add by index), search (indexOf), subList views, and ListIterator.",level:"Beginner",codeExample:'list.add(0, "First"); String s = list.get(0); int pos = list.indexOf("First");'}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"List Contract"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["1. ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.List"}),": Ordered, Indexed Sequence & Duplicate Permissibility"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master linear sequence semantics: utilizing zero-based index access (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"get()"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"set()"}),"), duplicate permissibility, and positional sub-list manipulation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ListInterfaceContractBehaviorDemo.java",highlightLines:[7,10,16,17,21,24,25,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"List Interface FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:r,title:"Module 007_001 Topic 6: java.util.List Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic6_list_interface_note.txt"})}),e.jsx(a,{note:"A List is like a numbered notebook! You can open any page by index ('list.get(2)'), you can have duplicate names on different pages, and the order never changes unless you sort it! — Sukanta Hui"})]})}export{f as default};
