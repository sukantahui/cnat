import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as r}from"./CFileLoader-DjboCeUK.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const a=`#include <stdio.h>\r
\r
/**\r
 * PreprocessorDemo.c\r
 * Macros, Stringizing (#), and Token Concatenation (##)\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
#define SQUARE(x) ((x) * (x))\r
#define STRINGIFY(x) #x\r
#define CONCAT(a, b) a##b\r
\r
#ifndef DEBUG_LEVEL\r
#define DEBUG_LEVEL 1\r
#endif\r
\r
int main(void) {\r
    int var10 = 500;\r
\r
    printf("=== C Preprocessor Directives & Metaprogramming ===\\n\\n");\r
    printf("SQUARE(5 + 1) : %d\\n", SQUARE(5 + 1));\r
    printf("STRINGIFY(Hello): %s\\n", STRINGIFY(Hello Barrackpore));\r
    printf("CONCAT(var, 10): %d\\n", CONCAT(var, 10));\r
\r
#if DEBUG_LEVEL > 0\r
    printf("Debug Build Active (Level %d) - File: %s, Line: %d\\n", DEBUG_LEVEL, __FILE__, __LINE__);\r
#endif\r
\r
    return 0;\r
}\r
`,i=[{question:"Why should function-like macro arguments always be wrapped in parentheses?",shortAnswer:"To prevent operator precedence errors during text macro expansion.",explanation:"If SQUARE(x) is defined as x*x, SQUARE(5+1) expands to 5+1*5+1 = 11 instead of 36. Defined as ((x)*(x)), it evaluates to ((5+1)*(5+1)) = 36.",hint:"Parenthesize all macro parameters.",level:"intermediate"}],s=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 004_011: Preprocessor Directives & Macro Metaprogramming\r
TOPIC 0: Macros, Header Guards & Conditional Compilation\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS\r
--------------------------------------------------------------------------------\r
- Macros (#define): Function-like and object-like text replacement.\r
- Stringizing (#): Converts macro parameter to string literal.\r
- Token Concatenation (##): Merges two tokens into a single identifier.\r
- Header Guards: #ifndef MYHEADER_H / #define MYHEADER_H / #endif prevents double inclusions.\r
================================================================================\r
`;function b(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 004_011 · Topic 0"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Metaprogramming"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Preprocessor Directives & Macro Metaprogramming"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master the C preprocessor stage, function-like macros, stringizing (#), token concatenation (##), conditional compilation (#ifdef), and header guard mechanics."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💡 Text Substitution Stage"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"The C preprocessor runs prior to translation into object code. It performs pure lexical text manipulation, expanding macro definitions and header inclusions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference Code: PreprocessorDemo.c"}),e.jsx(r,{fileModule:a,title:"PreprocessorDemo.c",editable:!1})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 004_011 Topic 0 FAQs",questions:i})}),e.jsx("section",{children:e.jsx(t,{content:s,title:"Module 004_011 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_004_011_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(o,{note:"Always surround macro parameters with parentheses to avoid operator evaluation precedence bugs! — Sukanta Hui"})})]})}export{b as default};
