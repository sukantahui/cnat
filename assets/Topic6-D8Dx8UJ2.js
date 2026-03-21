import{j as e}from"./index-BQNsLvl4.js";import{c as l}from"./clsx-B-dksMZM.js";import{T as n}from"./TeacherSukantaHui-CFimZ8aE.js";import{E as t}from"./EditableCCodeBlock-B53KPosE.js";import"./index-Bf_FrdBe.js";import"./createLucideIcon-DfWMkJeo.js";import"./file-code-Da2V0TW7.js";import"./type-B3clx7CX.js";import"./sparkles-Dr_Q3gQ9.js";import"./refresh-cw-DeSTVkrw.js";import"./copy-ggF1ebug.js";import"./download-DAPiigzn.js";const i=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *ptr = (int*)malloc(sizeof(int));\r
    if (ptr == NULL) {\r
        printf("Allocation failed\\n");\r
        return 1;\r
    }\r
\r
    *ptr = 42;\r
    printf("Value: %d\\n", *ptr);\r
\r
    free(ptr);        // release memory\r
    // ptr is now dangling — do not use it!\r
    return 0;\r
}`,a=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *ptr = NULL;\r
\r
    // free(NULL) is safe and does nothing\r
    free(ptr);\r
    printf("free(NULL) executed safely\\n");\r
\r
    // Works even if the pointer is never allocated\r
    ptr = (int*)malloc(sizeof(int));\r
    if (ptr) {\r
        *ptr = 100;\r
        printf("Value: %d\\n", *ptr);\r
        free(ptr);\r
    }\r
\r
    // Setting to NULL after free is good practice\r
    ptr = NULL;\r
    free(ptr); // still safe\r
\r
    return 0;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *ptr = (int*)malloc(sizeof(int));\r
    if (!ptr) return 1;\r
\r
    *ptr = 123;\r
    printf("Value: %d\\n", *ptr);\r
\r
    free(ptr);\r
    // DO NOT DO THIS — double free leads to undefined behavior\r
    // free(ptr); // Uncommenting will likely crash or corrupt heap\r
\r
    // Instead, set pointer to NULL after free\r
    ptr = NULL;\r
    // Now free(ptr) is safe (does nothing)\r
    free(ptr);\r
\r
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
`,k=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms"],s=()=>l("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:d}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:s(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Releasing Memory with free"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"The art of giving back — why deallocation is just as important as allocation."})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"The Golden Rule: Every malloc Must Have a Free"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["In C, the programmer is responsible for memory management. When you allocate memory on the heap, you must eventually return it to the system using ",e.jsx("code",{children:"free()"}),". Failing to do so leads to",e.jsx("strong",{children:"memory leaks"})," — a gradual exhaustion of available memory that can crash your program or even the whole system."]}),e.jsxs("p",{className:"leading-relaxed",children:[e.jsx("code",{children:"free"})," tells the memory manager that the block is no longer needed, allowing it to be reused for future allocations. It's a simple function, but using it incorrectly can cause catastrophic bugs."]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"📜 free — Prototype & Behaviour"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("div",{className:"font-mono text-sm mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded",children:"void free(void *ptr);"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Deallocates memory previously allocated by ",e.jsx("code",{children:"malloc"}),", ",e.jsx("code",{children:"calloc"}),", or ",e.jsx("code",{children:"realloc"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parameter:"})," ",e.jsx("code",{children:"ptr"})," – pointer to the memory block to be freed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," ",e.jsx("code",{children:"void"})," (no return value)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"If ptr is NULL:"})," ",e.jsx("code",{children:"free(NULL)"})," does nothing and is safe (by standard)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"After free:"})," The pointer becomes a ",e.jsx("strong",{children:"dangling pointer"})," — using it leads to undefined behavior."]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"⚠️ Critical:"})," You must never free the same pointer twice (double free), free memory not obtained from the heap, or use freed memory."]})})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🚨 Why Deallocation Matters"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"📉 Memory Leaks"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"Each allocation that is not freed consumes memory. In long‑running programs (servers, GUIs, embedded devices), leaks accumulate until the system runs out of memory, causing crashes or slowdowns."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"⚡ Performance"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"Proper freeing allows memory to be reused, reducing the need for new allocations from the OS and improving cache locality."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔒 Stability"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"Forgetting to free leads to resource exhaustion. In embedded systems, this can brick devices."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"📦 Portability"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"Some environments (like real‑time OS) have limited heap; releasing memory correctly is mandatory."})]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ Visualizing Free"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 260",className:"w-full h-auto","aria-label":"free memory illustration",children:[e.jsx("rect",{width:"800",height:"260",fill:"transparent"}),e.jsx("rect",{x:"50",y:"30",width:"300",height:"100",fill:"rgba(59,130,246,0.1)",stroke:"#3b82f6",strokeWidth:"2",rx:"6"}),e.jsx("text",{x:"60",y:"55",fill:"currentColor",className:"text-sm",children:"Heap before free"}),e.jsx("rect",{x:"70",y:"70",width:"260",height:"40",fill:"rgba(59,130,246,0.2)",stroke:"#3b82f6",strokeWidth:"1"}),e.jsx("text",{x:"80",y:"95",fill:"currentColor",className:"text-xs",children:"Allocated block (ptr)"}),e.jsx("rect",{x:"450",y:"30",width:"300",height:"100",fill:"rgba(34,197,94,0.1)",stroke:"#22c55e",strokeWidth:"2",rx:"6"}),e.jsx("text",{x:"460",y:"55",fill:"currentColor",className:"text-sm",children:"Heap after free"}),e.jsx("rect",{x:"470",y:"70",width:"260",height:"40",fill:"rgba(34,197,94,0.2)",stroke:"#22c55e",strokeWidth:"1",strokeDasharray:"4 2"}),e.jsx("text",{x:"480",y:"95",fill:"currentColor",className:"text-xs",children:"Freed block (available for reuse)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowFree",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#22c55e"})})}),e.jsx("line",{x1:"350",y1:"80",x2:"450",y2:"80",stroke:"#22c55e",strokeWidth:"2",markerEnd:"url(#arrowFree)",strokeDasharray:"4 2",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"20",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"380",y:"70",fill:"#22c55e",className:"text-xs",children:"free(ptr)"}),e.jsx("rect",{x:"50",y:"170",width:"700",height:"50",fill:"rgba(239,68,68,0.1)",stroke:"#ef4444",strokeWidth:"2",rx:"6"}),e.jsx("text",{x:"60",y:"200",fill:"#ef4444",className:"text-sm",children:"⚠️ After free, ptr becomes a dangling pointer — do NOT dereference it!"})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{title:"Example 1: Simple malloc and free",initialCode:i}),e.jsx(t,{title:"Example 2: free(NULL) is safe",initialCode:a}),e.jsx(t,{title:"Example 3: Double free (danger!)",initialCode:o})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Double free:"})," Calling ",e.jsx("code",{children:"free"})," twice on the same pointer leads to undefined behavior (crash or corruption)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using after free:"})," Dereferencing a freed pointer (dangling pointer) can cause crashes or silent data corruption."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Freeing non‑heap memory:"})," Passing a pointer to stack or global variable to ",e.jsx("code",{children:"free"})," is undefined."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to free:"})," Memory leaks, especially in loops or long‑running functions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not setting pointer to NULL after free:"})," Leads to accidental reuse of freed memory."]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ Always pair every ",e.jsx("code",{children:"malloc"}),"/",e.jsx("code",{children:"calloc"}),"/",e.jsx("code",{children:"realloc"})," with a matching ",e.jsx("code",{children:"free"}),"."]}),e.jsxs("li",{children:["✔️ After freeing a pointer, set it to ",e.jsx("code",{children:"NULL"})," to prevent dangling references."]}),e.jsx("li",{children:"✔️ Free memory in the reverse order of allocation to reduce fragmentation."}),e.jsx("li",{children:"✔️ Use static analysis tools (like Valgrind) to detect leaks and double frees."}),e.jsx("li",{children:"✔️ In functions that allocate and return memory, document who is responsible for freeing."})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{children:["☐ I know that ",e.jsx("code",{children:"free(NULL)"})," is safe and does nothing."]}),e.jsxs("li",{children:["☐ I understand that after ",e.jsx("code",{children:"free"}),", the pointer becomes invalid."]}),e.jsxs("li",{children:["☐ I always set freed pointers to ",e.jsx("code",{children:"NULL"})," to avoid accidental reuse."]}),e.jsx("li",{children:"☐ I never double‑free."}),e.jsx("li",{children:"☐ I check for memory leaks using tools or careful design."})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Try changing this..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsxs("li",{children:["In the double free example, uncomment the second ",e.jsx("code",{children:"free"})," and see what happens."]}),e.jsxs("li",{children:["What happens if you call ",e.jsx("code",{children:"free"})," on a pointer that was allocated on the stack?"]}),e.jsx("li",{children:'Use Valgrind to detect leaks in the "simple_free" example after removing the free call.'})]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Use ",e.jsx("code",{children:"valgrind"})," with ",e.jsx("code",{children:"--leak-check=full"})," to find leaks and invalid frees."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Resource management:"}),' In C, adopt a "cleanup" label pattern (goto cleanup) to ensure free in error paths.']}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 RAII in C++:"})," If you switch to C++, use smart pointers to automate deallocation."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Code style:"})," Keep allocation and deallocation in the same scope when possible to make pairing obvious."]})]})]}),e.jsx(n,{note:"Think of free as returning library books: you must bring them back so others can use them. Forgetting leads to clutter (memory leaks). Setting the pointer to NULL after free is like removing the bookmark so you don't accidentally try to read a returned book. In exams, double free and use-after-free are classic pitfalls — master them!"})]})]})};export{k as default};
