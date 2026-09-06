import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 12: The 'clone()' Method and the java.lang.Cloneable Marker Interface\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class CloneableFoundationsDemo {\r
\r
    // MUST implement Cloneable marker interface, or super.clone() throws CloneNotSupportedException!\r
    public static class LabTerminal implements Cloneable {\r
        private String terminalId;\r
        private int ramGb;\r
\r
        public LabTerminal(String id, int ram) {\r
            this.terminalId = id;\r
            this.ramGb = ram;\r
        }\r
\r
        // Overriding clone() and widening access to 'public':\r
        @Override\r
        public LabTerminal clone() {\r
            try {\r
                // Invokes native bytecode field-by-field memory copier:\r
                return (LabTerminal) super.clone();\r
            } catch (CloneNotSupportedException e) {\r
                throw new AssertionError("Cloneable contract broken!"); // Unreachable if implements Cloneable\r
            }\r
        }\r
\r
        public void printInfo() {\r
            System.out.printf("  [TERMINAL] ID: %s | RAM: %d GB\\n", terminalId, ramGb);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: THE clone() METHOD & Cloneable INTERFACE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        LabTerminal original = new LabTerminal("BKP-NODE-01", 32);\r
        LabTerminal cloned = original.clone();\r
\r
        System.out.println(">>> 1. Original Instance:");\r
        original.printInfo();\r
\r
        System.out.println("\\n>>> 2. Cloned Instance (Separate object in Heap with identical fields):");\r
        cloned.printInfo();\r
\r
        System.out.println("\\n>>> Verifying separate Heap identity:");\r
        System.out.println("  original == cloned: " + (original == cloned) + " (Distinct Heap memory objects!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 12: The clone() Method & Cloneable\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'clone()' RULES:\r
   - Class MUST implement 'java.lang.Cloneable'.\r
   - Widen visibility from 'protected' to 'public'.\r
   - Use covariant return type ('public MyClass clone()').\r
   - Handles 'CloneNotSupportedException'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What happens if a class invokes 'super.clone()' WITHOUT implementing the 'java.lang.Cloneable' interface?",shortAnswer:"The JVM throws a runtime 'java.lang.CloneNotSupportedException'. 'Cloneable' is a marker interface that authorizes the native 'Object.clone()' implementation to perform field copy.",explanation:"You must implement Cloneable, override clone() as public, and handle the checked exception.",hint:"Throws CloneNotSupportedException if Cloneable marker interface is missing.",level:"Intermediate",codeExample:"class MyClass implements Cloneable { public MyClass clone() { return (MyClass) super.clone(); } }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Object Duplication"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-amber-400 font-mono",children:"clone()"})," Method & the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Cloneable"})," Marker Interface"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how Java's native cloning mechanism works: implementing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Cloneable"}),", widening visibility to ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"public"}),", and handling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"CloneNotSupportedException"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"CloneableFoundationsDemo.java",highlightLines:[10,18,20,21,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"clone() & Cloneable FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 002_010 Topic 12: clone() and Cloneable",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic12_clone_note.txt"})}),e.jsx(r,{note:"Object.clone() creates an exact bitwise duplicate of your object on the Heap without calling the constructor! But always implement Cloneable, otherwise it throws CloneNotSupportedException. — Sukanta Hui"})]})}export{h as default};
