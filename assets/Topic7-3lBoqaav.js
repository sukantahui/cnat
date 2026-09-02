import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 7: The Mandatory Contract Between equals() and hashCode()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
import java.util.Objects;\r
\r
public class EqualsHashCodeContractDemo {\r
\r
    public static class TraineeBadge {\r
        private int badgeId;\r
        private String hub;\r
\r
        public TraineeBadge(int id, String hub) {\r
            this.badgeId = id;\r
            this.hub = hub;\r
        }\r
\r
        @Override\r
        public boolean equals(Object obj) {\r
            if (this == obj) return true;\r
            if (obj == null || getClass() != obj.getClass()) return false;\r
            TraineeBadge other = (TraineeBadge) obj;\r
            return this.badgeId == other.badgeId && Objects.equals(this.hub, other.hub);\r
        }\r
\r
        // MANDATORY RULE: If two objects are equal according to equals(),\r
        // calling hashCode() on each of them MUST produce the EXACT same integer!\r
        @Override\r
        public int hashCode() {\r
            return Objects.hash(badgeId, hub);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: THE MANDATORY equals() AND hashCode() CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TraineeBadge b1 = new TraineeBadge(501, "Barrackpore");\r
        TraineeBadge b2 = new TraineeBadge(501, "Barrackpore");\r
\r
        System.out.println(">>> 1. Rule 1: If a.equals(b) is true -> a.hashCode() MUST equal b.hashCode():");\r
        System.out.println("  b1.equals(b2)         : " + b1.equals(b2));\r
        System.out.println("  b1.hashCode() == b2.hashCode(): " + (b1.hashCode() == b2.hashCode()));\r
\r
        System.out.println("\\n>>> 2. Rule 2: If a.hashCode() == b.hashCode() -> equals() may or may not be true (Collision):");\r
        System.out.println("  (Hash collisions are mathematically possible and handled by collection linked buckets).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 7: equals() & hashCode() Contract\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE GOLDEN CONTRACT:\r
   - If 'a.equals(b) == true'  → 'a.hashCode() == b.hashCode()' is MANDATORY.\r
   - If 'a.hashCode() == b.hashCode()' → 'a.equals(b)' can be true OR false (Collision).\r
   - If 'a.equals(b) == false' → 'a.hashCode()' can still be same or different.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the mandatory contract between 'equals()' and 'hashCode()' in Java?",shortAnswer:"If two objects are equal according to 'equals(Object)', calling 'hashCode()' on each MUST produce the exact same integer. If two objects have the same hashCode, they may or may not be equal (a hash collision).",explanation:"Never override equals() without overriding hashCode() using the same fields.",hint:"Equal objects MUST have equal hashCodes.",level:"Intermediate",codeExample:"// If a.equals(b) == true → a.hashCode() == b.hashCode() is MANDATORY!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Golden Contract"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Mandatory Contract Between ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"equals()"})," & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"hashCode()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the cardinal law of Java collections: why equal objects must strictly yield equal hash codes, and how hash collisions are handled."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"EqualsHashCodeContractDemo.java",highlightLines:[18,24,27,28,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"equals() & hashCode() Contract FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 002_010 Topic 7: equals() and hashCode() Contract",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic7_equals_hashcode_contract_note.txt"})}),e.jsx(n,{note:"If a.equals(b) is true, their hash codes MUST be identical! If you break this rule, HashMaps and HashSets will lose your data inside the wrong bucket. — Sukanta Hui"})]})}export{x as default};
