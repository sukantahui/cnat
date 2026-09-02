import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 6: Load Factor (0.75f) & Threshold Calculation: Balancing Time vs Space\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.HashMap;\r
\r
public class HashMapLoadFactorThresholdDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: LOAD FACTOR (0.75f) & RESIZE THRESHOLD - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        HashMap<Integer, String> studentRegister = new HashMap<>(16, 0.75f);\r
\r
        Field thresholdField = HashMap.class.getDeclaredField("threshold");\r
        thresholdField.setAccessible(true);\r
\r
        Field tableField = HashMap.class.getDeclaredField("table");\r
        tableField.setAccessible(true);\r
\r
        // Add 12 elements (Capacity 16 * Load Factor 0.75 = Threshold 12):\r
        for (int i = 1; i <= 12; i++) {\r
            studentRegister.put(i, "Student #" + i);\r
        }\r
\r
        Object[] tableBefore = (Object[]) tableField.get(studentRegister);\r
        int thresholdBefore = (int) thresholdField.get(studentRegister);\r
\r
        System.out.println(">>> 1. State at 12 Elements (At Threshold Boundary):");\r
        System.out.println("  Map Size          : " + studentRegister.size());\r
        System.out.println("  Table Capacity    : " + tableBefore.length);\r
        System.out.println("  Resize Threshold  : " + thresholdBefore);\r
\r
        // Add 13th element -> Triggers immediate table doubling (Resizing to 32):\r
        studentRegister.put(13, "Student #13 (Triggers Resize!)");\r
\r
        Object[] tableAfter = (Object[]) tableField.get(studentRegister);\r
        int thresholdAfter = (int) thresholdField.get(studentRegister);\r
\r
        System.out.println("\\n>>> 2. State at 13 Elements (After Doubling):");\r
        System.out.println("  Map Size          : " + studentRegister.size());\r
        System.out.println("  New Table Capacity: " + tableAfter.length + " (Doubled from 16 -> 32!)");\r
        System.out.println("  New Threshold     : " + thresholdAfter + " (32 * 0.75 = 24)");\r
\r
        System.out.println("\\n>>> WHY 0.75f IS THE OPTIMAL DEFAULT LOAD FACTOR:");\r
        System.out.println("  - Load Factor = (Element Count / Table Capacity).");\r
        System.out.println("  - Higher Load Factor (e.g. 1.0) : Saves memory, but increases bucket collision frequency and lookup latency.");\r
        System.out.println("  - Lower Load Factor (e.g. 0.5)  : Reduces collisions, but wastes large amounts of unused heap array memory.");\r
        System.out.println("  - 0.75 is the mathematically proven sweet spot based on Poisson distribution probability.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 6: Load Factor & Threshold Calculation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOAD FACTOR & THRESHOLD:\r
   - Formula: 'threshold = capacity * loadFactor'.\r
   - Initial: 16 * 0.75 = 12.\r
   - At element 13: table capacity doubles from 16 to 32.\r
   - New threshold: 32 * 0.75 = 24.\r
   - 0.75 balance: Poisson distribution sweet spot for space vs time.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"How is the resizing 'threshold' calculated in a HashMap, and why is '0.75f' the default load factor?",shortAnswer:"The resize threshold is calculated as: 'threshold = capacity * loadFactor'. For a default capacity of 16 and load factor of 0.75, threshold is 12 (16 * 0.75). When the 13th element is inserted, HashMap automatically resizes (doubles capacity to 32). '0.75f' provides the optimal statistical balance between time cost (collision search latency) and space cost (unused empty buckets) according to Poisson distribution modeling.",explanation:"Core engineering decision behind Java's hash table architecture.",hint:"threshold = capacity * loadFactor (16 * 0.75 = 12). Resizes upon reaching 13 items.",level:"Intermediate",codeExample:"threshold = (int)(capacity * loadFactor); // 16 * 0.75 = 12"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Load Factor & Threshold"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Load Factor (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"0.75f"}),") & Threshold Calculation: Balancing Time vs Space"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace table growth triggers: calculating capacity thresholds (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"16 * 0.75 = 12"}),") and observing capacity doubling upon the 13th element insertion."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"HashMapLoadFactorThresholdDemo.java",highlightLines:[7,10,16,23,24,30,31,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Load Factor FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 007_005 Topic 6: Load Factor & Threshold",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic6_load_factor_threshold_note.txt"})}),e.jsx(n,{note:"Remember: 16 capacity with 0.75 load factor means the table resizes on the 13th element! Capacity doubles to 32, and the new threshold becomes 24! — Sukanta Hui"})]})}export{g as default};
