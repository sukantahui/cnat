import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 9: Deque Method Suite: offerFirst/Last, pollFirst/Last & peekFirst/Last Matrix\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayDeque;\r
import java.util.Deque;\r
\r
public class DequeMethodSuiteMatrixDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: Deque COMPLETE METHOD MATRIX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Deque<String> deque = new ArrayDeque<>();\r
\r
        // 1. Safe Special-Value Additions (offerFirst & offerLast):\r
        deque.offerFirst("Swadeep (Head)");\r
        deque.offerLast("Tuhina (Tail)");\r
        deque.offerFirst("Abhronila (New Head)");\r
\r
        System.out.println(">>> 1. Ingestion via offerFirst & offerLast:");\r
        System.out.println("  Deque Elements: " + deque);\r
\r
        // 2. Safe Inspection (peekFirst & peekLast):\r
        System.out.println("\\n>>> 2. Inspection (peekFirst & peekLast):");\r
        System.out.println("  peekFirst() : " + deque.peekFirst());\r
        System.out.println("  peekLast()  : " + deque.peekLast());\r
\r
        // 3. Safe Extraction (pollFirst & pollLast):\r
        System.out.println("\\n>>> 3. Extraction (pollFirst & pollLast):");\r
        System.out.println("  pollFirst() : " + deque.pollFirst() + " (Extracted Head)");\r
        System.out.println("  pollLast()  : " + deque.pollLast() + " (Extracted Tail)");\r
        System.out.println("  Remaining   : " + deque);\r
\r
        System.out.println("\\n>>> THE COMPLETE DEQUE METHOD MATRIX (12 CORE METHODS):");\r
        System.out.println("+-------------------+---------------------------+---------------------------+");\r
        System.out.println("| Position & Action | Throws Exception on Fail  | Returns Special Value     |");\r
        System.out.println("+-------------------+---------------------------+---------------------------+");\r
        System.out.println("| Insert at Head    | addFirst(e) / push(e)     | offerFirst(e) -> false    |");\r
        System.out.println("| Insert at Tail    | addLast(e) / add(e)       | offerLast(e) -> false     |");\r
        System.out.println("| Remove from Head  | removeFirst() / pop()     | pollFirst() -> null       |");\r
        System.out.println("| Remove from Tail  | removeLast()              | pollLast() -> null        |");\r
        System.out.println("| Examine Head      | getFirst() / element()    | peekFirst() -> null       |");\r
        System.out.println("| Examine Tail      | getLast()                 | peekLast() -> null        |");\r
        System.out.println("+-------------------+---------------------------+---------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 9: Deque Method Matrix\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DEQUE 12-METHOD MATRIX:\r
   - Head: addFirst/offerFirst, removeFirst/pollFirst, getFirst/peekFirst.\r
   - Tail: addLast/offerLast, removeLast/pollLast, getLast/peekLast.\r
   - Stack methods: 'push()' = addFirst, 'pop()' = removeFirst.\r
   - Special-value methods return false/null on bounds violations.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Summarize the 12 core methods of the 'java.util.Deque' interface organized by head/tail position and error handling strategy.",shortAnswer:"1. 'Head Operations': Exception: 'addFirst(e)', 'removeFirst()', 'getFirst()'. Special Value: 'offerFirst(e)', 'pollFirst()', 'peekFirst()'. 2. 'Tail Operations': Exception: 'addLast(e)', 'removeLast()', 'getLast()'. Special Value: 'offerLast(e)', 'pollLast()', 'peekLast()'. Stack equivalents 'push/pop' map to 'addFirst/removeFirst'.",explanation:"Complete 12-method matrix of java.util.Deque.",hint:"6 methods for Head (add/remove/get vs offer/poll/peek) and 6 matching methods for Tail.",level:"Intermediate",codeExample:'dq.offerFirst("H"); dq.offerLast("T"); String h = dq.pollFirst(); String t = dq.pollLast();'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"12-Method Matrix"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Deque Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"offerFirst()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"pollLast()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"peekFirst()"})," Matrix"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the complete 12-method Deque matrix: comparing head and tail manipulation APIs across exception-throwing and safe special-value failure modes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"DequeMethodSuiteMatrixDemo.java",highlightLines:[7,10,16,17,18,23,24,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Deque Matrix FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 007_004 Topic 9: Deque Method Matrix",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic9_deque_method_matrix_note.txt"})}),e.jsx(n,{note:"Memorizing the 12 Deque methods is easy! Just remember 3 verbs (add/offer, remove/poll, get/peek) and attach either 'First' or 'Last' to each! That covers all 12 combinations! — Sukanta Hui"})]})}export{h as default};
