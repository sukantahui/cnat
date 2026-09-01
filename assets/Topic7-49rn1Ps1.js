import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 7: The 4 Access Modifiers Deep Dive (private, default, protected, public)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class FourAccessModifiersDeepDiveDemo {\r
\r
    public static class EncapsulatedAccount {\r
        // 1. private: Accessible ONLY inside this class\r
        private String secretAtmPin = "4432";\r
\r
        // 2. default (package-private): Accessible inside SAME package only (no keyword)\r
        String branchCity = "Barrackpore";\r
\r
        // 3. protected: Accessible in SAME package + SUBCLASSES in ANY package\r
        protected double accountBalance = 75000.0;\r
\r
        // 4. public: Accessible EVERYWHERE in the JVM universe\r
        public String accountHolderName = "Swadeep Paul";\r
\r
        public void printInternalAccess() {\r
            System.out.println("  [SAME CLASS ALL ACCESS]:");\r
            System.out.printf("    private PIN: %s | default Branch: %s | protected Balance: ₹%.2f | public Name: %s\\n",\r
                    secretAtmPin, branchCity, accountBalance, accountHolderName);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: THE 4 ACCESS MODIFIERS IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        EncapsulatedAccount acc = new EncapsulatedAccount();\r
        acc.printInternalAccess();\r
\r
        System.out.println("\\n>>> Same Package Non-Subclass Access (Inside main):");\r
        System.out.println("  ✔ acc.branchCity (default)      : " + acc.branchCity);\r
        System.out.println("  ✔ acc.accountBalance (protected): ₹" + acc.accountBalance);\r
        System.out.println("  ✔ acc.accountHolderName (public): " + acc.accountHolderName);\r
        System.out.println("  X acc.secretAtmPin (private)    : COMPILE ERROR (Hidden inside class)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 7: The 4 Access Modifiers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 4 ACCESS TIERS:\r
   - 'private'  : Same class only.\r
   - (default)  : Same class + same package.\r
   - 'protected': Same class + same package + subclasses in different packages.\r
   - 'public'   : Universal access across all packages.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"List the 4 Access Modifiers in Java in increasing order of visibility/accessibility.",shortAnswer:"1. private (Same Class only) < 2. default / package-private (Same Package) < 3. protected (Same Package + Subclasses in other packages) < 4. public (Anywhere).",explanation:"Default access has no keyword and is sometimes called package-private.",hint:"private < default < protected < public.",level:"Beginner",codeExample:"private int a; int b; protected int c; public int d;"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Encapsulation Pillars"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The 4 Access Modifiers Deep Dive: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"private"}),", default, ",e.jsx("code",{className:"text-amber-400 font-mono",children:"protected"})," & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"public"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the four access tiers governing Java encapsulation: class isolation, package-private boundaries, subclass inheritance access, and universal public visibility."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"FourAccessModifiersDeepDiveDemo.java",highlightLines:[12,15,18,21,34,35,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Access Modifiers FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:c,title:"Module 002_009 Topic 7: The 4 Access Modifiers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic7_access_modifiers_note.txt"})}),e.jsx(n,{note:"Remember the four gates: Private stays inside the room, Default stays in the house (package), Protected travels to children in other houses, and Public is open to the entire street! — Sukanta Hui"})]})}export{b as default};
