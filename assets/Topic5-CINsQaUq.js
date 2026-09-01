import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 5: Mocking Dependencies with Mockito - Pure Unit Isolation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class MockingDependenciesMockitoDemo {\r
\r
    public interface StudentRepository {\r
        String findStudentEmail(int studentId);\r
    }\r
\r
    public interface NotificationService {\r
        void sendEmail(String email, String message);\r
    }\r
\r
    public static class EnrollmentService {\r
        private final StudentRepository repo;\r
        private final NotificationService notifier;\r
\r
        public EnrollmentService(StudentRepository repo, NotificationService notifier) {\r
            this.repo = repo;\r
            this.notifier = notifier;\r
        }\r
\r
        public boolean enrollStudent(int studentId, String courseName) {\r
            String email = repo.findStudentEmail(studentId);\r
            if (email == null) return false;\r
            notifier.sendEmail(email, "Enrolled in " + courseName);\r
            return true;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: MOCKING DEPENDENCIES WITH MOCKITO - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHY MOCKING IS MANDATORY IN UNIT TESTING:");\r
        System.out.println("  1. Determinism   : Tests never fail due to network, DB downtime, or flaky API.");\r
        System.out.println("  2. Speed         : Runs in RAM in sub-milliseconds without disk/network I/O.");\r
        System.out.println("  3. Isolation     : Tests ONLY the EnrollmentService business logic.");\r
        System.out.println("  4. Edge Triggers : Easily simulate rare DB timeouts, 500 errors, or null responses.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 5: Mocking Dependencies with Mockito\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE PURPOSE OF MOCKS:\r
   - Isolate System Under Test (SUT).\r
   - Eliminate external dependencies (DBs, Cloud APIs, Mail Servers).\r
   - Fast, repeatable, and deterministic testing.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,a=[{question:"What is the difference between a Unit Test and an Integration Test regarding external dependencies?",shortAnswer:"A Unit Test tests an individual class in isolation by replacing all external collaborators with mocks; an Integration Test verifies that real components (e.g. database, HTTP services) work together correctly.",explanation:"Clear distinction between unit and integration scopes.",hint:"Unit test isolates with mocks; integration test tests real component interactions.",level:"Beginner",codeExample:"Unit Test: in-memory Mockito mocks"},{question:"Why should unit tests avoid connecting to real databases or networks?",shortAnswer:"Real databases and networks introduce latency, require test environment setup/teardown, cause flaky failures due to network hiccups, and produce non-repeatable state collisions between concurrent test runs.",explanation:"Flakiness, speed, and concurrency hazards of un-mocked I/O.",hint:"Slowness, non-determinism, and external environment fragility.",level:"Beginner",codeExample:"StudentRepository repo = Mockito.mock(StudentRepository.class);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Mocking with Mockito: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Dependency Isolation"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Unit testing in isolation: why we mock external databases, REST APIs, and file systems to test business logic deterministically and lightning fast."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"MockingDependenciesMockitoDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JUnit 5 & Mockito FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:s,title:"Module 012_006 Topic 5: Mocking Dependencies with Mockito",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic5_mocking_dependencies_mockito_note.txt"})}),e.jsx(r,{note:"Unit tests must NOT connect to a real Oracle DB or call real payment gateways! Mockito allows you to create lightweight simulated double objects so your unit tests test ONLY the class under test in pure isolation! — Sukanta Hui"})]})}export{h as default};
