import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{C as e}from"./CFileLoader-DTzZ6-lz.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import{C as i}from"./CProjectAnswerTemplate-nVUti6lV.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`#include <stdio.h>\r
\r
/**\r
 * FunctionPointersDemo.c\r
 * Callback functions using Function Pointers in C\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int add(int a, int b) { return a + b; }\r
int multiply(int a, int b) { return a * b; }\r
\r
// Function that accepts a function pointer callback\r
void executeOperation(int (*op)(int, int), int x, int y) {\r
    printf("Operation Result: %d\\n", op(x, y));\r
}\r
\r
int main(void) {\r
    printf("=== Function Pointer Callbacks ===\\n\\n");\r
    executeOperation(add, 10, 20);\r
    executeOperation(multiply, 10, 20);\r
    return 0;\r
}\r
`,s=[{question:"What is a function pointer in C and how is it declared?",shortAnswer:"A pointer holding the execution memory address of a function signature.",explanation:"Declared as return_type (*func_ptr_name)(param_types); allows passing callbacks and building dynamic dispatch tables.",hint:"Function address pointer for callbacks.",level:"advanced"}],l=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_007: Pointers, Address Arithmetic & Function Pointers\r
TOPIC 1: Module 002_007 Hands-on Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: Memory Address Inspector & In-place Array Inverter via Pointers\r
- Project 2: Generic Callback Function Dispatcher\r
================================================================================\r
`,c={projectCategory:"Module 002_007 · Hands-on C Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P7.1",title:"In-place Array Inverter via Pointers",difficulty:"Intermediate",description:"Write a C function that reverses an integer array in-place using two pointer addresses (start and end pointers).",exampleText:"Array: [10, 20, 30, 40, 50]",exampleOutput:"Reversed via Pointers: 50 40 30 20 10",logicExplanation:`1. Pass int *start = arr and int *end = arr + n - 1.
2. Swap *start and *end in a while (start < end) loop.`,answer:`#include <stdio.h>

void reverseArray(int *start, int *end) {
    while (start < end) {
        int temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }
}

int main(void) {
    int arr[5] = {10, 20, 30, 40, 50};
    reverseArray(arr, arr + 4);
    printf("Reversed Array: ");
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,codeExplanation:"Demonstrates in-place pointer arithmetic swapping without array subscript indexing."},{projectId:"P7.2",title:"Generic Callback Dispatch Table",difficulty:"Advanced",description:"Build a dispatch table using function pointers to call math operations dynamically based on user selection.",exampleText:"Op: Multiply(10, 5)",exampleOutput:"Dispatch Result: 50",logicExplanation:`1. Create array of function pointers: int (*ops[])(int, int) = {add, sub, mul, div}.
2. Invoke ops[choice](a, b).`,answer:`#include <stdio.h>

int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }
int mul(int a, int b) { return a * b; }

int main(void) {
    int (*dispatch[])(int, int) = {add, sub, mul};
    printf("Mul via Dispatch Table: %d\\n", dispatch[2](10, 5));
    return 0;
}`,codeExplanation:"Demonstrates dynamic function dispatch arrays in C."}]};function P(){return t.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[t.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_007 · Topic 1"}),t.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),t.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 002_007 Projects & Practical Lab"}),t.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master in-place pointer array reversal and function pointer dispatch tables."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: FunctionPointersDemo.c"}),t.jsx(e,{fileModule:o,title:"FunctionPointersDemo.c",editable:!1})]}),t.jsxs("section",{className:"space-y-6",children:[t.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 002_007 Project Solutions"}),t.jsx(i,{data:c})]}),t.jsx("section",{children:t.jsx(n,{title:"Module 002_007 Topic 1 FAQs",questions:s})}),t.jsx("section",{children:t.jsx(r,{content:l,title:"Module 002_007 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_002_007_topic1_note.txt"})}),t.jsx("section",{children:t.jsx(a,{note:"Function pointer tables allow building object-oriented virtual method tables (vtables) in plain C! — Sukanta Hui"})})]})}export{P as default};
