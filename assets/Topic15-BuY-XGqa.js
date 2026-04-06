import{j as e}from"./index-zoleORG0.js";import{T as t}from"./TeacherSukantaHui-BbhJ4p7D.js";import{E as r}from"./EditableCCodeBlock-C_kA-Xgi.js";import"./git-branch-CX-7OWTy.js";import"./index-DaCgRqBW.js";import"./file-code-CYf5TbHj.js";import"./type-01gFDPU2.js";import"./refresh-cw-H932oURx.js";import"./copy-DnHNBSbf.js";import"./download-DXpbFnt0.js";const i=`#include <stdio.h>\r
\r
// Swaps two pointers using double pointers\r
void swapPointers(int **a, int **b) {\r
    int *temp = *a;\r
    *a = *b;\r
    *b = temp;\r
}\r
\r
int main() {\r
    int x = 10, y = 20;\r
    int *p = &x;\r
    int *q = &y;\r
\r
    printf("Before swap: p points to %d, q points to %d\\n", *p, *q);\r
    swapPointers(&p, &q);\r
    printf("After swap: p points to %d, q points to %d\\n", *p, *q);\r
\r
    return 0;\r
}`,n=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int rows = 3, cols = 4;\r
    int **matrix = NULL;\r
\r
    // Allocate array of row pointers\r
    matrix = (int**)malloc(rows * sizeof(int*));\r
    if (matrix == NULL) {\r
        printf("Memory allocation failed\\n");\r
        return 1;\r
    }\r
\r
    // Allocate each row\r
    for (int i = 0; i < rows; i++) {\r
        matrix[i] = (int*)malloc(cols * sizeof(int));\r
        if (matrix[i] == NULL) {\r
            printf("Row %d allocation failed\\n", i);\r
            // Free previously allocated rows\r
            for (int j = 0; j < i; j++) free(matrix[j]);\r
            free(matrix);\r
            return 1;\r
        }\r
    }\r
\r
    // Fill with some values\r
    for (int i = 0; i < rows; i++) {\r
        for (int j = 0; j < cols; j++) {\r
            matrix[i][j] = i * cols + j + 1;\r
        }\r
    }\r
