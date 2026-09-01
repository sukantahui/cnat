import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{C as e}from"./CFileLoader-DTzZ6-lz.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import{C as a}from"./CProjectAnswerTemplate-nVUti6lV.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`#include <stdio.h>\r
\r
/**\r
 * SortingSearchingDemo.c\r
 * Bubble Sort & Binary Search in C\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
void bubbleSort(int arr[], int n) {\r
    int i, j, temp;\r
    for (i = 0; i < n - 1; i++) {\r
        for (j = 0; j < n - i - 1; j++) {\r
            if (arr[j] > arr[j + 1]) {\r
                temp = arr[j];\r
                arr[j] = arr[j + 1];\r
                arr[j + 1] = temp;\r
            }\r
        }\r
    }\r
}\r
\r
int binarySearch(int arr[], int n, int target) {\r
    int low = 0, high = n - 1, mid;\r
    while (low <= high) {\r
        mid = low + (high - low) / 2;\r
        if (arr[mid] == target) return mid;\r
        if (arr[mid] < target) low = mid + 1;\r
        else high = mid - 1;\r
    }\r
    return -1;\r
}\r
\r
int main(void) {\r
    int data[6] = {64, 25, 12, 22, 11, 90};\r
    int i, target = 22, index;\r
\r
    printf("=== Bubble Sort & Binary Search Demo ===\\n\\n");\r
    printf("Original Data: ");\r
    for (i = 0; i < 6; i++) printf("%d ", data[i]);\r
    printf("\\n");\r
\r
    bubbleSort(data, 6);\r
\r
    printf("Sorted Data  : ");\r
    for (i = 0; i < 6; i++) printf("%d ", data[i]);\r
    printf("\\n\\n");\r
\r
    index = binarySearch(data, 6, target);\r
    if (index != -1) {\r
        printf("Element %d found at sorted index %d.\\n", target, index);\r
    } else {\r
        printf("Element %d not found.\\n", target);\r
    }\r
\r
    return 0;\r
}\r
`,s=[{question:"Why does Binary Search require a sorted array?",shortAnswer:"Binary search eliminates half the remaining elements per iteration by comparing target with middle element.",explanation:"If the array is unsorted, discarding half the search space might accidentally discard the target element.",hint:"Binary Search operates on sorted arrays in O(log N) time.",level:"intermediate"}],d=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_005: Arrays & Matrix Operations\r
TOPIC 1: Module 002_005 Hands-on Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: Matrix Transpose & Multiplication Suite\r
- Project 2: Class Marksheet & Statistical Ranker\r
================================================================================\r
`,l={projectCategory:"Module 002_005 · Hands-on C Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P5.1",title:"Matrix Multiplication Engine",difficulty:"Intermediate",description:"Write a C program that multiplies two 2x2 matrices A and B and prints the product matrix C.",exampleText:"A = [[1, 2], [3, 4]], B = [[2, 0], [1, 2]]",exampleOutput:`Product Matrix C:
4 4
10 8`,logicExplanation:`1. Perform triple nested loops: for i, for j, for k.
2. C[i][j] += A[i][k] * B[k][j].`,answer:`#include <stdio.h>

int main(void) {
    int A[2][2] = {{1, 2}, {3, 4}};
    int B[2][2] = {{2, 0}, {1, 2}};
    int C[2][2] = {0};
    int i, j, k;

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            for (k = 0; k < 2; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    printf("Product Matrix C:\\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            printf("%d ", C[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`,codeExplanation:"Demonstrates 2D matrix dot-product multiplication algorithm."},{projectId:"P5.2",title:"Class Marksheet Ranker & Statistics",difficulty:"Intermediate",description:"Sort an array of student marks in descending order using Selection Sort and calculate class average, max, and min marks.",exampleText:"Marks: [55, 92, 78, 88, 42]",exampleOutput:`Highest: 92
Lowest: 42
Average: 71.00
Ranked Marks: 92 88 78 55 42`,logicExplanation:`1. Loop through array to find max and min.
2. Apply Selection Sort algorithm in descending order.`,answer:`#include <stdio.h>

int main(void) {
    int marks[5] = {55, 92, 78, 88, 42};
    int n = 5, i, j, maxIdx, temp, sum = 0;

    for (i = 0; i < n; i++) sum += marks[i];

    for (i = 0; i < n - 1; i++) {
        maxIdx = i;
        for (j = i + 1; j < n; j++) {
            if (marks[j] > marks[maxIdx]) maxIdx = j;
        }
        temp = marks[maxIdx];
        marks[maxIdx] = marks[i];
        marks[i] = temp;
    }

    printf("Class Average: %.2f\\n", (float)sum / n);
    printf("Ranked Marks: ");
    for (i = 0; i < n; i++) printf("%d ", marks[i]);
    printf("\\n");
    return 0;
}`,codeExplanation:"Demonstrates Selection Sort in descending order and simple array statistics."}]};function S(){return r.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[r.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_005 · Topic 1"}),r.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),r.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 002_005 Projects & Practical Lab"}),r.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master matrix multiplication and statistical array sorting through hands-on projects."})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: SortingSearchingDemo.c"}),r.jsx(e,{fileModule:o,title:"SortingSearchingDemo.c",editable:!1})]}),r.jsxs("section",{className:"space-y-6",children:[r.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 002_005 Project Solutions"}),r.jsx(a,{data:l})]}),r.jsx("section",{children:r.jsx(t,{title:"Module 002_005 Topic 1 FAQs",questions:s})}),r.jsx("section",{children:r.jsx(n,{content:d,title:"Module 002_005 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_002_005_topic1_note.txt"})}),r.jsx("section",{children:r.jsx(i,{note:"Multi-dimensional arrays pass base element pointers to functions—always pass row and column dimensions alongside! — Sukanta Hui"})})]})}export{S as default};
