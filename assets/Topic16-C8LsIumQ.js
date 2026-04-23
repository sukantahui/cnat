import{j as e}from"./index-CEi3MejZ.js";import{T as r}from"./TeacherSukantaHui-CUBiDJUj.js";import{E as i}from"./EditableCCodeBlock-B9uAPyfW.js";import"./git-branch-DDFFUd5U.js";import"./index-DGMSD45Y.js";import"./file-code-IbumbsCL.js";import"./type-CHzqVR_S.js";import"./refresh-cw-DZh_673z.js";import"./copy-CUN0BOtx.js";import"./download-CECieF2h.js";const t=`#include <stdio.h>\r
\r
int main() {\r
    int i = 42;\r
    char c = 'Z';\r
    double d = 3.14159;\r
\r
    void *vptr;\r
\r
    // Point to int\r
    vptr = &i;\r
    printf("int value: %d\\n", *(int*)vptr);\r
\r
    // Point to char\r
    vptr = &c;\r
    printf("char value: %c\\n", *(char*)vptr);\r
\r
    // Point to double\r
    vptr = &d;\r
    printf("double value: %f\\n", *(double*)vptr);\r
\r
    // Generic swap using void* and memcpy\r
    int a = 10, b = 20;\r
    printf("Before swap: a=%d, b=%d\\n", a, b);\r
\r
    void *temp = malloc(sizeof(int));\r
    if (temp) {\r
        memcpy(temp, &a, sizeof(int));\r
        memcpy(&a, &b, sizeof(int));\r
        memcpy(&b, temp, sizeof(int));\r
        free(temp);\r
    }\r
\r
    printf("After swap: a=%d, b=%d\\n", a, b);\r
\r
    return 0;\r
}`,n=`#include <stdio.h>\r
\r
// Generic function to print any integer (cast to int*)\r
void printInt(void *ptr) {\r
    printf("Value: %d\\n", *(int*)ptr);\r
}\r
\r
// Generic swap using memcpy\r
void genericSwap(void *a, void *b, size_t size) {\r
    void *temp = malloc(size);\r
    if (temp) {\r
        memcpy(temp, a, size);\r
        memcpy(a, b, size);\r
        memcpy(b, temp, size);\r
        free(temp);\r
    }\r
}\r
\r
int main() {\r
    int x = 100;\r
    printInt(&x);   // void* implicitly\r
\r
    // Swap two different types? Not possible directly because sizes differ.\r
    // But we can swap two ints generically:\r
    int p = 5, q = 15;\r
    printf("Before generic swap: p=%d, q=%d\\n", p, q);\r
    genericSwap(&p, &q, sizeof(int));\r
    printf("After generic swap: p=%d, q=%d\\n", p, q);\r
\r
    // Casting to and from void* is implicit in C (except when dereferencing)\r
    int *ip = &x;\r
    void *vp = ip;        // implicit\r
    int *ip2 = vp;        // implicit (but some compilers warn)\r
    printf("Value via cast: %d\\n", *ip2);\r
\r
    return 0;\r
}`,g=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Void Pointers (Generic Pointers) & Type Casting"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["A ",e.jsx("code",{children:"void*"})," pointer is a generic pointer that can hold the address of any data type. It cannot be dereferenced directly; you must first cast it to a concrete type. This flexibility makes it essential for writing generic functions like ",e.jsx("code",{children:"qsort"})," and ",e.jsx("code",{children:"memcpy"}),"."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔘 What is a Void Pointer?"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`void *ptr;   // can point to any type

int x = 10;
ptr = &x;    // OK

char c = 'A';
ptr = &c;    // also OK`}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2 text-sm",children:[e.jsx("li",{children:"No associated data type – just an address."}),e.jsx("li",{children:"Cannot be dereferenced without casting."}),e.jsx("li",{children:"Used for generic functions and memory operations."})]})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔄 Type Casting"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`void *vptr = &x;
int *iptr = (int*)vptr;   // cast to int*
printf("%d", *iptr);`}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2 text-sm",children:[e.jsx("li",{children:"Casting tells the compiler how to interpret the memory."}),e.jsx("li",{children:"Explicit casts are required for void pointers."}),e.jsx("li",{children:"Used to regain type information."})]})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Void Pointer: Generic Container"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"450",height:"180",viewBox:"0 0 450 180",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"30",y:"30",width:"80",height:"50",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6"}),e.jsx("text",{x:"70",y:"55",textAnchor:"middle",fontSize:"10",children:"int x"}),e.jsx("rect",{x:"30",y:"100",width:"80",height:"50",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981"}),e.jsx("text",{x:"70",y:"125",textAnchor:"middle",fontSize:"10",children:"char c"}),e.jsx("rect",{x:"180",y:"65",width:"100",height:"40",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B"}),e.jsx("text",{x:"230",y:"90",textAnchor:"middle",fill:"#F59E0B",fontSize:"12",children:"void *vptr"}),e.jsx("path",{d:"M180 85 L110 55",stroke:"#F59E0B",strokeWidth:"1.5",strokeDasharray:"4"}),e.jsx("path",{d:"M180 85 L110 125",stroke:"#F59E0B",strokeWidth:"1.5",strokeDasharray:"4"}),e.jsx("text",{x:"280",y:"130",fontSize:"10",children:"(int*)vptr → int*"}),e.jsx("text",{x:"280",y:"150",fontSize:"10",children:"(char*)vptr → char*"})]})}),e.jsxs("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:["A ",e.jsx("code",{children:"void*"})," can point to any type, but you must cast it before dereferencing."]})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📖 Why Can't You Dereference a void*?"}),e.jsx("p",{className:"leading-relaxed",children:"The compiler doesn't know how many bytes to read or what operation to perform. Dereferencing requires type information. Casting provides that information."}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`void *vp = &x;
// *vp = 10;   // ERROR: incomplete type
*(int*)vp = 10;   // OK: cast before dereference`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["This is why ",e.jsx("code",{children:"malloc"})," returns ",e.jsx("code",{children:"void*"})," – it's generic, and you cast it to your needed type."]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔁 Generic Functions with void*"}),e.jsxs("p",{className:"leading-relaxed",children:["The standard library uses ",e.jsx("code",{children:"void*"})," to create generic functions. For example, ",e.jsx("code",{children:"qsort"})," works on any array type because it receives a ",e.jsx("code",{children:"void*"})," to the array and a comparison function that casts back."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`void qsort(void *base, size_t nmemb, size_t size,
           int (*compar)(const void *, const void *));`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Sreeparna"})," wrote a generic swap function that works with any data type using ",e.jsx("code",{children:"void*"})," and ",e.jsx("code",{children:"memcpy"}),"."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 Void Pointers & Casting"}),e.jsx(i,{title:"Example 1: Void Pointer to Different Types",initialCode:t}),e.jsx(i,{title:"Example 2: Type Casting in Action",initialCode:n})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Dereferencing a void* without casting:"})," Compiler error."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pointer arithmetic on void*:"})," Not allowed (size unknown). Cast to ",e.jsx("code",{children:"char*"})," for byte arithmetic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to cast the return of malloc:"})," In C, it's optional, but in C++ it's required. Casting can hide missing ",e.jsx("code",{children:"#include <stdlib.h>"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Incorrect casting leading to misaligned access:"})," Casting to a larger type may cause alignment issues."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Always cast a ",e.jsx("code",{children:"void*"})," to the correct type before dereferencing or performing arithmetic."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"void*"})," to write generic functions, but ensure the caller provides enough information (e.g., size)."]}),e.jsxs("li",{children:["When casting, prefer C‑style casts ",e.jsx("code",{children:"(type*)ptr"})," for clarity in C."]}),e.jsxs("li",{children:["If you need byte‑level manipulation, cast to ",e.jsx("code",{children:"unsigned char*"})," to avoid sign extension issues."]})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{children:["✅ Understand that ",e.jsx("code",{children:"void*"})," is a generic pointer."]}),e.jsx("li",{children:"✅ Know that you must cast before dereferencing or pointer arithmetic."}),e.jsxs("li",{children:["✅ Can write a simple generic function using ",e.jsx("code",{children:"void*"}),"."]}),e.jsxs("li",{children:["✅ Recognize common library functions that use ",e.jsx("code",{children:"void*"})," (malloc, qsort, memcpy)."]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsxs("li",{children:["What happens if you try to add 1 to a ",e.jsx("code",{children:"void*"}),"? Why is it disallowed?"]}),e.jsx("li",{children:"Observe carefully: In the generic swap example, why do we need to pass the size?"}),e.jsx("li",{children:"Try writing a generic function that prints any type, using a format string and casting."})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"void*"})," with ",e.jsx("code",{children:"memcpy"})," to implement type‑agnostic copying."]})}),e.jsx("li",{children:e.jsxs("strong",{children:["For alignment‑sensitive casts, consider ",e.jsx("code",{children:"_Alignas"})," or use standard alignment macros."]})}),e.jsx("li",{children:e.jsxs("strong",{children:["When writing generic functions, accept ",e.jsx("code",{children:"void*"})," and a function pointer for operations (like ",e.jsx("code",{children:"qsort"}),")."]})}),e.jsx("li",{children:e.jsxs("strong",{children:["Remember that ",e.jsx("code",{children:"char*"})," is the only pointer type that can alias any other type – useful for byte operations."]})})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(r,{note:"In our Barrackpore CNAT class, we often use the analogy: 'void* is like an empty box that can hold anything, but you need to label it before opening it.' Casting is that label. Void pointers are the foundation of generic programming in C. Practice by implementing a generic swap function – it's a small but powerful exercise that solidifies the concept."})}),e.jsx("style",{children:`
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
      `})]});export{g as default};
