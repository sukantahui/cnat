import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 10: noneMatch(Predicate) - Total Absence Condition Matching\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
\r
public class NoneMatchPredicateDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: NONEMATCH(PREDICATE) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentExam> exams = List.of(\r
            new StudentExam("Swadeep Paul", 88.0),\r
            new StudentExam("Tuhina Das", 94.5),\r
            new StudentExam("Abhronila Das", 78.0),\r
            new StudentExam("Debangshu Mukherjee", 91.0)\r
        );\r
\r
        // 1. Check if NO students failed (Score < 40.0) -> returns true\r
        boolean noFailures = exams.stream()\r
            .noneMatch(e -> e.score() < 40.0);\r
        System.out.println("1. Did zero students fail the exam? " + noFailures);\r
\r
        // 2. Check if NO students have a score below 80.0 (Abhronila has 78.0 -> returns false!)\r
        boolean noOneBelow80 = exams.stream()\r
            .noneMatch(e -> e.score() < 80.0);\r
        System.out.println("2. Are there zero students scoring below 80%? " + noOneBelow80);\r
\r
        // 3. Behavior on empty stream: returns true (Vacuously true)\r
        boolean emptyNoneMatch = List.<String>of().stream().noneMatch(s -> true);\r
        System.out.println("3. noneMatch on empty stream: " + emptyNoneMatch);\r
\r
        System.out.println("\\n>>> DE MORGAN EQUIVALENCE:");\r
        System.out.println("  stream.noneMatch(p) === stream.allMatch(p.negate())");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    record StudentExam(String name, double score) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 10: noneMatch(Predicate)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT:\r
   - Signature: 'boolean noneMatch(Predicate<? super T> predicate)'.\r
   - Returns 'true' if NO elements match the given predicate.\r
   - Terminal & Short-Circuiting operation.\r
\r
2. SHORT-CIRCUIT MECHANICS:\r
   - Short-circuits and returns 'false' immediately upon encountering the first matching element.\r
   - If no elements match, returns 'true'.\r
\r
3. BEHAVIOR ON EMPTY STREAMS:\r
   - Returns 'true' (vacuously true, since 0 matching elements exist).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Under what condition does noneMatch() short-circuit?",shortAnswer:"noneMatch() short-circuits as soon as ANY element evaluates the predicate to true, immediately returning false without processing further elements.",explanation:"Finding even one matching element disproves the assertion that 'none match'.",hint:"Short-circuits on the first true evaluation.",level:"Beginner",codeExample:"List.of(1, 3, 4, 7).stream().noneMatch(n -> n % 2 == 0); // Stops at 4 and returns false"},{question:"How does noneMatch(p) relate to allMatch() and anyMatch() in boolean logic?",shortAnswer:"noneMatch(p) is logically equivalent to allMatch(p.negate()) and !anyMatch(p).",explanation:"This follows De Morgan's laws applied to stream quantifiers.",hint:"noneMatch(p) === !anyMatch(p) === allMatch(!p).",level:"Intermediate",codeExample:"stream.noneMatch(x -> x < 0) === !stream.anyMatch(x -> x < 0)"}];function M(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"noneMatch(Predicate)"}),": Verifying Total Absence"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Asserting non-existence: ensuring zero elements satisfy undesirable conditions, relation to allMatch(!predicate), and empty stream behavior."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"NoneMatchPredicateDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Terminal Operations & Reductions FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 009_005 Topic 10: noneMatch(Predicate)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic10_nonematch_predicate_note.txt"})}),e.jsx(r,{note:"noneMatch(p) is equivalent to allMatch(p.negate())! Use noneMatch() whenever you want to assert the total absence of bad data: no nulls, no negative balances, and no failed students! — Sukanta Hui"})]})}export{M as default};
