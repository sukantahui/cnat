import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 006_003: Bounded Type Parameters & Multiple Bounds\r
 * Topic 3: Accessing Bound Methods Inside Generic Method/Class Bodies\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.List;\r
\r
public class BoundMethodsDirectAccessDemo {\r
\r
    // Generic Method computing arithmetic average across ANY numeric collection:\r
    // '<T extends Number>' guarantees that every element has '.doubleValue()' method!\r
    public static <T extends Number> double calculateAverage(List<T> numbers) {\r
        if (numbers == null || numbers.isEmpty()) return 0.0;\r
        double sum = 0.0;\r
        for (T num : numbers) {\r
            sum += num.doubleValue(); // DIRECT ACCESS TO NUMBER METHOD WITHOUT CASTING!\r
        }\r
        return sum / numbers.size();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: DIRECT ACCESS TO BOUND METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> integerScores = List.of(90, 85, 95, 100);\r
        List<Double> doubleBalances = List.of(12500.50, 8400.25, 9900.00);\r
        List<Long> longTimestamps = List.of(1000L, 2000L, 3000L, 4000L);\r
\r
        System.out.println(">>> 1. Computing Averages Across Diverse Numeric Types:");\r
        System.out.printf("  Integer Scores Average : %.2f%n", calculateAverage(integerScores));\r
        System.out.printf("  Double Balances Average: ₹%.2f%n", calculateAverage(doubleBalances));\r
        System.out.printf("  Long Timestamps Average: %.2f%n", calculateAverage(longTimestamps));\r
\r
        System.out.println("\\n>>> HOW TYPE ERASURE ENABLES DIRECT BOUND METHOD ACCESS:");\r
        System.out.println("  1. During compilation, the compiler replaces '<T extends Number>' with the bounding type 'Number'.");\r
        System.out.println("  2. Bytecode generated directly calls 'invokevirtual Number.doubleValue()'.");\r
        System.out.println("  3. No reflection or runtime overhead involved!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_003: Bounded Type Parameters & Multiple Bounds\r
Topic 3: Accessing Bound Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BOUND METHOD INVOCATION:\r
   - '<T extends Number>' unlocks 'doubleValue()', 'intValue()', etc.\r
   - Replaced with bounding type during type erasure.\r
   - Zero runtime overhead, clean native bytecode.\r
   - Eliminates tedious manual casting.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How does the Java compiler translate generic calls like 'num.doubleValue()' when 'T' is bounded to '<T extends Number>'?",shortAnswer:"During type erasure, the compiler erases 'T' and replaces it with its first upper bound ('Number'). It generates standard, highly-optimized bytecode invoking 'invokevirtual Number.doubleValue()'. This gives you the full convenience of calling Number methods directly without reflection or runtime casting overhead.",explanation:"Standard bytecode translation mechanism for bounded generics.",hint:"Replaces T with Number during type erasure, generating direct invokevirtual bytecode.",level:"Intermediate",codeExample:"for (T num : list) sum += num.doubleValue(); // Erased to ((Number) num).doubleValue()"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_003 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Bound Member Access"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Accessing Bound Methods: Calling Supertype APIs Directly"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Leverage supertype member APIs: invoking bound methods like ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Number.doubleValue()"})," inside generic method bodies without manual casting."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"BoundMethodsDirectAccessDemo.java",highlightLines:[7,10,13,14,15,16,17,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Bound Methods FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 006_003 Topic 3: Bound Methods Direct Access",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_003_topic3_bound_methods_direct_access_note.txt"})}),e.jsx(s,{note:"When you write '<T extends Number>', you get instant access to all of Number's methods like doubleValue() or longValue()! No casts needed, and it works seamlessly on Integers, Floats, and Doubles! — Sukanta Hui"})]})}export{h as default};
