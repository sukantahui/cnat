import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 4: The Mathematical Contract of equals(): 5 Invariant Properties\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class EqualsMathematicalContractDemo {\r
\r
    public static class CourseToken {\r
        private String tokenCode;\r
        public CourseToken(String code) { this.tokenCode = code; }\r
\r
        @Override\r
        public boolean equals(Object obj) {\r
            if (this == obj) return true;\r
            if (obj == null || getClass() != obj.getClass()) return false;\r
            CourseToken other = (CourseToken) obj;\r
            return this.tokenCode != null && this.tokenCode.equals(other.tokenCode);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: THE 5 LAWS OF THE equals() CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CourseToken x = new CourseToken("JAVA-BKP-2026");\r
        CourseToken y = new CourseToken("JAVA-BKP-2026");\r
        CourseToken z = new CourseToken("JAVA-BKP-2026");\r
\r
        // 1. REFLEXIVE: x.equals(x) MUST be true\r
        System.out.println("  1. Reflexive  : x.equals(x) -> " + x.equals(x));\r
\r
        // 2. SYMMETRIC: x.equals(y) == y.equals(x)\r
        System.out.println("  2. Symmetric  : (x.equals(y) && y.equals(x)) -> " + (x.equals(y) && y.equals(x)));\r
\r
        // 3. TRANSITIVE: If x.equals(y) && y.equals(z) -> x.equals(z) MUST be true\r
        System.out.println("  3. Transitive : (x.equals(y) && y.equals(z) => x.equals(z)) -> " + (x.equals(y) && y.equals(z) && x.equals(z)));\r
\r
        // 4. CONSISTENT: Multiple invocations return the same result if state hasn't changed\r
        System.out.println("  4. Consistent : x.equals(y) == x.equals(y) -> " + (x.equals(y) == x.equals(y)));\r
\r
        // 5. NON-NULLITY: x.equals(null) MUST return false (NEVER throw NullPointerException!)\r
        System.out.println("  5. Non-Nullity: x.equals(null) -> " + x.equals(null));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 4: Mathematical Contract of equals()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 5 EQUALS LAWS (Oracle Specification):\r
   - Reflexive  : For any non-null x: 'x.equals(x)' is true.\r
   - Symmetric  : 'x.equals(y)' is true if and only if 'y.equals(x)' is true.\r
   - Transitive : If 'x.equals(y)' and 'y.equals(z)', then 'x.equals(z)'.\r
   - Consistent : Repeated calls return same boolean value.\r
   - Non-Nullity: For any non-null x: 'x.equals(null)' MUST return false.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the 5 mathematical properties required by the 'equals()' contract in Java?",shortAnswer:"1. Reflexive (x.equals(x) == true), 2. Symmetric (x.equals(y) == y.equals(x)), 3. Transitive (x.equals(y) && y.equals(z) implies x.equals(z)), 4. Consistent (remains invariant unless fields change), 5. Non-nullity (x.equals(null) == false).",explanation:"Violating any of these 5 rules breaks HashSets, HashMaps, and sorting algorithms.",hint:"Reflexive, Symmetric, Transitive, Consistent, and Non-nullity.",level:"Intermediate",codeExample:"// Non-nullity: if (obj == null) return false;"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Mathematical Contracts"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Mathematical Contract of ",e.jsx("code",{className:"text-purple-400 font-mono",children:"equals()"}),": 5 Invariant Properties"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the five mandatory equivalence relation laws demanded by the Java Language Specification: Reflexive, Symmetric, Transitive, Consistent, and Non-nullity."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"EqualsMathematicalContractDemo.java",highlightLines:[13,14,27,30,33,36,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"equals() Contract FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:l,title:"Module 002_010 Topic 4: equals() Contract",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic4_equals_contract_note.txt"})}),e.jsx(r,{note:"If you violate even one of these 5 laws—especially non-nullity or symmetry—your objects will behave erratically in ArrayLists and HashSets. Always follow the 5 rules! — Sukanta Hui"})]})}export{h as default};
