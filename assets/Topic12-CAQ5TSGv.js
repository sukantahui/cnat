import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 12: API Design Guidelines: Type Parameters (<T>) vs Wildcards (?) (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class ApiDesignTypeParamsVsWildcardsCapstoneDemo {\r
\r
    // SCENARIO 1: USE TYPE PARAMETERS (<T>) when return type depends on input, or multiple params share the same type:\r
    public static <T> T getFirstElement(List<T> list) {\r
        return list.isEmpty() ? null : list.get(0);\r
    }\r
\r
    // SCENARIO 2: USE WILDCARDS (?) when the method only accesses collection services without returning T:\r
    public static void printSummary(List<?> list) {\r
        System.out.println("  Collection Summary: Size=" + list.size());\r
    }\r
\r
    // SCENARIO 3: USE PECS WILDCARDS for input parameters representing Producers or Consumers:\r
    public static <T> void appendAll(List<? super T> destination, List<? extends T> source) {\r
        destination.addAll(source);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: API DESIGN GUIDELINES (CAPSTONE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentBatch = List.of("Swadeep Paul", "Tuhina Das", "Abhronila Das");\r
        List<Object> masterRegistry = new ArrayList<>();\r
\r
        System.out.println(">>> 1. Invoking Type Parameter Method (Preserves exact String return type):");\r
        String first = getFirstElement(studentBatch);\r
        System.out.println("  First Student: " + first);\r
\r
        System.out.println("\\n>>> 2. Invoking Wildcard Summary (Clean universal signature):");\r
        printSummary(studentBatch);\r
\r
        System.out.println("\\n>>> 3. Invoking PECS appendAll (Flexible cross-type collection append):");\r
        appendAll(masterRegistry, studentBatch);\r
        System.out.println("  Master Registry Content: " + masterRegistry);\r
\r
        System.out.println("\\n>>> 3 GOLDEN RULES FOR API DESIGNERS (Effective Java):");\r
        System.out.println("  1. Return Types: NEVER use wildcard types in method return values (e.g. avoid 'List<? extends Number> get()').");\r
        System.out.println("  2. Input Parameters: USE wildcards on input parameters to maximize flexibility (PECS).");\r
        System.out.println("  3. Single-Use Types: If a type parameter appears only once in the method signature, replace it with a wildcard '?'.");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 006_004 WILDCARDS & THE PECS PRINCIPLE 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 12: API Design Guidelines Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 006_004 SUMMARY:\r
   - Invariant generics: 'List<String>' is NOT 'List<Object>'.\r
   - 'List<?>': Unbounded unknown type; read as Object, write only null.\r
   - 'List<? extends T>': Upper bounded (Covariant Producer); read as T.\r
   - 'List<? super T>': Lower bounded (Contravariant Consumer); write as T.\r
   - PECS Principle: Producer Extends, Consumer Super.\r
   - Wildcard capture: private generic helper method '<T>'.\r
   - API Design: Wildcards for input params, NEVER for return types!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why should API designers NEVER use wildcard types (e.g. 'List<? extends Number>') as method return types in Java?",shortAnswer:"Using wildcards in return types forces client calling code to use wildcard types as well, cluttering client code and stripping callers of the ability to use concrete type methods or write to the returned collection. Return types should always be explicit, concrete types (e.g. 'List<Number>' or 'List<T>') to give clients full access without wildcard restrictions.",explanation:"Effective Java Item 31: Do not use wildcard types as return types.",hint:"Wildcard return types force callers to deal with wildcards; return types should be concrete.",level:"Advanced",codeExample:"public List<Number> getNumbers() // Good | public List<? extends Number> getNumbers() // Bad API Design"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"API Design Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["API Design Guidelines: Type Parameters (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"<T>"}),") vs Wildcards (",e.jsx("code",{className:"text-sky-400 font-mono",children:"?"}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize generic API design principles: choosing between explicit type parameters and wildcards, and adhering to Effective Java rules for method return types."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ApiDesignTypeParamsVsWildcardsCapstoneDemo.java",highlightLines:[7,10,13,14,18,19,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"API Design FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 006_004 Topic 12: API Design Guidelines",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic12_api_design_guidelines_note.txt"})}),e.jsx(s,{note:"Congratulations on completing Module 006_004! You have mastered Invariance, Unbounded Wildcards, Upper Bounds (Covariance), Lower Bounds (Contravariance), the PECS Principle, Wildcard Capture, and API design best practices! — Sukanta Hui"})]})}export{g as default};
