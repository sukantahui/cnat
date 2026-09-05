import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 1: The java.util.regex Package Architecture: Pattern, Matcher & PatternSyntaxException\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
import java.util.regex.PatternSyntaxException;\r
\r
public class RegexPackageArchitectureDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: java.util.regex ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 3 Core Classes in java.util.regex:");\r
        System.out.println();\r
        System.out.println("  1. java.util.regex.Pattern (Compiled Immutable Representation):");\r
        System.out.println("     - Pre-compiles regex bytecode into a Finite State Automaton (FSA).");\r
        System.out.println("     - Immutable and 100% thread-safe (ideal for static final constants).");\r
        System.out.println();\r
        System.out.println("  2. java.util.regex.Matcher (Stateful Search Engine):");\r
        System.out.println("     - Performs matching operations against input text.");\r
        System.out.println("     - MUTABLE and NOT thread-safe (local to current method/thread).");\r
        System.out.println();\r
        System.out.println("  3. java.util.regex.PatternSyntaxException (Unchecked Runtime Exception):");\r
        System.out.println("     - Thrown when regex syntax contains illegal characters or unbalanced brackets.");\r
\r
        // Testing PatternSyntaxException:\r
        try {\r
            Pattern.compile("[a-z"); // Missing closing bracket!\r
        } catch (PatternSyntaxException e) {\r
            System.out.println("\\n>>> Caught PatternSyntaxException Demonstration:");\r
            System.out.println("  Message : " + e.getDescription());\r
            System.out.println("  Pattern : " + e.getPattern());\r
            System.out.println("  Index   : " + e.getIndex());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 1: java.util.regex Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARCHITECTURE ROLES:\r
   - 'Pattern': Compiled, immutable, thread-safe FSA engine.\r
   - 'Matcher': Stateful, single-threaded search iterator.\r
   - 'PatternSyntaxException': Thrown for invalid regex syntax.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the threading model difference between 'java.util.regex.Pattern' and 'java.util.regex.Matcher'?",shortAnswer:"'Pattern' is immutable and thread-safe; a compiled Pattern can be safely declared as 'public static final' and shared across multiple threads. 'Matcher' maintains mutable internal state (match pointers, capture groups) and is NOT thread-safe.",explanation:"Always compile Patterns once as static constants, and create new Matchers per thread/request.",hint:"Pattern is compiled, immutable, and thread-safe; Matcher is stateful and single-threaded.",level:"Intermediate",codeExample:'public static final Pattern EMAIL_PAT = Pattern.compile("^[A-Za-z0-9+_.-]+@(.+)$");'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Regex Architecture"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.regex"})," Package: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Pattern"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Matcher"})," & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"PatternSyntaxException"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the tripartite regex engine: thread-safe compiled ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Pattern"})," automata, mutable ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Matcher"})," cursors, and syntax exception diagnostics."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"RegexPackageArchitectureDemo.java",highlightLines:[7,16,17,21,22,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Regex Architecture FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_006 Topic 1: Regex Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic1_regex_architecture_note.txt"})}),e.jsx(r,{note:"Never compile a Pattern inside a loop! Pre-compile it once as 'public static final Pattern MY_PAT = Pattern.compile(...);' to save massive CPU compiling overhead! — Sukanta Hui"})]})}export{g as default};
