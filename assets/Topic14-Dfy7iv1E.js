import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 14: Unmodifiable Wrappers: Collections.unmodifiableList() & The Backing View Trap\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
\r
public class UnmodifiableWrappersDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: Collections UNMODIFIABLE WRAPPERS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> mutableCourses = new ArrayList<>();\r
        mutableCourses.add("Java Core");\r
        mutableCourses.add("Spring Boot");\r
\r
        // 1. Creating an unmodifiable read-only wrapper view:\r
        List<String> readOnlyCourses = Collections.unmodifiableList(mutableCourses);\r
\r
        System.out.println(">>> 1. Read-Only Wrapper View: " + readOnlyCourses);\r
\r
        // 2. Direct mutation attempt throws UnsupportedOperationException:\r
        try {\r
            readOnlyCourses.add("Microservices"); // Mutating read-only view directly!\r
        } catch (UnsupportedOperationException e) {\r
            System.out.println("\\n>>> 2. [BLOCKED] readOnlyCourses.add() threw UnsupportedOperationException!");\r
        }\r
\r
        // 3. THE BACKING VIEW TRAP (Unmodifiable is NOT Truly Immutable!):\r
        System.out.println("\\n>>> 3. The Backing View Trap:");\r
        mutableCourses.add("Cloud AWS & Docker"); // Mutates original backing list!\r
        System.out.println("  Modified Original List : " + mutableCourses);\r
        System.out.println("  Read-Only View Updated : " + readOnlyCourses + " (CHANGED! Because it is only a VIEW!)");\r
\r
        System.out.println("\\n>>> UNMODIFIABLE VIEW vs IMMUTABLE COLLECTION (Java 9 List.of):");\r
        System.out.println("  - 'Collections.unmodifiableList(orig)' : A read-only VIEW of original list. If orig changes, view changes too.");\r
        System.out.println("  - 'List.of(...)' / 'List.copyOf(orig)' : 100% Truly Immutable snapshot with zero backing connection.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 14: Unmodifiable Wrappers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UNMODIFIABLE WRAPPERS:\r
   - 'Collections.unmodifiableList(orig)'.\r
   - 'Collections.unmodifiableSet(orig)'.\r
   - 'Collections.unmodifiableMap(orig)'.\r
   - Throws 'UnsupportedOperationException' on mutation attempts.\r
   - Backing view trap: mutations to 'orig' list leak into the view.\r
   - For true immutability: use 'List.copyOf(orig)' (Java 10+).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is a 'Collections.unmodifiableList' considered a 'read-only view' rather than a 'truly immutable collection'?",shortAnswer:"'Collections.unmodifiableList' wraps an existing collection: while any mutation called directly on the unmodifiable wrapper throws 'UnsupportedOperationException', changes made to the underlying original backing list are immediately reflected in the wrapper. To create a truly immutable independent copy, Java 9+ provides 'List.copyOf(original)' or 'List.of()'.",explanation:"Crucial difference between unmodifiable view decorators and true immutable snapshots.",hint:"It is only a view: modifying the original list changes the unmodifiable view too.",level:"Intermediate",codeExample:'List<String> view = Collections.unmodifiableList(orig); orig.add("x"); // view reflects "x"!'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Unmodifiable Wrappers"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Unmodifiable Wrappers: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collections.unmodifiableList()"})," & The Backing View Trap"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Safeguard internal collection state: constructing read-only view decorators, handling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"UnsupportedOperationException"}),", and distinguishing view wrappers from immutable ",e.jsx("code",{className:"text-sky-300 font-mono",children:"List.copyOf()"})," snapshots."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"UnmodifiableWrappersDeepDiveDemo.java",highlightLines:[7,10,16,17,22,23,29,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{title:"Unmodifiable Wrappers FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 007_008 Topic 14: Unmodifiable Wrappers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic14_unmodifiable_wrappers_note.txt"})}),e.jsx(r,{note:"Collections.unmodifiableList() gives you a read-only pair of glasses looking at an original list! If someone modifies the original list behind the scenes, the view also changes! For a 100% immutable list that never changes, use 'List.copyOf(orig)'! — Sukanta Hui"})]})}export{g as default};
