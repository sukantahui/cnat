import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 5: Non-Static Inner Classes - Hidden Outer Instance Pointers (this$0)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class NonStaticInnerClassLeaksDemo {\r
\r
    // Massive outer enclosing class:\r
    public static class MassiveAcademyReport {\r
        private final byte[] hugePayload = new byte[1024 * 1024 * 50]; // 50 MB data!\r
        private final String reportTitle = "Barrackpore Annual Financial Ledger";\r
\r
        // 1. LEAK HAZARD: Non-Static Inner Class (Holds implicit 'this$0' reference!)\r
        public Runnable createLeakingTask() {\r
            return new Runnable() { // Anonymous non-static inner class!\r
                @Override\r
                public void run() {\r
                    // Implicitly holds reference to entire MassiveAcademyReport (50MB)!\r
                    System.out.println("Processing report: " + reportTitle);\r
                }\r
            };\r
        }\r
\r
        // 2. PRODUCTION FIX: Static Nested Class (Zero outer instance pointer!)\r
        public static class SafeWorkerTask implements Runnable {\r
            private final String title;\r
            public SafeWorkerTask(String title) { this.title = title; } // Only copies what is needed!\r
\r
            @Override\r
            public void run() {\r
                System.out.println("Safe processing: " + title);\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: NON-STATIC INNER CLASSES & this$0 LEAKS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        MassiveAcademyReport report = new MassiveAcademyReport();\r
\r
        // Safe task only references the String title, allowing 50MB report to be GC'd:\r
        Runnable safeTask = new MassiveAcademyReport.SafeWorkerTask("Barrackpore 2026");\r
        report = null; // 50MB MassiveAcademyReport is now safely eligible for GC!\r
\r
        safeTask.run();\r
        System.out.println("\\n>>> VERDICT: 50MB outer instance reclaimed successfully without leaks! ✅");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 5: Non-Static Inner Class Leaks\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 'this$0' COMPILER SYNTHESIS:\r
   - When compiling a non-static inner class (or anonymous inner class), 'javac' synthesizes\r
     a hidden final field named 'this$0' pointing to the enclosing outer instance.\r
   - If the inner instance is retained (e.g. stored in a thread or listener), the entire outer\r
     instance (and its full memory payload) cannot be garbage collected!\r
\r
2. REMEDY:\r
   - Always declare nested classes with the 'static' keyword ('static class SafeTask').\r
   - Use lambdas or static methods that do not capture outer instance state.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What hidden field does the Java compiler inject into non-static inner classes that can cause memory leaks?",shortAnswer:"A synthetic reference field named 'this$0' pointing to the enclosing outer class instance, keeping the entire outer object tree reachable as long as the inner class instance lives.",explanation:"Static nested classes do not have this synthetic reference.",hint:"The synthetic this$0 reference to the enclosing outer instance.",level:"Intermediate",codeExample:"innerInstance.this$0 -> Points to outer class instance"},{question:"How do you break the connection between an inner class and its outer enclosing instance?",shortAnswer:"By adding the 'static' keyword to the inner class declaration (making it a Static Nested Class), which removes the implicit outer reference.",explanation:"Static nested classes act like top-level classes packaged inside a namespace.",hint:"Declare the inner class as 'static'.",level:"Beginner",codeExample:"public static class SafeNestedClass { ... }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Non-Static Inner Classes: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Hidden Outer Instance Pointers"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The implicit this$0 pointer: why non-static inner classes and anonymous Runnable instances silently keep massive outer enclosing instances alive."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"NonStaticInnerClassLeaksDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Memory Profiling & OOM FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:i,title:"Module 010_006 Topic 5: Non-Static Inner Class Leaks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic5_non_static_inner_class_leaks_note.txt"})}),e.jsx(a,{note:"Every non-static inner class has a hidden field called this$0 pointing to the outer class! If you pass an inner class or anonymous Runnable to a background thread, the entire 500MB outer object cannot be garbage collected! Use static inner classes! — Sukanta Hui"})]})}export{g as default};
