import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 9: Collision Resolution: Separate Chaining via Singly Linked List (Node.next)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.HashMap;\r
\r
class CollidingKey {\r
    private final String id;\r
\r
    public CollidingKey(String id) { this.id = id; }\r
\r
    // FORCING HASH COLLISION: Every key returns the identical hashCode 42!\r
    @Override\r
    public int hashCode() { return 42; }\r
\r
    @Override\r
    public boolean equals(Object obj) {\r
        if (this == obj) return true;\r
        if (obj == null || getClass() != obj.getClass()) return false;\r
        CollidingKey other = (CollidingKey) obj;\r
        return this.id.equals(other.id);\r
    }\r
\r
    @Override\r
    public String toString() { return id; }\r
}\r
\r
public class HashMapSeparateChainingDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: SEPARATE CHAINING COLLISION RESOLUTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        HashMap<CollidingKey, String> collisionMap = new HashMap<>();\r
\r
        CollidingKey k1 = new CollidingKey("Key-A");\r
        CollidingKey k2 = new CollidingKey("Key-B");\r
        CollidingKey k3 = new CollidingKey("Key-C");\r
\r
        collisionMap.put(k1, "Value 1 (Barrackpore)");\r
        collisionMap.put(k2, "Value 2 (Naihati)");\r
        collisionMap.put(k3, "Value 3 (Shyamnagar)");\r
\r
        // Inspecting the single collided bucket:\r
        Field tableField = HashMap.class.getDeclaredField("table");\r
        tableField.setAccessible(true);\r
        Object[] table = (Object[]) tableField.get(collisionMap);\r
\r
        int bucketIndex = (16 - 1) & (42 ^ (42 >>> 16));\r
        Object headNode = table[bucketIndex];\r
\r
        System.out.println(">>> 1. Inspecting Collided Bucket #" + bucketIndex + ":");\r
        System.out.println("  Head Node: " + headNode);\r
\r
        // Walking the linked list chain via reflection:\r
        Field nextField = headNode.getClass().getDeclaredField("next");\r
        nextField.setAccessible(true);\r
\r
        Object secondNode = nextField.get(headNode);\r
        Object thirdNode = (secondNode != null) ? nextField.get(secondNode) : null;\r
\r
        System.out.println("  Node 1 -> " + headNode);\r
        System.out.println("  Node 2 -> " + secondNode);\r
        System.out.println("  Node 3 -> " + thirdNode);\r
\r
        System.out.println("\\n>>> SEPARATE CHAINING MECHANICS:");\r
        System.out.println("  1. When two distinct keys hash to the same bucket: Java appends the new node to the tail of the linked list.");\r
        System.out.println("  2. During 'get(key)': Java computes the bucket index, then traverses the list checking 'equals()' on each node.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 9: Separate Chaining Collision Resolution\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SEPARATE CHAINING:\r
   - Hash collision → multiple keys map to same bucket.\r
   - Singly linked list linked by 'Node.next'.\r
   - In Java 8+: Collisions appended at TAIL (Java 7 inserted at HEAD).\r
   - In Java 8+: If list reaches 8 nodes, converts to Red-Black Tree.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does 'HashMap' resolve collisions when two non-equal keys compute to the exact same bucket index?",shortAnswer:"'HashMap' resolves collisions using 'Separate Chaining'. When a new node maps to an occupied bucket, HashMap traverses the bucket's singly-linked list. If it finds a node with matching hash and 'equals() == true', it updates the value. If no match is found, it appends the new 'Node<K,V>' to the tail of the bucket's linked list.",explanation:"Standard collision resolution technique in Java Collections.",hint:"Separate chaining appends collided nodes to a singly linked list linked via 'Node.next'.",level:"Intermediate",codeExample:"for (Node<K,V> e = p;; ++binCount) { if (e.next == null) { e.next = newNode; break; } }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Separate Chaining"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Collision Handling: Separate Chaining with Singly Linked Lists (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Node.next"}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace hash collision resolution: inspecting bucket linked chains via reflection and observing tail-insertion traversal during hash collisions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"HashMapSeparateChainingDemo.java",highlightLines:[7,10,16,17,36,37,44,45,51,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Separate Chaining FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:l,title:"Module 007_005 Topic 9: Separate Chaining",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic9_separate_chaining_note.txt"})}),e.jsx(a,{note:"What happens when two different keys land in the exact same bucket? Java doesn't overwrite anything! It chains them into a linked list using 'node.next'! — Sukanta Hui"})]})}export{g as default};
