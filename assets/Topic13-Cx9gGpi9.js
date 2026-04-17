import{j as e}from"./index-CAWfB0WX.js";import{T as r}from"./TeacherSukantaHui-CiQs_T8f.js";import{E as t}from"./EditableCCodeBlock-Bfr7Gs70.js";import"./git-branch-BdSoRLQo.js";import"./index-uncorcit.js";import"./file-code-BoxdIech.js";import"./type-Cqxh80Ov.js";import"./refresh-cw-BsQtlftS.js";import"./copy-CfpCMbyO.js";import"./download-Cl4ot-Qj.js";const i=`#include <stdio.h>\r
\r
void try_to_swap(int a, int b) {\r
    int temp = a;\r
    a = b;\r
    b = temp;\r
    printf("Inside function: a=%d, b=%d\\n", a, b);\r
}\r
\r
void try_to_increment(int x) {\r
    x++;\r
    printf("Inside function: x=%d\\n", x);\r
}\r
\r
int main() {\r
    int x = 10, y = 20;\r
    printf("Before swap: x=%d, y=%d\\n", x, y);\r
    try_to_swap(x, y);\r
    printf("After swap: x=%d, y=%d (unchanged)\\n", x, y);\r
\r
    int a = 5;\r
    printf("Before increment: a=%d\\n", a);\r
    try_to_increment(a);\r
    printf("After increment: a=%d (unchanged)\\n", a);\r
    return 0;\r
}`,n=`#include <stdio.h>\r
\r
void swap(int *p, int *q) {\r
    int temp = *p;\r
    *p = *q;\r
    *q = temp;\r
}\r
\r
void increment(int *n) {\r
    (*n)++;\r
}\r
\r
int main() {\r
    int x = 10, y = 20;\r
    printf("Before swap: x=%d, y=%d\\n", x, y);\r
    swap(&x, &y);\r
    printf("After swap: x=%d, y=%d\\n", x, y);\r
\r
    int a = 5;\r
    printf("Before increment: a=%d\\n", a);\r
    increment(&a);\r
    printf("After increment: a=%d\\n", a);\r
\r
    return 0;\r
}`,u=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Pointers as Function Parameters: Call by Value vs Simulated Reference"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["C uses ",e.jsx("strong",{children:"call by value"})," for function arguments – parameters receive copies of the actual arguments. To modify the original variables, we pass pointers, effectively simulating ",e.jsx("strong",{children:"call by reference"}),". Understanding this distinction is key to writing functions that alter data outside their own scope."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📦 Call by Value (Default)"}),e.jsxs("p",{className:"leading-relaxed",children:["Parameters receive a ",e.jsx("strong",{children:"copy"})," of the argument. Changes inside the function do not affect the original."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`void increment(int x) {
    x++;   // modifies the copy only
}

int main() {
    int a = 5;
    increment(a);
    printf("%d", a); // still 5
}`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Simple and safe, but cannot modify the original variable."})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔗 Simulated Call by Reference"}),e.jsxs("p",{className:"leading-relaxed",children:["Pass a ",e.jsx("strong",{children:"pointer"})," to the variable. The function receives the address, then dereferences to modify the original."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`void increment(int *p) {
    (*p)++;   // modifies the original
}

int main() {
    int a = 5;
    increment(&a);
    printf("%d", a); // now 6
}`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Enables functions to change variables outside their scope – essential for swapping, returning multiple values, etc."})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Pass by Value vs Pass by Pointer"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"500",height:"220",viewBox:"0 0 500 220",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"30",y:"20",width:"200",height:"60",fill:"#3B82F6",fillOpacity:"0.1",stroke:"#3B82F6",strokeWidth:"1.5"}),e.jsx("text",{x:"130",y:"40",textAnchor:"middle",fill:"#3B82F6",fontSize:"12",children:"Call by Value"}),e.jsx("rect",{x:"50",y:"55",width:"50",height:"25",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6"}),e.jsx("text",{x:"75",y:"72",textAnchor:"middle",fontSize:"10",children:"a (5)"}),e.jsx("text",{x:"130",y:"72",fontSize:"16",children:"→"}),e.jsx("rect",{x:"150",y:"55",width:"50",height:"25",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B"}),e.jsx("text",{x:"175",y:"72",textAnchor:"middle",fontSize:"10",children:"copy (5)"}),e.jsx("text",{x:"200",y:"85",fontSize:"10",children:"(copy, no change)"}),e.jsx("rect",{x:"30",y:"120",width:"200",height:"60",fill:"#10B981",fillOpacity:"0.1",stroke:"#10B981",strokeWidth:"1.5"}),e.jsx("text",{x:"130",y:"140",textAnchor:"middle",fill:"#10B981",fontSize:"12",children:"Call by Pointer"}),e.jsx("rect",{x:"50",y:"155",width:"50",height:"25",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981"}),e.jsx("text",{x:"75",y:"172",textAnchor:"middle",fontSize:"10",children:"a (5)"}),e.jsx("text",{x:"130",y:"172",fontSize:"16",children:"→"}),e.jsx("rect",{x:"150",y:"155",width:"60",height:"25",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B"}),e.jsx("text",{x:"180",y:"172",textAnchor:"middle",fontSize:"9",children:"&a (addr)"}),e.jsx("path",{d:"M180 180 L80 180",stroke:"#10B981",strokeWidth:"1.5",strokeDasharray:"3",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"210",y:"185",fontSize:"10",children:"*ptr changes a"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:e.jsx("polygon",{points:"0 0, 6 3, 0 6",fill:"#10B981"})})})]})}),e.jsx("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:"Pass by value copies data; pass by pointer allows modification of the original."})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📖 Why Not Real Call by Reference?"}),e.jsxs("p",{className:"leading-relaxed",children:["Languages like C++ have true call by reference, where the parameter is an alias to the argument. C only has call by value, but we ",e.jsx("strong",{children:"simulate"})," reference semantics by passing addresses. The function receives a pointer (value) that holds the address of the original variable. By dereferencing, we access the original."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`// Simulated reference
void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["This pattern is used throughout C libraries (e.g., ",e.jsx("code",{children:'scanf("%d", &x)'}),")."]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔁 Returning Multiple Values"}),e.jsx("p",{className:"leading-relaxed",children:'Since C functions can only return one value, pointers allow you to "return" additional values by writing to passed‑in pointers.'}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`void divide(int a, int b, int *quot, int *rem) {
    *quot = a / b;
    *rem = a % b;
}

int main() {
    int q, r;
    divide(10, 3, &q, &r);
    printf("quot=%d rem=%d\\n", q, r);
}`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Swadeep"})," used this technique to compute both sum and product in one function call."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 See the Difference"}),e.jsx(t,{title:"Example 1: Call by Value (No Effect Outside)",initialCode:i}),e.jsx(t,{title:"Example 2: Swap Using Pointers (Works)",initialCode:n})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to dereference:"})," Inside function, using ",e.jsx("code",{children:"p = newValue;"})," instead of ",e.jsx("code",{children:"*p = newValue;"})," changes the pointer, not the original."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Passing NULL without checking:"})," Dereferencing a NULL pointer in a function leads to crash."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Passing pointer to local variable:"})," Returning pointer to local variable from function is UB (dangling pointer)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing call by value with pointer syntax:"})," The function ",e.jsx("code",{children:"void f(int *p)"})," still uses call by value – the pointer itself is copied, but the copy holds the same address."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"const"})," for pointer parameters that should not modify the data: ",e.jsx("code",{children:"void print(const int *p)"}),"."]}),e.jsx("li",{children:"Always check for NULL in functions that accept pointers (especially if they can be NULL)."}),e.jsx("li",{children:"Document the intended use: does the function read, write, or both through the pointer?"}),e.jsxs("li",{children:["When a function needs to modify a variable, pass a pointer and clearly indicate it with ",e.jsx("code",{children:"_out"})," or similar naming."]})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsx("li",{children:"✅ Understand that C passes arguments by value (copies)."}),e.jsx("li",{children:"✅ Can write functions that modify caller's variables using pointers."}),e.jsxs("li",{children:["✅ Know how to pass the address with ",e.jsx("code",{children:"&"})," and dereference with ",e.jsx("code",{children:"*"})," inside the function."]}),e.jsx("li",{children:"✅ Can return multiple values via pointer parameters."})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsx("li",{children:"If you pass a pointer to a function, is the pointer itself passed by value? What does that mean for the pointer variable inside the function?"}),e.jsxs("li",{children:["Observe carefully: In the swap function, what happens if you pass ",e.jsx("code",{children:"swap(&a, &a)"}),"? Is it safe?"]}),e.jsx("li",{children:"Try writing a function that takes two integers and returns their sum and difference using pointers."})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"restrict"})," keyword (C99) when pointers don't alias:"]})," Helps compiler optimise."]}),e.jsx("li",{children:e.jsx("strong",{children:"For large structures, pass a pointer to avoid copying overhead."})}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"size_t"})," and ",e.jsx("code",{children:"const"})," for read‑only buffers:"]})," e.g., ",e.jsx("code",{children:"void process(const void *data, size_t len);"})]}),e.jsx("li",{children:e.jsx("strong",{children:"When a function modifies a pointer itself (like realloc), pass a double pointer."})})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(r,{note:"In Barrackpore CNAT, I often say: 'In C, you can't change what you can't point to.' Passing by value is safe but limited; passing pointers gives you the power to modify. The key is remembering to use <code>&amp;</code> at the call and <code>*</code> inside the function. Practice with swap and increment functions until it becomes second nature. And always ask: 'Do I want to change the original or just use its value?' That choice guides whether to pass a value or a pointer."})}),e.jsx("style",{children:`
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
      `})]});export{u as default};
