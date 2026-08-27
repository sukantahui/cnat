import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 11: Untreeification: UNTREEIFY_THRESHOLD (6) & Memory Reclamation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class HashMapUntreeificationThresholdDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: UNTREEIFICATION THRESHOLD (6) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE HYSTERESIS BUFFER (TREEIFY 8 vs UNTREEIFY 6):");\r
        System.out.println("  1. Treeification Threshold  : 8 (Converts Linked List -> Red-Black Tree)");\r
        System.out.println("  2. Untreeification Threshold: 6 (Converts Red-Black Tree -> Linked List upon deletions / resizing)");\r
        System.out.println();\r
        System.out.println(">>> WHY UNTREEIFY_THRESHOLD IS 6 (AND NOT 7 OR 8):");\r
        System.out.println("  - Imagine if Treeify was 8 and Untreeify was 7:");\r
        System.out.println("  - Adding an 8th element would convert list -> tree.");\r
        System.out.println("  - Deleting 1 element would convert tree -> list.");\r
        System.out.println("  - Repeated add/remove in a tight loop would cause violent 'Thrashing' (constant tree rebuilding)!");\r
        System.out.println("  - The gap of 2 (8 vs 6) acts as a mathematical Hysteresis Damping Buffer to prevent thrashing.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 11: Untreeification Threshold (6)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UNTREEIFICATION:\r
   - 'UNTREEIFY_THRESHOLD = 6'.\r
   - Occurs during deletions ('remove()') or table resizing split.\r
   - Hysteresis gap (8 vs 6) prevents representation thrashing.\r
   - Converts 'TreeNode<K,V>' back into lightweight 'Node<K,V>'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is 'UNTREEIFY_THRESHOLD' set to 6 instead of 7 or 8 in HashMap?",shortAnswer:"To prevent 'tree thrashing' (rapid oscillation between list and tree representation). If untreeification occurred at 7 or 8, adding and removing a single element in a tight loop would force the JVM to continuously convert nodes between 'Node' and 'TreeNode', causing severe CPU overhead. Setting the untreeify threshold to 6 introduces a 'hysteresis gap' of 2, stabilizing performance.",explanation:"Classic engineering concept of hysteresis applied to algorithmic data structures.",hint:"Prevents thrashing (rapid conversion oscillation) when adding/removing elements near the threshold.",level:"Advanced",codeExample:"static final int TREEIFY_THRESHOLD = 8; static final int UNTREEIFY_THRESHOLD = 6;"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Untreeification & Hysteresis"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Untreeification: ",e.jsx("code",{className:"text-amber-400 font-mono",children:"UNTREEIFY_THRESHOLD (6)"})," & Hysteresis Stabilization"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand algorithmic hysteresis: exploring why HashMap requires a 2-element gap between treeification (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"8"}),") and untreeification (",e.jsx("code",{className:"text-amber-300 font-mono",children:"6"}),") to eliminate thrashing."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"HashMapUntreeificationThresholdDemo.java",highlightLines:[7,10,13,14,15,18,19,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Untreeification FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 007_005 Topic 11: Untreeification Threshold",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic11_untreeification_threshold_note.txt"})}),e.jsx(a,{note:"In electronics and computer science, 'hysteresis' means leaving a buffer zone to prevent rapid toggling! The gap between 8 and 6 ensures Java doesn't convert a tree to a list and back to a tree on every single add and remove! — Sukanta Hui"})]})}export{g as default};
