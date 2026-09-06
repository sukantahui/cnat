import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 4: The Node<K,V>[] table Array: Hash Buckets & Linked Node Structure\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.HashMap;\r
\r
public class HashMapNodeTableBucketsDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: HashMap Node<K,V>[] TABLE BUCKETS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        HashMap<String, Integer> centerAccounts = new HashMap<>();\r
        centerAccounts.put("Barrackpore", 101);\r
        centerAccounts.put("Naihati", 102);\r
\r
        // Inspecting private transient Node<K,V>[] table:\r
        Field tableField = HashMap.class.getDeclaredField("table");\r
        tableField.setAccessible(true);\r
        Object[] table = (Object[]) tableField.get(centerAccounts);\r
\r
        System.out.println(">>> 1. Inspecting 'Node<K,V>[] table' Array:");\r
        System.out.println("  Table Array Object : " + table.getClass().getTypeName());\r
        System.out.println("  Table Array Length : " + table.length + " (Default capacity 16)");\r
\r
        System.out.println("\\n>>> 2. Inspecting Non-Empty Hash Buckets:");\r
        for (int i = 0; i < table.length; i++) {\r
            if (table[i] != null) {\r
                System.out.printf("  Bucket [%2d]: Node -> %s%n", i, table[i]);\r
            }\r
        }\r
\r
        System.out.println("\\n>>> THE Node<K,V> DATA STRUCTURE IN JDK SOURCE:");\r
        System.out.println("  static class Node<K,V> implements Map.Entry<K,V> {");\r
        System.out.println("      final int hash;");\r
        System.out.println("      final K key;");\r
        System.out.println("      V value;");\r
        System.out.println("      Node<K,V> next; // Singly linked list pointer for collision chaining!");\r
        System.out.println("  }");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 4: HashMap Node Table Buckets\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HASH TABLE BUCKETS:\r
   - Backed by 'transient Node<K, V>[] table;'.\r
   - Initialized lazily upon first 'put()' call.\r
   - Node contains: 'hash', 'key', 'value', and 'next' pointer.\r
   - Separate chaining collision: 'next' points to collided nodes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What are the 4 fields contained inside the internal 'HashMap.Node<K,V>' class in Java?",shortAnswer:"1. 'final int hash': the cached 32-bit hash value of the key. 2. 'final K key': the key object reference (immutable). 3. 'V value': the mutable value object reference. 4. 'Node<K,V> next': the pointer to the next node in the same bucket chain (used for separate chaining collisions).",explanation:"Core static nested class inside java.util.HashMap.",hint:"Four fields: final int hash, final K key, V value, and Node<K,V> next pointer.",level:"Intermediate",codeExample:"static class Node<K,V> { final int hash; final K key; V value; Node<K,V> next; }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Bucket Array Internals"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Node<K,V>[] table"})," Array: Hash Buckets & Linked Nodes"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace internal storage structures: inspecting the private ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"table"})," array and dissecting the 4 internal fields of ",e.jsx("code",{className:"text-purple-300 font-mono",children:"Node<K,V>"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"HashMapNodeTableBucketsDemo.java",highlightLines:[7,10,16,17,20,21,27,28,33,34,35,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Bucket Table FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:l,title:"Module 007_005 Topic 4: HashMap Node Table Buckets",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic4_hashmap_node_table_note.txt"})}),e.jsx(r,{note:"When you create a HashMap, the 'table' array is actually null initially! It is created lazily on your very first 'put()' call to save memory! That table array holds all the bucket heads! — Sukanta Hui"})]})}export{b as default};
