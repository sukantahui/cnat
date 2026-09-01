import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DTzZ6-lz.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`#include <stdio.h>\r
\r
/**\r
 * PointersBasicsDemo.c\r
 * Pointer dereferencing, address arithmetic, and double pointers\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int main(void) {\r
    int val = 100;\r
    int *ptr = &val;\r
    int **pptr = &ptr;\r
\r
    printf("=== Pointer Fundamentals & Address Arithmetic ===\\n\\n");\r
    printf("Value of 'val'              : %d\\n", val);\r
    printf("Address of 'val' (&val)     : %p\\n", (void*)&val);\r
    printf("Pointer 'ptr' holds address : %p\\n", (void*)ptr);\r
    printf("Dereferenced '*ptr'         : %d\\n\\n", *ptr);\r
\r
    printf("Double Pointer 'pptr' holds : %p\\n", (void*)pptr);\r
    printf("Dereferenced '**pptr'       : %d\\n\\n", **pptr);\r
\r
    // Pointer Arithmetic\r
    printf("Pointer Arithmetic:\\n");\r
    printf("ptr     : %p\\n", (void*)ptr);\r
    printf("ptr + 1 : %p (Advanced by %zu bytes)\\n", (void*)(ptr + 1), sizeof(int));\r
\r
    return 0;\r
}\r
`,i=[{question:"What does pointer arithmetic (ptr + 1) do in C?",shortAnswer:"It advances the memory address by 1 unit of sizeof(*ptr) bytes.",explanation:"For an int pointer (4 bytes), ptr + 1 advances the memory address by 4 bytes to point to the next contiguous integer element.",hint:"Scaled by sizeof target data type.",level:"intermediate"}],a=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_007: Pointers, Address Arithmetic & Function Pointers\r
TOPIC 0: Pointer Mechanics & RAM Address Operations\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS\r
--------------------------------------------------------------------------------\r
- Address-of (&): Obtains memory address of a variable.\r
- Dereference (*): Accesses value stored at memory address.\r
- Pointer Arithmetic: Scaled by sizeof(type).\r
- Void Pointer (void*): Generic pointer holding any memory address.\r
================================================================================\r
`;function y(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_007 · Topic 0"}),e.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Pointers & Memory"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Pointers, Address Arithmetic & Function Pointers"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master the core of C: memory address-of (&), dereference (*), pointer arithmetic scaling, double pointers (**), void pointers (void*), and function callbacks."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💡 Direct RAM Address Access"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Pointers store hexadecimal RAM addresses. Dereferencing ",e.jsx("code",{children:"*ptr"})," reads or mutates the byte contents at that address directly."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference Code: PointersBasicsDemo.c"}),e.jsx(t,{fileModule:o,title:"PointersBasicsDemo.c",editable:!1})]}),e.jsx("section",{children:e.jsx(r,{title:"Module 002_007 Topic 0 FAQs",questions:i})}),e.jsx("section",{children:e.jsx(n,{content:a,title:"Module 002_007 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_002_007_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Always initialize pointers to NULL or a valid address to prevent segmentation fault crashes! — Sukanta Hui"})})]})}export{y as default};
