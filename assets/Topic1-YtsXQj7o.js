import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 1: JUnit 5 Architecture - Platform, Jupiter & Vintage\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class JUnit5ArchitectureDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: JUNIT 5 THREE-TIER ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> JUNIT 5 = JUnit Platform + JUnit Jupiter + JUnit Vintage\\n");\r
\r
        System.out.println("1. JUnit Platform:");\r
        System.out.println("   - Foundation for launching testing frameworks on the JVM.");\r
        System.out.println("   - Standard TestEngine API used by IDEs (IntelliJ, Eclipse, VS Code) and build tools (Maven, Gradle).\\n");\r
\r
        System.out.println("2. JUnit Jupiter:");\r
        System.out.println("   - The modern programming and extension model for JUnit 5.");\r
        System.out.println("   - Provides @Test, @BeforeEach, Assertions, Parameterized tests, and Jupiter TestEngine.\\n");\r
\r
        System.out.println("3. JUnit Vintage:");\r
        System.out.println("   - TestEngine to execute legacy JUnit 3 and JUnit 4 tests seamlessly on the Platform.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 1: JUnit 5 Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JUNIT 5 ARCHITECTURAL BREAKDOWN:\r
   - JUnit Platform : Engine launcher, IDE integration, CLI runner.\r
   - JUnit Jupiter  : Modern Java 8+ annotations, assertions, extensions.\r
   - JUnit Vintage  : Backward compatibility runner for JUnit 3 & 4.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why did JUnit 5 separate the test engine into Platform and Jupiter?",shortAnswer:"To decouple the test discovery/execution runtime (Platform) from the authoring programming model (Jupiter), allowing third-party testing frameworks (Spock, TestNG, Cucumber) to run seamlessly on the same unified platform.",explanation:"Modular extensible design of JUnit 5.",hint:"Decouples test execution runtime from authoring framework API.",level:"Intermediate",codeExample:"org.junit.jupiter.api.Test vs org.junit.platform.launcher.Launcher"},{question:"What is the purpose of the JUnit Vintage module?",shortAnswer:"JUnit Vintage provides a TestEngine that allows legacy JUnit 3 and JUnit 4 test suites to run alongside modern JUnit 5 tests without rewriting existing test classes.",explanation:"Backward compatibility layer.",hint:"Runs legacy JUnit 3/4 tests on JUnit 5 Platform.",level:"Beginner",codeExample:"junit-vintage-engine dependency in pom.xml"}];function J(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 1"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["JUnit 5 Architecture: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Platform, Jupiter & Vintage"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Decoupled test engine: understanding the 3 sub-projects of JUnit 5 (JUnit Platform, JUnit Jupiter test engine, and JUnit Vintage backward compatibility)."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:a,title:"JUnit5ArchitectureDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"JUnit 5 & Testing FAQs",questions:s})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:o,title:"Module 012_006 Topic 1: JUnit 5 Architecture (Platform, Jupiter, Vintage)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic1_junit5_architecture_platform_jupiter_vintage_note.txt"})}),t.jsx(i,{note:"JUnit 5 was completely redesigned into three distinct modules: JUnit Platform (the execution runner on JVM/IDEs), JUnit Jupiter (the modern programming model and annotations), and JUnit Vintage (backward compatibility for JUnit 3 and 4 tests)! — Sukanta Hui"})]})}export{J as default};
