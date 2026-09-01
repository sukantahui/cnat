import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 7: When to Use LinkedHashSet: Deduplicating Lists While Preserving Original Sequence\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.LinkedHashSet;\r
import java.util.List;\r
\r
public class DeduplicatePreservingOrderDemo {\r
\r
    // High-performance one-liner to deduplicate a List while keeping original order:\r
    public static <T> List<T> removeDuplicatesPreservingOrder(List<T> originalList) {\r
        // LinkedHashSet strips duplicates in O(n) while preserving exact first-seen order:\r
        return new ArrayList<>(new LinkedHashSet<>(originalList));\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: DEDUPLICATING WITH LinkedHashSet - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> rawSubmissions = List.of(\r
                "Swadeep Paul (Barrackpore)",\r
                "Tuhina Das (Naihati)",\r
                "Swadeep Paul (Barrackpore)", // Duplicate\r
                "Abhronila Das (Shyamnagar)",\r
                "Tuhina Das (Naihati)",       // Duplicate\r
                "Debangshu Mukherjee (Ichapur)"\r
        );\r
\r
        System.out.println(">>> 1. Raw Input List with Duplicates:");\r
        for (int i = 0; i < rawSubmissions.size(); i++) {\r
            System.out.printf("  Pos %d: %s%n", i, rawSubmissions.get(i));\r
        }\r
\r
        List<String> cleanedList = removeDuplicatesPreservingOrder(rawSubmissions);\r
\r
        System.out.println("\\n>>> 2. Cleaned List (Deduplicated & Original Sequence Preserved):");\r
        for (int i = 0; i < cleanedList.size(); i++) {\r
            System.out.printf("  Pos %d: %s%n", i, cleanedList.get(i));\r
        }\r
\r
        System.out.println("\\n>>> 3 IDEAL USE CASES FOR LinkedHashSet:");\r
        System.out.println("  1. Deduplicating Input Streams: Removing duplicates while keeping user's chronological submission order.");\r
        System.out.println("  2. LRU Caches                 : LinkedHashSet/LinkedHashMap access-order mode for cache eviction.");\r
        System.out.println("  3. Deterministic Testing       : Test assertions that require predictable iteration output.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 7: Deduplicating with LinkedHashSet\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DEDUPLICATION IDIOM:\r
   - 'new ArrayList<>(new LinkedHashSet<>(list))'.\r
   - O(n) time complexity.\r
   - Eliminates duplicate entries.\r
   - Guarantees original first-seen chronological order.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the most idiomatic O(n) one-liner in Java to remove duplicates from a 'List<T>' while strictly preserving element arrival order?",shortAnswer:"The canonical one-liner is: 'new ArrayList<>(new LinkedHashSet<>(list))'. Passing the list into 'LinkedHashSet' removes duplicates in O(n) time while maintaining the first-seen insertion order. Passing that set back into 'new ArrayList<>()' returns a clean indexed list.",explanation:"Classic Java interview and enterprise coding pattern.",hint:"'new ArrayList<>(new LinkedHashSet<>(list))' removes duplicates and preserves order in O(n) time.",level:"Beginner",codeExample:"List<String> unique = new ArrayList<>(new LinkedHashSet<>(duplicates));"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Deduplication Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["When to Use ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"LinkedHashSet"}),": Deduplicating Lists While Preserving Sequence"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply production design idioms: constructing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"O(n)"})," list deduplication pipelines that remove duplicates while strictly preserving first-seen chronological order."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"DeduplicatePreservingOrderDemo.java",highlightLines:[7,10,11,12,13,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Deduplication FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:a,title:"Module 007_003 Topic 7: Deduplicating with LinkedHashSet",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic7_deduplicate_linkedhashset_note.txt"})}),e.jsx(r,{note:"If an interviewer asks: 'How do you remove duplicates from a List while keeping the exact same order?', write 'new ArrayList<>(new LinkedHashSet<>(list))'! It is clean, elegant, and executes in linear O(n) time! — Sukanta Hui"})]})}export{g as default};
