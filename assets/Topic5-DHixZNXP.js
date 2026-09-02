import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 004_004: Try-with-Resources & AutoCloseable\r
 * Topic 5: Automatic Resource Teardown Sequence: Reverse Order of Declaration\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
class InstrumentedResource implements AutoCloseable {\r
    private final String name;\r
\r
    public InstrumentedResource(String name) {\r
        this.name = name;\r
        System.out.println("  [INITIALIZED 1st/2nd/3rd] Opened: " + name);\r
    }\r
\r
    @Override\r
    public void close() {\r
        System.out.println("  [CLOSED IN REVERSE ORDER] Closed: " + name);\r
    }\r
}\r
\r
public class ReverseOrderTeardownSequenceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: REVERSE ORDER OF DECLARATION CLOSING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Initializing 3 Resources in Order: A -> B -> C:");\r
        try (\r
            InstrumentedResource resA = new InstrumentedResource("Resource_A_DatabaseConnection");\r
            InstrumentedResource resB = new InstrumentedResource("Resource_B_StatementQuery");\r
            InstrumentedResource resC = new InstrumentedResource("Resource_C_ResultSetCursor")\r
        ) {\r
            System.out.println("\\n  [INSIDE TRY BODY] Performing business logic with A, B, and C...\\n");\r
        }\r
\r
        System.out.println("\\n>>> WHY REVERSE ORDER (LIFO: C -> B -> A)?");\r
        System.out.println("  - Resource C (ResultSet) depends on Resource B (Statement), which depends on Resource A (Connection).");\r
        System.out.println("  - Closing in REVERSE order ensures dependent child resources close cleanly BEFORE parent dependencies terminate!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_004: Try-with-Resources & AutoCloseable\r
Topic 5: Reverse Order Teardown\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TEARDOWN SEQUENCE:\r
   - Declaration Order: Res1 → Res2 → Res3.\r
   - Closing Order: Res3.close() → Res2.close() → Res1.close().\r
   - Protects dependent child resources against premature parent termination.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"In what order are resources closed when multiple resources are declared in a single Try-with-Resources statement?",shortAnswer:"Resources are closed in the exact REVERSE ORDER of their declaration (Last-In, First-Out / LIFO). If declared as 'resA', 'resB', 'resC', they will be closed in the order 'resC.close()', 'resB.close()', and finally 'resA.close()'.",explanation:"Ensures dependent child objects (like ResultSet) close before parent objects (Connection) close.",hint:"Closed in reverse order of declaration (LIFO).",level:"Beginner",codeExample:"try (A a = new A(); B b = new B()) { ... } // b closes first, then a"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_004 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"LIFO Teardown"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Automatic Invocation of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"close()"})," in Reverse Order of Declaration"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand dependency-aware resource teardown: discovering why the JVM guarantees Last-In-First-Out closing sequence to protect dependent stream pipelines."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"ReverseOrderTeardownSequenceDemo.java",highlightLines:[7,13,14,25,26,27,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Reverse Order FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:a,title:"Module 004_004 Topic 5: Reverse Order Teardown",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_004_topic5_reverse_order_teardown_note.txt"})}),e.jsx(s,{note:"If you open a Database Connection first and then a ResultSet second, you MUST close the ResultSet first before closing the Connection! Try-with-resources handles this automatically in reverse order! — Sukanta Hui"})]})}export{h as default};
