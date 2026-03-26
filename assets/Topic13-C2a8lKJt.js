import{j as e}from"./index-C8tfbTD8.js";import{c as i}from"./clsx-B-dksMZM.js";import{T as a}from"./TeacherSukantaHui-C2tsAS37.js";import{E as l}from"./EditableCCodeBlock-0_Yux5OR.js";import"./git-branch-D1JBeaoB.js";import"./index-HicrMSGH.js";import"./file-code--LqktZ78.js";import"./type-Bi9GEJ3m.js";import"./refresh-cw-CMU7apYp.js";import"./copy-CxoiTVpg.js";import"./download-DO3hLbeb.js";const t=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *ptr = (int*)malloc(sizeof(int));\r
    if (ptr == NULL) {\r
        fprintf(stderr, "Error: Memory allocation failed!\\n");\r
        return EXIT_FAILURE;\r
    }\r
    *ptr = 42;\r
    printf("Value: %d\\n", *ptr);\r
    free(ptr);\r
    return EXIT_SUCCESS;\r
}`,n=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *a = NULL;\r
    int *b = NULL;\r
    int *c = NULL;\r
    int ret = EXIT_SUCCESS;\r
\r
    a = (int*)malloc(sizeof(int));\r
    if (!a) {\r
        fprintf(stderr, "Failed to allocate a\\n");\r
        ret = EXIT_FAILURE;\r
        goto cleanup;\r
    }\r
\r
    b = (int*)malloc(sizeof(int));\r
    if (!b) {\r
        fprintf(stderr, "Failed to allocate b\\n");\r
        ret = EXIT_FAILURE;\r
        goto cleanup;\r
    }\r
\r
    c = (int*)malloc(sizeof(int));\r
    if (!c) {\r
        fprintf(stderr, "Failed to allocate c\\n");\r
        ret = EXIT_FAILURE;\r
        goto cleanup;\r
    }\r
\r
    *a = 10; *b = 20; *c = 30;\r
    printf("%d %d %d\\n", *a, *b, *c);\r
\r
cleanup:\r
    free(a);\r
    free(b);\r
    free(c);\r
    return ret;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    // Try to allocate a huge block that likely fails\r
    int *big = (int*)malloc(1024 * 1024 * 1024); // 1 GB\r
    // BAD: No NULL check! The next line will crash.\r
    *big = 42;\r
    printf("%d\\n", *big);\r
    free(big);\r
    return 0;\r
}`,c=`
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
`,N=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms","1100ms"],s=()=>i("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:c}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:s(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Error Handling: Checking NULL After Allocation"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"The one check that can save your program from crashing — and why it's non‑negotiable."})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"Why NULL Checks Are Mandatory"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["Every dynamic allocation function (",e.jsx("code",{children:"malloc"}),", ",e.jsx("code",{children:"calloc"}),", ",e.jsx("code",{children:"realloc"}),") returns a pointer. On success, it points to usable memory. On failure, it returns ",e.jsx("code",{children:"NULL"}),". Failure can happen for many reasons: the system is out of memory, the request size is too large, or the heap is exhausted/fragmented."]}),e.jsxs("p",{className:"leading-relaxed",children:["Dereferencing a ",e.jsx("code",{children:"NULL"})," pointer causes ",e.jsx("strong",{children:"undefined behavior"})," — most often a segmentation fault that crashes your program. In embedded systems, it could cause a hard fault. A proper check is the only way to ensure your program can recover or fail gracefully."]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💥 When Does Allocation Return NULL?"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"⚠️ Out of Memory"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"The system has no more virtual memory to satisfy the request. This is common in resource‑constrained environments or when leaks accumulate."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"📏 Request Too Large"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"Even if total memory is available, a single request may exceed the allocator's maximum block size (e.g., trying to allocate several gigabytes on a 32‑bit system)."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🧩 Fragmentation"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"The heap may have enough total free space, but it's split into many small blocks, and no single block is large enough."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"📌 Zero‑Size Request"}),e.jsxs("p",{className:"mt-2 leading-relaxed",children:[e.jsx("code",{children:"malloc(0)"})," may return ",e.jsx("code",{children:"NULL"})," or a non‑NULL pointer that cannot be dereferenced. The standard says the behavior is implementation‑defined; always avoid it."]})]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"🛡️ Proper NULL Check Patterns"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium mb-2",children:"Single Allocation"}),e.jsx("div",{className:"font-mono text-sm p-3 bg-gray-100 dark:bg-gray-700 rounded mb-3",children:e.jsx("pre",{children:`    
    int *ptr = (int*)malloc(sizeof(int));<br/>
    if (ptr == NULL) {
        fprintf(stderr, "Allocation failed");
        return EXIT_FAILURE;<br/>
    }
    *ptr = 42;`})}),e.jsx("h3",{className:"text-xl font-medium mb-2 mt-4",children:"Multiple Allocations (Goto Cleanup)"}),e.jsxs("div",{className:"font-mono text-sm p-3 bg-gray-100 dark:bg-gray-700 rounded",children:["int *a = NULL, *b = NULL;",e.jsx("br",{}),"a = malloc(...);",e.jsx("br",{}),"if (!a) goto cleanup;",e.jsx("br",{}),"b = malloc(...);",e.jsx("br",{}),"if (!b) goto cleanup;",e.jsx("br",{}),"// use a and b",e.jsx("br",{}),"cleanup:",e.jsx("br",{}),"  free(a);",e.jsx("br",{}),"  free(b);",e.jsx("br",{}),"  return error_code;"]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"💡 Tip:"})," Always initialize pointers to ",e.jsx("code",{children:"NULL"})," so that ",e.jsx("code",{children:"free"})," is safe even if allocation fails."]})})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ NULL Check Flow"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 600 300",className:"w-full h-auto","aria-label":"NULL check flow chart",children:[e.jsx("rect",{width:"600",height:"300",fill:"transparent"}),e.jsx("rect",{x:"250",y:"20",width:"100",height:"30",fill:"rgba(59,130,246,0.2)",stroke:"#3b82f6",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"275",y:"40",fill:"currentColor",className:"text-xs",children:"malloc()"}),e.jsx("line",{x1:"300",y1:"50",x2:"300",y2:"80",stroke:"#6b7280",strokeWidth:"2"}),e.jsx("polygon",{points:"300,90 340,120 300,150 260,120",fill:"rgba(239,68,68,0.1)",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"275",y:"125",fill:"currentColor",className:"text-xs",children:"ptr == NULL?"}),e.jsx("line",{x1:"300",y1:"150",x2:"300",y2:"190",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("line",{x1:"340",y1:"120",x2:"400",y2:"120",stroke:"#22c55e",strokeWidth:"2"}),e.jsx("rect",{x:"230",y:"190",width:"140",height:"40",fill:"rgba(239,68,68,0.2)",stroke:"#ef4444",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"250",y:"215",fill:"currentColor",className:"text-xs",children:"Handle error (log, exit, etc.)"}),e.jsx("line",{x1:"300",y1:"230",x2:"300",y2:"270",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("rect",{x:"250",y:"270",width:"100",height:"25",fill:"rgba(239,68,68,0.2)",stroke:"#ef4444",strokeWidth:"1",rx:"4"}),e.jsx("text",{x:"270",y:"287",fill:"currentColor",className:"text-xs",children:"Return error"}),e.jsx("rect",{x:"410",y:"100",width:"140",height:"40",fill:"rgba(34,197,94,0.2)",stroke:"#22c55e",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"430",y:"125",fill:"currentColor",className:"text-xs",children:"Use pointer safely"}),e.jsx("line",{x1:"480",y1:"140",x2:"480",y2:"180",stroke:"#22c55e",strokeWidth:"2"}),e.jsx("rect",{x:"430",y:"180",width:"100",height:"25",fill:"rgba(34,197,94,0.2)",stroke:"#22c55e",strokeWidth:"1",rx:"4"}),e.jsx("text",{x:"455",y:"197",fill:"currentColor",className:"text-xs",children:"Continue"})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(l,{title:"Example 1: Basic NULL check",initialCode:t}),e.jsx(l,{title:"Example 2: Handling multiple allocations",initialCode:n}),e.jsx(l,{title:"Example 3: Missing check (dangerous)",initialCode:o})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Omitting the check:"})," Assuming allocation always succeeds leads to crashes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Checking after dereference:"})," ",e.jsx("code",{children:"*ptr = 42; if (!ptr) ..."})," – the dereference already crashed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not initializing pointers to NULL before cleanup:"})," Freeing uninitialized pointer is undefined."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring partial allocation failures:"})," After one allocation fails, you must free already allocated ones."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"ptr == NULL"})," but not handling it:"]})," Only logging and continuing is dangerous."]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ Always check every allocation return value against ",e.jsx("code",{children:"NULL"}),"."]}),e.jsxs("li",{children:["✔️ Initialize all pointer variables to ",e.jsx("code",{children:"NULL"})," so ",e.jsx("code",{children:"free"})," is safe."]}),e.jsx("li",{children:"✔️ Use a consistent error handling strategy: return error code, log, and clean up."}),e.jsxs("li",{children:["✔️ For multiple allocations, use a ",e.jsx("code",{children:"goto cleanup"})," pattern or a dedicated function to release resources."]}),e.jsxs("li",{children:["✔️ Document that functions returning heap pointers can return ",e.jsx("code",{children:"NULL"}),"; caller must check."]})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{children:["☐ I always check the return value of ",e.jsx("code",{children:"malloc"}),"/",e.jsx("code",{children:"calloc"}),"/",e.jsx("code",{children:"realloc"}),"."]}),e.jsx("li",{children:"☐ I know what to do when allocation fails (log, clean up, return error)."}),e.jsxs("li",{children:["☐ I never dereference a pointer before checking for ",e.jsx("code",{children:"NULL"}),"."]}),e.jsxs("li",{children:["☐ I initialize pointers to ",e.jsx("code",{children:"NULL"})," before using them in cleanup code."]}),e.jsxs("li",{children:["☐ I understand that ignoring ",e.jsx("code",{children:"NULL"})," can cause crashes or security vulnerabilities."]})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Observe carefully..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"In the missing check example, what would happen if you try to allocate a huge size?"}),e.jsx("li",{children:"How would you modify the multi-allocation example to also handle the case where the second allocation fails?"}),e.jsx("li",{children:"Why is it important to free already‑allocated memory if a later allocation fails?"})]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Use ",e.jsx("code",{children:"valgrind"})," to detect dereference of NULL? Actually, Valgrind will catch it as an invalid read/write. But better to prevent."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Defensive programming:"})," Wrap allocation in a macro that checks and aborts if allocation fails – but only in simple tools, not in libraries."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 RAII in C++:"})," If you switch to C++, use smart pointers (std::unique_ptr) that automatically handle NULL checks."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Code review:"})," Always look for missing NULL checks in code reviews; they are a frequent source of bugs."]})]})]}),e.jsx(a,{note:"Checking NULL after allocation is like checking the parachute before jumping – you don't skip it. I've seen students lose hours debugging segfaults that a simple 'if (!ptr)' would have prevented. Make it a reflex: after every allocation, immediately check and handle failure. Your future self will thank you."})]})]})};export{N as default};
