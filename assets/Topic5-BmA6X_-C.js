import{j as e}from"./index-BQNsLvl4.js";import{c as l}from"./clsx-B-dksMZM.js";import{T as n}from"./TeacherSukantaHui-CFimZ8aE.js";import{E as s}from"./EditableCCodeBlock-B53KPosE.js";import"./index-Bf_FrdBe.js";import"./createLucideIcon-DfWMkJeo.js";import"./file-code-Da2V0TW7.js";import"./type-B3clx7CX.js";import"./sparkles-Dr_Q3gQ9.js";import"./refresh-cw-DeSTVkrw.js";import"./copy-ggF1ebug.js";import"./download-DAPiigzn.js";const t=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int capacity = 4;\r
    int size = 0;\r
    int *arr = malloc(capacity * sizeof(int));\r
    if (!arr) return 1;\r
\r
    int input;\r
    printf("Enter numbers (0 to stop):\\n");\r
    while (1) {\r
        scanf("%d", &input);\r
        if (input == 0) break;\r
\r
        if (size == capacity) {\r
            capacity *= 2;\r
            int *temp = realloc(arr, capacity * sizeof(int));\r
            if (!temp) {\r
                printf("Reallocation failed!\\n");\r
                free(arr);\r
                return 1;\r
            }\r
            arr = temp;\r
        }\r
        arr[size++] = input;\r
    }\r
