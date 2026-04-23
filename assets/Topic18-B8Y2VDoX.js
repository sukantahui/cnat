import{j as e}from"./index-CEi3MejZ.js";import{T as s}from"./TeacherSukantaHui-CUBiDJUj.js";import{E as r}from"./EditableCCodeBlock-B9uAPyfW.js";import"./git-branch-DDFFUd5U.js";import"./index-DGMSD45Y.js";import"./file-code-IbumbsCL.js";import"./type-CHzqVR_S.js";import"./refresh-cw-DZh_673z.js";import"./copy-CUN0BOtx.js";import"./download-CECieF2h.js";const t=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    // 1. Dereferencing NULL\r
    int *p = NULL;\r
    // *p = 5;   // Uncomment to cause segfault\r
\r
    // 2. Out-of-bounds array access\r
    int arr[5];\r
    // arr[10] = 42;   // May segfault or corrupt\r
\r
    // 3. Use-after-free\r
    int *q = malloc(sizeof(int));\r
    *q = 10;\r
    free(q);\r
    // *q = 20;   // Uncomment: segfault or undefined\r
\r
    // 4. Modifying string literal\r
    char *s = "Hello";\r
    // s[0] = 'h';   // Segfault (read-only memory)\r
\r
    // 5. Stack overflow (deep recursion)\r
    // void recurse() { recurse(); } // Uncomment call to cause overflow\r
