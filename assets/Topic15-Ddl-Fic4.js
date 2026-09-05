import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 15: Thread Creation Approaches Comparison: Thread vs Runnable vs Callable\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ThreadCreationComparisonGrandMatrixDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: THREAD CREATION APPROACHES GRAND MATRIX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 THREAD CREATION MECHANISMS COMPARED:");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| Creation Approach | Inheritance Slot? | Return Value?     | Checked Exception?| Thread Pool Reuse?|");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| 1. Extends Thread | BURNS SLOT (Bad)  | NO (void)         | NO                | NO (Tightly bound)|");\r
        System.out.println("| 2. Runnable Class | PRESERVED (Good)  | NO (void)         | NO                | YES (Direct reuse)|");\r
        System.out.println("| 3. Runnable Lambda| PRESERVED (Clean) | NO (void)         | NO                | YES (Inline tasks)|");\r
        System.out.println("| 4. Callable<V>    | PRESERVED (Best)  | YES (Returns <V>) | YES (throws Ex)   | YES (Via Future)  |");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+-------------------+");\r
\r
        System.out.println("\\n>>> ARCHITECTURAL RECOMMENDATION FOR MODERN JAVA APPLICATIONS:");\r
        System.out.println("  - Use Runnable Lambda : For simple fire-and-forget background asynchronous jobs (e.g. sending logs/emails).");\r
        System.out.println("  - Use Callable<V>     : For tasks that compute values, query databases, or call external REST APIs.");\r
        System.out.println("  - AVOID Extends Thread: Never subclass Thread in production architectures.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 15: Thread Creation Grand Matrix\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CREATION APPROACH MATRIX:\r
   - Extends Thread: Burns inheritance, tightly coupled (avoid).\r
   - Runnable Class: Decoupled, preserves inheritance, void return.\r
   - Runnable Lambda: Zero boilerplate, inline fire-and-forget.\r
   - Callable<V>: Returns value, throws checked exceptions, ideal for ExecutorService.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"When should an enterprise Java engineer choose 'Callable<V>' over 'Runnable'?",shortAnswer:"An engineer should choose 'Callable<V>' whenever the background task needs to return a computed value (e.g. querying a database, calculating a financial report) or when the task can throw checked exceptions (e.g. 'IOException', 'SQLException') that must be handled by the caller. 'Runnable' should only be used for fire-and-forget tasks returning 'void' with no checked exceptions.",explanation:"Design decision guide for concurrent task modeling.",hint:"Choose Callable when returning a result or handling checked exceptions; use Runnable for fire-and-forget.",level:"Intermediate",codeExample:"Callable<Report> task = () → generatePdfReport(); // Returns Report and throws Exception"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Creation Matrix"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Thread Creation Approaches: The Complete Comparative Decision Matrix"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize threading patterns: evaluating inheritance tradeoffs, return types, checked exception handling, and thread pool compatibility across all 4 creation strategies."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ThreadCreationComparisonGrandMatrixDemo.java",highlightLines:[7,10,13,14,15,16,17,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Creation Matrix FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 008_001 Topic 15: Thread Creation Matrix",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic15_thread_creation_matrix_note.txt"})}),e.jsx(a,{note:"If someone asks you in an interview: 'What is the best way to create a thread?', your answer is: 'Use Callable with ExecutorService if you need a return value, or Runnable lambda for fire-and-forget tasks! Never extend Thread!' — Sukanta Hui"})]})}export{b as default};
