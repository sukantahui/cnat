import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 009_003: Method & Constructor References\r
 * Topic 1: The Double Colon (::) Operator Syntax & Token Mechanics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.function.Function;\r
\r
public class DoubleColonOperatorSyntaxDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE DOUBLE COLON (::) OPERATOR - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE DOUBLE COLON (::) OPERATOR GRAMMAR:");\r
        System.out.println("    TargetReference :: MethodNameOrKeyword");\r
        System.out.println("    [Class / Object]  [Separator]  [Method Name / 'new']");\r
        System.out.println();\r
\r
        // 1. Notice: NO PARENTHESES '()' AFTER THE METHOD NAME!\r
        // Incorrect: Integer::parseInt() -> COMPILE ERROR!\r
        // Correct  : Integer::parseInt\r
        Function<String, Integer> parser = Integer::parseInt;\r
\r
        int parsedGstRate = parser.apply("18");\r
        System.out.println(">>> 1. Parsed Integer value via Integer::parseInt: " + parsedGstRate + "%");\r
\r
        System.out.println("\\n>>> 3 KEY SYNTAX RULES OF THE :: OPERATOR:");\r
        System.out.println("  1. No Parentheses '()' : You are passing the METHOD AS BEHAVIOR, not invoking it immediately!");\r
        System.out.println("  2. No Arguments Passed : Arguments are inferred automatically by the target Functional Interface SAM.");\r
        System.out.println("  3. Special Keyword 'new': Used for constructor instantiation (e.g. 'ArrayList::new').");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_003: Method & Constructor References\r
Topic 1: Double Colon (::) Operator\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DOUBLE COLON (::) SYNTAX:\r
   - Format: 'TargetRef::MethodName'.\r
   - NEVER add parentheses '()' after the method name!\r
   - Arguments are routed implicitly by the compiler.\r
   - Use 'Target::new' for constructor references.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What are the core syntactic rules of Java's Double Colon ('::') operator?",shortAnswer:"1. 'Target::MethodName': Left side is the target class or object reference; right side is the method name or the 'new' keyword. 2. 'NO Parentheses ()': Parentheses must NEVER be written after the method name (e.g. 'Integer::parseInt', NOT 'Integer::parseInt()'), because you are referencing the method itself as a functional handle, not invoking it. 3. 'Implicit Argument Binding': The compiler automatically routes the functional interface's arguments to the referenced method based on matching types.",explanation:"Syntax grammar rules of Java 8 double colon operator (JLS §15.13).",hint:"Target::MethodName with NO parentheses and NO argument lists.",level:"Beginner",codeExample:"Function<String, Integer> f = Integer::parseInt; // No () allowed!"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_003 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Double Colon (::)"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Double Colon (::)"})," Operator Syntax & Token Mechanics"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the delimiter syntax: understanding ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Target::MethodName"})," grammar, avoiding trailing parentheses traps, and letting the compiler route SAM parameters."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"DoubleColonOperatorSyntaxDemo.java",highlightLines:[7,10,18,19,21,22,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Double Colon FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_003 Topic 1: Double Colon Operator",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_003_topic1_double_colon_operator_note.txt"})}),e.jsx(a,{note:"Common rookie mistake: typing 'Math::max()' with parentheses! Remember: parentheses mean you want to CALL the method right now; omitting parentheses with '::' means you are handing the method OVER to someone else to call later! — Sukanta Hui"})]})}export{g as default};
