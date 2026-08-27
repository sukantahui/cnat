import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 8: Function Chaining: andThen(), compose(), and Function.identity()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.function.Function;\r
\r
public class FunctionCompositionAndThenComposeDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: Function COMPOSITION (andThen vs compose) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Function<Integer, Integer> multiplyByTwo = x -> {\r
            System.out.print(" [x * 2] -> ");\r
            return x * 2;\r
        };\r
\r
        Function<Integer, Integer> addTen = x -> {\r
            System.out.print(" [x + 10] -> ");\r
            return x + 10;\r
        };\r
\r
        int input = 5;\r
\r
        // 1. andThen(): FORWARD PIPELINE (Left to Right -> multiplyByTwo FIRST, THEN addTen):\r
        // Formula: addTen(multiplyByTwo(5)) -> (5 * 2) + 10 = 10 + 10 = 20\r
        System.out.println(">>> 1. Executing f1.andThen(f2) on input 5 (Forward):");\r
        Function<Integer, Integer> forwardPipe = multiplyByTwo.andThen(addTen);\r
        int forwardResult = forwardPipe.apply(input);\r
        System.out.println("RESULT = " + forwardResult);\r
\r
        // 2. compose(): REVERSE PIPELINE (Right to Left -> addTen FIRST, THEN multiplyByTwo):\r
        // Formula: multiplyByTwo(addTen(5)) -> (5 + 10) * 2 = 15 * 2 = 30\r
        System.out.println("\\n>>> 2. Executing f1.compose(f2) on input 5 (Reverse):");\r
        Function<Integer, Integer> reversePipe = multiplyByTwo.compose(addTen);\r
        int reverseResult = reversePipe.apply(input);\r
        System.out.println("RESULT = " + reverseResult);\r
\r
        // 3. Function.identity(): Identity function that returns its input unchanged (t -> t):\r
        Function<String, String> identityFunc = Function.identity();\r
        System.out.println("\\n>>> 3. Function.identity("Barrackpore") = " + identityFunc.apply("Barrackpore"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 8: Function Chaining (andThen vs compose)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FUNCTION COMPOSITION:\r
   - 'f1.andThen(f2)': Runs f1 FIRST, then f2 -> 'f2(f1(x))'.\r
   - 'f1.compose(f2)': Runs f2 FIRST, then f1 -> 'f1(f2(x))'.\r
   - 'Function.identity()': Returns input unchanged ('x -> x').\r
   - Used extensively in Stream transformations and data parsing.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the critical difference between 'Function.andThen()' and 'Function.compose()' in Java, and what is 'Function.identity()'?",shortAnswer:"1. 'f1.andThen(f2)': Executes in FORWARD order (Left-to-Right). It runs f1 first, then passes the result into f2 ('f2(f1(x))'). 2. 'f1.compose(f2)': Executes in REVERSE/MATHEMATICAL order (Right-to-Left). It runs the argument f2 first, then passes its result into f1 ('f1(f2(x))'). 3. 'Function.identity()': A static helper returning a function that always returns its input unchanged ('t -> t'), commonly used in 'Collectors.toMap()' key/value mappings.",explanation:"Deep comparison between forward and reverse function composition in Java 8.",hint:"andThen runs caller first then argument; compose runs argument first then caller; identity returns input unchanged.",level:"Intermediate",codeExample:"f1.andThen(f2).apply(x); // f2(f1(x)) | f1.compose(f2).apply(x); // f1(f2(x))"}];function x(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 8"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Function Chaining"})]}),n.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[n.jsx("code",{className:"text-emerald-400 font-mono",children:"Function"})," Chaining: ",n.jsx("code",{className:"text-sky-400 font-mono",children:"andThen()"})," vs ",n.jsx("code",{className:"text-purple-400 font-mono",children:"compose()"})," & ",n.jsx("code",{className:"text-amber-400 font-mono",children:"identity()"})]}),n.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct mathematical transformation pipelines: contrasting left-to-right ",n.jsx("code",{className:"text-sky-300 font-mono",children:"andThen()"})," forwarding with right-to-left ",n.jsx("code",{className:"text-purple-300 font-mono",children:"compose()"})," nesting, and applying the ",n.jsx("code",{className:"text-amber-300 font-mono",children:"Function.identity()"})," helper."]})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:i,title:"FunctionCompositionAndThenComposeDemo.java",highlightLines:[7,10,14,19,25,26,32,33,37,38]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{title:"Function Chaining FAQs",questions:s})}),n.jsx("section",{className:"space-y-4",children:n.jsx(r,{content:a,title:"Module 009_002 Topic 8: Function Chaining",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic8_function_chaining_note.txt"})}),n.jsx(o,{note:"Remember the golden rule: andThen() means 'do THIS, and then do THAT' (Left to Right). compose() is the mathematical reverse: 'compose THIS after THAT' (Right to Left)! When in doubt, andThen() is almost always what you want! — Sukanta Hui"})]})}export{x as default};
