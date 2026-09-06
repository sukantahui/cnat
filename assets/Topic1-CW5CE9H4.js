import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as l}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const n=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 1: Creating Parallel Streams & Dynamic Switching (.parallel vs .sequential)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.List;\r
import java.util.stream.IntStream;\r
\r
public class CreatingParallelStreamsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: CREATING PARALLEL STREAMS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> branches = List.of("Barrackpore", "Naihati", "Shyamnagar", "Ichapur");\r
\r
        // 1. Direct from Collection: collection.parallelStream()\r
        System.out.println("1. From collection.parallelStream():");\r
        branches.parallelStream().forEach(b -> System.out.println("   - " + b + " [" + Thread.currentThread().getName() + "]"));\r
\r
        // 2. Converting existing stream: stream.parallel()\r
        System.out.println("\\n2. From IntStream.range().parallel():");\r
        int sum = IntStream.rangeClosed(1, 1000)\r
            .parallel() // Converts to parallel mode\r
            .sum();\r
        System.out.println("   Sum of 1..1000: " + sum);\r
\r
        // 3. Checking Stream Mode via isParallel()\r
        var stream = branches.stream().parallel();\r
        System.out.println("\\n3. Is stream parallel? " + stream.isParallel());\r
\r
        // 4. THE LAST CALL WINS RULE:\r
        // You CANNOT run half a pipeline in parallel and the other half sequentially!\r
        System.out.println("\\n4. Testing 'Last Call Wins':");\r
        branches.stream()\r
            .parallel()\r
            .filter(s -> true)\r
            .sequential() // Overrides previous parallel() call!\r
            .forEach(b -> System.out.println("   - " + b + " [" + Thread.currentThread().getName() + "]"));\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 1: Creating Parallel Streams\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WAYS TO CREATE PARALLEL STREAMS:\r
   - 'Collection.parallelStream()': Creates a parallel stream directly from any Collection.\r
   - 'BaseStream.parallel()': Converts any existing sequential stream into parallel mode.\r
   - 'BaseStream.sequential()': Converts any parallel stream back into sequential mode.\r
   - 'BaseStream.isParallel()': Returns boolean indicating whether stream is in parallel mode.\r
\r
2. CRITICAL RULE - LAST CALL WINS:\r
   - A stream pipeline does not execute stages in mixed modes.\r
   - The last call to '.parallel()' or '.sequential()' before the terminal operation sets\r
     the execution mode for the ENTIRE pipeline.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Can a stream execute intermediate filter() operations in parallel and subsequent map() operations sequentially?",shortAnswer:"No. A stream pipeline is unified and executes in exactly one mode (either 100% sequential or 100% parallel). The last call to .parallel() or .sequential() controls the entire pipeline.",explanation:"The JVM does not support mixed-mode pipeline stages.",hint:"The last call to parallel() or sequential() sets the mode for the whole stream.",level:"Intermediate",codeExample:"stream.parallel().filter(...).sequential().map(...); // Entire pipeline runs sequentially!"},{question:"How do you check at runtime whether a Stream instance is currently configured for parallel execution?",shortAnswer:"By calling the isParallel() boolean method on the Stream instance.",explanation:"Returns true if the terminal operation would execute in parallel.",hint:"stream.isParallel()",level:"Beginner",codeExample:"if (stream.isParallel()) { System.out.println('Parallel mode active'); }"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating Parallel Streams: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"parallelStream()"})," vs ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"stream().parallel()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Switching execution modes dynamically: collection.parallelStream(), stream.parallel(), stream.sequential(), and why the last mode call wins."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:n,title:"CreatingParallelStreamsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Parallel Streams FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 009_007 Topic 1: Creating Parallel Streams",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic1_creating_parallel_streams_note.txt"})}),e.jsx(l,{note:"A stream is either completely sequential OR completely parallel! If you write stream.parallel().filter(...).sequential(), the ENTIRE pipeline executes sequentially because the last call wins! — Sukanta Hui"})]})}export{S as default};
