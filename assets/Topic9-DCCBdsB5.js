import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 9: Functional Transformations on Optional - Pipeline Overview\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class FunctionalTransformationsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: FUNCTIONAL TRANSFORMATIONS ON OPTIONAL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Optional<StudentEnrollment> enrollmentOpt = Optional.of(\r
            new StudentEnrollment("Swadeep Paul", "Barrackpore", 94.5)\r
        );\r
\r
        // Fluent functional pipeline on Optional:\r
        // 1. filter: score >= 90 (Distinction check)\r
        // 2. map: extract center name\r
        // 3. map: transform to uppercase\r
        // 4. orElse: fallback if any step fails or is empty\r
        String distinctionCenter = enrollmentOpt\r
            .filter(e -> e.score() >= 90.0)\r
            .map(StudentEnrollment::center)\r
            .map(String::toUpperCase)\r
            .orElse("NOT_QUALIFIED");\r
\r
        System.out.println("Distinction Center Result: " + distinctionCenter);\r
\r
        // Demonstrating failure at filter step:\r
        Optional<StudentEnrollment> lowScoreOpt = Optional.of(\r
            new StudentEnrollment("Abhronila Das", "Shyamnagar", 78.0)\r
        );\r
\r
        String lowScoreResult = lowScoreOpt\r
            .filter(e -> e.score() >= 90.0) // Fails filter -> turns into Optional.empty()!\r
            .map(StudentEnrollment::center)\r
            .orElse("NOT_QUALIFIED");\r
\r
        System.out.println("Low Score Student Result : " + lowScoreResult);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentEnrollment(String name, String center, double score) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 9: Functional Transformations Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OPTIONAL AS A MONADIC CONTAINER:\r
   - Optional mirrors the Stream API functional operations:\r
     * 'filter(Predicate)' : Conditionally retains value or converts to empty.\r
     * 'map(Function)'     : Transforms contained value (1-to-1).\r
     * 'flatMap(Function)' : Transforms and un-nests Optional-returning functions.\r
     * 'stream()' [Java 9] : Converts Optional to Stream (0 or 1 element).\r
\r
2. MONADIC SHORT-CIRCUITING:\r
   - If an Optional becomes empty at ANY point in the chain, subsequent 'map' and 'filter'\r
     operations are immediately skipped without errors!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"What happens if a map() transformation is called on an empty Optional?",shortAnswer:"The mapping function is never invoked, and Optional.empty() is returned immediately.",explanation:"Allows chaining transformations safely without null checks at each step.",hint:"The mapping function is skipped and Optional.empty() is returned.",level:"Beginner",codeExample:"Optional.empty().map(String::toUpperCase); // Returns Optional.empty() safely"},{question:"How does Optional.filter(predicate) behave when the predicate evaluates to false?",shortAnswer:"It converts the Optional into Optional.empty(). If the predicate evaluates to true, the original Optional is returned unchanged.",explanation:"Enables declarative conditional validation.",hint:"Returns Optional.empty() if predicate is false.",level:"Beginner",codeExample:"Optional.of('Java').filter(s → s.length() > 10); // Returns Optional.empty()"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Functional Transformations on ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Optional"}),": Overview & Pipeline Architecture"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Treating Optional as a zero-or-one element Monad: composing filter(), map(), flatMap(), and stream() for elegant null-safe pipelines."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"FunctionalTransformationsOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Optional & Null-Safe Programming FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 009_008 Topic 9: Functional Transformations Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic9_functional_transformations_overview_note.txt"})}),e.jsx(r,{note:"Optional has the exact same filter() and map() methods as Streams! You can think of Optional as a Stream that contains at most ONE element! — Sukanta Hui"})]})}export{x as default};
