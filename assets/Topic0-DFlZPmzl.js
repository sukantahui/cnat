import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 0: Why Unit Testing is Non-Negotiable in Professional Development\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class WhyUnitTestingMattersDemo {\r
\r
    public static class FeeCalculator {\r
        public static double calculateDiscountedFee(double baseFee, int attendancePercentage) {\r
            if (baseFee < 0) {\r
                throw new IllegalArgumentException("Base fee cannot be negative");\r
            }\r
            if (attendancePercentage > 90) {\r
                return baseFee * 0.80; // 20% scholarship discount for Barrackpore scholars\r
            }\r
            return baseFee;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY AUTOMATED UNIT TESTING IS NON-NEGOTIABLE");\r
        System.out.println(" EDUCATOR: SUKANTA HUI | ACADEMIC HUB: BARRACKPORE, WB");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. CORE BENEFITS OF AUTOMATED UNIT TESTING:");\r
        System.out.println("  - Zero Regression Fear : Immediate validation whenever codebase changes.");\r
        System.out.println("  - Living Documentation : Tests specify exact expected software behavior.");\r
        System.out.println("  - Faster Debugging     : Pinpoints defect root cause in milliseconds.");\r
        System.out.println("  - Better Architecture  : Testable code forces clean loose coupling.\\n");\r
\r
        System.out.println(">>> 2. MANUAL SMOKE TEST (FeeCalculator):");\r
        double fee = FeeCalculator.calculateDiscountedFee(5000.0, 95);\r
        System.out.println("  Discounted Fee for 95% attendance: ₹" + fee + " (Expected: ₹4000.0)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 0: Why Unit Testing Matters\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE VALUE OF UNIT TESTING:\r
   - Regression Prevention: Catch bugs within seconds during development.\r
   - Refactoring Confidence: Modify internal algorithms knowing tests verify correctness.\r
   - Design Feedback: Code that is difficult to test indicates bad architectural design.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is a regression bug and how do automated unit tests prevent it?",shortAnswer:"A regression bug is an unexpected defect introduced into previously working features when new code or refactoring is performed. Automated unit test suites execute in seconds on every build, immediately catching regressions before code is merged.",explanation:"Primary purpose of CI/CD automated test suites.",hint:"Defect introduced into previously working features caught by automated test suites.",level:"Beginner",codeExample:"mvn clean test"},{question:"What is the FIRST principle of Unit Testing?",shortAnswer:"F.I.R.S.T.: Fast (runs in milliseconds), Independent (no test order dependency), Repeatable (same result in any environment), Self-validating (boolean pass/fail without manual inspection), Timely (written alongside or before production code).",explanation:"Standard industry test quality acronym.",hint:"Fast, Independent, Repeatable, Self-validating, Timely.",level:"Intermediate",codeExample:"// F.I.R.S.T. Principles Guide Quality Tests"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why Unit Testing Matters: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Defensive Engineering"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Professional engineering standard: why automated unit tests are non-negotiable for preventing regressions, enabling fearless refactoring, and living documentation."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"WhyUnitTestingMattersDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JUnit 5 & Testing FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 012_006 Topic 0: Why Unit Testing Matters",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic0_why_unit_testing_matters_note.txt"})}),e.jsx(s,{note:"Welcome to the final module of the entire Java Core curriculum! In professional software development, un-tested code is considered broken by design! Unit tests act as an automated safety net, ensuring changes made by one developer do not break existing business logic! — Sukanta Hui"})]})}export{h as default};
