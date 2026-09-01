import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as n}from"./CFileLoader-DTzZ6-lz.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import{C as a}from"./CProjectAnswerTemplate-nVUti6lV.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`#include <stdio.h>\r
\r
/**\r
 * RecursionDemo.c\r
 * Recursive GCD & Tower of Hanoi Solvers\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int gcd(int a, int b) {\r
    if (b == 0) return a;\r
    return gcd(b, a % b);\r
}\r
\r
void towerOfHanoi(int n, char fromRod, char toRod, char auxRod) {\r
    if (n == 1) {\r
        printf("Move disk 1 from rod %c to rod %c\\n", fromRod, toRod);\r
        return;\r
    }\r
    towerOfHanoi(n - 1, fromRod, auxRod, toRod);\r
    printf("Move disk %d from rod %c to rod %c\\n", n, fromRod, toRod);\r
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);\r
}\r
\r
int main(void) {\r
    printf("=== Recursive GCD & Tower of Hanoi Demo ===\\n\\n");\r
    printf("GCD of 48 and 18: %d\\n\\n", gcd(48, 18));\r
\r
    printf("Tower of Hanoi (3 Disks):\\n");\r
    towerOfHanoi(3, 'A', 'C', 'B');\r
\r
    return 0;\r
}\r
`,s=[{question:"What is base condition in recursion and why is it mandatory?",shortAnswer:"Base condition specifies the termination criteria that halts recursive function calls.",explanation:"Without a base condition, the function calls itself indefinitely, exhausting CPU stack space and causing a Stack Overflow crash.",hint:"Base condition stops recursion.",level:"basic"}],c=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 001_004: Functions, Scope & Storage Classes\r
TOPIC 1: Module 001_004 Hands-on Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: Mathematical Recursion Toolkit (Fibonacci, GCD, Tower of Hanoi)\r
- Project 2: Modular Scientific Calculator Engine\r
================================================================================\r
`,l={projectCategory:"Module 001_004 · Hands-on C Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P4.1",title:"Recursive GCD & Fibonacci Toolkit",difficulty:"Intermediate",description:"Write a modular C program with recursive functions for Greatest Common Divisor (Euclidean algorithm) and Fibonacci sequence generation.",exampleText:"GCD of 48 & 18",exampleOutput:`GCD (Euclidean Recursion): 6
Fibonacci Term 7: 13`,logicExplanation:`1. Recursive GCD: if (b == 0) return a; else return gcd(b, a % b).
2. Recursive Fibonacci: if (n <= 1) return n; else return fib(n-1) + fib(n-2).`,answer:`#include <stdio.h>

int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

int fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main(void) {
    int a = 48, b = 18, n = 7;
    printf("GCD of %d and %d: %d\\n", a, b, gcd(a, b));
    printf("Fibonacci term %d: %d\\n", n, fibonacci(n));
    return 0;
}`,codeExplanation:"Demonstrates clean base-case termination in recursive algorithms."},{projectId:"P4.2",title:"Modular Scientific Calculator Engine",difficulty:"Intermediate",description:"Decompose a calculator into isolated modular functions: add, subtract, multiply, divide, power, and factorial.",exampleText:"Power 2^5",exampleOutput:"2 ^ 5 = 32.00",logicExplanation:`1. Declare clean prototypes for each operation.
2. Implement functions and invoke from main menu.`,answer:`#include <stdio.h>

float add(float a, float b) { return a + b; }
float subtract(float a, float b) { return a - b; }
float multiply(float a, float b) { return a * b; }
float divide(float a, float b) { return (b != 0) ? a / b : 0.0f; }

int main(void) {
    printf("10 + 5 = %.2f\\n", add(10, 5));
    printf("10 / 2 = %.2f\\n", divide(10, 2));
    return 0;
}`,codeExplanation:"Demonstrates modular functional decomposition."}]};function v(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_004 · Topic 1"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 001_004 Projects & Practical Lab"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master recursive solvers and modular API architecture through real-world projects."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: RecursionDemo.c"}),e.jsx(n,{fileModule:i,title:"RecursionDemo.c",editable:!1})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 001_004 Project Solutions"}),e.jsx(a,{data:l})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 001_004 Topic 1 FAQs",questions:s})}),e.jsx("section",{children:e.jsx(o,{content:c,title:"Module 001_004 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_004_topic1_note.txt"})}),e.jsx("section",{children:e.jsx(r,{note:"Always ensure every recursive function path hits a valid base case to prevent call stack exhaustion! — Sukanta Hui"})})]})}export{v as default};
