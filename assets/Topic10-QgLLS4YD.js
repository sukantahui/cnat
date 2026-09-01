import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 009_003: Method & Constructor References\r
 * Topic 10: When NOT to Use Method References: Readability vs Over-Cleverness (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.List;\r
import java.util.function.Function;\r
\r
class ComplexTaxCalculation {\r
    public static double computeGstWithCustomCess(double amount, double rate, double cessRate) {\r
        return amount * (rate + cessRate) / 100.0;\r
    }\r
}\r
\r
public class WhenNotToUseMethodReferencesCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: WHEN NOT TO USE METHOD REFERENCES (CAPSTONE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 3 SCENARIOS WHERE EXPLICIT LAMBDAS ARE SUPERIOR TO METHOD REFERENCES:");\r
        System.out.println();\r
\r
        // 1. SCENARIO 1: Parameter Transformations or Constant Injections:\r
        // Lambda is CLEAR and INTUITIVE:\r
        Function<Double, Double> standardTaxWith18Percent = amt -> ComplexTaxCalculation.computeGstWithCustomCess(amt, 18.0, 4.0);\r
        System.out.printf(">>> 1. Parameter Injection (Lambda is clean): ₹%,.2f%n", standardTaxWith18Percent.apply(50000.0));\r
        // You CANNOT use a method reference here because '18.0' and '4.0' are constants injected into the call!\r
\r
        // 2. SCENARIO 2: Ambiguous Overloads:\r
        // If a class has 'doWork(int)' and 'doWork(Integer)', 'MyClass::doWork' causes ambiguity compiler errors.\r
        // Explicit lambda '(int x) -> doWork(x)' resolves ambiguity instantly.\r
\r
        // 3. SCENARIO 3: Clearer Intent for Juniors / Readability:\r
        // 's -> s.length() == 0' is often more immediately obvious than 'String::isEmpty' to beginners in complex boolean expressions.\r
\r
        System.out.println("\\n>>> THE GOLDEN RULE (Joshua Bloch, Effective Java):");\r
        System.out.println("  - 'Where a method reference is shorter and clearer, use it; where it is NOT shorter and clearer, stick with a lambda!'");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" 🎉 MODULE 009_003 METHOD & CONSTRUCTOR REFERENCES 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_003: Method & Constructor References\r
Topic 10: When NOT to Use Method References Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 009_003 GRAND SUMMARY:\r
   - Method References: Syntactic sugar for pure method forwarding.\r
   - Double Colon (::): 'Target::Method' (No parentheses!).\r
   - The 4 Kinds:\r
     1. Static: 'Math::max' (ClassName::staticMethod).\r
     2. Bound: 'System.out::println' (objRef::instanceMethod).\r
     3. Unbound: 'String::length' (ClassName::instanceMethod).\r
     4. Constructor: 'ArrayList::new', 'String[]::new' (ClassName::new).\r
   - Unbound Parameter Resolution: 1st argument = target receiver object.\r
   - Array Constructor: 'Stream.toArray(String[]::new)' ensures type safety.\r
   - When NOT to use: When injecting constants, modifying parameters, or resolving ambiguous overloads!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"When should a developer choose an explicit Lambda Expression over a Method Reference in Java?",shortAnswer:"1. 'Parameter Transformations / Constant Injections': When arguments passed to the method require calculations or fixed default values (e.g. 'amt → calcTax(amt, 18.0)'). 2. 'Overload Ambiguity': When the target class contains overloaded methods (e.g. 'print(int)' vs 'print(String)') that confuse the compiler unless parameter types are explicitly declared in a lambda. 3. 'Readability & Context': When parameter names provide critical domain clarity (e.g. '(sourceCurrency, targetCurrency) → ...') that would be lost with an opaque method reference.",explanation:"Grand architectural capstone of Module 009_003.",hint:"Use lambdas when injecting constants, transforming arguments, resolving overloaded method ambiguities, or improving domain readability.",level:"Advanced",codeExample:"// Lambda preferred: x → calculate(x, 10, true) // Cannot be done with method reference!"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_003 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Method References Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["When ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NOT to Use"})," Method References: Readability vs Over-Cleverness (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize idiomatic functional design: evaluating parameter injections, avoiding overloaded method ambiguity traps, and balancing method reference brevity with lambda expressiveness."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"WhenNotToUseMethodReferencesCapstoneDemo.java",highlightLines:[7,10,11,23,24,25,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Method References Capstone FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 009_003 Topic 10: Method References Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_003_topic10_when_not_to_use_method_references_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 009_003! You have mastered the entire spectrum of Method References and Constructor References—from the 4 foundational types and String[]::new array factories to parameter resolution and idiomatic refactoring! — Sukanta Hui"})]})}export{f as default};
