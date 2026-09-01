import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 8: anyMatch(Predicate) - Existential Condition Matching\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
\r
public class AnyMatchPredicateDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: ANYMATCH(PREDICATE) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentAccount> accounts = List.of(\r
            new StudentAccount("Swadeep Paul", "Barrackpore", true, 92.5),\r
            new StudentAccount("Tuhina Das", "Naihati", true, 95.0),\r
            new StudentAccount("Abhronila Das", "Shyamnagar", false, 78.0),\r
            new StudentAccount("Debangshu Mukherjee", "Ichapur", true, 91.0)\r
        );\r
\r
        // 1. Check if ANY student is from Naihati\r
        boolean hasNaihatiStudent = accounts.stream()\r
            .anyMatch(acc -> "Naihati".equals(acc.center()));\r
        System.out.println("1. Is there any student from Naihati center? " + hasNaihatiStudent);\r
\r
        // 2. Check if ANY student has an inactive account\r
        boolean hasInactiveStudent = accounts.stream()\r
            .anyMatch(acc -> !acc.active());\r
        System.out.println("2. Are there any inactive student accounts? " + hasInactiveStudent);\r
\r
        // 3. Check if ANY student scored 100 (No one has 100 -> evaluates entire stream and returns false)\r
        boolean hasCentum = accounts.stream()\r
            .anyMatch(acc -> acc.score() == 100.0);\r
        System.out.println("3. Did anyone achieve a perfect 100% score? " + hasCentum);\r
\r
        // 4. Calling anyMatch on an EMPTY stream: ALWAYS FALSE\r
        boolean emptyMatch = List.<String>of().stream().anyMatch(s -> true);\r
        System.out.println("4. anyMatch on empty stream: " + emptyMatch);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentAccount(String name, String center, boolean active, double score) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 8: anyMatch(Predicate)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT:\r
   - Signature: 'boolean anyMatch(Predicate<? super T> predicate)'.\r
   - Returns 'true' if AT LEAST ONE element matches the given predicate.\r
   - Terminal & Short-Circuiting operation.\r
   - If stream is empty, returns 'false' immediately without evaluating predicate.\r
\r
2. SHORT-CIRCUIT BEHAVIOR:\r
   - Halts processing as soon as predicate evaluates to 'true' for any single element.\r
   - If no element matches, traverses the entire stream before returning 'false'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What does anyMatch() return when invoked on an empty stream?",shortAnswer:"It returns false immediately without evaluating the predicate.",explanation:"Because an empty stream contains zero elements, there cannot be 'at least one' matching element.",hint:"Returns false on empty stream.",level:"Beginner",codeExample:"List.of().stream().anyMatch(x → true); // false"},{question:"What is the computational complexity of anyMatch() in best vs worst case?",shortAnswer:"Best case: O(1) if the first element matches (short-circuits immediately). Worst case: O(N) if no elements match or only the final element matches.",explanation:"This makes anyMatch much more efficient than filtering and counting.",hint:"O(1) best case (first element matches), O(N) worst case.",level:"Intermediate",codeExample:"// Much faster than list.stream().filter(pred).count() > 0\\nlist.stream().anyMatch(pred);"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"anyMatch(Predicate)"}),": Finding At Least One Match"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Checking stream existential conditions: returning boolean true immediately on first matching element and short-circuiting traversal."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"AnyMatchPredicateDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Terminal Operations & Reductions FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 009_005 Topic 8: anyMatch(Predicate)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic8_anymatch_predicate_note.txt"})}),e.jsx(r,{note:"Use anyMatch() whenever you need to ask an existential question: Does at least one student belong to the Barrackpore branch? Does at least one transaction exceed ₹1,00,000? Fast, simple, and clean! — Sukanta Hui"})]})}export{y as default};
