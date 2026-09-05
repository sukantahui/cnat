import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 012_005: Interview Mastery & Tricky MCQs\r
 * Topic 6: Tricky Riddle 7 - HashMap Keys Missing hashCode & equals\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interview;\r
\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class TrickyRiddle7HashMapHashCodeContractDemo {\r
\r
    // Missing hashCode & equals:\r
    public static class BrokenKey {\r
        int id;\r
        public BrokenKey(int id) { this.id = id; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TRICKY RIDDLE 7: HASHMAP HASHCODE/EQUALS CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Map<BrokenKey, String> map = new HashMap<>();\r
        BrokenKey k1 = new BrokenKey(101);\r
        BrokenKey k2 = new BrokenKey(101);\r
\r
        map.put(k1, "Student: Swadeep Paul");\r
\r
        System.out.println("1. Lookup with k1 (Exact same reference):");\r
        System.out.println("   map.get(k1) -> " + map.get(k1)); // "Student: Swadeep Paul"\r
\r
        System.out.println("\r
2. Lookup with k2 (Different reference, same id=101):");\r
        System.out.println("   map.get(k2) -> " + map.get(k2)); // NULL! (Default identity hashCode differs)\r
\r
        System.out.println("\r
RULE: For HashMap keys, you MUST override both hashCode() & equals() together!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_005: Interview Mastery & Tricky MCQs\r
Topic 6: Tricky Riddle 7 - HashMap HashCode Contract\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HASHCODE & EQUALS CONTRACT:\r
   - If 'a.equals(b)' is true, 'a.hashCode() == b.hashCode()' MUST be true.\r
   - If two objects have the same hashCode (collision), they do NOT have to be equal.\r
   - Keys must ideally be immutable (e.g. String, Integer, Records).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What happens when you use a custom class with no hashCode() and equals() implementations as a HashMap key?",shortAnswer:"It inherits default Object implementations which use system memory address identity. Two separate instances with identical field values will produce different hash codes and compare as unequal, returning null upon retrieval.",explanation:"Violation of HashMap key equality contract.",hint:"Default Object.hashCode() uses memory identity, failing key lookups for different instances.",level:"Beginner",codeExample:"map.put(new Key(1), val); map.get(new Key(1)); // returns null"},{question:"Why should HashMap keys always be immutable objects in production applications?",shortAnswer:"If key fields used in hashCode() mutate after being inserted into a Map, the object's computed hash code changes. Future lookups calculate a different bucket index, making the stored value unretrievable and causing silent memory leaks.",explanation:"Mutable key anti-pattern causing orphaned entries.",hint:"Mutating key fields changes bucket calculation, making entries unfindable.",level:"Intermediate",codeExample:'key.setName("new"); map.get(key); // null!'}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_005 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Interview Mastery & Tricky MCQs"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Tricky Riddle 7: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"HashMap Keys Missing hashCode/equals"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The broken contract: demonstrating memory leaks and null lookups when using custom mutable objects as HashMap keys without overriding hashCode and equals."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"TrickyRiddle7HashMapHashCodeContractDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Interview Riddles & MCQs FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 012_005 Topic 6: Tricky Riddle 7 - HashMap hashCode Contract",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_005_topic6_tricky_riddle_7_hashmap_hashcode_contract_note.txt"})}),e.jsx(s,{note:"If you put an object into a HashMap and later mutate its fields used in hashCode(), you will never be able to get it back with map.get()! The hash bucket changes, causing silent lookup failures and memory leaks! — Sukanta Hui"})]})}export{k as default};
