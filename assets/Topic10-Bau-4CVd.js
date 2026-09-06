import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 10: Unmodifiable / Immutable Collection Factories: List.of(), Set.of() & Map.of()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Set;\r
\r
public class ImmutableCollectionFactoriesJava9Demo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: JAVA 9+ IMMUTABLE COLLECTION FACTORIES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Immutable List via List.of():\r
        List<String> branches = List.of("Barrackpore", "Naihati", "Shyamnagar");\r
        System.out.println(">>> 1. Immutable List (List.of()): " + branches);\r
\r
        // 2. Immutable Set via Set.of():\r
        Set<Integer> pinCodes = Set.of(700120, 743165, 743127);\r
        System.out.println(">>> 2. Immutable Set (Set.of())  : " + pinCodes);\r
\r
        // 3. Immutable Map via Map.of() and Map.ofEntries():\r
        Map<String, String> branchTeachers = Map.of(\r
                "Barrackpore", "Sukanta Hui",\r
                "Naihati", "Swadeep Paul",\r
                "Shyamnagar", "Tuhina Das"\r
        );\r
        System.out.println(">>> 3. Immutable Map (Map.of())  : " + branchTeachers);\r
\r
        // 4. Mutation Attempts Trigger UnsupportedOperationException:\r
        System.out.println("\\n>>> 4. Mutation Protection In Action:");\r
        try {\r
            branches.add("Ichapur");\r
        } catch (UnsupportedOperationException e) {\r
            System.out.println("  [CAUGHT EXPECTED EXCEPTION] branches.add() threw UnsupportedOperationException!");\r
        }\r
\r
        // 5. Null Prohibition in Java 9 factories:\r
        System.out.println("\\n>>> 5. Null Safety Guard:");\r
        try {\r
            List.of("Barrackpore", null); // Fails immediately with NullPointerException!\r
        } catch (NullPointerException e) {\r
            System.out.println("  [CAUGHT EXPECTED EXCEPTION] List.of() forbids null elements (throws NPE)!");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 10: Immutable Collection Factories\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JAVA 9+ FACTORIES:\r
   - 'List.of()', 'Set.of()', 'Map.of()', 'Map.ofEntries()'.\r
   - Structurally immutable (throws UnsupportedOperationException).\r
   - Null-hostile: throws NullPointerException on nulls.\r
   - High memory efficiency (no array buffers or wrappers).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are the 3 major characteristics of collections created via Java 9 factory methods ('List.of()', 'Set.of()', 'Map.of()')?",shortAnswer:"1. 'Truly Immutable': Any modification call (add, remove, clear, set) throws 'UnsupportedOperationException'. 2. 'Null Hostile': Attempting to pass or store 'null' immediately throws 'NullPointerException'. 3. 'Space Efficient': They do not use wrapper overhead or resize buffers, saving substantial heap memory.",explanation:"Introduced in JEP 269 (Convenience Factory Methods for Collections).",hint:"Immutable (throws UnsupportedOperationException), null-hostile (throws NPE), and space-efficient.",level:"Intermediate",codeExample:'List<String> list = List.of("A", "B"); // Immutable and null-free'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Immutable Factories"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Unmodifiable Collection Factories (Java 9+): ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"List.of()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Set.of()"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Map.of()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Apply modern Java 9 convenience factories: constructing unmodifiable, null-hostile, memory-optimized collections with concise declarative syntax."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ImmutableCollectionFactoriesJava9Demo.java",highlightLines:[7,10,16,20,24,25,33,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Immutable Factories FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 007_001 Topic 10: Immutable Collection Factories",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic10_immutable_collection_factories_note.txt"})}),e.jsx(n,{note:"'List.of()' and 'Map.of()' are the modern standard in Java! They are 100% thread-safe and protect your collections from accidental bugs because nobody can modify them after creation! — Sukanta Hui"})]})}export{h as default};
