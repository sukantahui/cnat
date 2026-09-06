import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 4: Fundamental Collection Methods: Comprehensive API Suite & removeIf()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Collection;\r
import java.util.List;\r
\r
public class FundamentalCollectionMethodsSuiteDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: FUNDAMENTAL Collection<E> METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Collection<String> trainees = new ArrayList<>();\r
\r
        // 1. add() and addAll():\r
        trainees.add("Swadeep Paul (Barrackpore)");\r
        trainees.add("Tuhina Das (Naihati)");\r
        trainees.addAll(List.of("Abhronila Das (Shyamnagar)", "Debangshu Mukherjee (Ichapur)", "Dummy Tester"));\r
\r
        System.out.println(">>> 1. After add() and addAll():");\r
        System.out.println("  Size     : " + trainees.size());\r
        System.out.println("  Elements : " + trainees);\r
\r
        // 2. contains() and containsAll():\r
        System.out.println("\\n>>> 2. Querying Elements (contains / containsAll):");\r
        System.out.println("  Contains 'Tuhina Das (Naihati)'? : " + trainees.contains("Tuhina Das (Naihati)"));\r
        System.out.println("  Contains All Sub-List?           : " + trainees.containsAll(List.of("Swadeep Paul (Barrackpore)", "Dummy Tester")));\r
\r
        // 3. removeIf() (Java 8 Predicate In-Place Filter):\r
        System.out.println("\\n>>> 3. Predicate In-Place Removal (removeIf):");\r
        boolean removedAny = trainees.removeIf(name -> name.contains("Dummy"));\r
        System.out.println("  Removed Dummy entries? : " + removedAny);\r
        System.out.println("  Trainees Remaining     : " + trainees);\r
\r
        // 4. toArray(T[] a) Conversion:\r
        System.out.println("\\n>>> 4. Converting to Typed Array (toArray(T[] a)):");\r
        String[] traineeArray = trainees.toArray(new String[0]); // Recommended zero-length array pattern\r
        System.out.println("  Array Length : " + traineeArray.length);\r
        System.out.println("  First Array Element : " + traineeArray[0]);\r
\r
        // 5. clear() and isEmpty():\r
        trainees.clear();\r
        System.out.println("\\n>>> 5. After clear():");\r
        System.out.println("  Is Empty? : " + trainees.isEmpty() + " (Size=" + trainees.size() + ")");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 4: Fundamental Collection Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE COLLECTION METHODS:\r
   - 'add(E)' / 'addAll(Collection)'.\r
   - 'remove(Object)' / 'removeAll(Collection)'.\r
   - 'removeIf(Predicate)' → in-place lambda deletion.\r
   - 'contains(Object)' / 'containsAll(Collection)'.\r
   - 'toArray(new T[0])' → typed array conversion.\r
   - 'size()', 'isEmpty()', 'clear()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'collection.toArray(new String[0])' the recommended modern idiom over 'collection.toArray(new String[collection.size()])' in Java?",shortAnswer:"In modern JVM versions, passing an empty pre-sized array ('new String[0]') is faster and more memory-efficient. The JVM's HotSpot JIT compiler heavily optimizes zero-length array allocation via internal intrinsics, avoiding the overhead of sizing and allocating a large throwaway array before passing it to toArray.",explanation:"Standard optimization benchmarked by Aleksey Shipilëv (Oracle JVM performance architect).",hint:"toArray(new String[0]) is heavily optimized by HotSpot JIT intrinsics over pre-sized arrays.",level:"Intermediate",codeExample:"String[] arr = list.toArray(new String[0]); // Modern idiomatic pattern"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Core Methods Suite"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Fundamental Collection Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"add()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"removeIf()"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"contains()"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"toArray()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the complete ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Collection<E>"})," API: performing bulk operations, lambda-driven in-place filtering (",e.jsx("code",{className:"text-sky-300 font-mono",children:"removeIf"}),"), and optimized typed array conversions."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"FundamentalCollectionMethodsSuiteDemo.java",highlightLines:[7,10,17,18,19,26,27,31,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Collection Methods FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 007_001 Topic 4: Fundamental Collection Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic4_fundamental_collection_methods_note.txt"})}),e.jsx(a,{note:"Use 'list.removeIf(x → condition)' instead of iterating and removing elements manually! It avoids ConcurrentModificationException and executes in a single clean pass! — Sukanta Hui"})]})}export{h as default};
