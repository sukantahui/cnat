import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 012_005: Interview Mastery & Tricky MCQs\r
 * Topic 0: Tricky Riddle 1 - String Concatenation vs Arithmetic Precedence\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interview;\r
\r
public class TrickyRiddle1StringConcatenationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TRICKY RIDDLE 1: STRING CONCATENATION VS ARITHMETIC - BARRACKPORE");\r
        System.out.println(" EDUCATOR: SUKANTA HUI");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("Riddle A: System.out.println(10 + 20 + "Hello" + 10 + 20);");\r
        System.out.print("  Output -> ");\r
        System.out.println(10 + 20 + "Hello" + 10 + 20); // Produces "30Hello1020"\r
\r
        System.out.println("\r
Riddle B: System.out.println(10 + 20 + "Hello" + (10 + 20));");\r
        System.out.print("  Output -> ");\r
        System.out.println(10 + 20 + "Hello" + (10 + 20)); // Produces "30Hello30"\r
\r
        System.out.println("\r
Riddle C: System.out.println('A' + 'B' + "C");");\r
        System.out.print("  Output -> ");\r
        System.out.println('A' + 'B' + "C"); // 'A'=65, 'B'=66 -> 131 + "C" = "131C"\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_005: Interview Mastery & Tricky MCQs\r
Topic 0: Tricky Riddle 1 - String Concatenation vs Arithmetic\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EVALUATION RULES:\r
   - Evaluates strictly left-to-right.\r
   - If both operands are numbers: '+' performs arithmetic addition.\r
   - If either operand is a String: '+' performs string concatenation.\r
   - 'char + char' performs numeric integer addition of ASCII/Unicode values!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the exact output of System.out.println('1' + '2'); and why?",shortAnswer:"It prints '99'. In Java, characters are 16-bit unsigned integers; the ASCII code for '1' is 49 and '2' is 50, so binary operator + performs integer addition (49 + 50 = 99).",explanation:"Char promotion to int during arithmetic operations.",hint:"Characters are promoted to integers; '1'=49 and '2'=50.",level:"Beginner",codeExample:"System.out.println('1' + '2'); // 99"},{question:'What is the exact output of System.out.println("Output: " + 1 + 2 * 3);?',shortAnswer:`It prints 'Output: 16'. Multiplication (*) has higher operator precedence than addition (+), so 2 * 3 evaluates first to 6. Then left-to-right concatenation gives "Output: " + 1 = "Output: 1", followed by "Output: 1" + 6 = "Output: 16".`,explanation:"Operator precedence rules in Java expressions.",hint:"Multiplication executes before left-to-right string concatenation.",level:"Intermediate",codeExample:'System.out.println("Output: " + 1 + 2 * 3); // Output: 16'}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Interview Mastery & Tricky MCQs"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Tricky Riddle 1: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Concatenation vs Arithmetic Precedence"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:'Left-to-right evaluation: dissecting tricky operator evaluation in System.out.println(10 + 20 + "Hello" + 10 + 20) and parenthesis precedence rules.'})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"TrickyRiddle1StringConcatenationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Interview Riddles & MCQs FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 012_005 Topic 0: Tricky Riddle 1 - String Concatenation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_005_topic0_tricky_riddle_1_string_concatenation_note.txt"})}),e.jsx(i,{note:"Welcome to Technical Interview Mastery! This classic riddle traps almost every beginner in interviews! When evaluating 10 + 20 + 'Hello' + 10 + 20, Java executes left to right: 10 + 20 produces integer 30, then 30 + 'Hello' produces '30Hello', and thereafter every subsequent + turns into String concatenation ('30Hello1020')! — Sukanta Hui"})]})}export{y as default};
