import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const l=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 5: orElseGet(Supplier) - Lazy Fallback Evaluation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class OrElseGetSupplierDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: ORELSEGET(SUPPLIER) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Optional<String> cachedStudent = Optional.of("Swadeep Paul (Cache Hit)");\r
        Optional<String> missingStudent = Optional.empty();\r
\r
        // 1. Present Optional with orElseGet: Fallback lambda is NEVER executed!\r
        System.out.println(">>> 1. Present Optional with orElseGet:");\r
        String student1 = cachedStudent.orElseGet(() -> queryDatabaseForDefault());\r
        System.out.println("   --> Extracted Result: " + student1);\r
\r
        // 2. Empty Optional with orElseGet: Fallback lambda IS executed lazily!\r
        System.out.println("\\n>>> 2. Empty Optional with orElseGet:");\r
        String student2 = missingStudent.orElseGet(() -> queryDatabaseForDefault());\r
        System.out.println("   --> Extracted Result: " + student2);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static String queryDatabaseForDefault() {\r
        System.out.println("   [DB QUERY RUNNING]: Simulating expensive database query fallback...");\r
        return "Default Student Profile (Fetched from Postgres DB)";\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 5: orElseGet(Supplier)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT:\r
   - Signature: 'public T orElseGet(Supplier<? extends T> supplier)'.\r
   - If a value is present, returns the value.\r
   - Otherwise, invokes 'supplier.get()' and returns the result of that invocation.\r
\r
2. LAZY EVALUATION BENEFIT:\r
   - The Supplier lambda is only evaluated on-demand when the Optional is truly empty.\r
   - Perfect for expensive operations (REST calls, database lookups, security token creation).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why should you use orElseGet() instead of orElse() when creating a new domain object as fallback?",shortAnswer:"Because orElseGet(Supplier) defers object instantiation until absence is confirmed, whereas orElse(new Object()) allocates a new object on the heap every single time regardless of whether the Optional is empty.",explanation:"Saves garbage collection overhead and avoids executing expensive constructors unnecessarily.",hint:"Defers object instantiation until the Optional is confirmed empty.",level:"Intermediate",codeExample:"opt.orElseGet(() → new HeavyStudentDTO());"},{question:"What functional interface is accepted by orElseGet()?",shortAnswer:"java.util.function.Supplier<? extends T>, which takes zero arguments and returns an instance of type T.",explanation:"Matches lambda syntax () → compute().",hint:"Supplier<? extends T>",level:"Beginner",codeExample:"Supplier<String> fallback = () → 'Default';"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"orElseGet(Supplier)"}),": Lazy Fallback Computations"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deferred evaluation: executing expensive fallback computations or database queries ONLY when the Optional is actually empty."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:l,title:"OrElseGetSupplierDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Optional & Null-Safe Programming FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_008 Topic 5: orElseGet(Supplier)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic5_orelseget_supplier_note.txt"})}),e.jsx(r,{note:"orElseGet() takes a Supplier lambda. The lambda is called ONLY if the Optional is empty! If the Optional already has a value, zero CPU cycles are spent computing the fallback! — Sukanta Hui"})]})}export{S as default};
