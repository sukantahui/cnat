import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 7: Key Hash Spreading: XOR Bit-Shift Function ((h = key.hashCode()) ^ (h >>> 16))\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class HashMapXorHashSpreadingDemo {\r
\r
    // Exact JDK HashMap Hash Spreading Function:\r
    static int hash(Object key) {\r
        int h;\r
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: HashMap XOR HASH SPREADING FUNCTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String studentKey = "Swadeep-Paul-Barrackpore";\r
        int rawHashCode = studentKey.hashCode();\r
        int spreadHash = hash(studentKey);\r
\r
        System.out.println(">>> 1. Raw HashCode vs Spread Hash:");\r
        System.out.printf("  Raw Key hashCode()      : %d [Binary: %32s]%n", rawHashCode, Integer.toBinaryString(rawHashCode));\r
        System.out.printf("  High Bits Shifted (>>>16): %d [Binary: %32s]%n", (rawHashCode >>> 16), Integer.toBinaryString(rawHashCode >>> 16));\r
        System.out.printf("  Spread Hash (Raw ^ >>>16): %d [Binary: %32s]%n", spreadHash, Integer.toBinaryString(spreadHash));\r
\r
        System.out.println("\\n>>> WHY JAVAC APPLIES '(h ^ (h >>> 16))':");\r
        System.out.println("  1. Table Length is small: When table length is 16, index is computed using ONLY the lowest 4 bits ('(16-1) & hash').");\r
        System.out.println("  2. High-Bit Waste Hazard : Without spreading, bits 16 to 31 would NEVER participate in index calculation!");\r
        System.out.println("  3. XOR Spreading Solution: Shifting right by 16 bits and XORing folds the high-order bits into the low-order bits.");\r
        System.out.println("  4. Massive Collision Reduction: Even if two keys differ only in their upper bits, their bucket indices will now differ!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 7: Hash Spreading Function\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HASH SPREADING FUNCTION:\r
   - '(h = key.hashCode()) ^ (h >>> 16)'.\r
   - Null key → hash is 0 (Bucket 0).\r
   - Folds upper 16 bits into lower 16 bits.\r
   - Prevents collisions for keys that differ only in high bits.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does 'HashMap' use the bit-shift XOR spreading function '((h = key.hashCode()) ^ (h >>> 16))' instead of using 'key.hashCode()' directly?",shortAnswer:"Because table capacities are typically small powers of two (e.g. 16, 32, 64), meaning bucket indexing '(n - 1) & hash' inspects only the lowest 4 to 6 bits of the 32-bit hash. If two distinct keys differ only in their upper 16 bits, they would collide in the exact same bucket. Shifting the upper 16 bits right ('h >>> 16') and XORing them with the lower 16 bits spreads the entropy of the upper bits into the lower bits, dramatically minimizing bucket collisions.",explanation:"Core bit-level engineering optimization in java.util.HashMap.",hint:"Folds high-order 16 bits into low-order 16 bits so high bits participate in small table bitmasking.",level:"Advanced",codeExample:"static final int hash(Object key) { int h; return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16); }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Hash Spreading"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Key Hash Spreading: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"(h ^ (h >>> 16))"})," Spreading Function"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master bitwise entropy distribution: analyzing how right-shifting by 16 bits and XORing incorporates high-order bits into low-order bucket bitmasks to prevent collisions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"HashMapXorHashSpreadingDemo.java",highlightLines:[7,10,11,12,13,20,21,22,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Hash Spreading FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:r,title:"Module 007_005 Topic 7: Hash Spreading Function",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic7_hash_spreading_function_note.txt"})}),e.jsx(a,{note:"Why '(h ^ (h >>> 16))'? Because when your table has only 16 buckets, Java only looks at the bottom 4 bits! If we didn't shift the top 16 bits down and XOR them, all the uniqueness in the top half of the hash code would be completely wasted! — Sukanta Hui"})]})}export{b as default};
