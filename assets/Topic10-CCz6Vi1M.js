import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 10: Pattern Matching for switch & when Guards (Java 21+ Standard - JEP 441)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
public class PatternMatchingSwitchJava21Demo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: PATTERN MATCHING FOR SWITCH (JAVA 21) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> TESTING JAVA 21 PATTERN SWITCH WITH GUARDS (when):");\r
        System.out.println("  1. " + formatValue("Swadeep Paul"));\r
        System.out.println("  2. " + formatValue("A"));\r
        System.out.println("  3. " + formatValue(95));\r
        System.out.println("  4. " + formatValue(45));\r
        System.out.println("  5. " + formatValue(new Student(101, "Tuhina Das")));\r
        System.out.println("  6. " + formatValue(null));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    // Modern Java 21 Pattern Matching switch Expression:\r
    static String formatValue(Object obj) {\r
        return switch (obj) {\r
            case null -> "NULL VALUE DETECTED (Handled safely without NPE!)";\r
            // Pattern with guard clause 'when':\r
            case String s when s.length() > 5 -> "Long String (" + s.length() + " chars): " + s.toUpperCase();\r
            case String s -> "Short String: " + s;\r
            case Integer i when i >= 85 -> "Distinction Score: " + i + "%";\r
            case Integer i -> "Standard Score: " + i + "%";\r
            case Student s -> "Student Record: ID " + s.id() + ", Name: " + s.name();\r
            default -> "Unrecognized Type: " + obj.getClass().getSimpleName();\r
        };\r
    }\r
\r
    record Student(int id, String name) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 10: Pattern Matching for switch (Java 21)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS PATTERN SWITCH (Java 21 Standard - JEP 441):\r
   - Switch statements and expressions can now match on object types directly.\r
   - Eliminates cascading 'if-else-if instanceof' chains.\r
\r
2. KEY FEATURES:\r
   1. Type Patterns: 'case String s → ...'\r
   2. Guard Clauses ('when'): 'case String s when s.length() > 5 → ...'\r
   3. Direct Null Handling: 'case null → ...' (No longer throws NullPointerException by default).\r
   4. Exhaustiveness Checking: Compiler ensures all possible values are covered.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"How does Java 21 pattern switch handle null values?",shortAnswer:"In Java 21, you can explicitly define a 'case null ->' branch inside the switch. If no 'case null' is provided and null is passed to a pattern switch, it throws a NullPointerException by default.",explanation:"Provides clean, declarative null handling.",hint:"Supports explicit 'case null ->' branch.",level:"Beginner",codeExample:"switch (obj) { case null → 'Empty'; case String s → s; default → 'Other'; }"},{question:"What keyword is used for guard clauses in Java 21 pattern matching switch?",shortAnswer:"The 'when' keyword (e.g. 'case String s when s.length() > 10 → ...').",explanation:"Earlier preview versions experimented with '&&', but Java 21 finalized 'when'.",hint:"The 'when' keyword.",level:"Beginner",codeExample:"case Integer score when score >= 90 → 'Distinction';"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Pattern Matching for ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"switch & when Guards (JEP 441)"}),": Modern Dispatching"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Data-oriented programming in Java 21: switching on object types, replacing if-else chains, null case handling, and boolean when guard clauses."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"PatternMatchingSwitchJava21Demo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Modern Java Features FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 009_009 Topic 10: Pattern Matching for switch (Java 21)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic10_pattern_matching_switch_java21_note.txt"})}),e.jsx(r,{note:"In Java 21, switch can test types directly with case String s, case Integer i, and case null! You can even add guard conditions with when s.length() > 10! It replaces massive if-else cascades! — Sukanta Hui"})]})}export{x as default};
