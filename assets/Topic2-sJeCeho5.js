import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 009_001: Lambda Expressions & Lexical Scoping\r
 * Topic 2: Lambda Syntax Variations: Type Inference, Single-Param & Single-Expression Shortcuts\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.function.BinaryOperator;\r
import java.util.function.Function;\r
import java.util.function.Supplier;\r
\r
public class LambdaSyntaxVariationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: LAMBDA SYNTAX VARIATIONS & COMPACT FORMS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Full Explicit Form (Parameter types + Curly Braces + Return keyword):\r
        BinaryOperator<Integer> addFull = (Integer a, Integer b) -> {\r
            return a + b;\r
        };\r
\r
        // 2. Type Inference Form (Compiler infers Integer types from BinaryOperator):\r
        BinaryOperator<Integer> addInferred = (a, b) -> a + b; // Omits types, braces & return!\r
\r
        // 3. Single Parameter Form (Parentheses around single parameter CAN BE OMITTED!):\r
        Function<String, Integer> stringLength = str -> str.length(); // 'str' instead of '(str)'\r
\r
        // 4. Zero Parameter Form (Empty parentheses '()' ARE MANDATORY!):\r
        Supplier<String> instituteGreeting = () -> "Welcome to Coder & AccoTax Barrackpore!";\r
\r
        System.out.println(">>> 1. Two-parameter inferred lambda  : " + addInferred.apply(15, 25));\r
        System.out.println(">>> 2. Single-parameter no-parentheses: " + stringLength.apply("Barrackpore"));\r
        System.out.println(">>> 3. Zero-parameter empty-brackets  : " + instituteGreeting.get());\r
\r
        System.out.println("\\n>>> THE 3 GOLDEN RULES OF LAMBDA SYNTAX SHORTCUTS:");\r
        System.out.println("  - Rule 1 (Types)       : If compiler can infer types, omit types for ALL parameters (cannot mix '(int a, b)').");\r
        System.out.println("  - Rule 2 (Parentheses) : Parentheses can be omitted ONLY if there is EXACTLY ONE parameter without explicit type.");\r
        System.out.println("  - Rule 3 (Return/Braces): If body is a SINGLE expression, curly braces AND 'return' keyword MUST be omitted together!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_001: Lambda Expressions & Lexical Scoping\r
Topic 2: Lambda Syntax Variations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LAMBDA SYNTAX RULES:\r
   - Type inference: '(a, b) → a + b' (Types omitted).\r
   - Single parameter: 'x → x * x' (Parentheses omitted).\r
   - Zero parameters: '() → "Hello"' (Empty parentheses mandatory).\r
   - Single expression: Omit curly braces AND 'return' keyword together.\r
   - Multi-statement: Curly braces and explicit 'return;' are mandatory.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the rules for omitting types, parentheses, curly braces, and the 'return' keyword in Java Lambda expressions?",shortAnswer:"1. 'Parameter Types': Can be omitted if the compiler can infer them from context (all must be omitted or all declared). 2. 'Parentheses': Can be omitted ONLY when there is exactly ONE inferred parameter (e.g. 'x → x * 2'). For zero ('() → ...') or multiple ('(a, b) → ...') parameters, parentheses are required. 3. 'Curly Braces & return': When the body is a single expression, curly braces and the 'return' keyword must be omitted together (e.g. '(a, b) → a + b'). If curly braces are used, 'return' and a semicolon are mandatory ('(a, b) → { return a + b; }').",explanation:"Comprehensive rule matrix for valid lambda expression syntax.",hint:"Single inferred param can omit parentheses; single expression must omit curly braces and return keyword together.",level:"Intermediate",codeExample:"x → x * 2; // Valid single-param single-expression shortcut"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_001 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Syntax Variations"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-purple-400 font-mono",children:"Lambda Syntax Variations"}),": Type Inference & Compact Expressions"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master compact functional notation: applying compiler type inference, omitting parentheses on single arguments, and constructing single-expression shortcuts without return boilerplate."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"LambdaSyntaxVariationsDemo.java",highlightLines:[7,10,15,16,17,20,21,23,24,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Syntax Variations FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 009_001 Topic 2: Syntax Variations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_001_topic2_lambda_syntax_variations_note.txt"})}),e.jsx(a,{note:"If your lambda is just 1 parameter and 1 calculation, you can strip away the types, parentheses, curly braces, and return keyword! '(Integer x) → { return x * 2; }' shrinks down to just 'x → x * 2'! Ultra clean! — Sukanta Hui"})]})}export{b as default};
