import{j as e}from"./index-C8tfbTD8.js";import{T as n}from"./TeacherSukantaHui-C2tsAS37.js";import{E as r}from"./EditableCCodeBlock-0_Yux5OR.js";import"./git-branch-D1JBeaoB.js";import"./index-HicrMSGH.js";import"./file-code--LqktZ78.js";import"./type-Bi9GEJ3m.js";import"./refresh-cw-CMU7apYp.js";import"./copy-CxoiTVpg.js";import"./download-DO3hLbeb.js";const i=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int* getDangling() {\r
    int local = 42;\r
    return &local;  // returning address of local variable -> dangling\r
}\r
\r
int main() {\r
    // NULL pointer\r
    int *np = NULL;\r
    if (np != NULL) {\r
        *np = 5;   // safe check\r
    } else {\r
        printf("np is NULL, cannot use\\n");\r
    }\r
\r
    // Dangling pointer after free\r
    int *dp = malloc(sizeof(int));\r
    *dp = 10;\r
    printf("dp points to: %d\\n", *dp);\r
    free(dp);\r
    // dp is now dangling\r
    // *dp = 20;   // UNCOMMENT AT YOUR OWN RISK: undefined behavior\r
\r
    // Dangling pointer from function\r
    int *dangling = getDangling(); // dangling pointer\r
    // *dangling = 99; // UNDEFINED: local variable no longer exists\r
\r
    // Wild pointer\r
    int *wp;   // uninitialized\r
    // *wp = 100;   // extremely dangerous\r
\r
    printf("Demonstration complete.\\n");\r
    return 0;\r
}`,a=`#include <stdio.h>\r
\r
int main() {\r
    // Wild pointer: never initialized\r
    int *wild;\r
\r
    // Print its value (the random address)\r
    printf("Wild pointer contains: %p\\n", (void*)wild);\r
\r
    // Attempt to dereference (dangerous)\r
    // Uncommenting the next line will likely cause a segmentation fault\r
    // printf("Value at wild: %d\\n", *wild);\r
\r
    // Proper initialization\r
    int x = 100;\r
    int *safe = &x;\r
    printf("Safe pointer: %p, value: %d\\n", (void*)safe, *safe);\r
\r
    return 0;\r
}`,p=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"NULL, Dangling & Wild Pointers"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["Not all pointers are created equal. Understanding the three dangerous states of pointers — ",e.jsx("strong",{className:"text-red-500",children:"wild"}),", ",e.jsx("strong",{className:"text-yellow-500",children:"dangling"}),", and the safe sentinel ",e.jsx("strong",{className:"text-blue-500",children:"NULL"})," — is essential for writing robust C programs that don't crash or corrupt memory."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-3 gap-4",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold mb-3",children:"NULL"}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"NULL Pointer"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["A pointer explicitly set to ",e.jsx("code",{children:"NULL"})," (address 0). Dereferencing causes a predictable crash. It's the safe default."]}),e.jsx("pre",{className:"mt-2 text-xs bg-gray-800 text-gray-100 p-2 rounded",children:e.jsx("code",{children:"int *p = NULL; if(p != NULL) *p = 5;"})})]}),e.jsxs("div",{className:"group rounded-xl p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center text-yellow-600 dark:text-yellow-400 text-xl font-bold mb-3",children:"⚠️"}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Dangling Pointer"}),e.jsx("p",{className:"text-sm leading-relaxed",children:"A pointer that points to memory that has been freed (or to a local variable that went out of scope). Dereferencing leads to undefined behavior."}),e.jsx("pre",{className:"mt-2 text-xs bg-gray-800 text-gray-100 p-2 rounded",children:e.jsx("code",{children:"int *p = malloc(...); free(p); // p is now dangling"})})]}),e.jsxs("div",{className:"group rounded-xl p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 text-xl font-bold mb-3",children:"💀"}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Wild Pointer"}),e.jsx("p",{className:"text-sm leading-relaxed",children:"An uninitialized pointer that contains a random address. Dereferencing is extremely dangerous and unpredictable."}),e.jsx("pre",{className:"mt-2 text-xs bg-gray-800 text-gray-100 p-2 rounded",children:e.jsx("code",{children:"int *p;   // wild! *p = 10;  // may crash or corrupt"})})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"What They Point To"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"500",height:"180",viewBox:"0 0 500 180",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"30",y:"20",width:"120",height:"50",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6"}),e.jsx("text",{x:"90",y:"45",textAnchor:"middle",fill:"#3B82F6",fontSize:"12",children:"NULL"}),e.jsx("text",{x:"90",y:"65",textAnchor:"middle",fontSize:"9",children:"address 0"}),e.jsx("text",{x:"90",y:"85",textAnchor:"middle",fontSize:"9",children:"(invalid)"}),e.jsx("line",{x1:"150",y1:"45",x2:"180",y2:"45",stroke:"#3B82F6",strokeWidth:"1.5",markerEnd:"url(#arrowBlue)"}),e.jsx("rect",{x:"200",y:"20",width:"120",height:"50",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B"}),e.jsx("text",{x:"260",y:"45",textAnchor:"middle",fill:"#F59E0B",fontSize:"12",children:"Freed memory"}),e.jsx("text",{x:"260",y:"65",textAnchor:"middle",fontSize:"9",children:"(may be reused)"}),e.jsx("line",{x1:"320",y1:"45",x2:"350",y2:"45",stroke:"#F59E0B",strokeWidth:"1.5",markerEnd:"url(#arrowOrange)"}),e.jsx("rect",{x:"370",y:"20",width:"100",height:"50",fill:"#EF4444",fillOpacity:"0.2",stroke:"#EF4444"}),e.jsx("text",{x:"420",y:"45",textAnchor:"middle",fill:"#EF4444",fontSize:"12",children:"Random address"}),e.jsx("text",{x:"420",y:"65",textAnchor:"middle",fontSize:"9",children:"(garbage)"}),e.jsx("line",{x1:"470",y1:"45",x2:"490",y2:"45",stroke:"#EF4444",strokeWidth:"1.5",markerEnd:"url(#arrowRed)"}),e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowBlue",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:e.jsx("polygon",{points:"0 0, 6 3, 0 6",fill:"#3B82F6"})}),e.jsx("marker",{id:"arrowOrange",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:e.jsx("polygon",{points:"0 0, 6 3, 0 6",fill:"#F59E0B"})}),e.jsx("marker",{id:"arrowRed",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:e.jsx("polygon",{points:"0 0, 6 3, 0 6",fill:"#EF4444"})})]})]})}),e.jsx("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:"NULL points to a known invalid address; dangling points to freed memory; wild points to an unpredictable address."})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📖 Dangling Pointers: The Hidden Danger"}),e.jsxs("p",{className:"leading-relaxed",children:["A dangling pointer arises when memory is deallocated but the pointer still holds the old address. This is especially common with heap memory after ",e.jsx("code",{children:"free()"})," or when returning the address of a local variable."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int* create() {
    int local = 10;
    return &local;   // returning address of stack variable
} // local destroyed, pointer becomes dangling

void example() {
    int *p = malloc(sizeof(int));
    free(p);
    // p is now dangling
}`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Debangshu"})," spent hours debugging a bug where a dangling pointer corrupted data after a ",e.jsx("code",{children:"free()"}),"."]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔍 Wild Pointers: The Silent Menace"}),e.jsx("p",{className:"leading-relaxed",children:"Wild pointers are the most insidious because their behaviour depends on whatever garbage value they hold. They may appear to work (if the random address happens to be writable), then crash later, or silently corrupt data."}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int *p;   // uninitialized
*p = 5;   // undefined behavior`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"The only cure is to always initialize pointers, either to NULL or a valid address."})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 Recognize & Avoid Them"}),e.jsx(r,{title:"Example 1: NULL, Dangling & Wild Pointers",initialCode:i}),e.jsx(r,{title:"Example 2: Wild Pointer Demonstration",initialCode:a})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using a pointer after free:"})," The pointer becomes dangling; still holds the old address but memory may be reused."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning address of a local variable:"})," Creates a dangling pointer as soon as the function returns."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming NULL is always defined:"})," Include proper headers (",e.jsx("code",{children:"<stddef.h>"})," or ",e.jsx("code",{children:"<stdio.h>"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not initializing pointers:"})," Leads to wild pointers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Double free:"})," Freeing memory that is already freed – can corrupt heap metadata."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Always initialize pointers: ",e.jsx("code",{children:"int *p = NULL;"})," or ",e.jsx("code",{children:"int *p = &some_var;"}),"."]}),e.jsxs("li",{children:["Set pointers to NULL immediately after freeing them: ",e.jsx("code",{children:"free(p); p = NULL;"}),"."]}),e.jsx("li",{children:"Avoid returning pointers to local stack variables; use dynamic allocation or pass a buffer."}),e.jsx("li",{children:"Check pointers for NULL before dereferencing (unless you are certain they are valid)."})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsx("li",{children:"✅ Can define NULL, dangling, and wild pointers."}),e.jsx("li",{children:"✅ Knows that NULL is a safe, invalid pointer."}),e.jsx("li",{children:"✅ Understands that dangling pointers occur after free or when a variable goes out of scope."}),e.jsx("li",{children:"✅ Knows that uninitialized pointers are wild."})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsx("li",{children:"What happens if you dereference a dangling pointer? Could it sometimes work?"}),e.jsx("li",{children:"Observe carefully: In the wild pointer demo, why does the output change each time?"}),e.jsx("li",{children:"Try modifying the dangling pointer example: after free, set the pointer to NULL and see what happens."})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"Valgrind"})," or ",e.jsx("code",{children:"AddressSanitizer"})," to detect use‑after‑free and wild pointer accesses."]})}),e.jsx("li",{children:e.jsx("strong",{children:"In production code, never leave a dangling pointer – set to NULL immediately after free."})}),e.jsx("li",{children:e.jsxs("strong",{children:["Use static analysis tools (like ",e.jsx("code",{children:"clang‑analyzer"}),") to catch uninitialized pointers."]})}),e.jsx("li",{children:e.jsxs("strong",{children:["When allocating memory, always check the return value of ",e.jsx("code",{children:"malloc"})," and handle NULL gracefully."]})})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(n,{note:"In our Barrackpore CNAT class, I tell students: 'A NULL pointer is a known enemy; a dangling pointer is a forgotten enemy; a wild pointer is a random enemy.' Always initialize pointers, and after freeing, set to NULL. This simple habit will eliminate many of the hardest bugs you'll ever encounter. Use tools like Valgrind – they will show you exactly where these issues hide."})}),e.jsx("style",{children:`
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
      `})]});export{p as default};
