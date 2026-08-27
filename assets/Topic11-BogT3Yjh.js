import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 11: Comparing Arrays.asList(), List.of(), and Collections.unmodifiableList()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.Collections;\r
import java.util.List;\r
\r
public class ListCreationComparisonMatrixDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: Arrays.asList() vs List.of() vs unmodifiableList() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Arrays.asList(): Fixed-size array wrapper (MUTABLE IN-PLACE via set(), backed by original array):\r
        String[] originalArray = new String[]{"Swadeep", "Tuhina"};\r
        List<String> asList = Arrays.asList(originalArray);\r
        asList.set(0, "Swadeep Paul"); // LEGAL: Modifies backing array!\r
        System.out.println(">>> 1. Arrays.asList():");\r
        System.out.println("  List Content        : " + asList);\r
        System.out.println("  Backing Array Index 0: " + originalArray[0] + " (Backing array MUTATED!)");\r
        // asList.add("Abhronila"); // Fails with UnsupportedOperationException (fixed size!)\r
\r
        // 2. Collections.unmodifiableList(): Unmodifiable VIEW over an underlying mutable list:\r
        List<String> mutableBackingList = new ArrayList<>(List.of("Naihati", "Barrackpore"));\r
        List<String> unmodifiableView = Collections.unmodifiableList(mutableBackingList);\r
        mutableBackingList.add("Shyamnagar"); // LEGAL: Modifying original list reflects in the view!\r
        System.out.println("\\n>>> 2. Collections.unmodifiableList() (View Wrapper):");\r
        System.out.println("  View Content after modifying backing list: " + unmodifiableView);\r
\r
        // 3. List.of() (Java 9+): TRULY IMMUTABLE (No backing array/list leaks):\r
        List<String> trulyImmutable = List.of("Ichapur", "Kankinara");\r
        System.out.println("\\n>>> 3. List.of() (Truly Immutable): " + trulyImmutable);\r
\r
        System.out.println("\\n>>> COMPARISON MATRIX:");\r
        System.out.println("+-----------------------------+-------------+------------+-------------+-------------------------+");\r
        System.out.println("| Feature                     | Arrays.asList| List.of()  | unmodList() | Description             |");\r
        System.out.println("+-----------------------------+-------------+------------+-------------+-------------------------+");\r
        System.out.println("| Allows add() / remove()     | No (Fixed)  | No         | No          | Resizing disallowed     |");\r
        System.out.println("| Allows set(index, val)      | YES         | No         | No          | In-place element write  |");\r
        System.out.println("| Allows null elements        | YES         | No (NPE)   | Depends on backing list|");\r
        System.out.println("| Backing mutations visible?  | YES (Array) | N/A (Copy) | YES (View)  | Leak potential          |");\r
        System.out.println("+-----------------------------+-------------+------------+-------------+-------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 11: List Creation Comparison\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CREATION MATRIX SUMMARY:\r
   - 'Arrays.asList()': Fixed-size, permits set(), backed by array, allows null.\r
   - 'Collections.unmodifiableList()': Read-only view, backing list mutations leak through.\r
   - 'List.of()': Truly immutable, standalone, forbids nulls, no set().\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the critical distinction between 'Arrays.asList()', 'List.of()', and 'Collections.unmodifiableList()' regarding mutability and backing arrays?",shortAnswer:"1. 'Arrays.asList()': A fixed-size wrapper backed directly by an array; you CANNOT add/remove elements, but you CAN modify elements in-place ('list.set(i, val)') which mutates the original array. 2. 'Collections.unmodifiableList()': An unmodifiable view wrapper; the view itself cannot be modified, but mutations to the underlying backing list are visible through the view. 3. 'List.of()': A standalone, truly immutable collection with no backing array/list leaks and zero null tolerance.",explanation:"One of the most frequently asked senior Java interview questions.",hint:"Arrays.asList allows set(); unmodifiableList reflects underlying list changes; List.of is truly standalone immutable.",level:"Intermediate",codeExample:'Arrays.asList(arr).set(0, "New"); // Mutates arr! List.of("A").set(0, "New"); // Throws exception!'}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"List Creation Comparison"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Differences: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Arrays.asList()"})," vs ",e.jsx("code",{className:"text-sky-400 font-mono",children:"List.of()"})," vs ",e.jsx("code",{className:"text-purple-400 font-mono",children:"unmodifiableList()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect list factories: comparing fixed-size array wrappers (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Arrays.asList"}),"), unmodifiable view delegates, and standalone immutable collections (",e.jsx("code",{className:"text-sky-300 font-mono",children:"List.of"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"ListCreationComparisonMatrixDemo.java",highlightLines:[7,10,16,17,18,25,26,27,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{title:"List Comparison FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 007_001 Topic 11: List Creation Comparison",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic11_list_creation_comparison_note.txt"})}),e.jsx(n,{note:"Be careful with 'Arrays.asList()'! Calling 'list.set(0, value)' will silently change the elements in your original array! If you want a truly independent immutable list with no side effects, always use 'List.of()' in modern Java! — Sukanta Hui"})]})}export{b as default};
