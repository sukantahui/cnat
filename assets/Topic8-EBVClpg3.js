import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 009_003: Method & Constructor References\r
 * Topic 8: How the Compiler Resolves Parameters in Unbound Instance Method References\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.function.BiFunction;\r
import java.util.function.BiPredicate;\r
\r
public class UnboundParameterResolutionMechanicsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: UNBOUND METHOD PARAMETER ROUTING MECHANICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Example 1: String.startsWith(prefix)\r
        // Method signature: boolean startsWith(String prefix) [Instance method on String]\r
        // Functional SAM: boolean test(String s1, String s2) [BiPredicate<String, String>]\r
        //\r
        // Compiler Resolution:\r
        // Parameter 1 ('s1') -> TARGET OBJECT (s1.)\r
        // Parameter 2 ('s2') -> METHOD ARGUMENT (.startsWith(s2))\r
        // Equivalent Lambda : (s1, s2) -> s1.startsWith(s2)\r
        BiPredicate<String, String> startsWithChecker = String::startsWith;\r
\r
        System.out.println(">>> 1. String::startsWith resolved as (s1, s2) -> s1.startsWith(s2):");\r
        System.out.println("  'Barrackpore'.startsWith('Bar')? " + startsWithChecker.test("Barrackpore", "Bar"));\r
\r
        // Example 2: String.indexOf(subString)\r
        // Method signature: int indexOf(String str)\r
        // Functional SAM: Integer apply(String str, String subStr) [BiFunction<String, String, Integer>]\r
        // Equivalent Lambda: (str, subStr) -> str.indexOf(subStr)\r
        BiFunction<String, String, Integer> indexFinder = String::indexOf;\r
\r
        System.out.println("\\n>>> 2. String::indexOf resolved as (s1, s2) -> s1.indexOf(s2):");\r
        System.out.println("  'AccoTax'.indexOf('Tax') = " + indexFinder.apply("AccoTax", "Tax"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_003: Method & Constructor References\r
Topic 8: Unbound Parameter Routing\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UNBOUND PARAMETER ROUTING:\r
   - Target Interface: '(Arg1, Arg2) → ReturnType'.\r
   - Referenced Method: 'Class1.method(Arg2)'.\r
   - Resolution Formula: 'Arg1.method(Arg2)'.\r
   - 'String::startsWith' = '(s1, s2) → s1.startsWith(s2)'.\r
   - 'String::indexOf'    = '(s1, s2) → s1.indexOf(s2)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does the Java compiler resolve two-parameter functional interfaces (like 'BiPredicate<String, String>') when assigned an unbound method reference ('String::startsWith')?",shortAnswer:"When an unbound instance method reference ('ClassName::method') is assigned to a multi-parameter functional interface SAM (e.g. 'BiPredicate<T, U>'), the compiler designates the FIRST parameter ('T') as the TARGET INSTANCE on which the method is invoked, and routes the remaining parameters ('U, ...') as the ARGUMENTS passed into that method. Thus, 'String::startsWith' is automatically transformed into '(s1, s2) → s1.startsWith(s2)'.",explanation:"Internal compiler routing mechanics for unbound instance method references.",hint:"First parameter becomes the invocation receiver object, and subsequent parameters become the method arguments.",level:"Advanced",codeExample:"BiPredicate<String, String> p = String::startsWith; // Equivalent: (s1, s2) → s1.startsWith(s2)"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_003 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Parameter Resolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Compiler Resolution in ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Unbound Method References"}),": Dual Parameter Routing"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect compiler dispatch mechanics: analyzing how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"String::startsWith"})," maps the first SAM argument to the invocation receiver and subsequent arguments to method parameters."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"UnboundParameterResolutionMechanicsDemo.java",highlightLines:[7,8,20,21,24,25,30,31,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Parameter Resolution FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 009_003 Topic 8: Parameter Resolution",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_003_topic8_parameter_resolution_note.txt"})}),e.jsx(s,{note:"When you write 'BiPredicate<String, String> p = String::startsWith', Java is smart: it takes the first String as the caller ('s1.') and the second String as the input argument ('.startsWith(s2)')! Elegant compiler magic! — Sukanta Hui"})]})}export{x as default};
