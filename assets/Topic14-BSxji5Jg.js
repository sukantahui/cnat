import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 14: Optional.stream() (Java 9+) - Bridging Optionals into Stream Pipelines\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class OptionalStreamJava9Demo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: OPTIONAL.STREAM() (JAVA 9+) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> studentIds = List.of(101, 999, 102, 888, 103);\r
\r
        // We lookup students by ID: valid IDs return Optional.of(Student), invalid return Optional.empty()\r
        System.out.println(">>> 1. Processing List of IDs and fetching Student Optionals:");\r
\r
        // Java 9 Idiom: flatMap(Optional::stream)\r
        // 1. findStudent(101) -> Optional.of("Swadeep")  -> Stream of ["Swadeep"]\r
        // 2. findStudent(999) -> Optional.empty()         -> Empty Stream [] (Vanishes!)\r
        // 3. findStudent(102) -> Optional.of("Tuhina")   -> Stream of ["Tuhina"]\r
        List<String> foundStudents = studentIds.stream()\r
            .map(OptionalStreamJava9Demo::findStudentById) // Stream<Optional<String>>\r
            .flatMap(Optional::stream)                     // Stream<String> (Java 9 magic!)\r
            .map(String::toUpperCase)\r
            .toList();\r
\r
        System.out.println(">>> 2. Collected Active Students (Empty Optionals Dropped):");\r
        foundStudents.forEach(s -> System.out.println("   - " + s));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static Optional<String> findStudentById(int id) {\r
        if (id == 101) return Optional.of("Swadeep Paul (Barrackpore)");\r
        if (id == 102) return Optional.of("Tuhina Das (Naihati)");\r
        if (id == 103) return Optional.of("Abhronila Das (Shyamnagar)");\r
        return Optional.empty(); // Not found\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 14: Optional.stream() (Java 9+)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT (Java 9+):\r
   - Signature: 'public Stream<T> stream()'.\r
   - If a value is present, returns a sequential Stream containing ONLY that single value.\r
   - If empty, returns an EMPTY Stream of size 0.\r
\r
2. THE CANONICAL STREAM-OPTIONAL IDIOM:\r
   - 'Stream<Optional<T>>' → 'Stream<T>':\r
     'stream.flatMap(Optional::stream)'\r
   - Replaces clunky Java 8 pattern:\r
     'stream.filter(Optional::isPresent).map(Optional::get)'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"How does Optional.stream() simplify transforming Stream<Optional<T>> to Stream<T> in Java 9+?",shortAnswer:"Using stream.flatMap(Optional::stream). For present Optionals, it produces a 1-element stream that is unwrapped; for empty Optionals, it produces a 0-element stream that is discarded during flattening.",explanation:"Replaces .filter(Optional::isPresent).map(Optional::get).",hint:"stream.flatMap(Optional::stream)",level:"Intermediate",codeExample:"List<User> users = userIds.stream().map(repo::findById).flatMap(Optional::stream).toList();"},{question:"What does Optional.empty().stream().count() return?",shortAnswer:"It returns 0L, representing an empty stream of size 0.",explanation:"Optional.of('val').stream().count() returns 1L.",hint:"Returns 0L.",level:"Beginner",codeExample:"Optional.empty().stream().count(); // 0"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 14"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Converting Optional to Stream: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Optional.stream()"})," (Java 9+)"]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Bridging Optionals and Streams: using stream.flatMap(Optional::stream) to filter and unwrap present optionals in collection streams."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(a,{fileModule:i,title:"OptionalStreamJava9Demo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"Optional & Null-Safe Programming FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:s,title:"Module 009_008 Topic 14: Optional.stream() in Java 9",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic14_optional_stream_java9_note.txt"})}),t.jsx(r,{note:"In Java 9, Optional.stream() made filtering lists of Optionals effortless: just write stream.flatMap(Optional::stream) and all empty Optionals vanish while present values are automatically unwrapped! — Sukanta Hui"})]})}export{x as default};
