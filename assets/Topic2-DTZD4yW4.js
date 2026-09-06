import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 2: Compiling Regex: Pattern.compile() vs Matcher Execution (find & group)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
\r
public class PatternCompileAndMatcherExecutionDemo {\r
\r
    // Compile ONCE as static final constant for maximum performance:\r
    private static final Pattern HUB_PATTERN = Pattern.compile("Barrackpore|Naihati|Shyamnagar|Ichapur");\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: Pattern.compile() & Matcher.find() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String studentRecord = "Swadeep enrolled at Barrackpore hub, then visited Naihati center for exams.";\r
\r
        // Create a Matcher for the target text:\r
        Matcher matcher = HUB_PATTERN.matcher(studentRecord);\r
\r
        System.out.println(">>> Scanning Text for Academic Hub Mentions:");\r
        int matchCount = 0;\r
        while (matcher.find()) {\r
            matchCount++;\r
            System.out.printf("  Match #%d: '%s' [Found at index %d to %d]%n",\r
                    matchCount, matcher.group(), matcher.start(), matcher.end());\r
        }\r
\r
        System.out.printf("\\n>>> Total Academic Hubs Found: %d%n", matchCount);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 2: Pattern Compile & Matcher Execution\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MATCHER ITERATION:\r
   - 'Pattern.compile(regex)'     → Pre-compiles pattern.\r
   - 'pattern.matcher(text)'      → Returns stateful Matcher.\r
   - 'matcher.find()'             → Finds next matching occurrence.\r
   - 'matcher.group()'            → Returns matched string.\r
   - 'matcher.start()' / 'end()'  → Index boundaries.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"How do 'matcher.find()' and 'matcher.group()' work together in a while loop?",shortAnswer:"'matcher.find()' scans the input sequence looking for the NEXT subsequence that matches the pattern and advances the internal match cursor (returns true if found, false when exhausted). Inside the loop, 'matcher.group()' returns the exact matched substring.",explanation:"'matcher.start()' and 'matcher.end()' return the boundary character indices of the match.",hint:"find() advances to the next matching subsequence; group() returns the matched text.",level:"Beginner",codeExample:"while (matcher.find()) { System.out.println(matcher.group()); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Matcher Execution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Compiling Regex: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Pattern.compile()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Matcher.find()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the core regex iteration loop: scanning unstructured paragraphs, extracting matching substrings with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"matcher.group()"}),", and tracking boundary indices."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"PatternCompileAndMatcherExecutionDemo.java",highlightLines:[7,13,21,25,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Pattern Compilation FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_006 Topic 2: Pattern Compilation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic2_pattern_compile_note.txt"})}),e.jsx(a,{note:"Notice the while (matcher.find()) loop! It acts like an Iterator over every match found in the text, allowing you to extract each item one by one! — Sukanta Hui"})]})}export{g as default};
