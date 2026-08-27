import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 9: allMatch(Predicate) - Universal Condition Verification & Vacuous Truth\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
\r
public class AllMatchPredicateDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: ALLMATCH(PREDICATE) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentEligibility> batch = List.of(\r
            new StudentEligibility("Swadeep Paul", 88.5, true),\r
            new StudentEligibility("Tuhina Das", 95.0, true),\r
            new StudentEligibility("Abhronila Das", 76.0, true),\r
            new StudentEligibility("Debangshu Mukherjee", 91.5, true)\r
        );\r
\r
        // 1. Check if ALL students are active (All true -> returns true)\r
        boolean allActive = batch.stream()\r
            .allMatch(StudentEligibility::active);\r
        System.out.println("1. Are all students active? " + allActive);\r
\r
        // 2. Check if ALL students scored >= 80.0 (Abhronila has 76.0 -> short-circuits on Abhronila!)\r
        boolean allDistinction = batch.stream()\r
            .peek(s -> System.out.println("   [EVALUATING] " + s.name() + " (" + s.score() + ")"))\r
            .allMatch(s -> s.score() >= 80.0);\r
        System.out.println("2. Did all students achieve >= 80%? " + allDistinction);\r
\r
        // 3. VACUOUS TRUTH: allMatch on an EMPTY stream returns TRUE!\r
        boolean emptyAllMatch = List.<String>of().stream().allMatch(s -> s.startsWith("X"));\r
        System.out.println("\\n3. allMatch on empty stream (Vacuous Truth): " + emptyAllMatch);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentEligibility(String name, double score, boolean active) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 9: allMatch(Predicate)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT:\r
   - Signature: 'boolean allMatch(Predicate<? super T> predicate)'.\r
   - Returns 'true' if ALL elements match the given predicate.\r
   - Terminal & Short-Circuiting operation.\r
\r
2. SHORT-CIRCUIT MECHANICS:\r
   - Short-circuits and returns 'false' immediately when the FIRST non-matching element is found.\r
   - If all elements match, inspects all elements before returning 'true'.\r
\r
3. VACUOUS TRUTH RULE:\r
   - If the stream is EMPTY, 'allMatch()' returns 'true' unconditionally.\r
   - Formal logic explanation: There exists no counter-example in the set that violates the condition.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Under what condition does allMatch() short-circuit and terminate early?",shortAnswer:"allMatch() short-circuits as soon as ANY single element evaluates the predicate to false. Once a failing element is discovered, subsequent elements are never evaluated.",explanation:"A single false result is sufficient to prove that not all elements match.",hint:"Short-circuits on the first false evaluation.",level:"Beginner",codeExample:"List.of(2, 4, 5, 8).stream().allMatch(n -> n % 2 == 0); // Stops at 5 and returns false"},{question:"Why does allMatch() return true on an empty stream while anyMatch() returns false?",shortAnswer:"Because allMatch asserts that no element violates the condition (which is vacuously true for empty sets), whereas anyMatch asserts that at least one matching element exists (which is false for empty sets).",explanation:"This follows universal vs existential quantifier rules in mathematical logic.",hint:"allMatch tests for absence of counter-examples; anyMatch tests for presence of an example.",level:"Intermediate",codeExample:"Stream.empty().allMatch(x -> false); // Returns true!\\nStream.empty().anyMatch(x -> true);  // Returns false!"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"allMatch(Predicate)"}),": Universal Condition Verification"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Checking universal assertions: verifying that every single element satisfies the predicate, vacuous truth on empty streams, and false short-circuiting."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"AllMatchPredicateDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Terminal Operations & Reductions FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_005 Topic 9: allMatch(Predicate)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic9_allmatch_predicate_note.txt"})}),e.jsx(r,{note:"Remember: allMatch() short-circuits on FALSE! The moment it encounters even a single element that fails the predicate, it stops immediately and returns false! — Sukanta Hui"})]})}export{f as default};
