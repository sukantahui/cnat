import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 10: Two-Argument (Bi) Variants: BiPredicate, BiFunction & BiConsumer\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.HashMap;\r
import java.util.Map;\r
import java.util.function.BiConsumer;\r
import java.util.function.BiFunction;\r
import java.util.function.BiPredicate;\r
\r
public class TwoArgumentBiVariantsDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: TWO-ARGUMENT (BI) VARIANTS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. BiPredicate<T, U>: boolean test(T t, U u) -> Tests TWO inputs\r
        BiPredicate<String, Integer> isEligibleStudent = (course, age) -> course.startsWith("Adv") && age >= 18;\r
        System.out.println(">>> 1. BiPredicate (AdvJava, 21): " + isEligibleStudent.test("AdvJava", 21));\r
\r
        // 2. BiFunction<T, U, R>: R apply(T t, U u) -> Maps TWO inputs to ONE output\r
        BiFunction<Double, Double, Double> calculateTotalWithGst = (basePrice, gstRate) -> basePrice + (basePrice * gstRate / 100.0);\r
        System.out.printf(">>> 2. BiFunction (₹10,000 + 18%% GST) : ₹%,.2f%n", calculateTotalWithGst.apply(10000.0, 18.0));\r
\r
        // 3. BiConsumer<T, U>: void accept(T t, U u) -> Consumes TWO inputs (Powers Map.forEach!)\r
        BiConsumer<String, Integer> mapEntryPrinter = (student, score) -> {\r
            System.out.printf("  [Result Ledger] Student: %-15s | Score: %d/100%n", student, score);\r
        };\r
\r
        Map<String, Integer> scoreMap = new HashMap<>();\r
        scoreMap.put("Swadeep Paul", 95);\r
        scoreMap.put("Tuhina Das", 98);\r
        scoreMap.put("Abhronila Das", 91);\r
\r
        System.out.println("\\n>>> 3. BiConsumer in action with Map.forEach(BiConsumer):");\r
        scoreMap.forEach(mapEntryPrinter); // Map.forEach takes BiConsumer<K, V>!\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 10: Two-Argument (Bi) Variants\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TWO-ARGUMENT (BI) VARIANTS:\r
   - 'BiPredicate<T, U>': 'boolean test(T, U)' (2 inputs → boolean).\r
   - 'BiFunction<T, U, R>': 'R apply(T, U)' (2 inputs → R output).\r
   - 'BiConsumer<T, U>': 'void accept(T, U)' (2 inputs → void).\r
   - Why NO BiSupplier? Supplier takes 0 arguments by definition!\r
   - Key usage: 'Map.forEach(BiConsumer)' and 'Map.compute(BiFunction)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are the two-argument (Bi) functional interface variants in Java and what are their SAM methods?",shortAnswer:"1. 'BiPredicate<T, U>': 'boolean test(T t, U u)' – Evaluates a condition over two inputs of types T and U, returning boolean. 2. 'BiFunction<T, U, R>': 'R apply(T t, U u)' – Accepts two arguments of types T and U, and produces a result of type R (powers 'Map.compute()', 'Map.replaceAll()'). 3. 'BiConsumer<T, U>': 'void accept(T t, U u)' – Accepts two arguments of types T and U and returns void (powers 'Map.forEach((k, v) → ...))'. Note: There is NO 'BiSupplier' because a supplier takes 0 arguments.",explanation:"Two-argument specialization hierarchy in java.util.function.",hint:"BiPredicate (2 inputs → boolean), BiFunction (2 inputs → 1 output R), BiConsumer (2 inputs → void).",level:"Intermediate",codeExample:'Map<K, V> map; map.forEach((k, v) → System.out.println(k + ": " + v)); // BiConsumer in action!'}];function B(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Bi Variants"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Two-Argument (Bi) Variants: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"BiPredicate"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"BiFunction"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"BiConsumer"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master two-parameter functional operations: evaluating dual inputs with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"BiPredicate"}),", computing transformations with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"BiFunction"}),", and iterating Map entries with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"BiConsumer"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"TwoArgumentBiVariantsDeepDiveDemo.java",highlightLines:[7,8,9,10,18,19,22,23,26,27,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Bi Variants FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 009_002 Topic 10: Bi Variants",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic10_bi_variants_note.txt"})}),e.jsx(r,{note:"Whenever you have two inputs instead of one, prefix the interface with 'Bi'! 'BiConsumer' is the secret engine powering 'map.forEach((k, v) → ...)' in all modern Java applications! — Sukanta Hui"})]})}export{B as default};
