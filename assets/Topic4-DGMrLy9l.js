import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 4: Parameterized Tests with @ParameterizedTest and Data Sources\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class ParameterizedTestsSourcesDemo {\r
\r
    public static class StringUtils {\r
        public static boolean isPalindrome(String s) {\r
            if (s == null) return false;\r
            String cleaned = s.replaceAll("\\\\s+", "").toLowerCase();\r
            return new StringBuilder(cleaned).reverse().toString().equals(cleaned);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: PARAMETERIZED TESTS IN JUNIT 5 - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. @ValueSource EXAMPLE:");\r
        System.out.println("  @ParameterizedTest");\r
        System.out.println("  @ValueSource(strings = {"radar", "madam", "level", "rotor"})");\r
        System.out.println("  void testPalindromes(String word) {");\r
        System.out.println("      assertTrue(StringUtils.isPalindrome(word));");\r
        System.out.println("  }\\n");\r
\r
        System.out.println(">>> 2. @CsvSource EXAMPLE (Input vs Expected):");\r
        System.out.println("  @ParameterizedTest");\r
        System.out.println("  @CsvSource({");\r
        System.out.println("      "radar, true",");\r
        System.out.println("      "java, false",");\r
        System.out.println("      "noon, true"");\r
        System.out.println("  })");\r
        System.out.println("  void testWithCsv(String word, boolean expected) {");\r
        System.out.println("      assertEquals(expected, StringUtils.isPalindrome(word));");\r
        System.out.println("  }");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 4: Parameterized Tests\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DATA SOURCE ANNOTATIONS:\r
   - '@ValueSource(ints = {...}, strings = {...})' : Simple primitive/String array.\r
   - '@CsvSource({"1, 2, 3", "10, 20, 30"})'  : Comma-separated values mapped to params.\r
   - '@MethodSource("provideData")'             : Stream/Collection provider method.\r
   - '@EnumSource(ChronoUnit.class)'             : Runs test for all enum constants.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"When should you use @MethodSource over @ValueSource in JUnit 5?",shortAnswer:"Use @MethodSource when tests require complex objects, dynamically generated streams of arguments (Stream<Arguments>), or multi-parameter combinations that cannot be expressed as simple compile-time literals.",explanation:"Method source provides dynamic stream of Arguments.",hint:"For complex objects or multi-argument combinations beyond simple literals.",level:"Intermediate",codeExample:"static Stream<Arguments> provideData() { return Stream.of(Arguments.of(1, 2)); }"},{question:"What dependency is required in Maven pom.xml to use @ParameterizedTest?",shortAnswer:"junit-jupiter-params (org.junit.jupiter:junit-jupiter-params).",explanation:"JUnit 5 parameterized tests artifact.",hint:"junit-jupiter-params artifact.",level:"Beginner",codeExample:"<artifactId>junit-jupiter-params</artifactId>"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Parameterized Tests: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"@ParameterizedTest & Sources"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Data-driven testing: running a single test method against diverse data inputs using @ValueSource, @CsvSource, @MethodSource, and @EnumSource."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ParameterizedTestsSourcesDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"JUnit 5 & Mockito FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 012_006 Topic 4: Parameterized Tests (@ValueSource, @CsvSource)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic4_parameterized_tests_sources_note.txt"})}),e.jsx(a,{note:"Instead of writing 10 duplicate test methods for 10 inputs, @ParameterizedTest allows you to write one test method and feed it an array or CSV stream of test cases! Notice how @CsvSource lets you supply both input and expected result! — Sukanta Hui"})]})}export{h as default};
