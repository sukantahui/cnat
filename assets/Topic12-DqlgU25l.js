import{j as a}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 12: Can an Abstract Class Be Final? (Illegal Modifier Combinations)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class AbstractFinalContradictionDemo {\r
\r
    // ========================================================================\r
    // CONTRADICTORY MODIFIERS:\r
    // 'abstract': Demands to be extended by subclasses!\r
    // 'final'   : Forbids extension by subclasses!\r
    //\r
    // Combining them: 'final abstract class Impossible {}' -> COMPILE ERROR!\r
    // Javac error: "illegal combination of modifiers: abstract and final"\r
    // ========================================================================\r
\r
    public abstract static class ValidAbstractBase {\r
        public abstract void executeService();\r
    }\r
\r
    public static final class ValidFinalLeaf extends ValidAbstractBase {\r
        @Override\r
        public void executeService() {\r
            System.out.println("  [LEAF CLASS] Final concrete leaf node successfully executed!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: 'abstract' AND 'final' ARE OPPOSITES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ValidAbstractBase base = new ValidFinalLeaf();\r
        base.executeService();\r
\r
        System.out.println("\\n>>> Summary of Opposing Modifiers:");\r
        System.out.println("  - 'abstract class' -> MUST be inherited.");\r
        System.out.println("  - 'final class'    -> CANNOT be inherited.");\r
        System.out.println("  - 'final abstract' -> Direct logical contradiction (Compile Error).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 12: abstract vs final (Opposing Modifiers)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ILLEGAL MODIFIER COMBINATIONS:\r
   - 'final abstract class' &rarr; COMPILE ERROR.\r
   - 'final abstract void method()' &rarr; COMPILE ERROR.\r
   - 'private abstract void method()' &rarr; COMPILE ERROR.\r
   - 'static abstract void method()' &rarr; COMPILE ERROR.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Can an abstract class or abstract method be declared 'final' in Java?",shortAnswer:"No! 'abstract' and 'final' are mutually exclusive, opposing concepts. An abstract class requires inheritance to be useful, while a final class prevents inheritance. Combining them produces a compile-time error.",explanation:"'illegal combination of modifiers: abstract and final' is flagged immediately by javac.",hint:"Opposing concepts: abstract requires subclassing, final forbids subclassing.",level:"Beginner",codeExample:"// Compile Error: final abstract class Bad {}"}];function f(){return a.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[a.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),a.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 12"}),a.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Compiler Prohibitions"})]}),a.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Can an Abstract Class Be Final? (Illegal Modifier Combinations)"}),a.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn why ",a.jsx("code",{className:"text-rose-400 font-mono",children:"abstract"})," and ",a.jsx("code",{className:"text-amber-400 font-mono",children:"final"})," represent total logical opposites in compiler type theory."]})]}),a.jsxs("section",{className:"space-y-4",children:[a.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[a.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),a.jsx(e,{fileModule:s,title:"AbstractFinalContradictionDemo.java",highlightLines:[18,22,31]})]}),a.jsx("section",{className:"space-y-4",children:a.jsx(t,{title:"abstract vs final FAQs",questions:o})}),a.jsx("section",{className:"space-y-4",children:a.jsx(r,{content:i,title:"Module 002_007 Topic 12: abstract vs final Contradiction",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic12_abstract_final_note.txt"})}),a.jsx(n,{note:"'abstract' says 'please extend me!', while 'final' says 'nobody can extend me!' Putting them together is a direct contradiction that javac rejects instantly. — Sukanta Hui"})]})}export{f as default};
