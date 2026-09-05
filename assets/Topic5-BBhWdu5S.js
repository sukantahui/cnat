import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 5: java.util.function.Supplier<T>: T get() Factory Supplier & Lazy Evaluation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.Optional;\r
import java.util.function.Supplier;\r
\r
public class SupplierLazyEvaluationDeepDiveDemo {\r
\r
    public static String computeHeavyAuditReport() {\r
        System.out.println("  [HEAVY DB COMPUTATION] Generating 500-page Barrackpore Tax Audit Report (takes 3s)...");\r
        return "COMPREHENSIVE_TAX_AUDIT_REPORT_2026";\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: Supplier<T> & LAZY EVALUATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Supplier declaration (DOES NOT RUN THE CODE YET! Lazy Blueprint):\r
        Supplier<String> lazyReportSupplier = () -> computeHeavyAuditReport();\r
\r
        System.out.println(">>> 1. Supplier instantiated. Notice NO heavy computation has executed yet!");\r
\r
        // 2. Using Supplier with Optional.orElseGet() (LAZY EVALUATION):\r
        Optional<String> cachedReport = Optional.of("CACHED_REPORT_QUICK_HIT");\r
\r
        // orElseGet(supplier) executes the supplier ONLY IF the Optional is empty:\r
        String report1 = cachedReport.orElseGet(lazyReportSupplier);\r
        System.out.println(">>> 2. Retrieved Report 1 (Cache hit): " + report1);\r
\r
        Optional<String> emptyCache = Optional.empty();\r
        // Since emptyCache is empty, orElseGet EXECUTES the supplier now:\r
        System.out.println("\\n>>> 3. Requesting Report 2 from empty cache (Triggers Supplier Execution):");\r
        String report2 = emptyCache.orElseGet(lazyReportSupplier);\r
        System.out.println(">>> Retrieved Report 2: " + report2);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 5: Supplier<T> Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SUPPLIER<T>:\r
   - SAM: 'T get()'.\r
   - Input: None (), Output: T.\r
   - Purpose: Factory generation, lazy evaluation, default fallbacks.\r
   - Powers: 'Optional.orElseGet()', 'Stream.generate()', 'CompletableFuture.supplyAsync()'.\r
   - Eager vs Lazy: Code inside Supplier runs ONLY when 'get()' is called.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is 'Supplier<T>' in Java and how does it enable Lazy Evaluation in methods like 'Optional.orElseGet()'?",shortAnswer:"'Supplier<T>' represents a supplier of results that takes zero arguments and returns an instance of type T ('T get()'). It is the cornerstone of 'Lazy Evaluation'. In methods like 'Optional.orElseGet(supplier)', the expensive computation inside the lambda is NOT executed upfront; it is invoked only on-demand if and when the Optional is truly empty, saving CPU cycles and database bandwidth compared to eager evaluation ('Optional.orElse(expensiveCall())').",explanation:"Core lazy factory evaluation pattern in java.util.function.",hint:"Takes zero arguments, returns T; defers execution on-demand for lazy evaluation.",level:"Intermediate",codeExample:"Supplier<Double> random = () → Math.random(); Double val = random.get();"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Supplier<T>"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Supplier<T>"}),": Factory Generation & Lazy Evaluation"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Harness deferred execution: applying ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Supplier<T>"})," ",e.jsx("code",{className:"text-sky-300 font-mono",children:"T get()"})," methods for on-demand object instantiation, lazy fallbacks in ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Optional.orElseGet()"}),", and factory decoupling."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"SupplierLazyEvaluationDeepDiveDemo.java",highlightLines:[7,10,11,20,21,26,27,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Supplier<T> FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 009_002 Topic 5: Supplier<T> Deep Dive",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic5_supplier_deep_dive_note.txt"})}),e.jsx(a,{note:"Supplier is like ordering food at a restaurant: you don't cook the food when you print the menu; you only cook it (run the code) when the customer actually asks for it with get()! That is Lazy Evaluation! — Sukanta Hui"})]})}export{h as default};
