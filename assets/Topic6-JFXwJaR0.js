import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 6: The 'hashCode()' Method: Returning an Integer Hash Representation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class HashCodeConceptFoundationsDemo {\r
\r
    public static class SimpleItem {\r
        private String itemCode;\r
\r
        public SimpleItem(String code) { this.itemCode = code; }\r
\r
        // Custom hashCode() calculation using prime multiplier 31:\r
        @Override\r
        public int hashCode() {\r
            int result = 17;\r
            result = 31 * result + (itemCode != null ? itemCode.hashCode() : 0);\r
            return result;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THE hashCode() METHOD FOUNDATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SimpleItem item1 = new SimpleItem("BKP-LAPTOP-01");\r
        SimpleItem item2 = new SimpleItem("BKP-LAPTOP-01");\r
\r
        System.out.println(">>> 1. Integer HashCode values:");\r
        System.out.println("  item1.hashCode() -> " + item1.hashCode());\r
        System.out.println("  item2.hashCode() -> " + item2.hashCode());\r
\r
        System.out.println("\\n>>> Why prime number 31 is traditionally used in hash algorithms:");\r
        System.out.println("  1. 31 is an odd prime, reducing hash bucket collisions.");\r
        System.out.println("  2. Modern JVMs optimize '31 * i' into '(i << 5) - i' (Fast bit-shift subtraction!).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 6: The hashCode() Method\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. hashCode() MECHANICS:\r
   - Returns a 32-bit signed integer ('int').\r
   - Used by HashMap / HashSet to place objects into array buckets: 'bucket = hash & (n - 1)'.\r
   - Two equal objects MUST return identical hash codes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,r=[{question:"What is the purpose of the 'hashCode()' method in Java, and why is the prime number 31 commonly used in hash algorithms?",shortAnswer:"The 'hashCode()' method returns an integer hash value used by hash-based data structures (HashMap, HashSet, Hashtable) to determine bucket placement. 31 is an odd prime that produces good bucket distribution and allows JVM bit-shift optimization: '31 * i == (i << 5) - i'.",explanation:"Ensures uniform hash distribution and high performance in collections.",hint:"Returns integer bucket index; 31 optimizes to bit-shift '(i << 5) - i'.",level:"Intermediate",codeExample:"int hash = Objects.hash(id, name);"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Hash Algorithms"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"hashCode()"})," Method: Returning an Integer Hash Representation"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"hashCode()"})," converts object state into an integer distribution key, and discover why Joshua Bloch recommends the prime multiplier 31."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"HashCodeConceptFoundationsDemo.java",highlightLines:[15,16,17,18,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"hashCode() Foundations FAQs",questions:r})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:o,title:"Module 002_010 Topic 6: hashCode() Foundations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic6_hashcode_note.txt"})}),e.jsx(a,{note:"Think of hashCode() as the pin code for a building: it narrows down which bucket to look into inside a HashMap, while equals() checks the exact house number! — Sukanta Hui"})]})}export{b as default};
