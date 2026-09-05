import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 5: The 'intern()' Method: Manually Caching Dynamic Strings into SCP\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class StringInterningMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: THE String.intern() METHOD - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Literal placed in SCP:\r
        String poolStr = "Naihati";\r
\r
        // 2. Dynamic string on regular Heap:\r
        String heapStr = new String("Naihati");\r
\r
        // 3. Calling intern() returns the canonical SCP reference:\r
        String internedStr = heapStr.intern();\r
\r
        System.out.println(">>> 1. Comparing heapStr vs poolStr with '==':");\r
        System.out.println("  heapStr == poolStr        : " + (heapStr == poolStr) + " (Distinct Heap Objects)");\r
\r
        System.out.println("\\n>>> 2. Comparing internedStr vs poolStr with '==':");\r
        System.out.println("  internedStr == poolStr    : " + (internedStr == poolStr) + " (Same Canonical SCP Object!)");\r
\r
        System.out.println("\\n>>> How intern() works under the hood:");\r
        System.out.println("  - If SCP already contains the string, intern() returns the pooled reference.");\r
        System.out.println("  - If SCP does NOT contain it, intern() adds it to SCP and returns that reference.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 5: The intern() Method\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'String.intern()' RULES:\r
   - Returns a canonical reference from the String Constant Pool.\r
   - 's.intern() == "literal"' evaluates to 'true'.\r
   - Used for deduplicating massive datasets read from files or databases.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What does the 'String.intern()' native method do in Java?",shortAnswer:"The 'intern()' method returns the canonical representation of the string from the String Constant Pool (SCP). If the string exists in SCP, its pool reference is returned; otherwise, the string is added to SCP and returned.",explanation:"Allows converting dynamically computed heap strings into shared pooled instances for memory optimization.",hint:"Returns the canonical pooled reference from SCP.",level:"Intermediate",codeExample:"String s2 = s1.intern(); // s2 points directly to SCP"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Pool Interning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-purple-400 font-mono",children:"intern()"})," Method: Caching Dynamic Strings into SCP"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how ",e.jsx("code",{className:"text-purple-300 font-mono",children:"String.intern()"})," queries and registers strings into the String Constant Pool: deduplicating dynamic runtime data and enabling lightning-fast reference comparisons."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"StringInterningMasteryDemo.java",highlightLines:[7,15,18,21,24,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"intern() FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 003_001 Topic 5: String.intern() Method",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic5_intern_note.txt"})}),e.jsx(i,{note:"If you are parsing a huge CSV file with 1 million records where the city is repeated over and over, calling city.intern() deduplicates the strings in RAM and saves hundreds of megabytes! — Sukanta Hui"})]})}export{g as default};
