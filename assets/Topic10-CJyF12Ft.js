import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 10: Test-Driven Development (TDD) Workflow - Red -> Green -> Refactor\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class TDDWorkflowRedGreenRefactorDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: TEST-DRIVEN DEVELOPMENT (TDD) CYCLE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE SACRED TDD 3-STAGE CYCLE:\\n");\r
\r
        System.out.println("1. 🔴 RED:");\r
        System.out.println("   - Write a unit test for a feature before writing any production code.");\r
        System.out.println("   - Run test and watch it FAIL (proves test works and tests the right thing).\\n");\r
\r
        System.out.println("2. 🟢 GREEN:");\r
        System.out.println("   - Write the MINIMAL amount of production code needed to make test pass.");\r
        System.out.println("   - Do not write extra features or over-engineer.\\n");\r
\r
        System.out.println("3. 🔵 REFACTOR:");\r
        System.out.println("   - Clean up code, remove duplication, improve naming, optimize algorithms.");\r
        System.out.println("   - Rerun test suite to guarantee zero regression breaks.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 10: TDD Workflow (Red -> Green -> Refactor)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TDD LAWS (Uncle Bob):\r
   - You may not write production code until you have written a failing unit test.\r
   - You may not write more of a unit test than is sufficient to fail.\r
   - You may not write more production code than is sufficient to pass the failing test.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is it mandatory in TDD to verify that a test FAILS (Red) before writing production code?",shortAnswer:"To prove that the test is actually executing, validly asserting behavior, and not giving a false positive pass (e.g. Due to an empty test method or tautological assertion).",explanation:"Prevents false positive tests in TDD.",hint:"Confirms the test actually validates what is missing and cannot pass vacuously.",level:"Beginner",codeExample:"@Test void testFailsInitially() { assertEquals(5, calc.add(2, 3)); }"},{question:"What is the primary benefit of the 'Refactor' step in the TDD cycle?",shortAnswer:"The safety net of green tests gives developers complete confidence to clean code smells, eliminate duplication, and improve architectural design without the fear of breaking working software.",explanation:"Refactoring with test safety net.",hint:"Allows continuous code improvements with zero fear of breaking features.",level:"Intermediate",codeExample:"// Clean code with passing tests"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["TDD Workflow: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Red -> Green -> Refactor"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Test-Driven Development: the discipline of writing failing tests first (Red), implementing minimal code to pass (Green), and cleaning up design (Refactor)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"TDDWorkflowRedGreenRefactorDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Testing & Maven FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 012_006 Topic 10: TDD Workflow (Red -> Green -> Refactor)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic10_tdd_workflow_red_green_refactor_note.txt"})}),e.jsx(o,{note:"TDD is not just a testing technique; it is a software design discipline! When you write the test first, you design the API from the client perspective, resulting in clean, decoupled, and modular code! — Sukanta Hui"})]})}export{x as default};
