import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as s}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 9: Contract Rule 2: Hash Collisions (Same hashCode does NOT imply equals)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class HashCollisionMechanicsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: HASH COLLISIONS & RULE 2 OF THE CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Classic Java String Hash Collision:\r
        // "FB" and "Ea" produce the EXACT SAME hashCode in Java!\r
        String s1 = "FB";\r
        String s2 = "Ea";\r
\r
        System.out.println(">>> Famous String Hash Collision in Java:");\r
        System.out.println("  s1 ("FB").hashCode() : " + s1.hashCode());\r
        System.out.println("  s2 ("Ea").hashCode() : " + s2.hashCode());\r
        System.out.println("  s1.hashCode() == s2.hashCode() : " + (s1.hashCode() == s2.hashCode()) + " (Identical Hash!)");\r
        System.out.println("  s1.equals(s2)                  : " + s1.equals(s2) + " (Completely Different Strings!)");\r
\r
        System.out.println("\\n>>> How HashMap handles Hash Collisions:");\r
        System.out.println("  1. 'FB' and 'Ea' land in the SAME bucket.");\r
        System.out.println("  2. HashMap stores both entries in a LinkedList / Red-Black Tree inside that bucket.");\r
        System.out.println("  3. When looking up 'FB', HashMap loops through that bucket and uses 'equals()' to pick 'FB'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 9: Hash Collisions (Rule 2)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HASH COLLISION FACTS:\r
   - 'a.hashCode() == b.hashCode()' does NOT mean 'a.equals(b)'.\r
   - Pigeonhole Principle: 2^32 int hashCodes cannot uniquely map infinite objects.\r
   - HashMap resolves collisions via LinkedList & Red-Black Trees (Java 8+).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is a Hash Collision and does 'a.hashCode() == b.hashCode()' imply that 'a.equals(b)' is true?",shortAnswer:'No! A hash collision occurs when two unequal objects produce the exact same integer hashCode (e.g. \\"FB\\" and \\"Ea\\"). Because there are infinite possible objects and only 2^32 distinct integers, collisions are mathematically inevitable and handled by collections using bucket collision lists.',explanation:"HashMap uses equals() as the final disambiguation step inside colliding buckets.",hint:"Collisions are mathematically inevitable; equal hashCodes do not guarantee equal objects.",level:"Intermediate",codeExample:'assert \\"FB\\".hashCode() == \\"Ea\\".hashCode(); // true, but equals() is false'}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Collision Mechanics"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Rule 2: Hash Collisions (",e.jsx("code",{className:"text-purple-400 font-mono",children:"hashCode()"})," Equality Does NOT Imply ",e.jsx("code",{className:"text-purple-400 font-mono",children:"equals()"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover why hash collisions are mathematically inevitable (Pigeonhole Principle) and how HashMaps resolve bucket collisions using secondary ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"equals()"})," checks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(s,{fileModule:o,title:"HashCollisionMechanicsDemo.java",highlightLines:[16,17,20,21,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Hash Collision FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_010 Topic 9: Hash Collisions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic9_collisions_note.txt"})}),e.jsx(t,{note:"Try printing 'FB'.hashCode() and 'Ea'.hashCode() in Java—they both equal 2236! That is a hash collision, and HashMap easily handles it by checking equals() inside the bucket. — Sukanta Hui"})]})}export{C as default};
