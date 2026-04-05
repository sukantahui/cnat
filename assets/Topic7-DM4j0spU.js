import{j as e}from"./index-CiucDjKk.js";import{c as n}from"./clsx-B-dksMZM.js";import{T as i}from"./TeacherSukantaHui-lXqZmGBe.js";import{E as t}from"./EditableCCodeBlock-B-NaH-7Y.js";import"./git-branch-Dyq3Dyp2.js";import"./index-CpCb3E_X.js";import"./file-code-BnWMtMm-.js";import"./type-COTgqaDv.js";import"./refresh-cw-V8JttSZQ.js";import"./copy-CGs2rQAh.js";import"./download-D8pjhHSm.js";const a=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *ptr = (int*)malloc(sizeof(int));\r
    if (!ptr) return 1;\r
\r
    *ptr = 42;\r
    printf("Before free: %d\\n", *ptr);\r
\r
    free(ptr);\r
\r
    // Dangling pointer: ptr still points to freed memory\r
    printf("After free (danger): %d\\n", *ptr); // Undefined behavior!\r
\r
    return 0;\r
}`,l=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *ptr = (int*)malloc(sizeof(int));\r
    if (!ptr) return 1;\r
\r
    *ptr = 42;\r
    printf("Value: %d\\n", *ptr);\r
\r
    free(ptr);\r
    ptr = NULL;  // Prevents accidental reuse\r
\r
    // Now checking for NULL before use avoids undefined behavior\r
    if (ptr != NULL) {\r
        printf("Still valid: %d\\n", *ptr);\r
    } else {\r
        printf("Pointer is NULL, safe\\n");\r
    }\r
\r
    return 0;\r
}`,o=`#include <stdio.h>\r
\r
// BAD: returns pointer to local variable (stack)\r
int* badFunction() {\r
    int local = 100;\r
    return &local; // Dangling pointer as soon as function returns\r
}\r
\r
// GOOD: returns pointer to heap memory (caller must free)\r
int* goodFunction() {\r
    int *ptr = (int*)malloc(sizeof(int));\r
    if (ptr) *ptr = 200;\r
    return ptr;\r
}\r
\r
int main() {\r
    int *bad = badFunction();\r
    // Using bad is dangerous — undefined behavior\r
    printf("Bad value: %d\\n", *bad); // May crash or print garbage\r
\r
    int *good = goodFunction();\r
    if (good) {\r
        printf("Good value: %d\\n", *good);\r
        free(good);\r
        good = NULL;\r
    }\r
    return 0;\r
}`,d=`
  @keyframes fadeSlideUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .animate-fade-slide-up {
      animation: fadeSlideUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-fade-slide-up {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,N=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms","1100ms"],s=()=>n("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:d}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:s(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Dangling Pointers After free"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"The phantom pointer that points to nowhere — understanding and preventing this dangerous bug."})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"What is a Dangling Pointer?"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["A ",e.jsx("strong",{children:"dangling pointer"}),' is a pointer that continues to hold the address of memory that has already been freed (deallocated). The pointer still "points" somewhere, but the memory it refers to is no longer valid. Accessing it leads to ',e.jsx("strong",{children:"undefined behavior"}),"."]}),e.jsx("p",{className:"leading-relaxed",children:"Dangling pointers are among the most insidious bugs in C because they may work sometimes, crash unpredictably, or cause silent data corruption."})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💀 Why Dangling Pointers Are Dangerous"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"💥 Crashes"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"The most common outcome: segmentation fault or access violation when you try to use freed memory."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔁 Silent Corruption"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"If the memory has been reallocated to another part of the program, modifying it corrupts unrelated data."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🐞 Heisenbugs"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"Bugs that disappear when you try to debug them — because the memory layout changes under the debugger."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔒 Security Vulnerabilities"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"Use‑after‑free can be exploited to execute arbitrary code or leak sensitive information."})]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"🛡️ How to Prevent Dangling Pointers"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"✔️ Set pointer to NULL after free:"})," ",e.jsx("code",{children:"free(ptr); ptr = NULL;"})," — subsequent dereference will cause a clean crash (segfault) rather than silent corruption."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"✔️ Avoid returning pointers to local (stack) variables:"})," They become invalid as soon as the function returns."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"✔️ Use copies when necessary:"})," If you need to keep a value after freeing, copy it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"✔️ Design clear ownership:"})," Document which function is responsible for freeing memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"✔️ Use static analysis tools:"})," Valgrind, AddressSanitizer can detect use‑after‑free."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"✔️ In C++, use smart pointers:"})," ",e.jsx("code",{children:"std::unique_ptr"}),", ",e.jsx("code",{children:"std::shared_ptr"})," automate lifetime."]})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ Visualizing Dangling Pointers"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 280",className:"w-full h-auto","aria-label":"Dangling pointer diagram",children:[e.jsx("rect",{width:"800",height:"280",fill:"transparent"}),e.jsx("text",{x:"50",y:"30",fill:"currentColor",className:"text-sm",children:"1. Before free:"}),e.jsx("rect",{x:"50",y:"50",width:"200",height:"50",fill:"rgba(59,130,246,0.2)",stroke:"#3b82f6",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"60",y:"80",fill:"currentColor",className:"text-xs",children:"Heap block (valid)"}),e.jsx("line",{x1:"270",y1:"75",x2:"350",y2:"75",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"290",y:"70",fill:"currentColor",className:"text-xs",children:"ptr"}),e.jsx("circle",{cx:"360",cy:"75",r:"12",fill:"rgba(59,130,246,0.2)",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"355",y:"80",fill:"currentColor",className:"text-xs",children:"ptr"}),e.jsx("text",{x:"50",y:"150",fill:"currentColor",className:"text-sm",children:"2. After free(ptr):"}),e.jsx("rect",{x:"50",y:"170",width:"200",height:"50",fill:"rgba(239,68,68,0.2)",stroke:"#ef4444",strokeWidth:"2",rx:"4",strokeDasharray:"5 3"}),e.jsx("text",{x:"60",y:"200",fill:"#ef4444",className:"text-xs",children:"Freed block (invalid)"}),e.jsx("line",{x1:"270",y1:"195",x2:"350",y2:"195",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#arrowRed)",strokeDasharray:"5 3"}),e.jsx("text",{x:"290",y:"190",fill:"#ef4444",className:"text-xs",children:"ptr still points here!"}),e.jsx("circle",{cx:"360",cy:"195",r:"12",fill:"rgba(239,68,68,0.2)",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"355",y:"200",fill:"#ef4444",className:"text-xs",children:"ptr"}),e.jsx("text",{x:"420",y:"195",fill:"#ef4444",className:"text-xs",children:"DANGLING"}),e.jsx("text",{x:"50",y:"250",fill:"currentColor",className:"text-sm",children:"3. Prevention: set ptr = NULL after free"}),e.jsx("line",{x1:"50",y1:"270",x2:"750",y2:"270",stroke:"#22c55e",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("text",{x:"60",y:"270",fill:"#22c55e",className:"text-xs",children:"free(ptr); ptr = NULL; → safe, dereference will crash cleanly"}),e.jsxs("defs",{children:[e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#3b82f6"})}),e.jsx("marker",{id:"arrowRed",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#ef4444"})})]})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{title:"Example 1: Dangling pointer after free",initialCode:a}),e.jsx(t,{title:"Example 2: Preventing with NULL after free",initialCode:l}),e.jsx(t,{title:"Example 3: Returning pointer to local variable (dangling)",initialCode:o})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to set pointer to NULL after free:"})," Leads to accidental reuse later."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming freed memory is immediately reused:"})," It might not be, hiding bugs until later."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning address of local variable:"})," The stack frame is gone, but the pointer is still used."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using the same pointer after free in a different function:"})," Especially when pointers are passed around."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not checking if a pointer is NULL before use:"})," Even after setting to NULL, always check."]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ Immediately after ",e.jsx("code",{children:"free"}),", set the pointer to ",e.jsx("code",{children:"NULL"}),"."]}),e.jsx("li",{children:"✔️ Avoid returning pointers to local variables; allocate on heap if data must outlive the function."}),e.jsxs("li",{children:["✔️ Use a consistent naming convention to indicate ownership (e.g., ",e.jsx("code",{children:"owner_ptr"}),", ",e.jsx("code",{children:"view_ptr"}),")."]}),e.jsx("li",{children:"✔️ In functions that accept pointers, document whether they expect ownership or not."}),e.jsx("li",{children:"✔️ Use tools like Valgrind and AddressSanitizer regularly to catch dangling pointer bugs."})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"☐ I understand what a dangling pointer is and why it's dangerous."}),e.jsxs("li",{children:["☐ I always set freed pointers to ",e.jsx("code",{children:"NULL"}),"."]}),e.jsx("li",{children:"☐ I never return pointers to local stack variables."}),e.jsxs("li",{children:["☐ I check pointers for ",e.jsx("code",{children:"NULL"})," before dereferencing when possible."]}),e.jsx("li",{children:"☐ I use tools to detect use‑after‑free."})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Observe carefully..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"In the dangling example, what happens if you use the pointer after free? Does it crash or give wrong values?"}),e.jsxs("li",{children:["Try to compile with AddressSanitizer (",e.jsx("code",{children:"-fsanitize=address"}),") and see how it reports the error."]}),e.jsx("li",{children:"What would happen if you free the pointer, then allocate new memory, and the new memory gets the same address? How would that affect the dangling pointer?"})]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Use ",e.jsx("code",{children:"valgrind --tool=memcheck"})," to find use‑after‑free. It's a lifesaver."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Resource management:"}),' In C, use the "goto cleanup" pattern to ensure freed pointers are set to NULL in error paths.']}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 RAII in C++:"})," If you switch to C++, use ",e.jsx("code",{children:"std::unique_ptr"})," to automatically manage lifetime."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Code review:"})," Always double‑check that every ",e.jsx("code",{children:"free"})," is followed by ",e.jsx("code",{children:"ptr = NULL"})," (or the pointer goes out of scope)."]})]})]}),e.jsx(i,{note:"A dangling pointer is like a door key that still fits the lock even after the lock has been removed. It looks like it should work, but it leads to chaos. The simplest and most effective defense: after free, set the pointer to NULL. This turns a subtle corruption into a clean crash, which is far easier to debug."})]})]})};export{N as default};
