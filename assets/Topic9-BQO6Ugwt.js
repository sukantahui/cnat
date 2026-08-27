import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 009_003: Method & Constructor References\r
 * Topic 9: Refactoring Complex Lambdas into Elegant Method References\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.List;\r
import java.util.Objects;\r
\r
class StudentLedgerRecord {\r
    final String name;\r
    final Double feesPaid;\r
\r
    public StudentLedgerRecord(String name, Double feesPaid) {\r
        this.name = name;\r
        this.feesPaid = feesPaid;\r
    }\r
\r
    public String getName() {\r
        return name;\r
    }\r
\r
    public Double getFeesPaid() {\r
        return feesPaid;\r
    }\r
\r
    public boolean isFeePaidComplete() {\r
        return feesPaid != null && feesPaid >= 15000.0;\r
    }\r
}\r
\r
public class RefactoringLambdasToMethodReferencesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: REFACTORING LAMBDAS TO METHOD REFERENCES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentLedgerRecord> roster = List.of(\r
                new StudentLedgerRecord("Swadeep Paul", 15000.0),\r
                new StudentLedgerRecord("Tuhina Das", 20000.0),\r
                new StudentLedgerRecord(null, 5000.0),\r
                new StudentLedgerRecord("Abhronila Das", 18000.0)\r
        );\r
\r
        // BEFORE (Verbose lambda expressions):\r
        List<String> feePaidStudentsVerbose = roster.stream()\r
                .filter(record -> record != null)\r
                .filter(record -> record.isFeePaidComplete())\r
                .map(record -> record.getName())\r
                .filter(name -> Objects.nonNull(name))\r
                .map(name -> name.toUpperCase())\r
                .toList();\r
\r
        // AFTER (Clean, declarative method references):\r
        List<String> feePaidStudentsRefactored = roster.stream()\r
                .filter(Objects::nonNull)\r
                .filter(StudentLedgerRecord::isFeePaidComplete)\r
                .map(StudentLedgerRecord::getName)\r
                .filter(Objects::nonNull)\r
                .map(String::toUpperCase)\r
                .toList();\r
\r
        System.out.println(">>> 1. Verbose Lambda Result      : " + feePaidStudentsVerbose);\r
        System.out.println(">>> 2. Refactored MethodRef Result: " + feePaidStudentsRefactored);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_003: Method & Constructor References\r
Topic 9: Refactoring Lambdas to Method References\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. REFACTORING PATTERNS:\r
   - 'x -> Objects.nonNull(x)'     &rarr; 'Objects::nonNull'\r
   - 's -> s.getName()'            &rarr; 'Student::getName'\r
   - 's -> s.toUpperCase()'        &rarr; 'String::toUpperCase'\r
   - 'x -> System.out.println(x)'  &rarr; 'System.out::println'\r
   - '() -> new ArrayList<>()'     &rarr; 'ArrayList::new'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How does refactoring verbose lambda pipelines to Method References improve code quality and maintainability?",shortAnswer:"Refactoring verbose parameter declarations (e.g. 'record -> record.getName()' to 'StudentLedgerRecord::getName', and 'x -> Objects.nonNull(x)' to 'Objects::nonNull') removes distracting syntactic boilerplate and eliminates arbitrary parameter naming clutter. It elevates code to a high-level declarative state where each stream operation clearly describes WHAT method is invoked on domain models rather than HOW parameters are passed.",explanation:"Best practices for refactoring lambdas into method references.",hint:"Replaces boilerplate parameter names with clear declarative method handles like Objects::nonNull and String::toUpperCase.",level:"Intermediate",codeExample:".filter(record -> record.isPaid()) -> .filter(Record::isPaid)"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_003 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Refactoring Pipelines"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Refactoring ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Complex Lambdas"})," into Declarative ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Method References"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Clean production pipelines: refactoring noisy lambda forwarding statements into elegant ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Objects::nonNull"})," and domain getter method references."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"RefactoringLambdasToMethodReferencesDemo.java",highlightLines:[7,8,38,39,40,41,42,47,48,49,50,51]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Refactoring Pipelines FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_003 Topic 9: Refactoring Pipelines",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_003_topic9_refactoring_pipelines_note.txt"})}),e.jsx(a,{note:"Compare the two pipelines in this demo: the verbose lambda version is full of noisy 'record -> record...' clutter, while the method reference version reads like a clean executive summary! That is the power of modern Java! — Sukanta Hui"})]})}export{b as default};
