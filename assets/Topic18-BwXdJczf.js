import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 18: limit() & skip() - Stream Truncation & Functional Pagination\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.List;\r
\r
public class LimitSkipPaginationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 18: LIMIT() & SKIP() PAGINATION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentDirectory = List.of(\r
            "1. Swadeep Paul", "2. Tuhina Das", "3. Abhronila Das", \r
            "4. Debangshu Mukherjee", "5. Priya Sharma", "6. Anish Dey", \r
            "7. Rahul Roy", "8. Sneha Sen", "9. Bikram Ghosh", "10. Riya Das"\r
        );\r
\r
        // 1. limit(maxSize): Truncates stream to at most N elements\r
        System.out.println("1. Top 3 Students via limit(3):");\r
        studentDirectory.stream()\r
            .limit(3)\r
            .forEach(s -> System.out.println("   " + s));\r
\r
        // 2. skip(n): Discards first N elements\r
        System.out.println("\\n2. Students after skipping first 7 via skip(7):");\r
        studentDirectory.stream()\r
            .skip(7)\r
            .forEach(s -> System.out.println("   " + s));\r
\r
        // 3. Functional Pagination: Page 2 with PageSize = 3 (skip: (page - 1) * pageSize)\r
        int pageNumber = 2;\r
        int pageSize = 3;\r
        int offset = (pageNumber - 1) * pageSize;\r
\r
        System.out.println("\\n3. Pagination [Page " + pageNumber + ", PageSize " + pageSize + "]:");\r
        List<String> page2 = studentDirectory.stream()\r
            .skip(offset)\r
            .limit(pageSize)\r
            .toList();\r
        page2.forEach(s -> System.out.println("   " + s));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 18: limit() & skip() Pagination\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LIMIT(LONG MAXSIZE):\r
   - Returns a stream consisting of the elements of this stream, truncated to be no longer than 'maxSize' in length.\r
   - Short-circuiting stateful intermediate operation.\r
   - Extremely useful for bounding infinite streams ('Stream.iterate().limit(10)').\r
\r
2. SKIP(LONG N):\r
   - Returns a stream consisting of the remaining elements of this stream after discarding the first 'n' elements.\r
   - Stateful intermediate operation.\r
   - If stream contains fewer than 'n' elements, returns an empty stream.\r
\r
3. PAGINATION FORMULA:\r
   - 'stream.skip((pageNumber - 1) * pageSize).limit(pageSize)'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"How do limit() and skip() combine to implement in-memory pagination?",shortAnswer:"By skipping the offset elements (page - 1) * pageSize and then applying limit(pageSize), exactly one page chunk of data is extracted from the stream.",explanation:"Equivalent to SQL OFFSET and LIMIT clauses.",hint:"skip((page - 1) * size).limit(size)",level:"Beginner",codeExample:"stream.skip((page - 1) * pageSize).limit(pageSize).toList();"},{question:"Why is limit() considered a short-circuiting operation while skip() is not?",shortAnswer:"limit() can terminate the upstream pipeline early as soon as the requested count is reached, allowing infinite streams to terminate. skip() cannot terminate early because it must consume the first N elements before letting subsequent elements through.",explanation:"limit() halts downstream pulling once maxSize is met.",hint:"limit stops pulling once quota is met; skip must discard first N items before continuing.",level:"Intermediate",codeExample:"Stream.generate(Math::random).limit(5) // Terminates cleanly!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 18"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"limit() & skip()"}),": Stream Truncation & Pagination"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Implementing pagination pipelines: skipping offsets, limiting page sizes, and short-circuiting large or infinite streams."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"LimitSkipPaginationDemo.java",highlightLines:[18,25,33,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Stream API Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:s,title:"Module 009_004 Topic 18: limit() & skip() Pagination",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic18_limit_skip_pagination_note.txt"})}),e.jsx(a,{note:"skip(offset).limit(pageSize) is the universal functional pattern for pagination in Java! It works just like SQL OFFSET and LIMIT clauses. — Sukanta Hui"})]})}export{x as default};
