import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 3: Creating Streams Overview - Core Factories & Sources\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.Arrays;\r
import java.util.List;\r
import java.util.stream.IntStream;\r
import java.util.stream.Stream;\r
\r
public class CreatingStreamsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: CREATING STREAMS OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. From Collection: list.stream()\r
        List<String> branchList = List.of("Barrackpore", "Naihati", "Shyamnagar");\r
        Stream<String> s1 = branchList.stream();\r
        System.out.println("1. From List: " + s1.toList());\r
\r
        // 2. From Array: Arrays.stream(array)\r
        String[] branchArray = {"Ichapur", "Titagarh", "Kankinara"};\r
        Stream<String> s2 = Arrays.stream(branchArray);\r
        System.out.println("2. From Array: " + s2.toList());\r
\r
        // 3. From Direct Values: Stream.of(...)\r
        Stream<String> s3 = Stream.of("Java", "Spring Boot", "Docker");\r
        System.out.println("3. From Stream.of(): " + s3.toList());\r
\r
        // 4. Stream.builder()\r
        Stream<String> s4 = Stream.<String>builder()\r
            .add("AccoTax GST")\r
            .add("Coder IT Services")\r
            .build();\r
        System.out.println("4. From Stream.builder(): " + s4.toList());\r
\r
        // 5. Primitive Numeric Stream: IntStream.rangeClosed(1, 5)\r
        System.out.print("5. Primitive IntStream.rangeClosed(1, 5): ");\r
        IntStream.rangeClosed(1, 5).forEach(n -> System.out.print(n + " "));\r
        System.out.println();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 3: Creating Streams Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STREAM CREATION TAXONOMY:\r
   -----------------------------------------------------------------------------\r
   SOURCE                   METHOD SIGNATURE                   EXAMPLE\r
   -----------------------------------------------------------------------------\r
   Collection               collection.stream()                list.stream()\r
   Parallel Collection      collection.parallelStream()        list.parallelStream()\r
   Array                    Arrays.stream(array)               Arrays.stream(arr)\r
   Explicit Values          Stream.of(v1, v2, ...)             Stream.of("A", "B")\r
   Nullable Value (Java 9)  Stream.ofNullable(val)             Stream.ofNullable(str)\r
   Stream Builder           Stream.builder().add().build()     Stream.<T>builder()...\r
   Infinite Sequence        Stream.iterate(seed, operator)     Stream.iterate(0, n → n+2)\r
   Infinite Generator       Stream.generate(supplier)          Stream.generate(Math::random)\r
   Primitive Range          IntStream.range(from, to)          IntStream.range(1, 100)\r
   Lines of File (NIO.2)    Files.lines(path)                  Files.lines(Paths.get("data.txt"))\r
   Pattern Regex (Java 8)   pattern.splitAsStream(text)        Pattern.compile(",").splitAsStream(csv)\r
   -----------------------------------------------------------------------------\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the difference between Stream.of() and Arrays.stream() when passing an array of primitive ints?",shortAnswer:"Arrays.stream(int[]) returns an optimized primitive IntStream, whereas Stream.of(int[]) treats the entire primitive array as a single object element producing a Stream<int[]> of size 1 instead of unpacking individual integers!",explanation:"To create a Stream of individual integers from primitive int[], use Arrays.stream(int[]) or IntStream.of(int[]).",hint:"Watch out for generics treating primitive arrays as single Object references in Stream.of()!",level:"Intermediate",codeExample:"int[] arr = {1, 2, 3};\\nIntStream s1 = Arrays.stream(arr); // 3 elements\\nStream<int[]> s2 = Stream.of(arr); // 1 element containing the array!"},{question:"When should you use Stream.builder() instead of Stream.of()?",shortAnswer:"Stream.builder() is ideal when elements are produced dynamically across multiple conditional branches or loops before the stream is finalized and built.",explanation:"Stream.of() requires all elements to be known and present at invocation time as varargs.",hint:"Use builder pattern when incrementally constructing a stream pipeline.",level:"Beginner",codeExample:"Stream.Builder<String> b = Stream.builder();\\nif (condition) b.add('Val1');\\nStream<String> s = b.build();"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Creating Streams"})," Overview: Sources, Factories & Builders"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"A complete taxonomy of Stream creation techniques: Collections, Arrays, Values, Infinite generators, Primitive ranges, and Stream builders."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"CreatingStreamsOverviewDemo.java",highlightLines:[18,24,30,36,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Stream API Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 009_004 Topic 3: Creating Streams Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic3_creating_streams_overview_note.txt"})}),e.jsx(n,{note:"Always pick the most direct stream factory for your data type: collections use .stream(), arrays use Arrays.stream(), loose values use Stream.of(), and numeric loops use IntStream.range()! — Sukanta Hui"})]})}export{g as default};
