import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 14: Why String and Integer Are Ideal HashMap Keys: Immutability & Cached Hash\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class IdealHashMapKeysAnalysisDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: WHY String & Integer ARE IDEAL MAP KEYS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String studentKey = "Swadeep-Paul-101";\r
\r
        // Inspecting private int hash field inside String (Cached Hash Code):\r
        Field hashField = String.class.getDeclaredField("hash");\r
        hashField.setAccessible(true);\r
\r
        System.out.println(">>> 1. String Cached Hash Code Optimization:");\r
        System.out.println("  Hash field before hashCode() call: " + hashField.getInt(studentKey));\r
        int computedHash = studentKey.hashCode(); // Computes once and caches in private int hash!\r
        System.out.println("  Computed hashCode()              : " + computedHash);\r
        System.out.println("  Hash field after hashCode() call : " + hashField.getInt(studentKey) + " (Cached forever!)");\r
\r
        Map<String, String> cacheMap = new HashMap<>();\r
        cacheMap.put(studentKey, "Barrackpore Academy");\r
\r
        System.out.println("\\n>>> 2. 4 REASONS WHY String & Integer ARE THE BEST KEYS IN JAVA:");\r
        System.out.println("  1. Strict Immutability   : String and Integer are declared 'final' with all private final fields. Their state can NEVER change after creation.");\r
        System.out.println("  2. Cached Hash Code      : String caches its hash in a private field. Repeated 'map.get(str)' calls execute in O(1) without recalculating character math!");\r
        System.out.println("  3. Flawless hashCode/equals: Implements rigorous mathematical equals and uniform hash distribution.");\r
        System.out.println("  4. Zero Memory Corruption: Impossible to encounter the 'lost key' memory leak problem.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 14: String & Integer as Ideal Keys\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. IDEAL KEY PROPERTIES:\r
   - Immutability: State never mutates after creation.\r
   - Cached Hash: String caches 'hash' field to avoid re-computation.\r
   - Guaranteed consistency between 'equals()' and 'hashCode()'.\r
   - Prevents lost key / memory leak hazards.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What makes 'java.lang.String' the single most popular and optimal key type for HashMaps in Java?",shortAnswer:"1. 'Immutability': String is immutable, guaranteeing that its internal state and hash code never change after map insertion. 2. 'Cached Hash Code': String caches its computed 32-bit hash code in a private field ('private int hash;'). During subsequent 'map.get(key)' calls, the hash is read directly from cache without re-iterating over characters, delivering maximum CPU efficiency.",explanation:"Classic Java interview design question on String caching and immutability.",hint:"Immutability guarantees key stability; cached hash code eliminates character traversal on subsequent lookups.",level:"Intermediate",codeExample:"public int hashCode() { int h = hash; if (h == 0 && !value.isEmpty()) { ... hash = h; } return h; }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Ideal Map Keys"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"String"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Integer"})," Are Ideal Keys: Immutability & Cached Hash"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Analyze key architectural requirements: inspecting String's private cached ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"hash"})," field and evaluating immutability guarantees."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"IdealHashMapKeysAnalysisDemo.java",highlightLines:[7,10,16,17,21,22,23,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Ideal Keys FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 007_005 Topic 14: String & Integer as Ideal Keys",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic14_ideal_map_keys_note.txt"})}),e.jsx(r,{note:"String is the king of Map keys! Because String is immutable, it calculates its hashCode only ONCE and caches it in memory. Every subsequent get() call uses the cached hash instantly with zero computation! — Sukanta Hui"})]})}export{g as default};
