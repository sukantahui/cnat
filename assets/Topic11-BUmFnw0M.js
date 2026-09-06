import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 11: findFirst() - Encounter Order Element Retrieval\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class FindFirstRetrievalDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: FINDFIRST() ENCOUNTER ORDER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentRecord> roster = List.of(\r
            new StudentRecord(101, "Swadeep Paul", "Barrackpore", 88.0),\r
            new StudentRecord(102, "Tuhina Das", "Naihati", 95.0),\r
            new StudentRecord(103, "Abhronila Das", "Shyamnagar", 89.0),\r
            new StudentRecord(104, "Debangshu Mukherjee", "Ichapur", 92.5)\r
        );\r
\r
        // 1. Finding first student from Barrackpore\r
        Optional<StudentRecord> firstBarrackpore = roster.stream()\r
            .filter(s -> "Barrackpore".equals(s.center()))\r
            .findFirst();\r
\r
        System.out.println("1. First Barrackpore Student: " + firstBarrackpore.map(StudentRecord::name).orElse("None"));\r
\r
        // 2. Finding first student with score > 90\r
        Optional<StudentRecord> firstDistinction = roster.stream()\r
            .filter(s -> s.score() > 90.0)\r
            .findFirst();\r
\r
        System.out.println("2. First Distinction Student (Encounter Order): " + firstDistinction.map(StudentRecord::name).orElse("None"));\r
\r
        // 3. Handling no matches safely with orElseGet()\r
        Optional<StudentRecord> firstScholarship = roster.stream()\r
            .filter(s -> s.score() >= 99.0)\r
            .findFirst();\r
\r
        StudentRecord result = firstScholarship.orElseGet(() -> new StudentRecord(0, "Default Fallback", "Barrackpore", 0.0));\r
        System.out.println("3. Fallback Student Record: " + result);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentRecord(int id, String name, String center, double score) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 11: findFirst() Retrieval\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT:\r
   - Signature: 'Optional<T> findFirst()'.\r
   - Returns an Optional describing the first element of this stream, or an empty Optional\r
     if the stream is empty.\r
   - Terminal & Short-Circuiting operation.\r
\r
2. DETERMINISTIC ENCOUNTER ORDER:\r
   - If the stream has an encounter order (e.g. List, Array, TreeSet), findFirst() is\r
     guaranteed to return the very first matching element in that exact order.\r
   - In parallel streams, findFirst() preserves encounter order despite multi-threaded chunking,\r
     which carries a slight synchronization overhead compared to findAny().\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Does findFirst() guarantee returning the same element every time in a parallel stream?",shortAnswer:"Yes, provided the underlying stream has an encounter order (like a List or Array), findFirst() guarantees returning the first element according to that encounter order, even in parallel execution.",explanation:"Worker threads coordinate so that the element from the earliest slice is returned.",hint:"Guaranteed to preserve encounter order even across parallel threads.",level:"Intermediate",codeExample:"List.of('A', 'B', 'C').parallelStream().findFirst(); // Guaranteed to return 'A'"},{question:"Why does findFirst() return an Optional<T> rather than T or null?",shortAnswer:"To prevent NullPointerExceptions and force client code to explicitly handle the possibility of an empty stream or unmatched filter condition.",explanation:"Optional provides clean fallback methods like orElse(), orElseGet(), and orElseThrow().",hint:"Prevents null checks and guarantees type-safe fallback handling.",level:"Beginner",codeExample:"stream.findFirst().orElse('Default');"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"findFirst()"}),": Encounter Order Retrieval & Optional Safety"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Extracting the leading element in encounter order: deterministic sequential evaluation, short-circuiting on arrival, and Optional unwrapping."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"FindFirstRetrievalDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Terminal Operations & Reductions FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_005 Topic 11: findFirst() Retrieval",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic11_findfirst_retrieval_note.txt"})}),e.jsx(a,{note:"findFirst() guarantees you get the very first element in source encounter order! In ordered collections like List or LinkedHashSet, findFirst() will always return the exact same element every time you run it. — Sukanta Hui"})]})}export{x as default};
