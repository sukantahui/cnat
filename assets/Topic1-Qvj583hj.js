import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 1: Core Map Methods Suite: getOrDefault(), containsKey(), and Collection Views\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class CoreMapMethodsSuiteDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: CORE Map<K, V> METHODS SUITE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Map<String, Double> courseFees = new HashMap<>();\r
        courseFees.put("Java Core", 8500.0);\r
        courseFees.put("Spring Boot", 12500.0);\r
        courseFees.put("GST & Taxation", 6000.0);\r
\r
        // 1. Safe Query with getOrDefault():\r
        double javaFee = courseFees.getOrDefault("Java Core", 0.0);\r
        double cloudFee = courseFees.getOrDefault("AWS Cloud", 15000.0); // Not in map, returns default!\r
\r
        System.out.println(">>> 1. Querying with getOrDefault():");\r
        System.out.println("  Java Core Fee (Found)       : ₹" + javaFee);\r
        System.out.println("  AWS Cloud Fee (Default Used): ₹" + cloudFee);\r
\r
        // 2. Membership Validation (containsKey vs containsValue):\r
        System.out.println("\\n>>> 2. Membership Verification:");\r
        System.out.println("  Contains Key 'Spring Boot'? : " + courseFees.containsKey("Spring Boot") + " (O(1) instant hash lookup)");\r
        System.out.println("  Contains Value 6000.0?      : " + courseFees.containsValue(6000.0) + " (O(n) linear value scan)");\r
\r
        // 3. The 3 Map Views: keySet, values, entrySet:\r
        System.out.println("\\n>>> 3. Traversing Map via entrySet() (Fastest & Most Idiomatic):");\r
        for (Map.Entry<String, Double> entry : courseFees.entrySet()) {\r
            System.out.printf("  Course: %-18s -> Fee: ₹%.2f%n", entry.getKey(), entry.getValue());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 1: Core Map Methods Suite\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE MAP METHODS:\r
   - 'getOrDefault(k, default)': avoids null checks.\r
   - 'containsKey(k)': O(1) hash bucket jump.\r
   - 'containsValue(v)': O(n) linear scan across all buckets.\r
   - 'entrySet()': iterate over key-value pairs efficiently in 1 pass.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is 'map.containsKey(key)' an O(1) operation while 'map.containsValue(value)' is an O(n) operation in HashMap?",shortAnswer:"'containsKey(key)' is O(1) because the key is hashed to jump directly to its target bucket. In contrast, 'containsValue(value)' is O(n) because values are not indexed by hash codes; the JVM must iterate through every single bucket and traverse every linked node in the map to check 'value.equals()'.",explanation:"Fundamental complexity difference between key and value lookups in HashMaps.",hint:"Keys are indexed by hash buckets (O(1)); values require a full linear scan of all buckets (O(n)).",level:"Intermediate",codeExample:'map.containsKey("K1"); // O(1) | map.containsValue("V1"); // O(n)'}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Core Map Methods"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Core Map Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"getOrDefault()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"containsKey()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"entrySet()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master dictionary lookups: utilizing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"getOrDefault"})," to eliminate boilerplate null checks and analyzing ",e.jsx("code",{className:"text-sky-300 font-mono",children:"O(1)"})," key vs ",e.jsx("code",{className:"text-rose-300 font-mono",children:"O(n)"})," value queries."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"CoreMapMethodsSuiteDemo.java",highlightLines:[7,10,16,17,20,21,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Core Map Methods FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 007_005 Topic 1: Core Map Methods Suite",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic1_core_map_methods_note.txt"})}),e.jsx(r,{note:"Use 'getOrDefault(key, defaultValue)' instead of checking 'if (map.get(key) != null)'! It makes your code clean, elegant, and prevents NullPointerExceptions! — Sukanta Hui"})]})}export{y as default};
