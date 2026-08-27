import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 0: The java.util.Map Interface: Key-Value Association & Unique Key Mapping\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class MapInterfaceFundamentalsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: java.util.Map<K, V> FUNDAMENTALS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Map<String, String> studentBranches = new HashMap<>();\r
\r
        // 1. Associating Unique Keys with Values:\r
        studentBranches.put("STU-101", "Barrackpore Central");\r
        studentBranches.put("STU-102", "Naihati Center");\r
        studentBranches.put("STU-103", "Shyamnagar Hub");\r
\r
        System.out.println(">>> 1. Populated Student Branch Mapping:");\r
        System.out.println("  Map Size: " + studentBranches.size());\r
        System.out.println("  Entries : " + studentBranches);\r
\r
        // 2. Overwriting Value on Existing Key (Returns Previous Value):\r
        String previousBranch = studentBranches.put("STU-101", "Ichapur Extension");\r
        System.out.println("\\n>>> 2. Overwriting Key 'STU-101':");\r
        System.out.println("  Previous Branch : " + previousBranch);\r
        System.out.println("  Updated Branch  : " + studentBranches.get("STU-101"));\r
\r
        System.out.println("\\n>>> CORE PROPERTIES OF java.util.Map<K, V>:");\r
        System.out.println("  1. Key Uniqueness : Each key maps to at most one value. Duplicate keys overwrite existing values.");\r
        System.out.println("  2. Multiple Values: Distinct keys can map to the exact same value (e.g. multiple students in Barrackpore).");\r
        System.out.println("  3. Independent    : Does not extend 'java.util.Collection' because it models 2-dimensional associations.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 0: java.util.Map Fundamentals\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MAP CONTRACT:\r
   - Key-Value pairs ('Map<K, V>').\r
   - Keys must be strictly unique.\r
   - Values may contain duplicates.\r
   - 'put(k, v)' overwrites existing value and returns the old value.\r
   - Independent hierarchy from 'java.util.Collection'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What happens when 'map.put(key, newValue)' is called with a key that already exists in the Map?",shortAnswer:"The Map replaces the old value associated with that key with 'newValue' and returns the PREVIOUS value that was associated with the key (or 'null' if the key was not previously present, or if the previous value was null). The total size of the Map remains unchanged.",explanation:"Core contract of java.util.Map.put().",hint:"Replaces the existing value with newValue and returns the old value.",level:"Beginner",codeExample:'String oldVal = map.put("K1", "NewVal"); // Replaces oldVal and returns it'}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Map Contract"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Map"})," Interface: Key-Value Association & Unique Keys"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master dictionary mappings: understanding key uniqueness invariants, value replacement semantics, and the fundamental separation from java.util.Collection."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"MapInterfaceFundamentalsDemo.java",highlightLines:[7,10,16,17,18,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Map Fundamentals FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 007_005 Topic 0: Map Fundamentals",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic0_map_fundamentals_note.txt"})}),e.jsx(r,{note:"Welcome to Module 007_005! Maps are the most important data structure in real-world Java! Think of a Map like a roll number register: each roll number (Key) is strictly unique, and points to a student record (Value)! — Sukanta Hui"})]})}export{y as default};
