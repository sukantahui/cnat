import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 13: map(Function) - 1-to-1 Element Transformation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.List;\r
\r
public class MapFunctionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: MAP(FUNCTION) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentEntity> studentEntities = List.of(\r
            new StudentEntity(101, "Swadeep Paul", "swadeep@example.com", "Barrackpore", 94.5),\r
            new StudentEntity(102, "Tuhina Das", "tuhina@example.com", "Naihati", 96.0),\r
            new StudentEntity(103, "Abhronila Das", "abhronila@example.com", "Shyamnagar", 88.0)\r
        );\r
\r
        // 1. Transforming Object -> String (Field Extraction)\r
        System.out.println("1. Extracting Student Names (Stream<StudentEntity> -> Stream<String>):");\r
        List<String> names = studentEntities.stream()\r
            .map(StudentEntity::name)\r
            .toList();\r
        System.out.println("   Result: " + names);\r
\r
        // 2. Transforming Object -> DTO (Data Transfer Object)\r
        System.out.println("\\n2. Mapping Entity to StudentCardDTO:");\r
        List<StudentCardDTO> dtos = studentEntities.stream()\r
            .map(e -> new StudentCardDTO(e.id(), e.name().toUpperCase(), e.center()))\r
            .toList();\r
        dtos.forEach(dto -> System.out.println("   - " + dto));\r
\r
        // 3. Type Conversion: String -> Integer (Length mapping)\r
        List<String> branches = List.of("Barrackpore", "Naihati", "Shyamnagar", "Ichapur");\r
        List<Integer> nameLengths = branches.stream()\r
            .map(String::length)\r
            .toList();\r
        System.out.println("\\n3. Branch Name Lengths: " + nameLengths);\r
\r
        System.out.println("==========================================================================");\r
    }\r
\r
    record StudentEntity(int id, String name, String email, String center, double score) {}\r
    record StudentCardDTO(int id, String formattedName, String center) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 13: map(Function)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MAP METHOD CONTRACT:\r
   - Signature: '<R> Stream<R> map(Function<? super T, ? extends R> mapper)'.\r
   - Transforms each element of type T into an element of type R.\r
   - Intermediate & Stateless operation.\r
   - Preserves stream size: Input Stream of size N &rarr; Output Stream of size N.\r
\r
2. PRIMITIVE SPECIALIZATIONS OF MAP:\r
   - 'mapToInt(ToIntFunction)' -> IntStream (unboxed primitive int).\r
   - 'mapToLong(ToLongFunction)' -> LongStream.\r
   - 'mapToDouble(ToDoubleFunction)' -> DoubleStream.\r
   - Use primitive specializations when transforming objects into numbers to avoid boxing!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Can map() change the total number of elements in a stream?",shortAnswer:"No. map() is strictly a 1-to-1 transformation. If 10 elements enter map(), exactly 10 transformed elements exit map().",explanation:"To alter element counts, use filter() (which removes elements) or flatMap() (which flattens 1 element into 0, 1, or many elements).",hint:"map is 1-to-1 and strictly preserves element count.",level:"Beginner",codeExample:"List.of(1, 2, 3).stream().map(x -> x * 2).count(); // Always 3"},{question:"When should you use mapToInt() instead of map(Integer::valueOf)?",shortAnswer:"Use mapToInt() whenever you plan to perform numeric aggregations (sum, average, max, summaryStatistics) or want to avoid allocating heap Wrapper objects for every element.",explanation:"mapToInt() produces a high-performance primitive IntStream.",hint:"mapToInt avoids wrapper object allocations and provides numeric terminal methods.",level:"Intermediate",codeExample:"int total = list.stream().mapToInt(String::length).sum();"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"map(Function)"}),": 1-to-1 Element Transformation"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Transforming stream elements: extracting object fields, converting data types, and transforming collections into DTOs."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"MapFunctionDemo.java",highlightLines:[18,25,32,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Stream API Pipeline FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 009_004 Topic 13: map(Function)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic13_map_function_note.txt"})}),e.jsx(a,{note:"The map() method is a 1-to-1 transformer: for every 1 element that enters map(), exactly 1 transformed element comes out! It cannot change the stream size. — Sukanta Hui"})]})}export{g as default};