\r
    printf("If you see this, no segfault occurred (yet).\\n");\r
    return 0;\r
}`,a=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
int main() {\r
    // 1. Check for NULL after malloc\r
    int *p = malloc(sizeof(int));\r
    if (p == NULL) {\r
        printf("Memory allocation failed\\n");\r
        return 1;\r
    }\r
    *p = 5;\r
    free(p);\r
    p = NULL;   // set to NULL to avoid use-after-free\r
\r
    // 2. Bounds checking\r
    int arr[5] = {1,2,3,4,5};\r
    int index = 10;\r
    if (index >= 0 && index < 5) {\r
        arr[index] = 99;   // safe\r
    } else {\r
        printf("Index out of bounds\\n");\r
    }\r
\r
    // 3. Use a modifiable array for strings\r
    char str[] = "Hello";\r
    str[0] = 'h';   // safe, because str is a modifiable array\r
\r
    // 4. Guard against recursion depth\r
    // Use iterative solution instead of deep recursion\r
\r
    // 5. Check function arguments\r
    void safePrint(int *ptr) {\r
        if (ptr != NULL) {\r
            printf("%d\\n", *ptr);\r
        }\r
    }\r
    int x = 42;\r
    safePrint(&x);\r
    safePrint(NULL);   // safe, won't segfault\r
\r
    return 0;\r
}`,u=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Segmentation Fault Basics"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["A ",e.jsx("strong",{children:"segmentation fault"}),` (segfault) occurs when a program tries to access memory it doesn't have permission to use. It's the operating system's way of saying: "You stepped out of bounds!" Understanding why segfaults happen is the first step to preventing them.`]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"💥 Dereferencing NULL"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`int *p = NULL;
*p = 5;   // Segfault (trying to write to address 0)`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"NULL points to address 0, which is protected by the OS. This is one of the most common segfaults."})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📦 Accessing Freed Memory"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`int *p = malloc(10);
free(p);
*p = 5;   // Use-after-free → segfault or corruption`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Memory may be returned to the OS or reused, causing invalid access."})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📏 Buffer Overflow"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`int arr[5];
arr[10] = 42;   // Out-of-bounds → may segfault`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Accessing memory beyond array bounds can corrupt other data or crash."})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📝 Writing to Read‑Only Memory"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`char *s = "Hello";
s[0] = 'h';   // String literal in read-only section → segfault`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Modifying string literals or other read‑only data triggers a segfault."})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"What Happens on a Segfault"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"500",height:"200",viewBox:"0 0 500 200",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"30",y:"20",width:"440",height:"140",fill:"none",stroke:"currentColor",strokeWidth:"1"}),e.jsx("text",{x:"250",y:"15",textAnchor:"middle",fontSize:"12",children:"Process Memory"}),e.jsx("rect",{x:"50",y:"40",width:"100",height:"30",fill:"#10B981",fillOpacity:"0.3",stroke:"#10B981"}),e.jsx("text",{x:"100",y:"60",textAnchor:"middle",fontSize:"10",children:"Code (r-x)"}),e.jsx("rect",{x:"50",y:"80",width:"100",height:"30",fill:"#3B82F6",fillOpacity:"0.3",stroke:"#3B82F6"}),e.jsx("text",{x:"100",y:"100",textAnchor:"middle",fontSize:"10",children:"Data (rw-)"}),e.jsx("rect",{x:"50",y:"120",width:"100",height:"30",fill:"#F59E0B",fillOpacity:"0.3",stroke:"#F59E0B"}),e.jsx("text",{x:"100",y:"140",textAnchor:"middle",fontSize:"10",children:"Heap (rw-)"}),e.jsx("rect",{x:"350",y:"40",width:"100",height:"80",fill:"#EF4444",fillOpacity:"0.3",stroke:"#EF4444"}),e.jsx("text",{x:"400",y:"70",textAnchor:"middle",fontSize:"10",children:"Stack (rw-)"}),e.jsx("text",{x:"400",y:"100",textAnchor:"middle",fontSize:"8",children:"(grows down)"}),e.jsx("path",{d:"M200 160 L200 110",stroke:"#EF4444",strokeWidth:"2",strokeDasharray:"4"}),e.jsx("text",{x:"210",y:"135",fill:"#EF4444",fontSize:"11",children:"Invalid access →"}),e.jsx("rect",{x:"180",y:"165",width:"120",height:"25",fill:"#EF4444",fillOpacity:"0.2",stroke:"#EF4444"}),e.jsx("text",{x:"240",y:"183",textAnchor:"middle",fill:"#EF4444",fontSize:"10",children:"Segmentation Fault (SIGSEGV)"})]})}),e.jsx("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:"When a program touches memory it isn't allowed to, the OS kills it with a segfault."})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔍 How the OS Handles Memory Access"}),e.jsxs("p",{className:"leading-relaxed",children:["The OS gives each process a virtual address space. Some addresses are unmapped (like 0x0) or have protection bits (read‑only). When the CPU tries to access an invalid address, it raises a page fault, and the OS sends the ",e.jsx("code",{children:"SIGSEGV"})," signal, which typically terminates the program."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`$ ./myprogram
Segmentation fault (core dumped)`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["Core dumps can be used to debug with ",e.jsx("code",{children:"gdb"}),"."]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🐞 Debugging Segmentation Faults"}),e.jsx("p",{className:"leading-relaxed",children:"Use a debugger (gdb) or tools like Valgrind to pinpoint the exact line causing the fault."}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`gcc -g program.c -o program
gdb ./program
(gdb) run
(gdb) backtrace   # see where it crashed`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Ritaja"})," used ",e.jsx("code",{children:"gdb"})," to trace a segfault back to a NULL pointer dereference after a failed ",e.jsx("code",{children:"malloc"}),"."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 See Segfaults (Carefully!)"}),e.jsx(r,{title:"Example 1: Common Segfault Scenarios",initialCode:t}),e.jsx(r,{title:"Example 2: Safe Practices to Avoid Segfaults",initialCode:a})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring NULL checks:"})," ",e.jsx("code",{children:"malloc"})," can return NULL; dereferencing it causes segfault."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Off‑by‑one errors:"})," Accessing ",e.jsx("code",{children:"arr[size]"})," instead of ",e.jsx("code",{children:"arr[size-1]"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use‑after‑free:"})," Continuing to use a pointer after freeing it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stack overflow:"})," Deep recursion or large local arrays can overflow the stack, leading to segfault."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming a segfault always gives a core dump:"})," May need to set limits (",e.jsx("code",{children:"ulimit -c unlimited"}),")."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Always check pointers before dereferencing: ",e.jsx("code",{children:"if (ptr != NULL) *ptr = value;"}),"."]}),e.jsxs("li",{children:["After ",e.jsx("code",{children:"free()"}),", set the pointer to ",e.jsx("code",{children:"NULL"}),"."]}),e.jsx("li",{children:"Use bounds checking when accessing arrays (e.g., keep track of size)."}),e.jsxs("li",{children:["Compile with ",e.jsx("code",{children:"-Wall -Wextra"})," to catch warnings that may indicate potential segfaults."]}),e.jsxs("li",{children:["Run programs with ",e.jsx("code",{children:"valgrind"})," or ",e.jsx("code",{children:"AddressSanitizer"})," during development."]})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsx("li",{children:"✅ Understand what a segmentation fault is."}),e.jsx("li",{children:"✅ Can identify common causes (NULL, out‑of‑bounds, use‑after‑free)."}),e.jsxs("li",{children:["✅ Knows how to use ",e.jsx("code",{children:"gdb"})," or ",e.jsx("code",{children:"valgrind"})," to find the source."]}),e.jsx("li",{children:"✅ Can write code that avoids these pitfalls."})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsx("li",{children:"Why does dereferencing a NULL pointer always crash, but a wild pointer might not?"}),e.jsx("li",{children:"Observe carefully: In the segfault examples, which lines are commented out? Uncomment them and see what happens."}),e.jsxs("li",{children:["Try using ",e.jsx("code",{children:"gdb"})," to examine the state at the moment of crash."]})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Enable core dumps:"})," ",e.jsx("code",{children:"ulimit -c unlimited"}),", then use ",e.jsx("code",{children:"gdb program core"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"assert"})," to catch invalid states early:"]})," ",e.jsx("code",{children:"assert(ptr != NULL);"}),"."]}),e.jsx("li",{children:e.jsxs("strong",{children:["Compile with ",e.jsx("code",{children:"-fsanitize=address"})," to get precise error messages for memory issues."]})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep your code modular:"})," Isolate risky pointer operations into well‑tested functions."]})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(s,{note:"Segmentation faults are your program's way of telling you something went wrong with memory. Don't fear them – they are your debugging friends. In our Barrackpore CNAT class, we always run code with Valgrind and AddressSanitizer to catch these early. Remember: a NULL pointer dereference is a clear bug; a wild pointer dereference is a time bomb. Always initialize and check pointers. And when you get a segfault, don't just re‑run – debug it!"})}),e.jsx("style",{children:`
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
