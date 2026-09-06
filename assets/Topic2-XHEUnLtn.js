import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 006_002: Generic Methods, Constructors & Type Inference\r
 * Topic 2: Type Parameter Placement: Compiler Symbol Resolution Order\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
public class TypeParameterPlacementSymbolDemo {\r
\r
    // Notice: <E> is declared BEFORE E[] and E:\r
    public static <E> E pickFirst(E[] array) {\r
        if (array == null || array.length == 0) return null;\r
        return array[0];\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: TYPE PARAMETER PLACEMENT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String[] branchNames = {"Barrackpore", "Naihati", "Shyamnagar", "Ichapur"};\r
        Integer[] rollNumbers = {101, 102, 103, 104};\r
\r
        String firstBranch = pickFirst(branchNames);\r
        Integer firstRoll = pickFirst(rollNumbers);\r
\r
        System.out.println(">>> 1. Pick First Element Results:");\r
        System.out.println("  First Branch : " + firstBranch);\r
        System.out.println("  First Roll   : " + firstRoll);\r
\r
        System.out.println("\\n>>> WHY COMPILERS REQUIRE <T> BEFORE RETURN TYPE:");\r
        System.out.println("  1. Symbol Declaration: The compiler reads left-to-right.");\r
        System.out.println("  2. When it encounters the return type 'E', it must already know that 'E' is a generic type parameter, not a missing class named 'E'!");\r
        System.out.println("  3. Placing '<E>' first registers the symbol into the compiler's symbol table for that method.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_002: Generic Methods, Constructors & Type Inference\r
Topic 2: Type Parameter Placement\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SYMBOL RESOLUTION ORDER:\r
   - Left-to-right compilation.\r
   - '<T>' registers generic type variable.\r
   - Allows return type to safely reference 'T'.\r
   - Allows parameter list to safely reference 'T'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does the Java compiler mandate that generic type parameters '<T>' precede the return type in method declarations?",shortAnswer:"Java compiler parses signatures strictly from left-to-right. If the return type uses 'T' (e.g. 'public T findItem()'), the compiler would fail to resolve 'T' and throw 'cannot find symbol: class T'. Declaring '<T>' immediately before the return type registers 'T' as a type variable in the compiler's symbol table before the return type is resolved.",explanation:"Compiler symbol table resolution requirement.",hint:"Registers the type variable in the compiler's symbol table before parsing the return type.",level:"Intermediate",codeExample:"public static <E> E getFirst(E[] arr) // <E> registers symbol for return type E"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_002 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Symbol Resolution"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Type Parameter Placement: Compiler Symbol Resolution Order"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand compiler symbol tables: discovering why type parameter declarations precede return types in left-to-right lexical analysis."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"TypeParameterPlacementSymbolDemo.java",highlightLines:[7,10,11,12,19,20,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Type Parameter Placement FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 006_002 Topic 2: Type Parameter Placement",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_002_topic2_type_parameter_placement_note.txt"})}),e.jsx(a,{note:"The Java compiler reads code like a book from left to right. By writing '<E>' before 'E pickFirst()', you introduce 'E' to the compiler so it doesn't get confused looking for a class named 'E'! — Sukanta Hui"})]})}export{b as default};
