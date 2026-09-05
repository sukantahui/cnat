import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 12: Functional Interfaces (SAM) & the @FunctionalInterface Annotation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class FunctionalInterfaceFoundationsDemo {\r
\r
    // FUNCTIONAL INTERFACE: Contains EXACTLY ONE abstract method (Single Abstract Method - SAM)\r
    // @FunctionalInterface annotation enforces SAM rule at compile-time!\r
    @FunctionalInterface\r
    public interface PerformanceEvaluator {\r
        // The SINGLE Abstract Method:\r
        int evaluateCandidate(int problemSolved, int speedBonus);\r
\r
        // Can have any number of default or static methods:\r
        default void logEvaluation(int score) {\r
            System.out.println("  [EVALUATION RECORDED] Score: " + score + "/100");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: FUNCTIONAL INTERFACES (SAM) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Implementation via Modern Lambda Expression:\r
        PerformanceEvaluator fullStackEvaluator = (solved, bonus) -> (solved * 10) + bonus;\r
\r
        int swadeepScore = fullStackEvaluator.evaluateCandidate(8, 15);\r
        System.out.println(">>> Swadeep Paul Evaluation:");\r
        fullStackEvaluator.logEvaluation(swadeepScore);\r
\r
        System.out.println("\\n>>> Core Functional Interface Requirements:");\r
        System.out.println("  1. Exactly ONE abstract method.");\r
        System.out.println("  2. Can have multiple default and static methods.");\r
        System.out.println("  3. Serves as target type for Lambda Expressions & Method References.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 12: Functional Interfaces & SAM\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FUNCTIONAL INTERFACE CRITERIA:\r
   - Exactly ONE abstract method.\r
   - Unlimited default and static methods allowed.\r
   - Target for Lambda expressions: '(x, y) → x + y'.\r
   - @FunctionalInterface triggers compiler error if >1 abstract method exists.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What defines a Functional Interface in Java and what does '@FunctionalInterface' do?",shortAnswer:"A Functional Interface contains EXACTLY ONE abstract method (SAM). The '@FunctionalInterface' annotation is an optional compiler check ensuring no additional abstract methods are added.",explanation:"Functional interfaces serve as target types for Lambda expressions (e.g. Runnable, Callable, Comparator).",hint:"Contains exactly ONE abstract method; target for lambda expressions.",level:"Beginner",codeExample:"@FunctionalInterface interface Action { void execute(); }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Functional Programming"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Functional Interfaces (SAM) & the ",e.jsx("code",{className:"text-purple-400 font-mono",children:"@FunctionalInterface"})," Annotation"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the foundation of Java functional programming: Single Abstract Method (SAM) contracts, lambda target types, and compiler verification with ",e.jsx("code",{className:"text-purple-400 font-mono",children:"@FunctionalInterface"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"FunctionalInterfaceFoundationsDemo.java",highlightLines:[11,12,14,27,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Functional Interfaces FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 002_008 Topic 12: Functional Interfaces",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic12_functional_interface_note.txt"})}),e.jsx(r,{note:"If an interface has only ONE abstract method, it is a Functional Interface! That single method is what enables lightning-fast Lambda expressions in modern Java. — Sukanta Hui"})]})}export{h as default};
