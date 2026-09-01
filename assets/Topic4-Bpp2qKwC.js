import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 4: Explicit Class Import vs Wildcard Import (import java.util.*) Performance Myths\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
// Wildcard Import (On-Demand Import):\r
import java.util.*;\r
\r
public class ExplicitVsWildcardImportDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: EXPLICIT VS WILDCARD IMPORT PERFORMANCE MYTHS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> list = new ArrayList<>();\r
        Map<String, Integer> map = new HashMap<>();\r
\r
        list.add("Barrackpore Hub");\r
        map.put("TraineeCount", 45);\r
\r
        System.out.println(">>> THE MYTH: 'Wildcard imports (import java.util.*) slow down runtime performance!'");\r
        System.out.println(">>> THE TRUTH: FALSE! ZERO runtime impact!");\r
        System.out.println("  1. In compiled .class bytecode, ALL class references are converted to");\r
        System.out.println("     fully qualified binary names (e.g. 'java/util/ArrayList').");\r
        System.out.println("  2. The JVM does NOT load unused classes from the package into memory.");\r
        System.out.println("  3. Only the compiler spends microseconds matching class names during javac.");\r
        System.out.println("  4. BEST PRACTICE: Use explicit imports to avoid naming conflicts and improve readability.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 4: Explicit vs Wildcard Imports\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WILDCARD IMPORT FACTS:\r
   - 'import java.util.*' imports types in that package on-demand.\r
   - It does NOT import sub-packages (e.g. 'java.util.concurrent' is NOT imported).\r
   - Bytecode contains exact fully qualified class names (Zero runtime difference).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Does using a wildcard import ('import java.util.*') slow down application execution at runtime?",shortAnswer:"No! Wildcard imports have ZERO impact on runtime execution speed or memory footprint. In bytecode, javac translates every class into its fully qualified name. Unused classes in the package are never loaded by the JVM.",explanation:"Explicit imports are preferred primarily for readability and collision prevention, not performance.",hint:"Zero runtime impact; bytecode always uses fully qualified class names.",level:"Intermediate",codeExample:"import java.util.*; // Compiled bytecode uses exact classes only"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Performance Myths"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Explicit Class Import vs Wildcard Import (",e.jsx("code",{className:"text-amber-400 font-mono",children:"import java.util.*"}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Debunk the classic performance myth: why wildcard imports have zero runtime cost in compiled bytecode, and why explicit imports remain best practice for code clarity."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ExplicitVsWildcardImportDemo.java",highlightLines:[8,15,16,21,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Import Myths FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 002_009 Topic 4: Explicit vs Wildcard Imports",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic4_wildcard_imports_note.txt"})}),e.jsx(n,{note:"Wildcard imports don't slow down the JVM! However, we use explicit imports in professional teams so anyone reading the code knows exactly which package every class comes from. — Sukanta Hui"})]})}export{f as default};
