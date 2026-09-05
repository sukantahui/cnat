import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const l=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 6: Creating Streams from Direct Values & Stream.ofNullable() (Java 9)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.List;\r
import java.util.stream.Stream;\r
\r
public class StreamsFromValuesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: STREAMS FROM VALUES - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Stream.of(varargs): Ad-hoc explicit values\r
        Stream<String> techStream = Stream.of("Java 21", "Spring Boot 3", "PostgreSQL", "Kafka");\r
        System.out.println("1. Stream.of() values: " + techStream.toList());\r
\r
        // 2. Stream.empty(): Creating an explicitly empty stream\r
        Stream<String> emptyStream = Stream.empty();\r
        System.out.println("2. Stream.empty() count: " + emptyStream.count());\r
\r
        // 3. Stream.ofNullable(non-null value): Returns stream with 1 element\r
        String activeCenter = "Barrackpore";\r
        Stream<String> s1 = Stream.ofNullable(activeCenter);\r
        System.out.println("3. Stream.ofNullable('Barrackpore') count: " + s1.count());\r
\r
        // 4. Stream.ofNullable(null value): Returns empty stream (NO NullPointerException!)\r
        String nullCenter = null;\r
        Stream<String> s2 = Stream.ofNullable(nullCenter);\r
        System.out.println("4. Stream.ofNullable(null) count: " + s2.count());\r
\r
        // 5. Powerful use case: flatMap with Stream.ofNullable() to filter nulls from a collection\r
        List<String> rawInput = List.of("Swadeep", "Tuhina", "Abhronila");\r
        System.out.println("\\n5. Querying student center (where some might be null):");\r
        rawInput.stream()\r
            .flatMap(name -> Stream.ofNullable(lookupCenter(name)))\r
            .forEach(c -> System.out.println("   - Found Center: " + c));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static String lookupCenter(String studentName) {\r
        if ("Swadeep".equals(studentName)) return "Barrackpore";\r
        if ("Tuhina".equals(studentName)) return "Naihati";\r
        return null; // Abhronila has no registered center yet\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 6: Streams from Values (Stream.of & Stream.ofNullable)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STREAM.OF(T... VALUES):\r
   - Creates a sequential stream containing specified arguments.\r
   - Signature: 'public static <T> Stream<T> of(T... values)'.\r
   - Passing null as a single element: 'Stream.of(null)' creates a stream of size 1 containing null.\r
\r
2. STREAM.OFNULLABLE(T T) [JAVA 9]:\r
   - Creates a stream with 1 element if 't != null', or an empty stream if 't == null'.\r
   - Eliminates imperative null checking and ternary operators:\r
     * Before Java 9: 'val != null ? Stream.of(val) : Stream.empty()'\r
     * Modern Java: 'Stream.ofNullable(val)'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the difference between Stream.of(null) and Stream.ofNullable(null)?",shortAnswer:"Stream.of(null) produces a stream with 1 element whose value is null, whereas Stream.ofNullable(null) produces a clean, empty stream of size 0.",explanation:"Stream.ofNullable was introduced in Java 9 specifically to safely bridge nullable references into stream pipelines without NPEs.",hint:"Stream.of(null) has size 1 (contains null); Stream.ofNullable(null) has size 0 (empty).",level:"Intermediate",codeExample:"Stream.of(null).count(); // Returns 1\\nStream.ofNullable(null).count(); // Returns 0"},{question:"How is flatMap(Stream::ofNullable) used to eliminate nulls from a pipeline?",shortAnswer:"When flatMap receives Stream.ofNullable(fn(x)), null results turn into empty streams (which disappear during flattening) while non-null results turn into 1-element streams, cleanly pruning nulls.",explanation:"This provides a functional idiom for mapping and filtering nulls simultaneously.",hint:"Empty streams vanish in flatMap operations.",level:"Intermediate",codeExample:"names.stream().flatMap(name → Stream.ofNullable(getPhone(name))).toList();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating Streams from Values: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Stream.of()"})," & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Stream.ofNullable()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Creating ad-hoc streams from varargs values and handling nullable singletons gracefully without NullPointerExceptions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:l,title:"StreamsFromValuesDemo.java",highlightLines:[18,24,30,36,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Stream API Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 009_004 Topic 6: Streams from Values",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic6_streams_from_values_note.txt"})}),e.jsx(n,{note:"Java 9 Stream.ofNullable(x) is an absolute lifesaver when dealing with legacy APIs returning null: it produces an empty stream for null, eliminating clunky null checks! — Sukanta Hui"})]})}export{x as default};
