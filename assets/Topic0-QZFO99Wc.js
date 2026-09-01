import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{C as e}from"./CFileLoader-DTzZ6-lz.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`#include <stdio.h>\r
\r
/**\r
 * ArrayMatrixDemo.c\r
 * 1D Array manipulation & 2D Matrix Transposition\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int main(void) {\r
    int arr[5] = {12, 45, 67, 23, 89};\r
    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};\r
    int transpose[3][2];\r
    int i, j;\r
\r
    printf("=== 1D & 2D Contiguous Memory Layout ===\\n\\n");\r
\r
    printf("1D Array Elements & Addresses:\\n");\r
    for (i = 0; i < 5; i++) {\r
        printf("arr[%d] = %d (RAM Address: %p)\\n", i, arr[i], (void*)&arr[i]);\r
    }\r
\r
    printf("\\nOriginal 2x3 Matrix:\\n");\r
    for (i = 0; i < 2; i++) {\r
        for (j = 0; j < 3; j++) {\r
            printf("%d ", matrix[i][j]);\r
            transpose[j][i] = matrix[i][j];\r
        }\r
        printf("\\n");\r
    }\r
\r
    printf("\\nTransposed 3x2 Matrix:\\n");\r
    for (i = 0; i < 3; i++) {\r
        for (j = 0; j < 2; j++) {\r
            printf("%d ", transpose[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
\r
    return 0;\r
}\r
`,i=[{question:"How are 2D arrays stored in physical RAM in C?",shortAnswer:"In row-major order as a single contiguous memory block.",explanation:"matrix[2][3] stores row 0 elements sequentially followed immediately by row 1 elements.",hint:"Row-major order contiguous allocation.",level:"intermediate"}],s=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_005: Arrays & Matrix Operations\r
TOPIC 0: Contiguous Array Storage & Matrix Transposition\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS\r
--------------------------------------------------------------------------------\r
- 1D Array: Fixed size, zero-indexed, contiguous RAM block.\r
- 2D Matrix: Row-major order contiguous memory layout.\r
- Matrix Transpose: Swap element matrix[i][j] into transpose[j][i].\r
================================================================================\r
`;function h(){return r.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[r.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_005 · Topic 0"}),r.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Arrays & Matrices"})]}),r.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Arrays, Matrix Operations & Searching/Sorting"}),r.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master 1D/2D arrays in contiguous RAM, row-major layout, searching algorithms (Linear & Binary Search), sorting algorithms (Bubble & Selection Sort), and matrix algebra."})]}),r.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6",children:[r.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💡 Contiguous Memory Layout"}),r.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Array elements reside in contiguous memory locations. Indexing ",r.jsx("code",{children:"arr[i]"})," computes address offset ",r.jsx("code",{children:"base_address + i * sizeof(type)"})," in $O(1)$ constant time."]})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference Code: ArrayMatrixDemo.c"}),r.jsx(e,{fileModule:o,title:"ArrayMatrixDemo.c",editable:!1})]}),r.jsx("section",{children:r.jsx(n,{title:"Module 002_005 Topic 0 FAQs",questions:i})}),r.jsx("section",{children:r.jsx(t,{content:s,title:"Module 002_005 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_002_005_topic0_note.txt"})}),r.jsx("section",{children:r.jsx(a,{note:"Always verify array upper bound limits to prevent memory access past array length! — Sukanta Hui"})})]})}export{h as default};
