import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 14: toArray() and toArray(IntFunction<A[]> generator)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.Arrays;\r
import java.util.List;\r
\r
public class ToArrayConstructorsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: TOARRAY() & ARRAY CONSTRUCTORS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentList = List.of(\r
            "Swadeep Paul", "Tuhina Das", "Abhronila Das", "Debangshu Mukherjee"\r
        );\r
\r
        // 1. Untyped toArray(): Returns Object[] (Needs manual casting or Object iteration)\r
        Object[] rawObjects = studentList.stream()\r
            .filter(name -> name.contains("Das"))\r
            .toArray();\r
        System.out.println("1. Untyped Object[] array: " + Arrays.toString(rawObjects));\r
        System.out.println("   - Array class type: " + rawObjects.getClass().getName());\r
\r
        // 2. Type-Safe toArray(String[]::new): Array Constructor Reference\r
        String[] dasFamily = studentList.stream()\r
            .filter(name -> name.contains("Das"))\r
            .toArray(String[]::new); // IntFunction<String[]> generator\r
\r
        System.out.println("\\n2. Type-Safe String[] array via String[]::new:");\r
        System.out.println("   - Contents: " + Arrays.toString(dasFamily));\r
        System.out.println("   - Array class type: " + dasFamily.getClass().getName());\r
        System.out.println("   - Accessing index 0 safely: " + dasFamily[0]);\r
\r
        // 3. Primitive IntStream to int[] array via toArray()\r
        int[] scoreArray = studentList.stream()\r
            .mapToInt(String::length)\r
            .toArray(); // Returns primitive int[] directly!\r
        System.out.println("\\n3. Primitive int[] lengths array: " + Arrays.toString(scoreArray));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 14: toArray() and Array Constructor References\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TOARRAY OVERLOADS:\r
   1. 'Object[] toArray()'\r
      - Returns an array containing the elements of this stream as 'Object[]'.\r
   2. '<A> A[] toArray(IntFunction<A[]> generator)'\r
      - Returns an array containing the elements of this stream, using the provided\r
        generator function to allocate the returned array.\r
      - Standard idiom: 'stream.toArray(TypeName[]::new)'.\r
\r
2. PRIMITIVE STREAMS:\r
   - 'IntStream.toArray()' → returns primitive 'int[]'.\r
   - 'LongStream.toArray()' → returns primitive 'long[]'.\r
   - 'DoubleStream.toArray()' → returns primitive 'double[]'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why is stream.toArray(String[]::new) preferred over stream.toArray()?",shortAnswer:"stream.toArray() returns an Object[] which loses compile-time type safety, whereas stream.toArray(String[]::new) uses an array constructor reference to return a strongly-typed String[] array.",explanation:"String[]::new passes an IntFunction that allocates the exact sized array.",hint:"Returns strongly-typed array instead of generic Object[].",level:"Beginner",codeExample:"String[] arr = stream.toArray(String[]::new);"},{question:"What functional interface does the parameter of toArray(generator) represent?",shortAnswer:"It represents java.util.function.IntFunction<A[]>, which receives the required array size (int) and returns a newly allocated array of that size.",explanation:"The method reference Type[]::new matches IntFunction<Type[]>: (int size) → new Type[size].",hint:"IntFunction<A[]>",level:"Intermediate",codeExample:"IntFunction<String[]> gen = String[]::new; // size → new String[size]"}];function A(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 14"}),r.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),r.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Converting Streams to Arrays: ",r.jsx("code",{className:"text-emerald-400 font-mono",children:"toArray() & Array Constructor References"})]}),r.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Extracting stream results into strongly typed arrays: Object[] vs type-safe T[] arrays using ClassName[]::new generator references."})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:s,title:"ToArrayConstructorsDemo.java",highlightLines:[18,25,34,43]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{title:"Terminal Operations & Reductions FAQs",questions:o})}),r.jsx("section",{className:"space-y-4",children:r.jsx(n,{content:i,title:"Module 009_005 Topic 14: toArray() & Array Constructors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic14_toarray_array_constructors_note.txt"})}),r.jsx(a,{note:"Calling toArray() with no arguments returns Object[] (which requires clunky casting). Always pass an array constructor reference like String[]::new to get a perfectly typed String[] array! — Sukanta Hui"})]})}export{A as default};
