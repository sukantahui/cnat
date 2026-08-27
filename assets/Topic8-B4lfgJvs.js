import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 8: Contract Rule 1: If a.equals(b) is true, a.hashCode() MUST equal b.hashCode()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
import java.util.Objects;\r
\r
public class EqualsImpliesSameHashCodeDemo {\r
\r
    public static class EnrollmentToken {\r
        private String tokenCode;\r
        private int branchCode;\r
\r
        public EnrollmentToken(String code, int branch) {\r
            this.tokenCode = code;\r
            this.branchCode = branch;\r
        }\r
\r
        @Override\r
        public boolean equals(Object obj) {\r
            if (this == obj) return true;\r
            if (obj == null || getClass() != obj.getClass()) return false;\r
            EnrollmentToken other = (EnrollmentToken) obj;\r
            return branchCode == other.branchCode && Objects.equals(tokenCode, other.tokenCode);\r
        }\r
\r
        // MANDATORY RULE 1:\r
        @Override\r
        public int hashCode() {\r
            return Objects.hash(tokenCode, branchCode);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CONTRACT RULE 1: a.equals(b) => SAME HASHCODE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        EnrollmentToken t1 = new EnrollmentToken("BKP-JAVA-2026", 101);\r
        EnrollmentToken t2 = new EnrollmentToken("BKP-JAVA-2026", 101);\r
\r
        System.out.println("  t1.equals(t2)         : " + t1.equals(t2));\r
        System.out.println("  t1.hashCode()         : " + t1.hashCode());\r
        System.out.println("  t2.hashCode()         : " + t2.hashCode());\r
        System.out.println("  HashCodes are EQUAL   : " + (t1.hashCode() == t2.hashCode()));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 8: Contract Rule 1 (Equal Objects Have Equal HashCodes)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RULE 1 INVARIANT:\r
   - 'a.equals(b) == true' &rarr; 'a.hashCode() == b.hashCode()' MUST hold 100% of the time.\r
   - Any class that breaks this rule will corrupt HashMaps and HashSets.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why is it mandatory that if 'a.equals(b)' is true, 'a.hashCode()' must equal 'b.hashCode()'?",shortAnswer:"Because hash-based collections (HashMap/HashSet) use hashCode() first to locate the bucket. If two logically equal objects had different hash codes, the collection would look in different buckets and fail to find or deduplicate the object.",explanation:"This rule preserves collection consistency across all Java APIs.",hint:"Guarantees that equal objects land in the exact same hash bucket.",level:"Intermediate",codeExample:"if (a.equals(b)) assert a.hashCode() == b.hashCode();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Contract Rule 1"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Rule 1: If ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"a.equals(b)"})," is True, ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"a.hashCode()"})," MUST Equal ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"b.hashCode()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn why equal objects must strictly produce identical hash codes to ensure deterministic bucket routing in hash-based data structures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"EqualsImpliesSameHashCodeDemo.java",highlightLines:[18,25,36,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Rule 1 FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 002_010 Topic 8: Rule 1 Equal HashCodes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic8_rule1_note.txt"})}),e.jsx(n,{note:"If two student badges are equal, they must return the exact same integer from hashCode(). Never use random numbers or memory addresses inside hashCode()! — Sukanta Hui"})]})}export{x as default};
