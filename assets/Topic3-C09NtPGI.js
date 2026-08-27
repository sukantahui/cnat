import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 007_002: List Implementations & ArrayList Internals\r
 * Topic 3: How ArrayList Expands: Memory Allocation & System.arraycopy() Mechanics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Arrays;\r
\r
public class ArrayListExpansionArrayCopyDemo {\r
\r
    // Simulating manual ArrayList growth using Arrays.copyOf & System.arraycopy:\r
    public static class CustomMiniArrayList<E> {\r
        private Object[] data;\r
        private int size = 0;\r
\r
        public CustomMiniArrayList() {\r
            this.data = new Object[4]; // Small initial capacity for demonstration\r
        }\r
\r
        public void add(E element) {\r
            if (size == data.length) {\r
                grow();\r
            }\r
            data[size++] = element;\r
        }\r
\r
        private void grow() {\r
            int oldCapacity = data.length;\r
            int newCapacity = oldCapacity + (oldCapacity >> 1); // 1.5x\r
            System.out.printf("  [EXPANSION TRIGGERED] Allocating new array (Capacity: %d -> %d)...%n", oldCapacity, newCapacity);\r
\r
            // High-speed native memory block copy:\r
            data = Arrays.copyOf(data, newCapacity);\r
        }\r
\r
        public int size() { return size; }\r
        public int capacity() { return data.length; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: HOW ArrayList EXPANDS (System.arraycopy) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CustomMiniArrayList<String> list = new CustomMiniArrayList<>();\r
        System.out.println(">>> 1. Adding Elements and Observing Expansion Points:");\r
\r
        list.add("Swadeep Paul (Barrackpore)");\r
        list.add("Tuhina Das (Naihati)");\r
        list.add("Abhronila Das (Shyamnagar)");\r
        list.add("Debangshu Mukherjee (Ichapur)");\r
        System.out.printf("  Status: Size=%d, Capacity=%d (Buffer Full!)%n", list.size(), list.capacity());\r
\r
        // Adding 5th element triggers grow():\r
        list.add("Student 5 (New Admission)");\r
        System.out.printf("  Status: Size=%d, Capacity=%d (Expanded successfully!)%n", list.size(), list.capacity());\r
\r
        System.out.println("\\n>>> HOW System.arraycopy() ACHIEVES BLAZING SPEED:");\r
        System.out.println("  1. Native C/C++ Implementation: 'System.arraycopy()' is a JVM native intrinsic method.");\r
        System.out.println("  2. Direct SIMD Memory Transfers: Uses CPU vector instructions ('memmove') to transfer memory blocks in parallel.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_002: List Implementations & ArrayList Internals\r
Topic 3: ArrayList Expansion Mechanics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EXPANSION MECHANICS:\r
   - Triggered when 'size == data.length'.\r
   - Allocates new array with 'newCapacity'.\r
   - 'Arrays.copyOf()' delegates to 'System.arraycopy()'.\r
   - Native intrinsic uses SIMD/memmove for parallel memory copy.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does 'System.arraycopy()' make ArrayList memory reallocation fast enough for production performance?",shortAnswer:"'System.arraycopy()' is a JVM native intrinsic method implemented directly in C/assembly. Rather than iterating through elements one-by-one in Java bytecode, it delegates directly to hardware memory transfer primitives (such as 'memmove' and SIMD vector registers), copying entire blocks of memory in parallel at raw bus speed.",explanation:"JVM intrinsic optimization fundamental to all array-based Java collections.",hint:"It is a native JVM intrinsic calling low-level C memmove for direct block memory transfers.",level:"Intermediate",codeExample:"System.arraycopy(src, 0, dest, 0, length); // Native SIMD block copy"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_002 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Expansion & ArrayCopy"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["How ArrayList Expands: Memory Allocation & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"System.arraycopy()"})," Mechanics"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace low-level memory transfers: observing how ArrayList expands its backing array using native ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"System.arraycopy()"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Arrays.copyOf()"})," intrinsics."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ArrayListExpansionArrayCopyDemo.java",highlightLines:[7,10,18,19,24,25,29,39,46]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Expansion FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 007_002 Topic 3: ArrayList Expansion",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_002_topic3_arraylist_expansion_note.txt"})}),e.jsx(n,{note:"'System.arraycopy()' is not written in Java—it is written in pure assembly/C! It moves memory blocks using CPU hardware acceleration, which is why resizing an ArrayList takes only a fraction of a millisecond! — Sukanta Hui"})]})}export{h as default};
