import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 6: Test Doubles Taxonomy - Dummy, Stub, Spy & Mock\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class TestDoublesMockStubSpyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: TEST DOUBLES TAXONOMY - BARRACKPORE ACADEMY");\r
        System.out.println(" EDUCATOR: SUKANTA HUI");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("1. DUMMY:");\r
        System.out.println("   - Passed around just to satisfy parameter lists; never actually used.\\n");\r
\r
        System.out.println("2. FAKE:");\r
        System.out.println("   - Working implementation but unsuitable for production (e.g. In-Memory H2 DB vs Oracle).\\n");\r
\r
        System.out.println("3. STUB:");\r
        System.out.println("   - Provides pre-configured canned answers to method calls made during test (when().thenReturn()).\\n");\r
\r
        System.out.println("4. SPY (Partial Mock):");\r
        System.out.println("   - Wraps a REAL object instance; delegates to real methods while recording invocations.\\n");\r
\r
        System.out.println("5. MOCK:");\r
        System.out.println("   - Pre-programmed with expectations which form a specification of the calls they expect to receive.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 6: Test Doubles Taxonomy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TEST DOUBLES CLASSIFICATION (Meszaros):\r
   - Dummy : Placeholder parameter.\r
   - Fake  : Working in-memory lightweight shortcut.\r
   - Stub  : Canned pre-programmed responses.\r
   - Spy   : Real object wrapper recording method calls.\r
   - Mock  : Behavioral verification of expected interactions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the key difference between Mockito.mock() and Mockito.spy()?",shortAnswer:"mock() creates a complete dummy object where all un-stubbed methods return default values (null, 0, false); spy() wraps a real object where un-stubbed methods execute real business logic while still allowing verification and partial stubbing.",explanation:"Mock vs Spy execution behavior.",hint:"Mock returns defaults; Spy executes real implementation unless stubbed.",level:"Intermediate",codeExample:"List<String> spyList = Mockito.spy(new ArrayList<>());"},{question:"When should you use a Fake instead of a Mock?",shortAnswer:"Use a Fake (e.g. In-Memory Repository) when testing complex multi-step workflows where simulating state changes across dozens of mock method stubs becomes brittle and tedious to maintain.",explanation:"Fakes simplify stateful integration scenarios.",hint:"For stateful workflows where stubbing every method becomes overly complex.",level:"Intermediate",codeExample:"InMemoryUserRepository fakeRepo = new InMemoryUserRepository();"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Test Doubles: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Dummy, Stub, Spy & Mock"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Gerard Meszaros taxonomy: understanding the definitive differences between Dummies, Fakes, Stubs, Spies, and full Mocks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"TestDoublesMockStubSpyDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JUnit 5 & Mockito FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:a,title:"Module 012_006 Topic 6: Test Doubles Taxonomy (Mock vs Stub vs Spy)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic6_test_doubles_mock_stub_spy_note.txt"})}),e.jsx(r,{note:"Students frequently confuse Stubs, Spies, and Mocks! A Stub returns canned responses; a Spy wraps a real object and records interactions; a Mock is pre-programmed with expectations that are verified! — Sukanta Hui"})]})}export{b as default};
