import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 0: The Concept of Abstraction: Hiding Implementation Details\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class AbstractionConceptFoundationsDemo {\r
\r
    // Abstract Class: Hides internal complexity of biometric authentication\r
    public abstract static class BiometricTerminalAuth {\r
        protected String terminalLocation;\r
\r
        public BiometricTerminalAuth(String location) {\r
            this.terminalLocation = location;\r
        }\r
\r
        // ABSTRACT METHOD: What to do (contract), NOT how to do it\r
        public abstract boolean verifyIdentity(String traineeId, byte[] biometricSample);\r
\r
        // CONCRETE METHOD: Common interface exposed to caller\r
        public void authenticateAndAdmit(String traineeId, byte[] sample) {\r
            System.out.println("  [TERMINAL " + terminalLocation + "] Initiating identity verification for " + traineeId);\r
            boolean verified = verifyIdentity(traineeId, sample);\r
            if (verified) {\r
                System.out.println("  [ACCESS GRANTED] Door unlocked at " + terminalLocation);\r
            } else {\r
                System.out.println("  [ACCESS DENIED] Biometric mismatch at " + terminalLocation);\r
            }\r
        }\r
    }\r
\r
    // Concrete Implementation: Fingerprint Scanner\r
    public static class FingerprintScanner extends BiometricTerminalAuth {\r
        public FingerprintScanner(String location) { super(location); }\r
\r
        @Override\r
        public boolean verifyIdentity(String traineeId, byte[] sample) {\r
            System.out.println("  [FINGERPRINT HARDWARE] Optical scanning ridges & minutiae points...");\r
            return sample != null && sample.length > 0;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: THE CONCEPT OF ABSTRACTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BiometricTerminalAuth terminal = new FingerprintScanner("Barrackpore Hub Lab-1");\r
        byte[] dummyFingerprint = new byte[]{1, 2, 3, 4};\r
\r
        terminal.authenticateAndAdmit("Swadeep-101", dummyFingerprint);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 0: The Concept of Abstraction\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS ABSTRACTION:\r
   - Focus on WHAT to do rather than HOW to do it.\r
   - Achieved in Java via:\r
     1. Abstract Classes (0% to 100% partial abstraction).\r
     2. Interfaces (100% pure abstraction).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is Abstraction in Object-Oriented Programming and Java?",shortAnswer:"Abstraction is the process of hiding internal implementation complexities and showing only the essential feature set / interface to the outside world.",explanation:"Allows software engineers to focus on WHAT an object does rather than HOW it achieves it internally.",hint:"Hiding internal complexity while exposing essential interface.",level:"Beginner",codeExample:"abstract class Vehicle { abstract void drive(); }"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 0"}),t.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Core OOP Pillar"})]}),t.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"The Concept of Abstraction: Hiding Implementation Details"}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the fourth pillar of OOP: separating public contract from internal machinery, reducing cognitive load, and building extensible architectural boundaries."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"AbstractionConceptFoundationsDemo.java",highlightLines:[11,18,21,32,45]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Abstraction Foundations FAQs",questions:s})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:o,title:"Module 002_007 Topic 0: Concept of Abstraction",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic0_abstraction_note.txt"})}),t.jsx(a,{note:"When Swadeep presses the accelerator in a car, he doesn't need to know how the fuel injection valve works. That is Abstraction: essential controls exposed, complex machinery hidden! — Sukanta Hui"})]})}export{x as default};
