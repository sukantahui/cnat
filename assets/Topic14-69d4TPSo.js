import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 14: flatMap(Function) - 1-to-Many Flattening of Nested Collections\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.Arrays;\r
import java.util.List;\r
\r
public class FlatMapFunctionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: FLATMAP(FUNCTION) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<AcademyBatch> batches = List.of(\r
            new AcademyBatch("Java Pro Barrackpore", List.of("Swadeep Paul", "Priya Sharma")),\r
            new AcademyBatch("Spring Boot Naihati", List.of("Tuhina Das", "Anish Dey")),\r
            new AcademyBatch("Cloud Shyamnagar", List.of("Abhronila Das", "Debangshu Mukherjee"))\r
        );\r
\r
        // 1. PROBLEM WITH MAP: Produces Stream<List<String>> or Stream<Stream<String>>\r
        System.out.println("1. Using map() on nested lists:");\r
        List<List<String>> listOfLists = batches.stream()\r
            .map(AcademyBatch::students)\r
            .toList();\r
        System.out.println("   Result is nested List<List<String>>: " + listOfLists);\r
\r
        // 2. SOLUTION WITH FLATMAP: Flattens each List into a single unified Stream<String>\r
        System.out.println("\\n2. Using flatMap() to flatten all students into a single Stream<String>:");\r
        List<String> allStudents = batches.stream()\r
            .flatMap(batch -> batch.students().stream()) // 1-to-many flattening\r
            .map(String::toUpperCase)\r
            .sorted()\r
            .toList();\r
        System.out.println("   Unified Flat List: " + allStudents);\r
\r
        // 3. String Split Word Tokenizer via flatMap\r
        List<String> sentences = List.of("Java is powerful", "Streams are declarative", "Code with CoderAccoTax");\r
        List<String> distinctWords = sentences.stream()\r
            .flatMap(sentence -> Arrays.stream(sentence.split(" ")))\r
            .map(String::toLowerCase)\r
            .distinct()\r
            .sorted()\r
            .toList();\r
        System.out.println("\\n3. Flattened distinct words: " + distinctWords);\r
\r
        System.out.println("==========================================================================");\r
    }\r
\r
    record AcademyBatch(String batchName, List<String> students) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 14: flatMap(Function)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FLATMAP METHOD CONTRACT:\r
   - Signature: '<R> Stream<R> flatMap(Function<? super T, ? extends Stream<? extends R>> mapper)'.\r
   - Takes a function that transforms each element of type T into a 'Stream<R>'.\r
   - Flattens (merges) all generated individual streams into a single combined 'Stream<R>'.\r
\r
2. MAP VS FLATMAP SUMMARY:\r
   -----------------------------------------------------------------------------\r
   METHOD    INPUT TYPE            TRANSFORMATION FUNCTION    OUTPUT TYPE\r
   -----------------------------------------------------------------------------\r
   map()     T                     Function<T, R>             Stream<R> (1-to-1)\r
   flatMap() T                     Function<T, Stream<R>>     Stream<R> (1-to-Many flattened)\r
   -----------------------------------------------------------------------------\r
\r
3. COMMON USE CASES:\r
   - Flattening 'List<List<T>>' → 'List<T>'.\r
   - Splitting sentences into streams of individual words ('sentence → Arrays.stream(sentence.split(" "))').\r
   - Extracting sub-collections from domain entities (Order → List<OrderItem>).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"When should you use flatMap() instead of map()?",shortAnswer:"Use flatMap() when the mapping function returns a Stream, Collection, or Optional for each input element and you want to flatten the resulting nested structures into a single continuous stream rather than a stream of streams/collections.",explanation:"map() would yield Stream<Stream<T>> or Stream<List<T>>; flatMap() yields a flat Stream<T>.",hint:"Use flatMap whenever mapping returns a stream or collection to avoid nested streams.",level:"Intermediate",codeExample:"List<Order> orders;\\n// Flatten orders to items:\\norders.stream().flatMap(o → o.getItems().stream()).toList();"},{question:"What happens if the function in flatMap() returns an empty stream for a particular element?",shortAnswer:"The empty stream contributes zero elements to the flattened stream. The element is effectively removed/filtered out cleanly without throwing any error.",explanation:"This makes flatMap(Stream::ofNullable) a clean pattern for simultaneous mapping and null-filtering.",hint:"Empty streams contribute 0 elements and disappear during flattening.",level:"Intermediate",codeExample:"stream.flatMap(x → x.isValid() ? Stream.of(x.data()) : Stream.empty())"}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 14"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[t.jsx("code",{className:"text-emerald-400 font-mono",children:"flatMap(Function)"}),": 1-to-Many Flattening & Nested Collections"]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Demystifying flatMap: flattening lists of lists, unpacking nested streams, and merging complex hierarchy data structures."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:s,title:"FlatMapFunctionDemo.java",highlightLines:[18,25,34,42]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Stream API Pipeline FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:i,title:"Module 009_004 Topic 14: flatMap(Function)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic14_flatmap_function_note.txt"})}),t.jsx(r,{note:"Whenever you find yourself writing map(x → x.getListOfThings().stream()), STOP! If you leave it as map, you will end up with Stream<Stream<String>> (a stream of streams). Use flatMap to flatten all inner streams into a single unified Stream<String>! — Sukanta Hui"})]})}export{h as default};
