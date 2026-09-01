import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const n=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 10: Static Imports: Benefits and Cautions\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
// 1. Static imports of Math utilities\r
import static java.lang.Math.PI;\r
import static java.lang.Math.sqrt;\r
import static java.lang.Math.pow;\r
\r
public class StaticImportsDemonstrationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: STATIC IMPORTS IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        double radius = 7.0;\r
\r
        // Using static imports directly without 'Math.' prefix\r
        double circleArea = PI * pow(radius, 2);\r
        double hypotenuse = sqrt(pow(3, 2) + pow(4, 2));\r
\r
        System.out.printf("  Radius: %.1f | Circle Area: %.4f (using direct PI & pow)\\n", radius, circleArea);\r
        System.out.printf("  Hypotenuse of (3, 4): %.1f (using direct sqrt & pow)\\n", hypotenuse);\r
\r
        System.out.println("\\n>>> Best Practice Warning:");\r
        System.out.println("  - Use static imports sparingly (e.g. Math, Assertions in JUnit tests).");\r
        System.out.println("  - Overusing static wildcard imports ('import static ...*') pollutes namespace!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 10: Static Imports\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATIC IMPORT SYNTAX:\r
   - Single member: 'import static java.lang.Math.PI;'\r
   - All static members: 'import static java.lang.Math.*;'\r
   - Caution: Avoid polluting namespaces or obscuring where methods come from.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a Static Import in Java (introduced in Java 5)?",shortAnswer:"A syntax feature ('import static packageName.ClassName.member;') that allows static members to be used directly in code without qualifying them with their class name.",explanation:"Commonly used in math formulas ('sqrt(x)') and unit testing frameworks ('assertEquals(a, b)').",hint:"Allows direct use of static members without ClassName prefix.",level:"Beginner",codeExample:`import static java.lang.Math.PI;
double a = PI * r * r;`}];function f(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 10"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Syntax Sugar"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Static Imports (",t.jsx("code",{className:"text-emerald-300 font-mono",children:"import static java.lang.Math.*"}),"): Benefits & Cautions"]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how to write concise mathematical and test assertion code using static imports, while avoiding namespace pollution and readability pitfalls."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:n,title:"StaticImportsDemonstrationDemo.java",highlightLines:[9,10,11,20,21]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Static Imports FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:i,title:"Module 002_004 Topic 10: Static Imports",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic10_static_imports_note.txt"})}),t.jsx(s,{note:"Use static imports for mathematical formulas and JUnit test assertions (like assertEquals). Avoid wildcard static imports in enterprise code! — Sukanta Hui"})]})}export{f as default};
