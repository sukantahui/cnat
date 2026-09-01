import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 3: Collectors.joining() - High-Performance String Concatenation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.List;\r
import java.util.stream.Collectors;\r
\r
public class CollectorsJoiningDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: COLLECTORS.JOINING() - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> branches = List.of("Barrackpore", "Naihati", "Shyamnagar", "Ichapur");\r
\r
        // 1. joining(): Direct concatenation with no delimiter\r
        String directConcat = branches.stream()\r
            .collect(Collectors.joining());\r
        System.out.println("1. Direct joining(): " + directConcat);\r
\r
        // 2. joining(delimiter): Joined with delimiter\r
        String csvBranches = branches.stream()\r
            .collect(Collectors.joining(", "));\r
        System.out.println("2. joining(', '): " + csvBranches);\r
\r
        // 3. joining(delimiter, prefix, suffix): Full formatting with brackets\r
        String formattedJsonArray = branches.stream()\r
            .map(b -> "\\"" + b + "\\"")\r
            .collect(Collectors.joining(", ", "[ ", " ]"));\r
        System.out.println("3. joining(', ', '[ ', ' ]'): " + formattedJsonArray);\r
\r
        // 4. SQL IN Clause Generation Example:\r
        List<Integer> studentIds = List.of(101, 102, 103, 104);\r
        String sqlInClause = studentIds.stream()\r
            .map(String::valueOf)\r
            .collect(Collectors.joining(", ", "SELECT * FROM students WHERE id IN (", ");"));\r
        System.out.println("\\n4. Dynamic SQL Query Generation:\\n   " + sqlInClause);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 3: Collectors.joining()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE THREE OVERLOADS OF COLLECTORS.JOINING():\r
   1. 'joining()': Concatenates elements into a single String in encounter order.\r
   2. 'joining(CharSequence delimiter)': Separates elements with the given delimiter.\r
   3. 'joining(CharSequence delimiter, CharSequence prefix, CharSequence suffix)':\r
      Surrounds the joined output with a prefix and suffix.\r
\r
2. PERFORMANCE ADVANTAGE:\r
   - Uses 'java.util.StringJoiner' / 'StringBuilder' under the hood.\r
   - Zero temporary string object creation.\r
   - Automatically handles delimiters without leaving trailing commas.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,a=[{question:"What stream element type is required to use Collectors.joining()?",shortAnswer:"Stream elements must be of type CharSequence (such as String, StringBuilder, or CharBuffer). If stream elements are non-string objects or primitives, they must first be transformed via map(String::valueOf) or map(Object::toString).",explanation:"joining() is typed as Collector<CharSequence, ?, String>.",hint:"Stream elements must implement CharSequence (e.g. String).",level:"Beginner",codeExample:"ids.stream().map(String::valueOf).collect(Collectors.joining(', '));"},{question:"What does Collectors.joining(', ', '[', ']') return on an EMPTY stream?",shortAnswer:"It returns the prefix followed immediately by the suffix (i.e. '[]'), without any delimiter.",explanation:"This produces clean empty collection representations without dangling delimiters.",hint:"Returns 'prefix + suffix' (e.g. '[]').",level:"Intermediate",codeExample:"Stream.<String>empty().collect(Collectors.joining(', ', '[', ']')); // Returns '[]'"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["String Concatenation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collectors.joining()"})," with Delimiters, Prefix & Suffix"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Formatting text sequences: joining stream strings with custom separators, opening prefixes, and closing suffixes efficiently using StringBuilder."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CollectorsJoiningDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Collectors Framework FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 009_006 Topic 3: Collectors.joining()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic3_collectors_joining_note.txt"})}),e.jsx(i,{note:"Never use string concatenation in a reduce loop! Collectors.joining(', ', '[', ']') uses an optimized StringBuilder internally to produce formatted strings with zero intermediate string allocation overhead! — Sukanta Hui"})]})}export{h as default};
