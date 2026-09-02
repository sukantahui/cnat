import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as o}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 3: The Core Collection Interface: java.util.Collection<E> Contract\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Collection;\r
import java.util.HashSet;\r
\r
public class CoreCollectionInterfaceContractDemo {\r
\r
    // Polymorphic method operating on the universal 'Collection<E>' interface:\r
    public static <E> void displayCollectionStats(String label, Collection<E> collection) {\r
        System.out.println(">>> Collection: " + label);\r
        System.out.println("  Concrete Type : " + collection.getClass().getSimpleName());\r
        System.out.println("  Size (count)  : " + collection.size());\r
        System.out.println("  Is Empty?     : " + collection.isEmpty());\r
        System.out.println("  Elements      : " + collection);\r
        System.out.println("  ---------------------------------------------");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: java.util.Collection<E> CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Collection<String> listCollection = new ArrayList<>();\r
        listCollection.add("Swadeep Paul (Barrackpore)");\r
        listCollection.add("Tuhina Das (Naihati)");\r
        listCollection.add("Swadeep Paul (Barrackpore)"); // List permits duplicate!\r
\r
        Collection<String> setCollection = new HashSet<>(listCollection); // Set deduplicates!\r
\r
        displayCollectionStats("ArrayList as Collection", listCollection);\r
        displayCollectionStats("HashSet as Collection", setCollection);\r
\r
        System.out.println("\\n>>> WHY CODE TO THE 'Collection<E>' INTERFACE?");\r
        System.out.println("  1. High Reusability: Methods accepting 'Collection<E>' work on Lists, Sets, and Queues interchangeably.");\r
        System.out.println("  2. Loose Coupling: Callers can change concrete implementations (e.g. ArrayList -> TreeSet) without breaking downstream code.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 3: java.util.Collection Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COLLECTION INTERFACE CONTRACT:\r
   - Root of List, Set, and Queue hierarchies.\r
   - Extends 'Iterable<E>'.\r
   - Common API: size(), isEmpty(), contains(), add(), remove().\r
   - Principle: Program to 'Collection<E>' for maximum polymorphism.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"Why should utility methods accept 'Collection<E>' rather than specific concrete types like 'ArrayList<E>'?",shortAnswer:"Following the OOP principle 'Program to an interface, not an implementation'. Accepting 'Collection<E>' allows the method to operate polymorphically on ANY collection type (ArrayList, LinkedList, HashSet, TreeSet, PriorityQueue) without requiring overloaded methods or restrictive type constraints.",explanation:"Standard design pattern found throughout Java libraries and Spring Framework.",hint:"Enables polymorphic interoperability across Lists, Sets, and Queues without tight coupling.",level:"Beginner",codeExample:"public static <E> void print(Collection<E> c) { ... } // Accepts Lists, Sets, Queues"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Collection Contract"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Core Collection Interface: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Collection<E>"})," Contract"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply loose coupling principles: programming to the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"java.util.Collection"})," interface to build generic utilities that operate seamlessly across Lists, Sets, and Queues."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"CoreCollectionInterfaceContractDemo.java",highlightLines:[7,10,13,14,15,27,28,32,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{title:"Collection Interface FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:l,title:"Module 007_001 Topic 3: java.util.Collection Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic3_collection_interface_note.txt"})}),e.jsx(r,{note:"Always program to the interface! If you write 'void print(Collection<String> c)', your method can print an ArrayList today and a HashSet tomorrow without changing a single line of code! — Sukanta Hui"})]})}export{x as default};
