import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 12: Primitive Specializations: Eliminating Boxing Overhead (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.function.DoubleFunction;\r
import java.util.function.IntPredicate;\r
import java.util.function.IntUnaryOperator;\r
import java.util.function.LongConsumer;\r
import java.util.function.ToIntFunction;\r
\r
public class PrimitiveSpecializationsEliminatingBoxingCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: PRIMITIVE FUNCTIONAL SPECIALIZATIONS (CAPSTONE)");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. IntPredicate (boolean test(int value) -> ZERO BOXING TO java.lang.Integer!):\r
        IntPredicate isEvenScore = score -> score % 2 == 0;\r
        System.out.println(">>> 1. IntPredicate (score 84 is even?): " + isEvenScore.test(84));\r
\r
        // 2. DoubleFunction<R> (R apply(double value) -> Unboxed primitive input double):\r
        DoubleFunction<String> inrFormatter = amount -> String.format("₹%,.2f", amount);\r
        System.out.println(">>> 2. DoubleFunction (amount 75000.50): " + inrFormatter.apply(75000.50));\r
\r
        // 3. LongConsumer (void accept(long value) -> Unboxed primitive long side-effect):\r
        LongConsumer timestampAuditor = epoch -> System.out.println("  [Audit Epoch Log] " + epoch);\r
        System.out.print(">>> 3. LongConsumer in action: ");\r
        timestampAuditor.accept(System.currentTimeMillis());\r
\r
        // 4. ToIntFunction<T> (int applyAsInt(T value) -> Object to primitive int output):\r
        ToIntFunction<String> panLengthExtractor = pan -> pan.length();\r
        System.out.println(">>> 4. ToIntFunction (PAN length): " + panLengthExtractor.applyAsInt("ABCDE1234F"));\r
\r
        // 5. IntUnaryOperator (int applyAsInt(int operand) -> Pure primitive int transformation):\r
        IntUnaryOperator squareOperator = n -> n * n;\r
        System.out.println(">>> 5. IntUnaryOperator (12 squared): " + squareOperator.applyAsInt(12));\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" 🎉 MODULE 009_002 BUILT-IN FUNCTIONAL INTERFACES 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 12: Primitive Specializations Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 009_002 GRAND SUMMARY:\r
   - 43 Built-In Interfaces: Standardized taxonomy in 'java.util.function'.\r
   - The Big 4:\r
     1. Predicate<T>: 'T → boolean' (Filtering).\r
     2. Function<T, R>: 'T → R' (Mapping).\r
     3. Consumer<T>: 'T → void' (Side-effects).\r
     4. Supplier<T>: '() → T' (Lazy factory).\r
   - Chaining Methods:\r
     * Predicate: and(), or(), negate(), Predicate.isEqual().\r
     * Function: andThen() (Forward), compose() (Reverse), Function.identity().\r
     * Consumer: andThen().\r
   - Bi-Variants: BiPredicate<T, U>, BiFunction<T, U, R>, BiConsumer<T, U>.\r
   - Operators: UnaryOperator<T> (Function<T,T>), BinaryOperator<T> (BiFunction<T,T,T>).\r
   - Primitive Specializations: IntPredicate, DoubleFunction, ToIntFunction, IntUnaryOperator (Zero boxing!).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does Java provide 36 primitive specialized functional interfaces (like 'IntPredicate', 'DoubleFunction', and 'ToIntFunction') alongside generic interfaces?",shortAnswer:"Generic functional interfaces like 'Predicate<Integer>' or 'Function<Double, Double>' require Java to box and unbox primitive numbers into heap wrapper objects ('int' &harr; 'Integer', 'double' &harr; 'Double'). In high-throughput data processing (millions of records in streams), continuous auto-boxing generates millions of temporary heap garbage objects and triggers frequent GC pauses. Primitive specializations (e.g. 'IntPredicate', 'LongConsumer', 'DoubleFunction', 'ToIntFunction', 'IntUnaryOperator') operate directly on raw unboxed CPU registers, eliminating 100% of boxing allocations and dramatically boosting performance.",explanation:"Grand architectural capstone of Module 009_002.",hint:"Eliminates auto-boxing memory allocations and GC overhead when processing millions of numeric primitives.",level:"Advanced",codeExample:"IntPredicate p = x → x > 0; // boolean test(int) - 0 boxing overhead!"}];function h(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 12"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Primitive Specializations Capstone"})]}),n.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Primitive Specializations: Eliminating Boxing Overhead & High-Throughput Pipelines (Capstone)"}),n.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Synthesize high-performance functional programming: eliminating auto-boxing garbage collection pressure with ",n.jsx("code",{className:"text-emerald-300 font-mono",children:"IntPredicate"}),", ",n.jsx("code",{className:"text-sky-300 font-mono",children:"DoubleFunction"}),", ",n.jsx("code",{className:"text-purple-300 font-mono",children:"LongConsumer"}),", and ",n.jsx("code",{className:"text-amber-300 font-mono",children:"ToIntFunction"}),"."]})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:o,title:"PrimitiveSpecializationsEliminatingBoxingCapstoneDemo.java",highlightLines:[7,8,9,10,11,20,21,24,25,28,29,33,34,37,38]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{title:"Primitive Specializations FAQs",questions:s})}),n.jsx("section",{className:"space-y-4",children:n.jsx(i,{content:a,title:"Module 009_002 Topic 12: Primitive Specializations Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic12_primitive_specializations_capstone_note.txt"})}),n.jsx(r,{note:"Congratulations on completing Module 009_002! You have mastered the entire 43-interface landscape of java.util.function—from the Big 4 and two-argument Bi variants to operator specializations and zero-boxing primitive types! — Sukanta Hui"})]})}export{h as default};
