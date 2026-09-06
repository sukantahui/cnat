import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 17: peek(Consumer) - Debugging & Inspecting Elements in Flight\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.List;\r
\r
public class PeekConsumerDebuggingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 17: PEEK(CONSUMER) DEBUGGING - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> rawNames = List.of("Swadeep Paul", "Tuhina Das", "Abhronila Das", "Debangshu");\r
\r
        System.out.println(">>> TRACING PIPELINE EXECUTION WITH PEEK:");\r
        List<String> processedList = rawNames.stream()\r
            .peek(name -> System.out.println(" [1. RAW INGESTION] : " + name))\r
            .filter(name -> name.startsWith("S") || name.startsWith("T"))\r
            .peek(filtered -> System.out.println("   [2. POST FILTER]  : " + filtered))\r
            .map(String::toUpperCase)\r
            .peek(mapped -> System.out.println("     [3. POST MAP]   : " + mapped))\r
            .toList();\r
\r
        System.out.println("\\n>>> FINAL COLLECTED RESULT: " + processedList);\r
\r
        System.out.println("\\n>>> PEEK BEST PRACTICE RULES:");\r
        System.out.println("  1. Use peek() ONLY for debugging, tracing, and logging.");\r
        System.out.println("  2. Do NOT perform stateful mutations inside peek().");\r
        System.out.println("  3. Note: JDK optimizations may completely skip peek() if downstream does not require element values (e.g. stream.peek(...).count() in modern JDKs)!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 17: peek(Consumer) Debugging\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PEEK METHOD CONTRACT:\r
   - Signature: 'Stream<T> peek(Consumer<? super T> action)'.\r
   - Returns a stream consisting of the elements of this stream, additionally performing\r
     the provided action on each element as elements are consumed from the resulting stream.\r
   - Intermediate & Stateless operation.\r
\r
2. CRITICAL CAVEAT (JDK 9+ OPTIMIZATION):\r
   - In modern Java versions, if the terminal operation does not require element values\r
     (such as 'stream.peek(...).count()'), the JVM stream optimizer may skip intermediate\r
     peek operations entirely!\r
   - Never rely on peek() for business logic side-effects.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why is peek() intended strictly for debugging rather than business logic?",shortAnswer:"peek() exists mainly to support debugging, where you want to see the elements as they flow past a certain point in a pipeline. Relying on peek() for side-effects violates functional purity and JDK stream optimizers can skip peek() when element traversal is not needed.",explanation:"In Java 9+, operations like stream.filter(...).peek(...).count() can optimize away peek calls entirely if the count is known from collection sizing.",hint:"Intended for logging/debugging; optimizers can skip peek in certain pipelines.",level:"Intermediate",codeExample:"stream.peek(x → log.debug('Processing: {}', x)).map(Transformer::run)"},{question:"What is the difference between peek() and forEach()?",shortAnswer:"peek() is an Intermediate operation that returns a Stream and is evaluated lazily; forEach() is a Terminal operation that returns void, consumes the stream, and triggers pipeline execution.",explanation:"Calling peek() without a terminal operation does nothing.",hint:"peek is intermediate (returns Stream); forEach is terminal (returns void).",level:"Beginner",codeExample:"list.stream().peek(System.out::println); // Does not run!\\nlist.stream().forEach(System.out::println); // Runs immediately."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"peek(Consumer)"}),": Non-Intrusive Pipeline Debugging & Logging"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Inspecting stream elements in flight: logging intermediate state without mutating pipeline results, and anti-patterns to avoid."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"PeekConsumerDebuggingDemo.java",highlightLines:[18,25,34,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Stream API Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 009_004 Topic 17: peek(Consumer) Debugging",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic17_peek_consumer_debugging_note.txt"})}),e.jsx(i,{note:"Use peek() purely for DEBUGGING and LOGGING intermediate steps! Never use peek() to mutate element states; that violates functional immutability and can cause unpredictable bugs in parallel streams! — Sukanta Hui"})]})}export{x as default};
