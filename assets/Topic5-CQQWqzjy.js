import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 006_003: Bounded Type Parameters & Multiple Bounds\r
 * Topic 5: Rules of Multiple Bounds: Class Bound Order & Single Class Mandate\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.io.Serializable;\r
\r
class BaseEntity {\r
    public void validate() { System.out.println("  [VALIDATING BASE ENTITY]"); }\r
}\r
\r
interface Printable {\r
    void print();\r
}\r
\r
interface Exportable {\r
    void export();\r
}\r
\r
// 1. VALID MULTIPLE BOUND (Class 'BaseEntity' comes FIRST, followed by interfaces):\r
class ValidBoundProcessor<T extends BaseEntity & Printable & Exportable> {\r
    public void process(T item) {\r
        item.validate(); // from BaseEntity\r
        item.print();    // from Printable\r
        item.export();   // from Exportable\r
    }\r
}\r
\r
// 2. INVALID SYNTAX EXAMPLES (Will NOT compile):\r
// Error 1: Interface before Class -> class Invalid1<T extends Printable & BaseEntity> { }\r
// Error 2: Multiple Classes       -> class Invalid2<T extends BaseEntity & String> { }\r
\r
public class MultipleBoundsRulesOrderingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: MULTIPLE BOUNDS ORDERING RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 3 STRICT COMPILATION RULES FOR MULTIPLE BOUNDS:");\r
        System.out.println("  Rule 1: Class Bound Must Come First.");\r
        System.out.println("          '<T extends MyClass & MyInterface>' is valid.");\r
        System.out.println("          '<T extends MyInterface & MyClass>' produces a COMPILE ERROR: 'interface expected here'.");\r
        System.out.println();\r
        System.out.println("  Rule 2: At Most ONE Class Allowed.");\r
        System.out.println("          Since Java does not support multiple class inheritance, you cannot list two classes ('<T extends ClassA & ClassB>' fails).");\r
        System.out.println();\r
        System.out.println("  Rule 3: Unlimited Interfaces Allowed.");\r
        System.out.println("          You can append as many interface bounds as required ('& InterfaceA & InterfaceB & InterfaceC').");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_003: Bounded Type Parameters & Multiple Bounds\r
Topic 5: Multiple Bounds Ordering Rules\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MULTIPLE BOUND RULES:\r
   - Class bound MUST come first.\r
   - Maximum ONE class bound permitted (no multiple inheritance).\r
   - Zero or more interface bounds can follow.\r
   - '<T extends Interface & Class>' will NOT compile.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What compilation error occurs if an interface bound is placed BEFORE a class bound in a multiple-bound declaration (e.g. '<T extends Runnable & Thread>')?",shortAnswer:"The Java compiler generates a compilation error ('interface expected here' / 'class cannot follow interface in bound'). Java's grammar mandates that if a class bound is present, it MUST appear as the very first bound in the list, followed by zero or more interface bounds.",explanation:"Strict grammatical ordering rule enforced by the Java Language Specification (JLS 4.4).",hint:"Class bound MUST be listed first; placing an interface first causes a compilation error.",level:"Intermediate",codeExample:"<T extends Thread & Runnable> // VALID | <T extends Runnable & Thread> // COMPILE ERROR"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_003 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Ordering Rules"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Rules of Multiple Bounds: Class Bound First & Single Class Mandate"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Enforce grammatical type constraints: mastering the 3 golden rules of multiple bounds—class must come first, only one class allowed, and unlimited interfaces permitted."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"MultipleBoundsRulesOrderingDemo.java",highlightLines:[7,10,20,21,22,33,34,38,41]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Ordering Rules FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 006_003 Topic 5: Multiple Bounds Ordering Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_003_topic5_multiple_bounds_ordering_rules_note.txt"})}),e.jsx(s,{note:"Rule of thumb: Class comes first! Just like you cannot put the cart before the horse, you cannot put an interface before a class in multiple bounds: '<T extends MyClass & MyInterface>' is the only correct order! — Sukanta Hui"})]})}export{b as default};
