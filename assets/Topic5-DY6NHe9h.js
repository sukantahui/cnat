import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 5: Capacity Rules: Default Initial Capacity (16) & Power of Two Mandate\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.HashMap;\r
\r
public class HashMapCapacityPowerOfTwoDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: HashMap CAPACITY & POWER OF TWO MANDATE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Requesting non-power-of-two capacity (e.g. 10):\r
        HashMap<Integer, String> customMap = new HashMap<>(10);\r
        customMap.put(1, "Test Entry"); // Triggers table allocation\r
\r
        Field tableField = HashMap.class.getDeclaredField("table");\r
        tableField.setAccessible(true);\r
        Object[] table = (Object[]) tableField.get(customMap);\r
\r
        System.out.println(">>> 1. Capacity Rounding (tableSizeFor()):");\r
        System.out.println("  Requested Capacity : 10");\r
        System.out.println("  Actual Table Length: " + table.length + " (Rounded up to nearest power of 2: 16!)");\r
\r
        System.out.println("\\n>>> WHY CAPACITY MUST ALWAYS BE A POWER OF 2 (2^n):");\r
        System.out.println("  1. If capacity is a power of 2 (e.g., 16 = 0001 0000 in binary):");\r
        System.out.println("     - '(capacity - 1)' becomes a clean bitmask of all 1s (15 = 0000 1111).");\r
        System.out.println("  2. This allows index calculation: 'index = (n - 1) & hash'!");\r
        System.out.println("  3. Bitwise AND '&' executes in 1 CPU clock cycle, whereas modulo '%' takes 20-40 CPU cycles!");\r
        System.out.println("  4. If capacity is NOT a power of 2, bitmasking fails and uneven bucket distribution causes severe collisions.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 5: Capacity & Power of Two Mandate\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CAPACITY RULES:\r
   - Default: 16 ('1 << 4').\r
   - Max: 2^30 ('1 << 30').\r
   - Any custom capacity is rounded up to next power of 2 via 'tableSizeFor()'.\r
   - Mandatory for bitwise index formula: '(n - 1) & hash'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,r=[{question:"Why MUST the internal table capacity of a 'HashMap' always be a power of two (e.g. 16, 32, 64)?",shortAnswer:"Because when capacity 'n' is a power of two (2^k), '(n - 1)' is a bitmask consisting entirely of 1s in the lower bits (e.g. 16 - 1 = 15 = binary 1111). This allows the JVM to compute bucket indices using the ultra-fast bitwise AND operation '(n - 1) & hash' instead of the slow arithmetic modulo operator 'hash % n'. Bitwise AND executes in a single CPU cycle, dramatically speeding up lookups.",explanation:"Foundational performance optimization in Java HashMap design.",hint:"Allows fast bitwise AND '(n - 1) & hash' which requires n to be a power of 2.",level:"Intermediate",codeExample:"int index = (table.length - 1) & hash; // Requires length to be 2^k"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Power of Two"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Capacity Rules: Default Initial Capacity (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"16"}),") & Power of Two Mandate"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Uncover bitwise hardware acceleration: discovering why HashMap automatically rounds capacities to powers of two (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"tableSizeFor"}),") to enable single-cycle bitmask indexing."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"HashMapCapacityPowerOfTwoDemo.java",highlightLines:[7,10,16,17,21,22,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Capacity Rules FAQs",questions:r})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 007_005 Topic 5: Capacity & Power of Two",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic5_capacity_power_of_two_note.txt"})}),e.jsx(o,{note:"If you pass 10 to 'new HashMap<>(10)', Java secretly rounds it up to 16! If you pass 20, it rounds it to 32! Capacity is ALWAYS a power of 2 so Java can use bitwise AND instead of slow division! — Sukanta Hui"})]})}export{y as default};
