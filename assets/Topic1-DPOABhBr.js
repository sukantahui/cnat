import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 1: String Creation: String Literal vs Constructor Allocation (new String())\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class StringLiteralVsConstructorDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: LITERAL VS CONSTRUCTOR ALLOCATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. String Literal (Stored directly in String Constant Pool):\r
        String s1 = "Barrackpore";\r
        String s2 = "Barrackpore"; // Reuses s1 reference from SCP!\r
\r
        // 2. String Constructor (Forces a new distinct Heap object outside SCP):\r
        String s3 = new String("Barrackpore");\r
\r
        System.out.println(">>> 1. Comparing Literals with '==' (Reference Identity):");\r
        System.out.println("  s1 == s2 : " + (s1 == s2) + " (Both point to the SAME object in SCP!)");\r
\r
        System.out.println("\\n>>> 2. Comparing Literal vs Constructor with '==':");\r
        System.out.println("  s1 == s3 : " + (s1 == s3) + " (s3 is a separate instance in regular Heap!)");\r
\r
        System.out.println("\\n>>> 3. Comparing Content with 'equals()':");\r
        System.out.println("  s1.equals(s3) : " + s1.equals(s3) + " (Same character values!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 1: Literal vs Constructor Allocation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MEMORY ALLOCATION RULES:\r
   - 'String s = "hello";'          &rarr; 1 object in SCP (or 0 if already present).\r
   - 'String s = new String("hello");' &rarr; 2 objects (1 in SCP + 1 in regular Heap).\r
   - Avoid 'new String("literal")' in production code.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:`What is the memory difference between 'String s = "Java";' and 'String s = new String("Java");'?`,shortAnswer:`'String s = "Java";' places the string literal in the String Constant Pool (SCP) and reuses it across multiple references. 'String s = new String("Java");' forces the creation of a brand-new object on the general Heap, wasting memory.`,explanation:"Always use string literals unless you specifically need distinct heap instances.",hint:"Literal uses/reuses SCP; 'new String()' creates an extra object in the regular Heap.",level:"Beginner",codeExample:`String s1 = "Java"; // SCP pool
String s2 = new String("Java"); // Heap instance`}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Memory Allocation"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["String Creation: String Literal vs ",e.jsx("code",{className:"text-amber-400 font-mono",children:"new String()"})," Constructor"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace the exact memory footprint differences between string literals in the Constant Pool versus explicit ",e.jsx("code",{className:"text-amber-300 font-mono",children:"new String()"})," heap allocations."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StringLiteralVsConstructorDemo.java",highlightLines:[7,15,16,19,23,26,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"String Literal FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_001 Topic 1: String Literal vs Constructor",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic1_literal_vs_constructor_note.txt"})}),e.jsx(a,{note:"Never write 'new String('hello')'! It creates an unnecessary duplicate object on the Heap. Just write 'hello' so Java reuses the shared pool instance. — Sukanta Hui"})]})}export{x as default};
