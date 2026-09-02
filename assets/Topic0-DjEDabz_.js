import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as r}from"./CFileLoader-DjboCeUK.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/**\r
 * DynamicMemoryDemo.c\r
 * Heap allocation using malloc, calloc, realloc, and free\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int main(void) {\r
    int n = 5, i;\r
    int *arr = NULL;\r
\r
    printf("=== Dynamic Memory Allocation (Heap Management) ===\\n\\n");\r
\r
    // Allocate memory on Heap using malloc\r
    arr = (int *)malloc(n * sizeof(int));\r
    if (arr == NULL) {\r
        fprintf(stderr, "Heap Allocation Failed!\\n");\r
        return 1;\r
    }\r
\r
    for (i = 0; i < n; i++) arr[i] = (i + 1) * 10;\r
\r
    printf("Initial Heap Allocation (malloc):\\n");\r
    for (i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("\\n\\n");\r
\r
    // Expand Heap Allocation using realloc\r
    n = 8;\r
    int *temp = (int *)realloc(arr, n * sizeof(int));\r
    if (temp == NULL) {\r
        free(arr);\r
        fprintf(stderr, "Heap Reallocation Failed!\\n");\r
        return 1;\r
    }\r
    arr = temp;\r
\r
    for (i = 5; i < n; i++) arr[i] = (i + 1) * 10;\r
\r
    printf("Resized Heap Allocation (realloc to 8 items):\\n");\r
    for (i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("\\n\\n");\r
\r
    // Free memory to prevent memory leak\r
    free(arr);\r
    arr = NULL; // Avoid dangling pointer\r
    printf("Heap Memory Freed Successfully.\\n");\r
\r
    return 0;\r
}\r
`,l=[{question:"What is the difference between malloc() and calloc() in C?",shortAnswer:"malloc() allocates uninitialized memory; calloc() allocates zero-initialized memory.",explanation:"malloc(size) takes total bytes and leaves memory contents dirty. calloc(num, size) clears all bytes to zero.",hint:"calloc clears memory to zero.",level:"intermediate"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 003_009: Dynamic Memory Allocation & Heap Management\r
TOPIC 0: Heap Allocation, Reallocation & Freeing\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS\r
--------------------------------------------------------------------------------\r
- malloc(bytes): Heap block allocation (uninitialized).\r
- calloc(num, size): Zero-initialized heap allocation.\r
- realloc(ptr, new_bytes): Resizes existing heap block.\r
- free(ptr): Deallocates memory and sets ptr = NULL.\r
================================================================================\r
`;function b(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_009 · Topic 0"}),e.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Heap Management"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Dynamic Memory Allocation & Heap Management"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master heap allocation with malloc(), calloc(), realloc(), free(), dangling pointer elimination, and memory leak diagnostics."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💡 Stack vs Heap Architecture"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Stack memory is automatically managed per stack frame. Heap memory offers dynamic runtime lifetime persistence until explicitly released via ",e.jsx("code",{children:"free()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference Code: DynamicMemoryDemo.c"}),e.jsx(r,{fileModule:i,title:"DynamicMemoryDemo.c",editable:!1})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 003_009 Topic 0 FAQs",questions:l})}),e.jsx("section",{children:e.jsx(a,{content:o,title:"Module 003_009 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_009_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(t,{note:"Always set pointer = NULL immediately after calling free(pointer) to eliminate dangling pointers! — Sukanta Hui"})})]})}export{b as default};
