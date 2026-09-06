import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 10: Catastrophic Consequences of Broken hashCode in HashSet & HashMap\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
import java.util.HashSet;\r
import java.util.Set;\r
\r
public class BrokenHashSetDeduplicationDemo {\r
\r
    public static class DefectiveStudent {\r
        private int id;\r
        public DefectiveStudent(int id) { this.id = id; }\r
\r
        @Override\r
        public boolean equals(Object obj) {\r
            if (this == obj) return true;\r
            if (obj == null || getClass() != obj.getClass()) return false;\r
            DefectiveStudent other = (DefectiveStudent) obj;\r
            return this.id == other.id;\r
        }\r
        // MISSING hashCode()!\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: BROKEN HASHSET DEDUPLICATION BUG - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Set<DefectiveStudent> set = new HashSet<>();\r
\r
        DefectiveStudent s1 = new DefectiveStudent(101);\r
        DefectiveStudent s2 = new DefectiveStudent(101); // DUPLICATE ID!\r
\r
        set.add(s1);\r
        set.add(s2); // HashSet FAILS to prevent duplicate because hashCodes differ!\r
\r
        System.out.println(">>> Attempted to insert duplicate student (ID 101) into HashSet:");\r
        System.out.println("  HashSet Size: " + set.size() + " (FAILED TO DEDUPLICATE!)");\r
        System.out.println("  s1.equals(s2): " + s1.equals(s2));\r
        System.out.println("  s1.hashCode(): " + s1.hashCode());\r
        System.out.println("  s2.hashCode(): " + s2.hashCode() + " (Different memory buckets!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 10: Broken HashSet Deduplication Bug\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HASHSET INVARIANT BREAKDOWN:\r
   - Set contract: Must contain NO duplicate elements.\r
   - Missing hashCode() allows duplicate equal objects into the Set.\r
   - Fix: Always generate hashCode() from the exact same fields used in equals().\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does a HashSet permit duplicate entries when a class overrides 'equals()' but fails to override 'hashCode()'?",shortAnswer:"HashSet computes the hashCode() of the incoming element first to select a bucket. Because the two equal objects have different default memory hash codes, they land in different buckets, so the HashSet never compares them with equals() and allows the duplicate insertion.",explanation:"Breaks the fundamental uniqueness invariant of the Set interface.",hint:"Different hashCodes send equal elements to different buckets, bypassing equals().",level:"Advanced",codeExample:"set.add(s1); set.add(s2); // Size becomes 2 instead of 1!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Collection Corruption"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Catastrophic HashSet & HashMap Failures: Duplicate Insertion Bugs"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how broken hash contracts violate the fundamental uniqueness laws of ",e.jsx("code",{className:"text-amber-300 font-mono",children:"HashSet"}),": allowing duplicate entities and corrupting data integrity."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"BrokenHashSetDeduplicationDemo.java",highlightLines:[12,17,33,34,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Broken HashSet FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 002_010 Topic 10: Broken HashSet Deduplication",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic10_hashset_corruption_note.txt"})}),e.jsx(n,{note:"If you put two equal students into a HashSet and the size becomes 2, your hashCode() is broken! Always implement both equals and hashCode together. — Sukanta Hui"})]})}export{x as default};
