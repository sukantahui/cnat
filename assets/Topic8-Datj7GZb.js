import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const n=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 8: Accessibility Matrix Table: Complete Scope Permutations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class AccessibilityMatrixTableDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: JAVA ACCESS MODIFIERS ACCESSIBILITY MATRIX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+---------------------------------+---------+---------+-----------+--------+");\r
        System.out.println("| Location / Relationship         | private | default | protected | public |");\r
        System.out.println("+---------------------------------+---------+---------+-----------+--------+");\r
        System.out.println("| Same Class                      |   YES   |   YES   |    YES    |  YES   |");\r
        System.out.println("| Same Package Subclass           |   NO    |   YES   |    YES    |  YES   |");\r
        System.out.println("| Same Package Non-Subclass       |   NO    |   YES   |    YES    |  YES   |");\r
        System.out.println("| Different Package Subclass      |   NO    |   NO    |    YES    |  YES   |");\r
        System.out.println("| Different Package Non-Subclass  |   NO    |   NO    |    NO     |  YES   |");\r
        System.out.println("+---------------------------------+---------+---------+-----------+--------+");\r
\r
        System.out.println("\\n>>> Crucial Observations:");\r
        System.out.println("  1. 'private' is strictly restricted to the enclosing top-level/inner class.");\r
        System.out.println("  2. 'default' (no modifier) stops right at the package boundary.");\r
        System.out.println("  3. 'protected' crosses the package boundary ONLY through INHERITANCE.");\r
        System.out.println("  4. 'public' has zero boundary restrictions.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 8: Accessibility Matrix Table\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
+---------------------------------+---------+---------+-----------+--------+\r
| Scope Scenario                  | private | default | protected | public |\r
+---------------------------------+---------+---------+-----------+--------+\r
| Same Class                      |   YES   |   YES   |    YES    |  YES   |\r
| Same Package Subclass           |   NO    |   YES   |    YES    |  YES   |\r
| Same Package Non-Subclass       |   NO    |   YES   |    YES    |  YES   |\r
| Different Package Subclass      |   NO    |   NO    |    YES    |  YES   |\r
| Different Package Non-Subclass  |   NO    |   NO    |    NO     |  YES   |\r
+---------------------------------+---------+---------+-----------+--------+\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Which access modifier allows access from a subclass located in a DIFFERENT package, but denies access to non-subclasses in that different package?",shortAnswer:"The 'protected' access modifier.",explanation:"Protected members can be inherited and accessed through inheritance in foreign packages, but cannot be accessed via direct object reference by unrelated classes in that foreign package.",hint:"Protected allows foreign package access through inheritance only.",level:"Intermediate",codeExample:"// Different package subclass can access: super.protectedField"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Mastery Matrix"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Accessibility Matrix Table: Complete Scope Permutations"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the complete 5x4 Java accessibility matrix: visualizing exact visibility across same class, package peers, cross-package subclasses, and global callers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"AccessibilityMatrixTableDemo.java",highlightLines:[14,15,16,17,18,19]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Accessibility Matrix FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:i,title:"Module 002_009 Topic 8: Accessibility Matrix Table",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic8_matrix_table_note.txt"})}),e.jsx(r,{note:"Print this table out and tape it above your desk! This 5x4 matrix is asked in every single Java interview from Google to TCS. — Sukanta Hui"})]})}export{b as default};
