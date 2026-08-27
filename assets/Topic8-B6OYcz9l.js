import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 8: Resolving Multiple Inheritance Ambiguity with Default Methods (Diamond Conflict)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class DefaultMethodConflictResolutionDemo {\r
\r
    public interface InterfaceAlpha {\r
        default void logStatus() {\r
            System.out.println("  [ALPHA DEFAULT] Status logged via Strategy Alpha.");\r
        }\r
    }\r
\r
    public interface InterfaceBeta {\r
        default void logStatus() {\r
            System.out.println("  [BETA DEFAULT] Status logged via Strategy Beta.");\r
        }\r
    }\r
\r
    // Class implementing both interfaces where both have identical default methods:\r
    // If the class does NOT override 'logStatus()', javac throws a COMPILE ERROR:\r
    // "class CompositeLogger inherits unrelated defaults for logStatus() from types InterfaceAlpha and InterfaceBeta"\r
    public static class CompositeLogger implements InterfaceAlpha, InterfaceBeta {\r
\r
        // RESOLUTION SYNTAX: Child MUST override the method and can explicitly select\r
        // which interface default to call using 'InterfaceName.super.method()':\r
        @Override\r
        public void logStatus() {\r
            System.out.println("  [RESOLVED BY CHILD] Combining both interface logging mechanisms:");\r
            InterfaceAlpha.super.logStatus(); // Explicitly delegates to Alpha\r
            InterfaceBeta.super.logStatus();  // Explicitly delegates to Beta\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: DEFAULT METHOD DIAMOND CONFLICT RESOLUTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CompositeLogger logger = new CompositeLogger();\r
        logger.logStatus();\r
\r
        System.out.println("\\n>>> Rules of Default Method Conflict Resolution:");\r
        System.out.println("  1. Classes win over interfaces (A class method overrides any interface default).");\r
        System.out.println("  2. Sub-interfaces win over parent interfaces (Most specific default wins).");\r
        System.out.println("  3. If 2 sibling interfaces conflict -> Implementing class MUST explicitly override!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 8: Default Method Diamond Conflict Resolution\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DEFAULT CONFLICT RESOLUTION RULES:\r
   - Rule 1 (Classes Win): A method declared in a class/superclass always wins over interface defaults.\r
   - Rule 2 (Sub-interfaces Win): More specific sub-interface defaults win over parent interface defaults.\r
   - Rule 3 (Explicit Resolution): Sibling interface collision &rarr; Child MUST override and use 'Interface.super.method()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How do you resolve a compiler error when a class implements two interfaces that declare identical default method signatures?",shortAnswer:"The implementing class MUST explicitly override the conflicting method. Inside the override body, it can delegate to a specific interface using 'InterfaceName.super.methodName()'.",explanation:"This forces unambiguous developer choice, solving the Diamond Problem with default methods.",hint:"Override the method and call 'InterfaceName.super.methodName()'.",level:"Intermediate",codeExample:"@Override public void log() { InterfaceA.super.log(); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Conflict Resolution"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Resolving Multiple Inheritance Ambiguity with Default Methods"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how Java resolves default method collisions: the 3 Diamond rules and the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"InterfaceName.super.method()"})," delegation syntax."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"DefaultMethodConflictResolutionDemo.java",highlightLines:[11,17,24,27,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Default Method Conflict FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_008 Topic 8: Default Method Diamond Resolution",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic8_conflict_resolution_note.txt"})}),e.jsx(r,{note:"If two interfaces have the exact same default method, you must override it in the child class! You can call InterfaceA.super.method() or InterfaceB.super.method() to tell Java exactly who to follow. — Sukanta Hui"})]})}export{g as default};
