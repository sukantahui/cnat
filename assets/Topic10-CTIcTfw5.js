import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 10: Java 8 Treeification: TREEIFY_THRESHOLD (8) & MIN_TREEIFY_CAPACITY (64)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.HashMap;\r
\r
class HardCollidingKey implements Comparable<HardCollidingKey> {\r
    private final int id;\r
\r
    public HardCollidingKey(int id) { this.id = id; }\r
\r
    @Override\r
    public int hashCode() { return 100; } // Same hash forces single bucket\r
\r
    @Override\r
    public boolean equals(Object obj) {\r
        if (this == obj) return true;\r
        if (obj == null || getClass() != obj.getClass()) return false;\r
        HardCollidingKey other = (HardCollidingKey) obj;\r
        return this.id == other.id;\r
    }\r
\r
    @Override\r
    public int compareTo(HardCollidingKey other) {\r
        return Integer.compare(this.id, other.id);\r
    }\r
\r
    @Override\r
    public String toString() { return "Key#" + id; }\r
}\r
\r
public class HashMapTreeificationOptimizationDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: JAVA 8 TREEIFICATION OPTIMIZATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // We pre-set capacity to 64 to satisfy MIN_TREEIFY_CAPACITY:\r
        HashMap<HardCollidingKey, String> map = new HashMap<>(64);\r
\r
        // Add 8 colliding keys to trigger treeification:\r
        for (int i = 1; i <= 8; i++) {\r
            map.put(new HardCollidingKey(i), "Student Record #" + i);\r
        }\r
\r
        Field tableField = HashMap.class.getDeclaredField("table");\r
        tableField.setAccessible(true);\r
        Object[] table = (Object[]) tableField.get(map);\r
\r
        int bucketIdx = (64 - 1) & (100 ^ (100 >>> 16));\r
        Object bucketNode = table[bucketIdx];\r
\r
        System.out.println(">>> 1. Inspecting Bucket Node Type after 8 Collisions:");\r
        System.out.println("  Bucket Index : " + bucketIdx);\r
        System.out.println("  Node Class   : " + bucketNode.getClass().getName());\r
\r
        boolean isTree = bucketNode.getClass().getName().contains("TreeNode");\r
        System.out.println("  Is Red-Black TreeNode? : " + isTree + " (Successfully Treeified into Red-Black Tree!)");\r
\r
        System.out.println("\\n>>> THE 2 MANDATORY CONDITIONS FOR TREEIFICATION:");\r
        System.out.println("  1. Bucket Collision Chain Length >= TREEIFY_THRESHOLD (8).");\r
        System.out.println("  2. Total Table Capacity >= MIN_TREEIFY_CAPACITY (64).");\r
        System.out.println("  * If chain length >= 8 but capacity < 64: HashMap resizes table instead of treeifying!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 10: Java 8 Treeification Optimization\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TREEIFICATION RULES:\r
   - Trigger: 8 collisions in a single bucket.\r
   - Pre-condition: Table capacity >= 64 ('MIN_TREEIFY_CAPACITY').\r
   - Replaces 'Node<K, V>' with 'TreeNode<K, V>' (Red-Black Tree).\r
   - Improves worst-case search from O(n) to O(log n).\r
   - Defends against HashDoS security vulnerabilities.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the TWO mandatory conditions required for a HashMap bucket to convert from a linked list into a Red-Black Tree in Java 8+?",shortAnswer:"1. 'Bucket Chain Length': the number of colliding elements in that single bucket must reach or exceed 'TREEIFY_THRESHOLD' (8). 2. 'Total Table Capacity': the total capacity of the HashMap table must be at least 'MIN_TREEIFY_CAPACITY' (64). If the bucket reaches 8 nodes but total capacity is under 64, HashMap resizes (doubles) the table instead of treeifying.",explanation:"Crucial Java 8 HashMap performance enhancement.",hint:"1. Bucket nodes >= 8 (TREEIFY_THRESHOLD) AND 2. Table capacity >= 64 (MIN_TREEIFY_CAPACITY).",level:"Advanced",codeExample:"if (binCount >= TREEIFY_THRESHOLD - 1) { if (tab.length < MIN_TREEIFY_CAPACITY) resize(); else treeifyBin(tab, hash); }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Treeification Internals"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Java 8 Treeification: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"TREEIFY_THRESHOLD (8)"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"TreeNode"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze Java 8 performance upgrades: observing how buckets transform from linear linked lists into self-balancing Red-Black trees when collisions reach 8 nodes with capacity ≥ 64."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"HashMapTreeificationOptimizationDemo.java",highlightLines:[7,10,16,17,36,37,43,44,49,50]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Treeification FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 007_005 Topic 10: Java 8 Treeification",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic10_java8_treeification_note.txt"})}),e.jsx(r,{note:"Before Java 8, if a malicious hacker sent thousands of keys with the exact same hash code, HashMap lookups slowed down to O(n) crawling speed (HashDoS attack)! Java 8 fixed this forever by turning long chains into Red-Black trees (O(log n))! — Sukanta Hui"})]})}export{b as default};
