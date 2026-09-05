import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 6: Chaining & Composing Functional Interfaces: The Modular Assembly Line Overview\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
public class FunctionalCompositionOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: FUNCTIONAL COMPOSITION & CHAINING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE POWER OF FUNCTIONAL COMPOSITION:");\r
        System.out.println("  - Instead of writing huge, monolithic, unmaintainable methods,");\r
        System.out.println("    Functional Programming builds complex systems by COMBINING small, pure, single-purpose functions!");\r
        System.out.println();\r
        System.out.println("+----+-------------------+-------------------------------+-----------------------------------+");\r
        System.out.println("| #  | Interface Family  | Composition Methods           | Logical Operation                 |");\r
        System.out.println("+----+-------------------+-------------------------------+-----------------------------------+");\r
        System.out.println("| 1. | Predicate<T>      | and(), or(), negate()         | Logical AND, OR, NOT operations   |");\r
        System.out.println("| 2. | Function<T, R>    | andThen(), compose()          | Forward & Reverse function pipes  |");\r
        System.out.println("| 3. | Consumer<T>       | andThen()                     | Sequential side-effect pipeline   |");\r
        System.out.println("+----+-------------------+-------------------------------+-----------------------------------+");\r
        System.out.println();\r
        System.out.println(">>> THE ASSEMBLY LINE PHILOSOPHY:");\r
        System.out.println("  - Like Lego blocks, small functions snap together seamlessly using default methods on functional interfaces.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 6: Functional Composition Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FUNCTIONAL COMPOSITION:\r
   - Built via 'default' methods on interfaces (retains SAM contract).\r
   - Predicate: '.and()', '.or()', '.negate()', 'Predicate.isEqual()'.\r
   - Function: '.andThen()' (Forward pipe), '.compose()' (Reverse pipe).\r
   - Consumer: '.andThen()' (Sequential side-effects).\r
   - Builds complex logic out of tiny, testable micro-functions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,r=[{question:"What is 'Functional Composition' and how do default methods enable chaining across Java functional interfaces?",shortAnswer:"'Functional Composition' is the design technique of assembling complex operations by combining simpler, discrete, single-purpose functions. Java achieves this by declaring 'default' methods directly on functional interfaces (e.g. 'Predicate.and()', 'Predicate.or()', 'Predicate.negate()', 'Function.andThen()', 'Function.compose()', and 'Consumer.andThen()'). Because default methods have concrete implementations, they do not violate the SAM rule while enabling fluent, readable, left-to-right or nested execution pipelines.",explanation:"Architectural overview of functional interface composition in Java 8.",hint:"Default methods on interfaces allow chaining small pure functions into complex pipelines without violating the SAM rule.",level:"Intermediate",codeExample:"Predicate<T> p = p1.and(p2).or(p3.negate()); Function<T, R> f = f1.andThen(f2);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Functional Composition"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Chaining & Composing ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Functional Interfaces"}),": Modular Pipelines"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Assemble modular pipelines: combining small, discrete functions with default composition methods across Predicate, Function, and Consumer interface families."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"FunctionalCompositionOverviewDemo.java",highlightLines:[7,10,13,14,18,19,20,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Functional Composition FAQs",questions:r})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 009_002 Topic 6: Functional Composition Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic6_functional_composition_overview_note.txt"})}),e.jsx(i,{note:"Think of functional composition like Lego bricks: instead of building a monolithic castle out of cement, you create tiny 1-line functions and snap them together with and(), or(), and andThen()! Clean, modular, and reusable! — Sukanta Hui"})]})}export{x as default};
