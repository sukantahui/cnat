import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DTzZ6-lz.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const s=`#include <stdio.h>\r
\r
/**\r
 * FunctionsDemo.c\r
 * Function prototypes, pass-by-value vs pass-by-reference,\r
 * and static storage class persistence.\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
// Function Prototypes\r
int calculateFactorial(int n);\r
void incrementCounter(void);\r
void swapValues(int *x, int *y);\r
\r
int main(void) {\r
    int a = 10, b = 20;\r
\r
    printf("=== C Functions & Storage Classes ===\\n\\n");\r
\r
    // Call by Value / Factorial\r
    printf("Factorial of 5: %d\\n\\n", calculateFactorial(5));\r
\r
    // Call by Reference / Pointer swap\r
    printf("Before Swap: a = %d, b = %d\\n", a, b);\r
    swapValues(&a, &b);\r
    printf("After Swap : a = %d, b = %d\\n\\n", a, b);\r
\r
    // Static Storage Class Persistence\r
    printf("Static Counter Calls:\\n");\r
    incrementCounter();\r
    incrementCounter();\r
    incrementCounter();\r
\r
    return 0;\r
}\r
\r
int calculateFactorial(int n) {\r
    if (n <= 1) return 1;\r
    return n * calculateFactorial(n - 1);\r
}\r
\r
void swapValues(int *x, int *y) {\r
    int temp = *x;\r
    *x = *y;\r
    *y = temp;\r
}\r
\r
void incrementCounter(void) {\r
    static int count = 0; // Persistent local storage across function invocations\r
    count++;\r
    printf("Counter Value: %d\\n", count);\r
}\r
`,o=[{question:"What is the difference between call-by-value and call-by-reference in C?",shortAnswer:"Call-by-value passes a copy of the argument; call-by-reference passes memory address pointers allowing direct mutation.",explanation:"C strictly evaluates parameters by value. Passing pointer addresses (int *ptr) emulates call-by-reference by giving the function access to caller memory locations.",hint:"Use pointers (&var) to mutate caller variables.",level:"intermediate"},{question:"What does the static storage class modifier do when applied to a local variable inside a function?",shortAnswer:"It preserves the variable's value across multiple function calls throughout program lifetime.",explanation:"Unlike auto variables stored on stack frames that die upon function exit, static local variables are stored in the data segment and retain state.",hint:"static locals preserve state across function calls.",level:"intermediate"}],i=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 001_004: Functions, Scope & Storage Classes\r
TOPIC 0: Modular Function Architecture & Storage Classes\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS\r
--------------------------------------------------------------------------------\r
- Function Prototypes: Declarations placed before main().\r
- Parameter Passing: Call by Value vs Passing Pointers (&var).\r
- Storage Classes: auto (default local), register (CPU register request), static (persistent state), extern (global linkage across files).\r
================================================================================\r
`;function g(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_004 · Topic 0"}),e.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Modular Functions"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Functions, Scope & Storage Classes"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master modular program decomposition, prototypes, parameter passing mechanisms, variable scope, storage classes (auto, register, static, extern), and call stack mechanics."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💡 Modular Architecture & Call Stack Frames"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Functions isolate repetitive logic into reusable blocks. Every function invocation creates a stack frame on the CPU call stack containing parameters, return addresses, and local variables."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference Code: FunctionsDemo.c"}),e.jsx(t,{fileModule:s,title:"FunctionsDemo.c",editable:!1})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 001_004 Topic 0 FAQs",questions:o})}),e.jsx("section",{children:e.jsx(r,{content:i,title:"Module 001_004 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_004_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(a,{note:"Static variables retain their memory value across calls without polluting global scope! — Sukanta Hui"})})]})}export{g as default};