\r
    printf("You entered: ");\r
    for (int i = 0; i < size; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("\\n");\r
\r
    free(arr);\r
    return 0;\r
}`,a=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *big = malloc(10000 * sizeof(int));\r
    if (!big) return 1;\r
\r
    // Use only a few elements\r
    for (int i = 0; i < 100; i++) {\r
        big[i] = i;\r
    }\r
\r
    // Shrink to exactly the needed size\r
    int *temp = realloc(big, 100 * sizeof(int));\r
    if (!temp) {\r
        printf("Shrink failed, but original big still valid\\n");\r
        free(big);\r
        return 1;\r
    }\r
    big = temp;\r
\r
    printf("Shrunk to 100 ints\\n");\r
    free(big);\r
    return 0;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *ptr = malloc(100 * sizeof(int));\r
    if (!ptr) return 1;\r
\r
    // Try to allocate a huge amount (likely fails)\r
    int *new_ptr = realloc(ptr, 1024 * 1024 * 1024); // 1 GB\r
    if (new_ptr == NULL) {\r
        printf("Reallocation failed. Original pointer remains valid.\\n");\r
        // Do something with original ptr, or free it\r
        free(ptr);\r
        return 1;\r
    }\r
\r
    // On success, use new_ptr\r
    ptr = new_ptr;\r
    printf("Reallocation succeeded!\\n");\r
    free(ptr);\r
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
`,w=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms","1100ms"],i=()=>l("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:d}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:i(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Resizing Memory with realloc"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"Growing and shrinking heap memory dynamically — the Swiss Army knife of dynamic memory."})]}),e.jsxs("section",{className:i(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"When Static Size Isn't Enough"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["In real‑world programs, you often don't know the final size of a data structure at the time of allocation. ",e.jsx("code",{children:"realloc()"})," lets you resize an existing heap block — either to make it larger (to accommodate more data) or smaller (to release unused memory)."]}),e.jsx("p",{className:"leading-relaxed",children:"It's the cornerstone of dynamic arrays, expandable buffers, and string builders in C."})]}),e.jsxs("section",{className:i(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"📜 realloc — Prototype & Behaviour"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("div",{className:"font-mono text-sm mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded",children:"void* realloc(void *ptr, size_t new_size);"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Change the size of a previously allocated memory block."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parameters:"})," ",e.jsx("code",{children:"ptr"})," – pointer to previously allocated memory (or ",e.jsx("code",{children:"NULL"}),"), ",e.jsx("code",{children:"new_size"})," – new size in bytes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return value:"})," Pointer to the resized block (may be the same as ",e.jsx("code",{children:"ptr"})," or a new address). Returns ",e.jsx("code",{children:"NULL"})," on failure; the original block remains unchanged."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"If ptr is NULL:"})," Behaves like ",e.jsx("code",{children:"malloc(new_size)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"If new_size is 0:"})," Behaves like ",e.jsx("code",{children:"free(ptr)"})," and returns ",e.jsx("code",{children:"NULL"})," (implementation‑defined, avoid)."]})]})]})]}),e.jsxs("section",{className:i(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"📈 Growing a Block"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsxs("p",{className:"leading-relaxed mb-3",children:["When you need more space, ",e.jsx("code",{children:"realloc"})," attempts to expand the existing block. If there's enough contiguous memory after it, the same pointer is returned. Otherwise, a new larger block is allocated, the contents are copied, and the old block is freed."]}),e.jsx("div",{className:"mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"💡 Important:"})," Always store the return value in a temporary pointer. If ",e.jsx("code",{children:"realloc"})," fails, it returns ",e.jsx("code",{children:"NULL"})," but the original block is still valid. Using the original pointer directly would cause a memory leak."]})})]})]}),e.jsxs("section",{className:i(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-yellow-500 pl-4 mb-4",children:"📉 Shrinking a Block"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsxs("p",{className:"leading-relaxed mb-3",children:["You can also shrink a block to release unused memory. ",e.jsx("code",{children:"realloc"})," may or may not move the block when shrinking; it's implementation‑dependent. The contents of the new block are preserved up to the smaller size, and the extra bytes are freed."]}),e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"⚠️ Caution:"})," Shrinking does not guarantee that memory is returned to the OS; it might just mark the extra space as free within the heap."]})})]})]}),e.jsxs("section",{className:i(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ How realloc Works"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 320",className:"w-full h-auto","aria-label":"realloc diagram",children:[e.jsx("rect",{width:"800",height:"320",fill:"transparent"}),e.jsx("rect",{x:"50",y:"40",width:"200",height:"50",fill:"rgba(59,130,246,0.2)",stroke:"#3b82f6",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"60",y:"70",fill:"currentColor",className:"text-xs",children:"Original block (ptr)"}),e.jsx("rect",{x:"300",y:"40",width:"300",height:"50",fill:"rgba(34,197,94,0.2)",stroke:"#22c55e",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"310",y:"70",fill:"currentColor",className:"text-xs",children:"Expanded (same address) – if space after is free"}),e.jsx("line",{x1:"250",y1:"65",x2:"300",y2:"65",stroke:"#22c55e",strokeWidth:"2",markerEnd:"url(#arrowGreen)"}),e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowGreen",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#22c55e"})}),e.jsx("marker",{id:"arrowPurple",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#a855f7"})})]}),e.jsx("rect",{x:"50",y:"140",width:"200",height:"50",fill:"rgba(59,130,246,0.2)",stroke:"#3b82f6",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"60",y:"170",fill:"currentColor",className:"text-xs",children:"Original block (ptr)"}),e.jsx("rect",{x:"450",y:"140",width:"300",height:"50",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"460",y:"170",fill:"currentColor",className:"text-xs",children:"New block (contents copied, old freed)"}),e.jsx("line",{x1:"250",y1:"165",x2:"450",y2:"165",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrowPurple)",strokeDasharray:"5 3"}),e.jsx("rect",{x:"50",y:"240",width:"300",height:"50",fill:"rgba(59,130,246,0.2)",stroke:"#3b82f6",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"60",y:"270",fill:"currentColor",className:"text-xs",children:"Original block"}),e.jsx("rect",{x:"50",y:"240",width:"150",height:"50",fill:"rgba(245,158,11,0.2)",stroke:"#f59e0b",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"60",y:"270",fill:"currentColor",className:"text-xs",children:"Shrunk (size reduced)"}),e.jsx("text",{x:"220",y:"270",fill:"currentColor",className:"text-xs",children:"freed portion"})]})})]}),e.jsxs("section",{className:i(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{title:"Example 1: Growing a dynamic array",initialCode:t}),e.jsx(s,{title:"Example 2: Shrinking after use",initialCode:a}),e.jsx(s,{title:"Example 3: Proper error handling",initialCode:o})]})]}),e.jsxs("section",{className:i(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Not checking return value:"})," If ",e.jsx("code",{children:"realloc"})," fails and returns ",e.jsx("code",{children:"NULL"}),", the original pointer is lost, causing a memory leak."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using original pointer after failure:"})," The original pointer is still valid, but you must handle failure properly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming same address:"})," Code that relies on the pointer staying the same may break."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"realloc"})," with size 0:"]})," Behaviour is implementation‑defined (may act like ",e.jsx("code",{children:"free"})," but not guaranteed). Avoid."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shrinking and assuming memory is returned:"})," The freed space may not be given back to the OS, causing memory usage to stay high."]})]})]}),e.jsxs("section",{className:i(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ Always use a temporary pointer to store the result of ",e.jsx("code",{children:"realloc"})," and check for ",e.jsx("code",{children:"NULL"}),"."]}),e.jsxs("li",{children:["✔️ If ",e.jsx("code",{children:"realloc"})," fails, keep the original pointer and handle the error (e.g., log, retry, or exit)."]}),e.jsx("li",{children:"✔️ For growing dynamic arrays, double the capacity (or multiply by 1.5) to amortize the cost."}),e.jsx("li",{children:"✔️ When shrinking, consider if it's worth the overhead; often it's better to just keep the memory for future growth."}),e.jsxs("li",{children:["✔️ Use ",e.jsx("code",{children:"realloc(NULL, size)"})," as a portable way to allocate memory (though ",e.jsx("code",{children:"malloc"})," is clearer)."]})]})})]}),e.jsxs("section",{className:i(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{children:["☐ I know the prototype of ",e.jsx("code",{children:"realloc"})," and how it behaves."]}),e.jsxs("li",{children:["☐ I always store the return value in a temporary variable and check for ",e.jsx("code",{children:"NULL"}),"."]}),e.jsxs("li",{children:["☐ I understand that ",e.jsx("code",{children:"realloc"})," may move the block to a new address."]}),e.jsx("li",{children:"☐ I can grow and shrink a dynamic array correctly."}),e.jsx("li",{children:"☐ I handle allocation failures gracefully without leaking memory."})]})})]}),e.jsxs("section",{className:i(),style:{animationDelay:r[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Observe carefully..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsxs("li",{children:["In the growing example, what happens if you remove the temporary pointer and assign directly to ",e.jsx("code",{children:"arr"}),"?"]}),e.jsxs("li",{children:["Try to ",e.jsx("code",{children:"realloc"})," a very large size (e.g., beyond available memory) and see how ",e.jsx("code",{children:"NULL"})," is handled."]}),e.jsxs("li",{children:["What does ",e.jsx("code",{children:"realloc(ptr, 0)"})," do on your system? Is it consistent with the standard?"]})]})]})]}),e.jsxs("section",{className:i(),style:{animationDelay:r[11]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Use ",e.jsx("code",{children:"valgrind"})," to detect leaks when ",e.jsx("code",{children:"realloc"})," fails incorrectly."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Performance:"})," Avoid calling ",e.jsx("code",{children:"realloc"})," for every single element; use exponential growth strategy."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 Cleanup patterns:"})," When shrinking, you can use ",e.jsx("code",{children:"realloc"})," to match the exact needed size after building a collection."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Portability:"})," Don't rely on ",e.jsx("code",{children:"realloc"})," with ",e.jsx("code",{children:"size == 0"}),"; use explicit ",e.jsx("code",{children:"free"})," and set pointer to ",e.jsx("code",{children:"NULL"}),"."]})]})]}),e.jsx(n,{note:"realloc is a powerful tool, but with great power comes great responsibility. The golden rule: always use a temporary pointer to capture the return value. This simple habit prevents memory leaks and crashes. In interviews, they love to ask about realloc failure handling — master it!"})]})]})};export{w as default};
