import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 3: JUnit 5 Assertions - assertEquals, assertThrows, assertTimeout & assertAll\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class JUnit5AssertionsGroupedExecutionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: JUNIT 5 ASSERTION TOOLKIT - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. VALUE ASSERTIONS (org.junit.jupiter.api.Assertions):");\r
        System.out.println("  - assertEquals(expected, actual, "Failure message")");\r
        System.out.println("  - assertTrue(condition), assertFalse(condition)");\r
        System.out.println("  - assertNull(object), assertNotNull(object)\\n");\r
\r
        System.out.println(">>> 2. EXCEPTION ASSERTIONS:");\r
        System.out.println("  - assertThrows(IllegalArgumentException.class, () -> service.calculate(-1));\\n");\r
\r
        System.out.println(">>> 3. TIMEOUT ASSERTIONS:");\r
        System.out.println("  - assertTimeout(Duration.ofMillis(100), () -> heavyAlgorithm());\\n");\r
\r
        System.out.println(">>> 4. GROUPED ASSERTIONS (assertAll):");\r
        System.out.println("  assertAll("Student Verification",");\r
        System.out.println("      () -> assertEquals("Tuhina Das", student.getName()),");\r
        System.out.println("      () -> assertEquals("Barrackpore", student.getCenter()),");\r
        System.out.println("      () -> assertTrue(student.getScore() > 90)");\r
        System.out.println("  );");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 3: JUnit 5 Assertions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE JUNIT 5 ASSERTIONS:\r
   - 'assertEquals(expected, actual)'\r
   - 'assertThrows(ExpectedException.class, Executable)'\r
   - 'assertTimeout(Duration, Executable)'\r
   - 'assertAll(heading, Executable...)' : Runs all assertions and reports all failures together.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why is assertAll() superior to multiple sequential assertEquals() statements?",shortAnswer:"Sequential assertions fail-fast on the first failure, hiding subsequent errors. assertAll() executes every assertion in the group and produces a consolidated report detailing all failures simultaneously.",explanation:"Grouped assertions in JUnit 5.",hint:"Executes all assertions and reports all failures together rather than aborting at the first error.",level:"Intermediate",codeExample:"assertAll(() → assertEquals(a, b), () → assertTrue(c));"},{question:"How do you test that a specific exception is thrown in JUnit 5?",shortAnswer:"Using Assertions.assertThrows(ExceptionClass.class, () → executableMethod()), which returns the thrown exception instance for further assertions on its message or cause.",explanation:"JUnit 5 lambda-based exception testing.",hint:"assertThrows takes the expected Exception class and an executable lambda.",level:"Beginner",codeExample:"IllegalArgumentException ex = assertThrows(IllegalArgumentException.class, () → calc(-1));"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["JUnit 5 Assertions: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"assertEquals, assertThrows & assertAll"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Comprehensive assertion toolkit: validating values with assertEquals, verifying exceptions with assertThrows, timeouts with assertTimeout, and grouped execution with assertAll."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"JUnit5AssertionsGroupedExecutionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"JUnit 5 & Testing FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 012_006 Topic 3: JUnit 5 Assertions & Grouped Execution",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic3_junit5_assertions_grouped_execution_note.txt"})}),e.jsx(n,{note:"In JUnit 5, assertAll() is a game-changer! In traditional testing, if the first assertion fails, subsequent assertions never run. assertAll() executes ALL assertions and reports all failures together in a single consolidated report! — Sukanta Hui"})]})}export{g as default};
