import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 2: The Root Interface: java.lang.Iterable<T> & forEach() Default Method\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Iterator;\r
import java.util.List;\r
\r
public class IterableInterfaceAndForEachDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: java.lang.Iterable<T> & forEach() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> branches = List.of("Barrackpore Central", "Naihati Center", "Shyamnagar Hub");\r
\r
        // 1. ITERATION STYLE 1: Enhanced For-Each Loop (Syntactic sugar for Iterable.iterator()):\r
        System.out.println(">>> 1. Enhanced For-Each Loop (Requires Iterable<T>):");\r
        for (String branch : branches) {\r
            System.out.println("  Branch: " + branch);\r
        }\r
\r
        // 2. ITERATION STYLE 2: Explicit Iterator Traversal:\r
        System.out.println("\\n>>> 2. Explicit Iterator Traversal (iterator()):");\r
        Iterator<String> iterator = branches.iterator();\r
        while (iterator.hasNext()) {\r
            System.out.println("  Iterator Next: " + iterator.next());\r
        }\r
\r
        // 3. ITERATION STYLE 3: Functional forEach() (Java 8 Default Method on Iterable):\r
        System.out.println("\\n>>> 3. Functional forEach() with Method Reference:");\r
        branches.forEach(b -> System.out.println("  Lambda Action: " + b));\r
\r
        System.out.println("\\n>>> THE CONTRACT OF java.lang.Iterable<T>:");\r
        System.out.println("  1. 'Iterator<T> iterator()' : Mandatory method returning an active iterator cursor.");\r
        System.out.println("  2. Enhanced For Loop       : Any custom class implementing Iterable<T> can be used in 'for (T item : myObject)'!");\r
        System.out.println("  3. 'default void forEach(Consumer<? super T> action)' : Integrated functional iteration.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 2: java.lang.Iterable Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ITERABLE ROOT CONTRACT:\r
   - Resides in 'java.lang' package.\r
   - Superinterface of 'java.util.Collection'.\r
   - Unlocks enhanced for-each loop: 'for (T x : collection)'.\r
   - 'default void forEach(Consumer<? super T> action)' since Java 8.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What capability does implementing 'java.lang.Iterable<T>' grant to a custom Java class?",shortAnswer:"Implementing 'java.lang.Iterable<T>' allows instances of your custom class to be used as the target of the enhanced for-each loop ('for (T item : myCustomClass)'). It requires overriding 'public Iterator<T> iterator()' and automatically inherits the functional 'forEach(Consumer)' default method introduced in Java 8.",explanation:"The root gateway to all collection iteration in the Java language.",hint:"Enables using instances directly in enhanced for-each loops and grants the forEach() method.",level:"Beginner",codeExample:"public class CustomBatch implements Iterable<Student> { public Iterator<Student> iterator() { ... } }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Root Interface"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Root Interface: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.lang.Iterable<T>"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"forEach()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master collection iteration roots: understanding how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Iterable<T>"})," powers enhanced for-each loops, iterator cursors, and Java 8 functional consumers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"IterableInterfaceAndForEachDemo.java",highlightLines:[7,10,18,19,20,25,26,27,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Iterable FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 007_001 Topic 2: java.lang.Iterable",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic2_iterable_interface_note.txt"})}),e.jsx(n,{note:"Any time you write 'for (String s : list)', Java is quietly calling 'list.iterator()' behind the scenes! By implementing 'Iterable<T>', you can make your own custom classes work in for-each loops too! — Sukanta Hui"})]})}export{f as default};
