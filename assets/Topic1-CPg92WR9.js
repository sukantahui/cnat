import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DjboCeUK.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import{C as n}from"./CProjectAnswerTemplate-DYeINQH3.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/**\r
 * DynamicVectorDemo.c\r
 * Resizable Dynamic Array (Vector) in C\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
typedef struct {\r
    int *data;\r
    size_t size;\r
    size_t capacity;\r
} IntVector;\r
\r
void initVector(IntVector *v, size_t initialCapacity) {\r
    v->data = (int *)malloc(initialCapacity * sizeof(int));\r
    v->size = 0;\r
    v->capacity = initialCapacity;\r
}\r
\r
void pushVector(IntVector *v, int val) {\r
    if (v->size == v->capacity) {\r
        v->capacity *= 2;\r
        v->data = (int *)realloc(v->data, v->capacity * sizeof(int));\r
    }\r
    v->data[v->size++] = val;\r
}\r
\r
void freeVector(IntVector *v) {\r
    free(v->data);\r
    v->data = NULL;\r
    v->size = v->capacity = 0;\r
}\r
\r
int main(void) {\r
    IntVector vec;\r
    initVector(&vec, 2);\r
\r
    pushVector(&vec, 10);\r
    pushVector(&vec, 20);\r
    pushVector(&vec, 30); // Triggers realloc capacity expansion to 4\r
\r
    printf("=== Dynamic Resizable Vector ===\\n");\r
    printf("Vector Size    : %zu\\n", vec.size);\r
    printf("Vector Capacity: %zu\\n", vec.capacity);\r
    for (size_t i = 0; i < vec.size; i++) {\r
        printf("vec[%zu] = %d\\n", i, vec.data[i]);\r
    }\r
\r
    freeVector(&vec);\r
    return 0;\r
}\r
`,c=[{question:"How does a dynamic resizable array expand its capacity in C?",shortAnswer:"It doubles capacity using realloc when size reaches current capacity limit.",explanation:"Doubling capacity yields amortized O(1) append time complexity while minimizing reallocation overhead.",hint:"Amortized O(1) push back with realloc.",level:"advanced"}],s=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 003_009: Dynamic Memory Allocation & Heap Management\r
TOPIC 1: Module 003_009 Hands-on Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: Dynamic Resizable Vector / Array Engine\r
- Project 2: Heap-Allocated Dynamic 2D Matrix Engine\r
================================================================================\r
`,l={projectCategory:"Module 003_009 · Hands-on C Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","Valgrind","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P9.1",title:"Dynamic Resizable Vector Engine",difficulty:"Advanced",description:"Build a dynamic integer vector in C that doubles its heap buffer capacity when full.",exampleText:"Push 10, 20, 30 into capacity 2 vector",exampleOutput:"Resized Capacity: 4, Size: 3, Elements: 10 20 30",logicExplanation:`1. Structure: typedef struct { int *data; size_t size, capacity; } Vector;
2. realloc(v->data, v->capacity * 2 * sizeof(int)) when full.`,answer:`#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int *data;
    size_t size;
    size_t capacity;
} Vector;

int main(void) {
    Vector v;
    v.data = malloc(2 * sizeof(int));
    v.size = 0;
    v.capacity = 2;

    v.data[v.size++] = 100;
    v.data[v.size++] = 200;
    if (v.size == v.capacity) {
        v.capacity *= 2;
        v.data = realloc(v.data, v.capacity * sizeof(int));
    }
    v.data[v.size++] = 300;
    printf("Size: %zu, Capacity: %zu\\n", v.size, v.capacity);
    free(v.data);
    return 0;
}`,codeExplanation:"Demonstrates dynamic array capacity doubling with realloc and memory safety."},{projectId:"P9.2",title:"Heap-Allocated Dynamic 2D Matrix",difficulty:"Advanced",description:"Allocate a 2D integer matrix dynamically on the heap using an array of pointers (int **matrix).",exampleText:"Rows: 3, Cols: 3",exampleOutput:"Dynamic Matrix Allocated & Released without leaks.",logicExplanation:`1. int **mat = malloc(rows * sizeof(int*));
2. For each row: mat[i] = malloc(cols * sizeof(int));
3. Free each row first, then free main pointer.`,answer:`#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int rows = 3, cols = 3;
    int **mat = malloc(rows * sizeof(int *));
    for (int i = 0; i < rows; i++) {
        mat[i] = malloc(cols * sizeof(int));
    }

    // Free memory safely
    for (int i = 0; i < rows; i++) free(mat[i]);
    free(mat);
    printf("Dynamic 2D Matrix Memory Released Cleanly.\\n");
    return 0;
}`,codeExplanation:"Demonstrates two-level heap allocation and deallocation for dynamic 2D matrices."}]};function C(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_009 · Topic 1"}),e.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 003_009 Projects & Practical Lab"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master dynamic vector engines and dynamic 2D matrix allocation."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: DynamicVectorDemo.c"}),e.jsx(t,{fileModule:o,title:"DynamicVectorDemo.c",editable:!1})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 003_009 Project Solutions"}),e.jsx(n,{data:l})]}),e.jsx("section",{children:e.jsx(a,{title:"Module 003_009 Topic 1 FAQs",questions:c})}),e.jsx("section",{children:e.jsx(i,{content:s,title:"Module 003_009 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_009_topic1_note.txt"})}),e.jsx("section",{children:e.jsx(r,{note:"Always free dynamic memory allocations in reverse order of allocation! — Sukanta Hui"})})]})}export{C as default};
