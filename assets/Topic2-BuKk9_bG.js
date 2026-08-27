import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 2: Core JUnit 5 Annotations - @Test, @BeforeEach, @AfterEach & Lifecycle\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class CoreJUnit5LifecycleAnnotationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: CORE JUNIT 5 LIFECYCLE ANNOTATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> JUNIT 5 LIFECYCLE SEQUENCE FOR EACH TEST RUN:");\r
        System.out.println("  1. @BeforeAll  : Executed ONCE before any test (Must be static by default).");\r
        System.out.println("  2.   @BeforeEach : Executed before EACH @Test method (Fresh state initialization).");\r
        System.out.println("  3.     @Test     : The actual test execution method.");\r
        System.out.println("  4.   @AfterEach  : Executed after EACH @Test method (State cleanup).");\r
        System.out.println("  5. @AfterAll   : Executed ONCE after all tests complete (Resource teardown).\\n");\r
\r
        System.out.println(">>> ADDITIONAL KEY ANNOTATIONS:");\r
        System.out.println("  - @DisplayName("Human readable description for test reports")");\r
        System.out.println("  - @Disabled("Ignored temporarily due to ongoing refactoring")");\r
        System.out.println("  - @Tag("fast" / "slow" / "smoke") for test filtering.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 2: Core JUnit 5 Annotations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JUNIT 5 LIFECYCLE:\r
   - '@BeforeAll'  : Runs once before all tests (static).\r
   - '@BeforeEach' : Runs before every test method.\r
   - '@Test'       : Marks a method as a test.\r
   - '@AfterEach'  : Runs after every test method.\r
   - '@AfterAll'   : Runs once after all tests complete (static).\r
   - '@DisplayName': Custom human-friendly test title.\r
   - '@Disabled'   : Skips test execution.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does JUnit create a NEW instance of the test class for each @Test method by default?",shortAnswer:"To enforce test isolation and prevent side-effects or shared mutable state from leaking between test methods. This lifecycle mode is called PER_METHOD (can be changed to PER_CLASS via @TestInstance).",explanation:"Test isolation guarantee in JUnit.",hint:"Ensures complete isolation between test methods with no shared state leaks.",level:"Intermediate",codeExample:"@TestInstance(TestInstance.Lifecycle.PER_CLASS)"},{question:"What is the difference between JUnit 4 @Before and JUnit 5 @BeforeEach?",shortAnswer:"JUnit 4 used @Before and @After; JUnit 5 renamed them to @BeforeEach and @AfterEach for crystal clear semantic clarity, while replacing @BeforeClass and @AfterClass with @BeforeAll and @AfterAll.",explanation:"JUnit 4 to JUnit 5 migration rename.",hint:"@Before became @BeforeEach; @BeforeClass became @BeforeAll.",level:"Beginner",codeExample:"@BeforeEach void setUp() { ... }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Core JUnit 5 Annotations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"@Test, @BeforeEach & Lifecycle"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Test lifecycle management: mastering @Test, @BeforeEach, @AfterEach, @BeforeAll, @AfterAll, @DisplayName, and @Disabled."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"CoreJUnit5LifecycleAnnotationsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JUnit 5 & Testing FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 012_006 Topic 2: Core JUnit 5 Lifecycle Annotations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic2_core_junit5_lifecycle_annotations_note.txt"})}),e.jsx(r,{note:"Note the difference between @BeforeEach (runs before EVERY individual test method) and @BeforeAll (runs once per test class before all tests and must be static by default)! — Sukanta Hui"})]})}export{x as default};
