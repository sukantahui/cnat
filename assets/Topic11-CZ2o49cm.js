import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 007_002: List Implementations & ArrayList Internals\r
 * Topic 11: Legacy Classes: java.util.Vector & java.util.Stack (Synchronized Flaws)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayDeque;\r
import java.util.Deque;\r
import java.util.Stack;\r
import java.util.Vector;\r
\r
public class LegacyVectorAndStackFlawsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: LEGACY Vector & Stack ARCHITECTURAL FLAWS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. LEGACY Vector (Java 1.0): Synchronized on every method!\r
        Vector<String> legacyVector = new Vector<>();\r
        legacyVector.add("Legacy Element 1");\r
        System.out.println(">>> 1. Legacy Vector Content: " + legacyVector);\r
\r
        // 2. LEGACY Stack (Subclass of Vector - Flawed Inheritance Design!):\r
        Stack<String> legacyStack = new Stack<>();\r
        legacyStack.push("Action 1");\r
        legacyStack.push("Action 2");\r
        // Flawed inheritance: Stack extends Vector, so you can call vector methods on it!\r
        legacyStack.add(0, "ILLEGAL ELEMENT INSERTED AT BOTTOM!"); // Violates Stack encapsulation!\r
\r
        System.out.println("\\n>>> 2. Legacy Stack (Inheritance Violation):");\r
        System.out.println("  Stack after inserting at bottom: " + legacyStack);\r
\r
        // 3. MODERN REPLACEMENT: ArrayDeque:\r
        Deque<String> modernStack = new ArrayDeque<>();\r
        modernStack.push("Action 1");\r
        modernStack.push("Action 2");\r
        System.out.println("\\n>>> 3. Modern Fast Stack (ArrayDeque):");\r
        System.out.println("  Popped: " + modernStack.pop());\r
\r
        System.out.println("\\n>>> WHY Vector AND Stack ARE OBSOLETE:");\r
        System.out.println("  1. Synchronization Overhead : Every method in Vector uses 'synchronized', imposing high lock acquisition penalties even in single-threaded code.");\r
        System.out.println("  2. Liskov Violation         : Stack extending Vector violates OOP encapsulation by exposing index-based insertion methods (add(0, e)).");\r
        System.out.println("  3. Modern Replacements      : Use 'ArrayList' (or Collections.synchronizedList) instead of Vector; use 'ArrayDeque' instead of Stack.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_002: List Implementations & ArrayList Internals\r
Topic 11: Legacy Vector & Stack\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LEGACY CLASSES:\r
   - 'Vector': Java 1.0 synchronized array list (slow lock overhead).\r
   - 'Stack': flawed inheritance extending Vector; exposes 'add(index)'.\r
   - Modern replacement for Vector: 'ArrayList' or 'CopyOnWriteArrayList'.\r
   - Modern replacement for Stack: 'ArrayDeque'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'java.util.Stack' considered a flawed design in Java, and what class should be used instead?",shortAnswer:"'java.util.Stack' directly extends 'java.util.Vector' (inheritance instead of composition). As a result, Stack inherits all Vector methods like 'add(int index, E element)', allowing callers to insert elements into arbitrary positions (or at the bottom of the stack), completely violating the LIFO stack abstraction. In addition, all its methods are synchronized. Java architects recommend using 'ArrayDeque' instead.",explanation:"Effective Java Item 18: Favor composition over inheritance (Stack is the classic anti-pattern).",hint:"Inherits from Vector exposing non-stack methods like add(index, e); use ArrayDeque instead.",level:"Intermediate",codeExample:"Deque<String> stack = new ArrayDeque<>(); // Clean modern replacement"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_002 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Legacy Collections"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Legacy Classes: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"java.util.Vector"})," & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"java.util.Stack"})," Architectural Flaws"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Examine historical design anti-patterns: analyzing method-level synchronization overhead in Vector and inheritance encapsulation violations in Stack."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"LegacyVectorAndStackFlawsDemo.java",highlightLines:[7,10,16,17,21,22,24,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Legacy Collections FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 007_002 Topic 11: Legacy Vector & Stack",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_002_topic11_legacy_vector_and_stack_note.txt"})}),e.jsx(r,{note:"If you see 'Vector' or 'Stack' in a Java codebase, you are looking at code from 1996! Replace Vector with ArrayList and replace Stack with ArrayDeque immediately! — Sukanta Hui"})]})}export{x as default};