\r
    // Print matrix\r
    printf("Matrix:\\n");\r
    for (int i = 0; i < rows; i++) {\r
        for (int j = 0; j < cols; j++) {\r
            printf("%3d ", matrix[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
\r
    // Free memory (reverse order)\r
    for (int i = 0; i < rows; i++) {\r
        free(matrix[i]);\r
    }\r
    free(matrix);\r
\r
    return 0;\r
}`,y=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Pointer to Pointer (Double Pointer)"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["A ",e.jsx("strong",{children:"pointer to a pointer"})," (often called a double pointer) is a variable that stores the address of another pointer. It adds another level of indirection and is commonly used when you need to modify a pointer inside a function, handle 2D dynamic arrays, or work with arrays of strings."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📌 What Is a Double Pointer?"}),e.jsxs("p",{className:"leading-relaxed",children:["A double pointer is declared with two asterisks: ",e.jsx("code",{children:"type **ptr;"}),". It holds the address of a pointer variable."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int x = 10;
int *p = &x;   // single pointer
int **pp = &p; // double pointer, holds address of p`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["You can then access ",e.jsx("code",{children:"x"})," via ",e.jsx("code",{children:"**pp"})," (double dereference)."]})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🎯 Why Use a Double Pointer?"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Modify a pointer inside a function (like dynamic allocation)."}),e.jsx("li",{children:"Create and manage 2D arrays dynamically."}),e.jsxs("li",{children:["Work with arrays of strings (e.g., ",e.jsx("code",{children:"argv"}),")."]}),e.jsx("li",{children:"Implement linked lists with head pointers."})]})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Indirection: Pointer to Pointer"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"500",height:"220",viewBox:"0 0 500 220",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"30",y:"80",width:"80",height:"50",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6",strokeWidth:"2"}),e.jsx("text",{x:"70",y:"105",textAnchor:"middle",fill:"#3B82F6",fontSize:"12",children:"x"}),e.jsx("text",{x:"70",y:"125",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"value: 42"}),e.jsx("rect",{x:"180",y:"80",width:"100",height:"50",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"230",y:"105",textAnchor:"middle",fill:"#10B981",fontSize:"12",children:"p (int*)"}),e.jsx("text",{x:"230",y:"125",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"holds &x"}),e.jsx("rect",{x:"350",y:"80",width:"100",height:"50",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B",strokeWidth:"2"}),e.jsx("text",{x:"400",y:"105",textAnchor:"middle",fill:"#F59E0B",fontSize:"12",children:"pp (int**)"}),e.jsx("text",{x:"400",y:"125",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"holds &p"}),e.jsx("path",{d:"M280 105 L260 105",stroke:"#10B981",strokeWidth:"2",markerEnd:"url(#arrowGreen)"}),e.jsx("path",{d:"M450 105 L430 105",stroke:"#F59E0B",strokeWidth:"2",markerEnd:"url(#arrowOrange)"}),e.jsx("text",{x:"70",y:"170",fontSize:"10",children:"*p = 42"}),e.jsx("text",{x:"230",y:"170",fontSize:"10",children:"*pp = p (address)"}),e.jsx("text",{x:"400",y:"170",fontSize:"10",children:"**pp = 42"}),e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowGreen",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",children:e.jsx("polygon",{points:"0 0, 8 4, 0 8",fill:"#10B981"})}),e.jsx("marker",{id:"arrowOrange",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",children:e.jsx("polygon",{points:"0 0, 8 4, 0 8",fill:"#F59E0B"})})]})]})}),e.jsx("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:"A double pointer stores the address of a pointer, adding another level of indirection."})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📖 Modifying a Pointer Inside a Function"}),e.jsx("p",{className:"leading-relaxed",children:"If you want a function to change a pointer (e.g., allocate memory and assign it to a pointer), you must pass the pointer's address. This is a classic use case for double pointers."}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`void allocate(int **ptr, int n) {
    *ptr = malloc(n * sizeof(int)); // changes the original pointer
}

int main() {
    int *arr = NULL;
    allocate(&arr, 10); // arr now points to allocated memory
    free(arr);
}`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["Without a double pointer, any change to ",e.jsx("code",{children:"ptr"})," inside the function would only affect the local copy."]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🗂️ Dynamic 2D Arrays"}),e.jsx("p",{className:"leading-relaxed",children:"A double pointer can be used to create a 2D array where each row is allocated separately. The double pointer points to an array of pointers, each pointing to a row."}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int rows = 3, cols = 4;
int **matrix = malloc(rows * sizeof(int*));
for (int i = 0; i < rows; i++)
    matrix[i] = malloc(cols * sizeof(int));`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Abhronila"})," used a double pointer to store student grades for multiple subjects where the number of subjects varied per student."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 Double Pointer in Action"}),e.jsx(r,{title:"Example 1: Swapping Pointers Using Double Pointer",initialCode:i}),e.jsx(r,{title:"Example 2: Dynamic 2D Array Using Double Pointer",initialCode:n})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Dereferencing too many times:"})," ",e.jsx("code",{children:"**pp"})," when you only wanted ",e.jsx("code",{children:"*pp"})," leads to wrong value or crash."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to allocate memory for the pointer array:"})," In 2D dynamic arrays, both the array of pointers and each row must be allocated."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memory leaks:"})," Free each row then the array of pointers in reverse order."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Incorrect syntax in function calls:"})," Passing ",e.jsx("code",{children:"&ptr"})," instead of ",e.jsx("code",{children:"ptr"})," when the parameter expects a double pointer."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"When a function needs to allocate or modify a pointer, pass a double pointer."}),e.jsxs("li",{children:["Always check for ",e.jsx("code",{children:"NULL"})," after allocation and handle errors."]}),e.jsx("li",{children:"Free dynamically allocated 2D arrays correctly: free each row first, then the main pointer array."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"const"})," where appropriate to indicate whether the pointed‑to data or the pointer itself is read‑only."]})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{children:["✅ Understand the syntax and meaning of ",e.jsx("code",{children:"int **pp"}),"."]}),e.jsx("li",{children:"✅ Can explain why a double pointer is needed to modify a pointer in a function."}),e.jsx("li",{children:"✅ Know how to allocate and access a dynamic 2D array with double pointers."}),e.jsxs("li",{children:["✅ Can correctly dereference double pointers (",e.jsx("code",{children:"*pp"})," and ",e.jsx("code",{children:"**pp"}),")."]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsxs("li",{children:["What is the type of ",e.jsx("code",{children:"*pp"}),"? What is the type of ",e.jsx("code",{children:"**pp"}),"?"]}),e.jsx("li",{children:"Observe carefully: In the swap pointers example, why does swapping the pointers change what they point to?"}),e.jsx("li",{children:"Try writing a function that returns a dynamically allocated array using a double pointer parameter."})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"typedef"})," to simplify:"]})," ",e.jsx("code",{children:"typedef int* int_ptr; int_ptr *pp;"})," but be cautious with readability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"In function parameters, the double pointer is often used to return a pointer:"})," e.g., ",e.jsx("code",{children:"int createArray(int **arr, int n)"})," returns status and arr is an output parameter."]}),e.jsx("li",{children:e.jsx("strong",{children:"For 2D arrays where rows are contiguous, consider using a single allocation and index manually for better cache performance."})}),e.jsx("li",{children:e.jsxs("strong",{children:["When working with ",e.jsx("code",{children:"argv"}),", note that it's a double pointer: ",e.jsx("code",{children:"char **argv"}),"."]})})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(t,{note:"In our Barrackpore CNAT class, I tell students: 'If you want to change an int inside a function, you pass an int*. If you want to change a pointer, you pass a pointer to that pointer – a double pointer.' This is a natural extension of the same concept. Practice with dynamic 2D arrays – they are a classic example where double pointers shine. Remember to free in reverse order, and always check allocations!"})}),e.jsx("style",{children:`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up {
            animation: none;
            opacity: 1;
          }
        }
      `})]});export{y as default};
