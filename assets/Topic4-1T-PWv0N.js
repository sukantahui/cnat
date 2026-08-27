import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 4: Internal Buffer Mechanics: Initial Capacity (16) & Dynamic Growth Formula ((old * 2) + 2)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class BufferCapacityAndGrowthFormulaDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: StringBuilder BUFFER CAPACITY & GROWTH - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Initial default capacity is exactly 16 characters:\r
        StringBuilder sb = new StringBuilder();\r
        System.out.println(">>> 1. Initial State:");\r
        System.out.println("  Length   : " + sb.length());\r
        System.out.println("  Capacity : " + sb.capacity() + " (Default initial buffer size = 16)");\r
\r
        // 2. Filling 16 characters (Capacity remains 16):\r
        sb.append("1234567890123456");\r
        System.out.println("\\n>>> 2. After appending exactly 16 characters:");\r
        System.out.println("  Length   : " + sb.length());\r
        System.out.println("  Capacity : " + sb.capacity());\r
\r
        // 3. Appending 17th character triggers DYNAMIC GROWTH:\r
        sb.append("X");\r
        System.out.println("\\n>>> 3. After appending 17th character (Dynamic Resizing Triggered!):");\r
        System.out.println("  Length   : " + sb.length());\r
        System.out.println("  Capacity : " + sb.capacity() + " (Calculated via formula: (16 * 2) + 2 = 34!)");\r
\r
        System.out.println("\\n>>> THE DYNAMIC GROWTH FORMULA:");\r
        System.out.println("  newCapacity = (oldCapacity * 2) + 2;");\r
        System.out.println("  - Old Capacity 16 -> Grows to (16 * 2) + 2 = 34");\r
        System.out.println("  - Old Capacity 34 -> Grows to (34 * 2) + 2 = 70");\r
        System.out.println("  - Old Capacity 70 -> Grows to (70 * 2) + 2 = 142");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 4: Buffer Capacity & Growth Formula\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BUFFER CAPACITY ESSENTIALS:\r
   - Default capacity = 16.\r
   - Growth formula: 'newCapacity = (oldCapacity * 2) + 2'.\r
   - If initial string provided ('new StringBuilder("hello")'): capacity = 16 + length.\r
   - Best Practice: Pre-allocate capacity if estimated size is known.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the initial default capacity of a StringBuilder, and what mathematical formula does the JVM use when dynamic resizing occurs?",shortAnswer:"The initial default capacity is 16 characters. When the buffer overflows, the JVM calculates new capacity using: 'newCapacity = (oldCapacity * 2) + 2'. For example, from 16 it grows to 34, then 70, then 142.",explanation:"You can specify an initial capacity with 'new StringBuilder(100)' to prevent expensive array reallocation copies.",hint:"Initial capacity is 16; growth formula is '(oldCapacity * 2) + 2'.",level:"Intermediate",codeExample:"StringBuilder sb = new StringBuilder(1024); // Pre-allocate buffer"}];function f(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 4"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Buffer Growth Formula"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Internal Buffer Mechanics: Initial Capacity (16) & Growth Formula ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"(old * 2) + 2"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace internal buffer mechanics: default 16-character allocations, dynamic array resizing, and why pre-sizing buffers eliminates memory copying overhead."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"BufferCapacityAndGrowthFormulaDemo.java",highlightLines:[7,15,17,21,27,30,31]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Buffer Growth FAQs",questions:l})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:o,title:"Module 003_002 Topic 4: Buffer Growth Formula",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic4_buffer_growth_note.txt"})}),t.jsx(n,{note:"If you know your string is going to be 500 characters long, initialize it as 'new StringBuilder(500)'! That stops Java from constantly resizing and copying the internal array 6 times. — Sukanta Hui"})]})}export{f as default};
